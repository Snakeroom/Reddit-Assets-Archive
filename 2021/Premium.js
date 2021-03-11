// https://www.redditstatic.com/desktop2x/Premium.be05b095f58b7d3405a2.js
// Retrieved at 3/11/2021, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium", "GoldPurchasePaymentActions"], {
		"./node_modules/react-helmet/es/Helmet.js": function(e, t, n) {
			"use strict";
			(function(e) {
				var r, a, o, i, s = n("./node_modules/react-helmet/node_modules/prop-types/index.js"),
					c = n.n(s),
					l = n("./node_modules/react-side-effect/lib/index.js"),
					d = n.n(l),
					m = n("./node_modules/react-fast-compare/index.js"),
					u = n.n(m),
					p = n("./node_modules/react/index.js"),
					h = n.n(p),
					f = n("./node_modules/object-assign/index.js"),
					b = n.n(f),
					g = "bodyAttributes",
					y = "htmlAttributes",
					k = "titleAttributes",
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
					C = (Object.keys(v).map((function(e) {
						return v[e]
					})), "charset"),
					P = "cssText",
					_ = "href",
					w = "http-equiv",
					E = "innerHTML",
					x = "itemprop",
					O = "name",
					j = "property",
					T = "rel",
					N = "src",
					I = "target",
					M = {
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
					A = "defer",
					L = "encodeSpecialCharacters",
					B = "onChangeClientState",
					R = "titleTemplate",
					G = Object.keys(M).reduce((function(e, t) {
						return e[M[t]] = t, e
					}), {}),
					F = [v.NOSCRIPT, v.SCRIPT, v.STYLE],
					U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					H = function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					},
					D = function() {
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
					q = Object.assign || function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
						}
						return e
					},
					W = function(e, t) {
						var n = {};
						for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
						return n
					},
					z = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					},
					Y = function(e) {
						var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
					},
					K = function(e) {
						var t = $(e, v.TITLE),
							n = $(e, R);
						if (n && t) return n.replace(/%s/g, (function() {
							return Array.isArray(t) ? t.join("") : t
						}));
						var r = $(e, S);
						return t || r || void 0
					},
					J = function(e) {
						return $(e, B) || function() {}
					},
					V = function(e, t) {
						return t.filter((function(t) {
							return void 0 !== t[e]
						})).map((function(t) {
							return t[e]
						})).reduce((function(e, t) {
							return q({}, e, t)
						}), {})
					},
					Q = function(e, t) {
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
					X = function(e, t, n) {
						var r = {};
						return n.filter((function(t) {
							return !!Array.isArray(t[e]) || (void 0 !== t[e] && re("Helmet: " + e + ' should be of type "Array". Instead found type "' + U(t[e]) + '"'), !1)
						})).map((function(t) {
							return t[e]
						})).reverse().reduce((function(e, n) {
							var a = {};
							n.filter((function(e) {
								for (var n = void 0, o = Object.keys(e), i = 0; i < o.length; i++) {
									var s = o[i],
										c = s.toLowerCase(); - 1 === t.indexOf(c) || n === T && "canonical" === e[n].toLowerCase() || c === T && "stylesheet" === e[c].toLowerCase() || (n = c), -1 === t.indexOf(s) || s !== E && s !== P && s !== x || (n = s)
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
					$ = function(e, t) {
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
							m = e.title,
							u = e.titleAttributes;
						ce(v.BODY, r), ce(v.HTML, a), se(m, u);
						var p = {
								baseTag: le(v.BASE, n),
								linkTags: le(v.LINK, o),
								metaTags: le(v.META, i),
								noscriptTags: le(v.NOSCRIPT, s),
								scriptTags: le(v.SCRIPT, l),
								styleTags: le(v.STYLE, d)
							},
							h = {},
							f = {};
						Object.keys(p).forEach((function(e) {
							var t = p[e],
								n = t.newTags,
								r = t.oldTags;
							n.length && (h[e] = n), r.length && (f[e] = p[e].oldTags)
						})), t && t(), c(e, h, f)
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
							for (var m = o.length - 1; m >= 0; m--) n.removeAttribute(o[m]);
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
									if (r === E) n.innerHTML = t.innerHTML;
									else if (r === P) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
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
					me = function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return Object.keys(e).reduce((function(t, n) {
							return t[M[n] || n] = e[n], t
						}), t)
					},
					ue = function(e, t, n) {
						switch (e) {
							case v.TITLE:
								return {
									toComponent: function() {
										return e = t.title, n = t.titleAttributes, (r = {
											key: e
										})["data-react-helmet"] = !0, a = me(n, r), [h.a.createElement(v.TITLE, a, e)];
										var e, n, r, a
									}, toString: function() {
										return function(e, t, n, r) {
											var a = de(n),
												o = ie(t);
											return a ? "<" + e + ' data-react-helmet="true" ' + a + ">" + Y(o, r) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + Y(o, r) + "</" + e + ">"
										}(e, t.title, t.titleAttributes, n)
									}
								};
							case g:
							case y:
								return {
									toComponent: function() {
										return me(t)
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
													var n = M[e] || e;
													if (n === E || n === P) {
														var r = t.innerHTML || t.cssText;
														a.dangerouslySetInnerHTML = {
															__html: r
														}
													} else a[n] = t[e]
												})), h.a.createElement(e, a)
											}))
										}(e, t)
									}, toString: function() {
										return function(e, t, n) {
											return t.reduce((function(t, r) {
												var a = Object.keys(r).filter((function(e) {
														return !(e === E || e === P)
													})).reduce((function(e, t) {
														var a = void 0 === r[t] ? t : t + '="' + Y(r[t], n) + '"';
														return e ? e + " " + a : a
													}), ""),
													o = r.innerHTML || r.cssText || "",
													i = -1 === F.indexOf(e);
												return t + "<" + e + ' data-react-helmet="true" ' + a + (i ? "/>" : ">" + o + "</" + e + ">")
											}), "")
										}(e, t, n)
									}
								}
						}
					},
					pe = function(e) {
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
							m = void 0 === d ? "" : d,
							u = e.titleAttributes;
						return {
							base: ue(v.BASE, t, r),
							bodyAttributes: ue(g, n, r),
							htmlAttributes: ue(y, a, r),
							link: ue(v.LINK, o, r),
							meta: ue(v.META, i, r),
							noscript: ue(v.NOSCRIPT, s, r),
							script: ue(v.SCRIPT, c, r),
							style: ue(v.STYLE, l, r),
							title: ue(v.TITLE, {
								title: m,
								titleAttributes: u
							}, r)
						}
					},
					he = d()((function(e) {
						return {
							baseTag: Q([_, I], e),
							bodyAttributes: V(g, e),
							defer: $(e, A),
							encode: $(e, L),
							htmlAttributes: V(y, e),
							linkTags: X(v.LINK, [T, _], e),
							metaTags: X(v.META, [O, C, w, j, x], e),
							noscriptTags: X(v.NOSCRIPT, [E], e),
							onChangeClientState: J(e),
							scriptTags: X(v.SCRIPT, [N, E], e),
							styleTags: X(v.STYLE, [P], e),
							title: K(e),
							titleAttributes: V(k, e)
						}
					}), (function(e) {
						ae && ne(ae), e.defer ? ae = te((function() {
							oe(e, (function() {
								ae = null
							}))
						})) : (oe(e), ae = null)
					}), pe)((function() {
						return null
					})),
					fe = (a = he, i = o = function(e) {
						function t() {
							return H(this, t), z(this, e.apply(this, arguments))
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
							return !u()(this.props, e)
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
							return q({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [q({}, a, this.mapNestedChildrenToProps(n, o))]), t))
						}, t.prototype.mapObjectTypeChildren = function(e) {
							var t, n, r = e.child,
								a = e.newProps,
								o = e.newChildProps,
								i = e.nestedChildren;
							switch (r.type) {
								case v.TITLE:
									return q({}, a, ((t = {})[r.type] = i, t.titleAttributes = q({}, o), t));
								case v.BODY:
									return q({}, a, {
										bodyAttributes: q({}, o)
									});
								case v.HTML:
									return q({}, a, {
										htmlAttributes: q({}, o)
									})
							}
							return q({}, a, ((n = {})[r.type] = q({}, o), n))
						}, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
							var n = q({}, t);
							return Object.keys(e).forEach((function(t) {
								var r;
								n = q({}, n, ((r = {})[t] = e[t], r))
							})), n
						}, t.prototype.warnOnInvalidChildren = function(e, t) {
							return !0
						}, t.prototype.mapChildrenToProps = function(e, t) {
							var n = this,
								r = {};
							return h.a.Children.forEach(e, (function(e) {
								if (e && e.props) {
									var a = e.props,
										o = a.children,
										i = function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											return Object.keys(e).reduce((function(t, n) {
												return t[G[n] || n] = e[n], t
											}), t)
										}(W(a, ["children"]));
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
								n = W(e, ["children"]),
								r = q({}, n);
							return t && (r = this.mapChildrenToProps(t, r)), h.a.createElement(a, r)
						}, D(t, null, [{
							key: "canUseDOM",
							set: function(e) {
								a.canUseDOM = e
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
					}, o.peek = a.peek, o.rewind = function() {
						var e = a.rewind();
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
					}, i);
				fe.renderStatic = fe.rewind, t.a = fe
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
						}))), m.canUseDOM ? t(c) : n && (c = n(c))
					}
					var m = function(e) {
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
					return i(m, "displayName", "SideEffect(" + function(e) {
						return e.displayName || e.name || "Component"
					}(r) + ")"), i(m, "canUseDOM", s), m
				}
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";

			function r(e, t, n, r) {
				const a = new Date(1e3 * e);
				return new Intl.DateTimeFormat("default", {
					month: r ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(a)
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/sentry/index.ts");

			function a() {
				! function(e, t) {
					if (!e.rdt) {
						var n = e.rdt = function() {
							n.sendEvent ? n.sendEvent.apply(n, arguments) : n.callQueue.push(arguments)
						};
						n.callQueue = [];
						var r = t.createElement("script");
						r.src = "https://www.redditstatic.com/ads/pixel.js", r.async = !0;
						var a = t.getElementsByTagName("script")[0];
						a.parentNode.insertBefore(r, a)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const o = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					r.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return l
			})), n.d(t, "paymentCompleted", (function() {
				return d
			})), n.d(t, "cardNameInput", (function() {
				return m
			})), n.d(t, "cardNameEmpty", (function() {
				return u
			})), n.d(t, "cardElementChange", (function() {
				return p
			})), n.d(t, "stripeTokenPending", (function() {
				return h
			})), n.d(t, "stripeTokenError", (function() {
				return f
			})), n.d(t, "stripeApiError", (function() {
				return b
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return g
			})), n.d(t, "paypalApiError", (function() {
				return y
			})), n.d(t, "toggleRememberCard", (function() {
				return k
			})), n.d(t, "selectSavedCard", (function() {
				return v
			})), n.d(t, "_deleteSavedCard", (function() {
				return C
			})), n.d(t, "deleteSavedCard", (function() {
				return P
			})), n.d(t, "savedCardsPending", (function() {
				return _
			})), n.d(t, "savedCardsSuccess", (function() {
				return w
			})), n.d(t, "loadSavedCards", (function() {
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/sentry/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/endpoints/gold/purchase.ts"),
				s = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const l = Object(o.a)(s.A),
				d = Object(o.a)(s.w),
				m = Object(o.a)(s.b),
				u = Object(o.a)(s.a),
				p = Object(o.a)(s.D),
				h = Object(o.a)(s.F),
				f = Object(o.a)(s.E),
				b = Object(o.a)(s.C),
				g = e => async (t, n) => {
					const a = n(),
						o = Object(c.h)(a),
						{
							token: i,
							error: s
						} = await e.createToken({
							name: o
						});
					if (o.trim()) {
						if (!s && i) return i;
						t(f(s || void 0))
					} else {
						const e = r.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(u({
							message: e
						}))
					}
				}, y = Object(o.a)(s.x), k = Object(o.a)(s.G), v = Object(o.a)(s.B), C = Object(o.a)(s.g), P = e => async (t, n, {
					apiContext: r
				}) => {
					t(C(e));
					try {
						const t = await Object(i.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, _ = Object(o.a)(s.y), w = Object(o.a)(s.z), E = () => async (e, t, {
					apiContext: n
				}) => {
					e(_());
					try {
						const t = await Object(i.b)(n());
						if (t.error) throw new Error(t.error.type);
						const r = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(w(r)), r[0] && e(v(r[0].cardId))
					} catch (r) {
						a.c.captureException(r), e(w([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "openPremiumPurchaseModal", (function() {
				return f
			})), n.d(t, "closePremiumPurchaseModal", (function() {
				return b
			})), n.d(t, "stripePremiumPurchaseRequested", (function() {
				return g
			})), n.d(t, "paymentBlobCreated", (function() {
				return y
			})), n.d(t, "openWithBlob", (function() {
				return k
			}));
			var r = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/sentry/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/formatApiError/index.ts"),
				l = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = n("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				m = n("./src/reddit/endpoints/gold/purchase.ts"),
				u = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const f = Object(o.a)(h.t),
				b = Object(o.a)(h.e),
				g = e => async (t, n, {
					apiContext: r
				}) => {
					const o = Object(p.a)(n()),
						i = (null == o ? void 0 : o.pennies) || s.pb,
						d = Object(u.c)(u.a.GoldPayment);
					t(Object(l.stripeTokenPending)());
					const h = await t(Object(l.validateAndCreateStripeToken)(e));
					if (h) try {
						const e = await Object(m.g)({
							context: r(),
							correlationId: d,
							pennies: i,
							token: h
						});
						if (e.error) {
							const n = Object(c.a)(e.error);
							t(Object(l.stripeApiError)(n))
						} else t(Object(l.paymentCompleted)({
							confirmed: !1
						}))
					} catch (f) {
						const e = Object(c.a)(f);
						t(Object(l.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(l.stripeApiError)(e))
					}
				}, y = Object(o.a)(h.v), k = ({
					packageId: e,
					correlationId: t
				}) => async (n, a, {
					apiContext: o
				}) => {
					n(f({
						packageId: e,
						correlationId: t
					}));
					const s = Object(p.a)(a()),
						m = (null == s ? void 0 : s.paypalButtonId) || r.a.paypal.buttons.premium;
					if (m) try {
						const e = await Object(d.f)({
							buttonId: m,
							context: o(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(c.a)(e.error);
							n(Object(l.paypalApiError)(t))
						} else n(y(e))
					} catch (u) {
						const e = Object(c.a)(u);
						n(Object(l.paypalApiError)(e))
					} else i.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "a", (function() {
				return P
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/env/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/sentry/index.ts"),
				s = n("./src/reddit/endpoints/gold/productCatalog.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(o.a)(u.j),
				h = Object(o.a)(u.k),
				f = Object(o.a)(u.i),
				b = e => async (t, n, {
					apiContext: o
				}) => {
					t(p());
					const l = n(),
						d = Object(c.K)(l);
					try {
						const n = !d,
							r = await Object(s.b)({
								context: o(),
								correlationId: e,
								shouldUseCurrentOrigin: n
							});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const a = r.body;
						t(h(a))
					} catch (m) {
						Object(a.b)() || console.error(m), i.c.captureException(m);
						const e = r.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(f(e))
					}
				}, g = Object(o.a)(u.m), y = Object(o.a)(u.n), k = Object(o.a)(u.l), v = (e, t) => async (n, o, {
					apiContext: c
				}) => {
					n(g());
					try {
						const r = await Object(s.c)({
							awardId: e,
							context: c(),
							correlationId: t
						});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const a = r.body;
						if (!a.coinPackages || !a.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						n(y(a))
					} catch (l) {
						Object(a.b)() || console.error(l), i.c.captureException(l);
						const e = r.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						n(k(e))
					}
				}, C = Object(o.a)(u.h), P = () => async (e, t, {
					gqlContext: n
				}) => {
					var o, c;
					try {
						const t = await Object(s.a)(n());
						if (t.ok) {
							const n = t.body.data.claimAwardOffer;
							if (null === (o = n.errors) || void 0 === o ? void 0 : o.length) throw new Error(n.errors.map(e => e.message).join(" | "));
							if (!(null === (c = n.awards) || void 0 === c ? void 0 : c.length)) throw new Error("Got empty award list on free award offer claim");
							if (!n.ok) throw new Error("Got not ok response on free award offer claim");
							await e(C({
								awards: n.awards
							})), e(Object(m.w)())
						}
					} catch (u) {
						Object(a.b)() || console.error(u), e(Object(l.e)({
							kind: d.b.Error,
							text: r.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), i.c.captureException(u)
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
		"./src/reddit/components/Econ/Common/BenefitTile/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3WUWb7Sw86xRHJJhjUgdZ9",
				icon: "_4UcAT87VyI5VbP6S7bhhK",
				title: "_7IEgYd0otS-qkC7jLZMRc",
				description: "_1Lmps3yUL3wlUeYBq8e1NW",
				new: "_2xYObLxCbdZPVZMoClN8r0"
			}
		},
		"./src/reddit/components/Econ/Common/BenefitTile/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				s = n("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				c = n.n(s);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				description: t,
				iconUrl: n,
				onClick: r,
				title: s,
				isNew: l
			}) => a.a.createElement("div", {
				className: Object(o.a)(e, c.a.container),
				onClick: r
			}, l && a.a.createElement(i.a, {
				className: c.a.new
			}), a.a.createElement("div", {
				className: c.a.icon,
				style: {
					backgroundImage: `url('${n}')`
				}
			}), s && a.a.createElement("h3", {
				className: c.a.title
			}, s), t && a.a.createElement("p", {
				className: c.a.description
			}, t))
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.m.less": function(e, t, n) {
			e.exports = {
				new: "_2u3fkh0zbVoixCjyXrW0_e"
			}
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				s = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e
			}) => a.a.createElement("span", {
				className: Object(o.a)(s.a.new, e)
			}, c._("NEW", null, {
				hk: "2P5bsM"
			}))
		},
		"./src/reddit/components/MarketingPageFooter/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MarketingPageFooter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/MarketingPageFooter/index.m.less"),
				i = n.n(o),
				s = n("./src/lib/classNames/index.ts");
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement("div", {
				className: Object(s.a)(e.className, i.a.marketingPageFooter)
			}, a.a.createElement("div", {
				className: Object(s.a)(e.className, i.a.marketingPageFooterInner)
			}, a.a.createElement("div", {
				className: i.a.linkContainer
			}, a.a.createElement("div", {
				className: i.a.linkCol
			}, a.a.createElement("ul", {
				className: i.a.linkColInner
			}, a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "3IO4c7"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "2GATRU"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "iUiGg"
			}))))), a.a.createElement("div", {
				className: i.a.linkCol
			}, a.a.createElement("ul", {
				className: i.a.linkColInner
			}, a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "RYuIn"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "4xzWuA"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "36XyzA"
			}))))), a.a.createElement("div", {
				className: Object(s.a)(i.a.linkCol, i.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: i.a.linkColInner
			}, a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.reddit.com/mobile/download"
			}, c._("the reddit app", null, {
				hk: "OcJ1f"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.reddit.com/coins"
			}, c._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.reddit.com/premium"
			}, c._("reddit premium", null, {
				hk: "3vPbLO"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://redditgifts.com/"
			}, c._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), a.a.createElement("div", {
				className: Object(s.a)(i.a.linkCol, i.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: i.a.linkColInner
			}, a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.facebook.com/reddit/"
			}, c._("Facebook", null, {
				hk: "47DT2F"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://twitter.com/reddit"
			}, c._("Twitter", null, {
				hk: "3aUv7u"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.instagram.com/reddit/"
			}, c._("Instagram", null, {
				hk: "dVIRX"
			})))))), a.a.createElement("ul", {
				className: i.a.legal
			}, a.a.createElement("li", {
				className: i.a.legalItem
			}, a.a.createElement("a", {
				className: i.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("content policy", null, {
				hk: "4ptiaZ"
			}))), a.a.createElement("li", {
				className: i.a.legalItem
			}, a.a.createElement("a", {
				className: i.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("privacy policy", null, {
				hk: "1ybjnz"
			}))), a.a.createElement("li", {
				className: i.a.legalItem
			}, a.a.createElement("a", {
				className: i.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("user agreement", null, {
				hk: "4puRxC"
			}))), a.a.createElement("li", {
				className: i.a.legalItem
			}, a.a.createElement("a", {
				className: i.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("mod policy", null, {
				hk: "1VvAdM"
			}))), a.a.createElement("li", {
				className: i.a.legalItem
			}, c._("© {year} Reddit, Inc. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
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
			const m = Object(s.a)(d.c, e => ({
				badgeCount: e
			}));
			class u extends r.Component {
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
			t.a = Object(i.b)(m)(u)
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				s = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n
			}) => a.a.createElement("div", {
				className: Object(o.a)(s.a.loadingIcon, t, {
					[s.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			}));
			var r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				s = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/endpoints/gold/purchase.ts");
			const l = async ({
				buttonId: e,
				context: t,
				correlationId: n
			}) => {
				const l = {
						button_id: e,
						correlation_id: n
					},
					d = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					m = Object(s.a)(d);
				return Object(a.a)(Object(o.a)(t, [i.a]), {
					method: r.cb.POST,
					endpoint: m,
					data: l
				}).then(c.c)
			}, d = async ({
				context: e,
				coins: t,
				pennies: n,
				correlationId: s
			}) => {
				const l = {
					coins: t,
					pennies: n,
					correlation_id: s
				};
				return Object(a.a)(Object(o.a)(e, [i.a]), {
					method: r.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(c.c)
			}, m = async ({
				context: e,
				awardId: t,
				pennies: n,
				thingId: s,
				correlationId: l
			}) => {
				const d = {
					award_id: t,
					correlation_id: l,
					pennies: n,
					thing_id: s
				};
				return Object(a.a)(Object(o.a)(e, [i.a]), {
					method: r.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: d
				}).then(c.c)
			}, u = async ({
				context: e,
				offerContext: t,
				orderId: n,
				coins: s,
				pennies: l,
				correlationId: d
			}) => {
				const m = {
					offer_context: t,
					order_id: n,
					coins: s,
					pennies: l,
					correlation_id: d
				};
				return Object(a.a)(Object(o.a)(e, [i.a]), {
					method: r.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: m
				}).then(c.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: n,
				correlationId: s,
				isAnonymous: l,
				message: d,
				offerContext: m,
				orderId: u,
				pennies: p,
				thingId: h
			}) => {
				const f = {
					award_id: e,
					coins: n,
					correlation_id: s,
					is_anonymous: l,
					message: d,
					offer_context: m,
					order_id: u,
					pennies: p,
					thing_id: h
				};
				return Object(a.a)(Object(o.a)(t, [i.a]), {
					method: r.cb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(c.c)
			}, h = async ({
				awardId: e,
				context: t,
				correlationId: n,
				isAnonymous: s,
				message: l,
				orderId: d,
				thingId: m
			}) => {
				const u = {
					award_id: e,
					correlation_id: n,
					is_anonymous: s,
					message: l,
					order_id: d,
					thing_id: m
				};
				return Object(a.a)(Object(o.a)(t, [i.a]), {
					method: r.cb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: u
				}).then(c.c)
			}
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
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
		"./src/reddit/icons/svgs/PremiumLogo/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 558 98",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M355.8812 43.427c0 1.075-.265 2.029-.791 2.863-.527.833-1.34.25-2.437.25-1.181 0-1.083.694-1.705.082-.623-.611-.933-1.287-.933-2.025 0-.463-.964-.886-.89-1.266.074-.379.143-.759.206-1.138-.992 0-2.151.4-3.48 1.202-1.329.802-2.458 1.94-3.386 3.417v18.162c0 .738.143 1.34.428 1.803.284.464.732.812 1.344 1.045.527.21 1.207.369 2.04.474.833.106 1.556.18 2.168.221v2.089h-16.453v-2.089c.485-.041.986-.084 1.503-.126.517-.042.965-.126 1.345-.253.59-.19 1.028-.522 1.312-.995.286-.474.428-1.091.428-1.849V46.048c0-.653-.153-1.297-.459-1.928-.305-.632-.733-1.137-1.281-1.517-.401-.252-.876-.438-1.424-.553-.549-.115-1.139-.195-1.772-.237v-2.089l10.379-.695.442.443v4.397h.158c1.308-1.708 2.764-3.005 4.366-3.891 1.604-.887 3.07-1.329 4.399-1.329 1.329 0 2.409.432 3.243 1.298.833.865 1.25 2.024 1.25 3.48M380.264 51.3684c0-1.178-.101-2.439-.301-3.785-.201-1.346-.522-2.471-.965-3.375-.485-.968-1.15-1.756-1.993-2.366-.845-.611-1.93-.915-3.26-.915-2.214 0-4.054.92-5.52 2.759-1.467 1.84-2.263 4.401-2.39 7.682h14.429zm6.992 11.896c-1.307 2.49-3.058 4.473-5.252 5.95-2.194 1.475-4.715 2.215-7.562 2.215-2.511 0-4.709-.444-6.597-1.331-1.889-.884-3.444-2.087-4.667-3.606-1.224-1.519-2.136-3.29-2.737-5.315-.601-2.026-.902-4.166-.902-6.424 0-2.025.322-4.012.965-5.964.644-1.95 1.587-3.706 2.832-5.269 1.202-1.497 2.695-2.705 4.477-3.622 1.782-.918 3.781-1.376 5.996-1.376 2.278 0 4.229.359 5.853 1.075 1.624.718 2.943 1.699 3.956 2.943.969 1.182 1.693 2.574 2.167 4.177.475 1.603.712 3.343.712 5.22v2.089h-20.662c0 2.051.196 3.911.586 5.581.39 1.67 1.007 3.14 1.851 4.407.823 1.227 1.898 2.195 3.227 2.903 1.329.709 2.911 1.062 4.746 1.062 1.877 0 3.497-.44 4.857-1.32 1.361-.88 2.674-2.465 3.939-4.755l2.215 1.36zM444.2415 70.6057h-15.188v-2.089c.485-.041.975-.084 1.471-.126.495-.042.934-.126 1.314-.253.59-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.502-3.887-1.503-5.078-1.002-1.191-2.252-1.787-3.75-1.787-1.033 0-2.004.158-2.91.474-.907.317-1.74.759-2.5 1.329-.612.464-1.123.964-1.534 1.503-.412.538-.724.986-.934 1.344v18.004c0 .738.126 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.923.333 1.313.428.39.095.902.164 1.534.205v2.089h-14.871v-2.089c.486-.041.954-.084 1.409-.126.453-.042.87-.126 1.25-.253.589-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.503-3.887-1.507-5.078-1.005-1.191-2.258-1.787-3.759-1.787-1.036 0-2.009.163-2.918.49-.909.326-1.744.775-2.506 1.344-.612.465-1.131.986-1.553 1.566-.423.58-.741 1.019-.952 1.314v17.877c0 .717.148 1.318.443 1.803.296.486.738.854 1.329 1.108.443.211.896.369 1.36.474.464.106.982.18 1.551.221v2.089h-15.156v-2.089c.485-.041.986-.084 1.503-.126.516-.042.966-.126 1.344-.253.591-.189 1.029-.521 1.314-.995.285-.474.427-1.091.427-1.849v-19.373c0-.673-.154-1.279-.458-1.816-.307-.538-.734-.996-1.283-1.375-.4-.253-.896-.458-1.486-.616a9.5368 9.5368 0 0 0-1.836-.301v-2.089l10.442-.695.443.443v4.461h.222c.526-.527 1.171-1.149 1.929-1.867.76-.717 1.466-1.297 2.12-1.74.739-.506 1.662-.928 2.769-1.266 1.107-.337 2.305-.506 3.591-.506 2.025 0 3.765.543 5.221 1.629 1.456 1.087 2.5 2.401 3.132 3.94.758-.739 1.427-1.387 2.006-1.946.579-.558 1.342-1.155 2.29-1.788.8-.548 1.742-.991 2.827-1.329 1.085-.337 2.29-.506 3.618-.506 2.631 0 4.716.865 6.254 2.594 1.538 1.73 2.306 4.389 2.306 7.975v15.851c0 .738.127 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.965.333 1.439.428.475.095 1.008.164 1.599.205v2.089zM461.5892 68.2805c-.439-.116-.89-.27-1.351-.459-.607-.232-1.052-.59-1.336-1.076-.282-.485-.423-1.096-.423-1.835v-23.439l-.444-.443-11.01.695v2.089c.632.042 1.329.154 2.088.332.759.179 1.339.396 1.741.648.547.379.974.847 1.281 1.406.306.559.459 1.175.459 1.85v17.246c0 .757-.143 1.375-.428 1.848-.284.474-.723.806-1.312.995-.38.127-.828.211-1.345.253-.518.042-1.019.085-1.503.126v2.089h15.061v-2.089c-.545-.041-1.038-.121-1.478-.236M500.3714 70.0364l-10.188.695-.475-.442v-3.955h-.19c-.505.527-1.074 1.092-1.706 1.692-.631.602-1.358 1.145-2.179 1.63-.949.569-1.865 1.001-2.748 1.298-.885.295-2.138.442-3.759.442-2.759 0-4.859-.901-6.303-2.702-1.442-1.802-2.163-4.42-2.163-7.854v-14.919c0-.758-.143-1.395-.43-1.911-.287-.517-.706-.964-1.257-1.344-.383-.253-.861-.437-1.434-.553-.573-.116-1.178-.194-1.814-.237v-2.088l10.409-.76.474.444v21.673c0 2.257.507 3.955 1.519 5.094 1.013 1.139 2.225 1.709 3.639 1.709 1.16 0 2.194-.18 3.101-.537.906-.358 1.666-.779 2.277-1.266.571-.441 1.071-.91 1.503-1.405.433-.495.765-.953.997-1.375v-17.665c0-.695-.147-1.312-.443-1.85-.295-.537-.707-.995-1.233-1.374-.38-.252-.945-.405-1.694-.458-.749-.052-1.587-.099-2.514-.142v-2.088l11.357-.76.476.443v24.747c0 .716.147 1.328.443 1.834.295.505.706.937 1.233 1.295.38.232.833.384 1.362.459.526.074 1.107.121 1.74.142v2.088zM557.5775 70.6057h-15.188v-2.089c.485-.041.975-.084 1.471-.126.495-.042.934-.126 1.314-.253.59-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.502-3.887-1.503-5.078-1.002-1.191-2.252-1.787-3.75-1.787-1.033 0-2.004.158-2.91.474-.907.317-1.74.759-2.5 1.329-.612.464-1.123.964-1.534 1.503-.412.538-.724.986-.934 1.344v18.004c0 .738.126 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.923.333 1.313.428.39.095.902.164 1.534.205v2.089h-14.871v-2.089c.486-.041.954-.084 1.409-.126.453-.042.87-.126 1.25-.253.589-.189 1.028-.522 1.312-.997.285-.474.428-1.091.428-1.85v-16.106c0-2.193-.503-3.887-1.507-5.078-1.005-1.191-2.258-1.787-3.759-1.787-1.036 0-2.009.163-2.918.49-.909.326-1.744.775-2.506 1.344-.612.465-1.131.986-1.553 1.566-.423.58-.741 1.019-.952 1.314v17.877c0 .717.148 1.318.443 1.803.296.486.738.854 1.329 1.108.443.211.896.369 1.36.474.464.106.982.18 1.551.221v2.089h-15.156v-2.089c.485-.041.986-.084 1.503-.126.516-.042.966-.126 1.345-.253.59-.189 1.028-.521 1.313-.995.285-.474.427-1.091.427-1.849v-19.373c0-.673-.154-1.279-.458-1.816-.307-.538-.734-.996-1.282-1.375-.401-.253-.897-.458-1.487-.616a9.5368 9.5368 0 0 0-1.836-.301v-2.089l10.442-.695.443.443v4.461h.222c.526-.527 1.171-1.149 1.929-1.867.76-.717 1.466-1.297 2.12-1.74.739-.506 1.662-.928 2.769-1.266 1.107-.337 2.305-.506 3.591-.506 2.025 0 3.765.543 5.221 1.629 1.456 1.087 2.5 2.401 3.132 3.94.758-.739 1.427-1.387 2.006-1.946.579-.558 1.342-1.155 2.29-1.788.8-.548 1.742-.991 2.827-1.329 1.085-.337 2.29-.506 3.618-.506 2.631 0 4.716.865 6.254 2.594 1.538 1.73 2.306 4.389 2.306 7.975v15.851c0 .738.127 1.345.38 1.819.253.475.685.839 1.297 1.091.485.191.965.333 1.439.428.475.095 1.008.164 1.599.205v2.089zM260.3783 29.8567c0 3.366-2.729 6.096-6.096 6.096-3.366 0-6.095-2.73-6.095-6.096 0-3.367 2.729-6.096 6.095-6.096 3.367 0 6.096 2.729 6.096 6.096",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				className: e.redditLogoClassName,
				d: "M275.1322 67.5725v-25.525h3.048c1.623 0 3.041-1.225 3.145-2.845.116-1.775-1.291-3.25-3.041-3.25h-3.152v-4.836c0-1.826-1.378-3.421-3.2-3.538-1.997-.13-3.657 1.452-3.657 3.421v4.953h-2.839c-1.624 0-3.041 1.224-3.146 2.845-.115 1.774 1.29 3.25 3.041 3.25h2.944v25.525c0 1.895 1.535 3.43 3.428 3.43 1.894 0 3.429-1.535 3.429-3.43M155.9915 42.0471c4.146 0 7.672 3.182 8.979 7.62h-17.959c1.307-4.438 4.833-7.62 8.98-7.62zm11.604 13.716c2.968 0 4.696-2.219 4.567-4.403-.068-1.154-.171-1.871-.306-2.457-1.819-7.886-8.232-13.713-15.865-13.713-9.048 0-16.382 8.187-16.382 18.287 0 10.099 7.334 18.287 16.382 18.287 5.667 0 9.715-2.064 12.661-5.299 1.436-1.577 1.171-4.054-.58-5.271-1.422-.988-3.223-.655-4.547.462-1.263 1.067-3.677 3.25-7.534 3.25-4.608 0-8.451-3.926-9.334-9.143h20.938zM139.9906 38.7346c0-1.701-1.24-3.109-2.865-3.379-4.993-.753-9.66 1.111-12.374 4.486v-.461c0-2.095-1.715-3.428-3.429-3.428-1.894 0-3.429 1.535-3.429 3.428v28.058c0 1.836 1.385 3.446 3.217 3.557 1.989.119 3.641-1.459 3.641-3.423v-14.474c0-6.405 4.817-11.664 11.426-10.95.239.025.463.024.677 0 1.756-.149 3.136-1.62 3.136-3.414M257.7113 42.429c0-1.895-1.534-3.429-3.429-3.429-1.893 0-3.428 1.534-3.428 3.429v25.144c0 1.894 1.535 3.429 3.428 3.429 1.895 0 3.429-1.535 3.429-3.429V42.429zM191.0413 64.9065c-5.261 0-9.524-5.117-9.524-11.43 0-6.312 4.263-11.429 9.524-11.429 5.26 0 9.524 5.117 9.524 11.429 0 6.313-4.264 11.43-9.524 11.43zm15.62-41.526c0-1.894-1.535-3.429-3.43-3.429-1.893 0-3.428 1.535-3.428 3.429v15.311c-2.323-2.322-5.283-3.502-8.762-3.502-9.048 0-16.383 8.188-16.383 18.287 0 10.1 7.335 18.287 16.383 18.287 3.51 0 6.452-1.208 8.825-3.545.302 1.584 1.693 2.784 3.365 2.784 1.895 0 3.43-1.535 3.43-3.43v-44.192zM226.8529 64.9065c-5.261 0-9.524-5.117-9.524-11.43 0-6.312 4.263-11.429 9.524-11.429 5.26 0 9.524 5.117 9.524 11.429 0 6.313-4.264 11.43-9.524 11.43zm15.62-41.526c0-1.894-1.535-3.429-3.429-3.429-1.893 0-3.428 1.535-3.428 3.429v15.311c-2.323-2.322-5.284-3.502-8.763-3.502-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.287 16.382 18.287 3.51 0 6.452-1.208 8.825-3.545.302 1.584 1.694 2.784 3.366 2.784 1.894 0 3.429-1.535 3.429-3.43v-44.192z",
				fill: "#FFF"
			}), a.a.createElement("path", {
				d: "M460.3783 29.8567c0 3.366-2.729 6.096-6.096 6.096-3.366 0-6.095-2.73-6.095-6.096 0-3.367 2.729-6.096 6.095-6.096 3.367 0 6.096 2.729 6.096 6.096M358.0775 43.3284c0 2.584-2.095 4.679-4.68 4.679-2.584 0-4.679-2.095-4.679-4.679 0-2.585 1.095-4.68 3.679-4.68 3.404 0 5.68 2.095 5.68 4.68M319.3236 65.5432c.844-1.308 1.466-2.826 1.867-4.556.401-1.729.601-3.66.601-5.791 0-1.56-.169-3.152-.506-4.777-.338-1.624-.865-3.037-1.582-4.24-.718-1.223-1.656-2.215-2.817-2.974-1.16-.76-2.552-1.14-4.176-1.14-1.561 0-2.89.344-3.987 1.029-1.096.686-2.046 1.503-2.847 2.452v18.447c.189.57.501 1.16.933 1.772.432.612.912 1.138 1.44 1.582.653.527 1.36.955 2.12 1.281.759.327 1.687.49 2.784.49 1.181 0 2.32-.31 3.417-.932 1.097-.622 2.015-1.503 2.753-2.643m5.157-22.433c1.244 1.477 2.21 3.191 2.896 5.142.684 1.951 1.028 4.182 1.028 6.691 0 2.468-.411 4.72-1.234 6.756-.823 2.035-1.91 3.771-3.259 5.204-1.413 1.456-2.985 2.575-4.715 3.355-1.729.78-3.564 1.171-5.505 1.171-1.878 0-3.417-.212-4.62-.633-1.202-.422-2.183-.918-2.942-1.487h-.253v12.387c0 2.504 1.06 3.37 1.787 3.599.911.288.458.153 1.51.27v2.089h-14.435v-2.089c.653-.042 1.286-.094 1.898-.158.612-.062 1.161-.169 1.646-.316.633-.211 1.076-.58 1.329-1.108.253-.527.38-1.149.38-1.866v-36.191c0-.633-.158-1.244-.475-1.835-.316-.59-.728-1.065-1.234-1.424-.38-.253-.907-.448-1.582-.585-.676-.138-1.329-.226-1.962-.269v-2.088l10.632-.697.442.38v3.512l.253.063c1.097-1.265 2.457-2.32 4.082-3.164 1.624-.843 3.238-1.265 4.841-1.265 1.94 0 3.718.411 5.332 1.234 1.613.822 3 1.93 4.16 3.322M94.9525 13.8157l-12.222-12.219a5.4455 5.4455 0 0 0-3.853-1.596h-61.204c-1.449 0-2.832.574-3.854 1.596l-12.222 12.219c-1.975 1.973-2.14 5.118-.377 7.287.047.062 5.045 6.539 5.045 17.667 0 7.109-.788 12.208-1.485 16.706-.58 3.727-1.123 7.248-1.123 11.179 0 10.568 8.171 22.452 23.783 24.717 11.37 1.653 17.741 5.784 17.779 5.804.916.62 1.98.927 3.045.927a5.55 5.55 0 0 0 3.04-.907c.063-.04 6.435-4.171 17.804-5.824 15.613-2.265 23.783-14.149 23.783-24.717 0-3.931-.543-7.452-1.123-11.179-.697-4.498-1.485-9.597-1.485-16.706 0-11.08 4.871-17.437 5.047-17.667 1.762-2.169 1.597-5.314-.378-7.287",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				d: "M59.4115 56.5569c-2.757 0-5-2.243-5-5 0-2.758 2.243-5.001 5-5.001s5 2.243 5 5.001c0 2.757-2.243 5-5 5m.88 8.212c-3.412 3.407-9.951 3.672-11.874 3.672-1.924 0-8.464-.265-11.872-3.673-.506-.506-.506-1.326.001-1.833.505-.505 1.326-.506 1.832.001 2.15 2.15 6.752 2.914 10.039 2.914 3.286 0 7.889-.764 10.043-2.915.507-.506 1.327-.505 1.832.001.506.507.506 1.327-.001 1.833m-27.88-13.212c0-2.758 2.244-5.001 5.002-5.001 2.756 0 4.998 2.243 4.998 5.001 0 2.756-2.242 4.999-4.998 4.999-2.758 0-5.002-2.243-5.002-4.999m47.992-5.001c0-3.866-3.135-7-7-7-1.887 0-3.596.75-4.855 1.964-4.784-3.452-11.377-5.683-18.72-5.939l3.188-15.003 10.418 2.215c.127 2.649 2.296 4.763 4.977 4.763 2.761 0 5-2.238 5-5s-2.239-5-5-5c-1.965 0-3.646 1.143-4.465 2.791l-11.633-2.474c-.323-.07-.662-.006-.94.175-.278.181-.473.464-.542.788l-3.561 16.741c-7.451.207-14.149 2.439-18.995 5.93-1.258-1.206-2.961-1.951-4.841-1.951-3.866 0-7 3.134-7 7 0 2.845 1.7 5.287 4.136 6.383-.108.695-.167 1.401-.167 2.117 0 10.77 12.536 19.5 28 19.5s28-8.73 28-19.5c0-.711-.058-1.412-.165-2.103 2.452-1.089 4.165-3.542 4.165-6.397",
				fill: "#FFF"
			}))
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const a = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				o = (e, t = !1) => {
					const n = [];
					for (const r in a) {
						const o = a[r];
						(o.priceInCoins <= e || t) && n.push(o)
					}
					return n
				},
				i = e => r.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [r.fbt._plural(e.monthsOfPremium, "number of months"), r.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				s = [{
					prompt: () => r.fbt._("What is a Reddit Premium Membership?", null, {
						hk: "3ibd7e"
					}),
					answer: () => r.fbt._("Reddit Premium is our subscription membership program, and it directly supports Reddit and the communities that it hosts. It offers an entirely ads-free Reddit experience as well as other benefits, including monthly Coins and access to the exclusive r/lounge community.", null, {
						hk: "22tBeJ"
					})
				}, {
					prompt: () => r.fbt._("Why change the name to Premium? What happened to calling it Gold?", null, {
						hk: "buZNC"
					}),
					answer: () => r.fbt._("The membership has a new name for a good reason. Many people confused the subscription Reddit Gold membership with a virtual good or coin. To make things easier to understand, we’ve renamed the membership to “Reddit Premium”, while the virtual good is called “Coins”. We have kept your favorite features and added more.", null, {
						hk: "2CCKCo"
					})
				}, {
					prompt: () => r.fbt._("What if I was subscribed to the old Gold Membership program?", null, {
						hk: "2Mv367"
					}),
					answer: () => r.fbt._("Fine people everywhere with a Gold Membership are now members of Reddit Premium. It still offers the same great ads-free browsing experience and access to r/lounge, but now you will also receive Coins monthly so you can award exceptional contributions.", null, {
						hk: "IQrwR"
					})
				}, {
					prompt: () => r.fbt._("The Premium membership gives me Coins, what are those for?", null, {
						hk: "4FMg0V"
					}),
					answer: () => r.fbt._("Coins are a virtual good, and you can use them to award exceptional posts or comments with a Silver, Gold, or Platinum Award. This is a way to show appreciation for an exceptional contribution to Reddit, and can also grant the recipient special bonus benefits. You can award someone by clicking on “Give Award” below a post or comment.", null, {
						hk: "46r7Aq"
					})
				}, {
					prompt: () => r.fbt._("Do I have to subscribe to Reddit Premium to get Coins?", null, {
						hk: "boE6i"
					}),
					answer: () => r.fbt._("Monthly Coins are a great benefit for being a Premium member, but if you wish you can also buy individual quantities of Coins. Additionally, you will receive Coins if you are awarded Gold or Platinum.", null, {
						hk: "36zEKr"
					})
				}],
				c = "com.reddit.premium_1";
			var l;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(l || (l = {}))
		},
		"./src/reddit/pages/Premium/BenefitsSection/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_21g0kYfKRCqWnHX6Hs4EVJ",
				benefit: "_2ZtkpgcwK6dFNvjfEHZZT4"
			}
		},
		"./src/reddit/pages/Premium/PremiumButtons/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_2WCbLB03wJFwv7fN2Dk2qt",
				premiumAnnualButton: "_2570j5dKW6IeBhxlQzl5WL",
				premiumMonthlyButton: "_7__SJMdC4NiDvJ9BVKQrm",
				premiumDiscountBadge: "_1AJGAPTnSSY4HwOKw5300M",
				renewalSubtext: "mNwLF2M-GWWkKuxa83xBQ",
				hero: "_47LcjeuJicuk5sAs6MQM5"
			}
		},
		"./src/reddit/pages/Premium/RedeemGiftCode/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_5LWowBThFq85kJtr32lGv",
				redeemCodeLink: "_1p-1WwfjcgeP5ujyA10PDi",
				giftCodeInputContainer: "kVy_f9PYYpGrwTE_Mh6vp",
				giftCodeHidden: "j1exZ_-cynvmQEF34ZwVS",
				giftCodeInput: "_1Unf0eBwbvzVa_cFT4YlaP",
				redeemButton: "n9l-oUPT1d1EFyY3z2MbA"
			}
		},
		"./src/reddit/pages/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_1H1BEIdB-vMmFIhl__GcP-",
				benefits: "_2F-2JuCnBDGUkhnXOrig5y",
				hero: "_3KzmnADgrpURkhkiSnEL8O",
				heroInner: "_2oUlTJc4IuiAjkfQeGQ6j7",
				heroTitle: "GZKGDIHeqtU51PlPpyUL_",
				heroLogo: "_2QdbMXAwLpWVLJfDJ275mD",
				heroDescription: "hUEA0jAwHPAvz7Q_ME6CQ",
				heroButtons: "_267SU8HUh3akX44wSBowkV",
				heroPremiumExpiration: "_3mePsES_o4kEB7LYhNam7d",
				title: "_3xymUbUvqvfnMM2w1bDVpo",
				paidPremiumSubtext: "_2Of3GWhg1qZ5DUuQVMX80C",
				faqButton: "_3GTrbRyT1wOPfZZhY4r1Qg",
				footer: "_27BspvKVY7nh2AfDk1xv0S"
			}
		},
		"./src/reddit/pages/Premium/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/humanizeDate/index.ts"),
				u = n("./src/lib/loadRedditAdsPixel.ts"),
				p = n("./src/lib/pageTitle.ts"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				b = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				g = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				y = n("./src/reddit/selectors/telemetry.ts");
			const k = (e, t) => {
					const {
						packageId: n
					} = t;
					if (!n) return null;
					const r = Object(g.h)(e, n);
					return r ? {
						goldPurchase: {
							subscriptionType: r.frequency
						}
					} : null
				},
				v = "premium_marketing",
				C = e => t => ({
					source: v,
					action: "click",
					noun: "price",
					correlationId: Object(f.c)(f.a.GoldPayment),
					...y.defaults(t),
					...k(t, {
						packageId: e
					})
				}),
				P = () => e => ({
					source: v,
					action: "click",
					noun: "redeem_code",
					correlationId: Object(f.c)(f.a.GoldPayment),
					...y.defaults(e)
				}),
				_ = () => e => ({
					source: v,
					action: "click",
					noun: "manage",
					correlationId: Object(f.c)(f.a.GoldPayment),
					...y.defaults(e)
				});
			var w = n("./src/reddit/helpers/trackers/screenview.ts"),
				E = n("./src/telemetry/index.ts"),
				x = n("./src/telemetry/models/Timer.ts"),
				O = n("./src/reddit/pages/Premium/index.m.less"),
				j = n.n(O),
				T = n("./src/reddit/actions/login.ts"),
				N = n("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				I = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				M = n("./src/reddit/components/MarketingPageFooter/index.tsx"),
				S = n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				A = n("./src/reddit/components/TitleTagManager/index.tsx"),
				L = n("./src/reddit/constants/experiments.ts"),
				B = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const R = Object(B.a)(L.Db);
			var G = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				U = n("./src/reddit/icons/svgs/PremiumLogo/index.tsx"),
				H = n("./src/reddit/controls/Button/index.tsx"),
				D = n("./src/lib/classNames/index.ts"),
				q = n("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				W = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				z = n("./src/reddit/hooks/useTracking.ts"),
				Y = n("./src/reddit/pages/Premium/BenefitsSection/index.m.less"),
				K = n.n(Y);
			const J = {
					avatar: () => a.fbt._("Exclusive Avatar Gear", null, {
						hk: "1f1QJb"
					}),
					powerup: () => a.fbt._("Monthly Powerup*", null, {
						hk: "jpNRe"
					}),
					appIcons: () => a.fbt._("Custom App Icons*", null, {
						hk: "3nVSRo"
					}),
					adFree: () => a.fbt._("Ad-free Browsing", null, {
						hk: "2rgG59"
					}),
					monthlyCoins: ({
						periodicalCoins: e
					}) => a.fbt._("{amount} Monthly Coins", [a.fbt._param("amount", e)], {
						hk: "2mYzqc"
					}),
					lounge: () => a.fbt._("Members Lounge", null, {
						hk: "3iqx0z"
					}),
					awards: () => a.fbt._("Premium Awards", null, {
						hk: "3cn0Pf"
					}),
					more: () => a.fbt._("More to come...", null, {
						hk: "oz7E8"
					}),
					welcomeGift: ({
						bonusCoins: e
					}) => a.fbt._("{amount} Coin Bonus!*", [a.fbt._param("amount", e)], {
						hk: "2R1mSy"
					})
				},
				V = {
					avatar: () => a.fbt._("Outfit your avatar with the best gear and accessories", null, {
						hk: "2HjLMS"
					}),
					powerup: () => a.fbt._("Help select communities unlock perks", null, {
						hk: "4tX97Z"
					}),
					appIcons: () => a.fbt._("Change your app icon to something more your style", null, {
						hk: "1WobLA"
					}),
					adFree: () => a.fbt._("Enjoy redditing without interruptions from ads", null, {
						hk: "2aDI9B"
					}),
					monthlyCoins: ({
						periodicalCoins: e
					}) => a.fbt._("Get {amount} coins a month and make it rain awards", [a.fbt._param("amount", e)], {
						hk: "228nfD"
					}),
					lounge: () => a.fbt._("Discover all the illuminati secrets in r/lounge", null, {
						hk: "nlK6D"
					}),
					awards: () => a.fbt._("Give exclusive awards that get more attention", null, {
						hk: "2Dzf3P"
					}),
					more: () => void 0,
					welcomeGift: () => a.fbt._("Claim this one-time-only welcome gift", null, {
						hk: "1x9RYJ"
					})
				},
				Q = ({
					className: e
				}) => {
					const t = Object(s.e)(g.i),
						n = Object(z.a)();
					if (!(null == t ? void 0 : t.length)) return i.a.createElement("div", null, i.a.createElement(W.a, {
						sizePx: 80
					}));
					const {
						periodicalCoins: a,
						signupBonusCoins: o
					} = t[0], c = o && o > 0 ? o.toLocaleString() : void 0, l = a.toLocaleString(), d = [{
						key: "adFree",
						telemetryTag: "ad_free"
					}, {
						key: "avatar",
						isNew: !0,
						telemetryTag: "avatar"
					}, {
						key: "monthlyCoins",
						telemetryTag: "monthly_coins"
					}, {
						key: "lounge",
						telemetryTag: "premium_subreddits"
					}, {
						key: "appIcons",
						isNew: !0,
						telemetryTag: "app_icons"
					}, {
						key: "powerup",
						isNew: !0,
						telemetryTag: "powerups"
					}, {
						key: "awards",
						telemetryTag: "premium_awards"
					}];
					c ? d.push({
						key: "welcomeGift",
						telemetryTag: "coin_bonus"
					}) : d.push({
						key: "more",
						telemetryTag: "more_benefits"
					});
					const m = {
						periodicalCoins: l,
						bonusCoins: c
					};
					return i.a.createElement("div", {
						className: Object(D.a)(K.a.container, e)
					}, d.map(e => {
						const {
							key: t,
							isNew: a,
							telemetryTag: o
						} = e;
						return i.a.createElement(q.a, {
							className: K.a.benefit,
							description: V[t](m),
							iconUrl: `${r.a.assetPath}/img/gold/premium-marketing/benefits-icons/${t}.png`,
							key: t,
							title: J[t](m),
							isNew: a,
							onClick: () => o && n((e => t => ({
								source: "premium_marketing",
								action: "click",
								noun: "premium_benefit",
								...y.defaults(t),
								goldPurchase: {
									premiumMarketingBenefit: e
								}
							}))(o))
						})
					}))
				};
			var X = n("./src/reddit/models/Gold/Premium/index.ts"),
				$ = n("./src/reddit/pages/Premium/PremiumButtons/index.m.less"),
				Z = n.n($);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var te = ({
					className: e,
					isHeroStyles: t,
					onClickPackage: n,
					onClickManagePremium: r
				}) => {
					const a = Object(s.e)(g.i),
						o = Object(s.e)(F.t);
					if (!a.length) return null;
					const c = i.a.createElement(H.h, {
							className: Z.a.button,
							onClick: r
						}, ee._("Manage Premium", null, {
							hk: "13LAq1"
						})),
						l = a.find(e => e.frequency === X.d.Monthly),
						d = a.find(e => e.frequency === X.d.Yearly),
						m = i.a.createElement(i.a.Fragment, null, d && i.a.createElement(H.h, {
							className: Z.a.premiumAnnualButton,
							onClick: () => n(d.mobileId)
						}, ee._("{annual-price}", [ee._param("annual-price", `$${(d.pennies/100).toLocaleString()}/Year`)], {
							hk: "456tLT"
						}), !!d.bonusPct && i.a.createElement("span", {
							className: Z.a.premiumDiscountBadge
						}, ee._("Save {annual-month-discount}", [ee._param("annual-month-discount", `${d.bonusPct}%`)], {
							hk: "TgjzN"
						}))), l && i.a.createElement(H.q, {
							className: Z.a.premiumMonthlyButton,
							onClick: () => {
								n(l.mobileId)
							},
							priority: H.b.Secondary
						}, ee._("{monthly-price}", [ee._param("monthly-price", `$${(l.pennies/100).toLocaleString()}/Month`)], {
							hk: "267A5G"
						})), i.a.createElement("div", {
							className: Z.a.renewalSubtext
						}, ee._("Subscriptions automatically renew", null, {
							hk: "v8BCD"
						})));
					return i.a.createElement("div", {
						className: Object(D.a)(Z.a.buttons, e, {
							[Z.a.hero]: !!t
						})
					}, o ? c : m)
				},
				ne = n("./src/reddit/actions/claimgold.ts"),
				re = n("./src/reddit/selectors/claimgold.ts"),
				ae = n("./src/reddit/pages/Premium/RedeemGiftCode/index.m.less"),
				oe = n.n(ae);
			const ie = () => {
				const e = Object(z.a)(),
					t = Object(s.d)(),
					n = Object(s.e)(re.a),
					r = Object(s.e)(re.b);
				return i.a.createElement("div", {
					className: oe.a.container
				}, i.a.createElement(H.q, {
					className: oe.a.redeemCodeLink,
					onClick: () => {
						e(P()), t(Object(ne.i)())
					},
					priority: H.b.Plain
				}, a.fbt._("Redeem a Gift Code", null, {
					hk: "10i0AM"
				})), i.a.createElement("form", {
					className: Object(D.a)(oe.a.giftCodeInputContainer, {
						[oe.a.giftCodeHidden]: !r
					}),
					onSubmit: e => {
						e.preventDefault(), t(Object(ne.h)())
					}
				}, i.a.createElement("input", {
					className: oe.a.giftCodeInput,
					type: "text",
					maxLength: 30,
					placeholder: a.fbt._("Gift Code", null, {
						hk: "1UDPjt"
					}),
					onChange: e => {
						e.stopPropagation(), t(Object(ne.j)(e.target.value))
					},
					value: n
				}), i.a.createElement(H.q, {
					className: oe.a.redeemButton,
					priority: H.b.Plain
				}, a.fbt._("Redeem", null, {
					hk: "1d2cH2"
				}))))
			};
			var se = n("./src/reddit/pages/Premium/old/index.m.less"),
				ce = n.n(se),
				le = n("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				de = n("./src/reddit/pages/Premium/old/PremiumButtons/index.m.less"),
				me = n.n(de);
			const {
				fbt: ue
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var pe = e => {
					const {
						className: t,
						isHeroStyles: n,
						onClick: r,
						premiumPackages: a
					} = e;
					if (!a.length) return null;
					const o = a.find(e => e.frequency === X.d.Monthly),
						s = a.find(e => e.frequency === X.d.Yearly);
					return i.a.createElement("div", {
						className: Object(D.a)(me.a.buttons, t, {
							[me.a.hero]: !!n
						})
					}, s && i.a.createElement(H.h, {
						className: me.a.premiumAnnualButton,
						onClick: () => r(s.mobileId)
					}, ue._("{annual-price}", [ue._param("annual-price", `$${(s.pennies/100).toLocaleString()}/Year`)], {
						hk: "456tLT"
					}), !!s.bonusPct && i.a.createElement("span", {
						className: me.a.premiumDiscountBadge
					}, ue._("Save {annual-month-discount}", [ue._param("annual-month-discount", `${s.bonusPct}%`)], {
						hk: "TgjzN"
					}))), o && i.a.createElement(H.h, {
						className: me.a.premiumMonthlyButton,
						onClick: () => {
							r(o.mobileId)
						}
					}, ue._("{monthly-price}", [ue._param("monthly-price", `$${(o.pennies/100).toLocaleString()}/Month`)], {
						hk: "267A5G"
					})), i.a.createElement("div", {
						className: me.a.renewalSubtext
					}, ue._("Subscriptions automatically renew", null, {
						hk: "v8BCD"
					})))
				},
				he = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				fe = n("./src/reddit/pages/Premium/old/PurchaseSection/index.m.less"),
				be = n.n(fe);
			class ge extends i.a.Component {
				constructor() {
					super(...arguments), this.onClaimGoldClick = () => {
						const {
							sendEvent: e,
							toggleClaimGoldModal: t
						} = this.props;
						e(P()), t()
					}, this.onGiftCodeRedeem = e => {
						e.preventDefault(), this.props.onGiftCodeRedeem()
					}
				}
				render() {
					const {
						className: e,
						giftCode: t,
						isPremiumSubscriber: n,
						onClickBuyPremium: r,
						onClickManagePremium: o,
						onGiftCodeInput: s,
						premiumPackages: c,
						shouldShowClaimGoldModal: l
					} = this.props;
					return i.a.createElement("div", {
						className: Object(D.a)(e, be.a.purchaseSection)
					}, i.a.createElement("h2", {
						className: be.a.purchaseSectionTitle
					}, a.fbt._("Join Reddit Premium Today", null, {
						hk: "2sm8Pz"
					})), i.a.createElement("div", {
						className: be.a.premiumPackage
					}, c && c.length ? i.a.createElement(ke, {
						isPremiumSubscriber: n,
						onClickBuyPremium: r,
						onClickManagePremium: o,
						premiumPackages: c
					}) : i.a.createElement(ye, null)), i.a.createElement("div", {
						className: be.a.miscContainer
					}, i.a.createElement(H.o, {
						className: be.a.redeemCodeLink,
						onClick: this.onClaimGoldClick
					}, a.fbt._("Redeem a Gift Code", null, {
						hk: "10i0AM"
					})), i.a.createElement("form", {
						className: Object(D.a)(be.a.giftCodeInputContainer, {
							[be.a.giftCodeHidden]: !l
						}),
						onSubmit: this.onGiftCodeRedeem
					}, i.a.createElement("input", {
						className: be.a.giftCodeInput,
						type: "text",
						maxLength: 30,
						placeholder: a.fbt._("Gift Code", null, {
							hk: "1UDPjt"
						}),
						onChange: s,
						value: t
					}), i.a.createElement(H.i, {
						className: be.a.redeemButton
					}, a.fbt._("Redeem", null, {
						hk: "1d2cH2"
					})))))
				}
			}
			const ye = () => i.a.createElement("div", {
					className: Object(D.a)(be.a.leftPanel, be.a.loaderContainer)
				}, i.a.createElement(W.a, {
					sizePx: 80
				})),
				ke = e => {
					const {
						isPremiumSubscriber: t,
						onClickBuyPremium: n,
						onClickManagePremium: r,
						premiumPackages: o
					} = e, {
						periodicalCoins: s,
						signupBonusCoins: c
					} = o[0], l = !!c && c > 0 && c.toLocaleString(), d = s.toLocaleString();
					return i.a.createElement("div", {
						className: Object(D.a)(be.a.leftPanel, be.a.withAnnual)
					}, i.a.createElement("ul", {
						className: Object(D.a)(be.a.premiumPerks, {
							[be.a.premiumPerksWithBonus]: !!l
						})
					}, l && i.a.createElement("li", {
						className: be.a.premiumPerk
					}, i.a.createElement(he.a, {
						className: be.a.checkmark
					}), a.fbt._("{bonus-coins} Coins Sign Up Gift", [a.fbt._param("bonus-coins", l)], {
						hk: "1D95uH"
					})), i.a.createElement("li", {
						className: be.a.premiumPerk
					}, i.a.createElement(he.a, {
						className: be.a.checkmark
					}), a.fbt._("Ads-free experience", null, {
						hk: "1dmvDS"
					})), i.a.createElement("li", {
						className: be.a.premiumPerk
					}, i.a.createElement(he.a, {
						className: be.a.checkmark
					}), a.fbt._("{monthly-coins} Coins every month", [a.fbt._param("monthly-coins", d)], {
						hk: "CngQz"
					}))), i.a.createElement("div", {
						className: be.a.buttons
					}, t ? i.a.createElement(H.h, {
						className: be.a.premiumButton,
						onClick: r
					}, a.fbt._("Manage", null, {
						hk: "2SIec3"
					})) : i.a.createElement(pe, {
						onClick: n,
						premiumPackages: o
					})))
				},
				ve = Object(l.c)({
					giftCode: re.a,
					goldExpiration: e => e.user.account && e.user.account.goldExpiration || 0,
					isGold: F.s,
					isPremiumSubscriber: F.t,
					isLoggedIn: F.K,
					premiumPackages: g.i,
					purchaseCatalogPending: g.k,
					shouldShowPremiumPurchaseModal: G.o,
					shouldShowClaimGoldModal: re.b
				});
			class Ce extends i.a.Component {
				constructor() {
					super(...arguments), this.correlationId = Object(f.d)(f.a.GoldPayment, !1), this.onClickPrice = e => {
						this.onPurchase(e, C)
					}, this.onClickManagePremium = () => {
						const {
							onManagePremium: e,
							sendEvent: t
						} = this.props;
						t(_()), e()
					}
				}
				componentDidMount() {
					const {
						premiumPackages: e,
						purchaseCatalogPending: t,
						requestPurchaseCatalog: n,
						sendEvent: r
					} = this.props;
					e.length || t || n(this.correlationId), document.documentElement.scrollTop = document.body.scrollTop = 0;
					const a = d.Db.PREMIUM;
					E.c.has(a) && (r(Object(w.n)(x.TimerType.InApp, E.c.end(a))), r(Object(w.m)())), Object(u.a)()
				}
				render() {
					const {
						className: e
					} = this.props;
					return i.a.createElement("div", {
						className: e
					}, this.renderHero(), this.renderPurchase(), this.renderFAQSection(), this.renderModal(), i.a.createElement(M.a, null))
				}
				renderHero() {
					const {
						goldExpiration: e,
						isGold: t,
						isPremiumSubscriber: n,
						premiumPackages: o
					} = this.props;
					return i.a.createElement("div", {
						className: ce.a.hero,
						style: {
							backgroundImage: `url("${r.a.assetPath}/img/gold/premium-hero-g.jpg")`
						}
					}, i.a.createElement("div", {
						className: ce.a.heroInner
					}, i.a.createElement("h1", {
						className: ce.a.heroTitle
					}, i.a.createElement(U.a, {
						className: ce.a.heroLogo
					})), i.a.createElement("p", {
						className: ce.a.heroDescription
					}, a.fbt._("Reddit Premium gives you an ad-free experience, special benefits, and directly supports Reddit. The more Reddit is user-supported, the freer we are to make Reddit the best it can be.", null, {
						hk: "3mkAF4"
					})), n ? i.a.createElement(H.h, {
						className: ce.a.heroCTA,
						onClick: this.onClickManagePremium
					}, a.fbt._("Manage Premium", null, {
						hk: "13LAq1"
					})) : i.a.createElement(pe, {
						className: ce.a.heroButtons,
						isHeroStyles: !0,
						premiumPackages: o,
						onClick: this.onClickPrice
					}), !n && t && i.a.createElement("div", {
						className: ce.a.heroPremiumExpiration
					}, Object(b.a)(a.fbt._("Your Premium membership is valid until {Premium expiration date}. Manage it :here:.", [a.fbt._param("Premium expiration date", Object(m.a)(e, !0))], {
						hk: "yMI3j"
					}).toString(), {
						":here:": i.a.createElement("a", {
							href: "/settings/premium",
							target: "_blank"
						}, a.fbt._("here", null, {
							hk: "d7Mhm"
						}))
					}))))
				}
				onPurchase(e, t) {
					const {
						isPremiumSubscriber: n,
						isLoggedIn: r,
						onOpenLoginModal: a,
						onPurchasePremium: o,
						sendEvent: i
					} = this.props;
					n ? this.onClickManagePremium() : r ? (i(t(e)), o(e, this.correlationId)) : a()
				}
				renderPurchase() {
					const {
						giftCode: e,
						isPremiumSubscriber: t,
						onGiftCodeInput: n,
						onGiftCodeRedeem: r,
						premiumPackages: a,
						sendEvent: o,
						shouldShowClaimGoldModal: s,
						toggleClaimGoldModal: c
					} = this.props;
					return i.a.createElement(ge, {
						giftCode: e,
						isPremiumSubscriber: t,
						onClickBuyPremium: this.onClickPrice,
						onClickManagePremium: this.onClickManagePremium,
						onGiftCodeInput: n,
						onGiftCodeRedeem: r,
						premiumPackages: a,
						sendEvent: o,
						shouldShowClaimGoldModal: s,
						toggleClaimGoldModal: c
					})
				}
				renderFAQSection() {
					return i.a.createElement("div", {
						className: ce.a.faqsSection
					}, i.a.createElement("h2", {
						className: ce.a.faqsTitle
					}, a.fbt._("Reddit Premium FAQ", null, {
						hk: "r4Da2"
					})), i.a.createElement("div", {
						className: ce.a.faqs
					}, X.c.map((e, t) => i.a.createElement(le.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: t
					}, e.answer()))))
				}
				renderModal() {
					return this.props.shouldShowPremiumPurchaseModal && i.a.createElement(S.a, null)
				}
				componentWillUnmount() {
					Object(f.b)(f.a.GoldPayment)
				}
			}
			var Pe = Object(s.b)(ve, (e, t) => ({
				onGiftCodeInput: t => {
					t.stopPropagation(), e(Object(ne.j)(t.target.value))
				},
				onGiftCodeRedeem: () => e(Object(ne.h)()),
				onManagePremium: () => e(Object(c.b)("/settings/gold")),
				onOpenLoginModal: () => e(Object(T.h)()),
				onPurchasePremium: (t, n) => e(Object(N.openWithBlob)({
					correlationId: n,
					packageId: t
				})),
				requestPurchaseCatalog: t => e(Object(I.b)(t)),
				toggleClaimGoldModal: () => e(Object(ne.i)())
			}))(Object(h.c)(Ce));
			const _e = Object(l.c)({
					goldExpiration: e => e.user.account && e.user.account.goldExpiration || 0,
					isGold: F.s,
					isPremiumSubscriber: F.t,
					isLoggedIn: F.K,
					premiumPackages: g.i,
					purchaseCatalogPending: g.k,
					shouldShowPremiumPurchaseModal: G.o,
					shouldShowPremiumRedesign: R
				}),
				we = Object(s.b)(_e, (e, t) => ({
					onManagePremium: () => e(Object(c.b)("/settings/premium")),
					onOpenLoginModal: () => e(Object(T.h)()),
					onPurchasePremium: (t, n) => e(Object(N.openWithBlob)({
						correlationId: n,
						packageId: t
					})),
					requestPurchaseCatalog: t => e(Object(I.b)(t))
				}));
			class Ee extends i.a.Component {
				constructor() {
					super(...arguments), this.correlationId = Object(f.d)(f.a.GoldPayment, !1), this.onClickPrice = e => {
						this.onPurchase(e, C)
					}, this.onClickManagePremium = () => {
						const {
							onManagePremium: e,
							sendEvent: t
						} = this.props;
						t(_()), e()
					}
				}
				componentDidMount() {
					const {
						premiumPackages: e,
						purchaseCatalogPending: t,
						requestPurchaseCatalog: n,
						sendEvent: r
					} = this.props;
					e.length || t || n(this.correlationId), document.documentElement.scrollTop = document.body.scrollTop = 0;
					const a = d.Db.PREMIUM;
					E.c.has(a) && (r(Object(w.n)(x.TimerType.InApp, E.c.end(a))), r(Object(w.m)())), Object(u.a)()
				}
				render() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(A.a, {
						title: Object(p.f)().toString()
					}), this.renderContent())
				}
				renderContent() {
					const {
						className: e,
						shouldShowPremiumRedesign: t
					} = this.props;
					return t ? i.a.createElement("div", {
						className: e
					}, this.renderHero(), i.a.createElement("div", {
						className: j.a.body
					}, i.a.createElement("h2", {
						className: j.a.title
					}, a.fbt._("Join Reddit Premium Today", null, {
						hk: "2sm8Pz"
					})), i.a.createElement(Q, {
						className: j.a.benefits
					}), i.a.createElement(te, {
						onClickPackage: this.onClickPrice,
						onClickManagePremium: this.onClickManagePremium
					}), i.a.createElement("div", {
						className: j.a.paidPremiumSubtext
					}, a.fbt._("* Monthly Powerups, custom app icons, and welcome gifts are only available through a paid Reddit Premium subscription.", null, {
						hk: "2JAJTp"
					})), i.a.createElement(ie, null), this.renderFAQSection()), this.renderModal(), i.a.createElement(M.a, {
						className: j.a.footer
					})) : i.a.createElement(Pe, this.props)
				}
				renderHero() {
					const {
						goldExpiration: e,
						isGold: t,
						isPremiumSubscriber: n
					} = this.props;
					return i.a.createElement("div", {
						className: j.a.hero,
						style: {
							backgroundImage: `linear-gradient(\n          to right,\n          rgba(0, 0, 0, 0.6) 0%,\n          rgba(0, 0, 0, 0) 50%\n        ), url("${r.a.assetPath}/img/gold/premium-marketing/premiumHero.jpg")`
						}
					}, i.a.createElement("div", {
						className: j.a.heroInner
					}, i.a.createElement("h1", {
						className: j.a.heroTitle
					}, i.a.createElement(U.a, {
						className: j.a.heroLogo
					})), i.a.createElement("p", {
						className: j.a.heroDescription
					}, a.fbt._("Help support Reddit and get VIP treatment, exclusive access, and monthly coins.", null, {
						hk: "19iqSJ"
					})), i.a.createElement(te, {
						className: j.a.heroButtons,
						isHeroStyles: !0,
						onClickPackage: this.onClickPrice,
						onClickManagePremium: this.onClickManagePremium
					}), !n && t && i.a.createElement("div", {
						className: j.a.heroPremiumExpiration
					}, Object(b.a)(a.fbt._("Your Premium membership is valid until {Premium expiration date}. Manage it :here:.", [a.fbt._param("Premium expiration date", Object(m.a)(e, !0))], {
						hk: "yMI3j"
					}).toString(), {
						":here:": i.a.createElement("a", {
							href: "/settings/premium",
							target: "_blank"
						}, a.fbt._("here", null, {
							hk: "d7Mhm"
						}))
					}))))
				}
				onPurchase(e, t) {
					const {
						isPremiumSubscriber: n,
						isLoggedIn: r,
						onOpenLoginModal: a,
						onPurchasePremium: o,
						sendEvent: i
					} = this.props;
					n ? this.onClickManagePremium() : r ? (i(t(e)), o(e, this.correlationId)) : a()
				}
				renderFAQSection() {
					return i.a.createElement(H.q, {
						className: j.a.faqButton,
						href: "https://reddit.zendesk.com/hc/en-us/articles/360043034412-What-is-a-Reddit-premium-membership-",
						kind: H.a.ExternalLink,
						priority: H.b.Plain,
						target: "_blank"
					}, a.fbt._("Visit the Reddit Premium FAQs", null, {
						hk: "22gM46"
					}))
				}
				renderModal() {
					return this.props.shouldShowPremiumPurchaseModal && i.a.createElement(S.a, null)
				}
				componentWillUnmount() {
					Object(f.b)(f.a.GoldPayment)
				}
			}
			t.default = we(Object(h.c)(Ee))
		},
		"./src/reddit/pages/Premium/old/PremiumButtons/index.m.less": function(e, t, n) {
			e.exports = {
				premiumAnnualButton: "_24YZKUT_tAkqGfcG3aXPaS",
				premiumMonthlyButton: "_3w5pTPCmkcH-AT2MD-vtFt",
				premiumDiscountBadge: "NvDbGSDJb-HH5ov-9IMEp",
				renewalSubtext: "MfzdGOkObCPNMLL_APi9i",
				hero: "_2g2PJ5S6vH4-mu9wj0xOTi",
				buttons: "_1B9zvS_2HtAdCFpi6_qter"
			}
		},
		"./src/reddit/pages/Premium/old/PurchaseSection/index.m.less": function(e, t, n) {
			e.exports = {
				purchaseSection: "_8eCzMlw9FowSHGO7gwc_-",
				purchaseSectionTitle: "_NsIUpAVPuBKIJTHTwlg4",
				premiumPackage: "_3qJHxdK-yinUePFJ_t4Q8o",
				leftPanel: "NUikV18airjhCL5CWMXuJ",
				rightPanel: "Z9P09AfdRI6XbJI01GsKu",
				loaderContainer: "iPdcIQHXSo2M9rgp_OAWv",
				bonusBanner: "_3D0Sho5eHJkYWppOYy5Ckl",
				premiumPerks: "_3oXyEHCtUyAw9rH1jazoOm",
				premiumPerk: "_32iwjKGC8n5eJy0uMvaOEw",
				checkmark: "_3YnxGrzUj8S8w-u9R_m8iT",
				buttons: "_3Vfopaznx_pCEPCggcR1k9",
				premiumButton: "_25uRyDs6XOpCGtwo077kVW",
				renewalSubtext: "_3Frttn_gHOWXf2NWpc4Dnl",
				miscContainer: "_24SqspzLka_wnc4aqkqvQI",
				withAnnual: "_19S82_jt8cU5MEeFaeKhed",
				premiumPerksWithBonus: "_2iCONf3Fi8BKMoIUV9WVnq",
				redeemCodeLink: "_164CXPX01SUgQ_mynH7l6i",
				giftCodeInputContainer: "_37RsGo-A5TEMcWAB9_7F_e",
				giftCodeHidden: "_1_OUg7u9YzKwNwaHEfcpkX",
				giftCodeInput: "x_vFHuhrmjMFM0Qny12O8",
				redeemButton: "_4OJLApUdvFxVXrIwKtfYP"
			}
		},
		"./src/reddit/pages/Premium/old/index.m.less": function(e, t, n) {
			e.exports = {
				hero: "_1wnURB9avZNOWPd6p-UcdC",
				heroInner: "_1xQfSM9wORXy_pKOfB4UUE",
				heroTitle: "_2NBAetCZ0WJ_NPpgvwCEia",
				heroLogo: "_1MBk4qkOxvfiYw7HCxkOEq",
				heroDescription: "dlZcMvao-1cCTZOfXDpNH",
				heroCTA: "Qh_moXHnYvNKoAWHZWYRo",
				heroCta: "Qh_moXHnYvNKoAWHZWYRo",
				heroButtons: "S4XIo6c4nrM69IRGzNu1o",
				heroPremiumExpiration: "_1W8tLB6H71kX1_MwK0Cequ",
				faqsSection: "tgbx7XGtNzPh3UwJVqojT",
				faqsTitle: "_3dhNKu7VbFNX-nuCaA_I1q",
				faqs: "D92-LsmeGEOf0CGEhofHy"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium.be05b095f58b7d3405a2.js.map