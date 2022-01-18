// https://www.redditstatic.com/desktop2x/RichTextEditor.5f24998fece2b03fec0d.js
// Retrieved at 1/18/2022, 11:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RichTextEditor", "ContributorRequestButton", "ReadingIndicator"], {
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
							c = function(t) {
								window.removeEventListener("resize", a, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", c, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(o) {
									e.style[o] = t[o]
								})), s.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", c, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", a, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", s.set(e, {
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
						if (n !== t ? "hidden" === o.overflowY && (d("scroll"), l(), n = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== o.overflowY && (d("hidden"), l(), n = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), i !== n) {
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
						return i(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
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
						i = document.createElement(r);
					i.innerHTML = "&nbsp;", "TEXTAREA" === r.toUpperCase() && i.setAttribute("rows", "1");
					var a = n(e, "font-size");
					i.style.fontSize = a, i.style.padding = "0px", i.style.border = "0px";
					var c = document.body;
					c.appendChild(i), o = i.offsetHeight, c.removeChild(i)
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

				function a(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(d), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
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
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, o, n, s, r, i, a, c;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (s = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + s;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (o = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (r = o.index + o[1].length, (this.__index__ < 0 || r < this.__index__) && (this.__schema__ = "", this.__index__ = r, this.__last_index__ = o.index + o[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (r = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ < 0 || r < this.__index__ || r === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = r, this.__last_index__ = i)), this.__index__ >= 0
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
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseClamp.js"),
				s = o("./node_modules/lodash/_copyArray.js"),
				r = o("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return r(s(e), n(t, 0, e.length))
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
					if (null != a && (void 0 === c ? a == a && !n(a) : o(a, c))) var c = a,
						d = i
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
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var o = Math.floor,
				n = Math.random;
			e.exports = function(e, t) {
				return e + o(n() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var o = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, s, r) {
				for (var i = -1, a = n(o((t - e) / (s || 1)), 0), c = Array(a); a--;) c[r ? a : ++i] = e, e += s;
				return c
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseClamp.js"),
				s = o("./node_modules/lodash/_shuffleSelf.js"),
				r = o("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var o = r(e);
				return s(o, n(t, 0, o.length))
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
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var o = -1,
					s = e.length,
					r = s - 1;
				for (t = void 0 === t ? s : t; ++o < t;) {
					var i = n(o, r),
						a = e[i];
					e[i] = e[o], e[o] = a
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/chunk.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseSlice.js"),
				s = o("./node_modules/lodash/_isIterateeCall.js"),
				r = o("./node_modules/lodash/toInteger.js"),
				i = Math.ceil,
				a = Math.max;
			e.exports = function(e, t, o) {
				t = (o ? s(e, t, o) : void 0 === t) ? 1 : a(r(t), 0);
				var c = null == e ? 0 : e.length;
				if (!c || t < 1) return [];
				for (var d = 0, l = 0, u = Array(i(c / t)); d < c;) u[l++] = n(e, d, d += t);
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
				c = Math.max;
			e.exports = function(e, t, o, d) {
				e = s(e) ? e : a(e), o = o && !d ? i(o) : 0;
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
				i = o("./node_modules/lodash/_baseReduce.js"),
				a = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, o) {
				var c = a(e) ? n : i,
					d = arguments.length < 3;
				return c(e, r(t, 4), o, d, s)
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arraySampleSize.js"),
				s = o("./node_modules/lodash/_baseSampleSize.js"),
				r = o("./node_modules/lodash/isArray.js"),
				i = o("./node_modules/lodash/_isIterateeCall.js"),
				a = o("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, o) {
				return t = (o ? i(e, t, o) : void 0 === t) ? 1 : a(t), (r(e) ? n : s)(e, t)
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
				c = o("./node_modules/lodash/_trimmedEndIndex.js");
			e.exports = function(e, t, o) {
				if ((e = a(e)) && (o || void 0 === t)) return e.slice(0, c(e) + 1);
				if (!e || !(t = n(t))) return e;
				var d = i(e),
					l = r(d, i(t)) + 1;
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
							c = e.saveDOMNodeRef,
							d = o && a ? a * o : null;
						return r({}, i, {
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
				}(t, e), i(t, [{
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
				return c
			}));
			var n = o("./src/lib/domUtils/index.ts"),
				s = o("./src/lib/fastdom/index.ts"),
				r = o("./src/reddit/components/CommentSort/index.tsx"),
				i = o("./src/reddit/constants/elementIds.ts");
			const a = () => {
					s.a.write(() => {
						const e = document.getElementById(i.d);
						e ? Object(n.c)(e, 0) : Object(n.c)(document, 0)
					})
				},
				c = e => {
					s.a.read(() => {
						const t = e ? document.getElementById(i.d) : window,
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
			o.d(t, "e", (function() {
				return ee
			})), o.d(t, "o", (function() {
				return oe
			})), o.d(t, "m", (function() {
				return ne
			})), o.d(t, "q", (function() {
				return ie
			})), o.d(t, "t", (function() {
				return ae
			})), o.d(t, "n", (function() {
				return de
			})), o.d(t, "s", (function() {
				return le
			})), o.d(t, "l", (function() {
				return ue
			})), o.d(t, "a", (function() {
				return pe
			})), o.d(t, "b", (function() {
				return fe
			})), o.d(t, "p", (function() {
				return _e
			})), o.d(t, "f", (function() {
				return ge
			})), o.d(t, "g", (function() {
				return xe
			})), o.d(t, "j", (function() {
				return ye
			})), o.d(t, "d", (function() {
				return Ee
			})), o.d(t, "c", (function() {
				return Oe
			})), o.d(t, "i", (function() {
				return we
			})), o.d(t, "h", (function() {
				return Re
			})), o.d(t, "k", (function() {
				return Fe
			})), o.d(t, "r", (function() {
				return De
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/lib/makeDraftKey/index.ts"),
				a = o("./src/reddit/actions/changeUsername.ts"),
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
				E = o("./src/reddit/constants/headers.ts"),
				v = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				j = o("./src/reddit/helpers/genericServerError/index.ts"),
				k = o("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				O = o("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				w = o("./src/reddit/models/PostCreationForm/index.ts"),
				T = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				S = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, o, n) => {
					let s, r;
					if (n === w.i.MARKDOWN) s = o.text, r = null;
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
				R = async (e, t, o, n, r) => {
					const i = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === w.i.MARKDOWN) i.text = o.text;
					else {
						i.text = null;
						let e = null;
						o.rteState && (e = b.a.toRichTextJSON(o.rteState).document), i.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(Object(C.a)(e, [E.a]), {
						method: s.jb.POST,
						endpoint: Object(v.a)(Object(T.a)(Object(S.a)(`${e.apiUrl}/api/comment.json`))),
						data: i
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(O.a)(e)
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
			var F = o("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var D = o("./src/reddit/endpoints/post/index.tsx"),
				M = o("./src/reddit/endpoints/post/convert.ts"),
				P = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				A = o("./src/reddit/featureFlags/index.ts"),
				z = o("./src/reddit/helpers/correlationIdTracker.ts"),
				B = o("./src/reddit/helpers/dom/index.ts"),
				N = o("./src/reddit/helpers/localStorage/index.ts"),
				L = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				W = o("./src/reddit/models/Comment/index.ts"),
				U = o("./src/reddit/models/PostDraft/index.ts"),
				H = o("./src/reddit/models/RichTextJson/index.ts"),
				q = o("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				K = o("./src/reddit/models/Toast/index.ts"),
				G = o("./src/reddit/selectors/comments.ts"),
				X = o("./src/reddit/selectors/commentSelector.ts"),
				V = o("./src/reddit/selectors/platform.ts"),
				J = o("./src/reddit/selectors/posts.ts"),
				Z = o("./src/reddit/selectors/user.ts"),
				Q = o("./src/reddit/actions/comment/index.ts"),
				Y = o("./src/reddit/actions/comment/constants.ts");
			const $ = Object(r.a)(Y.k),
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (o, n) => {
					const s = n();
					if (!!s.features.comments.drafts[t])
						if (Object(Z.L)(s) && e) {
							const n = $({
								hasFocus: e,
								draftKey: t
							});
							o(Object(a.f)(n))
						} else o($({
							hasFocus: e,
							draftKey: t
						}))
				}, te = Object(r.a)(Y.H), oe = Object(r.a)(Y.J), ne = Object(r.a)(Y.I), se = Object(r.a)(Y.G), re = async (e, t, o, n) => {
					const s = n.ok && n.body,
						r = s && s.comment && s.comment.id;
					await L.g(e, o, t, r)
				}, ie = "Toxicity_Warning__Modal", ae = (e, t, o, n, s, r) => async (i, a, {
					gqlContext: c
				}) => {
					const l = a(),
						u = Object(V.e)(l);
					let m = "";
					if (u && (m = u.name), A.d.enableToxicityWarning(l)) {
						if (!(await I(c(), m, n, s))) return void i(Object(d.i)(ie))
					}
					i(de(e, t, o, n, s, r))
				}, ce = e => e.rteState ? b.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, de = (e, t, o, r, i, a, c) => async (u, b, {
					apiContext: _
				}) => {
					u(Object(d.g)(ie));
					const g = b(),
						x = g.features.comments.submit.pending[o];
					if (!g.user.account || x) return;
					u(te({
						draftKey: o,
						draft: r
					}));
					const y = g.user.account.displayText,
						C = r.commentMode;
					let E;
					if (c ? (E = await Object(P.i)(_(), e, r, y), u(Object(m.a)({
							streamId: e,
							level: E.body.automuteLevel
						}))) : E = await R(_(), e, r, y, C), E.ok) {
						let n;
						n = E.body, u(oe({
							...n,
							headCommentId: Object(G.w)(g, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: o
						}));
						const s = Object(J.H)(b(), {
							postId: e
						});
						u(Object(l.z)(s, f.a.CommentSubmitted))
					} else {
						E.error && E.error.type === s.Jb && L.i(g, ce(r), e);
						const t = E.error && E.error.fields && E.error.fields[0] ? E.error.fields[0].msg : n.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(se({
							draftKey: o,
							error: E.error
						})), u(Object(h.f)({
							duration: h.a,
							kind: K.b.Error,
							text: t
						}))
					}
					re(b(), t, i, E).then(() => E.ok && i === w.i.RICH_TEXT ? Object(z.b)(z.a.CommentComposer) : void 0), a || Object(p.d)()
				}, le = e => async (t, o, {
					gqlContext: n
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: r,
						parentCommentDepth: i,
						draftKey: a,
						formData: c,
						editorMode: l
					} = e, u = o(), m = Object(V.e)(u);
					let p = "";
					if (m && (p = m.name), A.d.enableToxicityWarning(u)) {
						if (!(await I(n(), p, c, l))) return void t(Object(d.i)(ie))
					}
					t(ue({
						commentsPageKey: r,
						draftKey: a,
						parentCommentDepth: i,
						parentCommentId: s,
						formData: c,
						editorMode: l
					}))
				}, ue = e => async (t, o, {
					apiContext: n
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: i,
						parentCommentDepth: a,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e;
					t(Object(d.g)(ie));
					const m = o(),
						h = m.features.comments.submit.pending[c];
					if (!m.user.account || h) return;
					t(te({
						draftKey: c,
						draft: l
					}));
					const b = m.user.account.displayText,
						f = l.commentMode,
						_ = await R(n(), r, l, b, f);
					if (_.ok) t(ne({
						..._.body,
						parentCommentId: r,
						commentsPageKey: i,
						draftKey: c,
						depth: a + 1
					}));
					else {
						if (_.error && _.error.type === s.Jb) {
							const e = Object(X.b)(m, {
								commentId: r
							});
							if (!e) return;
							L.i(m, ce(l), e.postId, r)
						}
						t(se({
							draftKey: c,
							error: _.error
						}))
					}
					re(o(), i, u, _), Object(p.d)()
				}, me = Object(r.a)(Y.q), pe = Object(r.a)(Y.p), he = Object(r.a)(Y.l), be = (Object(r.a)(Y.g), Object(r.a)(Y.m)), fe = (Object(r.a)(Y.t), (e, t, o) => async (s, r, {
					apiContext: i
				}) => {
					const a = e === w.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(H.G)(t)) s(be({
						editorMode: e,
						draftKey: o,
						content: a ? H.i : ""
					})), s(Object(u.c)(e));
					else {
						s(Object(u.b)(o));
						const r = await Object(M.a)(i(), e, a ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(u.a)(o)), s(be({
								editorMode: e,
								draftKey: o,
								content: t
							})), s(Object(u.c)(e))
						} else s(Object(u.a)(o)), s(Object(h.f)({
							duration: h.a,
							kind: K.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), _e = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: o
				}) => async (n, s) => {
					const r = s(),
						l = Object(i.a)(U.c.replyToComment, t);
					if (!Object(Z.J)(s())) return n(Object(c.j)()), void n(Object(d.k)({
						actionSource: d.a.Reply,
						redirectUrl: Object(G.m)(s(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						m = u && u[t];
					if ((m || u && o) && (Object.keys(u).forEach(t => u[t] && n(pe({
							parentCommentId: t,
							commentsPageKey: e
						}))), m)) return;
					let p = "",
						h = null;
					const b = r.user.prefs.commentMode,
						f = Object(B.d)();
					if (f) {
						const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (b === w.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => q.s(e, null)).map(e => q.l([e])),
								o = q.s("", null),
								n = q.l([o]);
							h = {
								document: [q.c(t), n]
							}
						}
					}
					const _ = r.features.comments.drafts[l];
					let g;
					if (g = f ? {
							commentMode: b,
							draftType: U.c.replyToComment,
							rtJson: h,
							text: `${p}\n`
						} : _ || {
							commentMode: b,
							draftType: U.c.replyToComment,
							rtJson: h,
							text: ""
						}, Object(Z.L)(r)) {
						const o = me({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: l,
							formData: g
						});
						n(Object(a.f)(o))
					} else n(me({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: l,
						formData: g
					}))
				}, ge = e => async t => {
					t(Object(Q.p)(e)), t(Ee(e))
				}, xe = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async o => {
					o(pe({
						parentCommentId: e,
						commentsPageKey: t
					})), o(_e({
						parentCommentId: e,
						commentsPageKey: t
					})), o(Object(Q.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, ye = (e, t) => o => o(he({
					draftKey: e,
					formData: t
				})), Ce = Object(r.a)(Y.s), Ee = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: o,
					draftKey: n,
					text: s
				}) => async (r, i) => {
					const a = i();
					a.user.account && (L.d(a), r(Ce({
						commentId: e,
						commentsPageKey: o,
						draftKey: n,
						formData: {
							text: s,
							commentMode: t,
							rteState: null,
							draftType: U.c.edit,
							hasFocus: !0
						}
					})))
				}, ve = Object(r.a)(Y.C), je = Object(r.a)(Y.B), ke = Object(r.a)(Y.D), Oe = Object(r.a)(Y.h), we = ({
					id: e,
					commentsPageKey: t,
					depth: o,
					draftKey: n,
					formData: r
				}) => async (o, i, {
					apiContext: a
				}) => {
					const c = i();
					if (!c.user.account) return;
					o(ve({
						draftKey: n
					})), L.e(c);
					const d = c.user.account.displayText || "",
						l = r.commentMode,
						u = await (async (e, t, o, n, r, i) => {
							const a = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (i === w.i.MARKDOWN) a.text = n.text;
							else {
								a.text = null;
								let e = null;
								n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), a.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(x.a)(Object(C.a)(e, [E.a]), {
								endpoint: Object(v.a)(Object(S.a)(Object(T.a)(`${e.apiUrl}/api/editusertext`))),
								method: s.jb.POST,
								data: a
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(O.a)(e)
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
						})(a(), e, 0, r, d, l);
					if (u.ok) {
						const s = u.body;
						o(ke({
							commentId: e,
							commentsPageKey: t,
							draftKey: n
						})), o(Object(Q.i)({
							[e]: {
								...s.comment
							}
						}))
					} else o(je({
						draftKey: n,
						error: u.error
					}))
				}, Te = Object(r.a)(Y.z), Se = Object(r.a)(Y.y), Ie = Object(r.a)(Y.A), Re = (e, t) => async (o, n, {
					apiContext: r
				}) => {
					const i = n();
					o(Te({
						id: e
					})), L.b(e, i);
					const a = await ((e, t) => Object(x.a)(Object(C.a)(e, [E.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/del`),
						method: s.jb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(O.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(j.a)()
					}))(r(), e);
					a.ok ? o(Ie({
						id: e,
						postId: t
					})) : o(Se({
						id: e,
						error: a.error
					}))
				}, Fe = e => async (t, o, {
					apiContext: n
				}) => {
					const s = !o().features.comments.models[e].sendReplies;
					t(Object(Q.i)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(D.o)(n(), e, s)).ok || t(Object(Q.i)({
						[e]: {
							sendReplies: !s
						}
					}))
				}, De = (e, t) => async (o, s, {
					gqlContext: r
				}) => {
					var i, a, c, d, l, u;
					o(Object(Q.c)());
					const m = e => Object(h.f)(Object(h.e)(e, K.b.Error));
					if (((null === (a = null === (i = s().pages) || void 0 === i ? void 0 : i.comments) || void 0 === a ? void 0 : a.followed) || []).length === _.a) o(m(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const i = t === W.a.FOLLOWED,
							a = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (o(Object(Q.n)(a)), (await ((e, t) => Object(y.a)(e, {
								...F,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(N.sb)(null !== (l = null === (d = null === (c = s().pages) || void 0 === c ? void 0 : c.comments) || void 0 === d ? void 0 : d.followed) && void 0 !== l ? l : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = i ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							o(Object(h.f)({
								kind: K.b.SuccessCommunityGreen,
								text: e
							}))
						} else o(Object(Q.n)(a)), o(m(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
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
				c = o("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(a.a)(c.a),
				l = Object(a.a)(c.b),
				u = Object(a.a)(c.c),
				m = e => async (t, o, {
					apiContext: n
				}) => {
					const s = e && e.includeMemberships || !1,
						a = e && e.forceFetch || !1,
						c = o();
					if (!c.economics.me.fetched || s && !c.economics.me.data.specialMemberships || a) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
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
								method: n.jb.GET
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
				i = o("./src/reddit/endpoints/post/convert.ts"),
				a = o("./src/reddit/helpers/localStorage/index.ts"),
				c = o("./src/reddit/helpers/trackers/postComposer.ts"),
				d = o("./src/reddit/models/PostCreationForm/index.ts"),
				l = o("./src/reddit/models/RichTextJson/index.ts"),
				u = o("./src/reddit/models/Toast/index.ts"),
				m = o("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(s.a)(m.G),
				h = Object(s.a)(m.p),
				b = Object(s.a)(m.Q),
				f = (e, t, o) => async (s, a, {
					apiContext: f
				}) => {
					c.j(a(), t);
					const g = t === d.i.MARKDOWN,
						x = t === d.i.RICH_TEXT,
						y = m.k;
					if (g && Object(l.G)(o)) return s(b({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void s(_(t));
					if (x && !o) return s(b({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void s(_(t));
					s(p(y));
					const C = await Object(i.a)(f(), t, g ? JSON.stringify(o) : o);
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
					const s = Object(a.l)();
					if (s >= 3) return;
					const i = o().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === i) return;
					const c = e === d.i.MARKDOWN ? n.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
					})), Object(a.pb)(s + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			})), o.d(t, "b", (function() {
				return c
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = o("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(n.a)(r.r),
				a = Object(n.a)(r.F),
				c = e => async (t, o, {
					apiContext: n
				}) => {
					const r = await Object(s.a)(n(), e);
					r && r.ok ? t(i({
						streamId: e,
						level: r.body.data.auto_mute_status.level
					})) : t(a(e))
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
					[a.a.breakout]: e
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
				isTypingIndicatorsSubmitButton: "_2pKzIEkO3m7UgbgBbyFYgV",
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
				a = o("./src/reddit/components/RichTextEditor/Toolbar/PowerupButtonsWrapper.tsx"),
				c = o("./src/reddit/controls/Button/index.tsx"),
				d = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = o("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				u = o.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: p
			} = o("./node_modules/fbt/lib/FbtPublic.js"), h = i.a.wrapped(d.a, "LoadingIcon", u.a), b = i.a.wrapped(c.t, "CancelButton", u.a), f = e => e.preventDefault();
			t.a = ({
				pending: e,
				cancelButtonEnabled: t = !0,
				children: o,
				className: n,
				submitButtonText: i,
				canSubmit: d,
				isTypingIndicatorsExperimentEnabled: l,
				onSubmit: _,
				onCancel: g,
				powerupButtonsWrapperProps: x
			}) => s.a.createElement("div", {
				className: Object(r.a)(u.a.FormFooterWrapper, n, {
					[u.a.pending]: e
				})
			}, s.a.createElement("div", {
				className: u.a.ButtonWrapper
			}, l && !!x && (x.emojisEnabled || x.gifsEnabled) && s.a.createElement(a.a, m({}, x, {
				isTypingIndicatorsExperimentEnabled: l
			})), s.a.createElement(c.t, {
				className: Object(r.a)(u.a.SubmitButton, {
					[u.a.isTypingIndicatorsSubmitButton]: l
				}),
				size: c.d.XS,
				type: "submit",
				disabled: !d,
				onClick: _,
				onMouseDown: f
			}, e ? s.a.createElement(h, {
				sizePx: 10
			}) : i), t && s.a.createElement(b, {
				priority: c.c.Secondary,
				size: c.d.XS,
				type: "reset",
				disabled: e,
				onClick: g,
				onMouseDown: f
			}, p._("Cancel", null, {
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
				isTypingIndicatorsCommentForm: "_3ONa75lJmuK7qXZXfgjEAn",
				isOverlay: "_2vIBiZEAB3GQT3SgXkY9mM",
				userIcon: "_1LJWM5yPEtZv26nvbB_mvr",
				CurrentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				currentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				pending: "_1N53zdZlGyvjHMUoXkJa42",
				focused: "_2sPOgUISlhUYTMcHhUPCTP",
				isTypingIndicatorsEditorWrapper: "_2xCfRrdrXccFTyAYYKdXQK"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return ge
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/debounce.js"),
				r = o.n(s),
				i = o("./node_modules/lodash/noop.js"),
				a = o.n(i),
				c = o("./node_modules/react/index.js"),
				d = o.n(c),
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
				j = o("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				k = o("./src/lib/fastdom/index.ts"),
				O = o("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				w = o.n(O),
				T = o("./src/lib/lessComponent.tsx");
			const S = 310,
				I = T.a.div("Container", w.a);
			class R extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), o = t < S ? "compact" : "full";
						o !== this.state.toolbarType && k.a.write(() => {
							this.setState({
								toolbarType: o
							})
						})
					}
				}
				componentDidMount() {
					k.a.read(this.selectToolbar), window.addEventListener("resize", this.selectToolbar)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.selectToolbar)
				}
				render() {
					return d.a.createElement(I, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var F = o("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				D = o("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				M = o("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				P = o.n(M),
				A = o("./src/reddit/controls/Button/index.tsx");
			const z = T.a.wrapped(C.a, "LoadingIcon", P.a),
				B = ({
					isFilled: e,
					...t
				}) => d.a.createElement(z, t),
				N = T.a.div("Wrapper", P.a),
				L = T.a.wrapped(F.a, "MarkdownModeIcon", P.a),
				W = ({
					isFilled: e,
					...t
				}) => d.a.createElement(L, t);
			var U = d.a.memo((function(e) {
					const t = n.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return d.a.createElement(N, null, d.a.createElement(A.t, {
						priority: A.c.Plain,
						size: A.d.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? B : W
					}, d.a.createElement(D.a, {
						text: t
					})))
				})),
				H = o("./src/lib/classNames/index.ts"),
				q = o("./src/reddit/constants/keycodes.ts"),
				K = o("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				G = o("./src/realtime/GQLSubscription/async.tsx"),
				X = o("./src/reddit/components/TypingIndicators/index.tsx"),
				V = o("./src/reddit/components/TypingIndicators/constants.ts"),
				J = o("./src/reddit/constants/componentSizes.ts"),
				Z = o("./src/reddit/constants/componentTestIds.ts"),
				Q = o("./src/reddit/selectors/activeModalId.ts"),
				Y = o("./src/reddit/selectors/comments.ts"),
				$ = o("./src/reddit/selectors/editorContent.ts"),
				ee = o("./src/reddit/selectors/experiments/typingIndicators.ts"),
				te = o("./src/reddit/actions/modal.ts"),
				oe = o("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				ne = o("./src/reddit/models/PostCreationForm/index.ts"),
				se = o("./src/reddit/models/PostDraft/index.ts"),
				re = o("./src/reddit/models/User/index.ts"),
				ie = o("./src/reddit/components/TypingIndicators/index.m.less"),
				ae = o.n(ie),
				ce = o("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				de = o.n(ce);
			const le = T.a.button("SwitchModeButton", de.a),
				ue = T.a.wrapped(C.a, "LoadingIcon", de.a),
				me = T.a.div("CommentHeader", de.a),
				pe = T.a.span("FormHeaderText", de.a),
				he = T.a.button("HelpButton", de.a),
				be = T.a.wrapped(E.a, "HelpIcon", de.a),
				fe = T.a.wrapped(oe.a, "ResizableAutosizeTextarea", de.a),
				_e = T.a.wrapped(x.a, "CurrentUserIcon", de.a),
				ge = e => d.a.createElement(he, {
					className: e.className,
					onClick: e.onClick
				}, d.a.createElement(be, null)),
				xe = 8,
				ye = 16,
				Ce = Object(u.b)(() => Object(m.c)({
					activeModalId: Q.a,
					userName: e => e.user.account ? Object(re.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: Y.i,
					isConverting: (e, t) => Object($.a)(e, t.draftKey),
					isTypingIndicatorsUIEnabled: (e, t) => !!t.isTopLevelComment && Object(ee.b)(e),
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object(ee.e)(e)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(te.i)(Object(K.a)(t.draftKey))),
					helpModalToggled: () => e(Object(te.i)(g.b))
				}));
			class Ee extends d.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.realtimeGQLVariables = void 0, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.setUserStoppedTyping = r()(() => this.setState({
						isUserTyping: !1
					}), V.g), this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < J.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.wrapperHeight || k.a.write(() => {
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
							k.a.read(this.detectBreakout)
						}), this.props.isTypingIndicatorsWriteTestEnabled && (this.state.isUserTyping || this.setState({
							isUserTyping: !0
						}), this.setUserStoppedTyping())
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === se.c.edit, this.onCancel = () => {
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
						cancelModalText: s === se.c.edit ? n.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : n.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						isUserTyping: !1
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), k.a.read(this.detectBreakout), k.a.write(() => {
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
					return e instanceof Element ? e.getBoundingClientRect().height + xe + ye + J.o : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: o,
						className: s,
						disableAutofocus: r,
						depth: i,
						draft: c,
						draftKey: l,
						draftType: u,
						errorMsgs: m,
						pending: x,
						modalSeen: C,
						submitButtonText: E,
						isCommentBoxDesignEnabled: k,
						isExpanded: O,
						isOverlay: w,
						isTopLevelComment: T,
						isTypingIndicatorsExperimentEnabled: S,
						isTypingIndicatorsUIEnabled: I,
						isTypingIndicatorsWriteTestEnabled: F,
						onSwitchMode: D,
						postId: M,
						userName: P
					} = this.props, {
						cancelModalText: A,
						showError: z,
						text: B,
						breakOut: N,
						wrapperHeight: L,
						isUserTyping: W
					} = this.state, q = Object(K.a)(l), J = c.draftType === se.c.edit;
					return d.a.createElement("div", {
						"data-test-id": Z.b,
						className: Object(H.a)(de.a.Wrapper, s, {
							[de.a.isTopLevelComment]: T,
							[de.a.mExpanded]: O,
							[de.a.mRedesign]: k,
							[de.a.isTypingIndicatorsCommentForm]: S,
							[de.a.isOverlay]: S && w
						}),
						ref: this.setWrapperRef,
						style: {
							height: N ? L : void 0
						}
					}, F && W && d.a.createElement(G.a, {
						variables: this.realtimeGQLVariables,
						onData: a.a,
						queryKey: "userIsTypingOnPost"
					}), !S && !k && T && d.a.createElement(me, null, d.a.createElement(pe, null, n.fbt._("Comment as {authorLink}", [n.fbt._param("authorLink", d.a.createElement(h.a, {
						author: P,
						isAuthorDeleted: !1
					}, P))], {
						hk: "4pMWAk"
					}))), I && d.a.createElement(X.default, {
						minTimeVisible: V.e,
						minNumUsersTyping: V.d,
						postId: M
					}), d.a.createElement(v.a, {
						breakOut: N,
						depth: i,
						isEditing: J
					}, k && d.a.createElement("div", {
						className: de.a.userIcon
					}, d.a.createElement(_e, null)), d.a.createElement("div", {
						className: S ? void 0 : Object(H.a)(de.a.FormWrapper, {
							[de.a.pending]: x,
							[de.a.focused]: c.hasFocus
						})
					}, d.a.createElement(fe, {
						className: S ? de.a.isTypingIndicatorsEditorWrapper : void 0,
						innerRef: this.setTextAreaRef,
						autoFocus: t && !r,
						disabled: x,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: k || S ? n.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : n.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						shouldPadContent: S,
						value: B
					}), (!k || O) && d.a.createElement(j.a, {
						className: Object(H.a)(de.a.FormFooter, {
							[ae.a.typingIndicatorsFooter]: S
						}),
						cancelButtonEnabled: u !== se.c.replyToPost,
						isTypingIndicatorsExperimentEnabled: S,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: x,
						submitButtonText: E,
						canSubmit: this.userHasEnteredText()
					}, d.a.createElement(R, null, e => "compact" === e ? d.a.createElement(U, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => D(ne.i.RICH_TEXT, B, l),
						isConverting: this.props.isConverting
					}) : d.a.createElement("div", null, d.a.createElement(le, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => D(ne.i.RICH_TEXT, B, l)
					}, n.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "ousUG"
					}), this.props.isConverting && d.a.createElement(ue, {
						sizePx: 12
					})))), d.a.createElement(ge, {
						onClick: this.props.helpModalToggled
					})))), z && Object(y.c)(m), e === q && d.a.createElement(_.a, {
						actionText: n.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: n.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: A,
						onConfirm: () => this.cancelForm(),
						toggleModal: o,
						trackClick: () => {}
					}), e === g.b && d.a.createElement(g.a, {
						withOverlay: !0
					}), e === p.q && d.a.createElement(f.a, {
						onSubmit: this.onSubmit,
						modalSeen: C,
						withOverlay: !0
					}), d.a.createElement(b.a, {
						editKey: l,
						hasValue: !!B
					}))
				}
			}
			t.b = Ce(Ee)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-router/esm/react-router.js");
			let a = null;
			class c extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						c.blockers.delete(e), c.blockers.size || (a && a(), a = null, window.removeEventListener("beforeunload", c.navigationBlocker))
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
					c.blockers.add(e), a || (window.addEventListener("beforeunload", c.navigationBlocker), a = this.props.history.block(() => {
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
			c.blockers = new Set, c.navigationBlocker = e => {
				const t = "Are you sure you want to leave?";
				return e.returnValue = t, t
			}, t.a = Object(i.i)(c)
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
				isTypingIndicatorsCommentForm: "_2L2graYYrzv3d29vpczps_",
				isOverlay: "_1Pev-or7nb4LAxME63F1Mk",
				MarkdownButton: "_1Wn5lpE9yF7YQX-XVL6AUI",
				markdownButton: "_1Wn5lpE9yF7YQX-XVL6AUI",
				FormHeaderText: "_2ucWAzao-GLL6qRJ4USwVJ",
				formHeaderText: "_2ucWAzao-GLL6qRJ4USwVJ",
				tooltipTextWrapper: "k-vjguq_GjpAA4aCWemKB"
			}
		},
		"./src/reddit/components/CommentCreation/RichtextCommentForm/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o.n(s),
				i = o("./node_modules/lodash/noop.js"),
				a = o.n(i),
				c = o("./node_modules/react/index.js"),
				d = o.n(c),
				l = o("./node_modules/react-redux/es/index.js"),
				u = o("./node_modules/reselect/es/index.js"),
				m = o("./src/lib/classNames/index.ts"),
				p = o("./src/lib/fastdom/index.ts"),
				h = o("./src/lib/lessComponent.tsx"),
				b = o("./src/lib/memoizeByReference/index.ts"),
				f = o("./src/realtime/GQLSubscription/async.tsx"),
				_ = o("./src/reddit/components/AuthorLink/index.tsx"),
				g = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				x = o("./src/reddit/components/RichTextEditor/index.tsx"),
				y = o("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				C = o("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				E = o("./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.tsx"),
				v = o("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				j = o("./src/reddit/constants/componentSizes.ts"),
				k = o("./src/reddit/constants/componentTestIds.ts"),
				O = o("./src/reddit/controls/ErrorText/index.tsx"),
				w = o("./src/reddit/helpers/correlationIdTracker.ts"),
				T = o("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				S = o("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				I = o("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				R = o("./src/reddit/models/PostCreationForm/index.ts"),
				F = o("./src/reddit/models/PostDraft/index.ts"),
				D = o("./src/reddit/actions/comment/authoring.ts"),
				M = o("./src/reddit/actions/modal.ts"),
				P = o("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				A = o("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				z = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				B = o("./src/reddit/contexts/PageLayer/index.tsx"),
				N = o("./src/reddit/contexts/PageLayer/selectors.ts"),
				L = o("./src/reddit/helpers/richTextEditor/index.ts"),
				W = o("./src/reddit/models/Subreddit/index.ts"),
				U = o("./src/reddit/selectors/activeModalId.ts"),
				H = o("./src/reddit/selectors/comments.ts"),
				q = o("./src/reddit/selectors/economics.ts"),
				K = o("./src/reddit/selectors/gold/enabledFeatures.ts"),
				G = o("./src/reddit/components/TrackingHelper/index.tsx"),
				X = o("./src/reddit/components/TypingIndicators/constants.ts"),
				V = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				J = o("./src/reddit/selectors/experiments/typingIndicators.ts"),
				Z = o("./src/reddit/components/TypingIndicators/index.m.less"),
				Q = o.n(Z),
				Y = o("./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less"),
				$ = o.n(Y);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const te = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-TypingIndicators",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => Promise.resolve().then(o.bind(null, "./src/reddit/components/TypingIndicators/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return o(t)
					},
					resolve() {
						return "./src/reddit/components/TypingIndicators/index.tsx"
					}
				}),
				oe = 16,
				ne = h.a.div("CommentHeader", $.a),
				se = h.a.div("MarkdownButtonWrapper", $.a),
				re = h.a.wrapped(E.a, "SectionSpacer", $.a),
				ie = h.a.span("FormHeaderText", $.a),
				ae = ({
					cancelButtonEnabled: e,
					draftKey: t,
					isCommentBoxDesignEnabled: o,
					onSubmit: n,
					onCancel: s,
					pending: r,
					submitButtonText: i,
					isTypingIndicatorsExperimentEnabled: a,
					emojisEnabled: c,
					gifsEnabled: l
				}) => u => {
					const {
						editorState: p,
						onMarkdownButtonClick: h,
						readOnly: b
					} = u, f = p.getCurrentContent(), _ = !!f.getPlainText().trim() || f.getBlockMap().some(e => !!e && Object(C.t)(e.getType())), g = Object(y.a)(p);
					b && Object(y.b)(g);
					const x = a ? {
						controlsState: g,
						destSubreddit: u.destSubreddit,
						emojisEnabled: c,
						gifsEnabled: l,
						onEmoteButtonClick: u.onEmoteButtonClick,
						onGifButtonClick: u.onGifButtonClick,
						userCanUseEmojis: u.userCanUseEmojis,
						userCanUseGifs: u.userCanUseGifs
					} : void 0;
					return d.a.createElement(S.a, {
						cancelButtonEnabled: e,
						className: Object(m.a)($.a.FormFooter, {
							[$.a.mRedesign]: o,
							[Q.a.typingIndicatorsFooter]: a
						}),
						isTypingIndicatorsExperimentEnabled: a,
						onSubmit: n,
						onCancel: s,
						pending: r,
						submitButtonText: i,
						canSubmit: _,
						powerupButtonsWrapperProps: x
					}, d.a.createElement("div", {
						className: $.a.ToolbarWrapper
					}, d.a.createElement(E.b, ee({}, u, {
						isTypingIndicatorsExperimentEnabled: a,
						emojisEnabled: c,
						gifsEnabled: l,
						controlsState: g
					})), !a && d.a.createElement(re, null), d.a.createElement(se, null, d.a.createElement(v.a, {
						className: $.a.MarkdownButton,
						draftKey: t,
						onClick: h,
						shouldUseIcon: a
					}))))
				},
				ce = () => Object(u.c)({
					activeModalId: U.a,
					destSubreddit: (e, t) => {
						const o = Object(N.q)(e, t);
						return o ? {
							name: o.name,
							isProfile: o.type === W.f.User,
							id: o.id
						} : void 0
					},
					draft: H.i,
					userCanUseEmojis: (e, t) => {
						const o = Object(N.q)(e, t);
						return Object(q.s)(e, o ? o.id : void 0, t.parentCommentId)
					},
					userCanUseGifs: (e, t) => {
						const o = Object(N.q)(e, t);
						return Object(q.t)(e, o ? o.id : void 0, t.parentCommentId)
					},
					emojisEnabled: (e, t) => {
						const o = Object(N.q)(e, t),
							n = null == o ? void 0 : o.id;
						return Object(K.b)(e, {
							subredditId: n
						})
					},
					gifsEnabled: (e, t) => {
						const o = Object(N.q)(e, t),
							n = null == o ? void 0 : o.id;
						return Object(K.c)(e, {
							subredditId: n
						})
					},
					isTypingIndicatorsUIEnabled: (e, t) => !!t.isTopLevelComment && Object(J.b)(e),
					isTypingIndicatorsReadTestEnabled: (e, t) => !!t.isTopLevelComment && Object(J.d)(e),
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object(J.e)(e)
				}),
				de = (e, t) => ({
					cancelModalToggled: () => e(Object(M.i)(Object(I.a)(t.draftKey)))
				}),
				le = Object(l.b)(ce, de),
				ue = Object(B.u)();
			class me extends d.a.Component {
				constructor(e) {
					super(e), this.realtimeGQLVariables = void 0, this.getToolbarRenderer = Object(b.a)((e, t, o, n, s, r, i, a) => ae({
						cancelButtonEnabled: e,
						draftKey: t,
						isCommentBoxDesignEnabled: s,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: o,
						submitButtonText: n,
						isTypingIndicatorsExperimentEnabled: a,
						emojisEnabled: r,
						gifsEnabled: i
					})), this.focus = () => {
						this.editor && this.editor.focus()
					}, this.setEditorWrapperRef = e => {
						this.editorWrapperElement = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setRTEComponentRef = e => this.editor = e, this.setRTEDomElementRef = e => {
						this.editorDomElement = e
					}, this.detectBreakout = () => {
						if (!this.editorWrapperElement || !this.editorWrapperElement.parentElement || this.props.isTopLevelComment) return;
						const e = this.editorWrapperElement.parentElement.getBoundingClientRect().width < j.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.formHeight || p.a.write(() => {
							this.setState({
								breakOut: e,
								formHeight: t
							})
						})
					}, this.hasContent = () => {
						const {
							rteState: e
						} = this.state;
						return z.a.hasContent(e)
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
							p.a.read(this.detectBreakout)
						})
					}, this.cancelForm = () => {
						this.editor && this.props.draftType === F.c.replyToPost && this.setState({
							rteState: z.a.createInitial()
						}), this.props.onCancel()
					}, this.shouldConfirmCancel = () => this.hasContent() && this.state.hasChanged && this.props.draftType === F.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							rteState: this.state.rteState,
							commentMode: R.i.RICH_TEXT,
							draftType: this.props.draftType,
							validate: this.props.showWarningModal
						})
					}, this.onSwitchEditorMode = (e, t) => {
						this.props.onSwitchMode(e, t, this.props.draftKey)
					}, this.onTrackToolbarClick = (e, t) => {
						Object(w.e)(w.a.CommentComposer, !1), this.props.sendEvent(Object(V.h)(e, t))
					};
					const {
						postId: t,
						isTypingIndicatorsReadTestEnabled: o
					} = e;
					o && (this.realtimeGQLVariables = {
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "POST_TYPING_INDICATOR",
								postID: t
							}
						}
					});
					const {
						draft: n,
						draftType: r,
						hasError: i,
						mediaMetadata: a,
						rtJson: c
					} = e;
					this.state = {
						breakOut: !1,
						cancelModalText: r === F.c.edit ? s.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : s.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						rteState: !c && n && n.rteState ? n.rteState : z.a.createInitial(c, a),
						formHeight: void 0,
						hasChanged: !1,
						showError: i
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.setState({
						rteState: z.a.createInitial()
					}), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentWillUnmount() {
					Object(w.b)(w.a.CommentComposer), this.props.onUnmount({
						rteState: this.state.rteState
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null)
				}
				componentDidMount() {
					this.props.draft.hasFocus && this.editor && (window.addEventListener("resize", this.detectBreakout), p.a.read(this.detectBreakout), p.a.write(() => {
						this.props.draft.hasFocus && this.editor && this.editor.focus()
					})), this.props.instanceRef && this.props.instanceRef(this)
				}
				getWrapperHeight() {
					if (!this.editorDomElement) return;
					return this.editorDomElement.getBoundingClientRect().height + oe
				}
				render() {
					const {
						activeModalId: e,
						cancelModalToggled: t,
						className: o,
						depth: n,
						destSubreddit: r,
						draft: i,
						draftKey: c,
						draftType: l,
						errorMsgs: u,
						isCommentBoxDesignEnabled: p,
						isExpanded: h,
						modalSeen: b,
						pending: y,
						postId: C,
						submitButtonText: E,
						isTopLevelComment: v,
						userCanUseEmojis: j,
						userCanUseGifs: w,
						userName: S,
						emojisEnabled: R,
						gifsEnabled: M,
						isTypingIndicatorsExperimentEnabled: B,
						isTypingIndicatorsUIEnabled: N,
						isOverlay: W,
						isTypingIndicatorsReadTestEnabled: U,
						isTypingIndicatorsWriteTestEnabled: H
					} = this.props, {
						cancelModalText: q,
						breakOut: K,
						formHeight: G,
						rteState: V
					} = this.state, J = Object(I.a)(c), Z = i.draftType === F.c.edit, Q = l !== F.c.replyToPost;
					return d.a.createElement("div", {
						className: Object(m.a)($.a.FormWrapper, o, {
							[$.a.isTopLevelComment]: v,
							[$.a.isRedesign]: p,
							[$.a.isTypingIndicatorsCommentForm]: B,
							[$.a.isOverlay]: B && W
						}),
						ref: this.setEditorWrapperRef,
						style: {
							height: K ? G : void 0
						}
					}, U && !N && d.a.createElement(f.a, {
						variables: this.realtimeGQLVariables,
						onData: a.a,
						queryKey: "postTypingIndicator"
					}), !B && !p && v && d.a.createElement(ne, null, d.a.createElement(ie, null, s.fbt._("Comment as {authorLink}", [s.fbt._param("authorLink", d.a.createElement(_.a, {
						author: S,
						isAuthorDeleted: !1
					}, S))], {
						hk: "4pMWAk"
					}))), N && d.a.createElement(te, {
						minTimeVisible: X.e,
						minNumUsersTyping: X.d,
						postId: C
					}), d.a.createElement(T.a, {
						breakOut: K,
						depth: n,
						isEditing: Z
					}, d.a.createElement(x.a, {
						userCanUseEmojis: j,
						userCanUseGifs: w,
						dataTestId: k.c,
						destSubreddit: r,
						editorType: L.a.Comment,
						initialHeight: B ? void 0 : this.props.initialHeight,
						initialMinHeight: B ? X.c : void 0,
						isCommentBoxDesignEnabled: p,
						isExpanded: h,
						isTypingIndicatorsExperimentEnabled: B,
						isTypingIndicatorsWriteTestEnabled: H,
						rteState: V,
						rteRef: this.setRTEComponentRef,
						domRef: this.setRTEDomElementRef,
						noBorder: B,
						onBlur: this.handleBlur,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.handleFocus,
						onChange: this.handleChange,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onSwitchEditorMode,
						placeholderText: p || B ? s.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : s.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						postId: C,
						readOnly: y,
						trackToolbarClick: this.onTrackToolbarClick,
						toolbarPosition: "bottom",
						renderToolbar: this.getToolbarRenderer(Q, c, y, E, p, R, M, B)
					})), this.state.showError ? Object(O.c)(u) : null, e === J && d.a.createElement(g.a, {
						actionText: s.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: s.fbt._("Keep", null, {
							hk: "1fDXd5"
						}),
						modalText: q,
						onConfirm: this.cancelForm,
						toggleModal: t,
						trackClick: a.a
					}), e === D.q && d.a.createElement(A.a, {
						onSubmit: this.onSubmit,
						modalSeen: b,
						withOverlay: !0
					}), d.a.createElement(P.a, {
						editKey: c,
						hasValue: z.a.hasContent(V)
					}))
				}
			}
			t.a = ue(le(Object(G.c)(me)))
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
				i = o("./node_modules/uuid/v4.js"),
				a = o.n(i),
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
					...b.o(e),
					screen: b.ab(e),
					subreddit: b.jb(e)
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
				fbt: E
			} = o("./node_modules/fbt/lib/FbtPublic.js"), v = Object(r.b)(null, (e, t) => ({
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
						correlationId: a()()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(_(this.state.correlationId))
				}
				render() {
					return s.a.createElement(u.e, null, s.a.createElement(u.i, null, s.a.createElement(C.a, null, s.a.createElement(u.q, null, E._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), s.a.createElement(p.a, {
						onClick: () => {
							this.props.sendEvent(y(this.state.correlationId)), this.props.closeModal()
						}
					}, s.a.createElement(u.b, null)))), s.a.createElement(u.l, null, s.a.createElement(u.p, null, E._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), s.a.createElement(u.g, null, s.a.createElement(u.a, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, E._("Go back and edit", null, {
						hk: "3nGNI7"
					})), s.a.createElement(u.r, {
						onClick: () => {
							this.props.sendEvent(g(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, E._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(c.a)(v(Object(m.c)(j)))
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
				c = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/scroll/index.ts"),
				l = o("./src/reddit/actions/comment/index.ts"),
				u = o("./src/reddit/actions/comment/authoring.ts"),
				m = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				p = o("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				h = o("./src/lib/lessComponent.tsx"),
				b = o("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				f = o("./src/reddit/icons/fonts/Comment/index.tsx"),
				_ = o("./src/reddit/models/SubredditRestrictions/index.ts"),
				g = o("./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less"),
				x = o.n(g);
			const {
				fbt: y
			} = o("./node_modules/fbt/lib/FbtPublic.js"), C = h.a.div("RequestBox", x.a);
			var E = () => i.a.createElement(C, null, i.a.createElement(f.a, {
					className: x.a.commentIcon
				}), i.a.createElement("div", {
					className: x.a.commentText
				}, y._("Only approved users can comment in this community.", null, {
					hk: "3oqccc"
				})), i.a.createElement(b.default, {
					className: x.a.requestButton,
					eventSource: _.b.Comment
				})),
				v = o("./src/reddit/components/CommentCreation/RichtextCommentForm/index.tsx"),
				j = o("./src/reddit/components/RequestPendingBanner/index.tsx"),
				k = o("./src/reddit/models/PostCreationForm/index.ts"),
				O = o("./src/reddit/models/PostDraft/index.ts"),
				w = o("./src/reddit/models/User/index.ts"),
				T = o("./src/reddit/contexts/PageLayer/index.tsx"),
				S = o("./src/reddit/selectors/comments.ts"),
				I = o("./src/reddit/selectors/experiments/commentBox.ts"),
				R = o("./src/reddit/selectors/activeModalId.ts"),
				F = o("./src/reddit/selectors/experiments/antievil/index.tsx"),
				D = o("./src/reddit/selectors/posts.ts");
			const M = Object(T.u)(),
				P = Object(c.c)({
					activeModalId: R.a,
					contributorRequestPending: (e, {
						pageLayer: t
					}) => Object(T.b)(e, t, _.e.Comment),
					isCommentBoxDesignEnabled: I.a,
					userName: e => e.user.account ? Object(w.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					hasError: S.v,
					errorMsgs: S.K,
					draft: S.i,
					disableAutofocus: S.f,
					showContributorRequestFlow: (e, {
						pageLayer: t
					}) => Object(T.db)(e, t, _.e.Comment),
					postAuthorIsBlocked: D.w,
					isTrueblockPCBlockeeEnabled: F.b
				}),
				A = Object(a.b)(P, (e, t) => ({
					onMount: () => e(l.a(t.draftKey)),
					onCancel: () => {
						t.draftType === O.c.edit ? e(u.c({
							commentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						})) : e(u.a({
							parentCommentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						}))
					},
					onUnmount: o => e(u.j(t.draftKey, o)),
					onFocus: s()(() => e((e, o) => Object(m.f)(o(), t.draftType))),
					onFocusChanged: o => e(u.e({
						hasFocus: o,
						draftKey: t.draftKey
					})),
					onSwitchMode: (t, o, n) => e(u.b(t, o, n)),
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
			class z extends i.a.Component {
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
					}, this.onSubmitScrollToCommentSort = e => {
						const {
							isOverlay: t,
							onSubmit: o
						} = this.props;
						o(e), Object(d.a)(!!t)
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
							onSubmit: e.isTypingIndicatorsExperimentEnabled ? this.onSubmitScrollToCommentSort : e.onSubmit,
							onUnmount: e.onUnmount,
							parentCommentId: e.parentCommentId,
							pending: e.pending,
							postId: e.postId,
							rtJson: t,
							mediaMetadata: e.mediaMetadata,
							isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
							isExpanded: this.state.isExpanded,
							isOverlay: !!e.isOverlay,
							isTopLevelComment: e.isTopLevelComment,
							isTypingIndicatorsExperimentEnabled: !!e.isTypingIndicatorsExperimentEnabled,
							submitButtonText: e.submitButtonText,
							userName: e.userName,
							initialText: e.draft ? e.draft.text : e.initialText || "",
							onSwitchMode: this.onSwitchMode,
							showWarningModal: this.state.showWarningModal
						};
					return e.contributorRequestPending ? i.a.createElement(j.a, null) : e.showContributorRequestFlow ? i.a.createElement(E, null) : e.draft.commentMode === k.i.RICH_TEXT ? i.a.createElement(v.a, o) : i.a.createElement(p.b, o)
				}
			}
			t.default = M(A(z))
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
				c = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/constants/index.ts"),
				l = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/actions/comment/index.ts"),
				m = o("./src/reddit/actions/modal.ts"),
				p = o("./src/reddit/actions/post.ts"),
				h = o("./src/reddit/actions/toaster.ts"),
				b = o("./src/lib/makeApiRequest/index.ts"),
				f = o("./src/lib/omitHeaders/index.ts"),
				_ = o("./src/reddit/constants/headers.ts"),
				g = o("./src/reddit/models/Toast/index.ts");
			const x = (e, t) => async (o, s, {
				apiContext: r
			}) => {
				const i = await (async (e, t, o) => Object(b.a)(Object(f.a)(e, [_.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: d.jb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: o
						}
					}))(r(), e, t),
					a = `error-block-${t}`,
					c = `success-block-${t}`;
				if (i.ok) {
					o(Object(p.S)({
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
						id: c,
						kind: g.b.SuccessCommunityGreen,
						text: s
					}))
				} else o(h.f({
					id: a,
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
				j = o("./src/reddit/components/TrackingHelper/index.tsx"),
				k = o("./src/reddit/controls/Dropdown/index.tsx"),
				O = o("./src/reddit/controls/Dropdown/Row.tsx"),
				w = o("./src/reddit/controls/ToggleSwitch/index.tsx"),
				T = o("./src/reddit/helpers/path/index.ts"),
				S = o("./src/reddit/selectors/telemetry.ts");
			o("./src/telemetry/models/Event.ts");
			const I = (e, t, o, n, s) => r => ({
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
					userSubreddit: Object(S.sb)(r)
				}),
				R = (e, t) => o => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				F = e => ({
					subreddit: Object(S.jb)(e),
					userSubreddit: Object(S.sb)(e)
				}),
				D = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...F
				});
			var M = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				P = o("./src/reddit/icons/svgs/Info/index.tsx"),
				A = o("./src/reddit/selectors/activeModalId.ts"),
				z = o("./src/reddit/selectors/comments.ts"),
				B = o("./src/reddit/selectors/moderatorPermissions.ts"),
				N = o("./src/reddit/selectors/posts.ts"),
				L = o("./src/reddit/selectors/tooltip.ts"),
				W = o("./src/reddit/selectors/user.ts"),
				U = o("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = o.n(U),
				q = o("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const K = Object(v.a)(k.a),
				G = e => e === q.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === q.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class X extends r.a.Component {
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
					}, r.a.createElement(O.b, {
						className: Object(c.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${G(s)}`,
						id: t,
						noHover: !0,
						onClick: o
					}), r.a.createElement(M.b, {
						className: H.a.DropdownTriangle,
						onClick: o
					}), r.a.createElement(K, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(O.b, {
						displayText: G(q.a.First),
						isSelected: s === q.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(O.b, {
						displayText: G(q.a.Last),
						isSelected: s === q.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(O.b, {
						displayText: G(q.a.None),
						isSelected: s === q.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var V = X;
			const J = "CommentSort--SortPicker",
				Z = "CommentSort--HighlightPicker",
				Q = "CommentSort--Tooltip",
				Y = Object(v.a)(k.a),
				$ = Object(a.c)({
					commentPermalink: (e, {
						commentId: t
					}) => t && Object(z.m)(e, {
						commentId: t
					}),
					contestModeModalIsOpen: Object(A.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(L.b)(J),
					highlightIsOpen: Object(L.b)(Z),
					hasModeratorPostPermissions: (e, {
						postId: t
					}) => {
						const o = Object(B.l)(e, {
							postId: t
						});
						return !!o && o.posts
					},
					post: N.H,
					postPermalink: N.G,
					showCommentHighlighter: (e, {
						postId: t
					}) => {
						const o = Object(W.s)(e),
							n = !!Object(B.l)(e, {
								postId: t
							}),
							s = Object(N.H)(e, {
								postId: t
							});
						return (n || o) && !!s && !!s.previousVisits && s.previousVisits.length > 0
					},
					selectedHighlightSort: z.p
				}),
				ee = Object(i.b)($, (e, {
					postId: t
				}) => ({
					changeHighlightSort: t => e(Object(u.b)({
						sort: t
					})),
					onOpenDropdown: () => e(Object(l.h)({
						tooltipId: J
					})),
					onOpenHighlightDropdown: t => {
						e(Object(l.h)({
							tooltipId: Z
						})), t()
					},
					onSetSuggestedSort: o => e(x(t, o)),
					hideTooltip: () => e(Object(l.i)()),
					setContestMode: o => e(Object(p.W)(o, t)),
					showTooltip: () => e(Object(l.h)({
						tooltipId: Q
					})),
					toggleContestModeModal: () => e(Object(m.i)("CommentSort--ContestMode--Modal"))
				}));
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, o, n) => this.props.sendEvent(I(e, this.props.isOverlay, t, o, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(R("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(D(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
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
						showTooltip: j,
						toggleContestModeModal: k
					} = this.props, S = b.contestMode, I = !h.search.includes(d.u.CONFIDENCE), F = x === d.u.CONFIDENCE && I, D = m && !F, A = d.w[x], z = A ? A() : "", B = v && x === v && !F ? this.addSuggestedLabel(z) : z, N = S ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), L = S ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), W = S ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), U = S && !m;
					return r.a.createElement("div", {
						className: Object(c.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !g && U
						}),
						ref: a
					}, r.a.createElement("div", {
						className: H.a.containerRow
					}, !U && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.DropdownContainer
					}, r.a.createElement(O.b, {
						className: Object(c.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${B}`,
						id: J,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(M.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(Y, {
						isOpen: i,
						tooltipId: J
					}, [d.u.CONFIDENCE, d.u.TOP, d.u.NEW, d.u.CONTROVERSIAL, d.u.OLD, d.u.QA].map(e => {
						const t = o || f,
							n = Object(T.b)(t),
							s = d.w[e],
							i = s ? s() : "";
						return r.a.createElement(E.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, r.a.createElement(O.b, {
							displayText: i,
							isSelected: x === e,
							skipRoleAttr: !0
						}))
					}))), D && !U && (v ? r.a.createElement("button", {
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
						id: Q,
						onMouseEnter: j,
						onMouseLeave: l
					}, r.a.createElement(C.c, {
						className: H.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: Q
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
					}, r.a.createElement(V, {
						changeHighlightSort: e,
						highlightIsOpen: u,
						id: Z,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: _,
						trackHighlight: R
					})), s && r.a.createElement(y.a, {
						actionText: L,
						headerText: N,
						modalText: W,
						onConfirm: this.setContestMode,
						toggleModal: k,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(j.c)(te))
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
				openContributorRequestModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(d.c)(g))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = o("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = o("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				const {
					children: t,
					className: o,
					to: n,
					...r
				} = e, d = Object(a.b)(n);
				return s.a.createElement(i.a, c({
					className: o,
					to: d
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
				} = e, n = t ? d : r.a;
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
				E = x.a.div("Container", g.a),
				v = x.a.table("Table", g.a),
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
						i = n.fbt._("strikethrough", null, {
							hk: "UcaLr"
						}),
						u = n.fbt._("spoilers", null, {
							hk: "372XyC"
						});
					return r.a.createElement(c.a, null, r.a.createElement(a.a, {
						onClosePressed: this.props.closeModal,
						title: n.fbt._("Markdown Help", null, {
							hk: "w08E2"
						})
					}), r.a.createElement(E, null, r.a.createElement(v, {
						className: g.a.helpTable
					}, r.a.createElement("tr", null, r.a.createElement(d.s, null, r.a.createElement(d.j, null, n.fbt._("Type this:", null, {
						hk: "VDjXQ"
					}))), r.a.createElement(d.s, null, r.a.createElement(d.j, null, n.fbt._("to get this:", null, {
						hk: "4zlZi9"
					})))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "*", e, "*")), r.a.createElement(d.p, null, r.a.createElement(d.f, null, e))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "**", t, "**")), r.a.createElement(d.p, null, r.a.createElement(d.b, null, t))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "[reddit!](https://reddit.com)")), r.a.createElement(d.p, null, r.a.createElement(d.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "* ", o, " 1"), r.a.createElement(d.j, null, "* ", o, " 2"), r.a.createElement(d.j, null, "* ", o, " 3")), r.a.createElement(d.p, null, r.a.createElement(d.v, null, r.a.createElement(d.g, null, o, " 1"), r.a.createElement(d.g, null, o, " 2"), r.a.createElement(d.g, null, o, " 3")))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "> ", s)), r.a.createElement(d.p, null, r.a.createElement(d.c, null, s))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, "~~", i, "~~")), r.a.createElement(d.p, null, r.a.createElement(d.d, null, i))), r.a.createElement("tr", null, r.a.createElement(d.p, null, r.a.createElement(d.j, null, n.fbt._("super^script", null, {
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
					}))), r.a.createElement(C, null, r.a.createElement(f.a, null, r.a.createElement(h.l, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const O = Object(i.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(y))
			}))(k);
			t.a = Object(m.a)(Object(u.c)(O))
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
				E = o("./src/lib/lessComponent.tsx");
			const v = E.a.wrapped(f.a, "LoadingIcon", C.a),
				j = ({
					isFilled: e,
					...t
				}) => r.a.createElement(v, t),
				k = E.a.span("ModeDescription", C.a),
				O = E.a.div("ModeWrapper", C.a),
				w = E.a.wrapped(d.a, "MarkdownHelpButton", C.a),
				T = E.a.div("Toolbar", C.a),
				S = Object(a.c)({
					activeModalId: g.a,
					isConverting: e => Object(x.a)(e)
				}),
				I = Object(i.b)(S, (e, t) => ({
					onChange: o => {
						e(Object(c.c)(o)), t.onChange && t.onChange(o)
					},
					helpModalToggled: () => e(Object(c.z)(u.b)),
					switchToRTEModalToggled: () => e(Object(c.z)(m.a.SWITCH_TO_RTE_MODAL_ID))
				}));
			class R extends r.a.Component {
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
					}, r.a.createElement(T, null, r.a.createElement(O, null, r.a.createElement(k, null, n.fbt._("Markdown", null, {
						hk: "42KuwU"
					})), r.a.createElement(w, {
						onClick: this.props.helpModalToggled
					})), r.a.createElement(F, {
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
			const F = r.a.memo(({
				isConverting: e,
				onClick: t
			}) => {
				const o = n.fbt._("Switch to Fancy Pants Editor", null, {
					hk: "1AKY7t"
				});
				return r.a.createElement(b.t, {
					priority: b.c.Plain,
					size: b.d.XS,
					onClick: t,
					Icon: e ? j : void 0,
					text: o
				})
			});
			t.a = I(R)
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
				c = o("./src/reddit/controls/Button/index.tsx"),
				d = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = o("./src/reddit/controls/TextButton/index.tsx"),
				u = o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = o("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = o.n(m),
				h = o("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(c.l, "PrimaryButton", p.a),
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
				i = o.n(r),
				a = o("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
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
				E = o("./src/lib/memoizeByReference/index.ts"),
				v = o("./src/reddit/components/RichTextEditor/media/helpers.ts");
			const j = Object(E.a)((e, t) => {
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
					return e.image > C.ab && t.push(n.fbt._("Post may not contain more that 20 images", null, {
						hk: "1Szc36"
					})), e.video + e.gifvideo > C.db && t.push(n.fbt._("Post may not contain more that 5 videos", null, {
						hk: "2WhZ8k"
					})), t
				})(r)
			});
			var k = o("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				O = o("./src/reddit/components/RichTextEditor/index.tsx"),
				w = o("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				T = o("./src/reddit/contexts/PageLayer/index.tsx"),
				S = o("./src/reddit/controls/ErrorText/index.tsx"),
				I = o("./src/reddit/helpers/richTextEditor/index.ts"),
				R = o("./src/reddit/selectors/user.ts"),
				F = o("./src/reddit/controls/Button/index.tsx"),
				D = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				M = o("./src/reddit/components/PostEditForm/index.m.less"),
				P = o.n(M),
				A = o("./src/lib/lessComponent.tsx");
			const z = A.a.div("BottomRow", P.a),
				B = A.a.div("FormContent", P.a),
				N = A.a.wrapped(F.l, "SubmitButton", P.a),
				L = A.a.wrapped(D.a, "LoadingIcon", P.a),
				W = Object(T.u)(),
				U = Object(l.c)({
					destSubreddit: _.h,
					editorMode: _.i,
					errorMessages: _.j,
					hasError: _.k,
					markdownDraft: _.l,
					pending: _.ab,
					postRequirements: _.pb,
					rteDraft: _.m,
					subreddit: T.r,
					uploads: e => e.uploads,
					user: R.k,
					isCommentsPage: f.f
				}),
				H = Object(c.b)(U, (e, t) => ({
					onCancel: t => e(g.b(t)),
					onSubmitDraft: t => e(g.c(t)),
					onSuccess: t => e(Object(d.b)(t)),
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
						return o.isBound && e === h.i.RICH_TEXT ? j(t, o.editorState.getCurrentContent()) : []
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
					Object(p.e)(p.a.PostComposer)
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
					}), C = this.getMediaValidationErrors(), E = [...t, ...C];
					o && !E.length && E.push(n.fbt._("Something went wrong. Just don't panic.", null, {
						hk: "FsWrq"
					}));
					const v = !w.a.isAllMediaUploaded(g, l);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(B, null, e === h.i.RICH_TEXT ? a.a.createElement(O.a, {
						allowMediaUploads: !0,
						className: Object(u.a)(P.a.Editor, {
							[P.a.isPending]: !!i
						}),
						destSubreddit: this.props.destSubreddit,
						editorType: I.a.Post,
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
					}) : a.a.createElement(k.a, {
						initialHeight: this.state.editorHeight,
						instanceRef: this.setMarkdownEditorRef,
						disabled: !!i,
						value: p,
						onChange: this.onMarkdownPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: x
					}), a.a.createElement(z, null, a.a.createElement(F.r, {
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
						editKey: c.id,
						hasValue: !(!f && !_),
						isPostEdit: !0
					})), a.a.createElement(m.a, {
						postId: c.id,
						isCommentsPage: !!s
					}))
				}
			}
			t.default = W(H(q))
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./node_modules/lodash/sampleSize.js"),
				c = o.n(a),
				d = o("./src/reddit/helpers/getFakeUserIcons.ts"),
				l = o("./src/reddit/hooks/useConstructor.ts"),
				u = o("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = o.n(u);
			const p = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-UserIcon-PresenceDot",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => Promise.resolve().then(o.bind(null, "./src/reddit/components/UserIcon/PresenceDot.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return o(t)
					},
					resolve() {
						return "./src/reddit/components/UserIcon/PresenceDot.tsx"
					}
				}),
				h = 8,
				b = 20,
				f = 3,
				_ = e => {
					const {
						iconsKey: t,
						memberIconClassName: o,
						numVisibleIcons: n = f,
						presenceDotOutlineClassName: a,
						shouldShowPresenceDot: u,
						shouldUseColoredSilhouetteIcons: _,
						numIconsToDrawFrom: g = (_ ? h : b),
						wrapperClassName: x
					} = e, y = Object(s.useRef)([]);
					return Object(l.a)(() => {
						const e = Object(d.a)(t, g, _);
						y.current = c()(e, n)
					}), r.a.createElement("div", {
						className: Object(i.a)(m.a.membersIcons, x)
					}, y.current.map(({
						color: e,
						image: t
					}, s) => {
						return s === n - 1 && u ? r.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: s
						}, r.a.createElement("img", {
							className: Object(i.a)(m.a.memberIcon, o),
							src: t,
							style: {
								backgroundColor: e
							}
						}), r.a.createElement(p, {
							showPresence: !0,
							outlineClassName: a
						})) : r.a.createElement("img", {
							className: Object(i.a)(m.a.memberIcon, o),
							key: s,
							src: t,
							style: {
								backgroundColor: e
							}
						})
					}))
				};
			t.a = _
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, t, o) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e"
			}
		},
		"./src/reddit/components/ReadingIndicator/index.m.less": function(e, t, o) {
			e.exports = {
				readingIndicator: "_1uHz4YY7qiPGVa7nGIRrUX",
				isDisplayed: "_nvbopN4sT4l-fhb9ev1",
				offsetMembersIconsWrapper: "YvPNtp9JRY5iwtzRqupcd",
				offsetMemberIcon: "_1xtGJrgHGU1J3vR6qXj7Fh"
			}
		},
		"./src/reddit/components/ReadingIndicator/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "formatPresenceNumber", (function() {
				return f
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/prettyPrintNumber/index.ts"),
				r = o("./node_modules/lodash/noop.js"),
				i = o.n(r),
				a = o("./node_modules/react/index.js"),
				c = o.n(a),
				d = o("./src/realtime/GQLSubscription/async.tsx"),
				l = o("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				u = o("./src/reddit/helpers/trackers/post.ts"),
				m = o("./src/reddit/hooks/useClassNameOnMount.ts"),
				p = o("./src/reddit/hooks/useTracking.ts");
			var h = o("./src/reddit/components/ReadingIndicator/index.m.less"),
				b = o.n(h);
			const f = e => e > 9999 ? Object(s.b)(e) : e.toString();
			t.default = ({
				isReadingIndicatorsExperiment: e,
				isReadLoadTest: t,
				isWriteLoadTest: o,
				postId: s
			}) => {
				const r = Object(a.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: s
					}), [s]),
					h = Object(a.useMemo)(() => ({
						input: {
							channel: {
								...r,
								category: "USER_IS_READING_POST"
							}
						}
					}), [s]),
					_ = Object(a.useMemo)(() => ({
						input: {
							channel: {
								...r,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [s]),
					g = Object(a.useRef)(null),
					x = Object(a.useRef)(null),
					y = Object(a.useRef)(0),
					[C, E] = Object(a.useState)(0),
					v = Object(a.useCallback)(e => {
						const {
							numUsers: t
						} = e.subscribe.data, o = () => {
							x.current && clearTimeout(x.current), x.current = setTimeout(() => {
								E(0), O(null), x.current = null
							}, 3e4)
						}, n = () => setTimeout(() => {
							y.current ? (E(y.current), y.current = null, g.current = n(), o()) : g.current = null
						}, 2e3);
						g.current ? y.current = t : (E(t), y.current = null, g.current = n(), o())
					}, []),
					j = Object(a.useRef)(0),
					[k, O] = Object(a.useState)(null),
					w = Object(a.useRef)(null);
				Object(a.useEffect)(() => {
					if (!e) return void(k && O(null));
					if (C >= 5) return j.current = C, void(k || O(Date.now()));
					if (!k) return;
					const t = Date.now() - k;
					t >= 1e4 ? O(null) : w.current = setTimeout(() => O(null), 1e4 - t)
				}, [k, e, C]);
				const {
					className: T,
					shouldMount: S,
					onTransitionEnd: I
				} = Object(m.a)({
					defaultClass: b.a.readingIndicator,
					addedClass: b.a.isDisplayed,
					mountCondition: !!k
				}), R = Object(p.a)();
				return Object(a.useEffect)(() => {
					S && R(Object(u.q)(s, C))
				}, [R, S, s]), Object(a.useEffect)(() => () => {
					g.current && clearTimeout(g.current), x.current && clearTimeout(x.current), w.current && clearTimeout(w.current)
				}, []), c.a.createElement(c.a.Fragment, null, o && c.a.createElement(d.a, {
					variables: h,
					onData: i.a,
					queryKey: "userIsReadingPost"
				}), (t || e) && c.a.createElement(d.a, {
					variables: _,
					onData: e ? v : i.a,
					queryKey: "usersReadingIndicator"
				}), S && c.a.createElement("div", {
					className: T,
					onTransitionEnd: I
				}, n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", f(j.current))], {
					hk: "3foy5g"
				}), c.a.createElement(l.a, {
					memberIconClassName: b.a.offsetMemberIcon,
					iconsKey: s,
					numVisibleIcons: 2,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: b.a.offsetMembersIconsWrapper
				})))
			}
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
				c = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = o("./src/reddit/models/SubredditRestrictions/index.ts"),
				u = o("./src/reddit/selectors/platform.ts"),
				m = o("./src/reddit/selectors/subreddit.ts"),
				p = o("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = o.n(p);
			const b = c.a.wrapped(d.a, "Banner", h.a),
				f = Object(i.b)(() => Object(a.c)({
					restrictions: m.m,
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
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD",
				shouldPadContent: "_1BSXh-_TPEzV9jw2pP-m8p"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-autosize-textarea/lib/index.js"),
				i = o.n(r),
				a = o("./src/lib/classNames/index.ts"),
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
					className: Object(a.a)(d.a.editorWrapper, e),
					style: n ? {
						height: n
					} : void 0,
					ref: o
				}, t),
				m = ({
					isFullHeight: e,
					shouldPadContent: t,
					textAreaRef: o,
					...n
				}) => s.a.createElement(i.a, l({
					className: Object(a.a)(d.a.textareaAutosize, {
						[d.a.mIsFullHeight]: e,
						[d.a.shouldPadContent]: t
					}),
					innerRef: o
				}, n));
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
				isTypingIndicatorsSectionSpacer: "_3RZ1-Wt6sWIJ0Mf5OIXYvw",
				overflowPopupMenu: "_2PYNdBytF7RXrm9_YDl3WC"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return h
			})), o.d(t, "b", (function() {
				return b
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				a = o("./src/reddit/components/CollapseIntoOverflow/index.tsx"),
				c = o("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				d = o("./src/reddit/components/TypingIndicators/constants.ts"),
				l = o("./src/reddit/helpers/richTextEditor/index.ts"),
				u = o("./src/reddit/components/RichTextEditor/Toolbar/PowerupButtonsWrapper.tsx"),
				m = o("./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less"),
				p = o.n(m);
			const h = i.a.div("SectionSpacer", p.a);

			function b(e) {
				const {
					className: t,
					destSubreddit: o,
					editorKey: n,
					editorState: i,
					isTypingIndicatorsExperimentEnabled: m,
					onChange: b,
					onEmoteButtonClick: f,
					onGifButtonClick: _,
					onOverflowMenuClick: g,
					trackOnClick: x,
					onLinkButtonClick: y,
					userCanUseGifs: C,
					emojisEnabled: E,
					gifsEnabled: v,
					controlsState: j
				} = e, k = !m && (E || v);
				return s.a.createElement(a.a, {
					className: t,
					oveflowMenuDropdownId: n,
					onOverflowMenuClick: g,
					editorType: l.a.Comment,
					indexOfBreakpoint: m ? d.f : void 0,
					overflowMenuDropdownClassName: m ? p.a.overflowPopupMenu : void 0,
					overflowMenuTargetPosition: m ? ["left", "top"] : void 0,
					overflowMenuTooltipPosition: m ? ["left", "bottom"] : void 0,
					preventFocusScroll: m
				}, k && s.a.createElement(u.a, {
					controlsState: j,
					destSubreddit: o,
					emojisEnabled: !!E,
					gifsEnabled: !!v,
					isTypingIndicatorsExperimentEnabled: m,
					onEmoteButtonClick: f,
					onGifButtonClick: _,
					userCanUseGifs: C
				}), k && s.a.createElement(h, null), Object(c.i)(m ? c.h : c.g, j, i, b, x), s.a.createElement(c.a, {
					controlsState: j,
					trackOnClick: x,
					onLinkButtonClick: y
				}), Object(c.i)(m ? c.k : c.j, j, i, b, x), s.a.createElement(h, {
					className: Object(r.a)({
						[p.a.isTypingIndicatorsSectionSpacer]: m
					})
				}), Object(c.i)(m ? c.f : c.e, j, i, b, x), !m && s.a.createElement(h, null), s.a.createElement(c.d, {
					controlsState: j,
					editorState: i,
					trackOnClick: x,
					onChange: b
				}))
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
		"./src/reddit/components/RichTextEditor/Toolbar/PowerupButtonsWrapper.m.less": function(e, t, o) {
			e.exports = {
				powerupButtons: "_1luTyqJ-Q5JQ7xQePA0By1"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/PowerupButtonsWrapper.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return I
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/fbt/lib/FbtPublic.js"),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				d = o("./src/reddit/actions/tooltip.ts"),
				l = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = o("./src/reddit/constants/localStorage.ts"),
				m = o("./src/reddit/helpers/localStorage/index.ts"),
				p = o("./src/reddit/icons/svgs/Smile/index.tsx"),
				h = o("./src/reddit/selectors/gold/enabledFeatures.ts"),
				b = o("./src/reddit/selectors/gold/powerups/index.ts"),
				f = o("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				_ = o("./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less"),
				g = o.n(_);
			const x = 5,
				y = "ProwerupsEmoji--FirstUploadStimulus",
				C = 100;
			const E = Object(a.c)({
				emotes: (e, {
					subredditId: t
				}) => Object(h.a)(e, {
					subredditId: t
				}),
				customEmotes: (e, {
					subredditId: t
				}) => Object(b.i)(e, {
					subredditId: t
				}),
				userCanEditCustomEmojis: (e, {
					subredditId: t
				}) => !!t && Object(b.v)(e, {
					subredditId: t
				}),
				subredditHasPowerups: (e, {
					subredditId: t
				}) => Object(b.h)(e, {
					subredditId: t
				})
			});
			var v = Object(i.b)(E)((function(e) {
					const {
						controlsState: t,
						emotes: o,
						onEmoteButtonClick: a,
						userCanEditCustomEmojis: h,
						customEmotes: b,
						showEmoteMask: _ = !0,
						subredditHasPowerups: E,
						subredditId: v,
						useIconName: j
					} = e, k = v ? Object(m.j)(u.b.EMOJI_PROMO_TOOLTIP_DISPLAY_COUNT_PER_SUBREDDIT, v) : 0, O = E && k < x && h && 0 === b.length, [w, T] = Object(n.useState)(O), S = Object(i.d)();
					Object(n.useEffect)(() => {
						w && v && setTimeout(() => {
							Object(m.R)(u.b.EMOJI_PROMO_TOOLTIP_DISPLAY_COUNT_PER_SUBREDDIT, v), S(Object(d.f)({
								tooltipId: y
							}))
						}, C)
					}, [S, w, v]);
					const I = E ? r.fbt._("Add Emoji", null, {
						hk: "3EV4aU"
					}) : r.fbt._("Add Emote", null, {
						hk: "3dXLr8"
					});
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(l.c, {
						tooltipId: y,
						text: r.fbt._("NEW! Add custom emojis", null, {
							hk: "1C510K"
						}),
						className: g.a.addEmojiTooltip
					}), s.a.createElement("span", {
						id: y
					}, s.a.createElement(f.a, {
						Icon: j ? void 0 : () => s.a.createElement(p.a, {
							className: g.a.smile
						}),
						iconName: j ? "emoji" : void 0,
						tooltip: w ? void 0 : I,
						enabled: t.emote.isEnabled,
						onClick: e => {
							w && (S(Object(d.j)({
								tooltipId: y
							})), T(!1)), a(e)
						}
					}, _ && s.a.createElement("div", {
						className: Object(c.a)(g.a.emotes, {
							[g.a.emoteMask]: o.length > 1
						})
					}, o.map(e => s.a.createElement("img", {
						className: g.a.emote,
						key: e.id,
						src: e.emoji.path
					}))))))
				})),
				j = o("./src/lib/constants/icons.ts"),
				k = o("./src/reddit/components/RichTextEditor/Toolbar/GifButton/index.m.less"),
				O = o.n(k);

			function w(e) {
				const {
					controlsState: t,
					onGifButtonClick: o,
					useRainbowStyling: n = !0,
					userCanUseGifs: i
				} = e, a = t.giphy.isEnabled;
				return s.a.createElement(f.a, {
					iconName: j.a.gif_post,
					className: a && i && n ? O.a.rainbow : void 0,
					tooltip: r.fbt._("Add GIF", null, {
						hk: "3uH3vO"
					}),
					disabledTooltip: r.fbt._("Limit 1 GIF / comment", null, {
						hk: "7T6gq"
					}),
					enabled: a,
					onClick: o
				})
			}
			var T = o("./src/reddit/components/RichTextEditor/Toolbar/PowerupButtonsWrapper.m.less"),
				S = o.n(T);
			const I = ({
				controlsState: e,
				destSubreddit: t,
				emojisEnabled: o,
				gifsEnabled: n,
				isTypingIndicatorsExperimentEnabled: r,
				onEmoteButtonClick: i,
				onGifButtonClick: a,
				userCanUseGifs: c
			}) => s.a.createElement("div", {
				className: S.a.powerupButtons
			}, o && s.a.createElement(v, {
				controlsState: e,
				subredditId: null == t ? void 0 : t.id,
				onEmoteButtonClick: i,
				showEmoteMask: !r,
				useIconName: r
			}), n && s.a.createElement(w, {
				controlsState: e,
				onGifButtonClick: a,
				useRainbowStyling: !r,
				userCanUseGifs: c
			}))
		},
		"./src/reddit/components/TypingIndicators/index.m.less": function(e, t, o) {
			e.exports = {
				typingIndicatorsCommentForm: "_1CUqXo3RwypMOBdoAu5KeO",
				isOverlay: "_3azyTJy_p5TQz2a8drvrCn",
				typingIndicatorsEditorWrapper: "_1paAKKPtGRJjOsuHyySlbh",
				typingIndicatorsFooter: "CztRJhSeiKMRz9ISoV5Oo",
				fadeOut: "hxgpjMmP5DkIH9qjzKU76",
				typingIndicator: "xQIeDIIVr1yVZYxsz0ozp",
				isDisplayed: "_3SppaUc9TkqJc-zbqJt-3h",
				numUsersTyping: "_3TiTD1rBkrFHlvu6vJ2D_n",
				offsetMembersIcons: "CnV1Edi-ImN72TXNKOCUu",
				typingDots: "_3Sck3A9yG3NOFzt_N7zrlr",
				offsetMemberIcon: "KCCH40yFmIIE1YdtzgwrD"
			}
		},
		"./src/reddit/components/TypingIndicators/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./src/realtime/GQLSubscription/async.tsx"),
				a = o("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				c = o("./src/reddit/components/ReadingIndicator/index.tsx"),
				d = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				l = o("./src/reddit/selectors/telemetry.ts");
			const u = (() => (e, t) => o => ({
				source: d.a,
				action: "view",
				noun: "typing_indicator",
				...l.o(o),
				actionInfo: l.d(o, {
					reason: t.toString()
				}),
				post: l.I(o, e),
				subreddit: l.jb(o)
			}))();
			var m = o("./src/reddit/hooks/useClassNameOnMount.ts"),
				p = o("./src/reddit/hooks/useTracking.ts"),
				h = o("./src/reddit/components/TypingIndicators/constants.ts"),
				b = o("./src/reddit/components/TypingIndicators/index.m.less"),
				f = o.n(b);
			t.default = e => {
				const t = Object(s.useRef)(null),
					o = Object(s.useRef)(0),
					{
						minNumUsersTyping: d,
						minTimeVisible: l,
						postId: b
					} = e,
					[_, g] = Object(s.useState)(0),
					[x, y] = Object(s.useState)(null),
					C = Object(p.a)(),
					E = Object(s.useMemo)(() => ({
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "POST_TYPING_INDICATOR",
								postID: b
							}
						}
					}), [b]),
					v = Object(s.useRef)(null),
					j = Object(s.useRef)(null),
					k = Object(s.useRef)(0),
					O = Object(s.useCallback)(e => {
						const {
							numUsers: t
						} = e.subscribe.data, o = () => {
							j.current && clearTimeout(j.current), j.current = setTimeout(() => {
								g(0), y(null), j.current = null
							}, h.b)
						}, n = () => setTimeout(() => {
							k.current ? (g(k.current), k.current = null, v.current = n(), o()) : v.current = null
						}, h.a);
						v.current ? k.current = t : (g(t), k.current = null, v.current = n(), o())
					}, []);
				Object(s.useEffect)(() => {
					if (_ >= d) return o.current = _, void(x || (t.current && clearTimeout(t.current), y(Date.now())));
					if (!x) return;
					const e = Date.now() - x;
					e > l ? y(null) : t.current = setTimeout(() => y(null), l - e)
				}, [x, l, _, d]);
				const {
					className: w,
					shouldMount: T,
					onTransitionEnd: S
				} = Object(m.a)({
					defaultClass: f.a.typingIndicator,
					addedClass: f.a.isDisplayed,
					mountCondition: !!x
				});
				return Object(s.useEffect)(() => {
					T && C(u(b, _))
				}, [T, b, C]), Object(s.useEffect)(() => () => {
					v.current && clearTimeout(v.current), j.current && clearTimeout(j.current), t.current && clearTimeout(t.current)
				}, []), r.a.createElement(r.a.Fragment, null, r.a.createElement(i.a, {
					variables: E,
					onData: O,
					queryKey: "postTypingIndicator"
				}), T && r.a.createElement("div", {
					className: w,
					onTransitionEnd: S
				}, r.a.createElement(a.a, {
					iconsKey: b,
					memberIconClassName: f.a.offsetMemberIcon,
					numVisibleIcons: d,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: f.a.offsetMembersIcons
				}), r.a.createElement("div", {
					className: f.a.numUsersTyping
				}, n.fbt._("{number of people typing} people typing...", [n.fbt._param("number of people typing", Object(c.formatPresenceNumber)(o.current))], {
					hk: "31RibC"
				}))))
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/classNames/index.ts"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
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
			const f = Object(a.c)({
					currentUser: d.k,
					isNightMode: d.W,
					isPresenceUserPrefEnabled: d.O,
					shouldHideNSFW: d.C
				}),
				_ = Object(i.b)(f);
			t.a = _(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: o,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: i,
					...a
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(n.a)(h.a.currentUserIconWrapper, i)
				}, d ? r.a.createElement(u.a, {
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
				c = o.n(a);
			t.a = Object(n.memo)(Object(n.forwardRef)((e, t) => {
				const o = e.size || i.d.XS;
				return s.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[o], {
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
					onClick: () => !e.disabled && e.onToggle && e.onToggle(),
					ref: t
				}, s.a.createElement("div", {
					className: c.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/makeApiRequest/index.ts"),
				r = o("./src/lib/omitHeaders/index.ts"),
				i = o("./src/reddit/constants/headers.ts"),
				a = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = o("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, o) => {
				const d = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? d.richtext_json = o : d.markdown_text = o, Object(s.a)(Object(r.a)(e, [i.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: n.jb.POST,
					data: d
				})
			}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts");
			t.a = () => ({
				type: s.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/lodash/memoize.js"),
				s = o.n(n),
				r = o("./src/reddit/constants/categories.tsx"),
				i = o("./src/config.ts");
			const a = Array.from({
					length: 20
				}).map((e, t) => `${i.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				c = Array.from({
					length: 8
				}).map((e, t) => `${i.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`),
				d = [];
			t.a = s()((e, t = 3, o) => {
				if (!e || !t) return d;
				const n = o ? c : a,
					s = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: r.a[(s + t) % r.a.length],
					image: n[(s + t) % n.length]
				}))
			}, (e, t = 3) => `${e}_${t}`)
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			})), o.d(t, "g", (function() {
				return m
			})), o.d(t, "i", (function() {
				return p
			})), o.d(t, "c", (function() {
				return h
			})), o.d(t, "f", (function() {
				return b
			})), o.d(t, "b", (function() {
				return f
			})), o.d(t, "d", (function() {
				return _
			})), o.d(t, "e", (function() {
				return g
			})), o.d(t, "h", (function() {
				return x
			}));
			var n = o("./src/reddit/constants/tracking.ts"),
				s = o("./src/reddit/helpers/correlationIdTracker.ts"),
				r = o("./src/reddit/models/PostDraft/index.ts"),
				i = o("./src/reddit/selectors/comments.ts"),
				a = o("./src/reddit/selectors/platform.ts"),
				c = o("./src/reddit/selectors/telemetry.ts"),
				d = o("./src/telemetry/index.ts");
			const l = "comment_composer",
				u = e => {
					const t = Object(a.o)(e);
					return {
						source: l,
						action: n.c.CLICK,
						...Object(c.o)(e),
						screen: Object(c.ab)(e),
						subreddit: Object(c.jb)(e),
						post: t ? Object(c.I)(e, t) : null,
						profile: Object(c.R)(e),
						correlationId: Object(s.c)(s.a.CommentComposer)
					}
				},
				m = async (e, t, n, s) => {
					const r = {
							commentId: s,
							commentsPageKey: n
						},
						a = s && Object(i.j)(e, r) || 0,
						{
							getFlairData: l
						} = await o.e("getFlairData").then(o.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(d.a)({
						noun: "comment",
						...u(e),
						comment: s ? Object(c.j)(e, s) : null,
						listing: Object(c.z)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: l(e)
					})
				}, p = (e, t, o, n) => {
					const s = u(e);
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
				}, h = e => Object(d.a)({
					noun: "cancel",
					...u(e)
				}), b = (e, t) => {
					t === r.c.replyToPost && Object(d.a)({
						noun: "input",
						...u(e)
					})
				}, f = (e, t) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.o)(t),
					screen: Object(c.ab)(t),
					subreddit: Object(c.jb)(t),
					post: Object(c.I)(t, e)
				}), _ = e => Object(d.a)({
					noun: "edit",
					...u(e)
				}), g = e => Object(d.a)({
					noun: "save_edit",
					...u(e)
				}), x = (e, t) => o => {
					const n = "image_upload" === e || "video_upload" === e;
					return {
						...u(o),
						noun: n ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}
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
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o("./src/lib/classNames/index.ts");
			t.a = ({
				defaultClass: e,
				addedClass: t,
				mountCondition: o
			}) => {
				const [r, i] = Object(n.useState)(e), [a, c] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					o && c(!0)
				}, [o]), Object(n.useEffect)(() => {
					a && (o ? window.setTimeout(() => {
						i(Object(s.a)(e, t))
					}, 100) : i(e))
				}, [t, e, o, a]);
				const d = Object(n.useCallback)(() => {
					o || c(!1)
				}, [o]);
				return {
					className: r,
					shouldMount: a,
					onTransitionEnd: d
				}
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			}));
			var n = o("./node_modules/react/index.js");

			function s(e) {
				const t = Object(n.useRef)(!1);
				t.current || (e(), t.current = !0)
			}
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
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = o.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...o
			}) => s.a.createElement("svg", c({
				className: Object(r.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
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
				i = o("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.J, i.I, (e, t) => e || t),
				c = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.K
				}), e => e === s.T.Enabled)
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RichTextEditor.5f24998fece2b03fec0d.js.map