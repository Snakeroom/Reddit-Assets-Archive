// https://www.redditstatic.com/desktop2x/RichTextEditor.8b3c4aac26fe99bf1c32.js
// Retrieved at 10/13/2022, 2:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RichTextEditor", "ContributorRequestButton"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, n) {
			var o, r, s;
			r = [t, e], void 0 === (s = "function" == typeof(o = function(e, t) {
				"use strict";
				var n, o, r = "function" == typeof Map ? new Map : (n = [], o = [], {
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
					s = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (l) {
					s = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function i(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !r.has(e)) {
						var t, n = null,
							o = e.clientWidth,
							i = null,
							a = function() {
								e.clientWidth !== o && u()
							},
							c = function(t) {
								window.removeEventListener("resize", a, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", c, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(n) {
									e.style[n] = t[n]
								})), r.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", c, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", a, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", r.set(e, {
							destroy: c,
							update: u
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), n = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(n) && (n = 0), u()
					}

					function d(t) {
						var n = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
					}

					function l() {
						var t = e.style.height,
							r = function(e) {
								for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
									node: e.parentNode,
									scrollTop: e.parentNode.scrollTop
								}), e = e.parentNode;
								return t
							}(e),
							s = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var i = e.scrollHeight + n;
						0 !== e.scrollHeight ? (e.style.height = i + "px", o = e.clientWidth, r.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), s && (document.documentElement.scrollTop = s)) : e.style.height = t
					}

					function u() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							n = window.getComputedStyle(e, null),
							o = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
						if (o !== t ? "hidden" === n.overflowY && (d("scroll"), l(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (d("hidden"), l(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), i !== o) {
							i = o;
							var r = s("autosize:resized");
							try {
								e.dispatchEvent(r)
							} catch (a) {}
						}
					}
				}

				function a(e) {
					var t = r.get(e);
					t && t.destroy()
				}

				function c(e) {
					var t = r.get(e);
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
			}) ? o.apply(t, r) : o) || (e.exports = s)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, n) {
				return ((n = window.getComputedStyle) ? n(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/line-height/lib/line-height.js": function(e, t, n) {
			var o = n("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = o(e, "line-height"),
					n = parseFloat(t, 10);
				if (t === n + "") {
					var r = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = o(e, "line-height"), n = parseFloat(t, 10), r ? e.style.lineHeight = r : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (n *= 4, n /= 3) : -1 !== t.indexOf("mm") ? (n *= 96, n /= 25.4) : -1 !== t.indexOf("cm") ? (n *= 96, n /= 2.54) : -1 !== t.indexOf("in") ? n *= 96 : -1 !== t.indexOf("pc") && (n *= 16), n = Math.round(n), "normal" === t) {
					var s = e.nodeName,
						i = document.createElement(s);
					i.innerHTML = "&nbsp;", "TEXTAREA" === s.toUpperCase() && i.setAttribute("rows", "1");
					var a = o(e, "font-size");
					i.style.fontSize = a, i.style.padding = "0px", i.style.border = "0px";
					var c = document.body;
					c.appendChild(i), n = i.offsetHeight, c.removeChild(i)
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

			function r(e) {
				return Object.prototype.toString.call(e)
			}

			function s(e) {
				return "[object Function]" === r(e)
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
				d = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function u(e) {
				var t = e.re = n("./node_modules/linkify-it/lib/re.js")(e.__opts__),
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
					var n = e.__schemas__[t];
					if (null !== n) {
						var o = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = o, "[object Object]" === r(n)) return ! function(e) {
							return "[object RegExp]" === r(e)
						}(n.validate) ? s(n.validate) ? o.validate = n.validate : l(t, n) : o.validate = function(e) {
							return function(t, n) {
								var o = t.slice(n);
								return e.test(o) ? o.match(e)[0].length : 0
							}
						}(n.validate), void(s(n.normalize) ? o.normalize = n.normalize : n.normalize ? l(t, n) : o.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === r(e)
						}(n) ? l(t, n): c.push(t)
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
				var n = e.__index__,
					o = e.__last_index__,
					r = e.__text_cache__.slice(n, o);
				this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = o + t, this.raw = r, this.text = r, this.url = r
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
				}), !1) && (t = e, e = {})), this.__opts__ = o({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = o({}, c, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, u(this)
			}
			h.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, u(this), this
			}, h.prototype.set = function(e) {
				return this.__opts__ = o(this.__opts__, e), this
			}, h.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, n, o, r, s, i, a, c;
				if (this.re.schema_test.test(e))
					for ((a = this.re.schema_search).lastIndex = 0; null !== (t = a.exec(e));)
						if (r = this.testSchemaAt(e, t[2], a.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (s = n.index + n[1].length, (this.__index__ < 0 || s < this.__index__) && (this.__schema__ = "", this.__index__ = s, this.__last_index__ = n.index + n[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (o = e.match(this.re.email_fuzzy)) && (s = o.index + o[1].length, i = o.index + o[0].length, (this.__index__ < 0 || s < this.__index__ || s === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = s, this.__last_index__ = i)), this.__index__ >= 0
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
		"./node_modules/lodash/flatMap.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseFlatten.js"),
				r = n("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return o(r(e, t), 1)
			}
		},
		"./node_modules/lodash/map.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayMap.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/_baseMap.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? o : s)(e, r(t, 3))
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var o, r, s = Object.assign || function(e) {
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
				c = u(n("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				d = u(n("./node_modules/autosize/dist/autosize.js")),
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
			var h = (r = o = function(e) {
				function t() {
					var e, n, o;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
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
							r = (t.onChange, t.style),
							i = (t.innerRef, m(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							a = e.state.lineHeight,
							c = e.saveDOMNodeRef,
							d = n && a ? a * n : null;
						return s({}, i, {
							saveDOMNodeRef: c,
							style: d ? s({}, r, {
								maxHeight: d
							}) : r,
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
							return (0, d.default)(e.textarea)
						}))) : (0, d.default)(this.textarea), n && this.textarea.addEventListener("autosize:resized", this.props.onResize)
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
						return a.default.createElement("textarea", s({}, o, {
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
			}, r);
			t.default = h, h.propTypes = {
				rows: c.default.number,
				maxRows: c.default.number,
				onResize: c.default.func,
				innerRef: c.default.func
			}
		},
		"./node_modules/react-autosize-textarea/lib/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var o, r = n("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				s = (o = r) && o.__esModule ? o : {
					default: o
				};
			t.default = s.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function s() {}
			s.resetWarningCache = r, e.exports = function() {
				function e(e, t, n, r, s, i) {
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
					checkPropTypes: s,
					resetWarningCache: r
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
		"./src/lib/scroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var o = n("./src/lib/domUtils/index.ts"),
				r = n("./src/lib/fastdom/index.ts"),
				s = n("./src/reddit/components/CommentSort/index.tsx"),
				i = n("./src/reddit/constants/elementIds.ts");
			const a = () => {
					r.a.write(() => {
						const e = document.getElementById(i.e);
						e ? Object(o.c)(e, 0) : Object(o.c)(document, 0)
					})
				},
				c = e => {
					r.a.read(() => {
						const t = e ? document.getElementById(i.e) : window,
							n = document.getElementById(s.a);
						if (t && n) {
							const o = e ? n.offsetTop : n.offsetTop - 50;
							r.a.write(() => t.scrollTo({
								top: o,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return fe
			})), n.d(t, "r", (function() {
				return xe
			})), n.d(t, "p", (function() {
				return ye
			})), n.d(t, "t", (function() {
				return Oe
			})), n.d(t, "w", (function() {
				return ve
			})), n.d(t, "q", (function() {
				return ke
			})), n.d(t, "v", (function() {
				return Te
			})), n.d(t, "o", (function() {
				return Se
			})), n.d(t, "m", (function() {
				return Me
			})), n.d(t, "b", (function() {
				return Fe
			})), n.d(t, "c", (function() {
				return Ae
			})), n.d(t, "s", (function() {
				return Be
			})), n.d(t, "g", (function() {
				return ze
			})), n.d(t, "h", (function() {
				return Ne
			})), n.d(t, "k", (function() {
				return Le
			})), n.d(t, "e", (function() {
				return We
			})), n.d(t, "d", (function() {
				return Ge
			})), n.d(t, "a", (function() {
				return Ve
			})), n.d(t, "j", (function() {
				return Xe
			})), n.d(t, "i", (function() {
				return Ye
			})), n.d(t, "l", (function() {
				return $e
			})), n.d(t, "u", (function() {
				return et
			})), n.d(t, "n", (function() {
				return tt
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeDraftKey/index.ts"),
				a = n("./src/lib/scroll/index.ts"),
				c = n("./src/reddit/actions/changeUsername.ts"),
				d = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/onboarding/index.ts"),
				m = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/postCreation/editorContent.ts"),
				h = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				g = n("./src/reddit/constants/adEvents.ts"),
				_ = n("./src/reddit/constants/localStorage.ts"),
				x = n("./src/redditGQL/operations/CommentToxicity.json"),
				y = n("./src/lib/makeApiRequest/index.ts"),
				C = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/lib/omitHeaders/index.ts"),
				O = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				v = n("./src/reddit/constants/headers.ts"),
				k = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				j = n("./src/reddit/helpers/genericServerError/index.ts"),
				w = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				T = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				D = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				M = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				R = n("./src/reddit/helpers/graphql/helpers.ts"),
				F = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				I = n("./src/redditGQL/operations/CreateComment.json");
			const P = (e, t, n, o) => {
					let r, s;
					if (o === S.i.MARKDOWN) r = n.text, s = null;
					else {
						r = null;
						let e = null;
						n.rteState && (e = O.a.toRichTextJSON(n.rteState).document), s = JSON.stringify({
							document: e
						})
					}
					return Object(C.a)(e, {
						...x,
						variables: {
							subredditName: t,
							markdown: r,
							richText: s
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				A = async (e, t, n, o) => {
					const s = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return n.commentMode === S.i.MARKDOWN ? s.text = n.text : (s.text = null, s.richtext_json = o), Object(y.a)(Object(E.a)(e, [v.a]), {
						method: r.ob.POST,
						endpoint: Object(k.a)(Object(D.a)(Object(M.a)(`${e.apiUrl}/api/comment.json`))),
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
						error: e.error || Object(j.a)()
					})
				}, B = async (e, t, n, o, r) => {
					const s = o.commentMode === S.i.MARKDOWN,
						i = {
							postId: t || null,
							parentId: n || null,
							content: {
								markdown: s ? o.text : null,
								richText: s ? null : r
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
								error: Object(R.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(R.f)(t.errors)
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
							error: e.error || Object(j.a)()
						}
					})
				};
			var z = n("./src/redditGQL/operations/UpdateComment.json");
			var N = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var L = n("./src/reddit/endpoints/post/index.tsx"),
				U = n("./src/reddit/endpoints/post/convert.ts"),
				W = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				H = n("./src/reddit/featureFlags/index.ts"),
				K = n("./src/reddit/helpers/comment/index.ts"),
				q = n("./src/reddit/helpers/correlationIdTracker.ts"),
				G = n("./src/reddit/helpers/dom/index.ts"),
				V = n("./src/reddit/helpers/localStorage/index.ts"),
				X = n("./src/reddit/helpers/sessionStorage/index.ts"),
				J = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				Q = n("./src/reddit/models/Comment/index.ts"),
				Z = n("./src/reddit/models/PostDraft/index.ts"),
				Y = n("./src/reddit/models/RichTextJson/index.ts"),
				$ = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				ee = n("./src/reddit/models/Toast/index.ts"),
				te = n("./src/reddit/selectors/chatPost.ts"),
				ne = n("./src/reddit/selectors/comments.ts"),
				oe = n("./src/reddit/selectors/commentSelector.ts"),
				re = n("./src/reddit/selectors/experiments/chat.ts"),
				se = n("./src/reddit/constants/experiments.ts"),
				ie = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ae = n("./node_modules/reselect/es/index.js");
			const ce = Object(ae.a)(e => Object(ie.c)(e, {
				experimentEligibilitySelector: ie.a,
				experimentName: se.Kb
			}), e => e === se.Sd);
			var de = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				le = n("./src/reddit/selectors/platform.ts"),
				ue = n("./src/reddit/selectors/posts.ts"),
				me = n("./src/reddit/selectors/user.ts"),
				pe = n("./src/reddit/actions/comment/index.ts"),
				he = n("./src/reddit/actions/comment/constants.ts");
			const be = Object(s.a)(he.m),
				fe = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, o) => {
						const r = o();
						if (!!r.features.comments.drafts[n])
							if (Object(me.S)(r) && t) {
								const o = be({
									hasFocus: t,
									draftKey: n
								});
								e(Object(c.startChangeUsernameFlow)(o))
							} else e(be({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				ge = Object(s.a)(he.L),
				_e = Object(s.a)(he.H),
				xe = Object(s.a)(he.N),
				ye = Object(s.a)(he.M),
				Ce = Object(s.a)(he.K),
				Ee = async (e, t, n, o) => {
					const r = o.ok && o.body,
						s = r && r.comment && r.comment.id;
					await J.f(e, n, t, s)
				}, Oe = "Toxicity_Warning__Modal", ve = e => async (t, n, o) => {
					let {
						gqlContext: r
					} = o;
					const s = n(),
						i = Object(le.e)(s);
					let a = "";
					i && (a = i.name);
					const {
						formData: c,
						editorMode: d
					} = e;
					if (H.d.enableToxicityWarning(s)) {
						if (!(await P(r(), a, c, d))) return void t(Object(l.i)(Oe))
					}
					t(ke(e))
				}, ke = e => async (t, n) => {
					t(Object(l.g)(Oe));
					const o = n(),
						r = Object(de.a)(o),
						s = Object(de.c)(o);
					if (!o.user.account && r) {
						const n = Object(K.e)(e.formData, o.uploads),
							r = Object(K.c)(e.formData);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(X.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else t(we(e, !1))
				};

			function je(e, t) {
				return e === S.i.MARKDOWN && ce(t)
			}
			const we = (e, t, n, s) => {
					let {
						postId: i,
						commentsPageKey: c,
						draftKey: d,
						formData: l,
						editorMode: u,
						disableAutofocus: p,
						isLiveStreaming: _
					} = e;
					return async (e, x, y) => {
						let {
							apiContext: C,
							gqlContext: E
						} = y;
						var O;
						const v = x(),
							k = Object(te.d)(v, {
								postId: i
							}) && Object(re.g)(v),
							j = k ? Object(K.a)() : d,
							w = Object(oe.e)(v, {
								commentId: j
							}),
							T = Object(me.k)(v);
						if (!T) return;
						if (w && !k) return;
						t || e(ge({
							draftKey: j,
							draft: l,
							commentsPageKey: c,
							optimisticComment: k ? Object(K.b)({
								temporalId: j,
								draft: l,
								post: Object(ue.G)(v, {
									postId: i
								}),
								author: T,
								subredditId: (null === (O = Object(le.e)(v)) || void 0 === O ? void 0 : O.id) || ""
							}) : void 0
						}));
						const D = T.displayText,
							M = l.commentMode;
						let R;
						if (_) R = await Object(W.i)(C(), i, l, D), e(Object(h.a)({
							streamId: i,
							level: R.body.automuteLevel
						}));
						else {
							const e = t && n ? n : Object(K.e)(l, v.uploads);
							R = je(M, v) ? await B(E(), i, null, l, e) : await A(C(), i, l, e)
						}
						if (R.ok) {
							let n;
							if (n = R.body, e(xe({
									...n,
									headCommentId: Object(ne.w)(v, {
										commentsPageKey: c
									}),
									commentsPageKey: c,
									draftKey: j
								})), t) {
								const e = Object(le.i)(v);
								Object(a.a)(!!e)
							}
							const o = Object(ue.G)(x(), {
								postId: i
							});
							e(Object(m.y)(o, g.a.CommentSubmitted))
						} else {
							if (R.error && R.error.type === r.Pb) {
								const e = t && s ? s : Object(K.c)(l);
								J.j(v, e, i)
							}
							const n = R.error && R.error.fields && R.error.fields[0] ? R.error.fields[0].msg : o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(Ce({
								draftKey: j,
								error: R.error
							})), k || e(Object(f.f)({
								duration: f.a,
								kind: ee.b.Error,
								text: n
							}))
						}
						Ee(x(), c, u, R).then(() => R.ok && u === S.i.RICH_TEXT ? Object(q.b)(q.a.CommentComposer) : void 0), p || Object(b.d)(), t && Object(X.a)()
					}
				},
				Te = e => async (t, n, o) => {
					let {
						gqlContext: r
					} = o;
					const {
						parentCommentId: s,
						commentsPageKey: i,
						parentCommentDepth: a,
						draftKey: c,
						formData: d,
						editorMode: u
					} = e, m = n(), p = Object(le.e)(m);
					let h = "";
					if (p && (h = p.name), H.d.enableToxicityWarning(m)) {
						if (!(await P(r(), h, d, u))) return void t(Object(l.i)(Oe))
					}
					t(Se({
						commentsPageKey: i,
						draftKey: c,
						parentCommentDepth: a,
						parentCommentId: s,
						formData: d,
						editorMode: u
					}))
				}, Se = e => async (t, n) => {
					t(Object(l.g)(Oe));
					const o = n(),
						r = Object(de.a)(o),
						s = Object(de.c)(o);
					if (!o.user.account && r) {
						const n = Object(K.e)(e.formData, o.uploads),
							r = Object(K.c)(e.formData);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(X.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: r
							},
							isSkipOnboarding: s
						})
					} else t(De(e, !1))
				}, De = (e, t, n, o) => async (s, i, c) => {
					let {
						apiContext: d,
						gqlContext: l
					} = c;
					var u;
					const {
						parentCommentId: m,
						commentsPageKey: p,
						parentCommentDepth: h,
						draftKey: f,
						formData: g,
						editorMode: _
					} = e, x = i(), y = Object(oe.b)(x, {
						commentId: m
					}), C = y && Object(te.d)(x, {
						postId: y.postId
					}) && Object(re.g)(x), E = C ? Object(K.a)() : f, O = Object(oe.e)(x, {
						commentId: E
					}), v = Object(me.k)(x);
					if (!v) return;
					if (O && !C) return;
					t || s(ge({
						draftKey: E,
						draft: g,
						commentsPageKey: p,
						optimisticComment: C && y ? Object(K.b)({
							temporalId: E,
							draft: g,
							post: Object(ue.G)(x, {
								postId: y.postId
							}),
							author: v,
							subredditId: (null === (u = Object(le.e)(x)) || void 0 === u ? void 0 : u.id) || "",
							parentId: y.id
						}) : void 0
					})), s(Fe({
						parentCommentId: m,
						commentsPageKey: p
					}));
					const k = g.commentMode,
						j = t && n ? n : Object(K.e)(g, x.uploads);
					let w;
					if ((w = je(k, x) ? await B(l(), null, m, g, j) : await A(d(), m, g, j)).ok) {
						if (s(ye({
								...w.body,
								parentCommentId: m,
								commentsPageKey: p,
								draftKey: E,
								depth: h + 1
							})), t) {
							const e = Object(le.i)(x);
							Object(a.a)(!!e)
						}
					} else {
						if (w.error && w.error.type === r.Pb) {
							if (!y) return;
							const e = t && o ? o : Object(K.c)(g);
							J.j(x, e, y.postId, m)
						}
						s(Ce({
							draftKey: E,
							error: w.error
						}))
					}
					Ee(i(), p, _, w), Object(b.d)(), t && Object(X.a)()
				}, Me = () => async e => {
					const t = Object(X.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: n,
								parentCommentId: o,
								postId: r,
								richTextJSONData: s,
								commentBodyText: i
							},
							isSkipOnboarding: a
						} = t;
						a && e(Object(u.skipOnboardingModal)()), r ? await e(we({
							...t.comment,
							postId: r
						}, !0, s, i)) : o && void 0 !== n && await e(De({
							...t.comment,
							parentCommentId: o,
							parentCommentDepth: n
						}, !0, s, i))
					}
				}, Re = Object(s.a)(he.s), Fe = Object(s.a)(he.r), Ie = Object(s.a)(he.n), Pe = (Object(s.a)(he.i), Object(s.a)(he.o)), Ae = (Object(s.a)(he.v), (e, t, n) => async (r, s, i) => {
					let {
						apiContext: a
					} = i;
					const c = e === S.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(Y.G)(t)) r(Pe({
						editorMode: e,
						draftKey: n,
						content: c ? Y.i : ""
					})), r(Object(p.c)(e));
					else {
						r(Object(p.b)(n));
						const s = await Object(U.a)(a(), e, c ? t : JSON.stringify(t));
						if (s.ok) {
							const t = s.body.output;
							r(Object(p.a)(n)), r(Pe({
								editorMode: e,
								draftKey: n,
								content: t
							})), r(Object(p.c)(e))
						} else r(Object(p.a)(n)), r(Object(f.f)({
							duration: f.a,
							kind: ee.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Be = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: o
					} = e;
					return async (e, r) => {
						const s = r(),
							a = Object(i.a)(Z.c.replyToComment, n);
						if (!Object(me.Q)(r()) && !Object(de.a)(s)) return e(Object(d.openRegisterModal)()), void e(Object(l.k)({
							actionSource: l.a.Reply,
							redirectUrl: Object(ne.m)(r(), {
								commentId: n
							})
						}));
						const u = s.features.comments.replyFormOpen[t],
							m = u && u[n];
						if ((m || u && o) && (Object.keys(u).forEach(n => u[n] && e(Fe({
								parentCommentId: n,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							h = null;
						const b = s.user.prefs.commentMode,
							f = Object(G.d)();
						if (f) {
							const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (b === S.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => $.s(e, null)).map(e => $.l([e])),
									n = $.s("", null),
									o = $.l([n]);
								h = {
									document: [$.c(t), o]
								}
							}
						}
						const g = s.features.comments.drafts[a];
						let _;
						if (_ = f ? {
								commentMode: b,
								draftType: Z.c.replyToComment,
								rtJson: h,
								text: `${p}\n`
							} : g || {
								commentMode: b,
								draftType: Z.c.replyToComment,
								rtJson: h,
								text: ""
							}, Object(me.S)(s)) {
							const o = Re({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: a,
								formData: _
							});
							e(Object(c.startChangeUsernameFlow)(o))
						} else e(Re({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: a,
							formData: _
						}))
					}
				}, ze = e => async t => {
					t(Object(pe.r)(e)), t(We(e))
				}, Ne = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(Fe({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Be({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(pe.r)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, Le = (e, t) => n => n(Ie({
					draftKey: e,
					formData: t
				})), Ue = Object(s.a)(he.u), We = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: o,
						draftKey: r,
						text: s
					} = e;
					return async (e, i) => {
						const a = i();
						a.user.account && (J.c(a), e(Ue({
							commentId: t,
							commentsPageKey: o,
							draftKey: r,
							formData: {
								text: s,
								commentMode: n,
								rteState: null,
								draftType: Z.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, He = Object(s.a)(he.F), Ke = Object(s.a)(he.E), qe = Object(s.a)(he.G), Ge = Object(s.a)(he.j), Ve = Object(s.a)(he.f), Xe = e => {
					let {
						id: t,
						commentsPageKey: n,
						draftKey: o,
						formData: s
					} = e;
					return async (e, i, a) => {
						let {
							apiContext: c,
							gqlContext: d
						} = a;
						const l = i();
						if (!l.user.account) return;
						e(He({
							draftKey: o
						})), J.d(l);
						const u = Object(K.e)(s, l.uploads),
							m = s.commentMode;
						let p;
						if ((p = je(m, l) ? await (async (e, t, n, o, r) => {
								const s = r === S.i.MARKDOWN,
									i = {
										commentId: t,
										content: {
											markdown: s ? n.text : null,
											richText: s ? null : o
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
											error: Object(R.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(R.f)(t.errors)
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
										error: e.error || Object(j.a)()
									}
								})
							})(d(), t, s, u, m) : await (async (e, t, n, o, s) => {
								const i = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return s === S.i.MARKDOWN ? i.text = n.text : (i.text = null, i.richtext_json = o), Object(y.a)(Object(E.a)(e, [v.a]), {
									endpoint: Object(k.a)(Object(M.a)(Object(D.a)(`${e.apiUrl}/api/editusertext`))),
									method: r.ob.POST,
									data: i
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
									error: e.error || Object(j.a)()
								})
							})(c(), t, s, u, m)).ok) {
							const r = p.body;
							e(qe({
								commentId: t,
								commentsPageKey: n,
								draftKey: o
							})), e(Object(pe.j)({
								[t]: {
									...r.comment
								}
							}))
						} else e(Ke({
							draftKey: o,
							error: p.error
						}))
					}
				}, Je = Object(s.a)(he.C), Qe = Object(s.a)(he.B), Ze = Object(s.a)(he.D), Ye = (e, t) => async (n, o, s) => {
					let {
						apiContext: i
					} = s;
					const a = o();
					n(Je({
						id: e
					})), J.a(e, a);
					const c = await ((e, t) => Object(y.a)(Object(E.a)(e, [v.a]), {
						endpoint: Object(k.a)(`${e.apiUrl}/api/del`),
						method: r.ob.POST,
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
						error: e.error || Object(j.a)()
					}))(i(), e);
					c.ok ? n(Ze({
						id: e,
						postId: t
					})) : n(Qe({
						id: e,
						error: c.error
					}))
				}, $e = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const s = !n().features.comments.models[e].sendReplies;
					t(Object(pe.j)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(L.s)(r(), e, s)).ok || t(Object(pe.j)({
						[e]: {
							sendReplies: !s
						}
					}))
				}, et = (e, t) => async (n, r, s) => {
					let {
						gqlContext: i
					} = s;
					var a, c, d, l, u, m;
					n(Object(pe.c)());
					const p = e => Object(f.f)(Object(f.e)(e, ee.b.Error));
					if (((null === (c = null === (a = r().pages) || void 0 === a ? void 0 : a.comments) || void 0 === c ? void 0 : c.followed) || []).length === _.a) n(p(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const s = t === Q.a.FOLLOWED,
							a = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(pe.p)(a)), (await ((e, t) => Object(C.a)(e, {
								...N,
								variables: {
									input: t
								}
							}))(i(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(V.ub)(null !== (u = null === (l = null === (d = r().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== u ? u : [], null === (m = r().user.account) || void 0 === m ? void 0 : m.id);
							const e = s ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(f.f)({
								kind: ee.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(pe.p)(a)), n(p(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function tt(e) {
				let {
					commentId: t,
					commentsPageKey: n,
					isLivestreaming: o = !1
				} = e;
				return async (e, r) => {
					const s = r(),
						i = Object(oe.b)(s, {
							commentId: t
						});
					if (!i) return;
					e(_e({
						commentId: t,
						commentsPageKey: n
					}));
					const a = {
						commentMode: i.media.rteMode,
						draftType: i.parentId ? Z.c.replyToComment : Z.c.replyToPost,
						rtJson: i.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (i.parentId) {
						const t = Object(oe.b)(s, {
								commentId: i.parentId
							}),
							o = Object(ne.j)(s, {
								commentId: i.parentId,
								commentLink: void 0,
								commentsPageKey: n
							});
						if (!t || null === o) return;
						await e(Se({
							commentsPageKey: n,
							draftKey: i.id,
							parentCommentDepth: o,
							parentCommentId: t.id,
							formData: a,
							editorMode: i.media.rteMode
						}))
					} else await e(ke({
						postId: i.postId,
						commentsPageKey: n,
						draftKey: i.id,
						formData: a,
						editorMode: i.media.rteMode,
						disableAutofocus: !0,
						isLiveStreaming: o
					}))
				}
			}
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			}));
			const o = "ECONOMICS__ME__ME_DATA_SUCCESS",
				r = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				s = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				s = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(a.a)(c.a),
				l = Object(a.a)(c.b),
				u = Object(a.a)(c.c),
				m = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						l = n();
					if (!l.economics.me.fetched || a && !l.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
								method: "get",
								endpoint: `${s.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(r(), a);
						if (e.ok) {
							const n = e.body;
							a && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						s = n.economics.me.data;
					if (!s) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${s.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(r.b)({
								endpoint: t,
								method: o.ob.GET
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
				r = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				s = n("./src/reddit/models/Toast/index.ts");

			function i(e, t) {
				e(Object(o.f)({
					duration: 5e3,
					kind: s.b.Error,
					text: Object(r.a)(t)
				}))
			}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "c", (function() {
				return A
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
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
				g = e => ({
					api_type: "json",
					show_error_list: !0,
					thing_id: e.post.id,
					validate_on_submit: !0,
					...h(e) ? b(e) : f(e)
				});
			var _ = (e, t) => Object(c.a)(Object(d.a)(e, [l.a]), {
					endpoint: Object(p.a)(Object(u.a)(`${e.apiUrl}/api/editusertext`)),
					method: a.ob.POST,
					data: g(t)
				}).then(m.b),
				x = n("./src/reddit/helpers/overlay/index.ts"),
				y = n("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				C = n("./src/reddit/helpers/trackers/lightbox.ts"),
				E = n("./src/reddit/helpers/trackers/post.ts"),
				O = n("./src/reddit/helpers/trackers/postComposer.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				w = n("./src/reddit/selectors/posts.ts"),
				T = n("./src/reddit/actions/postCreation/constants.ts"),
				S = n("./src/reddit/actions/postCreation/general.ts");
			const D = Object(r.a)(T.l),
				M = Object(r.a)(T.m),
				R = Object(r.a)(T.x),
				F = Object(r.a)(T.H),
				I = Object(r.a)(T.I),
				P = (e, t) => async (n, o, r) => {
					let {
						apiContext: s
					} = r;
					const i = o(),
						a = Object(w.G)(i, {
							postId: e
						});
					t ? (n(Object(x.a)(a.permalink)), Object(C.e)(e, "edit")(i)) : Object(E.e)(e, "edit")(i);
					const {
						media: c
					} = a;
					if (!c) return;
					let d, l = k.i.RICH_TEXT,
						u = "";
					c.type === v.o.TEXT ? (l = k.i.MARKDOWN, u = c.content) : c.type === v.o.RTJSON && (u = (l = c.rteMode || k.i.RICH_TEXT) === k.i.MARKDOWN ? c.markdownContent : c.richtextContent, d = c.mediaMetadata || void 0), n(F({
						editorMode: l,
						mediaMetadata: d,
						postContent: u,
						postId: e
					}))
				}, A = e => async (t, n, r) => {
					let {
						apiContext: a
					} = r;
					const {
						post: c
					} = e, d = !c.media || "rtjson" !== c.media.type && "text" !== c.media.type ? "" : c.media.rteMode;
					O.E(n(), Object(S.o)(d)), t(R(c.id));
					const l = await _(a(), e),
						u = !1 === l.body.success;
					if (t(D(c.id)), l.ok && !u) {
						t(Object(i.f)({
							kind: j.b.SuccessCommunity,
							text: o.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(I(c.id));
						const e = Object(y.a)(l.body);
						t(Object(s.R)({
							[c.id]: e
						}))
					} else t(M(l.error))
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/post/convert.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(r.a)(m.G),
				h = Object(r.a)(m.p),
				b = Object(r.a)(m.Q),
				f = (e, t, n) => async (r, a, f) => {
					let {
						apiContext: _
					} = f;
					c.m(a(), t);
					const x = t === d.i.MARKDOWN,
						y = t === d.i.RICH_TEXT,
						C = m.k;
					if (x && Object(l.G)(n)) return r(b({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void r(g(t));
					if (y && !n) return r(b({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void r(g(t));
					r(p(C));
					const E = await Object(i.a)(_(), t, x ? JSON.stringify(n) : n);
					E.ok ? (r(h(C)), r(b({
						editorKey: e,
						editorMode: t,
						content: E.body.output
					})), r(g(t))) : (r(h(C)), r(Object(s.f)({
						duration: s.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, g = e => async (t, n) => {
					const r = Object(a.k)();
					if (r >= 3) return;
					const i = n().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === i) return;
					const c = e === d.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : o.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(s.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: o.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(a.rb)(r + 1)
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return F
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "c", (function() {
				return z
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "d", (function() {
				return L
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/formatApiError/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/actions/upload.ts"),
				l = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				u = n("./src/lib/makeApiRequest/index.ts"),
				m = n("./src/lib/makeGqlRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				b = n("./src/redditGQL/operations/CreateMediaUploadLease.json");
			var f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				g = n("./src/reddit/helpers/imagePreview/index.ts"),
				_ = n("./src/reddit/helpers/media/index.ts"),
				x = n("./src/reddit/models/Upload/index.ts"),
				y = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/telemetry/index.ts");
			const E = e => ({
				...y.o(e),
				screen: y.bb(e),
				profile: y.T(e),
				subreddit: y.jb(e)
			});
			var O = n("./src/reddit/helpers/trackers/postComposer.ts"),
				v = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/postCreations.ts"),
				w = n("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				T = n("./src/reddit/actions/postCreation/constants.ts"),
				S = n("./src/reddit/actions/postCreation/general.ts");
			const D = Object(a.a)(T.u),
				M = Object(a.a)(T.v),
				R = Object(a.a)(T.t),
				F = e => async (t, n) => {
					t(D());
					const o = e.map(e => {
						let {
							url: n,
							uploadKey: o
						} = e;
						const r = Object(_.b)(Object(_.d)(n), "poster.png");
						return t(B(r, o))
					});
					await Promise.all(o);
					const r = n().uploads,
						s = e.map(e => {
							let {
								uploadKey: t
							} = e;
							return r[t]
						}).find(e => e.status !== x.a.SUCCESS);
					t(s ? R(s.error) : M())
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
				B = (e, t, n, r, i, a) => async (l, v, T) => {
					let {
						apiContext: S,
						gqlContext: D
					} = T;
					const M = Object(j.h)(v()),
						R = Date.now();
					let F = null,
						P = !1,
						A = !1,
						B = !1;
					const z = e => {
						if (!B && n && P) {
							B = !0;
							const o = v(),
								r = Date.now() - R,
								s = Object(f.c)(f.a.PostComposer);
							A ? (async e => {
								let {
									state: t,
									uploadKey: n,
									assetId: o,
									isCanceled: r,
									fileSource: s,
									uploadDuration: i,
									correlationId: a
								} = e;
								const c = t.uploads[n],
									d = r || c.status === x.a.CANCELED,
									{
										file: l,
										url: u,
										metadata: m,
										error: p
									} = c,
									h = m.mimetype || l.type,
									b = h.startsWith("video/"),
									f = c.status === x.a.SUCCESS;
								let g = "";
								p ? g = JSON.stringify(p) : d && (g = "canceled");
								const _ = {
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
										...g ? {
											reason: g
										} : {}
									},
									media: {
										mimetype: h,
										uploadDuration: i,
										source: s,
										fileName: l.name,
										size: l.size,
										type: b ? "video" : "image",
										...o ? {
											id: o
										} : {},
										...u ? {
											url: u
										} : {},
										..._
									}
								})
							})({
								state: o,
								uploadKey: t,
								assetId: F,
								isCanceled: e,
								fileSource: n,
								uploadDuration: r,
								correlationId: s
							}) : O.D(o, t)
						}
					};
					return await l(Object(d.l)(e, t, async f => {
						var x, y, C, E;
						P = !0, Object(d.k)(f.id, () => {
							z(!0)
						});
						const {
							error: O,
							metadata: v
						} = await async function(e, t, n) {
							const r = t && t.allowedPostTypes,
								i = t && t.name,
								a = await Object(_.h)(e) || e.type,
								c = Object(_.c)(e) || void 0;
							if (!c) return I("UNSUPPORTED_BROWSER");
							const d = {
								localUrl: c,
								mimetype: a
							};
							if (!a || !Object(_.k)(a)) return {
								error: {
									type: s.Y
								}
							};
							if (a.startsWith("image/")) {
								if (r && !r.images) {
									const e = o.fbt._("Images are not allowed in r/{subredditName}", [o.fbt._param("subredditName", i)], {
										hk: "3C2E7Q"
									});
									return I(s.Y, e)
								}
								if ("image/gif" === a) {
									if (e.size > s.eb) return I(s.O)
								} else if (e.size > s.gb) return I(s.W);
								const t = await Object(g.a)(c);
								if (n && (t.width < n || t.height < n)) {
									const e = o.fbt._("Image must be {min_image_width}x{min_image_height} pixels or larger.", [o.fbt._param("min_image_width", n.toString()), o.fbt._param("min_image_height", n.toString())], {
										hk: "2WFKgs"
									});
									return I(s.V, e)
								}
								d.width = t.width, d.height = t.height
							} else if (a.startsWith("video/")) {
								if (e.size > s.kb) return I(s.vc);
								let t;
								try {
									t = await Object(_.j)(c, !0)
								} catch (l) {
									return I(s.Y)
								}
								if (r) {
									const {
										videos: e,
										images: n
									} = r;
									if (n && !e && t.duration > s.lb) {
										const e = o.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [o.fbt._param("subredditName", i)], {
											hk: "46ULiz"
										});
										return I(s.Y, e)
									}
									if (!n && !e) {
										const e = o.fbt._("Videos are not allowed in r/{subredditName}", [o.fbt._param("subredditName", i)], {
											hk: "4uTUZb"
										});
										return I(s.Y, e)
									}
								}
								if (t.duration > s.jb) {
									const e = o.fbt._("Video is too long. Maximum video length is {duration} minutes.", [o.fbt._param("duration", (s.jb / 60).toString())], {
										hk: "20nB6Q"
									});
									return I(s.Y, e)
								}
								if (t.duration < s.rb) {
									const e = o.fbt._("Video is too short. Minimum video length is {duration} seconds.", [o.fbt._param("duration", s.rb.toString())], {
										hk: "49PSW8"
									});
									return I(s.Y, e)
								}
								if (0 === t.height || 0 === t.width) {
									const e = o.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return I(s.Y, e)
								}
								if (t.height < s.sb || t.width < s.tb) {
									const e = o.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [o.fbt._param("min_video_width", s.tb.toString()), o.fbt._param("min_video_height", s.sb.toString())], {
										hk: "2HSUGl"
									});
									return I(s.Y, e)
								}
								if (e.size / t.duration < s.qb) {
									const e = o.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [o.fbt._param("min_bitrate", (s.qb / s.Z).toString())], {
										hk: "1ehgDE"
									});
									return I(s.Y, e)
								}
								d.height = t.height, d.width = t.width, d.videoDuration = t.duration, d.videoFirstFrameUrl = t.firstFrame.dataUrl
							}
							return {
								metadata: d
							}
						}(e, M, a);
						if (O || !v) return {
							error: O
						};
						if (l(Object(d.m)({
								key: t,
								metadata: {
									fileSource: n,
									...v
								}
							})), A = !0, r && r(), i) {
							const e = v.mimetype,
								t = e && s.T[e];
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
										o = Object(w.a)({
											uploadLeaseUrl: n,
											uploadLeaseHeaders: null === (y = t.data.createMediaUploadLease) || void 0 === y ? void 0 : y.uploadLease.uploadLeaseHeaders
										});
									return F = (null === (C = t.data.createMediaUploadLease) || void 0 === C ? void 0 : C.mediaId) || null, {
										uploadLease: o
									}
								} {
									const t = null === (E = e.body.data.createMediaUploadLease) || void 0 === E ? void 0 : E.errors;
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
							return l(Object(c.f)({
								kind: k.b.Error,
								text: o.fbt._("Only .jpeg and .png image types are are allowed", null, {
									hk: "30Ms4V"
								}),
								duration: 6e3
							})), {
								error: void 0
							}
						}
						const j = e.name,
							T = await (async (e, t, n) => Object(u.a)(Object(p.a)(e, [h.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: s.ob.POST,
								data: {
									filepath: t,
									mimetype: n
								}
							}))(S(), j, v.mimetype);
						return T.ok ? (F = T.body.asset.asset_id, {
							uploadLease: T.body.args
						}) : {
							error: T.error || void 0
						}
					}, !0)), z(!1), v().uploads[t] || null
				}, z = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const s = n().uploads[e];
					s && !Object(x.c)(s) && await t(B(s.file, s.key, s.metadata.fileSource, void 0))
				}, N = (e, t, n, s, a) => async (d, l) => {
					const u = e.map((e, o) => new Promise(async o => {
							const i = Object(x.d)(n, Object(r.a)().slice(-6));
							await d(B(e, i, t, () => o({
								uploadKey: i,
								isValid: !0
							}), s, a)), o({
								uploadKey: i,
								isValid: !1
							})
						})),
						m = await Promise.all(u),
						p = m.map(e => e.uploadKey);
					return d(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (n, r) => {
							const {
								uploads: s
							} = r(), a = e.map(e => s[e]).filter(e => e.status === x.a.FAILED && !e.metadata.mimetype).map(e => e.error), d = a.length > t ? t - 1 : a.length, l = a.length - d;
							a.slice(0, d).forEach(e => n(Object(c.f)({
								duration: c.a,
								kind: k.b.Error,
								text: Object(i.a)(e)
							}))), l > 0 && n(Object(c.f)({
								duration: c.a,
								kind: k.b.Error,
								text: o.fbt._({
									"*": "Couldn't add {number} more files",
									_1: "Couldn't add 1 more file"
								}, [o.fbt._plural(l, "number")], {
									hk: "2fQwvl"
								})
							}))
						}
					}(p)), m.filter(e => e.isValid).map(e => e.uploadKey)
				}, L = (e, t) => async (n, r) => {
					const s = r(),
						i = Object(j.W)(s),
						{
							items: a
						} = i,
						u = !a.length && 1 === e.length,
						m = Object(j.N)(s) && !u;
					let p = !1,
						h = e;
					if (m) {
						if (Object(v.x)(i)) return void n(Object(c.f)({
							kind: k.b.Error,
							text: o.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						h.some(e => Object(_.n)(e.type)) && n(Object(c.f)({
							duration: c.a,
							kind: k.b.Error,
							text: o.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), h = h.filter(e => Object(_.m)(e.type));
						const e = Math.max(0, l.b - a.length);
						h.length > e && (n(Object(c.f)({
							kind: k.b.Error,
							text: o.fbt._("You have hit the limit of {images_limit} images", [o.fbt._param("images_limit", `${l.b}`)], {
								hk: "6M4kX"
							})
						})), h = h.slice(0, e))
					} else h = h.slice(0, 1), p = !0, n(Object(d.j)(A, !0));
					const b = await n(N(h, t, A));
					if (!b.length) return;
					const f = b.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						g = 0 === a.length;
					n(Object(S.d)({
						...i,
						items: p ? f : [...a, ...f],
						selectedKey: g ? b[0] : b[b.length - 1]
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(o.a)(s.r),
				a = Object(o.a)(s.F),
				c = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					const c = await Object(r.a)(s(), e);
					c && c.ok ? t(i({
						streamId: e,
						level: c.body.data.auto_mute_status.level
					})) : t(a(e))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const o = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				r = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				s = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/upload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return d
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
				return S
			})), n.d(t, "j", (function() {
				return D
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/get.js"),
				r = n.n(o),
				s = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/uploadToS3/index.ts"),
				c = n("./src/reddit/models/Upload/index.ts");
			const d = "UPLOAD_PENDING",
				l = "UPLOAD_UPLOADING",
				u = "UPLOAD_METADATA_CHANGED",
				m = "UPLOAD_PROGRESS",
				p = "UPLOAD_SUCCESS",
				h = "UPLOAD_FAILED",
				b = "UPLOAD_CANCELED",
				f = "UPLOAD_REMOVED",
				g = Object(i.a)(d),
				_ = Object(i.a)(l),
				x = Object(i.a)(u),
				y = Object(i.a)(m),
				C = Object(i.a)(p),
				E = Object(i.a)(h),
				O = Object(i.a)(b),
				v = Object(i.a)(f),
				k = new Map,
				j = (e, t) => {
					const n = k.get(e) || [];
					n.push(t), k.set(e, n)
				},
				w = (e, t) => {
					const n = k.get(e);
					n && n.forEach(n => n(e, t)), k.delete(e)
				},
				T = function(e, t, n) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (i, d, l) => {
						let {
							apiContext: u
						} = l;
						const m = t;
						if (d().uploads[m] && Object(c.c)(d().uploads[m])) return;
						const p = Object(s.a)(),
							h = () => {
								const e = d().uploads[m];
								return !e || e.id !== p || e.status === c.a.CANCELED
							};
						i(g({
							key: m,
							id: p,
							file: e
						}));
						const {
							uploadLease: b,
							error: f
						} = await n(d().uploads[m]);
						if (h()) return;
						if (f || !b) return void i(E({
							key: m,
							error: f
						}));
						let x;
						j(p, () => {
							x && x.abort()
						}), i(_({
							key: m
						}));
						const O = await Object(a.a)(e, b, e => (x = e, o && e.on("progress", e => {
							if (!h() && "upload" === e.direction) {
								const t = {
									percent: e.percent,
									total: e.total,
									uploaded: e.loaded
								};
								i(y({
									key: m,
									progress: t
								}))
							}
						}), e));
						if (x = null, !h())
							if (O.ok) {
								const e = decodeURIComponent(O.body.PostResponse.Location);
								i(C({
									key: m,
									url: e
								}))
							} else {
								const e = r()(O, "body.Error.Message.0"),
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
									key: m,
									error: t
								}))
							}
					}
				},
				S = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (n, o) => {
						const r = o().uploads[e];
						r && (w(r.id, t), n(t ? v({
							key: e
						}) : O({
							key: e
						})))
					}
				},
				D = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return (n, o) => {
						Object.keys(o().uploads).forEach(o => {
							o.startsWith(e) && n(S(o, t))
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
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t) => 21 * e + 33 + (t ? 10 : 0);
			t.a = e => {
				let {
					breakOut: t,
					depth: n,
					isEditing: o,
					...i
				} = e;
				return r.a.createElement("div", c({
					className: Object(s.a)({
						[a.a.breakout]: t
					}),
					style: {
						left: d(n, o)
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
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = i.a.wrapped(c.a, "LoadingIcon", l.a), p = i.a.wrapped(a.t, "CancelButton", l.a), h = e => e.preventDefault();
			t.a = e => {
				let {
					pending: t,
					cancelButtonEnabled: n = !0,
					children: o,
					className: i,
					submitButtonText: c,
					canSubmit: d,
					onSubmit: b,
					onCancel: f
				} = e;
				return r.a.createElement("div", {
					className: Object(s.a)(l.a.FormFooterWrapper, i, {
						[l.a.pending]: t
					})
				}, r.a.createElement("div", {
					className: l.a.ButtonWrapper
				}, r.a.createElement(a.t, {
					className: l.a.SubmitButton,
					size: a.d.XS,
					type: "submit",
					disabled: !d,
					onClick: e => {
						b && b(e)
					},
					onMouseDown: h
				}, t ? r.a.createElement(m, {
					sizePx: 10
				}) : c), n && r.a.createElement(p, {
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
				r = n("./node_modules/lodash/debounce.js"),
				s = n.n(r),
				i = n("./node_modules/lodash/noop.js"),
				a = n.n(i),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./node_modules/react-dom/index.js"),
				u = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./src/reddit/actions/comment/authoring.ts"),
				h = n("./src/reddit/components/AuthorLink/index.tsx"),
				b = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				f = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				g = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				_ = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				x = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				y = n("./src/reddit/controls/ErrorText/index.tsx"),
				C = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = n("./src/reddit/icons/svgs/Help/index.tsx"),
				O = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				v = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				k = n("./src/lib/fastdom/index.ts"),
				j = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				w = n.n(j),
				T = n("./src/lib/lessComponent.tsx");
			const S = 310,
				D = T.a.div("Container", w.a);
			class M extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), n = t < S ? "compact" : "full";
						n !== this.state.toolbarType && k.a.write(() => {
							this.setState({
								toolbarType: n
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
					return d.a.createElement(D, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var R = n("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				F = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				I = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				P = n.n(I),
				A = n("./src/reddit/controls/Button/index.tsx");
			const B = T.a.wrapped(C.a, "LoadingIcon", P.a),
				z = e => {
					let {
						isFilled: t,
						...n
					} = e;
					return d.a.createElement(B, n)
				},
				N = T.a.div("Wrapper", P.a),
				L = T.a.wrapped(R.a, "MarkdownModeIcon", P.a),
				U = e => {
					let {
						isFilled: t,
						...n
					} = e;
					return d.a.createElement(L, n)
				};
			var W = d.a.memo((function(e) {
					const t = o.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return d.a.createElement(N, null, d.a.createElement(A.t, {
						priority: A.c.Plain,
						size: A.d.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? z : U
					}, d.a.createElement(F.a, {
						text: t
					})))
				})),
				H = n("./src/lib/classNames/index.ts"),
				K = n("./src/reddit/constants/keycodes.ts"),
				q = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				G = n("./src/realtime/GQLSubscription/async.tsx"),
				V = n("./src/reddit/components/UsersCountIndicator/constants.ts"),
				X = n("./src/reddit/constants/componentSizes.ts"),
				J = n("./src/reddit/constants/componentTestIds.ts"),
				Q = n("./src/reddit/selectors/activeModalId.ts"),
				Z = n("./src/reddit/selectors/comments.ts"),
				Y = n("./src/reddit/selectors/editorContent.ts"),
				$ = n("./src/reddit/selectors/experiments/typingIndicators.ts"),
				ee = n("./src/reddit/actions/modal.ts"),
				te = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				ne = n("./src/reddit/models/PostCreationForm/index.ts"),
				oe = n("./src/reddit/models/PostDraft/index.ts"),
				re = n("./src/reddit/models/User/index.ts"),
				se = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				ie = n.n(se);
			const ae = T.a.button("SwitchModeButton", ie.a),
				ce = T.a.wrapped(C.a, "LoadingIcon", ie.a),
				de = T.a.div("CommentHeader", ie.a),
				le = T.a.span("FormHeaderText", ie.a),
				ue = T.a.button("HelpButton", ie.a),
				me = T.a.wrapped(E.a, "HelpIcon", ie.a),
				pe = T.a.wrapped(te.a, "ResizableAutosizeTextarea", ie.a),
				he = T.a.wrapped(x.a, "CurrentUserIcon", ie.a),
				be = e => d.a.createElement(ue, {
					className: e.className,
					onClick: e.onClick
				}, d.a.createElement(me, null)),
				fe = 8,
				ge = 16,
				_e = Object(u.b)(() => Object(m.c)({
					activeModalId: Q.a,
					userName: e => e.user.account ? Object(re.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: Z.i,
					isConverting: (e, t) => Object(Y.a)(e, t.draftKey),
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object($.d)(e)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(ee.i)(Object(q.a)(t.draftKey))),
					helpModalToggled: () => e(Object(ee.i)(_.b))
				}));
			class xe extends d.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.realtimeGQLVariables = void 0, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.setUserStoppedTyping = s()(() => this.setState({
						isUserTyping: !1
					}), V.c), this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < X.c,
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
						(t || n) && o === K.a.Enter && this.onSubmit()
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
						draftType: r,
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
						cancelModalText: r === oe.c.edit ? o.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : o.fbt._("Are you sure that you want to discard your comment?", null, {
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
					return e instanceof Element ? e.getBoundingClientRect().height + fe + ge + X.n : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: n,
						className: r,
						disableAutofocus: s,
						depth: i,
						draft: c,
						draftKey: l,
						draftType: u,
						errorMsgs: m,
						pending: x,
						modalSeen: C,
						submitButtonText: E,
						isCommentBoxDesignEnabled: k,
						isExpanded: j,
						isTopLevelComment: w,
						isTypingIndicatorsWriteTestEnabled: T,
						onSwitchMode: S,
						userName: D
					} = this.props, {
						cancelModalText: R,
						showError: F,
						text: I,
						breakOut: P,
						wrapperHeight: A,
						isUserTyping: B
					} = this.state, z = Object(q.a)(l), N = c.draftType === oe.c.edit;
					return d.a.createElement("div", {
						"data-test-id": J.b,
						className: Object(H.a)(ie.a.Wrapper, r, {
							[ie.a.isTopLevelComment]: w,
							[ie.a.mExpanded]: j,
							[ie.a.mRedesign]: k
						}),
						ref: this.setWrapperRef,
						style: {
							height: P ? A : void 0
						}
					}, T && B && d.a.createElement(G.a, {
						variables: this.realtimeGQLVariables,
						onData: a.a,
						queryKey: "userIsTypingOnPost"
					}), !k && w && D && d.a.createElement(de, null, d.a.createElement(le, null, o.fbt._("Comment as {authorLink}", [o.fbt._param("authorLink", d.a.createElement(h.a, {
						author: D,
						isAuthorDeleted: !1
					}, D))], {
						hk: "4pMWAk"
					}))), d.a.createElement(O.a, {
						breakOut: P,
						depth: i,
						isEditing: N
					}, k && d.a.createElement("div", {
						className: ie.a.userIcon
					}, d.a.createElement(he, null)), d.a.createElement("div", {
						className: Object(H.a)(ie.a.FormWrapper, {
							[ie.a.pending]: x,
							[ie.a.focused]: c.hasFocus
						})
					}, d.a.createElement(pe, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !s,
						disabled: x,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: k ? o.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : o.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: I
					}), (!k || j) && d.a.createElement(v.a, {
						className: ie.a.FormFooter,
						cancelButtonEnabled: u !== oe.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: x,
						submitButtonText: E,
						canSubmit: this.userHasEnteredText()
					}, d.a.createElement(M, null, e => "compact" === e ? d.a.createElement(W, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => S(ne.i.RICH_TEXT, I, l),
						isConverting: this.props.isConverting
					}) : d.a.createElement("div", null, d.a.createElement(ae, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => S(ne.i.RICH_TEXT, I, l)
					}, o.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "ousUG"
					}), this.props.isConverting && d.a.createElement(ce, {
						sizePx: 12
					})))), d.a.createElement(be, {
						onClick: this.props.helpModalToggled
					})))), F && Object(y.c)(m), e === z && d.a.createElement(g.a, {
						actionText: o.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: o.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: R,
						onConfirm: () => this.cancelForm(),
						toggleModal: n,
						trackClick: () => {}
					}), e === _.b && d.a.createElement(_.a, {
						withOverlay: !0
					}), e === p.t && d.a.createElement(f.a, {
						onSubmit: this.onSubmit,
						modalSeen: C,
						withOverlay: !0
					}), d.a.createElement(b.a, {
						editKey: l,
						hasValue: !!I
					}))
				}
			}
			t.b = _e(xe)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-router/esm/react-router.js");
			let a = null;
			class c extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						c.blockers.delete(e), c.blockers.size || (a && a(), a = null, window.removeEventListener("beforeunload", c.navigationBlocker))
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
					c.blockers.add(e), a || (window.addEventListener("beforeunload", c.navigationBlocker), a = this.props.history.block(() => {
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
			c.blockers = new Set, c.navigationBlocker = e => {
				const t = "Are you sure you want to leave?";
				return e.returnValue = t, t
			}, t.a = Object(i.i)(c)
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
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/actions/comment/authoring.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/TextButton/index.tsx"),
				p = n("./src/reddit/constants/tracking.ts"),
				h = n("./src/reddit/selectors/telemetry.ts");
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
				g = e => t => ({
					action: p.c.CLICK,
					noun: "submit",
					correlationId: e,
					...b(t)
				}),
				_ = e => t => ({
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
			var y = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = Object(s.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(d.g)(c.t))
				},
				continue: () => {
					t.onSubmit()
				}
			}));
			class O extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: Object(i.a)()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(f(this.state.correlationId))
				}
				render() {
					return r.a.createElement(l.e, null, r.a.createElement(l.i, null, r.a.createElement(y.a, null, r.a.createElement(l.q, null, C._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), r.a.createElement(m.a, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.closeModal()
						}
					}, r.a.createElement(l.b, null)))), r.a.createElement(l.l, null, r.a.createElement(l.p, null, C._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), r.a.createElement(l.g, null, r.a.createElement(l.a, {
						onClick: () => {
							this.props.sendEvent(_(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, C._("Go back and edit", null, {
						hk: "3nGNI7"
					})), r.a.createElement(l.r, {
						onClick: () => {
							this.props.sendEvent(g(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, C._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(a.a)(E(Object(u.c)(O)))
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
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/actions/comment/authoring.ts"),
				u = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				m = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				b = n("./src/reddit/icons/fonts/Comment/index.tsx"),
				f = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				g = n("./src/reddit/components/CommentCreation/RequestToCommentForm/index.m.less"),
				_ = n.n(g);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = p.a.div("RequestBox", _.a);
			var C = () => i.a.createElement(y, null, i.a.createElement(b.a, {
					className: _.a.commentIcon
				}), i.a.createElement("div", {
					className: _.a.commentText
				}, x._("Only approved users can comment in this community.", null, {
					hk: "3oqccc"
				})), i.a.createElement(h.default, {
					className: _.a.requestButton,
					eventSource: f.b.Comment
				})),
				E = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./node_modules/lodash/noop.js"),
				v = n.n(O),
				k = n("./src/lib/classNames/index.ts"),
				j = n("./src/lib/fastdom/index.ts"),
				w = n("./src/lib/memoizeByReference/index.ts"),
				T = n("./src/reddit/components/AuthorLink/index.tsx"),
				S = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				D = n("./src/reddit/components/RichTextEditor/index.tsx"),
				M = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				R = n("./src/reddit/featureFlags/index.ts"),
				F = n("./src/reddit/components/CollapseIntoOverflow/index.tsx"),
				I = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				P = n("./src/reddit/helpers/richTextEditor/index.ts"),
				A = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				B = n("./src/reddit/icons/svgs/Smile/index.tsx"),
				z = n("./src/reddit/selectors/gold/enabledFeatures.ts"),
				N = n("./src/reddit/selectors/gold/powerups/index.ts"),
				L = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				U = n("./src/reddit/components/RichTextEditor/Toolbar/EmoteButton/index.m.less"),
				W = n.n(U);
			const H = Object(c.c)({
				emotes: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(z.a)(e, {
						subredditId: n
					})
				},
				subredditHasPowerups: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(N.g)(e, {
						subredditId: n
					})
				}
			});
			var K = Object(a.b)(H)((function(e) {
					const {
						controlsState: t,
						emotes: n,
						onEmoteButtonClick: o,
						subredditHasPowerups: r
					} = e, s = r ? E.fbt._("Add Emoji", null, {
						hk: "3EV4aU"
					}) : E.fbt._("Add Emote", null, {
						hk: "3dXLr8"
					});
					return i.a.createElement(L.a, {
						Icon: () => i.a.createElement(B.a, {
							className: W.a.smile
						}),
						tooltip: s,
						enabled: t.emote.isEnabled,
						onClick: o
					}, i.a.createElement("div", {
						className: Object(k.a)(W.a.emotes, {
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
					tooltip: E.fbt._("Add GIF", null, {
						hk: "3uH3vO"
					}),
					disabledTooltip: E.fbt._("Limit one media per comment", null, {
						hk: "4BKWLn"
					}),
					enabled: t.giphy.isEnabled,
					onClick: n
				})
			}
			var V = n("./src/reddit/selectors/comments.ts"),
				X = n("./src/reddit/selectors/experiments/mediaInComments.ts"),
				J = n("./src/lib/constants/index.ts");

			function Q(e) {
				let {
					isImageUploadEnabled: t,
					isGifUploadEnabled: n
				} = e, o = [];
				return t && (o = Array.from(J.c)), n && (o = [...o, ...Array.from(J.a)]), o
			}
			var Z = n("./src/reddit/hooks/useTracking.ts"),
				Y = n("./src/reddit/selectors/experiments/imageComment.ts"),
				$ = n("./src/reddit/components/RichTextEditor/Toolbar/CommentToolbar.m.less"),
				ee = n.n($),
				te = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.tsx");
			const ne = p.a.div("SectionSpacer", ee.a),
				oe = Object(c.a)(X.a, V.C, z.c, R.d.spGiphy, (e, t, n, o) => e ? !!t || !!o : n);

			function re(e) {
				const {
					className: t,
					destSubreddit: n,
					editorKey: o,
					editorState: r,
					onChange: c,
					onEmoteButtonClick: d,
					onFilesSelect: l,
					onGifButtonClick: m,
					onOverflowMenuClick: p,
					readOnly: h,
					trackOnClick: b,
					onLinkButtonClick: f,
					userCanUseEmojis: g,
					userCanUseGifs: _
				} = e, x = Object(A.a)(r);
				h && Object(A.b)(x);
				const y = null == n ? void 0 : n.id,
					C = Object(a.e)(e => void 0 !== y && Object(z.b)(e, {
						subredditId: y
					})) && g,
					O = Object(a.e)(e => void 0 !== y && oe(e, {
						subredditId: y
					})) && _,
					v = Object(a.e)(e => Object(Y.d)(e, {
						subredditId: y
					})),
					k = Object(a.e)(e => Object(Y.b)(e, {
						subredditId: y
					})),
					j = v || k,
					w = Object(Z.a)(),
					T = Object(s.useCallback)(() => w(Object(u.l)()), [w]),
					S = x.giphy.isEnabled,
					D = Object(s.useMemo)(() => Q({
						isGifUploadEnabled: k,
						isImageUploadEnabled: v
					}).join(), [v, k]);
				return i.a.createElement(F.a, {
					className: t,
					oveflowMenuDropdownId: o,
					onOverflowMenuClick: p,
					editorType: P.a.Comment
				}, i.a.createElement("div", {
					className: ee.a.powerupButtons
				}, C && i.a.createElement(K, {
					controlsState: x,
					subredditId: n && n.id,
					onEmoteButtonClick: d
				}), O && i.a.createElement(G, {
					controlsState: x,
					onGifButtonClick: m
				}), j && i.a.createElement(te.a, {
					accept: D,
					controlsState: x,
					disabledTooltip: E.fbt._("Limit one media per comment", null, {
						hk: "4BKWLn"
					}),
					enabled: S,
					onClick: T,
					onFilesInput: l,
					type: "image"
				})), (C || O || j) && i.a.createElement(ne, null), Object(I.g)(I.f, x, r, c, b), i.a.createElement(I.a, {
					controlsState: x,
					trackOnClick: b,
					onLinkButtonClick: f
				}), Object(I.g)(I.h, x, r, c, b), i.a.createElement(ne, null), Object(I.g)(I.e, x, r, c, b), i.a.createElement(ne, null), i.a.createElement(I.d, {
					controlsState: x,
					editorState: r,
					trackOnClick: b,
					onChange: c
				}))
			}
			var se = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				ie = n("./src/reddit/constants/componentSizes.ts"),
				ae = n("./src/reddit/constants/componentTestIds.ts"),
				ce = n("./src/reddit/constants/modals.ts"),
				de = n("./src/reddit/controls/ErrorText/index.tsx"),
				le = n("./src/reddit/helpers/correlationIdTracker.ts"),
				ue = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				me = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				pe = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				he = n("./src/reddit/models/PostCreationForm/index.ts"),
				be = n("./src/reddit/models/PostDraft/index.ts"),
				fe = n("./src/reddit/actions/modal.ts"),
				ge = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				_e = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				xe = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				ye = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Ce = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				Ee = n("./src/reddit/models/Subreddit/index.ts"),
				Oe = n("./src/reddit/selectors/activeModal.ts"),
				ve = n("./src/reddit/selectors/activeModalId.ts"),
				ke = n("./src/reddit/selectors/economics.ts"),
				je = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				we = n("./src/reddit/selectors/user.ts"),
				Te = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Se = n("./src/reddit/selectors/experiments/typingIndicators.ts"),
				De = n("./src/reddit/actions/toaster.ts"),
				Me = n("./src/reddit/models/Toast/index.ts"),
				Re = n("./src/reddit/components/CommentCreation/RichtextCommentForm/index.m.less"),
				Fe = n.n(Re);
			const Ie = 16,
				Pe = p.a.div("CommentHeader", Fe.a),
				Ae = p.a.div("MarkdownButtonWrapper", Fe.a),
				Be = p.a.wrapped(ne, "SectionSpacer", Fe.a),
				ze = p.a.span("FormHeaderText", Fe.a),
				Ne = e => {
					let {
						cancelButtonEnabled: t,
						draftKey: n,
						isCommentBeforeSignUpEnabled: o,
						isCommentBoxDesignEnabled: r,
						onSubmit: s,
						onCancel: a,
						pending: c,
						submitButtonText: d
					} = e;
					return e => {
						const {
							editorState: l,
							onMarkdownButtonClick: u
						} = e, m = l.getCurrentContent(), p = !!m.getPlainText().trim() || m.getBlockMap().some(e => !!e && Object(M.t)(e.getType()));
						return i.a.createElement(me.a, {
							cancelButtonEnabled: t,
							className: Object(k.a)(Fe.a.FormFooter, {
								[Fe.a.mRedesign]: r
							}),
							onSubmit: s,
							onCancel: a,
							pending: c,
							submitButtonText: d,
							canSubmit: p
						}, i.a.createElement("div", {
							className: Fe.a.ToolbarWrapper
						}, i.a.createElement(re, e), i.a.createElement(Be, null), !o && i.a.createElement(Ae, null, i.a.createElement(se.a, {
							className: Fe.a.MarkdownButton,
							draftKey: n,
							onClick: u
						}))))
					}
				},
				Le = Object(a.b)(() => Object(c.c)({
					activeModalId: ve.a,
					destSubreddit: (e, t) => {
						const n = Object(Ce.r)(e, t);
						return n ? {
							name: n.name,
							isProfile: n.type === Ee.f.User,
							id: n.id
						} : void 0
					},
					draft: V.i,
					isCommentBeforeSignUpEnabled: je.a,
					isLoggedIn: we.Q,
					isLoginModalOpened: Object(Oe.c)(ce.a.LOGIN_MODAL_ID),
					isRegisterModalOpened: Object(Oe.c)(ce.a.REGISTER_MODAL_ID),
					userCanUseEmojis: (e, t) => {
						const n = Object(Ce.r)(e, t);
						return Object(ke.s)(e, n ? n.id : void 0, t.parentCommentId)
					},
					userCanUseGifs: (e, t) => {
						const n = Object(Ce.r)(e, t);
						return Object(ke.t)(e, n ? n.id : void 0, t.parentCommentId)
					},
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object(Se.d)(e),
					isImageUploadEnabled: (e, t) => {
						const n = Object(Ce.r)(e, t);
						return Object(Y.d)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					isGifUploadEnabled: (e, t) => {
						const n = Object(Ce.r)(e, t);
						return Object(Y.b)(e, {
							subredditId: n ? n.id : void 0
						})
					}
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(fe.i)(Object(pe.a)(t.draftKey))),
					showErrorToast: t => {
						e(Object(De.f)({
							kind: Me.b.Error,
							text: t,
							duration: 6e3
						}))
					}
				}));
			class Ue extends i.a.Component {
				constructor(e) {
					super(e), this.getToolbarRenderer = Object(w.a)((e, t, n, o, r, s) => Ne({
						cancelButtonEnabled: e,
						draftKey: t,
						isCommentBeforeSignUpEnabled: n,
						isCommentBoxDesignEnabled: o,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: r,
						submitButtonText: s
					})), this.focus = () => {
						this.editor && this.editor.focus()
					}, this.setEditorWrapperRef = e => {
						this.editorWrapperElement = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setRTEComponentRef = e => this.editor = e, this.setRTEDomElementRef = e => {
						this.editorDomElement = e
					}, this.detectBreakout = () => {
						if (!this.editorWrapperElement || !this.editorWrapperElement.parentElement || this.props.isTopLevelComment) return;
						const e = this.editorWrapperElement.parentElement.getBoundingClientRect().width < ie.c,
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
						return xe.a.hasContent(e)
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
						this.editor && this.props.draftType === be.c.replyToPost && this.setState({
							rteState: xe.a.createInitial()
						}), this.props.onCancel()
					}, this.shouldConfirmCancel = () => this.hasContent() && this.state.hasChanged && this.props.draftType === be.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							rteState: this.state.rteState,
							commentMode: he.i.RICH_TEXT,
							draftType: this.props.draftType,
							validate: this.props.showWarningModal
						})
					}, this.onSwitchEditorMode = (e, t) => {
						this.props.onSwitchMode(e, t, this.props.draftKey)
					}, this.onTrackToolbarClick = (e, t) => {
						Object(le.d)(le.a.CommentComposer, !1), this.props.sendEvent(Object(u.g)(e, t))
					}, this.onFilesFilter = (e, t) => {
						const {
							isGifUploadEnabled: n,
							isImageUploadEnabled: o
						} = this.props, r = !Object(A.a)(t).giphy.isEnabled, {
							showErrorToast: s
						} = this.props;
						if ((e.length > 1 || r && e.length >= 1) && (s(E.fbt._("Limit one media per comment", null, {
								hk: "iejOT"
							})), r)) return [];
						const i = Q({
								isImageUploadEnabled: o,
								isGifUploadEnabled: n
							}),
							a = e.filter(e => i.includes(e.type));
						if (e.length !== a.length) {
							let e = [];
							o && (e = [".png", ".jpeg"]), n && (e = [...e, ".gif"]), s(E.fbt._("Only image ({listOfallowedMediaFiles}) file types are allowed", [E.fbt._param("listOfallowedMediaFiles", e.join(", "))], {
								hk: "2mORw0"
							}))
						}
						return a.slice(0, 1)
					};
					const {
						draft: t,
						draftType: n,
						hasError: o,
						mediaMetadata: r,
						rtJson: s
					} = e;
					this.state = {
						breakOut: !1,
						cancelModalText: n === be.c.edit ? E.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : E.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						rteState: !s && t && t.rteState ? t.rteState : xe.a.createInitial(s, r),
						formHeight: void 0,
						hasChanged: !1,
						showError: o
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.setState({
						rteState: xe.a.createInitial()
					}), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentWillUnmount() {
					Object(le.b)(le.a.CommentComposer), this.props.onUnmount({
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
						destSubreddit: r,
						draft: s,
						draftKey: a,
						draftType: c,
						errorMsgs: d,
						isCommentBeforeSignUpEnabled: u,
						isCommentBoxDesignEnabled: m,
						isExpanded: p,
						isLoggedIn: h,
						isLoginModalOpened: b,
						isRegisterModalOpened: f,
						modalSeen: g,
						pending: _,
						postId: x,
						submitButtonText: y,
						isTopLevelComment: C,
						userCanUseEmojis: O,
						userCanUseGifs: j,
						userName: w,
						isTypingIndicatorsWriteTestEnabled: M,
						isImageUploadEnabled: R,
						isGifUploadEnabled: F
					} = this.props, {
						cancelModalText: I,
						breakOut: A,
						formHeight: B,
						rteState: z
					} = this.state, N = Object(pe.a)(a), L = s.draftType === be.c.edit, U = c !== be.c.replyToPost;
					return i.a.createElement("div", {
						className: Object(k.a)(Fe.a.FormWrapper, n, {
							[Fe.a.isTopLevelComment]: C,
							[Fe.a.isRedesign]: m
						}),
						ref: this.setEditorWrapperRef,
						style: {
							height: A ? B : void 0
						}
					}, !m && C && w && i.a.createElement(Pe, null, i.a.createElement(ze, null, E.fbt._("Comment as {authorLink}", [E.fbt._param("authorLink", i.a.createElement(T.a, {
						author: w,
						isAuthorDeleted: !1
					}, w))], {
						hk: "4pMWAk"
					}))), i.a.createElement(ue.a, {
						breakOut: A,
						depth: o,
						isEditing: L
					}, i.a.createElement(D.a, {
						allowMediaUploads: R || F,
						shouldOmitImageCaptionBlock: !0,
						shouldUseGqlUploadLease: !0,
						onFilesFilter: this.onFilesFilter,
						minImageDimension: 20,
						userCanUseEmojis: O,
						userCanUseGifs: j,
						dataTestId: ae.c,
						destSubreddit: r,
						editorType: P.a.Comment,
						initialHeight: this.props.initialHeight,
						isCommentBoxDesignEnabled: m,
						isExpanded: p,
						isTypingIndicatorsWriteTestEnabled: M,
						rteState: z,
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
						readOnly: _,
						trackToolbarClick: this.onTrackToolbarClick,
						toolbarPosition: "bottom",
						renderToolbar: this.getToolbarRenderer(U, a, !h && u, m, _, y)
					})), this.state.showError ? Object(de.c)(d) : null, e === N && i.a.createElement(S.a, {
						actionText: E.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: E.fbt._("Keep", null, {
							hk: "1fDXd5"
						}),
						modalText: I,
						onConfirm: this.cancelForm,
						toggleModal: t,
						trackClick: v.a
					}), e === l.t && i.a.createElement(_e.a, {
						onSubmit: this.onSubmit,
						modalSeen: g,
						withOverlay: !0
					}), i.a.createElement(ge.a, {
						editKey: a,
						hasValue: xe.a.hasContent(z),
						skipBlockingOnPageReload: !h && u && (b || f)
					}))
				}
			}
			var We = Object(ye.u)()(Le(Object(Te.c)(Ue))),
				He = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				Ke = n("./src/reddit/models/User/index.ts"),
				qe = n("./src/reddit/selectors/experiments/commentBox.ts"),
				Ge = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				Ve = n("./src/reddit/selectors/posts.ts");
			const Xe = Object(ye.u)(),
				Je = Object(c.c)({
					activeModalId: ve.a,
					contributorRequestPending: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(ye.b)(e, n, f.e.Comment)
					},
					isCommentBoxDesignEnabled: qe.a,
					userName: e => e.user.account ? Object(Ke.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					hasError: V.v,
					errorMsgs: V.M,
					draft: V.i,
					disableAutofocus: V.f,
					showContributorRequestFlow: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(ye.cb)(e, n, f.e.Comment)
					},
					postAuthorIsBlocked: Ve.w,
					isTrueblockPCBlockeeEnabled: Ge.d
				}),
				Qe = Object(a.b)(Je, (e, t) => ({
					onMount: () => e(d.a(t.draftKey)),
					onCancel: () => {
						t.draftType === be.c.edit ? e(l.d({
							commentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						})) : e(l.b({
							parentCommentId: t.parentCommentId,
							commentsPageKey: t.commentsPageKey
						}))
					},
					onUnmount: n => e(l.k(t.draftKey, n)),
					onFocus: r()(() => e((e, n) => Object(u.e)(n(), t.draftType))),
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
			class Ze extends i.a.Component {
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
					if (!e.draft || e.postAuthorIsBlocked && e.isTrueblockPCBlockeeEnabled) return null;
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
					return e.contributorRequestPending ? i.a.createElement(He.a, null) : e.showContributorRequestFlow ? i.a.createElement(C, null) : e.draft.commentMode === he.i.RICH_TEXT ? i.a.createElement(We, n) : i.a.createElement(m.b, n)
				}
			}
			t.default = Xe(Qe(Ze))
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return J
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/actions/comment/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts"),
				_ = n("./src/reddit/models/Toast/index.ts");
			const x = (e, t) => async (n, r, s) => {
				let {
					apiContext: i
				} = s;
				const a = await (async (e, t, n) => Object(b.a)(Object(f.a)(e, [g.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: d.ob.POST,
						data: {
							api_type: "json",
							id: t,
							sort: n
						}
					}))(i(), e, t),
					c = `error-block-${t}`,
					l = `success-block-${t}`;
				if (a.ok) {
					n(Object(p.R)({
						[e]: {
							suggestedSort: t
						}
					}));
					const r = t ? o.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : o.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					n(h.f({
						id: l,
						kind: _.b.SuccessCommunityGreen,
						text: r
					}))
				} else n(h.f({
					id: c,
					kind: _.b.Error,
					text: o.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: o.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: x(e, t)
				}))
			};
			var y = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				C = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				O = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				k = n("./src/reddit/controls/Dropdown/index.tsx"),
				j = n("./src/reddit/controls/Dropdown/Row.tsx"),
				w = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				T = n("./src/reddit/helpers/path/index.ts"),
				S = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const D = (e, t, n, o, r) => s => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(S.z)(s, void 0, {
						oldSort: n,
						sort: o,
						source: r
					}),
					userSubreddit: Object(S.tb)(s)
				}),
				M = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				R = e => ({
					subreddit: Object(S.jb)(e),
					userSubreddit: Object(S.tb)(e)
				}),
				F = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...R
				});
			var I = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				P = n("./src/reddit/icons/svgs/Info/index.tsx"),
				A = n("./src/reddit/selectors/activeModalId.ts"),
				B = n("./src/reddit/selectors/comments.ts"),
				z = n("./src/reddit/selectors/moderatorPermissions.ts"),
				N = n("./src/reddit/selectors/posts.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				U = n("./src/reddit/selectors/user.ts"),
				W = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = n.n(W),
				K = n("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const q = Object(O.a)(k.a),
				G = e => e === K.a.First ? o.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === K.a.Last ? o.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : o.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class V extends s.a.Component {
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
						onOpen: n,
						selectedSort: r
					} = this.props;
					return s.a.createElement("div", {
						className: H.a.HighlightWrapper
					}, s.a.createElement(j.b, {
						className: Object(c.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${G(r)}`,
						id: t,
						noHover: !0,
						onClick: n
					}), s.a.createElement(I.b, {
						className: H.a.DropdownTriangle,
						onClick: n
					}), s.a.createElement(q, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, s.a.createElement(j.b, {
						displayText: G(K.a.First),
						isSelected: r === K.a.First,
						onClick: this.onDropdownClickFirst
					}), s.a.createElement(j.b, {
						displayText: G(K.a.Last),
						isSelected: r === K.a.Last,
						onClick: this.onDropdownClickLast
					}), s.a.createElement(j.b, {
						displayText: G(K.a.None),
						isSelected: r === K.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var X = V;
			const J = "CommentSort--SortPicker",
				Q = "CommentSort--HighlightPicker",
				Z = "CommentSort--Tooltip",
				Y = Object(O.a)(k.a),
				$ = Object(a.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: n
						} = t;
						return n && Object(B.m)(e, {
							commentId: n
						})
					},
					contestModeModalIsOpen: Object(A.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(L.b)(J),
					highlightIsOpen: Object(L.b)(Q),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: n
						} = t;
						const o = Object(z.m)(e, {
							postId: n
						});
						return !!o && o.posts
					},
					post: N.G,
					postPermalink: N.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: n
						} = t;
						const o = Object(U.v)(e),
							r = !!Object(z.m)(e, {
								postId: n
							}),
							s = Object(N.G)(e, {
								postId: n
							});
						return (r || o) && !!s && !!s.previousVisits && s.previousVisits.length > 0
					},
					selectedHighlightSort: B.p
				}),
				ee = Object(i.b)($, (e, t) => {
					let {
						postId: n
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
						onSetSuggestedSort: t => e(x(n, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.W)(t, n)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: Z
						})),
						toggleContestModeModal: () => e(Object(m.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends s.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, n, o) => this.props.sendEvent(D(e, this.props.isOverlay, t, n, o)), this.onOpenDropdownClick = () => {
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
					return o.fbt._("{sort name} (suggested)", [o.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: n,
						contestModeModalIsOpen: r,
						dropdownIsOpen: i,
						elementRef: a,
						hideTooltip: l,
						highlightIsOpen: u,
						hasModeratorPostPermissions: m,
						isOverlay: p,
						location: h,
						post: b,
						postPermalink: f,
						selectedHighlightSort: g,
						showCommentHighlighter: _,
						sort: x,
						suggestedSort: O,
						showTooltip: v,
						toggleContestModeModal: k
					} = this.props, S = b.contestMode, D = !h.search.includes(d.w.CONFIDENCE), R = x === d.w.CONFIDENCE && D, F = m && !R, A = d.y[x], B = A ? A() : "", z = O && x === O && !R ? this.addSuggestedLabel(B) : B, N = S ? o.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : o.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), L = S ? o.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : o.fbt._("Start", null, {
						hk: "Mjvpj"
					}), U = S ? o.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : o.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), W = S && !m;
					return s.a.createElement("div", {
						className: Object(c.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !_ && W
						}),
						ref: a
					}, s.a.createElement("div", {
						className: H.a.containerRow
					}, !W && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: H.a.DropdownContainer
					}, s.a.createElement(j.b, {
						className: Object(c.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${o.fbt._("Sort by",null,{hk:"E6T9r"})}: ${z}`,
						id: J,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), s.a.createElement(I.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), s.a.createElement(Y, {
						isOpen: i,
						tooltipId: J
					}, [d.w.CONFIDENCE, d.w.TOP, d.w.NEW, d.w.CONTROVERSIAL, d.w.OLD, d.w.QA].map(e => {
						const t = n || f,
							o = Object(T.b)(t),
							r = d.y[e],
							i = r ? r() : "";
						return s.a.createElement(E.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${o}?sort=${e}`
						}, s.a.createElement(j.b, {
							displayText: i,
							isSelected: x === e,
							skipRoleAttr: !0
						}))
					}))), F && !W && (O ? s.a.createElement("button", {
						className: H.a.SortLink,
						onClick: x !== O ? this.setSortOnClick : this.clearSortOnClick
					}, x !== O ? o.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : o.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : s.a.createElement("button", {
						className: H.a.SetSort
					}, s.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, o.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), s.a.createElement("span", {
						id: Z,
						onMouseEnter: v,
						onMouseLeave: l
					}, s.a.createElement(C.c, {
						className: H.a.Tooltip,
						text: o.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: Z
					}), s.a.createElement(P.a, {
						className: H.a.Info
					})))), m && s.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, o.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), s.a.createElement(w.a, {
						className: H.a.ToggleSwitch,
						on: S
					}))), _ && s.a.createElement("div", {
						className: H.a.containerRow
					}, s.a.createElement(X, {
						changeHighlightSort: e,
						highlightIsOpen: u,
						id: Q,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: g,
						trackHighlight: M
					})), r && s.a.createElement(y.a, {
						actionText: L,
						headerText: N,
						modalText: U,
						onConfirm: this.setContestMode,
						toggleModal: k,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(v.c)(te))
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/privateCommunity.ts"),
				p = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				f = n.n(b);
			const g = () => ({
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
			class _ extends s.a.Component {
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
						isContributorRequestPending: r
					} = this.props;
					return s.a.createElement(u.t, {
						priority: e === h.b.ContentGate ? u.c.Secondary : u.c.Primary,
						className: Object(a.a)(t ? null : f.a.RequestButton, n),
						onClick: this.onRequest,
						size: t ? u.d.S : u.d.M,
						disabled: r
					}, r ? o.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : g()[e])
				}
			}
			t.default = Object(i.b)(null, e => ({
				openContributorRequestModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(d.c)(_))
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
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", a.a),
				l = c.a.div("TextWrapper", a.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: o,
					subtitle: i,
					title: c,
					textWrapperClassName: u
				} = e;
				return r.a.createElement("div", {
					className: Object(s.a)(t, a.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, r.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), o ? r.a.createElement(d, null, o) : r.a.createElement(d, null), r.a.createElement(l, {
					className: u
				}, r.a.createElement("div", {
					className: a.a.title
				}, c), i && r.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = n("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				const {
					children: t,
					className: n,
					to: o,
					...s
				} = e, d = Object(a.b)(o);
				return r.a.createElement(i.a, c({
					className: n,
					to: d
				}, s), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, o = t ? d : s.a;
				return r.a.createElement(o, l({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
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
				return y
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				c = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				d = n("./src/reddit/components/RichTextJson/elements.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				_ = n.n(g),
				x = n("./src/lib/lessComponent.tsx");
			const y = "Markdown_Help__Modal",
				C = x.a.wrapped(b.a, "Section", _.a),
				E = x.a.div("Container", _.a),
				O = x.a.table("Table", _.a),
				v = x.a.p("P", _.a);
			class k extends s.a.Component {
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
						r = o.fbt._("quoted text", null, {
							hk: "1Lvb4b"
						}),
						i = o.fbt._("strikethrough", null, {
							hk: "UcaLr"
						}),
						u = o.fbt._("spoilers", null, {
							hk: "372XyC"
						});
					return s.a.createElement(c.a, null, s.a.createElement(a.a, {
						onClosePressed: this.props.closeModal,
						title: o.fbt._("Markdown Help", null, {
							hk: "w08E2"
						})
					}), s.a.createElement(E, null, s.a.createElement(O, {
						className: _.a.helpTable
					}, s.a.createElement("tr", null, s.a.createElement(d.s, null, s.a.createElement(d.j, null, o.fbt._("Type this:", null, {
						hk: "VDjXQ"
					}))), s.a.createElement(d.s, null, s.a.createElement(d.j, null, o.fbt._("to get this:", null, {
						hk: "4zlZi9"
					})))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "*", e, "*")), s.a.createElement(d.p, null, s.a.createElement(d.f, null, e))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "**", t, "**")), s.a.createElement(d.p, null, s.a.createElement(d.b, null, t))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "[reddit!](https://reddit.com)")), s.a.createElement(d.p, null, s.a.createElement(d.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "* ", n, " 1"), s.a.createElement(d.j, null, "* ", n, " 2"), s.a.createElement(d.j, null, "* ", n, " 3")), s.a.createElement(d.p, null, s.a.createElement(d.v, null, s.a.createElement(d.g, null, n, " 1"), s.a.createElement(d.g, null, n, " 2"), s.a.createElement(d.g, null, n, " 3")))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "> ", r)), s.a.createElement(d.p, null, s.a.createElement(d.c, null, r))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, "~~", i, "~~")), s.a.createElement(d.p, null, s.a.createElement(d.d, null, i))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, o.fbt._("super^script", null, {
						hk: "2WteOp"
					}))), s.a.createElement(d.p, null, o.fbt._("super{=script}", [o.fbt._param("=script", s.a.createElement(d.m, null, o.fbt._("script", null, {
						hk: "4a2qMi"
					})))], {
						hk: "1VvC4z"
					}))), s.a.createElement("tr", null, s.a.createElement(d.p, null, s.a.createElement(d.j, null, `>!${u}!<`)), s.a.createElement(d.p, null, s.a.createElement(l.a, null, u)))), s.a.createElement(v, null, o.fbt._("Check the {=commenting wiki page} for more help", [o.fbt._param("=commenting wiki page", s.a.createElement(d.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, o.fbt._("commenting wiki page", null, {
						hk: "25UBE"
					})))], {
						hk: "1J9oBy"
					}))), s.a.createElement(C, null, s.a.createElement(f.a, null, s.a.createElement(h.l, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const j = Object(i.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(y))
			}))(k);
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/postCreation/general.ts"),
				d = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				l = n("./src/reddit/components/FocusableContent/index.tsx"),
				u = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				p = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				h = n("./src/reddit/constants/keycodes.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				_ = n("./src/reddit/selectors/activeModalId.ts"),
				x = n("./src/reddit/selectors/editorContent.ts"),
				y = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				C = n.n(y),
				E = n("./src/lib/lessComponent.tsx");
			const O = E.a.wrapped(f.a, "LoadingIcon", C.a),
				v = e => {
					let {
						isFilled: t,
						...n
					} = e;
					return s.a.createElement(O, n)
				},
				k = E.a.span("ModeDescription", C.a),
				j = E.a.div("ModeWrapper", C.a),
				w = E.a.wrapped(d.a, "MarkdownHelpButton", C.a),
				T = E.a.div("Toolbar", C.a),
				S = Object(a.c)({
					activeModalId: _.a,
					isConverting: e => Object(x.a)(e)
				}),
				D = Object(i.b)(S, (e, t) => ({
					onChange: n => {
						e(Object(c.c)(n)), t.onChange && t.onChange(n)
					},
					helpModalToggled: () => e(Object(c.z)(u.b)),
					switchToRTEModalToggled: () => e(Object(c.z)(m.a.SWITCH_TO_RTE_MODAL_ID))
				}));
			class M extends s.a.Component {
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
						this.props.value ? this.props.switchToRTEModalToggled() : this.props.onSwitchEditorMode(g.i.RICH_TEXT, this.props.value)
					}, this.handleSwitchToRTEConfirm = () => {
						this.props.switchToRTEModalToggled(), this.props.onSwitchEditorMode(g.i.RICH_TEXT, this.props.value)
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
						focusableContentMarkdownClassName: r,
						value: i
					} = this.props, {
						isFocused: a
					} = this.state;
					return s.a.createElement("div", {
						className: e
					}, s.a.createElement(l.a, {
						className: r,
						isFocused: a
					}, s.a.createElement(T, null, s.a.createElement(j, null, s.a.createElement(k, null, o.fbt._("Markdown", null, {
						hk: "42KuwU"
					})), s.a.createElement(w, {
						onClick: this.props.helpModalToggled
					})), s.a.createElement(R, {
						isConverting: t,
						onClick: this.handleSwitchModeClick
					})), s.a.createElement(p.a, {
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
					})), this.props.activeModalId === u.b && s.a.createElement(u.a, {
						withOverlay: !0
					}), this.props.activeModalId === m.a.SWITCH_TO_RTE_MODAL_ID && s.a.createElement(m.b, {
						modalId: m.a.SWITCH_TO_RTE_MODAL_ID,
						onCancel: this.props.switchToRTEModalToggled,
						onConfirm: this.handleSwitchToRTEConfirm
					}))
				}
			}
			const R = s.a.memo(e => {
				let {
					isConverting: t,
					onClick: n
				} = e;
				const r = o.fbt._("Switch to Fancy Pants Editor", null, {
					hk: "1AKY7t"
				});
				return s.a.createElement(b.t, {
					priority: b.c.Plain,
					size: b.d.XS,
					onClick: n,
					Icon: t ? v : void 0,
					text: r
				})
			});
			t.a = D(M)
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = 20,
				r = 180
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
				r = n.n(o),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = n.n(m),
				h = n("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(c.l, "PrimaryButton", p.a),
				f = h.a.wrapped(i.p, "ModalText", p.a);
			class g extends r.a.PureComponent {
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
					return r.a.createElement(i.e, null, r.a.createElement(i.i, null, r.a.createElement(u.a, null, r.a.createElement(i.q, null, this.props.titleText), r.a.createElement(l.a, {
						onClick: this.props.onClose
					}, r.a.createElement(i.b, null)))), r.a.createElement(i.l, null, r.a.createElement(f, null, this.props.bodyText)), r.a.createElement(i.g, null, r.a.createElement(i.a, {
						onClick: this.props.onSecondaryAction
					}, t ? r.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), r.a.createElement(b, {
						onClick: this.props.onPrimaryAction
					}, e ? r.a.createElement(d.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(s.a)(g)
		},
		"./src/reddit/components/PostCreationForm/Prompt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			! function(e) {
				e.LOAD_DRAFT_MODAL_ID = "POST_CREATION__LOAD_DRAFT_MODAL_ID", e.MAX_DRAFTS_MODAL_ID = "POST_CREATION__MAX_DRAFTS_MODAL_ID", e.SWITCH_TO_RTE_MODAL_ID = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID"
			}(o || (o = {}));
			const c = {
					title: () => r.fbt._("Load draft", null, {
						hk: "VQ7SS"
					}),
					body: () => r.fbt._("Loading this draft will discard your current post.", null, {
						hk: "49vMci"
					}),
					confirm: () => r.fbt._("Load Draft", null, {
						hk: "29mFSs"
					}),
					cancel: () => r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				d = {
					title: () => r.fbt._("Save draft", null, {
						hk: "36SGct"
					}),
					body: () => r.fbt._("Looks like you’ve hit your max number of drafts. Please delete one to make room.", null, {
						hk: "4g9gOF"
					}),
					confirm: () => r.fbt._("Manage Drafts", null, {
						hk: "3a6SXJ"
					}),
					cancel: () => r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				l = {
					title: () => r.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "22mr8J"
					}),
					body: () => r.fbt._("Switching to Fancy Pants Editor may result in a loss of content", null, {
						hk: "1cWryd"
					}),
					confirm: () => r.fbt._("Switch", null, {
						hk: "36pRzE"
					}),
					cancel: () => r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				u = {
					[o.LOAD_DRAFT_MODAL_ID]: c,
					[o.MAX_DRAFTS_MODAL_ID]: d,
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
				loadingIcon: "_1FY2h-rhaxwcBudiw3Lc2d"
			}
		},
		"./src/reddit/components/PostEditForm/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/noop.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/components/Poll/async.ts"),
				p = n("./src/reddit/helpers/correlationIdTracker.ts"),
				h = n("./src/reddit/models/PostCreationForm/index.ts"),
				b = n("./src/reddit/models/PostRequirements/index.ts"),
				f = n("./src/reddit/selectors/platform.ts"),
				g = n("./src/reddit/selectors/postCreations.ts"),
				_ = n("./src/reddit/actions/postCreation/editing.ts"),
				x = n("./src/reddit/actions/postCreation/editorContent.ts"),
				y = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				C = n("./src/lib/constants/index.ts"),
				E = n("./src/lib/memoizeByReference/index.ts"),
				O = n("./src/reddit/components/RichTextEditor/media/helpers.ts");
			const v = Object(E.a)((e, t) => {
				const n = e.name,
					{
						allowedPostTypes: r
					} = e,
					s = Object(O.g)(t),
					i = ((e, t, n) => {
						if (!t) return null;
						let r = "";
						return !e.total || t.images || t.videos ? e.video && !t.videos ? r = o.fbt._("Videos are not allowed in {subreddit name}", [o.fbt._param("subreddit name", `r/${n}`)], {
							hk: "4DBrcv"
						}) : !e.image && !e.gifvideo || t.images || (r = o.fbt._("Images are not allowed in {subreddit name}", [o.fbt._param("subreddit name", `r/${n}`)], {
							hk: "27ju8Q"
						})) : r = o.fbt._("Videos and images are not allowed in {subreddit name}", [o.fbt._param("subreddit name", `r/${n}`)], {
							hk: "2GGFeK"
						}), r || null
					})(s, r, n);
				return i ? [i] : (e => {
					const t = [];
					return e.image > C.fb && t.push(o.fbt._("Post may not contain more that 20 images", null, {
						hk: "1Szc36"
					})), e.video + e.gifvideo > C.ib && t.push(o.fbt._("Post may not contain more that 5 videos", null, {
						hk: "2WhZ8k"
					})), t
				})(s)
			});
			var k = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				j = n("./src/reddit/components/RichTextEditor/index.tsx"),
				w = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				T = n("./src/reddit/contexts/PageLayer/index.tsx"),
				S = n("./src/reddit/controls/ErrorText/index.tsx"),
				D = n("./src/reddit/helpers/richTextEditor/index.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				R = n("./src/reddit/controls/Button/index.tsx"),
				F = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				I = n("./src/reddit/components/PostEditForm/index.m.less"),
				P = n.n(I),
				A = n("./src/lib/lessComponent.tsx");
			const B = A.a.div("BottomRow", P.a),
				z = A.a.div("FormContent", P.a),
				N = A.a.wrapped(R.l, "SubmitButton", P.a),
				L = A.a.wrapped(F.a, "LoadingIcon", P.a),
				U = Object(T.u)(),
				W = Object(l.c)({
					destSubreddit: g.h,
					editorMode: g.i,
					errorMessages: g.j,
					hasError: g.k,
					markdownDraft: g.l,
					pending: g.ab,
					postRequirements: g.pb,
					rteDraft: g.m,
					subreddit: T.r,
					uploads: e => e.uploads,
					user: M.k,
					isCommentsPage: f.f
				}),
				H = Object(c.b)(W, (e, t) => ({
					onCancel: t => e(_.b(t)),
					onSubmitDraft: t => e(_.c(t)),
					onSuccess: t => e(Object(d.b)(t)),
					onToggleEditorMode: (t, n) => e(x.d(h.h.POST_EDITING, t, n))
				}));
			class K extends a.a.Component {
				constructor(e) {
					super(e), this.onEditorResize = e => {
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
							rteState: n
						} = this.state;
						return n.isBound && e === h.i.RICH_TEXT ? v(t, n.editorState.getCurrentContent()) : []
					}, this.getTextPostContent = () => {
						const {
							editorMode: e,
							uploads: t
						} = this.props, {
							markdownBody: n,
							rteState: o
						} = this.state;
						return e === h.i.RICH_TEXT ? w.a.toRichTextJSON(o, t) : {
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
						richtextPostDraftChanged: n
					} = this.state;
					return e === h.i.RICH_TEXT ? !!n : e === h.i.MARKDOWN && !!t
				}
				render() {
					const {
						editorMode: e,
						errorMessages: t,
						hasError: n,
						isCommentsPage: r,
						pending: i,
						post: c,
						postRequirements: d,
						uploads: l
					} = this.props, {
						markdownBody: p,
						markdownPostDraftChanged: f,
						richtextPostDraftChanged: g,
						rteState: _
					} = this.state, x = d && d.bodyRestrictionPolicy === b.a.Required ? o.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : o.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), C = this.getMediaValidationErrors(), E = [...t, ...C];
					n && !E.length && E.push(o.fbt._("Something went wrong. Just don't panic.", null, {
						hk: "FsWrq"
					}));
					const O = !w.a.isAllMediaUploaded(_, l);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(z, null, e === h.i.RICH_TEXT ? a.a.createElement(j.a, {
						allowMediaUploads: !0,
						className: Object(u.a)(P.a.Editor, {
							[P.a.isPending]: !!i
						}),
						destSubreddit: this.props.destSubreddit,
						editorType: D.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: _,
						onChange: this.onRichPostChange,
						onEditorResize: this.onEditorResize,
						onSubmit: this.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						readOnly: !!i,
						rteRef: this.setRteRef,
						trackToolbarClick: s.a,
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
					}), a.a.createElement(B, null, a.a.createElement(R.r, {
						disabled: !!i,
						onClick: this.cancelEdit
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(N, {
						disabled: !!i || !!C.length || !this.hasChanged() || O,
						onClick: this.onSubmit
					}, i ? a.a.createElement(L, {
						sizePx: 10
					}) : o.fbt._("Save", null, {
						hk: "4yMsMq"
					}))), a.a.createElement(S.a, {
						className: P.a.errorMessages,
						messages: E
					}), a.a.createElement(y.a, {
						editKey: c.id,
						hasValue: !(!f && !g),
						isPostEdit: !0
					})), a.a.createElement(m.a, {
						postId: c.id,
						isCommentsPage: !!r
					}))
				}
			}
			t.default = U(H(K))
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = n.n(p);
			const b = c.a.wrapped(d.a, "Banner", h.a),
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
				const r = t === l.e.Comment ? l.a.Create : l.a.Draft;
				return s.a.createElement(b, {
					subtitle: s.a.createElement("span", {
						className: h.a.Subtitle
					}, o.fbt._("Your request to {restrictions} in {displayName} was sent and is pending. In the meantime, you can {action} a post and {=browse the community}", [o.fbt._param("restrictions", l.d[t]()), o.fbt._param("displayName", n.name), o.fbt._param("action", l.c[r]()), o.fbt._param("=browse the community", s.a.createElement("a", {
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
				r = n.n(o),
				s = n("./node_modules/react-autosize-textarea/lib/index.js"),
				i = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				d = n.n(c);

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
						initialHeight: s
					} = e;
					return r.a.createElement("div", {
						className: Object(a.a)(d.a.editorWrapper, t),
						style: s ? {
							height: s
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
					return r.a.createElement(i.a, l({
						className: Object(a.a)(d.a.textareaAutosize, {
							[d.a.mIsFullHeight]: t
						}),
						innerRef: n
					}, o))
				};
			class p extends r.a.Component {
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
						...s
					} = this.props, {
						isResized: i
					} = this.state;
					return r.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, r.a.createElement(m, l({}, s, {
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = n("./src/reddit/selectors/user.ts"),
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
					currentUser: d.k,
					isNightMode: d.db,
					isPresenceUserPrefEnabled: d.V,
					shouldHideNSFW: d.F
				}),
				g = Object(i.b)(f);
			t.a = g(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: r,
					wrapperClassName: i,
					...a
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return s.a.createElement("div", {
					className: Object(o.a)(h.a.currentUserIconWrapper, i)
				}, d ? s.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : s.a.createElement(m.b, b({}, a, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && s.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(a);
			t.a = Object(o.memo)(Object(o.forwardRef)((e, t) => {
				const n = e.size || i.d.XS;
				return r.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(s.a)(c.a.toggleSwitch, e.className, c.a[n], {
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
				}, r.a.createElement("div", {
					className: c.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			async function s(e, t, n) {
				const s = Object(r.a)(e, {
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
					i = await s;
				if (i.ok) {
					const e = {},
						t = {},
						n = i.body;
					return Object.keys(n).forEach(o => {
						const r = n[o];
						t[o] = r, e[r.userId] || (e[r.userId] = []), e[r.userId].push(r.id)
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
				const s = await Object(r.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/badges/${t}?users=${n}`
				});
				if (s.ok) {
					const e = {},
						t = [],
						n = s.body;
					return Object.keys(n).forEach(o => {
						const r = n[o];
						e[o] = r, t.push(r.id)
					}), {
						...s,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return s
			}

			function a(e, t, n) {
				let s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(r.a)(e, {
					method: "patch",
					endpoint: `${o.a.metaUrl}/badges/${t}/${n}`,
					data: {
						selected: s
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var o = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function s(e, t) {
				return Object(r.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function i(e, t) {
				return Object(r.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function a(e, t) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: t
				})
			}

			function c(e, t) {
				return Object(r.a)(e, {
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
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			}));
			var o = n("./node_modules/lodash/map.js"),
				r = n.n(o),
				s = n("./src/lib/FocusTrap/index.ts");
			const i = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				a = e => {
					let t = e;
					do {
						if (i(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				c = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				d = () => c() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return r()(t, e => e.textContent || "")
				})() : null,
				l = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				u = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!l(n, e)) return;
					const {
						startContainer: o,
						startOffset: r,
						endContainer: s,
						endOffset: i
					} = n, a = document.createRange();
					a.selectNode(e);
					let c = !0;
					if (-1 === a.compareBoundaryPoints(Range.START_TO_START, n) && (a.setStart(o, r), c = !1), 1 === a.compareBoundaryPoints(Range.END_TO_END, n) && (a.setEnd(s, i), c = !1), c) return [e];
					const d = document.createElement("div");
					return d.appendChild(a.cloneContents()), [...d.childNodes]
				},
				m = (e, t, n) => {
					let o = e;
					for (; o && (!n || !n(o));) {
						if (o && t(o)) return o;
						o = o.parentElement
					}
				},
				p = e => e && e.parentElement && m(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				h = e => {
					e.querySelectorAll(s.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: r.L.SERVER_ERROR,
				fields: [{
					field: "",
					msg: o.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js");

			function r(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function s(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(r).join(" ") : o.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function i(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "d", (function() {
					return s
				})), n.d(t, "b", (function() {
					return i
				})), n.d(t, "a", (function() {
					return a
				})), n.d(t, "c", (function() {
					return c
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(o || (o = {}));
			const r = e => {
					if (window.sessionStorage) {
						const t = window.sessionStorage.getItem(e);
						if (t) return JSON.parse(t)
					}
					return null
				},
				s = e => {
					((e, t) => {
						window.sessionStorage && window.sessionStorage.setItem(e, JSON.stringify(t))
					})(o.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				i = () => r(o.COMMENT_BEFORE_SIGNUP_STORAGE),
				a = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(o.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => {
					return !!r(o.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "l", (function() {
				return E
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/index.ts");
			const l = e => {
					const t = Object(a.o)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(c.o)(e),
						screen: Object(c.bb)(e),
						subreddit: Object(c.jb)(e),
						post: t ? Object(c.K)(e, t) : null,
						profile: Object(c.T)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				u = async (e, t, o, r) => {
					const s = {
							commentId: r,
							commentsPageKey: o
						},
						a = r && Object(i.j)(e, s) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(d.a)({
						noun: "comment",
						...l(e),
						comment: r ? Object(c.h)(e, r) : null,
						listing: Object(c.z)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, m = (e, t, n, o) => {
					const r = l(e);
					return Object(d.a)({
						...r,
						actionInfo: {
							...r.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: o,
							postId: n
						}
					})
				}, p = e => Object(d.a)({
					noun: "cancel",
					...l(e)
				}), h = (e, t) => {
					t === s.c.replyToPost && Object(d.a)({
						noun: "input",
						...l(e)
					})
				}, b = (e, t) => Object(d.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.o)(t),
					screen: Object(c.bb)(t),
					subreddit: Object(c.jb)(t),
					post: Object(c.K)(t, e)
				}), f = e => Object(d.a)({
					noun: "edit",
					...l(e)
				}), g = e => Object(d.a)({
					noun: "save_edit",
					...l(e)
				}), _ = (e, t) => n => {
					const o = "image_upload" === e || "video_upload" === e;
					return {
						...l(n),
						noun: o ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, x = () => e => ({
					...l(e),
					action: "open",
					noun: "gif_tooltip"
				}), y = e => t => ({
					...l(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), C = () => e => ({
					...l(e),
					action: "select",
					noun: "gif_tooltip_result"
				}), E = () => e => ({
					...l(e),
					source: "comment_composer",
					action: "open",
					noun: "images_tooltip"
				})
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...o.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: o.jb(t)
				}),
				s = e => t => ({
					...o.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: o.jb(t)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					...o.o(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: o.jb(t)
				}),
				s = e => t => ({
					...o.o(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: o.jb(t)
				})
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: n,
					...o
				} = e;
				return r.a.createElement("svg", c({
					className: Object(s.a)(a.a.dropdown, {
						[a.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o), r.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
		"./src/reddit/icons/svgs/MarkdownMode/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 208 128"
			}, r.a.createElement("rect", {
				width: "198",
				height: "118",
				x: "5",
				y: "5",
				ry: "10",
				stroke: "currentColor",
				strokeWidth: "10",
				fill: "none"
			}), r.a.createElement("path", {
				d: "M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
			}))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
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
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				s = n.n(r);
			t.a = o.a.div("rightAligned", s.a)
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = Object(o.a)(i.Q, i.P, (e, t) => e || t),
				c = Object(o.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: r.N
				}), e => e === r.X.Enabled)
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const a = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				c = Object(o.a)((e, t) => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), i.a),
				d = e => a.find(t => !!Object(i.a)(c(e, t))),
				l = Object(o.a)(d, e => !!e),
				u = e => {
					const t = d(e);
					return !!t && c(e, t) === r.db.SkipOnboarding
				},
				m = e => {
					const t = d(e);
					return !!t && c(e, t) === r.db.RegOnboarding
				}
		},
		"./src/reddit/selectors/experiments/imageComment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/comments.ts");
			const i = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: o.re
					}) === o.Sd
				},
				a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: o.se
					}) === o.Sd
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: o.be
					}) === o.Sd
				},
				d = (e, t) => {
					let {
						subredditId: n
					} = t;
					return void 0 !== n && Object(s.D)(e, {
						subredditId: n
					}) && i(e)
				},
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					return void 0 !== n && Object(s.B)(e, {
						subredditId: n
					}) && i(e)
				}
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					if (Object(i.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: s.e,
						experimentName: o.rg
					}) === o.Sd
				},
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: s.e,
						experimentName: o.sg
					}) === o.Sd
				},
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: s.e,
						experimentName: o.qg
					});
					return t === o.gg.TypingIndicators || t === o.gg.IndicatorsPlusCTA
				},
				l = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(s.d)(e, {
						experimentName: o.qg
					});
					return (null == t ? void 0 : t.variant) === o.gg.IndicatorsPlusCTA
				}
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"0daddfa21bb8"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RichTextEditor.8b3c4aac26fe99bf1c32.js.map