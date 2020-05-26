// https://www.redditstatic.com/desktop2x/vendors~Reddit.2d1820f510d97f868c9c.js
// Retrieved at 5/26/2020, 12:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Reddit"], {
		"./node_modules/@r/google-tag-manager/compiled.js": function(e, o, r) {
			"use strict";
			Object.defineProperty(o, "__esModule", {
				value: !0
			}), o.setup = o.trigger = o.getLocation = void 0;
			var n = Object.assign || function(e) {
					for (var o = 1; o < arguments.length; o++) {
						var r = arguments[o];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				t = r("./node_modules/@r/google-tag-manager/node_modules/uuid/index.js"),
				s = function(e) {
					if (e && e.__esModule) return e;
					var o = {};
					if (null != e)
						for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (o[r] = e[r]);
					return o.default = e, o
				}(r("./node_modules/@r/frames/compiled.js"));
			var a = "gtm-" + (0, t.v4)(),
				i = !1,
				d = [],
				u = function() {
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
					var r = u();
					r && i ? (o && s.postMessage(r.contentWindow, "data.gtm", o), s.postMessage(r.contentWindow, "event.gtm", {
						event: e
					})) : function(e, o) {
						d.push({
							eventName: e,
							payload: o
						})
					}(e, o)
				},
				p = function() {
					if (u() && i) {
						var e = d.slice();
						d = [], e.forEach((function(e) {
							var o = e.eventName,
								r = e.payload;
							return c(o, r)
						}))
					}
				};
			o.setup = function(e) {
				var o = e.containerId,
					r = e.jailUrl,
					t = e.payload;
				if (o)
					if (r) {
						s.listen("gtm"), s.receiveMessageOnce("loaded.gtm", (function() {
							i = !0, s.stopListening("gtm")
						}));
						var d = document.createElement("iframe");
						d.style.display = "none", d.id = a, d.name = JSON.stringify(n({
							referrer: document.referrer
						}, l(), t)), d.src = r + "?id=" + o, d.onload = p, document.body.appendChild(d)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/index.js": function(e, o, r) {
			var n = r("./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js"),
				t = r("./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js"),
				s = t;
			s.v1 = n, s.v4 = t, e.exports = s
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, o) {
			for (var r = [], n = 0; n < 256; ++n) r[n] = (n + 256).toString(16).substr(1);
			e.exports = function(e, o) {
				var n = o || 0,
					t = r;
				return t[e[n++]] + t[e[n++]] + t[e[n++]] + t[e[n++]] + "-" + t[e[n++]] + t[e[n++]] + "-" + t[e[n++]] + t[e[n++]] + "-" + t[e[n++]] + t[e[n++]] + "-" + t[e[n++]] + t[e[n++]] + t[e[n++]] + t[e[n++]] + t[e[n++]] + t[e[n++]]
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, o, r) {
			(function(o) {
				var r, n = o.crypto || o.msCrypto;
				if (n && n.getRandomValues) {
					var t = new Uint8Array(16);
					r = function() {
						return n.getRandomValues(t), t
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
			var n = r("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				t = r("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				s = n(),
				a = [1 | s[0], s[1], s[2], s[3], s[4], s[5]],
				i = 16383 & (s[6] << 8 | s[7]),
				d = 0,
				u = 0;
			e.exports = function(e, o, r) {
				var n = o && r || 0,
					s = o || [],
					l = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					c = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					p = void 0 !== e.nsecs ? e.nsecs : u + 1,
					f = c - d + (p - u) / 1e4;
				if (f < 0 && void 0 === e.clockseq && (l = l + 1 & 16383), (f < 0 || c > d) && void 0 === e.nsecs && (p = 0), p >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				d = c, u = p, i = l;
				var m = (1e4 * (268435455 & (c += 122192928e5)) + p) % 4294967296;
				s[n++] = m >>> 24 & 255, s[n++] = m >>> 16 & 255, s[n++] = m >>> 8 & 255, s[n++] = 255 & m;
				var h = c / 4294967296 * 1e4 & 268435455;
				s[n++] = h >>> 8 & 255, s[n++] = 255 & h, s[n++] = h >>> 24 & 15 | 16, s[n++] = h >>> 16 & 255, s[n++] = l >>> 8 | 128, s[n++] = 255 & l;
				for (var v = e.node || a, g = 0; g < 6; ++g) s[n + g] = v[g];
				return o || t(s)
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js": function(e, o, r) {
			var n = r("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				t = r("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, o, r) {
				var s = o && r || 0;
				"string" == typeof e && (o = "binary" == e ? new Array(16) : null, e = null);
				var a = (e = e || {}).random || (e.rng || n)();
				if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, o)
					for (var i = 0; i < 16; ++i) o[s + i] = a[i];
				return o || t(a)
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, o, r) {
			"use strict";
			r.d(o, "a", (function() {
				return S
			}));
			var n = r("./node_modules/react/index.js"),
				t = r.n(n),
				s = r("./node_modules/react-dom/index.js"),
				a = (r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function i(e, o) {
				return Array.isArray(e) && Array.isArray(o) && e.length === o.length ? e.some((function(r, n) {
					return i(e[n], o[n])
				})) : e !== o
			}
			var d = new Map;

			function u(e) {
				void 0 === e && (e = {});
				for (var o, r = e.root || null, n = function(e) {
						var o = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							r = o[0],
							n = void 0 === r ? "0px" : r,
							t = o[1],
							s = void 0 === t ? n : t,
							i = o[2],
							d = void 0 === i ? n : i,
							u = o[3];
						return n + " " + s + " " + d + " " + (void 0 === u ? s : u)
					}(e.rootMargin), t = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = d.keys(); o = s.next().value;) {
					if (!(r !== o.root || n !== o.rootMargin || i(t, o.thresholds))) return o
				}
				return null
			}

			function l(e, o) {
				var r = d.get(e);
				if (r)
					for (var n, t = r.values(); n = t.next().value;)
						if (n.target === o.target) return n;
				return null
			}

			function c(e, o) {
				for (var r = 0; r < e.length; r++) {
					var n = l(o, e[r]);
					n && n.handleChange(e[r])
				}
			}

			function p(e) {
				return u(e) || new IntersectionObserver(c, e)
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
				x = function(e) {
					return b.reduce((function(o, r) {
						if (O.call(e, r)) {
							var n = "root" === r && "[object String]" === w.call(e[r]);
							o[r] = n ? document.querySelector(e[r]) : e[r]
						}
						return o
					}), {})
				},
				S = function(e) {
					var o, r;

					function n() {
						for (var o, r = arguments.length, n = new Array(r), t = 0; t < r; t++) n[t] = arguments[t];
						return _(g(o = e.call.apply(e, [this].concat(n)) || this), "handleChange", (function(e) {
							o.props.onChange(e, o.externalUnobserve)
						})), _(g(o), "handleNode", (function(e) {
							var r = o.props.children;
							if (null != r) {
								var n = r.ref;
								n && ("function" == typeof n ? n(e) : "object" == typeof n && (n.current = e))
							}
							o.targetNode = e && Object(s.findDOMNode)(e)
						})), _(g(o), "observe", (function() {
							return null != o.props.children && !o.props.disabled && (o.targetNode ? (o.observer = p(x(o.props)), o.target = o.targetNode, e = g(o), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (v.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), _(g(o), "unobserve", (function(e) {
							! function(e, o) {
								if (d.has(e.observer)) {
									var r = d.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(o) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(g(o), e)
						})), _(g(o), "externalUnobserve", (function() {
							o.unobserve(o.targetNode)
						})), o
					}
					r = e, (o = n).prototype = Object.create(r.prototype), o.prototype.constructor = o, o.__proto__ = r;
					var a = n.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var o = this;
						this.prevTargetNode = this.targetNode;
						var r = y.some((function(r) {
							return i(o.props[r], e[r])
						}));
						return r && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), r
					}, a.componentDidUpdate = function(e, o, r) {
						var n = !1;
						r || (n = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (r || n) && this.observe()
					}, a.componentDidMount = function() {
						this.observe()
					}, a.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, a.render = function() {
						var e = this.props.children;
						return null != e ? t.a.cloneElement(t.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, n
				}(t.a.Component);
			_(S, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, o, r) {
			"use strict";
			var n = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function t() {}

			function s() {}
			s.resetWarningCache = t, e.exports = function() {
				function e(e, o, r, t, s, a) {
					if (a !== n) {
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
					resetWarningCache: t
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
					n = e;
				return {
					getState: function() {
						return n
					},
					setState: function(e) {
						n = e;
						for (var r = Object.keys(o), t = 0, s = r.length; t < s; t++) o[r[t]] && o[r[t]](e)
					},
					subscribe: function(e) {
						if ("function" != typeof e) throw new Error("listener must be a function.");
						var n = r;
						return o[n] = e, r += 1, n
					},
					unsubscribe: function(e) {
						o[e] = void 0
					}
				}
			}
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, o) {
			e.exports = function(e, o) {
				for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
					if (!o(e[r], r, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_arraySampleSize.js": function(e, o, r) {
			var n = r("./node_modules/lodash/_baseClamp.js"),
				t = r("./node_modules/lodash/_copyArray.js"),
				s = r("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, o) {
				return s(t(e), n(o, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, o) {
			e.exports = function(e, o, r) {
				return e == e && (void 0 !== r && (e = e <= r ? e : r), void 0 !== o && (e = e >= o ? e : o)), e
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, o, r) {
			var n = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, o) {
				var r = !0;
				return n(e, (function(e, n, t) {
					return r = !!o(e, n, t)
				})), r
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, o) {
			var r = Math.floor,
				n = Math.random;
			e.exports = function(e, o) {
				return e + r(n() * (o - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, o, r) {
			var n = r("./node_modules/lodash/_baseClamp.js"),
				t = r("./node_modules/lodash/_shuffleSelf.js"),
				s = r("./node_modules/lodash/values.js");
			e.exports = function(e, o) {
				var r = s(e);
				return t(r, n(o, 0, r.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, o, r) {
			var n = r("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, o) {
				var r = -1,
					t = e.length,
					s = t - 1;
				for (o = void 0 === o ? t : o; ++r < o;) {
					var a = n(r, s),
						i = e[a];
					e[a] = e[r], e[r] = i
				}
				return e.length = o, e
			}
		},
		"./node_modules/lodash/every.js": function(e, o, r) {
			var n = r("./node_modules/lodash/_arrayEvery.js"),
				t = r("./node_modules/lodash/_baseEvery.js"),
				s = r("./node_modules/lodash/_baseIteratee.js"),
				a = r("./node_modules/lodash/isArray.js"),
				i = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, o, r) {
				var d = a(e) ? n : t;
				return r && i(e, o, r) && (o = void 0), d(e, s(o, 3))
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, o, r) {
			var n = r("./node_modules/lodash/_arraySampleSize.js"),
				t = r("./node_modules/lodash/_baseSampleSize.js"),
				s = r("./node_modules/lodash/isArray.js"),
				a = r("./node_modules/lodash/_isIterateeCall.js"),
				i = r("./node_modules/lodash/toInteger.js");
			e.exports = function(e, o, r) {
				return o = (r ? a(e, o, r) : void 0 === o) ? 1 : i(o), (s(e) ? n : t)(e, o)
			}
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, o, r) {
			"use strict";
			r.d(o, "a", (function() {
				return c
			}));
			var n = r("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),
				t = r("./node_modules/react/index.js"),
				s = r.n(t),
				a = r("./node_modules/react-router/esm/react-router.js"),
				i = r("./node_modules/history/esm/history.js"),
				d = (r("./node_modules/react-router-dom/node_modules/prop-types/index.js"), r("./node_modules/@babel/runtime/helpers/esm/extends.js")),
				u = r("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),
				l = r("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			s.a.Component;
			s.a.Component;
			var c = function(e) {
				function o() {
					return e.apply(this, arguments) || this
				}
				Object(n.a)(o, e);
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
						n = (o.replace, o.to),
						t = Object(u.a)(o, ["innerRef", "replace", "to"]);
					return s.a.createElement(a.g.Consumer, null, (function(o) {
						o || Object(l.default)(!1);
						var a = "string" == typeof n ? Object(i.c)(n, null, null, o.location) : n,
							u = a ? o.history.createHref(a) : "";
						return s.a.createElement("a", Object(d.a)({}, t, {
							onClick: function(r) {
								return e.handleClick(r, o.history)
							},
							href: u,
							ref: r
						}))
					}))
				}, o
			}(s.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, o, r) {
			"use strict";
			var n = r("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function t() {}
			e.exports = function() {
				function e(e, o, r, t, s, a) {
					if (a !== n) {
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
				return r.checkPropTypes = t, r.PropTypes = r, r
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
//# sourceMappingURL=vendors~Reddit.2d1820f510d97f868c9c.js.map