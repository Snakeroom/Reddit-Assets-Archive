// https://www.redditstatic.com/desktop2x/CoinsMobile.51a9a0596c2b5064d42e.js
// Retrieved at 3/11/2021, 9:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinsMobile"], {
		"./node_modules/react-helmet/es/Helmet.js": function(e, t, n) {
			"use strict";
			(function(e) {
				var r, a, o, i, s = n("./node_modules/react-helmet/node_modules/prop-types/index.js"),
					c = n.n(s),
					l = n("./node_modules/react-side-effect/lib/index.js"),
					d = n.n(l),
					u = n("./node_modules/react-fast-compare/index.js"),
					p = n.n(u),
					m = n("./node_modules/react/index.js"),
					f = n.n(m),
					h = n("./node_modules/object-assign/index.js"),
					b = n.n(h),
					y = "bodyAttributes",
					g = "htmlAttributes",
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
					T = (Object.keys(v).map((function(e) {
						return v[e]
					})), "charset"),
					C = "cssText",
					E = "href",
					_ = "http-equiv",
					A = "innerHTML",
					x = "itemprop",
					O = "name",
					S = "property",
					j = "rel",
					k = "src",
					P = "target",
					N = {
						accesskey: "accessKey",
						charset: "charSet",
						class: "className",
						contenteditable: "contentEditable",
						contextmenu: "contextMenu",
						"http-equiv": "httpEquiv",
						itemprop: "itemProp",
						tabindex: "tabIndex"
					},
					I = "defaultTitle",
					L = "defer",
					M = "encodeSpecialCharacters",
					R = "onChangeClientState",
					D = "titleTemplate",
					G = Object.keys(N).reduce((function(e, t) {
						return e[N[t]] = t, e
					}), {}),
					q = [v.NOSCRIPT, v.SCRIPT, v.STYLE],
					F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					H = function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					},
					Y = function() {
						function e(e, t) {
							for (var n = 0; n < t.length; n++) {
								var r = t[n];
								r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
							}
						}
						return function(t, n, r) {
							return n && e(t.prototype, n), r && e(t, r), t
						}
					}(),
					W = Object.assign || function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
						}
						return e
					},
					B = function(e, t) {
						var n = {};
						for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
						return n
					},
					U = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					},
					Q = function(e) {
						var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
					},
					K = function(e) {
						var t = X(e, v.TITLE),
							n = X(e, D);
						if (n && t) return n.replace(/%s/g, (function() {
							return Array.isArray(t) ? t.join("") : t
						}));
						var r = X(e, I);
						return t || r || void 0
					},
					z = function(e) {
						return X(e, R) || function() {}
					},
					J = function(e, t) {
						return t.filter((function(t) {
							return void 0 !== t[e]
						})).map((function(t) {
							return t[e]
						})).reduce((function(e, t) {
							return W({}, e, t)
						}), {})
					},
					V = function(e, t) {
						return t.filter((function(e) {
							return void 0 !== e[v.BASE]
						})).map((function(e) {
							return e[v.BASE]
						})).reverse().reduce((function(t, n) {
							if (!t.length)
								for (var r = Object.keys(n), a = 0; a < r.length; a++) {
									var o = r[a].toLowerCase();
									if (-1 !== e.indexOf(o) && n[o]) return t.concat(n)
								}
							return t
						}), [])
					},
					$ = function(e, t, n) {
						var r = {};
						return n.filter((function(t) {
							return !!Array.isArray(t[e]) || (void 0 !== t[e] && re("Helmet: " + e + ' should be of type "Array". Instead found type "' + F(t[e]) + '"'), !1)
						})).map((function(t) {
							return t[e]
						})).reverse().reduce((function(e, n) {
							var a = {};
							n.filter((function(e) {
								for (var n = void 0, o = Object.keys(e), i = 0; i < o.length; i++) {
									var s = o[i],
										c = s.toLowerCase(); - 1 === t.indexOf(c) || n === j && "canonical" === e[n].toLowerCase() || c === j && "stylesheet" === e[c].toLowerCase() || (n = c), -1 === t.indexOf(s) || s !== A && s !== C && s !== x || (n = s)
								}
								if (!n || !e[n]) return !1;
								var l = e[n].toLowerCase();
								return r[n] || (r[n] = {}), a[n] || (a[n] = {}), !r[n][l] && (a[n][l] = !0, !0)
							})).reverse().forEach((function(t) {
								return e.push(t)
							}));
							for (var o = Object.keys(a), i = 0; i < o.length; i++) {
								var s = o[i],
									c = b()({}, r[s], a[s]);
								r[s] = c
							}
							return e
						}), []).reverse()
					},
					X = function(e, t) {
						for (var n = e.length - 1; n >= 0; n--) {
							var r = e[n];
							if (r.hasOwnProperty(t)) return r[t]
						}
						return null
					},
					Z = (r = Date.now(), function(e) {
						var t = Date.now();
						t - r > 16 ? (r = t, e(t)) : setTimeout((function() {
							Z(e)
						}), 0)
					}),
					ee = function(e) {
						return clearTimeout(e)
					},
					te = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || Z : e.requestAnimationFrame || Z,
					ne = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || ee : e.cancelAnimationFrame || ee,
					re = function(e) {
						return console && "function" == typeof console.warn && console.warn(e)
					},
					ae = null,
					oe = function(e, t) {
						var n = e.baseTag,
							r = e.bodyAttributes,
							a = e.htmlAttributes,
							o = e.linkTags,
							i = e.metaTags,
							s = e.noscriptTags,
							c = e.onChangeClientState,
							l = e.scriptTags,
							d = e.styleTags,
							u = e.title,
							p = e.titleAttributes;
						ce(v.BODY, r), ce(v.HTML, a), se(u, p);
						var m = {
								baseTag: le(v.BASE, n),
								linkTags: le(v.LINK, o),
								metaTags: le(v.META, i),
								noscriptTags: le(v.NOSCRIPT, s),
								scriptTags: le(v.SCRIPT, l),
								styleTags: le(v.STYLE, d)
							},
							f = {},
							h = {};
						Object.keys(m).forEach((function(e) {
							var t = m[e],
								n = t.newTags,
								r = t.oldTags;
							n.length && (f[e] = n), r.length && (h[e] = m[e].oldTags)
						})), t && t(), c(e, f, h)
					},
					ie = function(e) {
						return Array.isArray(e) ? e.join("") : e
					},
					se = function(e, t) {
						void 0 !== e && document.title !== e && (document.title = ie(e)), ce(v.TITLE, t)
					},
					ce = function(e, t) {
						var n = document.getElementsByTagName(e)[0];
						if (n) {
							for (var r = n.getAttribute("data-react-helmet"), a = r ? r.split(",") : [], o = [].concat(a), i = Object.keys(t), s = 0; s < i.length; s++) {
								var c = i[s],
									l = t[c] || "";
								n.getAttribute(c) !== l && n.setAttribute(c, l), -1 === a.indexOf(c) && a.push(c);
								var d = o.indexOf(c); - 1 !== d && o.splice(d, 1)
							}
							for (var u = o.length - 1; u >= 0; u--) n.removeAttribute(o[u]);
							a.length === o.length ? n.removeAttribute("data-react-helmet") : n.getAttribute("data-react-helmet") !== i.join(",") && n.setAttribute("data-react-helmet", i.join(","))
						}
					},
					le = function(e, t) {
						var n = document.head || document.querySelector(v.HEAD),
							r = n.querySelectorAll(e + "[data-react-helmet]"),
							a = Array.prototype.slice.call(r),
							o = [],
							i = void 0;
						return t && t.length && t.forEach((function(t) {
							var n = document.createElement(e);
							for (var r in t)
								if (t.hasOwnProperty(r))
									if (r === A) n.innerHTML = t.innerHTML;
									else if (r === C) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
							else {
								var s = void 0 === t[r] ? "" : t[r];
								n.setAttribute(r, s)
							}
							n.setAttribute("data-react-helmet", "true"), a.some((function(e, t) {
								return i = t, n.isEqualNode(e)
							})) ? a.splice(i, 1) : o.push(n)
						})), a.forEach((function(e) {
							return e.parentNode.removeChild(e)
						})), o.forEach((function(e) {
							return n.appendChild(e)
						})), {
							oldTags: a,
							newTags: o
						}
					},
					de = function(e) {
						return Object.keys(e).reduce((function(t, n) {
							var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
							return t ? t + " " + r : r
						}), "")
					},
					ue = function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return Object.keys(e).reduce((function(t, n) {
							return t[N[n] || n] = e[n], t
						}), t)
					},
					pe = function(e, t, n) {
						switch (e) {
							case v.TITLE:
								return {
									toComponent: function() {
										return e = t.title, n = t.titleAttributes, (r = {
											key: e
										})["data-react-helmet"] = !0, a = ue(n, r), [f.a.createElement(v.TITLE, a, e)];
										var e, n, r, a
									}, toString: function() {
										return function(e, t, n, r) {
											var a = de(n),
												o = ie(t);
											return a ? "<" + e + ' data-react-helmet="true" ' + a + ">" + Q(o, r) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + Q(o, r) + "</" + e + ">"
										}(e, t.title, t.titleAttributes, n)
									}
								};
							case y:
							case g:
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
											return t.map((function(t, n) {
												var r, a = ((r = {
													key: n
												})["data-react-helmet"] = !0, r);
												return Object.keys(t).forEach((function(e) {
													var n = N[e] || e;
													if (n === A || n === C) {
														var r = t.innerHTML || t.cssText;
														a.dangerouslySetInnerHTML = {
															__html: r
														}
													} else a[n] = t[e]
												})), f.a.createElement(e, a)
											}))
										}(e, t)
									}, toString: function() {
										return function(e, t, n) {
											return t.reduce((function(t, r) {
												var a = Object.keys(r).filter((function(e) {
														return !(e === A || e === C)
													})).reduce((function(e, t) {
														var a = void 0 === r[t] ? t : t + '="' + Q(r[t], n) + '"';
														return e ? e + " " + a : a
													}), ""),
													o = r.innerHTML || r.cssText || "",
													i = -1 === q.indexOf(e);
												return t + "<" + e + ' data-react-helmet="true" ' + a + (i ? "/>" : ">" + o + "</" + e + ">")
											}), "")
										}(e, t, n)
									}
								}
						}
					},
					me = function(e) {
						var t = e.baseTag,
							n = e.bodyAttributes,
							r = e.encode,
							a = e.htmlAttributes,
							o = e.linkTags,
							i = e.metaTags,
							s = e.noscriptTags,
							c = e.scriptTags,
							l = e.styleTags,
							d = e.title,
							u = void 0 === d ? "" : d,
							p = e.titleAttributes;
						return {
							base: pe(v.BASE, t, r),
							bodyAttributes: pe(y, n, r),
							htmlAttributes: pe(g, a, r),
							link: pe(v.LINK, o, r),
							meta: pe(v.META, i, r),
							noscript: pe(v.NOSCRIPT, s, r),
							script: pe(v.SCRIPT, c, r),
							style: pe(v.STYLE, l, r),
							title: pe(v.TITLE, {
								title: u,
								titleAttributes: p
							}, r)
						}
					},
					fe = d()((function(e) {
						return {
							baseTag: V([E, P], e),
							bodyAttributes: J(y, e),
							defer: X(e, L),
							encode: X(e, M),
							htmlAttributes: J(g, e),
							linkTags: $(v.LINK, [j, E], e),
							metaTags: $(v.META, [O, T, _, S, x], e),
							noscriptTags: $(v.NOSCRIPT, [A], e),
							onChangeClientState: z(e),
							scriptTags: $(v.SCRIPT, [k, A], e),
							styleTags: $(v.STYLE, [C], e),
							title: K(e),
							titleAttributes: J(w, e)
						}
					}), (function(e) {
						ae && ne(ae), e.defer ? ae = te((function() {
							oe(e, (function() {
								ae = null
							}))
						})) : (oe(e), ae = null)
					}), me)((function() {
						return null
					})),
					he = (a = fe, i = o = function(e) {
						function t() {
							return H(this, t), U(this, e.apply(this, arguments))
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
							return !p()(this.props, e)
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
							var t, n = e.child,
								r = e.arrayTypeChildren,
								a = e.newChildProps,
								o = e.nestedChildren;
							return W({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [W({}, a, this.mapNestedChildrenToProps(n, o))]), t))
						}, t.prototype.mapObjectTypeChildren = function(e) {
							var t, n, r = e.child,
								a = e.newProps,
								o = e.newChildProps,
								i = e.nestedChildren;
							switch (r.type) {
								case v.TITLE:
									return W({}, a, ((t = {})[r.type] = i, t.titleAttributes = W({}, o), t));
								case v.BODY:
									return W({}, a, {
										bodyAttributes: W({}, o)
									});
								case v.HTML:
									return W({}, a, {
										htmlAttributes: W({}, o)
									})
							}
							return W({}, a, ((n = {})[r.type] = W({}, o), n))
						}, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
							var n = W({}, t);
							return Object.keys(e).forEach((function(t) {
								var r;
								n = W({}, n, ((r = {})[t] = e[t], r))
							})), n
						}, t.prototype.warnOnInvalidChildren = function(e, t) {
							return !0
						}, t.prototype.mapChildrenToProps = function(e, t) {
							var n = this,
								r = {};
							return f.a.Children.forEach(e, (function(e) {
								if (e && e.props) {
									var a = e.props,
										o = a.children,
										i = function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											return Object.keys(e).reduce((function(t, n) {
												return t[G[n] || n] = e[n], t
											}), t)
										}(B(a, ["children"]));
									switch (n.warnOnInvalidChildren(e, o), e.type) {
										case v.LINK:
										case v.META:
										case v.NOSCRIPT:
										case v.SCRIPT:
										case v.STYLE:
											r = n.flattenArrayTypeChildren({
												child: e,
												arrayTypeChildren: r,
												newChildProps: i,
												nestedChildren: o
											});
											break;
										default:
											t = n.mapObjectTypeChildren({
												child: e,
												newProps: t,
												newChildProps: i,
												nestedChildren: o
											})
									}
								}
							})), t = this.mapArrayTypeChildrenToProps(r, t)
						}, t.prototype.render = function() {
							var e = this.props,
								t = e.children,
								n = B(e, ["children"]),
								r = W({}, n);
							return t && (r = this.mapChildrenToProps(t, r)), f.a.createElement(a, r)
						}, Y(t, null, [{
							key: "canUseDOM",
							set: function(e) {
								a.canUseDOM = e
							}
						}]), t
					}(f.a.Component), o.propTypes = {
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
					}, o.peek = a.peek, o.rewind = function() {
						var e = a.rewind();
						return e || (e = me({
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
					}, i);
				he.renderStatic = he.rewind, t.a = he
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function a() {}

			function o() {}
			o.resetWarningCache = a, e.exports = function() {
				function e(e, t, n, a, o, i) {
					if (i !== r) {
						var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw s.name = "Invariant Violation", s
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
					checkPropTypes: o,
					resetWarningCache: a
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/react-helmet/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/react-side-effect/lib/index.js": function(e, t, n) {
			"use strict";
			var r, a = n("./node_modules/react/index.js"),
				o = (r = a) && "object" == typeof r && "default" in r ? r.default : r;

			function i(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var s = !("undefined" == typeof window || !window.document || !window.document.createElement);
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
				if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
				if (void 0 !== n && "function" != typeof n) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
				return function(r) {
					if ("function" != typeof r) throw new Error("Expected WrappedComponent to be a React component.");
					var c, l = [];

					function d() {
						c = e(l.map((function(e) {
							return e.props
						}))), u.canUseDOM ? t(c) : n && (c = n(c))
					}
					var u = function(e) {
						var t, n;

						function a() {
							return e.apply(this, arguments) || this
						}
						n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, a.peek = function() {
							return c
						}, a.rewind = function() {
							if (a.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
							var e = c;
							return c = void 0, l = [], e
						};
						var i = a.prototype;
						return i.UNSAFE_componentWillMount = function() {
							l.push(this), d()
						}, i.componentDidUpdate = function() {
							d()
						}, i.componentWillUnmount = function() {
							var e = l.indexOf(this);
							l.splice(e, 1), d()
						}, i.render = function() {
							return o.createElement(r, this.props)
						}, a
					}(a.PureComponent);
					return i(u, "displayName", "SideEffect(" + function(e) {
						return e.displayName || e.name || "Component"
					}(r) + ")"), i(u, "canUseDOM", s), u
				}
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CollapsibleFAQ/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				i = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = n("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class d extends a.a.Component {
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
						children: n
					} = this.props, {
						isOpen: r
					} = this.state, o = r ? i.a.isOpen : "";
					return a.a.createElement("div", {
						className: Object(s.a)(e, i.a.collapsibleFAQ)
					}, a.a.createElement("button", {
						className: i.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, a.a.createElement("span", {
						className: i.a.buttonContent,
						tabIndex: -1
					}, t, r ? a.a.createElement(l.a, {
						className: i.a.collapseIcon
					}) : a.a.createElement(c.a, {
						className: i.a.collapseIcon
					}))), a.a.createElement("div", {
						className: Object(s.a)(i.a.collapsibleAnswer, o)
					}, n))
				}
			}
			t.a = d
		},
		"./src/reddit/components/GildMarketingDescription/index.m.less": function(e, t, n) {
			e.exports = {
				iconContainer: "_3aLGwXXgtLTRBL_s4zGzpA",
				textContainer: "L1uF-uIVgiGprHTgSe6Pa",
				title: "_1RHFAL2gq_LNUOW3yaREdJ",
				content: "_3iKxdZxO2uDcDfP0M_uXXu",
				isMobileStyled: "hhQ0bLehrQAD95bHHfIHL"
			}
		},
		"./src/reddit/components/GildMarketingDescription/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/GildMarketingDescription/index.m.less"),
				s = n.n(i);
			t.a = e => {
				const {
					children: t,
					className: n,
					icon: r,
					isMobileStyled: i,
					title: c
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(n, {
						[s.a.isMobileStyled]: i
					})
				}, a.a.createElement("div", {
					className: s.a.iconContainer
				}, r), a.a.createElement("div", {
					className: s.a.textContainer
				}, a.a.createElement("h3", {
					className: s.a.title
				}, c), a.a.createElement("p", {
					className: s.a.content
				}, t)))
			}
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-helmet/es/Helmet.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/pageTitle.ts"),
				l = n("./src/reddit/helpers/tabBadging/index.ts"),
				d = n("./src/reddit/selectors/appBadges.ts");
			const u = Object(s.a)(d.c, e => ({
				badgeCount: e
			}));
			class p extends r.Component {
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
					return Object(l.b)(this.props.badgeCount > 0), a.a.createElement(o.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(i.b)(u)(p)
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);

			function o(e, t) {
				const n = e.toString().split(":");
				return n.length % 2 == 0 ? e : n.reduce((e, n, r) => (r % 2 == 0 ? e.push(n) : "" === n ? e.push(":") : `:${n}:` in t ? e.push(t[`:${n}:`]) : e.push(`:${n}:`), e), []).map((e, t) => a.a.createElement(a.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const a = new Set(["low_coin_upsell"]),
				o = new Set(["new_purchaser", "repeat_purchaser"]),
				i = [{
					prompt: () => r.fbt._("What are coins?", null, {
						hk: "bD2cQ"
					}),
					answer: () => r.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your coins in the future.", null, {
						hk: "2RS7Fb"
					})
				}, {
					prompt: () => r.fbt._('What is "Give Award"?', null, {
						hk: "Q08fJ"
					}),
					answer: () => r.fbt._('Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.', null, {
						hk: "4fZWQ3"
					})
				}, {
					prompt: () => r.fbt._("What are these new Award types?", null, {
						hk: "2ysK1l"
					}),
					answer: () => r.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 coins and gives the recipient a week of Reddit Premium membership and 100 coins. Finally, the ultra rare Platinum Award costs 1800 coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 coins for that month.", null, {
						hk: "Mvg07"
					})
				}, {
					prompt: () => r.fbt._("I bought coins, how can I tell how many I have?", null, {
						hk: "4a4pGf"
					}),
					answer: () => r.fbt._("If you buy coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "2VWZ2s"
					})
				}, {
					prompt: () => r.fbt._("Can I transfer coins between Reddit accounts?", null, {
						hk: "1jLVez"
					}),
					answer: () => r.fbt._("You cannot transfer your Reddit coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 coins.", null, {
						hk: "435l4g"
					})
				}, {
					prompt: () => r.fbt._("Can I get coins for free?", null, {
						hk: "1fhxmd"
					}),
					answer: () => r.fbt._("We may give away coins on special occasions. Stay tuned!", null, {
						hk: "3qKa11"
					})
				}, {
					prompt: () => r.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => r.fbt._("Yes, Creddits are simply called \"coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3bz9Wy"
					})
				}, {
					prompt: () => r.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => r.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "coins".', null, {
						hk: "aFpGc"
					})
				}]
		},
		"./src/reddit/pages/CoinsMobilePage/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_1btvg1SigTazjp9DWDlVrm",
				detailDesription: "_5cl-df32CD1-4YueRAt7Z",
				gridContainer: "raM7DVcMgNAjUs8MFHwfs",
				gridItem: "_2OaG62ZgLC3KExDkupApYr",
				nowrap: "_3K0jQLXI5QhjzIs1OYfiS5",
				faqsSection: "_3l64ELqrj8ehwCgWf0g9EM",
				faqsTitle: "_3OkhxDtlRWYvCJH9KT7JaE",
				faqs: "_35BAdkFsONC5unGAp7SKv_"
			}
		},
		"./src/reddit/pages/CoinsMobilePage/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/pageTitle.ts"),
				l = n("./src/reddit/components/TitleTagManager/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/trackers/screenview.ts"),
				m = n("./src/telemetry/index.ts"),
				f = n("./src/telemetry/models/Timer.ts"),
				h = n("./src/reddit/pages/CoinsMobilePage/index.m.less"),
				b = n.n(h),
				y = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				g = n("./src/reddit/models/Gold/Award.ts"),
				w = n("./src/reddit/models/Gold/Coins/index.ts"),
				v = n("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				T = n("./src/reddit/components/GildMarketingDescription/index.tsx"),
				C = n("./src/reddit/icons/fonts/Coin/index.tsx");
			class E extends i.a.Component {
				componentDidMount() {
					Object(u.d)(u.a.GoldPayment, !1);
					const e = s.Db.COINS;
					m.c.has(e) && this.props.sendEvent(Object(p.b)(f.TimerType.InApp, m.c.end(e)))
				}
				render() {
					const {
						className: e
					} = this.props;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(l.a, {
						title: Object(c.a)().toString()
					}), i.a.createElement("div", {
						className: e
					}, i.a.createElement("div", {
						className: b.a.wrapper
					}, this.renderGildBreakdown(), this.renderFAQSection())))
				}
				renderGildBreakdown() {
					return i.a.createElement("div", {
						className: b.a.detailGridSection
					}, i.a.createElement("p", {
						className: b.a.detailDesription
					}, a.fbt._("Coins are used to award exemplary posts or comments and help support Reddit.", null, {
						hk: "2phDYF"
					})), i.a.createElement("div", {
						className: b.a.gridContainer
					}, i.a.createElement(T.a, {
						className: b.a.gridItem,
						icon: i.a.createElement("img", {
							src: `${r.a.assetPath}/img/gold/badges/award-silver-large.png`
						}),
						isMobileStyled: !0,
						title: a.fbt._("Silver Award", null, {
							hk: "2h79np"
						})
					}, Object(y.a)(a.fbt._("Shows a Silver Award on the post or comment and ... that’s it. You’ll need {Coin price placeholder} Coins.", [a.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "zIrMH"
					}), {
						":coin_price:": i.a.createElement("span", {
							className: b.a.nowrap
						}, i.a.createElement(C.a, null), g.q.coinPrice)
					})), i.a.createElement(T.a, {
						className: b.a.gridItem,
						icon: i.a.createElement("img", {
							src: `${r.a.assetPath}/img/gold/badges/award-gold-large.png`
						}),
						isMobileStyled: !0,
						title: a.fbt._("Gold Award", null, {
							hk: "1oYdz0"
						})
					}, Object(y.a)(a.fbt._("Gives {Coin benefit placeholder} Reddit Coins and a week of r/lounge access and ad-free browsing. You’ll need {Coin price placeholder} Coins.", [a.fbt._param("Coin benefit placeholder", ":coin_benefit:"), a.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "rZ9s8"
					}), {
						":coin_benefit:": i.a.createElement("span", {
							className: b.a.nowrap
						}, i.a.createElement(C.a, null), "100"),
						":coin_price:": i.a.createElement("span", {
							className: b.a.nowrap
						}, i.a.createElement(C.a, null), g.n.coinPrice)
					})), i.a.createElement(T.a, {
						className: b.a.gridItem,
						icon: i.a.createElement("img", {
							src: `${r.a.assetPath}/img/gold/badges/award-platinum-large.png`
						}),
						isMobileStyled: !0,
						title: a.fbt._("Platinum Award", null, {
							hk: "3nCEqM"
						})
					}, Object(y.a)(a.fbt._("Gives a month of r/lounge access and ad-free browsing, and {Coin benefit placeholder} Reddit Coins for that month. You’ll need {Coin price placeholder} Coins.", [a.fbt._param("Coin benefit placeholder", ":coin_benefit:"), a.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "1JTJWQ"
					}), {
						":coin_benefit:": i.a.createElement("span", {
							className: b.a.nowrap
						}, i.a.createElement(C.a, null), "700"),
						":coin_price:": i.a.createElement("span", {
							className: b.a.nowrap
						}, i.a.createElement(C.a, null), g.p.coinPrice)
					}))))
				}
				renderFAQSection() {
					return i.a.createElement("div", {
						className: b.a.faqsSection
					}, i.a.createElement("h2", {
						className: b.a.faqsTitle
					}, a.fbt._("Coins FAQ", null, {
						hk: "21x0aE"
					})), i.a.createElement("div", {
						className: b.a.faqs
					}, w.b.map((e, t) => i.a.createElement(v.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: t
					}, e.answer()))))
				}
				componentWillUnmount() {
					Object(u.b)(u.a.GoldPayment)
				}
			}
			t.default = Object(d.c)(E)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinsMobile.51a9a0596c2b5064d42e.js.map