// https://www.redditstatic.com/desktop2x/vendors~Reddit.30e875af1e0a7058203f.js
// Retrieved at 6/10/2020, 3:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Reddit"], {
		"./node_modules/@r/google-tag-manager/compiled.js": function(e, r, o) {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.setup = r.trigger = r.getLocation = void 0;
			var t = Object.assign || function(e) {
					for (var r = 1; r < arguments.length; r++) {
						var o = arguments[r];
						for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
					}
					return e
				},
				n = o("./node_modules/@r/google-tag-manager/node_modules/uuid/index.js"),
				s = function(e) {
					if (e && e.__esModule) return e;
					var r = {};
					if (null != e)
						for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
					return r.default = e, r
				}(o("./node_modules/@r/frames/compiled.js"));
			var a = "gtm-" + (0, n.v4)(),
				i = !1,
				u = [],
				d = function() {
					var e = document.getElementById(a);
					return e && e.contentWindow ? e : null
				},
				c = r.getLocation = function() {
					return {
						href: location.href,
						hostname: location.hostname,
						origin: location.origin,
						pathname: location.pathname || "/",
						search: location.search.replace(/^\?/, ""),
						hash: location.hash.replace(/^#/, "")
					}
				},
				l = r.trigger = function(e, r) {
					var o = d();
					o && i ? (r && s.postMessage(o.contentWindow, "data.gtm", r), s.postMessage(o.contentWindow, "event.gtm", {
						event: e
					})) : function(e, r) {
						u.push({
							eventName: e,
							payload: r
						})
					}(e, r)
				},
				p = function() {
					if (d() && i) {
						var e = u.slice();
						u = [], e.forEach((function(e) {
							var r = e.eventName,
								o = e.payload;
							return l(r, o)
						}))
					}
				};
			r.setup = function(e) {
				var r = e.containerId,
					o = e.jailUrl,
					n = e.payload;
				if (r)
					if (o) {
						s.listen("gtm"), s.receiveMessageOnce("loaded.gtm", (function() {
							i = !0, s.stopListening("gtm")
						}));
						var u = document.createElement("iframe");
						u.style.display = "none", u.id = a, u.name = JSON.stringify(t({
							referrer: document.referrer
						}, c(), n)), u.src = o + "?id=" + r, u.onload = p, document.body.appendChild(u)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/index.js": function(e, r, o) {
			var t = o("./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js"),
				n = o("./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js"),
				s = n;
			s.v1 = t, s.v4 = n, e.exports = s
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, r) {
			for (var o = [], t = 0; t < 256; ++t) o[t] = (t + 256).toString(16).substr(1);
			e.exports = function(e, r) {
				var t = r || 0,
					n = o;
				return n[e[t++]] + n[e[t++]] + n[e[t++]] + n[e[t++]] + "-" + n[e[t++]] + n[e[t++]] + "-" + n[e[t++]] + n[e[t++]] + "-" + n[e[t++]] + n[e[t++]] + "-" + n[e[t++]] + n[e[t++]] + n[e[t++]] + n[e[t++]] + n[e[t++]] + n[e[t++]]
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, r, o) {
			(function(r) {
				var o, t = r.crypto || r.msCrypto;
				if (t && t.getRandomValues) {
					var n = new Uint8Array(16);
					o = function() {
						return t.getRandomValues(n), n
					}
				}
				if (!o) {
					var s = new Array(16);
					o = function() {
						for (var e, r = 0; r < 16; r++) 0 == (3 & r) && (e = 4294967296 * Math.random()), s[r] = e >>> ((3 & r) << 3) & 255;
						return s
					}
				}
				e.exports = o
			}).call(this, o("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js": function(e, r, o) {
			var t = o("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				n = o("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				s = t(),
				a = [1 | s[0], s[1], s[2], s[3], s[4], s[5]],
				i = 16383 & (s[6] << 8 | s[7]),
				u = 0,
				d = 0;
			e.exports = function(e, r, o) {
				var t = r && o || 0,
					s = r || [],
					c = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					l = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					p = void 0 !== e.nsecs ? e.nsecs : d + 1,
					f = l - u + (p - d) / 1e4;
				if (f < 0 && void 0 === e.clockseq && (c = c + 1 & 16383), (f < 0 || l > u) && void 0 === e.nsecs && (p = 0), p >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				u = l, d = p, i = c;
				var m = (1e4 * (268435455 & (l += 122192928e5)) + p) % 4294967296;
				s[t++] = m >>> 24 & 255, s[t++] = m >>> 16 & 255, s[t++] = m >>> 8 & 255, s[t++] = 255 & m;
				var g = l / 4294967296 * 1e4 & 268435455;
				s[t++] = g >>> 8 & 255, s[t++] = 255 & g, s[t++] = g >>> 24 & 15 | 16, s[t++] = g >>> 16 & 255, s[t++] = c >>> 8 | 128, s[t++] = 255 & c;
				for (var h = e.node || a, v = 0; v < 6; ++v) s[t + v] = h[v];
				return r || n(s)
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js": function(e, r, o) {
			var t = o("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				n = o("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, r, o) {
				var s = r && o || 0;
				"string" == typeof e && (r = "binary" == e ? new Array(16) : null, e = null);
				var a = (e = e || {}).random || (e.rng || t)();
				if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, r)
					for (var i = 0; i < 16; ++i) r[s + i] = a[i];
				return r || n(a)
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, r, o) {
			"use strict";
			o.d(r, "a", (function() {
				return x
			}));
			var t = o("./node_modules/react/index.js"),
				n = o.n(t),
				s = o("./node_modules/react-dom/index.js"),
				a = (o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function i(e, r) {
				return Array.isArray(e) && Array.isArray(r) && e.length === r.length ? e.some((function(o, t) {
					return i(e[t], r[t])
				})) : e !== r
			}
			var u = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var r, o = e.root || null, t = function(e) {
						var r = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							o = r[0],
							t = void 0 === o ? "0px" : o,
							n = r[1],
							s = void 0 === n ? t : n,
							i = r[2],
							u = void 0 === i ? t : i,
							d = r[3];
						return t + " " + s + " " + u + " " + (void 0 === d ? s : d)
					}(e.rootMargin), n = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = u.keys(); r = s.next().value;) {
					if (!(o !== r.root || t !== r.rootMargin || i(n, r.thresholds))) return r
				}
				return null
			}

			function c(e, r) {
				var o = u.get(e);
				if (o)
					for (var t, n = o.values(); t = n.next().value;)
						if (t.target === r.target) return t;
				return null
			}

			function l(e, r) {
				for (var o = 0; o < e.length; o++) {
					var t = c(r, e[o]);
					t && t.handleChange(e[o])
				}
			}

			function p(e) {
				return d(e) || new IntersectionObserver(l, e)
			}
			var f = o("./node_modules/invariant/browser.js"),
				m = o.n(f),
				g = {},
				h = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return g.errorReporter || function(e) {
								return m()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							g.errorReporter = e
						}
					}
				});

			function v(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function b(e, r, o) {
				return r in e ? Object.defineProperty(e, r, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[r] = o, e
			}
			var y = ["root", "rootMargin", "threshold"],
				_ = ["root", "rootMargin", "threshold", "disabled"],
				j = Object.prototype,
				O = j.hasOwnProperty,
				w = j.toString,
				T = function(e) {
					return y.reduce((function(r, o) {
						if (O.call(e, o)) {
							var t = "root" === o && "[object String]" === w.call(e[o]);
							r[o] = t ? document.querySelector(e[o]) : e[o]
						}
						return r
					}), {})
				},
				x = function(e) {
					var r, o;

					function t() {
						for (var r, o = arguments.length, t = new Array(o), n = 0; n < o; n++) t[n] = arguments[n];
						return b(v(r = e.call.apply(e, [this].concat(t)) || this), "handleChange", (function(e) {
							r.props.onChange(e, r.externalUnobserve)
						})), b(v(r), "handleNode", (function(e) {
							var o = r.props.children;
							if (null != o) {
								var t = o.ref;
								t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e))
							}
							r.targetNode = e && Object(s.findDOMNode)(e)
						})), b(v(r), "observe", (function() {
							return null != r.props.children && !r.props.disabled && (r.targetNode ? (r.observer = p(T(r.props)), r.target = r.targetNode, e = v(r), u.has(e.observer) || u.set(e.observer, new Set), u.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), b(v(r), "unobserve", (function(e) {
							! function(e, r) {
								if (u.has(e.observer)) {
									var o = u.get(e.observer);
									o.delete(e) && (o.size > 0 ? e.observer.unobserve(r) : (e.observer.disconnect(), u.delete(e.observer)))
								}
							}(v(r), e)
						})), b(v(r), "externalUnobserve", (function() {
							r.unobserve(r.targetNode)
						})), r
					}
					o = e, (r = t).prototype = Object.create(o.prototype), r.prototype.constructor = r, r.__proto__ = o;
					var a = t.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var r = this;
						this.prevTargetNode = this.targetNode;
						var o = _.some((function(o) {
							return i(r.props[o], e[o])
						}));
						return o && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), o
					}, a.componentDidUpdate = function(e, r, o) {
						var t = !1;
						o || (t = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (o || t) && this.observe()
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
			b(x, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, r, o) {
			"use strict";
			var t = o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function s() {}
			s.resetWarningCache = n, e.exports = function() {
				function e(e, r, o, n, s, a) {
					if (a !== t) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function r() {
					return e
				}
				e.isRequired = e;
				var o = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: r,
					element: e,
					elementType: e,
					instanceOf: r,
					node: e,
					objectOf: r,
					oneOf: r,
					oneOfType: r,
					shape: r,
					exact: r,
					checkPropTypes: s,
					resetWarningCache: n
				};
				return o.PropTypes = o, o
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, r, o) {
			e.exports = o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, r, o) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/brcast/dist/brcast.es.js": function(e, r, o) {
			"use strict";
			r.a = function(e) {
				var r = {},
					o = 1,
					t = e;
				return {
					getState: function() {
						return t
					},
					setState: function(e) {
						t = e;
						for (var o = Object.keys(r), n = 0, s = o.length; n < s; n++) r[o[n]] && r[o[n]](e)
					},
					subscribe: function(e) {
						if ("function" != typeof e) throw new Error("listener must be a function.");
						var t = o;
						return r[t] = e, o += 1, t
					},
					unsubscribe: function(e) {
						r[e] = void 0
					}
				}
			}
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, r, o) {
			"use strict";
			o.d(r, "a", (function() {
				return l
			}));
			var t = o("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),
				n = o("./node_modules/react/index.js"),
				s = o.n(n),
				a = o("./node_modules/react-router/esm/react-router.js"),
				i = o("./node_modules/history/esm/history.js"),
				u = (o("./node_modules/react-router-dom/node_modules/prop-types/index.js"), o("./node_modules/@babel/runtime/helpers/esm/extends.js")),
				d = o("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),
				c = o("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			s.a.Component;
			s.a.Component;
			var l = function(e) {
				function r() {
					return e.apply(this, arguments) || this
				}
				Object(t.a)(r, e);
				var o = r.prototype;
				return o.handleClick = function(e, r) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (o) {
						throw e.preventDefault(), o
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? r.replace : r.push)(this.props.to))
				}, o.render = function() {
					var e = this,
						r = this.props,
						o = r.innerRef,
						t = (r.replace, r.to),
						n = Object(d.a)(r, ["innerRef", "replace", "to"]);
					return s.a.createElement(a.g.Consumer, null, (function(r) {
						r || Object(c.default)(!1);
						var a = "string" == typeof t ? Object(i.c)(t, null, null, r.location) : t,
							d = a ? r.history.createHref(a) : "";
						return s.a.createElement("a", Object(u.a)({}, n, {
							onClick: function(o) {
								return e.handleClick(o, r.history)
							},
							href: d,
							ref: o
						}))
					}))
				}, r
			}(s.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, r, o) {
			"use strict";
			var t = o("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
				function e(e, r, o, n, s, a) {
					if (a !== t) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function r() {
					return e
				}
				e.isRequired = e;
				var o = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: r,
					element: e,
					instanceOf: r,
					node: e,
					objectOf: r,
					oneOf: r,
					oneOfType: r,
					shape: r,
					exact: r
				};
				return o.checkPropTypes = n, o.PropTypes = o, o
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, r, o) {
			e.exports = o("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, r, o) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		}
	}
]);
//# sourceMappingURL=vendors~Reddit.30e875af1e0a7058203f.js.map