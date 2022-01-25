// https://www.redditstatic.com/desktop2x/MembershipPaywallPage.edef8f98ee624d58eaac.js
// Retrieved at 1/25/2022, 1:40:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MembershipPaywallPage"], {
		"./node_modules/draft-js/dist/Draft.css": function(e, t, s) {},
		"./node_modules/linkify-it/index.js": function(e, t, s) {
			"use strict";

			function a(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(s) {
						e[s] = t[s]
					}))
				})), e
			}

			function r(e) {
				return Object.prototype.toString.call(e)
			}

			function o(e) {
				return "[object Function]" === r(e)
			}

			function n(e) {
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
							var a = e.slice(t);
							return s.re.http || (s.re.http = new RegExp("^\\/\\/" + s.re.src_auth + s.re.src_host_port_strict + s.re.src_path, "i")), s.re.http.test(a) ? a.match(s.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, s) {
							var a = e.slice(t);
							return s.re.no_http || (s.re.no_http = new RegExp("^" + s.re.src_auth + "(?:localhost|(?:(?:" + s.re.src_domain + ")\\.)+" + s.re.src_domain_root + ")" + s.re.src_port + s.re.src_host_terminator + s.re.src_path, "i")), s.re.no_http.test(a) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : a.match(s.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, s) {
							var a = e.slice(t);
							return s.re.mailto || (s.re.mailto = new RegExp("^" + s.re.src_email_name + "@" + s.re.src_host_strict, "i")), s.re.mailto.test(a) ? a.match(s.re.mailto)[0].length : 0
						}
					}
				},
				l = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				d = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function m(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					a = e.__tlds__.slice();

				function i(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || a.push(l), a.push(t.src_xn), t.src_tlds = a.join("|"), t.email_fuzzy = RegExp(i(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(i(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(i(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(i(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function d(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var s = e.__schemas__[t];
					if (null !== s) {
						var a = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = a, "[object Object]" === r(s)) return ! function(e) {
							return "[object RegExp]" === r(e)
						}(s.validate) ? o(s.validate) ? a.validate = s.validate : d(t, s) : a.validate = function(e) {
							return function(t, s) {
								var a = t.slice(s);
								return e.test(a) ? a.match(e)[0].length : 0
							}
						}(s.validate), void(o(s.normalize) ? a.normalize = s.normalize : s.normalize ? d(t, s) : a.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === r(e)
						}(s) ? d(t, s): c.push(t)
					}
				})), c.forEach((function(t) {
					e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
				})), e.__compiled__[""] = {
					validate: null,
					normalize: function(e, t) {
						t.normalize(e)
					}
				};
				var m = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(n).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + m + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + m + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function u(e, t) {
				var s = e.__index__,
					a = e.__last_index__,
					r = e.__text_cache__.slice(s, a);
				this.schema = e.__schema__.toLowerCase(), this.index = s + t, this.lastIndex = a + t, this.raw = r, this.text = r, this.url = r
			}

			function p(e, t) {
				var s = new u(e, t);
				return e.__compiled__[s.schema].normalize(s, e), s
			}

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var s;
				t || (s = e, Object.keys(s || {}).reduce((function(e, t) {
					return e || i.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = a({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = a({}, c, e), this.__compiled__ = {}, this.__tlds__ = d, this.__tlds_replaced__ = !1, this.re = {}, m(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, m(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = a(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, a, r, o, n, i, c;
				if (this.re.schema_test.test(e))
					for ((i = this.re.schema_search).lastIndex = 0; null !== (t = i.exec(e));)
						if (r = this.testSchemaAt(e, t[2], i.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = s.index + s[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (a = e.match(this.re.email_fuzzy)) && (o = a.index + a[1].length, n = a.index + a[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && n > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = n)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, s) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, s, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					s = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (s.push(p(this, t)), t = this.__last_index__);
				for (var a = t ? e.slice(t) : e; this.test(a);) s.push(p(this, t)), a = a.slice(this.__last_index__), t += this.__last_index__;
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
		"./node_modules/lodash/_arrayReduceRight.js": function(e, t) {
			e.exports = function(e, t, s, a) {
				var r = null == e ? 0 : e.length;
				for (a && r && (s = e[--r]); r--;) s = t(s, e[r], r, e);
				return s
			}
		},
		"./node_modules/lodash/_baseEachRight.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseForOwnRight.js"),
				r = s("./node_modules/lodash/_createBaseEach.js")(a, !0);
			e.exports = r
		},
		"./node_modules/lodash/_baseExtremum.js": function(e, t, s) {
			var a = s("./node_modules/lodash/isSymbol.js");
			e.exports = function(e, t, s) {
				for (var r = -1, o = e.length; ++r < o;) {
					var n = e[r],
						i = t(n);
					if (null != i && (void 0 === c ? i == i && !a(i) : s(i, c))) var c = i,
						l = n
				}
				return l
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var s = [];
				return a(e, (function(e, a, r) {
					t(e, a, r) && s.push(e)
				})), s
			}
		},
		"./node_modules/lodash/_baseForOwnRight.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseForRight.js"),
				r = s("./node_modules/lodash/keys.js");
			e.exports = function(e, t) {
				return e && a(e, t, r)
			}
		},
		"./node_modules/lodash/_baseForRight.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_createBaseFor.js")(!0);
			e.exports = a
		},
		"./node_modules/lodash/_baseGt.js": function(e, t) {
			e.exports = function(e, t) {
				return e > t
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var s = Math.ceil,
				a = Math.max;
			e.exports = function(e, t, r, o) {
				for (var n = -1, i = a(s((t - e) / (r || 1)), 0), c = Array(i); i--;) c[o ? i : ++n] = e, e += r;
				return c
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, t, s, r) {
				for (var o = e.length, n = r ? o : -1;
					(r ? n-- : ++n < o) && t(e[n], n, e););
				return s ? a(e, r ? 0 : n, r ? n + 1 : o) : a(e, r ? n + 1 : 0, r ? o : n)
			}
		},
		"./node_modules/lodash/_charsEndIndex.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, t) {
				for (var s = e.length; s-- && a(t, e[s], 0) > -1;);
				return s
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseRange.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js"),
				o = s("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, s, n) {
					return n && "number" != typeof n && r(t, s, n) && (s = n = void 0), t = o(t), void 0 === s ? (s = t, t = 0) : s = o(s), n = void 0 === n ? t < s ? 1 : -1 : o(n), a(t, s, n, e)
				}
			}
		},
		"./node_modules/lodash/_escapeHtmlChar.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_basePropertyOf.js")({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			});
			e.exports = a
		},
		"./node_modules/lodash/chunk.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseSlice.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				n = Math.ceil,
				i = Math.max;
			e.exports = function(e, t, s) {
				t = (s ? r(e, t, s) : void 0 === t) ? 1 : i(o(t), 0);
				var c = null == e ? 0 : e.length;
				if (!c || t < 1) return [];
				for (var l = 0, d = 0, m = Array(n(c / t)); l < c;) m[d++] = a(e, l, l += t);
				return m
			}
		},
		"./node_modules/lodash/dropRightWhile.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? r(e, a(t, 3), !0, !0) : []
			}
		},
		"./node_modules/lodash/escape.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_escapeHtmlChar.js"),
				r = s("./node_modules/lodash/toString.js"),
				o = /[&<>"']/g,
				n = RegExp(o.source);
			e.exports = function(e) {
				return (e = r(e)) && n.test(e) ? e.replace(o, a) : e
			}
		},
		"./node_modules/lodash/filter.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_arrayFilter.js"),
				r = s("./node_modules/lodash/_baseFilter.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				n = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (n(e) ? a : r)(e, o(t, 3))
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseFlatten.js"),
				r = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return a(r(e, t), 1)
			}
		},
		"./node_modules/lodash/flattenDeep.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseFlatten.js"),
				r = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? a(e, r) : []
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseIndexOf.js"),
				r = s("./node_modules/lodash/isArrayLike.js"),
				o = s("./node_modules/lodash/isString.js"),
				n = s("./node_modules/lodash/toInteger.js"),
				i = s("./node_modules/lodash/values.js"),
				c = Math.max;
			e.exports = function(e, t, s, l) {
				e = r(e) ? e : i(e), s = s && !l ? n(s) : 0;
				var d = e.length;
				return s < 0 && (s = c(d + s, 0)), o(e) ? s <= d && e.indexOf(t, s) > -1 : !!d && a(e, t, s) > -1
			}
		},
		"./node_modules/lodash/maxBy.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseExtremum.js"),
				r = s("./node_modules/lodash/_baseGt.js"),
				o = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return e && e.length ? a(e, o(t, 2), r) : void 0
			}
		},
		"./node_modules/lodash/range.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_createRange.js")();
			e.exports = a
		},
		"./node_modules/lodash/reduceRight.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_arrayReduceRight.js"),
				r = s("./node_modules/lodash/_baseEachRight.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				n = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? a : n,
					l = arguments.length < 3;
				return c(e, o(t, 4), s, l, r)
			}
		},
		"./node_modules/lodash/takeWhile.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? r(e, a(t, 3)) : []
			}
		},
		"./node_modules/lodash/trimEnd.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseToString.js"),
				r = s("./node_modules/lodash/_castSlice.js"),
				o = s("./node_modules/lodash/_charsEndIndex.js"),
				n = s("./node_modules/lodash/_stringToArray.js"),
				i = s("./node_modules/lodash/toString.js"),
				c = s("./node_modules/lodash/_trimmedEndIndex.js");
			e.exports = function(e, t, s) {
				if ((e = i(e)) && (s || void 0 === t)) return e.slice(0, c(e) + 1);
				if (!e || !(t = a(t))) return e;
				var l = n(e),
					d = o(l, n(t)) + 1;
				return r(l, 0, d).join("")
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var a = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return a(e) + t
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
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./src/lib/currency/cleanNumber/index.ts");

			function r(e, t) {
				const s = Object(a.a)(e),
					r = parseInt(s) / 100;
				return Math.floor(r) !== r || t ? r.toFixed(2) : String(r)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, s) {
			"use strict";

			function a(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			s.d(t, "a", (function() {
				return a
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return n
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "e", (function() {
				return d
			}));
			var a, r = s("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(a || (a = {}));
			const o = "USD",
				n = "ETH",
				i = "COINS",
				c = [n, "BTC"],
				l = [i, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				d = {
					COINS: () => r.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => r.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => r.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return d
			}));
			var a = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = s("./src/lib/currency/centsToDollars/index.ts"),
				o = s("./src/lib/currency/currencies.ts"),
				n = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./src/reddit/helpers/governance/tokens.ts"),
				c = s("./src/reddit/constants/intlSupport.ts");
			const l = (e, {
					locale: t = a.DEFAULT_LOCALE,
					pretty: s,
					formatOptions: r
				} = {}) => {
					const o = Number(e);
					return Object(c.c)() ? s ? Object(n.b)(o) : new Intl.NumberFormat(t, r).format(o) : m(o, s, t)
				},
				d = (e, t = {}) => {
					const {
						locale: s = a.DEFAULT_LOCALE,
						pretty: n,
						formatOptions: l,
						displayConversion: d,
						forceDecimals: h,
						currency: b = t.currency || (t.type ? p(t.type) : o.c),
						type: _ = t.type || (t.currency ? u(t.currency) : o.b.Real)
					} = t, g = Number(e), f = String(e);
					switch (_) {
						case o.b.Reddit: {
							const e = o.e[b],
								t = e ? e() : b;
							return Object(c.c)() ? new Intl.NumberFormat(s, {
								currencyDisplay: "symbol",
								...l
							}).format(g) + " " + t : m(g, n, s, t)
						}
						case o.b.Crypto: {
							if (n) {
								return Object(i.c)(f, d) + " " + b
							}
							const e = Number(Object(i.b)(f, d));
							return Object(c.c)() ? new Intl.NumberFormat(s, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...l
							}).format(e) : m(e, n, s, b)
						}
						case o.b.Real:
						default: {
							const e = Number(Object(r.a)(f, h));
							return Object(c.c)() ? new Intl.NumberFormat(s, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: n ? "compact" : "standard",
								...l
							}).format(e) : m(e, n, s, b)
						}
					}
				},
				m = (e, t, s, a) => {
					return (t ? Object(n.b)(e) : e.toLocaleString(s)) + (a ? " " + a : "")
				},
				u = e => o.g.includes(e.toUpperCase()) ? o.b.Reddit : o.f.includes(e.toUpperCase()) ? o.b.Crypto : o.b.Real,
				p = e => {
					switch (e) {
						case o.b.Crypto:
							return o.d;
						case o.b.Reddit:
							return o.a;
						case o.b.Real:
						default:
							return o.c
					}
				}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(d);
			const u = e => e.preventDefault();
			t.a = Object(n.a)(e => o.a.createElement(i.e, null, o.a.createElement(i.i, null, o.a.createElement(l.a, null, o.a.createElement(i.q, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(i.b, null)))), o.a.createElement(i.l, null, o.a.createElement(i.p, {
				className: m.a.ModalText
			}, e.modalText)), o.a.createElement(i.g, null, !e.hideCancelButton && o.a.createElement(i.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(i.u, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			const {
				fbt: o
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function n({
				className: e
			}) {
				return r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, o._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/components/Economics/Confetti/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_22MTLJBZK8cANpC_Qc0W8s",
				piece: "_3RfPsEAbZKkVHvjLqOq0mZ"
			}
		},
		"./src/reddit/components/Economics/Price/index.m.less": function(e, t, s) {
			e.exports = {
				price: "_2ZOGQHalmPN89FqiioxqoW",
				token: "_2PNHBi0pHlP4y_f4W9yfPw"
			}
		},
		"./src/reddit/components/Economics/Price/index.tsx": function(e, t, s) {
			"use strict";
			var a, r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/localizeCurrency/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/components/Governance/Token/index.tsx"),
				m = s("./src/reddit/helpers/governance/tokens.ts"),
				u = s("./src/reddit/hooks/useLocale.ts"),
				p = s("./src/reddit/selectors/crypto/points.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(a || (a = {}));
			const b = (e, t) => {
					if (e) switch (t) {
						case a.Monthly:
							return h.fbt._("{price}/mo", [h.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				_ = (e, t) => {
					if (e) switch (t) {
						case a.Monthly:
							return h.fbt._("{price} / month", [h.fbt._param("price", e)], {
								hk: "4ugXuk"
							});
						default:
							return e
					}
				};
			var g = s("./src/reddit/components/Economics/Price/index.m.less"),
				f = s.n(g);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = ({
				subredditId: e,
				pointPrice: t
			}) => o.a.createElement(o.a.Fragment, null, o.a.createElement(d.a, {
				className: f.a.token,
				subredditId: e
			}), t);
			t.a = e => {
				const {
					className: t,
					hideTokenName: s,
					monthly: r,
					subredditId: d
				} = e, h = Object(u.a)(), g = Object(n.e)(e => Object(p.b)(e, d)), v = e.dollarPrice && Object(c.b)(e.dollarPrice, {
					locale: h,
					forceDecimals: !0
				}), w = e.tokenPrice && g && Object(l.a)(Object(m.b)(e.tokenPrice, null == g ? void 0 : g.displayConversion)) + (s ? "" : " " + g.name);
				if (!v && !w) return null;
				const E = r ? a.Monthly : a.Once;
				return o.a.createElement("span", {
					className: Object(i.a)(t, f.a.price)
				}, v && w ? x._("{dollar-price} or {point-price}", [x._param("dollar-price", b(v, E)), x._param("point-price", o.a.createElement(y, {
					subredditId: d,
					pointPrice: b(w, E)
				}))], {
					hk: "2Gif0l"
				}) : v ? _(v, E) : w ? o.a.createElement(y, {
					subredditId: d,
					pointPrice: _(w, E)
				}) : null)
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_10ESw5cXwHBLWInQHjwYH2",
				container: "_1sfIwxqWpDotVXLjKV_2jO",
				loading: "_18AJBQlrwo3obCZczqf9Is",
				loadingIcon: "_3A8u5o0uPgpbYt-dE4XZiC",
				submitting: "_167697f4GfaciFsGrMXP-w"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/governance/errorToast.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/ApiContext.tsx"),
				d = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = s("./src/reddit/endpoints/governance/products/badges.ts"),
				u = s("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less"),
				b = s.n(h);
			const _ = "subreddit-premium-purchase-braintree";
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						loading: !0,
						submitting: !1
					}, this.getId = () => _ + this.props.productId
				}
				componentDidMount() {
					if (this.mounted = !0, this.props.subreddit) {
						const e = this.props.apiContext(),
							t = this.props.subreddit.id;
						Object(u.a)({
							apiContext: e,
							config: {
								type: "purchase"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: s => Object(m.d)(e, {
								nonce: s,
								subredditId: t,
								price: this.props.price,
								products: [{
									productId: this.props.productId,
									quantity: "1"
								}]
							}),
							onCancel: () => this.mounted && this.setState({
								submitting: !1
							}),
							onClientLoad: () => this.mounted && this.setState({
								loading: !1
							}),
							onError: e => {
								this.mounted && (this.setState({
									submitting: !1
								}), this.props.onError(e), console.error(e))
							},
							onSubmitting: () => {
								this.mounted && this.setState({
									submitting: !0
								}), this.props.sendEvent(e => ({
									source: "meta",
									action: "click",
									noun: "badge_gallery_paypal_purchase",
									correlationId: this.props.correlationId,
									...p.m(e),
									subreddit: p.hb(e)
								}))
							},
							onSuccess: () => this.props.onPaymentSuccessful()
						})
					}
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				render() {
					return r.a.createElement("div", {
						className: Object(n.a)(this.props.className, b.a.container)
					}, r.a.createElement("div", {
						className: Object(n.a)(b.a.button, {
							[b.a.loading]: this.state.loading,
							[b.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && r.a.createElement(d.a, {
						className: b.a.loadingIcon,
						sizePx: 16
					}))
				}
			}
			t.a = Object(l.b)(Object(o.b)(void 0, (e, {
				subreddit: t
			}) => ({
				onError: t => Object(i.a)(e, t)
			}))(Object(c.c)(g)))
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/higherOrderComponents/makeAsync.tsx");
			const r = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumBlockchainCheckoutModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.tsx")).then(e => e.default)
			});
			t.a = r
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Cart/index.m.less": function(e, t, s) {
			e.exports = {
				container: "i0lchXJA5Dup_Op8k_UvG",
				description: "RyMUILAlWHIP5yHrsIRUK",
				rhs: "_2Byh-FeUhk5NLLqInuciri",
				monthlyText: "_1UJ2XLb7zAyZJm2IG70b8O"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "yQcP2nhhN4KlRXQL7Yyat",
				link: "JFz_onNhRvDkA39DMDGLr",
				linkLast: "_2tWZsJd91sgL5Q3C1vHdWm"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Header/index.m.less": function(e, t, s) {
			e.exports = {
				close: "_36KvgN4Tgsg1mjKKUnMkcE",
				container: "_19sRWT77cnRhheoNPG1ZE6",
				text: "z7BZWyDlEY5SQkMiUwNSS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/PurchaseButton/index.m.less": function(e, t, s) {
			e.exports = {
				alreadyPurchased: "_3kTN5B6iN8oIgydXPz0rqC",
				button: "MDdpUCHANWQuqaVGoEpVs",
				buttonWithoutCards: "_3VR87fo8ZjKY1XoyNqNTvE",
				container: "_3tReAPan_-M4AovA4DBue1",
				loading: "_2jk-SZSEsufLuRcA5wvyng",
				loadingIcon: "_3pQ_MVZfUDaXtcf576C9k7",
				loginButton: "_3rTymlG8MJZxRgjRsbeSOS",
				loginMessage: "_3CpWRzyK4_woOmAW99eEDr",
				submitting: "_322vbjtCZwKRqc4NzIonTv"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/index.m.less": function(e, t, s) {
			e.exports = {
				requiresMobile: "_1W-SUlHSYUhCTSrV3ZsOeJ",
				selectPaymentBox: "_1NpPjn9SLo_z__HXuYSQYf",
				selectPaymentTitleBox: "g_agLLmnc-Z1voaKrEx_n",
				selectPaymentTitle: "_3PrvKB6dbwtJlsf2wNE6X",
				paymentContainer: "_2C6O-Mg9CPpXYZJkAlmkYO",
				paymentAmount: "_2i5oESQxrhg5L2yj6yUeuO",
				tokenPurchase: "_2-2nbzwdCx50Yxx3AXJUCY",
				token: "_3IsFHSaHpAk_G3z-ncqt9G",
				notEnoughTokens: "_3UP0wAWXgMEZmV9oytBfkm",
				tokenPurchaseButton: "tTJPkeFQiDABhAoE46jBQ",
				dollarPurchase: "_10je0H39zRuRzLWsSeGecr"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Products/index.m.less": function(e, t, s) {
			e.exports = {
				badgeImage: "_24nb1Wn-HQrlcIMVXggPWP",
				crown: "_1C6OFdtgaIgK_TyogeJOgp"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/index.m.less": function(e, t, s) {
			e.exports = {
				cart: "PxUAb5u5curFoJmkN43pD",
				container: "_1rguiWal__5IcFoZwSe0rS",
				content: "_1bK-Mw7EE5ZnMei8Kub2Kk",
				footer: "_3GBKrS5u4-TjVoWpDmlXC-",
				payment: "wW8kQRKEVGkGiLaRVyxmA"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, s) {
			"use strict";
			var a, r, o, n;

			function i(e) {
				const {
					platform: t,
					playerType: s,
					region: a,
					style: r
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${r}/${a}_${t}_${s}_${r}.svg`
			}
			s.d(t, "a", (function() {
					return a
				})), s.d(t, "b", (function() {
					return r
				})), s.d(t, "c", (function() {
					return o
				})), s.d(t, "d", (function() {
					return i
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(a || (a = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(r || (r = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(o || (o = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(n || (n = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/lib/fastdom/index.ts"),
				i = s("./src/reddit/components/Economics/Confetti/index.m.less"),
				c = s.n(i);
			const l = 250,
				d = 100;
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.numPieces = 0, this.setEl = e => {
						this.el = e, this.props.letItRain && this.renderConfetti()
					}, this.renderConfetti = () => {
						const e = this.el;
						if (!e) return;
						e.classList.add(c.a.container);
						const t = e.offsetWidth,
							s = e.offsetHeight;
						for (let a = 0; a < d; a++) this.createPiece(t, s);
						for (let a = 0; a < l - d; a++) window.setTimeout(() => this.createPiece(t, s), 1e4 * a / (l - d))
					}, this.createPiece = (e, t) => {
						n.a.write(() => {
							if (!this.el) return;
							const s = document.createElement("div"),
								a = (6 * Math.random() + 4) * t / 1e3;
							s.className = c.a.piece, s.style.width = 4 * Math.random() + 3 + "px", s.style.height = 6 * Math.random() + 3 + "px", s.style.transform = `rotate(${360*Math.random()}deg)`, this.el.appendChild(s), this.restartPiece(s, a, t, e), this.numPieces++
						})
					}, this.restartPiece = (e, t, s, a) => {
						if (this.el) {
							if (!this.props.letItRain) return e.parentNode.removeChild(e), this.numPieces--, void(this.numPieces || this.el.classList.remove(c.a.container));
							n.a.write(() => {
								e.style.transition = "", e.style.top = "0", e.style.left = Math.random() * a + "px", e.offsetHeight, e.style.transition = `top ${t}s ease-out, left ${t}s ease-out`
							}), setTimeout(() => {
								n.a.write(() => {
									e.style.top = s + "px", e.style.left = parseInt(e.style.left) + (400 * Math.random() - 200) + "px"
								})
							}, 0), setTimeout(() => this.restartPiece(e, t, s, a), 1e3 * t)
						}
					}
				}
				shouldComponentUpdate(e) {
					return e.letItRain && !this.props.letItRain && setTimeout(() => this.renderConfetti(), 0), !1
				}
				componentWillUnmount() {
					this.el = void 0
				}
				render() {
					return r.a.createElement("div", {
						ref: e => this.setEl(e),
						"aria-hidden": "true"
					})
				}
			}
			var u = s("./src/reddit/featureFlags/component.tsx"),
				p = s("./src/reddit/hooks/useSafeState.ts"),
				h = s("./src/reddit/selectors/economics.ts");
			t.a = Object(u.a)("spSpecialMemberships", (function(e) {
				const t = Object(a.useRef)(!0),
					[s, n] = Object(p.a)(!1, t),
					i = Object(o.e)(t => Object(h.x)(t, e.subredditId)),
					c = Object(a.useRef)(i);
				return Object(a.useEffect)(() => () => {
					t.current = !1
				}, []), Object(a.useEffect)(() => {
					c.current === h.a.NotSubscribed && i === h.a.Subscribed && (n(!0), setTimeout(() => {
						n(!1)
					}, 1e4)), c.current = i
				}, [i]), i === h.a.Subscribed ? r.a.createElement(m, {
					letItRain: s
				}) : null
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less": function(e, t, s) {
			e.exports = {
				bling1: "_3bFpAdmzeju5Ql4apA72Mz",
				pulse: "_14AnDN_X0RSUfV9D1Pe9X9",
				bling2: "_-8SkYF0AWUhZMShvTAty8",
				bling3: "_33JifCWcX_crkurifB5pzo",
				container: "_3gI6KjxK9w-BF4adKznqm6",
				crown: "_2UUIJaaZ6FDtWk-CQ_bAJF",
				crownTilt: "m3mBh304aV8eRhpVYDtv",
				crownImg: "_3UjxD8eArSGPOK9ydFdB66",
				crownTiltImg: "_335XoNCIgdnw1NeVMSD3YB",
				defaultIcon: "_1UJ_7ZuaT1wJZzUY6CLslm",
				icon: "_27dkKf4zi-Ny4-FV0XKx0d",
				largeContainer: "_2vtPk3WzODfPV6T2uKOi9x",
				largeBling1: "tQV0dex-2wW9l95VW59ym",
				largeBling2: "_22o1BzEAX778WumBKRfDae",
				largeBling3: "MqH9i4M4OAiAmvS-AdBJx",
				largeCrown: "_30sWCOTB9B8ZfsCDuOoMvQ",
				largeCrownImg: "_1hUveqwJI6eda9EpmMvUJI",
				largeDefaultIcon: "_3_OgvcHTKNX0og_Fw-oHOc",
				largeIcon: "_18B8fdJn2VAl1XHi5AdcVc"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/Bling/index.tsx"),
				i = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				c = s("./src/reddit/icons/svgs/Crown/index.tsx"),
				l = s("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				d = s("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less"),
				m = s.n(d);
			const u = {
				regular: {
					bling1: m.a.bling1,
					bling2: m.a.bling2,
					bling3: m.a.bling3,
					container: m.a.container,
					crown: m.a.crown,
					crownImg: m.a.crownImg,
					defaultIcon: m.a.defaultIcon,
					icon: m.a.icon
				},
				large: {
					bling1: m.a.largeBling1,
					bling2: m.a.largeBling2,
					bling3: m.a.largeBling3,
					container: m.a.largeContainer,
					crown: m.a.largeCrown,
					crownImg: m.a.largeCrownImg,
					defaultIcon: m.a.largeDefaultIcon,
					icon: m.a.largeIcon
				}
			};

			function p(e) {
				const t = e.subreddit && (e.subreddit.communityIcon || e.subreddit.icon.url),
					s = u[e.size || "regular"],
					a = e.subreddit && e.subreddit.primaryColor;
				return r.a.createElement("div", {
					className: Object(o.a)(s.container, e.className)
				}, e.subreddit ? r.a.createElement("img", {
					className: s.crownImg,
					src: l.a
				}) : r.a.createElement(c.a, {
					className: s.crown
				}), r.a.createElement(n.a, {
					className: s.bling1
				}), r.a.createElement(n.a, {
					className: s.bling2
				}), r.a.createElement(n.a, {
					className: s.bling3
				}), t ? r.a.createElement("img", {
					className: s.icon,
					src: t,
					style: {
						backgroundColor: a
					}
				}) : r.a.createElement(i.a, {
					className: s.defaultIcon,
					style: {
						backgroundColor: a
					}
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./src/config.ts"),
				r = s("./node_modules/lodash/flattenDeep.js"),
				o = s.n(r),
				n = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const i = `${a.a.assetPath}/img/memberships/paywall/crown.gif`,
				c = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				l = new Set(o()(Object.keys(n.a).map(e => Object.keys(n.b).map(t => Object.keys(n.c).map(s => `${s}_${e}_${t}_badge`)))))
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
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(i);
			t.a = n.a.wrapped(e => r.a.createElement("div", {
				className: Object(o.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, s) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/selectors/crypto/points.ts"),
				d = s("./src/reddit/components/Governance/Token/index.m.less"),
				m = s.n(d);
			const u = Object(n.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(l.b)(e, t)
			});
			t.a = Object(o.b)(u)((function(e) {
				var t;
				const s = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!s) return null;
				const a = e.grey ? s.greyVector || s.grey : s.filledVector || s.filled,
					o = `${i.a.assetPath}/${a}`;
				if (e.grey && o.endsWith(".svg")) {
					const t = `url(${o}) center/cover`;
					return r.a.createElement("div", {
						className: Object(c.a)(m.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: o
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/async.ts": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(a.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-SubscriptionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e(0), s.e("vendors~reddit-components-Governance-TransactionModals-SubscriptionModal"), s.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), s.e("reddit-components-Governance-TransactionModals-SubscriptionModal")]).then(s.bind(null, "./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return v
			}));
			var a = s("./node_modules/lodash/debounce.js"),
				r = s.n(a),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/usernameAvailable.ts"),
				m = s("./src/reddit/constants/colors.ts"),
				u = s("./src/reddit/controls/FormFields/index.tsx"),
				p = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				b = s("./src/reddit/icons/svgs/Info/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				g = s("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				f = s.n(g),
				x = s("./node_modules/fbt/lib/FbtPublic.js");
			const y = 2,
				v = 20;
			var w;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Error = 1] = "Error", e[e.Invalid = 2] = "Invalid", e[e.Searching = 3] = "Searching", e[e.Valid = 4] = "Valid"
			}(w || (w = {}));
			class E extends n.a.PureComponent {
				constructor(e) {
					super(e), this.handleInputChange = e => {
						const t = e.currentTarget.value;
						t.length > y && this.props.onCheckUsername(t), this.setState({
							username: t
						})
					}, this.usernameValidity = e => {
						if (e && e.length > y) {
							switch (this.props.usernameAvailability[e]) {
								case d.b.Available:
									return w.Invalid;
								case d.b.Error:
									return w.Error;
								case d.b.Unavailable:
									return w.Valid;
								default:
									return w.Searching
							}
						}
						return w.Empty
					}, this.state = {
						username: e.initialRecipient || ""
					}, e.initialRecipient && e.onCheckUsername(e.initialRecipient)
				}
				componentDidMount() {
					this.informParentOfNameChange()
				}
				componentDidUpdate() {
					this.informParentOfNameChange()
				}
				informParentOfNameChange() {
					if (this.props.onChange) {
						const e = this.state.username;
						this.props.onChange(e, this.usernameValidity(e) === w.Valid)
					}
				}
				render() {
					const e = this.usernameValidity(this.state.username);
					return n.a.createElement("div", {
						className: Object(l.a)(f.a.container, this.props.className)
					}, n.a.createElement(u.c, {
						redditStyle: !0,
						className: f.a.input,
						label: x.fbt._("username", null, {
							hk: "2f1L4u"
						}),
						max: v,
						style: {
							borderColor: k(e)
						},
						tabIndex: this.props.tabIndex,
						type: "text",
						value: this.state.username,
						onChange: this.handleInputChange
					}), function(e) {
						switch (e) {
							case w.Error:
								return n.a.createElement(b.a, {
									className: f.a.icon,
									style: {
										fill: m.a.notice
									}
								});
							case w.Invalid:
								return n.a.createElement(_.a, {
									className: f.a.icon,
									style: {
										fill: m.a.warning
									}
								});
							case w.Searching:
								return n.a.createElement(p.a, {
									className: f.a.loadingIcon,
									sizePx: 8
								});
							case w.Valid:
								return n.a.createElement(h.a, {
									className: f.a.icon
								});
							default:
								return null
						}
					}(e), n.a.createElement("div", {
						className: f.a.message,
						style: {
							color: k(e)
						}
					}, function(e) {
						switch (e) {
							case w.Error:
								return x.fbt._("Could not check that username. Are you sure it's correct?", null, {
									hk: "1sNHpI"
								});
							case w.Invalid:
								return x.fbt._("Cannot find this username.", null, {
									hk: "Imvaj"
								});
							default:
								return ""
						}
					}(e)))
				}
			}

			function k(e) {
				switch (e) {
					case w.Error:
						return m.a.notice;
					case w.Invalid:
						return m.a.warning
				}
			}
			const C = Object(c.c)({
				usernameAvailability: e => e.users.nameAvailable
			});
			t.c = Object(i.b)(C, e => ({
				onCheckUsername: r()(t => e(Object(d.f)({
					username: t
				})), 250)
			}))(E)
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_5K5Dse4tVw0RLIpFAoxVY",
				icon: "S4tWlXsmJThb2dkEK0a-e",
				input: "_3TjvTVtT0SSXGCca-2hLNM",
				loadingIcon: "_1096A0iAp25FzCsAQtWIIZ",
				message: "_16fPUwJjUXr_SaDDXYoAuJ"
			}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/reddit/components/OverflowMenu/index.m.less"),
				g = s.n(_);
			const f = l.a.wrapped(u.a, "_Dropdown", g.a),
				x = Object(m.a)(f),
				y = l.a.button("MenuButton", g.a),
				v = l.a.wrapped(p.b, "DropdownRow", g.a),
				w = Object(i.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(b.b)(t)(e)
				}),
				E = Object(n.b)(w, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(d.h)({
						tooltipId: t
					}))
				})),
				k = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = E(e => o.a.createElement(y, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": a.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: k(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : o.a.createElement(h.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), o.a.createElement(x, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				preventFocusScroll: e.preventFocusScroll,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_1JSANMHgGMP6_AEag7vq9O",
				header: "_1DAEUoftIympbgPi2umo-0",
				headerWithTitleLine: "_2d5Y14DbQhaeFQexgn_8Nr",
				titleLine: "_3POjQe5s4pakf6mUEhOGNP",
				searchLine: "_1aZZB23bAFb9VFM7USCLpW",
				title: "_1IzUvkOygcCyb3m9fdOEc2",
				searchBox: "_2cff2GfGaP3QtjxGdlpv_z",
				closeIcon: "_3VwbhXXLp1dcUFkxf8wMsc",
				body: "_2qdvF-IdzElbEEbTBTqXLE",
				results: "_3NbyQMXVxyVAMWNcjMkFvi",
				disabled: "_1q61sXN5YBwD15WuBXBYk5",
				gifResult: "_26ADnJjpUFVQyc9EaxOU1n",
				gifResultImage: "FdCn2CuFBj91lgTaeY2bA",
				loadingSpinner: "_2t2HXTe1t9BdNxOjV-5WUX",
				whiteScrim: "_2pFa7VPAwUqzCAZMKMhkl9"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/lodash/memoize.js"),
				n = s.n(o),
				i = s("./node_modules/lodash/throttle.js"),
				c = s.n(i),
				l = s("./node_modules/react/index.js"),
				d = s.n(l),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = s("./src/config.ts"),
				g = s("./src/lib/addQueryParams/index.ts");
			const f = "pg";

			function x(e) {
				return e.json().then(e => {
					if (200 !== e.meta.status) throw new Error(`${e.meta.status} ${e.meta.msg}`);
					return e
				})
			}
			var y = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/models/Toast/index.ts"),
				w = s("./src/reddit/selectors/economics.ts"),
				E = s("./src/reddit/selectors/telemetry.ts"),
				k = s("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				C = s("./src/reddit/components/RichTextEditor/media/helpers.ts");
			let j;

			function N() {
				j || (j = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var O = s("./node_modules/lodash/debounce.js"),
				P = s.n(O),
				I = s("./src/reddit/icons/svgs/Search/index.tsx"),
				F = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				S = s.n(M);
			const D = 400;
			class A extends d.a.Component {
				constructor() {
					super(...arguments), this.elementRef = null, this.state = {
						query: ""
					}, this.onQueryChange = e => {
						this.setState({
							query: e.target.value
						}, this.dispatchOnChange)
					}, this.dispatchOnChange = P()(() => {
						this.props.onChange(this.state.query)
					}, D), this.focusOnInput = () => {
						this.elementRef && !1 !== this.props.autofocus && this.elementRef.focus()
					}
				}
				componentDidMount() {
					this.elementRef && !1 !== this.props.autofocus && this.elementRef.focus({
						preventScroll: !!this.props.preventScrollOnMount
					})
				}
				render() {
					const {
						isNightMode: e
					} = this.props, {
						query: t
					} = this.state, s = `powered-by-giphy-${e?"dark":"light"}.png`;
					return d.a.createElement("div", {
						className: Object(r.a)(S.a.searchBox, this.props.className)
					}, d.a.createElement("button", {
						className: S.a.searchIconButton,
						onClick: this.focusOnInput
					}, d.a.createElement(I.a, {
						className: S.a.searchIcon
					})), d.a.createElement("input", {
						ref: e => this.elementRef = e,
						type: "text",
						className: S.a.searchInput,
						placeholder: a.fbt._("Search GIFs", null, {
							hk: "3upjCv"
						}),
						value: t,
						onChange: this.onQueryChange
					}), t.length < 25 && d.a.createElement("div", {
						className: S.a.poweredByGiphy,
						style: {
							backgroundImage: `url(${_.a.assetPath}/img/memberships/${s}`
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const T = Object(u.c)({
				isNightMode: F.W
			});
			var z = Object(m.b)(T)(A),
				B = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				L = s.n(B);
			const R = 4,
				Z = n()((function() {
					const e = Object(g.a)("https://api.giphy.com/v1/gifs/trending", {
						api_key: _.a.giphyApiKey,
						rating: f
					});
					return fetch(e).then(x)
				}));
			class G extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						columns: [
							[],
							[]
						],
						columnHeights: [0, 0],
						loading: !0,
						nextOffset: null,
						query: ""
					}, this.mounted = !1, this.onQueryChange = e => {
						this.props.sendEvent(t => ({
							source: "meta",
							action: "change",
							noun: "gif_tooltip_search",
							correlationId: this.props.correlationId,
							subreddit: this.props.subreddit.id ? E.ib(t, this.props.subreddit.id) : void 0,
							post: E.i(t),
							search: {
								query: e
							},
							...E.m(t)
						})), this.setState({
							loading: !1,
							columns: [
								[],
								[]
							],
							columnHeights: [0, 0],
							query: e,
							nextOffset: 0
						}, () => this.loadMoreResults())
					}, this.onScroll = e => this.maybeLoadMoreResults(e.target), this.maybeLoadMoreResults = c()(e => {
						e.scrollHeight - e.scrollTop === e.clientHeight && this.loadMoreResults()
					}, 300), this.onResultClick = e => {
						this.props.sendEvent(e => {
							const t = E.m(e);
							return {
								...t,
								source: "meta",
								action: "select",
								noun: "gif_tooltip_result",
								correlationId: this.props.correlationId,
								subreddit: this.props.subreddit.id ? E.ib(e, this.props.subreddit.id) : void 0,
								post: E.i(e),
								actionInfo: {
									...t.actionInfo,
									reason: this.props.hasGifProduct ? "has-gif-product" : "gif-train"
								}
							}
						});
						const t = this.props.editorState,
							s = Object(C.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), k.a.after);
						this.props.onChange(s), this.props.onClose()
					}
				}
				componentDidMount() {
					this.mounted = !0, !this.state.query && this.state.loading && this.loadTrendingGifs(), N()
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				loadTrendingGifs() {
					Z().then(e => {
						this.state.query || this.addGiphyResults(e)
					})
				}
				async loadMoreResults() {
					const {
						loading: e,
						nextOffset: t,
						query: s
					} = this.state;
					!e && s && null !== t && (await
						function(e) {
							return N(), j.then(t => {
								return !!e.split(" ").concat(e).find(e => -1 !== t.indexOf(e.toLowerCase()))
							}).catch(() => !1)
						}(s) || (this.setState({
							loading: !0
						}), function(e) {
							const t = Object(g.a)("https://api.giphy.com/v1/gifs/search", {
								api_key: _.a.giphyApiKey,
								q: e.query,
								offset: e.offset || 0,
								rating: e.rating || f
							});
							return fetch(t).then(x)
						}({
							query: s,
							offset: t
						}).then(e => {
							this.addGiphyResults(e)
						}).catch(() => {
							this.mounted && (this.props.showErrorToast(a.fbt._("There was an error loading your GIF results. Please try again later.", null, {
								hk: "2OpI4a"
							})), this.setState({
								loading: !1
							}))
						})))
				}
				addGiphyResults(e) {
					if (!this.mounted) return;
					const t = [...this.state.columns],
						s = [...this.state.columnHeights];
					e.data.forEach(e => {
						if ("gif" !== e.type || "r" === e.rating || "pg-13" === e.rating) return;
						const a = this.getSimplifiedResult(e),
							r = s.reduce((e, t, a) => t < s[e] ? a : e, 0);
						t[r].push(a), s[r] += a.fixedWidthHeight + R
					});
					const a = e.pagination.offset + e.pagination.count;
					this.setState({
						columns: t,
						columnHeights: s,
						loading: !1,
						nextOffset: a < e.pagination.total_count ? a : null
					})
				}
				getSimplifiedResult(e) {
					const t = parseInt(e.images.fixed_width.height),
						s = e.images.downsized && e.images.downsized.url.indexOf("giphy-downsized.gif") > 0,
						a = s ? e.images.downsized : e.images.fixed_height;
					return {
						id: e.id,
						url: a.url,
						hasDownsizedImage: s,
						width: parseInt(a.width),
						height: parseInt(a.height),
						fixedWidthHeight: t
					}
				}
				render() {
					const {
						columns: e,
						loading: t
					} = this.state;
					return d.a.createElement("div", {
						className: L.a.tooltip
					}, d.a.createElement("div", {
						className: Object(r.a)(L.a.header, {
							[L.a.headerWithTitleLine]: !!this.props.title
						})
					}, this.props.title && d.a.createElement("div", {
						className: L.a.titleLine
					}, d.a.createElement("span", {
						className: L.a.title
					}, this.props.title), d.a.createElement(y.a, {
						className: L.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					})), d.a.createElement("div", {
						className: L.a.searchLine
					}, d.a.createElement(z, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: L.a.searchBox,
						preventScrollOnMount: this.props.preventSearchBoxScrollOnMount
					}), !this.props.title && d.a.createElement(y.a, {
						className: L.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					}))), d.a.createElement("div", {
						className: L.a.body,
						onScroll: this.onScroll
					}, d.a.createElement("div", {
						className: Object(r.a)(L.a.results, {
							[L.a.disabled]: this.props.disabled
						})
					}, e.map((e, t) => d.a.createElement("div", {
						className: L.a.column,
						key: t
					}, e.map(e => d.a.createElement("button", {
						className: L.a.gifResult,
						key: e.url,
						onClick: () => this.onResultClick(e),
						style: {
							height: `${e.fixedWidthHeight}px`
						},
						disabled: this.props.disabled
					}, d.a.createElement("img", {
						className: L.a.gifResultImage,
						src: e.url
					})))))), t && d.a.createElement("div", {
						className: L.a.loadingSpinner
					}, d.a.createElement(b.a, {
						sizePx: 20,
						center: !0
					})), this.props.children, d.a.createElement("div", {
						className: L.a.whiteScrim
					})))
				}
			}
			const H = Object(u.c)({
				hasGifProduct: (e, {
					subreddit: t
				}) => Object(w.w)(e, t.id)
			});
			t.a = Object(h.c)(Object(m.b)(H, e => ({
				showErrorToast: t => e(Object(p.f)({
					text: t,
					kind: v.b.Error,
					duration: 5e3
				}))
			}))(G))
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less": function(e, t, s) {
			e.exports = {
				searchBox: "_-2nyH4l01LGXG6tNoKG8G",
				searchIconButton: "yQXSQNUp_yRjNBBUQPSFc",
				searchIcon: "_2gnFB-wGJHoP0-cUWBWnU5",
				searchInput: "_3MrGxIAeUWB6Fc14Qw0jb2",
				poweredByGiphy: "_3zbeeNQTcpxZMmdsMopEux"
			}
		},
		"./src/reddit/components/ScrollAnimation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/lodash/clamp.js"),
				r = s.n(a),
				o = s("./node_modules/lodash/throttle.js"),
				n = s.n(o),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				l = s("./src/lib/fastdom/index.ts"),
				d = s("./src/reddit/components/Scroller/getDocumentTop.ts"),
				m = s("./src/reddit/components/Scroller/Simple.tsx");
			const u = (() => {
					const e = new Map,
						t = {
							get: t => e.get(t) || [],
							add: (s, a) => {
								const r = t.get(s);
								return e.set(s, r.concat(a)), t
							},
							remove: (s, a) => {
								const r = t.get(s);
								return e.set(s, r.filter(e => e !== a)), t
							}
						};
					return t
				})(),
				p = (() => {
					const e = e => n()(() => {
							l.a.read(() => {
								const t = (e => Object(m.a)(e) ? Object(d.a)() : e.scrollTop)(e);
								u.get(e).forEach(e => e(t))
							})
						}, 16),
						t = new Map;
					return {
						on: (s, a) => {
							if (!u.get(s).length) {
								const a = e(s);
								t.set(s, a), s.addEventListener("scroll", a)
							}
							u.add(s, a)
						},
						off: (e, s) => {
							if (u.remove(e, s), !u.get(e).length) {
								const s = t.get(e);
								s && e.removeEventListener("scroll", s)
							}
						}
					}
				})();
			class h extends c.a.Component {
				constructor(e) {
					super(e), this.getContainer = () => this.props.containerRef || document.getElementById("overlayScrollContainer") || document, this.updateScrollPosition = e => this.setState(t => {
						const s = this.props.scrollRange[0],
							a = this.props.scrollRange[1],
							o = r()(e, s, a),
							n = Math.min(Math.floor((o - s) / (a - s) * 1e3), 999);
						return {
							...t,
							styles: {
								...t.styles,
								animationDelay: `-${n}s`
							}
						}
					}), this.state = {
						styles: {
							animationDelay: "0s",
							animationDuration: "1000s",
							animationPlayState: "paused",
							backfaceVisibility: "hidden"
						}
					}
				}
				shouldComponentUpdate(e, t) {
					return this.state.styles.animationDelay !== t.styles.animationDelay
				}
				componentDidMount() {
					p.on(this.getContainer(), this.updateScrollPosition)
				}
				componentWillUnmount() {
					p.off(this.getContainer(), this.updateScrollPosition)
				}
				render() {
					return this.props.children(this.state.styles)
				}
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			})), s.d(t, "c", (function() {
				return v
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/uniqueId.js"),
				o = s.n(r),
				n = s("./node_modules/raf/index.js"),
				i = s.n(n),
				c = s("./node_modules/react/index.js"),
				l = s.n(c),
				d = s("./src/lib/classNames/index.ts"),
				m = s("./src/higherOrderComponents/asModal/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				h = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = s.n(h);
			var _ = Object(m.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return l.a.createElement("div", {
						className: b.a.wrapper
					}, l.a.createElement(p.a, {
						className: b.a.titleRow
					}, s), l.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), l.a.createElement(p.a, {
						className: b.a.buttonRow
					}, l.a.createElement(u.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, a.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = s("./src/reddit/controls/ErrorText/index.m.less"),
				f = s.n(g);
			class x extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: s,
						errorModalTitle: r = a.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = a.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: n,
						isModalOpen: i
					} = this.state;
					return l.a.createElement("div", {
						className: Object(d.a)(f.a.wrapper, t)
					}, l.a.createElement("span", {
						className: f.a.description,
						ref: this.spanRef
					}, e), n && l.a.createElement("span", {
						className: f.a.moreText,
						onClick: this.toggleModal
					}, o), i && l.a.createElement(_, {
						onConfirmed: this.toggleModal,
						title: r
					}, s || e))
				}
			}
			const y = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: a,
						fallbackMessage: r,
						messages: o = []
					} = e, n = o.length ? o : r ? [r] : [];
					return n.length ? l.a.createElement("div", {
						className: t
					}, n.map((e, t) => l.a.createElement(x, {
						className: s,
						errorModalTitle: a,
						key: t
					}, e))) : null
				},
				v = e => l.a.createElement(y, {
					fallbackMessage: a.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = x
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "d", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/ErrorText/index.tsx"),
				c = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = s("./src/reddit/controls/FormFields/index.m.less"),
				m = s.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const p = n.a.input("input", m.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: s,
						inputRef: a,
						className: n,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(o.a)(m.a.inputWrapper, n, {
							[m.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, r.a.createElement(p, u({
						"aria-invalid": e.isInvalid,
						innerRef: a
					}, i)), e.label && r.a.createElement("label", {
						className: Object(o.a)(m.a.label, {
							[m.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				_ = e => {
					const {
						label: t,
						children: s,
						inputRef: a,
						isInvalid: n,
						className: i,
						redditStyle: c,
						...l
					} = e, d = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(o.a)(m.a.inputMovingLabelWrapper, i, {
							[m.a.mIsInvalid]: n,
							[m.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, r.a.createElement(p, u({
						innerRef: a
					}, l)), e.label && r.a.createElement("label", {
						className: Object(o.a)(m.a.label, {
							[m.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => r.a.createElement("div", {
					className: Object(o.a)(m.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(c.a, {
					className: m.a.plus
				}));
			var f;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(f || (f = {}));
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: f.ADD
						})
					}, this.updateValue = (e, t) => {
						const s = this.props.values.slice();
						s[t] = e.target.value, this.props.onChange(s)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							s = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: f.REMOVE,
							value: s,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: s,
						placeholder: a,
						errors: o = []
					} = this.props;
					return e.map((e, n) => r.a.createElement(b, {
						inputRef: e => this.setInputRef(e, n),
						isInvalid: !!o[n],
						disabled: t,
						type: "text",
						label: s,
						onChange: e => this.updateValue(e, n),
						placeholder: a,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(n)
					}, r.a.createElement(l.b, {
						className: m.a.trash
					})), !!o[n] && r.a.createElement(i.b, {
						className: m.a.errorText
					}, o[n])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: s,
						maxLength: a,
						addValueText: n,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!a && s.length >= a) && !i;
					return r.a.createElement("div", {
						className: Object(o.a)(m.a.multiInputWrapper, e)
					}, t && c && r.a.createElement(g, {
						onClick: this.addValue,
						text: n
					}), this.renderFields(), !t && c && r.a.createElement(g, {
						onClick: this.addValue,
						text: n
					}))
				}
			}
		},
		"./src/reddit/helpers/economics/setupSubredditPremiumButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./src/lib/currency/centsToDollars/index.ts"),
				r = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				o = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function n({
				apiContext: e,
				config: t,
				elementId: s,
				price: n,
				purchaseFn: i,
				username: c,
				onCancel: l,
				onClientLoad: d,
				onError: m,
				onSubmitting: u,
				onSuccess: p
			}) {
				const h = (e, t) => {
					if (!m) return;
					let s = e.toString ? e.toString() : "";
					s.toLowerCase().includes("object object") && (s = JSON.stringify(e)), m(e, s, t)
				};
				try {
					const [m] = await Promise.all([Object(r.b)(e, {
						username: c
					}), Object(o.b)()]);
					if (!m.ok) return void h(m.error, "/ps/me/braintree-client-tokens");
					const b = await braintree.client.create({
							authorization: m.body.clientToken
						}),
						_ = await new Promise((e, t) => {
							braintree.paypalCheckout.create({
								client: b
							}, (s, a) => s ? t(s) : e(a))
						});
					d && d(), await paypal.Buttons({
						createBillingAgreement: "subscription" === t.type ? () => (u && u(), _.createPayment({
							amount: Object(a.a)(n(), !0),
							billingAgreementDescription: t.billingAgreement,
							currency: "USD",
							flow: "vault"
						})) : void 0,
						createOrder: "purchase" === t.type ? () => (u && u(), _.createPayment({
							amount: Object(a.a)(n(), !0),
							currency: "USD",
							flow: "checkout",
							intent: "capture"
						})) : void 0,
						style: {
							height: 32
						},
						onApprove: async e => {
							_.tokenizePayment(e).then(({
								nonce: e
							}) => i(e)).then(e => {
								e.ok ? p && p() : h(e.error, "/orders")
							})
						},
						onCancel: () => l && l(),
						onError: e => h(e, "paypalError")
					}).render(`#${s}`)
				} catch (b) {
					h(b, "paypalError")
				}
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return i
			}));
			var a = s("./node_modules/bignumber.js/bignumber.js"),
				r = s("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const s = new a.BigNumber(e),
					r = new a.BigNumber(t || 1);
				return s.dividedToIntegerBy(r).toString()
			}

			function n(e, t) {
				return Object(r.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const s = new a.BigNumber(e),
					r = new a.BigNumber(t || 1);
				return s.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./node_modules/react/index.js");

			function r(e, t) {
				const [s, r] = Object(a.useState)(e);
				return [s, e => {
					t.current && r(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, r.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
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
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, r.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/FormattingBold/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1329vPT9OSGZyEvo6Fqss"
			}
		},
		"./src/reddit/icons/svgs/FormattingBold/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/FormattingBold/index.m.less"),
				i = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M12.44,9.72v0a3.07,3.07,0,0,0,2.67-3.22c0-2.84-2.42-3.46-5-3.46H4.51V17H10.4c2.61,0,5.09-1,5.09-3.86C15.49,10.91,14.14,10,12.44,9.72ZM7.54,5.38H9.85c1.65,0,2.31.61,2.31,1.7s-.74,1.68-2.35,1.68H7.54ZM10,14.65H7.54V10.95H9.89c1.7,0,2.59.61,2.59,1.83S11.72,14.65,10,14.65Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2-0pxD6-cM6bWeb73TNNhJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				i = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), r.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_32WqBD1jOzjyQPJdFZ8Rrt"
			}
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/FormattingItalics/index.m.less"),
				i = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("polygon", {
				points: "7.24 17 10.3 17 12.1 6.85 9.05 6.85 7.24 17"
			}), r.a.createElement("polygon", {
				points: "9.7 3 9.28 5.46 12.34 5.46 12.76 3 9.7 3"
			}))
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1cI-FoGkiT7RNcT2BsWaRU"
			}
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/FormattingMonospace/index.m.less"),
				i = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M18.8,9.4l-3-4a1,1,0,1,0-1.6,1.2L16.75,10,14.2,13.4a1,1,0,1,0,1.6,1.2l3-4A1,1,0,0,0,18.8,9.4Z"
			}), r.a.createElement("path", {
				d: "M5.6,5.2a1,1,0,0,0-1.4.2l-3,4a1,1,0,0,0,0,1.2l3,4a1,1,0,0,0,1.6-1.2L3.25,10,5.8,6.6A1,1,0,0,0,5.6,5.2Z"
			}), r.a.createElement("path", {
				d: "M12.24,1A1,1,0,0,0,11,1.76l-4,16A1,1,0,1,0,9,18.24l4-16A1,1,0,0,0,12.24,1Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1fQOXfyxB1SmgMOi7sihQV"
			}
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				i = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"
			}), r.a.createElement("path", {
				d: "M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"
			}), r.a.createElement("path", {
				d: "M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"
			}), r.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), r.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), r.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1KIFUYxvtUxuRVhS-FGTns"
			}
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/FormattingSpoiler/index.m.less"),
				i = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M10,1.5A8.5,8.5,0,1,0,18.5,10,8.51,8.51,0,0,0,10,1.5Zm.71,13-.15.12-.18.1-.18.05a.73.73,0,0,1-.2,0,1,1,0,0,1-.71-.29,1,1,0,0,1-.21-.32A1,1,0,0,1,9,13.83a1,1,0,0,1,.08-.38,1,1,0,0,1,.21-.32,1,1,0,0,1,.91-.28l.18.06.18.09.15.13a1,1,0,0,1,.29.7A1,1,0,0,1,10.71,14.54Zm-.22-3.6a.5.5,0,0,1-1,0l-1-4.67A.5.5,0,0,1,9,5.67h2a.5.5,0,0,1,.49.6Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3C1w798INaJPgFxfklr4an"
			}
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less"),
				i = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M11.86,12a1.36,1.36,0,0,1,.7,1.19c0,1.07-1,1.59-2.42,1.59a4.12,4.12,0,0,1-3.75-2.36L4.08,13.79A6.21,6.21,0,0,0,10,17.2c3.86,0,5.55-2,5.55-4.22a4,4,0,0,0-.12-1Z"
			}), r.a.createElement("path", {
				d: "M17,9H11.61l-1.09-.31c-1.82-.51-2.85-.9-2.85-2,0-.82.71-1.39,2-1.39a4.13,4.13,0,0,1,3.41,2L15.2,5.65A6.23,6.23,0,0,0,9.69,2.8c-3,0-5,1.56-5,4.14A3.31,3.31,0,0,0,5.31,9H3a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1DvEfZosXHE4A0gHsGOjEU"
			}
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/FormattingSuperscript/index.m.less"),
				i = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M6.94,3,2,17H4.83L5.9,13.89h4.75l1,3.11h3.11L9.86,3Zm-.28,8.67L8.29,6.92h0l1.6,4.75Z"
			}), r.a.createElement("path", {
				d: "M16.06,3H14.92L13,8.49h1.11l.42-1.22h1.86l.41,1.22H18ZM14.81,6.4l.64-1.86h0l.63,1.86Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingTable/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_12fGjUaA4qUfdUrX7rnmTK"
			}
		},
		"./src/reddit/icons/svgs/FormattingTable/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/FormattingTable/index.m.less"),
				i = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M17,2H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V3A1,1,0,0,0,17,2ZM4,6H9V9.8H4Zm7,0h5V9.8H11ZM4,11.8H9V16H4ZM11,16V11.8h5V16Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "LfxAZX1Sm9aiJZiizUSZO"
			}
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less"),
				i = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), r.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), r.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}), r.a.createElement("path", {
				d: "M4.88,9.43a1.29,1.29,0,0,0-.13-.26,2.17,2.17,0,0,0-.19-.23,1.55,1.55,0,0,0-2.12,0,2.16,2.16,0,0,0-.19.23,2.2,2.2,0,0,0-.14.26A2.3,2.3,0,0,0,2,9.71,1.32,1.32,0,0,0,2,10a1.5,1.5,0,0,0,1.5,1.5,1.55,1.55,0,0,0,.57-.11A1.52,1.52,0,0,0,5,10a1.32,1.32,0,0,0,0-.29A1.27,1.27,0,0,0,4.88,9.43Z"
			}), r.a.createElement("path", {
				d: "M4.33,14.75l-.26-.14-.28-.08a1.42,1.42,0,0,0-.58,0l-.28.08-.26.14a2.16,2.16,0,0,0-.23.19A1.52,1.52,0,0,0,2,16a1.47,1.47,0,0,0,.44,1.06,1.52,1.52,0,0,0,.49.33,1.53,1.53,0,0,0,1.14,0,1.61,1.61,0,0,0,.49-.33A1.52,1.52,0,0,0,5,16a1.5,1.5,0,0,0-.44-1.06A2.06,2.06,0,0,0,4.33,14.75Z"
			}), r.a.createElement("path", {
				d: "M2.44,2.94A1.52,1.52,0,0,0,2,4a1.47,1.47,0,0,0,.44,1.06,1.59,1.59,0,0,0,.48.33,1.65,1.65,0,0,0,.58.11,1.55,1.55,0,0,0,.57-.11,1.5,1.5,0,0,0,.49-.33,1.5,1.5,0,0,0,0-2.12A1.55,1.55,0,0,0,2.44,2.94Z"
			}))
		},
		"./src/reddit/icons/svgs/Gif/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.78413 14.5651C4.76663 14.6972 6.07763 14.7 8 14.7C9.92237 14.7 11.2334 14.6972 12.2159 14.5651C13.161 14.4381 13.6052 14.2132 13.9092 13.9092C14.2132 13.6052 14.4381 13.161 14.5651 12.2159C14.6972 11.2334 14.7 9.92237 14.7 8C14.7 6.07763 14.6972 4.76663 14.5651 3.78413C14.4381 2.83903 14.2132 2.3948 13.9092 2.09081C13.6052 1.78682 13.161 1.56192 12.2159 1.43485C11.2334 1.30276 9.92237 1.3 8 1.3C6.07763 1.3 4.76663 1.30276 3.78413 1.43485C2.83903 1.56192 2.3948 1.78682 2.09081 2.09081C1.78682 2.3948 1.56192 2.83903 1.43485 3.78413C1.30276 4.76663 1.3 6.07763 1.3 8C1.3 9.92237 1.30276 11.2334 1.43485 12.2159C1.56192 13.161 1.78682 13.6052 2.09081 13.9092C2.3948 14.2132 2.83903 14.4381 3.78413 14.5651ZM1.17157 1.17157C0 2.34315 0 4.22876 0 8C0 11.7712 0 13.6569 1.17157 14.8284C2.34315 16 4.22876 16 8 16C11.7712 16 13.6569 16 14.8284 14.8284C16 13.6569 16 11.7712 16 8C16 4.22876 16 2.34315 14.8284 1.17157C13.6569 0 11.7712 0 8 0C4.22876 0 2.34315 0 1.17157 1.17157Z"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M6.76197 6.36433L6.03894 7.11365C5.7183 6.79814 5.32849 6.7127 5.03299 6.7127C4.31625 6.7127 3.851 7.15966 3.851 8.06015C3.851 8.65172 4.1465 9.38132 5.03299 9.38132C5.26562 9.38132 5.63028 9.33531 5.88177 9.1447V8.55313H4.76893V7.53432H6.91915V9.57851C6.64252 10.1635 5.87548 10.479 5.02671 10.479C3.28515 10.479 2.625 9.26301 2.625 8.06015C2.625 6.8573 3.37946 5.62158 5.03299 5.62158C5.64285 5.62158 6.18355 5.75304 6.76197 6.36433ZM9.02735 10.3541H7.78877V5.75304H9.02735V10.3541ZM11.3179 10.3541H10.0856V5.75304H13.4618V6.84415H11.3179V7.70521H13.3298V8.77004H11.3179V10.3541Z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, r.a.createElement("g", {
				stroke: "none"
			}, r.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		},
		"./src/reddit/icons/svgs/Twinkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 48 48",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M24.75 0L23.25 0L23.25 22.188L7.56083 6.49881L6.50017 7.55947L22.1907 23.25L0 23.25L0 24.75L22.1895 24.75L6.49882 40.4406L7.55948 41.5013L23.25 25.8108L23.25 48H24.75L24.75 25.8093L40.4413 41.5006L41.502 40.4399L25.812 24.75L48 24.75V23.25L25.8108 23.25L41.5006 7.56017L40.4399 6.49951L24.75 22.1895L24.75 0Z"
				}))
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/GifsInComments/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2-l6ribaRonbtSW75Gasf0",
				content: "_1srXRbc3nZWtSzBgnpnL_i",
				contentWithAnimations: "_21xriDWSn5JufF5Ekd1gSc",
				description: "hyrd27wCOJAubXZdIlL32",
				editor: "_3I0PTRXDvcBpNb8jWuUyUG",
				header: "_2C94P12gq8mJVaX0TcU7dL",
				placeholder: "_2d56cUgtXAGXFex1uty3cI",
				rescuerArm: "_1ZEtFYO1X6aWZdPcCe2ttO",
				rescuerArmAnim: "_2-P9VRynrNI62N9mCe1u4d",
				rescuerLegs: "_2HraV_m_H-QwWhbQnD9Cz6",
				rescuerTorso: "_2c2f1ooqNUBpLo1uIWW6tH",
				rescuerTorsoAnim: "vxBZ9o4bMSIgMqp3fseuE",
				title: "_3secE0kPGmuLrOVyxVx1GA",
				try: "_1ADbqtvk_G65FSX32JzrcL",
				woundedBody: "_2Si7gMwaA06iDQ_kRarDqY",
				woundedHead: "_3DDo4KqBgySMOC_Ww-1qdG",
				woundedHeadAnim: "_1N5LrnEH9GrlA-GpoezYhW"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/PremiumEmojis/index.m.less": function(e, t, s) {
			e.exports = {
				allEmojis: "HG4dDjMfFuWUSYTGVXhMU",
				container: "RC2xHmTH_JNAkCq6WHC9h",
				description: "_1ppYpsFus4teqxajezMsMh",
				editor: "CGHRb1ni7ssn9emGnp91k",
				emoji: "_3IhZf0fX3bLjxp2dTgB-Ra",
				grid: "pvztHne0yQOObYrBKLY69",
				gridRow: "_3TnUGDi_f-XCYmowBOJU2s",
				label: "_2FNQpv7k818wfbBh8VQL2-",
				notExpanded: "_4RMAFwSRMekhv09HXXakA",
				showAll: "_2eZueoS--NXBSyBJOIfgcr",
				title: "_1bpLacIFGWJ8JkkGxrnrGT",
				try: "_1f_K9FCPGCYC70UIP2jl2d"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Section/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2LSDJwqkgAC_kQQasHOjPk",
				description: "_2YClVh2zG7h7CsqutaXLDp",
				footer: "_2ZVIecJ7nJjliaBCCnkY-V",
				item: "_2Y0GV0pc08he0bt-mi1gBw",
				itemIcon: "_1jZozMikgXQl3J5ZR9Bowc",
				itemText: "_3m1z1cy4WLpG9x-c7ZKDRg",
				progressBar: "_2Bm3-gyqaRXODIyupyiR9p",
				progressThumb: "_252EINQq4NecY9FXde1_BL",
				thumbAnim: "_28vMO4XWazB3x_FtmRmI16",
				row: "_2TlTmUR7lwqJ8NdZ44nc0s",
				title: "_1jXGFjJzrxDrx2uEQ7DVGF"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/StyleBadges/index.m.less": function(e, t, s) {
			e.exports = {
				badges: "_2EuRRmMUWWyy7ogKc7Uk04",
				smallCollection: "YFanJRu2wCTOQnSbFeFNP",
				badge: "_1StKp1mVYflPieZ-i8t7hm",
				container: "_5ebhVgUCgAnviJ3yM5f5P",
				description: "_3boBqqaewJ06LTZzbndHOP",
				title: "_1qsPjy39LQmn3Zi1AJNHVw",
				userBadge: "_1rAadAD8jFTPpPYGE4O2KV",
				username: "ZHvw3R0mA0Z_POQA7C-fH"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/EmoteTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				close: "_1bD6JH8044LKrlz_zdTgI3",
				container: "_2FOZEUas3_NcjRCr3pGJaS",
				emojis: "_1KMwjC2r2sDXYeRjPLIi10",
				emojisList: "-kODe_q_ldi5_iTr9YTt6",
				emojisTitle: "_18QLrz0EuHzN8WoKNxxNQZ",
				emoji: "_1gTq0B8KGAeQgQblpgpMeo",
				emojiImage: "_1IqEytrE4EZ9iWb4c2mbOy",
				header: "_2jLyIa4O4D4lFe611izptl",
				triangle: "q28fzf8zZ2we3AYEI4sQ9"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/GifTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3LOD-WBOJ9TpEyuc_B0ryn",
				triangle: "_1-MWtksm2FqJxQc5lgUR37"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/index.m.less": function(e, t, s) {
			e.exports = {
				clickable: "_1cIOwGYV7I6vRxR6VmcewC",
				container: "_1x-TPX4TlndlrlqtojxI_H",
				content: "_2jv3EecOzF1wGDs4vJOriM",
				divider: "_3Ex0jTlV_A1JodZqIMsW5p",
				emoteIcon: "pwYYQmeZ8lTJMnSoQo0p1",
				emoteTooltip: "_3akhTTOuCVBcrEqolKvRls",
				gifTooltip: "_3s2CuSDpWDyvPJ6Gt6Nj4G",
				icon: "_2uk7le_A4DDUujQsq5R9p7",
				iconWrapper: "_3feJdn9uZdxTH6Pv28CrZ",
				gifIcon: "_2HXCGD6es_ViR4WvLnbc8j",
				open: "_1Rdtpma2YsPYyx-U9wRqqm",
				reply: "_1X_DcLaCboOSh3oT5QufeS"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/index.m.less": function(e, t, s) {
			e.exports = {
				badges: "_3dLCMB5QHPH0h_IKJlzts6",
				container: "_350NODM4qoI4IWEdgYX72M",
				section: "_31RNbxj_vN1iFg9OmOca54",
				title: "_2cQgklnR9ee890dlKP9sU0"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/FAQ/index.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_3abXs_nHum1aZplxsmmWzb",
				arrowClose: "tHOmoRSJOtYUm0uVRXgwl",
				answer: "_34hVWdyAQOxWX6BtNCcH8T",
				container: "_Vx2QRz8UfHjBWVoj_Se9",
				question: "_1wjtRGwmsLRNQTLlMQzpmb",
				row: "_2YVdCJXV4SjN6MUB5Rx_74",
				section: "_25TwHcxz9B42W4GN7kq74J",
				title: "_3dgNvvjG7x_Kdt683SlDdq"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				copyright: "hHWq9R1kIKuwnmc-c5_nk",
				container: "yoxsTxUwnTIle9hv_5263",
				link: "QZ5kdeF0RpMihWpwGlwcY",
				pianoCrowdBottom: "_60ASzFhqU01fDD4qtUcm_",
				pianoCrowdBottomAnim: "_3yD0KGwT271BI6NStk_RWB",
				pianoCrowdTop: "_2s-R5ZEfjQcJelam9p4iM0",
				pianoCrowdTopAnim: "PdK2oK6NIHwAGk1c7oRdu",
				pianoFlier: "__DEPnJK2lFSwsgi-pMVd",
				pianoFlierAnim: "_1lHRA-kn6n4ztvvD2Eodn0",
				pianoKeyboard: "_3sZ5OukRkPEltd5Z7q_qFa",
				twoCol: "_1lkCEde-Tj5sw9fJ5jrTMQ"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Intro/index.m.less": function(e, t, s) {
			e.exports = {
				container: "jqZKJLgYB2mddEx5Lx_Td",
				description: "_2cJn3yPQq4OXma6qLydghV",
				logo: "qctFKbJQXhfktlUhf0uUW",
				radialHighlight: "_19cOm1T7aKMGtb4_WimwFn",
				radialHighlightOuter: "_1gMg7MP9wN6WZiDvF_maaT",
				rotatesun: "_2-q1z92uhl1L2pD2Vru4Bx",
				radialHighlightInner: "_29R8bdUcgPhwh4s8kxRfVt",
				subscriptionName: "_2Ua7tyUWT9LNuVuwmVCXFr"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/PurchaseButton/index.m.less": function(e, t, s) {
			e.exports = {
				checkout: "_1YeF_-_BCIWSRSq7VcHfwX",
				price: "Xwc8CCPKWIdJKDB52171W",
				recipient: "_2df1mhtxpVh7VAaPhgWqWV",
				shimmer: "_1TKQ0NVUKMLkw2AFMm8njV",
				imageShimmer: "_1TyiUrWpQj0F35lkM5SBLh"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Thanks/index.m.less": function(e, t, s) {
			e.exports = {
				benefits: "_2-ycDF-Psu2x9TTqnG7neu",
				benefit: "_1I-l4KPF_Ub1c46n512i2d",
				check: "_1xHbWZ-qc6mzs2ulMrwErn",
				checkout: "_2xEZp5E9jHfd7ErfC7aOtg",
				container: "_2M8d10IbaaRCGbtCN0famA",
				cta: "_2CzDr42j0wzna45CuYbifD",
				description: "o2NHAMcQ55KS3ogS8RIEs",
				divider: "UIOXdEofaxr4Rtf85Bemh",
				footer: "b-R74uJRDdaA3pe4r1Hmk",
				price: "_1LMyPkWZzWKwuXJks5-JBs",
				recipient: "sWx_snHBtmp85PuUyG3bp",
				shimmer: "_3dcca0wIWlXzcOki_eDLG1",
				imageShimmer: "_1v4WbFTprwAtGFR3bi4c4I",
				title: "_2a81dkpP6gwOOBjHvQFxJ2"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1sFzjkbzwgDZbCfUC2r1wE",
				jumperArmLeft: "_3PiaT85fC3TrQD2HdeOafZ",
				jumperArmLeftAnim: "zKNYt858N0bjlljDDG6NZ",
				jumperArmRight: "_3Lx79UhomruM1Y5BCTzG8Y",
				jumperArmRightAnim: "_1i7rn3wI2iwaDt20BD4cwA",
				jumperBullet: "_3VgQEpiX3x4ms2DPXbU3Vv",
				jumperBulletAnim: "_2SOHU1xXIOc8DnKL4Eh_NA",
				jumperLegLeft: "_2tBrC3MWjEDn2rUr1uHBSU",
				jumperLegLeftAnim: "_33YZcOsjLAJqX7_PWF0XMy",
				jumperLegRight: "_21kcQmC_D0HKtBiZB44xj_",
				jumperLegRightAnim: "_2N7iCqOyBuKxb1Gi5WqG2h",
				jumperTorso: "_1ftz2Us7dNaqGSxapletsm"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/components/ScrollAnimation/index.tsx"),
				i = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				c = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less"),
				l = s.n(c);
			const d = [1700, 2400];

			function m(e) {
				const t = e.scrollRange || d;
				return r.a.createElement("footer", {
					className: Object(o.a)(l.a.container, e.className)
				}, r.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/8fvy7o/these_items_are_cosmetic_only_and_grant_no/",
					target: "_blank"
				}, r.a.createElement(n.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: l.a.jumperBullet,
					src: Object(i.a)(e.subreddit, "jumper_bullet@2x.png"),
					style: t
				})), r.a.createElement(n.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: l.a.jumperArmLeft,
					src: Object(i.a)(e.subreddit, "jumper_arm_left@2x.png"),
					style: t
				})), r.a.createElement(n.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: l.a.jumperLegLeft,
					src: Object(i.a)(e.subreddit, "jumper_leg_left@2x.png"),
					style: t
				})), r.a.createElement(n.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: l.a.jumperLegRight,
					src: Object(i.a)(e.subreddit, "jumper_leg_right@2x.png"),
					style: t
				})), r.a.createElement("img", {
					className: l.a.jumperTorso,
					src: Object(i.a)(e.subreddit, "jumper_torso@2x.png")
				}), r.a.createElement(n.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: l.a.jumperArmRight,
					src: Object(i.a)(e.subreddit, "jumper_arm_right@2x.png"),
					style: t
				}))))
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Header/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2cp0MDUeXSx8jZsMgV8nWB",
				chickenHead: "_281rYD23XhZWOllS1iE5ZM",
				chickenLeftArm: "_3zGGQ5NHOnnPrvPv5CQyzu",
				chickenLeftArmAnim: "vdXFK8wMu43GyLQjSTZ21",
				chickenLeftShoulder: "_3_cSYmJ-k5q6IVWpSet8Bk",
				chickenRightArm: "_1e-Asqvlz83W2VpbMd5I_l",
				chickenRightArmAnim: "NGDCS-gml3Cj1pxPJfcK3",
				chickenTorso: "_1uG_Ba-yNpZZeH4Nkz8wFP",
				tag: "_3iccCG1g-ESmJU7p48I13e",
				title: "_1InVBG-Y3405FaCkoW1WNf"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Tip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3kBZNmkRcsR68Z_GWsAvdv",
				circle: "_1HuZZe6mAGdTK51o8wy0Ty",
				circleShimmer: "_23xoEOLTQbxhEP4sxGL0RG",
				shimmer: "_3gC9nZJNk_cqriNWiwo3sL",
				tooltipWrapper: "_15rembukPlDtuyNZ-Xu8Gd",
				tooltip: "_3gbci1E3nOkYl1keIxZgEc",
				tooltipText: "_3vgPOtiKCF9O8BoKrNf2c_"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_3L2DdYdHLzDAxcOMaqeOf1",
				emoji: "_3yZMeRF4jPT9wh3-g7vxbu",
				footer: "_3kIx2dGZXOuy45W3zPk4gl",
				gif: "_1APrv4hs14TjxWjtyAKZQk",
				img: "_1hq1t1hFoeW4IuNSR4an3l",
				tip1: "_2HqJNg4XmS-YimRbE_c25",
				tip2: "_1PkCmm6eY1yC_5Y3nHl65O",
				tip3: "_3y21jRn1hKKWw-61iRveJg"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/Testimonials/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_3YsbiXvTALeWs8bjNgE6JT",
				container: "_1Oe0GooWFg_aCcljtSE7vI",
				indicators: "iufgL-Gtpn3JEsYP_bS4_",
				indicator: "JWWSGV-zlRjfOKDYtNHYx",
				indicatorSelected: "qvbO8Zi8eNC7Y4LN00QNY",
				testimony: "hSsZVS-lHTYFPdUtAmJMf",
				testimonyOutline: "_11maSTrG2UfudtIJUErrmw",
				testimonyOutlineFlat: "_29ldSSgxb2gTiHhFj0K8n5",
				testimonyText: "qoAm0k1N1jikF7JjntlqB",
				user: "_3BpxvMM8vR85TXu0iDzLGt",
				username: "_2mis8CZQLskwVQZHo1oDfb"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2hnZpsw-lejHnH3Cy9SmME"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./src/config.ts");
			const r = (e, t) => `${a.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/index.m.less": function(e, t, s) {
			e.exports = {
				benefits: "_2dAtohyay5fb_xPAvhaICV",
				container: "_9lKNL6GIsEpAVwKUJl6Z2",
				faq: "_1Bh5DUjq67K1m6oBfOWOKR",
				footer: "m0A3m_EfmfuToWfIg2cOb",
				notOverlay: "_3TrMVaPbr5ZbxAJQFKGMRr",
				overlay: "_1wLDBHVt_LHrdsKWcc9PMN",
				thanks: "_1NPXJMMFRxA9uYU0mUnF78",
				whatDoYouGet: "_35dHVuK72zhOhzVd6XQB6o"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/uuid/v4.js"),
				l = s.n(c);
			var d, m = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/extractQueryParams/index.ts"),
				p = s("./node_modules/react-dom/index.js"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx");
			! function(e) {
				e[e.Visible = 0] = "Visible", e[e.NotVisible = 1] = "NotVisible"
			}(d || (d = {}));
			var b = Object(h.c)(class extends r.a.Component {
					constructor() {
						super(...arguments), this.visibilityState = d.NotVisible, this.enterFired = !1, this.exitFired = !1
					}
					componentDidMount() {
						if (this.props.children) {
							const e = Object(p.findDOMNode)(this);
							e && "string" != typeof e && (this.observer = new IntersectionObserver(e => {
								e.forEach(e => {
									if (e.isIntersecting && this.visibilityState === d.NotVisible) {
										if (this.visibilityState = d.Visible, this.props.fireOnce && this.enterFired) return;
										this.props.onEnter && (this.props.sendEvent(this.props.onEnter), this.enterFired = !0)
									}
									if (!e.isIntersecting && this.visibilityState === d.Visible) {
										if (this.visibilityState = d.NotVisible, this.props.fireOnce && this.exitFired) return;
										this.props.onExit && (this.props.sendEvent(this.props.onExit), this.exitFired = !0)
									}
								})
							}, {
								threshold: .25
							}), this.observer.observe(e))
						}
					}
					componentWillUnmount() {
						this.observer && this.observer.disconnect()
					}
					render() {
						return this.props.children
					}
				}),
				_ = s("./src/reddit/featureFlags/subredditPoints.ts"),
				g = s("./src/reddit/selectors/platform.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				v = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/config.ts"),
				E = s("./src/reddit/models/Badge/index.ts");
			const k = {
					achievementBadges: !1,
					animations: !1,
					canCancel: !1,
					canGift: !1,
					communityThanks: !1,
					emotes: !1,
					gifs: !0,
					loyaltyBadges: !0,
					styleBadges: !0,
					testimonials: !1
				},
				C = {
					achievementBadges: !0,
					animations: !0,
					canCancel: !0,
					canGift: !0,
					communityThanks: !0,
					emotes: !0,
					testimonials: !0
				},
				j = {
					t5_3oeyf: C,
					t5_2j7xd9: C
				};
			var N = function(e) {
					return {
						...k,
						...j[e] || {}
					}
				},
				O = s("./src/reddit/selectors/economics.ts"),
				P = s("./src/reddit/components/RichTextEditor/index.tsx"),
				I = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				F = s("./src/reddit/components/ScrollAnimation/index.tsx"),
				M = s("./src/reddit/helpers/richTextEditor/index.ts"),
				S = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				D = s("./src/reddit/icons/svgs/FormattingBold/index.tsx"),
				A = s("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				T = s("./src/reddit/icons/svgs/FormattingItalics/index.tsx"),
				z = s("./src/reddit/icons/svgs/FormattingMonospace/index.tsx"),
				B = s("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				L = s("./src/reddit/icons/svgs/FormattingSpoiler/index.tsx"),
				R = s("./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx"),
				Z = s("./src/reddit/icons/svgs/FormattingSuperscript/index.tsx"),
				G = s("./src/reddit/icons/svgs/FormattingTable/index.tsx"),
				H = s("./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx"),
				W = s("./src/reddit/icons/svgs/Gif/index.tsx"),
				V = s("./src/reddit/icons/svgs/Smile/index.tsx"),
				U = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/addOverlayEvents.tsx")),
				q = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				X = s("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				Y = s("./src/reddit/icons/svgs/Close/index.tsx"),
				K = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/EmoteTooltip/index.m.less"),
				J = s.n(K);

			function Q(e) {
				const t = e.emojiPack.emotes,
					s = Object.keys(t).map(e => t[e]).sort((e, t) => e.id.localeCompare(t.id));
				return r.a.createElement("div", {
					className: Object(m.a)(J.a.container, e.className),
					style: e.style
				}, r.a.createElement("div", {
					className: J.a.header
				}, v.fbt._("Add r/{communityName} emote", [v.fbt._param("communityName", e.subreddit.name)], {
					hk: "O2Vj2"
				}), r.a.createElement(Y.a, {
					className: J.a.close,
					onClick: e.onClose
				})), r.a.createElement("div", {
					className: J.a.emojis
				}, r.a.createElement("div", {
					className: J.a.emojisTitle
				}, e.emojiPack.title), r.a.createElement("div", {
					className: J.a.emojisList
				}, s.map(t => r.a.createElement("button", {
					className: J.a.emoji,
					onClick: () => e.onSelectEmoji(Object(X.g)(t, e.editorState)),
					key: t.id
				}, r.a.createElement("img", {
					className: J.a.emojiImage,
					src: t.emoji.path
				}))))), r.a.createElement("div", {
					className: J.a.triangle
				}))
			}
			Q.defaultProps = {
				emojiPack: {
					emotes: {
						bush: {
							id: "bush",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/bush.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|bush",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/bush.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						chug: {
							id: "chug",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/chug.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|chug",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/chug.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						clappy: {
							id: "clappy",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/clappy.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|clappy",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/clappy.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						confused: {
							id: "confused",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/confused.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|confused",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/confused.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						cuddle: {
							id: "cuddle",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/cuddle.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|cuddle",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/cuddle.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						dab: {
							id: "dab",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dab.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|dab",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dab.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						dance: {
							id: "dance",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dance.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|dance",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dance.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						mech_destroy: {
							id: "mech_destroy",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|mech_destroy",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						mech_love: {
							id: "mech_love",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_love.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|mech_love",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_love.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						megaphone: {
							id: "megaphone",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/megaphone.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|megaphone",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/megaphone.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						respect: {
							id: "respect",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/respect.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|respect",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/respect.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						soon: {
							id: "soon",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/soon.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|soon",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/soon.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						uNfOrTuNaTeLy: {
							id: "uNfOrTuNaTeLy",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/unfortunately.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|uNfOrTuNaTeLy",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/unfortunately.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						}
					},
					title: "Special Membership"
				}
			};
			var $ = Object(q.a)(Q, [U.a.Click, U.a.Keydown]),
				ee = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx"),
				te = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/GifTooltip/index.m.less"),
				se = s.n(te);
			var ae = Object(q.a)((function(e) {
					return r.a.createElement("div", {
						className: Object(m.a)(se.a.container, e.className),
						style: e.style
					}, r.a.createElement(ee.a, {
						autofocus: !1,
						correlationId: "",
						editorState: e.editorState,
						onChange: e.onSelectGif,
						onClose: e.onClose,
						subreddit: {
							id: e.subreddit.id,
							isProfile: !1,
							name: e.subreddit.name
						}
					}), r.a.createElement("div", {
						className: se.a.triangle
					}))
				}), [U.a.Click, U.a.Keydown]),
				re = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/index.m.less"),
				oe = s.n(re);
			class ne extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						emotesOpen: "emoji" === e.type,
						gifsOpen: "gif" === e.type
					}
				}
				render() {
					const e = "emoji" === this.props.type ? `membership-paywall-emote-${this.props.subreddit.id}` : void 0,
						t = "gif" === this.props.type ? `membership-paywall-gif-${this.props.subreddit.id}` : void 0;
					return r.a.createElement("div", {
						className: Object(m.a)(this.props.className, oe.a.container)
					}, r.a.createElement("div", {
						className: oe.a.content
					}, r.a.createElement("div", {
						className: Object(m.a)(oe.a.iconWrapper, {
							[oe.a.clickable]: "emoji" === this.props.type,
							[oe.a.open]: this.state.emotesOpen
						}),
						id: e,
						onClick: "emoji" === this.props.type ? () => this.setState(e => ({
							emotesOpen: !e.emotesOpen
						})) : void 0
					}, r.a.createElement(V.a, {
						className: Object(m.a)(oe.a.emoteIcon)
					})), r.a.createElement("div", {
						className: Object(m.a)(oe.a.iconWrapper, {
							[oe.a.clickable]: "gif" === this.props.type,
							[oe.a.open]: this.state.gifsOpen
						}),
						id: t,
						onClick: "gif" === this.props.type ? () => this.setState(e => ({
							gifsOpen: !e.gifsOpen
						})) : void 0
					}, r.a.createElement(W.a, {
						className: Object(m.a)(oe.a.gifIcon)
					})), r.a.createElement("div", {
						className: oe.a.divider
					}), r.a.createElement(D.a, {
						className: oe.a.icon
					}), r.a.createElement(T.a, {
						className: oe.a.icon
					}), r.a.createElement(A.a, {
						className: oe.a.icon
					}), r.a.createElement(R.a, {
						className: oe.a.icon
					}), r.a.createElement(z.a, {
						className: oe.a.icon
					}), r.a.createElement(Z.a, {
						className: oe.a.icon
					}), r.a.createElement(L.a, {
						className: oe.a.icon
					}), r.a.createElement("div", {
						className: oe.a.divider
					}), r.a.createElement(G.a, {
						className: oe.a.icon
					}), r.a.createElement(H.a, {
						className: oe.a.icon
					}), r.a.createElement(B.a, {
						className: oe.a.icon
					})), r.a.createElement("button", {
						disabled: !0,
						className: oe.a.reply
					}, v.fbt._("reply", null, {
						hk: "RzR8c"
					})), this.state.emotesOpen && r.a.createElement($, {
						isOpen: !0,
						className: oe.a.emoteTooltip,
						editorState: this.props.editorState,
						subreddit: this.props.subreddit,
						targetPosition: ["left", "top"],
						tooltipId: e,
						tooltipPosition: ["left", "bottom"],
						onClose: () => this.setState({
							emotesOpen: !1
						}),
						onSelectEmoji: e => {
							this.props.onChange(e), this.setState({
								emotesOpen: !1
							})
						}
					}), this.state.gifsOpen && r.a.createElement(ae, {
						isOpen: !0,
						className: oe.a.gifTooltip,
						editorState: this.props.editorState,
						subreddit: this.props.subreddit,
						targetPosition: ["left", "top"],
						tooltipId: t,
						tooltipPosition: ["left", "bottom"],
						onClose: () => this.setState({
							gifsOpen: !1
						}),
						onSelectGif: e => {
							this.props.onChange(e), this.setState({
								gifsOpen: !1
							})
						}
					}))
				}
			}
			var ie = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/GifsInComments/index.m.less"),
				ce = s.n(ie);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const de = [5e3, 5300];
			class me extends r.a.PureComponent {
				render() {
					const {
						className: e,
						emojisExpanded: t,
						subreddit: s
					} = this.props, a = de.map(e => e + (t ? 500 : 0)), o = N(s.id).animations;
					return r.a.createElement("div", {
						className: Object(m.a)(ce.a.container, e)
					}, o && r.a.createElement("header", {
						className: ce.a.header
					}, r.a.createElement("a", {
						href: "https://www.reddit.com/r/FortNiteBR/comments/9067f2/i_have_been_playing_50v50_a_little_differently/",
						target: "_blank"
					}, r.a.createElement("img", {
						className: ce.a.rescuerLegs,
						src: Object(S.a)(s, "rescuer_legs@2x.png")
					}), r.a.createElement(F.a, {
						scrollRange: a
					}, e => r.a.createElement("img", {
						className: ce.a.rescuerArm,
						src: Object(S.a)(s, "rescuer_arm@2x.png"),
						style: e
					})), r.a.createElement(F.a, {
						scrollRange: a
					}, e => r.a.createElement("img", {
						className: ce.a.rescuerTorso,
						src: Object(S.a)(s, "rescuer_torso@2x.png"),
						style: e
					})), r.a.createElement("img", {
						className: ce.a.woundedBody,
						src: Object(S.a)(s, "wounded_body@2x.png")
					}), r.a.createElement(F.a, {
						scrollRange: a
					}, e => r.a.createElement("img", {
						className: ce.a.woundedHead,
						src: Object(S.a)(s, "wounded_head@2x.png"),
						style: e
					})))), r.a.createElement("article", {
						className: Object(m.a)(ce.a.content, {
							[ce.a.contentWithAnimations]: o
						})
					}, r.a.createElement("div", {
						className: ce.a.title
					}, v.fbt._("GIFs in Comments", null, {
						hk: "4iMCW4"
					})), r.a.createElement("div", {
						className: ce.a.description
					}, v.fbt._("Put GIFs directly in your comments.", null, {
						hk: "2yUWCA"
					})), r.a.createElement("div", {
						className: ce.a.description
					}, v.fbt._("Search a vast library to find the perfect one.", null, {
						hk: "1hZivq"
					})), r.a.createElement(P.a, {
						className: ce.a.editor,
						editorType: M.a.Comment,
						placeholderText: v.fbt._("Try adding a GIF", null, {
							hk: "tHtDe"
						}),
						readOnly: !1,
						renderToolbar: e => r.a.createElement(ne, le({
							key: String(t),
							subreddit: s,
							type: "gif"
						}, e)),
						rteState: I.a.createInitial(),
						toolbarPosition: "bottom",
						trackToolbarClick: (...e) => {},
						onChange: (...e) => {},
						onSubmit: (...e) => {}
					}), r.a.createElement("div", {
						className: ce.a.try
					}, v.fbt._("Try it out! Search for a GIF and put it in your comment.", null, {
						hk: "309j9G"
					}))))
				}
			}
			const ue = Object(i.c)({
				cosmeticBadges: (e, {
					subreddit: t
				}) => Object(O.d)(e, t.id)
			});
			var pe = Object(o.b)(ue)(me),
				he = s("./node_modules/lodash/last.js"),
				be = s.n(he),
				_e = s("./node_modules/lodash/shuffle.js"),
				ge = s.n(_e),
				fe = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/PremiumEmojis/index.m.less"),
				xe = s.n(fe);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}

			function ve(e) {
				return e.reduce((e, t) => {
					const s = be()(e);
					return s && s.length < 12 ? s.push(t) : e.push([t]), e
				}, [
					[]
				])
			}
			const we = ge()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/bush.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/chug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/clappy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/cuddle.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dab.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dance.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_love.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/megaphone.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/respect.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/soon.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/unfortunately.gif"]),
				Ee = ge()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_1/competitive.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_2/goat.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_3/noob.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_4/bot.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_5/potato.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_6/casual.gif"]),
				ke = ge()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/confused.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/disappointed.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/grinning.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/laughing.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/like.gif"]),
				Ce = ge()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/angry.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/astonished.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/blush.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/cheeky.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/cry.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/disapproval.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/dizzy_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/downvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/facepalm.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/feels_bad_man.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/feels_good_man.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/flip_out.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/flushed.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/give_upvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/give_upvote_rainbow.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/grimacing.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/grin.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/heart_eyes.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/heart_eyes_rainbow.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/hug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/joy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/kissing_heart.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/money_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/neutral_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/no_mouth.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/poop.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/put_back.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/rage.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/scream.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/shrug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sleep.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/slightly_smiling.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/smile.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/snoo.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sob.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/stuck_out_tongue.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sunglasses.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/surprise.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sweat.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sweat_smile.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/table.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/table_flip.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thinking_face_hmm.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thumbs_down.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thumbs_up.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/trollface.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/upvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/wink.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/yummy.gif"]);
			class je extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return r.a.createElement("div", {
						className: Object(m.a)(e, xe.a.container)
					}, r.a.createElement("header", {
						className: xe.a.title
					}, v.fbt._("Premium Animated Emotes", null, {
						hk: "24mmlb"
					})), r.a.createElement("div", {
						className: xe.a.description
					}, v.fbt._("Say more than text. Bring color and animation to your comments.", null, {
						hk: "2MjrRF"
					})), r.a.createElement(P.a, {
						className: xe.a.editor,
						editorType: M.a.Comment,
						placeholderText: v.fbt._("Try adding an emote", null, {
							hk: "3H8jm8"
						}),
						readOnly: !1,
						renderToolbar: e => r.a.createElement(ne, ye({
							subreddit: t,
							type: "emoji"
						}, e)),
						rteState: I.a.createInitial(),
						toolbarPosition: "bottom",
						trackToolbarClick: (...e) => {},
						onChange: (...e) => {},
						onSubmit: (...e) => {}
					}), r.a.createElement("div", {
						className: xe.a.try
					}, v.fbt._("Try it out! Add an emoji by clicking on it.", null, {
						hk: "2LKfXS"
					})), r.a.createElement("div", {
						className: xe.a.description
					}, v.fbt._("Use more than 100 emotes, including custom art just for r/{communityName}.", [v.fbt._param("communityName", t.name)], {
						hk: "31Kq8t"
					})), r.a.createElement("footer", {
						className: Object(m.a)(xe.a.allEmojis, {
							[xe.a.notExpanded]: !this.state.expanded
						})
					}, r.a.createElement("div", {
						className: xe.a.label
					}, v.fbt._("special members", null, {
						hk: "2W17Tt"
					})), r.a.createElement("div", {
						className: xe.a.grid
					}, ve(we).map((e, t) => r.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => r.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), r.a.createElement("div", {
						className: xe.a.label
					}, v.fbt._("snoomojis", null, {
						hk: "2hsGar"
					})), r.a.createElement("div", {
						className: xe.a.grid
					}, ve(Ce).map((e, t) => r.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => r.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), r.a.createElement("div", {
						className: xe.a.label
					}, v.fbt._("dogesy", null, {
						hk: "2FheYm"
					})), r.a.createElement("div", {
						className: xe.a.grid
					}, ve(ke).map((e, t) => r.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => r.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), r.a.createElement("div", {
						className: xe.a.label
					}, v.fbt._("player style", null, {
						hk: "1XkSYc"
					})), r.a.createElement("div", {
						className: xe.a.grid
					}, ve(Ee).map((e, t) => r.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => r.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), !this.state.expanded && r.a.createElement("div", {
						className: xe.a.gradient
					})), !this.state.expanded && r.a.createElement("button", {
						className: xe.a.showAll,
						onClick: () => {
							this.setState({
								expanded: !0
							}), this.props.onExpand && this.props.onExpand()
						}
					}, v.fbt._("show all", null, {
						hk: "2MP4Ce"
					})))
				}
			}
			var Ne = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Section/index.m.less"),
				Oe = s.n(Ne);

			function Pe(e) {
				const t = e.showProgressBar ? 1 / 0 : 6,
					s = e.items.reduce((e, s) => {
						const a = be()(e);
						return a && a.length < t ? a.push(s) : e.push([s]), e
					}, [
						[]
					]);
				return r.a.createElement("section", {
					className: Object(m.a)(Oe.a.container, e.className)
				}, r.a.createElement("header", {
					className: Oe.a.title
				}, e.title), r.a.createElement("article", {
					className: Oe.a.description
				}, e.description), r.a.createElement("footer", {
					className: Oe.a.footer
				}, e.showProgressBar && r.a.createElement("div", {
					className: Oe.a.progressBar
				}, r.a.createElement("div", {
					className: Oe.a.progressThumb
				})), s.map((e, t) => r.a.createElement("div", {
					className: Oe.a.row,
					key: t
				}, e.map(e => r.a.createElement("div", {
					className: Oe.a.item,
					key: e.text
				}, r.a.createElement("img", {
					className: Oe.a.itemIcon,
					src: e.icon
				}), r.a.createElement("div", {
					className: Oe.a.itemText
				}, e.text)))))))
			}
			var Ie = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/StyleBadges/index.m.less"),
				Fe = s.n(Ie);
			const Me = 1e3,
				Se = 66;
			class De extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						currentBadgeIdx: 0
					}, this.timer = null, this.badges = null
				}
				componentDidUpdate() {
					!this.badges && this.props.styleBadges.length && (this.badges = ge()(this.props.styleBadges).slice(0, Se), this.timer = window.setInterval(() => {
						this.setState(e => ({
							currentBadgeIdx: (e.currentBadgeIdx + 1) % this.badges.length
						}))
					}, Me))
				}
				componentWillUnmount() {
					this.timer && clearInterval(this.timer)
				}
				render() {
					const e = this.badges;
					if (!e) return null;
					const {
						className: t,
						username: s
					} = this.props, a = e[this.state.currentBadgeIdx];
					return r.a.createElement("article", {
						className: Object(m.a)(t, Fe.a.container)
					}, r.a.createElement("header", {
						className: Fe.a.title
					}, v.fbt._("Style Badges", null, {
						hk: "3ioHSL"
					})), r.a.createElement("div", {
						className: Fe.a.description
					}, v.fbt._("Stand out with 4 new badges a month", null, {
						hk: "3Pd0bd"
					})), r.a.createElement("div", {
						className: Fe.a.description
					}, v.fbt._("and a special color for your {username}", [v.fbt._param("username", r.a.createElement("div", {
						className: Fe.a.username,
						style: {
							color: a.color
						}
					}, r.a.createElement("img", {
						className: Fe.a.userBadge,
						src: a.url
					}), s))], {
						hk: "1HJQkU"
					})), r.a.createElement("div", {
						className: Object(m.a)(Fe.a.badges, {
							[Fe.a.smallCollection]: e.length <= 24
						})
					}, e.map(e => r.a.createElement("img", {
						className: Fe.a.badge,
						src: e.url,
						key: e.url
					}))))
				}
			}
			const Ae = Object(i.c)({
				styleBadges: (e, {
					subredditId: t
				}) => {
					return Object(O.d)(e, t).filter(e => !(e.collections && e.collections.custom)).map(e => ({
						url: Object(E.d)(64, 64, e).url2x,
						color: e.extra && e.extra.style && e.extra.style.color || ""
					})).filter(e => e.color)
				},
				username: e => e.user.account && `u/${e.user.account.displayText}` || "u/username"
			});
			var Te = Object(o.b)(Ae)(De),
				ze = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/index.m.less"),
				Be = s.n(ze);
			const Le = [{
				icon: "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/frontpager_60@2x.png",
				text: "Frontpager"
			}, {
				icon: "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/Creator_60@2x.png",
				text: "Creator"
			}, {
				icon: "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/best_commenter_60@2x.png",
				text: "Top Commenter\nof the Post"
			}, {
				icon: "https://meta.redditmedia.com/img/fortnitebr/badges/rainbow_smash_60@2x.png",
				text: "Mod"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/achievement/subreddit_cake_week_120x120.png",
				text: "Subreddit\nCake Day"
			}, {
				icon: `${w.a.assetPath}/img/memberships/paywall/fortnitebr/newbie.png`,
				text: "Newbie"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_1_week_120x120.png",
				text: "Most Karma\n(Week)"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_10_week_120x120.png",
				text: "Top 10 Karma\n(Week)"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_1_month_120x120.png",
				text: "Most Karma\n(Month)"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_10_month_120x120.png",
				text: "Top 10 Karma\n(Month)"
			}];
			class Re extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						emojisExpanded: !1
					}
				}
				render() {
					const {
						achievementBadges: e = Le,
						className: t,
						correlationId: s,
						loyaltyBadges: a,
						meta: o,
						subreddit: n
					} = this.props;
					return r.a.createElement("article", {
						className: Object(m.a)(t, Be.a.container)
					}, r.a.createElement("header", {
						className: Be.a.title
					}, v.fbt._("{member} Benefits", [v.fbt._param("member", o.member)], {
						hk: "xstxK"
					})), N(n.id).loyaltyBadges && a && !!a.length && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_4_loyalty_badges",
							correlationId: s,
							...x.m(e),
							subreddit: x.hb(e)
						})
					}, r.a.createElement(Pe, {
						showProgressBar: !0,
						className: Be.a.section,
						title: v.fbt._("Loyalty Badges", null, {
							hk: "agXF2"
						}),
						description: v.fbt._("Show how long you’ve been supporting the subreddit.", null, {
							hk: "1r4ZKB"
						}),
						items: a
					})), N(n.id).achievementBadges && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_5_achievement_badges",
							correlationId: s,
							...x.m(e),
							subreddit: x.hb(e)
						})
					}, r.a.createElement(Pe, {
						className: Be.a.section,
						title: v.fbt._("Achievement Badges", null, {
							hk: "4asfWh"
						}),
						description: v.fbt._("Get rewarded for reaching subreddit milestones. Available to the community at large, thanks to your support.", null, {
							hk: "3sEG2W"
						}),
						items: e
					})), N(n.id).styleBadges && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_6_style_badges",
							correlationId: s,
							...x.m(e),
							subreddit: x.hb(e)
						})
					}, r.a.createElement(Te, {
						className: Be.a.badges,
						subredditId: n.id
					})), N(n.id).emotes && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_7_premium_emojis",
							correlationId: s,
							...x.m(e),
							subreddit: x.hb(e)
						})
					}, r.a.createElement(je, {
						subreddit: n,
						onExpand: () => this.setState({
							emojisExpanded: !0
						})
					})), N(n.id).gifs && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_8_gifs_in_comments",
							correlationId: s,
							...x.m(e),
							subreddit: x.hb(e)
						})
					}, r.a.createElement(pe, {
						emojisExpanded: this.state.emojisExpanded,
						subreddit: n
					})))
				}
			}
			const Ze = Object(i.c)({
				loyaltyBadges: (e, {
					subreddit: t
				}) => {
					return Object(O.e)(e, t.id).map(e => ({
						icon: Object(E.d)(64, 64, e).url2x,
						text: e.title
					}))
				},
				meta: (e, {
					subreddit: t
				}) => Object(O.r)(e, t.id)
			});
			var Ge = Object(o.b)(Ze)(Re),
				He = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				We = s("./src/reddit/pages/meta/MembershipPaywallPage/FAQ/index.m.less"),
				Ve = s.n(We);
			class Ue extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						open: {}
					}, this.toggleQuestion = e => this.setState(t => ({
						...t,
						open: {
							...t.open,
							[e]: !t.open[e]
						}
					}))
				}
				render() {
					const {
						className: e,
						meta: t,
						subreddit: s
					} = this.props, a = function(e, t) {
						const {
							membershipAlt: s,
							memberAltPlural: a
						} = t, r = [{
							Q: v.fbt._("What is a {membershipAlt}?", [v.fbt._param("membershipAlt", s)], {
								hk: "1rUCQD"
							}),
							A: v.fbt._("The {membershipAlt} is a set of exclusive features available to users who purchase a premium subscription to the subreddit.", [v.fbt._param("membershipAlt", s)], {
								hk: "14RJNQ"
							})
						}, {
							Q: v.fbt._("Are {membershipAlt} features available on mobile apps?", [v.fbt._param("membershipAlt", s)], {
								hk: "3qaJjE"
							}),
							A: v.fbt._("The features are supported on the iOS and Android apps, as well as web.", null, {
								hk: "4FXbda"
							})
						}];
						return e.canGift && r.push({
							Q: v.fbt._("Can I gift a {membershipAlt} to other users?", [v.fbt._param("membershipAlt", s)], {
								hk: "1K5FbF"
							}),
							A: v.fbt._("Yes! If you'd like to gift a {membershipAlt}, send a PM to admin u/jarins.", [v.fbt._param("membershipAlt", s)], {
								hk: "895QP"
							})
						}), e.dedicatedSupport && r.push({
							Q: v.fbt._("What are the {membershipAlt} fees used for?", [v.fbt._param("membershipAlt", s)], {
								hk: "3TLe8q"
							}),
							A: v.fbt._("{memberAltPlural} support a unique project by Reddit to develop new features for this community.", [v.fbt._param("memberAltPlural", a)], {
								hk: "3GXXxI"
							})
						}), e.canCancel && r.push({
							Q: v.fbt._("How do I cancel my {membershipAlt}?", [v.fbt._param("membershipAlt", s)], {
								hk: "1w2Ob7"
							}),
							A: v.fbt._("You can cancel your membership at any time from the User Settings page. Look for the {membershipAlt} tab.", [v.fbt._param("membershipAlt", s)], {
								hk: "2HGeHZ"
							})
						}), r
					}(N(s.id), t);
					return r.a.createElement("div", {
						className: Object(m.a)(e, Ve.a.container)
					}, r.a.createElement("div", {
						className: Ve.a.title
					}, v.fbt._("{membershipAlt} FAQ", [v.fbt._param("membershipAlt", t.membershipAlt)], {
						hk: "4tP0lw"
					})), a.map(({
						Q: e,
						A: t
					}) => r.a.createElement("div", {
						className: Ve.a.section,
						key: e,
						onClick: () => this.toggleQuestion(e)
					}, r.a.createElement("div", {
						className: Ve.a.row
					}, r.a.createElement("div", {
						className: Ve.a.question
					}, e), r.a.createElement(He.a, {
						className: Object(m.a)(Ve.a.arrow, {
							[Ve.a.arrowClose]: !this.state.open[e]
						})
					})), !!this.state.open[e] && r.a.createElement("div", {
						className: Ve.a.answer
					}, t))))
				}
			}
			const qe = Object(i.c)({
				meta: (e, {
					subreddit: t
				}) => Object(O.r)(e, t.id)
			});
			var Xe = Object(o.b)(qe)(Ue),
				Ye = s("./src/reddit/pages/meta/MembershipPaywallPage/Footer/index.m.less"),
				Ke = s.n(Ye);
			const Je = [7900, 8240];

			function Qe(e) {
				return r.a.createElement("footer", {
					className: Object(m.a)(Ke.a.container, e.className)
				}, r.a.createElement("div", {
					className: Ke.a.twoCol
				}, r.a.createElement("div", {
					className: Ke.a.copyright
				}, v.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1hv6BJ"
				}))), N(e.subreddit.id).animations && r.a.createElement("a", {
					className: Ke.a.link,
					href: "https://www.reddit.com/r/FortNiteBR/comments/a8mhn8/24_players_plays_all_i_want_for_christmas_is_you/",
					target: "_blank"
				}, r.a.createElement("img", {
					className: Ke.a.pianoKeyboard,
					src: Object(S.a)(e.subreddit, "piano_keyboard@2x.png")
				}), r.a.createElement(F.a, {
					scrollRange: Je
				}, t => r.a.createElement("img", {
					className: Ke.a.pianoCrowdBottom,
					src: Object(S.a)(e.subreddit, "piano_crowd_bottom@2x.png"),
					style: t
				})), r.a.createElement(F.a, {
					scrollRange: Je
				}, t => r.a.createElement("img", {
					className: Ke.a.pianoCrowdTop,
					src: Object(S.a)(e.subreddit, "piano_crowd_top@2x.png"),
					style: t
				})), r.a.createElement(F.a, {
					scrollRange: Je
				}, t => r.a.createElement("img", {
					className: Ke.a.pianoFlier,
					src: Object(S.a)(e.subreddit, "piano_flier@2x.png"),
					style: t
				}))))
			}
			var $e = s("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				et = s("./src/reddit/icons/svgs/Twinkle/index.tsx"),
				tt = s("./src/reddit/actions/login.ts"),
				st = s("./src/reddit/components/Economics/Price/index.tsx"),
				at = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx"),
				rt = s("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				ot = s("./src/higherOrderComponents/asModal/index.tsx"),
				nt = s("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/async.ts"),
				it = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ct = s("./src/reddit/featureFlags/component.tsx"),
				lt = s("./src/reddit/selectors/crypto/points.ts"),
				dt = s("./src/reddit/selectors/gov.ts"),
				mt = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Cart/index.m.less"),
				ut = s.n(mt);
			const {
				fbt: pt
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function ht(e) {
				const {
					className: t,
					description: s,
					dollarPrice: a,
					monthly: o,
					subredditId: n,
					tokenPrice: i
				} = e;
				return r.a.createElement("article", {
					className: Object(m.a)(ut.a.container, t)
				}, r.a.createElement("div", {
					className: ut.a.description
				}, s), r.a.createElement("div", {
					className: ut.a.rhs
				}, r.a.createElement("div", {
					className: ut.a.price
				}, r.a.createElement(st.a, {
					dollarPrice: a,
					tokenPrice: i,
					monthly: o,
					subredditId: n
				})), o && r.a.createElement("div", {
					className: ut.a.monthlyText
				}, pt._("Paid monthly, cancel anytime", null, {
					hk: "1hG3H3"
				}))))
			}
			var bt = s("./src/lib/currency/currencies.ts"),
				_t = s("./src/lib/localizeCurrency/index.ts"),
				gt = s("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				ft = s("./src/reddit/hooks/useLocale.ts"),
				xt = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Footer/index.m.less"),
				yt = s.n(xt);
			const vt = () => v.fbt._("{=Reddit User Agreement}, {=Privacy Policy} and {Previews Terms of Service}.", [v.fbt._param("=Reddit User Agreement", r.a.createElement("a", {
				className: yt.a.link,
				href: "https://www.redditinc.com/policies/user-agreement",
				target: "_blank",
				rel: "noopener noreferrer"
			}, v.fbt._("Reddit User Agreement", null, {
				hk: "4yY7NE"
			}))), v.fbt._param("=Privacy Policy", r.a.createElement("a", {
				className: yt.a.link,
				href: "https://www.redditinc.com/policies/privacy-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, v.fbt._("Privacy Policy", null, {
				hk: "2clnUk"
			}))), v.fbt._param("Previews Terms of Service", r.a.createElement(gt.a, {
				className: yt.a.linkLast
			}))], {
				hk: "3Jmx1D"
			});
			const wt = Object(i.c)({
				meta: (e, {
					subredditId: t
				}) => Object(O.r)(e, t)
			});
			var Et = Object(o.b)(wt)((function(e) {
					const t = Object(ft.a)();
					if (e.purchaseType !== ts.Subscription) return r.a.createElement("footer", {
						className: Object(m.a)(e.className, yt.a.container)
					}, v.fbt._("By purchasing, you agree to", null, {
						hk: "37Xh4k"
					}), " ", r.a.createElement(vt, null));
					const s = e.dollarPrice && Object(_t.b)(e.dollarPrice, {
							locale: t,
							forceDecimals: !0
						}),
						a = e.tokenPrice && Object(_t.b)(e.tokenPrice, {
							locale: t,
							type: bt.b.Crypto,
							displayConversion: e.tokenDisplayConversion
						}),
						o = s && a ? v.fbt._("{dollarPrice} or {tokenPrice}", [v.fbt._param("dollarPrice", s), v.fbt._param("tokenPrice", a)], {
							hk: "1uXVRd"
						}) : s || (a || "");
					return r.a.createElement("footer", {
						className: Object(m.a)(e.className, yt.a.container)
					}, v.fbt._("{membershipName} auto-renews for {price} a month. Cancel anytime in the Special Memberships section of your User Settings. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds. By continuing, you agree to", [v.fbt._param("membershipName", e.meta.membershipAlt), v.fbt._param("price", o)], {
						hk: "AMyMx"
					}), " ", r.a.createElement(vt, null))
				})),
				kt = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Header/index.m.less"),
				Ct = s.n(kt);
			const {
				fbt: jt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const Nt = Object(i.c)({
				meta: (e, {
					subredditId: t
				}) => Object(O.r)(e, t)
			});
			var Ot = Object(o.b)(Nt)((function(e) {
					const {
						className: t,
						meta: s,
						purchaseType: a
					} = e;
					return r.a.createElement("header", {
						className: Object(m.a)(t, Ct.a.container)
					}, r.a.createElement("div", {
						className: Ct.a.text
					}, a === ts.Badge && jt._("Buy a badge", null, {
						hk: "1X4jZc"
					}), a === ts.Subscription && jt._("Buy {membership-name}", [jt._param("membership-name", s.membershipAlt)], {
						hk: "ObrN"
					})), r.a.createElement(Y.a, {
						className: Ct.a.close,
						onClick: e.onClose
					}))
				})),
				Pt = s("./node_modules/bignumber.js/bignumber.js"),
				It = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx"),
				Ft = s("./src/reddit/controls/Button/index.tsx"),
				Mt = s("./node_modules/react-router-redux/es/index.js"),
				St = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Dt = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				At = s("./src/reddit/actions/governance/errorToast.ts"),
				Tt = s("./src/reddit/actions/shortcuts/close.ts"),
				zt = s("./src/reddit/contexts/ApiContext.tsx"),
				Bt = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				Lt = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				Rt = s("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				Zt = s("./src/reddit/models/Badge/managementPage.ts"),
				Gt = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/PurchaseButton/index.m.less"),
				Ht = s.n(Gt);
			const Wt = "subreddit-premium-purchase-braintree",
				Vt = (e, t, s) => v.fbt._("{communityName} {membershipAlt}. {price}/month, automatically renews on a monthly basis. Cancel anytime. There are no refunds for partial months.", [v.fbt._param("communityName", e.displayText), v.fbt._param("membershipAlt", s.membershipAlt), v.fbt._param("price", Object(_t.b)(t, {
					forceDecimals: !0
				}))], {
					hk: "3yzefL"
				});
			class Ut extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						loading: !0,
						submitting: !1
					}, this._isMounted = !1, this.alreadyPurchased = () => this.props.userIsPremiumSubscriber === O.a.Subscribed, this.getId = () => Wt + (this.props.uniqueId || "")
				}
				componentDidMount() {
					if (this._isMounted = !0, !this.alreadyPurchased()) {
						const e = this.props.membershipProducts.find(e => "usd" === e.currency);
						Object(Rt.a)({
							apiContext: this.props.apiContext(),
							config: {
								billingAgreement: Vt(this.props.subreddit, this.props.price, this.props.meta),
								type: "subscription"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: t => Object(Lt.d)(this.props.apiContext(), {
								nonce: t,
								price: this.props.price,
								productId: e && e.id || "membership",
								subredditId: this.props.subreddit.id,
								trial: this.props.trial,
								username: this.props.username
							}),
							username: this.props.username,
							onCancel: () => this.setState({
								submitting: !1
							}),
							onClientLoad: () => {
								this._isMounted && this.setState({
									loading: !1
								})
							},
							onError: (e, t, s) => {
								this._isMounted && (this.setState({
									submitting: !1
								}), this.props.onError(e), this.props.sendEvent(e => {
									return {
										source: "meta",
										action: "fail",
										noun: "subscription_paypal_purchase",
										...x.m(e),
										actionInfo: {
											reason: t,
											paneName: s
										},
										correlationId: this.props.correlationId,
										subreddit: x.hb(e)
									}
								}))
							},
							onSubmitting: () => {
								this.setState({
									submitting: !0
								}), this.props.sendEvent(e => ({
									source: "meta",
									action: "click",
									noun: "subscription_paypal_purchase",
									correlationId: this.props.correlationId,
									...x.m(e),
									subreddit: x.hb(e)
								}))
							},
							onSuccess: () => this.props.onPaymentSuccessful(this.props.isLoggedIn)
						})
					}
				}
				componentWillUnmount() {
					this._isMounted = !1
				}
				render() {
					return r.a.createElement("div", {
						className: Object(m.a)(this.props.className, Ht.a.container)
					}, this.alreadyPurchased() ? r.a.createElement("div", {
						className: Ht.a.alreadyPurchased
					}, v.fbt._("Already Purchased", null, {
						hk: "2h3Eug"
					})) : r.a.createElement(a.Fragment, null, r.a.createElement("div", {
						className: Object(m.a)(Ht.a.button, {
							[Ht.a.buttonWithoutCards]: !this.props.showCards,
							[Ht.a.loading]: this.state.loading,
							[Ht.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && r.a.createElement(Bt.a, {
						className: Ht.a.loadingIcon,
						sizePx: 24
					})))
				}
			}
			const qt = Object(i.c)({
				isLoggedIn: y.J,
				membershipProducts: (e, {
					subreddit: t
				}) => Object(O.k)(e, t.id),
				meta: (e, {
					subreddit: t
				}) => Object(O.r)(e, t.id),
				userIsPremiumSubscriber: (e, {
					subreddit: t
				}) => Object(O.x)(e, t.id)
			});
			var Xt = Object(zt.b)(Object(o.b)(qt, (e, {
					subreddit: t,
					onComplete: s
				}) => ({
					onError: t => Object(At.a)(e, t),
					onPaymentSuccessful: a => {
						a ? e(Object(Dt.g)(t.id, !0)).then(() => e(Object(Tt.a)(() => {}))).then(() => s && s()).then(() => e(Object(St.c)({
							subredditId: t.id,
							initialView: Zt.c.MyBadges
						}))) : e(Object(Mt.b)(t.url))
					}
				}))(Object(h.c)(Ut))),
				Yt = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/index.m.less"),
				Kt = s.n(Yt);
			const {
				fbt: Jt
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Qt(e) {
				return r.a.createElement("div", {
					className: Kt.a.dollarPurchase
				}, e.target.type === ts.Badge && e.target.product.price && r.a.createElement(It.a, {
					correlationId: e.correlationId,
					key: "checkout-purchase-button",
					price: e.target.product.price,
					productId: e.target.product.id,
					subreddit: e.subreddit,
					onPaymentSuccessful: e.onPaymentComplete
				}), e.target.type === ts.Subscription && e.target.dollarPrice && r.a.createElement(Xt, {
					showCards: !0,
					correlationId: e.correlationId,
					key: "checkout-purchase-button",
					price: e.target.dollarPrice,
					subreddit: e.subreddit,
					trial: e.trial,
					uniqueId: "checkout",
					username: e.username,
					onComplete: e.onPaymentComplete
				}))
			}

			function $t(e) {
				return !e.wallet || new Pt.BigNumber(e.wallet.amount).isLessThan(new Pt.BigNumber(e.tokenPrice)) ? r.a.createElement(Ft.l, {
					className: Kt.a.notEnoughTokens,
					disabled: !0
				}, Jt._("Not enough {token-name}", [Jt._param("token-name", e.tokenName)], {
					hk: "4urJTo"
				})) : r.a.createElement("div", {
					className: Kt.a.tokenPurchase
				}, r.a.createElement(Ft.l, {
					onClick: e.onPayWithTokens,
					className: Kt.a.tokenPurchaseButton
				}, Jt._("Pay with {token-name}", [Jt._param("token-name", e.tokenName)], {
					hk: "7b9oh"
				})), r.a.createElement("div", {
					className: Kt.a.requiresMobile
				}, Jt._("Requires Reddit Vault on mobile", null, {
					hk: "4oRRlp"
				})))
			}

			function es(e) {
				const {
					dollarPrice: t,
					monthly: s,
					subreddit: a,
					tokenPrice: o
				} = e;
				return r.a.createElement("div", {
					className: e.className
				}, t && o && r.a.createElement("div", {
					className: Kt.a.selectPaymentBox
				}, r.a.createElement("div", {
					className: Kt.a.selectPaymentTitleBox
				}, r.a.createElement("span", {
					className: Kt.a.selectPaymentTitle
				}, Jt._("Select Payment Method", null, {
					hk: "15rwcx"
				}))), r.a.createElement("div", {
					className: Kt.a.paymentContainer
				}, r.a.createElement("div", {
					className: Kt.a.paymentAmount
				}, r.a.createElement(st.a, {
					tokenPrice: o,
					monthly: s,
					subredditId: a.id,
					hideTokenName: !0
				})), r.a.createElement($t, e)), r.a.createElement("div", {
					className: Kt.a.paymentContainer
				}, r.a.createElement("div", {
					className: Kt.a.paymentAmount
				}, r.a.createElement(st.a, {
					dollarPrice: t,
					monthly: s,
					subredditId: a.id,
					hideTokenName: !0
				})), r.a.createElement(Qt, e))), t && !o && r.a.createElement(Qt, e), o && !t && r.a.createElement($t, e))
			}
			var ts, ss = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/index.m.less"),
				as = s.n(ss);
			! function(e) {
				e[e.Badge = 0] = "Badge", e[e.Subscription = 1] = "Subscription"
			}(ts || (ts = {}));
			class rs extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showTokenTransactionModal: !1
					}
				}
				componentDidMount() {
					this.props.viewEvent && this.props.sendEvent(this.props.viewEvent)
				}
				render() {
					const {
						correlationId: e,
						target: t,
						subreddit: s,
						username: a,
						onClose: o,
						onPaymentComplete: n,
						pointsDetails: i,
						wallet: c
					} = this.props;
					if (!s) return null;
					const l = t.type === ts.Badge ? t.product.price : t.dollarPrice,
						d = t.type === ts.Badge ? void 0 : t.tokenPrice;
					if (this.state.showTokenTransactionModal && d) return r.a.createElement(nt.a, {
						correlationId: e,
						onClose: o,
						onPaymentComplete: n,
						price: d,
						subredditId: s.id
					});
					const m = t.type === ts.Subscription,
						u = (null == i ? void 0 : i.name) || "";
					return r.a.createElement("div", {
						className: as.a.container
					}, r.a.createElement(Ot, {
						purchaseType: t.type,
						subredditId: s.id,
						onClose: o
					}), r.a.createElement("div", {
						className: as.a.content
					}, r.a.createElement(ht, {
						className: as.a.cart,
						description: t.description(s),
						dollarPrice: l,
						monthly: m,
						subredditId: s.id,
						tokenPrice: d
					}), r.a.createElement(es, {
						className: as.a.payment,
						correlationId: e,
						dollarPrice: l,
						monthly: m,
						onPayWithTokens: () => this.setState({
							showTokenTransactionModal: !0
						}),
						onPaymentComplete: n,
						subreddit: s,
						target: t,
						tokenName: u,
						tokenPrice: d,
						trial: t.type === ts.Subscription && t.trial,
						username: a,
						wallet: c
					}), r.a.createElement(Et, {
						className: as.a.footer,
						dollarPrice: l,
						purchaseType: t.type,
						subredditId: s.id,
						tokenDisplayConversion: null == i ? void 0 : i.displayConversion,
						tokenName: u,
						tokenPrice: d
					})))
				}
			}
			const os = Object(i.c)({
					pointsDetails: (e, t) => Object(lt.b)(e, t.subredditId),
					subreddit: (e, t) => t.subreddit,
					wallet: dt.d
				}),
				ns = Object(o.b)((e, t) => {
					const s = Object(it.r)(e, t);
					return os(e, {
						...t,
						subreddit: s,
						subredditId: (null == s ? void 0 : s.id) || void 0
					})
				}),
				is = Object(it.u)(),
				cs = Object(h.c)(rs);
			var ls = Object(ct.a)("spSpecialMemberships", Object(ot.a)(is(ns(cs)))),
				ds = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Products/index.m.less"),
				ms = s.n(ds);

			function us() {
				return (us = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}

			function ps(e) {
				const {
					dollarPrice: t,
					tokenPrice: s,
					trial: o,
					...n
				} = e;
				return r.a.createElement(ls, us({}, n, {
					target: {
						dollarPrice: t,
						tokenPrice: s,
						trial: o,
						description(e) {
							const t = e && e.displayText || "",
								s = v.fbt._("{communityName} Subreddit Supporter", [v.fbt._param("communityName", t)], {
									hk: "3VL2SS"
								});
							return r.a.createElement(a.Fragment, null, r.a.createElement("img", {
								className: ms.a.crown,
								src: rt.a
							}), s)
						},
						type: ts.Subscription
					},
					viewEvent: t => ({
						source: "meta",
						action: "view",
						noun: "subscription_checkout_modal",
						correlationId: e.correlationId,
						...x.m(t),
						subreddit: x.hb(t)
					}),
					onPaymentComplete: e.onClose
				}))
			}
			var hs = s("./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx"),
				bs = s("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				_s = s("./src/reddit/featureFlags/index.ts"),
				gs = s("./src/reddit/pages/meta/MembershipPaywallPage/PurchaseButton/index.m.less"),
				fs = s.n(gs);
			const {
				fbt: xs
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class ys extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						checkoutOpen: !1,
						username: void 0,
						usernameIsValid: !1
					}, this.handleUserNameChange = (e, t) => {
						this.setState({
							username: e,
							usernameIsValid: t
						})
					}, this.openCheckout = () => this.setState({
						checkoutOpen: !0
					}), this.closeCheckout = () => this.setState({
						checkoutOpen: !1
					})
				}
				componentDidUpdate(e) {
					this.props.checkoutOnLogin && !e.userIsLoggedIn && this.props.userIsLoggedIn && this.setState({
						checkoutOpen: !0
					})
				}
				render() {
					const {
						correlationId: e,
						customCrypto: t,
						meta: s,
						subredditId: a,
						userIsLoggedIn: o
					} = this.props, {
						canGift: n
					} = N(a), i = s.prices, c = i.usd, l = i.points, d = this.props.userIsPremiumSubscriber === O.a.Subscribed;
					return r.a.createElement(r.a.Fragment, null, !o && n && r.a.createElement(bs.c, {
						className: fs.a.recipient,
						onChange: this.handleUserNameChange
					}), r.a.createElement("button", {
						className: fs.a.checkout,
						disabled: d || n && !o && !this.state.usernameIsValid,
						onClick: o ? this.openCheckout : this.props.openLoginModal
					}, r.a.createElement("div", {
						className: fs.a.shimmer
					}), d ? xs._("Already a {supporter-term}", [xs._param("supporter-term", s.member)], {
						hk: "30uNOq"
					}) : xs._("Become a {supporter-term}", [xs._param("supporter-term", s.member)], {
						hk: "3TcAfC"
					})), r.a.createElement(st.a, {
						className: fs.a.price,
						dollarPrice: c,
						tokenPrice: l,
						monthly: !0,
						subredditId: a
					}), this.state.checkoutOpen ? t ? r.a.createElement(at.a, {
						withOverlay: !0,
						correlationId: e,
						subredditId: a,
						onClose: this.closeCheckout
					}) : r.a.createElement(ps, {
						withOverlay: !0,
						correlationId: e,
						dollarPrice: c,
						tokenPrice: l,
						username: !o && this.state.usernameIsValid ? this.state.username : void 0,
						onClose: this.closeCheckout
					}) : null, r.a.createElement(hs.a, {
						subredditId: a
					}))
				}
			}
			const vs = Object(i.c)({
				meta: (e, {
					subredditId: t
				}) => Object(O.r)(e, t),
				customCrypto: _s.d.spCustomCrypto,
				userIsLoggedIn: e => !!e.user.account,
				userIsPremiumSubscriber: (e, {
					subredditId: t
				}) => Object(O.x)(e, t)
			});
			var ws = Object(o.b)(vs, e => ({
					openLoginModal: () => e(Object(tt.i)())
				}))(ys),
				Es = s("./src/reddit/pages/meta/MembershipPaywallPage/Intro/index.m.less"),
				ks = s.n(Es);
			const Cs = Object(i.c)({
				meta: (e, {
					subreddit: t
				}) => Object(O.r)(e, t.id)
			});
			var js, Ns, Os = Object(o.b)(Cs)((function(e) {
					const {
						className: t,
						correlationId: s,
						meta: a,
						subreddit: o
					} = e;
					return r.a.createElement("div", {
						className: Object(m.a)(t, ks.a.container)
					}, r.a.createElement("div", {
						className: ks.a.logo
					}, r.a.createElement(et.a, {
						className: ks.a.radialHighlightInner
					}), r.a.createElement(et.a, {
						className: ks.a.radialHighlightOuter
					}), r.a.createElement($e.a, {
						size: "large",
						subreddit: o
					})), r.a.createElement("header", {
						className: ks.a.subscriptionName
					}, "r/", o.name, " ", a.memberAltPlural), r.a.createElement("article", {
						className: ks.a.description
					}, v.fbt._("Support r/{communityName}. Get exclusive features in the community.", [v.fbt._param("communityName", o.name)], {
						hk: "13ofnK"
					})), r.a.createElement(ws, {
						checkoutOnLogin: !0,
						correlationId: s,
						subredditId: o.id
					}))
				})),
				Ps = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				Is = s("./node_modules/react-motion/lib/react-motion.js"),
				Fs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/Testimonials/index.m.less"),
				Ms = s.n(Fs);
			! function(e) {
				e[e.Right = 110] = "Right", e[e.Center = 50] = "Center", e[e.Left = -110] = "Left"
			}(js || (js = {})),
			function(e) {
				e[e.Right = 0] = "Right", e[e.Center = -310] = "Center", e[e.Left = -620] = "Left"
			}(Ns || (Ns = {}));
			const Ss = ge()([{
					badges: [{
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/jumping_crystal_40.png"
							}
						}
					}, {
						extra: {
							style: {
								color: "rgb(168, 132, 100)"
							}
						},
						media: {
							0: {
								"40x40": "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/custom/brother_bear_40x40.png"
							}
						}
					}],
					text: "This subreddit gives back to its community through giveaways and to give my share to make it happen is amazing. The badges and emotes that come with it are just the cherry on top.",
					username: "thebrotherbear"
				}, {
					badges: [{
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/jumping_crystal_40.png"
							}
						}
					}, {
						extra: {},
						media: {
							0: {
								"40x40": "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_1_week_40x40.png"
							}
						}
					}],
					text: "It feels nice to be able to give back to the community that I enjoy",
					username: "Ikcatcher"
				}, {
					badges: [{
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/Creator_40.png"
							}
						}
					}, {
						extra: {
							style: {
								color: "rgb(110, 108, 148)"
							}
						},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/21_rocket_40.png"
							}
						}
					}],
					text: "I love how r/FortNiteBR is such a positive, creative and supportive community!",
					username: "enzait"
				}, {
					badges: [{
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/Creator_40.png"
							}
						}
					}, {
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/frontpager_60.png"
							}
						}
					}, {
						extra: {
							style: {
								color: "rgb(187, 100, 204)"
							}
						},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/14_dancefloor_40.png"
							}
						}
					}],
					text: "You'll always find the best of the best content on here, and you know it'll be from the original creator.",
					username: "Jachael123_"
				}]).slice(0, 3),
				Ds = 1e4;
			class As extends r.a.Component {
				constructor() {
					super(...arguments), this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.props.testimonies.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, Ds)
					}
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, Ds)
				}
				componentWillUnmount() {
					this.timeoutRef && clearInterval(this.timeoutRef)
				}
				render() {
					const {
						className: e,
						flatDisplay: t,
						testimonies: s
					} = this.props, {
						currentSlideIdx: o
					} = this.state;
					return r.a.createElement("div", {
						className: Object(m.a)(e, Ms.a.container)
					}, r.a.createElement(Is.TransitionMotion, {
						defaultStyles: [{
							key: "slide-0",
							data: {
								index: 0
							},
							style: {
								left: js.Center,
								marginLeft: Ns.Center,
								opacity: 1
							}
						}],
						styles: [{
							key: `slide-${o}`,
							data: {
								index: o
							},
							style: {
								left: Object(Is.spring)(js.Center),
								marginLeft: Object(Is.spring)(Ns.Center),
								opacity: Object(Is.spring)(1)
							}
						}],
						willEnter: () => ({
							left: js.Right,
							marginLeft: Ns.Right,
							opacity: 0
						}),
						willLeave: () => ({
							left: Object(Is.spring)(js.Left),
							marginLeft: Object(Is.spring)(Ns.Left),
							opacity: Object(Is.spring)(0)
						})
					}, e => r.a.createElement(a.Fragment, null, e.map(e => {
						const o = s[e.data.index],
							n = o.badges.map(e => {
								const {
									url2x: t
								} = Object(E.d)(20, 20, e);
								return t
							}),
							i = be()(o.badges),
							c = i && i.extra && i.extra.style && i.extra.style.color;
						return r.a.createElement(a.Fragment, null, r.a.createElement("div", {
							className: Ms.a.testimony,
							key: e.key,
							style: {
								left: `${e.style.left}%`,
								marginLeft: `${e.style.marginLeft}px`
							},
							onClick: this.gotoNextSlide
						}, r.a.createElement("svg", {
							className: Object(m.a)(Ms.a.testimonyOutline, {
								[Ms.a.testimonyOutlineFlat]: !!t
							}),
							viewBox: " 0 0 619 243",
							xmlns: "http://www.w3.org/2000/svg"
						}, r.a.createElement("path", {
							d: "M78.9989 58.4826C70.5322 59.7119 62.7479 63.9147 58.4403 71.3066C53.9012 79.0958 49 90.4192 49 103.001C49 116.034 51.9394 127.873 54.5482 135.813C56.7437 142.495 62.1609 147.369 68.9713 149.128C85.4673 153.389 123.116 160.96 193.436 165.111C196.937 168.49 198.713 173.771 198.713 181.427C198.713 181.427 201.841 181.739 207 174.001C208.968 171.049 209.995 168.285 210.517 166.018C214.102 166.188 217.762 166.349 221.5 166.501C325.757 170.721 486.315 161.046 533.817 157.928C542.454 157.361 550.345 152.8 554.249 145.074C559.465 134.75 566.176 118.719 568.5 101.001C570.389 86.6005 567.819 74.8754 564.58 66.5092C560.681 56.4386 550.794 50.9089 540.11 49.3352C504.988 44.1618 415.934 33.7517 297.5 39.5005C179.641 45.2214 106.881 54.4345 78.9989 58.4826Z"
						}), r.a.createElement("path", {
							d: "M58.4403 71.3066L57.5763 70.8031L58.4403 71.3066ZM78.9989 58.4826L79.1425 59.4723L78.9989 58.4826ZM54.5482 135.813L55.4982 135.501L54.5482 135.813ZM68.9713 149.128L69.2213 148.16L68.9713 149.128ZM193.436 165.111L194.13 164.392L193.864 164.135L193.495 164.113L193.436 165.111ZM198.713 181.427H197.713V182.332L198.614 182.422L198.713 181.427ZM207 174.001L207.832 174.555L207 174.001ZM210.517 166.018L210.564 165.02L209.73 164.98L209.542 165.794L210.517 166.018ZM221.5 166.501L221.46 167.5L221.5 166.501ZM533.817 157.928L533.882 158.926L533.817 157.928ZM554.249 145.074L555.141 145.525L554.249 145.074ZM568.5 101.001L567.508 100.87L568.5 101.001ZM564.58 66.5092L565.512 66.1482L564.58 66.5092ZM540.11 49.3352L539.964 50.3245L540.11 49.3352ZM297.5 39.5005L297.548 40.4993L297.5 39.5005ZM59.3043 71.8101C63.4213 64.7452 70.8961 60.6695 79.1425 59.4723L78.8552 57.493C70.1682 58.7542 62.0745 63.0841 57.5763 70.8031L59.3043 71.8101ZM50 103.001C50 90.6676 54.8096 79.523 59.3043 71.8101L57.5763 70.8031C52.9927 78.6685 48 90.1709 48 103.001H50ZM55.4982 135.501C52.9092 127.621 50 115.892 50 103.001H48C48 116.176 50.9697 128.125 53.5981 136.125L55.4982 135.501ZM69.2213 148.16C62.7244 146.482 57.5822 141.844 55.4982 135.501L53.5981 136.125C55.9052 143.147 61.5974 148.257 68.7212 150.096L69.2213 148.16ZM193.495 164.113C123.223 159.964 85.6407 152.401 69.2213 148.16L68.7212 150.096C85.2939 154.377 123.009 161.955 193.377 166.11L193.495 164.113ZM199.713 181.427C199.713 173.637 197.907 168.036 194.13 164.392L192.742 165.831C195.967 168.943 197.713 173.906 197.713 181.427H199.713ZM206.168 173.446C203.639 177.239 201.662 178.976 200.393 179.767C199.761 180.161 199.306 180.319 199.044 180.384C198.913 180.416 198.827 180.425 198.789 180.428C198.77 180.429 198.762 180.429 198.766 180.429C198.768 180.429 198.773 180.429 198.781 180.429C198.784 180.43 198.789 180.43 198.794 180.43C198.797 180.431 198.8 180.431 198.803 180.431C198.804 180.431 198.806 180.431 198.808 180.431C198.808 180.432 198.81 180.432 198.81 180.432C198.811 180.432 198.812 180.432 198.713 181.427C198.614 182.422 198.615 182.422 198.617 182.422C198.617 182.422 198.618 182.422 198.619 182.423C198.621 182.423 198.623 182.423 198.625 182.423C198.628 182.423 198.632 182.424 198.637 182.424C198.645 182.425 198.654 182.425 198.664 182.426C198.684 182.427 198.707 182.428 198.733 182.428C198.785 182.429 198.85 182.428 198.926 182.423C199.079 182.412 199.278 182.385 199.521 182.326C200.006 182.207 200.656 181.96 201.451 181.464C203.035 180.477 205.202 178.5 207.832 174.555L206.168 173.446ZM209.542 165.794C209.045 167.952 208.063 170.603 206.168 173.446L207.832 174.555C209.872 171.495 210.944 168.618 211.491 166.243L209.542 165.794ZM221.54 165.501C217.805 165.35 214.147 165.189 210.564 165.02L210.47 167.017C214.057 167.187 217.72 167.348 221.46 167.5L221.54 165.501ZM533.751 156.93C486.241 160.048 325.736 169.72 221.54 165.501L221.46 167.5C325.779 171.723 486.388 162.043 533.882 158.926L533.751 156.93ZM553.356 144.623C549.634 151.989 542.087 156.383 533.751 156.93L533.882 158.926C542.82 158.339 551.056 153.611 555.141 145.525L553.356 144.623ZM567.508 100.87C565.205 118.433 558.547 134.351 553.356 144.623L555.141 145.525C560.384 135.149 567.147 119.004 569.492 101.131L567.508 100.87ZM563.647 66.8703C566.836 75.1069 569.372 86.6627 567.508 100.87L569.492 101.131C571.405 86.5382 568.802 74.6438 565.512 66.1482L563.647 66.8703ZM539.964 50.3245C550.439 51.8675 559.924 57.2547 563.647 66.8703L565.512 66.1482C561.437 55.6226 551.148 49.9503 540.256 48.3459L539.964 50.3245ZM297.548 40.4993C415.903 34.7544 504.889 45.1581 539.964 50.3245L540.256 48.3459C505.086 43.1655 415.966 32.749 297.452 38.5017L297.548 40.4993ZM79.1425 59.4723C106.993 55.4287 179.721 46.2187 297.548 40.4993L297.452 38.5017C179.56 44.2242 106.769 53.4403 78.8552 57.493L79.1425 59.4723Z",
							fill: "#9F68D4",
							"fill-opacity": "0.1"
						})), r.a.createElement("div", {
							className: Ms.a.testimonyText
						}, o.text)), r.a.createElement("div", {
							className: Ms.a.user,
							key: `user-${e.key}`,
							style: {
								opacity: e.style.opacity
							}
						}, n.map(e => r.a.createElement("img", {
							className: Ms.a.badge,
							src: e
						})), r.a.createElement("div", {
							className: Ms.a.username,
							style: {
								color: c
							}
						}, `u/${o.username}`)))
					}))), r.a.createElement("div", {
						className: Ms.a.indicators
					}, s.map((e, t) => r.a.createElement("div", {
						className: Object(m.a)(Ms.a.indicator, {
							[Ms.a.indicatorSelected]: t === o
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))
				}
			}
			As.defaultProps = {
				testimonies: Ss
			};
			var Ts = s("./src/reddit/pages/meta/MembershipPaywallPage/Thanks/index.m.less"),
				zs = s.n(Ts);
			const Bs = Object(i.c)({
				meta: (e, {
					subreddit: t
				}) => Object(O.r)(e, t.id)
			});
			var Ls = Object(o.b)(Bs)((function(e) {
					const {
						className: t,
						correlationId: s,
						meta: a,
						subreddit: o
					} = e, n = N(o.id);
					return r.a.createElement("article", {
						className: Object(m.a)(zs.a.container, t)
					}, n.communityThanks && r.a.createElement("header", {
						className: zs.a.title
					}, v.fbt._("The Community Thanks You", null, {
						hk: "28CsBt"
					})), n.testimonials && r.a.createElement(As, {
						flatDisplay: !0
					}), n.testimonials && r.a.createElement("div", {
						className: zs.a.divider
					}), r.a.createElement("footer", {
						className: zs.a.footer
					}, r.a.createElement($e.a, {
						className: zs.a.brand,
						size: "large",
						subreddit: o
					}), r.a.createElement("div", {
						className: zs.a.cta
					}, r.a.createElement("div", {
						className: zs.a.description
					}, v.fbt._("Support r/{communityName} with a {membership}", [v.fbt._param("communityName", o.name), v.fbt._param("membership", a.membership)], {
						hk: "3M1a22"
					})), r.a.createElement("div", {
						className: zs.a.benefits
					}, n.styleBadges && r.a.createElement("div", {
						className: zs.a.benefit
					}, r.a.createElement(Ps.a, {
						className: zs.a.check
					}), "Add a badge and color to your username"), n.emotes && r.a.createElement("div", {
						className: zs.a.benefit
					}, r.a.createElement(Ps.a, {
						className: zs.a.check
					}), "Get access to premium animated emotes"), n.gifs && r.a.createElement("div", {
						className: zs.a.benefit
					}, r.a.createElement(Ps.a, {
						className: zs.a.check
					}), "Add GIFs to your comments")), r.a.createElement(ws, {
						subredditId: o.id,
						correlationId: s
					}))))
				})),
				Rs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/index.m.less"),
				Zs = s.n(Rs),
				Gs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx"),
				Hs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Header/index.m.less"),
				Ws = s.n(Hs);
			const Vs = [800, 1200];

			function Us(e) {
				const {
					className: t,
					subreddit: s
				} = e;
				return r.a.createElement("header", {
					className: Object(m.a)(Ws.a.container, t)
				}, r.a.createElement("div", {
					className: Ws.a.tag
				}, v.fbt._("benefits", null, {
					hk: "3HAYfG"
				})), r.a.createElement("div", {
					className: Ws.a.title
				}, v.fbt._("What do you get?", null, {
					hk: "3PyKKB"
				})), N(s.id).animations && r.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/a1hxn4/the_moment_my_son_discovered_that_his_skin/",
					target: "_blank"
				}, r.a.createElement(F.a, {
					scrollRange: Vs
				}, e => r.a.createElement("img", {
					className: Ws.a.chickenRightArm,
					src: Object(S.a)(s, "chicken_right_arm@2x.png"),
					style: e
				})), r.a.createElement("img", {
					className: Ws.a.chickenTorso,
					src: Object(S.a)(s, "chicken_torso@2x.png")
				}), r.a.createElement(F.a, {
					scrollRange: Vs
				}, e => r.a.createElement("img", {
					className: Ws.a.chickenLeftArm,
					src: Object(S.a)(s, "chicken_left_arm@2x.png"),
					style: e
				})), r.a.createElement("img", {
					className: Ws.a.chickenLeftShoulder,
					src: Object(S.a)(s, "chicken_left_shoulder@2x.png")
				}), r.a.createElement("img", {
					className: Ws.a.chickenHead,
					src: Object(S.a)(s, "chicken_head@2x.png")
				})))
			}
			var qs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Tip/index.m.less"),
				Xs = s.n(qs);

			function Ys(e) {
				return r.a.createElement("div", {
					className: Object(m.a)(e.className, Xs.a.container)
				}, r.a.createElement("div", {
					className: Xs.a.circle
				}, e.index), r.a.createElement("div", {
					className: Xs.a.circleShimmer
				}), r.a.createElement("div", {
					className: Xs.a.tooltipWrapper
				}, r.a.createElement("svg", {
					className: Xs.a.tooltip,
					viewBox: "0 0 140 60",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M8 0C3.58172 0 0 3.58172 0 8V42C0 46.4183 3.58172 50 8 50H60.3934L69.6066 59.2132L78.8198 50H132C136.418 50 140 46.4183 140 42V8C140 3.58172 136.418 0 132 0H8Z"
				})), r.a.createElement("div", {
					className: Xs.a.tooltipText
				}, e.text)))
			}
			var Ks = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/index.m.less"),
				Js = s.n(Ks);

			function Qs(e) {
				const t = Object(S.a)(e.subreddit, "what-do-you-get.png");
				return r.a.createElement("article", {
					className: Object(m.a)(Js.a.container, e.className)
				}, r.a.createElement(Us, {
					subreddit: e.subreddit
				}), r.a.createElement("div", {
					className: Js.a.content
				}, r.a.createElement("img", {
					className: Js.a.img,
					src: t
				}), r.a.createElement("img", {
					className: Js.a.emoji,
					src: "https://meta.redditmedia.com/img/fortnitebr/emotes/oof-2x.gif"
				}), r.a.createElement("img", {
					className: Js.a.gif,
					src: "http://giphygifs.s3.amazonaws.com/media/HX3lSnGXZnaWk/giphy.gif"
				}), r.a.createElement(Ys, {
					className: Js.a.tip1,
					index: 1,
					text: v.fbt._("Get up to 3 badges", null, {
						hk: "2ftguA"
					})
				}), r.a.createElement(Ys, {
					className: Js.a.tip2,
					index: 2,
					text: v.fbt._("Use animated emojis in comments", null, {
						hk: "1teakj"
					})
				}), r.a.createElement(Ys, {
					className: Js.a.tip3,
					index: 3,
					text: v.fbt._("Embed GIF directly in your comments", null, {
						hk: "1fLSUy"
					})
				})), N(e.subreddit.id).animations && r.a.createElement(Gs.a, {
					className: Js.a.footer,
					subreddit: e.subreddit
				}))
			}

			function $s(e) {
				const t = N(e.subreddit.id),
					s = t.styleBadges && t.emotes && t.gifs;
				return r.a.createElement("article", {
					className: Object(m.a)(e.className, Zs.a.container)
				}, t.testimonials && r.a.createElement(b, {
					fireOnce: !0,
					onEnter: t => ({
						source: "meta",
						action: "view",
						noun: "landing_page_2_testimonials",
						correlationId: e.correlationId,
						...x.m(t),
						subreddit: x.hb(t)
					})
				}, r.a.createElement(As, null)), s && r.a.createElement(b, {
					fireOnce: !0,
					onEnter: t => ({
						source: "meta",
						action: "view",
						noun: "landing_page_3_what_do_you_get",
						correlationId: e.correlationId,
						...x.m(t),
						subreddit: x.hb(t)
					})
				}, r.a.createElement(Qs, {
					subreddit: e.subreddit
				})))
			}
			var ea = s("./src/reddit/pages/meta/MembershipPaywallPage/index.m.less"),
				ta = s.n(ea);
			class sa extends r.a.Component {
				constructor(e) {
					super(e);
					const t = Object(u.a)(location.search);
					this.correlationId = t && t.get("corr") || l()()
				}
				componentDidMount() {
					this.props.sendEvent(e => ({
						source: "meta",
						action: "view",
						noun: "subscription_learn_more_page",
						correlationId: this.correlationId,
						...x.m(e),
						subreddit: x.hb(e)
					}))
				}
				render() {
					const {
						isOverlay: e,
						subreddit: t
					} = this.props;
					return t ? _.b.has(t.name.toLowerCase()) ? r.a.createElement("div", {
						className: Object(m.a)(ta.a.container, {
							[ta.a.notOverlay]: !e,
							[ta.a.overlay]: e
						})
					}, r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_1_intro",
							correlationId: this.correlationId,
							...x.m(e),
							subreddit: x.hb(e)
						})
					}, r.a.createElement(Os, {
						correlationId: this.correlationId,
						subreddit: t
					})), r.a.createElement($s, {
						className: ta.a.whatDoYouGet,
						correlationId: this.correlationId,
						subreddit: t
					}), r.a.createElement(Ge, {
						className: ta.a.benefits,
						correlationId: this.correlationId,
						subreddit: t
					}), r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_10_community_thanks",
							correlationId: this.correlationId,
							...x.m(e),
							subreddit: x.hb(e)
						})
					}, r.a.createElement(Ls, {
						className: ta.a.thanks,
						correlationId: this.correlationId,
						subreddit: t
					})), r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_11_faq",
							correlationId: this.correlationId,
							...x.m(e),
							subreddit: x.hb(e)
						})
					}, r.a.createElement(Xe, {
						className: ta.a.faq,
						subreddit: t
					})), r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_12_footer",
							correlationId: this.correlationId,
							...x.m(e),
							subreddit: x.hb(e)
						})
					}, r.a.createElement(Qe, {
						className: ta.a.footer,
						subreddit: t
					}))) : r.a.createElement(n.c, {
						to: `/r/${t.name}`
					}) : null
				}
			}
			const aa = Object(i.c)({
				currentUser: y.k,
				isOverlay: g.i,
				subreddit: (e, {
					match: t
				}) => {
					const s = t.params.subredditName;
					if (s) return Object(f.w)(e, {
						subredditName: s
					})
				}
			});
			var ra;
			t.default = Object(h.c)(Object(o.b)(aa)((ra = sa, class extends a.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					return this.state.mounted ? r.a.createElement(ra, this.props) : null
				}
			})))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			}));
			var a = s("./src/reddit/contexts/PageLayer/index.tsx");
			const r = [],
				o = {},
				n = (e, t) => {
					const s = p(e, t);
					if (s) return s.mainHeader
				},
				i = (e, t) => {
					const s = p(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				c = (e, t) => {
					const s = p(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : o
				},
				l = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				d = (e, t) => {
					const s = l(e, t),
						a = s && s.publicAddress;
					if (!a) throw new Error("No wallet address found");
					return a
				},
				m = (e, t) => {
					const s = l(e, t);
					return s && s.amount || "0"
				},
				u = (e, t) => {
					const s = Object(a.n)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || r
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MembershipPaywallPage.edef8f98ee624d58eaac.js.map