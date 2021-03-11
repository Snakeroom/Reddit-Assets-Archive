// https://www.redditstatic.com/desktop2x/NotificationsInbox.ecf32de98dd4d289b6dc.js
// Retrieved at 3/11/2021, 9:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsInbox"], {
		"./node_modules/react-helmet/es/Helmet.js": function(e, t, n) {
			"use strict";
			(function(e) {
				var r, i, o, a, s = n("./node_modules/react-helmet/node_modules/prop-types/index.js"),
					c = n.n(s),
					d = n("./node_modules/react-side-effect/lib/index.js"),
					l = n.n(d),
					u = n("./node_modules/react-fast-compare/index.js"),
					p = n.n(u),
					f = n("./node_modules/react/index.js"),
					b = n.n(f),
					m = n("./node_modules/object-assign/index.js"),
					h = n.n(m),
					g = "bodyAttributes",
					y = "htmlAttributes",
					O = "titleAttributes",
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
					x = (Object.keys(v).map((function(e) {
						return v[e]
					})), "charset"),
					T = "cssText",
					E = "href",
					j = "http-equiv",
					C = "innerHTML",
					S = "itemprop",
					_ = "name",
					w = "property",
					k = "rel",
					I = "src",
					N = "target",
					P = {
						accesskey: "accessKey",
						charset: "charSet",
						class: "className",
						contenteditable: "contentEditable",
						contextmenu: "contextMenu",
						"http-equiv": "httpEquiv",
						itemprop: "itemProp",
						tabindex: "tabIndex"
					},
					A = "defaultTitle",
					L = "defer",
					R = "encodeSpecialCharacters",
					M = "onChangeClientState",
					F = "titleTemplate",
					U = Object.keys(P).reduce((function(e, t) {
						return e[P[t]] = t, e
					}), {}),
					B = [v.NOSCRIPT, v.SCRIPT, v.STYLE],
					D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					H = function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					},
					q = function() {
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
					G = function(e, t) {
						var n = {};
						for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
						return n
					},
					Y = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					},
					z = function(e) {
						var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
					},
					J = function(e) {
						var t = Z(e, v.TITLE),
							n = Z(e, F);
						if (n && t) return n.replace(/%s/g, (function() {
							return Array.isArray(t) ? t.join("") : t
						}));
						var r = Z(e, A);
						return t || r || void 0
					},
					Q = function(e) {
						return Z(e, M) || function() {}
					},
					K = function(e, t) {
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
								for (var r = Object.keys(n), i = 0; i < r.length; i++) {
									var o = r[i].toLowerCase();
									if (-1 !== e.indexOf(o) && n[o]) return t.concat(n)
								}
							return t
						}), [])
					},
					X = function(e, t, n) {
						var r = {};
						return n.filter((function(t) {
							return !!Array.isArray(t[e]) || (void 0 !== t[e] && re("Helmet: " + e + ' should be of type "Array". Instead found type "' + D(t[e]) + '"'), !1)
						})).map((function(t) {
							return t[e]
						})).reverse().reduce((function(e, n) {
							var i = {};
							n.filter((function(e) {
								for (var n = void 0, o = Object.keys(e), a = 0; a < o.length; a++) {
									var s = o[a],
										c = s.toLowerCase(); - 1 === t.indexOf(c) || n === k && "canonical" === e[n].toLowerCase() || c === k && "stylesheet" === e[c].toLowerCase() || (n = c), -1 === t.indexOf(s) || s !== C && s !== T && s !== S || (n = s)
								}
								if (!n || !e[n]) return !1;
								var d = e[n].toLowerCase();
								return r[n] || (r[n] = {}), i[n] || (i[n] = {}), !r[n][d] && (i[n][d] = !0, !0)
							})).reverse().forEach((function(t) {
								return e.push(t)
							}));
							for (var o = Object.keys(i), a = 0; a < o.length; a++) {
								var s = o[a],
									c = h()({}, r[s], i[s]);
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
					ie = null,
					oe = function(e, t) {
						var n = e.baseTag,
							r = e.bodyAttributes,
							i = e.htmlAttributes,
							o = e.linkTags,
							a = e.metaTags,
							s = e.noscriptTags,
							c = e.onChangeClientState,
							d = e.scriptTags,
							l = e.styleTags,
							u = e.title,
							p = e.titleAttributes;
						ce(v.BODY, r), ce(v.HTML, i), se(u, p);
						var f = {
								baseTag: de(v.BASE, n),
								linkTags: de(v.LINK, o),
								metaTags: de(v.META, a),
								noscriptTags: de(v.NOSCRIPT, s),
								scriptTags: de(v.SCRIPT, d),
								styleTags: de(v.STYLE, l)
							},
							b = {},
							m = {};
						Object.keys(f).forEach((function(e) {
							var t = f[e],
								n = t.newTags,
								r = t.oldTags;
							n.length && (b[e] = n), r.length && (m[e] = f[e].oldTags)
						})), t && t(), c(e, b, m)
					},
					ae = function(e) {
						return Array.isArray(e) ? e.join("") : e
					},
					se = function(e, t) {
						void 0 !== e && document.title !== e && (document.title = ae(e)), ce(v.TITLE, t)
					},
					ce = function(e, t) {
						var n = document.getElementsByTagName(e)[0];
						if (n) {
							for (var r = n.getAttribute("data-react-helmet"), i = r ? r.split(",") : [], o = [].concat(i), a = Object.keys(t), s = 0; s < a.length; s++) {
								var c = a[s],
									d = t[c] || "";
								n.getAttribute(c) !== d && n.setAttribute(c, d), -1 === i.indexOf(c) && i.push(c);
								var l = o.indexOf(c); - 1 !== l && o.splice(l, 1)
							}
							for (var u = o.length - 1; u >= 0; u--) n.removeAttribute(o[u]);
							i.length === o.length ? n.removeAttribute("data-react-helmet") : n.getAttribute("data-react-helmet") !== a.join(",") && n.setAttribute("data-react-helmet", a.join(","))
						}
					},
					de = function(e, t) {
						var n = document.head || document.querySelector(v.HEAD),
							r = n.querySelectorAll(e + "[data-react-helmet]"),
							i = Array.prototype.slice.call(r),
							o = [],
							a = void 0;
						return t && t.length && t.forEach((function(t) {
							var n = document.createElement(e);
							for (var r in t)
								if (t.hasOwnProperty(r))
									if (r === C) n.innerHTML = t.innerHTML;
									else if (r === T) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
							else {
								var s = void 0 === t[r] ? "" : t[r];
								n.setAttribute(r, s)
							}
							n.setAttribute("data-react-helmet", "true"), i.some((function(e, t) {
								return a = t, n.isEqualNode(e)
							})) ? i.splice(a, 1) : o.push(n)
						})), i.forEach((function(e) {
							return e.parentNode.removeChild(e)
						})), o.forEach((function(e) {
							return n.appendChild(e)
						})), {
							oldTags: i,
							newTags: o
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
							return t[P[n] || n] = e[n], t
						}), t)
					},
					pe = function(e, t, n) {
						switch (e) {
							case v.TITLE:
								return {
									toComponent: function() {
										return e = t.title, n = t.titleAttributes, (r = {
											key: e
										})["data-react-helmet"] = !0, i = ue(n, r), [b.a.createElement(v.TITLE, i, e)];
										var e, n, r, i
									}, toString: function() {
										return function(e, t, n, r) {
											var i = le(n),
												o = ae(t);
											return i ? "<" + e + ' data-react-helmet="true" ' + i + ">" + z(o, r) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + z(o, r) + "</" + e + ">"
										}(e, t.title, t.titleAttributes, n)
									}
								};
							case g:
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
												var r, i = ((r = {
													key: n
												})["data-react-helmet"] = !0, r);
												return Object.keys(t).forEach((function(e) {
													var n = P[e] || e;
													if (n === C || n === T) {
														var r = t.innerHTML || t.cssText;
														i.dangerouslySetInnerHTML = {
															__html: r
														}
													} else i[n] = t[e]
												})), b.a.createElement(e, i)
											}))
										}(e, t)
									}, toString: function() {
										return function(e, t, n) {
											return t.reduce((function(t, r) {
												var i = Object.keys(r).filter((function(e) {
														return !(e === C || e === T)
													})).reduce((function(e, t) {
														var i = void 0 === r[t] ? t : t + '="' + z(r[t], n) + '"';
														return e ? e + " " + i : i
													}), ""),
													o = r.innerHTML || r.cssText || "",
													a = -1 === B.indexOf(e);
												return t + "<" + e + ' data-react-helmet="true" ' + i + (a ? "/>" : ">" + o + "</" + e + ">")
											}), "")
										}(e, t, n)
									}
								}
						}
					},
					fe = function(e) {
						var t = e.baseTag,
							n = e.bodyAttributes,
							r = e.encode,
							i = e.htmlAttributes,
							o = e.linkTags,
							a = e.metaTags,
							s = e.noscriptTags,
							c = e.scriptTags,
							d = e.styleTags,
							l = e.title,
							u = void 0 === l ? "" : l,
							p = e.titleAttributes;
						return {
							base: pe(v.BASE, t, r),
							bodyAttributes: pe(g, n, r),
							htmlAttributes: pe(y, i, r),
							link: pe(v.LINK, o, r),
							meta: pe(v.META, a, r),
							noscript: pe(v.NOSCRIPT, s, r),
							script: pe(v.SCRIPT, c, r),
							style: pe(v.STYLE, d, r),
							title: pe(v.TITLE, {
								title: u,
								titleAttributes: p
							}, r)
						}
					},
					be = l()((function(e) {
						return {
							baseTag: V([E, N], e),
							bodyAttributes: K(g, e),
							defer: Z(e, L),
							encode: Z(e, R),
							htmlAttributes: K(y, e),
							linkTags: X(v.LINK, [k, E], e),
							metaTags: X(v.META, [_, x, j, w, S], e),
							noscriptTags: X(v.NOSCRIPT, [C], e),
							onChangeClientState: Q(e),
							scriptTags: X(v.SCRIPT, [I, C], e),
							styleTags: X(v.STYLE, [T], e),
							title: J(e),
							titleAttributes: K(O, e)
						}
					}), (function(e) {
						ie && ne(ie), e.defer ? ie = te((function() {
							oe(e, (function() {
								ie = null
							}))
						})) : (oe(e), ie = null)
					}), fe)((function() {
						return null
					})),
					me = (i = be, a = o = function(e) {
						function t() {
							return H(this, t), Y(this, e.apply(this, arguments))
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
								i = e.newChildProps,
								o = e.nestedChildren;
							return W({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [W({}, i, this.mapNestedChildrenToProps(n, o))]), t))
						}, t.prototype.mapObjectTypeChildren = function(e) {
							var t, n, r = e.child,
								i = e.newProps,
								o = e.newChildProps,
								a = e.nestedChildren;
							switch (r.type) {
								case v.TITLE:
									return W({}, i, ((t = {})[r.type] = a, t.titleAttributes = W({}, o), t));
								case v.BODY:
									return W({}, i, {
										bodyAttributes: W({}, o)
									});
								case v.HTML:
									return W({}, i, {
										htmlAttributes: W({}, o)
									})
							}
							return W({}, i, ((n = {})[r.type] = W({}, o), n))
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
							return b.a.Children.forEach(e, (function(e) {
								if (e && e.props) {
									var i = e.props,
										o = i.children,
										a = function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											return Object.keys(e).reduce((function(t, n) {
												return t[U[n] || n] = e[n], t
											}), t)
										}(G(i, ["children"]));
									switch (n.warnOnInvalidChildren(e, o), e.type) {
										case v.LINK:
										case v.META:
										case v.NOSCRIPT:
										case v.SCRIPT:
										case v.STYLE:
											r = n.flattenArrayTypeChildren({
												child: e,
												arrayTypeChildren: r,
												newChildProps: a,
												nestedChildren: o
											});
											break;
										default:
											t = n.mapObjectTypeChildren({
												child: e,
												newProps: t,
												newChildProps: a,
												nestedChildren: o
											})
									}
								}
							})), t = this.mapArrayTypeChildrenToProps(r, t)
						}, t.prototype.render = function() {
							var e = this.props,
								t = e.children,
								n = G(e, ["children"]),
								r = W({}, n);
							return t && (r = this.mapChildrenToProps(t, r)), b.a.createElement(i, r)
						}, q(t, null, [{
							key: "canUseDOM",
							set: function(e) {
								i.canUseDOM = e
							}
						}]), t
					}(b.a.Component), o.propTypes = {
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
					}, o.peek = i.peek, o.rewind = function() {
						var e = i.rewind();
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
				me.renderStatic = me.rewind, t.a = me
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function i() {}

			function o() {}
			o.resetWarningCache = i, e.exports = function() {
				function e(e, t, n, i, o, a) {
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
					checkPropTypes: o,
					resetWarningCache: i
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
			var r, i = n("./node_modules/react/index.js"),
				o = (r = i) && "object" == typeof r && "default" in r ? r.default : r;

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
					var c, d = [];

					function l() {
						c = e(d.map((function(e) {
							return e.props
						}))), u.canUseDOM ? t(c) : n && (c = n(c))
					}
					var u = function(e) {
						var t, n;

						function i() {
							return e.apply(this, arguments) || this
						}
						n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i.peek = function() {
							return c
						}, i.rewind = function() {
							if (i.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
							var e = c;
							return c = void 0, d = [], e
						};
						var a = i.prototype;
						return a.UNSAFE_componentWillMount = function() {
							d.push(this), l()
						}, a.componentDidUpdate = function() {
							l()
						}, a.componentWillUnmount = function() {
							var e = d.indexOf(this);
							d.splice(e, 1), l()
						}, a.render = function() {
							return o.createElement(r, this.props)
						}, i
					}(i.PureComponent);
					return a(u, "displayName", "SideEffect(" + function(e) {
						return e.displayName || e.name || "Component"
					}(r) + ")"), a(u, "canUseDOM", s), u
				}
			}
		},
		"./src/graphql/operations/DeleteInboxNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"ce2deb9deef7"}')
		},
		"./src/graphql/operations/NotificationInboxFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"94f052872d00"}')
		},
		"./src/graphql/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/graphql/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/graphql/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return O
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts"),
				c = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const l = Object(i.a)(o.c),
				u = Object(i.a)(o.b),
				p = Object(i.a)(o.a),
				f = Object(i.a)(o.f),
				b = Object(i.a)(o.e),
				m = Object(i.a)(o.d),
				h = e => async (t, n, {
					gqlContext: r
				}) => {
					e === c.a.Push ? t(f()) : t(l()), await async function(e, t, n) {
						const r = await Object(s.a)(e(), {
							channel: t
						});
						if (r.ok && r.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									r = n && n.sections;
								if (r) return function(e) {
									const t = {},
										n = [];
									let r = {},
										i = [];
									const o = e => {
										const {
											rowIds: o,
											rowsCollection: a
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let r = 0; r < e.rows.length; r++) {
													const i = e.rows[r],
														o = i.messageType;
													t.push(o), n[o] = i
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										r = {
											...r,
											...a
										}, i = [...i, ...o];
										const s = e.id;
										n.push(s), t[s] = {
											...e,
											rows: o
										}
									};
									for (let a = 0; a < e.length; a++) o(e[a]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: r,
											allIds: i
										}
									}
								}(r)
							}(r.body);
							t === c.a.Push ? n(b(e)) : n(u(e))
						} else t === c.a.Push ? n(m({
							error: r.error
						})) : n(p({
							error: r.error
						}))
					}(r, e, t)
				};
			const g = Object(i.a)(o.g),
				y = e => async (t, n, {
					gqlContext: i
				}) => {
					(await Object(s.b)(i(), e)).ok ? (O(t, e), function(e) {
						e(Object(a.e)({
							kind: d.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(a.e)({
							kind: d.b.Error,
							text: r.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function O(e, t) {
				e(g({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return P
			})), n.d(t, "a", (function() {
				return F
			})), n.d(t, "e", (function() {
				return U
			})), n.d(t, "b", (function() {
				return B
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "g", (function() {
				return q
			})), n.d(t, "h", (function() {
				return W
			})), n.d(t, "f", (function() {
				return G
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				a = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				s = n("./src/reddit/actions/notificationsInbox/constants.ts"),
				c = n("./src/reddit/actions/tabBadging.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/graphql/operations/DeleteInboxNotifications.json"),
				u = n("./src/lib/makeGqlRequest/index.ts");
			var p = n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts"),
				f = n("./src/graphql/operations/NotificationInboxFeed.json"),
				b = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts"),
				y = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var O;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(O || (O = {}));
			var v = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				x = n("./src/graphql/operations/UpdateInboxActivitySeenState.json");
			var T = n("./src/reddit/models/Badge/index.ts"),
				E = n("./src/reddit/models/NotificationInbox/index.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/appBadges.ts"),
				S = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				_ = n("./src/reddit/selectors/notificationPrefs.ts"),
				w = n("./src/reddit/selectors/notificationsInbox.tsx");
			const k = Object(i.a)(s.d),
				I = Object(i.a)(s.b),
				N = Object(i.a)(s.a),
				P = e => async (t, n, {
					gqlContext: r
				}) => {
					const i = n(),
						o = Object(w.a)(i);
					t(k());
					const a = await ((e, t) => Object(u.a)(e, {
						...f,
						variables: t
					}))(r(), e);
					if (!a.ok) return void N({
						error: a.error
					});
					const s = a && a.body,
						c = A(s);
					if (null === o) {
						const e = Object(w.f)(i);
						t(L(c.nodes, e.length))
					}
					t(I(c))
				}, A = e => {
					const t = e && e.data,
						n = t && t.notificationInbox,
						r = n && n.elements,
						i = r && r.pageInfo;
					return {
						nodes: (r && r.edges).map(e => e.node),
						pageInfo: i
					}
				}, L = (e, t) => async (n, r) => {
					const i = r(),
						o = Object(w.a)(i),
						a = ((e, t) => {
							let n, r = 0;
							const i = new Date,
								o = i.getDate(),
								a = i.getMonth(),
								s = i.getFullYear();
							for (; r < e.length && !n;) {
								const i = e[r],
									c = new Date(i.sentAt),
									d = c.getDate(),
									l = c.getMonth(),
									u = c.getFullYear();
								if ((d !== o || l !== a || u !== s) && !n) {
									n = ((t || 0) + r).toString()
								} else r++
							}
							return n
						})(e, t);
					a && a !== o && n(R({
						index: a
					}))
				}, R = Object(i.a)(s.f), M = (Object(i.a)(s.g), Object(i.a)(s.e)), F = e => async (t, n, {
					gqlContext: i
				}) => {
					const o = [e];
					if ((await ((e, t) => Object(u.a)(e, {
							...l,
							variables: {
								input: t
							}
						}))(i(), {
							notificationIds: o
						})).ok) {
						t(M({
							id: e
						}));
						const i = Object(w.f)(n());
						t(L(i)), t(Object(d.e)(Object(d.d)(r.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), j.b.SuccessCommunityGreen)))
					} else t(Object(d.e)(Object(d.d)(r.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), j.b.Error)))
				}, U = (e, t) => async (n, i, {
					gqlContext: o
				}) => {
					if (!e) return;
					const a = i(),
						s = () => {
							const n = Object(S.e)(a),
								i = r.fbt._("Success! You won't see notifications from this community in the future.", null, {
									hk: "2tkhbk"
								});
							return n ? Object(d.e)(Object(d.d)(i, j.b.Undo, r.fbt._("Undo", null, {
								hk: "4zFGDk"
							}), ((e, t) => async (n, i, {
								gqlContext: o
							}) => {
								if (!e) return;
								(await Object(v.b)(o(), e, {
									isSubredditUpdatesInterestingPostEnabled: !0,
									isUpdateFromSubredditEnabled: !0
								})).ok ? (t && t(), n(Object(d.e)(Object(d.d)(r.fbt._("Success! Undone hiding notifications from this community.", null, {
									hk: "1na0NP"
								}), j.b.SuccessCommunityGreen)))) : n(Object(d.e)(Object(d.d)(r.fbt._("Failed to undo hiding notifications, please try again.", null, {
									hk: "4jo7Pf"
								}), j.b.Error)))
							})(e, t))) : Object(d.e)(Object(d.d)(i, j.b.SuccessCommunityGreen))
						};
					(await Object(v.b)(o(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n(s()) : n(Object(d.e)(Object(d.d)(r.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), j.b.Error)))
				}, B = (e, t) => async (n, i, {
					gqlContext: o
				}) => {
					if (!e) return;
					const s = i(),
						c = () => {
							const n = Object(S.e)(s),
								i = r.fbt._("Success! You won't see notifications like this in the future.", null, {
									hk: "1ijcqU"
								});
							return n ? Object(d.e)(Object(d.d)(i, j.b.Undo, r.fbt._("Undo", null, {
								hk: "4zFGDk"
							}), ((e, t) => async (n, i, {
								gqlContext: o
							}) => {
								(await Object(p.b)(o(), {
									isEnabled: !0,
									messageType: e
								})).ok ? (Object(_.c)(i(), e) && Object(a.c)(n, {
									isEnabled: !1,
									messageType: e
								}), t && t(), n(Object(d.e)(Object(d.d)(r.fbt._("Success! Notifications like this were turned on.", null, {
									hk: "2krVMd"
								}), j.b.SuccessCommunityGreen)))) : n(Object(d.e)(Object(d.d)(r.fbt._("Failed to turn on these types of notifications.", null, {
									hk: "1dBLEQ"
								}), j.b.Error)))
							})(e, t))) : Object(d.e)(Object(d.d)(i, j.b.SuccessCommunityGreen))
						};
					(await Object(p.b)(o(), {
						isEnabled: !1,
						messageType: e
					})).ok ? (Object(_.c)(s, e) && Object(a.c)(n, {
						isEnabled: !1,
						messageType: e
					}), n(c())) : n(Object(d.e)(Object(d.d)(r.fbt._("Failed to turn off these types of notifications, please try again.", null, {
						hk: "2pNRDO"
					}), j.b.Error)))
				}, D = e => async (t, n, {
					apiContext: i
				}) => {
					if (!e) return;
					(await ((e, t) => Object(m.a)(Object(h.a)(e, [g.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/sendreplies`),
						method: b.cb.POST,
						data: {
							id: t
						}
					}))(i(), e)).ok ? t(Object(d.e)(Object(d.d)(r.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), j.b.SuccessCommunityGreen))) : t(Object(d.e)(Object(d.d)(r.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), j.b.Error)))
				}, H = Object(i.a)(s.c), q = (e, t) => async (n, r, {
					apiContext: i
				}) => {
					let a;
					if (t === E.a.CommentReply || t === E.a.PostReply || t === E.a.PrivateMessage || t === E.a.UsernameMention) {
						if ((a = await ((e, t) => Object(m.a)(Object(h.a)(e, [g.a]), {
								endpoint: Object(y.a)(`${e.apiUrl}/api/read_message`),
								method: b.cb.POST,
								data: {
									id: t
								}
							}))(i(), e)).ok) {
							let e = Object(C.a)(r());
							if (e > 0) {
								e--;
								const t = Object(o.e)({
									count: e,
									key: T.c.ActivityTab
								});
								n(Object(o.a)(t)), n(Object(c.e)())
							}
						}
					} else a = await ((e, t) => Object(m.a)(Object(h.a)(e, [g.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/read_notification`),
						method: b.cb.POST,
						data: {
							id: t
						}
					}))(i(), e);
					if (a.ok) {
						const t = (new Date).toISOString();
						n(H({
							id: e,
							now: t
						}))
					}
				}, W = () => async (e, t, {
					gqlContext: n
				}) => {
					const r = (new Date).toLocaleDateString(),
						i = await ((e, t) => Object(u.a)(e, {
							...x,
							variables: {
								input: t
							}
						}))(n(), {
							lastSentAt: r
						});
					if (i.ok) {
						const t = i.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(o.a)(n)), e(Object(c.d)()))
					}
				}, G = () => async (e, t, {
					apiContext: n
				}) => {
					if ((await ((e, t) => Object(m.a)(Object(h.a)(e, [g.a]), {
							endpoint: Object(y.a)(`${e.apiUrl}/api/read_all_messages`),
							method: b.cb.POST,
							data: {
								filter_type: t
							}
						}))(n())).ok) {
						const t = Object(o.e)({
								count: 0,
								key: T.c.MessageTab
							}),
							n = Object(o.e)({
								count: 0,
								key: T.c.ActivityTab
							});
						e(Object(o.a)({
							...t,
							...n
						}))
					} else e(Object(d.e)(Object(d.d)(r.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
						hk: "VW7c3"
					}), j.b.Error)))
				}
		},
		"./src/reddit/actions/pages/notificationsInbox.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "notificationsInboxPageRequested", (function() {
				return p
			}));
			var r = n("./node_modules/react-router-redux/es/index.js"),
				i = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/actions/notificationsInbox/index.ts"),
				a = n("./src/reddit/actions/users.ts"),
				s = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = n("./src/reddit/routes/notificationsInbox/index.ts"),
				d = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				l = n("./src/reddit/selectors/notificationsInbox.tsx"),
				u = n("./src/reddit/selectors/user.ts");
			const p = () => async (e, t) => {
				const n = t();
				if (!(Object(u.K)(n) || Object(u.J)(n))) return Object(s.a)(e, n);
				Object(d.d)(n) ? (e(f()), await e(b())) : e(Object(r.c)("/"))
			}, f = () => Object(i.k)({
				actionSource: i.a.NotificationsInbox,
				redirectUrl: c.b
			}), b = () => async (e, t) => {
				const n = t(),
					r = Object(l.g)(t()),
					i = !(!r || !r.length),
					s = Object(u.K)(n) || Object(u.J)(n);
				if (i || !s || !Object(d.d)(n)) return;
				const c = {
					first: 10
				};
				await e(Object(a.r)()), e(Object(o.d)(c))
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
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/lib/loadWithRetries/index.ts"),
				f = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				m = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				y = n("./src/reddit/selectors/userPrefs.ts"),
				O = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				v = n.n(O);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), T = u.a.div("BladeContainer", v.a), E = u.a.wrapped(m.a, "CloseIcon", v.a), j = u.a.div("LoadingTitleContainer", v.a), C = u.a.div("LoadingNavContainer", v.a), S = u.a.div("ShortLoadingNav", v.a), _ = u.a.wrapped(b.a, "ThemedChevron", v.a), w = ({
				...e
			}) => a.a.createElement(T, null, a.a.createElement(E, null), a.a.createElement(f.k, null, a.a.createElement(f.p, null, x._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), a.a.createElement(f.o, null, a.a.createElement(j, null, a.a.createElement("div", {
				className: Object(l.a)(v.a.LoadingTitle, e.isLoading && v.a.loading)
			})), a.a.createElement(C, null, a.a.createElement("div", {
				className: Object(l.a)(v.a.LoadingNav, e.isLoading && v.a.loading)
			}), a.a.createElement(_, null)), a.a.createElement(C, null, a.a.createElement(S, null), a.a.createElement(_, null)), a.a.createElement(C, null, a.a.createElement("div", {
				className: Object(l.a)(v.a.LoadingNav, e.isLoading && v.a.loading)
			}), a.a.createElement(_, null)), a.a.createElement(C, null, a.a.createElement(S, null), a.a.createElement(_, null)), a.a.createElement(C, null, a.a.createElement("div", {
				className: Object(l.a)(v.a.LoadingNav, e.isLoading && v.a.loading)
			}), a.a.createElement(_, null))))), k = Object(d.a)({
				getComponent: () => Object(p.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => a.a.createElement(w, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => a.a.createElement(w, {
					gradientType: "posts",
					isLoading: !0
				})
			}), I = Object(c.c)({
				isEditing: g.i,
				isSubscriptionsPinned: y.b,
				moderatorPermissions: h.i
			});
			t.a = Object(s.b)(I)(e => {
				const t = e.moderatorPermissions && i()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? a.a.createElement("div", {
					className: Object(l.a)(v.a.Container, e.isSubscriptionsPinned && v.a.isSubscriptionPinned)
				}, e.children, a.a.createElement(k, {
					subredditId: e.subredditId
				})) : a.a.createElement(o.Fragment, null, e.children)
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
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return x
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(i);
			const a = r.a.section("FormPage", o.a),
				s = r.a.h1("HomePageTitle", o.a),
				c = r.a.button("HomePageBreadcrumb", o.a),
				d = r.a.div("HomePageGroup", o.a),
				l = r.a.h1("FormPageTitle", o.a),
				u = r.a.div("FormPageSection", o.a),
				p = r.a.div("FormGroup", o.a),
				f = r.a.h2("FormGroupTitle", o.a),
				b = r.a.div("FormElement", o.a),
				m = r.a.div("FormGroupDescription", o.a),
				h = r.a.div("FormItem", o.a),
				g = r.a.h3("FormElementTitle", o.a),
				y = r.a.div("FormElementDescription", o.a),
				O = r.a.div("FormElementError", o.a),
				v = r.a.div("FormElementSubGroup", o.a),
				x = r.a.li("FormListItem", o.a)
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
				return T
			}));
			var r, i = n("./node_modules/lodash/throttle.js"),
				o = n.n(i),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				p = n("./src/reddit/constants/zIndex.ts"),
				f = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				m = n("./src/reddit/components/TabNav/index.m.less"),
				h = n.n(m);

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
			const y = l.a.wrapped(b.a, "Gear", h.a),
				O = l.a.h3("Title", h.a),
				v = l.a.div("TabNavContainer", h.a),
				x = l.a.div("Tabs", h.a),
				T = l.a.wrapped(({
					active: e,
					children: t,
					enabled: n,
					...r
				}) => s.a.createElement(f.a, g({}, r, {
					"aria-selected": e,
					className: Object(c.a)(r.className, {
						[h.a.mIsActive]: e,
						[h.a.mIsEnabled]: !1 !== n
					}),
					role: "tab"
				}), t), "Tab", h.a),
				E = e => {
					switch (e) {
						case r.GEAR:
							return s.a.createElement(y, null);
						default:
							return null
					}
				},
				j = () => window.pageYOffset || window.scrollY,
				C = 75,
				S = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: u.f,
					willChange: "transform",
					zIndex: p.g
				};
			class _ extends s.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = o()(() => {
						this.state.sticky || this.forceUnsticky ? j() < C && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : j() >= C && this.setState({
							sticky: !0
						})
					}, d.G), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
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
						[h.a.mResponsive]: t
					});
					return s.a.createElement(v, {
						className: Object(c.a)(r, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, s.a.createElement(O, {
						className: Object(c.a)(r, {
							[h.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, E(this.props.icon), this.props.title), s.a.createElement(x, {
						className: Object(c.a)(r, {
							[h.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? S : void 0
					}, this.props.children))
				}
			}
			t.c = _
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-helmet/es/Helmet.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/pageTitle.ts"),
				d = n("./src/reddit/helpers/tabBadging/index.ts"),
				l = n("./src/reddit/selectors/appBadges.ts");
			const u = Object(s.a)(l.c, e => ({
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
					return Object(d.b)(this.props.badgeCount > 0), i.a.createElement(o.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(a.b)(u)(p)
		},
		"./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			}));
			var r = n("./src/graphql/operations/NotificationSettingsLayoutByChannel.json"),
				i = n("./src/graphql/operations/UpdateNotificationPreferences.json"),
				o = n("./src/lib/makeGqlRequest/index.ts");
			const a = (e, t) => Object(o.a)(e, {
					...r,
					variables: t
				}),
				s = (e, t) => Object(o.a)(e, {
					...i,
					variables: {
						input: {
							preferences: [t]
						}
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
				i = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				s = n.n(a);
			t.a = e => i.a.createElement("svg", {
				className: Object(o.a)(s.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, i.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), i.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			var r, i;
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return i
				})),
				function(e) {
					e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentReply = "COMMENT_REPLY", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(r || (r = {})),
				function(e) {
					e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Trophy = "TROPHY", e.Reply = "REPLY", e.SortRising = "SORT_RISING", e.SortLive = "SORT_LIVE", e.SortTop = "SORT_TOP", e.Live = "LIVE", e.Redditor = "REDDITOR", e.Upvote = "UPVOTE"
				}(i || (i = {}))
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH"
				}(r || (r = {}))
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
				i = n.n(r),
				o = n("./src/lib/pageTitle.ts"),
				a = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				s = n("./src/reddit/components/TitleTagManager/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/layout/page/Listing/index.tsx"),
				u = n("./node_modules/react-redux/es/index.js"),
				p = n("./node_modules/reselect/es/index.js"),
				f = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				b = n("./src/reddit/actions/notificationsInbox/index.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				h = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				g = n("./src/lib/lessComponent.tsx"),
				y = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				O = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				v = n("./src/reddit/helpers/trackers/inbox.ts"),
				x = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx"),
				T = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				E = n.n(T);
			const j = "",
				C = .5,
				S = g.a.span("divider", E.a),
				_ = g.a.wrapped(y.a, "NotificationUnit", E.a);
			class w extends i.a.Component {
				constructor() {
					super(...arguments), this.earlierDividerNotificationId = j, this.todayDividerNotificationId = j, this.fetchNotifications = e => {
						const {
							cursor: t
						} = this.props;
						e.isIntersecting && t && this.props.fetchNotifications({
							after: t,
							first: 10
						})
					}, this.renderNotificationItem = e => i.a.createElement(_, {
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
						return i.a.createElement(i.a.Fragment, null, r && i.a.createElement(S, null, "Today"), r && i.a.createElement("ul", null, t.map(this.renderNotificationItem)), n && i.a.createElement(S, null, "Earlier"), n && i.a.createElement("ul", null, e && e.map(this.renderNotificationItem)))
					}
				}
				componentDidMount() {
					this.props.updateInboxActivitySeenState(), this.props.sendEvent(Object(v.k)({
						badgeCount: this.props.inboxBadgeCount,
						tab: v.c.Activity
					}))
				}
				render() {
					const {
						hasNextPage: e,
						earlierNotifications: t,
						isPending: n,
						todayNotifications: r
					} = this.props, o = !!((t && t.length || 0) + (r && r.length));
					return i.a.createElement("div", {
						className: E.a.notificationsContainer
					}, !o && n && i.a.createElement(O.a, null), !o && !n && i.a.createElement(x.a, null), o && this.renderNotifications(), o && !n && e && i.a.createElement(h.a, {
						onChange: this.fetchNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: C
					}, i.a.createElement("div", null)))
				}
			}
			var k = Object(c.c)(w),
				I = n("./src/reddit/selectors/appBadges.ts"),
				N = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				P = n("./src/reddit/selectors/notificationsInbox.tsx"),
				A = n("./src/reddit/selectors/tooltip.ts");
			const L = Object(p.c)({
				activeOverflowMenuId: A.a,
				cursor: P.c,
				earlierNotifications: P.b,
				hasNextPage: P.d,
				inboxBadgeCount: I.h,
				isInboxPostEmbedEnabled: N.c,
				isPending: P.e,
				todayNotifications: P.h
			});
			var R = Object(u.b)(L, e => ({
					clearMessageTabBadgeCount: () => e(Object(f.b)()),
					disableMessageTypeNotifications: (t, n) => e(Object(b.b)(t, n)),
					disableNotificationUpdates: t => e(Object(b.c)(t)),
					fetchNotifications: t => e(Object(b.d)(t)),
					hideNotification: t => e(Object(b.a)(t)),
					hideSubredditNotifications: (t, n) => e(Object(b.e)(t, n)),
					markNotificationAsRead: (t, n) => e(Object(b.g)(t, n)),
					setActiveOverflowMenuId: t => {
						e(Object(m.h)({
							tooltipId: t
						}))
					},
					updateInboxActivitySeenState: () => e(Object(b.h)())
				}))(k),
				M = n("./node_modules/fbt/lib/FbtPublic.js"),
				F = n("./src/reddit/components/BadgeCounter/index.tsx"),
				U = n("./src/reddit/components/TabNav/index.tsx"),
				B = n("./src/reddit/controls/InternalLink/index.tsx"),
				D = n("./src/reddit/hooks/useTracking.ts"),
				H = n("./src/reddit/icons/svgs/MarkAsRead/index.tsx"),
				q = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				W = n("./src/reddit/pages/NotificationsInbox/NavBar/index.m.less"),
				G = n.n(W);
			const Y = g.a.wrapped(F.a, "Badge", G.a),
				z = g.a.wrapped(q.a, "Gear", G.a),
				J = g.a.wrapped(H.a, "MarkAsRead", G.a),
				Q = g.a.wrapped(U.a, "Tab", G.a);
			var K = e => {
				const {
					isInboxMarkAllAsReadEnabled: t,
					messagesTabBadgeCount: n,
					notificationsTabBadgeCount: r
				} = e, o = Object(D.a)(), a = !!n;
				return i.a.createElement("div", {
					className: G.a.navContainer
				}, i.a.createElement("h1", {
					className: G.a.navHeader
				}, M.fbt._("Notifications", null, {
					hk: "18kEAD"
				})), i.a.createElement("nav", {
					className: G.a.navBar
				}, i.a.createElement("ul", null, i.a.createElement("li", null, i.a.createElement(Q, {
					active: !0,
					to: "/notifications"
				}, M.fbt._("Activity", null, {
					hk: "24wHCv"
				})), i.a.createElement(Y, {
					isActive: !!r,
					unreadCount: r
				})), i.a.createElement("li", null, i.a.createElement(Q, {
					active: !1,
					onMouseDown: () => {
						o(Object(v.k)({
							badgeCount: n + r,
							tab: v.c.Messages
						})), e.clearMessageTabBadgeCount()
					},
					to: a ? "/message/unread" : "/message/messages"
				}, M.fbt._("Messages", null, {
					hk: "Xl3Wz"
				})), i.a.createElement(Y, {
					isActive: a,
					unreadCount: n
				})), t && i.a.createElement("li", null, i.a.createElement("button", {
					className: G.a.navLink,
					onClick: () => {
						e.markAllAsRead(), o(Object(v.d)({
							isMiniInbox: !1
						}))
					}
				}, i.a.createElement(J, null), M.fbt._("Mark as read", null, {
					hk: "3IycES"
				}))), i.a.createElement("li", null, i.a.createElement(B.a, {
					className: G.a.navLink,
					onClick: () => o(Object(v.j)(v.a.Inbox)),
					to: "/settings/notifications"
				}, i.a.createElement(z, null), M.fbt._("Settings", null, {
					hk: "1e9Jn"
				}))))))
			};
			const V = Object(p.c)({
				isInboxMarkAllAsReadEnabled: N.b,
				messagesTabBadgeCount: I.i,
				notificationsTabBadgeCount: I.a
			});
			var X = Object(u.b)(V, e => ({
					clearMessageTabBadgeCount: () => e(Object(f.b)()),
					markAllAsRead: () => e(Object(b.f)())
				}))(e => i.a.createElement(K, e)),
				Z = n("./src/reddit/pages/NotificationsInbox/index.m.less"),
				$ = n.n(Z);
			const ee = Object(d.t)();
			class te extends i.a.Component {
				render() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(s.a, {
						title: Object(o.e)().toString()
					}), i.a.createElement(a.a, null, i.a.createElement(l.a, {
						contentClassName: $.a.contentClassName,
						content: i.a.createElement(R, null),
						disableFullscreen: !0,
						navBar: i.a.createElement(X, null)
					})))
				}
			}
			t.default = ee(Object(c.c)(te))
		},
		"./src/reddit/selectors/notificationsInbox.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			}));
			var r = n("./node_modules/reselect/es/index.js");
			const i = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				o = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				a = Object(r.a)(o, e => !(!e || !e.hasNextPage)),
				s = Object(r.a)(o, e => e && e.endCursor),
				c = e => e.notificationsInbox && e.notificationsInbox.notifications,
				d = Object(r.a)(c, e => e.slice(0, 5)),
				l = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				u = Object(r.a)(c, l, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				p = Object(r.a)(c, l, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsInbox.ecf32de98dd4d289b6dc.js.map