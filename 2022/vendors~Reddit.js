// https://www.redditstatic.com/desktop2x/vendors~Reddit.7833eb99f2c7701c2ac4.js
// Retrieved at 6/13/2022, 11:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Reddit"], {
		"./node_modules/@r/frames/compiled.js": function(e, o, r) {
			"use strict";
			(function(e) {
				Object.defineProperty(o, "__esModule", {
					value: !0
				});
				var r = arguments,
					t = ".*",
					n = ".postMessage",
					s = {
						targetOrigin: "*"
					},
					a = /\..+$/;

				function i(e) {
					return new RegExp("\\.(?:" + e.join("|") + ")$")
				}

				function u(e) {
					return new RegExp("^http(s)?:\\/\\/" + e.join("|") + "$", "i")
				}
				var d = [t],
					l = u(d),
					c = [n],
					f = i(c),
					p = {},
					v = !1;

				function h(o, r, t) {
					e.addEventListener ? e.addEventListener(o, r, t) : e.attachEvent && e.attachEvent("on" + o, r)
				}

				function g(o, r) {
					e.removeEventListener ? e.removeEventListener(o, r) : e.detachEvent && e.detachEvent("on" + o, r)
				}

				function m(e) {
					return /\*/.test(e)
				}
				var _ = o.postMessage = function(e, o, r) {
						var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						a.test(o) || (o += n);
						var i = t;
						Object.keys(s).forEach((function(e) {
							i[e] = s[e]
						})), e.postMessage(JSON.stringify({
							type: o,
							data: r,
							defaultedOptions: i
						}), i.targetOrigin)
					},
					b = o.receiveMessage = function(e, o, r, t) {
						"string" == typeof e && (t = r, r = o, o = e, e = null), t = t || void 0;
						var n = function(o) {
							for (var n = arguments.length, s = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) s[a - 1] = arguments[a];
							e && e !== o.source && e.contentWindow !== o.source || r.apply(t, [o].concat(s))
						};
						return h(o, n), {
							off: function() {
								g(o, n)
							}
						}
					},
					y = (o.receiveMessageOnce = function(e, o, t, n) {
						var s = b(e, o, (function() {
							t && t.apply(void 0, r), s.off()
						}), n);
						return s
					}, o.removePostMessageOrigin = function(e) {
						var o = d.indexOf(e); - 1 !== o && (d.splice(o, 1), l = u(d))
					}),
					j = e.CustomEvent;
				if ("undefined" != typeof window && "function" != typeof j) {
					var O = {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					(j = function(e, o) {
						o = o || O;
						var r = document.createEvent("CustomEvent");
						return r.initCustomEvent(e, o.bubbles, o.cancelable, o.detail), r
					}).prototype = e.Event.prototype
				}
				o.addPostMessageOrigin = function(e) {
					m(e) ? d = [t] : -1 === d.indexOf(e) && (y(t), d.push(e), l = u(d))
				};

				function w(o) {
					if (o.origin === e.location.origin || l.test(o.origin) || "null" === o.origin) {
						var r = {};
						try {
							r = JSON.parse(o.data)
						} catch (o) {}
						var t = r.type;
						if (f.test(t)) {
							var n = t.split(".", 2)[1];
							if (p[n]) p[n].targets.forEach((function(e) {
								return _(e, t, r.data, r.options)
							}));
							var s = new j(t, {
								detail: r.data
							});
							s.source = o.source, e.dispatchEvent(s)
						}
					}
				}
				var E = o.listen = function(e) {
					-1 === c.indexOf(e) && (c.push(e), f = i(c)), v || (h("message", w), v = !0)
				};
				o.stopListening = function(e) {
					var o = c.indexOf(e); - 1 !== o && (c.splice(o, 1), c.length ? f = i(c) : (g("message", w), v = !1))
				}, o.proxy = function(e, o) {
					E(e), Array.isArray(o) || (o = [o]);
					var r = p[e];
					r ? r.targets = [].concat(r.targets, o) : r = {
						targets: o
					}, p[e] = r
				}
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/compiled.js": function(e, o, r) {
			"use strict";
			Object.defineProperty(o, "__esModule", {
				value: !0
			}), o.setup = o.trigger = o.getLocation = void 0;
			var t = Object.assign || function(e) {
					for (var o = 1; o < arguments.length; o++) {
						var r = arguments[o];
						for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
					}
					return e
				},
				n = r("./node_modules/@r/google-tag-manager/node_modules/uuid/index.js"),
				s = function(e) {
					if (e && e.__esModule) return e;
					var o = {};
					if (null != e)
						for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
					return o.default = e, o
				}(r("./node_modules/@r/frames/compiled.js"));
			var a = "gtm-" + (0, n.v4)(),
				i = !1,
				u = [],
				d = function() {
					var e = document.getElementById(a);
					return e && e.contentWindow ? e : null
				},
				l = o.getLocation = function() {
					return {
						href: location.href,
						hostname: location.hostname,
						origin: location.origin,
						pathname: location.pathname || "/",
						search: location.search.replace(/^\?/, ""),
						hash: location.hash.replace(/^#/, "")
					}
				},
				c = o.trigger = function(e, o) {
					var r = d();
					r && i ? (o && s.postMessage(r.contentWindow, "data.gtm", o), s.postMessage(r.contentWindow, "event.gtm", {
						event: e
					})) : function(e, o) {
						u.push({
							eventName: e,
							payload: o
						})
					}(e, o)
				},
				f = function() {
					if (d() && i) {
						var e = u.slice();
						u = [], e.forEach((function(e) {
							var o = e.eventName,
								r = e.payload;
							return c(o, r)
						}))
					}
				};
			o.setup = function(e) {
				var o = e.containerId,
					r = e.jailUrl,
					n = e.payload;
				if (o)
					if (r) {
						s.listen("gtm"), s.receiveMessageOnce("loaded.gtm", (function() {
							i = !0, s.stopListening("gtm")
						}));
						var u = document.createElement("iframe");
						u.style.display = "none", u.id = a, u.name = JSON.stringify(t({
							referrer: document.referrer
						}, l(), n)), u.src = r + "?id=" + o, u.onload = f, document.body.appendChild(u)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/index.js": function(e, o, r) {
			var t = r("./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js"),
				n = r("./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js"),
				s = n;
			s.v1 = t, s.v4 = n, e.exports = s
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, o) {
			for (var r = [], t = 0; t < 256; ++t) r[t] = (t + 256).toString(16).substr(1);
			e.exports = function(e, o) {
				var t = o || 0,
					n = r;
				return n[e[t++]] + n[e[t++]] + n[e[t++]] + n[e[t++]] + "-" + n[e[t++]] + n[e[t++]] + "-" + n[e[t++]] + n[e[t++]] + "-" + n[e[t++]] + n[e[t++]] + "-" + n[e[t++]] + n[e[t++]] + n[e[t++]] + n[e[t++]] + n[e[t++]] + n[e[t++]]
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, o, r) {
			(function(o) {
				var r, t = o.crypto || o.msCrypto;
				if (t && t.getRandomValues) {
					var n = new Uint8Array(16);
					r = function() {
						return t.getRandomValues(n), n
					}
				}
				if (!r) {
					var s = new Array(16);
					r = function() {
						for (var e, o = 0; o < 16; o++) 0 == (3 & o) && (e = 4294967296 * Math.random()), s[o] = e >>> ((3 & o) << 3) & 255;
						return s
					}
				}
				e.exports = r
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js": function(e, o, r) {
			var t = r("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				n = r("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				s = t(),
				a = [1 | s[0], s[1], s[2], s[3], s[4], s[5]],
				i = 16383 & (s[6] << 8 | s[7]),
				u = 0,
				d = 0;
			e.exports = function(e, o, r) {
				var t = o && r || 0,
					s = o || [],
					l = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					c = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : d + 1,
					p = c - u + (f - d) / 1e4;
				if (p < 0 && void 0 === e.clockseq && (l = l + 1 & 16383), (p < 0 || c > u) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				u = c, d = f, i = l;
				var v = (1e4 * (268435455 & (c += 122192928e5)) + f) % 4294967296;
				s[t++] = v >>> 24 & 255, s[t++] = v >>> 16 & 255, s[t++] = v >>> 8 & 255, s[t++] = 255 & v;
				var h = c / 4294967296 * 1e4 & 268435455;
				s[t++] = h >>> 8 & 255, s[t++] = 255 & h, s[t++] = h >>> 24 & 15 | 16, s[t++] = h >>> 16 & 255, s[t++] = l >>> 8 | 128, s[t++] = 255 & l;
				for (var g = e.node || a, m = 0; m < 6; ++m) s[t + m] = g[m];
				return o || n(s)
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js": function(e, o, r) {
			var t = r("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				n = r("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, o, r) {
				var s = o && r || 0;
				"string" == typeof e && (o = "binary" == e ? new Array(16) : null, e = null);
				var a = (e = e || {}).random || (e.rng || t)();
				if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, o)
					for (var i = 0; i < 16; ++i) o[s + i] = a[i];
				return o || n(a)
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, o, r) {
			"use strict";
			r.d(o, "a", (function() {
				return x
			}));
			var t = r("./node_modules/react/index.js"),
				n = r.n(t),
				s = r("./node_modules/react-dom/index.js"),
				a = (r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function i(e, o) {
				return Array.isArray(e) && Array.isArray(o) && e.length === o.length ? e.some((function(r, t) {
					return i(e[t], o[t])
				})) : e !== o
			}
			var u = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var o, r = e.root || null, t = function(e) {
						var o = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							r = o[0],
							t = void 0 === r ? "0px" : r,
							n = o[1],
							s = void 0 === n ? t : n,
							i = o[2],
							u = void 0 === i ? t : i,
							d = o[3];
						return t + " " + s + " " + u + " " + (void 0 === d ? s : d)
					}(e.rootMargin), n = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = u.keys(); o = s.next().value;) {
					if (!(r !== o.root || t !== o.rootMargin || i(n, o.thresholds))) return o
				}
				return null
			}

			function l(e, o) {
				var r = u.get(e);
				if (r)
					for (var t, n = r.values(); t = n.next().value;)
						if (t.target === o.target) return t;
				return null
			}

			function c(e, o) {
				for (var r = 0; r < e.length; r++) {
					var t = l(o, e[r]);
					t && t.handleChange(e[r])
				}
			}

			function f(e) {
				return d(e) || new IntersectionObserver(c, e)
			}
			var p = r("./node_modules/invariant/browser.js"),
				v = r.n(p),
				h = {},
				g = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return h.errorReporter || function(e) {
								return v()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							h.errorReporter = e
						}
					}
				});

			function m(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function _(e, o, r) {
				return o in e ? Object.defineProperty(e, o, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[o] = r, e
			}
			var b = ["root", "rootMargin", "threshold"],
				y = ["root", "rootMargin", "threshold", "disabled"],
				j = Object.prototype,
				O = j.hasOwnProperty,
				w = j.toString,
				E = function(e) {
					return b.reduce((function(o, r) {
						if (O.call(e, r)) {
							var t = "root" === r && "[object String]" === w.call(e[r]);
							o[r] = t ? document.querySelector(e[r]) : e[r]
						}
						return o
					}), {})
				},
				x = function(e) {
					var o, r;

					function t() {
						for (var o, r = arguments.length, t = new Array(r), n = 0; n < r; n++) t[n] = arguments[n];
						return _(m(o = e.call.apply(e, [this].concat(t)) || this), "handleChange", (function(e) {
							o.props.onChange(e, o.externalUnobserve)
						})), _(m(o), "handleNode", (function(e) {
							var r = o.props.children;
							if (null != r) {
								var t = r.ref;
								t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e))
							}
							o.targetNode = e && Object(s.findDOMNode)(e)
						})), _(m(o), "observe", (function() {
							return null != o.props.children && !o.props.disabled && (o.targetNode ? (o.observer = f(E(o.props)), o.target = o.targetNode, e = m(o), u.has(e.observer) || u.set(e.observer, new Set), u.get(e.observer).add(e), e.observer.observe(e.target), !0) : (g.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), _(m(o), "unobserve", (function(e) {
							! function(e, o) {
								if (u.has(e.observer)) {
									var r = u.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(o) : (e.observer.disconnect(), u.delete(e.observer)))
								}
							}(m(o), e)
						})), _(m(o), "externalUnobserve", (function() {
							o.unobserve(o.targetNode)
						})), o
					}
					r = e, (o = t).prototype = Object.create(r.prototype), o.prototype.constructor = o, o.__proto__ = r;
					var a = t.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var o = this;
						this.prevTargetNode = this.targetNode;
						var r = y.some((function(r) {
							return i(o.props[r], e[r])
						}));
						return r && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), r
					}, a.componentDidUpdate = function(e, o, r) {
						var t = !1;
						r || (t = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (r || t) && this.observe()
					}, a.componentDidMount = function() {
						this.observe()
					}, a.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, a.render = function() {
						var e = this.props.children;
						return null != e ? n.a.cloneElement(n.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, t
				}(n.a.Component);
			_(x, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, o, r) {
			"use strict";
			var t = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function s() {}
			s.resetWarningCache = n, e.exports = function() {
				function e(e, o, r, n, s, a) {
					if (a !== t) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function o() {
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
					arrayOf: o,
					element: e,
					elementType: e,
					instanceOf: o,
					node: e,
					objectOf: o,
					oneOf: o,
					oneOfType: o,
					shape: o,
					exact: o,
					checkPropTypes: s,
					resetWarningCache: n
				};
				return r.PropTypes = r, r
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, o, r) {
			e.exports = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, o, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/classnames/index.js": function(e, o, r) {
			var t;
			! function() {
				"use strict";
				var r = {}.hasOwnProperty;

				function n() {
					for (var e = [], o = 0; o < arguments.length; o++) {
						var t = arguments[o];
						if (t) {
							var s = typeof t;
							if ("string" === s || "number" === s) e.push(t);
							else if (Array.isArray(t)) {
								if (t.length) {
									var a = n.apply(null, t);
									a && e.push(a)
								}
							} else if ("object" === s)
								if (t.toString === Object.prototype.toString)
									for (var i in t) r.call(t, i) && t[i] && e.push(i);
								else e.push(t.toString())
						}
					}
					return e.join(" ")
				}
				e.exports ? (n.default = n, e.exports = n) : void 0 === (t = function() {
					return n
				}.apply(o, [])) || (e.exports = t)
			}()
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, o) {
			e.exports = function(e, o) {
				for (var r = -1, t = null == e ? 0 : e.length; ++r < t;)
					if (!o(e[r], r, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_arrayShuffle.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_copyArray.js"),
				n = r("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return n(t(e))
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, o) {
				var r = !0;
				return t(e, (function(e, t, n) {
					return r = !!o(e, t, n)
				})), r
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, o) {
			var r = Math.floor,
				t = Math.random;
			e.exports = function(e, o) {
				return e + r(t() * (o - e + 1))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_shuffleSelf.js"),
				n = r("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return t(n(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, o) {
				var r = -1,
					n = e.length,
					s = n - 1;
				for (o = void 0 === o ? n : o; ++r < o;) {
					var a = t(r, s),
						i = e[a];
					e[a] = e[r], e[r] = i
				}
				return e.length = o, e
			}
		},
		"./node_modules/lodash/every.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_arrayEvery.js"),
				n = r("./node_modules/lodash/_baseEvery.js"),
				s = r("./node_modules/lodash/_baseIteratee.js"),
				a = r("./node_modules/lodash/isArray.js"),
				i = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, o, r) {
				var u = a(e) ? t : n;
				return r && i(e, o, r) && (o = void 0), u(e, s(o, 3))
			}
		},
		"./node_modules/lodash/forOwn.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_baseForOwn.js"),
				n = r("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, o) {
				return e && t(e, n(o))
			}
		},
		"./node_modules/lodash/isEqualWith.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_baseIsEqual.js");
			e.exports = function(e, o, r) {
				var n = (r = "function" == typeof r ? r : void 0) ? r(e, o) : void 0;
				return void 0 === n ? t(e, o, void 0, r) : !!n
			}
		},
		"./node_modules/lodash/negate.js": function(e, o) {
			var r = "Expected a function";
			e.exports = function(e) {
				if ("function" != typeof e) throw new TypeError(r);
				return function() {
					var o = arguments;
					switch (o.length) {
						case 0:
							return !e.call(this);
						case 1:
							return !e.call(this, o[0]);
						case 2:
							return !e.call(this, o[0], o[1]);
						case 3:
							return !e.call(this, o[0], o[1], o[2])
					}
					return !e.apply(this, o)
				}
			}
		},
		"./node_modules/lodash/omitBy.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_baseIteratee.js"),
				n = r("./node_modules/lodash/negate.js"),
				s = r("./node_modules/lodash/pickBy.js");
			e.exports = function(e, o) {
				return s(e, n(t(o)))
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_arrayShuffle.js"),
				n = r("./node_modules/lodash/_baseShuffle.js"),
				s = r("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (s(e) ? t : n)(e)
			}
		},
		"./node_modules/lodash/union.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_baseFlatten.js"),
				n = r("./node_modules/lodash/_baseRest.js"),
				s = r("./node_modules/lodash/_baseUniq.js"),
				a = r("./node_modules/lodash/isArrayLikeObject.js"),
				i = n((function(e) {
					return s(t(e, 1, a, !0))
				}));
			e.exports = i
		},
		"./node_modules/lodash/xorWith.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_arrayFilter.js"),
				n = r("./node_modules/lodash/_baseRest.js"),
				s = r("./node_modules/lodash/_baseXor.js"),
				a = r("./node_modules/lodash/isArrayLikeObject.js"),
				i = r("./node_modules/lodash/last.js"),
				u = n((function(e) {
					var o = i(e);
					return o = "function" == typeof o ? o : void 0, s(t(e, a), void 0, o)
				}));
			e.exports = u
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, o, r) {
			"use strict";
			o.__esModule = void 0, o.__esModule = !0;
			var t = r("./node_modules/ts-error/lib/helpers.js"),
				n = t.setPrototypeOf,
				s = t.getPrototypeOf,
				a = t.defineProperty,
				i = t.objectCreate,
				u = "[object Error]" === (new Error).toString(),
				d = "";

			function l(e) {
				var o, r = this.constructor,
					t = r.name || (null === (o = r.toString().match(/^function\s*([^\s(]+)/)) ? d || "Error" : o[1]),
					i = "Error" === t,
					c = i ? d : t,
					f = Error.apply(this, arguments);
				if (n(f, s(this)), !(f instanceof r && f instanceof l)) {
					f = this;
					Error.apply(this, arguments), a(f, "message", {
						configurable: !0,
						enumerable: !1,
						value: e,
						writable: !0
					})
				}
				if (a(f, "name", {
						configurable: !0,
						enumerable: !1,
						value: c,
						writable: !0
					}), Error.captureStackTrace && Error.captureStackTrace(f, i ? l : r), void 0 === f.stack) {
					var p = new Error(e);
					p.name = f.name, f.stack = p.stack
				}
				return u && a(f, "toString", {
					configurable: !0,
					enumerable: !1,
					value: function() {
						return (this.name || "Error") + (void 0 === this.message ? "" : ": " + this.message)
					},
					writable: !0
				}), f
			}
			d = l.name || "ExtendableError", l.prototype = i(Error.prototype, {
				constructor: {
					value: Error,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), o.ExtendableError = l, o.default = o.ExtendableError
		},
		"./node_modules/ts-error/lib/helpers.js": function(e, o, r) {
			"use strict";
			o.__esModule = void 0, o.__esModule = !0;
			var t = "function" == typeof Object.setPrototypeOf,
				n = "function" == typeof Object.getPrototypeOf,
				s = "function" == typeof Object.defineProperty,
				a = "function" == typeof Object.create,
				i = "function" == typeof Object.prototype.hasOwnProperty;
			o.setPrototypeOf = function(e, o) {
				t ? Object.setPrototypeOf(e, o) : e.__proto__ = o
			};
			o.getPrototypeOf = function(e) {
				return n ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var u = !1;
			o.defineProperty = function e(o, r, t) {
				if (s && !u) try {
					Object.defineProperty(o, r, t)
				} catch (n) {
					u = !0, e(o, r, t)
				} else o[r] = t.value
			};
			var d = function(e, o) {
				return i ? e.hasOwnProperty(e, o) : void 0 === e[o]
			};
			o.hasOwnProperty = d;
			o.objectCreate = function(e, o) {
				if (a) return Object.create(e, o);
				var r = function() {};
				r.prototype = e;
				var t = new r;
				if (void 0 === o) return t;
				if ("null" == typeof o) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof o)
					for (var n in o) d(o, n) && (t[n] = o[n].value);
				return t
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~Reddit.7833eb99f2c7701c2ac4.js.map