// https://www.redditstatic.com/desktop2x/Topic.b70125d23724f9b4fc6e.js
// Retrieved at 3/11/2021, 1:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Topic"], {
		"./node_modules/intersection-observer/intersection-observer.js": function(e, t) {
			! function(e, t) {
				"use strict";
				if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var r = [];
					s.prototype.THROTTLE_TIMEOUT = 100, s.prototype.POLL_INTERVAL = null, s.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, s.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, s.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, s.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, s.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, r) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== r[t - 1]
						}))
					}, s.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, s.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, s.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, s.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							r = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(s) {
							var i = s.element,
								o = a(i),
								c = this._rootContainsTarget(i),
								d = s.entry,
								l = t && c && this._computeTargetAndRootIntersection(i, r),
								u = s.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: i,
									boundingClientRect: o,
									rootBounds: r,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(r, n) {
						if ("none" != e.getComputedStyle(r).display) {
							for (var s, i, o, c, l, u, p, m, h = a(r), b = d(r), f = !1; !f;) {
								var g = null,
									v = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == v.display) return;
								if (b == this.root || b == t ? (f = !0, g = n) : b != t.body && b != t.documentElement && "visible" != v.overflow && (g = a(b)), g && (s = g, i = h, o = void 0, c = void 0, l = void 0, u = void 0, p = void 0, m = void 0, o = Math.max(s.top, i.top), c = Math.min(s.bottom, i.bottom), l = Math.max(s.left, i.left), u = Math.min(s.right, i.right), m = c - o, !(h = (p = u - l) >= 0 && m >= 0 && {
										top: o,
										bottom: c,
										left: l,
										right: u,
										width: p,
										height: m
									}))) break;
								b = d(b)
							}
							return h
						}
					}, s.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var r = t.documentElement,
								n = t.body;
							e = {
								top: 0,
								left: 0,
								right: r.clientWidth || n.clientWidth,
								width: r.clientWidth || n.clientWidth,
								bottom: r.clientHeight || n.clientHeight,
								height: r.clientHeight || n.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, s.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, r) {
								return "px" == t.unit ? t.value : t.value * (r % 2 ? e.width : e.height) / 100
							})),
							r = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return r.width = r.right - r.left, r.height = r.bottom - r.top, r
					}, s.prototype._hasCrossedThreshold = function(e, t) {
						var r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (r !== n)
							for (var s = 0; s < this.thresholds.length; s++) {
								var i = this.thresholds[s];
								if (i == r || i == n || i < r != i < n) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, s.prototype._registerInstance = function() {
						r.indexOf(this) < 0 && r.push(this)
					}, s.prototype._unregisterInstance = function() {
						var e = r.indexOf(this); - 1 != e && r.splice(e, 1)
					}, e.IntersectionObserver = s, e.IntersectionObserverEntry = n
				}

				function n(e) {
					this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}, this.isIntersecting = !!e.intersectionRect;
					var t = this.boundingClientRect,
						r = t.width * t.height,
						n = this.intersectionRect,
						s = n.width * n.height;
					this.intersectionRatio = r ? s / r : this.isIntersecting ? 1 : 0
				}

				function s(e, t) {
					var r, n, s, i = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (r = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							r(), s = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function i(e, t, r, n) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, r, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, r)
				}

				function o(e, t, r, n) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, r, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, r)
				}

				function a(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (r) {}
					return t ? (t.width && t.height || (t = {
						top: t.top,
						right: t.right,
						bottom: t.bottom,
						left: t.left,
						width: t.right - t.left,
						height: t.bottom - t.top
					}), t) : {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}
				}

				function c(e, t) {
					for (var r = t; r;) {
						if (r == e) return !0;
						r = d(r)
					}
					return !1
				}

				function d(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseTimes.js"),
				s = r("./node_modules/lodash/_castFunction.js"),
				i = r("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var r = a,
					d = c(e, a);
				t = s(t), e -= a;
				for (var l = n(d, t); ++r < e;) t(r);
				return l
			}
		},
		"./node_modules/react-helmet/es/Helmet.js": function(e, t, r) {
			"use strict";
			(function(e) {
				var n, s, i, o, a = r("./node_modules/react-helmet/node_modules/prop-types/index.js"),
					c = r.n(a),
					d = r("./node_modules/react-side-effect/lib/index.js"),
					l = r.n(d),
					u = r("./node_modules/react-fast-compare/index.js"),
					p = r.n(u),
					m = r("./node_modules/react/index.js"),
					h = r.n(m),
					b = r("./node_modules/object-assign/index.js"),
					f = r.n(b),
					g = "bodyAttributes",
					v = "htmlAttributes",
					y = "titleAttributes",
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
					_ = "href",
					S = "http-equiv",
					C = "innerHTML",
					O = "itemprop",
					w = "name",
					L = "property",
					j = "rel",
					P = "src",
					I = "target",
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
					k = "defaultTitle",
					R = "defer",
					A = "encodeSpecialCharacters",
					F = "onChangeClientState",
					M = "titleTemplate",
					B = Object.keys(N).reduce((function(e, t) {
						return e[N[t]] = t, e
					}), {}),
					H = [T.NOSCRIPT, T.SCRIPT, T.STYLE],
					W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					V = function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					},
					D = function() {
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
					U = Object.assign || function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = arguments[t];
							for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
						}
						return e
					},
					J = function(e, t) {
						var r = {};
						for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
						return r
					},
					G = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					},
					q = function(e) {
						var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
					},
					z = function(e) {
						var t = X(e, T.TITLE),
							r = X(e, M);
						if (r && t) return r.replace(/%s/g, (function() {
							return Array.isArray(t) ? t.join("") : t
						}));
						var n = X(e, k);
						return t || n || void 0
					},
					K = function(e) {
						return X(e, F) || function() {}
					},
					Y = function(e, t) {
						return t.filter((function(t) {
							return void 0 !== t[e]
						})).map((function(t) {
							return t[e]
						})).reduce((function(e, t) {
							return U({}, e, t)
						}), {})
					},
					Q = function(e, t) {
						return t.filter((function(e) {
							return void 0 !== e[T.BASE]
						})).map((function(e) {
							return e[T.BASE]
						})).reverse().reduce((function(t, r) {
							if (!t.length)
								for (var n = Object.keys(r), s = 0; s < n.length; s++) {
									var i = n[s].toLowerCase();
									if (-1 !== e.indexOf(i) && r[i]) return t.concat(r)
								}
							return t
						}), [])
					},
					Z = function(e, t, r) {
						var n = {};
						return r.filter((function(t) {
							return !!Array.isArray(t[e]) || (void 0 !== t[e] && ne("Helmet: " + e + ' should be of type "Array". Instead found type "' + W(t[e]) + '"'), !1)
						})).map((function(t) {
							return t[e]
						})).reverse().reduce((function(e, r) {
							var s = {};
							r.filter((function(e) {
								for (var r = void 0, i = Object.keys(e), o = 0; o < i.length; o++) {
									var a = i[o],
										c = a.toLowerCase(); - 1 === t.indexOf(c) || r === j && "canonical" === e[r].toLowerCase() || c === j && "stylesheet" === e[c].toLowerCase() || (r = c), -1 === t.indexOf(a) || a !== C && a !== E && a !== O || (r = a)
								}
								if (!r || !e[r]) return !1;
								var d = e[r].toLowerCase();
								return n[r] || (n[r] = {}), s[r] || (s[r] = {}), !n[r][d] && (s[r][d] = !0, !0)
							})).reverse().forEach((function(t) {
								return e.push(t)
							}));
							for (var i = Object.keys(s), o = 0; o < i.length; o++) {
								var a = i[o],
									c = f()({}, n[a], s[a]);
								n[a] = c
							}
							return e
						}), []).reverse()
					},
					X = function(e, t) {
						for (var r = e.length - 1; r >= 0; r--) {
							var n = e[r];
							if (n.hasOwnProperty(t)) return n[t]
						}
						return null
					},
					$ = (n = Date.now(), function(e) {
						var t = Date.now();
						t - n > 16 ? (n = t, e(t)) : setTimeout((function() {
							$(e)
						}), 0)
					}),
					ee = function(e) {
						return clearTimeout(e)
					},
					te = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || $ : e.requestAnimationFrame || $,
					re = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || ee : e.cancelAnimationFrame || ee,
					ne = function(e) {
						return console && "function" == typeof console.warn && console.warn(e)
					},
					se = null,
					ie = function(e, t) {
						var r = e.baseTag,
							n = e.bodyAttributes,
							s = e.htmlAttributes,
							i = e.linkTags,
							o = e.metaTags,
							a = e.noscriptTags,
							c = e.onChangeClientState,
							d = e.scriptTags,
							l = e.styleTags,
							u = e.title,
							p = e.titleAttributes;
						ce(T.BODY, n), ce(T.HTML, s), ae(u, p);
						var m = {
								baseTag: de(T.BASE, r),
								linkTags: de(T.LINK, i),
								metaTags: de(T.META, o),
								noscriptTags: de(T.NOSCRIPT, a),
								scriptTags: de(T.SCRIPT, d),
								styleTags: de(T.STYLE, l)
							},
							h = {},
							b = {};
						Object.keys(m).forEach((function(e) {
							var t = m[e],
								r = t.newTags,
								n = t.oldTags;
							r.length && (h[e] = r), n.length && (b[e] = m[e].oldTags)
						})), t && t(), c(e, h, b)
					},
					oe = function(e) {
						return Array.isArray(e) ? e.join("") : e
					},
					ae = function(e, t) {
						void 0 !== e && document.title !== e && (document.title = oe(e)), ce(T.TITLE, t)
					},
					ce = function(e, t) {
						var r = document.getElementsByTagName(e)[0];
						if (r) {
							for (var n = r.getAttribute("data-react-helmet"), s = n ? n.split(",") : [], i = [].concat(s), o = Object.keys(t), a = 0; a < o.length; a++) {
								var c = o[a],
									d = t[c] || "";
								r.getAttribute(c) !== d && r.setAttribute(c, d), -1 === s.indexOf(c) && s.push(c);
								var l = i.indexOf(c); - 1 !== l && i.splice(l, 1)
							}
							for (var u = i.length - 1; u >= 0; u--) r.removeAttribute(i[u]);
							s.length === i.length ? r.removeAttribute("data-react-helmet") : r.getAttribute("data-react-helmet") !== o.join(",") && r.setAttribute("data-react-helmet", o.join(","))
						}
					},
					de = function(e, t) {
						var r = document.head || document.querySelector(T.HEAD),
							n = r.querySelectorAll(e + "[data-react-helmet]"),
							s = Array.prototype.slice.call(n),
							i = [],
							o = void 0;
						return t && t.length && t.forEach((function(t) {
							var r = document.createElement(e);
							for (var n in t)
								if (t.hasOwnProperty(n))
									if (n === C) r.innerHTML = t.innerHTML;
									else if (n === E) r.styleSheet ? r.styleSheet.cssText = t.cssText : r.appendChild(document.createTextNode(t.cssText));
							else {
								var a = void 0 === t[n] ? "" : t[n];
								r.setAttribute(n, a)
							}
							r.setAttribute("data-react-helmet", "true"), s.some((function(e, t) {
								return o = t, r.isEqualNode(e)
							})) ? s.splice(o, 1) : i.push(r)
						})), s.forEach((function(e) {
							return e.parentNode.removeChild(e)
						})), i.forEach((function(e) {
							return r.appendChild(e)
						})), {
							oldTags: s,
							newTags: i
						}
					},
					le = function(e) {
						return Object.keys(e).reduce((function(t, r) {
							var n = void 0 !== e[r] ? r + '="' + e[r] + '"' : "" + r;
							return t ? t + " " + n : n
						}), "")
					},
					ue = function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return Object.keys(e).reduce((function(t, r) {
							return t[N[r] || r] = e[r], t
						}), t)
					},
					pe = function(e, t, r) {
						switch (e) {
							case T.TITLE:
								return {
									toComponent: function() {
										return e = t.title, r = t.titleAttributes, (n = {
											key: e
										})["data-react-helmet"] = !0, s = ue(r, n), [h.a.createElement(T.TITLE, s, e)];
										var e, r, n, s
									}, toString: function() {
										return function(e, t, r, n) {
											var s = le(r),
												i = oe(t);
											return s ? "<" + e + ' data-react-helmet="true" ' + s + ">" + q(i, n) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + q(i, n) + "</" + e + ">"
										}(e, t.title, t.titleAttributes, r)
									}
								};
							case g:
							case v:
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
											return t.map((function(t, r) {
												var n, s = ((n = {
													key: r
												})["data-react-helmet"] = !0, n);
												return Object.keys(t).forEach((function(e) {
													var r = N[e] || e;
													if (r === C || r === E) {
														var n = t.innerHTML || t.cssText;
														s.dangerouslySetInnerHTML = {
															__html: n
														}
													} else s[r] = t[e]
												})), h.a.createElement(e, s)
											}))
										}(e, t)
									}, toString: function() {
										return function(e, t, r) {
											return t.reduce((function(t, n) {
												var s = Object.keys(n).filter((function(e) {
														return !(e === C || e === E)
													})).reduce((function(e, t) {
														var s = void 0 === n[t] ? t : t + '="' + q(n[t], r) + '"';
														return e ? e + " " + s : s
													}), ""),
													i = n.innerHTML || n.cssText || "",
													o = -1 === H.indexOf(e);
												return t + "<" + e + ' data-react-helmet="true" ' + s + (o ? "/>" : ">" + i + "</" + e + ">")
											}), "")
										}(e, t, r)
									}
								}
						}
					},
					me = function(e) {
						var t = e.baseTag,
							r = e.bodyAttributes,
							n = e.encode,
							s = e.htmlAttributes,
							i = e.linkTags,
							o = e.metaTags,
							a = e.noscriptTags,
							c = e.scriptTags,
							d = e.styleTags,
							l = e.title,
							u = void 0 === l ? "" : l,
							p = e.titleAttributes;
						return {
							base: pe(T.BASE, t, n),
							bodyAttributes: pe(g, r, n),
							htmlAttributes: pe(v, s, n),
							link: pe(T.LINK, i, n),
							meta: pe(T.META, o, n),
							noscript: pe(T.NOSCRIPT, a, n),
							script: pe(T.SCRIPT, c, n),
							style: pe(T.STYLE, d, n),
							title: pe(T.TITLE, {
								title: u,
								titleAttributes: p
							}, n)
						}
					},
					he = l()((function(e) {
						return {
							baseTag: Q([_, I], e),
							bodyAttributes: Y(g, e),
							defer: X(e, R),
							encode: X(e, A),
							htmlAttributes: Y(v, e),
							linkTags: Z(T.LINK, [j, _], e),
							metaTags: Z(T.META, [w, x, S, L, O], e),
							noscriptTags: Z(T.NOSCRIPT, [C], e),
							onChangeClientState: K(e),
							scriptTags: Z(T.SCRIPT, [P, C], e),
							styleTags: Z(T.STYLE, [E], e),
							title: z(e),
							titleAttributes: Y(y, e)
						}
					}), (function(e) {
						se && re(se), e.defer ? se = te((function() {
							ie(e, (function() {
								se = null
							}))
						})) : (ie(e), se = null)
					}), me)((function() {
						return null
					})),
					be = (s = he, o = i = function(e) {
						function t() {
							return V(this, t), G(this, e.apply(this, arguments))
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
							var t, r = e.child,
								n = e.arrayTypeChildren,
								s = e.newChildProps,
								i = e.nestedChildren;
							return U({}, n, ((t = {})[r.type] = [].concat(n[r.type] || [], [U({}, s, this.mapNestedChildrenToProps(r, i))]), t))
						}, t.prototype.mapObjectTypeChildren = function(e) {
							var t, r, n = e.child,
								s = e.newProps,
								i = e.newChildProps,
								o = e.nestedChildren;
							switch (n.type) {
								case T.TITLE:
									return U({}, s, ((t = {})[n.type] = o, t.titleAttributes = U({}, i), t));
								case T.BODY:
									return U({}, s, {
										bodyAttributes: U({}, i)
									});
								case T.HTML:
									return U({}, s, {
										htmlAttributes: U({}, i)
									})
							}
							return U({}, s, ((r = {})[n.type] = U({}, i), r))
						}, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
							var r = U({}, t);
							return Object.keys(e).forEach((function(t) {
								var n;
								r = U({}, r, ((n = {})[t] = e[t], n))
							})), r
						}, t.prototype.warnOnInvalidChildren = function(e, t) {
							return !0
						}, t.prototype.mapChildrenToProps = function(e, t) {
							var r = this,
								n = {};
							return h.a.Children.forEach(e, (function(e) {
								if (e && e.props) {
									var s = e.props,
										i = s.children,
										o = function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											return Object.keys(e).reduce((function(t, r) {
												return t[B[r] || r] = e[r], t
											}), t)
										}(J(s, ["children"]));
									switch (r.warnOnInvalidChildren(e, i), e.type) {
										case T.LINK:
										case T.META:
										case T.NOSCRIPT:
										case T.SCRIPT:
										case T.STYLE:
											n = r.flattenArrayTypeChildren({
												child: e,
												arrayTypeChildren: n,
												newChildProps: o,
												nestedChildren: i
											});
											break;
										default:
											t = r.mapObjectTypeChildren({
												child: e,
												newProps: t,
												newChildProps: o,
												nestedChildren: i
											})
									}
								}
							})), t = this.mapArrayTypeChildrenToProps(n, t)
						}, t.prototype.render = function() {
							var e = this.props,
								t = e.children,
								r = J(e, ["children"]),
								n = U({}, r);
							return t && (n = this.mapChildrenToProps(t, n)), h.a.createElement(s, n)
						}, D(t, null, [{
							key: "canUseDOM",
							set: function(e) {
								s.canUseDOM = e
							}
						}]), t
					}(h.a.Component), i.propTypes = {
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
					}, i.peek = s.peek, i.rewind = function() {
						var e = s.rewind();
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
					}, o);
				be.renderStatic = be.rewind, t.a = be
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function i() {}
			i.resetWarningCache = s, e.exports = function() {
				function e(e, t, r, s, i, o) {
					if (o !== n) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
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
					resetWarningCache: s
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
			var n, s = r("./node_modules/react/index.js"),
				i = (n = s) && "object" == typeof n && "default" in n ? n.default : n;

			function o(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var a = !("undefined" == typeof window || !window.document || !window.document.createElement);
			e.exports = function(e, t, r) {
				if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
				if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
				if (void 0 !== r && "function" != typeof r) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
				return function(n) {
					if ("function" != typeof n) throw new Error("Expected WrappedComponent to be a React component.");
					var c, d = [];

					function l() {
						c = e(d.map((function(e) {
							return e.props
						}))), u.canUseDOM ? t(c) : r && (c = r(c))
					}
					var u = function(e) {
						var t, r;

						function s() {
							return e.apply(this, arguments) || this
						}
						r = e, (t = s).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, s.peek = function() {
							return c
						}, s.rewind = function() {
							if (s.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
							var e = c;
							return c = void 0, d = [], e
						};
						var o = s.prototype;
						return o.UNSAFE_componentWillMount = function() {
							d.push(this), l()
						}, o.componentDidUpdate = function() {
							l()
						}, o.componentWillUnmount = function() {
							var e = d.indexOf(this);
							d.splice(e, 1), l()
						}, o.render = function() {
							return i.createElement(n, this.props)
						}, s
					}(s.PureComponent);
					return o(u, "displayName", "SideEffect(" + function(e) {
						return e.displayName || e.name || "Component"
					}(n) + ")"), o(u, "canUseDOM", a), u
				}
			}
		},
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"34f3ef97014d"}')
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "b", (function() {
				return O
			}));
			var n, s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/performanceTimings/index.tsx"),
				o = r("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var d, l = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var p = r("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				m = r("./src/reddit/selectors/platform.ts"),
				h = r("./src/reddit/selectors/user.ts");
			const b = Object(s.a)(o.g),
				f = Object(s.a)(o.e),
				g = Object(s.a)(o.h),
				v = Object(s.a)(o.c),
				y = Object(s.a)(o.f),
				T = Object(s.a)(o.j),
				x = Object(s.a)(o.i),
				E = () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t(),
						i = Object(p.e)(s),
						o = Object(p.d)(s),
						d = Object(h.J)(s);
					if (i || !o) return;
					e(g());
					let m = !1;
					try {
						const t = d ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, r) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (_(t)) {
								if (S(t)) {
									e(v({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), m = !0
								} else if (C(t)) {
									const r = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: s,
											category: i
										} = r.focusRecommendations[0],
										o = [n, s],
										a = Object(u.d)(o),
										c = Object(l.b)(o),
										d = Object(u.c)(n),
										p = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [s.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: i,
											lastLoadedEnv: "client"
										};
									e(b(p)), m = !0
								}
							} else m = !1
						}
					} catch (y) {
						m = !1
					}
					m || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						r = t && t.focusRecommendations;
					return !(!r || 0 !== r.length)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						r = t && t.focusRecommendations,
						n = t && t.type;
					return !!(r && !S(e) && n === d.GEO && r[0] && r[0].recommendedSubreddit && r[0].interactedSubreddit)
				}, O = () => async (e, t, r) => {
					var n, s;
					const o = t(),
						a = Object(p.g)(o);
					if (Object(p.f)(o) || null === a || "client" === a) {
						const r = null === (s = null === (n = Object(m.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							a = Object(h.K)(o);
						return Object(i.i)(() => e(E()), {
							name: "getFocusedVerticalsRequested",
							page: r,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(y({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/asTooltip.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = r("./src/reddit/actions/preferences.ts"),
				p = r("./src/reddit/actions/tooltip.ts"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/constants/postLayout.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/contexts/Tooltip.ts"),
				g = r("./src/reddit/controls/Dropdown/index.tsx"),
				v = r("./src/reddit/controls/Dropdown/Row.tsx"),
				y = r("./src/reddit/icons/fonts/index.tsx"),
				T = r("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				x = r("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				E = r("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				_ = r("./src/reddit/selectors/experiments/coreStyles.ts"),
				S = r("./src/reddit/selectors/telemetry.ts"),
				C = r("./src/reddit/selectors/tooltip.ts"),
				O = r("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				w = r.n(O);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = "view--layout--FUE",
				P = "LayoutSwitch--picker",
				I = Object(c.a)(g.a),
				N = {
					[h.d.Card]: E.a,
					[h.d.Classic]: T.a,
					[h.d.Compact]: x.a
				},
				k = {
					[h.d.Card]: function(e) {
						return i.a.createElement(y.a, L({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return i.a.createElement(y.a, L({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return i.a.createElement(y.a, L({}, e, {
							name: "view_compact"
						}))
					}
				},
				R = {
					[h.d.Card]: () => n.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => n.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => n.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				A = Object(b.t)(),
				F = Object(a.c)({
					dropdownIsOpen: Object(C.b)(P),
					isInIcons2020: _.a,
					postLayout: b.O,
					redditStyle: b.A
				}),
				M = Object(o.b)(F, e => ({
					onListingLayoutChange: (t, r) => e(Object(u.x)(t, r)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: P
					}))
				}));
			class B extends i.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: r,
							sendEvent: n,
							subredditId: s
						} = this.props;
						t ? t(e) : (r(e, s), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(S.screen)(t),
							subreddit: Object(S.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							isInIcons2020: r,
							layout: n,
							onLayoutClick: s,
							postLayout: o
						} = this.props, a = n || h.e[o], c = e === a, l = r ? k[e] : N[e], u = R[e];
						return i.a.createElement(v.b, L({}, t, {
							className: Object(d.a)(w.a.LayoutItem, {
								[w.a.selected]: c
							}),
							"data-layout": e,
							displayText: u(),
							iconWrapperClassName: w.a.LayoutItemIconWrapper,
							isSelected: c,
							noHover: c,
							onClick: c ? void 0 : () => this.changeLayout(e),
							textClassName: w.a.LayoutItemTextClassName
						}), i.a.createElement(l, {
							className: w.a.LayoutIcon,
							onClick: c ? void 0 : s,
							isFilled: r && c && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return i.a.createElement(I, L({}, e, {
							className: w.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: w.a.DropdownRow,
							rowIconClassName: w.a.DropdownRowIcon,
							rowSelectedClassName: w.a.DropdownRowSelected,
							tooltipId: P
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: r,
						postLayout: n
					} = this.props, s = t || h.e[n];
					return i.a.createElement("div", {
						className: Object(d.a)(w.a.Container, e),
						id: j
					}, i.a.createElement("div", {
						className: w.a.DropdownContainer,
						onClick: r
					}, this.renderItem(s, {
						id: P,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), i.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = A(M(Object(m.c)(Object(l.a)(B))))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/PostList/index.tsx"),
				s = r("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(s.a)(n.a)
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return K
			})), r.d(t, "a", (function() {
				return Q
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/history/esm/history.js"),
				s = r("./node_modules/lodash/debounce.js"),
				i = r.n(s),
				o = r("./node_modules/lodash/last.js"),
				a = r.n(o),
				c = r("./node_modules/lodash/throttle.js"),
				d = r.n(c),
				l = r("./node_modules/react/index.js"),
				u = r.n(l),
				p = r("./src/lib/addQueryParams/index.ts"),
				m = r("./src/lib/ads/index.ts"),
				h = r("./src/lib/classNames/index.ts"),
				b = r("./src/lib/constants/index.ts"),
				f = r("./src/lib/fastdom/index.ts"),
				g = r("./src/lib/lessComponent.tsx"),
				v = r("./src/lib/opener/index.ts"),
				y = r("./src/lib/sentry/index.ts"),
				T = r("./src/reddit/components/PostList/LoadMore.tsx"),
				x = r("./src/reddit/components/PostList/SomethingWrong.tsx"),
				E = r("./src/reddit/components/Scroller/Simple.tsx"),
				_ = r("./src/reddit/constants/adEvents.ts"),
				S = r("./src/reddit/constants/componentSizes.ts"),
				C = r("./src/reddit/constants/postLayout.ts"),
				O = r("./src/reddit/controls/InternalLink/index.tsx"),
				w = r("./src/reddit/controls/OutboundLink/index.tsx"),
				L = r("./src/reddit/helpers/getClickInfo.ts"),
				j = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				P = r("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				I = r("./src/reddit/models/Media/index.ts"),
				N = r("./src/reddit/helpers/brandSafety/index.ts"),
				k = r("./src/lib/LRUCache/index.ts"),
				R = r("./src/telemetry/index.ts"),
				A = r("./src/telemetry/models/Timer.ts"),
				F = r("./src/reddit/components/PostList/index.m.less"),
				M = r.n(F);
			const {
				fbt: B
			} = r("./node_modules/fbt/lib/FbtPublic.js"), H = 500, W = new k.a(H), V = new k.a(H), D = new k.a(H), U = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, J = g.a.div("SeeMore", M.a), G = g.a.wrapped(P.a, "ArrowRight", M.a), q = (e, t, r, n, s, i, o, a) => {
				const c = `entered-${e}-${t}-${r?`last-${n}-${s}`:""}-${i}`;
				let d = W.get(c);
				return void 0 === d && (d = () => {
					r && o.onBottomViewed(n, s), o.trackOnPostEnteredViewport(e, t, a)
				}, W.set(c, d)), d
			}, z = (e, t, r, n, s) => {
				const i = `left-${e}-${t}`;
				let o = V.get(i);
				return void 0 === o && (o = i => {
					r.trackOnPostExitedViewport(e, t, i, n, s)
				}, V.set(i, o)), o
			}, K = (e, t) => {
				const r = `click-${e}`;
				let n = D.get(r);
				return void 0 === n && (n = (e, r, n, s) => {
					if (r.isSponsored) {
						t.fireAdPixelsOfType(r, _.a.Click);
						const {
							source: e
						} = Object(m.t)(r, s);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							n && (t = Object(w.a)(r.id, n, t).url), Object(v.d)(t, v.c.BLANK)
						}
					} else t.openPost({
						postOrComment: r,
						clickInfo: Object(L.a)(e)
					})
				}, D.set(r, n)), n
			}, Y = (e, t) => {
				const r = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					r.splice(e, 0, t[e])
				}), r
			};
			class Q extends u.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new k.a(H), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = d()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = i()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: r
						} = this.props, n = e(), s = [];
						n.forEach(e => s.push(e.id));
						const i = s.map(e => t[e]).filter(Boolean),
							o = i.map(e => r[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(N.a)(i, o))
					}, b.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && R.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = R.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = R.c.end(this.timerId);
						setTimeout(() => Object(R.b)(b.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && R.c.cancel(this.timerId), e.postIds.length && (this.timerId = R.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, r;
					if (f.a.read(() => this.checkAndSendScreenview()), this.timerId && R.c.has(this.timerId)) {
						const e = R.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(R.b)(b.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const n = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					n && n !== (null === (r = e.postIds) || void 0 === r ? void 0 : r[0]) && this.props.onFirstPostChanged(n)
				}
				componentWillUnmount() {
					this.timerId && R.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: r
					} = this.props;
					return R.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (r || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: r
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = R.c.end(e);
					setTimeout(() => {
						r(t(n, A.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: r
					} = this.props;
					return !r && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						postsById: t,
						...r
					} = this.props, {
						postsById: n,
						...s
					} = e, i = Object.keys(r), o = Object.keys(s);
					if (o.length !== i.length) return !0;
					if (o.some(e => r[e] !== s[e])) return !0;
					if (t === n) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: r
						} = this.props;
						return this.props.postIds.some((s, i) => {
							const o = 0 === i;
							return r({
								isFirstPost: o,
								layout: e,
								post: t[s]
							}) !== r({
								isFirstPost: o,
								layout: e,
								post: n[s]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, r, n) {
					const {
						currentProfileName: s,
						hostPostId: i,
						isCommentPermalink: o,
						isCommentsPage: a,
						isFrontpage: c,
						isProfilePostListing: d,
						isTopicPage: l,
						listingKey: p,
						listingName: m,
						pageLayer: h,
						pageReferrer: f,
						postClickEventFactory: g,
						redditStyle: v,
						shouldHideFlair: T,
						isActionBarAnimationEnabled: x,
						postIds: E
					} = this.props, _ = 0 === t, S = `post-${n}-${e}-${t}-${r?"last-index":""}-${m}-${p}-${f}`;
					let O;
					if (void 0 === (O = this.scrollChildCache.get(S))) {
						const {
							inSubredditOrProfile: w,
							postsById: L
						} = this.props, P = L[e], N = P.crosspostRootId && L[P.crosspostRootId] ? L[P.crosspostRootId] : P;
						P.crosspostRootId && !L[P.crosspostRootId] && y.c.withScope(e => {
							e.setExtra("errorType", b.q.API), e.setExtra("description", `Post ${P.id} is crosspost of ${P.crosspostRootId}, but ` + `${P.crosspostRootId} details are missing in the state`), y.c.captureMessage("Crosspost parent details are missing")
						});
						const k = this.props.postComponentForLayout({
								isCrosspost: !!P.crosspostRootId,
								isFirstPost: _,
								layout: n,
								post: N
							}),
							R = `post-list-item-[layout: ${n}]-[postId: ${e}]`,
							A = q(e, n, r, p, m, f, this.props, t),
							F = z(e, n, this.props, t, h),
							M = K(e, this.props),
							B = N.media && N.media.type === I.o.EMBED ? N.media.provider : null;
						O = {
							estHeight: Object(j.c)(P, n),
							id: e,
							isFocusable: !(!N.media || !(n === C.g.Large || n === C.g.Classic && Object(I.G)(N.media))) && (I.d.has(N.media.type) && (!B || !I.s.has(B)) && !N.isSpoiler && !N.isNSFW),
							trackOnEnteredViewport: A,
							trackOnExitedViewport: F,
							render: ({
								className: t,
								height: n,
								width: b,
								remeasure: f,
								setScrollerChildRef: y,
								shouldLoadInitially: S
							}) => u.a.createElement(k, {
								className: t,
								currentProfileName: s,
								key: R,
								availableWidth: b,
								eventFactory: g,
								first: _,
								forceLoadMedia: S,
								hostPostId: i,
								inSubredditOrProfile: w,
								isActionBarAnimationEnabled: x,
								isCommentPermalink: o,
								isCommentsPage: a,
								isFrontpage: c,
								isProfilePostListing: d,
								isTopicPage: l,
								listingKey: p,
								listingName: m,
								pageLayer: h,
								last: r,
								onClickPost: M,
								onSizeChanged: f,
								postId: e,
								postIds: E,
								redditStyle: v,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: y,
								shouldHideFlair: T
							})
						}, this.scrollChildCache.set(S, O)
					}
					return O
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return u.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: r,
						layout: n,
						onTryAgain: s,
						postListPlaceholderComponent: i
					} = this.props;
					if (r) return;
					const o = i;
					return u.a.createElement("div", {
						className: M.a.placeholder
					}, u.a.createElement(o, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && u.a.createElement(x.a, {
						apiError: e,
						onTryAgain: s
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: r,
						layout: n,
						loadMoreClassName: s,
						onLoadMore: i
					} = this.props;
					if (!r) return u.a.createElement("div", {
						className: M.a.placeholder
					}, u.a.createElement(T.a, {
						className: s,
						isLoading: !!t,
						layout: n,
						countOverride: U[n]
					}), !!e && u.a.createElement(x.a, {
						apiError: e,
						onTryAgain: i
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: r,
						injectChildren: s,
						isTruncated: i,
						layout: o,
						location: a,
						loadMore: c,
						postIds: d,
						onLoadMore: m
					} = this.props;
					let f = d.map((e, t, r) => {
						const n = t === d.length - 1;
						return this.scrollChildForPost(e, t, n, o)
					});
					s && (f = Y(f, s));
					const g = this.props.measureScrollFPS ? `post-listings-${o}` : void 0,
						v = a ? Object(n.e)(a) : null,
						y = v || i;
					return u.a.createElement(l.Fragment, null, u.a.createElement(E.b, {
						innerRef: this.updateScrollerRef,
						className: y ? M.a.truncatedPostList : Object(h.a)(M.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: r,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: m,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: g,
						viewportTopPadding: S.f
					}, f), v && u.a.createElement(J, {
						className: M.a.seeMoreButton
					}, u.a.createElement(O.a, {
						className: M.a.seeMorePostsText,
						to: Object(p.a)(v, {
							type: b.Pb.Posts
						})
					}, B._("See More Posts", null, {
						hk: "3o0CqI"
					}), u.a.createElement(G, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Q.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: u.a.Fragment
			}
		},
		"./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_3tJhQnCiKKw7zk005rnKPi",
				container: "_3tJhQnCiKKw7zk005rnKPi",
				Link: "_1UplSBT2HFX_QHDhVZMx8r",
				link: "_1UplSBT2HFX_QHDhVZMx8r",
				Name: "_36r6mQVhaj58SDTd9Wt-eY",
				name: "_36r6mQVhaj58SDTd9Wt-eY",
				IconContainer: "_1OzhHh5MZVj92UtAsjBwp5",
				iconContainer: "_1OzhHh5MZVj92UtAsjBwp5"
			}
		},
		"./src/reddit/components/RelatedTopicList/index.m.less": function(e, t, r) {
			e.exports = {
				RelatedTopicList: "sACY92mHU6bQuz_UxFIwW",
				relatedTopicList: "sACY92mHU6bQuz_UxFIwW",
				Title: "_5MwovlatIWVRLVWJt1vCL",
				title: "_5MwovlatIWVRLVWJt1vCL"
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/SidebarContainer/index.m.less"),
				i = r.n(s);
			t.a = n.a.div("container", i.a)
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lodash/values.js"),
				s = r.n(n),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/higherOrderComponents/makeAsync.tsx"),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/lib/lessComponent.tsx"),
				p = r("./src/lib/loadWithRetries/index.ts"),
				m = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				h = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
				b = r("./src/reddit/icons/svgs/Close/index.tsx"),
				f = r("./src/reddit/selectors/moderatorPermissions.ts"),
				g = r("./src/reddit/selectors/structuredStyles.ts"),
				v = r("./src/reddit/selectors/userPrefs.ts"),
				y = r("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				T = r.n(y);
			const {
				fbt: x
			} = r("./node_modules/fbt/lib/FbtPublic.js"), E = u.a.div("BladeContainer", T.a), _ = u.a.wrapped(b.a, "CloseIcon", T.a), S = u.a.div("LoadingTitleContainer", T.a), C = u.a.div("LoadingNavContainer", T.a), O = u.a.div("ShortLoadingNav", T.a), w = u.a.wrapped(h.a, "ThemedChevron", T.a), L = ({
				...e
			}) => o.a.createElement(E, null, o.a.createElement(_, null), o.a.createElement(m.k, null, o.a.createElement(m.p, null, x._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), o.a.createElement(m.o, null, o.a.createElement(S, null, o.a.createElement("div", {
				className: Object(l.a)(T.a.LoadingTitle, e.isLoading && T.a.loading)
			})), o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(T.a.LoadingNav, e.isLoading && T.a.loading)
			}), o.a.createElement(w, null)), o.a.createElement(C, null, o.a.createElement(O, null), o.a.createElement(w, null)), o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(T.a.LoadingNav, e.isLoading && T.a.loading)
			}), o.a.createElement(w, null)), o.a.createElement(C, null, o.a.createElement(O, null), o.a.createElement(w, null)), o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(T.a.LoadingNav, e.isLoading && T.a.loading)
			}), o.a.createElement(w, null))))), j = Object(d.a)({
				getComponent: () => Object(p.a)(() => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("StructuredStyles")]).then(r.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(L, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(L, {
					gradientType: "posts",
					isLoading: !0
				})
			}), P = Object(c.c)({
				isEditing: g.i,
				isSubscriptionsPinned: v.b,
				moderatorPermissions: f.i
			});
			t.a = Object(a.b)(P)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(T.a.Container, e.isSubscriptionsPinned && T.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(j, {
					subredditId: e.subredditId
				})) : o.a.createElement(i.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, r) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return o
			})), r.d(t, "p", (function() {
				return a
			})), r.d(t, "n", (function() {
				return c
			})), r.d(t, "o", (function() {
				return d
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "j", (function() {
				return x
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = r.n(s);
			const o = n.a.section("FormPage", i.a),
				a = n.a.h1("HomePageTitle", i.a),
				c = n.a.button("HomePageBreadcrumb", i.a),
				d = n.a.div("HomePageGroup", i.a),
				l = n.a.h1("FormPageTitle", i.a),
				u = n.a.div("FormPageSection", i.a),
				p = n.a.div("FormGroup", i.a),
				m = n.a.h2("FormGroupTitle", i.a),
				h = n.a.div("FormElement", i.a),
				b = n.a.div("FormGroupDescription", i.a),
				f = n.a.div("FormItem", i.a),
				g = n.a.h3("FormElementTitle", i.a),
				v = n.a.div("FormElementDescription", i.a),
				y = n.a.div("FormElementError", i.a),
				T = n.a.div("FormElementSubGroup", i.a),
				x = n.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, r) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./src/reddit/controls/Button/index.tsx"),
				a = r("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = r("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = r.n(c),
				l = r("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ({
					border: e,
					small: t,
					...r
				}) => i.a.createElement(o.q, u({}, r, {
					priority: e ? o.b.Primary : o.b.Plain,
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: t ? o.c.S : o.c.M
				})),
				m = e => i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? n.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : n.fbt._("Following", null, {
					hk: "1wQlVR"
				})), i.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? n.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : n.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = ({
					buttonType: e,
					border: t,
					small: r,
					...n
				}) => i.a.createElement(o.q, u({}, n, {
					priority: t ? o.b.Secondary : o.b.Plain,
					className: Object(l.a)(n.className, d.a.BaseButton),
					size: r ? o.c.S : o.c.M,
					text: m(e)
				}));
			class b extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: r,
						small: n = !1
					} = this.props, s = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: n
					};
					return this.props.userIsSubscriber ? i.a.createElement(h, u({}, s, {
						buttonType: this.props.identifier.type
					})) : i.a.createElement(p, u({}, s, {
						id: r
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				i = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = ({
					type: e,
					key: t
				}) => i[s({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/TrackingHelper/index.tsx"),
				s = r("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = r("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(n.c)(i.a))
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-helmet/es/Helmet.js"),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/pageTitle.ts"),
				d = r("./src/reddit/helpers/tabBadging/index.ts"),
				l = r("./src/reddit/selectors/appBadges.ts");
			const u = Object(a.a)(l.c, e => ({
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
					return Object(d.b)(this.props.badgeCount > 0), s.a.createElement(i.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(o.b)(u)(p)
		},
		"./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_1wPkPx87vMrQd9QW79-Ar7",
				container: "_1wPkPx87vMrQd9QW79-Ar7",
				SubscribeButton: "_1Bc_TFm9q38wDx8icKdasG",
				subscribeButton: "_1Bc_TFm9q38wDx8icKdasG",
				Icon: "_2TzUwYA32R-Hx5HQdxsWWP",
				icon: "_2TzUwYA32R-Hx5HQdxsWWP",
				placeholder: "_3D4_gGvFd4EDWKz4ueGNqu",
				Text: "_1O31lH4tpbJwYBKW2NmwXi",
				text: "_1O31lH4tpbJwYBKW2NmwXi",
				Link: "_3IPnsAjx27sBpv53euPc2G",
				link: "_3IPnsAjx27sBpv53euPc2G",
				Name: "_34EJPxBGGouPQbmc0Z-LmB",
				name: "_34EJPxBGGouPQbmc0Z-LmB",
				Members: "_106YuYJJ3FE95a4NDxNg6k",
				members: "_106YuYJJ3FE95a4NDxNg6k",
				hidden: "_2zUZgN0OEXf0LMxsR-7L6l"
			}
		},
		"./src/reddit/components/TopicSidebar/SubredditList/index.m.less": function(e, t, r) {
			e.exports = {
				Title: "_3T1Jtiyqnd1l1V9fcLf20J",
				title: "_3T1Jtiyqnd1l1V9fcLf20J",
				SubredditList: "_34o8T80OdRMyo2wr1IA3t6",
				subredditList: "_34o8T80OdRMyo2wr1IA3t6",
				Subreddit: "_29_Ws1xvPBAiLL3FvunH-h",
				subreddit: "_29_Ws1xvPBAiLL3FvunH-h",
				SeeMore: "_24xqgM4izvcvOOe3qlOjF",
				seeMore: "_24xqgM4izvcvOOe3qlOjF"
			}
		},
		"./src/reddit/components/TopicSidebar/SubredditList/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = r("./src/reddit/components/SEOTitle/index.tsx"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				p = r("./src/reddit/models/DiscoveryUnit/index.ts"),
				m = r("./node_modules/fbt/lib/FbtPublic.js"),
				h = r("./node_modules/react-redux/es/index.js"),
				b = r("./node_modules/reselect/es/index.js"),
				f = r("./src/lib/prettyPrintNumber/index.ts"),
				g = r("./src/reddit/components/SubredditIcon/index.tsx"),
				v = r("./src/reddit/components/SubscribeButton/index.tsx"),
				y = r("./src/reddit/constants/posts.ts"),
				T = r("./src/reddit/controls/InternalLink/index.tsx"),
				x = r("./src/reddit/helpers/name/index.ts"),
				E = r("./src/reddit/models/Widgets/index.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				S = r("./src/reddit/selectors/user.ts"),
				C = r("./src/reddit/components/TopicSidebar/SubredditList/Subreddit/index.m.less"),
				O = r.n(C);
			const w = Object(b.c)({
				isLoggedIn: S.K,
				subreddit: _.T,
				subredditAboutInfo: _.w
			});
			class L extends s.a.Component {
				constructor() {
					super(...arguments), this.trackSubredditClick = () => {
						const {
							discoveryUnit: e,
							sendEvent: t,
							subreddit: r,
							subredditAboutInfo: n
						} = this.props;
						if (!r) return;
						const s = Object(E.i)(r, n);
						t(Object(u.u)(e, s))
					}
				}
				render() {
					const {
						className: e,
						isLoggedIn: t,
						subreddit: r
					} = this.props;
					return r ? s.a.createElement("div", {
						className: Object(o.a)(O.a.Container, e)
					}, s.a.createElement(g.b, {
						className: O.a.Icon,
						subredditOrProfile: r
					}), s.a.createElement("div", {
						className: O.a.Text
					}, s.a.createElement(T.a, {
						className: O.a.Link,
						onMouseDown: this.trackSubredditClick,
						to: r.url
					}, s.a.createElement("div", {
						className: O.a.Name
					}, Object(x.c)(r.displayText || r.name)), s.a.createElement("div", {
						className: O.a.Members
					}, m.fbt._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [m.fbt._plural(r.subscribers, "subscribers count", Object(f.b)(r.subscribers))], {
						hk: "48BXj1"
					})))), s.a.createElement(v.a, {
						border: !1,
						className: Object(o.a)(O.a.SubscribeButton, {
							[O.a.hidden]: !t
						}),
						identifier: {
							name: r.name,
							type: y.a.SUBREDDIT
						},
						small: !0
					})) : null
				}
			}
			var j = Object(h.b)(w)(Object(d.c)(L)),
				P = r("./src/reddit/helpers/styles/mixins/loading.ts");
			var I = e => {
					const {
						className: t
					} = e, r = Object(P.b)({
						isLoading: !0
					});
					return s.a.createElement("div", {
						className: Object(o.a)(O.a.Container, t)
					}, s.a.createElement("div", {
						className: Object(o.a)(O.a.Icon, O.a.placeholder, r)
					}), s.a.createElement("div", {
						className: O.a.Text
					}, s.a.createElement("div", {
						className: O.a.Link
					}, s.a.createElement("div", {
						className: Object(o.a)(O.a.Name, O.a.placeholder, r)
					}), s.a.createElement("div", {
						className: Object(o.a)(O.a.Members, O.a.placeholder, r)
					}))), s.a.createElement("div", {
						className: O.a.SubscribeButton
					}))
				},
				N = r("./src/reddit/components/TopicSidebar/SubredditList/index.m.less"),
				k = r.n(N);
			const {
				fbt: R
			} = r("./node_modules/fbt/lib/FbtPublic.js"), A = 8, F = Array.from({
				length: A
			}).map((e, t) => s.a.createElement(I, {
				className: k.a.Subreddit,
				key: t
			})), M = {
				enabled: !0,
				id: "xd_103",
				layout: p.d.Large,
				surface: p.e.Topic,
				unitName: p.i,
				unitType: p.f.SubredditListing,
				url: ""
			};
			class B extends s.a.Component {
				constructor() {
					super(...arguments), this.onSeeMoreCommunities = () => {
						this.props.onSeeMoreCommunities && (this.props.sendEvent(Object(u.G)(M)), this.props.onSeeMoreCommunities())
					}
				}
				render() {
					const {
						className: e,
						subredditIds: t,
						topicUrl: r
					} = this.props, n = t.slice(0, A);
					return s.a.createElement(a.a, {
						className: Object(o.a)(k.a.Container, e)
					}, s.a.createElement("div", {
						className: k.a.Title
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, R._("Top Communities", null, {
						hk: "46yzcK"
					}))), s.a.createElement("div", {
						className: k.a.SubredditList
					}, n.length > 0 ? n.map(e => s.a.createElement(j, {
						className: k.a.Subreddit,
						discoveryUnit: M,
						key: e,
						subredditId: e
					})) : F), t.length > A && s.a.createElement(i.a, {
						to: r
					}, s.a.createElement(l.o, {
						className: k.a.SeeMore,
						onClick: this.onSeeMoreCommunities
					}, R._("See more", null, {
						hk: "2qkY6H"
					}))))
				}
			}
			t.a = Object(d.c)(B)
		},
		"./src/reddit/components/TopicSidebar/index.m.less": function(e, t, r) {
			e.exports = {
				StickyBottom: "_2yV768nzIKxq_QdOCYdJ3-",
				stickyBottom: "_2yV768nzIKxq_QdOCYdJ3-"
			}
		},
		"./src/reddit/components/TopicSidebar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/components/SidebarContainer/index.tsx"),
				o = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				a = r("./src/reddit/components/TopicSidebar/index.m.less"),
				c = r.n(a);
			t.a = e => {
				const {
					children: t,
					className: r
				} = e;
				return s.a.createElement(i.a, {
					className: r
				}, t, s.a.createElement(o.a, {
					className: c.a.StickyBottom
				}))
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return S
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "b", (function() {
				return L
			}));
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/objectSelector/index.ts"),
				o = r("./src/reddit/actions/ads/index.ts"),
				a = r("./src/reddit/actions/focusedVerticals/index.ts"),
				c = r("./src/reddit/actions/gold/tooltips.ts"),
				d = r("./src/reddit/actions/post.ts"),
				l = r("./src/reddit/actions/postList.ts"),
				u = r("./src/reddit/actions/survey/index.ts"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = r("./src/reddit/helpers/trackers/post.ts"),
				f = r("./src/reddit/components/PostList/Placeholder.tsx"),
				g = r("./src/reddit/featureFlags/index.ts"),
				v = r("./src/reddit/selectors/experiments/survey.ts"),
				y = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				T = r("./src/reddit/selectors/listings.ts"),
				x = r("./src/reddit/selectors/posts.ts"),
				E = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/tracking.ts");

			function S() {
				return Object(m.t)({
					currentProfileName: m.h,
					isCommentPermalink: m.v,
					isCommentsPage: m.w,
					isFrontpage: m.y,
					isPredictionsPage: m.L,
					isProfilePostListing: m.I,
					isTopicPage: m.N,
					pageLayer: e => e
				})
			}
			const C = S(),
				O = {
					apiError: T.c,
					apiPending: T.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage && !Object(y.a)(e, t.listingKey) ? null : Object(T.g)(e, t),
					postsById: (e, t) => Object(x.S)(e, {
						...t
					}),
					postIds: Object(i.a)((e, {
						listingKey: t,
						listingName: r,
						isPredictionsPage: n,
						inSubredditOrProfile: s
					}) => {
						if (n) {
							const n = Object(E.F)(e, r);
							return Object(y.i)(e, {
								subredditId: n,
								listingKey: t
							})
						}
						return Object(x.F)(e, t, r, s)
					}),
					subredditsById: E.ab,
					viewportDataLoaded: _.a,
					pageReferrer: m.R,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: v.d
				},
				w = Object(s.c)(O),
				L = (e, {
					isFrontpage: t
				}) => ({
					onBottomViewed: (t, r) => e(l.c(t, r)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: r => {
						t && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.E(r))
					},
					fireAdPixelsOfType: (t, r) => {
						e(d.u(t, r))
					},
					trackOnPostEnteredViewport: (t, r, n) => {
						e(d.H(t, n))
					},
					trackOnPostExitedViewport: (t, r, n, s, i) => {
						e(d.I(t, n, s, i))
					},
					surveyTriggerScrollCounted: () => e(Object(u.h)())
				}),
				j = Object(n.b)(w, L, (e, t, r) => ({
					...e,
					...t,
					...r,
					postClickEventFactory: (e, t) => Object(b.f)(e, t, "post", r.listingKey, r.hostPostId, r.listingBelowVariant, void 0, r.listingBelowMonthlyVariant),
					postComponentForLayout: e => Object(h.b)({
						...e
					})
				}));
			t.a = e => Object(p.c)(C(j(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/subscription/index.ts"),
				o = r("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(s.c)({
				userIsSubscriber: o.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(i.d([t], !0)),
				onSubscriptionsRequested: () => e(i.e()),
				onUnsubscribe: () => e(i.d([t], !1))
			}))
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = s.a.createContext({})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const r = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === n.b.NO_ADS);
				return !r && !s
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, r) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(i.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, r) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./src/reddit/controls/Button/index.tsx"),
				a = r("./src/reddit/pages/ErrorPages/index.m.less"),
				c = r.n(a);
			const d = ({
					message: e
				}) => i.a.createElement("div", {
					className: c.a.container
				}, i.a.createElement("h3", {
					className: c.a.title
				}, e || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), i.a.createElement(o.k, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, n.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				l = ({
					message: e
				}) => i.a.createElement("div", {
					className: c.a.container
				}, i.a.createElement("h3", {
					className: c.a.title
				}, e || n.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), i.a.createElement(o.k, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, n.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/Topic/Relationship/index.m.less": function(e, t, r) {
			e.exports = {
				SeeAllRelatedTopics: "p7nJ7lD5v2YzECQA-Ha8M",
				seeAllRelatedTopics: "p7nJ7lD5v2YzECQA-Ha8M",
				TopicName: "dJ3xe2Nf-vhZ6EYI5mouf",
				topicName: "dJ3xe2Nf-vhZ6EYI5mouf"
			}
		},
		"./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_3oYTbP0ZV-MANTieSFQJh4",
				container: "_3oYTbP0ZV-MANTieSFQJh4",
				Icon: "_1Fbn9hME_gsiZEWrYw2CjA",
				icon: "_1Fbn9hME_gsiZEWrYw2CjA",
				Text: "_2Q3cQEpLSLir19P36HjMsM",
				text: "_2Q3cQEpLSLir19P36HjMsM",
				Link: "_2WjUac0CWJTaeqSTapZxRS",
				link: "_2WjUac0CWJTaeqSTapZxRS",
				Name: "_2wytGTWEsoZfbD_7szYe7p",
				name: "_2wytGTWEsoZfbD_7szYe7p",
				Meta: "_3IUCsZmtt3d3WGgFHQ3Fgo",
				meta: "_3IUCsZmtt3d3WGgFHQ3Fgo",
				Members: "wipHspsmXyJJfAajdJPON",
				members: "wipHspsmXyJJfAajdJPON",
				About: "_3qHKAeck1ZFLJpNms-2TDT",
				about: "_3qHKAeck1ZFLJpNms-2TDT",
				VisitLink: "_3GKJa-R8-b1vJZuvPGxMOT",
				visitLink: "_3GKJa-R8-b1vJZuvPGxMOT",
				SubscribeButton: "_17tJu-uGh0u1qEBO4P29Sg",
				subscribeButton: "_17tJu-uGh0u1qEBO4P29Sg",
				hidden: "_2s4ITweJE8SSEgLGNY1LCw"
			}
		},
		"./src/reddit/pages/Topic/SubredditList/index.m.less": function(e, t, r) {
			e.exports = {
				SubredditList: "_3SxeZ1SagmjQfaEOJLcpif",
				subredditList: "_3SxeZ1SagmjQfaEOJLcpif",
				Subreddit: "JJ2QSl-i_fI5G_NYIXnSe",
				subreddit: "JJ2QSl-i_fI5G_NYIXnSe"
			}
		},
		"./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less": function(e, t, r) {
			e.exports = {
				RelationshipTab: "_32zXxOy-JDeJPYiXTZ6GWU",
				relationshipTab: "_32zXxOy-JDeJPYiXTZ6GWU",
				"m-active": "_1SmckvvCqb57y8BYkTM8ew",
				mActive: "_1SmckvvCqb57y8BYkTM8ew"
			}
		},
		"./src/reddit/pages/Topic/TabHeader/index.m.less": function(e, t, r) {
			e.exports = {
				TabHeader: "a44uJVg_2f6Tls24pgm7O",
				tabHeader: "a44uJVg_2f6Tls24pgm7O",
				TabTitle: "_2PgDB6yr3w2D2vcE0ifp7Q",
				tabTitle: "_2PgDB6yr3w2D2vcE0ifp7Q"
			}
		},
		"./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less": function(e, t, r) {
			e.exports = {
				Tab: "zB167v8VzkVM9pUFETGba",
				tab: "zB167v8VzkVM9pUFETGba",
				ActiveTab: "_1jUOuw0_aUnqYgs8j-VWYa",
				activeTab: "_1jUOuw0_aUnqYgs8j-VWYa"
			}
		},
		"./src/reddit/pages/Topic/TopicHeader/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_ZTq8EBsRouOv-sGGDFEG",
				container: "_ZTq8EBsRouOv-sGGDFEG",
				Content: "_1gOnjMfh6AZJPpWVWm4hdl",
				content: "_1gOnjMfh6AZJPpWVWm4hdl",
				cardWidth: "kt6mctm16gX4BAz4UkP7F",
				fullWidth: "_13SEe8eTugXMSewCNKUSur",
				Header: "_6HVKzUwnWtxEz7ZXIZ52z",
				header: "_6HVKzUwnWtxEz7ZXIZ52z",
				Title: "_3xUDHcNgeNVz7fD8H1kUy7",
				title: "_3xUDHcNgeNVz7fD8H1kUy7",
				Subtitle: "_1SqJaWH39dwYM80G2bPzqV",
				subtitle: "_1SqJaWH39dwYM80G2bPzqV",
				Tabs: "_2yxC6zU-b3bwwpJq7PFU6W",
				tabs: "_2yxC6zU-b3bwwpJq7PFU6W",
				link: "_28pKATphngn0NYq1jxqIW2",
				"parent-related-topics": "_1b2AsSM880_ExPtu4kLbtn",
				parentRelatedTopics: "_1b2AsSM880_ExPtu4kLbtn"
			}
		},
		"./src/reddit/pages/Topic/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_34DPWmU2xtTM5k6LzxRyBK",
				container: "_34DPWmU2xtTM5k6LzxRyBK",
				SidebarRight: "xN-Lax46afWDvxNsgO_qV",
				sidebarRight: "xN-Lax46afWDvxNsgO_qV",
				TopicTab: "_1w8swivzpCaiRZVhoHJCf2",
				topicTab: "_1w8swivzpCaiRZVhoHJCf2",
				active: "ADUh7gkavNOAWKFsG3XAh",
				WidgetsContainer: "_XJz3g54OuK0zp0Pm8QcB",
				widgetsContainer: "_XJz3g54OuK0zp0Pm8QcB"
			}
		},
		"./src/reddit/pages/Topic/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				d = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/reddit/actions/pages/topic.ts"),
				u = r("./src/reddit/components/ListingPostList/index.tsx"),
				p = r("./src/reddit/controls/InternalLink/index.tsx"),
				m = r("./src/reddit/icons/svgs/Search/index.tsx"),
				h = r("./src/reddit/components/RelatedTopicList/RelatedTopic/index.m.less"),
				b = r.n(h);
			var f = e => {
					const {
						topic: t
					} = e;
					return s.a.createElement("span", {
						className: b.a.Container
					}, s.a.createElement(p.a, {
						className: b.a.Link,
						title: t.name,
						to: t.url
					}, s.a.createElement("span", {
						className: b.a.IconContainer
					}, s.a.createElement(m.a, null)), s.a.createElement("span", {
						className: b.a.Name
					}, t.namePlural)))
				},
				g = r("./src/reddit/components/SEOTitle/index.tsx"),
				v = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = r("./src/reddit/components/RelatedTopicList/index.m.less"),
				T = r.n(y);

			function x(e) {
				const {
					children: t,
					limit: r,
					title: n,
					topics: i
				} = e;
				return i.length ? s.a.createElement(v.a, {
					className: T.a.Container
				}, n && s.a.createElement("div", {
					className: T.a.Title
				}, s.a.createElement(g.b, {
					type: g.a.Widget
				}, n)), s.a.createElement("div", {
					className: T.a.RelatedTopicList
				}, i.slice(0, r).map(e => s.a.createElement(f, {
					key: e.id,
					topic: e
				}))), t) : null
			}
			var E = r("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				_ = r("./src/reddit/components/TitleTagManager/index.tsx"),
				S = r("./src/reddit/components/TopicSidebar/index.tsx"),
				C = r("./src/reddit/components/TopicSidebar/SubredditList/index.tsx"),
				O = r("./src/reddit/constants/listings.ts"),
				w = r("./src/reddit/constants/postLayout.ts"),
				L = r("./src/reddit/contexts/PageLayer/index.tsx"),
				j = r("./src/reddit/helpers/trackers/screenview.ts"),
				P = r("./src/reddit/layout/page/Listing/index.tsx"),
				I = r("./src/reddit/pages/ErrorPages/index.tsx"),
				N = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				k = r("./src/reddit/controls/Button/index.tsx"),
				R = r("./src/reddit/pages/Topic/TopicHeader/TopicTab/index.m.less"),
				A = r.n(R);
			class F extends s.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							onTabClick: e,
							tab: t
						} = this.props;
						e(t)
					}
				}
				render() {
					const {
						activeTab: e,
						children: t,
						tab: r,
						tabs: n
					} = this.props;
					return n.includes(r) ? s.a.createElement("div", {
						className: Object(o.a)(A.a.Tab, {
							[A.a.ActiveTab]: r === e
						}),
						onClick: this.onClick
					}, t) : null
				}
			}
			var M = F,
				B = r("./src/reddit/pages/Topic/TopicHeader/index.m.less"),
				H = r.n(B);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: V
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var D;
			! function(e) {
				e.Communities = "communities", e.Posts = "posts", e.RelatedTopics = "relatedTopics"
			}(D || (D = {}));
			class U extends s.a.Component {
				renderSubtitleContent() {
					const {
						parentRelatedTopics: e
					} = this.props;
					return e.length ? s.a.createElement("ul", {
						className: H.a.parentRelatedTopics
					}, e.map(({
						namePlural: e,
						url: t
					}, r) => s.a.createElement("li", {
						key: r
					}, s.a.createElement(p.a, {
						className: H.a.link,
						to: t
					}, e)))) : V._("Topic on Reddit", null, {
						hk: "3gTFev"
					})
				}
				render() {
					const {
						activeTab: e,
						className: t,
						layout: r,
						onTabClick: n,
						tabs: i,
						topicName: a
					} = this.props, c = {
						activeTab: e,
						onTabClick: n,
						tabs: i
					};
					return s.a.createElement("div", {
						className: Object(o.a)(H.a.Container, t)
					}, s.a.createElement("div", {
						className: Object(o.a)(H.a.Content, r === w.g.Large ? H.a.cardWidth : H.a.fullWidth)
					}, s.a.createElement("div", {
						className: H.a.Header
					}, s.a.createElement("div", {
						className: H.a.Title
					}, s.a.createElement(g.b, {
						type: g.a.TopicHeader
					}, a)), s.a.createElement("div", {
						className: H.a.Subtitle
					}, this.renderSubtitleContent())), s.a.createElement("div", {
						className: H.a.Tabs
					}, s.a.createElement(M, W({
						tab: D.Posts
					}, c), V._("Posts", null, {
						hk: "3RLrle"
					})), s.a.createElement(M, W({
						tab: D.Communities
					}, c), V._("Communities", null, {
						hk: "KIwd1"
					})), s.a.createElement(M, W({
						tab: D.RelatedTopics
					}, c), V._("Related Topics", null, {
						hk: "4go2cr"
					})))))
				}
			}
			var J = U,
				G = r("./src/reddit/pages/Topic/Relationship/index.m.less"),
				q = r.n(G);
			const {
				fbt: z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), K = 5;
			class Y extends s.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							openTab: e,
							relationshipIndex: t
						} = this.props;
						e(D.RelatedTopics, t)
					}
				}
				render() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return s.a.createElement(x, {
						limit: K,
						title: e,
						topics: t
					}, this.renderSeeMoreButton())
				}
				renderSeeMoreButton() {
					const {
						namePlural: e,
						relatedTopics: t
					} = this.props.relationship;
					return t.length < K ? null : s.a.createElement(N.a, {
						onClick: this.onClick,
						to: "#"
					}, s.a.createElement(k.o, {
						className: q.a.SeeAllRelatedTopics
					}, z._("See all {=[Topic name plural]}", [z._param("=[Topic name plural]", s.a.createElement("span", {
						className: q.a.TopicName
					}, z._("{Topic name plural}", [z._param("Topic name plural", e)], {
						hk: "27C3n9"
					})))], {
						hk: "uH0jh"
					})))
				}
			}
			var Q = Y,
				Z = r("./src/lib/prettyPrintNumber/index.ts"),
				X = r("./src/reddit/components/Flair/index.tsx"),
				$ = r("./src/reddit/components/SubredditIcon/index.tsx"),
				ee = r("./src/reddit/components/SubscribeButton/index.tsx"),
				te = r("./src/reddit/constants/posts.ts"),
				re = r("./src/reddit/helpers/name/index.ts"),
				ne = r("./src/reddit/models/Flair/index.ts"),
				se = r("./src/reddit/selectors/subreddit.ts"),
				ie = r("./src/reddit/selectors/user.ts"),
				oe = r("./src/reddit/pages/Topic/SubredditList/Subreddit/index.m.less"),
				ae = r.n(oe);
			const {
				fbt: ce
			} = r("./node_modules/fbt/lib/FbtPublic.js"), de = Object(i.c)({
				isLoggedIn: ie.K,
				subreddit: se.T,
				subredditAboutInfo: (e, {
					subredditId: t
				}) => e.subreddits.about[t]
			}), le = Object(d.b)(de), ue = {
				text: "nsfw",
				type: ne.f.Nsfw
			};
			var pe = le(e => {
					const {
						className: t,
						isLoggedIn: r,
						subreddit: n,
						subredditAboutInfo: i
					} = e, a = Object(re.c)(n.displayText || n.name);
					return s.a.createElement("div", {
						className: Object(o.a)(ae.a.Container, t)
					}, s.a.createElement($.b, {
						className: ae.a.Icon,
						subredditOrProfile: n
					}), s.a.createElement("div", {
						className: ae.a.Text
					}, s.a.createElement(p.a, {
						className: ae.a.Link,
						to: n.url
					}, s.a.createElement("div", {
						className: ae.a.Name
					}, a), s.a.createElement("div", {
						className: ae.a.Meta
					}, s.a.createElement("div", {
						className: ae.a.Members
					}, ce._({
						"*": "{subscribers count} members",
						_1: "member"
					}, [ce._plural(n.subscribers, "subscribers count", Object(Z.b)(n.subscribers))], {
						hk: "48BXj1"
					})), n.isNSFW && s.a.createElement(X.b, {
						flair: ue
					}))), s.a.createElement("div", {
						className: ae.a.About
					}, i.publicDescription || ce._("Welcome to {subreddit name}", [ce._param("subreddit name", a)], {
						hk: "vZ7VH"
					})), s.a.createElement(p.a, {
						className: ae.a.VisitLink,
						to: n.url
					}, ce._("Visit", null, {
						hk: "2z3clp"
					}))), s.a.createElement(ee.a, {
						className: Object(o.a)(ae.a.SubscribeButton, {
							[ae.a.hidden]: !r
						}),
						identifier: {
							name: n.name,
							type: te.a.SUBREDDIT
						},
						small: !0
					}))
				}),
				me = r("./src/reddit/pages/Topic/SubredditList/index.m.less"),
				he = r.n(me);

			function be(e) {
				const {
					subredditIds: t = []
				} = e;
				return s.a.createElement("div", {
					className: he.a.SubredditList
				}, t.map(e => s.a.createElement(pe, {
					className: he.a.Subreddit,
					key: e,
					subredditId: e
				})))
			}
			var fe = r("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				ge = r("./src/reddit/pages/Topic/TabHeader/RelationshipTab/index.m.less"),
				ve = r.n(ge);
			class ye extends s.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							index: e,
							onTabClick: t
						} = this.props;
						t(D.RelatedTopics, e)
					}
				}
				render() {
					const {
						activeIndex: e,
						relationship: t,
						index: r
					} = this.props, n = r === e;
					return s.a.createElement("div", {
						className: Object(o.a)(ve.a.RelationshipTab, {
							[ve.a.mActive]: n
						}),
						onClick: this.onClick
					}, t.namePlural)
				}
			}
			var Te = ye,
				xe = r("./src/reddit/pages/Topic/TabHeader/index.m.less"),
				Ee = r.n(xe);
			const {
				fbt: _e
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class Se extends s.a.Component {
				constructor() {
					super(...arguments), this.renderRelatedTopic = (e, t) => {
						const {
							activeRelationshipIndex: r,
							onTabClick: n
						} = this.props;
						return s.a.createElement(Te, {
							activeIndex: r,
							index: t,
							key: e.slug,
							onTabClick: n,
							relationship: e
						})
					}, this.renderRelatedTopicsHeader = () => s.a.createElement("div", {
						className: Ee.a.TabHeader
					}, this.props.topic.childRelationships.map(this.renderRelatedTopic)), this.renderTitle = () => {
						const {
							activeTab: e,
							topicNamePlural: t
						} = this.props;
						return e === D.Posts ? _e._("Posts about {topic name}", [_e._param("topic name", t)], {
							hk: "3AGfU"
						}) : e === D.Communities ? _e._("Communities related to {topic name}", [_e._param("topic name", t)], {
							hk: "jKM0V"
						}) : null
					}
				}
				render() {
					const {
						activeLayout: e,
						activeTab: t
					} = this.props, r = t === D.Posts;
					return t === D.RelatedTopics ? this.renderRelatedTopicsHeader() : s.a.createElement("div", {
						className: Ee.a.TabHeader
					}, s.a.createElement("div", {
						className: Ee.a.TabTitle
					}, s.a.createElement(g.b, {
						type: g.a.Widget
					}, this.renderTitle())), r && s.a.createElement(fe.a, {
						className: Ee.a.PostsLayoutSwitch,
						layout: w.e[e]
					}))
				}
			}
			var Ce = Se,
				Oe = r("./src/reddit/selectors/topic.ts"),
				we = r("./src/reddit/pages/Topic/index.m.less"),
				Le = r.n(we);
			const {
				fbt: je
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Pe = Object(L.t)(), Ie = (e, t) => t.match.params.sort || a.Q, Ne = e => {
				const t = [];
				return e ? (e.hasPosts && t.push(D.Posts), e.hasSubreddits && t.push(D.Communities), e.childRelationships.length && t.push(D.RelatedTopics), t) : t
			}, ke = Object(d.b)(() => Object(i.a)((e, t) => Object(Oe.d)(e, t.match.params.topicSlug), (e, t) => Object(Oe.e)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Oe.c)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Oe.a)(e, {
				topicSlug: t.match.params.topicSlug
			}), (e, t) => Object(Oe.b)(e, {
				topicSlug: t.match.params.topicSlug
			}), L.O, Ie, e => {
				var t;
				return null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status
			}, (e, {
				match: t
			}) => {
				const {
					topicSlug: r
				} = t.params;
				return Object(Oe.f)(e, {
					topicSlug: r
				})
			}, (e, t, r, n, s, i, o, a, c) => ({
				layout: i,
				parentRelatedTopics: n,
				siblingRelatedTopics: s,
				sort: o,
				status: a || 200,
				tabs: Ne(r),
				timeSort: void 0,
				topic: r,
				topicName: e,
				topicNamePlural: t,
				pageTitle: c
			})), (e, t) => ({
				onLoadMorePosts: () => e(Object(l.morePostsRequested)(t.match.params))
			})), Re = (e, t) => e === D.Communities ? w.g.Large : t;
			class Ae extends s.a.Component {
				constructor(e) {
					super(e), this.openTab = (e, t = 0) => {
						this.setState({
							activeLayout: Re(e, this.props.layout),
							activeRelationshipIndex: t,
							activeTab: e
						}), window.scrollTo(0, 0)
					}, this.openCommunitiesTab = () => {
						this.openTab(D.Communities)
					}, this.onViewed = (e, t) => {
						var r;
						return Object(j.f)(Object(c.a)(O.b.Topic, null, {
							topicSlug: null === (r = this.props.topic) || void 0 === r ? void 0 : r.slug
						}), this.props.sort, t, e, this.props.timeSort)
					}, this.renderNoPosts = () => null, this.renderRelationship = (e, t) => s.a.createElement(Q, {
						key: e.slug,
						openTab: this.openTab,
						relationship: e,
						relationshipIndex: t
					}), this.state = {
						activeLayout: w.g.Large,
						activeRelationshipIndex: 0,
						activeTab: void 0
					}
				}
				static getDerivedStateFromProps(e, t) {
					const r = t.activeTab && e.tabs.includes(t.activeTab) && t.activeTab,
						n = e.pageLayer && e.pageLayer.queryParams.activeTab,
						s = n && e.tabs.includes(n) && n,
						i = e.tabs[0],
						o = r || s || i;
					return {
						activeLayout: Re(o, e.layout),
						activeRelationship: t.activeRelationshipIndex,
						activeTab: o
					}
				}
				componentDidUpdate(e) {
					var t, r, n;
					const s = null === (t = e.topic) || void 0 === t ? void 0 : t.id,
						i = null === (r = this.props.topic) || void 0 === r ? void 0 : r.id;
					s && i !== (null === (n = e.topic) || void 0 === n ? void 0 : n.id) && this.openTab(this.props.tabs[0])
				}
				render() {
					const {
						pageTitle: e
					} = this.props;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(_.a, {
						title: e
					}), this.renderContent())
				}
				renderContent() {
					const {
						className: e,
						match: t,
						parentRelatedTopics: r,
						siblingRelatedTopics: n,
						status: i,
						tabs: a,
						topic: d,
						topicName: l,
						topicNamePlural: p
					} = this.props, m = t.params.topicSlug, h = Object(c.a)(O.b.Topic, null, {
						topicSlug: m
					}), {
						activeLayout: b,
						activeRelationshipIndex: f,
						activeTab: g
					} = this.state, v = O.b.Topic;
					if (404 === i) return s.a.createElement(I.b, null);
					if (500 === i) return s.a.createElement(I.b, {
						message: je._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "3SZaDI"
						})
					});
					if (!d) return null;
					const y = d.childRelationships[f],
						T = y && y.relatedTopics || [],
						_ = s.a.createElement(s.a.Fragment, null, s.a.createElement(Ce, {
							activeLayout: b,
							activeRelationshipIndex: f,
							activeTab: g,
							onTabClick: this.openTab,
							topic: d,
							topicName: l,
							topicNamePlural: p
						}), s.a.createElement("div", {
							className: Object(o.a)(Le.a.TopicTab, {
								[Le.a.active]: g === D.Communities
							})
						}, s.a.createElement(be, {
							subredditIds: d.subredditIds
						})), s.a.createElement("div", {
							className: Object(o.a)(Le.a.TopicTab, {
								[Le.a.active]: g === D.Posts
							})
						}, g === D.Posts && s.a.createElement(u.a, {
							forcedLayout: b,
							listingKey: h,
							listingName: v,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderNoPosts,
							onLoadMore: this.props.onLoadMorePosts
						})), s.a.createElement("div", {
							className: Object(o.a)(Le.a.TopicTab, {
								[Le.a.active]: g === D.RelatedTopics
							})
						}, s.a.createElement(x, {
							topics: T
						}))),
						w = g !== D.RelatedTopics,
						L = g !== D.Communities && a.includes(D.Communities),
						j = s.a.createElement("div", {
							className: Le.a.WidgetsContainer
						}, L && s.a.createElement(C.a, {
							onSeeMoreCommunities: this.openCommunitiesTab,
							subredditIds: d.subredditIds,
							topicUrl: d.url
						}), w && d.childRelationships.map(this.renderRelationship), s.a.createElement(x, {
							limit: 5,
							title: je._("Similar Topics", null, {
								hk: "1Kv3xR"
							}),
							topics: n
						}));
					return s.a.createElement(E.a, null, s.a.createElement(P.a, {
						className: Object(o.a)(Le.a.Container, e),
						content: _,
						fitPageToContent: !0,
						forcedLayout: b,
						sidebars: [null, s.a.createElement(S.a, {
							key: "right",
							className: Le.a.SidebarRight,
							listingName: v
						}, j)],
						navBar: s.a.createElement(J, {
							activeTab: g,
							layout: b,
							onTabClick: this.openTab,
							parentRelatedTopics: r,
							tabs: a,
							topicName: l
						})
					}))
				}
			}
			t.default = Pe(ke(Ae))
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return a
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "d", (function() {
				return T
			}));
			var n = r("./src/reddit/featureFlags/index.ts"),
				s = r("./src/reddit/selectors/posts.ts"),
				i = r("./src/reddit/selectors/subreddit.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const r = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (r) {
						const t = Object(i.T)(e, {
							subredditId: r
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				d = e => e.focusedVerticals.components.dismissed,
				l = [],
				u = (e, t) => {
					const r = p(e, t);
					if (!r) return l;
					const n = Object(i.X)(e, {
						subredditName: r.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : l
				},
				p = (e, t) => {
					const r = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return r ? Object(i.T)(e, {
						subredditId: r
					}) : null
				},
				m = (e, t, r, n, i) => {
					const o = i.find(e => e <= t) || -1,
						a = i.find(e => e > t) || 1 / 0;
					return t !== a && t !== o && (!(o + r > t) && (!(t + r > a) && !((e, t, r) => {
						const n = r[t - 1],
							i = r[t],
							o = i && Object(s.I)(e, {
								postId: n
							}) || null,
							a = i && Object(s.I)(e, {
								postId: i
							}) || null;
						return o && o.isSponsored || a && a.isSponsored
					})(e, t, n)))
				},
				h = [3],
				b = (e, t, {
					listingKey: r
				}) => {
					const n = t.slice().sort();
					let i = -1;
					const o = Object(s.B)(e, {
							listingKey: r
						}),
						a = [];
					return h.forEach(t => {
						let r = i + t;
						if (!(r >= o.length)) {
							for (; r < o.length && !m(e, r, t, o, n);) r += 1;
							r < o.length && (a.push(r), i = r)
						}
					}), a
				},
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				g = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				v = e => e.focusedVerticals.category,
				y = e => e.focusedVerticals.lastLoadedEnv,
				T = e => {
					const t = Object(o.J)(e),
						r = n.d.geoSubredditRecommendationDULoggedIn(e),
						s = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && r || !t && s
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Topic.b70125d23724f9b4fc6e.js.map