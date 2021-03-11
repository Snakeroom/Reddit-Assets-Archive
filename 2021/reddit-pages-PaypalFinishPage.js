// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.3ad1f48b4ef64bca04e2.js
// Retrieved at 3/11/2021, 9:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-pages-PaypalFinishPage"], {
		"./node_modules/react-helmet/es/Helmet.js": function(e, t, r) {
			"use strict";
			(function(e) {
				var n, o, a, i, s = r("./node_modules/react-helmet/node_modules/prop-types/index.js"),
					c = r.n(s),
					d = r("./node_modules/react-side-effect/lib/index.js"),
					u = r.n(d),
					l = r("./node_modules/react-fast-compare/index.js"),
					p = r.n(l),
					f = r("./node_modules/react/index.js"),
					m = r.n(f),
					b = r("./node_modules/object-assign/index.js"),
					h = r.n(b),
					y = "bodyAttributes",
					g = "htmlAttributes",
					v = "titleAttributes",
					O = {
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
					j = (Object.keys(O).map((function(e) {
						return O[e]
					})), "charset"),
					w = "cssText",
					T = "href",
					C = "http-equiv",
					E = "innerHTML",
					x = "itemprop",
					S = "name",
					P = "property",
					A = "rel",
					_ = "src",
					k = "target",
					I = {
						accesskey: "accessKey",
						charset: "charSet",
						class: "className",
						contenteditable: "contentEditable",
						contextmenu: "contextMenu",
						"http-equiv": "httpEquiv",
						itemprop: "itemProp",
						tabindex: "tabIndex"
					},
					N = "defaultTitle",
					L = "defer",
					q = "encodeSpecialCharacters",
					R = "onChangeClientState",
					M = "titleTemplate",
					D = Object.keys(I).reduce((function(e, t) {
						return e[I[t]] = t, e
					}), {}),
					B = [O.NOSCRIPT, O.SCRIPT, O.STYLE],
					U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					F = function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					},
					H = function() {
						function e(e, t) {
							for (var r = 0; r < t.length; r++) {
								var n = t[r];
								n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
							}
						}
						return function(t, r, n) {
							return r && e(t.prototype, r), n && e(t, n), t
						}
					}(),
					W = Object.assign || function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = arguments[t];
							for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
						}
						return e
					},
					Y = function(e, t) {
						var r = {};
						for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
						return r
					},
					J = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					},
					K = function(e) {
						var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
					},
					z = function(e) {
						var t = Z(e, O.TITLE),
							r = Z(e, M);
						if (r && t) return r.replace(/%s/g, (function() {
							return Array.isArray(t) ? t.join("") : t
						}));
						var n = Z(e, N);
						return t || n || void 0
					},
					G = function(e) {
						return Z(e, R) || function() {}
					},
					V = function(e, t) {
						return t.filter((function(t) {
							return void 0 !== t[e]
						})).map((function(t) {
							return t[e]
						})).reduce((function(e, t) {
							return W({}, e, t)
						}), {})
					},
					$ = function(e, t) {
						return t.filter((function(e) {
							return void 0 !== e[O.BASE]
						})).map((function(e) {
							return e[O.BASE]
						})).reverse().reduce((function(t, r) {
							if (!t.length)
								for (var n = Object.keys(r), o = 0; o < n.length; o++) {
									var a = n[o].toLowerCase();
									if (-1 !== e.indexOf(a) && r[a]) return t.concat(r)
								}
							return t
						}), [])
					},
					Q = function(e, t, r) {
						var n = {};
						return r.filter((function(t) {
							return !!Array.isArray(t[e]) || (void 0 !== t[e] && ne("Helmet: " + e + ' should be of type "Array". Instead found type "' + U(t[e]) + '"'), !1)
						})).map((function(t) {
							return t[e]
						})).reverse().reduce((function(e, r) {
							var o = {};
							r.filter((function(e) {
								for (var r = void 0, a = Object.keys(e), i = 0; i < a.length; i++) {
									var s = a[i],
										c = s.toLowerCase(); - 1 === t.indexOf(c) || r === A && "canonical" === e[r].toLowerCase() || c === A && "stylesheet" === e[c].toLowerCase() || (r = c), -1 === t.indexOf(s) || s !== E && s !== w && s !== x || (r = s)
								}
								if (!r || !e[r]) return !1;
								var d = e[r].toLowerCase();
								return n[r] || (n[r] = {}), o[r] || (o[r] = {}), !n[r][d] && (o[r][d] = !0, !0)
							})).reverse().forEach((function(t) {
								return e.push(t)
							}));
							for (var a = Object.keys(o), i = 0; i < a.length; i++) {
								var s = a[i],
									c = h()({}, n[s], o[s]);
								n[s] = c
							}
							return e
						}), []).reverse()
					},
					Z = function(e, t) {
						for (var r = e.length - 1; r >= 0; r--) {
							var n = e[r];
							if (n.hasOwnProperty(t)) return n[t]
						}
						return null
					},
					X = (n = Date.now(), function(e) {
						var t = Date.now();
						t - n > 16 ? (n = t, e(t)) : setTimeout((function() {
							X(e)
						}), 0)
					}),
					ee = function(e) {
						return clearTimeout(e)
					},
					te = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || X : e.requestAnimationFrame || X,
					re = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || ee : e.cancelAnimationFrame || ee,
					ne = function(e) {
						return console && "function" == typeof console.warn && console.warn(e)
					},
					oe = null,
					ae = function(e, t) {
						var r = e.baseTag,
							n = e.bodyAttributes,
							o = e.htmlAttributes,
							a = e.linkTags,
							i = e.metaTags,
							s = e.noscriptTags,
							c = e.onChangeClientState,
							d = e.scriptTags,
							u = e.styleTags,
							l = e.title,
							p = e.titleAttributes;
						ce(O.BODY, n), ce(O.HTML, o), se(l, p);
						var f = {
								baseTag: de(O.BASE, r),
								linkTags: de(O.LINK, a),
								metaTags: de(O.META, i),
								noscriptTags: de(O.NOSCRIPT, s),
								scriptTags: de(O.SCRIPT, d),
								styleTags: de(O.STYLE, u)
							},
							m = {},
							b = {};
						Object.keys(f).forEach((function(e) {
							var t = f[e],
								r = t.newTags,
								n = t.oldTags;
							r.length && (m[e] = r), n.length && (b[e] = f[e].oldTags)
						})), t && t(), c(e, m, b)
					},
					ie = function(e) {
						return Array.isArray(e) ? e.join("") : e
					},
					se = function(e, t) {
						void 0 !== e && document.title !== e && (document.title = ie(e)), ce(O.TITLE, t)
					},
					ce = function(e, t) {
						var r = document.getElementsByTagName(e)[0];
						if (r) {
							for (var n = r.getAttribute("data-react-helmet"), o = n ? n.split(",") : [], a = [].concat(o), i = Object.keys(t), s = 0; s < i.length; s++) {
								var c = i[s],
									d = t[c] || "";
								r.getAttribute(c) !== d && r.setAttribute(c, d), -1 === o.indexOf(c) && o.push(c);
								var u = a.indexOf(c); - 1 !== u && a.splice(u, 1)
							}
							for (var l = a.length - 1; l >= 0; l--) r.removeAttribute(a[l]);
							o.length === a.length ? r.removeAttribute("data-react-helmet") : r.getAttribute("data-react-helmet") !== i.join(",") && r.setAttribute("data-react-helmet", i.join(","))
						}
					},
					de = function(e, t) {
						var r = document.head || document.querySelector(O.HEAD),
							n = r.querySelectorAll(e + "[data-react-helmet]"),
							o = Array.prototype.slice.call(n),
							a = [],
							i = void 0;
						return t && t.length && t.forEach((function(t) {
							var r = document.createElement(e);
							for (var n in t)
								if (t.hasOwnProperty(n))
									if (n === E) r.innerHTML = t.innerHTML;
									else if (n === w) r.styleSheet ? r.styleSheet.cssText = t.cssText : r.appendChild(document.createTextNode(t.cssText));
							else {
								var s = void 0 === t[n] ? "" : t[n];
								r.setAttribute(n, s)
							}
							r.setAttribute("data-react-helmet", "true"), o.some((function(e, t) {
								return i = t, r.isEqualNode(e)
							})) ? o.splice(i, 1) : a.push(r)
						})), o.forEach((function(e) {
							return e.parentNode.removeChild(e)
						})), a.forEach((function(e) {
							return r.appendChild(e)
						})), {
							oldTags: o,
							newTags: a
						}
					},
					ue = function(e) {
						return Object.keys(e).reduce((function(t, r) {
							var n = void 0 !== e[r] ? r + '="' + e[r] + '"' : "" + r;
							return t ? t + " " + n : n
						}), "")
					},
					le = function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return Object.keys(e).reduce((function(t, r) {
							return t[I[r] || r] = e[r], t
						}), t)
					},
					pe = function(e, t, r) {
						switch (e) {
							case O.TITLE:
								return {
									toComponent: function() {
										return e = t.title, r = t.titleAttributes, (n = {
											key: e
										})["data-react-helmet"] = !0, o = le(r, n), [m.a.createElement(O.TITLE, o, e)];
										var e, r, n, o
									}, toString: function() {
										return function(e, t, r, n) {
											var o = ue(r),
												a = ie(t);
											return o ? "<" + e + ' data-react-helmet="true" ' + o + ">" + K(a, n) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + K(a, n) + "</" + e + ">"
										}(e, t.title, t.titleAttributes, r)
									}
								};
							case y:
							case g:
								return {
									toComponent: function() {
										return le(t)
									}, toString: function() {
										return ue(t)
									}
								};
							default:
								return {
									toComponent: function() {
										return function(e, t) {
											return t.map((function(t, r) {
												var n, o = ((n = {
													key: r
												})["data-react-helmet"] = !0, n);
												return Object.keys(t).forEach((function(e) {
													var r = I[e] || e;
													if (r === E || r === w) {
														var n = t.innerHTML || t.cssText;
														o.dangerouslySetInnerHTML = {
															__html: n
														}
													} else o[r] = t[e]
												})), m.a.createElement(e, o)
											}))
										}(e, t)
									}, toString: function() {
										return function(e, t, r) {
											return t.reduce((function(t, n) {
												var o = Object.keys(n).filter((function(e) {
														return !(e === E || e === w)
													})).reduce((function(e, t) {
														var o = void 0 === n[t] ? t : t + '="' + K(n[t], r) + '"';
														return e ? e + " " + o : o
													}), ""),
													a = n.innerHTML || n.cssText || "",
													i = -1 === B.indexOf(e);
												return t + "<" + e + ' data-react-helmet="true" ' + o + (i ? "/>" : ">" + a + "</" + e + ">")
											}), "")
										}(e, t, r)
									}
								}
						}
					},
					fe = function(e) {
						var t = e.baseTag,
							r = e.bodyAttributes,
							n = e.encode,
							o = e.htmlAttributes,
							a = e.linkTags,
							i = e.metaTags,
							s = e.noscriptTags,
							c = e.scriptTags,
							d = e.styleTags,
							u = e.title,
							l = void 0 === u ? "" : u,
							p = e.titleAttributes;
						return {
							base: pe(O.BASE, t, n),
							bodyAttributes: pe(y, r, n),
							htmlAttributes: pe(g, o, n),
							link: pe(O.LINK, a, n),
							meta: pe(O.META, i, n),
							noscript: pe(O.NOSCRIPT, s, n),
							script: pe(O.SCRIPT, c, n),
							style: pe(O.STYLE, d, n),
							title: pe(O.TITLE, {
								title: l,
								titleAttributes: p
							}, n)
						}
					},
					me = u()((function(e) {
						return {
							baseTag: $([T, k], e),
							bodyAttributes: V(y, e),
							defer: Z(e, L),
							encode: Z(e, q),
							htmlAttributes: V(g, e),
							linkTags: Q(O.LINK, [A, T], e),
							metaTags: Q(O.META, [S, j, C, P, x], e),
							noscriptTags: Q(O.NOSCRIPT, [E], e),
							onChangeClientState: G(e),
							scriptTags: Q(O.SCRIPT, [_, E], e),
							styleTags: Q(O.STYLE, [w], e),
							title: z(e),
							titleAttributes: V(v, e)
						}
					}), (function(e) {
						oe && re(oe), e.defer ? oe = te((function() {
							ae(e, (function() {
								oe = null
							}))
						})) : (ae(e), oe = null)
					}), fe)((function() {
						return null
					})),
					be = (o = me, i = a = function(e) {
						function t() {
							return F(this, t), J(this, e.apply(this, arguments))
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
								case O.SCRIPT:
								case O.NOSCRIPT:
									return {
										innerHTML: t
									};
								case O.STYLE:
									return {
										cssText: t
									}
							}
							throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
						}, t.prototype.flattenArrayTypeChildren = function(e) {
							var t, r = e.child,
								n = e.arrayTypeChildren,
								o = e.newChildProps,
								a = e.nestedChildren;
							return W({}, n, ((t = {})[r.type] = [].concat(n[r.type] || [], [W({}, o, this.mapNestedChildrenToProps(r, a))]), t))
						}, t.prototype.mapObjectTypeChildren = function(e) {
							var t, r, n = e.child,
								o = e.newProps,
								a = e.newChildProps,
								i = e.nestedChildren;
							switch (n.type) {
								case O.TITLE:
									return W({}, o, ((t = {})[n.type] = i, t.titleAttributes = W({}, a), t));
								case O.BODY:
									return W({}, o, {
										bodyAttributes: W({}, a)
									});
								case O.HTML:
									return W({}, o, {
										htmlAttributes: W({}, a)
									})
							}
							return W({}, o, ((r = {})[n.type] = W({}, a), r))
						}, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
							var r = W({}, t);
							return Object.keys(e).forEach((function(t) {
								var n;
								r = W({}, r, ((n = {})[t] = e[t], n))
							})), r
						}, t.prototype.warnOnInvalidChildren = function(e, t) {
							return !0
						}, t.prototype.mapChildrenToProps = function(e, t) {
							var r = this,
								n = {};
							return m.a.Children.forEach(e, (function(e) {
								if (e && e.props) {
									var o = e.props,
										a = o.children,
										i = function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											return Object.keys(e).reduce((function(t, r) {
												return t[D[r] || r] = e[r], t
											}), t)
										}(Y(o, ["children"]));
									switch (r.warnOnInvalidChildren(e, a), e.type) {
										case O.LINK:
										case O.META:
										case O.NOSCRIPT:
										case O.SCRIPT:
										case O.STYLE:
											n = r.flattenArrayTypeChildren({
												child: e,
												arrayTypeChildren: n,
												newChildProps: i,
												nestedChildren: a
											});
											break;
										default:
											t = r.mapObjectTypeChildren({
												child: e,
												newProps: t,
												newChildProps: i,
												nestedChildren: a
											})
									}
								}
							})), t = this.mapArrayTypeChildrenToProps(n, t)
						}, t.prototype.render = function() {
							var e = this.props,
								t = e.children,
								r = Y(e, ["children"]),
								n = W({}, r);
							return t && (n = this.mapChildrenToProps(t, n)), m.a.createElement(o, n)
						}, H(t, null, [{
							key: "canUseDOM",
							set: function(e) {
								o.canUseDOM = e
							}
						}]), t
					}(m.a.Component), a.propTypes = {
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
					}, a.defaultProps = {
						defer: !0,
						encodeSpecialCharacters: !0
					}, a.peek = o.peek, a.rewind = function() {
						var e = o.rewind();
						return e || (e = fe({
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
				be.renderStatic = be.rewind, t.a = be
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function a() {}
			a.resetWarningCache = o, e.exports = function() {
				function e(e, t, r, o, a, i) {
					if (i !== n) {
						var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw s.name = "Invariant Violation", s
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var r = {
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
					checkPropTypes: a,
					resetWarningCache: o
				};
				return r.PropTypes = r, r
			}
		},
		"./node_modules/react-helmet/node_modules/prop-types/index.js": function(e, t, r) {
			e.exports = r("./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/react-side-effect/lib/index.js": function(e, t, r) {
			"use strict";
			var n, o = r("./node_modules/react/index.js"),
				a = (n = o) && "object" == typeof n && "default" in n ? n.default : n;

			function i(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var s = !("undefined" == typeof window || !window.document || !window.document.createElement);
			e.exports = function(e, t, r) {
				if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
				if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
				if (void 0 !== r && "function" != typeof r) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
				return function(n) {
					if ("function" != typeof n) throw new Error("Expected WrappedComponent to be a React component.");
					var c, d = [];

					function u() {
						c = e(d.map((function(e) {
							return e.props
						}))), l.canUseDOM ? t(c) : r && (c = r(c))
					}
					var l = function(e) {
						var t, r;

						function o() {
							return e.apply(this, arguments) || this
						}
						r = e, (t = o).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, o.peek = function() {
							return c
						}, o.rewind = function() {
							if (o.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
							var e = c;
							return c = void 0, d = [], e
						};
						var i = o.prototype;
						return i.UNSAFE_componentWillMount = function() {
							d.push(this), u()
						}, i.componentDidUpdate = function() {
							u()
						}, i.componentWillUnmount = function() {
							var e = d.indexOf(this);
							d.splice(e, 1), u()
						}, i.render = function() {
							return a.createElement(n, this.props)
						}, o
					}(o.PureComponent);
					return i(l, "displayName", "SideEffect(" + function(e) {
						return e.displayName || e.name || "Component"
					}(n) + ")"), i(l, "canUseDOM", s), l
				}
			}
		},
		"./src/graphql/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/graphql/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/graphql/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/graphql/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/graphql/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/graphql/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return q
			})), r.d(t, "h", (function() {
				return R
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "f", (function() {
				return D
			})), r.d(t, "d", (function() {
				return B
			})), r.d(t, "c", (function() {
				return U
			})), r.d(t, "a", (function() {
				return J
			})), r.d(t, "e", (function() {
				return z
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				a = r.n(o),
				i = r("./node_modules/uuid/v4.js"),
				s = r.n(i),
				c = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/lib/addQueryParams/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				f = r("./src/lib/sentry/index.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				y = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/actions/gold/powerups.ts"),
				O = r("./src/reddit/actions/modal.ts"),
				j = r("./node_modules/bignumber.js/bignumber.js"),
				w = r.n(j),
				T = r("./src/graphql/operations/CancelEconRecurringPayment.json"),
				C = r("./src/graphql/operations/ConfirmPaypalPayment.json"),
				E = r("./src/graphql/operations/CreateEconOrder.json"),
				x = r("./src/graphql/operations/CreatePaypalPayment.json"),
				S = r("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				P = r("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				A = r("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				_ = r("./src/graphql/operations/DeleteSavedStripeCard.json"),
				k = r("./src/graphql/operations/UserSavedStripeCards.json"),
				I = r("./src/lib/makeGqlRequest/index.ts");
			const N = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				L = e => e.map(e => e.message).join(" : "),
				q = (e, t, r) => async (o, a, {
					gqlContext: i
				}) => {
					const c = s()(),
						d = await ((e, t, r, n, o) => {
							const a = new w.a(r.pricePackages[0].price).multipliedBy(n).toFixed();
							return Object(I.a)(e, {
								...E,
								variables: {
									input: {
										nonce: t,
										productId: r.id,
										productVersion: r.version,
										pricePackageId: r.pricePackages[0].id,
										currency: r.pricePackages[0].currency,
										price: a,
										productsCount: n.toString(),
										...o
									}
								}
							})
						})(i(), c, e, t, r);
					if (d.ok) {
						const e = d.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(L(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, R = (e, t, r, o, a) => async (i, c, {
					gqlContext: d
				}) => {
					const u = c(),
						l = () => i(Object(h.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let p, m, b = "";
					try {
						b = await i(q(t, a, {
							powerUps: {
								subredditId: r,
								isAnonymous: o
							}
						}))
					} catch (O) {
						return f.c.captureException(O), void(O.message && i(Object(h.stripeApiError)(O.message)))
					}
					i(Object(h.stripeTokenPending)());
					const v = Object(y.x)(u);
					if (v || (p = await i(Object(h.validateAndCreateStripeToken)(e)), m = Object(y.u)(u), p)) try {
						const e = s()(),
							t = v || m ? p && m ? ((e, t, r, n) => Object(I.a)(e, {
								...S,
								variables: {
									nonce: t,
									orderId: r,
									token: n
								}
							}))(d(), e, b, p.id) : v ? ((e, t, r, n) => Object(I.a)(e, {
								...A,
								variables: {
									nonce: t,
									orderId: r,
									cardId: n
								}
							}))(d(), e, b, v) : null : ((e, t, r, n) => Object(I.a)(e, {
								...P,
								variables: {
									nonce: t,
									orderId: r,
									token: n
								}
							}))(d(), e, b, p.id),
							n = await t;
						if (!n || !n.ok) return void l(); {
							const e = n.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void i(Object(h.stripeApiError)(L(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void l();
							const t = Object(g.j)(c());
							t && i(z({
								subredditId: r,
								powerupsCount: a,
								user: t,
								isAnonymous: o
							}))
						}
					} catch (O) {
						f.c.captureException(O), l()
					}
				}, M = (e, t, r, n) => async (o, a, {
					gqlContext: i
				}) => {
					let d = "";
					try {
						d = await o(q(e, n, {
							powerUps: {
								subredditId: t,
								isAnonymous: r
							}
						}))
					} catch (p) {
						return f.c.captureException(p), p.message && o(Object(h.paypalApiError)(p.message)), null
					}
					const u = c.a.redditUrl;
					try {
						const e = Object(l.a)(`${u}/framedModal/paypal-finish`, {
								_o: u,
								r: t,
								o: d,
								s: !0
							}),
							c = Object(l.a)(`${u}/framedModal/paypal-finish`, {
								_o: u,
								r: t,
								o: d
							}),
							p = s()(),
							f = await ((e, t, r, n, o) => Object(I.a)(e, {
								...x,
								variables: {
									nonce: t,
									orderId: r,
									successUrl: n,
									cancelUrl: o
								}
							}))(i(), p, d, e, c);
						if (f && f.ok) {
							const e = f.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return o(Object(h.paypalApiError)(L(e.errors))), null;
							const i = Object(g.j)(a());
							if (e.ok) {
								const {
									status: a
								} = e.payment;
								if ("ACTION_REQUIRED" === a) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === a && i) return o(z({
									subredditId: t,
									powerupsCount: n,
									user: i,
									isAnonymous: r
								})), null
							}
						}
					} catch (p) {
						f.c.captureException(p)
					}
					return o(Object(h.paypalApiError)(N())), null
				}, D = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					try {
						const n = s()(),
							a = await ((e, t, r, n) => Object(I.a)(e, {
								...C,
								variables: {
									nonce: t,
									paymentId: r,
									token: n
								}
							}))(o(), n, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return r(Object(h.paypalApiError)(L(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (a) {
						f.c.captureException(a)
					}
					return r(Object(h.paypalApiError)(N())), !1
				}, B = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(h.savedCardsPending)());
					try {
						const t = await (e => Object(I.a)(e, {
							...k,
							variables: {}
						}))(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(h.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, o = n.map(e => a()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(h.savedCardsSuccess)(o)), o[0] && e(Object(h.selectSavedCard)(o[0].cardId))
						} else e(Object(h.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						f.c.captureException(o), e(Object(h.savedCardsSuccess)([]))
					}
				}, U = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(h._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(I.a)(e, {
							..._,
							variables: {
								cardId: t
							}
						}))(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: o
							} = r.data.deleteEconPaymentMethod;
						if (o && o.length) throw new Error(L(o))
					} catch (o) {
						f.c.captureException(o)
					}
				}, F = Object(p.a)(b.N), H = Object(p.a)(b.O), W = Object(p.a)(b.P), Y = e => async (t, r) => {
					await t(F(e)), t(Object(u.e)({
						kind: m.b.Error,
						duration: u.a,
						text: e
					}))
				}, J = (e, t, r) => async (o, a, {
					gqlContext: i
				}) => {
					o(H({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const a = await ((e, t) => Object(I.a)(e, {
							...T,
							variables: {
								orderId: t
							}
						}))(i(), e);
						if (a.ok) {
							const e = a.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void o(Y(n[0].message));
							o(W({
								subredditId: t,
								allocatedAt: r
							}))
						} else o(Y(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (s) {
						f.c.captureException(s), o(Y(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, K = Object(p.a)(b.R), z = e => async (t, r) => {
					t(K(e)), t(Object(v.f)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(O.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(u.e)({
						kind: m.b.SuccessCommunityGreen,
						duration: u.a,
						text: n.fbt._({
							"*": "Purchase of {number of Powerups} Powerups is complete.",
							_1: "Purchase of 1 Powerup is complete."
						}, [n.fbt._plural(e.powerupsCount, "number of Powerups")], {
							hk: "28cBuw"
						})
					}))
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return d
			})), r.d(t, "paymentCompleted", (function() {
				return u
			})), r.d(t, "cardNameInput", (function() {
				return l
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return f
			})), r.d(t, "stripeTokenPending", (function() {
				return m
			})), r.d(t, "stripeTokenError", (function() {
				return b
			})), r.d(t, "stripeApiError", (function() {
				return h
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return y
			})), r.d(t, "paypalApiError", (function() {
				return g
			})), r.d(t, "toggleRememberCard", (function() {
				return v
			})), r.d(t, "selectSavedCard", (function() {
				return O
			})), r.d(t, "_deleteSavedCard", (function() {
				return j
			})), r.d(t, "deleteSavedCard", (function() {
				return w
			})), r.d(t, "savedCardsPending", (function() {
				return T
			})), r.d(t, "savedCardsSuccess", (function() {
				return C
			})), r.d(t, "loadSavedCards", (function() {
				return E
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(a.a)(s.A),
				u = Object(a.a)(s.w),
				l = Object(a.a)(s.b),
				p = Object(a.a)(s.a),
				f = Object(a.a)(s.D),
				m = Object(a.a)(s.F),
				b = Object(a.a)(s.E),
				h = Object(a.a)(s.C),
				y = e => async (t, r) => {
					const o = r(),
						a = Object(c.h)(o),
						{
							token: i,
							error: s
						} = await e.createToken({
							name: a
						});
					if (a.trim()) {
						if (!s && i) return i;
						t(b(s || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, g = Object(a.a)(s.x), v = Object(a.a)(s.G), O = Object(a.a)(s.B), j = Object(a.a)(s.g), w = e => async (t, r, {
					apiContext: n
				}) => {
					t(j(e));
					try {
						const t = await Object(i.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						o.c.captureException(a)
					}
				}, T = Object(a.a)(s.y), C = Object(a.a)(s.z), E = () => async (e, t, {
					apiContext: r
				}) => {
					e(T());
					try {
						const t = await Object(i.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(C(n)), n[0] && e(O(n[0].cardId))
					} catch (n) {
						o.c.captureException(n), e(C([]))
					}
				}
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-helmet/es/Helmet.js"),
				i = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/pageTitle.ts"),
				d = r("./src/reddit/helpers/tabBadging/index.ts"),
				u = r("./src/reddit/selectors/appBadges.ts");
			const l = Object(s.a)(u.c, e => ({
				badgeCount: e
			}));
			class p extends n.Component {
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
					return Object(d.b)(this.props.badgeCount > 0), o.a.createElement(a.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(i.b)(l)(p)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				s = r.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: r
			}) => o.a.createElement("div", {
				className: Object(a.a)(s.a.loadingIcon, t, {
					[s.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function o() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", a({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), o.a.createElement("g", null, o.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/pages/PaypalFinishPage/index.m.less": function(e, t, r) {
			e.exports = {
				loader: "_1ia9yqGevQ-g_70nwfxEm0",
				details: "_3dSBBqfRzgAPNfPqKwl8yR",
				error: "_1qAMyiuz3fo5Au5Cgu3W83",
				repeatButton: "_1hNJdrneOevh1kG25_vuXx",
				repeatIcon: "_39gyI00r3uS5ZeIndcJghA"
			}
		},
		"./src/reddit/pages/PaypalFinishPage/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				c = r("./src/reddit/hooks/useThunkDispatch.ts"),
				d = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = r("./src/reddit/components/TitleTagManager/index.tsx"),
				l = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = r("./src/reddit/icons/svgs/Replay/index.tsx"),
				f = r("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				m = r.n(f);
			const {
				fbt: b
			} = r("./node_modules/fbt/lib/FbtPublic.js"), h = "r", y = "o", g = "p", v = "approval_token_id", O = "s", j = Object(i.c)({
				paypalErrorMessage: d.d
			}), w = Object(a.b)(j);
			var T;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(T || (T = {}));
			t.default = w(e => {
				const {
					params: t,
					paypalErrorMessage: r
				} = e, a = t[h], i = t[y], d = t[O], f = t[g], j = t[v], w = Object(c.a)(), C = async () => {
					x(T.Loading), await w(Object(s.f)(f, j)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: a,
							orderId: i
						}
					}))(), setTimeout(() => {
						window.close(), x(T.Success)
					}, 1500)) : x(T.Error)
				};
				Object(n.useEffect)(() => {
					d ? C() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), x(T.Cancel)
					}, 1500))
				}, []);
				const [E, x] = Object(n.useState)(T.Loading);
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(u.a, {
					title: b._("Reddit - Buy Powerups", null, {
						hk: "4sEI31"
					}).toString()
				}), E === T.Loading && o.a.createElement(l.a, {
					className: m.a.loader,
					sizePx: 60
				}), E === T.Error && o.a.createElement("div", {
					className: m.a.details
				}, r && o.a.createElement("div", {
					className: m.a.error
				}, r), o.a.createElement("button", {
					onClick: C,
					className: m.a.repeatButton
				}, o.a.createElement(p.a, {
					className: m.a.repeatIcon
				}))), E === T.Success && o.a.createElement("div", {
					className: m.a.details
				}, b._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), E === T.Cancel && o.a.createElement("div", {
					className: m.a.details
				}, b._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.3ad1f48b4ef64bca04e2.js.map