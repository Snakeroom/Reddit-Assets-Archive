// https://www.redditstatic.com/desktop2x/PostCreation.d9db21868c5a4d6dbfc4.js
// Retrieved at 2/24/2022, 1:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation", "ContributorRequestButton"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, n) {
			var o, s, r;
			s = [t, e], void 0 === (r = "function" == typeof(o = function(e, t) {
				"use strict";
				var n, o, s = "function" == typeof Map ? new Map : (n = [], o = [], {
						has: function(e) {
							return n.indexOf(e) > -1
						},
						get: function(e) {
							return o[n.indexOf(e)]
						},
						set: function(e, t) {
							-1 === n.indexOf(e) && (n.push(e), o.push(t))
						},
						delete: function(e) {
							var t = n.indexOf(e);
							t > -1 && (n.splice(t, 1), o.splice(t, 1))
						}
					}),
					r = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (d) {
					r = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function a(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !s.has(e)) {
						var t, n = null,
							o = e.clientWidth,
							a = null,
							i = function() {
								e.clientWidth !== o && u()
							},
							c = function(t) {
								window.removeEventListener("resize", i, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", c, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(n) {
									e.style[n] = t[n]
								})), s.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", c, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", i, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", s.set(e, {
							destroy: c,
							update: u
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), n = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(n) && (n = 0), u()
					}

					function l(t) {
						var n = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
					}

					function d() {
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
						var a = e.scrollHeight + n;
						0 !== e.scrollHeight ? (e.style.height = a + "px", o = e.clientWidth, s.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), r && (document.documentElement.scrollTop = r)) : e.style.height = t
					}

					function u() {
						d();
						var t = Math.round(parseFloat(e.style.height)),
							n = window.getComputedStyle(e, null),
							o = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
						if (o !== t ? "hidden" === n.overflowY && (l("scroll"), d(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (l("hidden"), d(), o = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), a !== o) {
							a = o;
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

				function c(e) {
					var t = s.get(e);
					t && t.update()
				}
				var l = null;
				"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((l = function(e) {
					return e
				}).destroy = function(e) {
					return e
				}, l.update = function(e) {
					return e
				}) : ((l = function(e, t) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
						return a(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], i), e
				}, l.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], c), e
				}), t.exports = l
			}) ? o.apply(t, s) : o) || (e.exports = r)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, n) {
				return ((n = window.getComputedStyle) ? n(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/line-height/lib/line-height.js": function(e, t, n) {
			var o = n("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = o(e, "line-height"),
					n = parseFloat(t, 10);
				if (t === n + "") {
					var s = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = o(e, "line-height"), n = parseFloat(t, 10), s ? e.style.lineHeight = s : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (n *= 4, n /= 3) : -1 !== t.indexOf("mm") ? (n *= 96, n /= 25.4) : -1 !== t.indexOf("cm") ? (n *= 96, n /= 2.54) : -1 !== t.indexOf("in") ? n *= 96 : -1 !== t.indexOf("pc") && (n *= 16), n = Math.round(n), "normal" === t) {
					var r = e.nodeName,
						a = document.createElement(r);
					a.innerHTML = "&nbsp;", "TEXTAREA" === r.toUpperCase() && a.setAttribute("rows", "1");
					var i = o(e, "font-size");
					a.style.fontSize = i, a.style.padding = "0px", a.style.border = "0px";
					var c = document.body;
					c.appendChild(a), n = a.offsetHeight, c.removeChild(a)
				}
				return n
			}
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, o = null == e ? 0 : e.length; ++n < o;)
					if (!t(e[n], n, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return o(e, (function(e, o, s) {
					return n = !!t(e, o, s)
				})), n
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayEvery.js"),
				s = n("./node_modules/lodash/_baseEvery.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				a = n("./node_modules/lodash/isArray.js"),
				i = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? o : s;
				return n && i(e, t, n) && (t = void 0), c(e, r(t, 3))
			}
		},
		"./node_modules/lodash/union.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseFlatten.js"),
				s = n("./node_modules/lodash/_baseRest.js"),
				r = n("./node_modules/lodash/_baseUniq.js"),
				a = n("./node_modules/lodash/isArrayLikeObject.js"),
				i = s((function(e) {
					return r(o(e, 1, a, !0))
				}));
			e.exports = i
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var o = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return o(e) + t
			}
		},
		"./node_modules/lodash/xorWith.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayFilter.js"),
				s = n("./node_modules/lodash/_baseRest.js"),
				r = n("./node_modules/lodash/_baseXor.js"),
				a = n("./node_modules/lodash/isArrayLikeObject.js"),
				i = n("./node_modules/lodash/last.js"),
				c = s((function(e) {
					var t = i(e);
					return t = "function" == typeof t ? t : void 0, r(o(e, a), void 0, t)
				}));
			e.exports = c
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var o, s, r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				},
				a = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
						}
					}
					return function(t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
					}
				}(),
				i = u(n("./node_modules/react/index.js")),
				c = u(n("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				l = u(n("./node_modules/autosize/dist/autosize.js")),
				d = u(n("./node_modules/line-height/lib/line-height.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function m(e, t) {
				var n = {};
				for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
				return n
			}

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var h = (s = o = function(e) {
				function t() {
					var e, n, o;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var s = arguments.length, a = Array(s), i = 0; i < s; i++) a[i] = arguments[i];
					return n = o = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), o.state = {
						lineHeight: null
					}, o.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), o.textarea.dispatchEvent(t)
					}, o.getValue = function(e) {
						var t = e.valueLink,
							n = e.value;
						return t ? t.value : n
					}, o.updateLineHeight = function() {
						o.setState({
							lineHeight: (0, d.default)(o.textarea)
						})
					}, o.onChange = function(e) {
						o.currentValue = e.target.value, o.props.onChange && o.props.onChange(e)
					}, o.saveDOMNodeRef = function(e) {
						var t = o.props.innerRef;
						t && t(e), o.textarea = e
					}, o.getLocals = function() {
						var e = o,
							t = e.props,
							n = (t.onResize, t.maxRows),
							s = (t.onChange, t.style),
							a = (t.innerRef, m(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							i = e.state.lineHeight,
							c = e.saveDOMNodeRef,
							l = n && i ? i * n : null;
						return r({}, a, {
							saveDOMNodeRef: c,
							style: l ? r({}, s, {
								maxHeight: l
							}) : s,
							onChange: o.onChange
						})
					}, p(o, n)
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
							n = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, l.default)(e.textarea)
						}))) : (0, l.default)(this.textarea), n && this.textarea.addEventListener("autosize:resized", this.props.onResize)
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
							n = e.saveDOMNodeRef,
							o = m(e, ["children", "saveDOMNodeRef"]);
						return i.default.createElement("textarea", r({}, o, {
							ref: n
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(i.default.Component), o.defaultProps = {
				rows: 1
			}, s);
			t.default = h, h.propTypes = {
				rows: c.default.number,
				maxRows: c.default.number,
				onResize: c.default.func,
				innerRef: c.default.func
			}
		},
		"./node_modules/react-autosize-textarea/lib/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var o, s = n("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				r = (o = s) && o.__esModule ? o : {
					default: o
				};
			t.default = r.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function r() {}
			r.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, r, a) {
					if (a !== o) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
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
					checkPropTypes: r,
					resetWarningCache: s
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const n = new o.BigNumber(e),
					s = new o.BigNumber(t),
					r = new o.BigNumber(n.dividedBy(s)),
					a = new o.BigNumber("100").multipliedBy(r);
				return new o.BigNumber(a).toNumber()
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = "custom"
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/models/Media/index.ts"),
				s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = n.n(s);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: s
				} = e;
				let a = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					a = s || Object(o.D)(e)
				} else a = Object(o.D)(e);
				const i = r.a.parse(a),
					c = i.path || "",
					l = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (i.hostname ? i.hostname.replace("www.", "") : "") + l
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/intlSupport.ts");

			function r(e, {
				showDay: t,
				useUtc: n,
				shortMonths: r,
				locale: a = o.D
			} = {}) {
				const i = new Date(e * o.Sb);
				return s.a ? new Intl.DateTimeFormat(a, {
					month: r ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(i) : i.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts");
			t.a = (e, t = o.D) => {
				return new Date(1e3 * e).toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/lib/intlList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/react/index.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = function(e) {
				if (void 0 === e) throw new Error("invariant(...): Second argument must be a string.")
			};

			function r(e, t, ...n) {
				if (s(t), !e) {
					let e;
					if (void 0 === t) e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
					else {
						let o = 0;
						(e = new Error(t.replace(/%s/g, () => String(n[o++])))).name = "Invariant Violation"
					}
					throw e.framesToPop = 1, e
				}
			}
			const a = {
					AND: "AND",
					NONE: "NONE",
					OR: "OR"
				},
				i = {
					COMMA: "COMMA",
					SEMICOLON: "SEMICOLON"
				};
			t.c = function(e, t, n) {
				const s = e.length;
				if (0 === s) return "";
				if (1 === s) return e[0];
				const c = e[s - 1];
				let l = e[0];
				for (let r = 1; r < s - 1; ++r) switch (n) {
					case i.SEMICOLON:
						l = o.fbt._("{previous items}; {following items}", [o.fbt._param("previous items", l), o.fbt._param("following items", e[r])], {
							hk: "4hs4xq"
						});
						break;
					default:
						l = o.fbt._("{previous items}, {following items}", [o.fbt._param("previous items", l), o.fbt._param("following items", e[r])], {
							hk: "2z8RMb"
						})
				}
				return function(e, t, n, s) {
					switch (n) {
						case a.AND:
							return o.fbt._("{list of items} and {last item }", [o.fbt._param("list of items", e), o.fbt._param("last item ", t)], {
								hk: "1ylan1"
							});
						case a.OR:
							return o.fbt._("{list of items} or {last item}", [o.fbt._param("list of items", e), o.fbt._param("last item", t)], {
								hk: "3q8AmB"
							});
						case a.NONE:
							switch (s) {
								case i.SEMICOLON:
									return o.fbt._("{previous item}; {last item}", [o.fbt._param("previous item", e), o.fbt._param("last item", t)], {
										hk: "1h77rJ"
									});
								default:
									return o.fbt._("{list of items}, {last item}", [o.fbt._param("list of items", e), o.fbt._param("last item", t)], {
										hk: "3Q0iaX"
									})
							}
							default:
								r(!1, "Invalid conjunction %s provided to intlList", n)
					}
				}(l, c, t || a.AND, n || i.COMMA)
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/lodash/every.js"),
				s = n.n(o);

			function r(e) {
				let t = null,
					n = null;
				return (...o) => (null !== t && o.length === t.length && s()(o, (e, n) => e === t[n]) || (t = o, n = e(...o)), n)
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const r = [s.rc, s.pb, s.B, s.Q, s.kb, s.Sb],
				a = {
					[s.Sb]: e => o.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [o.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.kb]: e => o.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [o.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.Q]: e => o.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [o.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.B]: e => o.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [o.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.pb]: e => o.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [o.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.rc]: e => o.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [o.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[s.Sb]: e => o.fbt._("{amount}s", [o.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.kb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.Q]: e => o.fbt._("{amount}h", [o.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.B]: e => o.fbt._("{amount}d", [o.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.pb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.rc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.pb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.rc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					l = new Date(e).getTime(),
					d = {
						[s.rc]: "",
						[s.pb]: "",
						[s.B]: "",
						[s.Q]: "",
						[s.kb]: "",
						[s.Sb]: ""
					};
				let u = l - c;
				if (u <= 0) return o.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const o of r) {
					const e = Math.floor(u / o);
					e && (d[o] = (t ? i : a)[o](e).toString()), u -= e * o
				}
				const m = r.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : o.fbt._("{amount of time left} left", [o.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return ee
			})), n.d(t, "o", (function() {
				return ne
			})), n.d(t, "m", (function() {
				return oe
			})), n.d(t, "q", (function() {
				return ae
			})), n.d(t, "t", (function() {
				return ie
			})), n.d(t, "n", (function() {
				return le
			})), n.d(t, "s", (function() {
				return de
			})), n.d(t, "l", (function() {
				return ue
			})), n.d(t, "a", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return fe
			})), n.d(t, "p", (function() {
				return ge
			})), n.d(t, "f", (function() {
				return Ce
			})), n.d(t, "g", (function() {
				return Ee
			})), n.d(t, "j", (function() {
				return xe
			})), n.d(t, "d", (function() {
				return ve
			})), n.d(t, "c", (function() {
				return je
			})), n.d(t, "i", (function() {
				return Se
			})), n.d(t, "h", (function() {
				return we
			})), n.d(t, "k", (function() {
				return Ne
			})), n.d(t, "r", (function() {
				return De
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/reddit/actions/changeUsername.ts"),
				c = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				m = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/reddit/constants/localStorage.ts"),
				C = n("./src/redditGQL/operations/CommentToxicity.json"),
				E = n("./src/lib/makeApiRequest/index.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				_ = n("./src/lib/omitHeaders/index.ts"),
				v = n("./src/reddit/constants/headers.ts"),
				O = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				y = n("./src/reddit/helpers/genericServerError/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				j = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				T = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				P = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, n, o) => {
					let s, r;
					if (o === S.i.MARKDOWN) s = n.text, r = null;
					else {
						s = null;
						let e = null;
						n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
						...C,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				w = async (e, t, n, o, r) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === S.i.MARKDOWN) a.text = n.text;
					else {
						a.text = null;
						let e = null;
						n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), a.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(E.a)(Object(_.a)(e, [v.a]), {
						method: s.jb.POST,
						endpoint: Object(O.a)(Object(T.a)(Object(P.a)(`${e.apiUrl}/api/comment.json`))),
						data: a
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(j.a)(e)
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body, o)
						}
					} : {
						...e,
						error: e.error || Object(y.a)()
					})
				};
			var N = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var D = n("./src/reddit/endpoints/post/index.tsx"),
				M = n("./src/reddit/endpoints/post/convert.ts"),
				R = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/featureFlags/index.ts"),
				F = n("./src/reddit/helpers/correlationIdTracker.ts"),
				A = n("./src/reddit/helpers/dom/index.ts"),
				B = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				W = n("./src/reddit/models/Comment/index.ts"),
				z = n("./src/reddit/models/PostDraft/index.ts"),
				G = n("./src/reddit/models/RichTextJson/index.ts"),
				H = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				V = n("./src/reddit/models/Toast/index.ts"),
				K = n("./src/reddit/selectors/comments.ts"),
				q = n("./src/reddit/selectors/commentSelector.ts"),
				J = n("./src/reddit/selectors/platform.ts"),
				Z = n("./src/reddit/selectors/posts.ts"),
				Q = n("./src/reddit/selectors/user.ts"),
				Y = n("./src/reddit/actions/comment/index.ts"),
				X = n("./src/reddit/actions/comment/constants.ts");
			const $ = Object(r.a)(X.k),
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, o) => {
					const s = o();
					if (!!s.features.comments.drafts[t])
						if (Object(Q.Q)(s) && e) {
							const o = $({
								hasFocus: e,
								draftKey: t
							});
							n(Object(i.f)(o))
						} else n($({
							hasFocus: e,
							draftKey: t
						}))
				}, te = Object(r.a)(X.H), ne = Object(r.a)(X.J), oe = Object(r.a)(X.I), se = Object(r.a)(X.G), re = async (e, t, n, o) => {
					const s = o.ok && o.body,
						r = s && s.comment && s.comment.id;
					await U.f(e, n, t, r)
				}, ae = "Toxicity_Warning__Modal", ie = (e, t, n, o, s, r) => async (a, i, {
					gqlContext: c
				}) => {
					const d = i(),
						u = Object(J.e)(d);
					let m = "";
					if (u && (m = u.name), L.d.enableToxicityWarning(d)) {
						if (!(await I(c(), m, o, s))) return void a(Object(l.i)(ae))
					}
					a(le(e, t, n, o, s, r))
				}, ce = e => e.rteState ? b.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, le = (e, t, n, r, a, i, c) => async (u, b, {
					apiContext: g
				}) => {
					u(Object(l.g)(ae));
					const C = b(),
						E = C.features.comments.submit.pending[n];
					if (!C.user.account || E) return;
					u(te({
						draftKey: n,
						draft: r
					}));
					const x = C.user.account.displayText,
						_ = r.commentMode;
					let v;
					if (c ? (v = await Object(R.i)(g(), e, r, x), u(Object(m.a)({
							streamId: e,
							level: v.body.automuteLevel
						}))) : v = await w(g(), e, r, x, _), v.ok) {
						let o;
						o = v.body, u(ne({
							...o,
							headCommentId: Object(K.w)(C, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const s = Object(Z.G)(b(), {
							postId: e
						});
						u(Object(d.z)(s, f.a.CommentSubmitted))
					} else {
						v.error && v.error.type === s.Kb && U.h(C, ce(r), e);
						const t = v.error && v.error.fields && v.error.fields[0] ? v.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(se({
							draftKey: n,
							error: v.error
						})), u(Object(h.f)({
							duration: h.a,
							kind: V.b.Error,
							text: t
						}))
					}
					re(b(), t, a, v).then(() => v.ok && a === S.i.RICH_TEXT ? Object(F.b)(F.a.CommentComposer) : void 0), i || Object(p.d)()
				}, de = e => async (t, n, {
					gqlContext: o
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: r,
						parentCommentDepth: a,
						draftKey: i,
						formData: c,
						editorMode: d
					} = e, u = n(), m = Object(J.e)(u);
					let p = "";
					if (m && (p = m.name), L.d.enableToxicityWarning(u)) {
						if (!(await I(o(), p, c, d))) return void t(Object(l.i)(ae))
					}
					t(ue({
						commentsPageKey: r,
						draftKey: i,
						parentCommentDepth: a,
						parentCommentId: s,
						formData: c,
						editorMode: d
					}))
				}, ue = e => async (t, n, {
					apiContext: o
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: d,
						editorMode: u
					} = e;
					t(Object(l.g)(ae));
					const m = n(),
						h = m.features.comments.submit.pending[c];
					if (!m.user.account || h) return;
					t(te({
						draftKey: c,
						draft: d
					}));
					const b = m.user.account.displayText,
						f = d.commentMode,
						g = await w(o(), r, d, b, f);
					if (g.ok) t(oe({
						...g.body,
						parentCommentId: r,
						commentsPageKey: a,
						draftKey: c,
						depth: i + 1
					}));
					else {
						if (g.error && g.error.type === s.Kb) {
							const e = Object(q.b)(m, {
								commentId: r
							});
							if (!e) return;
							U.h(m, ce(d), e.postId, r)
						}
						t(se({
							draftKey: c,
							error: g.error
						}))
					}
					re(n(), a, u, g), Object(p.d)()
				}, me = Object(r.a)(X.q), pe = Object(r.a)(X.p), he = Object(r.a)(X.l), be = (Object(r.a)(X.g), Object(r.a)(X.m)), fe = (Object(r.a)(X.t), (e, t, n) => async (s, r, {
					apiContext: a
				}) => {
					const i = e === S.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(G.G)(t)) s(be({
						editorMode: e,
						draftKey: n,
						content: i ? G.i : ""
					})), s(Object(u.c)(e));
					else {
						s(Object(u.b)(n));
						const r = await Object(M.a)(a(), e, i ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(u.a)(n)), s(be({
								editorMode: e,
								draftKey: n,
								content: t
							})), s(Object(u.c)(e))
						} else s(Object(u.a)(n)), s(Object(h.f)({
							duration: h.a,
							kind: V.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), ge = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (o, s) => {
					const r = s(),
						d = Object(a.a)(z.c.replyToComment, t);
					if (!Object(Q.O)(s())) return o(Object(c.j)()), void o(Object(l.k)({
						actionSource: l.a.Reply,
						redirectUrl: Object(K.m)(s(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						m = u && u[t];
					if ((m || u && n) && (Object.keys(u).forEach(t => u[t] && o(pe({
							parentCommentId: t,
							commentsPageKey: e
						}))), m)) return;
					let p = "",
						h = null;
					const b = r.user.prefs.commentMode,
						f = Object(A.d)();
					if (f) {
						const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (b === S.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => H.s(e, null)).map(e => H.l([e])),
								n = H.s("", null),
								o = H.l([n]);
							h = {
								document: [H.c(t), o]
							}
						}
					}
					const g = r.features.comments.drafts[d];
					let C;
					if (C = f ? {
							commentMode: b,
							draftType: z.c.replyToComment,
							rtJson: h,
							text: `${p}\n`
						} : g || {
							commentMode: b,
							draftType: z.c.replyToComment,
							rtJson: h,
							text: ""
						}, Object(Q.Q)(r)) {
						const n = me({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: d,
							formData: C
						});
						o(Object(i.f)(n))
					} else o(me({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: d,
						formData: C
					}))
				}, Ce = e => async t => {
					t(Object(Y.p)(e)), t(ve(e))
				}, Ee = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(pe({
						parentCommentId: e,
						commentsPageKey: t
					})), n(ge({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(Y.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, xe = (e, t) => n => n(he({
					draftKey: e,
					formData: t
				})), _e = Object(r.a)(X.s), ve = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: o,
					text: s
				}) => async (r, a) => {
					const i = a();
					i.user.account && (U.c(i), r(_e({
						commentId: e,
						commentsPageKey: n,
						draftKey: o,
						formData: {
							text: s,
							commentMode: t,
							rteState: null,
							draftType: z.c.edit,
							hasFocus: !0
						}
					})))
				}, Oe = Object(r.a)(X.C), ye = Object(r.a)(X.B), ke = Object(r.a)(X.D), je = Object(r.a)(X.h), Se = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: o,
					formData: r
				}) => async (n, a, {
					apiContext: i
				}) => {
					const c = a();
					if (!c.user.account) return;
					n(Oe({
						draftKey: o
					})), U.d(c);
					const l = c.user.account.displayText || "",
						d = r.commentMode,
						u = await (async (e, t, n, o, r, a) => {
							const i = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (a === S.i.MARKDOWN) i.text = o.text;
							else {
								i.text = null;
								let e = null;
								o.rteState && (e = b.a.toRichTextJSON(o.rteState).document), i.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(E.a)(Object(_.a)(e, [v.a]), {
								endpoint: Object(O.a)(Object(P.a)(Object(T.a)(`${e.apiUrl}/api/editusertext`))),
								method: s.jb.POST,
								data: i
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(j.a)(e)
							} : {
								...e,
								body: {
									comment: Object(k.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(k.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(y.a)()
							})
						})(i(), e, 0, r, l, d);
					if (u.ok) {
						const s = u.body;
						n(ke({
							commentId: e,
							commentsPageKey: t,
							draftKey: o
						})), n(Object(Y.i)({
							[e]: {
								...s.comment
							}
						}))
					} else n(ye({
						draftKey: o,
						error: u.error
					}))
				}, Te = Object(r.a)(X.z), Pe = Object(r.a)(X.y), Ie = Object(r.a)(X.A), we = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const a = o();
					n(Te({
						id: e
					})), U.a(e, a);
					const i = await ((e, t) => Object(E.a)(Object(_.a)(e, [v.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/del`),
						method: s.jb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(j.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(y.a)()
					}))(r(), e);
					i.ok ? n(Ie({
						id: e,
						postId: t
					})) : n(Pe({
						id: e,
						error: i.error
					}))
				}, Ne = e => async (t, n, {
					apiContext: o
				}) => {
					const s = !n().features.comments.models[e].sendReplies;
					t(Object(Y.i)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(D.o)(o(), e, s)).ok || t(Object(Y.i)({
						[e]: {
							sendReplies: !s
						}
					}))
				}, De = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					var a, i, c, l, d, u;
					n(Object(Y.c)());
					const m = e => Object(h.f)(Object(h.e)(e, V.b.Error));
					if (((null === (i = null === (a = s().pages) || void 0 === a ? void 0 : a.comments) || void 0 === i ? void 0 : i.followed) || []).length === g.a) n(m(o.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const a = t === W.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(Y.n)(i)), (await ((e, t) => Object(x.a)(e, {
								...N,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(B.xb)(null !== (d = null === (l = null === (c = s().pages) || void 0 === c ? void 0 : c.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== d ? d : [], null === (u = s().user.account) || void 0 === u ? void 0 : u.id);
							const e = a ? o.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : o.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(h.f)({
								kind: V.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(Y.n)(i)), n(m(o.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/crosspostSubredditRec/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/postCreation/general.ts"),
				r = n("./src/reddit/selectors/experiments/crosspostRecommendations.ts");
			var a = n("./src/lib/initializeClient/installReducer.ts");
			var i = (e = !1, t) => {
				switch (t.type) {
					case "CROSSPOST_RECOMMENDATIONS__SHOULD_TRY_TO_RENDER":
						return !0;
					case "CROSSPOST_RECOMMENDATIONS__STOP_TRYING_TO_RENDER":
						return !1;
					default:
						return e
				}
			};
			Object(a.a)({
				features: {
					shouldTryToShowCrosspostModal: i
				}
			});
			const c = Object(o.a)("CROSSPOST_RECOMMENDATIONS__SHOULD_TRY_TO_RENDER"),
				l = Object(o.a)("CROSSPOST_RECOMMENDATIONS__STOP_TRYING_TO_RENDER"),
				d = e => async (t, n) => {
					const o = n();
					if (!Object(r.b)(o)) return;
					const a = e.title,
						i = Object(r.d)(e),
						c = Object(r.c)(e);
					t(Object(s.j)(a, i, c, t => {
						const n = e.belongsTo.id === t.id,
							o = "isCrosspostDestination" in t && t.isCrosspostDestination;
						return n || !o
					}))
				}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}));
			const o = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			}));
			const o = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				r = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const l = Object(i.a)(c.a),
				d = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, {
					apiContext: o
				}) => {
					const s = e && e.includeMemberships || !1,
						i = e && e.forceFetch || !1,
						c = n();
					if (!c.economics.me.fetched || s && !c.economics.me.data.specialMemberships || i) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(o(), s);
						if (e.ok) {
							const n = e.body;
							s && !n.specialMemberships && (n.specialMemberships = {}), t(l(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(d());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(s.b)({
								endpoint: t,
								method: o.jb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			const o = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "i", (function() {
				return u
			}));
			const o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "s", (function() {
				return _
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "v", (function() {
				return y
			})), n.d(t, "w", (function() {
				return k
			})), n.d(t, "x", (function() {
				return j
			}));
			const o = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				r = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				a = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				i = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				l = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				d = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				g = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				C = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				E = "GOVERNANCE__TRANSFER_FAILURE",
				x = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				_ = "GOVERNANCE__TRANSFER_PENDING",
				v = "GOVERNANCE__TRANSFER_SUCCESS",
				O = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				y = "GOVERNANCE__WALLETS_FETCH_PENDING",
				k = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				j = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				r = n("./src/reddit/models/Toast/index.ts");

			function a(e, t) {
				e(Object(o.f)({
					duration: 5e3,
					kind: r.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "h", (function() {
				return F
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/config.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/reddit/models/Poll/index.ts"),
				m = n("./src/redditGQL/operations/PollVote.json"),
				p = n("./src/reddit/endpoints/governance/requester.ts");
			var h = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/crypto/points.ts"),
				C = n("./src/reddit/actions/governance/constants.ts"),
				E = n("./src/reddit/actions/governance/errorToast.ts");
			const x = Object(s.a)(C.b),
				_ = Object(s.a)(C.c),
				v = Object(s.a)(C.e),
				O = (Object(s.a)(C.f), Object(s.a)(C.g), Object(s.a)(C.h)),
				y = Object(s.a)(C.i),
				k = Object(s.a)(C.j),
				j = Object(s.a)(C.k),
				S = Object(s.a)(C.q),
				T = Object(s.a)(C.r),
				P = Object(s.a)(C.s),
				I = Object(s.a)(C.t),
				w = Object(s.a)(C.u),
				N = Object(s.a)(C.v),
				D = Object(s.a)(C.w),
				M = Object(s.a)(C.x),
				R = (e, t) => async (n, o, {
					apiContext: s,
					gqlContext: r
				}) => {
					let a, c = o().polls.models[e];
					if (n(k({
							pollId: e
						})), (a = c.type === u.a.GA ? await ((e, t, n) => Object(d.a)(e, {
								...m,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(r(), e, t) : await
							function(e, t, n, o) {
								return Object(p.a)(e, {
									method: "put",
									endpoint: `${l.a.metaUrl}/polls/${t}/${n}/votes/me/${o}`
								})
							}(s(), c.subredditId, e, t)).ok) {
						if (c.type === u.a.GA) {
							const {
								options: e
							} = a.body.data.updatePostPollVoteState.poll;
							n(v({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else n(j(a.body));
						const s = o();
						if ((c = s.polls.models[e]) && Object(u.d)(c)) {
							const {
								postId: e
							} = c, t = s.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(i.jb)(e))
						}
					} else n(y({
						pollId: e,
						error: a.error || a.errors[0].message
					})), Object(E.a)(n, a.error || a.errors[0].messsage)
				}, L = (e, t) => async (n, s, {
					apiContext: i
				}) => {
					var d;
					n(P());
					const u = s().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(p.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${l.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(i(), {
						...e,
						contentId: u
					});
					m.ok ? (n(I({
						...m.body,
						subredditId: e.subredditId
					})), n(Object(c.f)({
						kind: b.b.SuccessCommunity,
						text: o.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [o.fbt._param("amount", Object(r.a)(e.amount)), o.fbt._param("tokenName", (null === (d = Object(g.b)(s(), e.subredditId)) || void 0 === d ? void 0 : d.name) || ""), o.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(a.f)())) : (n(S({
						error: m.error
					})), Object(E.a)(n, m.error))
				}, F = e => async (t, n, {
					apiContext: o
				}) => {
					t(N());
					const s = await Object(h.a)(o(), e);
					s.ok ? t(D(s.body)) : t(w({
						error: s.error
					}))
				}
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/lib/makeActionCreator/index.ts");
			const s = "JSAPI__CONSUMER_SUBSCRIBED",
				r = Object(o.a)(s)
		},
		"./src/reddit/actions/polls.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/lib/makeActionCreator/index.ts");
			const s = "POLLS__POLL_CREATION_UPDATED",
				r = Object(o.a)(s)
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "t", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "s", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "o", (function() {
				return v
			}));
			const o = "CREATE_COLLECTION_PENDING",
				s = "CREATE_COLLECTION_SUCCESS",
				r = "CREATE_COLLECTION_FAILED",
				a = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				i = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				l = "UPDATE_POST_WITH_COLLECTION_ID",
				d = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				h = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				g = "REORDER_COLLECTION_PENDING",
				C = "REORDER_COLLECTION_SUCCESS",
				E = "REORDER_COLLECTION_FAILED",
				x = "UPDATE_COLLECTION_LAYOUT_PENDING",
				_ = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				v = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return R
			})), n.d(t, "e", (function() {
				return F
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "a", (function() {
				return z
			})), n.d(t, "c", (function() {
				return H
			})), n.d(t, "h", (function() {
				return J
			})), n.d(t, "f", (function() {
				return X
			})), n.d(t, "d", (function() {
				return re
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/filterQueryParams/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/postCollection/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/history.ts"),
				u = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts");
			var b = (e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: u.jb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var f = (e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: u.jb.POST,
				data: {
					title: t,
					sr_fullname: n
				}
			});
			var g = (e, t) => Object(m.a)(Object(p.a)(e, [h.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: u.jb.POST,
					data: {
						collection_id: t
					}
				}),
				C = n("./src/config.ts");
			var E = (e, t) => Object(m.a)(Object(p.a)(e, [h.a]), {
				endpoint: `${C.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: u.jb.GET
			});
			var x = (e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: u.jb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var _ = (e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: u.jb.POST,
				data: {
					collection_id: t,
					title: n
				}
			});
			var v = (e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: u.jb.POST,
				data: {
					collection_id: t,
					link_ids: n.join(",")
				}
			});
			var O = (e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: u.jb.POST,
				data: {
					collection_id: t,
					description: n
				}
			});
			var y = (e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: u.jb.POST,
					data: {
						collection_id: t,
						display_layout: n
					}
				}),
				k = n("./src/reddit/helpers/overlay/index.ts"),
				j = n("./src/reddit/helpers/path/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				T = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				P = n("./src/reddit/selectors/postCollection.ts"),
				I = n("./src/reddit/selectors/posts.ts"),
				w = n("./src/reddit/selectors/subreddit.ts");
			const N = Object(a.a)(c.c),
				D = Object(a.a)(c.b),
				M = Object(a.a)(c.d),
				R = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					n(N());
					const r = await f(s(), e, t);
					let a;
					if (r.ok) {
						const e = o().meta,
							t = (e => ({
								author: e.author_name || void 0,
								createdAtUTC: e.created_at_utc,
								description: e.description,
								displayLayout: e.display_layout,
								id: e.collection_id,
								lastUpdateUTC: e.last_update_utc,
								permalink: e.permalink,
								postIds: e.link_ids,
								primaryPostId: e.primary_link_id || void 0,
								subredditId: e.subreddit_id,
								title: e.title
							}))(r.body);
						n(M({
							collection: t,
							meta: e
						})), a = t
					} else {
						const e = r.error;
						n(D(e))
					}
					return a
				}, L = Object(a.a)(c.f), F = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().postCollection.subredditToIds || {};
					if (Object.keys(r).length > 0) return;
					const a = await E(s(), e);
					a.ok ? t(L(a.body)) : t(Object(l.f)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, A = Object(a.a)(c.g), B = (e, t, n) => async (s, r, {
					apiContext: a
				}) => {
					if ((await x(a(), e, t)).ok) {
						const a = r(),
							i = Object(I.G)(a, {
								postId: t
							}),
							c = i && i.title || "",
							d = Object(P.q)(a, {
								collectionId: e
							}),
							u = (d && d.postIds && d.postIds.indexOf(t) || -1) - 1;
						if (s(A({
								collectionId: e,
								postId: t
							})), n && u >= 0) {
							const t = r(),
								n = Object(P.q)(t, {
									collectionId: e
								}),
								o = n && n.postIds && n.postIds[u] || "",
								a = Object(I.G)(t, {
									postId: o
								});
							a && a.permalink && s(Object(k.a)(a.permalink))
						}
						s(Object(l.f)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Following post removed from collection successfully: {postTitle}", [o.fbt._param("postTitle", c)], {
								hk: "8e1lV"
							}),
							buttonText: o.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: z(e, t)
						}))
					} else s(Object(l.f)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, U = Object(a.a)(c.a), W = Object(a.a)(c.t), z = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s();
					if ((await b(r(), e, t)).ok) {
						n(U({
							collectionId: e,
							postId: t
						})), n(W({
							collectionId: e,
							postId: t
						}));
						const s = Object(I.G)(a, {
								postId: t
							}),
							r = Object(P.q)(a, {
								collectionId: e
							}),
							i = r && r.title || "";
						n(Object(l.f)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Success! You added a post to the collection: {title}", [o.fbt._param("title", i)], {
								hk: "3KNJWi"
							}),
							buttonText: o.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(k.a)(s.permalink)
						}))
					} else n(Object(l.f)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, G = Object(a.a)(c.e), H = (e, t) => async (n, a, {
					apiContext: i
				}) => {
					const c = a();
					if ((await g(i(), e)).ok) {
						const {
							url: a
						} = c.platform.currentPage, i = Object(P.q)(c, {
							collectionId: e
						}), d = i && i.title || "", u = i && i.subredditId, m = u ? Object(w.c)(c, u) : "/";
						n(G({
							collectionId: e,
							collection: i
						})), n(t ? Object(s.c)(Object(r.a)(a, ["collection"])) : Object(s.b)(m)), n(Object(l.f)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Collection deleted successfully: {title}", [o.fbt._param("title", d)], {
								hk: "4tcOKB"
							})
						}))
					} else n(Object(l.f)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, V = Object(a.a)(c.r), K = Object(a.a)(c.n), q = Object(a.a)(c.s), J = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					n(V());
					const a = await _(r(), e, t);
					let i = !1;
					if (a.ok) n(q({
						collectionId: e,
						newTitle: t
					})), n(Object(l.f)({
						kind: S.b.SuccessMod,
						text: o.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), i = !0;
					else {
						const e = a.error;
						n(K(e)), n(Object(l.f)({
							kind: S.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return i
				}, Z = Object(a.a)(c.l), Q = Object(a.a)(c.m), Y = Object(a.a)(c.k), X = e => async (t, n) => {
					const o = n();
					if (Object(T.b)(o)) return void t(Object(i.ab)(Object(j.b)(e.permalink), e.id));
					const r = o.platform.currentPage.locationState;
					t(!(!r || !r[d.b.IsOverlay]) ? Object(k.a)(e.permalink) : Object(s.b)(Object(j.b)(e.permalink)))
				}, $ = Object(a.a)(c.i), ee = Object(a.a)(c.j), te = Object(a.a)(c.h), ne = Object(a.a)(c.p), oe = Object(a.a)(c.o), se = Object(a.a)(c.q), re = e => async t => {
					const n = [],
						{
							collectionId: s,
							description: r,
							displayLayout: a,
							postIds: i,
							title: c
						} = e;
					i && n.push(t(((e, t) => async (n, s, {
						apiContext: r
					}) => {
						n($());
						const a = await v(r(), e, t);
						let i = !1;
						return a.ok ? (n(ee({
							collectionId: e,
							postIds: t
						})), n(Object(l.f)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), i = !0) : (n(te({
							error: a.error
						})), n(Object(l.f)({
							kind: S.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), i
					})(s, i))), c && n.push(t(J(s, c))), void 0 !== r && n.push(t(((e, t) => async (n, s, {
						apiContext: r
					}) => {
						n(Z());
						const a = await O(r(), e, t);
						let i = !1;
						if (a.ok) n(Q({
							collectionId: e,
							newDescription: t
						})), n(Object(l.f)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), i = !0;
						else {
							const e = a.error;
							n(Y(e)), n(Object(l.f)({
								kind: S.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return i
					})(s, r))), a && n.push(t(((e, t) => async (n, s, {
						apiContext: r
					}) => {
						n(ne());
						const a = await y(r(), e, t);
						let i = !1;
						if (a.ok) n(se({
							collectionId: e,
							newLayout: t
						})), n(Object(l.f)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), i = !0;
						else {
							const e = a.error;
							n(oe(e)), n(Object(l.f)({
								kind: S.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return i
					})(s, a)));
					let d = !0;
					return await Promise.all(n).then(e => {
						e.forEach(e => {
							e || (d = !1)
						})
					}), d
				}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				l = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(s.a)(m.G),
				h = Object(s.a)(m.p),
				b = Object(s.a)(m.Q),
				f = (e, t, n) => async (s, i, {
					apiContext: f
				}) => {
					c.m(i(), t);
					const C = t === l.i.MARKDOWN,
						E = t === l.i.RICH_TEXT,
						x = m.k;
					if (C && Object(d.G)(n)) return s(b({
						editorKey: e,
						editorMode: l.i.MARKDOWN,
						content: ""
					})), void s(g(t));
					if (E && !n) return s(b({
						editorKey: e,
						editorMode: l.i.RICH_TEXT,
						content: d.i
					})), void s(g(t));
					s(p(x));
					const _ = await Object(a.a)(f(), t, C ? JSON.stringify(n) : n);
					_.ok ? (s(h(x)), s(b({
						editorKey: e,
						editorMode: t,
						content: _.body.output
					})), s(g(t))) : (s(h(x)), s(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, g = e => async (t, n) => {
					const s = Object(i.l)();
					if (s >= 3) return;
					const a = n().user.prefs.useMarkdown ? l.i.MARKDOWN : l.i.RICH_TEXT;
					if (e === a) return;
					const c = e === l.i.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : o.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: o.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(i.tb)(s + 1)
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return D
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "d", (function() {
				return U
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/uuid/v4.js"),
				r = n.n(s),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/formatApiError/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/actions/upload.ts"),
				u = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts");
			var b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/imagePreview/index.ts"),
				g = n("./src/reddit/helpers/media/index.ts"),
				C = n("./src/reddit/models/Upload/index.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				x = n("./src/telemetry/index.ts");
			const _ = e => ({
				...E.o(e),
				screen: E.bb(e),
				profile: E.S(e),
				subreddit: E.jb(e)
			});
			var v = n("./src/reddit/helpers/trackers/postComposer.ts"),
				O = n("./src/reddit/models/Gold/Powerups/index.ts"),
				y = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/gold/powerups/index.ts"),
				S = n("./src/reddit/selectors/postCreations.ts"),
				T = n("./src/reddit/actions/postCreation/constants.ts"),
				P = n("./src/reddit/actions/postCreation/general.ts");
			const I = Object(c.a)(T.u),
				w = Object(c.a)(T.v),
				N = Object(c.a)(T.t),
				D = e => async (t, n) => {
					t(I());
					const o = e.map(({
						url: e,
						uploadKey: n
					}) => {
						const o = Object(g.a)(Object(g.c)(e), "poster.png");
						return t(F(o, n))
					});
					await Promise.all(o);
					const s = n().uploads,
						r = e.map(({
							uploadKey: e
						}) => s[e]).find(e => e.status !== C.a.SUCCESS);
					t(r ? N(r.error) : w())
				}, M = (e, t) => ({
					error: t ? {
						type: e,
						fields: [{
							field: "",
							msg: t
						}]
					} : {
						type: e
					}
				});
			const R = "RTE",
				L = "GALLERY",
				F = (e, t, n, s) => async (r, i, {
					apiContext: c
				}) => {
					const l = Object(S.h)(i()),
						u = Date.now();
					let y = null,
						k = !1,
						T = !1,
						P = !1;
					const I = e => {
						if (!P && n && k) {
							P = !0;
							const o = i(),
								s = Date.now() - u,
								r = Object(b.c)(b.a.PostComposer);
							T ? (async ({
								state: e,
								uploadKey: t,
								assetId: n,
								isCanceled: o,
								fileSource: s,
								uploadDuration: r,
								correlationId: a
							}) => {
								const i = e.uploads[t],
									c = o || i.status === C.a.CANCELED,
									{
										file: l,
										url: d,
										metadata: u,
										error: m
									} = i,
									p = u.mimetype || l.type,
									h = p.startsWith("video/"),
									b = i.status === C.a.SUCCESS;
								let f = "";
								m ? f = JSON.stringify(m) : c && (f = "canceled");
								const g = {
									width: u.width,
									height: u.height,
									duration: u.videoDuration && Math.round(1e3 * u.videoDuration)
								};
								Object(x.a)({
									source: "post_composer",
									action: "upload",
									correlationId: a,
									noun: h ? "video" : "image",
									..._(e),
									actionInfo: {
										...E.d(e),
										success: b,
										...f ? {
											reason: f
										} : {}
									},
									media: {
										mimetype: p,
										uploadDuration: r,
										source: s,
										fileName: l.name,
										size: l.size,
										type: h ? "video" : "image",
										...n ? {
											id: n
										} : {},
										...d ? {
											url: d
										} : {},
										...g
									}
								})
							})({
								state: o,
								uploadKey: t,
								assetId: y,
								isCanceled: e,
								fileSource: n,
								uploadDuration: s,
								correlationId: r
							}) : v.D(o, t)
						}
					};
					return await r(Object(d.l)(e, t, async u => {
						k = !0, Object(d.k)(u.id, () => {
							I(!0)
						});
						const {
							error: b,
							metadata: C
						} = await async function(e, t, n) {
							const s = n && n.allowedPostTypes,
								r = n && n.name,
								i = await Object(g.g)(t) || t.type,
								c = Object(g.b)(t) || void 0;
							if (!c) return M("UNSUPPORTED_BROWSER");
							const l = {
								localUrl: c,
								mimetype: i
							};
							if (!i || !Object(g.i)(i)) return {
								error: {
									type: a.T
								}
							};
							if (i.startsWith("image/")) {
								if (s && !s.images) {
									const e = o.fbt._("Images are not allowed in r/{subredditName}", [o.fbt._param("subredditName", r)], {
										hk: "3C2E7Q"
									});
									return M(a.T, e)
								}
								if ("image/gif" === i) {
									if (t.size > a.Z) return M(a.L)
								} else if (t.size > a.bb) return M(a.R);
								const e = await Object(f.a)(c);
								l.width = e.width, l.height = e.height
							} else if (i.startsWith("video/")) {
								const i = !(null == n || !n.id) && Object(j.p)(e, {
										subredditId: n.id,
										benefit: O.a.HdVideo
									}),
									u = i ? 2 * a.fb : a.fb;
								if (t.size > u) return M(a.oc);
								let m;
								try {
									m = await Object(g.h)(c, !0)
								} catch (d) {
									return M(a.T)
								}
								if (s) {
									const {
										videos: e,
										images: t
									} = s;
									if (t && !e && m.duration > a.gb) {
										const e = o.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [o.fbt._param("subredditName", r)], {
											hk: "46ULiz"
										});
										return M(a.T, e)
									}
									if (!t && !e) {
										const e = o.fbt._("Videos are not allowed in r/{subredditName}", [o.fbt._param("subredditName", r)], {
											hk: "4uTUZb"
										});
										return M(a.T, e)
									}
								}
								const p = i ? 2 * a.eb : a.eb;
								if (m.duration > p) {
									const e = o.fbt._("Video is too long. Maximum video length is {duration} minutes.", [o.fbt._param("duration", (p / 60).toString())], {
										hk: "20nB6Q"
									});
									return M(a.T, e)
								}
								if (m.duration < a.mb) {
									const e = o.fbt._("Video is too short. Minimum video length is {duration} seconds.", [o.fbt._param("duration", a.mb.toString())], {
										hk: "49PSW8"
									});
									return M(a.T, e)
								}
								if (0 === m.height || 0 === m.width) {
									const e = o.fbt._("Your browser does not support the video codec used for this video. Please try using a different video codec.", null, {
										hk: "1AC0mg"
									});
									return M(a.T, e)
								}
								if (m.height < a.nb || m.width < a.ob) {
									const e = o.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [o.fbt._param("min_video_width", a.ob.toString()), o.fbt._param("min_video_height", a.nb.toString())], {
										hk: "2HSUGl"
									});
									return M(a.T, e)
								}
								if (t.size / m.duration < a.lb) {
									const e = o.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [o.fbt._param("min_bitrate", (a.lb / a.U).toString())], {
										hk: "1ehgDE"
									});
									return M(a.T, e)
								}
								l.height = m.height, l.width = m.width, l.videoDuration = m.duration, l.videoFirstFrameUrl = m.firstFrame.dataUrl
							}
							return {
								metadata: l
							}
						}(i(), e, l);
						if (b || !C) return {
							error: b
						};
						r(Object(d.m)({
							key: t,
							metadata: {
								fileSource: n,
								...C
							}
						})), T = !0, s && s();
						const E = e.name,
							x = await (async (e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: a.jb.POST,
								data: {
									filepath: t,
									mimetype: n
								}
							}))(c(), E, C.mimetype);
						return x.ok ? (y = x.body.asset.asset_id, {
							uploadLease: x.body.args
						}) : {
							error: x.error || void 0
						}
					}, !0)), I(!1), i().uploads[t] || null
				}, A = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n().uploads[e];
					s && !Object(C.c)(s) && await t(F(s.file, s.key, s.metadata.fileSource, void 0))
				}, B = (e, t, n) => async (s, a) => {
					const c = e.map((e, o) => new Promise(async o => {
							const a = Object(C.d)(n, r()().slice(-6));
							await s(F(e, a, t, () => o({
								uploadKey: a,
								isValid: !0
							}))), o({
								uploadKey: a,
								isValid: !1
							})
						})),
						d = await Promise.all(c),
						u = d.map(e => e.uploadKey);
					return s(((e, t = 3) => async (n, s) => {
						const {
							uploads: r
						} = s(), a = e.map(e => r[e]).filter(e => e.status === C.a.FAILED && !e.metadata.mimetype).map(e => e.error), c = a.length > t ? t - 1 : a.length, d = a.length - c;
						a.slice(0, c).forEach(e => n(Object(l.f)({
							duration: l.a,
							kind: k.b.Error,
							text: Object(i.a)(e)
						}))), d > 0 && n(Object(l.f)({
							duration: l.a,
							kind: k.b.Error,
							text: o.fbt._({
								"*": "Couldn't add {number} more files",
								_1: "Couldn't add 1 more file"
							}, [o.fbt._plural(d, "number")], {
								hk: "2fQwvl"
							})
						}))
					})(u)), d.filter(e => e.isValid).map(e => e.uploadKey)
				}, U = (e, t) => async (n, s) => {
					const r = s(),
						a = Object(S.W)(r),
						{
							items: i
						} = a,
						c = !i.length && 1 === e.length,
						m = Object(S.N)(r) && !c;
					let p = !1,
						h = e;
					if (m) {
						if (Object(y.x)(a)) return void n(Object(l.f)({
							kind: k.b.Error,
							text: o.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						h.some(e => Object(g.l)(e.type)) && n(Object(l.f)({
							kind: k.b.Error,
							text: o.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), h = h.filter(e => Object(g.k)(e.type));
						const e = Math.max(0, u.b - i.length);
						h.length > e && (n(Object(l.f)({
							kind: k.b.Error,
							text: o.fbt._("You have hit the limit of {images_limit} images", [o.fbt._param("images_limit", `${u.b}`)], {
								hk: "6M4kX"
							})
						})), h = h.slice(0, e))
					} else h = h.slice(0, 1), p = !0, n(Object(d.j)(L, !0));
					const b = await n(B(h, t, L));
					if (!b.length) return;
					const f = b.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						C = 0 === i.length;
					n(Object(P.d)({
						...a,
						items: p ? f : [...i, ...f],
						selectedKey: C ? b[0] : b[b.length - 1]
					}))
				}
		},
		"./src/reddit/actions/postCreation/submit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return te
			})), n.d(t, "a", (function() {
				return ie
			})), n.d(t, "b", (function() {
				return de
			}));
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/telemetry/index.ts"),
				a = n("./src/reddit/actions/crosspostSubredditRec/index.ts"),
				i = n("./src/reddit/actions/governance/index.ts"),
				c = n("./src/reddit/actions/pages/subreddit.ts"),
				l = n("./src/reddit/actions/postDraft.ts"),
				d = n("./src/reddit/actions/scheduledPosts/index.ts"),
				u = n("./src/reddit/actions/urlRequested.ts"),
				m = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				p = n("./src/config.ts"),
				h = n("./src/lib/convertToCamelCase/index.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				g = n("./src/lib/omitHeaders/index.ts"),
				C = n("./src/reddit/constants/headers.ts"),
				E = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				x = n("./src/reddit/helpers/flair.ts"),
				_ = n("./src/reddit/helpers/name/index.ts"),
				v = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				O = n("./src/reddit/models/Poll/index.ts"),
				y = n("./src/reddit/models/Post/index.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				j = n("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function S(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const T = e => {
					switch (e.kind) {
						case k.p.CROSSPOST:
							return k.p.CROSSPOST;
						case k.p.LINK:
							return k.p.LINK;
						case k.p.POLL:
							return k.p.POLL;
						case k.p.MEDIA:
							return e.makeGif ? k.p.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				P = e => {
					switch (e.kind) {
						case k.p.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case k.p.MARKDOWN:
							return {
								text: e.markdown
							};
						case k.p.LINK:
						case k.p.MEDIA:
							return {
								url: e.url
							};
						case k.p.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case k.p.POLL:
							return e.poll.type === O.a.Prediction ? {
								duration: 999999,
								end_timestamp: S(e.poll.endDate),
								options: e.poll.options.map(e => e.text),
								prediction: !0,
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							} : {
								duration: Math.floor(e.poll.duration / 864e5),
								options: e.poll.options.map(e => e.text),
								text: e.markdown,
								raw_rtjson: "markdown" in e ? null : JSON.stringify({
									document: e.document
								})
							}
					}
				},
				I = e => {
					const t = Object(_.g)(e.destSubreddit.name);
					return {
						...e.destSubreddit.isProfile ? {
							sr: `u_${t}`,
							submit_type: "profile"
						} : {
							sr: t,
							submit_type: "subreddit"
						},
						api_type: "json",
						show_error_list: !0,
						draft_id: e.draftId || void 0,
						title: e.title,
						discussion_type: e.isChatPost ? y.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== k.p.POLL ? {
							kind: T(e),
							original_content: e.isOC
						} : {},
						post_to_twitter: e.postToTwitter,
						sendreplies: e.sendReplies,
						...e.gRecaptchaResponse ? {
							"g-recaptcha-response": e.gRecaptchaResponse
						} : {},
						resubmit: e.resubmit,
						...P(e),
						...e.kind === k.p.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === k.p.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(x.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === k.j.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				w = async (e, t) => {
					if (!e.ok) return Object(v.b)(e);
					const n = e.body.json.data;
					let s = n.url;
					s || t.kind !== k.p.MEDIA || (s = await ((e, t) => new Promise(n => {
						const o = new WebSocket(e),
							s = e => {
								o.close(), clearTimeout(r), n(e)
							},
							r = setTimeout(() => {
								s("")
							}, t);
						o.onmessage = e => {
							const t = JSON.parse(e.data),
								n = "success" === t.type ? t.payload.redirect : "";
							s(n)
						}, o.onerror = e => {
							s("")
						}
					}))(n.websocket_url, 3e4));
					const r = n.id || (e => {
							const t = /comments\/(\w+)\/.*$/.exec(e),
								n = t && t[1];
							return n ? `${o.Ib.Post}_${n}` : ""
						})(s),
						a = Object(f.parse)(s).path,
						i = n.drafts_count;
					return {
						...e,
						body: {
							id: r,
							path: a,
							draftsCount: i
						}
					}
				};
			var N = (e, t) => Object(b.a)(Object(g.a)(e, [C.a]), {
				endpoint: Object(j.a)(Object(E.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: o.jb.POST,
				data: I(t)
			}).then(async e => await w(e, t));
			var D = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				M = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				R = n("./src/reddit/featureFlags/index.ts"),
				L = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				F = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				A = n("./src/reddit/helpers/trackers/postComposer.ts"),
				B = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				U = n("./src/reddit/models/User/index.ts"),
				W = n("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				z = n("./src/reddit/selectors/postCreations.ts"),
				G = n("./src/reddit/selectors/postDraft.ts"),
				H = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				K = n("./src/reddit/models/ScheduledPost/index.ts"),
				q = n("./src/reddit/actions/postCreation/constants.ts"),
				J = n("./src/reddit/actions/postCreation/general.ts"),
				Z = n("./src/reddit/actions/postCreation/mediaUpload.ts");
			const Q = Object(s.a)(q.w),
				Y = Object(s.a)(q.P),
				X = Object(s.a)(q.o),
				$ = Object(s.a)(q.y),
				ee = Object(s.a)(q.cb),
				te = Object(s.a)(q.J),
				ne = Object(s.a)(q.a),
				oe = Object(s.a)(q.F),
				se = e => `/r/${e}/about/${K.r}`,
				re = (e, t) => {
					const n = e || {
							duration: o.B,
							options: []
						},
						{
							govType: s,
							newSubreddit: r,
							newTopMod: a
						} = Object(z.u)(t),
						i = {
							...n
						};
					return s && (i.type = s), i.type === O.a.ReplaceTopMod ? (i.params = {
						userName: a
					}, i.options = O.f[O.a.ReplaceTopMod]()) : i.type === O.a.Spinoff ? (i.params = {
						subreddit: r
					}, i.options = O.f[O.a.Spinoff](r)) : i.options = i.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), i
				},
				ae = e => {
					const t = e.uploads,
						n = Object(z.W)(e),
						s = Object(z.a)(e),
						r = Object(z.gb)(e);
					if (s === o.Wb.POST) return m.a.getPendingThumbnailUploads(r, t);
					if (s === o.Wb.MEDIA && n && n.items.length) {
						const {
							video: e
						} = n.items[0];
						if (e && e.thumbnail && !t[k.n]) return [{
							...e.thumbnail,
							uploadKey: k.n
						}]
					}
				},
				ie = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					let a = s();
					const {
						pending: i
					} = a.creations.api.post.submit, c = Object(G.g)(a);
					if (i || c) return;
					n(oe(e)), a = s();
					const d = Object(z.a)(a),
						u = R.d.rteVideoPoster(a),
						m = ae(a),
						p = d === o.Wb.MEDIA;
					m && (u || p) && (await n(Z.f(m)), ae(s())) || (e === k.r.Draft ? await n(Object(l.r)(t.draftId)) : e === k.r.ScheduledPost && Object(H.r)(a) ? await n(ce(t)) : e === k.r.ScheduledPost ? await n(le(t)) : await n(de(t)))
				}, ce = e => async (t, n, {
					gqlContext: o
				}) => {
					const s = n(),
						a = Object(z.db)(s),
						i = Object(z.eb)(s, e),
						c = Object(z.h)(s),
						l = Object(H.r)(s);
					if (!(i && c.id && a && Object(F.f)(l))) return;
					const m = c.id,
						p = Object(H.a)(s, {
							subredditId: m,
							scheduledPostId: l
						});
					if (p && Object(r.a)(Object(B.r)(p)(s)), t(Q(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(z.x)(n()))) return;
					const {
						isPoll: h,
						polls: b
					} = Object(z.u)(s), f = re(b, s), g = {
						...Object(D.e)({
							poll: h ? f : void 0,
							submission: i,
							schedule: a,
							subredditId: c.id,
							scheduledPostId: l
						})
					}, C = await Object(M.a)(o(), g);
					if (C.ok) return t(Object(d.e)({
						subredditId: c.id
					})), void t(Object(u.a)(se(c.name), !1));
					const E = C.error;
					t(X(E))
				}, le = e => async (t, n, {
					gqlContext: o
				}) => {
					const s = n(),
						a = Object(z.db)(s),
						i = Object(z.eb)(s, e),
						c = Object(z.h)(s),
						l = Object(H.b)(s);
					if (!i || !c.id || !a) return;
					if (t(Q(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(z.x)(n()))) return;
					const {
						isPoll: m,
						polls: p
					} = Object(z.u)(s), h = re(p, s), b = {
						duration: h.duration,
						options: h.options
					}, f = {
						...Object(D.d)({
							poll: m ? b : void 0,
							submission: i,
							schedule: a,
							subredditId: c.id
						}),
						creationToken: l
					}, g = await Object(D.a)(o(), f);
					if (g.ok) {
						t(Object(d.e)({
							subredditId: c.id
						}));
						const e = g.body.data.createScheduledPost.scheduledPost;
						return e && Object(r.a)(Object(B.o)(Object(L.d)(e))(s)), void t(Object(u.a)(se(c.name), !1))
					}
					const C = g.error;
					t(X(C))
				}, de = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n(),
						l = Object(z.eb)(r, e),
						{
							isPoll: d,
							polls: m
						} = Object(z.u)(r),
						f = re(m, r);
					if (!l) return;
					if (t(Q(l)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(z.x)(n()))) return;
					let x;
					const _ = d && R.d.spPolls(r);
					if ((x = _ ? await
							function(e, t, n) {
								const s = t.destSubreddit.id;
								return Object(b.a)(e, {
									method: o.jb.POST,
									endpoint: `${p.a.metaUrl}/polls/${s}`,
									type: "json",
									data: {
										poll: n,
										subredditId: s,
										...Object(h.a)(I(t))
									}
								}).then(async e => {
									const n = e.ok ? {
											...e,
											body: {
												json: {
													data: e.body
												}
											}
										} : e,
										o = await w(n, t);
									if (o.ok) {
										return {
											body: {
												...o.body,
												poll: e.body.poll
											},
											ok: !0,
											status: e.status
										}
									}
									return {
										error: o.body,
										ok: !1,
										status: e.status
									}
								})
							}(s(), l, f) : d ? await ((e, t) => Object(b.a)(Object(g.a)(e, [C.a]), {
								endpoint: Object(j.a)(Object(E.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
								method: o.jb.POST,
								data: I(t),
								type: "json"
							}).then(e => w(e, t)))(s(), {
								...l,
								kind: k.p.POLL,
								poll: f
							}) : l.kind === k.p.GALLERY ? await ((e, t) => Object(b.a)(Object(g.a)(e, [C.a]), {
								endpoint: Object(j.a)(Object(E.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
								method: o.jb.POST,
								data: {
									...I(t),
									items: t.galleryItems.map(e => ({
										caption: e.caption,
										outbound_url: e.url,
										media_id: e.assetId
									}))
								},
								type: "json"
							}).then(e => w(e, t)))(s(), l) : await N(s(), l)).ok) {
						const e = Object(V.k)(r),
							n = x.body;
						t(Y({
							draftId: l.draftId,
							response: n
						})), _ && t(Object(i.c)({
							poll: n.poll
						}));
						const o = Object(W.b)(r);
						l.kind !== k.p.LINK && l.kind !== k.p.RICH_TEXT && l.kind !== k.p.MARKDOWN || d || !o || t(Object(a.c)());
						const s = (n.path || `/user/${Object(U.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(c.subredditInvalidateListing)(l.destSubreddit.name)), t(Object(u.a)(s, !1))
					} else {
						if (d) {
							const e = x.error;
							t($(e))
						}
						const e = x.error;
						e.type === o.I.BAD_CAPTCHA_ERROR ? t(ne()) : e.type === o.I.VALIDATION_ERROR ? t(ee(e)) : e.type === o.I.SUBMIT_VALIDATION_ERROR ? t(te(e)) : t(X(e))
					}
					const v = Object(J.o)(l.kind),
						O = x.ok && x.body && x.body.id && Object(y.t)(x.body.id),
						S = n();
					A.B(S, v, O, e.correlationId)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(o.a)(r.r),
				i = Object(o.a)(r.F),
				c = e => async (t, n, {
					apiContext: o
				}) => {
					const r = await Object(s.a)(o(), e);
					r && r.ok ? t(a({
						streamId: e,
						level: r.body.data.auto_mute_status.level
					})) : t(i(e))
				}
		},
		"./src/reddit/actions/scheduledPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return s
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "m", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "r", (function() {
				return E
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "v", (function() {
				return O
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "x", (function() {
				return k
			})), n.d(t, "w", (function() {
				return j
			})), n.d(t, "t", (function() {
				return S
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = "SCHEDULED_POSTS_REQUESTED",
				r = "SCHEDULED_POSTS_LOADED",
				a = "STANDALONE_SCHEDULED_POSTS_LOADED",
				i = "RECURRING_SCHEDULED_POSTS_LOADED",
				c = "SCHEDULED_POSTS_FAILED",
				l = "SCHEDULED_POST_CREATION_SUCCEEDED",
				d = "SCHEDULED_POST_SUBMIT_NOW_SUCCESS",
				u = "SCHEDULED_POST_MUTATE_REQUESTED",
				m = "SCHEDULED_POST_MUTATE_FAILED",
				p = "STANDALONE_POST_MUTATE_SUCCESS",
				h = "RECURRING_POST_MUTATE_SUCCESS",
				b = "RECURRING_POST__EDIT_MODAL_LOAD",
				f = "RECURRING_POST__EDIT_LOAD",
				g = "STANDALONE_POST__EDIT_LOAD",
				C = "SCHEDULED_POST__DELETE_SUCCESS",
				E = () => o.fbt._("Failed to load scheduled posts", null, {
					hk: "1fhkq4"
				}),
				x = () => o.fbt._("Whoops! Invalid scheduled post", null, {
					hk: "35jBb6"
				}),
				_ = () => o.fbt._("Unable to delete scheduled post", null, {
					hk: "23nWms"
				}),
				v = () => o.fbt._("Successfully deleted scheduled post", null, {
					hk: "1Lk7r2"
				}),
				O = () => o.fbt._("Unable to submit scheduled post", null, {
					hk: "vCW43"
				}),
				y = () => o.fbt._("Retry", null, {
					hk: "4bCZ7M"
				}),
				k = () => o.fbt._("Successfully submitted scheduled post!", null, {
					hk: "ONo6q"
				}),
				j = () => o.fbt._("Successfully edited scheduled post!", null, {
					hk: "HfGcT"
				}),
				S = () => o.fbt._("Failed to update scheduled post", null, {
					hk: "2zBuRu"
				})
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return E
			})), n.d(t, "a", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/telemetry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/scheduledPosts/index.ts"),
				c = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				m = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				p = n("./src/reddit/models/ScheduledPost/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/routes/postCreation/index.ts"),
				f = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const g = Object(a.a)(c.n),
				C = Object(a.a)(c.b),
				E = (e, t) => async (n, o, r) => {
					const a = Object(f.a)(o(), {
						scheduledPostId: t,
						subredditId: e
					});
					a && (await n(Object(s.b)(Object(b.c)(a.subreddit.name, a.collectionId))), n((Object(p.p)(a) ? C : g)(a)))
				}, x = (e, t) => {
					Object(p.p)(t) ? e(Object(i.d)({
						scheduledPost: t
					})) : e(Object(i.h)({
						scheduledPost: t
					}))
				}, _ = (e, t, n) => async (s, a, {
					gqlContext: b
				}) => {
					s(Object(i.g)());
					const g = Object(f.a)(a(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (g && Object(p.p)(g) && Object(r.a)(Object(m.u)()(a(), g)), !g) return void s(Object(i.f)({
						message: o.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(n).length) return void x(s, g);
					const C = await Object(d.a)(b(), {
							...n,
							id: t
						}),
						E = C.body;
					if (!(C.ok && E && E.data && E.data.updateScheduledPost && E.data.updateScheduledPost.ok && E.data.updateScheduledPost.scheduledPost)) return s(Object(i.f)({
						message: C.error && C.error.fields && C.error.fields.length && C.error.fields[0].msg || o.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void s(Object(l.f)(Object(l.e)(c.t(), h.b.Error, c.s(), _(e, t, n))));
					s(Object(l.f)(Object(l.e)(c.w(), h.b.SuccessCommunity))), x(s, Object(u.d)(E.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "b", (function() {
				return I
			}));
			var o = n("./src/lib/assertNever.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				a = n("./src/reddit/actions/scheduledPosts/edit.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				l = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				d = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				u = n("./src/reddit/models/ScheduledPost/index.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				h = n("./src/telemetry/index.ts");
			const b = Object(s.a)(r.g),
				f = Object(s.a)(r.k),
				g = Object(s.a)(r.j),
				C = Object(s.a)(r.o),
				E = Object(s.a)(r.d),
				x = Object(s.a)(r.f),
				_ = Object(s.a)(r.m),
				v = Object(s.a)(r.a),
				O = Object(s.a)(r.c),
				y = Object(s.a)(r.e),
				k = Object(s.a)(r.h),
				j = (e, t) => {
					e(y()), e(Object(i.f)(Object(i.e)(r.r(), m.b.Error, r.s(), S(t))))
				},
				S = ({
					subredditId: e,
					includeStandalone: t = {
						standaloneFirst: 25
					},
					includeRecurring: n = {
						recurringFirst: 1e4
					},
					...o
				}) => async (s, r, {
					gqlContext: a
				}) => {
					if (Object(p.h)(r(), {
							subredditId: e
						})) return;
					s(b());
					const i = {
							subredditId: e,
							includeRecurring: n,
							includeStandalone: t,
							...o
						},
						d = await Object(c.b)(a(), i);
					Object(c.f)(d, i) ? P(s, Object(l.e)(d.body.data), i) : j(s, i)
				}, T = e => async (t, n, {
					gqlContext: o
				}) => {
					const s = n();
					if (!Object(p.h)(s, {
							subredditId: e
						})) return t(S({
						subredditId: e
					}));
					if (!Object(p.g)(s, {
							subredditId: e,
							type: u.f.standalonePosts
						})) return;
					const r = Object(p.c)(s, {
						subredditId: e,
						type: u.f.standalonePosts
					});
					if (!r) return;
					t(b());
					const a = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: 25,
								standaloneAfter: r
							}
						},
						i = await Object(c.b)(o(), a);
					i.ok ? P(t, Object(l.e)(i.body.data), a) : t(y())
				}, P = (e, t, n) => {
					Object(l.b)(t) ? e(x(t)) : Object(l.a)(t) ? e(v(t)) : Object(l.c)(t) ? e(_(t)) : j(e, n)
				}, I = (e, t) => async (n, s, r) => {
					const i = {},
						c = s();
					switch (e) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isContestMode":
						case "isPostAsMetaMod":
						case "isSpoiler":
							i[e] = !t[e];
							break;
						case "isSticky":
							const n = !!t.sticky && "NONE" !== t.sticky;
							i.sticky = n ? "NONE" : "SECOND";
							break;
						default:
							return Object(o.a)(e)
					}
					Object(h.a)(Object(d.t)(e, i[e], Object(u.p)(t))(c)), n(Object(a.a)(t.subreddit.id, t.id, i))
				}
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				s = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				r = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/subredditCrosspostable.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/subscription/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/selectors/subreddit.ts");
			const d = "SUBREDDIT_CROSSPOSTABLE__PENDING",
				u = "SUBREDDIT_CROSSPOSTABLE__LOADED",
				m = "SUBREDDIT_CROSSPOSTABLE__FAILED",
				p = (Object(o.a)(d), Object(o.a)(u)),
				h = Object(o.a)(m),
				b = () => async (e, t, {
					apiContext: n
				}) => {
					await e(s.e());
					const {
						api: o,
						ids: d
					} = t().subreddits.crosspostable;
					if (o.pending || Object.keys(d).length) return;
					const u = await ((e, t) => Object(a.a)(Object(i.a)(e, [c.a]), {
						data: t,
						endpoint: `${e.apiUrl}/api/crosspostable_subreddits.json`,
						method: r.jb.GET
					}))(n(), {
						sr_detail: !1
					});
					if (u.ok) {
						const n = t(),
							o = u.body && u.body.length ? u.body.map(e => Object(l.D)(n, e)).filter(e => !!e).reduce((e, t) => (e[t] = !0, e), {}) : {};
						e(p({
							subredditIds: o
						}))
					} else e(h({
						error: u.error
					}))
				}
		},
		"./src/reddit/actions/upload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "l", (function() {
				return T
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "j", (function() {
				return I
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/get.js"),
				s = n.n(o),
				r = n("./node_modules/uuid/v4.js"),
				a = n.n(r),
				i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/uploadToS3/index.ts"),
				l = n("./src/reddit/models/Upload/index.ts");
			const d = "UPLOAD_PENDING",
				u = "UPLOAD_UPLOADING",
				m = "UPLOAD_METADATA_CHANGED",
				p = "UPLOAD_PROGRESS",
				h = "UPLOAD_SUCCESS",
				b = "UPLOAD_FAILED",
				f = "UPLOAD_CANCELED",
				g = "UPLOAD_REMOVED",
				C = Object(i.a)(d),
				E = Object(i.a)(u),
				x = Object(i.a)(m),
				_ = Object(i.a)(p),
				v = Object(i.a)(h),
				O = Object(i.a)(b),
				y = Object(i.a)(f),
				k = Object(i.a)(g),
				j = new Map,
				S = (e, t) => {
					const n = j.get(e) || [];
					n.push(t), j.set(e, n)
				},
				T = (e, t, n, o = !1) => async (r, i, {
					apiContext: d
				}) => {
					const u = t;
					if (i().uploads[u] && Object(l.c)(i().uploads[u])) return;
					const m = a()(),
						p = () => {
							const e = i().uploads[u];
							return !e || e.id !== m || e.status === l.a.CANCELED
						};
					r(C({
						key: u,
						id: m,
						file: e
					}));
					const {
						uploadLease: h,
						error: b
					} = await n(i().uploads[u]);
					if (p()) return;
					if (b || !h) return void r(O({
						key: u,
						error: b
					}));
					let f;
					S(m, () => {
						f && f.abort()
					}), r(E({
						key: u
					}));
					const g = await Object(c.a)(e, h, e => (f = e, o && e.on("progress", e => {
						if (!p() && "upload" === e.direction) {
							const t = {
								percent: e.percent,
								total: e.total,
								uploaded: e.loaded
							};
							r(_({
								key: u,
								progress: t
							}))
						}
					}), e));
					if (f = null, !p())
						if (g.ok) {
							const e = decodeURIComponent(g.body.PostResponse.Location);
							r(v({
								key: u,
								url: e
							}))
						} else {
							const e = s()(g, "body.Error.Message.0"),
								t = {
									type: "ERROR",
									...e ? {
										fields: [{
											field: "0",
											msg: e
										}]
									} : {}
								};
							r(O({
								key: u,
								error: t
							}))
						}
				}, P = (e, t = !1) => (n, o) => {
					const s = o().uploads[e];
					s && (((e, t) => {
						const n = j.get(e);
						n && n.forEach(n => n(e, t)), j.delete(e)
					})(s.id, t), n(t ? k({
						key: e
					}) : y({
						key: e
					})))
				}, I = (e, t = !1) => (n, o) => {
					Object.keys(o().uploads).forEach(o => {
						o.startsWith(e) && n(P(o, t))
					})
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js");
			const a = (e, t = !0) => async (n, a, {
				routes: i
			}) => {
				const c = a();
				Object(o.a)(e, i, c) ? n(Object(r.b)(e)) : t ? Object(s.e)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less": function(e, t, n) {
			e.exports = {
				breakout: "_1VBLErIxAjOke05q8yLOyf"
			}
		},
		"./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t) => 21 * e + 33 + (t ? 10 : 0);
			t.a = ({
				breakOut: e,
				depth: t,
				isEditing: n,
				...o
			}) => s.a.createElement("div", c({
				className: Object(r.a)({
					[i.a.breakout]: e
				}),
				style: {
					left: l(t, n)
				}
			}, o))
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.m.less": function(e, t, n) {
			e.exports = {
				BaseFooterButton: "_2vw1scWo_wiHUpczRL3dho",
				baseFooterButton: "_2vw1scWo_wiHUpczRL3dho",
				SubmitButton: "_22S4OsoDdOqiM-hPTeOURa",
				submitButton: "_22S4OsoDdOqiM-hPTeOURa",
				LoadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				loadingIcon: "_2qsMO_C_HwxgUgktaOeqZ2",
				CancelButton: "cZz52cPDbNgzrR1Oo1k27",
				cancelButton: "cZz52cPDbNgzrR1Oo1k27",
				ButtonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				buttonWrapper: "_3SNMf5ZJL_5F1qxcZkD0Cp",
				FormFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				formFooterWrapper: "_17TqawK-44tH0psnHPIhzS",
				pending: "_5p2VqxvUAZTtPIXr7XU5p"
			}
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				d = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = a.a.wrapped(c.a, "LoadingIcon", d.a), p = a.a.wrapped(i.t, "CancelButton", d.a), h = e => e.preventDefault();
			t.a = ({
				pending: e,
				cancelButtonEnabled: t = !0,
				children: n,
				className: o,
				submitButtonText: a,
				canSubmit: c,
				onSubmit: l,
				onCancel: b
			}) => s.a.createElement("div", {
				className: Object(r.a)(d.a.FormFooterWrapper, o, {
					[d.a.pending]: e
				})
			}, s.a.createElement("div", {
				className: d.a.ButtonWrapper
			}, s.a.createElement(i.t, {
				className: d.a.SubmitButton,
				size: i.d.XS,
				type: "submit",
				disabled: !c,
				onClick: l,
				onMouseDown: h
			}, e ? s.a.createElement(m, {
				sizePx: 10
			}) : a), t && s.a.createElement(p, {
				priority: i.c.Secondary,
				size: i.d.XS,
				type: "reset",
				disabled: e,
				onClick: b,
				onMouseDown: h
			}, u._("Cancel", null, {
				hk: "2TSLl5"
			}))), n)
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				wrapper: "_3oZ5XBWSc3x7cXsvdt3fJ",
				MarkdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				markdownModeIcon: "_1EifMLRAKpii4eqciAhY4q",
				Button: "_1Q2Vq3gesOWZA73NbspEiQ",
				button: "_1Q2Vq3gesOWZA73NbspEiQ"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				loadingIcon: "_2izw1tRcQRvnfuR1E05Cy4",
				CommentHeader: "PN-j_b1WdWATQha3fOgkV",
				commentHeader: "PN-j_b1WdWATQha3fOgkV",
				HelpButton: "MQruKnjMvMoDlmee_nF40",
				helpButton: "MQruKnjMvMoDlmee_nF40",
				SwitchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				switchModeButton: "_2UH-_HmB6X-2cCsOZVDtC5",
				FormHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				formHeaderText: "_1EQf9w-o91arfThHA8fn-N",
				HelpIcon: "_3TI2tdRj3loY834ns393zu",
				helpIcon: "_3TI2tdRj3loY834ns393zu",
				Wrapper: "B0932G-wzdOKwoaSaKsKU",
				wrapper: "B0932G-wzdOKwoaSaKsKU",
				isTopLevelComment: "_3-O087Fe8Gpv51vkui03iG",
				mRedesign: "dDb_knwHdpaUGniyi2rvM",
				FormWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				formWrapper: "_2LoNYeXgOQfq1adQ3jWSbi",
				ResizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				resizableAutosizeTextarea: "AISc5olsWsxMr-ZvG8ywU",
				mExpanded: "_2FiN5dLqiHVqs1l1NeoU-W",
				FormFooter: "OQubMtSYxy2qH2Q1upQvp",
				formFooter: "OQubMtSYxy2qH2Q1upQvp",
				userIcon: "_1LJWM5yPEtZv26nvbB_mvr",
				CurrentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				currentUserIcon: "_6R8kWvljXn9F_7IAh1RG4",
				pending: "_1N53zdZlGyvjHMUoXkJa42",
				focused: "_2sPOgUISlhUYTMcHhUPCTP"
			}
		},
		"./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return be
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/debounce.js"),
				r = n.n(s),
				a = n("./node_modules/lodash/noop.js"),
				i = n.n(a),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./node_modules/react-dom/index.js"),
				u = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./src/reddit/actions/comment/authoring.ts"),
				h = n("./src/reddit/components/AuthorLink/index.tsx"),
				b = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				f = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				g = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				C = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				E = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				x = n("./src/reddit/controls/ErrorText/index.tsx"),
				_ = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = n("./src/reddit/icons/svgs/Help/index.tsx"),
				O = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				y = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				k = n("./src/lib/fastdom/index.ts"),
				j = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				S = n.n(j),
				T = n("./src/lib/lessComponent.tsx");
			const P = 310,
				I = T.a.div("Container", S.a);
			class w extends l.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), n = t < P ? "compact" : "full";
						n !== this.state.toolbarType && k.a.write(() => {
							this.setState({
								toolbarType: n
							})
						})
					}
				}
				componentDidMount() {
					k.a.read(this.selectToolbar), window.addEventListener("resize", this.selectToolbar)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.selectToolbar)
				}
				render() {
					return l.a.createElement(I, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var N = n("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				D = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				M = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				R = n.n(M),
				L = n("./src/reddit/controls/Button/index.tsx");
			const F = T.a.wrapped(_.a, "LoadingIcon", R.a),
				A = ({
					isFilled: e,
					...t
				}) => l.a.createElement(F, t),
				B = T.a.div("Wrapper", R.a),
				U = T.a.wrapped(N.a, "MarkdownModeIcon", R.a),
				W = ({
					isFilled: e,
					...t
				}) => l.a.createElement(U, t);
			var z = l.a.memo((function(e) {
					const t = o.fbt._("Switch to fancy pants editor", null, {
						hk: "1XOb4H"
					});
					return l.a.createElement(B, null, l.a.createElement(L.t, {
						priority: L.c.Plain,
						size: L.d.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? A : W
					}, l.a.createElement(D.a, {
						text: t
					})))
				})),
				G = n("./src/lib/classNames/index.ts"),
				H = n("./src/reddit/constants/keycodes.ts"),
				V = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				K = n("./src/realtime/GQLSubscription/async.tsx"),
				q = n("./src/reddit/components/UsersCountIndicator/constants.ts"),
				J = n("./src/reddit/constants/componentSizes.ts"),
				Z = n("./src/reddit/constants/componentTestIds.ts"),
				Q = n("./src/reddit/selectors/activeModalId.ts"),
				Y = n("./src/reddit/selectors/comments.ts"),
				X = n("./src/reddit/selectors/editorContent.ts"),
				$ = n("./src/reddit/selectors/experiments/typingIndicators.ts"),
				ee = n("./src/reddit/actions/modal.ts"),
				te = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				ne = n("./src/reddit/models/PostCreationForm/index.ts"),
				oe = n("./src/reddit/models/PostDraft/index.ts"),
				se = n("./src/reddit/models/User/index.ts"),
				re = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				ae = n.n(re);
			const ie = T.a.button("SwitchModeButton", ae.a),
				ce = T.a.wrapped(_.a, "LoadingIcon", ae.a),
				le = T.a.div("CommentHeader", ae.a),
				de = T.a.span("FormHeaderText", ae.a),
				ue = T.a.button("HelpButton", ae.a),
				me = T.a.wrapped(v.a, "HelpIcon", ae.a),
				pe = T.a.wrapped(te.a, "ResizableAutosizeTextarea", ae.a),
				he = T.a.wrapped(E.a, "CurrentUserIcon", ae.a),
				be = e => l.a.createElement(ue, {
					className: e.className,
					onClick: e.onClick
				}, l.a.createElement(me, null)),
				fe = 8,
				ge = 16,
				Ce = Object(u.b)(() => Object(m.c)({
					activeModalId: Q.a,
					userName: e => e.user.account ? Object(se.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: Y.i,
					isConverting: (e, t) => Object(X.a)(e, t.draftKey),
					isTypingIndicatorsWriteTestEnabled: (e, t) => !!t.isTopLevelComment && Object($.d)(e)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(ee.i)(Object(V.a)(t.draftKey))),
					helpModalToggled: () => e(Object(ee.i)(C.b))
				}));
			class Ee extends l.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.realtimeGQLVariables = void 0, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.setUserStoppedTyping = r()(() => this.setState({
						isUserTyping: !1
					}), q.c), this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < J.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.wrapperHeight || k.a.write(() => {
							this.setState({
								breakOut: e,
								wrapperHeight: t
							})
						})
					}, this.focus = () => {
						this.textAreaRef && this.textAreaRef.focus()
					}, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange && this.props.onChange({
							text: t,
							editorState: null
						}), this.setState(() => ({
							text: t,
							hasChanged: !0,
							showError: !1
						}), () => {
							k.a.read(this.detectBreakout)
						}), this.props.isTypingIndicatorsWriteTestEnabled && (this.state.isUserTyping || this.setState({
							isUserTyping: !0
						}), this.setUserStoppedTyping())
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === oe.c.edit, this.onCancel = () => {
						this.shouldConfirmCancel() ? this.props.cancelModalToggled() : this.cancelForm()
					}, this.onBlur = e => {
						(!e || e && e.relatedTarget !== this.switchModeBtn) && (this.textAreaRef && this.textAreaRef.blur(), this.props.onFocusChanged(!1))
					}, this.onFocus = () => {
						this.props.onFocus(), this.props.onFocusChanged(!0)
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === H.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: ne.i.MARKDOWN,
							draftType: this.props.draftType,
							editorState: null,
							text: this.getCurrentText(),
							validate: this.props.showWarningModal
						}), this.onBlur()
					}, this.userHasEnteredText = () => {
						const {
							text: e
						} = this.state;
						return !!e.trim()
					}, this.setWrapperRef = e => {
						this.wrapperEl = e, this.props.editorElementRef && this.props.editorElementRef(e)
					}, this.setTextAreaRef = e => this.textAreaRef = e;
					const {
						postId: t,
						isTypingIndicatorsWriteTestEnabled: n
					} = e;
					n && (this.realtimeGQLVariables = {
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "USER_IS_TYPING_ON_POST",
								postID: t
							}
						}
					});
					const {
						draftType: s,
						hasError: a,
						initialText: i
					} = e;
					this.state = {
						text: i || "",
						autofocusDisabled: !1,
						hasChanged: !1,
						showError: a,
						breakOut: !1,
						wrapperHeight: void 0,
						formHeight: null,
						cancelModalText: s === oe.c.edit ? o.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "3RHatI"
						}) : o.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "38Df9h"
						}),
						isUserTyping: !1
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), k.a.read(this.detectBreakout), k.a.write(() => {
						this.props.draft.hasFocus && this.textAreaRef && this.textAreaRef.focus()
					}), this.props.instanceRef && this.props.instanceRef(this)
				}
				componentWillUnmount() {
					this.props.onUnmount({
						text: this.getCurrentText()
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null), this.props.isTypingIndicatorsWriteTestEnabled && this.setUserStoppedTyping.cancel()
				}
				componentDidUpdate(e) {
					const t = e.pending,
						{
							hasError: n,
							pending: o
						} = this.props;
					t && !o && !n ? this.setState({
						text: "",
						showError: !1
					}) : e.hasError !== this.props.hasError && this.setState({
						showError: this.props.hasError
					})
				}
				getCurrentText() {
					const {
						draft: e
					} = this.props, t = e && e.text;
					return this.state.text || t
				}
				getWrapperHeight() {
					if (!this.textAreaRef) return;
					const e = Object(d.findDOMNode)(this.textAreaRef);
					return e instanceof Element ? e.getBoundingClientRect().height + fe + ge + J.o : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: n,
						className: s,
						disableAutofocus: r,
						depth: a,
						draft: c,
						draftKey: d,
						draftType: u,
						errorMsgs: m,
						pending: E,
						modalSeen: _,
						submitButtonText: v,
						isCommentBoxDesignEnabled: k,
						isExpanded: j,
						isTopLevelComment: S,
						isTypingIndicatorsWriteTestEnabled: T,
						onSwitchMode: P,
						userName: I
					} = this.props, {
						cancelModalText: N,
						showError: D,
						text: M,
						breakOut: R,
						wrapperHeight: L,
						isUserTyping: F
					} = this.state, A = Object(V.a)(d), B = c.draftType === oe.c.edit;
					return l.a.createElement("div", {
						"data-test-id": Z.b,
						className: Object(G.a)(ae.a.Wrapper, s, {
							[ae.a.isTopLevelComment]: S,
							[ae.a.mExpanded]: j,
							[ae.a.mRedesign]: k
						}),
						ref: this.setWrapperRef,
						style: {
							height: R ? L : void 0
						}
					}, T && F && l.a.createElement(K.a, {
						variables: this.realtimeGQLVariables,
						onData: i.a,
						queryKey: "userIsTypingOnPost"
					}), !k && S && l.a.createElement(le, null, l.a.createElement(de, null, o.fbt._("Comment as {authorLink}", [o.fbt._param("authorLink", l.a.createElement(h.a, {
						author: I,
						isAuthorDeleted: !1
					}, I))], {
						hk: "4pMWAk"
					}))), l.a.createElement(O.a, {
						breakOut: R,
						depth: a,
						isEditing: B
					}, k && l.a.createElement("div", {
						className: ae.a.userIcon
					}, l.a.createElement(he, null)), l.a.createElement("div", {
						className: Object(G.a)(ae.a.FormWrapper, {
							[ae.a.pending]: E,
							[ae.a.focused]: c.hasFocus
						})
					}, l.a.createElement(pe, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !r,
						disabled: E,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: k ? o.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : o.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: M
					}), (!k || j) && l.a.createElement(y.a, {
						className: ae.a.FormFooter,
						cancelButtonEnabled: u !== oe.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: E,
						submitButtonText: v,
						canSubmit: this.userHasEnteredText()
					}, l.a.createElement(w, null, e => "compact" === e ? l.a.createElement(z, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => P(ne.i.RICH_TEXT, M, d),
						isConverting: this.props.isConverting
					}) : l.a.createElement("div", null, l.a.createElement(ie, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => P(ne.i.RICH_TEXT, M, d)
					}, o.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "ousUG"
					}), this.props.isConverting && l.a.createElement(ce, {
						sizePx: 12
					})))), l.a.createElement(be, {
						onClick: this.props.helpModalToggled
					})))), D && Object(x.c)(m), e === A && l.a.createElement(g.a, {
						actionText: o.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: o.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: N,
						onConfirm: () => this.cancelForm(),
						toggleModal: n,
						trackClick: () => {}
					}), e === C.b && l.a.createElement(C.a, {
						withOverlay: !0
					}), e === p.q && l.a.createElement(f.a, {
						onSubmit: this.onSubmit,
						modalSeen: _,
						withOverlay: !0
					}), l.a.createElement(b.a, {
						editKey: d,
						hasValue: !!M
					}))
				}
			}
			t.b = Ce(Ee)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-router/esm/react-router.js");
			let i = null;
			class c extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						c.blockers.delete(e), c.blockers.size || (i && i(), i = null, window.removeEventListener("beforeunload", c.navigationBlocker))
					}
				}
				componentDidUpdate(e) {
					!e.hasValue && this.props.hasValue ? this.block(this.props.editKey) : e.hasValue && !this.props.hasValue && this.unblock(this.props.editKey)
				}
				componentWillUnmount() {
					this.unblock(this.props.editKey)
				}
				componentDidMount() {
					this.props.hasValue && this.block(this.props.editKey)
				}
				block(e) {
					c.blockers.add(e), i || (window.addEventListener("beforeunload", c.navigationBlocker), i = this.props.history.block(() => {
						const e = this.props.isPostEdit ? o.fbt._("You have a post edit in progress, are you sure you want to discard it?", null, {
							hk: "4u5L7p"
						}) : o.fbt._("You have a comment in progress, are you sure you want to discard it?", null, {
							hk: "rgscd"
						});
						return !!window.confirm(e) && void 0
					}))
				}
				render() {
					return null
				}
			}
			c.blockers = new Set, c.navigationBlocker = e => {
				const t = "Are you sure you want to leave?";
				return e.returnValue = t, t
			}, t.a = Object(a.i)(c)
		},
		"./src/reddit/components/CommentCreation/ToolbarSelector.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1XC-wMQsKPqfaPcfWQCZdW",
				container: "_1XC-wMQsKPqfaPcfWQCZdW"
			}
		},
		"./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/uuid/v4.js"),
				i = n.n(a),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/comment/authoring.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/TextButton/index.tsx"),
				h = n("./src/reddit/constants/tracking.ts"),
				b = n("./src/reddit/selectors/telemetry.ts");
			const f = e => ({
					source: "toxicity_modal",
					...b.o(e),
					screen: b.bb(e),
					subreddit: b.jb(e)
				}),
				g = e => t => ({
					action: h.c.VIEW,
					noun: "modal",
					correlationId: e,
					...f(t)
				}),
				C = e => t => ({
					action: h.c.CLICK,
					noun: "submit",
					correlationId: e,
					...f(t)
				}),
				E = e => t => ({
					action: h.c.CLICK,
					noun: "edit",
					correlationId: e,
					...f(t)
				}),
				x = e => t => ({
					action: h.c.CLICK,
					noun: "close",
					correlationId: e,
					...f(t)
				});
			var _ = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = Object(r.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(d.g)(l.q))
				},
				continue: () => {
					t.onSubmit()
				}
			}));
			class y extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: i()()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(g(this.state.correlationId))
				}
				render() {
					return s.a.createElement(u.e, null, s.a.createElement(u.i, null, s.a.createElement(_.a, null, s.a.createElement(u.q, null, v._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), s.a.createElement(p.a, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.closeModal()
						}
					}, s.a.createElement(u.b, null)))), s.a.createElement(u.l, null, s.a.createElement(u.p, null, v._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), s.a.createElement(u.g, null, s.a.createElement(u.a, {
						onClick: () => {
							this.props.sendEvent(E(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, v._("Go back and edit", null, {
						hk: "3nGNI7"
					})), s.a.createElement(u.r, {
						onClick: () => {
							this.props.sendEvent(C(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, v._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(c.a)(O(Object(m.c)(y)))
		},
		"./src/reddit/components/CommentCreation/getCancelModalId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = e => `Comment-cancelModal__${e}`
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				hideCaret: "dExJJiXRwxVrKsDJRWSQl",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/fastdom/index.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				h = n("./src/reddit/components/ContentTooltip/index.m.less"),
				b = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const g = {
					height: 200,
					width: 200
				},
				C = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				E = Object(l.a)(e => {
					const {
						children: t,
						className: n,
						style: o,
						caretPosition: s,
						caretColor: a,
						onClick: i,
						hideCaret: l,
						...d
					} = e;
					return r.a.createElement("div", f({
						onClick: i,
						className: Object(c.a)(n, b.a.StyledTooltipContainer, {
							[b.a.caretOnTop]: "top" === s,
							[b.a.caretOnLeft]: "left" === s,
							[b.a.caretOnRight]: "right" === s,
							[b.a.caretOnBottom]: "bottom" === s,
							[b.a.hideCaret]: l
						}),
						style: {
							...o,
							"--contentTooltip-caretColor": a && a[s] ? a[s] : Object(m.a)(e).body
						}
					}, d), t)
				}),
				x = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(p.b)(t)(e)
				}),
				_ = Object(u.a)(E, [o.a.Click, o.a.Keydown]),
				v = Object(a.b)(x);
			class O extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = g
						} = this.props;
						d.a.read(() => {
							const n = document.getElementById(e);
							if (!n) return;
							const o = n.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let s = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									s = window.innerHeight - o.bottom > t.height;
									break;
								case "left":
									s = o.left > t.width;
									break;
								case "right":
									s = o.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									s = o.top > t.height
							}
							this.setState({
								position: s ? this.props.defaultTooltipPosition : C(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: n,
						caretPosition: o
					} = this.getPositions(e);
					return r.a.createElement(_, f({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = v(O)
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less": function(e, t, n) {
			e.exports = {
				RequestButton: "_3K2ydhts9_ES4s9UpcXqBi",
				requestButton: "_3K2ydhts9_ES4s9UpcXqBi"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/privateCommunity.ts"),
				p = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.m.less"),
				f = n.n(b);
			const g = () => ({
				[h.b.Comment]: o.fbt._("Request to Comment", null, {
					hk: "3KRhw5"
				}),
				[h.b.IdCard]: o.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.PostSubmission]: o.fbt._("Request to Post", null, {
					hk: "2xsrGd"
				}),
				[h.b.ContentGate]: o.fbt._("Request to Join", null, {
					hk: "1nK8Vv"
				})
			});
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						const {
							sendEvent: e,
							eventSource: t,
							openRequestToJoinSubredditModal: n,
							openContributorRequestModal: o
						} = this.props;
						t === h.b.ContentGate ? (e(Object(m.a)(t)), n()) : (e(Object(p.a)(t)), o())
					}
				}
				render() {
					const {
						eventSource: e,
						smallButton: t,
						className: n,
						isContributorRequestPending: s
					} = this.props;
					return r.a.createElement(u.t, {
						priority: e === h.b.ContentGate ? u.c.Secondary : u.c.Primary,
						className: Object(i.a)(t ? null : f.a.RequestButton, n),
						onClick: this.onRequest,
						size: t ? u.d.S : u.d.M,
						disabled: s
					}, s ? o.fbt._("Request Pending", null, {
						hk: "hVswi"
					}) : g()[e])
				}
			}
			t.default = Object(a.b)(null, e => ({
				openContributorRequestModal: () => e(Object(c.i)(d.a.CONTRIBUTOR_REQUEST)),
				openRequestToJoinSubredditModal: () => e(Object(c.i)(d.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT))
			}))(Object(l.c)(C))
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, n) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return y
			})), n.d(t, "a", (function() {
				return k
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/components/Media/index.tsx"),
				m = n("./src/reddit/components/PostMeta/index.tsx"),
				p = n("./src/reddit/components/PostTitle/index.tsx"),
				h = n("./src/reddit/components/SourceLink/index.tsx"),
				b = n("./src/reddit/components/Thumbnail/index.tsx"),
				f = n("./src/lib/constants/index.ts"),
				g = n("./src/reddit/contexts/Post/index.tsx"),
				C = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/CrosspostBox/index.m.less"),
				_ = n.n(x),
				v = n("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 8,
				k = 1,
				j = v.a.div("Container", _.a),
				S = v.a.div("PostMetaWrapper", _.a),
				T = v.a.wrapped(p.c, "PostTitle", _.a),
				P = v.a.div("FlatList", _.a),
				I = v.a.div("FlatItem", _.a),
				w = v.a.span("FlatListDotSpacer", _.a),
				N = v.a.wrapped(j, "LinkContainer", _.a),
				D = v.a.div("Content", _.a),
				M = v.a.div("ThumbnailContainer", _.a),
				R = Object(c.c)({
					isCurrentUserProfilePost: C.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== f.Nb.TOPIC),
					shouldOpenPostInNewTab: E.hb
				}),
				L = Object(a.b)(R);
			t.c = Object(g.b)(L(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: o,
					mediaProps: s,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: n,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${s.isListing}`
					},
					l = t;
				return a && !a.media ? r.a.createElement(N, {
					className: l
				}, r.a.createElement(D, null, r.a.createElement(S, null, r.a.createElement(m.a, c)), F(a), a.source && r.a.createElement(h.a, {
					post: a
				}), B(e)), W(e)) : r.a.createElement(j, {
					className: l
				}, r.a.createElement(S, null, r.a.createElement(m.a, c)), F(a), A(e), B(e))
			}));
			const F = e => r.a.createElement(T, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				A = e => {
					const {
						mediaProps: t,
						post: n
					} = e, o = {
						...t,
						post: n,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(u.a, O({}, o, {
						className: _.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: n
					} = t;
					return r.a.createElement(P, null, r.a.createElement(I, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(n, "point count", Object(d.b)(n))], {
						hk: "PNZhd"
					})), r.a.createElement(w, null), r.a.createElement(I, null, U(e)))
				},
				U = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: s
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(l.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(s, "comment count", Object(d.b)(s))], {
						hk: "xPYWL"
					}))
				},
				W = e => r.a.createElement(M, null, r.a.createElement(b.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Prediction/NewBadge/index.m.less": function(e, t, n) {
			e.exports = {
				newBadge: "_25Zpk4lWyvwk-rK1hZ0N8m"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(o || (o = {}))
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				educationMessage: "_3fy4maW8GQWdzcWGdeMbsa",
				isShortWidth: "_28YkWXOPICkzcS5IobwdZx",
				titleRow: "_1OeK7ZGX2fnKzdqjn-5gQD",
				header: "_1Y7_NWRItnxdsOq9DSlCDi",
				title: "_2ZZDhQ9qffZd-pGxZE6R4I",
				newBadge: "_1cHmK8KSQMLT0mELC910oM",
				closeButton: "_1C2XLQWgnLb_MVlB0fwAc_"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/hooks/useLocalStorage.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				d = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less"),
				u = n.n(d);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function p({
				message: e,
				newBadge: t,
				onClose: n,
				onView: d,
				storageKey: p = l.a.nonDismissable,
				title: h,
				isFullWidth: b
			}) {
				const f = p !== l.a.nonDismissable,
					[g, C] = Object(a.a)(p, !f || !1),
					[E, x] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					g || E || !d || (d(), x(!0))
				}, [g, E, d]), f && g ? null : s.a.createElement("div", {
					className: Object(r.a)(u.a.educationMessage, {
						[u.a.isShortWidth]: !b
					})
				}, s.a.createElement("div", {
					className: u.a.titleRow
				}, s.a.createElement("div", {
					className: u.a.header
				}, s.a.createElement("h3", {
					className: u.a.title
				}, h), t && s.a.createElement("div", {
					className: u.a.newBadge
				}, m._("New", null, {
					hk: "2N0EBb"
				}))), f && s.a.createElement(i.t, {
					"aria-label": m._("Close", null, {
						hk: "2UjnU"
					}),
					className: u.a.closeButton,
					Icon: Object(c.b)("close"),
					onClick: () => {
						C(!0), n && n()
					},
					priority: i.c.Plain
				})), e)
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx");

			function i({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: s
			}) {
				const i = o.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = e ? o.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : o.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return r.a.createElement("div", null, r.a.createElement(a.a, {
					onClose: t,
					onView: n,
					title: i,
					newBadge: !0,
					message: c,
					storageKey: s
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				c = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const l = ({
				tournamentId: e,
				className: t
			}) => {
				const n = Object(a.e)(t => Object(c.a)(t, e));
				return n && n.tokenIconUrl ? r.a.createElement("img", {
					className: t,
					alt: o.fbt._("Tournament token", null, {
						hk: "3cgDZy"
					}),
					src: n.tokenIconUrl
				}) : r.a.createElement(i.a, {
					className: t
				})
			}
		},
		"./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/experiments/econ/index.ts");
			const i = ({
					className: e
				}) => s.a.createElement("svg", {
					className: e,
					fill: "none",
					height: "20",
					viewBox: "0 0 20 20",
					width: "20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "m11.8373 7.17254c-.0381-2.14805-1.2066-4.26563-3.12608-5.6611-.7001 1.14224-1.0571 2.46166-1.02847 3.80108.02863 1.33941.44168 2.64237 1.18995 3.75365",
					fill: "#ffc2dd"
				}), s.a.createElement("path", {
					d: "m8.87285 9.06578c-.03047.01981-.17672-.13254-.39609-.43722-.29757-.44864-.53424-.93481-.70383-1.44575-.25319-.76597-.37124-1.57014-.34887-2.37656.0185-.47751.08381-.95205.195-1.4168.12075-.49951.29704-.98393.52559-1.44421.04547-.10166.09632-.20083.15234-.29708l.16453-.28792c.0182-.03202.04253-.06014.07159-.08276.02907-.02261.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03655.00458.07183.01631.10384.03453l.02742.01828c.38016.28079.73681.5921 1.0664.93082.30177.31806.57737.65991.82417 1.02223.4117.60733.7253 1.27566.9293 1.98046.1388.46809.2126.95301.2194 1.44118 0 .34277-.0396.52863-.0731.52863-.0336 0-.0762-.18281-.1402-.50731-.0876-.45579-.214-.90328-.3778-1.33757-.2445-.64356-.5745-1.25128-.9811-1.8068-.2427-.32728-.50846-.63681-.79524-.92625-.31294-.30838-.64797-.59352-1.00242-.85313l.41742-.08226-.15234.2666c-.05268.08874-.10048.18028-.1432.27422-.20887.42313-.37327.8668-.49055 1.32387-.10969.42749-.18107.8639-.21328 1.30406-.04198.75145.02993 1.50493.21328 2.23488.31535 1.25684.78762 1.94696.70078 1.99875z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m15.6001 5.87727c-.8963-.80295-1.9238-1.44605-3.0378-1.90125-.8516-.34734-1.7854-.585-2.69037-.41742-1.00242.18586-1.84945.84246-2.58984 1.55086-.89883.86988-1.70321 1.87383-2.14196 3.04687-.34277.91407-.45703 1.93177-1.02984 2.72697-.44789.6292-1.12582 1.0481-1.73672 1.5234s-1.19894 1.0664-1.32691 1.8281c-.134064.7983.2666 1.5905.76172 2.2349.43629.6039.99546 1.1085 1.64074 1.4808.65104.3698 1.41006.5028 2.14805.3763 1.28273-.2544 2.18918-1.3711 3.33937-2.0018.91406-.4966 1.98046-.6657 2.93876-1.0664 1.7105-.7343 3.0622-2.1139 3.7613-3.8391.6813-1.72672.7474-3.63533.1874-5.40512",
					fill: "#ffc2dd"
				}), s.a.createElement("path", {
					d: "m11.9928 5.88635c-.9902.47227-2.10078.77238-3.13214.36105-.44942-.17824-.91407-.48597-.99633-.96281-.08836-.53777.35648-1.01156.81047-1.31472 1.4823-.98567 3.3333-1.06641 5.0669-.66422 1.7337.40218 3.2663 2.19375 3.4842 3.95941 1.1699.23309 1.6178 1.90582 1.4396 3.08494-.0975.649-.4647 1.2416-.5027 1.8967-.0595 1.042.7175 1.9591.8302 2.9966.0424.4433-.0361.8899-.2271 1.2922-.1909.4024-.4873.7455-.8576.993-.7449.4829-2.1998.8653-2.9661.4174-.5408.5408-1.0664.8531-1.953.5621-.4365-.1597-.8123-.4516-1.075-.835s-.3992-.8392-.3906-1.3039c.0251-.4645.1826-.9122.4539-1.2901.2713-.378.645-.6704 1.0772-.8427-.118-.6928-.0689-1.4038.143-2.0739.212-.6701.5808-1.2799 1.0757-1.7789.4357-.4311.6475-1.2568.8623-1.82809.3184-.84551.0792-1.3589-.7115-1.79461-.7906-.4357-.6322-.91406-1.5356-.93234",
					fill: "#7e53c1"
				}), s.a.createElement("path", {
					d: "m2.93455 11.5232c-.76172.5652-1.73063 2.1861-1.73063 2.1861-.335154.9887-.09293 2.174.67184 2.8839.30469.2803.66879.4814.97347.7617.24375.2209.4479.489.72973.6581.29688.1598.6324.2336.96891.2133 1.02679-.0183 1.96523-.5515 2.83207-1.1014.52711-.3337.74496-.3748 1.08469-.8973.33972-.5226.44179-1.2508.08074-1.7596-.10551-.1489-.24341-.2718-.40332-.3597s-.33766-.1383-.51989-.1476c.14706-.1759.25646-.3801.32145-.5999.06499-.2199.08417-.4507.05637-.6783-.03221-.2274-.1238-.4424-.26556-.6232-.14175-.1808-.32865-.321-.54187-.4066-.21517-.0769-.44922-.0833-.66831-.0184s-.41185.1978-.55044.3795c-.12035-.4571-.26812-.9415-.66117-1.1929-.39304-.2514-.95672-.1706-1.36043.0899s-.73429.2133-1.01156.6094",
					fill: "#ff85c6"
				}), s.a.createElement("g", {
					fill: "#000"
				}, s.a.createElement("path", {
					d: "m12.0369 5.96144c.0076.01828-.0975.08074-.3047.18129-.1051.04875-.2422.09598-.4022.15234-.1874.06167-.3781.11253-.5713.15235l-.1691.03351-.1813.01524-.1904.02133-.2011.00761c-.29982.01193-.59992-.01521-.89273-.08074-.34868-.0711-.67773-.21717-.96434-.42809-.33198-.24583-.57949-.58862-.7084-.98109-.00992-.03112-.01206-.0642-.00622-.09634.00585-.03215.01949-.06236.03974-.088l.18129-.22699.09293-.11578c.03351-.03656.06855-.0716.10359-.10816l.21176-.21633.23613-.20109c.33521-.27221.70445-.49959 1.0984-.67641.86515-.37673 1.79855-.5717 2.74215-.57281.2458 0 .4946.00761.7465.02285.1249.01066.2514.02437.3778.03656l.3885.06703c.5231.11861 1.0247.31749 1.4869.58957.4807.27702.916.62643 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1606.44653.2128.92481.1524 1.39547l-.2225-.32449c.3024.07237.582.21897.8136.42656.2182.19639.3962.43337.524.69773.2368.4925.3602 1.03182.3611 1.57828.0036.26324-.0198.52618-.0701.78458-.0515.2498-.1265.4941-.224.7297-.1751.4479-.3458.8471-.3351 1.231.0236.4021.1338.7945.323 1.1502.1736.3762.3762.748.5149 1.1486.0732.1995.1243.4064.1523.617.025.2054.025.4131 0 .6185-.049.3813-.1783.7479-.3793 1.0756-.1803.2992-.4198.5584-.7038.7617-.2515.1695-.5267.3009-.8166.39-.4515.1462-.9263.2072-1.4.1798-.2998-.0157-.5927-.0952-.8593-.2331-.0441-.0259-.0837-.0472-.1142-.0701l-.0747-.064c-.0381-.035-.0548-.0564-.0487-.064s.0335 0 .0792.0168l.0838.0366c.0335.0137.0746.0259.1203.0426.265.0859.5427.1261.8212.1188.4422-.0126.879-.1002 1.2919-.2589.253-.0934.4915-.2222.7083-.3824.2336-.1832.4283-.4111.5729-.6703.1596-.2843.2582-.5987.2894-.9232.0316-.3501-.0206-.7025-.1523-1.0284-.131-.3519-.3321-.7038-.5256-1.0953-.2303-.4174-.366-.8802-.3976-1.3559-.0049-.2555.0316-.5102.1081-.7541.0701-.2376.1524-.457.2407-.6779.083-.2069.1462-.4211.1889-.6399.0401-.2216.0575-.44666.0518-.67179-.0025-.45984-.1065-.91345-.3046-1.32843-.089-.19841-.2208-.37466-.386-.5161-.1651-.14144-.3595-.24457-.5692-.30199-.0707-.01706-.1324-.05965-.1735-.11957s-.0585-.13291-.049-.20492c.0449-.37936.0001-.76396-.131-1.12278-.1711-.47191-.4347-.90491-.7754-1.27359-.3334-.36724-.7207-.68161-1.1487-.93234-.4116-.24365-.858-.42295-1.3238-.53168l-.3504-.06704-.352-.0396c-.2346-.0193-.4671-.02946-.6977-.03047-.8711-.0115-1.7356.15167-2.5426.47988-.69944.29292-1.31358.75772-1.78547 1.35129l.03199-.18738c.09268.31809.28096.59997.5393.80742.23935.19093.5167.32857.81351.40371.26464.07357.53739.114.81197.12035h.1874l.1798-.00762.1721-.00761.163-.01981c.2118-.01828.3976-.06246.5607-.08988.163-.02742.3046-.06856.4082-.0975.2194-.05942.3398-.08379.3474-.06551z"
				}), s.a.createElement("path", {
					d: "m15.1617 6.80064c.032-.01066.16.18738.2529.60938.0533.25693.0661.52062.0381.78152-.0428.34276-.1325.678-.2666.99633-.159.38683-.3724.749-.6338 1.07553-.2727.3504-.5713.684-.8318 1.0664-.1345.1968-.2591.4001-.3732.6094-.1109.2057-.1964.4241-.2544.6505-.126.4741-.116.9741.0289 1.4427l.0549.1523.0655.1524v.0107c.0153.035.0235.0728.0241.1111s-.0063.0763-.0205.1118c-.0142.0356-.0352.068-.062.0954-.0268.0273-.0587.0491-.094.064l-.0228.0092c-.4112.1591-.7588.4486-.9897.8242s-.3322.8166-.2885 1.2553c.0443.3877.1928.7562.4296 1.0664.21.2635.5015.4499.8288.5301.0736.0194.1484.0342.2239.0442.0792.0102.1564.0183.2316.0244.1384.0097.2774.0097.4159 0 .2139-.0066.4231-.0652.6093-.1706.3047-.1874.4007-.3977.4434-.3702.0167.0076.0091.0655-.029.166-.0649.1473-.1623.2781-.2849.3824-.2014.1636-.4437.2689-.7007.3047-.1541.0256-.31.0389-.4662.0396-.0823 0-.1656 0-.2499 0-.0935-.0045-.1866-.0152-.2787-.032-.4244-.0768-.8101-.2954-1.0939-.62-.3157-.3695-.521-.8204-.5926-1.3011-.0783-.5443.0291-1.0992.3047-1.5752.2866-.522.7517-.9233 1.3101-1.1304l-.1645.4022-.0838-.1858c-.0228-.064-.0487-.1265-.0701-.192-.1795-.573-.1895-1.1856-.0289-1.7641.0739-.272.1819-.5336.3215-.7785.1288-.2228.2697-.4385.4219-.646.2956-.4067.6231-.7464.8943-1.06636.2517-.28403.4648-.60009.6337-.93996.1414-.27918.2488-.57429.32-.87903.0485-.23077.0679-.4667.0579-.7023-.0198-.38695-.0732-.6109-.0305-.62461z"
				}), s.a.createElement("path", {
					d: "m11.7475 15.5359c.0397.0198-.0121.1751-.0487.457-.0497.3816-.0079.7696.1219 1.1319.0832.2572.2266.4908.4181.6816.1916.1907.4258.3331.6833.4153.2964.1041.6157.1251.9232.0609.3275-.0754.6263-.2436.8608-.4844.0439-.0439.1008-.0725.1623-.0816.0614-.009.1242.0019.1789.0313l.0229.0122.131.0716c.3301.1294.6855.1815 1.039.1523.3483-.0224.6927-.0874 1.0252-.1935.2948-.0892.572-.2283.8196-.4113.2096-.1663.3885-.3678.5287-.5957.2115-.3484.3397-.741.3747-1.1471.0275-.2879.0153-.457.0595-.4677.0441-.0107.1233.1523.1675.457.0501.4566-.033.918-.2392 1.3285-.1429.2883-.3393.5468-.5789.7617-.2813.2401-.6046.426-.9536.5484-.3748.137-.7663.2231-1.1639.256-.4489.0469-.9024-.017-1.3209-.1859-.07-.0335-.1371-.0746-.2056-.1112l.3626-.0381c-.3113.3274-.7135.554-1.1548.6505-.409.0775-.8316.0374-1.2188-.1158-.1777-.0673-.3469-.1553-.5042-.262-.1473-.1097-.279-.2388-.3915-.3839-.2342-.2994-.39-.6525-.4534-1.0273-.0633-.3748-.0321-.7595.0908-1.1192.1112-.291.2346-.4083.2635-.3915z"
				}), s.a.createElement("path", {
					d: "m12.5288 4.12384c.0335.12188-.6551.38696-1.2964.98567-.6414.59871-.9766 1.24922-1.0939 1.20504-.0533-.01981-.0411-.2209.0792-.51797.1677-.38261.4134-.72603.7214-1.00828.3079-.28226.6714-.49715 1.0672-.63094.3062-.09902.5073-.08836.5225-.03352z"
				}), s.a.createElement("path", {
					d: "m11.1488 3.92917c.0243.12492-.6734.33058-1.32543.89273s-.98262 1.20199-1.10145 1.15781c-.05332-.0198-.04265-.21937.07922-.51187.171-.37717.42374-.71159.73992-.97903.31619-.26744.68794-.4612 1.08824-.56726.3107-.0716.5088-.04723.5195.00762z"
				}), s.a.createElement("path", {
					d: "m16.3803 10.1901c-.1097-.067.3915-.97041.5347-2.19678s-.1005-2.22269.0229-2.26078c.0533-.01676.1935.2148.3047.63223.0647.24543.1066.49635.1249.74953.0464.62313-.0318 1.24927-.23 1.84183-.0799.24049-.1819.47305-.3047.69469-.2118.37938-.4053.56978-.4525.53928z"
				}), s.a.createElement("path", {
					d: "m18.9885 16.1546c-.064-.0137-.0412-.2773-.1036-.6749-.0645-.5111-.2722-.9936-.5992-1.3918-.327-.3981-.7599-.6957-1.2488-.8583-.3793-.1356-.6413-.163-.6429-.23-.0015-.0671.2697-.1402.7191-.0686.5932.102 1.1302.4135 1.5132.8779.383.4643.5866 1.0507.5739 1.6525-.0167.4555-.1538.7069-.2117.6932z"
				}), s.a.createElement("path", {
					d: "m14.8916 15.5424c0 .0549-.2575.0945-.6475-.0213-.5113-.1635-.9518-.4959-1.2494-.9426-.2976-.4468-.4345-.9814-.3882-1.5162.0426-.4038.1767-.6216.2285-.6094s.0411.2513.0792.6094c.0371.4555.1895.8941.443 1.2745.2535.3803.5996.6898 1.0058.8994.3138.1721.5377.2483.5286.3062z"
				}), s.a.createElement("path", {
					d: "m17.5289 17.9844c.0198.0518-.1813.1919-.5546.3047-.2195.0627-.4453.1005-.6733.1127-.2821.0127-.5646-.0104-.841-.0685-.5039-.1057-.972-.3398-1.3589-.6795-.2879-.2651-.4021-.4799-.3625-.5164.0396-.0366.2376.0883.5454.2681.3936.2324.8213.4016 1.2675.5012.2454.051.4945.082.7449.0929.2078.0059.4158.0008.6231-.0152.358-.029.5896-.0625.6094 0z"
				}), s.a.createElement("path", {
					d: "m2.90817 17.6644c.02743-.0336.16758.0441.422.1447.35517.1372.73285.207 1.11363.2056.2607-.0006.52062-.0286.77543-.0837.29447-.0691.58245-.1634.86074-.2819.6451-.2903 1.25785-.6478 1.82813-1.0664.3184-.2194.63527-.4357.95215-.6337.16005-.1033.32643-.1964.49816-.2788.16632-.0783.33786-.145.5134-.1996.33819-.1066.66119-.1691.94909-.2316.2657-.0562.5281-.1269.7861-.2117.9461-.291 1.3894-.7419 1.4503-.6856.0274.0229-.0411.1783-.2529.39-.3054.2895-.6618.5198-1.0511.6795-.2631.1148-.5339.2111-.8105.2879-.2925.0838-.5957.1615-.8943.2712-.1517.0544-.29977.1185-.44329.1919-.15014.0784-.29562.1654-.43571.2605-.30468.1966-.60937.4114-.92929.6323-.60607.446-1.26645.8131-1.96524 1.0923-.31459.118-.64019.2042-.97195.2574-.29262.0427-.58936.0493-.8836.0198-.42771-.0359-.83949-.1789-1.19742-.4159-.24527-.1751-.33668-.3168-.31383-.3442z"
				}), s.a.createElement("path", {
					d: "m6.225 5.96731c.03504.03047-.11882.24832-.27269.70688-.15387.45855-.32906 1.14257-.64289 1.98046-.35795 1.00905-.94757 1.92005-1.72149 2.65995-.44789.4128-.98261.7419-1.41984 1.1365-.22006.1952-.41046.4216-.5652.6718-.15641.2581-.27396.5379-.34886.8303-.1496.5767-.109 1.1864.11578 1.7382.2033.5106.57035.9393 1.04355 1.2188.43841.246.94.3563 1.44117.3168.4522-.035.89467-.1495 1.30711-.3382.62316-.2632 1.19822-.6282 1.70168-1.0801.36106-.3214.55149-.521.585-.4921.03352.029-.09902.2682-.42351.6521-.46912.5411-1.04342.9812-1.68797 1.2934-.4486.2367-.93728.3881-1.44117.4463-.60087.0697-1.20871-.0451-1.74282-.329-.59015-.3284-1.05149-.8472-1.308628-1.4717-.279975-.664-.334037-1.4015-.153867-2.0993.089401-.3498.231157-.6842.420465-.9917.18513-.296.41307-.563.67641-.7922.24386-.2077.49809-.403.76172-.585.24527-.1767.47683-.3473.68707-.5286.39554-.3476.74199-.7474 1.02984-1.18832.25632-.38967.48001-.79986.66879-1.22636.34278-.78153.57586-1.46707.81199-1.91344.23614-.44637.45551-.63984.47836-.61547z"
				}), s.a.createElement("path", {
					d: "m7.61001 17.0368c-.01371-.0229.07312-.096.22852-.227.21967-.1779.4162-.3826.585-.6094.11178-.1553.19769-.3276.25441-.5103.06503-.2047.08222-.4215.05027-.6338-.0336-.226-.14711-.4325-.31992-.5819-.08594-.0808-.18875-.1414-.30099-.1775-.11225-.0361-.23111-.0467-.34799-.0312-.04085.0077-.08309.0029-.12121-.0136-.03812-.0166-.07037-.0443-.09255-.0795-.02219-.0351-.03328-.0762-.03183-.1177.00144-.0416.01535-.0817.03992-.1153.15099-.206.25783-.4409.31383-.6901.0588-.2522.04721-.5157-.03352-.7617-.06006-.1925-.16964-.3659-.31775-.5028s-.32957-.2325-.52623-.2772c-.18409-.0295-.37273-.0078-.54539.0625-.16009.0641-.29709.1751-.39305.3184v.0076c-.02289.0359-.05711.0632-.09724.0776-.04014.0144-.08391.0149-.12442.0017-.0405-.0133-.07544-.0397-.0993-.075s-.03529-.0776-.03247-.1201c.00897-.1905-.02689-.3804-.10468-.5545s-.19534-.3275-.34321-.4479c-.2408-.1906-.54594-.2806-.85161-.2514-.20637.0174-.40675.0781-.58804.1783-.12797.07-.195.1203-.21176.1035-.01676-.0167.02437-.0914.14168-.2026.17711-.1566.39359-.2619.62613-.3047.16814-.034.3411-.0371.51035-.0091.2035.0334.39676.1126.5652.2316.2034.1439.36838.3356.48046.5582.11209.2226.16786.4693.16243.7184l-.35801-.1097c.1399-.2193.34103-.3927.5785-.4989.23747-.1061.50086-.1403.75756-.0983.27463.053.52991.1791.73901.3648.2091.1858.36429.4245.44927.691.10765.3236.12191.671.04113 1.0024-.07296.3061-.21004.5932-.40219.8425l-.20109-.3306c.17731-.0238.3577-.0071.52763.0488s.32497.1497.45346.2741c.2323.2134.37995.5033.4159.8166.02715.2664-.00994.5354-.10816.7846-.08209.2088-.20017.4017-.34887.5697-.20103.2307-.44204.4232-.71145.5683-.18586.099-.29707.131-.30773.1112z"
				}), s.a.createElement("path", {
					d: "m1.63036 14.9239c-.05028-.0671.02742-.2026.10054-.4037.0973-.242.14496-.501.14016-.7618-.00623-.1382-.03082-.275-.07313-.4067-.02438-.0824-.06591-.1587-.12187-.224-.04305-.0401-.0954-.0689-.15235-.0837-.05179-.0153-.10207-.0122-.13253-.0381-.03047-.0259-.03657-.0899.03503-.1646.05278-.0478.11654-.0819.18564-.0991.06909-.0173.14139-.0173.21046.0001.09781.0283.18881.0762.26741.1409s.14313.1448.18962.2354c.14254.2601.1987.5588.16036.8529-.03833.2941-.16918.5684-.37364.7833-.20414.2026-.39305.23-.4357.1691z"
				}), s.a.createElement("path", {
					d: "m3.30922 14.9463c.00761-.0838.2148-.1218.47836-.2529.15103-.0716.29108-.1645.41589-.2757.14195-.126.25387-.2821.32754-.457.02539-.0616.03666-.1281.033-.1946-.00367-.0666-.02218-.1314-.05417-.1899-.03199-.0584-.07666-.1089-.13073-.1479-.05407-.0389-.11616-.0652-.18173-.077-.24375-.0457-.42504.0685-.48598.0152-.02894-.0243-.02742-.0959.04266-.1889.10853-.1306.26266-.215.43113-.2361.1238-.0188.25029-.0073.36868.0335.13848.0489.26222.1322.35953.2422.10996.1238.18329.2757.21175.4388.02862.1723.0102.3491-.05332.5119-.09984.2397-.25932.45-.4633.6108-.20397.1607-.44567.2667-.70213.3078-.15219.0271-.30857.0187-.45703-.0244-.09445-.035-.1432-.0777-.14015-.1158z"
				})), s.a.createElement("path", {
					d: "m3.53778 4.27334c.35264.00703.70225-.06643 1.02223-.2148.5652-.30469.58653-1.05879.69317-1.70473l-.68707-.57586-.29098-.29097c-.40265-.06883-.81671-.01302-1.18676.15996-.11314.03509-.21026.109-.27422.20871-.04419.13436-.03491.28058.0259.40828.20871.67336.43723 1.34824.69773 2.00941z",
					fill: "#fcff78"
				}), s.a.createElement("path", {
					d: "m6.92588 3.76312-1.45336-1.21875c-.08836.62309-.10817 1.28121-.66879 1.66207-.31535.21481-.73582.28793-1.16848.30469.28754.71505.63298 1.40543 1.03289 2.06426.56368.13254 1.12582.15234 1.6636-.21176.81047-.54691.7084-1.71844.59414-2.60051z",
					fill: "#34e2ac"
				}), s.a.createElement("path", {
					d: "m8.74027 5.59247c-.30468-.5591-.8059-.98262-1.2934-1.39242l-.24832-.20719c.0975.87293.10665 1.89668-.59871 2.47558-.54843.45704-1.14867.49665-1.75804.39.19381.29675.40386.58258.62918.85618.30468.35953.64593.70839 1.0923.8455.39305.12036.81809.06246 1.21875 0 .23991-.04098.4642-.14628.64899-.30468.23423-.14822.41471-.36769.51492-.62614.19905-.67984.12528-1.4105-.20567-2.03683z",
					fill: "#4ab6ff"
				}), s.a.createElement("path", {
					d: "m3.63372 1.50807c-.00915.02133-.07922 0-.20262.01066-.17338.01719-.33517.09486-.45703.21938-.08963.10119-.15545.22118-.19262.35115s-.04475.26662-.02219.3999c.03199.32297.21176.66727.45703 1.05117.47989.78 1.04203 1.71387 1.65903 2.75438l.47226.79828c.14562.26333.3215.50874.52407.73125.09393.10008.20166.18626.31992.25594.12269.06894.2545.12023.39152.15234.29024.05902.59075.04276.87293-.04723.14265-.04381.27929-.10522.40676-.18281.12585-.08503.24364-.18141.35191-.28793.21371-.19425.37641-.43804.47379-.70992.18434-.52102 0-1.09231-.33515-1.52344-.33516-.43113-.79067-.79371-1.1959-1.13648l-1.15782-.94149c-1.42593-1.13953-2.32629-1.82812-2.28515-1.89668.04113-.06855 1.02832.50578 2.52586 1.56914.37324.26661.78.56368 1.20961.89121.42961.32754.91406.67336 1.32082 1.18981.21796.26961.37913.58054.47379.91406.0477.17942.07177.36431.0716.54996-.00338.19142-.03469.38131-.09293.56368-.12117.36293-.33056.6901-.60938.95214-.1406.13226-.29366.25062-.45703.35344-.16878.10363-.34998.18553-.53929.24375-.37848.12012-.78173.13955-1.17001.05637-.19307-.04362-.37883-.11494-.55148-.21176-.16901-.097-.32297-.21811-.45703-.35953-.23145-.25682-.43095-.54072-.59414-.84551l-.45703-.81047c-.5911-1.05574-1.11668-2.01093-1.55086-2.81683-.2209-.40067-.41438-.82266-.42047-1.23551-.0138-.17693.01449-.35461.08254-.51851.06804-.16391.17393-.30937.30898-.4245.08602-.06939.18569-.1199.29251-.14825.10683-.02835.21842-.03389.32753-.01628.15844.03047.21328.09141.20567.10512z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m4.46393 6.19913c-.07008.03961-.40371-.44332-.88664-1.25836-.24223-.40675-.52102-.8973-.82266-1.44574-.07617-.13558-.15234-.27879-.22395-.43722-.07862-.16703-.13841-.34229-.17824-.52254-.04674-.20918-.04674-.4261 0-.63528.05176-.237.17898-.45082.36258-.60937.19251-.15305.43201-.23486.67793-.23156.21542.00414.42722.05618.62004.15234.16671.07743.32497.17188.47226.28184.13711.10359.25747.20261.38086.30468.4875.38848.91407.74496 1.27969 1.05117.71906.60938 1.13801 1.02223 1.09078 1.08622-.04722.06398-.55605-.23157-1.3391-.76172-.39152-.26356-.85008-.58653-1.35586-.95215-.23758-.19065-.49262-.35846-.76172-.50121-.24527-.11426-.53929-.11578-.69164.01676-.08628.07832-.14594.18165-.17062.29554-.02806.12849-.02806.26152 0 .39.07188.29274.18147.5749.32601.83942.2727.55757.51188 1.0664.70535 1.49144.38086.85617.585 1.40766.51493 1.44574z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m3.32259 4.185c.04265-.05027.22089.06856.50425.05637.17023-.01048.33705-.05232.49207-.1234.09475-.04162.18639-.08999.27422-.14473.08767-.05455.16761-.12065.23766-.19652.24239-.29049.364-.66295.33973-1.04051-.00975-.12051-.03484-.23928-.07465-.35343-.02743-.08836-.03809-.15235-.01371-.16454.02437-.01218.07921 0 .15234.07161.11052.10274.19152.23319.23461.37781.06054.21354.072.43801.03351.6566-.04331.27667-.16671.53459-.35496.74191-.09867.10747-.21387.1985-.34125.26965-.11202.0622-.22989.11323-.35191.15235-.21234.07339-.43982.09174-.66117.05332-.1515-.02712-.29151-.09872-.40219-.20567-.07008-.07008-.09445-.12492-.06855-.15082z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m4.604 6.28436c.03047-.00914.0716.05637.13864.15234.03548.05467.08035.10264.13253.14168.06723.04371.1441.07037.22395.0777.05049.00737.10135.01195.15234.01371.05353.00107.10705-.00249.15996-.01067.12363-.02073.24399-.05761.35801-.10968.26973-.11881.50848-.29813.69774-.52407.18908-.22808.32585-.49485.40066-.78152.06123-.2426.09295-.49171.09445-.74191 0-.42047-.15234-.67184-.09445-.7084.02285-.01523.09141.02437.1752.13406.11597.16041.19315.34554.22546.54082.04641.28689.0428.57965-.01066.86531-.06644.35874-.2238.69444-.45703.975-.23468.28133-.54026.49486-.88512.61852-.15255.05626-.31288.08863-.47531.09598-.077.00278-.15408-.00232-.23004-.01524-.06368-.0138-.1263-.03213-.18738-.05484-.12349-.03615-.23401-.10701-.3184-.20414-.05878-.07254-.09904-.15829-.11731-.24985-.02742-.13254-.01066-.20718.01676-.2148z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m14.8962 8.86965c.8394-1.7809.3564-5.85914-2.2502-7.58672-.6194.71264-1.0159 1.59151-1.1402 2.5275s.029 1.88788.441 2.7375",
					fill: "#ffc2dd"
				}), s.a.createElement("path", {
					d: "m11.9471 6.54651c-.0289.01371-.1264-.10816-.2575-.35953-.178-.36602-.3017-.75607-.3671-1.15781-.1063-.61415-.0898-1.24329.0487-1.85098.1786-.77188.5449-1.48774 1.0664-2.08406v-.00762c.0445-.05081.1065-.08307.1736-.090408.0672-.007334.1346.010798.189.050798l.2956.21937c.1024.07061.1991.14905.2894.23461.1902.16824.367.3511.5287.54692.0807.09902.1675.19347.2391.29707l.2103.30469c.0335.05179.07.10207.102.15234l.0884.16148.1691.32602c.099.21633.195.43113.2773.64441l.1081.32145c.0376.10373.0691.20953.0945.31687.2039.74383.2933 1.5144.2651 2.28516-.0097.52011-.106 1.03497-.2849 1.52344-.0465.13373-.1094.26116-.1874.37933-.0518.08227-.0884.11883-.1066.11121-.0183-.00761-.0183-.06246 0-.15234.0182-.08988.0563-.2209.0777-.39609.0863-.48239.117-.97311.0914-1.4625-.0309-.72382-.1548-1.44065-.3687-2.13282-.0269-.09929-.0594-.19695-.0975-.2925l-.1097-.29554c-.0807-.19653-.1737-.39153-.2681-.58957l-.163-.28946-.0823-.15234c-.0289-.04723-.0625-.09293-.0945-.14016l-.1843-.28031c-.0655-.09293-.1523-.17672-.2163-.2666-.1443-.1766-.3017-.34211-.4708-.49512-.0811-.07598-.1682-.14527-.2605-.20718l-.2589-.19957.3762-.05028c-.4697.52458-.8126 1.15003-1.0024 1.82813-.1534.54814-.2101 1.11883-.1676 1.68644.0747.97196.3382 1.52953.2575 1.56305z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m12.4756 10.9713c.6932-.9314.556-2.20692-.3066-2.84893-.8626-.642-2.1238-.40739-2.81708.52403-.69325.93142-.55598 2.2069.30659 2.8489.86259.6421 2.12379.4074 2.81709-.524z",
					fill: "#b8e7ff"
				}), s.a.createElement("path", {
					d: "m12.6477 11.0997c-.3495.475-.8556.8112-1.429.9491-.2925.0698-.596.0806-.8927.032-.3037-.0513-.59239-.1689-.84553-.3443-.256-.1803-.47062-.4131-.62955-.6829s-.25852-.5704-.29213-.8817c-.0368-.31289-.01301-.62995.07008-.93385.16819-.60576.55597-1.12715 1.08773-1.4625.26428-.1668.558-.28159.8653-.33821.308-.05723.6247-.04811.9289.02676s.589.21377.8353.40742c.2408.1922.4364.43511.5728.71145.1316.27014.2083.56376.2254.86379.036.59244-.1401 1.17834-.4966 1.65294zm-.3458-.2575c.1408-.1938.2465-.4109.3123-.6413.0626-.22856.0807-.46699.0533-.70234-.0262-.22746-.1011-.4466-.2197-.64247-.1185-.19586-.278-.36385-.4674-.4925-.1832-.12067-.39-.20124-.6066-.23642s-.4382-.02418-.6502.03228c-.4264.11149-.80187.3653-1.06425.71939s-.39591.7872-.37845 1.22756c.00711.2192.06045.4345.15654.6316.09609.1972.23275.3718.40104.5125.17772.143.38412.2461.60512.3023.2211.0562.4516.0643.6761.0237.2336-.0413.457-.1271.6581-.2529.2016-.1291.379-.2925.5241-.4829z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m11.734 10.3357c.3564-.72954.0761-1.59909-.6262-1.94222-.7023-.34314-1.56058-.02993-1.91701.69958-.35643.7295-.07606 1.59904.62623 1.94214.70228.3432 1.56058.03 1.91698-.6995z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m10.6281 9.66417c.0662-.43647-.2192-.84166-.63736-.90502-.41814-.06335-.81073.23912-.87686.67559s.21923.84166.63738.90506c.41814.0633.81074-.2392.87684-.67563z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "m11.5831 11.1074c.3374 0 .6109-.2851.6109-.6368s-.2735-.6368-.6109-.6368-.6109.2851-.6109.6368.2735.6368.6109.6368z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "m12.8948 6.65901c-.0594-.02894.0366-.31687.1158-.78304l.0305-.18282.0228-.20109c.0214-.13711.0244-.28793.0366-.44332.0143-.33972.0097-.67997-.0137-1.01918-.0458-.61737-.1478-1.22927-.3047-1.82812-.1204-.45704-.2224-.74801-.1661-.78.0564-.032.2529.2148.4571.67793.2577.60474.4122 1.24843.457 1.90429.0235.35959.0148.72055-.0259 1.0786-.0259.16605-.0427.32449-.0807.46922l-.0503.21023-.061.19043c-.1706.48293-.3732.73277-.4174.70687z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m1.41844 16.2901c.07617-.0472.30469.2834.83789.5652.30658.1598.63944.263.98262.3047.42089.046.8467.0098 1.25379-.1066.88359-.2438 1.57828-.7617 2.06425-1.1639.48598-.4022.7861-.6734.85008-.6201.06399.0534-.12797.4129-.56519.9141-.26033.2951-.55316.5598-.87293.7891-.40061.2889-.84865.5054-1.32387.6399-.48542.1386-.99614.1641-1.49297.0746-.40609-.0764-.78949-.2442-1.12125-.4905-.222-.1628-.40729-.3704-.54387-.6094-.08836-.1676-.10054-.2773-.06855-.2971z",
					fill: "#000"
				}), s.a.createElement("path", {
					d: "m1.2085 15.8394c.70843.486 1.55388.7323 2.4125.703s1.68528-.3328 2.3589-.8661c.23004-.2064.4744-.3963.73125-.5682.12943-.0849.27578-.1405.42889-.1632.15311-.0226.30931-.0116.45775.0322.15254.0661.2835.1737.37801.3105s.14881.2973.15672.4634c.00895.3331-.1037.658-.31688.9141-.21295.2544-.46491.4734-.74648.6489-.83941.5637-1.8525.9933-2.84426.7998-.54082-.1051-1.02984-.3884-1.50515-.6657-.21368-.1179-.41747-.2529-.60938-.4037-.3144-.2606-.5528-.6011-.69012-.9857",
					fill: "#ff85c6"
				}), s.a.createElement("path", {
					d: "m13.3224 5.51322c-.0032.29968-.0637.59597-.1782.87293-.0542.13337-.1411.25098-.2526.34202-.1116.09103-.2442.15259-.3857.179-.3321.03351-.6445-.22242-.7983-.54082-.134-.3332-.1968-.69074-.1844-1.04965-.0259-.98719.061-2.0216.4571-2.92348.1523-.35496.457-1.05422.7845-.45703.2514.45703.3596 1.10754.4479 1.62856.1099.64328.1467 1.29692.1097 1.94847z",
					fill: "#ffc2dd"
				}), s.a.createElement("path", {
					d: "m2.43311 1.8313c.4357-.66727 5.62605 6.34054 5.62605 6.34054l-.4677.41742-1.76566-.26507z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "m15.2968 5.96724c1.0832.9293 1.5783 2.68734 1.1944 4.06296 1.4335-1.13034 1.0999 1.88 0 2.9631.2803-.1081.844.2057 1.0222.4479.163.2547.2526.5493.259.8516.0566.6477-.0536 1.2991-.3199 1.8921-.6414 1.4062-2.9829 1.4808-3.6776.972-.1356.5332-.5698.9658-1.3071 1.106.9262.5225 1.7184.4951 2.4253-.3047.8805.2544 2.3628 0 3.1337-.4875s1.2584-1.4579 1.0664-2.3522c-.1341-.6093-.55-1.1197-.7389-1.7154-.227-.7145-.1112-1.4899.0336-2.2257.1447-.7358.3168-1.4884.195-2.22879-.1219-.74039-.6201-1.47622-1.3559-1.62094.0186-.79515-.2157-1.57567-.6691-2.22917-.4533-.6535-1.1024-1.14624-1.8537-1.40728l.5515 2.145",
					fill: "#7e53c1",
					opacity: ".67"
				}), s.a.createElement("path", {
					d: "m14.8307 4.86442c.113 1.0501.0543 2.11159-.1737 3.14285-.2483 1.02375-.7724 1.69559-1.5889 2.96003-1.3666 2.1145-4.16206 4.2123-4.16206 4.2123l-.21024 1.106s3.0012-.914 3.9229-1.5539c.1995-.361.2909-1.2187.3382-1.6316.0895-.7608.3635-1.4883.7982-2.1191.3443-.4997.7298-.8927 1.0375-1.41678.4246-.75116.6314-1.60579.5972-2.46797-.0544-.8398-.2078-1.67024-.457-2.47406",
					fill: "#ffc2dd"
				}), s.a.createElement("path", {
					d: "m13.8086 14.0707c-.0274 0-.0761-.0807-.1173-.2514-.0508-.2446-.058-.4963-.0213-.7434.0512-.3631.1538-.717.3047-1.0512.1823-.399.3931-.7844.6307-1.1532.2422-.387.4677-.7511.6444-1.09233.1603-.2979.29-.61131.387-.93539.1523-.55148.1173-.9232.1858-.93387.0274 0 .0731.08227.1097.25442.0428.24545.0428.49646 0 .74191-.0594.36166-.1686.71336-.3245 1.04508-.1865.39658-.3992.78038-.6368 1.14868-.2422.3854-.457.751-.6368 1.0938-.156.299-.2801.6135-.3702.9385-.1417.5545-.0883.9262-.1554.9384z",
					fill: "#c676ff"
				}), s.a.createElement("path", {
					d: "m14.9072 14.0231c-.0564 0-.1326-.1752-.1524-.4829-.0454-.8133.2322-1.6116.7724-2.2212.2102-.2255.3824-.3199.4235-.2803.0914.0868-.3458.652-.6185 1.4579s-.3047 1.5143-.425 1.5265z",
					fill: "#c676ff"
				}), s.a.createElement("path", {
					d: "m6.19165 7.1707c-.01219-.06246.12949-.13559.32297-.2666.24618-.1607.45882-.36765.62613-.60938.15866-.24732.26783-.52308.32144-.81199.04723-.22852.05942-.38848.12036-.40067.06093-.01218.15234.13407.18738.41133.03174.3671-.06183.73413-.26546 1.04123-.20362.30709-.50528.53614-.85579.64979-.27117.07312-.44637.04266-.45703-.01371z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "m4.43023 4.76671c0-.12035.43114-.18434.76172-.50273.33059-.3184.43571-.72821.55758-.72668.05789 0 .11731.1234.10207.33058-.03163.27398-.1599.52771-.36178.71562-.20187.18791-.46413.2977-.73966.30966-.20567 0-.32297-.07313-.31993-.12645z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "m3.40812 2.70883c.30037 0 .54387-.2435.54387-.54387s-.2435-.54387-.54387-.54387c-.30036 0-.54386.2435-.54386.54387s.2435.54387.54386.54387z",
					fill: "#fff"
				}), s.a.createElement("path", {
					d: "m16.4716 14.2914c.0168-.0213.0915-.0076.192.0808.1373.1344.2244.3119.2468.5027.0418.2872-.0268.5795-.192.8181-.202.2785-.4875.4856-.815.5911-.5639.1875-1.1772.1593-1.7215-.0792-.4067-.1844-.585-.4037-.5515-.4464.0336-.0427.2682.0625.6521.1523.2215.0538.4484.082.6764.0838.2721.0041.543-.0376.8013-.1234.2476-.0783.4686-.2238.6383-.4204.1276-.1591.2003-.3553.2072-.5591.0152-.3641-.1782-.5515-.1341-.6003z",
					fill: "#c676ff"
				}), s.a.createElement("path", {
					d: "m12.6798 17.3567c-.0442.0365-.1813-.0305-.3199-.2255-.1735-.264-.2528-.5787-.2251-.8933.0276-.3146.1606-.6107.3774-.8404.1691-.1691.3169-.2117.3535-.1691.0365.0427-.0229.1676-.1021.3458-.2153.4435-.2582.9512-.1204 1.4245.0412.1904.0854.3138.0366.358z",
					fill: "#c676ff"
				}), s.a.createElement("path", {
					d: "m12.6432.993331c.0549.001261.1081.019339.1524.051799l.2955.21937c.1024.0706.1992.14904.2895.23461.1902.16823.3669.3511.5286.54692.0807.09902.1676.19347.2392.29707l.2102.30468c.0335.0518.0701.10207.1021.15235l.0883.16148.1311.24223c.1523.0716.3123.15234.457.23613.4808.277.916.62641 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1365.37028.2007.76334.1889 1.15781.2065.0822.3969.20031.5622.34887.2183.19639.3963.43337.524.69773.2368.4925.3602 1.03182.3611 1.57829.0037.26323-.0198.52615-.0701.78455-.0515.2498-.1264.4941-.2239.7297-.1752.4479-.3459.8471-.3352 1.231.0236.4022.1338.7945.323 1.1502.1737.3763.3763.748.5149 1.1486.0732.1995.1243.4064.1523.617.0251.2055.0251.4131 0 .6186-.049.3813-.1782.7478-.3793 1.0755-.1265.2034-.2802.3884-.457.55-.032.032-.0625.0655-.096.0959-.2813.2401-.6047.4261-.9537.5485-.3748.1369-.7662.223-1.1639.2559-.096 0-.1935.0107-.2925.0107-.3527.0071-.703-.0598-1.0283-.1965-.2835.2425-.6235.4096-.9887.4859-.1309.0263-.2641.0396-.3976.0396-.1308 0-.2613-.0118-.39-.035-.0691-.0034-.1379-.0121-.2057-.0259-.4243-.0768-.81-.2954-1.0938-.62-.3157-.3695-.5211-.8204-.5926-1.3011-.0692-.4618-.0031-.9338.1904-1.3589-.1661.0625-.3413.1219-.5256.1737-.2925.0838-.5957.1615-.8942.2712-.15177.0544-.29985.1185-.44337.1919-.15013.0784-.29561.1654-.4357.2605-.30469.1966-.60938.4114-.9293.6323-.60606.446-1.26645.8131-1.96523 1.0923-.31459.118-.6402.2042-.97196.2574-.1751.0251-.35174.0378-.52863.0381-.11856.0001-.23704-.006-.35496-.0183-.42771-.0359-.8395-.1789-1.19742-.4159-.24527-.1736-.3382-.3168-.31535-.3427.0035-.0009.00716-.0009.01066 0-.26616-.056-.52276-.1504-.76172-.2803-.59015-.3284-1.05149-.8472-1.308629-1.4717-.285418-.6678-.341666-1.4113-.159961-2.1145.089401-.3499.231157-.6843.42047-.9918.18512-.296.41306-.5629.6764-.7922.24386-.2077.49809-.403.76172-.585.24528-.1767.47684-.3473.68707-.5286.39554-.3476.742-.7473 1.02985-1.18827.25631-.38968.48-.79987.66879-1.22637.09293-.21023.17672-.41133.25593-.60937-.11902-.16844-.22936-.34285-.33058-.52254l-.45703-.81047c-.5911-1.05574-1.11668-2.01094-1.55086-2.81684-.12458-.21556-.23059-.44134-.31688-.67488-.08052-.16829-.14184-.3451-.18281-.52711-.04675-.20918-.04675-.4261 0-.63527.05176-.237.17898-.45082.36258-.60938.19129-.15206.429-.2338.67336-.23156h.00914c.2118.00575.41978.05775.60937.15234.16882.07706.32914.17152.47836.28184.13711.10359.25746.20262.38086.30469.4875.38847.91406.74496 1.27969 1.05117.40066.34125.7084.62004.89273.81047l.41743.30773.04418.03352c.02807-.2051.06723-.40852.1173-.60938.12074-.49951.29704-.98394.52559-1.44422.04547-.10165.09632-.20082.15234-.29707l.16453-.28793c.0182-.03202.04252-.06014.07159-.08275.02907-.02262.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03654.00457.07183.01631.10383.03453l.02743.01828c.38016.28079.7368.59209 1.0664.93082.21773.22749.42123.46813.60933.72058.3091-.0716.6226-.12249.9385-.15234.2026-.61813.5268-1.18947.9537-1.68035v-.00762c.0251-.02912.0562-.05248.0911-.06852.035-.01603.073-.024358.1115-.024409zm-7.59736 2.437499c.06405-.15644.10312-.32197.11578-.49055-.02525.16638-.06397.33044-.11578.49055zm-.73125 7.08097.03351-.0076c.02133-.0397.04114-.0808.06094-.1204l-.09293.128zm-.28793.3565c.04937-.0282.10023-.0536.15234-.0762l.02285-.0351c-.03808.0092-.07312.0183-.10664.029l-.07008.0807zm-1.00395 6.8143h-.00761zm9.62049-16.910168c-.0696-.000201-.1385.014672-.2019.043598s-.1197.07122-.1652.123981v.007617c-.4115.478212-.7312 1.028242-.943 1.622462-.2316.02742-.4571.06551-.6902.11426-.1682-.21931-.3483-.42934-.5392-.62918-.33831-.34598-.70412-.6639-1.09388-.95063l-.05027-.03199c-.05671-.03237-.11923-.05323-.18401-.06141-.06478-.00817-.13053-.00349-.1935.01377-.06296.01726-.12191.04677-.17346.08684-.05155.04006-.09469.0899-.12696.14666l-.1691.28336c-.06001.09869-.11492.20038-.16453.30469-.2348.4748-.4152.97461-.53778 1.48992-.02285.08988-.04418.18129-.06246.27726l-.16301-.12187c-.19195-.195-.49359-.4677-.8973-.80438-.36715-.30468-.79981-.66726-1.28578-1.05574l-.09598-.07617c-.08531-.08684-.18586-.15539-.28945-.23918-.15921-.11881-.33023-.22091-.51035-.30469-.22066-.10615-.46202-.162328-.70688-.164529l-.00914.216329v-.223946c-.29523-.003494-.58241.096186-.81199.281836-.21874.18764-.37103.44092-.43418.72211-.0536.24029-.0536.48944 0 .72973.04217.19688.10603.38848.19043.57128.08802.24388.19657.47984.32449.70536.44027.81808.96281 1.76414 1.55238 2.81683l.45704.81199c.0716.12493.16453.28184.27421.44333-.07464.18281-.14168.33972-.20871.48902-.18354.41537-.40112.81486-.65051 1.19437-.2769.42478-.61058.80968-.99175 1.14408-.21328.1844-.44942.358-.67184.518l-.0716.0518c-.24432.1701-.47974.3527-.70535.5469-.27965.2431-.52148.5265-.717541.8409-.201003.3259-.351499.6803-.446367 1.0512-.191573.7431-.132671 1.5287.167578 2.2349.277385.6687.77228 1.2242 1.40461 1.5768.21839.1184.45074.2089.69164.2696.09693.1355.21773.2521.35648.3443.38841.2581.83506.4151 1.2995.457.1255.0132.25161.0198.37781.0198.18655-.0002.37287-.0134.55758-.0396.34488-.0565.68324-.1473 1.01004-.2711.7161-.2867 1.39326-.6624 2.0155-1.1182l.18586-.128c.25594-.1767.49817-.3443.73887-.5012.13372-.0908.27259-.1737.4159-.2483.1356-.0694.27554-.13.41896-.1813.227-.0823.457-.1524.6871-.2118l.1934-.0548.1173-.0351c-.0901.3419-.1088.6987-.0548 1.0481.0765.5219.3 1.0113.6444 1.4107.3166.3609.7463.6037 1.2188.6886.0723.015.1456.0246.2193.029.1379.0242.2775.0364.4175.0366.1478.0002.2952-.0141.4402-.0427.3588-.0709.6965-.2231.9872-.4448.3197.1159.6578.1727.9979.1675.0959 0 .1965 0 .3047-.0106.4164-.0353.8263-.126 1.2187-.2697.375-.1317.7222-.3322 1.0238-.5911.0289-.0259.0533-.0518.0776-.0777l.0244-.0259c.1885-.174.3525-.3729.4875-.5911.2169-.3543.3565-.7504.4098-1.1623.0271-.2227.0271-.4477 0-.6704-.0266-.2257-.0777-.4479-.1523-.6627-.107-.2909-.2312-.5753-.3717-.8516-.0518-.1066-.1036-.2117-.1524-.3184-.176-.3298-.2798-.6933-.3047-1.0664-.0091-.3184.125-.6596.2819-1.0542l.0396-.099c.1028-.2484.1819-.506.2361-.7693.0531-.2709.0776-.54668.0731-.8227-.0008-.5803-.132-1.153-.3839-1.67578-.1406-.28852-.3356-.54716-.5743-.76172-.1482-.13199-.3144-.24227-.4936-.32753-.0056-.36454-.0704-.72574-.192-1.06946-.2059-.57305-.5256-1.09851-.9399-1.54476-.3892-.42647-.8419-.79028-1.3422-1.0786-.1249-.0716-.2589-.14168-.4159-.2148l-.0304-.05789-.0655-.12035-.0884-.16149c-.0228-.03808-.0472-.07465-.0716-.11121l-.0396-.06246-.2118-.31383c-.0548-.07922-.1127-.15234-.1706-.2148l-.0807-.09598c-.139-.17453-.2919-.33755-.4571-.4875l-.0807-.0777c-.0754-.07432-.1569-.14211-.2438-.20261l-.067-.05028-.2437-.176714-.0579-.042657c-.0834-.06156-.1843-.094675-.288-.094453z",
					fill: "#fff"
				})),
				c = ({
					className: e
				}) => {
					return Object(r.e)(a.t) ? s.a.createElement(l, {
						className: e
					}) : s.a.createElement(i, {
						className: e
					})
				},
				l = ({
					className: e
				}) => s.a.createElement("svg", {
					className: e,
					fill: "#000",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40",
					height: "40",
					width: "40"
				}, s.a.createElement("path", {
					fill: "#ffdce2",
					d: "M11.76,15.15c.91-19.36,7.94-9.23,8-.71"
				}), s.a.createElement("path", {
					d: "M19.8,14.44a8.73,8.73,0,0,1-.45-2.07,14,14,0,0,0-.79-2.82,20,20,0,0,0-1.71-3.19,5.07,5.07,0,0,0-1.11-1.18,1.22,1.22,0,0,0-.47-.2c-.11,0-.17,0-.28.11a2.27,2.27,0,0,0-.65.88,8.65,8.65,0,0,0-.53,1.32c-.29.94-.53,1.91-.72,2.85-.4,1.87-.71,3.62-1.06,5a8.26,8.26,0,0,1-.83-4.73A30,30,0,0,1,13,5.56a6.5,6.5,0,0,1,.68-1c.13-.16.32-.3.47-.45a2.23,2.23,0,0,1,.62-.3A1.73,1.73,0,0,1,16,3.89a3.23,3.23,0,0,1,.95.69A10.88,10.88,0,0,1,19.1,8a13.48,13.48,0,0,1,.9,3.33A9.87,9.87,0,0,1,19.8,14.44Z"
				}), s.a.createElement("path", {
					fill: "#ffdce2",
					d: "M31.58,11.79c-3.31-3.6-8.69-4.11-13.65-2.9-5.63,1.4-7.87,6.7-10.6,10.93C5.6,21.92,3.57,23.67,2.11,26c-2.82,4.11.11,10.29,5.22,11.11,4.86.78,6.84-2.16,9.1-2.71,7.74-1.87,14.39-5.19,16-9.73C33.35,20.6,32.16,15.94,31.58,11.79Z"
				}), s.a.createElement("path", {
					d: "M31.59,11.78a19.39,19.39,0,0,1,.6,2.63A45.81,45.81,0,0,1,33,20a18.12,18.12,0,0,1,0,3.29,9.38,9.38,0,0,1-.31,1.67c-.11.26-.21.52-.32.77l-.41.72a14.17,14.17,0,0,1-3.83,3.82,29.56,29.56,0,0,1-6.61,3.36c-1.18.46-2.4.84-3.64,1.2a17.58,17.58,0,0,0-1.72.51,12.05,12.05,0,0,0-1.56.88,11.7,11.7,0,0,1-3.72,1.68,9.47,9.47,0,0,1-4.17,0A8.55,8.55,0,0,1,.63,32.57,8.24,8.24,0,0,1,.06,29a7,7,0,0,1,1.13-3.45,32.4,32.4,0,0,1,4.12-5c.35-.37.69-.75,1-1.12l.21-.25L6.7,19l.4-.64c.54-.86,1.07-1.73,1.6-2.58A22.63,22.63,0,0,1,12.5,11a11.46,11.46,0,0,1,5.28-2.83,20.36,20.36,0,0,1,5.45-.45,14.1,14.1,0,0,1,4.92,1.18,10.62,10.62,0,0,1,3.64,2.74,12.11,12.11,0,0,0-3.94-2.05,15,15,0,0,0-5-.52,22,22,0,0,0-4.59.76,12.15,12.15,0,0,0-3,1.28,12.59,12.59,0,0,0-3.54,3.18,44.59,44.59,0,0,0-2.77,4l-.66,1-.33.51L7.88,20s-.07.11-.12.17l-.11.12c-.54.61-1.1,1.2-1.65,1.76a34.28,34.28,0,0,0-3,3.43,8.73,8.73,0,0,0-.62.92,4.17,4.17,0,0,0-.48.94,5.91,5.91,0,0,0-.44,2,7.32,7.32,0,0,0,4,6.63,7.71,7.71,0,0,0,3.78.76,8.15,8.15,0,0,0,3.59-1,19.91,19.91,0,0,1,3.47-1.83,50.13,50.13,0,0,0,6.86-2.26,24.52,24.52,0,0,0,5.74-3.3A10.83,10.83,0,0,0,31,26.17a4.09,4.09,0,0,0,.4-.62,2.84,2.84,0,0,0,.33-.65l.15-.33a.34.34,0,0,0,0-.12l0-.18c0-.24.11-.48.14-.72C32.79,19.85,31.58,13.09,31.59,11.78Z"
				}), s.a.createElement("path", {
					fill: "#f9a",
					d: "M15,33.5c-.06-.16.39-.71,1.08-1.17a15.64,15.64,0,0,1,2-1c1.64-.84,3.65-1.16,5.09-1.87a12.34,12.34,0,0,0,3.33-2.36,7.84,7.84,0,0,0,2-2.77,2.59,2.59,0,0,1,.44,2,2.84,2.84,0,0,1-.7,1.6,16.44,16.44,0,0,1-6.26,3.36c-1.95.55-3.56,1-4.89,1.48-.31.13-.76.25-1.16.39S15.07,33.45,15,33.5Z"
				}), s.a.createElement("path", {
					fill: "#6a5cff",
					d: "M16.82,8.12c9.76-1.89,17.3,3.72,16.34,8,5,0,8.71,6.76,4.08,11.49,4.43,5.08,1.94,10.32-4.3,11.6-4.37.89-8.32-.76-9.83-4-1.71-3.65,1.08-7.29,5.78-7.42-5.56-5.2,3.42-8.34-.58-16.55"
				}), s.a.createElement("path", {
					d: "M28.32,11.28a2.88,2.88,0,0,1,.36.62,5.92,5.92,0,0,1,.57,1.41A8.27,8.27,0,0,1,29.32,18c-.43,1.8-1.46,3.56-1.82,5.3a4,4,0,0,0,.31,2.41c.09.17.21.33.31.5a5.45,5.45,0,0,0,.57.72l1.22,1.28c-.94.08-1.81.19-2.58.33a6.13,6.13,0,0,0-2.77,1.56,4,4,0,0,0-1.2,2.74,4.69,4.69,0,0,0,1,2.92,6.42,6.42,0,0,0,2.53,2,9.53,9.53,0,0,0,6.62.3c2.16-.61,4.1-2,4.68-3.84a5.58,5.58,0,0,0-1-4.93,9,9,0,0,0-.59-.77l-.47-.6-.23-.3c-.08-.05,0-.1.05-.15l.12-.14L37,26.28a3.29,3.29,0,0,0,.38-.54,5.5,5.5,0,0,0,.87-2.38A5.24,5.24,0,0,0,38,20.88a5.67,5.67,0,0,0-1.29-2.13,5.58,5.58,0,0,0-2-1.35A5.68,5.68,0,0,0,33,17.09L32.32,17l-.17,0a.92.92,0,0,1,0-.16l0-.34a12.4,12.4,0,0,0,.1-1.27,5.77,5.77,0,0,0-2.43-3.86,13.29,13.29,0,0,0-4.27-2.25,19.73,19.73,0,0,0-8.71-.71,16.24,16.24,0,0,1,9.39-.59,13.49,13.49,0,0,1,4.61,2,7.82,7.82,0,0,1,2.62,2.84l.28.58.2.64a5.36,5.36,0,0,1,.2,1.34s-.08.11,0,.11a2.28,2.28,0,0,0,.49.15,7.13,7.13,0,0,1,3.83,2.69,7.49,7.49,0,0,1,1.45,4.22,7.13,7.13,0,0,1-1.18,4.13l-.29.44a3.51,3.51,0,0,1-.3.36l-.19.21-.09.1s.05.07.07.11l.43.57.53.86a7.58,7.58,0,0,1,1,3.88,5.83,5.83,0,0,1-1.44,3.62,8.16,8.16,0,0,1-3,2.2,11.93,11.93,0,0,1-7,.82,8,8,0,0,1-5.53-3.76,5.77,5.77,0,0,1-.81-3.25,5.11,5.11,0,0,1,1.27-3,6.56,6.56,0,0,1,2.58-1.81,6.13,6.13,0,0,1,.72-.25L27,27.5l.15,0a3.27,3.27,0,0,1,.62-.07,4,4,0,0,1-.46-.55l-.18-.28a2.77,2.77,0,0,1-.22-.37l-.29-.82a5.64,5.64,0,0,1,.23-3.18c.64-1.87,2.06-4,2.21-6.23a8.74,8.74,0,0,0-.19-3C28.66,12.2,28.41,11.59,28.32,11.28Z"
				}), s.a.createElement("path", {
					d: "M21.44,26c4.39-2,1-8.4-3.18-5.83C15,22.4,17.62,27.75,21.44,26Z"
				}), s.a.createElement("path", {
					d: "M21.44,26a2.7,2.7,0,0,1-1.81.47A3.26,3.26,0,0,1,18.2,26a4.74,4.74,0,0,1-.94-.83,3.7,3.7,0,0,1-.74-3.43,3.84,3.84,0,0,1,2.65-2.54,3.49,3.49,0,0,1,3.12.51,4.05,4.05,0,0,1,1.58,2.53,3.41,3.41,0,0,1-.58,2.61,3.64,3.64,0,0,1-1.79,1.27,5.15,5.15,0,0,0,1.21-1.71,4.21,4.21,0,0,0,.23-1.55A3.07,3.07,0,0,0,22.4,21a2.89,2.89,0,0,0-1.53-1.1A3.08,3.08,0,0,0,17.68,21,3,3,0,0,0,17.22,24,3.49,3.49,0,0,0,19,25.89a3.7,3.7,0,0,0,1.39.27h.37L21,26.1Z"
				}), s.a.createElement("path", {
					fill: "#f9a",
					d: "M10.33,26.53c-2.77-.86-3.6-1.91-2.94-3.47C.11,25.47.07,33.88,7.18,36.34,13,38.34,17.35,28.69,10.33,26.53Z"
				}), s.a.createElement("path", {
					fill: "#f9a",
					d: "M10.33,26.52a6,6,0,0,1,1.09.35,7.15,7.15,0,0,1,.93.56,6.61,6.61,0,0,1,.93.91A4.92,4.92,0,0,1,14.13,31,7,7,0,0,1,14,32.23c-.11.37-.17.72-.28,1a6.35,6.35,0,0,1-1.83,2.6A4.9,4.9,0,0,1,8.76,37,5.92,5.92,0,0,1,7,36.75c-.51-.22-1-.39-1.54-.66a8.58,8.58,0,0,1-1.39-.92A7.55,7.55,0,0,1,2.94,34a6.86,6.86,0,0,1-1.51-3.62,6.46,6.46,0,0,1,.74-3.72A7.73,7.73,0,0,1,4.53,24a14.66,14.66,0,0,1,1.41-.82l1-.36.58-.22A1.88,1.88,0,0,1,8,22.47a8.28,8.28,0,0,0-.48,1.43,1.39,1.39,0,0,0,.07.59,2.1,2.1,0,0,0,.76.89,8.54,8.54,0,0,0,2,1A6.6,6.6,0,0,1,8,25.7a2.26,2.26,0,0,1-1-1.14,1.91,1.91,0,0,1-.11-.41c0-.11,0-.31,0-.28s0-.06,0-.07-.07.05-.07.06h0L6.41,24c-.34.18-.61.36-.83.46A6.81,6.81,0,0,0,2.8,27.22a5.82,5.82,0,0,0-.57,3.67A6,6,0,0,0,3.86,34a7.78,7.78,0,0,0,2.82,1.87,4.54,4.54,0,0,0,5.47-1.18,5.69,5.69,0,0,0,1.3-2.36,6.17,6.17,0,0,0,.22-1.26,4.91,4.91,0,0,0-.14-1.22,4.13,4.13,0,0,0-1.43-2.31l-.54-.42a3.12,3.12,0,0,0-.53-.29Z"
				}), s.a.createElement("path", {
					d: "M33,34.05c-.07-.07,0-.48.1-.95a3.82,3.82,0,0,0-.05-1.3,4.28,4.28,0,0,0-1.77-2.53,5.16,5.16,0,0,0-2.41-.83,8.67,8.67,0,0,0-2.22.13,2.56,2.56,0,0,1,2-1.06,6.24,6.24,0,0,1,3.93,2,4.58,4.58,0,0,1,.9,1.6,4.07,4.07,0,0,1,.11,1.61A3.53,3.53,0,0,1,33,34.05Z"
				}), s.a.createElement("path", {
					d: "M11.6,31.34a1.52,1.52,0,0,1-.23,1.17,3.33,3.33,0,0,1-.61.73c-.24.18-.45.38-.61.48a7.05,7.05,0,0,1-4.23,1,6.93,6.93,0,0,1-3.47-1.08A4.36,4.36,0,0,1,.63,31.32c.42.19.81.51,1.24.7s.77.38.9.56A5.23,5.23,0,0,0,5,33.78a6.76,6.76,0,0,0,2.3.15,5.93,5.93,0,0,0,3.37-1.35,4.62,4.62,0,0,0,.61-.63C11.43,31.69,11.55,31.43,11.6,31.34Z"
				}), s.a.createElement("path", {
					fill: "#ffdce2",
					d: "M19.92,15.9c.32-15.81,8.82-12.13,9.16-.18"
				}), s.a.createElement("path", {
					d: "M29.07,15.72a6.88,6.88,0,0,1-.46-2.09,13.82,13.82,0,0,0-.76-2.86,14.36,14.36,0,0,0-1.77-3.13c-.71-.94-1.71-1.52-2.28-1.24a3.32,3.32,0,0,0-1.53,1.77,15,15,0,0,0-.95,2.71c-.49,1.85-.78,3.61-1.1,5a7.42,7.42,0,0,1-.89-4.82,16,16,0,0,1,2.33-4.8A3.25,3.25,0,0,1,23.87,5a3.11,3.11,0,0,1,2.25.82,8.85,8.85,0,0,1,2.32,3.38,12.2,12.2,0,0,1,.87,3.39A11.14,11.14,0,0,1,29.07,15.72Z"
				}), s.a.createElement("path", {
					d: "M6.75,30.09a1,1,0,1,0,.06-2C5.64,28.27,5.51,30,6.75,30.09Z"
				}), s.a.createElement("path", {
					d: "M6.75,30.1A.74.74,0,0,1,6.19,30a1,1,0,0,1-.41-.73,1.19,1.19,0,0,1,.36-1,1.24,1.24,0,0,1,1.12-.3,1.08,1.08,0,0,1,.75.67,1.32,1.32,0,0,1,0,.94,1,1,0,0,1-.58.6,1.06,1.06,0,0,1-.68,0,1.6,1.6,0,0,0,.57-.28,1.6,1.6,0,0,0,.28-.36.93.93,0,0,0,0-1.08.85.85,0,0,0-1-.19,1,1,0,0,0-.45,1.45C6.23,29.91,6.65,30.08,6.75,30.1Z"
				}), s.a.createElement("path", {
					d: "M2.09,28.69c1.06-.05,1.47-2.36.39-2C1.59,27.11,1.2,28.85,2.09,28.69Z"
				}), s.a.createElement("path", {
					d: "M2.09,28.69a.32.32,0,0,1-.16,0,.37.37,0,0,1-.3-.17,1.1,1.1,0,0,1-.06-.7A1.82,1.82,0,0,1,1.94,27a1,1,0,0,1,.85-.44.47.47,0,0,1,.37.29.88.88,0,0,1,.08.41,1.92,1.92,0,0,1-.19.73,1.13,1.13,0,0,1-1,.72A1.46,1.46,0,0,0,2.78,28,1.34,1.34,0,0,0,3,27c-.08-.38-.54-.28-.74-.08a1.73,1.73,0,0,0-.62,1.4.37.37,0,0,0,.16.31A.45.45,0,0,0,2.09,28.69Z"
				}), s.a.createElement("circle", {
					fill: "#19f2c8",
					cx: "20.51",
					cy: "23.28",
					r: "2.04"
				}), s.a.createElement("path", {
					fill: "#19f2c8",
					d: "M22.55,23.28a2.72,2.72,0,0,0-.35-1A1.89,1.89,0,0,0,21,21.4a2,2,0,0,0-1.74.49,1.87,1.87,0,0,0-.56,1.69,1.91,1.91,0,0,0,2.25,1.51,2,2,0,0,0,1.56-1.81,1.81,1.81,0,0,1-.23,1.29,1.84,1.84,0,0,1-.94.78,2.22,2.22,0,0,1-2.5-.78,2.14,2.14,0,0,1,1.49-3.43,2.1,2.1,0,0,1,1.7.61,2,2,0,0,1,.47.85A2.09,2.09,0,0,1,22.55,23.28Z"
				}), s.a.createElement("circle", {
					fill: "#fff",
					cx: "18.9",
					cy: "21.87",
					r: "1.31"
				}), s.a.createElement("path", {
					fill: "#fff",
					d: "M20.21,21.87a2.75,2.75,0,0,0-.25-.65,1.17,1.17,0,0,0-.77-.52,1.22,1.22,0,0,0-1.06.32,1.15,1.15,0,0,0-.34,1,1.18,1.18,0,0,0,1.37.92,1.28,1.28,0,0,0,1-1.11,1.05,1.05,0,0,1-.08.87,1.21,1.21,0,0,1-.62.54,1.52,1.52,0,0,1-1.66-.55,1.44,1.44,0,0,1-.13-1.5,1.42,1.42,0,0,1,1.11-.77,1.34,1.34,0,0,1,1.12.41,1.26,1.26,0,0,1,.3.56A1.41,1.41,0,0,1,20.21,21.87Z"
				}), s.a.createElement("path", {
					fill: "#f9a",
					d: "M26,16.18c-1.46,1-4.82.41-5.26-1.56s.44-6.22,1.55-6.74C23.78,7.2,27.18,15.35,26,16.18Z"
				}), s.a.createElement("path", {
					d: "M26,16.17a1.08,1.08,0,0,0,.13-.59A5.5,5.5,0,0,0,26,14.27a13.67,13.67,0,0,0-1-2.63,14.42,14.42,0,0,0-1.87-3,1.41,1.41,0,0,0-.54-.41s0,0-.08,0-.14.14-.21.23a5.79,5.79,0,0,0-.64,1.52A13.35,13.35,0,0,0,21.16,13a6.94,6.94,0,0,0,.05,1.38,1.75,1.75,0,0,0,.51,1,3.86,3.86,0,0,0,2.16.95A3.71,3.71,0,0,0,26,16.06a3,3,0,0,1-2.21.92,3.5,3.5,0,0,1-2.17-.56,3.09,3.09,0,0,1-.94-1.09A3.12,3.12,0,0,1,20.37,14a11.14,11.14,0,0,1,.19-2.35,13.82,13.82,0,0,1,.53-2.13,6.53,6.53,0,0,1,.41-1,2.11,2.11,0,0,1,.72-.84.75.75,0,0,1,.64,0,1.88,1.88,0,0,1,.45.31,4.87,4.87,0,0,1,.65.73,12.72,12.72,0,0,1,.94,1.54,15.23,15.23,0,0,1,1.21,3,6.67,6.67,0,0,1,.26,1.7,2.64,2.64,0,0,1-.08.78A.63.63,0,0,1,26,16.17Z"
				}), s.a.createElement("path", {
					fill: "#94b3ff",
					d: "M33.47,23.09a.89.89,0,0,1-.11-.3l-.06-.26,0-.14,0-.08-.07.05a6.76,6.76,0,0,0-.63.52,6.62,6.62,0,0,0-.72.77l-.13.16-.13-.17a1.25,1.25,0,0,1-.19-1.07l.08-.32,0-.17s0-.18-.06-.16l-.23.15-.26.2a6.3,6.3,0,0,0-.83.72,2.56,2.56,0,0,0-.58.83c-.1.3-.08.46.11.63L29,25a2.77,2.77,0,0,1-.61-2.35,12.57,12.57,0,0,1,1.14-3,14,14,0,0,0,1-2.64,5.72,5.72,0,0,0,0-2.47c-.1-.38-.24-.73-.36-1.08l-.51-.93a8.88,8.88,0,0,1,.82.76,5.83,5.83,0,0,1,.68,1.14,4.33,4.33,0,0,1,.31,1.24,2.53,2.53,0,0,1,0,.94A17.5,17.5,0,0,1,29.71,21,7.05,7.05,0,0,0,29,22.94a2.13,2.13,0,0,0,.48,1.69l-.27.27a1.13,1.13,0,0,1-.35-.66,1.21,1.21,0,0,1,.12-.71,3.69,3.69,0,0,1,.75-1,7.86,7.86,0,0,1,.91-.75,5.41,5.41,0,0,1,.64-.38c.24-.13.45-.21.7-.32.07,0,0,.25.06.34a2.16,2.16,0,0,1,0,.36,4.34,4.34,0,0,1-.2.79.94.94,0,0,0,0,.83h-.39l.17-.19a6.25,6.25,0,0,1,1.49-1.12l.21-.11c0-.05,0,.05,0,.08v.12l0,.43Z"
				}), s.a.createElement("path", {
					fill: "#94b3ff",
					d: "M27.44,35.4a1.55,1.55,0,0,1-.47-.64,3,3,0,0,1-.23-.68,2.52,2.52,0,0,1-.06-.52l0-.25s0-.11,0-.08l-.1.1a1.38,1.38,0,0,0-.26.39,1.3,1.3,0,0,0-.12.4,2.49,2.49,0,0,0-.08.72,2.42,2.42,0,0,0,.44,1.36l-.56.55a3.74,3.74,0,0,1-1.55-2.34,4.67,4.67,0,0,1,2.14-4.55,4,4,0,0,1,4-.37c-.28,0-.59,0-.9.05a4.93,4.93,0,0,0-.94.21,8.29,8.29,0,0,0-1.35.61,4.13,4.13,0,0,0-2.34,3,3,3,0,0,0,1.28,2.95l-.28.28a3,3,0,0,1-.36-2.69,2.88,2.88,0,0,1,.88-1.29l.26-.22.14-.11c.05,0,.1-.08.08,0s0,.13.14.13h.05a3.9,3.9,0,0,0-.16,2.21A3.41,3.41,0,0,0,27.44,35.4Z"
				}), s.a.createElement("path", {
					fill: "#493ac1",
					d: "M28.06,37.14a11.11,11.11,0,0,0,1.27.18,10.21,10.21,0,0,0,1.84-.17,11.56,11.56,0,0,0,2.17-.61,6.25,6.25,0,0,0,1.79-1.22,4.49,4.49,0,0,0,1.16-3,5.57,5.57,0,0,0-.53-2.88,2.17,2.17,0,0,1,1.47,1,2.51,2.51,0,0,1,.52,1.45,7.52,7.52,0,0,1-1,3.29,4.4,4.4,0,0,1-1.05,1.13,9.61,9.61,0,0,1-1.16.8,6.9,6.9,0,0,1-2.43.81A11.52,11.52,0,0,1,29.9,38a3,3,0,0,1-1.16-.31A1.74,1.74,0,0,1,28.06,37.14Z"
				}), s.a.createElement("path", {
					fill: "#493ac1",
					d: "M33.09,26.76c0-.13.41-.15.79-.21a2,2,0,0,0,1-.34,3.49,3.49,0,0,0,.44-.41c.12-.13.21-.31.34-.48a3.58,3.58,0,0,0,.46-1.1,8.75,8.75,0,0,0-.18-3.77c.82,0,1.72.82,1.68,1.24a8.14,8.14,0,0,1-.88,3.8,3.82,3.82,0,0,1-1.05,1.24,2.52,2.52,0,0,1-1.37.44A2.49,2.49,0,0,1,33.09,26.76Z"
				}), s.a.createElement("path", {
					fill: "#fff8b8",
					d: "M2.29.57C0,2,5.89,16.92,8,19.08c2.8,1.55,7.52-.47,7.38-3.83S3.9-2.36,2.29.57Z"
				}), s.a.createElement("path", {
					d: "M2.27.56A.46.46,0,0,1,2.33.4.49.49,0,0,1,2.56.15a1.27,1.27,0,0,1,1.07,0A8.53,8.53,0,0,1,6.2,1.76a48.61,48.61,0,0,1,4.41,4.49,35.05,35.05,0,0,1,4.79,6.5,7.42,7.42,0,0,1,.83,2.15,4.29,4.29,0,0,1-.42,2.51,6,6,0,0,1-3.61,2.86,6.27,6.27,0,0,1-4,0L7.73,20a1.74,1.74,0,0,1-.35-.19l-.27-.3a8.55,8.55,0,0,1-.57-.79c-.33-.51-.6-1-.87-1.53a47.33,47.33,0,0,1-2.5-6A40,40,0,0,1,1.63,5.49a16.66,16.66,0,0,1-.3-2.67,5.66,5.66,0,0,1,.1-1.3A1.65,1.65,0,0,1,2.14.32a1.41,1.41,0,0,0-.31,1.21,6.29,6.29,0,0,0,.26,1.23c.24.84.56,1.72.89,2.57C3.63,7,4.29,8.6,4.52,9.47a46.46,46.46,0,0,0,1.64,5c.31.79.65,1.57,1,2.31.18.37.37.72.57,1.07.1.16.2.34.31.49s.11.16.17.22.06.1.11.13c2.53,1.36,6.38-.38,6.65-3V15.3a1.75,1.75,0,0,0-.07-.44,5.61,5.61,0,0,0-.34-.91,16.41,16.41,0,0,0-.95-1.75C13,11.08,12.2,10,11.46,9,10,7.06,8.48,5.29,7,3.69A32.32,32.32,0,0,0,4.48,1.12,4,4,0,0,0,3.13.3.77.77,0,0,0,2.27.56Z"
				}), s.a.createElement("path", {
					fill: "#ccffef",
					d: "M10.69,11.08a4.78,4.78,0,0,1-5,2.21c.85,2.93,2.21,5.84,3.6,6.41,2,.82,6.16-.77,6.05-4.37-.05-1.53-2.15-4.85-4-6.41a3.06,3.06,0,0,1-1.36,3"
				}), s.a.createElement("path", {
					d: "M10,11.89a4,4,0,0,0,.7-.78,3.28,3.28,0,0,0,.46-2.47c0-.16.22.08.38.21l.5.46c.37.36.54.56.77.82.43.49.79,1,1.06,1.31a13.15,13.15,0,0,1,1.36,2.22A5.79,5.79,0,0,1,15.66,15a3.73,3.73,0,0,1,0,.74,3.55,3.55,0,0,1-.08.73A4.5,4.5,0,0,1,14.15,19a5.93,5.93,0,0,1-2.51,1.3A4.13,4.13,0,0,1,8.71,20a5.88,5.88,0,0,1-1.77-2.14,15.31,15.31,0,0,1-1-2.29c-.14-.38-.26-.75-.37-1.12l-.23-.78-.26-.94c.27.06.53.13.8.17l.39.07a.58.58,0,0,0,.18,0h.1a3.55,3.55,0,0,0,.73,0,4.65,4.65,0,0,0,1.36-.39,5.37,5.37,0,0,0,2-1.6,4.48,4.48,0,0,1-2,2.32A4.31,4.31,0,0,1,7,13.86a2.56,2.56,0,0,1-.39,0H6.36s0,0,0,.08l.11.43c.08.28.16.56.25.83q.27.83.6,1.59a6.17,6.17,0,0,0,1.8,2.54,3.65,3.65,0,0,0,2.83.07,4.85,4.85,0,0,0,2.28-1.55,3.81,3.81,0,0,0,.81-2.38,5.26,5.26,0,0,0-.75-2.28,17.47,17.47,0,0,0-1.26-2c-.22-.3-.45-.6-.68-.88s-.23-.27-.35-.41l-.2-.23-.17-.17-.1-.11s0,0,0,.07a1.84,1.84,0,0,1-.14.64,2.93,2.93,0,0,1-.46.9A2.48,2.48,0,0,1,10,11.89Z"
				}), s.a.createElement("path", {
					fill: "#19f2c8",
					d: "M8.57,5.17c.14,2.42-2.75,3.95-4.8,3.76.61,1.47,1.56,6,3.36,5.89,2.38,0,5.54-1.7,5.25-4.6A17.52,17.52,0,0,0,8.44,5.46"
				}), s.a.createElement("path", {
					d: "M8.45,5.46A6.8,6.8,0,0,1,10.32,7,23.61,23.61,0,0,1,12.46,9.8c.06.1.27.33.23.56a3.26,3.26,0,0,1,0,.54,4,4,0,0,1-.2,1.08,4.35,4.35,0,0,1-1.29,1.84,6.37,6.37,0,0,1-4.11,1.54h.06a3,3,0,0,1-.53,0,3.14,3.14,0,0,1-.46-.18,3.81,3.81,0,0,1-1.27-1.48,11.83,11.83,0,0,1-.68-1.57c-.19-.52-.35-1-.51-1.54L3.5,9.77,3,8.37c.33,0,.68.05,1,0h.45c.18,0,.17,0,.27,0a4.7,4.7,0,0,0,.83-.17A4.79,4.79,0,0,0,7,7.54,3.1,3.1,0,0,0,8.41,5.18a2.4,2.4,0,0,1,.08,1.33A3.33,3.33,0,0,1,7.72,8,4.42,4.42,0,0,1,5.4,9.34c-.15,0-.29.05-.44.06H4.61L4.4,9.37s0,.05,0,.09a1.75,1.75,0,0,0,0,.25l.25.91a17.49,17.49,0,0,0,.54,1.73A6.71,6.71,0,0,0,6,13.84a1.42,1.42,0,0,0,1.12.76h0a5.26,5.26,0,0,0,4.57-2.48A3.1,3.1,0,0,0,12.05,11a2.72,2.72,0,0,0,0-.57c0-.1,0-.12,0-.17L11.9,10c-.4-.67-.83-1.29-1.25-1.87A27.49,27.49,0,0,0,8.45,5.46Z"
				}), s.a.createElement("path", {
					fill: "#fff",
					d: "M3.3,2.08A31.85,31.85,0,0,1,4.72,5.57c.7,1.64,1.36,3.56,2,5.26a47.44,47.44,0,0,0,3.47,7.56A5.89,5.89,0,0,1,7.76,15.9c-1-2.49-1.65-4.65-2.35-6.56s-1.28-3.56-1.69-5A19.92,19.92,0,0,1,3.3,2.08Z"
				}), s.a.createElement("path", {
					fill: "#6a5cff",
					d: "M20.72,8c-12.86-4.26-7.25,10.38.19,7.55-1.23-1.74-.58-5.59-.18-7.17"
				}), s.a.createElement("path", {
					d: "M20.74,8.4a16.52,16.52,0,0,1-.19,2.41,9.2,9.2,0,0,0,.22,3.3,2.47,2.47,0,0,0,.1.29l.06.14a1.76,1.76,0,0,0,.09.21,12.51,12.51,0,0,0,.67,1.1,10.52,10.52,0,0,1-1.3.49c-.11,0-.25.06-.37.09l-.27.06a4,4,0,0,1-.5.06,5.26,5.26,0,0,1-2.08-.2,7,7,0,0,1-3.39-2.27,6.31,6.31,0,0,1-1.55-3.87,3.51,3.51,0,0,1,.66-2.16,3.44,3.44,0,0,1,1.78-1.23,6.69,6.69,0,0,1,3.48,0,12.83,12.83,0,0,1,2.64,1c-.81.11-1.91.07-2.89.14s-1.81.15-2.21.2a2.36,2.36,0,0,0-1.61.62,2.2,2.2,0,0,0-.58,1.62A5.25,5.25,0,0,0,15,13.73a5.46,5.46,0,0,0,2.89,1.7,4.79,4.79,0,0,0,1.55.08,2.29,2.29,0,0,0,.36-.07l.21,0c.1-.06.28-.07.29-.15a2.12,2.12,0,0,1-.12-.2,1.34,1.34,0,0,1-.11-.31,5.39,5.39,0,0,1-.22-1,9.32,9.32,0,0,1,0-1.9A11.43,11.43,0,0,1,20.74,8.4Z"
				}), s.a.createElement("path", {
					fill: "#94b3ff",
					d: "M17.76,12.22c-.08,0-.17-.4-.36-.73,0-.05-.07,0,0-.08s0,.05,0,.07a2.47,2.47,0,0,0-.21.36l-.41.85-.08,0a1.77,1.77,0,0,1-.58-1,2.63,2.63,0,0,1,.05-1.39l.49.51a1.81,1.81,0,0,0-.41.23l0,0a.36.36,0,0,0-.11.1,1,1,0,0,0-.2.27,11.84,11.84,0,0,0-.49,1.4l-.18-.33-.08-.14h0L15,12.27,14.93,12a2.4,2.4,0,0,1-.29-1,1.92,1.92,0,0,1,.06-.62,1.81,1.81,0,0,1,.2-.54,2.45,2.45,0,0,1,.52-.62,3.09,3.09,0,0,1,2.39-.62c-.28.21-.67.4-1,.62s-.55.4-.69.48a1.51,1.51,0,0,0-.57.46c-.08.12-.1.13-.14.2a.77.77,0,0,0-.07.2,1,1,0,0,0,.05.5c0,.07,0,0,0,0l0-.09a1.18,1.18,0,0,1,.11-.19,1.11,1.11,0,0,1,.29-.28,2.53,2.53,0,0,1,.54-.28l.37-.14-.13.39a1.94,1.94,0,0,0-.06.86,1.13,1.13,0,0,0,.08.22.41.41,0,0,0,0,.09s0,0,.06-.07a1.67,1.67,0,0,1,.18-.28.46.46,0,0,1,.11-.12.56.56,0,0,1,.14-.1.32.32,0,0,1,.27,0c.24.21.19.35.23.49A3.65,3.65,0,0,1,17.76,12.22Z"
				}))
		},
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				i = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");

			function l(e) {
				const t = Object(r.d)(),
					n = Object(r.e)(t => Object(c.S)(t, {
						subredditId: e
					})),
					o = Object(r.e)(t => Object(i.i)(t, {
						subredditId: e
					})),
					l = Object(r.e)(t => Object(i.k)(t, {
						subredditId: e
					})),
					d = s.a.useCallback(() => {
						n.name && t(Object(a.l)(n.name))
					}, [n.name, t]);
				return s.a.useEffect(() => {
					l || o || d()
				}, [l, o, d]), {
					isFetching: l,
					isFetched: o,
					fetch: d
				}
			}
		},
		"./src/reddit/components/Econ/Prediction/themes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/config.ts");
			const s = {
				theme_1: `url(${o.a.assetPath}/img/econ/predictions/theme1.png)`,
				theme_2: `url(${o.a.assetPath}/img/econ/predictions/theme2.png)`,
				theme_3: "linear-gradient(104.49deg, #279A63 7.96%, #B6C048 119.75%)",
				theme_4: "linear-gradient(91.64deg, #F5AC1F -10.49%, #FC7519 52.61%)",
				theme_5: `url(${o.a.assetPath}/img/econ/predictions/theme5.png)`,
				theme_6: `url(${o.a.assetPath}/img/econ/predictions/theme6.png)`,
				theme_7: `url(${o.a.assetPath}/img/econ/predictions/theme7.png)`,
				theme_8: `url(${o.a.assetPath}/img/econ/predictions/theme8.png)`
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/Content.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less"),
				l = n.n(c);
			const d = ({
				steps: e,
				withModalStyles: t
			}) => a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
				className: Object(i.a)(l.a.banner, {
					[l.a.withModalStyles]: t
				})
			}, a.a.createElement("div", {
				className: l.a.header
			}, a.a.createElement("h2", null, a.a.createElement("span", {
				className: l.a.subHeader
			}, s.fbt._("Predictions", null, {
				hk: "ACRaq"
			})), s.fbt._("How It Works", null, {
				hk: "3QW4EZ"
			})), a.a.createElement("img", {
				alt: s.fbt._("Snoos gathered around a dark ball", null, {
					hk: "2sN6dD"
				}),
				className: l.a.bannerImage,
				src: `${o.a.assetPath}/img/econ/predictions/predictor_snoos_small.png`
			})), a.a.createElement("div", {
				className: l.a.innerCircle
			}), a.a.createElement("div", {
				className: l.a.middleCircle
			}), a.a.createElement("div", {
				className: l.a.outerCircle
			})), a.a.createElement("div", {
				className: Object(i.a)(l.a.stepsWrapper, {
					[l.a.withModalStyles]: t
				})
			}, e.map(({
				title: t,
				description: n
			}, o) => a.a.createElement("div", {
				key: t,
				className: l.a.step
			}, a.a.createElement("div", {
				className: Object(i.a)(l.a.stepCount, {
					[l.a.showConnectingLine]: o !== e.length - 1
				})
			}, a.a.createElement("span", {
				className: l.a.stepNumber
			}, o + 1)), a.a.createElement("div", null, a.a.createElement("h3", {
				className: l.a.stepTitle
			}, t), a.a.createElement("p", {
				className: l.a.stepDescription
			}, n))))))
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less": function(e, t, n) {
			e.exports = {
				widget: "_2skejWRT1rfgG6BplBSilb",
				banner: "_3Vuq-pvkzBHvhhc3OpN8CM",
				bannerImage: "_2GFV0XwSqv5Tr7PgZrRhVJ",
				withModalStyles: "_1RCK5xRisccYHWg1jiIoGb",
				circle: "_2016VIWG6bI8Nj8dsE4ypu",
				innerCircle: "_3j7kvNb-J6NJvKhocXhFpj",
				middleCircle: "_2m_eeq88Ifrg139rZyFFXk",
				outerCircle: "_3Ylo3qve0XxZ8mD9a2f841",
				header: "_2uBF46oc23WTMTLsgZkvHK",
				subHeader: "_2B5e_YXlIHTvceClBKv1h7",
				stepsWrapper: "_1A39M70HpOpbB2VfD7JRbq",
				step: "_1Z2_r-1ZgxI_OPxZQClct5",
				stepCount: "_2HWLDJDxl7OJmP4RsXqD9G",
				showConnectingLine: "_2XjaqnXdYZD-Z3ebpnuijI",
				stepNumber: "_39kWugzptUpQdvLWvfg7p6",
				stepTitle: "_1sgBe74lmm4Ril3sKb2nVU",
				stepDescription: "Utf73H7YpNoys-kCKEC6r",
				learnMoreWrapper: "_2KfRiOpMkVmGl6pasDgDj",
				learnMoreButton: "_3sIJNS0bEKk48Q-RSRYaUB"
			}
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, n) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, n) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return U
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "b", (function() {
				return V
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				r = n.n(s),
				a = n("./node_modules/polished/dist/polished.es.js"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				l = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/Emoji/index.m.less"),
				b = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const g = p.a.wrapped(({
				backgroundImage: e,
				style: t,
				...n
			}) => c.a.createElement("div", f({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, n)), "EmojiDisplay", b.a);
			var C = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				x = n("./src/reddit/constants/colors.ts"),
				_ = n("./src/reddit/constants/parameters.ts"),
				v = n("./src/reddit/controls/InternalLink/index.tsx"),
				O = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				y = n("./src/reddit/icons/svgs/Close/index.tsx"),
				k = n("./src/reddit/models/Flair/index.ts"),
				j = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = n("./src/reddit/components/Flair/index.m.less"),
				T = n.n(S);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const I = Object(E.a)(C.b),
				w = p.a.div("FlairWrapper", T.a),
				N = p.a.wrapped(l.a, "CloseButton", T.a),
				D = p.a.wrapped(Object(m.a)(({
					forceSmallEmojis: e,
					theme: t,
					...n
				}) => {
					const o = t;
					return c.a.createElement(g, P({
						style: {
							...M(!!e, o) || {}
						}
					}, n))
				}), "FlairEmojiDisplay", T.a),
				M = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				R = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						o = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(d.a)(n, {
						[_.q]: o,
						[_.t]: t ? "1" : ""
					})
				},
				L = e => e.isFlairFilter ? c.a.createElement(v.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(v.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: R(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class F extends c.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = c.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[T.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(j.a)(this.props).flair,
							color: `${U(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(N, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(y.a, {
						className: T.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(j.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(I, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(L, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const A = Object(m.a)(F),
				B = Object(m.a)(e => {
					let t = "",
						n = !1;
					const o = e.richtext.map((o, s) => {
						if (o.e === k.c.Emoji) {
							const r = o;
							return t += r.a, n = !0, c.a.createElement(D, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: r.u,
								key: s,
								title: r.a
							})
						} {
							const e = o;
							return t += e.t, c.a.createElement("span", {
								key: s
							}, e.t)
						}
					});
					let s;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (s = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const r = c.a.createElement(w, {
						className: Object(u.a)(e.className, {
							[T.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...s,
							backgroundColor: e.backgroundColor || Object(j.a)(e).flair,
							color: `${U(e)}`
						}
					}, o, e.isSelected && c.a.createElement(N, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(y.a, {
						className: T.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(j.a)(e).flair
						}
					})));
					return c.a.createElement(L, {
						flair: r,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				U = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(j.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(O.a)(Object(j.a)(e).post, x.a.black, x.a.white) : e.textColor === k.e.Dark ? x.a.black : x.a.white,
				W = p.a.wrapped(A, "TextFlair", T.a),
				z = p.a.wrapped(B, "RichTextFlair", T.a),
				G = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(a.i)(.1, Object(j.a)(r()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				H = p.a.wrapped(e => {
					const t = G(e),
						n = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(L, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", T.a);

			function V(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: s,
					isFlairFilter: r,
					isSelected: a,
					onClick: i,
					onCloseClick: l,
					onMouseDown: d,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: h,
					to: b
				} = e, f = Object(u.a)({
					[T.a.flairVariant]: r,
					[T.a.small]: r && !e.large,
					[T.a.large]: r && e.large
				}, t);
				switch (s.type) {
					case k.f.Richtext:
						return n || !s.richtext ? null : c.a.createElement(z, {
							backgroundColor: s.backgroundColor,
							className: f,
							forceSmallEmojis: h,
							isFlairFilter: r,
							isSelected: a,
							onClick: i,
							onCloseClick: l,
							onMouseDown: d,
							redditStyle: !p,
							richtext: s.richtext,
							subredditName: m,
							textColor: s.textColor,
							to: b
						});
					case k.f.Text:
						return n || !s.text ? null : c.a.createElement(W, {
							backgroundColor: s.backgroundColor,
							className: f,
							isFlairFilter: r,
							isSelected: a,
							onClick: i,
							onCloseClick: l,
							onMouseDown: d,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: b
						});
					case k.f.Meta:
						return c.a.createElement(W, {
							backgroundColor: s.backgroundColor,
							className: t,
							isFlairFilter: r,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: b
						});
					case k.f.Nsfw:
					case k.f.Spoiler:
						return c.a.createElement(H, {
							className: t,
							text: s.text,
							type: s.type
						});
					case k.f.Quarantined:
						return null;
					case k.f.Oc:
						return c.a.createElement(W, {
							backgroundColor: x.a.alienblue,
							text: s.text,
							textColor: k.e.Light,
							tooltip: o.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return s.text ? c.a.createElement(W, {
							backgroundColor: s.backgroundColor,
							className: f,
							isFlairFilter: r,
							onClick: i,
							onCloseClick: l,
							onMouseDown: d,
							subredditName: m,
							text: s.text,
							redditStyle: !p,
							to: b
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/noop.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				d = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.Y
				}),
				h = Object(i.b)(p),
				b = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = h(({
				className: e,
				isFlairFilter: t,
				onClick: n,
				onMouseDown: o,
				disabled: r = !1,
				flair: i,
				labelNSFW: c,
				subredditName: m
			}) => {
				const p = !!i.find(e => e.type === u.f.Richtext),
					h = i.map(e => {
						if (e.type === u.f.Text && p) return null;
						if (!c && e.type === u.f.Nsfw) return null;
						const i = Object(d.j)(e),
							h = `/r/${m}/`,
							f = o ? () => o(e) : s.a;
						return a.a.createElement(l.b, {
							isFlairFilter: t,
							key: b(e),
							onClick: n,
							onMouseDown: f,
							disabled: r,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: m,
							to: Object(d.e)(h, i)
						})
					});
				return a.a.createElement("div", {
					className: e
				}, h)
			})
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/noop.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				d = n.n(l);
			t.a = e => a.a.createElement(i.i, {
				className: d.a.modalHeader
			}, a.a.createElement(i.q, null, e.title), a.a.createElement(c.a, {
				onClick: e.onClosePressed || s.a
			}, a.a.createElement(i.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				r = n.n(s);
			const a = o.a.div("Wrapper", r.a);
			t.a = a
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, n) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				l = n.n(c);
			const d = a.a.span("Placeholder", l.a),
				u = a.a.div("SelectedFlair", l.a),
				m = a.a.wrapped(i.b, "FlairComponent", l.a);
			t.a = e => e.flair ? r.a.createElement(u, null, r.a.createElement(d, null, o.fbt._("{placeholder}", [o.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), r.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : r.a.createElement(u, null, o.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, n) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = l.a.wrapped(e => a.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				h = s()((e = p) => Object(i.a)({
					getComponent: () => Object(d.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/memoizeByReference/index.ts"),
				d = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/helpers/trackers/userFlair.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/selectors/moderatorPermissions.ts"),
				b = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				g = n("./src/reddit/components/TrackingHelper/index.tsx"),
				C = n("./src/reddit/controls/RadioInput/index.tsx"),
				E = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				x = n("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				v = n("./src/reddit/icons/svgs/Search/index.tsx"),
				O = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				y = n.n(O);
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}, this.onSearchClick = () => {
						this.props.sendEvent(Object(x.n)())
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: n
					} = this.props, {
						searchQuery: s
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(s)), i = !!n && a.some(e => e.id === n);
					return r.a.createElement("div", {
						className: y.a.container
					}, r.a.createElement("div", {
						className: y.a.searchBoxWrapper
					}, r.a.createElement("input", {
						className: y.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: o.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: s
					}), r.a.createElement(v.a, {
						className: y.a.searchIcon
					})), r.a.createElement(C.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, a.map((e, t) => {
						const o = Object(u.c)(e),
							s = n === e.id || !i && 0 === t;
						return r.a.createElement(E.a, {
							className: y.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: s ? 0 : -1,
							value: e.id
						}, r.a.createElement(f.b, {
							className: y.a.flairComponent,
							flair: o,
							forceSmallEmojis: !0
						}), e.textEditable && r.a.createElement(_.a, {
							className: y.a.pencil
						}))
					})))
				}
			}
			var j = Object(g.c)(k),
				S = n("./src/reddit/components/FlairSearch/index.m.less"),
				T = n.n(S);
			const P = Object(l.a)(e => e && Object(u.c)(e)),
				I = Object(i.c)({
					areFlairRestrictionsEnabled: d.d.flairRestrictions,
					isModerator: h.g
				}),
				w = Object(a.b)(I);
			t.a = w(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: s,
					onChange: a,
					subredditId: i,
					templates: l,
					templateIds: d,
					areFlairRestrictionsEnabled: h,
					isModerator: f
				} = e, g = Object(p.a)(), C = l && n && n.templateId && l[n.templateId] || void 0, E = Object(b.a)(), x = n || P(C);
				return r.a.createElement("div", {
					className: Object(c.a)(s, T.a.container)
				}, l && d && r.a.createElement(j, {
					flairTemplateType: t,
					onChange: e => {
						if (l) {
							const t = l[e],
								n = Object(u.c)(t);
							g(Object(m.b)({
								userFlair: t
							})), a(n)
						}
					},
					selectedTemplateId: C ? C.id : "",
					templateIds: d,
					templates: l
				}), x && C && (f || C.textEditable) && r.a.createElement("div", {
					className: T.a.flairEditSection
				}, r.a.createElement("div", {
					className: T.a.editLabel
				}, o.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), h && r.a.createElement("div", {
					className: T.a.restrictionHintText
				}, Object(u.k)(C)), r.a.createElement(E, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: x,
					flairTemplate: C,
					flairTemplateType: t,
					isFlairModOnly: C.modOnly,
					onChange: e => {
						const t = l && e.templateId ? l[e.templateId] : void 0;
						let n = e;
						t && (n = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), a(n)
					},
					subredditId: i
				})))
			})
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return _
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/FlairList/index.tsx"),
				d = n("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/flair.ts"),
				h = n("./src/reddit/helpers/trackers/postFlair.ts"),
				b = n("./src/reddit/models/Flair/index.ts"),
				f = n("./src/reddit/selectors/postFlair.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/components/FlairWrapper/index.m.less"),
				E = n.n(C);
			const x = Object(a.b)(() => Object(i.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(u.q)(e, {
						pageLayer: t
					}),
					isPostFlairEnabled: (e, t) => Object(f.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					subredditName: (e, {
						post: t
					}) => Object(g.S)(e, {
						subredditId: t.belongsTo.id
					}).name
				})),
				_ = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: o.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: b.f.Oc
					}), e.isMeta && t.push({
						text: o.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: b.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = x(({
				className: e,
				disableFlair: t,
				flairPosition: n,
				isFlairFilter: o,
				isPostFlairEnabled: s,
				nowrap: a,
				post: i,
				sendEvent: u,
				subredditName: f,
				titleFlair: g
			}) => {
				const C = Object(d.a)(),
					x = n === b.b.Left,
					v = g || _(i),
					O = [];
				let y = [];
				x ? v.map(e => {
					Object(p.q)(e.type) ? O.push(e) : y.push(e)
				}) : y = v;
				const k = a ? E.a.flairNoWrap : O.length > 0 || y.length > 0 ? E.a.flairWrapper : null,
					j = e => {
						const t = {
							id: i.belongsTo.id,
							eventType: i.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(m.e)(m.a.SearchResults), u && u(Object(h.a)(i.id, t))
					},
					S = e => {
						Object(m.e)(m.a.SearchResults), u && u(Object(h.e)(e, i.id))
					},
					T = !(t || !v || !v.length);
				return T ? r.a.createElement("div", {
					className: Object(c.a)(k, e),
					"data-ignore-click": C
				}, T && O && r.a.createElement(l.a, {
					className: E.a.flairList,
					isFlairFilter: o,
					key: "leftFlair",
					onClick: j,
					onMouseDown: S,
					flair: O,
					disabled: !s,
					subredditName: f
				}), T && r.a.createElement(l.a, {
					className: E.a.flairList,
					isFlairFilter: o,
					key: "rightFlair",
					onClick: j,
					onMouseDown: S,
					flair: y,
					disabled: !s,
					subredditName: f
				})) : null
			})
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, n) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/FocusableContent/index.m.less"),
				c = n.n(i);
			t.a = a.a.wrapped(e => s.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/Governance/PollHelpText/index.m.less": function(e, t, n) {
			e.exports = {
				pollHelpText: "_13USlqK0GlZqaPCBL0zKGR",
				decisionThreholdAmount: "_2c1NZvJKkI6yBivC77FPD4",
				decisionThresholdTitle: "_3awYIQIHL4ztIb5nZDL46P",
				decisionThresholdExplanation: "_1GSbrVpv76_yXM2VcUM3zK"
			}
		},
		"./src/reddit/components/Governance/ProposalTemplates/Generic/index.m.less": function(e, t, n) {
			e.exports = {
				hintText: "_1iTDa11Wj-8Ogp0kHlXhus",
				text: "_3Q86vH6B2mMSV8rHtZq4H9",
				topline: "_12_7Q434C71LJVJC_6GX71"
			}
		},
		"./src/reddit/components/Governance/ProposalTemplates/Spinoff/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_2clkG943bEk_52p-4FBzwJ"
			}
		},
		"./src/reddit/components/Governance/ProposalTemplates/TopModReplacement/index.m.less": function(e, t, n) {
			e.exports = {
				input: "AyMlaMkumG28uV6ZIz9ed"
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/crypto/points.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(l.b)(e, t)
			});
			t.a = Object(r.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const o = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					r = `${i.a.assetPath}/${o}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return s.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: r
				})
			}))
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/reddit/components/Governance/Token/index.tsx"),
				d = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/crypto/points.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = n.n(m);
			const h = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(u.b)(e, t)
			});
			t.a = Object(r.b)(h)((function(e) {
				var t;
				return s.a.createElement("div", {
					className: Object(i.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, s.a.createElement(l.a, {
					className: Object(i.a)(p.a.token, {
						[p.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(d.b)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(o.a)({
				ErrorComponent: r,
				getComponent: () => Object(s.a)(() => n.e("SubredditHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return f
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/timeAgo/index.ts"),
				a = n("./src/reddit/hooks/useLocale.ts");
			var i = function({
					seconds: e,
					...t
				}) {
					var n;
					const o = Object(a.a)(),
						i = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : o
						};
					return s.a.createElement(s.a.Fragment, null, Object(r.d)(e, i))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var l = function({
					seconds: e,
					...t
				}) {
					var n;
					const o = Object(a.a)(),
						r = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : o
						};
					return s.a.createElement(s.a.Fragment, null, Object(c.a)(e, r))
				},
				d = n("./src/lib/constants/index.ts");
			var u = function({
					seconds: e,
					locale: t
				}) {
					const n = Object(a.a)(),
						o = null != t ? t : n;
					return s.a.createElement(s.a.Fragment, null, function(e, t = d.D) {
						const n = e * d.Sb;
						return new Date(n).toLocaleString(t, {
							weekday: "short",
							month: "short",
							year: "numeric",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							timeZoneName: "long"
						})
					}(e, o))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function h(e, t = d.D) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function b(e, t, n = !1, o = d.D) {
				const s = Object(p.e)(e, t),
					r = new Date(e * d.Sb);
				let a;
				if (s === p.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === p.a.Future ? a = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? h(r, o) : function(e, t = d.D) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(r, o) : s === p.a.Past && (a = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : h(r, o)), `${a} @ ${function(e,t=d.D){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(r,o)}`
			}
			var f = function({
				startTime: e,
				endTime: t,
				isLive: n,
				locale: o
			}) {
				const r = Object(a.a)(),
					i = null != o ? o : r;
				return s.a.createElement(s.a.Fragment, null, b(e, t, n, i))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = n.n(a),
				c = n("./src/lib/lessComponent.tsx");
			const l = c.a.div("IconWrapper", i.a),
				d = c.a.div("TextWrapper", i.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: o,
					subtitle: a,
					title: c,
					textWrapperClassName: u
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(t, i.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, s.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), o ? s.a.createElement(l, null, o) : s.a.createElement(l, null), s.a.createElement(d, {
					className: u
				}, s.a.createElement("div", {
					className: i.a.title
				}, c), a && s.a.createElement("div", {
					className: i.a.subtitle
				}, a)))
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/selectors/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(d),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const h = m.a.div("Text", u.a),
				b = m.a.div("BottomText", u.a),
				f = e => s.a.createElement(h, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				g = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(b, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				C = Object(a.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(l.b)(t)(e)
				}),
				E = Object(c.a)(g, [i.a.Click, i.a.Keydown]),
				x = Object(c.a)(f, [i.a.Click, i.a.Keydown]),
				_ = Object(r.b)(C);
			t.c = _(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(E, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(x, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(d);
			const m = Object(s.createContext)(null),
				p = Object(s.createContext)(null);
			class h extends r.a.Component {
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
					return r.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, r.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const b = i.f + 10,
				f = r.a.memo(() => {
					const [e, t] = Object(s.useState)("-500px"), n = Object(s.useContext)(c.a);
					return r.a.createElement(m.Consumer, null, s => s && r.a.createElement("div", {
						className: Object(a.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, r.a.createElement(l.t, {
						kind: l.b.Button,
						priority: l.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const n = e.currentTarget.clientWidth + 55;
							t(`-${n}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							s.focus(), s.scrollIntoView(), window.scrollBy(0, -b)
						}
					}, o.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), r.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				g = r.a.memo(() => r.a.createElement(p.Consumer, null, e => r.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				i = n("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e) {
				const {
					children: t,
					className: n,
					to: o,
					...r
				} = e, l = Object(i.b)(o);
				return s.a.createElement(a.a, c({
					className: n,
					to: l
				}, r), t)
			}

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, o = t ? l : r.a;
				return s.a.createElement(o, d({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/MarkdownHelp/index.m.less": function(e, t, n) {
			e.exports = {
				Section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				section: "_1gF-JM2Md5QrEmUiEkRvLZ",
				Container: "C8uCM4XqGMA6xiIu7zfJl",
				container: "C8uCM4XqGMA6xiIu7zfJl",
				helpTable: "_3E7k-M4lVIYGW6Z7QoiPc9",
				Table: "_1t5z5ubOp-UUzTGLJr43d0",
				table: "_1t5z5ubOp-UUzTGLJr43d0",
				P: "_3MhMubukVABghyvZNN2X65",
				p: "_3MhMubukVABghyvZNN2X65"
			}
		},
		"./src/reddit/components/MarkdownHelp/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				c = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				C = n.n(g),
				E = n("./src/lib/lessComponent.tsx");
			const x = "Markdown_Help__Modal",
				_ = E.a.wrapped(b.a, "Section", C.a),
				v = E.a.div("Container", C.a),
				O = E.a.table("Table", C.a),
				y = E.a.p("P", C.a);
			class k extends r.a.Component {
				render() {
					const e = o.fbt._("italics", null, {
							hk: "9wBJ9"
						}),
						t = o.fbt._("bold", null, {
							hk: "yoD2u"
						}),
						n = o.fbt._("item", null, {
							hk: "20ZnoS"
						}),
						s = o.fbt._("quoted text", null, {
							hk: "1Lvb4b"
						}),
						a = o.fbt._("strikethrough", null, {
							hk: "UcaLr"
						}),
						u = o.fbt._("spoilers", null, {
							hk: "372XyC"
						});
					return r.a.createElement(c.a, null, r.a.createElement(i.a, {
						onClosePressed: this.props.closeModal,
						title: o.fbt._("Markdown Help", null, {
							hk: "w08E2"
						})
					}), r.a.createElement(v, null, r.a.createElement(O, {
						className: C.a.helpTable
					}, r.a.createElement("tr", null, r.a.createElement(l.s, null, r.a.createElement(l.j, null, o.fbt._("Type this:", null, {
						hk: "VDjXQ"
					}))), r.a.createElement(l.s, null, r.a.createElement(l.j, null, o.fbt._("to get this:", null, {
						hk: "4zlZi9"
					})))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, "*", e, "*")), r.a.createElement(l.p, null, r.a.createElement(l.f, null, e))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, "**", t, "**")), r.a.createElement(l.p, null, r.a.createElement(l.b, null, t))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, "[reddit!](https://reddit.com)")), r.a.createElement(l.p, null, r.a.createElement(l.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, "* ", n, " 1"), r.a.createElement(l.j, null, "* ", n, " 2"), r.a.createElement(l.j, null, "* ", n, " 3")), r.a.createElement(l.p, null, r.a.createElement(l.v, null, r.a.createElement(l.g, null, n, " 1"), r.a.createElement(l.g, null, n, " 2"), r.a.createElement(l.g, null, n, " 3")))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, "> ", s)), r.a.createElement(l.p, null, r.a.createElement(l.c, null, s))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, "~~", a, "~~")), r.a.createElement(l.p, null, r.a.createElement(l.d, null, a))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, o.fbt._("super^script", null, {
						hk: "2WteOp"
					}))), r.a.createElement(l.p, null, o.fbt._("super{=script}", [o.fbt._param("=script", r.a.createElement(l.m, null, o.fbt._("script", null, {
						hk: "4a2qMi"
					})))], {
						hk: "1VvC4z"
					}))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, `>!${u}!<`)), r.a.createElement(l.p, null, r.a.createElement(d.a, null, u)))), r.a.createElement(y, null, o.fbt._("Check the {=commenting wiki page} for more help", [o.fbt._param("=commenting wiki page", r.a.createElement(l.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, o.fbt._("commenting wiki page", null, {
						hk: "25UBE"
					})))], {
						hk: "1J9oBy"
					}))), r.a.createElement(_, null, r.a.createElement(f.a, null, r.a.createElement(h.l, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const j = Object(a.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(x))
			}))(k);
			t.a = Object(m.a)(Object(u.c)(j))
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/selectors/tooltip.ts"),
				f = n("./src/reddit/components/OverflowMenu/index.m.less"),
				g = n.n(f);
			const C = l.a.wrapped(m.a, "_Dropdown", g.a),
				E = Object(u.a)(C),
				x = l.a.button("MenuButton", g.a),
				_ = l.a.wrapped(p.b, "DropdownRow", g.a),
				v = Object(i.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(b.b)(t)(e)
				}),
				O = Object(a.b)(v, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(d.h)({
						tooltipId: t
					}))
				})),
				y = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = O(e => r.a.createElement(x, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": o.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: y(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(h.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), r.a.createElement(E, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				a = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e, t) {
				const n = Object(r.a)(e, t);
				class o extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(a.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(n, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(o)
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/components/HumanDate/index.tsx"),
				r = n("./src/lib/timeUntil/index.ts"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function l(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", i.a.createElement(s.d, {
					seconds: e.poll.endsAt / o.Sb
				}))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PollCreator/DefaultHintText/index.m.less": function(e, t, n) {
			e.exports = {
				helpTextItem: "wYdL1V7fxOtMwgvL8gt4a",
				helpTextList: "_23_RY8_TK404O0hdN7zpNn",
				helpTitle: "_3qXjOYMFBOO47HoteguQiz",
				helpTitleText: "_1NjVVC7kcVvJTLxxbNEi0S",
				infoIcon: "_2EKnk91_WzE7ao5vX6K5cC"
			}
		},
		"./src/reddit/components/PollCreator/EndDatePicker/index.m.less": function(e, t, n) {
			e.exports = {
				timeZone: "jHZVOve2QGoctU0iDnnCI",
				dateTime: "_24VUErhy8JiR-xw9cMsdx0",
				timeInput: "_1YzViNj-rqobl3wArJ3k_"
			}
		},
		"./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts"),
				r = n("./src/reddit/hooks/useLocale.ts"),
				a = n("./src/reddit/components/PollCreator/EndDatePicker/utils.ts");

			function i(e, t) {
				var n;
				const i = Object(r.a)(),
					{
						date: c,
						time: l
					} = Object(a.a)(e),
					d = Object(o.b)(),
					u = d ? Object(o.d)(d) : null,
					m = new Date,
					{
						minDate: p,
						minTime: h,
						formattedMinDatetime: b
					} = Object(a.c)(m, i),
					f = Object(s.a)(),
					g = Object(a.d)({
						date: p,
						time: h
					});
				return {
					date: c,
					time: l,
					timeZoneAbbr: null !== (n = null == u ? void 0 : u.abbreviation) && void 0 !== n ? n : "",
					onChange: e => {
						Object.values(e).every(e => e.length) && t(Object(a.d)({
							date: c,
							time: l,
							...e
						}))
					},
					maxDate: f,
					minDate: p,
					minTime: h,
					fullMinDatetime: g,
					formattedMinDatetime: b
				}
			}
		},
		"./src/reddit/components/PollCreator/EndDatePicker/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			}));
			var o = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const r = () => {
					const e = new Date;
					return e.setDate(e.getDate() + 3), e
				},
				a = e => {
					const [t, n] = Object(s.i)(Object(o.g)(e));
					return {
						date: t,
						time: n
					}
				},
				i = ({
					date: e,
					time: t
				}) => new Date(`${e}T${t}`),
				c = (e, t) => e.toLocaleString(t, {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "2-digit"
				}),
				l = (e, t) => {
					const n = new Date(e);
					n.setHours(n.getHours() + 1);
					const {
						date: o,
						time: s
					} = a(n);
					return {
						minDate: o,
						minTime: s,
						formattedMinDatetime: c(n, t)
					}
				}
		},
		"./src/reddit/components/PollCreator/PollTypePicker/index.m.less": function(e, t, n) {
			e.exports = {
				pollTypePicker: "drrpCJbRPvWIi1se7oigP",
				button: "_39suzYUnvfHrQXd0LE1RYx",
				pollTypePickerButton: "_28-N09acaS2LiVHc52ApJg",
				buttonContent: "_2_qeC1tN1L5P6Y0YRK53bG",
				buttonBackground: "_3RjfM9k2XuNzq3D4Zhj4uT",
				predictionLabel: "xRe7YxsTBpNw2SR22vmzr",
				education: "lqD-1gWpcZmY0UJOP1zSl"
			}
		},
		"./src/reddit/components/PollCreator/SortableOptions/index.m.less": function(e, t, n) {
			e.exports = {
				options: "vtFOVcu_sAJUlHd8Vxx_S",
				controls: "_2uAaCZzc_HQhLKkUJ66vU5",
				container: "_3Q-Z7QKdjihmmbINOEzofW",
				grapple: "_3ePBnj3VLelomSpvc5bYjW",
				input: "_2yM8wrpUFDlwPMl42pJ1ly",
				trash: "_2raOjruzA2S4cw-4wFtDJN"
			}
		},
		"./src/reddit/components/PollCreator/TournamentPicker/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentPicker: "_25F8doc5ufAo8JIxMy7xJZ",
				title: "_16nXKAYcvkyC8JhINAzIRG",
				input: "jiVuYdcb1GhQgH7_UaB1P"
			}
		},
		"./src/reddit/components/PollCreator/index.m.less": function(e, t, n) {
			e.exports = {
				flexRow: "_2G4E6Ja1LjN3lvEFdvCAMM",
				addButton: "_1MW4m9_ojHA4AO_I1MhQf3",
				container: "_3S9C536IVs6t9fXO2fE_Yq",
				help: "_1kYOBe87AO-Ly-PkWe8yd8",
				votingLengthCaret: "ekKR9rTD5h3p7yQ4SaLoa",
				votingLengthDropdown: "_1Sbl_DKDMJM71lJ_1GQgbB",
				votingLengthDropdownContainer: "_24W8XLxQSgwVVFneYfHsJR",
				votingLengthSelector: "_3TH3dFaVjJ2OSx-B_N3pDU",
				votingLengthSelector__disabled: "_2Wc5VFPksdxez0HQRlpdeE",
				votingLengthSelectorDisabled: "_2Wc5VFPksdxez0HQRlpdeE",
				votingLengthTitleText: "_1-ozAll8fJXOJ9tr9TwS1r",
				votingLengthDisplay: "gj1NXudk861pHzMz3jvCj",
				predictionSettings: "HXVbpI7By73VaXfNbuqeV",
				endDatePicker: "_2RwSuQDNqmMVVRgysrJYie",
				title: "_24GJ3HJNoyTS39atzgNnwZ"
			}
		},
		"./src/reddit/components/PostCreationForm/Button/index.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_18Bo5Wuo3tMV-RDB8-kh8Z",
				primaryButton: "_18Bo5Wuo3tMV-RDB8-kh8Z",
				SecondaryButton: "lUsjLveKkZWUAgDDyU1rD",
				secondaryButton: "lUsjLveKkZWUAgDDyU1rD"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1IZotn_IQQ1fgtUjaFYbkd",
				onHoverActionText: "_1Zlk1VrZ8puYZy5lJOfz--",
				Container: "_1IZotn_IQQ1fgtUjaFYbkd",
				PostTitle: "_1hzDym_NpIlizkTDXc_rQj",
				postTitle: "_1hzDym_NpIlizkTDXc_rQj",
				MetaLine: "_67JuJTdFwIJPLPDkyPX-f",
				metaLine: "_67JuJTdFwIJPLPDkyPX-f",
				SubredditName: "_88OYON0K3w_tpnmCSWlUX",
				subredditName: "_88OYON0K3w_tpnmCSWlUX",
				InfoSpan: "_3DFfW-OG-MvCLiiEN18mpq",
				infoSpan: "_3DFfW-OG-MvCLiiEN18mpq"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				TopRow: "vuQEtla32r0kemmh11Hov",
				topRow: "vuQEtla32r0kemmh11Hov",
				TitleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				titleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				DetailsContainer: "_87UrrqUro4oVpXFAElZUX",
				detailsContainer: "_87UrrqUro4oVpXFAElZUX",
				ButtonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				buttonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				CloseWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				closeWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				Close: "_1TaKYhB80ExuTPoLaQZMRE",
				close: "_1TaKYhB80ExuTPoLaQZMRE",
				Empty: "_20K7F6rAgXGH5z83v7Ifiv",
				empty: "_20K7F6rAgXGH5z83v7Ifiv",
				EmptyImage: "_2eLeResic3Gc77W_edgNGt",
				emptyImage: "_2eLeResic3Gc77W_edgNGt",
				EmptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				emptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				FilterWrapper: "pKfhphFBuya82DYP2Q90X",
				filterWrapper: "pKfhphFBuya82DYP2Q90X",
				FilterInput: "_3W5cary86KmYWrVgEpGKPb",
				filterInput: "_3W5cary86KmYWrVgEpGKPb",
				SearchIcon: "_9T_dguVcd795c_vOyl9s4",
				searchIcon: "_9T_dguVcd795c_vOyl9s4",
				PlusIcon: "hfmgzmXCLe3hvSyZad9WP",
				plusIcon: "hfmgzmXCLe3hvSyZad9WP",
				CreateCollectionButton: "_34_h0zRV3AgFr_0sh99pKz",
				createCollectionButton: "_34_h0zRV3AgFr_0sh99pKz"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				u = n("./src/reddit/actions/postCreation/general.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/Input/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				C = n("./src/reddit/icons/svgs/Search/index.tsx"),
				E = n("./src/reddit/layout/row/Inline/index.tsx"),
				x = n("./src/reddit/models/PostCreationForm/index.ts"),
				_ = n("./src/reddit/selectors/postCollection.ts"),
				v = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				O = n("./src/reddit/components/HumanDate/index.tsx"),
				y = n("./src/reddit/helpers/name/index.ts"),
				k = n("./src/reddit/models/Subreddit/index.ts"),
				j = n("./src/reddit/models/User/index.ts"),
				S = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				I = n.n(P),
				w = n("./src/lib/lessComponent.tsx");
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js"), D = w.a.div("Container", I.a), M = w.a.h2("PostTitle", I.a), R = w.a.div("MetaLine", I.a), L = w.a.span("SubredditName", I.a), F = w.a.time("InfoSpan", I.a), A = Object(c.c)({
				subreddit: (e, {
					collection: {
						subredditId: t
					}
				}) => t ? Object(S.S)(e, {
					subredditId: t
				}) : void 0,
				user: T.k
			});
			class B extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						subreddit: t,
						user: n,
						onHoverActionText: o
					} = this.props, s = t && Object(k.h)(t) && n ? Object(y.d)(Object(j.e)(n)) : t ? t.displayText : "", r = e.postIds.length;
					return a.a.createElement(D, {
						onClick: this.onClick,
						className: I.a.container
					}, a.a.createElement(M, {
						"data-redditstyle": !0
					}, e.title), a.a.createElement(R, {
						"data-redditstyle": !0
					}, s && a.a.createElement(L, {
						"data-redditstyle": !0
					}, s), s && a.a.createElement(v.b, null), a.a.createElement(F, null, N._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [N._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), a.a.createElement(v.b, null), a.a.createElement(F, null, N._("created {time}", [N._param("time", a.a.createElement(O.d, {
						seconds: e.createdAtUTC
					}))], {
						hk: "2cUc5m"
					}))), o && a.a.createElement("div", {
						className: I.a.onHoverActionText
					}, a.a.createElement("span", null, o)))
				}
			}
			var U = Object(i.b)(A)(B),
				W = n("./src/reddit/helpers/trackers/postCollection.ts"),
				z = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				G = n.n(z);
			const H = `${o.a.assetPath}/img/snoo-drafts.png`,
				V = w.a.div("TopRow", G.a),
				K = w.a.div("TitleRow", G.a),
				q = w.a.div("DetailsContainer", G.a),
				J = w.a.wrapped(E.a, "ButtonRow", G.a),
				Z = w.a.div("CloseWrapper", G.a),
				Q = w.a.wrapped(f.a, "Close", G.a),
				Y = w.a.div("Empty", G.a),
				X = w.a.img("EmptyImage", G.a),
				$ = w.a.p("EmptyText", G.a),
				ee = w.a.div("FilterWrapper", G.a),
				te = w.a.wrapped(b.a, "FilterInput", G.a),
				ne = w.a.wrapped(C.a, "SearchIcon", G.a),
				oe = w.a.wrapped(g.a, "PlusIcon", G.a),
				se = w.a.wrapped(h.p, "CreateCollectionButton", G.a),
				re = Object(d.a)((e, t) => {
					const n = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(n))
				}),
				ae = Object(c.c)({
					collections: _.v
				}),
				ie = Object(i.b)(ae, (e, {
					postId: t,
					isOverlay: n
				}) => ({
					onOpenCreateCollectionModal: () => {
						let o = x.b;
						t && (o = Object(x.u)(t, !!n)), e(Object(u.z)(o))
					}
				}));
			class ce extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(W.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === p.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(W.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(W.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => a.a.createElement(U, {
						key: e.id,
						collection: e,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(W.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return a.a.createElement(Y, null, a.a.createElement(X, {
						src: H
					}), a.a.createElement($, null, s.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return a.a.createElement(Y, null, a.a.createElement($, null, s.fbt._("No collection matching filter", null, {
						hk: "2vawdK"
					}), ";"))
				}
				render() {
					const {
						collections: e,
						titleText: t
					} = this.props;
					let n;
					if (0 === e.length) n = this.renderNoCollections();
					else {
						const t = re(e, this.state.filterStr);
						n = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return a.a.createElement("div", {
						className: G.a.wrapper,
						"data-redditstyle": !0
					}, a.a.createElement(V, null, a.a.createElement(K, {
						"data-redditstyle": !0
					}, t || s.fbt._("My collections", null, {
						hk: "3yKovS"
					}), a.a.createElement(Z, {
						onClick: this.close
					}, a.a.createElement(Q, {
						"data-redditstyle": !0
					}))), a.a.createElement(ee, null, a.a.createElement(ne, null), a.a.createElement(te, {
						placeholder: s.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), a.a.createElement(q, null, n), a.a.createElement(J, null, a.a.createElement(se, {
						onClick: this.handleCreateCollectionClicked
					}, a.a.createElement(oe, null), s.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const le = Object(l.a)(ie(Object(m.c)(ce)));
			t.a = le
		},
		"./src/reddit/components/PostCreationForm/ControlRow/AddTournamentPredictionButton/index.m.less": function(e, t, n) {
			e.exports = {
				addTournamentPredictionButton: "_379A0ry8uhFTCCqbGtPG08",
				tooltip: "NKpm2s1DjP3vbRrlx4pxe"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/OCDisclaimer/index.m.less": function(e, t, n) {
			e.exports = {
				DontShowButton: "_1GOEXFnWfJy7WEF43f7RJk",
				dontShowButton: "_1GOEXFnWfJy7WEF43f7RJk",
				Component: "w3m9FyPsy2phDlWxoznhq",
				component: "w3m9FyPsy2phDlWxoznhq"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/PostModifierButton/index.m.less": function(e, t, n) {
			e.exports = {
				PostModifierButton: "_5x1WjCc4HQF6tqnODOql0",
				postModifierButton: "_5x1WjCc4HQF6tqnODOql0",
				active: "HvFw1XKOfl5Jh7Run7iq4",
				HoverTooltip: "zprH8YpG-gVpFuEr-eQJw",
				hoverTooltip: "zprH8YpG-gVpFuEr-eQJw",
				TintOverlay: "stbc2Exoq0W4ZkGltglct",
				tintOverlay: "stbc2Exoq0W4ZkGltglct",
				isDisabled: "_3rEHSruwAvICnPAngYiIW1",
				mShiftTooltipToTheRight: "gceWvjO6tPHW1sEDhwkGK",
				Icon: "_3DWz59jTNPem2lIMybAGb8",
				icon: "_3DWz59jTNPem2lIMybAGb8"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/index.m.less": function(e, t, n) {
			e.exports = {
				FlairComponent: "_2YM79GnDqrRjQQcFtEokkY",
				flairComponent: "_2YM79GnDqrRjQQcFtEokkY",
				FlairTextWrapper: "_1pXTTYLLHHqfgwyMuCqT6T",
				flairTextWrapper: "_1pXTTYLLHHqfgwyMuCqT6T",
				ModifierRow: "_2_rA2mCdhHc1Lr7Ff1ygvH",
				modifierRow: "_2_rA2mCdhHc1Lr7Ff1ygvH",
				AddFlair: "_1LD2Xsr3fioSkWZ13vMORC",
				addFlair: "_1LD2Xsr3fioSkWZ13vMORC",
				Text: "_2iXMeyQ3VxZmKCXkplOvQ_",
				text: "_2iXMeyQ3VxZmKCXkplOvQ_",
				TintOverlay: "_2vWD8kW1_iU4dc3CgY9_gH",
				tintOverlay: "_2vWD8kW1_iU4dc3CgY9_gH",
				FlairIcon: "_2U5dhGN1LkTGmvfDSXp7Pn",
				flairIcon: "_2U5dhGN1LkTGmvfDSXp7Pn",
				StyledCaretIcon: "MZjVSHyz_JYuVJV8JeezH",
				styledCaretIcon: "MZjVSHyz_JYuVJV8JeezH",
				mHasError: "_12W0J-fwDQQ6_tQ9fdpzqG",
				errorMessages: "_29DzChs2ytJ2zOxDSU_YZZ"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/ToggleDestCollectionButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1FASP6jHc95Gr8_JE5NtRM",
				active: "_2cgz1Psg0iRSwK2eF0PY7a"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonLayout: "_1T0P_YQg7fOYLCRoKl_xxO",
				buttonLayout: "_1T0P_YQg7fOYLCRoKl_xxO",
				buttonLayoutStyles: "_1BOItL6vmZFDKOuaOKKJHf",
				SaveDraftButtonLayout: "_2qdAvPbBMsK4TpwNnVe-pj",
				saveDraftButtonLayout: "_2qdAvPbBMsK4TpwNnVe-pj",
				Container: "_1d1--0DMy_jAIxCCoYMo1k",
				container: "_1d1--0DMy_jAIxCCoYMo1k",
				isSubRec: "_10YwpQ5TofUedjLm5Gxek4",
				Divider: "_3DzaxETs3eHqVBAuiSTECq",
				divider: "_3DzaxETs3eHqVBAuiSTECq",
				ButtonsAndErrors: "_2DHDj0dbS1TkKD3fMqSbHy",
				buttonsAndErrors: "_2DHDj0dbS1TkKD3fMqSbHy",
				ButtonRow: "_2RmKGBRP9puAMQITZ7HMaB",
				buttonRow: "_2RmKGBRP9puAMQITZ7HMaB",
				errorMessages: "_2kLLxn1y9vaTeT0OAc-Ikc",
				PostLoadingIcon: "_2QZRXSFrX2qcSjZIV5mRzK",
				postLoadingIcon: "_2QZRXSFrX2qcSjZIV5mRzK",
				DraftLoadingIcon: "_4S5sqoV61IY7tpZqBwoKQ",
				draftLoadingIcon: "_4S5sqoV61IY7tpZqBwoKQ",
				postModifiers: "_2pAQpGYEPAVsPmV5uVmGGU",
				clockIcon: "_1z-5BtMZ_1-gl9JLssX5SJ",
				postScheduleButton: "_2cMg4VsPGSoc_OwPOPRAie",
				postScheduleIcon: "_1ND9PCHVFG_UrSPdlJqv5W",
				removeRightBorderRadius: "_1_Xn_Na9NfUSd_yoc1w2Eb"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3vV_tKesULQ5WMGh38lX4b",
				container: "_3vV_tKesULQ5WMGh38lX4b",
				Content: "_11JSvybbRhcX_cfoagpne_",
				content: "_11JSvybbRhcX_cfoagpne_",
				TitleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				titleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				Details: "_3Uw02TWwSQhLfCJkPsihqr",
				details: "_3Uw02TWwSQhLfCJkPsihqr",
				Footer: "_25MDqXgOCWDBjtAEBi2cmy",
				footer: "_25MDqXgOCWDBjtAEBi2cmy",
				CancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				cancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				CloseWrapper: "_GVnqGyX40oKfgIS56Q-k",
				closeWrapper: "_GVnqGyX40oKfgIS56Q-k",
				CloseIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				closeIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				Label: "_3QPFKpxsmu6j_gbiAuVgfW",
				label: "_3QPFKpxsmu6j_gbiAuVgfW",
				TitleInput: "ZEfw7a99aHsmkl4fx38l5",
				titleInput: "ZEfw7a99aHsmkl4fx38l5",
				AddCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				addCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				PrimaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				primaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				LoadingIcon: "_3cD2qECfUUTwega16qDhBc",
				loadingIcon: "_3cD2qECfUUTwega16qDhBc",
				ErrorText: "GIQ2YnBHQtY1QM1yPEhCR",
				errorText: "GIQ2YnBHQtY1QM1yPEhCR"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/formatApiError/index.ts"),
				d = n("./src/reddit/actions/postCollection/index.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/constants/postCreation.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/index.tsx"),
				b = n("./src/reddit/controls/Input/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				C = n("./src/reddit/icons/svgs/Close/index.tsx"),
				E = n("./src/reddit/layout/row/Inline/index.tsx"),
				x = n("./src/reddit/selectors/postCollection.ts"),
				_ = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				v = n.n(_),
				O = n("./src/lib/lessComponent.tsx");
			const y = O.a.div("Container", v.a),
				k = O.a.div("Content", v.a),
				j = O.a.div("TitleRow", v.a),
				S = O.a.div("Details", v.a),
				T = O.a.wrapped(u.g, "Footer", v.a),
				P = O.a.wrapped(p.o, "CancelButton", v.a),
				I = O.a.div("CloseWrapper", v.a),
				w = O.a.wrapped(C.a, "CloseIcon", v.a),
				N = O.a.label("Label", v.a),
				D = O.a.wrapped(b.a, "TitleInput", v.a),
				M = O.a.wrapped(g.a, "AddCollectionIcon", v.a),
				R = O.a.wrapped(p.l, "PrimaryActionButton", v.a),
				L = O.a.wrapped(f.a, "LoadingIcon", v.a),
				F = O.a.wrapped(h.b, "ErrorText", v.a),
				A = Object(i.c)({
					collection: x.q,
					error: x.c,
					isPending: x.g
				}),
				B = Object(a.b)(A, (e, t) => ({
					onCreate: (t, n) => e(Object(d.b)(t, n)),
					onUpdate: n => e(Object(d.h)(t.collectionId, n))
				}));
			class U extends r.a.PureComponent {
				constructor(e) {
					super(e), this.onTitleChange = e => {
						this.setState({
							collectionTitle: e.target.value
						})
					}, this.onPrimaryButtonClick = async () => {
						const {
							collectionId: e,
							subredditId: t
						} = this.props, {
							collectionTitle: n
						} = this.state;
						if (e) {
							await this.props.onUpdate(n) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(n, t);
							e && this.props.onCollectionCreated && this.props.onCollectionCreated(e)
						}
					}, this.onClose = () => {
						this.props.onCancel()
					};
					const {
						collection: t
					} = e;
					this.state = {
						collectionTitle: t ? t.title : ""
					}
				}
				render() {
					const {
						collectionId: e,
						error: t,
						isPending: n
					} = this.props, s = !e, a = !!this.state.collectionTitle.trim(), i = s ? o.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : o.fbt._("Save", null, {
						hk: "4yMsMq"
					});
					return r.a.createElement(y, null, r.a.createElement(I, {
						onClick: this.props.onCancel
					}, r.a.createElement(w, null)), r.a.createElement(k, null, s && r.a.createElement(r.a.Fragment, null, r.a.createElement(j, null, r.a.createElement(M, null), o.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(S, null, o.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(N, null, s ? o.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : o.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(D, {
						maxLength: m.e,
						onChange: this.onTitleChange,
						placeholder: o.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(T, null, r.a.createElement(E.a, null, r.a.createElement(P, {
						onClick: this.props.onCancel
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(R, {
						onClick: this.onPrimaryButtonClick,
						disabled: n || !a
					}, n ? r.a.createElement(L, {
						sizePx: 10
					}) : i)), t && r.a.createElement(F, null, Object(l.a)(t))))
				}
			}
			t.a = Object(c.a)(B(U))
		},
		"./src/reddit/components/PostCreationForm/CreationControls/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditPicker: "k3D4EVssJ1w-8irx6jW6k",
				subredditPicker: "k3D4EVssJ1w-8irx6jW6k",
				ControlRow: "i0kJNtq5ma1uzbOX9_mM4",
				controlRow: "i0kJNtq5ma1uzbOX9_mM4",
				SubredditRec: "_1tgC4BQSzljd9viPIEvxd3",
				subredditRec: "_1tgC4BQSzljd9viPIEvxd3"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Icon.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2zmE2mxeSGThXfrD20TENk",
				component: "_2zmE2mxeSGThXfrD20TENk"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Placeholder.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3s9TqP-_YHesViWXcd4cMj",
				container: "_3s9TqP-_YHesViWXcd4cMj",
				LeftBlock: "_3ZfLmI01IKam1zqUNiCCY6",
				leftBlock: "_3ZfLmI01IKam1zqUNiCCY6",
				Content: "_3GIbVaHf4QKOhABI3DhSMo",
				content: "_3GIbVaHf4QKOhABI3DhSMo",
				MediaIcon: "_31VuujawtoKX7A_ykq786h",
				mediaIcon: "_31VuujawtoKX7A_ykq786h",
				Title: "_24WZEeSSq6ekrxl4oZMhB3",
				title: "_24WZEeSSq6ekrxl4oZMhB3",
				Secondary: "_1a6BjjqFgWMfDd1GftKY3a",
				secondary: "_1a6BjjqFgWMfDd1GftKY3a"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2mGd4F9ksQ8wRlvFjnL0wz",
				container: "_2mGd4F9ksQ8wRlvFjnL0wz",
				LeftBlock: "_32kTNEqb0vEW5J0BmJdwnn",
				leftBlock: "_32kTNEqb0vEW5J0BmJdwnn",
				Content: "wrG0DeMFlU8RmFoT1gUDM",
				content: "wrG0DeMFlU8RmFoT1gUDM",
				RightBlock: "AnY3sJDM9Z2aUfyXs2Hfl",
				rightBlock: "AnY3sJDM9Z2aUfyXs2Hfl",
				PostTitle: "_25WWHqf4udQb0G9Wa_ar6s",
				postTitle: "_25WWHqf4udQb0G9Wa_ar6s",
				EditingPostTitle: "_3kH-PKnEjv45UIFAwY_XwK",
				editingPostTitle: "_3kH-PKnEjv45UIFAwY_XwK",
				MetaLine: "_1P65-c5DlnBqJL1jOa9TFr",
				metaLine: "_1P65-c5DlnBqJL1jOa9TFr",
				SubredditName: "_2cQKCpCLQTg1gPnnhEqZ6z",
				subredditName: "_2cQKCpCLQTg1gPnnhEqZ6z",
				DraftSavedTime: "Aegaj4-SLZNjFEolptURF",
				draftSavedTime: "Aegaj4-SLZNjFEolptURF",
				TrashIcon: "lWsFaDYxW8Sc4sqVTxVGv",
				trashIcon: "lWsFaDYxW8Sc4sqVTxVGv",
				InteractiveDiv: "_1nhwaUh9TlWeM5H9a_E18l",
				interactiveDiv: "_1nhwaUh9TlWeM5H9a_E18l",
				ConfirmDelete: "_3lIfF-MBpq24PJLxdGfIWQ",
				confirmDelete: "_3lIfF-MBpq24PJLxdGfIWQ"
			}
		},
		"./src/reddit/components/PostCreationForm/DraftListModal/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_29SuZj4Q_M_-p6FwlKJw2V",
				wrapper: "_29SuZj4Q_M_-p6FwlKJw2V",
				TitleRow: "_1t9vurufwtvAZm6k-7T1N0",
				titleRow: "_1t9vurufwtvAZm6k-7T1N0",
				DraftsNumber: "VA7GC_5VP6Yx4VSLaCW7T",
				draftsNumber: "VA7GC_5VP6Yx4VSLaCW7T",
				DetailsContainer: "_2ffvzlYi6yd1I-j5ndDKFm",
				detailsContainer: "_2ffvzlYi6yd1I-j5ndDKFm",
				ButtonRow: "_3JS6XDYnB0zNhQRfV4rLl0",
				buttonRow: "_3JS6XDYnB0zNhQRfV4rLl0",
				CancelButton: "_2AHvxdRmdK6Dve6_MNs6YW",
				cancelButton: "_2AHvxdRmdK6Dve6_MNs6YW",
				CloseWrapper: "_2put2qtgUIjmVIlQlZxeTb",
				closeWrapper: "_2put2qtgUIjmVIlQlZxeTb",
				Close: "_1Ojj3n0SwnEevN0xKAhtFi",
				close: "_1Ojj3n0SwnEevN0xKAhtFi",
				Empty: "_3j6Qa8OS7J6clTSNxqrADq",
				empty: "_3j6Qa8OS7J6clTSNxqrADq",
				EmptyImage: "_13SmMRVwMLfOrhzEqQQXrJ",
				emptyImage: "_13SmMRVwMLfOrhzEqQQXrJ",
				EmptyText: "_2OF81CBhfbV9gjOU-5n9Dr",
				emptyText: "_2OF81CBhfbV9gjOU-5n9Dr",
				DraftListModal: "_2bMp7e8oHvukp1hKtlg1r-",
				draftListModal: "_2bMp7e8oHvukp1hKtlg1r-"
			}
		},
		"./src/reddit/components/PostCreationForm/EduTooltips/BaseEduTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1LVDV1pks4den73WWY46GI",
				contentContainer: "_3v3OHx0_DIBm8WcTKrQ_Vj",
				description: "_1ZyYR40qdR1KVaYW3JJnFF",
				gotIt: "_31UHkJmzR05A-oHijI9dsj",
				hero: "_3KJU9tTmfe-f0PGdg1hJ6O",
				icon: "_1TqYQFIF_2oaFDavvx7TEE",
				iconExplanation: "_2gaQgwvoc2dROc2Uramfat",
				iconsExplanations: "_1IKgmmXb6LA2blrkyfqnxx",
				title: "_1ZeryymPzBgAm7zK9oPs3l",
				Container: "_1LVDV1pks4den73WWY46GI",
				OuterContainer: "_3cH-rE_yhLIp3GscF-WShj",
				outerContainer: "_3cH-rE_yhLIp3GscF-WShj"
			}
		},
		"./src/reddit/components/PostCreationForm/EduTooltips/CollectionButtonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3zSOhojke1hMymIth30Ue"
			}
		},
		"./src/reddit/components/PostCreationForm/LinkEditor/index.m.less": function(e, t, n) {
			e.exports = {
				URLInput: "_3zY6b4QJpSz1067ahq73_K",
				urlInput: "_3zY6b4QJpSz1067ahq73_K",
				mHasError: "_1WipnslOO1oVfOEMxsrYU3"
			}
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "dyBWJSV5slC_6_q-avEAz",
				loadingIcon: "dyBWJSV5slC_6_q-avEAz",
				ModeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				modeDescription: "_2wjlEqW6Mz7pFfwBHVpPEA",
				ModeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				modeWrapper: "_2IWlVWhYLpVswet-ElQ9xx",
				SwitchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				switchModeButton: "_2POD_tWc9UVvI3zBwPH9Yu",
				MarkdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				markdownHelpButton: "oqXBQCZarmL4V15c4Izxm",
				Toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa",
				toolbar: "_1HVLi6b9dq2O2gkgGAO1Fa"
			}
		},
		"./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/postCreation/general.ts"),
				l = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				d = n("./src/reddit/components/FocusableContent/index.tsx"),
				u = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				p = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				h = n("./src/reddit/constants/keycodes.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				E = n("./src/reddit/selectors/editorContent.ts"),
				x = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				_ = n.n(x),
				v = n("./src/lib/lessComponent.tsx");
			const O = v.a.wrapped(f.a, "LoadingIcon", _.a),
				y = ({
					isFilled: e,
					...t
				}) => r.a.createElement(O, t),
				k = v.a.span("ModeDescription", _.a),
				j = v.a.div("ModeWrapper", _.a),
				S = v.a.wrapped(l.a, "MarkdownHelpButton", _.a),
				T = v.a.div("Toolbar", _.a),
				P = Object(i.c)({
					activeModalId: C.a,
					isConverting: e => Object(E.a)(e)
				}),
				I = Object(a.b)(P, (e, t) => ({
					onChange: n => {
						e(Object(c.c)(n)), t.onChange && t.onChange(n)
					},
					helpModalToggled: () => e(Object(c.z)(u.b)),
					switchToRTEModalToggled: () => e(Object(c.z)(m.a.SWITCH_TO_RTE_MODAL_ID))
				}));
			class w extends r.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.onChange = e => {
						const {
							value: t
						} = e.currentTarget;
						this.props.onChange(t)
					}, this.onBlur = () => {
						this.setState({
							isFocused: !1
						}), this.props.onBlur && this.props.onBlur()
					}, this.onFocus = () => {
						const {
							onFocus: e
						} = this.props;
						e && e(), this.setState({
							isFocused: !0
						})
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === h.a.Enter && this.props.onSubmit()
					}, this.handleSwitchModeClick = () => {
						this.props.value ? this.props.switchToRTEModalToggled() : this.props.onSwitchEditorMode(g.i.RICH_TEXT, this.props.value)
					}, this.handleSwitchToRTEConfirm = () => {
						this.props.switchToRTEModalToggled(), this.props.onSwitchEditorMode(g.i.RICH_TEXT, this.props.value)
					}, this.setTextAreaRef = e => this.textAreaRef = e, this.state = {
						isFocused: !1
					}
				}
				componentDidMount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(this)
				}
				componentWillUnmount() {
					const {
						instanceRef: e
					} = this.props;
					e && e(null)
				}
				focus() {
					this.textAreaRef && this.textAreaRef.focus()
				}
				render() {
					const {
						className: e,
						isConverting: t,
						placeholderText: n,
						focusableContentMarkdownClassName: s,
						value: a
					} = this.props, {
						isFocused: i
					} = this.state;
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement(d.a, {
						className: s,
						isFocused: i
					}, r.a.createElement(T, null, r.a.createElement(j, null, r.a.createElement(k, null, o.fbt._("Markdown", null, {
						hk: "42KuwU"
					})), r.a.createElement(S, {
						onClick: this.props.helpModalToggled
					})), r.a.createElement(N, {
						isConverting: t,
						onClick: this.handleSwitchModeClick
					})), r.a.createElement(p.a, {
						disabled: !!this.props.disabled,
						initialHeight: this.props.initialHeight,
						innerRef: this.setTextAreaRef,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: n,
						value: a
					})), this.props.activeModalId === u.b && r.a.createElement(u.a, {
						withOverlay: !0
					}), this.props.activeModalId === m.a.SWITCH_TO_RTE_MODAL_ID && r.a.createElement(m.b, {
						modalId: m.a.SWITCH_TO_RTE_MODAL_ID,
						onCancel: this.props.switchToRTEModalToggled,
						onConfirm: this.handleSwitchToRTEConfirm
					}))
				}
			}
			const N = r.a.memo(({
				isConverting: e,
				onClick: t
			}) => {
				const n = o.fbt._("Switch to Fancy Pants Editor", null, {
					hk: "1AKY7t"
				});
				return r.a.createElement(b.t, {
					priority: b.c.Plain,
					size: b.d.XS,
					onClick: t,
					Icon: e ? y : void 0,
					text: n
				})
			});
			t.a = I(w)
		},
		"./src/reddit/components/PostCreationForm/MediaInput/DropArea/index.m.less": function(e, t, n) {
			e.exports = {
				HiddenInput: "sU2P34us34ODfjtvAFHEh",
				hiddenInput: "sU2P34us34ODfjtvAFHEh",
				UploadButton: "_3O09Fh0CTb1KXH9g--pyTm",
				uploadButton: "_3O09Fh0CTb1KXH9g--pyTm",
				HamsterSmall: "_2O_N8Ef-BG5Cfd4rpYn2gC",
				hamsterSmall: "_2O_N8Ef-BG5Cfd4rpYn2gC",
				HamsterLarge: "wV8IXIxvKm8PPZrR4ID63",
				hamsterLarge: "wV8IXIxvKm8PPZrR4ID63",
				Container: "_1Ts5GUNze2r03Hs4YNM7R7",
				container: "_1Ts5GUNze2r03Hs4YNM7R7",
				DropArea: "_1U5lLS9mQzBY-ItvbtGGLz",
				dropArea: "_1U5lLS9mQzBY-ItvbtGGLz",
				DropAreaActive: "_3dk8Anard_IzanCLoEOxwY",
				dropAreaActive: "_3dk8Anard_IzanCLoEOxwY",
				DropAreaOver: "_2u00X-QMmF0nCuc0JgGiPG",
				dropAreaOver: "_2u00X-QMmF0nCuc0JgGiPG",
				Paragraph: "_23Ktfv_B7IB6GfAwZ1n5KM",
				paragraph: "_23Ktfv_B7IB6GfAwZ1n5KM",
				ErrorMsg: "_1g07w9noInEjzrHqFqXu7p",
				errorMsg: "_1g07w9noInEjzrHqFqXu7p",
				Box: "_2bMJxWQqwzcVG4QCyh3UhG",
				box: "_2bMJxWQqwzcVG4QCyh3UhG"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/MultipleUploadStatusBar/index.m.less": function(e, t, n) {
			e.exports = {
				ControlRow: "XAYmQCRZd6pa1gK4J2Irv",
				controlRow: "XAYmQCRZd6pa1gK4J2Irv",
				OuterDivProgressBar: "_3lnXFUS1rk-i2bmQ9tBVAg",
				outerDivProgressBar: "_3lnXFUS1rk-i2bmQ9tBVAg",
				ProgressBar: "_2h9OzlkpNau2hE61muUCcM",
				progressBar: "_2h9OzlkpNau2hE61muUCcM",
				Status: "_2QlfNrUATpUf8fxWF3xLUc",
				status: "_2QlfNrUATpUf8fxWF3xLUc"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/AddImageItem.m.less": function(e, t, n) {
			e.exports = {
				AddImageWrapper: "_3mOObaE2qUuGBwPZt06QMP",
				addImageWrapper: "_3mOObaE2qUuGBwPZt06QMP",
				AddImageItem: "_1PHeBCrOhYxisqmUW-NOTZ",
				addImageItem: "_1PHeBCrOhYxisqmUW-NOTZ",
				plusIcon: "_3fjztH0o3WW8ugsD8VUpdG",
				hiddenInput: "_8GGSjoMJRi3bIAaFgk5VT"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItem.m.less": function(e, t, n) {
			e.exports = {
				GalleryMediaUpload: "_3cm8_J6ytCvL4Z0YkUO6fO",
				galleryMediaUpload: "_3cm8_J6ytCvL4Z0YkUO6fO",
				isDragging: "_1hQY_UY2EioccXnSHJuH2j",
				isSelected: "_3mV402dYSBG5F3rfKzCHih",
				isError: "_10Cb6hifpOfnmfdg7Zetit",
				galleryImage: "-_ofbVTDK5uSQ60HcXH2-",
				deleteButton: "_3611iw8TKLU1FFCTSMHMWl",
				deleteIcon: "_1RI3AZPuym8dOTJt-TRI38",
				showDeleteNormal: "_2LKMLYT_7bo_5rfh9705Pg"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItemsWrapper.m.less": function(e, t, n) {
			e.exports = {
				itemsWrapper: "_3BGk3QOycswdTTmIh9R56y",
				sortableImages: "_7eeHxLESKnWVh8uefc7iN",
				imageStyles: "_2175QbehBw28eJRKOGrVKp",
				hoverMarker: "_1q50A238Zq0unVV8sFYvEm",
				pendingItem: "_1liymuUZSLP_05fSC0_0iQ"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/InputWrapper.m.less": function(e, t, n) {
			e.exports = {
				inputWrapper: "_1ZgKdgcmpiQuMxVOb36gpi",
				inputStyles: "_3QhJ8Am-icOjVUrut4LpNH",
				urlInputStyles: "_2P6NoGE4s1hTODn5PMPuIh",
				charsCounter: "_18XDqj2Sr9Pi7101fkIdE3"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/Layout.m.less": function(e, t, n) {
			e.exports = {
				Layout: "_3uExMaQ9CE8L0F97PE7ESO",
				layout: "_3uExMaQ9CE8L0F97PE7ESO",
				hero: "_3cjkwfQbHf5cGuN_2K1uvN",
				mainContent: "D_D1mksZjLSJKHZf-qFgh",
				sideMetaContent: "_3s8GQtCSn-VS8biCUpM7QQ",
				bottomContent: "_1ipt9uyZjJ4fiF29YsWqgy"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/SelectedImage.m.less": function(e, t, n) {
			e.exports = {
				selectedImage: "_1HQ9Q4NlQY-2w_yLQXa4MW",
				pendingImage: "_16rNFI0ovowGxjX85OoDQ7"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}));
			const o = 20,
				s = 180
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/index.m.less": function(e, t, n) {
			e.exports = {
				dropArea: "_37BTO6li-OWodKOMQsps09",
				isDropAreaActive: "OPoLiV8gJNj-kgaS3TA6s",
				isDropAreaOver: "_2dpUJvIRjH1lQlhWr9Ln7B",
				errorMessage: "_1geBZyOTOcY8e2hp9dLJBb"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/Preview/index.m.less": function(e, t, n) {
			e.exports = {
				Img: "_2CZpGuT-0gMB2CW-1Z4Rzr",
				img: "_2CZpGuT-0gMB2CW-1Z4Rzr",
				BlurImg: "_3lXopXY4SQ5xn1DGFU-6mv",
				blurImg: "_3lXopXY4SQ5xn1DGFU-6mv",
				ImagePreview: "_1x86R_C1SXWhk5Ta6ZwgCE",
				imagePreview: "_1x86R_C1SXWhk5Ta6ZwgCE",
				VideoPreview: "_1qFo28RpDjnwvvZFYuoYw1",
				videoPreview: "_1qFo28RpDjnwvvZFYuoYw1",
				Component: "_32O_ZBzCA0KWydc-ydD4Ut",
				component: "_32O_ZBzCA0KWydc-ydD4Ut"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/UploadStatusBar/index.m.less": function(e, t, n) {
			e.exports = {
				ControlRow: "_2UeBgPJSAh_VteJrmt29jr",
				controlRow: "_2UeBgPJSAh_VteJrmt29jr",
				Button: "mU3hHnDkWt1Fu4t0MzJ3D",
				button: "mU3hHnDkWt1Fu4t0MzJ3D",
				Status: "_2tgT4LseX3Xg9TNczoQt_8",
				status: "_2tgT4LseX3Xg9TNczoQt_8",
				Component: "_1ou_efVZQLBrztRrswvRdK",
				component: "_1ou_efVZQLBrztRrswvRdK"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_2WJ7xvGE_xrehqTKCrcVpN",
				wrapper: "_2WJ7xvGE_xrehqTKCrcVpN",
				UploadStatusBar: "_1cAEFWtInMytYP6NpKBxK7",
				uploadStatusBar: "_1cAEFWtInMytYP6NpKBxK7",
				Controls: "_2Hg3aAL1qjiKtlSICSWx59",
				controls: "_2Hg3aAL1qjiKtlSICSWx59",
				ThumbnailSelect: "_3Beo1Ag8mmirgP8ObHTty9",
				thumbnailSelect: "_3Beo1Ag8mmirgP8ObHTty9",
				Trash: "_18Z2AbfCvCglpgZoyExSaS",
				trash: "_18Z2AbfCvCglpgZoyExSaS"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/RemovePrompt/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "RbI4r-xLIZTGjyNNqMkc2",
				wrapper: "RbI4r-xLIZTGjyNNqMkc2",
				TitleRow: "_3KkK2UFvbWMkRb887z28Ay",
				titleRow: "_3KkK2UFvbWMkRb887z28Ay",
				DetailsContainer: "_3x1u7rU-TVemMtzZVifQk",
				detailsContainer: "_3x1u7rU-TVemMtzZVifQk",
				ButtonRow: "_1rR3d9OXZt1cL70vCFunZP",
				buttonRow: "_1rR3d9OXZt1cL70vCFunZP",
				CancelButton: "_2JpoeseNULOIs1m0HM_FkJ",
				cancelButton: "_2JpoeseNULOIs1m0HM_FkJ",
				ConfirmButton: "_1-56PBUj1A-mgJh4Uhz5Jd",
				confirmButton: "_1-56PBUj1A-mgJh4Uhz5Jd"
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1UbcPNs4A8n5PIWX0H5sGt",
				container: "_1UbcPNs4A8n5PIWX0H5sGt"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/Hint/index.m.less": function(e, t, n) {
			e.exports = {
				Info: "_2kALbPZ2PwY7w-w3Mtrxpl",
				info: "_2kALbPZ2PwY7w-w3Mtrxpl",
				TooltipContent: "c_vthvCq93OKrS5BGZYdr",
				tooltipContent: "c_vthvCq93OKrS5BGZYdr",
				Hint: "_2yxSY9022XfAJtQVxxa1lL",
				hint: "_2yxSY9022XfAJtQVxxa1lL",
				HoverTooltip: "_3M5yvX2tFyuTet4AEPmVDL",
				hoverTooltip: "_3M5yvX2tFyuTet4AEPmVDL",
				tooltipContentClass: "_2AY8LM9XpfuTjCMB4PF1mj"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxInput: "rLLDF6zuY7gDPdOpDtryW",
				checkboxInput: "rLLDF6zuY7gDPdOpDtryW",
				ConnectAccountLink: "_2XixtsvkuzAkwuKe93t7Bd",
				connectAccountLink: "_2XixtsvkuzAkwuKe93t7Bd",
				Container: "_1WZBFo38dOAZ_-qyyA6sNh",
				container: "_1WZBFo38dOAZ_-qyyA6sNh",
				ContainerLeft: "ncWlnJtypP1_Mwohv06zd",
				containerLeft: "ncWlnJtypP1_Mwohv06zd",
				ContainerRight: "_1rdhEwGT1578MFV4zdgyXX",
				containerRight: "_1rdhEwGT1578MFV4zdgyXX",
				CheckboxText: "_1sBmqB8geWKIW5Nt8svFgc",
				checkboxText: "_1sBmqB8geWKIW5Nt8svFgc",
				Option: "_367d1mrPAvSzXPXQZfPXq5",
				option: "_367d1mrPAvSzXPXQZfPXq5",
				TextButton: "_5SJ8wEtj0ehde_UTuEUJL",
				textButton: "_5SJ8wEtj0ehde_UTuEUJL",
				TextBox: "_1TBGkOAQIuFnbqFv3ePDxT",
				textBox: "_1TBGkOAQIuFnbqFv3ePDxT",
				Wrapper: "_2CXYv7vwpCTLV6wKUwqkBz",
				wrapper: "_2CXYv7vwpCTLV6wKUwqkBz"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/ScheduledTimeInfo/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3iy2yiZt_m40oq7tdW_klw",
				container: "_3iy2yiZt_m40oq7tdW_klw",
				replayIcon: "_2ks2fE4UUmcEWL1vQnR7wp"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_22Te0a5VxZnLITkTavQh95",
				container: "_22Te0a5VxZnLITkTavQh95"
			}
		},
		"./src/reddit/components/PostCreationForm/PostCreationHeader/index.m.less": function(e, t, n) {
			e.exports = {
				CreateLabel: "_3M6BmdyQcCEQZu-MylN14",
				createLabel: "_3M6BmdyQcCEQZu-MylN14",
				CountIndicator: "_3-lCASba1yl0jeRpeQ5jwm",
				countIndicator: "_3-lCASba1yl0jeRpeQ5jwm",
				LinkButton: "_3KQDVc4kBIwA5u7S9n99NQ",
				linkButton: "_3KQDVc4kBIwA5u7S9n99NQ",
				CreatePostHeader: "_1HWpiNu6dkOnZixxwDYTVJ",
				createPostHeader: "_1HWpiNu6dkOnZixxwDYTVJ",
				isSubredditRec: "_3VA7_aIOtAXL0OdVGez50V"
			}
		},
		"./src/reddit/components/PostCreationForm/PostEditor/GovTypeSelector/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1kR_hX_PP5udhk-mtPuavx",
				currentSelection: "_1ZxmKr4SrkV__KWvI2gxKt",
				flexRow: "wIleinjtpdijasCWI_jCU",
				dropdownIcon: "oK9t9SNnOOCu-BraimNJE",
				newLabel: "_1pi_9nWsspppnkpr0Km1Hl",
				pollTypeIcon: "_1ZEeQaLhgbqgxX5zvvM2OO",
				text: "_3BIAW_hHKHgVyTnhczBT4A"
			}
		},
		"./src/reddit/components/PostCreationForm/PostEditor/index.m.less": function(e, t, n) {
			e.exports = {
				focusableContent: "Mb0x12Cu8JKRJRJCcf9_K",
				mPollBorder: "_3tqYz5xeUZo9em1LrxMZOB",
				mHasError: "_24RennTZzi_jyZ_kdBt9U2",
				govToggle: "_2VmXXwMxyQk230gkKvJTzF",
				pollCreator: "_3GqK73QyFc10CoXE2bReko"
			}
		},
		"./src/reddit/components/PostCreationForm/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3zkbHfhLbXp21FwGj_kNZV",
				inputWrapper: "_2wyvfFW3oNcCs5GVkmcJ8z",
				PostTitleInput: "_1ec_Oj5SWdypd8L-VELKg-",
				postTitleInput: "_1ec_Oj5SWdypd8L-VELKg-",
				mHasError: "_1dItJbdjTchVLwC0krCsr3",
				charsCounter: "_10vnCUi_uRLhIdKnPglWAw"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/CharacterLimitedInput/index.m.less": function(e, t, n) {
			e.exports = {
				limitedInput: "_2lR5ZrJPEFuuPq7EOi8cj7",
				wrapper: "_2fRQQgargigjS49U0fxbS3",
				charLimit: "_2wwZJZk5ONMWVwbLF02eUq"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/ThemePicker/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_3UZKVVhHWZ57zSILZs7Jvg",
				colorTile: "_1qWXr3giJbgydoIYnzWu1S"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/TokenPicker/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3c1LCTTrv7B_tSR1sfPKj6",
				customTokenContainer: "_2SDDNzFC4L5DwfyT-wvomA",
				clearTokenButton: "uKhV3nnZaif1b1RUqut47",
				clearTokenIcon: "_1JT85JqFxloG7O5BY1ykp",
				tokenButton: "_11AqxmNlBzS51cSszKCcTj",
				selected: "_3Izz7RWkEuIrfl7tUxaPyt",
				tokenIcon: "_3Mpps5wbxkuTPgwFQKbVgf",
				addTokenIcon: "RcsGY3keMhNY8RdcN8Dmw"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/TooltipHeader/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "vjz-78t1MZNL0Yxpv_u6-",
				sectionLabel: "_2T3KnyI6uKFuDKS_c-XJ1k",
				isDisabled: "_346ckAnpRr-IOKWKMNKKFl",
				content: "_2YhlH2p0vnG0YKM3OJnSz8",
				helpIcon: "_1Hia7ATY_tYOEVwill2fvR",
				activeHelpIcon: "_3o1eq5SajxFPm93nUE3I4B"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/TournamentCreation/TournamentBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2FP6mPcw7L3zJOqTqLCnFi",
				label: "_2arfpEJo0GuubbTt3e8on8",
				icon: "_298481W3NrEzQxugVTYuu7",
				tournamentName: "_2c4dzGEuqzkxFjwEBDTgom"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/TournamentCreation/index.m.less": function(e, t, n) {
			e.exports = {
				firstHeader: "i-5upYMuz3__dAhqnV3c",
				learnMoreText: "_1jGtkFrbQODOeAHdDuFzU_",
				learnMoreLink: "_1EWLkW2DjJNMbp5JzYXENj",
				modal: "_35kF49LuGE4D27xekKfxE3",
				modalWrapper: "_3xBSiPU1AtljhBN4dxtqdt",
				closeButton: "z2Rf-Ta-kq8BA8J-ARDCm"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = n.n(m),
				h = n("./src/lib/lessComponent.tsx");
			const b = h.a.wrapped(c.l, "PrimaryButton", p.a),
				f = h.a.wrapped(a.p, "ModalText", p.a);
			class g extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === i.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						primaryButtonLoading: e,
						secondaryButtonLoading: t
					} = this.props;
					return s.a.createElement(a.e, null, s.a.createElement(a.i, null, s.a.createElement(u.a, null, s.a.createElement(a.q, null, this.props.titleText), s.a.createElement(d.a, {
						onClick: this.props.onClose
					}, s.a.createElement(a.b, null)))), s.a.createElement(a.l, null, s.a.createElement(f, null, this.props.bodyText)), s.a.createElement(a.g, null, s.a.createElement(a.a, {
						onClick: this.props.onSecondaryAction
					}, t ? s.a.createElement(l.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), s.a.createElement(b, {
						onClick: this.props.onPrimaryAction
					}, e ? s.a.createElement(l.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(r.a)(g)
		},
		"./src/reddit/components/PostCreationForm/Prompt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			! function(e) {
				e.LOAD_DRAFT_MODAL_ID = "POST_CREATION__LOAD_DRAFT_MODAL_ID", e.MAX_DRAFTS_MODAL_ID = "POST_CREATION__MAX_DRAFTS_MODAL_ID", e.SWITCH_TO_RTE_MODAL_ID = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID"
			}(o || (o = {}));
			const c = {
					title: () => s.fbt._("Load draft", null, {
						hk: "VQ7SS"
					}),
					body: () => s.fbt._("Loading this draft will discard your current post.", null, {
						hk: "49vMci"
					}),
					confirm: () => s.fbt._("Load Draft", null, {
						hk: "29mFSs"
					}),
					cancel: () => s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				l = {
					title: () => s.fbt._("Save draft", null, {
						hk: "36SGct"
					}),
					body: () => s.fbt._("Looks like you’ve hit your max number of drafts. Please delete one to make room.", null, {
						hk: "4g9gOF"
					}),
					confirm: () => s.fbt._("Manage Drafts", null, {
						hk: "3a6SXJ"
					}),
					cancel: () => s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				d = {
					title: () => s.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "22mr8J"
					}),
					body: () => s.fbt._("Switching to Fancy Pants Editor may result in a loss of content", null, {
						hk: "1cWryd"
					}),
					confirm: () => s.fbt._("Switch", null, {
						hk: "36pRzE"
					}),
					cancel: () => s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})
				},
				u = {
					[o.LOAD_DRAFT_MODAL_ID]: c,
					[o.MAX_DRAFTS_MODAL_ID]: l,
					[o.SWITCH_TO_RTE_MODAL_ID]: d
				};
			class m extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onCancel = () => {
						this.props.onCancel(this.props.modalId)
					}, this.onConfirm = () => {
						this.props.onConfirm(this.props.modalId)
					}
				}
				render() {
					const {
						modalId: e
					} = this.props, t = u[e];
					return a.a.createElement(i.a, {
						bodyText: t.body(),
						secondaryButtonText: t.cancel(),
						primaryButtonText: t.confirm(),
						titleText: t.title(),
						onClose: this.onCancel,
						onPrimaryAction: this.onConfirm,
						onSecondaryAction: this.onCancel
					})
				}
			}
			t.b = m
		},
		"./src/reddit/components/PostCreationForm/RecaptchaOverlay/index.m.less": function(e, t, n) {
			e.exports = {
				OverlayWrapper: "_36HnnNoO8oBJDJnOgDiENG",
				overlayWrapper: "_36HnnNoO8oBJDJnOgDiENG",
				OverlayContent: "_3Ye_87oAzGPJr-7DymIhl0",
				overlayContent: "_3Ye_87oAzGPJr-7DymIhl0",
				ExplanationText: "_17qYQd3F9TbaKxu_Q0ssNq",
				explanationText: "_17qYQd3F9TbaKxu_Q0ssNq"
			}
		},
		"./src/reddit/components/PostCreationForm/SafeHarborText/index.m.less": function(e, t, n) {
			e.exports = {
				TextContainer: "_3sXblbCnnsbtHR0izSxX-Q",
				textContainer: "_3sXblbCnnsbtHR0izSxX-Q"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3A53iTDZ6H1L--Ky3qNCTO",
				container: "_3A53iTDZ6H1L--Ky3qNCTO",
				Select: "_2ryUqzbCnNhx8nbFXg9-c0",
				select: "_2ryUqzbCnNhx8nbFXg9-c0",
				Delimiter: "_1X2oFpzvpth9SVe2-xCR9D",
				delimiter: "_1X2oFpzvpth9SVe2-xCR9D"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less": function(e, t, n) {
			e.exports = {
				Input: "_1Css-vhkiry0RZJBBPrnRI",
				input: "_1Css-vhkiry0RZJBBPrnRI"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/lodash/range.js"),
				c = n.n(i),
				l = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less"),
				d = n.n(l),
				u = n("./src/lib/lessComponent.tsx");
			const m = u.a.div("Container", d.a),
				p = u.a.select("Select", d.a),
				h = u.a.span("Delimiter", d.a),
				b = 2018,
				f = e => {
					const t = new Date;
					return new Date(t.getFullYear(), e).toLocaleDateString([], {
						month: "short"
					})
				},
				g = e => {
					const [t, n, o] = e.split("-").map(Number);
					return {
						year: t,
						month: n - 1,
						day: o
					}
				};
			class C extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = {
								...g(this.props.value),
								...e
							},
							{
								year: n,
								month: o,
								day: s
							} = t,
							r = new Date(Date.UTC(n, o, s)).toISOString().slice(0, 10);
						this.props.onChange(r)
					}, this.onChangeYear = e => {
						const t = +e.target.value;
						this.onChange({
							year: t
						})
					}, this.onChangeMonth = e => {
						const t = +e.target.value;
						this.onChange({
							month: t
						})
					}, this.onChangeDay = e => {
						const t = +e.target.value;
						this.onChange({
							day: t
						})
					}
				}
				render() {
					const {
						year: e,
						month: t,
						day: n
					} = g(this.props.value);
					return a.a.createElement(m, {
						className: this.props.className
					}, a.a.createElement(p, {
						onChange: this.onChangeMonth,
						value: t
					}, c()(12).map(e => a.a.createElement("option", {
						key: e,
						value: e
					}, f(e)))), a.a.createElement(h, null, "/"), a.a.createElement(p, {
						onChange: this.onChangeDay,
						value: n
					}, c()(1, 32).map(e => a.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), a.a.createElement(h, null, "/"), a.a.createElement(p, {
						onChange: this.onChangeYear,
						value: e
					}, c()(b, b + 10).map(e => a.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var E = C,
				x = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				_ = n.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				y = u.a.input("Input", _.a);

			function k(e) {
				return O() ? a.a.createElement(y, v({
					type: "date"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : a.a.createElement(E, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "Q-u1MdpyF-DbsLmmseQmg",
				container: "Q-u1MdpyF-DbsLmmseQmg",
				Input: "_2UYlo-ZbVNGY329O9jwCzC",
				input: "_2UYlo-ZbVNGY329O9jwCzC",
				Delimiter: "_2a_r5Jp8FH3k8flNGKLy5f",
				delimiter: "_2a_r5Jp8FH3k8flNGKLy5f"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less": function(e, t, n) {
			e.exports = {
				TimeInput: "gRgwdQKTQf9yT3db3ACAy",
				timeInput: "gRgwdQKTQf9yT3db3ACAy"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/lodash/clamp.js"),
				c = n.n(i),
				l = n("./src/reddit/components/FocusableContent/index.tsx"),
				d = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less"),
				u = n.n(d),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(l.a, "Container", u.a),
				h = m.a.input("Input", u.a),
				b = m.a.span("Delimiter", u.a),
				f = e => ("0" + e).slice(-2),
				g = (e, t) => {
					const n = +e.slice(-2);
					if (Number.isInteger(n)) return n > t ? 0 : n
				};
			class C extends a.a.PureComponent {
				constructor(e) {
					super(e), this.callOnChange = () => {
						let e = c()(+this.state.hour, 0, 24);
						const t = c()(+this.state.minute, 0, 59);
						24 === e && t > 0 && (e = 0), this.setState({
							hour: e,
							minute: t
						});
						const n = `${f(e)}:${f(t)}`;
						this.props.onChange(n)
					}, this.onChangeHour = e => {
						const t = g(e.target.value, 24);
						void 0 !== t && this.setState({
							hour: t
						}, this.callOnChange)
					}, this.onChangeMinute = e => {
						const t = g(e.target.value, 59);
						void 0 !== t && this.setState({
							minute: t
						}, this.callOnChange)
					}, this.onHourInputBlur = () => this.setState({
						isHourInputFocused: !1
					}), this.onHourInputFocus = () => this.setState({
						isHourInputFocused: !0
					}), this.onMinuteInputBlur = () => this.setState({
						isMinuteInputFocused: !1
					}), this.onMinuteInputFocus = () => this.setState({
						isMinuteInputFocused: !0
					});
					const [t, n] = e.value.split(":").map(Number);
					this.state = {
						hour: t,
						minute: n,
						isHourInputFocused: !1,
						isMinuteInputFocused: !1
					}
				}
				componentWillReceiveProps(e) {
					const [t, n] = e.value.split(":").map(Number);
					this.setState({
						hour: t,
						minute: n
					})
				}
				render() {
					const e = this.state.isHourInputFocused || this.state.isMinuteInputFocused;
					return a.a.createElement(p, {
						className: this.props.className,
						isFocused: e
					}, a.a.createElement(h, {
						type: "number",
						onChange: this.onChangeHour,
						onFocus: this.onHourInputFocus,
						onBlur: this.onHourInputBlur,
						value: f(this.state.hour)
					}), a.a.createElement(b, null, ":"), a.a.createElement(h, {
						type: "number",
						onChange: this.onChangeMinute,
						onFocus: this.onMinuteInputFocus,
						onBlur: this.onMinuteInputBlur,
						value: f(this.state.minute)
					}))
				}
			}
			var E = C,
				x = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				_ = n.n(x);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				y = m.a.input("TimeInput", _.a);

			function k(e) {
				return O() ? a.a.createElement(y, v({
					type: "time"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : a.a.createElement(E, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less": function(e, t, n) {
			e.exports = {
				select: "_1gQeiuYndtyKo6Or5iS8xL"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				c = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less"),
				l = n.n(c);
			const d = e => {
				const t = e.map(i.d);
				return t.sort((e, t) => {
					const n = -1440,
						{
							offset: o = n
						} = e,
						{
							offset: s = n
						} = t;
					return s - o || (e.displayText < t.displayText ? -1 : 1) || 0
				}), t
			};
			class u extends s.a.PureComponent {
				constructor(e) {
					super(e), this.onSelect = e => {
						const t = e.target.value;
						this.props.onChange(t)
					};
					const t = u.cachedTimezoneOptions || d([this.props.selectedTimezoneName]);
					this.state = {
						timezoneOptions: t
					}
				}
				async loadTimezones() {
					const e = (await Object(a.a)(() => n.e("TimezoneList").then(n.bind(null, "./src/lib/timezone/timezoneList.ts")))).default,
						t = d(e);
					this.setState({
						timezoneOptions: t
					}), u.cachedTimezoneOptions = t
				}
				componentDidMount() {
					u.cachedTimezoneOptions || this.loadTimezones()
				}
				render() {
					return s.a.createElement("select", {
						onChange: this.onSelect,
						value: this.props.selectedTimezoneName,
						className: Object(r.a)(l.a.select, this.props.className)
					}, this.state.timezoneOptions.map(({
						name: e,
						displayText: t
					}) => s.a.createElement("option", {
						key: e,
						value: e
					}, t)))
				}
			}
			t.a = u
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "ppLwDvFzc7jVTiV_5euUj",
				container: "ppLwDvFzc7jVTiV_5euUj",
				Content: "_3VbwtRsayHUBLVMtjkul4u",
				content: "_3VbwtRsayHUBLVMtjkul4u",
				TitleRow: "_2aRE3m6KuLAhRIDmdmFKaY",
				titleRow: "_2aRE3m6KuLAhRIDmdmFKaY",
				Hr: "_1aShcxrllO1loaDr49TUUo",
				hr: "_1aShcxrllO1loaDr49TUUo",
				TimeInput: "_1bu7h4vK0WEgtRzSz-_mbA",
				timeInput: "_1bu7h4vK0WEgtRzSz-_mbA",
				TimeSelectionRow: "BUT684iT0_upDm6a1x4q_",
				timeSelectionRow: "BUT684iT0_upDm6a1x4q_",
				RadioOptionContent: "_3Ry1zpEULyeAACzRNZgIHN",
				radioOptionContent: "_3Ry1zpEULyeAACzRNZgIHN",
				OptionDetails: "_3imVLMudY3hxD1tq8KO6MB",
				optionDetails: "_3imVLMudY3hxD1tq8KO6MB",
				RadioInput: "_3VPprBv9bGCEm-hzjVWKmd",
				radioInput: "_3VPprBv9bGCEm-hzjVWKmd",
				RadioOption: "V4Tm9i9X2Co6LU8ez1zlw",
				radioOption: "V4Tm9i9X2Co6LU8ez1zlw",
				Delimiter: "_2bajvlJVcTANoHFRcmq7lu",
				delimiter: "_2bajvlJVcTANoHFRcmq7lu",
				Footer: "_3KeMI-XaG-5bILTvrCkaGS",
				footer: "_3KeMI-XaG-5bILTvrCkaGS",
				CancelButton: "_2NvAutu3QQJ9DwGHa83msC",
				cancelButton: "_2NvAutu3QQJ9DwGHa83msC",
				DeleteButton: "_3mKiK6bFRKi6y6Wkk1xLyp",
				deleteButton: "_3mKiK6bFRKi6y6Wkk1xLyp",
				ErrorMessage: "ZK5-SDSIvd4eGlmmbaRoO",
				errorMessage: "ZK5-SDSIvd4eGlmmbaRoO",
				ClearIcon: "E0CXpIVd8SDvRSwZFAmCn",
				clearIcon: "E0CXpIVd8SDvRSwZFAmCn"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/timezone/index.ts"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/RadioInput/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				f = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				g = n("./src/reddit/helpers/trackers/postEvent.ts"),
				C = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				E = n("./src/reddit/layout/row/Inline/index.tsx"),
				x = n("./src/reddit/models/PostCreationForm/index.ts"),
				_ = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				v = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				O = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx"),
				y = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.m.less"),
				k = n.n(y);
			const j = 240,
				S = () => {
					const e = new Date;
					e.setMinutes(60);
					const t = Object(l.g)(e);
					return e.setMinutes(e.getMinutes() + j), {
						startDate: t,
						endDate: Object(l.g)(e),
						submitTime: x.j.Now,
						timezoneName: Object(l.b)() || l.a
					}
				},
				T = c.a.div("Container", k.a),
				P = c.a.div("Content", k.a),
				I = c.a.div("TitleRow", k.a),
				w = c.a.hr("Hr", k.a),
				N = c.a.wrapped(v.a, "TimeInput", k.a),
				D = c.a.div("TimeSelectionRow", k.a),
				M = c.a.div("RadioOptionContent", k.a),
				R = c.a.span("OptionDetails", k.a),
				L = c.a.wrapped(h.a, "RadioInput", k.a),
				F = c.a.wrapped(b.a, "RadioOption", k.a),
				A = c.a.span("Delimiter", k.a),
				B = c.a.wrapped(d.g, "Footer", k.a),
				U = c.a.wrapped(p.o, "CancelButton", k.a),
				W = c.a.wrapped(p.o, "DeleteButton", k.a),
				z = c.a.div("ErrorMessage", k.a),
				G = c.a.wrapped(C.a, "ClearIcon", k.a);
			class H extends r.a.PureComponent {
				constructor(e) {
					super(e), this.currentTimezone = Object(l.b)(), this.maxDate = Object(u.a)(), this.buildEventSchedule = () => ({
						startDate: Object(f.a)(this.state.startDate, this.state.startTime),
						endDate: Object(f.a)(this.state.endDate, this.state.endTime),
						timezoneName: this.state.timezoneName,
						submitTime: this.state.submitTime
					}), this.onStartDateChange = e => {
						this.setState({
							startDate: e
						}, this.updateEndDatetime)
					}, this.onStartTimeChange = e => {
						this.setState({
							startTime: e
						}, this.updateEndDatetime)
					}, this.updateEndDatetime = () => {
						if (this.state.isEndTimeTouched) return;
						const {
							startDate: e,
							startTime: t
						} = this.state;
						if (e && t) {
							const n = Object(l.f)(Object(f.a)(e, t));
							n.setMinutes(n.getMinutes() + j);
							const [o, s] = Object(f.i)(Object(l.g)(n));
							this.setState({
								endDate: o,
								endTime: s
							})
						}
					}, this.onEndDateChange = e => {
						this.setState({
							endDate: e,
							isEndTimeTouched: !0
						})
					}, this.onEndTimeChange = e => {
						this.setState({
							endTime: e,
							isEndTimeTouched: !0
						})
					}, this.onTimezoneChange = e => {
						this.setState({
							timezoneName: e
						})
					}, this.onSubmitTimeChange = e => {
						this.setState({
							submitTime: e
						})
					}, this.onApplyClick = () => {
						const e = this.buildEventSchedule();
						this.props.sendEvent(Object(g.b)(e)), this.props.onChange(e), this.props.onClose()
					}, this.onDeleteButtonClick = () => {
						const e = this.buildEventSchedule();
						this.props.sendEvent(Object(g.d)(e)), this.props.onChange(null), this.props.onClose()
					}, this.onCancelButtonClick = () => {
						this.props.sendEvent(Object(g.c)()), this.props.onClose()
					}, this.getValidationError = () => {
						const {
							endDate: e,
							endTime: t,
							startDate: n,
							startTime: s
						} = this.state;
						if (!(n && s && e && t)) return o.fbt._("Please enter valid start and end time", null, {
							hk: "2IyBsT"
						});
						const r = Object(l.f)(Object(f.a)(n, s)),
							a = Object(l.f)(Object(f.a)(e, t));
						return r < (this.currentTimezone === this.state.timezoneName ? new Date : new Date(Date.now() - i.B)) ? o.fbt._("Event start time needs to be in the future", null, {
							hk: "3oL3LM"
						}) : a < r ? o.fbt._("End time must be after start time", null, {
							hk: "3C3TKE"
						}) : null
					}, this.getSubmitAtLabel = () => {
						const {
							startDate: e,
							startTime: t
						} = this.state;
						return Object(f.b)(e, t)
					}, this.renderSubmitTimeRadio = () => r.a.createElement(L, {
						value: this.state.submitTime,
						name: "submit_time",
						onChange: this.onSubmitTimeChange
					}, r.a.createElement(F, {
						showButton: !0,
						value: x.j.Now
					}, r.a.createElement(M, null, r.a.createElement("span", null, o.fbt._("Now", null, {
						hk: "4Cro9L"
					})), r.a.createElement(R, null, o.fbt._("Let people follow your event ahead of time so they can make sure to come back when it starts.", null, {
						hk: "xTSNh"
					})))), r.a.createElement(F, {
						showButton: !0,
						value: x.j.AtEventTime
					}, r.a.createElement(M, null, r.a.createElement("span", null, this.getSubmitAtLabel()), r.a.createElement(R, null, o.fbt._("Edit and hide this post until the event starts.", null, {
						hk: "2VC38O"
					})))));
					const t = e.schedule || S(),
						[n, s] = Object(f.i)(t.startDate),
						[a, c] = Object(f.i)(t.endDate);
					this.state = {
						startDate: n,
						startTime: s,
						endDate: a,
						endTime: c,
						timezoneName: t.timezoneName,
						submitTime: t.submitTime,
						isEndTimeTouched: !!e.schedule
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(g.e)())
				}
				render() {
					const {
						shouldShowSubmitTime: e
					} = this.props, t = this.getValidationError();
					return r.a.createElement(T, null, r.a.createElement(P, null, r.a.createElement(I, null, o.fbt._("When is the event?", null, {
						hk: "2fTD7f"
					})), r.a.createElement(D, null, o.fbt._("{start time}{to}{end time}", [o.fbt._param("start time", r.a.createElement("fieldset", null, r.a.createElement("legend", null, o.fbt._("Start time", null, {
						hk: "3nqplI"
					})), r.a.createElement(_.a, {
						max: this.maxDate,
						onChange: this.onStartDateChange,
						value: this.state.startDate
					}), r.a.createElement(N, {
						onChange: this.onStartTimeChange,
						value: this.state.startTime
					}))), o.fbt._param("to", r.a.createElement(A, null, o.fbt._("to", null, {
						hk: "2tWTBK"
					}))), o.fbt._param("end time", r.a.createElement("fieldset", {
						style: {
							opacity: this.state.isEndTimeTouched ? 1 : .5
						}
					}, r.a.createElement("legend", null, o.fbt._("End time (optional)", null, {
						hk: "2XKdsz"
					})), r.a.createElement(_.a, {
						max: this.maxDate,
						onChange: this.onEndDateChange,
						value: this.state.endDate
					}), r.a.createElement(N, {
						onChange: this.onEndTimeChange,
						value: this.state.endTime
					})))], {
						hk: "3MRWfF"
					})), r.a.createElement("div", null, r.a.createElement("label", null, o.fbt._("Time zone", null, {
						hk: "3F7Bko"
					}), r.a.createElement(O.a, {
						selectedTimezoneName: this.state.timezoneName,
						onChange: this.onTimezoneChange
					}))), e && r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null), r.a.createElement("fieldset", null, r.a.createElement("legend", null, o.fbt._("When do you want to post this event?", null, {
						hk: "3OEsrt"
					})), this.renderSubmitTimeRadio()))), r.a.createElement(B, null, r.a.createElement(E.a, null, this.props.schedule && this.props.shouldShowDeleteButton && r.a.createElement(W, {
						onClick: this.onDeleteButtonClick
					}, r.a.createElement(G, null), o.fbt._("Clear", null, {
						hk: "npkgK"
					})), r.a.createElement(U, {
						onClick: this.onCancelButtonClick
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(p.l, {
						onClick: this.onApplyClick,
						disabled: !!t
					}, o.fbt._("Apply", null, {
						hk: "2TE8JD"
					}))), t && r.a.createElement(z, null, t)))
				}
			}
			t.default = Object(a.a)(Object(m.c)(H))
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const r = () => {
				const e = new Date;
				e.setFullYear(e.getFullYear() + 1);
				const [t] = Object(s.i)(Object(o.g)(e));
				return t
			}
		},
		"./src/reddit/components/PostCreationForm/SubredditChangePrompt/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_1elQqozWN8v7kNb3-2JJnv",
				wrapper: "_1elQqozWN8v7kNb3-2JJnv",
				TitleRow: "_21ZJQglqJoGvKPVrE1g6y4",
				titleRow: "_21ZJQglqJoGvKPVrE1g6y4",
				DetailsContainer: "_2BCyPW29meUC7c2ZvAIF6O",
				detailsContainer: "_2BCyPW29meUC7c2ZvAIF6O",
				ButtonRow: "_3-rBvo8wMI4G0IKFdRF5et",
				buttonRow: "_3-rBvo8wMI4G0IKFdRF5et",
				CancelButton: "_12whVTuRHmPsEJZdopRGQN",
				cancelButton: "_12whVTuRHmPsEJZdopRGQN",
				ConfirmButton: "ERUkO2xr-Jto7MQoScSJG",
				confirmButton: "ERUkO2xr-Jto7MQoScSJG"
			}
		},
		"./src/reddit/components/PostCreationForm/Tabs/index.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_3WIAbYQQdSmuuFLDSfhn5_",
				icon: "_3WIAbYQQdSmuuFLDSfhn5_",
				Container: "_3vyt9N_0jfZuOwByiKDi9x",
				container: "_3vyt9N_0jfZuOwByiKDi9x",
				row: "_3fd4Ceu6mb8NI6WVk0Yv5c",
				Tab: "Z1w8VkpQ23E1Wdq_My3U4",
				tab: "Z1w8VkpQ23E1Wdq_My3U4",
				isActive: "j1Q89sB76i7EBRDhnQhlr",
				liveIcon: "_2ly0E3mlAUB4ceo4Gfioj-"
			}
		},
		"./src/reddit/components/PostCreationForm/TalkCreationForm/index.m.less": function(e, t, n) {
			e.exports = {
				talkContainer: "rR3dB4wBxXbvpQs3X6E-y",
				padding: "_3JuOLYrOwjIiRBAi1Nepv3",
				footer: "e11lKKg6rUIGvkGc7A-YN",
				themeButtonContainer: "-Z7W23_Cce3TLEVWLqBOT",
				active: "_2SRhOmNHRfw6t55K3p2kb6",
				themeButton: "_1TWcq_95INaMX0npP4Mc6d",
				createButton: "_3iT0UWbY5TK17vEssx4-JJ",
				learnMoreLink: "_2CWiF110lUGDEu_SHOM6jV",
				periwinkle: "_1Mmj00zbJBfc1elJTCOQgy",
				orangered: "HCUnplvnP4tgNXBWUyr_b",
				mango: "_2SmIbUasLA9yy9qSj4lpwH",
				kiwi: "_3HMLsESE8h6uPEOqjt_AfX",
				alien: "_15luQXPeZ1IGNqFqB6-dP7"
			}
		},
		"./src/reddit/components/PostCreationForm/index.m.less": function(e, t, n) {
			e.exports = {
				FormContent: "_3w_665DK_NH7yIsRMuZkqB",
				formContent: "_3w_665DK_NH7yIsRMuZkqB",
				CrosspostBox: "QQaE6143-4kvEuZSTBX7_",
				crosspostBox: "QQaE6143-4kvEuZSTBX7_",
				FormContainer: "HOFZo2X7Fr6JVBztpsByj",
				formContainer: "HOFZo2X7Fr6JVBztpsByj",
				TabContent: "_1zq6UabIEJJ-z9grsiCJY7",
				tabContent: "_1zq6UabIEJJ-z9grsiCJY7",
				PostingGuidelines: "_2vcPDTxC76PPQ70AdMkN0C",
				postingGuidelines: "_2vcPDTxC76PPQ70AdMkN0C",
				isSubredditRec: "_1JYtueM9ArhhK0dI1oOwCA",
				postToTitle: "_1Kxdp9wMJTKjsFvSZoeDzP"
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var o = n("./node_modules/lodash/isEqual.js"),
				s = n.n(o),
				r = n("./src/reddit/constants/flair.ts"),
				a = n("./src/reddit/helpers/flair.ts"),
				i = n("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === i.f.Text || e.type === i.f.Image || e.type === i.f.Richtext);
			var l;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(l || (l = {}));
			const d = (e, t, n) => {
				if (n && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: l.NotSelected
				};
				const o = e && t.templateId ? e[t.templateId] : void 0;
				if (!o) return {
					canSave: !1,
					reason: l.InvalidTemplate
				};
				const i = Object(a.g)(t).length;
				return 0 === i ? {
					canSave: !1,
					reason: l.TextIsEmpty
				} : i > r.g ? {
					canSave: !1,
					reason: l.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(o) ? {
					canSave: !1,
					reason: l.TextIsNotAllowed
				} : s()(n, t) ? {
					canSave: !1,
					reason: l.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return y
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				p = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				h = n("./src/reddit/components/FlairPreview/index.tsx"),
				b = n("./src/reddit/components/FlairSearch/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/trackers/postComposer.ts"),
				C = n("./src/reddit/models/Flair/index.ts"),
				E = n("./src/reddit/selectors/postFlair.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				v = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				O = n.n(v);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const y = (e, t = !1, n = o.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`,
				k = Object(c.c)({
					flairData: E.d,
					subreddit: x.S
				});
			class j extends a.a.Component {
				constructor(e) {
					super(e), this.trackEvent = () => {
						this.props.sendEvent(Object(g.F)(this.props.subredditId))
					}, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.trackEvent()
					}, this.onClear = () => {
						this.props.sendEvent(Object(g.b)()), this.setSelectedFlair(null)
					}, this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					};
					const t = Object(_.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, n = Object(_.c)(this.props.flairs) || null;
					return Object(_.b)(e, t, n)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: n,
						flairData: o,
						subreddit: r
					} = e, i = r.displayText, {
						templates: c,
						templateIds: l
					} = o, {
						canSave: d
					} = this.canSave();
					return a.a.createElement(p.a, {
						className: n
					}, a.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select {subredditName} flair", [s.fbt._param("subredditName", i)], {
							hk: "1lDMWS"
						})
					}), a.a.createElement(h.a, {
						flair: t,
						flairTemplateType: C.d.LinkFlair,
						placeholderText: s.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), a.a.createElement(b.a, {
						flair: t,
						flairTemplateType: C.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: l,
						onChange: this.setSelectedFlair
					}), a.a.createElement("div", {
						className: O.a.buttonsRow
					}, a.a.createElement(f.l, {
						disabled: !d,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), a.a.createElement(f.o, {
						className: O.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const S = Object(i.b)(k, (e, t) => ({
				closeModal: () => e(Object(u.i)(t.modalId))
			}))(j);
			t.a = Object(d.a)(Object(l.c)(S))
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/AwardBadges/index.tsx"),
				a = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = n("./src/reddit/components/PostBadges/index.tsx"),
				l = n("./src/reddit/components/PostTopMeta/index.tsx"),
				d = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = n("./src/reddit/constants/posts.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				f = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				C = n("./src/reddit/models/Subreddit/index.ts"),
				E = n("./src/reddit/components/PostMeta/index.m.less"),
				x = n.n(E);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: E,
					isOverlay: _,
					isTopicPage: v,
					post: O,
					shouldShowSubscribeButton: y,
					subredditOrProfile: k,
					tooltipType: j
				} = e, S = !!v, T = Object(g.a)();
				return s.a.createElement("div", {
					className: x.a.metaContainer
				}, !o && !O.isSponsored && k && s.a.createElement(a.a, {
					postId: O.id,
					subredditName: k.name
				}, s.a.createElement(u.a, {
					className: x.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: k.url,
						state: T
					}
				}, k.displayText)), k && k.isQuarantined && s.a.createElement(d.a, null), !o && !O.isSponsored && k && y && !E && s.a.createElement(m.a, {
					className: x.a.SubscribeButton,
					getEventFactory: e => Object(f.h)(O.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: k.name,
						type: Object(C.h)(k) ? p.a.PROFILE : p.a.SUBREDDIT
					},
					postId: O.id,
					size: h.d.XXS,
					small: !0
				}), !o && !O.isSponsored && s.a.createElement(b.b, null), !o && !O.isSponsored && s.a.createElement(i.h, {
					type: O.belongsTo.type,
					id: O.belongsTo.id
				}), s.a.createElement(l.d, {
					className: x.a.postTopMeta,
					flairStyleTemplate: t,
					post: O,
					tooltipType: j
				}), s.a.createElement(c.a, {
					displayText: k ? k.displayText : null,
					inSubredditOrProfile: !!o,
					post: O,
					tooltipType: j
				}), !S && s.a.createElement(r.a, {
					hideCta: n,
					thing: O,
					tooltipType: _ ? l.c.Lightbox : void 0
				}))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return D
			})), n.d(t, "a", (function() {
				return K
			}));
			var o = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/ads/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				b = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = n("./src/reddit/actions/post.ts"),
				g = n("./src/reddit/helpers/flair.ts"),
				C = n("./src/reddit/helpers/path/index.ts"),
				E = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				x = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/models/Flair/index.ts"),
				v = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				y = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = n("./src/lib/getShortenedLink.ts"),
				j = n("./src/reddit/components/FlairWrapper/index.tsx"),
				S = n("./node_modules/fbt/lib/FbtPublic.js"),
				T = n("./src/lib/prettyPrintNumber/index.ts"),
				P = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				I = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				w = n.n(I);
			const N = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var D, M = Object(a.b)(N)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, o = n ? n.totalVotes : "0";
					return r.a.createElement("div", {
						className: Object(d.a)(e.className, w.a.proposalMetaData)
					}, r.a.createElement("span", null, S.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [S.fbt._param("count", Object(T.a)(o)), S.fbt._plural(parseInt(o))], {
						hk: "4rP1VK"
					})), t && r.a.createElement(P.a, {
						className: w.a.proposalExpiry,
						poll: t
					}))
				})),
				R = n("./src/reddit/components/SEOTitle/index.tsx"),
				L = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/components/PostTitle/index.m.less"),
				B = n.n(A),
				U = n("./src/config.ts"),
				W = n("./src/reddit/hooks/useClickSourceData.ts"),
				z = n("./src/reddit/hooks/usePostContext.ts"),
				G = n("./src/reddit/hooks/useTheme.ts"),
				H = n("./src/telemetry/models/Outbound.ts");

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(D || (D = {}));
			const K = ({
					size: e,
					titleColor: t,
					titleType: n,
					nowrap: o,
					children: s,
					className: a,
					redditStyle: i
				}) => {
					const c = Object(G.a)();
					let l = "";
					switch (e) {
						case D.ExtraLarge:
							l = B.a.ExtraLarge;
							break;
						case D.Large:
							l = B.a.Large;
							break;
						case D.Medium:
							l = B.a.Medium;
							break;
						case D.Small:
							l = B.a.Small;
							break;
						case D.ExtraSmall:
							l = B.a.ExtraSmall;
							break;
						case D.Metadata:
							l = B.a.Metadata
					}
					return r.a.createElement("div", {
						className: Object(d.a)(B.a.Title, a, l, {
							[B.a.isNoWrap]: o
						}),
						style: {
							"--posttitletextcolor": t || Object(y.a)({
								redditStyle: i,
								theme: c
							}).titleText
						}
					}, n ? r.a.createElement(R.b, {
						type: n
					}, s) : s)
				},
				q = ({
					className: e,
					disableVisited: t,
					titleColor: n,
					children: o,
					...s
				}) => r.a.createElement(i.a, V({}, s, {
					className: Object(d.a)(e, B.a.styledLink, {
						[B.a.isVisitedEnabled]: !t
					})
				}), o),
				J = ({
					disableVisited: e,
					nowrap: t,
					className: n,
					children: o
				}) => r.a.createElement("div", {
					className: Object(d.a)(B.a.titleContainer, n, {
						[B.a.isNoWrap]: t,
						[B.a.isVisitedEnabled]: !e
					})
				}, o),
				Z = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: F.hb
				}),
				Q = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: o
					} = t, s = Object(a.d)(), i = Object(W.a)(), c = Object(a.e)(L.b), d = e => {
						!c || t.media && Object(v.H)(t.media) || (e.preventDefault(), s(Object(f.ab)(Object(C.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return r.a.createElement(J, {
						nowrap: e.nowrap
					}, r.a.createElement(Y, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return r.a.createElement(p.b, {
						href: t.source.url,
						isSponsored: o,
						postId: t.id,
						source: t.source
					}, r.a.createElement(Y, e)); {
						const s = t.media && Object(v.H)(t.media) ? Object(E.c)(t.id, n.name) : t.permalink,
							a = e.isCommentPermalink ? Object(C.b)(s) : Object(b.a)(s, void 0, i);
						return r.a.createElement(J, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, o ? ((e, t) => {
							const {
								source: n
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return n ? r.a.createElement(p.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, r.a.createElement(Y, t)) : r.a.createElement(Y, t)
						})(t, e) : r.a.createElement(q, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: a,
							onClick: d
						}, r.a.createElement(Y, e)))
					}
				},
				Y = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: o
					} = e;
					let s = e.format ? e.format(o) : o.title;
					n && "string" == typeof s && (s = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(s));
					const a = e.isCommentsPage ? R.a.PostComments : R.a.PostItem;
					return r.a.createElement(K, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && r.a.createElement(j.a, {
						titleFlair: t,
						nowrap: !0,
						post: o,
						sendEvent: e.sendEvent
					}), s)
				},
				X = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: o
					} = n, s = e.isCommentsPage ? H.SourceElement.PostLink : H.SourceElement.ListingPostLink, a = !t && !e.isCrosspost && e.size !== D.Large && !n.isSponsored && !(n.media && Object(v.H)(n.media)) && (n.source || n.media && (n.media.type === v.o.GIFVIDEO || n.media.type === v.o.IMAGE || n.media.type === v.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return r.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(v.D)(n),
							isSponsored: o,
							postId: n.id,
							source: n.source,
							sourceElement: s
						}, Object(k.a)(n), !n.isSponsored && r.a.createElement(x.a, {
							name: "external_link",
							className: B.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== D.Large && e.size !== D.ExtraLarge) return r.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: o,
						postId: n.id,
						source: n.source,
						sourceElement: s
					}, Object(k.a)(n), !n.isSponsored && r.a.createElement(x.a, {
						name: "external_link",
						className: B.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends r.a.Component {
				getDynamicStyleTags() {
					return r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${B.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(o.c)(.45,Object(y.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(o.c)(.45,this.props.titleColor||Object(y.a)(this.props).titleText,Object(y.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: o,
						isOverlay: s,
						poll: a,
						post: i,
						showNSFWSpoilerFlairsOnly: c,
						showNSFWFlairsOnly: l
					} = this.props, u = n === _.b.Left, m = Object(j.b)(i), p = c ? m.filter(e => e.type === _.f.Nsfw || e.type === _.f.Spoiler) : u ? m.filter(e => Object(g.q)(e.type)) : [];
					let h = m;
					c ? h = [] : l ? h = m.filter(e => e.type === _.f.Nsfw) : u && (h = m.filter(e => !Object(g.q)(e.type)));
					const b = !s && !o,
						f = !t && p && p.length > 0 && b,
						C = !t && h && h.length > 0 && b;
					return r.a.createElement("div", {
						className: Object(d.a)(B.a.Component, e, i.id),
						ref: this.props.innerRef
					}, !c && f && r.a.createElement(j.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), !Object(O.b)(i) && r.a.createElement(Q, V({}, this.props, {
						leftFlair: c ? p : void 0
					})), a && r.a.createElement(M, {
						className: B.a.pollMeta,
						pollId: a.id
					}), r.a.createElement(X, this.props), C && r.a.createElement(j.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), r.a.createElement("div", {
						className: B.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${U.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = r.a.memo((function(e) {
				const t = Object(m.fb)(),
					n = Object(m.w)(t),
					o = Object(z.a)(),
					s = Object(a.e)(s => Z(s, {
						...o,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					i = Object(G.a)(),
					c = Object(u.b)();
				return o ? r.a.createElement($, V({
					pageLayer: t,
					isCommentPermalink: n
				}, o, s, e, {
					theme: i,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/components/PostingSidebar/PolicyRow/index.m.less": function(e, t, n) {
			e.exports = {
				PolicyRow: "_2N9ShiilNyzdd0B_i9geBj",
				policyRow: "_2N9ShiilNyzdd0B_i9geBj"
			}
		},
		"./src/reddit/components/PostingSidebar/PolicyRow/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/config.ts");
			const {
				redditUrl: a
			} = r.a, i = `${a}/help/contentpolicy`, c = `${a}/wiki/reddiquette`;
			var l = n("./src/reddit/components/PostingSidebar/PolicyRow/index.m.less"),
				d = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement("div", {
				className: d.a.PolicyRow
			}, u._("Please be mindful of reddit's {=content policy} and practice good {=reddiquette}.", [u._param("=content policy", s.a.createElement("a", {
				href: i
			}, u._("content policy", null, {
				hk: "2PeDvo"
			}))), u._param("=reddiquette", s.a.createElement("a", {
				href: c
			}, u._("reddiquette", null, {
				hk: "uPdiw"
			})))], {
				hk: "4yQuKr"
			}))
		},
		"./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less": function(e, t, n) {
			e.exports = {
				Snoo: "_1XXU14d6sjwsheKLMcy7ro",
				snoo: "_1XXU14d6sjwsheKLMcy7ro",
				Li: "_2aD4E5YdfsXR-e8kLRuTEp",
				li: "_2aD4E5YdfsXR-e8kLRuTEp",
				Ol: "a5fJMl2u0aujwukxWH3if",
				ol: "a5fJMl2u0aujwukxWH3if",
				Title: "_27SYzmGZdspPn9yA9voNCY",
				title: "_27SYzmGZdspPn9yA9voNCY",
				Component: "_1Zj2sAyYL2zB-kzZQcWiW",
				component: "_1Zj2sAyYL2zB-kzZQcWiW"
			}
		},
		"./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/icons/svgs/SnooPosting/index.tsx"),
				d = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less"),
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(l.a, "Snoo", m.a),
				b = p.a.li("Li", m.a),
				f = p.a.ol("Ol", m.a),
				g = p.a.div("Title", m.a),
				C = Object(i.c)({
					submissionType: d.mb
				});
			t.a = p.a.wrapped(Object(a.b)(C)(e => {
				const {
					className: t,
					submissionType: n
				} = e, s = n === c.Wb.CROSSPOST;
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(g, null, r.a.createElement(h, null), s ? o.fbt._("Crossposting to Reddit", null, {
					hk: "2ODPDt"
				}) : o.fbt._("Posting to Reddit", null, {
					hk: "8eEIT"
				})), r.a.createElement(f, null, r.a.createElement(b, null, o.fbt._("Remember the human", null, {
					hk: "1x3u5R"
				})), r.a.createElement(b, null, o.fbt._("Behave like you would in real life", null, {
					hk: "3pxfk1"
				})), r.a.createElement(b, null, o.fbt._("Look for the original source of content", null, {
					hk: "1FfUM4"
				})), r.a.createElement(b, null, o.fbt._("Search for duplicates before posting", null, {
					hk: "3Ij1gf"
				})), r.a.createElement(b, null, o.fbt._("Read the community’s rules", null, {
					hk: "3RNQW2"
				})), s && r.a.createElement(b, null, o.fbt._("You must join a community to crosspost there", null, {
					hk: "1YAEPX"
				}))))
			}), "Component", m.a)
		},
		"./src/reddit/components/PostingSidebar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "itxZANPrH4AAYOj6VgfL9",
				container: "itxZANPrH4AAYOj6VgfL9",
				isOpenAIPilotV1: "xpmGc4AuyuOP6ErObihFx",
				isOpenAiPilotV1: "xpmGc4AuyuOP6ErObihFx"
			}
		},
		"./src/reddit/components/PostingSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				s = n.n(o),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/components/IdCard/async.tsx"),
				m = n("./src/reddit/components/SidebarFooter/index.tsx"),
				p = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				h = n("./src/reddit/components/Widgets/PostCollection/index.tsx"),
				b = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				C = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				E = n("./src/reddit/selectors/postCreations.ts"),
				x = n("./src/reddit/selectors/profile.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/widgets.ts"),
				O = n("./src/reddit/components/PostingSidebar/PolicyRow/index.tsx"),
				y = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx"),
				k = n("./src/reddit/components/PostingSidebar/index.m.less"),
				j = n.n(k),
				S = n("./src/lib/lessComponent.tsx");
			const T = Object(r.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				P = S.a.div("Container", j.a),
				I = Object(f.u)(),
				w = new Set(["all", "post"]),
				N = Object(d.a)((e, {
					pageLayer: t
				}) => {
					const n = Object(f.r)(e, {
						pageLayer: t
					});
					return n && Object(_.R)(e, {
						subredditId: n.id
					})
				}, e => (e || []).filter(e => w.has(e.kind))),
				D = (e, {
					pageLayer: t
				}) => {
					const n = Object(f.r)(e, {
						pageLayer: t
					});
					return !(!n || !Object(v.d)(e, {
						subredditName: n.name
					}))
				},
				M = Object(d.c)({
					hasIdCardWidgetData: D,
					isCreationPagePending: E.L,
					profile: (e, {
						pageLayer: t,
						subredditOrProfileId: n
					}) => n ? Object(x.p)(e, {
						profileId: n
					}) : Object(f.k)(e, {
						pageLayer: t
					}),
					subreddit: f.r,
					subredditRules: N,
					currentPostCollection: f.g,
					isOpenAIPilotV1: C.f
				}),
				R = Object(l.b)(M),
				L = e => {
					const {
						className: t,
						currentPostCollection: n,
						hasIdCardWidgetData: o,
						isCreationPagePending: s,
						isOpenAIPilotV1: r,
						profile: i,
						subreddit: l,
						subredditRules: d
					} = e, f = o || s;
					return c.a.createElement(P, {
						className: Object(a.a)(t, {
							[j.a.isOpenAIPilotV1]: r
						})
					}, n && c.a.createElement(h.a, {
						collection: n
					}), l && f && c.a.createElement(p.a, null, c.a.createElement(u.a, {
						isSubmissionPage: !0,
						listingName: l.name
					})), i && !l && c.a.createElement(p.a, null, c.a.createElement(T, {
						profileName: i.name,
						isOverlay: !1,
						isSubmissionPage: !0
					})), l && d && c.a.createElement(p.a, null, c.a.createElement(b.a, {
						subredditName: l.name,
						display: g.h.COMPACT,
						rules: d,
						redditStyle: !0
					})), c.a.createElement(y.a, null), c.a.createElement(p.a, null), c.a.createElement(O.a, null), c.a.createElement(m.a, {
						redditStyle: !0
					}))
				};
			t.a = I(R(L))
		},
		"./src/reddit/components/RequestPendingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				banner: "_1AD-JX9FUzLgvv8A5yaVqV",
				Subtitle: "_1ljRPHbvpC41amZF9_xBeb",
				subtitle: "_1ljRPHbvpC41amZF9_xBeb"
			}
		},
		"./src/reddit/components/RequestPendingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				d = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = n.n(p);
			const b = c.a.wrapped(l.a, "Banner", h.a),
				f = Object(a.b)(() => Object(i.c)({
					restrictions: m.m,
					subreddit: u.e
				}));
			t.a = f(({
				restrictions: e,
				subreddit: t
			}) => {
				if (!t) return null;
				const n = e === d.e.Comment ? d.a.Create : d.a.Draft;
				return r.a.createElement(b, {
					subtitle: r.a.createElement("span", {
						className: h.a.Subtitle
					}, o.fbt._("Your request to {restrictions} in {displayName} was sent and is pending. In the meantime, you can {action} a post and {=browse the community}", [o.fbt._param("restrictions", d.d[e]()), o.fbt._param("displayName", t.name), o.fbt._param("action", d.c[n]()), o.fbt._param("=browse the community", r.a.createElement("a", {
						href: `${t.url}`
					}, o.fbt._("browse the community", null, {
						hk: "3hwgAC"
					})))], {
						hk: "2CX6Q6"
					})),
					title: o.fbt._("Request to {restrictions} is pending...", [o.fbt._param("restrictions", d.d[e]())], {
						hk: "1tQuSr"
					})
				})
			})
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, n) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-autosize-textarea/lib/index.js"),
				a = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				l = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = ({
					className: e,
					children: t,
					editorWrapperRef: n,
					initialHeight: o
				}) => s.a.createElement("div", {
					className: Object(i.a)(l.a.editorWrapper, e),
					style: o ? {
						height: o
					} : void 0,
					ref: n
				}, t),
				m = ({
					isFullHeight: e,
					textAreaRef: t,
					...n
				}) => s.a.createElement(a.a, d({
					className: Object(i.a)(l.a.textareaAutosize, {
						[l.a.mIsFullHeight]: e
					}),
					innerRef: t
				}, n));
			class p extends s.a.Component {
				constructor(e) {
					super(e), this.editorHeight = null, this.editorRef = null, this.editorStyleMutationObserver = null, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const {
							isResized: e
						} = this.state;
						e || this.setState({
							isResized: !0
						});
						const t = this.editorRef.style.height ? Number.parseInt(this.editorRef.style.height) : null;
						this.editorHeight !== t && (this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.setEditorWrapperRef = e => this.editorRef = e, this.state = {
						initialHeight: e.initialHeight,
						isResized: !!e.initialHeight
					}
				}
				componentDidMount() {
					this.editorRef && (this.editorStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorStyleMutationObserver.observe(this.editorRef, {
						attributes: !0,
						attributeFilter: ["style"]
					}))
				}
				componentWillUnmount() {
					this.editorStyleMutationObserver && (this.editorStyleMutationObserver.disconnect(), this.editorStyleMutationObserver = null)
				}
				render() {
					const {
						className: e,
						initialHeight: t,
						innerRef: n,
						onEditorResize: o,
						...r
					} = this.props, {
						isResized: a
					} = this.state;
					return s.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, s.a.createElement(m, d({}, r, {
						isFullHeight: !!a,
						textAreaRef: n
					})))
				}
			}
			t.a = p
		},
		"./src/reddit/components/ScheduledPost/PostSchedulePickerModal/loader.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-ScheduledPost-PostSchedulePickerModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-ScheduledPost-PostSchedulePickerModal").then(n.bind(null, "./src/reddit/components/ScheduledPost/PostSchedulePickerModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ScheduledPost/PostSchedulePickerModal/index.tsx"
				}
			})
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js");
			const s = Object(o.createContext)(!1);

			function r() {
				return Object(o.useContext)(s)
			}
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = n("./src/reddit/constants/location.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				p = n("./src/reddit/helpers/trackers/navigation.ts"),
				h = n("./src/reddit/selectors/experiments/countrySites.ts"),
				b = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				f = n("./src/reddit/selectors/meta.ts"),
				g = n("./src/reddit/components/SidebarFooter/index.m.less"),
				C = n.n(g);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = i.a.a("Link", C.a), _ = Object(a.c)({
				isCountrySitesEnabled: h.a,
				isNavbarLikeMwebEnabled: b.a,
				countryCode: f.b
			}), v = Object(r.b)(_), O = Object(u.u)({
				isFrontpage: u.A,
				isCountrySitePage: u.y
			});
			t.a = O(v(Object(c.c)(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? s.a.createElement(l.a, {
				className: C.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, s.a.createElement("div", {
				className: C.a.LinkContainer
			}, s.a.createElement("div", {
				className: C.a.Column
			}, s.a.createElement(x, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, E._("User Agreement", null, {
				hk: "2RA6JL"
			})), s.a.createElement(x, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, E._("Privacy policy", null, {
				hk: "10K04G"
			}))), s.a.createElement("div", {
				className: C.a.Column
			}, s.a.createElement(x, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, E._("Content policy", null, {
				hk: "1DyxZS"
			})), s.a.createElement(x, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, E._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), s.a.createElement("div", {
				className: C.a.Copyright
			}, E._("© {year} Reddit, Inc. All rights reserved.", [E._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : s.a.createElement(l.a, {
				className: C.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, s.a.createElement("div", {
				className: C.a.LinkContainer
			}, s.a.createElement("div", {
				className: C.a.Column
			}, s.a.createElement(x, {
				href: "https://www.reddithelp.com"
			}, E._("help", null, {
				hk: "4lyYaD"
			})), s.a.createElement(x, {
				href: "https://www.reddit.com/coins"
			}, E._("Reddit coins", null, {
				hk: "32iMaN"
			})), s.a.createElement(x, {
				href: "https://www.reddit.com/premium"
			}, E._("Reddit premium", null, {
				hk: "RuO3A"
			})), e.isFrontpage && s.a.createElement(s.a.Fragment, null, s.a.createElement(x, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, E._("Communities", null, {
				hk: "3CJu37"
			})), s.a.createElement(x, {
				href: `https://www.reddit.com${Object(m.a)()}`
			}, E._("Rereddit", null, {
				hk: "1z3k7C"
			})), s.a.createElement(x, {
				href: "https://www.reddit.com/topics/a-1/"
			}, E._("Topics", null, {
				hk: "349RFt"
			}))), !!d.b[e.countryCode] && s.a.createElement(s.a.Fragment, null, s.a.createElement(x, {
				href: "https://www.redditinc.com/de/policies/user-agreement"
			}, E._("Impressum", null, {
				hk: "4cKXSI"
			})), s.a.createElement(x, {
				href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
			}, E._("Transparency report", null, {
				hk: "3CgBdG"
			})), s.a.createElement(x, {
				href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
				className: C.a.NoneCapitalizeLink
			}, E._("Report NetzDG Content", null, {
				hk: "1nszCF"
			})))), s.a.createElement("div", {
				className: C.a.Column
			}, s.a.createElement(x, {
				href: "https://about.reddit.com"
			}, E._("about", null, {
				hk: "1sqJKs"
			})), s.a.createElement(x, {
				href: "https://about.reddit.com/careers/"
			}, E._("careers", null, {
				hk: "26ABvc"
			})), s.a.createElement(x, {
				href: "https://about.reddit.com/press/"
			}, E._("press", null, {
				hk: "2Qmgdz"
			})), s.a.createElement(x, {
				href: "https://www.redditinc.com/advertising"
			}, E._("advertise", null, {
				hk: "Mt40U"
			})), s.a.createElement(x, {
				href: "http://www.redditblog.com/"
			}, E._("blog", null, {
				hk: "46IQJw"
			})), s.a.createElement(x, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, E._("Terms", null, {
				hk: "4qRzfE"
			})), s.a.createElement(x, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, E._("Content policy", null, {
				hk: "1DyxZS"
			})), s.a.createElement(x, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, E._("Privacy policy", null, {
				hk: "10K04G"
			})), s.a.createElement(x, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, E._("Mod policy", null, {
				hk: "2gYc2T"
			})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && s.a.createElement("div", {
				className: C.a.CountryLinkContainer
			}, s.a.createElement("div", {
				className: C.a.Column
			}, s.a.createElement(x, {
				href: "/",
				onClick: () => e.sendEvent(Object(p.a)("en"))
			}, E._("USA/Global", null, {
				hk: "3nQepG"
			}))), s.a.createElement("div", {
				className: C.a.Column
			}, s.a.createElement(x, {
				href: "/de/",
				onClick: () => e.sendEvent(Object(p.a)("de"))
			}, E._("Deutsch", null, {
				hk: "31zojm"
			})))), s.a.createElement("div", {
				className: C.a.Copyright
			}, E._("Reddit Inc © {year}. All rights reserved", [E._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", s.a)
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends s.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return s.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var i = Object(r.a)(a);
			t.a = e => s.a.createElement(i, e)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less": function(e, t, n) {
			e.exports = {
				FormNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				formNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				disabled: "_2omjYUqCweNidaShU2H5EC",
				DragCard: "ygS6b189jD1GHwzotinJB",
				dragCard: "ygS6b189jD1GHwzotinJB",
				isOverAndCanDrop: "_3_GRCa3UIhqQ68fvB00PLZ",
				isDragging: "_2yg01oNjKP8Gcb4HPjf58k"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
					disabled: e,
					...t
				}) => s.a.createElement("div", c({}, t, {
					className: Object(r.a)(i.a.FormNavElement, {
						[i.a.disabled]: e
					})
				}), t.children),
				d = ({
					canDrop: e,
					className: t,
					isDragging: n,
					isOver: o,
					disabled: a,
					...l
				}) => s.a.createElement("div", c({}, l, {
					className: Object(r.a)(i.a.DragCard, {
						[i.a.disabled]: a,
						[i.a.isDraffing]: n,
						[i.a.isOverAndCanDrop]: o && e
					}, t)
				}))
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, n) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return w
			}));
			var o = n("./src/lib/isUrl/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				d = n("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = n("./src/reddit/controls/ContentType/index.tsx"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				h = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/models/Theme/index.ts"),
				f = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/telemetry/models/Outbound.ts"),
				C = n("./src/reddit/components/Thumbnail/index.m.less"),
				E = n.n(C);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = e => e.placeholderImage || Object(f.a)(e).placeholderImage,
				v = e => e.placeholderImage ? "cover" : Object(f.a)(e).placeholderImagePosition,
				O = c.a.span("LinkText", E.a),
				y = ({
					className: e,
					onClick: t,
					children: n
				}) => r.a.createElement("div", {
					onClick: t,
					className: Object(a.a)(E.a.linkIcon, e)
				}, n),
				k = e => r.a.createElement("img", {
					alt: e.alt,
					className: Object(a.a)(E.a.hiddenImage, e.className)
				}),
				j = e => {
					const t = r.a.createRef(),
						{
							src: n,
							errorSrc: o
						} = e;
					return n && o && Object(d.a)(n).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${o})`)
					}), r.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(a.a)(E.a.thumbnail, E.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(f.a)(e).button : Object(f.a)(e).line
						}
					}, e.isOutbound && r.a.createElement(y, {
						className: e.linkIconClassName
					}, r.a.createElement(p.a, {
						className: Object(a.a)(E.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && r.a.createElement(O, {
						className: e.linkTextClassName
					}, e.text)), r.a.createElement(k, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				S = e => e.isOutbound ? Object(f.a)(e).button : e.placeholderImage ? "transparent" : Object(f.a)(e).line,
				T = e => {
					const t = _(e),
						n = t && {
							background: Object(b.g)(Object(f.a)(e).placeholder, t, v(e))
						};
					return r.a.createElement("div", {
						className: Object(a.a)(E.a.thumbnail, E.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...n,
							borderColor: S(e)
						}
					}, (!e.placeholderImage || e.showContentType) && r.a.createElement(u.a, {
						className: Object(a.a)(e.contentTypeClassName, E.a.contentType, {
							[E.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && r.a.createElement(y, {
						className: e.linkIconClassName
					}, r.a.createElement(p.a, {
						className: Object(a.a)(E.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && r.a.createElement(O, {
						className: e.linkTextClassName
					}, e.text)))
				},
				P = e => r.a.createElement(j, x({}, e, {
					className: Object(a.a)(E.a.blurredThumbnail, e.className)
				})),
				I = Object(i.a)(e => {
					const {
						className: t,
						containerClassName: n,
						contentTypeClassName: s,
						crosspost: i,
						forceShowNSFW: c,
						isCommentsPage: l,
						isMeta: d,
						linkIconClassName: u,
						linkTextClassName: p,
						outboundLinkIconClassName: b,
						post: f,
						redditStyle: C,
						removeLink: x,
						showContentType: v,
						templatePlaceholderImage: O,
						text: y,
						theme: k,
						usePreview: j
					} = e, S = !k.subredditContext.shouldShowNSFWContent && (f.isNSFW || !(!i || !i.isNSFW)) && !c, T = _({
						placeholderImage: O,
						redditStyle: C,
						theme: k
					}), P = w(e), I = l ? g.SourceElement.PostImage : g.SourceElement.ListingPostImage, N = D(f, t, T, S, y, k, P, d, v, x, C, u, p, b, s), M = Object(h.D)(f);
					return Object(o.a)(M) && !x && M.indexOf("redditmedia") < 0 ? r.a.createElement("div", {
						className: Object(a.a)(E.a.container, j ? E.a.usePreview : "", n)
					}, r.a.createElement(m.b, {
						href: Object(h.D)(f),
						isSponsored: f.isSponsored,
						postId: f.id,
						source: f.source,
						sourceElement: I
					}, N)) : r.a.createElement("div", {
						className: Object(a.a)(E.a.container, j ? E.a.usePreview : "", n)
					}, N)
				}),
				w = ({
					crosspost: e,
					post: t,
					url: n,
					usePreview: o
				}) => {
					if (n) return n;
					const {
						preview: s,
						media: r,
						thumbnail: a
					} = e || t;
					return o && s ? s.url : t.isSponsored && s && "default" === a.url ? s.url : N(r) ? r.scrubberThumbSource : a.url
				},
				N = e => !!e && e.type === h.o.LIVEVIDEO,
				D = (e, t, n, s, i, c, d, u, m, p, h, b, f, g, C) => {
					const _ = (e => e.source && !e.isSponsored || !1)(e);
					if (Object(o.a)(d)) {
						const n = N(e.media),
							o = n ? {
								errorSrc: l.U
							} : {},
							u = Object(a.a)(t, {
								[E.a.verticallyCenterThumbnail]: n
							});
						return s ? r.a.createElement(P, x({
							"data-click-id": "image",
							src: d
						}, o, {
							className: u,
							isOutbound: _ && !p,
							linkIconClassName: b,
							linkTextClassName: f,
							outboundLinkIconClassName: g,
							redditStyle: h,
							text: i,
							theme: c
						})) : r.a.createElement(j, x({
							alt: e.title,
							className: u,
							src: d
						}, o, {
							isOutbound: _ && !p,
							linkIconClassName: b,
							linkTextClassName: f,
							outboundLinkIconClassName: g,
							redditStyle: h,
							text: i,
							theme: c
						}))
					}
					return r.a.createElement(T, {
						className: t,
						contentTypeClassName: C,
						placeholderImage: n,
						isMeta: u,
						isOutbound: _ && !p,
						linkIconClassName: b,
						linkTextClassName: f,
						outboundLinkIconClassName: g,
						redditStyle: h,
						showContentType: m,
						text: i,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = I
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				h = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(i.c)({
					currentUser: l.k,
					isNightMode: l.bb,
					isPresenceUserPrefEnabled: l.T,
					shouldHideNSFW: l.E
				}),
				g = Object(a.b)(f);
			t.a = g(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: s,
					wrapperClassName: a,
					...i
				} = e, l = Object(c.b)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(o.a)(h.a.currentUserIconWrapper, a)
				}, l ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, b({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(d.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "JoWBeMWu_l8J_Hn6Udz_j",
				dropdownRow: "JoWBeMWu_l8J_Hn6Udz_j"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/noop.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/postCollection/index.ts"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/OverflowMenu/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/postCollection.ts"),
				E = n("./node_modules/reselect/es/index.js"),
				x = n("./src/reddit/helpers/trackers/postCollection.ts"),
				_ = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				v = n.n(_),
				O = n("./node_modules/fbt/lib/FbtPublic.js");
			const y = l.a.wrapped(f.b, "DropdownRow", v.a);
			let k;
			const j = Object(g.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				S = Object(g.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				T = Object(E.c)({
					createPostUrl: C.d,
					isDeleteConfirmModalOpen: j,
					isEditCollectionModalOpen: S,
					shouldShowCollectionEditOptions: C.s
				}),
				P = Object(i.b)(T, (e, t) => ({
					copyLink: () => e(Object(u.D)(t.permalink)),
					onCreatePost: n => {
						t.shouldShowCreatePost && e(Object(c.b)(n))
					},
					onRemoveCollection: () => e(Object(m.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(d.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						k || (k = await Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("editCollectionModal")]).then(n.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(d.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = P(Object(b.c)(e => {
				const {
					className: t,
					collectionId: n,
					copyLink: o,
					createPostUrl: r,
					isDeleteConfirmModalOpen: i,
					isEditCollectionModalOpen: c,
					onCreatePost: l,
					onRemoveCollection: d,
					onToggleDeleteConfirmModal: u,
					onToggleEditModal: m,
					shouldShowCollectionEditOptions: b,
					shouldShowCreatePost: f,
					targetPosition: g,
					tooltipPosition: C,
					sendEvent: E
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(h.b, {
					className: t,
					dropdownId: `collection-menu-${n}-${f?1:2}`,
					onClick: s.a,
					targetPosition: g,
					tooltipPosition: C
				}, a.a.createElement(y, {
					onClick: o,
					displayText: O.fbt._("Copy collection link", null, {
						hk: "3Rfodz"
					})
				}), b && a.a.createElement(a.a.Fragment, null, a.a.createElement(y, {
					onClick: () => {
						E(Object(x.l)(n)), m()
					},
					displayText: O.fbt._("Edit", null, {
						hk: "1nftDt"
					})
				}), a.a.createElement(y, {
					onClick: () => {
						E(Object(x.k)(n)), u()
					},
					displayText: O.fbt._("Delete collection", null, {
						hk: "2FyIJB"
					})
				}), f && a.a.createElement(y, {
					onClick: () => {
						l(r)
					},
					displayText: O.fbt._("Create post", null, {
						hk: "1v2jHl"
					})
				}))), c && k && a.a.createElement(k, {
					collectionId: n,
					onClose: m,
					onEditSuccess: m
				}), i && a.a.createElement(p.a, {
					actionText: O.fbt._("Yes, Delete", null, {
						hk: "15Espn"
					}),
					headerText: O.fbt._("Delete Collection", null, {
						hk: "1QJ3as"
					}),
					modalText: O.fbt._("Are you sure you want to delete this collection? The posts within the collection won't be deleted.", null, {
						hk: "36jKp5"
					}),
					onConfirm: d,
					toggleModal: u,
					trackClick: s.a
				}))
			}))
		},
		"./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_135f7-HhEMvekPzYxVBaFE",
				activeItemIndicator: "_31zbCRopTPo2NGtlgVsrBX",
				metaLine: "_1OrlyQwYIehGSk4bhP_l2R",
				title: "_2jvQA1RLlcCLU44q6eB3g0"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownRow: "_3V8ByF4idIiROiWQ9i468R",
				dropdownRow: "_3V8ByF4idIiROiWQ9i468R"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/opener/index.ts"),
				d = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				u = n("./src/reddit/components/OverflowMenu/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/Row.tsx"),
				p = n("./src/reddit/helpers/path/index.ts"),
				h = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				b = n.n(h);
			const f = c.a.wrapped(m.b, "DropdownRow", b.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: n,
					onEditStartTime: s,
					onStartEventNow: a,
					postPermalink: c,
					shouldShowAddEventStartTime: m,
					targetPosition: h,
					tooltipPosition: b
				} = e;
				return i.a.createElement(u.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: r.a,
					targetPosition: h,
					tooltipPosition: b
				}, m && n && i.a.createElement(f, {
					onClick: n,
					displayText: o.fbt._("Add event start time", null, {
						hk: "4xWttR"
					})
				}), t && a && i.a.createElement(f, {
					onClick: a,
					displayText: o.fbt._("Start event now", null, {
						hk: "2TTNfJ"
					})
				}), t && s && i.a.createElement(f, {
					onClick: s,
					displayText: o.fbt._("Edit start time", null, {
						hk: "44XUxC"
					})
				}), i.a.createElement(f, {
					onClick: e.onRemoveClick,
					displayText: o.fbt._("Remove from collection", null, {
						hk: "qsiiu"
					})
				}), c && i.a.createElement(d.a, {
					target: l.d.BLANK,
					rel: l.c,
					isOverlay: !1,
					to: Object(p.b)(c)
				}, i.a.createElement(f, {
					displayText: o.fbt._("View post", null, {
						hk: "1PtvnG"
					})
				})))
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less": function(e, t, n) {
			e.exports = {
				Container: "I9mI9NePKM1BEsmfZR-6H",
				container: "I9mI9NePKM1BEsmfZR-6H",
				Content: "_6d8yyfLZcJ1OXLzEXoApB",
				content: "_6d8yyfLZcJ1OXLzEXoApB",
				Title: "_1efKScSk4JSYvERdEecZnZ",
				title: "_1efKScSk4JSYvERdEecZnZ",
				Secondary: "_3fCsv_r4CtfCTdAzBRaR9N",
				secondary: "_3fCsv_r4CtfCTdAzBRaR9N"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less": function(e, t, n) {
			e.exports = {
				container: "ceAYEjQdznT14GrQQ52QV",
				content: "_36S4oraLw5gf--rC9-aWZs",
				overflowMenu: "MiZ0gbh9xe5Yiwt3RQf2o",
				metaLine: "_2JVAK9jCDOKkFXe1XS6gwH",
				title: "_2U-RjfXG1sY-NtByFOS-uC"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3_XzG2WCa3EYhqzE_vUcMN",
				topRow: "r_Dz4suUXbQkBdwR-eQ77",
				collectionDescription: "_3K3iJQYRdF3d2n1WlPxkpr",
				listContainer: "_2K8wDNk-kaP5gX-QEAXuMc",
				listWrapper: "VYYQfc9_vtbBaR47zbXdB",
				menuButton: "_1BX9a5jz4LWzuQohy4Cvz4"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				d = n("./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less"),
				u = n.n(d);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = Object(c.c)({
				title: l.rb
			});
			var h = Object(i.b)(p)(e => {
					const {
						title: t
					} = e;
					return s.a.createElement("div", {
						className: u.a.container
					}, s.a.createElement("div", {
						className: u.a.activeItemIndicator
					}), t && s.a.createElement("h2", {
						className: u.a.title
					}, t), s.a.createElement("div", {
						className: u.a.metaLine
					}, m._("Editing", null, {
						hk: "2w5fAf"
					})))
				}),
				b = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				f = n("./src/reddit/actions/postCollection/index.ts"),
				g = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/components/HumanDate/index.tsx"),
				x = n("./src/lib/constants/index.ts"),
				_ = n("./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less"),
				v = n.n(_),
				O = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				y = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				k = n("./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less"),
				j = n.n(k);

			function S({
				className: e,
				isLoading: t
			}) {
				const n = Object(y.a)({
					isLoading: t
				});
				return s.a.createElement("div", {
					className: Object(r.a)(j.a.Container, e)
				}, s.a.createElement("div", {
					className: j.a.Content
				}, s.a.createElement("div", {
					className: Object(r.a)(j.a.Title, n)
				}), s.a.createElement("div", {
					className: Object(r.a)(j.a.Secondary, n)
				})))
			}
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js"), P = ["right", "bottom"], I = ["right", "top"];
			var w = Object(i.b)(() => Object(c.c)({
					post: C.G
				}), (e, t) => ({
					onRemovePostFromCollection: () => e(Object(f.g)(t.collectionId, t.postId))
				}))(e => {
					const {
						post: t,
						onRemovePostFromCollection: n
					} = e;
					return t ? s.a.createElement("div", {
						className: v.a.container
					}, s.a.createElement("div", {
						className: v.a.content
					}, s.a.createElement(b.a, {
						className: v.a.title,
						target: "_blank",
						to: Object(g.b)(t.permalink)
					}, t.title), s.a.createElement("div", {
						className: v.a.metaLine
					}, T._("Posted · {timeAgo}", [T._param("timeAgo", s.a.createElement(E.d, {
						seconds: t.created / x.Sb
					}))], {
						hk: "ZVJpV"
					}))), s.a.createElement(O.a, {
						onRemoveClick: n,
						className: v.a.overflowMenu,
						dropdownId: "collection-widget-item" + t.id,
						postPermalink: t.permalink,
						targetPosition: P,
						tooltipPosition: I
					})) : s.a.createElement(S, {
						className: v.a.container,
						isLoading: !0
					})
				}),
				N = n("./src/reddit/components/Widgets/PostCollection/index.m.less"),
				D = n.n(N);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = ["right", "bottom"], L = ["right", "top"];
			class F extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.renderItem = (e, t) => s.a.createElement(w, {
						collectionId: this.props.collection.id,
						key: e,
						postId: e
					})
				}
				render() {
					const {
						className: e,
						collection: t
					} = this.props, n = t.postIds.map(this.renderItem).reverse();
					return s.a.createElement("div", {
						className: Object(r.a)(e, D.a.container)
					}, s.a.createElement("div", {
						className: D.a.topRow
					}, M._("Collection", null, {
						hk: "1pY1s2"
					}), s.a.createElement(a.a, {
						className: D.a.menuButton,
						collectionId: t.id,
						isSubmitPage: !0,
						permalink: t.permalink,
						targetPosition: R,
						tooltipPosition: L
					})), s.a.createElement("h4", {
						className: D.a.collectionDescription
					}, t.title), s.a.createElement("div", {
						className: D.a.listWrapper
					}, s.a.createElement("div", {
						className: D.a.listContainer
					}, n)), s.a.createElement(h, null))
				}
			}
			t.a = F
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				cleanStyle: "_12zeaxHNQC7XniG1qunPev",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/components/RichTextJson/index.tsx"),
				u = n("./src/reddit/helpers/dom/index.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				h = n("./src/reddit/models/Widgets/index.ts"),
				b = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				f = n.n(b);
			const g = c.a.div("RuleShortName", f.a),
				C = c.a.div("RuleIndex", f.a),
				E = c.a.div("RuleTitle", f.a),
				x = c.a.div("RuleDescription", f.a),
				_ = c.a.wrapped(l.a, "RawHTMLDisplay", f.a),
				v = {};
			class O extends r.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(u.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === h.h.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: o
					} = this, s = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !o(e) && !!s;
					return r.a.createElement(g, {
						className: Object(i.a)({
							[f.a.pointerCursor]: a,
							[f.a.cleanStyle]: e.cleanStyle
						}),
						onClick: o(e) || !s ? void 0 : n
					}, r.a.createElement(p.a, null, r.a.createElement(C, {
						className: Object(i.a)({
							[f.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), r.a.createElement(E, null, `${e.rule.shortName}`), r.a.createElement("div", null, !o(e) && s && r.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && r.a.createElement(x, {
						className: Object(i.a)({
							[f.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? r.a.createElement(d.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: v
					}) : e.rule.descriptionHtml ? r.a.createElement(_, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const y = e => e.rules.length > 0 ? r.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: o.fbt._("{subredditName} Rules", [o.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, n) {
				return r.a.createElement(O, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: n + 1
				})
			}))) : null;
			t.b = e => r.a.createElement(y, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/components/SEOTitle/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/models/Theme/index.ts"),
				E = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const x = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(E.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(E.a)(e).widgetColors.sidebarWidgetHeaderColor,
				v = e => {
					const t = x(e);
					return Object(C.f)(t)
				},
				O = e => {
					const t = _(e);
					return Object(C.f)(t)
				};
			var y = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = n.n(y);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = Object(u.u)(), T = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						o = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						s = Object(g.bb)(e);
					return o || s
				},
				nigtmode: g.bb,
				subredditId: u.n,
				topPostVariant: b.d
			}));
			class P extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = x(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = v(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = _(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: o,
						headerButton: r,
						id: a,
						onClick: c,
						onHeaderClick: d,
						title: u,
						titleClassName: p,
						truncateThreshold: h
					} = this.props, b = n ? k.a.widgetContentOnly : k.a.widgetContent, f = !o && this.props.styles, g = f ? this.getWidgetBackgroundStyles() : {}, C = f ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(i.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: o,
							[k.a.clickable]: !!c,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": o,
						onClick: c,
						style: g
					}, u && s.a.createElement("div", {
						className: Object(i.a)(k.a.widgetHeader, {
							[k.a.clickable]: !!d
						}),
						id: a,
						style: C,
						onClick: d
					}, s.a.createElement("div", {
						className: Object(i.a)(k.a.widgetTitle, p)
					}, s.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), r), s.a.createElement("div", {
						className: Object(i.a)(b, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.r, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(T(Object(c.a)(Object(d.c)(P))))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = Object(s.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(o.b)(l, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(r.h)(t))
			}))
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			}));
			const o = "comment",
				s = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				a = "comments-page-link-num-comments",
				i = "post-content"
		},
		"./src/reddit/constants/location.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/redditGQL/types.ts");
			const s = {
					ZZ: "No country identified",
					XZ: "No country identified",
					AF: "Afghanistan",
					AX: "Aland Islands",
					AL: "Albania",
					DZ: "Algeria",
					AS: "American Samoa",
					AD: "Andorra",
					AO: "Angola",
					AI: "Anguilla",
					AQ: "Antarctica",
					AG: "Antigua and Barbuda",
					AR: "Argentina",
					AM: "Armenia",
					AW: "Aruba",
					AU: "Australia",
					AT: "Austria",
					AZ: "Azerbaijan",
					BS: "Bahamas",
					BH: "Bahrain",
					BD: "Bangladesh",
					BB: "Barbados",
					BY: "Belarus",
					BE: "Belgium",
					BZ: "Belize",
					BJ: "Benin",
					BM: "Bermuda",
					BT: "Bhutan",
					BO: "Bolivia",
					BQ: "Bonaire, Sint Eustatius and Saba",
					BA: "Bosnia and Herzegovina",
					BW: "Botswana",
					BV: "Bouvet Island",
					BR: "Brazil",
					IO: "British Indian Ocean Territory",
					BN: "Brunei Darussalam",
					BG: "Bulgaria",
					BF: "Burkina Faso",
					BI: "Burundi",
					KH: "Cambodia",
					CM: "Cameroon",
					CA: "Canada",
					CV: "Cape Verde",
					KY: "Cayman Islands",
					CF: "Central African Republic",
					TD: "Chad",
					CL: "Chile",
					CX: "Christmas Island",
					CC: "Cocos (Keeling) Islands",
					CO: "Colombia",
					KM: "Comoros",
					CG: "Congo, Republic of the",
					CD: "Congo, The Democratic Republic of the",
					CK: "Cook Islands",
					CR: "Costa Rica",
					CI: "Cote d'Ivoire",
					HR: "Croatia",
					CU: "Cuba",
					CW: "Curacao",
					CY: "Cyprus",
					CZ: "Czech Republic",
					DK: "Denmark",
					DJ: "Djibouti",
					DM: "Dominica",
					DO: "Dominican Republic",
					EC: "Ecuador",
					EG: "Egypt",
					SV: "El Salvador",
					GQ: "Equatorial Guinea",
					ER: "Eritrea",
					EE: "Estonia",
					SZ: "Eswatini",
					ET: "Ethiopia",
					FK: "Falkland Islands (Malvinas)",
					FO: "Faroe Islands",
					FJ: "Fiji",
					FI: "Finland",
					FR: "France",
					GF: "French Guiana",
					PF: "French Polynesia",
					TF: "French Southern Territories",
					GA: "Gabon",
					GM: "Gambia",
					GE: "Georgia",
					DE: "Germany",
					GH: "Ghana",
					GI: "Gibraltar",
					GR: "Greece",
					GL: "Greenland",
					GD: "Grenada",
					GP: "Guadeloupe",
					GU: "Guam",
					GT: "Guatemala",
					GG: "Guernsey",
					GN: "Guinea",
					GW: "Guinea-Bissau",
					GY: "Guyana",
					HT: "Haiti",
					HM: "Heard Island and McDonald Islands",
					HN: "Honduras",
					HK: "Hong Kong",
					HU: "Hungary",
					IS: "Iceland",
					IN: "India",
					ID: "Indonesia",
					IR: "Iran",
					IQ: "Iraq",
					IE: "Ireland",
					IM: "Isle of Man",
					IL: "Israel",
					IT: "Italy",
					JM: "Jamaica",
					JP: "Japan",
					JE: "Jersey",
					JO: "Jordan",
					KZ: "Kazakhstan",
					KE: "Kenya",
					KI: "Kiribati",
					XK: "Kosovo",
					KW: "Kuwait",
					KG: "Kyrgyzstan",
					LA: "Laos",
					LV: "Latvia",
					LB: "Lebanon",
					LS: "Lesotho",
					LR: "Liberia",
					LY: "Libya",
					LI: "Liechtenstein",
					LT: "Lithuania",
					LU: "Luxembourg",
					MO: "Macao",
					MK: "Macedonia",
					MG: "Madagascar",
					MW: "Malawi",
					MY: "Malaysia",
					MV: "Maldives",
					ML: "Mali",
					MT: "Malta",
					MH: "Marshall Islands",
					MQ: "Martinique",
					MR: "Mauritania",
					MU: "Mauritius",
					YT: "Mayotte",
					MX: "Mexico",
					FM: "Micronesia",
					MD: "Moldova",
					MC: "Monaco",
					MN: "Mongolia",
					ME: "Montenegro",
					MS: "Montserrat",
					MA: "Morocco",
					MZ: "Mozambique",
					MM: "Myanmar",
					NA: "Namibia",
					NR: "Nauru",
					NP: "Nepal",
					NL: "Netherlands",
					NC: "New Caledonia",
					NZ: "New Zealand",
					NI: "Nicaragua",
					NE: "Niger",
					NG: "Nigeria",
					NU: "Niue",
					NF: "Norfolk Island",
					MP: "Northern Mariana Islands",
					NO: "Norway",
					OM: "Oman",
					PK: "Pakistan",
					PW: "Palau",
					PS: "Palestinian Territory",
					PA: "Panama",
					PG: "Papua New Guinea",
					PY: "Paraguay",
					PE: "Peru",
					PH: "Philippines",
					PN: "Pitcairn",
					PL: "Poland",
					PT: "Portugal",
					PR: "Puerto Rico",
					QA: "Qatar",
					RE: "Reunion",
					RO: "Romania",
					RU: "Russia",
					RW: "Rwanda",
					BL: "Saint Barthelemey",
					SH: "Saint Helena",
					KN: "Saint Kitts and Nevis",
					LC: "Saint Lucia",
					MF: "Saint Martin",
					PM: "Saint Pierre and Miquelon",
					VC: "Saint Vincent and the Grenadines",
					WS: "Samoa",
					SM: "San Marino",
					ST: "Sao Tome and Principe",
					SA: "Saudi Arabia",
					SN: "Senegal",
					RS: "Serbia",
					SC: "Seychelles",
					SL: "Sierra Leone",
					SG: "Singapore",
					SX: "Sint Maarten",
					SK: "Slovakia",
					SI: "Slovenia",
					SB: "Solomon Islands",
					SO: "Somalia",
					ZA: "South Africa",
					GS: "South Georgia and the South Sandwich Islands",
					KR: "South Korea",
					SS: "South Sudan",
					ES: "Spain",
					LK: "Sri Lanka",
					SD: "Sudan",
					SR: "Suriname",
					SJ: "Svalbard and Jan Mayen",
					SE: "Sweden",
					CH: "Switzerland",
					SY: "Syria",
					TW: "Taiwan",
					TJ: "Tajikistan",
					TZ: "Tanzania",
					TH: "Thailand",
					TL: "Timor-Leste",
					TG: "Togo",
					TK: "Tokelau",
					TO: "Tonga",
					TT: "Trinidad and Tobago",
					TN: "Tunisia",
					TR: "Turkey",
					TM: "Turkmenistan",
					TC: "Turks and Caicos Islands",
					TV: "Tuvalu",
					UG: "Uganda",
					UA: "Ukraine",
					AE: "United Arab Emirates",
					GB: "United Kingdom",
					US: "United States",
					UM: "United States Minor Outlying Islands",
					UY: "Uruguay",
					UZ: "Uzbekistan",
					VU: "Vanuatu",
					VA: "Vatican City (Holy See)",
					VE: "Venezuela",
					VN: "Vietnam",
					VG: "Virgin Islands, British",
					VI: "Virgin Islands, U.S.",
					WF: "Wallis and Futuna",
					EH: "Western Sahara",
					YE: "Yemen",
					ZM: "Zambia",
					ZW: "Zimbabwe",
					XX: "Other country"
				},
				r = {
					[o.e.De]: s[o.e.De],
					[o.e.At]: s[o.e.At]
				}
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			}));
			const o = "PostCreation-AddEventButton",
				s = 500,
				r = "PostCreation-CollectionEducationTooltip",
				a = "PostCreation-EventEducationTooltip",
				i = 300,
				c = i,
				l = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, n) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				d = n.n(l);
			t.a = e => s.a.createElement(c.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(r.a)(e.className, d.a.checkboxInput, e.disabled ? d.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, s.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? s.a.createElement(i.a, {
				className: d.a.checkboxSelected
			}) : s.a.createElement(a.a, null), e.children)
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, n) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/ContentType/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/icons.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/controls/ContentType/index.m.less"),
				d = n.n(l);
			const u = e => Object(r.a)(d.a.contentTypeIcon, e.className),
				m = {
					embed: a.a.embed,
					gallery: a.a.media_gallery,
					gifvideo: a.a.gif_post,
					image: a.a.image_post,
					meta: a.a.poll_post,
					rpan: a.a.video_live,
					rtjson: a.a.text_post,
					text: a.a.text_post,
					video: a.a.video_post,
					liveaudio: a.a.audio
				};

			function p(e) {
				const t = u(e),
					n = e.type && m[e.type] || a.a.link_post;
				return s.a.createElement(i.a, {
					name: n,
					className: Object(r.a)({
						[c.a]: n === a.a.link_post
					}, t)
				})
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(s),
				a = n("./node_modules/raf/index.js"),
				i = n.n(a),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = n.n(h);
			var f = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return l.a.createElement("div", {
						className: b.a.wrapper
					}, l.a.createElement(p.a, {
						className: b.a.titleRow
					}, n), l.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), l.a.createElement(p.a, {
						className: b.a.buttonRow
					}, l.a.createElement(m.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = n("./src/reddit/controls/ErrorText/index.m.less"),
				C = n.n(g);
			class E extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: n,
						errorModalTitle: s = o.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = o.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: a,
						isModalOpen: i
					} = this.state;
					return l.a.createElement("div", {
						className: Object(d.a)(C.a.wrapper, t)
					}, l.a.createElement("span", {
						className: C.a.description,
						ref: this.spanRef
					}, e), a && l.a.createElement("span", {
						className: C.a.moreText,
						onClick: this.toggleModal
					}, r), i && l.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: s
					}, n || e))
				}
			}
			const x = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: o,
						fallbackMessage: s,
						messages: r = []
					} = e, a = r.length ? r : s ? [s] : [];
					return a.length ? l.a.createElement("div", {
						className: t
					}, a.map((e, t) => l.a.createElement(E, {
						className: n,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				_ = e => l.a.createElement(x, {
					fallbackMessage: o.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = E
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/flow.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-dnd/lib/index.js"),
				c = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = n("./src/reddit/helpers/dragDropContext/index.ts");
			const d = c.NativeTypes.FILE,
				u = s()(Object(i.DropTarget)(d, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), l.a);
			class m extends a.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(a.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(m)
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = a.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: o,
						className: a,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, s.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: o
					}, i)), e.label && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: o,
						isInvalid: a,
						className: i,
						redditStyle: c,
						...l
					} = e, d = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, s.a.createElement(p, m({
						innerRef: o
					}, l)), e.label && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => s.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
					className: u.a.plus
				}));
			var C;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(C || (C = {}));
			class E extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: C.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: C.REMOVE,
							value: n,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: n,
						placeholder: o,
						errors: r = []
					} = this.props;
					return e.map((e, a) => s.a.createElement(b, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!r[a],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, a),
						placeholder: o,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, s.a.createElement(l.b, {
						className: u.a.trash
					})), !!r[a] && s.a.createElement(i.b, {
						className: u.a.errorText
					}, r[a])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: o,
						addValueText: a,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!o && n.length >= o) && !i;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && c && s.a.createElement(g, {
						onClick: this.addValue,
						text: a
					}))
				}
			}
		},
		"./src/reddit/controls/GrowingOutlinedInput/index.m.less": function(e, t, n) {
			e.exports = {
				growingOutlinedInput: "PqYQ3WC15KaceZuKcFI02"
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/constants/elementClassNames.ts"),
				r = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styles.m.less"),
				i = n.n(a);
			t.a = o.a.wrapped(r.b, "styledOutboundLink", {
				styledOutboundLink: `${i.a.styledOutboundLink} ${s.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, n) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/controls/PillButton/index.m.less": function(e, t, n) {
			e.exports = {
				buttonContent: "_1HZjnB8bOdf81CZAkyN--u",
				PostActionButton: "YfC3dzPFWzw5Uh7t4eyxX",
				postActionButton: "YfC3dzPFWzw5Uh7t4eyxX",
				hasChildren: "_3sJWr2xzgQoVrLxbXYMKMY",
				background: "_3LYd27k2O7QQ4CB0n5l7IN",
				dark: "_11omUhmjhXU71rMQXq6aUQ",
				nightmode: "_2u4At4RuG5uMjsOyaMMJf-",
				upvote: "n74nWMQQf9xC988xNT4Od",
				activated: "E_CLGFtNN90EX8GK9sLoc",
				downvote: "_3D7vLfQ-NjeRYo1ZkeKvV5",
				gold: "_1x7f7HYHYhd_oc-kQKIj0G",
				blue: "_1dkGQtTxIMonqw2p5jWSbs",
				approve: "NhkZC_8NIYGBrP6qpr3PO",
				remove: "U0T8jceDCBfr8JH93t7wD",
				buttonChildren: "_3SSQaDQCW4r6GrvCSg9opO",
				compact: "_2OVRjKU_PrPyp2RjgIaMmv",
				classic: "_12vyrBVZ9uMjEDwrAWWkNl"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, n) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/keycodes.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(d);
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== a.b.Enter && e.key !== a.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : s.a.createElement(l.a, {
						"aria-checked": e.selected,
						className: Object(r.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? s.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : s.a.createElement(i.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/constants/keycodes.ts");
			class a extends s.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props;
						t || this.state.value !== e && (n(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return s.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props, {
							value: o
						} = this.state;
						if (t) return;
						const s = e.key === r.b.ArrowUp,
							a = e.key === r.b.ArrowDown;
						if (s || a) {
							const t = this.getValues();
							if (!t.length) return;
							const r = o ? t.indexOf(o) : 0,
								a = t[((s ? r - 1 : r + 1) + t.length) % t.length];
							n(a), this.setState({
								value: a
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return s.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, s.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), s.a.Children.map(e.children, (n, o) => {
						const r = 0 === o,
							a = n.props.value === t,
							i = null !== t ? a ? 0 : -1 : r ? 0 : -1;
						return s.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: a,
							tabIndex: i
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/helpers/dragDropContext/index.ts"),
				a = n("./node_modules/lodash/flow.js"),
				i = n.n(a),
				c = n("./node_modules/react-dnd/lib/index.js");
			class l extends s.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? i()(e.connectDropTarget, e.connectDragSource)(s.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var d = i()(Object(c.DragSource)("card", {
				beginDrag: e => ({
					id: e.id,
					index: e.index
				}),
				endDrag: (e, t) => {
					if (t && t.didDrop()) {
						const n = t.getDropResult();
						e.onDrop(e.id, n.id)
					}
				}
			}, (e, t) => ({
				connectDragSource: e.dragSource(),
				isDragging: t.isDragging()
			})), Object(c.DropTarget)("card", {
				drop: (e, t) => {
					if (!t || !t.didDrop()) return {
						id: e.id,
						index: e.index
					}
				},
				canDrop: (e, t) => {
					if (!t) return !1;
					const n = t.getItem();
					return e.id !== n.id
				}
			}, (e, t) => ({
				connectDropTarget: e.dropTarget(),
				isOver: t.isOver(),
				canDrop: t.canDrop()
			})))(l);
			class u extends s.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(n => {
							const o = n.values.slice(),
								s = o.indexOf(e),
								r = o.splice(s, 1)[0];
							let a = o.indexOf(t);
							return s <= a && (a += 1), o.splice(a, 0, r), this.props.onDrop(e, t, o), {
								values: o
							}
						})
					}, this.state = {
						values: e.values
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						values: e.values
					}))
				}
				render() {
					const {
						className: e,
						getReactKey: t,
						onClick: n,
						render: o
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, this.state.values.map((e, r) => s.a.createElement(d, {
						id: e,
						key: t && t(e, r),
						index: r,
						render: o,
						onDrop: this.onDrop,
						onClick: n
					})))
				}
			}
			t.a = Object(r.a)(u)
		},
		"./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_1MHSX9NVr4C2QxH2dMcg4M",
				inputWrapper: "anPJr_ybRailY8NbAunl2",
				searchBar: "_3cWzf-usAKfGV1Ay7h2zM_",
				commonIconStyles: "_3UX5zf2Jh7UCwxr3e1Rrt2",
				dropdownIcon: "_15FJlGHQ_lg8wmnMsXlnes",
				iconEmpty: "_3adQsrepNO01e3sMjt2z0P",
				subredditRoundIcon: "jpIFeDw811_DQwlQEqBjm",
				userIcon: "_1Xb3_WGBJKTWZNy0MHWTsR",
				searchIcon: "_2MCEtCukiOUDUHF1PDgWwH",
				mDisabled: "I8Mbkr_v6UNBq2UjXD24r"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less": function(e, t, n) {
			e.exports = {
				entry: "_2_6Q3rlmltjQM8nEBoNJr-",
				disabled: "_1eGUunOsIyMkgTF3IiieVl"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less": function(e, t, n) {
			e.exports = {
				title: "-T-WBPEANCCRwTdAGSdj_",
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F",
				titleContainer: "_112QSSyLmEVry3hGjIPV--",
				titleText: "_3fpkz04m3VEANbACfYOR0H",
				srCreationButton: "_3ujvK82qZ7yzbpEffTiXH-"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2jjSvas2tvdAFgIvSzSBax",
				mDisabled: "_2PoEIlhFzgV0sUWfM40K-N",
				rowStyle: "_3DfMNtnkrzHeGN0WyUTTuX"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				subredditIcon: "vxu9qtznQ1Kvakd5mtfxV",
				main: "_11CAFoZ5ryUXHrO5iX6Ktk",
				title: "_1bEDlh2fhWPx9-h3IqUvFa",
				lockTitleWithEllipsis: "mFsxWzlvJHnXmu7_xaIzI",
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return v
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				c = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				l = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				d = n("./src/reddit/icons/svgs/Link/index.tsx"),
				u = n("./src/reddit/icons/svgs/TextPost/index.tsx"),
				m = n("./src/reddit/icons/svgs/Video/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				f = n.n(b);
			const g = [{
				type: "text",
				Icon: u.a
			}, {
				type: "images",
				Icon: l.a
			}, {
				type: "videos",
				Icon: m.a
			}, {
				type: "links",
				Icon: d.a
			}, {
				type: "talks",
				Icon: () => s.a.createElement(h.a, {
					name: "audio"
				})
			}];

			function C(e) {
				const {
					allowedPostTypes: t,
					className: n
				} = e;
				return s.a.createElement(p.a, {
					className: Object(r.a)(f.a.rowStyle, n)
				}, g.map(({
					type: e,
					Icon: n
				}, o) => s.a.createElement("div", {
					className: Object(r.a)(f.a.iconWrapper, {
						[f.a.mDisabled]: !t[e]
					}),
					key: o
				}, s.a.createElement(n, null))))
			}
			var E = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				x = n.n(E);
			const _ = a.a.wrapped(i.b, "subredditIcon", x.a);

			function v(e) {
				const {
					className: t,
					explanationText: n,
					highlight: o,
					icon: a,
					item: i,
					lockTitleWithEllipsis: l,
					onClick: d,
					secondaryText: u,
					subText: m,
					title: p
				} = e, {
					allowedPostTypes: h
				} = i;
				return s.a.createElement("div", {
					className: Object(r.a)(x.a.container, {
						[x.a.mHighlight]: o
					}, t),
					onClick: d
				}, a, s.a.createElement("div", {
					className: x.a.main
				}, s.a.createElement("span", {
					className: Object(r.a)(x.a.title, {
						[x.a.lockTitleWithEllipsis]: l
					})
				}, p), u && s.a.createElement("span", {
					className: x.a.secondary
				}, u, m && s.a.createElement(s.a.Fragment, null, s.a.createElement(c.a, null), s.a.createElement("span", {
					className: x.a.secondary
				}, m))), n && s.a.createElement("span", {
					className: x.a.secondary
				}, n)), o && h && s.a.createElement(C, {
					allowedPostTypes: h
				}))
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "C_XJ2ZB_b9iAPcFCHr4SW",
				title: "_1qKkNpHiC5Vgwbp0N8pOiG",
				contentWrapper: "_2l-m9MtS29tOlexExTlpXo",
				spinner: "_3rJ_SLWBH_jxAMlgNkciE9",
				itemWrapper: "Tx6TtQK3xJ9F5qpQlrEHT"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return _
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/postCreation/general.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/helpers/trackers/postComposer.ts"),
				p = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				f = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx"),
				g = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.m.less"),
				C = n.n(g);
			const E = e => {
					const {
						items: t,
						itemWrapperClassName: n,
						isRedditRec: a,
						onSelectRecommendation: i,
						shouldShowSubredditOnlineUsers: l = !1
					} = e, u = Object(h.a)(), b = Object(s.useCallback)((e, t) => {
						u(Object(m.w)(e, t))
					}, []), g = Object(s.useRef)(null), E = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && u(Object(m.v)())
						})
					}, []);
					return Object(p.a)(g, E), r.a.createElement(r.a.Fragment, null, t.map((e, t) => r.a.createElement("div", {
						className: Object(c.a)(C.a.itemWrapper, n),
						key: e.name
					}, r.a.createElement(d.a, {
						subredditName: e.name,
						shouldOpenNewTabOnClicks: !0,
						onShow: () => b(e.name, t)
					}, r.a.createElement(f.a, {
						item: e,
						highlight: !1,
						shouldPrettyPrint: !0,
						explanationText: a ? o.fbt._("based on your subscription", null, {
							hk: "3Hb2XK"
						}) : o.fbt._("based on your content", null, {
							hk: "3u8Nrt"
						}),
						onClick: () => {
							i(e), u(Object(m.u)(e.name, t))
						},
						lockTitleWithEllipsis: !0,
						shouldShowSubredditOnlineUsers: l
					})))), r.a.createElement("span", {
						ref: g,
						key: "recommended-render"
					}))
				},
				x = e => {
					const {
						contentWrapperClassName: t,
						hasData: n,
						isPending: o,
						isRedditRec: s,
						items: a,
						itemWrapperClassName: i,
						onSelectRecommendation: c,
						shouldShowSubredditOnlineUsers: l = !1
					} = e;
					return r.a.createElement("div", {
						className: t
					}, o && r.a.createElement(u.a, {
						sizePx: 30,
						className: C.a.spinner
					}), n && !o && r.a.createElement(E, {
						isRedditRec: s,
						items: a,
						itemWrapperClassName: i,
						onSelectRecommendation: c,
						shouldShowSubredditOnlineUsers: l
					}))
				},
				_ = e => {
					const t = Object(a.d)(),
						{
							isPending: n,
							hasData: c,
							isChanged: d,
							items: u,
							isRedditRec: m
						} = Object(a.e)(Object(i.c)({
							isPending: b.i,
							hasData: b.c,
							isChanged: b.d,
							items: b.b,
							isRedditRec: b.j
						}));
					return Object(s.useEffect)(() => {
						d && t(Object(l.k)())
					}, [d, t]), r.a.createElement("div", {
						className: C.a.wrapper,
						onMouseDown: e.onContainerMouseDown
					}, r.a.createElement("div", {
						className: C.a.title
					}, o.fbt._("Suggested communities", null, {
						hk: "4BebuH"
					})), r.a.createElement(x, {
						contentWrapperClassName: C.a.contentWrapper,
						hasData: c,
						isPending: n,
						isRedditRec: m,
						items: u,
						onSelectRecommendation: e.onSelectRecommendation
					}))
				}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_20inB3H1vZ94tVilqSJmU2",
				hasExplanationText: "_1xZtDFYDxzgIqaJfg9XzJh"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/reddit/helpers/name/index.ts"),
				d = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx"),
				m = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less"),
				p = n.n(m);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function b(e) {
				const {
					item: {
						primaryColor: t,
						iconUrl: n,
						name: s,
						subscribers: m,
						active: b
					},
					shouldPrettyPrint: f,
					explanationText: g,
					shouldShowSubredditOnlineUsers: C = !1
				} = e, E = Object(a.e)(e => Object(d.u)(e, {
					subredditName: s
				})), x = Object(l.c)(s), _ = void 0 !== m ? o.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [o.fbt._plural(m, "number", f ? Object(c.b)(m) : void 0)], {
					hk: "2SvJUX"
				}) : void 0, v = E ? o.fbt._("{number users online in subreddit} online", [o.fbt._param("number users online in subreddit", Object(c.b)(E.accountsActive))], {
					hk: "49HfzS"
				}) : void 0, O = C ? `${_} • ${v}` : _, y = void 0 !== b ? o.fbt._({
					"*": "{number} online",
					_1: "1 online"
				}, [o.fbt._plural(b, "number", f ? Object(c.b)(b) : void 0)], {
					hk: "NgOAJ"
				}) : void 0, k = r.a.createElement(u.a, {
					className: Object(i.a)(p.a.icon, {
						[p.a.hasExplanationText]: !!g
					}),
					iconUrl: n,
					primaryColor: t,
					redditStyle: !0
				});
				return r.a.createElement(u.b, h({
					icon: k,
					title: x,
					secondaryText: O,
					subText: y
				}, e))
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				noMatches: "kaGogHhtbK_vPZj9943oa",
				container: "_3DQXGvoE1SM3Kmz20of7Iz",
				mIsValid: "_28z84WGIIVp4uDMcA3-Kgw",
				mIsVisible: "_3009h778F7QI2qu6YmsxVV"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return M
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/debounce.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/lib/classNames/index.ts");
			const l = {
				leading: !0,
				trailing: !1
			};
			var d = (e, t, n, o = l) => {
					const s = {
							...l,
							...o
						},
						r = t > e ? 1 : -1;
					let a = e;
					if (e !== t) {
						for (s.leading || (a += r); a !== t;) n(a), a += r;
						s.trailing && n(a)
					} else(s.leading || s.trailing) && n(e)
				},
				u = n("./src/lib/forEachGroup/index.ts"),
				m = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				p = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				h = n.n(p);
			class b extends a.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.element = null, this.setRef = e => this.element = e, this.onMouseUp = () => {
						this.mouseDown && (this.props.disabled || this.props.onSelect(this.props.entryIndex), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onOver(this.props.entryIndex)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1, this.element && this.props.onUpdate(this.props.entryIndex, this.element)
				}
				render() {
					return i.a.createElement("div", {
						className: Object(c.a)(h.a.entry, this.props.disabled && h.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			var f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				C = n.n(g);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var x = ({
					className: e,
					children: t,
					title: n,
					onOpenCommunityCreation: s,
					shouldShowCreateCommunityButton: r,
					...a
				}) => i.a.createElement("div", E({
					className: Object(c.a)(C.a.dropdownSection, e)
				}, a), n && r ? i.a.createElement("div", {
					className: C.a.titleContainer
				}, i.a.createElement("span", {
					className: C.a.titleText
				}, n), i.a.createElement(f.t, {
					className: C.a.srCreationButton,
					onClick: s,
					priority: f.c.Plain,
					size: f.d.XS
				}, o.fbt._("Create New", null, {
					hk: "3WP7G4"
				}))) : n && i.a.createElement("div", {
					className: C.a.title
				}, n), t),
				_ = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				v = n("./src/reddit/helpers/name/index.ts"),
				O = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.tsx"),
				y = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				k = n.n(y),
				j = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				S = n.n(j);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function P(e) {
				const {
					item: {
						name: t,
						subscribers: n
					}
				} = e, s = Object(v.d)(t), r = void 0 !== n ? o.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [o.fbt._plural(n, "number")], {
					hk: "2SvJUX"
				}) : void 0, a = i.a.createElement(_.a, {
					className: Object(c.a)(S.a.profileIcon, k.a.subredditIcon)
				});
				return i.a.createElement(O.b, T({
					icon: a,
					title: s,
					secondaryText: r
				}, e))
			}
			var I = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.tsx"),
				w = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				N = n.n(w);
			const D = {
				[m.a.OWN_PROFILE]: () => o.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[m.a.SUBSCRIBED_TO_SUBREDDIT]: () => o.fbt._("Your communities", null, {
					hk: "2XzKJR"
				}),
				[m.a.OTHER_SUBREDDIT]: () => o.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[m.a.MODERATED_SUBREDDIT]: () => o.fbt._("Moderated subreddits", null, {
					hk: "uZtld"
				})
			};
			class M extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.selectedEntryElement = null, this.containerElement = null, this.ignoreEntryOverEvents = !1, this.activateEntryOverEvents = r()(() => this.ignoreEntryOverEvents = !1, 100), this.setContainerRef = e => this.containerElement = e, this.onEntryUpdate = (e, t) => {
						e === this.props.focusedIndex && (this.selectedEntryElement = t)
					}, this.onScroll = () => {
						this.ignoreEntryOverEvents && this.activateEntryOverEvents()
					}, this.onEntryOver = e => {
						this.ignoreEntryOverEvents || this.props.items[e].disabled || this.props.onEntryFocus(e), this.ignoreEntryOverEvents = !1
					}
				}
				componentDidUpdate() {
					if (this.props.focusedIndex >= 0 && this.selectedEntryElement && this.containerElement) {
						const e = this.selectedEntryElement.getBoundingClientRect(),
							t = this.containerElement.getBoundingClientRect();
						(e.top < t.top || e.bottom > t.bottom) && (this.ignoreEntryOverEvents = !0, 0 === this.props.focusedIndex ? this.containerElement.scrollTop = 0 : this.selectedEntryElement.scrollIntoView(e.top < t.top)), this.props.onEntryFocus(this.props.focusedIndex)
					}
				}
				getEntryContentComponent(e, t) {
					switch (e) {
						case m.a.OWN_PROFILE:
							return P;
						default:
							return I.a
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t,
						onOpenCommunityCreation: n,
						shouldShowCreateCommunityButton: s
					} = this.props, r = [];
					return this.props.showNoMatchesCaption && r.push(i.a.createElement(x, {
						key: "no-matches"
					}, i.a.createElement("div", {
						className: N.a.noMatches
					}, o.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (o, a, c, l) => {
						const u = [];
						d(c, l, n => {
							const o = t[n],
								s = n === e,
								r = this.getEntryContentComponent(o.type, o.name);
							r && u.push(i.a.createElement(b, {
								entryIndex: n,
								disabled: o.disabled,
								key: o.id || o.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, i.a.createElement(r, {
								highlight: s,
								item: o
							})))
						});
						const p = D[a];
						r.push(i.a.createElement(x, {
							key: a,
							title: p && p(),
							onOpenCommunityCreation: n,
							shouldShowCreateCommunityButton: s && a === m.a.SUBSCRIBED_TO_SUBREDDIT
						}, u))
					}), i.a.createElement("div", {
						className: Object(c.a)(N.a.container, this.props.className, {
							[N.a.mIsValid]: this.props.isValid,
							[N.a.mIsVisible]: r.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, r)
				}
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2sfaZWDVT8JLAt2J9p4IzV",
				mIsActive: "_1d_qHIhircwk0cy-gLlRQq",
				mIsInvalid: "_3sp2CpDC4eODg63Hhf8_lz",
				subredditDropdownOpenAI: "_1OS0KkjeJ7foERCmAoM2Zc",
				subredditDropdownOpenAi: "_1OS0KkjeJ7foERCmAoM2Zc"
			}
		},
		"./src/reddit/controls/SubredditPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			}));
			var o = n("./src/reddit/constants/posts.ts"),
				s = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				r = n("./src/reddit/helpers/name/index.ts"),
				a = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				i = n("./src/reddit/models/User/index.ts");
			const c = (e, t, n) => {
					if (Object(r.a)(e, t.name)) {
						const {
							id: e,
							name: a
						} = t, {
							url: i,
							color: c
						} = Object(s.a)({
							shouldHideNsfwIcon: n,
							subredditOrProfile: t
						});
						return {
							rawString: Object(r.c)(a),
							record: {
								id: e,
								name: a,
								iconUrl: i,
								primaryColor: c,
								type: o.a.SUBREDDIT
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				l = (e, t, n) => {
					const s = Object(i.e)(t);
					if (Object(r.a)(e, s)) {
						const {
							id: e,
							accountIcon: n
						} = t;
						return {
							rawString: Object(r.d)(s),
							record: {
								id: e,
								name: s,
								iconUrl: n,
								type: o.a.PROFILE
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				d = (e, t, n, o) => {
					if (t && (!n || Object(r.e)(e))) return c(e, t, o);
					if (n && (!t || Object(r.f)(e))) return l(e, n);
					if (t && n) {
						const s = c(e, t, o);
						return s.record ? s : l(e, n)
					}
					return {
						rawString: e,
						record: null
					}
				},
				u = e => {
					let t;
					return t = e.type === o.a.PROFILE ? a.a.OWN_PROFILE : a.a.OTHER_SUBREDDIT, {
						...e,
						type: t
					}
				},
				m = new RegExp("^(r/)?[A-Za-z0-9][A-Za-z0-9_]{1,20}$", "i"),
				p = new RegExp("^u/[A-Za-z0-9_-]{2,20}$", "i"),
				h = e => m.test(e) || p.test(e) || "" === e
		},
		"./src/reddit/controls/SubredditPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return ne
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
				i = n("./src/reddit/helpers/name/index.ts");
			class c extends s.a.Component {
				constructor(e) {
					super(e), this.isFocused = !1, this.onFocus = () => {
						this.isFocused = !0, this.props.onFocus && this.props.onFocus()
					}, this.onChange = (e, t) => {
						this.setState({
							value: e
						}, () => {
							t && (this.props.onSelect(e), this.isFocused = !1)
						})
					}, this.state = {
						value: e.value
					}
				}
				componentWillReceiveProps(e) {
					const {
						value: t
					} = this.state, {
						value: n
					} = e;
					if (!a()(t, n) && !this.isFocused) {
						t.record && !n.record && Object(i.a)(t.record.name, n.rawString) ? this.setState({
							value: {
								rawString: n.rawString,
								record: t.record
							}
						}) : this.setState({
							value: n
						})
					}
				}
				render() {
					return s.a.createElement(s.a.Fragment, null, this.props.renderPicker({
						onChange: this.onChange,
						onFocus: this.onFocus,
						value: this.state.value
					}))
				}
			}
			var l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/objectSelector/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				h = n("./src/reddit/actions/subredditCrosspostable.ts"),
				b = n("./src/reddit/actions/subscription/index.ts"),
				f = n("./src/reddit/constants/modals.ts"),
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				E = n("./node_modules/lodash/debounce.js"),
				x = n.n(E),
				_ = n("./src/lib/classNames/index.ts"),
				v = n("./src/reddit/constants/keycodes.ts"),
				O = n("./src/reddit/constants/posts.ts"),
				y = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				k = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/reddit/icons/fonts/index.tsx"),
				S = n("./src/lib/lessComponent.tsx"),
				T = n("./src/reddit/components/SubredditIcon/index.tsx"),
				P = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				I = n("./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less"),
				w = n.n(I);
			const N = S.a.wrapped(T.b, "subredditRoundIcon", w.a),
				D = S.a.wrapped(P.a, "userIcon", w.a),
				M = S.a.span("iconEmpty", w.a);

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const L = e => {
				e.preventDefault(), e.stopPropagation()
			};

			function F(e) {
				const {
					className: t,
					disabled: n,
					isActive: o,
					onDropdownClick: r,
					inputRef: a,
					record: i,
					value: c,
					...l
				} = e;
				let d = s.a.createElement(M, null);
				return o ? d = s.a.createElement(j.a, {
					name: "search",
					className: w.a.searchIcon
				}) : i && (d = i.type === O.a.SUBREDDIT ? s.a.createElement(N, i) : s.a.createElement(D, null)), s.a.createElement("div", {
					className: Object(_.a)(w.a.searchBar, t)
				}, d, s.a.createElement("div", {
					className: w.a.inputWrapper
				}, s.a.createElement("input", R({
					className: w.a.input,
					ref: a,
					disabled: n,
					placeholder: o ? k.fbt._("Search communities", null, {
						hk: "1mtF5A"
					}) : k.fbt._("Choose a community", null, {
						hk: "44gKTd"
					}),
					spellCheck: !1,
					value: c
				}, l))), s.a.createElement("div", {
					onClick: r,
					onMouseDown: L
				}, s.a.createElement(j.a, {
					name: "caret_down",
					className: w.a.dropdownIcon
				})))
			}
			var A = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				B = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				U = n("./src/reddit/controls/SubredditPicker/Picker/index.m.less"),
				W = n.n(U),
				z = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/RecommendedSubreddits/index.tsx");
			const G = Object(d.c)({
				isOpenAIPilotV1: B.f,
				shouldRenderRec: B.n
			});
			class H extends s.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => {
						this.inputRef = e, this.props.inputRef && this.props.inputRef(e)
					}, this.commitSelection = () => {
						const e = this.getPickerValue(!0);
						Object(C.c)(e.rawString) ? this.props.onChange(e, !0) : this.props.onChange({
							rawString: "",
							record: null
						}, !0), this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.callOnChange = () => this.props.onChange(this.getPickerValue()), this.requestAutocomplete = x()(e => this.props.onGetSubredditAutocomplete(e), 200, {
						maxWait: 200
					}), this.selectItem = e => {
						const t = this.props.items[e];
						if (!t) throw new Error("Invalid item index");
						let n;
						n = t.type === y.a.OWN_PROFILE ? Object(i.d)(t.name) : Object(i.c)(t.name), this.setState({
							inputValue: n,
							focusedIndex: e
						}, this.commitSelection)
					}, this.onSelectRecommendation = e => {
						if (!e) throw new Error("Invalid item index");
						let t;
						t = e.type === y.a.OWN_PROFILE ? Object(i.d)(e.name) : Object(i.c)(e.name), this.props.onChange({
							rawString: t,
							record: {
								name: e.name,
								iconUrl: e.iconUrl,
								primaryColor: e.primaryColor,
								type: O.a.SUBREDDIT
							}
						}, !0), this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.getPickerValue = (e = !1) => {
						const t = this.state.inputValue,
							n = this.state.focusedIndex,
							{
								items: o,
								value: s
							} = this.props;
						if (s && s.record && Object(i.a)(t, s.record.name)) return {
							...s,
							rawString: t
						};
						const r = o[n] || e && o.find(e => Object(i.a)(e.name, t));
						if (!r) return {
							rawString: t,
							record: null
						};
						const {
							type: a,
							id: c,
							name: l,
							iconUrl: d,
							primaryColor: u,
							allowedPostTypes: m
						} = r;
						return {
							rawString: t,
							record: Object(i.a)(t, l) ? {
								id: c,
								name: l,
								iconUrl: d,
								primaryColor: u,
								allowedPostTypes: m,
								type: a === y.a.OWN_PROFILE ? O.a.PROFILE : O.a.SUBREDDIT
							} : null
						}
					}, this.findNextEnabledItemIndex = e => {
						const t = e ? -1 : 1;
						let n = this.state.focusedIndex + t,
							o = this.props.items[n];
						for (; o;) {
							if (!o.disabled) return n;
							n += t, o = this.props.items[n]
						}
						return n
					}, this.moveSelection = (e = !1) => {
						const {
							value: t,
							items: n
						} = this.props;
						let o = this.findNextEnabledItemIndex(e);
						o < -1 ? o = n.length - 1 : o >= n.length && (o = -1);
						const s = -1 === o ? t.rawString : n[o].name;
						s && this.setState({
							focusedIndex: o,
							inputValue: s
						})
					}, this.placeCursorAtTheEnd = () => {
						const e = this.state.inputValue.length;
						this.inputRef && this.inputRef.setSelectionRange(e, e)
					}, this.onDropdownClick = e => {
						const {
							inputRef: t
						} = this;
						this.state.isOpen ? this.setState({
							isOpen: !1
						}) : (t && t.focus(), this.setState({
							isOpen: !0
						}), this.placeCursorAtTheEnd()), e.preventDefault(), e.stopPropagation()
					}, this.onFocus = () => {
						this.props.onFocus && this.props.onFocus(), this.setState({
							isActive: !0,
							isOpen: !0
						}), this.inputRef && this.inputRef.select()
					}, this.onBlur = () => {
						this.props.selectOnBlur && this.state.isOpen ? (this.commitSelection(), this.setState({
							isActive: !1
						})) : this.setState({
							isActive: !1,
							isOpen: !1
						})
					}, this.onDropdownContainerMouseDown = e => {
						e.preventDefault()
					}, this.onEntryFocus = e => {
						this.setState({
							focusedIndex: e
						})
					}, this.onEntrySelect = e => {
						this.selectItem(e)
					}, this.onInputChange = e => {
						this.state.isOpen || this.setState({
							isOpen: !0
						});
						const t = e.target.value,
							n = this.state.inputValue;
						this.requestAutocomplete(t), this.setState({
							inputValue: t
						}, this.callOnChange), this.props.onInputChange && this.props.onInputChange(n, t)
					}, this.onKeyDown = e => {
						e.which === v.a.ArrowUp ? (this.moveSelection(!0), e.preventDefault()) : e.which === v.a.ArrowDown ? (this.moveSelection(), e.preventDefault()) : e.which === v.a.Enter || e.which === v.a.Tab ? (-1 !== this.state.focusedIndex ? this.selectItem(this.state.focusedIndex) : this.commitSelection(), e.which !== v.a.Tab && e.preventDefault()) : e.which === v.a.Escape && (this.inputRef && this.inputRef.blur(), e.preventDefault())
					}, this.state = {
						isActive: !1,
						isOpen: !1,
						focusedIndex: 0,
						inputValue: e.value.rawString
					}
				}
				componentDidMount() {
					const {
						value: {
							rawString: e
						}
					} = this.props;
					e && this.requestAutocomplete(e)
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.setState({
						focusedIndex: -1,
						inputValue: e.value.rawString
					})
				}
				render() {
					const {
						className: e,
						disabled: t,
						isOpenAIPilotV1: n,
						isValid: o = !0,
						items: r,
						shouldRenderRec: a,
						value: i,
						shouldShowCreateCommunityButton: c
					} = this.props, {
						isActive: l,
						isOpen: d
					} = this.state, u = i.record;
					return s.a.createElement("div", {
						className: Object(_.a)(W.a.container, e, {
							[W.a.mIsActive]: l,
							[W.a.mIsInvalid]: !o
						})
					}, s.a.createElement(F, {
						disabled: t,
						isActive: this.state.isActive,
						value: this.state.inputValue,
						inputRef: this.setInputRef,
						onDropdownClick: this.onDropdownClick,
						onChange: this.onInputChange,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onKeyDown: this.onKeyDown,
						record: u
					}), !this.state.inputValue && d && a && s.a.createElement(z.a, {
						onSelectRecommendation: this.onSelectRecommendation,
						onContainerMouseDown: this.onDropdownContainerMouseDown
					}), d && (!a || !!this.state.inputValue) && s.a.createElement(A.a, {
						className: n ? W.a.subredditDropdownOpenAI : void 0,
						items: r,
						isValid: o,
						focusedIndex: this.state.focusedIndex,
						showNoMatchesCaption: !this.props.haveSuggestions && this.props.isAllDataRetrieved,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						onOpenCommunityCreation: this.props.openCommunityCreation,
						shouldShowCreateCommunityButton: c
					}))
				}
			}
			var V = Object(l.b)(G)(H),
				K = n("./src/reddit/helpers/trackers/postComposer.ts"),
				q = n("./src/reddit/selectors/platform.ts"),
				J = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				Z = n("./src/reddit/selectors/user.ts");

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Y = Object(g.u)(),
				X = Object(u.a)(Object(d.a)((e, t) => t.value, (e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					value: o
				}) => Object(J.a)(e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					substring: o.rawString
				}), e => Object(Z.mb)(e) && Object(q.j)(e), (e, t, n) => {
					const {
						suggestedItems: o,
						fallbackItems: s,
						isAllDataRetrieved: r
					} = t, a = o.length ? o : e.record ? [Object(C.a)(e.record)] : [];
					return {
						items: 0 === a.length && r ? s : a,
						haveSuggestions: a.length > 0,
						isAllDataRetrieved: t.isAllDataRetrieved,
						isAutocompletePending: t.isPending,
						shouldShowCreateCommunityButton: n
					}
				})),
				$ = {
					onGetInitialData: e => t => t(e ? h.d() : b.e()),
					onGetSubredditAutocomplete: p.a,
					openCommunityCreation: () => async (e, t) => {
						Object(K.c)(t()), e(Object(m.h)(f.a.SUBREDDIT_CREATION_MODAL_ID))
					}
				};
			class ee extends s.a.Component {
				constructor() {
					super(...arguments), this.onGetSubredditAutocomplete = e => {
						this.props.onGetSubredditAutocomplete(e)
					}
				}
				componentDidMount() {
					this.props.onGetInitialData(!!this.props.allowCrosspostableOnly)
				}
				render() {
					return s.a.createElement(V, Q({}, this.props, {
						onGetSubredditAutocomplete: this.onGetSubredditAutocomplete
					}))
				}
			}
			var te = Y(Object(l.b)(X, $)(ee));
			class ne extends s.a.Component {
				constructor() {
					super(...arguments), this.renderPicker = e => s.a.createElement(te, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						className: this.props.className,
						disabled: this.props.disabled || !1,
						includeUserProfile: this.props.includeUserProfile,
						inputRef: this.props.inputRef,
						isValid: this.props.isValid,
						onChange: e.onChange,
						onFocus: e.onFocus,
						onInputChange: this.props.onInputChange,
						value: e.value,
						selectOnBlur: this.props.selectOnBlur || !1
					})
				}
				render() {
					return s.a.createElement(c, {
						onFocus: this.props.onFocus,
						onSelect: this.props.onSelect,
						renderPicker: this.renderPicker,
						value: this.props.value
					})
				}
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				redditStyle: "_3kUvbpMbR21zJBboDdBH7D",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(i);
			t.a = Object(o.memo)(Object(o.forwardRef)((e, t) => {
				const n = e.size || a.d.XS;
				return s.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[n], {
						[c.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[c.a.mDisabled]: e.disabled,
						[c.a.redditStyle]: e.redditStyle
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle(),
					ref: t
				}, s.a.createElement("div", {
					className: c.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/controls/Typography/index.m.less": function(e, t, n) {
			e.exports = {
				heading1: "_37JeV292IJA7_x1qej_-2H",
				heading2: "p13k-tsMcatGBlVpJBZmw",
				heading3: "_1nHvvYpmn7q9eWDAGzKcce",
				heading4: "_1-rwUWsB5F8WmYI8F66dai",
				heading5: "_22RKdGqihAj6MFumW6DuRV",
				heading6: "_4xqrI_N1UdqsK9E1RSisG",
				body1: "_2HJOIn4SJm4z1NeCv_hNFu",
				body2: "_3ImIPX9rfoPmUrZ1R8KGqS",
				actionFont: "_3uShGanwyVFBaTiPMFzfAC",
				metadata: "_2nyJGeaFJbXTqTh9OGwxfu",
				metadata3: "_3BIqvjJkJKZfH4vtC11dGF"
			}
		},
		"./src/reddit/controls/Typography/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Typography/index.m.less"),
				r = n.n(s);
			o.a.h1("heading1", r.a), o.a.h2("heading2", r.a), o.a.h3("heading3", r.a), o.a.h4("heading4", r.a);
			const a = o.a.h5("heading5", r.a),
				i = (o.a.h6("heading6", r.a), o.a.p("body1", r.a), o.a.p("body2", r.a)),
				c = (o.a.p("actionFont", r.a), o.a.p("metadata", r.a));
			o.a.p("metadata3", r.a)
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			async function r(e, t, n) {
				const r = Object(s.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${o.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: n
						}
					}),
					a = await r;
				if (a.ok) {
					const e = {},
						t = {},
						n = a.body;
					return Object.keys(n).forEach(o => {
						const s = n[o];
						t[o] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
					}), {
						...a,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return a
			}
			async function a(e, t, n) {
				const r = await Object(s.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/badges/${t}?users=${n}`
				});
				if (r.ok) {
					const e = {},
						t = [],
						n = r.body;
					return Object.keys(n).forEach(o => {
						const s = n[o];
						e[o] = s, t.push(s.id)
					}), {
						...r,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return r
			}

			function i(e, t, n, r = !0) {
				return Object(s.a)(e, {
					method: "patch",
					endpoint: `${o.a.metaUrl}/badges/${t}/${n}`,
					data: {
						selected: r
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "j", (function() {
				return a
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "k", (function() {
				return d
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "n", (function() {
				return C
			}));
			var o, s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case o.Ethereum:
					case o.EthTraderEthereum:
						return "Ethereum Main Network";
					case o.Rinkeby:
					case o.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case o.Ethereum:
					case o.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case o.Rinkeby:
					case o.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case o.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case o.Ethereum:
					case o.EthTraderEthereum:
						return "homestead";
					case o.Rinkeby:
					case o.EthTraderRinkeby:
						return "rinkeby";
					case o.ArbitrumRinkeby:
						return 5391184
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function l(e) {
				return e === o.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function d(e, t, n) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function u(e, t, n) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function m(e, t, n) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:5391184", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(o || (o = {}));
			const p = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				h = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				g = (e, t, n, o) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: o
				});
			async function C(e, t) {
				return await Object(r.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function r(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function a(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function i(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: t
				})
			}

			function c(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: {
						currency: "usd",
						price: t.price,
						products: t.products,
						providerArgs: {
							paymentNonce: t.nonce
						},
						providerName: "braintree",
						subredditId: t.subredditId
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.jb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							o = {
								[t.subredditId]: n
							};
						return {
							...e,
							body: o
						}
					}
					return e
				})
			}

			function i(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${o.a.metaUrl}/wallets/${t.subredditId}`,
					method: s.jb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const l = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? l.richtext_json = n : l.markdown_text = n, Object(s.a)(Object(r.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: o.jb.POST,
					data: l
				})
			}
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "a", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/helpers/richTextJson/index.ts"),
				a = n("./src/reddit/models/Post/index.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts"),
				c = n("./src/reddit/models/ScheduledPost/index.ts"),
				l = n("./src/redditGQL/operations/CreateScheduledPost.json"),
				d = n("./src/redditGQL/operations/SubredditScheduledPosts.json");
			const u = (e, t) => Object(o.a)(e, {
					...d,
					variables: {
						...t,
						includeRecurring: !(!t.includeRecurring || !t.includeRecurring.recurringFirst),
						includeStandalone: !(!t.includeStandalone || !t.includeStandalone.standaloneFirst),
						recurringAfter: t.includeRecurring ? t.includeRecurring.recurringAfter : void 0,
						recurringFirst: t.includeRecurring ? t.includeRecurring.recurringFirst : void 0,
						standaloneAfter: t.includeStandalone ? t.includeStandalone.standaloneAfter : void 0,
						standaloneFirst: t.includeStandalone ? t.includeStandalone.standaloneFirst : void 0
					}
				}),
				m = (e, t) => {
					if (!e.ok || !e.body) return !1;
					const n = e.body;
					return !!(n.data && n.data.subredditInfoById && n.data.subredditInfoById.scheduledPosts && n.data.subredditInfoById.scheduledPosts[t] && n.data.subredditInfoById.scheduledPosts[t].edges)
				},
				p = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => m(e, c.f.standalonePosts))(e)) && !(t.includeRecurring && !(e => m(e, c.f.recurringPosts))(e))),
				h = ({
					poll: e,
					schedule: t,
					submission: n,
					subredditId: o
				}) => ({
					collectionId: n.collectionId || "",
					discussionType: n.isChatPost ? a.b.Chat : a.b.Comment,
					isContestMode: n.isContestMode,
					isPostAsMetaMod: n.isPostAsMetaMod,
					isSpoiler: n.isSpoiler,
					isNsfw: n.isNSFW,
					poll: e && _(e),
					title: n.title,
					isOriginalContent: n.isOC,
					flair: n.flair ? {
						id: n.flair.templateId,
						text: Object(s.g)(n.flair)
					} : {},
					sticky: n.sticky,
					subredditId: o,
					suggestedCommentSort: n.suggestedSort,
					isSendReplies: n.sendReplies,
					...b(t),
					...E(n),
					assetIds: x(n)
				}),
				b = e => ({
					scheduling: {
						publishAt: e.submitDate,
						clientTimezone: e.timezoneName,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					}
				}),
				f = e => ({
					scheduling: Object.keys(e).length > 0 ? {
						clientTimezone: e.timezoneName || void 0,
						publishAt: e.submitDate || void 0,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					} : void 0
				}),
				g = ({
					poll: e,
					schedule: t,
					scheduledPostId: n,
					submission: o,
					subredditId: s
				}) => {
					const r = h({
						poll: e,
						schedule: t,
						submission: o,
						subredditId: s
					});
					return {
						id: n,
						...r,
						flair: Object.keys(r.flair || {}).length ? {
							...r.flair
						} : {
							id: "",
							text: ""
						}
					}
				},
				C = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				E = e => {
					switch (e.kind) {
						case i.p.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case i.p.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case i.p.LINK:
							return {
								content: {}, link: {
									url: C(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				x = e => {
					let t = [];
					if (e.document) {
						const n = e.document || [];
						t = Object(r.d)(n)
					}
					return t
				},
				_ = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				v = (e, t) => Object(o.a)(e, {
					...l,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/redditGQL/operations/UpdateScheduledPost.json"),
				s = n("./src/lib/makeGqlRequest/index.ts");
			const r = (e, t) => Object(s.a)(e, {
				...o,
				variables: {
					input: t
				}
			})
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-dnd/lib/index.js"),
				s = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				r = n.n(s);
			t.a = Object(o.DragDropContext)(r.a)
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function o(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function s(e) {
				return [...e].sort(o)
			}
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/externalAccount/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			const o = () => new BroadcastChannel("external_account"),
				s = e => {
					const t = o();
					t.postMessage({
						type: "connected",
						provider: e
					}), t.close()
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: s.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: o.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/getReredditLinkWithYear/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = (e = new Date) => {
				const t = e.getFullYear();
				return `/posts/${e.getMonth()>=6?t:t-1}/`
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const n = new o.BigNumber(e),
					s = new o.BigNumber(t || 1);
				return n.dividedToIntegerBy(s).toString()
			}

			function a(e, t) {
				return Object(s.b)(parseInt(r(e, t), 10))
			}

			function i(e, t) {
				const n = new o.BigNumber(e),
					s = new o.BigNumber(t || 1);
				return n.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function r(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : o.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function a(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return b
			}));
			const o = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: p(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: e.subredditInfoById.scheduledPosts.recurringPosts.edges.map(e => e.node.id)
				} : {},
				s = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: u(e.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.standalonePosts.pageInfo
						}
					},
					standalonePostsIds: e.subredditInfoById.scheduledPosts.standalonePosts.edges.map(e => e.node.id)
				} : {},
				r = e => ({
					...e,
					subredditInfoById: {
						id: e.subredditInfoById.id,
						scheduledPosts: {
							...o(e),
							...s(e)
						}
					}
				}),
				a = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				i = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				c = e => a(e) && i(e),
				l = e => !a(e) && i(e),
				d = e => a(e) && !i(e),
				u = e => e.map(e => m(e.node)),
				m = e => ({
					id: e.id,
					title: e.title,
					body: e.body,
					postKind: e.postKind,
					collectionId: e.collections.edges.length ? e.collections.edges[0].node.id : void 0,
					discussionType: e.discussionType,
					isContestMode: e.isContestMode,
					isPostAsMetaMod: e.isPostAsMetaMod,
					isSpoiler: e.isSpoiler,
					isNsfw: e.isNsfw,
					isOriginalContent: e.isOriginalContent,
					isSendReplies: e.isSendReplies,
					isSticky: !!e.sticky && "NONE" !== e.sticky,
					mediaAssets: e.mediaAssets,
					subreddit: {
						...e.subreddit
					},
					suggestedCommentSort: e.suggestedCommentSort,
					owner: {
						...e.owner
					},
					poll: e.poll,
					contentType: e.contentType,
					clientTimezone: e.clientTimezone,
					publishAt: e.publishAt.split(".")[0],
					state: e.state,
					flair: e.flair ? {
						...e.flair
					} : void 0,
					sticky: e.sticky,
					isModDistinguished: "MODERATOR" === e.distinguishedAs,
					url: e.url
				}),
				p = e => e.map(e => h(e.node)),
				h = e => ({
					...m(e),
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				b = e => (e => !!e.frequency && !!e.interval)(e) ? h(e) : m(e)
		},
		"./src/reddit/helpers/isArrayEqual.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/isEqual.js"),
				s = n.n(o),
				r = n("./node_modules/lodash/xorWith.js"),
				a = n.n(r);
			t.a = (e, t) => {
				const n = a()(e, t, s.a);
				return !(!n || 0 !== n.length)
			}
		},
		"./src/reddit/helpers/ordinal/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				const t = ["th", "st", "nd", "rd"],
					n = e % 100;
				return e + (t[(n - 20) % 10] || t[n] || t[0])
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case o.I.NO_STRIPE_SUBSCRIPTION:
							case o.I.USER_DOESNT_EXIST:
							case o.I.USER_REQUIRED_ERROR:
							case o.I.VALIDATION_ERROR:
								return e;
							case o.I.NO_USER:
							case o.I.NO_TEXT:
							case o.I.NO_URL:
								return o.I.VALIDATION_ERROR;
							case o.I.CREDIT_CARD_FAILURE:
							case o.I.CREDIT_CARD_FAILURE_GENERIC:
								return o.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return o.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.I.VALIDATION_ERROR
				},
				r = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				a = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: r(e)
					} : e
				};
			t.a = r
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "e", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/RichTextJson/index.ts");
			const s = "giphy|",
				r = "emote|",
				a = "|downsized";

			function i(e, t) {
				return s + e + (t ? a : "")
			}

			function c(e) {
				return !!(null == e ? void 0 : e.startsWith(s))
			}

			function l(e) {
				return !!(null == e ? void 0 : e.startsWith(r))
			}

			function d(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(c)
			}

			function u(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(l)
			}

			function m(e) {
				let t = e.substring(s.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function p(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...p(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function h(e) {
				return p(e, o.F).map(e => e.id)
			}

			function b(e, t = !1) {
				return p(e, e => e.e === o.o || t && e.e === o.y).map(e => e.u ? e.u : `https://reddit.com/r/${e.t}`)
			}
		},
		"./src/reddit/helpers/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "g", (function() {
				return x
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/intlList/index.ts"),
				r = n("./src/lib/timezone/index.ts"),
				a = n("./src/reddit/helpers/isArrayEqual.ts"),
				i = n("./src/reddit/helpers/ordinal/index.ts"),
				c = n("./src/reddit/models/ScheduledPost/index.ts");
			const l = e => {
					return `${e.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} @ ${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"numeric"}).replace(" ","").toLowerCase()}`
				},
				d = (e, t) => {
					if (e && t) {
						const n = Object(r.f)(m(e, t)),
							s = l(n);
						return o.fbt._("At {time}", [o.fbt._param("time", s)], {
							hk: "25s5Tg"
						})
					}
					return o.fbt._("Submit post at scheduled event time", null, {
						hk: "lYsoU"
					})
				},
				u = e => e.slice(0, 5),
				m = (e, t) => `${e}T${u(t)}:00`,
				p = e => {
					const [t, n] = e.split("T");
					return [t, u(n)]
				},
				h = e => {
					const [t, n] = p(e);
					if (t && n) {
						const e = Object(r.f)(m(t, n));
						return l(e)
					}
					return ""
				},
				b = e => {
					const t = Object(r.d)(e);
					let n, o = e;
					if (t) {
						n = t.offset, o = `(GMT${Object(r.e)(t.offset)}) ${e.replace("/"," - ").replace(/_/g," ")}`
					}
					return {
						name: e,
						displayText: o,
						offset: n
					}
				},
				f = e => "string" == typeof e,
				g = e => {
					const t = new Date,
						n = e - t.getDay();
					return t.setDate(t.getDate() + n), t.toLocaleDateString(void 0, {
						weekday: "long"
					})
				},
				C = e => {
					const t = (e => {
						const [t, n] = p(e);
						if (t && n) {
							return Object(r.f)(m(t, n)).toLocaleTimeString(void 0, {
								hour: "numeric",
								minute: "numeric"
							})
						}
						return ""
					})(e.publishAt);
					if (e.frequency === c.d.Hourly) return 2 === e.interval ? o.fbt._("Every other hour", null, {
						hk: "64vzK"
					}) : e.interval > 1 ? o.fbt._("Every {hour interval} hours", [o.fbt._param("hour interval", e.interval.toString())], {
						hk: "3x8zaD"
					}) : o.fbt._("Every hour", null, {
						hk: "1VzCs"
					});
					if (e.frequency === c.d.Daily) return 2 === e.interval ? o.fbt._("Every other day at {start time}", [o.fbt._param("start time", t)], {
						hk: "yTynp"
					}) : e.interval > 1 ? o.fbt._("Every {day interval} days at {start time}", [o.fbt._param("day interval", e.interval.toString()), o.fbt._param("start time", t)], {
						hk: "2OoGlG"
					}) : o.fbt._("Every day at {start time}", [o.fbt._param("start time", t)], {
						hk: "1cvwm2"
					});
					if (e.frequency === c.d.Weekly) {
						const n = (e => Object(s.c)(e.map(c.k).sort((e, t) => e - t).map(g), s.a.AND, s.b.COMMA))(e.byWeekDays);
						return 2 === e.interval ? o.fbt._("Every other week on {days of week } at {start time}", [o.fbt._param("days of week ", n), o.fbt._param("start time", t)], {
							hk: "43xwaa"
						}) : e.interval > 1 ? o.fbt._("Every {interval} weeks on {days of week} at {start time}", [o.fbt._param("interval", e.interval.toString()), o.fbt._param("days of week", n), o.fbt._param("start time", t)], {
							hk: "2IVbH"
						}) : o.fbt._("Every week on {days of week} at {start time}", [o.fbt._param("days of week", n), o.fbt._param("start time", t)], {
							hk: "2Zl0L"
						})
					}
					const n = (e => Object(s.c)(e.sort((e, t) => e - t).map(i.a), s.a.AND, s.b.COMMA))(e.byMonthDays);
					return 2 === e.interval ? o.fbt._({
						"*": "Every other month on the {days of month} days at {start time}",
						_1: "Every other month on the {days of month} day at {start time}"
					}, [o.fbt._param("days of month", n), o.fbt._plural(e.byMonthDays.length), o.fbt._param("start time", t)], {
						hk: "okH9o"
					}) : e.interval > 1 ? o.fbt._({
						"*": "Every {interval} months on the {days of month} days at {start time}",
						_1: "Every {interval} months on the {days of month} day at {start time}"
					}, [o.fbt._param("interval", e.interval.toString()), o.fbt._param("days of month", n), o.fbt._plural(e.byMonthDays.length), o.fbt._param("start time", t)], {
						hk: "KqN3x"
					}) : o.fbt._({
						"*": "Every month on the {days of month} days at {start time}",
						_1: "Every month on the {days of month} day at {start time}"
					}, [o.fbt._param("days of month", n), o.fbt._plural(e.byMonthDays.length), o.fbt._param("start time", t)], {
						hk: "1jBuYc"
					})
				},
				E = e => {
					let t = null;
					e.frequency && (t = e.frequency), (e.byWeekDays.length > 1 || e.byMonthDays.length > 1 || e.interval > 1) && (t = c.b);
					const n = Object(r.f)(e.publishAt),
						o = Object(c.q)(n.getDay()),
						s = n.getDate();
					return 1 === e.byWeekDays.length && e.byWeekDays[0] !== o && (t = c.b), 1 === e.byMonthDays.length && e.byMonthDays[0] !== s && (t = c.b), {
						recurrenceInfo: e.frequency ? {
							frequency: e.frequency,
							byMonthDays: e.byMonthDays,
							byWeekDays: e.byWeekDays,
							interval: e.interval
						} : null,
						frequencyOption: t,
						submitDate: e.publishAt,
						timezoneName: e.clientTimezone
					}
				},
				x = (e, t) => {
					if (!e && t || e && !t) return !1;
					if (!e && !t) return !0;
					for (const n in e) {
						if (!t) return !1;
						if (e.hasOwnProperty(n)) {
							if (Array.isArray(e[n]) && (!Array.isArray(t[n]) || !Object(a.a)(e[n], t[n]))) return !1;
							if (e[n] !== t[n]) return !1
						}
					}
					return !0
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "g", (function() {
				return C
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			const d = e => {
					const t = Object(i.o)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(c.o)(e),
						screen: Object(c.bb)(e),
						subreddit: Object(c.jb)(e),
						post: t ? Object(c.J)(e, t) : null,
						profile: Object(c.S)(e),
						correlationId: Object(s.c)(s.a.CommentComposer)
					}
				},
				u = async (e, t, o, s) => {
					const r = {
							commentId: s,
							commentsPageKey: o
						},
						i = s && Object(a.j)(e, r) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(l.a)({
						noun: "comment",
						...d(e),
						comment: s ? Object(c.i)(e, s) : null,
						listing: Object(c.A)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e)
					})
				}, m = (e, t, n, o) => {
					const s = d(e);
					return Object(l.a)({
						...s,
						actionInfo: {
							...s.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: o,
							postId: n
						}
					})
				}, p = e => Object(l.a)({
					noun: "cancel",
					...d(e)
				}), h = (e, t) => {
					t === r.c.replyToPost && Object(l.a)({
						noun: "input",
						...d(e)
					})
				}, b = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.o)(t),
					screen: Object(c.bb)(t),
					subreddit: Object(c.jb)(t),
					post: Object(c.J)(t, e)
				}), f = e => Object(l.a)({
					noun: "edit",
					...d(e)
				}), g = e => Object(l.a)({
					noun: "save_edit",
					...d(e)
				}), C = (e, t) => n => {
					const o = "image_upload" === e || "video_upload" === e;
					return {
						...d(n),
						noun: o ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			n("./src/reddit/constants/categories.tsx");
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: o.bb(e),
					profile: o.S(e),
					subreddit: o.jb(e)
				}),
				r = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...s(t)
				}),
				a = e => t => ({
					...s(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...s(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...s(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
				})
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "d", (function() {
				return j
			}));
			var o, s, r = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/helpers/trackers/postEvent.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(o || (o = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(s || (s = {}));
			const l = e => t => ({
					source: o.collection,
					noun: s.post,
					...m(t, e)
				}),
				d = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: o.collection,
					noun: t ? s.unfollow : s.follow,
					...m(n, e)
				}),
				u = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: a.a.postEvent,
					noun: t ? s.unfollow : s.follow,
					...m(n, e)
				}),
				m = (e, t) => {
					const n = {
						...c.o(e),
						action: r.c.CLICK,
						subreddit: c.jb(e)
					};
					return void 0 === t ? n : {
						...n,
						post: c.J(e, t),
						postCollection: c.L(e, {
							postId: t
						}),
						postEvent: c.M(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...g(e),
					action: r.c.VIEW,
					noun: s.collectionEducation
				}),
				h = e => ({
					...g(e),
					action: r.c.CLICK,
					noun: s.collectionEducationGotIt
				}),
				b = e => ({
					...g(e),
					action: r.c.VIEW,
					noun: s.eventEducation
				}),
				f = e => ({
					...g(e),
					action: r.c.CLICK,
					noun: s.eventEducationGotIt
				}),
				g = e => ({
					...c.o(e),
					subreddit: c.jb(e),
					source: o.postComposer
				}),
				C = (e, t) => n => ({
					...m(n, e),
					source: t || o.postOverflowMenu,
					noun: s.collectionAddPost
				}),
				E = e => t => ({
					...m(t, e),
					source: o.collectionComposer,
					noun: s.collectionRemovePost
				}),
				x = () => e => ({
					...m(e),
					source: o.collectionComposer,
					noun: s.collectionCancel
				}),
				_ = () => e => {
					const t = Object(i.o)(e) || void 0;
					return {
						...m(e, t),
						source: o.collectionComposer,
						noun: s.collectionCreate
					}
				},
				v = () => e => ({
					...m(e),
					source: o.collectionComposer,
					noun: s.collectionSelect
				}),
				O = e => t => ({
					...c.o(t),
					subreddit: c.jb(t),
					source: o.collectionComposer,
					action: r.c.CLICK,
					noun: s.collectionDelete,
					postCollection: c.K(t, {
						collectionId: e
					})
				}),
				y = e => t => ({
					...m(t),
					source: o.collectionComposer,
					noun: s.collectionEdit,
					postCollection: c.K(t, {
						collectionId: e
					})
				}),
				k = e => t => ({
					...m(t, e),
					source: o.collectionComposer,
					noun: s.startEvent
				}),
				j = () => e => {
					const t = Object(i.o)(e) || void 0;
					return {
						...m(e, t),
						source: o.collectionComposer,
						action: r.c.VIEW,
						noun: s.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return E
			}));
			var o, s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/timezone/index.ts"),
				i = n("./src/reddit/constants/tracking.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(o || (o = {}));
			const p = e => u.d(e, {
					pageType: "event_submit"
				}),
				h = e => {
					Object(m.a)({
						...u.o(e),
						source: o.postComposer,
						action: i.c.CLICK,
						noun: "event_create",
						subreddit: u.jb(e)
					})
				},
				b = e => {
					Object(m.a)({
						...u.o(e),
						source: o.postComposer,
						action: i.c.CLICK,
						noun: "event_edit",
						subreddit: u.jb(e),
						postEvent: x(e),
						postComposer: _(e)
					})
				},
				f = () => e => ({
					source: o.eventComposer,
					action: i.c.VIEW,
					noun: i.b.SCREEN,
					actionInfo: p(e),
					postEvent: x(e)
				}),
				g = e => t => ({
					...y(t, Object(l.o)(t)),
					source: o.postComposer,
					noun: "apply",
					postComposer: v(e)
				}),
				C = () => e => ({
					...y(e, Object(l.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				E = e => t => ({
					...y(t, Object(l.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: _(t),
					postEvent: O(e)
				}),
				x = e => {
					const t = Object(d.p)(e);
					return t && O(t)
				},
				_ = e => v(Object(d.p)(e)),
				v = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(a.f)(e.startDate).getTime() / s.Sb : void 0
					}
				},
				O = e => {
					const t = Object(a.f)(e.startDate).getTime() / s.Sb,
						n = Object(a.f)(e.endDate).getTime() / s.Sb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: n,
						eventState: Object(r.e)(t, n)
					}
				},
				y = (e, t) => {
					const n = {
						source: o.eventComposer,
						action: i.c.CLICK,
						subreddit: u.jb(e)
					};
					return t ? {
						...n,
						post: u.J(e, t),
						postEvent: u.M(e, {
							postId: t
						}),
						postCollection: u.L(e, {
							postId: t
						})
					} : n
				}
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			}));
			var o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				r = n("./src/reddit/selectors/experiments/serpSIIDs.ts"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
				c = n("./src/reddit/helpers/search/searchImpressionId.ts");
			const l = (e, t) => n => {
					const i = `flair_name:'${t.postFlairName}'`;
					return {
						source: "post",
						action: "click",
						noun: "post_flair",
						...a.o(n),
						actionInfo: a.d(n),
						correlationId: Object(o.c)(o.a.SearchResults),
						post: a.J(n, e),
						search: {
							...a.N(n, t),
							query: i,
							queryId: a.db(n, s.a.SERP),
							impressionId: Object(r.a)(n) ? c.a.get(s.a.SERP) : void 0
						},
						subreddit: a.jb(n)
					}
				},
				d = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...a.o(t),
					actionInfo: a.d(t),
					correlationId: Object(o.c)(o.a.SearchResults),
					search: a.N(t, e),
					subreddit: a.jb(t)
				}),
				u = e => t => {
					const n = Object(i.g)(e);
					return {
						...a.o(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: a.jb(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				m = () => e => ({
					...a.o(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: a.jb(e)
				}),
				p = e => t => {
					const n = Object(i.g)(e);
					return {
						...a.o(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: a.jb(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				h = (e, t) => n => {
					const o = Object(i.g)(e),
						l = a.J(n, t),
						d = `flair_name:'${o}'`;
					return {
						...a.o(n),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: a.jb(n),
						postFlair: {
							id: e.templateId,
							title: o
						},
						post: l,
						search: {
							query: d,
							subredditId: l ? l.subredditId : void 0,
							subredditName: l ? l.subredditName : void 0,
							postFlairName: o,
							originElement: "post_flair",
							queryId: a.db(n, s.a.SERP),
							impressionId: Object(r.a)(n) ? c.a.get(s.a.SERP) : void 0,
							originPageType: n.platform.currentPage ? a.w(n.platform.currentPage) : void 0
						},
						feed: a.r(n)
					}
				}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "q", (function() {
				return c
			})), n.d(t, "s", (function() {
				return l
			})), n.d(t, "n", (function() {
				return d
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "t", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "r", (function() {
				return y
			})), n.d(t, "f", (function() {
				return k
			}));
			var o = n("./src/reddit/models/Prediction/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const r = "poll",
				a = "predictions",
				i = e => ({
					...Object(s.o)(e),
					source: r,
					action: "select",
					noun: "poll_option"
				}),
				c = e => ({
					...Object(s.o)(e),
					source: r,
					action: "select",
					noun: "prediction_option"
				}),
				l = e => ({
					...Object(s.o)(e),
					source: r,
					action: "view",
					noun: "predict_option_modal"
				}),
				d = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => o => ({
					...Object(s.o)(o),
					source: r,
					action: "confirm",
					noun: "predict",
					poll: Object(s.I)(o, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				u = ({
					pollId: e,
					selectedNumberTokens: t
				}) => n => ({
					...Object(s.o)(n),
					source: r,
					action: "confirm",
					noun: "predict",
					poll: Object(s.I)(n, e, !1, void 0, void 0, t)
				}),
				m = ({
					pollId: e,
					currency: t,
					amount: n
				}) => a => {
					const i = t === o.a.Coins ? n : void 0,
						c = t === o.a.Tokens ? n : void 0;
					return {
						...Object(s.o)(a),
						source: r,
						action: "close",
						noun: "prediction_modal",
						poll: Object(s.I)(a, e, !1, i, c)
					}
				},
				p = e => ({
					...Object(s.o)(e),
					source: r,
					action: "click",
					noun: "add_coins"
				}),
				h = ({
					targetUserId: e
				}) => t => ({
					...Object(s.o)(t),
					source: a,
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				b = ({
					pageType: e
				}) => t => ({
					...Object(s.o)(t),
					source: a,
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				f = () => e => ({
					...Object(s.o)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				g = () => e => ({
					...Object(s.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				C = () => e => ({
					...Object(s.o)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				E = e => t => ({
					...Object(s.o)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "enable_predictions",
					actionInfo: {
						pageType: "predictions_picker"
					},
					setting: {
						value: e ? "1" : "0",
						oldValue: e ? "0" : "1"
					},
					subreddit: Object(s.jb)(t)
				}),
				x = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: "click",
					noun: "next"
				}),
				_ = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: "click",
					noun: "add_more"
				}),
				v = () => e => ({
					...Object(s.o)(e),
					source: a,
					action: "click",
					noun: "start_tournament"
				}),
				O = () => e => ({
					...Object(s.o)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				y = () => e => ({
					...Object(s.o)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works",
					subreddit: Object(s.jb)(e)
				}),
				k = () => e => ({
					...Object(s.o)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more",
					subreddit: Object(s.jb)(e)
				})
		},
		"./src/reddit/helpers/trackers/privateCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...o.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_button",
					subreddit: o.jb(t)
				}),
				r = e => t => ({
					...o.o(t),
					source: e,
					action: "click",
					noun: "request_to_join_submit",
					subreddit: o.jb(t)
				})
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...o.o(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: o.jb(t)
				}),
				r = e => t => ({
					...o.o(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: o.jb(t)
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
			})), n.d(t, "y", (function() {
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "p", (function() {
				return d
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "x", (function() {
				return S
			})), n.d(t, "u", (function() {
				return T
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "s", (function() {
				return I
			})), n.d(t, "v", (function() {
				return w
			})), n.d(t, "w", (function() {
				return N
			}));
			var o = n("./src/reddit/models/ScheduledPost/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...s.o(e),
					screen: s.bb(e),
					subreddit: s.jb(e),
					userSubreddit: s.tb(e)
				}),
				a = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(o.p)(e)
				}),
				i = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...r(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...r(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...r(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...r(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...r(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...r(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...r(t),
					scheduledPost: a(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: a(e)
				}),
				f = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...r(e)
				}),
				g = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...r(e)
				}),
				C = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				x = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: s.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				_ = {
					[o.d.Hourly]: "hourly_frequency",
					[o.d.Daily]: "daily_frequency",
					[o.d.Weekly]: "weekly_frequency",
					[o.d.Monthly]: "monthly_frequency",
					[o.b]: "custom_frequency"
				},
				v = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : _[e],
					...r(t)
				}),
				O = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				y = (e, t, n) => a => ({
					source: "post",
					action: "click",
					noun: Object(o.l)(e),
					...r(a),
					actionInfo: s.d(a, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				k = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				j = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				S = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: a(t)
				}),
				P = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				I = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: a(t)
				}),
				w = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				N = () => (e, t) => {
					const n = r(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: a(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			var o = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/selectors/gold/powerups/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...r.o(e)
				}),
				i = e => t => {
					const n = r.jb(t),
						a = Object(s.x)(t, {
							subredditId: null == n ? void 0 : n.id
						}),
						{
							userFlair: i,
							achievementFlair: c,
							supporterFlair: l
						} = e,
						d = c || l;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...r.o(t),
						subreddit: n,
						userFlair: {
							id: null == i ? void 0 : i.id,
							title: i ? Object(o.g)(i) : void 0,
							isActive: !!i || void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name,
							isLocked: null == d ? void 0 : d.isLocked,
							supporterFlairId: null == l ? void 0 : l.type,
							supporterFlairTitle: null == l ? void 0 : l.name,
							isSupporter: a
						}
					}
				},
				c = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...r.o(e)
				}),
				l = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: r.jb(t),
					...r.o(t)
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			}));
			var o, s, r = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const i = (e, t) => n => ({
					source: s.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: o.SEE_MORE,
					widget: Object(a.xb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				c = (e, t) => n => ({
					source: s.POST,
					action: r.c.CLICK,
					noun: o.REREDDIT_PROMO,
					post: a.J(n, e),
					subreddit: a.jb(n),
					...t && {
						banner: {
							buttonText: t,
							id: o.REREDDIT_PROMO
						}
					},
					...a.o(n)
				}),
				l = () => e => ({
					source: s.SIDEBAR,
					action: r.c.VIEW,
					noun: o.TOPICS_WIDGET,
					...a.o(e)
				}),
				d = e => t => ({
					source: s.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: o.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/helpers/clickSourceData/index.ts");

			function a() {
				const e = Object(s.e)(e => e.platform.currentPage),
					[t, n] = Object(o.useState)({});
				return Object(o.useEffect)(() => {
					n(Object(r.a)(e))
				}, [e]), t
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n("./src/reddit/contexts/ApiContext.tsx");

			function r() {
				const {
					gqlContext: e
				} = Object(o.useContext)(s.a);
				return e
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/meta.ts");
			const i = "undefined" == typeof document ? function() {
				const e = Object(r.e)(a.i) || s.DEFAULT_LOCALE;
				return Object(o.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || s.DEFAULT_LOCALE;
				return Object(o.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			};
			t.a = i;
			const c = () => {
				const e = i(),
					t = Object(r.e)(a.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/useModalState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r(e = !1) {
				const [t, n] = s.a.useState(e);
				return [t, () => n(!0), () => n(!1)]
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = o.fb
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/lib/sentry/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/Post/index.tsx");

			function a() {
				const e = Object(s.useContext)(r.c);
				return e || o.c.captureMessage("No post context provided"), e
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n("./src/lib/CSSVariableProvider/index.tsx");

			function r() {
				return Object(o.useContext)(s.b)
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, s.a.createElement("defs", null, s.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), s.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#svg-add-collection",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => s.a.createElement("svg", c({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(r.a)(i.a.checkbox, e)
			}, t), s.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, s.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
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
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
				className: e,
				isSubreddit: t,
				...n
			}) => s.a.createElement("svg", c({
				className: Object(r.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = l
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), s.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), s.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), s.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), s.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/icons/svgs/Grapple/index.m.less": function(e, t, n) {
			e.exports = {
				grapple: "_23XYJUJn_XitrV-LLkNyCQ",
				mIsDragging: "_1jCsYjqdUw4PYY-s3mGB47"
			}
		},
		"./src/reddit/icons/svgs/Grapple/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Grapple/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(e.className, i.a.grapple, {
					[i.a.mIsDragging]: e.isDragging
				}),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8,2 C8.553,2 9,2.447 9,3 L9,5 C9,5.553 8.553,6 8,6 L6,6 C5.447,6 5,5.553 5,5 L5,3 C5,2.447 5.447,2 6,2 L8,2 Z M14,2 C14.553,2 15,2.447 15,3 L15,5 C15,5.553 14.553,6 14,6 L12,6 C11.447,6 11,5.553 11,5 L11,3 C11,2.447 11.447,2 12,2 L14,2 Z M8,8 C8.553,8 9,8.447 9,9 L9,11 C9,11.553 8.553,12 8,12 L6,12 C5.447,12 5,11.553 5,11 L5,9 C5,8.447 5.447,8 6,8 L8,8 Z M14,8 C14.553,8 15,8.447 15,9 L15,11 C15,11.553 14.553,12 14,12 L12,12 C11.447,12 11,11.553 11,11 L11,9 C11,8.447 11.447,8 12,8 L14,8 Z M8,14 C8.553,14 9,14.447 9,15 L9,17 C9,17.553 8.553,18 8,18 L6,18 C5.447,18 5,17.553 5,17 L5,15 C5,14.447 5.447,14 6,14 L8,14 Z M14,14 C14.553,14 15,14.447 15,15 L15,17 C15,17.553 14.553,18 14,18 L12,18 C11.447,18 11,17.553 11,17 L11,15 C11,14.447 11.447,14 12,14 L14,14 Z"
			})))
		},
		"./src/reddit/icons/svgs/Hamster1/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 53 67"
			}, s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("path", {
				fill: "#000",
				d: "M36.17 15.7877c-2.1457-.6233-4.6272.5142-5.0853 2.419-.174.7268-.5168 1.0273-1.2283 1.124-1.5643.2126-2.9247.8707-4.0924 1.901-.807.7112-1.2403 1.523-1.2154 2.6702.0477 2.1067 1.0792 3.8318 2.0054 5.608.2256.432 2.0283-.631 1.111-.082-.616-1.9145-1.1994-3.6348-1.7152-5.3744-.2127-.72.0527-1.406.7364-1.754 1.2204-.6195 2.4954-1.1375 3.7456-1.702.5923-.2676.93-.057 1.27.465.821 1.2544 1.9995 2.04 3.5757 1.8642 1.6357-.1817 2.555-1.264 3.054-2.7215.6707-1.956-.2665-3.8677-2.1616-4.4176"
			}), s.a.createElement("path", {
				fill: "#FF8717",
				d: "M32.575 18.997c-.1866-1.1486.5913-2.0766 1.949-2.3235 1.4877-.2722 2.729.4466 2.9796 1.7235.2642 1.345-.7003 2.9457-1.9175 3.1832-1.341.2627-2.7447-.9416-3.011-2.5832"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M17.0857 23.965c-2.5846-.806-4.1367.6-4.4678 3.2556-.3653 2.9378.675 6.234 3.5116 7.1787 2.9598.9843 5.8344-1.5318 6.3822-4.5023.4535-2.4616-3.5227-5.3826-5.426-5.932-3.1034-.9685 1.507.4345 0 0M39.321 24.512c-2.184-2.2814-6.028.2842-7.4777 2.256-.521.7074-.9206 1.5057-1.1896 2.3475-.35 1.0897.269.94.3743 1.8643.1922 1.6742 2.1314 3.3578 3.7206 3.5912 4.7354.694 7.7125-6.7713 4.3803-10.2603.1294.1364.259.2717.3894.408-.0658-.0692-.1315-.1384-.1973-.2066-1.9745-2.0624.696.7283 0 0M18.9308 59.6326c-.1867-.0458-.3346.0093-.443.1056-.001 0-.001-.001-.002-.001-1.5598.099-3.8566.7662-4.6848 2.1695-.8887 1.507.7358 2.5096 2.148 2.674 1.553.1813 3.8715-.3148 4.4405-1.8975.439-1.2193-.0328-2.7012-1.4587-3.0506M34.37 60.348c-.242-.0358-.5174.043-.6267.2957-1.5118 3.4664 6.185 5.586 7.6074 2.4245 1.3572-3.016-4.6648-4.4187-6.9808-2.7203"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M39.9895 37.3797c-3.8707-9.353-16.7772-11.6802-23.5762-4.7352-3.177 3.245-4.373 8.2466-4.83 9.7576-1.4357 4.748-1.561 10.198.7932 14.6874 3.987 7.605 16.61 9.4605 23.792 5.505 9.1842-5.058 6.6638-18.3606 3.437-26.1424.2377.5734.4746 1.1468.7124 1.7202-.1096-.2645-.219-.528-.3285-.7925-2.1562-5.211 1.182 2.856 0 0"
			}), s.a.createElement("path", {
				fill: "#FF8717",
				d: "M26.4406 29.6162c3.5285 0 8.4696 2.1882 10.6613 4.9576 2.5828 3.2633 3.7284 8.3103 4.3175 12.3626.4945 3.4113-.4807 8.203-2.2755 11.186-2.1327 3.5455-6.732 4.5153-10.5422 4.4935-4.6918-.026-10.162-.5288-13.2412-4.577-2.77-3.643-3.234-8.4117-2.506-12.8188.401-2.4216 1.0284-5.207 1.9967-7.4706 2.105-4.9197 5.7597-8.1334 11.5893-8.1334"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M41.5915 49.6162c.03-.6952.008-1.3605-.044-2l.044 2zM37.4186 60.1975c-1.3365-.7743-2.342-2.1664-2.536-3.716-.0665-.533-.0396-1.074-.0128-1.61.0477-.9814.1004-1.9818.458-2.8933.4095-1.0428 1.1846-1.8868 1.9427-2.7034.46-.4967.9212-.9934 1.3823-1.49.7273-.7844 1.6783-1.6223 2.688-1.475-.4125-2.465-1.0336-5.1514-2.0422-7.567-1.0493 2.024-3.0208 3.9137-5.4086 2.871-.5147-.2242-.8774-.3756-1.3395-.7027-.8615-.7398-1.9138-.9498-3.157-.6288-.2702.3008-.5265.6128-.769.9368-.5157.521-1.1567.9812-1.9347.7632-1.7777-.5007-2.97-2.9346-5.1046-1.4002-.8675.624-1.9396 1.5637-3.0953 1.5082-2.0044-.096-3.3925-1.0983-4.2153-2.752-.776 2.0393-1.2024 4.4066-1.5432 6.479-.0407.2524-.0636.5098-.0974.7652.6232-.0353 1.2462-.013 1.8206.219.6776.2727 1.2182.8037 1.74 1.3225.8435.8388 1.708 1.706 2.187 2.8033.4382 1.0014.5227 2.123.5366 3.2183.015 1.0882-.0338 2.1754-.145 3.2566-.1313 1.284-.475 2.7296-1.571 3.3606 3.1707 2.359 7.553 2.7054 11.4153 2.7266 3.2216.0182 6.9976-.6774 9.4033-3.0224-.2027-.0868-.4104-.1585-.6022-.2695"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M19.3634 62.297c-.4735.8925-1.877 1.0785-2.832 1.1074-.5274.0154-1.058-.045-1.5395-.25-.894-.3822-.2403-1.1526.2322-1.5266.884-.7018 2.083-1.0513 3.2383-1.1217.114-.0072.2012-.0478.2752-.0993.846.2655.982 1.2193.6257 1.8904M39.1353 63.7074c-.7183.2857-1.607.0788-2.318-.0972-1.225-.3028-2.4647-1.2617-2.3147-2.656.0894-.0388.1756-.0948.2438-.1942 1.16-1.6788 4.4677-.7897 5.5096.6697.7194 1.008-.38 1.984-1.1207 2.2777"
			}), s.a.createElement("path", {
				fill: "#C18D42",
				d: "M17.2218 28.842c-.2698-1.599-.862-3.239-2.209-4.0722-1.519-.9397-1.5314 2.7022-1.4284 3.646.1773 1.6212.7036 4.1546 2.031 4.9962 1.0735.6814 1.7476-.4387 1.9068-1.9332.105-.9777-.1392-1.678-.3004-2.6368-.3327-1.9776.2232 1.3268 0 0"
			}), s.a.createElement("path", {
				fill: "#FF8717",
				d: "M15.5475 24.681c1.747.664 2.8352 2.0178 3.3196 3.9672.3962 1.5937.7234 3.6126-.1366 4.959 1.6953.081 3.8534-.3464 3.6123-2.602 1.339-1.9475-4.229-7.018-6.7952-6.3243M33.6698 32.7516c-.407-.451.364.404 0 0"
			}), s.a.createElement("path", {
				fill: "#C18D42",
				d: "M35.796 29.1142c-.1635.7146-.323 1.4594-.211 2.192.178 1.1545.9577 1.6425 1.872 1.0695 1.2238-.7655 1.577-2.3845 1.9186-3.693.1864-.7164.529-3.6248-.9526-2.9716-1.4423.6354-2.308 2.0174-2.627 3.4032-.238 1.0394.3698-1.6104 0 0"
			}), s.a.createElement("path", {
				fill: "#FF8717",
				d: "M35.3533 32.5596c-1.0047-1.2304-.5965-3.2887-.0174-4.64.6404-1.496 1.6748-2.6295 3.2115-3.037-.0695-.041-.136-.083-.2138-.114-1.9296-.775-4.9295 1.584-5.8667 3.0262-.6885 1.0606-2.0135 2.6206.8063 4.2594.7018.4085 1.3024.687 2.08.5054"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M32.8514 39.097c-.577.676-1.6076.6748-2.4273.0963-1.264-.8917-1.1062-3.3024.122-4.234.7017-.532 1.6705-.4205 2.1302.1645 1.53 1.946.6833 3.3772.1752 3.973"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M30.755 38.0938c-.2703-.432-.2692-1.2056-.039-1.8203.3575-.9478 1.322-.8296 1.6942.092.213.5263.1684 1.252-.0664 1.597-.7778 1.1484-1.3505.512-1.5888.1313"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M24.71 39.009c-.6662.8048-2.161.7863-3.1096.0826-1.5367-1.1425-1.2565-2.9377-.0257-3.8424.9816-.721 1.9472-.897 2.8605-.1542 1.636 1.3315 1.2372 2.751.2748 3.914"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M21.79 38.1136c-.322-.4-.3135-1.296-.0326-1.8656.4566-.922 1.1752-.7538 1.537-.016.2884.589.359 1.1686.0612 1.7166-.5324.982-1.0995.7425-1.5656.165"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M24.5598 40.2202c.8506 1.8878 3.3605 1.9104 3.9825-.235.0587-.206-.3954-.314-.471-.3215-1.1-.0954-2.188-.0502-3.278.1646-.637.1256.158.5627.459.5024.9212-.182 1.8433-.2474 2.7733-.167-.157-.1068-.314-.2136-.471-.3216-.14.4862-.3785.834-.7293 1.098-.5525.4157-1.0443-.1445-1.3017-.716-.147-.3266-1.094-.2915-.9638-.0038"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M22.5907 41.495c1.505 1.488 4.0743 1.4078 5.0584-.571-.3263-.06-.6527-.121-.98-.182-.2436 2.3982 3.9335 2.359 4.8708.653.1018-.186-.8275-.4596-.9802-.1822-.556 1.1467-1.526 1.0504-2.9105-.2888.029-.284-.8573-.428-.98-.182-.497 1.0008-1.7188 2.179-3.194.7215-.1837-.182-1.14-.221-.8843.0315M19.5653 46.516c-.473 6.7128 8.6924 4.2055 5.1774-.548-.6672-.903-.7844.151-.5202.7218.5274 1.1447.4853 2.1653-.5644 2.844-1.2192.7874-2.6945.0107-2.9834-1.216-.112-.5384-.144-1.082-.0936-1.6312.0237-.3453-.993-.4877-1.0157-.1705M29.6923 44.8475c-1.689 1.2247-1.5924 4.6386.8496 4.7633 1.13.0575 2.2874-.3435 3.0557-1.1673.3415-.3653 1.5518-2.4732.5793-2.709-1.2043-.293-1.2043 3.92-3.9756 3.001-.9725-.3227-.5812-1.1573-.5253-1.9048.0163-.218 1.4523-3.0258.0163-1.9832"
			})))
		},
		"./src/reddit/icons/svgs/Hamster2/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 53 67"
			}, s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("path", {
				fill: "#FFF",
				d: "M9.5927 33.2517c.829 1.0475-1.9245 5.7044-2.2983 5.6247-7.91-1.6942-2.065-11.142 2.2983-5.6247z"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M7.2853 38.8738c-7.8952-1.69-2.0557-11.1393 2.297-5.625.8272 1.047-.4264.8297-.9997.3446-1.1508-.97-2.3416-1.2604-3.462-.3077-1.3005 1.107-.879 3.0184.443 3.748.585.3038 1.202.5194 1.8517.6446.4058.0876.243 1.275-.13 1.1955"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M50.0333 34.034c-.1167 1.5037-.772 2.978-1.8564 3.877-.4812.3997-3.1335 1.7-3.25.3792-.1457-1.6356-1.7525-4.3107-.3047-6.062 1.7012-2.06 5.6625-1.444 5.411 1.8057z"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M38.8415 2.2205c-2.7586-.8015-5.949.661-6.538 3.11-.2237.9345-.6645 1.321-1.5794 1.4452-2.011.2734-3.7602 1.1195-5.2615 2.444-1.0375.9146-1.5946 1.9584-1.5627 3.4333.0614 2.7088 1.3876 4.9268 2.5785 7.2106.29.5554 2.6078-.8114 1.4285-.1056-.7922-2.4615-1.5422-4.6733-2.2054-6.91-.2734-.9256.0677-1.8078.9468-2.2552 1.569-.7964 3.2084-1.4625 4.8157-2.188.7615-.3443 1.196-.0734 1.633.5976 1.0553 1.6128 2.5707 2.623 4.597 2.397 2.1033-.2337 3.2852-1.6254 3.9266-3.4992.8624-2.515-.3425-4.9727-2.779-5.6797"
			}), s.a.createElement("path", {
				fill: "#FF8717",
				d: "M33.9315 6.857c-.224-1.3784.7095-2.492 2.3388-2.7883 1.7852-.3266 3.275.536 3.5755 2.0682.317 1.614-.8404 3.5347-2.301 3.8197-1.6092.3153-3.2938-1.13-3.6133-3.0997"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M14.7982 12.4437c-3.36-1.0258-5.3778.7637-5.8082 4.1436-.4748 3.739.8778 7.9344 4.5652 9.1366 3.8478 1.2526 7.5847-1.9496 8.297-5.7303.5894-3.133-4.5797-6.8506-7.054-7.55-4.0343-1.2325 1.959.5532 0 0M43.3042 13.0588c-2.8393-2.6964-7.8367.3357-9.7212 2.666-.6773.836-1.1967 1.7795-1.5465 2.7743-.455 1.288.3498 1.111.4866 2.2034.25 1.9786 2.771 3.9682 4.837 4.244 6.156.8204 10.0262-8.0023 5.6943-12.1256.1683.161.3367.321.5063.482-.0855-.0817-.171-.1634-.2564-.244-2.567-2.4376.9047.8605 0 0M16.2644 58.021c-.2208-.059-.3958.012-.5237.136-.0012 0-.0012-.0012-.0024-.0012-1.8447.1275-4.5607.9865-5.54 2.7936-1.051 1.9405.87 3.2314 2.5398 3.4432 1.8366.2334 4.5785-.4055 5.2513-2.4435.519-1.57-.0387-3.478-1.725-3.928M35.8236 58.9218c-.272-.045-.582.0543-.705.3726-1.7005 4.3674 6.9575 7.0378 8.5576 3.0546 1.5267-3.7998-5.2473-5.567-7.8526-3.4272"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M43.621 29.1977c-4.9592-11.951-21.4957-14.9246-30.207-6.0505-4.0707 4.1463-5.603 10.5374-6.1882 12.468-1.8397 6.067-2.0003 13.0306 1.016 18.767 5.1085 9.718 21.2816 12.0886 30.4837 7.0343 11.767-6.463 8.538-23.4607 4.4034-33.4042.3046.7327.608 1.4654.9127 2.198-.1402-.338-.2804-.6746-.4207-1.0126-2.7626-6.6584 1.5146 3.6495 0 0"
			}), s.a.createElement("path", {
				fill: "#FF8717",
				d: "M25.8506 19.7317c4.5594 0 10.944 2.8204 13.7762 6.3902 3.3375 4.2063 4.8178 10.7118 5.579 15.935.639 4.3973-.6212 10.5736-2.9403 14.4188-2.7558 4.57-8.6988 5.8202-13.6222 5.792-6.0627-.0332-13.131-.6814-17.1098-5.8996-3.5793-4.6956-4.179-10.8425-3.2382-16.523.518-3.1216 1.329-6.7118 2.58-9.6297 2.7202-6.3415 7.4425-10.4838 14.9753-10.4838"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M45.9425 45c.03-.6952.008-1.3605-.044-2l.044 2zM39.8434 58.144c-1.7227-.9698-3.0188-2.7136-3.2686-4.6547-.0858-.6677-.0512-1.3455-.0166-2.017.0615-1.2292.1293-2.4824.5904-3.6243.5277-1.3063 1.5267-2.3634 2.504-3.3865.593-.622 1.1872-1.2443 1.7815-1.8665.9376-.9825 2.1633-2.032 3.4645-1.8475-.5315-3.088-1.332-6.453-2.632-9.4792-1.3524 2.5355-3.8935 4.9027-6.971 3.5964-.6636-.2807-1.131-.4704-1.7266-.88-1.1105-.927-2.467-1.19-4.069-.788-.3485.377-.679.7677-.9914 1.1736-.6647.6525-1.4908 1.2292-2.4937.956-2.2913-.6272-3.8283-3.676-6.5793-1.754-1.1182.7816-2.5 1.959-3.9896 1.8893-2.5832-.12-4.3725-1.3758-5.433-3.4472-1.0002 2.5544-1.5497 5.5198-1.989 8.116-.0525.316-.082.6386-.1255.9585.803-.0443 1.606-.0165 2.3464.2743.8734.3415 1.57 1.0066 2.2425 1.6566 1.0874 1.0508 2.2016 2.137 2.819 3.5116.5648 1.2545.6737 2.6594.6916 4.0315.0193 1.3633-.0435 2.7252-.187 4.0796-.169 1.6085-.612 3.4193-2.0248 4.2097 4.087 2.9553 9.735 3.389 14.7134 3.4156 4.1523.0226 9.0192-.8486 12.12-3.7862-.2614-.1088-.529-.1986-.7762-.3377"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M16.6775 61.5205c-.5682 1.19-2.2523 1.438-3.3982 1.4765-.633.0205-1.2697-.0602-1.8475-.3336-1.0727-.5094-.2883-1.5367.2787-2.0352 1.0607-.9357 2.4997-1.4018 3.886-1.4957.137-.0097.2414-.064.3303-.1325 1.015.354 1.1784 1.6258.7507 2.5205M41.3178 62.8585c-.838.2857-1.875.079-2.7043-.097-1.429-.303-2.8756-1.2618-2.7005-2.656.1043-.039.2048-.095.2843-.1944 1.3534-1.6787 5.2124-.7896 6.428.6698.8393 1.008-.4433 1.984-1.3075 2.2777"
			}), s.a.createElement("path", {
				fill: "#C18D42",
				d: "M14.4914 18.1648c-.3373-1.9542-1.0774-3.9587-2.7615-4.977-1.8987-1.1487-1.9142 3.3025-1.7855 4.4562.2217 1.9814.8796 5.0777 2.5387 6.1064 1.342.8328 2.1846-.5362 2.3836-2.363.131-1.1948-.174-2.0508-.3754-3.2226-.416-2.417.279 1.6217 0 0"
			}), s.a.createElement("path", {
				fill: "#FF8717",
				d: "M11.8985 13.079c1.9966.812 3.2402 2.4664 3.7938 4.849.4527 1.9478.8267 4.4154-.1562 6.061 1.9376.099 4.404-.4234 4.1285-3.1804 1.5303-2.38-4.8333-8.5774-7.766-7.7295M35.0207 23.1353c-.407-.451.364.404 0 0"
			}), s.a.createElement("path", {
				fill: "#C18D42",
				d: "M38.2093 19.4974c-.2045.9188-.4038 1.8764-.264 2.8182.2225 1.4844 1.197 2.112 2.34 1.3752 1.5298-.9843 1.9712-3.066 2.3983-4.748.233-.9213.6613-4.6607-1.1908-3.8208-1.803.8168-2.885 2.5937-3.2835 4.3754-.2977 1.3363.462-2.0706 0 0"
			}), s.a.createElement("path", {
				fill: "#FF8717",
				d: "M37.7916 23.9292c-1.2917-1.538-.767-4.111-.0223-5.8.8235-1.87 2.1534-3.287 4.1292-3.7963-.0894-.0513-.175-.1037-.275-.1424-2.481-.9687-6.3378 1.98-7.5428 3.7826-.8853 1.3257-2.5888 3.2757 1.0366 5.3243.9024.5106 1.6746.859 2.6743.6317"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M34.0283 31.3767c-.721.8113-2.0094.81-3.034.1158-1.58-1.07-1.383-3.963.1523-5.081.877-.6384 2.088-.5045 2.6627.1976 1.9127 2.3352.854 4.0527.219 4.7677"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M31.106 29.4776c-.2703-.432-.2692-1.2056-.039-1.8204.3574-.9477 1.322-.8296 1.6942.092.213.5264.1684 1.252-.0664 1.597-.7778 1.1484-1.3506.5122-1.5888.1314"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M23.8934 30.2714c-.7994.9656-2.5933.9435-3.7315.099-1.844-1.371-1.508-3.5252-.031-4.6108 1.178-.8653 2.3368-1.0765 3.4327-.185 1.9633 1.5977 1.4846 3.301.3297 4.6968"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M20.141 29.4974c-.322-.4-.3135-1.2962-.0326-1.8657.4566-.922 1.1752-.7537 1.537-.0158.2884.5886.359 1.1683.061 1.7164-.5322.982-1.0993.7424-1.5654.165"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M23.9138 33.604c1.0632 1.8878 4.2007 1.9104 4.9782-.235.0733-.206-.4943-.314-.5887-.3215-1.375-.0955-2.735-.0502-4.0976.1646-.796.1257.1975.5628.574.5025 1.1512-.1822 2.304-.2475 3.4664-.167-.196-.1068-.3923-.2136-.5886-.3216-.175.486-.4732.834-.9117 1.0977-.6905.4157-1.3054-.1445-1.627-.716-.184-.3266-1.3676-.2914-1.205-.0038"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M20.9512 35.318c1.8397 2.232 4.9797 2.112 6.1826-.8564-.399-.09-.798-.1816-1.198-.273-.2976 3.5973 4.8077 3.5387 5.9532.9794.1245-.279-1.0113-.6892-1.198-.273-.6794 1.72-1.8652 1.5755-3.5572-.4334.0354-.426-1.048-.642-1.198-.273-.6075 1.5012-2.1007 3.2685-3.9037 1.0823-.2244-.2732-1.393-.3318-1.0808.047M44.4978 32.213c1.7332-2.056 5.7836-1.429 5.5353 1.821-.115 1.5038-.7808 2.977-1.8867 3.8733-.4907.3984-3.198 1.692-3.3206.3704-.1534-1.6365 4.8643-1.0204 4.2203-4.8223-.2264-1.3343-1.284-.9385-2.1835-.974-.262-.0102-3.8398 1.4795-2.3647-.2684"
			})))
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/MarkdownMode/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 208 128"
			}, s.a.createElement("rect", {
				width: "198",
				height: "118",
				x: "5",
				y: "5",
				ry: "10",
				stroke: "currentColor",
				strokeWidth: "10",
				fill: "none"
			}), s.a.createElement("path", {
				d: "M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Poll/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M2.1952,13.9279 C2.9452,13.9279 3.5382,14.3119 3.8382,14.8939 L2.8962,15.3249 C2.7702,15.0489 2.4882,14.8519 2.1232,14.8519 C1.6192,14.8519 1.2232,15.3189 1.2232,15.9489 C1.2232,16.5849 1.6252,17.0409 2.1172,17.0409 C2.4882,17.0409 2.7772,16.8369 2.9262,16.5369 L3.9162,16.8909 C3.6102,17.5559 2.9802,17.9639 2.1952,17.9639 C1.0492,17.9639 0.1202,17.0759 0.1202,15.9489 C0.1202,14.8279 1.0492,13.9279 2.1952,13.9279 Z M11.5004,14.5 C12.3294,14.5 13.0004,15.171 13.0004,16 C13.0004,16.829 12.3294,17.5 11.5004,17.5 L6.5004,17.5 C5.6714,17.5 5.0004,16.829 5.0004,16 C5.0004,15.171 5.6714,14.5 6.5004,14.5 L11.5004,14.5 Z M1.8953,8.0003 C2.8063,8.0003 3.5503,8.2643 3.5503,9.0313 C3.5503,9.3433 3.3523,9.5893 3.0763,9.7813 C3.4483,9.9553 3.7243,10.2253 3.7243,10.6623 C3.7243,11.5179667 2.93757778,11.8598556 2.22929983,11.8952023 L2.1053,11.8983 L0.3723,11.8983 L0.3723,8.0003 L1.8953,8.0003 Z M18.5004,8.5 C19.3294,8.5 20.0004,9.171 20.0004,10 C20.0004,10.829 19.3294,11.5 18.5004,11.5 L6.5004,11.5 C5.6714,11.5 5.0004,10.829 5.0004,10 C5.0004,9.171 5.6714,8.5 6.5004,8.5 L18.5004,8.5 Z M1.8623,8.8693 L1.4753,8.8693 L1.4753,11.0283 L1.9843,11.0283 C2.3013,11.0283 2.5853,10.7603 2.5853,10.4623 C2.5853,10.0713909 2.27786198,9.92097769 2.01460128,9.89686048 L1.9373,9.8933 L1.9373,9.7853 C2.0923,9.7853 2.4353,9.6783 2.4353,9.3333 C2.4353,8.9793 2.1923,8.8693 1.8623,8.8693 Z M2.783,1.9997 L4.096,5.8977 L2.963,5.8977 C2.963,5.8977 2.147,3.3737 2.063,3.0137 L2.063,3.0137 L2.039,3.0137 C1.955,3.3737 1.127,5.8977 1.127,5.8977 L1.127,5.8977 L-2.25597319e-13,5.8977 L1.319,1.9997 L2.783,1.9997 Z M15.5004,2.5 C16.3294,2.5 17.0004,3.171 17.0004,4 C17.0004,4.829 16.3294,5.5 15.5004,5.5 L6.5004,5.5 C5.6714,5.5 5.0004,4.829 5.0004,4 C5.0004,3.171 5.6714,2.5 6.5004,2.5 L15.5004,2.5 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", c({}, e, {
				className: Object(r.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), s.a.createElement("g", null, s.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/SnooPosting/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 45 43"
			}, s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("g", {
				fill: "#0DD3BB",
				transform: "translate(0 4)"
			}, s.a.createElement("ellipse", {
				cx: "25.492",
				cy: "22.2631",
				transform: "rotate(5 25.492 22.263)",
				rx: "17.6396",
				ry: "13.9883"
			}), s.a.createElement("ellipse", {
				cx: "19.3519",
				cy: "17.9699",
				transform: "rotate(5 19.352 17.97)",
				rx: "14.7297",
				ry: "16.0688"
			}), s.a.createElement("ellipse", {
				cx: "14.0251",
				cy: "27.7862",
				transform: "rotate(5 14.025 27.786)",
				rx: "8.4751",
				ry: "8.9243"
			}), s.a.createElement("ellipse", {
				cx: "11.808",
				cy: "17.4531",
				transform: "rotate(5 11.808 17.453)",
				rx: "10.7695",
				ry: "10.8575"
			}), s.a.createElement("ellipse", {
				cx: "12.1168",
				cy: "22.4429",
				transform: "rotate(5 12.117 22.443)",
				rx: "8.4751",
				ry: "8.9243"
			})), s.a.createElement("path", {
				fill: "#FFF",
				d: "M35.6875 31.5625c-1.3275 1.8696-6.7017 5.0483-8.7188 6.0313-2.0174.983-13.478 2.1465-15.625-.6876-1.5625-2.0624-.9687-4.625 1-6.1562C9.6563 29.2812 8.125 27.8437 7 24.9062c-.0872-.2277-1.1015-1.763-.875-1.7812l.9375-4.0313c.8158-2.9308 4.2118-5.1638 6.7992-6.5715 2.3198-1.2615 4.9067-1.934 7.5113-2.1714 2.1052-.192 4.259-.101 6.277.554 2.0182.6552 4.2956 1.063 5.5063 2.8765 0 0 1.5532 3.6305 1.6736 5.5487.1204 1.9177-2.0402 6.1206-2.0402 6.1206"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M31.5665 34.5708c.6293 1.944.9 4.0143.794 6.0635 0 0-.473 1.3654-6.7204 1.3654-6.2478 0-7.6077-.7104-7.6077-.7104.047-1.224.0518-2.4493.014-3.6732-.0028-.097.0414-.2356.13-.2062l-.1555-7.319 12.5354-2.0634c.4433.252.8525.5696 1.211.9412l-.2007 5.6022z"
			}), s.a.createElement("path", {
				fill: "#FF0",
				d: "M34.0514 21.4676c-.3642.8707-.5738 1.8017-.8143 2.7188-.601 2.29-1.4044 4.5218-2.3967 6.658.1578.0357.3286.0014.4624-.0927.072.7567 1.0046 1.1686 1.678.8836.6734-.2846 1.071-1.0334 1.2235-1.777.0223-.1084.0407-.2198.0277-.33-.0202-.1737-.114-.3265-.1996-.477-.6817-1.2056-.9025-2.6877-.6033-4.0528.099-.4518.2715-.9186.6318-1.1878.2046-.1536.452-.2293.6975-.2872.6156-.146 1.2512-.198 1.8812-.154l.33-1.1467c.054-.1864.108-.3773.0993-.572-.0212-.4554-.393-.8263-.8058-.9727-.412-.1463-.8604-.115-1.2947-.0823"
			}), s.a.createElement("path", {
				fill: "#F15A24",
				d: "M12.322 21.7194c.061.3407.127.693.3168.977.3034.4517.85.6324 1.3573.785.3797.1136.7785.2284 1.165.141.2643-.0598.5012-.2104.725-.3697.61-.433 1.1792-.9615 1.5326-1.6395.3962-.7593.4926-1.684.2625-2.5148-.0912-.3294-.2458-.6615-.524-.843-.2292-.1494-.5564-.2205-.6293-.4927-.1057-.3946-1.938-.4537-2.25-.4202-.474.051-.939.1728-1.2797.5403-.9068.9784-.8953 2.613-.676 3.8366M24.194 19.0418c.0644.3482.1334.708.3344.998.3193.462.8963.6468 1.431.8023.4005.1164.8212.234 1.2286.1447.2793-.0614.529-.2154.7647-.3776.644-.443 1.244-.983 1.617-1.6756.4174-.776.5195-1.7205.2768-2.5694-.0964-.3366-.2596-.6762-.5526-.8614-.242-.1528-.587-.2255-.664-.5037-.1117-.4033-2.0443-.464-2.3736-.4297-.4998.052-.9902.1766-1.3498.5523-.9564 1-.9442 2.67-.7126 3.9202"
			}), s.a.createElement("path", {
				fill: "#CCC",
				d: "M35.9408 20.9708c.222.0064.4462.0053.6533.066.4068.1196.9188.5786.945-.1845.007-.1902.012-.3904-.0708-.56-.122-.251-.5983-.9602-.824-1.087-.1087-.061-.236-.0694-.359-.073-.3063-.0092-.613.0014-.9182.0315-.9906.0986-.7374 1.4513.01 1.725.177.0647.3693.0764.5638.082"
			}), s.a.createElement("path", {
				fill: "#FF7BAC",
				d: "M37.8215 19.8532c-.0306.0467-.0694.0968-.123.099-.0946.0034-.1258-.128-.1816-.2085-.0644-.0938-.1824-.1258-.29-.1506-.4784-.112-1.163-.1415-1.5974-.3738-.4688-.251-.4095-.3117-.2434-.8975.178-.6268.4606-1.3722 1.071-1.6617 2.0532-.9728 2.1506 1.9814 1.3643 3.1932"
			}), s.a.createElement("path", {
				fill: "#FF0",
				d: "M30.808 32.959c.0077.0694.0343.1556.1004.1593-.0834-.0335-.1158.1122-.095.203.429.0508.8583.1012 1.2877.152.263.0313.5674.0482.752-.151.1304-.141.16-.3512.1825-.5462.032-.274.064-.548.0964-.822.0082-.0724.0135-.1552-.0336-.2086-.034-.0388-.087-.051-.137-.0588-.219-.0327-.446-.0064-.6532.075-.6713.2642-.6634-.6747-1.1966-.4688-.4516.1747-.346 1.279-.3035 1.6663"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M31.9858 34.3613c.3538.146.738.196 1.1182.2014 2.1213.03 4.1668-1.396 5.0646-3.4086.8978-2.0117.661-4.4994-.4998-6.3584-.514-.8238-1.3235-1.5857-2.2608-1.5168-.594.0433-1.1344.429-1.4745.9404-.3405.5112-.499 1.1347-.552 1.7558-.1233 1.4442.3143 2.9324 1.1923 4.053"
			}), s.a.createElement("path", {
				fill: "#F7E1CB",
				d: "M11.2195 30.4984l9.4083-2.7606 1.318 7.9058-7.4904 2.7607"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M12.7516 37.7683c.2136.2304.5864.1393.8525-.0207 1.096-.6588 1.5454-2.1516 1.337-3.4564-.108-.6758-.3805-1.3463-.877-1.792-.4966-.446-1.243-.6212-1.827-.3125-.402.212-.682.6167-.8776 1.041-.4437.9637-.5192 2.107-.206 3.1258.1683.548.462 1.0782.9255 1.388.4637.3095 1.1184.3464 1.543-.0195"
			}), s.a.createElement("g", null, s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.37 11.0563c-2.068-.6386-4.2747-.727-6.4318-.54-2.669.2313-5.8933.8336-7.6967 2.1168-.6986.4972-3.0193 1.2145-3.5257 3.1977"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.726 2.906-1.237 4.4356.5752 1.8004 1.926 3.0712 2.306 3.275"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M10.0543 14.9054c-1.561-.3985-3.317.0782-4.4594 1.2103-1.1422 1.132-1.7258 2.906-1.237 4.4356.5756 1.8004 1.926 3.0712 2.306 3.275"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M11.823 29.9606c-2.7657-.9024-4.92-3.4455-5.3476-6.3126-.034-.2298.0103-.55.2428-.5677M33.1486 15.4973c.192.314.384.6286.576.9427.114.1872.2283.374.33.5677.5276 1.003.7084 2.182.5062 3.2958M35.8308 16.6844c-1.6376 4.9262-3.3644 9.8235-5.1785 14.688"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M35.671 17.0804c.2263-.288.586-.4587.9517-.4895.366-.0313.736.0692 1.0563.2483.2708.1508.515.364.6543.6404.1393.276.161.6202.0118.8913M38.3983 17.8874c-.6142 1.9982-1.3304 3.9652-2.145 5.891"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.245 21.08c.2485-.5347.1342-1.2158-.2747-1.641-.4093-.425-1.0872-.5678-1.6347-.3436-.1367.0562-.278.1512-.301.297"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M37.2275 21.501c.0044-.5535-.3094-1.0984-.791-1.374-.482-.2753-1.113-.2705-1.5904.012"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M34.2996 20.788c.7136-.389 1.6686-.2757 2.2706.269.2052.1856.376.4304.3964.706.006.0785-.0008.1578-.0196.2345M31.8127 33.921c.3626.1424.7564.1912 1.1458.1963 2.1737.0294 4.2697-1.3607 5.1896-3.3225.92-1.961.6773-4.386-.512-6.1982-.5268-.803-1.3562-1.5457-2.3166-1.4785-.6087.0423-1.1624.4184-1.511.9168-.3488.4983-.5113 1.106-.5655 1.7115-.1264 1.4077.322 2.8584 1.2216 3.9508M33.9912 29.3915l-1.467 4.0393M32.6352 33.0774c-.951.6286-1.8904 1.2738-2.8177 1.935"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.6496 31.0486l-.6455 4.1743c-.0058.0366-.0053.083.0385.099.044.0162.0833-.0547.0346-.0517"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M30.1422 33.367c.1982-.3278.4635-.6147.7748-.8386.078.1534.1257.3226.139.4943.287-.1218.5986-.183.9103-.1802-.3703.3692-.701.778-.9844 1.2173"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M31.195 33.0817c-.389.5013-.7464 1.0268-1.0695 1.5725.0302-.0257.0604-.0514.0902-.0775M30.7412 32.969c.0104.3634-.12.7275-.3766 1.0607M32.6658 33.0168c.1094-.676.1787-1.3585.2074-2.0422-.326.1956-.6525.3912-.979.5872-.1045.0627-.2386.1262-.3414.06-.063-.04-.091-.1166-.1135-.1874-.133-.4158-.2417-.8396-.3253-1.2682-.291.3247-.547.6807-.7626 1.0594"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M33.4372 28.176c-.177.4906-.354.9812-.5313 1.472-.285.7874-.5726 1.5822-1.0206 2.291M36.2456 21.1264c.048-.0176.0608-.0917.0218-.1244-.3043.6815-.5497 1.3883-.732 2.1112M30.4806 30.95c-.0843.2098-.1095.43-.074.6453M32.6366 25.235c-1.3602 1.8225-3.2855 3.1704-5.3524 4.1286-2.0672.958-4.284 1.55-6.5023 2.0763M30.348 27.747c.454.2455.8732.5552 1.24.9174M31.3832 34.1252c.6447 1.895.9225 3.913.8134 5.9105"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M20.2203 27.5033c.529 2.5225.9453 5.069 1.2474 7.6282.0048.042.0063.0925-.0276.1178-.0345.0253-.095-.029-.0603-.0536"
			}), s.a.createElement("path", {
				stroke: "#000",
				d: "M21.462 35.1753c-2.4317 1.1842-4.9882 2.113-7.614 2.7662-.0714.0177-.1587.031-.208-.023-.0494-.0544.038-.1667.0828-.1083",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), s.a.createElement("path", {
				stroke: "#000",
				d: "M13.3965 36.9094l.6482 1.51c-.01-.0428-.0207-.086-.0312-.129",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), s.a.createElement("path", {
				stroke: "#000",
				d: "M12.104 37.242c.219.2246.601.1358.8735-.0202 1.123-.6422 1.5835-2.0972 1.3698-3.369-.111-.659-.3898-1.3124-.8986-1.747-.5087-.4348-1.2736-.6054-1.872-.3045-.4118.2066-.6988.601-.8992 1.0147-.4546.9394-.532 2.054-.211 3.047.1723.5342.4733 1.051.9482 1.353.4753.3016 1.1462.3376 1.5813-.019M10.6766 30.3595c-.0715-.0158-.065.1064-.022.1655l.7927 1.0914c.011.0154.0276.0326.0457.0264.018-.006.0015-.0418-.01-.0268M10.6893 30.2222c3.1114-1.025 6.255-1.953 9.425-2.782.0814.1758.1628.352.2443.5274",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), s.a.createElement("path", {
				stroke: "#000",
				d: "M17.6433 28.0588c-.2222-.2202-.246-.6037-.5073-.7755-.2244-.148-.522-.0737-.7792.0048-1.0368.3175-2.073.6346-3.11.952-.2287.07-.4843.163-.579.382-.1275.2944.111.6096.332.843M13.849 27.877c-.025-.1897.085-.3783.2402-.4906.1554-.1123.349-.1592.5393-.1816.302-.0364.678.0275.7848.3115M17.774 36.8926c-.1595-.0286-.2392.1064-.234.201.068 1.193.0596 2.3876-.0247 3.5806M27.3276 14.627c-1.155-.254-2.4348.1776-3.1982 1.0778-.763.9005-.975 2.23-.5294 3.3214.203.498.537.9487.9825 1.252.757.5157 1.7714.556 2.64.263.9157-.3095 1.7137-.983 2.115-1.8592.401-.8763.3797-1.9464-.108-2.7783-.4875-.8312-1.447-1.3828-2.412-1.3303",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeWidth: ".5",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M15.604 17.5287c-.993-.5754-2.3376-.3743-3.2093.371-.872.745-1.2777 1.9505-1.1753 3.0903.038.4224.1422.845.359 1.2103.4368.7372 1.309 1.1618 2.168 1.1684.8592.007 1.6937-.3673 2.346-.924.2724-.2316.518-.497.7086-.799.465-.738.5666-1.6924.2675-2.511-.2992-.8188-.993-1.485-1.8255-1.7524"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M25.8734 23.061c.019.8443.036 1.706-.2144 2.513-.3128 1.0058-1.0497 1.8733-1.9936 2.347-.9442.4738-2.0827.547-3.0803.1982"
			}), s.a.createElement("path", {
				fill: "#000",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M24.826 27.045c-.909 1.0263-2.4282 1.5463-3.7262 1.098-.325-.1124-.682-.385-.5983-.7172-.305-.1123-.6554.132-.9616.024-.1132-.0405-.2045-.124-.2882-.21-.507-.519-.8602-1.1846-1.0054-1.894 1.3742.2257 2.797.237 4.147-.1035.6403-.1614 1.2614-.404 1.8365-.7284.2493-.1406 1.482-1.2717 1.6324-1.2287.3404.0972-.014 1.6884-.081 1.9398-.1798.6673-.4952 1.3003-.9554 1.82z"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M27.1593 11.0486c.356-.539.901-.9515 1.5182-1.148.3725-.1184.7656-.1595 1.157-.1632 1.2186-.011 2.452.3553 3.4137 1.1013.9616.7464 1.63 1.8822 1.7275 3.0925l.0405 1.2437c.0792.8083-.1735 1.644-.687 2.274-.0244.03-.0506.0716-.0296.1038.021.0323.0833-.0212.0465-.033M19.0092 10.923c-.1602-.079-.1772-.2954-.172-.4733.078-2.7703.1672-5.5993 1.1384-8.1964 1.835.0793 3.6632.3303 5.4515.7494"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
			}), s.a.createElement("path", {
				stroke: "#000",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				d: "M24.8624 3.1944c-.9362 1.032-.8485 2.7633.0626 3.8172.9108 1.0536 2.4758 1.4224 3.826 1.0687.64-.1677 1.2505-.4896 1.6915-.981 1.0054-1.121.9137-2.9152.1555-4.215-.237-.407-.534-.784-.9052-1.075-.72-.5643-1.7132-.7643-2.597-.5235-.883.241-1.6355.917-1.9667 1.768"
			}))))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/TextPost/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", {
				transform: "translate(3, 4)"
			}, s.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: o,
					theme: a,
					...l
				} = e, m = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(i.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return s.a.createElement("div", u({
					className: Object(r.a)(d.a.backgroundContainer, n),
					style: p
				}, l))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7",
				onlyChildMargin: "_2OVNlZuUd8L9v0yVECZ2iA"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const h = Object(l.u)(),
				b = Object(a.c)({
					isEditing: d.i,
					layout: (e, t) => t.forcedLayout || Object(l.R)(e, t)
				}),
				f = Object(r.b)(b);
			t.a = h(f(({
				className: e,
				hideOnlyChildMargin: t,
				disableFullscreen: n,
				dispatch: o,
				fitPageToContent: r,
				forcedLayout: a,
				isCollectionLayout: d,
				isEditing: u,
				layout: h,
				pageLayer: b,
				...f
			}) => s.a.createElement("div", p({
				className: Object(i.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: h === c.g.Large || Object(l.O)(b),
					[m.a.mDisableFullScreen]: n && !d,
					[m.a.mClassicWidth]: d,
					[m.a.mIsEditing]: !!u,
					[m.a.mCanFlexFullWidth]: !r,
					[m.a.onlyChildMargin]: !t
				})
			}, f))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_31N0dvxfpsO6Ur5AKx4O5d",
				sidebar: "_3Kd8DQpBIbsr5E1JcrMFTY",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				a = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				d = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				p = n("./src/reddit/layout/page/Listing/index.m.less"),
				h = n.n(p);
			t.a = e => {
				const {
					backgroundColor: t,
					className: n,
					containerRef: p,
					content: b,
					contentBanner: f,
					contentClassName: g,
					contentNavBar: C,
					disableFullscreen: E,
					fitPageToContent: x,
					forcedLayout: _,
					hideOnlyChildMargin: v,
					isCollectionLayout: O,
					isPageSwapped: y,
					maxWidth: k,
					navBar: j,
					redditStyle: S,
					sidebar: T,
					sidebars: P,
					trendingUnit: I,
					subredditId: w
				} = e, N = I ? "28px" : "0", D = y ? {
					marginRight: `${c.q}px`,
					marginTop: N
				} : {
					marginLeft: `${c.q}px`,
					marginTop: N
				}, M = T && s.a.createElement("div", {
					className: Object(i.a)(h.a.sidebar, O ? h.a["m-collectionLayout"] : h.a.defaultLayout),
					style: D
				}, T), R = s.a.createElement(a.a, {
					hideOnlyChildMargin: v,
					className: g,
					disableFullscreen: E,
					fitPageToContent: x,
					forcedLayout: _,
					isCollectionLayout: O
				}, f, b);
				let L;
				L = P ? s.a.createElement(s.a.Fragment, null, P[0], R, P[1]) : y ? s.a.createElement(s.a.Fragment, null, M, R) : s.a.createElement(s.a.Fragment, null, R, M);
				const F = E ? `${k||d.a+2*c.m}px` : "100%",
					A = Object(o.useContext)(u.a);
				return s.a.createElement(m.a, {
					subredditId: w
				}, s.a.createElement("div", {
					className: Object(i.a)(h.a.outerContainer, l.i, n, {
						[h.a.outerContainerExp]: A
					}),
					ref: p
				}, s.a.createElement(r.a, {
					className: l.h,
					redditStyle: S,
					backgroundColor: t
				}), s.a.createElement("div", {
					className: h.a.innerContainer
				}, j, C, (e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null)(e), s.a.createElement("div", {
					style: {
						maxWidth: F
					}
				}, I), s.a.createElement("div", {
					className: h.a.body,
					style: {
						maxWidth: F
					}
				}, L))))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = n.n(s);
			t.a = o.a.div("rightAligned", r.a)
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(i);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(a.a)(c.a.expandedCenterContainer, e.className)
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
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			var o, s, r = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(o || (o = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const a = {
					[o.Loyalty]: r.a.First,
					[o.Achievement]: r.a.Second,
					[o.Cosmetic]: void 0
				},
				i = e => e === r.a.First ? o.Loyalty : e === r.a.Second ? o.Achievement : o.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "p", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/assertNever.ts"),
				s = n("./src/reddit/models/GqlTopLevelField.ts"),
				r = n("./src/reddit/models/User/index.ts");
			const a = "scheduledposts";
			var i, c, l;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(i || (i = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(l || (l = {}));
			const d = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === r.c.AvailableRedditor,
				m = e => e.__typename === s.a.Subreddit;
			var p, h, b, f;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(h || (h = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(f || (f = {}));
			const g = e => h[f[e]],
				C = e => f[h[e]],
				E = e => b[h[e]],
				x = e => h[b[e]],
				_ = e => f[b[e]];
			var v;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(v || (v = {}));
			const O = e => {
					switch (e) {
						case v.Hourly:
						case v.Daily:
						case v.Weekly:
						case v.Monthly:
							return !0
					}
					return !1
				},
				y = "custom",
				k = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(o.a)(e)
					}
				},
				j = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, n) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/pages/ErrorPages/index.m.less"),
				c = n.n(i);
			const l = ({
					message: e
				}) => r.a.createElement("div", {
					className: c.a.container
				}, r.a.createElement("h3", {
					className: c.a.title
				}, e || o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), r.a.createElement(a.n, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, o.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				d = ({
					message: e
				}) => r.a.createElement("div", {
					className: c.a.container
				}, r.a.createElement("h3", {
					className: c.a.title
				}, e || o.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), r.a.createElement(a.n, {
					className: c.a.primaryRouterLink,
					to: "/"
				}, o.fbt._("Go Home", null, {
					hk: "3E9E1g"
				})))
		},
		"./src/reddit/pages/PostCreation/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/components/JumpToContent/index.tsx"),
				l = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./node_modules/lodash/once.js"),
				u = n.n(d),
				m = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./src/lib/classNames/index.ts"),
				h = n("./src/lib/constants/index.ts"),
				b = n("./src/reddit/constants/keycodes.ts"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				g = n("./src/reddit/models/PostCreationForm/index.ts"),
				C = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				E = n("./src/reddit/pages/ErrorPages/index.tsx"),
				x = n("./src/reddit/selectors/postCollection.ts"),
				_ = n("./src/reddit/components/CrosspostBox/index.tsx"),
				v = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/config.ts")),
				O = n("./src/reddit/actions/toaster.ts"),
				y = n("./src/reddit/contexts/ApiContext.tsx"),
				k = n("./src/reddit/controls/Button/index.tsx"),
				j = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				S = n("./node_modules/uuid/v4.js"),
				T = n.n(S),
				P = n("./src/lib/makeGqlRequest/index.ts"),
				I = n("./src/lib/makeRequest/index.ts"),
				w = n("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"),
				N = n("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json"),
				D = n("./src/redditGQL/types.ts");
			const M = async (e, t) => {
				const n = await Object(P.a)(e, {
					...N,
					variables: t
				});
				return !!Object(I.c)(n) && (n.body.data.subredditInfoById.allowedPostTypes || []).includes(D.s.Talk)
			}, R = {
				[D.f.ServiceError]: l.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
					hk: "3XqPJS"
				}),
				[D.f.UserNotAuthorized]: l.fbt._("You don't have permission to start talks in this community.", null, {
					hk: "1XY1Ss"
				}),
				[D.f.RoomLimitExceeded]: l.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
					hk: "3zPx9X"
				}),
				[D.f.ConcurrentRoomLimitExceeded]: l.fbt._("Too many talks are happening right now. Try again later.", null, {
					hk: "2LYXJx"
				}),
				[D.f.SubredditRoomLimitExceeded]: l.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
					hk: "2mGf21"
				})
			};
			var L, F = n("./src/reddit/models/Toast/index.ts"),
				A = n("./src/reddit/components/PostCreationForm/TalkCreationForm/index.m.less"),
				B = n.n(A);
			! function(e) {
				e.PERIWINKLE = "periwinkle", e.ORANGERED = "orangered", e.MANGO = "mango", e.KIWI = "kiwi", e.ALIEN = "alien"
			}(L || (L = {}));
			const U = {
					[L.PERIWINKLE]: B.a.periwinkle,
					[L.ORANGERED]: B.a.orangered,
					[L.MANGO]: B.a.mango,
					[L.KIWI]: B.a.kiwi,
					[L.ALIEN]: B.a.alien
				},
				W = L.PERIWINKLE;
			var z = Object(y.b)(({
					children: e,
					gqlContext: t,
					subredditId: n,
					title: a
				}) => {
					const [i, c] = Object(o.useState)(W), [d, u] = Object(o.useState)(!1), m = Object(r.d)(), h = Object(o.useMemo)(() => (() => T()())(), [n]), b = Object(o.useMemo)(() => Object.keys(U).reduce((e, t) => (e[U[t]] = i === t, e), {}), [i]), f = Object(o.useMemo)(() => a.length > 0, [a]);
					return s.a.createElement("section", {
						className: Object(p.a)("talk-creation-form", B.a.talkContainer, b)
					}, s.a.createElement("main", {
						className: B.a.padding
					}, e), s.a.createElement("footer", {
						className: B.a.footer
					}, s.a.createElement("div", null, Object.keys(U).map(e => s.a.createElement("div", {
						key: e,
						className: Object(p.a)(B.a.themeButtonContainer, {
							[B.a.active]: e === i
						})
					}, s.a.createElement("button", {
						type: "button",
						onClick: () => c(e),
						className: Object(p.a)(B.a.themeButton, U[e]),
						"aria-label": `Theme: ${e}`
					})))), s.a.createElement("div", null, s.a.createElement(k.a, {
						kind: k.b.ExternalLink,
						priority: k.c.PlainLink,
						href: "https://reddithelp.com/hc/en-us/articles/4404349195284 ",
						target: "_blank",
						className: B.a.learnMoreLink
					}, l.fbt._("Learn more about Reddit Talk", null, {
						hk: "3N8tu4"
					})), s.a.createElement(k.a, {
						kind: k.b.Button,
						priority: k.c.Primary,
						onClick: async () => {
							u(!0);
							const e = await ((e, t) => Object(P.a)(e, {
								...w,
								variables: t
							}))(t(), {
								ikey: h,
								subredditId: n,
								roomTitle: a,
								metadata: JSON.stringify({
									background: null,
									theme: i
								}),
								platform: D.a.Twilio
							});
							if (!e.ok) return m(Object(O.f)({
								kind: F.b.Error,
								text: R[D.f.ServiceError]
							})), void u(!1);
							const o = (e => e.data.createAudioRoomOrError)(e.body);
							if (null == o ? void 0 : o.errorState) return m(Object(O.f)({
								kind: F.b.Error,
								text: R[o.errorState.code] || R[D.f.ServiceError]
							})), void u(!1);
							(null == o ? void 0 : o.okState) && (window.location.href = `${v.a.redditUrl}/talk/${o.okState.roomId}`)
						},
						className: B.a.createButton,
						disabled: d || !f
					}, d ? s.a.createElement(j.a, null) : l.fbt._("Go Live", null, {
						hk: "1o8MZ3"
					})))))
				}),
				G = n("./src/reddit/hooks/useGqlContext.ts"),
				H = n("./src/reddit/selectors/experiments/econ/index.ts"),
				V = n("./src/reddit/selectors/postCreations.ts");

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var q = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				J = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				Z = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Q = n("./src/reddit/helpers/trackers/postComposer.ts"),
				Y = n("./src/reddit/selectors/activeModalId.ts"),
				X = n("./src/reddit/selectors/platform.ts"),
				$ = n("./src/reddit/selectors/postDraft.ts"),
				ee = n("./src/reddit/selectors/subreddit.ts"),
				te = n("./src/reddit/selectors/user.ts"),
				ne = n("./src/reddit/actions/changeUsername.ts"),
				oe = n("./src/reddit/actions/externalAccount.ts"),
				se = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				re = n("./src/reddit/actions/postCreation/submit.ts"),
				ae = n("./src/reddit/actions/postCreation/subredditChange.ts"),
				ie = n("./src/reddit/actions/postDraft.ts"),
				ce = n("./src/reddit/actions/upload.ts"),
				le = n("./src/reddit/helpers/externalAccount/index.tsx"),
				de = n("./node_modules/history/esm/history.js"),
				ue = n("./node_modules/react-router/esm/react-router.js"),
				me = n("./src/lib/matchRoute/index.ts"),
				pe = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx"),
				he = n("./src/reddit/components/TrackingHelper/index.tsx"),
				be = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const fe = "DISCARD_POST_ON_NAVIGATION_MODAL_ID",
				ge = Object(a.c)({
					isEditingScheduledPost: e => !!Object(be.r)(e),
					isScheduledPost: V.S
				});
			var Ce = Object(r.b)(ge)(e => {
					const {
						isEditingScheduledPost: t,
						isScheduledPost: n,
						onAbort: r,
						onDiscardConfirmed: a,
						onSaveDraft: i,
						submissionType: c
					} = e, d = Object(he.b)(), u = Object(o.useCallback)(() => {
						r(), d(Object(Q.l)())
					}, [r, d]);
					return h.H.has(c) && !n ? s.a.createElement(pe.a, {
						bodyText: l.fbt._("Do you want to save a draft of your post?", null, {
							hk: "3EV54t"
						}),
						onClose: r,
						onPrimaryAction: i,
						onSecondaryAction: a,
						primaryButtonText: l.fbt._("Save Draft", null, {
							hk: "1VdofA"
						}),
						secondaryButtonText: l.fbt._("Discard Post", null, {
							hk: "1CBjtn"
						}),
						titleText: l.fbt._("Save draft", null, {
							hk: "44JnYT"
						})
					}) : s.a.createElement(pe.a, {
						bodyText: t ? l.fbt._("Returning to the previous page will discard your changes", null, {
							hk: "2LlXOp"
						}) : l.fbt._("Returning to the previous page will discard your post", null, {
							hk: "3fT0mW"
						}),
						onClose: r,
						onPrimaryAction: u,
						onSecondaryAction: a,
						primaryButtonText: l.fbt._("Edit Post", null, {
							hk: "3dI1el"
						}),
						secondaryButtonText: t ? l.fbt._("Discard Changes", null, {
							hk: "7JOA"
						}) : l.fbt._("Discard Post", null, {
							hk: "1CBjtn"
						}),
						titleText: t ? l.fbt._("Discard Changes", null, {
							hk: "2vyCBa"
						}) : l.fbt._("Discard Post", null, {
							hk: "2BlkSe"
						})
					})
				}),
				Ee = n("./src/reddit/routes/postCreation/index.ts");
			const xe = e => (e.returnValue = "", ""),
				_e = Object(a.c)({
					destSubreddit: V.h,
					hasError: V.w,
					havePostContent: V.D,
					isChanged: V.H,
					modalId: Y.a,
					submitPostPending: V.ob
				}),
				ve = Object(r.b)(_e, e => ({
					onToggleDiscardModal: () => e(i.z(fe))
				}), (e, t, n) => ({
					...e,
					...t,
					...n
				}));
			class Oe extends s.a.Component {
				constructor() {
					super(...arguments), this.unblockNavigation = null, this.ensureBlocked = e => {
						e.isChanged && (e.havePostContent || e.destSubreddit.name) ? this.block(e) : this.unblock()
					}, this.block = e => {
						this.unblockNavigation || (window.addEventListener("beforeunload", xe), this.unblockNavigation = e.history.block((e, t) => {
							if (!Object(me.a)(Object(de.e)(e), [Ee.a])) return this.props.modalId !== fe && this.props.onToggleDiscardModal(), "Are you sure you want to leave?"
						}))
					}, this.unblock = () => {
						this.unblockNavigation && (this.unblockNavigation(), this.unblockNavigation = null), window.removeEventListener("beforeunload", xe)
					}
				}
				componentDidMount() {
					this.ensureBlocked(this.props)
				}
				componentWillReceiveProps(e) {
					!this.props.submitPostPending || e.submitPostPending || e.hasError ? this.ensureBlocked(e) : this.unblock()
				}
				componentWillUnmount() {
					this.unblock()
				}
				render() {
					return null
				}
			}
			var ye = Object(Z.u)({
					draftId: Z.v,
					pageLayer: e => e
				})(ve(Object(ue.i)(Oe))),
				ke = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				je = n("./src/telemetry/index.ts"),
				Se = n("./src/lib/lessComponent.tsx"),
				Te = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"),
				Pe = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				Ie = n("./src/reddit/components/ScheduledPost/PostSchedulePickerModal/loader.tsx"),
				we = n("./src/reddit/controls/ErrorText/index.tsx"),
				Ne = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				De = n("./src/reddit/icons/fonts/index.tsx"),
				Me = n("./src/reddit/layout/row/Inline/index.tsx"),
				Re = n("./src/reddit/models/Media/index.ts"),
				Le = n("./src/reddit/models/Poll/index.ts"),
				Fe = n("./src/reddit/models/Upload/index.ts"),
				Ae = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Be = n("./src/reddit/models/Duplicates/index.ts"),
				Ue = n("./src/reddit/selectors/posts.ts");
			var We = n("./src/reddit/components/PostCreationForm/Button/index.m.less"),
				ze = n.n(We);
			const Ge = Se.a.wrapped(k.l, "PrimaryButton", ze.a),
				He = Se.a.wrapped(k.o, "SecondaryButton", ze.a);
			var Ve = n("./src/lib/timezone/index.ts"),
				Ke = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				qe = n("./src/reddit/components/PostCreationForm/PostCreationFooter/ScheduledTimeInfo/index.m.less"),
				Je = n.n(qe);
			const {
				fbt: Ze
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Qe = Se.a.div("Container", Je.a), Ye = Object(a.c)({
				eventSchedule: V.p,
				postSchedule: V.db
			});
			var Xe = Object(r.b)(Ye)(e => {
					const {
						eventSchedule: t,
						postSchedule: n
					} = e;
					let o;
					if (t && t.submitTime !== g.j.Now) o = (e => {
						const t = Object(Ve.f)(e.startDate);
						let n = `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric",year:"2-digit"})} ${t.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}).replace(" ","")}`;
						const o = Object(Ve.d)(e.timezoneName, +t);
						return o && (n += ` ${o.abbreviation}`), s.a.createElement("span", null, Ze._("Will automatically post at", null, {
							hk: "1ixr16"
						}), " ", s.a.createElement("time", {
							dateTime: e.startDate
						}, n))
					})(t);
					else {
						if (!n) return null;
						o = (e => {
							const t = Object(Ve.f)(e.submitDate);
							let n = `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} ${t.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}).replace(" ","")}`;
							const o = Object(Ve.d)(e.timezoneName, +t);
							o && (n += ` ${o.abbreviation}`);
							const r = e.recurrenceInfo ? s.a.createElement("span", null, s.a.createElement(Ke.a, {
								className: Je.a.replayIcon
							}), Ze._("Recurring post template scheduled for", null, {
								hk: "2tTwIB"
							})) : Ze._("Post scheduled for", null, {
								hk: "47yVoo"
							});
							return s.a.createElement("span", null, r, " ", s.a.createElement("time", {
								dateTime: e.submitDate
							}, n))
						})(n)
					}
					return s.a.createElement(Qe, null, o)
				}),
				$e = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				et = n("./src/lib/linkMatchers/index.ts"),
				tt = n("./src/lib/makeActionCreator/index.ts"),
				nt = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				ot = n("./src/lib/makeApiRequest/index.ts"),
				st = n("./src/lib/omitHeaders/index.ts"),
				rt = n("./src/reddit/constants/headers.ts"),
				at = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			var it = n("./src/reddit/actions/postCreation/constants.ts");
			const ct = Object(tt.a)(it.K),
				lt = Object(tt.a)(it.L),
				dt = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						a = Object(nt.s)(r, {
							pageLayer: t
						});
					if (!a) return;
					const i = Object(V.q)(r, {
						field: e
					});
					if (!i) return;
					const c = Object(V.f)(r),
						d = await ((e, t, n, o, s) => Object(ot.a)(Object(st.a)(e, [rt.a]), {
							endpoint: `${e.apiUrl}/api/validate_submission_field`,
							method: h.jb.POST,
							data: {
								sr: t,
								field: n,
								kind: o,
								title: s.title || "",
								url: s.url || null,
								text: s.selftext,
								richtext_json: s.rtjson && JSON.stringify({
									document: s.rtjson
								}),
								flair_id: s.flairId || null,
								show_error_list: !0
							}
						}).then(at.b))(s(), a.name, e, c, i),
						u = d.error || function(e, t) {
							if (e === h.wb.LINK && !Object(et.h)(et.f, t.url || "")) return {
								fields: [{
									field: h.wb.LINK,
									msg: l.fbt._("Link doesn't look right", null, {
										hk: "11qrsa"
									})
								}],
								type: h.I.SUBMIT_VALIDATION_ERROR
							}
						}(e, i);
					u && u.fields && u.fields.length ? n(ct(u)) : n(lt(e)), d.error && n(Object(re.c)(d.error))
				};
			var ut = n("./src/reddit/components/Flair/index.tsx"),
				mt = n("./src/reddit/controls/TextButton/index.tsx"),
				pt = n("./src/reddit/controls/Typography/index.tsx"),
				ht = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/OCDisclaimer/index.m.less"),
				bt = n.n(ht);
			const {
				fbt: ft
			} = n("./node_modules/fbt/lib/FbtPublic.js"), gt = Se.a.wrapped(mt.a, "DontShowButton", bt.a);
			var Ct, Et = Se.a.wrapped(e => {
					const {
						className: t,
						onDoNotShowClick: n
					} = e;
					return s.a.createElement("div", {
						className: t
					}, s.a.createElement(pt.a, null, ft._("Use the OC tag if you want to take credit for your post as Original Content.", null, {
						hk: "2D3GYX"
					})), s.a.createElement(pt.a, null, s.a.createElement(gt, {
						onClick: n
					}, ft._("Cool, whatever, don't show me this again.", null, {
						hk: "4nvsEF"
					}))))
				}, "Component", bt.a),
				xt = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				_t = n("./src/reddit/constants/colors.ts");
			! function(e) {
				e.CHAT = "chat", e.FLAIR = "flair", e.GOVERNANCE = "gov", e.SPOILER = "spoiler", e.NSFW = "nsfw", e.ORIGINAL_CONTENT = "originalContent", e.SCHEDULE = "schedule"
			}(Ct || (Ct = {}));
			var vt = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/PostModifierButton/index.m.less"),
				Ot = n.n(vt);
			Se.a.div("TintOverlay", Ot.a);
			const yt = (e, t) => {
					switch (t) {
						case Ct.ORIGINAL_CONTENT:
							return {
								backgroundColor: _t.a.orangered, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Ct.CHAT:
							return {
								backgroundColor: _t.a.chat, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Ct.SPOILER:
							return {
								backgroundColor: _t.a.spoiler, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Ct.NSFW:
							return {
								backgroundColor: _t.a.nsfw, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Ct.FLAIR:
							return {
								backgroundColor: e.newCommunityTheme.flair, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Ct.SCHEDULE:
							return {
								backgroundColor: e.newCommunityTheme.active, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Ct.GOVERNANCE:
							return {
								backgroundColor: e.newCommunityTheme.line, textColor: e.newCommunityTheme.bodyText, iconColor: e.newCommunityTheme.bodyText
							};
						default:
							return {
								backgroundColor: "none", textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							}
					}
				},
				kt = e => Object($e.a)(t => {
					const {
						addModifierTooltip: n,
						children: o,
						className: r,
						disabled: a,
						disabledTooltip: i,
						Icon: c,
						id: l,
						onClick: d,
						removeModifierTooltip: u,
						style: m,
						text: h,
						theme: b,
						toggled: f
					} = t, g = a && i ? i : f ? u : n, C = {
						color: t.textColor || b && yt(b, e).textColor,
						fill: t.textColor || b && yt(b, e).iconColor,
						backgroundColor: t.backgroundColor || b && yt(b, e).backgroundColor,
						borderColor: "transparent"
					};
					return s.a.createElement(k.t, {
						"aria-label": g,
						className: Object(p.a)(r, Ot.a.PostModifierButton),
						disabled: a,
						Icon: c,
						id: l,
						onClick: d,
						priority: k.c.Secondary,
						style: {
							...m,
							...f ? C : {}
						},
						text: h
					}, s.a.createElement(xt.a, {
						text: g,
						className: Ot.a.HoverTooltip,
						tooltipContentClass: t.shiftTooltipToRight ? Ot.a.mShiftTooltipToTheRight : void 0
					}), o)
				});
			var jt, St = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx"),
				Tt = n("./src/reddit/components/PostFlairPicker/index.tsx");
			! function(e) {
				e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
			}(jt || (jt = {}));
			var Pt = n("./src/reddit/constants/postCreation.ts"),
				It = n("./src/reddit/helpers/localStorage/index.ts"),
				wt = n("./src/reddit/helpers/trackers/postEvent.ts"),
				Nt = n("./src/reddit/models/Subreddit/index.ts"),
				Dt = n("./src/reddit/selectors/chatPost.ts");
			const Mt = e => e.creations.formState.fieldValidation;
			var Rt = n("./src/telemetry/models/PostComposer.ts"),
				Lt = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/index.m.less"),
				Ft = n.n(Lt);
			const At = "PostFlair--Modal--CreationForm",
				Bt = e => {
					let t = Object(Ve.f)(e.startDate).toLocaleDateString(void 0, {
						month: "numeric",
						day: "numeric",
						hour: "numeric",
						minute: "numeric"
					});
					return t = t.replace(" ", "").replace(",", " ")
				},
				Ut = Se.a.wrapped(ut.b, "FlairComponent", Ft.a),
				Wt = Se.a.div("FlairTextWrapper", Ft.a),
				zt = Se.a.wrapped(Me.a, "ModifierRow", Ft.a),
				Gt = kt(Ct.ORIGINAL_CONTENT),
				Ht = kt(Ct.CHAT),
				Vt = kt(Ct.SPOILER),
				Kt = kt(Ct.NSFW),
				qt = kt(Ct.FLAIR),
				Jt = kt(Ct.SCHEDULE),
				Zt = Object(Z.u)({
					draftId: Z.v,
					pageLayer: e => e
				}),
				Qt = Object(a.c)({
					activeModalId: Y.a,
					canAddPostFlair: V.c,
					canPostAsModerator: V.e,
					currentSubredditId: Z.n,
					destSubreddit: V.h,
					destSubredditAboutInfo: V.g,
					eventSchedule: V.p,
					isChatPostAvailable: Dt.a,
					isChatPostSelected: V.I,
					isNsfw: V.O,
					isSpoiler: V.T,
					isOriginalContent: V.P,
					flair: V.r,
					postCreationFieldErrors: Mt,
					postSchedule: V.db,
					submissionType: V.a
				}),
				Yt = Object(r.b)(Qt, (e, {
					onPostFieldValidation: t,
					pageLayer: n
				}) => ({
					doNotShowOriginalContentDisclaimerClicked: () => e((e, t) => Q.f(t())),
					onEventScheduleChange: t => {
						e(i.a(t))
					},
					postFlairAdded: o => {
						e(i.b(o)), t(e(dt(h.wb.FLAIR, n)))
					},
					toggleSchedulePicker: (t, n) => {
						e(i.z(g.g)), t && e((e, t) => {
							(n ? wt.g : wt.f)(t())
						})
					},
					toggleChatPostTag: t => {
						e(i.u(!t)), e((e, n) => Q.L(n(), !t, Rt.ToggleNoun.CHAT))
					},
					toggleFlairPicker: () => e(i.z(At)),
					toggleNsfwTag: t => {
						e(i.v(!t)), e((e, n) => Q.L(n(), !t, Rt.ToggleNoun.NSFW))
					},
					toggleOriginalContentTag: t => {
						e(i.w(!t)), e((e, n) => Q.L(n(), !t, Rt.ToggleNoun.ORIGINAL_CONTENT))
					},
					toggleSpoilerTag: t => {
						e(i.y(!t)), e((e, n) => Q.L(n(), !t, Rt.ToggleNoun.SPOILER))
					}
				}));
			class Xt extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showOCDisclaimer: !1
					}, this.handlePostFlairSelected = ({
						previewFlair: e
					}) => {
						this.props.flair !== e && this.props.postFlairAdded(e)
					}, this.handleOCDisclaimerDoNotShowClick = () => {
						const {
							doNotShowOriginalContentDisclaimerClicked: e
						} = this.props;
						e(), Object(It.qb)(jt.ORIGINAL_CONTENT_DISCLAIMER, !0), this.setState({
							showOCDisclaimer: !1
						})
					}, this.handleOriginalContentClick = () => {
						this.props.toggleOriginalContentTag(this.props.isOriginalContent)
					}, this.handleChatPostClick = () => {
						this.props.toggleChatPostTag(this.props.isChatPostSelected)
					}, this.handleSpoilerClick = () => {
						this.props.toggleSpoilerTag(this.props.isSpoiler)
					}, this.handleNsfwClick = () => {
						this.props.toggleNsfwTag(this.props.isNsfw)
					}, this.handleToggleSchedulePicker = () => {
						const e = this.props.activeModalId !== g.g,
							t = !!this.props.eventSchedule;
						this.props.toggleSchedulePicker(e, t)
					}, this.handleToggleFlairPicker = () => {
						this.props.toggleFlairPicker(), this.props.sendEvent(Q.y())
					}
				}
				componentDidMount() {
					this.setState({
						showOCDisclaimer: !Object(It.h)(jt.ORIGINAL_CONTENT_DISCLAIMER)
					})
				}
				render() {
					const {
						activeModalId: e,
						canAddPostFlair: t,
						canPostAsModerator: n,
						className: o,
						currentSubredditId: r,
						destSubreddit: a,
						destSubredditAboutInfo: i,
						eventSchedule: c,
						disabled: d,
						flair: u,
						isChatPostAvailable: m,
						isChatPostSelected: b,
						isNsfw: f,
						isSpoiler: C,
						isOriginalContent: E,
						postCreationFieldErrors: x,
						postSchedule: _,
						submissionType: v,
						theme: O
					} = this.props, {
						showOCDisclaimer: y
					} = this.state, k = !!u, {
						backgroundColor: j = null,
						textColor: S = null
					} = u || {}, {
						allOriginalContent: T = !1,
						eventPostsEnabled: P = !1
					} = i || {}, I = a.isProfile || Object(Nt.g)(i), w = d || !I || T || v === h.Wb.CROSSPOST, N = d || !(a.isProfile || Object(Nt.i)(i)), D = d, M = d || !!_;
					return s.a.createElement("div", {
						className: o
					}, s.a.createElement(zt, null, m && s.a.createElement(Ht, {
						disabled: D,
						onClick: this.handleChatPostClick,
						toggled: b,
						addModifierTooltip: l.fbt._("Use live chat instead of comments", null, {
							hk: "27t9lW"
						}),
						removeModifierTooltip: l.fbt._("Use comments instead of live chat", null, {
							hk: "3seokS"
						}),
						Icon: Object(De.b)(b ? "checkmark" : "chat"),
						text: l.fbt._("Live Chat", null, {
							hk: "cZlvm"
						})
					}), n && P && s.a.createElement(Jt, {
						disabled: M,
						id: Pt.a,
						onClick: this.handleToggleSchedulePicker,
						shiftTooltipToRight: !0,
						toggled: !!c,
						addModifierTooltip: l.fbt._("Add time and date info", null, {
							hk: "L2KN8"
						}),
						removeModifierTooltip: l.fbt._("Edit event data", null, {
							hk: "1FSblM"
						}),
						Icon: Object(De.b)("scheduled"),
						text: c ? Bt(c) : l.fbt._("Event", null, {
							hk: "40pq7b"
						})
					}, c && s.a.createElement(De.a, {
						name: "edit",
						className: Ft.a.editScheduledIcon
					})), e === g.g && s.a.createElement(St.default, {
						schedule: this.props.eventSchedule,
						onClose: this.handleToggleSchedulePicker,
						onChange: this.props.onEventScheduleChange,
						shouldShowSubmitTime: !0,
						shouldShowDeleteButton: !0
					}), s.a.createElement(Gt, {
						disabled: w,
						onClick: this.handleOriginalContentClick,
						shiftTooltipToRight: !0,
						toggled: I && (E || T),
						addModifierTooltip: l.fbt._("Mark this post as Original Content [OC]", null, {
							hk: "3V5aHC"
						}),
						removeModifierTooltip: l.fbt._("Unmark this post as Original Content [OC]", null, {
							hk: "2oj9GI"
						}),
						disabledTooltip: I ? "" : l.fbt._("This community does not allow original content tag", null, {
							hk: "2ydrVm"
						}),
						Icon: Object(De.b)(E ? "checkmark" : "add"),
						text: l.fbt._("OC", null, {
							hk: "2GRpRs"
						})
					}), s.a.createElement(Vt, {
						disabled: N,
						onClick: this.handleSpoilerClick,
						toggled: C,
						addModifierTooltip: l.fbt._("Mark as a spoiler", null, {
							hk: "3ICynB"
						}),
						removeModifierTooltip: l.fbt._("Unmark as a spoiler", null, {
							hk: "34pmqg"
						}),
						disabledTooltip: N ? l.fbt._("This community does not allow spoiler tag", null, {
							hk: "H75tq"
						}) : "",
						Icon: Object(De.b)(C ? "checkmark" : "add"),
						text: l.fbt._("Spoiler", null, {
							hk: "4CA9TG"
						})
					}), s.a.createElement(Kt, {
						disabled: d,
						onClick: this.handleNsfwClick,
						toggled: f,
						addModifierTooltip: l.fbt._("Mark as Not Safe For Work", null, {
							hk: "1LNeZB"
						}),
						removeModifierTooltip: l.fbt._("Unmark Not Safe For Work", null, {
							hk: "1EcrjD"
						}),
						Icon: Object(De.b)(f ? "checkmark" : "add"),
						text: l.fbt._("NSFW", null, {
							hk: "3Tg62D"
						})
					}), s.a.createElement(qt, {
						className: Object(p.a)(Ft.a.AddFlair, {
							[Ft.a.isToggled]: k,
							[Ft.a.mHasError]: x[h.wb.FLAIR].length > 0
						}),
						disabled: !t || d,
						disabledTooltip: a.id ? l.fbt._("Not available for this community", null, {
							hk: "2gkbLI"
						}) : l.fbt._("Select a subreddit to enable flair", null, {
							hk: "1LNvTq"
						}),
						onClick: this.handleToggleFlairPicker,
						toggled: k,
						addModifierTooltip: l.fbt._("Add flair", null, {
							hk: "1RHLMM"
						}),
						removeModifierTooltip: l.fbt._("Change or remove flair", null, {
							hk: "34t9cQ"
						}),
						backgroundColor: j,
						textColor: S,
						Icon: e => s.a.createElement(De.a, {
							name: "tag",
							className: Object(p.a)(e.className, Ft.a.FlairIcon)
						}),
						style: {
							"--flairColor": k ? Object(ut.c)({
								...this.props,
								backgroundColor: j,
								textColor: S
							}) : !t || d ? O.newCommunityTheme.actionIconTinted80 : O.newCommunityTheme.actionIcon
						},
						text: s.a.createElement(s.a.Fragment, null, u ? s.a.createElement(Ut, {
							flair: u,
							forceSmallEmojis: !0
						}) : s.a.createElement(Wt, null, l.fbt._("Flair", null, {
							hk: "4Dtvp0"
						})), s.a.createElement(De.a, {
							name: "caret_down",
							className: Ft.a.StyledCaretIcon
						}))
					}), e === At && s.a.createElement(Tt.a, {
						flairs: u ? [u] : [],
						modalId: At,
						onFlairChanged: this.handlePostFlairSelected,
						subredditId: r || ""
					})), s.a.createElement(we.a, {
						className: Ft.a.errorMessages,
						messages: x[h.wb.FLAIR]
					}), I && E && y && s.a.createElement(Et, {
						onDoNotShowClick: this.handleOCDisclaimerDoNotShowClick
					}))
				}
			}
			var $t = Zt(Object($e.a)(Object(he.c)(Yt(Xt)))),
				en = n("./src/higherOrderComponents/asTooltip.tsx"),
				tn = n("./src/reddit/components/PostCreationForm/EduTooltips/BaseEduTooltip/index.m.less"),
				nn = n.n(tn);
			const {
				fbt: on
			} = n("./node_modules/fbt/lib/FbtPublic.js"), sn = Se.a.div("Container", nn.a), rn = Se.a.div("OuterContainer", nn.a);
			class an extends s.a.Component {
				constructor() {
					super(...arguments), this.tooltipRef = null, this.onGotItClick = e => {
						this.close(!0), e.stopPropagation()
					}, this.onKeyDown = e => {
						e.keyCode === b.a.Escape && this.close(!1)
					}, this.onMouseClick = e => {
						this.tooltipRef && !this.tooltipRef.contains(e.target) && this.close(!1)
					}, this.onWindowResize = () => {
						this.close(!1)
					}, this.setTooltipRef = e => {
						this.tooltipRef = e
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.onKeyDown), document.addEventListener("click", this.onMouseClick), window.addEventListener("resize", this.onWindowResize), this.tooltipRef && this.tooltipRef.scrollIntoView({
						behavior: "smooth",
						block: "end"
					})
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.onKeyDown), document.removeEventListener("click", this.onMouseClick), window.removeEventListener("resize", this.onWindowResize)
				}
				close(e) {
					this.props.onClose(e)
				}
				render() {
					const e = this.props;
					return s.a.createElement(rn, {
						className: e.className,
						innerRef: this.setTooltipRef,
						style: e.style
					}, s.a.createElement(sn, {
						className: nn.a.container
					}, s.a.createElement("img", {
						src: e.heroImagePath,
						className: nn.a.hero
					}), s.a.createElement("div", {
						className: nn.a.contentContainer
					}, s.a.createElement("div", {
						className: nn.a.title
					}, e.title), s.a.createElement("div", {
						className: nn.a.description
					}, e.description), s.a.createElement("div", {
						className: nn.a.iconsExplanations
					}, e.iconsExplanations.map((e, t) => {
						const n = e.iconComponent;
						return s.a.createElement("div", {
							className: nn.a.iconExplanation,
							key: t
						}, s.a.createElement(n, {
							className: nn.a.icon
						}), e.text)
					})), s.a.createElement(k.l, {
						className: nn.a.gotIt,
						onClick: this.onGotItClick
					}, on._("Got it", null, {
						hk: "2RPumB"
					})))))
				}
			}
			var cn = Object(en.a)(an),
				ln = n("./node_modules/lodash/debounce.js"),
				dn = n.n(ln),
				un = n("./src/reddit/actions/modal.ts"),
				mn = n("./src/reddit/helpers/trackers/postCollection.ts");
			const pn = [{
					id: Pt.d,
					getShowTimesLeft: It.L,
					setShowTimesLeft: It.Ob,
					tooltipShown: mn.n,
					tooltipDismissed: mn.m
				}, {
					id: Pt.c,
					getShowTimesLeft: It.K,
					setShowTimesLeft: It.Nb,
					tooltipShown: mn.f,
					tooltipDismissed: mn.e
				}],
				hn = {};
			let bn;
			const fn = () => (void 0 === bn && (bn = pn.filter(e => e.getShowTimesLeft() > 0).map(e => e.id)), bn),
				gn = e => {
					const t = fn().indexOf(e);
					t > -1 && fn().splice(t, 1)
				},
				Cn = e => async (t, n) => {
					const o = pn.find(t => t.id === e);
					o && (En(o, !0), Object(je.a)(o.tooltipDismissed(n())))
				}, En = (e, t) => {
					e.setShowTimesLeft(t ? 0 : e.getShowTimesLeft() - 1)
				}, xn = () => async (e, t) => {
					const n = Object(Y.a)(t()),
						o = fn().find(e => !!hn[e]);
					if (!o || o === n) return;
					const s = pn.find(e => e.id === o);
					s && (Object(je.a)(s.tooltipShown(t())), En(s)), e(un.i(o))
				}, _n = dn()(e => e(), 100);
			var vn = n("./src/reddit/components/PostCreationForm/EduTooltips/CollectionButtonTooltip/index.m.less"),
				On = n.n(vn);
			var yn = function(e, t) {
					const n = Object(a.c)({
						isOpen: e => Object(Y.a)(e) === t
					});
					class o extends s.a.Component {
						componentDidMount() {
							hn[t] = !0, _n(this.props.onShowNextTooltip)
						}
						componentWillUnmount() {
							hn[t] = !1, _n(this.props.onShowNextTooltip)
						}
						render() {
							const {
								isOpen: t,
								...n
							} = this.props;
							return t ? s.a.createElement(e, n) : null
						}
					}
					return Object(r.b)(n, e => ({
						onCloseTooltip: n => {
							gn(t), n && e(Cn(t)), e(un.i(t)), e(xn())
						},
						onShowNextTooltip: () => e(xn())
					}))(o)
				}(e => s.a.createElement(cn, {
					className: On.a.container,
					description: l.fbt._("Create a series of scheduled events or just group random things. Make something awesome.", null, {
						hk: "40PwoH"
					}),
					heroImagePath: `${v.a.assetPath}/img/collection-tooltip-hero@2x.png`,
					iconsExplanations: [{
						iconComponent: Object(De.b)("add"),
						text: l.fbt._("Compose a post like normal.", null, {
							hk: "466GER"
						})
					}, {
						iconComponent: Object(De.b)("collection"),
						text: l.fbt._("Create & name your collection.", null, {
							hk: "3BuZKz"
						})
					}, {
						iconComponent: Object(De.b)("add_to_feed"),
						text: l.fbt._("Add more posts to your collection.", null, {
							hk: "2wzlHs"
						})
					}],
					isOpen: !0,
					isOverlayOff: !0,
					onClose: e.onCloseTooltip,
					title: l.fbt._("Create Collections!", null, {
						hk: "3tSmbj"
					}),
					tooltipId: Pt.g
				}), Pt.c),
				kn = n("./src/reddit/components/PostCreationForm/ControlRow/ToggleDestCollectionButton/index.m.less"),
				jn = n.n(kn);
			var Sn = s.a.memo(e => {
					const {
						disabled: t,
						isToggled: n
					} = e, o = n ? "delete" : "collection";
					return s.a.createElement(k.t, {
						className: jn.a.button,
						priority: k.c.Plain,
						disabled: t,
						id: Pt.g,
						onClick: e.onClick,
						Icon: Object(De.b)(o)
					}, s.a.createElement(xt.a, {
						text: n ? l.fbt._("Cancel adding to collection", null, {
							hk: "359w09"
						}) : l.fbt._("Add to collection", null, {
							hk: "48nVCZ"
						})
					}), !n && s.a.createElement(yn, null))
				}),
				Tn = n("./src/reddit/actions/economics/predictions/index.ts"),
				Pn = n("./src/reddit/helpers/trackers/predictions.ts"),
				In = n("./src/reddit/hooks/usePageLayer.ts"),
				wn = n("./src/reddit/hooks/useTracking.ts"),
				Nn = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: Dn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Mn = ({
				onClose: e
			}) => {
				const t = Object(r.d)(),
					n = Object(wn.a)(),
					[a, c] = Object(o.useState)(!1),
					l = Object(r.e)(V.u),
					d = Object(r.e)(V.v),
					u = Object(r.e)(V.sb),
					p = Object(In.a)(),
					{
						subredditName: h
					} = (null == p ? void 0 : p.urlParams) || {},
					b = Object(r.e)(e => Object(ee.D)(e, h)),
					f = Object(r.e)(H.o);
				return s.a.createElement(pe.a, {
					withOverlay: !0,
					onOverlayClick: e,
					titleText: Dn._("Prediction created", null, {
						hk: "1O6btq"
					}),
					bodyText: Dn._("The prediction remains unpublished until the tournament begins. More predictions can be added at any time before the tournament ends.", null, {
						hk: "20T2xQ"
					}),
					onClose: e,
					primaryButtonText: Dn._("Start Tournament", null, {
						hk: "ft2Io"
					}),
					primaryButtonLoading: a,
					onPrimaryAction: async () => {
						n(Object(Pn.k)()), c(!0), t(Object(Tn.b)({
							prediction: {
								formData: l,
								formState: d
							}
						}));
						try {
							await t(Object(Tn.g)(b, (null == u ? void 0 : u.name) || "Predictions Tournament", (null == u ? void 0 : u.theme) || "theme_1", (null == u ? void 0 : u.token) || null)), t(Object(i.s)()), t(Object(Tn.v)()), t(Object(Tn.l)(h)), t(Object(m.b)(`/r/${h}/predictions/`))
						} catch (e) {
							t(Object(Tn.u)()), t(Object(O.f)({
								duration: 5e3,
								kind: F.b.Error,
								text: Dn._("Error: Failed to create prediction tournament", null, {
									hk: "1gJN9i"
								})
							}))
						}
						c(!1)
					},
					onSecondaryAction: () => {
						n(Object(Pn.c)()), t(Object(Tn.b)({
							prediction: {
								formData: l,
								formState: d
							}
						})), t(Object(i.s)()), f ? t(Object(i.g)({
							submissionType: "prediction"
						})) : (t(Object(i.g)({
							submissionType: "poll"
						})), t(Object(i.x)(!0)), t(Object(i.l)({
							oldType: Le.a.GA,
							type: Le.a.Prediction
						}))), e()
					},
					secondaryButtonText: Dn._("Create Another", null, {
						hk: "pQB1L"
					})
				})
			};
			var Rn = n("./src/reddit/components/PostCreationForm/ControlRow/AddTournamentPredictionButton/index.m.less"),
				Ln = n.n(Rn);
			const {
				fbt: Fn
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function An({
				className: e,
				disabled: t
			}) {
				const n = Object(r.d)(),
					a = Object(wn.a)(),
					c = Object(r.e)(V.u),
					l = Object(r.e)(V.v),
					[d, u] = Object(o.useState)(!1),
					[h, b] = Object(o.useState)(!1),
					f = Object(r.e)(V.F),
					g = Object(r.e)(V.z),
					C = Object(r.e)(V.y),
					E = Object(In.a)(),
					x = Object(r.e)(e => Object(nt.o)(e, {
						pageLayer: E
					})),
					_ = Object(r.e)(e => Object(ee.S)(e, {
						subredditId: x
					})),
					v = Object(r.e)(e => Object(Nn.b)(e, {
						subredditId: x
					}));
				return s.a.createElement("div", {
					className: Object(p.a)(Ln.a.addTournamentPredictionButton, e)
				}, s.a.createElement(k.l, {
					disabled: h || t || !g || !C,
					onClick: () => {
						v ? (async () => {
							b(!0), n(Object(Tn.b)({
								prediction: {
									formData: c,
									formState: l
								}
							}));
							try {
								await n(Object(Tn.a)(v.tournamentId, x)), n(Object(i.s)()), n(Object(Tn.v)()), n(Object(Tn.l)(_.name)), n(Object(m.b)(`/r/${_.name}/predictions/`))
							} catch (e) {
								n(Object(Tn.u)()), e.message.match(/max limit/) ? n(Object(O.f)({
									duration: 1e4,
									kind: F.b.Error,
									text: Fn._("Oops, you’ve reached the limit of predictions in a single Tournament. You can always start a new Tournament after ending the current one.", null, {
										hk: "1LClJE"
									})
								})) : n(Object(O.f)({
									duration: 5e3,
									kind: F.b.Error,
									text: Fn._("Error: Failed to add prediction to tournament", null, {
										hk: "3YK8YR"
									})
								}))
							}
							b(!1)
						})() : (a(Object(Pn.h)()), u(!0))
					}
				}, h ? s.a.createElement(j.a, {
					sizePx: 16
				}) : v ? Fn._("Post", null, {
					hk: "12GkA5"
				}) : Fn._("Next", null, {
					hk: "2m41ub"
				})), s.a.createElement("div", {
					className: Ln.a.tooltip
				}, f ? g ? C ? null : Fn._("End must be at least one hour from now", null, {
					hk: "lWM41"
				}) : Fn._("Options cannot be empty", null, {
					hk: "2BR1pQ"
				}) : Fn._("A title is required", null, {
					hk: "2hoEW2"
				})), d && s.a.createElement(Mn, {
					onClose: () => u(!1)
				}))
			}
			var Bn = n("./src/reddit/components/PostCreationForm/ControlRow/index.m.less"),
				Un = n.n(Bn);
			const Wn = () => l.fbt._("Post", null, {
					hk: "47QFCY"
				}),
				zn = () => l.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}),
				Gn = () => l.fbt._("Saved!", null, {
					hk: "34qXtS"
				}),
				Hn = () => l.fbt._("Save Draft", null, {
					hk: "3wckxd"
				}),
				Vn = () => l.fbt._("Updated!", null, {
					hk: "45fGGU"
				}),
				Kn = () => l.fbt._("Update draft", null, {
					hk: "1c8tCb"
				}),
				qn = () => l.fbt._("Please fix the above requirements", null, {
					hk: "17Yk98"
				}),
				Jn = () => l.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4x2ypi"
				}),
				Zn = 10,
				Qn = e => {
					return [h.Wb.LINK_ONLY, h.Wb.POLL, h.Wb.POST].includes(e)
				},
				Yn = Se.a.div("ButtonsAndErrors", Un.a),
				Xn = Se.a.wrapped(Me.a, "ButtonRow", Un.a),
				$n = Se.a.div("ButtonLayout", Un.a),
				eo = Se.a.div("SaveDraftButtonLayout", Un.a),
				to = Se.a.wrapped(j.a, "PostLoadingIcon", Un.a),
				no = Se.a.wrapped(to, "DraftLoadingIcon", Un.a),
				oo = Object(a.a)(V.gb, Pe.a.getMediaCount),
				so = (e, t) => {
					return !!!Object(Z.k)(e, t) && e.creations.formData.isPoll
				},
				ro = [],
				ao = e => {
					const t = Object(V.gb)(e),
						n = Object(V.mb)(e);
					if (!t.isBound || n !== h.Wb.POST || !Object(V.ib)(e)) return ro;
					const o = (e => {
						const {
							allowedPostTypes: t,
							name: n
						} = Object(V.h)(e), o = oo(e);
						if (!o || !t) return null;
						let s = "";
						return !o.total || t.images || t.videos ? o.video && !t.videos ? s = l.fbt._("Videos are not allowed in r/{subreddit name}", [l.fbt._param("subreddit name", n)], {
							hk: "1EUr31"
						}) : !o.image && !o.gifvideo || t.images || (s = l.fbt._("Images are not allowed in r/{subreddit name}", [l.fbt._param("subreddit name", n)], {
							hk: "2pxaRa"
						})) : s = l.fbt._("Videos and images are not allowed in r/{subreddit name}", [l.fbt._param("subreddit name", n)], {
							hk: "3AMcQ8"
						}), s || null
					})(e);
					return o ? [o] : (e => {
						const t = oo(e);
						if (!t) return ro;
						const n = [];
						return t.image > h.ab && n.push(l.fbt._("Post may not contain more that 20 images", null, {
							hk: "1Szc36"
						})), t.video + t.gifvideo > h.db && n.push(l.fbt._("Post may not contain more that 5 videos", null, {
							hk: "2WhZ8k"
						})), n
					})(e)
				},
				io = (e, {
					sourcePostId: t
				}) => {
					const n = Object(V.kb)(e, {
							sourcePostId: t
						}),
						{
							allowedPostTypes: o,
							id: s,
							isProfile: r,
							name: a
						} = Object(V.h)(e);
					if (!t) return l.fbt._("A source post is required to crosspost", null, {
						hk: "2TeLDw"
					});
					if (!s) return l.fbt._("A destination community is required to crosspost", null, {
						hk: "3haidF"
					});
					const i = r ? Object(te.jb)(e, {
						userId: s
					}) : s;
					if (i) {
						if (((e, t, n) => {
								const o = Object(Be.a)(n, {
										sort: "new",
										crossposts_only: !0
									}),
									s = e.subreddits.duplicates.models[t];
								return !(s && s[o])
							})(e, i, t)) return l.fbt._("Checking community...", null, {
							hk: "1ycXCe"
						});
						if (((e, t, n) => {
								const o = ((e, t, n) => {
									const o = e.subreddits.duplicates.models[t];
									return o ? o[n] : []
								})(e, t, Object(Be.a)(n, {
									sort: "new",
									crossposts_only: !0
								}));
								return 0 !== o.length && Object(Ue.x)(e, o[0])
							})(e, i, t)) return l.fbt._("This community has the same crosspost within last 24 hours", null, {
							hk: "177pgf"
						})
					}
					if (!o || !n) return null;
					if (n.source) return !o.links && l.fbt._("This community does not allow for crossposting of link posts", null, {
						hk: "2cZPxJ"
					});
					const {
						isCrosspostableSubreddit: c
					} = Object(ee.u)(e, {
						subredditName: a
					});
					if (!c) return l.fbt._("This community does not allow for crossposting of any posts", null, {
						hk: "2KrrAO"
					});
					switch (n.media && n.media.type) {
						case Re.o.TEXT:
						case Re.o.RTJSON:
							return !o.text && l.fbt._("This community does not allow for crossposting of text posts", null, {
								hk: "1a4voI"
							});
						case Re.o.IMAGE:
							return !o.images && l.fbt._("This community does not allow for crossposting of image posts", null, {
								hk: "tGzk7"
							});
						case Re.o.VIDEO:
						case Re.o.GIFVIDEO:
						case Re.o.EMBED:
							return !o.videos && l.fbt._("This community does not allow for crossposting of video posts", null, {
								hk: "w6HED"
							})
					}
					return null
				},
				co = (e, {
					sourcePostId: t
				}) => {
					const n = Object(V.W)(e),
						o = Object(V.gb)(e),
						s = Object(V.mb)(e);
					if (s === h.Wb.IMAGE_ONLY) return !1;
					if (!Object(V.h)(e).name || !Object(V.F)(e)) return !1;
					if (s === h.Wb.POST || s === h.Wb.POLL || s === h.Wb.PREDICTION) {
						const t = ao(e),
							n = !Pe.a.isAllMediaUploaded(o, e.uploads);
						return !t.length && !n
					}
					if (s === h.Wb.MEDIA) {
						const {
							items: t
						} = n, o = t.every(t => {
							const n = e.uploads[t.uploadKey];
							return !(!n || !n.url || n.status !== Fe.a.SUCCESS)
						});
						return t.length > 0 && o
					}
					return s === h.Wb.LINK_ONLY ? Object(V.A)(e) : s === h.Wb.CROSSPOST && !io(e, {
						sourcePostId: t
					})
				},
				lo = Object(a.c)({
					isPoll: so,
					activeModalId: Y.a,
					currentSubredditOrProfile: Z.p,
					canPostAsModerator: V.e,
					currentCollection: Z.g,
					errorMsgs: (e, {
						sourcePostId: t
					}) => {
						if (Object(V.w)(e)) return Object(V.o)(e);
						if (t) {
							const n = io(e, {
								sourcePostId: t
							});
							if (n) return [n]
						}
						return ao(e)
					},
					eventSchedule: V.p,
					hasDraftError: $.f,
					hasError: V.w,
					hasSubmitValidationError: V.x,
					destSubredditAboutInfo: V.g,
					govType: e => e.creations.formData.govType,
					isAddingToTournament: (e, {
						subredditId: t
					}) => !!t && Object(V.G)(e, {
						subredditId: t
					}),
					isChatPostSelected: V.I,
					isContestMode: V.J,
					isCreatingTournamentPrediction: (e, {
						subredditId: t
					}) => !!t && Object(V.K)(e, {
						subredditId: t
					}),
					isDraftsFeatureEnabled: (e, t) => !so(e, t),
					isDraftPending: $.g,
					isMediaUploadPending: V.X,
					isModeratorSomewhere: Ae.j,
					isPostAsMetaMod: V.Q,
					isPostPending: V.ob,
					isPostSubmitEnabled: co,
					isSaveDraftEnabled: e => {
						const t = Object(V.mb)(e);
						if (!h.H.has(t) || !Object(V.H)(e)) return !1;
						const n = Object(V.h)(e),
							o = Object(V.n)(e),
							s = t === h.Wb.LINK_ONLY && Object(V.A)(e),
							r = t === h.Wb.POST && o === g.i.RICH_TEXT && Object(V.E)(e),
							a = t === h.Wb.POST && o === g.i.MARKDOWN && Object(V.B)(e),
							i = s || r || a;
						return !!n.name || Object(V.F)(e) || i
					},
					isScheduledPost: V.S,
					postSchedule: V.db,
					postToTwitter: V.fb,
					isEditingScheduledPost: e => !!Object(be.r)(e),
					showContributorRequestFlow: e => Object(ee.r)(e, C.e.Post),
					showScheduledPosts: V.jb,
					stickyPosition: V.lb,
					submissionType: V.a,
					submitMode: V.nb,
					suggestedSort: V.qb
				}),
				uo = Object(Z.u)(),
				mo = Object(r.b)(lo, e => ({
					onResetDestCollection: () => e(ae.c()),
					onScheduledPostSettingsChange: t => e(i.C(t)),
					onTrackCancelButtonClick: () => {
						e((e, t) => Q.a(t()))
					},
					openCollectionsListOrCreationModal: t => e(i.n(t)),
					togglePostSchedulePicker: () => e(i.z(g.o)),
					clickPostSchedule: () => {
						e((e, t) => Object(je.a)(Object(Ne.i)()(t())))
					}
				})),
				po = 2e3,
				ho = e => e ? l.fbt._("Update", null, {
					hk: "3MoYFL"
				}) : l.fbt._("Schedule", null, {
					hk: "4bXWUG"
				});
			class bo extends s.a.Component {
				constructor() {
					super(...arguments), this.isSavedTimer = null, this.state = {
						draftId: null,
						isSaved: !1
					}, this.onCancel = () => {
						this.props.onTrackCancelButtonClick(), this.props.onCancel()
					}, this.handleDestCollectionClick = () => {
						const {
							currentCollection: e,
							onResetDestCollection: t,
							currentSubredditOrProfile: n,
							openCollectionsListOrCreationModal: o,
							sendEvent: s
						} = this.props;
						if (e) return t();
						n && (o(n.id), s(Object(mn.b)(void 0, mn.a.collectionComposer)))
					}, this.shouldDisablePostButton = () => {
						const {
							contributorRequestPending: e,
							hasSubmitValidationError: t,
							isDraftPending: n,
							isMediaUploadPending: o,
							isPostPending: s,
							isPostSubmitEnabled: r
						} = this.props;
						return !r || n || s || o || this.state.isSaved || t || e
					}, this.shouldDisablePostScheduleButton = () => {
						const {
							eventSchedule: e,
							postToTwitter: t,
							submissionType: n
						} = this.props;
						return !!e || t || !Qn(n)
					}, this.openPostSchedulePickerModal = () => {
						this.props.togglePostSchedulePicker(), this.props.clickPostSchedule()
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.props.isDraftPending || e.isDraftPending || e.hasDraftError || this.setState({
						isSaved: !0,
						draftId: this.props.draftId
					}, () => {
						this.isSavedTimer = window.setTimeout(() => {
							this.isSavedTimer = null, this.setState({
								isSaved: !1,
								draftId: null
							})
						}, po)
					})
				}
				componentWillUnmount() {
					this.isSavedTimer && (clearTimeout(this.isSavedTimer), this.isSavedTimer = null)
				}
				getSaveDraftButtonText() {
					const {
						draftId: e
					} = this.props, {
						isSaved: t,
						draftId: n
					} = this.state;
					return t ? n ? Vn() : Gn() : e ? Kn() : Hn()
				}
				render() {
					const {
						activeModalId: e,
						canPostAsModerator: t,
						currentCollection: n,
						destSubredditAboutInfo: r,
						govType: a,
						hasError: i,
						hasSubmitValidationError: c,
						isEditingScheduledPost: d,
						errorMsgs: u,
						isAddingToTournament: m,
						isContestMode: b,
						isCreatingTournamentPrediction: f,
						isDraftsFeatureEnabled: E,
						isDraftPending: x,
						isPoll: _,
						isMediaUploadPending: v,
						isOpenAISubRec: O,
						isPostAsMetaMod: y,
						isPostPending: k,
						isSaveDraftEnabled: j,
						isScheduledPost: S,
						onPostFieldValidation: T,
						onSaveDraft: P,
						onScheduledPostSettingsChange: I,
						onSubmit: w,
						postSchedule: N,
						sendEvent: D,
						shouldRenderDivider: M = !0,
						showContributorRequestFlow: R,
						showScheduledPosts: L,
						stickyPosition: F,
						submissionType: A,
						submitMode: B,
						suggestedSort: U,
						togglePostSchedulePicker: W
					} = this.props, {
						isSaved: z
					} = this.state, G = x || k || v, H = B === g.r.Post && v, V = B === g.r.Draft && v, {
						collectionsEnabled: K = !1
					} = r || {}, q = G, J = Object(p.a)(Un.a.ButtonLayout, {
						[Un.a.autoWidth]: _ || R || L
					}), Z = a === Le.a.Prediction && (f || m);
					return s.a.createElement("div", {
						className: Object(p.a)(Un.a.Container, {
							[Un.a.isSubRec]: O
						})
					}, s.a.createElement($t, {
						className: Un.a.postModifiers,
						disabled: G,
						onPostFieldValidation: T
					}), M && s.a.createElement("hr", {
						className: Un.a.Divider
					}), s.a.createElement(Yn, null, s.a.createElement(Xn, null, s.a.createElement("div", {
						className: J
					}, R ? s.a.createElement(Te.default, {
						eventSource: C.b.PostSubmission,
						smallButton: !0
					}) : Z ? s.a.createElement(An, {
						disabled: this.shouldDisablePostButton()
					}) : s.a.createElement(Ge, {
						disabled: this.shouldDisablePostButton(),
						onClick: w,
						className: Object(p.a)(L && Un.a.removeRightBorderRadius)
					}, k || H ? s.a.createElement(to, {
						sizePx: Zn
					}) : s.a.createElement(o.Fragment, null, S ? ho(d) : Wn())), L && !Z && s.a.createElement(Ge, {
						title: l.fbt._("Make a scheduled post", null, {
							hk: "3TBSMs"
						}),
						disabled: this.shouldDisablePostScheduleButton(),
						onClick: this.openPostSchedulePickerModal,
						className: Un.a.postScheduleButton,
						Icon: N ? Object(De.b)("edit", {
							className: Un.a.postScheduleIcon
						}) : Object(De.b)("scheduled", {
							className: Un.a.postScheduleIcon
						})
					})), e === g.o && s.a.createElement(Ie.a, {
						isContestMode: b,
						isPostAsMetaMod: y,
						sendEvent: D,
						schedule: N,
						stickyPosition: F,
						suggestedSort: U,
						onChange: I,
						onClose: W
					}), E && A !== h.Wb.MEDIA && A !== h.Wb.POLL && !S ? s.a.createElement(eo, null, s.a.createElement(He, {
						disabled: !j || G || z,
						onClick: P
					}, x || V ? s.a.createElement(no, {
						sizePx: Zn
					}) : this.getSaveDraftButtonText())) : s.a.createElement($n, null, s.a.createElement(He, {
						disabled: G || z,
						onClick: this.onCancel
					}, zn())), K && t && s.a.createElement(Sn, {
						disabled: q,
						isToggled: !!n,
						onClick: this.handleDestCollectionClick
					})), s.a.createElement(Xe, null), !!(i || u.length || c) && s.a.createElement(we.a, {
						className: Un.a.errorMessages,
						messages: u,
						fallbackMessage: c ? qn() : Jn()
					})))
				}
			}
			var fo = uo(mo(Object(he.c)(bo))),
				go = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				Co = n("./src/reddit/constants/posts.ts"),
				Eo = n("./src/reddit/controls/SubredditPicker/index.tsx"),
				xo = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				_o = n("./src/reddit/helpers/name/index.ts"),
				vo = n("./src/reddit/components/PostCreationForm/CreationControls/index.m.less"),
				Oo = n.n(vo);
			const yo = Object(a.a)(V.h, Y.a, V.Z, te.k, Z.r, te.E, (e, t, n, o, s, r) => {
					const a = n && !t ? n : e;
					if (!a || !a.name) return Object(xo.b)("", null, null, r);
					const {
						name: i,
						isProfile: c
					} = a;
					return c ? Object(xo.b)(Object(_o.d)(i), null, o, r) : Object(xo.b)(Object(_o.c)(i), s, null, r)
				}),
				ko = Object(a.c)({
					pending: V.bb,
					pickerValue: yo
				}),
				jo = Object(r.b)(ko, (e, {
					draftId: t,
					pageLayer: n
				}) => ({
					onSubredditChangeRequested: t => e(ae.b(t, n))
				}));
			class So extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.inputRef = null, this.onSelectSubreddit = e => {
						const {
							rawString: t,
							record: n
						} = e, o = n && n.name || Object(_o.g)(t), s = n && n.type === Co.a.PROFILE || Object(_o.f)(t), r = {
							name: o,
							isProfile: s,
							allowedPostTypes: n && n.allowedPostTypes
						};
						this.props.onSubredditChangeRequested(r), s || this.props.sendEvent(Object(Q.K)(null == n ? void 0 : n.id))
					}, this.setInputRef = e => this.inputRef = e, this.trackSearchEvent = (e, t) => {
						const n = !e && t && t.length > 0,
							o = e && e.length > 0 && !t;
						if (n || o) {
							const e = t ? "type" : "clear";
							this.props.sendEvent(Object(Q.J)(e))
						}
					}, this.onTrackSubredditPickerClick = () => {
						this.props.sendEvent(Object(Q.I)())
					}
				}
				render() {
					return s.a.createElement(Me.a, {
						className: Object(p.a)(Oo.a.ControlRow, this.props.className)
					}, s.a.createElement(Eo.a, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						className: Oo.a.SubredditPicker,
						disabled: this.props.pending,
						includeUserProfile: this.props.includeUserProfile,
						inputRef: this.setInputRef,
						onSelect: this.onSelectSubreddit,
						onFocus: this.onTrackSubredditPickerClick,
						selectOnBlur: !0,
						onInputChange: this.trackSearchEvent,
						value: this.props.pickerValue
					}))
				}
			}
			var To = Object(Z.u)({
					draftId: Z.v,
					pageLayer: e => e
				})(Object(he.c)(jo(So))),
				Po = n("./node_modules/lodash/range.js"),
				Io = n.n(Po),
				wo = n("./src/higherOrderComponents/asModal/index.tsx"),
				No = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Do = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				Mo = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Ro = n("./src/reddit/models/User/index.ts"),
				Lo = n("./src/reddit/components/HumanDate/index.tsx"),
				Fo = n("./src/reddit/models/PostDraft/index.ts"),
				Ao = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Icon.m.less"),
				Bo = n.n(Ao),
				Uo = n("./src/lib/constants/icons.ts");

			function Wo() {
				return (Wo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const zo = {
				[Fo.b.Image]: Uo.a.image_post,
				[Fo.b.Link]: Uo.a.link_post,
				[Fo.b.Markdown]: Uo.a.text_post,
				[Fo.b.RichText]: Uo.a.text_post,
				[Fo.b.Video]: Uo.a.video_post
			};
			var Go = Se.a.wrapped(e => {
					const {
						draftKind: t,
						...n
					} = e, o = zo[t] || Uo.a.link_post;
					return s.a.createElement(De.a, Wo({
						name: o
					}, n))
				}, "Component", Bo.a),
				Ho = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/index.m.less"),
				Vo = n.n(Ho);
			const Ko = Se.a.div("Container", Vo.a),
				qo = Se.a.div("LeftBlock", Vo.a),
				Jo = Se.a.div("Content", Vo.a),
				Zo = Se.a.div("RightBlock", Vo.a),
				Qo = Se.a.h2("PostTitle", Vo.a),
				Yo = Se.a.wrapped(Qo, "EditingPostTitle", Vo.a),
				Xo = Se.a.div("MetaLine", Vo.a),
				$o = Se.a.span("SubredditName", Vo.a),
				es = Se.a.time("DraftSavedTime", Vo.a),
				ts = Se.a.wrapped(Mo.b, "TrashIcon", Vo.a),
				ns = Se.a.div("InteractiveDiv", Vo.a),
				os = Se.a.button("ConfirmDelete", Vo.a),
				ss = Object(a.c)({
					isDraftDeletionPending: (e, {
						draft: {
							id: t
						}
					}) => Object($.a)(e, t),
					subreddit: (e, {
						draft: {
							subredditId: t
						}
					}) => t ? Object(ee.S)(e, {
						subredditId: t
					}) : void 0,
					user: te.k
				}),
				rs = Object(r.b)(ss, (e, {
					pageLayer: t
				}) => ({
					deleteDraft: n => e(ie.o(n, t))
				})),
				as = Object(Z.u)({
					currentDraftId: Z.v,
					pageLayer: e => e
				}),
				is = 1e3;
			class cs extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showConfirmText: !1
					}, this.onClick = () => {
						this.props.onClick(this.props.draft.id)
					}, this.onConfirmClick = e => {
						e.stopPropagation(), this.props.deleteDraft(this.props.draft.id)
					}, this.onTrashCanClick = e => {
						e.stopPropagation(), this.setState({
							showConfirmText: !0
						})
					}
				}
				render() {
					const {
						draft: e,
						currentDraftId: t,
						isDraftDeletionPending: n,
						subreddit: o,
						user: r
					} = this.props, a = o && Object(Nt.h)(o) && r ? {
						displayText: Object(_o.d)(Object(Ro.e)(r)),
						url: `/user/${Object(Ro.e)(r)}/`
					} : o;
					if (n) return null;
					const i = e.title || l.fbt._("Untitled", null, {
						hk: "2gEXjp"
					});
					return s.a.createElement(Ko, {
						onClick: this.onClick
					}, s.a.createElement(qo, null, s.a.createElement(Go, {
						draftKind: e.kind
					})), s.a.createElement(Jo, null, t === e.id ? s.a.createElement(Yo, {
						"data-redditstyle": !0
					}, l.fbt._("EDITING: {postTitle}", [l.fbt._param("postTitle", i)], {
						hk: "3M5MUj"
					})) : s.a.createElement(Qo, {
						"data-redditstyle": !0
					}, i), s.a.createElement(Xo, {
						"data-redditstyle": !0
					}, a && s.a.createElement($o, {
						"data-redditstyle": !0
					}, a.displayText), a && s.a.createElement(Do.b, null), s.a.createElement(es, null, l.fbt._("Draft saved {draftSavedAtTime}", [l.fbt._param("draftSavedAtTime", s.a.createElement(Lo.d, {
						seconds: (e.modified || e.created) / is
					}))], {
						hk: "2HjAWY"
					})))), s.a.createElement(Zo, null, this.state.showConfirmText ? s.a.createElement(os, {
						onClick: this.onConfirmClick,
						"data-redditstyle": !0
					}, t === e.id ? l.fbt._("Delete working draft?", null, {
						hk: "2iGoUj"
					}) : l.fbt._("Confirm", null, {
						hk: "2bjb66"
					})) : s.a.createElement(ns, {
						onClick: this.onTrashCanClick
					}, s.a.createElement(ts, {
						"data-redditstyle": !0
					}))))
				}
			}
			var ls = as(rs(cs)),
				ds = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				us = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Placeholder.m.less"),
				ms = n.n(us);
			const ps = Se.a.div("Container", ms.a),
				hs = Se.a.div("LeftBlock", ms.a),
				bs = Se.a.div("Content", ms.a),
				fs = Se.a.div("MediaIcon", ms.a),
				gs = Se.a.div("Title", ms.a),
				Cs = Se.a.div("Secondary", ms.a);
			var Es = ({
					className: e,
					isLoading: t
				}) => s.a.createElement(ps, {
					className: e,
					"data-redditstyle": !0
				}, s.a.createElement(hs, null, s.a.createElement(fs, {
					className: Object(ds.a)({
						isLoading: t
					}),
					"data-redditstyle": !0
				})), s.a.createElement(bs, null, s.a.createElement(gs, {
					className: Object(ds.b)({
						isLoading: t
					}),
					"data-redditstyle": !0
				}), s.a.createElement(Cs, {
					className: Object(ds.b)({
						isLoading: t
					}),
					"data-redditstyle": !0
				}))),
				xs = n("./src/reddit/components/PostCreationForm/DraftListModal/index.m.less"),
				_s = n.n(xs);

			function vs() {
				return (vs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Os
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ys = `${v.a.assetPath}/img/snoo-drafts.png`, ks = 3, js = Se.a.div("Wrapper", _s.a), Ss = Se.a.div("TitleRow", _s.a), Ts = Se.a.span("DraftsNumber", _s.a), Ps = Se.a.div("DetailsContainer", _s.a), Is = Se.a.wrapped(Me.a, "ButtonRow", _s.a), ws = Se.a.wrapped(k.o, "CancelButton", _s.a), Ns = Se.a.div("CloseWrapper", _s.a), Ds = Se.a.wrapped(No.a, "Close", _s.a), Ms = Se.a.div("Empty", _s.a), Rs = Se.a.img("EmptyImage", _s.a), Ls = Se.a.p("EmptyText", _s.a), Fs = Object(a.c)({
				drafts: $.c,
				isPending: $.b,
				maxDrafts: te.ab
			}), As = Object(r.b)(Fs);
			class Bs extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === b.a.Escape && this.props.onClose()
					}, this.renderItem = e => s.a.createElement(ls, {
						key: e.id,
						draft: e,
						onClick: () => this.props.onLoadDraft(e)
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderPlaceholder(e) {
					return s.a.createElement(Es, {
						isLoading: !0,
						key: e
					})
				}
				renderEmpty() {
					return s.a.createElement(Ms, null, s.a.createElement(Rs, {
						src: ys
					}), s.a.createElement(Ls, null, Os._("Your drafts will live here", null, {
						hk: "NIEIr"
					})))
				}
				render() {
					const {
						drafts: e,
						isPending: t,
						maxDrafts: n
					} = this.props;
					let o;
					return o = t ? Io()(ks).map(this.renderPlaceholder) : 0 === e.length ? this.renderEmpty() : e.map(this.renderItem), s.a.createElement(js, {
						"data-redditstyle": !0
					}, s.a.createElement(Ss, {
						"data-redditstyle": !0
					}, Os._("Drafts", null, {
						hk: "1fvOmI"
					}), s.a.createElement(Ts, {
						"data-redditstyle": !0
					}, e.length, "/", n), s.a.createElement(Ns, {
						onClick: this.props.onClose
					}, s.a.createElement(Ds, {
						"data-redditstyle": !0
					}))), s.a.createElement(Ps, null, o), s.a.createElement(Is, {
						"data-redditstyle": !0
					}, s.a.createElement(ws, {
						onClick: this.props.onClose,
						"data-redditstyle": !0
					}, Os._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			const Us = Se.a.wrapped(Object(wo.a)(As(Bs)), "DraftListModal", _s.a);
			var Ws = e => s.a.createElement(Us, vs({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e)),
				zs = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				Gs = n("./src/lib/forceHttps/index.ts"),
				Hs = n("./src/reddit/components/PostCreationForm/SafeHarborText/index.m.less"),
				Vs = n.n(Hs);
			const {
				fbt: Ks
			} = n("./node_modules/fbt/lib/FbtPublic.js"), qs = new RegExp(`\\b(${[...Re.x].join("|")})\\.com$`, "i"), Js = new RegExp(`\\.(${Re.w.join("|")})$`), Zs = Se.a.div("TextContainer", Vs.a);
			class Qs extends s.a.Component {
				constructor() {
					super(...arguments), this.isUrlScraped = e => {
						const t = Object(zs.parse)(Object(Gs.a)(e));
						return !(!t.hostname || !qs.test(t.hostname)) || !(!t.pathname || !Js.test(t.pathname))
					}
				}
				render() {
					return this.props.value && this.isUrlScraped(this.props.value) ? s.a.createElement(Zs, null, Ks._("Posting this link saves the image or gif to Reddit", null, {
						hk: "1zFV82"
					})) : null
				}
			}
			var Ys = n("./node_modules/react-autosize-textarea/lib/index.js"),
				Xs = n.n(Ys),
				$s = n("./src/reddit/controls/GrowingOutlinedInput/index.m.less"),
				er = n.n($s);

			function tr() {
				return (tr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class nr extends s.a.Component {
				constructor(e) {
					super(e), this.innerRef = null, this.focused = !1, this.setInnerRef = e => {
						this.innerRef = e, this.props.textareaRef && this.props.textareaRef(e)
					}, this.handleOnValueChange = () => {
						this.props.onValueChange && this.props.onValueChange(this.state.value)
					}, this.onFocus = e => {
						this.focused = !0, this.props.onFocus && this.props.onFocus(e)
					}, this.onBlur = e => {
						this.focused = !1, this.props.onBlur && this.props.onBlur(e)
					}, this.onChange = e => {
						if (this.innerRef) {
							const e = this.innerRef.value.replace(/\n/g, " ");
							this.setState(() => ({
								value: e
							}), this.handleOnValueChange)
						}
						this.props.onChange && this.props.onChange(e)
					}, this.onKeyPress = e => {
						13 === e.which && e.preventDefault(), this.props.onKeyPress && this.props.onKeyPress(e)
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.focused || this.state.value === e.value || this.setState({
						value: e.value
					})
				}
				render() {
					const {
						value: e
					} = this.state, {
						className: t,
						onValueChange: n,
						textareaRef: o,
						minHeight: r,
						...a
					} = this.props;
					return s.a.createElement(Xs.a, tr({}, a, {
						className: Object(p.a)(er.a.growingOutlinedInput, t),
						style: {
							minHeight: r
						},
						innerRef: this.setInnerRef,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						value: e
					}))
				}
			}
			var or = n("./src/reddit/components/PostCreationForm/LinkEditor/index.m.less"),
				sr = n.n(or);
			const rr = Object(a.c)({
					pending: V.bb,
					postCreationFieldErrors: Mt,
					subreddit: Z.r,
					value: V.U
				}),
				ar = Object(r.b)(rr, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(dt(h.wb.LINK, o)))
					},
					onChange: n => {
						e(i.r(n)), t(n)
					},
					onFocus: () => e((e, t) => Q.s(t(), g.l.CLICK, g.m.URL))
				}));
			var ir, cr = Object(Z.u)()(ar(e => {
					const {
						pending: t,
						postCreationFieldErrors: n,
						subreddit: o,
						value: r
					} = e, a = n[h.wb.LINK].length > 0;
					return s.a.createElement("div", null, s.a.createElement(nr, {
						className: Object(p.a)(sr.a.URLInput, {
							[sr.a.mHasError]: a
						}),
						placeholder: l.fbt._("Url", null, {
							hk: "4dfMY"
						}),
						value: r,
						onBlur: e.onBlur,
						onFocus: e.onFocus,
						onKeyDown: e.onKeyDown,
						onValueChange: e.onChange,
						readOnly: t
					}), s.a.createElement(we.a, {
						errorModalTitle: o ? Object(_o.c)(o.name) : void 0,
						messages: n[h.wb.LINK]
					}), s.a.createElement(Qs, {
						value: r
					}))
				})),
				lr = n("./node_modules/lodash/clamp.js"),
				dr = n.n(lr),
				ur = n("./node_modules/lodash/pickBy.js"),
				mr = n.n(ur),
				pr = n("./src/lib/formatApiError/index.ts"),
				hr = n("./src/lib/objectSelector/index.ts"),
				br = n("./node_modules/lodash/isEqual.js"),
				fr = n.n(br),
				gr = n("./src/reddit/controls/Sortable/index.tsx");
			! function(e) {
				e.RemoveGalleryItem = "REMOVE_GALLERY_ITEM", e.SelectGalleryItem = "SELECT_GALLERY_ITEM", e.SetGalleryItems = "SET_GALLERY_ITEMS", e.SetCaptionInput = "SET_CAPTION_INPUT", e.SetURLInput = "SET_URL_INPUT", e.SelectPrevMedia = "SELECT_PREV_MEDIA", e.SelectNextMedia = "SELECT_NEXT_MEDIA"
			}(ir || (ir = {}));
			var Cr = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				Er = n("./node_modules/lodash/upperFirst.js"),
				xr = n.n(Er),
				_r = n("./src/reddit/icons/svgs/Hamster1/index.tsx"),
				vr = n("./src/reddit/icons/svgs/Hamster2/index.tsx"),
				Or = n("./src/reddit/components/PostCreationForm/MediaInput/DropArea/index.m.less"),
				yr = n.n(Or);
			const {
				fbt: kr
			} = n("./node_modules/fbt/lib/FbtPublic.js"), jr = [...Array.from(h.a), ...Array.from(h.b)].join(), Sr = Se.a.input("HiddenInput", yr.a), Tr = Se.a.wrapped(k.o, "UploadButton", yr.a), Pr = Se.a.wrapped(_r.a, "HamsterSmall", yr.a), Ir = Se.a.wrapped(vr.a, "HamsterLarge", yr.a), wr = Se.a.div("Container", yr.a), Nr = Se.a.div("DropArea", yr.a), Dr = Se.a.wrapped(Nr, "DropAreaActive", yr.a), Mr = Se.a.wrapped(Dr, "DropAreaOver", yr.a), Rr = Se.a.p("Paragraph", yr.a), Lr = Se.a.p("ErrorMsg", yr.a), Fr = Se.a.div("Box", yr.a);
			class Ar extends s.a.Component {
				constructor() {
					super(...arguments), this.hiddenInputEl = null, this.onFileInput = e => {
						this.props.onFileInput(e.currentTarget.files)
					}, this.clickUploadButton = () => this.hiddenInputEl && this.hiddenInputEl.click()
				}
				render() {
					const {
						isOver: e,
						canDrop: t,
						lastErrorMsg: n,
						allowMultiple: o
					} = this.props;
					return s.a.createElement(wr, null, s.a.createElement(Sr, {
						innerRef: e => this.hiddenInputEl = e,
						onChange: this.onFileInput,
						type: "file",
						accept: jr,
						multiple: o
					}), e ? s.a.createElement(Mr, null, s.a.createElement(Fr, null, s.a.createElement(Ir, null), s.a.createElement(Rr, null, kr._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					})))) : t ? s.a.createElement(Dr, null, s.a.createElement(Fr, null, s.a.createElement(Pr, null), kr._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					}))) : s.a.createElement(Nr, null, s.a.createElement(Rr, null, kr._({
						"*": "Drag and drop images or {=Upload}",
						_1: "Drag and drop image or {=Upload}"
					}, [kr._plural(o ? 2 : 1), kr._param("=Upload", s.a.createElement(Tr, {
						onClick: this.clickUploadButton
					}, kr._("Upload", null, {
						hk: "41ZNAf"
					})))], {
						hk: "2OuWpT"
					})), n && s.a.createElement(Lr, null, xr()(n))))
				}
			}
			var Br = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				Ur = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/AddImageItem.m.less"),
				Wr = n.n(Ur);

			function zr(e) {
				const {
					onClickEvent: t,
					onFileInput: n
				} = e, r = Object(o.useRef)(null), a = Object(o.useCallback)(() => {
					r && r.current && r.current.click(), t()
				}, [t, r]), i = Object(o.useCallback)(e => {
					n(e.currentTarget.files)
				}, [n]);
				return s.a.createElement("span", {
					className: Wr.a.AddImageWrapper
				}, s.a.createElement("input", {
					accept: jr,
					className: Wr.a.hiddenInput,
					multiple: !0,
					onChange: i,
					ref: r,
					type: "file"
				}), s.a.createElement("button", {
					className: Wr.a.AddImageItem,
					onClick: a
				}, s.a.createElement(Br.a, {
					className: Wr.a.plusIcon
				})))
			}
			var Gr = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				Hr = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				Vr = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItem.m.less"),
				Kr = n.n(Vr);
			var qr = e => {
					const {
						canDrop: t,
						mediaUpload: n,
						isDragging: r,
						isOver: a,
						isSelected: i,
						mediaItem: c,
						removeGalleryItem: l,
						dispatch: d
					} = e, u = Object(o.useRef)(null), m = n.key, h = n.status === Fe.a.FAILED, b = Object(o.useCallback)(() => d((e => ({
						type: ir.SelectGalleryItem,
						payload: {
							key: e
						}
					}))(m)), [d, m]), f = Object(o.useCallback)(e => {
						e.stopPropagation(), l(c)
					}, [l, c]), g = n.metadata.localUrl;
					return g ? s.a.createElement("span", {
						ref: u
					}, s.a.createElement(Gr.a, {
						canDrop: t,
						className: Object(p.a)(Kr.a.GalleryMediaUpload, {
							[Kr.a.isDragging]: r,
							[Kr.a.isSelected]: i,
							[Kr.a.isError]: h
						}),
						isDragging: r,
						isOver: a
					}, s.a.createElement("span", {
						className: Object(p.a)(Kr.a.galleryImage, {
							[Kr.a.isDragging]: r,
							[Kr.a.isSelected]: i,
							[Kr.a.isError]: h
						}),
						onClick: b,
						style: {
							backgroundImage: `url("${g}")`
						}
					}, s.a.createElement("button", {
						className: Object(p.a)(Kr.a.deleteButton, {
							[Kr.a.isDragging]: r,
							[Kr.a.showDeleteNormal]: !i,
							[Kr.a.isError]: h
						}),
						onClick: f
					}, s.a.createElement(Hr.a, {
						className: Object(p.a)(Kr.a.deleteIcon, {
							[Kr.a.isDragging]: r
						})
					}))))) : null
				},
				Jr = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItemsWrapper.m.less"),
				Zr = n.n(Jr);
			var Qr = e => {
					const {
						onRemoveUpload: t,
						dispatch: n,
						mediaState: r,
						uploads: a
					} = e, i = Object(wn.a)(), c = Object(o.useCallback)(() => i(Q.o()), [i]), l = Object(o.useCallback)(e => {
						t(e.uploadKey), i(Q.q())
					}, [i, t]);
					return s.a.createElement("div", {
						className: Zr.a.itemsWrapper
					}, s.a.createElement(gr.a, {
						className: Zr.a.sortableImages,
						values: r.items,
						getReactKey: e => e.uploadKey,
						render: (e, t, o, i, c) => {
							const d = a[e.uploadKey];
							if (!d) return null;
							if (Object(Fe.c)(d)) return s.a.createElement("span", {
								className: Object(p.a)(Zr.a.pendingItem, Object(ds.b)({
									isLoading: !0
								}))
							});
							const u = e.uploadKey === r.selectedKey;
							return s.a.createElement("span", {
								className: Zr.a.imageStyles
							}, i && s.a.createElement("span", {
								className: Zr.a.hoverMarker
							}), s.a.createElement(qr, {
								canDrop: c,
								dispatch: n,
								isDragging: o,
								isOver: i,
								isSelected: u,
								mediaItem: e,
								key: e.uploadKey,
								mediaUpload: d,
								removeGalleryItem: l
							}))
						},
						onDrop: (e, t, o) => {
							n((e => ({
								type: ir.SetGalleryItems,
								payload: {
									items: e
								}
							}))(o))
						}
					}), r.items.length < Cr.b && s.a.createElement(zr, {
						onClickEvent: c,
						onFileInput: e.onFileInput
					}))
				},
				Yr = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/InputWrapper.m.less"),
				Xr = n.n(Yr);
			var $r = e => {
					const {
						uploads: t,
						galleryItem: n,
						isSelected: r,
						dispatch: a
					} = e, i = t[n.uploadKey], c = n.caption, d = n.url, u = Object(wn.a)(), m = Object(o.useCallback)(e => a((e => ({
						type: ir.SetCaptionInput,
						payload: {
							input: e
						}
					}))(e)), [a]), h = Object(o.useCallback)(e => a((e => ({
						type: ir.SetURLInput,
						payload: {
							input: e
						}
					}))(e)), [a]), b = Object(o.useCallback)(e => u(Q.p(e)), [u]), f = Object(o.useCallback)(() => b(g.m.CAPTION), [b]), C = Object(o.useCallback)(() => b(g.m.OUTBOUND_URL), [b]), E = !r || !i || !i.url || Object(Fe.c)(i);
					return s.a.createElement("div", null, s.a.createElement("div", {
						className: Xr.a.inputWrapper
					}, s.a.createElement(nr, {
						className: Xr.a.inputStyles,
						disabled: E,
						maxLength: Cr.a,
						onFocus: f,
						onValueChange: m,
						placeholder: l.fbt._("Add a caption...", null, {
							hk: "1fOmKi"
						}),
						value: c
					}), s.a.createElement("div", {
						className: Xr.a.charsCounter
					}, c.length, "/", Cr.a)), s.a.createElement("div", {
						className: Xr.a.inputWrapper
					}, s.a.createElement(nr, {
						className: Object(p.a)(Xr.a.inputStyles, Xr.a.urlInputStyles),
						disabled: E,
						onFocus: C,
						onValueChange: h,
						placeholder: l.fbt._("Add a link...", null, {
							hk: "Z6l9K"
						}),
						value: d
					})))
				},
				ea = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/Layout.m.less"),
				ta = n.n(ea);
			var na = e => {
					const {
						heroSlot: t,
						mainContent: n,
						sideMetaContent: o,
						bottomContent: r
					} = e;
					return s.a.createElement("div", {
						className: ta.a.Layout
					}, s.a.createElement("div", {
						className: ta.a.hero
					}, t), n && s.a.createElement("div", {
						className: ta.a.mainContent
					}, n), o && s.a.createElement("div", {
						className: ta.a.sideMetaContent
					}, o), s.a.createElement("div", {
						className: ta.a.bottomContent
					}, r))
				},
				oa = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/SelectedImage.m.less"),
				sa = n.n(oa);
			var ra = e => {
					const {
						upload: t
					} = e, n = t.metadata.localUrl;
					return Object(Fe.c)(t) ? s.a.createElement("span", {
						className: Object(p.a)(sa.a.pendingImage, Object(ds.b)({
							isLoading: !0
						}))
					}) : s.a.createElement("img", {
						className: sa.a.selectedImage,
						src: n
					})
				},
				aa = n("./src/reddit/components/ProgressBar/index.tsx"),
				ia = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/MultipleUploadStatusBar/index.m.less"),
				ca = n.n(ia);
			const {
				fbt: la
			} = n("./node_modules/fbt/lib/FbtPublic.js"), da = Se.a.div("ControlRow", ca.a), ua = Se.a.div("Status", ca.a);
			var ma = Se.a.wrapped(e => {
					const {
						progress: t
					} = e, n = t && t.percent || 0;
					return s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(aa.a, {
						percent: n,
						className: ca.a.OuterDivProgressBar,
						innerBarClassName: ca.a.ProgressBar
					}), s.a.createElement(da, null, s.a.createElement(ua, {
						className: ca.a.StatusText
					}, n < 100 ? la._("Image uploading in progress...", null, {
						hk: "n2dCj"
					}) : la._("Image uploading completed", null, {
						hk: "4ko42w"
					}))))
				}, "Component", ca.a),
				pa = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/index.m.less"),
				ha = n.n(pa);

			function ba(e) {
				const {
					canDrop: t,
					dispatch: n,
					isOver: r,
					mediaState: a,
					onFileInput: i,
					onRemoveUpload: c,
					uploads: d
				} = e, [u, m] = Object(o.useState)([]), h = a.selectedKey, b = a.items.length > 1, f = a.items.find(e => e.uploadKey === h), g = h && d[h], C = a.items.filter(e => {
					const t = d[e.uploadKey];
					return !!t && t.status === Fe.a.FAILED
				}).length, E = Object.values(d).filter(Fe.c);
				if (!fr()(u, E))
					if (0 === E.length) m([]);
					else {
						const e = E.filter(e => !u.some(t => t.key === e.key));
						e.length > 0 && m([...u, ...e])
					} const x = u.length > 0,
					_ = {
						percent: (() => {
							if (!x) return 0;
							let e = 0;
							return u.forEach(t => {
								const n = d[t.key];
								if (null == n || n && (n.status === Fe.a.CANCELED || n.status === Fe.a.FAILED || n.status === Fe.a.SUCCESS)) e += 100;
								else {
									const n = d[t.key].progress;
									e += n && n.percent || 0
								}
							}), e / u.length
						})(),
						uploaded: 0
					};
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(p.a)(ha.a.dropArea, {
						[ha.a.isDropAreaActive]: t,
						[ha.a.isDropAreaOver]: r
					})
				}, s.a.createElement(na, {
					heroSlot: s.a.createElement(Qr, {
						mediaState: a,
						onFileInput: i,
						onRemoveUpload: c,
						uploads: d,
						dispatch: n
					}),
					mainContent: g && b && s.a.createElement(ra, {
						upload: g
					}),
					sideMetaContent: f && b && s.a.createElement($r, {
						dispatch: n,
						galleryItem: f,
						uploads: d,
						isSelected: !!h
					}),
					bottomContent: null
				})), x ? s.a.createElement(ma, {
					progress: _
				}) : null, !!C && s.a.createElement(we.a, {
					className: ha.a.errorMessage,
					messages: [l.fbt._("Some files failed to upload, please remove or retry them", null, {
						hk: "3BP9AQ"
					})]
				}))
			}
			var fa = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				ga = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				Ca = n("./src/reddit/controls/FileDrop/index.tsx"),
				Ea = n("./src/reddit/helpers/media/index.ts"),
				xa = n("./src/telemetry/models/Media.ts"),
				_a = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				va = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				Oa = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				ya = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/Preview/index.m.less"),
				ka = n.n(ya);
			const ja = Se.a.img("Img", ka.a),
				Sa = Se.a.img("BlurImg", ka.a),
				Ta = Se.a.wrapped(e => {
					const {
						className: t,
						url: n
					} = e;
					return s.a.createElement("div", {
						className: t
					}, s.a.createElement(Sa, {
						src: n
					}), s.a.createElement(ja, {
						src: n
					}))
				}, "ImagePreview", ka.a),
				Pa = Se.a.wrapped(e => {
					const {
						className: t,
						url: n,
						showControls: o,
						videoBlurImgSrc: r
					} = e;
					return s.a.createElement("div", {
						className: t
					}, s.a.createElement(Oa.b, {
						shouldLoad: !1,
						shouldPause: !1,
						isGif: !1,
						otherSource: n,
						showControlBar: o,
						showSettingsIcon: !1,
						blurImageSrc: r
					}))
				}, "VideoPreview", ka.a);
			var Ia = Se.a.wrapped(e => {
					const {
						className: t,
						type: n,
						url: o,
						showControls: r,
						videoBlurImgSrc: a
					} = e;
					return s.a.createElement("div", {
						className: t
					}, "image" === n ? s.a.createElement(Ta, {
						url: o
					}) : s.a.createElement(Pa, {
						url: o,
						videoBlurImgSrc: a,
						showControls: r
					}))
				}, "Component", ka.a),
				wa = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/UploadStatusBar/index.m.less"),
				Na = n.n(wa);
			const {
				fbt: Da
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ma = Se.a.div("ControlRow", Na.a), Ra = Se.a.wrapped(k.r, "Button", Na.a), La = Se.a.div("Status", Na.a);
			var Fa = Se.a.wrapped(e => {
					const {
						name: t,
						progress: n,
						onCancel: o
					} = e, r = n && n.percent || 0;
					return s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(aa.a, {
						percent: r
					}), s.a.createElement(Ma, null, s.a.createElement(La, null, r < 100 ? Da._("Uploading {fileName}", [Da._param("fileName", t)], {
						hk: "1F1ZHh"
					}) : Da._("Success!", null, {
						hk: "2SQAeu"
					})), r < 100 && s.a.createElement(Ra, {
						onClick: o
					}, Da._("Cancel", null, {
						hk: "2TSLl5"
					}))))
				}, "Component", Na.a),
				Aa = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Ba = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/index.m.less"),
				Ua = n.n(Ba);
			const Wa = Se.a.div("Wrapper", Ua.a),
				za = Se.a.div("Controls", Ua.a),
				Ga = Se.a.wrapped(va.a, "ThumbnailSelect", Ua.a),
				Ha = ({
					isFilled: e,
					...t
				}) => s.a.createElement(Ga, t);

			function Va(e) {
				const {
					isPostSubmitPending: t,
					mediaType: n,
					onCancelUpload: o,
					onRemove: r,
					upload: a
				} = e, i = a.metadata, {
					localUrl: c,
					videoFirstFrameUrl: d
				} = i, u = a.status, m = u === Fe.a.PENDING || u === Fe.a.UPLOADING, p = u === Fe.a.SUCCESS, h = !t;
				return s.a.createElement(Wa, null, m ? s.a.createElement(Fa, {
					className: Ua.a.UploadStatusBar,
					name: a.file.name,
					progress: a.progress,
					onCancel: o
				}) : null, c ? s.a.createElement(Ia, {
					type: n,
					url: c,
					showControls: p,
					videoBlurImgSrc: d
				}) : null, p && s.a.createElement(za, null, "video" === n && s.a.createElement(_a.a, {
					disabled: !!e.makeGifDisableReason || !h,
					tooltip: e.makeGifDisableReason,
					on: e.isMakeGifToggleOn,
					onClick: e.onMakeGifToggle
				}), "video" === n && s.a.createElement(Aa.a, {
					enabled: h,
					Icon: Ha,
					tooltip: l.fbt._("Choose thumbnail", null, {
						hk: "2XlKfd"
					}),
					onClick: e.onShowThumbnailSelector
				}), s.a.createElement(Aa.a, {
					enabled: h,
					iconName: "delete",
					tooltip: l.fbt._("Remove", null, {
						hk: "H42IB"
					}),
					onClick: r
				})))
			}
			var Ka = n("./src/reddit/components/PostCreationForm/MediaInput/RemovePrompt/index.m.less"),
				qa = n.n(Ka);
			const Ja = "POST_CREATION_MEDIA_REMOVE_PROMPT_ID",
				Za = Se.a.div("Wrapper", qa.a),
				Qa = Se.a.wrapped(Me.a, "TitleRow", qa.a),
				Ya = Se.a.div("DetailsContainer", qa.a),
				Xa = Se.a.wrapped(Me.a, "ButtonRow", qa.a),
				$a = Se.a.wrapped(k.o, "CancelButton", qa.a),
				ei = Se.a.wrapped(k.l, "ConfirmButton", qa.a);
			var ti = Object(wo.a)(e => {
					const {
						isVideo: t
					} = e;
					return s.a.createElement(Za, null, s.a.createElement(Qa, null, t ? l.fbt._("Remove video?", null, {
						hk: "34eepe"
					}) : l.fbt._("Remove image?", null, {
						hk: "41e1Uy"
					})), s.a.createElement(Ya, null, t ? l.fbt._("Are you sure you want to remove your video?", null, {
						hk: "smTuF"
					}) : l.fbt._("Are you sure you want to remove your image?", null, {
						hk: "Ci5LM"
					})), s.a.createElement(Xa, null, s.a.createElement($a, {
						onClick: e.onCanceled
					}, l.fbt._("Keep", null, {
						hk: "4gFSdj"
					})), s.a.createElement(ei, {
						onClick: e.onConfirmed
					}, l.fbt._("Remove", null, {
						hk: "3tYl0U"
					}))))
				}),
				ni = n("./src/reddit/components/PostCreationForm/MediaInput/index.m.less"),
				oi = n.n(ni);
			const si = "MEDIA_POST_VIDEO_THUMBNAIL_SELECTOR_MODAL_ID",
				ri = Object(Z.u)(),
				ai = Object(a.c)({
					activeModalId: Y.a,
					isPostPending: V.bb,
					uploads: Object(hr.a)(e => mr()(e.uploads, e => e.key.startsWith(se.a))),
					value: V.W,
					isImageGalleryCreationEnabled: V.N
				}),
				ii = Object(r.b)(ai, e => ({
					onChange: t => e(i.d(t)),
					startMediaGalleryUploads: (t, n) => e(se.d(t, n)),
					removeUpload: t => e(ce.i(t, !0)),
					toggleThumbnailModal: () => e(i.z(si)),
					toggleRemovePrompt: () => e(i.z(Ja))
				})),
				ci = Se.a.div("Container", oi.a),
				li = (e, t, n) => {
					if (!e.length) return null;
					let o = e.findIndex(e => e.uploadKey === n);
					if (-1 === o) {
						const s = t.findIndex(e => e.uploadKey === n);
						o = dr()(s - 1, 0, e.length - 1)
					}
					return e[o].uploadKey
				};
			class di extends s.a.Component {
				constructor() {
					super(...arguments), this.onFileDrop = e => this.uploadMediaFiles(e, xa.FileSource.DragAndDrop), this.onFileInput = e => this.uploadMediaFiles(e, xa.FileSource.FileSelector), this.onRemoveUpload = e => {
						const {
							value: t
						} = this.props, {
							items: n,
							selectedKey: o
						} = t, s = n.filter(t => t.uploadKey !== e);
						this.props.onChange({
							...t,
							items: s,
							selectedKey: li(s, n, o)
						}), this.props.removeUpload(e)
					}, this.onCancelSingleMediaUpload = () => {
						this.onRemoveUpload(this.getSingleUpload().key)
					}, this.handlePaste = e => {
						if (e.clipboardData) {
							const t = Object(fa.a)(e.clipboardData);
							t.length && (e.preventDefault(), e.stopPropagation(), this.uploadMediaFiles(t, xa.FileSource.Clipboard))
						}
					}, this.onRemoveConfirmed = () => {
						this.props.toggleRemovePrompt(), this.onRemoveUpload(this.getSingleUpload().key)
					}, this.onThumbnailSelect = e => {
						this.toggleThumbnailSelector();
						const {
							value: t
						} = this.props;
						if (!Object(g.x)(t)) return;
						const n = t.items[0],
							o = n.video;
						this.props.onChange({
							...t,
							items: [{
								...n,
								video: {
									...o,
									thumbnail: e
								}
							}]
						})
					}, this.toggleThumbnailSelector = () => {
						this.props.toggleThumbnailModal()
					}, this.onMakeGifToggle = () => {
						const {
							value: e
						} = this.props;
						if (!Object(g.x)(e)) return;
						const t = e.items[0],
							n = t.video;
						this.props.onChange({
							...e,
							items: [{
								...t,
								video: {
									...n,
									isMakeGif: !n.isMakeGif
								}
							}]
						})
					}, this.dispatchAction = e => {
						const {
							value: t
						} = this.props, n = function(e, t) {
							switch (t.type) {
								case ir.SelectGalleryItem: {
									const {
										key: n
									} = t.payload;
									return {
										...e,
										selectedKey: n
									}
								}
								case ir.SetGalleryItems: {
									const {
										items: n
									} = t.payload;
									return {
										...e,
										items: n
									}
								}
								case ir.SetCaptionInput: {
									const {
										input: n
									} = t.payload, {
										selectedKey: o,
										items: s
									} = e;
									return o ? {
										...e,
										items: s.map(e => e.uploadKey === o ? {
											...e,
											caption: n
										} : e)
									} : e
								}
								case ir.SetURLInput: {
									const {
										input: n
									} = t.payload, {
										selectedKey: o,
										items: s
									} = e;
									return o ? {
										...e,
										items: s.map(e => e.uploadKey === o ? {
											...e,
											url: n
										} : e)
									} : e
								}
								case ir.SelectPrevMedia: {
									const {
										selectedKey: t,
										items: n
									} = e, o = n.findIndex(e => e.uploadKey === t);
									let s = -1 === o ? 0 : o - 1;
									return s < 0 && (s = n.length - 1), {
										...e,
										selectedKey: n[s].uploadKey
									}
								}
								case ir.SelectNextMedia: {
									const {
										selectedKey: t,
										items: n
									} = e, o = n.findIndex(e => e.uploadKey === t), s = -1 === o ? 0 : (o + 1) % n.length;
									return {
										...e,
										selectedKey: n[s].uploadKey
									}
								}
								default:
									return e
							}
						}(t, e);
						this.props.onChange(n)
					}, this.renderDropArea = (e, t) => {
						const {
							isPostPending: n,
							value: o,
							isImageGalleryCreationEnabled: r,
							uploads: a
						} = this.props;
						if (!Object(g.x)(o) && r && o.items.length >= 1) return s.a.createElement(ba, {
							isOver: e,
							canDrop: t,
							dispatch: this.dispatchAction,
							mediaState: o,
							onFileInput: this.onFileInput,
							onRemoveUpload: this.onRemoveUpload,
							uploads: a
						}); {
							const a = this.getSingleUpload(),
								i = this.props.value.items[0],
								{
									isMakeGif: c = !1,
									makeGifDisableReason: l = null
								} = i && i.video || {},
								d = a && a.status === Fe.a.FAILED,
								u = a && d ? Object(pr.a)(a.error) : "",
								m = a && Object(Ea.f)(a.metadata.mimetype);
							return o && m && a && !d ? s.a.createElement(Va, {
								isPostSubmitPending: n,
								upload: a,
								mediaType: m,
								onRemove: this.props.toggleRemovePrompt,
								onCancelUpload: this.onCancelSingleMediaUpload,
								onShowThumbnailSelector: this.toggleThumbnailSelector,
								onMakeGifToggle: this.onMakeGifToggle,
								isMakeGifToggleOn: c,
								makeGifDisableReason: l
							}) : s.a.createElement(Ar, {
								lastErrorMsg: u,
								isOver: e,
								canDrop: t,
								onFileInput: this.onFileInput,
								allowMultiple: r
							})
						}
					}
				}
				componentDidMount() {
					document.addEventListener("paste", this.handlePaste)
				}
				componentWillUnmount() {
					document.removeEventListener("paste", this.handlePaste)
				}
				getSingleUpload() {
					const {
						items: e
					} = this.props.value, t = 1 === e.length && e[0];
					return t && this.props.uploads[t.uploadKey] || void 0
				}
				uploadMediaFiles(e, t) {
					this.props.startMediaGalleryUploads([...e], t)
				}
				render() {
					const {
						value: e
					} = this.props, {
						items: t
					} = e, n = this.getSingleUpload(), o = t[0], r = Object(g.x)(e), a = r && o.video.thumbnail || void 0;
					return s.a.createElement(ci, null, s.a.createElement(Ca.a, {
						render: (e, t) => this.renderDropArea(e, t),
						onDrop: this.onFileDrop
					}), n && n.metadata.videoDuration && s.a.createElement(ga.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleThumbnailSelector,
						videoSource: n.metadata.localUrl,
						videoDuration: n.metadata.videoDuration,
						selected: a,
						isOpen: this.props.activeModalId === si
					}), this.props.activeModalId === Ja && s.a.createElement(ti, {
						isVideo: r,
						onCanceled: this.props.toggleRemovePrompt,
						onConfirmed: this.onRemoveConfirmed
					}))
				}
			}
			var ui = ri(ii(di)),
				mi = n("./src/reddit/actions/post.ts"),
				pi = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				hi = n("./src/reddit/controls/OutboundLink/index.tsx"),
				bi = n("./src/reddit/selectors/externalAccount.ts"),
				fi = n("./src/reddit/icons/fonts/Info/index.tsx"),
				gi = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/Hint/index.m.less"),
				Ci = n.n(gi);
			const Ei = Se.a.wrapped(fi.a, "Info", Ci.a),
				xi = Se.a.div("TooltipContent", Ci.a);
			var _i = e => s.a.createElement("div", {
					className: Ci.a.Hint
				}, s.a.createElement(xt.a, {
					className: Ci.a.HoverTooltip,
					tooltipContentClass: Ci.a.tooltipContentClass,
					text: s.a.createElement(xi, null, e.text)
				}), s.a.createElement(Ei, null)),
				vi = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/index.m.less"),
				Oi = n.n(vi);
			const yi = Se.a.wrapped(pi.a, "CheckboxInput", Oi.a),
				ki = Se.a.wrapped(hi.b, "ConnectAccountLink", Oi.a),
				ji = Se.a.div("Container", Oi.a),
				Si = Se.a.div("ContainerLeft", Oi.a),
				Ti = Se.a.div("ContainerRight", Oi.a),
				Pi = Se.a.div("CheckboxText", Oi.a),
				Ii = Se.a.div("Option", Oi.a),
				wi = Se.a.wrapped(mt.a, "TextButton", Oi.a),
				Ni = Se.a.input("TextBox", Oi.a),
				Di = Se.a.div("Wrapper", Oi.a),
				Mi = Object(a.c)({
					connectedTwitterAccount: bi.a,
					currentSubredditOrProfile: Z.p,
					currentUser: te.k,
					isDraftPending: $.g,
					isMediaUploadPending: V.X,
					isPostPending: V.ob,
					isPublicLink: V.R,
					postToTwitter: V.fb,
					sendReplies: V.hb,
					sharingLink: $.i,
					submissionType: V.a
				}),
				Ri = Object(r.b)(Mi, (e, t) => ({
					togglePostToTwitter: t => {
						e(i.A(t)), e((e, n) => Q.H(n(), t))
					},
					toggleSendReplies: t => {
						e(i.B(t))
					},
					toggleDraftIsPublic: n => {
						e(ie.s(n)), e(Object(ie.r)(t.draftId)), e((e, o) => {
							const s = Object($.h)(o(), t.draftId);
							s && Q.i(o(), s, n)
						})
					},
					copyLink: t => e(Object(mi.D)(t)),
					trackConnectAccountsClick: () => e((e, t) => Q.d(t()))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onTogglePostToTwitter: () => t.togglePostToTwitter(!e.postToTwitter),
					onToggleSendReplies: () => t.toggleSendReplies(!e.sendReplies),
					onToggleDraftIsPublic: () => {
						t.toggleDraftIsPublic(!e.isPublicLink), e.isPublicLink || t.copyLink(e.sharingLink)
					},
					onCopyLink: () => t.copyLink(e.sharingLink)
				}));
			var Li = Object(Z.u)()(Ri(e => {
					const {
						connectedTwitterAccount: t,
						currentSubredditOrProfile: n,
						currentUser: o,
						draftId: r,
						submissionType: a
					} = e, i = !!n && !!n.isQuarantined, c = e.isDraftPending || e.isPostPending || e.isMediaUploadPending, d = a !== h.Wb.MEDIA && r, u = e.isPublicLink, m = o && o.hasUserProfile;
					return s.a.createElement(ji, null, s.a.createElement(Si, {
						className: e.className
					}, s.a.createElement(Me.a, null, s.a.createElement(Ii, null, s.a.createElement(yi, {
						disabled: c,
						name: "send-replies",
						onChange: e.onToggleSendReplies,
						value: e.sendReplies
					}, s.a.createElement(Pi, null, l.fbt._("Send me post reply notifications", null, {
						hk: "3kNmey"
					}))))), m && t && s.a.createElement(Me.a, null, s.a.createElement(Ii, null, s.a.createElement(yi, {
						disabled: c || i,
						name: "post-to-twitter",
						onChange: e.onTogglePostToTwitter,
						value: e.postToTwitter
					}, s.a.createElement(Pi, null, l.fbt._("Share this post on Twitter", null, {
						hk: "3SPI4V"
					}))))), m && !t && !i && s.a.createElement(Me.a, null, s.a.createElement(ki, {
						href: "/settings#connected-accounts",
						onClick: e.trackConnectAccountsClick
					}, l.fbt._("Connect accounts to share your post", null, {
						hk: "1nIuWp"
					})), s.a.createElement(_i, {
						text: l.fbt._("Connect a Twitter account in your User Settings. With a connected account you can choose to share new posts you make directly to Twitter.", null, {
							hk: "JRoQz"
						})
					}))), s.a.createElement(Ti, {
						className: e.className
					}, d && s.a.createElement(Di, null, s.a.createElement(Ii, null, s.a.createElement(yi, {
						name: "enable-public-link",
						onChange: e.onToggleDraftIsPublic,
						value: e.isPublicLink
					}, s.a.createElement(Pi, null, l.fbt._("Enable public draft link", null, {
						hk: "1SpDgT"
					})), s.a.createElement(_i, {
						text: l.fbt._("This option will create a link to a preview of this draft. Anyone with this link will be able to see this draft. You can disable this link at any time.", null, {
							hk: "1r77YF"
						})
					})))), d && u && s.a.createElement(Me.a, null, s.a.createElement(Ni, {
						disabled: !0,
						value: e.sharingLink
					}), s.a.createElement(wi, {
						onClick: e.onCopyLink
					}, l.fbt._("Copy link", null, {
						hk: "22rywZ"
					})))))
				})),
				Fi = n("./src/reddit/components/PostCreationForm/PostCreationFooter/index.m.less"),
				Ai = n.n(Fi);
			const Bi = Se.a.div("Container", Ai.a);
			var Ui = e => s.a.createElement(Bi, null, s.a.createElement(Li, {
					draftId: e.draftId
				})),
				Wi = n("./src/reddit/featureFlags/profileCollections.ts"),
				zi = n("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				Gi = n("./src/reddit/selectors/profile.ts"),
				Hi = n("./src/reddit/components/PostCreationForm/PostCreationHeader/index.m.less"),
				Vi = n.n(Hi);
			const Ki = Se.a.span("CountIndicator", Vi.a),
				qi = Se.a.wrapped(k.r, "LinkButton", Vi.a),
				Ji = qi,
				Zi = Object(a.c)({
					canPostAsModerator: V.e,
					collectionsCount: e => {
						const t = Object(V.h)(e);
						let n = t.id;
						if (t.isProfile && Object(Wi.a)(e)) {
							const o = Object(Gi.j)(e, {
								profileName: t.name
							});
							n = o && o.id
						}
						return n ? Object(x.u)(e, {
							subredditId: n
						}) : 0
					},
					destSubredditAboutInfo: V.g,
					draftsCount: te.l,
					isPending: V.bb,
					isOpenAIPilotV1: zi.f
				});
			var Qi = Object(r.b)(Zi, e => ({
					showDraftsList: () => {
						e(ie.p()), e(i.z(g.e))
					},
					showCollectionsList: () => {
						e(i.z(g.a))
					}
				}))(e => {
					const {
						canPostAsModerator: t,
						collectionsCount: n,
						destSubredditAboutInfo: r,
						draftsCount: a,
						isPending: i,
						showCollectionsList: c,
						showDraftsList: d,
						submissionType: u,
						submitMode: m,
						isOpenAIPilotV1: b
					} = e, f = Object(he.b)(), C = Object(o.useCallback)(() => {
						d(), f(Object(Q.k)(a))
					}, [d, f, a]), E = u === h.Wb.CROSSPOST, x = E ? l.fbt._("Create a crosspost", null, {
						hk: "1oNF7H"
					}) : l.fbt._("Create a post", null, {
						hk: "4u8qEy"
					}), _ = t && r && r.collectionsEnabled;
					return s.a.createElement("div", {
						className: Object(p.a)(Vi.a.CreatePostHeader, {
							[Vi.a.isSubredditRec]: b
						})
					}, s.a.createElement("div", {
						className: Vi.a.CreateLabel
					}, m === g.r.Draft ? l.fbt._("Edit draft", null, {
						hk: "oMgcW"
					}) : x), !E && s.a.createElement(s.a.Fragment, null, _ && s.a.createElement(Ji, {
						onClick: c
					}, l.fbt._("Collections", null, {
						hk: "2FVot0"
					}), s.a.createElement(Ki, null, n)), s.a.createElement(qi, {
						disabled: i,
						onClick: C
					}, l.fbt._("Drafts", null, {
						hk: "25z4rQ"
					}), s.a.createElement(Ki, null, a))))
				}),
				Yi = n("./src/reddit/actions/polls.ts"),
				Xi = n("./src/reddit/actions/postCreation/editorContent.ts"),
				$i = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				ec = n("./src/reddit/selectors/crypto/points.ts"),
				tc = n("./src/reddit/components/Governance/PollHelpText/index.m.less"),
				nc = n.n(tc);

			function oc(e) {
				var t;
				const {
					subreddit: n
				} = e, o = Object(r.e)(e => Object(ec.b)(e, n.id));
				if (!o) return null;
				const a = null === (t = o.polls) || void 0 === t ? void 0 : t.decisionThreshold;
				return s.a.createElement("div", {
					className: nc.a.pollHelpText
				}, a && s.a.createElement(s.a.Fragment, null, s.a.createElement($i.a, {
					className: nc.a.decisionThreholdAmount,
					amount: a,
					subredditId: n.id
				}), s.a.createElement("div", {
					className: nc.a.decisionThresholdTitle
				}, l.fbt._("Decision Threshold", null, {
					hk: "39nut8"
				}))), s.a.createElement("div", {
					className: nc.a.decisionThresholdExplanation
				}, l.fbt._("Governance Polls pass when one option reaches the Decision Threshold. The Decision Threshold is updated regularly based on the number of {tokenName} that voted in previous governance polls.", [l.fbt._param("tokenName", o.name)], {
					hk: "Di1tp"
				})))
			}
			var sc = n("./src/reddit/actions/governance/index.ts"),
				rc = n("./src/reddit/actions/tooltip.ts"),
				ac = n("./src/reddit/controls/Dropdown/index.tsx"),
				ic = n("./src/reddit/controls/Dropdown/Row.tsx"),
				cc = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				lc = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				dc = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				uc = n("./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx"),
				mc = n("./src/reddit/components/PollCreator/EndDatePicker/index.m.less"),
				pc = n.n(mc);

			function hc({
				poll: e
			}) {
				const t = Object(r.d)(),
					{
						endDate: n
					} = e,
					{
						date: o,
						time: a,
						timeZoneAbbr: i,
						onChange: c,
						maxDate: d,
						minDate: u,
						minTime: m
					} = Object(uc.a)(n, n => t(Object(Yi.b)({
						...e,
						endDate: n
					})));
				return s.a.createElement("div", {
					className: pc.a.dateTime
				}, s.a.createElement(lc.a, {
					"aria-label": l.fbt._("Prediction end date", null, {
						hk: "4zYv4T"
					}),
					onChange: e => c({
						date: e
					}),
					min: u,
					max: d,
					value: o,
					required: !0
				}), s.a.createElement(dc.a, {
					className: pc.a.timeInput,
					"aria-label": l.fbt._("Prediction end time", null, {
						hk: "1idFl4"
					}),
					onChange: e => c({
						time: e
					}),
					min: m,
					value: a,
					required: !0
				}), i && s.a.createElement("div", {
					className: pc.a.timeZone
				}, i))
			}
			var bc = n("./src/reddit/components/PollCreator/EndDatePicker/utils.ts");
			const fc = () => ({
					text: ""
				}),
				gc = () => ({
					duration: 3 * h.B,
					endDate: Object(bc.b)(),
					options: Array.from({
						length: 2
					}).map(fc)
				});
			var Cc = n("./src/reddit/constants/postLayout.ts"),
				Ec = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				xc = n("./src/reddit/components/Econ/Prediction/NewBadge/index.m.less"),
				_c = n.n(xc);
			const {
				fbt: vc
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Oc({
				className: e
			}) {
				return s.a.createElement("div", {
					className: Object(p.a)(_c.a.newBadge, e)
				}, vc._("New", null, {
					hk: "2N0EBb"
				}))
			}
			var yc = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				kc = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx"),
				jc = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Sc = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Tc = n("./src/reddit/controls/PillButton/index.m.less"),
				Pc = n.n(Tc);
			class Ic extends s.a.Component {
				constructor() {
					super(...arguments), this.handleMouseEnter = e => {
						const {
							onMouseEnter: t,
							tooltipSet: n
						} = this.props;
						t && t(e), n()
					}, this.handleMouseLeave = e => {
						const {
							onMouseLeave: t,
							tooltipUnset: n
						} = this.props;
						t && t(e), n()
					}
				}
				render() {
					const {
						backgroundClassName: e,
						children: t,
						className: n,
						colorTheme: o = "default",
						contentClassName: r,
						disabled: a,
						hoverText: i,
						icon: c,
						id: l,
						isActive: d,
						isDarkDayMode: u,
						isNightMode: m,
						layout: h,
						onBlur: b,
						onClick: f,
						onFocus: g,
						title: C,
						tooltipId: E
					} = this.props, x = c, _ = Object(p.a)({
						[Pc.a.classic]: h === Cc.g.Classic,
						[Pc.a.compact]: h === Cc.g.Compact,
						[Pc.a.activated]: d,
						[Pc.a.nightmode]: m,
						[Pc.a.dark]: u,
						[Pc.a.upvote]: "upvote" === o,
						[Pc.a.downvote]: "downvote" === o,
						[Pc.a.gold]: "gold" === o,
						[Pc.a.blue]: "blue" === o,
						[Pc.a.approve]: "approve" === o,
						[Pc.a.remove]: "remove" === o,
						[Pc.a.hasChildren]: !!t
					});
					if (this.props.href) {
						const {
							href: e,
							rel: o,
							target: a
						} = this.props;
						return s.a.createElement(jc.a, {
							"aria-label": C,
							"aria-pressed": d,
							className: Object(p.a)(n, _, Pc.a.PostActionButton),
							"data-click-id": this.props["data-click-id"],
							"data-test-id": this.props["data-test-id"],
							id: l,
							onBlur: b,
							onClick: f,
							onFocus: g,
							onMouseEnter: this.handleMouseEnter,
							onMouseLeave: this.handleMouseLeave,
							rel: o,
							target: a,
							to: e
						}, s.a.createElement("span", {
							className: Object(p.a)(r, _, Pc.a.buttonContent),
							id: E,
							tabIndex: -1
						}, s.a.createElement("div", {
							className: Pc.a.background
						}), i && E && s.a.createElement(Sc.c, {
							text: i,
							tooltipId: E
						}), x && s.a.createElement(x, null), s.a.createElement("span", {
							className: Pc.a.buttonChildren
						}, t)))
					}
					return s.a.createElement("button", {
						"aria-label": C,
						"aria-pressed": d,
						className: Object(p.a)(n, _, Pc.a.PostActionButton),
						"data-click-id": this.props["data-click-id"],
						"data-test-id": this.props["data-test-id"],
						disabled: a,
						id: l,
						onBlur: b,
						onClick: f,
						onFocus: g,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, s.a.createElement("span", {
						className: Object(p.a)(r, _, Pc.a.buttonContent),
						id: E,
						tabIndex: -1
					}, s.a.createElement("div", {
						className: Object(p.a)(Pc.a.background, e)
					}), i && E && s.a.createElement(Sc.c, {
						text: i,
						tooltipId: E
					}), x && s.a.createElement(x, null), s.a.createElement("span", {
						className: Pc.a.buttonChildren
					}, t)))
				}
			}
			var wc = Object(r.b)(void 0, (e, {
					tooltipId: t
				}) => ({
					tooltipSet: () => {
						t && e(Object(rc.g)({
							tooltipId: t
						}))
					},
					tooltipUnset: () => {
						t && e(Object(rc.j)({
							tooltipId: t
						}))
					}
				}))(Ic),
				Nc = n("./src/reddit/selectors/telemetry.ts");
			const Dc = e => ({
					...Object(Nc.o)(e),
					source: Pn.a,
					action: "view",
					noun: "predict_info_modal",
					subreddit: Object(Nc.jb)(e)
				}),
				Mc = e => ({
					...Object(Nc.o)(e),
					source: Pn.a,
					action: "close",
					noun: "predict_info_modal",
					subreddit: Object(Nc.jb)(e)
				}),
				Rc = e => ({
					...Object(Nc.o)(e),
					source: Pn.a,
					action: "click",
					noun: "predictions_how_it_works",
					subreddit: Object(Nc.jb)(e),
					actionInfo: {
						pageType: "predict_info_modal"
					}
				});
			var Lc = n("./src/reddit/hooks/useLocalStorage.ts"),
				Fc = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				Ac = n("./src/reddit/components/PollCreator/PollTypePicker/index.m.less"),
				Bc = n.n(Ac);

			function Uc() {
				return (Uc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function Wc({
				subredditId: e,
				tournamentsEnabled: t
			}) {
				Object(Ec.a)(e || "");
				const [n] = Object(Lc.a)(yc.a.creation, !1), {
					govType: a
				} = Object(r.e)(V.u), c = Object(r.e)(Fc.a), d = Object(r.d)(), u = Object(wn.a)(), m = Object(In.a)(), b = null == m ? void 0 : m.queryParams.type, f = {
					backgroundClassName: Bc.a.buttonBackground,
					colorTheme: "blue",
					className: Object(p.a)(Bc.a.button, Bc.a.pollTypePickerButton),
					contentClassName: Bc.a.buttonContent,
					disabled: c,
					isDarkDayMode: !1,
					isNightMode: !1,
					layout: Cc.g.Compact
				}, g = Object(o.useCallback)(() => {
					d(Object(i.l)({
						oldType: a,
						type: Le.a.Prediction
					})), u(Pn.q)
				}, [d, a, u]);
				return Object(o.useEffect)(() => {
					b === h.xb && g()
				}, [b, g]), s.a.createElement("div", {
					className: Bc.a.pollTypePicker
				}, s.a.createElement(wc, Uc({}, f, {
					isActive: a === Le.a.GA || !a,
					onClick: () => {
						d(Object(i.l)({
							oldType: a,
							type: Le.a.GA
						})), u(Pn.p)
					},
					title: l.fbt._("Poll", null, {
						hk: "2uKNlH"
					})
				}), l.fbt._("Poll", null, {
					hk: "1l7ZuP"
				})), s.a.createElement(wc, Uc({}, f, {
					isActive: a === Le.a.Prediction,
					onClick: g,
					title: l.fbt._("Prediction", null, {
						hk: "3wu0FO"
					})
				}), s.a.createElement("div", {
					className: Bc.a.predictionLabel
				}, l.fbt._("Prediction", null, {
					hk: "1CbFag"
				}), !n && a !== Le.a.Prediction && s.a.createElement(Oc, {
					className: Bc.a.newBadge
				}))), a === Le.a.Prediction && s.a.createElement("div", {
					className: Bc.a.education
				}, s.a.createElement(kc.a, {
					isTokens: t,
					onClose: () => u(Mc),
					onView: () => u(Dc),
					storageKey: yc.a.creation
				})))
			}
			var zc = n("./src/reddit/components/PollCreator/SortableOptions/index.m.less"),
				Gc = n.n(zc),
				Hc = n("./src/reddit/icons/svgs/Grapple/index.tsx");

			function Vc(e) {
				return s.a.createElement("div", {
					className: Object(p.a)(e.className, Gc.a.container),
					style: {
						left: e.isDropTarget ? 16 : 0,
						opacity: Kc(e),
						pointerEvents: e.isDisabled ? "none" : void 0
					}
				}, s.a.createElement(Hc.a, {
					className: Gc.a.grapple
				}), s.a.createElement("input", {
					className: Gc.a.input,
					maxLength: 120,
					placeholder: `${l.fbt._("option",null,{hk:"3IGnB"})} ${e.index+1}`,
					value: e.text,
					onBlur: e.onBlur,
					onChange: t => e.onTextChange(t.currentTarget.value),
					onFocus: e.onFocus
				}), e.removable && s.a.createElement(Mo.a, {
					className: Gc.a.trash,
					onClick: e.onRemove
				}))
			}

			function Kc(e) {
				return e.isDisabled ? .5 : e.isBeingDragged ? .25 : 1
			}
			const {
				fbt: qc
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Jc(e, t) {
				return `${t}-${e}`
			}
			const Zc = ({
				poll: e,
				onUpdatePoll: t,
				disabled: n,
				renderExtraControls: r
			}) => {
				const a = Object(wn.a)(),
					[i, c] = Object(o.useState)(!1),
					l = () => c(!1),
					d = () => c(!0),
					u = e => {
						i && (e.preventDefault(), e.stopPropagation())
					},
					m = n => o => {
						const s = e.options.indexOf(n);
						t({
							...e,
							options: e.options.slice(0, s).concat({
								text: o
							}).concat(e.options.slice(s + 1))
						})
					},
					p = n => () => {
						t({
							...e,
							options: e.options.filter(e => e !== n)
						})
					};
				Object(o.useEffect)(() => (document.addEventListener("dragstart", u), document.addEventListener("drop", u), document.addEventListener("dragover", u), () => {
					document.removeEventListener("dragstart", u), document.removeEventListener("drop", u), document.removeEventListener("dragover", u)
				}));
				const h = e.options.length >= 6 || n;
				return s.a.createElement("div", {
					className: Gc.a.options
				}, s.a.createElement(gr.a, {
					getReactKey: Jc,
					render: (e, t, o, r, a) => s.a.createElement(Vc, {
						index: t,
						isBeingDragged: o,
						isDisabled: n,
						isDropTarget: r && a,
						option: e,
						removable: t > 1,
						text: e.text,
						onBlur: l,
						onFocus: d,
						onTextChange: m(e),
						onRemove: p(e)
					}),
					values: e.options,
					onDrop: (n, o, s) => t({
						...e,
						options: s
					})
				}), s.a.createElement("div", {
					className: Gc.a.controls
				}, s.a.createElement(k.t, {
					className: Gc.a.addButton,
					disabled: h,
					onClick: () => void(e.options.length <= 6 && (a(Object(Q.z)()), t({
						...e,
						options: e.options.concat({
							text: ""
						})
					}))),
					priority: k.c.Plain
				}, qc._("Add Option", null, {
					hk: "hUP0k"
				})), r && r()))
			};
			var Qc = n("./src/reddit/actions/economics/predictions/constants.ts"),
				Yc = n("./src/reddit/components/PollCreator/TournamentPicker/index.m.less"),
				Xc = n.n(Yc);

			function $c({
				className: e,
				poll: t
			}) {
				const n = Object(In.a)(),
					{
						subredditName: o
					} = (null == n ? void 0 : n.urlParams) || {},
					a = Object(r.e)(e => Object(ee.D)(e, o)),
					i = Object(r.e)(e => Object(Nn.b)(e, {
						subredditId: a
					})) || {
						id: Qc.n,
						name: "Predictions Tournament"
					};
				return Object(Ec.a)(o), o ? s.a.createElement("div", {
					className: Object(p.a)(Xc.a.tournamentPicker, e)
				}, s.a.createElement("label", {
					className: Xc.a.title
				}, l.fbt._("Tournament", null, {
					hk: "1eyps5"
				})), s.a.createElement("input", {
					disabled: !0,
					className: Xc.a.input,
					readOnly: !0,
					type: "text",
					value: i.name || l.fbt._("New tournament", null, {
						hk: "1DwyZA"
					})
				})) : null
			}
			var el = n("./src/reddit/components/PollCreator/index.m.less"),
				tl = n.n(el);
			const nl = 7,
				ol = "poll-creation-voting-length";
			var sl;
			! function(e) {
				e.Options = "options", e.VotingLength = "votingLength"
			}(sl || (sl = {}));
			const rl = Object(en.a)(ac.a),
				al = Object(a.c)({
					tournamentsEnabled: (e, {
						subredditId: t
					}) => !!t && Object(ee.M)(e, {
						subredditId: t
					}),
					allowPolls: V.d,
					votingLengthDropdownIsOpen: e => e.tooltip.tooltipId === ol,
					isPredictionCreationTabEnabled: H.o
				});
			class il extends s.a.Component {
				constructor(e) {
					super(e), this.handleVotingLengthDropdownClick = () => {
						const {
							sendEvent: e,
							votingLengthDropdownIsOpen: t
						} = this.props;
						t || e(Object(Q.A)()), this.props.onToggleVotingLengthDropdown()
					}, this.handleChangeVotingLength = e => t => {
						this.props.onUpdatePoll({
							...e,
							duration: t
						}), this.props.onToggleVotingLengthDropdown()
					}
				}
				componentDidMount() {
					const {
						allowPolls: e,
						allowPredictions: t,
						setPollType: n
					} = this.props;
					!e && t && n(Le.a.Prediction)
				}
				sectionIsDisabled(e) {
					return this.props.disabledSections && this.props.disabledSections.includes(e)
				}
				render() {
					const {
						className: e,
						poll: t = gc(),
						pollType: n,
						tournamentsEnabled: o,
						allowPolls: r,
						allowPredictions: a,
						isPredictionCreationTabEnabled: i,
						subredditId: c
					} = this.props, d = !Object(Le.d)(t) && r && a && !i;
					return s.a.createElement("div", {
						"data-testid": "poll-creator"
					}, d && s.a.createElement(Wc, {
						tournamentsEnabled: o,
						subredditId: c
					}), s.a.createElement("div", {
						className: Object(p.a)(e, tl.a.container)
					}, s.a.createElement(Zc, {
						poll: t,
						disabled: Boolean(this.sectionIsDisabled(sl.Options)),
						onUpdatePoll: this.props.onUpdatePoll,
						renderExtraControls: () => this.renderControls(t)
					}), this.props.hintTextComponent && s.a.createElement("div", {
						className: tl.a.help
					}, this.props.hintTextComponent)), n === Le.a.Prediction && !i && s.a.createElement("div", {
						className: tl.a.predictionSettings
					}, s.a.createElement("div", {
						className: tl.a.endDatePicker
					}, s.a.createElement("label", {
						className: tl.a.title
					}, l.fbt._("Prediction end date", null, {
						hk: "14kuoi"
					})), s.a.createElement(hc, {
						poll: t
					})), o && s.a.createElement($c, {
						poll: t
					})))
				}
				renderControls(e) {
					const t = this.sectionIsDisabled(sl.VotingLength),
						n = Math.floor(e.duration / h.B);
					return this.props.pollType === Le.a.Prediction ? null : s.a.createElement("div", {
						className: Object(p.a)(tl.a.votingLengthSelector, {
							[tl.a.votingLengthSelector__disabled]: !!t
						})
					}, s.a.createElement("div", {
						className: tl.a.votingLengthTitleText
					}, l.fbt._("Voting length:", null, {
						hk: "4pPVUg"
					})), s.a.createElement("div", {
						className: tl.a.votingLengthDropdownContainer,
						id: ol
					}, s.a.createElement("div", {
						className: tl.a.votingLengthDisplay,
						onClick: this.handleVotingLengthDropdownClick
					}, s.a.createElement("div", null, l.fbt._({
						"*": "{numDays} days",
						_1: "{numDays} day"
					}, [l.fbt._param("numDays", String(n)), l.fbt._plural(n)], {
						hk: "2HsFBA"
					})), s.a.createElement(cc.a, {
						className: tl.a.votingLengthCaret
					})), this.renderVotingLengthDropdown(e)))
				}
				renderVotingLengthDropdown(e) {
					const {
						votingLengthDropdownIsOpen: t
					} = this.props, n = this.handleChangeVotingLength(e);
					return s.a.createElement(rl, {
						className: tl.a.votingLengthDropdown,
						tooltipId: ol,
						isOpen: t
					}, Array.from({
						length: nl
					}).map((t, o) => {
						const r = o + 1;
						return s.a.createElement(ic.b, {
							"data-redditstyle": !0,
							key: o,
							index: o,
							displayText: l.fbt._({
								"*": "{number} days",
								_1: "1 day"
							}, [l.fbt._plural(r, "number")], {
								hk: "bXXYo"
							}),
							isSelected: Math.floor(e.duration / h.B) === r,
							onClick: () => n(r * h.B)
						})
					}))
				}
			}
			var cl = Object(r.b)(al, (e, t) => ({
					onToggleVotingLengthDropdown: () => e(Object(rc.h)({
						tooltipId: ol
					})),
					fetchIsPredictionCreationAllowed: async () => e(Object(Tn.h)(t.subredditId)),
					setPollType: n => e(Object(i.l)({
						oldType: t.pollType || null,
						type: n
					}))
				}))(Object(he.c)(il)),
				ll = n("./src/reddit/components/Governance/ProposalTemplates/Generic/index.m.less"),
				dl = n.n(ll);
			const ul = [{
				text: "Yes"
			}, {
				text: "No"
			}];

			function ml(e) {
				const t = {
					duration: e.poll ? e.poll.duration : h.B,
					options: e.options || ul
				};
				return s.a.createElement("div", {
					className: Object(p.a)(dl.a.container, e.className)
				}, s.a.createElement("div", {
					className: dl.a.topline
				}, e.children.map(e => "string" == typeof e ? s.a.createElement("div", {
					className: dl.a.text
				}, e) : e)), s.a.createElement(cl, {
					disabledSections: [sl.Options],
					hintTextComponent: s.a.createElement("div", {
						className: dl.a.hintText
					}, s.a.createElement(oc, {
						subreddit: e.subreddit
					})),
					poll: t,
					onUpdatePoll: e.onUpdatePoll
				}))
			}
			var pl = n("./src/reddit/controls/FormFields/index.tsx"),
				hl = n("./src/reddit/components/Governance/ProposalTemplates/Spinoff/index.m.less"),
				bl = n.n(hl);
			const fl = 3,
				gl = 20,
				Cl = /[^(\w|_)]/g;
			const El = Object(a.c)({
				newSubredditName: e => e.creations.formData.newSubreddit
			});
			var xl = Object(r.b)(El, e => ({
					onSubredditNameChange: t => e(Object(sc.a)({
						subredditName: t
					}))
				}))((function(e) {
					return s.a.createElement(ml, {
						className: e.className,
						options: Le.f[Le.a.Spinoff](e.newSubredditName),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, l.fbt._("Should we spin-off to", null, {
						hk: "3oKiyE"
					}), s.a.createElement(pl.c, {
						redditStyle: !0,
						className: bl.a.input,
						label: l.fbt._("subreddit name", null, {
							hk: "1qzJqB"
						}),
						max: gl,
						min: fl,
						type: "text",
						value: e.newSubredditName,
						onChange: t => {
							const n = t.currentTarget.value.replace(Cl, "");
							e.onSubredditNameChange(n)
						}
					}), l.fbt._("?", null, {
						hk: "1b1vhH"
					}))
				})),
				_l = n("./src/reddit/components/Governance/ProposalTemplates/TopModReplacement/index.m.less"),
				vl = n.n(_l);
			const Ol = 20;
			const yl = Object(a.c)({
				topMod: e => e.creations.formData.newTopMod
			});
			var kl = Object(r.b)(yl, e => ({
					onUsernameChange: t => e(Object(sc.b)({
						username: t
					}))
				}))((function(e) {
					return s.a.createElement(ml, {
						className: e.className,
						options: Le.f[Le.a.ReplaceTopMod](),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, l.fbt._("Should", null, {
						hk: "22RF0A"
					}), s.a.createElement(pl.c, {
						redditStyle: !0,
						className: vl.a.input,
						label: l.fbt._("username", null, {
							hk: "1Fk03V"
						}),
						max: Ol,
						type: "text",
						value: e.topMod,
						onChange: t => e.onUsernameChange(t.currentTarget.value)
					}), l.fbt._("become the top moderator?", null, {
						hk: "4COtce"
					}))
				})),
				jl = n("./src/reddit/icons/svgs/Info/index.tsx"),
				Sl = n("./src/reddit/components/PollCreator/DefaultHintText/index.m.less"),
				Tl = n.n(Sl);
			const Pl = e => [() => l.fbt._("Suggest short clear options", null, {
				hk: "4bpIfe"
			}), () => l.fbt._("The more options, the better", null, {
				hk: "37GJUq"
			}), () => e ? l.fbt._("Choose the prediction duration", null, {
				hk: "16Yw7y"
			}) : l.fbt._("Choose the poll duration", null, {
				hk: "19Gh6D"
			}), () => l.fbt._("Options can't be edited after post creation", null, {
				hk: "3iRICg"
			})];

			function Il(e) {
				const {
					isPrediction: t
				} = e;
				return s.a.createElement(o.Fragment, null, s.a.createElement("div", {
					className: Tl.a.helpTitle
				}, s.a.createElement(jl.a, {
					className: Tl.a.infoIcon
				}), s.a.createElement("div", {
					className: Tl.a.helpTitleText
				}, t ? l.fbt._("Tips on Better Predictions", null, {
					hk: "3kIzkr"
				}) : l.fbt._("Tips on Better Polls", null, {
					hk: "2QMuX9"
				}))), s.a.createElement("ol", {
					className: Tl.a.helpTextList
				}, Pl(!!t).map(e => s.a.createElement("li", {
					className: Tl.a.helpTextItem,
					key: e()
				}, e()))))
			}
			var wl = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				Nl = n("./src/reddit/components/RichTextEditor/index.tsx"),
				Dl = n("./src/reddit/featureFlags/component.tsx"),
				Ml = n("./src/reddit/helpers/richTextEditor/index.ts"),
				Rl = n("./src/reddit/models/PostRequirements/index.ts"),
				Ll = n("./src/reddit/components/ContentTooltip/index.tsx"),
				Fl = n("./src/reddit/components/PostCreationForm/PredictionEditor/TooltipHeader/index.m.less"),
				Al = n.n(Fl);
			const {
				fbt: Bl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ul = {
				top: _t.a.alienblue,
				bottom: _t.a.alienblue
			}, Wl = ({
				tooltipId: e,
				tooltipContent: t,
				className: n,
				isDisabled: a,
				children: i
			}) => {
				const [c, l] = Object(o.useState)(!1), d = Object(r.d)(), u = Object(wn.a)(), m = Object(De.b)("help"), h = () => {
					l(!c), d(Object(rc.h)({
						tooltipId: e
					}))
				};
				return s.a.createElement("div", {
					className: Object(p.a)(Al.a.wrapper, n, {
						[Al.a.isDisabled]: a
					})
				}, s.a.createElement("h3", {
					className: Al.a.sectionLabel
				}, i), s.a.createElement("span", {
					id: e,
					onMouseEnter: () => {
						u((e => t => ({
							...Object(Nc.o)(t),
							source: Pn.a,
							action: "view",
							noun: "info_tooltip",
							subreddit: Object(Nc.jb)(t),
							actionInfo: {
								...Object(Nc.d)(t),
								reason: e
							}
						}))(e)), h()
					},
					onMouseLeave: h
				}, s.a.createElement(m, {
					className: Object(p.a)(Al.a.helpIcon, {
						[Al.a.activeHelpIcon]: c
					})
				}), s.a.createElement(Ll.a, {
					tooltipId: e,
					defaultTooltipPosition: "top",
					caretColor: Ul
				}, s.a.createElement("div", {
					className: Al.a.content
				}, t))))
			}, {
				fbt: zl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Gl = () => {
				const e = Object(r.d)(),
					t = Object(Z.fb)(),
					n = Object(r.e)(e => Object(Z.r)(e, {
						pageLayer: t
					})),
					a = Object(r.e)(V.s),
					c = Object(r.e)(V.t) || gc();
				return Object(Ec.a)((null == n ? void 0 : n.id) || ""), Object(o.useEffect)(() => {
					e(Object(i.l)({
						oldType: a || null,
						type: Le.a.Prediction
					}))
				}, [e, a]), n ? s.a.createElement(s.a.Fragment, null, s.a.createElement(Wl, {
					tooltipId: "option",
					tooltipContent: zl._("Provide up to 6 answers that redditors can choose from as their prediction. If your question could have more than 6 answers, try providing the top five with a sixth option like “none of these.”", null, {
						hk: "h7WeS"
					})
				}, zl._("Options", null, {
					hk: "2unvji"
				})), s.a.createElement(Zc, {
					poll: c,
					onUpdatePoll: t => e(Object(Yi.b)(t))
				}), s.a.createElement(Wl, {
					tooltipId: "prediction_end_date",
					tooltipContent: zl._("The time when redditors can no longer make predictions. After this time you can select the correct answer to resolve the question and then manually end the tournament when all questions are answered.", null, {
						hk: "Z5iQv"
					})
				}, zl._("Prediction End Date", null, {
					hk: "1r06y3"
				})), s.a.createElement(hc, {
					poll: c
				})) : null
			};
			var Hl = n("./src/reddit/featureFlags/index.ts"),
				Vl = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				Kl = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				ql = n("./src/reddit/components/PostCreationForm/PostEditor/GovTypeSelector/index.m.less"),
				Jl = n.n(ql);
			const Zl = Object(en.a)(ac.a),
				Ql = [{
					Icon: Kl.a,
					showNewTag: !0,
					text: () => l.fbt._("general", null, {
						hk: "2zk1er"
					}),
					type: null
				}, {
					Icon: Vl.a,
					showNewTag: !1,
					text: () => l.fbt._("governance", null, {
						hk: "1wlLfQ"
					}),
					type: Le.a.GovGeneric
				}, {
					Icon: Vl.a,
					showNewTag: !1,
					text: () => l.fbt._("spin-off a new community", null, {
						hk: "jNK0c"
					}),
					type: Le.a.Spinoff
				}],
				Yl = "gov-type-selector-dropdown";
			const Xl = Object(a.c)({
				dropdownIsOpen: e => e.tooltip.tooltipId === Yl,
				govType: e => e.creations.formData.govType,
				spinoffEnabled: Hl.d.spSpinoffs
			});
			var $l = Object(r.b)(Xl, e => ({
					onChangeGovType: (t, n) => {
						e(Object(i.l)({
							oldType: n,
							type: t
						})), e(Object(rc.i)())
					},
					onToggleDropdown: () => e(Object(rc.h)({
						tooltipId: Yl
					}))
				}))((function(e) {
					const t = function(e, t) {
							return Ql.filter(({
								type: e
							}) => !(!t.spinoffEnabled && e === Le.a.Spinoff))
						}(0, e),
						n = t.find(t => t.type === e.govType) || t[0];
					return s.a.createElement("div", {
						className: Object(p.a)(Jl.a.container, e.className)
					}, s.a.createElement("div", {
						className: Jl.a.currentSelection,
						id: Yl,
						onClick: e.onToggleDropdown
					}, s.a.createElement(n.Icon, {
						className: Jl.a.pollTypeIcon
					}), s.a.createElement("div", {
						className: Jl.a.text
					}, n.text()), s.a.createElement(cc.a, {
						className: Jl.a.dropdownIcon
					}), n.showNewTag && s.a.createElement("div", {
						className: Jl.a.newLabel
					}, l.fbt._("new", null, {
						hk: "4iv34v"
					}))), s.a.createElement(Zl, {
						className: Jl.a.dropdown,
						tooltipId: Yl,
						isOpen: e.dropdownIsOpen
					}, t.map((t, o) => s.a.createElement(ic.b, {
						"data-redditstyle": !0,
						displayText: t.text(),
						isSelected: t.type === n.type,
						key: o,
						onClick: () => e.onChangeGovType(t.type, e.govType)
					}))))
				})),
				ed = n("./src/reddit/components/PostCreationForm/PostEditor/index.m.less"),
				td = n.n(ed);

			function nd() {
				return (nd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const od = Object(Dl.a)("spGovPolls", $l),
				sd = (e, t) => !e && t && t.bodyRestrictionPolicy === Rl.a.Required,
				rd = Object(a.c)({
					canPostAsModerator: V.e,
					destSubreddit: V.h,
					draft: $.d,
					editorMode: V.n,
					govType: e => e.creations.formData.govType,
					markdownBody: V.V,
					pending: V.bb,
					poll: e => e.creations.formData.polls || void 0,
					postCreationFieldErrors: Mt,
					postRequirements: V.pb,
					rteState: V.gb,
					shouldAllowBodyText: V.ib,
					subreddit: Z.r,
					isPredictionCreationTabEnabled: H.o
				}),
				ad = Object(r.b)(rd, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(dt(h.wb.BODY, o)))
					},
					onFocus: () => e((e, t) => Q.s(t(), g.l.CLICK, g.m.BODY)),
					onRTEStateChange: (n, o) => {
						e(i.e({
							rteState: n,
							isContentChanged: o
						})), t()
					},
					onToggleEditorMode: (t, n) => e(Xi.d(g.h.POST_CREATION, t, n)),
					onTrackToolbarClick: (t, n) => e((e, o) => Q.M(o(), t, n)),
					onUpdatePoll: t => e(Object(Yi.b)(t)),
					setSubmissionType: t => e(i.g({
						submissionType: t
					}))
				}));
			class id extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {}, this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onToggleEditorMode = async (e, t) => {
						await this.props.onToggleEditorMode(e, t), e === g.i.RICH_TEXT ? this.rteRef && this.rteRef.focus() : this.markdownEditorRef && this.markdownEditorRef.focus()
					}, this.setRteRef = e => this.rteRef = e, this.setMarkdownEditorRef = e => this.markdownEditorRef = e
				}
				componentDidMount() {
					const {
						isPredictionCreationTabEnabled: e,
						pageLayer: t,
						setSubmissionType: n
					} = this.props;
					e && (null == t ? void 0 : t.queryParams.type) === h.xb && n(h.Wb.PREDICTION)
				}
				renderEditor() {
					const {
						canPostAsModerator: e,
						destSubreddit: t,
						editorMode: n,
						markdownBody: o,
						pending: r,
						postCreationFieldErrors: a,
						postRequirements: i,
						rteState: c,
						submissionType: d,
						subreddit: u
					} = this.props, m = d === h.Wb.POLL, b = a[h.wb.BODY].length > 0, f = !!u && u.isNSFW, C = sd(e, i) ? l.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : l.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), E = f;
					return n === g.i.RICH_TEXT ? s.a.createElement(Nl.a, {
						allowMediaUploads: !E,
						focusableContentRTEClassName: Object(p.a)(td.a.focusableContent, {
							[td.a.mHasError]: b,
							[td.a.mPollBorder]: !!m
						}),
						destSubreddit: t,
						editorType: Ml.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: c,
						onBlur: this.props.onBlur,
						onChange: this.props.onRTEStateChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						onSubmit: this.props.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: C,
						readOnly: r,
						rteRef: this.setRteRef,
						trackToolbarClick: this.props.onTrackToolbarClick
					}) : s.a.createElement(wl.a, {
						focusableContentMarkdownClassName: Object(p.a)(td.a.focusableContent, {
							[td.a.mHasError]: b,
							[td.a.mPollBorder]: !!m
						}),
						initialHeight: this.state.editorHeight,
						instanceRef: this.setMarkdownEditorRef,
						onBlur: this.props.onBlur,
						onChange: this.props.onChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						value: o,
						onSubmit: this.props.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: C
					})
				}
				render() {
					const {
						postCreationFieldErrors: e,
						shouldAllowBodyText: t,
						submissionType: n,
						subreddit: o
					} = this.props;
					return s.a.createElement("div", null, t && this.renderEditor(), t && n === h.Wb.POLL && s.a.createElement("div", {
						className: td.a.pollCreator
					}, s.a.createElement(od, {
						className: td.a.govToggle
					}), this.govType()), n === h.Wb.PREDICTION && s.a.createElement(Gl, null), s.a.createElement(we.a, {
						errorModalTitle: o ? Object(_o.c)(o.name) : void 0,
						messages: e[h.wb.BODY]
					}))
				}
				govType() {
					var e;
					const {
						govType: t,
						poll: n,
						subreddit: o
					} = this.props, r = {
						onUpdatePoll: this.props.onUpdatePoll,
						poll: n
					}, a = {
						...r,
						pollType: t
					}, i = {
						...a,
						allowPredictions: this.props.isPredictionCreationAllowed,
						subredditId: null === (e = this.props.subreddit) || void 0 === e ? void 0 : e.id
					};
					switch (t) {
						case Le.a.ReplaceTopMod:
							return o ? s.a.createElement(kl, nd({}, r, {
								subreddit: o
							})) : s.a.createElement(cl, nd({}, a, {
								hintTextComponent: s.a.createElement(Il, null)
							}));
						case Le.a.GovGeneric:
							return s.a.createElement(cl, nd({}, a, {
								hintTextComponent: o ? s.a.createElement(oc, {
									subreddit: o
								}) : s.a.createElement(Il, null)
							}));
						case Le.a.Spinoff:
							return o ? s.a.createElement(xl, nd({}, r, {
								subreddit: o
							})) : s.a.createElement(cl, nd({}, a, {
								hintTextComponent: s.a.createElement(Il, null)
							}));
						case Le.a.Prediction:
							return s.a.createElement(cl, nd({}, i, {
								hintTextComponent: s.a.createElement(Il, {
									isPrediction: !0
								})
							}));
						case Le.a.GA:
						case null:
							return s.a.createElement(cl, nd({}, i, {
								hintTextComponent: s.a.createElement(Il, null)
							}))
					}
				}
			}
			var cd = Object(Z.u)({
					draftId: Z.v,
					pageLayer: e => e
				})(ad(id)),
				ld = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				dd = n("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				ud = n("./src/reddit/components/PostCreationForm/PredictionEditor/TokenPicker/index.m.less"),
				md = n.n(ud);
			const pd = ({
				subredditId: e,
				value: t,
				onChange: n
			}) => {
				const [o, a] = s.a.useState(), i = s.a.useRef(null), c = Object(r.e)(t => Object(Nn.f)(t, {
					subredditId: e
				}));
				return s.a.createElement("div", {
					className: md.a.container
				}, s.a.createElement("input", {
					ref: i,
					style: {
						display: "none"
					},
					onChange: async e => {
						const t = e.currentTarget.files;
						(null == t ? void 0 : t.length) && (a(t[0]), n(t[0]))
					},
					type: "file",
					accept: "image/png,image/jpeg"
				}), o ? s.a.createElement("div", {
					className: md.a.customTokenContainer
				}, s.a.createElement("button", {
					className: Object(p.a)(md.a.tokenButton, {
						[md.a.selected]: t === o
					}),
					onClick: () => n(o),
					title: l.fbt._("Set Custom Token", null, {
						hk: "1wFp57"
					})
				}, s.a.createElement("img", {
					className: md.a.tokenIcon,
					alt: l.fbt._("Custom Token", null, {
						hk: "3M8nxA"
					}),
					src: URL.createObjectURL(o)
				})), s.a.createElement("button", {
					className: md.a.clearTokenButton,
					onClick: () => {
						t === o && n(null), a(void 0), i.current.value = ""
					}
				}, s.a.createElement(No.a, {
					className: md.a.clearTokenIcon
				}))) : s.a.createElement("button", {
					className: md.a.tokenButton,
					onClick: () => {
						var e;
						return null === (e = i.current) || void 0 === e ? void 0 : e.click()
					},
					title: l.fbt._("Add Custom Token", null, {
						hk: "3vDASa"
					})
				}, s.a.createElement(dd.a, {
					className: Object(p.a)(md.a.tokenIcon, md.a.addTokenIcon)
				})), (null == c ? void 0 : c.tokenIconUrl) && s.a.createElement("button", {
					className: Object(p.a)(md.a.tokenButton, {
						[md.a.selected]: t === c.tokenIconUrl
					}),
					onClick: () => n(c.tokenIconUrl),
					title: l.fbt._("Previous Tournament Token", null, {
						hk: "3mEGE9"
					})
				}, s.a.createElement("img", {
					className: md.a.tokenIcon,
					alt: l.fbt._("Previous Tournament Token", null, {
						hk: "19mBuu"
					}),
					src: c.tokenIconUrl
				})), s.a.createElement("button", {
					className: Object(p.a)(md.a.tokenButton, {
						[md.a.selected]: null === t
					}),
					onClick: () => n(null),
					title: l.fbt._("Default Token", null, {
						hk: "2Qsr4e"
					})
				}, s.a.createElement(ld.a, {
					className: md.a.tokenIcon
				})))
			};
			var hd = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				bd = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				fd = n("./src/reddit/components/PostCreationForm/PredictionEditor/TournamentCreation/TournamentBanner/index.m.less"),
				gd = n.n(fd);
			const Cd = ({
				tournament: e
			}) => s.a.createElement("div", {
				className: gd.a.container,
				style: {
					backgroundImage: hd.a[e.theme] || hd.a.theme_1
				}
			}, s.a.createElement("div", {
				className: gd.a.label
			}, s.a.createElement(bd.a, {
				className: gd.a.icon,
				tournamentId: e.tournamentId
			}), l.fbt._("Current Tournament", null, {
				hk: "jBKr3"
			})), s.a.createElement("h3", {
				className: gd.a.tournamentName
			}, e.name));
			var Ed = n("./src/reddit/constants/modals.ts"),
				xd = n("./src/reddit/components/PostCreationForm/PredictionEditor/CharacterLimitedInput/index.m.less"),
				_d = n.n(xd);
			const vd = ({
				isDisabled: e,
				name: t,
				onChange: n
			}) => {
				const o = Object(r.e)(X.e),
					a = (null == o ? void 0 : o.displayText) ? `${o.displayText} Predictions Tournament` : "Predictions Tournament";
				return s.a.createElement("div", {
					className: _d.a.wrapper
				}, s.a.createElement("input", {
					"aria-label": l.fbt._("tournament-name-input", null, {
						hk: "3n3HoG"
					}),
					name: "tournament-name",
					className: _d.a.limitedInput,
					disabled: e,
					type: "text",
					value: t,
					onChange: e => {
						const {
							value: t
						} = e.target;
						t.length <= 90 && n(t)
					},
					placeholder: l.fbt._("e.g. {Sample tournament name prefixed with subreddit display text}", [l.fbt._param("Sample tournament name prefixed with subreddit display text", a)], {
						hk: "1Mu4q8"
					})
				}), !e && s.a.createElement("div", {
					className: _d.a.charLimit
				}, t.length, "/", 90))
			};
			var Od = n("./src/reddit/components/PostCreationForm/PredictionEditor/ThemePicker/index.m.less"),
				yd = n.n(Od);
			const kd = ["#493AC1", "#00756F", "#99941A", "#DC8F1A", "#ED622C", "#EB7A7A", "#61676A", "#303030"],
				jd = ({
					theme: e = kd[0],
					isDisabled: t,
					onChange: n
				}) => {
					const o = Object(wn.a)(),
						r = e => {
							o((e => t => ({
								...Object(Nc.o)(t),
								source: Pn.a,
								action: "click",
								noun: "theme_selection",
								subreddit: Object(Nc.jb)(t),
								predictions: {
									tournamentThemeId: e
								}
							}))(e)), n(e)
						};
					return s.a.createElement("div", {
						className: yd.a.wrapper
					}, kd.map((n, o) => {
						const a = `theme_${o+1}`;
						return s.a.createElement(k.t, {
							key: a,
							className: yd.a.colorTile,
							style: {
								background: n
							},
							Icon: a === e ? Object(De.b)("checkmark_fill") : void 0,
							onClick: () => r(a),
							priority: k.c.Plain,
							disabled: t
						})
					}))
				};
			var Sd = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx"),
				Td = n("./src/reddit/hooks/useModalState.ts"),
				Pd = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/Content.tsx"),
				Id = n("./src/reddit/components/PostCreationForm/PredictionEditor/TournamentCreation/index.m.less"),
				wd = n.n(Id);

			function Nd() {
				return (Nd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Dd = [{
					title: l.fbt._("Create questions", null, {
						hk: "hokTI"
					}),
					description: l.fbt._("Start a Predictions Tournament by creating questions, giving it a name, and selecting a theme. Try to create questions at least 2-3 days ahead of their end date. You can always add more later!", null, {
						hk: "1oN9ta"
					})
				}, {
					title: l.fbt._("Redditors make predictions", null, {
						hk: "USPzW"
					}),
					description: l.fbt._("Redditors predict using free tokens. They win bigger rewards by using more tokens when they’re confident with their predictions. More questions = more chances to predict.", null, {
						hk: "1hfMP9"
					})
				}, {
					title: l.fbt._("Resolve questions and announce winners", null, {
						hk: "4CZw7"
					}),
					description: l.fbt._("You resolve predictions by selecting the correct answer once it ends. When all questions are resolved, you can end the Tournament and Top Predictors will be announced!", null, {
						hk: "4fsynq"
					})
				}],
				Md = Object(wo.a)(({
					onClose: e
				}) => s.a.createElement("div", {
					className: wd.a.modalWrapper
				}, s.a.createElement(k.t, {
					"aria-label": l.fbt._("Close", null, {
						hk: "2xO1CF"
					}),
					className: wd.a.closeButton,
					Icon: Object(De.b)("close"),
					onClick: e,
					priority: k.c.Plain
				}), s.a.createElement(Pd.a, {
					steps: Dd,
					withModalStyles: !0
				}))),
				Rd = e => s.a.createElement(Md, Nd({
					className: wd.a.modal,
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e)),
				Ld = () => {
					const [e, t, n] = Object(Td.a)(!1), o = Object(wn.a)();
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(Sd.a, {
						onClose: () => o(Mc),
						onView: () => o(Dc),
						title: l.fbt._("Predictions", null, {
							hk: "4pJFGW"
						}),
						newBadge: !0,
						message: s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
							className: wd.a.learnMoreText
						}, l.fbt._("A prediction tournament is a series of questions where redditors can win free tokens by predicting the future. Start a Tournament, add questions at any time and when you end the tournament winners are announced!", null, {
							hk: "10ymoN"
						})), s.a.createElement("button", {
							className: wd.a.learnMoreLink,
							onClick: () => {
								o(Rc), t()
							}
						}, l.fbt._("Learn more about prediction tournaments", null, {
							hk: "1chKID"
						}))),
						storageKey: yc.a.feature,
						isFullWidth: !0
					}), e && s.a.createElement(Rd, {
						onClose: n
					}))
				},
				Fd = ({
					isApprovedUser: e,
					subredditId: t
				}) => {
					const n = Object(r.d)(),
						a = Object(r.e)(H.p),
						c = Object(r.e)(e => Object(Nn.b)(e, {
							subredditId: t
						})),
						d = Object(r.e)(e => !!t && Object(Nn.k)(e, {
							subredditId: t
						})),
						u = Object(r.e)(e => Object(Nn.i)(e, {
							subredditId: t
						})),
						m = Object(r.e)(e => Object(Nn.h)(e, {
							subredditId: t
						})),
						p = Object(r.e)(V.sb);
					Object(o.useEffect)(() => {
						!d && u && !c && e && n(Object(un.h)(Ed.a.ECON_PREDICTIONS_START_TOURNAMENT_LIMIT))
					}, [n, c, u, e, d]), Object(o.useEffect)(() => {
						!1 === (null == c ? void 0 : c.isActive) && m && n(Object(un.h)(Ed.a.ECON_PREDICTIONS_INACTIVITY_MODAL))
					}, [n, c, m]);
					const h = !c;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(Ld, null), h ? s.a.createElement(s.a.Fragment, null, s.a.createElement(Wl, {
						className: wd.a.firstHeader,
						tooltipId: "tournament_name",
						tooltipContent: l.fbt._("The name of the tournament shown to your community. Questions in this tournament will be grouped together in one post, and you can change the name later in mod tools.", null, {
							hk: "11na95"
						}),
						isDisabled: !h
					}, l.fbt._("Tournament Name", null, {
						hk: "4HBhy"
					})), s.a.createElement(vd, {
						name: p.name,
						onChange: e => {
							n(Object(i.D)({
								name: e
							}))
						},
						isDisabled: !h
					}), s.a.createElement(Wl, {
						tooltipId: "tournament_theme",
						tooltipContent: l.fbt._("The main color used to style the tournament.", null, {
							hk: "2QKzZn"
						}),
						isDisabled: !h
					}, l.fbt._("Tournament Theme", null, {
						hk: "4nMPA"
					})), s.a.createElement(jd, {
						theme: p.theme,
						onChange: e => {
							n(Object(i.D)({
								theme: e
							}))
						},
						isDisabled: !h
					}), a && s.a.createElement(s.a.Fragment, null, s.a.createElement(Wl, {
						tooltipId: "tournament_token",
						tooltipContent: l.fbt._("The image to be used for the Tournament token shown to users. Remember, tokens are free, but are a fun way to allow users to predict and get ranked when they win.", null, {
							hk: "2rxVIk"
						}),
						isDisabled: !h
					}, l.fbt._("Tournament Token", null, {
						hk: "eLf9P"
					})), s.a.createElement(pd, {
						subredditId: t,
						value: p.token,
						onChange: e => {
							n(Object(i.D)({
								token: e
							}))
						}
					}))) : s.a.createElement(Cd, {
						tournament: c
					}), s.a.createElement(Wl, {
						tooltipId: "prediction_question",
						tooltipContent: l.fbt._("This should be a question about a future event that can only be answered after the event has passed. You can add more questions later.", null, {
							hk: "1kli3v"
						})
					}, l.fbt._("Prediction Question", null, {
						hk: "1MRcq1"
					})))
				};
			var Ad = n("./src/reddit/components/PostCreationForm/PostTitle/index.m.less"),
				Bd = n.n(Ad);
			const Ud = Object(a.c)({
					canPostAsModerator: V.e,
					disableTitleEdits: e => e.creations.formData.govType === Le.a.ReplaceTopMod || e.creations.formData.govType === Le.a.Spinoff,
					pending: V.bb,
					postCreationFieldErrors: Mt,
					postRequirements: V.pb,
					shouldAllowBodyText: V.ib,
					submissionType: V.a,
					subreddit: Z.r,
					title: V.rb,
					isPredictionsCreationTabEnabled: H.o
				}),
				Wd = Object(r.b)(Ud, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(dt(h.wb.TITLE, o)))
					},
					onChange: n => {
						e(i.h(n)), t(n)
					},
					onInputFocus: () => e((e, t) => Q.s(t(), g.l.CLICK, g.m.TITLE))
				}));
			var zd = Object(Z.u)()(Wd(e => {
					const {
						canPostAsModerator: t,
						isApprovedUser: n,
						isPredictionsCreationTabEnabled: o,
						postRequirements: r,
						postCreationFieldErrors: a,
						subreddit: i
					} = e, c = e.submissionType === h.Wb.POST && !e.shouldAllowBodyText, d = a[h.wb.TITLE].length > 0, u = t ? Pt.f : r && r.titleTextMaxLength || Pt.f, m = e.submissionType === h.Wb.PREDICTION && o, b = m ? l.fbt._("e.g. Who will win best actress at the Oscars this year?", null, {
						hk: "YLQFW"
					}) : l.fbt._("Title", null, {
						hk: "j3s6r"
					});
					return s.a.createElement("div", {
						className: Bd.a.container
					}, m && s.a.createElement(Fd, {
						isApprovedUser: n,
						subredditId: (null == i ? void 0 : i.id) || ""
					}), s.a.createElement("div", {
						className: Bd.a.inputWrapper
					}, s.a.createElement(nr, {
						className: Object(p.a)(Bd.a.PostTitleInput, {
							[Bd.a.mHasError]: d
						}),
						disabled: e.disableTitleEdits,
						maxLength: u,
						minHeight: c ? 92 : void 0,
						onBlur: e.onBlur,
						onFocus: e.onInputFocus,
						onKeyDown: e.onKeyDown,
						onValueChange: e.onChange,
						placeholder: b,
						readOnly: e.pending,
						value: e.title
					}), s.a.createElement("div", {
						className: Bd.a.charsCounter
					}, e.title.length, "/", u)), s.a.createElement(we.a, {
						errorModalTitle: i ? Object(_o.c)(i.name) : void 0,
						messages: a[h.wb.TITLE]
					}))
				})),
				Gd = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx");
			const Hd = "g-recaptcha",
				Vd = "image",
				Kd = {
					COMPACT: "compact",
					NORMAL: "normal"
				},
				qd = () => new Promise(e => {
					if (window.grecaptcha) return e(window.grecaptcha);
					window.grecaptchaOnLoad = () => e(window.grecaptcha);
					const t = document.createElement("script");
					t.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaOnLoad&render=explicit", document.body.appendChild(t)
				});
			class Jd extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					const {
						callback: e,
						size: t,
						type: n
					} = this.props;
					qd().then(o => {
						o.render(Hd, {
							callback: e,
							type: n,
							sitekey: v.a.recaptchaSitekey,
							size: t || Kd.COMPACT
						})
					})
				}
				componentWillReceiveProps(e) {
					this.props.submissionPending && !e.submissionPending && qd().then(e => {
						e.reset()
					})
				}
				render() {
					return s.a.createElement("div", {
						className: "Recaptcha",
						id: Hd
					})
				}
			}
			var Zd = n("./src/reddit/components/PostCreationForm/RecaptchaOverlay/index.m.less"),
				Qd = n.n(Zd);
			const {
				fbt: Yd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Xd = Se.a.div("OverlayWrapper", Qd.a), $d = Se.a.div("OverlayContent", Qd.a), eu = Se.a.div("ExplanationText", Qd.a);
			var tu = Object(r.b)(void 0, (e, t) => ({
				onChange: n => {
					e(i.f(n)), t.callback(n)
				}
			}))(e => s.a.createElement(Xd, null, s.a.createElement($d, null, s.a.createElement(eu, null, Yd._("Ok, one more thing ... you're human, right?", null, {
				hk: "2xDwBB"
			})), s.a.createElement(Jd, {
				submissionPending: !0,
				callback: e.onChange,
				size: Kd.NORMAL,
				type: Vd
			}))));
			const nu = "POST_CREATION__CONFIRM_SAVE_DRAFT_WITH_LIMITATIONS";

			function ou(e) {
				const {
					hasEventSchedule: t,
					hasRichPostMedia: n
				} = e;
				let o = l.fbt._("Saving this draft will not save media and the applied event schedule, all other information will be saved", null, {
					hk: "3NIEQF"
				});
				return n && !t ? o = l.fbt._("Saving this draft will not save media, all other information will be saved", null, {
					hk: "2tpNPY"
				}) : !n && t && (o = l.fbt._("Saving this draft will not save the applied event schedule, all other information will be saved", null, {
					hk: "3wm3T3"
				})), s.a.createElement(pe.a, {
					bodyText: o,
					onClose: e.onCancel,
					onPrimaryAction: e.onConfirm,
					onSecondaryAction: e.onCancel,
					primaryButtonText: l.fbt._("Save", null, {
						hk: "4yMsMq"
					}),
					secondaryButtonText: l.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					titleText: l.fbt._("Save draft", null, {
						hk: "1RxZQJ"
					})
				})
			}
			var su = n("./src/reddit/components/PostCreationForm/SubredditChangePrompt/index.m.less"),
				ru = n.n(su);
			const au = {
					[g.q.ImageWillBeRemoved]: {
						removePromptTitle: () => l.fbt._("Remove image?", null, {
							hk: "3Pk53F"
						}),
						removeConfirm: () => l.fbt._("Change and remove image", null, {
							hk: "Ik8BT"
						}),
						removeCancel: () => l.fbt._("Keep image", null, {
							hk: "1e7FY0"
						}),
						details: e => l.fbt._("Aw crap, {sureddit name} doesn't allow images. If you change to {suredditName} your image will be removed.", [l.fbt._param("sureddit name", `r/${e}`), l.fbt._param("suredditName", `r/${e}`)], {
							hk: "1zQOEn"
						})
					},
					[g.q.VideoWillBeRemovedMediaNotAllowed]: {
						removePromptTitle: () => l.fbt._("Remove video?", null, {
							hk: "12xLOq"
						}),
						removeConfirm: () => l.fbt._("Change and remove video", null, {
							hk: "3izwIJ"
						}),
						removeCancel: () => l.fbt._("Keep video", null, {
							hk: "32ZDlX"
						}),
						details: e => l.fbt._("Aw crap, {sureddit name} doesn't allow videos. If you change to {suredditName} your video will be removed.", [l.fbt._param("sureddit name", `r/${e}`), l.fbt._param("suredditName", `r/${e}`)], {
							hk: "1sxEJG"
						})
					},
					[g.q.VideoWillBeRemovedTooLongForGif]: {
						removePromptTitle: () => l.fbt._("Remove video?", null, {
							hk: "12xLOq"
						}),
						removeConfirm: () => l.fbt._("Change and remove video", null, {
							hk: "3izwIJ"
						}),
						removeCancel: () => l.fbt._("Keep video", null, {
							hk: "32ZDlX"
						}),
						details: e => l.fbt._("Aw crap, {sureddit name} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF. If you change to {suredditName} your video will be removed.", [l.fbt._param("sureddit name", `r/${e}`), l.fbt._param("suredditName", `r/${e}`)], {
							hk: "34j8hI"
						})
					},
					[g.q.GalleryWillBeRemovedGalleryNotAllowed]: {
						removePromptTitle: () => l.fbt._("Remove gallery?", null, {
							hk: "4mddlm"
						}),
						removeConfirm: () => l.fbt._("Change and remove gallery", null, {
							hk: "2JB1HN"
						}),
						removeCancel: () => l.fbt._("Keep gallery", null, {
							hk: "26kW19"
						}),
						details: e => l.fbt._("Aw crap, {sureddit name} doesn't allow galleries. If you change to {suredditName} your gallery will be removed.", [l.fbt._param("sureddit name", `r/${e}`), l.fbt._param("suredditName", `r/${e}`)], {
							hk: "11irkw"
						})
					}
				},
				iu = Se.a.div("Wrapper", ru.a),
				cu = Se.a.wrapped(Me.a, "TitleRow", ru.a),
				lu = Se.a.div("DetailsContainer", ru.a),
				du = Se.a.wrapped(Me.a, "ButtonRow", ru.a),
				uu = Se.a.wrapped(k.l, "CancelButton", ru.a),
				mu = Se.a.wrapped(k.o, "ConfirmButton", ru.a);
			var pu = Object(wo.a)(e => {
					const {
						promptType: t,
						nextSubreddit: n
					} = e, o = au[t];
					return s.a.createElement(iu, null, s.a.createElement(cu, null, o.removePromptTitle()), s.a.createElement(lu, null, o.details(n.name)), s.a.createElement(du, null, s.a.createElement(mu, {
						onClick: e.onConfirmed
					}, o.removeConfirm()), s.a.createElement(uu, {
						onClick: e.onCanceled
					}, o.removeCancel())))
				}),
				hu = n("./src/lib/filterQueryParams/index.ts"),
				bu = n("./src/reddit/models/ScheduledPost/index.ts"),
				fu = n("./src/reddit/selectors/gold/powerups/index.ts"),
				gu = n("./src/reddit/components/PostCreationForm/Tabs/index.m.less"),
				Cu = n.n(gu);
			const Eu = e => s.a.createElement("button", {
					className: Object(p.a)(Cu.a.Tab, e.className, {
						[Cu.a.isActive]: e.active
					}),
					disabled: e.disabled,
					onClick: e.onClick
				}, e.children),
				xu = Object(a.a)(V.d, V.e, V.h, V.S, V.bb, Z.r, (e, t) => {
					const n = Object(Z.n)(e, t);
					return !!n && Object(fu.t)(e, {
						subredditId: n
					})
				}, te.L, (e, t, n, o, s, r, a, i) => {
					const {
						images: c = !0,
						links: l = !0,
						text: d = !0,
						videos: u = !0,
						talks: m = !1
					} = n.allowedPostTypes || {}, p = !!r && r.isNSFW;
					return {
						link: s || !l || o && !Object(bu.g)("links"),
						media: !u && !c && !t || s || p && !a || o && !Object(bu.g)("images"),
						post: !d && !t || s || o && !Object(bu.g)("text"),
						poll: !e || o && !Object(bu.g)("polls"),
						talk: s || !m || o && !Object(bu.g)("talks")
					}
				}),
				_u = Object(a.c)({
					canPostAsModerator: V.e,
					destSubreddit: V.h,
					govType: e => e.creations.formData.govType,
					hasCreatedPredictionDrafts: Fc.a,
					isTabsDisabled: xu,
					pending: V.bb,
					submissionType: V.a,
					subreddit: Z.r,
					isImageGalleryCreationEnabled: V.N,
					isPredictionCreationTabEnabled: H.o,
					isTalkCreationEnabled: H.A
				}),
				vu = Object(r.b)(_u, (e, t) => ({
					onChange: (n, o) => {
						e(i.g({
							submissionType: n,
							extra: o
						})), e((e, t) => Q.C(t(), n)), e(i.x(n === h.Wb.POLL)), ((e, t, n) => {
							if (!t) return;
							const o = Object(hu.a)(t.url, n);
							t.url !== o && e(Object(m.c)(o))
						})(e, t.pageLayer, ["url", "media", "onlyTitle", "text", "selftext", "type"])
					}
				}));
			class Ou extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostTabClick = () => {
						this.props.isTabsDisabled.post || this.props.onChange(h.Wb.POST, {
							govType: this.props.govType
						})
					}, this.onMediaTabClick = () => {
						this.props.isTabsDisabled.media || this.props.onChange(h.Wb.MEDIA, {
							govType: this.props.govType
						})
					}, this.onLinkTabClick = () => {
						this.props.isTabsDisabled.link || this.props.onChange(h.Wb.LINK_ONLY, {
							govType: this.props.govType
						})
					}, this.onPollTabClick = () => {
						this.props.isTabsDisabled.poll && !this.props.isPredictionCreationAllowed || this.props.onChange(h.Wb.POLL, {
							govType: this.props.govType
						})
					}, this.onPredictionTabClick = () => {
						this.props.onChange(h.Wb.PREDICTION, {
							govType: this.props.govType
						})
					}, this.onTalkTabClick = () => {
						!this.props.isTabsDisabled.talk && this.props.isTalkCreationAllowedForUser && this.props.onChange(h.Wb.TALK, {
							govType: this.props.govType
						})
					}
				}
				render() {
					const {
						destSubreddit: e,
						hasCreatedPredictionDrafts: t,
						isTabsDisabled: n,
						submissionType: o,
						isImageGalleryCreationEnabled: r,
						isPredictionCreationAllowed: a,
						isPredictionCreationTabEnabled: i,
						isTalkCreationAllowedForUser: c,
						isTalkCreationEnabled: d
					} = this.props, {
						name: u = "",
						allowedPostTypes: m
					} = e, {
						images: p = !0,
						videos: b = !0
					} = m || {};
					let f = l.fbt._({
						"*": "Images & Video",
						_1: "Image & Video"
					}, [l.fbt._plural(r ? 2 : 1)], {
						hk: "3VeQoy"
					});
					return p && !b ? f = r ? l.fbt._("Images", null, {
						hk: "3fSX8N"
					}) : l.fbt._("Image", null, {
						hk: "uFHQ1"
					}) : b && !p && (f = l.fbt._("Video", null, {
						hk: "3w6DFr"
					})), s.a.createElement("div", {
						className: Cu.a.Container
					}, s.a.createElement("div", {
						className: Cu.a.row
					}, s.a.createElement(Eu, {
						active: o === h.Wb.POST,
						disabled: t || n.post,
						onClick: this.onPostTabClick
					}, s.a.createElement(De.a, {
						name: "text_post",
						isFilled: o === h.Wb.POST,
						className: Cu.a.Icon
					}), l.fbt._("Post", null, {
						hk: "ozUj2"
					})), s.a.createElement(Eu, {
						active: o === h.Wb.MEDIA,
						disabled: t || n.media,
						onClick: this.onMediaTabClick
					}, n.media && s.a.createElement(xt.a, {
						text: l.fbt._("Images and videos are not allowed in {subreddit name}", [l.fbt._param("subreddit name", `r/${u}`)], {
							hk: "2uC6BP"
						})
					}), s.a.createElement(De.a, {
						name: "image_post",
						isFilled: o === h.Wb.MEDIA,
						className: Cu.a.Icon
					}), f), s.a.createElement(Eu, {
						active: o === h.Wb.LINK_ONLY,
						disabled: t || n.link,
						onClick: this.onLinkTabClick
					}, s.a.createElement(De.a, {
						name: "link_post",
						isFilled: o === h.Wb.LINK_ONLY,
						className: Cu.a.Icon
					}), l.fbt._("Link", null, {
						hk: "1pbEKv"
					})), s.a.createElement(Eu, {
						active: o === h.Wb.POLL,
						disabled: t || n.poll && !a,
						onClick: this.onPollTabClick
					}, s.a.createElement(De.a, {
						name: "poll_post",
						isFilled: o === h.Wb.POLL,
						className: Cu.a.Icon
					}), n.poll && a && !i ? l.fbt._("Prediction", null, {
						hk: "3NTNLd"
					}) : l.fbt._("Poll", null, {
						hk: "SQdo4"
					})), i && a && s.a.createElement(Eu, {
						active: o === h.Wb.PREDICTION,
						disabled: t || !a,
						onClick: this.onPredictionTabClick
					}, s.a.createElement(De.a, {
						name: "prediction",
						isFilled: "prediction" === o,
						className: Cu.a.Icon
					}), l.fbt._("Predictions", null, {
						hk: "QtPNQ"
					}), s.a.createElement("span", {
						className: Cu.a.liveIcon
					}, l.fbt._("New", null, {
						hk: "NlZKz"
					}))), d && s.a.createElement(Eu, {
						active: o === h.Wb.TALK,
						disabled: t || n.talk || !c,
						onClick: this.onTalkTabClick
					}, s.a.createElement(De.a, {
						name: "audio",
						isFilled: o === h.Wb.TALK,
						className: Cu.a.Icon
					}), l.fbt._("Talk", null, {
						hk: "30xDP2"
					}))))
				}
			}
			var yu = Object(Z.u)()(vu(Ou));

			function ku() {
				return (ku = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var ju = n("./src/reddit/components/PostCreationForm/index.m.less"),
				Su = n.n(ju);
			const Tu = Se.a.div("FormContent", Su.a),
				Pu = Se.a.wrapped(_.c, "CrosspostBox", Su.a),
				Iu = Se.a.div("FormContainer", Su.a),
				wu = Se.a.div("TabContent", Su.a),
				Nu = Object(Z.u)({
					draftId: Z.v,
					isPostCreationPage: Z.G,
					pageLayer: e => e,
					sourcePostId: e => Object(Z.X)(e).source_id
				}),
				Du = Object(a.c)({
					submissionType: V.a,
					allowNavigationCallback: X.a,
					contributorRequestPending: e => Object(ee.e)(e, C.e.Post),
					discardGoesBack: (e, {
						pageLayer: t
					}) => {
						const n = Object(Z.U)(e, {
							pageLayer: t
						});
						return !!n && "/" === n[0]
					},
					draft: $.d,
					draftsCount: te.l,
					editorMode: V.n,
					eventSchedule: V.p,
					includeUserProfile: te.h,
					isChanged: V.H,
					isNameEditable: te.Q,
					isPostSubmitEnabled: co,
					isScheduledPost: V.S,
					flair: V.r,
					hasError: V.w,
					havePostContent: V.D,
					linkBody: V.U,
					markdownBody: V.V,
					rteBody: V.gb,
					maxDrafts: te.ab,
					modalId: Y.a,
					needsCaptcha: V.Y,
					nextSubreddit: V.Z,
					pending: V.bb,
					postRequirements: V.pb,
					sourcePostRoot: V.kb,
					submitMode: V.nb,
					subredditOrProfile: Z.p,
					title: V.rb,
					uploads: e => e.uploads,
					isOpenAIPilotV1: zi.f,
					isSubredditHasCollections: (e, t) => {
						const n = Object(Z.p)(e, t);
						return !!n && Object(x.m)(e, {
							subredditId: n.id
						})
					}
				});
			class Mu extends s.a.Component {
				constructor(e) {
					super(e), this.postFieldValidationPending = null, this.sendStartTypingInputBodyEvent = u()(() => this.props.onStartTypingInput(g.m.BODY)), this.sendStartTypingInputTitleEvent = u()(() => this.props.onStartTypingInput(g.m.TITLE)), this.sendStartTypingInputUrlEvent = u()(() => this.props.onStartTypingInput(g.m.URL)), this.onExternalAccountConnected = () => {
						this.props.onExternalAccountsDataRequested()
					}, this.onRecaptchaSucceeded = () => {
						this.props.onSubmit(this.props.submitMode, this.postFieldValidationPending)
					}, this.onDiscardPromptOnNavigationConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.discardGoesBack || this.props.onDiscardPromptOnNavigationConfirmed(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onDiscardPromptOnNewPostConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.onToggleModal(g.d), this.props.onDiscardPromptOnCreatePostConfirmed()
					}, this.onDiscardPromptAbort = () => {
						this.props.onToggleModal(this.props.modalId), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.onDiscardPromptSaveDraft = () => {
						this.props.onToggleModal(this.props.modalId), this.onSaveDraft()
					}, this.handleKeyDown = e => {
						const {
							ctrlKey: t,
							metaKey: n,
							keyCode: o
						} = e;
						(t || n) && o === b.a.Enter && this.onSubmit()
					}, this.onSubredditChangePromptConfirmed = () => {
						this.props.nextSubreddit && (this.props.onCancelAndRemoveMediaUpload(), this.props.onRedirectToSubreddit(this.props.nextSubreddit))
					}, this.onSubmit = () => {
						const {
							isPostSubmitEnabled: e,
							isScheduledPost: t,
							onSubmit: n
						} = this.props, o = Object(f.c)(f.a.PostComposer);
						e && n(t ? g.r.ScheduledPost : g.r.Post, this.postFieldValidationPending, o)
					}, this.onSaveDraft = async () => {
						const {
							draftId: e,
							draftsCount: t,
							eventSchedule: n,
							maxDrafts: o,
							onToggleModal: s
						} = this.props;
						!e && t >= o ? s(Gd.a.MAX_DRAFTS_MODAL_ID) : n || this.hasRichPostMedia() ? s(nu) : this.props.onSubmit(g.r.Draft, this.postFieldValidationPending)
					}, this.tryLoadDraft = e => {
						this.props.isChanged ? (this.setState({
							draftToLoad: e
						}), this.props.onToggleModal(Gd.a.LOAD_DRAFT_MODAL_ID)) : (this.props.onToggleModal(g.e), this.onLoadDraft(e))
					}, this.onLoadDraft = e => {
						e && this.props.onLoadDraft(e)
					}, this.onSelectCollection = e => {
						this.props.onSetDestCollection(e.id)
					}, this.onPromptCancel = e => {
						this.props.onToggleModal(e)
					}, this.onToggleCurrentModal = () => {
						this.props.modalId && this.props.onToggleModal(this.props.modalId)
					}, this.onPromptConfirm = e => {
						switch (e) {
							case Gd.a.LOAD_DRAFT_MODAL_ID:
								this.props.onToggleModal(e), this.onLoadDraft(this.state.draftToLoad);
								break;
							case Gd.a.MAX_DRAFTS_MODAL_ID:
								this.props.onRequestDraftList(), this.props.onToggleModal(g.e);
								break;
							default:
								this.props.onToggleModal(e)
						}
					}, this.onConfirmSavingDraftWithLimitations = () => {
						this.onToggleCurrentModal(), this.props.onSubmit(g.r.Draft, this.postFieldValidationPending)
					}, this.onToggleCollectionListModal = () => {
						this.props.onToggleModal(g.a)
					}, this.onCollectionCreated = e => {
						this.onToggleCurrentModal(), this.onSelectCollection(e)
					}, this.onDraftListClose = () => {
						this.props.onToggleModal(g.e)
					}, this.onPostFieldValidation = e => {
						this.postFieldValidationPending = e
					}, this.renderTabContent = () => s.a.createElement(s.a.Fragment, null, s.a.createElement(zd, {
						isApprovedUser: this.props.isApprovedUser,
						onChange: this.sendStartTypingInputTitleEvent,
						onKeyDown: this.handleKeyDown,
						onPostFieldValidation: this.onPostFieldValidation
					}), this.renderActiveForm()), this.state = {
						draftToLoad: null
					}
				}
				componentDidMount() {
					Object(f.e)(f.a.PostComposer, !1), this.externalAccountEventsChannel = Object(le.a)(), this.externalAccountEventsChannel.addEventListener("message", this.onExternalAccountConnected), this.props.isNameEditable && this.props.startChangeUsernameFlow()
				}
				componentWillUnmount() {
					Object(f.b)(f.a.PostComposer), this.externalAccountEventsChannel && this.externalAccountEventsChannel.close(), this.props.onUnmount()
				}
				hasRichPostMedia() {
					const {
						rteBody: e,
						submissionType: t
					} = this.props;
					return t === h.Wb.POST && e.isBound && Object(J.j)(e.editorState.getCurrentContent())
				}
				renderActiveForm() {
					switch (this.props.submissionType) {
						case h.Wb.POST:
						case h.Wb.POLL:
						case h.Wb.PREDICTION:
							return s.a.createElement(cd, {
								submissionType: this.props.submissionType,
								isPredictionCreationAllowed: this.props.isPredictionCreationAllowed,
								onChange: this.sendStartTypingInputBodyEvent,
								onPostFieldValidation: this.onPostFieldValidation,
								onSubmit: this.onSubmit
							});
						case h.Wb.MEDIA:
							return s.a.createElement(ui, null);
						case h.Wb.LINK_ONLY:
							return s.a.createElement(cr, {
								onChange: this.sendStartTypingInputUrlEvent,
								onKeyDown: this.handleKeyDown,
								onPostFieldValidation: this.onPostFieldValidation
							});
						case h.Wb.CROSSPOST: {
							const {
								sourcePostRoot: e
							} = this.props;
							return e && s.a.createElement(Pu, {
								postId: e.id,
								mediaProps: {
									isExpando: !1,
									isListing: !1,
									isNotCardView: !0,
									post: e,
									primaryContent: !1,
									showCentered: !0,
									showFull: !0,
									shouldLoad: !0,
									shouldPause: !1
								}
							})
						}
						case h.Wb.TALK:
							return s.a.createElement(s.a.Fragment, null);
						default:
							return l.fbt._("Invalid submissionType", null, {
								hk: "3GqKJS"
							})
					}
				}
				render() {
					const {
						contributorRequestPending: e,
						draftId: t,
						includeUserProfile: n,
						isApprovedUser: o,
						isOpenAIPilotV1: r,
						isPredictionCreationAllowed: a,
						isTalkCreationAllowedForUser: i,
						modalId: c,
						needsCaptcha: d,
						nextSubreddit: u,
						postRequirements: m,
						sourcePostId: b,
						sourcePostRoot: f,
						submissionType: C,
						submitMode: x,
						subredditOrProfile: _,
						title: v
					} = this.props;
					if (C === h.Wb.CROSSPOST) {
						if (!f) return s.a.createElement(E.b, {
							message: l.fbt._("The original post cannot be found", null, {
								hk: "3ieS5B"
							})
						});
						if (!f.isCrosspostable || f.isSponsored) return s.a.createElement(E.a, {
							message: l.fbt._("The original post cannot be crossposted", null, {
								hk: "4hn9ht"
							})
						})
					}
					const O = m && m.guidelinesText && m.guidelinesText.trim() || "";
					return s.a.createElement(Iu, null, s.a.createElement(Qi, {
						submissionType: C,
						submitMode: x
					}), !r && s.a.createElement(s.a.Fragment, null, s.a.createElement(To, {
						includeUserProfile: n,
						allowCrosspostableOnly: !!b
					}), !!O && s.a.createElement("div", {
						className: Su.a.PostingGuidelines
					}, O)), s.a.createElement(Tu, null, C !== h.Wb.CROSSPOST && s.a.createElement(yu, {
						isPredictionCreationAllowed: a,
						isApprovedUser: o,
						isTalkCreationAllowedForUser: i
					}), C === h.Wb.TALK && _ ? s.a.createElement(z, {
						subredditId: _.id,
						title: v
					}, this.renderTabContent()) : s.a.createElement(wu, null, this.renderTabContent()), r && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Su.a.postToTitle
					}, l.fbt._("Post to", null, {
						hk: "1t9e1N"
					})), s.a.createElement(To, {
						includeUserProfile: n,
						allowCrosspostableOnly: !!b,
						className: Oo.a.SubredditRec
					}), !!O && s.a.createElement("div", {
						className: Object(p.a)(Su.a.PostingGuidelines, Su.a.isSubredditRec)
					}, O)), e && s.a.createElement(q.a, null), C !== h.Wb.TALK && s.a.createElement(fo, {
						contributorRequestPending: e,
						draftId: t,
						onCancel: this.props.onDiscardPromptOnNavigationConfirmed,
						onPostFieldValidation: this.onPostFieldValidation,
						onSaveDraft: this.onSaveDraft,
						onSubmit: this.onSubmit,
						sourcePostId: b,
						subredditId: null == _ ? void 0 : _.id,
						shouldRenderDivider: !r,
						isOpenAISubRec: r
					}), s.a.createElement(Ui, {
						draftId: t
					})), d && s.a.createElement(tu, {
						callback: this.onRecaptchaSucceeded
					}), c === fe && s.a.createElement(Ce, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNavigationConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: C
					}), c === g.d && s.a.createElement(Ce, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNewPostConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: C
					}), c === g.e && s.a.createElement(Ws, {
						onClose: this.onDraftListClose,
						onLoadDraft: this.tryLoadDraft
					}), c === g.a && _ && s.a.createElement(ke.a, {
						onClose: this.onToggleCollectionListModal,
						onSelectCollection: this.onSelectCollection,
						subredditId: _.id
					}), Object(g.v)(c) && _ && s.a.createElement(go.a, {
						onCancel: this.props.closeCreateCollectionModal,
						onCollectionCreated: this.onCollectionCreated,
						subredditId: _.id
					}), c === Gd.a.LOAD_DRAFT_MODAL_ID && s.a.createElement(Gd.b, {
						modalId: Gd.a.LOAD_DRAFT_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), c === Gd.a.MAX_DRAFTS_MODAL_ID && s.a.createElement(Gd.b, {
						modalId: Gd.a.MAX_DRAFTS_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), c === nu && s.a.createElement(ou, {
						onCancel: this.onToggleCurrentModal,
						onConfirm: this.onConfirmSavingDraftWithLimitations,
						hasEventSchedule: !!this.props.eventSchedule,
						hasRichPostMedia: this.hasRichPostMedia()
					}), u && (c === g.q.ImageWillBeRemoved || c === g.q.VideoWillBeRemovedTooLongForGif || c === g.q.VideoWillBeRemovedMediaNotAllowed || c === g.q.GalleryWillBeRemovedGalleryNotAllowed) && s.a.createElement(pu, {
						withOverlay: !0,
						promptType: c,
						nextSubreddit: u,
						onConfirmed: this.onSubredditChangePromptConfirmed,
						onCanceled: this.props.onCancelSubredditChange
					}), C !== h.Wb.TALK && s.a.createElement(ye, null))
				}
			}
			var Ru, Lu = Nu(Object(r.b)(Du, (e, {
					draftId: t,
					sourcePostId: n,
					pageLayer: o
				}) => ({
					onLoadDraft: t => e(ie.q(t)),
					onSubmit: (s, r, a) => e(re.a(s, {
						draftId: t || void 0,
						pageLayer: o,
						postFieldValidationPending: r,
						sourcePostId: n,
						correlationId: a
					})),
					onDiscardPromptOnCreatePostConfirmed: () => {
						e(i.q(!1, o))
					},
					onDiscardPromptOnNavigationConfirmed: (t, n) => {
						e(t ? Object(m.a)() : n ? Object(m.b)(n.url) : Object(m.b)("/"))
					},
					onExternalAccountsDataRequested: () => e(oe.o()),
					onRedirectToSubreddit: n => e(ae.a(n, t)),
					onCancelSubredditChange: () => {
						e(i.z("")), e(ae.e())
					},
					onCancelAndRemoveMediaUpload: () => {
						e(Object(i.d)({
							items: [],
							selectedKey: null
						})), e(ce.j(se.a, !0))
					},
					onClearErrors: (t, n) => t && e(i.i(n)),
					onRequestDraftList: () => e(ie.p()),
					onSetDestCollection: t => e(ae.d(t)),
					onStartTypingInput: t => e((e, n) => Q.s(n(), g.l.TYPE, t)),
					onToggleIsChanged: t => e(i.t(t)),
					onToggleModal: t => e(i.z(t)),
					onTrackDiscardButtonClick: () => e((e, t) => Q.e(t())),
					onUnmount: () => e((e, t) => {
						e(ce.j(se.a, !0)), e(ce.i(g.n, !0))
					}),
					onUploadPendingThumbnails: t => e(se.f(t)),
					startChangeUsernameFlow: () => e(Object(ne.f)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onClearErrors: n => t.onClearErrors(e.hasError || e.hasSubmitValidationError, n),
					onDiscardPromptOnNavigationConfirmed: () => t.onDiscardPromptOnNavigationConfirmed(e.discardGoesBack, e.subreddit),
					closeCreateCollectionModal: () => {
						e.isSubredditHasCollections || e.modalId !== g.c ? t.onToggleModal(g.a) : t.onToggleModal(g.c)
					}
				}))(function(e) {
					return t => {
						const {
							isPredictionCreationAllowed: n,
							isApprovedUser: o
						} = function() {
							const [e, t] = s.a.useState(!1), [n, o] = s.a.useState(!1), a = Object(r.d)(), i = Object(Z.fb)(), c = Object(r.e)(e => Object(Z.r)(e, {
								pageLayer: i
							})), l = Object(r.e)(e => c && Object(Ae.h)(e, {
								subredditId: c.id
							})), d = Object(r.e)(H.m);
							return s.a.useEffect(() => c && c.allowPredictions ? l ? t(!0) : d ? void Promise.resolve(a(Object(Tn.h)(c.id))).then(e => {
								t(Boolean(e)), o(Boolean(e))
							}) : t(!1) : t(!1), [a, c, l, d]), {
								isPredictionCreationAllowed: e,
								isApprovedUser: n
							}
						}();
						return s.a.createElement(e, ku({}, t, {
							isPredictionCreationAllowed: n,
							isApprovedUser: o
						}))
					}
				}((Ru = Mu, e => {
					const t = Object(G.a)(),
						[n, a] = Object(o.useState)(!1),
						i = Object(r.e)(e => Object(V.h)(e)),
						c = Object(r.e)(e => Object(H.A)(e)),
						l = Object(o.useMemo)(() => {
							var e;
							return !!(null === (e = i.allowedPostTypes) || void 0 === e ? void 0 : e.talks)
						}, [i]);
					return Object(o.useEffect)(() => {
						let e = !1;
						return l && i.id && c && (async () => {
							const n = await M(t(), {
								subredditId: i.id
							});
							e || a(n)
						})(), () => {
							e = !0
						}
					}, [i.id, t, c, l]), s.a.createElement(Ru, K({}, e, {
						isTalkCreationAllowedForUser: n
					}))
				})))),
				Fu = n("./src/reddit/components/PostingSidebar/index.tsx"),
				Au = n("./src/reddit/layout/page/Listing/index.tsx"),
				Bu = n("./src/lib/makePostCreationPageKey/index.ts"),
				Uu = n("./src/reddit/helpers/trackers/screenview.ts"),
				Wu = n("./src/telemetry/models/Timer.ts");
			const zu = Object(a.c)({
					destSubreddit: V.h,
					user: te.k
				}),
				Gu = Object(r.b)(zu, (e, {
					pageLayer: t
				}) => ({
					onResetForm: () => e(i.q(!1, t))
				})),
				Hu = Object(Z.u)({
					draftId: Z.v,
					pageLayer: e => e
				});
			class Vu extends o.Component {
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0;
					const e = this.props.pageLayer;
					if (e) {
						const t = Object(Bu.a)(e.urlParams);
						je.c.has(t) && this.props.sendEvent(Object(Uu.l)(t, Wu.TimerType.InApp, je.c.end(t)))
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.draftId && !e.draftId && e.onResetForm()
				}
				render() {
					const {
						destSubreddit: e,
						user: t
					} = this.props;
					if (e.isProfile) {
						if (!t) return s.a.createElement(E.b, null);
						if (Object(Ro.e)(t).toLowerCase() !== e.name.toLowerCase()) return s.a.createElement(E.a, null)
					}
					return s.a.createElement(Au.a, {
						redditStyle: !0,
						disableFullscreen: !0,
						navBar: s.a.createElement("div", null),
						content: s.a.createElement(s.a.Fragment, null, s.a.createElement(c.a, null), s.a.createElement(Lu, null)),
						sidebar: s.a.createElement(Fu.a, null)
					})
				}
			}
			t.default = Hu(Gu(Object(he.c)(Vu)))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(o || (o = {}));
			const r = {
				status: o.NotFetched
			};
			t.b = (e = r, t) => {
				switch (t.type) {
					case s.a:
						if (e.status === o.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: o,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === o.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: o,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: o.Failure
						};
					case s.c:
						return {
							data: t.payload, status: o.Fetched
						};
					case s.d:
						return {
							status: o.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o, s = n("./src/lib/constants/specialMembership.ts"),
				r = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				a = n("./src/reddit/helpers/economics/sortBadges.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(o || (o = {}));
			const l = {};

			function d(e) {
				return "userId" in e
			}

			function u(e, t, n, o) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let r;
						(r = e.placement ? e.placement === i.a.First ? o[c.a.Loyalty][s] : o[c.a.Achievement][s] : d(e) ? o[c.a.Cosmetic][c.c.MyBadges][s] : o[c.a.Cosmetic][c.c.Gallery][s]) && (d(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						o = parseInt(t.price || "0");
					return n === o ? Object(a.b)(e, t) : n - o
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, n) => {
					const o = t[e.id],
						s = t[n.id];
					return Object(a.b)(o, s)
				})
			}

			function h(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const o = e.collections[n],
						s = {
							description: o.description,
							highlight: o.extra && o.extra.style && o.extra.style.color,
							id: o.id,
							locked: [],
							title: o.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const o = e.badges[t];
					o && n.add(o.type)
				});
				const o = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, o, t), u(Object.keys(e.products).map(t => e.products[t]), n, o, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = l, t) => {
				switch (t.type) {
					case r.a: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === o.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case r.h: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === o.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case r.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: h(n),
								status: o.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/redux/es/redux.js"),
				s = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				r = n("./src/reddit/actions/economics/me/constants.ts");
			const a = {};
			var i = (e = a, t) => {
					switch (t.type) {
						case r.a: {
							const n = t.payload.claimPoints || {},
								o = Object.keys(n).reduce((t, o) => (t[o] = {
									...e[o],
									availableClaims: n[o]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (o[t] = o[t] || {
									availableClaims: []
								}, o[t].isClaiming = !0)
							}), o
						}
						case s.b:
						case s.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === s.b
								}
							};
						default:
							return e
					}
				},
				c = n("./src/reddit/actions/governance/constants.ts");
			const l = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function u(e) {
				var t, n, o, s, r;
				const a = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					i = null == a ? void 0 : a.contracts,
					c = null == i ? void 0 : i.unlocked,
					l = null !== (o = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== o ? o : e.provider,
					u = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					m = (null == c ? void 0 : c.decimals) || 0,
					p = "1" + "0".repeat(m);
				return {
					blockchainProvider: l,
					contractAddress: (null == c ? void 0 : c.address) || "",
					contracts: i,
					decimals: m,
					displayConversion: p,
					images: e.images || d,
					inTransition: u,
					name: e.name,
					nomenclature: null === (r = e.extra) || void 0 === r ? void 0 : r.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var m = (e = l, t) => {
				switch (t.type) {
					case c.a: {
						const {
							subredditId: n,
							meta: o
						} = t.payload;
						return {
							...e,
							[n]: u(o)
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var h = (e = p, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: n,
							wallets: o
						} = t.payload, s = Object.keys(o).reduce((t, s) => {
							return {
								...t,
								[s]: {
									...e[s] || {},
									[n]: o[s]
								}
							}
						}, {});
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				claims: i,
				points: m,
				publicWallets: h
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/endpoints/governance/crypto.ts"),
				a = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(a.a)({
				features: {
					crypto: i.a
				}
			});
			const c = (e, t) => {
				var n, o, s;
				return t ? null === (s = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === o ? void 0 : o.points) || void 0 === s ? void 0 : s[t] : void 0
			};

			function l() {
				const e = Object(s.fb)(),
					t = Object(o.e)(t => Object(s.r)(t, {
						pageLayer: e
					})),
					n = Object(o.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const d = (e, t) => {
				var n;
				const o = null === (n = c(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return o === r.a.Ethereum || o === r.a.Rinkeby || o === r.a.EthTraderEthereum || o === r.a.EthTraderRinkeby || o === r.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(s.c)(e, {
					experimentName: o.Td,
					experimentEligibilitySelector: s.a
				}) === o.de.Enabled,
				a = e => Object(s.c)(e, {
					experimentName: o.Ud,
					experimentEligibilitySelector: s.a,
					expEventOverride: !1
				}) === o.ee.Enabled
		},
		"./src/reddit/selectors/experiments/typingIndicators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/presence.ts");
			const i = e => {
					if (Object(a.a)(e)) return !1;
					return Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.tf
					}) === o.dd
				},
				c = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.uf
					}) === o.dd
				},
				l = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.sf
					});
					return t === o.lf.TypingIndicators || t === o.lf.IndicatorsPlusCTA
				},
				d = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(r.d)(e, {
						experimentName: o.sf
					});
					return (null == t ? void 0 : t.variant) === o.lf.IndicatorsPlusCTA
				}
		},
		"./src/reddit/selectors/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "b", (function() {
				return j
			}));
			var o = n("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				s = n("./src/reddit/models/Flair/index.ts"),
				r = n("./src/reddit/models/ScheduledPost/index.ts");
			const a = (e, {
					subredditId: t
				}) => ((e, {
					subredditId: t,
					type: n
				}) => !!e.posts.scheduledPosts[n].models[t])(e, {
					subredditId: t,
					type: r.f.standalonePosts
				}),
				i = (e, {
					subredditId: t,
					type: n
				}) => !!e.posts.scheduledPosts[n].pageInfo[t] && e.posts.scheduledPosts[n].pageInfo[t].hasNextPage,
				c = (e, {
					subredditId: t,
					type: n
				}) => e.posts.scheduledPosts[n].pageInfo[t] ? e.posts.scheduledPosts[n].pageInfo[t].endCursor : null,
				l = e => e.posts.scheduledPosts.api.pending,
				d = e => e.posts.scheduledPosts.api.pendingUpdate,
				u = e => e.posts.scheduledPosts.api.error,
				m = {},
				p = [],
				h = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.standalonePosts.postOrder[t] || p).filter(n => !!(e.posts.scheduledPosts.standalonePosts.models[t] || m)[n]).map(n => e.posts.scheduledPosts.standalonePosts.models[t][n]),
				b = (e, {
					subredditId: t
				}) => (e.posts.scheduledPosts.recurringPosts.postOrder[t] || p).filter(n => !!(e.posts.scheduledPosts.recurringPosts.models[t] || m)[n]).map(n => e.posts.scheduledPosts.recurringPosts.models[t][n]),
				f = (e, {
					subredditId: t,
					scheduledPostId: n,
					type: o
				}) => {
					return (e.posts.scheduledPosts[o].models[t] || m)[n] || void 0
				},
				g = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => f(e, {
					subredditId: t,
					scheduledPostId: n,
					type: r.f.standalonePosts
				}),
				C = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => {
					const o = f(e, {
						subredditId: t,
						scheduledPostId: n,
						type: r.f.recurringPosts
					});
					return o || o
				},
				E = (e, {
					subredditId: t,
					scheduledPostId: n
				}) => g(e, {
					subredditId: t,
					scheduledPostId: n
				}) || C(e, {
					subredditId: t,
					scheduledPostId: n
				}),
				x = e => e.creations.formData.scheduledPostId,
				_ = ({
					scheduledPost: e
				}) => (({
					flair: e,
					isNsfw: t,
					isSpoiler: n,
					isOriginalContent: r
				}) => {
					const a = [];
					return r && a.push({
						text: "OC",
						type: s.f.Oc
					}), e && a.push(...Object(o.b)(e)), n && a.push({
						text: "spoiler",
						type: s.f.Spoiler
					}), t && a.push({
						text: "nsfw",
						type: s.f.Nsfw
					}), a
				})(e),
				v = ({
					scheduledPost: e
				}) => {
					const t = _({
							scheduledPost: e
						}),
						n = t.find(e => e.type === s.f.Richtext);
					return n || (t.find(e => e.type === s.f.Text) || null)
				},
				O = e => e.posts.scheduledPosts[r.f.recurringPosts].editModal.scheduledPostId,
				y = e => e.posts.scheduledPosts[r.f.recurringPosts].editModal.subredditId,
				k = e => e.posts.scheduledPosts.api.pendingUpdate,
				j = e => e.posts.scheduledPosts.api.creationToken
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"52e4102ca1f1"}')
		},
		"./src/redditGQL/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"1e0a4bfe5ac9"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/redditGQL/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"f5276d63e133"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation.d9db21868c5a4d6dbfc4.js.map