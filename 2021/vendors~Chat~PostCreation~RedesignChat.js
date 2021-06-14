// https://www.redditstatic.com/desktop2x/vendors~Chat~PostCreation~RedesignChat.bc666e204513e3f2e137.js
// Retrieved at 6/14/2021, 12:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Chat~PostCreation~RedesignChat"], {
		"./node_modules/linkify-it/index.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
					t && Object.keys(t).forEach((function(r) {
						e[r] = t[r]
					}))
				})), e
			}

			function o(e) {
				return Object.prototype.toString.call(e)
			}

			function i(e) {
				return "[object Function]" === o(e)
			}

			function a(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var s = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var u = {
					"http:": {
						validate: function(e, t, r) {
							var n = e.slice(t);
							return r.re.http || (r.re.http = new RegExp("^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path, "i")), r.re.http.test(n) ? n.match(r.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, t, r) {
							var n = e.slice(t);
							return r.re.no_http || (r.re.no_http = new RegExp("^" + r.re.src_auth + "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path, "i")), r.re.no_http.test(n) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : n.match(r.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, t, r) {
							var n = e.slice(t);
							return r.re.mailto || (r.re.mailto = new RegExp("^" + r.re.src_email_name + "@" + r.re.src_host_strict, "i")), r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0
						}
					}
				},
				c = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function p(e) {
				var t = e.re = r("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					n = e.__tlds__.slice();

				function s(e) {
					return e.replace("%TLDS%", t.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || n.push(c), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(s(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(s(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(s(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(s(t.tpl_host_fuzzy_test), "i");
				var u = [];

				function l(e, t) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
					var r = e.__schemas__[t];
					if (null !== r) {
						var n = {
							validate: null,
							link: null
						};
						if (e.__compiled__[t] = n, "[object Object]" === o(r)) return ! function(e) {
							return "[object RegExp]" === o(e)
						}(r.validate) ? i(r.validate) ? n.validate = r.validate : l(t, r) : n.validate = function(e) {
							return function(t, r) {
								var n = t.slice(r);
								return e.test(n) ? n.match(e)[0].length : 0
							}
						}(r.validate), void(i(r.normalize) ? n.normalize = r.normalize : r.normalize ? l(t, r) : n.normalize = function(e, t) {
							t.normalize(e)
						});
						! function(e) {
							return "[object String]" === o(e)
						}(r) ? l(t, r): u.push(t)
					}
				})), u.forEach((function(t) {
					e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
				})), e.__compiled__[""] = {
					validate: null,
					normalize: function(e, t) {
						t.normalize(e)
					}
				};
				var p = Object.keys(e.__compiled__).filter((function(t) {
					return t.length > 0 && e.__compiled__[t]
				})).map(a).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + p + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + p + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function f(e, t) {
				var r = e.__index__,
					n = e.__last_index__,
					o = e.__text_cache__.slice(r, n);
				this.schema = e.__schema__.toLowerCase(), this.index = r + t, this.lastIndex = n + t, this.raw = o, this.text = o, this.url = o
			}

			function d(e, t) {
				var r = new f(e, t);
				return e.__compiled__[r.schema].normalize(r, e), r
			}

			function m(e, t) {
				if (!(this instanceof m)) return new m(e, t);
				var r;
				t || (r = e, Object.keys(r || {}).reduce((function(e, t) {
					return e || s.hasOwnProperty(t)
				}), !1) && (t = e, e = {})), this.__opts__ = n({}, s, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, u, e), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, p(this)
			}
			m.prototype.add = function(e, t) {
				return this.__schemas__[e] = t, p(this), this
			}, m.prototype.set = function(e) {
				return this.__opts__ = n(this.__opts__, e), this
			}, m.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var t, r, n, o, i, a, s, u;
				if (this.re.schema_test.test(e))
					for ((s = this.re.schema_search).lastIndex = 0; null !== (t = s.exec(e));)
						if (o = this.testSchemaAt(e, t[2], s.lastIndex)) {
							this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (u = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || u < this.__index__) && null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = r.index + r[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = r.index + r[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (i = n.index + n[1].length, a = n.index + n[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = a)), this.__index__ >= 0
			}, m.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, m.prototype.testSchemaAt = function(e, t, r) {
				return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0
			}, m.prototype.match = function(e) {
				var t = 0,
					r = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (r.push(d(this, t)), t = this.__last_index__);
				for (var n = t ? e.slice(t) : e; this.test(n);) r.push(d(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
				return r.length ? r : null
			}, m.prototype.tlds = function(e, t) {
				return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, r) {
					return e !== r[t - 1]
				})).reverse(), p(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, p(this), this)
			}, m.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, m.prototype.onCompile = function() {}, e.exports = m
		},
		"./node_modules/linkify-it/lib/re.js": function(e, t, r) {
			"use strict";
			e.exports = function(e) {
				var t = {};
				t.src_Any = r("./node_modules/uc.micro/properties/Any/regex.js").source, t.src_Cc = r("./node_modules/uc.micro/categories/Cc/regex.js").source, t.src_Z = r("./node_modules/uc.micro/categories/Z/regex.js").source, t.src_P = r("./node_modules/uc.micro/categories/P/regex.js").source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
				return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, r, n, o) {
				return o(e, (function(e, o, i) {
					r = n ? (n = !1, e) : t(r, e, o, i)
				})), r
			}
		},
		"./node_modules/lodash/chunk.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseSlice.js"),
				o = r("./node_modules/lodash/_isIterateeCall.js"),
				i = r("./node_modules/lodash/toInteger.js"),
				a = Math.ceil,
				s = Math.max;
			e.exports = function(e, t, r) {
				t = (r ? o(e, t, r) : void 0 === t) ? 1 : s(i(t), 0);
				var u = null == e ? 0 : e.length;
				if (!u || t < 1) return [];
				for (var c = 0, l = 0, p = Array(a(u / t)); c < u;) p[l++] = n(e, c, c += t);
				return p
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayReduce.js"),
				o = r("./node_modules/lodash/_baseEach.js"),
				i = r("./node_modules/lodash/_baseIteratee.js"),
				a = r("./node_modules/lodash/_baseReduce.js"),
				s = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, r) {
				var u = s(e) ? n : a,
					c = arguments.length < 3;
				return u(e, i(t, 4), r, c, o)
			}
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return de
			}));
			var n = r("./node_modules/react/index.js");

			function o(e) {
				var t = e.getBoundingClientRect();
				return {
					width: t.width,
					height: t.height,
					top: t.top,
					right: t.right,
					bottom: t.bottom,
					left: t.left,
					x: t.left,
					y: t.top
				}
			}

			function i(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function a(e) {
				var t = i(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function s(e) {
				return e instanceof i(e).Element || e instanceof Element
			}

			function u(e) {
				return e instanceof i(e).HTMLElement || e instanceof HTMLElement
			}

			function c(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function l(e) {
				return (s(e) ? e.ownerDocument : e.document).documentElement
			}

			function p(e) {
				return o(l(e)).left + a(e).scrollLeft
			}

			function f(e) {
				return i(e).getComputedStyle(e)
			}

			function d(e) {
				var t = f(e),
					r = t.overflow,
					n = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(r + o + n)
			}

			function m(e, t, r) {
				void 0 === r && (r = !1);
				var n, s, f = l(t),
					m = o(e),
					h = u(t),
					_ = {
						scrollLeft: 0,
						scrollTop: 0
					},
					g = {
						x: 0,
						y: 0
					};
				return (h || !h && !r) && (("body" !== c(t) || d(f)) && (_ = (n = t) !== i(n) && u(n) ? {
					scrollLeft: (s = n).scrollLeft,
					scrollTop: s.scrollTop
				} : a(n)), u(t) ? ((g = o(t)).x += t.clientLeft, g.y += t.clientTop) : f && (g.x = p(f))), {
					x: m.left + _.scrollLeft - g.x,
					y: m.top + _.scrollTop - g.y,
					width: m.width,
					height: m.height
				}
			}

			function h(e) {
				return {
					x: e.offsetLeft,
					y: e.offsetTop,
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			}

			function _(e) {
				return "html" === c(e) ? e : e.assignedSlot || e.parentNode || e.host || l(e)
			}

			function g(e, t) {
				void 0 === t && (t = []);
				var r = function e(t) {
						return ["html", "body", "#document"].indexOf(c(t)) >= 0 ? t.ownerDocument.body : u(t) && d(t) ? t : e(_(t))
					}(e),
					n = "body" === c(r),
					o = i(r),
					a = n ? [o].concat(o.visualViewport || [], d(r) ? r : []) : r,
					s = t.concat(a);
				return n ? s : s.concat(g(_(a)))
			}

			function b(e) {
				return ["table", "td", "th"].indexOf(c(e)) >= 0
			}

			function y(e) {
				return u(e) && "fixed" !== f(e).position ? e.offsetParent : null
			}

			function v(e) {
				for (var t = i(e), r = y(e); r && b(r) && "static" === f(r).position;) r = y(r);
				return r && "body" === c(r) && "static" === f(r).position ? t : r || function(e) {
					for (var t = _(e); u(t) && ["html", "body"].indexOf(c(t)) < 0;) {
						var r = f(t);
						if ("none" !== r.transform || "none" !== r.perspective || "auto" !== r.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var x = "top",
				w = "bottom",
				D = "right",
				k = "left",
				F = "auto",
				j = [x, w, D, k],
				z = "start",
				E = "end",
				O = "clippingParents",
				A = "viewport",
				C = "popper",
				B = "reference",
				P = j.reduce((function(e, t) {
					return e.concat([t + "-" + z, t + "-" + E])
				}), []),
				M = [].concat(j, [F]).reduce((function(e, t) {
					return e.concat([t, t + "-" + z, t + "-" + E])
				}), []),
				L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function q(e) {
				var t = new Map,
					r = new Set,
					n = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					r.has(e.name) || function e(o) {
						r.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(n) {
							if (!r.has(n)) {
								var o = t.get(n);
								o && e(o)
							}
						})), n.push(o)
					}(e)
				})), n
			}
			var S = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function R() {
				for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function Z(e) {
				void 0 === e && (e = {});
				var t = e,
					r = t.defaultModifiers,
					n = void 0 === r ? [] : r,
					o = t.defaultOptions,
					i = void 0 === o ? S : o;
				return function(e, t, r) {
					void 0 === r && (r = i);
					var o, a, u = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, S), i),
							modifiersData: {},
							elements: {
								reference: e,
								popper: t
							},
							attributes: {},
							styles: {}
						},
						c = [],
						l = !1,
						p = {
							state: u,
							setOptions: function(r) {
								f(), u.options = Object.assign(Object.assign(Object.assign({}, i), u.options), r), u.scrollParents = {
									reference: s(e) ? g(e) : e.contextElement ? g(e.contextElement) : [],
									popper: g(t)
								};
								var o = function(e) {
									var t = q(e);
									return L.reduce((function(e, r) {
										return e.concat(t.filter((function(e) {
											return e.phase === r
										})))
									}), [])
								}(function(e) {
									var t = e.reduce((function(e, t) {
										var r = e[t.name];
										return e[t.name] = r ? Object.assign(Object.assign(Object.assign({}, r), t), {}, {
											options: Object.assign(Object.assign({}, r.options), t.options),
											data: Object.assign(Object.assign({}, r.data), t.data)
										}) : t, e
									}), {});
									return Object.keys(t).map((function(e) {
										return t[e]
									}))
								}([].concat(n, u.options.modifiers)));
								return u.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), u.orderedModifiers.forEach((function(e) {
									var t = e.name,
										r = e.options,
										n = void 0 === r ? {} : r,
										o = e.effect;
									if ("function" == typeof o) {
										var i = o({
											state: u,
											name: t,
											instance: p,
											options: n
										});
										c.push(i || function() {})
									}
								})), p.update()
							},
							forceUpdate: function() {
								if (!l) {
									var e = u.elements,
										t = e.reference,
										r = e.popper;
									if (R(t, r)) {
										u.rects = {
											reference: m(t, v(r), "fixed" === u.options.strategy),
											popper: h(r)
										}, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach((function(e) {
											return u.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var n = 0; n < u.orderedModifiers.length; n++)
											if (!0 !== u.reset) {
												var o = u.orderedModifiers[n],
													i = o.fn,
													a = o.options,
													s = void 0 === a ? {} : a,
													c = o.name;
												"function" == typeof i && (u = i({
													state: u,
													options: s,
													name: c,
													instance: p
												}) || u)
											} else u.reset = !1, n = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									p.forceUpdate(), e(u)
								}))
							}, function() {
								return a || (a = new Promise((function(e) {
									Promise.resolve().then((function() {
										a = void 0, e(o())
									}))
								}))), a
							}),
							destroy: function() {
								f(), l = !0
							}
						};
					if (!R(e, t)) return p;

					function f() {
						c.forEach((function(e) {
							return e()
						})), c = []
					}
					return p.setOptions(r).then((function(e) {
						!l && r.onFirstUpdate && r.onFirstUpdate(e)
					})), p
				}
			}
			var T = {
				passive: !0
			};

			function W(e) {
				return e.split("-")[0]
			}

			function H(e) {
				return e.split("-")[1]
			}

			function I(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function U(e) {
				var t, r = e.reference,
					n = e.element,
					o = e.placement,
					i = o ? W(o) : null,
					a = o ? H(o) : null,
					s = r.x + r.width / 2 - n.width / 2,
					u = r.y + r.height / 2 - n.height / 2;
				switch (i) {
					case x:
						t = {
							x: s,
							y: r.y - n.height
						};
						break;
					case w:
						t = {
							x: s,
							y: r.y + r.height
						};
						break;
					case D:
						t = {
							x: r.x + r.width,
							y: u
						};
						break;
					case k:
						t = {
							x: r.x - n.width,
							y: u
						};
						break;
					default:
						t = {
							x: r.x,
							y: r.y
						}
				}
				var c = i ? I(i) : null;
				if (null != c) {
					var l = "y" === c ? "height" : "width";
					switch (a) {
						case z:
							t[c] = Math.floor(t[c]) - Math.floor(r[l] / 2 - n[l] / 2);
							break;
						case E:
							t[c] = Math.floor(t[c]) + Math.ceil(r[l] / 2 - n[l] / 2)
					}
				}
				return t
			}
			var $ = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function N(e) {
				var t, r = e.popper,
					n = e.popperRect,
					o = e.placement,
					a = e.offsets,
					s = e.position,
					u = e.gpuAcceleration,
					c = e.adaptive,
					p = function(e) {
						var t = e.x,
							r = e.y,
							n = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * n) / n || 0,
							y: Math.round(r * n) / n || 0
						}
					}(a),
					f = p.x,
					d = p.y,
					m = a.hasOwnProperty("x"),
					h = a.hasOwnProperty("y"),
					_ = k,
					g = x,
					b = window;
				if (c) {
					var y = v(r);
					y === i(r) && (y = l(r)), o === x && (g = w, d -= y.clientHeight - n.height, d *= u ? 1 : -1), o === k && (_ = D, f -= y.clientWidth - n.width, f *= u ? 1 : -1)
				}
				var F, j = Object.assign({
					position: s
				}, c && $);
				return u ? Object.assign(Object.assign({}, j), {}, ((F = {})[g] = h ? "0" : "", F[_] = m ? "0" : "", F.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + f + "px, " + d + "px)" : "translate3d(" + f + "px, " + d + "px, 0)", F)) : Object.assign(Object.assign({}, j), {}, ((t = {})[g] = h ? d + "px" : "", t[_] = m ? f + "px" : "", t.transform = "", t))
			}
			var V = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function K(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return V[e]
				}))
			}
			var X = {
				start: "end",
				end: "start"
			};

			function Y(e) {
				return e.replace(/start|end/g, (function(e) {
					return X[e]
				}))
			}

			function G(e, t) {
				var r = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (r) {
					var n = t;
					do {
						if (n && e.isSameNode(n)) return !0;
						n = n.parentNode || n.host
					} while (n)
				}
				return !1
			}

			function J(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function Q(e, t) {
				return t === A ? J(function(e) {
					var t = i(e),
						r = l(e),
						n = t.visualViewport,
						o = r.clientWidth,
						a = r.clientHeight,
						s = 0,
						u = 0;
					return n && (o = n.width, a = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = n.offsetLeft, u = n.offsetTop)), {
						width: o,
						height: a,
						x: s + p(e),
						y: u
					}
				}(e)) : u(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : J(function(e) {
					var t = l(e),
						r = a(e),
						n = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
						i = Math.max(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
						s = -r.scrollLeft + p(e),
						u = -r.scrollTop;
					return "rtl" === f(n || t).direction && (s += Math.max(t.clientWidth, n ? n.clientWidth : 0) - o), {
						width: o,
						height: i,
						x: s,
						y: u
					}
				}(l(e)))
			}

			function ee(e, t, r) {
				var n = "clippingParents" === t ? function(e) {
						var t = g(e),
							r = ["absolute", "fixed"].indexOf(f(e).position) >= 0 && u(e) ? v(e) : e;
						return s(r) ? t.filter((function(e) {
							return s(e) && G(e, r)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(n, [r]),
					i = o[0],
					a = o.reduce((function(t, r) {
						var n = Q(e, r);
						return t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t
					}), Q(e, i));
				return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
			}

			function te(e) {
				return Object.assign(Object.assign({}, {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}), e)
			}

			function re(e, t) {
				return t.reduce((function(t, r) {
					return t[r] = e, t
				}), {})
			}

			function ne(e, t) {
				void 0 === t && (t = {});
				var r = t,
					n = r.placement,
					i = void 0 === n ? e.placement : n,
					a = r.boundary,
					u = void 0 === a ? O : a,
					c = r.rootBoundary,
					p = void 0 === c ? A : c,
					f = r.elementContext,
					d = void 0 === f ? C : f,
					m = r.altBoundary,
					h = void 0 !== m && m,
					_ = r.padding,
					g = void 0 === _ ? 0 : _,
					b = te("number" != typeof g ? g : re(g, j)),
					y = d === C ? B : C,
					v = e.elements.reference,
					k = e.rects.popper,
					F = e.elements[h ? y : d],
					z = ee(s(F) ? F : F.contextElement || l(e.elements.popper), u, p),
					E = o(v),
					P = U({
						reference: E,
						element: k,
						strategy: "absolute",
						placement: i
					}),
					M = J(Object.assign(Object.assign({}, k), P)),
					L = d === C ? M : E,
					q = {
						top: z.top - L.top + b.top,
						bottom: L.bottom - z.bottom + b.bottom,
						left: z.left - L.left + b.left,
						right: L.right - z.right + b.right
					},
					S = e.modifiersData.offset;
				if (d === C && S) {
					var R = S[i];
					Object.keys(q).forEach((function(e) {
						var t = [D, w].indexOf(e) >= 0 ? 1 : -1,
							r = [x, w].indexOf(e) >= 0 ? "y" : "x";
						q[e] += R[r] * t
					}))
				}
				return q
			}

			function oe(e, t, r) {
				return Math.max(e, Math.min(t, r))
			}

			function ie(e, t, r) {
				return void 0 === r && (r = {
					x: 0,
					y: 0
				}), {
					top: e.top - t.height - r.y,
					right: e.right - t.width + r.x,
					bottom: e.bottom - t.height + r.y,
					left: e.left - t.width - r.x
				}
			}

			function ae(e) {
				return [x, D, w, k].some((function(t) {
					return e[t] >= 0
				}))
			}
			var se = Z({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								r = e.instance,
								n = e.options,
								o = n.scroll,
								a = void 0 === o || o,
								s = n.resize,
								u = void 0 === s || s,
								c = i(t.elements.popper),
								l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return a && l.forEach((function(e) {
									e.addEventListener("scroll", r.update, T)
								})), u && c.addEventListener("resize", r.update, T),
								function() {
									a && l.forEach((function(e) {
										e.removeEventListener("scroll", r.update, T)
									})), u && c.removeEventListener("resize", r.update, T)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var t = e.state,
								r = e.name;
							t.modifiersData[r] = U({
								reference: t.rects.reference,
								element: t.rects.popper,
								strategy: "absolute",
								placement: t.placement
							})
						},
						data: {}
					}, {
						name: "computeStyles",
						enabled: !0,
						phase: "beforeWrite",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = r.gpuAcceleration,
								o = void 0 === n || n,
								i = r.adaptive,
								a = void 0 === i || i,
								s = {
									placement: W(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), N(Object.assign(Object.assign({}, s), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: a
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), N(Object.assign(Object.assign({}, s), {}, {
								offsets: t.modifiersData.arrow,
								position: "absolute",
								adaptive: !1
							})))), t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-placement": t.placement
							})
						},
						data: {}
					}, {
						name: "applyStyles",
						enabled: !0,
						phase: "write",
						fn: function(e) {
							var t = e.state;
							Object.keys(t.elements).forEach((function(e) {
								var r = t.styles[e] || {},
									n = t.attributes[e] || {},
									o = t.elements[e];
								u(o) && c(o) && (Object.assign(o.style, r), Object.keys(n).forEach((function(e) {
									var t = n[e];
									!1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
								})))
							}))
						},
						effect: function(e) {
							var t = e.state,
								r = {
									popper: {
										position: t.options.strategy,
										left: "0",
										top: "0",
										margin: "0"
									},
									arrow: {
										position: "absolute"
									},
									reference: {}
								};
							return Object.assign(t.elements.popper.style, r.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
								function() {
									Object.keys(t.elements).forEach((function(e) {
										var n = t.elements[e],
											o = t.attributes[e] || {},
											i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										u(n) && c(n) && (Object.assign(n.style, i), Object.keys(o).forEach((function(e) {
											n.removeAttribute(e)
										})))
									}))
								}
						},
						requires: ["computeStyles"]
					}, {
						name: "offset",
						enabled: !0,
						phase: "main",
						requires: ["popperOffsets"],
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.offset,
								i = void 0 === o ? [0, 0] : o,
								a = M.reduce((function(e, r) {
									return e[r] = function(e, t, r) {
										var n = W(e),
											o = [k, x].indexOf(n) >= 0 ? -1 : 1,
											i = "function" == typeof r ? r(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : r,
											a = i[0],
											s = i[1];
										return a = a || 0, s = (s || 0) * o, [k, D].indexOf(n) >= 0 ? {
											x: s,
											y: a
										} : {
											x: a,
											y: s
										}
									}(r, t.rects, i), e
								}), {}),
								s = a[t.placement],
								u = s.x,
								c = s.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = a
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name;
							if (!t.modifiersData[n]._skip) {
								for (var o = r.mainAxis, i = void 0 === o || o, a = r.altAxis, s = void 0 === a || a, u = r.fallbackPlacements, c = r.padding, l = r.boundary, p = r.rootBoundary, f = r.altBoundary, d = r.flipVariations, m = void 0 === d || d, h = r.allowedAutoPlacements, _ = t.options.placement, g = W(_), b = u || (g === _ || !m ? [K(_)] : function(e) {
										if (W(e) === F) return [];
										var t = K(e);
										return [Y(e), t, Y(t)]
									}(_)), y = [_].concat(b).reduce((function(e, r) {
										return e.concat(W(r) === F ? function(e, t) {
											void 0 === t && (t = {});
											var r = t,
												n = r.placement,
												o = r.boundary,
												i = r.rootBoundary,
												a = r.padding,
												s = r.flipVariations,
												u = r.allowedAutoPlacements,
												c = void 0 === u ? M : u,
												l = H(n),
												p = (l ? s ? P : P.filter((function(e) {
													return H(e) === l
												})) : j).filter((function(e) {
													return c.indexOf(e) >= 0
												})).reduce((function(t, r) {
													return t[r] = ne(e, {
														placement: r,
														boundary: o,
														rootBoundary: i,
														padding: a
													})[W(r)], t
												}), {});
											return Object.keys(p).sort((function(e, t) {
												return p[e] - p[t]
											}))
										}(t, {
											placement: r,
											boundary: l,
											rootBoundary: p,
											padding: c,
											flipVariations: m,
											allowedAutoPlacements: h
										}) : r)
									}), []), v = t.rects.reference, E = t.rects.popper, O = new Map, A = !0, C = y[0], B = 0; B < y.length; B++) {
									var L = y[B],
										q = W(L),
										S = H(L) === z,
										R = [x, w].indexOf(q) >= 0,
										Z = R ? "width" : "height",
										T = ne(t, {
											placement: L,
											boundary: l,
											rootBoundary: p,
											altBoundary: f,
											padding: c
										}),
										I = R ? S ? D : k : S ? w : x;
									v[Z] > E[Z] && (I = K(I));
									var U = K(I),
										$ = [];
									if (i && $.push(T[q] <= 0), s && $.push(T[I] <= 0, T[U] <= 0), $.every((function(e) {
											return e
										}))) {
										C = L, A = !1;
										break
									}
									O.set(L, $)
								}
								if (A)
									for (var N = function(e) {
											var t = y.find((function(t) {
												var r = O.get(t);
												if (r) return r.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return C = t, "break"
										}, V = m ? 3 : 1; V > 0; V--) {
										if ("break" === N(V)) break
									}
								t.placement !== C && (t.modifiersData[n]._skip = !0, t.placement = C, t.reset = !0)
							}
						},
						requiresIfExists: ["offset"],
						data: {
							_skip: !1
						}
					}, {
						name: "preventOverflow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.mainAxis,
								i = void 0 === o || o,
								a = r.altAxis,
								s = void 0 !== a && a,
								u = r.boundary,
								c = r.rootBoundary,
								l = r.altBoundary,
								p = r.padding,
								f = r.tether,
								d = void 0 === f || f,
								m = r.tetherOffset,
								_ = void 0 === m ? 0 : m,
								g = ne(t, {
									boundary: u,
									rootBoundary: c,
									padding: p,
									altBoundary: l
								}),
								b = W(t.placement),
								y = H(t.placement),
								F = !y,
								j = I(b),
								E = "x" === j ? "y" : "x",
								O = t.modifiersData.popperOffsets,
								A = t.rects.reference,
								C = t.rects.popper,
								B = "function" == typeof _ ? _(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : _,
								P = {
									x: 0,
									y: 0
								};
							if (O) {
								if (i) {
									var M = "y" === j ? x : k,
										L = "y" === j ? w : D,
										q = "y" === j ? "height" : "width",
										S = O[j],
										R = O[j] + g[M],
										Z = O[j] - g[L],
										T = d ? -C[q] / 2 : 0,
										U = y === z ? A[q] : C[q],
										$ = y === z ? -C[q] : -A[q],
										N = t.elements.arrow,
										V = d && N ? h(N) : {
											width: 0,
											height: 0
										},
										K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										X = K[M],
										Y = K[L],
										G = oe(0, A[q], V[q]),
										J = F ? A[q] / 2 - T - G - X - B : U - G - X - B,
										Q = F ? -A[q] / 2 + T + G + Y + B : $ + G + Y + B,
										ee = t.elements.arrow && v(t.elements.arrow),
										te = ee ? "y" === j ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										re = t.modifiersData.offset ? t.modifiersData.offset[t.placement][j] : 0,
										ie = O[j] + J - re - te,
										ae = O[j] + Q - re,
										se = oe(d ? Math.min(R, ie) : R, S, d ? Math.max(Z, ae) : Z);
									O[j] = se, P[j] = se - S
								}
								if (s) {
									var ue = "x" === j ? x : k,
										ce = "x" === j ? w : D,
										le = O[E],
										pe = oe(le + g[ue], le, le - g[ce]);
									O[E] = pe, P[E] = pe - le
								}
								t.modifiersData[n] = P
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, r = e.state,
								n = e.name,
								o = r.elements.arrow,
								i = r.modifiersData.popperOffsets,
								a = W(r.placement),
								s = I(a),
								u = [k, D].indexOf(a) >= 0 ? "height" : "width";
							if (o && i) {
								var c = r.modifiersData[n + "#persistent"].padding,
									l = h(o),
									p = "y" === s ? x : k,
									f = "y" === s ? w : D,
									d = r.rects.reference[u] + r.rects.reference[s] - i[s] - r.rects.popper[u],
									m = i[s] - r.rects.reference[s],
									_ = v(o),
									g = _ ? "y" === s ? _.clientHeight || 0 : _.clientWidth || 0 : 0,
									b = d / 2 - m / 2,
									y = c[p],
									F = g - l[u] - c[f],
									j = g / 2 - l[u] / 2 + b,
									z = oe(y, j, F),
									E = s;
								r.modifiersData[n] = ((t = {})[E] = z, t.centerOffset = z - j, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.element,
								i = void 0 === o ? "[data-popper-arrow]" : o,
								a = r.padding,
								s = void 0 === a ? 0 : a;
							null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && G(t.elements.popper, i) && (t.elements.arrow = i, t.modifiersData[n + "#persistent"] = {
								padding: te("number" != typeof s ? s : re(s, j))
							})
						},
						requires: ["popperOffsets"],
						requiresIfExists: ["preventOverflow"]
					}, {
						name: "hide",
						enabled: !0,
						phase: "main",
						requiresIfExists: ["preventOverflow"],
						fn: function(e) {
							var t = e.state,
								r = e.name,
								n = t.rects.reference,
								o = t.rects.popper,
								i = t.modifiersData.preventOverflow,
								a = ne(t, {
									elementContext: "reference"
								}),
								s = ne(t, {
									altBoundary: !0
								}),
								u = ie(a, n),
								c = ie(s, o, i),
								l = ae(u),
								p = ae(c);
							t.modifiersData[r] = {
								referenceClippingOffsets: u,
								popperEscapeOffsets: c,
								isReferenceHidden: l,
								hasPopperEscaped: p
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": l,
								"data-popper-escaped": p
							})
						}
					}]
				}),
				ue = r("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ce = r.n(ue),
				le = function(e) {
					return e.reduce((function(e, t) {
						var r = t[0],
							n = t[1];
						return e[r] = n, e
					}), {})
				},
				pe = "undefined" != typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
				fe = [],
				de = function(e, t, r) {
					void 0 === r && (r = {});
					var o = n.useRef(null),
						i = {
							onFirstUpdate: r.onFirstUpdate,
							placement: r.placement || "bottom",
							strategy: r.strategy || "absolute",
							modifiers: r.modifiers || fe
						},
						a = n.useState({
							styles: {
								popper: {
									position: i.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						s = a[0],
						u = a[1],
						c = n.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										r = Object.keys(t.elements);
									u({
										styles: le(r.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: le(r.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						l = n.useMemo((function() {
							var e = {
								onFirstUpdate: i.onFirstUpdate,
								placement: i.placement,
								strategy: i.strategy,
								modifiers: [].concat(i.modifiers, [c, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return ce()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c]),
						p = n.useRef();
					return pe((function() {
						p.current && p.current.setOptions(l)
					}), [l]), pe((function() {
						if (null != e && null != t) {
							var n = (r.createPopper || se)(e, t, l);
							return p.current = n,
								function() {
									n.destroy(), p.current = null
								}
						}
					}), [e, t, r.createPopper]), {
						state: p.current ? p.current.state : null,
						styles: s.styles,
						attributes: s.attributes,
						update: p.current ? p.current.update : null,
						forceUpdate: p.current ? p.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var r = "undefined" != typeof Element,
				n = "function" == typeof Map,
				o = "function" == typeof Set,
				i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, a) {
						if (t === a) return !0;
						if (t && a && "object" == typeof t && "object" == typeof a) {
							if (t.constructor !== a.constructor) return !1;
							var s, u, c, l;
							if (Array.isArray(t)) {
								if ((s = t.length) != a.length) return !1;
								for (u = s; 0 != u--;)
									if (!e(t[u], a[u])) return !1;
								return !0
							}
							if (n && t instanceof Map && a instanceof Map) {
								if (t.size !== a.size) return !1;
								for (l = t.entries(); !(u = l.next()).done;)
									if (!a.has(u.value[0])) return !1;
								for (l = t.entries(); !(u = l.next()).done;)
									if (!e(u.value[1], a.get(u.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && a instanceof Set) {
								if (t.size !== a.size) return !1;
								for (l = t.entries(); !(u = l.next()).done;)
									if (!a.has(u.value[0])) return !1;
								return !0
							}
							if (i && ArrayBuffer.isView(t) && ArrayBuffer.isView(a)) {
								if ((s = t.length) != a.length) return !1;
								for (u = s; 0 != u--;)
									if (t[u] !== a[u]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === a.source && t.flags === a.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === a.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === a.toString();
							if ((s = (c = Object.keys(t)).length) !== Object.keys(a).length) return !1;
							for (u = s; 0 != u--;)
								if (!Object.prototype.hasOwnProperty.call(a, c[u])) return !1;
							if (r && t instanceof Element) return !1;
							for (u = s; 0 != u--;)
								if (("_owner" !== c[u] && "__v" !== c[u] && "__o" !== c[u] || !t.$$typeof) && !e(t[c[u]], a[c[u]])) return !1;
							return !0
						}
						return t != t && a != a
					}(e, t)
				} catch (a) {
					if ((a.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw a
				}
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~Chat~PostCreation~RedesignChat.bc666e204513e3f2e137.js.map