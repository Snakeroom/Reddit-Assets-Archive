// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.74cb80a8e039426cd579.js
// Retrieved at 4/14/2021, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return w
			}));
			var n = t("./node_modules/react/index.js"),
				o = t.n(n),
				s = t("./node_modules/react-dom/index.js"),
				i = (t("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, r) {
				return Array.isArray(e) && Array.isArray(r) && e.length === r.length ? e.some((function(t, n) {
					return a(e[n], r[n])
				})) : e !== r
			}
			var c = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var r, t = e.root || null, n = function(e) {
						var r = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							t = r[0],
							n = void 0 === t ? "0px" : t,
							o = r[1],
							s = void 0 === o ? n : o,
							a = r[2],
							c = void 0 === a ? n : a,
							d = r[3];
						return n + " " + s + " " + c + " " + (void 0 === d ? s : d)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = c.keys(); r = s.next().value;) {
					if (!(t !== r.root || n !== r.rootMargin || a(o, r.thresholds))) return r
				}
				return null
			}

			function u(e, r) {
				var t = c.get(e);
				if (t)
					for (var n, o = t.values(); n = o.next().value;)
						if (n.target === r.target) return n;
				return null
			}

			function l(e, r) {
				for (var t = 0; t < e.length; t++) {
					var n = u(r, e[t]);
					n && n.handleChange(e[t])
				}
			}

			function p(e) {
				return d(e) || new IntersectionObserver(l, e)
			}
			var h = t("./node_modules/invariant/browser.js"),
				v = t.n(h),
				f = {},
				b = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return f.errorReporter || function(e) {
								return v()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							f.errorReporter = e
						}
					}
				});

			function g(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function m(e, r, t) {
				return r in e ? Object.defineProperty(e, r, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[r] = t, e
			}
			var y = ["root", "rootMargin", "threshold"],
				_ = ["root", "rootMargin", "threshold", "disabled"],
				O = Object.prototype,
				x = O.hasOwnProperty,
				N = O.toString,
				j = function(e) {
					return y.reduce((function(r, t) {
						if (x.call(e, t)) {
							var n = "root" === t && "[object String]" === N.call(e[t]);
							r[t] = n ? document.querySelector(e[t]) : e[t]
						}
						return r
					}), {})
				},
				w = function(e) {
					var r, t;

					function n() {
						for (var r, t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
						return m(g(r = e.call.apply(e, [this].concat(n)) || this), "handleChange", (function(e) {
							r.props.onChange(e, r.externalUnobserve)
						})), m(g(r), "handleNode", (function(e) {
							var t = r.props.children;
							if (null != t) {
								var n = t.ref;
								n && ("function" == typeof n ? n(e) : "object" == typeof n && (n.current = e))
							}
							r.targetNode = e && Object(s.findDOMNode)(e)
						})), m(g(r), "observe", (function() {
							return null != r.props.children && !r.props.disabled && (r.targetNode ? (r.observer = p(j(r.props)), r.target = r.targetNode, e = g(r), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (b.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), m(g(r), "unobserve", (function(e) {
							! function(e, r) {
								if (c.has(e.observer)) {
									var t = c.get(e.observer);
									t.delete(e) && (t.size > 0 ? e.observer.unobserve(r) : (e.observer.disconnect(), c.delete(e.observer)))
								}
							}(g(r), e)
						})), m(g(r), "externalUnobserve", (function() {
							r.unobserve(r.targetNode)
						})), r
					}
					t = e, (r = n).prototype = Object.create(t.prototype), r.prototype.constructor = r, r.__proto__ = t;
					var i = n.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var r = this;
						this.prevTargetNode = this.targetNode;
						var t = _.some((function(t) {
							return a(r.props[t], e[t])
						}));
						return t && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), t
					}, i.componentDidUpdate = function(e, r, t) {
						var n = !1;
						t || (n = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (t || n) && this.observe()
					}, i.componentDidMount = function() {
						this.observe()
					}, i.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, i.render = function() {
						var e = this.props.children;
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, n
				}(o.a.Component);
			m(w, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, r, t) {
			"use strict";
			var n = t("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function s() {}
			s.resetWarningCache = o, e.exports = function() {
				function e(e, r, t, o, s, i) {
					if (i !== n) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function r() {
					return e
				}
				e.isRequired = e;
				var t = {
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
					resetWarningCache: o
				};
				return t.PropTypes = t, t
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, r, t) {
			e.exports = t("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, r, t) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "BlankPost", (function() {
				return u
			}));
			var n = t("./node_modules/react/index.js"),
				o = t.n(n),
				s = t("./src/reddit/components/AdViewability/index.tsx"),
				i = t("./src/reddit/connectors/PostViewable/index.ts"),
				a = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/contexts/Post/index.tsx");
			const d = Object(i.a)(null),
				u = ({
					className: e,
					post: r
				}) => r.isSponsored ? o.a.createElement(s.a, {
					post: r,
					trackDisplay: !0
				}, o.a.createElement("div", {
					className: Object(a.a)(e, `Blank ${r.id}`)
				})) : null;
			r.default = Object(c.b)(d(u))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.74cb80a8e039426cd579.js.map