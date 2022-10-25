// https://www.redditstatic.com/desktop2x/RichTextEditor.9597d2039358038a3eb3.js
// Retrieved at 10/25/2022, 3:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RichTextEditor", "ContributorRequestButton"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, o) {
			var n, s, r;
			s = [t, e], void 0 === (r = "function" == typeof(n = function(e, t) {
				"use strict";
				var o, n, s = "function" == typeof Map ? new Map : (o = [], n = [], {
						has: function(e) {
							return o.indexOf(e) > -1
						},
						get: function(e) {
							return n[o.indexOf(e)]
						},
						set: function(e, t) {
							-1 === o.indexOf(e) && (o.push(e), n.push(t))
						},
						delete: function(e) {
							var t = o.indexOf(e);
							t > -1 && (o.splice(t, 1), n.splice(t, 1))
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
						var t, o = null,
							n = e.clientWidth,
							i = null,
							a = function() {
								e.clientWidth !== n && u()
							},
							d = function(t) {
								window.removeEventListener("resize", a, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", d, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(o) {
									e.style[o] = t[o]
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
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), o = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(o) && (o = 0), u()
					}

					function c(t) {
						var o = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = o, e.style.overflowY = t
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
						var i = e.scrollHeight + o;
						0 !== e.scrollHeight ? (e.style.height = i + "px", n = e.clientWidth, s.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), r && (document.documentElement.scrollTop = r)) : e.style.height = t
					}

					function u() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							o = window.getComputedStyle(e, null),
							n = "content-box" === o.boxSizing ? Math.round(parseFloat(o.height)) : e.offsetHeight;
						if (n !== t ? "hidden" === o.overflowY && (c("scroll"), l(), n = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== o.overflowY && (c("hidden"), l(), n = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), i !== n) {
							i = n;
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
			}) ? n.apply(t, s) : n) || (e.exports = r)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, o) {
				return ((o = window.getComputedStyle) ? o(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/draft-js/dist/Draft.css": function(e, t, o) {},
		"./node_modules/line-height/lib/line-height.js": function(e, t, o) {
			var n = o("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = n(e, "line-height"),
					o = parseFloat(t, 10);
				if (t === o + "") {
					var s = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = n(e, "line-height"), o = parseFloat(t, 10), s ? e.style.lineHeight = s : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (o *= 4, o /= 3) : -1 !== t.indexOf("mm") ? (o *= 96, o /= 25.4) : -1 !== t.indexOf("cm") ? (o *= 96, o /= 2.54) : -1 !== t.indexOf("in") ? o *= 96 : -1 !== t.indexOf("pc") && (o *= 16), o = Math.round(o), "normal" === t) {
					var r = e.nodeName,
						i = document.createElement(r);
					i.innerHTML = "&nbsp;", "TEXTAREA" === r.toUpperCase() && i.setAttribute("rows", "1");
					var a = n(e, "font-size");
					i.style.fontSize = a, i.style.padding = "0px", i.style.border = "0px";
					var d = document.body;
					d.appendChild(i), o = i.offsetHeight, d.removeChild(i)
				}
				return o
			}
		},
		"./node_modules/linkify-it/index.js": function(e, t, o) {
			"use strict";

			function n(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(o) {
						e[o] = t[o]
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
						validate: function(e, t, o) {
							var n = e.slice(t);
							return o.re.http || (o.re.http = new RegExp("^\\/\\/" + o.re.src_auth + o.re.src_host_port_strict + o.re.src_path, "i")), o.re.http.test(n) ? n.match(o.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, o) {
							var n = e.slice(t);
							return o.re.no_http || (o.re.no_http = new RegExp("^" + o.re.src_auth + "(?:localhost|(?:(?:" + o.re.src_domain + ")\\.)+" + o.re.src_domain_root + ")" + o.re.src_port + o.re.src_host_terminator + o.re.src_path, "i")), o.re.no_http.test(n) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : n.match(o.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, o) {
							var n = e.slice(t);
							return o.re.mailto || (o.re.mailto = new RegExp("^" + o.re.src_email_name + "@" + o.re.src_host_strict, "i")), o.re.mailto.test(n) ? n.match(o.re.mailto)[0].length : 0
						}
					}
				},
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = o("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(c), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
				var d = [];

				function l(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var o = e.__schemas__[t];
					if (null !== o) {
						var n = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = n, "[object Object]" === s(o)) return ! function(e) {
							return "[object RegExp]" === s(e)
						}(o.validate) ? r(o.validate) ? n.validate = o.validate : l(t, o) : n.validate = function(e) {
							return function(t, o) {
								var n = t.slice(o);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(o.validate), void(r(o.normalize) ? n.normalize = o.normalize : o.normalize ? l(t, o) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === s(e)
						}(o) ? l(t, o): d.push(t)
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
				var o = e.__index__,
					n = e.__last_index__,
					s = e.__text_cache__.slice(o, n);
				this.schema = e.__schema__.toLowerCase(), this.index = o + t, this.lastIndex = n + t, this.raw = s, this.text = s, this.url = s
			}

			function p(e, t) {
				var o = new m(e, t);
				return e.__compiled__[o.schema].normalize(o, e), o
			}

			function h(e, t) {
				if (!(this instanceof h)) return new h(e, t);
				var o;
				t || (o = e, Object.keys(o || {}).reduce((function(e, t) {
					return e || a.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, o, n, s, r, i, a, d;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (s = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (o = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (r = o.index + o[1].length, (this.__index__ < 0 || r < this.__index__) && (this.__schema__ = "", this.__index__ = r, this.__last_index__ = o.index + o[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (r = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || r < this.__index__ || r === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = r, this.__last_index__ = i)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, o) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, o, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					o = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (o.push(p(this, t)), t = this.__last_index__);
				for (var n = t ? e.slice(t) : e; this.test(n);) o.push(p(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
				return o.length ? o : null
			}, h.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, o) {
					return e !== o[t - 1]
				})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
			}, h.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, h.prototype.onCompile = function() {}, e.exports = h
		},
		"./node_modules/linkify-it/lib/re.js": function(e, t, o) {
			"use strict";
			e.exports = function(e) {
				var t = {};
				t.src_Any = o("./node_modules/uc.micro/properties/Any/regex.js").source, t.src_Cc = o("./node_modules/uc.micro/categories/Cc/regex.js").source, t.src_Z = o("./node_modules/uc.micro/categories/Z/regex.js").source, t.src_P = o("./node_modules/uc.micro/categories/P/regex.js").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
				return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
			}
		},
		"./node_modules/lodash/_arrayReduceRight.js": function(e, t) {
			e.exports = function(e, t, o, n) {
				var s = null == e ? 0 : e.length;
				for (n && s && (o = e[--s]); s--;) o = t(o, e[s], s, e);
				return o
			}
		},
		"./node_modules/lodash/_baseEachRight.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseForOwnRight.js"),
				s = o("./node_modules/lodash/_createBaseEach.js")(n, !0);
			e.exports = s
		},
		"./node_modules/lodash/_baseExtremum.js": function(e, t, o) {
			var n = o("./node_modules/lodash/isSymbol.js");
			e.exports = function(e, t, o) {
				for (var s = -1, r = e.length; ++s < r;) {
					var i = e[s],
						a = t(i);
					if (null != a && (void 0 === d ? a == a && !n(a) : o(a, d))) var d = a,
						c = i
				}
				return c
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var o = [];
				return n(e, (function(e, n, s) {
					t(e, n, s) && o.push(e)
				})), o
			}
		},
		"./node_modules/lodash/_baseForOwnRight.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseForRight.js"),
				s = o("./node_modules/lodash/keys.js");
			e.exports = function(e, t) {
				return e && n(e, t, s)
			}
		},
		"./node_modules/lodash/_baseForRight.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_createBaseFor.js")(!0);
			e.exports = n
		},
		"./node_modules/lodash/_baseGt.js": function(e, t) {
			e.exports = function(e, t) {
				return e > t
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var o = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, s, r) {
				for (var i = -1, a = n(o((t - e) / (s || 1)), 0), d = Array(a); a--;) d[r ? a : ++i] = e, e += s;
				return d
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, t, o, s) {
				for (var r = e.length, i = s ? r : -1;
					(s ? i-- : ++i < r) && t(e[i], i, e););
				return o ? n(e, s ? 0 : i, s ? i + 1 : r) : n(e, s ? i + 1 : 0, s ? r : i)
			}
		},
		"./node_modules/lodash/_charsEndIndex.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, t) {
				for (var o = e.length; o-- && n(t, e[o], 0) > -1;);
				return o
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseRange.js"),
				s = o("./node_modules/lodash/_isIterateeCall.js"),
				r = o("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, o, i) {
					return i && "number" != typeof i && s(t, o, i) && (o = i = void 0), t = r(t), void 0 === o ? (o = t, t = 0) : o = r(o), i = void 0 === i ? t < o ? 1 : -1 : r(i), n(t, o, i, e)
				}
			}
		},
		"./node_modules/lodash/_escapeHtmlChar.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_basePropertyOf.js")({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			});
			e.exports = n
		},
		"./node_modules/lodash/chunk.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseSlice.js"),
				s = o("./node_modules/lodash/_isIterateeCall.js"),
				r = o("./node_modules/lodash/toInteger.js"),
				i = Math.ceil,
				a = Math.max;
			e.exports = function(e, t, o) {
				t = (o ? s(e, t, o) : void 0 === t) ? 1 : a(r(t), 0);
				var d = null == e ? 0 : e.length;
				if (!d || t < 1) return [];
				for (var c = 0, l = 0, u = Array(i(d / t)); c < d;) u[l++] = n(e, c, c += t);
				return u
			}
		},
		"./node_modules/lodash/dropRightWhile.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? s(e, n(t, 3), !0, !0) : []
			}
		},
		"./node_modules/lodash/escape.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_escapeHtmlChar.js"),
				s = o("./node_modules/lodash/toString.js"),
				r = /[&<>"']/g,
				i = RegExp(r.source);
			e.exports = function(e) {
				return (e = s(e)) && i.test(e) ? e.replace(r, n) : e
			}
		},
		"./node_modules/lodash/filter.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayFilter.js"),
				s = o("./node_modules/lodash/_baseFilter.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				i = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? n : s)(e, r(t, 3))
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseFlatten.js"),
				s = o("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(s(e, t), 1)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseIndexOf.js"),
				s = o("./node_modules/lodash/isArrayLike.js"),
				r = o("./node_modules/lodash/isString.js"),
				i = o("./node_modules/lodash/toInteger.js"),
				a = o("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, o, c) {
				e = s(e) ? e : a(e), o = o && !c ? i(o) : 0;
				var l = e.length;
				return o < 0 && (o = d(l + o, 0)), r(e) ? o <= l && e.indexOf(t, o) > -1 : !!l && n(e, t, o) > -1
			}
		},
		"./node_modules/lodash/map.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayMap.js"),
				s = o("./node_modules/lodash/_baseIteratee.js"),
				r = o("./node_modules/lodash/_baseMap.js"),
				i = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? n : r)(e, s(t, 3))
			}
		},
		"./node_modules/lodash/maxBy.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseExtremum.js"),
				s = o("./node_modules/lodash/_baseGt.js"),
				r = o("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return e && e.length ? n(e, r(t, 2), s) : void 0
			}
		},
		"./node_modules/lodash/range.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/reduceRight.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayReduceRight.js"),
				s = o("./node_modules/lodash/_baseEachRight.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				i = o("./node_modules/lodash/_baseReduce.js"),
				a = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, o) {
				var d = a(e) ? n : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), o, c, s)
			}
		},
		"./node_modules/lodash/takeWhile.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? s(e, n(t, 3)) : []
			}
		},
		"./node_modules/lodash/trimEnd.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseToString.js"),
				s = o("./node_modules/lodash/_castSlice.js"),
				r = o("./node_modules/lodash/_charsEndIndex.js"),
				i = o("./node_modules/lodash/_stringToArray.js"),
				a = o("./node_modules/lodash/toString.js"),
				d = o("./node_modules/lodash/_trimmedEndIndex.js");
			e.exports = function(e, t, o) {
				if ((e = a(e)) && (o || void 0 === t)) return e.slice(0, d(e) + 1);
				if (!e || !(t = n(t))) return e;
				var c = i(e),
					l = r(c, i(t)) + 1;
				return s(c, 0, l).join("")
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n, s, r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				},
				i = function() {
					function e(e, t) {
						for (var o = 0; o < t.length; o++) {
							var n = t[o];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, o, n) {
						return o && e(t.prototype, o), n && e(t, n), t
					}
				}(),
				a = u(o("./node_modules/react/index.js")),
				d = u(o("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				c = u(o("./node_modules/autosize/dist/autosize.js")),
				l = u(o("./node_modules/line-height/lib/line-height.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function m(e, t) {
				var o = {};
				for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
				return o
			}

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var h = (s = n = function(e) {
				function t() {
					var e, o, n;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var s = arguments.length, i = Array(s), a = 0; a < s; a++) i[a] = arguments[a];
					return o = n = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.state = {
						lineHeight: null
					}, n.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), n.textarea.dispatchEvent(t)
					}, n.getValue = function(e) {
						var t = e.valueLink,
							o = e.value;
						return t ? t.value : o
					}, n.updateLineHeight = function() {
						n.setState({
							lineHeight: (0, l.default)(n.textarea)
						})
					}, n.onChange = function(e) {
						n.currentValue = e.target.value, n.props.onChange && n.props.onChange(e)
					}, n.saveDOMNodeRef = function(e) {
						var t = n.props.innerRef;
						t && t(e), n.textarea = e
					}, n.getLocals = function() {
						var e = n,
							t = e.props,
							o = (t.onResize, t.maxRows),
							s = (t.onChange, t.style),
							i = (t.innerRef, m(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							a = e.state.lineHeight,
							d = e.saveDOMNodeRef,
							c = o && a ? a * o : null;
						return r({}, i, {
							saveDOMNodeRef: d,
							style: c ? r({}, s, {
								maxHeight: c
							}) : s,
							onChange: n.onChange
						})
					}, p(n, o)
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
							o = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, c.default)(e.textarea)
						}))) : (0, c.default)(this.textarea), o && this.textarea.addEventListener("autosize:resized", this.props.onResize)
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
							o = e.saveDOMNodeRef,
							n = m(e, ["children", "saveDOMNodeRef"]);
						return a.default.createElement("textarea", r({}, n, {
							ref: o
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(a.default.Component), n.defaultProps = {
				rows: 1
			}, s);
			t.default = h, h.propTypes = {
				rows: d.default.number,
				maxRows: d.default.number,
				onResize: d.default.func,
				innerRef: d.default.func
			}
		},
		"./node_modules/react-autosize-textarea/lib/index.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n, s = o("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				r = (n = s) && n.__esModule ? n : {
					default: n
				};
			t.default = r.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function r() {}
			r.resetWarningCache = s, e.exports = function() {
				function e(e, t, o, s, r, i) {
					if (i !== n) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var o = {
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
				return o.PropTypes = o, o
			}
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/index.js": function(e, t, o) {
			e.exports = o("./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, o) {
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
		"./src/lib/scroll/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return a
			})), o.d(t, "a", (function() {
				return d
			}));
			var n = o("./src/lib/domUtils/index.ts"),
				s = o("./src/lib/fastdom/index.ts"),
				r = o("./src/reddit/components/CommentSort/index.tsx"),
				i = o("./src/reddit/constants/elementIds.ts");
			const a = () => {
					s.a.write(() => {
						const e = document.getElementById(i.e);
						e ? Object(n.c)(e, 0) : Object(n.c)(document, 0)
					})
				},
				d = e => {
					s.a.read(() => {
						const t = e ? document.getElementById(i.e) : window,
							o = document.getElementById(r.a);
						if (t && o) {
							const n = e ? o.offsetTop : o.offsetTop - 50;
							s.a.write(() => t.scrollTo({
								top: n,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return fe
			})), o.d(t, "r", (function() {
				return xe
			})), o.d(t, "p", (function() {
				return ye
			})), o.d(t, "t", (function() {
				return ve
			})), o.d(t, "w", (function() {
				return Oe
			})), o.d(t, "q", (function() {
				return je
			})), o.d(t, "v", (function() {
				return Te
			})), o.d(t, "o", (function() {
				return Se
			})), o.d(t, "m", (function() {
				return Me
			})), o.d(t, "b", (function() {
				return Fe
			})), o.d(t, "c", (function() {
				return Ae
			})), o.d(t, "s", (function() {
				return Be
			})), o.d(t, "g", (function() {
				return ze
			})), o.d(t, "h", (function() {
				return Ne
			})), o.d(t, "k", (function() {
				return Le
			})), o.d(t, "e", (function() {
				return We
			})), o.d(t, "d", (function() {
				return Ge
			})), o.d(t, "a", (function() {
				return Ve
			})), o.d(t, "j", (function() {
				return Xe
			})), o.d(t, "i", (function() {
				return Ye
			})), o.d(t, "l", (function() {
				return $e
			})), o.d(t, "u", (function() {
				return et
			})), o.d(t, "n", (function() {
				return tt
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/lib/makeDraftKey/index.ts"),
				i = o("./src/lib/scroll/index.ts"),
				a = o("./src/reddit/actions/changeUsername.ts"),
				d = o("./src/reddit/actions/login.ts"),
				c = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/actions/onboarding/index.ts"),
				u = o("./src/reddit/actions/post.ts"),
				m = o("./src/reddit/actions/postCreation/editorContent.ts"),
				p = o("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				h = o("./src/reddit/actions/shortcuts/utils.ts"),
				b = o("./src/reddit/actions/toaster.ts"),
				f = o("./src/reddit/constants/adEvents.ts"),
				_ = o("./src/reddit/constants/localStorage.ts"),
				g = o("./src/redditGQL/operations/CommentToxicity.json"),
				x = o("./src/lib/constants/index.ts"),
				y = o("./src/lib/makeApiRequest/index.ts"),
				C = o("./src/lib/makeGqlRequest/index.ts"),
				E = o("./src/lib/omitHeaders/index.ts"),
				v = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				O = o("./src/reddit/constants/headers.ts"),
				j = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				k = o("./src/reddit/helpers/genericServerError/index.ts"),
				w = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				T = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = o("./src/reddit/models/PostCreationForm/index.ts"),
				R = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				M = o("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				D = o("./src/reddit/helpers/graphql/helpers.ts"),
				F = o("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				I = o("./src/redditGQL/operations/CreateComment.json");
			const P = (e, t, o, n) => {
					let s, r;
					if (n === S.i.MARKDOWN) s = o.text, r = null;
					else {
						s = null;
						let e = null;
						o.rteState && (e = v.a.toRichTextJSON(o.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(C.a)(e, {
						...g,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				A = async (e, t, o, n) => {
					const s = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return o.commentMode === S.i.MARKDOWN ? s.text = o.text : (s.text = null, s.richtext_json = n), Object(y.a)(Object(E.a)(e, [O.a]), {
						method: x.ob.POST,
						endpoint: Object(j.a)(Object(R.a)(Object(M.a)(`${e.apiUrl}/api/comment.json`))),
						data: s
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(T.a)(e)
					} : {
						...e,
						body: {
							comment: Object(w.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(w.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(k.a)()
					})
				}, B = async (e, t, o, n, s) => {
					const r = n.commentMode === S.i.MARKDOWN,
						i = {
							postId: t || null,
							parentId: o || null,
							content: {
								markdown: r ? n.text : null,
								richText: r ? null : s
							}
						};
					return Object(C.a)(e, {
						...I,
						variables: {
							input: i
						}
					}).then(e => {
						if (e.ok) {
							const t = e.body.data.createComment;
							if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
								...e,
								ok: !1,
								error: Object(D.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(D.f)(t.errors)
							};
							if (t.ok) return {
								...e,
								body: {
									comment: Object(F.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							ok: !1,
							error: e.error || Object(k.a)()
						}
					})
				};
			var z = o("./src/redditGQL/operations/UpdateComment.json");
			var N = o("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var L = o("./src/reddit/endpoints/post/index.tsx"),
				U = o("./src/reddit/endpoints/post/convert.ts"),
				W = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				H = o("./src/reddit/featureFlags/index.ts"),
				q = o("./src/reddit/helpers/comment/index.ts"),
				K = o("./src/reddit/helpers/correlationIdTracker.ts"),
				G = o("./src/reddit/helpers/dom/index.ts"),
				V = o("./src/reddit/helpers/localStorage/index.ts"),
				X = o("./src/reddit/helpers/sessionStorage/index.ts"),
				J = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				Q = o("./src/reddit/models/Comment/index.ts"),
				Z = o("./src/reddit/models/PostDraft/index.ts"),
				Y = o("./src/reddit/models/RichTextJson/index.ts"),
				$ = o("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				ee = o("./src/reddit/models/Toast/index.ts"),
				te = o("./src/reddit/selectors/chatPost.ts"),
				oe = o("./src/reddit/selectors/comments.ts"),
				ne = o("./src/reddit/selectors/commentSelector.ts"),
				se = o("./src/reddit/selectors/experiments/chat.ts"),
				re = o("./src/reddit/constants/experiments.ts"),
				ie = o("./src/reddit/helpers/chooseVariant/index.ts"),
				ae = o("./node_modules/reselect/es/index.js");
			const de = Object(ae.a)(e => Object(ie.c)(e, {
				experimentEligibilitySelector: ie.a,
				experimentName: re.Ib
			}), e => e === re.Pd);
			var ce = o("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				le = o("./src/reddit/selectors/platform.ts"),
				ue = o("./src/reddit/selectors/posts.ts"),
				me = o("./src/reddit/selectors/user.ts"),
				pe = o("./src/reddit/actions/comment/index.ts"),
				he = o("./src/reddit/actions/comment/constants.ts");
			const be = Object(s.a)(he.m),
				fe = e => {
					let {
						hasFocus: t,
						draftKey: o
					} = e;
					return async (e, n) => {
						const s = n();
						if (!!s.features.comments.drafts[o])
							if (Object(me.T)(s) && t) {
								const n = be({
									hasFocus: t,
									draftKey: o
								});
								e(Object(a.startChangeUsernameFlow)(n))
							} else e(be({
								hasFocus: t,
								draftKey: o
							}))
					}
				},
				_e = Object(s.a)(he.L),
				ge = Object(s.a)(he.H),
				xe = Object(s.a)(he.N),
				ye = Object(s.a)(he.M),
				Ce = Object(s.a)(he.K),
				Ee = async (e, t, o, n, s) => {
					const r = n.ok && n.body,
						i = r && r.comment && r.comment.id;
					await J.g(e, o, t, s, i)
				}, ve = "Toxicity_Warning__Modal", Oe = e => async (t, o, n) => {
					let {
						gqlContext: s
					} = n;
					const r = o(),
						i = Object(le.e)(r);
					let a = "";
					i && (a = i.name);
					const {
						formData: d,
						editorMode: l
					} = e;
					if (H.d.enableToxicityWarning(r)) {
						if (!(await P(s(), a, d, l))) return void t(Object(c.i)(ve))
					}
					t(je(e))
				}, je = e => async (t, o) => {
					t(Object(c.g)(ve));
					const n = o(),
						s = Object(ce.a)(n),
						r = Object(ce.c)(n);
					if (!n.user.account && s) {
						const o = Object(q.e)(e.formData, n.uploads),
							s = Object(q.c)(e.formData, n.uploads);
						t(Object(c.k)({
							actionSource: c.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(X.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: s
							},
							isSkipOnboarding: r
						})
					} else t(we(e, !1))
				};

			function ke(e, t) {
				return e === S.i.MARKDOWN && de(t)
			}
			const we = (e, t, o, s) => {
					let {
						postId: r,
						commentsPageKey: a,
						draftKey: d,
						formData: c,
						editorMode: l,
						disableAutofocus: m,
						isLiveStreaming: _
					} = e;
					return async (e, g, x) => {
						let {
							apiContext: y,
							gqlContext: C
						} = x;
						var E;
						const v = g(),
							O = Object(te.d)(v, {
								postId: r
							}) && Object(se.i)(v),
							j = O ? Object(q.a)() : d,
							k = Object(ne.e)(v, {
								commentId: j
							}),
							w = Object(me.l)(v);
						if (!w) return;
						if (k && !O) return;
						t || e(_e({
							draftKey: j,
							draft: c,
							commentsPageKey: a,
							optimisticComment: O ? Object(q.b)({
								temporalId: j,
								draft: c,
								post: Object(ue.G)(v, {
									postId: r
								}),
								author: w,
								subredditId: (null === (E = Object(le.e)(v)) || void 0 === E ? void 0 : E.id) || ""
							}) : void 0
						}));
						const T = w.displayText,
							R = c.commentMode;
						let M;
						const D = _ ? "" : t && o ? o : Object(q.e)(c, v.uploads),
							F = Object(q.f)(D, v.uploads);
						if (_ ? (M = await Object(W.i)(y(), r, c, T), e(Object(p.a)({
								streamId: r,
								level: M.body.automuteLevel
							}))) : M = ke(R, v) ? await B(C(), r, null, c, D) : await A(y(), r, c, D), M.ok) {
							let o;
							if (o = M.body, e(xe({
									...o,
									headCommentId: Object(oe.w)(v, {
										commentsPageKey: a
									}),
									commentsPageKey: a,
									draftKey: j,
									upload: F
								})), t) {
								const e = Object(le.i)(v);
								Object(i.a)(!!e)
							}
							const n = Object(ue.G)(g(), {
								postId: r
							});
							e(Object(u.y)(n, f.a.CommentSubmitted))
						} else {
							if (M.error) {
								const e = t && s ? s : Object(q.c)(c, v.uploads);
								J.f({
									state: v,
									bodyText: e,
									postId: r,
									error: M.error,
									uploadMetadata: null == F ? void 0 : F.metadata
								})
							}
							const o = M.error && M.error.fields && M.error.fields[0] ? M.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(Ce({
								draftKey: j,
								error: M.error
							})), O || e(Object(b.f)({
								duration: b.a,
								kind: ee.b.Error,
								text: o
							}))
						}
						Ee(g(), a, l, M, null == F ? void 0 : F.metadata).then(() => M.ok && l === S.i.RICH_TEXT ? Object(K.b)(K.a.CommentComposer) : void 0), m || Object(h.d)(), t && Object(X.a)()
					}
				},
				Te = e => async (t, o, n) => {
					let {
						gqlContext: s
					} = n;
					const {
						parentCommentId: r,
						commentsPageKey: i,
						parentCommentDepth: a,
						draftKey: d,
						formData: l,
						editorMode: u
					} = e, m = o(), p = Object(le.e)(m);
					let h = "";
					if (p && (h = p.name), H.d.enableToxicityWarning(m)) {
						if (!(await P(s(), h, l, u))) return void t(Object(c.i)(ve))
					}
					t(Se({
						commentsPageKey: i,
						draftKey: d,
						parentCommentDepth: a,
						parentCommentId: r,
						formData: l,
						editorMode: u
					}))
				}, Se = e => async (t, o) => {
					t(Object(c.g)(ve));
					const n = o(),
						s = Object(ce.a)(n),
						r = Object(ce.c)(n);
					if (!n.user.account && s) {
						const o = Object(q.e)(e.formData, n.uploads),
							s = Object(q.c)(e.formData, n.uploads);
						t(Object(c.k)({
							actionSource: c.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(X.d)({
							comment: {
								...e,
								richTextJSONData: o,
								commentBodyText: s
							},
							isSkipOnboarding: r
						})
					} else t(Re(e, !1))
				}, Re = (e, t, o, n) => async (s, r, a) => {
					let {
						apiContext: d,
						gqlContext: c
					} = a;
					var l;
					const {
						parentCommentId: u,
						commentsPageKey: m,
						parentCommentDepth: p,
						draftKey: b,
						formData: f,
						editorMode: _
					} = e, g = r(), x = Object(ne.b)(g, {
						commentId: u
					}), y = x && Object(te.d)(g, {
						postId: x.postId
					}) && Object(se.i)(g), C = y ? Object(q.a)() : b, E = Object(ne.e)(g, {
						commentId: C
					}), v = Object(me.l)(g);
					if (!v) return;
					if (E && !y) return;
					t || s(_e({
						draftKey: C,
						draft: f,
						commentsPageKey: m,
						optimisticComment: y && x ? Object(q.b)({
							temporalId: C,
							draft: f,
							post: Object(ue.G)(g, {
								postId: x.postId
							}),
							author: v,
							subredditId: (null === (l = Object(le.e)(g)) || void 0 === l ? void 0 : l.id) || "",
							parentId: x.id
						}) : void 0
					})), s(Fe({
						parentCommentId: u,
						commentsPageKey: m
					}));
					const O = f.commentMode,
						j = t && o ? o : Object(q.e)(f, g.uploads),
						k = Object(q.f)(j, g.uploads);
					let w;
					if ((w = ke(O, g) ? await B(c(), null, u, f, j) : await A(d(), u, f, j)).ok) {
						if (s(ye({
								...w.body,
								parentCommentId: u,
								commentsPageKey: m,
								draftKey: C,
								depth: p + 1,
								upload: k
							})), t) {
							const e = Object(le.i)(g);
							Object(i.a)(!!e)
						}
					} else {
						if (w.error) {
							if (!x) return;
							const e = t && n ? n : Object(q.c)(f, g.uploads);
							J.f({
								state: g,
								bodyText: e,
								postId: x.postId,
								parentId: u,
								error: w.error,
								uploadMetadata: null == k ? void 0 : k.metadata
							})
						}
						s(Ce({
							draftKey: C,
							error: w.error
						}))
					}
					Ee(r(), m, _, w, null == k ? void 0 : k.metadata), Object(h.d)(), t && Object(X.a)()
				}, Me = () => async e => {
					const t = Object(X.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: o,
								parentCommentId: n,
								postId: s,
								richTextJSONData: r,
								commentBodyText: i
							},
							isSkipOnboarding: a
						} = t;
						a && e(Object(l.skipOnboardingModal)()), s ? await e(we({
							...t.comment,
							postId: s
						}, !0, r, i)) : n && void 0 !== o && await e(Re({
							...t.comment,
							parentCommentId: n,
							parentCommentDepth: o
						}, !0, r, i))
					}
				}, De = Object(s.a)(he.s), Fe = Object(s.a)(he.r), Ie = Object(s.a)(he.n), Pe = (Object(s.a)(he.i), Object(s.a)(he.o)), Ae = (Object(s.a)(he.v), (e, t, o) => async (s, r, i) => {
					let {
						apiContext: a
					} = i;
					const d = e === S.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(Y.H)(t)) s(Pe({
						editorMode: e,
						draftKey: o,
						content: d ? Y.i : ""
					})), s(Object(m.c)(e));
					else {
						s(Object(m.b)(o));
						const r = await Object(U.a)(a(), e, d ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(m.a)(o)), s(Pe({
								editorMode: e,
								draftKey: o,
								content: t
							})), s(Object(m.c)(e))
						} else s(Object(m.a)(o)), s(Object(b.f)({
							duration: b.a,
							kind: ee.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Be = e => {
					let {
						commentsPageKey: t,
						parentCommentId: o,
						singleOpen: n
					} = e;
					return async (e, s) => {
						const i = s(),
							l = Object(r.a)(Z.c.replyToComment, o);
						if (!Object(me.R)(s()) && !Object(ce.a)(i)) return e(Object(d.openRegisterModal)()), void e(Object(c.k)({
							actionSource: c.a.Reply,
							redirectUrl: Object(oe.m)(s(), {
								commentId: o
							})
						}));
						const u = i.features.comments.replyFormOpen[t],
							m = u && u[o];
						if ((m || u && n) && (Object.keys(u).forEach(o => u[o] && e(Fe({
								parentCommentId: o,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							h = null;
						const b = i.user.prefs.commentMode,
							f = Object(G.d)();
						if (f) {
							const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (b === S.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => $.s(e, null)).map(e => $.l([e])),
									o = $.s("", null),
									n = $.l([o]);
								h = {
									document: [$.c(t), n]
								}
							}
						}
						const _ = i.features.comments.drafts[l];
						let g;
						if (g = f ? {
								commentMode: b,
								draftType: Z.c.replyToComment,
								rtJson: h,
								text: `${p}\n`
							} : _ || {
								commentMode: b,
								draftType: Z.c.replyToComment,
								rtJson: h,
								text: ""
							}, Object(me.T)(i)) {
							const n = De({
								parentCommentId: o,
								commentsPageKey: t,
								draftKey: l,
								formData: g
							});
							e(Object(a.startChangeUsernameFlow)(n))
						} else e(De({
							parentCommentId: o,
							commentsPageKey: t,
							draftKey: l,
							formData: g
						}))
					}
				}, ze = e => async t => {
					t(Object(pe.r)(e)), t(We(e))
				}, Ne = e => {
					let {
						parentCommentId: t,
						commentsPageKey: o
					} = e;
					return async e => {
						e(Fe({
							parentCommentId: t,
							commentsPageKey: o
						})), e(Be({
							parentCommentId: t,
							commentsPageKey: o
						})), e(Object(pe.r)({
							commentId: t,
							commentsPageKey: o
						}))
					}
				}, Le = (e, t) => o => o(Ie({
					draftKey: e,
					formData: t
				})), Ue = Object(s.a)(he.u), We = e => {
					let {
						commentId: t,
						commentMode: o,
						commentsPageKey: n,
						draftKey: s,
						text: r
					} = e;
					return async (e, i) => {
						const a = i();
						a.user.account && (J.c(a), e(Ue({
							commentId: t,
							commentsPageKey: n,
							draftKey: s,
							formData: {
								text: r,
								commentMode: o,
								rteState: null,
								draftType: Z.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, He = Object(s.a)(he.F), qe = Object(s.a)(he.E), Ke = Object(s.a)(he.G), Ge = Object(s.a)(he.j), Ve = Object(s.a)(he.f), Xe = e => {
					let {
						id: t,
						commentsPageKey: o,
						draftKey: n,
						formData: s
					} = e;
					return async (e, r, i) => {
						let {
							apiContext: a,
							gqlContext: d
						} = i;
						const c = r();
						if (!c.user.account) return;
						e(He({
							draftKey: n
						})), J.d(c);
						const l = Object(q.e)(s, c.uploads),
							u = s.commentMode;
						let m;
						if ((m = ke(u, c) ? await (async (e, t, o, n, s) => {
								const r = s === S.i.MARKDOWN,
									i = {
										commentId: t,
										content: {
											markdown: r ? o.text : null,
											richText: r ? null : n
										}
									};
								return Object(C.a)(e, {
									...z,
									variables: {
										input: i
									}
								}).then(e => {
									if (e.ok) {
										const t = e.body.data.updateComment;
										if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
											...e,
											ok: !1,
											error: Object(D.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(D.f)(t.errors)
										};
										if (t.ok) return {
											...e,
											body: {
												comment: {
													...Object(F.c)(t.content)
												}
											}
										}
									}
									return {
										...e,
										ok: !1,
										error: e.error || Object(k.a)()
									}
								})
							})(d(), t, s, l, u) : await (async (e, t, o, n, s) => {
								const r = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return s === S.i.MARKDOWN ? r.text = o.text : (r.text = null, r.richtext_json = n), Object(y.a)(Object(E.a)(e, [O.a]), {
									endpoint: Object(j.a)(Object(M.a)(Object(R.a)(`${e.apiUrl}/api/editusertext`))),
									method: x.ob.POST,
									data: r
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(T.a)(e)
								} : {
									...e,
									body: {
										comment: Object(w.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(w.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(k.a)()
								})
							})(a(), t, s, l, u)).ok) {
							const s = m.body;
							e(Ke({
								commentId: t,
								commentsPageKey: o,
								draftKey: n
							})), e(Object(pe.j)({
								[t]: {
									...s.comment
								}
							}))
						} else e(qe({
							draftKey: n,
							error: m.error
						}))
					}
				}, Je = Object(s.a)(he.C), Qe = Object(s.a)(he.B), Ze = Object(s.a)(he.D), Ye = (e, t) => async (o, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n();
					o(Je({
						id: e
					})), J.a(e, i);
					const a = await ((e, t) => Object(y.a)(Object(E.a)(e, [O.a]), {
						endpoint: Object(j.a)(`${e.apiUrl}/api/del`),
						method: x.ob.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(T.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(k.a)()
					}))(r(), e);
					a.ok ? o(Ze({
						id: e,
						postId: t
					})) : o(Qe({
						id: e,
						error: a.error
					}))
				}, $e = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const r = !o().features.comments.models[e].sendReplies;
					t(Object(pe.j)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(L.q)(s(), e, r)).ok || t(Object(pe.j)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, et = (e, t) => async (o, s, r) => {
					let {
						gqlContext: i
					} = r;
					var a, d, c, l, u, m;
					o(Object(pe.c)());
					const p = e => Object(b.f)(Object(b.e)(e, ee.b.Error));
					if (((null === (d = null === (a = s().pages) || void 0 === a ? void 0 : a.comments) || void 0 === d ? void 0 : d.followed) || []).length === _.a) o(p(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === Q.a.FOLLOWED,
							a = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(pe.p)(a)), (await ((e, t) => Object(C.a)(e, {
								...N,
								variables: {
									input: t
								}
							}))(i(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(V.yb)(null !== (u = null === (l = null === (c = s().pages) || void 0 === c ? void 0 : c.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== u ? u : [], null === (m = s().user.account) || void 0 === m ? void 0 : m.id);
							const e = r ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							o(Object(b.f)({
								kind: ee.b.SuccessCommunityGreen,
								text: e
							}))
						} else o(Object(pe.p)(a)), o(p(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function tt(e) {
				let {
					commentId: t,
					commentsPageKey: o,
					isLivestreaming: n = !1
				} = e;
				return async (e, s) => {
					const r = s(),
						i = Object(ne.b)(r, {
							commentId: t
						});
					if (!i) return;
					e(ge({
						commentId: t,
						commentsPageKey: o
					}));
					const a = {
						commentMode: i.media.rteMode,
						draftType: i.parentId ? Z.c.replyToComment : Z.c.replyToPost,
						rtJson: i.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (i.parentId) {
						const t = Object(ne.b)(r, {
								commentId: i.parentId
							}),
							n = Object(oe.j)(r, {
								commentId: i.parentId,
								commentLink: void 0,
								commentsPageKey: o
							});
						if (!t || null === n) return;
						await e(Se({
							commentsPageKey: o,
							draftKey: i.id,
							parentCommentDepth: n,
							parentCommentId: t.id,
							formData: a,
							editorMode: i.media.rteMode
						}))
					} else await e(je({
						postId: i.postId,
						commentsPageKey: o,
						draftKey: i.id,
						formData: a,
						editorMode: i.media.rteMode,
						disableAutofocus: !0,
						isLiveStreaming: n
					}))
				}
			}
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return s
			})), o.d(t, "c", (function() {
				return r
			}));
			const n = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				r = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return m
			})), o.d(t, "a", (function() {
				return p
			}));
			var n = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/makeRequest/index.ts"),
				r = o("./src/config.ts"),
				i = o("./src/reddit/endpoints/governance/requester.ts");
			var a = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/reddit/actions/economics/me/constants.ts");
			const c = Object(a.a)(d.a),
				l = Object(a.a)(d.b),
				u = Object(a.a)(d.c),
				m = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const a = e && e.includeMemberships || !1,
						d = e && e.forceFetch || !1,
						l = o();
					if (!l.economics.me.fetched || a && !l.economics.me.data.specialMemberships || d) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), a);
						if (e.ok) {
							const o = e.body;
							a && !o.specialMemberships && (o.specialMemberships = {}), t(c(o))
						}
					}
				}, p = () => async (e, t) => {
					const o = t(),
						r = o.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!o.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							o = await Object(s.b)({
								endpoint: t,
								method: n.ob.GET
							});
						o.ok && o.body && e(u(o.body))
					}
				}
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			}));
			var n = o("./src/reddit/actions/toaster.ts"),
				s = o("./src/reddit/helpers/governanceErrorText/index.ts"),
				r = o("./src/reddit/models/Toast/index.ts");

			function i(e, t) {
				e(Object(n.f)({
					duration: 5e3,
					kind: r.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return I
			})), o.d(t, "a", (function() {
				return P
			})), o.d(t, "c", (function() {
				return A
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/post.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				a = o("./src/lib/constants/index.ts"),
				d = o("./src/lib/makeApiRequest/index.ts"),
				c = o("./src/lib/omitHeaders/index.ts"),
				l = o("./src/reddit/constants/headers.ts"),
				u = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				p = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
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
					method: a.ob.POST,
					data: _(t)
				}).then(m.b),
				x = o("./src/reddit/helpers/overlay/index.ts"),
				y = o("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				C = o("./src/reddit/helpers/trackers/lightbox.ts"),
				E = o("./src/reddit/helpers/trackers/post.ts"),
				v = o("./src/reddit/helpers/trackers/postComposer.ts"),
				O = o("./src/reddit/models/Media/index.ts"),
				j = o("./src/reddit/models/PostCreationForm/index.ts"),
				k = o("./src/reddit/models/Toast/index.ts"),
				w = o("./src/reddit/selectors/posts.ts"),
				T = o("./src/reddit/actions/postCreation/constants.ts"),
				S = o("./src/reddit/actions/postCreation/general.ts");
			const R = Object(s.a)(T.l),
				M = Object(s.a)(T.m),
				D = Object(s.a)(T.x),
				F = Object(s.a)(T.H),
				I = Object(s.a)(T.I),
				P = (e, t) => async (o, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n(),
						a = Object(w.G)(i, {
							postId: e
						});
					t ? (o(Object(x.a)(a.permalink)), Object(C.e)(e, "edit")(i)) : Object(E.e)(e, "edit")(i);
					const {
						media: d
					} = a;
					if (!d) return;
					let c, l = j.i.RICH_TEXT,
						u = "";
					d.type === O.o.TEXT ? (l = j.i.MARKDOWN, u = d.content) : d.type === O.o.RTJSON && (u = (l = d.rteMode || j.i.RICH_TEXT) === j.i.MARKDOWN ? d.markdownContent : d.richtextContent, c = d.mediaMetadata || void 0), o(F({
						editorMode: l,
						mediaMetadata: c,
						postContent: u,
						postId: e
					}))
				}, A = e => async (t, o, s) => {
					let {
						apiContext: a
					} = s;
					const {
						post: d
					} = e, c = !d.media || "rtjson" !== d.media.type && "text" !== d.media.type ? "" : d.media.rteMode;
					v.E(o(), Object(S.o)(c)), t(D(d.id));
					const l = await g(a(), e),
						u = !1 === l.body.success;
					if (t(R(d.id)), l.ok && !u) {
						t(Object(i.f)({
							kind: k.b.SuccessCommunity,
							text: n.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(I(d.id));
						const e = Object(y.a)(l.body);
						t(Object(r.R)({
							[d.id]: e
						}))
					} else t(M(l.error))
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return p
			})), o.d(t, "a", (function() {
				return h
			})), o.d(t, "d", (function() {
				return f
			})), o.d(t, "c", (function() {
				return _
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/toaster.ts"),
				i = o("./src/reddit/endpoints/post/convert.ts"),
				a = o("./src/reddit/helpers/localStorage/index.ts"),
				d = o("./src/reddit/helpers/trackers/postComposer.ts"),
				c = o("./src/reddit/models/PostCreationForm/index.ts"),
				l = o("./src/reddit/models/RichTextJson/index.ts"),
				u = o("./src/reddit/models/Toast/index.ts"),
				m = o("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(s.a)(m.G),
				h = Object(s.a)(m.p),
				b = Object(s.a)(m.Q),
				f = (e, t, o) => async (s, a, f) => {
					let {
						apiContext: g
					} = f;
					d.m(a(), t);
					const x = t === c.i.MARKDOWN,
						y = t === c.i.RICH_TEXT,
						C = m.k;
					if (x && Object(l.H)(o)) return s(b({
						editorKey: e,
						editorMode: c.i.MARKDOWN,
						content: ""
					})), void s(_(t));
					if (y && !o) return s(b({
						editorKey: e,
						editorMode: c.i.RICH_TEXT,
						content: l.i
					})), void s(_(t));
					s(p(C));
					const E = await Object(i.a)(g(), t, x ? JSON.stringify(o) : o);
					E.ok ? (s(h(C)), s(b({
						editorKey: e,
						editorMode: t,
						content: E.body.output
					})), s(_(t))) : (s(h(C)), s(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, _ = e => async (t, o) => {
					const s = Object(a.l)();
					if (s >= 3) return;
					const i = o().user.prefs.useMarkdown ? c.i.MARKDOWN : c.i.RICH_TEXT;
					if (e === i) return;
					const d = e === c.i.MARKDOWN ? n.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : n.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: n.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: d
					})), Object(a.vb)(s + 1)
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return F
			})), o.d(t, "b", (function() {
				return P
			})), o.d(t, "a", (function() {
				return A
			})), o.d(t, "c", (function() {
				return z
			})), o.d(t, "e", (function() {
				return N
			})), o.d(t, "d", (function() {
				return L
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/uuid/dist/esm-browser/v4.js"),
				r = o("./src/lib/constants/index.ts"),
				i = o("./src/lib/formatApiError/index.ts"),
				a = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/reddit/actions/toaster.ts"),
				c = o("./src/reddit/actions/upload.ts"),
				l = o("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				u = o("./src/lib/makeApiRequest/index.ts"),
				m = o("./src/lib/makeGqlRequest/index.ts"),
				p = o("./src/lib/omitHeaders/index.ts"),
				h = o("./src/reddit/constants/headers.ts"),
				b = o("./src/redditGQL/operations/CreateMediaUploadLease.json");
			var f = o("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = o("./src/reddit/helpers/imagePreview/index.ts"),
				g = o("./src/reddit/helpers/media/index.ts"),
				x = o("./src/reddit/models/Upload/index.ts"),
				y = o("./src/reddit/selectors/telemetry.ts"),
				C = o("./src/telemetry/index.ts");
			const E = e => ({
				...y.o(e),
				screen: y.bb(e),
				profile: y.T(e),
				subreddit: y.jb(e)
			});
			var v = o("./src/reddit/helpers/trackers/postComposer.ts"),
				O = o("./src/reddit/models/PostCreationForm/index.ts"),
				j = o("./src/reddit/models/Toast/index.ts"),
				k = o("./src/reddit/selectors/postCreations.ts"),
				w = o("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				T = o("./src/reddit/actions/postCreation/constants.ts"),
				S = o("./src/reddit/actions/postCreation/general.ts");
			const R = Object(a.a)(T.u),
				M = Object(a.a)(T.v),
				D = Object(a.a)(T.t),
				F = e => async (t, o) => {
					t(R());
					const n = e.map(e => {
						let {
							url: o,
							uploadKey: n
						} = e;
						const s = Object(g.b)(Object(g.d)(o), "poster.png");
						return t(B(s, n, !0))
					});
					await Promise.all(n);
					const s = o().uploads,
						r = e.map(e => {
							let {
								uploadKey: t
							} = e;
							return s[t]
						}).find(e => e.status !== x.a.SUCCESS);
					t(r ? D(r.error) : M())
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
			const P = "RTE",
				A = "GALLERY",
				B = (e, t, o, s, i, a, l) => async (O, T, S) => {
					let {
						apiContext: R,
						gqlContext: M
					} = S;
					const D = Object(k.h)(T()),
						F = Date.now();
					let P = null,
						A = !1,
						B = !1,
						z = !1;
					const N = e => {
						if (!z && s && A) {
							z = !0;
							const o = T(),
								n = Date.now() - F,
								r = Object(f.c)(f.a.PostComposer);
							B ? (async e => {
								let {
									state: t,
									uploadKey: o,
									assetId: n,
									isCanceled: s,
									fileSource: r,
									uploadDuration: i,
									correlationId: a
								} = e;
								const d = t.uploads[o],
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
								Object(C.a)({
									source: "post_composer",
									action: "upload",
									correlationId: a,
									noun: b ? "video" : "image",
									...E(t),
									actionInfo: {
										...y.d(t),
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
										...n ? {
											id: n
										} : {},
										...u ? {
											url: u
										} : {},
										...g
									}
								})
							})({
								state: o,
								uploadKey: t,
								assetId: P,
								isCanceled: e,
								fileSource: s,
								uploadDuration: n,
								correlationId: r
							}) : v.D(o, t)
						}
					};
					return await O(Object(c.l)(e, t, async f => {
						var x, y, C, E;
						A = !0, Object(c.k)(f.id, () => {
							N(!0)
						});
						const {
							error: v,
							metadata: k
						} = await async function(e, t, o, s) {
							const i = o && o.allowedPostTypes,
								a = o && o.name,
								d = await Object(g.h)(e) || e.type,
								c = Object(g.c)(e) || void 0;
							if (!c) return I("UNSUPPORTED_BROWSER");
							const l = {
								localUrl: c,
								mimetype: d,
								size: e.size
							};
							if (!d || !Object(g.k)(d)) return {
								error: {
									type: r.Y
								}
							};
							if (d.startsWith("image/")) {
								if (t && i && !i.images) {
									const e = n.fbt._("Images are not allowed in r/{subredditName}", [n.fbt._param("subredditName", a)], {
										hk: "3C2E7Q"
									});
									return I(r.Y, e)
								}
								if ("image/gif" === d) {
									if (e.size > r.eb) return I(r.O)
								} else if (e.size > r.gb) return I(r.W);
								const o = await Object(_.a)(c);
								if (s && (o.width < s || o.height < s)) {
									const e = n.fbt._("Image must be {min_image_width}x{min_image_height} pixels or larger.", [n.fbt._param("min_image_width", s.toString()), n.fbt._param("min_image_height", s.toString())], {
										hk: "2WFKgs"
									});
									return I(r.V, e)
								}
								l.width = o.width, l.height = o.height
							} else if (d.startsWith("video/")) {
								if (e.size > r.kb) return I(r.vc);
								let t;
								try {
									t = await Object(g.j)(c, !0)
								} catch (u) {
									return I(r.Y)
								}
								if (i) {
									const {
										videos: e,
										images: o
									} = i;
									if (o && !e && t.duration > r.lb) {
										const e = n.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [n.fbt._param("subredditName", a)], {
											hk: "46ULiz"
										});
										return I(r.Y, e)
									}
									if (!o && !e) {
										const e = n.fbt._("Videos are not allowed in r/{subredditName}", [n.fbt._param("subredditName", a)], {
											hk: "4uTUZb"
										});
										return I(r.Y, e)
									}
								}
								if (t.duration > r.jb) {
									const e = n.fbt._("Video is too long. Maximum video length is {duration} minutes.", [n.fbt._param("duration", (r.jb / 60).toString())], {
										hk: "20nB6Q"
									});
									return I(r.Y, e)
								}
								if (t.duration < r.rb) {
									const e = n.fbt._("Video is too short. Minimum video length is {duration} seconds.", [n.fbt._param("duration", r.rb.toString())], {
										hk: "49PSW8"
									});
									return I(r.Y, e)
								}
								if (0 === t.height || 0 === t.width) {
									const e = n.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return I(r.Y, e)
								}
								if (t.height < r.sb || t.width < r.tb) {
									const e = n.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [n.fbt._param("min_video_width", r.tb.toString()), n.fbt._param("min_video_height", r.sb.toString())], {
										hk: "2HSUGl"
									});
									return I(r.Y, e)
								}
								if (e.size / t.duration < r.qb) {
									const e = n.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [n.fbt._param("min_bitrate", (r.qb / r.Z).toString())], {
										hk: "1ehgDE"
									});
									return I(r.Y, e)
								}
								l.height = t.height, l.width = t.width, l.videoDuration = t.duration, l.videoFirstFrameUrl = t.firstFrame.dataUrl
							}
							return {
								metadata: l
							}
						}(e, o, D, l);
						if (v || !k) return {
							error: v
						};
						if (O(Object(c.m)({
								key: t,
								metadata: {
									fileSource: s,
									...k
								}
							})), B = !0, i && i(), a) {
							const e = k.mimetype,
								t = e && r.T[e];
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
								})(M(), t);
								if (e.ok) {
									const t = e.body,
										o = (null === (x = t.data.createMediaUploadLease) || void 0 === x ? void 0 : x.uploadLease.uploadLeaseUrl) || "",
										n = Object(w.a)({
											uploadLeaseUrl: o,
											uploadLeaseHeaders: null === (y = t.data.createMediaUploadLease) || void 0 === y ? void 0 : y.uploadLease.uploadLeaseHeaders
										});
									return P = (null === (C = t.data.createMediaUploadLease) || void 0 === C ? void 0 : C.mediaId) || null, {
										uploadLease: n
									}
								} {
									const t = null === (E = e.body.data.createMediaUploadLease) || void 0 === E ? void 0 : E.errors;
									let o = null;
									return t && (o = {
										fields: [{
											field: t[0].__typename || "",
											msg: t[0].message
										}],
										type: t[0].__typename || ""
									}), {
										error: o || void 0
									}
								}
							}
							return O(Object(d.f)({
								kind: j.b.Error,
								text: n.fbt._("Only .jpeg and .png image types are are allowed", null, {
									hk: "30Ms4V"
								}),
								duration: 6e3
							})), {
								error: void 0
							}
						}
						const T = e.name,
							S = await (async (e, t, o) => Object(u.a)(Object(p.a)(e, [h.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: r.ob.POST,
								data: {
									filepath: t,
									mimetype: o
								}
							}))(R(), T, k.mimetype);
						return S.ok ? (P = S.body.asset.asset_id, {
							uploadLease: S.body.args
						}) : {
							error: S.error || void 0
						}
					}, !0)), N(!1), T().uploads[t] || null
				}, z = (e, t) => async (o, n) => {
					const s = n().uploads[e];
					s && !Object(x.c)(s) && await o(B(s.file, s.key, t, s.metadata.fileSource, void 0))
				}, N = (e, t, o, r, a, c) => async (l, u) => {
					const m = e.map((e, n) => new Promise(async n => {
							const i = Object(x.d)(o, Object(s.a)().slice(-6));
							await l(B(e, i, r, t, () => n({
								uploadKey: i,
								isValid: !0
							}), a, c)), n({
								uploadKey: i,
								isValid: !1
							})
						})),
						p = await Promise.all(m),
						h = p.map(e => e.uploadKey);
					return l(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (o, s) => {
							const {
								uploads: r
							} = s(), a = e.map(e => r[e]).filter(e => e.status === x.a.FAILED && !e.metadata.mimetype).map(e => e.error), c = a.length > t ? t - 1 : a.length, l = a.length - c;
							a.slice(0, c).forEach(e => o(Object(d.f)({
								duration: d.a,
								kind: j.b.Error,
								text: Object(i.a)(e)
							}))), l > 0 && o(Object(d.f)({
								duration: d.a,
								kind: j.b.Error,
								text: n.fbt._({
									"*": "Couldn't add {number} more files",
									_1: "Couldn't add 1 more file"
								}, [n.fbt._plural(l, "number")], {
									hk: "2fQwvl"
								})
							}))
						}
					}(h)), p.filter(e => e.isValid).map(e => e.uploadKey)
				}, L = (e, t) => async (o, s) => {
					const r = s(),
						i = Object(k.X)(r),
						{
							items: a
						} = i,
						u = !a.length && 1 === e.length,
						m = Object(k.O)(r) && !u;
					let p = !1,
						h = e;
					if (m) {
						if (Object(O.x)(i)) return void o(Object(d.f)({
							kind: j.b.Error,
							text: n.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						h.some(e => Object(g.n)(e.type)) && o(Object(d.f)({
							duration: d.a,
							kind: j.b.Error,
							text: n.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), h = h.filter(e => Object(g.m)(e.type));
						const e = Math.max(0, l.b - a.length);
						h.length > e && (o(Object(d.f)({
							kind: j.b.Error,
							text: n.fbt._("You have hit the limit of {images_limit} images", [n.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), h = h.slice(0, e))
					} else h = h.slice(0, 1), p = !0, o(Object(c.j)(A, !0));
					const b = await o(N(h, t, A, !0));
					if (!b.length) return;
					const f = b.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						_ = 0 === a.length;
					o(Object(S.d)({
						...i,
						items: p ? f : [...a, ...f],
						selectedKey: _ ? b[0] : b[b.length - 1]
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			})), o.d(t, "b", (function() {
				return d
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = o("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(n.a)(r.r),
				a = Object(n.a)(r.F),
				d = e => async (t, o, n) => {
					let {
						apiContext: r
					} = n;
					const d = await Object(s.a)(r(), e);
					d && d.ok ? t(i({
						streamId: e,
						level: d.body.data.auto_mute_status.level
					})) : t(a(e))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return n
			})), o.d(t, "b", (function() {
				return s
			})), o.d(t, "a", (function() {
				return r
			}));
			const n = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				s = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				r = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/upload.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return c
			})), o.d(t, "h", (function() {
				return l
			})), o.d(t, "c", (function() {
				return u
			})), o.d(t, "e", (function() {
				return m
			})), o.d(t, "g", (function() {
				return p
			})), o.d(t, "b", (function() {
				return h
			})), o.d(t, "a", (function() {
				return b
			})), o.d(t, "f", (function() {
				return f
			})), o.d(t, "m", (function() {
				return x
			})), o.d(t, "k", (function() {
				return k
			})), o.d(t, "l", (function() {
				return T
			})), o.d(t, "i", (function() {
				return S
			})), o.d(t, "j", (function() {
				return R
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/lodash/get.js"),
				s = o.n(n),
				r = o("./node_modules/uuid/dist/esm-browser/v4.js"),
				i = o("./src/lib/makeActionCreator/index.ts"),
				a = o("./src/lib/uploadToS3/index.ts"),
				d = o("./src/reddit/models/Upload/index.ts");
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
				y = Object(i.a)(m),
				C = Object(i.a)(p),
				E = Object(i.a)(h),
				v = Object(i.a)(b),
				O = Object(i.a)(f),
				j = new Map,
				k = (e, t) => {
					const o = j.get(e) || [];
					o.push(t), j.set(e, o)
				},
				w = (e, t) => {
					const o = j.get(e);
					o && o.forEach(o => o(e, t)), j.delete(e)
				},
				T = function(e, t, o) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
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
						} = await o(c().uploads[l]);
						if (m()) return;
						if (h || !p) return void i(E({
							key: l,
							error: h
						}));
						let b;
						k(u, () => {
							b && b.abort()
						}), i(g({
							key: l
						}));
						const f = await Object(a.a)(e, p, e => (b = e, n && e.on("progress", e => {
							if (!m() && "upload" === e.direction) {
								const t = {
									percent: e.percent,
									total: e.total,
									uploaded: e.loaded
								};
								i(y({
									key: l,
									progress: t
								}))
							}
						}), e));
						if (b = null, !m())
							if (f.ok) {
								const e = decodeURIComponent(f.body.PostResponse.Location);
								i(C({
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
								i(E({
									key: l,
									error: t
								}))
							}
					}
				},
				S = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (o, n) => {
						const s = n().uploads[e];
						s && (w(s.id, t), o(t ? O({
							key: e
						}) : v({
							key: e
						})))
					}
				},
				R = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (o, n) => {
						Object.keys(n().uploads).forEach(n => {
							n.startsWith(e) && o(S(n, t))
						})
					}
				}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less": function(e, t, o) {
			e.exports = {
				breakout: "_1VBLErIxAjOke05q8yLOyf"
			}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
				a = o.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t) => 21 * e + 33 + (t ? 10 : 0);
			t.a = e => {
				let {
					breakOut: t,
					depth: o,
					isEditing: n,
					...i
				} = e;
				return s.a.createElement("div", d({
					className: Object(r.a)({
						[a.a.breakout]: t
					}),
					style: {
						left: c(o, n)
					}
				}, i))
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/CommentCreation/FormFooter/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/controls/Button/index.tsx"),
				d = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = o("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				l = o.n(c);
			const {
				fbt: u
			} = o("./node_modules/fbt/lib/FbtPublic.js"), m = i.a.wrapped(d.a, "LoadingIcon", l.a), p = i.a.wrapped(a.t, "CancelButton", l.a), h = e => e.preventDefault();
			t.a = e => {
				let {
					pending: t,
					cancelButtonEnabled: o = !0,
					children: n,
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
				}) : d), o && s.a.createElement(p, {
					priority: a.c.Secondary,
					size: a.d.XS,
					type: "reset",
					disabled: t,
					onClick: f,
					onMouseDown: h
				}, u._("Cancel", null, {
					hk: "2TSLl5"
				}))), n)
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less": function(e, t, o) {
			e.exports = {
				Wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				MarkdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				markdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				Button: "_1Q2Vq3gesOWZA73NbspEiQ",
				button: "_1Q2Vq3gesOWZA73NbspEiQ"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return be
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/debounce.js"),
				r = o.n(s),
				i = o("./node_modules/lodash/noop.js"),
				a = o.n(i),
				d = o("./node_modules/react/index.js"),
				c = o.n(d),
				l = o("./node_modules/react-dom/index.js"),
				u = o("./node_modules/react-redux/es/index.js"),
				m = o("./node_modules/reselect/es/index.js"),
				p = o("./src/reddit/actions/comment/authoring.ts"),
				h = o("./src/reddit/components/AuthorLink/index.tsx"),
				b = o("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				f = o("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				_ = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				g = o("./src/reddit/components/MarkdownHelp/index.tsx"),
				x = o("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				y = o("./src/reddit/controls/ErrorText/index.tsx"),
				C = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = o("./src/reddit/icons/svgs/Help/index.tsx"),
				v = o("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				O = o("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				j = o("./src/lib/fastdom/index.ts"),
				k = o("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				w = o.n(k),
				T = o("./src/lib/lessComponent.tsx");
			const S = 310,
				R = T.a.div("Container", w.a);
			class M extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), o = t < S ? "compact" : "full";
						o !== this.state.toolbarType && j.a.write(() => {
							this.setState({
								toolbarType: o
							})
						})
					}
				}
				componentDidMount() {
					j.a.read(this.selectToolbar), window.addEventListener("resize", this.selectToolbar)
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
			var D = o("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				F = o("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				I = o("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				P = o.n(I),
				A = o("./src/reddit/controls/Button/index.tsx");
			const B = T.a.wrapped(C.a, "LoadingIcon", P.a),
				z = e => {
					let {
						isFilled: t,
						...o
					} = e;
					return c.a.createElement(B, o)
				},
				N = T.a.div("Wrapper", P.a),
				L = T.a.wrapped(D.a, "MarkdownModeIcon", P.a),
				U = e => {
					let {
						isFilled: t,
						...o
					} = e;
					return c.a.createElement(L, o)
				};
			var W = c.a.memo((function(e) {
					const t = n.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return c.a.createElement(N, null, c.a.createElement(A.t, {
						priority: A.c.Plain,
						size: A.d.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? z : U
					}, c.a.createElement(F.a, {
						text: t
					})))
				})),
				H = o("./src/lib/classNames/index.ts"),
				q = o("./src/reddit/constants/keycodes.ts"),
				K = o("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				G = o("./src/realtime/GQLSubscription/async.tsx"),
				V = o("./src/reddit/components/UsersCountIndicator/constants.ts"),
				X = o("./src/reddit/constants/componentSizes.ts"),
				J = o("./src/reddit/constants/componentTestIds.ts"),
				Q = o("./src/reddit/selectors/activeModalId.ts"),
				Z = o("./src/reddit/selectors/comments.ts"),
				Y = o("./src/reddit/selectors/editorContent.ts"),
				$ = o("./src/reddit/selectors/experiments/typingIndicators.ts"),
				ee = o("./src/reddit/actions/modal.ts"),
				te = o("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				oe = o("./src/reddit/models/PostCreationForm/index.ts"),
				ne = o("./src/reddit/models/PostDraft/index.ts"),
				se = o("./src/reddit/models/User/index.ts"),
				re = o("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				ie = o.n(re);
			const ae = T.a.button("SwitchModeButton", ie.a),
				de = T.a.wrapped(C.a, "LoadingIcon", ie.a),
				ce = T.a.div("CommentHeader", ie.a),
				le = T.a.span("FormHeaderText", ie.a),
				ue = T.a.button("HelpButton", ie.a),
				me = T.a.wrapped(E.a, "HelpIcon", ie.a),
				pe = T.a.wrapped(te.a, "ResizableAutosizeTextarea", ie.a),
				he = T.a.wrapped(x.a, "CurrentUserIcon", ie.a),
				be = e => c.a.createElement(ue, {
					className: e.className,
					onClick: e.onClick
				}, c.a.createElement(me, null)),
				fe = 8,
				_e = 16,
				ge = Object(u.b)(() => Object(m.c)({
					activeModalId: Q.a,
					userName: e => e.user.account ? Object(se.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: Z.i,
					isConverting: (e, t) => Object(Y.a)(e, t.draftKey),
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object($.d)(e)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(ee.i)(Object(K.a)(t.draftKey))),
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
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < X.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.wrapperHeight || j.a.write(() => {
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
							j.a.read(this.detectBreakout)
						}), this.props.isTypingIndicatorsWriteTestEnabled && (this.state.isUserTyping || this.setState({
							isUserTyping: !0
						}), this.setUserStoppedTyping())
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === ne.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onBlur = e => {
						(!e || e && e.relatedTarget !== this.switchModeBtn) && (this.textAreaRef && this.textAreaRef.blur(), this.props.onFocusChanged(!1))
					}, this.onFocus = () => {
						this.props.onFocus(), this.props.onFocusChanged(!0)
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: o,
							keyCode: n
						} = e;
						(t || o) && n === q.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: oe.i.MARKDOWN,
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
						isTypingIndicatorsWriteTestEnabled: o
					} = e;
					o && (this.realtimeGQLVariables = {
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
						cancelModalText: s === ne.c.edit ? n.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : n.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						isUserTyping: !1
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), j.a.read(this.detectBreakout), j.a.write(() => {
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
							hasError: o,
							pending: n
						} = this.props;
					t && !n && !o ? this.setState({
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
					return e instanceof Element ? e.getBoundingClientRect().height + fe + _e + X.n : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: o,
						className: s,
						disableAutofocus: r,
						depth: i,
						draft: d,
						draftKey: l,
						draftType: u,
						errorMsgs: m,
						pending: x,
						modalSeen: C,
						submitButtonText: E,
						isCommentBoxDesignEnabled: j,
						isExpanded: k,
						isTopLevelComment: w,
						isTypingIndicatorsWriteTestEnabled: T,
						onSwitchMode: S,
						userName: R
					} = this.props, {
						cancelModalText: D,
						showError: F,
						text: I,
						breakOut: P,
						wrapperHeight: A,
						isUserTyping: B
					} = this.state, z = Object(K.a)(l), N = d.draftType === ne.c.edit;
					return c.a.createElement("div", {
						"data-test-id": J.b,
						className: Object(H.a)(ie.a.Wrapper, s, {
							[ie.a.isTopLevelComment]: w,
							[ie.a.mExpanded]: k,
							[ie.a.mRedesign]: j
						}),
						ref: this.setWrapperRef,
						style: {
							height: P ? A : void 0
						}
					}, T && B && c.a.createElement(G.a, {
						variables: this.realtimeGQLVariables,
						onData: a.a,
						queryKey: "userIsTypingOnPost"
					}), !j && w && R && c.a.createElement(ce, null, c.a.createElement(le, null, n.fbt._("Comment as {authorLink}", [n.fbt._param("authorLink", c.a.createElement(h.a, {
						author: R,
						isAuthorDeleted: !1
					}, R))], {
						hk: "4pMWAk"
					}))), c.a.createElement(v.a, {
						breakOut: P,
						depth: i,
						isEditing: N
					}, j && c.a.createElement("div", {
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
						placeholder: j ? n.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : n.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: I
					}), (!j || k) && c.a.createElement(O.a, {
						className: ie.a.FormFooter,
						cancelButtonEnabled: u !== ne.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: x,
						submitButtonText: E,
						canSubmit: this.userHasEnteredText()
					}, c.a.createElement(M, null, e => "compact" === e ? c.a.createElement(W, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => S(oe.i.RICH_TEXT, I, l),
						isConverting: this.props.isConverting
					}) : c.a.createElement("div", null, c.a.createElement(ae, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => S(oe.i.RICH_TEXT, I, l)
					}, n.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "ousUG"
					}), this.props.isConverting && c.a.createElement(de, {
						sizePx: 12
					})))), c.a.createElement(be, {
						onClick: this.props.helpModalToggled
					})))), F && Object(y.c)(m), e === z && c.a.createElement(_.a, {
						actionText: n.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: n.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: D,
						onConfirm: () => this.cancelForm(),
						toggleModal: o,
						trackClick: () => {}
					}), e === g.b && c.a.createElement(g.a, {
						withOverlay: !0
					}), e === p.t && c.a.createElement(f.a, {
						onSubmit: this.onSubmit,
						modalSeen: C,
						withOverlay: !0
					}), c.a.createElement(b.a, {
						editKey: l,
						hasValue: !!I
					}))
				}
			}
			t.b = ge(xe)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-router/esm/react-router.js");
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
						const e = this.props.isPostEdit ? n.fbt._("You have a post edit in progress, are you sure you want to discard it?", null, {
							hk: "4u5L7p"
						}) : n.fbt._("You have a comment in progress, are you sure you want to discard it?", null, {
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
		"./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less": function(e, t, o) {
			e.exports = {
				RequestBox: "_2dVm83ugs7xhdLU8UptoxO",
				requestBox: "_2dVm83ugs7xhdLU8UptoxO",
				commentIcon: "_3-cqJ5aJH2EZKxhqY43T9D",
				commentText: "_2o9LnZvm1HYNaUjzmMO8E5",
				requestButton: "_3OvdD2phTivi0gnXR8NPl-"
			}
		},
		"./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/CommentCreation/ToolbarSelector.m.less": function(e, t, o) {
			e.exports = {
				Container: "_1XC-wMQsKPqfaPcfWQCZdW",
				container: "_1XC-wMQsKPqfaPcfWQCZdW"
			}
		},
		"./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/uuid/dist/esm-browser/v4.js"),
				a = o("./src/higherOrderComponents/asModal/index.tsx"),
				d = o("./src/reddit/actions/comment/authoring.ts"),
				c = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = o("./src/reddit/components/TrackingHelper/index.tsx"),
				m = o("./src/reddit/controls/TextButton/index.tsx"),
				p = o("./src/reddit/constants/tracking.ts"),
				h = o("./src/reddit/selectors/telemetry.ts");
			const b = e => ({
					source: "toxicity_modal",
					...h.o(e),
					screen: h.bb(e),
					subreddit: h.jb(e)
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
			var y = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: C
			} = o("./node_modules/fbt/lib/FbtPublic.js"), E = Object(r.b)(null, (e, t) => ({
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
					return s.a.createElement(l.e, null, s.a.createElement(l.i, null, s.a.createElement(y.a, null, s.a.createElement(l.q, null, C._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), s.a.createElement(m.a, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.closeModal()
						}
					}, s.a.createElement(l.b, null)))), s.a.createElement(l.l, null, s.a.createElement(l.p, null, C._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), s.a.createElement(l.g, null, s.a.createElement(l.a, {
						onClick: () => {
							this.props.sendEvent(g(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, C._("Go back and edit", null, {
						hk: "3nGNI7"
					})), s.a.createElement(l.r, {
						onClick: () => {
							this.props.sendEvent(_(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, C._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(a.a)(E(Object(u.c)(v)))
		},
		"./src/reddit/components/CommentCreation/getCancelModalId.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			}));
			const n = e => `Comment-cancelModal__${e}`
		},
		"./src/reddit/components/CommentCreation/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./node_modules/lodash/once.js"),
				s = o.n(n),
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
				a = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				c = o("./src/reddit/actions/comment/index.ts"),
				l = o("./src/reddit/actions/comment/authoring.ts"),
				u = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				m = o("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				p = o("./src/lib/lessComponent.tsx"),
				h = o("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				b = o("./src/reddit/icons/fonts/Comment/index.tsx"),
				f = o("./src/reddit/models/SubredditRestrictions/index.ts"),
				_ = o("./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less"),
				g = o.n(_);
			const {
				fbt: x
			} = o("./node_modules/fbt/lib/FbtPublic.js"), y = p.a.div("RequestBox", g.a);
			var C = () => i.a.createElement(y, null, i.a.createElement(b.a, {
					className: g.a.commentIcon
				}), i.a.createElement("div", {
					className: g.a.commentText
				}, x._("Only approved users can comment in this community.", null, {
					hk: "3oqccc"
				})), i.a.createElement(h.default, {
					className: g.a.requestButton,
					eventSource: f.b.Comment
				})),
				E = o("./node_modules/fbt/lib/FbtPublic.js"),
				v = o("./node_modules/lodash/noop.js"),
				O = o.n(v),
				j = o("./src/lib/classNames/index.ts"),
				k = o("./src/lib/fastdom/index.ts"),
				w = o("./src/lib/memoizeByReference/index.ts"),
				T = o("./src/reddit/components/AuthorLink/index.tsx"),
				S = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				R = o("./src/reddit/components/RichTextEditor/index.tsx"),
				M = o("./src/reddit/featureFlags/index.ts"),
				D = o("./src/reddit/components/CollapseIntoOverflow/index.tsx"),
				F = o("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				I = o("./src/reddit/helpers/richTextEditor/index.ts"),
				P = o("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				A = o("./src/reddit/icons/svgs/Smile/index.tsx"),
				B = o("./src/reddit/selectors/gold/enabledFeatures.ts"),
				z = o("./src/reddit/selectors/gold/powerups/index.ts"),
				N = o("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				L = o("./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less"),
				U = o.n(L);
			const W = Object(d.c)({
				emotes: (e, t) => {
					let {
						subredditId: o
					} = t;
					return Object(B.a)(e, {
						subredditId: o
					})
				},
				subredditHasPowerups: (e, t) => {
					let {
						subredditId: o
					} = t;
					return Object(z.b)(e, {
						subredditId: o
					})
				}
			});
			var H = Object(a.b)(W)((function(e) {
					const {
						controlsState: t,
						emotes: o,
						onEmoteButtonClick: n,
						subredditHasPowerups: s
					} = e, r = s ? E.fbt._("Add Emoji", null, {
						hk: "3EV4aU"
					}) : E.fbt._("Add Emote", null, {
						hk: "3dXLr8"
					});
					return i.a.createElement(N.a, {
						Icon: () => i.a.createElement(A.a, {
							className: U.a.smile
						}),
						tooltip: r,
						enabled: t.emote.isEnabled,
						onClick: n
					}, i.a.createElement("div", {
						className: Object(j.a)(U.a.emotes, {
							[U.a.emoteMask]: o.length > 1
						})
					}, o.map(e => i.a.createElement("img", {
						className: U.a.emote,
						key: e.id,
						src: e.emoji.path
					}))))
				})),
				q = o("./src/lib/constants/icons.ts");

			function K(e) {
				const {
					controlsState: t,
					onGifButtonClick: o
				} = e;
				return i.a.createElement(N.a, {
					iconName: q.a.gif_post,
					tooltip: E.fbt._("Add GIF", null, {
						hk: "3uH3vO"
					}),
					disabledTooltip: E.fbt._("Limit one media per comment", null, {
						hk: "4BKWLn"
					}),
					enabled: t.giphy.isEnabled,
					onClick: o
				})
			}
			var G = o("./src/reddit/selectors/comments.ts"),
				V = o("./src/reddit/selectors/experiments/mediaInComments.ts"),
				X = o("./src/lib/constants/index.ts");

			function J(e) {
				let {
					isImageUploadEnabled: t,
					isGifUploadEnabled: o
				} = e, n = [];
				return t && (n = Array.from(X.c)), o && (n = [...n, ...Array.from(X.a)]), n
			}
			var Q = o("./src/reddit/hooks/useTracking.ts"),
				Z = o("./src/reddit/selectors/experiments/imageComment.ts"),
				Y = o("./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less"),
				$ = o.n(Y),
				ee = o("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.tsx");
			const te = p.a.div("SectionSpacer", $.a),
				oe = Object(d.a)(V.a, G.C, B.c, M.d.spGiphy, (e, t, o, n) => e ? !!t || !!n : o);

			function ne(e) {
				const {
					className: t,
					destSubreddit: o,
					editorKey: n,
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
				} = e, x = Object(P.a)(s);
				h && Object(P.b)(x);
				const y = null == o ? void 0 : o.id,
					C = Object(a.e)(e => void 0 !== y && Object(B.b)(e, {
						subredditId: y
					})) && _,
					v = Object(a.e)(e => void 0 !== y && oe(e, {
						subredditId: y
					})) && g,
					O = Object(a.e)(e => Object(Z.d)(e, {
						subredditId: y
					})),
					j = Object(a.e)(e => Object(Z.b)(e, {
						subredditId: y
					})),
					k = O || j,
					w = Object(Q.a)(),
					T = Object(r.useCallback)(() => w(Object(u.l)()), [w]),
					S = x.giphy.isEnabled,
					R = Object(r.useMemo)(() => J({
						isGifUploadEnabled: j,
						isImageUploadEnabled: O
					}).join(), [O, j]);
				return i.a.createElement(D.a, {
					className: t,
					oveflowMenuDropdownId: n,
					onOverflowMenuClick: p,
					editorType: I.a.Comment
				}, i.a.createElement("div", {
					className: $.a.powerupButtons
				}, C && i.a.createElement(H, {
					controlsState: x,
					subredditId: o && o.id,
					onEmoteButtonClick: c
				}), v && i.a.createElement(K, {
					controlsState: x,
					onGifButtonClick: m
				}), k && i.a.createElement(ee.a, {
					accept: R,
					controlsState: x,
					disabledTooltip: E.fbt._("Limit one media per comment", null, {
						hk: "4BKWLn"
					}),
					enabled: S,
					onClick: T,
					onFilesInput: l,
					type: "image"
				})), (C || v || k) && i.a.createElement(te, null), Object(F.g)(F.f, x, s, d, b), i.a.createElement(F.a, {
					controlsState: x,
					trackOnClick: b,
					onLinkButtonClick: f
				}), Object(F.g)(F.h, x, s, d, b), i.a.createElement(te, null), Object(F.g)(F.e, x, s, d, b), i.a.createElement(te, null), i.a.createElement(F.d, {
					controlsState: x,
					editorState: s,
					trackOnClick: b,
					onChange: d
				}))
			}
			var se = o("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				re = o("./src/reddit/constants/componentSizes.ts"),
				ie = o("./src/reddit/constants/componentTestIds.ts"),
				ae = o("./src/reddit/constants/modals.ts"),
				de = o("./src/reddit/controls/ErrorText/index.tsx"),
				ce = o("./src/reddit/helpers/correlationIdTracker.ts"),
				le = o("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				ue = o("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				me = o("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				pe = o("./src/reddit/models/PostCreationForm/index.ts"),
				he = o("./src/reddit/models/PostDraft/index.ts"),
				be = o("./src/reddit/actions/modal.ts"),
				fe = o("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				_e = o("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				ge = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				xe = o("./src/reddit/contexts/PageLayer/index.tsx"),
				ye = o("./src/reddit/contexts/PageLayer/selectors.ts"),
				Ce = o("./src/reddit/models/Subreddit/index.ts"),
				Ee = o("./src/reddit/selectors/activeModal.ts"),
				ve = o("./src/reddit/selectors/activeModalId.ts"),
				Oe = o("./src/reddit/selectors/economics.ts"),
				je = o("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				ke = o("./src/reddit/selectors/user.ts"),
				we = o("./src/reddit/components/TrackingHelper/index.tsx"),
				Te = o("./src/reddit/selectors/experiments/typingIndicators.ts"),
				Se = o("./src/reddit/actions/toaster.ts"),
				Re = o("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				Me = o("./src/reddit/models/Toast/index.ts"),
				De = o("./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less"),
				Fe = o.n(De);
			const Ie = 16,
				Pe = p.a.div("CommentHeader", Fe.a),
				Ae = p.a.div("MarkdownButtonWrapper", Fe.a),
				Be = p.a.wrapped(te, "SectionSpacer", Fe.a),
				ze = p.a.span("FormHeaderText", Fe.a),
				Ne = e => {
					let {
						cancelButtonEnabled: t,
						draftKey: o,
						isCommentBeforeSignUpEnabled: n,
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
							className: Object(j.a)(Fe.a.FormFooter, {
								[Fe.a.mRedesign]: s
							}),
							onSubmit: r,
							onCancel: a,
							pending: d,
							submitButtonText: c,
							canSubmit: h
						}, i.a.createElement("div", {
							className: Fe.a.ToolbarWrapper
						}, i.a.createElement(ne, e), i.a.createElement(Be, null), !n && i.a.createElement(Ae, null, i.a.createElement(se.a, {
							className: Fe.a.MarkdownButton,
							draftKey: o,
							onClick: m
						}))))
					}
				},
				Le = Object(a.b)(() => Object(d.c)({
					activeModalId: ve.a,
					destSubreddit: (e, t) => {
						const o = Object(ye.r)(e, t);
						return o ? {
							name: o.name,
							isProfile: o.type === Ce.g.User,
							id: o.id
						} : void 0
					},
					draft: G.i,
					isCommentBeforeSignUpEnabled: je.a,
					isLoggedIn: ke.R,
					isLoginModalOpened: Object(Ee.c)(ae.a.LOGIN_MODAL_ID),
					isRegisterModalOpened: Object(Ee.c)(ae.a.REGISTER_MODAL_ID),
					userCanUseEmojis: (e, t) => {
						const o = Object(ye.r)(e, t);
						return Object(Oe.s)(e, o ? o.id : void 0, t.parentCommentId)
					},
					userCanUseGifs: (e, t) => {
						const o = Object(ye.r)(e, t);
						return Object(Oe.t)(e, o ? o.id : void 0, t.parentCommentId)
					},
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object(Te.d)(e),
					isImageUploadEnabled: (e, t) => {
						const o = Object(ye.r)(e, t);
						return Object(Z.d)(e, {
							subredditId: o ? o.id : void 0
						})
					},
					isGifUploadEnabled: (e, t) => {
						const o = Object(ye.r)(e, t);
						return Object(Z.b)(e, {
							subredditId: o ? o.id : void 0
						})
					},
					uploads: e => e.uploads
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(be.i)(Object(me.a)(t.draftKey))),
					showErrorToast: t => {
						e(Object(Se.f)({
							kind: Me.b.Error,
							text: t,
							duration: 6e3
						}))
					}
				}));
			class Ue extends i.a.Component {
				constructor(e) {
					super(e), this.getToolbarRenderer = Object(w.a)((e, t, o, n, s, r, i) => Ne({
						cancelButtonEnabled: e,
						draftKey: t,
						isCommentBeforeSignUpEnabled: o,
						isCommentBoxDesignEnabled: n,
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
						e === this.state.breakOut && t === this.state.formHeight || k.a.write(() => {
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
							onChange: o
						} = this.props;
						o && o({
							rteState: e
						}), t && this.setState({
							hasChanged: !0
						}), this.setState(() => ({
							showError: !1,
							rteState: e
						}), () => {
							k.a.read(this.detectBreakout)
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
							isGifUploadEnabled: o,
							isImageUploadEnabled: n
						} = this.props, s = !Object(P.a)(t).giphy.isEnabled, {
							showErrorToast: r
						} = this.props;
						if ((e.length > 1 || s && e.length >= 1) && (r(E.fbt._("Limit one media per comment", null, {
								hk: "iejOT"
							})), s)) return [];
						const i = J({
								isImageUploadEnabled: n,
								isGifUploadEnabled: o
							}),
							a = e.filter(e => i.includes(e.type));
						if (e.length !== a.length) {
							let e = [];
							n && (e = [".png", ".jpeg"]), o && (e = [...e, ".gif"]), r(E.fbt._("Only image ({listOfallowedMediaFiles}) file types are allowed", [E.fbt._param("listOfallowedMediaFiles", e.join(", "))], {
								hk: "2mORw0"
							}))
						}
						return a.slice(0, 1)
					};
					const {
						draft: t,
						draftType: o,
						hasError: n,
						mediaMetadata: s,
						rtJson: r
					} = e;
					this.state = {
						breakOut: !1,
						cancelModalText: o === he.c.edit ? E.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : E.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						rteState: !r && t && t.rteState ? t.rteState : ge.a.createInitial(r, s),
						formHeight: void 0,
						hasChanged: !1,
						showError: n
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
					this.props.draft.hasFocus && this.editor && (window.addEventListener("resize", this.detectBreakout), k.a.read(this.detectBreakout), k.a.write(() => {
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
						className: o,
						depth: n,
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
						submitButtonText: y,
						isTopLevelComment: C,
						userCanUseEmojis: v,
						userCanUseGifs: k,
						userName: w,
						isTypingIndicatorsWriteTestEnabled: M,
						isImageUploadEnabled: D,
						isGifUploadEnabled: F,
						uploads: P
					} = this.props, {
						cancelModalText: A,
						breakOut: B,
						formHeight: z,
						rteState: N
					} = this.state, L = Object(me.a)(a), U = r.draftType === he.c.edit, W = d !== he.c.replyToPost;
					return i.a.createElement("div", {
						className: Object(j.a)(Fe.a.FormWrapper, o, {
							[Fe.a.isTopLevelComment]: C,
							[Fe.a.isRedesign]: m
						}),
						ref: this.setEditorWrapperRef,
						style: {
							height: B ? z : void 0
						}
					}, !m && C && w && i.a.createElement(Pe, null, i.a.createElement(ze, null, E.fbt._("Comment as {authorLink}", [E.fbt._param("authorLink", i.a.createElement(T.a, {
						author: w,
						isAuthorDeleted: !1
					}, w))], {
						hk: "4pMWAk"
					}))), i.a.createElement(le.a, {
						breakOut: B,
						depth: n,
						isEditing: U
					}, i.a.createElement(R.a, {
						allowMediaUploads: D || F,
						shouldOmitImageCaptionBlock: !0,
						shouldUseGqlUploadLease: !0,
						onFilesFilter: this.onFilesFilter,
						minImageDimension: 20,
						userCanUseEmojis: v,
						userCanUseGifs: k,
						dataTestId: ie.c,
						destSubreddit: s,
						editorType: I.a.Comment,
						initialHeight: this.props.initialHeight,
						isCommentBoxDesignEnabled: m,
						isExpanded: p,
						isTypingIndicatorsWriteTestEnabled: M,
						rteState: N,
						rteRef: this.setRTEComponentRef,
						domRef: this.setRTEDomElementRef,
						onBlur: this.handleBlur,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.handleFocus,
						onChange: this.handleChange,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onSwitchEditorMode,
						placeholderText: m ? E.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : E.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						postId: x,
						readOnly: g,
						trackToolbarClick: this.onTrackToolbarClick,
						toolbarPosition: "bottom",
						renderToolbar: this.getToolbarRenderer(W, a, !h && u, m, g, y, P)
					})), this.state.showError ? Object(de.c)(c) : null, e === L && i.a.createElement(S.a, {
						actionText: E.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: E.fbt._("Keep", null, {
							hk: "1fDXd5"
						}),
						modalText: A,
						onConfirm: this.cancelForm,
						toggleModal: t,
						trackClick: O.a
					}), e === l.t && i.a.createElement(_e.a, {
						onSubmit: this.onSubmit,
						modalSeen: _,
						withOverlay: !0
					}), i.a.createElement(fe.a, {
						editKey: a,
						hasValue: ge.a.hasContent(N),
						skipBlockingOnPageReload: !h && u && (b || f)
					}))
				}
			}
			var We = Object(xe.u)()(Le(Object(we.c)(Ue))),
				He = o("./src/reddit/components/RequestPendingBanner/index.tsx"),
				qe = o("./src/reddit/models/User/index.ts"),
				Ke = o("./src/reddit/selectors/experiments/commentBox.ts"),
				Ge = o("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Ve = o("./src/reddit/selectors/posts.ts");
			const Xe = Object(xe.u)(),
				Je = Object(d.c)({
					activeModalId: ve.a,
					contributorRequestPending: (e, t) => {
						let {
							pageLayer: o
						} = t;
						return Object(xe.b)(e, o, f.e.Comment)
					},
					isCommentBoxDesignEnabled: Ke.a,
					userName: e => e.user.account ? Object(qe.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					hasError: G.v,
					errorMsgs: G.M,
					draft: G.i,
					disableAutofocus: G.f,
					showContributorRequestFlow: (e, t) => {
						let {
							pageLayer: o
						} = t;
						return Object(xe.cb)(e, o, f.e.Comment)
					},
					postAuthorIsBlocked: Ve.w,
					isTrueblockPCBlockeeEnabled: Ge.d
				}),
				Qe = Object(a.b)(Je, (e, t) => ({
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
					onUnmount: o => e(l.k(t.draftKey, o)),
					onFocus: s()(() => e((e, o) => Object(u.e)(o(), t.draftType))),
					onFocusChanged: o => e(l.f({
						hasFocus: o,
						draftKey: t.draftKey
					})),
					onSwitchMode: (t, o, n) => e(l.c(t, o, n)),
					dispatchSubmit: (o, n) => {
						e(t.submitAction(o, n))
					}
				}), (e, t, o) => ({
					...e,
					...t,
					...o,
					onSubmit: o => {
						t.dispatchSubmit(o, e.draft.commentMode)
					}
				}));
			class Ze extends i.a.Component {
				constructor(e) {
					super(e), this.getInstanceRef = e => this.formInstanceRef = e, this.onCancel = () => {
						this.props.onCancel()
					}, this.onSwitchMode = async (e, t, o) => {
						await this.props.onSwitchMode(e, t, o), this.formInstanceRef && this.formInstanceRef.focus()
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
							hasError: o,
							pending: n
						} = this.props;
					t && !n && !o && this.setState({
						showWarningModal: !0
					})
				}
				render() {
					const {
						props: e
					} = this;
					if (!e.draft || e.postAuthorIsBlocked && e.isTrueblockPCBlockeeEnabled) return null;
					const t = e && e.draft && e.draft.rtJson || e.rtJson || void 0,
						o = {
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
					return e.contributorRequestPending ? i.a.createElement(He.a, null) : e.showContributorRequestFlow ? i.a.createElement(C, null) : e.draft.commentMode === pe.i.RICH_TEXT ? i.a.createElement(We, o) : i.a.createElement(m.b, o)
				}
			}
			t.default = Xe(Qe(Ze))
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, o) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				containerRow: "_1avwNy0RnwlEwVEW-fwKCI",
				DropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				dropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				SortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				sortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
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
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return J
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/constants/index.ts"),
				l = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/actions/comment/index.ts"),
				m = o("./src/reddit/actions/modal.ts"),
				p = o("./src/reddit/actions/post.ts"),
				h = o("./src/reddit/actions/toaster.ts"),
				b = o("./src/lib/makeApiRequest/index.ts"),
				f = o("./src/lib/omitHeaders/index.ts"),
				_ = o("./src/reddit/constants/headers.ts"),
				g = o("./src/reddit/models/Toast/index.ts");
			const x = (e, t) => async (o, s, r) => {
				let {
					apiContext: i
				} = r;
				const a = await (async (e, t, o) => Object(b.a)(Object(f.a)(e, [_.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.ob.POST,
						data: {
							api_type: "json",
							id: t,
							sort: o
						}
					}))(i(), e, t),
					d = `error-block-${t}`,
					l = `success-block-${t}`;
				if (a.ok) {
					o(Object(p.R)({
						[e]: {
							suggestedSort: t
						}
					}));
					const s = t ? n.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : n.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					o(h.f({
						id: l,
						kind: g.b.SuccessCommunityGreen,
						text: s
					}))
				} else o(h.f({
					id: d,
					kind: g.b.Error,
					text: n.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: x(e, t)
				}))
			};
			var y = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				C = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = o("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				v = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				O = o("./src/reddit/components/TrackingHelper/index.tsx"),
				j = o("./src/reddit/controls/Dropdown/index.tsx"),
				k = o("./src/reddit/controls/Dropdown/Row.tsx"),
				w = o("./src/reddit/controls/ToggleSwitch/index.tsx"),
				T = o("./src/reddit/helpers/path/index.ts"),
				S = o("./src/reddit/selectors/telemetry.ts");
			o("./src/telemetry/models/Event.ts");
			const R = (e, t, o, n, s) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(S.z)(r, void 0, {
						oldSort: o,
						sort: n,
						source: s
					}),
					userSubreddit: Object(S.tb)(r)
				}),
				M = (e, t) => o => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				D = e => ({
					subreddit: Object(S.jb)(e),
					userSubreddit: Object(S.tb)(e)
				}),
				F = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...D
				});
			var I = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				P = o("./src/reddit/icons/svgs/Info/index.tsx"),
				A = o("./src/reddit/selectors/activeModalId.ts"),
				B = o("./src/reddit/selectors/comments.ts"),
				z = o("./src/reddit/selectors/moderatorPermissions.ts"),
				N = o("./src/reddit/selectors/posts.ts"),
				L = o("./src/reddit/selectors/tooltip.ts"),
				U = o("./src/reddit/selectors/user.ts"),
				W = o("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = o.n(W),
				q = o("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const K = Object(v.a)(j.a),
				G = e => e === q.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === q.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class V extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== q.a.None) {
							e(t === q.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", q.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", q.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", q.a.None)
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
						onOpen: o,
						selectedSort: s
					} = this.props;
					return r.a.createElement("div", {
						className: H.a.HighlightWrapper
					}, r.a.createElement(k.b, {
						className: Object(d.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${G(s)}`,
						id: t,
						noHover: !0,
						onClick: o
					}), r.a.createElement(I.b, {
						className: H.a.DropdownTriangle,
						onClick: o
					}), r.a.createElement(K, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(k.b, {
						displayText: G(q.a.First),
						isSelected: s === q.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(k.b, {
						displayText: G(q.a.Last),
						isSelected: s === q.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(k.b, {
						displayText: G(q.a.None),
						isSelected: s === q.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var X = V;
			const J = "CommentSort--SortPicker",
				Q = "CommentSort--HighlightPicker",
				Z = "CommentSort--Tooltip",
				Y = Object(v.a)(j.a),
				$ = Object(a.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: o
						} = t;
						return o && Object(B.m)(e, {
							commentId: o
						})
					},
					contestModeModalIsOpen: Object(A.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(L.b)(J),
					highlightIsOpen: Object(L.b)(Q),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: o
						} = t;
						const n = Object(z.m)(e, {
							postId: o
						});
						return !!n && n.posts
					},
					post: N.G,
					postPermalink: N.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: o
						} = t;
						const n = Object(U.w)(e),
							s = !!Object(z.m)(e, {
								postId: o
							}),
							r = Object(N.G)(e, {
								postId: o
							});
						return (s || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: B.p
				}),
				ee = Object(i.b)($, (e, t) => {
					let {
						postId: o
					} = t;
					return {
						changeHighlightSort: t => e(Object(u.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: J
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: Q
							})), t()
						},
						onSetSuggestedSort: t => e(x(o, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.W)(t, o)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: Z
						})),
						toggleContestModeModal: () => e(Object(m.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, o, n) => this.props.sendEvent(R(e, this.props.isOverlay, t, o, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(M("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(F(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return n.fbt._("{sort name} (suggested)", [n.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: o,
						contestModeModalIsOpen: s,
						dropdownIsOpen: i,
						elementRef: a,
						hideTooltip: l,
						highlightIsOpen: u,
						hasModeratorPostPermissions: m,
						isOverlay: p,
						location: h,
						post: b,
						postPermalink: f,
						selectedHighlightSort: _,
						showCommentHighlighter: g,
						sort: x,
						suggestedSort: v,
						showTooltip: O,
						toggleContestModeModal: j
					} = this.props, S = b.contestMode, R = !h.search.includes(c.w.CONFIDENCE), D = x === c.w.CONFIDENCE && R, F = m && !D, A = c.y[x], B = A ? A() : "", z = v && x === v && !D ? this.addSuggestedLabel(B) : B, N = S ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), L = S ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), U = S ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), W = S && !m;
					return r.a.createElement("div", {
						className: Object(d.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !g && W
						}),
						ref: a
					}, r.a.createElement("div", {
						className: H.a.containerRow
					}, !W && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.DropdownContainer
					}, r.a.createElement(k.b, {
						className: Object(d.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${z}`,
						id: J,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(I.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Y, {
						isOpen: i,
						tooltipId: J
					}, [c.w.CONFIDENCE, c.w.TOP, c.w.NEW, c.w.CONTROVERSIAL, c.w.OLD, c.w.QA].map(e => {
						const t = o || f,
							n = Object(T.b)(t),
							s = c.y[e],
							i = s ? s() : "";
						return r.a.createElement(E.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, r.a.createElement(k.b, {
							displayText: i,
							isSelected: x === e,
							skipRoleAttr: !0
						}))
					}))), F && !W && (v ? r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: x !== v ? this.setSortOnClick : this.clearSortOnClick
					}, x !== v ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: H.a.SetSort
					}, r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: Z,
						onMouseEnter: O,
						onMouseLeave: l
					}, r.a.createElement(C.c, {
						className: H.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: Z
					}), r.a.createElement(P.a, {
						className: H.a.Info
					})))), m && r.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(w.a, {
						className: H.a.ToggleSwitch,
						on: S
					}))), g && r.a.createElement("div", {
						className: H.a.containerRow
					}, r.a.createElement(X, {
						changeHighlightSort: e,
						highlightIsOpen: u,
						id: Q,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: _,
						trackHighlight: M
					})), s && r.a.createElement(y.a, {
						actionText: L,
						headerText: N,
						modalText: U,
						onConfirm: this.setContestMode,
						toggleModal: j,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(O.c)(te))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less": function(e, t, o) {
			e.exports = {
				RequestButton: "_3K2ydhts9_ES4s9UpcXqBi",
				requestButton: "_3K2ydhts9_ES4s9UpcXqBi"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./src/lib/classNames/index.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				c = o("./src/reddit/components/TrackingHelper/index.tsx"),
				l = o("./src/reddit/constants/modals.ts"),
				u = o("./src/reddit/controls/Button/index.tsx"),
				m = o("./src/reddit/helpers/trackers/privateCommunity.ts"),
				p = o("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = o("./src/reddit/models/SubredditRestrictions/index.ts"),
				b = o("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				f = o.n(b);
			const _ = () => ({
				[h.b.Comment]: n.fbt._("Request to Comment", null, {
					hk: "3KRhw5"
				}),
				[h.b.IdCard]: n.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.PostSubmission]: n.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.ContentGate]: n.fbt._("Request to Join", null, {
					hk: "1nK8Vv"
				})
			});
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						const {
							sendEvent: e,
							eventSource: t,
							openRequestToJoinSubredditModal: o,
							openContributorRequestModal: n
						} = this.props;
						t === h.b.ContentGate ? (e(Object(m.a)(t)), o()) : (e(Object(p.a)(t)), n())
					}
				}
				render() {
					const {
						eventSource: e,
						smallButton: t,
						className: o,
						isContributorRequestPending: s
					} = this.props;
					return r.a.createElement(u.t, {
						priority: e === h.b.ContentGate ? u.c.Secondary : u.c.Primary,
						className: Object(a.a)(t ? null : f.a.RequestButton, o),
						onClick: this.onRequest,
						size: t ? u.d.S : u.d.M,
						disabled: s
					}, s ? n.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : _()[e])
				}
			}
			t.default = Object(i.b)(null, e => ({
				openContributorRequestModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(c.c)(g))
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return u
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = o.n(i),
				d = o("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", a.a),
				l = d.a.div("TextWrapper", a.a);

			function u(e) {
				const {
					className: t,
					color: o,
					icon: n,
					subtitle: i,
					title: d,
					textWrapperClassName: u
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: o && {
						borderColor: o
					} || {}
				}, s.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: o && {
						backgroundColor: o
					} || {}
				}), n ? s.a.createElement(c, null, n) : s.a.createElement(c, null), s.a.createElement(l, {
					className: u
				}, s.a.createElement("div", {
					className: a.a.title
				}, d), i && s.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = o("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = o("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: o,
					to: n,
					...r
				} = e, c = Object(a.b)(n);
				return s.a.createElement(i.a, d({
					className: o,
					to: c
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...o
				} = e, n = t ? c : r.a;
				return s.a.createElement(n, l({}, o, {
					children: o.children,
					className: o.className,
					onClick: o.onClick,
					to: o.to
				}))
			}
		},
		"./src/reddit/components/MarkdownHelp/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/MarkdownHelp/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return y
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./src/reddit/components/FlairPickerTitle/index.tsx"),
				d = o("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				c = o("./src/reddit/components/RichTextJson/elements.tsx"),
				l = o("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				u = o("./src/reddit/components/TrackingHelper/index.tsx"),
				m = o("./src/higherOrderComponents/asModal/index.tsx"),
				p = o("./src/reddit/actions/modal.ts"),
				h = o("./src/reddit/controls/Button/index.tsx"),
				b = o("./src/reddit/layout/row/Inline/index.tsx"),
				f = o("./src/reddit/layout/row/RightAlign/index.tsx"),
				_ = o("./src/reddit/components/MarkdownHelp/index.m.less"),
				g = o.n(_),
				x = o("./src/lib/lessComponent.tsx");
			const y = "Markdown_Help__Modal",
				C = x.a.wrapped(b.a, "Section", g.a),
				E = x.a.div("Container", g.a),
				v = x.a.table("Table", g.a),
				O = x.a.p("P", g.a);
			class j extends r.a.Component {
				render() {
					const e = n.fbt._("italics", null, {
							hk: "9wBJ9"
						}),
						t = n.fbt._("bold", null, {
							hk: "yoD2u"
						}),
						o = n.fbt._("item", null, {
							hk: "20ZnoS"
						}),
						s = n.fbt._("quoted text", null, {
							hk: "1Lvb4b"
						}),
						i = n.fbt._("strikethrough", null, {
							hk: "UcaLr"
						}),
						u = n.fbt._("spoilers", null, {
							hk: "372XyC"
						});
					return r.a.createElement(d.a, null, r.a.createElement(a.a, {
						onClosePressed: this.props.closeModal,
						title: n.fbt._("Markdown Help", null, {
							hk: "w08E2"
						})
					}), r.a.createElement(E, null, r.a.createElement(v, {
						className: g.a.helpTable
					}, r.a.createElement("tr", null, r.a.createElement(c.s, null, r.a.createElement(c.j, null, n.fbt._("Type this:", null, {
						hk: "VDjXQ"
					}))), r.a.createElement(c.s, null, r.a.createElement(c.j, null, n.fbt._("to get this:", null, {
						hk: "4zlZi9"
					})))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "*", e, "*")), r.a.createElement(c.p, null, r.a.createElement(c.f, null, e))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "**", t, "**")), r.a.createElement(c.p, null, r.a.createElement(c.b, null, t))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "[reddit!](https://reddit.com)")), r.a.createElement(c.p, null, r.a.createElement(c.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "* ", o, " 1"), r.a.createElement(c.j, null, "* ", o, " 2"), r.a.createElement(c.j, null, "* ", o, " 3")), r.a.createElement(c.p, null, r.a.createElement(c.v, null, r.a.createElement(c.g, null, o, " 1"), r.a.createElement(c.g, null, o, " 2"), r.a.createElement(c.g, null, o, " 3")))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "> ", s)), r.a.createElement(c.p, null, r.a.createElement(c.c, null, s))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "~~", i, "~~")), r.a.createElement(c.p, null, r.a.createElement(c.d, null, i))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, n.fbt._("super^script", null, {
						hk: "2WteOp"
					}))), r.a.createElement(c.p, null, n.fbt._("super{=script}", [n.fbt._param("=script", r.a.createElement(c.m, null, n.fbt._("script", null, {
						hk: "4a2qMi"
					})))], {
						hk: "1VvC4z"
					}))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, `>!${u}!<`)), r.a.createElement(c.p, null, r.a.createElement(l.a, null, u)))), r.a.createElement(O, null, n.fbt._("Check the {=commenting wiki page} for more help", [n.fbt._param("=commenting wiki page", r.a.createElement(c.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, n.fbt._("commenting wiki page", null, {
						hk: "25UBE"
					})))], {
						hk: "1J9oBy"
					}))), r.a.createElement(C, null, r.a.createElement(f.a, null, r.a.createElement(h.l, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const k = Object(i.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(y))
			}))(j);
			t.a = Object(m.a)(Object(u.c)(k))
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				d = o("./src/reddit/actions/postCreation/general.ts"),
				c = o("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				l = o("./src/reddit/components/FocusableContent/index.tsx"),
				u = o("./src/reddit/components/MarkdownHelp/index.tsx"),
				m = o("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				p = o("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				h = o("./src/reddit/constants/keycodes.ts"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				f = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = o("./src/reddit/models/PostCreationForm/index.ts"),
				g = o("./src/reddit/selectors/activeModalId.ts"),
				x = o("./src/reddit/selectors/editorContent.ts"),
				y = o("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				C = o.n(y),
				E = o("./src/lib/lessComponent.tsx");
			const v = E.a.wrapped(f.a, "LoadingIcon", C.a),
				O = e => {
					let {
						isFilled: t,
						...o
					} = e;
					return r.a.createElement(v, o)
				},
				j = E.a.span("ModeDescription", C.a),
				k = E.a.div("ModeWrapper", C.a),
				w = E.a.wrapped(c.a, "MarkdownHelpButton", C.a),
				T = E.a.div("Toolbar", C.a),
				S = Object(a.c)({
					activeModalId: g.a,
					isConverting: e => Object(x.a)(e)
				}),
				R = Object(i.b)(S, (e, t) => ({
					onChange: o => {
						e(Object(d.c)(o)), t.onChange && t.onChange(o)
					},
					helpModalToggled: () => e(Object(d.z)(u.b)),
					switchToRTEModalToggled: () => e(Object(d.z)(m.a.SWITCH_TO_RTE_MODAL_ID))
				}));
			class M extends r.a.Component {
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
							metaKey: o,
							keyCode: n
						} = e;
						(t || o) && n === h.a.Enter && this.props.onSubmit()
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
						placeholderText: o,
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
					}, r.a.createElement(T, null, r.a.createElement(k, null, r.a.createElement(j, null, n.fbt._("Markdown", null, {
						hk: "42KuwU"
					})), r.a.createElement(w, {
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
						placeholder: o,
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
					onClick: o
				} = e;
				const s = n.fbt._("Switch to Fancy Pants Editor", null, {
					hk: "1AKY7t"
				});
				return r.a.createElement(b.t, {
					priority: b.c.Plain,
					size: b.d.XS,
					onClick: o,
					Icon: t ? O : void 0,
					text: s
				})
			});
			t.a = R(M)
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return n
			})), o.d(t, "a", (function() {
				return s
			}));
			const n = 20,
				s = 180
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(e, t, o) {
			e.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/higherOrderComponents/asModal/index.tsx"),
				i = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = o("./src/reddit/constants/keycodes.ts"),
				d = o("./src/reddit/controls/Button/index.tsx"),
				c = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = o("./src/reddit/controls/TextButton/index.tsx"),
				u = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = o("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = o.n(m),
				h = o("./src/lib/lessComponent.tsx");
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
		"./src/reddit/components/PostCreationForm/Prompt/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			}));
			var n, s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
				a = o("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			! function(e) {
				e.LOAD_DRAFT_MODAL_ID = "POST_CREATION__LOAD_DRAFT_MODAL_ID", e.MAX_DRAFTS_MODAL_ID = "POST_CREATION__MAX_DRAFTS_MODAL_ID", e.SWITCH_TO_RTE_MODAL_ID = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID"
			}(n || (n = {}));
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
					[n.LOAD_DRAFT_MODAL_ID]: d,
					[n.MAX_DRAFTS_MODAL_ID]: c,
					[n.SWITCH_TO_RTE_MODAL_ID]: l
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
		"./src/reddit/components/PostEditForm/index.m.less": function(e, t, o) {
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
				loadingIcon: "_1FY2h-rhaxwcBudiw3Lc2d"
			}
		},
		"./src/reddit/components/PostEditForm/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/noop.js"),
				r = o.n(s),
				i = o("./node_modules/react/index.js"),
				a = o.n(i),
				d = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/react-router-redux/es/index.js"),
				l = o("./node_modules/reselect/es/index.js"),
				u = o("./src/lib/classNames/index.ts"),
				m = o("./src/reddit/components/Poll/async.ts"),
				p = o("./src/reddit/helpers/correlationIdTracker.ts"),
				h = o("./src/reddit/models/PostCreationForm/index.ts"),
				b = o("./src/reddit/models/PostRequirements/index.ts"),
				f = o("./src/reddit/selectors/platform.ts"),
				_ = o("./src/reddit/selectors/postCreations.ts"),
				g = o("./src/reddit/actions/postCreation/editing.ts"),
				x = o("./src/reddit/actions/postCreation/editorContent.ts"),
				y = o("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				C = o("./src/lib/constants/index.ts"),
				E = o("./src/lib/memoizeByReference/index.ts"),
				v = o("./src/reddit/components/RichTextEditor/media/helpers.ts");
			const O = Object(E.a)((e, t) => {
				const o = e.name,
					{
						allowedPostTypes: s
					} = e,
					r = Object(v.g)(t),
					i = ((e, t, o) => {
						if (!t) return null;
						let s = "";
						return !e.total || t.images || t.videos ? e.video && !t.videos ? s = n.fbt._("Videos are not allowed in {subreddit name}", [n.fbt._param("subreddit name", `r/${o}`)], {
							hk: "4DBrcv"
						}) : !e.image && !e.gifvideo || t.images || (s = n.fbt._("Images are not allowed in {subreddit name}", [n.fbt._param("subreddit name", `r/${o}`)], {
							hk: "27ju8Q"
						})) : s = n.fbt._("Videos and images are not allowed in {subreddit name}", [n.fbt._param("subreddit name", `r/${o}`)], {
							hk: "2GGFeK"
						}), s || null
					})(r, s, o);
				return i ? [i] : (e => {
					const t = [];
					return e.image > C.fb && t.push(n.fbt._("Post may not contain more that 20 images", null, {
						hk: "1Szc36"
					})), e.video + e.gifvideo > C.ib && t.push(n.fbt._("Post may not contain more that 5 videos", null, {
						hk: "2WhZ8k"
					})), t
				})(r)
			});
			var j = o("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				k = o("./src/reddit/components/RichTextEditor/index.tsx"),
				w = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				T = o("./src/reddit/contexts/PageLayer/index.tsx"),
				S = o("./src/reddit/controls/ErrorText/index.tsx"),
				R = o("./src/reddit/helpers/richTextEditor/index.ts"),
				M = o("./src/reddit/selectors/user.ts"),
				D = o("./src/reddit/controls/Button/index.tsx"),
				F = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				I = o("./src/reddit/components/PostEditForm/index.m.less"),
				P = o.n(I),
				A = o("./src/lib/lessComponent.tsx");
			const B = A.a.div("BottomRow", P.a),
				z = A.a.div("FormContent", P.a),
				N = A.a.wrapped(D.l, "SubmitButton", P.a),
				L = A.a.wrapped(F.a, "LoadingIcon", P.a),
				U = Object(T.u)(),
				W = Object(l.c)({
					destSubreddit: _.h,
					editorMode: _.i,
					errorMessages: _.j,
					hasError: _.k,
					markdownDraft: _.l,
					pending: _.bb,
					postRequirements: _.qb,
					rteDraft: _.m,
					subreddit: T.r,
					uploads: e => e.uploads,
					user: M.l,
					isCommentsPage: f.f
				}),
				H = Object(d.b)(W, (e, t) => ({
					onCancel: t => e(g.b(t)),
					onSubmitDraft: t => e(g.c(t)),
					onSuccess: t => e(Object(c.b)(t)),
					onToggleEditorMode: (t, o) => e(x.d(h.h.POST_EDITING, t, o))
				}));
			class q extends a.a.Component {
				constructor(e) {
					super(e), this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onMarkdownPostChange = e => {
						const {
							markdownBody: t
						} = this.state, o = this.state.markdownPostDraftChanged || t.trim() !== e.trim();
						this.setState({
							markdownBody: e,
							markdownPostDraftChanged: o
						})
					}, this.onRichPostChange = (e, t) => {
						this.setState({
							rteState: e,
							richtextPostDraftChanged: this.state.richtextPostDraftChanged || t
						})
					}, this.haveMarkdownPostDraft = () => !!(this.state.markdownBody || "").trim(), this.haveDraft = () => this.props.editorMode === h.i.RICH_TEXT ? this.haveRichPostDraft() : this.haveMarkdownPostDraft(), this.onSubmit = () => {
						const e = this.buildPostSubmission();
						e && this.props.onSubmitDraft(e)
					}, this.onToggleEditorMode = async (e, t) => {
						this.setState({
							markdownPostDraftChanged: !1,
							richtextPostDraftChanged: !1
						}), await this.props.onToggleEditorMode(e, t), e === h.i.RICH_TEXT ? this.rteRef && this.rteRef.focus() : this.markdownEditorRef && this.markdownEditorRef.focus()
					}, this.getMediaValidationErrors = () => {
						const {
							editorMode: e,
							destSubreddit: t
						} = this.props, {
							rteState: o
						} = this.state;
						return o.isBound && e === h.i.RICH_TEXT ? O(t, o.editorState.getCurrentContent()) : []
					}, this.getTextPostContent = () => {
						const {
							editorMode: e,
							uploads: t
						} = this.props, {
							markdownBody: o,
							rteState: n
						} = this.state;
						return e === h.i.RICH_TEXT ? w.a.toRichTextJSON(n, t) : {
							markdown: o
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
					Object(p.d)(p.a.PostComposer)
				}
				componentWillUnmount() {
					Object(p.b)(p.a.PostComposer), this.cancelEdit()
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
					return w.a.hasContent(e)
				}
				hasChanged() {
					const {
						editorMode: e
					} = this.props, {
						markdownPostDraftChanged: t,
						richtextPostDraftChanged: o
					} = this.state;
					return e === h.i.RICH_TEXT ? !!o : e === h.i.MARKDOWN && !!t
				}
				render() {
					const {
						editorMode: e,
						errorMessages: t,
						hasError: o,
						isCommentsPage: s,
						pending: i,
						post: d,
						postRequirements: c,
						uploads: l
					} = this.props, {
						markdownBody: p,
						markdownPostDraftChanged: f,
						richtextPostDraftChanged: _,
						rteState: g
					} = this.state, x = c && c.bodyRestrictionPolicy === b.a.Required ? n.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : n.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), C = this.getMediaValidationErrors(), E = [...t, ...C];
					o && !E.length && E.push(n.fbt._("Something went wrong. Just don't panic.", null, {
						hk: "FsWrq"
					}));
					const v = !w.a.isAllMediaUploaded(g, l);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(z, null, e === h.i.RICH_TEXT ? a.a.createElement(k.a, {
						allowMediaUploads: !0,
						className: Object(u.a)(P.a.Editor, {
							[P.a.isPending]: !!i
						}),
						destSubreddit: this.props.destSubreddit,
						editorType: R.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: g,
						onChange: this.onRichPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						readOnly: !!i,
						rteRef: this.setRteRef,
						trackToolbarClick: r.a,
						placeholderText: x
					}) : a.a.createElement(j.a, {
						initialHeight: this.state.editorHeight,
						instanceRef: this.setMarkdownEditorRef,
						disabled: !!i,
						value: p,
						onChange: this.onMarkdownPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: x
					}), a.a.createElement(B, null, a.a.createElement(D.r, {
						disabled: !!i,
						onClick: this.cancelEdit
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(N, {
						disabled: !!i || !!C.length || !this.hasChanged() || v,
						onClick: this.onSubmit
					}, i ? a.a.createElement(L, {
						sizePx: 10
					}) : n.fbt._("Save", null, {
						hk: "4yMsMq"
					}))), a.a.createElement(S.a, {
						className: P.a.errorMessages,
						messages: E
					}), a.a.createElement(y.a, {
						editKey: d.id,
						hasValue: !(!f && !_),
						isPostEdit: !0
					})), a.a.createElement(m.a, {
						postId: d.id,
						isCommentsPage: !!s
					}))
				}
			}
			t.default = U(H(q))
		},
		"./src/reddit/components/RequestPendingBanner/index.m.less": function(e, t, o) {
			e.exports = {
				Banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				Subtitle: "_1ljRPHbvpC41amZF9_xBeb",
				subtitle: "_1ljRPHbvpC41amZF9_xBeb"
			}
		},
		"./src/reddit/components/RequestPendingBanner/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/lessComponent.tsx"),
				c = o("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = o("./src/reddit/models/SubredditRestrictions/index.ts"),
				u = o("./src/reddit/selectors/platform.ts"),
				m = o("./src/reddit/selectors/subreddit.ts"),
				p = o("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = o.n(p);
			const b = d.a.wrapped(c.a, "Banner", h.a),
				f = Object(i.b)(() => Object(a.c)({
					restrictions: m.q,
					subreddit: u.e
				}));
			t.a = f(e => {
				let {
					restrictions: t,
					subreddit: o
				} = e;
				if (!o) return null;
				const s = t === l.e.Comment ? l.a.Create : l.a.Draft;
				return r.a.createElement(b, {
					subtitle: r.a.createElement("span", {
						className: h.a.Subtitle
					}, n.fbt._("Your request to {restrictions} in {displayName} was sent and is pending. In the meantime, you can {action} a post and {=browse the community}", [n.fbt._param("restrictions", l.d[t]()), n.fbt._param("displayName", o.name), n.fbt._param("action", l.c[s]()), n.fbt._param("=browse the community", r.a.createElement("a", {
						href: `${o.url}`
					}, n.fbt._("browse the community", null, {
						hk: "3hwgAC"
					})))], {
						hk: "2CX6Q6"
					})),
					title: n.fbt._("Request to {restrictions} is pending...", [n.fbt._param("restrictions", l.d[t]())], {
						hk: "1tQuSr"
					})
				})
			})
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, o) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-autosize-textarea/lib/index.js"),
				i = o.n(r),
				a = o("./src/lib/classNames/index.ts"),
				d = o("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				c = o.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => {
					let {
						className: t,
						children: o,
						editorWrapperRef: n,
						initialHeight: r
					} = e;
					return s.a.createElement("div", {
						className: Object(a.a)(c.a.editorWrapper, t),
						style: r ? {
							height: r
						} : void 0,
						ref: n
					}, o)
				},
				m = e => {
					let {
						isFullHeight: t,
						textAreaRef: o,
						...n
					} = e;
					return s.a.createElement(i.a, l({
						className: Object(a.a)(c.a.textareaAutosize, {
							[c.a.mIsFullHeight]: t
						}),
						innerRef: o
					}, n))
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
						innerRef: o,
						onEditorResize: n,
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
						textAreaRef: o
					})))
				}
			}
			t.a = p
		},
		"./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less": function(e, t, o) {
			e.exports = {
				SectionSpacer: "_1_GKN8UW8t3pCAZhMgZOoL",
				sectionSpacer: "_1_GKN8UW8t3pCAZhMgZOoL",
				powerupButtons: "_6E4bLu7N3_WO5HyAtaJx8"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less": function(e, t, o) {
			e.exports = {
				emote: "_3D93rMnM8022kmI5JTG4fb",
				emotes: "_2nE7oF1_HdWt-s31zYmYB6",
				emoteMask: "_26-n7Hn4ggLG2AJ7kmR8i6",
				smile: "kZEfwKUF_b6N-MPjQuYFA"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/classNames/index.ts"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				d = o("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = o("./src/reddit/selectors/user.ts"),
				l = o("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = o("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = o("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = o("./src/reddit/components/UserIcon/UserIcon.m.less"),
				h = o.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(a.c)({
					currentUser: c.l,
					isNightMode: c.eb,
					isPresenceUserPrefEnabled: c.W,
					shouldHideNSFW: c.G
				}),
				_ = Object(i.b)(f);
			t.a = _(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: o,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: i,
					...a
				} = e, c = Object(d.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(n.a)(h.a.currentUserIconWrapper, i)
				}, c ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, b({}, a, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), o && r.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, o) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				redditStyle: "_3kUvbpMbR21zJBboDdBH7D",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/controls/Button/index.tsx"),
				a = o("./src/reddit/controls/ToggleSwitch/index.m.less"),
				d = o.n(a);
			t.a = Object(n.memo)(Object(n.forwardRef)((e, t) => {
				const o = e.size || i.d.XS;
				return s.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(d.a.toggleSwitch, e.className, d.a[o], {
						[d.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[d.a.mDisabled]: e.disabled,
						[d.a.redditStyle]: e.redditStyle
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle(),
					ref: t
				}, s.a.createElement("div", {
					className: d.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return r
			})), o.d(t, "c", (function() {
				return i
			})), o.d(t, "a", (function() {
				return a
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/config.ts"),
				s = o("./src/reddit/endpoints/governance/requester.ts");
			async function r(e, t, o) {
				const r = Object(s.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${n.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: o
						}
					}),
					i = await r;
				if (i.ok) {
					const e = {},
						t = {},
						o = i.body;
					return Object.keys(o).forEach(n => {
						const s = o[n];
						t[n] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
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
			async function i(e, t, o) {
				const r = await Object(s.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/badges/${t}?users=${o}`
				});
				if (r.ok) {
					const e = {},
						t = [],
						o = r.body;
					return Object.keys(o).forEach(n => {
						const s = o[n];
						e[n] = s, t.push(s.id)
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

			function a(e, t, o) {
				let r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(s.a)(e, {
					method: "patch",
					endpoint: `${n.a.metaUrl}/badges/${t}/${o}`,
					data: {
						selected: r
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "b", (function() {
				return i
			})), o.d(t, "c", (function() {
				return a
			})), o.d(t, "d", (function() {
				return d
			}));
			var n = o("./src/config.ts"),
				s = o("./src/reddit/endpoints/governance/requester.ts");

			function r(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function i(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function a(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/orders`,
					data: t
				})
			}

			function d(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/orders`,
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
		"./src/reddit/helpers/dom/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "g", (function() {
				return a
			})), o.d(t, "f", (function() {
				return d
			})), o.d(t, "d", (function() {
				return c
			})), o.d(t, "h", (function() {
				return l
			})), o.d(t, "c", (function() {
				return u
			})), o.d(t, "b", (function() {
				return m
			})), o.d(t, "e", (function() {
				return p
			})), o.d(t, "a", (function() {
				return h
			}));
			var n = o("./node_modules/lodash/map.js"),
				s = o.n(n),
				r = o("./src/lib/FocusTrap/index.ts");
			const i = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				a = e => {
					let t = e;
					do {
						if (i(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				d = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				c = () => d() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return s()(t, e => e.textContent || "")
				})() : null,
				l = (e, t) => {
					const o = document.createRange();
					return o.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, o) < 0 && e.compareBoundaryPoints(Range.START_TO_END, o) > 0
				},
				u = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const o = t.getRangeAt(0);
					if (!l(o, e)) return;
					const {
						startContainer: n,
						startOffset: s,
						endContainer: r,
						endOffset: i
					} = o, a = document.createRange();
					a.selectNode(e);
					let d = !0;
					if (-1 === a.compareBoundaryPoints(Range.START_TO_START, o) && (a.setStart(n, s), d = !1), 1 === a.compareBoundaryPoints(Range.END_TO_END, o) && (a.setEnd(r, i), d = !1), d) return [e];
					const c = document.createElement("div");
					return c.appendChild(a.cloneContents()), [...c.childNodes]
				},
				m = (e, t, o) => {
					let n = e;
					for (; n && (!o || !o(n));) {
						if (n && t(n)) return n;
						n = n.parentElement
					}
				},
				p = e => e && e.parentElement && m(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				h = e => {
					e.querySelectorAll(r.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts");
			t.a = () => ({
				type: s.L.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "b", (function() {
				return i
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function r(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : n.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function i(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, o) {
			"use strict";
			var n;
			o.d(t, "d", (function() {
					return r
				})), o.d(t, "b", (function() {
					return i
				})), o.d(t, "a", (function() {
					return a
				})), o.d(t, "c", (function() {
					return d
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(n || (n = {}));
			const s = e => {
					if (window.sessionStorage) {
						const t = window.sessionStorage.getItem(e);
						if (t) return JSON.parse(t)
					}
					return null
				},
				r = e => {
					((e, t) => {
						window.sessionStorage && window.sessionStorage.setItem(e, JSON.stringify(t))
					})(n.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				i = () => s(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				a = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				d = () => {
					return !!s(n.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, o) {
			"use strict";
			o.d(t, "g", (function() {
				return p
			})), o.d(t, "f", (function() {
				return h
			})), o.d(t, "b", (function() {
				return b
			})), o.d(t, "e", (function() {
				return f
			})), o.d(t, "a", (function() {
				return _
			})), o.d(t, "c", (function() {
				return g
			})), o.d(t, "d", (function() {
				return x
			})), o.d(t, "h", (function() {
				return y
			})), o.d(t, "k", (function() {
				return C
			})), o.d(t, "j", (function() {
				return E
			})), o.d(t, "i", (function() {
				return v
			})), o.d(t, "l", (function() {
				return O
			}));
			var n = o("./src/lib/constants/index.ts"),
				s = o("./src/reddit/constants/tracking.ts"),
				r = o("./src/reddit/helpers/correlationIdTracker.ts"),
				i = o("./src/reddit/models/PostDraft/index.ts"),
				a = o("./src/reddit/selectors/comments.ts"),
				d = o("./src/reddit/selectors/platform.ts"),
				c = o("./src/reddit/selectors/telemetry.ts"),
				l = o("./src/telemetry/index.ts"),
				u = o("./src/reddit/constants/richTextJson.ts");
			const m = e => {
					const t = Object(d.o)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(c.o)(e),
						screen: Object(c.bb)(e),
						subreddit: Object(c.jb)(e),
						post: t ? Object(c.K)(e, t) : null,
						profile: Object(c.T)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				p = async (e, t, n, s, r) => {
					const i = {
							commentId: r,
							commentsPageKey: n
						},
						d = r && Object(a.j)(e, i) || 0,
						{
							getFlairData: u
						} = await o.e("getFlairData").then(o.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts")),
						p = s ? "image" : void 0;
					return Object(l.a)({
						noun: "comment",
						...m(e),
						comment: r ? Object(c.h)({
							state: e,
							commentId: r,
							contentType: p
						}) : null,
						listing: Object(c.z)(e, void 0, {
							depth: d
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e),
						media: {
							mimetype: null == s ? void 0 : s.mimetype,
							size: null == s ? void 0 : s.size
						}
					})
				}, h = e => {
					let {
						state: t,
						bodyText: o,
						postId: s,
						error: r,
						parentId: i,
						uploadMetadata: a
					} = e;
					const d = m(t),
						c = r.type === n.Pb ? "karma_rate_limit" : r.fields && r.fields.length > 0 ? r.fields[0].msg : void 0,
						p = a ? "image" : function(e) {
							return e.includes(`"id":"${u.c}`)
						}("string" == typeof o ? o : JSON.stringify(o)) ? "giphy" : void 0;
					return Object(l.a)({
						...d,
						source: r.type === n.Pb ? "backend" : "comment_composer",
						actionInfo: {
							...d.actionInfo,
							reason: c
						},
						action: "error",
						noun: "comment",
						comment: {
							bodyText: o,
							parentId: i,
							postId: s,
							contentType: p
						},
						media: {
							mimetype: null == a ? void 0 : a.mimetype,
							size: null == a ? void 0 : a.size
						}
					})
				}, b = e => Object(l.a)({
					noun: "cancel",
					...m(e)
				}), f = (e, t) => {
					t === i.c.replyToPost && Object(l.a)({
						noun: "input",
						...m(e)
					})
				}, _ = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.o)(t),
					screen: Object(c.bb)(t),
					subreddit: Object(c.jb)(t),
					post: Object(c.K)(t, e)
				}), g = e => Object(l.a)({
					noun: "edit",
					...m(e)
				}), x = e => Object(l.a)({
					noun: "save_edit",
					...m(e)
				}), y = (e, t) => o => {
					const n = "image_upload" === e || "video_upload" === e;
					return {
						...m(o),
						noun: n ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, C = () => e => ({
					...m(e),
					action: "open",
					noun: "gif_tooltip"
				}), E = e => t => ({
					...m(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), v = () => e => ({
					...m(e),
					action: "select",
					noun: "gif_tooltip_result"
				}), O = () => e => ({
					...m(e),
					source: "comment_composer",
					action: "open",
					noun: "images_tooltip"
				})
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return r
			}));
			var n = o("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...n.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: n.jb(t)
				}),
				r = e => t => ({
					...n.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: n.jb(t)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return r
			}));
			var n = o("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...n.o(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: n.jb(t)
				}),
				r = e => t => ({
					...n.o(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: n.jb(t)
				})
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, o) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = o.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = e => {
				let {
					className: t,
					isSubreddit: o,
					...n
				} = e;
				return s.a.createElement("svg", d({
					className: Object(r.a)(a.a.dropdown, {
						[a.a.mRedditStyle]: !o
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = c
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/MarkdownMode/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
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
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
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
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, o) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/lessComponent.tsx"),
				s = o("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = o.n(s);
			t.a = n.a.div("rightAligned", r.a)
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var n = o("./node_modules/reselect/es/index.js"),
				s = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				i = o("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.R, i.Q, (e, t) => e || t),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.N
				}), e => e === s.X.Enabled)
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			})), o.d(t, "c", (function() {
				return u
			})), o.d(t, "b", (function() {
				return m
			}));
			var n = o("./node_modules/reselect/es/index.js"),
				s = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				i = o("./src/reddit/selectors/experiments/utils.ts");
			const a = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				d = Object(n.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), i.a),
				c = e => a.find(t => !!Object(i.a)(d(e, t))),
				l = Object(n.a)(c, e => !!e),
				u = e => {
					const t = c(e);
					return !!t && d(e, t) === s.db.SkipOnboarding
				},
				m = e => {
					const t = c(e);
					return !!t && d(e, t) === s.db.RegOnboarding
				}
		},
		"./src/reddit/selectors/experiments/imageComment.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return a
			})), o.d(t, "a", (function() {
				return d
			})), o.d(t, "d", (function() {
				return c
			})), o.d(t, "b", (function() {
				return l
			}));
			var n = o("./src/reddit/constants/experiments.ts"),
				s = o("./src/reddit/helpers/chooseVariant/index.ts"),
				r = o("./src/reddit/selectors/comments.ts");
			const i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.oe
					}) === n.Pd
				},
				a = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.pe
					}) === n.Pd
				},
				d = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.Yd
					}) === n.Pd
				},
				c = (e, t) => {
					let {
						subredditId: o
					} = t;
					return void 0 !== o && Object(r.D)(e, {
						subredditId: o
					}) && i(e)
				},
				l = (e, t) => {
					let {
						subredditId: o
					} = t;
					return void 0 !== o && Object(r.B)(e, {
						subredditId: o
					}) && i(e)
				}
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return a
			})), o.d(t, "d", (function() {
				return d
			})), o.d(t, "b", (function() {
				return c
			})), o.d(t, "a", (function() {
				return l
			}));
			var n = o("./src/reddit/constants/experiments.ts"),
				s = o("./src/reddit/helpers/chooseVariant/index.ts"),
				r = o("./src/reddit/selectors/experiments/index.ts"),
				i = o("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					if (Object(i.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.qg
					}) === n.Pd
				},
				d = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.rg
					}) === n.Pd
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.pg
					});
					return t === n.fg.TypingIndicators || t === n.fg.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: n.pg
					});
					return (null == t ? void 0 : t.variant) === n.fg.IndicatorsPlusCTA
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"b282a5b92ecf"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RichTextEditor.9597d2039358038a3eb3.js.map