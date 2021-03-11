// https://www.redditstatic.com/desktop2x/Frontpage.8113c0c036b705b0b52e.js
// Retrieved at 3/11/2021, 11:30:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage", "FrontpageSidebar"], {
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
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== n[t - 1]
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
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, s.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, s.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							n = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(s) {
							var o = s.element,
								i = a(o),
								c = this._rootContainsTarget(o),
								d = s.entry,
								l = t && c && this._computeTargetAndRootIntersection(o, n),
								u = s.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: o,
									boundingClientRect: i,
									rootBounds: n,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, u) && this._queuedEntries.push(u) : d && d.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, s.prototype._computeTargetAndRootIntersection = function(n, r) {
						if ("none" != e.getComputedStyle(n).display) {
							for (var s, o, i, c, l, u, m, p, b = a(n), h = d(n), f = !1; !f;) {
								var g = null,
									y = 1 == h.nodeType ? e.getComputedStyle(h) : {};
								if ("none" == y.display) return;
								if (h == this.root || h == t ? (f = !0, g = r) : h != t.body && h != t.documentElement && "visible" != y.overflow && (g = a(h)), g && (s = g, o = b, i = void 0, c = void 0, l = void 0, u = void 0, m = void 0, p = void 0, i = Math.max(s.top, o.top), c = Math.min(s.bottom, o.bottom), l = Math.max(s.left, o.left), u = Math.min(s.right, o.right), p = c - i, !(b = (m = u - l) >= 0 && p >= 0 && {
										top: i,
										bottom: c,
										left: l,
										right: u,
										width: m,
										height: p
									}))) break;
								h = d(h)
							}
							return b
						}
					}, s.prototype._getRootRect = function() {
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
					}, s.prototype._expandRectByRootMargin = function(e) {
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
					}, s.prototype._hasCrossedThreshold = function(e, t) {
						var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (n !== r)
							for (var s = 0; s < this.thresholds.length; s++) {
								var o = this.thresholds[s];
								if (o == n || o == r || o < n != o < r) return !0
							}
					}, s.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, s.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, s.prototype._registerInstance = function() {
						n.indexOf(this) < 0 && n.push(this)
					}, s.prototype._unregisterInstance = function() {
						var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
					}, e.IntersectionObserver = s, e.IntersectionObserverEntry = r
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
						s = r.width * r.height;
					this.intersectionRatio = n ? s / n : this.isIntersecting ? 1 : 0
				}

				function s(e, t) {
					var n, r, s, o = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, s = null, function() {
						s || (s = setTimeout((function() {
							n(), s = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function o(e, t, n, r) {
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
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/_copyArray.js"),
				o = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return o(s(e), r(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_copyArray.js"),
				s = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return s(r(e))
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/_shuffleSelf.js"),
				o = n("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var n = o(e);
				return s(n, r(t, 0, n.length))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_shuffleSelf.js"),
				s = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return r(s(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					s = e.length,
					o = s - 1;
				for (t = void 0 === t ? s : t; ++n < t;) {
					var i = r(n, o),
						a = e[i];
					e[i] = e[n], e[n] = a
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arraySampleSize.js"),
				s = n("./node_modules/lodash/_baseSampleSize.js"),
				o = n("./node_modules/lodash/isArray.js"),
				i = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return t = (n ? i(e, t, n) : void 0 === t) ? 1 : a(t), (o(e) ? r : s)(e, t)
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayShuffle.js"),
				s = n("./node_modules/lodash/_baseShuffle.js"),
				o = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (o(e) ? r : s)(e)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var n = a,
					d = c(e, a);
				t = s(t), e -= a;
				for (var l = r(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./node_modules/react-helmet/es/Helmet.js": function(e, t, n) {
			"use strict";
			(function(e) {
				var r, s, o, i, a = n("./node_modules/react-helmet/node_modules/prop-types/index.js"),
					c = n.n(a),
					d = n("./node_modules/react-side-effect/lib/index.js"),
					l = n.n(d),
					u = n("./node_modules/react-fast-compare/index.js"),
					m = n.n(u),
					p = n("./node_modules/react/index.js"),
					b = n.n(p),
					h = n("./node_modules/object-assign/index.js"),
					f = n.n(h),
					g = "bodyAttributes",
					y = "htmlAttributes",
					x = "titleAttributes",
					_ = {
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
					v = (Object.keys(_).map((function(e) {
						return _[e]
					})), "charset"),
					k = "cssText",
					O = "href",
					E = "http-equiv",
					j = "innerHTML",
					C = "itemprop",
					N = "name",
					S = "property",
					w = "rel",
					T = "src",
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
					A = "defaultTitle",
					L = "defer",
					F = "encodeSpecialCharacters",
					D = "onChangeClientState",
					R = "titleTemplate",
					B = Object.keys(I).reduce((function(e, t) {
						return e[I[t]] = t, e
					}), {}),
					U = [_.NOSCRIPT, _.SCRIPT, _.STYLE],
					M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					q = function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					},
					W = function() {
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
					H = Object.assign || function(e) {
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
					G = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					},
					K = function(e) {
						var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
						return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
					},
					z = function(e) {
						var t = X(e, _.TITLE),
							n = X(e, R);
						if (n && t) return n.replace(/%s/g, (function() {
							return Array.isArray(t) ? t.join("") : t
						}));
						var r = X(e, A);
						return t || r || void 0
					},
					Q = function(e) {
						return X(e, D) || function() {}
					},
					J = function(e, t) {
						return t.filter((function(t) {
							return void 0 !== t[e]
						})).map((function(t) {
							return t[e]
						})).reduce((function(e, t) {
							return H({}, e, t)
						}), {})
					},
					Y = function(e, t) {
						return t.filter((function(e) {
							return void 0 !== e[_.BASE]
						})).map((function(e) {
							return e[_.BASE]
						})).reverse().reduce((function(t, n) {
							if (!t.length)
								for (var r = Object.keys(n), s = 0; s < r.length; s++) {
									var o = r[s].toLowerCase();
									if (-1 !== e.indexOf(o) && n[o]) return t.concat(n)
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
							var s = {};
							n.filter((function(e) {
								for (var n = void 0, o = Object.keys(e), i = 0; i < o.length; i++) {
									var a = o[i],
										c = a.toLowerCase(); - 1 === t.indexOf(c) || n === w && "canonical" === e[n].toLowerCase() || c === w && "stylesheet" === e[c].toLowerCase() || (n = c), -1 === t.indexOf(a) || a !== j && a !== k && a !== C || (n = a)
								}
								if (!n || !e[n]) return !1;
								var d = e[n].toLowerCase();
								return r[n] || (r[n] = {}), s[n] || (s[n] = {}), !r[n][d] && (s[n][d] = !0, !0)
							})).reverse().forEach((function(t) {
								return e.push(t)
							}));
							for (var o = Object.keys(s), i = 0; i < o.length; i++) {
								var a = o[i],
									c = f()({}, r[a], s[a]);
								r[a] = c
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
					se = null,
					oe = function(e, t) {
						var n = e.baseTag,
							r = e.bodyAttributes,
							s = e.htmlAttributes,
							o = e.linkTags,
							i = e.metaTags,
							a = e.noscriptTags,
							c = e.onChangeClientState,
							d = e.scriptTags,
							l = e.styleTags,
							u = e.title,
							m = e.titleAttributes;
						ce(_.BODY, r), ce(_.HTML, s), ae(u, m);
						var p = {
								baseTag: de(_.BASE, n),
								linkTags: de(_.LINK, o),
								metaTags: de(_.META, i),
								noscriptTags: de(_.NOSCRIPT, a),
								scriptTags: de(_.SCRIPT, d),
								styleTags: de(_.STYLE, l)
							},
							b = {},
							h = {};
						Object.keys(p).forEach((function(e) {
							var t = p[e],
								n = t.newTags,
								r = t.oldTags;
							n.length && (b[e] = n), r.length && (h[e] = p[e].oldTags)
						})), t && t(), c(e, b, h)
					},
					ie = function(e) {
						return Array.isArray(e) ? e.join("") : e
					},
					ae = function(e, t) {
						void 0 !== e && document.title !== e && (document.title = ie(e)), ce(_.TITLE, t)
					},
					ce = function(e, t) {
						var n = document.getElementsByTagName(e)[0];
						if (n) {
							for (var r = n.getAttribute("data-react-helmet"), s = r ? r.split(",") : [], o = [].concat(s), i = Object.keys(t), a = 0; a < i.length; a++) {
								var c = i[a],
									d = t[c] || "";
								n.getAttribute(c) !== d && n.setAttribute(c, d), -1 === s.indexOf(c) && s.push(c);
								var l = o.indexOf(c); - 1 !== l && o.splice(l, 1)
							}
							for (var u = o.length - 1; u >= 0; u--) n.removeAttribute(o[u]);
							s.length === o.length ? n.removeAttribute("data-react-helmet") : n.getAttribute("data-react-helmet") !== i.join(",") && n.setAttribute("data-react-helmet", i.join(","))
						}
					},
					de = function(e, t) {
						var n = document.head || document.querySelector(_.HEAD),
							r = n.querySelectorAll(e + "[data-react-helmet]"),
							s = Array.prototype.slice.call(r),
							o = [],
							i = void 0;
						return t && t.length && t.forEach((function(t) {
							var n = document.createElement(e);
							for (var r in t)
								if (t.hasOwnProperty(r))
									if (r === j) n.innerHTML = t.innerHTML;
									else if (r === k) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
							else {
								var a = void 0 === t[r] ? "" : t[r];
								n.setAttribute(r, a)
							}
							n.setAttribute("data-react-helmet", "true"), s.some((function(e, t) {
								return i = t, n.isEqualNode(e)
							})) ? s.splice(i, 1) : o.push(n)
						})), s.forEach((function(e) {
							return e.parentNode.removeChild(e)
						})), o.forEach((function(e) {
							return n.appendChild(e)
						})), {
							oldTags: s,
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
							return t[I[n] || n] = e[n], t
						}), t)
					},
					me = function(e, t, n) {
						switch (e) {
							case _.TITLE:
								return {
									toComponent: function() {
										return e = t.title, n = t.titleAttributes, (r = {
											key: e
										})["data-react-helmet"] = !0, s = ue(n, r), [b.a.createElement(_.TITLE, s, e)];
										var e, n, r, s
									}, toString: function() {
										return function(e, t, n, r) {
											var s = le(n),
												o = ie(t);
											return s ? "<" + e + ' data-react-helmet="true" ' + s + ">" + K(o, r) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + K(o, r) + "</" + e + ">"
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
												var r, s = ((r = {
													key: n
												})["data-react-helmet"] = !0, r);
												return Object.keys(t).forEach((function(e) {
													var n = I[e] || e;
													if (n === j || n === k) {
														var r = t.innerHTML || t.cssText;
														s.dangerouslySetInnerHTML = {
															__html: r
														}
													} else s[n] = t[e]
												})), b.a.createElement(e, s)
											}))
										}(e, t)
									}, toString: function() {
										return function(e, t, n) {
											return t.reduce((function(t, r) {
												var s = Object.keys(r).filter((function(e) {
														return !(e === j || e === k)
													})).reduce((function(e, t) {
														var s = void 0 === r[t] ? t : t + '="' + K(r[t], n) + '"';
														return e ? e + " " + s : s
													}), ""),
													o = r.innerHTML || r.cssText || "",
													i = -1 === U.indexOf(e);
												return t + "<" + e + ' data-react-helmet="true" ' + s + (i ? "/>" : ">" + o + "</" + e + ">")
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
							s = e.htmlAttributes,
							o = e.linkTags,
							i = e.metaTags,
							a = e.noscriptTags,
							c = e.scriptTags,
							d = e.styleTags,
							l = e.title,
							u = void 0 === l ? "" : l,
							m = e.titleAttributes;
						return {
							base: me(_.BASE, t, r),
							bodyAttributes: me(g, n, r),
							htmlAttributes: me(y, s, r),
							link: me(_.LINK, o, r),
							meta: me(_.META, i, r),
							noscript: me(_.NOSCRIPT, a, r),
							script: me(_.SCRIPT, c, r),
							style: me(_.STYLE, d, r),
							title: me(_.TITLE, {
								title: u,
								titleAttributes: m
							}, r)
						}
					},
					be = l()((function(e) {
						return {
							baseTag: Y([O, P], e),
							bodyAttributes: J(g, e),
							defer: X(e, L),
							encode: X(e, F),
							htmlAttributes: J(y, e),
							linkTags: Z(_.LINK, [w, O], e),
							metaTags: Z(_.META, [N, v, E, S, C], e),
							noscriptTags: Z(_.NOSCRIPT, [j], e),
							onChangeClientState: Q(e),
							scriptTags: Z(_.SCRIPT, [T, j], e),
							styleTags: Z(_.STYLE, [k], e),
							title: z(e),
							titleAttributes: J(x, e)
						}
					}), (function(e) {
						se && ne(se), e.defer ? se = te((function() {
							oe(e, (function() {
								se = null
							}))
						})) : (oe(e), se = null)
					}), pe)((function() {
						return null
					})),
					he = (s = be, i = o = function(e) {
						function t() {
							return q(this, t), G(this, e.apply(this, arguments))
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
								case _.SCRIPT:
								case _.NOSCRIPT:
									return {
										innerHTML: t
									};
								case _.STYLE:
									return {
										cssText: t
									}
							}
							throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
						}, t.prototype.flattenArrayTypeChildren = function(e) {
							var t, n = e.child,
								r = e.arrayTypeChildren,
								s = e.newChildProps,
								o = e.nestedChildren;
							return H({}, r, ((t = {})[n.type] = [].concat(r[n.type] || [], [H({}, s, this.mapNestedChildrenToProps(n, o))]), t))
						}, t.prototype.mapObjectTypeChildren = function(e) {
							var t, n, r = e.child,
								s = e.newProps,
								o = e.newChildProps,
								i = e.nestedChildren;
							switch (r.type) {
								case _.TITLE:
									return H({}, s, ((t = {})[r.type] = i, t.titleAttributes = H({}, o), t));
								case _.BODY:
									return H({}, s, {
										bodyAttributes: H({}, o)
									});
								case _.HTML:
									return H({}, s, {
										htmlAttributes: H({}, o)
									})
							}
							return H({}, s, ((n = {})[r.type] = H({}, o), n))
						}, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
							var n = H({}, t);
							return Object.keys(e).forEach((function(t) {
								var r;
								n = H({}, n, ((r = {})[t] = e[t], r))
							})), n
						}, t.prototype.warnOnInvalidChildren = function(e, t) {
							return !0
						}, t.prototype.mapChildrenToProps = function(e, t) {
							var n = this,
								r = {};
							return b.a.Children.forEach(e, (function(e) {
								if (e && e.props) {
									var s = e.props,
										o = s.children,
										i = function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
											return Object.keys(e).reduce((function(t, n) {
												return t[B[n] || n] = e[n], t
											}), t)
										}(V(s, ["children"]));
									switch (n.warnOnInvalidChildren(e, o), e.type) {
										case _.LINK:
										case _.META:
										case _.NOSCRIPT:
										case _.SCRIPT:
										case _.STYLE:
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
								n = V(e, ["children"]),
								r = H({}, n);
							return t && (r = this.mapChildrenToProps(t, r)), b.a.createElement(s, r)
						}, W(t, null, [{
							key: "canUseDOM",
							set: function(e) {
								s.canUseDOM = e
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
					}, o.peek = s.peek, o.rewind = function() {
						var e = s.rewind();
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
				he.renderStatic = he.rewind, t.a = he
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/react-helmet/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-helmet/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function o() {}
			o.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, o, i) {
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
					checkPropTypes: o,
					resetWarningCache: s
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
			var r, s = n("./node_modules/react/index.js"),
				o = (r = s) && "object" == typeof r && "default" in r ? r.default : r;

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

					function l() {
						c = e(d.map((function(e) {
							return e.props
						}))), u.canUseDOM ? t(c) : n && (c = n(c))
					}
					var u = function(e) {
						var t, n;

						function s() {
							return e.apply(this, arguments) || this
						}
						n = e, (t = s).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, s.peek = function() {
							return c
						}, s.rewind = function() {
							if (s.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
							var e = c;
							return c = void 0, d = [], e
						};
						var i = s.prototype;
						return i.UNSAFE_componentWillMount = function() {
							d.push(this), l()
						}, i.componentDidUpdate = function() {
							l()
						}, i.componentWillUnmount = function() {
							var e = d.indexOf(this);
							d.splice(e, 1), l()
						}, i.render = function() {
							return o.createElement(r, this.props)
						}, s
					}(s.PureComponent);
					return i(u, "displayName", "SideEffect(" + function(e) {
						return e.displayName || e.name || "Component"
					}(r) + ")"), i(u, "canUseDOM", a), u
				}
			}
		},
		"./src/graphql/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"6a0ecb95bab8"}')
		},
		"./src/graphql/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"26ddd553d11e"}')
		},
		"./src/graphql/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"bc611d08f6ef"}')
		},
		"./src/reddit/actions/frontpage/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "frontpagePending", (function() {
				return ie
			})), n.d(t, "frontpageLoaded", (function() {
				return ae
			})), n.d(t, "frontpageFailed", (function() {
				return ce
			})), n.d(t, "frontpageDataRequested", (function() {
				return de
			})), n.d(t, "frontpageRequestedHelper", (function() {
				return le
			})), n.d(t, "frontpageRequested", (function() {
				return me
			})), n.d(t, "frontpageReloaded", (function() {
				return be
			})), n.d(t, "morePostsPending", (function() {
				return he
			})), n.d(t, "morePostsLoaded", (function() {
				return fe
			})), n.d(t, "morePostsFailed", (function() {
				return ge
			})), n.d(t, "morePostsRequested", (function() {
				return ye
			})), n.d(t, "refreshFeed", (function() {
				return xe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				o = n.n(s),
				i = n("./src/lib/getParsedUserAgent/index.ts"),
				a = n("./src/reddit/actions/actionBarAnimation/index.ts"),
				c = n("./src/reddit/actions/focusedVerticals/index.ts"),
				d = n("./src/reddit/components/CountAnimation/helpers.ts"),
				l = n("./src/reddit/constants/experiments.ts"),
				u = n("./src/graphql/operations/Frontpage.json"),
				m = n("./src/lib/base64/index.ts"),
				p = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/makeGqlRequest/index.ts"),
				h = n("./src/lib/performanceTimings/index.tsx"),
				f = n("./src/reddit/constants/graphql.ts"),
				g = n("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				y = n("./src/lib/env/index.ts"),
				x = n("./src/lib/sentry/index.ts"),
				_ = n("./src/reddit/models/Live/index.ts"),
				v = n("./src/reddit/models/Post/index.ts"),
				k = n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				O = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				j = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				C = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				N = n("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				S = n("./src/reddit/selectors/meta.ts"),
				w = n("./src/reddit/selectors/platform.ts"),
				T = n("./src/reddit/selectors/user.ts");
			const P = (e, t) => {
					const {
						after: n,
						dist: r,
						isMobile: s,
						layout: o,
						limit: i,
						sort: a,
						t: c
					} = t, d = Object(T.R)(e) || Object(T.K)(e), l = Object(w.o)(e), u = Object.values(p.w).map(e => e), b = Object(S.b)(e), h = u.includes(b) ? b : p.w.Everywhere, y = {
						adContext: {
							layout: o ? o.toUpperCase() : f.a.Card,
							reddaid: e.user.reddaid,
							distance: r
						},
						forceGeopopular: !0,
						includeCommunityDUs: !1,
						includeFeaturedAnnouncements: !0,
						includeLiveEvents: !0,
						includeIdentity: d && !e.user.account,
						includePostRecommendations: !1,
						includeSubredditQuestions: d,
						recentPostIds: e.posts.recent,
						region: h
					};
					return a && (y.sort = a.toUpperCase()), c && (y.range = c.toUpperCase()), s ? y.pageSize = Object(g.a)(o) : i && (y.pageSize = i), l && l.ad && (y.forceAds = {
						ad: l.ad
					}), n && (y.after = Object(m.a)(n)), y
				},
				I = async (e, t, n, r) => {
					const s = Date.now(),
						o = await ((e, t) => Object(b.a)(e, {
							...u,
							variables: t
						}, {
							traceRequestName: "get_frontpage"
						}))(e, t),
						i = Date.now();
					let a;
					try {
						const e = Date.now();
						a = (({
							trendingSubreddits: e = [],
							identity: t,
							home: n,
							featuredAnnouncements: r,
							recentPosts: s = []
						}) => {
							const o = [],
								i = [];
							let a;
							const c = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {}
								},
								d = e => {
									if (c.posts[e.id]) return e.id;
									const t = Object(O.e)(e);
									c.posts[t.id] = t;
									const {
										crosspostRoot: n
									} = e;
									n && n.type === v.a.Post && n.postInfo && d(n.postInfo);
									let r = t.id;
									if (Object(v.k)(e)) c.profiles[e.profile.id] || (c.profiles[e.profile.id] = Object(j.a)(e.profile));
									else if (Object(v.l)(e)) c.subreddits[e.subreddit.id] || (c.subreddits[e.subreddit.id] = Object(C.a)(e.subreddit)), c.postFlair[e.subreddit.id] || (c.postFlair[e.subreddit.id] = Object(k.a)(e.subreddit));
									else if (Object(v.g)(e)) {
										const n = Object(O.b)(e);
										if (!n) return null;
										r = n, c.posts[n] = {
											...t,
											id: n,
											permalink: `${t.permalink}?instanceId=${encodeURIComponent(n)}`
										}, c.posts[t.id] || (c.posts[t.id] = {
											...t,
											events: []
										}), c.postInstances[e.id] || (c.postInstances[e.id] = []), c.postInstances[e.id].push(n)
									}
									return r
								};
							for (const p of e) {
								const e = Object(C.a)(p);
								c.subreddits[e.id] = e, o.push(e.id)
							}
							for (const {
									node: p
								} of n.elements.edges)
								if (Object(v.j)(p)) {
									const e = d(p);
									e && c.postIds.push(e)
								} else if (Object(_.c)(p) && !a) a = p;
							else {
								const e = `Received unhandled element type when processing frontpage data: "${p.__typename}"`;
								Object(y.b)() || console.warn(e), x.c.captureMessage(e)
							}
							for (const p of s) {
								if (!p) continue;
								const e = d(p);
								e && i.push(e)
							}
							const l = c.postIds.length - 1,
								u = l >= 0 ? c.postIds[l] : "",
								m = n.elements.dist;
							return {
								...c,
								account: t && Object(N.a)(t) || null,
								featuredLiveThread: a,
								announcements: r,
								preferences: t && t.preferences && Object(E.a)(t.preferences, t.interactions) || null,
								...0 !== o.length && {
									trendingSubredditIds: o
								},
								...0 !== i.length && {
									recentPostIds: i
								},
								token: u,
								...null !== m && {
									dist: m
								}
							}
						})(o.body.data);
						const t = Date.now(),
							c = [{
								duration: i - s,
								logKeyType: h.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: h.a.gqlNormalizationTiming
							}];
						Object(h.h)({
							name: p.p.FRONTPAGE,
							isLoggedIn: n,
							metrics: c,
							statsdPathsForExperiments: r
						})
					} catch (c) {}
					return {
						...o,
						body: a
					}
				};
			var A = n("./src/reddit/actions/login.ts"),
				L = n("./src/reddit/actions/toaster.ts"),
				F = n("./src/reddit/constants/page.ts"),
				D = n("./src/reddit/constants/parameters.ts"),
				R = n("./src/reddit/constants/postLayout.ts"),
				B = n("./src/reddit/contexts/PageLayer/index.tsx"),
				U = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				M = n("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				q = n("./src/reddit/models/Toast/index.ts"),
				W = n("./src/reddit/selectors/experiments/index.ts"),
				H = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				V = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				G = n("./src/reddit/selectors/frontpage.ts"),
				K = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				z = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				Q = n("./src/lib/makeActionCreator/index.ts"),
				J = n("./src/lib/makeListingKey/index.ts"),
				Y = n("./src/reddit/actions/ads/index.ts"),
				Z = n("./src/reddit/actions/platform.ts"),
				X = n("./src/reddit/helpers/chooseVariant/index.ts"),
				$ = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				ee = n("./src/reddit/actions/seo/linksModule.ts"),
				te = n("./src/reddit/selectors/seo/linksModule.ts"),
				ne = n("./src/reddit/actions/publicAccessNetwork/api.ts"),
				re = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				se = n("./src/reddit/helpers/filterListingResponse/index.ts"),
				oe = n("./src/reddit/actions/frontpage/constants.ts");
			const ie = Object(Q.a)(oe.c),
				ae = Object(Q.a)(oe.b),
				ce = Object(Q.a)(oe.a),
				de = (e, t) => async (n, s, o) => {
					var c, u;
					const m = s();
					if (m.listings.postOrder.api.pending[e]) return;
					const p = R.e[Object(B.O)(m, {})];
					t.isMobile = Object(i.e)(m.meta.userAgent), t.recentPostIds = m.posts.recent, t.layout = p, t.useMockData = !!m.platform.currentPage && (!!m.platform.currentPage.queryParams.useMockData && Object(z.b)(m)), n(ie({
						key: e
					})); {
						const e = m.platform.currentPage,
							n = e && e.url;
						n && (t.clickUrl = n)
					}
					const b = null === (u = null === (c = Object(w.b)(m)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === u ? void 0 : u.route.chunk,
						f = Object(T.K)(m),
						g = await Object(h.i)(() => I(o.gqlContext(), P(m, t), Object(T.R)(m), t.statsdPathsForExperiments), {
							name: "fetchFrontpageData",
							isLoggedIn: f,
							page: b
						});
					n(Object(Z.l)(g.status));
					const y = `error-${e}`;
					if (g.ok) {
						const t = g.body;
						if (n(ae({
								key: e,
								meta: m.meta,
								...t
							})), Object(V.b)(m)) {
							const {
								postIds: e,
								posts: r
							} = t, s = Object(W.d)(m, {
								experimentName: l.qc
							});
							n(Object(a.a)(Object(d.c)(e, r, null == s ? void 0 : s.variant)))
						}
						n(L.f(y)), n(Object(Y.b)($.a.FRONTPAGE))
					} else n(ce({
						error: g.error,
						key: e,
						...g.body
					})), n(L.e({
						id: y,
						kind: q.b.Error,
						text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: de(e, t)
					}))
				}, le = (e, t) => async (n, r) => {
					const s = r(),
						i = Object(G.a)(s),
						{
							sort: a = i
						} = e.params,
						c = Object(J.a)(F.a, a, e.queryParams),
						d = s.listings.postOrder.ids[c],
						l = s.listings.postOrder.api.error[c],
						u = s.listings.postOrder.api.pending[c],
						m = D.x in e.queryParams && e.queryParams[D.x].toUpperCase() || "",
						b = m in p.Ub && p.Ub[m];
					if (u || d && !l && !t) return void(d && (s.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						n(Object(Y.b)($.a.FRONTPAGE))
					})));
					const h = Object(U.a)(s),
						f = Object(U.b)(h),
						g = [Object(U.c)(h)];
					await n(de(c, {
						...o()(e.queryParams, D.l),
						...o()(e.queryParams, D.k),
						limit: f,
						sort: a,
						statsdPathsForExperiments: g,
						t: Object(M.a)(a, b)
					})), Object(X.c)(s, {
						experimentEligibilitySelector: X.a,
						experimentName: "redesign_aa"
					});
					const y = Object(H.a)(s, {});
					Object(H.e)(y) && n(Object(A.j)())
				}, ue = () => async (e, t) => {
					var n, r;
					const s = t();
					if (Object(te.a)(s)) return;
					const o = null === (r = null === (n = Object(w.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
						i = Object(T.K)(s);
					return Object(h.i)(() => e(Object(ee.d)()), {
						name: "frontpageLinksRequested",
						page: o,
						isLoggedIn: i
					})
				}, me = (e, t) => async n => {
					await Promise.all([n(Object(c.b)()), n(le(e, t)), n(ue()), n(Object(ne.c)(re.R))])
				}, pe = Object(Q.a)(oe.d), be = e => async (t, n) => {
					const r = n(),
						s = r.platform.currentPage.routeMatch.match;
					Object(K.o)(r) || Object(K.t)(r) || (e || t(pe()), await t(me(s, !0)))
				}, he = Object(Q.a)(oe.g), fe = Object(Q.a)(oe.f), ge = Object(Q.a)(oe.e), ye = e => async (t, n, {
					gqlContext: r
				}) => {
					const s = n(),
						c = Object(G.a)(s),
						{
							sort: u = c
						} = e,
						m = s.platform.currentPage ? s.platform.currentPage.queryParams : {},
						b = Object(J.a)(F.a, u, m),
						h = s.listings.postOrder.loadMore[b],
						f = m[D.x] ? m[D.x].toUpperCase() : "",
						g = f in p.Ub && p.Ub[f];
					if (h) {
						const e = s.listings.postOrder.api.pending[b],
							n = s.listings.postOrder.fetchedTokens,
							c = !(!n[b] || !n[b][h.token]);
						if (!e && !c) {
							t(he({
								key: b,
								fetchedToken: h.token
							}));
							const e = !!s.platform.currentPage && !!s.platform.currentPage.queryParams.useMockData,
								n = Object(U.a)(s),
								c = R.a,
								p = [Object(U.c)(n)],
								f = {
									after: h.token,
									dist: h.dist,
									...o()(m, D.l),
									isMobile: Object(i.e)(s.meta.userAgent),
									limit: c,
									sort: u,
									t: Object(M.a)(u, g),
									layout: R.e[Object(B.O)(s, {})],
									useMockData: e
								}; {
								const e = s.platform.lastPage,
									t = e && e.url;
								t && (f.clickUrl = t)
							}
							const y = () => I(r(), P(s, f), Object(T.R)(s), p),
								x = await y(),
								_ = {
									...x.body,
									...Object(se.a)(s, b, x.body)
								};
							if (x.ok) {
								if (t(fe({
										key: b,
										fetchedToken: h.token,
										meta: s.meta,
										..._
									})), Object(V.b)(s)) {
									const {
										postIds: e,
										posts: n
									} = _, r = Object(W.d)(s, {
										experimentName: l.qc
									});
									t(Object(a.a)(Object(d.c)(e, n, null == r ? void 0 : r.variant)))
								}
							} else t(ge({
								key: b,
								error: x.error,
								fetchedToken: h.token,
								..._
							}))
						}
					}
				}, xe = e => async (t, n) => {
					const r = n(),
						s = Object(G.a)(r),
						{
							sort: o = s
						} = e,
						i = r.platform.currentPage ? r.platform.currentPage.queryParams : {},
						a = Object(J.a)(F.a, o, i),
						c = i[D.x] ? i[D.x].toUpperCase() : "",
						d = c in p.Ub && p.Ub[c],
						l = Object(U.a)(r),
						u = Object(U.b)(l);
					await t(de(a, {
						limit: u,
						sort: o,
						t: Object(M.a)(o, d)
					}))
				}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/subreddit/constants.ts"),
				o = n("./src/reddit/constants/subredditLeaderboard.ts"),
				i = n("./src/reddit/endpoints/subreddit/local.ts"),
				a = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				c = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const d = Object(r.a)(s.n),
				l = Object(r.a)(s.m),
				u = Object(r.a)(s.l),
				m = Object(r.a)(s.a),
				p = Object(r.a)(s.b),
				b = Object(r.a)(s.c),
				h = (e, t) => async (n, r, {
					gqlContext: s
				}) => {
					n(d());
					const h = t === o.i ? async function() {
						const t = await Object(i.a)(s(), e);
						if (!t.ok) {
							const e = t.error;
							return n(u({
								error: e
							})), null
						}
						const r = t.body,
							o = r && r.data && r.data.nearbySubreddits;
						return Object(c.a)(o)
					}: async function() {
						const t = await Object(a.a)(s(), e);
						if (!t.ok) {
							const e = t.error;
							return void n(u({
								error: e
							}))
						}
						const r = t.body,
							o = r && r.data && r.data.subredditLeaderboard;
						return Object(c.b)(o)
					}, f = await h();
					if (!f) return;
					const {
						pageInfo: g,
						rankings: y,
						subreddits: x
					} = f;
					n(m({
						subreddits: x
					})), n(p({
						categoryRankingsKey: t,
						rankings: y
					})), n(b({
						categoryRankingsKey: t,
						pageInfo: g
					})), n(l())
				}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/config.ts"),
				c = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/doubleclickForPublishers/index.ts"),
				u = n("./src/lib/intersectionObserver/index.ts"),
				m = n("./src/lib/objectSelector/index.ts"),
				p = n("./src/reddit/helpers/createBannerProperties/index.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/components/BannerAd/index.m.less"),
				y = n.n(g),
				x = n("./src/lib/lessComponent.tsx");
			const _ = x.a.div("Container", y.a),
				v = x.a.div("LoadingHitbox", y.a),
				k = e => setTimeout(() => {
					throw e
				}, 0);
			class O extends s.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1, this.refreshedOnce = !1, this.refreshInterval = null
				}
				componentDidCatch(e) {
					k(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: n,
						sizes: r = []
					} = this.props;
					try {
						return this.frame && l.a(this.frame, {
							id: e,
							slot: t,
							properties: n,
							sizes: r
						})
					} catch (s) {
						k(s)
					}
				}
				destroySlot() {
					try {
						this.refreshInterval && window.clearInterval(this.refreshInterval), this.frame && l.b(this.frame)
					} catch (e) {
						k(e)
					}
				}
				refreshPeriodically() {
					this.props.isRefreshableAd && null != this.props.incrementRefreshCounter && null != this.props.refreshCount && (this.props.refreshCount >= a.a.dfpRefreshSlotIntervalLimit ? (this.refreshInterval && window.clearInterval(this.refreshInterval), this.refreshInterval = null) : (this.refresh(this.props), this.props.incrementRefreshCounter()))
				}
				async componentDidMount() {
					this.props.sendEvent(Object(f.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						k(e)
					}
					this.loader && u.a(this.loader, e => {
						this.isWithinLoadingDistance = !0, this.refreshedOnce || (this.frame && l.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.refresh(this.props), this.refreshedOnce = !0), this.props.isRefreshableAd && (!this.refreshInterval && e.isIntersecting && null != this.props.refreshCount ? this.props.refreshCount < a.a.dfpRefreshSlotIntervalLimit && (this.refreshInterval = window.setInterval(this.refreshPeriodically.bind(this), a.a.dfpRefreshSlotInterval)) : this.refreshInterval && !e.isIntersecting && (window.clearInterval(this.refreshInterval), this.refreshInterval = null))
					})
				}
				componentWillUnmount() {
					this.loader && u.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && l.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				UNSAFE_componentWillReceiveProps(e) {
					if (this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3) return this.refresh(e), void(this.refreshedOnce = !0)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: n
					} = this.props;
					return t ? s.a.createElement(_, {
						"data-slot": t
					}, s.a.createElement(v, {
						key: `${e}-loadinghitbox`,
						innerRef: e => {
							this.loader = e
						}
					}), s.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: `${e}-div`,
						className: n,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : s.a.createElement("div", {
						className: n
					})
				}
			}
			O.defaultProps = {
				sizes: [d.e]
			};
			t.a = Object(o.b)(() => Object(i.c)({
				properties: Object(m.a)((e, t) => {
					const n = e.platform.currentPage;
					if (!n) return {};
					const r = `${e.meta.protocol}://${e.meta.domain}`;
					return Object(p.b)(t.placement, e.user, Object(c.a)(`${r}${n.url}`, n.queryParams), Object(b.A)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const n = e.platform.currentPage;
					return n && n.meta ? l.c(t.listingName, n.meta.name) : ""
				}
			}))(Object(h.c)(O))
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/LRUCache/index.ts");
			class i {
				constructor() {
					this.listenerMap = {}
				}
				_resetListenerMap() {
					this.listenerMap = {}
				}
				_resetKey(e) {
					this.listenerMap[e] = []
				}
				reset(e) {
					e ? this._resetKey(e) : this._resetListenerMap()
				}
				addListeners(e, ...t) {
					this.listenerMap[e] || (this.listenerMap[e] = []), this.listenerMap[e].push(...t)
				}
				removeListeners(e, ...t) {
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const n = t.length,
						r = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !t.includes(e)), this.listenerMap[e].length - r === n
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
			var a = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = n("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/async.tsx"),
				d = n("./src/reddit/constants/page.ts");
			const l = new o.a(50),
				u = e => {
					const {
						numInstance: t,
						layout: n,
						listingKey: r,
						listingPosition: o
					} = e, u = `focused-vertical-recommendation-${t}-${n}-${r}`;
					let m = l.get(u);
					if (m) return m;
					const p = new i;
					return m = {
						estHeight: a.d,
						id: `focused-vertical-recommendation-${t}-${n}-${r}`,
						trackOnEnteredViewport() {
							p.publish(a.b)
						},
						render: () => s.a.createElement(c.a, {
							listingPosition: o,
							numInstance: t,
							listingKey: r,
							listingName: d.b,
							pubsub: p
						})
					}, l.set(u, m), m
				}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-DiscoveryUnit-CommunityCrossPollination-FocusedVerticals-CommunityDescWithPosts").then(n.bind(null, "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx"
				}
			});
			t.a = s
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				a = n.n(i);
			class c extends s.a.Component {
				render() {
					return s.a.createElement("div", {
						className: Object(o.a)(a.a.heroContainer, this.props.className)
					}, s.a.createElement("div", {
						className: Object(o.a)(a.a.header, this.props.headerClassName)
					}, this.props.header), s.a.createElement("div", {
						className: Object(o.a)(this.props.hidePadding ? a.a.bodyHidePadding : a.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, n) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/FakeBannerAd/index.m.less"),
				d = n.n(c),
				l = n("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => i.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", d.a),
				m = l.a.wrapped(e => i.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", d.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = i.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								n = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, n), this.setState({
								sentOncePerRender: !0
							})
						}
					}
				}
				render() {
					const {
						href: e,
						img: t
					} = this.props, {
						sentOncePerRender: n
					} = this.state, o = n ? i.a.createElement(m, {
						src: a.a.assetPath + t
					}) : i.a.createElement(s.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, i.a.createElement(m, {
						src: a.a.assetPath + t
					}));
					return i.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": r.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, i.a.createElement("a", {
						href: a.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, o))
				}
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/live.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointAnnouncementsCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("FeaturedLiveEntrypointAnnouncementsCarousel").then(n.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/AnnouncementsCarousel/index.tsx"
					}
				}),
				d = Object(r.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("FeaturedLiveEntrypointAnnouncement").then(n.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.tsx"
					}
				}),
				l = () => {
					const e = Object(i.e)(a.a, (e, t) => e && t && e[0].id === t[0].id || !1),
						t = Object(i.e)(a.b);
					return t ? o.a.createElement(d, {
						featuredLiveThread: t
					}) : e && e.length ? o.a.createElement(c, {
						announcements: e
					}) : null
				};
			t.a = l
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/random.js"),
				o = n.n(s),
				i = n("./node_modules/lodash/shuffle.js"),
				a = n.n(i),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/reddit/actions/subreddit.ts"),
				p = n("./src/reddit/actions/subreddit/topSubreddits.ts"),
				b = n("./src/reddit/components/IdCard/async.tsx"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				g = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				v = n("./src/reddit/components/PremiumCTA/index.m.less"),
				k = n.n(v);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class E extends d.a.Component {
				render() {
					const {
						className: e,
						isInIcons2020: t,
						onClickPremium: n
					} = this.props;
					return d.a.createElement(f.a, null, d.a.createElement(g.a, {
						className: e,
						contentOnly: !0
					}, d.a.createElement("div", {
						className: k.a.wrapper
					}, t ? d.a.createElement(x.a, {
						name: "premium",
						isFilled: !0,
						className: k.a.icon
					}) : d.a.createElement(_.a, {
						className: k.a.icon
					}), d.a.createElement("div", {
						className: k.a.content
					}, d.a.createElement("div", {
						className: k.a.title
					}, O._("Reddit Premium", null, {
						hk: "39JIKQ"
					})), d.a.createElement("div", {
						className: k.a.description
					}, O._("The best Reddit experience, with monthly Coins", null, {
						hk: "2n1ct3"
					}))), d.a.createElement(y.h, {
						className: k.a.cta,
						onClick: n
					}, O._("Try Now", null, {
						hk: "2HeiOg"
					})))))
				}
			}
			var j = Object(l.b)(void 0, e => ({
					onClickPremium: () => e(Object(h.b)("/premium"))
				}))(E),
				C = n("./src/lib/classNames/index.ts"),
				N = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				S = n("./src/reddit/controls/InternalLink/index.tsx"),
				w = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				T = n("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				P = n.n(T);
			const I = ({
					to: e,
					title: t
				}) => d.a.createElement(N.a, {
					subredditName: t,
					tooltipPosition: ["right", "top"]
				}, d.a.createElement(S.a, {
					className: P.a.Link,
					to: e,
					title: t
				}, t)),
				A = ({
					title: e,
					isOpened: t,
					isExpanded: n,
					children: s,
					onToggle: o,
					onExpand: i
				}) => d.a.createElement("div", {
					className: Object(C.a)(P.a.Section, {
						[P.a.opened]: t,
						[P.a.expanded]: n
					})
				}, d.a.createElement("div", {
					className: P.a.SectionHeader,
					onClick: o
				}, d.a.createElement("div", {
					className: P.a.SectionTitle
				}, e), d.a.createElement(w.a, {
					className: P.a.SectionChevron
				})), d.a.createElement("div", {
					className: P.a.SectionBody
				}, d.a.createElement("div", {
					className: P.a.SectionContent
				}, s), d.a.createElement("div", {
					className: P.a.SectionFooter
				}, d.a.createElement(y.o, {
					className: P.a.SectionButton,
					onClick: i
				}, n ? r.fbt._("Less", null, {
					hk: "PF0lJ"
				}) : r.fbt._("See more", null, {
					hk: "439kAh"
				})))));
			class L extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						openedSection: 0,
						isSectionExpanded: !1
					}, this.onToggle = e => {
						this.setState(({
							openedSection: t
						}) => t === e ? {
							openedSection: -1,
							isSectionExpanded: !1
						} : {
							openedSection: e,
							isSectionExpanded: !1
						})
					}, this.onExpand = () => {
						this.setState(({
							isSectionExpanded: e
						}) => ({
							isSectionExpanded: !e
						}))
					}, this.renderLink = ({
						url: e,
						title: t
					}) => d.a.createElement(I, {
						key: t,
						to: e,
						title: t
					}), this.renderSection = (e, t) => d.a.createElement(A, {
						key: e.title,
						title: e.title,
						isOpened: this.isOpened(t),
						isExpanded: this.isExpanded(t),
						onToggle: () => this.onToggle(t),
						onExpand: this.onExpand
					}, e.links.map(this.renderLink))
				}
				isOpened(e) {
					return this.state.openedSection === e
				}
				isExpanded(e) {
					return this.state.isSectionExpanded && this.isOpened(e)
				}
				render() {
					const {
						className: e,
						links: t
					} = this.props;
					if (t) return d.a.createElement(g.a, {
						className: Object(C.a)(P.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var F = L,
				D = n("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				R = n("./src/reddit/components/SidebarContainer/index.tsx"),
				B = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				U = n("./node_modules/lodash/sampleSize.js"),
				M = n.n(U),
				q = n("./node_modules/request-idle-callback/index.js"),
				W = n("./src/lib/constants/index.ts"),
				H = n("./src/reddit/components/SubredditIcon/index.tsx"),
				V = n("./src/reddit/constants/localStorage.ts"),
				G = n("./src/reddit/contexts/ApiContext.tsx"),
				K = n("./src/reddit/featureFlags/component.tsx"),
				z = n("./src/reddit/helpers/localStorage/index.ts"),
				Q = n("./src/reddit/helpers/name/index.ts"),
				J = n("./src/lib/makeApiRequest/index.ts"),
				Y = n("./src/lib/omitHeaders/index.ts"),
				Z = n("./src/reddit/constants/headers.ts");
			const X = e => Object(J.a)(Object(Y.a)(e, [Z.a]), {
				endpoint: `${e.apiUrl}/api/multi/user/CommunityAdoptionBot/m/adoption_week/`,
				method: W.cb.GET,
				type: "json"
			});
			var $ = n("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = 3, re = 30 * W.db, se = "SubredditAdoption";
			class oe extends d.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = oe.cachedData || Object(z.r)(V.a.SUBREDDITS_FOR_ADOPTION_STORE) || null;
					if (!e || Date.now() - e.fetchedAt > re) {
						const t = await X(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(z.kb)(V.a.SUBREDDITS_FOR_ADOPTION_STORE, e))
					}
					return oe.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(q.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: M()(e, ne)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? d.a.createElement("div", {
						className: ee.a.container
					}, d.a.createElement("div", {
						className: ee.a.main
					}, d.a.createElement("div", {
						className: ee.a.title
					}, d.a.createElement(H.b, {
						className: ee.a.icon
					}), te._("International Subreddit Adoption Week", null, {
						hk: "487Ffc"
					})), d.a.createElement("div", {
						className: ee.a.description
					}, te._("{subreddits list} and more are looking for moderators!", [te._param("subreddits list", d.a.createElement("strong", null, e.map(Q.c).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), d.a.createElement(y.k, {
						className: ee.a.button,
						to: `/r/${se}?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week`
					}, te._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			oe.cachedData = null;
			var ie = Object(K.a)("srAdoptionWeek", Object(G.b)(oe)),
				ae = n("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				ce = n("./src/reddit/actions/post.ts"),
				de = n("./src/reddit/components/MiniPost/index.tsx"),
				le = n("./src/reddit/components/Widgets/Base/index.tsx");
			class ue extends d.a.Component {
				render() {
					return d.a.createElement("div", null, d.a.createElement(le.a, null, this.props.headerText), this.props.posts.map(e => d.a.createElement(de.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var me = ue,
				pe = n("./src/reddit/helpers/overlay/index.ts"),
				be = n("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				he = n.n(be),
				fe = n("./src/lib/lessComponent.tsx");
			const ge = Object(l.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(pe.a)(t.permalink)),
					clearLinks: () => e(Object(ce.o)())
				})),
				ye = fe.a.button("ClearButton", he.a);
			class xe extends d.a.Component {
				render() {
					return d.a.createElement(le.b, null, d.a.createElement(me, {
						className: this.props.className,
						headerText: r.fbt._("Recent posts", null, {
							hk: "1olaOT"
						}),
						posts: this.props.posts
					}), d.a.createElement(ye, {
						onClick: this.props.clearLinks
					}, r.fbt._("Clear", null, {
						hk: "1RMjjy"
					})))
				}
			}
			var _e = ge(xe),
				ve = n("./src/reddit/selectors/posts.ts");
			const ke = Object(u.c)({
				recentPosts: ve.R
			});
			var Oe = Object(l.b)(ke, (e, t) => ({
					openLightbox: t => () => e(Object(pe.a)(t.permalink))
				}))(({
					className: e,
					recentPosts: t
				}) => t && t.length ? d.a.createElement(f.a, null, d.a.createElement(_e, {
					className: e,
					headerText: r.fbt._("Recent posts", null, {
						hk: "1olaOT"
					}),
					posts: t
				})) : null),
				Ee = n("./src/reddit/components/TrackingHelper/index.tsx"),
				je = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				Ce = n("./src/reddit/selectors/subreddit.ts");
			var Ne = Object(l.b)(Object(u.c)({
					communities: Ce.f
				}))(Object(Ee.c)(e => d.a.createElement(je.b, {
					className: e.className,
					communities: e.communities,
					getClickEventFactory: e.getClickEventFactory,
					getSubscribeEventFactoryHandler: e.getSubscribeEventFactoryHandler,
					sendEvent: e.sendEvent,
					title: e.title
				}))),
				Se = n("./src/config.ts"),
				we = n("./src/reddit/controls/Chip/index.tsx"),
				Te = n("./src/reddit/helpers/trackers/widgets.ts"),
				Pe = n("./src/reddit/hooks/useTracking.ts");
			const Ie = [{
				getName: () => r.fbt._("Fashion", null, {
					hk: "4tXmOZ"
				}),
				url: "fashion"
			}, {
				getName: () => r.fbt._("Movies", null, {
					hk: "42bzfq"
				}),
				url: "movie"
			}, {
				getName: () => r.fbt._("Television", null, {
					hk: "4CMqPm"
				}),
				url: "television"
			}, {
				getName: () => r.fbt._("Comedy", null, {
					hk: "1ehWvG"
				}),
				url: "comedy"
			}, {
				getName: () => r.fbt._("Books", null, {
					hk: "13uutx"
				}),
				url: "book"
			}, {
				getName: () => r.fbt._("Gaming", null, {
					hk: "2mozPB"
				}),
				url: "gaming"
			}, {
				getName: () => r.fbt._("Science", null, {
					hk: "4u0516"
				}),
				url: "science"
			}, {
				getName: () => r.fbt._("Animals and Pets", null, {
					hk: "3TIGi8"
				}),
				url: "animals_and_pets"
			}, {
				getName: () => r.fbt._("Nature", null, {
					hk: "WhmJu"
				}),
				url: "nature"
			}, {
				getName: () => r.fbt._("Travel", null, {
					hk: "3PHfih"
				}),
				url: "travel"
			}, {
				getName: () => r.fbt._("Sports", null, {
					hk: "3GJvo1"
				}),
				url: "sports"
			}, {
				getName: () => r.fbt._("Memes", null, {
					hk: "4lL42P"
				}),
				url: "internet_culture_and_memes"
			}, {
				getName: () => r.fbt._("Music", null, {
					hk: "15iqrr"
				}),
				url: "music"
			}, {
				getName: () => r.fbt._("Crafts and DIY", null, {
					hk: "1JGKiO"
				}),
				url: "crafts_and_diy"
			}, {
				getName: () => r.fbt._("Technology", null, {
					hk: "2eXPke"
				}),
				url: "technology"
			}, {
				getName: () => r.fbt._("Art", null, {
					hk: "3cl8al"
				}),
				url: "art"
			}, {
				getName: () => r.fbt._("Hobbies", null, {
					hk: "3uC7Vw"
				}),
				url: "hobby"
			}, {
				getName: () => r.fbt._("Gardening", null, {
					hk: "2Uozgr"
				}),
				url: "gardening"
			}, {
				getName: () => r.fbt._("Art Garfunkel", null, {
					hk: "l1iiQ"
				}),
				url: "art_garfunkel"
			}, {
				getName: () => r.fbt._("Tree Frogs", null, {
					hk: "KVS4d"
				}),
				url: "tree_frog"
			}, {
				getName: () => r.fbt._("Adventure Novels", null, {
					hk: "3vbZt6"
				}),
				url: "adventure_novel"
			}, {
				getName: () => r.fbt._("Learning and Education", null, {
					hk: "3wIdG"
				}),
				url: "learning_and_education"
			}, {
				getName: () => r.fbt._("Family", null, {
					hk: "1GgG8Z"
				}),
				url: "family"
			}, {
				getName: () => r.fbt._("Q&A", null, {
					hk: "4En8Hj"
				}),
				url: "qa"
			}, {
				getName: () => r.fbt._("Health", null, {
					hk: "RF6iN"
				}),
				url: "health"
			}, {
				getName: () => r.fbt._("Fitness", null, {
					hk: "JczBr"
				}),
				url: "fitness"
			}, {
				getName: () => r.fbt._("History", null, {
					hk: "2bULhT"
				}),
				url: "history"
			}, {
				getName: () => r.fbt._("Activism", null, {
					hk: "2PWJIy"
				}),
				url: "activism"
			}, {
				getName: () => r.fbt._("Cars", null, {
					hk: "4dnuOx"
				}),
				url: "cars_and_motor_vehicles"
			}, {
				getName: () => r.fbt._("Beauty and Makeup", null, {
					hk: "4ncOsg"
				}),
				url: "beauty_and_makeup"
			}, {
				getName: () => r.fbt._("Philosophy", null, {
					hk: "MNowu"
				}),
				url: "ethics_and_philosophy"
			}, {
				getName: () => r.fbt._("Food and Drink", null, {
					hk: "19vNV9"
				}),
				url: "food_and_drink"
			}, {
				getName: () => r.fbt._("Religion", null, {
					hk: "4aCX5k"
				}),
				url: "religion"
			}, {
				getName: () => r.fbt._("World News", null, {
					hk: "4lETuR"
				}),
				url: "world_news"
			}, {
				getName: () => r.fbt._("Politics", null, {
					hk: "41ePs3"
				}),
				url: "politics"
			}, {
				getName: () => r.fbt._("Meta", null, {
					hk: "1SKBT1"
				}),
				url: "meta_reddit"
			}, {
				getName: () => r.fbt._("Tabletop RPGs", null, {
					hk: "1zUqUF"
				}),
				url: "tabletop_roleplaying_game"
			}, {
				getName: () => r.fbt._("Marketplace and Deals", null, {
					hk: "1qiYgm"
				}),
				url: "marketplace_and_deals"
			}, {
				getName: () => r.fbt._("Finance and Economics", null, {
					hk: "rZrtS"
				}),
				url: "business_economics_and_finance"
			}, {
				getName: () => r.fbt._("Galaxy Quest", null, {
					hk: "1XkOK1"
				}),
				url: "galaxy_quest"
			}, {
				getName: () => r.fbt._("Math", null, {
					hk: "17VRuh"
				}),
				url: "mathematics"
			}, {
				getName: () => r.fbt._("Crypto", null, {
					hk: "1KATZ1"
				}),
				url: "cryptocurrency"
			}];
			var Ae = n("./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less"),
				Le = n.n(Ae);
			const Fe = () => {
					const e = `${Se.a.assetPath}/img/banner/banner-medium@2x.png`,
						t = r.fbt._("Find Your Next Community!", null, {
							hk: "4tZ6vB"
						}),
						n = {
							backgroundImage: `url(${e})`
						};
					return d.a.createElement("div", {
						className: Le.a.banner,
						style: n
					}, d.a.createElement("h2", {
						className: Le.a.bannerText
					}, t))
				},
				De = e => `/t/${e}?activeTab=communities`,
				Re = e => {
					const t = e.topic.getName();
					return d.a.createElement("div", {
						className: Le.a.itemContainer
					}, d.a.createElement(we.a, {
						to: De(e.topic.url),
						onClick: () => e.sendEvent(Object(Te.c)(t))
					}, t))
				};
			var Be = d.a.memo(e => {
					const t = Object(Pe.a)();
					Object(c.useEffect)(() => t(Object(Te.d)()), []);
					const n = Ie.map(e => ({
						value: e,
						sort: Math.random()
					})).sort((e, t) => e.sort - t.sort).map(e => e.value).slice(0, 10);
					return d.a.createElement(g.a, {
						className: e.className,
						noGradient: !0,
						styles: e.widget && e.widget.styles,
						widgetKind: e.widget && e.widget.kind
					}, d.a.createElement(Fe, null), d.a.createElement("div", {
						className: Le.a.container
					}, n.map(e => d.a.createElement(Re, {
						key: e.url,
						topic: e,
						sendEvent: t
					}))))
				}),
				Ue = n("./src/reddit/constants/experiments.ts"),
				Me = n("./src/reddit/constants/subredditLeaderboard.ts"),
				qe = n("./src/reddit/constants/tracking.ts"),
				We = n("./src/reddit/selectors/telemetry.ts"),
				He = n("./src/reddit/selectors/widgets.ts"),
				Ve = n("./src/telemetry/models/Subreddit.ts");
			const Ge = e => t => n => ({
					...We.defaults(n),
					...Object(He.b)(n, e),
					source: "trending_community_card",
					action: qe.c.CLICK,
					noun: Object(Ve.getSubscribeEventNoun)(e.type, t)
				}),
				Ke = e => t => ({
					...We.defaults(t),
					...Object(He.b)(t, e),
					source: "trending_community_card",
					action: qe.c.CLICK,
					noun: "community"
				});
			var ze = n("./src/reddit/models/GoodContent/index.ts"),
				Qe = n("./src/reddit/helpers/chooseVariant/index.ts");

			function Je(e) {
				return Object(Qe.c)(e, {
					experimentEligibilitySelector: Qe.a,
					experimentName: Ue.q
				})
			}
			var Ye = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				Ze = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Xe = n("./src/reddit/selectors/user.ts");
			var $e = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				et = n("./src/reddit/selectors/seo/linksModule.ts"),
				tt = n("./src/reddit/selectors/subredditLeaderboard.ts");
			n("./src/reddit/components/TopSubredditsWidget/index.tsx"), n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx");
			var nt = n("./src/reddit/helpers/createBannerProperties/index.ts");
			const rt = "c1020",
				st = "videos",
				ot = Object(u.c)({
					isMod: Xe.L,
					isLoggedIn: Xe.J,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations,
					trendingSubredditIds: Ce.cb,
					currentUser: Xe.j,
					frontpageLinks: et.b,
					isOver18: Xe.cb,
					isUISimplificationAllItemsVariant: $e.b,
					isInBFFSLeaderboardExperiment: function(e) {
						return Je(e) === Ue.p.RotateEven
					},
					isInIcons2020: Ye.a,
					bffsLeaderboardVariant: Je,
					inRpanTopVideoEntrypointExperiment: Ze.e,
					rankings: e => Object(Ce.O)(e, rt),
					shouldShowTopicsWidget: e => {
						const t = Object(Ze.e)(e),
							n = !!Object(Ce.O)(e, rt);
						return (!t || !n) && (!Object($e.b)(e) && function(e) {
							return Object(Qe.c)(e, {
								experimentEligibilitySelector: Xe.K,
								experimentName: Ue.U
							}) === Ue.Cb
						}(e))
					}
				}),
				it = e => !((e.inRpanTopVideoEntrypointExperiment ? !e.rankings : !e.trendingSubredditIds.length) || e.currentUser && !e.currentUser.showTrending || e.isUISimplificationAllItemsVariant || e.shouldShowTopicsWidget),
				at = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				ct = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold)),
				dt = e => {
					const {
						bffsLeaderboardVariant: t,
						isInBFFSLeaderboardExperiment: n,
						shouldShowLocalRecommendations: r
					} = e;
					let s, i, c, d, l;
					n && t === Ue.p.RotateEven ? (s = Me.q, i = Me.k, c = Me.o, d = Me.a) : (s = Me.p, i = Me.h, c = Me.n, d = []), l = [s, ...d, ...c], r && l.unshift(i);
					const u = l[o()(l.length - 1)];
					l = [], u.id !== s.id && l.push(s), r && u.id !== i.id && l.push(i);
					let m = [...d, ...c];
					return m = m.filter(e => e.id !== u.id), l = [...l, ...a()(m).slice(0, 4 - l.length)], {
						category: u,
						categories: l
					}
				};
			class lt extends d.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					}, this.getVideoSubredditIds = () => {
						if (!this.props.rankings) return;
						let e = [];
						const t = {
							t5_2fqotw: "RedditMasterClasses",
							t5_2ry83: "whereintheworld",
							t5_2dptgf: "TheYouShow",
							t5_2dptrd: "RedditSessions",
							t5_2r7gr: "talentShow",
							t5_2dpthm: "RedditInTheKitchen",
							t5_2dpu97: "GlamourSchool",
							t5_2q0682: "readwithme",
							t5_2dptqa: "TheGamerLounge",
							t5_32g3v: "AnimalsOnReddit",
							t5_2vh7th: "tabletoplive",
							t5_2tmxc: "shortcircuit",
							t5_2dpsxy: "TheArtistStudio"
						};
						if (!(e = this.props.rankings.slice(0, 5).map(e => e.id)).some(e => -1 !== Object.keys(t).indexOf(e))) {
							const n = Object.keys(t)[o()(Object.keys(t).length - 1)];
							e.push(n), this.props.subredditAboutRequested(t[n])
						}
						return e
					};
					const {
						category: t,
						categories: n
					} = dt(e);
					!e.rankings && e.inRpanTopVideoEntrypointExperiment && e.fetchTopSubreddits(), this.state = {
						isMounted: !1,
						category: t,
						categories: n
					}
				}
				render() {
					let e = 0;
					const {
						className: t,
						frontpageLinks: n,
						isLoggedIn: s,
						isOver18: o,
						listingName: i,
						trendingSubredditIds: a,
						isUISimplificationAllItemsVariant: c,
						inRpanTopVideoEntrypointExperiment: l,
						isInIcons2020: u,
						shouldShowTopicsWidget: m
					} = this.props, {
						category: p,
						categories: h
					} = this.state, g = !c, y = !c, x = this.getVideoSubredditIds();
					return d.a.createElement(R.a, {
						className: t
					}, g && d.a.createElement(ae.a, {
						categories: h,
						category: p,
						first: 5,
						isOver18: o,
						shouldDisplayDelta: !this.props.isMod && p.id !== Me.i,
						to: p.path
					}), d.a.createElement(D.a, {
						placement: W.c.ABOVE_THE_FOLD,
						listingName: i,
						removeSidebarSpacer: !g,
						position: nt.a.FIRST,
						sizes: W.h,
						placementIndex: e++
					}), ct(this.props) && d.a.createElement(j, {
						isInIcons2020: u
					}), it(this.props) && d.a.createElement(f.a, null, d.a.createElement(Ne, {
						getClickEventFactory: Ke,
						getSubscribeEventFactoryHandler: Ge,
						subredditIds: l && x ? x : a,
						title: l ? r.fbt._("Top Video Communities", null, {
							hk: "SSdYX"
						}) : r.fbt._("Trending Communities", null, {
							hk: "2WTgEw"
						})
					})), m && d.a.createElement(f.a, null, d.a.createElement(Be, null)), s && d.a.createElement(f.a, null, d.a.createElement(b.a, {
						listingName: i
					})), at(this.props) && d.a.createElement(Oe, null), n && y && d.a.createElement(f.a, null, d.a.createElement(F, {
						links: n
					})), d.a.createElement(B.a, {
						adComponent: d.a.createElement(D.a, {
							placement: W.c.BELOW_THE_FOLD,
							listingName: i,
							position: nt.a.BOTTOM,
							sizes: W.n,
							placementIndex: e++
						})
					}, s && d.a.createElement(ie, null)))
				}
			}
			const ut = Object(l.b)(ot, e => ({
				fetchTopSubreddits: () => {
					const t = {
							categoryId: rt,
							filter: {
								includeUnrated: !1,
								isBlacklistedSubredditsExcluded: !0,
								isNsfwExcluded: !0,
								isDiscoverable: !0,
								maxRating: ze.b.PG13
							},
							isOnlyModIncluded: !1
						},
						n = Object(tt.d)(rt, st);
					e(Object(p.a)(t, n))
				},
				subredditAboutRequested: t => e(Object(m.t)(t))
			}));
			t.default = ut(lt)
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-InFeedPostCreation").then(n.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/MiniPost/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3fWuhJ6bVet7XJT5A0mZM2",
				title: "_2uR1aBUWmKIo8Fcg-D7bPi",
				crowdControlPreview: "_1R-_n2amB7t3lRrMWDZFYz",
				thumbnailContainer: "tN3XUE_42h_qcAw7KSnlh",
				postDetails: "_2mURCICbBWv1kFMX2GPzA_",
				SubredditLink: "_3g8BYpbdZDmGNwV4UIA3GI",
				subredditLink: "_3g8BYpbdZDmGNwV4UIA3GI",
				subAndMeta: "_3GMQrxl5pvXDUEFvUjr9Qh",
				isSingleLine: "dZATEZTPQCHPtvhujPV0L",
				separator: "_2q6RJ3jSwGkeuWcg6aU-nY",
				meta: "KoclPkialOte6pOEsb4vx"
			}
		},
		"./src/reddit/components/MiniPost/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/lib/timeAgo/index.ts"),
				u = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = n("./src/reddit/components/Thumbnail/index.tsx"),
				p = n("./src/reddit/helpers/overlay/index.ts"),
				b = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/components/MiniPost/index.m.less"),
				g = n.n(f);
			const y = Object(a.a)(e => e, b.I, b.d, (e, t, n) => {
					return {
						crosspost: n,
						post: t,
						subredditOrProfile: Object(h.L)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				x = Object(i.b)(y, (e, t) => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}));
			class _ extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							containerOnClick: e,
							openLightbox: t,
							openLinksNewTab: n,
							post: r
						} = this.props;
						n ? window.open(r.permalink) : t(r), e && e()
					}, this.onClickSubreddit = e => {
						const {
							openLinksNewTab: t,
							subredditOnClick: n,
							subredditOrProfile: r
						} = this.props;
						e.stopPropagation(), t && r && (e.preventDefault(), window.open(r.url)), n && n()
					}, this.onClickThumbnail = e => {
						const {
							thumbnailOnClick: t
						} = this.props;
						e.stopPropagation(), t && t()
					}
				}
				render() {
					const {
						className: e,
						post: t,
						showSubreddit: n = !1,
						subredditOrProfile: s,
						subredditSameLine: i,
						crowdControlPreview: a
					} = this.props;
					return o.a.createElement("div", {
						className: Object(c.a)(g.a.container, e, a ? g.a.crowdControlPreview : null),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: g.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(m.a, {
						post: t
					})), o.a.createElement("div", {
						className: g.a.postDetails
					}, o.a.createElement("p", {
						className: g.a.title,
						title: t.title
					}, t.title), o.a.createElement("div", {
						className: Object(c.a)(g.a.subAndMeta, {
							[g.a.isSingleLine]: i
						})
					}, n && s && s.displayText && o.a.createElement(u.a, {
						className: g.a.SubredditLink,
						to: s.url,
						onClick: this.onClickSubreddit
					}, s.displayText), i && o.a.createElement("div", {
						className: g.a.separator
					}), !a && o.a.createElement("div", null, o.a.createElement("span", {
						className: g.a.meta
					}, r.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [r.fbt._plural(t.score, "number", Object(d.b)(t.score))], {
						hk: "1Jm6il"
					})), o.a.createElement("span", {
						className: g.a.meta
					}, r.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [r.fbt._plural(t.numComments, "number", Object(d.b)(t.numComments))], {
						hk: "2jjoyt"
					})), o.a.createElement("span", {
						className: g.a.meta
					}, Object(l.a)(t.created / 1e3, !0))))))
				}
			}
			t.a = x(_)
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: r,
					onClick: i,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return s.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, n),
					style: Object(a.c)(r, e),
					onClick: i
				}, p), t)
			})
		},
		"./src/reddit/components/PremiumCTA/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_1b1Jalg2nxA_Z-BjKXRfAV",
				icon: "_3-m5rOa3loUClNwpCv1uWU",
				content: "_1LofvgShcWAGgRJOa2IRlf",
				title: "_17PUokUAvL3YJx6EyPdD9d",
				description: "rn1KP8t9htFxyeAF8fdJ4",
				cta: "_1Cg0rke34k99vLcCo_aCP1"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/LRUCache/index.ts"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				d = n("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				h = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				className: e
			}) => s.a.createElement("div", {
				className: Object(a.a)(e, h.a.container, h.a.placeholder, h.a.large, p.a.largeAndMediumPostStyles)
			}, s.a.createElement(l.a, {
				className: h.a.backgroundWrapper
			}, s.a.createElement("div", {
				className: h.a.titleAndDescriptionContainer
			}, s.a.createElement("h3", {
				className: h.a.title
			}, f._("Top broadcast", null, {
				hk: "HADCh"
			}))), s.a.createElement("div", {
				className: h.a.body
			}, s.a.createElement("div", {
				className: h.a.previewContainer
			}, s.a.createElement("div", {
				className: Object(a.a)(h.a.thumbnail, h.a.loading)
			})))));
			var y = ({
				className: e,
				layout: t
			}) => t === u.g.Classic ? s.a.createElement(c.b, {
				className: Object(a.a)(e, h.a.classicPostPlaceholder),
				isLoading: !0
			}) : t === u.g.Compact ? s.a.createElement(d.a, {
				className: Object(a.a)(e, h.a.compactPostPlaceholder),
				isLoading: !0
			}) : s.a.createElement(g, {
				className: e
			});
			const x = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: ({
					className: e,
					layout: t
				}) => s.a.createElement(y, {
					className: e,
					layout: t
				}),
				getComponent: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("RpanListingUnit")]).then(n.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var _ = e => s.a.createElement(x, e),
				v = n("./src/reddit/helpers/trackers/rpan.ts");
			const k = e => e === u.g.Classic ? 88 : e === u.g.Compact ? 42 : 340,
				O = new o.a(20),
				E = e => {
					const t = `rpan-${e.layout}-${e.listingKey}`,
						n = O.get(t);
					if (n) return n;
					const r = j(e.desiredIndex, e.children),
						o = {
							child: {
								id: t,
								estHeight: k(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(v.G)()),
								render: ({
									className: t
								}) => s.a.createElement(_, {
									className: t,
									layout: e.layout,
									listingName: e.listingName
								})
							},
							idx: r
						};
					return O.set(t, o), o
				},
				j = (e, t) => {
					const n = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; n.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				header: "_25K6Ujp7eqOAHEdYuHm3pY",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				overflowItemText: "fxp6qlPWJ76riedygoUS7",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				videoIcon: "_1uKWYPTIE0QxbdTkW9En19",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				bigExpando: "qecjZnTfgEjCTlYKgqrl0",
				bigExpandoIcon: "_8ViGpsDZkJ4aNM6aVyan0",
				previewContainer: "_1N144m-88joWY3ZwzWRjrl",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				loading: "_3Hsr_kP1TY2ld8xQG-XqAL",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				broadcastTitle: "_2PtVDFQbkz3Sh1f_ppShzf",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7",
				upvoteAnimation: "_1MEw3CaNaAuwCohG-n7UPc",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD"
			}
		},
		"./src/reddit/components/SEOSidebarLinks/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "_2P7APx0UZzT7G61J3taHT1",
				titleFontH2: "RwS_Oc-tCzFs9JqbyJt7y",
				titleFontH3: "_3efLiav9fPpnRcDjg9Gwg",
				titleFontH4: "_3hvxMzKYjdkuu40CSxKjAu",
				titleFontH5: "_3WpmjCstbhZ90uNfolTEpK",
				titleFontH6: "_2aXJlh_wJ7xa9WJa1Ffc1Q",
				metadataFont: "_2uQdSEwqQ-dgsfQ5DUyRNy",
				flairFont: "_2_0QEUNGrG4wZY0ofsNi1h",
				labelsFont: "Ak2Fs_jf7fnNIs6Xajto6",
				actionFont: "_2yOueT_7JFLAAiCNPTQjfk",
				smallButtonFont: "_1j9G7RzwWzCEXRfBup8qCr",
				largeButtonFont: "_21SizvLABo7WuGdVrlWB3E",
				tabFont: "_1nbCityPGTvrop_yKHkhp_",
				strongTextFont: "_1rRA9Vf6uOXrFjUcJJcmOL",
				buttonFontXS: "_3RerbBqI5ohWwQKBd8_-Ku",
				buttonFontXs: "_3RerbBqI5ohWwQKBd8_-Ku",
				buttonFontS: "_2wKWEQ-jbYxfuGUxCG8h09",
				buttonFontM: "gDNmuWsQQtIKbOsMxXWEo",
				buttonFontL: "_16efVdvn26v_1Oo2lbTnwG",
				buttonFontXL: "_2YqGgd9hmqUohHovWDx40Q",
				buttonFontXl: "_2YqGgd9hmqUohHovWDx40Q",
				bodyFontH1: "_1J85q0678QbXBAlUsUtzth",
				bodyFontH2: "-XsUf9E0eP4ePrgs3Yf81",
				bodyFontH3: "_22-90BPqugW8lJQPIjwpNd",
				bodyFontH4: "_2DU9sYq9m0gC27PMeSCeRK",
				bodyFontH5: "_2F6ZjEPUyXIS06JZc1JsHQ",
				bodyFontH6: "XnmQfbUmMrXwd2eQYT_6a",
				bodyFont: "_3Jp6jLYRWtZI2hmJA9eurC",
				bodyFontSmall: "_2eo_q38bKZsZzaxO_TC6ni",
				bodyFontMono: "_24Qs54CbgE_djlerYbZ1zl",
				Link: "_13rO9T2auFedwF7O7V72O6",
				link: "_13rO9T2auFedwF7O7V72O6",
				SectionHeader: "_2EUcwf_tbEz93vN5QWYP7O",
				sectionHeader: "_2EUcwf_tbEz93vN5QWYP7O",
				SectionTitle: "_2dowUVQFB6EDFymNiITj65",
				sectionTitle: "_2dowUVQFB6EDFymNiITj65",
				SectionChevron: "_2GbTYUvknqxuAWQI2Gnu2g",
				sectionChevron: "_2GbTYUvknqxuAWQI2Gnu2g",
				SectionBody: "_1dqZsiXZltYxbQcUoK1Z-Q",
				sectionBody: "_1dqZsiXZltYxbQcUoK1Z-Q",
				SectionContent: "_2jmnnhuP2AL87nZM3exPTR",
				sectionContent: "_2jmnnhuP2AL87nZM3exPTR",
				SectionFooter: "_3ZTxrJ36ejYA39ZNctzfrx",
				sectionFooter: "_3ZTxrJ36ejYA39ZNctzfrx",
				SectionButton: "dRr-wxcoswiadnFKXkm8G",
				sectionButton: "dRr-wxcoswiadnFKXkm8G",
				Section: "_2pK6e4VBPMQxDuw2kXyIIb",
				section: "_2pK6e4VBPMQxDuw2kXyIIb",
				opened: "_3U7bizV5Ex3dWwKwNODf9R",
				expanded: "_1Rwg1da6VQnIycp8lVYXom",
				Widget: "_3Fe8ia7wR8lbatMEJ6BchP",
				widget: "_3Fe8ia7wR8lbatMEJ6BchP"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				o = n.n(s);
			t.a = r.a.div("header", o.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = n.n(a);

			function d(e) {
				const {
					className: t,
					id: n,
					layoutBodyClassName: r,
					showCardView: a
				} = e, d = {
					[c.a["m-card"]]: a
				};
				return s.a.createElement("div", {
					id: n,
					className: Object(o.a)(c.a.container, d, t)
				}, s.a.createElement(i.a, {
					className: c.a.layout,
					bodyClassName: Object(o.a)(c.a.layoutBody, d, r),
					header: e.header,
					headerClassName: Object(o.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				container: "_3_c5cqV3WsdQo95Ql4El73",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = s.a.createElement(i.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => s.a.createElement(a.a, {
				className: e.className,
				header: m,
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => s.a.createElement("div", {
				className: l.a.post,
				key: `placeholder-post-${t}`
			}, s.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.one, p)
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.two, p)
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.icon, p)
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.name, p)
			}))))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, n) {
			e.exports = {
				sideBarStyle: "wYQbYt3FNY5w9oBiYrHzv",
				BannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				bannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1",
				SidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9",
				sidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n.n(r),
				o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = n("./node_modules/lodash/random.js"),
				a = n.n(i),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/config.ts"),
				p = n("./src/reddit/components/BannerAd/index.tsx"),
				b = n("./src/reddit/components/FakeBannerAd/index.tsx"),
				h = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = n("./src/reddit/helpers/adCount/index.ts"),
				x = n("./src/reddit/helpers/trackers/ads.ts"),
				_ = n("./src/reddit/models/Media/index.ts"),
				v = n("./src/reddit/selectors/platform.ts"),
				k = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				O = n.n(k),
				E = n("./src/lib/constants/index.ts"),
				j = n("./src/lib/lessComponent.tsx");
			const C = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("reddit-components-SidebarNativeAd")]).then(n.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				N = Object(u.c)({
					post: (e, t) => {
						const {
							placement: n,
							placementIndex: r
						} = t, s = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(y.a)(n, s, r)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch,
					isSubredditOrCommentsPage: e => Object(v.p)(e) === E.Db.SUBREDDIT || Object(v.p)(e) === E.Db.COMMENTS
				}),
				S = Object(l.b)(N),
				w = j.a.wrapped(p.a, "BannerAd", O.a),
				T = j.a.wrapped(g.a, "ThemedWidget", O.a),
				P = j.a.div("SidebarAdPlaceholder", O.a),
				I = e => !(window.aax && window.aax.getAbpStatus && window.aax.getAbpStatus()) && e,
				A = (e, t, n) => {
					let r = "";
					return t && (r += "overlay-"), r += `sidebar-${e}`, null != n && (r += `-${n}`), r
				},
				L = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(_.F)(e.media) && e.media.content)),
				F = e => !!e && e.isBlank,
				D = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				R = Object(f.c)(class extends d.a.Component {
					shouldComponentUpdate(e, t) {
						const {
							className: n,
							redditStyle: r
						} = this.props;
						return n !== e.className || r !== e.redditStyle
					}
					trackViewability(e, t, n) {
						Math.random() <= m.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(x.d)(e, t, n))
					}
					render() {
						const e = a()(0, D.length - 1),
							{
								img: t,
								href: n
							} = D[e],
							{
								className: r,
								placement: s,
								redditStyle: o,
								removeSidebarSpacer: i
							} = this.props,
							c = i ? d.a.Fragment : h.a;
						return d.a.createElement(c, null, d.a.createElement(T, {
							className: r,
							contentOnly: !0,
							redditStyle: o
						}, d.a.createElement(b.a, {
							img: t,
							href: n,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, s)
						})))
					}
				});
			class B extends d.a.Component {
				constructor(e) {
					super(e), this.incrementRefreshCounter = this.incrementRefreshCounter.bind(this), this.state = {
						refreshCount: 0
					}
				}
				incrementRefreshCounter() {
					this.setState(e => ({
						refreshCount: e.refreshCount + 1
					}))
				}
				render() {
					const {
						className: e,
						pending: t,
						post: n,
						isOverlay: s,
						placementIndex: o,
						refreshKey: i,
						listingName: a,
						placement: c,
						sizes: l,
						position: u,
						redditStyle: m,
						forcePlaceholder: p,
						forceHouseAd: b,
						waitForProgrammatic: f,
						isSubredditOrCommentsPage: g,
						removeSidebarSpacer: y
					} = this.props, x = r.fbt._("advertisement", null, {
						hk: "35HaIb"
					}), _ = y ? d.a.Fragment : h.a;
					return p || t || !L(n) && f ? d.a.createElement(_, null, d.a.createElement(T, {
						className: e,
						contentOnly: !0,
						redditStyle: m
					}, d.a.createElement(P, {
						"data-before-content": x
					}))) : b ? d.a.createElement(R, {
						className: e,
						redditStyle: m,
						placement: c,
						removeSidebarSpacer: y
					}) : L(n) ? d.a.createElement(_, null, d.a.createElement(C, {
						post: n,
						refreshKey: i,
						listingName: a,
						placement: c,
						placementIndex: o
					})) : d.a.createElement(_, null, d.a.createElement(T, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: m
					}, F(n) && d.a.createElement(C, {
						post: n,
						refreshKey: i,
						listingName: a,
						placement: c,
						placementIndex: o
					}), d.a.createElement(w, {
						id: A(c, s, o),
						isRefreshableAd: I(g),
						incrementRefreshCounter: this.incrementRefreshCounter,
						sizes: l,
						placement: c,
						listingName: a,
						refreshKey: i,
						refreshCount: this.state.refreshCount,
						position: u,
						dataBeforeContent: x
					})))
				}
			}
			t.a = S(B)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/selectors/brandSafety.ts"),
				c = n("./src/reddit/selectors/experiments/adsCardViewHoldout.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(i.t)();
			t.a = m(Object(o.b)((e, {
				listingName: t,
				pageLayer: n
			}) => {
				const r = Object(a.b)(e, {
						listingName: t,
						pageLayer: n
					}),
					s = Object(d.B)(e) || Object(c.a)(e),
					o = Object(a.e)(e);
				return {
					canShowAd: r && !s,
					forcePlaceholder: !Object(a.c)(e),
					isAdsDisabled: s,
					viewIsUnsafe: o
				}
			})(({
				canShowAd: e,
				isAdsDisabled: t,
				viewIsUnsafe: n,
				pageLayer: r,
				...o
			}) => !t && e && r ? s.a.createElement(l.a, u({
				forceHouseAd: n
			}, o)) : null))
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
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", s.a)
		},
		"./src/reddit/components/SubredditAdoptionWidget/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_32gg9k8mE7XAO33Q0lKRlU",
				main: "_39QHoSGxWS9OKtoNU9jEE_",
				title: "_27oRfx5g78dJfAJl_8Npk3",
				icon: "_2t2xQcM_0PlqIR0rm5VRfJ",
				description: "_2HAYUIdDUchBheTwqmKIcq",
				button: "_3GA-tK1xBiDrxLJRZR3IIB"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				s = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				o = n.n(s);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(r.a, "SubredditName", o.a);
			t.a = i
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = ({
					border: e,
					small: t,
					...n
				}) => o.a.createElement(i.q, u({}, n, {
					priority: e ? i.b.Primary : i.b.Plain,
					className: Object(l.a)(n.className, d.a.BaseButton),
					size: t ? i.c.S : i.c.M
				})),
				p = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				b = ({
					buttonType: e,
					border: t,
					small: n,
					...r
				}) => o.a.createElement(i.q, u({}, r, {
					priority: t ? i.b.Secondary : i.b.Plain,
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: n ? i.c.S : i.c.M,
					text: p(e)
				}));
			class h extends o.a.Component {
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
						id: n,
						small: r = !1
					} = this.props, s = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: r
					};
					return this.props.userIsSubscriber ? o.a.createElement(b, u({}, s, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(m, u({}, s, {
						id: n
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				o = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => o[s({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(r.c)(o.a))
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-TabBadger-Component").then(n.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TabBadger/Loader.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const u = Object(i.c)({
					postCount: l.N,
					previousPageIsOverlay: d.n,
					tabBadged: e => e.tabBadged
				}),
				m = Object(o.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : s.a.createElement(a.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/constants/subredditLeaderboard.ts"),
				c = n("./src/reddit/contexts/ApiContext.tsx"),
				d = n("./src/reddit/endpoints/subreddit/local.ts"),
				l = n("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				m = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				p = n("./src/reddit/models/GoodContent/index.ts");

			function b() {
				return (b = Object.assign || function(e) {
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
			class f extends s.a.Component {
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
					if (n !== a.i)(n || n === a.e) && h(this.props.gqlContext(), {
						categoryId: n,
						filter: p.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							n = e && e.subreddits,
							r = this.props.category && this.props.category.name || a.b;
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
							const n = await Object(d.a)(e, t);
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
							[a.j]: {
								rankings: n,
								subreddits: r
							}
						}))
					}
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, n = t || a.b, r = this.state[n], i = r ? r.rankings : [], c = r ? r.subreddits : {}, d = i && i[0] && i[0].id, l = c && c[d], u = !(l && l.isNSFW) || this.props.isOver18;
					return s.a.createElement(o.b, b({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: i,
						shouldDisplayBannerImg: u,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: c
					}, this.props))
				}
			}
			t.a = Object(c.b)(Object(i.c)(f))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/icons/svgs/Triangle/index.tsx"),
				b = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				h = n.n(b);
			const f = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(l.b, {
					className: h.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), o.a.createElement("span", {
					className: h.a.subredditDetailsContainer
				}, e.large ? o.a.createElement(d.a, {
					subredditName: e.subreddit.name
				}, o.a.createElement("span", {
					className: h.a.regularText
				}, e.subreddit.displayText)) : o.a.createElement("span", {
					className: h.a.regularText
				}, e.subreddit.displayText), null === e.rank && o.a.createElement("span", {
					className: h.a.smallText
				}, r.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				g = e => {
					const t = Object(u.a)(),
						n = Object(a.a)(h.a.subredditRankItem, e.large && h.a.large),
						r = e.delta && e.delta > 0,
						s = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(c.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						d = e.delta ? r ? "#46D160" : "#EA0027" : "transparent";
					return o.a.createElement("li", {
						className: h.a.listItem,
						key: e.subreddit.displayText
					}, o.a.createElement(i.a, {
						className: n,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, o.a.createElement("div", {
						className: h.a.subredditRankItemColumn
					}, !e.hasTagline && o.a.createElement("span", {
						className: h.a.rankText
					}, s), !e.hasTagline && t ? o.a.createElement(m.a, {
						className: h.a.arrow,
						name: r ? "caret_up" : "caret_down",
						isFilled: !0,
						style: {
							color: d
						}
					}) : o.a.createElement(p.a, {
						className: Object(a.a)(h.a.arrow, !r && h.a.negative),
						style: {
							fill: d
						}
					}), o.a.createElement(f, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && o.a.createElement("span", {
						className: h.a.regularText
					}, e.delta ? Object(c.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				a = n.n(i);
			const c = e => s.a.createElement("div", {
				className: Object(o.a)(a.a.placeholderWrapper, e.large && a.a.large)
			}, s.a.createElement("span", {
				className: a.a.subredditIconLoading
			}), s.a.createElement("span", {
				className: a.a.subredditNameLoading
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
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/first.js"),
				o = n.n(s),
				i = n("./node_modules/lodash/times.js"),
				a = n.n(i),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = n("./src/config.ts"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				b = n("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				h = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = n("./src/reddit/constants/subredditLeaderboard.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/controls/Chip/index.tsx"),
				x = n("./src/reddit/helpers/name/index.ts"),
				_ = n("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				v = n("./src/reddit/hooks/useTracking.ts"),
				k = n("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				O = n.n(k);
			const E = e => {
					const t = !(!e.rankings || !e.rankings.length),
						n = !t && O.a.communityBannerPlaceholder,
						s = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: `url(${e.bannerBackgroundImage})`
						} : void 0,
						o = e.categoryName === f.j ? f.h.path : f.f;
					return d.a.createElement("div", {
						className: Object(m.a)(e.className, O.a.communityBanner, n),
						style: s
					}, t && d.a.createElement("h2", {
						className: O.a.communityBannerText
					}, d.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || f.d),
						to: o
					}, e.categoryName ? (e => e === f.j ? r.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : d.a.createElement(d.a.Fragment, null, r.fbt._("Top", null, {
						hk: "4bbkOp"
					}), d.a.createElement("span", {
						className: O.a.categoryName
					}, " ", r.fbt._("{categoryName}", [r.fbt._param("categoryName", e)], {
						hk: "2cI9uN"
					}), " "), r.fbt._("Communities", null, {
						hk: "2rXjVR"
					})))(e.categoryName) : r.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				j = e => {
					const {
						category: t
					} = e, {
						gradients: n
					} = t, s = !!(!e.rankings || !e.rankings.length) && O.a.communityBannerPlaceholder, o = n && Array.isArray(n) && 2 === n.length ? {
						background: `linear-gradient(246.35deg, ${n[0]} 0%, ${n[1]} 100%)`
					} : void 0, i = t.path ? t.path : f.f, a = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
					return d.a.createElement("div", {
						className: Object(m.a)(e.className, O.a.taglineBanner, s)
					}, d.a.createElement("div", {
						className: O.a.taglineBannerBackground,
						style: o
					}, d.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || f.d),
						to: i
					}, d.a.createElement("h2", {
						className: O.a.taglineBannerText
					}, d.a.createElement("img", {
						className: O.a.taglineBannerImage,
						src: `${u.a.assetPath}/img/discovery/${a}`
					}), t.tagline ? (e => d.a.createElement("span", {
						className: O.a.categoryName
					}, r.fbt._("{tagline}", [r.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : r.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				C = e => d.a.createElement("ol", null, e.rankings && e.rankings.map((t, n) => {
					const r = e.subreddits[t.id];
					return d.a.createElement(p.a, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || f.d, r.name),
						rank: n,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: r
					})
				}), !e.rankings.length && N),
				N = d.a.createElement(d.a.Fragment, null, a()(5, e => d.a.createElement(b.a, {
					key: e
				}))),
				S = e => {
					const t = e.isSecondaryButton ? g.n : g.k,
						n = e.linkColor ? {
							backgroundColor: e.linkColor,
							color: "white"
						} : void 0;
					return d.a.createElement("div", {
						className: O.a.footer
					}, d.a.createElement(t, {
						className: O.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || f.d),
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

			function w(e, t) {
				return t || `${f.f}${Object(x.g)(e)}/`
			}
			const T = e => {
				return d.a.createElement("div", {
					className: O.a.categoryPicker
				}, e.categories && e.categories.map((t, n) => e.activeCategoryName === t.name ? null : d.a.createElement("span", {
					className: O.a.chipWrapper,
					key: t.name,
					onMouseDown: () => ((t, n) => e.onSendEventClick("bottom_leaderboards", t || f.d, void 0, n))(t.name, n + 1)
				}, d.a.createElement(y.a, {
					className: e.hasTagline ? O.a.taglineChip : O.a.chip,
					key: t.name,
					to: w(t.name, t.path),
					wide: t.name === f.j
				}, t.name ? t.name === f.j ? r.fbt._("Near You", null, {
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
					category: s,
					categories: i
				} = e, a = Object(v.a)();
				Object(c.useEffect)(() => {
					a(Object(_.d)(r || f.d))
				}, []);
				const l = o()(n),
					m = t && l && t[l.id],
					p = `${u.a.assetPath}/img/leaderboard/banner-background.png`,
					b = m ? m.bannerBackgroundImage || p : void 0,
					g = e.to || r && w(r, s.path),
					y = s && s.tagline,
					x = s && s.gradients && Array.isArray(s.gradients) && 2 === s.gradients.length ? s.gradients[1] : void 0;
				return d.a.createElement(h.a, {
					className: e.className,
					contentOnly: !0
				}, y && d.a.createElement(j, {
					category: s,
					onSendEventClick: e.onSendEventClick,
					rankings: n
				}), !y && d.a.createElement(E, {
					bannerBackgroundImage: b,
					categoryName: r,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), d.a.createElement(C, {
					categoryName: r,
					hasTagline: !!y,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: n,
					shouldDisplayDelta: !1,
					subreddits: t
				}), d.a.createElement(S, {
					categoryName: r,
					isSecondaryButton: e.isSecondaryButton,
					linkColor: x,
					onSendEventClick: e.onSendEventClick,
					to: g
				}), i && d.a.createElement(T, {
					activeCategoryName: r,
					categories: i,
					hasTagline: !!y,
					onSendEventClick: e.onSendEventClick
				}))
			}
		},
		"./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less": function(e, t, n) {
			e.exports = {
				ClearButton: "_3k5-X9mL_S9RJuKX2c3dFc",
				clearButton: "_3k5-X9mL_S9RJuKX2c3dFc"
			}
		},
		"./src/reddit/components/Widgets/Aggregate/TopicsList/index.m.less": function(e, t, n) {
			e.exports = {
				itemContainer: "_1ULKkr1Vw-TKylAevPBQl3",
				linkItem: "_1cK4Hfav56VzzWNW6SF7Kj",
				container: "_1rKh-fSjtA_kUJNOHsvtAZ",
				banner: "_2E8lSyj68M9zN75kARoqfq",
				bannerText: "_1giVw239PHkSdxzG2aP5wH"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(a);
			const d = o.a.div("WidgetBackground", c.a),
				l = o.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(i.b, {
					type: i.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
			})), n.d(t, "a", (function() {
				return T
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(i.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				k = n("./src/reddit/models/Flair/index.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				j = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				C = n.n(j);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => o.a.createElement(b.a, {
					className: Object(d.a)(C.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, o.a.createElement("div", {
					className: C.a.container
				}, e.isLoading ? o.a.createElement(g.a, {
					className: C.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: C.a.errorMsg
				}, e.errorMsg || r.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(T, N({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(f.o, {
					className: C.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				w = Object(c.c)({
					hideNSFWPref: O.C,
					nightmode: O.V
				}),
				T = Object(i.b)(w)(e => {
					const t = Object(y.a)();
					return o.a.createElement("div", {
						className: C.a.communityItemContainer
					}, o.a.createElement(v.a, {
						widthRight: h.t
					}, o.a.createElement("div", {
						className: C.a.iconContainer
					}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
						className: C.a.subredditIcon,
						src: e.iconUrl || e.communityIcon
					}) : t ? o.a.createElement(x.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(d.a)(C.a.defaultCommunityIcon, {
							[C.a.mNightmode]: e.nightmode
						})
					}) : o.a.createElement(_.a, {
						className: C.a.planetIcon,
						"data-redditstyle": !0
					})), o.a.createElement("div", {
						className: C.a.communityDescriptionContainer
					}, o.a.createElement(a.a, {
						className: C.a.communityName,
						onClick: e.onCommunityNameClick,
						title: Object(E.b)(e.name, e.type),
						to: Object(E.a)(e.name, e.type)
					}, Object(E.b)(e.name, e.type)), o.a.createElement("div", {
						className: C.a.communityInfoContainer
					}, !!e.subscribers && o.a.createElement("p", {
						className: C.a.subscriberCount
					}, r.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [r.fbt._plural(e.subscribers, "number")], {
						hk: "6i1wh"
					})), e.isNSFW && o.a.createElement(l.b, {
						flair: {
							type: k.f.Nsfw,
							text: "nsfw"
						}
					}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(g.a, {
						className: Object(d.a)(C.a.communityCta, C.a.smallLoadingIcon),
						sizePx: 12
					}) : o.a.createElement(f.o, {
						className: Object(d.a)(C.a.communityCta, {
							[C.a.showOnHover]: e.showTertiaryButtonOnHover
						}),
						disabled: e.buttonDisabled,
						onClick: () => e.onTertiaryButtonClick(e)
					}, e.tertiaryButtonText) : e.widget ? o.a.createElement(p, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						sendEvent: e.sendEvent,
						small: !0,
						userIsSubscriber: !!e.isSubscribed,
						widget: e.widget
					}) : o.a.createElement(u.a, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						small: !0
					})), !!e.description && o.a.createElement("p", {
						title: e.description,
						className: C.a.communityDescription
					}, e.description))
				})
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/name/index.ts");

			function o(e, t) {
				return (t === r.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === r.a.PROFILE ? Object(s.d)(e) : Object(s.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: i.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(o.d([t], !0)),
				onSubscriptionsRequested: () => e(o.e()),
				onUnsubscribe: () => e(o.d([t], !1))
			}))
		},
		"./src/reddit/constants/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(r || (r = {}));
			var s;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(s || (s = {}))
		},
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "l", (function() {
				return a
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "g", (function() {
				return x
			}));
			const r = "DEFAULT",
				s = "",
				o = "All Communities",
				i = "top",
				a = "MOD",
				c = "moderating",
				d = "LOCAL_COMMUNITIES",
				l = "near-you",
				u = "/subreddits/leaderboard/",
				m = {
					id: s,
					name: s,
					path: `${u}`
				},
				p = {
					id: d,
					name: l,
					path: `${u}${l}/`
				},
				b = [{
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
					id: s,
					name: s,
					path: `${u}`,
					image: "popcorn-snoo",
					tagline: "Trending communities are so hot right now",
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				f = {
					id: d,
					name: l,
					path: `${u}${l}/`,
					image: "magnifying-glass-snoo",
					tagline: "Local communities —\nSee what’s near you",
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				g = [{
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
				x = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
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
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/controls/Chip/index.m.less"),
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
			t.a = e => {
				const t = e.to ? {
					kind: i.a.InternalLink,
					to: e.to
				} : {};
				return s.a.createElement(i.q, d({
					className: Object(o.a)(c.a.Chip, {
						[c.a.isWide]: e.wide
					}),
					onClick: e.onClick,
					priority: i.b.Tertiary,
					size: i.c.XS,
					text: e.children
				}, t))
			}
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
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n
			}) => s.a.createElement("div", {
				className: Object(o.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/graphql/operations/GetNearbySubreddits.json"),
				s = n("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(s.a)(e, {
				...r,
				variables: t
			})
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/graphql/operations/TopSubreddits.json"),
				s = n("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(s.a)(e, {
				...r,
				variables: t
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r,
						...o
					} = e, i = o;
					return r ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/isFakeSubreddit/index.ts"),
				s = n("./src/reddit/constants/postLayout.ts");
			const o = Math.floor(100 * Math.random());
			var i;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(i || (i = {}));
			t.b = (e, t, n, i, a) => {
				const c = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: n,
					layout: s.b[t.prefs.layout]
				};
				return i && !Object(r.a)(i.name) && (c.subreddit = i.name, c.subreddit_screen = !0), c.wls = 6, c.whitelist_status = "all_ads", c.percentage = c.random_number = o, a && (c.position = a), c
			}
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/lodash/isEmpty.js");
			var r = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const s = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						s = [];
					for (const {
							node: o,
							...i
						} of e) {
						const e = Object(r.a)(o);
						n[e.id] = e, s.push(i)
					}
					return {
						pageInfo: t,
						rankings: s,
						subreddits: n
					}
				},
				o = ({
					edges: e
				}) => {
					const t = {},
						n = [];
					for (const {
							node: s,
							...o
						} of e) {
						const e = Object(r.a)(s);
						t[e.id] = {
							...e,
							bannerBackgroundImage: s && s.styles && s.styles.bannerBackgroundImage
						}, n.push(o)
					}
					return {
						rankings: n,
						subreddits: t
					}
				},
				i = ({
					edges: e,
					pageInfo: t
				}) => {
					const n = {},
						s = [];
					let o = 0;
					for (const {
							node: i
						} of e) {
						const e = Object(r.a)(i);
						n[e.id] = {
							...e,
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}, s.push({
							id: e.id,
							rank: o
						}), o += 1
					}
					return {
						rankings: s,
						subreddits: n,
						pageInfo: t
					}
				}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(r.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(o.a)(Object(s.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "G", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "C", (function() {
				return p
			})), n.d(t, "z", (function() {
				return b
			})), n.d(t, "D", (function() {
				return h
			})), n.d(t, "B", (function() {
				return f
			})), n.d(t, "A", (function() {
				return g
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "y", (function() {
				return j
			})), n.d(t, "r", (function() {
				return C
			})), n.d(t, "x", (function() {
				return N
			})), n.d(t, "F", (function() {
				return S
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "v", (function() {
				return F
			})), n.d(t, "E", (function() {
				return D
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "l", (function() {
				return B
			})), n.d(t, "m", (function() {
				return U
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "h", (function() {
				return q
			}));
			var r, s = n("./src/reddit/constants/chat.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(r || (r = {}));
			const a = (e, t) => {
					if (t) {
						const n = i.media(e, t.post.id),
							r = i.post(e, t.post.id),
							s = i.subreddit(e);
						if (t.post.authorInfo && r && (r.authorId = t.post.authorInfo.id), n) {
							n.streamPublicId = t.stream.stream_id, n.id = t.stream.stream_id;
							const r = Object(o.j)(e, {
								streamIdFromPath: t.post.id
							});
							r === o.a.LIVE ? n.type = "stream_live" : r === o.a.VOD ? n.type = "stream_vod" : r === o.a.UNAVAILABLE && (n.type = "stream_unavailable")
						}
						return {
							post: r,
							media: n,
							subreddit: s
						}
					}
					return {
						subreddit: i.subreddit(e)
					}
				},
				c = (e, t, n) => {
					if (!t || !n) return;
					const r = Object(o.j)(e, {
							streamIdFromPath: t.post.id
						}),
						i = t.chat_disabled || n.chatState === s.a.None;
					return {
						id: n.id,
						sessionDurationMs: n.sessionDurationMs,
						watchDurationMs: n.watchDurationMs,
						heartbeatDurationMs: n.heartbeatDurationMs,
						isLive: r === o.a.LIVE,
						playheadOffsetMs: n.playheadOffsetMs,
						timestampMs: n.timestampMs,
						startTimeMs: n.startTimeMs,
						volume: n.volume,
						chatState: i ? s.a.None : s.a.Compact,
						scrubbingStartMs: n.scrubbingStartMs,
						scrubbingEndMs: n.scrubbingEndMs,
						playerType: n.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...a(e)
				}),
				u = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...a(e)
				}),
				m = (e, t) => n => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...a(n, e),
					actionInfo: i.actionInfo(n, {
						position: t || 0
					})
				}),
				p = (e, t) => n => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...e && {
						...a(n, e)
					}
				}),
				b = (e, t) => n => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				h = (e, t) => n => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				f = (e, t) => n => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				g = (e, t, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...a(r, t)
				}),
				y = (e, t, n, r) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...a(s, t),
					actionInfo: i.actionInfo(s, {
						referralId: r
					})
				}),
				x = (e, t, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...a(r, t)
				}),
				_ = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...a(t, e)
				}),
				v = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				k = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				O = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(n, e, t),
					...d(n),
					...a(n, e)
				}),
				E = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(n, e, t),
					...a(n, e)
				}),
				j = e => t => {
					const n = Object(o.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...a(t, n)
					}
				},
				C = (e, t, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(r, t, n),
					...a(r, t)
				}),
				N = (e, t) => n => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(n, e, t),
					...d(n)
				}),
				S = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: i.profile(t),
					screen: i.screen(t),
					...a(t, e)
				}),
				w = e => e => {
					const t = a(e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: i.profile(e),
						screen: i.screen(e),
						...t
					}
				},
				T = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...a(t, e)
				}),
				P = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...a(t, e),
					targetSubreddit: i.subreddit(t)
				}),
				I = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(n, e, t),
					...a(n, e)
				}),
				A = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(n, e, t),
					...a(n, e)
				}),
				L = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(n, e, t),
					...a(n, e)
				}),
				F = (e, t) => n => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(n, e, t),
					...a(n, e)
				}),
				D = (e, t) => n => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(n, e, t),
					...a(n, e)
				}),
				R = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(n, e, t),
					...a(n, e)
				}),
				B = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(n, e, t),
					...a(n, e),
					...d(n)
				}),
				U = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(n, e, t),
					...a(n, e),
					...d(n)
				}),
				M = (e, t) => n => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...a(n, t),
					...d(n)
				}),
				q = (e, t) => n => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...a(n, t),
					...d(n)
				})
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var r = n("./src/reddit/constants/categories.tsx"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...s.defaults(t),
					action: "click",
					noun: Object(r.d)(e),
					source: "leaderboard_category"
				}),
				i = (e, t, n) => o => ({
					...s.defaults(o),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				a = (e, t) => n => ({
					...s.defaults(n),
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(r.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				c = (e, t, n, o) => i => ({
					...s.defaults(i),
					action: "click",
					actionInfo: {
						...s.actionInfo(i),
						position: o && o
					},
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: n && n.toLowerCase()
					}
				}),
				d = (e, t) => n => ({
					...s.defaults(n),
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(r.d)(e),
						name: t && t.toLowerCase()
					}
				})
		},
		"./src/reddit/icons/svgs/Triangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 10 8",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
			})))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(a);
			t.a = Object(o.a)(e => s.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/GoodContent/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = {
					G: "G",
					NC17: "NC17",
					NOT_SHOWN_IN_THEATERS: "NOT_SHOWN_IN_THEATERS",
					PG: "PG",
					PG13: "PG13",
					R: "R"
				},
				s = {
					isBlacklistedSubredditsExcluded: !0,
					isNsfwExcluded: !0,
					maxRating: r.R
				}
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(r || (r = {}))
		},
		"./src/reddit/pages/Frontpage/index.m.less": function(e, t, n) {
			e.exports = {
				duHeader: "_1fauFKjg428h9E1m4B2Vr-",
				sidebar: "_10wb7d3rGvj56Gcs4IQWL5"
			}
		},
		"./src/reddit/pages/Frontpage/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/lodash/fromPairs.js"),
				o = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/fastdom/index.ts"),
				p = n("./src/lib/makeListingKey/index.ts"),
				b = n("./src/lib/pageTitle.ts"),
				h = n("./src/lib/performanceTimings/index.tsx"),
				f = n("./src/reddit/actions/frontpage/index.ts"),
				g = n("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx"),
				y = n("./src/reddit/components/EmptySubreddit.tsx"),
				x = n("./src/reddit/components/FeaturedLiveEntrypoint/index.tsx"),
				_ = n("./src/reddit/components/FrontpageSidebar/index.tsx"),
				v = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				k = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				O = n("./src/reddit/components/JumpToContent/index.tsx"),
				E = n("./src/reddit/components/ListingPostList/index.tsx"),
				j = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				C = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				N = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				S = n("./src/reddit/components/TabBadger/index.tsx"),
				w = n("./src/reddit/components/TitleTagManager/index.tsx"),
				T = n("./src/reddit/components/TrackingHelper/index.tsx"),
				P = n("./src/reddit/constants/parameters.ts"),
				I = n("./src/reddit/constants/postLayout.ts"),
				A = n("./src/reddit/contexts/PageLayer/index.tsx"),
				L = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				F = n("./src/reddit/helpers/trackers/screenview.ts"),
				D = n("./src/reddit/layout/page/Listing/index.tsx"),
				R = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				B = n("./src/reddit/selectors/experiments/trending.ts"),
				U = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				M = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				q = n("./src/reddit/selectors/frontpage.ts"),
				W = n("./src/reddit/selectors/meta.ts"),
				H = n("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				G = n("./src/lib/constants/index.ts"),
				K = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				z = n("./src/lib/objectSelector/index.ts"),
				Q = n("./src/reddit/constants/page.ts"),
				J = n("./src/reddit/pages/Frontpage/index.m.less"),
				Y = n.n(J);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $ = Object(A.t)(), ee = Object(d.c)({
				queryParams: Object(z.a)((e, {
					location: t
				}) => o()([...Object(u.a)(t.search)])),
				sort: (e, {
					match: t
				}) => {
					const n = Object(q.a)(e);
					return t.params.sort || n
				}
			}), te = Object(d.c)({
				countryMeta: W.b,
				geopopular: V.n
			}), ne = Object(d.c)({
				isActionBarAnimationEnabled: R.b,
				isInTrendingEntrypointExperiment: B.a,
				isLoggedIn: V.K,
				isPopular: A.C,
				isRpanDuVisible: e => Object(H.a)(e, {
					listingName: K.R
				}),
				rpanInjectionIndex: e => Object(H.b)(e, {
					listingName: K.R
				}),
				layout: A.O,
				isInUISimplificationI18NExperiment: U.a
			}), re = () => Object(d.a)(te, ee, ne, e => Object(H.a)(e, {
				listingName: K.R
			}), e => Object(H.b)(e, {
				listingName: K.R
			}), e => e, L.a, ({
				countryMeta: e,
				geopopular: t
			}, {
				queryParams: n,
				sort: r
			}, s, o, i, a, c) => {
				const d = P.x in n && n[P.x].toUpperCase(),
					l = "string" == typeof d && d in G.Ub ? G.Ub[d] : G.Vb,
					u = Object(p.a)(Q.a, r, n),
					m = e || G.w.Everywhere,
					b = t || m,
					h = P.h in n ? n[P.h].toUpperCase() : b,
					f = [];
				return o && f.push(i), {
					cardViewExperimentVariant: c,
					countrySort: h,
					listingKey: u,
					sort: r,
					timeSort: l,
					focusedVerticalPositions: Object(M.b)(a, f, {
						listingKey: u
					}),
					...s
				}
			}), se = (e, t) => ({
				onLoadMorePosts: () => e(f.morePostsRequested({
					sort: t.match.params.sort
				})),
				refreshFeed: () => e(f.refreshFeed({
					sort: t.match.params.sort
				}))
			}), oe = Object(c.b)(re, se), ie = Object(r.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("Trending").then(n.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), ae = e => a.a.createElement(ie, Z({}, e, {
				fallback: a.a.createElement(N.a, {
					showCardView: !!e.showCardView
				})
			}));
			class ce extends a.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = () => {
						const {
							cardViewExperimentVariant: e,
							isLoggedIn: t,
							sort: n
						} = this.props;
						m.a.read(() => {
							const r = `${h.c.FrontPage}-${n}`,
								s = [Object(L.c)(e)];
							Object(h.d)(r, t, s)
						})
					}
				}
				render() {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(w.a, {
						title: Object(b.c)().toString()
					}), this.renderContent())
				}
				renderContent() {
					const {
						focusedVerticalPositions: e,
						isActionBarAnimationEnabled: t,
						isInTrendingEntrypointExperiment: n,
						isLoggedIn: r,
						isPopular: s,
						isRpanDuVisible: o,
						layout: c,
						listingKey: d,
						rpanInjectionIndex: u,
						sendEvent: m,
						isInUISimplificationI18NExperiment: p
					} = this.props, b = s && !r && n && !p, h = {
						baseUrl: "",
						countrySort: this.props.countrySort,
						sort: this.props.sort,
						timeSort: this.props.timeSort
					}, f = {};
					if (c === I.g.Large && e.forEach((e, t) => {
							f[e] = Object(g.a)({
								numInstance: t,
								layout: c,
								listingKey: d,
								listingName: Q.b,
								listingPosition: e
							})
						}), o) {
						const {
							child: e,
							idx: t
						} = Object(j.a)({
							children: f,
							desiredIndex: u,
							layout: c,
							listingKey: d,
							listingName: K.R,
							sendEvent: m
						});
						f[t] = e
					}
					const N = a.a.createElement(_.default, {
						className: Y.a.sidebar,
						listingKey: d,
						listingName: Q.b
					});
					return a.a.createElement(D.a, {
						className: Object(l.a)(Y.a.Container, this.props.className),
						fitPageToContent: !0,
						trendingUnit: b && a.a.createElement(ae, {
							showCardView: c === I.g.Large
						}),
						content: a.a.createElement(i.Fragment, null, b && a.a.createElement(C.a, {
							className: Y.a.duHeader
						}, X._("Popular posts", null, {
							hk: "36DJb4"
						})), a.a.createElement(x.a, null), r && a.a.createElement(k.a, null), a.a.createElement(v.a, h), a.a.createElement(O.a, null), a.a.createElement(S.a, {
							listingKey: this.props.listingKey,
							shortTimer: !0,
							handlePillClick: this.props.refreshFeed
						}), a.a.createElement(E.a, {
							injectChildren: f,
							noPostsComponent: () => a.a.createElement(y.a, {
								listingName: Q.b,
								sort: this.props.sort
							}),
							key: "listing",
							listingKey: d,
							listingName: Q.b,
							listingViewed: (e, t) => Object(F.f)(d, this.props.sort, t, e, this.props.timeSort),
							onLoadMore: this.props.onLoadMorePosts,
							isActionBarAnimationEnabled: t
						})),
						sidebar: N
					})
				}
			}
			t.default = $(oe(Object(T.c)(ce)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(r.a)(c.a, (e, {
					listingName: t
				}) => {
					const n = Object(a.ub)(e);
					if (!n) return !1;
					let r;
					if (-1 === [o.R, "r/popular"].indexOf(t)) {
						const s = t.replace(/^r\//, ""),
							o = Object(i.F)(e, s),
							a = n.subreddit[o];
						if (!a) return !1;
						r = a
					} else r = n;
					if (!r.rpanDuDismissalTime) return !1;
					return new Date(r.rpanDuDismissalTime).getTime() > Date.now() - 30 * s.x
				}, (e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.k, (e, {
					sort: t
				}) => t, (e, t, n, r, o, i) => i !== s.P.AWARDED && (!!e && (!o.isPermanentlyCanceled && (!t && (!!r && r.show_discovery_unit))))),
				u = Object(r.a)((e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.l, (e, t, n) => t ? t.discovery_unit_index : o.i)
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return k
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "k", (function() {
				return L
			})), n.d(t, "c", (function() {
				return F
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "j", (function() {
				return M
			})), n.d(t, "b", (function() {
				return q
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "g", (function() {
				return H
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = n("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = n.n(d)()(e => Object(s.a)(Object(r.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				y = e => e.publicAccessNetwork.hlsStreams,
				x = Object(r.a)(y, e => e.ended),
				_ = Object(r.a)(y, e => e.removed),
				v = Object(r.a)(p, x, _, (e, t, n) => {
					const r = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const r = n.stream.state,
							s = R(r, i.a.ENDED) ? i.a.ENDED : r,
							o = n.stream.vod_accessible;
						return s === r && !0 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: s,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return n.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const r = n.stream.state,
							s = R(r, i.a.ENDED) ? i.a.ENDED : r,
							o = n.stream.vod_accessible;
						return s === r && !1 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: s,
									vod_accessible: !1
								}
							}
						}
					}, r)
				}),
				k = (e, t) => {
					return v(e)[Object(o.g)(t)]
				},
				O = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), v, b, a.h, (e, t, n, r, s) => {
					const a = [];
					if (e) {
						const t = Object(o.g)(e);
						n[t] && a.push(t)
					}
					const c = a.concat(t),
						d = [...new Set(c)],
						l = new Set([...r, ...s]);
					return d.filter(e => {
						const t = n[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== i.a.KILLED && t.stream.state !== i.a.PURGED
					})
				}),
				E = Object(r.a)((e, {
					count: t
				}) => t, v, (e, {
					listingName: t,
					streamIdFromPath: n
				}) => O(e, {
					listingName: t,
					streamIdFromPath: n
				}), (e, t, n) => {
					const r = n.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				j = Object(r.a)(v, E, (e, t) => {
					const n = t[0];
					if (n) return e[n]
				}),
				C = Object(r.a)(g, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: r
				}) => E(e, {
					listingName: t || r,
					streamIdFromPath: n
				}), (e, t) => {
					const n = new Set(e),
						r = t.filter(e => !n.has(e));
					if (r.length) return r[0]
				}),
				N = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, v, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: r
				}) => E(e, {
					listingName: t || r,
					streamIdFromPath: n
				}), h, (e, t, n, r) => {
					if (!n.length) return;
					const s = n.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = s.find(e => e.stream.state === i.a.IS_LIVE);
					if (o) return o.post.id;
					const a = s.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				S = Object(s.a)(Object(r.a)(N, v, (e, t) => e ? t[e] : void 0)),
				w = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(o.g)(t) : void 0, N, b, a.h, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: r
				}) => E(e, {
					listingName: t || r,
					streamIdFromPath: n
				}), (e, t, n, r, s) => !e || n.includes(e) || r.includes(e) ? t || s[0] : e),
				T = Object(r.a)(f, g, C, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				P = Object(r.a)(f, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				I = Object(s.a)(Object(r.a)(w, v, (e, t) => e ? t[e] : void 0)),
				A = Object(s.a)(Object(r.a)(T, v, (e, t) => e ? t[e] : void 0)),
				L = Object(s.a)(Object(r.a)(P, v, (e, t) => e ? t[e] : void 0)),
				F = (Object(s.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, v, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => ({
					...t[n],
					preloadedPreviewUrl: e[n]
				})))), Object(r.a)(w, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				D = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? k(e, t) : void 0, e => !e || e.chat_disabled);

			function R(e, t) {
				const n = {
					[i.a.NOT_STARTED]: 0,
					[i.a.PUBLISHED]: 1,
					[i.a.IS_LIVE]: 2,
					[i.a.DISCONNECTED]: 2,
					[i.a.ENDED]: 3,
					[i.a.KILLED]: 4,
					[i.a.PURGED]: 4
				};
				return n[t] >= n[e]
			}
			const B = Object(r.a)(w, h, (e, t) => e && t.timestamps[e] || 0);
			var U;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(U || (U = {}));
			const M = Object(r.a)(w, v, m.b, (e, t, n) => {
					if (n) return U.INTRO;
					const r = e && t[e];
					if (!r) return U.UNAVAILABLE;
					const s = r.stream.state;
					return s === i.a.IS_LIVE || s === i.a.DISCONNECTED ? U.LIVE : s === i.a.ENDED && r.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				q = Object(r.a)(I, M, m.b, c.b, c.o, (e, t, n, r, s) => n ? r : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : s : void 0),
				W = Object(r.a)(I, M, B, (e, t, n) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && n < e.broadcast_time ? n : 0 : 0),
				H = (e, t) => {
					const n = p(e);
					return !!n && n[t] && n[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				a = Object(r.a)(i, o.n, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(i, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + s.a > Date.now()
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/constants/postLayout.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => s.e[Object(o.O)(e, {})] === s.d.Card,
				c = e => Object(i.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: r.J
				}) === r.X.Treatment
		},
		"./src/reddit/selectors/live.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = e => e.live.featured,
				s = e => e.live.announcements
		},
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/subredditLeaderboard.ts"),
				s = n("./src/reddit/selectors/category.ts");
			const o = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				i = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				a = (e, t) => t === r.m ? r.l : t === r.j ? r.i : e || r.b,
				c = (e, t) => {
					const n = e.subreddits.rankings,
						r = t && Object(s.f)(e, {
							categoryName: t
						}),
						o = n[a(r && r.id || null, t)];
					return !(!o || !o.length)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage.8113c0c036b705b0b52e.js.map