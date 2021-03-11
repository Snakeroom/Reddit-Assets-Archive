// https://www.redditstatic.com/desktop2x/Coins.d8b6d4e456a26931e54a.js
// Retrieved at 3/11/2021, 9:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Coins"], {
		"./node_modules/lodash/times.js": function(e, t, a) {
			var n = a("./node_modules/lodash/_baseTimes.js"),
				r = a("./node_modules/lodash/_castFunction.js"),
				o = a("./node_modules/lodash/toInteger.js"),
				s = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > s) return [];
				var a = i,
					l = c(e, i);
				t = r(t), e -= i;
				for (var d = n(l, t); ++a < e;) t(a);
				return d
			}
		},
		"./node_modules/react-helmet/es/Helmet.js": function(e, t, a) {
			"use strict";
			(function(e) {
				var n, r, o, s, i = a("./node_modules/react-helmet/node_modules/prop-types/index.js"),
					c = a.n(i),
					l = a("./node_modules/react-side-effect/lib/index.js"),
					d = a.n(l),
					u = a("./node_modules/react-fast-compare/index.js"),
					m = a.n(u),
					p = a("./node_modules/react/index.js"),
					h = a.n(p),
					f = a("./node_modules/object-assign/index.js"),
					b = a.n(f),
					g = "bodyAttributes",
					y = "htmlAttributes",
					w = "titleAttributes",
					v = {
						BASE: "base",
						BODY: "body",
						HEAD: "head",
						HTML: "html",
						LINK: "link",
						META: "meta",
						NOSCRIPT: "noscript",
						SCRIPT: "script",
						STYLE: "style",
						TITLE: "title"
					},
					O = (Object.keys(v).map((function(e) {
						return v[e]
					})), "charset"),
					k = "cssText",
					C = "href",
					_ = "http-equiv",
					j = "innerHTML",
					E = "itemprop",
					x = "name",
					T = "property",
					P = "rel",
					N = "src",
					I = "target",
					A = {
						accesskey: "accessKey",
						charset: "charSet",
						class: "className",
						contenteditable: "contentEditable",
						contextmenu: "contextMenu",
						"http-equiv": "httpEquiv",
						itemprop: "itemProp",
						tabindex: "tabIndex"
					},
					S = "defaultTitle",
					L = "defer",
					M = "encodeSpecialCharacters",
					R = "onChangeClientState",
					G = "titleTemplate",
					D = Object.keys(A).reduce((function(e, t) {
						return e[A[t]] = t, e
					}), {}),
					F = [v.NOSCRIPT, v.SCRIPT, v.STYLE],
					B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					q = function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					},
					V = function() {
						function e(e, t) {
							for (var a = 0; a < t.length; a++) {
								var n = t[a];
								n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
							}
						}
						return function(t, a, n) {
							return a && e(t.prototype, a), n && e(t, n), t
						}
					}(),
					U = Object.assign || function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var a = arguments[t];
							for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
						}
						return e
					},
					z = function(e, t) {
						var a = {};
						for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
						return a
					},
					H = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					},
					Y = function(e) {
						var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
					},
					W = function(e) {
						var t = J(e, v.TITLE),
							a = J(e, G);
						if (a && t) return a.replace(/%s/g, (function() {
							return Array.isArray(t) ? t.join("") : t
						}));
						var n = J(e, S);
						return t || n || void 0
					},
					Q = function(e) {
						return J(e, R) || function() {}
					},
					X = function(e, t) {
						return t.filter((function(t) {
							return void 0 !== t[e]
						})).map((function(t) {
							return t[e]
						})).reduce((function(e, t) {
							return U({}, e, t)
						}), {})
					},
					K = function(e, t) {
						return t.filter((function(e) {
							return void 0 !== e[v.BASE]
						})).map((function(e) {
							return e[v.BASE]
						})).reverse().reduce((function(t, a) {
							if (!t.length)
								for (var n = Object.keys(a), r = 0; r < n.length; r++) {
									var o = n[r].toLowerCase();
									if (-1 !== e.indexOf(o) && a[o]) return t.concat(a)
								}
							return t
						}), [])
					},
					$ = function(e, t, a) {
						var n = {};
						return a.filter((function(t) {
							return !!Array.isArray(t[e]) || (void 0 !== t[e] && ne("Helmet: " + e + ' should be of type "Array". Instead found type "' + B(t[e]) + '"'), !1)
						})).map((function(t) {
							return t[e]
						})).reverse().reduce((function(e, a) {
							var r = {};
							a.filter((function(e) {
								for (var a = void 0, o = Object.keys(e), s = 0; s < o.length; s++) {
									var i = o[s],
										c = i.toLowerCase(); - 1 === t.indexOf(c) || a === P && "canonical" === e[a].toLowerCase() || c === P && "stylesheet" === e[c].toLowerCase() || (a = c), -1 === t.indexOf(i) || i !== j && i !== k && i !== E || (a = i)
								}
								if (!a || !e[a]) return !1;
								var l = e[a].toLowerCase();
								return n[a] || (n[a] = {}), r[a] || (r[a] = {}), !n[a][l] && (r[a][l] = !0, !0)
							})).reverse().forEach((function(t) {
								return e.push(t)
							}));
							for (var o = Object.keys(r), s = 0; s < o.length; s++) {
								var i = o[s],
									c = b()({}, n[i], r[i]);
								n[i] = c
							}
							return e
						}), []).reverse()
					},
					J = function(e, t) {
						for (var a = e.length - 1; a >= 0; a--) {
							var n = e[a];
							if (n.hasOwnProperty(t)) return n[t]
						}
						return null
					},
					Z = (n = Date.now(), function(e) {
						var t = Date.now();
						t - n > 16 ? (n = t, e(t)) : setTimeout((function() {
							Z(e)
						}), 0)
					}),
					ee = function(e) {
						return clearTimeout(e)
					},
					te = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || Z : e.requestAnimationFrame || Z,
					ae = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || ee : e.cancelAnimationFrame || ee,
					ne = function(e) {
						return console && "function" == typeof console.warn && console.warn(e)
					},
					re = null,
					oe = function(e, t) {
						var a = e.baseTag,
							n = e.bodyAttributes,
							r = e.htmlAttributes,
							o = e.linkTags,
							s = e.metaTags,
							i = e.noscriptTags,
							c = e.onChangeClientState,
							l = e.scriptTags,
							d = e.styleTags,
							u = e.title,
							m = e.titleAttributes;
						ce(v.BODY, n), ce(v.HTML, r), ie(u, m);
						var p = {
								baseTag: le(v.BASE, a),
								linkTags: le(v.LINK, o),
								metaTags: le(v.META, s),
								noscriptTags: le(v.NOSCRIPT, i),
								scriptTags: le(v.SCRIPT, l),
								styleTags: le(v.STYLE, d)
							},
							h = {},
							f = {};
						Object.keys(p).forEach((function(e) {
							var t = p[e],
								a = t.newTags,
								n = t.oldTags;
							a.length && (h[e] = a), n.length && (f[e] = p[e].oldTags)
						})), t && t(), c(e, h, f)
					},
					se = function(e) {
						return Array.isArray(e) ? e.join("") : e
					},
					ie = function(e, t) {
						void 0 !== e && document.title !== e && (document.title = se(e)), ce(v.TITLE, t)
					},
					ce = function(e, t) {
						var a = document.getElementsByTagName(e)[0];
						if (a) {
							for (var n = a.getAttribute("data-react-helmet"), r = n ? n.split(",") : [], o = [].concat(r), s = Object.keys(t), i = 0; i < s.length; i++) {
								var c = s[i],
									l = t[c] || "";
								a.getAttribute(c) !== l && a.setAttribute(c, l), -1 === r.indexOf(c) && r.push(c);
								var d = o.indexOf(c); - 1 !== d && o.splice(d, 1)
							}
							for (var u = o.length - 1; u >= 0; u--) a.removeAttribute(o[u]);
							r.length === o.length ? a.removeAttribute("data-react-helmet") : a.getAttribute("data-react-helmet") !== s.join(",") && a.setAttribute("data-react-helmet", s.join(","))
						}
					},
					le = function(e, t) {
						var a = document.head || document.querySelector(v.HEAD),
							n = a.querySelectorAll(e + "[data-react-helmet]"),
							r = Array.prototype.slice.call(n),
							o = [],
							s = void 0;
						return t && t.length && t.forEach((function(t) {
							var a = document.createElement(e);
							for (var n in t)
								if (t.hasOwnProperty(n))
									if (n === j) a.innerHTML = t.innerHTML;
									else if (n === k) a.styleSheet ? a.styleSheet.cssText = t.cssText : a.appendChild(document.createTextNode(t.cssText));
							else {
								var i = void 0 === t[n] ? "" : t[n];
								a.setAttribute(n, i)
							}
							a.setAttribute("data-react-helmet", "true"), r.some((function(e, t) {
								return s = t, a.isEqualNode(e)
							})) ? r.splice(s, 1) : o.push(a)
						})), r.forEach((function(e) {
							return e.parentNode.removeChild(e)
						})), o.forEach((function(e) {
							return a.appendChild(e)
						})), {
							oldTags: r,
							newTags: o
						}
					},
					de = function(e) {
						return Object.keys(e).reduce((function(t, a) {
							var n = void 0 !== e[a] ? a + '="' + e[a] + '"' : "" + a;
							return t ? t + " " + n : n
						}), "")
					},
					ue = function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return Object.keys(e).reduce((function(t, a) {
							return t[A[a] || a] = e[a], t
						}), t)
					},
					me = function(e, t, a) {
						switch (e) {
							case v.TITLE:
								return {
									toComponent: function() {
										return e = t.title, a = t.titleAttributes, (n = {
											key: e
										})["data-react-helmet"] = !0, r = ue(a, n), [h.a.createElement(v.TITLE, r, e)];
										var e, a, n, r
									}, toString: function() {
										return function(e, t, a, n) {
											var r = de(a),
												o = se(t);
											return r ? "<" + e + ' data-react-helmet="true" ' + r + ">" + Y(o, n) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + Y(o, n) + "</" + e + ">"
										}(e, t.title, t.titleAttributes, a)
									}
								};
							case g:
							case y:
								return {
									toComponent: function() {
										return ue(t)
									}, toString: function() {
										return de(t)
									}
								};
							default:
								return {
									toComponent: function() {
										return function(e, t) {
											return t.map((function(t, a) {
												var n, r = ((n = {
													key: a
												})["data-react-helmet"] = !0, n);
												return Object.keys(t).forEach((function(e) {
													var a = A[e] || e;
													if (a === j || a === k) {
														var n = t.innerHTML || t.cssText;
														r.dangerouslySetInnerHTML = {
															__html: n
														}
													} else r[a] = t[e]
												})), h.a.createElement(e, r)
											}))
										}(e, t)
									}, toString: function() {
										return function(e, t, a) {
											return t.reduce((function(t, n) {
												var r = Object.keys(n).filter((function(e) {
														return !(e === j || e === k)
													})).reduce((function(e, t) {
														var r = void 0 === n[t] ? t : t + '="' + Y(n[t], a) + '"';
														return e ? e + " " + r : r
													}), ""),
													o = n.innerHTML || n.cssText || "",
													s = -1 === F.indexOf(e);
												return t + "<" + e + ' data-react-helmet="true" ' + r + (s ? "/>" : ">" + o + "</" + e + ">")
											}), "")
										}(e, t, a)
									}
								}
						}
					},
					pe = function(e) {
						var t = e.baseTag,
							a = e.bodyAttributes,
							n = e.encode,
							r = e.htmlAttributes,
							o = e.linkTags,
							s = e.metaTags,
							i = e.noscriptTags,
							c = e.scriptTags,
							l = e.styleTags,
							d = e.title,
							u = void 0 === d ? "" : d,
							m = e.titleAttributes;
						return {
							base: me(v.BASE, t, n),
							bodyAttributes: me(g, a, n),
							htmlAttributes: me(y, r, n),
							link: me(v.LINK, o, n),
							meta: me(v.META, s, n),
							noscript: me(v.NOSCRIPT, i, n),
							script: me(v.SCRIPT, c, n),
							style: me(v.STYLE, l, n),
							title: me(v.TITLE, {
								title: u,
								titleAttributes: m
							}, n)
						}
					},
					he = d()((function(e) {
						return {
							baseTag: K([C, I], e),
							bodyAttributes: X(g, e),
							defer: J(e, L),
							encode: J(e, M),
							htmlAttributes: X(y, e),
							linkTags: $(v.LINK, [P, C], e),
							metaTags: $(v.META, [x, O, _, T, E], e),
							noscriptTags: $(v.NOSCRIPT, [j], e),
							onChangeClientState: Q(e),
							scriptTags: $(v.SCRIPT, [N, j], e),
							styleTags: $(v.STYLE, [k], e),
							title: W(e),
							titleAttributes: X(w, e)
						}
					}), (function(e) {
						re && ae(re), e.defer ? re = te((function() {
							oe(e, (function() {
								re = null
							}))
						})) : (oe(e), re = null)
					}), pe)((function() {
						return null
					})),
					fe = (r = he, s = o = function(e) {
						function t() {
							return q(this, t), H(this, e.apply(this, arguments))
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
						}(t, e), t.prototype.shouldComponentUpdate = function(e) {
							return !m()(this.props, e)
						}, t.prototype.mapNestedChildrenToProps = function(e, t) {
							if (!t) return null;
							switch (e.type) {
								case v.SCRIPT:
								case v.NOSCRIPT:
									return {
										innerHTML: t
									};
								case v.STYLE:
									return {
										cssText: t
									}
							}
							throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
						}, t.prototype.flattenArrayTypeChildren = function(e) {
							var t, a = e.child,
								n = e.arrayTypeChildren,
								r = e.newChildProps,
								o = e.nestedChildren;
							return U({}, n, ((t = {})[a.type] = [].concat(n[a.type] || [], [U({}, r, this.mapNestedChildrenToProps(a, o))]), t))
						}, t.prototype.mapObjectTypeChildren = function(e) {
							var t, a, n = e.child,
								r = e.newProps,
								o = e.newChildProps,
								s = e.nestedChildren;
							switch (n.type) {
								case v.TITLE:
									return U({}, r, ((t = {})[n.type] = s, t.titleAttributes = U({}, o), t));
								case v.BODY:
									return U({}, r, {
										bodyAttributes: U({}, o)
									});
								case v.HTML:
									return U({}, r, {
										htmlAttributes: U({}, o)
									})
							}
							return U({}, r, ((a = {})[n.type] = U({}, o), a))
						}, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
							var a = U({}, t);
							return Object.keys(e).forEach((function(t) {
								var n;
								a = U({}, a, ((n = {})[t] = e[t], n))
							})), a
						}, t.prototype.warnOnInvalidChildren = function(e, t) {
							return !0
						}, t.prototype.mapChildrenToProps = function(e, t) {
							var a = this,
								n = {};
							return h.a.Children.forEach(e, (function(e) {
								if (e && e.props) {
									var r = e.props,
										o = r.children,
										s = function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											return Object.keys(e).reduce((function(t, a) {
												return t[D[a] || a] = e[a], t
											}), t)
										}(z(r, ["children"]));
									switch (a.warnOnInvalidChildren(e, o), e.type) {
										case v.LINK:
										case v.META:
										case v.NOSCRIPT:
										case v.SCRIPT:
										case v.STYLE:
											n = a.flattenArrayTypeChildren({
												child: e,
												arrayTypeChildren: n,
												newChildProps: s,
												nestedChildren: o
											});
											break;
										default:
											t = a.mapObjectTypeChildren({
												child: e,
												newProps: t,
												newChildProps: s,
												nestedChildren: o
											})
									}
								}
							})), t = this.mapArrayTypeChildrenToProps(n, t)
						}, t.prototype.render = function() {
							var e = this.props,
								t = e.children,
								a = z(e, ["children"]),
								n = U({}, a);
							return t && (n = this.mapChildrenToProps(t, n)), h.a.createElement(r, n)
						}, V(t, null, [{
							key: "canUseDOM",
							set: function(e) {
								r.canUseDOM = e
							}
						}]), t
					}(h.a.Component), o.propTypes = {
						base: c.a.object,
						bodyAttributes: c.a.object,
						children: c.a.oneOfType([c.a.arrayOf(c.a.node), c.a.node]),
						defaultTitle: c.a.string,
						defer: c.a.bool,
						encodeSpecialCharacters: c.a.bool,
						htmlAttributes: c.a.object,
						link: c.a.arrayOf(c.a.object),
						meta: c.a.arrayOf(c.a.object),
						noscript: c.a.arrayOf(c.a.object),
						onChangeClientState: c.a.func,
						script: c.a.arrayOf(c.a.object),
						style: c.a.arrayOf(c.a.object),
						title: c.a.string,
						titleAttributes: c.a.object,
						titleTemplate: c.a.string
					}, o.defaultProps = {
						defer: !0,
						encodeSpecialCharacters: !0
					}, o.peek = r.peek, o.rewind = function() {
						var e = r.rewind();
						return e || (e = pe({
							baseTag: [],
							bodyAttributes: {},
							encodeSpecialCharacters: !0,
							htmlAttributes: {},
							linkTags: [],
							metaTags: [],
							noscriptTags: [],
							scriptTags: [],
							styleTags: [],
							title: "",
							titleAttributes: {}
						})), e
					}, s);
				fe.renderStatic = fe.rewind, t.a = fe
			}).call(this, a("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function o() {}
			o.resetWarningCache = r, e.exports = function() {
				function e(e, t, a, r, o, s) {
					if (s !== n) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var a = {
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
					checkPropTypes: o,
					resetWarningCache: r
				};
				return a.PropTypes = a, a
			}
		},
		"./node_modules/react-helmet/node_modules/prop-types/index.js": function(e, t, a) {
			e.exports = a("./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, a) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/react-side-effect/lib/index.js": function(e, t, a) {
			"use strict";
			var n, r = a("./node_modules/react/index.js"),
				o = (n = r) && "object" == typeof n && "default" in n ? n.default : n;

			function s(e, t, a) {
				return t in e ? Object.defineProperty(e, t, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = a, e
			}
			var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
			e.exports = function(e, t, a) {
				if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
				if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
				if (void 0 !== a && "function" != typeof a) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
				return function(n) {
					if ("function" != typeof n) throw new Error("Expected WrappedComponent to be a React component.");
					var c, l = [];

					function d() {
						c = e(l.map((function(e) {
							return e.props
						}))), u.canUseDOM ? t(c) : a && (c = a(c))
					}
					var u = function(e) {
						var t, a;

						function r() {
							return e.apply(this, arguments) || this
						}
						a = e, (t = r).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, r.peek = function() {
							return c
						}, r.rewind = function() {
							if (r.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
							var e = c;
							return c = void 0, l = [], e
						};
						var s = r.prototype;
						return s.UNSAFE_componentWillMount = function() {
							l.push(this), d()
						}, s.componentDidUpdate = function() {
							d()
						}, s.componentWillUnmount = function() {
							var e = l.indexOf(this);
							l.splice(e, 1), d()
						}, s.render = function() {
							return o.createElement(n, this.props)
						}, r
					}(r.PureComponent);
					return s(u, "displayName", "SideEffect(" + function(e) {
						return e.displayName || e.name || "Component"
					}(n) + ")"), s(u, "canUseDOM", i), u
				}
			}
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return o
			}));
			var n = a("./src/lib/sentry/index.ts");

			function r() {
				! function(e, t) {
					if (!e.rdt) {
						var a = e.rdt = function() {
							a.sendEvent ? a.sendEvent.apply(a, arguments) : a.callQueue.push(arguments)
						};
						a.callQueue = [];
						var n = t.createElement("script");
						n.src = "https://www.redditstatic.com/ads/pixel.js", n.async = !0;
						var r = t.getElementsByTagName("script")[0];
						r.parentNode.insertBefore(n, r)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const o = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					n.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return _
			})), a.d(t, "a", (function() {
				return j
			})), a.d(t, "e", (function() {
				return x
			})), a.d(t, "b", (function() {
				return P
			})), a.d(t, "d", (function() {
				return N
			})), a.d(t, "j", (function() {
				return I
			})), a.d(t, "i", (function() {
				return A
			})), a.d(t, "f", (function() {
				return S
			})), a.d(t, "g", (function() {
				return L
			})), a.d(t, "h", (function() {
				return M
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./src/lib/formatApiError/index.ts"),
				o = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/lib/sentry/index.ts"),
				i = a("./src/reddit/constants/modals.ts"),
				c = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				d = a("./src/reddit/actions/modal.ts"),
				u = a("./src/reddit/actions/toaster.ts"),
				m = a("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = a("./src/reddit/endpoints/gold/purchase.ts"),
				h = a("./src/reddit/helpers/correlationIdTracker.ts"),
				f = a("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				b = a("./src/reddit/models/Gold/Award.ts"),
				g = a("./src/reddit/models/Gold/ProductOffer.ts"),
				y = a("./src/reddit/models/Toast/index.ts"),
				w = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				v = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				O = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const k = Object(o.a)(O.q),
				C = Object(o.a)(O.c),
				_ = e => async (t, a) => {
					t(k(e)), t(Object(d.h)(i.a.ECON_COIN_PURCHASE))
				}, j = () => async (e, t) => {
					e(C()), e(Object(d.g)(i.a.ECON_COIN_PURCHASE))
				}, E = Object(o.a)(O.u), x = ({
					correlationId: e,
					packageId: t
				}) => async (a, n) => {
					const r = n();
					Object(w.e)(r, t) ? (a(E({
						correlationId: e,
						packageId: t
					})), a(Object(d.i)(i.a.GOLD_TARGETED_OFFER_MODAL))) : s.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, T = Object(o.a)(O.p), P = ({
					correlationId: e,
					packageId: t
				}) => async (a, n) => {
					Object(w.c)(n(), t) ? (a(T({
						correlationId: e,
						packageId: t
					})), a(Object(d.i)(i.a.ECON_COIN_PACKAGE_OFFER))) : s.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, N = (e, t, a) => async (r, o) => {
					await r(Object(l.c)(e, a));
					const s = o(),
						i = Object(w.m)(s);
					if (0 !== i.length) r(_({
						correlationId: a,
						packageId: i[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(w.j)(s),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						r(Object(u.e)({
							kind: y.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, I = (e, t) => async (a, o, {
					apiContext: s
				}) => {
					const i = o(),
						{
							coins: l,
							pennies: d
						} = t,
						u = Object(v.q)(i) || Object(h.d)(h.a.GoldPayment, !1);
					let m, f;
					a(Object(c.stripeTokenPending)());
					const b = Object(v.x)(i);
					if (b || (m = await a(Object(c.validateAndCreateStripeToken)(e)), f = Object(v.u)(i), m)) try {
						const e = await Object(p.e)({
							coins: l,
							context: s(),
							correlationId: u,
							offerContext: Object(g.c)(t, !1),
							pennies: d,
							rememberCard: f,
							savedCardId: b || void 0,
							token: m
						});
						if (e.error) {
							const t = Object(r.a)(e.error, e.status);
							return void a(Object(c.stripeApiError)(t))
						}
						return a(Object(c.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(h.b)(h.a.GoldPayment)
					} catch (y) {
						const e = Object(r.a)(y);
						a(Object(c.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						a(Object(c.stripeApiError)(e))
					}
				}, A = (e, t, o) => async (s, i, {
					apiContext: l
				}) => {
					const d = i(),
						{
							coins: u,
							pennies: m
						} = t,
						y = Object(v.q)(d) || Object(h.d)(h.a.GoldPayment, !1);
					let w, O;
					s(Object(c.stripeTokenPending)());
					const k = Object(v.x)(d);
					if (k || (w = await s(Object(c.validateAndCreateStripeToken)(e)), O = Object(v.u)(d), w)) try {
						const {
							gildModalThingId: e,
							isAnonymous: i,
							message: v,
							selectedAward: C
						} = d.gild;
						if (!e || !C.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void s(Object(c.stripeApiError)(e))
						}
						const _ = C.id,
							E = {
								gildType: _,
								isAnonymous: i,
								message: v
							},
							x = await Object(p.d)({
								coins: u,
								context: l(),
								correlationId: y,
								gildParams: E,
								isOldReddit: o,
								offerContext: Object(g.c)(t, !0),
								pennies: m,
								rememberCard: O,
								savedCardId: k || void 0,
								thingId: e,
								token: w
							});
						if (x.error) {
							const e = Object(r.a)(x.error, x.status);
							return void s(Object(c.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await a.e("gildActions").then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							s(j()), s(Object(c.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: r,
								coins: o,
								treatment_tags: i
							} = x.body;
							return s(t({
								awardKarmaReceived: n || 0,
								awardId: _,
								awardings: r && r.length ? Object(f.a)(r).map(e => ({
									award: Object(b.h)(e),
									total: e.count
								})) : [],
								coins: o,
								id: e,
								treatmentTags: i
							})), void Object(h.b)(h.a.GoldPayment)
						}
					} catch (C) {
						const e = Object(r.a)(C);
						s(Object(c.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						s(Object(c.stripeApiError)(e))
					}
				}, S = e => async (t, a, {
					apiContext: n
				}) => {
					const o = Object(h.c)(h.a.GoldPayment),
						{
							coins: i,
							pennies: l
						} = e;
					try {
						const e = await Object(m.a)({
							context: n(),
							coins: i,
							pennies: l,
							correlationId: o
						});
						if (e.error) {
							const a = Object(r.a)(e.error);
							return void t(Object(c.paypalApiError)(a))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (d) {
						s.c.captureException(d);
						const e = Object(r.a)(d);
						t(Object(c.paypalApiError)(e))
					}
				}, L = (e, t) => async (a, n, {
					apiContext: o
				}) => {
					const i = n(),
						l = Object(v.q)(i) || Object(h.d)(h.a.GoldPayment, !1),
						{
							coins: d,
							pennies: u
						} = t;
					try {
						const n = await Object(m.c)({
							context: o(),
							offerContext: Object(g.c)(t, !1),
							orderId: e,
							coins: d,
							pennies: u,
							correlationId: l
						});
						if (n.error) {
							const e = Object(r.a)(n.error);
							return void a(Object(c.paypalApiError)(e))
						} {
							const {
								coins: e
							} = n.body;
							a(Object(c.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(h.b)(h.a.GoldPayment)
						}
					} catch (p) {
						s.c.captureException(p);
						const e = Object(r.a)(p);
						a(Object(c.paypalApiError)(e))
					}
				}, M = (e, t) => async (o, i, {
					apiContext: l
				}) => {
					const d = i(),
						u = Object(v.q)(d) || Object(h.d)(h.a.GoldPayment, !1),
						{
							coins: p,
							pennies: y
						} = t;
					try {
						const {
							gildModalThingId: s,
							isAnonymous: i,
							message: w,
							selectedAward: v
						} = d.gild;
						if (!s || !v) return void o(Object(c.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const O = v.id,
							k = await Object(m.d)({
								context: l(),
								offerContext: Object(g.c)(t, !0),
								orderId: e,
								coins: p,
								pennies: y,
								thingId: s,
								awardId: O,
								message: w || "",
								isAnonymous: i,
								correlationId: u
							});
						if (k.error) {
							const e = Object(r.a)(k.error);
							o(Object(c.paypalApiError)(e))
						} else {
							o(j());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: r,
								treatment_tags: i
							} = k.body;
							o(Object(c.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: l
							} = await a.e("gildActions").then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(l({
								awardId: O,
								awardKarmaReceived: t || 0,
								awardings: Object(f.a)(e).map(e => ({
									award: Object(b.h)(e),
									total: e.count
								})),
								coins: n,
								id: s,
								subredditCoins: r,
								treatmentTags: i
							})), Object(h.b)(h.a.GoldPayment)
						}
					} catch (w) {
						s.c.captureException(w);
						const e = Object(r.a)(w);
						o(Object(c.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "selectPaymentMethod", (function() {
				return l
			})), a.d(t, "paymentCompleted", (function() {
				return d
			})), a.d(t, "cardNameInput", (function() {
				return u
			})), a.d(t, "cardNameEmpty", (function() {
				return m
			})), a.d(t, "cardElementChange", (function() {
				return p
			})), a.d(t, "stripeTokenPending", (function() {
				return h
			})), a.d(t, "stripeTokenError", (function() {
				return f
			})), a.d(t, "stripeApiError", (function() {
				return b
			})), a.d(t, "validateAndCreateStripeToken", (function() {
				return g
			})), a.d(t, "paypalApiError", (function() {
				return y
			})), a.d(t, "toggleRememberCard", (function() {
				return w
			})), a.d(t, "selectSavedCard", (function() {
				return v
			})), a.d(t, "_deleteSavedCard", (function() {
				return O
			})), a.d(t, "deleteSavedCard", (function() {
				return k
			})), a.d(t, "savedCardsPending", (function() {
				return C
			})), a.d(t, "savedCardsSuccess", (function() {
				return _
			})), a.d(t, "loadSavedCards", (function() {
				return j
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./src/lib/sentry/index.ts"),
				o = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/reddit/endpoints/gold/purchase.ts"),
				i = a("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = a("./src/reddit/selectors/goldPurchaseModals.ts");
			const l = Object(o.a)(i.A),
				d = Object(o.a)(i.w),
				u = Object(o.a)(i.b),
				m = Object(o.a)(i.a),
				p = Object(o.a)(i.D),
				h = Object(o.a)(i.F),
				f = Object(o.a)(i.E),
				b = Object(o.a)(i.C),
				g = e => async (t, a) => {
					const r = a(),
						o = Object(c.h)(r),
						{
							token: s,
							error: i
						} = await e.createToken({
							name: o
						});
					if (o.trim()) {
						if (!i && s) return s;
						t(f(i || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(m({
							message: e
						}))
					}
				}, y = Object(o.a)(i.x), w = Object(o.a)(i.G), v = Object(o.a)(i.B), O = Object(o.a)(i.g), k = e => async (t, a, {
					apiContext: n
				}) => {
					t(O(e));
					try {
						const t = await Object(s.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						r.c.captureException(o)
					}
				}, C = Object(o.a)(i.y), _ = Object(o.a)(i.z), j = () => async (e, t, {
					apiContext: a
				}) => {
					e(C());
					try {
						const t = await Object(s.b)(a());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(_(n)), n[0] && e(v(n[0].cardId))
					} catch (n) {
						r.c.captureException(n), e(_([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return b
			})), a.d(t, "c", (function() {
				return v
			})), a.d(t, "a", (function() {
				return k
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./src/lib/env/index.ts"),
				o = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/lib/sentry/index.ts"),
				i = a("./src/reddit/endpoints/gold/productCatalog.ts"),
				c = a("./src/reddit/selectors/user.ts"),
				l = a("./src/reddit/actions/toaster.ts"),
				d = a("./src/reddit/models/Toast/index.ts"),
				u = a("./src/reddit/actions/post.ts"),
				m = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(o.a)(m.j),
				h = Object(o.a)(m.k),
				f = Object(o.a)(m.i),
				b = e => async (t, a, {
					apiContext: o
				}) => {
					t(p());
					const l = a(),
						d = Object(c.K)(l);
					try {
						const a = !d,
							n = await Object(i.b)({
								context: o(),
								correlationId: e,
								shouldUseCurrentOrigin: a
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const r = n.body;
						t(h(r))
					} catch (u) {
						Object(r.b)() || console.error(u), s.c.captureException(u);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(f(e))
					}
				}, g = Object(o.a)(m.m), y = Object(o.a)(m.n), w = Object(o.a)(m.l), v = (e, t) => async (a, o, {
					apiContext: c
				}) => {
					a(g());
					try {
						const n = await Object(i.c)({
							awardId: e,
							context: c(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const r = n.body;
						if (!r.coinPackages || !r.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						a(y(r))
					} catch (l) {
						Object(r.b)() || console.error(l), s.c.captureException(l);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						a(w(e))
					}
				}, O = Object(o.a)(m.h), k = () => async (e, t, {
					gqlContext: a
				}) => {
					var o, c;
					try {
						const t = await Object(i.a)(a());
						if (t.ok) {
							const a = t.body.data.claimAwardOffer;
							if (null === (o = a.errors) || void 0 === o ? void 0 : o.length) throw new Error(a.errors.map(e => e.message).join(" | "));
							if (!(null === (c = a.awards) || void 0 === c ? void 0 : c.length)) throw new Error("Got empty award list on free award offer claim");
							if (!a.ok) throw new Error("Got not ok response on free award offer claim");
							await e(O({
								awards: a.awards
							})), e(Object(u.w)())
						}
					} catch (m) {
						Object(r.b)() || console.error(m), e(Object(l.e)({
							kind: d.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), s.c.captureException(m)
					}
				}
		},
		"./src/reddit/components/CoinPurchasePackage/index.m.less": function(e, t, a) {
			e.exports = {
				coinPurchasePackage: "_2EIXBaqbDzjEAL7-FJSYrP",
				large: "_2bLqgYtdh1iwHZvymepMHY",
				imageContainer: "_3UcT0NNsA2y6trB2G7Qk3T",
				badge: "_2q1pllb_vmiNtpjLMUbL3E",
				stamp: "dh-QO7AdDu0vFy7aoCaVt",
				stampIcon: "ei1DxPM2zy9FNW2ulDBOn",
				stampValue: "lVRFLCbqG6b523UFMdEj3",
				stampText: "_3UmM4fIFVtu49_z-3UMgZL",
				contentContainer: "_3YFnrc2p9Tl-6EMp1fAqpG",
				price: "_3eYcjtmYoyVXxiONpaL-dl",
				priceCoinIcon: "_3Cwg9Vp-uedO-_VTBrJInh",
				priceValue: "_5vvqF-Ums1umqkRQRQgxc",
				priceCurrency: "GAlR-4atoPo_42Ies2wM4",
				crossout: "dIoLyZbXoDJefsplq4m_j",
				description: "_36_v0R5TTjmgVJ4q6NSB-6",
				ctaContainer: "_34OTQdJgV4WKGff3WUOMAj",
				cta: "_2VikcGTdLgHpqRMo203jak",
				priceCrossout: "_1ZviI-xoPLg6gwP7AQrMUb"
			}
		},
		"./src/reddit/components/CoinPurchasePackage/placeholder.m.less": function(e, t, a) {
			e.exports = {
				packagePlaceholder: "_2qznWNxYQ2Sp1T5Gx9Ya2r",
				large: "_21Ve23nfMGEg24nP4w5bKj"
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.m.less": function(e, t, a) {
			e.exports = {
				collapsibleFAQ: "PGMuR8fr8VizHP4fajECO",
				collapsibleFaq: "PGMuR8fr8VizHP4fajECO",
				questionButton: "AE_-OfcuQcVv1sMNAnYez",
				buttonContent: "_3GpGGAjkKUtSIydzuhDgjk",
				collapseIcon: "GcBEian3rJp0dqdStxeaG",
				collapsibleAnswer: "_2aCJykcYH0l0L0J29lNN6X",
				isOpen: "_1epMyDuMGgpwMk-QoPqYMi"
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				o = a("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				s = a.n(o),
				i = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = a("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class d extends r.a.Component {
				constructor(e) {
					super(e), this.toggleOpen = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !e.defaultClosed
					}
				}
				render() {
					const {
						className: e,
						question: t,
						children: a
					} = this.props, {
						isOpen: n
					} = this.state, o = n ? s.a.isOpen : "";
					return r.a.createElement("div", {
						className: Object(i.a)(e, s.a.collapsibleFAQ)
					}, r.a.createElement("button", {
						className: s.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, r.a.createElement("span", {
						className: s.a.buttonContent,
						tabIndex: -1
					}, t, n ? r.a.createElement(l.a, {
						className: s.a.collapseIcon
					}) : r.a.createElement(c.a, {
						className: s.a.collapseIcon
					}))), r.a.createElement("div", {
						className: Object(i.a)(s.a.collapsibleAnswer, o)
					}, a))
				}
			}
			t.a = d
		},
		"./src/reddit/components/GildMarketingDescription/index.m.less": function(e, t, a) {
			e.exports = {
				iconContainer: "_3aLGwXXgtLTRBL_s4zGzpA",
				textContainer: "L1uF-uIVgiGprHTgSe6Pa",
				title: "_1RHFAL2gq_LNUOW3yaREdJ",
				content: "_3iKxdZxO2uDcDfP0M_uXXu",
				isMobileStyled: "hhQ0bLehrQAD95bHHfIHL"
			}
		},
		"./src/reddit/components/GildMarketingDescription/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				s = a("./src/reddit/components/GildMarketingDescription/index.m.less"),
				i = a.n(s);
			t.a = e => {
				const {
					children: t,
					className: a,
					icon: n,
					isMobileStyled: s,
					title: c
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(a, {
						[i.a.isMobileStyled]: s
					})
				}, r.a.createElement("div", {
					className: i.a.iconContainer
				}, n), r.a.createElement("div", {
					className: i.a.textContainer
				}, r.a.createElement("h3", {
					className: i.a.title
				}, c), r.a.createElement("p", {
					className: i.a.content
				}, t)))
			}
		},
		"./src/reddit/components/MarketingPageFooter/index.m.less": function(e, t, a) {
			e.exports = {
				marketingPageFooter: "_3BwBOzWryMj3__GUbbUsfT",
				marketingPageFooterInner: "_30YqpAvDOv6bhMsdX4RBmh",
				linkContainer: "_3k49tjCFDJWYNMxa7F_Vcz",
				linkCol: "Kc3eh30cKiJsqGyYdTomf",
				linkBoldCol: "NdUUYBbykS5XarNMBnwW8",
				link: "_2__-I0A5TrnEaHBIKzBzWG",
				linkColInner: "Qeqi5He8ogV_wEJHq4JuY",
				linkItem: "_2faDmx1pVndPEOOWcvmbzy",
				legal: "_37R5bPLs9vyWkel2akHN9v",
				legalItem: "_3sfkqPfhkeoURTGRzBv1TP",
				legalLink: "_38avtjw3edhexhYWmJx1Rw"
			}
		},
		"./src/reddit/components/MarketingPageFooter/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				o = a("./src/reddit/components/MarketingPageFooter/index.m.less"),
				s = a.n(o),
				i = a("./src/lib/classNames/index.ts");
			const {
				fbt: c
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement("div", {
				className: Object(i.a)(e.className, s.a.marketingPageFooter)
			}, r.a.createElement("div", {
				className: Object(i.a)(e.className, s.a.marketingPageFooterInner)
			}, r.a.createElement("div", {
				className: s.a.linkContainer
			}, r.a.createElement("div", {
				className: s.a.linkCol
			}, r.a.createElement("ul", {
				className: s.a.linkColInner
			}, r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "3IO4c7"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "2GATRU"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "iUiGg"
			}))))), r.a.createElement("div", {
				className: s.a.linkCol
			}, r.a.createElement("ul", {
				className: s.a.linkColInner
			}, r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "RYuIn"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "4xzWuA"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "36XyzA"
			}))))), r.a.createElement("div", {
				className: Object(i.a)(s.a.linkCol, s.a.linkBoldCol)
			}, r.a.createElement("ul", {
				className: s.a.linkColInner
			}, r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/mobile/download"
			}, c._("the reddit app", null, {
				hk: "OcJ1f"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/coins"
			}, c._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/premium"
			}, c._("reddit premium", null, {
				hk: "3vPbLO"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://redditgifts.com/"
			}, c._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), r.a.createElement("div", {
				className: Object(i.a)(s.a.linkCol, s.a.linkBoldCol)
			}, r.a.createElement("ul", {
				className: s.a.linkColInner
			}, r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.facebook.com/reddit/"
			}, c._("Facebook", null, {
				hk: "47DT2F"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://twitter.com/reddit"
			}, c._("Twitter", null, {
				hk: "3aUv7u"
			}))), r.a.createElement("li", {
				className: s.a.linkItem
			}, r.a.createElement("a", {
				className: s.a.link,
				href: "https://www.instagram.com/reddit/"
			}, c._("Instagram", null, {
				hk: "dVIRX"
			})))))), r.a.createElement("ul", {
				className: s.a.legal
			}, r.a.createElement("li", {
				className: s.a.legalItem
			}, r.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("content policy", null, {
				hk: "4ptiaZ"
			}))), r.a.createElement("li", {
				className: s.a.legalItem
			}, r.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("privacy policy", null, {
				hk: "1ybjnz"
			}))), r.a.createElement("li", {
				className: s.a.legalItem
			}, r.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("user agreement", null, {
				hk: "4puRxC"
			}))), r.a.createElement("li", {
				className: s.a.legalItem
			}, r.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("mod policy", null, {
				hk: "1VvAdM"
			}))), r.a.createElement("li", {
				className: s.a.legalItem
			}, c._("© {year} Reddit, Inc. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
		},
		"./src/reddit/components/PremiumMarketingBanner/index.m.less": function(e, t, a) {
			e.exports = {
				premiumBanner: "_2tsT1sLHLYXqHUGNYQsm6-",
				premiumCrest: "_1ExqjoNTE2nif0e3QVdLwy",
				premiumDescription: "S8jGzZVfR9ZPB9DIOUB7f",
				premiumCTA: "svs_XC_fBjFtyJDODBqnd",
				premiumCta: "svs_XC_fBjFtyJDODBqnd"
			}
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				o = a("./src/reddit/components/TimeLeft/index.m.less"),
				s = a.n(o),
				i = a("./src/lib/classNames/index.ts"),
				c = a("./src/lib/timeAgo/index.ts"),
				l = a("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: a
				} = e, n = Math.floor(a.getTime() / 1e3), o = Object(c.b)(n);
				return r.a.createElement("div", {
					className: Object(i.a)(t)
				}, r.a.createElement(l.a, {
					className: s.a.clockIcon
				}), r.a.createElement("span", {
					className: s.a.timeLeft
				}, o))
			}
		},
		"./src/reddit/components/TimeLeft/index.m.less": function(e, t, a) {
			e.exports = {
				clockIcon: "_1DDlcC1o7n-afkLICCzCK9",
				timeLeft: "UN0qnXla79aOGiH-PaULH"
			}
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				o = a("./node_modules/react-helmet/es/Helmet.js"),
				s = a("./node_modules/react-redux/es/index.js"),
				i = a("./node_modules/reselect/es/index.js"),
				c = a("./src/lib/pageTitle.ts"),
				l = a("./src/reddit/helpers/tabBadging/index.ts"),
				d = a("./src/reddit/selectors/appBadges.ts");
			const u = Object(i.a)(d.c, e => ({
				badgeCount: e
			}));
			class m extends n.Component {
				constructor() {
					super(...arguments), this.title = Object(c.c)().toString(), this.state = {
						badgeCount: 0
					}
				}
				getTitle() {
					const e = this.props.title.length > 0 ? this.props.title : Object(c.c)().toString(),
						t = this.props.badgeCount >= 100 ? "99+" : this.props.badgeCount;
					return this.props.badgeCount > 0 ? `(${t}) ${this.props.title}` : e
				}
				render() {
					return Object(l.b)(this.props.badgeCount > 0), r.a.createElement(o.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(s.b)(u)(m)
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, a) {
			"use strict";
			a.d(t, "f", (function() {
				return l
			})), a.d(t, "a", (function() {
				return d
			})), a.d(t, "b", (function() {
				return u
			})), a.d(t, "c", (function() {
				return m
			})), a.d(t, "d", (function() {
				return p
			})), a.d(t, "e", (function() {
				return h
			}));
			var n = a("./src/lib/constants/index.ts"),
				r = a("./src/lib/makeApiRequest/index.ts"),
				o = a("./src/lib/omitHeaders/index.ts"),
				s = a("./src/reddit/constants/headers.ts"),
				i = a("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = a("./src/reddit/endpoints/gold/purchase.ts");
			const l = async ({
				buttonId: e,
				context: t,
				correlationId: a
			}) => {
				const l = {
						button_id: e,
						correlation_id: a
					},
					d = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(i.a)(d);
				return Object(r.a)(Object(o.a)(t, [s.a]), {
					method: n.cb.POST,
					endpoint: u,
					data: l
				}).then(c.c)
			}, d = async ({
				context: e,
				coins: t,
				pennies: a,
				correlationId: i
			}) => {
				const l = {
					coins: t,
					pennies: a,
					correlation_id: i
				};
				return Object(r.a)(Object(o.a)(e, [s.a]), {
					method: n.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(c.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: a,
				thingId: i,
				correlationId: l
			}) => {
				const d = {
					award_id: t,
					correlation_id: l,
					pennies: a,
					thing_id: i
				};
				return Object(r.a)(Object(o.a)(e, [s.a]), {
					method: n.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: d
				}).then(c.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: a,
				coins: i,
				pennies: l,
				correlationId: d
			}) => {
				const u = {
					offer_context: t,
					order_id: a,
					coins: i,
					pennies: l,
					correlation_id: d
				};
				return Object(r.a)(Object(o.a)(e, [s.a]), {
					method: n.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(c.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: a,
				correlationId: i,
				isAnonymous: l,
				message: d,
				offerContext: u,
				orderId: m,
				pennies: p,
				thingId: h
			}) => {
				const f = {
					award_id: e,
					coins: a,
					correlation_id: i,
					is_anonymous: l,
					message: d,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: h
				};
				return Object(r.a)(Object(o.a)(t, [s.a]), {
					method: n.cb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(c.c)
			}, h = async ({
				awardId: e,
				context: t,
				correlationId: a,
				isAnonymous: i,
				message: l,
				orderId: d,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: a,
					is_anonymous: i,
					message: l,
					order_id: d,
					thing_id: u
				};
				return Object(r.a)(Object(o.a)(t, [s.a]), {
					method: n.cb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(c.c)
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);

			function o(e, t) {
				const a = e.toString().split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, n) => (n % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : `:${a}:` in t ? e.push(t[`:${a}:`]) : e.push(`:${a}:`), e), []).map((e, t) => r.a.createElement(r.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, a) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "b", (function() {
				return i
			}));
			var n = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = a.n(r);
			const s = ({
					isLoading: e
				}) => Object(n.a)(o.a.loadingBackground, {
					[o.a["m-loading"]]: e
				}),
				i = e => Object(n.a)(o.a.loadingBar, s(e))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
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
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/RedditCoinsLogo/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 446 96",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M257.65 32.844a6.096 6.096 0 1 1-12.19.22 6.096 6.096 0 0 1 12.19-.22",
				fill: "#DDBD37"
			}), r.a.createElement("path", {
				d: "M153.263 45.035c4.146 0 7.673 3.181 8.98 7.62h-17.96c1.307-4.439 4.834-7.62 8.98-7.62zm11.604 13.715c2.968 0 4.697-2.219 4.567-4.402-.068-1.154-.17-1.872-.306-2.458-1.819-7.885-8.232-13.712-15.865-13.712-9.048 0-16.382 8.187-16.382 18.287s7.334 18.286 16.382 18.286c5.667 0 9.715-2.064 12.661-5.299 1.436-1.576 1.172-4.053-.58-5.27-1.422-.989-3.223-.655-4.547.462-1.263 1.067-3.677 3.25-7.534 3.25-4.607 0-8.451-3.927-9.334-9.144h20.938zm-27.605-17.028a3.427 3.427 0 0 0-2.864-3.378c-4.993-.753-9.66 1.11-12.375 4.485v-.461c0-2.094-1.714-3.428-3.429-3.428a3.429 3.429 0 0 0-3.429 3.428v28.059c0 1.836 1.385 3.446 3.217 3.557a3.43 3.43 0 0 0 3.641-3.423V56.087c0-6.405 4.817-11.665 11.426-10.95.239.025.463.023.677-.001a3.427 3.427 0 0 0 3.136-3.414zm117.722 3.694a3.429 3.429 0 1 0-6.857 0v25.145a3.429 3.429 0 0 0 6.857 0V45.416zm-66.671 22.478c-5.261 0-9.524-5.117-9.524-11.43 0-6.311 4.263-11.428 9.524-11.428 5.26 0 9.524 5.117 9.524 11.429s-4.264 11.429-9.524 11.429zm15.62-41.526a3.429 3.429 0 1 0-6.857 0v15.31c-2.323-2.321-5.284-3.5-8.763-3.5-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.286 16.382 18.286 3.51 0 6.452-1.208 8.825-3.544a3.43 3.43 0 0 0 6.795-.646V26.368zm20.191 41.526c-5.26 0-9.524-5.117-9.524-11.43 0-6.311 4.264-11.428 9.524-11.428 5.26 0 9.524 5.117 9.524 11.429s-4.264 11.429-9.524 11.429zm15.62-41.526a3.429 3.429 0 1 0-6.857 0v15.31c-2.323-2.321-5.284-3.5-8.763-3.5-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.286 16.382 18.286 3.511 0 6.453-1.208 8.825-3.544a3.43 3.43 0 0 0 6.795-.646V26.368zm32.66 44.192V45.037h3.048c1.624 0 3.04-1.225 3.145-2.845a3.047 3.047 0 0 0-3.041-3.251h-3.152v-4.835c0-1.826-1.378-3.421-3.2-3.54a3.43 3.43 0 0 0-3.657 3.423v4.952h-2.84c-1.622 0-3.04 1.225-3.145 2.845a3.048 3.048 0 0 0 3.04 3.25h2.945v25.526a3.429 3.429 0 1 0 6.857 0v-.002z",
				fill: "#FFF"
			}), r.a.createElement("path", {
				d: "M307.89 75.071c-5.073 0-9.042-1.572-11.91-4.716-2.869-3.142-4.301-7.36-4.301-12.65 0-2.302.385-4.455 1.154-6.458a17.553 17.553 0 0 1 3.36-5.462c1.398-1.57 3.153-2.839 5.262-3.802 2.108-.962 4.407-1.444 6.897-1.444 3.435 0 6.23.77 8.389 2.307 2.155 1.538 3.233 3.636 3.233 6.292 0 1.107-.283 2.086-.852 2.94-.568.852-1.505 1.277-2.808 1.277-1.4 0-2.484-.33-3.255-.992-.769-.662-1.153-1.4-1.153-2.218 0-.992.143-2.013.426-3.062.285-1.048.45-1.815.498-2.3-.426-.684-1.058-1.142-1.898-1.373a10.132 10.132 0 0 0-2.712-.348 7.942 7.942 0 0 0-3.244.681c-1.029.455-2.028 1.29-2.998 2.508-.872 1.105-1.584 2.6-2.125 4.481-.544 1.883-.816 4.129-.816 6.74 0 4.119.975 7.478 2.928 10.078 1.953 2.6 4.515 3.901 7.685 3.901 2.294 0 4.217-.523 5.767-1.569 1.55-1.045 2.987-2.614 4.312-4.706l2.273 1.394c-1.564 2.612-3.626 4.683-6.186 6.21-2.559 1.526-5.203 2.29-7.927 2.29v.001zm42.051-18.022c0-1.66-.186-3.414-.555-5.264-.368-1.848-.923-3.413-1.66-4.698-.786-1.372-1.823-2.474-3.1-3.303-1.279-.83-2.841-1.245-4.688-1.245-1.894 0-3.513.42-4.852 1.261-1.342.841-2.43 1.992-3.266 3.453-.787 1.352-1.341 2.89-1.662 4.616a27.447 27.447 0 0 0-.479 5.014c0 2.124.19 4.09.573 5.893.381 1.803.99 3.415 1.826 4.831.836 1.417 1.888 2.53 3.155 3.337 1.268.808 2.837 1.212 4.705 1.212 3.075 0 5.514-1.338 7.307-4.017 1.797-2.68 2.696-6.376 2.696-11.09zm6.746.457a20.474 20.474 0 0 1-1.167 6.79c-.775 2.224-1.88 4.11-3.318 5.66-1.624 1.77-3.508 3.088-5.65 3.951-2.144.863-4.544 1.295-7.204 1.295-2.213 0-4.322-.393-6.321-1.178a16.016 16.016 0 0 1-5.334-3.436c-1.53-1.484-2.75-3.294-3.654-5.43-.907-2.135-1.36-4.531-1.36-7.188 0-5.114 1.583-9.297 4.75-12.55 3.164-3.255 7.316-4.881 12.447-4.881 4.875 0 8.894 1.544 12.06 4.632 3.168 3.087 4.751 7.198 4.751 12.334v.001zm9.087-18.776c3.919 0 7.096-2.729 7.096-6.095 0-3.367-3.177-6.096-7.096-6.096-3.918 0-7.095 2.729-7.095 6.095 0 3.366 3.177 6.095 7.095 6.095v.001zm9.004 32.505c-.54-.13-1.07-.29-1.587-.481-.712-.244-1.234-.621-1.566-1.13-.332-.508-.499-1.151-.499-1.925V43.004l-.521-.465-12.926.73v2.192c.742.044 1.56.16 2.45.348.893.188 1.571.414 2.044.68.625.379 1.14.884 1.504 1.475.358.586.54 1.233.54 1.94v18.197c0 .796-.169 1.443-.503 1.94-.336.498-.847.846-1.54 1.045a7.515 7.515 0 0 1-1.58.265c-.608.044-1.197.089-1.765.133v2.19h17.683v-2.19a10.794 10.794 0 0 1-1.734-.25v.001zm41.423 2.938h-16.88v-2.19c.536-.045 1.125-.09 1.768-.134.644-.044 1.174-.133 1.595-.266.654-.199 1.137-.548 1.453-1.046.314-.498.474-1.145.474-1.942V51.761c0-2.324-.582-4.117-1.74-5.379-1.157-1.262-2.568-1.893-4.229-1.893-1.24 0-2.375.183-3.405.548a12.31 12.31 0 0 0-2.739 1.345c-.772.51-1.386 1.057-1.843 1.644-.454.586-.79 1.056-1 1.411v18.826c0 .753.163 1.372.491 1.86.325.487.816.862 1.47 1.128.491.222 1.02.388 1.593.498.573.111 1.163.19 1.77.233v2.191h-16.915v-2.19c.536-.045 1.09-.09 1.662-.134a6.656 6.656 0 0 0 1.49-.266c.654-.198 1.137-.547 1.452-1.044.316-.498.475-1.144.475-1.94V48.402c0-.75-.172-1.443-.51-2.073a4.202 4.202 0 0 0-1.417-1.542 4.96 4.96 0 0 0-1.576-.58 14.623 14.623 0 0 0-1.961-.249v-2.19l11.486-.732.49.465v4.615h.176a80.132 80.132 0 0 1 2.101-1.909c.84-.74 1.635-1.345 2.382-1.809.862-.532 1.89-.974 3.082-1.329 1.192-.354 2.531-.53 4.027-.53 3.315 0 5.772.98 7.372 2.938 1.597 1.96 2.399 4.565 2.399 7.82v17.032c0 .775.14 1.401.42 1.876.28.476.76.847 1.436 1.113.56.221 1.045.376 1.453.464.407.09.974.156 1.699.2v2.191h-.001zm25.829-15.97a8.51 8.51 0 0 1 2.263 2.756c.526 1.04.79 2.313.79 3.818 0 3.032-1.228 5.512-3.683 7.438-2.456 1.926-5.634 2.888-9.536 2.888-2.061 0-3.96-.343-5.696-1.029-1.737-.686-2.975-1.317-3.717-1.892l-.719 2.158h-2.694l-.359-11.389h2.479c.19.866.598 1.877 1.222 3.032a14.422 14.422 0 0 0 2.263 3.132A12.387 12.387 0 0 0 428 71.581c1.306.666 2.773 1 4.404 1 2.298 0 4.068-.485 5.315-1.454 1.244-.969 1.868-2.355 1.868-4.158 0-.93-.198-1.733-.594-2.408-.395-.674-.976-1.267-1.741-1.776-.79-.509-1.76-.969-2.91-1.378a61.473 61.473 0 0 0-3.844-1.212 37.522 37.522 0 0 1-3.754-1.278c-1.379-.542-2.558-1.179-3.538-1.909a9.558 9.558 0 0 1-2.586-2.856c-.673-1.129-1.006-2.457-1.006-3.984 0-2.679 1.076-4.947 3.233-6.807 2.155-1.859 5.04-2.789 8.656-2.789 1.39 0 2.807.166 4.257.498 1.45.332 2.629.731 3.54 1.195l.825-1.726h2.587l.54 10.525h-2.478c-.505-2.356-1.589-4.273-3.254-5.752-1.665-1.477-3.694-2.216-6.088-2.216-1.965 0-3.51.457-4.634 1.371-1.125.914-1.688 2.017-1.688 3.31 0 .996.184 1.826.555 2.49.372.665.927 1.23 1.672 1.694.718.442 1.62.857 2.711 1.245a92.24 92.24 0 0 0 4.042 1.311c1.53.446 3.024.99 4.472 1.627 1.401.621 2.557 1.306 3.468 2.06v-.001zM96 48c0 26.51-21.49 48-48 48S0 74.51 0 48 21.49 0 48 0s48 21.49 48 48",
				fill: "#DDBD37"
			}), r.a.createElement("path", {
				d: "M59 58.001c-2.757 0-5-2.243-5-5a5.006 5.006 0 0 1 5-5c2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5m.88 8.211c-3.412 3.408-9.95 3.673-11.874 3.673-1.924 0-8.463-.265-11.872-3.673a1.296 1.296 0 1 1 1.833-1.833c2.151 2.151 6.752 2.915 10.04 2.915 3.285 0 7.888-.764 10.042-2.915a1.296 1.296 0 0 1 1.831 1.833M32 53c0-2.757 2.244-5 5.002-5A5.005 5.005 0 0 1 42 53a5.004 5.004 0 0 1-4.998 5A5.006 5.006 0 0 1 32 53m47.992-5a7 7 0 0 0-7-7 6.97 6.97 0 0 0-4.855 1.964c-4.784-3.453-11.377-5.683-18.72-5.94l3.188-15.002 10.418 2.215C63.15 26.887 65.32 29 68 29a5 5 0 0 0 0-10c-1.965 0-3.646 1.143-4.465 2.79l-11.633-2.473a1.251 1.251 0 0 0-1.482.963l-3.56 16.741c-7.452.207-14.149 2.44-18.996 5.93a6.972 6.972 0 0 0-4.84-1.95 7 7 0 0 0-7 7 7 7 0 0 0 4.135 6.382c-.11.7-.166 1.408-.167 2.117 0 10.77 12.536 19.5 28 19.5s28-8.73 28-19.5c0-.71-.058-1.412-.165-2.103A7 7 0 0 0 79.992 48",
				fill: "#FFF"
			}))
		},
		"./src/reddit/icons/svgs/Stamp/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 96 96",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M45.31.614c1.411.984 3.72.984 5.13 0 1.412-.984 3.527-.761 4.703.494 1.175 1.256 3.434 1.736 5.018 1.067 1.584-.67 3.608-.012 4.495 1.461.89 1.472 2.998 2.412 4.687 2.087 1.69-.326 3.532.738 4.096 2.363.562 1.627 2.43 2.982 4.15 3.017 1.72.032 3.3 1.455 3.513 3.162.213 1.707 1.758 3.423 3.432 3.813 1.676.39 2.926 2.11 2.78 3.824-.147 1.715 1.007 3.714 2.565 4.444 1.558.729 2.423 2.672 1.923 4.319-.5 1.646.214 3.841 1.585 4.879 1.372 1.037 1.815 3.118.983 4.625-.83 1.506-.59 3.802.536 5.101 1.126 1.3 1.126 3.428 0 4.729-1.126 1.3-1.367 3.596-.536 5.102.832 1.506.39 3.586-.983 4.624-1.371 1.037-2.086 3.233-1.585 4.878.5 1.646-.365 3.591-1.923 4.32-1.558.73-2.712 2.729-2.565 4.443.146 1.714-1.104 3.435-2.78 3.825-1.674.39-3.22 2.106-3.432 3.812-.212 1.707-1.794 3.13-3.513 3.164-1.72.032-3.588 1.39-4.15 3.015-.564 1.626-2.406 2.69-4.096 2.365-1.689-.326-3.797.614-4.687 2.086-.887 1.473-2.911 2.13-4.495 1.461-1.584-.67-3.843-.19-5.018 1.066-1.176 1.257-3.291 1.48-4.703.495-1.41-.984-3.719-.984-5.13 0-1.41.985-3.526.762-4.702-.495-1.175-1.256-3.434-1.736-5.018-1.066-1.584.669-3.608.012-4.496-1.461-.889-1.472-2.997-2.412-4.687-2.086-1.689.325-3.531-.739-4.095-2.365-.562-1.625-2.43-2.983-4.15-3.015-1.72-.033-3.3-1.457-3.513-3.164-.213-1.706-1.758-3.422-3.432-3.812-1.676-.39-2.926-2.111-2.78-3.825.147-1.714-1.007-3.713-2.565-4.443-1.558-.729-2.423-2.674-1.923-4.32.5-1.645-.213-3.84-1.585-4.878-1.372-1.038-1.815-3.118-.983-4.624.83-1.506.59-3.802-.537-5.102-1.125-1.301-1.125-3.43 0-4.729 1.127-1.3 1.368-3.595.537-5.1-.832-1.508-.39-3.589.983-4.626 1.372-1.038 2.086-3.233 1.585-4.88-.5-1.646.365-3.59 1.923-4.318 1.558-.73 2.712-2.73 2.566-4.444-.147-1.714 1.103-3.434 2.779-3.824 1.674-.39 3.22-2.106 3.432-3.813.212-1.707 1.794-3.13 3.513-3.162 1.72-.035 3.588-1.39 4.15-3.017.564-1.625 2.406-2.69 4.095-2.363 1.69.325 3.798-.615 4.687-2.087.888-1.473 2.912-2.131 4.496-1.46 1.584.668 3.843.188 5.018-1.068C41.784-.147 43.9-.37 45.31.614"
			}))
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "b", (function() {
				return s
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/fbt/lib/FbtPublic.js");
			const r = new Set(["low_coin_upsell"]),
				o = new Set(["new_purchaser", "repeat_purchaser"]),
				s = [{
					prompt: () => n.fbt._("What are coins?", null, {
						hk: "bD2cQ"
					}),
					answer: () => n.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your coins in the future.", null, {
						hk: "2RS7Fb"
					})
				}, {
					prompt: () => n.fbt._('What is "Give Award"?', null, {
						hk: "Q08fJ"
					}),
					answer: () => n.fbt._('Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.', null, {
						hk: "4fZWQ3"
					})
				}, {
					prompt: () => n.fbt._("What are these new Award types?", null, {
						hk: "2ysK1l"
					}),
					answer: () => n.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 coins and gives the recipient a week of Reddit Premium membership and 100 coins. Finally, the ultra rare Platinum Award costs 1800 coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 coins for that month.", null, {
						hk: "Mvg07"
					})
				}, {
					prompt: () => n.fbt._("I bought coins, how can I tell how many I have?", null, {
						hk: "4a4pGf"
					}),
					answer: () => n.fbt._("If you buy coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "2VWZ2s"
					})
				}, {
					prompt: () => n.fbt._("Can I transfer coins between Reddit accounts?", null, {
						hk: "1jLVez"
					}),
					answer: () => n.fbt._("You cannot transfer your Reddit coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 coins.", null, {
						hk: "435l4g"
					})
				}, {
					prompt: () => n.fbt._("Can I get coins for free?", null, {
						hk: "1fhxmd"
					}),
					answer: () => n.fbt._("We may give away coins on special occasions. Stay tuned!", null, {
						hk: "3qKa11"
					})
				}, {
					prompt: () => n.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => n.fbt._("Yes, Creddits are simply called \"coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3bz9Wy"
					})
				}, {
					prompt: () => n.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => n.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "coins".', null, {
						hk: "aFpGc"
					})
				}]
		},
		"./src/reddit/pages/CoinsPage/HeroSection/index.m.less": function(e, t, a) {
			e.exports = {
				hero: "_2vhTQIsosoVQbr9wMiHNrq",
				heroInner: "_3f0XAmNuHoBs42vtlADhEZ",
				heroTitle: "_38WAbDkPGmF05b2rqHBXXE",
				heroLogo: "_3BOSpM8sVMfSVkrXVDpy8U",
				heroDescription: "_2MJQ9yBdNmkVOto9wlBcPt",
				activeSale: "_30mt9pkecX8JHD1wCMZBlX",
				heroCTA: "P6EaaWWVjL1ioBEprcj2k",
				heroCta: "P6EaaWWVjL1ioBEprcj2k",
				expiresText: "_2-NkszuRneQ6RCssOZlbWn"
			}
		},
		"./src/reddit/pages/CoinsPage/index.m.less": function(e, t, a) {
			e.exports = {
				detailGridSection: "_2pjmwu1Qey7ysALWYQIebR",
				detailTitle: "_1elsw4Hvj-wf_HngDYpCuU",
				detailDesription: "_2_Cebwoi5iZt1xC8t8Y87s",
				gridContainer: "_2VbuOyshVldGz4mZms1Qx8",
				gridItem: "_15wx7-Dy6OaPRg2oX97-cs",
				nowrap: "_1zlKaIoI_cWBNJLQYlCy4I",
				purchasePackagesSection: "_3O_T0NX7IDWLLIgZLWxJwk",
				purchaseTitle: "_3DeyHQ9gje-pf93nH48lKk",
				purchaseLogo: "_1Sj2-jzRwDnOmmzci0pMR5",
				purchasePackages: "_2m0gSo1z8uMcoEWC1T3pqG",
				purchasePackage: "_1l-HVUi8gitTQc_tDQWwgj",
				packageText: "_2HIbtTkiH8vmpbPEV2ATpJ",
				faqsSection: "_10UXwtZ8SpUvVCXzOVk2q0",
				faqsTitle: "_2DJp3NAVskfI_0YVI0RBFY",
				faqs: "KNbwqvczVayMcPxh6VdZc"
			}
		},
		"./src/reddit/pages/CoinsPage/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./src/config.ts"),
				r = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/lodash/times.js"),
				s = a.n(o),
				i = a("./node_modules/react/index.js"),
				c = a.n(i),
				l = a("./node_modules/react-redux/es/index.js"),
				d = a("./node_modules/react-router-redux/es/index.js"),
				u = a("./node_modules/reselect/es/index.js"),
				m = a("./src/lib/constants/index.ts"),
				p = a("./src/lib/loadRedditAdsPixel.ts"),
				h = a("./src/lib/pageTitle.ts"),
				f = a("./src/reddit/components/TrackingHelper/index.tsx"),
				b = a("./src/reddit/helpers/correlationIdTracker.ts"),
				g = a("./src/reddit/helpers/trackers/goldPayment.ts");
			const y = "coins_marketing",
				w = (e, t = {}) => ({
					...Object(g.h)(e, t),
					correlationId: Object(b.d)(b.a.GoldPayment, !1)
				}),
				v = () => e => ({
					...w(e),
					source: y,
					action: "click",
					noun: "get_coins"
				}),
				O = e => t => ({
					...w(t, {
						packageId: e
					}),
					source: y,
					action: "click",
					noun: "coins_package"
				}),
				k = () => e => ({
					...w(e),
					source: y,
					action: "click",
					noun: "get_premium"
				});
			var C = a("./src/reddit/helpers/trackers/screenview.ts"),
				_ = a("./src/telemetry/index.ts"),
				j = a("./src/telemetry/models/Timer.ts"),
				E = a("./src/reddit/pages/CoinsPage/index.m.less"),
				x = a.n(E),
				T = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				P = a("./src/reddit/models/Gold/Award.ts"),
				N = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				I = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				A = a("./src/reddit/actions/login.ts"),
				S = a("./src/reddit/contexts/PageLayer/index.tsx"),
				L = a("./src/reddit/models/Gold/Coins/index.ts"),
				M = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				R = a("./src/reddit/selectors/user.ts"),
				G = a("./src/reddit/components/CoinPurchasePackage/index.m.less"),
				D = a.n(G),
				F = a("./src/lib/classNames/index.ts"),
				B = a("./src/reddit/controls/Button/index.tsx"),
				q = a("./src/reddit/icons/svgs/Coin/index.tsx"),
				V = a("./src/reddit/icons/svgs/Stamp/index.tsx");
			var U = e => {
					const {
						className: t,
						coinPackage: a,
						isLargeView: n,
						onClick: o
					} = e, {
						baselineCoins: s,
						baselinePennies: i,
						bonusPct: l,
						coins: d,
						description: u,
						featuredLabel: m,
						images: p,
						pennies: h
					} = a, f = `$${h/100}`, b = d.toLocaleString(), g = n ? p.marketing["4x"].url : p.marketing["2x"].url, y = l > 0 && `${l.toLocaleString()}%`, w = r.fbt._("bonus", null, {
						hk: "L8mcp"
					}), v = n ? D.a.large : "", O = s !== d, k = i !== h;
					return c.a.createElement("div", {
						className: Object(F.a)(t, D.a.coinPurchasePackage, v)
					}, c.a.createElement("div", {
						className: Object(F.a)(v, D.a.imageContainer)
					}, c.a.createElement("img", {
						src: g
					}), m && c.a.createElement("div", {
						className: D.a.badge
					}, m), y && c.a.createElement("div", {
						className: Object(F.a)(D.a.stamp, v)
					}, c.a.createElement(V.a, {
						className: D.a.stampIcon
					}), c.a.createElement("div", {
						className: Object(F.a)(D.a.stampValue, v)
					}, y), c.a.createElement("div", {
						className: Object(F.a)(D.a.stampText, v)
					}, w))), c.a.createElement("div", {
						className: Object(F.a)(D.a.contentContainer, v)
					}, c.a.createElement("div", {
						className: Object(F.a)(D.a.price, v)
					}, c.a.createElement(q.a, {
						className: D.a.priceCoinIcon
					}), c.a.createElement("div", null, c.a.createElement("div", {
						className: D.a.priceValue
					}, b), O ? c.a.createElement("div", {
						className: Object(F.a)(D.a.priceCurrency, D.a.crossout)
					}, r.fbt._("{Non-sale number of coins} Coins", [r.fbt._param("Non-sale number of coins", s.toLocaleString())], {
						hk: "26szgy"
					})) : c.a.createElement("div", {
						className: D.a.priceCurrency
					}, r.fbt._("Coins", null, {
						hk: "PSM7c"
					})))), c.a.createElement("div", {
						className: Object(F.a)(D.a.description, v)
					}, u), c.a.createElement("div", {
						className: D.a.ctaContainer
					}, c.a.createElement(B.i, {
						className: Object(F.a)(D.a.cta, v),
						onClick: o
					}, f), k && c.a.createElement("div", {
						className: D.a.priceCrossout
					}, `$${i/100}`))))
				},
				z = a("./src/reddit/helpers/styles/mixins/loading.ts"),
				H = a("./src/reddit/components/CoinPurchasePackage/placeholder.m.less"),
				Y = a.n(H);
			var W = ({
					className: e,
					isLargeView: t,
					...a
				}) => {
					const n = t ? Y.a.large : "",
						r = Object(z.b)(a);
					return c.a.createElement("div", {
						className: Object(F.a)(r, Y.a.packagePlaceholder, n, e)
					})
				},
				Q = a("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				X = a("./src/reddit/components/GildMarketingDescription/index.tsx"),
				K = a("./src/reddit/components/MarketingPageFooter/index.tsx"),
				$ = a("./src/reddit/components/PremiumMarketingBanner/index.m.less"),
				J = a.n($);
			const {
				fbt: Z
			} = a("./node_modules/fbt/lib/FbtPublic.js"), ee = e => {
				const {
					className: t,
					isPremiumSubscriber: a,
					onGetPremium: r,
					onManagePremium: o,
					premiumPackage: s
				} = e, {
					periodicalCoins: i
				} = s, l = i.toLocaleString(), d = `${n.a.assetPath}/img/gold/coins-premium-g.png`;
				return c.a.createElement("div", {
					className: Object(F.a)(J.a.premiumBanner, t)
				}, c.a.createElement("img", {
					className: J.a.premiumCrest,
					src: d
				}), c.a.createElement("h2", {
					className: J.a.premiumDescription
				}, Z._("Get {Number of monthly coins} coins every month with Reddit Premium and browse ads-free", [Z._param("Number of monthly coins", l)], {
					hk: "42dB3q"
				})), a ? c.a.createElement(B.i, {
					className: J.a.premiumCTA,
					onClick: o
				}, Z._("Manage", null, {
					hk: "4BQsAp"
				})) : c.a.createElement(B.i, {
					className: J.a.premiumCTA,
					onClick: r
				}, Z._("Upgrade", null, {
					hk: "1Zf2Sh"
				})))
			};
			var te = a("./src/reddit/components/TitleTagManager/index.tsx"),
				ae = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				ne = a("./src/reddit/icons/svgs/RedditCoinsLogo/index.tsx"),
				re = a("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				oe = a("./src/reddit/pages/CoinsPage/HeroSection/index.m.less"),
				se = a.n(oe);
			const {
				fbt: ie
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var ce = c.a.memo(e => {
				Object(i.useEffect)(() => {
					(new Image).src = `${n.a.assetPath}/img/gold/coins-hero.jpg`
				}, []);
				const {
					activeSaleConfig: t,
					isLoading: a,
					onClickGetCoins: r
				} = e;
				if (a) return c.a.createElement("div", {
					className: se.a.hero
				});
				if (t) {
					const {
						endsAt: e,
						heroImageUrl: a,
						heroSubtext: n,
						heroText: r
					} = t;
					return c.a.createElement("div", {
						className: se.a.hero,
						style: {
							backgroundImage: `url("${a}")`
						}
					}, c.a.createElement("div", {
						className: se.a.heroInner
					}, c.a.createElement("h1", {
						className: Object(F.a)(se.a.heroTitle, se.a.activeSale)
					}, r), c.a.createElement("p", {
						className: Object(F.a)(se.a.heroDescription, se.a.activeSale)
					}, n), c.a.createElement(re.a, {
						className: se.a.expiresText,
						expirationDate: new Date(1e3 * e)
					})))
				}
				return c.a.createElement("div", {
					className: se.a.hero,
					style: {
						backgroundImage: `url("${n.a.assetPath}/img/gold/coins-hero.jpg")`
					}
				}, c.a.createElement("div", {
					className: se.a.heroInner
				}, c.a.createElement("h1", {
					className: se.a.heroTitle
				}, c.a.createElement(ne.a, {
					className: se.a.heroLogo
				})), c.a.createElement("p", {
					className: se.a.heroDescription
				}, ie._("Coins are a virtual good you can use to award exemplary posts or comments. Support Reddit and encourage your favorite contributors to keep making Reddit better.", null, {
					hk: "3rPVMo"
				})), c.a.createElement(B.f, {
					className: se.a.heroCTA,
					onClick: r
				}, ie._("Get Coins", null, {
					hk: "2YmtPc"
				}))))
			});
			const le = 3e3,
				de = Object(S.t)(),
				ue = Object(u.c)({
					activeSaleConfig: M.a,
					coinPackages: M.d,
					dealCoinPackages: M.f,
					isPremiumSubscriber: R.t,
					isLoggedIn: R.K,
					premiumPackages: M.i,
					purchaseCatalogPending: M.k
				}),
				me = Object(l.b)(ue, (e, t) => ({
					onRouteToManagePremium: () => e(Object(d.b)("/settings/gold")),
					onRouteToPremium: () => e(Object(d.b)("/premium")),
					onOpenLoginModal: () => e(Object(A.h)()),
					onOpenTargetedOfferModal: (t, a) => e(Object(N.e)({
						correlationId: a,
						packageId: t.mobileId
					})),
					onPurchasePackage: (t, a) => e(Object(N.c)({
						correlationId: a,
						packageId: t.mobileId
					})),
					requestPurchaseCatalog: t => e(Object(I.b)(t))
				}));
			class pe extends c.a.Component {
				constructor() {
					super(...arguments), this.correlationId = Object(b.d)(b.a.GoldPayment, !1), this.purchaseSection = c.a.createRef(), this.perksSection = c.a.createRef(), this.onClickGetCoins = () => {
						this.props.sendEvent(v()), this.purchaseSection.current && window.scrollTo({
							behavior: "smooth",
							top: this.purchaseSection.current.offsetTop - 50
						})
					}, this.onClickPurchase = e => {
						const {
							isLoggedIn: t,
							onPurchasePackage: a,
							onOpenLoginModal: n,
							sendEvent: r
						} = this.props;
						t && r(O(e.mobileId)), t ? a(e, this.correlationId) : n(), this.targetedOfferTimerId && clearTimeout(this.targetedOfferTimerId)
					}, this.onClickGetPremium = () => {
						const {
							onRouteToPremium: e,
							sendEvent: t
						} = this.props;
						t(k()), e()
					}
				}
				componentDidMount() {
					const {
						coinPackages: e,
						purchaseCatalogPending: t,
						requestPurchaseCatalog: a
					} = this.props;
					e.length || t || a(this.correlationId), document.documentElement.scrollTop = document.body.scrollTop = 0;
					const n = m.Db.COINS;
					_.c.has(n) && (this.props.sendEvent(Object(C.b)(j.TimerType.InApp, _.c.end(n))), this.props.sendEvent(Object(C.a)())), Object(p.a)(), this.setTargetedOfferTimeout()
				}
				componentDidUpdate() {
					!this.targetedOfferTimerId && this.props.dealCoinPackages.length && this.setTargetedOfferTimeout()
				}
				setTargetedOfferTimeout() {
					if (this.targetedOfferTimerId) return;
					const {
						dealCoinPackages: e,
						onOpenTargetedOfferModal: t
					} = this.props, a = e.filter(e => L.c.has(e.dealInfo.type))[0];
					a && (this.targetedOfferTimerId = setTimeout(() => {
						t(a, this.correlationId)
					}, a.dealInfo.displayDelay || le))
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						coinPackages: a,
						purchaseCatalogPending: n
					} = this.props;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(te.a, {
						title: Object(h.a)().toString()
					}), c.a.createElement("div", {
						className: t
					}, c.a.createElement(ce, {
						activeSaleConfig: e,
						isLoading: n || !a.length,
						onClickGetCoins: this.onClickGetCoins
					}), this.renderGildBreakdown(), this.renderPurchase(), this.renderFAQSection(), c.a.createElement(K.a, null)))
				}
				renderGildBreakdown() {
					return c.a.createElement("div", {
						className: x.a.detailGridSection,
						ref: this.perksSection
					}, c.a.createElement("h2", {
						className: x.a.detailTitle
					}, r.fbt._("Here’s what you can buy with coins", null, {
						hk: "4kIMr0"
					})), c.a.createElement("p", {
						className: x.a.detailDesription
					}, r.fbt._("Spend your coins on these Awards reserved exclusively for the finest Reddit contributors. Awarding a post or comment highlights it for all to see, and some Awards also grant the honoree special bonuses.", null, {
						hk: "3eScNB"
					})), c.a.createElement("div", {
						className: x.a.gridContainer
					}, c.a.createElement(X.a, {
						className: x.a.gridItem,
						icon: c.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-silver-large.png`
						}),
						title: r.fbt._("Silver Award", null, {
							hk: "2h79np"
						})
					}, Object(T.a)(r.fbt._("Shows a Silver Award on the post or comment and ... that’s it. You’ll need {Coin price placeholder} Coins.", [r.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "zbXx9"
					}), {
						":coin_price:": c.a.createElement("span", {
							className: x.a.nowrap
						}, c.a.createElement(ae.a, null), P.q.coinPrice)
					})), c.a.createElement(X.a, {
						className: x.a.gridItem,
						icon: c.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-gold-large.png`
						}),
						title: r.fbt._("Gold Award", null, {
							hk: "1oYdz0"
						})
					}, Object(T.a)(r.fbt._("Gives {Coin benefit placeholder} Reddit Coins and a week of r/lounge access and ad-free browsing. You’ll need {Coin price placeholder} coins.", [r.fbt._param("Coin benefit placeholder", ":coin_benefit:"), r.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "rxGC9"
					}), {
						":coin_benefit:": c.a.createElement("span", {
							className: x.a.nowrap
						}, c.a.createElement(ae.a, null), "100"),
						":coin_price:": c.a.createElement("span", {
							className: x.a.nowrap
						}, c.a.createElement(ae.a, null), P.n.coinPrice)
					})), c.a.createElement(X.a, {
						className: x.a.gridItem,
						icon: c.a.createElement("img", {
							src: `${n.a.assetPath}/img/gold/badges/award-platinum-large.png`
						}),
						title: r.fbt._("Platinum Award", null, {
							hk: "3nCEqM"
						})
					}, Object(T.a)(r.fbt._("Gives a month of r/lounge access and ad-free browsing, and {Coin benefit placeholder} Reddit Coins for that month. You’ll need {Coin price placeholder} coins.", [r.fbt._param("Coin benefit placeholder", ":coin_benefit:"), r.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "375Nna"
					}), {
						":coin_benefit:": c.a.createElement("span", {
							className: x.a.nowrap
						}, c.a.createElement(ae.a, null), "700"),
						":coin_price:": c.a.createElement("span", {
							className: x.a.nowrap
						}, c.a.createElement(ae.a, null), P.p.coinPrice)
					}))))
				}
				renderPurchase() {
					const {
						coinPackages: e,
						isPremiumSubscriber: t,
						onRouteToManagePremium: a,
						premiumPackages: r,
						purchaseCatalogPending: o
					} = this.props, i = r.length ? r[0] : void 0;
					return c.a.createElement("div", {
						className: x.a.purchasePackagesSection,
						ref: this.purchaseSection,
						style: {
							backgroundImage: `url("${n.a.assetPath}/img/gold/coins-premium-bg.jpg")`
						}
					}, c.a.createElement("h2", {
						className: x.a.purchaseTitle
					}, c.a.createElement(ne.a, {
						className: x.a.purchaseLogo
					})), c.a.createElement("div", {
						className: x.a.purchasePackages
					}, o || !e.length ? s()(5, e => c.a.createElement(W, {
						className: x.a.purchasePackage,
						isLargeView: 0 === e,
						isLoading: !0,
						key: e
					})) : e.map(e => c.a.createElement(U, {
						className: x.a.purchasePackage,
						coinPackage: e,
						isLargeView: e.featured,
						key: e.mobileId,
						onClick: () => this.onClickPurchase(e)
					})), i && c.a.createElement(ee, {
						isPremiumSubscriber: t,
						onGetPremium: this.onClickGetPremium,
						onManagePremium: a,
						premiumPackage: i
					})))
				}
				renderFAQSection() {
					return c.a.createElement("div", {
						className: x.a.faqsSection
					}, c.a.createElement("h2", {
						className: x.a.faqsTitle
					}, r.fbt._("Coins FAQ", null, {
						hk: "21x0aE"
					})), c.a.createElement("div", {
						className: x.a.faqs
					}, L.b.map((e, t) => c.a.createElement(Q.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: t
					}, e.answer()))))
				}
				componentWillUnmount() {
					Object(b.b)(b.a.GoldPayment), this.targetedOfferTimerId && clearTimeout(this.targetedOfferTimerId)
				}
			}
			t.default = de(me(Object(f.c)(pe)))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Coins.d8b6d4e456a26931e54a.js.map