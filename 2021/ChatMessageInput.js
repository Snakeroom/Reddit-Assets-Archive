// https://www.redditstatic.com/desktop2x/ChatMessageInput.03542d7eade9da6c048a.js
// Retrieved at 3/2/2021, 3:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput"], {
		"./node_modules/draft-js/dist/Draft.css": function(e, t, s) {},
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

			function a(e) {
				return "[object Function]" === n(e)
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
				u = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				d = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function l(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					r = e.__tlds__.slice();

				function i(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || r.push(u), r.push(t.src_xn), t.src_tlds = r.join("|"), t.email_fuzzy = RegExp(i(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(i(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(i(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(i(t.tpl_host_fuzzy_test), "i");
				var c = [];

				function d(e, t) {
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
						}(s.validate) ? a(s.validate) ? r.validate = s.validate : d(t, s) : r.validate = function(e) {
							return function(t, s) {
								var r = t.slice(s);
								return e.test(r) ? r.match(e)[0].length : 0
							}
						}(s.validate), void(a(s.normalize) ? r.normalize = s.normalize : s.normalize ? d(t, s) : r.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === n(e)
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
				var l = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(o).join("|");
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
					return e || i.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = r({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r({}, c, e), this.__compiled__ = {}, this.__tlds__ = d, this.__tlds_replaced__ = !1, this.re = {}, l(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, l(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = r(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, r, n, a, o, i, c;
				if (this.re.schema_test.test(e))
					for ((i = this.re.schema_search).lastIndex = 0; null !== (t = i.exec(e));)
						if (n = this.testSchemaAt(e, t[2], i.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + n;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (a = s.index + s[1].length, (this.__index__ < 0 || a < this.__index__) && (this.__schema__ = "", this.__index__ = a, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (a = r.index + r[1].length, o = r.index + r[0].length, (this.__index__ < 0 || a < this.__index__ || a === this.__index__ && o > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = a, this.__last_index__ = o)), this.__index__ >= 0
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
		"./node_modules/lodash/_arrayReduceRight.js": function(e, t) {
			e.exports = function(e, t, s, r) {
				var n = null == e ? 0 : e.length;
				for (r && n && (s = e[--n]); n--;) s = t(s, e[n], n, e);
				return s
			}
		},
		"./node_modules/lodash/_baseEachRight.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseForOwnRight.js"),
				n = s("./node_modules/lodash/_createBaseEach.js")(r, !0);
			e.exports = n
		},
		"./node_modules/lodash/_baseExtremum.js": function(e, t, s) {
			var r = s("./node_modules/lodash/isSymbol.js");
			e.exports = function(e, t, s) {
				for (var n = -1, a = e.length; ++n < a;) {
					var o = e[n],
						i = t(o);
					if (null != i && (void 0 === c ? i == i && !r(i) : s(i, c))) var c = i,
						u = o
				}
				return u
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var s = [];
				return r(e, (function(e, r, n) {
					t(e, r, n) && s.push(e)
				})), s
			}
		},
		"./node_modules/lodash/_baseForOwnRight.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseForRight.js"),
				n = s("./node_modules/lodash/keys.js");
			e.exports = function(e, t) {
				return e && r(e, t, n)
			}
		},
		"./node_modules/lodash/_baseForRight.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_createBaseFor.js")(!0);
			e.exports = r
		},
		"./node_modules/lodash/_baseGt.js": function(e, t) {
			e.exports = function(e, t) {
				return e > t
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var s = Math.ceil,
				r = Math.max;
			e.exports = function(e, t, n, a) {
				for (var o = -1, i = r(s((t - e) / (n || 1)), 0), c = Array(i); i--;) c[a ? i : ++o] = e, e += n;
				return c
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, t, s, n) {
				for (var a = e.length, o = n ? a : -1;
					(n ? o-- : ++o < a) && t(e[o], o, e););
				return s ? r(e, n ? 0 : o, n ? o + 1 : a) : r(e, n ? o + 1 : 0, n ? a : o)
			}
		},
		"./node_modules/lodash/_charsEndIndex.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, t) {
				for (var s = e.length; s-- && r(t, e[s], 0) > -1;);
				return s
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseRange.js"),
				n = s("./node_modules/lodash/_isIterateeCall.js"),
				a = s("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, s, o) {
					return o && "number" != typeof o && n(t, s, o) && (s = o = void 0), t = a(t), void 0 === s ? (s = t, t = 0) : s = a(s), o = void 0 === o ? t < s ? 1 : -1 : a(o), r(t, s, o, e)
				}
			}
		},
		"./node_modules/lodash/_escapeHtmlChar.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_basePropertyOf.js")({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			});
			e.exports = r
		},
		"./node_modules/lodash/chunk.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseSlice.js"),
				n = s("./node_modules/lodash/_isIterateeCall.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				o = Math.ceil,
				i = Math.max;
			e.exports = function(e, t, s) {
				t = (s ? n(e, t, s) : void 0 === t) ? 1 : i(a(t), 0);
				var c = null == e ? 0 : e.length;
				if (!c || t < 1) return [];
				for (var u = 0, d = 0, l = Array(o(c / t)); u < c;) l[d++] = r(e, u, u += t);
				return l
			}
		},
		"./node_modules/lodash/dropRightWhile.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseIteratee.js"),
				n = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? n(e, r(t, 3), !0, !0) : []
			}
		},
		"./node_modules/lodash/escape.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_escapeHtmlChar.js"),
				n = s("./node_modules/lodash/toString.js"),
				a = /[&<>"']/g,
				o = RegExp(a.source);
			e.exports = function(e) {
				return (e = n(e)) && o.test(e) ? e.replace(a, r) : e
			}
		},
		"./node_modules/lodash/filter.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_arrayFilter.js"),
				n = s("./node_modules/lodash/_baseFilter.js"),
				a = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (o(e) ? r : n)(e, a(t, 3))
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseFlatten.js"),
				n = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return r(n(e, t), 1)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseIndexOf.js"),
				n = s("./node_modules/lodash/isArrayLike.js"),
				a = s("./node_modules/lodash/isString.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				i = s("./node_modules/lodash/values.js"),
				c = Math.max;
			e.exports = function(e, t, s, u) {
				e = n(e) ? e : i(e), s = s && !u ? o(s) : 0;
				var d = e.length;
				return s < 0 && (s = c(d + s, 0)), a(e) ? s <= d && e.indexOf(t, s) > -1 : !!d && r(e, t, s) > -1
			}
		},
		"./node_modules/lodash/maxBy.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseExtremum.js"),
				n = s("./node_modules/lodash/_baseGt.js"),
				a = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return e && e.length ? r(e, a(t, 2), n) : void 0
			}
		},
		"./node_modules/lodash/range.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_createRange.js")();
			e.exports = r
		},
		"./node_modules/lodash/reduceRight.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_arrayReduceRight.js"),
				n = s("./node_modules/lodash/_baseEachRight.js"),
				a = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? r : o,
					u = arguments.length < 3;
				return c(e, a(t, 4), s, u, n)
			}
		},
		"./node_modules/lodash/takeWhile.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseIteratee.js"),
				n = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? n(e, r(t, 3)) : []
			}
		},
		"./node_modules/lodash/trimEnd.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseToString.js"),
				n = s("./node_modules/lodash/_castSlice.js"),
				a = s("./node_modules/lodash/_charsEndIndex.js"),
				o = s("./node_modules/lodash/_stringToArray.js"),
				i = s("./node_modules/lodash/toString.js"),
				c = /\s+$/;
			e.exports = function(e, t, s) {
				if ((e = i(e)) && (s || void 0 === t)) return e.replace(c, "");
				if (!e || !(t = r(t))) return e;
				var u = o(e),
					d = a(u, o(t)) + 1;
				return n(u, 0, d).join("")
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, r) {
				var n = s ? s.call(r, e, t) : void 0;
				if (void 0 !== n) return !!n;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var a = Object.keys(e),
					o = Object.keys(t);
				if (a.length !== o.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), c = 0; c < a.length; c++) {
					var u = a[c];
					if (!i(u)) return !1;
					var d = e[u],
						l = t[u];
					if (!1 === (n = s ? s.call(r, d, l, u) : void 0) || void 0 === n && d !== l) return !1
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
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "j", (function() {
				return b
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/constants/modals.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(r.a)(o.a),
				c = Object(r.a)(o.b),
				u = Object(r.a)(o.c),
				d = Object(r.a)(o.d),
				l = Object(r.a)(o.e),
				m = Object(r.a)(o.f),
				p = Object(r.a)(o.g),
				h = Object(r.a)(o.h),
				_ = Object(r.a)(o.i),
				b = e => Object(n.h)(a.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./node_modules/uuid/v4.js"),
				n = s.n(r),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(a.a)(o.B),
				c = e => async t => {
					t(i(e))
				}, u = () => async e => {
					e(i({
						lastChatActivityUtcTs: Date.now()
					}))
				}, d = () => async e => {
					e(i({
						correlationId: n()()
					}))
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
		"./src/reddit/components/CommentsChat/MessageInput/index.m.less": function(e, t, s) {
			e.exports = {
				FormWrapper: "mfKS0B5uqUX6PXcuSjTop",
				formWrapper: "mfKS0B5uqUX6PXcuSjTop",
				LivestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				livestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				Form: "_76oPIY5CZD4GaQnn-06zO",
				form: "_76oPIY5CZD4GaQnn-06zO",
				inputLine: "_2rpcmnaHqKJnQeHI6-RZU8",
				Editing: "CA5bQ-3lhJvw_xfOAOs4K",
				editing: "CA5bQ-3lhJvw_xfOAOs4K",
				SmallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				smallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				ChatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				chatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				LivestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				livestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				leftPad: "_2nnsSXE8H28qTe0cmiHlbb",
				RichTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				richTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				Livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				LivestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				livestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				insetSubmitButton: "_2-jlFgTYFKmNDKFKaq5x8Z",
				RichTextJson: "_2i9z4_kONlAq_kaKny5o8A",
				richTextJson: "_2i9z4_kONlAq_kaKny5o8A",
				Reply: "_1VGxfswi7Ejb0tozdhOhnJ",
				reply: "_1VGxfswi7Ejb0tozdhOhnJ",
				isLivestreaming: "_1pHXu-8skDLlMxqw7GXg9W",
				ReplyComment: "_3vHha2uHlOOSaJHExNUTkt",
				replyComment: "_3vHha2uHlOOSaJHExNUTkt",
				CloseIconWrap: "_3SwwKU0q7pRO0pohludkXl",
				closeIconWrap: "_3SwwKU0q7pRO0pohludkXl",
				ReplyAuthor: "_11cxPUL8P03UB2QLjnVQA1",
				replyAuthor: "_11cxPUL8P03UB2QLjnVQA1"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/noop.js"),
				a = s.n(n),
				o = s("./node_modules/lodash/throttle.js"),
				i = s.n(o),
				c = s("./node_modules/react/index.js"),
				u = s.n(c),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/models/PostDraft/index.ts"),
				_ = s("./src/reddit/actions/comment/authoring.ts"),
				b = s("./src/reddit/actions/gold/modals.ts"),
				f = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				g = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				y = s("./src/reddit/components/RichTextEditor/index.tsx"),
				v = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				x = s("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				k = s("./src/reddit/controls/Button/index.tsx"),
				j = s("./src/reddit/controls/ErrorText/index.tsx"),
				C = s("./src/reddit/helpers/correlationIdTracker.ts"),
				w = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				F = s("./src/reddit/helpers/richTextEditor/index.ts"),
				E = s("./src/reddit/helpers/trackers/rpan.ts"),
				D = s("./src/reddit/icons/svgs/Close/index.tsx"),
				A = s("./src/reddit/icons/svgs/Send/index.tsx"),
				I = s("./src/reddit/models/PostCreationForm/index.ts"),
				O = s("./src/reddit/selectors/comments.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				z = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				P = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeCommentsPageKey/index.ts")),
				L = s("./src/reddit/selectors/commentSelector.ts"),
				N = s("./src/reddit/selectors/communityAwards.ts"),
				B = s("./src/reddit/selectors/gold/awardIcon.ts"),
				R = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				T = s("./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less"),
				M = s.n(T);
			class U extends c.Component {
				render() {
					const {
						className: e,
						count: t,
						iconUrl: s,
						isAnimated: r
					} = this.props;
					return u.a.createElement("div", {
						className: Object(m.a)(M.a.container, e, {
							[M.a.isAnimated]: r
						})
					}, u.a.createElement(R.a, {
						className: M.a.gildIcon
					}), r && s && u.a.createElement("div", {
						className: M.a.awardingIcon,
						style: {
							backgroundImage: `url("${s}")`
						}
					}), t ? u.a.createElement("div", {
						className: M.a.count
					}, t) : null)
				}
			}
			var Z = Object(d.b)(() => Object(l.c)({
				iconUrl: (e, {
					awardId: t
				}) => {
					if (!t) return;
					const s = Object(N.a)(e, t);
					return Object(B.a)(e, {
						award: s,
						minSize: 64
					})
				}
			}))(U);
			const q = Object(d.b)(() => Object(l.a)(e => e, (e, {
					postId: t
				}) => Object(O.g)(e, {
					commentsPageKey: Object(P.a)(t)
				}), S.I, (e, {
					postId: t
				}) => Object(O.u)(e, {
					commentsPageKey: Object(P.a)(t)
				}), (e, t, s, r) => {
					return {
						commentAwardIds: t.length ? t.reduce((t, s) => {
							const r = Object(L.a)(e, {
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
				G = e => ({
					initialCommentAwardIds: e.isFullyLoaded ? [...e.commentAwardIds] : [],
					initialPostAwardCount: e.isFullyLoaded ? e.postAwardCount : 0,
					prevIsFullyLoaded: e.isFullyLoaded,
					prevPostId: e.postId
				});
			class K extends c.Component {
				constructor(e) {
					super(e), this.state = G(e)
				}
				static getDerivedStateFromProps(e, t) {
					return t.prevPostId !== e.postId || !t.prevIsFullyLoaded && e.isFullyLoaded ? G(e) : null
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
					if (!a) return u.a.createElement(Z, {
						className: n,
						count: 0
					});
					const o = Math.max(s, e + r.length - t.length),
						i = r.length - 1,
						c = r[i],
						d = r.length !== t.length;
					return u.a.createElement(Z, {
						awardId: c,
						className: n,
						count: o,
						isAnimated: d,
						key: i
					})
				}
			}
			var V = q(K),
				W = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				H = s.n(W);
			const J = {},
				X = 1e3,
				$ = "chat_submission_from_rte",
				Q = p.a.form("Form", H.a),
				Y = p.a.wrapped(k.d, "ChatButton", H.a),
				ee = p.a.div("CloseIconWrap", H.a),
				te = p.a.div("Reply", H.a),
				se = p.a.div("ReplyAuthor", H.a),
				re = p.a.div("ReplyComment", H.a),
				ne = p.a.wrapped(y.a, "RichTextEditor", H.a),
				ae = p.a.wrapped(g.a, "SmallChatUserIcon", H.a),
				oe = Object(d.b)(() => Object(l.c)({
					draft: O.i,
					errorMsgs: O.I,
					hasError: O.v,
					liveStreamingChatCharacterLimit: z.a,
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					post: S.I
				}), (e, {
					isEditing: t,
					comment: s,
					commentsPageKey: r,
					draftKey: n,
					postId: a,
					replyComment: o,
					isLivestreaming: i,
					scrollToBottom: c
				}) => ({
					dispatchSubmit: async (o, u, d) => {
						t && s ? await e(Object(_.i)({
							id: s.id,
							commentsPageKey: r,
							depth: 0,
							draftKey: n,
							formData: o
						})) : d ? e(Object(_.l)({
							commentsPageKey: r,
							draftKey: n,
							parentCommentDepth: d.depth,
							parentCommentId: d.id,
							formData: o,
							editorMode: u
						})) : await e(Object(_.n)(a, r, n, o, u, !0, i)), c && c()
					},
					handleGiveAward: t => e(Object(b.d)({
						correlationId: t,
						thingId: a
					})),
					onCancelEdit: () => s && e(Object(_.c)({
						commentId: s.id,
						commentsPageKey: r
					})),
					onLivestreamingChatMessageEdit: () => e(Object(f.a)()),
					closeReply: () => o && e(Object(_.a)({
						parentCommentId: o.id,
						commentsPageKey: r
					}))
				}));
			class ie extends u.a.Component {
				constructor(e) {
					super(e), this.focusOnForm = () => this.editor && this.editor.focus(), this.setRTEComponentRef = e => this.editor = e, this.handleCancel = e => {
						e.preventDefault(), this.props.onCancelEdit && this.props.onCancelEdit()
					}, this.handleChange = (e, t) => {
						this.state.hasChanged && (t = this.state.hasChanged), t && e.isBound && (t = Boolean(t && e.editorState.getCurrentContent().getPlainText().trim())), this.setState(() => ({
							showError: !1,
							rteState: e,
							hasChanged: t
						})), this.props.isLivestreaming && t && this.passChangeToLivestreaming()
					}, this.handleFocus = () => {
						this.props.isLivestreaming && this.passChangeToLivestreaming(), this.props.onFocusMessageInput && this.props.onFocusMessageInput()
					}, this.passChangeToLivestreaming = i()(() => this.props.onLivestreamingChatMessageEdit(), X, {
						leading: !1,
						trailing: !0
					}), this.onClickGiveAward = async e => {
						e.stopPropagation();
						const {
							handleGiveAward: t,
							isLivestreaming: r,
							postId: n,
							sendEvent: a
						} = this.props;
						t(Object(C.d)(C.a.GildingFlow, !0));
						const {
							clickGildEvent: o,
							clickRpanGiveAward: i
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						a((r ? i : o)(n))
					}, this.handleCloseReply = e => {
						e.preventDefault(), this.props.closeReply()
					}, this.handleSubmit = e => {
						e.preventDefault(), this.onSubmit()
					}, this.onSubmit = () => {
						if (this.canSubmit()) {
							const e = {
								commentMode: I.h.RICH_TEXT,
								draftType: h.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), this.props.dispatchSubmit(e, I.h.RICH_TEXT, this.props.replyComment)
						}
						this.props.isLivestreaming && this.props.sendEvent(Object(E.y)(this.props.postId))
					}, this.canSubmit = () => Boolean(!this.props.pending && this.state.hasChanged), this.state = {
						hasChanged: !1,
						showError: e.hasError,
						rteState: e.isEditing && e.comment ? v.a.createInitial(e.comment.media.richtextContent) : v.a.createInitial()
					}
				}
				isReplyCommentChanged(e) {
					const {
						replyComment: t
					} = this.props;
					return (e.replyComment && e.replyComment.id) !== (t && t.id)
				}
				shouldComponentUpdate(e, t) {
					return t.rteState.editorKey !== this.state.rteState.editorKey || t.hasChanged !== this.state.hasChanged || t.showError !== this.state.showError || e.pending !== this.props.pending || e.postId !== this.props.postId || this.isReplyCommentChanged(e)
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.props.isEditing && this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.cleanInputForm(), this.isReplyCommentChanged(e) && e.replyComment && this.focusOnForm(), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentDidUpdate(e) {
					e.pending && !this.props.pending && this.focusOnForm()
				}
				cleanInputForm() {
					this.setState({
						rteState: v.a.createInitial()
					})
				}
				render() {
					const {
						errorMsgs: e,
						isEditing: t,
						isLivestreaming: s,
						liveStreamingChatCharacterLimit: n,
						pending: o,
						post: i,
						postId: c,
						replyComment: d
					} = this.props, l = s ? r.fbt._("Send message ({characterLimit} character limit)", [r.fbt._param("characterLimit", (n || 200).toLocaleString())], {
						hk: "RIcb6"
					}) : r.fbt._("Send a message (use the Enter key)", null, {
						hk: "3yojgj"
					}), p = i.isGildable && s && !t, h = s;
					return u.a.createElement("div", {
						className: Object(m.a)(H.a.FormWrapper, {
							[H.a.LivestreamingWrapper]: s
						})
					}, !t && d && u.a.createElement(te, {
						className: Object(m.a)({
							[H.a.isLivestreaming]: s
						})
					}, u.a.createElement(re, {
						onClick: this.handleCloseReply
					}, u.a.createElement(se, null, r.fbt._("Replying to u/ {username}:", [r.fbt._param("username", d.author)], {
						hk: "2YZre5"
					})), u.a.createElement(x.a, {
						className: H.a.RichTextJson,
						key: `rich-text-${d.id}`,
						content: Object(w.a)(d),
						rtJsonElementProps: J
					}), u.a.createElement(ee, null, u.a.createElement(D.a, null)))), u.a.createElement("div", {
						className: H.a.inputLine
					}, u.a.createElement(Q, {
						className: Object(m.a)({
							[H.a.Editing]: t
						}),
						onSubmit: this.handleSubmit,
						onReset: this.handleCancel
					}, u.a.createElement(ce, {
						isEditing: !!t,
						isLivestreaming: !!s
					}), u.a.createElement(ne, {
						className: Object(m.a)(H.a.RichTextEditor, {
							[H.a.Livestreaming]: s && !t,
							[H.a.Editing]: !s && t
						}),
						focusableContentRTEClassName: Object(m.a)({
							[H.a.LivestreamingFocusableContent]: s && !t
						}),
						dataTestId: $,
						editorType: F.a.Comment,
						initialMinHeight: 20,
						initialHeight: s ? 20 : void 0,
						rteState: this.state.rteState,
						rteRef: this.setRTEComponentRef,
						onChange: this.handleChange,
						onFocus: this.handleFocus,
						onSubmit: this.onSubmit,
						placeholderText: l,
						readOnly: o,
						showSubmitButton: h,
						submitButtonClassName: H.a.insetSubmitButton,
						submitOnEnter: !0,
						trackToolbarClick: a.a,
						hideToolbar: !0,
						noBorder: !0,
						isChatPost: !0
					}), t && u.a.createElement(Y, {
						className: Object(m.a)(H.a.ChatButton, {
							[H.a.LivestreamingResetButton]: s
						}),
						type: "reset"
					}, u.a.createElement(D.a, null)), !h && u.a.createElement(Y, {
						className: Object(m.a)(H.a.ChatButton, {
							[H.a.LivestreamingChatButton]: s && !t,
							[H.a.LivestreamingResetButton]: s && t
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": r.fbt._("send a message", null, {
							hk: "4bL65Y"
						})
					}, u.a.createElement(A.a, null))), p && u.a.createElement(Y, {
						className: Object(m.a)(H.a.ChatButton, {
							[H.a.LivestreamingChatButton]: s,
							[H.a.leftPad]: !h
						}),
						"aria-label": r.fbt._("give award", null, {
							hk: "1nXRWY"
						}),
						onClick: this.onClickGiveAward
					}, u.a.createElement(V, {
						postId: c
					}))), this.state.showError && Object(j.c)(e))
				}
			}
			const ce = ({
				isEditing: e,
				isLivestreaming: t
			}) => t ? null : e ? u.a.createElement(ae, {
				height: 20,
				width: 20
			}) : u.a.createElement(g.a, {
				height: 25,
				width: 25
			});
			t.default = oe(ie)
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
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(i);
			t.a = o.a.wrapped(e => n.a.createElement("div", {
				className: Object(a.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/constants/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var r;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(r || (r = {}));
			var n;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(n || (n = {}))
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/Input/index.m.less"),
				a = s.n(n);
			t.a = r.a.input("input", a.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = s.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: s
			}) => n.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${s}px`
				}
			})
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/models/RichTextJson/index.ts");
			const n = "giphy|",
				a = "|downsized";

			function o(e, t) {
				return n + e + (t ? a : "")
			}

			function i(e) {
				return e && 0 === e.indexOf(n)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(i)
			}

			function u(e) {
				let t = e.substring(n.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function d(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, s) => [...e, ...d(s, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function l(e) {
				return d(e, r.F).map(e => e.id)
			}

			function m(e) {
				return d(e, e => e.e === r.o).map(e => e.u)
			}
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "G", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "C", (function() {
				return p
			})), s.d(t, "z", (function() {
				return h
			})), s.d(t, "D", (function() {
				return _
			})), s.d(t, "B", (function() {
				return b
			})), s.d(t, "A", (function() {
				return f
			})), s.d(t, "t", (function() {
				return g
			})), s.d(t, "u", (function() {
				return y
			})), s.d(t, "w", (function() {
				return v
			})), s.d(t, "q", (function() {
				return x
			})), s.d(t, "o", (function() {
				return k
			})), s.d(t, "p", (function() {
				return j
			})), s.d(t, "n", (function() {
				return C
			})), s.d(t, "y", (function() {
				return w
			})), s.d(t, "r", (function() {
				return F
			})), s.d(t, "x", (function() {
				return E
			})), s.d(t, "F", (function() {
				return D
			})), s.d(t, "s", (function() {
				return A
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "k", (function() {
				return O
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "d", (function() {
				return z
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "v", (function() {
				return L
			})), s.d(t, "E", (function() {
				return N
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "l", (function() {
				return R
			})), s.d(t, "m", (function() {
				return T
			})), s.d(t, "g", (function() {
				return M
			})), s.d(t, "h", (function() {
				return U
			}));
			var r, n = s("./src/reddit/constants/chat.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(r || (r = {}));
			const i = (e, t) => {
					if (t) {
						const s = o.media(e, t.post.id),
							r = o.post(e, t.post.id),
							n = o.subreddit(e);
						if (t.post.authorInfo && r && (r.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const r = Object(a.j)(e, {
								streamIdFromPath: t.post.id
							});
							r === a.a.LIVE ? s.type = "stream_live" : r === a.a.VOD ? s.type = "stream_vod" : r === a.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: r,
							media: s,
							subreddit: n
						}
					}
					return {
						subreddit: o.subreddit(e)
					}
				},
				c = (e, t, s) => {
					if (!t || !s) return;
					const r = Object(a.j)(e, {
							streamIdFromPath: t.post.id
						}),
						o = t.chat_disabled || s.chatState === n.a.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: r === a.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: o ? n.a.None : n.a.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				u = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				d = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...i(e)
				}),
				l = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...i(e)
				}),
				m = (e, t) => s => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...i(s, e),
					actionInfo: o.actionInfo(s, {
						position: t || 0
					})
				}),
				p = (e, t) => s => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(s, e, t),
					...u(s),
					...e && {
						...i(s, e)
					}
				}),
				h = (e, t) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(s, e, t),
					...u(s),
					...i(s, e)
				}),
				_ = (e, t) => s => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(s, e, t),
					...u(s),
					...i(s, e)
				}),
				b = (e, t) => s => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(s, e, t),
					...u(s),
					...i(s, e)
				}),
				f = (e, t, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, s),
					...u(r),
					...i(r, t)
				}),
				g = (e, t, s, r) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, s),
					...u(n),
					...i(n, t),
					actionInfo: o.actionInfo(n, {
						referralId: r
					})
				}),
				y = (e, t, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, s),
					...u(r),
					...i(r, t)
				}),
				v = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...u(t),
					...i(t, e)
				}),
				x = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(s, e, t),
					...u(s),
					...i(s, e)
				}),
				k = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(s, e, t),
					...u(s),
					...i(s, e)
				}),
				j = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(s, e, t),
					...u(s),
					...i(s, e)
				}),
				C = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(s, e, t),
					...i(s, e)
				}),
				w = e => t => {
					const s = Object(a.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, s)
					}
				},
				F = (e, t, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(r, t, s),
					...i(r, t)
				}),
				E = (e, t) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(s, e, t),
					...u(s)
				}),
				D = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.profile(t),
					screen: o.screen(t),
					...i(t, e)
				}),
				A = e => e => {
					const t = i(e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.profile(e),
						screen: o.screen(e),
						...t
					}
				},
				I = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				O = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: o.subreddit(t)
				}),
				S = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(s, e, t),
					...i(s, e)
				}),
				z = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(s, e, t),
					...i(s, e)
				}),
				P = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(s, e, t),
					...i(s, e)
				}),
				L = (e, t) => s => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(s, e, t),
					...i(s, e)
				}),
				N = (e, t) => s => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(s, e, t),
					...i(s, e)
				}),
				B = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(s, e, t),
					...i(s, e)
				}),
				R = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(s, e, t),
					...i(s, e),
					...u(s)
				}),
				T = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(s, e, t),
					...i(s, e),
					...u(s)
				}),
				M = (e, t) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(s, t),
					...u(s)
				}),
				U = (e, t) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(s, t),
					...u(s)
				})
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, s) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Gift/index.m.less"),
				i = s.n(o),
				c = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const d = c.a.wrapped(e => {
				const t = Object(u.b)();
				return n.a.createElement("i", {
					className: `${Object(a.b)(t?"award":"gift")} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, n.a.createElement(a.a, null, e.desc))
			}, "GiftIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(o);
			const c = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var r, n, a;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(n || (n = {})),
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
				return C
			})), s.d(t, "m", (function() {
				return E
			})), s.d(t, "i", (function() {
				return I
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "h", (function() {
				return L
			})), s.d(t, "k", (function() {
				return N
			})), s.d(t, "c", (function() {
				return B
			})), s.d(t, "f", (function() {
				return R
			})), s.d(t, "a", (function() {
				return U
			})), s.d(t, "j", (function() {
				return Z
			})), s.d(t, "b", (function() {
				return q
			})), s.d(t, "e", (function() {
				return G
			})), s.d(t, "g", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./node_modules/lodash/memoize.js");
			const m = e => e.publicAccessNetwork.listings,
				p = s.n(l)()(e => Object(n.a)(Object(r.a)(m, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var h = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const _ = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				f = e => e.publicAccessNetwork.history,
				g = e => e.publicAccessNetwork.history.cursor,
				y = e => e.publicAccessNetwork.history.visitOrder,
				v = e => e.publicAccessNetwork.hlsStreams,
				x = Object(r.a)(v, e => e.ended),
				k = Object(r.a)(v, e => e.removed),
				j = Object(r.a)(_, x, k, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = T(r, i.a.ENDED) ? i.a.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !0 === a ? e : {
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
							n = T(r, i.a.ENDED) ? i.a.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !1 === a ? e : {
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
				C = (e, t) => {
					return j(e)[Object(o.h)(t)]
				},
				w = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => p(t.listingName)(e, t), j, b, c.h, u.f, (e, t, s, r, n, c) => {
					if (c) {
						const a = [];
						if (e) {
							const t = Object(o.h)(e);
							s[t] && a.push(t)
						}
						const c = a.concat(t),
							u = [...new Set(c)],
							d = new Set([...r, ...n]);
						return u.filter(e => {
							const t = s[e];
							return !d.has(e) && !t.post.isHidden && t.stream.state !== i.a.KILLED && t.stream.state !== i.a.PURGED
						})
					}
					const u = new Set([...r, ...n]);
					return Object.keys(s).filter(e => !u.has(e)).map(e => s[e]).filter(e => e.rank !== a.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.a.KILLED && e.stream.state !== i.a.PURGED).map(e => e.post.id)
				}),
				F = Object(r.a)((e, {
					count: t
				}) => t, j, (e, {
					listingName: t,
					streamIdFromPath: s
				}) => w(e, {
					listingName: t,
					streamIdFromPath: s
				}), (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				E = Object(r.a)(j, F, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				D = Object(r.a)(y, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: r
				}) => F(e, {
					listingName: t || r,
					streamIdFromPath: s
				}), (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				A = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, j, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: r
				}) => F(e, {
					listingName: t || r,
					streamIdFromPath: s
				}), f, (e, t, s, r) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = n.find(e => e.stream.state === i.a.IS_LIVE);
					if (a) return a.post.id;
					const o = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				I = Object(n.a)(Object(r.a)(A, j, (e, t) => e ? t[e] : void 0)),
				O = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(o.h)(t) : void 0, A, b, c.h, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: r
				}) => F(e, {
					listingName: t || r,
					streamIdFromPath: s
				}), (e, t, s, r, n) => !e || s.includes(e) || r.includes(e) ? t || n[0] : e),
				S = Object(r.a)(g, y, D, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				z = Object(r.a)(g, y, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				P = Object(n.a)(Object(r.a)(O, j, (e, t) => e ? t[e] : void 0)),
				L = Object(n.a)(Object(r.a)(S, j, (e, t) => e ? t[e] : void 0)),
				N = Object(n.a)(Object(r.a)(z, j, (e, t) => e ? t[e] : void 0)),
				B = (Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, j, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(r.a)(O, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				R = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? C(e, t) : void 0, e => !e || e.chat_disabled);

			function T(e, t) {
				const s = {
					[i.a.NOT_STARTED]: 0,
					[i.a.PUBLISHED]: 1,
					[i.a.IS_LIVE]: 2,
					[i.a.DISCONNECTED]: 2,
					[i.a.ENDED]: 3,
					[i.a.KILLED]: 4,
					[i.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const M = Object(r.a)(O, f, (e, t) => e && t.timestamps[e] || 0);
			var U;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(U || (U = {}));
			const Z = Object(r.a)(O, j, h.b, (e, t, s) => {
					if (s) return U.INTRO;
					const r = e && t[e];
					if (!r) return U.UNAVAILABLE;
					const n = r.stream.state;
					return n === i.a.IS_LIVE || n === i.a.DISCONNECTED ? U.LIVE : n === i.a.ENDED && r.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				q = Object(r.a)(P, Z, h.b, d.b, d.o, (e, t, s, r, n) => s ? r : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : n : void 0),
				G = Object(r.a)(P, Z, M, (e, t, s) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && s < e.broadcast_time ? s : 0 : 0),
				K = (e, t) => {
					const s = _(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(r.a)(o, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(o, e => e.lastChatActivityUtcTs),
				u = e => !!e && e + n.a > Date.now()
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return _
			})), s.d(t, "n", (function() {
				return b
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "v", (function() {
				return g
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "p", (function() {
				return v
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "x", (function() {
				return k
			})), s.d(t, "k", (function() {
				return j
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "d", (function() {
				return F
			})), s.d(t, "i", (function() {
				return E
			})), s.d(t, "o", (function() {
				return D
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "q", (function() {
				return z
			})), s.d(t, "w", (function() {
				return P
			})), s.d(t, "s", (function() {
				return L
			})), s.d(t, "t", (function() {
				return N
			})), s.d(t, "b", (function() {
				return B
			})), s.d(t, "u", (function() {
				return R
			})), s.d(t, "r", (function() {
				return T
			})), s.d(t, "g", (function() {
				return M
			})), s.d(t, "l", (function() {
				return U
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/helpers/economics/sortBadges.ts"),
				a = s("./src/reddit/helpers/richTextJson/index.ts"),
				o = s("./src/reddit/models/Badge/index.ts"),
				i = s("./src/reddit/models/Badge/managementPage.ts"),
				c = s("./src/reddit/models/Gold/Powerups/index.ts"),
				u = s("./src/reddit/models/Payments/index.ts"),
				d = s("./src/reddit/models/Product/index.ts"),
				l = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/gold/powerups.ts");
			const _ = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				b = (e, t) => {
					const s = _(e, t);
					return s && s.endsAt || null
				};
			var f;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(f || (f = {}));
			const g = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const s = b(e, t),
							r = Date.now();
						return s && r < s ? f.Subscribed : f.NotSubscribed
					}
					return f.DontKnow
				},
				y = (e, t) => {
					const s = e.user.account,
						r = e.economics.subredditPremium[t];
					if (s && r && r.status === m.a.Fetched) {
						const r = ((e.users.appliedBadges[s.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[i.a.Loyalty]: r.find(e => e.placement === o.a.First),
							[i.a.Achievement]: r.find(e => e.placement === o.a.Second),
							[i.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				},
				v = (e, t, s) => {
					if (!r.d.spBadges(e)) return [];
					const a = (e.users.appliedBadges[s] || {})[t] || [];
					return Object(n.a)(a.map(t => e.badges.models[t]).filter(Boolean))
				},
				x = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === m.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function k(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function j(e, t) {
				const {
					badge: s,
					subredditId: r
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(s) && s.userId === n) return s;
				const a = e.badges.models,
					i = e.user.ownedBadges[r] || {},
					c = Object(o.e)(s) ? s.type : s.id;
				return Object.keys(i).map(e => a[e]).find(e => e && e.type === c)
			}

			function C(e, t, s, r) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === m.a.Fetched) {
					if (s === i.a.Loyalty || s === i.a.Achievement) return n.data.collections[s];
					if (s === i.a.Cosmetic && r) return n.data.collections[s][r]
				}
				return []
			}

			function w(e, t) {
				const s = C(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function F(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					const e = s.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return []
			}

			function E(e, t) {
				return C(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const D = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === l.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const r = e[s];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: s,
							type: u.a.SavedStripe
						})
					}
				}
				if (s.status === l.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const r = e[s];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: u.a.SavedPayPal
						})
					}
				}
				return t
			};
			var A;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(A || (A = {}));
			const I = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				O = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				S = (e, t) => {
					if (!t) return {};
					const s = I.prices;
					O(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const r = _(e, t);
					return r && r.price && r.currency && (s[r.currency] = r.price), s
				},
				z = (e, t) => {
					const s = e.subreddits.gov.meta[t || ""],
						r = s && s.extra && s.extra.nomenclature || I;
					return {
						prices: S(e, t),
						member: r.member || I.member,
						memberPlural: r.memberPlural || I.memberPlural,
						memberAlt: r.memberAlt || I.memberAlt,
						memberAltPlural: r.memberAltPlural || I.memberAltPlural,
						membership: r.membership || I.membership,
						membershipAlt: r.membershipAlt || I.membershipAlt
					}
				},
				P = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				N = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				B = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				R = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				T = (e, t, s) => {
					const n = "replyToPost" !== s && Object(p.a)(e, {
						commentId: s
					});
					if (!!n && Object(a.a)(n)) return !0;
					if (t && Object(h.m)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const o = r.d.spGiphy(e),
						i = R(e, t);
					return o && i
				},
				M = (e, t, s) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[s]
					}
				},
				U = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput.03542d7eade9da6c048a.js.map