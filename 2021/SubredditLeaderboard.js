// https://www.redditstatic.com/desktop2x/SubredditLeaderboard.ddb330b61a801dea73f1.js
// Retrieved at 3/11/2021, 5:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditLeaderboard"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_copyArray.js"),
				a = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return a(r(e))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_shuffleSelf.js"),
				a = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return r(a(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					a = e.length,
					s = a - 1;
				for (t = void 0 === t ? a : t; ++n < t;) {
					var o = r(n, s),
						i = e[o];
					e[o] = e[n], e[n] = i
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayShuffle.js"),
				a = n("./node_modules/lodash/_baseShuffle.js"),
				s = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (s(e) ? r : a)(e)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				a = n("./node_modules/lodash/_castFunction.js"),
				s = n("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				i = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = s(e)) < 1 || e > o) return [];
				var n = i,
					c = d(e, i);
				t = a(t), e -= i;
				for (var l = r(c, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/react-helmet/es/Helmet.js": function(e, t, n) {
			"use strict";
			(function(e) {
				var r, a, s, o, i = n("./node_modules/react-helmet/node_modules/prop-types/index.js"),
					d = n.n(i),
					c = n("./node_modules/react-side-effect/lib/index.js"),
					l = n.n(c),
					u = n("./node_modules/react-fast-compare/index.js"),
					m = n.n(u),
					p = n("./node_modules/react/index.js"),
					g = n.n(p),
					h = n("./node_modules/object-assign/index.js"),
					b = n.n(h),
					f = "bodyAttributes",
					y = "htmlAttributes",
					C = "titleAttributes",
					k = {
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
					E = (Object.keys(k).map((function(e) {
						return k[e]
					})), "charset"),
					_ = "cssText",
					v = "href",
					x = "http-equiv",
					S = "innerHTML",
					T = "itemprop",
					O = "name",
					w = "property",
					j = "rel",
					N = "src",
					P = "target",
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
					L = "defaultTitle",
					A = "defer",
					R = "encodeSpecialCharacters",
					B = "onChangeClientState",
					F = "titleTemplate",
					D = Object.keys(I).reduce((function(e, t) {
						return e[I[t]] = t, e
					}), {}),
					W = [k.NOSCRIPT, k.SCRIPT, k.STYLE],
					M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					H = function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					},
					G = function() {
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
					U = function(e, t) {
						var n = {};
						for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
						return n
					},
					Q = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					},
					Y = function(e) {
						var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
					},
					K = function(e) {
						var t = X(e, k.TITLE),
							n = X(e, F);
						if (n && t) return n.replace(/%s/g, (function() {
							return Array.isArray(t) ? t.join("") : t
						}));
						var r = X(e, L);
						return t || r || void 0
					},
					V = function(e) {
						return X(e, B) || function() {}
					},
					J = function(e, t) {
						return t.filter((function(t) {
							return void 0 !== t[e]
						})).map((function(t) {
							return t[e]
						})).reduce((function(e, t) {
							return q({}, e, t)
						}), {})
					},
					z = function(e, t) {
						return t.filter((function(e) {
							return void 0 !== e[k.BASE]
						})).map((function(e) {
							return e[k.BASE]
						})).reverse().reduce((function(t, n) {
							if (!t.length)
								for (var r = Object.keys(n), a = 0; a < r.length; a++) {
									var s = r[a].toLowerCase();
									if (-1 !== e.indexOf(s) && n[s]) return t.concat(n)
								}
							return t
						}), [])
					},
					Z = function(e, t, n) {
						var r = {};
						return n.filter((function(t) {
							return !!Array.isArray(t[e]) || (void 0 !== t[e] && re("Helmet: " + e + ' should be of type "Array". Instead found type "' + M(t[e]) + '"'), !1)
						})).map((function(t) {
							return t[e]
						})).reverse().reduce((function(e, n) {
							var a = {};
							n.filter((function(e) {
								for (var n = void 0, s = Object.keys(e), o = 0; o < s.length; o++) {
									var i = s[o],
										d = i.toLowerCase(); - 1 === t.indexOf(d) || n === j && "canonical" === e[n].toLowerCase() || d === j && "stylesheet" === e[d].toLowerCase() || (n = d), -1 === t.indexOf(i) || i !== S && i !== _ && i !== T || (n = i)
								}
								if (!n || !e[n]) return !1;
								var c = e[n].toLowerCase();
								return r[n] || (r[n] = {}), a[n] || (a[n] = {}), !r[n][c] && (a[n][c] = !0, !0)
							})).reverse().forEach((function(t) {
								return e.push(t)
							}));
							for (var s = Object.keys(a), o = 0; o < s.length; o++) {
								var i = s[o],
									d = b()({}, r[i], a[i]);
								r[i] = d
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
					ae = null,
					se = function(e, t) {
						var n = e.baseTag,
							r = e.bodyAttributes,
							a = e.htmlAttributes,
							s = e.linkTags,
							o = e.metaTags,
							i = e.noscriptTags,
							d = e.onChangeClientState,
							c = e.scriptTags,
							l = e.styleTags,
							u = e.title,
							m = e.titleAttributes;
						de(k.BODY, r), de(k.HTML, a), ie(u, m);
						var p = {
								baseTag: ce(k.BASE, n),
								linkTags: ce(k.LINK, s),
								metaTags: ce(k.META, o),
								noscriptTags: ce(k.NOSCRIPT, i),
								scriptTags: ce(k.SCRIPT, c),
								styleTags: ce(k.STYLE, l)
							},
							g = {},
							h = {};
						Object.keys(p).forEach((function(e) {
							var t = p[e],
								n = t.newTags,
								r = t.oldTags;
							n.length && (g[e] = n), r.length && (h[e] = p[e].oldTags)
						})), t && t(), d(e, g, h)
					},
					oe = function(e) {
						return Array.isArray(e) ? e.join("") : e
					},
					ie = function(e, t) {
						void 0 !== e && document.title !== e && (document.title = oe(e)), de(k.TITLE, t)
					},
					de = function(e, t) {
						var n = document.getElementsByTagName(e)[0];
						if (n) {
							for (var r = n.getAttribute("data-react-helmet"), a = r ? r.split(",") : [], s = [].concat(a), o = Object.keys(t), i = 0; i < o.length; i++) {
								var d = o[i],
									c = t[d] || "";
								n.getAttribute(d) !== c && n.setAttribute(d, c), -1 === a.indexOf(d) && a.push(d);
								var l = s.indexOf(d); - 1 !== l && s.splice(l, 1)
							}
							for (var u = s.length - 1; u >= 0; u--) n.removeAttribute(s[u]);
							a.length === s.length ? n.removeAttribute("data-react-helmet") : n.getAttribute("data-react-helmet") !== o.join(",") && n.setAttribute("data-react-helmet", o.join(","))
						}
					},
					ce = function(e, t) {
						var n = document.head || document.querySelector(k.HEAD),
							r = n.querySelectorAll(e + "[data-react-helmet]"),
							a = Array.prototype.slice.call(r),
							s = [],
							o = void 0;
						return t && t.length && t.forEach((function(t) {
							var n = document.createElement(e);
							for (var r in t)
								if (t.hasOwnProperty(r))
									if (r === S) n.innerHTML = t.innerHTML;
									else if (r === _) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
							else {
								var i = void 0 === t[r] ? "" : t[r];
								n.setAttribute(r, i)
							}
							n.setAttribute("data-react-helmet", "true"), a.some((function(e, t) {
								return o = t, n.isEqualNode(e)
							})) ? a.splice(o, 1) : s.push(n)
						})), a.forEach((function(e) {
							return e.parentNode.removeChild(e)
						})), s.forEach((function(e) {
							return n.appendChild(e)
						})), {
							oldTags: a,
							newTags: s
						}
					},
					le = function(e) {
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
					me = function(e, t, n) {
						switch (e) {
							case k.TITLE:
								return {
									toComponent: function() {
										return e = t.title, n = t.titleAttributes, (r = {
											key: e
										})["data-react-helmet"] = !0, a = ue(n, r), [g.a.createElement(k.TITLE, a, e)];
										var e, n, r, a
									}, toString: function() {
										return function(e, t, n, r) {
											var a = le(n),
												s = oe(t);
											return a ? "<" + e + ' data-react-helmet="true" ' + a + ">" + Y(s, r) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + Y(s, r) + "</" + e + ">"
										}(e, t.title, t.titleAttributes, n)
									}
								};
							case f:
							case y:
								return {
									toComponent: function() {
										return ue(t)
									}, toString: function() {
										return le(t)
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
													var n = I[e] || e;
													if (n === S || n === _) {
														var r = t.innerHTML || t.cssText;
														a.dangerouslySetInnerHTML = {
															__html: r
														}
													} else a[n] = t[e]
												})), g.a.createElement(e, a)
											}))
										}(e, t)
									}, toString: function() {
										return function(e, t, n) {
											return t.reduce((function(t, r) {
												var a = Object.keys(r).filter((function(e) {
														return !(e === S || e === _)
													})).reduce((function(e, t) {
														var a = void 0 === r[t] ? t : t + '="' + Y(r[t], n) + '"';
														return e ? e + " " + a : a
													}), ""),
													s = r.innerHTML || r.cssText || "",
													o = -1 === W.indexOf(e);
												return t + "<" + e + ' data-react-helmet="true" ' + a + (o ? "/>" : ">" + s + "</" + e + ">")
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
							s = e.linkTags,
							o = e.metaTags,
							i = e.noscriptTags,
							d = e.scriptTags,
							c = e.styleTags,
							l = e.title,
							u = void 0 === l ? "" : l,
							m = e.titleAttributes;
						return {
							base: me(k.BASE, t, r),
							bodyAttributes: me(f, n, r),
							htmlAttributes: me(y, a, r),
							link: me(k.LINK, s, r),
							meta: me(k.META, o, r),
							noscript: me(k.NOSCRIPT, i, r),
							script: me(k.SCRIPT, d, r),
							style: me(k.STYLE, c, r),
							title: me(k.TITLE, {
								title: u,
								titleAttributes: m
							}, r)
						}
					},
					ge = l()((function(e) {
						return {
							baseTag: z([v, P], e),
							bodyAttributes: J(f, e),
							defer: X(e, A),
							encode: X(e, R),
							htmlAttributes: J(y, e),
							linkTags: Z(k.LINK, [j, v], e),
							metaTags: Z(k.META, [O, E, x, w, T], e),
							noscriptTags: Z(k.NOSCRIPT, [S], e),
							onChangeClientState: V(e),
							scriptTags: Z(k.SCRIPT, [N, S], e),
							styleTags: Z(k.STYLE, [_], e),
							title: K(e),
							titleAttributes: J(C, e)
						}
					}), (function(e) {
						ae && ne(ae), e.defer ? ae = te((function() {
							se(e, (function() {
								ae = null
							}))
						})) : (se(e), ae = null)
					}), pe)((function() {
						return null
					})),
					he = (a = ge, o = s = function(e) {
						function t() {
							return H(this, t), Q(this, e.apply(this, arguments))
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
								case k.SCRIPT:
								case k.NOSCRIPT:
									return {
										innerHTML: t
									};
								case k.STYLE:
									return {
										cssText: t
									}
							}
							throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
						}, t.prototype.flattenArrayTypeChildren = function(e) {
							var t, n = e.child,
								r = e.arrayTypeChildren,
								a = e.newChildProps,
								s = e.nestedChildren;
							return q({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [q({}, a, this.mapNestedChildrenToProps(n, s))]), t))
						}, t.prototype.mapObjectTypeChildren = function(e) {
							var t, n, r = e.child,
								a = e.newProps,
								s = e.newChildProps,
								o = e.nestedChildren;
							switch (r.type) {
								case k.TITLE:
									return q({}, a, ((t = {})[r.type] = o, t.titleAttributes = q({}, s), t));
								case k.BODY:
									return q({}, a, {
										bodyAttributes: q({}, s)
									});
								case k.HTML:
									return q({}, a, {
										htmlAttributes: q({}, s)
									})
							}
							return q({}, a, ((n = {})[r.type] = q({}, s), n))
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
							return g.a.Children.forEach(e, (function(e) {
								if (e && e.props) {
									var a = e.props,
										s = a.children,
										o = function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											return Object.keys(e).reduce((function(t, n) {
												return t[D[n] || n] = e[n], t
											}), t)
										}(U(a, ["children"]));
									switch (n.warnOnInvalidChildren(e, s), e.type) {
										case k.LINK:
										case k.META:
										case k.NOSCRIPT:
										case k.SCRIPT:
										case k.STYLE:
											r = n.flattenArrayTypeChildren({
												child: e,
												arrayTypeChildren: r,
												newChildProps: o,
												nestedChildren: s
											});
											break;
										default:
											t = n.mapObjectTypeChildren({
												child: e,
												newProps: t,
												newChildProps: o,
												nestedChildren: s
											})
									}
								}
							})), t = this.mapArrayTypeChildrenToProps(r, t)
						}, t.prototype.render = function() {
							var e = this.props,
								t = e.children,
								n = U(e, ["children"]),
								r = q({}, n);
							return t && (r = this.mapChildrenToProps(t, r)), g.a.createElement(a, r)
						}, G(t, null, [{
							key: "canUseDOM",
							set: function(e) {
								a.canUseDOM = e
							}
						}]), t
					}(g.a.Component), s.propTypes = {
						base: d.a.object,
						bodyAttributes: d.a.object,
						children: d.a.oneOfType([d.a.arrayOf(d.a.node), d.a.node]),
						defaultTitle: d.a.string,
						defer: d.a.bool,
						encodeSpecialCharacters: d.a.bool,
						htmlAttributes: d.a.object,
						link: d.a.arrayOf(d.a.object),
						meta: d.a.arrayOf(d.a.object),
						noscript: d.a.arrayOf(d.a.object),
						onChangeClientState: d.a.func,
						script: d.a.arrayOf(d.a.object),
						style: d.a.arrayOf(d.a.object),
						title: d.a.string,
						titleAttributes: d.a.object,
						titleTemplate: d.a.string
					}, s.defaultProps = {
						defer: !0,
						encodeSpecialCharacters: !0
					}, s.peek = a.peek, s.rewind = function() {
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
					}, o);
				he.renderStatic = he.rewind, t.a = he
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function a() {}

			function s() {}
			s.resetWarningCache = a, e.exports = function() {
				function e(e, t, n, a, s, o) {
					if (o !== r) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
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
				s = (r = a) && "object" == typeof r && "default" in r ? r.default : r;

			function o(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
				if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
				if (void 0 !== n && "function" != typeof n) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
				return function(r) {
					if ("function" != typeof r) throw new Error("Expected WrappedComponent to be a React component.");
					var d, c = [];

					function l() {
						d = e(c.map((function(e) {
							return e.props
						}))), u.canUseDOM ? t(d) : n && (d = n(d))
					}
					var u = function(e) {
						var t, n;

						function a() {
							return e.apply(this, arguments) || this
						}
						n = e, (t = a).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, a.peek = function() {
							return d
						}, a.rewind = function() {
							if (a.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
							var e = d;
							return d = void 0, c = [], e
						};
						var o = a.prototype;
						return o.UNSAFE_componentWillMount = function() {
							c.push(this), l()
						}, o.componentDidUpdate = function() {
							l()
						}, o.componentWillUnmount = function() {
							var e = c.indexOf(this);
							c.splice(e, 1), l()
						}, o.render = function() {
							return s.createElement(r, this.props)
						}, a
					}(a.PureComponent);
					return o(u, "displayName", "SideEffect(" + function(e) {
						return e.displayName || e.name || "Component"
					}(r) + ")"), o(u, "canUseDOM", i), u
				}
			}
		},
		"./src/graphql/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"26ddd553d11e"}')
		},
		"./src/graphql/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"bc611d08f6ef"}')
		},
		"./src/reddit/actions/pages/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "checkIsModCategory", (function() {
				return g
			})), n.d(t, "subredditLeaderboardPageRequested", (function() {
				return h
			})), n.d(t, "subredditLeaderboardPageDataRequested", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/actions/category/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				s = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				o = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/constants/listings.ts"),
				d = n("./src/reddit/constants/subredditLeaderboard.ts"),
				c = n("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				l = n("./src/reddit/models/GoodContent/index.ts"),
				u = n("./src/reddit/selectors/category.ts"),
				m = n("./src/reddit/selectors/subredditLeaderboard.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const g = (e, t) => t && e === d.m,
				h = e => async (t, n) => {
					t(Object(a.k)({
						actionSource: a.a.SubredditLeaderboard,
						redirectUrl: i.c[i.b.SubredditLeaderboard]
					}));
					const r = e.params && e.params.categoryName,
						s = r && Object(c.b)(r);
					await t(b(s))
				}, b = e => async (t, n) => {
					await t(Object(r.a)());
					const a = n(),
						i = Object(p.L)(a);
					if (Object(m.a)(a, e)) return;
					const c = e && Object(u.f)(a, {
							categoryName: e
						}),
						h = e === d.j ? d.i : c && c.id || d.e,
						b = ((e, t) => ({
							categoryId: e,
							filter: l.a,
							isOnlyModIncluded: t
						}))(h, g(e, i)),
						f = Object(m.d)(h, e);
					await Promise.all([t(Object(s.a)(b, f)), t(Object(o.r)())])
				}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/subreddit/constants.ts"),
				s = n("./src/reddit/constants/subredditLeaderboard.ts"),
				o = n("./src/reddit/endpoints/subreddit/local.ts"),
				i = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				d = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const c = Object(r.a)(a.n),
				l = Object(r.a)(a.m),
				u = Object(r.a)(a.l),
				m = Object(r.a)(a.a),
				p = Object(r.a)(a.b),
				g = Object(r.a)(a.c),
				h = (e, t) => async (n, r, {
					gqlContext: a
				}) => {
					n(c());
					const h = t === s.i ? async function() {
						const t = await Object(o.a)(a(), e);
						if (!t.ok) {
							const e = t.error;
							return n(u({
								error: e
							})), null
						}
						const r = t.body,
							s = r && r.data && r.data.nearbySubreddits;
						return Object(d.a)(s)
					}: async function() {
						const t = await Object(i.a)(a(), e);
						if (!t.ok) {
							const e = t.error;
							return void n(u({
								error: e
							}))
						}
						const r = t.body,
							s = r && r.data && r.data.subredditLeaderboard;
						return Object(d.b)(s)
					}, b = await h();
					if (!b) return;
					const {
						pageInfo: f,
						rankings: y,
						subreddits: C
					} = b;
					n(m({
						subreddits: C
					})), n(p({
						categoryRankingsKey: t,
						rankings: y
					})), n(g({
						categoryRankingsKey: t,
						pageInfo: f
					})), n(l())
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CategoryPickerWidget/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Le71sZe40-ak2-JlezTO9",
				header: "_1xEfG7rp7vrKfyvMhw4d7B",
				categoryList: "_2TokM04UC_UEG0cmYY5zqV",
				expanded: "H2nL15newZjevdZ9kmsw6",
				categoryLink: "_3p0xqZowgYYjYMOdinU151",
				active: "_1eQr_TkUOm6M6XqM8GTZqp",
				button: "_36EQoGTqXwZI27n50gESaC"
			}
		},
		"./src/reddit/components/CommunitiesDirectoryWidget/index.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_36_8mPRaeDNCpkQ5-w8TS9",
				widget: "_36_8mPRaeDNCpkQ5-w8TS9",
				LinkContainer: "_65zQcMEUkFZAyLyrKPlA0",
				linkContainer: "_65zQcMEUkFZAyLyrKPlA0",
				Title: "oaSSd7FLyCKYFcVrHeOpC",
				title: "oaSSd7FLyCKYFcVrHeOpC",
				Link: "_1EnYMKlnIu6EN56KYszO66",
				link: "_1EnYMKlnIu6EN56KYszO66"
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SidebarContainer/index.m.less"),
				s = n.n(a);
			t.a = r.a.div("container", s.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/components/SidebarFooter/index.m.less"),
				c = n.n(d);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = s.a.a("Link", c.a), m = Object(i.t)({
				isFrontpage: i.y
			});
			t.a = m(e => a.a.createElement(o.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, a.a.createElement("div", {
				className: c.a.LinkContainer
			}, a.a.createElement("div", {
				className: c.a.Column
			}, a.a.createElement(u, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), a.a.createElement(u, {
				href: "https://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && a.a.createElement(a.a.Fragment, null, a.a.createElement(u, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/posts/2020/"
			}, l._("Rereddit", null, {
				hk: "1z3k7C"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), a.a.createElement("div", {
				className: c.a.Column
			}, a.a.createElement(u, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), a.a.createElement(u, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), a.a.createElement(u, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), a.a.createElement(u, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), a.a.createElement(u, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), a.a.createElement(u, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), a.a.createElement(u, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), a.a.createElement(u, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), a.a.createElement("div", {
				className: c.a.Copyright
			}, l._("Reddit Inc © {year}. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				a = n.n(r),
				s = n("./src/lib/lessComponent.tsx");
			t.a = s.a.div("Component", a.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/lodash/throttle.js"),
				s = n.n(a),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/BackToTop/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var p = e => i.a.createElement("div", {
					className: Object(r.a)(e.className, u.a.container),
					style: e.style
				}, i.a.createElement(c.i, {
					className: u.a.button,
					onClick: () => window.scroll(0, 0)
				}, m._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				g = n("./src/reddit/components/SidebarFooter/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				y = n.n(f),
				C = n("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = d.e[1] + 24,
				_ = h.f + 8 + 152 + 16,
				v = _ + E + 8,
				x = C.a.div("Container", y.a),
				S = C.a.wrapped(({
					className: e,
					...t
				}) => i.a.createElement(p, k({
					className: e,
					style: {
						top: "calc(100vh - 8px)"
					}
				}, t)), "BackToTop", y.a),
				T = ({
					children: e,
					className: t,
					isFakeOverlay: n,
					isSticky: a
				}) => i.a.createElement("div", {
					className: Object(r.a)(t, {
						[y.a.StickyStyles]: a && !n,
						[y.a.StickyStylesFakeOverlay]: !!n
					})
				}, e);
			class O extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
						shouldFooterSticky: this.windowHeight > _
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = s()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.G), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							adComponentOnFakeOverlay: t,
							children: n,
							className: r,
							hideFooter: a
						}
					} = this, s = this.state.isAdSticky && !(!e && !n);
					return i.a.createElement(x, {
						className: r,
						innerRef: this.setWrapperRef
					}, i.a.createElement(T, {
						isFakeOverlay: t,
						isSticky: s
					}, e, n, !a && i.a.createElement(g.a, null)), !this.props.hideBackToTop && i.a.createElement(S, null))
				}
			}
			const w = Object(b.t)();
			t.a = w(O)
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
				a = n.n(r),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				g = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				y = n("./src/reddit/selectors/userPrefs.ts"),
				C = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				k = n.n(C);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = u.a.div("BladeContainer", k.a), v = u.a.wrapped(h.a, "CloseIcon", k.a), x = u.a.div("LoadingTitleContainer", k.a), S = u.a.div("LoadingNavContainer", k.a), T = u.a.div("ShortLoadingNav", k.a), O = u.a.wrapped(g.a, "ThemedChevron", k.a), w = ({
				...e
			}) => o.a.createElement(_, null, o.a.createElement(v, null), o.a.createElement(p.k, null, o.a.createElement(p.p, null, E._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), o.a.createElement(p.o, null, o.a.createElement(x, null, o.a.createElement("div", {
				className: Object(l.a)(k.a.LoadingTitle, e.isLoading && k.a.loading)
			})), o.a.createElement(S, null, o.a.createElement("div", {
				className: Object(l.a)(k.a.LoadingNav, e.isLoading && k.a.loading)
			}), o.a.createElement(O, null)), o.a.createElement(S, null, o.a.createElement(T, null), o.a.createElement(O, null)), o.a.createElement(S, null, o.a.createElement("div", {
				className: Object(l.a)(k.a.LoadingNav, e.isLoading && k.a.loading)
			}), o.a.createElement(O, null)), o.a.createElement(S, null, o.a.createElement(T, null), o.a.createElement(O, null)), o.a.createElement(S, null, o.a.createElement("div", {
				className: Object(l.a)(k.a.LoadingNav, e.isLoading && k.a.loading)
			}), o.a.createElement(O, null))))), j = Object(c.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(w, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(w, {
					gradientType: "posts",
					isLoading: !0
				})
			}), N = Object(d.c)({
				isEditing: f.i,
				isSubscriptionsPinned: y.b,
				moderatorPermissions: b.i
			});
			t.a = Object(i.b)(N)(e => {
				const t = e.moderatorPermissions && a()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(k.a.Container, e.isSubscriptionsPinned && k.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(j, {
					subredditId: e.subredditId
				})) : o.a.createElement(s.Fragment, null, e.children)
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
				return o
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return d
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "j", (function() {
				return E
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(a);
			const o = r.a.section("FormPage", s.a),
				i = r.a.h1("HomePageTitle", s.a),
				d = r.a.button("HomePageBreadcrumb", s.a),
				c = r.a.div("HomePageGroup", s.a),
				l = r.a.h1("FormPageTitle", s.a),
				u = r.a.div("FormPageSection", s.a),
				m = r.a.div("FormGroup", s.a),
				p = r.a.h2("FormGroupTitle", s.a),
				g = r.a.div("FormElement", s.a),
				h = r.a.div("FormGroupDescription", s.a),
				b = r.a.div("FormItem", s.a),
				f = r.a.h3("FormElementTitle", s.a),
				y = r.a.div("FormElementDescription", s.a),
				C = r.a.div("FormElementError", s.a),
				k = r.a.div("FormElementSubGroup", s.a),
				E = r.a.li("FormListItem", s.a)
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-helmet/es/Helmet.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/pageTitle.ts"),
				c = n("./src/reddit/helpers/tabBadging/index.ts"),
				l = n("./src/reddit/selectors/appBadges.ts");
			const u = Object(i.a)(l.c, e => ({
				badgeCount: e
			}));
			class m extends r.Component {
				constructor() {
					super(...arguments), this.title = Object(d.c)().toString(), this.state = {
						badgeCount: 0
					}
				}
				getTitle() {
					const e = this.props.title.length > 0 ? this.props.title : Object(d.c)().toString(),
						t = this.props.badgeCount >= 100 ? "99+" : this.props.badgeCount;
					return this.props.badgeCount > 0 ? `(${t}) ${this.props.title}` : e
				}
				render() {
					return Object(c.b)(this.props.badgeCount > 0), a.a.createElement(s.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(o.b)(u)(m)
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/constants/subredditLeaderboard.ts"),
				d = n("./src/reddit/contexts/ApiContext.tsx"),
				c = n("./src/reddit/endpoints/subreddit/local.ts"),
				l = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				m = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				p = n("./src/reddit/models/GoodContent/index.ts");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = async (e, t) => {
				const n = await Object(l.a)(e, t);
				if (n && n.ok) {
					const e = n.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(u.c)(t)
				}
			};
			class b extends a.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, n, r) => {
						this.props.sendEvent(Object(m.c)(e, t, n, r)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, n, r)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						n = this.props && this.props.category && this.props.category.id,
						r = this.props.category && this.props.category.name;
					t !== n && r && !this.state[r] && this.fetchTopSubreddits()
				}
				async fetchTopSubreddits() {
					const {
						category: e,
						first: t
					} = this.props, n = e && e.id;
					if (n !== i.i)(n || n === i.e) && h(this.props.gqlContext(), {
						categoryId: n,
						filter: p.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							n = e && e.subreddits,
							r = this.props.category && this.props.category.name || i.b;
						t && n && this.setState(e => ({
							...e,
							[r]: {
								rankings: t,
								subreddits: n
							}
						}))
					}).catch(e => console.error("Error >>>", e));
					else {
						const e = await async function(e, t) {
							const n = await Object(c.a)(e, t);
							if (n && n.ok) {
								const e = n.body,
									t = e && e.data && e.data.nearbySubreddits;
								return Object(u.a)(t)
							}
						}(this.props.gqlContext(), {
							first: t
						});
						if (!e) return;
						const {
							rankings: n,
							subreddits: r
						} = e;
						this.setState(e => ({
							...e,
							[i.j]: {
								rankings: n,
								subreddits: r
							}
						}))
					}
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, n = t || i.b, r = this.state[n], o = r ? r.rankings : [], d = r ? r.subreddits : {}, c = o && o[0] && o[0].id, l = d && d[c], u = !(l && l.isNSFW) || this.props.isOver18;
					return a.a.createElement(s.b, g({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: o,
						shouldDisplayBannerImg: u,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: d
					}, this.props))
				}
			}
			t.a = Object(d.b)(Object(o.c)(b))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/icons/svgs/Triangle/index.tsx"),
				g = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				h = n.n(g);
			const b = e => s.a.createElement(s.a.Fragment, null, s.a.createElement(l.b, {
					className: h.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), s.a.createElement("span", {
					className: h.a.subredditDetailsContainer
				}, e.large ? s.a.createElement(c.a, {
					subredditName: e.subreddit.name
				}, s.a.createElement("span", {
					className: h.a.regularText
				}, e.subreddit.displayText)) : s.a.createElement("span", {
					className: h.a.regularText
				}, e.subreddit.displayText), null === e.rank && s.a.createElement("span", {
					className: h.a.smallText
				}, r.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				f = e => {
					const t = Object(u.a)(),
						n = Object(i.a)(h.a.subredditRankItem, e.large && h.a.large),
						r = e.delta && e.delta > 0,
						a = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(d.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						c = e.delta ? r ? "#46D160" : "#EA0027" : "transparent";
					return s.a.createElement("li", {
						className: h.a.listItem,
						key: e.subreddit.displayText
					}, s.a.createElement(o.a, {
						className: n,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, s.a.createElement("div", {
						className: h.a.subredditRankItemColumn
					}, !e.hasTagline && s.a.createElement("span", {
						className: h.a.rankText
					}, a), !e.hasTagline && t ? s.a.createElement(m.a, {
						className: h.a.arrow,
						name: r ? "caret_up" : "caret_down",
						isFilled: !0,
						style: {
							color: c
						}
					}) : s.a.createElement(p.a, {
						className: Object(i.a)(h.a.arrow, !r && h.a.negative),
						style: {
							fill: c
						}
					}), s.a.createElement(b, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && s.a.createElement("span", {
						className: h.a.regularText
					}, e.delta ? Object(d.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = n.n(o);
			const d = e => a.a.createElement("div", {
				className: Object(s.a)(i.a.placeholderWrapper, e.large && i.a.large)
			}, a.a.createElement("span", {
				className: i.a.subredditIconLoading
			}), a.a.createElement("span", {
				className: i.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, n) {
			e.exports = {
				communityBanner: "_2-aCCpAklEV0DkVWrpodjE",
				communityBannerText: "_3t8QC0In-G5By0nAIZqfAZ",
				communityBannerCategoryName: "_3tu4wA7qDe2qAPwXNSHPo8",
				taglineBanner: "_1WuTyzo7KQobFlIJHW6Pik",
				taglineBannerBackground: "_34L_D1LSVWJ0ZjeqwrFnPj",
				taglineBannerImage: "pa_89rxjdi45gbVf0w9QR",
				taglineBannerText: "rpzag8Jvbaz6Pji3oRkWZ",
				footer: "_3fyECztJ8AQeIuhZWW-tNU",
				linkButton: "_1Q1oKEA1qDipo5Tk0b_YlY",
				categoryPicker: "_1O_evNy72kVXzYqUj80m_n",
				chipWrapper: "_1ZBD49ybfD0rTPX_Tp3Uz3",
				chip: "_3VVeutMKl2leQEGhurm7YN",
				taglineChip: "_2HZPVURuk0Na0mbosSZJDP",
				listItem: "_267lcOmg8VvXcoj9O0Q1TB",
				subredditRankItem: "_2ARwkAW45Urhf_fMfAMi5_",
				large: "_3WPeZCt6k7JXmTo4Kcf1vQ",
				regularText: "_3A9bf_kZ6VBA2VBRND5gvf",
				subredditIcon: "_3XIp3RTd4tSLZOvILNQorh",
				delta: "b8PFL61jVtugGDJnIQfBO",
				subredditRankItemColumn: "_2NS1CWm-CUQYu57CmZ05ep",
				subredditDetailsContainer: "_1XUTmupLRN-FTmJ6PQB7kO",
				categoryLink: "_25MytV8CK2IS_fK867Q3qH",
				rankText: "_2B-BDgM13P2SLJX-GZrxHV",
				smallText: "_3BO4rLcAUZY_jK4h2rZj7y",
				arrow: "ztLeQJcDYVKbL9h94QtI_",
				negative: "_3dHwI98vF7PVi8MmZFpeXj",
				communityBannerPlaceholder: "_2-cUhM9bP2B5FPfQsDLJGR",
				glimmer: "NJdRTjquS3Maw_lWbQTkw",
				placeholderWrapper: "_2jtVdXcFC3Ioe3B_hXF5Eh",
				subredditIconLoading: "_1F-hYShaC9dYxEEe3_TCGR",
				subredditNameLoading: "_YedzkdLjjcYoXUE26Cyb"
			}
		},
		"./src/reddit/components/TopSubredditsWidget/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/first.js"),
				s = n.n(a),
				o = n("./node_modules/lodash/times.js"),
				i = n.n(o),
				d = n("./node_modules/react/index.js"),
				c = n.n(d),
				l = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = n("./src/config.ts"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				g = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				h = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/subredditLeaderboard.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/controls/Chip/index.tsx"),
				C = n("./src/reddit/helpers/name/index.ts"),
				k = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				E = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				v = n.n(_);
			const x = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && v.a.communityBannerPlaceholder,
						a = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: `url(${e.bannerBackgroundImage})`
						} : void 0,
						s = e.categoryName === b.j ? b.h.path : b.f;
					return c.a.createElement("div", {
						className: Object(m.a)(e.className, v.a.communityBanner, n),
						style: a
					}, t && c.a.createElement("h2", {
						className: v.a.communityBannerText
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || b.d),
						to: s
					}, e.categoryName ? (e => e === b.j ? r.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : c.a.createElement(c.a.Fragment, null, r.fbt._("Top", null, {
						hk: "4bbkOp"
					}), c.a.createElement("span", {
						className: v.a.categoryName
					}, " ", r.fbt._("{categoryName}", [r.fbt._param("categoryName", e)], {
						hk: "2cI9uN"
					}), " "), r.fbt._("Communities", null, {
						hk: "2rXjVR"
					})))(e.categoryName) : r.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				S = e => {
					const {
						category: t
					} = e, {
						gradients: n
					} = t, a = !!(!e.rankings || !e.rankings.length) && v.a.communityBannerPlaceholder, s = n && Array.isArray(n) && 2 === n.length ? {
						background: `linear-gradient(246.35deg, ${n[0]} 0%, ${n[1]} 100%)`
					} : void 0, o = t.path ? t.path : b.f, i = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
					return c.a.createElement("div", {
						className: Object(m.a)(e.className, v.a.taglineBanner, a)
					}, c.a.createElement("div", {
						className: v.a.taglineBannerBackground,
						style: s
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || b.d),
						to: o
					}, c.a.createElement("h2", {
						className: v.a.taglineBannerText
					}, c.a.createElement("img", {
						className: v.a.taglineBannerImage,
						src: `${u.a.assetPath}/img/discovery/${i}`
					}), t.tagline ? (e => c.a.createElement("span", {
						className: v.a.categoryName
					}, r.fbt._("{tagline}", [r.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : r.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				T = e => c.a.createElement("ol", null, e.rankings && e.rankings.map((t, n) => {
					const r = e.subreddits[t.id];
					return c.a.createElement(p.a, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || b.d, r.name),
						rank: n,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: r
					})
				}), !e.rankings.length && O),
				O = c.a.createElement(c.a.Fragment, null, i()(5, e => c.a.createElement(g.a, {
					key: e
				}))),
				w = e => {
					const t = e.isSecondaryButton ? f.n : f.k,
						n = e.linkColor ? {
							backgroundColor: e.linkColor,
							color: "white"
						} : void 0;
					return c.a.createElement("div", {
						className: v.a.footer
					}, c.a.createElement(t, {
						className: v.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || b.d),
						to: e.to || "",
						style: n
					}, e.isSecondaryButton ? e.categoryName ? r.fbt._("See All {categoryName}", [r.fbt._param("categoryName", e.categoryName)], {
						hk: "3mjiTN"
					}) : r.fbt._("See All", null, {
						hk: "2OZax8"
					}) : r.fbt._("View All", null, {
						hk: "4vfmcB"
					})))
				};

			function j(e, t) {
				return t || `${b.f}${Object(C.g)(e)}/`
			}
			const N = e => {
				return c.a.createElement("div", {
					className: v.a.categoryPicker
				}, e.categories && e.categories.map((t, n) => e.activeCategoryName === t.name ? null : c.a.createElement("span", {
					className: v.a.chipWrapper,
					key: t.name,
					onMouseDown: () => ((t, n) => e.onSendEventClick("bottom_leaderboards", t || b.d, void 0, n))(t.name, n + 1)
				}, c.a.createElement(y.a, {
					className: e.hasTagline ? v.a.taglineChip : v.a.chip,
					key: t.name,
					to: j(t.name, t.path),
					wide: t.name === b.j
				}, t.name ? t.name === b.j ? r.fbt._("Near You", null, {
					hk: "RuM7j"
				}) : t.name : r.fbt._("Top", null, {
					hk: "2rw7Gx"
				})))))
			};
			t.b = e => {
				const {
					subreddits: t,
					rankings: n,
					categoryName: r,
					category: a,
					categories: o
				} = e, i = Object(E.a)();
				Object(d.useEffect)(() => {
					i(Object(k.d)(r || b.d))
				}, []);
				const l = s()(n),
					m = t && l && t[l.id],
					p = `${u.a.assetPath}/img/leaderboard/banner-background.png`,
					g = m ? m.bannerBackgroundImage || p : void 0,
					f = e.to || r && j(r, a.path),
					y = a && a.tagline,
					C = a && a.gradients && Array.isArray(a.gradients) && 2 === a.gradients.length ? a.gradients[1] : void 0;
				return c.a.createElement(h.a, {
					className: e.className,
					contentOnly: !0
				}, y && c.a.createElement(S, {
					category: a,
					onSendEventClick: e.onSendEventClick,
					rankings: n
				}), !y && c.a.createElement(x, {
					bannerBackgroundImage: g,
					categoryName: r,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), c.a.createElement(T, {
					categoryName: r,
					hasTagline: !!y,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayDelta: !1,
					subreddits: t
				}), c.a.createElement(w, {
					categoryName: r,
					isSecondaryButton: e.isSecondaryButton,
					linkColor: C,
					onSendEventClick: e.onSendEventClick,
					to: f
				}), o && c.a.createElement(N, {
					activeCategoryName: r,
					categories: o,
					hasTagline: !!y,
					onSendEventClick: e.onSendEventClick
				}))
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				g = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				b = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const k = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(C.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(C.a)(e).widgetColors.sidebarWidgetHeaderColor,
				_ = e => {
					const t = k(e);
					return Object(y.f)(t)
				},
				v = e => {
					const t = E(e);
					return Object(y.f)(t)
				};
			var x = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				S = n.n(x);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = Object(u.t)(), w = Object(s.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.m)(e, t) || void 0,
						r = t.redditStyle || Object(b.l)(e, {
							subredditId: n
						}),
						a = Object(f.V)(e);
					return r || a
				},
				nigtmode: f.V,
				subredditId: u.m,
				topPostVariant: h.d
			}));
			class j extends a.a.Component {
				constructor() {
					super(...arguments), this.contentRef = a.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = k(this.props), e.borderColor = Object(g.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = _(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = v(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: r,
						headerButton: s,
						onClick: o,
						title: d,
						titleClassName: l,
						truncateThreshold: u
					} = this.props, p = n ? S.a.widgetContentOnly : S.a.widgetContent, g = !r && this.props.styles, h = g ? this.getWidgetBackgroundStyles() : {}, b = g ? this.getWidgetHeaderStyles() : {};
					return a.a.createElement("div", {
						className: Object(i.a)(t, S.a.widgetBackground, {
							[S.a.redditStyle]: r,
							[S.a.clickable]: !!o,
							[S.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: o,
						style: h
					}, d && a.a.createElement("div", {
						className: S.a.widgetHeader,
						style: b
					}, a.a.createElement("div", {
						className: Object(i.a)(S.a.widgetTitle, l)
					}, a.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), s), a.a.createElement("div", {
						className: Object(i.a)(p, {
							[S.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && a.a.createElement(m.o, {
						className: S.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, T._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = O(w(Object(d.a)(Object(l.c)(j))))
		},
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "l", (function() {
				return i
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "g", (function() {
				return C
			}));
			const r = "DEFAULT",
				a = "",
				s = "All Communities",
				o = "top",
				i = "MOD",
				d = "moderating",
				c = "LOCAL_COMMUNITIES",
				l = "near-you",
				u = "/subreddits/leaderboard/",
				m = {
					id: a,
					name: a,
					path: `${u}`
				},
				p = {
					id: c,
					name: l,
					path: `${u}${l}/`
				},
				g = [{
					name: "Sports",
					id: "c1015",
					path: `${u}sports/`
				}, {
					name: "News",
					id: "c1009",
					path: `${u}news/`
				}, {
					name: "Gaming",
					id: "c1019",
					path: `${u}gaming/`
				}, {
					name: "Aww",
					id: "c1000",
					path: `${u}aww/`
				}],
				h = {
					id: a,
					name: a,
					path: `${u}`,
					image: "popcorn-snoo",
					tagline: "Trending communities are so hot right now",
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				b = {
					id: c,
					name: l,
					path: `${u}${l}/`,
					image: "magnifying-glass-snoo",
					tagline: "Local communities —\nSee what’s near you",
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				f = [{
					name: "Sports",
					id: "c1015",
					path: `${u}sports/`,
					image: "basketball-snoo",
					tagline: "Sports communities are the real MVP",
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "News",
					id: "c1009",
					path: `${u}news/`,
					image: "newsie-snoo",
					tagline: "News communities to keep you informed",
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Gaming",
					id: "c1019",
					path: `${u}gaming/`,
					image: "esports-snoo",
					tagline: "Gaming communities taking it to the next level",
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Aww",
					id: "c1000",
					path: `${u}aww/`,
					image: "cat-snoo",
					tagline: "Aww communities —\nget in on this cuteness",
					gradients: ["#F3B54F", "#EC5428"]
				}],
				y = [{
					name: "Beauty",
					id: "c1023",
					path: `${u}beauty/`,
					image: "makeup-snoo",
					tagline: "Beauty communities make us all look good",
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Fashion",
					id: "c1002",
					path: `${u}fashion/`,
					image: "90s-nostalgia-snoo",
					tagline: "Fashion communities are always in style",
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "Food",
					id: "c1003",
					path: `${u}food/`,
					image: "cookbooks-snoo",
					tagline: "Food communities to make you go mmmm",
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Fitness",
					id: "c1006",
					path: `${u}health_and_fitness/`,
					image: "yoga-snoo",
					tagline: "Fitness communities that know how to work it",
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Outdoors",
					id: "c1010",
					path: `${u}outdoors/`,
					image: "telescope-snoo",
					tagline: "Outdoor communities —\nthey’re really out there",
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Relationships",
					id: "c1013",
					path: `${u}relationships/`,
					image: "childrensbooks-snoo",
					tagline: "Relationship communities understand all the feels",
					gradients: ["#F08C3A", "#D72E33"]
				}],
				C = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, n) {
			e.exports = {
				Chip: "yO1xBdgBCFQNZudOlok9d",
				chip: "yO1xBdgBCFQNZudOlok9d",
				isWide: "_1lxXIK3bbUOKz-5A-FRakQ",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/controls/Chip/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/Chip/index.m.less"),
				d = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const t = e.to ? {
					kind: o.a.InternalLink,
					to: e.to
				} : {};
				return a.a.createElement(o.q, c({
					className: Object(s.a)(d.a.Chip, {
						[d.a.isWide]: e.wide
					}),
					onClick: e.onClick,
					priority: o.b.Tertiary,
					size: o.c.XS,
					text: e.children
				}, t))
			}
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/graphql/operations/GetNearbySubreddits.json"),
				a = n("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(a.a)(e, {
				...r,
				variables: t
			})
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/graphql/operations/TopSubreddits.json"),
				a = n("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(a.a)(e, {
				...r,
				variables: t
			})
		},
		"./src/reddit/helpers/categoryPickerWidget/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			}));
			var r = n("./src/reddit/helpers/name/index.ts");
			const a = (e, t) => t.map(t => {
					const n = Object(r.g)(t.name),
						a = n.split(" & ").join("_and_");
					return {
						...t,
						name: n,
						path: t.path || `${e}${a}/`
					}
				}),
				s = e => Object(r.g)(e).split("_and_").join(" & ")
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/lodash/isEmpty.js");
			var r = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const a = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						a = [];
					for (const {
							node: s,
							...o
						} of e) {
						const e = Object(r.a)(s);
						n[e.id] = e, a.push(o)
					}
					return {
						pageInfo: t,
						rankings: a,
						subreddits: n
					}
				},
				s = ({
					edges: e
				}) => {
					const t = {},
						n = [];
					for (const {
							node: a,
							...s
						} of e) {
						const e = Object(r.a)(a);
						t[e.id] = {
							...e,
							bannerBackgroundImage: a && a.styles && a.styles.bannerBackgroundImage
						}, n.push(s)
					}
					return {
						rankings: n,
						subreddits: t
					}
				},
				o = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						a = [];
					let s = 0;
					for (const {
							node: o
						} of e) {
						const e = Object(r.a)(o);
						n[e.id] = {
							...e,
							bannerBackgroundImage: o && o.styles && o.styles.bannerBackgroundImage
						}, a.push({
							id: e.id,
							rank: s
						}), s += 1
					}
					return {
						rankings: a,
						subreddits: n,
						pageInfo: t
					}
				}
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/categories.tsx"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...a.defaults(t),
					action: "click",
					noun: Object(r.d)(e),
					source: "leaderboard_category"
				}),
				o = (e, t, n) => s => ({
					...a.defaults(s),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				i = (e, t) => n => ({
					...a.defaults(n),
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(r.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				d = (e, t, n, s) => o => ({
					...a.defaults(o),
					action: "click",
					actionInfo: {
						...a.actionInfo(o),
						position: s && s
					},
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				c = (e, t) => n => ({
					...a.defaults(n),
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(r.d)(e),
						name: t && t.toLowerCase()
					}
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var r, a, s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(a || (a = {}));
			const i = (e, t) => n => ({
					source: a.COMMUNITY_WIDGETS,
					action: s.c.CLICK,
					noun: r.SEE_MORE,
					widget: Object(o.widget)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...o.defaults
				}),
				d = (e, t) => n => ({
					source: a.POST,
					action: s.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: o.post(n, e),
					subreddit: o.subreddit(n),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...o.defaults(n)
				}),
				c = () => e => ({
					source: a.SIDEBAR,
					action: s.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...o.defaults(e)
				}),
				l = e => t => ({
					source: a.TOPICS_WIDGET,
					action: s.c.CLICK,
					noun: r.TOPIC,
					...o.defaults(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(s.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, a.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), a.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/Triangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 10 8",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
			})))
		},
		"./src/reddit/models/GoodContent/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = {
					G: "G",
					NC17: "NC17",
					NOT_SHOWN_IN_THEATERS: "NOT_SHOWN_IN_THEATERS",
					PG: "PG",
					PG13: "PG13",
					R: "R"
				},
				a = {
					isBlacklistedSubredditsExcluded: !0,
					isNsfwExcluded: !0,
					maxRating: r.R
				}
		},
		"./src/reddit/pages/SubredditLeaderboard/index.m.less": function(e, t, n) {
			e.exports = {
				SidebarLeft: "_2TB9TZ4gV-vIStjv6ocuVU",
				sidebarLeft: "_2TB9TZ4gV-vIStjv6ocuVU",
				SidebarRight: "_3J5RkbDcTmj01rM7fNcvO7",
				sidebarRight: "_3J5RkbDcTmj01rM7fNcvO7",
				bannerBackground: "_1xtP5WlAH3pNEC6rHXHeXD",
				bannerContentContainer: "_3cH0x5dE0jolJn0db5DqCT",
				bannerHeader: "_2N_HhXeWtDPq6aBy9lSnQK",
				bannerDescription: "_28W4vqZux6r8Ji5kDHIH2g",
				mainContent: "_3GPSAJ3Tfj_PbjPQbBl707",
				mainContentHeader: "HDnd1PwEGlAuS4a0n11JH",
				mainContentHeaderText: "_FryWXes2c2GhZzBHd7Rz",
				mainContentRankChangeText: "NF1HHniDqzG-0fox1nFBs",
				subredditRankingsList: "UGHNtX0DV78XSU_nT_p_l"
			}
		},
		"./src/reddit/pages/SubredditLeaderboard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/lodash/shuffle.js"),
				a = n.n(r),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/pageTitle.ts"),
				u = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				m = n("./src/reddit/components/TitleTagManager/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/constants/experiments.ts"),
				h = n("./src/reddit/constants/subredditLeaderboard.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				y = n("./src/reddit/helpers/trackers/screenview.ts"),
				C = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				k = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				E = n("./src/reddit/layout/page/Listing/index.tsx"),
				_ = n("./node_modules/fbt/lib/FbtPublic.js"),
				v = n("./src/reddit/pages/SubredditLeaderboard/index.m.less"),
				x = n.n(v);
			const S = () => o.a.createElement("div", {
				className: x.a.bannerBackground
			}, o.a.createElement("div", {
				className: x.a.bannerContentContainer
			}, o.a.createElement("h1", {
				className: x.a.bannerHeader
			}, _.fbt._("Today's Top Growing Communities", null, {
				hk: "1J28A5"
			})), o.a.createElement("span", {
				className: x.a.bannerDescription
			}, _.fbt._("Browse Reddit's top growing communities. Find the top communities in your favorite category.", null, {
				hk: "4w2yrj"
			}))));
			var T = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				O = n("./node_modules/lodash/last.js"),
				w = n.n(O),
				j = n("./node_modules/lodash/times.js"),
				N = n.n(j),
				P = n("./node_modules/lodash/upperFirst.js"),
				I = n.n(P),
				L = n("./src/reddit/actions/pages/subredditLeaderboard.ts"),
				A = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				R = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				B = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				F = n("./src/reddit/models/GoodContent/index.ts"),
				D = n("./src/reddit/selectors/subreddit.ts"),
				W = n("./src/reddit/selectors/subredditLeaderboard.ts"),
				M = n("./src/reddit/selectors/user.ts");
			const H = 25,
				G = .5,
				q = Object(d.c)({
					hasPreviousPage: (e, {
						categoryId: t
					}) => Object(W.c)(e, t),
					hasNextPage: (e, {
						categoryId: t
					}) => Object(W.b)(e, t),
					isMod: M.L,
					rankings: (e, {
						categoryId: t
					}) => Object(D.O)(e, t),
					subreddits: D.ab
				}),
				U = Object(i.b)(q, e => ({
					fetchMoreSubreddits: (t, n) => e(Object(A.a)(t, n))
				}));
			class Q extends o.a.Component {
				constructor() {
					super(...arguments), this.fetchMoreSubreddits = e => {
						const t = this.makeFetchVariables(),
							n = Object(W.d)(this.props.categoryId, this.props.categoryName);
						e.isIntersecting && t.after && this.props.fetchMoreSubreddits(t, n)
					}, this.sendLeaderboardSubredditEventClick = e => this.props.sendEvent(Object(C.e)(e, this.props.categoryName || h.d)), this.renderSubredditRankItemPlaceholders = () => o.a.createElement(o.a.Fragment, null, N()(5, e => o.a.createElement(B.a, {
						key: e,
						large: !0
					}))), this.renderSubredditRankItems = e => this.props.rankings.map((t, n) => {
						const r = this.props.subreddits[t.id];
						return o.a.createElement(R.a, {
							delta: t.rankDelta,
							key: r.id,
							large: !0,
							onItemClick: () => this.sendLeaderboardSubredditEventClick(r),
							rank: n,
							shouldDisplayDelta: e,
							subreddit: r
						})
					})
				}
				makeFetchVariables() {
					const {
						categoryId: e,
						categoryName: t,
						isMod: n,
						rankings: r
					} = this.props, a = w()(r), s = a && a.cursor, o = Object(L.checkIsModCategory)(t, n);
					return {
						after: s,
						categoryId: e === h.b ? h.e : e,
						filter: F.a,
						first: H,
						isOnlyModIncluded: o
					}
				}
				render() {
					const {
						categoryName: e,
						hasNextPage: t,
						hasPreviousPage: n,
						isMod: r,
						rankings: a
					} = this.props, s = t || n, i = e === h.j, d = r && !i;
					return o.a.createElement("div", {
						className: x.a.mainContent
					}, o.a.createElement("div", {
						className: x.a.mainContentHeader
					}, o.a.createElement("h2", null, o.a.createElement("span", {
						className: x.a.mainContentHeaderText
					}, e ? i ? _.fbt._("Local Communities Near You", null, {
						hk: "2PsgJz"
					}) : _.fbt._("Today's Top Growing in {categoryName}", [_.fbt._param("categoryName", I()(e))], {
						hk: "4pneAv"
					}) : _.fbt._("Today's Top Growing Communities", null, {
						hk: "6LoyD"
					}))), d && o.a.createElement("span", {
						className: x.a.mainContentRankChangeText
					}, _.fbt._("Rank Change", null, {
						hk: "1DVGfi"
					}))), o.a.createElement("ol", {
						className: x.a.subredditRankingsList
					}, a ? this.renderSubredditRankItems(d) : this.renderSubredditRankItemPlaceholders(), s && o.a.createElement(T.a, {
						onChange: this.fetchMoreSubreddits,
						threshold: G,
						rootMargin: "0px 0px 0px 0px"
					}, o.a.createElement("li", null, o.a.createElement(B.a, {
						large: !0
					})))))
				}
			}
			var Y = Object(p.c)(U(Q)),
				K = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				V = n("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				J = n.n(V);

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = e => {
				const {
					category: t,
					children: n,
					className: r,
					isActive: a,
					tabIndex: s
				} = e, i = Object(c.a)(J.a.categoryLink, a && J.a.active, r);
				return o.a.createElement("li", null, o.a.createElement(K.a, z({}, t.anchorProps, {
					className: i,
					"data-active": a,
					onMouseDown: () => e.onSendEventClick(t.name),
					tabIndex: s,
					to: t.path || ""
				}), n, t.customIcon))
			};
			var X = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				$ = n("./src/reddit/controls/Button/index.tsx"),
				ee = n("./src/reddit/helpers/name/index.ts");
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = 36;
			class re extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isExpanded: !1
					}, this.shouldAutoExpand = () => {
						const {
							categories: e,
							currentCategoryName: t,
							initialNumberOfCategories: n
						} = this.props, {
							isExpanded: r
						} = this.state;
						if (!t || r || !n) return;
						return n < e.findIndex(e => e.name === t) + 1
					}, this.toggleExpanded = () => {
						this.setState(e => ({
							isExpanded: !e.isExpanded
						}), this.props.onMoreLessClick)
					}
				}
				componentDidMount() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				componentDidUpdate() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				renderCategoryList() {
					const {
						categories: e,
						categoryItemClassName: t,
						categoryItemHeight: n = ne,
						categoryListContainerClassName: r,
						children: a,
						childrenOffset: s = 0,
						currentCategoryName: i,
						initialNumberOfCategories: d,
						onItemClick: l
					} = this.props, {
						isExpanded: u
					} = this.state, m = !u && d && n * d, p = s + (e ? n * e.length : 0), g = Object(c.a)(J.a.categoryList, u && J.a.expanded), b = e => !(!i || i !== Object(ee.g)(e)), f = o.a.createElement("ul", {
						className: g,
						style: {
							height: m || p
						}
					}, a, e && e.map((e, r) => {
						const a = s + r * n;
						return o.a.createElement(Z, {
							category: e,
							className: t,
							isActive: b(e.name),
							key: e.id,
							onSendEventClick: l,
							tabIndex: m && a >= m ? -1 : 0
						}, e.name === h.j ? te._("Near You", null, {
							hk: "3YIOzZ"
						}) : e.name)
					}));
					return o.a.createElement("div", {
						className: Object(c.a)(J.a.categoryListContainer, r)
					}, f)
				}
				render() {
					const {
						buttonClassName: e,
						categories: t,
						className: n,
						header: r,
						headerClassName: a,
						initialNumberOfCategories: s
					} = this.props, i = t && s && t.length > s, d = Object(c.a)(n, J.a.container);
					return o.a.createElement(X.a, {
						className: d,
						contentOnly: !0
					}, o.a.createElement("div", {
						className: Object(c.a)(J.a.header, a)
					}, o.a.createElement("h2", null, r || te._("Categories", null, {
						hk: "46zLMb"
					}))), this.renderCategoryList(), i && o.a.createElement($.o, {
						className: Object(c.a)(J.a.button, e),
						onClick: this.toggleExpanded
					}, i && !this.state.isExpanded ? te._("Show More", null, {
						hk: "1pCiqD"
					}) : te._("Show Less", null, {
						hk: "2qT4h7"
					})))
				}
			}
			var ae = re,
				se = n("./src/lib/lessComponent.tsx"),
				oe = n("./src/reddit/components/CommunitiesDirectoryWidget/index.m.less"),
				ie = n.n(oe);
			const {
				fbt: de
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ce = se.a.a("Link", ie.a), le = e => {
				const t = "#" === e ? "0" : e.toLowerCase();
				return o.a.createElement(ce, {
					href: `/subreddits/${t}-1`,
					key: e
				}, e)
			};
			var ue = e => o.a.createElement(X.a, {
					className: ie.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, o.a.createElement("div", {
					className: ie.a.Title
				}, de._("Browse Communities A-Z", null, {
					hk: "49KPIR"
				})), o.a.createElement("div", {
					className: ie.a.LinkContainer
				}, Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map(le))),
				me = n("./src/reddit/components/SidebarContainer/index.tsx"),
				pe = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				ge = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				he = n("./src/reddit/components/TopSubredditsWidget/Container.tsx");
			const be = e => {
					const t = e.categoryName && Object(ee.g)(e.categoryName);
					return o.a.createElement("div", {
						className: x.a.SidebarLeft
					}, o.a.createElement(me.a, null, o.a.createElement(ae, {
						categories: e.categories,
						currentCategoryName: t,
						initialNumberOfCategories: 12,
						onItemClick: e.onSendEventClick
					})))
				},
				fe = e => {
					const t = e.widgetCategories[0],
						n = e.widgetCategories[1];
					return o.a.createElement("div", {
						className: x.a.SidebarRight
					}, o.a.createElement(me.a, null, o.a.createElement(he.a, {
						category: t,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), o.a.createElement(pe.a, null), o.a.createElement(ge.a, null, o.a.createElement(he.a, {
						category: n,
						className: x.a.stickyWidget,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), o.a.createElement(ue, null))))
				};
			var ye = n("./src/reddit/selectors/category.ts"),
				Ce = n("./src/reddit/selectors/moderatorPermissions.ts");
			const ke = Object(b.t)(),
				Ee = (e, {
					match: t
				}) => Object(f.b)(t.params.categoryName || ""),
				_e = Object(g.vd)(h.g),
				ve = Object(d.c)({
					categories: e => Object(ye.c)(e, {
						categoriesOrder: _e
					}),
					categoryId: (e, t) => {
						const n = Ee(0, t);
						return n === h.j ? h.i : n ? Object(ye.g)(e, {
							categoryName: n
						}) : h.b
					},
					categoryName: Ee,
					isMod: Ce.g,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations
				}),
				xe = Object(i.b)(ve),
				Se = {
					id: h.b,
					name: h.c,
					path: h.f
				},
				Te = {
					customIcon: o.a.createElement(k.a, null),
					id: h.l,
					name: h.m
				};
			class Oe extends o.a.Component {
				constructor(e) {
					super(e), this.getWidgetCategories = () => {
						const {
							categories: e
						} = this.props, t = e.filter(this.filterActiveCategory);
						return a()(t).slice(0, 2)
					}, this.updateWidgetCategories = e => {
						const {
							categories: t,
							categoryName: n
						} = this.props;
						if (e.categoryName !== n || e.categories.length !== t.length) {
							const e = this.getWidgetCategories();
							this.setWidgetCategories(e)
						}
					}, this.setWidgetCategories = e => this.setState({
						widgetCategories: e
					}), this.filterCategories = e => this.filterActiveCategory(e), this.filterActiveCategory = e => e.name !== this.props.categoryName, this.resetScrollPosition = () => {
						window.scrollTo(0, 0)
					}, this.sendCategoryWidgetEventClick = e => this.props.sendEvent(Object(C.a)(e)), this.sendFeaturedCategoryEventClick = (e, t, n) => this.props.sendEvent(Object(C.b)(e, t, n)), this.state = {
						widgetCategories: []
					}
				}
				componentDidMount() {
					const e = this.getWidgetCategories();
					this.setWidgetCategories(e), this.props.sendEvent(Object(y.e)())
				}
				componentDidUpdate(e) {
					this.resetScrollPosition(), this.updateWidgetCategories(e)
				}
				render() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
						title: Object(l.k)().toString()
					}), this.renderContent())
				}
				renderContent() {
					const {
						className: e,
						isMod: t,
						shouldShowLocalRecommendations: n
					} = this.props, r = [Se, ...n ? [h.h] : [], ...this.props.categories];
					t && r.unshift(Te);
					const a = Object(f.a)(h.f, r),
						s = t && this.props.categoryName === h.m,
						i = this.props.categoryId ? this.props.categoryName : s ? h.m : void 0,
						d = this.props.categoryId ? this.props.categoryId : s ? h.l : h.b;
					return o.a.createElement(u.a, null, o.a.createElement(E.a, {
						className: Object(c.a)(e, x.a.mainContent),
						content: o.a.createElement(Y, {
							categoryId: d,
							categoryName: i
						}),
						disableFullscreen: !0,
						navBar: o.a.createElement(S, null),
						sidebars: [o.a.createElement(be, {
							key: "left",
							categories: a,
							categoryName: i || h.c,
							onSendEventClick: this.sendCategoryWidgetEventClick
						}), o.a.createElement(fe, {
							key: "right",
							widgetCategories: this.state.widgetCategories,
							onSendEventClick: this.sendFeaturedCategoryEventClick
						})]
					}))
				}
			}
			t.default = ke(xe(Object(p.c)(Oe)))
		},
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/reddit/constants/subredditLeaderboard.ts"),
				a = n("./src/reddit/selectors/category.ts");
			const s = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				o = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				i = (e, t) => t === r.m ? r.l : t === r.j ? r.i : e || r.b,
				d = (e, t) => {
					const n = e.subreddits.rankings,
						r = t && Object(a.f)(e, {
							categoryName: t
						}),
						s = n[i(r && r.id || null, t)];
					return !(!s || !s.length)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditLeaderboard.ddb330b61a801dea73f1.js.map