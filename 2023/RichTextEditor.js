// https://www.redditstatic.com/desktop2x/RichTextEditor.ee65616dd19e47ef3de3.js
// Retrieved at 6/7/2023, 12:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RichTextEditor", "ContributorRequestButton"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, n) {
			var o, s, r;
			s = [t, e], void 0 === (r = "function" == typeof(o = function(e, t) {
				"use strict";
				var n, o, s = "function" == typeof Map ? new Map : (n = [], o = [], {
						has: function(e) {
							return n.indexOf(e) > -1
						},
						get: function(e) {
							return o[n.indexOf(e)]
						},
						set: function(e, t) {
							-1 === n.indexOf(e) && (n.push(e), o.push(t))
						},
						delete: function(e) {
							var t = n.indexOf(e);
							t > -1 && (n.splice(t, 1), o.splice(t, 1))
						}
					}),
					r = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (l) {
					r = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function i(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !s.has(e)) {
						var t, n = null,
							o = e.clientWidth,
							i = null,
							a = function() {
								e.clientWidth !== o && u()
							},
							d = function(t) {
								window.removeEventListener("resize", a, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", d, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(n) {
									e.style[n] = t[n]
								})), s.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", d, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", a, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", s.set(e, {
							destroy: d,
							update: u
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), n = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(n) && (n = 0), u()
					}

					function c(t) {
						var n = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
					}

					function l() {
						var t = e.style.height,
							s = function(e) {
								for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
									node: e.parentNode,
									scrollTop: e.parentNode.scrollTop
								}), e = e.parentNode;
								return t
							}(e),
							r = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var i = e.scrollHeight + n;
						0 !== e.scrollHeight ? (e.style.height = i + "px", o = e.clientWidth, s.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), r && (document.documentElement.scrollTop = r)) : e.style.height = t
					}

					function u() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							n = window.getComputedStyle(e, null),
							o = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
						if (o !== t ? "hidden" === n.overflowY && (c("scroll"), l(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (c("hidden"), l(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), i !== o) {
							i = o;
							var s = r("autosize:resized");
							try {
								e.dispatchEvent(s)
							} catch (a) {}
						}
					}
				}

				function a(e) {
					var t = s.get(e);
					t && t.destroy()
				}

				function d(e) {
					var t = s.get(e);
					t && t.update()
				}
				var c = null;
				"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((c = function(e) {
					return e
				}).destroy = function(e) {
					return e
				}, c.update = function(e) {
					return e
				}) : ((c = function(e, t) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
						return i(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
				}, c.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], d), e
				}), t.exports = c
			}) ? o.apply(t, s) : o) || (e.exports = r)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, n) {
				return ((n = window.getComputedStyle) ? n(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/draft-js/dist/Draft.css": function(e, t, n) {},
		"./node_modules/line-height/lib/line-height.js": function(e, t, n) {
			var o = n("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = o(e, "line-height"),
					n = parseFloat(t, 10);
				if (t === n + "") {
					var s = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = o(e, "line-height"), n = parseFloat(t, 10), s ? e.style.lineHeight = s : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (n *= 4, n /= 3) : -1 !== t.indexOf("mm") ? (n *= 96, n /= 25.4) : -1 !== t.indexOf("cm") ? (n *= 96, n /= 2.54) : -1 !== t.indexOf("in") ? n *= 96 : -1 !== t.indexOf("pc") && (n *= 16), n = Math.round(n), "normal" === t) {
					var r = e.nodeName,
						i = document.createElement(r);
					i.innerHTML = "&nbsp;", "TEXTAREA" === r.toUpperCase() && i.setAttribute("rows", "1");
					var a = o(e, "font-size");
					i.style.fontSize = a, i.style.padding = "0px", i.style.border = "0px";
					var d = document.body;
					d.appendChild(i), n = i.offsetHeight, d.removeChild(i)
				}
				return n
			}
		},
		"./node_modules/linkify-it/index.js": function(e, t, n) {
			"use strict";

			function o(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(n) {
						e[n] = t[n]
					}))
				})), e
			}

			function s(e) {
				return Object.prototype.toString.call(e)
			}

			function r(e) {
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
			var d = {
					"http:": {
						validate: function(e, t, n) {
							var o = e.slice(t);
							return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i")), n.re.http.test(o) ? o.match(n.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, n) {
							var o = e.slice(t);
							return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i")), n.re.no_http.test(o) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : o.match(n.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, n) {
							var o = e.slice(t);
							return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i")), n.re.mailto.test(o) ? o.match(n.re.mailto)[0].length : 0
						}
					}
				},
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = n("./node_modules/linkify-it/lib/re.js")(e.__opts__),
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
					var n = e.__schemas__[t];
					if (null !== n) {
						var o = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = o, "[object Object]" === s(n)) return ! function(e) {
							return "[object RegExp]" === s(e)
						}(n.validate) ? r(n.validate) ? o.validate = n.validate : l(t, n) : o.validate = function(e) {
							return function(t, n) {
								var o = t.slice(n);
								return e.test(o) ? o.match(e)[0].length : 0
							}
						}(n.validate), void(r(n.normalize) ? o.normalize = n.normalize : n.normalize ? l(t, n) : o.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === s(e)
						}(n) ? l(t, n): d.push(t)
					}
				})), d.forEach((function(t) {
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
				var n = e.__index__,
					o = e.__last_index__,
					s = e.__text_cache__.slice(n, o);
				this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = o + t, this.raw = s, this.text = s, this.url = s
			}

			function p(e, t) {
				var n = new m(e, t);
				return e.__compiled__[n.schema].normalize(n, e), n
			}

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var n;
				t || (n = e, Object.keys(n || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = o({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = o({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = o(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, n, o, s, r, i, a, d;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (s = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (r = n.index + n[1].length, (this.__index__ < 0 || r < this.__index__) && (this.__schema__ = "", this.__index__ = r, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (o = e.match(this.re.email_fuzzy)) && (r = o.index + o[1].length, i = o.index + o[0].length, (this.__index__ < 0 || r < this.__index__ || r === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = r, this.__last_index__ = i)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, n) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					n = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (n.push(p(this, t)), t = this.__last_index__);
				for (var o = t ? e.slice(t) : e; this.test(o);) n.push(p(this, t)), o = o.slice(this.__last_index__), t += this.__last_index__;
				return n.length ? n : null
			}, h.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, n) {
					return e !== n[t - 1]
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
			}, h.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, h.prototype.onCompile = function() {}, e.exports = h
		},
		"./node_modules/linkify-it/lib/re.js": function(e, t, n) {
			"use strict";
			e.exports = function(e) {
				var t = {};
				t.src_Any = n("./node_modules/uc.micro/properties/Any/regex.js").source, t.src_Cc = n("./node_modules/uc.micro/categories/Cc/regex.js").source, t.src_Z = n("./node_modules/uc.micro/categories/Z/regex.js").source, t.src_P = n("./node_modules/uc.micro/categories/P/regex.js").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
				return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
			}
		},
		"./node_modules/lodash/_arrayReduceRight.js": function(e, t) {
			e.exports = function(e, t, n, o) {
				var s = null == e ? 0 : e.length;
				for (o && s && (n = e[--s]); s--;) n = t(n, e[s], s, e);
				return n
			}
		},
		"./node_modules/lodash/_baseEachRight.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseForOwnRight.js"),
				s = n("./node_modules/lodash/_createBaseEach.js")(o, !0);
			e.exports = s
		},
		"./node_modules/lodash/_baseExtremum.js": function(e, t, n) {
			var o = n("./node_modules/lodash/isSymbol.js");
			e.exports = function(e, t, n) {
				for (var s = -1, r = e.length; ++s < r;) {
					var i = e[s],
						a = t(i);
					if (null != a && (void 0 === d ? a == a && !o(a) : n(a, d))) var d = a,
						c = i
				}
				return c
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = [];
				return o(e, (function(e, o, s) {
					t(e, o, s) && n.push(e)
				})), n
			}
		},
		"./node_modules/lodash/_baseForOwnRight.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseForRight.js"),
				s = n("./node_modules/lodash/keys.js");
			e.exports = function(e, t) {
				return e && o(e, t, s)
			}
		},
		"./node_modules/lodash/_baseForRight.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_createBaseFor.js")(!0);
			e.exports = o
		},
		"./node_modules/lodash/_baseGt.js": function(e, t) {
			e.exports = function(e, t) {
				return e > t
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				o = Math.max;
			e.exports = function(e, t, s, r) {
				for (var i = -1, a = o(n((t - e) / (s || 1)), 0), d = Array(a); a--;) d[r ? a : ++i] = e, e += s;
				return d
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, t, n, s) {
				for (var r = e.length, i = s ? r : -1;
					(s ? i-- : ++i < r) && t(e[i], i, e););
				return n ? o(e, s ? 0 : i, s ? i + 1 : r) : o(e, s ? i + 1 : 0, s ? r : i)
			}
		},
		"./node_modules/lodash/_charsEndIndex.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, t) {
				for (var n = e.length; n-- && o(t, e[n], 0) > -1;);
				return n
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseRange.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, i) {
					return i && "number" != typeof i && s(t, n, i) && (n = i = void 0), t = r(t), void 0 === n ? (n = t, t = 0) : n = r(n), i = void 0 === i ? t < n ? 1 : -1 : r(i), o(t, n, i, e)
				}
			}
		},
		"./node_modules/lodash/_escapeHtmlChar.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_basePropertyOf.js")({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			});
			e.exports = o
		},
		"./node_modules/lodash/chunk.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseSlice.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toInteger.js"),
				i = Math.ceil,
				a = Math.max;
			e.exports = function(e, t, n) {
				t = (n ? s(e, t, n) : void 0 === t) ? 1 : a(r(t), 0);
				var d = null == e ? 0 : e.length;
				if (!d || t < 1) return [];
				for (var c = 0, l = 0, u = Array(i(d / t)); c < d;) u[l++] = o(e, c, c += t);
				return u
			}
		},
		"./node_modules/lodash/dropRightWhile.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? s(e, o(t, 3), !0, !0) : []
			}
		},
		"./node_modules/lodash/escape.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_escapeHtmlChar.js"),
				s = n("./node_modules/lodash/toString.js"),
				r = /[&<>"']/g,
				i = RegExp(r.source);
			e.exports = function(e) {
				return (e = s(e)) && i.test(e) ? e.replace(r, o) : e
			}
		},
		"./node_modules/lodash/filter.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayFilter.js"),
				s = n("./node_modules/lodash/_baseFilter.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? o : s)(e, r(t, 3))
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseFlatten.js"),
				s = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return o(s(e, t), 1)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseIndexOf.js"),
				s = n("./node_modules/lodash/isArrayLike.js"),
				r = n("./node_modules/lodash/isString.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				a = n("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, n, c) {
				e = s(e) ? e : a(e), n = n && !c ? i(n) : 0;
				var l = e.length;
				return n < 0 && (n = d(l + n, 0)), r(e) ? n <= l && e.indexOf(t, n) > -1 : !!l && o(e, t, n) > -1
			}
		},
		"./node_modules/lodash/map.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayMap.js"),
				s = n("./node_modules/lodash/_baseIteratee.js"),
				r = n("./node_modules/lodash/_baseMap.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? o : r)(e, s(t, 3))
			}
		},
		"./node_modules/lodash/maxBy.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseExtremum.js"),
				s = n("./node_modules/lodash/_baseGt.js"),
				r = n("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return e && e.length ? o(e, r(t, 2), s) : void 0
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_createRange.js")();
			e.exports = o
		},
		"./node_modules/lodash/reduceRight.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayReduceRight.js"),
				s = n("./node_modules/lodash/_baseEachRight.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var d = a(e) ? o : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), n, c, s)
			}
		},
		"./node_modules/lodash/takeWhile.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? s(e, o(t, 3)) : []
			}
		},
		"./node_modules/lodash/trimEnd.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseToString.js"),
				s = n("./node_modules/lodash/_castSlice.js"),
				r = n("./node_modules/lodash/_charsEndIndex.js"),
				i = n("./node_modules/lodash/_stringToArray.js"),
				a = n("./node_modules/lodash/toString.js"),
				d = n("./node_modules/lodash/_trimmedEndIndex.js");
			e.exports = function(e, t, n) {
				if ((e = a(e)) && (n || void 0 === t)) return e.slice(0, d(e) + 1);
				if (!e || !(t = o(t))) return e;
				var c = i(e),
					l = r(c, i(t)) + 1;
				return s(c, 0, l).join("")
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var o, s, r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				},
				i = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
						}
					}
					return function(t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
					}
				}(),
				a = u(n("./node_modules/react/index.js")),
				d = u(n("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				c = u(n("./node_modules/autosize/dist/autosize.js")),
				l = u(n("./node_modules/line-height/lib/line-height.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function m(e, t) {
				var n = {};
				for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
				return n
			}

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var h = (s = o = function(e) {
				function t() {
					var e, n, o;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var s = arguments.length, i = Array(s), a = 0; a < s; a++) i[a] = arguments[a];
					return n = o = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), o.state = {
						lineHeight: null
					}, o.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), o.textarea.dispatchEvent(t)
					}, o.getValue = function(e) {
						var t = e.valueLink,
							n = e.value;
						return t ? t.value : n
					}, o.updateLineHeight = function() {
						o.setState({
							lineHeight: (0, l.default)(o.textarea)
						})
					}, o.onChange = function(e) {
						o.currentValue = e.target.value, o.props.onChange && o.props.onChange(e)
					}, o.saveDOMNodeRef = function(e) {
						var t = o.props.innerRef;
						t && t(e), o.textarea = e
					}, o.getLocals = function() {
						var e = o,
							t = e.props,
							n = (t.onResize, t.maxRows),
							s = (t.onChange, t.style),
							i = (t.innerRef, m(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							a = e.state.lineHeight,
							d = e.saveDOMNodeRef,
							c = n && a ? a * n : null;
						return r({}, i, {
							saveDOMNodeRef: d,
							style: c ? r({}, s, {
								maxHeight: c
							}) : s,
							onChange: o.onChange
						})
					}, p(o, n)
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), i(t, [{
					key: "componentDidMount",
					value: function() {
						var e = this,
							t = this.props,
							n = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, c.default)(e.textarea)
						}))) : (0, c.default)(this.textarea), n && this.textarea.addEventListener("autosize:resized", this.props.onResize)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.props.onResize && this.textarea.removeEventListener("autosize:resized", this.props.onResize), this.dispatchEvent("autosize:destroy")
					}
				}, {
					key: "render",
					value: function() {
						var e = this.getLocals(),
							t = e.children,
							n = e.saveDOMNodeRef,
							o = m(e, ["children", "saveDOMNodeRef"]);
						return a.default.createElement("textarea", r({}, o, {
							ref: n
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(a.default.Component), o.defaultProps = {
				rows: 1
			}, s);
			t.default = h, h.propTypes = {
				rows: d.default.number,
				maxRows: d.default.number,
				onResize: d.default.func,
				innerRef: d.default.func
			}
		},
		"./node_modules/react-autosize-textarea/lib/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var o, s = n("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				r = (o = s) && o.__esModule ? o : {
					default: o
				};
			t.default = r.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function r() {}
			r.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, r, i) {
					if (i !== o) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var n = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: r,
					resetWarningCache: s
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
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
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return v
			}));
			var o = n("./node_modules/linkify-it/index.js"),
				s = n.n(o),
				r = n("./node_modules/tlds/index.js"),
				i = n.n(r),
				a = n("./src/lib/linkMatchers/customLinks.ts"),
				d = n("./node_modules/lodash/values.js"),
				c = n.n(d);
			const l = e => c()(a.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				h = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				b = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				f = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				_ = s()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				g = s()().tlds(i.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				x = p.normalize;
			p.normalize = e => {
				x.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const E = (e, t) => {
					return (_.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				y = e => {
					return [...f.match(e) || [], ...h.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				C = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				v = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			}));
			const o = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				r = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/me/constants.ts");
			const c = Object(a.a)(d.a),
				l = Object(a.a)(d.b),
				u = Object(a.a)(d.c),
				m = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					const a = e && e.includeMemberships || !1,
						d = e && e.forceFetch || !1,
						l = n();
					if (!l.economics.me.fetched || a && !l.economics.me.data.specialMemberships || d) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), a);
						if (e.ok) {
							const n = e.body;
							a && !n.specialMemberships && (n.specialMemberships = {}), t(c(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(s.b)({
								endpoint: t,
								method: o.pb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				r = n("./src/reddit/models/Toast/index.ts");

			function i(e, t) {
				e(Object(o.f)({
					duration: 5e3,
					kind: r.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			})), n.d(t, "a", (function() {
				return z
			})), n.d(t, "c", (function() {
				return A
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				p = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const h = e => !(!e.document || !e.document.length),
				b = e => ({
					text: null,
					richtext_json: JSON.stringify({
						document: e.document
					})
				}),
				f = e => ({
					text: e.markdown,
					return_rtjson: !0
				}),
				_ = e => ({
					api_type: "json",
					show_error_list: !0,
					thing_id: e.post.id,
					validate_on_submit: !0,
					...h(e) ? b(e) : f(e)
				});
			var g = (e, t) => Object(d.a)(Object(c.a)(e, [l.a]), {
					endpoint: Object(p.a)(Object(u.a)(`${e.apiUrl}/api/editusertext`)),
					method: a.pb.POST,
					data: _(t)
				}).then(m.b),
				x = n("./src/reddit/helpers/overlay/index.ts"),
				E = n("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				y = n("./src/reddit/helpers/trackers/lightbox.ts"),
				C = n("./src/reddit/helpers/trackers/post.ts"),
				v = n("./src/reddit/helpers/trackers/postComposer.ts"),
				k = n("./src/reddit/models/Media/index.ts"),
				w = n("./src/reddit/models/PostCreationForm/index.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/posts.ts"),
				T = n("./src/reddit/actions/postCreation/constants.ts"),
				F = n("./src/reddit/actions/postCreation/general.ts");
			const R = Object(s.a)(T.l),
				S = Object(s.a)(T.m),
				D = Object(s.a)(T.x),
				M = Object(s.a)(T.I),
				I = Object(s.a)(T.J),
				z = (e, t) => async (n, o, s) => {
					let {
						apiContext: r
					} = s;
					const i = o(),
						a = Object(O.F)(i, {
							postId: e
						});
					t ? (n(Object(x.a)(a.permalink)), Object(y.e)(e, "edit")(i)) : Object(C.h)(e, "edit")(i);
					const {
						media: d
					} = a;
					if (!d) return;
					let c, l = w.i.RICH_TEXT,
						u = "";
					d.type === k.o.TEXT ? (l = w.i.MARKDOWN, u = d.content) : d.type === k.o.RTJSON && (u = (l = d.rteMode || w.i.RICH_TEXT) === w.i.MARKDOWN ? d.markdownContent : d.richtextContent, c = d.mediaMetadata || void 0), n(M({
						editorMode: l,
						mediaMetadata: c,
						postContent: u,
						postId: e
					}))
				}, A = e => async (t, n, s) => {
					let {
						apiContext: a
					} = s;
					const {
						post: d
					} = e, c = !d.media || "rtjson" !== d.media.type && "text" !== d.media.type ? "" : d.media.rteMode;
					v.F(n(), Object(F.o)(c)), t(D(d.id));
					const l = await g(a(), e),
						u = !1 === l.body.success;
					if (t(R(d.id)), l.ok && !u) {
						t(Object(i.f)({
							kind: j.b.SuccessCommunity,
							text: o.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(I(d.id));
						const e = Object(E.a)(l.body);
						t(Object(r.Q)({
							[d.id]: e
						}))
					} else t(S(l.error))
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return M
			})), n.d(t, "b", (function() {
				return z
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "d", (function() {
				return N
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/formatApiError/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/actions/upload.ts"),
				l = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				u = n("./src/lib/makeApiRequest/index.ts"),
				m = n("./src/lib/makeGqlRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				b = n("./src/redditGQL/operations/CreateMediaUploadLease.json");
			var f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = n("./src/reddit/helpers/imagePreview/index.ts"),
				g = n("./src/reddit/helpers/media/index.ts"),
				x = n("./src/reddit/models/Upload/index.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				y = n("./src/telemetry/index.ts");
			const C = e => ({
				...E.o(e),
				screen: E.cb(e),
				profile: E.T(e),
				subreddit: E.lb(e)
			});
			var v = n("./src/reddit/helpers/trackers/postComposer.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				w = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/postCreations.ts"),
				O = n("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				T = n("./src/reddit/actions/postCreation/constants.ts"),
				F = n("./src/reddit/actions/postCreation/general.ts");
			const R = Object(a.a)(T.u),
				S = Object(a.a)(T.v),
				D = Object(a.a)(T.t),
				M = e => async (t, n) => {
					t(R());
					const o = e.map(e => {
						let {
							url: n,
							uploadKey: o
						} = e;
						const s = Object(g.b)(Object(g.d)(n), "poster.png");
						return t(P(s, o, !0, !1))
					});
					await Promise.all(o);
					const s = n().uploads,
						r = e.map(e => {
							let {
								uploadKey: t
							} = e;
							return s[t]
						}).find(e => e.status !== x.a.SUCCESS);
					t(r ? D(r.error) : S())
				}, I = (e, t) => ({
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
			const z = "RTE",
				A = "GALLERY",
				P = (e, t, n, s, i, a, l, k) => async (T, F, R) => {
					let {
						apiContext: S,
						gqlContext: D
					} = R;
					const M = Object(j.h)(F()),
						z = Date.now();
					let A = null,
						P = !1,
						B = !1,
						L = !1;
					const N = e => {
						if (!L && i && P) {
							L = !0;
							const n = F(),
								o = Date.now() - z,
								s = Object(f.c)(f.a.PostComposer);
							B ? (async e => {
								let {
									state: t,
									uploadKey: n,
									assetId: o,
									isCanceled: s,
									fileSource: r,
									uploadDuration: i,
									correlationId: a
								} = e;
								const d = t.uploads[n],
									c = s || d.status === x.a.CANCELED,
									{
										file: l,
										url: u,
										metadata: m,
										error: p
									} = d,
									h = m.mimetype || l.type,
									b = h.startsWith("video/"),
									f = d.status === x.a.SUCCESS;
								let _ = "";
								p ? _ = JSON.stringify(p) : c && (_ = "canceled");
								const g = {
									width: m.width,
									height: m.height,
									duration: m.videoDuration && Math.round(1e3 * m.videoDuration)
								};
								Object(y.a)({
									source: "post_composer",
									action: "upload",
									correlationId: a,
									noun: b ? "video" : "image",
									...C(t),
									actionInfo: {
										...E.d(t),
										success: f,
										..._ ? {
											reason: _
										} : {}
									},
									media: {
										mimetype: h,
										uploadDuration: i,
										source: r,
										fileName: l.name,
										size: l.size,
										type: b ? "video" : "image",
										...o ? {
											id: o
										} : {},
										...u ? {
											url: u
										} : {},
										...g
									}
								})
							})({
								state: n,
								uploadKey: t,
								assetId: A,
								isCanceled: e,
								fileSource: i,
								uploadDuration: o,
								correlationId: s
							}) : v.E(n, t)
						}
					};
					return await T(Object(c.l)(e, t, async f => {
						var x, E, y, C;
						P = !0, Object(c.k)(f.id, () => {
							N(!0)
						});
						const {
							error: v,
							metadata: j
						} = await async function(e, t, n, s, i) {
							const a = s && s.allowedPostTypes,
								d = s && s.name,
								c = await Object(g.h)(e) || e.type,
								l = Object(g.c)(e) || void 0;
							if (!l) return I("UNSUPPORTED_BROWSER");
							const u = {
								localUrl: l,
								mimetype: c,
								size: e.size
							};
							if (!c || !Object(g.k)(c)) return {
								error: {
									type: r.Z
								}
							};
							if (c.startsWith("image/")) {
								if (t && n && a && !a.images) {
									const e = o.fbt._("Images are not allowed in r/{subredditName}", [o.fbt._param("subredditName", d)], {
										hk: "3C2E7Q"
									});
									return I(r.Z, e)
								}
								if ("image/gif" === c) {
									if (e.size > r.fb) return I(r.O)
								} else if (e.size > r.hb) return I(r.X);
								const s = await Object(_.a)(l);
								if (i && (s.width < i || s.height < i)) {
									const e = o.fbt._("Image must be {min_image_width}x{min_image_height} pixels or larger.", [o.fbt._param("min_image_width", i.toString()), o.fbt._param("min_image_height", i.toString())], {
										hk: "2WFKgs"
									});
									return I(r.W, e)
								}
								u.width = s.width, u.height = s.height
							} else if (c.startsWith("video/")) {
								if (e.size > r.lb) return I(r.vc);
								let t;
								try {
									t = await Object(g.j)(l, !0)
								} catch (m) {
									return I(r.Z)
								}
								if (a) {
									const {
										videos: e,
										images: n
									} = a;
									if (n && !e && t.duration > r.mb) {
										const e = o.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [o.fbt._param("subredditName", d)], {
											hk: "46ULiz"
										});
										return I(r.Z, e)
									}
									if (!n && !e) {
										const e = o.fbt._("Videos are not allowed in r/{subredditName}", [o.fbt._param("subredditName", d)], {
											hk: "4uTUZb"
										});
										return I(r.Z, e)
									}
								}
								if (t.duration > r.kb) {
									const e = o.fbt._("Video is too long. Maximum video length is {duration} minutes.", [o.fbt._param("duration", (r.kb / 60).toString())], {
										hk: "20nB6Q"
									});
									return I(r.Z, e)
								}
								if (t.duration < r.sb) {
									const e = o.fbt._("Video is too short. Minimum video length is {duration} seconds.", [o.fbt._param("duration", r.sb.toString())], {
										hk: "49PSW8"
									});
									return I(r.Z, e)
								}
								if (0 === t.height || 0 === t.width) {
									const e = o.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return I(r.Z, e)
								}
								if (t.height < r.tb || t.width < r.ub) {
									const e = o.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [o.fbt._param("min_video_width", r.ub.toString()), o.fbt._param("min_video_height", r.tb.toString())], {
										hk: "2HSUGl"
									});
									return I(r.Z, e)
								}
								if (e.size / t.duration < r.rb) {
									const e = o.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [o.fbt._param("min_bitrate", (r.rb / r.ab).toString())], {
										hk: "1ehgDE"
									});
									return I(r.Z, e)
								}
								u.height = t.height, u.width = t.width, u.videoDuration = t.duration, u.videoFirstFrameUrl = t.firstFrame.dataUrl
							}
							return {
								metadata: u
							}
						}(e, n, s, M, k);
						if (v || !j) return {
							error: v
						};
						if (T(Object(c.m)({
								key: t,
								metadata: {
									fileSource: i,
									...j
								}
							})), B = !0, a && a(), l) {
							const e = j.mimetype,
								t = e && r.U[e];
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
								})(D(), t);
								if (e.ok) {
									const t = e.body,
										n = (null === (x = t.data.createMediaUploadLease) || void 0 === x ? void 0 : x.uploadLease.uploadLeaseUrl) || "",
										o = Object(O.a)({
											uploadLeaseUrl: n,
											uploadLeaseHeaders: null === (E = t.data.createMediaUploadLease) || void 0 === E ? void 0 : E.uploadLease.uploadLeaseHeaders
										});
									return A = (null === (y = t.data.createMediaUploadLease) || void 0 === y ? void 0 : y.mediaId) || null, {
										uploadLease: o
									}
								} {
									const t = null === (C = e.body.data.createMediaUploadLease) || void 0 === C ? void 0 : C.errors;
									let n = null;
									return t && (n = {
										fields: [{
											field: t[0].__typename || "",
											msg: t[0].message
										}],
										type: t[0].__typename || ""
									}), {
										error: n || void 0
									}
								}
							}
							return T(Object(d.f)({
								kind: w.b.Error,
								text: o.fbt._("Only .jpeg and .png image types are are allowed", null, {
									hk: "30Ms4V"
								}),
								duration: 6e3
							})), {
								error: void 0
							}
						}
						const F = e.name,
							R = await (async (e, t, n) => Object(u.a)(Object(p.a)(e, [h.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: r.pb.POST,
								data: {
									filepath: t,
									mimetype: n
								}
							}))(S(), F, j.mimetype);
						return R.ok ? (A = R.body.asset.asset_id, {
							uploadLease: R.body.args
						}) : {
							error: R.error || void 0
						}
					}, !0)), N(!1), F().uploads[t] || null
				}, B = (e, t) => async (n, o) => {
					const s = o().uploads[e];
					s && !Object(x.c)(s) && await n(P(s.file, s.key, t, !1, s.metadata.fileSource, void 0))
				}, L = (e, t, n, r, a, c) => async (l, u) => {
					const m = e.map((e, o) => new Promise(async o => {
							const i = Object(x.d)(n, Object(s.a)().slice(-6));
							await l(P(e, i, r, !0, t, () => o({
								uploadKey: i,
								isValid: !0
							}), a, c)), o({
								uploadKey: i,
								isValid: !1
							})
						})),
						p = await Promise.all(m),
						h = p.map(e => e.uploadKey);
					return l(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (n, s) => {
							const {
								uploads: r
							} = s(), a = e.map(e => r[e]).filter(e => e.status === x.a.FAILED && !e.metadata.mimetype).map(e => e.error), c = a.length > t ? t - 1 : a.length, l = a.length - c;
							a.slice(0, c).forEach(e => n(Object(d.f)({
								duration: d.a,
								kind: w.b.Error,
								text: Object(i.a)(e)
							}))), l > 0 && n(Object(d.f)({
								duration: d.a,
								kind: w.b.Error,
								text: o.fbt._({
									"*": "Couldn't add {number} more files",
									_1: "Couldn't add 1 more file"
								}, [o.fbt._plural(l, "number")], {
									hk: "2fQwvl"
								})
							}))
						}
					}(h)), p.filter(e => e.isValid).map(e => e.uploadKey)
				}, N = (e, t) => async (n, s) => {
					const r = s(),
						i = Object(j.Z)(r),
						{
							items: a
						} = i,
						u = !a.length && 1 === e.length,
						m = Object(j.P)(r) && !u;
					let p = !1,
						h = e;
					if (m) {
						if (Object(k.x)(i)) return void n(Object(d.f)({
							kind: w.b.Error,
							text: o.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						h.some(e => Object(g.n)(e.type)) && n(Object(d.f)({
							duration: d.a,
							kind: w.b.Error,
							text: o.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), h = h.filter(e => Object(g.m)(e.type));
						const e = Math.max(0, l.b - a.length);
						h.length > e && (n(Object(d.f)({
							kind: w.b.Error,
							text: o.fbt._("You have hit the limit of {images_limit} images", [o.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), h = h.slice(0, e))
					} else h = h.slice(0, 1), p = !0, n(Object(c.j)(A, !0));
					const b = await n(L(h, t, A, !0));
					if (!b.length) return;
					const f = b.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						_ = 0 === a.length;
					n(Object(F.d)({
						...i,
						items: p ? f : [...a, ...f],
						selectedKey: _ ? b[0] : b[b.length - 1]
					}))
				}
		},
		"./src/reddit/actions/postCreation/postGuidance.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return _
			}));
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				i = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/PostGuidanceValidation.json"),
				c = (e, t) => Object(a.a)(e, {
					...d,
					variables: t
				}).then(e => {
					var t, n;
					if (e.ok) {
						const o = null === (n = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === n ? void 0 : n.validatePostGuidanceRules;
						return {
							...e,
							body: {
								data: {
									...o || {}
								}
							}
						}
					}
					return e
				}),
				l = n("./src/reddit/endpoints/subreddit/about.ts"),
				u = n("./src/reddit/models/PostCreationForm/index.ts"),
				m = n("./src/reddit/selectors/postCreations.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(s.a)(h.D),
				f = e => async (t, n, s) => {
					let {
						gqlContext: a
					} = s;
					const d = n(),
						h = Object(i.u)(d, {
							pageLayer: e
						});
					if (!h) return;
					let f = Object(p.I)(n(), h.name);
					if (!f) {
						const e = await Object(l.a)(a(), h.name, !1);
						if (e.ok) {
							f = e.body.data.subreddit.id
						}
						if (!f) return
					}
					const _ = Object(m.q)(d, {
							field: o.Cb.TITLE
						}),
						g = Object(m.n)(d),
						x = Object(m.lb)(d),
						E = g === u.i.RICH_TEXT ? r.a.getRawText(x, " ") : Object(m.Y)(d),
						y = await c(a(), {
							input: {
								subredditId: f,
								postTitle: (null == _ ? void 0 : _.title) || "",
								postBody: E
							}
						});
					if (y.ok) {
						const e = y.body;
						t(b(null == e ? void 0 : e.data))
					}
				}, _ = (e, t, n) => async (o, s, r) => {
					let {
						gqlContext: i
					} = r;
					const a = await c(i(), {
						input: {
							subredditId: e,
							postTitle: t,
							postBody: n
						}
					});
					if (a.ok) {
						const e = a.body;
						o(b(null == e ? void 0 : e.data))
					}
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				s = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				r = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/upload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "l", (function() {
				return T
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "j", (function() {
				return R
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/get.js"),
				s = n.n(o),
				r = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/uploadToS3/index.ts"),
				d = n("./src/reddit/models/Upload/index.ts");
			const c = "UPLOAD_PENDING",
				l = "UPLOAD_UPLOADING",
				u = "UPLOAD_METADATA_CHANGED",
				m = "UPLOAD_PROGRESS",
				p = "UPLOAD_SUCCESS",
				h = "UPLOAD_FAILED",
				b = "UPLOAD_CANCELED",
				f = "UPLOAD_REMOVED",
				_ = Object(i.a)(c),
				g = Object(i.a)(l),
				x = Object(i.a)(u),
				E = Object(i.a)(m),
				y = Object(i.a)(p),
				C = Object(i.a)(h),
				v = Object(i.a)(b),
				k = Object(i.a)(f),
				w = new Map,
				j = (e, t) => {
					const n = w.get(e) || [];
					n.push(t), w.set(e, n)
				},
				O = (e, t) => {
					const n = w.get(e);
					n && n.forEach(n => n(e, t)), w.delete(e)
				},
				T = function(e, t, n) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (i, c) => {
						const l = t;
						if (c().uploads[l] && Object(d.c)(c().uploads[l])) return;
						const u = Object(r.a)(),
							m = () => {
								const e = c().uploads[l];
								return !e || e.id !== u || e.status === d.a.CANCELED
							};
						i(_({
							key: l,
							id: u,
							file: e
						}));
						const {
							uploadLease: p,
							error: h
						} = await n(c().uploads[l]);
						if (m()) return;
						if (h || !p) return void i(C({
							key: l,
							error: h
						}));
						let b;
						j(u, () => {
							b && b.abort()
						}), i(g({
							key: l
						}));
						const f = await Object(a.a)(e, p, e => (b = e, o && e.on("progress", e => {
							if (!m() && "upload" === e.direction) {
								const t = {
									percent: e.percent,
									total: e.total,
									uploaded: e.loaded
								};
								i(E({
									key: l,
									progress: t
								}))
							}
						}), e));
						if (b = null, !m())
							if (f.ok) {
								const e = decodeURIComponent(f.body.PostResponse.Location);
								i(y({
									key: l,
									url: e
								}))
							} else {
								const e = s()(f, "body.Error.Message.0"),
									t = {
										type: "ERROR",
										...e ? {
											fields: [{
												field: "0",
												msg: e
											}]
										} : {}
									};
								i(C({
									key: l,
									error: t
								}))
							}
					}
				},
				F = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (n, o) => {
						const s = o().uploads[e];
						s && (O(s.id, t), n(t ? k({
							key: e
						}) : v({
							key: e
						})))
					}
				},
				R = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (n, o) => {
						Object.keys(o().uploads).forEach(o => {
							o.startsWith(e) && n(F(o, t))
						})
					}
				}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less": function(e, t, n) {
			e.exports = {
				breakout: "_1VBLErIxAjOke05q8yLOyf"
			}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
				a = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t) => 21 * e + 33 + (t ? 10 : 0);
			t.a = e => {
				let {
					breakOut: t,
					depth: n,
					isEditing: o,
					...i
				} = e;
				return s.a.createElement("div", d({
					className: Object(r.a)({
						[a.a.breakout]: t
					}),
					style: {
						left: c(n, o)
					}
				}, i))
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.m.less": function(e, t, n) {
			e.exports = {
				BaseFooterButton: "_2vw1scWo_wiHUpczRL3dho",
				baseFooterButton: "_2vw1scWo_wiHUpczRL3dho",
				SubmitButton: "_22S4OsoDdOqiM-hPTeOURa",
				submitButton: "_22S4OsoDdOqiM-hPTeOURa",
				LoadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				loadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				CancelButton: "cZz52cPDbNgzrR1Oo1k27",
				cancelButton: "cZz52cPDbNgzrR1Oo1k27",
				ButtonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				buttonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				FormFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				formFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				pending: "_5p2VqxvUAZTtPIXr7XU5p"
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				l = n.n(c);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = i.a.wrapped(d.a, "LoadingIcon", l.a), p = i.a.wrapped(a.t, "CancelButton", l.a), h = e => e.preventDefault();
			t.a = e => {
				let {
					pending: t,
					cancelButtonEnabled: n = !0,
					children: o,
					className: i,
					submitButtonText: d,
					canSubmit: c,
					onSubmit: b,
					onCancel: f
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(l.a.FormFooterWrapper, i, {
						[l.a.pending]: t
					})
				}, s.a.createElement("div", {
					className: l.a.ButtonWrapper
				}, s.a.createElement(a.t, {
					className: l.a.SubmitButton,
					size: a.d.XS,
					type: "submit",
					disabled: !c,
					onClick: e => {
						b && b(e)
					},
					onMouseDown: h
				}, t ? s.a.createElement(m, {
					sizePx: 10
				}) : d), n && s.a.createElement(p, {
					priority: a.c.Secondary,
					size: a.d.XS,
					type: "reset",
					disabled: t,
					onClick: f,
					onMouseDown: h
				}, u._("Cancel", null, {
					hk: "2TSLl5"
				}))), o)
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				MarkdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				markdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				Button: "_1Q2Vq3gesOWZA73NbspEiQ",
				button: "_1Q2Vq3gesOWZA73NbspEiQ"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				loadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				CommentHeader: "PN-j_b1WdWATQha3fOgkV",
				commentHeader: "PN-j_b1WdWATQha3fOgkV",
				HelpButton: "MQruKnjMvMoDlmee_nF40",
				helpButton: "MQruKnjMvMoDlmee_nF40",
				SwitchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				switchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				FormHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				formHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				HelpIcon: "_3TI2tdRj3loY834ns393zu",
				helpIcon: "_3TI2tdRj3loY834ns393zu",
				Wrapper: "B0932G-wzdOKwoaSaKsKU",
				wrapper: "B0932G-wzdOKwoaSaKsKU",
				isTopLevelComment: "_3-O087Fe8Gpv51vkui03iG",
				mRedesign: "dDb_knwHdpaUGniyi2rvM",
				FormWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				formWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				ResizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				resizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				mExpanded: "_2FiN5dLqiHVqs1l1NeoU-W",
				FormFooter: "OQubMtSYxy2qH2Q1upQvp",
				formFooter: "OQubMtSYxy2qH2Q1upQvp",
				userIcon: "_1LJWM5yPEtZv26nvbB_mvr",
				CurrentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				currentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				pending: "_1N53zdZlGyvjHMUoXkJa42",
				focused: "_2sPOgUISlhUYTMcHhUPCTP"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return be
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/debounce.js"),
				r = n.n(s),
				i = n("./node_modules/lodash/noop.js"),
				a = n.n(i),
				d = n("./node_modules/react/index.js"),
				c = n.n(d),
				l = n("./node_modules/react-dom/index.js"),
				u = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./src/reddit/actions/comment/authoring.ts"),
				h = n("./src/reddit/components/AuthorLink/index.tsx"),
				b = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				f = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				_ = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				g = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				x = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				E = n("./src/reddit/controls/ErrorText/index.tsx"),
				y = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = n("./src/reddit/icons/svgs/Help/index.tsx"),
				v = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				k = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				w = n("./src/lib/fastdom/index.ts"),
				j = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				O = n.n(j),
				T = n("./src/lib/lessComponent.tsx");
			const F = 310,
				R = T.a.div("Container", O.a);
			class S extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), n = t < F ? "compact" : "full";
						n !== this.state.toolbarType && w.a.write(() => {
							this.setState({
								toolbarType: n
							})
						})
					}
				}
				componentDidMount() {
					w.a.read(this.selectToolbar), window.addEventListener("resize", this.selectToolbar)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.selectToolbar)
				}
				render() {
					return c.a.createElement(R, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var D = n("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				M = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				I = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				z = n.n(I),
				A = n("./src/reddit/controls/Button/index.tsx");
			const P = T.a.wrapped(y.a, "LoadingIcon", z.a),
				B = e => {
					let {
						isFilled: t,
						...n
					} = e;
					return c.a.createElement(P, n)
				},
				L = T.a.div("Wrapper", z.a),
				N = T.a.wrapped(D.a, "MarkdownModeIcon", z.a),
				W = e => {
					let {
						isFilled: t,
						...n
					} = e;
					return c.a.createElement(N, n)
				};
			var U = c.a.memo((function(e) {
					const t = o.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return c.a.createElement(L, null, c.a.createElement(A.t, {
						priority: A.c.Plain,
						size: A.d.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? B : W
					}, c.a.createElement(M.a, {
						text: t
					})))
				})),
				H = n("./src/lib/classNames/index.ts"),
				q = n("./src/reddit/constants/keycodes.ts"),
				G = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				K = n("./src/realtime/GQLSubscription/async.tsx"),
				V = n("./src/reddit/components/UsersCountIndicator/constants.ts"),
				Z = n("./src/reddit/constants/componentSizes.ts"),
				X = n("./src/reddit/constants/componentTestIds.ts"),
				J = n("./src/reddit/selectors/activeModalId.ts"),
				Q = n("./src/reddit/selectors/comments.ts"),
				Y = n("./src/reddit/selectors/editorContent.ts"),
				$ = n("./src/reddit/selectors/experiments/typingIndicators.ts"),
				ee = n("./src/reddit/actions/modal.ts"),
				te = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				ne = n("./src/reddit/models/PostCreationForm/index.ts"),
				oe = n("./src/reddit/models/PostDraft/index.ts"),
				se = n("./src/reddit/models/User/index.ts"),
				re = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				ie = n.n(re);
			const ae = T.a.button("SwitchModeButton", ie.a),
				de = T.a.wrapped(y.a, "LoadingIcon", ie.a),
				ce = T.a.div("CommentHeader", ie.a),
				le = T.a.span("FormHeaderText", ie.a),
				ue = T.a.button("HelpButton", ie.a),
				me = T.a.wrapped(C.a, "HelpIcon", ie.a),
				pe = T.a.wrapped(te.a, "ResizableAutosizeTextarea", ie.a),
				he = T.a.wrapped(x.a, "CurrentUserIcon", ie.a),
				be = e => c.a.createElement(ue, {
					className: e.className,
					onClick: e.onClick
				}, c.a.createElement(me, null)),
				fe = 8,
				_e = 16,
				ge = Object(u.b)(() => Object(m.c)({
					activeModalId: J.a,
					userName: e => e.user.account ? Object(se.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: Q.i,
					isConverting: (e, t) => Object(Y.a)(e, t.draftKey),
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object($.d)(e)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(ee.i)(Object(G.a)(t.draftKey))),
					helpModalToggled: () => e(Object(ee.i)(g.b))
				}));
			class xe extends c.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.realtimeGQLVariables = void 0, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.setUserStoppedTyping = r()(() => this.setState({
						isUserTyping: !1
					}), V.c), this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < Z.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.wrapperHeight || w.a.write(() => {
							this.setState({
								breakOut: e,
								wrapperHeight: t
							})
						})
					}, this.focus = () => {
						this.textAreaRef && this.textAreaRef.focus()
					}, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange && this.props.onChange({
							text: t,
							editorState: null
						}), this.setState(() => ({
							text: t,
							hasChanged: !0,
							showError: !1
						}), () => {
							w.a.read(this.detectBreakout)
						}), this.props.isTypingIndicatorsWriteTestEnabled && (this.state.isUserTyping || this.setState({
							isUserTyping: !0
						}), this.setUserStoppedTyping())
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === oe.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onBlur = e => {
						(!e || e && e.relatedTarget !== this.switchModeBtn) && (this.textAreaRef && this.textAreaRef.blur(), this.props.onFocusChanged(!1))
					}, this.onFocus = () => {
						this.props.onFocus(), this.props.onFocusChanged(!0)
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === q.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: ne.i.MARKDOWN,
							draftType: this.props.draftType,
							editorState: null,
							text: this.getCurrentText(),
							validate: this.props.showWarningModal
						}), this.onBlur()
					}, this.userHasEnteredText = () => {
						const {
							text: e
						} = this.state;
						return !!e.trim()
					}, this.setWrapperRef = e => {
						this.wrapperEl = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setTextAreaRef = e => this.textAreaRef = e;
					const {
						postId: t,
						isTypingIndicatorsWriteTestEnabled: n
					} = e;
					n && (this.realtimeGQLVariables = {
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "USER_IS_TYPING_ON_POST",
								postID: t
							}
						}
					});
					const {
						draftType: s,
						hasError: i,
						initialText: a
					} = e;
					this.state = {
						text: a || "",
						autofocusDisabled: !1,
						hasChanged: !1,
						showError: i,
						breakOut: !1,
						wrapperHeight: void 0,
						formHeight: null,
						cancelModalText: s === oe.c.edit ? o.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : o.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						isUserTyping: !1
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), w.a.read(this.detectBreakout), w.a.write(() => {
						this.props.draft.hasFocus && this.textAreaRef && this.textAreaRef.focus()
					}), this.props.instanceRef && this.props.instanceRef(this)
				}
				componentWillUnmount() {
					this.props.onUnmount({
						text: this.getCurrentText()
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null), this.props.isTypingIndicatorsWriteTestEnabled && this.setUserStoppedTyping.cancel()
				}
				componentDidUpdate(e) {
					const t = e.pending,
						{
							hasError: n,
							pending: o
						} = this.props;
					t && !o && !n ? this.setState({
						text: "",
						showError: !1
					}) : e.hasError !== this.props.hasError && this.setState({
						showError: this.props.hasError
					})
				}
				getCurrentText() {
					const {
						draft: e
					} = this.props, t = e && e.text;
					return this.state.text || t
				}
				getWrapperHeight() {
					if (!this.textAreaRef) return;
					const e = Object(l.findDOMNode)(this.textAreaRef);
					return e instanceof Element ? e.getBoundingClientRect().height + fe + _e + Z.n : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: n,
						className: s,
						disableAutofocus: r,
						depth: i,
						draft: d,
						draftKey: l,
						draftType: u,
						errorMsgs: m,
						pending: x,
						modalSeen: y,
						submitButtonText: C,
						isCommentBoxDesignEnabled: w,
						isExpanded: j,
						isTopLevelComment: O,
						isTypingIndicatorsWriteTestEnabled: T,
						onSwitchMode: F,
						userName: R
					} = this.props, {
						cancelModalText: D,
						showError: M,
						text: I,
						breakOut: z,
						wrapperHeight: A,
						isUserTyping: P
					} = this.state, B = Object(G.a)(l), L = d.draftType === oe.c.edit;
					return c.a.createElement("div", {
						"data-test-id": X.b,
						className: Object(H.a)(ie.a.Wrapper, s, {
							[ie.a.isTopLevelComment]: O,
							[ie.a.mExpanded]: j,
							[ie.a.mRedesign]: w
						}),
						ref: this.setWrapperRef,
						style: {
							height: z ? A : void 0
						}
					}, T && P && c.a.createElement(K.a, {
						variables: this.realtimeGQLVariables,
						onData: a.a,
						queryKey: "userIsTypingOnPost"
					}), !w && O && R && c.a.createElement(ce, null, c.a.createElement(le, null, o.fbt._("Comment as {authorLink}", [o.fbt._param("authorLink", c.a.createElement(h.a, {
						author: R,
						isAuthorDeleted: !1
					}, R))], {
						hk: "4pMWAk"
					}))), c.a.createElement(v.a, {
						breakOut: z,
						depth: i,
						isEditing: L
					}, w && c.a.createElement("div", {
						className: ie.a.userIcon
					}, c.a.createElement(he, null)), c.a.createElement("div", {
						className: Object(H.a)(ie.a.FormWrapper, {
							[ie.a.pending]: x,
							[ie.a.focused]: d.hasFocus
						})
					}, c.a.createElement(pe, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !r,
						disabled: x,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: w ? o.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : o.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: I
					}), (!w || j) && c.a.createElement(k.a, {
						className: ie.a.FormFooter,
						cancelButtonEnabled: u !== oe.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: x,
						submitButtonText: C,
						canSubmit: this.userHasEnteredText()
					}, c.a.createElement(S, null, e => "compact" === e ? c.a.createElement(U, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => F(ne.i.RICH_TEXT, I, l),
						isConverting: this.props.isConverting
					}) : c.a.createElement("div", null, c.a.createElement(ae, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => F(ne.i.RICH_TEXT, I, l)
					}, o.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "ousUG"
					}), this.props.isConverting && c.a.createElement(de, {
						sizePx: 12
					})))), c.a.createElement(be, {
						onClick: this.props.helpModalToggled
					})))), M && Object(E.c)(m), e === B && c.a.createElement(_.a, {
						actionText: o.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: o.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: D,
						onConfirm: () => this.cancelForm(),
						toggleModal: n,
						trackClick: () => {}
					}), e === g.b && c.a.createElement(g.a, {
						withOverlay: !0
					}), e === p.t && c.a.createElement(f.a, {
						onSubmit: this.onSubmit,
						modalSeen: y,
						withOverlay: !0
					}), c.a.createElement(b.a, {
						editKey: l,
						hasValue: !!I
					}))
				}
			}
			t.b = ge(xe)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-router/esm/react-router.js");
			let a = null;
			class d extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						d.blockers.delete(e), d.blockers.size || (a && a(), a = null, window.removeEventListener("beforeunload", d.navigationBlocker))
					}
				}
				componentDidUpdate(e) {
					this.props.skipBlockingOnPageReload ? this.unblock(this.props.editKey) : !e.hasValue && this.props.hasValue ? this.block(this.props.editKey) : e.hasValue && !this.props.hasValue && this.unblock(this.props.editKey)
				}
				componentWillUnmount() {
					this.unblock(this.props.editKey)
				}
				componentDidMount() {
					this.props.hasValue && this.block(this.props.editKey)
				}
				block(e) {
					d.blockers.add(e), a || (window.addEventListener("beforeunload", d.navigationBlocker), a = this.props.history.block(() => {
						const e = this.props.isPostEdit ? o.fbt._("You have a post edit in progress, are you sure you want to discard it?", null, {
							hk: "4u5L7p"
						}) : o.fbt._("You have a comment in progress, are you sure you want to discard it?", null, {
							hk: "rgscd"
						});
						return !!window.confirm(e) && void 0
					}))
				}
				render() {
					return null
				}
			}
			d.blockers = new Set, d.navigationBlocker = e => {
				const t = "Are you sure you want to leave?";
				return e.returnValue = t, t
			}, t.a = Object(i.i)(d)
		},
		"./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				RequestBox: "_2dVm83ugs7xhdLU8UptoxO",
				requestBox: "_2dVm83ugs7xhdLU8UptoxO",
				commentIcon: "_3-cqJ5aJH2EZKxhqY43T9D",
				commentText: "_2o9LnZvm1HYNaUjzmMO8E5",
				requestButton: "_3OvdD2phTivi0gnXR8NPl-"
			}
		},
		"./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				CommentHeader: "_2kZkQ13N-kvhDEJOBd1S1I",
				commentHeader: "_2kZkQ13N-kvhDEJOBd1S1I",
				FormFooter: "RQTXfVRnnTF5ont3w58rx",
				formFooter: "RQTXfVRnnTF5ont3w58rx",
				mRedesign: "fbWRDwlX43TjfA8zsjnFx",
				MarkdownButtonWrapper: "_3SWQgWX2fzvWmGCv463r_-",
				markdownButtonWrapper: "_3SWQgWX2fzvWmGCv463r_-",
				SectionSpacer: "_3rYrfakWyDh7Y1L9ULn4ve",
				sectionSpacer: "_3rYrfakWyDh7Y1L9ULn4ve",
				ToolbarWrapper: "_2YcMhGs5-uIg9Fj4a9J2Xr",
				toolbarWrapper: "_2YcMhGs5-uIg9Fj4a9J2Xr",
				FormWrapper: "_1r4smTyOEZFO91uFIdWW6T",
				formWrapper: "_1r4smTyOEZFO91uFIdWW6T",
				isTopLevelComment: "aUM8DQ_Nz5wL0EJc_wte6",
				isRedesign: "_1kxci6CC2SNpUlvzABIQGP",
				MarkdownButton: "_1Wn5lpE9yF7YQX-XVL6AUI",
				markdownButton: "_1Wn5lpE9yF7YQX-XVL6AUI",
				FormHeaderText: "_2ucWAzao-GLL6qRJ4USwVJ",
				formHeaderText: "_2ucWAzao-GLL6qRJ4USwVJ",
				tooltipTextWrapper: "k-vjguq_GjpAA4aCWemKB"
			}
		},
		"./src/reddit/components/CommentCreation/ToolbarSelector.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1XC-wMQsKPqfaPcfWQCZdW",
				container: "_1XC-wMQsKPqfaPcfWQCZdW"
			}
		},
		"./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/comment/authoring.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/TextButton/index.tsx"),
				p = n("./src/reddit/constants/tracking.ts"),
				h = n("./src/reddit/selectors/telemetry.ts");
			const b = e => ({
					source: "toxicity_modal",
					...h.o(e),
					screen: h.cb(e),
					subreddit: h.lb(e)
				}),
				f = e => t => ({
					action: p.c.VIEW,
					noun: "modal",
					correlationId: e,
					...b(t)
				}),
				_ = e => t => ({
					action: p.c.CLICK,
					noun: "submit",
					correlationId: e,
					...b(t)
				}),
				g = e => t => ({
					action: p.c.CLICK,
					noun: "edit",
					correlationId: e,
					...b(t)
				}),
				x = e => t => ({
					action: p.c.CLICK,
					noun: "close",
					correlationId: e,
					...b(t)
				});
			var E = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = Object(r.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(c.g)(d.t))
				},
				continue: () => {
					t.onSubmit()
				}
			}));
			class v extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: Object(i.a)()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(f(this.state.correlationId))
				}
				render() {
					return s.a.createElement(l.e, null, s.a.createElement(l.i, null, s.a.createElement(E.a, null, s.a.createElement(l.q, null, y._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), s.a.createElement(m.a, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.closeModal()
						}
					}, s.a.createElement(l.b, null)))), s.a.createElement(l.l, null, s.a.createElement(l.p, null, y._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), s.a.createElement(l.g, null, s.a.createElement(l.a, {
						onClick: () => {
							this.props.sendEvent(g(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, y._("Go back and edit", null, {
						hk: "3nGNI7"
					})), s.a.createElement(l.r, {
						onClick: () => {
							this.props.sendEvent(_(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, y._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(a.a)(C(Object(u.c)(v)))
		},
		"./src/reddit/components/CommentCreation/getCancelModalId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = e => `Comment-cancelModal__${e}`
		},
		"./src/reddit/components/CommentCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/actions/comment/authoring.ts"),
				u = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				m = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				b = n("./src/reddit/icons/fonts/Comment/index.tsx"),
				f = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				_ = n("./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less"),
				g = n.n(_);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = p.a.div("RequestBox", g.a);
			var y = () => i.a.createElement(E, null, i.a.createElement(b.a, {
					className: g.a.commentIcon
				}), i.a.createElement("div", {
					className: g.a.commentText
				}, x._("Only approved users can comment in this community.", null, {
					hk: "3oqccc"
				})), i.a.createElement(h.default, {
					className: g.a.requestButton,
					eventSource: f.b.Comment
				})),
				C = n("./node_modules/fbt/lib/FbtPublic.js"),
				v = n("./node_modules/lodash/noop.js"),
				k = n.n(v),
				w = n("./src/lib/classNames/index.ts"),
				j = n("./src/lib/fastdom/index.ts"),
				O = n("./src/lib/memoizeByReference/index.ts"),
				T = n("./src/reddit/components/AuthorLink/index.tsx"),
				F = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				R = n("./src/reddit/components/RichTextEditor/index.tsx"),
				S = n("./src/reddit/featureFlags/index.ts"),
				D = n("./src/reddit/components/CollapseIntoOverflow/index.tsx"),
				M = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				I = n("./src/reddit/helpers/richTextEditor/index.ts"),
				z = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				A = n("./src/reddit/icons/svgs/Smile/index.tsx"),
				P = n("./src/reddit/selectors/gold/enabledFeatures.ts"),
				B = n("./src/reddit/selectors/gold/powerups/index.ts"),
				L = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				N = n("./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less"),
				W = n.n(N);
			const U = Object(d.c)({
				emotes: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(P.a)(e, {
						subredditId: n
					})
				},
				subredditHasCustomEmojis: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(B.a)(e, {
						subredditId: n
					})
				}
			});
			var H = Object(a.b)(U)((function(e) {
					const {
						controlsState: t,
						emotes: n,
						onEmoteButtonClick: o,
						subredditHasCustomEmojis: s
					} = e, r = s ? C.fbt._("Add Emoji", null, {
						hk: "3EV4aU"
					}) : C.fbt._("Add Emote", null, {
						hk: "3dXLr8"
					});
					return i.a.createElement(L.a, {
						Icon: () => i.a.createElement(A.a, {
							className: W.a.smile
						}),
						tooltip: r,
						enabled: t.emote.isEnabled,
						onClick: o
					}, i.a.createElement("div", {
						className: Object(w.a)(W.a.emotes, {
							[W.a.emoteMask]: n.length > 1
						})
					}, n.map(e => i.a.createElement("img", {
						className: W.a.emote,
						key: e.id,
						src: e.emoji.path
					}))))
				})),
				q = n("./src/lib/constants/icons.ts");

			function G(e) {
				const {
					controlsState: t,
					onGifButtonClick: n
				} = e;
				return i.a.createElement(L.a, {
					iconName: q.a.gif_post,
					tooltip: C.fbt._("Add GIF", null, {
						hk: "3uH3vO"
					}),
					disabledTooltip: C.fbt._("Limit one media per comment", null, {
						hk: "4BKWLn"
					}),
					enabled: t.giphy.isEnabled,
					onClick: n
				})
			}
			var K = n("./src/reddit/selectors/comments.ts"),
				V = n("./src/reddit/selectors/experiments/mediaInComments.ts"),
				Z = n("./src/lib/constants/index.ts");

			function X(e) {
				let {
					isImageUploadEnabled: t,
					isGifUploadEnabled: n
				} = e, o = [];
				return t && (o = Array.from(Z.c)), n && (o = [...o, ...Array.from(Z.a)]), o
			}
			var J = n("./src/reddit/hooks/useTracking.ts"),
				Q = n("./src/reddit/selectors/experiments/imageComment.ts"),
				Y = n("./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less"),
				$ = n.n(Y),
				ee = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.tsx");
			const te = p.a.div("SectionSpacer", $.a),
				ne = Object(d.a)(V.b, K.C, P.c, S.d.spGiphy, (e, t, n, o) => e ? !!t || !!o : n);

			function oe(e) {
				const {
					className: t,
					destSubreddit: n,
					editorKey: o,
					editorState: s,
					onChange: d,
					onEmoteButtonClick: c,
					onFilesSelect: l,
					onGifButtonClick: m,
					onOverflowMenuClick: p,
					readOnly: h,
					trackOnClick: b,
					onLinkButtonClick: f,
					userCanUseEmojis: _,
					userCanUseGifs: g
				} = e, x = Object(z.a)(s);
				h && Object(z.b)(x);
				const E = null == n ? void 0 : n.id,
					y = Object(a.e)(e => void 0 !== E && Object(P.b)(e, {
						subredditId: E
					})) && _,
					v = Object(a.e)(e => void 0 !== E && ne(e, {
						subredditId: E
					})) && g,
					k = Object(a.e)(e => Object(Q.d)(e, {
						subredditId: E
					})),
					w = Object(a.e)(e => Object(Q.b)(e, {
						subredditId: E
					})),
					j = k || w,
					O = Object(J.a)(),
					T = Object(r.useCallback)(() => O(Object(u.l)()), [O]),
					F = x.giphy.isEnabled,
					R = Object(r.useMemo)(() => X({
						isGifUploadEnabled: w,
						isImageUploadEnabled: k
					}).join(), [k, w]);
				return i.a.createElement(D.a, {
					className: t,
					oveflowMenuDropdownId: o,
					onOverflowMenuClick: p,
					editorType: I.a.Comment
				}, i.a.createElement("div", {
					className: $.a.powerupButtons
				}, y && i.a.createElement(H, {
					controlsState: x,
					subredditId: n && n.id,
					onEmoteButtonClick: c
				}), v && i.a.createElement(G, {
					controlsState: x,
					onGifButtonClick: m
				}), j && i.a.createElement(ee.a, {
					accept: R,
					controlsState: x,
					disabledTooltip: C.fbt._("Limit one media per comment", null, {
						hk: "4BKWLn"
					}),
					enabled: F,
					onClick: T,
					onFilesInput: l,
					type: "image"
				})), (y || v || j) && i.a.createElement(te, null), Object(M.g)(M.f, x, s, d, b), i.a.createElement(M.a, {
					controlsState: x,
					trackOnClick: b,
					onLinkButtonClick: f
				}), Object(M.g)(M.h, x, s, d, b), i.a.createElement(te, null), Object(M.g)(M.e, x, s, d, b), i.a.createElement(te, null), i.a.createElement(M.d, {
					controlsState: x,
					editorState: s,
					trackOnClick: b,
					onChange: d
				}))
			}
			var se = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				re = n("./src/reddit/constants/componentSizes.ts"),
				ie = n("./src/reddit/constants/componentTestIds.ts"),
				ae = n("./src/reddit/constants/modals.ts"),
				de = n("./src/reddit/controls/ErrorText/index.tsx"),
				ce = n("./src/reddit/helpers/correlationIdTracker.ts"),
				le = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				ue = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				me = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				pe = n("./src/reddit/models/PostCreationForm/index.ts"),
				he = n("./src/reddit/models/PostDraft/index.ts"),
				be = n("./src/reddit/actions/modal.ts"),
				fe = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				_e = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				ge = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				xe = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Ee = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				ye = n("./src/reddit/models/Subreddit/index.ts"),
				Ce = n("./src/reddit/selectors/activeModal.ts"),
				ve = n("./src/reddit/selectors/activeModalId.ts"),
				ke = n("./src/reddit/selectors/economics.ts"),
				we = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				je = n("./src/reddit/selectors/user.ts"),
				Oe = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Te = n("./src/reddit/selectors/experiments/typingIndicators.ts"),
				Fe = n("./src/reddit/actions/toaster.ts"),
				Re = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				Se = n("./src/reddit/models/Toast/index.ts"),
				De = n("./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less"),
				Me = n.n(De);
			const Ie = 16,
				ze = p.a.div("CommentHeader", Me.a),
				Ae = p.a.div("MarkdownButtonWrapper", Me.a),
				Pe = p.a.wrapped(te, "SectionSpacer", Me.a),
				Be = p.a.span("FormHeaderText", Me.a),
				Le = e => {
					let {
						cancelButtonEnabled: t,
						draftKey: n,
						isCommentBeforeSignUpEnabled: o,
						isCommentBoxDesignEnabled: s,
						onSubmit: r,
						onCancel: a,
						pending: d,
						submitButtonText: c,
						uploads: l
					} = e;
					return e => {
						const {
							editorState: u,
							onMarkdownButtonClick: m
						} = e, p = u.getCurrentContent(), h = Object(Re.j)(p) ? Object(Re.m)(p, l) : !!p.getPlainText().trim();
						return i.a.createElement(ue.a, {
							cancelButtonEnabled: t,
							className: Object(w.a)(Me.a.FormFooter, {
								[Me.a.mRedesign]: s
							}),
							onSubmit: r,
							onCancel: a,
							pending: d,
							submitButtonText: c,
							canSubmit: h
						}, i.a.createElement("div", {
							className: Me.a.ToolbarWrapper
						}, i.a.createElement(oe, e), i.a.createElement(Pe, null), !o && i.a.createElement(Ae, null, i.a.createElement(se.a, {
							className: Me.a.MarkdownButton,
							draftKey: n,
							onClick: m
						}))))
					}
				},
				Ne = Object(a.b)(() => Object(d.c)({
					activeModalId: ve.a,
					destSubreddit: (e, t) => {
						const n = Object(Ee.s)(e, t);
						return n ? {
							name: n.name,
							isProfile: n.type === ye.g.User,
							id: n.id
						} : void 0
					},
					draft: K.i,
					isCommentBeforeSignUpEnabled: we.a,
					isLoggedIn: je.S,
					isLoginModalOpened: Object(Ce.c)(ae.a.LOGIN_MODAL_ID),
					isRegisterModalOpened: Object(Ce.c)(ae.a.REGISTER_MODAL_ID),
					userCanUseEmojis: (e, t) => {
						const n = Object(Ee.s)(e, t);
						return Object(ke.s)(e, n ? n.id : void 0)
					},
					userCanUseGifs: (e, t) => {
						const n = Object(Ee.s)(e, t);
						return Object(ke.t)(e, n ? n.id : void 0, t.parentCommentId)
					},
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object(Te.d)(e),
					isImageUploadEnabled: (e, t) => {
						const n = Object(Ee.s)(e, t);
						return Object(Q.d)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					isGifUploadEnabled: (e, t) => {
						const n = Object(Ee.s)(e, t);
						return Object(Q.b)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					uploads: e => e.uploads
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(be.i)(Object(me.a)(t.draftKey))),
					showErrorToast: t => {
						e(Object(Fe.f)({
							kind: Se.b.Error,
							text: t,
							duration: 6e3
						}))
					}
				}));
			class We extends i.a.Component {
				constructor(e) {
					super(e), this.getToolbarRenderer = Object(O.a)((e, t, n, o, s, r, i) => Le({
						cancelButtonEnabled: e,
						draftKey: t,
						isCommentBeforeSignUpEnabled: n,
						isCommentBoxDesignEnabled: o,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: s,
						submitButtonText: r,
						uploads: i
					})), this.focus = () => {
						this.editor && this.editor.focus()
					}, this.setEditorWrapperRef = e => {
						this.editorWrapperElement = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setRTEComponentRef = e => this.editor = e, this.setRTEDomElementRef = e => {
						this.editorDomElement = e
					}, this.detectBreakout = () => {
						if (!this.editorWrapperElement || !this.editorWrapperElement.parentElement || this.props.isTopLevelComment) return;
						const e = this.editorWrapperElement.parentElement.getBoundingClientRect().width < re.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.formHeight || j.a.write(() => {
							this.setState({
								breakOut: e,
								formHeight: t
							})
						})
					}, this.hasContent = () => {
						const {
							rteState: e
						} = this.state;
						return ge.a.hasContent(e)
					}, this.handleBlur = () => this.props.onFocusChanged(!1), this.handleFocus = () => {
						this.props.onFocus(), this.props.onFocusChanged(!0)
					}, this.handleChange = (e, t) => {
						const {
							onChange: n
						} = this.props;
						n && n({
							rteState: e
						}), t && this.setState({
							hasChanged: !0
						}), this.setState(() => ({
							showError: !1,
							rteState: e
						}), () => {
							j.a.read(this.detectBreakout)
						})
					}, this.cancelForm = () => {
						this.editor && this.props.draftType === he.c.replyToPost && this.setState({
							rteState: ge.a.createInitial()
						}), this.props.onCancel()
					}, this.shouldConfirmCancel = () => this.hasContent() && this.state.hasChanged && this.props.draftType === he.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							rteState: this.state.rteState,
							commentMode: pe.i.RICH_TEXT,
							draftType: this.props.draftType,
							validate: this.props.showWarningModal
						})
					}, this.onSwitchEditorMode = (e, t) => {
						this.props.onSwitchMode(e, t, this.props.draftKey)
					}, this.onTrackToolbarClick = (e, t) => {
						Object(ce.d)(ce.a.CommentComposer, !1), this.props.sendEvent(Object(u.h)(e, t))
					}, this.onFilesFilter = (e, t) => {
						const {
							isGifUploadEnabled: n,
							isImageUploadEnabled: o
						} = this.props, s = !Object(z.a)(t).giphy.isEnabled, {
							showErrorToast: r
						} = this.props;
						if ((e.length > 1 || s && e.length >= 1) && (r(C.fbt._("Limit one media per comment", null, {
								hk: "iejOT"
							})), s)) return [];
						const i = X({
								isImageUploadEnabled: o,
								isGifUploadEnabled: n
							}),
							a = e.filter(e => i.includes(e.type));
						if (e.length !== a.length) {
							let e = [];
							o && (e = [".png", ".jpeg"]), n && (e = [...e, ".gif"]), r(C.fbt._("Only image ({listOfallowedMediaFiles}) file types are allowed", [C.fbt._param("listOfallowedMediaFiles", e.join(", "))], {
								hk: "2mORw0"
							}))
						}
						return a.slice(0, 1)
					};
					const {
						draft: t,
						draftType: n,
						hasError: o,
						mediaMetadata: s,
						rtJson: r
					} = e;
					this.state = {
						breakOut: !1,
						cancelModalText: n === he.c.edit ? C.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : C.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						rteState: !r && t && t.rteState ? t.rteState : ge.a.createInitial(r, s),
						formHeight: void 0,
						hasChanged: !1,
						showError: o
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.setState({
						rteState: ge.a.createInitial()
					}), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentWillUnmount() {
					Object(ce.b)(ce.a.CommentComposer), this.props.onUnmount({
						rteState: this.state.rteState
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null)
				}
				componentDidMount() {
					this.props.draft.hasFocus && this.editor && (window.addEventListener("resize", this.detectBreakout), j.a.read(this.detectBreakout), j.a.write(() => {
						this.props.draft.hasFocus && this.editor && this.editor.focus()
					})), this.props.instanceRef && this.props.instanceRef(this)
				}
				getWrapperHeight() {
					if (!this.editorDomElement) return;
					return this.editorDomElement.getBoundingClientRect().height + Ie
				}
				render() {
					const {
						activeModalId: e,
						cancelModalToggled: t,
						className: n,
						depth: o,
						destSubreddit: s,
						draft: r,
						draftKey: a,
						draftType: d,
						errorMsgs: c,
						isCommentBeforeSignUpEnabled: u,
						isCommentBoxDesignEnabled: m,
						isExpanded: p,
						isLoggedIn: h,
						isLoginModalOpened: b,
						isRegisterModalOpened: f,
						modalSeen: _,
						pending: g,
						postId: x,
						submitButtonText: E,
						isTopLevelComment: y,
						userCanUseEmojis: v,
						userCanUseGifs: j,
						userName: O,
						isTypingIndicatorsWriteTestEnabled: S,
						isImageUploadEnabled: D,
						isGifUploadEnabled: M,
						uploads: z
					} = this.props, {
						cancelModalText: A,
						breakOut: P,
						formHeight: B,
						rteState: L
					} = this.state, N = Object(me.a)(a), W = r.draftType === he.c.edit, U = d !== he.c.replyToPost;
					return i.a.createElement("div", {
						className: Object(w.a)(Me.a.FormWrapper, n, {
							[Me.a.isTopLevelComment]: y,
							[Me.a.isRedesign]: m
						}),
						ref: this.setEditorWrapperRef,
						style: {
							height: P ? B : void 0
						}
					}, !m && y && O && i.a.createElement(ze, null, i.a.createElement(Be, null, C.fbt._("Comment as {authorLink}", [C.fbt._param("authorLink", i.a.createElement(T.a, {
						author: O,
						isAuthorDeleted: !1
					}, O))], {
						hk: "4pMWAk"
					}))), i.a.createElement(le.a, {
						breakOut: P,
						depth: o,
						isEditing: W
					}, i.a.createElement(R.a, {
						allowImageUploads: D || M,
						shouldOmitImageCaptionBlock: !0,
						shouldUseGqlUploadLease: !0,
						onFilesFilter: this.onFilesFilter,
						minImageDimension: 20,
						userCanUseEmojis: v,
						userCanUseGifs: j,
						dataTestId: ie.c,
						destSubreddit: s,
						editorType: I.a.Comment,
						initialHeight: this.props.initialHeight,
						isCommentBoxDesignEnabled: m,
						isExpanded: p,
						isTypingIndicatorsWriteTestEnabled: S,
						rteState: L,
						rteRef: this.setRTEComponentRef,
						domRef: this.setRTEDomElementRef,
						onBlur: this.handleBlur,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.handleFocus,
						onChange: this.handleChange,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onSwitchEditorMode,
						placeholderText: m ? C.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : C.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						postId: x,
						readOnly: g,
						trackToolbarClick: this.onTrackToolbarClick,
						toolbarPosition: "bottom",
						renderToolbar: this.getToolbarRenderer(U, a, !h && u, m, g, E, z)
					})), this.state.showError ? Object(de.c)(c) : null, e === N && i.a.createElement(F.a, {
						actionText: C.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: C.fbt._("Keep", null, {
							hk: "1fDXd5"
						}),
						modalText: A,
						onConfirm: this.cancelForm,
						toggleModal: t,
						trackClick: k.a
					}), e === l.t && i.a.createElement(_e.a, {
						onSubmit: this.onSubmit,
						modalSeen: _,
						withOverlay: !0
					}), i.a.createElement(fe.a, {
						editKey: a,
						hasValue: ge.a.hasContent(L),
						skipBlockingOnPageReload: !h && u && (b || f)
					}))
				}
			}
			var Ue = Object(xe.v)()(Ne(Object(Oe.c)(We))),
				He = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				qe = n("./src/reddit/models/User/index.ts"),
				Ge = n("./src/reddit/selectors/experiments/commentBox.ts"),
				Ke = n("./src/reddit/selectors/posts.ts");
			const Ve = Object(xe.v)(),
				Ze = Object(d.c)({
					activeModalId: ve.a,
					contributorRequestPending: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(xe.b)(e, n, f.e.Comment)
					},
					isCommentBoxDesignEnabled: Ge.a,
					userName: e => e.user.account ? Object(qe.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					hasError: K.v,
					errorMsgs: K.M,
					draft: K.i,
					disableAutofocus: K.f,
					showContributorRequestFlow: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(xe.gb)(e, n, f.e.Comment)
					},
					postAuthorIsBlocked: Ke.w
				}),
				Xe = Object(a.b)(Ze, (e, t) => ({
					onMount: () => e(c.a(t.draftKey)),
					onCancel: () => {
						t.draftType === he.c.edit ? e(l.d({
							commentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						})) : e(l.b({
							parentCommentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						}))
					},
					onUnmount: n => e(l.k(t.draftKey, n)),
					onFocus: s()(() => e((e, n) => Object(u.e)(n(), t.draftType))),
					onFocusChanged: n => e(l.f({
						hasFocus: n,
						draftKey: t.draftKey
					})),
					onSwitchMode: (t, n, o) => e(l.c(t, n, o)),
					dispatchSubmit: (n, o) => {
						e(t.submitAction(n, o))
					}
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onSubmit: n => {
						t.dispatchSubmit(n, e.draft.commentMode)
					}
				}));
			class Je extends i.a.Component {
				constructor(e) {
					super(e), this.getInstanceRef = e => this.formInstanceRef = e, this.onCancel = () => {
						this.props.onCancel()
					}, this.onSwitchMode = async (e, t, n) => {
						await this.props.onSwitchMode(e, t, n), this.formInstanceRef && this.formInstanceRef.focus()
					}, this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onEditorFocus = () => {
						const {
							isCommentBoxDesignEnabled: e,
							onFocus: t
						} = this.props;
						e ? this.setState(e => e.isExpanded ? null : {
							isExpanded: !0
						}, t) : t()
					}, this.modalSeen = () => {
						this.setState({
							showWarningModal: !1
						})
					};
					const t = e.draft ? e.draft.text : e.initialText || "";
					this.state = {
						isExpanded: !e.isCommentBoxDesignEnabled || !!t,
						showWarningModal: !0
					}
				}
				componentDidUpdate(e) {
					const t = e.pending,
						{
							hasError: n,
							pending: o
						} = this.props;
					t && !o && !n && this.setState({
						showWarningModal: !0
					})
				}
				render() {
					const {
						props: e
					} = this;
					if (!e.draft || e.postAuthorIsBlocked) return null;
					const t = e && e.draft && e.draft.rtJson || e.rtJson || void 0,
						n = {
							autofocus: e.autofocus || !1,
							className: e.className,
							depth: e.depth,
							disableAutofocus: e.disableAutofocus,
							draftKey: e.draftKey,
							draftType: e.draftType,
							editorElementRef: e.editorElementRef,
							errorMsgs: e.errorMsgs,
							initialHeight: this.state.editorHeight,
							instanceRef: this.getInstanceRef,
							hasError: e.hasError,
							modalSeen: this.modalSeen,
							onCancel: e.onCancel,
							onEditorResize: this.onEditorResize,
							onFocus: this.onEditorFocus,
							onFocusChanged: e.onFocusChanged,
							onMount: e.onMount,
							onSubmit: e.onSubmit,
							onUnmount: e.onUnmount,
							parentCommentId: e.parentCommentId,
							pending: e.pending,
							postId: e.postId,
							rtJson: t,
							mediaMetadata: e.mediaMetadata,
							isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
							isExpanded: this.state.isExpanded,
							isTopLevelComment: e.isTopLevelComment,
							submitButtonText: e.submitButtonText,
							userName: e.userName,
							initialText: e.draft ? e.draft.text : e.initialText || "",
							onSwitchMode: this.onSwitchMode,
							showWarningModal: this.state.showWarningModal
						};
					return e.contributorRequestPending ? i.a.createElement(He.a, null) : e.showContributorRequestFlow ? i.a.createElement(y, null) : e.draft.commentMode === pe.i.RICH_TEXT ? i.a.createElement(Ue, n) : i.a.createElement(m.b, n)
				}
			}
			t.default = Ve(Xe(Je))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less": function(e, t, n) {
			e.exports = {
				RequestButton: "_3K2ydhts9_ES4s9UpcXqBi",
				requestButton: "_3K2ydhts9_ES4s9UpcXqBi"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/privateCommunity.ts"),
				p = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				f = n.n(b);
			const _ = () => ({
				[h.b.Comment]: o.fbt._("Request to Comment", null, {
					hk: "3KRhw5"
				}),
				[h.b.IdCard]: o.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.PostSubmission]: o.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.ContentGate]: o.fbt._("Request to Join", null, {
					hk: "1nK8Vv"
				})
			});
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						const {
							sendEvent: e,
							eventSource: t,
							openRequestToJoinSubredditModal: n,
							openContributorRequestModal: o
						} = this.props;
						t === h.b.ContentGate ? (e(Object(m.a)(t)), n()) : (e(Object(p.a)(t)), o())
					}
				}
				render() {
					const {
						eventSource: e,
						smallButton: t,
						className: n,
						isContributorRequestPending: s
					} = this.props;
					return r.a.createElement(u.t, {
						priority: e === h.b.ContentGate ? u.c.Secondary : u.c.Primary,
						className: Object(a.a)(t ? null : f.a.RequestButton, n),
						onClick: this.onRequest,
						size: t ? u.d.S : u.d.M,
						disabled: s
					}, s ? o.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : _()[e])
				}
			}
			t.default = Object(i.b)(null, e => ({
				openContributorRequestModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(c.c)(g))
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = n.n(i),
				d = n("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", a.a),
				l = d.a.div("TextWrapper", a.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: o,
					subtitle: i,
					title: d,
					textWrapperClassName: u
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, s.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), o ? s.a.createElement(c, null, o) : s.a.createElement(c, null), s.a.createElement(l, {
					className: u
				}, s.a.createElement("div", {
					className: a.a.title
				}, d), i && s.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/MarkdownHelp/index.m.less": function(e, t, n) {
			e.exports = {
				Section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				Container: "C8uCM4XqGMA6xiIu7zfJl",
				container: "C8uCM4XqGMA6xiIu7zfJl",
				helpTable: "_3E7k-M4lVIYGW6Z7QoiPc9",
				Table: "_1t5z5ubOp-UUzTGLJr43d0",
				table: "_1t5z5ubOp-UUzTGLJr43d0",
				P: "_3MhMubukVABghyvZNN2X65",
				p: "_3MhMubukVABghyvZNN2X65"
			}
		},
		"./src/reddit/components/MarkdownHelp/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return E
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				d = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				_ = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				g = n.n(_),
				x = n("./src/lib/lessComponent.tsx");
			const E = "Markdown_Help__Modal",
				y = x.a.wrapped(b.a, "Section", g.a),
				C = x.a.div("Container", g.a),
				v = x.a.table("Table", g.a),
				k = x.a.p("P", g.a);
			class w extends r.a.Component {
				render() {
					const e = o.fbt._("italics", null, {
							hk: "9wBJ9"
						}),
						t = o.fbt._("bold", null, {
							hk: "yoD2u"
						}),
						n = o.fbt._("item", null, {
							hk: "20ZnoS"
						}),
						s = o.fbt._("quoted text", null, {
							hk: "1Lvb4b"
						}),
						i = o.fbt._("strikethrough", null, {
							hk: "UcaLr"
						}),
						u = o.fbt._("spoilers", null, {
							hk: "372XyC"
						});
					return r.a.createElement(d.a, null, r.a.createElement(a.a, {
						onClosePressed: this.props.closeModal,
						title: o.fbt._("Markdown Help", null, {
							hk: "w08E2"
						})
					}), r.a.createElement(C, null, r.a.createElement(v, {
						className: g.a.helpTable
					}, r.a.createElement("tr", null, r.a.createElement(c.s, null, r.a.createElement(c.j, null, o.fbt._("Type this:", null, {
						hk: "VDjXQ"
					}))), r.a.createElement(c.s, null, r.a.createElement(c.j, null, o.fbt._("to get this:", null, {
						hk: "4zlZi9"
					})))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "*", e, "*")), r.a.createElement(c.p, null, r.a.createElement(c.f, null, e))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "**", t, "**")), r.a.createElement(c.p, null, r.a.createElement(c.b, null, t))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "[reddit!](https://reddit.com)")), r.a.createElement(c.p, null, r.a.createElement(c.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "* ", n, " 1"), r.a.createElement(c.j, null, "* ", n, " 2"), r.a.createElement(c.j, null, "* ", n, " 3")), r.a.createElement(c.p, null, r.a.createElement(c.v, null, r.a.createElement(c.g, null, n, " 1"), r.a.createElement(c.g, null, n, " 2"), r.a.createElement(c.g, null, n, " 3")))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "> ", s)), r.a.createElement(c.p, null, r.a.createElement(c.c, null, s))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "~~", i, "~~")), r.a.createElement(c.p, null, r.a.createElement(c.d, null, i))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, o.fbt._("super^script", null, {
						hk: "2WteOp"
					}))), r.a.createElement(c.p, null, o.fbt._("super{=script}", [o.fbt._param("=script", r.a.createElement(c.m, null, o.fbt._("script", null, {
						hk: "4a2qMi"
					})))], {
						hk: "1VvC4z"
					}))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, `>!${u}!<`)), r.a.createElement(c.p, null, r.a.createElement(l.a, null, u)))), r.a.createElement(k, null, o.fbt._("Check the {=commenting wiki page} for more help", [o.fbt._param("=commenting wiki page", r.a.createElement(c.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, o.fbt._("commenting wiki page", null, {
						hk: "25UBE"
					})))], {
						hk: "1J9oBy"
					}))), r.a.createElement(y, null, r.a.createElement(f.a, null, r.a.createElement(h.l, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const j = Object(i.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(E))
			}))(w);
			t.a = Object(m.a)(Object(u.c)(j))
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "dyBWJSV5slC_6_q-avEAz",
				loadingIcon: "dyBWJSV5slC_6_q-avEAz",
				ModeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				modeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				ModeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				modeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				SwitchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				switchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				MarkdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				markdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				Toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa",
				toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa"
			}
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				l = n("./src/reddit/components/FocusableContent/index.tsx"),
				u = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				p = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				h = n("./src/reddit/constants/keycodes.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = n("./src/reddit/models/PostCreationForm/index.ts"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				x = n("./src/reddit/selectors/editorContent.ts"),
				E = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				y = n.n(E),
				C = n("./src/lib/lessComponent.tsx");
			const v = C.a.wrapped(f.a, "LoadingIcon", y.a),
				k = e => {
					let {
						isFilled: t,
						...n
					} = e;
					return r.a.createElement(v, n)
				},
				w = C.a.span("ModeDescription", y.a),
				j = C.a.div("ModeWrapper", y.a),
				O = C.a.wrapped(c.a, "MarkdownHelpButton", y.a),
				T = C.a.div("Toolbar", y.a),
				F = Object(a.c)({
					activeModalId: g.a,
					isConverting: e => Object(x.a)(e)
				}),
				R = Object(i.b)(F, (e, t) => ({
					onChange: n => {
						e(Object(d.c)(n)), t.onChange && t.onChange(n)
					},
					helpModalToggled: () => e(Object(d.z)(u.b)),
					switchToRTEModalToggled: () => e(Object(d.z)(m.a.SWITCH_TO_RTE_MODAL_ID))
				}));
			class S extends r.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange(t)
					}, this.onBlur = () => {
						this.setState({
							isFocused: !1
						}), this.props.onBlur && this.props.onBlur()
					}, this.onFocus = () => {
						const {
							onFocus: e
						} = this.props;
						e && e(), this.setState({
							isFocused: !0
						})
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === h.a.Enter && this.props.onSubmit()
					}, this.handleSwitchModeClick = () => {
						this.props.value ? this.props.switchToRTEModalToggled() : this.props.onSwitchEditorMode(_.i.RICH_TEXT, this.props.value)
					}, this.handleSwitchToRTEConfirm = () => {
						this.props.switchToRTEModalToggled(), this.props.onSwitchEditorMode(_.i.RICH_TEXT, this.props.value)
					}, this.setTextAreaRef = e => this.textAreaRef = e, this.state = {
						isFocused: !1
					}
				}
				componentDidMount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(this)
				}
				componentWillUnmount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(null)
				}
				focus() {
					this.textAreaRef && this.textAreaRef.focus()
				}
				render() {
					const {
						className: e,
						isConverting: t,
						placeholderText: n,
						focusableContentMarkdownClassName: s,
						value: i
					} = this.props, {
						isFocused: a
					} = this.state;
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement(l.a, {
						className: s,
						isFocused: a
					}, r.a.createElement(T, null, r.a.createElement(j, null, r.a.createElement(w, null, o.fbt._("Markdown", null, {
						hk: "42KuwU"
					})), r.a.createElement(O, {
						onClick: this.props.helpModalToggled
					})), r.a.createElement(D, {
						isConverting: t,
						onClick: this.handleSwitchModeClick
					})), r.a.createElement(p.a, {
						disabled: !!this.props.disabled,
						initialHeight: this.props.initialHeight,
						innerRef: this.setTextAreaRef,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: n,
						value: i
					})), this.props.activeModalId === u.b && r.a.createElement(u.a, {
						withOverlay: !0
					}), this.props.activeModalId === m.a.SWITCH_TO_RTE_MODAL_ID && r.a.createElement(m.b, {
						modalId: m.a.SWITCH_TO_RTE_MODAL_ID,
						onCancel: this.props.switchToRTEModalToggled,
						onConfirm: this.handleSwitchToRTEConfirm
					}))
				}
			}
			const D = r.a.memo(e => {
				let {
					isConverting: t,
					onClick: n
				} = e;
				const s = o.fbt._("Switch to Fancy Pants Editor", null, {
					hk: "1AKY7t"
				});
				return r.a.createElement(b.t, {
					priority: b.c.Plain,
					size: b.d.XS,
					onClick: n,
					Icon: t ? k : void 0,
					text: s
				})
			});
			t.a = R(S)
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}));
			const o = 20,
				s = 180
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = n.n(m),
				h = n("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(d.l, "PrimaryButton", p.a),
				f = h.a.wrapped(i.p, "ModalText", p.a);
			class _ extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === a.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						primaryButtonLoading: e,
						secondaryButtonLoading: t
					} = this.props;
					return s.a.createElement(i.e, null, s.a.createElement(i.i, null, s.a.createElement(u.a, null, s.a.createElement(i.q, null, this.props.titleText), s.a.createElement(l.a, {
						onClick: this.props.onClose
					}, s.a.createElement(i.b, null)))), s.a.createElement(i.l, null, s.a.createElement(f, null, this.props.bodyText)), s.a.createElement(i.g, null, s.a.createElement(i.a, {
						onClick: this.props.onSecondaryAction
					}, t ? s.a.createElement(c.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), s.a.createElement(b, {
						onClick: this.props.onPrimaryAction
					}, e ? s.a.createElement(c.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(r.a)(_)
		},
		"./src/reddit/components/PostCreationForm/Prompt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			! function(e) {
				e.LOAD_DRAFT_MODAL_ID = "POST_CREATION__LOAD_DRAFT_MODAL_ID", e.MAX_DRAFTS_MODAL_ID = "POST_CREATION__MAX_DRAFTS_MODAL_ID", e.SWITCH_TO_RTE_MODAL_ID = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID"
			}(o || (o = {}));
			const d = {
					title: () => s.fbt._("Load draft", null, {
						hk: "VQ7SS"
					}),
					body: () => s.fbt._("Loading this draft will discard your current post.", null, {
						hk: "49vMci"
					}),
					confirm: () => s.fbt._("Load Draft", null, {
						hk: "29mFSs"
					}),
					cancel: () => s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				c = {
					title: () => s.fbt._("Save draft", null, {
						hk: "36SGct"
					}),
					body: () => s.fbt._("Looks like you’ve hit your max number of drafts. Please delete one to make room.", null, {
						hk: "4g9gOF"
					}),
					confirm: () => s.fbt._("Manage Drafts", null, {
						hk: "3a6SXJ"
					}),
					cancel: () => s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				l = {
					title: () => s.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "22mr8J"
					}),
					body: () => s.fbt._("Switching to Fancy Pants Editor may result in a loss of content", null, {
						hk: "1cWryd"
					}),
					confirm: () => s.fbt._("Switch", null, {
						hk: "36pRzE"
					}),
					cancel: () => s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				u = {
					[o.LOAD_DRAFT_MODAL_ID]: d,
					[o.MAX_DRAFTS_MODAL_ID]: c,
					[o.SWITCH_TO_RTE_MODAL_ID]: l
				};
			class m extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onCancel = () => {
						this.props.onCancel(this.props.modalId)
					}, this.onConfirm = () => {
						this.props.onConfirm(this.props.modalId)
					}
				}
				render() {
					const {
						modalId: e
					} = this.props, t = u[e];
					return i.a.createElement(a.a, {
						bodyText: t.body(),
						secondaryButtonText: t.cancel(),
						primaryButtonText: t.confirm(),
						titleText: t.title(),
						onClose: this.onCancel,
						onPrimaryAction: this.onConfirm,
						onSecondaryAction: this.onCancel
					})
				}
			}
			t.b = m
		},
		"./src/reddit/components/PostEditForm/index.m.less": function(e, t, n) {
			e.exports = {
				BottomRow: "_2tvWRsxtXPamngfOz-62jr",
				bottomRow: "_2tvWRsxtXPamngfOz-62jr",
				errorMessages: "_19V2_W_A8aXNszBqWTITiK",
				Editor: "_8uW3gzV8WqahKv77o2EFu",
				editor: "_8uW3gzV8WqahKv77o2EFu",
				isPending: "_2UWKes5OMhB-Rz2iVtBdKZ",
				FormContent: "_2ISPYodbQ3VsImJAFvLFDJ",
				formContent: "_2ISPYodbQ3VsImJAFvLFDJ",
				SubmitButton: "_1N8wF0OCvBu6gW4b4cpHhE",
				submitButton: "_1N8wF0OCvBu6gW4b4cpHhE",
				LoadingIcon: "_1FY2h-rhaxwcBudiw3Lc2d",
				loadingIcon: "_1FY2h-rhaxwcBudiw3Lc2d",
				focusableContent: "fam5DEZTj2G3e_IBCdi4-",
				mHasError: "_3X-uPNfcs_4iJh4yYParj-"
			}
		},
		"./src/reddit/components/PostEditForm/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/actions/postCreation/editing.ts"),
				p = n("./src/reddit/actions/postCreation/editorContent.ts"),
				h = n("./src/reddit/actions/postCreation/postGuidance.ts"),
				b = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				f = n("./src/reddit/components/Poll/async.ts"),
				_ = n("./src/lib/constants/index.ts"),
				g = n("./src/lib/memoizeByReference/index.ts"),
				x = n("./src/reddit/components/RichTextEditor/media/helpers.ts");
			const E = Object(g.a)((e, t) => {
				const n = e.name,
					{
						allowedPostTypes: s
					} = e,
					r = Object(x.g)(t),
					i = ((e, t, n) => {
						if (!t) return null;
						let s = "";
						return !e.total || t.images || t.videos ? e.video && !t.videos ? s = o.fbt._("Videos are not allowed in {subreddit name}", [o.fbt._param("subreddit name", `r/${n}`)], {
							hk: "4DBrcv"
						}) : !e.image && !e.gifvideo || t.images || (s = o.fbt._("Images are not allowed in {subreddit name}", [o.fbt._param("subreddit name", `r/${n}`)], {
							hk: "27ju8Q"
						})) : s = o.fbt._("Videos and images are not allowed in {subreddit name}", [o.fbt._param("subreddit name", `r/${n}`)], {
							hk: "2GGFeK"
						}), s || null
					})(r, s, n);
				return i ? [i] : (e => {
					const t = [];
					return e.image > _.gb && t.push(o.fbt._("Post may not contain more that 20 images", null, {
						hk: "1Szc36"
					})), e.video + e.gifvideo > _.jb && t.push(o.fbt._("Post may not contain more that 5 videos", null, {
						hk: "2WhZ8k"
					})), t
				})(r)
			});
			var y = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				C = n("./src/reddit/components/RichTextEditor/index.tsx"),
				v = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				k = n("./src/reddit/contexts/PageLayer/index.tsx"),
				w = n("./src/reddit/controls/ErrorText/index.tsx"),
				j = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/richTextEditor/index.ts"),
				T = n("./src/reddit/models/PostCreationForm/index.ts"),
				F = n("./src/reddit/models/PostRequirements/index.ts"),
				R = n("./src/reddit/selectors/platform.ts"),
				S = n("./src/reddit/selectors/postCreations.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				M = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				z = n("./src/reddit/components/PostEditForm/index.m.less"),
				A = n.n(z),
				P = n("./src/lib/lessComponent.tsx"),
				B = n("./node_modules/lodash/debounce.js"),
				L = n.n(B),
				N = n("./src/reddit/actions/postGuidance/index.ts"),
				W = n("./src/reddit/selectors/experiments/postGuidance.ts"),
				U = n("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				H = n("./src/reddit/selectors/postGuidance.ts"),
				q = n("./src/reddit/components/PostGuidance/index.tsx");
			const G = P.a.div("BottomRow", A.a),
				K = P.a.div("FormContent", A.a),
				V = P.a.wrapped(M.l, "SubmitButton", A.a),
				Z = P.a.wrapped(I.a, "LoadingIcon", A.a),
				X = Object(k.v)(),
				J = Object(l.c)({
					destSubreddit: S.h,
					editorMode: S.i,
					errorMessages: S.j,
					hasError: S.k,
					isPostGuidanceEligible: (e, t) => {
						var n;
						const o = Object(k.q)(e, t);
						if (!o) return !1;
						const s = Object(H.d)(e, {
								subredditName: o.name.toLowerCase()
							}),
							r = Object(U.c)(e, {
								subredditId: o.id
							});
						return !("post" !== Object(S.a)(e) || null === (n = null == s ? void 0 : s.postGuidanceConfig) || void 0 === n || !n.length || r) && Object(W.a)(e)
					},
					markdownDraft: S.l,
					pending: S.db,
					postRequirements: S.ub,
					postGuidanceBodyTriggeredRules: H.c,
					postGuidanceBlockRuleTriggered: H.b,
					rteDraft: S.m,
					submissionType: S.a,
					subreddit: k.s,
					uploads: e => e.uploads,
					user: D.m,
					isCommentsPage: R.f,
					isImageCreationEnabled: S.O,
					isVideoCreationEnabled: S.W
				}),
				Q = Object(d.b)(J, (e, t) => ({
					onCancel: t => e(m.b(t)),
					onSubmitDraft: t => e(m.c(t)),
					onSuccess: t => e(Object(c.b)(t)),
					onToggleEditorMode: (t, n) => e(p.d(T.h.POST_EDITING, t, n)),
					onPostGuidanceValidation: (t, n, o) => {
						e(h.b(t, n, o))
					},
					onFetchPostGuidanceConfig: t => {
						e(Object(N.a)(t))
					}
				}));
			class Y extends a.a.Component {
				constructor(e) {
					super(e), this.onPostGuidanceValidation = L()(() => {
						const {
							markdownBody: e,
							rteState: t
						} = this.state, {
							post: n,
							editorMode: o,
							subreddit: s
						} = this.props, r = (null == s ? void 0 : s.id) || "", i = n.title, a = o === T.i.RICH_TEXT ? v.a.getRawText(t, " ") : e;
						this.props.onPostGuidanceValidation(r, i, a || "")
					}, 150), this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onMarkdownPostChange = e => {
						const {
							markdownBody: t
						} = this.state, n = this.state.markdownPostDraftChanged || t.trim() !== e.trim();
						this.setState({
							markdownBody: e,
							markdownPostDraftChanged: n
						}), this.props.isPostGuidanceEligible && this.onPostGuidanceValidation()
					}, this.onRichPostChange = (e, t) => {
						this.setState({
							rteState: e,
							richtextPostDraftChanged: this.state.richtextPostDraftChanged || t
						}), this.props.isPostGuidanceEligible && this.onPostGuidanceValidation()
					}, this.haveMarkdownPostDraft = () => !!(this.state.markdownBody || "").trim(), this.haveDraft = () => this.props.editorMode === T.i.RICH_TEXT ? this.haveRichPostDraft() : this.haveMarkdownPostDraft(), this.onSubmit = () => {
						const e = this.buildPostSubmission();
						e && this.props.onSubmitDraft(e)
					}, this.onToggleEditorMode = async (e, t) => {
						this.setState({
							markdownPostDraftChanged: !1,
							richtextPostDraftChanged: !1
						}), await this.props.onToggleEditorMode(e, t), e === T.i.RICH_TEXT ? this.rteRef && this.rteRef.focus() : this.markdownEditorRef && this.markdownEditorRef.focus()
					}, this.getMediaValidationErrors = () => {
						const {
							editorMode: e,
							destSubreddit: t
						} = this.props, {
							rteState: n
						} = this.state;
						return n.isBound && e === T.i.RICH_TEXT ? E(t, n.editorState.getCurrentContent()) : []
					}, this.getTextPostContent = () => {
						const {
							editorMode: e,
							uploads: t
						} = this.props, {
							markdownBody: n,
							rteState: o
						} = this.state;
						return e === T.i.RICH_TEXT ? v.a.toRichTextJSON(o, t) : {
							markdown: n
						}
					}, this.buildPostSubmission = () => {
						const {
							post: e
						} = this.props;
						return {
							post: e,
							...this.getTextPostContent(),
							validate_on_submit: !0
						}
					}, this.cancelEdit = () => {
						this.props.onCancel(this.props.post.id)
					}, this.setRteRef = e => this.rteRef = e, this.setMarkdownEditorRef = e => this.markdownEditorRef = e, this.state = {
						markdownBody: e.markdownDraft,
						markdownPostDraftChanged: !1,
						richtextPostDraftChanged: !1,
						rteState: e.rteDraft
					}
				}
				componentDidMount() {
					Object(j.d)(j.a.PostComposer), this.props.subreddit && this.props.onFetchPostGuidanceConfig(this.props.subreddit.name)
				}
				componentWillUnmount() {
					Object(j.b)(j.a.PostComposer), this.cancelEdit()
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.rteDraft !== this.props.rteDraft && this.setState({
						rteState: e.rteDraft,
						richtextPostDraftChanged: !0
					}), e.markdownDraft !== this.props.markdownDraft && this.setState({
						markdownBody: e.markdownDraft,
						markdownPostDraftChanged: !0
					})
				}
				haveRichPostDraft() {
					const {
						rteState: e
					} = this.state;
					return v.a.hasContent(e)
				}
				hasChanged() {
					const {
						editorMode: e
					} = this.props, {
						markdownPostDraftChanged: t,
						richtextPostDraftChanged: n
					} = this.state;
					return e === T.i.RICH_TEXT ? !!n : e === T.i.MARKDOWN && !!t
				}
				render() {
					const {
						editorMode: e,
						errorMessages: t,
						hasError: n,
						isCommentsPage: s,
						pending: i,
						post: d,
						postGuidanceBlockRuleTriggered: c,
						postRequirements: l,
						uploads: m,
						isImageCreationEnabled: p,
						isVideoCreationEnabled: h
					} = this.props, {
						markdownBody: _,
						markdownPostDraftChanged: g,
						richtextPostDraftChanged: x,
						rteState: E
					} = this.state, k = l && l.bodyRestrictionPolicy === F.a.Required ? o.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : o.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), j = this.getMediaValidationErrors(), R = [...t, ...j];
					n && !R.length && R.push(o.fbt._("Something went wrong. Just don't panic.", null, {
						hk: "FsWrq"
					}));
					const S = !v.a.isAllMediaUploaded(E, m);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(K, null, e === T.i.RICH_TEXT ? a.a.createElement(C.a, {
						allowImageUploads: p,
						allowVideoUploads: h,
						className: Object(u.a)(A.a.Editor, {
							[A.a.isPending]: !!i
						}),
						focusableContentRTEClassName: Object(u.a)(A.a.focusableContent, {
							[A.a.mHasError]: !!n || c
						}),
						destSubreddit: this.props.destSubreddit,
						editorType: O.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: E,
						onChange: this.onRichPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						readOnly: !!i,
						rteRef: this.setRteRef,
						trackToolbarClick: r.a,
						placeholderText: k
					}) : a.a.createElement(y.a, {
						focusableContentRTEClassName: Object(u.a)(A.a.focusableContent, {
							[A.a.mHasError]: !!n || c
						}),
						initialHeight: this.state.editorHeight,
						instanceRef: this.setMarkdownEditorRef,
						disabled: !!i,
						value: _,
						onChange: this.onMarkdownPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: k
					}), a.a.createElement(w.a, {
						className: A.a.errorMessages,
						messages: R
					}), a.a.createElement(q.a, {
						triggeredRules: this.props.postGuidanceBodyTriggeredRules
					}), a.a.createElement(G, null, a.a.createElement(M.r, {
						disabled: !!i,
						onClick: this.cancelEdit
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(V, {
						disabled: !!i || !!j.length || !this.hasChanged() || S || c,
						onClick: this.onSubmit
					}, i ? a.a.createElement(Z, {
						sizePx: 10
					}) : o.fbt._("Save", null, {
						hk: "4yMsMq"
					}))), a.a.createElement(b.a, {
						editKey: d.id,
						hasValue: !(!g && !x),
						isPostEdit: !0
					})), a.a.createElement(f.a, {
						postId: d.id,
						isCommentsPage: !!s
					}))
				}
			}
			t.default = X(Q(Y))
		},
		"./src/reddit/components/PostGuidance/index.m.less": function(e, t, n) {
			e.exports = {
				errorText: "_29Z8rNOZEXZzQgelIlxW5t",
				showAllBtn: "_3y2uOHfsXNElM_JH5BKn76"
			}
		},
		"./src/reddit/components/PostGuidance/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/redditGQL/types.ts"),
				a = n("./src/lib/hooks/usePrevious.ts"),
				d = n("./src/reddit/components/RichTextJson/index.tsx"),
				c = n("./src/reddit/components/PostGuidance/index.m.less"),
				l = n.n(c);
			const u = e => {
				let {
					triggeredRules: t = [],
					trackPostGuidanceView: n
				} = e;
				const [c, u] = Object(s.useState)(!1), m = t.filter(e => e.actionType === i.M.Block), p = m.length > 0 ? m : t, h = c ? p : p.slice(0, 5), b = Object(a.a)(h);
				return Object(s.useEffect)(() => {
					const e = h.map(e => e.guidanceId),
						t = (null == b ? void 0 : b.map(e => e.guidanceId)) || [],
						o = e.filter(e => !(null == t ? void 0 : t.includes(e)));
					n && o.length > 0 && n(o)
				}, [t, h, b, n]), r.a.createElement("div", {
					"data-testid": "post-guidance-validation"
				}, r.a.createElement("ol", null, h.map((e, t) => r.a.createElement("li", {
					className: `${e.actionType===i.M.Block?l.a.errorText:""} text-12 pt-2xs`,
					key: t
				}, e.validationMessage.richtext ? r.a.createElement(d.b, {
					className: `${e.actionType===i.M.Block?l.a.errorText:""} !text-12 !pt-2xs`,
					useExplicitTextColor: !0,
					content: JSON.parse(e.validationMessage.richtext),
					rtJsonElementProps: {}
				}) : e.validationMessage.markdown))), p.length > 5 && r.a.createElement("button", {
					"data-testid": "post-guidance-btn",
					className: `text-12 pt-2xs ${l.a.showAllBtn}`,
					onClick: () => u(e => !e)
				}, c ? o.fbt._("View less", null, {
					hk: "4dXCrs"
				}) : o.fbt._("View more", null, {
					hk: "mvs5E"
				})))
			}
		},
		"./src/reddit/components/RequestPendingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				Subtitle: "_1ljRPHbvpC41amZF9_xBeb",
				subtitle: "_1ljRPHbvpC41amZF9_xBeb"
			}
		},
		"./src/reddit/components/RequestPendingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = n.n(p);
			const b = d.a.wrapped(c.a, "Banner", h.a),
				f = Object(i.b)(() => Object(a.c)({
					restrictions: m.q,
					subreddit: u.e
				}));
			t.a = f(e => {
				let {
					restrictions: t,
					subreddit: n
				} = e;
				if (!n) return null;
				const s = t === l.e.Comment ? l.a.Create : l.a.Draft;
				return r.a.createElement(b, {
					subtitle: r.a.createElement("span", {
						className: h.a.Subtitle
					}, o.fbt._("Your request to {restrictions} in {displayName} was sent and is pending. In the meantime, you can {action} a post and {=browse the community}", [o.fbt._param("restrictions", l.d[t]()), o.fbt._param("displayName", n.name), o.fbt._param("action", l.c[s]()), o.fbt._param("=browse the community", r.a.createElement("a", {
						href: `${n.url}`
					}, o.fbt._("browse the community", null, {
						hk: "3hwgAC"
					})))], {
						hk: "2CX6Q6"
					})),
					title: o.fbt._("Request to {restrictions} is pending...", [o.fbt._param("restrictions", l.d[t]())], {
						hk: "1tQuSr"
					})
				})
			})
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, n) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-autosize-textarea/lib/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				c = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => {
					let {
						className: t,
						children: n,
						editorWrapperRef: o,
						initialHeight: r
					} = e;
					return s.a.createElement("div", {
						className: Object(a.a)(c.a.editorWrapper, t),
						style: r ? {
							height: r
						} : void 0,
						ref: o
					}, n)
				},
				m = e => {
					let {
						isFullHeight: t,
						textAreaRef: n,
						...o
					} = e;
					return s.a.createElement(i.a, l({
						className: Object(a.a)(c.a.textareaAutosize, {
							[c.a.mIsFullHeight]: t
						}),
						innerRef: n
					}, o))
				};
			class p extends s.a.Component {
				constructor(e) {
					super(e), this.editorHeight = null, this.editorRef = null, this.editorStyleMutationObserver = null, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const {
							isResized: e
						} = this.state;
						e || this.setState({
							isResized: !0
						});
						const t = this.editorRef.style.height ? Number.parseInt(this.editorRef.style.height) : null;
						this.editorHeight !== t && (this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.setEditorWrapperRef = e => this.editorRef = e, this.state = {
						initialHeight: e.initialHeight,
						isResized: !!e.initialHeight
					}
				}
				componentDidMount() {
					this.editorRef && (this.editorStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorStyleMutationObserver.observe(this.editorRef, {
						attributes: !0,
						attributeFilter: ["style"]
					}))
				}
				componentWillUnmount() {
					this.editorStyleMutationObserver && (this.editorStyleMutationObserver.disconnect(), this.editorStyleMutationObserver = null)
				}
				render() {
					const {
						className: e,
						initialHeight: t,
						innerRef: n,
						onEditorResize: o,
						...r
					} = this.props, {
						isResized: i
					} = this.state;
					return s.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, s.a.createElement(m, l({}, r, {
						isFullHeight: !!i,
						textAreaRef: n
					})))
				}
			}
			t.a = p
		},
		"./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less": function(e, t, n) {
			e.exports = {
				SectionSpacer: "_1_GKN8UW8t3pCAZhMgZOoL",
				sectionSpacer: "_1_GKN8UW8t3pCAZhMgZOoL",
				powerupButtons: "_6E4bLu7N3_WO5HyAtaJx8"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less": function(e, t, n) {
			e.exports = {
				emote: "_3D93rMnM8022kmI5JTG4fb",
				emotes: "_2nE7oF1_HdWt-s31zYmYB6",
				emoteMask: "_26-n7Hn4ggLG2AJ7kmR8i6",
				smile: "kZEfwKUF_b6N-MPjQuYFA"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				h = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(a.c)({
					currentUser: c.m,
					isNightMode: c.fb,
					isPresenceUserPrefEnabled: c.X,
					shouldHideNSFW: c.H
				}),
				_ = Object(i.b)(f);
			t.a = _(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: i,
					...a
				} = e, c = Object(d.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(o.a)(h.a.currentUserIconWrapper, i)
				}, c ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, b({}, a, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/index.m.less"),
				r = n.n(s);
			t.a = o.a.input("input", r.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: o = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(a.a.loadingIcon, n, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${o}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			async function r(e, t, n) {
				const r = Object(s.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${o.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: n
						}
					}),
					i = await r;
				if (i.ok) {
					const e = {},
						t = {},
						n = i.body;
					return Object.keys(n).forEach(o => {
						const s = n[o];
						t[o] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
					}), {
						...i,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return i
			}
			async function i(e, t, n) {
				const r = await Object(s.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/badges/${t}?users=${n}`
				});
				if (r.ok) {
					const e = {},
						t = [],
						n = r.body;
					return Object.keys(n).forEach(o => {
						const s = n[o];
						e[o] = s, t.push(s.id)
					}), {
						...r,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return r
			}

			function a(e, t, n) {
				let r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(s.a)(e, {
					method: "patch",
					endpoint: `${o.a.metaUrl}/badges/${t}/${n}`,
					data: {
						selected: r
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			}));
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function r(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function i(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function a(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: t
				})
			}

			function d(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
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
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function r(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : o.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function i(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...o.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: o.lb(t)
				}),
				r = e => t => ({
					...o.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: o.lb(t)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...o.o(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: o.lb(t)
				}),
				r = e => t => ({
					...o.o(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: o.lb(t)
				})
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/MarkdownMode/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 208 128"
			}, s.a.createElement("rect", {
				width: "198",
				height: "118",
				x: "5",
				y: "5",
				ry: "10",
				stroke: "currentColor",
				strokeWidth: "10",
				fill: "none"
			}), s.a.createElement("path", {
				d: "M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
			}))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = n.n(i);
			const d = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = n.n(s);
			t.a = o.a.div("rightAligned", r.a)
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = Object(o.a)(i.S, i.R, (e, t) => e || t),
				d = Object(o.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.H
				}), e => e === s.R.Enabled)
		},
		"./src/reddit/selectors/experiments/imageComment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/comments.ts");
			const i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: o.se
					}) === o.Td
				},
				a = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: o.te
					}) === o.Td
				},
				d = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: o.de
					}) === o.Td
				},
				c = (e, t) => {
					let {
						subredditId: n
					} = t;
					return void 0 !== n && Object(r.D)(e, {
						subredditId: n
					}) && i(e)
				},
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					return void 0 !== n && Object(r.B)(e, {
						subredditId: n
					}) && i(e)
				}
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					if (Object(i.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.ng
					}) === o.Td
				},
				d = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.og
					}) === o.Td
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.mg
					});
					return t === o.fg.TypingIndicators || t === o.fg.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: o.mg
					});
					return (null == t ? void 0 : t.variant) === o.fg.IndicatorsPlusCTA
				}
		},
		"./src/redditGQL/operations/PostGuidanceValidation.json": function(e) {
			e.exports = JSON.parse('{"id":"f61154c007f1"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RichTextEditor.ee65616dd19e47ef3de3.js.map