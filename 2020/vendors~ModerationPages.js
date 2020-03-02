// https://www.redditstatic.com/desktop2x/vendors~ModerationPages.3ec5201e2fb11021880b.js
// Retrieved at 3/2/2020, 4:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~ModerationPages"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, o) {
			var n, s, r;
			s = [t, e], void 0 === (r = "function" == typeof(n = function(e, t) {
				"use strict";
				var o, n, s = "function" == typeof Map ? new Map : (o = [], n = [], {
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
					r = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (l) {
					r = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function a(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !s.has(e)) {
						var t, o = null,
							n = e.clientWidth,
							a = null,
							i = function() {
								e.clientWidth !== n && c()
							},
							d = function(t) {
								window.removeEventListener("resize", i, !1), e.removeEventListener("input", c, !1), e.removeEventListener("keyup", c, !1), e.removeEventListener("autosize:destroy", d, !1), e.removeEventListener("autosize:update", c, !1), Object.keys(t).forEach((function(o) {
									e.style[o] = t[o]
								})), s.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", d, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", c, !1), window.addEventListener("resize", i, !1), e.addEventListener("input", c, !1), e.addEventListener("autosize:update", c, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", s.set(e, {
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
							s = function(e) {
								for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
									node: e.parentNode,
									scrollTop: e.parentNode.scrollTop
								}), e = e.parentNode;
								return t
							}(e),
							r = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var a = e.scrollHeight + o;
						0 !== e.scrollHeight ? (e.style.height = a + "px", n = e.clientWidth, s.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), r && (document.documentElement.scrollTop = r)) : e.style.height = t
					}

					function c() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							o = window.getComputedStyle(e, null),
							n = "content-box" === o.boxSizing ? Math.round(parseFloat(o.height)) : e.offsetHeight;
						if (n !== t ? "hidden" === o.overflowY && (u("scroll"), l(), n = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== o.overflowY && (u("hidden"), l(), n = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), a !== n) {
							a = n;
							var s = r("autosize:resized");
							try {
								e.dispatchEvent(s)
							} catch (i) {}
						}
					}
				}

				function i(e) {
					var t = s.get(e);
					t && t.destroy()
				}

				function d(e) {
					var t = s.get(e);
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
			}) ? n.apply(t, s) : n) || (e.exports = r)
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
					var s = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = n(e, "line-height"), o = parseFloat(t, 10), s ? e.style.lineHeight = s : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (o *= 4, o /= 3) : -1 !== t.indexOf("mm") ? (o *= 96, o /= 25.4) : -1 !== t.indexOf("cm") ? (o *= 96, o /= 2.54) : -1 !== t.indexOf("in") ? o *= 96 : -1 !== t.indexOf("pc") && (o *= 16), o = Math.round(o), "normal" === t) {
					var r = e.nodeName,
						a = document.createElement(r);
					a.innerHTML = "&nbsp;", "TEXTAREA" === r.toUpperCase() && a.setAttribute("rows", "1");
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
				return n(e, (function(e, n, s) {
					t(e, n, s) && o.push(e)
				})), o
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, o) {
				var n;
				return o(e, (function(e, o, s) {
					if (t(e, o, s)) return n = o, !1
				})), n
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var o = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, s, r) {
				for (var a = -1, i = n(o((t - e) / (s || 1)), 0), d = Array(i); i--;) d[r ? i : ++a] = e, e += s;
				return d
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseRange.js"),
				s = o("./node_modules/lodash/_isIterateeCall.js"),
				r = o("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, o, a) {
					return a && "number" != typeof a && s(t, o, a) && (o = a = void 0), t = r(t), void 0 === o ? (o = t, t = 0) : o = r(o), a = void 0 === a ? t < o ? 1 : -1 : r(a), n(t, o, a, e)
				}
			}
		},
		"./node_modules/lodash/countBy.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseAssignValue.js"),
				s = o("./node_modules/lodash/_createAggregator.js"),
				r = Object.prototype.hasOwnProperty,
				a = s((function(e, t, o) {
					r.call(e, o) ? ++e[o] : n(e, o, 1)
				}));
			e.exports = a
		},
		"./node_modules/lodash/filter.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayFilter.js"),
				s = o("./node_modules/lodash/_baseFilter.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				a = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (a(e) ? n : s)(e, r(t, 3))
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseFindKey.js"),
				s = o("./node_modules/lodash/_baseForOwn.js"),
				r = o("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return n(e, r(t, 3), s)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseFlatten.js"),
				s = o("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(s(e, t), 1)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseIndexOf.js"),
				s = o("./node_modules/lodash/isArrayLike.js"),
				r = o("./node_modules/lodash/isString.js"),
				a = o("./node_modules/lodash/toInteger.js"),
				i = o("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, o, u) {
				e = s(e) ? e : i(e), o = o && !u ? a(o) : 0;
				var l = e.length;
				return o < 0 && (o = d(l + o, 0)), r(e) ? o <= l && e.indexOf(t, o) > -1 : !!l && n(e, t, o) > -1
			}
		},
		"./node_modules/lodash/negate.js": function(e, t) {
			var o = "Expected a function";
			e.exports = function(e) {
				if ("function" != typeof e) throw new TypeError(o);
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0:
							return !e.call(this);
						case 1:
							return !e.call(this, t[0]);
						case 2:
							return !e.call(this, t[0], t[1]);
						case 3:
							return !e.call(this, t[0], t[1], t[2])
					}
					return !e.apply(this, t)
				}
			}
		},
		"./node_modules/lodash/omitBy.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/negate.js"),
				r = o("./node_modules/lodash/pickBy.js");
			e.exports = function(e, t) {
				return r(e, s(n(t)))
			}
		},
		"./node_modules/lodash/range.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/times.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseTimes.js"),
				s = o("./node_modules/lodash/_castFunction.js"),
				r = o("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var o = i,
					u = d(e, i);
				t = s(t), e -= i;
				for (var l = n(u, t); ++o < e;) t(o);
				return l
			}
		},
		"./node_modules/lodash/transform.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayEach.js"),
				s = o("./node_modules/lodash/_baseCreate.js"),
				r = o("./node_modules/lodash/_baseForOwn.js"),
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
					o = h ? f ? new m : [] : c(e) && l(m) ? s(i(e)) : {}
				}
				return (h ? n : r)(e, (function(e, n, s) {
					return t(o, e, n, s)
				})), o
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, o) {
			var n = o("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return n(e) + t
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n, s, r = Object.assign || function(e) {
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
			var h = (s = n = function(e) {
				function t() {
					var e, o, n;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var s = arguments.length, a = Array(s), i = 0; i < s; i++) a[i] = arguments[i];
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
							s = (t.onChange, t.style),
							a = (t.innerRef, p(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							i = e.state.lineHeight,
							d = e.saveDOMNodeRef,
							u = o && i ? i * o : null;
						return r({}, a, {
							saveDOMNodeRef: d,
							style: u ? r({}, s, {
								maxHeight: u
							}) : s,
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
						return i.default.createElement("textarea", r({}, n, {
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
			}, s);
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
			var n, s = o("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				r = (n = s) && n.__esModule ? n : {
					default: n
				};
			t.default = r.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}
			e.exports = function() {
				function e(e, t, o, s, r, a) {
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
				return o.checkPropTypes = s, o.PropTypes = o, o
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
//# sourceMappingURL=vendors~ModerationPages.3ec5201e2fb11021880b.js.map