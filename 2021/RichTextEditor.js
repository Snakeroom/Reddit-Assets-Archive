// https://www.redditstatic.com/desktop2x/RichTextEditor.8405fe5b214d8fa94a0c.js
// Retrieved at 6/14/2021, 11:20:05 AM by Reddit Dataminer v1.0.0
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

				function a(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !s.has(e)) {
						var t, o = null,
							n = e.clientWidth,
							a = null,
							i = function() {
								e.clientWidth !== n && u()
							},
							c = function(t) {
								window.removeEventListener("resize", i, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", c, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(o) {
									e.style[o] = t[o]
								})), s.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", c, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", i, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", s.set(e, {
							destroy: c,
							update: u
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), o = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(o) && (o = 0), u()
					}

					function d(t) {
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
						var a = e.scrollHeight + o;
						0 !== e.scrollHeight ? (e.style.height = a + "px", n = e.clientWidth, s.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), r && (document.documentElement.scrollTop = r)) : e.style.height = t
					}

					function u() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							o = window.getComputedStyle(e, null),
							n = "content-box" === o.boxSizing ? Math.round(parseFloat(o.height)) : e.offsetHeight;
						if (n !== t ? "hidden" === o.overflowY && (d("scroll"), l(), n = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== o.overflowY && (d("hidden"), l(), n = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), a !== n) {
							a = n;
							var s = r("autosize:resized");
							try {
								e.dispatchEvent(s)
							} catch (i) {}
						}
					}
				}

				function i(e) {
					var t = s.get(e);
					t && t.destroy()
				}

				function c(e) {
					var t = s.get(e);
					t && t.update()
				}
				var d = null;
				"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((d = function(e) {
					return e
				}).destroy = function(e) {
					return e
				}, d.update = function(e) {
					return e
				}) : ((d = function(e, t) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
						return a(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], i), e
				}, d.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], c), e
				}), t.exports = d
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
						a = document.createElement(r);
					a.innerHTML = "&nbsp;", "TEXTAREA" === r.toUpperCase() && a.setAttribute("rows", "1");
					var i = n(e, "font-size");
					a.style.fontSize = i, a.style.padding = "0px", a.style.border = "0px";
					var c = document.body;
					c.appendChild(a), o = a.offsetHeight, c.removeChild(a)
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
				d = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = o("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function i(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(d), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(i(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(i(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(i(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(i(t.tpl_host_fuzzy_test), "i");
				var c = [];

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
						}(o) ? l(t, o): c.push(t)
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
					return e || i.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, o, n, s, r, a, i, c;
				if (this.re.schema_test.test(e))
					for ((i = this.re.schema_search).lastIndex = 0; null !== (t = i.exec(e));)
						if (s = this.testSchemaAt(e, t[2], i.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (o = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (r = o.index + o[1].length, (this.__index__ < 0 || r < this.__index__) && (this.__schema__ = "", this.__index__ = r, this.__last_index__ = o.index + o[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (r = n.index + n[1].length, a = n.index + n[0].length, (this.__index__ < 0 || r < this.__index__ || r === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = r, this.__last_index__ = a)), this.__index__ >= 0
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
					var a = e[s],
						i = t(a);
					if (null != i && (void 0 === c ? i == i && !n(i) : o(i, c))) var c = i,
						d = a
				}
				return d
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
				for (var a = -1, i = n(o((t - e) / (s || 1)), 0), c = Array(i); i--;) c[r ? i : ++a] = e, e += s;
				return c
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, t, o, s) {
				for (var r = e.length, a = s ? r : -1;
					(s ? a-- : ++a < r) && t(e[a], a, e););
				return o ? n(e, s ? 0 : a, s ? a + 1 : r) : n(e, s ? a + 1 : 0, s ? r : a)
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
				return function(t, o, a) {
					return a && "number" != typeof a && s(t, o, a) && (o = a = void 0), t = r(t), void 0 === o ? (o = t, t = 0) : o = r(o), a = void 0 === a ? t < o ? 1 : -1 : r(a), n(t, o, a, e)
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
				a = Math.ceil,
				i = Math.max;
			e.exports = function(e, t, o) {
				t = (o ? s(e, t, o) : void 0 === t) ? 1 : i(r(t), 0);
				var c = null == e ? 0 : e.length;
				if (!c || t < 1) return [];
				for (var d = 0, l = 0, u = Array(a(c / t)); d < c;) u[l++] = n(e, d, d += t);
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
				a = RegExp(r.source);
			e.exports = function(e) {
				return (e = s(e)) && a.test(e) ? e.replace(r, n) : e
			}
		},
		"./node_modules/lodash/filter.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayFilter.js"),
				s = o("./node_modules/lodash/_baseFilter.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				a = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (a(e) ? n : s)(e, r(t, 3))
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
				a = o("./node_modules/lodash/toInteger.js"),
				i = o("./node_modules/lodash/values.js"),
				c = Math.max;
			e.exports = function(e, t, o, d) {
				e = s(e) ? e : i(e), o = o && !d ? a(o) : 0;
				var l = e.length;
				return o < 0 && (o = c(l + o, 0)), r(e) ? o <= l && e.indexOf(t, o) > -1 : !!l && n(e, t, o) > -1
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
				a = o("./node_modules/lodash/_baseReduce.js"),
				i = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, o) {
				var c = i(e) ? n : a,
					d = arguments.length < 3;
				return c(e, r(t, 4), o, d, s)
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
				a = o("./node_modules/lodash/_stringToArray.js"),
				i = o("./node_modules/lodash/toString.js"),
				c = /\s+$/;
			e.exports = function(e, t, o) {
				if ((e = i(e)) && (o || void 0 === t)) return e.replace(c, "");
				if (!e || !(t = n(t))) return e;
				var d = a(e),
					l = r(d, a(t)) + 1;
				return s(d, 0, l).join("")
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
				a = function() {
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
				i = u(o("./node_modules/react/index.js")),
				c = u(o("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				d = u(o("./node_modules/autosize/dist/autosize.js")),
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
					for (var s = arguments.length, a = Array(s), i = 0; i < s; i++) a[i] = arguments[i];
					return o = n = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.state = {
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
							a = (t.innerRef, m(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							i = e.state.lineHeight,
							c = e.saveDOMNodeRef,
							d = o && i ? i * o : null;
						return r({}, a, {
							saveDOMNodeRef: c,
							style: d ? r({}, s, {
								maxHeight: d
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
				}(t, e), a(t, [{
					key: "componentDidMount",
					value: function() {
						var e = this,
							t = this.props,
							o = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, d.default)(e.textarea)
						}))) : (0, d.default)(this.textarea), o && this.textarea.addEventListener("autosize:resized", this.props.onResize)
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
						return i.default.createElement("textarea", r({}, n, {
							ref: o
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(i.default.Component), n.defaultProps = {
				rows: 1
			}, s);
			t.default = h, h.propTypes = {
				rows: c.default.number,
				maxRows: c.default.number,
				onResize: c.default.func,
				innerRef: c.default.func
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
				function e(e, t, o, s, r, a) {
					if (a !== n) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
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
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, o, n) {
				var s = o ? o.call(n, e, t) : void 0;
				if (void 0 !== s) return !!s;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var r = Object.keys(e),
					a = Object.keys(t);
				if (r.length !== a.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), c = 0; c < r.length; c++) {
					var d = r[c];
					if (!i(d)) return !1;
					var l = e[d],
						u = t[d];
					if (!1 === (s = o ? o.call(n, l, u, d) : void 0) || void 0 === s && l !== u) return !1
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
		"./src/reddit/actions/comment/authoring.ts": function(e, t, o) {
			"use strict";
			o.d(t, "e", (function() {
				return $
			})), o.d(t, "o", (function() {
				return te
			})), o.d(t, "m", (function() {
				return oe
			})), o.d(t, "q", (function() {
				return re
			})), o.d(t, "t", (function() {
				return ae
			})), o.d(t, "n", (function() {
				return ce
			})), o.d(t, "s", (function() {
				return de
			})), o.d(t, "l", (function() {
				return le
			})), o.d(t, "a", (function() {
				return me
			})), o.d(t, "b", (function() {
				return be
			})), o.d(t, "p", (function() {
				return fe
			})), o.d(t, "f", (function() {
				return _e
			})), o.d(t, "g", (function() {
				return ge
			})), o.d(t, "j", (function() {
				return xe
			})), o.d(t, "d", (function() {
				return Ce
			})), o.d(t, "c", (function() {
				return ke
			})), o.d(t, "i", (function() {
				return we
			})), o.d(t, "h", (function() {
				return Re
			})), o.d(t, "k", (function() {
				return Se
			})), o.d(t, "r", (function() {
				return De
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				a = o("./src/lib/makeDraftKey/index.ts"),
				i = o("./src/reddit/actions/changeUsername.ts"),
				c = o("./src/reddit/actions/login.ts"),
				d = o("./src/reddit/actions/modal.ts"),
				l = o("./src/reddit/actions/post.ts"),
				u = o("./src/reddit/actions/postCreation/editorContent.ts"),
				m = o("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				p = o("./src/reddit/actions/shortcuts/utils.ts"),
				h = o("./src/reddit/actions/toaster.ts"),
				b = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = o("./src/reddit/constants/adEvents.ts"),
				_ = o("./src/reddit/constants/localStorage.ts"),
				g = o("./src/redditGQL/operations/CommentToxicity.json"),
				x = o("./src/lib/makeApiRequest/index.ts"),
				y = o("./src/lib/makeGqlRequest/index.ts"),
				C = o("./src/lib/omitHeaders/index.ts"),
				v = o("./src/reddit/constants/headers.ts"),
				E = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				j = o("./src/reddit/helpers/genericServerError/index.ts"),
				k = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				w = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				O = o("./src/reddit/models/PostCreationForm/index.ts"),
				T = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				F = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const R = (e, t, o, n) => {
					let s, r;
					if (n === O.h.MARKDOWN) s = o.text, r = null;
					else {
						s = null;
						let e = null;
						o.rteState && (e = b.a.toRichTextJSON(o.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(e, {
						...g,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				S = async (e, t, o, n, r) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === O.h.MARKDOWN) a.text = o.text;
					else {
						a.text = null;
						let e = null;
						o.rteState && (e = b.a.toRichTextJSON(o.rteState).document), a.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(Object(C.a)(e, [v.a]), {
						method: s.hb.POST,
						endpoint: Object(E.a)(Object(T.a)(Object(F.a)(`${e.apiUrl}/api/comment.json`))),
						data: a
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(w.a)(e)
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body.json.data.things[0].data, n)
						}
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body, n)
						}
					} : {
						...e,
						error: e.error || Object(j.a)()
					})
				};
			var D = o("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var M = o("./src/reddit/endpoints/post/index.tsx"),
				A = o("./src/reddit/endpoints/post/convert.ts"),
				I = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				z = o("./src/reddit/featureFlags/index.ts"),
				P = o("./src/reddit/helpers/dom/index.ts"),
				B = o("./src/reddit/helpers/localStorage/index.ts"),
				W = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				L = o("./src/reddit/models/Comment/index.ts"),
				N = o("./src/reddit/models/PostDraft/index.ts"),
				H = o("./src/reddit/models/RichTextJson/index.ts"),
				U = o("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				q = o("./src/reddit/models/Toast/index.ts"),
				K = o("./src/reddit/selectors/comments.ts"),
				X = o("./src/reddit/selectors/commentSelector.ts"),
				J = o("./src/reddit/selectors/platform.ts"),
				Z = o("./src/reddit/selectors/posts.ts"),
				V = o("./src/reddit/selectors/user.ts"),
				G = o("./src/reddit/actions/comment/index.ts"),
				Q = o("./src/reddit/actions/comment/constants.ts");
			const Y = Object(r.a)(Q.k),
				$ = ({
					hasFocus: e,
					draftKey: t
				}) => async (o, n) => {
					const s = n();
					if (!!s.features.comments.drafts[t])
						if (Object(V.M)(s) && e) {
							const n = Y({
								hasFocus: e,
								draftKey: t
							});
							o(Object(i.f)(n))
						} else o(Y({
							hasFocus: e,
							draftKey: t
						}))
				}, ee = Object(r.a)(Q.H), te = Object(r.a)(Q.J), oe = Object(r.a)(Q.I), ne = Object(r.a)(Q.G), se = (e, t, o, n) => {
					const s = n.ok && n.body,
						r = s && s.comment && s.comment.id;
					W.f(e, o, t, r)
				}, re = "Toxicity_Warning__Modal", ae = (e, t, o, n, s, r) => async (a, i, {
					gqlContext: c
				}) => {
					const l = i(),
						u = Object(J.e)(l);
					let m = "";
					if (u && (m = u.name), z.d.enableToxicityWarning(l)) {
						if (!(await R(c(), m, n, s))) return void a(Object(d.i)(re))
					}
					a(ce(e, t, o, n, s, r))
				}, ie = e => e.rteState ? b.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ce = (e, t, o, r, a, i, c) => async (u, b, {
					apiContext: _
				}) => {
					u(Object(d.g)(re));
					const g = b(),
						x = g.features.comments.submit.pending[o];
					if (!g.user.account || x) return;
					u(ee({
						draftKey: o,
						draft: r
					}));
					const y = g.user.account.displayText,
						C = r.commentMode;
					let v;
					if (c ? (v = await Object(I.i)(_(), e, r, y), u(Object(m.a)({
							streamId: e,
							level: v.body.automuteLevel
						}))) : v = await S(_(), e, r, y, C), v.ok) {
						let n;
						n = v.body, u(te({
							...n,
							headCommentId: Object(K.w)(g, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: o
						}));
						const s = Object(Z.F)(b(), {
							postId: e
						});
						u(Object(l.x)(s, f.a.CommentSubmitted))
					} else {
						v.error && v.error.type === s.Gb && W.g(g, ie(r), e);
						const t = v.error && v.error.fields && v.error.fields[0] ? v.error.fields[0].msg : n.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(ne({
							draftKey: o,
							error: v.error
						})), u(Object(h.f)({
							duration: h.a,
							kind: q.b.Error,
							text: t
						}))
					}
					se(b(), t, a, v), i || Object(p.d)()
				}, de = e => async (t, o, {
					gqlContext: n
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: r,
						parentCommentDepth: a,
						draftKey: i,
						formData: c,
						editorMode: l
					} = e, u = o(), m = Object(J.e)(u);
					let p = "";
					if (m && (p = m.name), z.d.enableToxicityWarning(u)) {
						if (!(await R(n(), p, c, l))) return void t(Object(d.i)(re))
					}
					t(le({
						commentsPageKey: r,
						draftKey: i,
						parentCommentDepth: a,
						parentCommentId: s,
						formData: c,
						editorMode: l
					}))
				}, le = e => async (t, o, {
					apiContext: n
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e;
					t(Object(d.g)(re));
					const m = o(),
						h = m.features.comments.submit.pending[c];
					if (!m.user.account || h) return;
					t(ee({
						draftKey: c,
						draft: l
					}));
					const b = m.user.account.displayText,
						f = l.commentMode,
						_ = await S(n(), r, l, b, f);
					if (_.ok) t(oe({
						..._.body,
						parentCommentId: r,
						commentsPageKey: a,
						draftKey: c,
						depth: i + 1
					}));
					else {
						if (_.error && _.error.type === s.Gb) {
							const e = Object(X.a)(m, {
								commentId: r
							});
							if (!e) return;
							W.g(m, ie(l), e.postId, r)
						}
						t(ne({
							draftKey: c,
							error: _.error
						}))
					}
					se(o(), a, u, _), Object(p.d)()
				}, ue = Object(r.a)(Q.q), me = Object(r.a)(Q.p), pe = Object(r.a)(Q.l), he = (Object(r.a)(Q.g), Object(r.a)(Q.m)), be = (Object(r.a)(Q.t), (e, t, o) => async (s, r, {
					apiContext: a
				}) => {
					const i = e === O.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(H.G)(t)) s(he({
						editorMode: e,
						draftKey: o,
						content: i ? H.i : ""
					})), s(Object(u.c)(e));
					else {
						s(Object(u.b)(o));
						const r = await Object(A.a)(a(), e, i ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(u.a)(o)), s(he({
								editorMode: e,
								draftKey: o,
								content: t
							})), s(Object(u.c)(e))
						} else s(Object(u.a)(o)), s(Object(h.f)({
							duration: h.a,
							kind: q.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), fe = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: o
				}) => async (n, s) => {
					const r = s(),
						l = Object(a.a)(N.c.replyToComment, t);
					if (!Object(V.K)(s())) return n(Object(c.j)()), void n(Object(d.k)({
						actionSource: d.a.Reply,
						redirectUrl: Object(K.m)(s(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						m = u && u[t];
					if ((m || u && o) && (Object.keys(u).forEach(t => u[t] && n(me({
							parentCommentId: t,
							commentsPageKey: e
						}))), m)) return;
					let p = "",
						h = null;
					const b = r.user.prefs.commentMode,
						f = Object(P.d)();
					if (f) {
						const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (b === O.h.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => U.s(e, null)).map(e => U.l([e])),
								o = U.s("", null),
								n = U.l([o]);
							h = {
								document: [U.c(t), n]
							}
						}
					}
					const _ = r.features.comments.drafts[l];
					let g;
					if (g = f ? {
							commentMode: b,
							draftType: N.c.replyToComment,
							rtJson: h,
							text: `${p}\n`
						} : _ || {
							commentMode: b,
							draftType: N.c.replyToComment,
							rtJson: h,
							text: ""
						}, Object(V.M)(r)) {
						const o = ue({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: l,
							formData: g
						});
						n(Object(i.f)(o))
					} else n(ue({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: l,
						formData: g
					}))
				}, _e = e => async t => {
					t(Object(G.p)(e)), t(Ce(e))
				}, ge = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async o => {
					o(me({
						parentCommentId: e,
						commentsPageKey: t
					})), o(fe({
						parentCommentId: e,
						commentsPageKey: t
					})), o(Object(G.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, xe = (e, t) => o => o(pe({
					draftKey: e,
					formData: t
				})), ye = Object(r.a)(Q.s), Ce = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: o,
					draftKey: n,
					text: s
				}) => async (r, a) => {
					const i = a();
					i.user.account && (W.c(i), r(ye({
						commentId: e,
						commentsPageKey: o,
						draftKey: n,
						formData: {
							text: s,
							commentMode: t,
							rteState: null,
							draftType: N.c.edit,
							hasFocus: !0
						}
					})))
				}, ve = Object(r.a)(Q.C), Ee = Object(r.a)(Q.B), je = Object(r.a)(Q.D), ke = Object(r.a)(Q.h), we = ({
					id: e,
					commentsPageKey: t,
					depth: o,
					draftKey: n,
					formData: r
				}) => async (o, a, {
					apiContext: i
				}) => {
					const c = a();
					if (!c.user.account) return;
					o(ve({
						draftKey: n
					})), W.d(c);
					const d = c.user.account.displayText || "",
						l = r.commentMode,
						u = await (async (e, t, o, n, r, a) => {
							const i = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (a === O.h.MARKDOWN) i.text = n.text;
							else {
								i.text = null;
								let e = null;
								n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), i.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(x.a)(Object(C.a)(e, [v.a]), {
								endpoint: Object(E.a)(Object(F.a)(Object(T.a)(`${e.apiUrl}/api/editusertext`))),
								method: s.hb.POST,
								data: i
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(w.a)(e)
							} : {
								...e,
								body: {
									comment: Object(k.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(k.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(j.a)()
							})
						})(i(), e, 0, r, d, l);
					if (u.ok) {
						const s = u.body;
						o(je({
							commentId: e,
							commentsPageKey: t,
							draftKey: n
						})), o(Object(G.i)({
							[e]: {
								...s.comment
							}
						}))
					} else o(Ee({
						draftKey: n,
						error: u.error
					}))
				}, Oe = Object(r.a)(Q.z), Te = Object(r.a)(Q.y), Fe = Object(r.a)(Q.A), Re = (e, t) => async (o, n, {
					apiContext: r
				}) => {
					const a = n();
					o(Oe({
						id: e
					})), W.a(e, a);
					const i = await ((e, t) => Object(x.a)(Object(C.a)(e, [v.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/del`),
						method: s.hb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(w.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(j.a)()
					}))(r(), e);
					i.ok ? o(Fe({
						id: e,
						postId: t
					})) : o(Te({
						id: e,
						error: i.error
					}))
				}, Se = e => async (t, o, {
					apiContext: n
				}) => {
					const s = !o().features.comments.models[e].sendReplies;
					t(Object(G.i)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(M.q)(n(), e, s)).ok || t(Object(G.i)({
						[e]: {
							sendReplies: !s
						}
					}))
				}, De = (e, t) => async (o, s, {
					gqlContext: r
				}) => {
					var a, i, c, d, l, u;
					o(Object(G.c)());
					const m = e => Object(h.f)(Object(h.e)(e, q.b.Error));
					if (((null === (i = null === (a = s().pages) || void 0 === a ? void 0 : a.comments) || void 0 === i ? void 0 : i.followed) || []).length === _.a) o(m(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const a = t === L.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(G.n)(i)), (await ((e, t) => Object(y.a)(e, {
								...D,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(B.pb)(null !== (l = null === (d = null === (c = s().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== l ? l : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = a ? n.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : n.fbt._("Unfollowed, You’ll no longer recieve updates on this comment", null, {
								hk: "2fJsVC"
							});
							o(Object(h.f)({
								kind: q.b.SuccessCommunityGreen,
								text: e
							}))
						} else o(Object(G.n)(i)), o(m(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "i", (function() {
				return F
			})), o.d(t, "m", (function() {
				return R
			})), o.d(t, "e", (function() {
				return M
			})), o.d(t, "h", (function() {
				return A
			})), o.d(t, "l", (function() {
				return B
			})), o.d(t, "q", (function() {
				return W
			})), o.d(t, "j", (function() {
				return L
			})), o.d(t, "g", (function() {
				return N
			})), o.d(t, "f", (function() {
				return H
			})), o.d(t, "o", (function() {
				return K
			})), o.d(t, "p", (function() {
				return X
			})), o.d(t, "d", (function() {
				return J
			})), o.d(t, "a", (function() {
				return V
			})), o.d(t, "b", (function() {
				return G
			})), o.d(t, "n", (function() {
				return Q
			})), o.d(t, "c", (function() {
				return Y
			})), o.d(t, "k", (function() {
				return $
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/config.ts"),
				s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/telemetry/index.ts"),
				a = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/reddit/actions/economics/helpers/async.ts"),
				c = o("./src/reddit/actions/economics/powerups/achievements.ts"),
				d = o("./src/reddit/actions/login.ts"),
				l = o("./src/reddit/actions/modal.ts"),
				u = o("./src/reddit/actions/presence.ts"),
				m = o("./src/reddit/actions/shortcuts/utils.ts"),
				p = o("./src/reddit/actions/toaster.ts"),
				h = o("./src/reddit/actions/vote.ts"),
				b = o("./src/reddit/endpoints/comment/index.tsx"),
				f = o("./src/reddit/helpers/commentList/index.ts"),
				_ = o("./src/reddit/helpers/trackers/comment.ts"),
				g = o("./src/reddit/models/Comment/index.ts"),
				x = o("./src/reddit/models/Post/index.ts"),
				y = o("./src/reddit/models/Toast/index.ts"),
				C = o("./src/reddit/models/Vote/index.ts"),
				v = o("./src/reddit/selectors/comments.ts"),
				E = o("./src/reddit/selectors/commentSelector.ts"),
				j = o("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				k = o("./src/reddit/selectors/moderatingComments.ts"),
				w = o("./src/reddit/selectors/user.ts"),
				O = o("./src/reddit/actions/comment/constants.ts");
			const T = {},
				F = Object(a.a)(O.o),
				R = e => async (t, o, {
					apiContext: n
				}) => {
					if (!Object(w.K)(o())) return t(Object(d.j)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(v.m)(o(), {
							commentId: e
						})
					}));
					const r = o().features.comments.models[e];
					if (!r) return;
					const a = r.isSaved ? b.k : b.g;
					if (t(F({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await a(n(), e)).ok) {
						const o = r.isSaved ? s.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : s.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							n = s.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(p.f)({
							text: o,
							kind: y.b.Undo,
							buttonText: n,
							buttonAction: R(e)
						}))
					} else t(F({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, S = e => `viewing-comment-${e}`, D = n.a.telemetry.commentConsumedThreshold, M = e => async (t, o) => {
					const s = o();
					if (!Object(E.a)(s, {
							commentId: e
						}) || Math.random() > n.a.telemetry.commentSampleRate) return;
					_.c({
						state: s,
						commentId: e
					}), r.c.start(S(e));
					const a = setTimeout(() => _.a({
						state: s,
						commentId: e
					}), D);
					T[e] = a
				}, A = (e, t) => async (o, n) => {
					const s = n(),
						a = S(e);
					if (Object(E.a)(s, {
							commentId: e
						}) && r.c.has(a)) {
						const o = r.c.end(a);
						!t && o < D && (clearTimeout(T[e]), delete T[e])
					}
				}, I = Object(a.a)(O.x), z = Object(a.a)(O.w), P = Object(a.a)(O.v), B = (e, t) => async (o, n, {
					apiContext: s
				}) => {
					const r = n(),
						a = r.moreComments.models[t],
						d = r.platform.currentPage,
						l = d && d.routeMatch,
						m = l && l.match,
						{
							partialPostId: p
						} = m ? m.params : null;
					if (!p) return;
					const h = Object(x.s)(p);
					o(I({
						moreCommentsId: a.id
					}));
					const _ = await Object(b.e)(s(), h, {
						token: a.token
					}, Object(j.a)(r));
					if (_.ok) {
						const t = _.body,
							n = Object(f.a)(t, h, r);
						o(z({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: n,
							...t
						}));
						const s = r.posts.models[h];
						let d;
						s && "subreddit" === s.belongsTo.type && t.comments && (d = s.belongsTo.id, await o(Object(i.a)({
							commentIds: Object.keys(_.body.comments),
							postIds: [s.id],
							skip: ["communityDetails", "subscription"],
							subredditId: d
						})));
						const l = _.body.comments,
							m = _.body.posts;
						await o(Object(u.b)(m, l, d)), await o(Object(c.b)(d, l))
					} else o(P({
						moreCommentsItem: a,
						..._.error
					}))
				}, W = Object(h.a)(f.b, C.a.upvoted), L = Object(h.a)(f.b, C.a.downvoted), N = Object(a.a)(O.j), H = Object(a.a)(O.i), U = Object(a.a)(O.e), q = Object(a.a)(O.f), K = (Object(a.a)(O.c), Object(a.a)(O.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: o
				}) => async (n, s) => {
					const r = s(),
						a = Object(g.h)(e),
						i = Object(v.n)(r, {
							commentLink: a,
							commentsPageKey: t
						}),
						c = Object(k.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						d = i.depth;
					n(U({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== d || o(e, !0), Object(m.d)()
				}), X = ({
					commentId: e,
					commentsPageKey: t
				}) => async o => {
					o(q({
						commentId: e,
						commentsPageKey: t
					}))
				}, J = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: o,
					scrollToAndRemeasure: n
				}) => async (s, r) => {
					const a = r(),
						i = Object(f.e)(t, e, o, a),
						c = Object(k.b)(a, {
							commentId: e.id,
							commentsPageKey: t
						});
					s(U({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === o && n(i, !0), Object(m.d)()
				}, Z = Object(a.a)(O.r), V = e => t => t(Z({
					draftKey: e
				})), G = Object(a.a)(O.a), Q = Object(a.a)(O.E), Y = Object(a.a)(O.b), $ = Object(a.a)(O.u)
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
				a = o("./src/reddit/endpoints/governance/requester.ts");
			var i = o("./src/lib/makeActionCreator/index.ts"),
				c = o("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(i.a)(c.a),
				l = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, o, {
					apiContext: n
				}) => {
					const s = e && e.includeMemberships || !1,
						i = e && e.forceFetch || !1,
						c = o();
					if (!c.economics.me.fetched || s && !c.economics.me.data.specialMemberships || i) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(n(), s);
						if (e.ok) {
							const o = e.body;
							s && !o.specialMemberships && (o.specialMemberships = {}), t(d(o))
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
								method: n.hb.GET
							});
						o.ok && o.body && e(u(o.body))
					}
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
				a = o("./src/reddit/endpoints/post/convert.ts"),
				i = o("./src/reddit/helpers/localStorage/index.ts"),
				c = o("./src/reddit/helpers/trackers/postComposer.ts"),
				d = o("./src/reddit/models/PostCreationForm/index.ts"),
				l = o("./src/reddit/models/RichTextJson/index.ts"),
				u = o("./src/reddit/models/Toast/index.ts"),
				m = o("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(s.a)(m.C),
				h = Object(s.a)(m.p),
				b = Object(s.a)(m.M),
				f = (e, t, o) => async (s, i, {
					apiContext: f
				}) => {
					c.i(i(), t);
					const g = t === d.h.MARKDOWN,
						x = t === d.h.RICH_TEXT,
						y = m.k;
					if (g && Object(l.G)(o)) return s(b({
						editorKey: e,
						editorMode: d.h.MARKDOWN,
						content: ""
					})), void s(_(t));
					if (x && !o) return s(b({
						editorKey: e,
						editorMode: d.h.RICH_TEXT,
						content: l.i
					})), void s(_(t));
					s(p(y));
					const C = await Object(a.a)(f(), t, g ? JSON.stringify(o) : o);
					C.ok ? (s(h(y)), s(b({
						editorKey: e,
						editorMode: t,
						content: C.body.output
					})), s(_(t))) : (s(h(y)), s(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, _ = e => async (t, o) => {
					const s = Object(i.m)();
					if (s >= 3) return;
					const a = o().user.prefs.useMarkdown ? d.h.MARKDOWN : d.h.RICH_TEXT;
					if (e === a) return;
					const c = e === d.h.MARKDOWN ? n.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
						text: c
					})), Object(i.mb)(s + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			})), o.d(t, "b", (function() {
				return c
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = o("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(n.a)(r.r),
				i = Object(n.a)(r.F),
				c = e => async (t, o, {
					apiContext: n
				}) => {
					const r = await Object(s.a)(n(), e);
					r && r.ok ? t(a({
						streamId: e,
						level: r.body.data.auto_mute_status.level
					})) : t(i(e))
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
				a = o("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
				i = o.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t) => 21 * e + 33 + (t ? 10 : 0);
			t.a = ({
				breakOut: e,
				depth: t,
				isEditing: o,
				...n
			}) => s.a.createElement("div", c({
				className: Object(r.a)({
					[i.a.breakout]: e
				}),
				style: {
					left: d(t, o)
				}
			}, n))
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
				a = o("./src/lib/lessComponent.tsx"),
				i = o("./src/reddit/controls/Button/index.tsx"),
				c = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = o("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				l = o.n(d);
			const {
				fbt: u
			} = o("./node_modules/fbt/lib/FbtPublic.js"), m = a.a.div("FormFooterWrapper", l.a), p = a.a.wrapped(i.q, "SubmitButton", l.a), h = a.a.wrapped(c.a, "LoadingIcon", l.a), b = a.a.wrapped(i.q, "CancelButton", l.a), f = a.a.div("ButtonWrapper", l.a), _ = e => e.preventDefault();
			t.a = ({
				pending: e,
				cancelButtonEnabled: t = !0,
				children: o,
				className: n,
				submitButtonText: a,
				canSubmit: c,
				onSubmit: d,
				onCancel: g
			}) => s.a.createElement(m, {
				className: Object(r.a)(n, {
					[l.a.pending]: e
				})
			}, s.a.createElement(f, null, s.a.createElement(p, {
				size: i.c.XS,
				type: "submit",
				disabled: !c,
				onClick: d,
				onMouseDown: _
			}, e ? s.a.createElement(h, {
				sizePx: 10
			}) : a), t && s.a.createElement(b, {
				priority: i.b.Secondary,
				size: i.c.XS,
				type: "reset",
				disabled: e,
				onClick: g,
				onMouseDown: _
			}, u._("Cancel", null, {
				hk: "2TSLl5"
			}))), o)
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
				return de
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./node_modules/react-dom/index.js"),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				d = o("./src/reddit/actions/comment/authoring.ts"),
				l = o("./src/reddit/components/AuthorLink/index.tsx"),
				u = o("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				m = o("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				p = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = o("./src/reddit/components/MarkdownHelp/index.tsx"),
				b = o("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				f = o("./src/reddit/controls/ErrorText/index.tsx"),
				_ = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = o("./src/reddit/icons/svgs/Help/index.tsx"),
				x = o("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				y = o("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				C = o("./src/lib/fastdom/index.ts"),
				v = o("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				E = o.n(v),
				j = o("./src/lib/lessComponent.tsx");
			const k = 310,
				w = j.a.div("Container", E.a);
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), o = t < k ? "compact" : "full";
						o !== this.state.toolbarType && C.a.write(() => {
							this.setState({
								toolbarType: o
							})
						})
					}
				}
				componentDidMount() {
					C.a.read(this.selectToolbar), window.addEventListener("resize", this.selectToolbar)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.selectToolbar)
				}
				render() {
					return r.a.createElement(w, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var T = o("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				F = o("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				R = o("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				S = o.n(R),
				D = o("./src/reddit/controls/Button/index.tsx");
			const M = j.a.wrapped(_.a, "LoadingIcon", S.a),
				A = ({
					isFilled: e,
					...t
				}) => r.a.createElement(M, t),
				I = j.a.div("Wrapper", S.a),
				z = j.a.wrapped(T.a, "MarkdownModeIcon", S.a),
				P = ({
					isFilled: e,
					...t
				}) => r.a.createElement(z, t);
			var B = r.a.memo((function(e) {
					const t = n.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return r.a.createElement(I, null, r.a.createElement(D.q, {
						priority: D.b.Plain,
						size: D.c.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? A : P
					}, r.a.createElement(F.a, {
						text: t
					})))
				})),
				W = o("./src/lib/classNames/index.ts"),
				L = o("./src/reddit/constants/keycodes.ts"),
				N = o("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				H = o("./src/reddit/constants/componentSizes.ts"),
				U = o("./src/reddit/constants/componentTestIds.ts"),
				q = o("./src/reddit/selectors/activeModalId.ts"),
				K = o("./src/reddit/selectors/comments.ts"),
				X = o("./src/reddit/selectors/editorContent.ts"),
				J = o("./src/reddit/actions/modal.ts"),
				Z = o("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				V = o("./src/reddit/models/PostCreationForm/index.ts"),
				G = o("./src/reddit/models/PostDraft/index.ts"),
				Q = o("./src/reddit/models/User/index.ts"),
				Y = o("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				$ = o.n(Y);
			const ee = j.a.button("SwitchModeButton", $.a),
				te = j.a.wrapped(_.a, "LoadingIcon", $.a),
				oe = j.a.div("CommentHeader", $.a),
				ne = j.a.span("FormHeaderText", $.a),
				se = j.a.button("HelpButton", $.a),
				re = j.a.wrapped(g.a, "HelpIcon", $.a),
				ae = j.a.wrapped(Z.a, "ResizableAutosizeTextarea", $.a),
				ie = j.a.wrapped(y.a, "FormFooter", $.a),
				ce = j.a.wrapped(b.a, "CurrentUserIcon", $.a),
				de = e => r.a.createElement(se, {
					className: e.className,
					onClick: e.onClick
				}, r.a.createElement(re, null)),
				le = 8,
				ue = 16,
				me = j.a.div("Wrapper", $.a),
				pe = j.a.div("FormWrapper", $.a),
				he = Object(i.b)(() => Object(c.c)({
					activeModalId: q.a,
					userName: e => e.user.account ? Object(Q.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: K.i,
					isConverting: (e, t) => Object(X.a)(e, t.draftKey)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(J.i)(Object(N.a)(t.draftKey))),
					helpModalToggled: () => e(Object(J.i)(h.b))
				}));
			class be extends r.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < H.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.wrapperHeight || C.a.write(() => {
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
							C.a.read(this.detectBreakout)
						})
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === G.c.edit, this.onCancel = () => {
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
						(t || o) && n === L.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: V.h.MARKDOWN,
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
						draftType: t,
						hasError: o,
						initialText: s
					} = e;
					this.state = {
						text: s || "",
						autofocusDisabled: !1,
						hasChanged: !1,
						showError: o,
						breakOut: !1,
						wrapperHeight: void 0,
						formHeight: null,
						cancelModalText: t === G.c.edit ? n.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "1ZfaWW"
						}) : n.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "3d8gJY"
						})
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), C.a.read(this.detectBreakout), C.a.write(() => {
						this.props.draft.hasFocus && this.textAreaRef && this.textAreaRef.focus()
					}), this.props.instanceRef && this.props.instanceRef(this)
				}
				componentWillUnmount() {
					this.props.onUnmount({
						text: this.getCurrentText()
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null)
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
					const e = Object(a.findDOMNode)(this.textAreaRef);
					return e instanceof Element ? e.getBoundingClientRect().height + le + ue + H.o : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: o,
						className: s,
						disableAutofocus: a,
						depth: i,
						draft: c,
						draftKey: b,
						draftType: _,
						errorMsgs: g,
						pending: y,
						modalSeen: C,
						submitButtonText: v,
						isCommentBoxDesignEnabled: E,
						isExpanded: j,
						isTopLevelComment: k,
						onSwitchMode: w,
						userName: T
					} = this.props, {
						cancelModalText: F,
						showError: R,
						text: S,
						breakOut: D,
						wrapperHeight: M
					} = this.state, A = Object(N.a)(b), I = c.draftType === G.c.edit;
					return r.a.createElement(me, {
						"data-test-id": U.b,
						className: Object(W.a)(s, {
							[$.a.isTopLevelComment]: k,
							[$.a.mExpanded]: j,
							[$.a.mRedesign]: E
						}),
						ref: this.setWrapperRef,
						style: {
							height: D ? M : void 0
						}
					}, !E && k && r.a.createElement(oe, null, r.a.createElement(ne, null, n.fbt._("Comment as {authorLink}", [n.fbt._param("authorLink", r.a.createElement(l.a, {
						author: T,
						isAdmin: !1,
						isAdminEmeritus: !1,
						isAuthorDeleted: !1,
						isMod: !1,
						isOp: !1
					}, T))], {
						hk: "4pMWAk"
					}))), r.a.createElement(x.a, {
						breakOut: D,
						depth: i,
						isEditing: I
					}, E && r.a.createElement("div", {
						className: $.a.userIcon
					}, r.a.createElement(ce, null)), r.a.createElement(pe, {
						className: Object(W.a)({
							[$.a.pending]: y,
							[$.a.focused]: c.hasFocus
						})
					}, r.a.createElement(ae, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !a,
						disabled: y,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: E ? n.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : n.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: S
					}), (!E || j) && r.a.createElement(ie, {
						cancelButtonEnabled: _ !== G.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: y,
						submitButtonText: v,
						canSubmit: this.userHasEnteredText()
					}, r.a.createElement(O, null, e => "compact" === e ? r.a.createElement(B, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => w(V.h.RICH_TEXT, S, b),
						isConverting: this.props.isConverting
					}) : r.a.createElement("div", null, r.a.createElement(ee, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => w(V.h.RICH_TEXT, S, b)
					}, n.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "ousUG"
					}), this.props.isConverting && r.a.createElement(te, {
						sizePx: 12
					})))), r.a.createElement(de, {
						onClick: this.props.helpModalToggled
					})))), R && Object(f.c)(g), e === A && r.a.createElement(p.a, {
						actionText: n.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: n.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: F,
						onConfirm: () => this.cancelForm(),
						toggleModal: o,
						trackClick: () => {}
					}), e === h.b && r.a.createElement(h.a, null), e === d.q && r.a.createElement(m.a, {
						onSubmit: this.onSubmit,
						modalSeen: C,
						withOverlay: !0
					}), r.a.createElement(u.a, {
						editKey: b,
						hasValue: !!S
					}))
				}
			}
			t.b = he(be)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./node_modules/react-router/esm/react-router.js");
			let i = null;
			class c extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						c.blockers.delete(e), c.blockers.size || (i && i(), i = null, window.removeEventListener("beforeunload", c.navigationBlocker))
					}
				}
				componentDidUpdate(e) {
					!e.hasValue && this.props.hasValue ? this.block(this.props.editKey) : e.hasValue && !this.props.hasValue && this.unblock(this.props.editKey)
				}
				componentWillUnmount() {
					this.unblock(this.props.editKey)
				}
				componentDidMount() {
					this.props.hasValue && this.block(this.props.editKey)
				}
				block(e) {
					c.blockers.add(e), i || (window.addEventListener("beforeunload", c.navigationBlocker), i = this.props.history.block(() => {
						const e = this.props.isPostEdit ? n.fbt._("You have a post edit in progress, are you sure you want to discard it?", null, {
							hk: "4u5L7p"
						}) : n.fbt._("You have a comment in progress, are you sure you want to discard it?", null, {
							hk: "rgscd"
						});
						return window.confirm(e) ? void 0 : n.fbt._("Are you sure you want to leave?", null, {
							hk: "1Ua5kc"
						})
					}))
				}
				render() {
					return null
				}
			}
			c.blockers = new Set, c.navigationBlocker = e => {
				const t = "Are you sure you want to leave?";
				return e.returnValue = t, t
			}, t.a = Object(a.i)(c)
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
				a = o("./node_modules/uuid/v4.js"),
				i = o.n(a),
				c = o("./src/higherOrderComponents/asModal/index.tsx"),
				d = o("./src/reddit/actions/comment/authoring.ts"),
				l = o("./src/reddit/actions/modal.ts"),
				u = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = o("./src/reddit/components/TrackingHelper/index.tsx"),
				p = o("./src/reddit/controls/TextButton/index.tsx"),
				h = o("./src/reddit/constants/tracking.ts"),
				b = o("./src/reddit/selectors/telemetry.ts");
			const f = e => ({
					source: "toxicity_modal",
					...b.defaults(e),
					screen: b.screen(e),
					subreddit: b.subreddit(e)
				}),
				_ = e => t => ({
					action: h.c.VIEW,
					noun: "modal",
					correlationId: e,
					...f(t)
				}),
				g = e => t => ({
					action: h.c.CLICK,
					noun: "submit",
					correlationId: e,
					...f(t)
				}),
				x = e => t => ({
					action: h.c.CLICK,
					noun: "edit",
					correlationId: e,
					...f(t)
				}),
				y = e => t => ({
					action: h.c.CLICK,
					noun: "close",
					correlationId: e,
					...f(t)
				});
			var C = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: v
			} = o("./node_modules/fbt/lib/FbtPublic.js"), E = Object(r.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(l.g)(d.q))
				},
				continue: () => {
					t.onSubmit()
				}
			}));
			class j extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: i()()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(_(this.state.correlationId))
				}
				render() {
					return s.a.createElement(u.d, null, s.a.createElement(u.h, null, s.a.createElement(C.a, null, s.a.createElement(u.p, null, v._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), s.a.createElement(p.a, {
						onClick: () => {
							this.props.sendEvent(y(this.state.correlationId)), this.props.closeModal()
						}
					}, s.a.createElement(u.b, null)))), s.a.createElement(u.k, null, s.a.createElement(u.o, null, v._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), s.a.createElement(u.f, null, s.a.createElement(u.a, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, v._("Go back and edit", null, {
						hk: "3nGNI7"
					})), s.a.createElement(u.q, {
						onClick: () => {
							this.props.sendEvent(g(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, v._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(c.a)(E(Object(m.c)(j)))
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
				a = o.n(r),
				i = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				d = o("./src/reddit/actions/comment/index.ts"),
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
			var C = () => a.a.createElement(y, null, a.a.createElement(b.a, {
					className: g.a.commentIcon
				}), a.a.createElement("div", {
					className: g.a.commentText
				}, x._("Only approved users can comment in this community.", null, {
					hk: "3oqccc"
				})), a.a.createElement(h.default, {
					className: g.a.requestButton,
					eventSource: f.b.Comment
				})),
				v = o("./node_modules/fbt/lib/FbtPublic.js"),
				E = o("./node_modules/lodash/noop.js"),
				j = o.n(E),
				k = o("./src/lib/classNames/index.ts"),
				w = o("./src/lib/fastdom/index.ts"),
				O = o("./src/lib/memoizeByReference/index.ts"),
				T = o("./src/reddit/components/AuthorLink/index.tsx"),
				F = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				R = o("./src/reddit/components/RichTextEditor/index.tsx"),
				S = o("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				D = o("./src/reddit/components/CollapseIntoOverflow/index.tsx"),
				M = o("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				A = o("./src/reddit/helpers/richTextEditor/index.ts"),
				I = o("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				z = o("./src/reddit/actions/tooltip.ts"),
				P = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				B = o("./src/reddit/constants/localStorage.ts"),
				W = o("./src/reddit/helpers/localStorage/index.ts"),
				L = o("./src/reddit/icons/svgs/Smile/index.tsx"),
				N = o("./src/reddit/selectors/gold/enabledFeatures.ts"),
				H = o("./src/reddit/selectors/gold/powerups/index.ts"),
				U = o("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				q = o("./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less"),
				K = o.n(q);
			const X = 5,
				J = "ProwerupsEmoji--FirstUploadStimulus",
				Z = 100;
			const V = Object(c.c)({
				emotes: (e, {
					subredditId: t
				}) => Object(N.a)(e, {
					subredditId: t
				}),
				customEmotes: (e, {
					subredditId: t
				}) => Object(H.g)(e, {
					subredditId: t
				}),
				userCanEditCustomEmojis: (e, {
					subredditId: t
				}) => !!t && Object(H.s)(e, {
					subredditId: t
				}),
				subredditHasPowerups: (e, {
					subredditId: t
				}) => Object(H.f)(e, {
					subredditId: t
				})
			});
			var G = Object(i.b)(V)((function(e) {
					const {
						controlsState: t,
						emotes: o,
						onEmoteButtonClick: n,
						userCanEditCustomEmojis: s,
						customEmotes: c,
						subredditHasPowerups: d,
						subredditId: l
					} = e, u = l ? Object(W.k)(B.b.EMOJI_PROMO_TOOLTIP_DISPLAY_COUNT_PER_SUBREDDIT, l) : 0, m = d && u < X && s && 0 === c.length, [p, h] = Object(r.useState)(m), b = Object(i.d)();
					Object(r.useEffect)(() => {
						p && l && setTimeout(() => {
							Object(W.Q)(B.b.EMOJI_PROMO_TOOLTIP_DISPLAY_COUNT_PER_SUBREDDIT, l), b(Object(z.f)({
								tooltipId: J
							}))
						}, Z)
					}, [b, p, l]);
					const f = d ? v.fbt._("Add Emoji", null, {
						hk: "3EV4aU"
					}) : v.fbt._("Add Emote", null, {
						hk: "3dXLr8"
					});
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(P.c, {
						tooltipId: J,
						text: v.fbt._("NEW! Add custom emojis", null, {
							hk: "1C510K"
						}),
						className: K.a.addEmojiTooltip
					}), a.a.createElement("span", {
						id: J
					}, a.a.createElement(U.a, {
						Icon: () => a.a.createElement(L.a, {
							className: K.a.smile
						}),
						tooltip: p ? void 0 : f,
						enabled: t.emote.isEnabled,
						onClick: e => {
							p && (b(Object(z.j)({
								tooltipId: J
							})), h(!1)), n(e)
						}
					}, a.a.createElement("div", {
						className: Object(k.a)(K.a.emotes, {
							[K.a.emoteMask]: o.length > 1
						})
					}, o.map(e => a.a.createElement("img", {
						className: K.a.emote,
						key: e.id,
						src: e.emoji.path
					}))))))
				})),
				Q = o("./src/lib/constants/icons.ts"),
				Y = o("./src/reddit/components/RichTextEditor/Toolbar/GifButton/index.m.less"),
				$ = o.n(Y);

			function ee(e) {
				const {
					controlsState: t,
					onGifButtonClick: o,
					userCanUseGifs: n
				} = e, s = t.giphy.isEnabled;
				return a.a.createElement(U.a, {
					iconName: Q.a.gif_post,
					className: s && n ? $.a.rainbow : "",
					tooltip: v.fbt._("Add GIF", null, {
						hk: "3uH3vO"
					}),
					disabledTooltip: v.fbt._("Limit 1 GIF / comment", null, {
						hk: "7T6gq"
					}),
					enabled: s,
					onClick: o
				})
			}
			var te = o("./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less"),
				oe = o.n(te);
			const ne = p.a.div("SectionSpacer", oe.a);

			function se(e) {
				const {
					className: t,
					destSubreddit: o,
					editorKey: n,
					editorState: s,
					onChange: r,
					onEmoteButtonClick: c,
					onGifButtonClick: d,
					onOverflowMenuClick: l,
					readOnly: u,
					trackOnClick: m,
					onLinkButtonClick: p,
					userCanUseGifs: h
				} = e, b = Object(I.a)(s);
				u && Object(I.b)(b);
				const f = null == o ? void 0 : o.id,
					_ = Object(i.e)(e => void 0 !== f && Object(N.b)(e, {
						subredditId: f
					})),
					g = Object(i.e)(e => void 0 !== f && Object(N.c)(e, {
						subredditId: f
					})) || h,
					x = a.a.createElement(ee, {
						controlsState: b,
						onGifButtonClick: d,
						userCanUseGifs: h
					});
				return a.a.createElement(D.a, {
					className: t,
					oveflowMenuDropdownId: n,
					onOverflowMenuClick: l,
					editorType: A.a.Comment
				}, a.a.createElement("div", {
					className: oe.a.powerupButtons
				}, g && h && x, _ && a.a.createElement(G, {
					controlsState: b,
					subredditId: o && o.id,
					onEmoteButtonClick: c
				}), g && !h && x), (_ || g) && a.a.createElement(ne, null), Object(M.g)(M.f, b, s, r, m), a.a.createElement(M.a, {
					controlsState: b,
					trackOnClick: m,
					onLinkButtonClick: p
				}), Object(M.g)(M.h, b, s, r, m), a.a.createElement(ne, null), Object(M.g)(M.e, b, s, r, m), a.a.createElement(ne, null), a.a.createElement(M.d, {
					controlsState: b,
					editorState: s,
					trackOnClick: m,
					onChange: r
				}))
			}
			var re = o("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				ae = o("./src/reddit/constants/componentSizes.ts"),
				ie = o("./src/reddit/constants/componentTestIds.ts"),
				ce = o("./src/reddit/controls/ErrorText/index.tsx"),
				de = o("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				le = o("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				ue = o("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				me = o("./src/reddit/models/PostCreationForm/index.ts"),
				pe = o("./src/reddit/models/PostDraft/index.ts"),
				he = o("./src/reddit/actions/modal.ts"),
				be = o("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				fe = o("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				_e = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				ge = o("./src/reddit/contexts/PageLayer/index.tsx"),
				xe = o("./src/reddit/contexts/PageLayer/selectors.ts"),
				ye = o("./src/reddit/models/Subreddit/index.ts"),
				Ce = o("./src/reddit/selectors/activeModalId.ts"),
				ve = o("./src/reddit/selectors/comments.ts"),
				Ee = o("./src/reddit/selectors/economics.ts"),
				je = o("./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less"),
				ke = o.n(je);
			const we = 16,
				Oe = p.a.div("FormWrapper", ke.a),
				Te = p.a.div("CommentHeader", ke.a),
				Fe = p.a.wrapped(le.a, "FormFooter", ke.a),
				Re = p.a.div("MarkdownButtonWrapper", ke.a),
				Se = p.a.wrapped(re.a, "MarkdownButton", ke.a),
				De = p.a.wrapped(ne, "SectionSpacer", ke.a),
				Me = p.a.div("ToolbarWrapper", ke.a),
				Ae = p.a.span("FormHeaderText", ke.a),
				Ie = ({
					cancelButtonEnabled: e,
					draftKey: t,
					isCommentBoxDesignEnabled: o,
					onSubmit: n,
					onCancel: s,
					pending: r,
					submitButtonText: i
				}) => c => {
					const {
						editorState: d,
						onMarkdownButtonClick: l
					} = c, u = d.getCurrentContent(), m = !!u.getPlainText().trim() || u.getBlockMap().some(e => !!e && Object(S.t)(e.getType()));
					return a.a.createElement(Fe, {
						cancelButtonEnabled: e,
						className: Object(k.a)({
							[ke.a.mRedesign]: o
						}),
						onSubmit: n,
						onCancel: s,
						pending: r,
						submitButtonText: i,
						canSubmit: m
					}, a.a.createElement(Me, null, a.a.createElement(se, c), a.a.createElement(De, null), a.a.createElement(Re, null, a.a.createElement(Se, {
						draftKey: t,
						onClick: l
					}))))
				},
				ze = Object(i.b)(() => Object(c.c)({
					activeModalId: Ce.a,
					destSubreddit: (e, t) => {
						const o = Object(xe.p)(e, t);
						return o ? {
							name: o.name,
							isProfile: o.type === ye.f.User,
							id: o.id
						} : void 0
					},
					draft: ve.i,
					userCanUseGifs: (e, t) => {
						const o = Object(xe.p)(e, t);
						return Object(Ee.s)(e, o ? o.id : void 0, t.parentCommentId)
					}
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(he.i)(Object(ue.a)(t.draftKey)))
				}));
			class Pe extends a.a.Component {
				constructor(e) {
					super(e), this.getToolbarRenderer = Object(O.a)((e, t, o, n, s) => Ie({
						cancelButtonEnabled: e,
						draftKey: t,
						isCommentBoxDesignEnabled: s,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: o,
						submitButtonText: n
					})), this.focus = () => {
						this.editor && this.editor.focus()
					}, this.setEditorWrapperRef = e => {
						this.editorWrapperElement = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setRTEComponentRef = e => this.editor = e, this.setRTEDomElementRef = e => {
						this.editorDomElement = e
					}, this.detectBreakout = () => {
						if (!this.editorWrapperElement || !this.editorWrapperElement.parentElement || this.props.isTopLevelComment) return;
						const e = this.editorWrapperElement.parentElement.getBoundingClientRect().width < ae.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.formHeight || w.a.write(() => {
							this.setState({
								breakOut: e,
								formHeight: t
							})
						})
					}, this.hasContent = () => {
						const {
							rteState: e
						} = this.state;
						return _e.a.hasContent(e)
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
							w.a.read(this.detectBreakout)
						})
					}, this.cancelForm = () => {
						this.editor && this.props.draftType === pe.c.replyToPost && this.setState({
							rteState: _e.a.createInitial()
						}), this.props.onCancel()
					}, this.shouldConfirmCancel = () => this.hasContent() && this.state.hasChanged && this.props.draftType === pe.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							rteState: this.state.rteState,
							commentMode: me.h.RICH_TEXT,
							draftType: this.props.draftType,
							validate: this.props.showWarningModal
						})
					}, this.onSwitchEditorMode = (e, t) => {
						this.props.onSwitchMode(e, t, this.props.draftKey)
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
						cancelModalText: o === pe.c.edit ? v.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "1ZfaWW"
						}) : v.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						rteState: !r && t && t.rteState ? t.rteState : _e.a.createInitial(r, s),
						formHeight: void 0,
						hasChanged: !1,
						showError: n
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.setState({
						rteState: _e.a.createInitial()
					}), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentWillUnmount() {
					this.props.onUnmount({
						rteState: this.state.rteState
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null)
				}
				componentDidMount() {
					this.props.draft.hasFocus && this.editor && (window.addEventListener("resize", this.detectBreakout), w.a.read(this.detectBreakout), w.a.write(() => {
						this.props.draft.hasFocus && this.editor && this.editor.focus()
					})), this.props.instanceRef && this.props.instanceRef(this)
				}
				getWrapperHeight() {
					if (!this.editorDomElement) return;
					return this.editorDomElement.getBoundingClientRect().height + we
				}
				render() {
					const {
						activeModalId: e,
						cancelModalToggled: t,
						className: o,
						depth: n,
						destSubreddit: s,
						draft: r,
						draftKey: i,
						draftType: c,
						errorMsgs: d,
						isCommentBoxDesignEnabled: u,
						isExpanded: m,
						modalSeen: p,
						pending: h,
						submitButtonText: b,
						isTopLevelComment: f,
						userCanUseGifs: _,
						userName: g
					} = this.props, {
						cancelModalText: x,
						breakOut: y,
						formHeight: C,
						rteState: E
					} = this.state, w = Object(ue.a)(i), O = r.draftType === pe.c.edit, S = c !== pe.c.replyToPost;
					return a.a.createElement(Oe, {
						className: Object(k.a)(o, {
							[ke.a.isTopLevelComment]: f,
							[ke.a.isRedesign]: u
						}),
						ref: this.setEditorWrapperRef,
						style: {
							height: y ? C : void 0
						}
					}, !u && f && a.a.createElement(Te, null, a.a.createElement(Ae, null, v.fbt._("Comment as {authorLink}", [v.fbt._param("authorLink", a.a.createElement(T.a, {
						author: g,
						isAdmin: !1,
						isAdminEmeritus: !1,
						isAuthorDeleted: !1,
						isMod: !1,
						isOp: !1
					}, g))], {
						hk: "4pMWAk"
					}))), a.a.createElement(de.a, {
						breakOut: y,
						depth: n,
						isEditing: O
					}, a.a.createElement(R.a, {
						userCanUseGifs: _,
						dataTestId: ie.c,
						destSubreddit: s,
						editorType: A.a.Comment,
						initialHeight: this.props.initialHeight,
						isCommentBoxDesignEnabled: u,
						isExpanded: m,
						rteState: E,
						rteRef: this.setRTEComponentRef,
						domRef: this.setRTEDomElementRef,
						onBlur: this.handleBlur,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.handleFocus,
						onChange: this.handleChange,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onSwitchEditorMode,
						placeholderText: u ? v.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : v.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						readOnly: h,
						trackToolbarClick: j.a,
						toolbarPosition: "bottom",
						renderToolbar: this.getToolbarRenderer(S, i, h, b, u)
					})), this.state.showError ? Object(ce.c)(d) : null, e === w && a.a.createElement(F.a, {
						actionText: v.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: v.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: x,
						onConfirm: this.cancelForm,
						toggleModal: t,
						trackClick: j.a
					}), e === l.q && a.a.createElement(fe.a, {
						onSubmit: this.onSubmit,
						modalSeen: p,
						withOverlay: !0
					}), a.a.createElement(be.a, {
						editKey: i,
						hasValue: _e.a.hasContent(E)
					}))
				}
			}
			var Be = Object(ge.t)()(ze(Pe)),
				We = o("./src/reddit/components/RequestPendingBanner/index.tsx"),
				Le = o("./src/reddit/models/User/index.ts"),
				Ne = o("./src/reddit/selectors/experiments/commentBox.ts"),
				He = o("./src/reddit/selectors/subreddit.ts");
			const Ue = Object(c.c)({
					activeModalId: Ce.a,
					contributorRequestPending: e => Object(He.g)(e, f.e.Comment),
					isCommentBoxDesignEnabled: Ne.a,
					userName: e => e.user.account ? Object(Le.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					hasError: ve.v,
					errorMsgs: ve.L,
					draft: ve.i,
					disableAutofocus: ve.f,
					showContributorRequestFlow: e => Object(He.r)(e, f.e.Comment)
				}),
				qe = Object(i.b)(Ue, (e, t) => ({
					onMount: () => e(d.a(t.draftKey)),
					onCancel: () => {
						t.draftType === pe.c.edit ? e(l.c({
							commentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						})) : e(l.a({
							parentCommentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						}))
					},
					onUnmount: o => e(l.j(t.draftKey, o)),
					onFocus: s()(() => e((e, o) => Object(u.e)(o(), t.draftType))),
					onFocusChanged: o => e(l.e({
						hasFocus: o,
						draftKey: t.draftKey
					})),
					onSwitchMode: (t, o, n) => e(l.b(t, o, n)),
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
			t.default = qe(class extends a.a.Component {
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
					if (!e.draft) return null;
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
					return e.contributorRequestPending ? a.a.createElement(We.a, null) : e.showContributorRequestFlow ? a.a.createElement(C, null) : e.draft.commentMode === me.h.RICH_TEXT ? a.a.createElement(Be, o) : a.a.createElement(m.b, o)
				}
			})
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
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/actions/modal.ts"),
				d = o("./src/reddit/components/TrackingHelper/index.tsx"),
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
					return r.a.createElement(u.q, {
						priority: e === h.b.ContentGate ? u.b.Secondary : u.b.Primary,
						className: Object(i.a)(t ? null : f.a.RequestButton, o),
						onClick: this.onRequest,
						size: t ? u.c.S : u.c.M,
						disabled: s
					}, s ? n.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : _()[e])
				}
			}
			t.default = Object(a.b)(null, e => ({
				openContributorRequestModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(d.c)(g))
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
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./src/reddit/components/FlairPickerTitle/index.tsx"),
				c = o("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				d = o("./src/reddit/components/RichTextJson/elements.tsx"),
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
				v = x.a.div("Container", g.a),
				E = x.a.table("Table", g.a),
				j = x.a.p("P", g.a);
			class k extends r.a.Component {
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
						a = n.fbt._("strikethrough", null, {
							hk: "UcaLr"
						}),
						u = n.fbt._("spoilers", null, {
							hk: "372XyC"
						});
					return r.a.createElement(c.a, null, r.a.createElement(i.a, {
						onClosePressed: this.props.closeModal,
						title: n.fbt._("Markdown Help", null, {
							hk: "w08E2"
						})
					}), r.a.createElement(v, null, r.a.createElement(E, {
						className: g.a.helpTable
					}, r.a.createElement("tr", null, r.a.createElement(d.s, null, r.a.createElement(d.j, null, n.fbt._("Type this:", null, {
						hk: "VDjXQ"
					}))), r.a.createElement(d.s, null, r.a.createElement(d.j, null, n.fbt._("to get this:", null, {
						hk: "4zlZi9"
					})))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "*", e, "*")), r.a.createElement(d.p, null, r.a.createElement(d.f, null, e))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "**", t, "**")), r.a.createElement(d.p, null, r.a.createElement(d.b, null, t))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "[reddit!](https://reddit.com)")), r.a.createElement(d.p, null, r.a.createElement(d.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "* ", o, " 1"), r.a.createElement(d.j, null, "* ", o, " 2"), r.a.createElement(d.j, null, "* ", o, " 3")), r.a.createElement(d.p, null, r.a.createElement(d.v, null, r.a.createElement(d.g, null, o, " 1"), r.a.createElement(d.g, null, o, " 2"), r.a.createElement(d.g, null, o, " 3")))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "> ", s)), r.a.createElement(d.p, null, r.a.createElement(d.c, null, s))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "~~", a, "~~")), r.a.createElement(d.p, null, r.a.createElement(d.d, null, a))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, n.fbt._("super^script", null, {
						hk: "2WteOp"
					}))), r.a.createElement(d.p, null, n.fbt._("super{=script}", [n.fbt._param("=script", r.a.createElement(d.m, null, n.fbt._("script", null, {
						hk: "4a2qMi"
					})))], {
						hk: "1VvC4z"
					}))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, `>!${u}!<`)), r.a.createElement(d.p, null, r.a.createElement(l.a, null, u)))), r.a.createElement(j, null, n.fbt._("Check the {=commenting wiki page} for more help", [n.fbt._param("=commenting wiki page", r.a.createElement(d.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, n.fbt._("commenting wiki page", null, {
						hk: "25UBE"
					})))], {
						hk: "1J9oBy"
					}))), r.a.createElement(C, null, r.a.createElement(f.a, null, r.a.createElement(h.i, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const w = Object(a.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(y))
			}))(k);
			t.a = Object(m.a)(Object(u.c)(w))
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
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/reddit/actions/postCreation/general.ts"),
				d = o("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
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
				v = o("./src/lib/lessComponent.tsx");
			const E = v.a.wrapped(f.a, "LoadingIcon", C.a),
				j = ({
					isFilled: e,
					...t
				}) => r.a.createElement(E, t),
				k = v.a.span("ModeDescription", C.a),
				w = v.a.div("ModeWrapper", C.a),
				O = v.a.wrapped(d.a, "MarkdownHelpButton", C.a),
				T = v.a.div("Toolbar", C.a),
				F = Object(i.c)({
					activeModalId: g.a,
					isConverting: e => Object(x.a)(e)
				}),
				R = Object(a.b)(F, (e, t) => ({
					onChange: o => {
						e(Object(c.c)(o)), t.onChange && t.onChange(o)
					},
					helpModalToggled: () => e(Object(c.x)(u.b)),
					switchToRTEModalToggled: () => e(Object(c.x)(m.a.SWITCH_TO_RTE_MODAL_ID))
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
							metaKey: o,
							keyCode: n
						} = e;
						(t || o) && n === h.a.Enter && this.props.onSubmit()
					}, this.handleSwitchModeClick = () => {
						this.props.value ? this.props.switchToRTEModalToggled() : this.props.onSwitchEditorMode(_.h.RICH_TEXT, this.props.value)
					}, this.handleSwitchToRTEConfirm = () => {
						this.props.switchToRTEModalToggled(), this.props.onSwitchEditorMode(_.h.RICH_TEXT, this.props.value)
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
						value: a
					} = this.props, {
						isFocused: i
					} = this.state;
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement(l.a, {
						className: s,
						isFocused: i
					}, r.a.createElement(T, null, r.a.createElement(w, null, r.a.createElement(k, null, n.fbt._("Markdown", null, {
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
						placeholder: o,
						value: a
					})), this.props.activeModalId === u.b && r.a.createElement(u.a, null), this.props.activeModalId === m.a.SWITCH_TO_RTE_MODAL_ID && r.a.createElement(m.b, {
						modalId: m.a.SWITCH_TO_RTE_MODAL_ID,
						onCancel: this.props.switchToRTEModalToggled,
						onConfirm: this.handleSwitchToRTEConfirm
					}))
				}
			}
			const D = r.a.memo(({
				isConverting: e,
				onClick: t
			}) => {
				const o = n.fbt._("Switch to Fancy Pants Editor", null, {
					hk: "1AKY7t"
				});
				return r.a.createElement(b.q, {
					priority: b.b.Plain,
					size: b.c.XS,
					onClick: t,
					Icon: e ? j : void 0,
					text: o
				})
			});
			t.a = R(S)
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
				a = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = o("./src/reddit/constants/keycodes.ts"),
				c = o("./src/reddit/controls/Button/index.tsx"),
				d = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = o("./src/reddit/controls/TextButton/index.tsx"),
				u = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = o("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = o.n(m),
				h = o("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(c.i, "PrimaryButton", p.a),
				f = h.a.wrapped(a.o, "ModalText", p.a);
			class _ extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === i.a.Escape && this.props.onClose()
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
					return s.a.createElement(a.d, null, s.a.createElement(a.h, null, s.a.createElement(u.a, null, s.a.createElement(a.p, null, this.props.titleText), s.a.createElement(l.a, {
						onClick: this.props.onClose
					}, s.a.createElement(a.b, null)))), s.a.createElement(a.k, null, s.a.createElement(f, null, this.props.bodyText)), s.a.createElement(a.f, null, s.a.createElement(a.a, {
						onClick: this.props.onSecondaryAction
					}, t ? s.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), s.a.createElement(b, {
						onClick: this.props.onPrimaryAction
					}, e ? s.a.createElement(d.a, {
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
				a = o.n(r),
				i = o("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			! function(e) {
				e.LOAD_DRAFT_MODAL_ID = "POST_CREATION__LOAD_DRAFT_MODAL_ID", e.MAX_DRAFTS_MODAL_ID = "POST_CREATION__MAX_DRAFTS_MODAL_ID", e.SWITCH_TO_RTE_MODAL_ID = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID"
			}(n || (n = {}));
			const c = {
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
				d = {
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
					[n.LOAD_DRAFT_MODAL_ID]: c,
					[n.MAX_DRAFTS_MODAL_ID]: d,
					[n.SWITCH_TO_RTE_MODAL_ID]: l
				};
			class m extends a.a.PureComponent {
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
					return a.a.createElement(i.a, {
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
				a = o("./node_modules/react/index.js"),
				i = o.n(a),
				c = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/react-router-redux/es/index.js"),
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
				v = o("./src/lib/memoizeByReference/index.ts"),
				E = o("./src/reddit/components/RichTextEditor/media/helpers.ts");
			const j = Object(v.a)((e, t) => {
				const o = e.name,
					{
						allowedPostTypes: s
					} = e,
					r = Object(E.g)(t),
					a = ((e, t, o) => {
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
				return a ? [a] : (e => {
					const t = [];
					return e.image > C.Y && t.push(n.fbt._("Post may not contain more that 20 images", null, {
						hk: "1Szc36"
					})), e.video + e.gifvideo > C.bb && t.push(n.fbt._("Post may not contain more that 5 videos", null, {
						hk: "2WhZ8k"
					})), t
				})(r)
			});
			var k = o("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				w = o("./src/reddit/components/RichTextEditor/index.tsx"),
				O = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				T = o("./src/reddit/contexts/PageLayer/index.tsx"),
				F = o("./src/reddit/controls/ErrorText/index.tsx"),
				R = o("./src/reddit/helpers/richTextEditor/index.ts"),
				S = o("./src/reddit/selectors/user.ts"),
				D = o("./src/reddit/controls/Button/index.tsx"),
				M = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				A = o("./src/reddit/components/PostEditForm/index.m.less"),
				I = o.n(A),
				z = o("./src/lib/lessComponent.tsx");
			const P = z.a.div("BottomRow", I.a),
				B = z.a.div("FormContent", I.a),
				W = z.a.wrapped(D.i, "SubmitButton", I.a),
				L = z.a.wrapped(M.a, "LoadingIcon", I.a),
				N = Object(T.t)(),
				H = Object(l.c)({
					destSubreddit: _.h,
					editorMode: _.i,
					errorMessages: _.j,
					hasError: _.k,
					markdownDraft: _.l,
					pending: _.Y,
					postRequirements: _.nb,
					rteDraft: _.m,
					subreddit: T.q,
					uploads: e => e.uploads,
					user: S.j,
					isCommentsPage: f.f
				}),
				U = Object(c.b)(H, (e, t) => ({
					onCancel: t => e(g.b(t)),
					onSubmitDraft: t => e(g.c(t)),
					onSuccess: t => e(Object(d.b)(t)),
					onToggleEditorMode: (t, o) => e(x.d(h.g.POST_EDITING, t, o))
				}));
			class q extends i.a.Component {
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
					}, this.haveMarkdownPostDraft = () => !!(this.state.markdownBody || "").trim(), this.haveDraft = () => this.props.editorMode === h.h.RICH_TEXT ? this.haveRichPostDraft() : this.haveMarkdownPostDraft(), this.onSubmit = () => {
						const e = this.buildPostSubmission();
						e && this.props.onSubmitDraft(e)
					}, this.onToggleEditorMode = async (e, t) => {
						this.setState({
							markdownPostDraftChanged: !1,
							richtextPostDraftChanged: !1
						}), await this.props.onToggleEditorMode(e, t), e === h.h.RICH_TEXT ? this.rteRef && this.rteRef.focus() : this.markdownEditorRef && this.markdownEditorRef.focus()
					}, this.getMediaValidationErrors = () => {
						const {
							editorMode: e,
							destSubreddit: t
						} = this.props, {
							rteState: o
						} = this.state;
						return o.isBound && e === h.h.RICH_TEXT ? j(t, o.editorState.getCurrentContent()) : []
					}, this.getTextPostContent = () => {
						const {
							editorMode: e,
							uploads: t
						} = this.props, {
							markdownBody: o,
							rteState: n
						} = this.state;
						return e === h.h.RICH_TEXT ? O.a.toRichTextJSON(n, t) : {
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
					return O.a.hasContent(e)
				}
				hasChanged() {
					const {
						editorMode: e
					} = this.props, {
						markdownPostDraftChanged: t,
						richtextPostDraftChanged: o
					} = this.state;
					return e === h.h.RICH_TEXT ? !!o : e === h.h.MARKDOWN && !!t
				}
				render() {
					const {
						editorMode: e,
						errorMessages: t,
						hasError: o,
						isCommentsPage: s,
						pending: a,
						post: c,
						postRequirements: d,
						uploads: l
					} = this.props, {
						markdownBody: p,
						markdownPostDraftChanged: f,
						richtextPostDraftChanged: _,
						rteState: g
					} = this.state, x = d && d.bodyRestrictionPolicy === b.a.Required ? n.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : n.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), C = this.getMediaValidationErrors(), v = [...t, ...C];
					o && !v.length && v.push(n.fbt._("Something went wrong. Just don't panic.", null, {
						hk: "FsWrq"
					}));
					const E = !O.a.isAllMediaUploaded(g, l);
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(B, null, e === h.h.RICH_TEXT ? i.a.createElement(w.a, {
						allowMediaUploads: !0,
						className: Object(u.a)(I.a.Editor, {
							[I.a.isPending]: !!a
						}),
						destSubreddit: this.props.destSubreddit,
						editorType: R.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: g,
						onChange: this.onRichPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						readOnly: !!a,
						rteRef: this.setRteRef,
						trackToolbarClick: r.a,
						placeholderText: x
					}) : i.a.createElement(k.a, {
						initialHeight: this.state.editorHeight,
						instanceRef: this.setMarkdownEditorRef,
						disabled: !!a,
						value: p,
						onChange: this.onMarkdownPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: x
					}), i.a.createElement(P, null, i.a.createElement(D.o, {
						disabled: !!a,
						onClick: this.cancelEdit
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement(W, {
						disabled: !!a || !!C.length || !this.hasChanged() || E,
						onClick: this.onSubmit
					}, a ? i.a.createElement(L, {
						sizePx: 10
					}) : n.fbt._("save", null, {
						hk: "1RZ7vw"
					}))), i.a.createElement(F.a, {
						className: I.a.errorMessages,
						messages: v
					}), i.a.createElement(y.a, {
						editKey: c.id,
						hasValue: !(!f && !_),
						isPostEdit: !0
					})), i.a.createElement(m.a, {
						postId: c.id,
						isCommentsPage: !!s
					}))
				}
			}
			t.default = N(U(q))
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
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = o("./src/reddit/models/SubredditRestrictions/index.ts"),
				u = o("./src/reddit/selectors/platform.ts"),
				m = o("./src/reddit/selectors/subreddit.ts"),
				p = o("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = o.n(p);
			const b = c.a.wrapped(d.a, "Banner", h.a),
				f = Object(a.b)(() => Object(i.c)({
					restrictions: m.p,
					subreddit: u.e
				}));
			t.a = f(({
				restrictions: e,
				subreddit: t
			}) => {
				if (!t) return null;
				const o = e === l.e.Comment ? l.a.Create : l.a.Draft;
				return r.a.createElement(b, {
					subtitle: r.a.createElement("span", {
						className: h.a.Subtitle
					}, n.fbt._("Your request to {restrictions} in {displayName} was sent and is pending. In the meantime, you can {action} a post and {=browse the community}", [n.fbt._param("restrictions", l.d[e]()), n.fbt._param("displayName", t.name), n.fbt._param("action", l.c[o]()), n.fbt._param("=browse the community", r.a.createElement("a", {
						href: `${t.url}`
					}, n.fbt._("browse the community", null, {
						hk: "3hwgAC"
					})))], {
						hk: "2CX6Q6"
					})),
					title: n.fbt._("Request to {restrictions} is pending...", [n.fbt._param("restrictions", l.d[e]())], {
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
				a = o.n(r),
				i = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				d = o.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = ({
					className: e,
					children: t,
					editorWrapperRef: o,
					initialHeight: n
				}) => s.a.createElement("div", {
					className: Object(i.a)(d.a.editorWrapper, e),
					style: n ? {
						height: n
					} : void 0,
					ref: o
				}, t),
				m = ({
					isFullHeight: e,
					textAreaRef: t,
					...o
				}) => s.a.createElement(a.a, l({
					className: Object(i.a)(d.a.textareaAutosize, {
						[d.a.mIsFullHeight]: e
					}),
					innerRef: t
				}, o));
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
						isResized: a
					} = this.state;
					return s.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, s.a.createElement(m, l({}, r, {
						children: !0,
						isFullHeight: !!a,
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
				smile: "kZEfwKUF_b6N-MPjQuYFA",
				addEmojiTooltip: "_2T2CdONtWI3ekF8Dpfq0Tj"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/GifButton/index.m.less": function(e, t, o) {
			e.exports = {
				rainbow: "_3o1yVY7yuN_Xzqg5RaAFp8",
				rainbowFade: "_3XlVOBsaD4vQFIAVPEpLFD"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/classNames/index.ts"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				c = o("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = o("./src/reddit/selectors/user.ts"),
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
			const f = Object(i.c)({
					currentUser: d.j,
					isNightMode: d.W,
					isPresenceUserPrefEnabled: d.ib,
					shouldHideNSFW: d.C
				}),
				_ = Object(a.b)(f);
			t.a = _(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: o,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: a,
					...i
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(n.a)(h.a.currentUserIconWrapper, a)
				}, d ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, b({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), o && r.a.createElement(l.a, {
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
				a = o("./src/reddit/controls/Button/index.tsx"),
				i = o("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = o.n(i);
			t.a = s.a.memo(e => {
				const t = e.size || a.c.XS;
				return s.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[t], {
						[c.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[c.a.mDisabled]: e.disabled,
						[c.a.redditStyle]: e.redditStyle
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle()
				}, s.a.createElement("div", {
					className: c.a.toggleDisplay
				}))
			})
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "g", (function() {
				return m
			})), o.d(t, "k", (function() {
				return p
			})), o.d(t, "d", (function() {
				return h
			})), o.d(t, "j", (function() {
				return b
			})), o.d(t, "a", (function() {
				return f
			})), o.d(t, "f", (function() {
				return _
			})), o.d(t, "c", (function() {
				return g
			})), o.d(t, "i", (function() {
				return x
			})), o.d(t, "h", (function() {
				return y
			})), o.d(t, "e", (function() {
				return C
			})), o.d(t, "b", (function() {
				return v
			}));
			var n = o("./src/config.ts"),
				s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeApiRequest/index.ts"),
				a = o("./src/lib/omitHeaders/index.ts"),
				i = o("./src/reddit/constants/headers.ts"),
				c = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = o("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const m = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/save`),
					method: s.hb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: s.hb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: s.hb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: s.hb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: s.hb.POST,
					data: {
						id: t
					}
				}),
				_ = (e, t, o) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: s.hb.POST,
					data: {
						id: t,
						spam: o
					}
				}),
				g = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: s.hb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: s.hb.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: s.hb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t, o, a) => {
					let i = Object(c.a)(Object(u.a)(Object(l.a)(`${n.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return a && (i = Object(d.a)(i)), Object(r.a)(e, {
						data: o,
						endpoint: i,
						method: s.hb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				v = (e, t, o, n) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/distinguish/${o}`),
					method: s.hb.POST,
					data: {
						id: t,
						sticky: n
					}
				})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/makeApiRequest/index.ts"),
				r = o("./src/lib/omitHeaders/index.ts"),
				a = o("./src/reddit/constants/headers.ts"),
				i = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = o("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, o) => {
				const d = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.h.MARKDOWN ? d.richtext_json = o : d.markdown_text = o, Object(s.a)(Object(r.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: n.hb.POST,
					data: d
				})
			}
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return r
			})), o.d(t, "a", (function() {
				return a
			})), o.d(t, "b", (function() {
				return i
			}));
			var n = o("./src/telemetry/index.ts"),
				s = o("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(n.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...s.defaults(e),
					profile: s.profile(e),
					post: s.post(e, t),
					media: s.media(e, t),
					subreddit: s.subreddit(e),
					comment: s.comment(e, t)
				}),
				a = ({
					state: e,
					commentId: t
				}) => Object(n.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...s.defaults(e),
					profile: s.profile(e),
					post: s.post(e, t),
					media: s.media(e, t),
					subreddit: s.subreddit(e),
					comment: s.comment(e, t)
				}),
				i = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: s.user(t),
					subreddit: s.subreddit(t),
					post: s.post(t, e),
					actionInfo: s.actionInfo(t),
					app: s.app(t),
					referrer: s.referrer(t),
					session: s.session(t)
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return u
			})), o.d(t, "g", (function() {
				return m
			})), o.d(t, "b", (function() {
				return p
			})), o.d(t, "e", (function() {
				return h
			})), o.d(t, "a", (function() {
				return b
			})), o.d(t, "c", (function() {
				return f
			})), o.d(t, "d", (function() {
				return _
			}));
			var n = o("./src/reddit/constants/tracking.ts"),
				s = o("./src/reddit/helpers/trackers/userFlair.ts"),
				r = o("./src/reddit/models/PostDraft/index.ts"),
				a = o("./src/reddit/selectors/comments.ts"),
				i = o("./src/reddit/selectors/platform.ts"),
				c = o("./src/reddit/selectors/telemetry.ts"),
				d = o("./src/telemetry/index.ts");
			const l = e => {
					const t = Object(i.m)(e);
					return {
						source: "comment_composer",
						action: n.c.CLICK,
						...Object(c.defaults)(e),
						screen: Object(c.screen)(e),
						subreddit: Object(c.subreddit)(e),
						post: t ? Object(c.post)(e, t) : null,
						profile: Object(c.profile)(e)
					}
				},
				u = (e, t, o, n) => {
					const r = {
							commentId: n,
							commentsPageKey: o
						},
						i = n && Object(a.j)(e, r) || 0;
					return Object(d.a)({
						noun: "comment",
						...l(e),
						comment: n ? Object(c.comment)(e, n) : null,
						listing: Object(c.listing)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: Object(s.d)(e)
					})
				},
				m = (e, t, o, n) => {
					const s = l(e);
					return Object(d.a)({
						...s,
						actionInfo: {
							...s.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: n,
							postId: o
						}
					})
				},
				p = e => Object(d.a)({
					noun: "cancel",
					...l(e)
				}),
				h = (e, t) => {
					t === r.c.replyToPost && Object(d.a)({
						noun: "input",
						...l(e)
					})
				},
				b = (e, t) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.defaults)(t),
					screen: Object(c.screen)(t),
					subreddit: Object(c.subreddit)(t),
					post: Object(c.post)(t, e)
				}),
				f = e => Object(d.a)({
					noun: "edit",
					...l(e)
				}),
				_ = e => Object(d.a)({
					noun: "save_edit",
					...l(e)
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
					...n.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: n.subreddit(t)
				}),
				r = e => t => ({
					...n.defaults(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: n.subreddit(t)
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
					...n.defaults(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: n.subreddit(t)
				}),
				r = e => t => ({
					...n.defaults(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: n.subreddit(t)
				})
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
				return c
			}));
			var n = o("./node_modules/reselect/es/index.js"),
				s = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				a = o("./src/reddit/selectors/user.ts");
			const i = Object(n.a)(a.K, a.J, (e, t) => e || t),
				c = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: i,
					experimentName: s.A
				}), e => e === s.G.Enabled)
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return n
			})), o.d(t, "a", (function() {
				return s
			}));
			const n = (e, {
					commentId: t,
					commentsPageKey: o
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[o] && t in e.features.comments.collapsed[o]) return !!e.features.comments.collapsed[o][t];
					const n = e.features.comments.models[t];
					return !!n && ("computedCollapsed" in n ? !!n.computedCollapsed : n.collapsedBecauseCrowdControl ? !e.modModeEnabled : n.collapsed)
				},
				s = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const o = e.features.comments.models[t];
					return !(!o || !o.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RichTextEditor.8405fe5b214d8fa94a0c.js.map