// https://www.redditstatic.com/desktop2x/vendors~ModerationPages.48ff273097a1a14020c1.js
// Retrieved at 3/3/2020, 6:36:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~ModerationPages"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, o) {
			var n, r, s;
			r = [t, e], void 0 === (s = "function" == typeof(n = function(e, t) {
				"use strict";
				var o, n, r = "function" == typeof Map ? new Map : (o = [], n = [], {
						has: function(e) {
							return o.indexOf(e) > -1
						},
						get: function(e) {
							return n[o.indexOf(e)]
						},
						set: function(e, t) {
							-1 === o.indexOf(e) && (o.push(e), n.push(t))
						},
						delete: function(e) {
							var t = o.indexOf(e);
							t > -1 && (o.splice(t, 1), n.splice(t, 1))
						}
					}),
					s = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (l) {
					s = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function a(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !r.has(e)) {
						var t, o = null,
							n = e.clientWidth,
							a = null,
							i = function() {
								e.clientWidth !== n && c()
							},
							d = function(t) {
								window.removeEventListener("resize", i, !1), e.removeEventListener("input", c, !1), e.removeEventListener("keyup", c, !1), e.removeEventListener("autosize:destroy", d, !1), e.removeEventListener("autosize:update", c, !1), Object.keys(t).forEach((function(o) {
									e.style[o] = t[o]
								})), r.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", d, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", c, !1), window.addEventListener("resize", i, !1), e.addEventListener("input", c, !1), e.addEventListener("autosize:update", c, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", r.set(e, {
							destroy: d,
							update: c
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), o = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(o) && (o = 0), c()
					}

					function u(t) {
						var o = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = o, e.style.overflowY = t
					}

					function l() {
						var t = e.style.height,
							r = function(e) {
								for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
									node: e.parentNode,
									scrollTop: e.parentNode.scrollTop
								}), e = e.parentNode;
								return t
							}(e),
							s = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var a = e.scrollHeight + o;
						0 !== e.scrollHeight ? (e.style.height = a + "px", n = e.clientWidth, r.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), s && (document.documentElement.scrollTop = s)) : e.style.height = t
					}

					function c() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							o = window.getComputedStyle(e, null),
							n = "content-box" === o.boxSizing ? Math.round(parseFloat(o.height)) : e.offsetHeight;
						if (n !== t ? "hidden" === o.overflowY && (u("scroll"), l(), n = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== o.overflowY && (u("hidden"), l(), n = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), a !== n) {
							a = n;
							var r = s("autosize:resized");
							try {
								e.dispatchEvent(r)
							} catch (i) {}
						}
					}
				}

				function i(e) {
					var t = r.get(e);
					t && t.destroy()
				}

				function d(e) {
					var t = r.get(e);
					t && t.update()
				}
				var u = null;
				"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((u = function(e) {
					return e
				}).destroy = function(e) {
					return e
				}, u.update = function(e) {
					return e
				}) : ((u = function(e, t) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
						return a(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], i), e
				}, u.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], d), e
				}), t.exports = u
			}) ? n.apply(t, r) : n) || (e.exports = s)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, o) {
				return ((o = window.getComputedStyle) ? o(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/line-height/lib/line-height.js": function(e, t, o) {
			var n = o("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = n(e, "line-height"),
					o = parseFloat(t, 10);
				if (t === o + "") {
					var r = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = n(e, "line-height"), o = parseFloat(t, 10), r ? e.style.lineHeight = r : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (o *= 4, o /= 3) : -1 !== t.indexOf("mm") ? (o *= 96, o /= 25.4) : -1 !== t.indexOf("cm") ? (o *= 96, o /= 2.54) : -1 !== t.indexOf("in") ? o *= 96 : -1 !== t.indexOf("pc") && (o *= 16), o = Math.round(o), "normal" === t) {
					var s = e.nodeName,
						a = document.createElement(s);
					a.innerHTML = "&nbsp;", "TEXTAREA" === s.toUpperCase() && a.setAttribute("rows", "1");
					var i = n(e, "font-size");
					a.style.fontSize = i, a.style.padding = "0px", a.style.border = "0px";
					var d = document.body;
					d.appendChild(a), o = a.offsetHeight, d.removeChild(a)
				}
				return o
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var o = [];
				return n(e, (function(e, n, r) {
					t(e, n, r) && o.push(e)
				})), o
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, o) {
				var n;
				return o(e, (function(e, o, r) {
					if (t(e, o, r)) return n = o, !1
				})), n
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var o = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, r, s) {
				for (var a = -1, i = n(o((t - e) / (r || 1)), 0), d = Array(i); i--;) d[s ? i : ++a] = e, e += r;
				return d
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseRange.js"),
				r = o("./node_modules/lodash/_isIterateeCall.js"),
				s = o("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, o, a) {
					return a && "number" != typeof a && r(t, o, a) && (o = a = void 0), t = s(t), void 0 === o ? (o = t, t = 0) : o = s(o), a = void 0 === a ? t < o ? 1 : -1 : s(a), n(t, o, a, e)
				}
			}
		},
		"./node_modules/lodash/countBy.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseAssignValue.js"),
				r = o("./node_modules/lodash/_createAggregator.js"),
				s = Object.prototype.hasOwnProperty,
				a = r((function(e, t, o) {
					s.call(e, o) ? ++e[o] : n(e, o, 1)
				}));
			e.exports = a
		},
		"./node_modules/lodash/filter.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayFilter.js"),
				r = o("./node_modules/lodash/_baseFilter.js"),
				s = o("./node_modules/lodash/_baseIteratee.js"),
				a = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (a(e) ? n : r)(e, s(t, 3))
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseFindKey.js"),
				r = o("./node_modules/lodash/_baseForOwn.js"),
				s = o("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return n(e, s(t, 3), r)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseFlatten.js"),
				r = o("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(r(e, t), 1)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseIndexOf.js"),
				r = o("./node_modules/lodash/isArrayLike.js"),
				s = o("./node_modules/lodash/isString.js"),
				a = o("./node_modules/lodash/toInteger.js"),
				i = o("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, o, u) {
				e = r(e) ? e : i(e), o = o && !u ? a(o) : 0;
				var l = e.length;
				return o < 0 && (o = d(l + o, 0)), s(e) ? o <= l && e.indexOf(t, o) > -1 : !!l && n(e, t, o) > -1
			}
		},
		"./node_modules/lodash/range.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/times.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseTimes.js"),
				r = o("./node_modules/lodash/_castFunction.js"),
				s = o("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = s(e)) < 1 || e > a) return [];
				var o = i,
					u = d(e, i);
				t = r(t), e -= i;
				for (var l = n(u, t); ++o < e;) t(o);
				return l
			}
		},
		"./node_modules/lodash/transform.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayEach.js"),
				r = o("./node_modules/lodash/_baseCreate.js"),
				s = o("./node_modules/lodash/_baseForOwn.js"),
				a = o("./node_modules/lodash/_baseIteratee.js"),
				i = o("./node_modules/lodash/_getPrototype.js"),
				d = o("./node_modules/lodash/isArray.js"),
				u = o("./node_modules/lodash/isBuffer.js"),
				l = o("./node_modules/lodash/isFunction.js"),
				c = o("./node_modules/lodash/isObject.js"),
				p = o("./node_modules/lodash/isTypedArray.js");
			e.exports = function(e, t, o) {
				var f = d(e),
					h = f || u(e) || p(e);
				if (t = a(t, 4), null == o) {
					var m = e && e.constructor;
					o = h ? f ? new m : [] : c(e) && l(m) ? r(i(e)) : {}
				}
				return (h ? n : s)(e, (function(e, n, r) {
					return t(o, e, n, r)
				})), o
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, o) {
			var n = o("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n, r, s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				},
				a = function() {
					function e(e, t) {
						for (var o = 0; o < t.length; o++) {
							var n = t[o];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, o, n) {
						return o && e(t.prototype, o), n && e(t, n), t
					}
				}(),
				i = c(o("./node_modules/react/index.js")),
				d = c(o("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				u = c(o("./node_modules/autosize/dist/autosize.js")),
				l = c(o("./node_modules/line-height/lib/line-height.js"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function p(e, t) {
				var o = {};
				for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
				return o
			}

			function f(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var h = (r = n = function(e) {
				function t() {
					var e, o, n;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i];
					return o = n = f(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.state = {
						lineHeight: null
					}, n.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), n.textarea.dispatchEvent(t)
					}, n.getValue = function(e) {
						var t = e.valueLink,
							o = e.value;
						return t ? t.value : o
					}, n.updateLineHeight = function() {
						n.setState({
							lineHeight: (0, l.default)(n.textarea)
						})
					}, n.onChange = function(e) {
						n.currentValue = e.target.value, n.props.onChange && n.props.onChange(e)
					}, n.saveDOMNodeRef = function(e) {
						var t = n.props.innerRef;
						t && t(e), n.textarea = e
					}, n.getLocals = function() {
						var e = n,
							t = e.props,
							o = (t.onResize, t.maxRows),
							r = (t.onChange, t.style),
							a = (t.innerRef, p(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							i = e.state.lineHeight,
							d = e.saveDOMNodeRef,
							u = o && i ? i * o : null;
						return s({}, a, {
							saveDOMNodeRef: d,
							style: u ? s({}, r, {
								maxHeight: u
							}) : r,
							onChange: n.onChange
						})
					}, f(n, o)
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
				}(t, e), a(t, [{
					key: "componentDidMount",
					value: function() {
						var e = this,
							t = this.props,
							o = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, u.default)(e.textarea)
						}))) : (0, u.default)(this.textarea), o && this.textarea.addEventListener("autosize:resized", this.props.onResize)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.props.onResize && this.textarea.removeEventListener("autosize:resized", this.props.onResize), this.dispatchEvent("autosize:destroy")
					}
				}, {
					key: "render",
					value: function() {
						var e = this.getLocals(),
							t = e.children,
							o = e.saveDOMNodeRef,
							n = p(e, ["children", "saveDOMNodeRef"]);
						return i.default.createElement("textarea", s({}, n, {
							ref: o
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(i.default.Component), n.defaultProps = {
				rows: 1
			}, r);
			t.default = h, h.propTypes = {
				rows: d.default.number,
				maxRows: d.default.number,
				onResize: d.default.func,
				innerRef: d.default.func
			}
		},
		"./node_modules/react-autosize-textarea/lib/index.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n, r = o("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				s = (n = r) && n.__esModule ? n : {
					default: n
				};
			t.default = s.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}
			e.exports = function() {
				function e(e, t, o, r, s, a) {
					if (a !== n) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
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
					arrayOf: t,
					element: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return o.checkPropTypes = r, o.PropTypes = o, o
			}
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/index.js": function(e, t, o) {
			e.exports = o("./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, o) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		}
	}
]);
//# sourceMappingURL=vendors~ModerationPages.48ff273097a1a14020c1.js.map