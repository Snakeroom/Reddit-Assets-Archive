// https://www.redditstatic.com/desktop2x/RichTextEditor.42156d8b971fa0f9de5c.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RichTextEditor", "ContributorRequestButton"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, s) {
			var n, o, r;
			o = [t, e], void 0 === (r = "function" == typeof(n = function(e, t) {
				"use strict";
				var s, n, o = "function" == typeof Map ? new Map : (s = [], n = [], {
						has: function(e) {
							return s.indexOf(e) > -1
						},
						get: function(e) {
							return n[s.indexOf(e)]
						},
						set: function(e, t) {
							-1 === s.indexOf(e) && (s.push(e), n.push(t))
						},
						delete: function(e) {
							var t = s.indexOf(e);
							t > -1 && (s.splice(t, 1), n.splice(t, 1))
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
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
						var t, s = null,
							n = e.clientWidth,
							i = null,
							a = function() {
								e.clientWidth !== n && u()
							},
							d = function(t) {
								window.removeEventListener("resize", a, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", d, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(s) {
									e.style[s] = t[s]
								})), o.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", d, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", a, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", o.set(e, {
							destroy: d,
							update: u
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), s = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(s) && (s = 0), u()
					}

					function c(t) {
						var s = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = s, e.style.overflowY = t
					}

					function l() {
						var t = e.style.height,
							o = function(e) {
								for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
									node: e.parentNode,
									scrollTop: e.parentNode.scrollTop
								}), e = e.parentNode;
								return t
							}(e),
							r = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var i = e.scrollHeight + s;
						0 !== e.scrollHeight ? (e.style.height = i + "px", n = e.clientWidth, o.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), r && (document.documentElement.scrollTop = r)) : e.style.height = t
					}

					function u() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							s = window.getComputedStyle(e, null),
							n = "content-box" === s.boxSizing ? Math.round(parseFloat(s.height)) : e.offsetHeight;
						if (n !== t ? "hidden" === s.overflowY && (c("scroll"), l(), n = "content-box" === s.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== s.overflowY && (c("hidden"), l(), n = "content-box" === s.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), i !== n) {
							i = n;
							var o = r("autosize:resized");
							try {
								e.dispatchEvent(o)
							} catch (a) {}
						}
					}
				}

				function a(e) {
					var t = o.get(e);
					t && t.destroy()
				}

				function d(e) {
					var t = o.get(e);
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
			}) ? n.apply(t, o) : n) || (e.exports = r)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, s) {
				return ((s = window.getComputedStyle) ? s(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/line-height/lib/line-height.js": function(e, t, s) {
			var n = s("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = n(e, "line-height"),
					s = parseFloat(t, 10);
				if (t === s + "") {
					var o = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = n(e, "line-height"), s = parseFloat(t, 10), o ? e.style.lineHeight = o : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (s *= 4, s /= 3) : -1 !== t.indexOf("mm") ? (s *= 96, s /= 25.4) : -1 !== t.indexOf("cm") ? (s *= 96, s /= 2.54) : -1 !== t.indexOf("in") ? s *= 96 : -1 !== t.indexOf("pc") && (s *= 16), s = Math.round(s), "normal" === t) {
					var r = e.nodeName,
						i = document.createElement(r);
					i.innerHTML = "&nbsp;", "TEXTAREA" === r.toUpperCase() && i.setAttribute("rows", "1");
					var a = n(e, "font-size");
					i.style.fontSize = a, i.style.padding = "0px", i.style.border = "0px";
					var d = document.body;
					d.appendChild(i), s = i.offsetHeight, d.removeChild(i)
				}
				return s
			}
		},
		"./node_modules/linkify-it/index.js": function(e, t, s) {
			"use strict";

			function n(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(s) {
						e[s] = t[s]
					}))
				})), e
			}

			function o(e) {
				return Object.prototype.toString.call(e)
			}

			function r(e) {
				return "[object Function]" === o(e)
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
							var n = e.slice(t);
							return s.re.http || (s.re.http = new RegExp("^\\/\\/" + s.re.src_auth + s.re.src_host_port_strict + s.re.src_path, "i")), s.re.http.test(n) ? n.match(s.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, s) {
							var n = e.slice(t);
							return s.re.no_http || (s.re.no_http = new RegExp("^" + s.re.src_auth + "(?:localhost|(?:(?:" + s.re.src_domain + ")\\.)+" + s.re.src_domain_root + ")" + s.re.src_port + s.re.src_host_terminator + s.re.src_path, "i")), s.re.no_http.test(n) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : n.match(s.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, s) {
							var n = e.slice(t);
							return s.re.mailto || (s.re.mailto = new RegExp("^" + s.re.src_email_name + "@" + s.re.src_host_strict, "i")), s.re.mailto.test(n) ? n.match(s.re.mailto)[0].length : 0
						}
					}
				},
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = s("./node_modules/linkify-it/lib/re.js")(e.__opts__),
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
					var s = e.__schemas__[t];
					if (null !== s) {
						var n = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = n, "[object Object]" === o(s)) return ! function(e) {
							return "[object RegExp]" === o(e)
						}(s.validate) ? r(s.validate) ? n.validate = s.validate : l(t, s) : n.validate = function(e) {
							return function(t, s) {
								var n = t.slice(s);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(s.validate), void(r(s.normalize) ? n.normalize = s.normalize : s.normalize ? l(t, s) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === o(e)
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
				var u = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(i).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function m(e, t) {
				var s = e.__index__,
					n = e.__last_index__,
					o = e.__text_cache__.slice(s, n);
				this.schema = e.__schema__.toLowerCase(), this.index = s + t, this.lastIndex = n + t, this.raw = o, this.text = o, this.url = o
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
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, d, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, s, n, o, r, i, a, d;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (o = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || d < this.__index__) && null !== (s = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (r = s.index + s[1].length, (this.__index__ < 0 || r < this.__index__) && (this.__schema__ = "", this.__index__ = r, this.__last_index__ = s.index + s[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (r = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || r < this.__index__ || r === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = r, this.__last_index__ = i)), this.__index__ >= 0
			}, h.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, h.prototype.testSchemaAt = function(e, t, s) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, s, this) : 0
			}, h.prototype.match = function(e) {
				var t = 0,
					s = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (s.push(p(this, t)), t = this.__last_index__);
				for (var n = t ? e.slice(t) : e; this.test(n);) s.push(p(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
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
		"./node_modules/lodash/_arrayReduceRight.js": function(e, t) {
			e.exports = function(e, t, s, n) {
				var o = null == e ? 0 : e.length;
				for (n && o && (s = e[--o]); o--;) s = t(s, e[o], o, e);
				return s
			}
		},
		"./node_modules/lodash/_baseEachRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseForOwnRight.js"),
				o = s("./node_modules/lodash/_createBaseEach.js")(n, !0);
			e.exports = o
		},
		"./node_modules/lodash/_baseExtremum.js": function(e, t, s) {
			var n = s("./node_modules/lodash/isSymbol.js");
			e.exports = function(e, t, s) {
				for (var o = -1, r = e.length; ++o < r;) {
					var i = e[o],
						a = t(i);
					if (null != a && (void 0 === d ? a == a && !n(a) : s(a, d))) var d = a,
						c = i
				}
				return c
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var s = [];
				return n(e, (function(e, n, o) {
					t(e, n, o) && s.push(e)
				})), s
			}
		},
		"./node_modules/lodash/_baseForOwnRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseForRight.js"),
				o = s("./node_modules/lodash/keys.js");
			e.exports = function(e, t) {
				return e && n(e, t, o)
			}
		},
		"./node_modules/lodash/_baseForRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createBaseFor.js")(!0);
			e.exports = n
		},
		"./node_modules/lodash/_baseGt.js": function(e, t) {
			e.exports = function(e, t) {
				return e > t
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var s = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, o, r) {
				for (var i = -1, a = n(s((t - e) / (o || 1)), 0), d = Array(a); a--;) d[r ? a : ++i] = e, e += o;
				return d
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, t, s, o) {
				for (var r = e.length, i = o ? r : -1;
					(o ? i-- : ++i < r) && t(e[i], i, e););
				return s ? n(e, o ? 0 : i, o ? i + 1 : r) : n(e, o ? i + 1 : 0, o ? r : i)
			}
		},
		"./node_modules/lodash/_charsEndIndex.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, t) {
				for (var s = e.length; s-- && n(t, e[s], 0) > -1;);
				return s
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRange.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, s, i) {
					return i && "number" != typeof i && o(t, s, i) && (s = i = void 0), t = r(t), void 0 === s ? (s = t, t = 0) : s = r(s), i = void 0 === i ? t < s ? 1 : -1 : r(i), n(t, s, i, e)
				}
			}
		},
		"./node_modules/lodash/_escapeHtmlChar.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_basePropertyOf.js")({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			});
			e.exports = n
		},
		"./node_modules/lodash/chunk.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				i = Math.ceil,
				a = Math.max;
			e.exports = function(e, t, s) {
				t = (s ? o(e, t, s) : void 0 === t) ? 1 : a(r(t), 0);
				var d = null == e ? 0 : e.length;
				if (!d || t < 1) return [];
				for (var c = 0, l = 0, u = Array(i(d / t)); c < d;) u[l++] = n(e, c, c += t);
				return u
			}
		},
		"./node_modules/lodash/dropRightWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? o(e, n(t, 3), !0, !0) : []
			}
		},
		"./node_modules/lodash/escape.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_escapeHtmlChar.js"),
				o = s("./node_modules/lodash/toString.js"),
				r = /[&<>"']/g,
				i = RegExp(r.source);
			e.exports = function(e) {
				return (e = o(e)) && i.test(e) ? e.replace(r, n) : e
			}
		},
		"./node_modules/lodash/filter.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayFilter.js"),
				o = s("./node_modules/lodash/_baseFilter.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? n : o)(e, r(t, 3))
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				o = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(o(e, t), 1)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js"),
				o = s("./node_modules/lodash/isArrayLike.js"),
				r = s("./node_modules/lodash/isString.js"),
				i = s("./node_modules/lodash/toInteger.js"),
				a = s("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, s, c) {
				e = o(e) ? e : a(e), s = s && !c ? i(s) : 0;
				var l = e.length;
				return s < 0 && (s = d(l + s, 0)), r(e) ? s <= l && e.indexOf(t, s) > -1 : !!l && n(e, t, s) > -1
			}
		},
		"./node_modules/lodash/map.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayMap.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseMap.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? n : r)(e, o(t, 3))
			}
		},
		"./node_modules/lodash/maxBy.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseExtremum.js"),
				o = s("./node_modules/lodash/_baseGt.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return e && e.length ? n(e, r(t, 2), o) : void 0
			}
		},
		"./node_modules/lodash/range.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/reduceRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduceRight.js"),
				o = s("./node_modules/lodash/_baseEachRight.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = a(e) ? n : i,
					c = arguments.length < 3;
				return d(e, r(t, 4), s, c, o)
			}
		},
		"./node_modules/lodash/takeWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? o(e, n(t, 3)) : []
			}
		},
		"./node_modules/lodash/trimEnd.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseToString.js"),
				o = s("./node_modules/lodash/_castSlice.js"),
				r = s("./node_modules/lodash/_charsEndIndex.js"),
				i = s("./node_modules/lodash/_stringToArray.js"),
				a = s("./node_modules/lodash/toString.js"),
				d = s("./node_modules/lodash/_trimmedEndIndex.js");
			e.exports = function(e, t, s) {
				if ((e = a(e)) && (s || void 0 === t)) return e.slice(0, d(e) + 1);
				if (!e || !(t = n(t))) return e;
				var c = i(e),
					l = r(c, i(t)) + 1;
				return o(c, 0, l).join("")
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, s) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n, o, r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				},
				i = function() {
					function e(e, t) {
						for (var s = 0; s < t.length; s++) {
							var n = t[s];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, s, n) {
						return s && e(t.prototype, s), n && e(t, n), t
					}
				}(),
				a = u(s("./node_modules/react/index.js")),
				d = u(s("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				c = u(s("./node_modules/autosize/dist/autosize.js")),
				l = u(s("./node_modules/line-height/lib/line-height.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function m(e, t) {
				var s = {};
				for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (s[n] = e[n]);
				return s
			}

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var h = (o = n = function(e) {
				function t() {
					var e, s, n;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
					return s = n = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.state = {
						lineHeight: null
					}, n.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), n.textarea.dispatchEvent(t)
					}, n.getValue = function(e) {
						var t = e.valueLink,
							s = e.value;
						return t ? t.value : s
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
							s = (t.onResize, t.maxRows),
							o = (t.onChange, t.style),
							i = (t.innerRef, m(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							a = e.state.lineHeight,
							d = e.saveDOMNodeRef,
							c = s && a ? a * s : null;
						return r({}, i, {
							saveDOMNodeRef: d,
							style: c ? r({}, o, {
								maxHeight: c
							}) : o,
							onChange: n.onChange
						})
					}, p(n, s)
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
							s = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, c.default)(e.textarea)
						}))) : (0, c.default)(this.textarea), s && this.textarea.addEventListener("autosize:resized", this.props.onResize)
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
							s = e.saveDOMNodeRef,
							n = m(e, ["children", "saveDOMNodeRef"]);
						return a.default.createElement("textarea", r({}, n, {
							ref: s
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
			}, o);
			t.default = h, h.propTypes = {
				rows: d.default.number,
				maxRows: d.default.number,
				onResize: d.default.func,
				innerRef: d.default.func
			}
		},
		"./node_modules/react-autosize-textarea/lib/index.js": function(e, t, s) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n, o = s("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				r = (n = o) && n.__esModule ? n : {
					default: n
				};
			t.default = r.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function r() {}
			r.resetWarningCache = o, e.exports = function() {
				function e(e, t, s, o, r, i) {
					if (i !== n) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var s = {
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
					resetWarningCache: o
				};
				return s.PropTypes = s, s
			}
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/index.js": function(e, t, s) {
			e.exports = s("./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, s) {
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
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return _
			}));
			var n = s("./node_modules/linkify-it/index.js"),
				o = s.n(n),
				r = s("./node_modules/tlds/index.js"),
				i = s.n(r),
				a = s("./src/lib/linkMatchers/customLinks.ts");
			s("./node_modules/lodash/values.js");
			const d = ["//", "ftp:", "http:", "https:", "mailto:"],
				c = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, d),
				l = o()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				u = o()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				m = c(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				p = c(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				h = o()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				b = (o()().tlds(i.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config), l.normalize);
			l.normalize = e => {
				b.call(l, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const f = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				_ = e => {
					const t = l.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const s = t[0];
						return s.lastIndex === e.length ? s : ((e, t) => {
							const s = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(s)) return t.lastIndex += s.length, t.url += s, t
						})(e, s)
					}
				}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeRequest/index.ts"),
				r = s("./src/config.ts"),
				i = s("./src/reddit/endpoints/governance/requester.ts");
			var a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/economics/me/constants.ts");
			const c = Object(a.a)(d.a),
				l = Object(a.a)(d.b),
				u = Object(a.a)(d.c),
				m = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					const a = e && e.includeMemberships || !1,
						d = e && e.forceFetch || !1,
						l = s();
					if (!l.economics.me.fetched || a && !l.economics.me.data.specialMemberships || d) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(o(), a);
						if (e.ok) {
							const s = e.body;
							a && !s.specialMemberships && (s.specialMemberships = {}), t(c(s))
						}
					}
				}, p = () => async (e, t) => {
					const s = t(),
						r = s.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!s.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							s = await Object(o.b)({
								endpoint: t,
								method: n.nb.GET
							});
						s.ok && s.body && e(u(s.body))
					}
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return z
			})), s.d(t, "a", (function() {
				return I
			})), s.d(t, "c", (function() {
				return B
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				u = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				p = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
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
					method: a.nb.POST,
					data: _(t)
				}).then(m.b),
				x = s("./src/reddit/helpers/overlay/index.ts"),
				E = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				y = s("./src/reddit/helpers/trackers/lightbox.ts"),
				C = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/helpers/trackers/postComposer.ts"),
				k = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/models/PostCreationForm/index.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				F = s("./src/reddit/actions/postCreation/constants.ts"),
				R = s("./src/reddit/actions/postCreation/general.ts");
			const O = Object(o.a)(F.l),
				S = Object(o.a)(F.m),
				M = Object(o.a)(F.x),
				D = Object(o.a)(F.I),
				z = Object(o.a)(F.J),
				I = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = n(),
						a = Object(T.F)(i, {
							postId: e
						});
					t ? (s(Object(x.a)(a.permalink)), Object(y.e)(e, "edit")(i)) : Object(C.h)(e, "edit")(i);
					const {
						media: d
					} = a;
					if (!d) return;
					let c, l = w.i.RICH_TEXT,
						u = "";
					d.type === k.o.TEXT ? (l = w.i.MARKDOWN, u = d.content) : d.type === k.o.RTJSON && (u = (l = d.rteMode || w.i.RICH_TEXT) === w.i.MARKDOWN ? d.markdownContent : d.richtextContent, c = d.mediaMetadata || void 0), s(D({
						editorMode: l,
						mediaMetadata: c,
						postContent: u,
						postId: e
					}))
				}, B = e => async (t, s, o) => {
					let {
						apiContext: a
					} = o;
					const {
						post: d
					} = e, c = !d.media || "rtjson" !== d.media.type && "text" !== d.media.type ? "" : d.media.rteMode;
					v.F(s(), Object(R.o)(c)), t(M(d.id));
					const l = await g(a(), e),
						u = !1 === l.body.success;
					if (t(O(d.id)), l.ok && !u) {
						t(Object(i.f)({
							kind: j.b.SuccessCommunity,
							text: n.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(z(d.id));
						const e = Object(E.a)(l.body);
						t(Object(r.Q)({
							[d.id]: e
						}))
					} else t(S(l.error))
				}
		},
		"./src/reddit/actions/postCreation/postGuidance.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return _
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				i = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/PostGuidanceValidation.json"),
				c = (e, t) => Object(a.a)(e, {
					...d,
					variables: t
				}).then(e => {
					var t, s;
					if (e.ok) {
						const n = null === (s = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === s ? void 0 : s.validatePostGuidanceRules;
						return {
							...e,
							body: {
								data: {
									...n || {}
								}
							}
						}
					}
					return e
				}),
				l = s("./src/reddit/endpoints/subreddit/about.ts"),
				u = s("./src/reddit/models/PostCreationForm/index.ts"),
				m = s("./src/reddit/selectors/postCreations.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/actions/postCreation/constants.ts");
			const b = Object(o.a)(h.D),
				f = e => async (t, s, o) => {
					let {
						gqlContext: a
					} = o;
					const d = s(),
						h = Object(i.u)(d, {
							pageLayer: e
						});
					if (!h) return;
					let f = Object(p.I)(s(), h.name);
					if (!f) {
						const e = await Object(l.a)(a(), h.name, !1);
						if (e.ok) {
							f = e.body.data.subreddit.id
						}
						if (!f) return
					}
					const _ = Object(m.q)(d, {
							field: n.Bb.TITLE
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
				}, _ = (e, t, s) => async (n, o, r) => {
					let {
						gqlContext: i
					} = r;
					const a = await c(i(), {
						input: {
							subredditId: e,
							postTitle: t,
							postBody: s
						}
					});
					if (a.ok) {
						const e = a.body;
						n(b(null == e ? void 0 : e.data))
					}
				}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less": function(e, t, s) {
			e.exports = {
				breakout: "_1VBLErIxAjOke05q8yLOyf"
			}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
				a = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t) => 21 * e + 33 + (t ? 10 : 0);
			t.a = e => {
				let {
					breakOut: t,
					depth: s,
					isEditing: n,
					...i
				} = e;
				return o.a.createElement("div", d({
					className: Object(r.a)({
						[a.a.breakout]: t
					}),
					style: {
						left: c(s, n)
					}
				}, i))
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommentCreation/FormFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = s("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				l = s.n(c);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = i.a.wrapped(d.a, "LoadingIcon", l.a), p = i.a.wrapped(a.t, "CancelButton", l.a), h = e => e.preventDefault();
			t.a = e => {
				let {
					pending: t,
					cancelButtonEnabled: s = !0,
					children: n,
					className: i,
					submitButtonText: d,
					canSubmit: c,
					onSubmit: b,
					onCancel: f
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(l.a.FormFooterWrapper, i, {
						[l.a.pending]: t
					})
				}, o.a.createElement("div", {
					className: l.a.ButtonWrapper
				}, o.a.createElement(a.t, {
					className: l.a.SubmitButton,
					size: a.d.XS,
					type: "submit",
					disabled: !c,
					onClick: e => {
						b && b(e)
					},
					onMouseDown: h
				}, t ? o.a.createElement(m, {
					sizePx: 10
				}) : d), s && o.a.createElement(p, {
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
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				MarkdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				markdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				Button: "_1Q2Vq3gesOWZA73NbspEiQ",
				button: "_1Q2Vq3gesOWZA73NbspEiQ"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return be
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/debounce.js"),
				r = s.n(o),
				i = s("./node_modules/lodash/noop.js"),
				a = s.n(i),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./node_modules/react-dom/index.js"),
				u = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/actions/comment/authoring.ts"),
				h = s("./src/reddit/components/AuthorLink/index.tsx"),
				b = s("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				f = s("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				_ = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				g = s("./src/reddit/components/MarkdownHelp/index.tsx"),
				x = s("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				E = s("./src/reddit/controls/ErrorText/index.tsx"),
				y = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = s("./src/reddit/icons/svgs/Help/index.tsx"),
				v = s("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				k = s("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				w = s("./src/lib/fastdom/index.ts"),
				j = s("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				T = s.n(j),
				F = s("./src/lib/lessComponent.tsx");
			const R = 310,
				O = F.a.div("Container", T.a);
			class S extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), s = t < R ? "compact" : "full";
						s !== this.state.toolbarType && w.a.write(() => {
							this.setState({
								toolbarType: s
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
					return c.a.createElement(O, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var M = s("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				D = s("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				z = s("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				I = s.n(z),
				B = s("./src/reddit/controls/Button/index.tsx");
			const A = F.a.wrapped(y.a, "LoadingIcon", I.a),
				P = e => {
					let {
						isFilled: t,
						...s
					} = e;
					return c.a.createElement(A, s)
				},
				L = F.a.div("Wrapper", I.a),
				W = F.a.wrapped(M.a, "MarkdownModeIcon", I.a),
				N = e => {
					let {
						isFilled: t,
						...s
					} = e;
					return c.a.createElement(W, s)
				};
			var H = c.a.memo((function(e) {
					const t = n.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return c.a.createElement(L, null, c.a.createElement(B.t, {
						priority: B.c.Plain,
						size: B.d.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? P : N
					}, c.a.createElement(D.a, {
						text: t
					})))
				})),
				U = s("./src/lib/classNames/index.ts"),
				q = s("./src/reddit/constants/keycodes.ts"),
				G = s("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				K = s("./src/realtime/GQLSubscription/async.tsx"),
				V = s("./src/reddit/components/UsersCountIndicator/constants.ts"),
				X = s("./src/reddit/constants/componentSizes.ts"),
				Z = s("./src/reddit/constants/componentTestIds.ts"),
				J = s("./src/reddit/selectors/activeModalId.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/editorContent.ts"),
				$ = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				ee = s("./src/reddit/actions/modal.ts"),
				te = s("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				se = s("./src/reddit/models/PostCreationForm/index.ts"),
				ne = s("./src/reddit/models/PostDraft/index.ts"),
				oe = s("./src/reddit/models/User/index.ts"),
				re = s("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				ie = s.n(re);
			const ae = F.a.button("SwitchModeButton", ie.a),
				de = F.a.wrapped(y.a, "LoadingIcon", ie.a),
				ce = F.a.div("CommentHeader", ie.a),
				le = F.a.span("FormHeaderText", ie.a),
				ue = F.a.button("HelpButton", ie.a),
				me = F.a.wrapped(C.a, "HelpIcon", ie.a),
				pe = F.a.wrapped(te.a, "ResizableAutosizeTextarea", ie.a),
				he = F.a.wrapped(x.a, "CurrentUserIcon", ie.a),
				be = e => c.a.createElement(ue, {
					className: e.className,
					onClick: e.onClick
				}, c.a.createElement(me, null)),
				fe = 8,
				_e = 16,
				ge = Object(u.b)(() => Object(m.c)({
					activeModalId: J.a,
					userName: e => e.user.account ? Object(oe.e)(e.user.account) : "",
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
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < X.c,
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
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === ne.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onBlur = e => {
						(!e || e && e.relatedTarget !== this.switchModeBtn) && (this.textAreaRef && this.textAreaRef.blur(), this.props.onFocusChanged(!1))
					}, this.onFocus = () => {
						this.props.onFocus(), this.props.onFocusChanged(!0)
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: s,
							keyCode: n
						} = e;
						(t || s) && n === q.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: se.i.MARKDOWN,
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
						isTypingIndicatorsWriteTestEnabled: s
					} = e;
					s && (this.realtimeGQLVariables = {
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "USER_IS_TYPING_ON_POST",
								postID: t
							}
						}
					});
					const {
						draftType: o,
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
						cancelModalText: o === ne.c.edit ? n.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : n.fbt._("Are you sure that you want to discard your comment?", null, {
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
							hasError: s,
							pending: n
						} = this.props;
					t && !n && !s ? this.setState({
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
						cancelModalToggled: s,
						className: o,
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
						isTopLevelComment: T,
						isTypingIndicatorsWriteTestEnabled: F,
						onSwitchMode: R,
						userName: O
					} = this.props, {
						cancelModalText: M,
						showError: D,
						text: z,
						breakOut: I,
						wrapperHeight: B,
						isUserTyping: A
					} = this.state, P = Object(G.a)(l), L = d.draftType === ne.c.edit;
					return c.a.createElement("div", {
						"data-test-id": Z.b,
						className: Object(U.a)(ie.a.Wrapper, o, {
							[ie.a.isTopLevelComment]: T,
							[ie.a.mExpanded]: j,
							[ie.a.mRedesign]: w
						}),
						ref: this.setWrapperRef,
						style: {
							height: I ? B : void 0
						}
					}, F && A && c.a.createElement(K.a, {
						variables: this.realtimeGQLVariables,
						onData: a.a,
						queryKey: "userIsTypingOnPost"
					}), !w && T && O && c.a.createElement(ce, null, c.a.createElement(le, null, n.fbt._("Comment as {authorLink}", [n.fbt._param("authorLink", c.a.createElement(h.a, {
						author: O,
						isAuthorDeleted: !1
					}, O))], {
						hk: "4pMWAk"
					}))), c.a.createElement(v.a, {
						breakOut: I,
						depth: i,
						isEditing: L
					}, w && c.a.createElement("div", {
						className: ie.a.userIcon
					}, c.a.createElement(he, null)), c.a.createElement("div", {
						className: Object(U.a)(ie.a.FormWrapper, {
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
						placeholder: w ? n.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : n.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: z
					}), (!w || j) && c.a.createElement(k.a, {
						className: ie.a.FormFooter,
						cancelButtonEnabled: u !== ne.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: x,
						submitButtonText: C,
						canSubmit: this.userHasEnteredText()
					}, c.a.createElement(S, null, e => "compact" === e ? c.a.createElement(H, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => R(se.i.RICH_TEXT, z, l),
						isConverting: this.props.isConverting
					}) : c.a.createElement("div", null, c.a.createElement(ae, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => R(se.i.RICH_TEXT, z, l)
					}, n.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "ousUG"
					}), this.props.isConverting && c.a.createElement(de, {
						sizePx: 12
					})))), c.a.createElement(be, {
						onClick: this.props.helpModalToggled
					})))), D && Object(E.c)(m), e === P && c.a.createElement(_.a, {
						actionText: n.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: n.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: M,
						onConfirm: () => this.cancelForm(),
						toggleModal: s,
						trackClick: () => {}
					}), e === g.b && c.a.createElement(g.a, {
						withOverlay: !0
					}), e === p.t && c.a.createElement(f.a, {
						onSubmit: this.onSubmit,
						modalSeen: y,
						withOverlay: !0
					}), c.a.createElement(b.a, {
						editKey: l,
						hasValue: !!z
					}))
				}
			}
			t.b = ge(xe)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-router/esm/react-router.js");
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
		"./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less": function(e, t, s) {
			e.exports = {
				RequestBox: "_2dVm83ugs7xhdLU8UptoxO",
				requestBox: "_2dVm83ugs7xhdLU8UptoxO",
				commentIcon: "_3-cqJ5aJH2EZKxhqY43T9D",
				commentText: "_2o9LnZvm1HYNaUjzmMO8E5",
				requestButton: "_3OvdD2phTivi0gnXR8NPl-"
			}
		},
		"./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommentCreation/ToolbarSelector.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1XC-wMQsKPqfaPcfWQCZdW",
				container: "_1XC-wMQsKPqfaPcfWQCZdW"
			}
		},
		"./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/reddit/actions/comment/authoring.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/TextButton/index.tsx"),
				p = s("./src/reddit/constants/tracking.ts"),
				h = s("./src/reddit/selectors/telemetry.ts");
			const b = e => ({
					source: "toxicity_modal",
					...h.q(e),
					screen: h.eb(e),
					subreddit: h.nb(e)
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
			var E = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = Object(r.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(c.g)(d.t))
				},
				continue: () => {
					t.onSubmit()
				}
			}));
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: Object(i.a)()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(f(this.state.correlationId))
				}
				render() {
					return o.a.createElement(l.e, null, o.a.createElement(l.i, null, o.a.createElement(E.a, null, o.a.createElement(l.q, null, y._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), o.a.createElement(m.a, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.closeModal()
						}
					}, o.a.createElement(l.b, null)))), o.a.createElement(l.l, null, o.a.createElement(l.p, null, y._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), o.a.createElement(l.g, null, o.a.createElement(l.a, {
						onClick: () => {
							this.props.sendEvent(g(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, y._("Go back and edit", null, {
						hk: "3nGNI7"
					})), o.a.createElement(l.r, {
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
		"./src/reddit/components/CommentCreation/getCancelModalId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => `Comment-cancelModal__${e}`
		},
		"./src/reddit/components/CommentCreation/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/once.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/actions/comment/authoring.ts"),
				u = s("./src/reddit/actions/reCaptchaEnterprise.ts"),
				m = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/reddit/helpers/trackers/commentsPage.ts"),
				h = s("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				b = s("./src/lib/lessComponent.tsx"),
				f = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				g = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				x = s("./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less"),
				E = s.n(x);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = b.a.div("RequestBox", E.a);
			var v = () => i.a.createElement(C, null, i.a.createElement(_.a, {
					className: E.a.commentIcon
				}), i.a.createElement("div", {
					className: E.a.commentText
				}, y._("Only approved users can comment in this community.", null, {
					hk: "3oqccc"
				})), i.a.createElement(f.default, {
					className: E.a.requestButton,
					eventSource: g.b.Comment
				})),
				k = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./node_modules/lodash/noop.js"),
				j = s.n(w),
				T = s("./src/lib/classNames/index.ts"),
				F = s("./src/lib/fastdom/index.ts"),
				R = s("./src/lib/memoizeByReference/index.ts"),
				O = s("./src/reddit/components/AuthorLink/index.tsx"),
				S = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				M = s("./src/reddit/components/RichTextEditor/index.tsx"),
				D = s("./src/reddit/featureFlags/index.ts"),
				z = s("./src/reddit/components/CollapseIntoOverflow/index.tsx"),
				I = s("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				B = s("./src/reddit/helpers/richTextEditor/index.ts"),
				A = s("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				P = s("./src/reddit/icons/svgs/Smile/index.tsx"),
				L = s("./src/reddit/selectors/gold/enabledFeatures.ts"),
				W = s("./src/reddit/selectors/gold/powerups/index.ts"),
				N = s("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				H = s("./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less"),
				U = s.n(H);
			const q = Object(d.c)({
				emotes: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(L.a)(e, {
						subredditId: s
					})
				},
				subredditHasCustomEmojis: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(W.a)(e, {
						subredditId: s
					})
				}
			});
			var G = Object(a.b)(q)((function(e) {
					const {
						controlsState: t,
						emotes: s,
						onEmoteButtonClick: n,
						subredditHasCustomEmojis: o
					} = e, r = o ? k.fbt._("Add Emoji", null, {
						hk: "3EV4aU"
					}) : k.fbt._("Add Emote", null, {
						hk: "3dXLr8"
					});
					return i.a.createElement(N.a, {
						Icon: () => i.a.createElement(P.a, {
							className: U.a.smile
						}),
						tooltip: r,
						enabled: t.emote.isEnabled,
						onClick: n
					}, i.a.createElement("div", {
						className: Object(T.a)(U.a.emotes, {
							[U.a.emoteMask]: s.length > 1
						})
					}, s.map(e => i.a.createElement("img", {
						className: U.a.emote,
						key: e.id,
						src: e.emoji.path
					}))))
				})),
				K = s("./src/lib/constants/icons.ts");

			function V(e) {
				const {
					controlsState: t,
					onGifButtonClick: s
				} = e;
				return i.a.createElement(N.a, {
					iconName: K.a.gif_post,
					tooltip: k.fbt._("Add GIF", null, {
						hk: "3uH3vO"
					}),
					disabledTooltip: k.fbt._("Limit one media per comment", null, {
						hk: "4BKWLn"
					}),
					enabled: t.giphy.isEnabled,
					onClick: s
				})
			}
			var X = s("./src/reddit/selectors/comments.ts"),
				Z = s("./src/reddit/selectors/experiments/mediaInComments.ts"),
				J = s("./src/lib/constants/index.ts");

			function Q(e) {
				let {
					isImageUploadEnabled: t,
					isGifUploadEnabled: s
				} = e, n = [];
				return t && (n = Array.from(J.c)), s && (n = [...n, ...Array.from(J.a)]), n
			}
			var Y = s("./src/reddit/hooks/useTracking.ts"),
				$ = s("./src/reddit/selectors/experiments/imageComment.ts"),
				ee = s("./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less"),
				te = s.n(ee),
				se = s("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.tsx");
			const ne = b.a.div("SectionSpacer", te.a),
				oe = Object(d.a)(Z.b, X.C, L.c, D.d.spGiphy, (e, t, s, n) => e ? !!t || !!n : s);

			function re(e) {
				const {
					className: t,
					destSubreddit: s,
					editorKey: n,
					editorState: o,
					onChange: d,
					onEmoteButtonClick: c,
					onFilesSelect: l,
					onGifButtonClick: u,
					onOverflowMenuClick: m,
					readOnly: h,
					trackOnClick: b,
					onLinkButtonClick: f,
					userCanUseEmojis: _,
					userCanUseGifs: g
				} = e, x = Object(A.a)(o);
				h && Object(A.b)(x);
				const E = null == s ? void 0 : s.id,
					y = Object(a.e)(e => void 0 !== E && Object(L.b)(e, {
						subredditId: E
					})) && _,
					C = Object(a.e)(e => void 0 !== E && oe(e, {
						subredditId: E
					})) && g,
					v = Object(a.e)(e => Object($.d)(e, {
						subredditId: E
					})),
					w = Object(a.e)(e => Object($.b)(e, {
						subredditId: E
					})),
					j = v || w,
					T = Object(Y.a)(),
					F = Object(r.useCallback)(() => T(Object(p.l)()), [T]),
					R = x.giphy.isEnabled,
					O = Object(r.useMemo)(() => Q({
						isGifUploadEnabled: w,
						isImageUploadEnabled: v
					}).join(), [v, w]);
				return i.a.createElement(z.a, {
					className: t,
					oveflowMenuDropdownId: n,
					onOverflowMenuClick: m,
					editorType: B.a.Comment
				}, i.a.createElement("div", {
					className: te.a.powerupButtons
				}, y && i.a.createElement(G, {
					controlsState: x,
					subredditId: s && s.id,
					onEmoteButtonClick: c
				}), C && i.a.createElement(V, {
					controlsState: x,
					onGifButtonClick: u
				}), j && i.a.createElement(se.a, {
					accept: O,
					controlsState: x,
					disabledTooltip: k.fbt._("Limit one media per comment", null, {
						hk: "4BKWLn"
					}),
					enabled: R,
					onClick: F,
					onFilesInput: l,
					type: "image"
				})), (y || C || j) && i.a.createElement(ne, null), Object(I.g)(I.f, x, o, d, b), i.a.createElement(I.a, {
					controlsState: x,
					trackOnClick: b,
					onLinkButtonClick: f
				}), Object(I.g)(I.h, x, o, d, b), i.a.createElement(ne, null), Object(I.g)(I.e, x, o, d, b), i.a.createElement(ne, null), i.a.createElement(I.d, {
					controlsState: x,
					editorState: o,
					trackOnClick: b,
					onChange: d
				}))
			}
			var ie = s("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				ae = s("./src/reddit/constants/componentSizes.ts"),
				de = s("./src/reddit/constants/componentTestIds.ts"),
				ce = s("./src/reddit/constants/modals.ts"),
				le = s("./src/reddit/controls/ErrorText/index.tsx"),
				ue = s("./src/reddit/helpers/correlationIdTracker.ts"),
				me = s("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				pe = s("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				he = s("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				be = s("./src/reddit/models/PostCreationForm/index.ts"),
				fe = s("./src/reddit/models/PostDraft/index.ts"),
				_e = s("./src/reddit/actions/modal.ts"),
				ge = s("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				xe = s("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				Ee = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				ye = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Ce = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				ve = s("./src/reddit/models/Subreddit/index.ts"),
				ke = s("./src/reddit/selectors/activeModal.ts"),
				we = s("./src/reddit/selectors/activeModalId.ts"),
				je = s("./src/reddit/selectors/economics.ts"),
				Te = s("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				Fe = s("./src/reddit/selectors/user.ts"),
				Re = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Oe = s("./src/reddit/selectors/experiments/typingIndicators.ts"),
				Se = s("./src/reddit/actions/toaster.ts"),
				Me = s("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				De = s("./src/reddit/models/Toast/index.ts"),
				ze = s("./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less"),
				Ie = s.n(ze);
			const Be = 16,
				Ae = b.a.div("CommentHeader", Ie.a),
				Pe = b.a.div("MarkdownButtonWrapper", Ie.a),
				Le = b.a.wrapped(ne, "SectionSpacer", Ie.a),
				We = b.a.span("FormHeaderText", Ie.a),
				Ne = e => {
					let {
						cancelButtonEnabled: t,
						draftKey: s,
						isCommentBeforeSignUpEnabled: n,
						isCommentBoxDesignEnabled: o,
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
						} = e, p = u.getCurrentContent(), h = Object(Me.j)(p) ? Object(Me.m)(p, l) : !!p.getPlainText().trim();
						return i.a.createElement(pe.a, {
							cancelButtonEnabled: t,
							className: Object(T.a)(Ie.a.FormFooter, {
								[Ie.a.mRedesign]: o
							}),
							onSubmit: r,
							onCancel: a,
							pending: d,
							submitButtonText: c,
							canSubmit: h
						}, i.a.createElement("div", {
							className: Ie.a.ToolbarWrapper
						}, i.a.createElement(re, e), i.a.createElement(Le, null), !n && i.a.createElement(Pe, null, i.a.createElement(ie.a, {
							className: Ie.a.MarkdownButton,
							draftKey: s,
							onClick: m
						}))))
					}
				},
				He = Object(a.b)(() => Object(d.c)({
					activeModalId: we.a,
					destSubreddit: (e, t) => {
						const s = Object(Ce.s)(e, t);
						return s ? {
							name: s.name,
							isProfile: s.type === ve.g.User,
							id: s.id
						} : void 0
					},
					draft: X.i,
					isCommentBeforeSignUpEnabled: Te.a,
					isLoggedIn: Fe.S,
					isLoginModalOpened: Object(ke.c)(ce.a.LOGIN_MODAL_ID),
					isRegisterModalOpened: Object(ke.c)(ce.a.REGISTER_MODAL_ID),
					userCanUseEmojis: (e, t) => {
						const s = Object(Ce.s)(e, t);
						return Object(je.s)(e, s ? s.id : void 0)
					},
					userCanUseGifs: (e, t) => {
						const s = Object(Ce.s)(e, t);
						return Object(je.t)(e, s ? s.id : void 0, t.parentCommentId)
					},
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object(Oe.d)(e),
					isImageUploadEnabled: (e, t) => {
						const s = Object(Ce.s)(e, t);
						return Object($.d)(e, {
							subredditId: s ? s.id : void 0
						})
					},
					isGifUploadEnabled: (e, t) => {
						const s = Object(Ce.s)(e, t);
						return Object($.b)(e, {
							subredditId: s ? s.id : void 0
						})
					},
					uploads: e => e.uploads
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(_e.i)(Object(he.a)(t.draftKey))),
					showErrorToast: t => {
						e(Object(Se.f)({
							kind: De.b.Error,
							text: t,
							duration: 6e3
						}))
					}
				}));
			class Ue extends i.a.Component {
				constructor(e) {
					super(e), this.getToolbarRenderer = Object(R.a)((e, t, s, n, o, r, i) => Ne({
						cancelButtonEnabled: e,
						draftKey: t,
						isCommentBeforeSignUpEnabled: s,
						isCommentBoxDesignEnabled: n,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: o,
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
						const e = this.editorWrapperElement.parentElement.getBoundingClientRect().width < ae.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.formHeight || F.a.write(() => {
							this.setState({
								breakOut: e,
								formHeight: t
							})
						})
					}, this.hasContent = () => {
						const {
							rteState: e
						} = this.state;
						return Ee.a.hasContent(e)
					}, this.handleBlur = () => this.props.onFocusChanged(!1), this.handleFocus = () => {
						this.props.onFocus(), this.props.onFocusChanged(!0)
					}, this.handleChange = (e, t) => {
						const {
							onChange: s
						} = this.props;
						s && s({
							rteState: e
						}), t && this.setState({
							hasChanged: !0
						}), this.setState(() => ({
							showError: !1,
							rteState: e
						}), () => {
							F.a.read(this.detectBreakout)
						})
					}, this.cancelForm = () => {
						this.editor && this.props.draftType === fe.c.replyToPost && this.setState({
							rteState: Ee.a.createInitial()
						}), this.props.onCancel()
					}, this.shouldConfirmCancel = () => this.hasContent() && this.state.hasChanged && this.props.draftType === fe.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							rteState: this.state.rteState,
							commentMode: be.i.RICH_TEXT,
							draftType: this.props.draftType,
							validate: this.props.showWarningModal
						})
					}, this.onSwitchEditorMode = (e, t) => {
						this.props.onSwitchMode(e, t, this.props.draftKey)
					}, this.onTrackToolbarClick = (e, t) => {
						Object(ue.d)(ue.a.CommentComposer, !1), this.props.sendEvent(Object(p.h)(e, t))
					}, this.onFilesFilter = (e, t) => {
						const {
							isGifUploadEnabled: s,
							isImageUploadEnabled: n
						} = this.props, o = !Object(A.a)(t).giphy.isEnabled, {
							showErrorToast: r
						} = this.props;
						if ((e.length > 1 || o && e.length >= 1) && (r(k.fbt._("Limit one media per comment", null, {
								hk: "iejOT"
							})), o)) return [];
						const i = Q({
								isImageUploadEnabled: n,
								isGifUploadEnabled: s
							}),
							a = e.filter(e => i.includes(e.type));
						if (e.length !== a.length) {
							let e = [];
							n && (e = [".png", ".jpeg"]), s && (e = [...e, ".gif"]), r(k.fbt._("Only image ({listOfallowedMediaFiles}) file types are allowed", [k.fbt._param("listOfallowedMediaFiles", e.join(", "))], {
								hk: "2mORw0"
							}))
						}
						return a.slice(0, 1)
					};
					const {
						draft: t,
						draftType: s,
						hasError: n,
						mediaMetadata: o,
						rtJson: r
					} = e;
					this.state = {
						breakOut: !1,
						cancelModalText: s === fe.c.edit ? k.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : k.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						rteState: !r && t && t.rteState ? t.rteState : Ee.a.createInitial(r, o),
						formHeight: void 0,
						hasChanged: !1,
						showError: n
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.setState({
						rteState: Ee.a.createInitial()
					}), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentWillUnmount() {
					Object(ue.b)(ue.a.CommentComposer), this.props.onUnmount({
						rteState: this.state.rteState
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null)
				}
				componentDidMount() {
					this.props.draft.hasFocus && this.editor && (window.addEventListener("resize", this.detectBreakout), F.a.read(this.detectBreakout), F.a.write(() => {
						this.props.draft.hasFocus && this.editor && this.editor.focus()
					})), this.props.instanceRef && this.props.instanceRef(this)
				}
				getWrapperHeight() {
					if (!this.editorDomElement) return;
					return this.editorDomElement.getBoundingClientRect().height + Be
				}
				render() {
					const {
						activeModalId: e,
						cancelModalToggled: t,
						className: s,
						depth: n,
						destSubreddit: o,
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
						userCanUseEmojis: C,
						userCanUseGifs: v,
						userName: w,
						isTypingIndicatorsWriteTestEnabled: F,
						isImageUploadEnabled: R,
						isGifUploadEnabled: D,
						uploads: z
					} = this.props, {
						cancelModalText: I,
						breakOut: A,
						formHeight: P,
						rteState: L
					} = this.state, W = Object(he.a)(a), N = r.draftType === fe.c.edit, H = d !== fe.c.replyToPost;
					return i.a.createElement("div", {
						className: Object(T.a)(Ie.a.FormWrapper, s, {
							[Ie.a.isTopLevelComment]: y,
							[Ie.a.isRedesign]: m
						}),
						ref: this.setEditorWrapperRef,
						style: {
							height: A ? P : void 0
						}
					}, !m && y && w && i.a.createElement(Ae, null, i.a.createElement(We, null, k.fbt._("Comment as {authorLink}", [k.fbt._param("authorLink", i.a.createElement(O.a, {
						author: w,
						isAuthorDeleted: !1
					}, w))], {
						hk: "4pMWAk"
					}))), i.a.createElement(me.a, {
						breakOut: A,
						depth: n,
						isEditing: N
					}, i.a.createElement(M.a, {
						allowImageUploads: R || D,
						shouldOmitImageCaptionBlock: !0,
						shouldUseGqlUploadLease: !0,
						onFilesFilter: this.onFilesFilter,
						minImageDimension: 20,
						userCanUseEmojis: C,
						userCanUseGifs: v,
						dataTestId: de.c,
						destSubreddit: o,
						editorType: B.a.Comment,
						initialHeight: this.props.initialHeight,
						isCommentBoxDesignEnabled: m,
						isExpanded: p,
						isTypingIndicatorsWriteTestEnabled: F,
						rteState: L,
						rteRef: this.setRTEComponentRef,
						domRef: this.setRTEDomElementRef,
						onBlur: this.handleBlur,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.handleFocus,
						onChange: this.handleChange,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onSwitchEditorMode,
						placeholderText: m ? k.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : k.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						postId: x,
						readOnly: g,
						trackToolbarClick: this.onTrackToolbarClick,
						toolbarPosition: "bottom",
						renderToolbar: this.getToolbarRenderer(H, a, !h && u, m, g, E, z)
					})), this.state.showError ? Object(le.c)(c) : null, e === W && i.a.createElement(S.a, {
						actionText: k.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: k.fbt._("Keep", null, {
							hk: "1fDXd5"
						}),
						modalText: I,
						onConfirm: this.cancelForm,
						toggleModal: t,
						trackClick: j.a
					}), e === l.t && i.a.createElement(xe.a, {
						onSubmit: this.onSubmit,
						modalSeen: _,
						withOverlay: !0
					}), i.a.createElement(ge.a, {
						editKey: a,
						hasValue: Ee.a.hasContent(L),
						skipBlockingOnPageReload: !h && u && (b || f)
					}))
				}
			}
			var qe = Object(ye.v)()(He(Object(Re.c)(Ue))),
				Ge = s("./src/reddit/components/RequestPendingBanner/index.tsx"),
				Ke = s("./src/reddit/models/User/index.ts"),
				Ve = s("./src/reddit/selectors/experiments/commentBox.ts"),
				Xe = s("./src/reddit/selectors/posts.ts");
			const Ze = Object(ye.v)(),
				Je = Object(d.c)({
					activeModalId: we.a,
					contributorRequestPending: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(ye.b)(e, s, g.e.Comment)
					},
					isCommentBoxDesignEnabled: Ve.a,
					userName: e => e.user.account ? Object(Ke.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					hasError: X.v,
					errorMsgs: X.M,
					draft: X.i,
					disableAutofocus: X.f,
					showContributorRequestFlow: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(ye.gb)(e, s, g.e.Comment)
					},
					postAuthorIsBlocked: Xe.w
				}),
				Qe = Object(a.b)(Je, (e, t) => ({
					onMount: () => e(c.a(t.draftKey)),
					onCancel: () => {
						t.draftType === fe.c.edit ? e(l.d({
							commentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						})) : e(l.b({
							parentCommentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						}))
					},
					onUnmount: s => e(l.k(t.draftKey, s)),
					onFocus: o()(() => e((e, s) => Object(p.e)(s(), t.draftType))),
					onFocusChanged: s => e(l.f({
						hasFocus: s,
						draftKey: t.draftKey
					})),
					onSwitchMode: (t, s, n) => e(l.c(t, s, n)),
					onLoadRecaptchaEnterprise: () => e(Object(u.d)(m.F, !0)),
					dispatchSubmit: (s, n) => {
						e(t.submitAction(s, n))
					}
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					onSubmit: s => {
						t.dispatchSubmit(s, e.draft.commentMode)
					}
				}));
			class Ye extends i.a.Component {
				constructor(e) {
					super(e), this.getInstanceRef = e => this.formInstanceRef = e, this.onCancel = () => {
						this.props.onCancel()
					}, this.onSwitchMode = async (e, t, s) => {
						await this.props.onSwitchMode(e, t, s), this.formInstanceRef && this.formInstanceRef.focus()
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
				componentDidMount() {
					this.props.onLoadRecaptchaEnterprise()
				}
				componentDidUpdate(e) {
					const t = e.pending,
						{
							hasError: s,
							pending: n
						} = this.props;
					t && !n && !s && this.setState({
						showWarningModal: !0
					})
				}
				render() {
					const {
						props: e
					} = this;
					if (!e.draft || e.postAuthorIsBlocked) return null;
					const t = e && e.draft && e.draft.rtJson || e.rtJson || void 0,
						s = {
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
					return e.contributorRequestPending ? i.a.createElement(Ge.a, null) : e.showContributorRequestFlow ? i.a.createElement(v, null) : e.draft.commentMode === be.i.RICH_TEXT ? i.a.createElement(qe, s) : i.a.createElement(h.b, s)
				}
			}
			t.default = Ze(Qe(Ye))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less": function(e, t, s) {
			e.exports = {
				RequestButton: "_3K2ydhts9_ES4s9UpcXqBi",
				requestButton: "_3K2ydhts9_ES4s9UpcXqBi"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/constants/modals.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/privateCommunity.ts"),
				p = s("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				b = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				f = s.n(b);
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
							openRequestToJoinSubredditModal: s,
							openContributorRequestModal: n
						} = this.props;
						t === h.b.ContentGate ? (e(Object(m.a)(t)), s()) : (e(Object(p.a)(t)), n())
					}
				}
				render() {
					const {
						eventSource: e,
						smallButton: t,
						className: s,
						isContributorRequestPending: o
					} = this.props;
					return r.a.createElement(u.t, {
						priority: e === h.b.ContentGate ? u.c.Secondary : u.c.Primary,
						className: Object(a.a)(t ? null : f.a.RequestButton, s),
						onClick: this.onRequest,
						size: t ? u.d.S : u.d.M,
						disabled: o
					}, o ? n.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : _()[e])
				}
			}
			t.default = Object(i.b)(null, e => ({
				openContributorRequestModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(d.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(c.c)(g))
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
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = s.n(i),
				d = s("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", a.a),
				l = d.a.div("TextWrapper", a.a);

			function u(e) {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: i,
					title: d,
					textWrapperClassName: u
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, o.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? o.a.createElement(c, null, n) : o.a.createElement(c, null), o.a.createElement(l, {
					className: u
				}, o.a.createElement("div", {
					className: a.a.title
				}, d), i && o.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/MarkdownHelp/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/MarkdownHelp/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				d = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				c = s("./src/reddit/components/RichTextJson/elements.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/higherOrderComponents/asModal/index.tsx"),
				p = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				_ = s("./src/reddit/components/MarkdownHelp/index.m.less"),
				g = s.n(_),
				x = s("./src/lib/lessComponent.tsx");
			const E = "Markdown_Help__Modal",
				y = x.a.wrapped(b.a, "Section", g.a),
				C = x.a.div("Container", g.a),
				v = x.a.table("Table", g.a),
				k = x.a.p("P", g.a);
			class w extends r.a.Component {
				render() {
					const e = n.fbt._("italics", null, {
							hk: "9wBJ9"
						}),
						t = n.fbt._("bold", null, {
							hk: "yoD2u"
						}),
						s = n.fbt._("item", null, {
							hk: "20ZnoS"
						}),
						o = n.fbt._("quoted text", null, {
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
					}), r.a.createElement(C, null, r.a.createElement(v, {
						className: g.a.helpTable
					}, r.a.createElement("tr", null, r.a.createElement(c.s, null, r.a.createElement(c.j, null, n.fbt._("Type this:", null, {
						hk: "VDjXQ"
					}))), r.a.createElement(c.s, null, r.a.createElement(c.j, null, n.fbt._("to get this:", null, {
						hk: "4zlZi9"
					})))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "*", e, "*")), r.a.createElement(c.p, null, r.a.createElement(c.f, null, e))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "**", t, "**")), r.a.createElement(c.p, null, r.a.createElement(c.b, null, t))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "[reddit!](https://reddit.com)")), r.a.createElement(c.p, null, r.a.createElement(c.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "* ", s, " 1"), r.a.createElement(c.j, null, "* ", s, " 2"), r.a.createElement(c.j, null, "* ", s, " 3")), r.a.createElement(c.p, null, r.a.createElement(c.v, null, r.a.createElement(c.g, null, s, " 1"), r.a.createElement(c.g, null, s, " 2"), r.a.createElement(c.g, null, s, " 3")))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "> ", o)), r.a.createElement(c.p, null, r.a.createElement(c.c, null, o))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "~~", i, "~~")), r.a.createElement(c.p, null, r.a.createElement(c.d, null, i))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, n.fbt._("super^script", null, {
						hk: "2WteOp"
					}))), r.a.createElement(c.p, null, n.fbt._("super{=script}", [n.fbt._param("=script", r.a.createElement(c.m, null, n.fbt._("script", null, {
						hk: "4a2qMi"
					})))], {
						hk: "1VvC4z"
					}))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, `>!${u}!<`)), r.a.createElement(c.p, null, r.a.createElement(l.a, null, u)))), r.a.createElement(k, null, n.fbt._("Check the {=commenting wiki page} for more help", [n.fbt._param("=commenting wiki page", r.a.createElement(c.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, n.fbt._("commenting wiki page", null, {
						hk: "25UBE"
					})))], {
						hk: "1J9oBy"
					}))), r.a.createElement(y, null, r.a.createElement(f.a, null, r.a.createElement(h.l, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const j = Object(i.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(E))
			}))(w);
			t.a = Object(m.a)(Object(u.c)(j))
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/postCreation/general.ts"),
				c = s("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				l = s("./src/reddit/components/FocusableContent/index.tsx"),
				u = s("./src/reddit/components/MarkdownHelp/index.tsx"),
				m = s("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				p = s("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				h = s("./src/reddit/constants/keycodes.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = s("./src/reddit/models/PostCreationForm/index.ts"),
				g = s("./src/reddit/selectors/activeModalId.ts"),
				x = s("./src/reddit/selectors/editorContent.ts"),
				E = s("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				y = s.n(E),
				C = s("./src/lib/lessComponent.tsx");
			const v = C.a.wrapped(f.a, "LoadingIcon", y.a),
				k = e => {
					let {
						isFilled: t,
						...s
					} = e;
					return r.a.createElement(v, s)
				},
				w = C.a.span("ModeDescription", y.a),
				j = C.a.div("ModeWrapper", y.a),
				T = C.a.wrapped(c.a, "MarkdownHelpButton", y.a),
				F = C.a.div("Toolbar", y.a),
				R = Object(a.c)({
					activeModalId: g.a,
					isConverting: e => Object(x.a)(e)
				}),
				O = Object(i.b)(R, (e, t) => ({
					onChange: s => {
						e(Object(d.c)(s)), t.onChange && t.onChange(s)
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
							metaKey: s,
							keyCode: n
						} = e;
						(t || s) && n === h.a.Enter && this.props.onSubmit()
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
						placeholderText: s,
						focusableContentMarkdownClassName: o,
						value: i
					} = this.props, {
						isFocused: a
					} = this.state;
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement(l.a, {
						className: o,
						isFocused: a
					}, r.a.createElement(F, null, r.a.createElement(j, null, r.a.createElement(w, null, n.fbt._("Markdown", null, {
						hk: "42KuwU"
					})), r.a.createElement(T, {
						onClick: this.props.helpModalToggled
					})), r.a.createElement(M, {
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
						placeholder: s,
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
			const M = r.a.memo(e => {
				let {
					isConverting: t,
					onClick: s
				} = e;
				const o = n.fbt._("Switch to Fancy Pants Editor", null, {
					hk: "1AKY7t"
				});
				return r.a.createElement(b.t, {
					priority: b.c.Plain,
					size: b.d.XS,
					onClick: s,
					Icon: t ? k : void 0,
					text: o
				})
			});
			t.a = O(S)
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = s("./src/reddit/constants/keycodes.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = s("./src/reddit/controls/TextButton/index.tsx"),
				u = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = s("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = s.n(m),
				h = s("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(d.l, "PrimaryButton", p.a),
				f = h.a.wrapped(i.p, "ModalText", p.a);
			class _ extends o.a.PureComponent {
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
					return o.a.createElement(i.e, null, o.a.createElement(i.i, null, o.a.createElement(u.a, null, o.a.createElement(i.q, null, this.props.titleText), o.a.createElement(l.a, {
						onClick: this.props.onClose
					}, o.a.createElement(i.b, null)))), o.a.createElement(i.l, null, o.a.createElement(f, null, this.props.bodyText)), o.a.createElement(i.g, null, o.a.createElement(i.a, {
						onClick: this.props.onSecondaryAction
					}, t ? o.a.createElement(c.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), o.a.createElement(b, {
						onClick: this.props.onPrimaryAction
					}, e ? o.a.createElement(c.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(r.a)(_)
		},
		"./src/reddit/components/PostCreationForm/Prompt/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			! function(e) {
				e.LOAD_DRAFT_MODAL_ID = "POST_CREATION__LOAD_DRAFT_MODAL_ID", e.MAX_DRAFTS_MODAL_ID = "POST_CREATION__MAX_DRAFTS_MODAL_ID", e.SWITCH_TO_RTE_MODAL_ID = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID"
			}(n || (n = {}));
			const d = {
					title: () => o.fbt._("Load draft", null, {
						hk: "VQ7SS"
					}),
					body: () => o.fbt._("Loading this draft will discard your current post.", null, {
						hk: "49vMci"
					}),
					confirm: () => o.fbt._("Load Draft", null, {
						hk: "29mFSs"
					}),
					cancel: () => o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				c = {
					title: () => o.fbt._("Save draft", null, {
						hk: "36SGct"
					}),
					body: () => o.fbt._("Looks like you’ve hit your max number of drafts. Please delete one to make room.", null, {
						hk: "4g9gOF"
					}),
					confirm: () => o.fbt._("Manage Drafts", null, {
						hk: "3a6SXJ"
					}),
					cancel: () => o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				l = {
					title: () => o.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "22mr8J"
					}),
					body: () => o.fbt._("Switching to Fancy Pants Editor may result in a loss of content", null, {
						hk: "1cWryd"
					}),
					confirm: () => o.fbt._("Switch", null, {
						hk: "36pRzE"
					}),
					cancel: () => o.fbt._("Cancel", null, {
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
		"./src/reddit/components/PostEditForm/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PostEditForm/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/noop.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/postCreation/editing.ts"),
				p = s("./src/reddit/actions/postCreation/editorContent.ts"),
				h = s("./src/reddit/actions/postCreation/postGuidance.ts"),
				b = s("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				f = s("./src/reddit/components/Poll/async.ts"),
				_ = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/memoizeByReference/index.ts"),
				x = s("./src/reddit/components/RichTextEditor/media/helpers.ts");
			const E = Object(g.a)((e, t) => {
				const s = e.name,
					{
						allowedPostTypes: o
					} = e,
					r = Object(x.g)(t),
					i = ((e, t, s) => {
						if (!t) return null;
						let o = "";
						return !e.total || t.images || t.videos ? e.video && !t.videos ? o = n.fbt._("Videos are not allowed in {subreddit name}", [n.fbt._param("subreddit name", `r/${s}`)], {
							hk: "4DBrcv"
						}) : !e.image && !e.gifvideo || t.images || (o = n.fbt._("Images are not allowed in {subreddit name}", [n.fbt._param("subreddit name", `r/${s}`)], {
							hk: "27ju8Q"
						})) : o = n.fbt._("Videos and images are not allowed in {subreddit name}", [n.fbt._param("subreddit name", `r/${s}`)], {
							hk: "2GGFeK"
						}), o || null
					})(r, o, s);
				return i ? [i] : (e => {
					const t = [];
					return e.image > _.eb && t.push(n.fbt._("Post may not contain more that 20 images", null, {
						hk: "1Szc36"
					})), e.video + e.gifvideo > _.hb && t.push(n.fbt._("Post may not contain more that 5 videos", null, {
						hk: "2WhZ8k"
					})), t
				})(r)
			});
			var y = s("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				C = s("./src/reddit/components/RichTextEditor/index.tsx"),
				v = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/controls/ErrorText/index.tsx"),
				j = s("./src/reddit/helpers/correlationIdTracker.ts"),
				T = s("./src/reddit/helpers/richTextEditor/index.ts"),
				F = s("./src/reddit/models/PostCreationForm/index.ts"),
				R = s("./src/reddit/models/PostRequirements/index.ts"),
				O = s("./src/reddit/selectors/platform.ts"),
				S = s("./src/reddit/selectors/postCreations.ts"),
				M = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/controls/Button/index.tsx"),
				z = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				I = s("./src/reddit/components/PostEditForm/index.m.less"),
				B = s.n(I),
				A = s("./src/lib/lessComponent.tsx"),
				P = s("./node_modules/lodash/debounce.js"),
				L = s.n(P),
				W = s("./src/reddit/actions/postGuidance/index.ts"),
				N = s("./src/reddit/selectors/experiments/postGuidance.ts"),
				H = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				U = s("./src/reddit/selectors/postGuidance.ts"),
				q = s("./src/reddit/components/PostGuidance/index.tsx");
			const G = A.a.div("BottomRow", B.a),
				K = A.a.div("FormContent", B.a),
				V = A.a.wrapped(D.l, "SubmitButton", B.a),
				X = A.a.wrapped(z.a, "LoadingIcon", B.a),
				Z = Object(k.v)(),
				J = Object(l.c)({
					destSubreddit: S.h,
					editorMode: S.i,
					errorMessages: S.j,
					hasError: S.k,
					isPostGuidanceEligible: (e, t) => {
						var s;
						const n = Object(k.q)(e, t);
						if (!n) return !1;
						const o = Object(U.e)(e, {
								subredditName: n.name.toLowerCase()
							}),
							r = Object(H.c)(e, {
								subredditId: n.id
							});
						return !("post" !== Object(S.a)(e) || null === (s = null == o ? void 0 : o.postGuidanceConfig) || void 0 === s || !s.length || r) && Object(N.a)(e)
					},
					markdownDraft: S.l,
					pending: S.db,
					postRequirements: S.ub,
					postGuidanceBodyTriggeredRules: U.d,
					postGuidanceBlockRuleTriggered: U.c,
					rteDraft: S.m,
					submissionType: S.a,
					subreddit: k.s,
					uploads: e => e.uploads,
					user: M.m,
					isCommentsPage: O.f,
					isImageCreationEnabled: S.O,
					isVideoCreationEnabled: S.W,
					isSubredditInPostGuidanceAllowlist: (e, t) => {
						const s = Object(k.q)(e, t);
						return !!s && Object(U.b)(e, {
							subredditId: s.id
						})
					}
				}),
				Q = Object(d.b)(J, (e, t) => ({
					onCancel: t => e(m.b(t)),
					onSubmitDraft: t => e(m.c(t)),
					onSuccess: t => e(Object(c.b)(t)),
					onToggleEditorMode: (t, s) => e(p.d(F.h.POST_EDITING, t, s)),
					onPostGuidanceValidation: (t, s, n) => {
						e(h.b(t, s, n))
					},
					onFetchPostGuidanceConfig: t => {
						e(Object(W.b)(t))
					}
				}));
			class Y extends a.a.Component {
				constructor(e) {
					super(e), this.onPostGuidanceValidation = L()(() => {
						const {
							markdownBody: e,
							rteState: t
						} = this.state, {
							post: s,
							editorMode: n,
							subreddit: o
						} = this.props, r = (null == o ? void 0 : o.id) || "", i = s.title, a = n === F.i.RICH_TEXT ? v.a.getRawText(t, " ") : e;
						this.props.onPostGuidanceValidation(r, i, a || "")
					}, 150), this.isFormEmpty = () => {
						const {
							markdownBody: e,
							rteState: t
						} = this.state, {
							editorMode: s
						} = this.props;
						return "" === (s === F.i.RICH_TEXT ? v.a.getRawText(t, " ") : e)
					}, this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onMarkdownPostChange = e => {
						const {
							markdownBody: t
						} = this.state, s = this.state.markdownPostDraftChanged || t.trim() !== e.trim();
						this.setState({
							markdownBody: e,
							markdownPostDraftChanged: s
						}), this.props.isPostGuidanceEligible && this.onPostGuidanceValidation()
					}, this.onRichPostChange = (e, t) => {
						this.setState({
							rteState: e,
							richtextPostDraftChanged: this.state.richtextPostDraftChanged || t
						}), this.props.isPostGuidanceEligible && this.onPostGuidanceValidation()
					}, this.haveMarkdownPostDraft = () => !!(this.state.markdownBody || "").trim(), this.haveDraft = () => this.props.editorMode === F.i.RICH_TEXT ? this.haveRichPostDraft() : this.haveMarkdownPostDraft(), this.onSubmit = () => {
						const e = this.buildPostSubmission();
						e && this.props.onSubmitDraft(e)
					}, this.onToggleEditorMode = async (e, t) => {
						this.setState({
							markdownPostDraftChanged: !1,
							richtextPostDraftChanged: !1
						}), await this.props.onToggleEditorMode(e, t), e === F.i.RICH_TEXT ? this.rteRef && this.rteRef.focus() : this.markdownEditorRef && this.markdownEditorRef.focus()
					}, this.getMediaValidationErrors = () => {
						const {
							editorMode: e,
							destSubreddit: t
						} = this.props, {
							rteState: s
						} = this.state;
						return s.isBound && e === F.i.RICH_TEXT ? E(t, s.editorState.getCurrentContent()) : []
					}, this.getTextPostContent = () => {
						const {
							editorMode: e,
							uploads: t
						} = this.props, {
							markdownBody: s,
							rteState: n
						} = this.state;
						return e === F.i.RICH_TEXT ? v.a.toRichTextJSON(n, t) : {
							markdown: s
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
					Object(j.d)(j.a.PostComposer), this.props.subreddit && this.props.isSubredditInPostGuidanceAllowlist && this.props.onFetchPostGuidanceConfig(this.props.subreddit.name)
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
						richtextPostDraftChanged: s
					} = this.state;
					return e === F.i.RICH_TEXT ? !!s : e === F.i.MARKDOWN && !!t
				}
				render() {
					const {
						editorMode: e,
						errorMessages: t,
						hasError: s,
						isCommentsPage: o,
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
					} = this.state, k = l && l.bodyRestrictionPolicy === R.a.Required ? n.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : n.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), j = this.getMediaValidationErrors(), O = [...t, ...j];
					s && !O.length && O.push(n.fbt._("Something went wrong. Just don't panic.", null, {
						hk: "FsWrq"
					}));
					const S = !v.a.isAllMediaUploaded(E, m);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(K, null, e === F.i.RICH_TEXT ? a.a.createElement(C.a, {
						allowImageUploads: p,
						allowVideoUploads: h,
						className: Object(u.a)(B.a.Editor, {
							[B.a.isPending]: !!i
						}),
						focusableContentRTEClassName: Object(u.a)(B.a.focusableContent, {
							[B.a.mHasError]: !!s || c && !this.isFormEmpty()
						}),
						destSubreddit: this.props.destSubreddit,
						editorType: T.a.Post,
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
						focusableContentRTEClassName: Object(u.a)(B.a.focusableContent, {
							[B.a.mHasError]: !!s || c
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
						className: B.a.errorMessages,
						messages: O
					}), a.a.createElement(q.a, {
						triggeredRules: this.props.postGuidanceBodyTriggeredRules,
						emptyState: this.isFormEmpty()
					}), a.a.createElement(G, null, a.a.createElement(D.r, {
						disabled: !!i,
						onClick: this.cancelEdit
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(V, {
						disabled: !!i || !!j.length || !this.hasChanged() || S || c,
						onClick: this.onSubmit
					}, i ? a.a.createElement(X, {
						sizePx: 10
					}) : n.fbt._("Save", null, {
						hk: "4yMsMq"
					}))), a.a.createElement(b.a, {
						editKey: d.id,
						hasValue: !(!g && !x),
						isPostEdit: !0
					})), a.a.createElement(f.a, {
						postId: d.id,
						isCommentsPage: !!o
					}))
				}
			}
			t.default = Z(Q(Y))
		},
		"./src/reddit/components/PostGuidance/index.m.less": function(e, t, s) {
			e.exports = {
				errorText: "_29Z8rNOZEXZzQgelIlxW5t",
				showAllBtn: "_3y2uOHfsXNElM_JH5BKn76"
			}
		},
		"./src/reddit/components/PostGuidance/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/redditGQL/types.ts"),
				a = s("./src/lib/hooks/usePrevious.ts"),
				d = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/components/PostGuidance/index.m.less"),
				l = s.n(c);
			const u = e => {
				let {
					triggeredRules: t = [],
					trackPostGuidanceView: s,
					emptyState: c = !1
				} = e;
				const [u, m] = Object(o.useState)(!1), p = t.filter(e => e.actionType === i.N.Block), h = p.length > 0 ? p : t, b = u ? h : h.slice(0, 5), f = Object(a.a)(b);
				return Object(o.useEffect)(() => {
					const e = b.map(e => e.guidanceId),
						t = (null == f ? void 0 : f.map(e => e.guidanceId)) || [],
						n = e.filter(e => !(null == t ? void 0 : t.includes(e))),
						o = [];
					n.forEach(e => {
						e && o.push(e)
					}), s && n.length > 0 && s(o)
				}, [t, b, f, s]), r.a.createElement("div", {
					"data-testid": "post-guidance-validation"
				}, r.a.createElement("ol", null, b.map((e, t) => r.a.createElement("li", {
					className: `${c||e.actionType!==i.N.Block?"":l.a.errorText} text-12 pt-2xs`,
					key: t
				}, e.validationMessage.richtext ? r.a.createElement(d.b, {
					className: `${c||e.actionType!==i.N.Block?"":l.a.errorText} !text-12 !pt-2xs`,
					useExplicitTextColor: !0,
					content: JSON.parse(e.validationMessage.richtext),
					rtJsonElementProps: {}
				}) : e.validationMessage.markdown))), h.length > 5 && r.a.createElement("button", {
					"data-testid": "post-guidance-btn",
					className: `text-12 pt-2xs ${l.a.showAllBtn}`,
					onClick: () => m(e => !e)
				}, u ? n.fbt._("View less", null, {
					hk: "4dXCrs"
				}) : n.fbt._("View more", null, {
					hk: "mvs5E"
				})))
			}
		},
		"./src/reddit/components/RequestPendingBanner/index.m.less": function(e, t, s) {
			e.exports = {
				Banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				Subtitle: "_1ljRPHbvpC41amZF9_xBeb",
				subtitle: "_1ljRPHbvpC41amZF9_xBeb"
			}
		},
		"./src/reddit/components/RequestPendingBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				u = s("./src/reddit/selectors/platform.ts"),
				m = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = s.n(p);
			const b = d.a.wrapped(c.a, "Banner", h.a),
				f = Object(i.b)(() => Object(a.c)({
					restrictions: m.q,
					subreddit: u.e
				}));
			t.a = f(e => {
				let {
					restrictions: t,
					subreddit: s
				} = e;
				if (!s) return null;
				const o = t === l.e.Comment ? l.a.Create : l.a.Draft;
				return r.a.createElement(b, {
					subtitle: r.a.createElement("span", {
						className: h.a.Subtitle
					}, n.fbt._("Your request to {restrictions} in {displayName} was sent and is pending. In the meantime, you can {action} a post and {=browse the community}", [n.fbt._param("restrictions", l.d[t]()), n.fbt._param("displayName", s.name), n.fbt._param("action", l.c[o]()), n.fbt._param("=browse the community", r.a.createElement("a", {
						href: `${s.url}`
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
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, s) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-autosize-textarea/lib/index.js"),
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => {
					let {
						className: t,
						children: s,
						editorWrapperRef: n,
						initialHeight: r
					} = e;
					return o.a.createElement("div", {
						className: Object(a.a)(c.a.editorWrapper, t),
						style: r ? {
							height: r
						} : void 0,
						ref: n
					}, s)
				},
				m = e => {
					let {
						isFullHeight: t,
						textAreaRef: s,
						...n
					} = e;
					return o.a.createElement(i.a, l({
						className: Object(a.a)(c.a.textareaAutosize, {
							[c.a.mIsFullHeight]: t
						}),
						innerRef: s
					}, n))
				};
			class p extends o.a.Component {
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
						innerRef: s,
						onEditorResize: n,
						...r
					} = this.props, {
						isResized: i
					} = this.state;
					return o.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, o.a.createElement(m, l({}, r, {
						isFullHeight: !!i,
						textAreaRef: s
					})))
				}
			}
			t.a = p
		},
		"./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less": function(e, t, s) {
			e.exports = {
				SectionSpacer: "_1_GKN8UW8t3pCAZhMgZOoL",
				sectionSpacer: "_1_GKN8UW8t3pCAZhMgZOoL",
				powerupButtons: "_6E4bLu7N3_WO5HyAtaJx8"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less": function(e, t, s) {
			e.exports = {
				emote: "_3D93rMnM8022kmI5JTG4fb",
				emotes: "_2nE7oF1_HdWt-s31zYmYB6",
				emoteMask: "_26-n7Hn4ggLG2AJ7kmR8i6",
				smile: "kZEfwKUF_b6N-MPjQuYFA"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				l = s("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = s("./src/reddit/components/UserIcon/UserIcon.m.less"),
				h = s.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
					shouldShowPresenceIndicator: s,
					isPresenceUserPrefEnabled: o,
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
				})), s && r.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/Input/index.m.less"),
				r = s.n(o);
			t.a = n.a.input("input", r.a)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(i);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: n = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(a.a.loadingIcon, s, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...n.q(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: n.nb(t)
				}),
				r = e => t => ({
					...n.q(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: n.nb(t)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...n.q(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: n.nb(t)
				}),
				r = e => t => ({
					...n.q(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: n.nb(t)
				})
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/MarkdownMode/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 208 128"
			}, o.a.createElement("rect", {
				width: "198",
				height: "118",
				x: "5",
				y: "5",
				ry: "10",
				stroke: "currentColor",
				strokeWidth: "10",
				fill: "none"
			}), o.a.createElement("path", {
				d: "M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
			}))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const d = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("rightAligned", r.a)
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.S, i.R, (e, t) => e || t),
				d = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: o.D
				}), e => e === o.O.Enabled)
		},
		"./src/reddit/selectors/experiments/imageComment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/comments.ts");
			const i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.se
					}) === n.Rd
				},
				a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.te
					}) === n.Rd
				},
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.be
					}) === n.Rd
				},
				c = (e, t) => {
					let {
						subredditId: s
					} = t;
					return void 0 !== s && Object(r.D)(e, {
						subredditId: s
					}) && i(e)
				},
				l = (e, t) => {
					let {
						subredditId: s
					} = t;
					return void 0 !== s && Object(r.B)(e, {
						subredditId: s
					}) && i(e)
				}
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					if (Object(i.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.sg
					}) === n.Rd
				},
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.tg
					}) === n.Rd
				},
				c = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.rg
					});
					return t === n.kg.TypingIndicators || t === n.kg.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: n.rg
					});
					return (null == t ? void 0 : t.variant) === n.kg.IndicatorsPlusCTA
				}
		},
		"./src/redditGQL/operations/PostGuidanceValidation.json": function(e) {
			e.exports = JSON.parse('{"id":"f61154c007f1"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RichTextEditor.42156d8b971fa0f9de5c.js.map