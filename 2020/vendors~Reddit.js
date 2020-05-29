// https://www.redditstatic.com/desktop2x/vendors~Reddit.0b6ae6cd1faacefd4ecd.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Reddit"], {
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
				p = function() {
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
						}, l(), n)), u.src = r + "?id=" + o, u.onload = p, document.body.appendChild(u)
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
					p = void 0 !== e.nsecs ? e.nsecs : d + 1,
					f = c - u + (p - d) / 1e4;
				if (f < 0 && void 0 === e.clockseq && (l = l + 1 & 16383), (f < 0 || c > u) && void 0 === e.nsecs && (p = 0), p >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				u = c, d = p, i = l;
				var m = (1e4 * (268435455 & (c += 122192928e5)) + p) % 4294967296;
				s[t++] = m >>> 24 & 255, s[t++] = m >>> 16 & 255, s[t++] = m >>> 8 & 255, s[t++] = 255 & m;
				var h = c / 4294967296 * 1e4 & 268435455;
				s[t++] = h >>> 8 & 255, s[t++] = 255 & h, s[t++] = h >>> 24 & 15 | 16, s[t++] = h >>> 16 & 255, s[t++] = l >>> 8 | 128, s[t++] = 255 & l;
				for (var v = e.node || a, g = 0; g < 6; ++g) s[t + g] = v[g];
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
				return T
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

			function p(e) {
				return d(e) || new IntersectionObserver(c, e)
			}
			var f = r("./node_modules/invariant/browser.js"),
				m = r.n(f),
				h = {},
				v = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return h.errorReporter || function(e) {
								return m()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							h.errorReporter = e
						}
					}
				});

			function g(e) {
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
				S = function(e) {
					return b.reduce((function(o, r) {
						if (O.call(e, r)) {
							var t = "root" === r && "[object String]" === w.call(e[r]);
							o[r] = t ? document.querySelector(e[r]) : e[r]
						}
						return o
					}), {})
				},
				T = function(e) {
					var o, r;

					function t() {
						for (var o, r = arguments.length, t = new Array(r), n = 0; n < r; n++) t[n] = arguments[n];
						return _(g(o = e.call.apply(e, [this].concat(t)) || this), "handleChange", (function(e) {
							o.props.onChange(e, o.externalUnobserve)
						})), _(g(o), "handleNode", (function(e) {
							var r = o.props.children;
							if (null != r) {
								var t = r.ref;
								t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e))
							}
							o.targetNode = e && Object(s.findDOMNode)(e)
						})), _(g(o), "observe", (function() {
							return null != o.props.children && !o.props.disabled && (o.targetNode ? (o.observer = p(S(o.props)), o.target = o.targetNode, e = g(o), u.has(e.observer) || u.set(e.observer, new Set), u.get(e.observer).add(e), e.observer.observe(e.target), !0) : (v.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), _(g(o), "unobserve", (function(e) {
							! function(e, o) {
								if (u.has(e.observer)) {
									var r = u.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(o) : (e.observer.disconnect(), u.delete(e.observer)))
								}
							}(g(o), e)
						})), _(g(o), "externalUnobserve", (function() {
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
			_(T, "displayName", "IntersectionObserver")
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
		"./node_modules/brcast/dist/brcast.es.js": function(e, o, r) {
			"use strict";
			o.a = function(e) {
				var o = {},
					r = 1,
					t = e;
				return {
					getState: function() {
						return t
					},
					setState: function(e) {
						t = e;
						for (var r = Object.keys(o), n = 0, s = r.length; n < s; n++) o[r[n]] && o[r[n]](e)
					},
					subscribe: function(e) {
						if ("function" != typeof e) throw new Error("listener must be a function.");
						var t = r;
						return o[t] = e, r += 1, t
					},
					unsubscribe: function(e) {
						o[e] = void 0
					}
				}
			}
		},
		"./node_modules/lodash/_arraySampleSize.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_baseClamp.js"),
				n = r("./node_modules/lodash/_copyArray.js"),
				s = r("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, o) {
				return s(n(e), t(o, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, o) {
			e.exports = function(e, o, r) {
				return e == e && (void 0 !== r && (e = e <= r ? e : r), void 0 !== o && (e = e >= o ? e : o)), e
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, o) {
			var r = Math.floor,
				t = Math.random;
			e.exports = function(e, o) {
				return e + r(t() * (o - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_baseClamp.js"),
				n = r("./node_modules/lodash/_shuffleSelf.js"),
				s = r("./node_modules/lodash/values.js");
			e.exports = function(e, o) {
				var r = s(e);
				return n(r, t(o, 0, r.length))
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
		"./node_modules/lodash/sampleSize.js": function(e, o, r) {
			var t = r("./node_modules/lodash/_arraySampleSize.js"),
				n = r("./node_modules/lodash/_baseSampleSize.js"),
				s = r("./node_modules/lodash/isArray.js"),
				a = r("./node_modules/lodash/_isIterateeCall.js"),
				i = r("./node_modules/lodash/toInteger.js");
			e.exports = function(e, o, r) {
				return o = (r ? a(e, o, r) : void 0 === o) ? 1 : i(o), (s(e) ? t : n)(e, o)
			}
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, o, r) {
			"use strict";
			r.d(o, "a", (function() {
				return c
			}));
			var t = r("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-router/esm/react-router.js"),
				i = r("./node_modules/history/esm/history.js"),
				u = (r("./node_modules/react-router-dom/node_modules/prop-types/index.js"), r("./node_modules/@babel/runtime/helpers/esm/extends.js")),
				d = r("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),
				l = r("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			s.a.Component;
			s.a.Component;
			var c = function(e) {
				function o() {
					return e.apply(this, arguments) || this
				}
				Object(t.a)(o, e);
				var r = o.prototype;
				return r.handleClick = function(e, o) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (r) {
						throw e.preventDefault(), r
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? o.replace : o.push)(this.props.to))
				}, r.render = function() {
					var e = this,
						o = this.props,
						r = o.innerRef,
						t = (o.replace, o.to),
						n = Object(d.a)(o, ["innerRef", "replace", "to"]);
					return s.a.createElement(a.g.Consumer, null, (function(o) {
						o || Object(l.default)(!1);
						var a = "string" == typeof t ? Object(i.c)(t, null, null, o.location) : t,
							d = a ? o.history.createHref(a) : "";
						return s.a.createElement("a", Object(u.a)({}, n, {
							onClick: function(r) {
								return e.handleClick(r, o.history)
							},
							href: d,
							ref: r
						}))
					}))
				}, o
			}(s.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, o, r) {
			"use strict";
			var t = r("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
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
					instanceOf: o,
					node: e,
					objectOf: o,
					oneOf: o,
					oneOfType: o,
					shape: o,
					exact: o
				};
				return r.checkPropTypes = n, r.PropTypes = r, r
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, o, r) {
			e.exports = r("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, o, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		}
	}
]);
//# sourceMappingURL=vendors~Reddit.0b6ae6cd1faacefd4ecd.js.map