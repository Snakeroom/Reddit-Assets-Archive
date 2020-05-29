// https://www.redditstatic.com/desktop2x/vendors~css-vars-ponyfill.2fcd62d33e1f6e1ccfd1.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~css-vars-ponyfill"], {
		"./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js": function(e, t, n) {
			"use strict";

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function o(e) {
				return function(e) {
					if (Array.isArray(e)) {
						for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
						return n
					}
				}(e) || function(e) {
					if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
				}(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance")
				}()
			}

			function s(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = {
						mimeType: t.mimeType || null,
						onBeforeSend: t.onBeforeSend || Function.prototype,
						onSuccess: t.onSuccess || Function.prototype,
						onError: t.onError || Function.prototype,
						onComplete: t.onComplete || Function.prototype
					},
					r = Array.isArray(e) ? e : [e],
					o = Array.apply(null, Array(r.length)).map((function(e) {
						return null
					}));

				function s() {
					return !("<" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").trim().charAt(0))
				}

				function a(e, t) {
					n.onError(e, r[t], t)
				}

				function c(e, t) {
					var s = n.onSuccess(e, r[t], t);
					e = !1 === s ? "" : s || e, o[t] = e, -1 === o.indexOf(null) && n.onComplete(o)
				}
				r.forEach((function(e, t) {
					var r = document.createElement("a");
					r.setAttribute("href", e), r.href = String(r.href);
					var o = r.host !== location.host,
						i = document.all && !window.atob,
						u = r.protocol === location.protocol;
					if (o && i)
						if (u) {
							var l = new XDomainRequest;
							l.open("GET", e), l.timeout = 0, l.onprogress = Function.prototype, l.ontimeout = Function.prototype, l.onload = function() {
								s(l.responseText) ? c(l.responseText, t) : a(l, t)
							}, l.onerror = function(e) {
								a(l, t)
							}, setTimeout((function() {
								l.send()
							}), 0)
						} else console.log("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol"), a(null, t);
					else {
						var f = new XMLHttpRequest;
						f.open("GET", e), n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType), n.onBeforeSend(f, e, t), f.onreadystatechange = function() {
							4 === f.readyState && (200 === f.status && s(f.responseText) ? c(f.responseText, t) : a(f, t))
						}, f.send()
					}
				}))
			}

			function a(e) {
				var t = {
						cssComments: /\/\*[\s\S]+?\*\//g,
						cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
					},
					n = {
						rootElement: e.rootElement || document,
						include: e.include || 'style,link[rel="stylesheet"]',
						exclude: e.exclude || null,
						filter: e.filter || null,
						useCSSOM: e.useCSSOM || !1,
						onBeforeSend: e.onBeforeSend || Function.prototype,
						onSuccess: e.onSuccess || Function.prototype,
						onError: e.onError || Function.prototype,
						onComplete: e.onComplete || Function.prototype
					},
					r = Array.apply(null, n.rootElement.querySelectorAll(n.include)).filter((function(e) {
						return t = e, r = n.exclude, !(t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector).call(t, r);
						var t, r
					})),
					o = Array.apply(null, Array(r.length)).map((function(e) {
						return null
					}));

				function a() {
					if (-1 === o.indexOf(null)) {
						var e = o.join("");
						n.onComplete(e, o, r)
					}
				}

				function i(e, t, r, c) {
					var i = n.onSuccess(e, r, c);
					(function e(t, r, o, a) {
						var c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
						var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [];
						var l = u(t, o, i);
						l.rules.length ? s(l.absoluteUrls, {
							onBeforeSend: function(e, t, o) {
								n.onBeforeSend(e, r, t)
							},
							onSuccess: function(e, t, o) {
								var s = n.onSuccess(e, r, t),
									a = u(e = !1 === s ? "" : s || e, t, i);
								return a.rules.forEach((function(t, n) {
									e = e.replace(t, a.absoluteRules[n])
								})), e
							},
							onError: function(n, s, u) {
								c.push({
									xhr: n,
									url: s
								}), i.push(l.rules[u]), e(t, r, o, a, c, i)
							},
							onComplete: function(n) {
								n.forEach((function(e, n) {
									t = t.replace(l.rules[n], e)
								})), e(t, r, o, a, c, i)
							}
						}) : a(t, c)
					})(e = void 0 !== i && !1 === Boolean(i) ? "" : i || e, r, c, (function(e, s) {
						null === o[t] && (s.forEach((function(e) {
							return n.onError(e.xhr, r, e.url)
						})), !n.filter || n.filter.test(e) ? o[t] = e : o[t] = "", a())
					}))
				}

				function u(e, n) {
					var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
						o = {};
					return o.rules = (e.replace(t.cssComments, "").match(t.cssImports) || []).filter((function(e) {
						return -1 === r.indexOf(e)
					})), o.urls = o.rules.map((function(e) {
						return e.replace(t.cssImports, "$1")
					})), o.absoluteUrls = o.urls.map((function(e) {
						return c(e, n)
					})), o.absoluteRules = o.rules.map((function(e, t) {
						var r = o.urls[t],
							s = c(o.absoluteUrls[t], n);
						return e.replace(r, s)
					})), o
				}
				r.length ? r.forEach((function(e, t) {
					var r = e.getAttribute("href"),
						u = e.getAttribute("rel"),
						l = "LINK" === e.nodeName && r && u && "stylesheet" === u.toLowerCase(),
						f = "STYLE" === e.nodeName;
					if (l) s(r, {
						mimeType: "text/css",
						onBeforeSend: function(t, r, o) {
							n.onBeforeSend(t, e, r)
						},
						onSuccess: function(n, o, s) {
							var a = c(r, location.href);
							i(n, t, e, a)
						},
						onError: function(r, s, c) {
							o[t] = "", n.onError(r, e, s), a()
						}
					});
					else if (f) {
						var p = e.textContent;
						n.useCSSOM && (p = Array.apply(null, e.sheet.cssRules).map((function(e) {
							return e.cssText
						})).join("")), i(p, t, e, location.href)
					} else o[t] = "", a()
				})) : n.onComplete("", [])
			}

			function c(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location.href,
					n = document.implementation.createHTMLDocument(""),
					r = n.createElement("base"),
					o = n.createElement("a");
				return n.head.appendChild(r), n.body.appendChild(o), r.href = t, o.href = e, o.href
			}
			n.r(t);
			var i = u;

			function u(e, t, n) {
				e instanceof RegExp && (e = l(e, n)), t instanceof RegExp && (t = l(t, n));
				var r = f(e, t, n);
				return r && {
					start: r[0],
					end: r[1],
					pre: n.slice(0, r[0]),
					body: n.slice(r[0] + e.length, r[1]),
					post: n.slice(r[1] + t.length)
				}
			}

			function l(e, t) {
				var n = t.match(e);
				return n ? n[0] : null
			}

			function f(e, t, n) {
				var r, o, s, a, c, i = n.indexOf(e),
					u = n.indexOf(t, i + 1),
					l = i;
				if (i >= 0 && u > 0) {
					for (r = [], s = n.length; l >= 0 && !c;) l == i ? (r.push(l), i = n.indexOf(e, l + 1)) : 1 == r.length ? c = [r.pop(), u] : ((o = r.pop()) < s && (s = o, a = u), u = n.indexOf(t, l + 1)), l = i < u && i >= 0 ? i : u;
					r.length && (c = [s, a])
				}
				return c
			}

			function p(e) {
				var t = r({}, {
					onlyVars: !1,
					removeComments: !1
				}, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});

				function n(e) {
					throw new Error("CSS parse error: ".concat(e))
				}

				function o(t) {
					var n = t.exec(e);
					if (n) return e = e.slice(n[0].length), n
				}

				function s() {
					return o(/^{\s*/)
				}

				function a() {
					return o(/^}/)
				}

				function c() {
					o(/^\s*/)
				}

				function u() {
					if (c(), "/" === e[0] && "*" === e[1]) {
						for (var t = 2; e[t] && ("*" !== e[t] || "/" !== e[t + 1]);) t++;
						if (!e[t]) return n("end of comment is missing");
						var r = e.slice(2, t);
						return e = e.slice(t + 2), {
							type: "comment",
							comment: r
						}
					}
				}

				function l() {
					for (var e, n = []; e = u();) n.push(e);
					return t.removeComments ? [] : n
				}

				function f() {
					for (c();
						"}" === e[0];) n("extra closing bracket");
					var t = o(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
					if (t) return t[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, (function(e) {
						return e.replace(/,/g, "‌")
					})).split(/\s*(?![^(]*\)),\s*/).map((function(e) {
						return e.replace(/\u200C/g, ",")
					}))
				}

				function p() {
					o(/^([;\s]*)+/);
					var e = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,
						t = o(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
					if (t) {
						if (t = t[0].trim(), !o(/^:\s*/)) return n("property missing ':'");
						var r = o(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),
							s = {
								type: "declaration",
								property: t.replace(e, ""),
								value: r ? r[0].replace(e, "").trim() : ""
							};
						return o(/^[;\s]*/), s
					}
				}

				function d() {
					if (!s()) return n("missing '{'");
					for (var e, t = l(); e = p();) t.push(e), t = t.concat(l());
					return a() ? t : n("missing '}'")
				}

				function m() {
					c();
					for (var e, t = []; e = o(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);) t.push(e[1]), o(/^,\s*/);
					if (t.length) return {
						type: "keyframe",
						values: t,
						declarations: d()
					}
				}

				function v() {
					if (c(), "@" === e[0]) {
						var r = function() {
							var e = o(/^@([-\w]+)?keyframes\s*/);
							if (e) {
								var t = e[1];
								if (!(e = o(/^([-\w]+)\s*/))) return n("@keyframes missing name");
								var r, c = e[1];
								if (!s()) return n("@keyframes missing '{'");
								for (var i = l(); r = m();) i.push(r), i = i.concat(l());
								return a() ? {
									type: "keyframes",
									name: c,
									vendor: t,
									keyframes: i
								} : n("@keyframes missing '}'")
							}
						}() || function() {
							var e = o(/^@supports *([^{]+)/);
							if (e) return {
								type: "supports",
								supports: e[1].trim(),
								rules: h()
							}
						}() || function() {
							if (o(/^@host\s*/)) return {
								type: "host",
								rules: h()
							}
						}() || function() {
							var e = o(/^@media *([^{]+)/);
							if (e) return {
								type: "media",
								media: e[1].trim(),
								rules: h()
							}
						}() || function() {
							var e = o(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
							if (e) return {
								type: "custom-media",
								name: e[1].trim(),
								media: e[2].trim()
							}
						}() || function() {
							if (o(/^@page */)) return {
								type: "page",
								selectors: f() || [],
								declarations: d()
							}
						}() || function() {
							var e = o(/^@([-\w]+)?document *([^{]+)/);
							if (e) return {
								type: "document",
								document: e[2].trim(),
								vendor: e[1] ? e[1].trim() : null,
								rules: h()
							}
						}() || function() {
							if (o(/^@font-face\s*/)) return {
								type: "font-face",
								declarations: d()
							}
						}() || function() {
							var e = o(/^@(import|charset|namespace)\s*([^;]+);/);
							if (e) return {
								type: e[1],
								name: e[2].trim()
							}
						}();
						if (r && t.onlyVars) {
							var i = !1;
							if (r.declarations) i = r.declarations.some((function(e) {
								return /var\(/.test(e.value)
							}));
							else i = (r.keyframes || r.rules || []).some((function(e) {
								return (e.declarations || []).some((function(e) {
									return /var\(/.test(e.value)
								}))
							}));
							return i ? r : {}
						}
						return r
					}
				}

				function y() {
					if (t.onlyVars) {
						var r = i("{", "}", e);
						if (r) {
							var o = -1 !== r.pre.indexOf(":root") && /--\S*\s*:/.test(r.body),
								s = /var\(/.test(r.body);
							if (!o && !s) return e = e.slice(r.end + 1), {}
						}
					}
					var a = f() || [],
						c = t.onlyVars ? d().filter((function(e) {
							var t = a.some((function(e) {
									return -1 !== e.indexOf(":root")
								})) && /^--\S/.test(e.property),
								n = /var\(/.test(e.value);
							return t || n
						})) : d();
					return a.length || n("selector missing"), {
						type: "rule",
						selectors: a,
						declarations: c
					}
				}

				function h(t) {
					if (!t && !s()) return n("missing '{'");
					for (var r, o = l(); e.length && (t || "}" !== e[0]) && (r = v() || y());) r.type && o.push(r), o = o.concat(l());
					return t || a() ? o : n("missing '}'")
				}
				return {
					type: "stylesheet",
					stylesheet: {
						rules: h(!0),
						errors: []
					}
				}
			}
			u.range = f;
			var d = "--",
				m = "var",
				v = {
					dom: {},
					temp: {},
					user: {}
				};

			function y(e) {
				var t, n, o = r({}, {
						fixNestedCalc: !0,
						onlyVars: !1,
						persist: !1,
						preserve: !1,
						variables: {},
						onWarning: function() {}
					}, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}),
					s = o.persist ? v.dom : v.temp = JSON.parse(JSON.stringify(v.dom)),
					a = p(e, {
						onlyVars: o.onlyVars
					});
				if (a.stylesheet.rules.forEach((function(e) {
						var t = [];
						if ("rule" === e.type && 1 === e.selectors.length && ":root" === e.selectors[0] && (e.declarations.forEach((function(e, n) {
								var r = e.property,
									o = e.value;
								r && 0 === r.indexOf(d) && (s[r] = o, t.push(n))
							})), !o.preserve))
							for (var n = t.length - 1; n >= 0; n--) e.declarations.splice(t[n], 1)
					})), Object.keys(v.user).forEach((function(e) {
						s[e] = v.user[e]
					})), Object.keys(o.variables).length) {
					var c = {
						declarations: [],
						selectors: [":root"],
						type: "rule"
					};
					Object.keys(o.variables).forEach((function(e) {
						var t = "--".concat(e.replace(/^-+/, "")),
							n = o.variables[e];
						o.persist && (v.user[t] = n), s[t] !== n && (s[t] = n, c.declarations.push({
							type: "declaration",
							property: t,
							value: n
						}))
					})), o.preserve && c.declarations.length && a.stylesheet.rules.push(c)
				}
				return function e(t, n) {
						t.rules.forEach((function(r) {
							r.rules ? e(r, n) : r.keyframes ? r.keyframes.forEach((function(e) {
								"keyframe" === e.type && n(e.declarations, r)
							})) : r.declarations && n(r.declarations, t)
						}))
					}(a.stylesheet, (function(e, t) {
						for (var n, r, a, c = 0; c < e.length; c++) a = (n = e[c]).value, "declaration" === n.type && a && -1 !== a.indexOf(m + "(") && (r = h(a, s, o)) !== n.value && (o.preserve ? (e.splice(c, 0, {
							type: n.type,
							property: n.property,
							value: r
						}), c++) : n.value = r)
					})), o.fixNestedCalc && (t = a.stylesheet.rules, n = /(-[a-z]+-)?calc\(/, t.forEach((function(e) {
						e.declarations && e.declarations.forEach((function(e) {
							for (var t = e.value, r = ""; n.test(t);) {
								var o = i("calc(", ")", t || "");
								for (t = t.slice(o.end); n.test(o.body);) {
									var s = i(n, ")", o.body);
									o.body = "".concat(s.pre, "(").concat(s.body, ")").concat(s.post)
								}
								r += "".concat(o.pre, "calc(").concat(o.body), r += n.test(t) ? "" : ")".concat(o.post)
							}
							e.value = r || e.value
						}))
					}))),
					function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
							n = arguments.length > 2 ? arguments[2] : void 0,
							r = {
								charset: function(e) {
									return "@charset " + e.name + ";"
								},
								comment: function(e) {
									return 0 === e.comment.indexOf("__CSSVARSPONYFILL") ? "/*" + e.comment + "*/" : ""
								},
								"custom-media": function(e) {
									return "@custom-media " + e.name + " " + e.media + ";"
								},
								declaration: function(e) {
									return e.property + ":" + e.value + ";"
								},
								document: function(e) {
									return "@" + (e.vendor || "") + "document " + e.document + "{" + o(e.rules) + "}"
								},
								"font-face": function(e) {
									return "@font-face{" + o(e.declarations) + "}"
								},
								host: function(e) {
									return "@host{" + o(e.rules) + "}"
								},
								import: function(e) {
									return "@import " + e.name + ";"
								},
								keyframe: function(e) {
									return e.values.join(",") + "{" + o(e.declarations) + "}"
								},
								keyframes: function(e) {
									return "@" + (e.vendor || "") + "keyframes " + e.name + "{" + o(e.keyframes) + "}"
								},
								media: function(e) {
									return "@media " + e.media + "{" + o(e.rules) + "}"
								},
								namespace: function(e) {
									return "@namespace " + e.name + ";"
								},
								page: function(e) {
									return "@page " + (e.selectors.length ? e.selectors.join(", ") : "") + "{" + o(e.declarations) + "}"
								},
								rule: function(e) {
									var t = e.declarations;
									if (t.length) return e.selectors.join(",") + "{" + o(t) + "}"
								},
								supports: function(e) {
									return "@supports " + e.supports + "{" + o(e.rules) + "}"
								}
							};

						function o(e) {
							for (var o = "", s = 0; s < e.length; s++) {
								var a = e[s];
								n && n(a);
								var c = r[a.type](a);
								c && (o += c, c.length && a.selectors && (o += t))
							}
							return o
						}
						return o(e.stylesheet.rules)
					}(a)
			}

			function h(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					r = arguments.length > 3 ? arguments[3] : void 0;
				if (-1 === e.indexOf("var(")) return e;
				var o = i("(", ")", e),
					s = "CSS transform warning:";
				return o ? "var" === o.pre.slice(-3) ? 0 === o.body.trim().length ? (n.onWarning("".concat(s, " var() must contain a non-whitespace string")), e) : o.pre.slice(0, -3) + function(e) {
					var o = e.split(",")[0].replace(/[\s\n\t]/g, ""),
						a = (e.match(/(?:\s*,\s*){1}(.*)?/) || [])[1],
						c = t.hasOwnProperty(o) ? String(t[o]) : void 0,
						i = c || (a ? String(a) : void 0),
						u = r || e;
					return c || n.onWarning("".concat(s, ' variable "').concat(o, '" is undefined')), i && "undefined" !== i && i.length > 0 ? h(i, t, n, u) : "var(".concat(u, ")")
				}(o.body) + h(o.post, t, n) : o.pre + "(".concat(h(o.body, t, n), ")") + h(o.post, t, n) : (-1 !== e.indexOf("var(") && n.onWarning("".concat(s, ' missing closing ")" in the value "').concat(e, '"')), e)
			}
			var g = "css-vars-ponyfill",
				S = "undefined" != typeof window,
				E = S && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)"),
				b = {
					rootElement: S ? document : null,
					include: "style,link[rel=stylesheet]",
					exclude: "",
					fixNestedCalc: !0,
					onlyLegacy: !0,
					onlyVars: !1,
					preserve: !1,
					shadowDOM: !1,
					silent: !1,
					updateDOM: !0,
					updateURLs: !0,
					variables: {},
					watch: null,
					onBeforeSend: function() {},
					onSuccess: function() {},
					onWarning: function() {},
					onError: function() {},
					onComplete: function() {}
				},
				C = {
					cssComments: /\/\*[\s\S]+?\*\//g,
					cssKeyframes: /@(?:-\w*-)?keyframes/,
					cssRootRules: /(?::root\s*{\s*[^}]*})/g,
					cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
					cssVars: /(?:(?::root\s*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
				},
				O = null,
				x = !1;

			function w() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = r({}, b, e),
					n = g;

				function s(e, n, r, o) {
					t.silent || console.error("".concat(e, "\n"), n), t.onError(e, n, r, o)
				}

				function c(e) {
					t.silent || console.warn(e), t.onWarning(e)
				}
				if (t.exclude = "#".concat(n) + (t.exclude ? ",".concat(t.exclude) : ""), S)
					if ("loading" !== document.readyState) {
						var i = t.shadowDOM || t.rootElement.shadowRoot || t.rootElement.host;
						if (E && t.onlyLegacy) {
							if (t.updateDOM) {
								var u = t.rootElement.host || (t.rootElement === document ? document.documentElement : t.rootElement);
								Object.keys(t.variables).forEach((function(e) {
									var n = "--".concat(e.replace(/^-+/, "")),
										r = t.variables[e];
									u.style.setProperty(n, r)
								}))
							}
						} else i && !x ? a({
							rootElement: b.rootElement,
							include: b.include,
							exclude: t.exclude,
							onSuccess: function(e, t, n) {
								return (e.match(C.cssRootRules) || []).join("") || !1
							},
							onComplete: function(e, n, r) {
								y(e, {
									persist: !0
								}), x = !0, w(t)
							}
						}) : (t.watch ? function(e, t) {
							if (!window.MutationObserver) return;
							var n = function(e) {
									return "LINK" === e.tagName && -1 !== (e.getAttribute("rel") || "").indexOf("stylesheet")
								},
								r = function(e) {
									return "STYLE" === e.tagName && (!t || e.id !== t)
								},
								o = null;
							O && O.disconnect();
							e.watch = b.watch, (O = new MutationObserver((function(t) {
								var s = !1;
								t.forEach((function(t) {
									if ("attributes" === t.type) s = n(t.target) || r(t.target);
									else if ("childList" === t.type) {
										var a = Array.apply(null, t.addedNodes),
											c = Array.apply(null, t.removedNodes);
										s = [].concat(a, c).some((function(e) {
											var t = n(e) && !e.disabled,
												o = r(e) && !e.disabled && C.cssVars.test(e.textContent);
											return t || o
										}))
									}
									s && (clearTimeout(o), o = setTimeout((function() {
										w(e)
									}), 1))
								}))
							}))).observe(document.documentElement, {
								attributes: !0,
								attributeFilter: ["disabled", "href"],
								childList: !0,
								subtree: !0
							})
						}(t, n) : !1 === t.watch && O && O.disconnect(), a({
							rootElement: t.rootElement,
							include: t.include,
							exclude: t.exclude,
							filter: t.onlyVars ? C.cssVars : null,
							onBeforeSend: t.onBeforeSend,
							onSuccess: function(e, n, r) {
								var o = t.onSuccess(e, n, r);
								(e = void 0 !== o && !1 === Boolean(o) ? "" : o || e, t.updateURLs) && (e.replace(C.cssComments, "").match(C.cssUrls) || []).forEach((function(t) {
									var n = t.replace(C.cssUrls, "$1"),
										o = A(n, r);
									e = e.replace(t, t.replace(n, o))
								}));
								return e
							},
							onError: function(e, t, n) {
								var r = e.responseURL || A(n, location.href),
									o = e.statusText ? "(".concat(e.statusText, ")") : "Unspecified Error" + (0 === e.status ? " (possibly CORS related)" : "");
								s("CSS XHR Error: ".concat(r, " ").concat(e.status, " ").concat(o), t, e, r)
							},
							onComplete: function(e, a, i) {
								var u = null;
								e = a.map((function(e, t) {
									return C.cssVars.test(e) ? e : "/*__CSSVARSPONYFILL-".concat(t, "__*/")
								})).join("");
								try {
									e = y(e, {
										fixNestedCalc: t.fixNestedCalc,
										onlyVars: t.onlyVars,
										persist: t.updateDOM,
										preserve: t.preserve,
										variables: t.variables,
										onWarning: c
									});
									var l = C.cssKeyframes.test(e);
									if (e = e.replace(/\/\*__CSSVARSPONYFILL-(\d+)__\*\//g, (function(e, t) {
											return a[t]
										})), t.updateDOM && i && i.length) {
										var f = i[i.length - 1];
										(u = t.rootElement.querySelector("#".concat(n)) || document.createElement("style")).setAttribute("id", n), u.textContent !== e && (u.textContent = e), f.nextSibling !== u && f.parentNode && f.parentNode.insertBefore(u, f.nextSibling), l && function(e) {
											var t = ["animation-name", "-moz-animation-name", "-webkit-animation-name"].filter((function(e) {
												return getComputedStyle(document.body)[e]
											}))[0];
											if (t) {
												for (var n = e.getElementsByTagName("*"), r = [], o = 0, s = n.length; o < s; o++) {
													var a = n[o];
													"none" !== getComputedStyle(a)[t] && (a.style[t] += "__CSSVARSPONYFILL-KEYFRAMES__", r.push(a))
												}
												document.body.offsetHeight;
												for (var c = 0, i = r.length; c < i; c++) {
													var u = r[c].style;
													u[t] = u[t].replace("__CSSVARSPONYFILL-KEYFRAMES__", "")
												}
											}
										}(t.rootElement)
									}
								} catch (g) {
									var p = !1;
									a.forEach((function(e, n) {
										try {
											e = y(e, t)
										} catch (g) {
											var r = i[n - 0];
											p = !0, s(g.message, r)
										}
									})), p || s(g.message || g)
								}
								if (t.shadowDOM)
									for (var d, m = [t.rootElement].concat(o(t.rootElement.querySelectorAll("*"))), h = 0; d = m[h]; ++h) {
										if (d.shadowRoot && d.shadowRoot.querySelector("style")) w(r({}, t, {
											rootElement: d.shadowRoot,
											variables: v.dom
										}))
									}
								t.onComplete(e, u, JSON.parse(JSON.stringify(t.updateDOM ? v.dom : v.temp)))
							}
						}))
					} else document.addEventListener("DOMContentLoaded", (function t(n) {
						w(e), document.removeEventListener("DOMContentLoaded", t)
					}))
			}

			function A(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location.href,
					n = document.implementation.createHTMLDocument(""),
					r = n.createElement("base"),
					o = n.createElement("a");
				return n.head.appendChild(r), n.body.appendChild(o), r.href = t, o.href = e, o.href
			}
			t.default = w
		}
	}
]);
//# sourceMappingURL=vendors~css-vars-ponyfill.2fcd62d33e1f6e1ccfd1.js.map