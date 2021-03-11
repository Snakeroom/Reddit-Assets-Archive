// https://www.redditstatic.com/desktop2x/ModListing.1cbdf7979e1d557c9580.js
// Retrieved at 3/11/2021, 5:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing"], {
		"./node_modules/intersection-observer/intersection-observer.js": function(e, t) {
			! function(e, t) {
				"use strict";
				if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var n = [];
					o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, o.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, o.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, o.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, o.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== n[t - 1]
						}))
					}, o.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, o.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(e, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, o.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, o.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							n = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(o) {
							var s = o.element,
								i = a(s),
								c = this._rootContainsTarget(s),
								d = o.entry,
								u = t && c && this._computeTargetAndRootIntersection(s, n),
								l = o.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: s,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: u
								});
							d ? t && c ? this._hasCrossedThreshold(d, l) && this._queuedEntries.push(l) : d && d.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, o.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var o, s, i, c, u, l, p, m, f = a(n), b = d(n), h = !1; !h;) {
								var g = null,
									y = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == y.display) return;
								if (b == this.root || b == t ? (h = !0, g = r) : b != t.body && b != t.documentElement && "visible" != y.overflow && (g = a(b)), g && (o = g, s = f, i = void 0, c = void 0, u = void 0, l = void 0, p = void 0, m = void 0, i = Math.max(o.top, s.top), c = Math.min(o.bottom, s.bottom), u = Math.max(o.left, s.left), l = Math.min(o.right, s.right), m = c - i, !(f = (p = l - u) >= 0 && m >= 0 && {
										top: i,
										bottom: c,
										left: u,
										right: l,
										width: p,
										height: m
									}))) break;
								b = d(b)
							}
							return f
						}
					}, o.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var n = t.documentElement,
								r = t.body;
							e = {
								top: 0,
								left: 0,
								right: n.clientWidth || r.clientWidth,
								width: n.clientWidth || r.clientWidth,
								bottom: n.clientHeight || r.clientHeight,
								height: n.clientHeight || r.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, o.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, n) {
								return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
							})),
							n = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return n.width = n.right - n.left, n.height = n.bottom - n.top, n
					}, o.prototype._hasCrossedThreshold = function(e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var o = 0; o < this.thresholds.length; o++) {
								var s = this.thresholds[o];
								if (s == n || s == r || s < n != s < r) return !0
							}
					}, o.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, o.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, o.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, o.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = o, e.IntersectionObserverEntry = r
				}

				function r(e) {
					this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}, this.isIntersecting = !!e.intersectionRect;
					var t = this.boundingClientRect,
						n = t.width * t.height,
						r = this.intersectionRect,
						o = r.width * r.height;
					this.intersectionRatio = n ? o / n : this.isIntersecting ? 1 : 0
				}

				function o(e, t) {
					var n, r, o, s = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (s.root && 1 != s.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, o = null, function() {
						o || (o = setTimeout((function() {
							n(), o = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(s.rootMargin), this.thresholds = this._initThresholds(s.threshold), this.root = s.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function s(e, t, n, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
				}

				function i(e, t, n, r) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
				}

				function a(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (n) {}
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
					for (var n = t; n;) {
						if (n == e) return !0;
						n = d(n)
					}
					return !1
				}

				function d(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				o = n("./node_modules/lodash/_castFunction.js"),
				s = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = s(e)) < 1 || e > i) return [];
				var n = a,
					d = c(e, a);
				t = o(t), e -= a;
				for (var u = r(d, t); ++n < e;) t(n);
				return u
			}
		},
		"./node_modules/react-fast-compare/index.js": function(e, t) {
			var n = "undefined" != typeof Element,
				r = "function" == typeof Map,
				o = "function" == typeof Set,
				s = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, i) {
						if (t === i) return !0;
						if (t && i && "object" == typeof t && "object" == typeof i) {
							if (t.constructor !== i.constructor) return !1;
							var a, c, d, u;
							if (Array.isArray(t)) {
								if ((a = t.length) != i.length) return !1;
								for (c = a; 0 != c--;)
									if (!e(t[c], i[c])) return !1;
								return !0
							}
							if (r && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (u = t.entries(); !(c = u.next()).done;)
									if (!i.has(c.value[0])) return !1;
								for (u = t.entries(); !(c = u.next()).done;)
									if (!e(c.value[1], i.get(c.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (u = t.entries(); !(c = u.next()).done;)
									if (!i.has(c.value[0])) return !1;
								return !0
							}
							if (s && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
								if ((a = t.length) != i.length) return !1;
								for (c = a; 0 != c--;)
									if (t[c] !== i[c]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
							if ((a = (d = Object.keys(t)).length) !== Object.keys(i).length) return !1;
							for (c = a; 0 != c--;)
								if (!Object.prototype.hasOwnProperty.call(i, d[c])) return !1;
							if (n && t instanceof Element) return !1;
							for (c = a; 0 != c--;)
								if (("_owner" !== d[c] && "__v" !== d[c] && "__o" !== d[c] || !t.$$typeof) && !e(t[d[c]], i[d[c]])) return !1;
							return !0
						}
						return t != t && i != i
					}(e, t)
				} catch (i) {
					if ((i.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw i
				}
			}
		},
		"./node_modules/react-helmet/es/Helmet.js": function(e, t, n) {
			"use strict";
			(function(e) {
				var r, o, s, i, a = n("./node_modules/react-helmet/node_modules/prop-types/index.js"),
					c = n.n(a),
					d = n("./node_modules/react-side-effect/lib/index.js"),
					u = n.n(d),
					l = n("./node_modules/react-fast-compare/index.js"),
					p = n.n(l),
					m = n("./node_modules/react/index.js"),
					f = n.n(m),
					b = n("./node_modules/object-assign/index.js"),
					h = n.n(b),
					g = "bodyAttributes",
					y = "htmlAttributes",
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
					x = (Object.keys(O).map((function(e) {
						return O[e]
					})), "charset"),
					_ = "cssText",
					E = "href",
					j = "http-equiv",
					I = "innerHTML",
					S = "itemprop",
					T = "name",
					C = "property",
					w = "rel",
					P = "src",
					k = "target",
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
					L = "defaultTitle",
					R = "defer",
					M = "encodeSpecialCharacters",
					A = "onChangeClientState",
					D = "titleTemplate",
					F = Object.keys(N).reduce((function(e, t) {
						return e[N[t]] = t, e
					}), {}),
					B = [O.NOSCRIPT, O.SCRIPT, O.STYLE],
					U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					H = function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					},
					K = function() {
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
					V = function(e, t) {
						var n = {};
						for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
						return n
					},
					W = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					},
					G = function(e) {
						var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
					},
					Y = function(e) {
						var t = Z(e, O.TITLE),
							n = Z(e, D);
						if (n && t) return n.replace(/%s/g, (function() {
							return Array.isArray(t) ? t.join("") : t
						}));
						var r = Z(e, L);
						return t || r || void 0
					},
					Q = function(e) {
						return Z(e, A) || function() {}
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
							return void 0 !== e[O.BASE]
						})).map((function(e) {
							return e[O.BASE]
						})).reverse().reduce((function(t, n) {
							if (!t.length)
								for (var r = Object.keys(n), o = 0; o < r.length; o++) {
									var s = r[o].toLowerCase();
									if (-1 !== e.indexOf(s) && n[s]) return t.concat(n)
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
							var o = {};
							n.filter((function(e) {
								for (var n = void 0, s = Object.keys(e), i = 0; i < s.length; i++) {
									var a = s[i],
										c = a.toLowerCase(); - 1 === t.indexOf(c) || n === w && "canonical" === e[n].toLowerCase() || c === w && "stylesheet" === e[c].toLowerCase() || (n = c), -1 === t.indexOf(a) || a !== I && a !== _ && a !== S || (n = a)
								}
								if (!n || !e[n]) return !1;
								var d = e[n].toLowerCase();
								return r[n] || (r[n] = {}), o[n] || (o[n] = {}), !r[n][d] && (o[n][d] = !0, !0)
							})).reverse().forEach((function(t) {
								return e.push(t)
							}));
							for (var s = Object.keys(o), i = 0; i < s.length; i++) {
								var a = s[i],
									c = h()({}, r[a], o[a]);
								r[a] = c
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
					se = function(e, t) {
						var n = e.baseTag,
							r = e.bodyAttributes,
							o = e.htmlAttributes,
							s = e.linkTags,
							i = e.metaTags,
							a = e.noscriptTags,
							c = e.onChangeClientState,
							d = e.scriptTags,
							u = e.styleTags,
							l = e.title,
							p = e.titleAttributes;
						ce(O.BODY, r), ce(O.HTML, o), ae(l, p);
						var m = {
								baseTag: de(O.BASE, n),
								linkTags: de(O.LINK, s),
								metaTags: de(O.META, i),
								noscriptTags: de(O.NOSCRIPT, a),
								scriptTags: de(O.SCRIPT, d),
								styleTags: de(O.STYLE, u)
							},
							f = {},
							b = {};
						Object.keys(m).forEach((function(e) {
							var t = m[e],
								n = t.newTags,
								r = t.oldTags;
							n.length && (f[e] = n), r.length && (b[e] = m[e].oldTags)
						})), t && t(), c(e, f, b)
					},
					ie = function(e) {
						return Array.isArray(e) ? e.join("") : e
					},
					ae = function(e, t) {
						void 0 !== e && document.title !== e && (document.title = ie(e)), ce(O.TITLE, t)
					},
					ce = function(e, t) {
						var n = document.getElementsByTagName(e)[0];
						if (n) {
							for (var r = n.getAttribute("data-react-helmet"), o = r ? r.split(",") : [], s = [].concat(o), i = Object.keys(t), a = 0; a < i.length; a++) {
								var c = i[a],
									d = t[c] || "";
								n.getAttribute(c) !== d && n.setAttribute(c, d), -1 === o.indexOf(c) && o.push(c);
								var u = s.indexOf(c); - 1 !== u && s.splice(u, 1)
							}
							for (var l = s.length - 1; l >= 0; l--) n.removeAttribute(s[l]);
							o.length === s.length ? n.removeAttribute("data-react-helmet") : n.getAttribute("data-react-helmet") !== i.join(",") && n.setAttribute("data-react-helmet", i.join(","))
						}
					},
					de = function(e, t) {
						var n = document.head || document.querySelector(O.HEAD),
							r = n.querySelectorAll(e + "[data-react-helmet]"),
							o = Array.prototype.slice.call(r),
							s = [],
							i = void 0;
						return t && t.length && t.forEach((function(t) {
							var n = document.createElement(e);
							for (var r in t)
								if (t.hasOwnProperty(r))
									if (r === I) n.innerHTML = t.innerHTML;
									else if (r === _) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
							else {
								var a = void 0 === t[r] ? "" : t[r];
								n.setAttribute(r, a)
							}
							n.setAttribute("data-react-helmet", "true"), o.some((function(e, t) {
								return i = t, n.isEqualNode(e)
							})) ? o.splice(i, 1) : s.push(n)
						})), o.forEach((function(e) {
							return e.parentNode.removeChild(e)
						})), s.forEach((function(e) {
							return n.appendChild(e)
						})), {
							oldTags: o,
							newTags: s
						}
					},
					ue = function(e) {
						return Object.keys(e).reduce((function(t, n) {
							var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
							return t ? t + " " + r : r
						}), "")
					},
					le = function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return Object.keys(e).reduce((function(t, n) {
							return t[N[n] || n] = e[n], t
						}), t)
					},
					pe = function(e, t, n) {
						switch (e) {
							case O.TITLE:
								return {
									toComponent: function() {
										return e = t.title, n = t.titleAttributes, (r = {
											key: e
										})["data-react-helmet"] = !0, o = le(n, r), [f.a.createElement(O.TITLE, o, e)];
										var e, n, r, o
									}, toString: function() {
										return function(e, t, n, r) {
											var o = ue(n),
												s = ie(t);
											return o ? "<" + e + ' data-react-helmet="true" ' + o + ">" + G(s, r) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + G(s, r) + "</" + e + ">"
										}(e, t.title, t.titleAttributes, n)
									}
								};
							case g:
							case y:
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
											return t.map((function(t, n) {
												var r, o = ((r = {
													key: n
												})["data-react-helmet"] = !0, r);
												return Object.keys(t).forEach((function(e) {
													var n = N[e] || e;
													if (n === I || n === _) {
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
														return !(e === I || e === _)
													})).reduce((function(e, t) {
														var o = void 0 === r[t] ? t : t + '="' + G(r[t], n) + '"';
														return e ? e + " " + o : o
													}), ""),
													s = r.innerHTML || r.cssText || "",
													i = -1 === B.indexOf(e);
												return t + "<" + e + ' data-react-helmet="true" ' + o + (i ? "/>" : ">" + s + "</" + e + ">")
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
							s = e.linkTags,
							i = e.metaTags,
							a = e.noscriptTags,
							c = e.scriptTags,
							d = e.styleTags,
							u = e.title,
							l = void 0 === u ? "" : u,
							p = e.titleAttributes;
						return {
							base: pe(O.BASE, t, r),
							bodyAttributes: pe(g, n, r),
							htmlAttributes: pe(y, o, r),
							link: pe(O.LINK, s, r),
							meta: pe(O.META, i, r),
							noscript: pe(O.NOSCRIPT, a, r),
							script: pe(O.SCRIPT, c, r),
							style: pe(O.STYLE, d, r),
							title: pe(O.TITLE, {
								title: l,
								titleAttributes: p
							}, r)
						}
					},
					fe = u()((function(e) {
						return {
							baseTag: z([E, k], e),
							bodyAttributes: J(g, e),
							defer: Z(e, R),
							encode: Z(e, M),
							htmlAttributes: J(y, e),
							linkTags: X(O.LINK, [w, E], e),
							metaTags: X(O.META, [T, x, j, C, S], e),
							noscriptTags: X(O.NOSCRIPT, [I], e),
							onChangeClientState: Q(e),
							scriptTags: X(O.SCRIPT, [P, I], e),
							styleTags: X(O.STYLE, [_], e),
							title: Y(e),
							titleAttributes: J(v, e)
						}
					}), (function(e) {
						oe && ne(oe), e.defer ? oe = te((function() {
							se(e, (function() {
								oe = null
							}))
						})) : (se(e), oe = null)
					}), me)((function() {
						return null
					})),
					be = (o = fe, i = s = function(e) {
						function t() {
							return H(this, t), W(this, e.apply(this, arguments))
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
							var t, n = e.child,
								r = e.arrayTypeChildren,
								o = e.newChildProps,
								s = e.nestedChildren;
							return q({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [q({}, o, this.mapNestedChildrenToProps(n, s))]), t))
						}, t.prototype.mapObjectTypeChildren = function(e) {
							var t, n, r = e.child,
								o = e.newProps,
								s = e.newChildProps,
								i = e.nestedChildren;
							switch (r.type) {
								case O.TITLE:
									return q({}, o, ((t = {})[r.type] = i, t.titleAttributes = q({}, s), t));
								case O.BODY:
									return q({}, o, {
										bodyAttributes: q({}, s)
									});
								case O.HTML:
									return q({}, o, {
										htmlAttributes: q({}, s)
									})
							}
							return q({}, o, ((n = {})[r.type] = q({}, s), n))
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
										s = o.children,
										i = function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											return Object.keys(e).reduce((function(t, n) {
												return t[F[n] || n] = e[n], t
											}), t)
										}(V(o, ["children"]));
									switch (n.warnOnInvalidChildren(e, s), e.type) {
										case O.LINK:
										case O.META:
										case O.NOSCRIPT:
										case O.SCRIPT:
										case O.STYLE:
											r = n.flattenArrayTypeChildren({
												child: e,
												arrayTypeChildren: r,
												newChildProps: i,
												nestedChildren: s
											});
											break;
										default:
											t = n.mapObjectTypeChildren({
												child: e,
												newProps: t,
												newChildProps: i,
												nestedChildren: s
											})
									}
								}
							})), t = this.mapArrayTypeChildrenToProps(r, t)
						}, t.prototype.render = function() {
							var e = this.props,
								t = e.children,
								n = V(e, ["children"]),
								r = q({}, n);
							return t && (r = this.mapChildrenToProps(t, r)), f.a.createElement(o, r)
						}, K(t, null, [{
							key: "canUseDOM",
							set: function(e) {
								o.canUseDOM = e
							}
						}]), t
					}(f.a.Component), s.propTypes = {
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
					}, s.defaultProps = {
						defer: !0,
						encodeSpecialCharacters: !0
					}, s.peek = o.peek, s.rewind = function() {
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
					}, i);
				be.renderStatic = be.rewind, t.a = be
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function s() {}
			s.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, s, i) {
					if (i !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
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
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, t, n) {
			"use strict";

			function r(e, t) {
				e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
			}
			n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-router/esm/react-router.js"),
				a = n("./node_modules/history/esm/history.js");
			n("./node_modules/react-router-dom/node_modules/prop-types/index.js");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				if (null == e) return {};
				var n, r, o = {},
					s = Object.keys(e);
				for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
				return o
			}
			var u = n("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			s.a.Component;
			s.a.Component;
			var l = function(e) {
				function t() {
					return e.apply(this, arguments) || this
				}
				r(t, e);
				var n = t.prototype;
				return n.handleClick = function(e, t) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (n) {
						throw e.preventDefault(), n
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? t.replace : t.push)(this.props.to))
				}, n.render = function() {
					var e = this,
						t = this.props,
						n = t.innerRef,
						r = (t.replace, t.to),
						o = d(t, ["innerRef", "replace", "to"]);
					return s.a.createElement(i.g.Consumer, null, (function(t) {
						t || Object(u.default)(!1);
						var i = "string" == typeof r ? Object(a.c)(r, null, null, t.location) : r,
							d = i ? t.history.createHref(i) : "";
						return s.a.createElement("a", c({}, o, {
							onClick: function(n) {
								return e.handleClick(n, t.history)
							},
							href: d,
							ref: n
						}))
					}))
				}, t
			}(s.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function s() {}
			s.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, s, i) {
					if (i !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
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
					resetWarningCache: o
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/react-side-effect/lib/index.js": function(e, t, n) {
			"use strict";
			var r, o = n("./node_modules/react/index.js"),
				s = (r = o) && "object" == typeof r && "default" in r ? r.default : r;

			function i(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var a = !("undefined" == typeof window || !window.document || !window.document.createElement);
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
				if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
				if (void 0 !== n && "function" != typeof n) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
				return function(r) {
					if ("function" != typeof r) throw new Error("Expected WrappedComponent to be a React component.");
					var c, d = [];

					function u() {
						c = e(d.map((function(e) {
							return e.props
						}))), l.canUseDOM ? t(c) : n && (c = n(c))
					}
					var l = function(e) {
						var t, n;

						function o() {
							return e.apply(this, arguments) || this
						}
						n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, o.peek = function() {
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
							return s.createElement(r, this.props)
						}, o
					}(o.PureComponent);
					return i(l, "displayName", "SideEffect(" + function(e) {
						return e.displayName || e.name || "Component"
					}(r) + ")"), i(l, "canUseDOM", a), l
				}
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			class r {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class o {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new o(t);
					return e.forEach(e => n.push(e)), n
				}
				first() {
					if (this.tail) return this.tail.value
				}
				firstNode() {
					if (this.tail) return this.tail
				}
				forEach(e) {
					let t = this.tail;
					for (; t;) e(t.value), t = t.next
				}
				get(e) {
					const t = this.getNode(e);
					if (t) return t.value
				}
				getNode(e) {
					return this.itemsByKey[e]
				}
				has(e) {
					return e in this.itemsByKey
				}
				insertAfter(e, t) {
					const n = t instanceof r ? t : new r(t),
						o = this.getNode(e);
					if (!o) throw new Error(`Cannot find item with key ${e}`);
					n.prev = o, n.next = o.next, o.next = n, n.next && (n.next.prev = n);
					const s = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[s] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof r ? t : new r(t),
						o = this.getNode(e);
					if (!o) throw new Error(`Cannot find item with key ${e}`);
					n.next = o, n.prev = o.prev, o.prev = n, n.prev && (n.prev.next = n);
					const s = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[s] = n, this.length++
				}
				last() {
					if (this.head) return this.head.value
				}
				lastNode() {
					if (this.head) return this.head
				}
				pop() {
					if (!this.head) return;
					return this.removeNode(this.head).value
				}
				push(e) {
					const t = e instanceof r ? e : new r(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof r ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
				remove(e) {
					const t = this.getNode(e);
					if (t) return this.removeNode(t).value
				}
				removeNode(e) {
					return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.tail && (this.tail = e.next), e === this.head && (this.head = e.prev), e.next = void 0, e.prev = void 0, this.itemsByKey[e.value[this.key]] = void 0, this.length--, e
				}
				shift() {
					if (!this.tail) return;
					return this.removeNode(this.tail).value
				}
				toArray() {
					const e = [];
					return this.forEach(t => e.push(t)), e
				}
				unshift(e) {
					const t = e instanceof r ? e : new r(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof r ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const o = "EMBEDS__UNLOADABLE",
				s = "EMBEDS__LOADABLE",
				i = Object(r.a)(o),
				a = Object(r.a)(s)
		},
		"./src/reddit/actions/pages/modListing/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "modListingDataPending", (function() {
				return k
			})), n.d(t, "modListingDataLoaded", (function() {
				return N
			})), n.d(t, "modListingDataFailed", (function() {
				return L
			})), n.d(t, "modListingPageRequested", (function() {
				return M
			})), n.d(t, "morePostsPending", (function() {
				return A
			})), n.d(t, "morePostsLoaded", (function() {
				return D
			})), n.d(t, "morePostsFailed", (function() {
				return F
			})), n.d(t, "moreModListingRequested", (function() {
				return B
			})), n.d(t, "hideSubredditSuccess", (function() {
				return H
			})), n.d(t, "hideSubredditPending", (function() {
				return K
			})), n.d(t, "hideSubredditFailed", (function() {
				return q
			})), n.d(t, "unhideSubredditSuccess", (function() {
				return V
			})), n.d(t, "unhideSubredditPending", (function() {
				return W
			})), n.d(t, "unhideSubredditFailed", (function() {
				return G
			})), n.d(t, "toggleHiddenSubreddit", (function() {
				return Y
			})), n.d(t, "hideSubreddit", (function() {
				return Q
			})), n.d(t, "unhideSubreddit", (function() {
				return J
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/pick.js"),
				s = n.n(o),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeListingKey/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/page.ts"),
				l = n("./src/reddit/constants/parameters.ts"),
				p = n("./src/config.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts"),
				h = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				g = n("./src/reddit/helpers/name/index.ts"),
				y = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				v = (e, t) => Object(m.a)(e, {
					data: t,
					endpoint: Object(h.a)(Object(y.a)(`${p.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: i.cb.GET
				});
			const O = (e, t, n, r) => Object(m.a)(Object(f.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(g.c)(n)}`,
					method: r ? i.cb.PUT : i.cb.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(g.h)(n)
						})
					}
				}),
				x = (e, t, n) => O(e, t, n, !0),
				_ = (e, t, n) => O(e, t, n, !1);
			var E = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				j = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				I = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = n("./src/reddit/helpers/trackers/screenview.ts"),
				T = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/routes/modListing/index.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/actions/pages/modListing/constants.ts");
			const k = Object(a.a)(P.f),
				N = Object(a.a)(P.e),
				L = Object(a.a)(P.d),
				R = (e, t) => async (n, o, s) => {
					const i = o();
					if (i.listings.postOrder.api.pending[e]) return;
					n(k({
						key: e
					}));
					const a = await Object(I.a)("modListing", () => v(s.apiContext(), t)),
						c = `error-${e}`;
					a.ok ? (n(N({
						key: e,
						meta: i.meta,
						...a.body
					})), n(d.f(c))) : (n(L({
						error: a.error,
						key: e,
						...a.body
					})), 401 === a.status ? Object(j.a)(n, i) : n(d.e({
						id: c,
						kind: T.b.Error,
						text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: R(e, t)
					})))
				}, M = (e, t) => async (n, r) => {
					const {
						sort: o = i.Q
					} = e.params, a = Object(C.d)(e.path), d = a ? u.e : u.d, p = Object(c.a)(d, o, e.queryParams), m = r(), f = m.listings.postOrder.ids[p], b = m.listings.postOrder.api.error[p];
					if (m.listings.postOrder.api.pending[p] || f && !b && !t) return;
					const h = U(e.queryParams);
					await n(R(p, {
						...s()(e.queryParams, l.l),
						...s()(e.queryParams, l.k),
						filtered: !!a || void 0,
						moderated_srs: !0,
						sort: o,
						t: Object(E.a)(o, h)
					})), Object(S.h)(r(), !0)
				}, A = Object(a.a)(P.i), D = Object(a.a)(P.h), F = Object(a.a)(P.g), B = e => async (t, n, {
					apiContext: r
				}) => {
					const o = n(),
						a = o.platform.currentPage;
					if (!a) return;
					const {
						sort: d = i.Q
					} = e, p = a.queryParams, m = Object(C.d)(a.url), f = m ? u.e : u.d, b = Object(c.a)(f, d, p), h = o.listings.postOrder.loadMore[b];
					if (!h) return;
					const g = o.listings.postOrder.api.pending[b],
						y = o.listings.postOrder.fetchedTokens,
						O = !(!y[b] || !y[b][h.token]);
					if (g || O) return;
					const x = U(p);
					t(A({
						key: b,
						fetchedToken: h.token
					}));
					const _ = await v(r(), {
							after: h.token,
							dist: h.dist,
							filtered: !!m || void 0,
							sort: d,
							t: Object(E.a)(d, x),
							...s()(p, l.l)
						}),
						j = o.listings.postOrder.ids[b],
						I = {
							..._.body,
							postIds: (_.body.postIds || []).filter(e => !j || !j.includes(e))
						};
					_.ok ? t(D({
						key: b,
						fetchedToken: h.token,
						meta: o.meta,
						...I
					})) : t(F({
						key: b,
						error: _.error,
						fetchedToken: h.token,
						...I
					}))
				};

			function U(e) {
				const t = l.x in e && e[l.x].toUpperCase() || "";
				return t in i.Ub && i.Ub[t]
			}
			const H = Object(a.a)(P.c),
				K = Object(a.a)(P.b),
				q = Object(a.a)(P.a),
				V = Object(a.a)(P.l),
				W = Object(a.a)(P.k),
				G = Object(a.a)(P.j),
				Y = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const s = r(),
						i = Object(w.j)(s),
						[a, c, d, u] = t ? [K, H, q, x] : [W, V, G, _];
					if (!i || !i.displayText) return;
					const {
						currentPage: l
					} = s.platform;
					if (!l || !l.routeMatch) return;
					n(a(e));
					const p = await u(o(), i.displayText, e);
					p.ok ? (await n(M(l.routeMatch.match, !0)), n(c(e))) : n(d(p.body))
				}, Q = e => Y(e, !0), J = e => Y(e, !1)
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				o = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/models/Media/index.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const s = "POSTLIST__MARKED_END",
				i = "POSTLIST__UNMARKED_END",
				a = Object(r.a)(s),
				c = Object(r.a)(i),
				d = (e, t) => async (n, r) => {
					const s = r();
					e in s.listings.postOrder.fetchedTokens ? e in s.listings.postOrder.ids ? n(c({
						listingKey: e
					})) : o.j(s, e) : n(a({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/reddit/constants/componentSizes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				d = n.n(c);
			const u = Object(o.createContext)(null),
				l = Object(o.createContext)(null);
			class p extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return s.a.createElement(u.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, s.a.createElement(l.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const m = i.f + 10,
				f = s.a.memo(() => s.a.createElement(u.Consumer, null, e => e && s.a.createElement("div", {
					className: d.a.wrapper
				}, s.a.createElement(a.o, {
					className: d.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -m)
					}
				}, r.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), s.a.createElement("div", {
					className: d.a.rightBorder
				})))),
				b = s.a.memo(() => s.a.createElement(l.Consumer, null, e => s.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/components/ModHub/Content/index.m.less"),
				c = n.n(a);
			t.a = e => i.a.createElement("div", {
				className: c.a.noPermissions
			}, i.a.createElement("img", {
				className: c.a.rememberTheHuman,
				src: `${r.a.assetPath}/img/content-gate-icons/remember-the-human.png`
			}), e.isModerator ? o.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
				hk: "4wUDIF"
			}) : o.fbt._("Sorry, this is a moderator-only page", null, {
				hk: "2BZEIA"
			}), i.a.createElement("div", {
				className: c.a.noPermissionsSmallText
			}, e.isModerator ? o.fbt._("You need to change your mod permissions to view this page", null, {
				hk: "RS9sd"
			}) : e.subredditDisplayText ? o.fbt._("You must be a moderator of {subredditName} to view this page", [o.fbt._param("subredditName", e.subredditDisplayText)], {
				hk: "8eU68"
			}) : o.fbt._("You must be a moderator to view this page", null, {
				hk: "2N7TXH"
			})))
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "CgYEK3BSwEitV3N5dS53Y",
				titleFontH2: "WtxSi4x3A6EHSYOlNO6dC",
				titleFontH3: "_1s8gRCw9ZEGeZdDLi4SjEs",
				titleFontH4: "iJgEN-DVO9xH1ING9PGia",
				titleFontH5: "_1Pk2HmstIcHsVCyXL0s7WR",
				titleFontH6: "_27G51xRMOXRk6p8hF2iFF4",
				metadataFont: "_3qFnOmsyfNVU4dOg-nT7AH",
				flairFont: "IHVtmv3d9vjFTy7sOv4nb",
				labelsFont: "_3veeqeCCuB-y_5Uz7aZwNo",
				actionFont: "_2GGs_1qJNsgRTBkJjB3JyV",
				smallButtonFont: "_1wMkSw4TKFwpURuJjoijc8",
				largeButtonFont: "_37n4mei_IKI2b0S9cUN6kj",
				tabFont: "_2uzD_ZiaRuda1gPntdeFV-",
				strongTextFont: "_3iiIycx9Jvd-wtbZRRlyrS",
				buttonFontXS: "X1zM6CuE0STTL567u2KEr",
				buttonFontXs: "X1zM6CuE0STTL567u2KEr",
				buttonFontS: "_35xxostuR-t_KnCQpTxb0F",
				buttonFontM: "_1siVd6fOXNWDs8SbSH_HQ5",
				buttonFontL: "_1mAbhFs88EE9k-jaJMzlbM",
				buttonFontXL: "FxQ8KBPxEROiwB1EG0sLr",
				buttonFontXl: "FxQ8KBPxEROiwB1EG0sLr",
				bodyFontH1: "_18F7ywSczMXfDxvUzIkKou",
				bodyFontH2: "_2gpSS7qXgM9-crN9KgQr_O",
				bodyFontH3: "-JM-6-h-SOMTCi9a5ZG0g",
				bodyFontH4: "_3ZVYgWzZxJjL_cahDG32l",
				bodyFontH5: "_15iJEJUM-il2Ud09a9yqhY",
				bodyFontH6: "_2kFIrTxjdWaprwQ9leev5x",
				bodyFont: "_38q9ZzND20FKMoX8BeB0u8",
				bodyFontSmall: "_1tFfFAHeLftmld2a2M4yIs",
				bodyFontMono: "_1N1SJCd40K_9LeW3MSWULf",
				rememberTheHuman: "_2S6IM2TPtTriI4r_2Op1Od",
				noPermissions: "_3jaCG74Q3u55JqGJy3u664",
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu"
			}
		},
		"./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less": function(e, t, n) {
			e.exports = {
				modalMain: "_3TbrCaPQ_Ciq0W4JtRYgHR",
				modIcon: "_3QZVX2_MD7fnyaRbQVH7LG",
				modalBody: "IdgjnohCE075Y2bzY7kGD",
				modalTitle: "_1uJCbZDn510LJ80M7oIUiM",
				modalDescription: "_2txvYfpiVxk7MM45Ybezvj",
				feedDetailsHeader: "_1oHK5eWnpY1WTbgUlHAPGn",
				feedDetailsTitle: "r07hBWYi9sVEcAGnnrnbt",
				feedDetailsDescription: "_3od74XOi7ZCYUaElRDtJY4",
				loadingBar: "oMm7a2SmYiOmS3c_HeyVY",
				gradientAnimation: "_2TjoHmGKn7BjeBAEpBRL3T"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3w9CCp15Dn8xjuhR8VUE5n",
				hideButton: "_34rIurg3vPxO_tswAxt4wf",
				errorText: "dHzfi1tqA9d2uJEemybvK"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less": function(e, t, n) {
			e.exports = {
				row: "_3iC2jdvm0i0Q7HlrFJVoTC",
				iconStyles: "_9A1gbtA8zl5gRftEuuKPP",
				subredditIcon: "_327j3YarD5xmiCuu19J-XN",
				planetIcon: "_3RdGW7gz6XoGZ6oEgqKAVr",
				label: "_36BB5D1byWMjvVdrjUdv2",
				unhideButton: "iV4R5u2BbUz2dioFJNTAz",
				SubredditIcon: "_327j3YarD5xmiCuu19J-XN"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less": function(e, t, n) {
			e.exports = {
				rows: "_1q1k1QSwlFELkqmvELqzPI",
				noRows: "_2bMntgRcO2XGi6Tfep4QfV"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_25Nja5fbb_ZBbGBf8Bm2jO",
				hideCommunitiesHeader: "_2UuftU5L-0PE5_qTvLLSuB",
				inputContainer: "_16VxD_GKhjj0Mvr4ayqcAO",
				tertiaryButton: "_3KQk5TlvMCuZJm3Xc1Mk6L"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, n) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, n) {
			e.exports = {
				CommunityCount: "_2FGPtEJLumoHbu-QFFxout",
				communityCount: "_2FGPtEJLumoHbu-QFFxout",
				SubredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				subredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				SidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				sidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				ModalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq",
				modalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				m = n.n(p),
				f = n("./src/lib/lessComponent.tsx");
			const b = f.a.wrapped(u.b, "SubredditIcon", m.a),
				h = f.a.span("Label", m.a),
				g = Object(d.c)({
					subredditOrProfile: l.L
				});
			var y = Object(c.b)(g)(({
				children: e,
				subredditOrProfile: t
			}) => e(t, s.a.createElement(s.a.Fragment, null, s.a.createElement(b, {
				subredditOrProfile: t
			}), s.a.createElement(h, null, t.displayText))));
			var v = ({
					children: e,
					className: t,
					subredditsOrProfilesIds: n
				}) => {
					const r = n.map(t => s.a.createElement(y, {
						children: e,
						key: t.id,
						identifier: t
					}));
					return s.a.createElement("div", {
						className: t
					}, r)
				},
				O = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				x = n.n(O);
			const _ = f.a.div("CommunityCount", x.a),
				E = f.a.wrapped(v, "SubredditsOrProfiles", x.a),
				j = f.a.wrapped(i.a, "SidebarSubreddit", x.a),
				I = f.a.wrapped(i.a, "ModalSubreddit", x.a);
			var S;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(S || (S = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: n,
					onSeeMoreDetails: o,
					subredditCategory: i = {
						name: r.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, c = t ? j : I, d = n.length, u = t && n.length > 4;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(_, null, r.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [r.fbt._plural(d, "number"), r.fbt._param("category", i.name)], {
					hk: "33iWe4"
				})), d > 0 && s.a.createElement(E, {
					subredditsOrProfilesIds: t ? n.slice(0, 4) : n
				}, (t, n) => s.a.createElement(c, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, n)), d > 0 && u && s.a.createElement(a.o, {
					onClick: o
				}, r.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/raf/index.js"),
				o = n.n(r),
				s = n("./node_modules/react/index.js"),
				i = n.n(s);
			class a extends i.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && o.a.cancel(this.frame), this.frame = o()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return i.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return p
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const d = o.a.createContext(() => {});

			function u({
				children: e
			}) {
				const t = Object(s.f)(),
					n = Object(r.useCallback)(e => {
						{
							const n = t.getState(),
								r = e(n);
							Object(a.a)({
								...i.defaults(n),
								...r
							})
						}
					}, [t]);
				return o.a.createElement(d.Provider, {
					value: n
				}, e ? o.a.Children.only(e) : null)
			}

			function l() {
				return Object(r.useContext)(d)
			}

			function p(e) {
				function t(t) {
					const n = l();
					return o.a.createElement(e, c({}, t, {
						sendEvent: n
					}))
				}
				return t.displayName = "Tracked", t.WrappedComponent = e, t
			}
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, n) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "d", (function() {
				return R
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, n) => r => {
				const o = e(r),
					i = t(r),
					a = !o && i;
				return Object(s.a)(n.baseClassName, r.className, {
					[n.mIsInteractive]: i,
					[n.mIsActive]: o,
					[n.mIsVoteable]: a
				})
			};
			var c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				u = n("./src/reddit/models/Vote/index.ts"),
				l = n("./src/reddit/controls/Downvote/index.m.less"),
				p = n.n(l);
			const m = {
					...p.a,
					baseClassName: p.a.Downvote
				},
				f = ({
					voteState: e
				}) => e === u.a.downvoted,
				b = a(f, ({
					interactive: e
				}) => !1 !== e, m);
			var h = e => {
					const t = Object(c.a)();
					return o.a.createElement(d.b, {
						className: b(e),
						compact: e.compact,
						isFilled: t && f(e)
					})
				},
				g = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				y = n("./src/reddit/controls/Upvote/index.m.less"),
				v = n.n(y);
			const O = {
					...v.a,
					baseClassName: v.a.Upvote
				},
				x = ({
					voteState: e
				}) => e === u.a.upvoted,
				_ = a(x, ({
					interactive: e
				}) => !1 !== e, O);
			var E = e => {
					const t = Object(c.a)();
					return o.a.createElement(g.b, {
						className: _(e),
						compact: e.compact,
						isFilled: t && x(e)
					})
				},
				j = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				I = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				S = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				C = n.n(T);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const P = e => Object(s.a)({
					[C.a.compact]: e.compact,
					[C.a.dark]: Object(I.b)(Object(j.a)(e)),
					[C.a.nightmode]: e.isNightmode
				}),
				k = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(S.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: r,
						...i
					} = e;
					return o.a.createElement("button", w({}, i, {
						className: Object(s.a)(C.a.customDownvote, P(e), {
							[C.a.voted]: e.voteState === u.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				N = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(S.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: r,
						...i
					} = e;
					return o.a.createElement("button", w({}, i, {
						className: Object(s.a)(C.a.customUpvote, P(e), {
							[C.a.voted]: e.voteState === u.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				L = h,
				R = E
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/selectors/activeModalId.ts"),
				a = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(o.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.i,
				isBladeEditorDirty: a.h,
				isModalOpen: Object(i.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(r.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(s.h)(t))
			}))
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, n) {
			"use strict";
			var r, o;
			n.d(t, "d", (function() {
					return r
				})), n.d(t, "c", (function() {
					return o
				})), n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(r || (r = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(o || (o = {}));
			const s = "SHORTCUT_FOCUSABLE_DIV",
				i = [9, 13, 32]
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/brcast/dist/brcast.es.js");
			const o = Object(r.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/history/esm/history.js"), n("./src/reddit/actions/platform.ts");
			var r = n("./src/config.ts");
			t.a = (e, t) => {
				const n = t.platform.currentPage && t.platform.currentPage.url;
				let o = `${r.a.accountManagerOrigin}/login/`;
				const s = window.location.origin;
				n && (o += `?dest=${encodeURIComponent(`${s}${n}`)}`), window.location.href = o
			}
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			}));
			var r = n("./src/config.ts");
			const o = `${r.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				s = `${r.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				i = `${r.a.assetPath}/img/favicon/favicon-32x32.png`,
				a = `${r.a.assetPath}/img/favicon/favicon-16x16.png`,
				c = "badgeCountSync",
				d = e => window.document.querySelector(`link[href="${e}"]`),
				u = (e = !0) => {
					const t = d(e ? i : o),
						n = d(e ? a : s);
					t && n && (t.href = e ? o : i, n.href = e ? s : a)
				},
				l = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: c,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			n("./src/reddit/constants/categories.tsx");
			var r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: r.screen(e),
					profile: r.profile(e),
					subreddit: r.subreddit(e)
				}),
				s = e => t => ({
					source: "nav",
					action: "click",
					noun: e,
					...o(t)
				}),
				i = e => t => ({
					...o(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				a = e => t => ({
					...o(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "x", (function() {
				return v
			})), n.d(t, "w", (function() {
				return O
			})), n.d(t, "s", (function() {
				return x
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "z", (function() {
				return j
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "u", (function() {
				return T
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "n", (function() {
				return P
			})), n.d(t, "y", (function() {
				return k
			})), n.d(t, "k", (function() {
				return N
			})), n.d(t, "j", (function() {
				return L
			})), n.d(t, "l", (function() {
				return R
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "m", (function() {
				return F
			})), n.d(t, "h", (function() {
				return U
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "f", (function() {
				return K
			})), n.d(t, "b", (function() {
				return q
			})), n.d(t, "v", (function() {
				return V
			})), n.d(t, "g", (function() {
				return W
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/helpers/media/index.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts"),
				a = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/postDraft.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/reddit/selectors/user.ts"),
				l = n("./src/telemetry/index.ts"),
				p = n("./src/telemetry/models/PostComposer.ts"),
				m = n("./src/telemetry/models/PostDraft.ts");
			const f = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				b = e => ({
					source: "post_composer",
					action: r.c.CLICK,
					...d.defaults(e),
					screen: d.screen(e),
					correlationId: Object(o.c)(o.a.PostComposer)
				}),
				h = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === i.h.MARKDOWN ? "markdown" : "rte"
				},
				g = e => {
					Object(l.a)({
						noun: "cancel",
						...b(e)
					})
				},
				y = e => {
					Object(l.a)({
						noun: "discard",
						...b(e)
					})
				},
				v = e => {
					Object(l.a)({
						noun: "subreddit_choice",
						subreddit: d.subreddit(e),
						...b(e),
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				O = e => {
					Object(l.a)({
						noun: "subreddit_selector",
						...b(e)
					})
				},
				x = (e, t) => {
					Object(l.a)({
						noun: "post_type_selector",
						postComposer: {
							type: f[t]
						},
						...b(e)
					})
				},
				_ = () => e => ({
					noun: "add_option",
					...b(e)
				}),
				E = () => e => ({
					noun: "voting_length",
					...b(e)
				}),
				j = (e, t, n) => {
					"image_upload" === t || "video_upload" === t ? Object(l.a)({
						noun: t,
						...b(e)
					}) : Object(l.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: n ? "on" : "off"
						},
						...b(e)
					})
				},
				I = (e, t, n) => {
					Object(l.a)({
						noun: "post",
						subreddit: d.subreddit(e),
						postComposer: {
							type: t,
							...h(e, t)
						},
						post: n ? d.post(e, n) : null,
						...b(e)
					})
				},
				S = (e, t) => {
					const n = t === i.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(l.a)({
						noun: n,
						...b(e)
					})
				},
				T = (e, t) => {
					Object(l.a)({
						noun: "save",
						subreddit: d.subreddit(e),
						postComposer: {
							type: t,
							...h(e, t)
						},
						...b(e)
					})
				},
				C = (e, t) => {
					const n = e.uploads[t];
					n.error && Object(l.a)({
						...b(e),
						noun: "media",
						action: r.c.REJECT,
						actionInfo: {
							...d.actionInfo(e),
							reason: JSON.stringify(n.error)
						}
					})
				},
				w = (e, t) => {
					t.forEach(t => {
						const n = Object(s.f)(t.type);
						n && Object(l.a)({
							...b(e),
							action: r.c.DRAG,
							noun: n
						})
					})
				},
				P = (e, t, n) => {
					Object(l.a)({
						...b(e),
						noun: "input",
						postComposer: {
							inputType: n
						},
						action: t,
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				k = (e, t, n) => {
					Object(l.a)({
						...b(e),
						noun: n,
						action: Object(p.getToggleAction)(t),
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				N = e => M("input", e),
				L = () => M("add"),
				R = () => M("remove"),
				M = (e, t) => n => ({
					...b(n),
					noun: e,
					postComposer: {
						inputType: t,
						type: f.imageOnly
					},
					action: r.c.CLICK
				}),
				A = e => {
					Object(l.a)({
						...b(e),
						noun: "hide_oc_description",
						action: r.c.CLICK
					})
				},
				D = (e, t) => {
					if (t) {
						const n = d.subredditById(e, t);
						if (n) return {
							subreddit: n
						};
						const r = d.profileById(e, t);
						if (r) return {
							profile: r
						}
					}
				},
				F = (e, t) => {
					const {
						draftId: n,
						destSubreddit: r
					} = t, o = Object(u.j)(e), s = Object(c.d)(e, {
						draftId: n
					}), i = {
						authorId: o ? o.id : void 0,
						createdTimestamp: s ? s.created : void 0,
						id: n || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case a.b.Link:
							i.type = m.DraftType.Link, i.urlLength = t.body.length;
							break;
						case a.b.Markdown:
							i.type = m.DraftType.Self, i.bodyTextLength = t.body.length;
							break;
						case a.b.RichText:
							i.type = m.DraftType.RichText, t.documentStats && (i.bodyTextLength = t.documentStats.textLength, i.numberRteImages = t.documentStats.rteImagesCount, i.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case a.b.Image:
							i.type = m.DraftType.Image;
							break;
						case a.b.Video:
							i.type = m.DraftType.Video
					}
					return {
						postDraft: i,
						...D(e, r.id)
					}
				},
				B = (e, t) => {
					const n = Object(u.j)(e),
						r = {
							authorId: n ? n.id : void 0,
							createdTimestamp: t.created,
							id: t.id,
							nsfw: t.isNSFW,
							originalContent: t.isOriginalContent,
							spoiler: t.isSpoiler,
							titleLength: t.title.length
						};
					switch (t.kind) {
						case a.b.Link:
							r.type = m.DraftType.Link, r.urlLength = (t.body || "").length;
							break;
						case a.b.Markdown:
							r.type = m.DraftType.Self, r.bodyTextLength = (t.body || "").length;
							break;
						case a.b.RichText:
							r.type = m.DraftType.RichText
					}
					return {
						postDraft: r,
						...D(e, t.subredditId)
					}
				},
				U = (e, t) => {
					Object(l.a)({
						noun: "draft_load",
						...b(e),
						...F(e, t)
					})
				},
				H = (e, t) => {
					Object(l.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...b(e),
						...F(e, t)
					})
				},
				K = (e, t) => {
					Object(l.a)({
						noun: "draft_delete",
						...b(e),
						...B(e, t)
					})
				},
				q = e => {
					Object(l.a)({
						...b(e),
						noun: "social_connect_link",
						action: r.c.CLICK
					})
				},
				V = (e, t) => {
					Object(l.a)({
						...b(e),
						noun: "twitter_share_checkbox",
						action: Object(p.getToggleAction)(t)
					})
				},
				W = (e, t, n) => {
					Object(l.a)({
						...b(e),
						...F(e, t),
						noun: "draft_share",
						action: n ? r.c.ENABLE : r.c.DISABLE
					})
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return j
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "p", (function() {
				return N
			})), n.d(t, "i", (function() {
				return L
			})), n.d(t, "j", (function() {
				return R
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "a", (function() {
				return F
			})), n.d(t, "n", (function() {
				return B
			})), n.d(t, "m", (function() {
				return U
			})), n.d(t, "t", (function() {
				return q
			})), n.d(t, "w", (function() {
				return V
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "d", (function() {
				return Y
			})), n.d(t, "u", (function() {
				return Q
			})), n.d(t, "v", (function() {
				return J
			})), n.d(t, "h", (function() {
				return z
			}));
			var r = n("./node_modules/lodash/pick.js"),
				o = n.n(r),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makePostDraftPageKey/index.ts"),
				a = n("./src/reddit/constants/parameters.ts"),
				c = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				d = n("./src/reddit/helpers/routeKey/index.ts"),
				u = n("./src/reddit/helpers/trackers/postComposer.ts"),
				l = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = n("./src/reddit/models/Comment/index.ts"),
				m = n("./src/reddit/models/Post/index.ts"),
				f = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				b = n("./src/reddit/selectors/profile.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/lib/makePostCreationPageKey/index.ts"),
				y = n("./src/lib/makeSearchKey/index.ts"),
				v = n("./src/reddit/helpers/correlationIdTracker.ts"),
				O = n("./src/reddit/helpers/trackers/searchResults.ts"),
				x = n("./src/reddit/selectors/postDraft.ts"),
				_ = n("./src/reddit/selectors/telemetry.ts"),
				E = n("./src/telemetry/index.ts");
			const j = (e, t, n, r, u, f) => {
					const {
						route: b
					} = e, {
						name: h
					} = b.meta;
					if (!h) return;
					const v = t.platform.currentPage;
					switch (h) {
						case s.Db.COMMENTS: {
							const {
								partialCommentId: o,
								partialPostId: s
							} = e.match.params, i = Object(m.r)(s), a = Object(d.a)(e, t, t.posts.models[i]);
							if (!a) return;
							const u = o && Object(p.f)(o),
								{
									sortToUse: l
								} = Object(c.a)(t, i),
								f = !0;
							Object(E.a)(P(a, i, u, n, r, l, f)(t));
							break
						}
						case s.Db.INDEX:
						case s.Db.LISTING:
						case s.Db.MULTIREDDIT:
						case s.Db.SUBREDDIT: {
							const o = Object(d.c)(e, t);
							if (!o.listingKey) return;
							const {
								params: i,
								queryParams: a
							} = e.match, {
								sort: c = (o.sort ? o.sort : s.P.HOT)
							} = i, u = a.t;
							Object(E.a)(I(o.listingKey, c, n, r, u)(t));
							break
						}
						case s.Db.TOPIC: {
							const o = Object(d.c)(e, t);
							if (!o.listingKey) return;
							const {
								params: i
							} = e.match, a = o.sort ? o.sort : s.Q, {
								sort: c = a
							} = i;
							Object(E.a)(I(o.listingKey, c, n, r)(t));
							break
						}
						case s.Db.PROFILE_OVERVIEW: {
							const o = Object(d.d)(e, t);
							if (!o) return;
							const {
								params: i,
								queryParams: a
							} = e.match, {
								sort: c = s.vb
							} = i, u = a.t;
							Object(E.a)(S(o, c, n, r, u)(t));
							break
						}
						case s.Db.PROFILE_POSTS: {
							const o = Object(d.d)(e, t);
							if (!o) return;
							const {
								queryParams: i
							} = e.match, {
								sort: a = s.vb,
								t: c = s.wb
							} = i;
							Object(E.a)(T(o, a, n, r, c)(t));
							break
						}
						case s.Db.PROFILE_COMMENTS: {
							const o = Object(d.d)(e, t);
							if (!o) return;
							const {
								queryParams: i
							} = e.match, {
								sort: a = s.vb,
								t: c = s.wb
							} = i;
							Object(E.a)(C(o, a, n, r, c)(t));
							break
						}
						case s.Db.PROFILE_PRIVATE: {
							const o = Object(d.d)(e, t);
							if (!o) return;
							Object(E.a)(w(o)(r, n)(t));
							break
						}
						case s.Db.PROFILE_MODERATION:
							f && N(t, !0);
							break;
						case s.Db.SETTINGS: {
							const o = e;
							Object(E.a)(K(n, r)(t)), o.match.params.page === s.Qb.Profile && Object(l.j)(t);
							break
						}
						case s.Db.POST_CREATION:
							if (f && u) {
								const e = Object(g.a)(u);
								Object(E.a)(k(e, n, r)(t))
							}
							break;
						case s.Db.POST_DRAFT: {
							const {
								draftId: o
							} = e.match.params, s = Object(i.a)(e.match.params);
							if (!s) return;
							A(t, s, o, n, r);
							break
						}
						case s.Db.SUBREDDIT_WIKI:
							Object(E.a)(G(n, r)(t));
							break;
						case s.Db.COINS:
							Object(E.a)(D(n, r)(t)), Object(E.a)(F()(t));
							break;
						case s.Db.PREMIUM:
							Object(E.a)(B(n, r)(t)), Object(E.a)(U()(t));
							break;
						case s.Db.APPEAL:
							Object(E.a)(H(n, r)(t));
							break;
						case s.Db.INBOX_PAGES:
							f && M(t);
							break;
						case s.Db.MODERATION_PAGES:
							f && L(t, !0, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case s.Db.COLLECTION_COMMENTS:
							f && J(t, !0);
							break;
						case s.Db.MODQUEUE_PAGES:
							f && R(t, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case s.Db.SUBREDDIT_LEADERBOARD:
							f && Object(E.a)(W()(t));
							break;
						case s.Db.SEARCH_RESULTS:
							if (f) {
								const s = Object(d.e)(e);
								if (!s) return;
								Object(E.a)(Q(s, Object(y.c)(o()(v && v.queryParams || {}, a.t)), n, r, v)(t))
							}
							break;
						case s.Db.PUBLIC_ACCESS_NETWORK:
							f && Object(E.a)(q()(t));
							break;
						case s.Db.GEOTAGGING:
							f && Object(E.a)(Y()(t));
							break;
						case s.Db.SUBREDDIT_CREATION:
							f && Object(E.a)(V()(t));
							break;
						case s.Db.MOD_LISTING:
							f && z(t, !0)
					}
				},
				I = (e, t, n, r, o, s) => i => {
					const {
						api: a
					} = i.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(i),
						actionInfo: _.actionInfo(i, {
							success: c
						}),
						customFeed: _.customFeed(i),
						listing: _.listing(i, e, {
							sort: t,
							sortTime: o
						}),
						subreddit: _.subreddit(i),
						timer: _.timer(n, r),
						userSubreddit: _.userSubreddit(i),
						adblock: _.adblock(i),
						postFlair: {
							title: s
						}
					}
				},
				S = (e, t, n, r, o) => s => {
					const i = _.listing(s, e);
					i && (i.sort = t, o && (i.sortTime = o));
					const {
						api: a
					} = s.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(s),
						actionInfo: _.actionInfo(s, {
							success: c
						}),
						profile: _.profile(s),
						snoovatar: _.snoovatar(s),
						subreddit: _.subreddit(s),
						timer: _.timer(n, r),
						userSubreddit: _.userSubreddit(s),
						adblock: _.adblock(s)
					}
				},
				T = (e, t, n, r, o) => s => {
					const i = _.listing(s, e);
					i && (i.sort = t, o && (i.sortTime = o));
					const {
						api: a
					} = s.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(s),
						actionInfo: _.actionInfo(s, {
							success: c
						}),
						profile: _.profile(s),
						subreddit: _.subreddit(s),
						timer: _.timer(n, r),
						userSubreddit: _.userSubreddit(s),
						adblock: _.adblock(s)
					}
				},
				C = (e, t, n, r, o) => s => {
					const i = _.profileComments(s, e);
					i && (i.sort = t, o && (i.sortTime = o));
					const {
						api: a
					} = s.profileCommentsPage, c = !a.error[e] && !a.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(s),
						actionInfo: _.actionInfo(s, {
							success: c
						}),
						profile: _.profile(s),
						subreddit: _.subreddit(s),
						timer: _.timer(n, r),
						userSubreddit: _.userSubreddit(s),
						adblock: _.adblock(s)
					}
				},
				w = e => (t, n) => r => {
					const o = !r.profilePrivatePage.api.error[e] && !r.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(r),
						actionInfo: _.actionInfo(r, {
							success: o
						}),
						profile: _.profile(r),
						subreddit: _.subreddit(r),
						timer: _.timer(n, t),
						userSubreddit: _.userSubreddit(r),
						adblock: _.adblock(r)
					}
				},
				P = (e, t, n, r, o, s, i) => a => {
					const {
						api: c
					} = a.pages.comments, d = !c.error[e] && !c.pending[e], u = Object(f.c)(a, {
						postId: t,
						isForceSelected: i
					}), l = {
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(a),
						actionInfo: _.actionInfo(a, {
							success: d,
							reason: u || void 0
						}),
						post: _.post(a, t),
						profile: _.profile(a),
						subreddit: _.subreddit(a),
						timer: _.timer(r, o),
						userSubreddit: _.userSubreddit(a),
						adblock: _.adblock(a),
						postEvent: _.postEventI13nSelector(a, {
							postId: t
						}),
						postCollection: _.postCollectionI13nSelector(a, {
							postId: t
						}),
						listing: _.listing(a, void 0, {
							sort: s
						})
					};
					return n && (l.comment = _.comment(a, n)), l
				},
				k = (e, t, n) => r => {
					const o = r.creations.api.page.fetched[e],
						s = r.platform.currentPage ? r.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(r),
						actionInfo: _.actionInfo(r, {
							success: o
						}),
						post: s ? _.post(r, s) : void 0,
						subreddit: _.subreddit(r),
						timer: _.timer(t, n),
						userSubreddit: _.userSubreddit(r),
						adblock: _.adblock(r)
					}
				},
				N = (e, t) => {
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						actionInfo: _.actionInfo(e, {
							success: t
						})
					})
				},
				L = (e, t, n, r) => {
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						actionInfo: _.actionInfo(e, {
							success: t
						}),
						profile: _.profileById(e, Object(b.m)(e, r)),
						subreddit: _.subredditById(e, Object(h.F)(e, n)),
						userSubreddit: _.userSubreddit(e),
						adblock: _.adblock(e)
					})
				},
				R = (e, t, n) => {
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						profile: _.profileById(e, Object(b.m)(e, n)),
						subreddit: _.subredditById(e, Object(h.F)(e, t)),
						userSubreddit: _.userSubreddit(e),
						adblock: _.adblock(e)
					})
				},
				M = e => {
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						actionInfo: _.actionInfo(e)
					})
				},
				A = (e, t, n, r, o) => {
					const s = e.creations.api.page.pending[t],
						i = !e.creations.api.page.error[t] && !s && !!n,
						a = Object(x.h)(e, n);
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						actionInfo: _.actionInfo(e, {
							success: i
						}),
						subreddit: _.subreddit(e),
						timer: _.timer(r, o),
						userSubreddit: _.userSubreddit(e),
						adblock: _.adblock(e),
						...a ? Object(u.m)(e, a) : {}
					})
				},
				D = (e, t) => n => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(v.c)(v.a.GoldPayment),
					..._.defaults(n),
					timer: _.timer(e, t),
					adblock: _.adblock(n)
				}),
				F = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._.defaults(e)
				}),
				B = (e, t) => n => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(v.c)(v.a.GoldPayment),
					..._.defaults(n),
					timer: _.timer(e, t),
					adblock: _.adblock(n)
				}),
				U = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._.defaults(e)
				}),
				H = (e, t) => n => ({
					source: "appeal",
					action: "view",
					noun: "page",
					..._.defaults(n),
					timer: _.timer(e, t)
				}),
				K = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._.defaults(n),
					timer: _.timer(e, t)
				}),
				q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: _.subreddit(e),
					..._.defaults(e)
				}),
				V = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._.defaults(e)
				}),
				W = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					..._.defaults(e)
				}),
				G = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._.defaults(n),
					customFeed: _.customFeed(n),
					subreddit: _.subreddit(n),
					timer: _.timer(e, t),
					userSubreddit: _.userSubreddit(n),
					adblock: _.adblock(n)
				}),
				Y = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					..._.defaults(e)
				}),
				Q = (e, t, n, r, o, i) => a => {
					let c = !0;
					if (t.type.indexOf(s.Pb.Posts) > -1) {
						const {
							api: t
						} = a.listings.listingOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(s.Pb.Subreddits) > -1 || t.type.indexOf(s.Pb.Users) > -1) {
						const {
							api: t
						} = a.listings.postOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					const d = _.paneName(a, o),
						u = _.structureType(a, o),
						l = a.platform.currentPage && a.platform.currentPage.urlParams && a.platform.currentPage.urlParams.subredditName ? _.subredditByName(a, a.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						...O.c(a, t),
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(a),
						actionInfo: _.actionInfo(a, {
							success: c,
							paneName: d
						}),
						timer: _.timer(n, r),
						search: {
							..._.search(a, t, !0, o || void 0),
							...!!i && {
								originElement: i
							},
							queryId: Object(v.c)(v.a.SearchResults),
							structureType: u,
							subredditId: t.restrict_sr && l && l.id ? l.id : void 0,
							subredditName: t.restrict_sr && l && l.name ? l.name : void 0
						},
						...!!i && {
							correlationId: Object(v.c)(v.a.SearchResults)
						},
						userPreferences: {
							hideNsfw: !a.user.prefs.over18
						}
					}
				},
				J = (e, t) => {
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						actionInfo: _.actionInfo(e, {
							success: t
						})
					})
				},
				z = (e, t) => {
					Object(E.a)({
						source: "global",
						action: "view",
						noun: "screen",
						..._.defaults(e),
						actionInfo: _.actionInfo(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "t", (function() {
				return h
			})), n.d(t, "s", (function() {
				return g
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "w", (function() {
				return v
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "m", (function() {
				return R
			})), n.d(t, "b", (function() {
				return M
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			const d = "search",
				u = "search_results_best",
				l = (e, t) => {
					const n = c.subreddit(e);
					return {
						screen: c.screen(e),
						subreddit: n && t && t.restrict_sr ? n : null
					}
				},
				p = (e, t) => n => {
					const r = t;
					return r.structureType = "related", {
						action: e,
						correlationId: Object(i.c)(i.a.SearchResults),
						noun: "related_search",
						source: d,
						search: c.search(n, r),
						...l(n)
					}
				},
				m = (e, t, n, r) => o => ({
					...l(o, n),
					source: d,
					action: "click",
					noun: t,
					actionInfo: c.actionInfo(o, r ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: r ? c.discoveryUnit(r) : null,
					search: c.search(o, n),
					post: c.post(o, e),
					media: c.media(o, e)
				}),
				f = (e, t, n, r, o) => s => ({
					...C(s, e, t, o, r, n),
					noun: "ad"
				}),
				b = (e, t, n) => o => {
					let s = !0;
					if (t.type.indexOf(r.Pb.Posts) > -1) {
						const {
							api: t
						} = o.listings.listingOrder;
						s = s && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(r.Pb.Subreddits) > -1 || t.type.indexOf(r.Pb.Users) > -1) {
						const {
							api: t
						} = o.listings.postOrder;
						s = s && !t.error[e] && !t.pending[e]
					}
					return {
						...l(o, t),
						source: d,
						action: "view",
						noun: "search_results_post",
						actionInfo: c.actionInfo(o, {
							success: s,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: c.discoveryUnit(n),
						search: c.search(o, t)
					}
				},
				h = (e, t) => n => ({
					action: "view",
					actionInfo: c.actionInfo(n),
					metaSearch: c.metaSearch(t),
					noun: e,
					screen: c.screen(n),
					search: c.smartSearch(n, t),
					source: d
				}),
				g = (e, t) => n => ({
					action: "click",
					actionInfo: c.actionInfo(n),
					noun: e,
					metaSearch: c.metaSearch(t),
					screen: c.screen(n),
					search: c.smartSearch(n, t),
					source: d
				}),
				y = (e, t, n) => r => ({
					source: d,
					action: "click",
					noun: c.SearchDropdownNouns.Recent,
					actionInfo: c.actionInfo(r, {
						paneName: "subreddit_dropdown",
						position: n + 1
					}),
					search: {
						query: e,
						originPageType: r.platform.currentPage ? c.getPageTypeFromCurrentPage(r.platform.currentPage) : void 0,
						queryId: Object(i.c)(i.a.SearchResults)
					},
					...O(r, t)
				}),
				v = (e, t, n, r) => o => {
					const s = r.filter(e => e.id);
					return {
						source: d,
						action: "click",
						noun: c.SearchDropdownNouns.Typeahead,
						actionInfo: c.actionInfo(o, {
							position: n + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: o.platform.currentPage ? c.getPageTypeFromCurrentPage(o.platform.currentPage) : void 0,
							queryId: Object(i.c)(i.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: s.map(e => e.id),
							numberSubreddits: s.length
						},
						...O(o, t)
					}
				},
				O = (e, t) => {
					const n = t.isSubreddit && t.id ? c.subredditForSearch(e, t.id) : void 0,
						r = t.isProfile && t.id ? c.profileForSearch(e, t.id) : void 0,
						o = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? n || o : void 0,
						profile: t.isProfile ? r || o : void 0
					}
				},
				x = (e, t, n) => r => ({
					action: t,
					actionInfo: c.actionInfo(r),
					noun: e,
					screen: c.screen(r),
					search: c.search(r, n),
					source: u
				});
			var _;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(_ || (_ = {}));
			const E = (e, t) => n => ({
					...l(n, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				}),
				j = (e, t) => n => ({
					...l(n, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				}),
				I = (e, t) => n => ({
					action: "click",
					correlationId: Object(i.c)(i.a.SearchResults),
					noun: e ? r.Ob.ToSubreddit : r.Ob.ToGlobal,
					search: c.search(n, t),
					source: d
				}),
				S = (e, t, n, r) => o => ({
					...l(o, n),
					source: d,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(o, {
						relativePosition: c.getRelativePostOrder(o, t, e)
					}),
					search: {
						...c.search(o, n),
						...!!r && {
							originElement: r
						}
					},
					post: c.post(o, t)
				}),
				T = (e, t, n, r, o) => s => C(s, e, t, n, r, o),
				C = (e, t, n, r, o, a) => {
					const u = c.paneName(e, r),
						l = c.postRelativePosition(e, t, o, a),
						p = c.amountOfElementsBeforePost(e, n, o, a, u),
						m = null !== l ? p + l : null,
						f = c.structureType(e, r),
						b = {
							...c.search(e, n, !0, r || void 0),
							structureType: f,
							queryId: Object(i.c)(i.a.SearchResults)
						};
					return {
						source: d,
						action: s.c.CLICK,
						noun: "post",
						actionInfo: r ? {
							pageType: c.getPageTypeFromCurrentPage(r),
							paneName: u,
							position: m,
							relativePosition: l
						} : c.actionInfo(e, {
							paneName: u,
							position: m,
							relativePosition: l
						}),
						search: b,
						post: c.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: a ? c.discoveryUnit(a) : null
					}
				},
				w = (e, t, n, r, o, s) => i => P(i, e, t, n, r, o, s),
				P = (e, t, n, r, u, l, p) => {
					if (!r) {
						r = Object(a.D)(e, {
							postId: l
						}).belongsTo
					}
					const m = c.paneName(e, n);
					let f, b;
					if (l) {
						f = c.postRelativePosition(e, l, u, p);
						const n = c.amountOfElementsBeforePost(e, t, u, p, m);
						b = null !== f ? n + f : null
					} else {
						f = c.communityRelativePosition(e, r.id, u, p);
						const t = c.amountOfElementsBeforeCommunity(e, u, p);
						b = null !== f ? t + f : null
					}
					const h = c.structureType(e, n),
						g = {
							...c.search(e, t, !0, n || void 0),
							structureType: h,
							queryId: Object(i.c)(i.a.SearchResults)
						};
					return {
						source: d,
						action: s.c.CLICK,
						noun: r.type,
						search: g,
						subreddit: r.type === o.a.SUBREDDIT ? c.subredditForSearch(e, r.id) : void 0,
						profile: r.type === o.a.PROFILE ? c.profileForSearch(e, r.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: p ? c.discoveryUnit(p) : null,
						actionInfo: n ? {
							pageType: c.getPageTypeFromCurrentPage(n),
							paneName: m,
							position: b,
							relativePosition: f
						} : c.actionInfo(e, {
							paneName: m,
							position: b,
							relativePosition: f
						}),
						post: l ? c.post(e, l) : void 0
					}
				},
				k = (e, t) => n => ({
					...l(n, e),
					source: d,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: {
						...c.search(n, e),
						...!!t && {
							originElement: t
						}
					},
					subreddit: c.subreddit(n)
				}),
				N = (e, t, n, r, o) => i => ({
					...C(i, t, n, r, e, o),
					action: s.c.VIEW
				}),
				L = (e, t, n, r) => o => ({
					...l(o, n),
					source: d,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(o, {
						relativePosition: c.getRelativePostOrder(o, t, e),
						position: c.getAbsoluteOrder(o, t, e)
					}),
					search: {
						...c.search(o, n),
						...!!r && {
							originElement: r
						}
					},
					post: c.post(o, t)
				}),
				R = (e, t, n) => r => ({
					...l(r),
					source: d,
					action: "click",
					noun: `search_result_${e}`,
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(r),
					search: {
						...c.search(r, t),
						...!!n && {
							originElement: n
						}
					},
					[e]: c[e](r)
				}),
				M = (e, t) => n => ({
					...l(n, t),
					source: d,
					action: e,
					noun: "covid_banner",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				})
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? o.a.createElement("span", d({}, n, {
				className: Object(s.a)(c.a.compactDownvoteWrapper, n.className)
			}), o.a.createElement(u, {
				className: c.a.compactDownvote,
				isFilled: t
			})) : o.a.createElement("span", d({}, n, {
				className: Object(s.a)(c.a.downvoteWrapper, n.className)
			}), o.a.createElement(u, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => o.a.createElement("i", {
				className: Object(s.a)(Object(i.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? o.a.createElement("span", d({}, n, {
				className: Object(s.a)(c.a.compactUpvoteWrapper, n.className)
			}), o.a.createElement(u, {
				className: c.a.compactUpvote,
				isFilled: t
			})) : o.a.createElement("span", d({}, n, {
				className: Object(s.a)(c.a.upvoteWrapper, n.className)
			}), o.a.createElement(u, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...n
			}) => o.a.createElement("svg", c({
				className: Object(s.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), o.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/constants/colors.ts");
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? s.b.orangered : "none"
			}))
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/selectors/structuredStyles.ts"),
				l = n("./src/reddit/layout/page/Listing/Content.m.less"),
				p = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(d.t)(),
				b = Object(i.c)({
					isEditing: u.i,
					layout: (e, t) => t.forcedLayout || Object(d.O)(e, t)
				}),
				h = Object(s.b)(b),
				g = ({
					disableFullscreen: e,
					dispatch: t,
					fitPageToContent: n,
					forcedLayout: r,
					isCollectionLayout: s,
					isEditing: i,
					layout: a,
					pageLayer: c,
					...d
				}) => o.a.createElement("div", d);
			t.a = f(h(({
				className: e,
				...t
			}) => o.a.createElement(g, m({
				className: Object(a.a)(e, p.a.styledContent, {
					[p.a.mLargePostLayout]: t.layout === c.g.Large,
					[p.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[p.a.mClassicWidth]: t.isCollectionLayout,
					[p.a.mIsEditing]: !!t.isEditing,
					[p.a.mCanFlexFullWidth]: !t.fitPageToContent
				})
			}, t))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				Body: "_1vyLCp-v-tE5QvZovwrASa",
				body: "_1vyLCp-v-tE5QvZovwrASa",
				Sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh",
				backgroundContainer: "_33erTQ46yfKeF2B6B-ooMJ"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				p = n("./src/reddit/models/Theme/index.ts"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class b extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return o.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var h = Object(f.a)(b);
			var g = e => o.a.createElement(h, e),
				y = n("./src/reddit/layout/page/Listing/index.m.less"),
				v = n.n(y);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(a.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: r,
						theme: s,
						...a
					} = e, c = Object(m.a)(e), d = {
						"--pseudo-before-background": t || Object(p.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return o.a.createElement("div", O({
						className: Object(i.a)(v.a.backgroundContainer, n),
						style: d
					}, a))
				}),
				_ = c.a.div("Body", v.a),
				E = c.a.div("Sidebar", v.a),
				j = e => e.hero ? o.a.createElement(o.a.Fragment, null, e.hero) : null;

			function I(e) {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: `${d.q}px`,
						marginTop: t
					} : {
						marginLeft: `${d.q}px`,
						marginTop: t
					},
					r = e.sidebar && o.a.createElement(E, {
						className: e.isCollectionLayout ? v.a["m-collectionLayout"] : v.a.defaultLayout,
						style: n
					}, e.sidebar),
					a = o.a.createElement(s.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? o.a.createElement(o.a.Fragment, null, e.sidebars[0], a, e.sidebars[1]) : e.isPageSwapped ? o.a.createElement(o.a.Fragment, null, r, a) : o.a.createElement(o.a.Fragment, null, a, r);
				const p = e.disableFullscreen ? `${e.maxWidth||l.a+2*d.m}px` : "100%";
				return o.a.createElement(g, {
					subredditId: e.subredditId
				}, o.a.createElement("div", {
					className: Object(i.a)(v.a.outerContainer, u.i, e.className),
					ref: e.containerRef
				}, o.a.createElement(x, {
					className: u.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), o.a.createElement("div", {
					className: v.a.innerContainer
				}, o.a.createElement("div", {
					className: v.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, j(e), o.a.createElement("div", {
					style: {
						maxWidth: p
					}
				}, e.trendingUnit), o.a.createElement(_, {
					style: {
						maxWidth: p
					}
				}, c))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(o);
			t.a = r.a.div("inlineRow", s.a)
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/fromPairs.js"),
				s = n.n(o),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/extractQueryParams/index.ts"),
				p = n("./src/lib/makeListingKey/index.ts"),
				m = n("./src/reddit/actions/pages/modListing/index.ts"),
				f = n("./src/reddit/components/EmptySubreddit.tsx"),
				b = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				h = n("./src/reddit/components/JumpToContent/index.tsx"),
				g = n("./src/reddit/components/ListingPostList/index.tsx"),
				y = n("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				v = n("./src/higherOrderComponents/asModal/index.tsx"),
				O = n("./src/reddit/actions/modal.ts"),
				x = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = n("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				E = n("./src/reddit/controls/TextButton/index.tsx"),
				j = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				I = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				S = n("./src/reddit/selectors/activeModalId.ts"),
				T = n("./src/reddit/selectors/modQueue.ts"),
				C = n("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				w = n.n(C);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = Object(v.a)(e => a.a.createElement(x.d, {
				className: w.a.modalBody
			}, a.a.createElement(x.h, null, a.a.createElement(I.a, null, a.a.createElement(x.p, {
				className: w.a.modalTitle
			}, a.a.createElement(j.a, {
				className: w.a.modIcon
			}), P._("r/Mod", null, {
				hk: "2a9ICx"
			})), a.a.createElement(E.a, {
				onClick: e.onCloseModal
			}, a.a.createElement(x.b, null)))), a.a.createElement(x.k, {
				className: w.a.modalMain
			}, a.a.createElement("div", {
				className: w.a.modalDescription
			}, P._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), a.a.createElement(_.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), N = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
				className: w.a.feedDetailsTitle
			}, a.a.createElement(j.a, {
				className: w.a.modIcon
			}), P._("r/Mod", null, {
				hk: "2a9ICx"
			})), a.a.createElement("div", {
				className: w.a.feedDetailsDescription
			}, P._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? a.a.createElement(_.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : a.a.createElement("div", {
				className: w.a.loadingBar
			})), L = Object(d.c)({
				isModalOpen: Object(S.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: T.f
			});
			var R = Object(c.b)(L, (e, {}) => ({
					toggleModal: () => e(Object(O.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
				}))(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: n,
						toggleModal: r
					} = e;
					return n ? a.a.createElement(a.a.Fragment, null, a.a.createElement(N, {
						moderatedCommunitiesIds: n,
						onSeeMoreDetails: r
					}), t && a.a.createElement(k, {
						moderatedCommunitiesIds: n,
						onCloseModal: r,
						onOverlayClick: r,
						withOverlay: !0
					})) : null
				}),
				M = n("./node_modules/react-router-redux/es/index.js"),
				A = n("./src/reddit/components/TrackingHelper/index.tsx"),
				D = n("./src/reddit/contexts/PageLayer/index.tsx"),
				F = n("./src/reddit/controls/Button/index.tsx");
			const B = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				U = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				H = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var K = n("./src/reddit/routes/modListing/index.ts");
			const q = e => e.modListingPage.filteredSubreddits.api.pending;
			var V = n("./src/reddit/constants/keycodes.ts"),
				W = n("./src/reddit/layout/row/Inline/index.tsx"),
				G = n("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				Y = n.n(G);
			const Q = Object(d.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: q
			});
			class J extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditInput: ""
					}, this.clearSubredditInput = () => {
						this.setSubredditInput("")
					}, this.setSubredditInput = e => {
						this.setState({
							subredditInput: e
						})
					}, this.submitInput = () => {
						this.canSubmitInput() && (this.props.sendEvent(B()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === V.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(W.a, null, a.a.createElement("input", {
						className: Y.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: r.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), a.a.createElement(F.i, {
						"aria-label": r.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: Y.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, r.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && a.a.createElement("div", {
						className: Y.a.errorText
					}, e.apiError.explanation))
				}
			}
			var z = Object(c.b)(Q, e => ({
					hide: t => e(Object(m.hideSubreddit)(t))
				}))(Object(A.c)(J)),
				X = n("./src/lib/lessComponent.tsx"),
				Z = n("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = n("./src/reddit/icons/fonts/Clear/index.tsx"),
				ee = n("./src/reddit/selectors/profile.ts"),
				te = n("./src/reddit/selectors/subreddit.ts"),
				ne = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				re = n.n(ne);
			const oe = X.a.wrapped(Z.b, "SubredditIcon", re.a),
				se = Object(d.c)({
					isApiPending: q,
					subredditOrProfile: (e, t) => {
						const n = Object(te.A)(e, {
							subredditName: t.subredditName
						});
						if (!n) {
							const n = (e => e.startsWith(u.Wb) ? e.slice(2) : e)(t.subredditName);
							return n && Object(ee.j)(e, {
								profileName: n
							}) || null
						}
						return n
					}
				});
			class ie extends a.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(U()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? a.a.createElement(_.a, {
						className: re.a.row,
						to: e.subredditOrProfile.url
					}, a.a.createElement(oe, {
						subredditOrProfile: e.subredditOrProfile
					}), a.a.createElement("span", {
						className: re.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && a.a.createElement("button", {
						"aria-label": r.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: re.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, a.a.createElement($.a, null))) : null
				}
			}
			var ae = Object(c.b)(se, e => ({
					unhide: t => e(Object(m.unhideSubreddit)(t))
				}))(Object(A.c)(ie)),
				ce = n("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				de = n.n(ce);
			const {
				fbt: ue
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var le = ({
					hiddenSubredditsNames: e
				}) => {
					const t = e.map(e => a.a.createElement(ae, {
						key: e,
						subredditName: e
					}));
					return a.a.createElement(a.a.Fragment, null, e.length ? a.a.createElement("div", {
						className: de.a.rows
					}, t) : a.a.createElement("div", {
						className: de.a.noRows
					}, ue._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				pe = n("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				me = n.n(pe);
			const {
				fbt: fe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), be = Object(D.t)({
				filtered: e => !!e && Object(K.d)(e.url)
			}), he = Object(d.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class ge extends a.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(H(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement("div", {
						className: me.a.container
					}, a.a.createElement("div", {
						className: me.a.hideCommunitiesHeader
					}, fe._("Hide communities", null, {
						hk: "15OtHo"
					})), a.a.createElement(F.o, {
						className: me.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? fe._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : fe._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && a.a.createElement("div", {
						className: me.a.inputContainer
					}, a.a.createElement(z, null), a.a.createElement(le, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var ye = be(Object(c.b)(he, (e, {
					filtered: t
				}) => ({
					toggleFiltered: () => e(Object(M.b)(t ? K.a : K.b))
				}))(Object(A.c)(ge))),
				ve = n("./src/reddit/components/SidebarContainer/index.tsx"),
				Oe = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				xe = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var _e = () => a.a.createElement(ve.a, null, a.a.createElement(xe.a, {
					title: r.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, a.a.createElement(R, null), a.a.createElement(ye, null)), a.a.createElement(Oe.a, null)),
				Ee = n("./src/reddit/components/TitleTagManager/index.tsx"),
				je = n("./src/reddit/constants/page.ts"),
				Ie = n("./src/reddit/constants/parameters.ts"),
				Se = n("./src/reddit/helpers/trackers/screenview.ts"),
				Te = n("./src/reddit/layout/page/Listing/index.tsx"),
				Ce = n("./src/reddit/selectors/moderatorPermissions.ts");
			const we = Object(d.a)((e, {
					location: t
				}) => t.search, (e, {
					match: t
				}) => t.params.sort || u.P.HOT, (e, {
					match: t
				}) => Object(K.d)(t.path), Ce.g, Ce.c, (e, t, n, r, o) => {
					const i = s()([...Object(l.a)(e)]),
						a = Ie.x in i && i[Ie.x].toUpperCase(),
						c = "string" == typeof a && a in u.Ub ? u.Ub[a] : u.Vb,
						d = n ? je.e : je.d;
					return {
						filtered: n,
						isModerator: r,
						isModeratorWithPostPerms: o,
						listingKey: Object(p.a)(d, t, i),
						listingName: d,
						sort: t,
						timeSort: c
					}
				}),
				Pe = Object(c.b)(we, (e, t) => ({
					onLoadMorePosts: () => e(m.moreModListingRequested({
						sort: t.match.params.sort
					}))
				}));
			class ke extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Se.f)(this.props.listingKey, this.props.sort, t, e), this.renderEmptySubreddit = () => a.a.createElement(f.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(Ee.a, {
						title: r.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						}).toString()
					}), this.renderContent())
				}
				renderContent() {
					const e = this.props.filtered ? K.b : K.a;
					return a.a.createElement("div", null, this.props.isModeratorWithPostPerms ? a.a.createElement(Te.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(b.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), a.a.createElement(h.a, null), a.a.createElement(g.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: a.a.createElement(_e, null)
					}) : a.a.createElement(y.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = Pe(ke)
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "c", (function() {
				return y
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/selectors/chat.ts"),
				s = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				i = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const c = e => e.appBadges.badges,
				d = Object(r.a)(s.a, c, o.a, (e, t, n) => e ? t && t.directMessages && t.directMessages.count || 0 : n),
				u = Object(r.a)(c, e => e && e.chatRooms && e.chatRooms.count || 0),
				l = Object(r.a)(c, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				p = Object(r.a)(s.a, o.a, d, u, l, (e, t, n, r, o) => {
					if (e) {
						return n + r + o > 0
					}
					return t > 0
				}),
				m = Object(r.a)(c, e => e && e.activityTab && e.activityTab.count || 0),
				f = Object(r.a)(c, e => e && e.messageTab && e.messageTab.count || 0),
				b = Object(r.a)(m, f, (e, t) => e + t),
				h = Object(r.a)(d, f, (e, t) => e + t),
				g = Object(r.a)(d, b, (e, t) => e + t),
				y = Object(r.a)(a.K, s.a, g, h, f, a.F, d, o.a, i.d, (e, t, n, r, o, s, i, a, c) => {
					if (!e) return 0;
					const d = () => {
						return {
							inboxCount: t ? o : s || 0,
							basicChannelCount: t ? i : a || 0
						}
					};
					let u = 0;
					return u = t ? c ? n : r : (() => {
						const {
							inboxCount: e,
							basicChannelCount: t
						} = d();
						return e + t
					})()
				})
		},
		"./src/reddit/selectors/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				s = n("./src/reddit/selectors/moderatorPermissions.ts");
			const i = e => e.chat.unread.count,
				a = Object(r.a)(i, e => e.basicChannelCount),
				c = (Object(r.a)(i, e => e.subredditChannelCount), e => !(e.chat.isInited || e.chat.unread.api.pending)),
				d = (e, t) => {
					const {
						chatConfig: n
					} = o.c;
					return Object(s.a)(n)(e, t)
				}
		},
		"./src/reddit/selectors/experiments/coreStyles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => r.bc.Enabled === Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: r.Vb
			})
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const c = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Xb,
					experimentEligibilitySelector: d
				}), i.a),
				d = e => Object(a.J)(e) || Object(a.K)(e),
				u = Object(r.a)(c, e => e === o.dc.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const c = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.ac,
					experimentEligibilitySelector: d
				}), i.a),
				d = e => Object(a.J)(e) || Object(a.K)(e),
				u = Object(r.a)(c, e => e === o.gc.Redesign),
				l = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Zb,
					experimentEligibilitySelector: d
				}), i.a),
				p = Object(r.a)(l, e => e === o.fc.Enabled),
				m = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Yb,
					experimentEligibilitySelector: d
				}), i.a),
				f = Object(r.a)(m, e => e === o.ec.Enabled),
				b = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.R,
					experimentEligibilitySelector: d
				}), i.a),
				h = Object(r.a)(b, e => e === o.db.NoOverflow),
				g = Object(r.a)(b, e => e === o.db.UndoBar)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.1cbdf7979e1d557c9580.js.map