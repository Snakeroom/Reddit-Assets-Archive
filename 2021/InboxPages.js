// https://www.redditstatic.com/desktop2x/InboxPages.a73b289a8cf539bf46fc.js
// Retrieved at 3/11/2021, 9:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxPages"], {
		"./node_modules/react-helmet/es/Helmet.js": function(e, t, r) {
			"use strict";
			(function(e) {
				var n, o, i, a, s = r("./node_modules/react-helmet/node_modules/prop-types/index.js"),
					c = r.n(s),
					u = r("./node_modules/react-side-effect/lib/index.js"),
					l = r.n(u),
					d = r("./node_modules/react-fast-compare/index.js"),
					p = r.n(d),
					f = r("./node_modules/react/index.js"),
					m = r.n(f),
					h = r("./node_modules/object-assign/index.js"),
					b = r.n(h),
					y = "bodyAttributes",
					T = "htmlAttributes",
					g = "titleAttributes",
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
					w = "cssText",
					C = "href",
					S = "http-equiv",
					j = "innerHTML",
					A = "itemprop",
					E = "name",
					x = "property",
					_ = "rel",
					P = "src",
					L = "target",
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
					k = "defaultTitle",
					R = "defer",
					M = "encodeSpecialCharacters",
					N = "onChangeClientState",
					D = "titleTemplate",
					H = Object.keys(I).reduce((function(e, t) {
						return e[I[t]] = t, e
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
					U = function() {
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
					Y = Object.assign || function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = arguments[t];
							for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
						}
						return e
					},
					W = function(e, t) {
						var r = {};
						for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
						return r
					},
					K = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					},
					$ = function(e) {
						var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
					},
					z = function(e) {
						var t = Q(e, v.TITLE),
							r = Q(e, D);
						if (r && t) return r.replace(/%s/g, (function() {
							return Array.isArray(t) ? t.join("") : t
						}));
						var n = Q(e, k);
						return t || n || void 0
					},
					X = function(e) {
						return Q(e, N) || function() {}
					},
					G = function(e, t) {
						return t.filter((function(t) {
							return void 0 !== t[e]
						})).map((function(t) {
							return t[e]
						})).reduce((function(e, t) {
							return Y({}, e, t)
						}), {})
					},
					J = function(e, t) {
						return t.filter((function(e) {
							return void 0 !== e[v.BASE]
						})).map((function(e) {
							return e[v.BASE]
						})).reverse().reduce((function(t, r) {
							if (!t.length)
								for (var n = Object.keys(r), o = 0; o < n.length; o++) {
									var i = n[o].toLowerCase();
									if (-1 !== e.indexOf(i) && r[i]) return t.concat(r)
								}
							return t
						}), [])
					},
					V = function(e, t, r) {
						var n = {};
						return r.filter((function(t) {
							return !!Array.isArray(t[e]) || (void 0 !== t[e] && ne("Helmet: " + e + ' should be of type "Array". Instead found type "' + B(t[e]) + '"'), !1)
						})).map((function(t) {
							return t[e]
						})).reverse().reduce((function(e, r) {
							var o = {};
							r.filter((function(e) {
								for (var r = void 0, i = Object.keys(e), a = 0; a < i.length; a++) {
									var s = i[a],
										c = s.toLowerCase(); - 1 === t.indexOf(c) || r === _ && "canonical" === e[r].toLowerCase() || c === _ && "stylesheet" === e[c].toLowerCase() || (r = c), -1 === t.indexOf(s) || s !== j && s !== w && s !== A || (r = s)
								}
								if (!r || !e[r]) return !1;
								var u = e[r].toLowerCase();
								return n[r] || (n[r] = {}), o[r] || (o[r] = {}), !n[r][u] && (o[r][u] = !0, !0)
							})).reverse().forEach((function(t) {
								return e.push(t)
							}));
							for (var i = Object.keys(o), a = 0; a < i.length; a++) {
								var s = i[a],
									c = b()({}, n[s], o[s]);
								n[s] = c
							}
							return e
						}), []).reverse()
					},
					Q = function(e, t) {
						for (var r = e.length - 1; r >= 0; r--) {
							var n = e[r];
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
					re = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || ee : e.cancelAnimationFrame || ee,
					ne = function(e) {
						return console && "function" == typeof console.warn && console.warn(e)
					},
					oe = null,
					ie = function(e, t) {
						var r = e.baseTag,
							n = e.bodyAttributes,
							o = e.htmlAttributes,
							i = e.linkTags,
							a = e.metaTags,
							s = e.noscriptTags,
							c = e.onChangeClientState,
							u = e.scriptTags,
							l = e.styleTags,
							d = e.title,
							p = e.titleAttributes;
						ce(v.BODY, n), ce(v.HTML, o), se(d, p);
						var f = {
								baseTag: ue(v.BASE, r),
								linkTags: ue(v.LINK, i),
								metaTags: ue(v.META, a),
								noscriptTags: ue(v.NOSCRIPT, s),
								scriptTags: ue(v.SCRIPT, u),
								styleTags: ue(v.STYLE, l)
							},
							m = {},
							h = {};
						Object.keys(f).forEach((function(e) {
							var t = f[e],
								r = t.newTags,
								n = t.oldTags;
							r.length && (m[e] = r), n.length && (h[e] = f[e].oldTags)
						})), t && t(), c(e, m, h)
					},
					ae = function(e) {
						return Array.isArray(e) ? e.join("") : e
					},
					se = function(e, t) {
						void 0 !== e && document.title !== e && (document.title = ae(e)), ce(v.TITLE, t)
					},
					ce = function(e, t) {
						var r = document.getElementsByTagName(e)[0];
						if (r) {
							for (var n = r.getAttribute("data-react-helmet"), o = n ? n.split(",") : [], i = [].concat(o), a = Object.keys(t), s = 0; s < a.length; s++) {
								var c = a[s],
									u = t[c] || "";
								r.getAttribute(c) !== u && r.setAttribute(c, u), -1 === o.indexOf(c) && o.push(c);
								var l = i.indexOf(c); - 1 !== l && i.splice(l, 1)
							}
							for (var d = i.length - 1; d >= 0; d--) r.removeAttribute(i[d]);
							o.length === i.length ? r.removeAttribute("data-react-helmet") : r.getAttribute("data-react-helmet") !== a.join(",") && r.setAttribute("data-react-helmet", a.join(","))
						}
					},
					ue = function(e, t) {
						var r = document.head || document.querySelector(v.HEAD),
							n = r.querySelectorAll(e + "[data-react-helmet]"),
							o = Array.prototype.slice.call(n),
							i = [],
							a = void 0;
						return t && t.length && t.forEach((function(t) {
							var r = document.createElement(e);
							for (var n in t)
								if (t.hasOwnProperty(n))
									if (n === j) r.innerHTML = t.innerHTML;
									else if (n === w) r.styleSheet ? r.styleSheet.cssText = t.cssText : r.appendChild(document.createTextNode(t.cssText));
							else {
								var s = void 0 === t[n] ? "" : t[n];
								r.setAttribute(n, s)
							}
							r.setAttribute("data-react-helmet", "true"), o.some((function(e, t) {
								return a = t, r.isEqualNode(e)
							})) ? o.splice(a, 1) : i.push(r)
						})), o.forEach((function(e) {
							return e.parentNode.removeChild(e)
						})), i.forEach((function(e) {
							return r.appendChild(e)
						})), {
							oldTags: o,
							newTags: i
						}
					},
					le = function(e) {
						return Object.keys(e).reduce((function(t, r) {
							var n = void 0 !== e[r] ? r + '="' + e[r] + '"' : "" + r;
							return t ? t + " " + n : n
						}), "")
					},
					de = function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return Object.keys(e).reduce((function(t, r) {
							return t[I[r] || r] = e[r], t
						}), t)
					},
					pe = function(e, t, r) {
						switch (e) {
							case v.TITLE:
								return {
									toComponent: function() {
										return e = t.title, r = t.titleAttributes, (n = {
											key: e
										})["data-react-helmet"] = !0, o = de(r, n), [m.a.createElement(v.TITLE, o, e)];
										var e, r, n, o
									}, toString: function() {
										return function(e, t, r, n) {
											var o = le(r),
												i = ae(t);
											return o ? "<" + e + ' data-react-helmet="true" ' + o + ">" + $(i, n) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + $(i, n) + "</" + e + ">"
										}(e, t.title, t.titleAttributes, r)
									}
								};
							case y:
							case T:
								return {
									toComponent: function() {
										return de(t)
									}, toString: function() {
										return le(t)
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
													if (r === j || r === w) {
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
														return !(e === j || e === w)
													})).reduce((function(e, t) {
														var o = void 0 === n[t] ? t : t + '="' + $(n[t], r) + '"';
														return e ? e + " " + o : o
													}), ""),
													i = n.innerHTML || n.cssText || "",
													a = -1 === F.indexOf(e);
												return t + "<" + e + ' data-react-helmet="true" ' + o + (a ? "/>" : ">" + i + "</" + e + ">")
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
							i = e.linkTags,
							a = e.metaTags,
							s = e.noscriptTags,
							c = e.scriptTags,
							u = e.styleTags,
							l = e.title,
							d = void 0 === l ? "" : l,
							p = e.titleAttributes;
						return {
							base: pe(v.BASE, t, n),
							bodyAttributes: pe(y, r, n),
							htmlAttributes: pe(T, o, n),
							link: pe(v.LINK, i, n),
							meta: pe(v.META, a, n),
							noscript: pe(v.NOSCRIPT, s, n),
							script: pe(v.SCRIPT, c, n),
							style: pe(v.STYLE, u, n),
							title: pe(v.TITLE, {
								title: d,
								titleAttributes: p
							}, n)
						}
					},
					me = l()((function(e) {
						return {
							baseTag: J([C, L], e),
							bodyAttributes: G(y, e),
							defer: Q(e, R),
							encode: Q(e, M),
							htmlAttributes: G(T, e),
							linkTags: V(v.LINK, [_, C], e),
							metaTags: V(v.META, [E, O, S, x, A], e),
							noscriptTags: V(v.NOSCRIPT, [j], e),
							onChangeClientState: X(e),
							scriptTags: V(v.SCRIPT, [P, j], e),
							styleTags: V(v.STYLE, [w], e),
							title: z(e),
							titleAttributes: G(g, e)
						}
					}), (function(e) {
						oe && re(oe), e.defer ? oe = te((function() {
							ie(e, (function() {
								oe = null
							}))
						})) : (ie(e), oe = null)
					}), fe)((function() {
						return null
					})),
					he = (o = me, a = i = function(e) {
						function t() {
							return q(this, t), K(this, e.apply(this, arguments))
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
							var t, r = e.child,
								n = e.arrayTypeChildren,
								o = e.newChildProps,
								i = e.nestedChildren;
							return Y({}, n, ((t = {})[r.type] = [].concat(n[r.type] || [], [Y({}, o, this.mapNestedChildrenToProps(r, i))]), t))
						}, t.prototype.mapObjectTypeChildren = function(e) {
							var t, r, n = e.child,
								o = e.newProps,
								i = e.newChildProps,
								a = e.nestedChildren;
							switch (n.type) {
								case v.TITLE:
									return Y({}, o, ((t = {})[n.type] = a, t.titleAttributes = Y({}, i), t));
								case v.BODY:
									return Y({}, o, {
										bodyAttributes: Y({}, i)
									});
								case v.HTML:
									return Y({}, o, {
										htmlAttributes: Y({}, i)
									})
							}
							return Y({}, o, ((r = {})[n.type] = Y({}, i), r))
						}, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
							var r = Y({}, t);
							return Object.keys(e).forEach((function(t) {
								var n;
								r = Y({}, r, ((n = {})[t] = e[t], n))
							})), r
						}, t.prototype.warnOnInvalidChildren = function(e, t) {
							return !0
						}, t.prototype.mapChildrenToProps = function(e, t) {
							var r = this,
								n = {};
							return m.a.Children.forEach(e, (function(e) {
								if (e && e.props) {
									var o = e.props,
										i = o.children,
										a = function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											return Object.keys(e).reduce((function(t, r) {
												return t[H[r] || r] = e[r], t
											}), t)
										}(W(o, ["children"]));
									switch (r.warnOnInvalidChildren(e, i), e.type) {
										case v.LINK:
										case v.META:
										case v.NOSCRIPT:
										case v.SCRIPT:
										case v.STYLE:
											n = r.flattenArrayTypeChildren({
												child: e,
												arrayTypeChildren: n,
												newChildProps: a,
												nestedChildren: i
											});
											break;
										default:
											t = r.mapObjectTypeChildren({
												child: e,
												newProps: t,
												newChildProps: a,
												nestedChildren: i
											})
									}
								}
							})), t = this.mapArrayTypeChildrenToProps(n, t)
						}, t.prototype.render = function() {
							var e = this.props,
								t = e.children,
								r = W(e, ["children"]),
								n = Y({}, r);
							return t && (n = this.mapChildrenToProps(t, n)), m.a.createElement(o, n)
						}, U(t, null, [{
							key: "canUseDOM",
							set: function(e) {
								o.canUseDOM = e
							}
						}]), t
					}(m.a.Component), i.propTypes = {
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
					}, i.defaultProps = {
						defer: !0,
						encodeSpecialCharacters: !0
					}, i.peek = o.peek, i.rewind = function() {
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
					}, a);
				he.renderStatic = he.rewind, t.a = he
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function i() {}
			i.resetWarningCache = o, e.exports = function() {
				function e(e, t, r, o, i, a) {
					if (a !== n) {
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
					checkPropTypes: i,
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
				i = (n = o) && "object" == typeof n && "default" in n ? n.default : n;

			function a(e, t, r) {
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
					var c, u = [];

					function l() {
						c = e(u.map((function(e) {
							return e.props
						}))), d.canUseDOM ? t(c) : r && (c = r(c))
					}
					var d = function(e) {
						var t, r;

						function o() {
							return e.apply(this, arguments) || this
						}
						r = e, (t = o).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, o.peek = function() {
							return c
						}, o.rewind = function() {
							if (o.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
							var e = c;
							return c = void 0, u = [], e
						};
						var a = o.prototype;
						return a.UNSAFE_componentWillMount = function() {
							u.push(this), l()
						}, a.componentDidUpdate = function() {
							l()
						}, a.componentWillUnmount = function() {
							var e = u.indexOf(this);
							u.splice(e, 1), l()
						}, a.render = function() {
							return i.createElement(n, this.props)
						}, o
					}(o.PureComponent);
					return a(d, "displayName", "SideEffect(" + function(e) {
						return e.displayName || e.name || "Component"
					}(n) + ")"), a(d, "canUseDOM", s), d
				}
			}
		},
		"./src/reddit/components/IFrame/index.m.less": function(e, t, r) {
			e.exports = {
				IFrame: "saPujbGMyXRwqISHcmJH9",
				iFrame: "saPujbGMyXRwqISHcmJH9"
			}
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				i = r("./node_modules/react-helmet/es/Helmet.js"),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/pageTitle.ts"),
				u = r("./src/reddit/helpers/tabBadging/index.ts"),
				l = r("./src/reddit/selectors/appBadges.ts");
			const d = Object(s.a)(l.c, e => ({
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
					return Object(u.b)(this.props.badgeCount > 0), o.a.createElement(i.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(a.b)(d)(p)
		},
		"./src/reddit/pages/RedditEmbed/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "e8fTXufFydLy7wHBm6rHP"
			}
		},
		"./src/reddit/pages/RedditEmbed/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./src/config.ts"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/addQueryParams/index.ts"),
				u = r("./src/lib/env/index.ts"),
				l = r("./src/reddit/components/IFrame/index.m.less"),
				d = r.n(l);
			class p extends i.a.Component {
				constructor() {
					super(...arguments), this.ref = null
				}
				setRef(e) {
					this.ref = e
				}
				getDocument() {
					try {
						return this.ref.contentWindow.document
					} catch (e) {}
				}
				onLoad() {
					const e = this.getDocument();
					e && this.props.onLoad && this.props.onLoad(e)
				}
				render() {
					const {
						src: e
					} = this.props;
					return i.a.createElement("iframe", {
						className: d.a.IFrame,
						ref: e => this.setRef(e),
						src: e,
						onLoad: () => this.onLoad
					})
				}
			}
			var f = r("./src/reddit/components/TitleTagManager/index.tsx"),
				m = r("./src/reddit/constants/componentSizes.ts"),
				h = r("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/selectors/userPrefs.ts"),
				T = r("./src/reddit/pages/RedditEmbed/index.m.less"),
				g = r.n(T);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(s.c)({
					isSubscriptionsPinned: y.b,
					url: e => e.platform.currentPage ? e.platform.currentPage.url : "",
					servedOrigin: e => `${e.meta.protocol}://${e.meta.domain}`,
					nightmode: b.V
				}),
				w = Object(a.b)(O),
				C = ({
					offsetLeft: e,
					children: t,
					...r
				}) => i.a.createElement("div", v({
					className: g.a.wrapper,
					style: {
						left: e
					}
				}, r), t);
			class S extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						bodyScrollOffset: 0,
						hasMounted: !1,
						title: ""
					}
				}
				componentDidMount() {
					const e = () => () => {
						const {
							marginRight: e
						} = document.body.style;
						!!e != !!this.state.bodyScrollOffset && (e ? this.setState({
							bodyScrollOffset: Object(h.d)(document.body)
						}) : this.setState({
							bodyScrollOffset: 0
						}))
					};
					try {
						this.docObserver = new MutationObserver(e)
					} catch (t) {}
					this.docObserver && this.docObserver.observe(document.body, {
						attributes: !0
					}), this.setState({
						hasMounted: !0
					})
				}
				componentWillUnmount() {
					this.docObserver && this.docObserver.disconnect()
				}
				onLoad(e) {
					e.title && this.setState({
						title: e.title
					})
				}
				render() {
					const {
						title: e
					} = this.state;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(f.a, {
						title: e
					}), this.renderContent())
				}
				renderContent() {
					const {
						isSubscriptionsPinned: e,
						servedOrigin: t,
						nightmode: r
					} = this.props;
					let o = 0;
					e && (o += m.u), 0 !== this.state.bodyScrollOffset && (o -= this.state.bodyScrollOffset);
					const a = Object(u.a)() ? t : "true",
						s = Object(u.a)() ? n.a.redditUrl : "";
					let l;
					return l = r ? s + Object(c.a)(this.props.url, {
						embedded: a,
						dark: "true"
					}) : s + Object(c.a)(this.props.url, {
						embedded: a
					}), i.a.createElement(C, {
						offsetLeft: o
					}, i.a.createElement(p, {
						src: l,
						onLoad: this.onLoad
					}))
				}
			}
			t.default = w(S)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxPages.a73b289a8cf539bf46fc.js.map