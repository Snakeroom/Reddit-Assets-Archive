// https://www.redditstatic.com/desktop2x/NotificationsInbox.5089f0ec13fc27562929.js
// Retrieved at 3/11/2021, 7:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsInbox"], {
		"./node_modules/react-helmet/es/Helmet.js": function(e, t, n) {
			"use strict";
			(function(e) {
				var r, o, i, a, s = n("./node_modules/react-helmet/node_modules/prop-types/index.js"),
					c = n.n(s),
					l = n("./node_modules/react-side-effect/lib/index.js"),
					d = n.n(l),
					u = n("./node_modules/react-fast-compare/index.js"),
					p = n.n(u),
					m = n("./node_modules/react/index.js"),
					f = n.n(m),
					h = n("./node_modules/object-assign/index.js"),
					b = n.n(h),
					g = "bodyAttributes",
					y = "htmlAttributes",
					v = "titleAttributes",
					T = {
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
					x = (Object.keys(T).map((function(e) {
						return T[e]
					})), "charset"),
					E = "cssText",
					C = "href",
					O = "http-equiv",
					_ = "innerHTML",
					w = "itemprop",
					S = "name",
					j = "property",
					N = "rel",
					A = "src",
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
					P = "defaultTitle",
					L = "defer",
					M = "encodeSpecialCharacters",
					R = "onChangeClientState",
					F = "titleTemplate",
					B = Object.keys(I).reduce((function(e, t) {
						return e[I[t]] = t, e
					}), {}),
					H = [T.NOSCRIPT, T.SCRIPT, T.STYLE],
					U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					W = function(e, t) {
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
					z = function(e, t) {
						var n = {};
						for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
						return n
					},
					G = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					},
					Q = function(e) {
						var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
					},
					J = function(e) {
						var t = Z(e, T.TITLE),
							n = Z(e, F);
						if (n && t) return n.replace(/%s/g, (function() {
							return Array.isArray(t) ? t.join("") : t
						}));
						var r = Z(e, P);
						return t || r || void 0
					},
					Y = function(e) {
						return Z(e, R) || function() {}
					},
					K = function(e, t) {
						return t.filter((function(t) {
							return void 0 !== t[e]
						})).map((function(t) {
							return t[e]
						})).reduce((function(e, t) {
							return q({}, e, t)
						}), {})
					},
					X = function(e, t) {
						return t.filter((function(e) {
							return void 0 !== e[T.BASE]
						})).map((function(e) {
							return e[T.BASE]
						})).reverse().reduce((function(t, n) {
							if (!t.length)
								for (var r = Object.keys(n), o = 0; o < r.length; o++) {
									var i = r[o].toLowerCase();
									if (-1 !== e.indexOf(i) && n[i]) return t.concat(n)
								}
							return t
						}), [])
					},
					V = function(e, t, n) {
						var r = {};
						return n.filter((function(t) {
							return !!Array.isArray(t[e]) || (void 0 !== t[e] && re("Helmet: " + e + ' should be of type "Array". Instead found type "' + U(t[e]) + '"'), !1)
						})).map((function(t) {
							return t[e]
						})).reverse().reduce((function(e, n) {
							var o = {};
							n.filter((function(e) {
								for (var n = void 0, i = Object.keys(e), a = 0; a < i.length; a++) {
									var s = i[a],
										c = s.toLowerCase(); - 1 === t.indexOf(c) || n === N && "canonical" === e[n].toLowerCase() || c === N && "stylesheet" === e[c].toLowerCase() || (n = c), -1 === t.indexOf(s) || s !== _ && s !== E && s !== w || (n = s)
								}
								if (!n || !e[n]) return !1;
								var l = e[n].toLowerCase();
								return r[n] || (r[n] = {}), o[n] || (o[n] = {}), !r[n][l] && (o[n][l] = !0, !0)
							})).reverse().forEach((function(t) {
								return e.push(t)
							}));
							for (var i = Object.keys(o), a = 0; a < i.length; a++) {
								var s = i[a],
									c = b()({}, r[s], o[s]);
								r[s] = c
							}
							return e
						}), []).reverse()
					},
					Z = function(e, t) {
						for (var n = e.length - 1; n >= 0; n--) {
							var r = e[n];
							if (r.hasOwnProperty(t)) return r[t]
						}
						return null
					},
					$ = (r = Date.now(), function(e) {
						var t = Date.now();
						t - r > 16 ? (r = t, e(t)) : setTimeout((function() {
							$(e)
						}), 0)
					}),
					ee = function(e) {
						return clearTimeout(e)
					},
					te = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || $ : e.requestAnimationFrame || $,
					ne = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || ee : e.cancelAnimationFrame || ee,
					re = function(e) {
						return console && "function" == typeof console.warn && console.warn(e)
					},
					oe = null,
					ie = function(e, t) {
						var n = e.baseTag,
							r = e.bodyAttributes,
							o = e.htmlAttributes,
							i = e.linkTags,
							a = e.metaTags,
							s = e.noscriptTags,
							c = e.onChangeClientState,
							l = e.scriptTags,
							d = e.styleTags,
							u = e.title,
							p = e.titleAttributes;
						ce(T.BODY, r), ce(T.HTML, o), se(u, p);
						var m = {
								baseTag: le(T.BASE, n),
								linkTags: le(T.LINK, i),
								metaTags: le(T.META, a),
								noscriptTags: le(T.NOSCRIPT, s),
								scriptTags: le(T.SCRIPT, l),
								styleTags: le(T.STYLE, d)
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
					ae = function(e) {
						return Array.isArray(e) ? e.join("") : e
					},
					se = function(e, t) {
						void 0 !== e && document.title !== e && (document.title = ae(e)), ce(T.TITLE, t)
					},
					ce = function(e, t) {
						var n = document.getElementsByTagName(e)[0];
						if (n) {
							for (var r = n.getAttribute("data-react-helmet"), o = r ? r.split(",") : [], i = [].concat(o), a = Object.keys(t), s = 0; s < a.length; s++) {
								var c = a[s],
									l = t[c] || "";
								n.getAttribute(c) !== l && n.setAttribute(c, l), -1 === o.indexOf(c) && o.push(c);
								var d = i.indexOf(c); - 1 !== d && i.splice(d, 1)
							}
							for (var u = i.length - 1; u >= 0; u--) n.removeAttribute(i[u]);
							o.length === i.length ? n.removeAttribute("data-react-helmet") : n.getAttribute("data-react-helmet") !== a.join(",") && n.setAttribute("data-react-helmet", a.join(","))
						}
					},
					le = function(e, t) {
						var n = document.head || document.querySelector(T.HEAD),
							r = n.querySelectorAll(e + "[data-react-helmet]"),
							o = Array.prototype.slice.call(r),
							i = [],
							a = void 0;
						return t && t.length && t.forEach((function(t) {
							var n = document.createElement(e);
							for (var r in t)
								if (t.hasOwnProperty(r))
									if (r === _) n.innerHTML = t.innerHTML;
									else if (r === E) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
							else {
								var s = void 0 === t[r] ? "" : t[r];
								n.setAttribute(r, s)
							}
							n.setAttribute("data-react-helmet", "true"), o.some((function(e, t) {
								return a = t, n.isEqualNode(e)
							})) ? o.splice(a, 1) : i.push(n)
						})), o.forEach((function(e) {
							return e.parentNode.removeChild(e)
						})), i.forEach((function(e) {
							return n.appendChild(e)
						})), {
							oldTags: o,
							newTags: i
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
							return t[I[n] || n] = e[n], t
						}), t)
					},
					pe = function(e, t, n) {
						switch (e) {
							case T.TITLE:
								return {
									toComponent: function() {
										return e = t.title, n = t.titleAttributes, (r = {
											key: e
										})["data-react-helmet"] = !0, o = ue(n, r), [f.a.createElement(T.TITLE, o, e)];
										var e, n, r, o
									}, toString: function() {
										return function(e, t, n, r) {
											var o = de(n),
												i = ae(t);
											return o ? "<" + e + ' data-react-helmet="true" ' + o + ">" + Q(i, r) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + Q(i, r) + "</" + e + ">"
										}(e, t.title, t.titleAttributes, n)
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
											return t.map((function(t, n) {
												var r, o = ((r = {
													key: n
												})["data-react-helmet"] = !0, r);
												return Object.keys(t).forEach((function(e) {
													var n = I[e] || e;
													if (n === _ || n === E) {
														var r = t.innerHTML || t.cssText;
														o.dangerouslySetInnerHTML = {
															__html: r
														}
													} else o[n] = t[e]
												})), f.a.createElement(e, o)
											}))
										}(e, t)
									}, toString: function() {
										return function(e, t, n) {
											return t.reduce((function(t, r) {
												var o = Object.keys(r).filter((function(e) {
														return !(e === _ || e === E)
													})).reduce((function(e, t) {
														var o = void 0 === r[t] ? t : t + '="' + Q(r[t], n) + '"';
														return e ? e + " " + o : o
													}), ""),
													i = r.innerHTML || r.cssText || "",
													a = -1 === H.indexOf(e);
												return t + "<" + e + ' data-react-helmet="true" ' + o + (a ? "/>" : ">" + i + "</" + e + ">")
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
							o = e.htmlAttributes,
							i = e.linkTags,
							a = e.metaTags,
							s = e.noscriptTags,
							c = e.scriptTags,
							l = e.styleTags,
							d = e.title,
							u = void 0 === d ? "" : d,
							p = e.titleAttributes;
						return {
							base: pe(T.BASE, t, r),
							bodyAttributes: pe(g, n, r),
							htmlAttributes: pe(y, o, r),
							link: pe(T.LINK, i, r),
							meta: pe(T.META, a, r),
							noscript: pe(T.NOSCRIPT, s, r),
							script: pe(T.SCRIPT, c, r),
							style: pe(T.STYLE, l, r),
							title: pe(T.TITLE, {
								title: u,
								titleAttributes: p
							}, r)
						}
					},
					fe = d()((function(e) {
						return {
							baseTag: X([C, k], e),
							bodyAttributes: K(g, e),
							defer: Z(e, L),
							encode: Z(e, M),
							htmlAttributes: K(y, e),
							linkTags: V(T.LINK, [N, C], e),
							metaTags: V(T.META, [S, x, O, j, w], e),
							noscriptTags: V(T.NOSCRIPT, [_], e),
							onChangeClientState: Y(e),
							scriptTags: V(T.SCRIPT, [A, _], e),
							styleTags: V(T.STYLE, [E], e),
							title: J(e),
							titleAttributes: K(v, e)
						}
					}), (function(e) {
						oe && ne(oe), e.defer ? oe = te((function() {
							ie(e, (function() {
								oe = null
							}))
						})) : (ie(e), oe = null)
					}), me)((function() {
						return null
					})),
					he = (o = fe, a = i = function(e) {
						function t() {
							return W(this, t), G(this, e.apply(this, arguments))
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
								case T.SCRIPT:
								case T.NOSCRIPT:
									return {
										innerHTML: t
									};
								case T.STYLE:
									return {
										cssText: t
									}
							}
							throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
						}, t.prototype.flattenArrayTypeChildren = function(e) {
							var t, n = e.child,
								r = e.arrayTypeChildren,
								o = e.newChildProps,
								i = e.nestedChildren;
							return q({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [q({}, o, this.mapNestedChildrenToProps(n, i))]), t))
						}, t.prototype.mapObjectTypeChildren = function(e) {
							var t, n, r = e.child,
								o = e.newProps,
								i = e.newChildProps,
								a = e.nestedChildren;
							switch (r.type) {
								case T.TITLE:
									return q({}, o, ((t = {})[r.type] = a, t.titleAttributes = q({}, i), t));
								case T.BODY:
									return q({}, o, {
										bodyAttributes: q({}, i)
									});
								case T.HTML:
									return q({}, o, {
										htmlAttributes: q({}, i)
									})
							}
							return q({}, o, ((n = {})[r.type] = q({}, i), n))
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
							return f.a.Children.forEach(e, (function(e) {
								if (e && e.props) {
									var o = e.props,
										i = o.children,
										a = function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											return Object.keys(e).reduce((function(t, n) {
												return t[B[n] || n] = e[n], t
											}), t)
										}(z(o, ["children"]));
									switch (n.warnOnInvalidChildren(e, i), e.type) {
										case T.LINK:
										case T.META:
										case T.NOSCRIPT:
										case T.SCRIPT:
										case T.STYLE:
											r = n.flattenArrayTypeChildren({
												child: e,
												arrayTypeChildren: r,
												newChildProps: a,
												nestedChildren: i
											});
											break;
										default:
											t = n.mapObjectTypeChildren({
												child: e,
												newProps: t,
												newChildProps: a,
												nestedChildren: i
											})
									}
								}
							})), t = this.mapArrayTypeChildrenToProps(r, t)
						}, t.prototype.render = function() {
							var e = this.props,
								t = e.children,
								n = z(e, ["children"]),
								r = q({}, n);
							return t && (r = this.mapChildrenToProps(t, r)), f.a.createElement(o, r)
						}, D(t, null, [{
							key: "canUseDOM",
							set: function(e) {
								o.canUseDOM = e
							}
						}]), t
					}(f.a.Component), i.propTypes = {
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
					}, a);
				he.renderStatic = he.rewind, t.a = he
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function i() {}
			i.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, i, a) {
					if (a !== r) {
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
					checkPropTypes: i,
					resetWarningCache: o
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
			var r, o = n("./node_modules/react/index.js"),
				i = (r = o) && "object" == typeof r && "default" in r ? r.default : r;

			function a(e, t, n) {
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

						function o() {
							return e.apply(this, arguments) || this
						}
						n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, o.peek = function() {
							return c
						}, o.rewind = function() {
							if (o.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
							var e = c;
							return c = void 0, l = [], e
						};
						var a = o.prototype;
						return a.UNSAFE_componentWillMount = function() {
							l.push(this), d()
						}, a.componentDidUpdate = function() {
							d()
						}, a.componentWillUnmount = function() {
							var e = l.indexOf(this);
							l.splice(e, 1), d()
						}, a.render = function() {
							return i.createElement(r, this.props)
						}, o
					}(o.PureComponent);
					return a(u, "displayName", "SideEffect(" + function(e) {
						return e.displayName || e.name || "Component"
					}(r) + ")"), a(u, "canUseDOM", s), u
				}
			}
		},
		"./src/reddit/actions/pages/notificationsInbox.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "notificationsInboxPageRequested", (function() {
				return p
			}));
			var r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/notificationsInbox/index.ts"),
				a = n("./src/reddit/actions/users.ts"),
				s = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = n("./src/reddit/routes/notificationsInbox/index.ts"),
				l = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				d = n("./src/reddit/selectors/notificationsInbox.tsx"),
				u = n("./src/reddit/selectors/user.ts");
			const p = () => async (e, t) => {
				const n = t();
				if (!(Object(u.K)(n) || Object(u.J)(n))) return Object(s.a)(e, n);
				Object(l.d)(n) ? (e(m()), await e(f())) : e(Object(r.c)("/"))
			}, m = () => Object(o.k)({
				actionSource: o.a.NotificationsInbox,
				redirectUrl: c.b
			}), f = () => async (e, t) => {
				const n = t(),
					r = Object(d.g)(t()),
					o = !(!r || !r.length),
					s = Object(u.K)(n) || Object(u.J)(n);
				if (o || !s || !Object(l.d)(n)) return;
				const c = {
					first: 10
				};
				await e(Object(a.r)()), e(Object(i.d)(c))
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, n) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/values.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/loadWithRetries/index.ts"),
				m = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				f = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				y = n("./src/reddit/selectors/userPrefs.ts"),
				v = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				T = n.n(v);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = u.a.div("BladeContainer", T.a), C = u.a.wrapped(h.a, "CloseIcon", T.a), O = u.a.div("LoadingTitleContainer", T.a), _ = u.a.div("LoadingNavContainer", T.a), w = u.a.div("ShortLoadingNav", T.a), S = u.a.wrapped(f.a, "ThemedChevron", T.a), j = ({
				...e
			}) => a.a.createElement(E, null, a.a.createElement(C, null), a.a.createElement(m.k, null, a.a.createElement(m.p, null, x._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), a.a.createElement(m.o, null, a.a.createElement(O, null, a.a.createElement("div", {
				className: Object(d.a)(T.a.LoadingTitle, e.isLoading && T.a.loading)
			})), a.a.createElement(_, null, a.a.createElement("div", {
				className: Object(d.a)(T.a.LoadingNav, e.isLoading && T.a.loading)
			}), a.a.createElement(S, null)), a.a.createElement(_, null, a.a.createElement(w, null), a.a.createElement(S, null)), a.a.createElement(_, null, a.a.createElement("div", {
				className: Object(d.a)(T.a.LoadingNav, e.isLoading && T.a.loading)
			}), a.a.createElement(S, null)), a.a.createElement(_, null, a.a.createElement(w, null), a.a.createElement(S, null)), a.a.createElement(_, null, a.a.createElement("div", {
				className: Object(d.a)(T.a.LoadingNav, e.isLoading && T.a.loading)
			}), a.a.createElement(S, null))))), N = Object(l.a)({
				getComponent: () => Object(p.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => a.a.createElement(j, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => a.a.createElement(j, {
					gradientType: "posts",
					isLoading: !0
				})
			}), A = Object(c.c)({
				isEditing: g.i,
				isSubscriptionsPinned: y.b,
				moderatorPermissions: b.i
			});
			t.a = Object(s.b)(A)(e => {
				const t = e.moderatorPermissions && o()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? a.a.createElement("div", {
					className: Object(d.a)(T.a.Container, e.isSubscriptionsPinned && T.a.isSubscriptionPinned)
				}, e.children, a.a.createElement(N, {
					subredditId: e.subredditId
				})) : a.a.createElement(i.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return a
			})), n.d(t, "p", (function() {
				return s
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return l
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "j", (function() {
				return x
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = n.n(o);
			const a = r.a.section("FormPage", i.a),
				s = r.a.h1("HomePageTitle", i.a),
				c = r.a.button("HomePageBreadcrumb", i.a),
				l = r.a.div("HomePageGroup", i.a),
				d = r.a.h1("FormPageTitle", i.a),
				u = r.a.div("FormPageSection", i.a),
				p = r.a.div("FormGroup", i.a),
				m = r.a.h2("FormGroupTitle", i.a),
				f = r.a.div("FormElement", i.a),
				h = r.a.div("FormGroupDescription", i.a),
				b = r.a.div("FormItem", i.a),
				g = r.a.h3("FormElementTitle", i.a),
				y = r.a.div("FormElementDescription", i.a),
				v = r.a.div("FormElementError", i.a),
				T = r.a.div("FormElementSubGroup", i.a),
				x = r.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, n) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
				mResponsive: "_28QD3wRQT74vkz8KPzFC43",
				TabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				tabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				Tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				Tab: "_1PoD47oSHsBQ37RfRPY-G-",
				tab: "_1PoD47oSHsBQ37RfRPY-G-",
				mIsActive: "_1Ico4fvlryEwDknLqa0-lP",
				mIsEnabled: "_3ZTJ0aNoM983-ysCWCpmrA"
			}
		},
		"./src/reddit/components/TabNav/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return E
			}));
			var r, o = n("./node_modules/lodash/throttle.js"),
				i = n.n(o),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				p = n("./src/reddit/constants/zIndex.ts"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				f = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				h = n("./src/reddit/components/TabNav/index.m.less"),
				b = n.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.GEAR = "gear"
			}(r || (r = {}));
			const y = d.a.wrapped(f.a, "Gear", b.a),
				v = d.a.h3("Title", b.a),
				T = d.a.div("TabNavContainer", b.a),
				x = d.a.div("Tabs", b.a),
				E = d.a.wrapped(({
					active: e,
					children: t,
					enabled: n,
					...r
				}) => s.a.createElement(m.a, g({}, r, {
					"aria-selected": e,
					className: Object(c.a)(r.className, {
						[b.a.mIsActive]: e,
						[b.a.mIsEnabled]: !1 !== n
					}),
					role: "tab"
				}), t), "Tab", b.a),
				C = e => {
					switch (e) {
						case r.GEAR:
							return s.a.createElement(y, null);
						default:
							return null
					}
				},
				O = () => window.pageYOffset || window.scrollY,
				_ = 75,
				w = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: u.f,
					willChange: "transform",
					zIndex: p.g
				};
			class S extends s.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = i()(() => {
						this.state.sticky || this.forceUnsticky ? O() < _ && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : O() >= _ && this.setState({
							sticky: !0
						})
					}, l.G), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
						sticky: !1
					}
				}
				componentDidMount() {
					this.props.isCategoryPage && (this.toggleSticky(), window.addEventListener("orientationchange", this.toggleSticky), window.addEventListener("resize", this.toggleSticky), window.addEventListener("scroll", this.toggleSticky))
				}
				componentWillUnmount() {
					this.props.isCategoryPage && (window.removeEventListener("orientationchange", this.toggleSticky), window.removeEventListener("resize", this.toggleSticky), window.removeEventListener("scroll", this.toggleSticky))
				}
				render() {
					const {
						innerRef: e,
						isResponsiveSettingsEnabled: t,
						onTouchMove: n
					} = this.props, r = Object(c.a)({
						[b.a.mResponsive]: t
					});
					return s.a.createElement(T, {
						className: Object(c.a)(r, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, s.a.createElement(v, {
						className: Object(c.a)(r, {
							[b.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, C(this.props.icon), this.props.title), s.a.createElement(x, {
						className: Object(c.a)(r, {
							[b.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? w : void 0
					}, this.props.children))
				}
			}
			t.c = S
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-helmet/es/Helmet.js"),
				a = n("./node_modules/react-redux/es/index.js"),
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
					return Object(l.b)(this.props.badgeCount > 0), o.a.createElement(i.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(a.b)(u)(p)
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				s = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(i.a)(s.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, o.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/pages/NotificationsInbox/NavBar/index.m.less": function(e, t, n) {
			e.exports = {
				navContainer: "_12OY7TkUMEzB4Dcb45flW4",
				navHeader: "_2LFc4YaOIyX_CuErU3hk7i",
				navBar: "_3C3k7jI3ZTmLbJfMRgwMp0",
				Tab: "_2yqeFE_vFRXsXeI8F0no7I",
				tab: "_2yqeFE_vFRXsXeI8F0no7I",
				Badge: "EHcqVS0S_Zy4T26UTcl95",
				badge: "EHcqVS0S_Zy4T26UTcl95",
				navLink: "_2AmngOKrvLvv8AgoVNkerf",
				Gear: "_1-OQiyZa9rGijwU8SjAbUC",
				gear: "_1-OQiyZa9rGijwU8SjAbUC",
				MarkAsRead: "P4zM8oVx2ZbSz4I2pyce_",
				markAsRead: "P4zM8oVx2ZbSz4I2pyce_"
			}
		},
		"./src/reddit/pages/NotificationsInbox/index.m.less": function(e, t, n) {
			e.exports = {
				contentClassName: "_3fT9oQmQ-SzBAXvVS2nTCd"
			}
		},
		"./src/reddit/pages/NotificationsInbox/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/pageTitle.ts"),
				a = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				s = n("./src/reddit/components/TitleTagManager/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/layout/page/Listing/index.tsx"),
				u = n("./node_modules/react-redux/es/index.js"),
				p = n("./node_modules/reselect/es/index.js"),
				m = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				f = n("./src/reddit/actions/notificationsInbox/index.ts"),
				h = n("./src/reddit/actions/tooltip.ts"),
				b = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				g = n("./src/lib/lessComponent.tsx"),
				y = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				v = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				T = n("./src/reddit/helpers/trackers/inbox.ts"),
				x = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx"),
				E = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				C = n.n(E);
			const O = "",
				_ = .5,
				w = g.a.span("divider", C.a),
				S = g.a.wrapped(y.a, "NotificationUnit", C.a);
			class j extends o.a.Component {
				constructor() {
					super(...arguments), this.earlierDividerNotificationId = O, this.todayDividerNotificationId = O, this.fetchNotifications = e => {
						const {
							cursor: t
						} = this.props;
						e.isIntersecting && t && this.props.fetchNotifications({
							after: t,
							first: 10
						})
					}, this.renderNotificationItem = e => o.a.createElement(S, {
						activeOverflowMenuId: this.props.activeOverflowMenuId,
						disableMessageTypeNotifications: this.props.disableMessageTypeNotifications,
						disableNotificationUpdates: this.props.disableNotificationUpdates,
						hideNotification: this.props.hideNotification,
						hideSubredditNotifications: this.props.hideSubredditNotifications,
						isInboxPostEmbedEnabled: this.props.isInboxPostEmbedEnabled,
						key: e.id,
						markNotificationAsRead: this.props.markNotificationAsRead,
						notification: e,
						setActiveOverflowMenuId: this.props.setActiveOverflowMenuId
					}), this.renderNotifications = () => {
						const {
							earlierNotifications: e,
							todayNotifications: t
						} = this.props, n = !(!e || !e.length), r = !(!t || !t.length);
						return o.a.createElement(o.a.Fragment, null, r && o.a.createElement(w, null, "Today"), r && o.a.createElement("ul", null, t.map(this.renderNotificationItem)), n && o.a.createElement(w, null, "Earlier"), n && o.a.createElement("ul", null, e && e.map(this.renderNotificationItem)))
					}
				}
				componentDidMount() {
					this.props.updateInboxActivitySeenState(), this.props.sendEvent(Object(T.l)({
						badgeCount: this.props.inboxBadgeCount,
						tab: T.c.Activity
					}))
				}
				render() {
					const {
						hasNextPage: e,
						earlierNotifications: t,
						isPending: n,
						todayNotifications: r
					} = this.props, i = !!((t && t.length || 0) + (r && r.length));
					return o.a.createElement("div", {
						className: C.a.notificationsContainer
					}, !i && n && o.a.createElement(v.a, null), !i && !n && o.a.createElement(x.a, null), i && this.renderNotifications(), i && !n && e && o.a.createElement(b.a, {
						onChange: this.fetchNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: _
					}, o.a.createElement("div", null)))
				}
			}
			var N = Object(c.c)(j),
				A = n("./src/reddit/selectors/appBadges.ts"),
				k = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				I = n("./src/reddit/selectors/notificationsInbox.tsx"),
				P = n("./src/reddit/selectors/tooltip.ts");
			const L = Object(p.c)({
				activeOverflowMenuId: P.a,
				cursor: I.c,
				earlierNotifications: I.b,
				hasNextPage: I.d,
				inboxBadgeCount: A.h,
				isInboxPostEmbedEnabled: k.c,
				isPending: I.e,
				todayNotifications: I.h
			});
			var M = Object(u.b)(L, e => ({
					clearMessageTabBadgeCount: () => e(Object(m.b)()),
					disableMessageTypeNotifications: (t, n) => e(Object(f.b)(t, n)),
					disableNotificationUpdates: t => e(Object(f.c)(t)),
					fetchNotifications: t => e(Object(f.d)(t)),
					hideNotification: t => e(Object(f.a)(t)),
					hideSubredditNotifications: (t, n) => e(Object(f.f)(t, n)),
					markNotificationAsRead: (t, n) => e(Object(f.h)(t, n)),
					setActiveOverflowMenuId: t => {
						e(Object(h.h)({
							tooltipId: t
						}))
					},
					updateInboxActivitySeenState: () => e(Object(f.i)())
				}))(N),
				R = n("./node_modules/fbt/lib/FbtPublic.js"),
				F = n("./src/reddit/components/BadgeCounter/index.tsx"),
				B = n("./src/reddit/components/TabNav/index.tsx"),
				H = n("./src/reddit/controls/InternalLink/index.tsx"),
				U = n("./src/reddit/hooks/useTracking.ts"),
				W = n("./src/reddit/icons/svgs/MarkAsRead/index.tsx"),
				D = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				q = n("./src/reddit/pages/NotificationsInbox/NavBar/index.m.less"),
				z = n.n(q);
			const G = g.a.wrapped(F.a, "Badge", z.a),
				Q = g.a.wrapped(D.a, "Gear", z.a),
				J = g.a.wrapped(W.a, "MarkAsRead", z.a),
				Y = g.a.wrapped(B.a, "Tab", z.a);
			var K = e => {
				const {
					isInboxMarkAllAsReadEnabled: t,
					messagesTabBadgeCount: n,
					notificationsTabBadgeCount: r
				} = e, i = Object(U.a)(), a = !!n;
				return o.a.createElement("div", {
					className: z.a.navContainer
				}, o.a.createElement("h1", {
					className: z.a.navHeader
				}, R.fbt._("Notifications", null, {
					hk: "18kEAD"
				})), o.a.createElement("nav", {
					className: z.a.navBar
				}, o.a.createElement("ul", null, o.a.createElement("li", null, o.a.createElement(Y, {
					active: !0,
					to: "/notifications"
				}, R.fbt._("Activity", null, {
					hk: "24wHCv"
				})), o.a.createElement(G, {
					isActive: !!r,
					unreadCount: r
				})), o.a.createElement("li", null, o.a.createElement(Y, {
					active: !1,
					onMouseDown: () => {
						i(Object(T.l)({
							badgeCount: n + r,
							tab: T.c.Messages
						})), e.clearMessageTabBadgeCount()
					},
					to: a ? "/message/unread" : "/message/messages"
				}, R.fbt._("Messages", null, {
					hk: "Xl3Wz"
				})), o.a.createElement(G, {
					isActive: a,
					unreadCount: n
				})), t && o.a.createElement("li", null, o.a.createElement("button", {
					className: z.a.navLink,
					onClick: () => {
						e.markAllAsRead(), i(Object(T.d)({
							isMiniInbox: !1
						}))
					}
				}, o.a.createElement(J, null), R.fbt._("Mark as read", null, {
					hk: "3IycES"
				}))), o.a.createElement("li", null, o.a.createElement(H.a, {
					className: z.a.navLink,
					onClick: () => i(Object(T.j)(T.a.Inbox)),
					to: "/settings/notifications"
				}, o.a.createElement(Q, null), R.fbt._("Settings", null, {
					hk: "1e9Jn"
				}))))))
			};
			const X = Object(p.c)({
				isInboxMarkAllAsReadEnabled: k.b,
				messagesTabBadgeCount: A.i,
				notificationsTabBadgeCount: A.a
			});
			var V = Object(u.b)(X, e => ({
					clearMessageTabBadgeCount: () => e(Object(m.b)()),
					markAllAsRead: () => e(Object(f.g)())
				}))(e => o.a.createElement(K, e)),
				Z = n("./src/reddit/pages/NotificationsInbox/index.m.less"),
				$ = n.n(Z);
			const ee = Object(l.t)();
			class te extends o.a.Component {
				render() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(s.a, {
						title: Object(i.e)().toString()
					}), o.a.createElement(a.a, null, o.a.createElement(d.a, {
						contentClassName: $.a.contentClassName,
						content: o.a.createElement(M, null),
						disableFullscreen: !0,
						navBar: o.a.createElement(V, null)
					})))
				}
			}
			t.default = ee(Object(c.c)(te))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsInbox.5089f0ec13fc27562929.js.map