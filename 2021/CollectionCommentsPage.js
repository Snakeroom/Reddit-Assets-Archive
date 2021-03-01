// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.6a157f9fe250d684c403.js
// Retrieved at 3/1/2021, 12:20:19 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage", "CommentsPage"], {
		"./node_modules/linkify-it/index.js": function(e, t, s) {
			"use strict";

			function o(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(s) {
						e[s] = t[s]
					}))
				})), e
			}

			function n(e) {
				return Object.prototype.toString.call(e)
			}

			function r(e) {
				return "[object Function]" === n(e)
			}

			function i(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var a = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var d = {
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
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function m(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					o = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || o.push(c), o.push(t.src_xn), t.src_tlds = o.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var d = [];

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
						if (e.__compiled__[t] = o, "[object Object]" === n(s)) return ! function(e) {
							return "[object RegExp]" === n(e)
						}(s.validate) ? r(s.validate) ? o.validate = s.validate : l(t, s) : o.validate = function(e) {
							return function(t, s) {
								var o = t.slice(s);
								return e.test(o) ? o.match(e)[0].length : 0
							}
						}(s.validate), void(r(s.normalize) ? o.normalize = s.normalize : s.normalize ? l(t, s) : o.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === n(e)
						}(s) ? l(t, s): d.push(t)
					}
				})), d.forEach((function(t) {
					e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
				})), e.__compiled__[""] = {
					validate: null,
					normalize: function(e, t) {
						t.normalize(e)
					}
				};
				var m = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(i).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + m + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + m + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function p(e, t) {
				var s = e.__index__,
					o = e.__last_index__,
					n = e.__text_cache__.slice(s, o);
				this.schema = e.__schema__.toLowerCase(), this.index = s + t, this.lastIndex = o + t, this.raw = n, this.text = n, this.url = n
			}

			function u(e, t) {
				var s = new p(e, t);
				return e.__compiled__[s.schema].normalize(s, e), s
			}

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var s;
				t || (s = e, Object.keys(s || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = o({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = o({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, m(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, m(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = o(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, o, n, r, i, a, d;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (n = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + n;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (r = s.index + s[1].length, (this.__index__ < 0 || r < this.__index__) && (this.__schema__ = "", this.__index__ = r, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (o = e.match(this.re.email_fuzzy)) && (r = o.index + o[1].length, i = o.index + o[0].length, (this.__index__ < 0 || r < this.__index__ || r === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = r, this.__last_index__ = i)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, s) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, s, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					s = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (s.push(u(this, t)), t = this.__last_index__);
				for (var o = t ? e.slice(t) : e; this.test(o);) s.push(u(this, t)), o = o.slice(this.__last_index__), t += this.__last_index__;
				return s.length ? s : null
			}, h.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, s) {
					return e !== s[t - 1]
				})).reverse(), m(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, m(this), this)
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
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, o) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, o)
				}), t)
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var s = Math.floor,
				o = Math.random;
			e.exports = function(e, t) {
				return e + s(o() * (t - e + 1))
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseDelay.js"),
				n = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return o(e, 1, t)
				}));
			e.exports = n
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseRandom.js"),
				n = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				a = Math.min,
				d = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && n(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (s || e % 1 || t % 1) {
					var l = d();
					return a(e + l * (t - e + i("1e-" + ((l + "").length - 1))), t)
				}
				return o(e, t)
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
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c63a85ddc7f8"}')
		},
		"./src/lib/makeCollectionCommentsPageKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t, s, o = {}) => {
				let n = `collectionCommentsPage--[collection:'${e}']`;
				return t && (n += `--[post:'${t}']`), s && (n += `--[rootComment:'${s}']`), o && (o.sort && o.hasSortParam && (n += `--[sort:'${o.sort}']`), o.context && (n += `--[context:${o.context}]`), o.depth && (n += `--[depth:${o.depth}]`)), n
			}
		},
		"./src/reddit/actions/comment/websocket/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return z
			})), s.d(t, "b", (function() {
				return W
			}));
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = s("./node_modules/lodash/first.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/isArray.js"),
				c = s.n(d),
				l = s("./src/reddit/helpers/isComment.ts"),
				m = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				p = s("./src/reddit/models/Comment/index.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				h = s("./src/reddit/models/PostCreationForm/index.ts"),
				b = s("./src/reddit/models/Vote/index.ts");
			const g = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const s = y(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(m.b)(e.associated_award) : void 0,
							author: e.author,
							authorId: e.author_fullname,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							commentType: e.comment_type,
							created: e.created_utc,
							distinguishType: f(s),
							id: e.name,
							isAdmin: s === p.d.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: s === p.d.Submitter,
							isMod: s === p.d.Moderator,
							markdown: e.body,
							media: {
								type: "rtjson",
								richtextContent: e.rtjson || {
									document: [{
										c: [{
											e: "text",
											t: e.body
										}],
										e: "par"
									}]
								},
								rteMode: h.h.RICH_TEXT
							},
							parentId: e.parent_id && Object(l.a)(e.parent_id) ? e.parent_id : null,
							permalink: e.context,
							postId: e.link_id,
							score: e.score,
							subredditId: e.subreddit_id,
							treatmentTags: e.treatment_tags,
							isSystem: !1,
							approvedAtUTC: null,
							approvedBy: null,
							bannedAtUTC: null,
							bannedBy: null,
							collapsedReason: null,
							deletedBy: null,
							editedAt: null,
							ignoreReports: !1,
							isApproved: !1,
							isAuthorPremium: !1,
							isLocked: !1,
							isDeleted: !1,
							isRemoved: !1,
							isScoreHidden: !1,
							isSpam: !1,
							isStickied: !1,
							isSaved: !1,
							modReports: [],
							modReportsDismissed: [],
							numReports: 0,
							postAuthor: null,
							postTitle: null,
							sendReplies: !0,
							userReports: [],
							userReportsDismissed: [],
							voteState: b.a.notVoted,
							...t || {}
						}
					}
				},
				f = e => {
					switch (e) {
						case p.d.Admin:
							return o.C.ADMIN;
						case p.d.Moderator:
							return o.C.MODERATOR;
						case p.d.Alumni:
							return o.C.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				y = e => a()((e || []).filter(e => c()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || p.d.None;
			const C = (e, t, s) => {
				const o = {
						[t]: {}
					},
					{
						author: n,
						author_flair_background_color: r,
						author_flair_richtext: i,
						author_flair_template_id: a,
						author_flair_text: d,
						author_flair_text_color: c,
						author_flair_type: l
					} = s;
				if (n && l) {
					if (l === u.f.Richtext) {
						if (!r || !i) return;
						return {
							[t]: {
								[n]: {
									type: l,
									backgroundColor: r,
									cssClass: void 0,
									richtext: i,
									templateId: a,
									textColor: c
								}
							}
						}
					}
					if (l === u.f.Text) {
						if (!d) return o;
						return {
							[t]: {
								[n]: {
									type: l,
									backgroundColor: r,
									cssClass: void 0,
									text: d,
									templateId: a,
									textColor: c
								}
							}
						}
					}
				}
			};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var x = s("./src/lib/env/index.ts");
			const v = new Map,
				_ = e => e,
				k = new Set;
			var O;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(O || (O = {}));
			const w = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				E = (e, t) => {
					const s = _(t),
						o = v.get(s);
					o && o.socket && (o.isClosePlanned = !0, o.socket.close())
				},
				j = (e, t, s, o) => {
					const n = _(t),
						r = v.get(n);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const i = {
						socket: new WebSocket(e),
						retries: s,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					v.set(n, i), i.socket.addEventListener("open", () => {
						i.retries = {
							...w
						}
					}), i.socket.addEventListener("message", S.bind(null, o)), i.socket.addEventListener("close", P.bind(null, n, o)), i.socket.addEventListener("error", L.bind(null, n)), window && window.addEventListener("beforeunload", E.bind(null, e, t))
				},
				P = (e, t, s) => {
					const o = v.get(e);
					o && (o.isClosePlanned ? v.delete(e) : I(e, t))
				},
				I = (e, t) => {
					const s = v.get(e);
					if (!s) return;
					const {
						retries: {
							backoffTime: o,
							connectionAttempts: n,
							jitterAmount: r,
							maximumRetries: i
						},
						socket: a,
						uniqueId: d,
						url: c
					} = s;
					if (v.delete(e), n < i && a.readyState !== WebSocket.OPEN) {
						const e = o * Math.pow(2, n),
							i = Math.random() * r - r / 2,
							a = Math.round(e + i),
							l = {
								...s.retries,
								connectionAttempts: n + 1
							};
						setTimeout(() => {
							j(c, d, l, t)
						}, a), Object(x.a)() && console.debug(`Connection reset, retrying in ${a}ms`)
					}
				},
				S = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(x.a)() && console.error(t)
					}
				},
				L = (e, t) => {
					const s = v.get(e);
					s && s.isClosePlanned && s.socket && s.socket.readyState === WebSocket.CLOSED ? v.delete(e) : Object(x.a)() && console.error(t)
				};
			var T = s("./src/reddit/selectors/comments.ts"),
				M = s("./src/reddit/selectors/commentSelector.ts"),
				A = s("./src/reddit/selectors/moderatorPermissions.ts"),
				N = s("./src/reddit/actions/comment/websocket/constants.ts");
			const F = Object(n.a)(N.b),
				R = Object(n.a)(N.c),
				D = Object(n.a)(N.a),
				B = Object(n.a)(N.d),
				V = {},
				z = (e, t, s, n) => async (i, a) => {
					(e => new Promise(t => {
						const {
							cb: s,
							url: o,
							uniqueId: n
						} = e;
						k.has(n) ? t() : (k.add(n), setTimeout(() => {
							k.delete(n), j(o, n, {
								...w
							}, s), t()
						}, 1))
					}))({
						uniqueId: s,
						url: t,
						cb: t => {
							switch (t.type) {
								case O.NEW_COMMENT: {
									const d = t.payload.name,
										c = g(t.payload),
										l = a(),
										m = Object(r.a)(l, s).sortToUse === o.r.CHAT,
										p = Object(M.a)(l, {
											commentId: d
										}),
										u = !(!d || !V[d]);
									if (c && !u) {
										const s = C(0, n, t.payload),
											o = t.payload.total_comment_count;
										if (void 0 === p) {
											const n = Object(T.w)(l, {
													commentsPageKey: e
												}),
												r = t.payload.parent_id,
												a = Object(T.j)(l, {
													commentId: r,
													commentsPageKey: e
												}),
												d = Object(M.a)(l, {
													commentId: r
												}),
												p = d && d.originId ? d.originId : r,
												u = null === a ? a : a + 1;
											if (m) i(F({
												authorFlair: s,
												comment: c,
												commentsPageKey: e,
												depth: u,
												headCommentId: n,
												isChatSort: m,
												numComments: o,
												originId: p
											}));
											else {
												const t = d && d.originId ? 5e3 : 7e3;
												setTimeout(() => i(F({
													authorFlair: s,
													comment: c,
													commentsPageKey: e,
													depth: u,
													headCommentId: n,
													isChatSort: m,
													numComments: o,
													originId: p
												})), t)
											}
										} else i(R({
											authorFlair: s,
											comment: c,
											commentsPageKey: e,
											isChatSort: m,
											numComments: o
										}))
									}
									break
								}
								case O.UPDATE_COMMENT: {
									const d = t.payload.name,
										c = a(),
										l = Object(M.a)(c, {
											commentId: d
										}),
										m = g(t.payload),
										p = Object(r.a)(c, s).sortToUse === o.r.CHAT;
									if (l && m) {
										const s = C(0, n, t.payload),
											o = t.payload.total_comment_count;
										i(R({
											authorFlair: s,
											comment: m,
											commentsPageKey: e,
											isChatSort: p,
											numComments: o
										}))
									}
									break
								}
								case O.UPDATE_COMMENT_SCORE: {
									const s = t.payload.name,
										o = t.payload.score,
										n = a(),
										r = Object(M.a)(n, {
											commentId: s
										});
									r && i(R({
										comment: {
											...r,
											score: o
										},
										commentsPageKey: e
									}));
									break
								}
								case O.DELETE_COMMENT: {
									const e = t.payload.name,
										s = a(),
										o = Object(M.a)(s, {
											commentId: e
										});
									o && !o.isDeleted ? i(D({
										id: e
									})) : V[e] = O.DELETE_COMMENT;
									break
								}
								case O.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										s = t.payload.name,
										o = a(),
										n = Object(M.a)(o, {
											commentId: s
										}),
										r = (o.user.account && o.user.account.id) === (n && n.authorId),
										d = !!e && !!Object(A.h)(o, {
											postId: e
										});
									!n || n.isRemoved && n.isDeleted || r || d ? V[s] = O.REMOVE_COMMENT : i(D({
										id: s
									}));
									break
								}
								case O.USER_JOIN: {
									const s = g(t.payload, {
											isSystem: !0
										}),
										o = !0;
									s && i(B({
										comment: s,
										commentsPageKey: e,
										isChatSort: o
									}));
									break
								}
							}
						}
					})
				}, W = (e, t) => async () => {
					E(0, t)
				}
		},
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const r = Object(o.a)(n.a),
				i = Object(o.a)(n.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const r = Object(o.a)(n.a)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return E
			}));
			var o, n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(o || (o = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				u = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(n.a)(i.g),
				g = Object(n.a)(i.e),
				f = Object(n.a)(i.h),
				y = Object(n.a)(i.c),
				C = Object(n.a)(i.f),
				x = Object(n.a)(i.j),
				v = Object(n.a)(i.i),
				_ = () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t(),
						r = Object(p.e)(n),
						i = Object(p.d)(n),
						c = Object(h.I)(n);
					if (r || !i) return;
					e(f());
					let u = !1;
					try {
						const t = c ? o.LoggedInGeo : o.LoggedOutGeo,
							n = await ((e, t, s) => Object(a.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (k(t)) {
								if (O(t)) {
									e(y({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), u = !0
								} else if (w(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: o,
											interactedSubreddit: n,
											category: r
										} = s.focusRecommendations[0],
										i = [o, n],
										a = Object(m.d)(i),
										d = Object(l.b)(i),
										c = Object(m.c)(o),
										p = {
											recommendedSubredditIds: [o.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: r,
											lastLoadedEnv: "client"
										};
									e(b(p)), u = !0
								}
							} else u = !1
						}
					} catch (C) {
						u = !1
					}
					u || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						o = t && t.type;
					return !!(s && !O(e) && o === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, E = () => async (e, t, s) => {
					var o, n;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (n = null === (o = Object(u.b)(t())) || void 0 === o ? void 0 : o.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(h.J)(i);
						return Object(r.i)(() => e(_()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(C({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/collectionCommentsPage.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "collectionCommentsPagePending", (function() {
				return H
			})), s.d(t, "collectionCommentsPageLoaded", (function() {
				return K
			})), s.d(t, "collectionCommentsPageFailed", (function() {
				return q
			})), s.d(t, "collectionCommentsPageRequested", (function() {
				return G
			})), s.d(t, "collectionCommentsPageLoadedFull", (function() {
				return Y
			})), s.d(t, "fullCollectionCommentsPageDataRequested", (function() {
				return Q
			})), s.d(t, "collectionCommentsPageDataRequested", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				i = s("./src/lib/pageTitle.ts"),
				a = s("./src/lib/truncateText/index.ts"),
				d = s("./src/reddit/actions/ads/index.ts"),
				c = s("./src/reddit/actions/economics/helpers/async.ts"),
				l = s("./src/reddit/actions/pages/subreddit.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/profile/index.ts"),
				h = s("./src/reddit/actions/shortcuts/active.ts"),
				b = s("./src/reddit/actions/subreddit.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/reddit/constants/adEvents.ts"),
				y = s("./src/reddit/constants/parameters.ts"),
				C = s("./src/reddit/constants/postCollection.ts"),
				x = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/endpoints/governance/posts.ts"),
				_ = s("./src/config.ts"),
				k = s("./src/lib/makeApiRequest/index.ts"),
				O = s("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function w(e, t, s) {
				const o = `${_.a.gatewayUrl}/desktopapi/v1/collection_postcomments`;
				return s ? Object(O.a)(`${o}/${e}/${t}/${s}`) : t ? Object(O.a)(`${o}/${e}/${t}`) : Object(O.a)(`${o}/${e}`)
			}
			var E = (e, t, s, n, r) => Object(k.a)(e, {
					data: r,
					endpoint: w(t, s, n),
					method: o.cb.GET
				}),
				j = s("./src/reddit/endpoints/page/subredditPage.ts"),
				P = s("./src/reddit/helpers/canonicalUrls.ts"),
				I = s("./src/reddit/helpers/commentList/index.ts"),
				S = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				L = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = s("./src/reddit/helpers/trackers/screenview.ts"),
				M = s("./src/reddit/models/Comment/index.ts"),
				A = s("./src/reddit/models/Post/index.ts"),
				N = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				F = s("./src/reddit/selectors/platform.ts"),
				R = s("./src/reddit/selectors/postCollection.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				B = s("./src/reddit/selectors/subreddit.ts"),
				V = s("./src/reddit/actions/pages/comments.ts"),
				z = s("./src/reddit/actions/pages/constants.ts"),
				W = s("./src/lib/initializeClient/installReducer.ts"),
				U = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(W.a)({
				pages: {
					comments: U.a
				}
			});
			const H = Object(n.a)(z.d),
				K = Object(n.a)(z.b),
				q = Object(n.a)(z.a),
				G = e => async (t, s) => {
					const {
						collectionId: n,
						partialPostId: r,
						partialCommentId: d,
						subredditName: c = "",
						routePrefix: l
					} = e.params, g = r ? Object(A.r)(r) : "", f = d && Object(M.f)(d), {
						queryParams: v
					} = e, _ = s(), {
						instanceId: k
					} = v, O = {
						id: n,
						type: x.b[l]
					}, w = x.b[l] === x.a.PROFILE, {
						hasSortParam: E,
						sortToUse: j
					} = Object(S.a)(_, g), I = ["context", "depth", "limit", y.f].reduce((e, t) => {
						const s = parseInt(v[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: c,
						hasSortParam: E,
						instanceId: k
					});
					E && (I.sort = j), t(p.m(g)), await Promise.all([w ? t(u.d(c)) : Promise.resolve(), t(J(n, g, f, I))]);
					const L = ((e, t) => {
						const s = Object(R.q)(e, {
							collectionId: t.id
						});
						if (!s) return "";
						const n = Object(B.L)(e, {
								identifier: t
							}),
							r = Object(i.b)(s.title, n.name).toString();
						return Object(a.a)(r, C.c, o.bb)
					})(s(), O) || Object(i.c)();
					t(m.l({
						title: L
					}));
					const N = s().posts.models[g];
					if (N) {
						const o = Object(B.L)(s(), {
							identifier: N.belongsTo
						});
						if (!N.isSponsored)
							if (N.belongsTo.type === x.a.SUBREDDIT) {
								!!Object(B.R)(_, {
									subredditId: N.belongsTo.id
								}) || await t(b.o(o.name))
							} else await t(u.d(o.name));
						const n = s().posts.instances[g] ? e.queryParams.instanceId : N.postId;
						t(Object(h.b)(n))
					}
					w ? Object(P.d)(s(), t, e) : Object(P.e)(s(), t, e), Object(T.v)(s(), !0)
				}, Y = Object(n.a)(z.c), Q = (e, t, s, o) => async (n, i, a) => {
					const d = Object(r.a)(e, t, s, o),
						c = i();
					t = t || Object(R.p)(c, {
						collectionId: e
					});
					const l = await E(a.apiContext(), e, t, s, o);
					if (n(Object(m.m)(l.status)), l.ok) {
						if (!(t = t || l.body.collections[e].primaryPostId)) return;
						const s = Object(I.a)(l.body, t, c);
						n(K({
							key: d,
							collectionId: e,
							meta: c.meta,
							postId: t,
							shouldCollapse: s,
							...l.body
						}));
						const o = c.user.prefs.commentMode;
						n(Y({
							commentMode: o,
							key: d,
							postId: t
						}))
					} else n(q({
						error: l.error,
						key: d,
						...l.body
					}))
				}, J = (e, t, s, o, n) => async (i, a, u) => {
					const h = Object(r.a)(e, t, s, o),
						b = a();
					t = t || Object(R.p)(b, {
						collectionId: e
					});
					const {
						subredditName: y
					} = o, C = b.pages.comments.keyToHeadCommentId.hasOwnProperty(h), x = b.pages.comments.api.fullyLoaded[h], _ = b.pages.comments.api.error[h];
					if (b.pages.comments.api.pending[h] || C && !_) {
						if (C && !b.sidebarPromotedPosts.firstFetch) {
							const e = Object(F.h)(b) ? N.a.COMMENTS_OVERLAY : N.a.COMMENTS;
							window.addEventListener("load", () => {
								i(Object(d.b)(e))
							})
						}
						return void(x || n || i(Q(e, t, s, o)))
					}
					const k = b.user.prefs.commentMode;
					i(H({
						key: h,
						collectionId: e,
						commentMode: k,
						postId: t
					}));
					const O = {
						...o
					}; {
						const e = t && Object(D.I)(a(), {
							postId: t
						});
						e && e.numComments && e.numComments > V.MIN_NUM_COMMENTS_TO_TRUNCATE && (O.truncate = V.NUM_COMMENTS_TRUNCATE)
					}
					let w, P = await Object(L.a)("comments", () => E(u.apiContext(), e, t, s, O));
					if (i(Object(m.m)(P.status)), P.ok && (t = t || P.body.collections[e].primaryPostId)) {
						const e = Object.keys(P.body.posts).filter(e => !!P.body.posts[e].isMeta),
							s = Object(D.I)(a(), {
								postId: t
							});
						if (e.length) {
							const t = await Object(v.a)(u.apiContext(), s.belongsTo.id, e);
							t.ok && (w = t.body)
						}
					}
					if (!n) {
						const n = t ? Object(D.I)(a(), {
							postId: t
						}) : null;
						n && P.body.comments && Object.keys(P.body.comments).length < n.numComments ? i(Q(e, t, s, o)) : P.ok && i(Y({
							commentMode: k,
							key: h,
							postId: t
						}));
						const r = Object(F.h)(b) ? N.a.COMMENTS_OVERLAY : N.a.COMMENTS;
						i(Object(d.b)(r))
					}
					if (P.ok) {
						if (!t) return;
						const e = Object(I.a)(P.body, t, b);
						i(Object(V.commentsPageLoaded)({
							commentMode: k,
							key: h,
							postId: t,
							meta: b.meta,
							governance: w,
							shouldCollapse: e,
							...P.body
						})), i(g.f(h));
						const s = Object(D.I)(b, {
							postId: t
						});
						i(p.u(s, f.a.CommentsView)), !n && s && "subreddit" === s.belongsTo.type && P.body.comments && await i(Object(c.a)({
							commentIds: Object.keys(P.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else y && (i(Object(l.subredditPending)({
						key: h
					})), P = await Object(L.a)("subreddit", () => Object(j.a)(u.apiContext(), y, {})), i(Object(m.m)(P.status))), i(Object(l.handleSubredditPageApiError)(P, y)), i(q({
						error: P.error,
						key: h,
						...P.body
					}))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return le
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return me
			})), s.d(t, "commentsPagePending", (function() {
				return pe
			})), s.d(t, "commentsPageLoaded", (function() {
				return ue
			})), s.d(t, "commentsPageFailed", (function() {
				return he
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return be
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return ge
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return fe
			})), s.d(t, "commentsPageRequested", (function() {
				return ye
			})), s.d(t, "commentsPageDataRequested", (function() {
				return Ce
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return xe
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return ve
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/reddit/actions/category/index.ts"),
				r = s("./src/reddit/actions/discoveryUnit.ts"),
				i = s("./src/reddit/actions/pages/subreddit.ts"),
				a = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditSettings.ts"),
				c = s("./src/reddit/endpoints/governance/posts.ts"),
				l = s("./src/reddit/endpoints/page/commentsPage.ts"),
				m = s("./src/reddit/endpoints/page/subredditPage.ts"),
				p = s("./src/reddit/endpoints/profile/info.ts"),
				u = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/pageTitle.ts"),
				g = s("./src/reddit/actions/economics/helpers/async.ts"),
				f = s("./src/reddit/actions/externalAccount.ts"),
				y = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				C = s("./src/reddit/actions/platform.ts"),
				x = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/actions/profile/index.ts"),
				_ = s("./src/reddit/actions/subreddit.ts"),
				k = s("./src/reddit/actions/toaster.ts"),
				O = s("./src/reddit/constants/adEvents.ts"),
				w = s("./src/reddit/constants/graphql.ts"),
				E = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/constants/posts.ts"),
				P = s("./src/reddit/helpers/commentList/index.ts"),
				I = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				S = s("./src/reddit/models/Comment/index.ts"),
				L = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/models/Subreddit/index.ts"),
				M = s("./src/reddit/models/User/index.ts"),
				A = s("./src/reddit/selectors/category.ts"),
				N = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				F = s("./src/reddit/selectors/experiments/postSeo.ts"),
				R = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				D = s("./src/reddit/selectors/experiments/removedPosts.ts"),
				B = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				V = s("./src/reddit/selectors/platform.ts"),
				z = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/subreddit.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				H = s("./src/lib/makeActionCreator/index.ts"),
				K = s("./src/lib/makeCommentsPageKey/index.ts"),
				q = s("./src/reddit/actions/ads/index.ts"),
				G = s("./src/reddit/helpers/canonicalUrls.ts"),
				Y = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Q = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				J = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Z = s("./src/reddit/actions/gold/powerups.ts"),
				X = s("./src/reddit/actions/subreddit/subredditPosts.ts"),
				$ = s("./src/lib/performanceTimings/index.tsx"),
				ee = s("./src/reddit/constants/experiments.ts"),
				te = s("./src/reddit/helpers/chooseVariant/index.ts");
			const se = e => {
				var t, s;
				const o = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
					n = o && Object(u.r)(o),
					{
						sortToUse: r
					} = Object(I.a)(e, n);
				return (!r || r === h.r.CONFIDENCE) && Object(te.c)(e, {
					experimentEligibilitySelector: () => Object(U.I)(e),
					experimentName: ee.r
				}) === ee.u.Enabled
			};
			var oe = s("./src/reddit/selectors/chatPost.ts"),
				ne = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				re = s("./src/reddit/selectors/realtimeComments.ts"),
				ie = s("./src/reddit/selectors/seo/index.ts"),
				ae = s("./src/reddit/actions/pages/constants.ts"),
				de = s("./src/lib/initializeClient/installReducer.ts"),
				ce = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(de.a)({
				pages: {
					comments: ce.a
				}
			});
			const le = 25,
				me = 100,
				pe = Object(H.a)(ae.h),
				ue = Object(H.a)(ae.f),
				he = Object(H.a)(ae.e),
				be = (e, t, s) => {
					const o = !e,
						n = Object(z.I)(t, {
							postId: s
						}),
						r = n.belongsTo,
						i = Object(W.L)(t, {
							identifier: r
						}),
						a = Object(ie.c)(t, {
							identifier: r
						}),
						d = {
							listingBelow: !1,
							postFeed: !1,
							postImageOCRAltText: !1,
							postQASchema: !1
						};
					return Object(ie.b)(t) ? d.listingBelow = a || o : d.postFeed = (a || o) && (!Object(T.g)(i) && !Object(oe.d)(t, {
						postId: s
					}) && !!i || !Object(V.h)(t) && Object(F.e)(t)), e && (d.postImageOCRAltText = Object(F.c)(n) && !!Object(F.b)(t, n, !1), d.postQASchema = Object(F.f)(t, n)), d
				},
				ge = (e, t) => e || t.postFeed || t.listingBelow || t.postImageOCRAltText || t.postQASchema,
				fe = e => ({
					includePostFeed: e.postFeed,
					includeListingBelowExperiment: e.listingBelow,
					includePostImageOCRAltText: e.postImageOCRAltText,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				ye = e => async (t, s) => {
					var r, i;
					const {
						partialPostId: d,
						partialCommentId: c
					} = e.params, {
						subredditName: l
					} = e.params || "", m = d ? Object(u.r)(d) : "", p = c && Object(S.f)(c), {
						path: g,
						queryParams: k
					} = e, O = Object(y.d)(g), {
						instanceId: P
					} = k, {
						hasSortParam: T,
						sortToUse: M
					} = Object(I.a)(s(), m), N = null === (i = null === (r = Object(V.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === i ? void 0 : i.route.chunk, F = ["context", "depth", "limit", E.f].reduce((e, t) => {
						const s = parseInt(k[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: T,
						instanceId: P,
						include_categories: !0
					});
					T && (F.sort = M), F.onOtherDiscussions = O, t(x.m(m)), await t(Ce(m, p, F, M));
					const B = s().posts.models[m],
						H = Object(U.J)(s());
					if (B && "subreddit" === B.belongsTo.type) {
						const e = B.belongsTo.id,
							s = Object($.i)(() => t(Object(Z.f)(e, {
								fullData: !0,
								includeIdentity: H
							})), {
								name: "subredditPowerupsRequested",
								page: N,
								isLoggedIn: H
							});
						await s
					}
					if (B) {
						const r = ((e, t) => {
								const s = Object(z.U)(e, {
										postId: t
									}),
									o = Object(z.I)(e, {
										postId: t
									});
								return s && o ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), m),
							i = Object(W.L)(s(), {
								identifier: B.belongsTo
							});
						if (i && Object(D.a)(s())) return void t(Object(o.c)(i.url));
						if ((B.media && B.media.type) === L.o.LIVEVIDEO) {
							const e = Object(R.e)(s()),
								n = B.belongsTo.type === j.a.SUBREDDIT,
								r = `/rpan${e&&n?i.url:"/"}${Object(u.s)(B.id)}`;
							return void t(Object(o.c)(r))
						}
						if (B.belongsTo.type !== j.a.SUBREDDIT || B.isSponsored) {
							if (B.belongsTo.type === j.a.PROFILE) {
								const e = Object($.i)(() => t(v.d(i.name)), {
									name: "getProfileInfo",
									page: N,
									isLoggedIn: H
								});
								await e
							}
						} else {
							if (!!!Object(W.R)(s(), {
									subredditId: B.belongsTo.id
								})) {
								const e = Object($.i)(() => t(_.o(i.name)), {
									name: "getSubredditRules",
									page: N,
									isLoggedIn: H
								});
								await e
							}
						}
						const d = be(!1, s(), m),
							c = Object(ne.c)(s()),
							l = O;
						if (ge(l, d)) {
							Object(Y.d)(Y.a.LinkedPosts);
							const e = Object(Y.c)(Y.a.LinkedPosts),
								o = {
									adContext: {
										layout: w.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: m
									},
									range: h.Ub.WEEK.toUpperCase(),
									sort: h.I.TOP,
									subredditName: i.name
								},
								n = {
									postId: m
								},
								r = {
									correlationId: e,
									experimentVariant: c
								},
								a = fe(d);
							Object($.i)(() => t(Object(X.a)({
								...n,
								...o,
								...r,
								...a,
								includeOtherDiscussions: l
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: H,
								page: N
							});
							0
						}
						t(Object(f.p)()), t(C.l({
							title: r
						}));
						const p = s().posts.instances[m] ? e.queryParams.instanceId : B.postId;
						t(Object(a.b)(p)); {
							const e = Object(A.d)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(n.c(e))))
						}
					} else t(C.l({
						title: b.c()
					}));
					const {
						routePrefix: K
					} = e.params;
					j.b[K] === j.a.PROFILE ? Object(G.d)(s(), t, e) : Object(G.b)(s(), t, e)
				}, Ce = (e, t, s, o) => async (n, a, d) => {
					var u, b, f;
					const y = a(),
						v = Object(K.a)(e, t, s),
						{
							subredditName: _
						} = s,
						w = y.pages.comments.keyToHeadCommentId.hasOwnProperty(v),
						E = y.pages.comments.api.fullyLoaded[v],
						j = y.pages.comments.api.error[v],
						I = y.pages.comments.api.pending[v],
						S = !Object(U.I)(y),
						L = Object(U.i)(y),
						T = o === h.r.CHAT,
						A = !!y.platform.lastPage;
					if ((I || w && !j) && !(T && A)) {
						if (w && !y.sidebarPromotedPosts.firstFetch) {
							const t = Object(V.h)(y) ? J.a.COMMENTS_OVERLAY : J.a.COMMENTS;
							window.addEventListener("load", () => {
								n(Object(q.b)(t)), Math.random() <= .01 && n(Object(q.a)(e))
							})
						}
						return void(E || n(ve(e, t, s)))
					}
					n(r.g());
					const F = y.user.prefs.commentMode;
					n(pe({
						key: v,
						postId: e,
						commentMode: F
					}));
					const R = {
						...s,
						...T ? {
							sort: h.r.LIVE
						} : S ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(z.I)(a(), {
							postId: e
						});
						t && t.numComments && t.numComments > me && (R.truncate = le)
					}
					const D = null === (b = null === (u = Object(V.b)(y)) || void 0 === u ? void 0 : u.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
						B = Object($.i)(() => Object(l.a)(d.apiContext(), e, t, R, Object(N.a)(a()), Object(re.a)(a()), se(a())), {
							name: "fetchCommentsPage",
							isLoggedIn: !S,
							page: D
						}),
						W = !S && L && Object($.i)(() => Object(p.d)(d.gqlContext(), Object(M.e)(L)), {
							name: "fetchProfileKarma",
							isLoggedIn: !S,
							page: D
						}) || null,
						[H, G] = await Promise.all([B, W]);
					let Y;
					if (n(Object(C.m)(H.status)), H.ok) {
						const t = Object.keys(H.body.posts).filter(e => !!H.body.posts[e].isMeta),
							s = H.body.posts[e];
						if (t.length) {
							const e = Object($.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: D,
									isLoggedIn: !S
								}),
								o = await e;
							o.ok && (Y = o.body)
						}
						if (G && G.ok) {
							const e = null === (f = G.body.data.redditorInfoByName) || void 0 === f ? void 0 : f.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : p.a;
							H.body && H.body.account && Object.assign(H.body.account, t)
						}
						const o = Object(P.a)(H.body, e, y);
						n(ue({
							key: v,
							postId: e,
							meta: y.meta,
							governance: Y,
							shouldCollapse: o,
							...H.body
						}))
					} {
						const o = Object(z.I)(a(), {
							postId: e
						});
						o && H.body.comments && Object.keys(H.body.comments).length < o.numComments ? n(ve(e, t, s)) : H.ok && n(xe({
							key: v
						}));
						const r = Object(V.h)(y) ? J.a.COMMENTS_OVERLAY : J.a.COMMENTS;
						n(Object(q.b)(r)), Math.random() <= .01 && n(Object(q.a)(e))
					}
					if (H.ok) {
						n(k.f(v));
						const t = Object(z.I)(a(), {
							postId: e
						});
						if (n(x.u(t, O.a.CommentsView)), t && "subreddit" === t.belongsTo.type && H.body.comments) {
							const e = Object($.i)(() => n(Object(g.a)({
								commentIds: Object.keys(H.body.comments),
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: D,
								isLoggedIn: !S
							});
							await e
						}
					} else {
						let e;
						_ && (n(Object(i.subredditPending)({
							key: v
						})), e = await Object(Q.a)("subreddit", () => Object(m.a)(d.apiContext(), _, {})), n(Object(C.m)(e.status)), n(Object(i.handleSubredditPageApiError)(e, _))), n(he({
							error: H.error,
							key: v,
							...e ? e.body : H.body
						}))
					}
				}, xe = Object(H.a)(ae.g), ve = (e, t, s) => async (o, n, r) => {
					var i;
					const a = Object(K.a)(e, t, s),
						c = n(),
						m = Object(U.J)(c),
						u = Object(U.i)(c),
						h = Object(l.a)(r.apiContext(), e, t, s, Object(N.a)(c), Object(re.a)(c), se(c)),
						b = m && u && Object(p.d)(r.gqlContext(), Object(M.e)(u)) || null,
						[f, y] = await Promise.all([h, b]);
					if (o(Object(C.m)(f.status)), f.ok) {
						if (y && y.ok) {
							const e = null === (i = y.body.data.redditorInfoByName) || void 0 === i ? void 0 : i.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : p.a;
							f.body && f.body.account && Object.assign(f.body.account, t)
						}
						const t = Object(P.a)(f.body, e, c);
						o(ue({
							key: a,
							postId: e,
							meta: c.meta,
							shouldCollapse: t,
							...f.body
						})), o(xe({
							key: a
						}));
						const s = n().posts.models[e],
							r = s && Object(z.U)(n(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(B.a)(c, {
							subredditId: r.id
						}) && o(Object(d.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && f.body.comments && await o(Object(g.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else o(he({
						error: f.error,
						key: a,
						...f.body
					}))
				}
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(o.a)(n.a),
				i = Object(o.a)(n.b)
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, s) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				isCommentBoxDesign: "_2mGbbSC1nHodWNoj5NJEYY",
				editor: "_3NuRqPrgRBPdjWunXX3Q8E",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK",
				avatar: "_2gYdPXSssI0f1R9BPp9qsd"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/selectors/experiments/commentBox.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				u = s.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = "bottom",
				g = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				f = Object(i.b)(g),
				y = ({
					isCommentBoxDesignEnabled: e,
					isTopLevelComment: t,
					children: s
				}) => r.a.createElement("div", {
					className: Object(m.a)(u.a.spacer, {
						[u.a.isCommentBoxDesign]: e,
						[u.a.isTopLevelComment]: t
					})
				}, s),
				C = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				x = () => r.a.createElement("div", {
					className: Object(m.a)(u.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				v = e => r.a.createElement(y, e, e.isCommentBoxDesignEnabled ? r.a.createElement(x, null) : r.a.createElement(C, null), r.a.createElement(d.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: b
				})),
				_ = f(v),
				k = Object(o.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CommentCreation/index.tsx"
					}
				}, {
					ssr: !1
				}),
				O = e => r.a.createElement(k, h({}, e, {
					fallback: r.a.createElement(_, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = O
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				LiveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				liveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				Copy: "_3xhJYY30L68x0pxk-8uTYD",
				copy: "_3xhJYY30L68x0pxk-8uTYD",
				LiveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				liveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/isSimpleClick/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/lib/loginHref/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				p = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				u = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = a.a.div("Wrapper", u.a), g = a.a.span("Copy", u.a), f = a.a.wrapped(l.j, "SignupLink", u.a), y = a.a.wrapped(l.m, "LoginLink", u.a);
			t.a = Object(c.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: o,
				openRegisterModal: a,
				origin: c,
				sendEvent: l
			}) => n.a.createElement(b, {
				className: Object(r.a)(e, {
					[u.a.LiveStreamingWrapper]: t
				})
			}, n.a.createElement(g, {
				className: Object(r.a)({
					[u.a.LiveStreamingCopy]: t
				})
			}, h._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), n.a.createElement(y, {
				href: Object(d.a)(s, c, "/login"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), o(), l(Object(m.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, h._("Log In", null, {
				hk: "ZR3pC"
			})), n.a.createElement(f, {
				className: Object(r.a)({
					[u.a.LiveStreamingSignupLink]: t
				}),
				href: Object(d.a)(s, c, "/register"),
				onClick: e => {
					Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), a(), l(Object(m.c)("user_convert")))
				},
				"data-redditstyle": !0
			}, h._("Sign Up", null, {
				hk: "48wH4o"
			}))))
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/actions/comment/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				g = s("./src/lib/makeApiRequest/index.ts"),
				f = s("./src/lib/omitHeaders/index.ts"),
				y = s("./src/reddit/constants/headers.ts"),
				C = s("./src/reddit/models/Toast/index.ts");
			const x = (e, t) => async (s, n, {
				apiContext: r
			}) => {
				const i = await (async (e, t, s) => Object(g.a)(Object(f.a)(e, [y.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.cb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(r(), e, t),
					a = `error-block-${t}`,
					d = `success-block-${t}`;
				if (i.ok) {
					s(Object(h.L)({
						[e]: {
							suggestedSort: t
						}
					}));
					const n = t ? o.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : o.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(b.e({
						id: d,
						kind: C.b.SuccessCommunityGreen,
						text: n
					}))
				} else s(b.e({
					id: a,
					kind: C.b.Error,
					text: o.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: o.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: x(e, t)
				}))
			};
			var v = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				_ = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				k = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				O = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/Row.tsx"),
				P = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = s("./src/reddit/helpers/path/index.ts"),
				S = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const L = (e, t, s, o, n) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(S.listing)(r, void 0, {
						oldSort: s,
						sort: o,
						source: n
					}),
					userSubreddit: Object(S.userSubreddit)(r)
				}),
				T = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				M = e => ({
					subreddit: Object(S.subreddit)(e),
					userSubreddit: Object(S.userSubreddit)(e)
				}),
				A = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...M
				});
			var N = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				F = s("./src/reddit/icons/svgs/Info/index.tsx"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/comments.ts"),
				B = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				z = s("./src/reddit/selectors/tooltip.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = s.n(U),
				K = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const q = Object(O.a)(E.a),
				G = l.a.wrapped(N.b, "DropdownTriangle", H.a),
				Y = l.a.div("HighlightWrapper", H.a),
				Q = l.a.div("Title", H.a),
				J = e => e === K.a.First ? o.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === K.a.Last ? o.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : o.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Z extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== K.a.None) {
							e(t === K.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", K.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", K.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", K.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentDidUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: s,
						selectedSort: n
					} = this.props;
					return r.a.createElement(Y, null, r.a.createElement(Q, {
						onClick: s
					}, o.fbt._("highlight comments since", null, {
						hk: "3AxAbU"
					})), r.a.createElement(j.b, {
						className: Object(d.a)(H.a.HighlightPicker, H.a.Row),
						displayText: J(n),
						id: t,
						onClick: s
					}), r.a.createElement(G, {
						onClick: s
					}), r.a.createElement(q, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(j.b, {
						displayText: J(K.a.First),
						isSelected: n === K.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(j.b, {
						displayText: J(K.a.Last),
						isSelected: n === K.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(j.b, {
						displayText: J(K.a.None),
						isSelected: n === K.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var X = Z;
			const $ = "CommentSort--SortPicker",
				ee = "CommentSort--HighlightPicker",
				te = "CommentSort--Tooltip",
				se = Object(O.a)(E.a),
				oe = l.a.button("ContestMode", H.a),
				ne = l.a.wrapped(N.b, "DropdownTriangle", H.a),
				re = l.a.wrapped(F.a, "Info", H.a),
				ie = l.a.wrapped(j.b, "Row", H.a),
				ae = l.a.button("SetSort", H.a),
				de = l.a.button("SortLink", H.a),
				ce = l.a.div("Title", H.a),
				le = l.a.wrapped(P.a, "ToggleSwitch", H.a),
				me = l.a.wrapped(k.a, "ViewFullLinkOrOverlayLink", H.a),
				pe = l.a.wrapped(_.c, "Tooltip", H.a),
				ue = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(D.m)(e, {
						commentId: t
					}),
					contestModeIsEnabled: V.z,
					contestModeModalIsOpen: Object(R.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(z.b)($),
					highlightIsOpen: Object(z.b)(ee),
					hasModeratorPostPermissions: (e, {
						postId: t
					}) => {
						const s = Object(B.h)(e, {
							postId: t
						});
						return !!s && s.posts
					},
					postPermalink: V.H,
					showCommentHighlighter: (e, {
						postId: t
					}) => {
						const s = Object(W.r)(e),
							o = !!Object(B.h)(e, {
								postId: t
							}),
							n = Object(V.I)(e, {
								postId: t
							});
						return (o || s) && !!n && !!n.previousVisits && n.previousVisits.length > 0
					},
					selectedHighlightSort: D.p
				}),
				he = Object(i.b)(ue, (e, {
					postId: t
				}) => ({
					changeHighlightSort: t => e(Object(p.b)({
						sort: t
					})),
					onOpenDropdown: () => e(Object(m.h)({
						tooltipId: $
					})),
					onOpenHighlightDropdown: t => {
						e(Object(m.h)({
							tooltipId: ee
						})), t()
					},
					onSetSuggestedSort: s => e(x(t, s)),
					hideTooltip: () => e(Object(m.i)()),
					setContestMode: s => e(Object(h.P)(s, t)),
					showTooltip: () => e(Object(m.h)({
						tooltipId: te
					})),
					toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
				}));
			class be extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, o) => this.props.sendEvent(L(e, this.props.isOverlay, t, s, o)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(T("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(A(!this.props.contestModeIsEnabled)), this.props.setContestMode(!this.props.contestModeIsEnabled)
					}
				}
				addSuggestedLabel(e) {
					return o.fbt._("{sort name} (suggested)", [o.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: n,
						contestModeIsEnabled: i,
						dropdownIsOpen: a,
						elementRef: l,
						hideTooltip: m,
						highlightIsOpen: p,
						hasModeratorPostPermissions: u,
						isOverlay: h,
						location: b,
						postPermalink: g,
						selectedHighlightSort: f,
						showCommentHighlighter: y,
						sort: C,
						suggestedSort: x,
						showTooltip: _,
						toggleContestModeModal: k
					} = this.props, O = !b.search.includes(c.r.CONFIDENCE), w = C === c.r.CONFIDENCE && O, E = u && !w, P = c.t[C], S = P ? P() : "", L = x && C === x && !w ? this.addSuggestedLabel(S) : S, M = i ? o.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : o.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), A = i ? o.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : o.fbt._("Start", null, {
						hk: "Mjvpj"
					}), N = i ? o.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : o.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), F = i && !u;
					return r.a.createElement("div", {
						className: Object(d.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !y && F
						}),
						ref: l
					}, !F && r.a.createElement(ce, {
						onClick: this.onOpenDropdownClick
					}, o.fbt._("Sort by", null, {
						hk: "E6T9r"
					})), !F && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie, {
						className: Object(d.a)(H.a.SortPicker, H.a.Row),
						onClick: this.onOpenDropdownClick,
						displayText: L,
						id: $,
						noHover: !0,
						skipRoleAttr: !0
					}), r.a.createElement(ne, {
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(se, {
						isOpen: a,
						tooltipId: $
					}, [c.r.CONFIDENCE, c.r.TOP, c.r.NEW, c.r.CONTROVERSIAL, c.r.OLD, c.r.QA].map(e => {
						const t = s || g,
							o = Object(I.b)(t),
							n = c.t[e],
							i = n ? n() : "";
						return r.a.createElement(me, {
							isOverlay: h,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${o}?sort=${e}`
						}, r.a.createElement(j.b, {
							displayText: i,
							isSelected: C === e,
							skipRoleAttr: !0
						}))
					}))), E && !F && (x ? r.a.createElement(de, {
						onClick: C !== x ? this.setSortOnClick : this.clearSortOnClick
					}, C !== x ? o.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : o.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement(ae, null, r.a.createElement(de, {
						onClick: this.setSortOnClick
					}, o.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: te,
						onMouseEnter: _,
						onMouseLeave: m
					}, r.a.createElement(pe, {
						text: o.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: te
					}), r.a.createElement(re, null)))), u && r.a.createElement(oe, {
						onClick: this.props.toggleContestModeModal
					}, o.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(le, {
						on: i
					})), y && r.a.createElement(X, {
						changeHighlightSort: e,
						highlightIsOpen: p,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: f,
						trackHighlight: T
					}), n && r.a.createElement(v.a, {
						actionText: A,
						headerText: M,
						modalText: N,
						onConfirm: this.setContestMode,
						toggleModal: k,
						withOverlay: !0
					}))
				}
			}
			t.a = he(Object(w.c)(be))
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3XgXkbSTt-EadyaLszfRVf",
				component: "_3XgXkbSTt-EadyaLszfRVf"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				modActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				ViewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				viewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				IgnoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				ignoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				Report: "tfULaYlP83dV84XOxX3YE",
				report: "tfULaYlP83dV84XOxX3YE",
				OverflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				overflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				DropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				dropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				iconWrapper: "jap7xdwXZKV3I9Oj8GdgQ",
				Flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				CommentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				commentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				Button: "_374Hkkigy4E4srsI2WktEd",
				button: "_374Hkkigy4E4srsI2WktEd",
				ModToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				modToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				dropdownRowText: "_3my60CXALAaQkY4P4xVmad",
				overflowMenu: "_1VR6DV38j4rMT5OMeU4gJZ"
			}
		},
		"./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				glowHighlightContainer: "_3VH2iGVh92XtlKq0-eVoEN"
			}
		},
		"./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				gradientHighlightContainer: "TmlaIdEplCzZ0F1aRGYQh"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less": function(e, t, s) {
			e.exports = {
				effectContainer: "_15G4fCS1bzGgGK9kBOtN2t",
				bubbleEffectContainer: "_3rhkMikNPUTfnVDvk-6EFo",
				lottieEffectContainer: "_28x1bnTjOY6zWZfooCxkKQ"
			}
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				CommentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				commentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				redesign: "HZ-cv9q391bm8s7qT54B3",
				voteButton: "_2m5vzALl8kQdr9kwIFUo5t",
				upDownVote: "_22nWXKAY6OzAfK5GcUqWV2",
				score: "_3ChHiOyYyUkpZ_Nm3ZyM2M",
				ActionBar: "_3KgrO85L1p9wQbgwG27q4y",
				actionBar: "_3KgrO85L1p9wQbgwG27q4y",
				HorizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				horizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				FlatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				flatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				deleted: "JXi1tOUWoiFa2P02WKo2R",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
				ErrorText: "_3XArRVBsKuWegVHX9CQjH-",
				errorText: "_3XArRVBsKuWegVHX9CQjH-",
				CommentBody: "_3cjCphgls6DH-irkVaA0GM",
				commentBody: "_3cjCphgls6DH-irkVaA0GM",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				AuthorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				authorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				topSupporterIcon: "PjnQ0fgBT0oSZ9nR8HeaJ",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				isCollapsed: "BjX6VVsz_8JJDN1Ap9_IL",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentPerfMarkVisibility: "_2CkgPEY8ljDZH3np9UY1ws"
			}
		},
		"./src/reddit/components/Comments/CommentListNode/index.m.less": function(e, t, s) {
			e.exports = {
				CommentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				commentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				isHidden: "_2csJ1c6CZ_3VQ75SVdUAwt",
				glowBorderTopPadding: "_2PHrzfGnoV59y2Imtb1Y5I",
				glowBorderBottomPadding: "_3kYyDFXW4SA2vk-vehWhXw"
			}
		},
		"./src/reddit/components/Comments/ContinueThreadLink/index.m.less": function(e, t, s) {
			e.exports = {
				ArrowRight: "egHA5MD_goQfvgLP3zgST",
				arrowRight: "egHA5MD_goQfvgLP3zgST",
				HoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				hoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				Wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				isActive: "btJMgy_2EOVvOVP-DikGZ",
				LinkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn",
				linkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn"
			}
		},
		"./src/reddit/components/Comments/MoreCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				MoreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				moreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				MoreComments: "_2HYsucNpMdUpYlGBMviq8M",
				moreComments: "_2HYsucNpMdUpYlGBMviq8M",
				MoreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				moreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				isActive: "l7--vTMsoEqrU8pjG52TF"
			}
		},
		"./src/reddit/components/Comments/MoreCommentsItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				m = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				u = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = d.a.div("MoreCommentsItemWrapper", u.a), g = d.a.p("MoreComments", u.a), f = d.a.wrapped(g, "MoreCommentsInteractive", u.a), y = Object(i.c)({
				moreCommentsItem: m.A,
				moreCommentsPending: m.B
			}), C = Object(r.b)(y, (e, t) => ({
				moreCommentsClicked: () => e(Object(c.j)(t.commentsPageKey, t.moreCommentsId))
			})), x = ({
				isActive: e,
				moreCommentsClicked: t,
				moreCommentsItem: s,
				moreCommentsPending: o,
				onMoreCommentsItemClick: r,
				count: i
			}) => n.a.createElement(b, null, o ? n.a.createElement(g, null, h._("loading...", null, {
				hk: "47z89"
			})) : n.a.createElement(l.a.Consumer, null, o => n.a.createElement(f, {
				className: Object(a.a)({
					[u.a.isActive]: e
				}),
				onClick: () => {
					i && r ? (r(), o("load_more_comment_live")()) : t && (t(), (null == s ? void 0 : s.isFromLiveWebSocket) ? o("load_more_comment_live")() : o("load_more_comment")())
				}
			}, h._({
				"*": "{number of more replies hidden} more replies",
				_1: "1 more reply"
			}, [h._plural(s ? s.numComments : i || 0, "number of more replies hidden")], {
				hk: "J0jQW"
			}))));
			t.b = C(x)
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment-index-tsx",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Comments-PredictionComment-index-tsx").then(s.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Comments/PredictionComment/index.tsx"
				}
			})
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				Avatar: "_3ES-TCR45dPoj_NuOATuNi",
				avatar: "_3ES-TCR45dPoj_NuOATuNi",
				VoteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				voteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				TextColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				textColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				StateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				stateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				CommentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				commentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				SnooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				snooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				EmptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				emptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				ErrorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				errorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				EmptyText: "_2x3Avx0lbWMcic-5bE_guO",
				emptyText: "_2x3Avx0lbWMcic-5bE_guO",
				ErrorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				errorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return P
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "f", (function() {
				return M
			})), s.d(t, "a", (function() {
				return U
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				f = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				y = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				C = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				x = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				v = s("./src/reddit/components/Comments/States/index.m.less"),
				_ = s.n(v);
			const k = l.a.wrapped(C.a, "CommentsIcon", _.a),
				O = l.a.wrapped(x.a, "SnooFacepalm", _.a),
				w = l.a.p("EmptyTitle", _.a),
				E = l.a.p("ErrorTitle", _.a),
				j = l.a.p("EmptyText", _.a),
				P = ({
					className: e,
					isChat: t
				}) => a.a.createElement("div", {
					className: Object(c.a)(_.a.StateContainer, e)
				}, a.a.createElement(k, null), a.a.createElement(w, null, t ? o.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : o.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), a.a.createElement(j, null, o.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				I = () => a.a.createElement("div", {
					className: _.a.StateContainer
				}, a.a.createElement(k, null), a.a.createElement(w, null, o.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(j, null, o.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = ({
					link: e
				}) => a.a.createElement("div", {
					className: _.a.StateContainer
				}, a.a.createElement(k, null), a.a.createElement(w, null, o.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), a.a.createElement(u.k, {
					to: Object(b.b)(e)
				}, o.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				L = Object(d.b)(null, (e, {
					postId: t,
					commentId: s,
					sort: o
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, s, {
						sort: o
					}, o))
				}))(({
					apiError: e,
					onClick: t
				}) => a.a.createElement("div", {
					className: _.a.StateContainer
				}, a.a.createElement(O, null), a.a.createElement(E, null, e ? Object(h.a)({
					apiError: e,
					isLoggedOut: !1
				}) : o.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), a.a.createElement(u.i, {
					onClick: t
				}, o.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				T = ({
					postId: e,
					commentId: t,
					sort: s,
					apiError: o
				}) => a.a.createElement("div", {
					className: Object(c.a)(_.a.StateContainer, _.a.ErrorFullPage)
				}, a.a.createElement(L, {
					postId: e,
					commentId: t,
					sort: s,
					apiError: o
				})),
				M = l.a.wrapped(({
					className: e
				}) => a.a.createElement("div", {
					className: e
				}, a.a.createElement(p.a, null)), "LoadingFullPage", _.a),
				A = l.a.div("CommentsPlaceholderContainer", _.a),
				N = l.a.div("CommentPlaceholder", _.a),
				F = l.a.div("Avatar", _.a),
				R = l.a.div("VoteColumn", _.a),
				D = l.a.div("TextColumn", _.a),
				B = l.a.wrapped(y.b, "Upvote", _.a),
				V = l.a.wrapped(f.b, "Downvote", _.a),
				z = () => a.a.createElement("div", {
					className: Object(c.a)(_.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				W = () => a.a.createElement("div", {
					className: Object(c.a)(_.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				U = e => a.a.createElement(A, null, r()(10, t => a.a.createElement(N, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? a.a.createElement(F, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : a.a.createElement(R, null, a.a.createElement(B, null), a.a.createElement(V, null)), a.a.createElement(D, null, a.a.createElement(z, null), a.a.createElement(W, null)))))
		},
		"./src/reddit/components/Comments/ThreadLines/index.m.less": function(e, t, s) {
			e.exports = {
				Line: "_36AIN2ppxy_z-XSDxTvYj5",
				line: "_36AIN2ppxy_z-XSDxTvYj5",
				LineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				lineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				ShortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				shortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				redesign: "_3ic5Ze6xyK9NmcG7HpKTAZ",
				topLevel: "_3cea2-bu-AjagXhuQfp9Zu",
				hasGlowBorder: "_9UoUJEplv3y2cpdVestPb"
			}
		},
		"./src/reddit/components/Comments/helpers/hiddenComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			}));
			let o = {};

			function n(e) {
				return e in o
			}

			function r(e) {
				o[e] = !0
			}

			function i() {
				o = {}
			}
		},
		"./src/reddit/components/Comments/index.m.less": function(e, t, s) {
			e.exports = {
				Scroller: "_1YCqQVO-9r-Up6QPB9H6_4",
				scroller: "_1YCqQVO-9r-Up6QPB9H6_4"
			}
		},
		"./src/reddit/components/Comments/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o, n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/comment/index.ts"),
				h = s("./src/reddit/constants/comments.ts"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/constants/elementClassNames.ts"),
				f = s("./src/reddit/constants/gold.ts"),
				y = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				C = s("./src/reddit/components/LottieAnimation/index.tsx"),
				x = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				v = s.n(x);
			! function(e) {
				e.Lottie = "lottie"
			}(o || (o = {}));
			const _ = {
				threshold: [.75, .001]
			};
			var k = a.a.memo(e => {
				const t = Object(i.useRef)(null),
					[s, n] = Object(i.useState)(!1),
					r = Object(i.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && n(!1), t <= .001 && n(!0)
						})
					}, []);
				Object(y.a)(t, r, _);
				const d = e.type;
				return a.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(l.a)(v.a.effectContainer, v.a[d + "EffectContainer"]),
					ref: t
				}, d === o.Lottie && a.a.createElement(C.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			});
			const O = [{
					pattern: /^econ:render:lottie:([a-z0-9-]+)$/i,
					buildParamsFn: function(e) {
						return {
							glowHexColor: w,
							effectHighlight: {
								type: o.Lottie,
								assetUrl: `https://www.redditstatic.com/gold/awards/animations/${e}.json`
							}
						}
					}
				}],
				w = "ff0000";

			function E(e) {
				return function(e) {
					const t = e.filter(e => e.effectHighlight),
						s = t.length ? t : e,
						o = Math.floor(Math.random() * s.length);
					return s[o] || null
				}(e ? function(e) {
					return e.map(P).filter(e => e !== j)
				}(e) : [])
			}
			const j = {
				glowHexColor: null,
				effectHighlight: null
			};

			function P(e) {
				for (const t of O) {
					const s = t.pattern.exec(e);
					if (s) return s.shift(), t.buildParamsFn(...s)
				}
				return j
			}
			var I, S, L = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts"),
				T = s("./src/reddit/selectors/comments.ts"),
				M = s("./src/reddit/selectors/commentSelector.ts"),
				A = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				F = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				D = s("./node_modules/fbt/lib/FbtPublic.js"),
				B = s("./src/reddit/hooks/useTracking.ts"),
				V = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/lib/makeDraftKey/index.ts"),
				W = s("./src/lib/objectSelector/index.ts"),
				U = s("./src/reddit/helpers/trackers/powerups.ts"),
				H = s("./src/reddit/actions/comment/authoring.ts"),
				K = s("./src/reddit/actions/comment/moderation.ts"),
				q = s("./src/reddit/actions/gold/powerups.ts"),
				G = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				Y = s("./src/reddit/icons/fonts/Expand/index.tsx"),
				Q = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				J = s.n(Q),
				Z = p.a.wrapped(e => a.a.createElement("button", e, a.a.createElement(Y.a, null)), "Component", J.a),
				X = s("./node_modules/lodash/defer.js"),
				$ = s.n(X),
				ee = s("./src/reddit/actions/tooltip.ts"),
				te = s("./src/reddit/selectors/tooltip.ts"),
				se = s("./src/lib/makeCommentPermalink/index.ts"),
				oe = s("./src/reddit/actions/gold/modals.ts"),
				ne = s("./src/reddit/actions/modal.ts"),
				re = s("./src/reddit/actions/reportFlow/index.ts"),
				ie = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ae = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				de = s("./src/reddit/helpers/trackers/lightbox.ts"),
				ce = s("./src/reddit/selectors/activeModalId.ts"),
				le = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				me = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/selectors/experiments/coreStyles.ts"),
				ue = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				he = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				be = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				ge = s.n(be);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(I || (I = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(S || (S = {}));
			const fe = (e, t) => {
					const s = ge.a[t],
						o = ge.a[e];
					return Object(l.a)(s, o)
				},
				ye = e => Object(l.a)(ge.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[ge.a.isInOverlay]: e.isInOverlay,
					[ge.a.isModModeEnabled]: e.isModModeEnabled
				});
			var Ce = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				xe = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				ve = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				_e = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				ke = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Oe = s("./src/reddit/components/ModModeReports/helpers.ts"),
				we = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Ee = s("./src/reddit/components/ReportFlow/index.tsx"),
				je = s("./src/reddit/components/ReportFlow/new.tsx"),
				Pe = s("./src/reddit/components/ShareMenu/index.tsx"),
				Ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Se = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				Le = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				Te = s("./src/reddit/helpers/trackers/modTools.ts"),
				Me = s("./src/reddit/layout/row/Inline/index.tsx"),
				Ae = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				Ne = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Fe = s("./src/reddit/icons/fonts/index.tsx"),
				Re = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				De = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				Be = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ze = s("./src/reddit/icons/fonts/Report/index.tsx"),
				We = s("./src/reddit/icons/fonts/Save/index.tsx"),
				Ue = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				He = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Ke = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				qe = s.n(Ke);
			const Ge = p.a.wrapped(Re.a, "CommentIcon", qe.a),
				Ye = p.a.wrapped(ze.a, "Report", qe.a),
				Qe = p.a.wrapped(Be.a, "IgnoreReport", qe.a),
				Je = p.a.wrapped(ke.a, "ModActionsMenu", qe.a),
				Ze = p.a.div("OverflowMenuSpacer", qe.a),
				Xe = p.a.wrapped(we.a, "DropdownRow", qe.a),
				$e = p.a.wrapped(Me.a, "Flatlist", qe.a),
				et = p.a.button("Button", qe.a),
				tt = p.a.wrapped(Ce.a, "ModToolsFlatlist", qe.a),
				st = p.a.wrapped(Se.a, "ViewReportsDropdown", qe.a),
				ot = e => `Comment-${e}--Modal--DeleteComment`,
				nt = e => `Distinguish--Dropdown--${e}`,
				rt = e => `${e}-overflow-menu`,
				it = e => `View--Reports--${e}`,
				at = Object(c.c)({
					claimedFreeAward: le.b,
					currentUser: R.i,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(ce.a)(e) === ot(t.id),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(te.b)(nt(t.id))(e),
					isInIcons2020: pe.b,
					isPendingDeletion: (e, {
						comment: t
					}) => Object(T.z)(e, {
						commentId: t.id
					}),
					isReportsDropdownOpen: (e, {
						comment: t
					}) => Object(te.b)(it(t.id))(e),
					isLoggedIn: R.J,
					postIsArchived: (e, {
						comment: t
					}) => Object(F.C)(e, {
						postId: t.postId
					}),
					postIsLocked: (e, {
						comment: t
					}) => Object(F.D)(e, {
						postId: t.postId
					}),
					postPermalink: (e, {
						comment: t
					}) => Object(F.H)(e, {
						postId: t.postId
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, o;
						return (null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === t.id
					},
					sendRepliesToggled: (e, {
						comment: t
					}) => Object(T.G)(e, {
						commentId: t.id
					}),
					subredditAboutInfo: (e, {
						subreddit: t
					}) => t ? Object(me.x)(e, {
						subredditName: t.name
					}) : void 0,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(F.U)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: ue.a
				});
			class dt extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(de.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(Te.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(Te.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(Te.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(ie.d)(ie.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(o(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(Te.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(Te.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(Te.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(Te.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? a.a.createElement(je.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Ee.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : a.a.createElement(Ee.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Ee.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						deleteComment: o,
						depth: n,
						handleReply: r,
						isAvatarsInCommentsEnabled: d,
						isInIcons2020: c,
						isLoggedIn: m,
						isPendingDeletion: p,
						onDistinguishComment: u,
						onIgnoreReports: h,
						onToggleReportsDropdown: b,
						moderatorPermissions: g,
						modModeEnabled: f,
						postIsArchived: y,
						postIsLocked: C,
						postPermalink: x,
						renderedInOverlay: v,
						sendEvent: _,
						subreddit: k,
						subredditAboutInfo: O,
						toggleDeleteCommentModal: w,
						toggleSendReplies: E,
						trackCommentClick: j
					} = this.props, P = Object(ae.a)(g), L = !!s && s.displayText === e.author, T = !!s && s.isEmployee, M = !(O && O.userIsBanned) && (C || y || P && m || e.isLocked ? P && m : m || d), A = Object(Oe.a)(e), N = P && !f && L && !e.bannedBy, F = L && T && !e.bannedBy, R = N || F, B = s && e.isGildable, V = [];
					M && V.push(a.a.createElement(et, {
						disabled: p,
						key: "reply",
						onClick: () => {
							r(), $()(() => j("reply", e.id)())
						}
					}, a.a.createElement(Ge, null), D.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), B && V.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(Ae.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => D.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), V.push(a.a.createElement(Pe.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: Object(se.a)(x, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: k
					}, a.a.createElement(et, {
						onClick: () => this.sendCommentEventWithName("share")
					}, D.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), L || V.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(ze.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => D.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), V.push({
						breakpointGroup: S.LoggedInUser,
						icon: e.isSaved ? a.a.createElement(Ne.f, null) : a.a.createElement(We.a, null),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => D.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => D.fbt._("Save", null, {
							hk: "4lbZXG"
						})
					}), L && V.push({
						breakpointGroup: S.LoggedInUser,
						icon: c ? a.a.createElement(Fe.a, {
							name: "edit"
						}) : a.a.createElement(Ue.a, null),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => D.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					});
					const z = V.map(e => a.a.isValidElement(e) ? e : a.a.createElement(et, {
							className: fe(e.breakpointGroup, I.HideIfVWSmaller),
							disabled: p,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						W = V.map(e => a.a.isValidElement(e) ? null : a.a.createElement(Xe, {
							className: fe(e.breakpointGroup, I.HideIfVWLarger),
							displayText: e.text(),
							iconWrapperClassName: qe.a.iconWrapper,
							key: e.key,
							onClick: e.onClick,
							textClassName: qe.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(i.Fragment, null, a.a.createElement($e, {
						className: Object(l.a)(ye({
							depth: n,
							isInOverlay: v,
							isModModeEnabled: P && f
						}), t)
					}, z, a.a.createElement(Ze, {
						className: L ? void 0 : fe(S.LoggedInUser, I.HideIfVWLarger)
					}, a.a.createElement(we.b, {
						className: qe.a.overflowMenu,
						disabled: p,
						dropdownId: rt(e.id),
						onClick: () => _(Object(Te.a)("comment_overflow_menu", e.id))
					}, W, L && a.a.createElement(a.a.Fragment, null, a.a.createElement(Xe, {
						displayText: D.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						iconWrapperClassName: qe.a.iconWrapper,
						onClick: this.handleDelete,
						textClassName: qe.a.dropdownRowText
					}, c ? a.a.createElement(Fe.a, {
						name: "delete"
					}) : a.a.createElement(He.b, null)), a.a.createElement(Le.a, {
						text: D.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: E,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(ve.a, {
						actionText: D.fbt._("delete", null, {
							hk: "1XDeYp"
						}),
						cancelActionText: D.fbt._("keep", null, {
							hk: "bO09f"
						}),
						headerText: D.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: D.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: o,
						toggleModal: w,
						trackClick: () => {},
						withOverlay: !0
					}), P && a.a.createElement(a.a.Fragment, null, f && a.a.createElement(tt, {
						className: fe(S.Moderator, I.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: L
					}), a.a.createElement(Je, {
						className: f ? fe(S.Moderator, I.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => _(Object(Te.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(Ve.a, null), a.a.createElement(he.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(Oe.c)(e) && !f && a.a.createElement(xe.a, {
						text: `${A}`,
						onClick: () => {
							b(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: it(e.id)
					}, a.a.createElement(st, {
						model: e,
						onIgnoreReports: () => {
							h(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: it(e.id)
					}), e.ignoreReports ? a.a.createElement(Qe, null) : a.a.createElement(Ye, null)), R && a.a.createElement(xe.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(De.a, null), a.a.createElement(_e.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: T,
						isUserMod: P,
						onDistinguishComment: u,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: nt(e.id)
					}))), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var ct = Object(d.b)(at, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					deleteComment: () => s && e(Object(H.h)(t.id, t.postId)),
					handleDelete: () => {
						e(Object(ne.i)(ot(t.id))), e(Object(ee.h)({
							tooltipId: rt(t.id)
						}))
					},
					handleEdit: () => {
						const o = t.media && t.media.rteMode;
						s && e(Object(H.d)({
							commentId: t.id,
							draftKey: Object(z.a)(V.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: o,
							commentsPageKey: s
						}))
					},
					handleReply: () => s && e(Object(H.p)({
						parentCommentId: t.id,
						commentsPageKey: s
					})),
					onDistinguishComment: (s, o) => e(Object(K.b)(t.id, s, o)),
					onGildClick: (s, o) => e(Object(oe.d)({
						awardId: o,
						correlationId: s,
						thingId: t.id
					})),
					onIgnoreReports: () => e(Object(K.g)(t.id)),
					onReportClick: () => e(Object(re.c)(t.id)),
					onToggleSave: () => e(Object(u.k)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(ee.h)({
						tooltipId: nt(t.id)
					})),
					onToggleReportsDropdown: () => e(Object(ee.h)({
						tooltipId: it(t.id)
					})),
					toggleDeleteCommentModal: () => e(Object(ne.i)(ot(t.id))),
					toggleSendReplies: () => e(Object(H.k)(t.id))
				}))(Object(Ie.c)(dt)),
				lt = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				mt = s.n(lt);
			var pt = a.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return a.a.createElement("div", {
						"aria-role": "presentation",
						className: mt.a.glowHighlightContainer,
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				ut = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				ht = s.n(ut);
			var bt = a.a.memo(e => a.a.createElement("div", {
					"aria-role": "presentation",
					className: ht.a.gradientHighlightContainer
				})),
				gt = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				ft = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				yt = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Ct = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				xt = s("./src/reddit/components/ModModeReports/index.tsx"),
				vt = s("./src/reddit/components/PostTopMeta/index.tsx"),
				_t = s("./src/reddit/components/RichTextJson/index.tsx"),
				kt = s("./src/reddit/components/UserIcon/index.tsx"),
				Ot = s("./src/reddit/components/VerticalVotes/index.tsx"),
				wt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Et = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				jt = s("./src/reddit/constants/componentTestIds.ts"),
				Pt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				It = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				St = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				Lt = s("./node_modules/raf/index.js"),
				Tt = s.n(Lt);

			function Mt() {
				return (Mt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const At = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				Nt = a.a.createContext(!1);
			class Ft extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || Tt()(this.setVisible)
					}, this.handleIntersectionChange = e => {
						const t = e.isIntersecting;
						!this.fastIsVisible && t && (this.scheduleVisibilityChange(), this.fastIsVisible = !0)
					}
				}
				render() {
					const {
						children: e,
						...t
					} = this.props, {
						isVisible: s
					} = this.state, o = {
						...At,
						...t
					};
					return a.a.createElement(St.a, Mt({}, o, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(Nt.Provider, {
						value: s
					}, e)))
				}
			}
			var Rt = s("./src/reddit/controls/ErrorText/index.tsx"),
				Dt = s("./src/reddit/controls/InternalLink/index.tsx"),
				Bt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Vt = s("./src/reddit/models/Subreddit/index.ts"),
				zt = s("./src/reddit/models/Vote/index.ts"),
				Wt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				Ut = s("./src/reddit/selectors/gold/powerups.ts"),
				Ht = s("./src/reddit/selectors/poll/index.ts"),
				Kt = s("./src/reddit/selectors/userPrefs.ts"),
				qt = s("./src/reddit/selectors/moderatingComments.ts"),
				Gt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Yt = s.n(Gt),
				Qt = s("./src/config.ts");

			function Jt() {
				return (Jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Zt = p.a.wrapped(Z, "ExpandButton", Yt.a),
				Xt = p.a.wrapped(ct, "FlatList", Yt.a),
				$t = p.a.wrapped(Rt.b, "ErrorText", Yt.a),
				es = p.a.wrapped(Ot.a, "VerticalVotes", Yt.a),
				ts = p.a.wrapped(yt.a, "HorizontalVotes", Yt.a),
				ss = p.a.div("ActionBar", Yt.a),
				os = p.a.wrapped(gt.a, "TopMeta", Yt.a),
				ns = p.a.div("CommentContentWrapper", Yt.a),
				rs = p.a.div("CommentWrapper", Yt.a),
				is = p.a.div("CommentBody", Yt.a),
				as = p.a.wrapped(Ct.b, "AuthorHovercard", Yt.a),
				ds = Object(Pt.t)(),
				cs = Object(d.b)(() => Object(c.c)({
					comment: (e, t) => Object(M.a)(e, t),
					currentProfileModPermissions: Pt.g,
					depth: (e, t) => Object(T.j)(e, t),
					collapsed: qt.b,
					collapsedBecauseCrowdControl: qt.a,
					flair: T.e,
					focused: T.t,
					highlightAnimationDisabled: Kt.c,
					isEditing: T.y,
					isLoggedIn: R.J,
					isPendingDeletion: T.z,
					moderatorPermissions: (e, t) => {
						const s = Object(M.a)(e, t);
						return s ? Object(N.i)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: Ht.f,
					isTopSupporter: (e, t) => {
						const s = Object(M.a)(e, t);
						if (!s) return !1;
						const o = Object(Pt.q)(e, t);
						return !!o && Object(Ut.a)(e, {
							subredditId: o.id,
							userId: s.authorId
						})
					},
					modModeEnabled: Pt.P,
					errorMsgs: T.E,
					replyFormOpen: T.H,
					subreddit: Pt.q,
					subredditType: T.J
				}), (e, {
					commentId: t,
					commentsPageKey: s,
					scrollToAndRemeasure: o,
					trackCommentClick: n
				}) => ({
					onCollapseClick: () => e(Object(u.l)({
						commentId: t,
						commentsPageKey: s,
						scrollToAndRemeasure: o
					})),
					onIgnoreReports: () => e(Object(K.g)(t)),
					onOpenPowerupsModal: () => e(Object(q.b)()),
					onVoteClick: s => {
						const [o, r] = s === zt.a.upvoted ? [Object(u.n)(t), "upvote_comment"] : [Object(u.i)(t), "downvote_comment"];
						n(r, t)(), e(o)
					}
				})),
				ls = Object(W.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				ms = ds(cs(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: o,
						commentsPageKey: n,
						collapsed: r,
						collapsedBecauseCrowdControl: d,
						currentProfileModPermissions: c,
						depth: m,
						errorMsgs: p,
						flair: u,
						focused: h,
						hasAwardGradient: b,
						highlightAnimationDisabled: g,
						highlightTreatment: f,
						isActive: y,
						isAvatarsInCommentsEnabled: C,
						isEditing: x,
						isFirstInList: v,
						isHighlighted: _,
						isLoggedIn: O,
						isPendingDeletion: w,
						isTopSupporter: E,
						moderatorPermissions: j,
						modModeEnabled: P,
						onCollapseClick: I,
						onIgnoreReports: S,
						onLineMouseOver: L,
						onVoteClick: T,
						onOpenPowerupsModal: M,
						prediction: A,
						replyFormOpen: N,
						subreddit: F,
						trackCommentClick: R,
						renderedInOverlay: W,
						subredditType: K
					} = e, q = Object(B.a)(), Y = o.isDeleted, Q = !x && !Y && !!p && p.length > 0, J = Object(z.a)(V.c.edit, o.id), Z = Object(z.a)(V.c.replyToComment, o.id), X = Object(ae.a)(j), $ = o.authorIsContractor && K === Vt.e.EmployeesOnly, ee = o.isLocked, te = X && P, se = !x && !Y && (O || C), [oe, ne] = Object(i.useState)(null), [re, ie] = Object(i.useState)(null);
					Object(i.useEffect)(() => {
						if (!x && !Y && (b && ne(a.a.createElement(bt, null)), null !== f)) {
							if (f.glowHexColor) {
								const e = f.glowHexColor;
								ne(a.a.createElement(pt, {
									hexColor: e
								}))
							}
							if (f.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = f.effectHighlight;
								ie(a.a.createElement(k, {
									prefersReducedAnimation: g,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [x, Y, b, g, f]);
					const de = Object(i.useContext)(Nt),
						ce = Object(wt.a)(o);
					return a.a.createElement(rs, {
						className: Object(l.a)(`Comment ${o.id}`, Yt.a.CommentWrapper, {
							[Yt.a.highlightComment]: _,
							[Yt.a.deleted]: Y,
							[Yt.a.focused]: h,
							[Yt.a.redesign]: C,
							[Yt.a.topLevel]: !m
						})
					}, oe, re, !x && !Y && v && a.a.createElement("div", {
						className: Yt.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt="" src="${Qt.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstCommentVisible || function(){})();" />\n              `
						}
					}), r && a.a.createElement(Zt, {
						className: o.id,
						onClick: () => {
							s(), I(), R("collapse", o.id)()
						},
						onMouseOver: () => L(o.id),
						onMouseOut: s
					}), !r && (C ? a.a.createElement(as, {
						alwaysShowChildren: !0,
						hoverDivClassName: Yt.a.AuthorHoverDiv,
						postOrComment: o,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: W ? vt.c.Lightbox : void 0
					}, a.a.createElement(Dt.a, {
						className: Yt.a.UserIconContainer,
						to: `/user/${o.author}/`
					}, de ? a.a.createElement(kt.a, {
						className: Yt.a.UserIcon,
						iconUrl: o.profileImage,
						isNSFW: o.profileOver18 || !1,
						nsfwIconUrl: "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png",
						userName: o.author
					}) : a.a.createElement("div", {
						className: Yt.a.UserIcon
					}), E && a.a.createElement(Et.a, {
						onClick: e => {
							q(Object(U.h)("comment")), M(), e.stopPropagation(), e.preventDefault()
						},
						className: Yt.a.topSupporterIcon,
						title: D.fbt._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						})
					}))) : Y ? null : a.a.createElement(es, {
						compact: !0,
						downvoteButtonClassName: Yt.a.voteButton,
						downvoteClassName: Yt.a.upDownVote,
						model: o,
						onVoteClick: T,
						upvoteButtonClassName: Yt.a.voteButton,
						upvoteClassName: Yt.a.upDownVote
					})), a.a.createElement(ns, {
						className: Object(l.a)({
							[Yt.a.isActive]: y,
							[Yt.a.isCollapsed]: r,
							[Yt.a.isLocked]: ee && te,
							[Yt.a.isPendingDeletion]: w,
							[Yt.a.isRemoved]: !!o.bannedBy && te
						})
					}, a.a.createElement(Bt.a, null, D.fbt._("level {depth}", [D.fbt._param("depth", m + 1)], {
						hk: "2XnyAV"
					})), a.a.createElement(os, {
						childrenInfo: t,
						className: Object(l.a)({
							[Yt.a.collapsed]: r
						}),
						collapsed: r,
						collapsedBecauseCrowdControl: d,
						comment: o,
						commentsPageKey: n,
						flair: u,
						isAvatarsInCommentsEnabled: C,
						renderedInOverlay: W,
						renderContractorBadge: $,
						renderTopSupporterBadge: (!C || r) && E
					}), !r && a.a.createElement(i.Fragment, null, x && a.a.createElement(G.a, {
						className: Object(l.a)(Yt.a.EditCommentForm, Yt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: n,
						depth: m,
						draftType: V.c.edit,
						draftKey: J,
						rtJson: Object(wt.a)(o),
						mediaMetadata: o.media && o.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						submitAction: e => Object(H.i)({
							id: o.id,
							commentsPageKey: n,
							depth: m,
							draftKey: J,
							formData: e
						}),
						submitButtonText: D.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !x && !Y && a.a.createElement(is, {
						"data-test-id": jt.d
					}, A ? a.a.createElement(ft.a, {
						comment: o,
						prediction: A
					}) : a.a.createElement(_t.a, {
						content: ce,
						mediaMetadata: o.media && o.media.mediaMetadata,
						rtJsonElementProps: ls(e)
					}), a.a.createElement(Wt.b, {
						content: ce
					})), P && X && Object(Oe.c)(o) && a.a.createElement(xt.a, {
						onIgnoreReports: S,
						reportable: o
					}), se && a.a.createElement(ss, null, C && a.a.createElement(ts, {
						downvoteButtonClassName: Yt.a.voteButton,
						downvoteClassName: Yt.a.upDownVote,
						model: o,
						onVoteClick: T,
						scoreClassName: Yt.a.score,
						upvoteButtonClassName: Yt.a.voteButton,
						upvoteClassName: Yt.a.upDownVote
					}), a.a.createElement(Xt, {
						comment: o,
						commentsPageKey: n,
						depth: m,
						isAvatarsInCommentsEnabled: C,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: P,
						moderatorPermissions: c || j,
						renderedInOverlay: W,
						subreddit: F,
						trackCommentClick: R
					})), Q && p.map(e => a.a.createElement($t, {
						key: e
					}, e)), N && a.a.createElement(G.a, {
						className: Object(l.a)(Yt.a.EditCommentForm, Yt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: n,
						depth: m,
						draftType: V.c.replyToComment,
						draftKey: Z,
						isTopLevelComment: !1,
						parentCommentId: o.id,
						submitAction: ({
							validate: e,
							...t
						}, s) => e ? Object(H.r)({
							commentsPageKey: n,
							draftKey: Z,
							parentCommentDepth: m,
							parentCommentId: o.id,
							formData: t,
							editorMode: s
						}) : Object(H.l)({
							commentsPageKey: n,
							draftKey: Z,
							parentCommentDepth: m,
							parentCommentId: o.id,
							formData: t,
							editorMode: s
						}),
						submitButtonText: D.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			var ps = e => a.a.createElement(It.a.Consumer, null, t => a.a.createElement(ms, Jt({}, e, {
					trackCommentClick: t
				}))),
				us = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				hs = s("./src/reddit/contexts/InsideOverlay.tsx"),
				bs = s("./src/reddit/helpers/path/index.ts"),
				gs = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				fs = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				ys = s.n(fs);
			const {
				fbt: Cs
			} = s("./node_modules/fbt/lib/FbtPublic.js"), xs = p.a.div("Wrapper", ys.a), vs = p.a.wrapped(gs.a, "ArrowRight", ys.a), _s = p.a.wrapped(us.a, "LinkOrOverlayLink", ys.a), ks = p.a.span("HoverSpan", ys.a), Os = Object(c.c)({
				permalink: (e, t) => Object(T.m)(e, {
					commentId: Object(T.r)(e, t).parentId
				})
			});
			var ws = Object(d.b)(Os)(Object(hs.b)(({
					isActive: e,
					isOverlay: t,
					permalink: s
				}) => a.a.createElement(xs, {
					className: Object(l.a)({
						[ys.a.isActive]: e
					})
				}, a.a.createElement(_s, {
					isOverlay: !!t,
					to: Object(bs.b)(s)
				}, a.a.createElement(ks, null, Cs._("Continue this thread", null, {
					hk: "3eplK8"
				})), " ", a.a.createElement(vs, null))))),
				Es = s("./src/reddit/components/Comments/MoreCommentsItem/index.tsx"),
				js = s("./node_modules/lodash/times.js"),
				Ps = s.n(js),
				Is = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				Ss = s.n(Is);
			const Ls = p.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: g.m
				})), "Line", Ss.a),
				Ts = p.a.div("LineContainer", Ss.a),
				Ms = p.a.div("ShortLineContainer", Ss.a);
			var As = e => {
					const {
						collapsed: t,
						depth: s,
						hasGlowBorder: o,
						isAvatarsInCommentsEnabled: n,
						onLineClick: r,
						onLineMouseOver: i,
						onLineMouseOut: d,
						onShortLineClick: c,
						parentNodeIds: m,
						type: p
					} = e;
					return a.a.createElement(Ts, null, Ps()(s + 1, e => e === s ? p !== h.a.Comment || t ? null : a.a.createElement(Ms, {
						key: m[e]
					}, a.a.createElement(Ls, {
						className: Object(l.a)(m[e], {
							[Ss.a.hasGlowBorder]: !!o,
							[Ss.a.topLevel]: 0 === s,
							[Ss.a.redesign]: n
						}),
						onClick: c,
						onMouseOver: () => i(m[e]),
						onMouseOut: () => d(m[e])
					})) : a.a.createElement(Ls, {
						className: m[e],
						key: m[e],
						onClick: r(e),
						onMouseOver: () => i(m[e]),
						onMouseOut: () => d(m[e])
					})))
				},
				Ns = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Fs = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				Rs = s.n(Fs);
			const Ds = p.a.div("CommentListNodeWrapper", Rs.a),
				Bs = e => {
					const t = document.querySelectorAll(`.${e}`);
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(g.f)
				},
				Vs = () => {
					const e = document.querySelectorAll(`.${g.f}`);
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(g.f)
				};
			var zs = Object(d.b)(() => Object(c.c)({
				collapsed: (e, {
					commentLink: t,
					commentsPageKey: s
				}) => Object(qt.b)(e, {
					commentId: t.id,
					commentsPageKey: s
				}),
				commentListNode: (e, t) => Object(T.l)(e, t),
				depth: (e, t) => Object(T.j)(e, t),
				highlightTreatment: (e, {
					commentLink: t
				}) => {
					let s = null;
					const o = Object(T.l)(e, {
						commentLink: t
					});
					if (o && t.type === h.a.Comment) {
						s = E(o.treatmentTags)
					}
					return s
				},
				isActive: (e, {
					commentLink: t
				}) => !!e.shortcuts.activeCommentId && t.id === e.shortcuts.activeCommentId,
				isAvatarsInCommentsEnabled: Ns.a,
				isAwarded: (e, {
					commentLink: t
				}) => {
					const s = Object(T.l)(e, {
						commentLink: t
					});
					return !(t.type !== h.a.Comment || !s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(A.a)(e, t);
						return s && s.coinPrice >= f.g
					})
				},
				isHighlighted: (e, {
					commentLink: t
				}) => {
					const s = Object(T.p)(e);
					if (s === L.a.None) return !1;
					if (t.type !== h.a.Comment) return !1;
					const o = t.id,
						n = Object(M.a)(e, {
							commentId: o
						});
					if (!n) return !1;
					const r = Object(R.r)(e),
						i = !!Object(N.h)(e, {
							postId: n.postId
						}),
						a = Object(F.I)(e, {
							postId: n.postId
						});
					if (!a || !a.previousVisits || a.previousVisits.length < 1) return !1;
					const d = s === L.a.Last ? a.previousVisits[a.previousVisits.length - 1] : a.previousVisits[0];
					return (i || r) && n.created > d
				}
			}), (e, {
				commentLink: t,
				commentsPageKey: s,
				scrollToAndRemeasure: o
			}) => ({
				onLineClick: n => () => {
					e(Object(u.c)({
						commentLink: t,
						commentsPageKey: s,
						lineDepth: n,
						scrollToAndRemeasure: o
					}))
				},
				onShortLineClick: () => e(Object(u.l)({
					commentId: t.id,
					commentsPageKey: s,
					scrollToAndRemeasure: o
				}))
			}))(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: o,
					commentLink: n,
					commentsPageKey: r,
					depth: i,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isAwarded: p,
					isFirstInList: u,
					isHidden: g,
					isHighlighted: f,
					onLineClick: y,
					onShortLineClick: C,
					parentNodeIds: x,
					renderedInOverlay: v,
					scrollToAndRemeasure: _
				} = e, k = !!p, O = !(!d || !d.glowHexColor), w = O && i > 0, E = O, j = a.a.createElement(Ds, {
					className: Object(l.a)(s, {
						[Rs.a.isHidden]: g,
						[Rs.a.glowBorderTopPadding]: w,
						[Rs.a.glowBorderBottomPadding]: E
					}),
					id: n.id,
					style: {
						paddingLeft: i * (b.w + b.v) + (n.type === h.a.Comment ? b.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(As, {
					collapsed: o,
					depth: i,
					hasGlowBorder: w,
					isAvatarsInCommentsEnabled: m,
					onLineClick: y,
					onLineMouseOver: Bs,
					onLineMouseOut: Vs,
					onShortLineClick: C,
					type: n.type,
					parentNodeIds: x
				}), Ws({
					childrenInfo: t,
					clearHovered: Vs,
					commentLink: n,
					commentsPageKey: r,
					onLineMouseOver: Bs,
					hasAwardGradient: k,
					highlightTreatment: d,
					isActive: c,
					isAvatarsInCommentsEnabled: m,
					isFirstInList: u,
					isHighlighted: f,
					renderedInOverlay: v,
					scrollToAndRemeasure: _
				}));
				return m && n.type === h.a.Comment ? a.a.createElement(Ft, null, j) : j
			});
			const Ws = ({
				childrenInfo: e,
				clearHovered: t,
				commentLink: s,
				commentsPageKey: o,
				hasAwardGradient: n,
				highlightTreatment: r,
				isActive: i,
				isAvatarsInCommentsEnabled: d,
				isFirstInList: c,
				isHighlighted: l,
				onLineMouseOver: m,
				renderedInOverlay: p,
				scrollToAndRemeasure: u
			}) => {
				switch (s.type) {
					case h.a.Comment:
						return a.a.createElement(ps, {
							childrenInfo: e,
							clearHovered: t,
							commentId: s.id,
							commentsPageKey: o,
							hasAwardGradient: n,
							highlightTreatment: r,
							isActive: i,
							isAvatarsInCommentsEnabled: d,
							isFirstInList: c,
							isHighlighted: l,
							onLineMouseOver: m,
							renderedInOverlay: p,
							scrollToAndRemeasure: u
						});
					case h.a.MoreComments:
						return a.a.createElement(Es.b, {
							commentsPageKey: o,
							isActive: i,
							moreCommentsId: s.id
						});
					case h.a.ContinueThread:
						return a.a.createElement(ws, {
							id: s.id,
							isActive: i
						})
				}
			};
			var Us = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				Hs = s("./src/reddit/components/Comments/States/index.tsx"),
				Ks = s("./src/reddit/components/Scroller/Simple.tsx"),
				qs = s("./src/reddit/constants/elementIds.ts"),
				Gs = s("./src/reddit/featureFlags/index.ts"),
				Ys = s("./src/reddit/helpers/commentList/index.ts"),
				Qs = s("./src/reddit/selectors/realtimeComments.ts"),
				Js = s("./src/telemetry/index.ts"),
				Zs = s("./src/lib/LRUCache/index.ts"),
				Xs = s("./src/reddit/actions/comment/websocket/index.ts"),
				$s = s("./src/reddit/components/Comments/index.m.less"),
				eo = s.n($s);
			const to = b.f + 10,
				so = 65,
				oo = p.a.wrapped(Ks.b, "Scroller", eo.a),
				no = Object(c.c)({
					allCollapsed: T.a,
					commentLinks: T.k,
					commentThreadLinkSet: T.o,
					isRealtimeCommentsExperimentEnabled: Qs.a,
					liveCommentsWebsocket: F.G,
					measureScrollFPS: Gs.d.measureScrollFPS,
					moreComments: T.b,
					postPermalink: F.H
				}),
				ro = Object(d.b)(no, (e, t) => ({
					onCommentEnteredViewport: t => e(Object(u.d)(t)),
					onCommentLeftViewport: (t, s) => e(Object(u.g)(t, s)),
					onLiveCommentsEnd: (t, s) => e(Object(Xs.b)(t, s)),
					onLiveCommentsSubscribe: (s, o, n) => e(Object(Xs.a)(s, o, n, t.subredditId))
				})),
				io = new Zs.a(500),
				ao = new Zs.a(500),
				co = (e, t) => {
					const s = `entered-${e}`;
					let o = io.get(s);
					return void 0 === o && (o = () => {
						t.onCommentEnteredViewport(e)
					}, io.set(s, o)), o
				},
				lo = (e, t) => {
					const s = `left-${e}`;
					let o = ao.get(s);
					return void 0 === o && (o = s => {
						t.onCommentLeftViewport(e, s)
					}, ao.set(s, o)), o
				};
			class mo extends a.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const o = s[e.id].depth,
							n = t.findIndex(t => t.id === e.id);
						if (0 === o || 0 === n) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const r = t[n - 1],
							i = this.parentNodeIdsMap[r.id].slice();
						return this.parentNodeIdsMap[e.id] = i.filter(e => !!s[e] && s[e].depth < o), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.parentNodeIdsMap = {}, Us.c(), this.childrenInfoMap = {}
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						commentLinks: t,
						commentsPageKey: s,
						allCollapsed: o,
						commentThreadLinkSet: n,
						isRealtimeCommentsExperimentEnabled: r,
						liveCommentsWebsocket: i,
						moreComments: a,
						onLiveCommentsSubscribe: d,
						postId: c
					} = this.props;
					this.timerId && Js.c.cancel(this.timerId), t.length && (this.timerId = Js.c.start()), r && i && d && !e && (d(s, i, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = i), this.findHiddenNodes(t, o, n, a)
				}
				componentDidMount() {
					this.timerId && Object(Js.b)(m.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Js.c.end(this.timerId)
					})
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: o,
						commentThreadLinkSet: n,
						moreComments: i
					} = e;
					(s !== this.props.commentsPageKey || o.length > this.props.commentLinks.length || !r()(t, this.props.allCollapsed)) && this.findHiddenNodes(o, t, n, i)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: o
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !r()(e.allCollapsed, o) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && Js.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = Js.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(Js.b)(m.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: Js.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					const {
						commentId: e,
						isRealtimeCommentsExperimentEnabled: t,
						onLiveCommentsEnd: s
					} = this.props;
					this.timerId && Js.c.cancel(this.timerId), t && this._subscribedPostId && this._subscribedLiveCommentsWebsocket && s && !e && s(this._subscribedLiveCommentsWebsocket, this._subscribedPostId)
				}
				findHiddenNodes(e, t, s, o) {
					if (!t || !Object.keys(t).length) return;
					let n = null,
						r = 1 / 0,
						i = 0,
						a = !1;
					Us.c();
					for (let d = 0; d < e.length; d++) {
						const c = e[d];
						n && (s[c.id].depth > r ? (Us.a(c.id), i += Object(Ys.d)(c, o), c.type === h.a.ContinueThread && (a = !0)) : (this.childrenInfoMap[n] = {
							numChildren: i,
							hasContinueThread: a
						}, n = null, r = 1 / 0, i = 0, a = !1)), !n && t[c.id] && (n = c.id, r = s[c.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: o,
						onCommentLeftViewport: n,
						renderedInOverlay: r
					} = this.props, i = co(e.id, {
						onCommentEnteredViewport: o,
						onCommentLeftViewport: n
					}), d = lo(e.id, {
						onCommentEnteredViewport: o,
						onCommentLeftViewport: n
					});
					return {
						estHeight: Us.b(e.id) ? 0 : so,
						id: e.id,
						trackOnEnteredViewport: i,
						trackOnExitedViewport: d,
						render: ({
							placeholderRecommended: o,
							height: n,
							width: i,
							scrollToAndRemeasure: d
						}) => o ? a.a.createElement("div", {
							style: {
								height: n,
								backgroundColor: "#fff"
							}
						}) : a.a.createElement(zs, {
							childrenInfo: this.getChildrenInfo(e.id),
							commentLink: e,
							commentsPageKey: s,
							id: e.id,
							isFirstInList: 0 === t,
							isHidden: Us.b(e.id),
							scrollToAndRemeasure: d,
							renderedInOverlay: !!r,
							parentNodeIds: this.getParentNodeIds(e)
						})
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: o,
						renderedInOverlay: n
					} = this.props;
					let r;
					if (o) {
						r = `comments-${n?"lightbox":"page"}`
					}
					const i = t.map((e, t) => this.getScrollChild(e, t));
					return a.a.createElement(oo, {
						className: Object(l.a)(eo.a.Scroller, e),
						disableScrollCache: n,
						key: s,
						getContainer: () => n ? document.getElementById(qs.d) : null,
						preventScrollOnMount: !0,
						scrollToChildPadding: to,
						trackingName: r
					}, i)
				}
				renderEmptyState() {
					return this.props.commentId ? a.a.createElement(Hs.g, {
						link: this.props.postPermalink
					}) : a.a.createElement(Hs.c, null)
				}
			}
			t.a = ro(mo)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(o.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("ChatMessageInput~ChatPost"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsChat/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = n
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.m.less": function(e, t, s) {
			e.exports = {
				LoaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				loaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				Icon: "_1nrdmuhkCLXh8N_46gKAyn",
				icon: "_1nrdmuhkCLXh8N_46gKAyn",
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X",
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = i.a.div("LoaderWrapper", c.a),
				m = i.a.div("Icon", c.a),
				p = i.a.div("Byline", c.a),
				u = Object(r.a)({
					ErrorComponent: () => n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(p, null)),
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(p, null))
				});
			t.a = e => n.a.createElement(u, e)
		},
		"./src/reddit/components/CommentsPageNativeAd/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "CommentsPageNativeAd",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CommentsPageNativeAd").then(s.bind(null, "./src/reddit/components/CommentsPageNativeAd/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsPageNativeAd/index.tsx"
				}
			})
		},
		"./src/reddit/components/CommentsPageSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_2Zqrm36MciZxq2elpbtQig",
				inFeedAd: "_2vWBnEHUdKqzj9DabP66L1",
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD"
			}
		},
		"./src/reddit/components/CommentsPageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx"),
				h = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				b = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				f = s("./src/reddit/components/PowerupsSidebar/index.tsx"),
				y = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				C = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				x = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				v = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				_ = s("./src/reddit/components/Widgets/ReredditLink/async.tsx"),
				k = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				O = s("./src/reddit/featureFlags/component.tsx"),
				w = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				E = s("./src/reddit/models/Post/index.ts"),
				j = s("./src/reddit/selectors/experiments/postSeo.ts"),
				P = s("./src/reddit/selectors/seo/reredditPromo.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				T = s.n(L);
			const M = Object(O.a)("spPoints", h.a),
				A = Object(O.a)("spLeaderboard", b.a),
				N = Object(o.a)({
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
				F = Object(c.c)({
					isLoggedIn: S.J,
					postSEOV2IdCardVariant: j.i,
					shouldShowReredditPromo: P.a,
					widgets: Object(p.a)(I.s)
				}),
				R = Object(d.b)(F);
			class D extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e, t) {
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets) || this.props.post.id !== e.post.id
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isOverlay: s,
						subredditName: o,
						post: n,
						isFakeOverlay: r,
						postSEOV2IdCardVariant: i
					} = this.props, d = !Object(j.d)(i) && !Object(j.g)(i);
					return a.a.createElement(x.a, {
						adComponentOnFakeOverlay: r,
						adComponent: d ? a.a.createElement(y.a, {
							postId: n.id,
							isOverlay: s,
							listingName: o,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: w.a.BOTTOM,
							refreshKey: n.id,
							sizes: m.n,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isLoggedIn: s,
						isOverlay: o,
						post: n,
						postSEOV2IdCardVariant: r,
						shouldShowReredditPromo: i,
						subredditId: d,
						subredditName: c,
						widgets: p
					} = this.props;
					let h = 0;
					const b = Object(j.d)(r) || Object(j.g)(r),
						x = a.a.createElement(y.a, {
							postId: n.id,
							isOverlay: o,
							listingName: c,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: h++,
							position: w.a.FIRST,
							refreshKey: n.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return a.a.createElement("div", {
						className: Object(l.a)(T.a.outerWrapper, e)
					}, Object(E.o)(n) ? a.a.createElement(N, {
						profileName: c,
						isOverlay: o || !1
					}) : a.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: o,
						listingName: c,
						postId: n.id,
						rememberPosition: n.numComments > 0,
						isMinimal: b
					}), a.a.createElement(u.a, {
						cardClassName: T.a.card,
						subredditId: d
					}), a.a.createElement(M, {
						className: T.a.card,
						subredditId: d,
						uniqueId: n.id
					}), a.a.createElement(A, {
						className: T.a.card,
						subredditId: d,
						uniqueId: n.id
					}), a.a.createElement(f.a, {
						subredditId: d
					}), x, s && p.map((e, t) => a.a.createElement(C.a, {
						key: `widgetSpacer${t}`
					}, a.a.createElement(k.a, {
						subredditName: c,
						widget: e
					}))), n.isSponsored && a.a.createElement(C.a, null, a.a.createElement(v.a, null)), i && a.a.createElement(_.a, {
						directoryTimestamp: n.created,
						postId: n.id
					}), this.renderFooter(h++))
				}
			}
			t.a = R(D)
		},
		"./src/reddit/components/CommentsWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				ContentWrapper: "_1ump7uMrSA43cqok14tPrG",
				contentWrapper: "_1ump7uMrSA43cqok14tPrG",
				TruncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				truncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				MoreCommentsButton: "j9NixHqtN2j8SKHcdJ0om",
				moreCommentsButton: "j9NixHqtN2j8SKHcdJ0om"
			}
		},
		"./src/reddit/components/CommentsWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/models/Subreddit/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				h = s("./src/reddit/selectors/experiments/postSeo.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				f = s.n(g);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = "500px", x = 3, v = Object(i.c)({
				hasDismissedTruncation: u.b,
				isGQLLoggedIn: b.I,
				isLoggedIn: b.J,
				isPostSEOEligible: h.e,
				postSEOV2TruncatedVariant: h.j
			}), _ = Object(r.b)(v);
			class k extends n.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: o,
						hasDismissedTruncation: r,
						innerRef: i,
						isCommentsListTruncated: d,
						isGQLLoggedIn: u,
						isLoggedIn: h,
						isOverlay: b,
						numberOfComments: g,
						onClick: v,
						subredditOrProfile: _
					} = this.props, k = !(!_ || Object(m.g)(_)), O = d && k && (g >= x && !b || !r) && (!u && !h), w = O && !e, E = O ? f.a.TruncatedComments : "";
					return n.a.createElement("div", {
						onClick: v,
						ref: i
					}, n.a.createElement("div", {
						className: Object(a.a)(f.a.ContentWrapper, s, E),
						style: {
							"--commentswrapper-gradient-color": Object(p.a)(this.props).body,
							maxHeight: O ? C : "unset"
						}
					}, t), w && n.a.createElement(l.i, {
						className: f.a.MoreCommentsButton,
						onClick: o,
						"data-redditstyle": !0
					}, y._("View Entire Discussion ({number of comments} Comments)", [y._param("number of comments", Object(c.b)(g))], {
						hk: "1pmqUt"
					})))
				}
			}
			t.a = Object(d.a)(_(k))
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				d = s.n(a);
			t.a = i.a.wrapped(e => n.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, s) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/Inline/index.tsx"),
				r = s("./src/reddit/components/Hovercards/helpers.m.less"),
				i = s.n(r);
			const a = o.a.wrapped(n.a, "UserActionItem", i.a),
				d = e => {
					const {
						author: t,
						itemId: s,
						subredditName: o,
						tooltipIdPrefix: n,
						tooltipType: r
					} = e;
					let i = n;
					return s && (i = `${i}--${s}`), r && (i = `${i}--${r}`), t && (i = `${i}--${t}`), o && (i = `${i}--${o}`), i
				}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = s.n(i),
				d = s("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", a.a),
				l = d.a.div("TextWrapper", a.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: o,
					subtitle: i,
					title: d
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, n.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), o ? n.a.createElement(c, null, o) : n.a.createElement(c, null), n.a.createElement(l, null, n.a.createElement("div", {
					className: a.a.title
				}, d), i && n.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				bannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				ArchivedIcon: "_3Apkcb3itLCGec85v2ZzFz",
				archivedIcon: "_3Apkcb3itLCGec85v2ZzFz"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(c);
			t.a = () => r.a.createElement(d.a, {
				className: l.a.BannerBase,
				color: i.b.locked,
				icon: r.a.createElement(a.a, {
					className: l.a.ArchivedIcon
				}),
				subtitle: o.fbt._("New comments cannot be posted and votes cannot be cast", null, {
					hk: "3jwi5b"
				}),
				title: o.fbt._("This thread is archived", null, {
					hk: "kEcat"
				})
			})
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				lockIcon: "_26YMkU38Pb6t5wXIJSne-H",
				bannerBase: "jf95ZrrjIs2i--Ud8Kvb7"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/icons/svgs/SquareLock/index.tsx"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				l = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				m = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				p = s.n(m);
			const u = r.a.createElement(d.a, {
					className: p.a.lockIcon
				}),
				h = e => Object(c.g)(e) ? i.d.profile : i.d.subreddit;

			function b({
				subredditOrProfile: e
			}) {
				const t = e ? o.fbt._("This thread has been locked by the moderators of {communityname}", [o.fbt._param("communityname", h(e) + e.name)], {
					hk: "2HSQXz"
				}) : o.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return r.a.createElement(l.a, {
					className: p.a.bannerBase,
					color: a.b.locked,
					icon: u,
					subtitle: o.fbt._("New comments cannot be posted", null, {
						hk: "2A32Yr"
					}),
					title: t
				})
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less": function(e, t, s) {
			e.exports = {
				contestModeEnabled: "_3Jf9vrUhPCp1M6DPL_bjy9",
				TrophyIcon: "_3v30vS-N87epKUIqWSlBm1",
				trophyIcon: "_3v30vS-N87epKUIqWSlBm1"
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/icons/svgs/Trophy/index.tsx"),
				l = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				m = s.n(l);
			const p = a.a.wrapped(c.a, "TrophyIcon", m.a);
			t.a = Object(i.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: s
				} = e, n = t ? o.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : o.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return r.a.createElement(d.a, {
					className: m.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: r.a.createElement(p, null),
					subtitle: n,
					title: o.fbt._("This post has contest mode enabled", null, {
						hk: "42oz5Q"
					})
				})
			})
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				h = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				b = s.n(h);
			const g = r.a.createElement(m.a, {
					className: b.a.icon
				}),
				f = Object(a.c)({
					subreddit: p.A,
					subredditAboutInfo: p.x
				}),
				y = Object(i.b)(f);
			t.a = y(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const n = s && s.quarantineMessageHtml,
					i = s && s.quarantineMessage || o.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return r.a.createElement(u.a, {
					className: b.a.container,
					color: c.b.quarantine,
					icon: g,
					subtitle: r.a.createElement("span", null, o.fbt._("This community is {=quarantined}", [o.fbt._param("=quarantined", r.a.createElement("a", {
						className: b.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, o.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", n ? r.a.createElement(d.a, {
						className: b.a.rawHtmlDisplay,
						html: n
					}) : i, " ", r.a.createElement(l.a, {
						className: b.a.link,
						to: "/"
					}, o.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: o.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = s("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: s,
					to: o,
					...r
				} = e, c = Object(a.b)(o);
				return n.a.createElement(i.a, d({
					className: s,
					to: c
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...s
				} = e, o = t ? c : r.a;
				return n.a.createElement(o, l({}, s, {
					children: s.children,
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}))
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/PostList/index.tsx"),
				n = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(o.a)
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lottie-web/build/player/lottie.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/LottieAnimation/util.ts");
			const d = i.a.memo(e => {
				const t = i.a.createRef(),
					{
						assetData: s,
						assetUrl: o,
						className: d,
						hidden: c,
						loop: l,
						onClick: m,
						prefersReducedAnimation: p
					} = e,
					[u, h] = Object(r.useState)(s);
				Object(r.useEffect)(() => {
					o ? Object(a.a)(o).then(h) : s && h(s)
				}, [o, s]);
				const [b, g] = Object(r.useState)(null);
				Object(r.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || b || !u) return;
					const s = n.a.loadAnimation({
						autoplay: !1,
						loop: l,
						container: e,
						animationData: u
					});
					g(s)
				}, [l, t, b, u]), Object(r.useEffect)(() => {
					if (b)
						if (c) b.stop();
						else if (p) {
						const e = b.getDuration(!0);
						b.goToAndPlay(e, !0)
					} else b.goToAndPlay(0)
				}, [c, p, b]);
				const f = Object(r.useCallback)(() => {
					b && b.goToAndPlay(0)
				}, [b]);
				return i.a.createElement("div", {
					className: d,
					style: {
						display: c ? "none" : "block"
					},
					ref: t,
					onClick: m || f
				})
			});
			t.a = d
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./src/reddit/components/ImageWithFallback/index.tsx");
			const o = {};

			function n(e) {
				let t = o[e];
				return t || (t = o[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
			}
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				d = s("./src/reddit/constants/posts.ts"),
				c = s("./src/reddit/helpers/trackers/post.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/components/MediumPost/index.m.less"),
				p = s.n(m);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: s,
				redditStyle: o,
				shouldShowSubscribeButton: m,
				subredditOrProfile: u,
				templatePlaceholderImage: h
			}) => n.a.createElement("div", {
				className: Object(r.a)(p.a.thumbnailContainer, {
					[p.a.mShowingButtonOrOverflow]: m
				})
			}, n.a.createElement("div", {
				className: p.a.thumbnailContainerRow
			}, m && u && n.a.createElement(i.a, {
				className: p.a.subscribeButton,
				getEventFactory: e => Object(c.f)(t.id, e ? "unsubscribe" : "subscribe"),
				identifier: {
					name: u.name,
					type: Object(l.g)(u) ? d.a.PROFILE : d.a.SUBREDDIT
				},
				postId: t.id,
				small: !0
			})), n.a.createElement(a.a, {
				crosspost: e,
				post: t,
				redditStyle: o,
				forceShowNSFW: s,
				templatePlaceholderImage: h
			}))
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				modModeReports: "_3RpVs_MuohyWxfQ8DMI1hz",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				chain: "vLpzNkGe1yVXuRgtBVQWk",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
			}
		},
		"./src/reddit/components/PostContent/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_3UMN4RCVY5288m_fOZlkcg",
				controlsContainer: "_1hwEKkB_38tIoal6fcdrt9",
				postNumbers: "_1svxG6WJ6vr-T9iN3rf5M6",
				flatlistContainer: "UPYG6UwB7XqTeGj4a4vBr",
				mainBody: "_3MC4c3Q_Y41YKtl1TcvyMt",
				leftPadding: "_1mK-LVHGTTlcFpMsjItjYJ",
				postContainer: "_2rszc84L136gWQrkwH6IaM",
				hasEventMeta: "qpc-hx5EvongRjYhe0TOO",
				PostTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				postTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				ExpandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				expandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				ClassicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				classicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				ClassicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				classicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				FullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				fullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				LargePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				largePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				isCommentsPage: "D3IL3FD0RFy_mkKLPwL4",
				adLinkWrapper: "_3SVc61tFn_bE8SioJlUB-J",
				ClassicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				classicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/noop.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				g = s("./src/reddit/models/User/index.ts"),
				f = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				y = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				C = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				x = s("./src/reddit/helpers/path/index.ts"),
				v = s("./src/reddit/helpers/trackers/lightbox.ts"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/actions/tooltip.ts"),
				O = s("./node_modules/lodash/find.js"),
				w = s.n(O),
				E = s("./node_modules/react-motion/lib/react-motion.js");
			const j = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				P = {},
				I = (e = [], t) => {
					const s = w()(e, {
							key: "expando_content"
						}),
						o = s && s.style ? s.style.opacity : 0;
					return t ? o >= 1 ? [{
						key: "expando_content",
						style: {
							opacity: 1
						}
					}] : o > 0 ? [{
						key: "expando_content",
						style: {
							opacity: Object(E.spring)(1, j)
						}
					}] : [{
						key: "expando_content",
						style: {
							opacity: .1
						}
					}] : o < .1 ? [] : [{
						key: "expando_content",
						style: {
							opacity: Object(E.spring)(0, j)
						}
					}]
				};
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), P), this.state = {
						expanded: e.shouldExpand,
						renderTransitionMotion: e.shouldExpand
					}
				}
				componentWillReceiveProps(e) {
					e.shouldExpand && !this.state.renderTransitionMotion ? this.setState(() => ({
						renderTransitionMotion: !0
					}), () => {
						setTimeout(() => {
							this.setState({
								expanded: !0
							})
						})
					}) : e.shouldExpand !== this.state.expanded && this.setState({
						expanded: e.shouldExpand
					})
				}
				render() {
					const {
						renderTransitionMotion: e,
						expanded: t
					} = this.state;
					if (!e) return !1;
					const {
						className: s,
						content: o
					} = this.props;
					return i.a.createElement(E.TransitionMotion, {
						styles: e => I(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => i.a.createElement("div", {
						className: s
					}, e.map(e => i.a.createElement("div", {
						key: e.key,
						style: e.style
					}, o))))
				}
			}
			var L = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/models/Post/index.ts"),
				M = s("./src/reddit/models/Vote/index.ts"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				N = s("./src/reddit/selectors/experiments/categories.ts"),
				F = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				R = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				B = s("./src/reddit/selectors/postCreations.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				z = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				U = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				H = s("./src/reddit/components/AwardBadges/index.tsx"),
				K = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				q = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				G = s("./src/reddit/components/ExpandoButton/index.tsx"),
				Y = s("./src/reddit/components/FlairWrapper/index.tsx"),
				Q = s("./src/reddit/components/Flatlist/index.tsx"),
				J = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Z = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				X = s("./src/reddit/components/ModModeReports/index.tsx"),
				$ = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ee = s("./src/reddit/components/PostContainer/index.tsx"),
				te = s("./src/higherOrderComponents/makeAsync.tsx"),
				se = s("./src/lib/loadWithRetries/index.ts"),
				oe = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const ne = Object(te.a)({
				ErrorComponent: () => i.a.createElement(oe.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(se.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => i.a.createElement(oe.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var re = e => i.a.createElement(ne, e),
				ie = s("./src/reddit/components/PostList/index.tsx"),
				ae = s("./src/reddit/components/PostMedia/index.tsx"),
				de = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ce = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				le = s("./src/reddit/components/PostTitle/index.tsx"),
				me = s("./src/reddit/components/PostTopLine/index.tsx"),
				pe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ue = s("./src/reddit/components/SourceLink/index.tsx"),
				he = s("./src/reddit/constants/componentTestIds.ts"),
				be = s("./src/reddit/constants/postLayout.ts"),
				ge = s("./src/reddit/contexts/PageLayer/index.tsx"),
				fe = s("./src/reddit/helpers/postEvent.ts"),
				ye = s("./src/reddit/selectors/postFlair.ts"),
				Ce = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				xe = s("./src/reddit/constants/colors.ts"),
				ve = s("./src/config.ts"),
				_e = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				ke = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				Oe = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				we = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				Ee = s.n(we);
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Pe = () => je._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [je._param("=User Agreement", i.a.createElement("a", {
				className: Ee.a.link,
				href: "https://www.redditinc.com/policies/user-agreement\\"
			}, je._("User Agreement", null, {
				hk: "3MHgRl"
			}))), je._param("=Content Policy", i.a.createElement("a", {
				className: Ee.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, je._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), Ie = () => je._("This content was removed for a violation of Reddit's {=Content Policy} .", [je._param("=Content Policy", i.a.createElement("a", {
				className: Ee.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, je._("Content Policy", null, {
				hk: "2X6v1w"
			})))], {
				hk: "4DbEQC"
			});
			var Se = e => {
				const {
					hasPerms: t,
					removedBy: s,
					removedByCategory: o,
					subredditName: n
				} = e, r = t ? ((e, t, s) => {
					switch (e) {
						case T.f.AntiEvilOps:
							return je._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "3a8CyR"
							});
						case T.f.Author:
							return je._("This post was removed by the person who originally posted it.", null, {
								hk: "2lyUgL"
							});
						case T.f.AuthorDeleted:
							return je._("This post was deleted by the person who originally posted it.", null, {
								hk: "16LeiH"
							});
						case T.f.AutomodFiltered:
							return je._("This post was reported by automod, and is waiting for your review.", null, {
								hk: "2E46dR"
							});
						case T.f.CommunityOps:
							return je._("This post was removed by Reddit admin, u/{username}.", [je._param("username", t)], {
								hk: "34nHWu"
							});
						case T.f.ContentTakedown:
							return je._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "1wmhiC"
							});
						case T.f.CopyrightTakedown:
							return je._("This post was removed by Reddit's Legal Operations team.", null, {
								hk: "Ukfj"
							});
						case T.f.Moderator:
							return je._("This post was removed by r/{subredditName} moderator, u/{username}.", [je._param("subredditName", s), je._param("username", t)], {
								hk: "270bcn"
							});
						case T.f.Reddit:
							return je._("This post was removed by Reddit's spam filters.", null, {
								hk: "1k3lsh"
							});
						default:
							return je._("This post was removed by Reddit's spam filters.", null, {
								hk: "3oxS8r"
							})
					}
				})(o, s, n) : ((e, t) => {
					switch (e) {
						case T.f.AntiEvilOps:
							return je._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
								hk: "2ZqyRT"
							});
						case T.f.Author:
							return je._("Sorry, this post was removed by the person who originally posted it.", null, {
								hk: "4IRCN"
							});
						case T.f.AuthorDeleted:
							return je._("Sorry, this post was deleted by the person who originally posted it.", null, {
								hk: "4emmIp"
							});
						case T.f.AutomodFiltered:
							return je._("Post is awaiting moderator approval.", null, {
								hk: "wdGOr"
							});
						case T.f.CommunityOps:
							return je._("Sorry, this post was removed by Reddit's Community team.", null, {
								hk: "3fs5lF"
							});
						case T.f.ContentTakedown:
							return je._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "jiKO8"
							});
						case T.f.CopyrightTakedown:
							return je._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
								hk: "1TbEDT"
							});
						case T.f.Moderator:
							return je._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [je._param("subredditName", t)], {
								hk: "12NWKq"
							});
						case T.f.Reddit:
							return je._("Sorry, this post was removed by Reddit's spam filters.", null, {
								hk: "10ItEu"
							});
						default:
							return je._("Sorry, this post has been removed", null, {
								hk: "11sG9V"
							})
					}
				})(o, n), a = t ? (e => {
					switch (e) {
						case T.f.AntiEvilOps:
							return i.a.createElement(Pe, null);
						case T.f.AuthorDeleted:
						case T.f.Author:
							return je._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
								hk: "2KZLgT"
							});
						case T.f.AutomodFiltered:
							return je._("It won’t show up in your community feed until you or another moderator approve it.", null, {
								hk: "2X5ECb"
							});
						case T.f.CommunityOps:
							return je._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [je._param("=just ask", i.a.createElement("a", {
								className: Ee.a.link,
								href: `${ve.a.redditUrl}/message/compose/?to=r/reddit.com`,
								target: "_blank"
							}, je._("just ask", null, {
								hk: "jn9ip"
							})))], {
								hk: "3hMocZ"
							});
						case T.f.ContentTakedown:
							return i.a.createElement(Ie, null);
						case T.f.CopyrightTakedown:
							return je._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "7jiV"
							});
						case T.f.Moderator:
							return je._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
								hk: "22qJOB"
							});
						case T.f.Reddit:
							return je._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3S3oDL"
							});
						default:
							return je._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "uKfHK"
							})
					}
				})(o) : ((e, t) => {
					switch (e) {
						case T.f.AntiEvilOps:
							return i.a.createElement(Pe, null);
						case T.f.AuthorDeleted:
						case T.f.Author:
							return je._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
								hk: "2OBDBc"
							});
						case T.f.AutomodFiltered:
							return je._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [je._param("=[subreddit name]", i.a.createElement("a", {
								className: Ee.a.link,
								href: `${ve.a.redditUrl}/r/${t}`,
								target: "_blank"
							}, je._("{subreddit name}", [je._param("subreddit name", `r/${t}`)], {
								hk: "2o22vl"
							})))], {
								hk: "3dxuEW"
							});
						case T.f.CommunityOps:
							return je._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
								hk: "uPiHS"
							});
						case T.f.ContentTakedown:
							return i.a.createElement(Ie, null);
						case T.f.CopyrightTakedown:
							return je._("This content was removed in response to a copyright claim by a third party.", null, {
								hk: "2e8fhi"
							});
						case T.f.Moderator:
							return je._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
								hk: "QXZPk"
							});
						case T.f.Reddit:
						default:
							return je._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
								hk: "3vUmEz"
							})
					}
				})(o, n), d = t ? xe.b.warning : xe.b.dayModeActionIcon, c = (e => {
					let t;
					switch (e) {
						case T.f.AntiEvilOps:
						case T.f.AutomodFiltered:
						case T.f.CommunityOps:
						case T.f.ContentTakedown:
						case T.f.CopyrightTakedown:
						case T.f.Reddit:
							t = _e.a;
							break;
						case T.f.AuthorDeleted:
						case T.f.Author:
							t = Oe.b;
							break;
						case T.f.Moderator:
							t = ke.a;
							break;
						default:
							t = _e.a
					}
					return i.a.createElement(t, {
						className: Ee.a.icon
					})
				})(o);
				return i.a.createElement(Ce.a, {
					className: Ee.a.BannerBase,
					color: d,
					icon: c,
					subtitle: a,
					title: r
				})
			};

			function Le(e) {
				const {
					isAdminOrMod: t,
					post: s,
					subredditOrProfile: o
				} = e;
				return i.a.createElement(i.a.Fragment, null, o && s.removedByCategory && i.a.createElement(Se, {
					hasPerms: t,
					removedBy: s.removedBy,
					removedByCategory: s.removedByCategory,
					subredditName: o.name
				}))
			}
			var Te = s("./node_modules/fbt/lib/FbtPublic.js"),
				Me = s("./src/lib/prettyPrintNumber/index.ts"),
				Ae = s("./src/reddit/components/PostContent/viewCount.m.less"),
				Ne = s.n(Ae);
			var Fe = ({
					post: e,
					showViewCount: t
				}) => {
					const {
						upvotePercentString: s,
						viewCountString: o
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							s = Object(Me.b)(e.viewCount);
						return {
							upvotePercentString: Te.fbt._("{percent upvoted}% Upvoted", [Te.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: Te.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [Te.fbt._plural(e.viewCount, "number of views", s)], {
								hk: "rP01m"
							})
						}
					})(e), n = t && !!e.viewCount;
					return i.a.createElement("div", {
						className: Ne.a.viewCounts
					}, n && i.a.createElement("span", null, o), n && !!e.upvoteRatio && i.a.createElement("span", {
						className: Ne.a.dotSpacer
					}), !!e.upvoteRatio && i.a.createElement("span", null, s))
				},
				Re = s("./src/reddit/components/PostContent/index.m.less"),
				De = s.n(Re);
			const Be = p.a.wrapped(le.c, "PostTitle", De.a),
				Ve = p.a.wrapped(G.a, "ExpandoButton", De.a),
				ze = p.a.wrapped(S, "ClassicExpandoMotion", De.a),
				We = p.a.wrapped(Q.c, "FullWidthFlatlist", De.a),
				Ue = p.a.wrapped(K.a, "ClassicThumbnail", De.a),
				He = Object(ge.t)({
					isCommentsPage: ge.w,
					pageLayer: e => e
				}),
				Ke = Object(a.b)(() => Object(c.c)({
					activeModalId: A.a,
					flairStyleTemplate: ge.R,
					currentUser: z.i,
					crosspost: V.d,
					hideNSFWPref: z.B,
					imageGalleryCurrentItem: V.i,
					isAdminOrMod: (e, t) => {
						const s = Object(V.U)(e, {
							postId: t.postId
						});
						return !!s && Object(R.a)(e, {
							subredditId: s.id
						})
					},
					isCurrentUserProfilePost: V.k,
					isExpanded: V.m,
					post: V.I,
					moderatorPermissions: D.h,
					modModeEnabled: ge.P,
					isInCategoriesExperiment: N.a,
					showAwardsPlaque: F.a,
					showEditFlair: ye.a,
					subredditOrProfile: V.U,
					isEditing: B.F,
					userIsOp: z.ob
				}), (e, {
					pageLayer: t,
					postId: s
				}) => ({
					onIgnoreReports: () => e(Object(h.S)(s)),
					onOpenReportsDropdown: t => e(Object(k.h)({
						tooltipId: t
					})),
					onVoteClick: t => {
						const o = t === M.a.upvoted ? Object(h.U)(s) : Object(h.r)(s);
						e(o)
					},
					fireAdPixelsOfType: (t, s) => e(Object(h.u)(t, s)),
					openPost: t => e(Object(h.E)(t))
				})),
				qe = p.a.wrapped(d.a, "ThumbLink", De.a),
				Ge = ({
					post: e,
					templatePlaceholderImage: t
				}) => e.source ? i.a.createElement(Ue, {
					post: e,
					forceShowNSFW: !0,
					templatePlaceholderImage: t
				}) : i.a.createElement(qe, {
					to: Object(x.b)(e.permalink)
				}, i.a.createElement(Ue, {
					post: e,
					forceShowNSFW: !0
				})),
				Ye = ({
					post: e,
					isExpanded: t,
					scrollerItemRef: s
				}) => i.a.createElement(ze, {
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(ae.a, {
						className: De.a.ClassicPostMedia,
						isListing: !1,
						isNotCardView: !0,
						post: e,
						shouldLoad: !0,
						showFull: !0,
						showCentered: !0,
						scrollerItemRef: s
					})),
					shouldExpand: !!t
				});
			t.a = He(Ke(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: o,
					fireAdPixelsOfType: a,
					flairStyleTemplate: d,
					hideNSFWPref: c,
					isActionBarAnimationEnabled: p,
					imageGalleryCurrentItem: h,
					isAdminOrMod: x,
					isCommentsPage: k,
					isCurrentUserProfilePost: O,
					isEditing: w,
					isExpanded: E,
					isOverlay: j,
					moderatorPermissions: P,
					modModeEnabled: I,
					onIgnoreReports: S,
					onOpenReportsDropdown: M,
					openPost: A,
					onVoteClick: N,
					post: F,
					scrollerItemRef: R,
					sendEvent: D,
					showAwardsPlaque: B,
					showEditFlair: V,
					subredditOrProfile: z,
					userIsOp: K
				} = e, G = F.isSponsored ? Object(ie.b)(F.id, {
					fireAdPixelsOfType: a,
					openPost: A
				}) : n.a, te = Object(C.a)(P), se = Object(f.a)(P), oe = Object(y.a)(P), ne = te || se, ge = ((e, t, s) => {
					const [o, n] = e ? [Object(g.e)(e) === s.author, e.isEmployee] : [!1, !1];
					return o || t || n
				})(o, ne, F), ye = !!F.media && (F.media.type === L.o.RTJSON || F.media.type === L.o.TEXT), Ce = K && ye, xe = Object($.c)(F);
				let ve;
				const _e = !(I && C.a),
					ke = Object(de.h)({
						hide: _e,
						editPost: _e,
						save: _e,
						report: _e
					}),
					Oe = F.removedByCategory === T.f.AuthorDeleted,
					we = o && (o.displayText === F.author || o.username === F.author),
					Ee = !Oe && (we || x || !(F.removedByCategory && F.media && (Object(L.J)(F.media) || Object(L.H)(F.media)))),
					je = Object(l.t)(F, h),
					{
						source: Pe
					} = je,
					Ie = F.removedByCategory === T.f.Reddit && Object(u.e)(F.created) > 24,
					Se = F.removedByCategory && F.removedByCategory !== T.f.Reddit || Ie,
					Te = i.a.createElement(Be, {
						post: F,
						size: le.b.ExtraLarge,
						showCategoryTag: j,
						isOverlay: j,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Me = i.a.createElement(Fe, {
						post: F,
						showViewCount: ge
					}),
					Ae = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: o
						} = e;
						return s ? be.g.Classic : t ? be.g.Large : o.media ? be.g.Large : be.g.Medium
					})(e);
				if (Ae === be.g.Classic) ve = i.a.createElement("div", {
					"data-test-id": he.e
				}, i.a.createElement(ce.a, {
					model: F,
					handleVote: N,
					subreddit: z,
					isOverlay: j,
					isActionBarAnimationEnabled: p,
					postId: F.id,
					isForceSelected: !j && p
				}), i.a.createElement("div", {
					className: De.a.mainBody
				}, i.a.createElement("div", {
					className: De.a.content
				}, i.a.createElement(me.a, {
					hideAwards: B,
					hideNSFWPref: c,
					inSubredditOrProfile: !0,
					isCommentsPage: k,
					isCurrentUserProfilePost: O,
					isOverlay: !!j,
					isTopicPage: !1,
					post: F,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!j && !F.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: z
				}), Te, i.a.createElement(Y.a, {
					className: k ? De.a.leftPadding : void 0,
					post: F,
					showCategoryTag: e.isInCategoriesExperiment && k,
					sendEvent: D
				}), I && te && xe && i.a.createElement(X.a, {
					onIgnoreReports: S,
					reportable: F
				}), i.a.createElement(J.d, null), i.a.createElement("div", {
					className: De.a.FlatlistContainer
				}, i.a.createElement(Ve, {
					crosspost: s || void 0,
					isExpanded: !!E,
					post: F,
					useMediaIcons: !1
				}), Ye(e), B && i.a.createElement(H.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: F,
					tooltipType: j ? pe.c.Lightbox : void 0
				}), i.a.createElement(We, {
					currentUser: o,
					hasModFlairPerms: se,
					hasModFullPerms: oe,
					hasModPostPerms: te,
					isOverlay: j,
					onIgnoreReports: S,
					onOpenReportsDropdown: M,
					modModeEnabled: I,
					post: F,
					showUpvotePercent: !0,
					showViewCount: ge,
					useFlatlistBreakpoints: ke,
					isActionBarAnimationEnabled: p,
					isForceSelected: !j && p
				}))), Object(b.a)(F) && i.a.createElement(Ge, {
					post: F,
					templatePlaceholderImage: d && d.postPlaceholderImage
				})));
				else if (Ae === be.g.Medium) {
					const t = Object(b.a)(F);
					ve = i.a.createElement("div", {
						"data-test-id": he.e
					}, i.a.createElement(ce.a, {
						model: F,
						handleVote: N,
						subreddit: z,
						isOverlay: j,
						isActionBarAnimationEnabled: p,
						postId: F.id,
						isForceSelected: !j && p
					}), i.a.createElement("div", {
						className: De.a.mainBody
					}, i.a.createElement("div", {
						className: De.a.content
					}, i.a.createElement(me.a, {
						hideAwards: B,
						hideNSFWPref: c,
						inSubredditOrProfile: !0,
						isCommentsPage: k,
						isCurrentUserProfilePost: O,
						isOverlay: !!j,
						isTopicPage: !1,
						post: F,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!j && !F.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: z
					}), Te, F.source && i.a.createElement(ue.a, {
						post: F,
						isCommentsPage: k
					}), i.a.createElement(Y.a, {
						className: k ? De.a.leftPadding : void 0,
						post: F,
						showCategoryTag: e.isInCategoriesExperiment && k,
						sendEvent: D
					}), z && Se && i.a.createElement(Le, {
						isAdminOrMod: x,
						post: F,
						subredditOrProfile: z
					}), I && te && xe && i.a.createElement(X.a, {
						onIgnoreReports: S,
						reportable: F
					})), t && i.a.createElement(Z.a, {
						post: F,
						forceShowNSFW: !0,
						hasModPostPerms: ne,
						isCommentsPage: k,
						isOverlay: !0,
						modModeEnabled: I,
						templatePlaceholderImage: d && d.postPlaceholderImage,
						subredditOrProfile: z
					})), i.a.createElement(J.d, null), B && i.a.createElement(H.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !0,
						thing: F,
						tooltipType: j ? pe.c.Lightbox : void 0
					}), i.a.createElement("div", {
						className: De.a.controlsContainer
					}, i.a.createElement(Q.c, {
						currentUser: o,
						hasModFlairPerms: se,
						hasModFullPerms: oe,
						hasModPostPerms: te,
						isOverlay: j,
						modModeEnabled: I,
						onIgnoreReports: S,
						onOpenReportsDropdown: M,
						post: F,
						showEditPost: Ce,
						showEditFlair: V,
						tooltipType: j ? pe.c.Lightbox : void 0,
						useFlatlistBreakpoints: ke,
						isActionBarAnimationEnabled: p,
						isForceSelected: !j && p
					}), Me))
				} else Ae === be.g.Large && (ve = i.a.createElement("div", {
					"data-test-id": he.e
				}, i.a.createElement(ce.a, {
					model: F,
					handleVote: N,
					subreddit: z,
					isOverlay: j,
					isActionBarAnimationEnabled: p,
					postId: F.id,
					isForceSelected: !j && p
				}), i.a.createElement(me.a, {
					hideAwards: B,
					hideNSFWPref: c,
					inSubredditOrProfile: !0,
					isCommentsPage: k,
					isCurrentUserProfilePost: O,
					isOverlay: !!j,
					isTopicPage: !1,
					post: F,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!j && !F.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: z
				}), Te, ((e, t, s, o) => e.source && !t && (s || o))(F, s, j, k) && i.a.createElement(ue.a, {
					post: F,
					isCommentsPage: k
				}), i.a.createElement(Y.a, {
					className: k ? De.a.leftPadding : void 0,
					post: F,
					showCategoryTag: e.isInCategoriesExperiment && k,
					sendEvent: D
				}), z && Se && i.a.createElement(Le, {
					isAdminOrMod: x,
					post: F,
					subredditOrProfile: z
				}), w ? i.a.createElement(re, {
					post: F
				}) : Ee && i.a.createElement(ae.a, {
					className: Object(m.a)(De.a.LargePostMedia, {
						[De.a.isCommentsPage]: k
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: j,
					isOverlay: j,
					post: F,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !j,
					showCentered: !0,
					scrollerItemRef: R
				}), F.isSponsored && Pe && Pe.url && i.a.createElement(W.a, {
					className: De.a.adLinkWrapper
				}, i.a.createElement(U.a, {
					post: F,
					adLinkContent: je
				})), I && te && xe && i.a.createElement(X.a, {
					onIgnoreReports: S,
					reportable: F
				}), i.a.createElement(J.d, null), B && i.a.createElement(H.a, {
					awardsPlaqueStyle: !0,
					isPostDetail: !0,
					thing: F,
					tooltipType: j ? pe.c.Lightbox : void 0
				}), i.a.createElement("div", {
					className: De.a.controlsContainer
				}, i.a.createElement(Q.c, {
					currentUser: o,
					hasModFlairPerms: se,
					hasModFullPerms: oe,
					hasModPostPerms: te,
					isOverlay: j,
					modModeEnabled: I,
					onIgnoreReports: S,
					onOpenReportsDropdown: M,
					post: F,
					showEditPost: Ce,
					showEditFlair: V,
					tooltipType: j ? pe.c.Lightbox : void 0,
					useFlatlistBreakpoints: ke,
					isActionBarAnimationEnabled: p,
					isForceSelected: !j && p
				}), Me)));
				const Ne = Object(r.useCallback)((e, t) => Object(_.f)(e, t), []);
				return i.a.createElement(ee.a, {
					className: Object(m.a)(t, De.a.postContainer, {
						[De.a.hasEventMeta]: Object(fe.a)(F)
					}),
					isOverlay: j,
					post: F,
					eventFactory: j ? v.b : Ne,
					onClick: G
				}, i.a.createElement(q.a, {
					post: F
				}), ve)
			}))
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, s) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Y
			})), s.d(t, "a", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/ads/index.ts"),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/fastdom/index.ts"),
				f = s("./src/lib/lessComponent.tsx"),
				y = s("./src/lib/opener/index.ts"),
				C = s("./src/lib/sentry/index.ts"),
				x = s("./src/reddit/components/PostList/LoadMore.tsx"),
				v = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				_ = s("./src/reddit/components/Scroller/Simple.tsx"),
				k = s("./src/reddit/constants/adEvents.ts"),
				O = s("./src/reddit/constants/componentSizes.ts"),
				w = s("./src/reddit/constants/postLayout.ts"),
				E = s("./src/reddit/controls/InternalLink/index.tsx"),
				j = s("./src/reddit/controls/OutboundLink/index.tsx"),
				P = s("./src/reddit/helpers/getClickInfo.ts"),
				I = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				S = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				L = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/helpers/brandSafety/index.ts"),
				M = s("./src/lib/LRUCache/index.ts"),
				A = s("./src/telemetry/index.ts"),
				N = s("./src/telemetry/models/Timer.ts"),
				F = s("./src/reddit/components/PostList/index.m.less"),
				R = s.n(F);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), B = 500, V = new M.a(B), z = new M.a(B), W = new M.a(B), U = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, H = f.a.div("SeeMore", R.a), K = f.a.wrapped(S.a, "ArrowRight", R.a), q = (e, t, s, o, n, r, i, a) => {
				const d = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}-${r}`;
				let c = V.get(d);
				return void 0 === c && (c = () => {
					s && i.onBottomViewed(o, n), i.trackOnPostEnteredViewport(e, t, a)
				}, V.set(d, c)), c
			}, G = (e, t, s, o, n) => {
				const r = `left-${e}-${t}`;
				let i = z.get(r);
				return void 0 === i && (i = r => {
					s.trackOnPostExitedViewport(e, t, r, o, n)
				}, z.set(r, i)), i
			}, Y = (e, t) => {
				const s = `click-${e}`;
				let o = W.get(s);
				return void 0 === o && (o = (e, s, o, n) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, k.a.Click);
						const {
							source: e
						} = Object(u.t)(s, n);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							o && (t = Object(j.a)(s.id, o, t).url), Object(y.d)(t, y.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(P.a)(e)
					})
				}, W.set(s, o)), o
			}, Q = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class J extends m.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new M.a(B), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = c()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = r()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, o = e(), n = [];
						o.forEach(e => n.push(e.id));
						const r = n.map(e => t[e]).filter(Boolean),
							i = r.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(T.a)(r, i))
					}, b.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && A.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = A.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = A.c.end(this.timerId);
						setTimeout(() => Object(A.b)(b.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && A.c.cancel(this.timerId), e.postIds.length && (this.timerId = A.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (g.a.read(() => this.checkAndSendScreenview()), this.timerId && A.c.has(this.timerId)) {
						const e = A.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(A.b)(b.l.Redesign, {
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
					this.timerId && A.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return A.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = A.c.end(e);
					setTimeout(() => {
						s(t(o, N.TimerType.InApp))
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
						postsById: o,
						...n
					} = e, r = Object.keys(s), i = Object.keys(n);
					if (i.length !== r.length) return !0;
					if (i.some(e => s[e] !== n[e])) return !0;
					if (t === o) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((n, r) => {
							const i = 0 === r;
							return s({
								isFirstPost: i,
								layout: e,
								post: t[n]
							}) !== s({
								isFirstPost: i,
								layout: e,
								post: o[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, o) {
					const {
						currentProfileName: n,
						hostPostId: r,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: d,
						isProfilePostListing: c,
						isTopicPage: l,
						listingKey: p,
						listingName: u,
						pageLayer: h,
						pageReferrer: g,
						postClickEventFactory: f,
						redditStyle: y,
						shouldHideFlair: x,
						isActionBarAnimationEnabled: v,
						postIds: _
					} = this.props, k = 0 === t, O = `post-${o}-${e}-${t}-${s?"last-index":""}-${u}-${p}-${g}`;
					let E;
					if (void 0 === (E = this.scrollChildCache.get(O))) {
						const {
							inSubredditOrProfile: j,
							postsById: P
						} = this.props, S = P[e], T = S.crosspostRootId && P[S.crosspostRootId] ? P[S.crosspostRootId] : S;
						S.crosspostRootId && !P[S.crosspostRootId] && C.c.withScope(e => {
							e.setExtra("errorType", b.q.API), e.setExtra("description", `Post ${S.id} is crosspost of ${S.crosspostRootId}, but ` + `${S.crosspostRootId} details are missing in the state`), C.c.captureMessage("Crosspost parent details are missing")
						});
						const M = this.props.postComponentForLayout({
								isCrosspost: !!S.crosspostRootId,
								isFirstPost: k,
								layout: o,
								post: T
							}),
							A = `post-list-item-[layout: ${o}]-[postId: ${e}]`,
							N = q(e, o, s, p, u, g, this.props, t),
							F = G(e, o, this.props, t, h),
							R = Y(e, this.props),
							D = T.media && T.media.type === L.o.EMBED ? T.media.provider : null;
						E = {
							estHeight: Object(I.c)(S, o),
							id: e,
							isFocusable: !(!T.media || !(o === w.g.Large || o === w.g.Classic && Object(L.G)(T.media))) && (L.d.has(T.media.type) && (!D || !L.s.has(D)) && !T.isSpoiler && !T.isNSFW),
							trackOnEnteredViewport: N,
							trackOnExitedViewport: F,
							render: ({
								className: t,
								height: o,
								width: b,
								remeasure: g,
								setScrollerChildRef: C,
								shouldLoadInitially: O
							}) => m.a.createElement(M, {
								className: t,
								currentProfileName: n,
								key: A,
								availableWidth: b,
								eventFactory: f,
								first: k,
								forceLoadMedia: O,
								hostPostId: r,
								inSubredditOrProfile: j,
								isActionBarAnimationEnabled: v,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: d,
								isProfilePostListing: c,
								isTopicPage: l,
								listingKey: p,
								listingName: u,
								pageLayer: h,
								last: s,
								onClickPost: R,
								onSizeChanged: g,
								postId: e,
								postIds: _,
								redditStyle: y,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: C,
								shouldHideFlair: x
							})
						}, this.scrollChildCache.set(O, E)
					}
					return E
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
						onTryAgain: n,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const i = r;
					return m.a.createElement("div", {
						className: R.a.placeholder
					}, m.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && m.a.createElement(v.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: o,
						loadMoreClassName: n,
						onLoadMore: r
					} = this.props;
					if (!s) return m.a.createElement("div", {
						className: R.a.placeholder
					}, m.a.createElement(x.a, {
						className: n,
						isLoading: !!t,
						layout: o,
						countOverride: U[o]
					}), !!e && m.a.createElement(v.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: n,
						isTruncated: r,
						layout: i,
						location: a,
						loadMore: d,
						postIds: c,
						onLoadMore: u
					} = this.props;
					let g = c.map((e, t, s) => {
						const o = t === c.length - 1;
						return this.scrollChildForPost(e, t, o, i)
					});
					n && (g = Q(g, n));
					const f = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						y = a ? Object(o.e)(a) : null,
						C = y || r;
					return m.a.createElement(l.Fragment, null, m.a.createElement(_.b, {
						innerRef: this.updateScrollerRef,
						className: C ? R.a.truncatedPostList : Object(h.a)(R.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: d && d.token ? d.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: u,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: f,
						viewportTopPadding: O.f
					}, g), y && m.a.createElement(H, {
						className: R.a.seeMoreButton
					}, m.a.createElement(E.a, {
						className: R.a.seeMorePostsText,
						to: Object(p.a)(y, {
							type: b.Pb.Posts
						})
					}, D._("See More Posts", null, {
						hk: "3o0CqI"
					}), m.a.createElement(K, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			J.defaultProps = {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				x = s("./src/reddit/components/PostTopLine/index.m.less"),
				v = s.n(x);
			const _ = s("./src/lib/lessComponent.tsx").a.div("Container", v.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideAwards: o,
					hideNSFWPref: x,
					hostPostId: k,
					iconClassName: O,
					inSubredditOrProfile: w,
					isCommentsPage: E,
					isCompactPinnedPost: j,
					isCurrentUserProfilePost: P,
					isOverlay: I,
					isTopicPage: S,
					listingKey: L,
					post: T,
					shouldShowSubscribeButton: M,
					showCornerOutboundLink: A,
					showSubreddit: N,
					showSubredditIcon: F,
					subredditOrProfile: R
				} = e, D = o || S;
				return n.a.createElement(_, {
					className: t
				}, N && R && n.a.createElement("div", {
					className: v.a.subredditIconWrapper
				}, n.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, F && n.a.createElement(l.b, {
					className: Object(r.a)(v.a.subredditIcon, O),
					shouldHideNsfwIcon: x,
					subredditOrProfile: R
				}))), n.a.createElement("div", {
					className: v.a.everythingElseWrapper
				}, N && n.a.createElement(a.h, {
					type: T.belongsTo.type,
					id: T.belongsTo.id
				}), n.a.createElement(c.d, {
					className: v.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: I ? c.c.Lightbox : void 0,
					post: T,
					showSub: N,
					subredditOrProfile: R
				}), n.a.createElement(d.a, {
					className: v.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: j,
					post: T,
					tooltipType: I ? c.c.Lightbox : void 0
				}), !D && n.a.createElement(i.a, {
					isPostDetail: E,
					thing: T,
					tooltipType: I ? c.c.Lightbox : void 0
				})), R && N && M && !P && n.a.createElement(p.a, {
					className: v.a.SubscribeButton,
					getEventFactory: e => Object(g.f)(T.id, e ? "unsubscribe" : "subscribe", "post", L, k),
					identifier: {
						name: R.name,
						type: Object(C.g)(R) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: T.id,
					size: h.c.XS
				}), A && n.a.createElement(b.b, {
					className: v.a.OutboundLink,
					isSponsored: T.isSponsored,
					postId: T.id,
					href: Object(y.D)(e.post),
					source: T.source
				}, n.a.createElement(f.a, {
					className: v.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/RecommendedPostList/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_1khvWSB4GNuM2XwSjluHzO",
				background: "_3P_3k_jLv_J8ieIol9GqFL",
				layout: "_3CzLjB_82xAxB3iyad5yLM",
				arrow: "_3P6Ag4hY0u5ujhvLSAAVUH"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsHeader: "_1UbFWXvPTlrPngGxKndM-h",
				smallBanner: "_3O03kg0NTHcVFAyOQNoptz",
				footer: "Cvt0D6iVwU5TI0SY2nIGC",
				textBanner: "_1_-Wwc76dn19ch_lxyp8hf",
				container: "_2l7c_Oz0UVsamALvPrlznq",
				redditStyle: "_3f1Tk2rNUQGOPokixOdO6a",
				homeUpsellBanner: "HxVtNYGfeayfU1THFnAzK",
				homeUpsellBannerBorder: "_3afoK8x8kiKzCgwyofmvxu",
				postList: "_13FxmZ1xHIcRd_CuOaiyfo",
				loadMore: "_2gnvYSohivzo1V12YQI8DY"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				b = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/elementIds.ts"),
				y = s("./src/reddit/constants/experiments.ts"),
				C = s("./src/reddit/constants/page.ts"),
				x = s("./src/reddit/constants/postLayout.ts"),
				v = s("./src/reddit/helpers/postCollection.ts"),
				_ = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				k = s("./src/reddit/helpers/trackers/lightbox.ts"),
				O = s("./src/reddit/helpers/trackers/screenview.ts"),
				w = s("./src/reddit/selectors/chatPost.ts"),
				E = s("./src/reddit/selectors/commentsListTruncated.ts"),
				j = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				P = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				I = s("./src/reddit/selectors/seo/index.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				L = s("./src/lib/classNames/index.ts"),
				T = s("./src/reddit/controls/InternalLink/index.tsx"),
				M = s("./src/reddit/helpers/name/index.ts"),
				A = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				N = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				F = s.n(N);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var D = Object(m.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: o,
						subredditOrProfile: n
					} = e, {
						primaryColor: r
					} = n;
					return a.a.createElement(T.a, {
						className: Object(L.a)(F.a.footer, t),
						onMouseDown: s,
						to: n.url,
						style: {
							backgroundColor: r
						}
					}, a.a.createElement("div", {
						className: F.a.background
					}), a.a.createElement("div", {
						className: F.a.layout
					}, o ? R._("See more posts like this in {subredditName}", [R._param("subredditName", Object(M.c)(n.displayText))], {
						hk: "pLxW5"
					}) : R._("Continue browsing in {subredditName}", [R._param("subredditName", n.displayText)], {
						hk: "2gUyTU"
					}), a.a.createElement(A.a, {
						className: F.a.arrow
					})))
				}),
				B = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				V = s.n(B);
			const z = Object(c.a)((e, {
					isOverlay: t
				}) => t, E.a, j.b, (e, t, s) => !((!t || s) && e)),
				W = Object(c.c)({
					includeListingBelow: I.b,
					isChatPost: w.d,
					isGQLLoggedIn: S.I,
					isLoggedIn: S.J,
					listingBelowMonthlyVariant: P.c,
					listingBelowVariant: P.b,
					shouldShowSubredditUpsell: z
				}),
				U = Object(d.b)(W, e => ({
					loadMorePosts: t => e(Object(h.r)({
						sort: l.P.HOT,
						subredditName: t
					}))
				}));
			class H extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(f.d) : null, this.onViewed = (e, t) => Object(O.f)(this.listingKey(), l.P.TOP, t, e, l.Ub.WEEK), this.onFooterClick = e => {
						this.props.sendEvent(Object(k.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						includeListingBelow: e,
						post: t,
						subredditOrProfile: s
					} = this.props;
					return e && t && t.id ? Object(p.a)(t.id) : Object(u.a)(s.name, l.P.TOP, {
						t: l.Ub.WEEK
					})
				}
				renderSmallBanner() {
					const {
						listingBelowVariant: e,
						subredditOrProfile: t,
						theme: s
					} = this.props, {
						name: n
					} = t, r = Object(_.a)(s.newCommunityTheme.canvas);
					return a.a.createElement("div", {
						className: V.a.smallBanner,
						style: {
							color: r
						}
					}, e && !Object(y.qd)(e) ? Object(P.a)(e) ? o.fbt._("More posts like this", null, {
						hk: "Maj0v"
					}) : o.fbt._("More posts you may like", null, {
						hk: "2s2Xil"
					}) : o.fbt._("More posts from the {name} community", [o.fbt._param("name", n)], {
						hk: "2g363L"
					}))
				}
				renderTextBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return a.a.createElement("span", {
						className: V.a.textBanner
					}, o.fbt._("More from {name}", [o.fbt._param("name", t)], {
						hk: "Hv1mS"
					}))
				}
				render() {
					const {
						contentContainerRef: e,
						isChatPost: t,
						isGQLLoggedIn: s,
						isLoggedIn: o,
						listingBelowMonthlyVariant: n,
						listingBelowVariant: i,
						post: d,
						shouldShowSubredditUpsell: c,
						subredditOrProfile: l
					} = this.props, m = d && Object(v.a)(d), p = !!i && !Object(y.qd)(i), u = d && d.id;
					return s || o || t || m || !c ? null : a.a.createElement("div", {
						className: V.a.container
					}, this.renderSmallBanner(), a.a.createElement(b.a, {
						className: V.a.postList,
						disablePlaceholder: !0,
						forcedLayout: x.g.Large,
						getScrollContainer: this.scrollContainer,
						hostPostId: u,
						isTruncated: !0,
						listingBelowMonthlyVariant: n,
						listingBelowVariant: i,
						listingKey: this.listingKey(),
						listingName: C.c.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: V.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e,
						shouldHideFlair: !0
					}), a.a.createElement(D, {
						className: V.a.footer,
						onClick: this.onFooterClick,
						shouldDisplaySeeMore: p,
						subredditOrProfile: l
					}))
				}
			}
			t.a = U(Object(m.a)(Object(g.c)(H)))
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				mCollapsed: "_225DoZxfrLcZu0fM8-Svk8",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(d);
			t.a = ({
				className: e,
				isCommentBoxDesignEnabled: t,
				isLoading: s,
				toolbarPosition: o
			}) => n.a.createElement("div", {
				className: e
			}, n.a.createElement(i.a, {
				isFocused: !1
			}, !t && "top" === o && n.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.topToolbar, Object(a.a)({
					isLoading: s
				}))
			}), n.a.createElement("div", {
				className: Object(r.a)(c.a.content, {
					[c.a.mCollapsed]: t
				})
			}, n.a.createElement("div", {
				className: Object(r.a)(c.a.prompt, Object(a.a)({
					isLoading: !0
				}))
			})), !t && "bottom" === o && n.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.bottomToolbar, Object(a.a)({
					isLoading: s
				}))
			})))
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				a = s("./src/reddit/selectors/comments.ts"),
				d = s("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");
			t.a = Object(r.b)((e, {
				postId: t,
				commentsPageKey: s
			}) => ({
				canShowAd: Object(i.a)(e, {
					postId: t
				}) && !Object(c.A)(e) && !Object(d.a)(e),
				waitForProgrammatic: Object(a.d)(e, {
					commentsPageKey: s
				})
			}))(({
				canShowAd: e,
				postId: t,
				commentsPageKey: s,
				...o
			}) => e ? n.a.createElement(l.a, o) : null)
		},
		"./src/reddit/components/Widgets/AdRules/index.m.less": function(e, t, s) {
			e.exports = {
				Rule: "_3NwusXLUvLTrYmCFOYpDIA",
				rule: "_3NwusXLUvLTrYmCFOYpDIA",
				RuleIndex: "McQvObPSnfCkWc6C-ti6P",
				ruleIndex: "McQvObPSnfCkWc6C-ti6P",
				RuleTitle: "_2-jOphPs-FiWN_Da514451",
				ruleTitle: "_2-jOphPs-FiWN_Da514451"
			}
		},
		"./src/reddit/components/Widgets/AdRules/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				c = s.n(d);
			const l = i.a.div("Rule", c.a),
				m = i.a.div("RuleIndex", c.a),
				p = i.a.div("RuleTitle", c.a);
			t.a = e => r.a.createElement(a.a, {
				className: e.className,
				title: o.fbt._("Rules for Reddit Ads", null, {
					hk: "3IMHuS"
				}),
				redditStyle: !0
			}, r.a.createElement(l, null, r.a.createElement(m, null, 1, "."), r.a.createElement(p, null, o.fbt._("Keep language civil", null, {
				hk: "2poAMk"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 2, "."), r.a.createElement(p, null, o.fbt._("Comments must be relevant to the Promoted Post and contribute to discussion", null, {
				hk: "zAMr0"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 3, "."), r.a.createElement(p, null, o.fbt._("Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", null, {
				hk: "19a5UD"
			}))), r.a.createElement(l, null, r.a.createElement(m, null, 4, "."), r.a.createElement(p, null, o.fbt._("No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post", null, {
				hk: "BvXoq"
			}))))
		},
		"./src/reddit/components/Widgets/ReredditLink/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "ReredditLink",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ReredditLink").then(s.bind(null, "./src/reddit/components/Widgets/ReredditLink/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Widgets/ReredditLink/index.tsx"
				}
			})
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return k
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "b", (function() {
				return j
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				d = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				y = s("./src/reddit/selectors/experiments/survey.ts"),
				C = s("./src/reddit/selectors/listings.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/tracking.ts");

			function k() {
				return Object(u.t)({
					currentProfileName: u.h,
					isCommentPermalink: u.v,
					isCommentsPage: u.w,
					isFrontpage: u.y,
					isProfilePostListing: u.I,
					isTopicPage: u.M,
					pageLayer: e => e
				})
			}
			const O = k(),
				w = {
					apiError: C.c,
					apiPending: C.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(u.N)(e, t),
					loadMore: C.g,
					postsById: (e, t) => Object(x.S)(e, {
						...t
					}),
					postIds: Object(r.a)((e, {
						listingKey: t,
						listingName: s,
						inSubredditOrProfile: o
					}) => Object(x.F)(e, t, s, o)),
					subredditsById: v.Z,
					viewportDataLoaded: _.a,
					pageReferrer: u.Q,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: y.d
				},
				E = Object(n.c)(w),
				j = (e, {
					isFrontpage: t
				}) => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: s => {
						t && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(c.E(s))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.u(t, s))
					},
					trackOnPostEnteredViewport: (t, s, o) => {
						e(c.H(t, o))
					},
					trackOnPostExitedViewport: (t, s, o, n, r) => {
						e(c.I(t, o, n, r))
					},
					surveyTriggerScrollCounted: () => e(Object(m.c)())
				}),
				P = Object(o.b)(E, j, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(b.f)(e, t, "post", s.listingKey, s.hostPostId, s.listingBelowVariant, void 0, s.listingBelowMonthlyVariant),
					postComponentForLayout: e => Object(h.b)({
						...e
					})
				}));
			t.a = e => Object(p.c)(O(P(e)))
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = n.a.createContext(() => () => {})
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/reddit/helpers/parseUrl.ts");
			const n = ["old", "new", "en", "www", "np", "m"],
				r = ["reddit.com", "reddit.local"].concat("").concat(n.map((function(e) {
					return e + ".reddit.com"
				}))).concat(n.map((function(e) {
					return e + ".reddit.local"
				}))),
				i = ["mod.reddit.com"],
				a = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: r.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: i,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e) {
				return (e.match(new RegExp(o.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(a).some((function(s) {
						return t = function(e, t) {
							const s = a[e];
							if (!a) throw new Error("Could not find reddit URL spec: " + e);
							const n = Object(o.a)(t);
							if (!n) return void console.error("Could not parse url", t);
							if (-1 === (s.hostnames || r).indexOf(n.hostname)) return;
							const i = n.pathname.match(s.pathname);
							if (i) {
								return {
									url: t,
									routeName: e,
									components: s.pathnameComponents.reduce((function(e, t, s) {
										return e[t] = i[s + 1], e
									}), {})
								}
							}
						}(s, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = e => {
				window.resonateAnalytics && window.resonateAnalytics.initialize || function() {
					const e = window.resonateAnalytics = window.resonateAnalytics || [];
					if (!e.initialize) {
						if (e.invoked) return;
						e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "profile"], e.factory = function(t) {
							return function() {
								const s = Array.prototype.slice.call(arguments);
								return s.unshift(t), e.push(s), e
							}
						};
						for (let t = 0; t < e.methods.length; t++) {
							const s = e.methods[t];
							e[s] = e.factory(s)
						}
						e.load = function(e) {
							const t = document.createElement("script");
							t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.resonate.com/analytics.js/v1/" + e + "/analytics.min.js";
							const s = document.getElementsByTagName("script")[0];
							s.parentNode.insertBefore(t, s)
						}, e.SNIPPET_VERSION = "1.0.0", e.load("101117480")
					}
				}(), window.resonateAnalytics && window.resonateAnalytics.page && window.resonateAnalytics.page(e)
			}
		},
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/reddit/selectors/telemetry.ts");
			const n = (e, t) => ({
					...Object(o.defaults)(e),
					media: Object(o.media)(e, t),
					profile: Object(o.profile)(e),
					subreddit: Object(o.subreddit)(e) || Object(o.subredditByPostOrCommentId)(e, t)
				}),
				r = e => t => ({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(o.post)(t, e),
					...n(t, e)
				}),
				i = e => t => ({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(o.post)(t, e),
					...n(t, e)
				})
		},
		"./src/reddit/icons/fonts/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				Expand: "_3wtzqtIQz3ef53grMdBKpl",
				expand: "_3wtzqtIQz3ef53grMdBKpl"
			}
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expand/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(r.b)("expand",e.isFilled)} ${e.className}`
			}), "Expand", a.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = ({
				className: e
			}) => n.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
			}), n.a.createElement("path", {
				d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/SquareLock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
			}))
		},
		"./src/reddit/icons/svgs/Trophy/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			})))
		},
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				l = s("./src/reddit/components/AlertBanner/heights.ts"),
				m = s("./src/reddit/components/AppRouter/index.tsx"),
				p = s("./src/reddit/components/LightboxHeader/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				b = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				C = s.n(y);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(r.b)(() => Object(i.c)({
					showFPR: f.H,
					showSuspended: f.O
				})),
				_ = Object(d.a)(({
					className: e,
					isCollectionLayout: t,
					theme: s,
					...o
				}) => {
					const r = Object(g.a)({
						theme: s,
						...o
					});
					return n.a.createElement("div", x({
						className: Object(a.a)(C.a.fakeOverlay, e),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(r.canvas, r.canvasImgUrl, r.canvasImgPosition),
							"--fakelightbox-overlay-max-width": t ? `${u.h}px` : `${u.i}px`
						}
					}, o))
				});
			class k extends n.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR
						};
						return n.a.createElement(m.a, {
							className: Object(a.a)(C.a.fakeOverlayLightboxHeaderWrapper, {
								[C.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(C.a, t))
						}, n.a.createElement(p.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(_, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), n.a.createElement(c.a.Consumer, null, this.renderWrapper), n.a.createElement(h.a, e))
				}
			}
			t.a = v(k)
		},
		"./src/reddit/layout/page/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				lightboxContainer: "_1npCwF50X2J7Wt82SZi6J0",
				mIsCollectionLayout: "_2mmpCGz_MbQyZXoaIL_u6I",
				lightboxContent: "u35lf2ynn4jHsVUwPmNU",
				mNotCollectionLayout: "Dx3UxiK86VcfkFQVHNXNi",
				lightboxSidebar: "_2Xq-4oyrEvHjL5U_EeMnK8",
				defaultLightboxSidebar: "_20b4i5iUhjZQqDZ1BM_Q-9",
				fakeOverlay: "_1QwQLdEXq0cZZb7vcte4KK",
				fakeOverlayContainer: "_3OGqXkiUb_0ZMlksb26boO",
				fakeOverlayContent: "_3KaECfUAGLfWQPO5eNjMNl",
				fakeOverlayLightboxHeaderWrapper: "_9BEqyBVXtRCQxyeYwqJMB",
				wide: "_3lVCgGR2stdSvrxCS2yWD7",
				showDeprecated: "_2NxbeazXeXu0bSJRcwSxd8",
				showFPR: "Hpitc80wLQqDqDh9A37wr",
				showFpr: "Hpitc80wLQqDqDh9A37wr",
				showSuspended: "_39xFv40KohPmMxYVnMJmp"
			}
		},
		"./src/reddit/layout/page/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				a = s.n(i);
			const d = e => n.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(r.a)(a.a.lightboxContainer, {
						[a.a.mIsCollectionLayout]: e.isCollectionLayout,
						[a.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				c = e => n.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxContent, {
						[a.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[a.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => n.a.createElement("div", {
					className: Object(r.a)(a.a.lightboxSidebar, {
						[a.a.defaultLightboxSidebar]: !e.isCollectionLayout,
						[a.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class m extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.container = null, this.setContainerRef = e => {
						this.container = e, this.props.containerRef && this.props.containerRef(e)
					}
				}
				render() {
					const {
						content: e,
						contentBanner: t,
						isCollectionLayout: s,
						isFakeOverlay: o,
						sidebar: r
					} = this.props;
					return n.a.createElement(d, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: o,
						tabIndex: -1
					}, n.a.createElement(c, {
						isCollectionLayout: s,
						isFakeOverlay: o,
						redditStyle: !0
					}, t, e), r && n.a.createElement(l, {
						isCollectionLayout: s,
						isFakeOverlay: o
					}, r))
				}
			}
			t.a = m
		},
		"./src/reddit/pages/CollectionCommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				r = s("./node_modules/lodash/get.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				p = s("./src/reddit/constants/history.ts"),
				u = s("./src/reddit/helpers/history/index.ts"),
				h = s("./src/reddit/models/Comment/index.ts"),
				b = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/pages/CommentsPage/index.tsx"),
				f = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				y = s("./src/reddit/selectors/postCollection.ts"),
				C = s("./node_modules/reselect/es/index.js");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(c.b)(() => Object(C.c)({
				primaryPostId: y.p
			}))(e => {
				const t = e.postId || e.primaryPostId;
				return t ? d.a.createElement(g.CommentsPage, x({}, e, {
					postId: t
				})) : null
			});
			t.default = Object(f.a)(e => {
				const {
					state: t
				} = e.location, s = i()(t, p.a.IsOverlay, !1), o = i()(t, p.a.CloseLocation, null), r = i()(t, p.a.ScrollOnLoad, !1);
				r && Object(u.c)(p.a.ScrollOnLoad);
				const a = e.match.params,
					{
						partialCommentId: c,
						partialPostId: g,
						subredditName: f,
						collectionId: y
					} = a,
					C = g ? Object(b.r)(g) : void 0,
					x = c && Object(h.f)(c),
					_ = n()([...Object(l.a)(e.location.search)]),
					k = {};
				e.hasSortParam && (k.sort = e.sort, k.hasSortParam = !0);
				const O = Object(m.a)(y, C, x, k);
				return d.a.createElement(v, {
					closeLocation: o,
					collectionId: y,
					commentId: x,
					commentsPageKey: O,
					isOverlay: s,
					location: e.location,
					postId: C,
					instanceId: _.instanceId,
					shouldScrollToComments: r,
					sort: e.sort,
					subredditName: f,
					onOtherDiscussions: !!_.onOtherDiscussions
				})
			})
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				commentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				linkOrOverlay: "_1eQ54MneFHfYv8GJO9o-jg",
				OtherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				d = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/helpers/path/index.ts"),
				m = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				p = s("./src/reddit/selectors/comments.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				b = s.n(h);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = Object(r.b)(() => Object(i.c)({
				headComment: p.x,
				otherDiscussionsCount: u.x,
				post: p.F
			}));
			t.a = Object(c.c)(f(({
				commentId: e,
				headComment: t,
				isOverlay: s,
				otherDiscussionsCount: o,
				post: r,
				postId: i,
				sendEvent: c
			}) => {
				if (!r) return null;
				const p = void 0 !== e,
					u = r.permalink,
					h = o > 0,
					f = Object(l.b)(Object(a.e)(u));
				return p || h ? n.a.createElement("div", {
					className: b.a.CommentsNavigationPane
				}, p && n.a.createElement("div", null, n.a.createElement(d.a, {
					className: b.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(u)
				}, g._("View all comments", null, {
					hk: "3I5IX9"
				})), t && null !== t.parentId && n.a.createElement(d.a, {
					className: b.a.linkOrOverlay,
					isOverlay: s,
					to: Object(l.b)(t.permalink + "?context=8&depth=9")
				}, g._("Show parent comments", null, {
					hk: "AVRCa"
				}))), h && n.a.createElement(d.a, {
					className: b.a.OtherDiscussionsLink,
					isOverlay: s,
					onClick: () => c(Object(m.a)(i)),
					to: f
				}, g._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [g._plural(o, "other discussion communities count")], {
					hk: "3oofZ8"
				}))) : null
			}))
		},
		"./src/reddit/pages/CommentsPage/index.m.less": function(e, t, s) {
			e.exports = {
				promoBanner: "_25nFZKgLc-Z-1ua1YEzuCL",
				DetailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				detailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				MoreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				moreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				PageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				pageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				LargePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				largePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				Spacer: "q6p33SkkiPu07qUoN_Kd",
				spacer: "q6p33SkkiPu07qUoN_Kd",
				CommentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				commentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				mIsInOverlay: "_3287nL7j7epK9JmDC3N1VR",
				CollectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				collectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				ChatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				chatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				OverviewCommentPost: "lfoKI-nM1Ps5Y1WhxJPc6",
				overviewCommentPost: "lfoKI-nM1Ps5Y1WhxJPc6",
				backgroundMargin: "_34i0o0-SanTnUOM8JXdW6f",
				isFirstInCommentList: "_22yjV_JLQY-BfOOW1wgsgI",
				isLastInCommentList: "_3QJoultgeMO-1x88lIzzSe"
			}
		},
		"./src/reddit/pages/CommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "getCommentsPageKeyById", (function() {
				return mt
			})), s.d(t, "CommentsPage", (function() {
				return yt
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s.n(n),
				i = s("./node_modules/lodash/get.js"),
				a = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				c = s.n(d),
				l = s("./node_modules/react/index.js"),
				m = s.n(l),
				p = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/models/PostDraft/index.ts"),
				g = s("./src/telemetry/index.ts"),
				f = s("./src/telemetry/models/Timer.ts"),
				y = s("./src/lib/classNames/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				x = s("./src/lib/domUtils/index.ts"),
				v = s("./src/lib/fastdom/index.ts"),
				_ = s("./src/lib/lessComponent.tsx"),
				k = s("./src/lib/makeCommentsPageKey/index.ts"),
				O = s("./src/lib/makeDraftKey/index.ts"),
				w = s("./src/lib/performanceTimings/index.tsx"),
				E = s("./src/reddit/actions/ads/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				S = s("./src/reddit/actions/isTrackingCrossposts.ts"),
				L = s("./src/reddit/actions/login.ts"),
				T = s("./src/reddit/actions/pages/comments.ts"),
				M = s("./src/reddit/actions/tooltip.ts"),
				A = s("./src/reddit/components/CommentsPageNativeAd/async.tsx"),
				N = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				F = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				R = s("./src/reddit/constants/componentSizes.ts"),
				D = s("./src/reddit/constants/elementIds.ts"),
				B = s("./src/reddit/constants/history.ts"),
				V = s("./src/reddit/constants/keycodes.ts"),
				z = s("./src/reddit/constants/posts.ts"),
				W = s("./src/reddit/constants/screenWidths.ts"),
				U = s("./src/reddit/contexts/ApiContext.tsx"),
				H = s("./src/reddit/contexts/PageLayer/index.tsx"),
				K = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				q = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				G = s("./src/reddit/featureFlags/profileCollections.ts"),
				Y = s("./src/reddit/contexts/Post/index.tsx"),
				Q = s("./src/reddit/models/Comment/index.ts"),
				J = s("./src/reddit/models/Media/index.ts"),
				Z = s("./src/reddit/models/Post/index.ts"),
				X = s("./src/reddit/models/Subreddit/index.ts"),
				$ = s("./src/reddit/selectors/chatPost.ts"),
				ee = s("./src/reddit/selectors/comments.ts"),
				te = s("./src/reddit/selectors/commentSelector.ts"),
				se = s("./src/reddit/selectors/commentsListTruncated.ts"),
				oe = s("./src/reddit/selectors/discoveryUnit.ts"),
				ne = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				re = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ie = s("./src/reddit/selectors/experiments/commentsPageAd.ts"),
				ae = s("./src/reddit/selectors/experiments/postSeo.ts"),
				de = s("./src/reddit/selectors/experiments/resonatePilot.ts"),
				ce = s("./src/reddit/selectors/experiments/video.ts"),
				le = s("./src/reddit/selectors/meta.ts"),
				me = s("./src/reddit/selectors/moderatorPermissions.ts"),
				pe = s("./src/reddit/selectors/posts.ts"),
				ue = s("./src/reddit/selectors/realtimeComments.ts"),
				he = s("./src/reddit/selectors/subreddit.ts"),
				be = s("./src/reddit/selectors/tooltip.ts"),
				ge = s("./src/reddit/selectors/user.ts"),
				fe = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				ye = s("./src/reddit/actions/postLevelCrowdControl.ts"),
				Ce = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				xe = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				ve = s("./src/reddit/components/Comments/index.tsx"),
				_e = s("./src/reddit/components/Comments/MoreCommentsItem/index.tsx"),
				ke = s("./src/reddit/components/Comments/States/index.tsx"),
				Oe = s("./src/reddit/components/CommentsChat/Loader.ts"),
				we = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ee = s("./src/reddit/components/CommentSort/index.tsx"),
				je = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Pe = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Ie = s("./src/reddit/components/HeaderImage/index.tsx"),
				Se = s("./src/reddit/components/Hovercards/helpers.ts"),
				Le = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Te = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				Me = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Ae = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Ne = s("./src/reddit/components/JumpToContent/index.tsx"),
				Fe = s("./src/reddit/components/PostContent/index.tsx"),
				Re = s("./src/reddit/components/PostTopMeta/index.tsx"),
				De = s("./src/reddit/components/SubredditNav/index.tsx"),
				Be = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Ve = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				ze = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				We = s("./src/reddit/helpers/history/index.ts"),
				Ue = s("./src/reddit/helpers/matchRedditUrls/index.ts"),
				He = s("./src/reddit/helpers/postCollection.ts"),
				Ke = s("./src/reddit/helpers/resonatePage/index.ts"),
				qe = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Ge = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ye = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				Qe = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				Je = s("./src/reddit/layout/page/Listing/index.tsx"),
				Ze = s("./src/reddit/models/ContentGate.ts"),
				Xe = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				$e = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				et = s("./src/reddit/pages/CommentsPage/index.m.less"),
				tt = s.n(et);

			function st() {
				return (st = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ot = ({
					condition: e,
					wrap: t,
					children: s
				}) => e ? t(s) : s,
				nt = 80,
				rt = 200,
				it = 80,
				at = 32,
				dt = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-pages-CommentsPage-OtherDiscussions",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-pages-CommentsPage-OtherDiscussions").then(s.bind(null, "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx"
					}
				}),
				ct = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-Collection",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-Collection").then(s.bind(null, "./src/reddit/components/Collection/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Collection/index.tsx"
					}
				}),
				lt = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-ContentGate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ContentGate").then(s.bind(null, "./src/reddit/components/ContentGate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ContentGate/index.tsx"
					}
				}),
				mt = ({
					postId: e,
					commentId: t,
					commentsPageKey: s
				}) => t ? Object(k.a)(e) : s,
				pt = e => {
					const {
						state: t
					} = e.location, s = a()(t, B.a.IsOverlay, !1), o = a()(t, B.a.CloseLocation, null), n = a()(t, B.a.ScrollOnLoad, !1);
					n && Object(We.c)(B.a.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: i,
						subredditName: d
					} = e.match.params, c = Object(Z.r)(i), l = r && Object(Q.f)(r);
					return m.a.createElement(yt, {
						closeLocation: o,
						commentId: l,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: c,
						shouldScrollToComments: n,
						sort: e.sort,
						subredditName: d
					})
				},
				ut = Object(H.t)(),
				ht = () => Object(h.c)({
					apiError: ee.c,
					apiPending: ee.d,
					canCommentAsModerator: (e, {
						postId: t
					}) => {
						const s = Object(pe.U)(e, {
							postId: t
						});
						return !!(s && s.id && e.moderatingSubreddits[s.id])
					},
					comment: te.a,
					communityBannerDiscoveryUnit: oe.b,
					contentGateInfo: (e, {
						subredditName: t
					}) => Object(ge.e)(e, t),
					contestModeIsEnabled: pe.z,
					currentUserShowNSFW: ge.bb,
					dismissedSubreddits: ne.a,
					fullyLoaded: ee.u,
					hasModeratorPostPermissions: me.b,
					headComment: ee.x,
					isActionBarAnimationEnabled: q.b,
					isAvatarsInCommentsEnabled: re.a,
					isChatPost: $.d,
					isCommentsListTruncated: se.a,
					isInVideoRemoveScrollingThrottleExperiment: ce.a,
					isLoggedIn: ge.J,
					isNightmodeOn: ge.U,
					isRealtimeCommentsExperimentEnabled: ue.a,
					isTooltipOpen: (e, t) => !!Object(be.a)(e),
					newCommentsCount: ee.C,
					origin: le.l,
					post: ee.F,
					postSEOV2IdCardVariant: ae.i,
					profileCollectionsEnabled: G.a,
					replyComment: (e, {
						postId: t,
						commentId: s,
						commentsPageKey: o
					}) => Object(ee.s)(e, {
						commentsPageKey: mt({
							postId: t,
							commentId: s,
							commentsPageKey: o
						})
					}),
					shouldOpenPostInNewTab: ge.ab,
					subredditAboutInfo: (e, {
						subredditName: t
					}) => t ? Object(he.x)(e, {
						subredditName: t
					}) : void 0,
					subredditOrProfile: pe.U,
					userHovercardIsOpen: (e, t) => Object(be.b)(Object(Se.b)({
						itemId: t.postId,
						tooltipIdPrefix: N.a,
						tooltipType: Re.c.StickyPost
					}))(e),
					userPrefs: ge.tb,
					isInCommentsPageAdExperiment: ie.a,
					inResonatePilot: de.a
				}),
				bt = (e, t) => ({
					dismissTruncation: t => e(Object(fe.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(I.a)()),
					setCommentFocus: t => e(j.e({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(T.fullCommentsPageDataRequested)(t.postId, void 0, {
						subredditName: t.subredditName,
						sort: t.sort
					})),
					onHideTooltip: () => e(Object(M.i)()),
					onToggleTooltip: t => e(Object(M.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(L.h)()),
					openRegisterModal: () => e(Object(L.i)()),
					goToSubredditPage: t => e(Object(u.b)(t)),
					truncateCommentsList: () => e(Object(I.b)()),
					fetchCommentsNativeAd: t => e(Object(E.a)(t)),
					getIsTrackingCrossposts: t => e(Object(S.b)(t)),
					getPostCrowdControlLevel: t => e(Object(ye.b)(t))
				}),
				gt = Object(p.b)(ht, bt);
			class ft extends m.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.handleScroll = c()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didScrollPastPost: e,
							scrollContainerEl: t,
							scrollPostThreshold: s,
							props: {
								isInVideoRemoveScrollingThrottleExperiment: o,
								userHovercardIsOpen: n,
								onToggleTooltip: r,
								post: i,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const d = t === window ? t.scrollY : t ? t.scrollTop : 0,
							c = null !== this.scrollY && Math.abs(d - this.scrollY) > nt,
							l = i && i.media && i.media.type === J.o.EMBED ? i.media.provider : null,
							m = i && i.media && J.d.has(i.media.type) && (!l || !J.s.has(l));
						this.scrollY = d, !e && void 0 !== s && d >= s && (this.didScrollPastPost = !0), e && void 0 !== s && d < s && (this.didScrollPastPost = !1, n && v.a.write(() => {
							r(Object(Se.b)({
								itemId: a,
								tooltipIdPrefix: N.a,
								tooltipType: Re.c.StickyPost
							}))
						})), !o && m && this.postScrollItemRef && (this.postPaused || !c && !this.didScrollPastPost ? this.postPaused && !this.didScrollPastPost && (c ? this.recheckScrollTimer = setTimeout(this.handleScroll, 4 * C.G) : (this.postPaused = !1, v.a.write(this.postScrollItemRef.focusContent))) : (this.postPaused = !0, v.a.write(this.postScrollItemRef.pauseContent)))
					}, C.G), this.sendEventWithName = (e, t) => () => this.props.sendEvent(Object(qe.d)(this.props.postId, e, t)), this.updateWindowHeight = () => {
						this.needsUpdatedMeasurements = !0, this.handleScroll()
					}, this.updateCommentSortRef = e => {
						this.commentSortRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCommentFormRef = e => {
						this.commentFormRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCollPostWrapperRef = e => {
						this.collectionPostWrapperRef = e
					}, this.handleViewAllCommentsClick = () => {
						const {
							dismissTruncation: e,
							expandCommentsList: t,
							post: s
						} = this.props;
						t();
						const o = s && Object(Z.q)(s) && s && s.belongsTo.id;
						o && e(o), this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(ze.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === V.b.F || e.keyCode === V.a.F,
							s = e.ctrlKey || e.metaKey;
						t && s && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						layoutRef: null,
						commentNativeAdId: null
					}
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						setCommentFocus: t
					} = this.props;
					e && t(e)
				}
				async componentDidMount() {
					var e;
					const {
						commentFormRef: t,
						commentSortRef: s,
						props: {
							isLoggedIn: o,
							isOverlay: n,
							post: r,
							shouldScrollToComments: i
						}
					} = this;
					if (r && !r.isSponsored && !r.isRemoved && r.belongsTo.type !== z.a.PROFILE) {
						const e = await this.props.fetchCommentsNativeAd(r.id);
						e && this.setState({
							commentNativeAdId: e
						})
					}
					if (n ? (this.scrollContainerEl = document.getElementById(D.d), i && (t || s) && r && r.numComments ? this.scrollToComments() : v.a.write(() => {
							setTimeout(() => {
								Object(x.c)(this.scrollContainerEl, 0)
							})
						})) : this.scrollContainerEl = window, this.props.hasModeratorPostPermissions && this.props.post)
						if (this.props.getPostCrowdControlLevel(this.props.post.id), this.props.post.crosspostRootId) {
							const e = this.props.post.crosspostRootId;
							this.props.getIsTrackingCrossposts(e)
						} else if (this.props.post.source) {
						const t = this.props.post.source.url;
						if (t) {
							const s = null === (e = Object(Ue.a)(t)[0]) || void 0 === e ? void 0 : e.components;
							if (s && s.hasOwnProperty("postID36")) {
								const e = Object(Z.r)(s.postID36);
								this.props.getIsTrackingCrossposts(e)
							}
						}
					}
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), v.a.read(() => {
							this.props.isOverlay || Object(w.d)(w.c.CommentsPage, o)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						C.Cb.includes(e) && Object(Ke.a)(e)
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				UNSAFE_componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.postId !== this.props.postId) {
						const e = this.props.post && Object(He.a)(this.props.post);
						this.props.post && this.props.post.numComments ? v.a.read(this.handleScroll) : v.a.write(() => {
							e || Object(x.c)(this.scrollContainerEl, 0), v.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && v.a.write(() => {
							setTimeout(() => {
								Object(x.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = R.b + (this.props.isOverlay ? R.n : 0),
								s = t.getBoundingClientRect().top;
							let o;
							const n = (o = this.props.isOverlay ? document.getElementById(D.d) : document.getElementsByTagName("body")[0]) && o.getBoundingClientRect().top,
								r = Math.abs(n - s),
								i = this.props.isOverlay ? at : r - e;
							(this.props.isOverlay ? o && o.scrollTop || 0 : window.pageYOffset) >= i && v.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(x.c)(o, i) : Object(x.c)(document, i)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0
				}
				truncateCommentList() {
					const {
						dismissedSubreddits: e,
						subredditOrProfile: t,
						truncateCommentsList: s
					} = this.props, o = t && t.id;
					o && !e.includes(o) && s()
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = rt
				}
				addListeners() {
					const {
						isOverlay: e
					} = this.props;
					e && window.addEventListener("resize", this.updateWindowHeight), this.props.isCommentsListTruncated && window.addEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.addEventListener("scroll", this.handleScroll)
				}
				removeListeners(e) {
					const {
						isOverlay: t
					} = this.props;
					t && window.removeEventListener("resize", this.updateWindowHeight), e && this.props.isCommentsListTruncated !== e.isCommentsListTruncated && window.removeEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.removeEventListener("scroll", this.handleScroll)
				}
				scrollToComments() {
					v.a.read(() => {
						const e = document.getElementById(D.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - it, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - it, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), v.a.write(() => {
								Object(x.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => v.a.read(this.handleScroll))
							})
						}
					})
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						apiPending: t,
						commentsPageKey: s
					} = this.props;
					return g.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					v.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: o,
							sort: n,
							isOverlay: r,
							isActionBarAnimationEnabled: i
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const a = g.c.end(t),
							d = !r && i;
						o(Object(Ge.c)(t, s, e, f.TimerType.InApp, a, n, d))
					})
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isOverlay: s,
						post: o,
						subredditName: n
					} = this.props, r = !(!o || !o.isNSFW || t), i = Object(Ve.a)(e, r, n);
					if (!i) return null;
					let a = m.a.createElement(lt, i);
					return s && (a = m.a.createElement(Ye.a, {
						content: a
					})), a
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						closeLocation: s,
						commentId: o,
						commentsPageKey: n,
						isNightmodeOn: r,
						isLoggedIn: i,
						isOverlay: a,
						post: d,
						postId: c,
						postSEOV2IdCardVariant: l,
						sort: p,
						sendEvent: u,
						subredditOrProfile: h,
						profileCollectionsEnabled: b,
						isInCommentsPageAdExperiment: g,
						isActionBarAnimationEnabled: f
					} = this.props, x = Object(ae.g)(l);
					if (!d) {
						if (t) return m.a.createElement(ke.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === C.m ? m.a.createElement(lt, {
							contentGateType: Ze.a.PostBlockedForLegalReason
						}) : m.a.createElement(ke.d, {
							postId: c,
							commentId: o,
							apiError: e,
							sort: p
						}) : m.a.createElement(ke.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const v = this.isCommentPermalink(),
						_ = d.belongsTo.type === z.a.PROFILE,
						k = Object(He.a)(d) && (!_ || b),
						O = !i;
					return m.a.createElement(xt, {
						closeLocation: s,
						commentsPageKey: n,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: i,
						isOverlay: a,
						isSwapVariant: x,
						post: d,
						subredditOrProfile: h,
						shouldFitPageToContent: O,
						isCollectionLayout: k
					}, h && h.isQuarantined && m.a.createElement(Ae.a, {
						subredditName: h.name
					}), m.a.createElement(Ne.a, null), m.a.createElement("div", {
						className: Object(y.a)(tt.a.PageContentWrapper, {
							[tt.a.LargePageContent]: k,
							[tt.a.ChatPage]: this.props.isChatPost
						}),
						key: "PostContentWrapper"
					}, k && m.a.createElement(ct, {
						isOverlay: a,
						isNightmodeOn: r,
						postId: c
					}), m.a.createElement(ot, {
						condition: k,
						wrap: e => m.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: tt.a.CollectionBodyWrapper
						}, e)
					}, m.a.createElement(Y.a, {
						postId: c
					}, m.a.createElement(Fe.a, {
						isCommentPermalink: v,
						isExclusivePost: !0,
						isOverlay: a,
						postId: c,
						redditStyle: a,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: u,
						isActionBarAnimationEnabled: f
					})), g && this.state.commentNativeAdId && m.a.createElement(A.a, {
						key: `event-post-id-${d.id}`,
						isOverlay: a,
						postId: this.state.commentNativeAdId
					}), this.renderCommentPanes())), h && !Object(X.g)(h) && m.a.createElement(F.a, {
						contentContainerRef: this.state.layoutRef,
						isOverlay: a,
						post: d,
						subredditOrProfile: h
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: o,
						commentsPageKey: r,
						contestModeIsEnabled: i,
						fullyLoadComments: a,
						fullyLoaded: d,
						hasModeratorPostPermissions: c,
						headComment: l,
						isAvatarsInCommentsEnabled: p,
						isChatPost: u,
						isLoggedIn: h,
						isOverlay: g,
						isRealtimeCommentsExperimentEnabled: f,
						location: C,
						newCommentsCount: x,
						onOtherDiscussions: v,
						openLoginModal: _,
						openRegisterModal: k,
						origin: w,
						post: E,
						postId: j,
						replyComment: I,
						sendEvent: S,
						sort: L,
						subredditAboutInfo: T,
						subredditOrProfile: M
					} = this.props;
					if (!E) return null;
					const A = this.isCommentPermalink(),
						N = [],
						F = E.isLocked && !s,
						R = !(A || E.isArchived || T && T.userIsBanned);
					if (F) N.push(m.a.createElement(Te.a, {
						key: "commentThreadBanner",
						subredditOrProfile: M
					}));
					else if (E.isArchived) N.push(m.a.createElement(Le.a, {
						key: "commentThreadBanner"
					}));
					else if (R && !u && !v)
						if (h) {
							const e = Object(O.a)(b.c.replyToPost, j);
							N.push(m.a.createElement(Ce.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: b.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								submitAction: ({
									validate: t,
									...s
								}, o) => t ? P.s(j, r, e, s, o) : P.n(j, r, e, s, o),
								submitButtonText: n.fbt._("Comment", null, {
									hk: "m3FAA"
								})
							}))
						} else N.push(m.a.createElement(xe.a, {
							key: "loggedOutCommentForm",
							location: C,
							openLoginModal: _,
							openRegisterModal: k,
							origin: w
						}));
					if (i && N.push(m.a.createElement(Me.a, {
							hasModeratorPostPermissions: c,
							key: "contestModeBanner"
						})), !u && !v && N.push(m.a.createElement(Ee.a, {
							commentId: o,
							elementRef: this.updateCommentSortRef,
							isOverlay: g,
							key: "commentSort",
							location: C,
							postId: j,
							sort: L,
							suggestedSort: E.suggestedSort
						}), m.a.createElement(Xe.a, {
							commentId: o,
							commentsPageKey: r,
							isOverlay: g,
							key: "commentNavigation",
							postId: j
						})), !t || l || u || v)
						if (!e || l || v)
							if (v) N.push(m.a.createElement(dt, {
								commentSort: L,
								key: "otherDiscussions",
								postId: j,
								isOverlay: g,
								postPermalink: E.permalink
							}));
							else if (u) {
						if (M && M.id) {
							const e = I ? Object(O.a)(b.c.replyToComment, I.id) : Object(O.a)(b.c.replyToPost, j),
								s = mt({
									postId: j,
									commentId: o,
									commentsPageKey: r
								});
							N.push(m.a.createElement(Oe.a, {
								commentId: o,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !l || !d && t,
								key: "commentsChat",
								postId: j,
								renderedInOverlay: g,
								subredditId: M.id
							}, ({
								scrollToBottom: t
							}) => h ? m.a.createElement(we.a, {
								key: "chatCommentsForm",
								postId: j,
								replyComment: I,
								draftKey: e,
								commentsPageKey: s,
								isEditing: !1,
								scrollToBottom: t,
								sendEvent: S
							}) : m.a.createElement(xe.a, {
								key: "loggedOutCommentForm",
								className: tt.a.ChatLoggedOutForm,
								location: C,
								openLoginModal: _,
								openRegisterModal: k,
								origin: w
							})))
						}
					} else N.push(m.a.createElement("div", {
						className: Object(y.a)(tt.a.CommentsPaneWrapper, {
							[tt.a.mIsInOverlay]: g
						}),
						key: "commentsPaneWrapper"
					}, m.a.createElement(Pe.a, st({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: E.numComments,
						onClick: this.handleContentClick
					}), f && x > 0 && m.a.createElement(_e.a, {
						commentsPageKey: r,
						isActive: !1,
						moreCommentsId: "",
						count: x,
						onMoreCommentsItemClick: a
					}), m.a.createElement(ve.a, {
						commentId: o,
						commentsPageKey: r,
						postId: j,
						renderedInOverlay: g
					})))), e && l ? N.push(m.a.createElement(ke.e, {
						key: "commentsErrorState",
						postId: j,
						commentId: o,
						sort: L,
						apiError: e
					})) : !d && t && N.push(m.a.createElement(ke.a, {
						isAvatarsInCommentsEnabled: p,
						key: "commentsPlaceholder"
					}));
					else N.push(m.a.createElement(ke.e, {
						postId: j,
						commentId: o,
						sort: L,
						apiError: e
					}));
					else this.didRenderLoading = !0, N.push(m.a.createElement(ke.a, {
						isAvatarsInCommentsEnabled: p,
						key: "commentsPlaceholder"
					}));
					return m.a.createElement(K.a.Provider, {
						value: this.sendEventWithName
					}, N)
				}
			}
			const yt = ut(Object(U.b)(gt(Object(Be.c)(ft)))),
				Ct = _.a.wrapped(je.a, "DetailsPageSidebar", tt.a),
				xt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: o,
						handleFakeLightboxClick: n,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: i,
						isLoggedIn: a,
						isOverlay: d,
						isSwapVariant: c,
						post: l,
						shouldFitPageToContent: p,
						subredditOrProfile: u
					} = e;
					if (!a && !d) return m.a.createElement(Qe.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						handleFakeLightboxClick: n,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: u && m.a.createElement(je.a, {
							commentsPageKey: s,
							isFakeOverlay: !0,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					if (d) return m.a.createElement(Ye.a, {
						containerRef: o,
						content: t,
						isCollectionLayout: i,
						sidebar: u && m.a.createElement(je.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					});
					const h = i ? R.i : W.a;
					return m.a.createElement(Je.a, {
						containerRef: o,
						maxWidth: R.i,
						fitPageToContent: p,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: c,
						isCollectionLayout: i,
						navBar: u && m.a.Children.toArray([m.a.createElement(Ie.a, {
							key: u.name,
							disableFullscreen: !0,
							headerText: u.name,
							maxWidth: h,
							prefixedHeaderText: u.displayText,
							subredditOrProfile: u,
							url: u.url
						}), !Object(X.g)(u) && m.a.createElement(De.a, {
							disableFullscreen: !0,
							homeUrl: u.url,
							maxWidth: h,
							subredditId: u.id
						})]),
						sidebar: u && m.a.createElement(Ct, {
							commentsPageKey: s,
							post: l,
							subredditName: u.name,
							subredditId: u.id
						})
					})
				};
			t.default = Object($e.a)(pt)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var o = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				p = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = s("./src/reddit/models/Comment/index.ts"),
				h = s("./src/reddit/models/Post/index.ts");
			const b = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(h.r)(t)
				},
				g = (e, t, s) => {
					const o = b(e),
						r = (e => {
							const {
								partialCommentId: t
							} = e.match.params;
							return t && Object(u.f)(t)
						})(e),
						i = (e => {
							const {
								location: {
									search: t
								}
							} = e;
							return n()([...Object(c.a)(t)])
						})(e),
						a = {
							depth: i.depth && parseInt(i.depth, 10) || void 0,
							context: i.context && parseInt(i.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(o, r, a)
				},
				f = Object(d.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(p.a)(e, s)
					}
				}),
				y = Object(a.b)(f);

			function C(e) {
				return y(t => {
					const {
						hasSortParam: s,
						sortToUse: o
					} = t.commentsPageSort, n = g(t, s, o), r = Object(m.d)(t.match.path), a = {
						...t,
						commentsPageKey: n,
						hasSortParam: s,
						onOtherDiscussions: r,
						sort: o
					};
					return i.a.createElement(e, a)
				})
			}
		},
		"./src/reddit/selectors/commentsListTruncated.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = e => e.commentsListTruncated
		},
		"./src/reddit/selectors/dismissedTruncationList.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			var o = s("./node_modules/reselect/es/index.js");
			const n = e => e.dismissedTruncationList,
				r = Object(o.a)((e, {
					subredditOrProfile: t
				}) => t, n, (e, t) => {
					const s = e && e.id;
					return !!s && t.includes(s)
				})
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(o.a)(i.J, i.I, (e, t) => e || t),
				d = Object(o.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: n.z
				}), e => e === n.D.Enabled)
		},
		"./src/reddit/selectors/experiments/commentsPageAd.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.M
				});
				return !!t && !Object(o.qd)(t)
			}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.nb
				});
				return !(!t || Object(o.qd)(t))
			}
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/meta.ts");
			const i = e => Object(n.c)(e, {
				experimentEligibilitySelector: e => !Object(r.d)(e) && "US" === Object(r.b)(e),
				experimentName: o.Jc
			}) === o.Rc.Enabled
		},
		"./src/reddit/selectors/experiments/video.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => o.nd.Enabled === Object(n.c)(e, {
				experimentEligibilitySelector: n.a,
				experimentName: o.jd
			})
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
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
				return C
			})), s.d(t, "d", (function() {
				return x
			}));
			var o = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/selectors/posts.ts"),
				r = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(r.S)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				c = e => e.focusedVerticals.components.dismissed,
				l = [],
				m = (e, t) => {
					const s = p(e, t);
					if (!s) return l;
					const o = Object(r.W)(e, {
						subredditName: s.name
					});
					return o && o.postIds && o.postIds.length ? o.postIds : l
				},
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(r.S)(e, {
						subredditId: s
					}) : null
				},
				u = (e, t, s, o, r) => {
					const i = r.find(e => e <= t) || -1,
						a = r.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const o = s[t - 1],
							r = s[t],
							i = r && Object(n.I)(e, {
								postId: o
							}) || null,
							a = r && Object(n.I)(e, {
								postId: r
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, o)))
				},
				h = [3],
				b = (e, t, {
					listingKey: s
				}) => {
					const o = t.slice().sort();
					let r = -1;
					const i = Object(n.B)(e, {
							listingKey: s
						}),
						a = [];
					return h.forEach(t => {
						let s = r + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !u(e, s, t, i, o);) s += 1;
							s < i.length && (a.push(s), r = s)
						}
					}), a
				},
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				y = e => e.focusedVerticals.category,
				C = e => e.focusedVerticals.lastLoadedEnv,
				x = e => {
					const t = Object(i.I)(e),
						s = o.d.geoSubredditRecommendationDULoggedIn(e),
						n = o.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
				}
		},
		"./src/reddit/selectors/realtimeComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/featureFlags/index.ts"),
				r = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/selectors/platform.ts"));
			const i = new Set(["relationship_advice", "sex", "repsneakers", "fashionreps", "tinder", "food", "dating_advice", "skincareaddiction", "sneakers", "justnomil", "childfree", "vegan", "insaneparents", "3dprinting", "woodworking", "homegym", "cooking", "homeimprovement", "raisedbynarcissists", "femaledatingstrategy", "beautyguruchatter", "shittyfoodporn", "loseit", "fitness", "watches", "fundiesnark", "mechanicadvice", "entitledparents", "running", "intermittentfasting", "dating", "parenting", "namenerds", "progresspics", "foodporn", "babybumps", "getmotivated", "crochet", "deadbedrooms", "bjj", "repladies", "keto", "baking", "watchexchange", "curlyhair", "streetwear", "pregnant", "starbucks", "bodybuilding", "malefashionadvice", "breakups", "makeupaddiction", "tattoos", "weddingplanning", "sewing", "reptime", "edc", "piercing", "fashionrepsbst", "diy", "minipainting", "thriftstorehauls", "coffee", "smoking", "beyondthebump", "verifiedfeet", "muslimmarriage", "popping", "fragrance", "kitchenconfidential", "tools", "sneakermarket", "crossstitch", "tryingforababy", "bodyweightfitness", "survivinginfidelity", "theeroticsalon", "diwhy", "flashlight", "knitting", "fasting", "ultralight", "1200isplenty", "homebrewing", "seduction", "camping", "femalefashionadvice", "lego_raffles", "infertility", "askculinary", "polyamory", "malelivingspace", "espresso", "sourdough", "vegetablegardening", "embroidery", "medical", "breakingmom", "vegancirclejerk", "recipes", "breadit", "kibbe", "tacobell", "nattyorjuice", "modelmakers", "eatcheapandhealthy", "xxfitness", "hotpeppers", "bumble", "drunk", "watchuraffle", "weightlossadvice", "indiemakeupandmore", "frugalmalefashion", "forbiddensnacks", "crafts", "hiking", "divorce", "tretinoin", "asianbeauty", "footfetish", "zerowaste", "plasticsurgery", "whiskey", "brogress", "haircarescience", "beautyboxes", "painting", "castiron", "streetwearstartup", "hair", "stepparents", "longdistance", "vegetarian", "nutrition", "beauty", "badmuas", "nootropics", "ttc30", "testosterone", "welding", "showerbeer", "homestead", "muaonthecheap", "kniferaffle", "designerreps", "bourbon", "cocktails", "chefknives", "pizza", "poshmark", "thegirlsurvivalguide", "quittingkratom", "redditlaqueristas", "ipsy", "justnofamily", "tea", "malehairadvice", "beards", "prettyaltgirls", "mercari", "rolex", "traderjoes", "yeezys", "decidingtobebetter", "toddlers", "beer", "makeup", "dhgate", "quilting", "moissanite", "omad", "tfablineporn", "bathandbodyworks", "migraine", "fermentation", "isitbullshit", "breastfeeding", "diabetes", "somethingimade", "wine", "outdoors", "crohnsdisease", "watchescirclejerk", "martialarts", "bbq", "findfashion", "abrathatfits", "accutane", "gainit", "muacjdiscussion", "lushcosmetics", "tattoo", "campinggear", "wetshaving", "ibs", "foreveralonedating", "nails", "chronicpain", "panporn", "raisedbyborderlines", "reduction", "mealprepsunday", "stopsmoking", "wicked_edge", "femalehairadvice", "shitmomgroupssay", "learnart", "engagementrings", "yoga", "cico", "exnocontact", "stretched", "kombucha", "goodyearwelt", "kayaking", "asianparentstories", "healthyfood", "internetparents", "daddit", "crossfit", "gifrecipes", "wewantplates", "acne", "askgirls", "ketorecipes", "justnoso", "bulkorcut", "beautytalkph", "animation", "mead", "orangetheory", "momforaminute", "advancedrunning", "chinatime", "scotch", "powerlifting", "grilling", "cookingforbeginners", "nanny", "family", "opiatesrecovery", "makeupexchange", "kettlebell", "repladiesbst", "bigboobproblems", "love", "adderall", "craftbeer", "mommit", "feetish", "amateur_boxing", "whiskeytribe", "fixit", "celiac", "pelletgrills", "weightlifting", "askparents", "wedding", "breakingdad", "aldi", "narcissisticparents", "veganfitness", "trollingforababy", "starbucksbaristas", "newparents", "steak", "youniqueamua", "ehlersdanlos", "eczema", "hotsauce", "veganrecipes", "howto", "beerporn", "abusiverelationships", "bicycletouring", "snowboarding", "30plusskincare", "fondanthate", "boostedboards", "infertilitybabies", "traeger", "sousvide", "leathercraft", "canberra", "interiordesign", "ivf", "muaythai", "rawdenim", "shoebots", "chipotle", "rowing", "indianskincareaddicts", "dominos", "stupidfood", "blacksmith", "qualityreps", "electronics", "bartenders", "makeuprehab", "stilltrying", "clothdiaps", "plantbaseddiet", "skookum", "plussize", "gettingshredded", "glossier", "supremeclothing", "seiko", "reptimebst", "weddingsunder10k", "swimming", "skincareaddicts", "muacirclejerk", "weightwatchers", "snarkfriends", "workout", "highheels", "veganfoodporn", "gshock", "zerocarb", "spicy", "nonmonogamy", "fitbit", "truechildfree", "womenshealth", "climbharder", "rosacea", "malefashion", "tattoodesigns", "triathlon", "eatsandwiches", "skincareaddictionuk", "trailrunning", "fancyfollicles", "knifemaking", "slowcooking", "wildernessbackpacking", "declutter", "vettech", "jewelry", "tiki", "1500isplenty", "blackhair", "awfuleyebrows", "stockx", "glutenfree", "decaf", "homeschool", "redwingshoes", "subway", "skincare_addiction", "scacirclejerk", "stackadvice", "alcohol", "codependency", "ttcafterloss", "cheese", "malegrooming", "gastricsleeve", "nationalpark", "chefit", "nespresso", "fierceflow", "hydroponics", "longhair", "instantpot", "foodhacks", "ramen", "australianmakeup", "tmj", "toxicparents", "dunksnotdead", "supreme", "scientificnutrition", "handwriting", "carnivore", "weddingdress", "tfabchartstalkers", "adoption", "xxketo4u2", "pregnancyafterloss", "workingmoms", "fitness30plus", "old_recipes", "jeffreestarcosmetics", "womensstreetwear", "techwearclothing", "metalworking", "naturalhair", "fastfood", "seriouseats", "ausskincare", "rum", "caloriecount", "waiting_to_try", "uabat", "miscarriage", "fragranceswap", "flexicas", "random_acts_of_pizza", "sushi", "sneakerscanada", "makeupflatlays", "burgers", "askbaking", "nike", "piercedcock", "gestationaldiabetes", "parentsofmultiples", "makeuplounge", "winemaking", "mclounge", "anorexianervosa", "swatchitforme", "sneakerreps", "tequila", "kennyvsspenny", "makeupaddictioncanada", "indianfood", "tattooedgirls", "iamveryculinary", "flexibility", "52weeksofcooking", "mildlynomil", "sneakerfits", "safe_food", "prisonhooch", "fitnesscirclejerk", "palemua", "fashionadvice", "exvegans", "cookingvideos", "stronglifts5x5", "strength_training", "tallgirls", "dadswhodidnotwantpets", "warts", "ultrarunning", "barber", "strongcurves", "naturalbodybuilding", "february2019bumpers", "biggreenegg", "glasses", "dhgatereps", "keto_food", "overlyspecificedmemes", "frugalfemalefashion", "macarons", "amipregnant", "grilledcheese", "smallbooblove", "palaceclothing", "xxketo", "uglyduckling", "talesfromthepizzaguy", "salsasnobs", "trekbikes", "singleparents", "paralegal", "sharpening", "soylent", "foodscience", "louisvuitton", "nerfmods", "sephora", "adidas", "diet", "moustache", "roasting", "ffacj", "whiskyporn", "hidradenitis", "booty_lovers", "bridezillas", "sebderm", "exercise", "menopause", "eceprofessionals", "custody", "traditionaltattoos", "360waves", "veganuk", "nopoo", "sfr4r", "vintagefashion", "adultchildren", "dessertporn", "budgetfood", "ifseniorclass", "firewater", "drmartens", "legitcheck", "mountaineering", "seikomods", "scacjdiscussion", "whitewater", "nikerunclub", "indieexchange", "reptronics", "footfetishworld", "bodypositive", "deliciouscompliance", "chickfila", "konmari", "diyuk", "bonappetit", "abusiveparents", "wavyhair", "predaddit", "drugstoremua", "ttc_pcos", "supermorbidlyobese", "aerogarden", "drunkencookery", "attachmentparenting", "ketogains", "omegawatches", "skincareexchange", "goruck", "greenhouses", "soda", "dyshidrosis", "gonenatural", "paleo", "diynz", "japanesefood", "sneakerdeals", "weddingphotography", "femalelivingspace", "artisanvideos", "whisky", "ketoaustralia", "ketouk", "covidcookery", "formulafeeders", "estrangedadultchild", "behindtheclosetdoor", "nicuparents", "ketobeginners", "ulta", "myfitnesspal", "tipofmyfork", "koreanbeauty", "artfundamentals", "lesbianfashionadvice", "fitpregnancy", "watchexchangefeedback", "frugalmalefashioncdn", "jumprope", "shave_bazaar", "secondaryinfertility", "cheesemaking", "mexicanfood", "cider", "curlyhairuk", "dadforaminute", "shoes", "christmas", "petitefashionadvice", "singleteenagers", "charcuterie", "ketoscience", "euroskincare", "sugarfreemua", "cowboyboots", "vegande", "happycryingdads", "upcycling", "showerbeergonewild", "moresneakers", "strongman", "fearofgod", "weightgain", "selflove", "water_fasting", "yarnaddicts", "compulsiveskinpicking", "skin", "papajohns", "culinaryplating", "dunkindonuts", "wolfvsgoat", "cautiousbb", "standingdesk", "glitch_art", "austinfood", "whiskago", "repsneakerbst", "personaltraining", "shittygifrecipes", "nootropicsdepot", "bariatricsurgery", "ratemyplate", "babies", "furniturerestoration", "veganism", "choosemyalignment", "hotness", "ladybonersgonemild", "52weeksofbaking", "sexyoutfits", "barista", "makeuporganization", "fosterparents", "blackstonegriddle", "bollywoodfashion", "newborns", "navyblazer", "weighttraining", "crappycontouring", "bravotopchef", "bgccirclejerk", "bromance", "eood", "colourpop", "revengecommunity", "fitmeals", "vegan_food", "theordinaryskincare", "irezumi", "houseplantsuk", "osdd", "edanonymousadults", "bapeheads", "chinesewatches", "bakingnoobs", "cursedfoods", "parents", "breakfastfood", "drpepper", "noses", "march2019bumpers", "emotionalneglect", "japanesestreetwear", "hgtv", "ketodrunk", "smallboobproblems", "toolporn", "askvegans", "veganbeauty", "ethicalfashion", "gyodating", "sushiabomination", "dryfasting", "chinesefood", "benchmade", "dewalt", "njbeer", "makeupfetish", "fragsplits", "divorce_men", "airfryer", "whataburger", "edfood", "fryup", "aimeleondore", "veganbaking", "bluecollarwomen", "snakediet", "flooring", "boostmasterlin", "beardporn", "cake", "putaneggonit", "badparents", "japanesewatches", "vegetarianrecipes", "applewatchfitness", "innout", "mealprep", "jerky", "diybeauty", "skincareflatlays", "myweddingdress", "ifparents", "teespring", "dietandhealth", "repph", "makeupaddicts", "wgtow", "trollmua", "healthy_recipes", "queerception", "fitnessonline", "fashionplus", "monsterenergy", "ifbumpers2019", "todayiwore", "gastricbypass", "hearingaids", "coffeestations", "anycubic", "eloping", "legsgw", "neongenesisevangelion", "twins", "loseweight", "dairyqueen", "mancave", "powerbuilding", "sexybrownwomen", "wings", "couturereps", "cafe", "shoppingaddiction", "puer", "pizzadrivers", "veganchill", "childrenofdeadparents", "bigmenfashionadvice", "fitnessmotivation", "eyebrows", "tshirts", "chocolate", "parkrangers", "maleinfertility", "homeimprovementideas", "legitpiercing", "familyissues", "ifparenting", "kefir", "dcwhisky", "entirebodyexercise", "eustachiantubeclick", "pyrex_love", "breastfeedingsupport", "workouts", "rheumatoidarthritis", "tacos", "customsneakers", "dessert", "pizzahutemployees", "printondemand", "zerowastevegans", "foodievideos", "calmhands", "4hourbodyslowcarb", "eatcheapandvegan", "dyson", "lowcarb", "15minutefood", "swoleacceptance", "justengaged", "vintagesewing", "androgyny", "lactoseintolerant", "stonerfood", "coffeeswap", "wardrobepurge", "glutenfreerecipes", "hotdogs", "repvouch", "wendys", "charcoal", "adamragusea", "veganketo", "friend", "makeuptips", "blacksmithing", "onepotmeals", "bodyacceptance", "unconventionalmakeup", "euphorbiaceae", "whitehousedinners", "lingerieaddiction", "agingparents", "muaconspiracy", "lacqueristas", "monogamy", "randomactsofmakeup", "waiting_to_wed", "preppy", "vegrecipes", "foodscam", "sunflowers", "australianmfa", "badfoodporn", "moderatelygranolamoms", "raisingkids", "offwhitefactory", "vintagefashions", "sandwiches", "sca", "asianbeautyexchange", "rothys", "homefitness", "blendedfamilies", "cosplayers", "vostok", "taylorstitch", "septemberbumpers2017", "milk", "olivemua", "soup", "talesfromthekitchen", "breakfast", "revengexstorm", "vegansnacks", "cleanmakeup", "gucci", "fashion_design", "beginnerfitness", "pinkplants", "rbnchildcare", "narcabuseanddivorce", "perfumes", "fashionwomens35", "desiweddings", "smoothies", "sahp", "justnofil", "agegaprelationship", "vitamix", "baby", "adenium", "best_tattoos", "pandaexpress", "healthyeatingnow", "walstad", "oney", "advancedfitness", "figs", "organicgardening", "fashionporn", "fitnessgirls", "askguys", "kimchi", "dysfunctionalfamily", "veryexpensive", "sausagetalk", "ratemytea", "peeling", "topsecretrecipes", "ketotrees", "biltong", "foodie", "weightlossafterbaby", "makeupeducation", "wewantcups", "thingsmykidsaid", "fatherhood", "todayiate", "ts_withdrawal", "stopdrinkingfitness", "modestdress", "pie", "ketoprogress", "ocdmemes", "posturetipsguide", "fruit", "justnicefits", "cancerfamilysupport", "juicing", "makeupaddictionuk", "cheap_meals", "redhair", "glaucoma", "capsulewardrobe", "mezcal", "mua", "kpopfashion", "getoutofbed", "rawvegan", "foodsafety", "sneakermarketrefs", "glutenfreevegan", "prison", "straightedge", "berries", "buyingforbaby", "wemetonline", "melts", "wallets", "halfevil333", "tanning", "im5andthisismacaroni", "veganfood", "bakeoff", "famnnfp", "uksucculents", "chicagobeer", "dairyfree", "pizzahut", "greeneyed", "childrensbooks", "aj1s", "apartmenthacks", "ketocirclejerk", "braswap", "zpaletteporn", "beautyblogs", "nicotine", "dryagedbeef", "thehighchef", "weddinghashtag", "barbattlestations", "dads", "ketochow", "smokingmeat", "asexualdating", "anorexiarecovery", "budgetcooking", "weddingswap", "coldbrew", "foodhaikus", "restaurant", "shittyfertilityadvice", "kawaii", "cardmaking", "coparenting", "burgerking", "sodastream", "streetwearfits", "wegmans", "shaving", "theketodiet", "jerseymikes", "bpdpartners", "hats", "hot_dog", "veggieshake", "subscriptionboxes", "familiesyouchoose", "food_pantry", "clothingstartups", "avocado", "thehopyard", "topchef", "beerwithaview", "polyfamilies", "adventures", "searchandrescue", "kfc", "cookingcollaboration", "fabrics", "drinking", "trollxweddings", "gingerguys", "lichensclerosus", "planetfitnessmembers", "diplomacy", "wedditnyc", "backpackingdogs", "tegu", "airjordans", "minimal_setups", "koji", "sexeducation", "ketomealseatingnow", "sketchup", "sneakerwatch", "latteart", "cupcakes", "listeningspaces", "hands", "shittingadvice", "canadawhisky", "boba", "cookingtonight", "scandinavianinterior", "dehydrating", "crueltyfree", "makeupartists", "jewelrylove", "lookoftheday", "vegetarianketo", "fiveguys", "handbalancing", "distilling", "sustainablefashion", "repwatch", "bape", "asianeats", "aussiemakeuptrade", "foxbrain", "craftytrolls", "chefknifeswap", "teepublic", "majesticmanes", "ausproperty", "freeletics", "ectopicsupportgroup", "sfx", "mtbtrailbuilding", "crafting", "carhartt", "femalefashion", "80sfastfood", "plcb", "recipeinspiration", "badmakeup", "vedc", "liftingmusic", "beautyinfluencers", "wafflehouse", "crushadvice", "pho", "babyloss", "beautyaddiction", "ketomealprep", "beardtalk", "engaged", "vegetarianism", "glutenfreecooking", "octopus", "liquor", "streeteats", "icecream", "mushroom_cultivation", "satisficing", "mensfashion", "allenedmonds", "underworldmbti", "lesmills", "egg", "bbexchange", "healthyeating", "nailpolish", "mcdonalds", "cosplaybeauties", "rootedporn", "canyoneering", "cocacola", "byuidaho", "datsmiledoe", "meatlessmealprep", "midwives", "veganforbeginners", "makeup101", "psmf", "cosmeticsurgery", "prohealth", "vegetarianfoodporn", "fashionnews", "foodtrucks", "foodphotography", "crocs", "mre", "mimicrecipes", "vegangifrecipes", "tinyhouse", "handbags", "parentinginbulk", "ketodiet", "dinner", "rawring20s", "pins", "caving", "alternativehealth", "singlemothersbychoice", "adopted", "stepmom", "cutekids", "clocks", "jordans", "foodnyc", "naturalbeauty", "chickennuggets", "mom", "accuratelyrateme", "vancouvercraftbeer", "bb30", "trailguides", "canadabeautyexchange", "apartmentdesign", "ketobabies", "smokefire", "btfc", "fruitarian", "customshoes", "caffeine", "bacon", "singledads", "culinary", "filmfashion", "veganity", "foodblog", "shittywoodworking", "peptalkswithpops", "beercirclejerk", "businessfashion", "snacking", "gymshark", "neworleansbeer", "coffee_shop", "perfumeexchange", "tryingforanother", "ketomeals", "easyrecipes", "vodka", "crystalhealing", "fermentedhotsauce", "makeupselfies", "beautydiagrams", "nordicskincare", "shroom", "handtoolrescue", "weightlossfoods", "malefashionmarket", "teenmfa", "tfhcooking", "xxketoover50", "cajunfood", "amazingfitness", "sciencebasedparenting", "myopia", "asiangirlsbeingsexy", "diyweddings", "keto_diet", "fitmama", "breadmachines", "motivationvideos", "henna", "cutyourownhair", "ibsresearch", "florists", "weddingring", "foggypics", "ayurveda", "fastfoodhorrorstories", "helicopterparents", "coffee_roasters", "veganmealprep", "desiketo", "copornot", "foodwishes", "watchhorology", "filipinofood", "ttchealthy", "redditlaqueristaswap", "luxury", "weddingvideography", "allergy", "gainitmeals", "picturesofchina", "mixology", "tdcs", "brownbeauty", "doener", "bmorebourbonsociety", "marfans", "europeanmalefashion", "hypoglycemia", "muscleconfusion", "jewelers", "streetwearsales", "askdad", "landscapingtips", "gaybrosfitness", "hooters", "modulars", "mealplanyourmacros", "repfashion", "ketodessert", "bedding", "socks", "runninglifestyle", "frozendinners", "orthopaedics", "potato", "daddycringe", "accessibility", "veganzerowaste", "xxy", "menswear", "deltaco", "novemberbumpers2017", "haircare", "wholesometeenboys", "stressfreeseason", "askacobbler", "redbull", "worldwhisky", "brownreclusebites", "veganparenting", "trainerroad", "climbingpartners", "ketomealsandrecipes", "fiestaware", "neurofibromatosis", "streetfoodartists", "eggs", "kickwho", "mfacirclejerk", "lymedisease", "deondergrondse", "vegan_travel", "toolsales", "fuckcilantro", "chiropractorzone", "powerwashinggore", "dermatology", "malelifestyle", "projectpan", "neurofeedback", "dysphagia", "grainfather", "wedditgetsfit", "kinobody", "weightlossnews", "ketodietapp", "memantinehcl", "organichealthproducts", "weightlossdiets", "finedining", "fuckingmanly", "antidiet", "condiments", "audiprocdisorder", "popeyes", "exercisepostures", "pez", "onlinefriends", "bys", "wintercycling", "salsa", "outlandishalcoholics", "crossedlegs", "oklahomajoe", "pittsburghbeers", "fastfeeling", "askredditfood", "lioneltrains", "foodnerds", "toolboxmods", "sdam", "irinasabetskaya", "labeer", "yegvegan", "fattylivernafld", "fitlifevideos", "diary", "reebok", "outbreakworld", "modernfashionporn", "davidstea", "ketoconnect", "stepschallenge", "mustard", "pcosandpregnant", "portugalvegan", "xrays", "beercanada", "houstonbeer", "fastfoodreview", "tacticalmedicine", "kidsmeal", "hangovereffect", "misophoniasupport", "deepfried", "fastbuds_family", "adenomyosis", "dnp", "morganeisenberg", "ufyh", "kidsafevideos", "drycleaning", "sobrietyandrecovery", "raptors40k", "eczemabs", "femininenotfeminist", "prosopagnosia", "marriageisbliss", "costumeporn", "motherinlawsfromhell", "32dollars", "sexyness", "breakingeggs", "rabbitreddit", "spinalfusion", "amaro", "freefood", "pistollake", "9round", "purplecoco", "ect", "fmd", "csectioncentral", "dad", "raocdeletes", "olivesplace", "weightlosstechniques", "lgbtweddings", "avascularnecrosis", "naturalnutrition", "bpdrecovery", "marylandeats", "rainbow_babies", "persuasionexperts", "brandy", "nutritionsupport", "stretchedclassifieds", "sanfranciscosecrets", "cmt", "washingtonstategarden", "penpalsover40", "marriedlife", "snowblowers", "queerfamilies", "inlaws", "fragdecants", "fashion", "cordwaining", "treeparents", "autismuk", "bitters", "chd", "sportsmedicine", "stlouisbeer", "bjj_gear", "alopecia_areata", "rbnspouses", "qdoba", "weird_dreams", "psc", "trying2conceive", "asianscuckingpinkies", "blackladiesfitness", "recipegifs", "tfabgrads", "fantasyimages", "gymmotivation", "olivegarden", "girlfriendproblems", "atozplasticsurgery", "foodsandiego", "sneakersreps", "trulieve", "xxweightroom", "floridagardening", "longislandeats", "ghostkitchens", "bento", "lunch", "texasbeer", "sexdolling", "teethdrumming", "mdbeer", "bi4bi", "retinitispigmentosa", "braintumor", "dankrecoverymeme", "shinyfashion", "cozy", "gestationaldiabetics", "randomactsofpetfood", "asianbeautyrehab", "toyreviews", "thoracicoutlet", "canskincare", "hotguysworkingout", "paleolithicketogenic", "paruresis", "supersoil", "bikinisonshow", "makeupfreebies", "astrorelationships", "agricultureporn", "twackedup", "fried", "crueltyfreemua", "carlsjr", "guacmemes", "youtubebeauty", "powerliftingmemes", "budgetweddings", "skincarerehab", "beautifullyenhanced", "thericegoddess", "pottytraining", "finsubteamwork", "hardees", "diamond", "pregnancyproblems", "casualtfab", "condimentpackets", "teenstyle", "ownit", "carpets", "askfastfoodemployees", "erectiledysfunctioned", "selfcare", "snowshoeing", "thingsmadeofchocolate", "paperflowers", "weddingphotographer", "socialworkerstories", "entitledoldpeople", "hownotto", "weddingsolutions", "fitnessguides", "ketogenicdiet", "womensbodybuilding", "foodhack", "kentuckyfriedchicken", "muaeurope", "coffeeoutside", "grease", "freeforallfashion", "vegkc", "closetswap", "onlineclothing", "rhubarbhomies", "grooms", "frugalbeauty", "upliftingvegan", "mito", "lodestone_testing"]);
			var a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const c = e => (e => {
				return Object(a.c)(e, {
					experimentEligibilitySelector: () => Object(d.I)(e),
					experimentName: o.Gc
				}) === o.Pc.Enabled
			})(e) && (e => {
				const t = Object(r.d)(e);
				return !!t && i.has(t.toLowerCase())
			})(e) && n.d.realtimeCommentsExperiment(e)
		},
		"./src/reddit/selectors/seo/reredditPromo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = s("./src/reddit/selectors/platform.ts");
			const i = new Date,
				a = i.getUTCFullYear(),
				d = i.getUTCMonth(),
				c = i.getUTCDate(),
				l = Date.UTC(2008, 0, 1),
				m = Date.UTC(a, d - 7, c),
				p = Object(o.a)(e => Object(r.f)(e), e => Object(n.a)(e), (e, t) => e && !!t && !!t.created && t.created > l && t.created < m)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage.6a157f9fe250d684c403.js.map