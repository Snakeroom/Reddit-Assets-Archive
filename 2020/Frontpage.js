// https://www.redditstatic.com/desktop2x/Frontpage.d04b229d0dc113e04189.js
// Retrieved at 1/18/2020, 9:15:20 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage", "PostDraft~RichTextEditor~StructuredStyles", "FrontpageSidebar"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, s) {
			var n, r, o;
			r = [t, e], void 0 === (o = "function" == typeof(n = function(e, t) {
				"use strict";
				var s, n, r = "function" == typeof Map ? new Map : (s = [], n = [], {
						has: function(e) {
							return s.indexOf(e) > -1
						},
						get: function(e) {
							return n[s.indexOf(e)]
						},
						set: function(e, t) {
							-1 === s.indexOf(e) && (s.push(e), n.push(t))
						},
						delete: function(e) {
							var t = s.indexOf(e);
							t > -1 && (s.splice(t, 1), n.splice(t, 1))
						}
					}),
					o = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (l) {
					o = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function a(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !r.has(e)) {
						var t, s = null,
							n = e.clientWidth,
							a = null,
							i = function() {
								e.clientWidth !== n && m()
							},
							c = function(t) {
								window.removeEventListener("resize", i, !1), e.removeEventListener("input", m, !1), e.removeEventListener("keyup", m, !1), e.removeEventListener("autosize:destroy", c, !1), e.removeEventListener("autosize:update", m, !1), Object.keys(t).forEach((function(s) {
									e.style[s] = t[s]
								})), r.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", c, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", m, !1), window.addEventListener("resize", i, !1), e.addEventListener("input", m, !1), e.addEventListener("autosize:update", m, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", r.set(e, {
							destroy: c,
							update: m
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), s = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(s) && (s = 0), m()
					}

					function d(t) {
						var s = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = s, e.style.overflowY = t
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
							o = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var a = e.scrollHeight + s;
						0 !== e.scrollHeight ? (e.style.height = a + "px", n = e.clientWidth, r.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), o && (document.documentElement.scrollTop = o)) : e.style.height = t
					}

					function m() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							s = window.getComputedStyle(e, null),
							n = "content-box" === s.boxSizing ? Math.round(parseFloat(s.height)) : e.offsetHeight;
						if (n !== t ? "hidden" === s.overflowY && (d("scroll"), l(), n = "content-box" === s.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== s.overflowY && (d("hidden"), l(), n = "content-box" === s.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), a !== n) {
							a = n;
							var r = o("autosize:resized");
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

				function c(e) {
					var t = r.get(e);
					t && t.update()
				}
				var d = null;
				"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((d = function(e) {
					return e
				}).destroy = function(e) {
					return e
				}, d.update = function(e) {
					return e
				}) : ((d = function(e, t) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
						return a(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], i), e
				}, d.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], c), e
				}), t.exports = d
			}) ? n.apply(t, r) : n) || (e.exports = o)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, s) {
				return ((s = window.getComputedStyle) ? s(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/line-height/lib/line-height.js": function(e, t, s) {
			var n = s("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = n(e, "line-height"),
					s = parseFloat(t, 10);
				if (t === s + "") {
					var r = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = n(e, "line-height"), s = parseFloat(t, 10), r ? e.style.lineHeight = r : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (s *= 4, s /= 3) : -1 !== t.indexOf("mm") ? (s *= 96, s /= 25.4) : -1 !== t.indexOf("cm") ? (s *= 96, s /= 2.54) : -1 !== t.indexOf("in") ? s *= 96 : -1 !== t.indexOf("pc") && (s *= 16), s = Math.round(s), "normal" === t) {
					var o = e.nodeName,
						a = document.createElement(o);
					a.innerHTML = "&nbsp;", "TEXTAREA" === o.toUpperCase() && a.setAttribute("rows", "1");
					var i = n(e, "font-size");
					a.style.fontSize = i, a.style.padding = "0px", a.style.border = "0px";
					var c = document.body;
					c.appendChild(a), s = a.offsetHeight, c.removeChild(a)
				}
				return s
			}
		},
		"./node_modules/lodash/first.js": function(e, t, s) {
			e.exports = s("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, t) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js"),
				o = s("./node_modules/lodash/toFinite.js"),
				a = parseFloat,
				i = Math.min,
				c = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && r(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (s || e % 1 || t % 1) {
					var l = c();
					return i(e + l * (t - e + a("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				r = s("./node_modules/lodash/_castFunction.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > a) return [];
				var s = i,
					d = c(e, i);
				t = r(t), e -= i;
				for (var l = n(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, s) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n, r, o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				},
				a = function() {
					function e(e, t) {
						for (var s = 0; s < t.length; s++) {
							var n = t[s];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, s, n) {
						return s && e(t.prototype, s), n && e(t, n), t
					}
				}(),
				i = m(s("./node_modules/react/index.js")),
				c = m(s("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				d = m(s("./node_modules/autosize/dist/autosize.js")),
				l = m(s("./node_modules/line-height/lib/line-height.js"));

			function m(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function p(e, t) {
				var s = {};
				for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (s[n] = e[n]);
				return s
			}

			function u(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var b = (r = n = function(e) {
				function t() {
					var e, s, n;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i];
					return s = n = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.state = {
						lineHeight: null
					}, n.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), n.textarea.dispatchEvent(t)
					}, n.getValue = function(e) {
						var t = e.valueLink,
							s = e.value;
						return t ? t.value : s
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
							s = (t.onResize, t.maxRows),
							r = (t.onChange, t.style),
							a = (t.innerRef, p(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							i = e.state.lineHeight,
							c = e.saveDOMNodeRef,
							d = s && i ? i * s : null;
						return o({}, a, {
							saveDOMNodeRef: c,
							style: d ? o({}, r, {
								maxHeight: d
							}) : r,
							onChange: n.onChange
						})
					}, u(n, s)
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
							s = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, d.default)(e.textarea)
						}))) : (0, d.default)(this.textarea), s && this.textarea.addEventListener("autosize:resized", this.props.onResize)
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
							s = e.saveDOMNodeRef,
							n = p(e, ["children", "saveDOMNodeRef"]);
						return i.default.createElement("textarea", o({}, n, {
							ref: s
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
			t.default = b, b.propTypes = {
				rows: c.default.number,
				maxRows: c.default.number,
				onResize: c.default.func,
				innerRef: c.default.func
			}
		},
		"./node_modules/react-autosize-textarea/lib/index.js": function(e, t, s) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var n, r = s("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				o = (n = r) && n.__esModule ? n : {
					default: n
				};
			t.default = o.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}
			e.exports = function() {
				function e(e, t, s, r, o, a) {
					if (a !== n) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var s = {
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
				return s.checkPropTypes = r, s.PropTypes = s, s
			}
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/index.js": function(e, t, s) {
			e.exports = s("./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, s) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/i18n/utils.ts");
			const r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				o = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				a = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, s) => {
					const a = t ? e.getUTCMonth() : e.getMonth(),
						i = s ? o : r;
					return Object(n.c)(i[a])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function d(e, t, s, n) {
				const r = new Date(1e3 * e),
					o = i(r, s, n),
					d = t ? a(r, s) + ", " : "";
				return "".concat(o, " ").concat(d).concat(c(r, s))
			}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return E
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/structuredStyles/index.ts"),
				o = s("./src/reddit/actions/subreddit/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/reddit/constants/blade.ts"),
				c = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				m = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/reddit/selectors/structuredStyles.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts");
			const h = Object(n.a)(o.p),
				g = Object(n.a)(o.q),
				x = Object(n.a)(o.o),
				y = (e, t, s) => async (n, r, o) => {
					const a = Object(u.B)(r(), {
						subredditName: e
					});
					if (a) return E(a, t, s)(n, r, o)
				}, E = (e, t, s) => async (n, o, u) => {
					const y = await Object(l.e)(t);
					n(h());
					const E = o();
					try {
						await Object(r.g)("communityIcon", y, e.id)(n, o, u)
					} catch (v) {
						return Object(b.a)(Object(c.c)(E, "something went wrong with the uploading the image")), n(Object(a.e)({
							kind: m.b.Error,
							text: Object(d.c)("Error uploading image, please try again later")
						})), void n(x())
					}
					const f = Object(p.d)(o(), {
						name: "communityIcon"
					});
					if (!f) return Object(b.a)(Object(c.c)(E, "image is null")), n(Object(a.e)({
						kind: m.b.Error,
						text: Object(d.c)("Error uploading image, please try again later")
					})), void n(x());
					await Object(r.k)(e.id, {
						communityIcon: f
					}, i.b.idCard, s)(n, o, u), n(Object(a.e)({
						kind: m.b.SuccessCommunity,
						text: Object(d.c)("Successfully updated Community Icon!")
					})), n(g())
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				r = s.n(n);
			const o = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = o
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/doubleclickForPublishers/index.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/components/BannerAd/index.m.less"),
				x = s.n(g),
				y = s("./src/lib/lessComponent.tsx");
			const E = y.a.div("Container", x.a),
				f = y.a.div("LoadingHitbox", x.a),
				v = e => setTimeout(() => {
					throw e
				}, 0);
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					v(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: s,
						sizes: n = []
					} = this.props;
					try {
						return this.frame && d.a(this.frame, {
							id: e,
							slot: t,
							properties: s,
							sizes: n
						})
					} catch (r) {
						v(r)
					}
				}
				destroySlot() {
					try {
						this.frame && d.b(this.frame)
					} catch (e) {
						v(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(h.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						v(e)
					}
					this.loader && l.a(this.loader, e => {
						this.frame && d.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.isWithinLoadingDistance = !0, this.refresh(this.props), this.loader && l.b(this.loader)
					})
				}
				componentWillUnmount() {
					this.loader && l.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && d.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: s
					} = this.props;
					return t ? r.a.createElement(E, {
						"data-slot": t
					}, r.a.createElement(f, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), r.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : r.a.createElement("div", {
						className: s
					})
				}
			}
			O.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(o.b)(() => Object(a.c)({
				properties: Object(m.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const n = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(p.b)(t.placement, e.user, Object(i.a)("".concat(n).concat(s.url), s.queryParams), Object(u.B)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? d.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(b.b)(O))
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return r.a.createElement(a.a, d({
					className: Object(o.a)(t, c.a.CallToActionButton, {
						[c.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/CategoriesPlacement/EventCategory/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/reddit/constants/topic.ts"),
				i = s("./src/reddit/controls/InternalLink/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = e => {
				const {
					eventCategory: t
				} = e, s = d(e, ["eventCategory"]);
				return r.a.createElement(i.a, c({}, s, {
					rel: "nofollow",
					to: Object(a.a)(o.b)
				}), t.name)
			}
		},
		"./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.m.less": function(e, t, s) {
			e.exports = {
				Icon: "M27cOlSyrfsU8oXk4Kssq",
				icon: "M27cOlSyrfsU8oXk4Kssq",
				ChangeButton: "joDTxMCm6RDjn1_JXPEOR",
				changeButton: "joDTxMCm6RDjn1_JXPEOR",
				ChangeIcon: "_1Qc0BQ2sBRQafmy-f-xjKP",
				changeIcon: "_1Qc0BQ2sBRQafmy-f-xjKP",
				ModalBody: "_3x6FwuogSdxQ1wuQZecnpe",
				modalBody: "_3x6FwuogSdxQ1wuQZecnpe"
			}
		},
		"./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/components/ModalStyledComponents/Modal.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/categories.tsx"),
				p = s("./src/reddit/constants/topic.ts"),
				u = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/i18n/utils.ts"),
				g = e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 13 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444",
					fill: "inherit",
					fillRule: "evenodd",
					transform: "translate(-4 -2)"
				})),
				x = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				E = s("./src/reddit/selectors/categoriesPlacement.ts"),
				f = s("./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.m.less"),
				v = s.n(f);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const j = "geopopular-category-modal",
				S = () => {},
				w = Object(a.c)({
					geoObject: E.a,
					isModalOpen: Object(y.b)(j)
				}),
				N = Object(o.b)(w, e => ({
					toggleModal: () => e(Object(c.i)(j))
				})),
				_ = () => r.a.createElement("div", {
					className: v.a.ModalBody
				}, r.a.createElement(x.a, {
					className: v.a.ChangeIcon
				}));
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.changeGeo = () => {
						this.props.toggleModal(), this.props.sendEvent(Object(b.a)(m.c))
					}
				}
				render() {
					const e = this.props,
						{
							changeButtonClassName: t,
							geoObject: s,
							isModalOpen: n,
							sendEvent: o,
							toggleModal: a
						} = e,
						c = C(e, ["changeButtonClassName", "geoObject", "isModalOpen", "sendEvent", "toggleModal"]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(u.a, O({}, c, {
						rel: "nofollow",
						to: Object(p.a)(m.c)
					}), r.a.createElement(g, {
						className: v.a.Icon
					}), " ", s), r.a.createElement("button", {
						className: Object(i.a)(v.a.ChangeButton, t),
						onClick: this.changeGeo
					}, r.a.createElement(x.a, {
						className: v.a.ChangeIcon
					})), n && r.a.createElement(d.a, {
						actionText: Object(h.c)("Got it"),
						headerText: Object(h.c)("Feature is not available now"),
						modalBody: _,
						modalId: j,
						onConfirm: S,
						toggleModal: a
					}))
				}
			}
			t.a = N(Object(l.b)(P))
		},
		"./src/reddit/components/CategoryPickerWidget/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1Le71sZe40-ak2-JlezTO9",
				header: "_1xEfG7rp7vrKfyvMhw4d7B",
				categoryList: "_2TokM04UC_UEG0cmYY5zqV",
				expanded: "H2nL15newZjevdZ9kmsw6",
				categoryLink: "_3p0xqZowgYYjYMOdinU151",
				active: "_1eQr_TkUOm6M6XqM8GTZqp",
				button: "_36EQoGTqXwZI27n50gESaC"
			}
		},
		"./src/reddit/components/CategoryPickerWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => {
				const {
					category: t,
					children: s,
					className: n,
					isActive: c,
					tabIndex: m
				} = e, p = Object(o.a)(d.a.categoryLink, c && d.a.active, n);
				return r.a.createElement("li", null, r.a.createElement(a.a, l({}, t.anchorProps, {
					className: p,
					"data-active": c,
					onMouseDown: () => e.onSendEventClick(t.name),
					tabIndex: m,
					to: t.path || ""
				}), r.a.createElement(i.c, null, s, t.customIcon)))
			};
			var p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/name/index.ts");
			const h = 36;
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isExpanded: !1
					}, this.shouldAutoExpand = () => {
						const {
							categories: e,
							currentCategoryName: t,
							initialNumberOfCategories: s
						} = this.props, {
							isExpanded: n
						} = this.state;
						if (!t || n || !s) return;
						return s < e.findIndex(e => e.name === t) + 1
					}, this.toggleExpanded = () => {
						this.setState(e => ({
							isExpanded: !e.isExpanded
						}), this.props.onMoreLessClick)
					}
				}
				componentDidMount() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				componentDidUpdate() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				renderCategoryList() {
					const {
						categories: e,
						categoryItemClassName: t,
						categoryItemHeight: s = h,
						categoryListContainerClassName: n,
						children: a,
						childrenOffset: i = 0,
						currentCategoryName: c,
						initialNumberOfCategories: l,
						onItemClick: p
					} = this.props, {
						isExpanded: u
					} = this.state, g = !u && l && s * l, x = i + (e ? s * e.length : 0), y = Object(o.a)(d.a.categoryList, u && d.a.expanded), E = e => !(!c || c !== Object(b.f)(e)), f = r.a.createElement("ul", {
						className: y,
						style: {
							height: g || x
						}
					}, a, e && e.map((e, n) => {
						const o = i + n * s;
						return r.a.createElement(m, {
							category: e,
							className: t,
							isActive: E(e.name),
							key: e.id,
							onSendEventClick: p,
							tabIndex: g && o >= g ? -1 : 0
						}, e.name)
					}));
					return r.a.createElement("div", {
						className: Object(o.a)(d.a.categoryListContainer, n)
					}, f)
				}
				render() {
					const {
						buttonClassName: e,
						buttonText: t = "Show",
						categories: s,
						className: n,
						header: a,
						headerClassName: c,
						initialNumberOfCategories: l
					} = this.props, m = s && l && s.length > l, b = m && !this.state.isExpanded ? "".concat(t, " More") : "".concat(t, " Less"), h = Object(o.a)(n, d.a.container);
					return r.a.createElement(p.a, {
						className: h,
						contentOnly: !0
					}, r.a.createElement("div", {
						className: Object(o.a)(d.a.header, c)
					}, r.a.createElement("h2", null, a || r.a.createElement(i.c, null, "Categories"))), this.renderCategoryList(), m && r.a.createElement(u.n, {
						className: Object(o.a)(d.a.button, e),
						onClick: this.toggleExpanded
					}, r.a.createElement(i.c, null, b)))
				}
			}
			t.a = g
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, s) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = s.n(c);
			t.a = e => r.a.createElement(a.b, {
				className: Object(o.a)(e.className, d.a.container, e.text.length > e.maxChars ? d.a.mOverflow : null)
			}, "".concat(e.maxChars - e.text.length, " ").concat(Object(i.c)("Characters")))
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(u),
				h = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				g = s.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(l.t)(),
				E = Object(a.c)({
					isFakeSubreddit: l.y
				}),
				f = Object(o.b)(E),
				v = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(i.a)(e.className, g.a.emptyVerticalVotes)
					}, r.a.createElement(d.d, x({
						key: "u"
					}, t)), e.children, r.a.createElement(d.c, x({
						key: "d"
					}, t)))
				},
				O = () => r.a.createElement(v, null, r.a.createElement("div", {
					className: g.a.emptyScore,
					key: "s"
				}));
			t.b = y(f(e => r.a.createElement("div", {
				className: Object(i.a)(e.className, b.a.classicPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, r.a.createElement(c.b, null, r.a.createElement(O, null)), r.a.createElement("div", {
				className: g.a.mainBody
			}, r.a.createElement("div", {
				className: g.a.thumbnailContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(g.a.thumbnail, Object(m.b)(e))
			})), r.a.createElement("div", {
				className: g.a.content
			}, r.a.createElement("div", {
				key: "a"
			}, r.a.createElement("div", {
				key: "aa",
				className: Object(i.a)(g.a.title, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "ab",
				className: Object(i.a)(g.a.meta, Object(m.b)(e))
			})), r.a.createElement("div", {
				key: "f",
				className: g.a.flatlist
			}, r.a.createElement("div", {
				key: "fa",
				className: Object(i.a)(g.a.flatlistExpando, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "fb",
				className: g.a.flatlistSeparator
			}), r.a.createElement("div", {
				key: "fc",
				className: Object(i.a)(g.a.flatListItemOne, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "fd",
				className: Object(i.a)(g.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/CallToActionButton/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				b = s("./src/reddit/components/Flatlist/index.tsx"),
				h = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/LargePost/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/index.tsx"),
				y = s("./src/reddit/components/ModModeReports/helpers.ts"),
				E = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				f = s("./src/reddit/components/PostContainer/index.tsx"),
				v = s("./src/reddit/components/PostMedia/index.tsx"),
				O = s("./src/reddit/components/PostMeta/index.tsx"),
				C = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				j = s("./src/reddit/components/PostTitle/index.tsx"),
				S = s("./src/reddit/components/PostTopMeta/index.tsx"),
				w = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				N = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				P = s("./node_modules/react-redux/es/index.js"),
				k = s("./node_modules/reselect/es/index.js"),
				T = s("./src/reddit/actions/post.ts"),
				I = s("./src/reddit/actions/tooltip.ts"),
				L = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/contexts/InsideOverlay.tsx"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				R = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/experiments/chatPost.ts"),
				A = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/monthsToMinutes.ts"),
				H = s("./src/reddit/selectors/postFlair.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/user.ts");
			const K = {
					autoplayPref: W.b,
					activeModalId: R.a,
					crosspost: U.c,
					currentUser: W.i,
					isActive: U.g,
					isChatPostExperiment: F.d,
					isCurrentUserProfilePost: U.h,
					isExpanded: U.j,
					isFrontpageHome: V.g,
					isM2MHomeRedirectEnabled: A.c,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(U.o)(e, s)
					},
					language: W.S,
					moderatorPermissions: D.i,
					modModeEnabled: B.O,
					post: U.J,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: H.a,
					showMedia: B.r,
					subredditOrProfile: U.U,
					userIsOp: W.jb,
					flairStyleTemplate: B.Q
				},
				z = (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: r
					} = t;
					return {
						handleVote: t => {
							const s = t === L.a.upvoted ? Object(T.N)(r) : Object(T.o)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(T.L)(r)),
						onOpenReportsDropdown: t => e(Object(I.g)({
							tooltipId: t
						}))
					}
				},
				G = Object(P.b)(() => Object(k.c)(K), z, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var q = s("./src/lib/LRUCache/index.ts");
			const Q = Object(B.t)({
					searchQuery: B.U
				}),
				J = new q.a(250),
				Y = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let n = J.get(s);
						if (void 0 === n) {
							const o = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								a = e.title.split(o);
							for (let e = 1; e < a.length; e += 2) a[e] = r.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, a[e]);
							n = r.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, r.a.Children.toArray(a)), J.set(s, n)
						}
						return n
					}
				},
				Z = Object(P.b)(() => Object(k.c)(K), z, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: Y(s.searchQuery || "")
				}));
			var X = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				se = s.n(te),
				ne = s("./src/reddit/components/ClassicPost/index.m.less"),
				re = s.n(ne);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return me
			}));
			const ae = 16;
			class ie extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: n,
						isMeta: i,
						inSubredditOrProfile: v,
						eventFactory: P,
						first: k,
						flairStyleTemplate: T,
						formatTitle: I,
						isCheckboxSelected: L,
						isCurrentUserProfilePost: M,
						isFrontpage: B,
						isFrontpageHome: R,
						isM2MHomeRedirectEnabled: F,
						isOverlay: A,
						language: D,
						moderatorPermissions: V,
						modModeEnabled: H,
						onClickPost: U,
						onIgnoreReports: W,
						onOpenReportsDropdown: K,
						poll: z,
						post: G,
						redditStyle: q,
						scrollerItemRef: Q,
						showBulkActionCheckbox: J,
						showEditFlair: Y,
						showMedia: Z,
						subredditOrProfile: te,
						toggleCheckbox: ne,
						userIsOp: ie
					} = this.props, de = q ? void 0 : T, le = this.props.crosspost || void 0, me = Object($.a)(V), pe = Object(X.a)(V), ue = H && $.a, be = !!G.media && G.media.type === N.n.RTJSON, he = ie && be, ge = v && !Z, xe = {
						flairStyleTemplate: de,
						post: G,
						inSubredditOrProfile: v,
						isCurrentUserProfilePost: M,
						isOverlay: A,
						shouldShowSubscribeButton: !(B && R),
						subredditOrProfile: te,
						language: D
					}, ye = r.a.createElement(f.a, {
						className: Object(a.a)(se.a.classicPostStyles, re.a.postContainer, Object(ee.a)(this.props), k ? re.a.mFirst : void 0, e),
						isOverlay: A,
						style: Object.assign({}, Object(ee.d)(this.props), Object(ee.b)(this.props.flairStyleTemplate)),
						post: G,
						onClick: U,
						eventFactory: P
					}, Object(g.b)(G, s, J, L, ne, de, q), r.a.createElement(E.a, {
						"data-click-id": "background",
						flairStyleTemplate: de
					}, r.a.createElement(p.a, {
						className: re.a.eventMeta,
						post: G,
						language: D
					}), r.a.createElement("div", {
						className: re.a.mainBody
					}, r.a.createElement("div", {
						className: ge ? re.a.expandoContainer : re.a.thumbnailContainer
					}, !ge && r.a.createElement(_.a, {
						className: re.a.classicThumbnail,
						crosspost: le && G,
						isMeta: i,
						post: le || G,
						redditStyle: q,
						templatePlaceholderImage: de && de.postPlaceholderImage
					}), r.a.createElement(u.a, {
						crosspost: le,
						className: re.a.rightExpando,
						isExpanded: !!n,
						post: G,
						useMediaIcons: !1
					})), r.a.createElement("div", {
						className: re.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(ae, "px")
						}
					}, r.a.createElement(j.c, {
						className: z ? re.a.titleWithPoll : void 0,
						format: I,
						poll: z,
						post: G,
						redditStyle: q,
						size: j.b.Medium,
						titleColor: de && de.postTitleColor,
						isM2MHomeRedirectEnabled: F,
						isOverlay: A
					}, G.source && !le && r.a.createElement(w.a, {
						href: G.source.url,
						isSponsored: G.isSponsored,
						source: G.source
					}, Object(c.a)(G))), r.a.createElement(O.a, oe({
						key: "PostMeta"
					}, xe)), H && me && Object(y.c)(G) && r.a.createElement(x.a, {
						language: D,
						onIgnoreReports: W,
						reportable: G
					}), r.a.createElement("div", {
						className: re.a.spacer
					}), G.source && G.source.url && G.isSponsored && r.a.createElement(d.a, {
						className: re.a.adLinkWrapper
					}, r.a.createElement(w.a, {
						href: G.source.url.replace(o.a.redditUrl, ""),
						isSponsored: G.isSponsored,
						source: G.source
					}, G.source.displayText), G.callToAction && r.a.createElement(l.a, {
						href: G.source.url.replace(o.a.redditUrl, ""),
						isSponsored: G.isSponsored,
						source: G.source
					}, G.callToAction)), r.a.createElement("div", {
						className: re.a.flatlistContainer
					}, r.a.createElement(u.a, {
						className: re.a.leftExpando,
						crosspost: le,
						isExpanded: !!n,
						post: G,
						useMediaIcons: !1
					}), r.a.createElement(m.a, {
						className: re.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: de,
						model: G,
						onVoteClick: s
					}), r.a.createElement(b.a, {
						className: re.a.flatlistSeparator
					}), r.a.createElement(b.c, {
						className: re.a.flatlist,
						currentUser: t,
						hasModFlairPerms: pe,
						hasModPostPerms: me,
						isOverlay: !!A,
						language: D,
						modModeEnabled: H,
						onIgnoreReports: W,
						onOpenReportsDropdown: K,
						post: G,
						showEditPost: he,
						showEditFlair: Y,
						tooltipType: A ? S.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(C.h)({
							editPost: !ue,
							save: !ue,
							hide: !ue,
							report: !ue
						})
					})), r.a.createElement(h.d, {
						postId: G.id
					}))), ce(G, Q, n)));
					return r.a.createElement(r.a.Fragment, null, ye)
				}
			}
			const ce = (e, t, s) => s ? e.crosspostRootId ? r.a.createElement("div", {
					className: re.a.crosspostMediaWrapper
				}, de(e, t)) : de(e, t) : null,
				de = (e, t) => r.a.createElement(v.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				le = Object(i.a)(ie),
				me = (e => Q(Z(e)))(le);
			t.b = (e => G(Object(M.b)(e)))(le)
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				thumbnailContainer: "_3cwq18vPueuAxRSrd1foNB",
				mainBody: "_1jxw1P65tWXN5u8kVHlX-n",
				content: "_2KR7fLQx_7rIv8QaoeXKZw",
				emptyScore: "_6w7aNMh3t6UMe07Q6oWFE",
				emptyVerticalVotes: "_1Xs9oeessHWcuF0VTVxRnl",
				thumbnail: "_2XOZ5bYpLdswvBAYUNa-ly",
				title: "n3AVRrP7HOfc0gAtGFpfv",
				meta: "_1BoNlCqTsaeLXkuZbADxyl",
				flatlist: "_1IgQuZI8L6A0NcShWmf08y",
				flatlistExpando: "_2AMaFX8Gwojg29X4_nOnaL",
				flatlistSeparator: "oljBm1Q059l3l84VHO9VM",
				flatListItemOne: "_2xeK0Acj_38O5kqiHgp7VC",
				flatListItemTwo: "_3WphuhFsMSKk2tQyD3fZeI"
			}
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "k", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "l", (function() {
				return d
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "n", (function() {
				return p
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "p", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = 500,
				r = 100,
				o = 5e3,
				a = 5e4,
				i = 0,
				c = 1440,
				d = 36600,
				l = 1e9,
				m = {
					Disabled: "disabled",
					"Mods only": "modonly",
					Anyone: "anyone"
				},
				p = ["Wiki is disabled for all users except mods", "Only mods, approved wiki contributors, or those on a page's edit list may edit", "Anyone who can submit to the community may edit"],
				u = {
					Any: "any",
					"Links only": "link",
					"Text posts only": "self"
				},
				b = ["Any post type is allowed", "Only links to external sites are allowed", "Only text posts are allowed"],
				h = {
					Low: "low",
					"High (default)": "high",
					All: "all"
				},
				g = {
					"Low (default)": "low",
					High: "high",
					All: "all"
				},
				x = {
					"none (recommended)": null,
					best: "confidence",
					old: "old",
					top: "top",
					"q&a": "qa",
					"live (beta)": "live",
					controversial: "controversial",
					new: "new"
				},
				y = (e, t) => Object.keys(e).find(s => e[s] === t)
		},
		"./src/reddit/components/CommunityType/index.m.less": function(e, t, s) {
			e.exports = {
				nsfwText: "_1x9diBHPBP-hL1JiwUwJ5J",
				privateIcon: "_2B0OHMLKb9TXNdd9g5Ere-",
				quarantinedIcon: "_1xKxnscCn2PjBiXhorZef4",
				employeesIcon: "_1LLqoNXrOsaIkMtOuTBmO5",
				restrictedIcon: "QB2Yrr8uihZVRhvwrKuMS",
				TypeLabel: "_3w_KK8BUvCMkCPWZVsZQn0",
				typeLabel: "_3w_KK8BUvCMkCPWZVsZQn0"
			}
		},
		"./src/reddit/components/CommunityType/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/Flair/index.tsx"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/IconTooltip/index.tsx"),
				l = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				p = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				u = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				b = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				h = s("./src/reddit/models/Flair/index.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				x = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/CommunityType/index.m.less"),
				f = s.n(E);
			const v = s("./src/lib/lessComponent.tsx").a.span("TypeLabel", f.a),
				O = Object(i.c)({
					restrictions: y.o
				}),
				C = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(a.b, {
					flair: {
						type: h.f.Nsfw,
						text: "nsfw"
					}
				}), r.a.createElement("span", {
					className: f.a.nsfwText
				}, Object(l.c)("Adult content"))),
				j = () => r.a.createElement(v, null, r.a.createElement(b.a, {
					className: f.a.quarantinedIcon
				}), r.a.createElement("span", null, Object(l.c)("Quarantined"))),
				S = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, e.subreddit.isNSFW && r.a.createElement(C, null)), r.a.createElement(v, {
					className: e.className
				}, e.description ? r.a.createElement(d.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, r.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && r.a.createElement(j, null)),
				w = Object(o.b)(O);
			t.a = w(e => {
				let {
					className: t,
					iconClassName: s,
					restrictions: n = x.e.Post,
					textClassName: o,
					subreddit: a
				} = e;
				switch (a.type) {
					case g.b.Restricted:
						return r.a.createElement(S, {
							className: t,
							icon: r.a.createElement(p.a, {
								className: Object(c.a)(f.a.restrictedIcon, s)
							}),
							text: Object(l.c)("Restricted"),
							textClassName: o,
							description: Object(x.g)(n),
							subreddit: a
						});
					case g.b.Private:
						return r.a.createElement(S, {
							className: t,
							icon: r.a.createElement(u.a, {
								className: Object(c.a)(f.a.privateIcon, s)
							}),
							text: Object(l.c)("Private"),
							textClassName: o,
							description: Object(l.c)("Only approved users can view and submit to this community"),
							subreddit: a
						});
					case g.b.EmployeesOnly:
						return r.a.createElement(S, {
							className: t,
							icon: r.a.createElement(m.a, {
								className: Object(c.a)(f.a.employeesIcon, s)
							}),
							text: a.allowContractors ? Object(l.c)("Employees & Contractors") : Object(l.c)("Employees Only"),
							textClassName: o,
							subreddit: a
						});
					default:
						return r.a.createElement(r.a.Fragment, null, a.isQuarantined && r.a.createElement(j, null), a.isNSFW && r.a.createElement(C, null))
				}
			})
		},
		"./src/reddit/components/CompactPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				emptyScore: "_3RRgbzXvoZ4MUYm45lAqp7",
				emptyVotes: "_2rSb53hAOWG9j6R_ToxoSJ",
				wrapper: "_2wuOxz4--LcoxCYSrpCBlx",
				expandoContainer: "_3CIl2qTD30RwYsMAGO2Y2S",
				expando: "_2UCpUVZ4aSncQhvkrQW_0i",
				subredditIconContainer: "_2IJnSguizdehDk_JnTKrdK",
				topLine: "_1OQE_XsSHzM7AtjVQahjoI",
				title: "_28eZmJsl2bogBZ2KPmeoFO",
				meta: "_24dJJDh8muEbehYysONmV1",
				comments: "_2-iJVRFJK-xC7a7xgBF-T5",
				ellipsis: "_1IFRAIwzfwChKq85FhLG69",
				flatList: "_3HxvQvODjYEHa-X5AuQinY"
			}
		},
		"./src/reddit/components/CompactPost/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(u),
				h = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
				g = s.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(l.t)(),
				E = Object(a.c)({
					isFakeSubreddit: l.y
				}),
				f = Object(o.b)(E),
				v = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return r.a.createElement("div", {
						className: g.a.emptyVotes
					}, r.a.createElement(d.d, x({
						key: "u"
					}, t)), r.a.createElement("div", {
						key: "s",
						className: g.a.emptyScore
					}), r.a.createElement(d.c, x({
						key: "d"
					}, t)))
				},
				O = e => r.a.createElement(c.a, {
					className: Object(m.a)(e)
				}),
				C = e => r.a.createElement("div", {
					className: g.a.flatList
				}, r.a.createElement("div", {
					className: Object(i.a)(g.a.comments, Object(m.b)(e))
				}), r.a.createElement("div", {
					className: Object(i.a)(g.a.ellipsis, Object(m.b)(e))
				}));
			t.a = y(f(e => r.a.createElement("div", {
				className: Object(i.a)(e.className, b.a.compactPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, r.a.createElement("div", {
				className: g.a.wrapper
			}, r.a.createElement(v, x({
				key: "c"
			}, e)), r.a.createElement("div", {
				key: "a",
				className: g.a.expandoContainer
			}, r.a.createElement("div", {
				className: Object(i.a)(g.a.expando, Object(m.a)(e))
			})), r.a.createElement("div", {
				key: "d",
				className: g.a.subredditIconContainer
			}, r.a.createElement(O, {
				isLoading: !1
			})), r.a.createElement("div", {
				key: "e",
				className: g.a.topLine
			}, r.a.createElement("div", {
				key: "ea",
				className: Object(i.a)(g.a.title, Object(m.b)(e))
			}), r.a.createElement("div", {
				key: "eb",
				className: Object(i.a)(g.a.meta, Object(m.b)(e))
			})), r.a.createElement(C, x({
				key: "f"
			}, e))))))
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, s) {
			e.exports = {
				hideAboveSmallTablet: "FX_aWE8xMirpzniJDh7I9",
				verticalVotes: "WAapGmF_gr09J509Af-gC",
				responsiveExpandoButton: "_3gazhzxd2iBGYb2k67_HTw",
				mHideAboveSmallTablets: "_2zV_ARVPrYN10xmbbb_4Lu",
				responsiveMeta: "_1xomvNxK4aHGoGa-YDw1Mc",
				hideBelowSmallTablet: "z_7pbLL4hZp6ikYkq0prE",
				horizontalVotes: "_37nbKm3ee5NGx6e-LXErLD",
				mHideBelowSmallTablets: "_3x_hdVQw5uJh6xeAGoZock",
				postTopMeta: "_1ghZRP5m5xDLh0up1rFt0e",
				commentsLink: "Nz0lkWnnj2V_4iBKE0WL7",
				adLinkWrapper: "_4Dt8djtbHlJ5uCZDX_SeV",
				content: "_1B7SUGHK0QDoHimxX2a9D0",
				leftRail: "_2r9FABr2qYEUDyZoenhn6N",
				bulkActionCheckbox: "_44ehKZ_pl1NGGaaTYouZR",
				subredditIcon: "_1kWbgdOrvSeXIZZRIw4uBS",
				topLine: "_2ZjElFi3ORaU3VPrwmdoCp",
				postBadges: "_126a2ACB41algqMEwA34TF",
				flatList: "_3jwri54NGT-SRatPIZYiMo",
				expandedContentWrapper: "_12wy0ZFFaS3a49145uXWXt",
				crosspostMediaWrapper: "_2fCIreZsKBNS3esgsKKksM",
				compactWrapper: "YA9IzN0YR-G5_oD5EUydl",
				compactPostRow: "WnMeTcero48dKo501T-19",
				donationAmount: "_1TjU-e4dgCSlbuHHatC0G9",
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				chain: "_1el-fLKTUXg-19pIbGUHgk",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = (s("./node_modules/react-router-dom/esm/react-router-dom.js"), s("./node_modules/reselect/es/index.js")),
				i = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/models/Vote/index.ts"),
				E = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/actions/postFlair.ts"),
				v = s("./src/reddit/actions/tooltip.ts"),
				O = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/selectors/postFlair.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				P = s("./src/reddit/components/AwardBadges/index.tsx"),
				k = s("./src/reddit/components/CallToActionButton/index.tsx"),
				T = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				I = s("./src/reddit/components/CommentsLink/index.tsx"),
				L = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				M = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				B = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				R = s("./src/reddit/components/ExpandoButton/index.tsx"),
				F = s("./src/reddit/components/Flatlist/index.tsx"),
				A = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				D = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				V = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				H = s("./src/reddit/components/ModModeReports/index.tsx"),
				U = s("./src/reddit/components/ModModeReports/helpers.ts"),
				W = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				K = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				z = s("./src/reddit/components/PostBadges/index.tsx"),
				G = s("./src/reddit/components/PostContainer/index.tsx"),
				q = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Q = s("./src/reddit/components/PostLeftRail/index.tsx"),
				J = s("./src/reddit/components/PostMedia/index.tsx"),
				Y = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Z = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				X = s("./src/reddit/components/PostTitle/index.tsx"),
				$ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ee = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				te = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				se = (s("./src/reddit/components/SubredditIcon/index.tsx"), s("./src/reddit/components/VerticalVotes/index.tsx")),
				ne = s("./src/reddit/components/ViewReportsDropdown/index.tsx"),
				re = s("./src/reddit/contexts/InsideOverlay.tsx"),
				oe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ae = s("./src/reddit/controls/Checkbox/index.tsx"),
				ie = s("./src/reddit/controls/MetaData/index.tsx"),
				ce = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				de = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				le = s("./src/reddit/helpers/postEvent.ts"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				be = s.n(ue),
				he = s("./src/reddit/components/CompactPost/index.m.less"),
				ge = s.n(he);

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ye = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const Ee = e => {
					var {
						isCompact: t
					} = e, s = ye(e, ["isCompact"]);
					return r.a.createElement(R.a, xe({
						className: Object(c.a)(ge.a.responsiveExpandoButton, {
							[ge.a.mHideAboveSmallTablets]: !!t,
							[ge.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				fe = Object(o.b)(() => Object(a.c)({
					activeModalId: O.a,
					crosspost: w.c,
					currentUser: N.i,
					flairStyleTemplate: oe.Q,
					isActive: w.g,
					isExpanded: w.j,
					language: N.S,
					layout: oe.M,
					moderatorPermissions: j.i,
					modModeEnabled: oe.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					post: w.J,
					showEditFlair: S.a,
					subredditOrProfile: w.U,
					userIsOp: N.jb,
					isInAdLeftSidebarExperiment: C.a
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: r
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: n,
								selectedTemplateId: r
							} = t;
							return e(Object(f.h)({
								post: s,
								previewFlair: n,
								selectedTemplateId: r
							}))
						},
						handleVote: t => {
							const s = t === y.a.upvoted ? Object(E.N)(r) : Object(E.o)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(E.L)(r)),
						onOpenReportsDropdown: t => e(Object(v.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: n,
							selectedTemplateId: r
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: r
						})
					}
				}));
			class ve extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: n,
						currentUser: o,
						eventFactory: a,
						flairStyleTemplate: d,
						handleVote: l,
						isCheckboxSelected: y = !1,
						isCommentsPage: E,
						isCommentPermalink: f,
						isExpanded: v,
						isInAdLeftSidebarExperiment: O,
						isOverlay: C,
						isProfilePostListing: j,
						inSubredditOrProfile: S = !1,
						language: w,
						layout: N,
						moderatorPermissions: R,
						modModeEnabled: J,
						onClickPost: te,
						onFlairChanged: re,
						onIgnoreReports: oe,
						poll: ie,
						post: ue,
						subredditOrProfile: he,
						userIsOp: xe,
						hideModTools: ye,
						scrollerItemRef: Ee,
						showBulkActionCheckbox: fe,
						showEditFlair: ve,
						toggleCheckbox: Ce,
						tooltipType: we,
						sendEvent: Ne
					} = this.props, _e = !!ue.media && ue.media.type === g.n.RTJSON, Pe = xe && _e, ke = Object(q.b)(ue.id, C), Te = Object(p.a)(R), Ie = Object(de.a)(R), Le = "-mod-actions-menu-".concat(ue.id), Me = !!o && Object(x.f)(o) === ue.author, Be = Object(U.c)(ue), Re = Object(A.a)("View--Reports", ue.id, we), Fe = Object(U.a)(ue), Ae = !(C || E || f), De = e => Ne(Object(h.f)(ue.id, e)), Ve = r.a.createElement(G.a, {
						className: Object(c.a)(be.a.compactPostStyles, ge.a.postContainer, Object(b.a)(this.props), t),
						isOverlay: C,
						style: Object.assign({}, Object(b.d)(this.props), Object(b.b)(this.props.flairStyleTemplate)),
						post: ue,
						onClick: te,
						eventFactory: a
					}, r.a.createElement("div", {
						className: ge.a.compactWrapper
					}, r.a.createElement("div", {
						className: ge.a.leftRailWrapper
					}, r.a.createElement("div", {
						className: ge.a.leftRail,
						style: {
							borderColor: Object(Q.c)({
								isRemoved: !!ue.bannedBy,
								isReported: Object(u.a)(ue),
								isSponsored: ue.isSponsored,
								theme: this.props.theme,
								isInAdLeftSidebarExperiment: O
							})
						}
					}, fe && r.a.createElement(ae.a, {
						className: ge.a.bulkActionCheckbox,
						isCheckboxSelected: y,
						toggleCheckbox: Ce
					}), r.a.createElement(se.a, {
						className: ge.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: d,
						model: ue,
						onVoteClick: l
					}), r.a.createElement(L.a, {
						className: ge.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: d,
						model: ue,
						onVoteClick: l
					}))), r.a.createElement(K.a, {
						className: Object(c.a)(ge.a.content, {
							[ge.a.isEvent]: Object(le.a)(ue)
						}),
						"data-click-id": "background",
						flairStyleTemplate: d
					}, r.a.createElement(B.a, {
						isCompactMode: !0,
						language: w,
						post: ue
					}), r.a.createElement("div", {
						className: ge.a.compactPostRow
					}, !ye && je(ue, n, v, !1), !S && !ue.isSponsored && r.a.createElement(D.h, {
						type: ue.belongsTo.type,
						id: ue.belongsTo.id
					}), r.a.createElement("div", {
						className: ge.a.topLine,
						"data-click-id": "body"
					}, r.a.createElement(X.c, {
						post: ue,
						poll: ie,
						size: X.b.Small,
						titleColor: d && d.postTitleColor,
						isOverlay: !1
					}), Se(ue, he, w), r.a.createElement($.d, {
						className: ge.a.postTopMeta,
						flairStyleTemplate: d,
						language: w,
						post: ue,
						showSub: !!he && !S && !ue.isSponsored,
						subredditOrProfile: he
					}), r.a.createElement(z.a, {
						className: ge.a.postBadges,
						displayText: he ? he.displayText : null,
						inSubredditOrProfile: S,
						language: w,
						post: ue
					}), he && r.a.createElement(M.a, {
						className: ge.a.donationAmount,
						contentId: ue.id,
						subredditId: he.id
					}), r.a.createElement(P.a, {
						isOverlay: C,
						tooltipType: we,
						thing: ue
					})), Ae && r.a.createElement("div", null, r.a.createElement(T.a, {
						className: ge.a.liveDiscussionIcon,
						isMod: Te,
						postId: ue.postId
					})), r.a.createElement("div", {
						className: ge.a.flatList
					}, r.a.createElement(I.a, {
						className: ge.a.commentsLink,
						hasModPostPerms: Te,
						isCommentsPage: E,
						isCommentPermalink: f,
						isOverlay: C,
						postId: ue.id,
						modModeEnabled: J,
						numComments: ue.numComments,
						type: m.g.Compact
					}), r.a.createElement(W.a, {
						className: ge.a.modToolsFlatlist,
						isOverlay: !1,
						language: w,
						layout: N,
						modModeEnabled: J,
						post: ue,
						sendEvent: Ne,
						showIconsOnly: !0
					}), Te && r.a.createElement(V.a, {
						dropdownId: Le,
						onClick: () => De("post_mod_action_menu")
					}, r.a.createElement(F.b, null), r.a.createElement(Y.a, {
						canEditFlair: Ie && ve,
						hasModPostPerms: Te,
						isOverlay: !1,
						isPostAuthor: Me,
						language: w,
						modModeEnabled: J,
						post: ue,
						tooltipId: Le
					})), Te && Be && !J && r.a.createElement(ee.c, {
						text: "".concat(Fe),
						onClick: () => {
							this.props.onOpenReportsDropdown(Re), De("post_report_menu")
						},
						id: Re
					}, r.a.createElement(ne.a, {
						model: ue,
						onIgnoreReports: () => {
							oe(), De(ue.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Re
					}), ue.ignoreReports ? r.a.createElement(me.a, null) : r.a.createElement(pe.a, null)), r.a.createElement(Z.g, {
						currentProfileName: s,
						isCommentsPage: E,
						isOverlay: !1,
						isProfilePostListing: j,
						layout: N,
						permalink: ue.permalink,
						postId: ue.postId,
						sendEvent: Ne,
						showEditPost: Pe,
						showEditFlair: ve,
						dropdownId: "".concat(ue.id, "-overflow-menu"),
						useFlatlistBreakpoints: Object(Z.h)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !ye && je(ue, n, v, !0))), ue.source && ue.source.url && ue.isSponsored && r.a.createElement(_.a, {
						className: ge.a.adLinkWrapper
					}, r.a.createElement(ce.a, {
						href: ue.source.url.replace(i.a.redditUrl, ""),
						isSponsored: ue.isSponsored,
						source: ue.source
					}, ue.source.displayText), ue.callToAction && r.a.createElement(k.a, {
						href: ue.source.url.replace(i.a.redditUrl, ""),
						isSponsored: ue.isSponsored,
						source: ue.source,
						isNotCardView: !0
					}, ue.callToAction)), J && Te && Be && r.a.createElement("div", {
						className: ge.a.compactPostRow
					}, r.a.createElement(H.a, {
						language: w,
						onIgnoreReports: oe,
						reportable: ue
					})), r.a.createElement(D.d, {
						postId: ue.id
					}))), v && r.a.createElement(Oe, {
						post: ue,
						scrollerItemRef: Ee,
						flairStyleTemplate: d
					}), e === ke && r.a.createElement(q.a, {
						flairs: ue.flair,
						subredditId: ue.belongsTo.id,
						modalId: ke,
						onFlairChanged: re
					}));
					return r.a.createElement(r.a.Fragment, null, Ve)
				}
			}
			const Oe = e => r.a.createElement(K.a, {
					className: Object(c.a)(e.className, ge.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? r.a.createElement("div", {
					className: ge.a.crosspostMediaWrapper
				}, Ce(e.post, e.scrollerItemRef)) : Ce(e.post, e.scrollerItemRef)),
				Ce = (e, t) => r.a.createElement(J.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				je = (e, t, s, n) => r.a.createElement(Ee, {
					crosspost: t,
					isCompact: n,
					isExpanded: s,
					post: e,
					useMediaIcons: !0
				}),
				Se = (e, t, s) => r.a.createElement("div", {
					className: ge.a.responsiveMeta
				}, r.a.createElement(ie.b, {
					isScoreHidden: e.scoreHidden,
					language: s,
					score: e.score
				}), r.a.createElement(ie.c, null), Object(ie.d)(e.numComments, s), r.a.createElement(ie.c, null), t && r.a.createElement("a", {
					href: t.url
				}, r.a.createElement(ie.a, null, t.displayText)), e.isSponsored && [r.a.createElement(te.a, {
					key: "label"
				}), r.a.createElement(ie.c, {
					key: "separator"
				})], !e.isSponsored && r.a.createElement(ie.a, null, " Posted by "), r.a.createElement($.b, {
					post: e
				}));
			t.a = fe(Object(l.b)(Object(re.b)(Object(d.a)(ve))))
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/components/IdCard/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				u = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				h = s("./src/reddit/selectors/subreddit.ts");
			const g = Object(a.c)({
				restrictions: h.o
			});
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						this.props.sendEvent(Object(p.a)(this.props.eventSource)), this.props.openContributorRequestModal()
					}
				}
				render() {
					const e = this.props.smallButton ? m.f : c.c;
					return r.a.createElement(e, {
						className: this.props.className,
						onClick: this.onRequest
					}, this.props.eventSource === b.b.Comment ? Object(u.c)("Request to comment") : Object(u.c)("Request to post"))
				}
			}
			t.a = Object(o.b)(g, e => ({
				openContributorRequestModal: () => e(Object(i.i)(l.a.CONTRIBUTOR_REQUEST))
			}))(Object(d.b)(x))
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/LRUCache/index.ts");
			class a {
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
				addListeners(e) {
					this.listenerMap[e] || (this.listenerMap[e] = []);
					for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) s[n - 1] = arguments[n];
					this.listenerMap[e].push(...s)
				}
				removeListeners(e) {
					for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) s[n - 1] = arguments[n];
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const r = s.length,
						o = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !s.includes(e)), this.listenerMap[e].length - o === r
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
			var i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts");
			var l = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => s.e("CommunityCrossPollinationFocusedVertical").then(s.bind(null, "./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/FocusedVerticals/CommunityDescWithPosts/index.tsx"))).then(e => e.default),
					LoadingComponent: () => null
				}),
				m = s("./src/reddit/constants/page.ts");
			s.d(t, "a", (function() {
				return u
			}));
			const p = new o.a(50),
				u = e => {
					const {
						numInstance: t,
						layout: s,
						listingKey: n,
						listingPosition: o
					} = e, c = "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(n);
					let d = p.get(c);
					if (d) return d;
					const u = new a;
					return d = {
						estHeight: i.c,
						id: "focused-vertical-recommendation-".concat(t, "-").concat(s, "-").concat(n),
						trackOnEnteredViewport() {
							u.publish(i.b)
						},
						render: () => r.a.createElement(l, {
							listingPosition: o,
							numInstance: t,
							listingKey: n,
							listingName: m.c,
							pubsub: u
						})
					}, p.set(c, d), d
				}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const o = Object(n.a)({
				getComponent: () => Object(r.a)(() => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("Explore~InFeedChaining"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = o
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				c = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				d = s.n(c);
			t.a = e => r.a.createElement("div", {
				className: Object(o.a)(Object(i.c)(e.exploreV2Variant) ? d.a.oldContainer : e.exploreV2Variant ? Object(o.a)(d.a.smallContainer, a.b) : d.a.heroContainer, e.className)
			}, r.a.createElement("div", {
				className: Object(o.a)(d.a.header, e.headerClassName)
			}, e.header), r.a.createElement("div", {
				className: Object(o.a)(e.hidePadding ? d.a.bodyHidePadding : d.a.body, e.bodyClassName)
			}, e.children))
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/upperFirst.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/config.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/isFakeSubreddit/index.ts"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/i18n/utils.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/components/EmptySubreddit.m.less"),
				g = s.n(h),
				x = s("./src/lib/lessComponent.tsx");
			const y = x.a.div("PrimaryText", g.a),
				E = x.a.div("SecondaryText", g.a),
				f = x.a.div("MainContentWrapper", g.a),
				v = x.a.div("MainContent", g.a),
				O = x.a.wrapped(b.a, "BackgroundPlaceholder", g.a),
				C = x.a.wrapped(u.h, "SubmitLink", g.a),
				j = x.a.img("SnooImg", g.a),
				S = x.a.div("EmptyHomepage", g.a),
				w = e => {
					switch (e) {
						case c.N.RISING:
							return Object(m.c)("Create a new post and take all the glory");
						case c.N.TOP:
						case c.N.CONTROVERSIAL:
							return null;
						default:
							return Object(m.c)("Be the first to till this fertile land.")
					}
				},
				N = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const n = w(s);
					return a.a.createElement(v, null, a.a.createElement(y, null, (e => {
						switch (e) {
							case c.N.RISING:
								return Object(m.c)("Looks like nothing is rising fast enough in this subreddit");
							case c.N.TOP:
							case c.N.CONTROVERSIAL:
								return Object(m.c)("No posts were found using the ".concat(r()(e), " sort. Try changing the sort."));
							default:
								return Object(m.c)("There are no posts in this subreddit")
						}
					})(s)), t && !Object(d.a)(t) && !!n && a.a.createElement(a.a.Fragment, null, a.a.createElement(E, null, w(s)), a.a.createElement(C, {
						to: "/r/".concat(t, "/submit")
					}, a.a.createElement(l.c, null, "Add a post"))))
				},
				_ = () => a.a.createElement(v, null, a.a.createElement(j, {
					src: "".concat(i.a.assetPath, "/img/snoo_discovery@1x.png")
				}), a.a.createElement(y, null, a.a.createElement(l.c, null, "Reddit gets better when you join communities, so find some that you’ll love!")), a.a.createElement(C, {
					to: "/r/popular"
				}, a.a.createElement(l.c, null, "Browse Popular Posts")));
			t.a = x.a.wrapped(e => a.a.createElement(S, null, a.a.createElement(O, {
				isLoading: !1,
				layout: p.g.Classic
			}), a.a.createElement(f, null, e.subreddit ? a.a.createElement(N, e) : a.a.createElement(_, null))), "Component", g.a)
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const b = i.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					language: n,
					post: i
				} = e;
				if (!Object(m.a)(i)) return null;
				const p = i && i.eventInfo,
					h = Object(l.a)(i),
					g = p && Object(a.c)(p.eventStart, p.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, r.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					language: n,
					post: i
				}), !h && g && r.a.createElement(d.a, {
					className: u.a.eventFollowButton,
					post: i,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/eventTools/index.ts"),
				a = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				i = s("./src/lib/constants/index.ts");

			function c(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = s("./src/reddit/icons/fonts/Live/index.tsx"),
				p = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.span("PostEventFutureText", u.a),
				g = b.a.span("PostEventPastText", u.a),
				x = b.a.span("PostEventNowText", u.a),
				y = b.a.span("Container", u.a),
				E = b.a.wrapped(l.a, "CalendarIcon", u.a),
				f = b.a.wrapped(m.a, "LiveIcon", u.a),
				v = b.a.div("LoadingState", u.a);
			class O extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						language: t,
						post: s
					} = this.props, {
						eventInfo: n
					} = s;
					if (!n) return null;
					const {
						eventEnd: l,
						eventIsLive: m,
						eventStart: p
					} = n, u = Object(o.e)(p, l);
					let b, O;
					if (this.state.mounted || u === o.a.Live) b = function(e, t, s, n) {
						const r = Object(o.e)(e, t),
							d = new Date(e * i.Bb);
						let l;
						if (r === o.a.Live || n) return Object(a.a)(s, "posts.event.inProgress");
						r === o.a.Future ? l = Object(o.d)(e) ? Object(a.a)(s, "posts.event.today") : Object(o.b)(e) >= 5 ? c(d, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(d, s) : r === o.a.Past && (l = Object(o.d)(e) ? Object(a.a)(s, "posts.event.today") : c(d, s));
						const m = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(d, s);
						return "".concat(l, " @ ").concat(m)
					}(p, l, t, m);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						b = r.a.createElement(v, {
							className: e
						})
					}
					if (m) O = r.a.createElement(x, null, r.a.createElement(f, null), b);
					else if (u === o.a.Future) O = r.a.createElement(h, null, r.a.createElement(E, null), b);
					else {
						if (u !== o.a.Past) return null;
						O = r.a.createElement(g, null, r.a.createElement(E, null), b)
					}
					return r.a.createElement(y, {
						className: e
					}, O)
				}
			}
			t.a = O
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				g = s("./src/reddit/icons/fonts/helpers.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				y = s.n(x);
			var E = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(g.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", y.a),
				f = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				v = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				O = s("./src/reddit/icons/fonts/Link/index.tsx"),
				C = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				S = s("./src/reddit/icons/fonts/Text/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/components/ExpandoButton/index.m.less"),
				_ = s.n(N);
			const P = Object(o.b)(null, (e, t) => ({
					toggle: () => e(Object(l.p)({
						postId: t.post.id
					}))
				})),
				k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(i.a)(_.a.icon, _.a.hideOnHover);
					if (t) return r.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case w.n.GIFVIDEO:
							return r.a.createElement(v.a, {
								className: s
							});
						case w.n.IMAGE:
							return r.a.createElement(j.a, {
								className: s
							});
						case w.n.TEXT:
						case w.n.RTJSON:
							return r.a.createElement(S.a, {
								className: s
							});
						case w.n.VIDEO:
							return r.a.createElement(f.a, {
								className: s
							});
						case w.n.EMBED:
						default:
							return r.a.createElement(O.a, {
								className: s
							})
					}
				};
			t.a = P(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isExpanded: o,
					post: l,
					toggle: u,
					useMediaIcons: g
				} = e, x = s || l, y = n && !!s;
				return x.media && !(("rtjson" === x.media.type || "text" === x.media.type) && !Object(p.a)(x)) ? r.a.createElement("button", {
					"aria-expanded": o,
					"aria-haspopup": !0,
					"aria-label": Object(d.c)("Expand content"),
					className: Object(i.a)(t, _.a.outer),
					"data-click-id": o ? "expando_close" : "expando_open",
					onClick: u
				}, o ? r.a.createElement(b.a, {
					className: _.a.icon
				}) : g ? r.a.createElement(r.a.Fragment, null, k(x.media && x.media.type, y), r.a.createElement(h.a, {
					className: Object(i.a)(_.a.icon, _.a.showOnHover)
				})) : r.a.createElement(h.a, {
					className: _.a.icon
				})) : x.source && x.source.url ? r.a.createElement(m.a, {
					"aria-label": Object(d.c)("Open external content"),
					className: Object(i.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					href: x.source.url,
					isSponsored: l.isSponsored,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(C.a, {
					className: Object(i.a)(_.a.icon, _.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": Object(d.c)("View content"),
					className: Object(i.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(x.permalink),
					rel: "nofollow"
				}, r.a.createElement(E, {
					className: _.a.icon
				}))
			})
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1VJk0sTYGQyG0P4nqFVu9v",
				container: "_1VJk0sTYGQyG0P4nqFVu9v",
				Circle: "HpLkUWI5bwugRHhQqw2dy",
				circle: "HpLkUWI5bwugRHhQqw2dy",
				LiveLabel: "_1TpaKvFUjcIRuxRj37oP3m",
				liveLabel: "_1TpaKvFUjcIRuxRj37oP3m",
				ViewCount: "_3bktW9VjGiBE1xME2TqZB7",
				viewCount: "_3bktW9VjGiBE1xME2TqZB7",
				Title: "_3p01VQUbuFFSnavk8xkFh7",
				title: "_3p01VQUbuFFSnavk8xkFh7",
				OutboundLink: "_3CbMtQTkCfQvly2NbLKvkR",
				outboundLink: "_3CbMtQTkCfQvly2NbLKvkR",
				Description: "_3ddCMJofyzb6-UWHgIC9Sd",
				description: "_3ddCMJofyzb6-UWHgIC9Sd",
				AnnouncementContainer: "PSG6gLueWddB1kqvaOxoT",
				announcementContainer: "PSG6gLueWddB1kqvaOxoT",
				AnnouncementTitle: "_3d6jHnvibW6_495D6WkUop",
				announcementTitle: "_3d6jHnvibW6_495D6WkUop",
				AnnouncementDescription: "_1lbiRTrvKfY8bf0xki99ZU",
				announcementDescription: "_1lbiRTrvKfY8bf0xki99ZU",
				Button: "j5ti73p7EAjBJvJlSjppe",
				button: "j5ti73p7EAjBJvJlSjppe",
				CloseButton: "_29ji6lMZpwWMBLRk4eMGw-",
				closeButton: "_29ji6lMZpwWMBLRk4eMGw-",
				iconStyles: "_2E0bnlMJwNjmvW3Qsu8PlF"
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				u = s("./src/reddit/helpers/trackers/banners.ts"),
				b = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/icons/svgs/Circle/index.tsx"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				y = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				E = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				f = s("./src/reddit/icons/svgs/Snoo/index.tsx");
			var v = e => o.a.createElement("svg", {
					className: e.className,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("g", null, o.a.createElement("g", {
					fill: "inherit"
				}, o.a.createElement("polygon", {
					points: "0,40 14.3,29.2 10.8,25.7"
				}), o.a.createElement("path", {
					d: "M23,27.6l10.8-10.8c2,1.1,4.5,0.8,6.2-0.9L24.1,0c-1.7,1.7-2,4.2-0.9,6.2L12.4,17c-2-1.1-4.5-0.8-6.2,0.9l15.9,15.9C23.8,32.1,24.1,29.6,23,27.6z"
				})))),
				O = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				C = s("./src/reddit/layout/row/Inline/index.tsx"),
				j = s("./src/reddit/models/Live/index.ts");
			var S = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/FeaturedLiveEntrypoint/index.m.less"),
				N = s.n(w);
			const _ = "".concat(n.a.redditUrl, "/live/"),
				P = c.a.a("Container", N.a),
				k = c.a.wrapped(h.a, "Circle", N.a),
				T = c.a.div("LiveLabel", N.a),
				I = c.a.div("ViewCount", N.a),
				L = c.a.div("Title", N.a),
				M = c.a.wrapped(E.a, "OutboundLink", N.a),
				B = c.a.div("Description", N.a),
				R = c.a.div("AnnouncementContainer", N.a),
				F = c.a.wrapped(L, "AnnouncementTitle", N.a),
				A = c.a.wrapped(B, "AnnouncementDescription", N.a),
				D = c.a.wrapped(m.g, "Button", N.a),
				V = c.a.wrapped(g.a, "CloseButton", N.a),
				H = Object(i.c)({
					featuredLiveThread: e => e.live.featured,
					language: S.S
				}),
				U = Object(a.b)(H);
			class W extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						announcementBannerHidden: !0
					}, this.dismissModal = () => {
						this.setState({
							announcementBannerHidden: !0
						});
						const {
							id: e,
							numTimesDismissable: t
						} = this.props.featuredLiveThread;
						Object(p.E)(e, t), this.props.sendEvent(Object(u.d)(e))
					}, this.clickedButtonCta = () => {
						this.props.sendEvent(Object(u.c)(this.props.featuredLiveThread.id))
					}
				}
				componentDidMount() {
					const {
						featuredLiveThread: e,
						sendEvent: t
					} = this.props;
					if (e && e.isAnnouncement) {
						const s = Object(p.d)(e.id);
						s < e.numTimesDismissable && (this.setState({
							announcementBannerHidden: !1
						}), t(Object(u.e)(e.id)), Object(p.E)(e.id, s + 1))
					}
				}
				render() {
					const {
						featuredLiveThread: e,
						language: t
					} = this.props;
					if (!e) return null;
					if (e.isAnnouncement) {
						if (this.state.announcementBannerHidden) return null; {
							const t = {
								[j.b.Announcement]: o.a.createElement(v, {
									className: N.a.iconStyles
								}),
								[j.b.Document]: o.a.createElement(O.a, {
									className: N.a.iconStyles
								}),
								[j.b.Snoo]: o.a.createElement(f.a, {
									className: N.a.iconStyles
								}),
								[j.b.Ama]: o.a.createElement(x.a, {
									className: N.a.iconStyles
								}),
								[j.b.Moderation]: o.a.createElement(y.a, {
									className: N.a.iconStyles
								})
							};
							return o.a.createElement(R, null, o.a.createElement(C.a, null, t[e.icon], o.a.createElement(F, null, e.title), o.a.createElement(V, {
								onClick: this.dismissModal
							})), o.a.createElement(A, null, e.description), o.a.createElement(D, {
								target: "_blank",
								href: e.announcementUrl,
								onClick: this.clickedButtonCta
							}, e.buttonCta))
						}
					}
					return o.a.createElement(P, {
						href: "".concat(_).concat(e.id)
					}, o.a.createElement(C.a, null, o.a.createElement(k, null), o.a.createElement(T, null, o.a.createElement(b.c, null, "live")), o.a.createElement(B, null, "·"), o.a.createElement(I, null, Object(d.c)(t, "live.viewers", e.viewerCount))), o.a.createElement(L, null, e.title, o.a.createElement(M, null)), o.a.createElement(B, null, e.description))
				}
			}
			t.a = U(Object(l.b)(W))
		},
		"./src/reddit/components/FrontpageSidebar/Communities/Community/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1BlAvWVMCHrKuk1aBiD0rO",
				icon: "SdGgakyQ3Q1wV1BG02KpS",
				name: "_3UvQsAqQD7ZaeOwhy_dmq"
			}
		},
		"./src/reddit/components/FrontpageSidebar/Communities/Community/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1JH-ukr83Pz2SZd5gYfjin",
				icon: "_1fk4TxaaWwKgRCawvegijy",
				name: "_2oFobGD6mMTl7VOWU4WEzg",
				link: "eizo6O6TAwt9GD2gH-eXI",
				unsubscribe: "x0jD2G0P19ywQfbEuUczh",
				unsubscribeIcon: "_37iZf6F-3XPLqF7SZ0AmYC"
			}
		},
		"./src/reddit/components/FrontpageSidebar/Communities/index.m.less": function(e, t, s) {
			e.exports = {
				title: "Akj-sMP73429cfA-JV1_p",
				description: "_2wBIRCyBuaNPTzZ3B2VMkb",
				community: "Ncc60HBC_dv44qnV2OevV"
			}
		},
		"./src/reddit/components/FrontpageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/IdCard/index.tsx"),
				c = s("./src/config.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/components/LayerPromotionWidget/index.m.less"),
				m = s.n(l);
			const p = "".concat(c.a.assetPath, "/img/layer_promotion_image.png");
			var u = () => r.a.createElement("div", null, r.a.createElement("a", {
					href: "http://reddit.com/r/Layer"
				}, r.a.createElement("img", {
					alt: Object(d.c)("Layer promotion"),
					className: m.a.image,
					src: p
				}))),
				b = s("./node_modules/react-router-redux/es/index.js"),
				h = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				g = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/i18n/components.tsx"),
				E = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				f = s("./src/reddit/components/PremiumCTA/index.m.less"),
				v = s.n(f);
			class O extends r.a.Component {
				render() {
					const {
						className: e,
						onClickPremium: t
					} = this.props;
					return r.a.createElement(h.a, null, r.a.createElement(g.a, {
						className: e,
						contentOnly: !0
					}, r.a.createElement("div", {
						className: v.a.wrapper
					}, r.a.createElement(E.a, {
						className: v.a.icon
					}), r.a.createElement("div", {
						className: v.a.content
					}, r.a.createElement("div", {
						className: v.a.title
					}, r.a.createElement(y.c, null, "Reddit Premium")), r.a.createElement("div", {
						className: v.a.description
					}, r.a.createElement(y.c, null, "The best Reddit experience, with monthly Coins"))), r.a.createElement(x.e, {
						className: v.a.cta,
						onClick: t
					}, r.a.createElement(y.c, null, "Try Now")))))
				}
			}
			var C = Object(o.b)(void 0, e => ({
					onClickPremium: () => e(Object(b.b)("/premium"))
				}))(O),
				j = s("./src/lib/constants/index.ts"),
				S = s("./src/lib/makeListingKey/index.ts"),
				w = s("./src/reddit/actions/subreddit.ts"),
				N = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx"),
				_ = s("./src/reddit/components/SidebarPostList/index.tsx"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				k = s("./src/reddit/constants/listings.ts"),
				T = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				I = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				L = s("./src/reddit/selectors/categoriesPlacement.ts"),
				M = s("./src/reddit/selectors/discoveryUnit.ts"),
				B = s("./node_modules/lodash/uniq.js"),
				R = s.n(B),
				F = s("./src/lib/makeOnboardingSubredditsKey/index.ts"),
				A = s("./src/reddit/constants/categories.tsx"),
				D = s("./src/reddit/selectors/experiments/railsWidgets.ts"),
				V = s("./src/reddit/selectors/meta.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/subreddit.ts");
			const W = Object(S.a)(k.b.Popular, j.N.TOP),
				K = Object(a.a)(e => Object(H.O)(e, {
					listingKey: W
				}), e => R()(e.map(e => e.belongsTo.id))),
				z = (Object(a.a)(e => {
					const t = K(e);
					return Object(U.Z)(e, {
						subredditIds: t
					})
				}, e => e.map(e => e.name)), e => {
					const t = {
							city: Object(V.a)(e),
							country: Object(V.b)(e),
							region: Object(V.h)(e)
						},
						s = Object(F.a)(t);
					return Object(U.q)(e, {
						key: s
					})
				}),
				G = Object(a.a)(z, A.d);
			var q = s("./src/reddit/components/RailsWidgets/GeopopularPosts/index.m.less"),
				Q = s.n(q);
			const J = 2,
				Y = 5,
				Z = Object(a.c)({
					discoveryUnit: e => Object(M.f)(e, {
						unitName: I.g
					}),
					geoObject: L.a,
					posts: e => {
						const t = G(e),
							s = Object(S.a)(t, j.N.HOT);
						return Object(_.b)(e, {
							listingKey: s
						})
					},
					subredditName: G
				});
			class X extends r.a.Component {
				constructor() {
					super(...arguments), this.loadMorePosts = (e, t) => {
						t - e <= J && this.props.loadMorePosts(this.props.subredditName)
					}, this.trackViewed = () => {
						this.props.discoveryUnit && this.props.sendEvent(Object(T.g)(this.props.discoveryUnit))
					}, this.trackPostClicked = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(T.w)(this.props.discoveryUnit, e))
					}, this.trackPostViewed = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(T.B)(this.props.discoveryUnit, e))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						className: e,
						geoObject: t,
						posts: s,
						subredditName: n
					} = this.props;
					if (0 === s.length) return null;
					const o = Object(S.a)(n, j.N.HOT);
					return r.a.createElement(g.a, {
						className: e,
						contentOnly: !0,
						redditStyle: !0
					}, r.a.createElement(N.a, {
						showIcon: !0
					}, r.a.createElement("span", {
						className: Q.a.GeoObject
					}, t), r.a.createElement(y.c, null, "trends")), r.a.createElement(_.a, {
						listingKey: o,
						listingName: k.b.Popular,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						onShowMoreClick: this.loadMorePosts,
						showMoreButton: !0,
						visiblePostsCount: Y
					}))
				}
			}
			var $ = Object(o.b)(Z, e => ({
				loadMorePosts: t => e(Object(w.u)({
					sort: j.N.TOP,
					subredditName: t
				}))
			}))(Object(P.b)(X));
			const ee = Object(S.a)(k.b.Popular, j.N.TOP),
				te = 2,
				se = 5,
				ne = Object(a.c)({
					discoveryUnit: e => Object(M.f)(e, {
						unitName: I.p
					})
				});
			class re extends r.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						this.props.discoveryUnit && this.props.sendEvent(Object(T.g)(this.props.discoveryUnit))
					}, this.trackPostClicked = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(T.w)(this.props.discoveryUnit, e))
					}, this.trackPostViewed = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(T.B)(this.props.discoveryUnit, e))
					}, this.loadMorePosts = (e, t) => {
						t - e <= te && this.props.loadMorePosts()
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						className: e
					} = this.props;
					return r.a.createElement(g.a, {
						className: e,
						contentOnly: !0,
						redditStyle: !0
					}, r.a.createElement(N.a, {
						showIcon: !0
					}, r.a.createElement(y.c, null, "Top popular for the month")), r.a.createElement(_.a, {
						listingKey: ee,
						listingName: k.b.Popular,
						moreButtonText: r.a.createElement(y.c, null, "Refresh"),
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						onShowMoreClick: this.loadMorePosts,
						showMoreButton: !0,
						visiblePostsCount: se
					}))
				}
			}
			var oe = Object(o.b)(ne, e => ({
					loadMorePosts: () => e(Object(w.u)({
						sort: j.N.TOP,
						subredditName: k.b.Popular
					}))
				}))(Object(P.b)(re)),
				ae = s("./src/lib/classNames/index.ts"),
				ie = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				ce = s("./src/reddit/components/SidebarPostList/ObservedPost/index.tsx"),
				de = s("./src/reddit/helpers/overlay/index.ts"),
				le = s("./src/lib/isUrl/index.ts"),
				me = s("./src/lib/prettyPrintNumber/index.ts"),
				pe = s("./src/reddit/components/FlairWrapper/index.tsx"),
				ue = s("./src/reddit/components/Thumbnail/index.tsx"),
				be = s("./src/reddit/helpers/name/index.ts"),
				he = s("./src/reddit/models/Flair/index.ts"),
				ge = s("./src/reddit/components/SidebarTrendingPostList/SmallPost/index.m.less"),
				xe = s.n(ge);
			const ye = e => e.type === he.f.Nsfw || e.type === he.f.Spoiler,
				Ee = Object(a.c)({
					subredditOrProfile: H.U
				});
			class fe extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							trendingSearch: t,
							containerOnClick: s
						} = this.props;
						t.post && (e(t.post), s && s(t.post.id))
					}, this.onClickThumbnail = e => {
						const {
							trendingSearch: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && t.post && s(t.post.id)
					}
				}
				render() {
					const {
						className: e,
						subredditOrProfile: t,
						trendingSearch: s
					} = this.props, {
						post: n
					} = s, o = !!n && s.isWhitelisted && Object(le.a)(Object(ue.b)({
						post: n
					})), a = n && s.isWhitelisted && n.flair.filter(ye), i = s.subredditInfo && s.subredditInfo.displayText || t && (t.displayText || t.name), c = n ? n.title : "", d = n ? n.score : 0, l = n ? n.numComments : 0;
					return r.a.createElement("div", {
						className: Object(ae.a)(xe.a.container, e),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: xe.a.mainLine
					}, !!n && o && r.a.createElement("div", {
						className: xe.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(ue.a, {
						post: n
					})), r.a.createElement("div", {
						className: Object(ae.a)(xe.a.title, !o && xe.a.titleSingle),
						title: c
					}, n && a && a.length > 0 && r.a.createElement(pe.a, {
						className: xe.a.flair,
						titleFlair: a,
						nowrap: !0,
						post: n,
						showCategoryTag: !1
					}), c)), r.a.createElement("div", {
						className: xe.a.metaLine
					}, i && r.a.createElement("span", {
						className: xe.a.meta
					}, Object(be.b)(i)), r.a.createElement("span", {
						className: xe.a.meta
					}, r.a.createElement(y.c, null, "".concat(Object(me.b)(d), " "), r.a.createElement(y.a, {
						count: d,
						name: "score",
						plural: "points",
						singular: "point"
					}))), r.a.createElement("span", {
						className: xe.a.meta
					}, r.a.createElement(y.c, null, "".concat(Object(me.b)(l), " "), r.a.createElement(y.a, {
						count: l,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					})))))
				}
			}
			var ve = Object(o.b)(Ee, e => ({
					openLightbox: t => e(Object(de.a)(t.permalink))
				}))(fe),
				Oe = s("./src/reddit/components/SidebarTrendingPostList/index.m.less"),
				Ce = s.n(Oe);
			const je = 5;
			class Se extends r.a.Component {
				constructor() {
					super(...arguments), this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							trendingSearches: s
						} = this.props, [n] = s, r = n.post;
						r && (t(r), e && e(r.id))
					}, this.renderSmallPost = e => {
						const {
							onPostClick: t,
							onPostVisible: s
						} = this.props, n = e.post ? e.post.id : "";
						return r.a.createElement(ce.a, {
							onPostVisible: s,
							postId: n
						}, r.a.createElement(ve, {
							className: Ce.a.smallPost,
							containerOnClick: t,
							key: n,
							postId: n,
							thumbnailOnClick: t,
							trendingSearch: e
						}))
					}
				}
				render() {
					const {
						className: e,
						onPostVisible: t,
						trendingSearches: s
					} = this.props;
					if (0 === s.length) return null;
					const [n, ...o] = s.slice(0, je), a = n.post ? n.post.id : "";
					return r.a.createElement("div", {
						className: Object(ae.a)(Ce.a.container, e)
					}, r.a.createElement(ce.a, {
						onPostVisible: t,
						postId: a
					}, r.a.createElement(ie.a, {
						backgroundWrapperClassName: Ce.a.largePostBackgroundWrapper,
						descriptionClassName: Ce.a.largePostDescription,
						innerContainerClassName: Ce.a.largePostInnerContainer,
						onPostClick: this.openLargePost,
						postId: a,
						shouldOpenPost: !0,
						showSubredditMeta: !1,
						showSubredditName: !0,
						trendingPost: n.post,
						trendingSearch: n
					})), o.map(this.renderSmallPost))
				}
			}
			var we = Object(o.b)(null, e => ({
					openPost: t => e(Object(de.a)(t.permalink))
				}))(Se),
				Ne = s("./src/reddit/selectors/trending.ts");
			const _e = Object(a.c)({
				discoveryUnit: e => Object(M.f)(e, {
					unitName: I.t
				}),
				trendingSearches: Object(a.a)(Ne.a, e => e.filter(e => e.post))
			});
			class Pe extends r.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						this.props.discoveryUnit && this.props.sendEvent(Object(T.g)(this.props.discoveryUnit))
					}, this.trackPostClicked = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(T.w)(this.props.discoveryUnit, e))
					}, this.trackPostViewed = e => {
						this.props.discoveryUnit && this.props.sendEvent(Object(T.B)(this.props.discoveryUnit, e))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						className: e,
						trendingSearches: t
					} = this.props;
					return 0 === t.length ? null : r.a.createElement(g.a, {
						className: e,
						contentOnly: !0,
						redditStyle: !0
					}, r.a.createElement(N.a, {
						showIcon: !0
					}, r.a.createElement(y.c, null, "Trends")), r.a.createElement(we, {
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						trendingSearches: t
					}))
				}
			}
			var ke = Object(o.b)(_e)(Object(P.b)(Pe)),
				Te = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				Ie = s("./src/reddit/controls/InternalLink/index.tsx"),
				Le = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Me = s("./src/reddit/components/SEOSidebarLinks/index.m.less"),
				Be = s.n(Me);
			const Re = e => {
					let {
						to: t,
						title: s
					} = e;
					return r.a.createElement(Te.a, {
						subredditName: s,
						tooltipPosition: ["right", "top"]
					}, r.a.createElement(Ie.a, {
						className: Be.a.Link,
						to: t,
						title: s
					}, s))
				},
				Fe = e => {
					let {
						title: t,
						isOpened: s,
						isExpanded: n,
						children: o,
						onToggle: a,
						onExpand: i
					} = e;
					return r.a.createElement("div", {
						className: Object(ae.a)(Be.a.Section, {
							[Be.a.opened]: s,
							[Be.a.expanded]: n
						})
					}, r.a.createElement("div", {
						className: Be.a.SectionHeader,
						onClick: a
					}, r.a.createElement("div", {
						className: Be.a.SectionTitle
					}, t), r.a.createElement(Le.a, {
						className: Be.a.SectionChevron
					})), r.a.createElement("div", {
						className: Be.a.SectionBody
					}, r.a.createElement("div", {
						className: Be.a.SectionContent
					}, o), r.a.createElement("div", {
						className: Be.a.SectionFooter
					}, r.a.createElement(x.n, {
						className: Be.a.SectionButton,
						onClick: i
					}, r.a.createElement(y.c, null, n ? "Less" : "See more")))))
				};
			class Ae extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						openedSection: 0,
						isSectionExpanded: !1
					}, this.onToggle = e => {
						this.setState(t => {
							let {
								openedSection: s
							} = t;
							return s === e ? {
								openedSection: -1,
								isSectionExpanded: !1
							} : {
								openedSection: e,
								isSectionExpanded: !1
							}
						})
					}, this.onExpand = () => {
						this.setState(e => {
							let {
								isSectionExpanded: t
							} = e;
							return {
								isSectionExpanded: !t
							}
						})
					}, this.renderLink = e => {
						let {
							url: t,
							title: s
						} = e;
						return r.a.createElement(Re, {
							key: s,
							to: t,
							title: s
						})
					}, this.renderSection = (e, t) => r.a.createElement(Fe, {
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
					if (t) return r.a.createElement(g.a, {
						className: Object(ae.a)(Be.a.Widget, e),
						contentOnly: !0
					}, t.map(this.renderSection))
				}
			}
			var De = Ae,
				Ve = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				He = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Ue = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				We = s("./node_modules/lodash/sampleSize.js"),
				Ke = s.n(We),
				ze = s("./node_modules/request-idle-callback/index.js"),
				Ge = s("./src/reddit/components/SubredditIcon/index.tsx"),
				qe = s("./src/reddit/constants/localStorage.ts"),
				Qe = s("./src/reddit/contexts/ApiContext.tsx"),
				Je = s("./src/reddit/featureFlags/component.tsx"),
				Ye = s("./src/reddit/helpers/localStorage/index.ts"),
				Ze = s("./src/lib/makeApiRequest/index.ts"),
				Xe = s("./src/lib/omitHeaders/index.ts"),
				$e = s("./src/reddit/constants/headers.ts");
			const et = e => Object(Ze.b)(Object(Xe.a)(e, [$e.a]), {
				endpoint: "".concat(e.apiUrl, "/api/multi/user/CommunityAdoptionBot/m/adoption_week/"),
				method: j.bb.GET,
				type: "json"
			});
			var tt = s("./src/reddit/components/SubredditAdoptionWidget/index.m.less"),
				st = s.n(tt);
			const {
				fbt: nt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), rt = 3, ot = 30 * j.cb, at = "SubredditAdoption";
			class it extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditNames: []
					}
				}
				async getSubredditForAdoption() {
					let e = it.cachedData || Object(Ye.n)(qe.B) || null;
					if (!e || Date.now() - e.fetchedAt > ot) {
						const t = await et(this.props.apiContext());
						t.ok && (e = {
							subreddits: t.body.data.subreddits.map(e => e.name),
							fetchedAt: Date.now()
						}, Object(Ye.Q)(qe.B, e))
					}
					return it.cachedData = e, e ? e.subreddits : []
				}
				componentDidMount() {
					Object(ze.requestIdleCallback)(async () => {
						const e = await this.getSubredditForAdoption();
						this.setState({
							subredditNames: Ke()(e, rt)
						})
					})
				}
				render() {
					const {
						subredditNames: e
					} = this.state;
					return e.length ? r.a.createElement("div", {
						className: st.a.container
					}, r.a.createElement("div", {
						className: st.a.main
					}, r.a.createElement("div", {
						className: st.a.title
					}, r.a.createElement(Ge.b, {
						className: st.a.icon
					}), nt._("Subreddit adoption week", null, {
						hk: "LxkrU"
					})), r.a.createElement("div", {
						className: st.a.description
					}, nt._("{subreddits list} and more are looking for moderators!", [nt._param("subreddits list", r.a.createElement("strong", null, e.map(be.b).join(", ") + (e.length > 1 ? "," : "")))], {
						hk: "2Tb946"
					}))), r.a.createElement(x.h, {
						className: st.a.button,
						to: "/r/".concat(at, "?utm_source=reddit&utm_medium=fp_banner&utm_campaign=subreddit_adoption_week")
					}, nt._("Go Now", null, {
						hk: "LCCmX"
					}))) : null
				}
			}
			it.cachedData = null;
			var ct = Object(Je.a)("srAdoptionWeek", Object(Qe.b)(it)),
				dt = s("./src/reddit/components/TopSubredditsWidget/Container.tsx"),
				lt = s("./src/reddit/actions/post.ts"),
				mt = s("./src/reddit/components/MiniPost/index.tsx"),
				pt = s("./src/reddit/components/Widgets/Base/index.tsx");
			class ut extends r.a.Component {
				render() {
					return r.a.createElement("div", null, r.a.createElement(pt.a, null, this.props.headerText), this.props.posts.map(e => r.a.createElement(mt.a, {
						key: e.id,
						postId: e.id
					})))
				}
			}
			var bt = ut,
				ht = s("./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less"),
				gt = s.n(ht),
				xt = s("./src/lib/lessComponent.tsx");
			const yt = Object(o.b)(null, (e, t) => ({
					openLightbox: t => () => e(Object(de.a)(t.permalink)),
					clearLinks: () => e(Object(lt.m)())
				})),
				Et = xt.a.button("ClearButton", gt.a);
			class ft extends r.a.Component {
				render() {
					return r.a.createElement(pt.b, null, r.a.createElement(bt, {
						className: this.props.className,
						headerText: Object(d.c)("Recent posts"),
						language: this.props.language,
						posts: this.props.posts
					}), r.a.createElement(Et, {
						onClick: this.props.clearLinks
					}, Object(d.c)("Clear")))
				}
			}
			var vt = yt(ft),
				Ot = s("./src/reddit/selectors/user.ts");
			const Ct = Object(a.c)({
				language: Ot.S,
				recentPosts: H.R
			});
			var jt = Object(o.b)(Ct, (e, t) => ({
					openLightbox: t => () => e(Object(de.a)(t.permalink))
				}))(e => {
					let {
						className: t,
						recentPosts: s,
						language: n
					} = e;
					return s && s.length ? r.a.createElement(h.a, null, r.a.createElement(vt, {
						className: t,
						language: n,
						headerText: Object(d.c)("Recent posts"),
						posts: s
					})) : null
				}),
				St = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			const wt = Object(o.b)(Object(a.c)({
				communities: U.g
			}));

			function Nt() {
				return (Nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _t = 5;
			class Pt extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.showNextChunk = () => {
						this.setState((e, t) => {
							const s = Math.ceil(t.communities.length / _t);
							return {
								chunkIdx: e.chunkIdx < s - 1 ? e.chunkIdx + 1 : 0
							}
						})
					}
				}
				componentDidUpdate(e) {
					this.props.communities !== e.communities && this.setState(e => e.chunkIdx > 0 ? {
						chunkIdx: 0
					} : null)
				}
				render() {
					const {
						className: e,
						communities: t,
						getClickEventFactory: s,
						getSubscribeEventFactoryHandler: n,
						railsWidgetsVariant: o,
						sendEvent: a,
						title: i
					} = this.props, {
						chunkIdx: c
					} = this.state, l = {
						className: e,
						sendEvent: a,
						getClickEventFactory: s,
						getSubscribeEventFactoryHandler: n,
						title: i
					};
					if (o) {
						const e = t.slice(c * _t, (c + 1) * _t);
						return r.a.createElement(St.b, Nt({}, l, {
							bottomButtonText: t.length > _t ? Object(d.c)("See More") : "",
							communities: e,
							onBottomButtonClick: this.showNextChunk,
							railsWidgetsVariant: o
						}))
					}
					return r.a.createElement(St.b, Nt({}, l, {
						communities: t
					}))
				}
			}
			var kt = wt(Object(P.b)(Pt)),
				Tt = s("./src/reddit/featureFlags/index.ts"),
				It = s("./src/reddit/constants/subredditLeaderboard.ts"),
				Lt = s("./src/reddit/constants/tracking.ts"),
				Mt = s("./src/reddit/selectors/telemetry.ts"),
				Bt = s("./src/reddit/selectors/widgets.ts"),
				Rt = s("./src/telemetry/models/Subreddit.ts");
			const Ft = e => t => s => Object.assign({}, Mt.defaults(s), Object(Bt.b)(s, e), {
					source: "trending_community_card",
					action: Lt.c.CLICK,
					noun: Object(Rt.getSubscribeEventNoun)(e.type, t)
				}),
				At = e => t => Object.assign({}, Mt.defaults(t), Object(Bt.b)(t, e), {
					source: "trending_community_card",
					action: Lt.c.CLICK,
					noun: "community"
				});
			var Dt = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts"),
				Vt = s("./src/reddit/selectors/monthsToMinutes.ts"),
				Ht = s("./src/reddit/selectors/seo/linksModule.ts"),
				Ut = s("./src/reddit/constants/page.ts"),
				Wt = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				Kt = s("./src/reddit/actions/tooltip.ts"),
				zt = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Gt = s("./src/reddit/models/MonthsToMinutes/index.ts"),
				qt = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Qt = s("./src/reddit/actions/subscription/index.ts"),
				Jt = s("./src/reddit/constants/posts.ts"),
				Yt = s("./src/reddit/helpers/trackers/monthsToMinutes.ts"),
				Zt = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Xt = s("./src/reddit/components/FrontpageSidebar/Communities/Community/index.m.less"),
				$t = s.n(Xt);
			const es = Object(a.c)({
				subreddit: U.B
			});
			class ts extends r.a.Component {
				constructor() {
					super(...arguments), this.sendClickEvent = () => {
						this.props.sendEvent(Object(Yt.c)(this.props.subredditName))
					}, this.onUnsubscribeClick = () => {
						this.props.unsubscribe(), this.props.sendEvent(Object(Yt.d)(this.props.subredditName))
					}
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? r.a.createElement("div", {
						className: Object(ae.a)($t.a.container, e)
					}, r.a.createElement(Ge.b, {
						className: $t.a.icon,
						subredditOrProfile: t
					}), r.a.createElement("div", {
						className: $t.a.name
					}, r.a.createElement(qt.a, {
						className: $t.a.link,
						to: t.url,
						onMouseDown: this.sendClickEvent
					}, Object(be.b)(t.displayText || t.name))), r.a.createElement("button", {
						className: $t.a.unsubscribe,
						onClick: this.onUnsubscribeClick
					}, r.a.createElement(Zt.a, {
						className: $t.a.unsubscribeIcon
					}))) : null
				}
			}
			var ss = Object(o.b)(es, (e, t) => ({
					unsubscribe: () => {
						const s = {
							name: t.subredditName,
							type: Jt.a.SUBREDDIT
						};
						e(Object(Qt.d)([s], !1))
					}
				}))(Object(P.b)(ts)),
				ns = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				rs = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				os = s("./src/reddit/components/FrontpageSidebar/Communities/Community/Placeholder/index.m.less"),
				as = s.n(os);
			var is = Object(ns.a)(e => {
					const {
						className: t
					} = e;
					return r.a.createElement("div", {
						className: Object(ae.a)(as.a.container, t)
					}, r.a.createElement(Ge.b, {
						className: as.a.icon,
						primaryColor: e.theme ? Object(rs.a)(e).field : void 0
					}), r.a.createElement("div", {
						className: as.a.name
					}))
				}),
				cs = s("./src/reddit/components/FrontpageSidebar/Communities/index.m.less"),
				ds = s.n(cs);
			const ls = "my-communities-title",
				ms = "my-communities-description",
				ps = Object(a.c)({
					subredditNames: Vt.f
				});
			class us extends r.a.Component {
				constructor() {
					super(...arguments), this.renderCommunity = (e, t) => r.a.createElement(ss, {
						className: ds.a.community,
						key: e,
						subredditName: e
					}), this.renderCommunityPlaceholder = (e, t) => r.a.createElement(is, {
						className: ds.a.community,
						key: t
					}), this.showTitleTooltip = () => {
						this.props.onShowTooltip(ls)
					}, this.showDescriptionTooltip = () => {
						this.props.onShowTooltip(ms)
					}
				}
				render() {
					const {
						className: e,
						onHideTooltip: t,
						subredditNames: s
					} = this.props, n = Gt.b - s.length;
					return r.a.createElement(g.a, {
						className: e
					}, r.a.createElement("div", {
						className: ds.a.title,
						id: ls,
						onMouseEnter: this.showTitleTooltip,
						onMouseLeave: t
					}, r.a.createElement(y.c, null, "Starter communities")), r.a.createElement(zt.c, {
						tooltipId: ls,
						text: Object(d.c)("Manage your communities")
					}), r.a.createElement("div", {
						className: ds.a.description,
						id: ms,
						onMouseEnter: this.showDescriptionTooltip,
						onMouseLeave: t
					}, r.a.createElement(y.c, null, "You can join up to 10 communities before creating an account")), r.a.createElement(zt.c, {
						tooltipId: ms,
						text: Object(d.c)("You can remove any communities you don’t want to see in your home feed by tapping x.")
					}), s.map(this.renderCommunity), Array.from({
						length: n
					}).map(this.renderCommunityPlaceholder))
				}
			}
			var bs = Object(o.b)(ps, e => ({
				onHideTooltip: () => e(Object(Kt.h)()),
				onShowTooltip: t => e(Object(Kt.f)({
					tooltipId: t
				}))
			}))(us);
			const hs = Object(a.c)({
					isMod: Ot.K,
					isLoggedIn: e => e.user.temporaryGQL.isLoggedIn,
					isUpAndComingExperiment: Dt.b,
					trendingSubredditIds: U.ab,
					currentUser: Ot.i,
					frontpageIsHome: Vt.g,
					frontpageLinks: Ht.b,
					showLayersSidebar: Tt.d.layersEmbedQuickLink
				}),
				gs = e => !(!e.trendingSubredditIds.length || e.currentUser && !e.currentUser.showTrending),
				xs = e => !(!e.currentUser || !e.currentUser.showRecentPosts),
				ys = e => !(e.currentUser && (!e.currentUser || e.currentUser.isGold)),
				Es = e => !e.currentUser && e.frontpageIsHome && e.listingName === Ut.d.Frontpage;
			class fs extends r.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = async () => {
						this.setState({
							isMounted: !0
						})
					}, this.state = {
						isMounted: !1
					}
				}
				render() {
					let e = 0;
					const {
						categoriesPlacementVariant: t,
						className: s,
						frontpageLinks: n,
						isLoggedIn: o,
						isUpAndComingExperiment: a,
						listingName: c,
						railsWidgetsVariant: l,
						trendingSubredditIds: m,
						showLayersSidebar: p
					} = this.props;
					return r.a.createElement(He.a, {
						className: s
					}, r.a.createElement(dt.a, {
						categories: It.i,
						category: a ? It.k : It.j,
						first: 5,
						shouldDisplayDelta: this.props.isMod,
						to: a ? "".concat(It.e).concat(It.m) : It.e
					}), p && r.a.createElement(h.a, null, r.a.createElement(u, null)), !l && Es(this.props) && r.a.createElement(h.a, null, r.a.createElement(bs, null)), r.a.createElement(Ve.a, {
						placement: j.c.ABOVE_THE_FOLD,
						listingName: c,
						position: Wt.a.FIRST,
						sizes: j.h,
						placementIndex: e++
					}), Object(D.a)(l) && r.a.createElement(h.a, null, r.a.createElement($, null)), Object(D.b)(l) && r.a.createElement(h.a, null, r.a.createElement(oe, null)), Object(D.c)(l) && r.a.createElement(h.a, null, r.a.createElement(ke, null)), !l && ys(this.props) && r.a.createElement(C, null), gs(this.props) && r.a.createElement(h.a, null, r.a.createElement(kt, {
						getClickEventFactory: At,
						getSubscribeEventFactoryHandler: Ft,
						railsWidgetsVariant: l,
						subredditIds: m,
						title: Object(d.c)("Trending Communities")
					})), o && r.a.createElement(h.a, null, r.a.createElement(i.e, {
						listingName: c
					})), xs(this.props) && r.a.createElement(jt, null), n && r.a.createElement(h.a, null, r.a.createElement(De, {
						links: n
					})), r.a.createElement(Ue.a, {
						adComponent: r.a.createElement(Ve.a, {
							placement: j.c.BELOW_THE_FOLD,
							listingName: c,
							position: Wt.a.BOTTOM,
							sizes: j.m,
							placementIndex: e++
						}),
						categoriesPlacementVariant: t,
						railsWidgetsVariant: l
					}, o && r.a.createElement(ct, null)))
				}
			}
			t.default = Object(o.b)(hs)(fs)
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				TimeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				timeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = s("./node_modules/reselect/es/index.js"),
				u = s("./src/higherOrderComponents/asTooltip.tsx"),
				b = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				h = s("./src/reddit/actions/tooltip.ts"),
				g = s("./src/reddit/constants/postLayout.ts"),
				x = s("./src/reddit/contexts/Tooltip.ts"),
				y = s("./src/reddit/controls/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/Dropdown/Row.tsx"),
				f = s("./src/reddit/i18n/utils.ts"),
				v = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				O = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				C = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				j = s("./src/reddit/selectors/telemetry.ts"),
				S = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				N = s.n(w);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = "view--layout--FUE",
				k = "LayoutSwitch--picker",
				T = Object(u.a)(y.a),
				I = {
					[g.d.Card]: C.a,
					[g.d.Classic]: v.a,
					[g.d.Compact]: O.a
				},
				L = {
					[g.d.Card]: Object(f.c)("card"),
					[g.d.Classic]: Object(f.c)("classic"),
					[g.d.Compact]: Object(f.c)("compact")
				},
				M = Object(l.t)(),
				B = Object(p.c)({
					dropdownIsOpen: Object(S.b)(k),
					postLayout: l.M,
					redditStyle: l.B
				});
			class R extends r.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: r
						} = this.props;
						t ? t(e) : (s(e, r), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(j.screen)(t),
							subreddit: Object(j.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: o
						} = this.props, i = s || g.e[o], c = e === i, d = I[e];
						return r.a.createElement(E.b, _({}, t, {
							className: Object(a.a)(N.a.LayoutItem, {
								[N.a.selected]: c
							}),
							"data-layout": e,
							displayText: L[e],
							iconWrapperClassName: N.a.LayoutItemIconWrapper,
							isSelected: c,
							noHover: c,
							onClick: c ? void 0 : () => this.changeLayout(e),
							textClassName: N.a.LayoutItemTextClassName
						}), r.a.createElement(d, {
							className: N.a.LayoutIcon,
							onClick: c ? void 0 : n
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(T, _({}, e, {
							className: N.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: N.a.DropdownRow,
							rowIconClassName: N.a.DropdownRowIcon,
							rowSelectedClassName: N.a.DropdownRowSelected,
							tooltipId: k
						}), this.renderItem(g.d.Card), this.renderItem(g.d.Classic), this.renderItem(g.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, o = t || g.e[n];
					return r.a.createElement("div", {
						className: Object(a.a)(N.a.Container, e),
						id: P
					}, r.a.createElement("div", {
						className: N.a.DropdownContainer,
						onClick: s
					}, this.renderItem(o, {
						id: k,
						showDropdownTriangle: !0
					}), r.a.createElement(x.a.Consumer, null, this.renderDropdown)))
				}
			}
			var F = M(Object(o.b)(B, e => ({
					onListingLayoutChange: (t, s) => e(Object(c.v)(t, s)),
					openDropdown: () => e(Object(h.g)({
						tooltipId: k
					}))
				}))(Object(d.b)(Object(b.a)(R)))),
				A = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/addQueryParams/index.ts")),
				D = s("./src/lib/constants/index.ts"),
				V = s("./src/reddit/components/ListingSort/index.tsx"),
				H = s("./src/reddit/components/TimeSort/index.tsx"),
				U = s("./src/reddit/constants/listingSorts.ts"),
				W = s("./src/reddit/controls/InternalLink/index.tsx"),
				K = s("./src/reddit/helpers/path/index.ts"),
				z = s("./src/reddit/helpers/trackers/navigation.ts"),
				G = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				q = s("./src/reddit/selectors/user.ts"),
				Q = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				J = s.n(Q);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = new Set([D.N.CONTROVERSIAL, D.N.TOP]),
				X = new Set([D.N.CONTROVERSIAL, D.N.RISING]),
				$ = "ListingSort--Overflow",
				ee = Object(l.t)({
					isFrontpage: l.z,
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				te = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, q.i, (e, t, s) => {
					if (e) return e;
					const n = [D.N.HOT, D.N.NEW, D.N.TOP, D.N.RISING];
					return t && s && n.unshift(D.N.BEST), n
				}),
				se = Object(p.c)({
					sortOptions: te
				});
			class ne extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(z.d)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(A.a)(t, {
							sort: e
						}) : Object(K.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							sort: t
						} = this.props;
						return r.a.createElement(W.a, {
							className: Object(a.a)(J.a.SortLink, e === t && J.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, r.a.createElement(V.a, {
							className: J.a.SortIcon,
							sort: e
						}), r.a.createElement("div", {
							className: J.a.SortLabel
						}, U.a[e]))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: n,
						sortOptions: o,
						timeSort: i
					} = this.props, c = !t && Z.has(n), d = X.has(n), l = o.filter(e => !X.has(e)), m = o.filter(e => X.has(e) && e !== n);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(V.d, Y({}, this.props, {
						buttonClassName: J.a.DropdownButton,
						className: Object(a.a)(J.a.SortDropdown, e),
						rowClassName: J.a.DropdownRow,
						rowIconClassName: J.a.DropdownRowIcon,
						rowSelectedClassName: J.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(a.a)(J.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(n), c && r.a.createElement(H.a, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: J.a.DropdownButton,
						className: J.a.TimeSort,
						listingSort: n,
						onChange: s,
						rowClassName: J.a.DropdownRow,
						rowSelectedClassName: J.a.DropdownRowSelected,
						timeSort: i || D.Pb,
						wrapperClassName: J.a.TimeSortWrapper
					}), m.length > 0 && r.a.createElement(V.d, Y({}, this.props, {
						className: Object(a.a)(J.a.SortOverflow, e),
						dropdownId: $,
						rowClassName: J.a.DropdownRow,
						rowIconClassName: J.a.DropdownRowIcon,
						rowSelectedClassName: J.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), r.a.createElement("button", {
						className: J.a.SortOverflowButton,
						id: $
					}, r.a.createElement(G.a, null))))
				}
			}
			var re = ee(Object(o.b)(se)(Object(d.b)(ne))),
				oe = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				ae = s.n(oe);
			const ie = Object(l.t)({
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				ce = Object(o.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const r = Object(i.c)({
									sort: t,
									timeSort: n
								});
								e(Object(c.G)(s, r))
							}
						}
					}
				});
			class de extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: s,
						disabled: n = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(ae.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(re, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !o && r.a.createElement(F, {
						className: ae.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = ie(ce(Object(d.b)(de)))
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y2WPgX5vi2SAfi_nz_Q7B"
			}
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/i18n/components.tsx"),
				i = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				c = s.n(i);
			t.a = function(e) {
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className)
				}, r.a.createElement(a.c, null, "Error: Could not load poll"))
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less": function(e, t, s) {
			e.exports = {
				emptyPie: "_3FcFVjZN0xHslbheCZ6YtB",
				fullPie: "_51DvHNRm7RdZvtEr4YB90",
				checkIcon: "b6nqW0WFO2M4SexVBxfHU",
				container: "_1QSw_HlkZ06PQ4H_Gl5Qmi",
				decisionIcon: "tIv0l4mIAasOfzH_1MZzr",
				decisionThreshold: "vdDwj3MECrKPWOzGvwtX4",
				pie: "_1kLHoqYVgmdy-N798MqUkD",
				pieContainer: "_19t_3cFD9b1D_z7gV6r1Lf",
				pieInvertedMask: "_240PIKFetxH16NIbed3MhP",
				pieMask: "faQEx7XG3jztMB7Ba0IzB",
				pieSwap: "sBNylAozOUua3KlWKF9bf",
				text: "_3kJ7s4NNHNqugbRuUIg9B9"
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1399Kcm0dM3RnJzlAPzZsE",
				selectable: "_3-DDU6UwhIWiQZZtZLB8nv",
				selected: "biqV2RX059eee3GcVedKg"
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_16Gygedl8JROR3rsORhsAq"
			}
		},
		"./src/reddit/components/Governance/Proposal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3agF4JIMydb6n5U8QiQ6Tv",
				govIcon: "Biin4hWHcVT2EfDytVnNn",
				poll: "_2-Y0QlWKQ9uE8EEq087km1",
				resultsSelector: "_31DHxzl3U6nsgzY4XJjCSD",
				votingReward: "_2JVvMYg8RBHtf5C2szMdV7"
			}
		},
		"./src/reddit/components/Governance/Proposal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Governance/Token/index.tsx"),
				m = s("./src/reddit/components/Governance/VotingReward/index.m.less"),
				p = s.n(m);

			function u(e) {
				return a.a.createElement("div", {
					className: Object(d.a)(p.a.container, e.className)
				}, a.a.createElement("div", {
					className: p.a.pill
				}, a.a.createElement(l.a, {
					className: p.a.token,
					subredditId: e.subredditId
				}), a.a.createElement("span", {
					className: p.a.amount
				}, "+", e.amount)))
			}
			var b, h = s("./src/reddit/actions/governance/index.ts"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/models/Poll/index.ts"),
				f = s("./src/reddit/selectors/gov.ts"),
				v = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				O = s("./src/lib/bigNumberUtils/percent.ts"),
				C = s("./src/lib/prettyPrintNumber/index.ts"),
				j = s("./src/reddit/helpers/governance/tokens.ts"),
				S = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				w = s("./src/reddit/components/Poll/ResultOption/index.m.less"),
				N = s.n(w);
			! function(e) {
				e[e.Count = 0] = "Count", e[e.Percent = 1] = "Percent"
			}(b || (b = {}));
			var _ = function(e) {
					const t = e.poll.options.filter(t => t.id === e.optionId)[0],
						s = e.result.totalVotes,
						r = e.result.options[e.optionId],
						o = new n.BigNumber(s).isZero() ? 0 : Object(O.a)(r.votes, s),
						i = Object(j.c)(r.votes, e.tokenDisplayConversion);
					return a.a.createElement("div", {
						className: Object(d.a)(e.className, N.a.container),
						title: e.displayType === b.Count ? r.votes : "".concat(o.toFixed(2), "% (").concat(i, " ").concat(e.tokenName, ")")
					}, a.a.createElement("div", {
						className: N.a.bar,
						style: {
							opacity: e.isWinningOption ? .3 : void 0,
							width: "".concat(o, "%")
						}
					}), a.a.createElement("div", {
						className: Object(d.a)(N.a.count, {
							[N.a.hide]: e.displayType !== b.Count,
							[N.a.show]: e.displayType === b.Count
						})
					}, Object(C.b)(parseInt(r.votes))), a.a.createElement("div", {
						className: Object(d.a)(N.a.percent, {
							[N.a.hide]: e.displayType === b.Count,
							[N.a.show]: e.displayType !== b.Count
						})
					}, "".concat(o.toFixed(1), "%")), a.a.createElement("div", {
						className: N.a.text
					}, t.text), r.userSelected && a.a.createElement(S.a, {
						className: N.a.check
					}))
				},
				P = s("./src/reddit/components/Poll/ClosedPoll/index.m.less"),
				k = s.n(P);
			const T = Object(c.c)({
				tokenName: f.o,
				tokenDisplayConversion: f.n,
				language: e => e.user.language
			});
			var I = Object(i.b)(T)((function(e) {
					let t;
					return e.poll.options.forEach(s => {
						t || (t = s);
						const r = e.result.options[s.id],
							o = e.result.options[t.id];
						new n.BigNumber(o.votes).isLessThan(new n.BigNumber(r.votes)) && (t = s)
					}), a.a.createElement("div", {
						className: e.className
					}, e.poll.options.map((s, n) => a.a.createElement(_, {
						key: n,
						className: k.a.option,
						displayType: e.displayType,
						isWinningOption: s === t,
						optionId: s.id,
						poll: e.poll,
						result: e.result,
						tokenName: e.tokenName,
						tokenDisplayConversion: e.tokenDisplayConversion
					})), a.a.createElement(v.a, {
						className: k.a.metaData,
						language: e.language,
						poll: e.poll
					}))
				})),
				L = s("./node_modules/lodash/isNil.js"),
				M = s.n(L),
				B = s("./src/reddit/constants/elementClassNames.ts"),
				R = s("./src/reddit/controls/Button/index.tsx"),
				F = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				A = s("./src/reddit/i18n/components.tsx"),
				D = s("./src/reddit/components/Poll/OpenPoll/index.m.less"),
				V = s.n(D);

			function H(e) {
				return "INPUT" === e.tagName
			}
			class U extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						optionIsSelected: !1
					}, this.handleOptionSelected = () => this.setState({
						optionIsSelected: !0
					}), this.handleSubmit = e => {
						const {
							poll: t
						} = this.props;
						e.preventDefault();
						const s = e.currentTarget,
							n = function(e) {
								for (const t of e)
									if (t.checked) return parseInt(t.value)
							}(Array.from(s.elements).filter(H));
						M()(n) || (this.props.onVoteSelection(t.options[n]), this.props.sendEvent(Object(y.e)(t.id, t.postId, n)))
					}
				}
				render() {
					return a.a.createElement("form", {
						className: this.props.className,
						onSubmit: this.handleSubmit
					}, a.a.createElement("div", null, this.props.poll.options.map((e, t) => a.a.createElement("label", {
						key: t,
						className: V.a.option
					}, a.a.createElement("input", {
						className: V.a.optionRadio,
						onChange: this.handleOptionSelected,
						type: "radio",
						name: "proposal",
						value: t
					}), a.a.createElement("div", {
						className: V.a.optionText
					}, e.text)))), a.a.createElement("div", {
						className: V.a.controlRow
					}, a.a.createElement("div", {
						className: V.a.buttonContainer
					}, a.a.createElement(R.i, {
						className: B.p,
						disabled: this.props.voteInProgress || !this.props.userIsLoggedIn || !this.state.optionIsSelected,
						type: "submit"
					}, this.props.voteInProgress ? a.a.createElement(F.a, {
						className: V.a.loadingIcon,
						sizePx: 20
					}) : a.a.createElement(o.Fragment, null, this.props.votingIcon, a.a.createElement(A.c, null, "vote"))), !this.props.userIsLoggedIn && a.a.createElement("div", {
						className: V.a.loggedOutTooltip
					}, a.a.createElement(A.c, null, "You must be logged in to vote"))), a.a.createElement(v.a, {
						className: V.a.metaData,
						language: this.props.language,
						poll: this.props.poll
					})))
				}
			}
			const W = Object(c.c)({
				language: e => e.user.language,
				userIsLoggedIn: e => !!e.user.account
			});
			var K = Object(i.b)(W)(Object(g.b)(U)),
				z = s("./src/reddit/components/Poll/index.m.less"),
				G = s.n(z);
			class q extends a.a.Component {
				constructor() {
					super(...arguments), this.userAlreadyMadeSelection = (e, t) => !(!e || !t) && Object(E.g)(e, t), this.sendPollResultsEvent = () => {
						const {
							poll: e,
							sendEvent: t
						} = this.props;
						e && t(Object(y.d)(e.id, e.postId))
					}
				}
				componentDidMount() {
					const {
						isCommentsPage: e,
						poll: t,
						result: s
					} = this.props;
					e && this.userAlreadyMadeSelection(t, s) && this.sendPollResultsEvent()
				}
				componentDidUpdate(e) {
					!this.userAlreadyMadeSelection(e.poll, e.result) && this.userAlreadyMadeSelection(this.props.poll, this.props.result) && this.sendPollResultsEvent()
				}
				render() {
					const {
						className: e,
						displayType: t,
						onVoteSelection: s,
						poll: n,
						result: r,
						subredditId: o,
						title: i,
						voteInProgress: c,
						votingIcon: d
					} = this.props;
					return n ? a.a.createElement("div", {
						className: e
					}, i && a.a.createElement("div", {
						className: G.a.title
					}, i), r && Object(E.e)(n, r) ? a.a.createElement(I, {
						displayType: t,
						poll: n,
						result: r,
						subredditId: o
					}) : a.a.createElement(K, {
						poll: n,
						onVoteSelection: s,
						voteInProgress: c,
						votingIcon: d
					})) : null
				}
			}
			const Q = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				result: (e, t) => e.polls.results[t.resultType][t.pollId],
				voteInProgress: (e, t) => !!e.polls.api.voting.pending[t.pollId]
			});
			var J = Object(x.t)({
					isCommentsPage: x.w
				})(Object(i.b)(Q, (e, t) => ({
					onVoteSelection: s => e(Object(h.f)(t.pollId, s.id))
				}))(Object(g.b)(q))),
				Y = s("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				Z = s("./src/app/strings/index.ts"),
				X = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M10.7771 0.961401C10.3769 0.466643 9.62244 0.466642 9.22221 0.961401L8.71391 1.58973C8.42377 1.9484 7.92591 2.06204 7.50887 1.86478L6.77829 1.51921C6.20302 1.2471 5.52329 1.57445 5.37735 2.19386L5.19202 2.98051C5.08623 3.42955 4.68698 3.74795 4.22565 3.75117L3.41748 3.75681C2.78112 3.76125 2.31073 4.3511 2.44801 4.97249L2.62234 5.76165C2.72186 6.21213 2.50029 6.67222 2.08605 6.87528L1.36036 7.23101C0.788947 7.51112 0.621066 8.24665 1.01436 8.74695L1.51383 9.38231C1.79895 9.745 1.79895 10.2557 1.51383 10.6184L1.01436 11.2537C0.621067 11.754 0.788947 12.4895 1.36036 12.7697L2.08605 13.1254C2.50029 13.3284 2.72186 13.7885 2.62234 14.239L2.44801 15.0282C2.31073 15.6496 2.78112 16.2394 3.41748 16.2439L4.22565 16.2495C4.68698 16.2527 5.08623 16.5711 5.19202 17.0202L5.37735 17.8068C5.52329 18.4262 6.20302 18.7536 6.77829 18.4815L7.50887 18.1359C7.92591 17.9386 8.42376 18.0523 8.71391 18.4109L9.22221 19.0393C9.62244 19.534 10.3769 19.534 10.7771 19.0393L11.2854 18.4109C11.5756 18.0523 12.0734 17.9386 12.4905 18.1359L13.221 18.4815C13.7963 18.7536 14.476 18.4262 14.622 17.8068L14.8073 17.0202C14.9131 16.5711 15.3124 16.2527 15.7737 16.2495L16.5819 16.2439C17.2182 16.2394 17.6886 15.6496 17.5513 15.0282L17.377 14.239C17.2775 13.7885 17.499 13.3284 17.9133 13.1254L18.639 12.7697C19.2104 12.4895 19.3783 11.754 18.985 11.2537L18.4855 10.6184C18.2004 10.2557 18.2004 9.745 18.4855 9.38231L18.985 8.74695C19.3783 8.24665 19.2104 7.51112 18.639 7.23101L17.9133 6.87528C17.499 6.67222 17.2775 6.21213 17.377 5.76165L17.5513 4.97249C17.6886 4.3511 17.2182 3.76125 16.5819 3.75681L15.7737 3.75117C15.3124 3.74795 14.9131 3.42956 14.8073 2.98051L14.622 2.19386C14.476 1.57445 13.7963 1.2471 13.221 1.51921L12.4905 1.86478C12.0734 2.06204 11.5756 1.94841 11.2854 1.58973L10.7771 0.961401ZM12.5231 7.71779L13.0827 8.27779C13.2391 8.43419 13.2391 8.68699 13.0827 8.84339L9.44271 12.4834C9.36471 12.5614 9.26231 12.6006 9.1599 12.6006C9.0575 12.6006 8.95551 12.5614 8.8771 12.4834L6.9171 10.5234C6.7607 10.3674 6.7607 10.1142 6.9171 9.95779L7.4771 9.39779C7.6335 9.24139 7.8867 9.24139 8.0427 9.39779L9.1599 10.515L11.9575 7.71779C12.0323 7.64259 12.1339 7.60059 12.2403 7.60059C12.3463 7.60059 12.4479 7.64259 12.5231 7.71779Z"
				})))),
				$ = s("./src/reddit/selectors/user.ts"),
				ee = s("./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less"),
				te = s.n(ee);

			function se(e) {
				return a.a.createElement(o.Fragment, null, a.a.createElement("div", {
					className: te.a.text
				}, a.a.createElement(A.c, null, "Achieved Decision Threshold")), a.a.createElement("div", {
					className: te.a.decisionIcon,
					title: e.votes
				}, a.a.createElement(X, {
					className: te.a.decisionThreshold
				})))
			}

			function ne(e) {
				return a.a.createElement(o.Fragment, null, a.a.createElement("div", {
					className: te.a.text
				}, Object(Z.a)(e.language, "polls.decisionThreshold", {
					amount: Object(C.b)(parseInt(Object(j.b)(e.threshold, e.tokenDisplayConversion)))
				})), a.a.createElement(re, {
					percent: e.percent
				}))
			}

			function re(e) {
				const t = Math.floor(e.percent / 100 * 360);
				return a.a.createElement("div", {
					className: te.a.pieContainer,
					title: "".concat(e.percent, "%")
				}, a.a.createElement("div", {
					className: te.a.pie
				}), a.a.createElement("div", {
					className: te.a.pieInvertedMask
				}), a.a.createElement("div", {
					className: Object(d.a)(te.a.pieMask, {
						[te.a.pieSwap]: e.percent >= 50
					}),
					style: {
						transform: e.percent < 50 ? "rotate(".concat(t, "deg)") : "rotate(".concat(t - 180, "deg)")
					}
				}))
			}
			const oe = Object(c.c)({
				language: $.S,
				poll: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.models[s]
				},
				pollResult: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.results.byVotingPower[s]
				},
				tokenDisplayConversion: f.n
			});
			var ae = Object(i.b)(oe)((function(e) {
					if (!(e.poll && e.poll.decisionThreshold && e.pollResult)) return null;
					const t = Object(E.c)(e.poll, e.pollResult),
						s = new r.a(e.pollResult.options[t.id].votes),
						n = e.poll.decisionThreshold,
						o = s.isGreaterThanOrEqualTo(new r.a(n)),
						i = Object(O.a)(e.pollResult.options[t.id].votes, n);
					return a.a.createElement("div", {
						className: Object(d.a)(te.a.container, e.className)
					}, o ? a.a.createElement(se, {
						language: e.language,
						votes: s.toString()
					}) : a.a.createElement(ne, {
						language: e.language,
						threshold: n,
						percent: i,
						tokenDisplayConversion: e.tokenDisplayConversion
					}))
				})),
				ie = s("./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less"),
				ce = s.n(ie);

			function de(e) {
				return a.a.createElement("a", {
					className: Object(d.a)(e.className, ce.a.container, {
						[ce.a.selectable]: !!e.selectable,
						[ce.a.selected]: !!e.selectable && !!e.isSelected
					}),
					onClick: e.onSelect,
					title: e.tooltipText
				}, e.text)
			}
			var le = s("./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less"),
				me = s.n(le);
			const pe = Object(c.c)({
				tokenName: f.o,
				tokenDisplayConversion: f.n,
				distribution: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.gov.distributions[s]
				},
				language: e => e.user.language,
				poll: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.models[s]
				},
				pollIsClosed: (e, t) => {
					let {
						pollId: s,
						resultsByVoters: n
					} = t;
					const r = e.polls.models[s];
					return !!(r && n && Object(E.e)(r, n))
				},
				wallet: f.g
			});
			var ue = Object(i.b)(pe)((function(e) {
					const {
						distribution: t,
						poll: s,
						resultsByVoters: r,
						resultsByVotingPower: o,
						tokenDisplayConversion: i,
						tokenName: c,
						wallet: l
					} = e, m = o ? o.totalVotes : "0", p = !new n.BigNumber(m).isZero() && l && t ? Object(O.a)(m, t.totalAvailable) : 0, u = r ? r.totalVotes : "0", b = Object(j.c)(m, i), h = Object(C.b)(parseInt(u));
					return a.a.createElement("div", {
						className: Object(d.a)(e.className, me.a.container)
					}, a.a.createElement("div", null, s.type !== E.a.GA && a.a.createElement(de, {
						isSelected: e.currentResultType === E.b.ByVotingPower,
						selectable: e.pollIsClosed,
						text: "".concat(b, " ").concat(c),
						tooltipText: Object(Z.a)(e.language, "polls.votingBreakdown", {
							tokenName: c,
							count: Object(j.c)(m, i),
							percent: p.toFixed(2)
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(E.b.ByVotingPower)
					}), a.a.createElement(de, {
						isSelected: e.currentResultType === E.b.ByVoters,
						selectable: e.pollIsClosed,
						text: Object(Z.c)(e.language, "polls.numVotes", parseInt(u), {
							count: h
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(E.b.ByVoters)
					})), Object(E.d)(s) && a.a.createElement(ae, {
						pollId: e.pollId,
						subredditId: e.subredditId
					}))
				})),
				be = s("./src/reddit/components/Governance/Proposal/index.m.less"),
				he = s.n(be);
			class ge extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						displayReward: !1,
						resultType: this.props.poll.type === E.a.GA ? E.b.ByVoters : E.b.ByVotingPower
					}, this.handleResultTypeChange = e => this.setState({
						resultType: e
					}), this.handleContainerClick = e => {
						this.props.poll.type === E.a.GA && e.stopPropagation()
					}
				}
				componentDidUpdate(e, t) {
					if (!!this.props.pollReward && !new n.BigNumber(this.props.pollReward).isZero()) {
						const s = xe(e, t.resultType),
							n = xe(this.props, this.state.resultType);
						if (s && n) {
							const t = !Object(E.e)(e.poll, s),
								r = Object(E.e)(this.props.poll, n);
							t && r && this.setState({
								displayReward: !0
							})
						}
					}
				}
				render() {
					return a.a.createElement("div", {
						className: Object(d.a)(this.props.className, he.a.container),
						onClick: this.handleContainerClick
					}, a.a.createElement(ue, {
						className: he.a.resultsSelector,
						currentResultType: this.state.resultType,
						pollId: this.props.pollId,
						resultsByVoters: this.props.resultsByVoters,
						resultsByVotingPower: this.props.resultsByVotingPower,
						subredditId: this.props.subredditId,
						onChangeResultType: this.handleResultTypeChange
					}), a.a.createElement(J, {
						key: this.props.pollId,
						className: he.a.poll,
						displayType: this.state.resultType === E.b.ByVoters ? b.Count : b.Percent,
						pollId: this.props.pollId,
						resultType: this.state.resultType,
						subredditId: this.props.subredditId,
						votingIcon: Object(E.d)(this.props.poll) ? a.a.createElement(Y.a, {
							className: he.a.govIcon
						}) : void 0
					}), this.props.pollReward && this.state.displayReward && a.a.createElement(u, {
						amount: this.props.pollReward,
						className: he.a.votingReward,
						subredditId: this.props.subredditId
					}))
				}
			}

			function xe(e, t) {
				return t === E.b.ByVotingPower ? e.resultsByVotingPower : e.resultsByVoters
			}
			const ye = Object(c.c)({
				language: e => e.user.language,
				poll: (e, t) => e.polls.models[t.pollId],
				pollReward: (e, t) => e.polls.rewards[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId],
				resultsByVotingPower: (e, t) => e.polls.results.byVotingPower[t.pollId]
			});
			t.a = Object(i.b)(ye)(ge)
		},
		"./src/reddit/components/Governance/VotingReward/index.m.less": function(e, t, s) {
			e.exports = {
				amount: "_2uGwXKrmP9OljxIhbSCOjc",
				container: "dVX1qcOidD13L5NRRKOPb",
				pill: "_2tKg0JJT2prOVVIOrtS2JP",
				pillAnim: "_3qV2ZaEJd_k1NSZDxMjK-g",
				token: "_3dLs5lIwl_kKHq589IyKz5",
				tokenRotation: "_1C5oqr8CA_wteJsqqSRq0B"
			}
		},
		"./src/reddit/components/IdCard/CommunityOptions/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Qx5bBCG_O8wVZee9J-KyJ",
				content: "_2NbKFI9n3wPM76pgfAPEsN",
				stylesToggle: "_2btz68cXFBI3RWcfSNwbmJ",
				disabled: "QgBK4ECuqpeR2umRjYcP2",
				expandButton: "_4OtOUaGIjjp2cNJMUxme_",
				TertiaryButton: "_1ra1vBLrjtHjhYDZ_gOy8F",
				tertiaryButton: "_1ra1vBLrjtHjhYDZ_gOy8F",
				redditStyle: "_2UlgIO1LIFVpT30ItAtPfb"
			}
		},
		"./src/reddit/components/IdCard/DescriptionBlock/index.m.less": function(e, t, s) {
			e.exports = {
				descriptionContainer: "_1EPynDYoibfs7nDggdH7Gq",
				truncated: "_3-0c12FCnHoLz34dQVveax",
				description: "_1zPvgKHteTOub9dKkvrOl4",
				showMore: "_1dp4_svQVkkuV143AIEKsf",
				ellipsis: "_5VBcBVybCfosCzMJlXzC3",
				showFullDescriptionButton: "_3YNtuKT-Is6XUBvdluRTyI",
				transition: "_2ZTVnRPqdyKo1dA7Q7i4EL",
				noTransition: "k51Bu_pyEfHQF6AAhaKfS",
				editableDescriptionContainer: "_2qi_L6gKnhyJ0ZxPmwbDFK",
				activeEditableDescriptionContainer: "_3GG6tRGPPJiejLqt2AZfh4",
				defaultEditableDescriptionContainer: "IzSmZckfdQu5YP9qCsdWO",
				emptyDescription: "_1YvJWALkJ8iKZxUU53TeNO",
				editableDescriptionControlRow: "_3adDzm8E3q64yWtEcs5XU7",
				characterCountdown: "_3jyKpErOrdUDMh0RFq5V6f",
				save: "dqhlvajEe-qyxij0jNsi0",
				cancel: "_12nHw-MGuz_r1dQx5YPM2v",
				editableDescription: "_3zTJ9t4vNwm1NrIaZ35NS6",
				activeEditableDescription: "_2JIiUcAdp9rIhjEbIjcuQ-",
				loadingIcon: "_2I2LpaEhGCzQ9inJMwliNO",
				pencil: "_42Nh7O6pFcqnA6OZd3bOK",
				tooltip: "voBVX1iPkvafjXv9Ymq9e"
			}
		},
		"./src/reddit/components/IdCard/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/IdCard/placeholder.m.less"),
				c = s.n(i),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const l = a.a.wrapped(e => {
					var {
						isLoading: t,
						gradientType: s
					} = e, n = d(e, ["isLoading", "gradientType"]);
					return r.a.createElement("div", n)
				}, "Shimmer", c.a),
				m = a.a.div("Container", c.a);
			t.a = e => {
				let {
					isLoading: t
				} = e;
				return r.a.createElement(m, {
					className: c.a.container
				}, r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.banner
				}), r.a.createElement("div", {
					className: c.a.title
				}, r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.icon
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.name
				})), r.a.createElement("div", {
					className: c.a.counts
				}, r.a.createElement("div", {
					className: c.a.side
				}, r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.count
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.text
				})), r.a.createElement("div", {
					className: c.a.side
				}, r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.count
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.text
				}))), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: Object(o.a)(c.a.desc, c.a.one)
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: Object(o.a)(c.a.desc, c.a.two)
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: Object(o.a)(c.a.desc, c.a.three)
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: Object(o.a)(c.a.desc, c.a.four)
				}), r.a.createElement(l, {
					gradientType: "posts",
					isLoading: t,
					className: c.a.subscribe
				}))
			}
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/app/strings/index.ts"),
				r = s("./src/config.ts"),
				o = s("./src/reddit/constants/listings.ts"),
				a = s("./src/reddit/constants/page.ts");
			const i = e => e && e.toLowerCase() === o.b.Popular,
				c = e => e && e.toLowerCase() === o.b.All,
				d = e => e && e === a.c,
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: s,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, s, a, m, p, {
						language: u,
						listingName: b,
						isM2MEnabled: h,
						subreddit: g,
						idCardWidget: x,
						shouldRenderSuperbOwlIcon: y
					} = e;
					const E = x && x.subscribersText || Object(n.a)(u, "structuredStyles.widgets.id-card.subscribersText"),
						f = x && x.currentlyViewingText || Object(n.a)(u, "structuredStyles.widgets.id-card.currentlyViewingText");
					let v, O;
					const C = y ? "snoo-superbowl@2x.png" : "snoo-home@2x.png";
					if (d(b))
						if (t = "".concat(r.a.assetPath, "/img/id-cards/home-banner@2x.png"), a = l("url('".concat(r.a.assetPath, "/img/id-cards/").concat(C, "')")), p = o.c[o.b.Home], h) m = Object(n.a)(u, "listings.populatedHome.title"), s = Object(n.a)(u, "listings.populatedHome.longDescription");
						else {
							s = Object(n.a)(u, "listings.home.longDescription");
							const e = Object(n.a)(u, "listings.home.title");
							m = e.charAt(0).toUpperCase() + e.slice(1)
						}
					else c(b) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), s = Object(n.a)(u, "listings.all.longDescription"), a = l("url('".concat(r.a.assetPath, "/img/id-cards/").concat(C, "')")), m = "r/all", p = o.c[o.b.All]) : i(b) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), s = Object(n.a)(u, "listings.popular.longDescription"), a = l("url('".concat(r.a.assetPath, "/img/id-cards/").concat(C, "')")), m = "r/popular", p = o.c[o.b.Popular]) : b && (s = x && x.description, a = l(""), m = g.displayText, p = g.url, O = x && x.subscribersCount, v = x && x.currentlyViewingCount);
					return Object.assign({
						snooBackground: a,
						description: s,
						titleText: m,
						url: p,
						subscribersCount: O,
						subscribersText: E,
						currentlyViewingText: f,
						currentlyViewingCount: v
					}, t ? {
						bannerBackgroundImage: t
					} : {})
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, s) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				RequestButton: "_36GxpQyxUKhq8m_dGYqIBE",
				requestButton: "_36GxpQyxUKhq8m_dGYqIBE",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				CreateAccountButton: "_2wIWA7CTxkwjuDQ4-Msi_r",
				createAccountButton: "_2wIWA7CTxkwjuDQ4-Msi_r",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/humanizeDate/index.ts"),
				b = s("./src/lib/isFakeSubreddit/index.ts"),
				h = s("./src/lib/prettyPrintNumber/index.ts"),
				g = s("./src/lib/timeAgo/index.ts"),
				x = s("./src/reddit/actions/tooltip.ts"),
				y = s("./src/reddit/actions/modal.ts"),
				E = s("./src/reddit/actions/multireddit/index.ts"),
				f = s("./src/reddit/actions/subscription/index.ts"),
				v = s("./src/reddit/components/CategoryTagList/index.tsx"),
				O = s("./src/higherOrderComponents/makeAsync.tsx"),
				C = s("./src/lib/loadWithRetries/index.ts"),
				j = Object(O.a)({
					getComponent: () => Object(C.a)(() => Promise.all([s.e("AdminCommunityTopics~SubredditInlineEditing"), s.e("AdminCommunityTopics")]).then(s.bind(null, "./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				S = s("./src/reddit/components/CommunityType/index.tsx"),
				w = s("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx"),
				N = s("./src/lib/isSimpleClick/index.ts"),
				_ = s("./src/reddit/actions/login.ts"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				k = s("./src/reddit/constants/accountManager.ts"),
				T = s("./src/reddit/constants/listings.ts"),
				I = s("./src/reddit/controls/Button/index.tsx"),
				L = s("./src/reddit/helpers/makeAccountManagerUrl/index.ts"),
				M = s("./src/reddit/helpers/trackers/monthsToMinutes.ts"),
				B = s("./src/reddit/i18n/components.tsx"),
				R = s("./src/reddit/selectors/meta.ts"),
				F = s("./src/reddit/selectors/user.ts");
			const A = Object(m.c)({
				isLoggedIn: F.J,
				origin: R.g
			});
			class D extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						Object(N.a)(e) && (e.stopPropagation(), e.preventDefault(), this.props.sendEvent(Object(M.e)()), this.props.openRegisterModal())
					}
				}
				render() {
					const {
						origin: e
					} = this.props;
					return o.a.createElement(I.g, {
						href: Object(L.a)(k.a.Register, e),
						onClick: this.onClick
					}, o.a.createElement(B.c, null, "Create an account"))
				}
			}
			var V = Object(a.b)(A, e => ({
					openRegisterModal: () => {
						e(Object(y.k)({
							actionSource: y.a.IdCard,
							redirectUrl: T.c[T.b.Home]
						})), e(Object(_.f)())
					}
				}))(Object(P.b)(D)),
				H = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				U = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/helpers/getSubredditUrl/index.ts")),
				W = s("./src/reddit/i18n/utils.ts"),
				K = s("./src/reddit/selectors/telemetry.ts");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var G = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const q = Object(m.c)({
				isLoggedIn: F.J
			});
			var Q = Object(a.b)(q, e => ({
				openLoginModal: () => {
					e(Object(y.k)({
						actionSource: y.a.Post
					})), e(Object(_.f)())
				}
			}))(Object(P.b)(e => {
				var {
					isContributorRequestPending: t,
					isLoggedIn: s,
					listingName: n,
					openLoginModal: r,
					sendEvent: a,
					subreddit: i
				} = e, c = G(e, ["isContributorRequestPending", "isLoggedIn", "listingName", "openLoginModal", "sendEvent", "subreddit"]);
				const d = "".concat(Object(U.a)(i) || "/", "submit");
				return o.a.createElement(I.h, z({}, c, {
					onClick: e => {
						a(e => ({
							action: "click",
							noun: "create_post",
							source: "id_card",
							screen: Object(K.screen)(e),
							subreddit: Object(K.subreddit)(e),
							actionInfo: Object(K.actionInfo)(e)
						})), s || (r(), e.preventDefault())
					},
					to: d
				}), t ? Object(W.c)("Draft post") : Object(W.c)("Create post"))
			}));
			const J = Object(O.a)({
				getComponent: () => Object(C.a)(() => s.e("CreatePollButton").then(s.bind(null, "./src/reddit/components/IdCard/CreatePollButton/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var Y = s("./node_modules/react-autosize-textarea/lib/index.js"),
				Z = s.n(Y),
				X = s("./src/lib/classNames/index.ts"),
				$ = s("./src/reddit/actions/subredditSettings.ts"),
				ee = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				te = s("./src/reddit/components/CommunitySettings/helpers.ts"),
				se = s("./src/reddit/components/ContentTooltip/index.tsx"),
				ne = s("./src/lib/fastdom/index.ts"),
				re = s("./src/lib/lessComponent.tsx"),
				oe = s("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				ae = s.n(oe);
			const ie = re.a.div("DescriptionContainer", ae.a);
			class ce extends o.a.Component {
				constructor(e) {
					super(e), this.containerRef = null, this.textRef = null, this.showFullDescription = e => {
						e.preventDefault(), e.stopPropagation(), this.setState({
							shouldTruncateDescription: !1
						})
					}, this.setContainerRef = e => this.containerRef = e, this.setTextRef = e => this.textRef = e, this.state = {
						shouldDisplayShowMore: !1,
						shouldTruncateDescription: e.shouldTruncateDescription
					}
				}
				componentDidMount() {
					this.state.shouldTruncateDescription && ne.a.read(() => {
						this.containerRef && this.textRef && this.textRef.offsetHeight > this.containerRef.offsetHeight && this.setState({
							shouldDisplayShowMore: !0
						})
					})
				}
				render() {
					const {
						children: e,
						description: t,
						subreddit: s
					} = this.props, {
						shouldDisplayShowMore: n,
						shouldTruncateDescription: r
					} = this.state, a = o.a.createElement(B.c, null, s && "Welcome to r/".concat(s.name));
					return o.a.createElement(ie, {
						className: Object(X.a)(ae.a.descriptionContainer, r && ae.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef
					}, o.a.createElement("div", {
						className: ae.a.description,
						ref: this.setTextRef
					}, t || a, e), r && n && o.a.createElement("div", {
						className: ae.a.showMore
					}, o.a.createElement(B.c, null, "..."), o.a.createElement(I.n, {
						className: ae.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, o.a.createElement(B.c, null, "MORE"))))
				}
			}
			var de = ce,
				le = s("./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx"),
				me = s("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				pe = s("./src/reddit/constants/tooltips.ts"),
				ue = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				be = s("./src/reddit/helpers/localStorage/index.ts"),
				he = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				ge = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				xe = s("./src/reddit/selectors/activeModalId.ts"),
				ye = s("./src/reddit/selectors/subreddit.ts");
			const Ee = 6,
				fe = Object(m.c)({
					apiPending: ye.T,
					unsavedChangesModalIsOpen: Object(xe.b)(me.a)
				});
			class ve extends o.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.containerRef = o.a.createRef(), this.isSaving = !1, this.setTextAreaRef = e => {
						this.textAreaRef = e
					}, this.handleOnFocus = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.state.editing) {
							const t = e.target !== this.textAreaRef ? () => this.focusTextArea() : void 0;
							this.setState({
								editing: !0
							}, t), this.props.sendEvent(he.a)
						}
					}, this.focusTextArea = () => {
						this.textAreaRef && this.textAreaRef.focus && this.textAreaRef.focus({
							preventScroll: !0
						})
					}, this.handleOnBlur = e => {
						e.relatedTarget === this.textAreaRef || e.target.contains(e.relatedTarget) || e.relatedTarget === this.containerRef.current || (e.preventDefault(), e.stopPropagation(), this.stopEditing(!0, !1))
					}, this.onCancel = () => {
						this.setState({
							description: this.props.description
						}, () => this.stopEditing(!1, !0))
					}, this.onSave = () => {
						this.props.updateSubredditSettings({
							publicDescription: this.state.description
						}), this.isSaving = !0, this.stopEditing(!1, !0);
						const e = this.state.description,
							t = this.props.description;
						this.props.sendEvent(Object(he.d)(e, t))
					}, this.state = {
						description: e.description || "",
						editing: !1,
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					this.setState({
						tooltipDismissed: Object(be.l)(this.props.subreddit.id)
					}, () => {
						this.tooltipEnabled() && this.props.onShowTooltip()
					})
				}
				tooltipEnabled() {
					return !this.state.tooltipDismissed && !this.props.isCommentsPage
				}
				hasFocus() {
					return !!document.activeElement && (document.activeElement === this.containerRef.current || this.containerRef.current && this.containerRef.current.contains(document.activeElement))
				}
				componentWillReceiveProps(e) {
					!e.apiPending && this.props.apiPending && (this.isSaving = !1), e.description === this.props.description || this.hasPendingChanges() || this.setState({
						description: e.description
					})
				}
				stopEditing(e, t) {
					e && this.hasPendingChanges() && !this.isSaving && this.props.openUnsavedChangesModal(), this.setState({
						editing: !1
					}), t && this.containerRef.current && this.containerRef.current.blur()
				}
				renderInactiveDescription() {
					const e = this.props.apiPending ? o.a.createElement(ue.a, {
						className: ae.a.loadingIcon,
						sizePx: Ee
					}) : void 0;
					return this.state.description ? o.a.createElement(o.a.Fragment, null, o.a.createElement(de, {
						description: this.state.description,
						shouldTruncateDescription: this.props.shouldTruncateDescription,
						subreddit: this.props.subreddit
					}, o.a.createElement(ge.a, {
						className: ae.a.pencil
					}), e)) : o.a.createElement("div", {
						className: ae.a.emptyDescription
					}, o.a.createElement(B.c, null, "Add description"), e)
				}
				renderTextArea() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(Z.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: Object(W.c)("Tell us about your community"),
						className: Object(X.a)(ae.a.editableDescription, ae.a.activeEditableDescription),
						onChange: e => this.setState({
							description: e.currentTarget.value
						}),
						maxLength: te.c,
						value: this.state.description
					}), o.a.createElement("div", {
						className: ae.a.editableDescriptionControlRow
					}, o.a.createElement(ee.a, {
						className: ae.a.characterCountdown,
						maxChars: te.c,
						text: this.state.description
					}), o.a.createElement("span", {
						className: ae.a.cancel,
						onClick: this.onCancel
					}, Object(W.c)("Cancel")), o.a.createElement("span", {
						className: ae.a.save,
						onClick: this.onSave
					}, Object(W.c)("Save"))))
				}
				hasPendingChanges() {
					return this.state.description !== this.props.description
				}
				getContainerClassNames() {
					if (!this.state.editing && this.state.description) return [ae.a.defaultEditableDescriptionContainer];
					const e = [ae.a.editableDescriptionContainer];
					return this.state.editing && e.push(ae.a.activeEditableDescriptionContainer), e
				}
				renderTooltip() {
					return o.a.createElement(se.a, {
						className: ae.a.tooltip,
						tooltipId: pe.a,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, o.a.createElement(le.a, {
						includeIcon: !1,
						subredditId: this.props.subreddit.id
					}))
				}
				render() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						id: this.tooltipEnabled() ? pe.a : void 0,
						ref: this.containerRef,
						className: Object(X.a)(...this.getContainerClassNames()),
						tabIndex: 0,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur
					}, this.state.editing ? this.renderTextArea() : this.renderInactiveDescription(), this.props.unsavedChangesModalIsOpen && o.a.createElement(me.b, {
						withOverlay: !0,
						ignoreDefaultFocus: !0,
						onCancel: this.focusTextArea,
						onDiscard: this.onCancel,
						onSave: this.onSave
					})), this.tooltipEnabled() && this.renderTooltip())
				}
			}
			var Oe = Object(a.b)(fe, (e, t) => {
					let {
						subreddit: s
					} = t;
					return {
						updateSubredditSettings: t => e(Object($.h)(s.id, t, !0)),
						openUnsavedChangesModal: () => {
							e(Object(x.h)()), e(Object(y.h)(me.a))
						},
						onShowTooltip: () => {
							e(Object(x.f)({
								tooltipId: pe.a
							}))
						}
					}
				})(Object(P.b)(ve)),
				Ce = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				je = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx"),
				Se = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less"),
				we = s.n(Se);
			var Ne = Object(O.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => o.a.createElement("div", {
						className: we.a.container
					}, o.a.createElement(je.a, null)),
					getComponent: () => Object(C.a)(() => Promise.all([s.e("AdminCommunityTopics~SubredditInlineEditing"), s.e("SubredditInlineEditing")]).then(s.bind(null, "./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx"))).then(e => e.default)
				}),
				_e = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Pe = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ke = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				Te = s("./src/reddit/components/SubscribeButton/index.tsx"),
				Ie = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Le = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Me = s("./src/reddit/constants/modals.ts"),
				Be = s("./src/reddit/constants/page.ts"),
				Re = s("./src/reddit/constants/posts.ts"),
				Fe = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Ae = s("./src/reddit/controls/ImageInput/index.tsx"),
				De = s("./src/reddit/featureFlags/index.ts"),
				Ve = s("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				He = s("./src/reddit/helpers/getFakeUserIcons.ts"),
				Ue = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				We = s("./src/reddit/helpers/trackers/lightbox.ts"),
				Ke = s("./src/reddit/helpers/trackers/modHub.ts"),
				ze = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				Ge = s("./src/reddit/icons/fonts/helpers.tsx"),
				qe = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				Qe = s.n(qe);
			var Je = re.a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(Ge.b)("modSettings"), " ").concat(e.className)
				}), "ModSettings", Qe.a),
				Ye = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				Ze = s("./src/reddit/icons/svgs/Help/index.tsx"),
				Xe = s("./src/reddit/models/ApiRequestState/index.ts"),
				$e = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				et = s("./src/reddit/selectors/category.ts"),
				tt = s("./src/reddit/selectors/comments.ts"),
				st = s("./src/reddit/selectors/experiments/categories.ts"),
				nt = s("./src/reddit/constants/experiments.ts"),
				rt = s("./src/reddit/helpers/chooseVariant/index.ts");
			var ot = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				at = s("./src/reddit/selectors/listings.ts"),
				it = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ct = s("./src/reddit/selectors/monthsToMinutes.ts"),
				dt = s("./src/reddit/selectors/structuredStyles.ts"),
				lt = s("./src/reddit/selectors/subscriptions.ts"),
				mt = s("./src/reddit/selectors/widgets.ts"),
				pt = s("./src/reddit/actions/preferences.ts"),
				ut = s("./src/app/strings/index.ts"),
				bt = s("./src/reddit/actions/authorFlair.ts"),
				ht = s("./src/reddit/actions/badge.ts"),
				gt = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				xt = s("./src/reddit/components/Flair/index.tsx"),
				yt = s("./src/reddit/featureFlags/component.tsx"),
				Et = s("./src/reddit/models/User/index.ts"),
				ft = s("./src/reddit/selectors/userFlair.ts"),
				vt = s("./src/reddit/components/SidebarFlairSettings/index.m.less"),
				Ot = s.n(vt);
			const Ct = re.a.div("FlairSettingsContainer", Ot.a),
				jt = re.a.div("FlairPreview", Ot.a),
				St = re.a.wrapped(e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 14 14",
					xmlns: "http://www.w3.org/2000/svg",
					version: "1.1"
				}, o.a.createElement("title", {
					id: "".concat(e.title, "-title")
				}, e.title), o.a.createElement("g", null, o.a.createElement("path", {
					fill: "inherit",
					d: "M8.1168,3.0832 L10.9168,5.8832 C11.0728,6.0392 11.0728,6.2928 10.9168,6.4488 L4.0824,13.2832 C4.0072,13.3584 3.9056,13.4 3.8,13.4 L1,13.4 C0.7784,13.4 0.6,13.2216 0.6,13 L0.6,10.2 C0.6,10.0944 0.6416,9.9928 0.7168,9.9176 L7.5512,3.0832 C7.7072,2.9272 7.9608,2.9272 8.1168,3.0832 Z M13.5168,2.152 C13.9848,2.62 13.9848,3.3808 13.5168,3.8488 L12.048,5.3176 C11.9696,5.396 11.8672,5.4352 11.7656,5.4352 C11.6632,5.4352 11.5608,5.396 11.4824,5.3176 L8.6824,2.5176 C8.5264,2.3616 8.5264,2.108 8.6824,1.952 L10.1512,0.4832 C10.6192,0.0152 11.38,0.0152 11.848,0.4832 L13.5168,2.152 Z"
				}))), "EditPencil", Ot.a),
				wt = re.a.div("PreviewTitle", Ot.a),
				Nt = re.a.wrapped(xt.b, "FlairComponent", Ot.a),
				_t = re.a.wrapped(I.n, "TertiaryButton", Ot.a),
				Pt = re.a.wrapped(_t, "IconButton", Ot.a),
				kt = re.a.span("Username", Ot.a),
				Tt = Object(yt.a)("spBadges", gt.a),
				It = Object(m.c)({
					badgesEnabled: De.d.spBadges,
					currentUser: F.i,
					language: F.S,
					userFlairData: ft.c,
					userHasBadge: (e, t) => {
						const s = e.user.account;
						if (s) {
							return !!((e.users.appliedBadges[s.id] || {})[t.subredditId] || []).length
						}
						return !1
					}
				}),
				Lt = Object(a.b)(It, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						onToggleModal: t => e(Object(bt.b)({
							username: t,
							subredditId: s
						})),
						onToggleBadgeModal: () => e(Object(ht.j)())
					}
				}),
				Mt = e => o.a.createElement(Pt, {
					onClick: e.onClick
				}, o.a.createElement(St, null)),
				Bt = e => o.a.createElement(_t, {
					onClick: e.onClick
				}, e.userFlairData.displaySettings.isEnabled ? e.userFlairData.applied || e.userHasBadge ? Object(ut.a)(e.language, "flair.editUserFlairAndBadge") : Object(ut.a)(e.language, "flair.addUserFlairAndBadge") : e.userHasBadge ? Object(ut.a)(e.language, "flair.editUserBadge") : Object(ut.a)(e.language, "flair.addUserBadge"));
			class Rt extends o.a.Component {
				constructor() {
					super(...arguments), this.onFlairLinkClick = () => {
						const e = this.props.currentUser ? Object(Et.f)(this.props.currentUser) : null;
						this.props.onToggleModal(e), this.props.sendEvent(Object(We.a)("user_flair_picker"))
					}
				}
				render() {
					const {
						badgesEnabled: e,
						currentUser: t,
						language: s,
						onToggleBadgeModal: n,
						subredditId: r,
						userFlairData: a,
						userHasBadge: i
					} = this.props;
					return t && a ? o.a.createElement(Ct, null, o.a.createElement(wt, null, o.a.createElement(B.c, null, "user flair preview"), o.a.createElement(Mt, {
						onClick: this.onFlairLinkClick
					})), o.a.createElement(jt, null, i && o.a.createElement(Tt, {
						className: Ot.a.badge,
						subredditId: r,
						uniqueIdentifier: r
					}), o.a.createElement(kt, null, "u/".concat(t.displayText)), a.applied && a.displaySettings.isUserEnabled && o.a.createElement(Nt, {
						flair: a.applied,
						forceSmallEmojis: !0
					})), e ? o.a.createElement(Bt, {
						userFlairData: a,
						userHasBadge: i,
						language: s,
						onClick: n
					}) : null) : null
				}
			}
			var Ft = Lt(Object(P.b)(Rt)),
				At = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Dt = s("./src/reddit/helpers/trackers/idCard.ts"),
				Vt = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Ht = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				Ut = s("./src/reddit/icons/svgs/Show/index.tsx"),
				Wt = e => o.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("path", {
					d: "M4.59 8l-2.3 2.29A1 1 0 0 0 3.7 11.7L6 9.41zM6 11a4 4 0 0 0 5.34 3.75l-5.1-5.1A4 4 0 0 0 6 11zM18.71 17.29l-5-5A3.87 3.87 0 0 0 14 11a4 4 0 0 0-.68-2.22c.07.06.15.11.21.17l2.76 2.76a1 1 0 0 0 1.41-1.41l-2.75-2.76A7 7 0 0 0 7.42 6L2.71 1.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.41-1.41z"
				})),
				Kt = s("./src/reddit/components/IdCard/CommunityOptions/index.m.less"),
				zt = s.n(Kt);
			const Gt = re.a.wrapped(I.n, "TertiaryButton", zt.a),
				qt = Object(m.c)({
					shouldShowFlairPicker: ft.b,
					stylesDisabledForSubreddit: F.eb,
					stylesDisabledGlobally: F.fb
				});
			class Qt extends o.a.Component {
				constructor(e) {
					super(e), this.onContainerClick = e => {
						e.stopPropagation()
					}, this.onExpandButtonClick = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.onToggleStylesSwitch = () => {
						const e = !!this.props.stylesDisabledForSubreddit;
						this.props.sendEvent(Object(Dt.c)(e)), this.props.updateSubredditPrefs(this.props.subredditId, {
							stylesEnabled: e
						})
					}, this.state = {
						isOpen: !1
					}
				}
				render() {
					const {
						isOverlay: e,
						isSubmissionPage: t,
						shouldShowFlairPicker: s,
						stylesDisabledForSubreddit: n,
						stylesDisabledGlobally: r,
						subredditId: a
					} = this.props, {
						isOpen: i
					} = this.state, c = i ? o.a.createElement("div", {
						className: zt.a.content
					}, o.a.createElement("div", {
						className: Object(X.a)(zt.a.stylesToggle, {
							[zt.a.disabled]: r
						}),
						title: r ? Object(W.c)("This is unavailable because themes have been disabled globally in your user settings") : void 0
					}, o.a.createElement("label", {
						className: zt.a.stylesToggleLabel
					}, n ? o.a.createElement(Wt, null) : o.a.createElement(Ut.a, null), o.a.createElement(B.c, null, "Community theme")), o.a.createElement(At.a, {
						disabled: r,
						on: !n,
						onToggle: this.onToggleStylesSwitch
					})), s && !e && o.a.createElement(Ft, {
						subredditId: a
					})) : null;
					return o.a.createElement("div", {
						className: zt.a.container,
						onClick: this.onContainerClick
					}, o.a.createElement(Gt, {
						className: Object(X.a)(zt.a.expandButton, {
							[zt.a.redditStyle]: t
						}),
						onClick: this.onExpandButtonClick
					}, o.a.createElement(B.c, null, "Community options"), i ? o.a.createElement(Ht.a, null) : o.a.createElement(Vt.a, null)), c)
				}
			}
			var Jt = Object(a.b)(qt, e => ({
					updateSubredditPrefs: (t, s) => {
						e(Object(pt.H)(t, s))
					}
				}))(Qt),
				Yt = s("./src/reddit/components/IdCard/helpers.ts"),
				Zt = s("./src/reddit/components/IdCard/Placeholder.tsx"),
				Xt = s("./src/reddit/components/IdCard/index.m.less"),
				$t = s.n(Xt);

			function es() {
				return (es = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "f", (function() {
				return ss
			})), s.d(t, "a", (function() {
				return rs
			})), s.d(t, "b", (function() {
				return vs
			})), s.d(t, "c", (function() {
				return Cs
			})), s.d(t, "g", (function() {
				return Rs
			})), s.d(t, "d", (function() {
				return Fs
			}));
			const ts = "IDCARD_OVERFLOW_DROPDOWN_ID",
				ss = e => !Object(b.a)(e) || Object(Yt.c)(e) || Object(Yt.d)(e) || Object(Yt.e)(e),
				ns = re.a.div("Banner", $t.a),
				rs = e => {
					const {
						bannerBackgroundImage: t
					} = e;
					return o.a.createElement(ns, {
						style: t && t.length ? {
							backgroundImage: "url(".concat(t, ")")
						} : void 0
					})
				},
				os = re.a.div("Title", $t.a),
				as = re.a.wrapped(os, "TitleShifted", $t.a),
				is = re.a.wrapped(e => {
					let {
						className: t,
						children: s,
						shouldRenderSuperbOwlIcon: n,
						snooBackground: r
					} = e;
					return o.a.createElement("div", {
						className: t,
						title: n ? "r/SuperbOwl" : "",
						style: {
							background: r.image,
							backgroundSize: "".concat(r.width, "px ").concat(r.height, "px"),
							height: r.height,
							width: r.width
						}
					}, s)
				}, "AdorableSnoo", $t.a),
				cs = re.a.wrapped(i.a, "TitleLink", $t.a),
				ds = re.a.span("TitleText", $t.a),
				ls = re.a.div("TitleTextShiftedContainer", $t.a),
				ms = re.a.div("UserCounts", $t.a),
				ps = re.a.wrapped(Le.a, "ThemedWidget", $t.a),
				us = re.a.div("SubscriberCount", $t.a),
				bs = re.a.div("Online", $t.a),
				hs = re.a.div("CakeDayContainer", $t.a),
				gs = re.a.div("CakeDay", $t.a),
				xs = re.a.p("Count", $t.a),
				ys = re.a.span("CountMetaText", $t.a),
				Es = re.a.p("UserType", $t.a),
				fs = re.a.wrapped(Ie.a, "WidgetHeader", $t.a),
				vs = re.a.div("Description", $t.a),
				Os = re.a.div("Buttons", $t.a),
				Cs = re.a.wrapped(I.f, "RequestButton", $t.a),
				js = re.a.wrapped(Te.a, "SubscribeButton", $t.a),
				Ss = re.a.wrapped(V, "CreateAccountButton", $t.a),
				ws = re.a.wrapped(Q, "CreatePostButton", $t.a),
				Ns = re.a.wrapped(H.a, "CreateCommunityButton", $t.a),
				_s = re.a.wrapped(I.k, "VisitCommunityButton", $t.a),
				Ps = re.a.wrapped(Je, "ModSettings", $t.a),
				ks = re.a.wrapped(i.a, "ModToolsLink", $t.a),
				Ts = re.a.div("CategoryContainer", $t.a),
				Is = re.a.hr("HorizontalLine", $t.a),
				Ls = re.a.div("CommunityTypeContainer", $t.a),
				Ms = Object(a.b)(() => Object(m.c)({
					postCategories: (e, t) => Object(et.s)(e, t.postId),
					commentsApiError: (e, t) => {
						let {
							commentsPageKey: s
						} = t;
						return s ? Object(tt.c)(e, {
							commentsPageKey: s
						}) : null
					},
					commentsApiPending: (e, t) => {
						let {
							commentsPageKey: s
						} = t;
						return !!s && Object(tt.d)(e, {
							commentsPageKey: s
						})
					},
					favoriteSubredditsIds: lt.a,
					frontpageIsHome: e => Object(ct.g)(e),
					idCardWidget: (e, t) => Object(mt.d)(e, {
						subredditName: t.listingName
					}),
					isContributorRequestPending: e => Object(ye.h)(e, $e.e.Post),
					isLoggedIn: F.J,
					isM2MEnabled: ct.w,
					language: F.S,
					listingApiError: (e, t) => {
						let {
							listingKey: s
						} = t;
						return s ? Object(at.c)(e, {
							listingKey: s
						}) : null
					},
					listingApiPending: (e, t) => {
						let {
							listingKey: s
						} = t;
						return !!s && Object(at.d)(e, {
							listingKey: s
						})
					},
					m2mHomeRedirectVariant: ot.f,
					moderatorPermissions: (e, t) => {
						const s = Object(ye.G)(e, t.listingName);
						if (s) return Object(it.j)(e, {
							subredditId: s
						})
					},
					isInCategoriesExperiment: st.a,
					showContributorRequestFlow: e => Object(ye.t)(e, $e.e.Post),
					showCreatePollButton: e => (e => Object(rt.c)(e, {
						experimentEligibilitySelector: rt.a,
						experimentName: nt.h
					}) === nt.m.Treatment)(e) && !Object(be.f)(),
					shouldRenderSuperbOwlIcon: De.d.superbOwl,
					subreddit: (e, t) => Object(ye.B)(e, {
						subredditName: t.listingName
					}),
					subredditAboutInfo: (e, t) => Object(ye.y)(e, {
						subredditName: t.listingName
					}),
					subredditCoins: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(ye.D)(e, {
							subredditName: s
						})
					},
					subredditIcon: (e, t) => Object(dt.q)(e, {
						subredditName: t.listingName
					}),
					adminCommunityTopicsEnabled: De.d.adminCommunityTopics,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(ye.B)(e, {
							subredditName: s
						});
						return !!n && Object(l.a)(e, {
							subredditId: n.id
						})
					}
				}), (e, t) => ({
					addToMultiClicked: () => {
						e(Object(E.g)(!0, !0)), e(Object(y.h)(Me.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					dispatchPush: t => e(Object(c.b)(t)),
					toggleFavorite: t => e(Object(f.c)({
						id: t,
						type: Re.a.SUBREDDIT
					})),
					toggleTooltip: t => e(Object(x.g)({
						tooltipId: t
					})),
					onCommunityIconSelected: (s, n) => {
						e(Object(d.b)(t.listingName, s, n))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					isEligibleForCommunityAwards: Object(Ve.a)(e.subreddit),
					isFavoriteSubreddit: !!e.subreddit && e.favoriteSubredditsIds.indexOf(e.subreddit.id) > -1,
					onContainerClick: () => s.isOverlay && t.dispatchPush(e.subreddit.url),
					onToggleFavoriteClick: () => t.toggleFavorite(e.subreddit.id)
				}));
			class Bs extends o.a.Component {
				constructor() {
					super(...arguments), this.iconFilePickerRef = null, this.setIconFilePickerRef = e => this.iconFilePickerRef = e, this.onClickModTools = () => this.props.sendEvent(Object(Ke.a)()), this.handleVisitCommunityClick = () => this.props.sendEvent(Object(We.a)("visit")), this.getListingNameToUse = () => {
						const {
							frontpageIsHome: e,
							isLoggedIn: t,
							listingName: s
						} = this.props;
						return t || s !== Be.c || e ? s : T.b.Popular
					}, this.onIconImageSelected = e => {
						this.props.onCommunityIconSelected(e, Object(Xe.b)())
					}, this.openIconFilePicker = () => {
						this.iconFilePickerRef && this.iconFilePickerRef.click(), this.props.sendEvent(he.b)
					}, this.renderCreatePostButtons = () => {
						const {
							isContributorRequestPending: e,
							listingName: t,
							showCreatePollButton: s,
							showContributorRequestFlow: n,
							subreddit: r
						} = this.props, a = Object(b.a)(this.getListingNameToUse());
						return !a && n ? o.a.createElement(w.a, {
							eventSource: $e.b.IdCard
						}) : o.a.createElement(o.a.Fragment, null, o.a.createElement(ws, {
							isContributorRequestPending: e,
							listingName: t,
							subreddit: r
						}), !e && !a && s && o.a.createElement(J, {
							listingName: t
						}))
					}, this.renderButtons = () => {
						const {
							isCommentsPage: e,
							isLoggedIn: t,
							isM2MEnabled: s,
							isMinimal: n,
							isOverlay: r,
							isSubmissionPage: a,
							listingName: i,
							subreddit: c,
							subredditAboutInfo: d
						} = this.props, l = this.getListingNameToUse(), m = Object(b.a)(l), p = !t && s && Object(Yt.d)(i), u = n && c && !r, h = e && !m && !u, g = t && !u && !p && !a && !r && !(d && d.userIsBanned);
						return o.a.createElement(Os, null, h && o.a.createElement(js, {
							getEventFactory: e => Object(We.a)(e ? "unsubscribe" : "subscribe"),
							id: "subscribe-button-".concat(c.id),
							identifier: {
								name: c.name,
								type: "subreddit"
							},
							onClick: e => e.stopPropagation()
						}), p && o.a.createElement(Ss, null), g && this.renderCreatePostButtons(), t && !a && !r && !c && o.a.createElement(Ns, {
							eventSource: "id_card"
						}), u && o.a.createElement(_s, {
							onClick: this.handleVisitCommunityClick,
							to: c.url
						}, o.a.createElement(B.c, null, "Visit Community")))
					}
				}
				render() {
					const {
						addToMultiClicked: e,
						className: t,
						commentsApiError: s,
						commentsApiPending: r,
						idCardWidget: a,
						isCommentsPage: i,
						isEligibleForCommunityAwards: c,
						isInCategoriesExperiment: d,
						isLoggedIn: l,
						isM2MEnabled: m,
						isMinimal: p,
						isOverlay: u,
						isSubmissionPage: h,
						language: g,
						listingApiError: x,
						listingApiPending: y,
						m2mHomeRedirectVariant: E,
						moderatorPermissions: f,
						onContainerClick: O,
						postCategories: C,
						postId: w,
						shouldRenderSuperbOwlIcon: N,
						subreddit: _,
						subredditAboutInfo: P,
						subredditCoins: k,
						subredditIcon: T,
						toggleTooltip: I,
						subredditInlineEditingEnabled: L
					} = this.props, M = this.getListingNameToUse(), R = Object(b.a)(M);
					if (!R && !a) return o.a.createElement(Zt.a, {
						isLoading: r && !s || y && !x
					});
					const {
						bannerBackgroundImage: F,
						currentlyViewingCount: A,
						currentlyViewingText: D,
						description: V,
						snooBackground: H,
						subscribersCount: U,
						subscribersText: K,
						titleText: z,
						url: G
					} = Object(Yt.a)({
						language: g,
						listingName: M,
						isM2MEnabled: m,
						subreddit: _,
						idCardWidget: a,
						shouldRenderSuperbOwlIcon: N
					}), q = R || u || h, Q = !R && _.id ? _.id : "", J = P && P.created, Y = n.fbt._("Cake Day", null, {
						hk: "gZ29b"
					}), Z = "IdCard--Subscribers--".concat(u, "--").concat(Q), X = "IdCard--CurrentlyViewing--".concat(u, "--").concat(Q), $ = "IdCard--CakeDay--".concat(u, "--").concat(Q), ee = "IdCard--CoinCoint--".concat(u, "--").concat(Q), te = p && !u, se = !!u && Object(ot.e)(E), ne = !R && !u && L && !h, re = ne ? o.a.createElement(Oe, {
						description: V,
						shouldTruncateDescription: se,
						isCommentsPage: !!i,
						subreddit: _
					}) : o.a.createElement(de, {
						description: V,
						shouldTruncateDescription: se,
						subreddit: _
					});
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(ps, {
						className: t,
						onClick: u ? O : void 0,
						headerButton: o.a.createElement("div", {
							className: $t.a.headerButtonsContainer
						}, !q && _ && f && o.a.createElement(ks, {
							to: f.posts ? "".concat(_.url, "about/modqueue") : "".concat(_.url, "about/"),
							onClick: this.onClickModTools
						}, o.a.createElement(Ps, null), o.a.createElement(B.c, null, "Mod tools")), l && _ && o.a.createElement(_e.b, {
							className: $t.a.overflowButton,
							dropdownId: ts,
							targetPosition: ["right", "bottom"],
							tooltipPosition: ["right", "top"]
						}, !_.isQuarantined && o.a.createElement(Fe.b, {
							className: $t.a.dropdownRow,
							displayText: Object(W.c)("Add to Custom Feed"),
							onClick: e
						}), o.a.createElement(Fe.b, {
							className: $t.a.dropdownRow,
							displayText: this.props.isFavoriteSubreddit ? Object(W.c)("Remove from Favorites") : Object(W.c)("Add to Favorites"),
							onClick: this.props.onToggleFavoriteClick
						}))),
						redditStyle: R || h,
						title: q ? void 0 : n.fbt._("About Community", null, {
							hk: "31Lg8f"
						}),
						titleClassName: R ? void 0 : $t.a.subredditTitle
					}, q && o.a.createElement(rs, {
						bannerBackgroundImage: F
					}), R || h || i ? R ? Rs({
						titleText: z,
						snooBackground: H,
						shouldRenderSuperbOwlIcon: N
					}) : o.a.createElement(Fs, {
						isTargetBlank: h,
						linkUrl: R ? void 0 : G,
						subredditIcon: T,
						canEditIcon: ne,
						subreddit: _,
						titleText: z,
						onOpenFilePicker: this.openIconFilePicker
					}) : null, re, !R && !te && Ds(g, U, K, Z, A, D, X, J, Y, $, I), !R && o.a.createElement(Ls, null, o.a.createElement(S.a, {
						className: $t.a.communityType,
						iconClassName: $t.a.communityTypeIcon,
						subreddit: _,
						textClassName: $t.a.communityTypeText
					})), c && f && void 0 !== k && o.a.createElement(o.a.Fragment, null, o.a.createElement(Is, null), o.a.createElement("div", {
						className: $t.a.communityCoinCount
					}, o.a.createElement(ze.a, {
						className: $t.a.coinIcon
					}), o.a.createElement(B.c, null, o.a.createElement(B.b, {
						name: "number-community-coins"
					}, k.toLocaleString()), " Coins"), o.a.createElement("span", {
						id: ee,
						onMouseLeave: () => I(ee),
						onMouseEnter: () => I(ee)
					}, o.a.createElement(Ze.a, {
						className: $t.a.helpIcon
					})), o.a.createElement(Ce.c, {
						tooltipId: ee
					}, o.a.createElement("p", {
						className: $t.a.coinsTooltipContent
					}, o.a.createElement(B.c, null, "The community gets Coins from Awards given by members"))))), ne && o.a.createElement(Ne, {
						context: Ue.a.idCard,
						subredditId: Q
					}), !R && te && !se && As(_, U, A), !se && this.renderButtons(), d && C && w && (i || u) && o.a.createElement(o.a.Fragment, null, o.a.createElement(Is, null), o.a.createElement(Ts, null, o.a.createElement(fs, null, o.a.createElement(B.c, null, "Discover more in:")), o.a.createElement(v.a, {
						postId: w,
						inLightboxHeader: !0,
						postCategories: C
					}))), !R && l && o.a.createElement(o.a.Fragment, null, o.a.createElement(Jt, {
						isOverlay: u,
						isSubmissionPage: h,
						sendEvent: this.props.sendEvent,
						subredditId: _.id
					})), ne && o.a.createElement(Ae.a, {
						key: "icon-file-picker",
						className: $t.a.iconFilePicker,
						inputRef: this.setIconFilePickerRef,
						multiple: !1,
						onChange: this.onIconImageSelected
					}), !R && l && this.props.adminCommunityTopicsEnabled && o.a.createElement(j, {
						key: "admin-community-topics",
						subredditId: Q
					})))
				}
			}
			const Rs = e => {
					let {
						titleText: t,
						snooBackground: s,
						shouldRenderSuperbOwlIcon: n
					} = e;
					return o.a.createElement(as, null, o.a.createElement(is, {
						snooBackground: s,
						shouldRenderSuperbOwlIcon: n
					}), o.a.createElement(ls, null, o.a.createElement(ds, null, t)))
				},
				Fs = e => {
					const {
						canEditIcon: t,
						isTargetBlank: s,
						largeSubredditIcon: n,
						linkUrl: r,
						subredditIcon: a,
						titleText: i,
						primaryColor: c,
						subreddit: d,
						onOpenFilePicker: l
					} = e, m = a.url ? o.a.createElement(B.c, null, "Update icon") : o.a.createElement(B.c, null, "Add icon");
					return o.a.createElement(os, {
						className: e.className
					}, t && d ? o.a.createElement(ke.a, {
						className: n ? $t.a.largeSubredditIcon : $t.a.subredditIcon,
						key: a.url,
						iconUrl: a.url,
						primaryColor: c,
						subreddit: d,
						inTopBar: !1
					}) : o.a.createElement(Pe.b, {
						className: n ? $t.a.largeSubredditIcon : $t.a.subredditIcon,
						key: a.url,
						iconUrl: a.url,
						primaryColor: c
					}), o.a.createElement("div", {
						className: $t.a.titleTextContainer
					}, r ? o.a.createElement(cs, es({
						key: r,
						to: r,
						onClick: e => e.stopPropagation()
					}, s ? {
						target: "_blank"
					} : {}), o.a.createElement(ds, {
						title: i
					}, i)) : o.a.createElement(ds, {
						key: i
					}, i), t && d && l && o.a.createElement("div", {
						className: $t.a.editIconText,
						onClick: l
					}, m)))
				},
				As = (e, t, s) => {
					const n = Object(He.a)(e.name),
						r = t > 1 ? "".concat("member", "s") : "member";
					return o.a.createElement("span", {
						className: $t.a.metaTextContainer
					}, n.map((e, t) => {
						let {
							color: s,
							image: n
						} = e;
						return o.a.createElement("img", {
							alt: 0 === t ? Object(W.c)("Members icons") : "",
							className: $t.a.memberIcon,
							key: n,
							src: n,
							style: {
								backgroundColor: s
							}
						})
					}), o.a.createElement(ys, {
						className: $t.a.metaText
					}, o.a.createElement(B.c, null, o.a.createElement(B.b, {
						name: "subscribersCount"
					}, "".concat(Object(h.b)(t).toUpperCase(), " ")), o.a.createElement(B.b, {
						name: "members"
					}, r))), o.a.createElement(ys, {
						className: $t.a.metaText
					}, o.a.createElement(B.c, null, o.a.createElement(B.b, {
						name: "viewingCount"
					}, Object(h.b)(s)), " online")))
				},
				Ds = (e, t, s, r, a, i, c, d, l, m, p) => o.a.createElement(o.a.Fragment, null, o.a.createElement(ms, null, o.a.createElement(us, {
					onMouseEnter: () => p(r),
					onMouseLeave: () => p(r)
				}, o.a.createElement(xs, null, Object(h.b)(t)), o.a.createElement(Es, {
					id: r
				}, s), o.a.createElement(Ce.c, {
					caretOnTop: !0,
					text: "".concat(Object(h.b)(t, !0), " ").concat(s),
					tooltipId: r
				})), o.a.createElement(bs, {
					onMouseEnter: () => p(c),
					onMouseLeave: () => p(c)
				}, o.a.createElement(xs, null, Object(h.b)(a)), o.a.createElement(Es, {
					id: c
				}, i), o.a.createElement(Ce.c, {
					caretOnTop: !0,
					text: "".concat(Object(h.b)(a, !0), " ").concat(i),
					tooltipId: c
				})), o.a.createElement("div", null)), d && o.a.createElement(o.a.Fragment, null, o.a.createElement(Is, null), o.a.createElement(hs, {
					onMouseEnter: () => p(m),
					onMouseLeave: () => p(m)
				}, o.a.createElement(gs, {
					id: m
				}, o.a.createElement(Ye.a, {
					className: $t.a.cakeIcon,
					key: "cakeDay"
				}), n.fbt._("Created {cakeday}", [n.fbt._param("cakeday", Object(u.a)(d, !0, !0, !0))], {
					hk: "8Y46b"
				})), o.a.createElement(Ce.c, {
					caretOnTop: !0,
					text: Object(g.d)(e, d),
					tooltipId: m
				}))));
			t.e = Object(P.b)(Ms(Object(p.a)(Bs)))
		},
		"./src/reddit/components/IdCard/placeholder.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Tqjvz23rS-5hNHwFjEkoG",
				banner: "c_dVyWK3BXRxSN3ULLJ_t",
				title: "_1OQL3FCA9BfgI57ghHHgV3",
				icon: "_33jgwegeMTJ-FJaaHMeOjV",
				name: "_1wQQNkVR4qNpQCzA19X4B6",
				counts: "_39IvqNe6cqNVXcMFxFWFxx",
				side: "_29TSdL_ZMpyzfQ_bfdcBSc",
				count: "JEV9fXVlt_7DgH-zLepBH",
				text: "_3YCOmnWpGeRBW_Psd5WMPR",
				desc: "_2iO5zt81CSiYhWRF9WylyN",
				one: "_2E9u5XvlGwlpnzki78vasG",
				two: "fDElwzn43eJToKzSCkejE",
				three: "_2kNB7LAYYqYdyS85f8pqfi",
				four: "_1XmngqAPKZO_1lDBwcQrR7",
				subscribe: "_3XbVvl-zJDbcDeEdSgxV4_",
				Shimmer: "_3640Mx-3jD362-XXyVwXur",
				shimmer: "_3640Mx-3jD362-XXyVwXur",
				gradientAnimation: "_3XkHjK4wMgxtjzC1TvoXrb",
				Container: "_3Tqjvz23rS-5hNHwFjEkoG"
			}
		},
		"./src/reddit/components/InFeedPostCreation/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2jJNpBqXMbbyOiGCElTYxZ",
				container: "_2jJNpBqXMbbyOiGCElTYxZ",
				Input: "zgT5MfUrDMC54cpiCpZFu",
				input: "zgT5MfUrDMC54cpiCpZFu",
				Button: "_27e9yld2jAIIWQNc4A70if",
				button: "_27e9yld2jAIIWQNc4A70if"
			}
		},
		"./src/reddit/components/InFeedPostCreation/index.tsx": function(e, t, s) {
			"use strict";
			var n, r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/i18n/utils.ts"),
				h = s("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				g = s("./src/reddit/icons/svgs/Media/index.tsx"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/components/InFeedPostCreation/index.m.less"),
				f = s.n(E);
			! function(e) {
				e.Media = "post-composer-du-media", e.Link = "post-composer-du-link"
			}(n || (n = {}));
			const v = e => {
					switch (e) {
						case l.Fb.MEDIA:
							return "?media=true";
						case l.Fb.LINK_ONLY:
							return "?url";
						default:
							return ""
					}
				},
				O = e => {
					switch (e) {
						case l.Fb.MEDIA:
							return "media_post";
						case l.Fb.LINK_ONLY:
							return "link_post";
						default:
							return "create_post"
					}
				},
				C = Object(d.c)({
					subredditAboutInfo: x.y,
					subreddit: x.B
				}),
				j = Object(a.b)(C, e => ({
					navigateTo: t => e(Object(c.b)(t)),
					toggleTooltip: t => e(Object(m.g)({
						tooltipId: t
					}))
				})),
				S = Object(b.c)("Create Media Post"),
				w = Object(b.c)("Create Link Post");
			t.a = Object(u.b)(j(e => {
				let {
					subredditAboutInfo: t,
					subreddit: s,
					sendEvent: r,
					subredditName: a,
					navigateTo: c,
					toggleTooltip: d
				} = e;
				const m = (a ? "/r/".concat(a) : "") + "/submit",
					u = function(e, t) {
						if (!e) return {
							link: !0,
							media: !0
						};
						const s = t && t.allowedPostTypes;
						if (!s) return {
							link: !0,
							media: !0
						};
						const {
							images: n,
							links: r,
							videos: o
						} = s;
						return {
							link: r,
							media: (o || n) && !e.isNSFW
						}
					}(s, t),
					x = e => {
						r(t => Object.assign({
							source: "post_composer_du",
							action: "click",
							noun: O(e)
						}, y.defaults(t)))
					},
					E = () => {
						x(l.Fb.POST), c(m)
					};
				return o.a.createElement("div", {
					className: f.a.Container
				}, o.a.createElement("input", {
					className: f.a.Input,
					onChange: E,
					onClick: E,
					onKeyPress: E,
					placeholder: Object(b.c)("Create Post"),
					type: "text"
				}), u.media && o.a.createElement(i.a, {
					"aria-label": S,
					className: f.a.Button,
					id: n.Media,
					onClick: () => x(l.Fb.MEDIA),
					onMouseEnter: () => d(n.Media),
					onMouseLeave: () => d(n.Media),
					to: m + v(l.Fb.MEDIA)
				}, o.a.createElement(g.a, null), o.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: n.Media,
					text: S
				})), u.link && o.a.createElement(i.a, {
					"aria-label": w,
					className: f.a.Button,
					id: n.Link,
					onClick: () => x(l.Fb.LINK_ONLY),
					onMouseEnter: () => d(n.Link),
					onMouseLeave: () => d(n.Link),
					to: m + v(l.Fb.LINK_ONLY)
				}, o.a.createElement(h.a, null), o.a.createElement(p.c, {
					caretOnTop: !0,
					tooltipId: n.Link,
					text: w
				})))
			}))
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				loading: "_2cHgYGbfV9EZMSThqLt2tx",
				small: "_3Q7WCNdCi77r0_CKPoDSFY",
				large: "_2wgLWvNKnhoJX3DUVT_3F-"
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.m.less"),
				a = s.n(o);
			t.a = () => r.a.createElement("div", null, r.a.createElement("div", {
				className: a.a.small
			}), r.a.createElement("div", {
				className: a.a.large
			}))
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less": function(e, t, s) {
			e.exports = {
				transition: "Rd5g7JmL4Fdk-aZi1-U_V",
				title: "_2TMXtA984ePtHXMkOpHNQm",
				container: "CneW1mCG4WJXxJbZl5tzH",
				pencil: "_11ARF4IQO4h3HeKPpPg0xb",
				inlineTopicsContainer: "_1I3N-uBrbZH-ywcmCnwv_B",
				modIcon: "_33CSUrVoafEXJUDX3qOQtf",
				emptyStateContainer: "_2IvhQwkgv_7K0Q3R0695Cs",
				inlineTopicsContainerEditing: "IeceazVNz_gGZfKXub0ak",
				optionsListDropdown: "_35hmSCjPO8OEezK36eUXpk",
				searchBar: "_3aEIeAgUy9VfJyRPljMNJP",
				numSelected: "_25yWxLGH4C6j26OKFx8kD5",
				titleSubtext: "_1i46tE0yFLStZBdRfHnYIa",
				controlRow: "_2YsVWIEj0doZMxreeY6iDG",
				cancel: "_1hFCAcL4_gkyWN0KM96zgg",
				save: "_1dF0IdghIrnqkJiUxfswxd",
				newBadge: "_3VGrhUu842I3acqBMCoSAq",
				relatedTopicsCopy: "edyFgPHILhf5OLH2vk-tk",
				relatedTopicsContainer: "_19lMIGqzfTPVY3ssqTiZSX",
				relatedTopicsContainerEmptyState: "_3MAHaXXXXi9Xrmc_oMPTdP"
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/selectors/widgets.ts"),
				b = s("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				h = s.n(b);
			const g = Object(a.c)({
					idCardWidget: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(u.d)(e, {
							subredditId: s
						})
					}
				}),
				x = e => e.includeIcon ? e.idCardWidget && e.idCardWidget.description ? r.a.createElement(p.c, null, "Edit your description and custom icon") : r.a.createElement(p.c, null, "Add a community description and custom icon") : e.idCardWidget && e.idCardWidget.description ? r.a.createElement(p.c, null, "Edit your description") : r.a.createElement(p.c, null, "Add a community description"),
				y = e => e.includeIcon ? r.a.createElement(p.c, null, "Tell us about your community and upload a custom avatar so users can easily identify your community") : r.a.createElement(p.c, null, "Tell us more about your community.");
			class E extends r.a.Component {
				componentDidMount() {
					this.props.sendEvent(m.e), this.props.onViewTooltip()
				}
				render() {
					const e = x(this.props),
						t = y(this.props);
					return r.a.createElement("div", {
						className: h.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, r.a.createElement("span", {
						className: h.a.topRow
					}, r.a.createElement("h3", {
						className: h.a.title
					}, e)), r.a.createElement("p", {
						className: h.a.tooltipBody
					}, t), r.a.createElement(d.f, {
						className: h.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, r.a.createElement(p.c, null, "Got it")))
				}
			}
			t.a = Object(o.b)(g, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onDismissTooltip: () => {
						e(Object(i.h)()), Object(l.O)(s, !0)
					},
					onViewTooltip: () => {
						Object(l.ab)()
					}
				}
			})(Object(c.b)(E))
		},
		"./src/reddit/components/InlineSubredditEditing/index.m.less": function(e, t, s) {
			e.exports = {
				tooltipContent: "RrvkJ7ntzKYyaCOxMJ1RM",
				title: "BE2vGjFTJ80XkdBpRRr0p",
				tooltipBody: "_2yezzi8dgIemh3F2q_kvcp",
				topRow: "_1JfvdiRxYTSKf1IIe7DUvM",
				gotIt: "_1MHKCZd72tAgyoZWvIYM-G"
			}
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = s("./src/reddit/actions/inFeedChaining.ts"),
				u = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Poll/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/models/Vote/index.ts"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				f = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				v = s("./src/reddit/selectors/inFeedChaining.ts"),
				O = s("./src/reddit/selectors/moderatorPermissions.ts"),
				C = s("./src/reddit/selectors/monthsToMinutes.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				w = s("./src/lib/classNames/index.ts"),
				N = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				_ = s("./src/reddit/components/CallToActionButton/index.tsx"),
				P = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				k = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				T = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				I = s("./src/reddit/components/Flatlist/index.tsx"),
				L = s("./src/reddit/components/Governance/Proposal/index.tsx"),
				M = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				B = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				A = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				D = s("./src/reddit/components/PostContainer/index.tsx"),
				V = s("./src/reddit/components/PostLeftRail/index.tsx"),
				H = s("./src/reddit/components/PostMedia/index.tsx"),
				U = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				W = s("./src/reddit/i18n/components.tsx"),
				K = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				z = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				G = s.n(z);
			var q = () => r.a.createElement("div", {
					className: G.a.container
				}, r.a.createElement(K.a, {
					className: G.a.pinnedIcon
				}), r.a.createElement("span", {
					className: G.a.metaText
				}, r.a.createElement(W.c, null, "pinned by moderators"))),
				Q = s("./src/reddit/components/PostTitle/index.tsx"),
				J = s("./src/reddit/components/PostTopLine/index.tsx"),
				Y = s("./src/reddit/components/SourceLink/index.tsx"),
				Z = s("./src/reddit/components/VerticalVotes/index.tsx"),
				X = s("./src/reddit/contexts/InsideOverlay.tsx"),
				$ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ee = s("./src/reddit/controls/Checkbox/index.tsx"),
				te = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				se = s("./src/reddit/helpers/isCrosspost.ts"),
				ne = s("./src/reddit/helpers/postEvent.ts"),
				re = s("./src/reddit/constants/experiments.ts"),
				oe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ae = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const ie = Object(a.a)(j.O, e => e.some(ae.c)),
				ce = Object(a.a)(ie, e => e),
				de = (e, t) => Object(oe.c)(e, {
					experimentName: re.y,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ce(e, {
							listingKey: s
						})
					}
				});
			var le = s("./src/reddit/selectors/postFlair.ts"),
				me = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				pe = s.n(me),
				ue = s("./src/reddit/components/LargePost/index.m.less"),
				be = s.n(ue);
			s.d(t, "b", (function() {
				return Ee
			}));
			const he = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(j.O)(e, {
						listingKey: s
					}) : void 0
				},
				ge = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(j.C)(e, {
						listingKey: s
					}) : void 0
				},
				xe = Object(o.b)(() => Object(a.c)({
					autoplayPref: S.b,
					activeModalId: E.a,
					currentUser: S.i,
					hideNSFWPref: S.z,
					flairStyleTemplate: $.Q,
					isCurrentUserProfilePost: j.h,
					isFrontpageHome: C.g,
					isM2MHomeRedirectEnabled: f.c,
					language: S.S,
					isActive: j.g,
					isPostChainDismissed: v.c,
					isPostChained: v.d,
					moderatorPermissions: O.i,
					modModeEnabled: $.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					pollResult: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.results.byVoters[s] : null
					},
					post: j.J,
					posts: he,
					postHeightVariant: de,
					postIds: ge,
					showEditFlair: le.a,
					subredditOrProfile: j.U,
					userIsOp: S.jb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: r
					} = t;
					return {
						chainPost: () => {
							n && s && e(Object(p.d)({
								listingKey: s,
								listingName: n,
								postId: r
							}))
						},
						handleVote: t => {
							const s = t === y.a.upvoted ? Object(u.N)(r) : Object(u.o)(r);
							e(s)
						},
						onIgnoreReports: () => e(Object(u.L)(r)),
						onOpenReportsDropdown: t => e(Object(b.g)({
							tooltipId: t
						}))
					}
				}),
				ye = r.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: n,
						className: o,
						currentUser: a,
						eventFactory: l,
						flairStyleTemplate: p,
						forceLoadMedia: u,
						hideNSFWPref: b,
						inSubredditOrProfile: y = !1,
						isCommentsPage: E,
						isCurrentUserProfilePost: f,
						isFrontpage: v,
						isFrontpageHome: O,
						isM2MHomeRedirectEnabled: C,
						isOverlay: j,
						isPostChainDismissed: S,
						isPostChained: W,
						language: K,
						listingKey: z,
						listingName: G,
						moderatorPermissions: Z,
						modModeEnabled: X,
						onClickPost: $,
						onIgnoreReports: ee,
						onOpenReportsDropdown: oe,
						poll: ae,
						pollResult: ie,
						post: ce,
						postHeightVariant: de,
						scrollerItemRef: le,
						showEditFlair: me,
						subredditOrProfile: ue,
						userIsOp: he
					} = e, ge = !!e.redditStyle || !!e["data-redditstyle"], xe = ge ? void 0 : p, ye = Object(d.a)(Z), fe = X && ye, ve = Object(c.a)(Z), Oe = Object(F.c)(ce), Ce = !!ce.media && ce.media.type === h.n.RTJSON, je = he && Ce, Se = s ? s - V.a : void 0, we = !!ie && !!Object.keys(ie.options).filter(e => ie.options[e].userSelected).length, Ne = !(v && O), _e = (e => e === re.kb.OnlyTitles)(de) && !Object(se.a)(ce), Pe = (e => e === re.kb.MediumHeight)(de) && !Object(se.a)(ce), ke = (e => {
						const {
							post: t,
							postIds: s,
							posts: n
						} = e;
						if (!Object(x.k)(t)) return;
						const r = s && 0 === s.indexOf(t.id),
							o = s && 1 === s.indexOf(t.id),
							a = n && n[1] && Object(x.k)(n[1]);
						return {
							hasTopCompactPostStyles: r && a,
							hasBottomCompactPostStyles: o,
							showPinnnedHeader: r
						}
					})(e), Te = r.a.createElement(D.a, {
						className: Object(w.a)(be.a.container, o, pe.a.largeAndMediumPostStyles, pe.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[pe.a.mUseRedditTheme]: ge,
							promotedvideolink: ce.isSponsored && !(ce.media && h.a.has(ce.media.type)),
							[be.a.topCompactPost]: ke && ke.hasTopCompactPostStyles,
							[be.a.bottomCompactPost]: ke && ke.hasBottomCompactPostStyles
						}),
						isOverlay: j,
						style: Object(m.b)(e.flairStyleTemplate),
						post: ce,
						onClick: $,
						onPostContentClick: n,
						eventFactory: l
					}, Ee(ce, e.handleVote, e.showBulkActionCheckbox, e.isCheckboxSelected, e.toggleCheckbox, xe, ge), r.a.createElement(A.a, {
						className: Object(w.a)(be.a.backgroundWrapper, {
							[be.a.isEvent]: Object(ne.a)(ce)
						}),
						"data-click-id": "background",
						flairStyleTemplate: xe,
						post: ce,
						redditStyle: ge
					}, r.a.createElement(T.a, {
						post: ce,
						language: K
					}), ke && ke.showPinnnedHeader && r.a.createElement(q, null), r.a.createElement(J.a, {
						className: be.a.postTopLine,
						hideNSFWPref: b,
						iconClassName: be.a.postTopLineIcon,
						inSubredditOrProfile: y,
						isCommentsPage: !!E,
						isCompactPinnedPost: !!ke,
						isCurrentUserProfilePost: f,
						isOverlay: !!j,
						language: K,
						post: ce,
						shouldShowSubscribeButton: Ne,
						showSubreddit: !y && !ce.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: ue
					}), r.a.createElement(Q.c, {
						className: be.a.postTitle,
						post: ce,
						redditStyle: ge,
						size: Q.b.Large,
						titleColor: xe && xe.postTitleColor,
						isM2MHomeRedirectEnabled: C,
						isOverlay: j
					}), ce.source && !ce.isSponsored && r.a.createElement(Y.a, {
						className: be.a.sourceLink,
						post: ce
					}), r.a.createElement("div", {
						className: Object(w.a)(be.a.postMediaWrapper, {
							[be.a.votedContent]: we
						})
					}, !ke && r.a.createElement(H.a, {
						isListing: !0,
						isMediumHeight: Pe,
						isNotCardView: !!j,
						isTitleOnly: _e,
						showCentered: !0,
						flairStyleTemplate: xe,
						post: ce,
						availableWidth: Se,
						shouldLoad: u,
						scrollerItemRef: le,
						autoplayPref: t
					})), ae && r.a.createElement(L.a, {
						className: Object(w.a)(be.a.proposal, {
							[be.a.mHasNotVoted]: !ie,
							[be.a.mPollIsClosed]: !!ie && Object(g.e)(ae, ie),
							[be.a.mGAPoll]: ae.type === g.a.GA
						}),
						pollId: ae.id,
						subredditId: ce.belongsTo.id
					}), ce.isMeta && !ae && r.a.createElement(M.a, {
						className: be.a.noProposal
					}), ce.source && ce.source.url && ce.isSponsored && r.a.createElement(N.a, {
						className: be.a.adLinkWrapper
					}, r.a.createElement(te.a, {
						href: ce.source.url.replace(i.a.redditUrl, ""),
						isSponsored: ce.isSponsored,
						source: ce.source
					}, ce.source.displayText), ce.callToAction && r.a.createElement(_.a, {
						href: ce.source.url.replace(i.a.redditUrl, ""),
						isSponsored: ce.isSponsored,
						source: ce.source
					}, ce.callToAction)), X && ye && Oe && r.a.createElement(R.a, {
						language: K,
						onIgnoreReports: ee,
						reportable: ce
					}), r.a.createElement(B.d, {
						postId: ce.id
					}), r.a.createElement("div", {
						className: be.a.flatListContainer
					}, r.a.createElement(P.a, {
						className: be.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: xe,
						model: ce,
						onVoteClick: e.handleVote
					}), r.a.createElement(I.c, {
						currentUser: a,
						hasModFlairPerms: ve,
						hasModPostPerms: ye,
						isLargePost: !0,
						isOverlay: !!j,
						language: K,
						modModeEnabled: X,
						onIgnoreReports: ee,
						onOpenReportsDropdown: oe,
						post: ce,
						showEditPost: je,
						showEditFlair: me,
						useFlatlistBreakpoints: Object(U.h)({
							editPost: !1,
							save: !fe,
							hide: !1,
							report: !1
						})
					}))));
					return r.a.createElement(r.a.Fragment, null, Te, W && !S && r.a.createElement(k.a, {
						className: be.a.chain,
						listingKey: z,
						listingName: G,
						postId: ce.id
					}))
				}),
				Ee = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
						a = arguments.length > 5 ? arguments[5] : void 0,
						i = arguments.length > 6 ? arguments[6] : void 0;
					const c = "upvote-button-".concat(e.id);
					return r.a.createElement(V.b, {
						isRemoved: !!e.bannedBy,
						isReported: Object(l.a)(e),
						isSponsored: e.isSponsored,
						redditStyle: i
					}, s && r.a.createElement(ee.a, {
						isCheckboxSelected: n,
						toggleCheckbox: o
					}), r.a.createElement(Z.a, {
						flairStyleTemplate: a,
						model: e,
						onVoteClick: t,
						redditStyle: i,
						upvoteTooltipId: c
					}))
				};
			t.a = xe(Object(X.b)(ye))
		},
		"./src/reddit/components/LargePost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_1yYeg-XN7v7i06TrK8Lh13",
				emptyVerticalVotes: "_3Qm3gV6v4Y9YWuQgCqMvJr",
				emptyScore: "y9vamInQ4LrXndusvhkBl",
				topLine: "_3QuUl4wSXyqVEAkIgGaLXl",
				topMetaOne: "_3vDeGQp8VifbnDC95HagCL",
				topMetaTwo: "Nci_4K-inwrSvpM-HSgWy",
				title: "_1QxTngAAL4xURgv5RVNOq1",
				media: "_2cFr_UVzM0pQGvZVL2Pmx5",
				flatlist: "_33_7mRxP4egdr8CL9OMSdb",
				flatlistItemOne: "_EVV9UvUf3cYf-HtTUL33",
				flatListItemTwo: "_2Ovk4TwuzZDamFhAj_X5Nl",
				bottomMeta: "_3Yno3UEEUpbfXOklgaEf27",
				postActionBar: "_3-iHWkhaRqC0JmCwckFVg1",
				postActionButton: "_314KvlynGyTcpUjSXckrbY",
				long: "_3EpUFkJ6GGzK-aVzndYmTT"
			}
		},
		"./src/reddit/components/LayerPromotionWidget/index.m.less": function(e, t, s) {
			e.exports = {
				image: "_18FHrNt95IT6Hc8F5tj_21"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.t)(),
				g = Object(a.c)({
					layout: m.M
				}),
				x = Object(o.b)(g);
			class y extends r.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(u.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.n + c.r + c.s,
						t = l.a - e,
						s = c.h - t,
						n = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(n, "px) {\n              .").concat(u.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.h + c.r + c.s, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.s, "px) / 2);\n              }\n\n              .").concat(u.a.Component, ".").concat(u.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.h + c.r + c.s, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(i.a)(this.props.className, u.a.Component, {
						[u.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return r.a.createElement("div", {
						className: u.a.Container
					}, r.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = h(x(b.a.wrapped(y, "Component", u.a)))
		},
		"./src/reddit/components/LayoutNavigation/Container.m.less": function(e, t, s) {
			e.exports = {
				BodyContainer: "_1levonEFuP4txDjgWG4Akb",
				bodyContainer: "_1levonEFuP4txDjgWG4Akb",
				SidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				sidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				"m-collectionLayout": "_2QBg8k5_IhSEfaeA4P26Ix",
				mCollectionLayout: "_2QBg8k5_IhSEfaeA4P26Ix",
				InnerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				innerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				Component: "_12Ewyh01Y1cMPB3Ri_F1C4",
				component: "_12Ewyh01Y1cMPB3Ri_F1C4"
			}
		},
		"./src/reddit/components/LayoutNavigation/Container.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				d = s("./src/reddit/layout/page/Listing/Content.tsx"),
				l = s("./src/reddit/selectors/structuredStyles.ts"),
				m = s("./src/reddit/selectors/userPrefs.ts"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/Container.m.less"),
				b = s.n(u),
				h = s("./src/lib/lessComponent.tsx");
			const g = h.a.div("BodyContainer", b.a),
				x = h.a.div("SidebarPlaceholder", b.a),
				y = h.a.div("InnerContainer", b.a),
				E = Object(a.c)({
					bladeOpen: e => !!Object(l.j)(e),
					isSubscriptionsPinned: m.b
				}),
				f = Object(o.b)(E);
			class v extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						bodyScrollOffset: 0
					}
				}
				componentDidMount() {
					const e = () => {
						const {
							marginRight: e
						} = document.body.style;
						!!e != !!this.state.bodyScrollOffset && (e ? this.setState({
							bodyScrollOffset: Object(c.c)(document.body)
						}) : this.setState({
							bodyScrollOffset: 0
						}))
					};
					try {
						this.docObserver = new MutationObserver(e)
					} catch (t) {}
					this.docObserver && this.docObserver.observe(document.body, {
						attributes: !0
					})
				}
				componentWillUnmount() {
					this.docObserver && this.docObserver.disconnect()
				}
				render() {
					const {
						bladeOpen: e,
						considerPinnedSubscriptions: t = !0,
						containerClassName: s,
						isSubscriptionsPinned: n,
						considerSidebar: o = !0,
						onFocus: a,
						onBlur: c
					} = this.props;
					let l = 0;
					return n && !e && t && (l += i.v), 0 !== this.state.bodyScrollOffset && (l -= this.state.bodyScrollOffset), r.a.createElement("div", {
						className: this.props.className
					}, r.a.createElement(g, {
						onFocus: a,
						onBlur: c
					}, r.a.createElement(d.a, {
						fitPageToContent: !0
					}, r.a.createElement(y, {
						className: s
					}, r.a.createElement(p.a, {
						bladeOpen: e,
						considerSidebar: o,
						offsetLeft: l,
						render: this.props.render
					}))), o && r.a.createElement(x, null)))
				}
			}
			t.a = h.a.wrapped(f(v), "Component", b.a)
		},
		"./src/reddit/components/LayoutNavigation/index.m.less": function(e, t, s) {
			e.exports = {
				listingSort: "_3E6INjIzonJwM0r4N1QJYK",
				separator: "lMwVtd6llwkRVdjCNiCAl"
			}
		},
		"./src/reddit/components/LayoutNavigation/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-router-redux/es/index.js")),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				h = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/higherOrderComponents/asTooltip.tsx")),
				g = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/app/strings/index.ts");
			const E = {
				[i.Lb.AllStates]: Object(y.e)("stateSorts.allStates"),
				[i.Lb.Alaska]: Object(y.e)("stateSorts.alaska"),
				[i.Lb.Alabama]: Object(y.e)("stateSorts.alabama"),
				[i.Lb.Arkansas]: Object(y.e)("stateSorts.arkansas"),
				[i.Lb.Arizona]: Object(y.e)("stateSorts.arizona"),
				[i.Lb.California]: Object(y.e)("stateSorts.california"),
				[i.Lb.Colorado]: Object(y.e)("stateSorts.colorado"),
				[i.Lb.Connecticut]: Object(y.e)("stateSorts.connecticut"),
				[i.Lb.DistrictOfColumbia]: Object(y.e)("stateSorts.districtOfColumbia"),
				[i.Lb.Delaware]: Object(y.e)("stateSorts.delaware"),
				[i.Lb.Florida]: Object(y.e)("stateSorts.florida"),
				[i.Lb.Georgia]: Object(y.e)("stateSorts.georgia"),
				[i.Lb.Hawaii]: Object(y.e)("stateSorts.hawaii"),
				[i.Lb.Iowa]: Object(y.e)("stateSorts.iowa"),
				[i.Lb.Idaho]: Object(y.e)("stateSorts.idaho"),
				[i.Lb.Illinois]: Object(y.e)("stateSorts.illinois"),
				[i.Lb.Indiana]: Object(y.e)("stateSorts.indiana"),
				[i.Lb.Kansas]: Object(y.e)("stateSorts.kansas"),
				[i.Lb.Kentucky]: Object(y.e)("stateSorts.kentucky"),
				[i.Lb.Louisiana]: Object(y.e)("stateSorts.louisiana"),
				[i.Lb.Massachusetts]: Object(y.e)("stateSorts.massachusetts"),
				[i.Lb.Maryland]: Object(y.e)("stateSorts.maryland"),
				[i.Lb.Maine]: Object(y.e)("stateSorts.maine"),
				[i.Lb.Michigan]: Object(y.e)("stateSorts.michigan"),
				[i.Lb.Minnesota]: Object(y.e)("stateSorts.minnesota"),
				[i.Lb.Missouri]: Object(y.e)("stateSorts.missouri"),
				[i.Lb.Mississippi]: Object(y.e)("stateSorts.mississippi"),
				[i.Lb.Montana]: Object(y.e)("stateSorts.montana"),
				[i.Lb.NorthCarolina]: Object(y.e)("stateSorts.northCarolina"),
				[i.Lb.NorthDakota]: Object(y.e)("stateSorts.northDakota"),
				[i.Lb.Nebraska]: Object(y.e)("stateSorts.nebraska"),
				[i.Lb.NewHampshire]: Object(y.e)("stateSorts.newHampshire"),
				[i.Lb.NewJersey]: Object(y.e)("stateSorts.newJersey"),
				[i.Lb.NewMexico]: Object(y.e)("stateSorts.newMexico"),
				[i.Lb.Nevada]: Object(y.e)("stateSorts.nevada"),
				[i.Lb.NewYork]: Object(y.e)("stateSorts.newYork"),
				[i.Lb.Ohio]: Object(y.e)("stateSorts.ohio"),
				[i.Lb.Oklahoma]: Object(y.e)("stateSorts.oklahoma"),
				[i.Lb.Oregon]: Object(y.e)("stateSorts.oregon"),
				[i.Lb.Pennsylvania]: Object(y.e)("stateSorts.pennsylvania"),
				[i.Lb.RhodeIsland]: Object(y.e)("stateSorts.rhodeIsland"),
				[i.Lb.SouthCarolina]: Object(y.e)("stateSorts.southCarolina"),
				[i.Lb.SouthDakota]: Object(y.e)("stateSorts.southDakota"),
				[i.Lb.Tennessee]: Object(y.e)("stateSorts.tennessee"),
				[i.Lb.Texas]: Object(y.e)("stateSorts.texas"),
				[i.Lb.Utah]: Object(y.e)("stateSorts.utah"),
				[i.Lb.Virginia]: Object(y.e)("stateSorts.virginia"),
				[i.Lb.Vermont]: Object(y.e)("stateSorts.vermont"),
				[i.Lb.Washington]: Object(y.e)("stateSorts.washington"),
				[i.Lb.Wisconsin]: Object(y.e)("stateSorts.wisconsin"),
				[i.Lb.WestVirginia]: Object(y.e)("stateSorts.westVirginia"),
				[i.Lb.Wyoming]: Object(y.e)("stateSorts.wyoming")
			};
			var f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/contexts/Tooltip.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/StateSort/index.m.less"),
				N = s.n(w);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = g.a.wrapped(O.a, "_Dropdown", N.a),
				k = Object(h.a)(P),
				T = e => {
					return e.indexOf("_") > 0 && L(e) === i.v.UnitedStates
				},
				I = e => {
					if (T(e)) {
						return e.split("_")[1]
					}
					return i.Lb.AllStates
				},
				L = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				M = e => {
					const t = L(e),
						s = I(e);
					return T(e) ? "".concat(t, "_").concat(s) : t
				},
				B = Object(f.t)(),
				R = Object(a.c)({
					dropdownIsOpen: Object(j.b)("StateSort--StateSortPicker"),
					language: S.S
				}),
				F = Object(o.b)(R, e => ({
					onOpenDropdown: () => e(Object(p.g)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(i.v.UnitedStates + "_" + s))
					}
				}));
			var A = g.a.wrapped(B(F(e => {
					const t = "".concat(e.baseUrl, "?").concat(x.g, "=").concat(i.v.UnitedStates);
					return r.a.createElement("div", {
						className: e.className,
						onClick: e.onOpenDropdown
					}, r.a.createElement(b.c, {
						disabled: e.disabled
					}, r.a.createElement(b.b, {
						displayText: E[e.sort](e.language),
						id: "StateSort--StateSortPicker",
						showDropdownTriangle: !0
					})), r.a.createElement(v.a.Consumer, null, s => r.a.createElement(k, _({
						isOpen: e.dropdownIsOpen,
						tooltipId: "StateSort--StateSortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(i.Lb).map(s => r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === i.Lb.AllStates ? t : "".concat(t, "_").concat(e))(i.Lb[s]), M(i.Lb[s]))
					}, r.a.createElement(C.b, {
						displayText: E[i.Lb[s]](e.language),
						isSelected: e.sort === s
					}))))))
				})), "Component", N.a),
				D = s("./src/reddit/constants/countrySorts.ts"),
				V = s("./src/reddit/components/CountrySort/index.m.less"),
				H = s.n(V);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(f.t)(),
				K = Object(a.c)({
					dropdownIsOpen: Object(j.b)("CountrySort--CountrySortPicker"),
					language: S.S
				});
			var z = W(Object(o.b)(K, e => ({
					onOpenDropdown: t => e(Object(p.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(s))
					}
				}))(e => {
					const t = L(e.sort),
						s = I(e.sort),
						n = "".concat(e.baseUrl, "?").concat(x.g, "=");
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(u.a)(H.a.countrySort, e.className),
						onClick: () => e.onOpenDropdown("CountrySort--CountrySortPicker")
					}, r.a.createElement(b.c, {
						disabled: e.disabled
					}, r.a.createElement(b.b, {
						displayText: (() => t in D.a ? D.a[t] : D.a[i.v.Everywhere])(),
						id: "CountrySort--CountrySortPicker",
						showDropdownTriangle: !0
					})), r.a.createElement(v.a.Consumer, null, s => r.a.createElement(k, U({
						isOpen: e.dropdownIsOpen,
						tooltipId: "CountrySort--CountrySortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(i.v).map(s => r.a.createElement("div", {
						key: s,
						onClick: () => e.onClickLink("".concat(n).concat(M(i.v[s])), i.v[s])
					}, r.a.createElement(C.b, {
						displayText: D.a[i.v[s]],
						isSelected: t === s
					})))))), t === i.v.UnitedStates && r.a.createElement(A, {
						baseUrl: e.baseUrl,
						disabled: e.disabled,
						sort: s
					}))
				})),
				G = s("./src/reddit/components/TimeSort/index.tsx"),
				q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = s("./src/reddit/constants/page.ts"),
				J = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				Y = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				Z = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				X = s.n(Z);
			const $ = Object(f.t)({
					isProfilePage: f.H,
					pageLayer: e => e
				}),
				ee = Object(a.c)({
					currentUser: S.i,
					language: S.S,
					isPopularListing: f.D,
					redditStyle: f.B
				}),
				te = Object(o.b)(ee, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const r = Object(c.c)({
									sort: t,
									timeSort: n
								});
								e(Object(l.G)(s, r))
							}
						}
					}
				});
			t.a = $(te(Object(q.b)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: n
				} = e, o = e.sort === i.N.TOP || e.sort === i.N.CONTROVERSIAL, a = s && e.countrySort && e.sort === i.N.HOT, c = e => {
					Y.a.setState({
						isListingFocused: e
					})
				};
				return r.a.createElement(d.a, {
					className: e.className,
					onFocus: () => c(!0),
					onBlur: () => c(!1),
					render: s => r.a.Children.toArray([n ? null : r.a.createElement(J.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), n ? null : r.a.createElement("div", {
						className: X.a.separator
					}), r.a.createElement(b.d, {
						className: X.a.listingSort,
						baseUrl: e.baseUrl,
						disabled: t,
						geopopularSort: e.countrySort,
						onChange: e.updateSortPreference,
						sort: e.sort,
						sortOptions: e.sortOptions
					}), !t && o && [r.a.createElement(G.a, {
						baseUrl: "".concat(e.baseUrl, "/").concat(e.sort),
						listingSort: e.sort,
						onChange: t => e.updateSortPreference(e.sort, t),
						timeSort: e.timeSort || i.Pb
					})], a && r.a.createElement(z, {
						baseUrl: e.isPopularListing ? "/r/".concat(Q.g, "/") : "",
						disabled: t,
						sort: e.countrySort
					})])
				})
			})))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				r = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(n.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/svgs/Best/index.m.less"),
				c = s.n(i);
			var d = e => r.a.createElement("svg", {
					className: Object(o.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), r.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				l = s("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = s.n(l);
			var p = e => r.a.createElement("svg", {
					className: Object(o.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				u = s("./src/reddit/icons/svgs/Hot/index.m.less"),
				b = s.n(u);
			var h = e => r.a.createElement("svg", {
					className: Object(o.a)(b.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("title", null, "Hot"), r.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				g = s("./src/reddit/icons/svgs/New/index.m.less"),
				x = s.n(g);
			var y = e => r.a.createElement("svg", {
					className: Object(o.a)(x.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				E = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				f = s.n(E);
			var v = e => r.a.createElement("svg", {
					className: Object(o.a)(f.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				O = s("./src/reddit/icons/svgs/Top/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/index.m.less"),
				j = s.n(C);
			const S = {
				[a.N.BEST]: d,
				[a.N.HOT]: h,
				[a.N.NEW]: y,
				[a.N.CONTROVERSIAL]: p,
				[a.N.TOP]: O.a,
				[a.N.RISING]: v
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const n = S[s];
				return n ? r.a.createElement(n, {
					className: Object(o.a)(t, j.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				ListingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW",
				listingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW"
			}
		},
		"./src/reddit/components/ListingSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "c", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/listingSorts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/helpers/path/index.ts"),
				E = s("./src/reddit/helpers/trackers/navigation.ts"),
				f = s("./src/reddit/i18n/components.tsx"),
				v = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				S = s("./src/reddit/components/ListingSort/index.m.less"),
				w = s.n(S),
				N = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var P = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const k = "ListingSort--SortPicker",
				T = Object(i.a)(N.a.wrapped(g.a, "Dropdown", w.a)),
				I = N.a.wrapped(j.a, "ListingSortIcon", w.a),
				L = (N.a.wrapped(v.b, "DropdownTriangle", w.a), N.a.div("Title", w.a)),
				M = N.a.wrapped(e => r.a.createElement(x.b, _({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", w.a),
				B = e => {
					var {
						disabled: t
					} = e, s = P(e, ["disabled"]);
					return r.a.createElement("div", _({}, s, {
						className: Object(d.a)(w.a.SortWrapper, s.className, {
							[w.a.isDisabled]: t
						})
					}))
				},
				R = N.a.div("DropdownRowDisabled", w.a),
				F = Object(b.t)({
					isFrontpage: b.z,
					isProfilePage: b.H,
					pageLayer: e => e
				}),
				A = Object(a.c)({
					user: C.i,
					dropdownIsOpen: (e, t) => Object(O.b)(t.dropdownId || k)(e),
					language: C.S
				}),
				D = Object(o.b)(A, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: n
					} = t;
					return {
						onOpenDropdown: () => e(Object(m.g)({
							tooltipId: s || k
						}))
					}
				});
			t.d = N.a.wrapped(F(D(Object(p.b)(e => r.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && r.a.createElement(L, null, r.a.createElement(f.c, null, "Sort")), r.a.createElement(B, {
				disabled: e.disabled
			}, e.children || r.a.createElement(M, {
				className: e.buttonClassName,
				displayText: u.a[e.sort],
				id: e.dropdownId || k,
				showDropdownTriangle: !0
			}, r.a.createElement(I, {
				sort: e.sort
			}))), r.a.createElement(h.a.Consumer, null, t => r.a.createElement(T, _({
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || k
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? r.a.createElement(R, null, r.a.createElement(f.c, null, "Coming soon")) : (e.sortOptions || ((e, t) => {
				const s = [l.N.HOT, l.N.NEW, l.N.TOP, l.N.RISING];
				return e && t && s.unshift(l.N.BEST), s
			})(e.isFrontpage, e.user)).map(t => r.a.createElement(x.b, {
				className: Object(d.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: u.a[t],
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(E.d)(t))
				},
				href: e.isProfilePage ? Object(c.a)(e.baseUrl, {
					sort: t
				}) : Object(y.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, r.a.createElement(I, {
				className: e.rowIconClassName,
				sort: t
			}))))))))), "ListingSort", w.a)
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				modModeReports: "_3RpVs_MuohyWxfQ8DMI1hz",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				chain: "vLpzNkGe1yVXuRgtBVQWk",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
			}
		},
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return ee
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/inFeedChaining.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/CallToActionButton/index.tsx"),
				b = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				g = s("./src/reddit/components/FlairWrapper/index.tsx"),
				x = s("./src/reddit/components/Flatlist/index.tsx"),
				y = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = s("./src/reddit/components/LargePost/index.tsx"),
				f = s("./src/reddit/components/ModModeReports/index.tsx"),
				v = s("./src/reddit/components/ModModeReports/helpers.ts"),
				O = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				C = s("./src/reddit/components/PostContainer/index.tsx"),
				j = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				S = s("./src/reddit/components/PostTitle/index.tsx"),
				w = s("./src/reddit/components/PostTopLine/index.tsx"),
				N = s("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = s("./src/reddit/components/SourceLink/index.tsx"),
				P = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				k = s("./src/reddit/components/Thumbnail/index.tsx"),
				T = s("./src/reddit/constants/posts.ts"),
				I = s("./src/reddit/contexts/InsideOverlay.tsx"),
				L = s("./src/reddit/contexts/PageLayer/index.tsx"),
				M = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				B = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				R = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				F = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				A = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				D = s("./src/reddit/helpers/trackers/post.ts"),
				V = s("./src/reddit/models/Subreddit/index.ts"),
				H = s("./src/reddit/models/Vote/index.ts"),
				U = s("./src/reddit/selectors/experiments/categories.ts"),
				W = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				K = s("./src/reddit/selectors/inFeedChaining.ts"),
				z = s("./src/reddit/selectors/moderatorPermissions.ts"),
				G = s("./src/reddit/selectors/monthsToMinutes.ts"),
				q = s("./src/reddit/selectors/postFlair.ts"),
				Q = s("./src/reddit/selectors/posts.ts"),
				J = s("./src/reddit/selectors/user.ts"),
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Z = s.n(Y),
				X = s("./src/reddit/components/MediumPost/index.m.less"),
				$ = s.n(X);
			const ee = e => {
					let {
						crosspost: t,
						post: s,
						forceShowNSFW: n,
						redditStyle: o,
						shouldShowSubscribeButton: a,
						subredditOrProfile: i,
						templatePlaceholderImage: d
					} = e;
					return r.a.createElement("div", {
						className: Object(c.a)($.a.thumbnailContainer, {
							[$.a.mShowingButtonOrOverflow]: a
						})
					}, r.a.createElement("div", {
						className: $.a.thumbnailContainerRow
					}, a && i && r.a.createElement(P.a, {
						className: $.a.subscribeButton,
						getEventFactory: e => Object(D.f)(s.id, e ? "unsubscribe" : "subscribe"),
						identifier: {
							name: i.name,
							type: Object(V.d)(i) ? T.a.PROFILE : T.a.SUBREDDIT
						},
						postId: s.id
					})), r.a.createElement(k.a, {
						crosspost: t,
						post: s,
						redditStyle: o,
						forceShowNSFW: n,
						templatePlaceholderImage: d
					}))
				},
				te = Object(o.b)(() => Object(a.c)({
					crosspost: Q.c,
					currentUser: J.i,
					flairStyleTemplate: L.Q,
					hideNSFWPref: J.z,
					isActive: Q.g,
					isCurrentUserProfilePost: Q.h,
					isFrontpageHome: G.g,
					isM2MHomeRedirectEnabled: W.c,
					isPostChainDismissed: K.c,
					isPostChained: K.d,
					language: J.S,
					moderatorPermissions: z.i,
					modModeEnabled: L.O,
					post: Q.J,
					showEditFlair: q.a,
					showMedia: L.r,
					isInCategoriesExperiment: U.a,
					subredditOrProfile: Q.U
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: r
					} = t;
					return {
						chainPost: () => {
							n && s && e(Object(d.d)({
								listingKey: s,
								listingName: n,
								postId: r
							}))
						},
						handleVote: t => t === H.a.upvoted ? e(Object(l.N)(r)) : e(Object(l.o)(r)),
						onIgnoreReports: () => e(Object(l.L)(r)),
						onOpenReportsDropdown: t => e(Object(m.g)({
							tooltipId: t
						}))
					}
				});
			t.b = te(Object(I.b)(e => {
				const {
					chainPost: t,
					className: s,
					crosspost: n,
					currentUser: o,
					eventFactory: a,
					flairStyleTemplate: d,
					hideNSFWPref: l,
					inSubredditOrProfile: m = !1,
					isCheckboxSelected: P,
					isCommentsPage: k,
					isCurrentUserProfilePost: T,
					isFrontpage: I,
					isFrontpageHome: L,
					isM2MHomeRedirectEnabled: D,
					isOverlay: V,
					isPostChainDismissed: H,
					isPostChained: U,
					language: W,
					listingKey: K,
					listingName: z,
					moderatorPermissions: G,
					modModeEnabled: q,
					onClickPost: Q,
					onIgnoreReports: J,
					onOpenReportsDropdown: Y,
					post: X,
					redditStyle: te,
					showBulkActionCheckbox: se,
					showEditFlair: ne,
					showMedia: re,
					sendEvent: oe,
					subredditOrProfile: ae,
					toggleCheckbox: ie
				} = e, ce = te ? void 0 : d, de = Object(F.a)(G), le = q && de, me = Object(R.a)(G), pe = Object(v.c)(X), ue = Object(B.a)(X), be = m && !re, he = be && !!X.source && !n, ge = !(I && L || T), xe = r.a.createElement(C.a, {
					className: Object(c.a)($.a.container, s, Z.a.largeAndMediumPostStyles, Z.a.largeAndMediumActiveStyles, Object(A.a)(e), {
						[Z.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: V,
					style: Object(A.b)(e.flairStyleTemplate),
					post: X,
					onClick: Q,
					onPostContentClick: t,
					eventFactory: a
				}, Object(E.b)(X, e.handleVote, se, P, ie, ce, te), r.a.createElement(O.a, {
					className: $.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: ce,
					post: X,
					redditStyle: te
				}, r.a.createElement("article", {
					className: $.a.mainBody
				}, r.a.createElement("div", {
					className: $.a.content,
					"data-click-id": "body"
				}, r.a.createElement(w.a, {
					className: $.a.postTopLine,
					hideNSFWPref: l,
					iconClassName: $.a.postTopLineIcon,
					inSubredditOrProfile: m,
					isCommentsPage: k,
					isCurrentUserProfilePost: T,
					isOverlay: !!V,
					language: W,
					post: X,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: he,
					showSubreddit: !m && !X.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: ae
				}), r.a.createElement(S.c, {
					className: $.a.postTitle,
					post: X,
					redditStyle: te,
					size: S.b.Large,
					titleColor: ce && ce.postTitleColor,
					isM2MHomeRedirectEnabled: D,
					isOverlay: V
				}), k && (X.flair && X.flair.length > 0 || e.isInCategoriesExperiment) && r.a.createElement(g.a, {
					className: k ? $.a.leftPadding : null,
					disableFlair: !k,
					post: X,
					sendEvent: oe,
					showCategoryTag: e.isInCategoriesExperiment && k
				}), X.source && !X.isSponsored && !n && r.a.createElement(_.a, {
					className: $.a.sourceLink,
					isCommentsPage: k,
					post: X
				})), !be && ue && r.a.createElement(ee, {
					crosspost: n ? X : void 0,
					hasModPostPerms: de,
					isCommentsPage: k,
					isOverlay: V,
					modModeEnabled: q,
					post: n || X,
					redditStyle: te,
					shouldShowSubscribeButton: ge && !m,
					subredditOrProfile: ae,
					templatePlaceholderImage: ce && ce.postPlaceholderImage
				})), X.source && X.source.url && X.isSponsored && r.a.createElement(p.a, {
					className: $.a.adLinkWrapper
				}, r.a.createElement(M.a, {
					href: X.source.url.replace(i.a.redditUrl, ""),
					isSponsored: X.isSponsored,
					source: X.source
				}, X.source.displayText), X.callToAction && r.a.createElement(u.a, {
					href: X.source.url.replace(i.a.redditUrl, ""),
					isSponsored: X.isSponsored,
					source: X.source,
					isNotCardView: !0
				}, X.callToAction)), q && de && pe && r.a.createElement(f.a, {
					className: $.a.modModeReports,
					language: W,
					onIgnoreReports: J,
					reportable: X
				}), r.a.createElement(y.d, {
					postId: X.id
				}), r.a.createElement("div", {
					className: $.a.flatlistContainer
				}, r.a.createElement(b.a, {
					className: $.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: ce,
					redditStyle: te,
					model: X,
					onVoteClick: e.handleVote
				}), r.a.createElement(x.c, {
					currentUser: o,
					hasModFlairPerms: me,
					hasModPostPerms: de,
					isOverlay: !!V,
					language: W,
					modModeEnabled: q,
					onIgnoreReports: J,
					onOpenReportsDropdown: Y,
					post: X,
					showEditFlair: ne,
					tooltipType: V ? N.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(j.h)({
						editPost: !le,
						save: !le,
						hide: !1,
						report: !1
					})
				}))));
				return r.a.createElement(r.a.Fragment, null, xe, U && !H && r.a.createElement(h.a, {
					className: $.a.chain,
					listingKey: K,
					listingName: z,
					postId: X.id
				}))
			}))
		},
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3TV1zxvLEbF8phHfZ17hyU",
				shareIcon: "_2-No1ECt3Twm8oRh3GhL5T",
				shareMenu: "_1Y9kO8WxKheHpQbgAgYk9P",
				shareText: "_3ZNfZZMmSFZUWWm-nHK327",
				HorizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				horizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				score: "_3O9hIPB_M3zadlrD7rXaEG",
				ShareButton: "_3VIaRwebVBflQjPct1Wz6l",
				shareButton: "_3VIaRwebVBflQjPct1Wz6l"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/app/strings/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			const b = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", u.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					language: m,
					post: p,
					subredditOrProfile: h
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(u.a.container, t)
				}, r.a.createElement(d.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: h.url
				}, r.a.createElement(c.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: h
				}), r.a.createElement("span", null, h.displayText)), ((e, t, s) => {
					if (s) return r.a.createElement("div", {
						role: "img",
						"aria-label": Object(o.a)(e, "posts.crosspostedByFrom", {
							by: Object(l.c)(t),
							from: s.displayText
						})
					}, r.a.createElement(b, null))
				})(m, p.author, s), h && h.isQuarantined && r.a.createElement(i.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className)
				}, r.a.createElement(a.a, {
					className: Object(o.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(o.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(o.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/MiniCardPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/isUrl/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postFlair.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/Media/index.tsx"),
				h = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				C = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Vote/index.ts"),
				S = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				N = s("./src/reddit/selectors/postFlair.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/CommentsLink/index.tsx"),
				T = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				I = s("./src/reddit/components/Flatlist/index.tsx"),
				L = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				B = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				R = s("./src/reddit/components/ShareMenu/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				A = s("./src/reddit/constants/postLayout.ts"),
				D = s("./src/reddit/helpers/trackers/post.ts"),
				V = s("./src/reddit/i18n/components.tsx"),
				H = s("./src/reddit/icons/fonts/Share/index.tsx"),
				U = s("./src/reddit/models/User/index.ts"),
				W = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				K = s.n(W),
				z = s("./src/lib/lessComponent.tsx");
			const G = "-MiniCardModMenu",
				q = "-MiniCardOverflowMenu",
				Q = "-MiniCardShareMenu",
				J = z.a.wrapped(T.a, "HorizontalVotes", K.a),
				Y = z.a.button("ShareButton", K.a),
				Z = Object(E.t)({
					currentProfileName: E.h,
					isCommentPermalink: E.v,
					isCommentsPage: E.w,
					isProfilePostListing: E.I,
					pageLayer: e => e
				}),
				X = Object(a.c)({
					layout: E.M,
					subreddit: E.q
				});
			var $ = Z(Object(o.b)(X, {})(Object(F.b)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: o,
						hasModFlairPerms: a,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: p,
						isSticky: u,
						language: b,
						layout: h,
						modModeEnabled: g,
						onCommentsClick: x,
						post: y,
						sendEvent: E,
						showEditFlair: f,
						showEditPost: v,
						subreddit: O
					} = e, C = e => E(Object(D.f)(y.id, e)), j = y.postId, S = Object(I.d)(G, y.id, m, u), w = !!n && Object(U.f)(n) === y.author;
					return r.a.createElement("div", {
						className: Object(i.a)(K.a.flatlistContainer, s)
					}, r.a.createElement(J, {
						compact: !1,
						model: y,
						onVoteClick: o,
						scoreClassName: K.a.score
					}), r.a.createElement(k.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						postId: y.id,
						modModeEnabled: g,
						numComments: y.numComments,
						type: A.g.Compact,
						onClick: x
					}), r.a.createElement(R.a, {
						className: K.a.shareMenu,
						dropdownId: Object(I.d)(Q, y.id, m, u),
						permalink: y.permalink,
						post: y,
						sendEventWithName: C,
						subreddit: O
					}, r.a.createElement(Y, null, r.a.createElement(H.a, {
						className: K.a.shareIcon
					}), r.a.createElement("span", {
						className: K.a.shareText
					}, r.a.createElement(V.c, null, "share")))), c && r.a.createElement(L.a, {
						dropdownId: S,
						onClick: () => C("post_mod_action_menu")
					}, r.a.createElement(I.b, {
						className: K.a.modActionsIcon
					}), r.a.createElement(M.a, {
						canEditFlair: a && !!f,
						hasModPostPerms: c,
						isOverlay: !!m,
						isPostAuthor: w,
						language: b,
						modModeEnabled: g,
						post: y,
						tooltipId: S
					})), r.a.createElement(B.g, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: h,
						pageLayer: e.pageLayer,
						permalink: y.permalink,
						postId: j,
						dropdownId: Object(I.d)(q, y.id, m, u),
						isFixed: u,
						sendEvent: E,
						showEditPost: !!v,
						showEditFlair: !!f,
						useFlatlistBreakpoints: Object(B.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				ee = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				te = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				se = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ne = s.n(se),
				re = s("./src/reddit/components/MiniCardPost/index.m.less"),
				oe = s.n(re);
			s.d(t, "a", (function() {
				return ie
			}));
			const ae = Object(E.t)(),
				ie = Object(o.b)(() => Object(a.c)({
					activeModalId: S.a,
					autoplayPref: P.b,
					crosspostRoot: _.c,
					crosspostSubredditOrProfile: _.d,
					currentUser: P.i,
					flairStyleTemplate: E.Q,
					hideNSFWPref: P.z,
					isActive: _.g,
					language: P.S,
					moderatorPermissions: w.i,
					modModeEnabled: E.O,
					post: _.J,
					showEditFlair: N.a,
					subredditOrProfile: _.U,
					userIsOp: P.jb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: n,
								selectedTemplateId: r
							} = t;
							return e(Object(m.h)({
								post: s,
								previewFlair: n,
								selectedTemplateId: r
							}))
						},
						handleVote: t => {
							const n = t === j.a.upvoted ? Object(l.N)(s) : Object(l.o)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(l.L)(s)),
						onOpenReportsDropdown: t => e(Object(p.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: n,
							selectedTemplateId: r
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: r
						})
					}
				}));
			t.b = ae(ie(Object(c.a)(e => {
				const {
					autoplayPref: t,
					availableWidth: s,
					className: n,
					crosspostRoot: o,
					crosspostSubredditOrProfile: a,
					currentUser: c,
					eventFactory: l,
					flairStyleTemplate: m,
					forceLoadMedia: p,
					hideNSFWPref: E,
					language: j,
					moderatorPermissions: S,
					modModeEnabled: w,
					onClickPost: N,
					post: _,
					scrollerItemRef: P,
					shouldPause: k,
					showMetaLine: T = !0,
					showEditFlair: I,
					subredditOrProfile: L,
					userIsOp: M
				} = e, {
					media: B
				} = o || _, R = B && B.type, F = Object(x.b)(_.id), A = R === C.n.RTJSON, D = M && A, V = Object(v.a)(S), H = Object(f.a)(S), U = B && R !== C.n.RTJSON && R !== C.n.TEXT, W = !B && !!_.source && Object(d.a)(_.source.url), K = B && r.a.createElement(b.a, {
					autoplayPref: t,
					availableWidth: s,
					className: oe.a.media,
					imageBoxClassName: oe.a.mediaImageBox,
					imageBoxContentImageClassName: oe.a.mediaImageBoxContentImage,
					forceAspectRatio: C.c,
					isListing: !0,
					isMiniCard: !0,
					isNotCardView: !0,
					post: o || _,
					scrollerItemRef: P,
					shouldPause: k,
					shouldLoad: p,
					showCentered: !0,
					showFull: !1
				});
				return r.a.createElement(g.a, {
					className: Object(i.a)(oe.a.postContainer, ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, Object(O.a)(e), n),
					style: Object.assign({}, Object(O.b)(e.flairStyleTemplate), Object(O.d)(e)),
					post: _,
					onClick: N,
					eventFactory: l
				}, r.a.createElement(h.a, {
					className: oe.a.backgroundWrapper,
					flairStyleTemplate: m
				}, U && K, r.a.createElement("div", {
					className: oe.a.innerContainer
				}, W && r.a.createElement(te.a, {
					post: _,
					templatePlaceholderImage: m ? m.postPlaceholderImage : void 0
				}), r.a.createElement(y.c, {
					className: oe.a.postTitleCompact,
					disableFlair: !0,
					hideSourceLink: !0,
					post: _,
					size: y.b.Large,
					titleColor: m && m.postTitleColor
				}), T && L && r.a.createElement(ee.a, {
					className: oe.a.metaLine,
					crosspostSubredditOrProfile: a,
					hideNSFWPref: E,
					language: j,
					post: _,
					subredditOrProfile: L
				}), !U && r.a.createElement("div", {
					className: oe.a.mediaWrapper
				}, K), r.a.createElement("div", {
					className: oe.a.flexSpacer
				}), r.a.createElement($, {
					currentUser: c,
					handleVote: e.handleVote,
					hasModFlairPerms: H,
					hasModPostPerms: V,
					language: j,
					modModeEnabled: w,
					post: _,
					showEditFlair: I,
					showEditPost: D
				}))), e.activeModalId === F && r.a.createElement(x.a, {
					flairs: _.flair,
					subredditId: _.belongsTo.id,
					modalId: F,
					onFlairChanged: e.onFlairChanged
				}), r.a.createElement(u.d, {
					postId: _.id
				}))
			})))
		},
		"./src/reddit/components/MiniPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3fWuhJ6bVet7XJT5A0mZM2",
				title: "_2uR1aBUWmKIo8Fcg-D7bPi",
				thumbnailContainer: "tN3XUE_42h_qcAw7KSnlh",
				postDetails: "_2mURCICbBWv1kFMX2GPzA_",
				meta: "KoclPkialOte6pOEsb4vx"
			}
		},
		"./src/reddit/components/MiniPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/lib/timeAgo/index.ts"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/Thumbnail/index.tsx"),
				u = s("./src/reddit/helpers/overlay/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/MiniPost/index.m.less"),
				y = s.n(x);
			const E = Object(a.a)(e => e, b.J, b.c, g.S, (e, t, s, n) => {
					return {
						crosspost: s,
						language: n,
						post: t,
						subredditOrProfile: Object(h.M)(e, {
							identifier: t.belongsTo
						})
					}
				}),
				f = Object(o.b)(E, (e, t) => ({
					openLightbox: t => e(Object(u.a)(t.permalink))
				}));
			class v extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s()
					}, this.onClickSubreddit = e => {
						const {
							subredditOnClick: t
						} = this.props;
						e.stopPropagation(), t && t()
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
						showSubreddit: s = !1,
						subredditOrProfile: n
					} = this.props;
					return r.a.createElement("div", {
						className: Object(c.a)(y.a.container, e),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: y.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(p.a, {
						post: t
					})), r.a.createElement("div", {
						className: y.a.postDetails
					}, r.a.createElement("p", {
						className: y.a.title,
						title: t.title
					}, t.title), s && n && n.displayText && r.a.createElement(m.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), r.a.createElement("div", null, r.a.createElement("span", {
						className: y.a.meta
					}, Object(i.c)(this.props.language, "posts.points.noun", t.score, {
						count: Object(d.b)(t.score)
					})), r.a.createElement("span", {
						className: y.a.meta
					}, Object(i.c)(this.props.language, "posts.comments.noun", t.numComments, {
						count: Object(d.b)(t.numComments)
					})), r.a.createElement("span", {
						className: y.a.meta
					}, Object(l.d)(this.props.language, t.created / 1e3, !0, !0)))))
				}
			}
			t.a = f(v)
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/i18n/components.tsx"),
				d = s("./src/reddit/components/ModModeReports/index.m.less"),
				l = s.n(d);
			const m = a.a.div("Text", l.a),
				p = a.a.div("Placeholder", l.a),
				u = Object(o.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return r.a.createElement(p, {
							className: t
						})
					},
					getComponent: () => Object(i.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return r.a.createElement(p, {
							className: t
						}, r.a.createElement(m, null, r.a.createElement(c.c, null, "Loading reports…")))
					}
				});
			t.a = e => r.a.createElement(u, e)
		},
		"./src/reddit/components/ModalStyledComponents/Modal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const d = e => e.preventDefault();
			t.a = Object(o.a)(e => {
				const t = !!e.cancelActionText,
					s = !(!e.actionText || !e.onConfirm);
				return r.a.createElement(a.c, {
					style: e.style
				}, r.a.createElement(a.g, null, r.a.createElement(c.a, null, r.a.createElement(a.n, null, e.headerText), !e.hideCancel && r.a.createElement(i.a, {
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, r.a.createElement(a.b, null)))), r.a.createElement(a.j, null, e.modalBody()), (t || s) && r.a.createElement(a.e, null, t && r.a.createElement(a.a, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, e.cancelActionText), s && r.a.createElement(a.r, {
					"data-redditstyle": !0,
					onMouseDown: d,
					onClick: t => {
						e.onConfirm && e.onConfirm(), e.toggleModal(), e.trackClick && e.trackClick()
					}
				}, e.actionText)))
			})
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/Poll/ClosedPoll/index.m.less": function(e, t, s) {
			e.exports = {
				metaData: "_3NpICHyFK-vnQ5_1ZcNtNn",
				option: "_1YnhQ_-VBuRiYmNRfa798"
			}
		},
		"./src/reddit/components/Poll/OpenPoll/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "_3vyz17dpfnySBJJyBF9IqH",
				loggedOutTooltip: "_3YsZUGQHAWfxmTN8wbFYPd",
				controlRow: "_1YKCRAHpaqTk8N5LBvZ9_A",
				loadingIcon: "_2RQF5_CKHRDPDOJ-TwwXFy",
				metaData: "_28wp7DzoykykevfZW56u3_",
				option: "_3nN8pAR2tWvzxcstONuzMH",
				optionRadio: "_1d_v-dIPu8uuwF0UTaQNmF",
				optionText: "_3grr_S6IK0w2iyC7Ocv5u9"
			}
		},
		"./src/reddit/components/Poll/ResultOption/index.m.less": function(e, t, s) {
			e.exports = {
				bar: "_2mybT6Ih7gVf5B6COa9kd2",
				"m-winning": "_1kOO45KEOZraWGZ-cUgKq-",
				mWinning: "_1kOO45KEOZraWGZ-cUgKq-",
				check: "_3CF-7jBH1KihljB9AqaU04",
				container: "_3uG88YeFdY0J8n4v07jkf9",
				count: "_1VDLlB8Ys3WO8XWSZfhomw",
				percent: "_1Ot3PH7267obvD1i_V2D00",
				hide: "_3G6ZB4S9YZ26E49tE8zLJQ",
				show: "iV9AWdqazd5c9IHXNEQXX",
				text: "_3PfYu2DtunAwYpv53tmvOb"
			}
		},
		"./src/reddit/components/Poll/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3xG1v2CUdyxRoHrB7dgiFw"
			}
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Translated/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: r
						} = this.props, o = !!n;
						r(e ? Object(m.o)({
							postId: s,
							isFollowed: o
						}) : Object(m.g)({
							postId: s,
							isFollowed: o
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, n = this.state.isHovered, o = s.isFollowed;
					let a = o ? "collection.follow.followed" : "collection.follow.follow";
					return o && n && (a = "collection.follow.unfollow"), r.a.createElement("button", {
						className: Object(i.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, r.a.createElement(l.a, {
						msgId: a
					}))
				}
			}
			const h = Object(o.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.s)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(d.b)(b))
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, s) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "c", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				p = s("./src/reddit/components/PostLeftRail/index.m.less"),
				u = s.n(p);
			const b = 40,
				h = Object(o.b)(() => Object(a.c)({
					isInAdLeftSidebarExperiment: m.a
				})),
				g = e => e.isSponsored && !e.isInAdLeftSidebarExperiment ? Object(l.a)(e).button : e.isRemoved ? d.a.removed : e.isReported ? d.a.reported : "transparent",
				x = Object(c.a)(e => {
					const t = g(e),
						s = {
							width: "".concat(b, "px"),
							borderLeft: "4px solid ".concat(t)
						};
					return r.a.createElement("div", {
						className: Object(i.a)(u.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = h(x)
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/PostList/Placeholder.tsx"),
				o = s("./src/reddit/components/PostList/LoadMore.m.less"),
				a = s.n(o);
			t.a = n.a.wrapped(r.a, "Component", a.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/constant.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/times.js"),
				a = s.n(o),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/lib/intersectionObserver/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				h = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				g = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				x = s("./src/reddit/components/PostLeftRail/index.tsx"),
				y = s("./src/reddit/components/SubredditIcon/index.tsx"),
				E = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				O = s("./src/reddit/models/Vote/index.ts"),
				C = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				j = s.n(C),
				S = s("./src/reddit/components/LargePost/placeholder.m.less"),
				w = s.n(S);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const P = Object(f.t)(),
				k = Object(l.c)({
					isFakeSubreddit: f.y
				}),
				T = Object(d.b)(k),
				I = e => {
					const t = {
						interactive: !1,
						voteState: O.a.notVoted
					};
					return c.a.createElement("div", {
						className: w.a.emptyVerticalVotes
					}, c.a.createElement(E.d, N({
						key: "u"
					}, t)), c.a.createElement("div", {
						className: w.a.emptyScore,
						key: "s"
					}), c.a.createElement(E.c, N({
						key: "d"
					}, t)))
				},
				L = e => {
					var {
						isLoading: t
					} = e, s = _(e, ["isLoading"]);
					return c.a.createElement(y.b, N({
						className: Object(v.a)({
							isLoading: t
						})
					}, s))
				};
			var M = P(T(e => {
				var {
					className: t,
					dispatch: s,
					pageLayer: n
				} = e, r = _(e, ["className", "dispatch", "pageLayer"]);
				return c.a.createElement("div", {
					className: Object(g.a)(j.a.baseLargeAndMediumPostStyles, t)
				}, c.a.createElement(x.b, {
					key: "a"
				}, c.a.createElement(I, r)), c.a.createElement("div", {
					className: w.a.content,
					key: "b"
				}, c.a.createElement("div", {
					className: w.a.topLine,
					key: "ba"
				}, r.isFakeSubreddit && c.a.createElement(L, {
					key: "baa",
					isLoading: !1
				}), c.a.createElement("div", {
					key: "bab",
					className: Object(g.a)(w.a.topMetaOne, Object(v.b)(r))
				}), c.a.createElement("div", {
					key: "bac",
					className: Object(g.a)(w.a.topMetaTwo, Object(v.b)(r))
				})), c.a.createElement("div", {
					key: "bb",
					className: Object(g.a)(w.a.title, Object(v.b)(r))
				})), c.a.createElement("div", {
					key: "c",
					className: Object(g.a)(w.a.media, Object(v.a)(r))
				}), c.a.createElement("div", {
					className: w.a.content,
					key: "d"
				}, c.a.createElement("div", {
					className: w.a.flatlist
				}, c.a.createElement("div", {
					className: Object(g.a)(w.a.flatlistItemOne, Object(v.b)(r))
				}), c.a.createElement("div", {
					className: Object(g.a)(w.a.flatListItemTwo, Object(v.b)(r))
				}))))
			}));
			const B = {
				[u.g.Large]: [M, 2],
				[u.g.Classic]: [b.b, 10],
				[u.g.Compact]: [h.a, 30]
			};

			function R(e) {
				return B[e]
			}
			const F = .1,
				A = Object(l.c)({
					loadingPostComponentForLayout: () => R
				}),
				D = Object(d.b)(A);
			class V extends c.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && p.b(this.wrapperRef), e && p.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= F;
						m.a.write(() => {
							this.mounted && this.setState(e => e.visible !== t ? {
								visible: t
							} : null)
						})
					}
				}
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0, this.mounted = !0
				}
				componentWillUnmount() {
					this.mounted = !1, this.wrapperRef && p.b(this.wrapperRef)
				}
				render() {
					const {
						className: e,
						countOverride: t,
						isLoading: s,
						layout: n,
						loadingPostComponentForLayout: o
					} = this.props, {
						visible: i
					} = this.state, [d, l] = o(n), m = t || l, p = r()(c.a.createElement(d, {
						isLoading: s && i
					})), u = a()(m, p);
					return c.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, c.a.Children.toArray(u))
				}
			}
			t.a = D(V)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/connectors/connectToLanguage.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/describeApiError/index.ts"),
				d = s("./src/reddit/components/PostList/index.m.less"),
				l = s.n(d);
			t.a = Object(a.a)(e => {
				const {
					language: t,
					onTryAgain: s,
					apiError: r
				} = e;
				let a = n.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return r && (a = Object(c.a)({
					apiError: r,
					language: t,
					isLoggedOut: !1
				})), o.a.createElement("div", {
					className: l.a.somethingWrong
				}, o.a.createElement("div", {
					className: l.a.somethingWrongText
				}, a), s && o.a.createElement(i.f, {
					onClick: s
				}, n.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			})
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, s) {
			e.exports = {
				placeholder: "FohHGMokxXLkon1aacMoi",
				seeMoreButton: "_1Uj2L1UhJuirkaXINcf9S8",
				seeMorePostsText: "_2DB_2VI3a-y6nk57R2aWVo",
				somethingWrong: "zfoxmi0VvZvMZu1rHVbMX",
				somethingWrongText: "Ii7DEkcMDxQHElTHeeaci",
				postList: "rpBJOHq2PR60pnwJlUyP0",
				truncatedPostList: "QBfRw7Rj8UkxybFpX-USO",
				SeeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				seeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				ArrowRight: "wakXAw7uCIqmSRV84RKMW",
				arrowRight: "wakXAw7uCIqmSRV84RKMW"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return G
			})), s.d(t, "a", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				o = s.n(r),
				a = s("./node_modules/lodash/last.js"),
				i = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/fastdom/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				E = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				f = s("./src/reddit/components/Scroller/Simple.tsx"),
				v = s("./src/reddit/components/Translated/index.tsx"),
				O = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/constants/postLayout.ts"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/getClickInfo.ts"),
				N = s("./src/reddit/helpers/pixels.ts"),
				_ = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/helpers/brandSafety/index.ts"),
				T = s("./src/lib/LRUCache/index.ts"),
				I = s("./src/telemetry/index.ts"),
				L = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/components/PostList/index.m.less"),
				B = s.n(M),
				R = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const F = 500,
				A = new T.a(F),
				D = new T.a(F),
				V = new T.a(F),
				H = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				U = h.a.div("SeeMore", B.a),
				W = h.a.wrapped(_.a, "ArrowRight", B.a),
				K = (e, t, s, n, r, o, a, i) => {
					const c = s ? "last-".concat(n, "-").concat(r) : "",
						d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(o);
					let l = A.get(d);
					return void 0 === l && (l = () => {
						s && a.onBottomViewed(n, r), a.trackOnPostEnteredViewport(e, t, i)
					}, A.set(d, l)), l
				},
				z = (e, t, s, n) => {
					const r = "left-".concat(e, "-").concat(t);
					let o = D.get(r);
					return void 0 === o && (o = r => {
						s.trackOnPostExitedViewport(e, t, r, n)
					}, D.set(r, o)), o
				},
				G = (e, t) => {
					const s = "click-".concat(e);
					let n = V.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && Object(N.a)(s.events, O.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.c)(s.source.outboundUrl, g.b.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(w.a)(e)
						})
					}, V.set(s, n)), n
				},
				q = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case j.g.Medium:
							return 188;
						case j.g.Classic:
							return 96;
						case j.g.Compact:
							return 32;
						default:
							return 200
					}
				},
				Q = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class J extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new T.a(F), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = o()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: n
						} = this.props, r = t(), o = [];
						r.forEach(e => o.push(e.id));
						const a = o.map(e => s[e]).filter(Boolean),
							i = a.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(k.a)(a, i))
					}, u.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && I.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = I.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = I.c.end(this.timerId);
						setTimeout(() => Object(I.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && I.c.cancel(this.timerId), e.postIds.length && (this.timerId = I.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (b.a.read(() => this.checkAndSendScreenview()), this.timerId && I.c.has(this.timerId)) {
						const e = I.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(I.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && I.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && i()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return I.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = I.c.end(e);
					setTimeout(() => {
						s(t(n, L.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							postsById: s
						} = t,
						n = R(t, ["postsById"]),
						{
							postsById: r
						} = e,
						o = R(e, ["postsById"]),
						a = Object.keys(n),
						i = Object.keys(o);
					if (i.length !== a.length) return !0;
					if (i.some(e => n[e] !== o[e])) return !0;
					if (s === r) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((n, o) => {
							const a = 0 === o;
							return t({
								isFirstPost: a,
								layout: e,
								post: s[n]
							}) !== t({
								isFirstPost: a,
								layout: e,
								post: r[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: r,
						isCommentPermalink: o,
						isCommentsPage: a,
						isFrontpage: i,
						isProfilePostListing: c,
						listingKey: l,
						listingName: m,
						pageLayer: p,
						pageReferrer: b,
						postClickEvent: h,
						redditStyle: g
					} = this.props, y = 0 === t, E = s ? "last-index" : "", f = "post-".concat(n, "-").concat(e, "-").concat(t, "-").concat(E, "-").concat(m, "-").concat(l, "-").concat(b);
					let v;
					if (void 0 === (v = this.scrollChildCache.get(f))) {
						const {
							inSubredditOrProfile: E,
							postsById: O
						} = this.props, C = O[e], S = C.crosspostRootId && O[C.crosspostRootId] ? O[C.crosspostRootId] : C;
						C.crosspostRootId && !O[C.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", u.p.API), e.setExtra("description", "Post ".concat(C.id, " is crosspost of ").concat(C.crosspostRootId, ", but ") + "".concat(C.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const w = this.props.postComponentForLayout({
								isCrosspost: !!C.crosspostRootId,
								isFirstPost: y,
								layout: n,
								post: S
							}),
							N = "post-list-item-[layout: ".concat(n, "]-[postId: ").concat(e, "]"),
							_ = K(e, n, s, l, m, b, this.props, t),
							k = z(e, n, this.props, t),
							T = G(e, this.props),
							I = S.media && S.media.type === P.n.EMBED ? S.media.provider : null;
						v = {
							estHeight: q(C, n),
							id: e,
							isFocusable: !(!S.media || n !== j.g.Large) && (P.d.has(S.media.type) && (!I || !P.q.has(I)) && !S.isSpoiler && !S.isNSFW),
							trackOnEnteredViewport: _,
							trackOnExitedViewport: k,
							render: t => {
								let {
									className: n,
									height: u,
									width: b,
									remeasure: x,
									setScrollerChildRef: f,
									shouldLoadInitially: v
								} = t;
								return d.a.createElement(w, {
									className: n,
									currentProfileName: r,
									key: N,
									availableWidth: b,
									eventFactory: h,
									first: y,
									forceLoadMedia: v,
									inSubredditOrProfile: E,
									isCommentPermalink: o,
									isCommentsPage: a,
									isFrontpage: i,
									isProfilePostListing: c,
									listingKey: l,
									listingName: m,
									pageLayer: p,
									last: s,
									onClickPost: T,
									onSizeChanged: x,
									postId: e,
									redditStyle: g,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: f
								})
							}
						}, this.scrollChildCache.set(f, v)
					}
					return v
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return d.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: n,
						onTryAgain: r,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const a = o;
					return d.a.createElement("div", {
						className: B.a.placeholder
					}, d.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && d.a.createElement(E.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: r,
						onLoadMore: o
					} = this.props;
					if (!s) return d.a.createElement("div", {
						className: B.a.placeholder
					}, d.a.createElement(y.a, {
						className: r,
						isLoading: !!t,
						layout: n,
						countOverride: H[n]
					}), !!e && d.a.createElement(E.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: o,
						layout: a,
						location: i,
						loadMore: l,
						postIds: b,
						onLoadMore: h
					} = this.props;
					let g = b.map((e, t, s) => {
						const n = t === b.length - 1;
						return this.scrollChildForPost(e, t, n, a)
					});
					r && (g = Q(g, r));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(a) : void 0,
						y = i ? Object(n.e)(i) : null,
						E = y || o;
					return d.a.createElement(c.Fragment, null, d.a.createElement(f.b, {
						innerRef: this.updateScrollerRef,
						className: E ? B.a.truncatedPostList : Object(p.a)(B.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: h,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: C.g
					}, g), y && d.a.createElement(U, {
						className: B.a.seeMoreButton
					}, d.a.createElement(S.a, {
						className: B.a.seeMorePostsText,
						to: Object(m.a)(y, {
							type: u.Jb.Posts
						})
					}, d.a.createElement(v.a, {
						msgId: "search.seeMorePosts"
					}), d.a.createElement(W, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			J.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: d.a.Fragment
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1SRZN02bVXzHIIMqGwlZD7",
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/components/PostTopLine/index.m.less"),
				v = s.n(f);
			const O = s("./src/lib/lessComponent.tsx").a.div("Container", v.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideNSFWPref: n,
					iconClassName: f,
					inSubredditOrProfile: C,
					isCurrentUserProfilePost: j,
					isCommentsPage: S,
					isCompactPinnedPost: w,
					isOverlay: N,
					language: _,
					post: P,
					publicAwardersEnabled: k,
					shouldShowSubscribeButton: T,
					showCornerOutboundLink: I,
					showSubreddit: L,
					showSubredditIcon: M,
					subredditOrProfile: B
				} = e, R = S && k;
				return r.a.createElement(O, {
					className: t
				}, L && B && r.a.createElement("div", {
					className: v.a.subredditIconWrapper
				}, r.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: B.url
				}, M && r.a.createElement(m.b, {
					className: Object(o.a)(v.a.subredditIcon, f),
					shouldHideNsfwIcon: n,
					subredditOrProfile: B
				}))), r.a.createElement("div", {
					className: v.a.everythingElseWrapper
				}, L && r.a.createElement(c.h, {
					type: P.belongsTo.type,
					id: P.belongsTo.id
				}), r.a.createElement(l.d, {
					className: v.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: N ? l.c.Lightbox : void 0,
					language: _,
					post: P,
					showSub: L,
					subredditOrProfile: B
				}), r.a.createElement(d.a, {
					className: v.a.postBadges,
					displayText: B ? B.displayText : null,
					inSubredditOrProfile: C,
					language: _,
					isCompactPinnedPost: w,
					post: P,
					tooltipType: N ? l.c.Lightbox : void 0
				}), B && r.a.createElement(i.a, {
					className: v.a.donationAmount,
					contentId: P.id,
					subredditId: B.id
				}), r.a.createElement(a.a, {
					forceShowAllAwards: S,
					isOverlay: N,
					showAwarders: R,
					tooltipType: N ? l.c.Lightbox : void 0,
					thing: P
				})), B && L && T && !j && r.a.createElement(u.a, {
					getEventFactory: e => Object(g.f)(P.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: B.name,
						type: Object(E.d)(B) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: P.id
				}, "Subscribe"), I && r.a.createElement(h.a, {
					className: v.a.OutboundLink,
					isSponsored: P.isSponsored,
					href: Object(y.A)(e.post),
					source: P.source
				}, r.a.createElement(x.a, {
					className: v.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/PremiumCTA/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_1b1Jalg2nxA_Z-BjKXRfAV",
				icon: "_3-m5rOa3loUClNwpCv1uWU",
				content: "_1LofvgShcWAGgRJOa2IRlf",
				title: "_17PUokUAvL3YJx6EyPdD9d",
				description: "rn1KP8t9htFxyeAF8fdJ4",
				cta: "_1Cg0rke34k99vLcCo_aCP1"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/placeholders.tsx");
			const i = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: s
					} = e;
					return r.a.createElement(a.a, {
						className: t,
						layout: s
					})
				},
				getComponent: () => s.e("RpanListingUnit").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			t.a = e => r.a.createElement(i, e)
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/postLayout.ts");
			const r = e => e === n.g.Classic ? 88 : e === n.g.Compact ? 42 : 340
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				moreContainer: "_3WyMekikYHiwNeWOKndqQp",
				moreCaption: "_2OsGQXO2YdWHs0NVAbBl99",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				thumbnailTitle: "asOYju9PbMblWUua6ZsDl",
				watchingCounter: "_39XcbVabXFJtShzyIs8H1I",
				redditorIcon: "_2hUZYf9a2TRLQxn5jLEohm",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				descriptionPlaceholder: "_1WqW1SYAmWeFcfecGlX5vw",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/placeholders.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				c = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				l = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = s.n(m),
				u = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				b = s.n(u);
			const h = e => {
					let {
						className: t
					} = e;
					return r.a.createElement("div", {
						className: Object(o.a)(t, b.a.container, b.a.placeholder, b.a.large, p.a.largeAndMediumPostStyles)
					}, r.a.createElement(d.a, {
						className: b.a.backgroundWrapper
					}, r.a.createElement("div", {
						className: b.a.titleAndDescriptionContainer
					}, r.a.createElement("div", {
						className: b.a.titlePlaceholder
					}), r.a.createElement("div", {
						className: b.a.descriptionPlaceholder
					})), r.a.createElement("div", {
						className: b.a.body
					}, g(a.i))))
				},
				g = e => Array.from({
					length: e
				}).map((e, t) => r.a.createElement("div", {
					className: Object(o.a)(b.a.thumbnailContainer, b.a.placeholder),
					key: "rpan-thumb-placeholder-".concat(t)
				}, r.a.createElement("div", {
					className: Object(o.a)(b.a.thumbnail, b.a.placeholder)
				})));
			t.a = e => {
				let {
					className: t,
					layout: s
				} = e;
				return s === l.g.Classic ? r.a.createElement(i.b, {
					className: Object(o.a)(t, b.a.classicPostPlaceholder),
					isLoading: !0
				}) : s === l.g.Compact ? r.a.createElement(c.a, {
					className: Object(o.a)(t, b.a.compactPostPlaceholder),
					isLoading: !0
				}) : r.a.createElement(h, {
					className: t
				})
			}
		},
		"./src/reddit/components/RailsWidgets/GeopopularPosts/index.m.less": function(e, t, s) {
			e.exports = {
				GeoObject: "_1i52oG5xjHm7jqKUlami21",
				geoObject: "_1i52oG5xjHm7jqKUlami21"
			}
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "Pr5bGphZnd_UYC5p4gJCD",
				container: "Pr5bGphZnd_UYC5p4gJCD",
				PopularIcon: "_2uzMzf2xHgtXHeHKoewIn9",
				popularIcon: "_2uzMzf2xHgtXHeHKoewIn9"
			}
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/icons/svgs/Popular/index.tsx"),
				c = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					children: t,
					className: s,
					showIcon: n
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.Container, s)
				}, n && r.a.createElement(i.a, {
					className: d.a.PopularIcon
				}), r.a.createElement(a.b, {
					type: a.a.Widget
				}, t))
			}
		},
		"./src/reddit/components/SEOSidebarLinks/index.m.less": function(e, t, s) {
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
				extraSmallFont: "_35NIohQQNO8kbNHfaERcv4",
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
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("header", o.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/FlairWrapper/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/index.tsx"),
				u = s("./src/reddit/components/Translated/index.tsx"),
				b = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				y = s("./src/reddit/helpers/name/index.ts"),
				E = s("./src/reddit/i18n/components.tsx"),
				f = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/components/MiniCardPost/index.m.less"),
				j = s.n(C),
				S = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				w = s.n(S);
			const N = e => e.type === f.f.Spoiler,
				_ = Object(h.t)();
			t.a = _(Object(p.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					innerContainerClassName: r,
					onPostClick: c,
					trendingPost: p,
					trendingSearch: h,
					shouldOpenPost: f,
					showSubredditMeta: C = !0,
					showSubredditName: S,
					subredditOrProfile: _
				} = e, P = p && p.preview && p.preview.url || void 0, k = p && p.isSponsored ? "promoted_trend" : "trending", T = p && Object(d.a)(p.permalink) || "", I = f && T || h && Object(a.a)("/search", {
					q: h.rawQuery,
					source: k
				}) || T, L = h ? h.subredditInfo && h.subredditInfo.icon : _ && _.icon.url, M = h ? h.subredditInfo && h.subredditInfo.displayText : _ && (_.displayText || _.name), B = p ? p.flair.filter(N) : [], R = p ? p.score : 0, F = p ? p.numComments : 0, A = p && p.isSponsored, D = Object(O.a)(e).body, V = "linear-gradient(\n      ".concat(Object(n.j)(D, .2), ",\n      ").concat(Object(n.j)(D, .3), ",\n      ").concat(Object(n.j)(D, .4), ",\n      ").concat(Object(n.j)(D, .6), ",\n      ").concat(Object(n.j)(D, .8), ",\n      ").concat(D, "\n    )"), H = o.a.createElement("div", {
					className: Object(i.a)(w.a.trendingPost, {
						[w.a["m-background"]]: !!P
					})
				}, o.a.createElement(g.a, {
					to: I
				}, o.a.createElement("div", {
					className: Object(i.a)(w.a.backgroundWrapper, j.a.backgroundWrapper, t),
					style: {
						background: Object(v.g)(Object(O.a)(e).body, P || Object(O.a)(e).banner.backgroundImage, "cover"),
						"--SearchDiscoveryUnits-TrendingPosts-Post-background": V
					}
				}, A && o.a.createElement("div", {
					className: w.a.promoted
				}, o.a.createElement(E.c, null, "promoted")), o.a.createElement("div", {
					className: Object(i.a)(w.a.innerContainer, j.a.innerContainer, r),
					onClick: c,
					title: p ? p.title : ""
				}, o.a.createElement("h2", {
					className: p ? w.a.title : w.a.titleNoDescription
				}, e.title), p ? o.a.createElement("div", {
					className: Object(i.a)(w.a.description, s)
				}, B.length > 0 && o.a.createElement(m.a, {
					className: w.a.flair,
					titleFlair: B,
					nowrap: !0,
					post: p,
					showCategoryTag: !1
				}), p.title) : o.a.createElement("div", {
					className: w.a.spacer
				}), C && L && M && o.a.createElement(x.a, {
					className: w.a.relatedSubredditMetaData,
					iconClassName: w.a.subredditIcon,
					iconUrl: L || void 0,
					suffix: o.a.createElement(u.a, {
						msgId: "search.subredditMetaData.andMore",
						replacements: {
							displayText: M
						}
					})
				}), !C && p && o.a.createElement("div", {
					className: w.a.metaLine
				}, S && M && o.a.createElement("span", {
					className: w.a.meta
				}, Object(y.b)(M)), o.a.createElement("span", {
					className: w.a.meta
				}, o.a.createElement(E.c, null, "".concat(Object(l.b)(R), " "), o.a.createElement(E.a, {
					count: R,
					name: "score",
					plural: "points",
					singular: "point"
				}))), o.a.createElement("span", {
					className: w.a.meta
				}, o.a.createElement(E.c, null, "".concat(Object(l.b)(F), " "), o.a.createElement(E.a, {
					count: F,
					name: "numComments",
					plural: "comments",
					singular: "comment"
				}))))))));
				return A ? o.a.createElement(b.a, {
					post: p,
					children: H
				}) : H
			})))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const {
					className: t,
					exploreV2Variant: s,
					layoutBodyClassName: n,
					showCardView: i
				} = e, d = {
					[c.a["m-card"]]: i
				};
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, d, t)
				}, r.a.createElement(a.a, {
					className: s ? void 0 : c.a.layout,
					bodyClassName: Object(o.a)(c.a.layoutBody, d, n),
					exploreV2Variant: s,
					header: e.header,
					headerClassName: Object(o.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3_c5cqV3WsdQo95Ql4El73",
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = s("./src/reddit/components/Translated/index.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				m = s.n(l);
			const p = r.a.createElement(a.a, {
					className: m.a.duHeader
				}, r.a.createElement(c.a, {
					msgId: "discoveryUnits.trendingToday"
				})),
				u = Object(d.a)({
					isLoading: !0
				});
			t.a = e => r.a.createElement(i.a, {
				className: e.className,
				exploreV2Variant: e.exploreV2Variant,
				header: p,
				layoutBodyClassName: m.a.layoutBody,
				showCardView: e.showCardView,
				children: Array.from({
					length: e.numberOfItems || 6
				}).map(e => r.a.createElement("div", {
					className: m.a.post,
					key: "placeholder-post-".concat(e)
				}, r.a.createElement("div", {
					className: Object(o.a)(m.a.desc, m.a.one, u)
				}), r.a.createElement("div", {
					className: Object(o.a)(m.a.desc, m.a.two, u)
				}), r.a.createElement("div", {
					className: Object(o.a)(m.a.icon, u)
				}), r.a.createElement("div", {
					className: Object(o.a)(m.a.name, u)
				})))
			})
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/BannerAd/index.tsx"),
				d = s("./src/config.ts"),
				l = s("./node_modules/lodash/random.js"),
				m = s.n(l),
				p = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.div("BannerContainer", u.a),
				g = b.a.wrapped(e => r.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", u.a),
				x = [{
					img: "/img/house-ads/btc.png",
					href: "/r/btc"
				}, {
					img: "/img/house-ads/campfirecooking.png",
					href: "/r/campfirecooking"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/rubberducks.png",
					href: "/r/advertising"
				}, {
					img: "/img/house-ads/casualconversation.png",
					href: "/r/casualconversation"
				}, {
					img: "/img/house-ads/fantrailers.png",
					href: "/r/fantrailers"
				}, {
					img: "/img/house-ads/imaginarycolorscapes.png",
					href: "/r/imaginarycolorscapes"
				}, {
					img: "/img/house-ads/imaginarydragons.png",
					href: "/r/imaginarydragons"
				}, {
					img: "/img/house-ads/oldschoolcelebs.png",
					href: "/r/oldschoolcelebs"
				}];
			var y = () => {
					const e = m()(0, x.length - 1),
						{
							img: t,
							href: s
						} = x[e];
					return r.a.createElement(h, {
						className: "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, r.a.createElement("a", {
						href: d.a.redditUrl + s,
						target: "_blank"
					}, r.a.createElement(g, {
						src: d.a.assetPath + t
					})))
				},
				E = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/components/PostMedia/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				O = s("./src/reddit/components/PostTopMeta/index.tsx"),
				C = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				j = s("./src/lib/getShortenedLink.ts"),
				S = s("./src/lib/opener/index.ts"),
				w = s("./src/reddit/actions/ads/index.ts"),
				N = s("./src/reddit/components/PostContainer/index.tsx"),
				_ = s("./src/reddit/constants/adEvents.ts"),
				P = s("./src/reddit/contexts/InsideOverlay.tsx"),
				k = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				T = s("./src/reddit/helpers/adCount/index.ts"),
				I = s("./src/reddit/helpers/pixels.ts"),
				L = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				M = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				B = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				R = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				F = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				A = s("./src/reddit/models/Theme/index.ts"),
				D = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				V = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/reddit/components/NativeBannerAd/index.m.less"),
				U = s.n(H);
			const W = b.a.wrapped(e => r.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", U.a);
			class K extends r.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = e.media && !Object(V.E)(e.media) ? e.media.content : "",
						{
							type: s
						} = e.media;
					if (!t || !s) return null;
					switch (s) {
						case E.eb.IMAGE:
							return r.a.createElement(W, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var z = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				G = s.n(z);
			const q = b.a.wrapped(O.d, "PostTopMeta", G.a),
				Q = b.a.div("BannerAdContainer", G.a),
				J = e => {
					let {
						children: t
					} = e;
					return r.a.createElement("div", null, t)
				},
				Y = b.a.div("PromotedPostContainer", G.a),
				Z = b.a.wrapped(R.a, "OutboundLinkIcon", G.a),
				X = b.a.div("SourceLinkWrapper", G.a),
				$ = b.a.div("TopLine", G.a),
				ee = b.a.wrapped(v.c, "PostTitle", G.a),
				te = b.a.div("PostMediaWrapper", G.a),
				se = b.a.div("BackgroundWrapper", G.a),
				ne = b.a.wrapped(N.a, "PostContainer", G.a),
				re = 640,
				oe = (e, t) => {
					Object(I.a)(t.events, _.a.Click), t.source ? t.source.outboundUrl ? Object(S.c)(t.source.outboundUrl, S.b.BLANK) : Object(S.c)(t.source.url, S.b.BLANK) : Object(S.c)(t.permalink, S.b.BLANK)
				},
				ae = e => Object(B.a)(e.title, 100),
				ie = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(M.a)(Object(L.a)(e), F.a.actionIcon, F.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				ce = e => ({
					background: Object(A.g)(Object(D.a)(e).body, null, null) || ""
				});
			class de extends r.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: s,
						isOverlay: n
					} = this.props;
					let o, a, c = {};
					return e.isBlank ? (o = J, a = null) : e.isMediaOnly ? (o = Q, c = {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}, a = r.a.createElement(K, {
						post: e
					})) : (o = Y, a = r.a.createElement(se, {
						style: ce(this.props)
					}, r.a.createElement($, null, r.a.createElement(q, {
						tooltipType: n ? O.c.Lightbox : void 0,
						language: E.y,
						post: e,
						showTimestamp: !1
					})), r.a.createElement(ee, {
						post: e,
						size: v.b.Large,
						format: ae
					}), e.source && r.a.createElement(X, null, r.a.createElement(k.a, {
						href: e.source.url,
						isSponsored: !0,
						source: e.source
					}, Object(j.a)(e), r.a.createElement(Z, null))), r.a.createElement(te, null, e.media && r.a.createElement(f.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: re,
						shouldLoad: !0
					})))), r.a.createElement(o, c, r.a.createElement(ne, {
						className: t,
						isOverlay: n,
						post: e,
						onClick: oe,
						eventFactory: s,
						style: ie(this.props)
					}, a))
				}
			}
			var le = Object(o.b)(null, (e, t) => ({
					refreshSidebarPromotedPost: () => {
						const {
							placement: s,
							placementIndex: n,
							isOverlay: r
						} = t;
						e(Object(w.c)(Object(T.a)(s, !!r, n)))
					}
				}))(Object(P.b)(Object(C.a)(de))),
				me = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				pe = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				ue = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				be = s.n(ue);
			const he = Object(a.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(T.a)(s, r, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				ge = Object(o.b)(he),
				xe = b.a.wrapped(c.a, "BannerAd", be.a),
				ye = b.a.wrapped(pe.a, "ThemedWidget", be.a),
				Ee = b.a.div("SidebarAdPlaceholder", be.a),
				fe = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				ve = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(V.B)(e.media) && e.media.content)),
				Oe = e => !!e && e.isBlank;
			class Ce extends r.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: n,
						placementIndex: o,
						refreshKey: a,
						listingName: c,
						placement: d,
						sizes: l,
						position: m,
						redditStyle: p,
						forcePlaceholder: u,
						forceHouseAd: b,
						waitForProgrammatic: h
					} = this.props;
					return u || t || !ve(s) && h ? r.a.createElement(me.a, null, r.a.createElement(ye, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, r.a.createElement(Ee, {
						"data-before-content": Object(i.a)("en", "sidebar.sponsored")
					}))) : b ? r.a.createElement(me.a, null, r.a.createElement(y, null)) : ve(s) ? r.a.createElement(me.a, null, r.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: c,
						placement: d,
						placementIndex: o
					})) : r.a.createElement(me.a, null, r.a.createElement(ye, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: p
					}, Oe(s) && r.a.createElement(le, {
						post: s,
						refreshKey: a,
						listingName: c,
						placement: d,
						placementIndex: o
					}), r.a.createElement(xe, {
						id: fe(d, n, o),
						sizes: l,
						placement: d,
						listingName: c,
						refreshKey: a,
						position: m,
						dataBeforeContent: Object(i.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = ge(Ce)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const p = Object(a.t)();
			t.a = p(Object(o.b)((e, t) => {
				let {
					listingName: s,
					pageLayer: n
				} = t;
				const r = Object(i.b)(e, {
						listingName: s,
						pageLayer: n
					}),
					o = Object(c.y)(e),
					a = Object(i.e)(e);
				return {
					canShowAd: r && !o,
					forcePlaceholder: !Object(i.c)(e),
					isAdsDisabled: o,
					viewIsUnsafe: a
				}
			})(e => {
				var {
					canShowAd: t,
					isAdsDisabled: s,
					viewIsUnsafe: n,
					pageLayer: o
				} = e, a = m(e, ["canShowAd", "isAdsDisabled", "viewIsUnsafe", "pageLayer"]);
				return !s && t && o ? r.a.createElement(d.a, l({
					forceHouseAd: n
				}, a)) : null
			}))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarFlairSettings/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_2a172ppKObqWfRHr8eWBKV",
				FlairSettingsContainer: "_39-woRduNuowN7G4JTW4I8",
				flairSettingsContainer: "_39-woRduNuowN7G4JTW4I8",
				FlairPreview: "_3AOoBdXa2QKVKqIEmG7Vkb",
				flairPreview: "_3AOoBdXa2QKVKqIEmG7Vkb",
				EditPencil: "vzEDg-tM8ZDpEfJnbaJuU",
				editPencil: "vzEDg-tM8ZDpEfJnbaJuU",
				PreviewTitle: "r51dfG6q3N-4exmkjHQg_",
				previewTitle: "r51dfG6q3N-4exmkjHQg_",
				FlairComponent: "_2ygXHcy_x6RG74BMk0UKkN",
				flairComponent: "_2ygXHcy_x6RG74BMk0UKkN",
				TertiaryButton: "_2BnLYNBALzjH6p_ollJ-RF",
				tertiaryButton: "_2BnLYNBALzjH6p_ollJ-RF",
				IconButton: "_1-25VxiIsZFVU88qFh-T8p",
				iconButton: "_1-25VxiIsZFVU88qFh-T8p",
				Username: "_3BmRwhm18nr4GmDhkoSgtb",
				username: "_3BmRwhm18nr4GmDhkoSgtb"
			}
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = o.a.a("Link", c.a);
			t.a = e => r.a.createElement(a.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, r.a.createElement("div", {
				className: c.a.LinkContainer
			}, r.a.createElement("div", {
				className: c.a.Column
			}, r.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, d._("help", null, {
				hk: "4lyYaD"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, d._("Reddit App", null, {
				hk: "1ehrjP"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, d._("Reddit coins", null, {
				hk: "32iMaN"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, d._("Reddit premium", null, {
				hk: "RuO3A"
			})), r.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, d._("Reddit gifts", null, {
				hk: "2XziRN"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, d._("Communities", null, {
				hk: "3CJu37"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, d._("Top Posts", null, {
				hk: "2NOEW2"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, d._("Topics", null, {
				hk: "349RFt"
			}))), r.a.createElement("div", {
				className: c.a.Column
			}, r.a.createElement(l, {
				href: "https://about.reddit.com"
			}, d._("about", null, {
				hk: "1sqJKs"
			})), r.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, d._("careers", null, {
				hk: "26ABvc"
			})), r.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, d._("press", null, {
				hk: "2Qmgdz"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, d._("advertise", null, {
				hk: "Mt40U"
			})), r.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, d._("blog", null, {
				hk: "46IQJw"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, d._("Terms", null, {
				hk: "4qRzfE"
			})), r.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, d._("Content policy", null, {
				hk: "1DyxZS"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, d._("Privacy policy", null, {
				hk: "10K04G"
			})), r.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, d._("Mod policy", null, {
				hk: "2gYc2T"
			})))), r.a.createElement("div", {
				className: c.a.Copyright
			}, d._("Reddit Inc © {year}. All rights reserved", [d._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, s) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarPostList/ObservedPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r);
			const a = .99;
			class i extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= a && t(s)
					}
				}
				render() {
					return o.a.createElement(n.a, {
						threshold: a,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			t.a = i
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/isFakeSubreddit/index.ts"),
				d = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/name/index.ts"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/components/SidebarPostList/ObservedPost/index.tsx"),
				x = s("./src/lib/isUrl/index.ts"),
				y = s("./src/lib/prettyPrintNumber/index.ts"),
				E = s("./src/reddit/components/FlairWrapper/index.tsx"),
				f = s("./src/reddit/components/Thumbnail/index.tsx"),
				v = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				S = s.n(j);
			const w = e => e.type === v.f.Nsfw || e.type === v.f.Spoiler,
				N = Object(a.c)({
					language: C.S,
					post: h.J,
					subredditOrProfile: h.U
				});
			class _ extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s(t.id)
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && s(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						redditStyle: s,
						showSubredditName: n,
						subredditOrProfile: o
					} = this.props, a = {
						post: t
					}, c = Object(x.a)(Object(f.b)(a)), d = t.flair.filter(w);
					return r.a.createElement("div", {
						className: Object(i.a)(S.a.container, e, {
							[S.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, r.a.createElement("div", {
						className: S.a.mainLine
					}, c && r.a.createElement("div", {
						className: S.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, r.a.createElement(f.a, a)), r.a.createElement("div", {
						className: Object(i.a)(S.a.title, !c && S.a.titleSingle),
						title: t.title
					}, d.length > 0 && r.a.createElement(E.a, {
						className: S.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), r.a.createElement("div", {
						className: S.a.metaLine
					}, n && !!o && r.a.createElement("span", {
						className: S.a.meta
					}, Object(O.d)(o) ? Object(m.c)(o.displayText || o.name) : Object(m.b)(o.displayText || o.name)), r.a.createElement("span", {
						className: S.a.meta
					}, "".concat(Object(y.b)(t.score), " "), r.a.createElement(u.a, {
						count: t.score,
						name: "score",
						plural: "points",
						singular: "point"
					})), r.a.createElement("span", {
						className: S.a.meta
					}, "".concat(Object(y.b)(t.numComments), " "), r.a.createElement(u.a, {
						count: t.numComments,
						name: "numComments",
						plural: "comments",
						singular: "comment"
					}))))
				}
			}
			var P = Object(o.b)(N, e => ({
					openLightbox: t => e(Object(p.a)(t.permalink))
				}))(_),
				k = s("./src/reddit/components/SidebarPostList/index.m.less"),
				T = s.n(k);
			s.d(t, "b", (function() {
				return M
			}));
			const I = 10,
				L = 2,
				M = Object(a.a)(h.O, e => e.filter(e => !e.isSponsored)),
				B = Object(a.c)({
					posts: M
				}),
				R = Object(o.b)(B, e => ({
					openPost: t => e(Object(p.a)(t.permalink))
				}));
			class F extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: s
						} = this.props, [n] = s;
						n && (t(n), e && e(n.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || I, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((s, n) => (e = Math.ceil(n.posts.length / t), {
							chunkIdx: s.chunkIdx < e - 1 ? s.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: s,
							onPostVisible: n,
							redditStyle: o,
							smallPostClassName: a
						} = this.props;
						return r.a.createElement(g.a, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, r.a.createElement(P, {
							className: Object(i.a)(T.a.smallPost, a),
							containerOnClick: s,
							postId: e.id,
							redditStyle: o,
							showSubredditName: Object(c.a)(Object(m.f)(t)),
							thumbnailOnClick: s
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: s,
						moreButtonText: n,
						onPostVisible: o,
						posts: a,
						redditStyle: p,
						showMoreButton: h,
						topPostsVariant: x
					} = this.props, {
						chunkIdx: y
					} = this.state;
					if (0 === a.length) return null;
					const E = this.getVisiblePostsCounts(),
						f = Object(b.a)(x),
						v = Object(b.b)(x),
						O = f || v,
						C = a.slice(y * E, (y + 1) * E),
						[j, ...S] = C,
						w = O ? C.slice(0, L) : S.slice(0, L),
						N = O ? C.slice(L) : S.slice(L);
					return r.a.createElement("div", {
						className: Object(i.a)(T.a.container, t, {
							[T.a.redditStyle]: p
						})
					}, !O && r.a.createElement(g.a, {
						onPostVisible: o,
						postId: j.id
					}, r.a.createElement(d.a, {
						backgroundWrapperClassName: T.a.largePostBackgroundWrapper,
						descriptionClassName: T.a.largePostDescription,
						innerContainerClassName: T.a.largePostInnerContainer,
						"data-redditstyle": p,
						onPostClick: this.openLargePost,
						postId: j.id,
						showSubredditMeta: !1,
						showSubredditName: Object(c.a)(Object(m.f)(s)),
						trendingPost: j
					})), w.map(this.renderSmallPost), e, N.map(this.renderSmallPost), h && r.a.createElement(l.n, {
						className: T.a.SeeMore,
						onClick: this.showMorePosts
					}, n || r.a.createElement(u.c, null, "See More")))
				}
			}
			t.a = R(F)
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				p = s.n(m),
				u = e => i.a.createElement("div", {
					className: Object(n.a)(e.className, p.a.container),
					style: e.style
				}, i.a.createElement(d.f, {
					className: p.a.button,
					onClick: () => window.scroll(0, 0)
				}, i.a.createElement(l.c, null, "Back to top"))),
				b = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				y = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				E = s.n(y),
				f = s("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const C = c.e[1] + 24,
				j = h.g + 8 + 152 + 32 + 16,
				S = j + C + 8,
				w = f.a.div("Container", E.a),
				N = f.a.wrapped(e => {
					var {
						className: t
					} = e, s = O(e, ["className"]);
					return i.a.createElement(u, v({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", E.a),
				_ = e => {
					let {
						categoriesPlacementVariant: t,
						children: s,
						className: r,
						isSticky: o
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(r, {
							[E.a.StickyStyles]: o,
							[E.a.LargeOffset]: Object(x.f)(t)
						})
					}, s)
				};
			class P extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > S,
						shouldFooterSticky: this.windowHeight > j
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = o()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.F), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							categoriesPlacementVariant: t,
							hideFooter: s,
							railsWidgetsVariant: n,
							children: r
						}
					} = this, o = this.state.isAdSticky && !(!e && !r);
					return i.a.createElement(w, {
						innerRef: this.setWrapperRef
					}, i.a.createElement(_, {
						categoriesPlacementVariant: t,
						isSticky: o || !!n
					}, e, r, !s && i.a.createElement(b.a, null)), !this.props.hideBackToTop && i.a.createElement(N, null))
				}
			}
			const k = Object(g.t)();
			t.a = k(P)
		},
		"./src/reddit/components/SidebarTrendingPostList/SmallPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1krn-WWFNj-mY6pgxAtmTx",
				title: "_3zJYcwZRQR6PCnf10HuZGw",
				mainLine: "_11ESdMiPEZ3makcieIRfzK",
				thumbnailContainer: "_2yyovSXEnlXq-cmzTBGVSr",
				titleSingle: "_3iL3BLNEPj5E-KpaQ9hoSb",
				flair: "_2CJokp6ttLJys6iHljtVQ_",
				metaLine: "_1RAZe2feup7ElvffqHCDN8",
				meta: "_1p6_aI2KRaeJrjjMHJAWIW"
			}
		},
		"./src/reddit/components/SidebarTrendingPostList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1onjAGFGh8TpXfwlqM-NOA",
				largePostBackgroundWrapper: "_3Cq2ksLR87ZU-5hRe7alNN",
				largePostDescription: "_1xgGnApLgA_EEM-VvxbN-q",
				largePostInnerContainer: "_1wLLT_duObCLHH5C1q4KF",
				smallPost: "_3_Mtxl2b3N31eCyeBm29kQ"
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return a
			})), s.d(t, "p", (function() {
				return i
			})), s.d(t, "n", (function() {
				return c
			})), s.d(t, "o", (function() {
				return d
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "j", (function() {
				return v
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = s.n(r);
			const a = n.a.section("FormPage", o.a),
				i = n.a.h1("HomePageTitle", o.a),
				c = n.a.button("HomePageBreadcrumb", o.a),
				d = n.a.div("HomePageGroup", o.a),
				l = n.a.h1("FormPageTitle", o.a),
				m = n.a.div("FormPageSection", o.a),
				p = n.a.div("FormGroup", o.a),
				u = n.a.h2("FormGroupTitle", o.a),
				b = n.a.div("FormElement", o.a),
				h = n.a.div("FormGroupDescription", o.a),
				g = n.a.div("FormItem", o.a),
				x = n.a.h3("FormElementTitle", o.a),
				y = n.a.div("FormElementDescription", o.a),
				E = n.a.div("FormElementError", o.a),
				f = n.a.div("FormElementSubGroup", o.a),
				v = n.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/SubredditAdoptionWidget/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_32gg9k8mE7XAO33Q0lKRlU",
				main: "_39QHoSGxWS9OKtoNU9jEE_",
				title: "_27oRfx5g78dJfAJl_8Npk3",
				icon: "_2t2xQcM_0PlqIR0rm5VRfJ",
				description: "_2HAYUIdDUchBheTwqmKIcq",
				button: "_3GA-tK1xBiDrxLJRZR3IIB"
			}
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/ContentTooltip/index.tsx"),
				m = s("./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/tooltips.ts"),
				b = s("./src/reddit/controls/ImageInput/index.tsx"),
				h = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				x = s("./src/reddit/helpers/localStorage/index.ts"),
				y = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				E = s("./src/reddit/i18n/components.tsx"),
				f = s("./src/reddit/i18n/utils.ts"),
				v = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				O = e => r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 17",
					version: "1.1"
				}, r.a.createElement("path", {
					d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
					id: "a"
				})),
				C = s("./src/reddit/models/ApiRequestState/index.ts"),
				j = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				S = s("./src/reddit/components/SubredditIcon/index.m.less"),
				w = s.n(S);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					this.setState({
						tooltipDismissed: Object(x.l)(this.props.subredditId)
					})
				}
				render() {
					const e = this.props,
						{
							subredditId: t,
							className: s,
							inTopBar: n,
							tooltipDisabled: o
						} = e,
						a = _(e, ["subredditId", "className", "inTopBar", "tooltipDisabled"]),
						c = [s, w.a.inTopBar, w.a.iconContainer];
					return n ? c.push(w.a.emptyEditableIconInTopBar) : c.push(w.a.editableIcon, w.a.emptyEditableIcon), r.a.createElement("span", N({}, a, {
						id: this.props.tooltipDisabled ? void 0 : u.a,
						className: Object(i.a)(...c)
					}), n ? r.a.createElement(O, {
						className: w.a.emptyUploadButton
					}) : r.a.createElement(v.a, {
						className: w.a.emptyPlusButton
					}), this.props.children, !this.state.tooltipDismissed && !this.props.tooltipDisabled && r.a.createElement(l.a, {
						className: w.a.tooltip,
						tooltipId: u.a,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, r.a.createElement(m.a, {
						includeIcon: !n,
						subredditId: t
					})))
				}
			}
			const k = e => {
					const {
						iconColor: t,
						className: s,
						alt: n,
						role: o,
						onClick: a,
						inTopBar: c,
						src: d
					} = e;
					return r.a.createElement("span", {
						className: w.a.iconContainer
					}, r.a.createElement("img", {
						onClick: a,
						role: o,
						alt: n,
						src: d,
						className: Object(i.a)(s, {
							[w.a.editableIcon]: !c
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				T = Object(a.c)({
					isLoading: j.b
				});
			class I extends r.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(y.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => r.a.createElement(b.a, {
						className: w.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(C.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				componentDidMount() {
					this.props.inTopBar || this.props.onShowTooltip()
				}
				renderEditButton() {
					const {
						url: e
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? r.a.createElement("span", {
						className: w.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? r.a.createElement(E.c, null, "Update icon") : r.a.createElement(E.c, null, "Add icon")) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = r.a.createElement(r.a.Fragment, null, r.a.createElement(k, N({
						src: e,
						alt: Object(f.c)("Subreddit icon"),
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, r.a.createElement(P, N({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : r.a.createElement(r.a.Fragment, null, r.a.createElement(P, N({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [w.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(w.a.loadingIconInTopBar), t = 32), r.a.createElement(h.a, {
							className: Object(i.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(g.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? r.a.createElement("div", {
						className: w.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(o.b)(T, (e, t) => ({
				onFileSelected: (s, n) => {
					e(Object(c.a)(t.subreddit, s, n))
				},
				onShowTooltip: () => {
					e(Object(d.f)({
						tooltipId: u.a
					}))
				}
			}))(Object(p.b)(I))
		},
		"./src/reddit/components/SubredditUnsavedChangesModal/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const p = "subreddit-unsaved-changes-modal",
				u = Object(o.b)(null, e => ({
					closeModal: () => e(Object(i.g)(p))
				}));
			class b extends r.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.onDiscard(), this.props.closeModal()
					}, this.onCancelClick = () => {
						this.props.onCancel(), this.props.closeModal()
					}, this.onSaveClick = () => {
						this.props.onSave(), this.props.closeModal()
					}
				}
				render() {
					return r.a.createElement(c.c, null, r.a.createElement(c.g, null, r.a.createElement(m.a, null, r.a.createElement(c.n, null, r.a.createElement(l.c, null, "Save changes before leaving?")), r.a.createElement(d.a, {
						onClick: this.onCancelClick
					}, r.a.createElement(c.b, null)))), r.a.createElement(c.j, null, r.a.createElement(c.m, null, r.a.createElement(l.c, null, "You have made some changes to your community, do you wish to leave this menu without saving?"))), r.a.createElement(c.e, null, r.a.createElement(c.a, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, r.a.createElement(l.c, null, "Discard")), r.a.createElement(c.o, {
						onClick: this.onSaveClick,
						"data-redditstyle": !0
					}, r.a.createElement(l.c, null, "Save"))))
				}
			}
			t.b = Object(a.a)(u(b))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return N
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				p = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				u = s.n(p),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const y = h.a.button("IconButton", u.a),
				E = h.a.wrapped(l.a, "SubscribeIcon", u.a),
				f = h.a.wrapped(d.a, "UnsubscribeIcon", u.a),
				v = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return r.a.createElement(y, n, r.a.createElement(E, {
						className: Object(b.a)(n.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", u.a),
				O = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return t ? r.a.createElement(i.f, g({}, n, {
						className: Object(b.a)(n.className, {
							[u.a.isSmall]: s
						})
					})) : r.a.createElement(i.n, g({}, n, {
						className: Object(b.a)(n.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", u.a),
				C = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(v, g({}, s, {
						className: Object(b.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					})) : r.a.createElement(O, g({}, s, {
						className: Object(b.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					}))
				},
				j = h.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: o
					} = e, i = x(e, ["border", "language", "small", "type"]);
					return r.a.createElement(y, i, r.a.createElement(f, {
						className: Object(b.a)(a.o, i.className, {
							[u.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", u.a),
				S = h.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: o
					} = e, a = x(e, ["border", "language", "small", "type"]);
					const d = r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
							className: u.a.UnsubscribeButtonDefault
						}, "subreddit" === o ? Object(c.c)("Joined") : Object(c.c)("Following")), r.a.createElement("span", {
							className: u.a.UnsubscribeButtonHover
						}, "subreddit" === o ? Object(c.c)("Leave") : Object(c.c)("Unfollow"))),
						l = Object(b.a)(a.className, {
							[u.a.isSmall]: n
						});
					return t ? r.a.createElement(i.i, g({}, a, {
						className: l,
						children: d
					})) : r.a.createElement(i.n, g({}, a, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", u.a),
				w = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(j, g({}, s, {
						className: Object(b.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					})) : r.a.createElement(S, g({}, s, {
						className: Object(b.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					}))
				};
			class N extends r.a.Component {
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
						icon: s = !1,
						id: n,
						language: a,
						small: i = !1
					} = this.props, c = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: i
					};
					return this.props.userIsSubscriber ? r.a.createElement(w, g({}, c, {
						language: a,
						type: this.props.identifier.type
					})) : r.a.createElement(C, g({}, c, {
						id: n
					}), this.props.children, Object(o.a)(a, "subscriptions.".concat(Object(m.a)({
						type: this.props.identifier.type
					}), ".subscribe")))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				r = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(n.b)(o.a))
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TimeSort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/path-browserify/index.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/ListingSort/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/listingSorts.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/contexts/Tooltip.ts"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/helpers/trackers/navigation.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/TimeSort/index.m.less"),
				w = s.n(S),
				N = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = "TimeSort--SortPicker",
				k = Object(l.a)(f.a),
				T = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(y.H)(e) || (n = r.a.join(n, t)), Object(m.a)(n, {
						[x.t]: s
					})
				},
				I = N.a.div("ListingSortContainer", w.a),
				L = Object(y.t)(),
				M = Object(c.c)({
					dropdownIsOpen: Object(C.b)(P),
					language: j.S
				}),
				B = Object(i.b)(M, e => ({
					onOpenDropdown: () => e(Object(u.g)({
						tooltipId: P
					}))
				}));
			t.a = L(B(Object(h.b)(e => a.a.createElement(I, {
				className: e.className,
				onClick: e.onOpenDropdown
			}, a.a.createElement(b.c, {
				className: e.wrapperClassName,
				disabled: !1
			}, a.a.createElement(b.b, {
				className: e.buttonClassName,
				displayText: g.b[e.timeSort],
				id: P,
				showDropdownTriangle: !0
			})), a.a.createElement(E.a.Consumer, null, t => a.a.createElement(k, _({
				isOpen: e.dropdownIsOpen,
				tooltipId: P
			}, t), [p.Ob.HOUR, p.Ob.DAY, p.Ob.WEEK, p.Ob.MONTH, p.Ob.YEAR, p.Ob.ALL].map(t => a.a.createElement(v.b, {
				className: Object(d.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: g.b[t],
				href: T(e.pageLayer, e.listingSort, t),
				isSelected: e.timeSort === t,
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(O.f)(t))
				}
			}))))))))
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/sampleSize.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/lodash/first.js"),
				c = s.n(i),
				d = s("./node_modules/lodash/times.js"),
				l = s.n(d),
				m = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./src/config.ts"),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				h = s("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				g = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = s("./src/reddit/constants/subredditLeaderboard.ts"),
				y = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/controls/Chip/index.m.less"),
				f = s.n(E);
			var v = e => {
					const t = e.to ? m.a : "div",
						s = Object(u.a)(f.a.chip, e.isActive && f.a.active, e.className);
					return a.a.createElement(t, {
						className: s,
						to: e.to || ""
					}, e.children)
				},
				O = s("./src/reddit/helpers/name/index.ts"),
				C = s("./src/reddit/i18n/components.tsx"),
				j = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				S = s.n(j);
			const w = e => {
					const t = !(!e.rankings || !e.rankings.length),
						s = !t && S.a.communityBannerPlaceholder;
					return a.a.createElement("div", {
						className: Object(u.a)(e.className, S.a.communityBanner, s),
						style: {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						}
					}, t && a.a.createElement("h2", {
						className: S.a.communityBannerText
					}, a.a.createElement(m.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || x.c),
						to: e.categoryName === x.m ? "".concat(x.e).concat(x.m) : x.e
					}, a.a.createElement(a.a.Fragment, null, e.categoryName ? (e => e === x.m ? a.a.createElement(C.c, null, "Up-and-coming Communities") : a.a.createElement(a.a.Fragment, null, "Top", a.a.createElement("span", {
						className: S.a.categoryName
					}, " ", a.a.createElement(C.b, {
						name: "categoryName"
					}, e || ""), " "), "Communities"))(e.categoryName) : "Today's Top Growing Communities"))))
				},
				N = e => a.a.createElement("ol", null, e.rankings && e.rankings.map(t => {
					const s = e.subreddits[t.id];
					return a.a.createElement(b.a, {
						delta: t.rankDelta,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || x.c, s.name),
						rank: t.rank,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: s
					})
				}), !e.rankings.length && _),
				_ = a.a.createElement(a.a.Fragment, null, l()(5, e => a.a.createElement(h.a, {
					key: e
				}))),
				P = e => {
					const t = e.isSecondaryButton ? y.k : y.h;
					return a.a.createElement("div", {
						className: S.a.footer
					}, a.a.createElement(t, {
						className: S.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || x.c),
						to: e.to || ""
					}, e.isSecondaryButton ? e.categoryName ? a.a.createElement(C.c, null, "See All ", a.a.createElement(C.b, {
						name: "categoryName"
					}, e.categoryName)) : a.a.createElement(C.c, null, "See All") : a.a.createElement(C.c, null, "View all")))
				},
				k = e => a.a.createElement("div", {
					className: S.a.categoryPicker
				}, e.categories && e.categories.map(e => a.a.createElement(v, {
					className: S.a.chip,
					key: e.name,
					to: "".concat(x.e).concat(Object(O.f)(e.name), "/")
				}, e.name)));
			var T = e => {
					const t = c()(e.rankings),
						s = e.subreddits && t && e.subreddits[t.id],
						n = "".concat(p.a.assetPath, "/img/leaderboard/banner-background.png"),
						r = s ? s.bannerBackgroundImage || n : void 0,
						o = e.to || e.categoryName && "".concat(x.e).concat(Object(O.f)(e.categoryName) || "", "/");
					return a.a.createElement(g.a, {
						className: Object(u.a)(e.className, S.a.widget),
						contentOnly: !0
					}, a.a.createElement(w, {
						bannerBackgroundImage: r,
						categoryName: e.categoryName,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings
					}), a.a.createElement(N, {
						categoryName: e.categoryName,
						large: e.large,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings,
						shouldDisplayDelta: !1,
						subreddits: e.subreddits
					}), a.a.createElement(P, {
						categoryName: e.categoryName,
						isSecondaryButton: e.isSecondaryButton,
						onSendEventClick: e.onSendEventClick,
						to: o
					}), e.categories && a.a.createElement(k, {
						categories: e.categories
					}))
				},
				I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				L = s("./src/reddit/contexts/ApiContext.tsx"),
				M = s("./src/reddit/endpoints/subreddit/models.ts"),
				B = s("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				R = s("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				F = s("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				A = s("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const V = async (e, t) => {
				const s = await Object(B.a)(e, t);
				if (s && s.ok) {
					const e = s.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(R.c)(t)
				}
			}, H = async e => {
				const t = r()(A.a, 5),
					s = await Object(M.a)(e, {
						names: t
					});
				if (s && s.ok) {
					const e = s.body,
						t = e && e.data && e.data.subredditsInfoByNames;
					return Object(R.a)(t)
				}
			};
			class U extends a.a.Component {
				constructor(e) {
					super(e), this.fetchTopSubreddits = () => {
						const {
							category: e,
							first: t
						} = this.props, s = e && e.id;
						s !== x.l ? (s || s === x.d) && V(this.props.gqlContext(), {
							categoryId: s,
							first: t
						}).then(e => {
							const t = e && e.rankings,
								s = e && e.subreddits,
								n = this.props.category && this.props.category.name || x.a;
							t && s && this.setState(e => Object.assign({}, e, {
								[n]: {
									rankings: t,
									subreddits: s
								}
							}))
						}).catch(e => console.error("Error >>>", e)) : H(this.props.gqlContext()).then(e => {
							if (!e) return;
							const {
								rankings: t,
								subreddits: s
							} = e;
							this.setState(e => Object.assign({}, e, {
								[x.m]: {
									rankings: t,
									subreddits: s
								}
							}))
						})
					}, this.sendEventClick = (e, t, s) => {
						this.props.sendEvent(Object(F.c)(e, t, s)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, s)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						s = this.props && this.props.category && this.props.category.id,
						n = this.props.category && this.props.category.name;
					t !== s && n && !this.state[n] && this.fetchTopSubreddits()
				}
				render() {
					const e = this.props.category,
						t = e && e.name,
						s = t || x.a,
						n = this.state[s],
						r = n ? n.rankings : [],
						o = n ? n.subreddits : {};
					return a.a.createElement(T, D({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: r,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: o
					}, this.props))
				}
			}
			t.a = Object(L.b)(Object(I.b)(U))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = e => r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 10 8",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
				}))),
				p = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				u = s.n(p);
			s.d(t, "a", (function() {
				return h
			}));
			const b = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(d.b, {
					className: u.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), r.a.createElement("span", {
					className: u.a.subredditDetailsContainer
				}, e.large ? r.a.createElement(c.a, {
					subredditName: e.subreddit.name
				}, r.a.createElement("span", {
					className: u.a.regularText
				}, e.subreddit.displayText)) : r.a.createElement("span", {
					className: u.a.regularText
				}, e.subreddit.displayText), null === e.rank && r.a.createElement("span", {
					className: u.a.smallText
				}, r.a.createElement(l.c, null, "This community hasn't been ranked yet.")))),
				h = e => {
					const t = Object(a.a)(u.a.subredditRankItem, e.large && u.a.large),
						s = e.delta && e.delta > 0,
						n = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(i.b)(e);
							if (t.length > 3) {
								const e = t.split(".")[0];
								return "".concat(e, "k")
							}
							return t
						})(e.rank + 1),
						c = e.delta ? s ? "#46D160" : "#EA0027" : "transparent";
					return r.a.createElement("li", {
						className: u.a.listItem,
						key: e.subreddit.displayText
					}, r.a.createElement(o.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, r.a.createElement("div", {
						className: u.a.subredditRankItemColumn
					}, r.a.createElement("span", {
						className: u.a.rankText
					}, n), r.a.createElement(m, {
						className: Object(a.a)(u.a.arrow, !s && u.a.negative),
						style: {
							fill: c
						}
					}), r.a.createElement(b, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && r.a.createElement("span", {
						className: u.a.regularText
					}, e.delta ? Object(i.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				i = s.n(a);
			const c = e => r.a.createElement("div", {
				className: Object(o.a)(i.a.placeholderWrapper, e.large && i.a.large)
			}, r.a.createElement("span", {
				className: i.a.subredditIconLoading
			}), r.a.createElement("span", {
				className: i.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widget: "_160axjzy-Hx7ANXMr87Rbe",
				communityBanner: "_2-aCCpAklEV0DkVWrpodjE",
				communityBannerText: "_3t8QC0In-G5By0nAIZqfAZ",
				communityBannerCategoryName: "_3tu4wA7qDe2qAPwXNSHPo8",
				footer: "_3fyECztJ8AQeIuhZWW-tNU",
				linkButton: "_1Q1oKEA1qDipo5Tk0b_YlY",
				categoryPicker: "_1O_evNy72kVXzYqUj80m_n",
				chip: "_3VVeutMKl2leQEGhurm7YN",
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
		"./src/reddit/components/Widgets/Aggregate/RecentPosts/PostsList.m.less": function(e, t, s) {
			e.exports = {
				ClearButton: "_3k5-X9mL_S9RJuKX2c3dFc",
				clearButton: "_3k5-X9mL_S9RJuKX2c3dFc"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const l = o.a.div("WidgetBackground", c.a),
				m = o.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return r.a.createElement("div", s, r.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				b = s("./src/reddit/actions/subscription/index.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const g = Object(i.c)({
				language: h.S
			});
			var x = Object(o.b)(g, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(b.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(b.e()),
						onUnsubscribe: () => e(b.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				y = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				E = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				O = s("./src/reddit/i18n/utils.ts"),
				C = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				j = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				S = s("./src/reddit/models/Flair/index.ts"),
				w = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				N = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = s.n(N);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return k
			})), s.d(t, "a", (function() {
				return I
			}));
			const k = e => r.a.createElement(y.a, {
					className: Object(d.a)(_.a.Container, {
						[_.a.rails]: !!e.railsWidgetsVariant
					}, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.railsWidgetsVariant ? "" : e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, !!e.railsWidgetsVariant && r.a.createElement(p.a, {
					className: _.a.WidgetTitle
				}, e.title), r.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? r.a.createElement(v.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || Object(O.c)("Something went wrong.")) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(I, P({
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
					railsWidgetsVariant: e.railsWidgetsVariant,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(f.n, {
					className: _.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				T = Object(i.c)({
					hideNSFWPref: h.z,
					language: h.S
				}),
				I = Object(o.b)(T)(e => r.a.createElement("div", {
					className: _.a.communityItemContainer
				}, r.a.createElement(j.a, {
					widthRight: E.u
				}, r.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(C.a, {
					className: _.a.planetIcon,
					"data-redditstyle": !0
				})), r.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, r.a.createElement(a.a, {
					className: _.a.communityName,
					to: Object(w.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(w.b)(e.name, e.type)), r.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: _.a.subscriberCount
				}, Object(c.c)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && r.a.createElement(m.b, {
					flair: {
						type: S.f.Nsfw,
						text: "nsfw"
					}
				}))), !e.railsWidgetsVariant && (e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(v.a, {
					className: Object(d.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(f.n, {
					className: Object(d.a)(_.a.communityCta, {
						[_.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(x, {
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
				}) : r.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					identifier: {
						name: e.name,
						type: e.type
					},
					getEventFactory: e.getSubscribeEventFactory,
					small: !0
				}))), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function o(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(r.c)(e) : Object(r.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2j6XpwwZyn7dNcfH7Blz0B",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				rails: "_2ucwLgmYT_bEawlfA81Q3L",
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				WidgetTitle: "g-Bp8lR31etQDRRiyWCDU",
				widgetTitle: "g-Bp8lR31etQDRRiyWCDU"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const b = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(u.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, u.defaults);
			var h = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/selectors/experiments/topPosts.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/models/Theme/index.ts"),
				f = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(f.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				O = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(f.a)(e).widgetColors.sidebarWidgetHeaderColor,
				C = e => {
					const t = v(e);
					return Object(E.f)(t)
				},
				j = e => {
					const t = O(e);
					return Object(E.f)(t)
				};
			var S = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				w = s.n(S);
			const N = Object(m.t)(),
				_ = Object(o.b)(() => Object(a.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(x.m)(e, {
								subredditId: s
							}),
							r = Object(y.U)(e);
						return n || r
					},
					subredditId: m.m,
					topPostVariant: g.d
				}));
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(b(e, t)), this.setState({
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
					return e.backgroundColor = v(this.props), e.color = e.fill = C(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = O(this.props), e.color = e.fill = j(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: o,
						onClick: a,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? w.a.widgetContentOnly : w.a.widgetContent, b = !n && this.props.styles, g = b ? this.getWidgetBackgroundStyles() : {}, x = b ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, w.a.widgetBackground, {
							[w.a.redditStyle]: n,
							[w.a.clickable]: !!a,
							[w.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: g
					}, c && r.a.createElement("div", {
						className: w.a.widgetHeader,
						style: x
					}, r.a.createElement("div", {
						className: Object(i.a)(w.a.widgetTitle, l)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), o), r.a.createElement("div", {
						className: Object(i.a)(u, {
							[w.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(p.n, {
						className: w.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, r.a.createElement(h.c, null, "See More")))
				}
			}
			t.a = N(_(Object(c.a)(Object(l.b)(P))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/components/PostList/Placeholder.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/monthsToMinutes.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/tracking.ts");

			function f() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.z,
					isProfilePostListing: l.I,
					pageLayer: e => e
				})
			}
			const v = f(),
				O = {
					apiError: h.c,
					apiPending: h.d,
					m2mIsEnabled: g.w,
					measureScrollFPS: b.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.M)(e, t),
					loadMore: h.g,
					postsById: x.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(x.F)(e, s, n, r)
					}),
					subredditsById: y.Y,
					viewportDataLoaded: E.a,
					pageReferrer: l.P,
					postListPlaceholderComponent: () => u.a
				},
				C = Object(r.c)(O),
				j = (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(i.x(t))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(i.A(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(i.B(t, n, r))
					}
				}),
				S = Object(n.b)(C, j, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(d.b)(v(S(e)))
		},
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/selectors/user.ts");
			const a = Object(r.c)({
				language: o.S
			});

			function i(e) {
				return Object(n.b)(a)(e)
			}
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/i18n/utils.ts");
			const o = {
					[n.N.BEST]: Object(r.c)("best"),
					[n.N.HOT]: Object(r.c)("hot"),
					[n.N.NEW]: Object(r.c)("new"),
					[n.N.CONTROVERSIAL]: Object(r.c)("controversial"),
					[n.N.RISING]: Object(r.c)("rising"),
					[n.N.TOP]: Object(r.c)("top")
				},
				a = {
					[n.Ob.HOUR]: Object(r.c)("Now"),
					[n.Ob.DAY]: Object(r.c)("Today"),
					[n.Ob.WEEK]: Object(r.c)("This week"),
					[n.Ob.MONTH]: Object(r.c)("This month"),
					[n.Ob.YEAR]: Object(r.c)("This year"),
					[n.Ob.ALL]: Object(r.c)("All time")
				}
		},
		"./src/reddit/constants/topic.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/categories.tsx"),
				r = s("./src/reddit/constants/listings.ts");
			const o = e => "".concat(r.c[r.b.Topic]).concat(Object(n.g)(e), "/")
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext({})
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, s) {
			e.exports = {
				chip: "_3K5j589m2GGg7J3pR96mQf",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/controls/IconTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_3bX7W3J0lU78fp7cayvNxx"
			}
		},
		"./src/reddit/controls/IconTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				a = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				i = s("./src/reddit/controls/IconTooltip/index.m.less"),
				c = s.n(i);
			const d = Object(o.a)(a.b),
				l = ["center", "top"],
				m = ["center", "bottom"];
			t.a = class extends r.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					return r.a.createElement("span", {
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, this.props.icon, r.a.createElement(d, {
						className: c.a.tooltip,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: l,
						text: this.props.text,
						tooltipPosition: m
					}))
				}
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			class o extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							s = this.props.multiple ? [...t] : t[0];
						this.props.onChange(s), this.setState(() => ({
							value: s
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || ""
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, o = s || n;
					return r.a.createElement("div", {
						className: e.className
					}, s && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: s,
						tabIndex: e.tabIndex
					}), !o && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				tooltip: "vCHkhDAaK6nnJdqEpMGq-",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				b = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				v = s.n(f);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const j = e => Object(c.a)(v.a.iconStyles, e.className, {
					[v.a.mDisabled]: e.disabled,
					[v.a.mRedditStyle]: e.redditStyle
				}),
				S = e => {
					var {
						isActive: t
					} = e, s = C(e, ["isActive"]);
					return r.a.createElement("button", O({
						className: Object(c.a)(v.a.layoutButton, {
							[v.a.mIsActive]: t
						})
					}, s))
				},
				w = Object(i.e)("listings.layoutSwitcher.label"),
				N = Object(i.e)("listings.layoutSwitcher.card"),
				_ = Object(i.e)("listings.layoutSwitcher.classic"),
				P = Object(i.e)("listings.layoutSwitcher.compact"),
				k = [{
					layout: p.d.Card,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, o = C(e, ["className", "disabled", "redditStyle"]);
						return r.a.createElement(h.a, O({
							className: j({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, o))
					},
					tooltipTranslation: N
				}, {
					layout: p.d.Classic,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, o = C(e, ["className", "disabled", "redditStyle"]);
						return r.a.createElement(u.a, O({
							className: j({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, o))
					},
					tooltipTranslation: _
				}, {
					layout: p.d.Compact,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, o = C(e, ["className", "disabled", "redditStyle"]);
						return r.a.createElement(b.a, O({
							className: j({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, o))
					},
					tooltipTranslation: P
				}],
				T = Object(x.t)(),
				I = Object(a.c)({
					language: E.S,
					postLayout: x.M,
					redditStyle: x.B
				}),
				L = Object(o.b)(I, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					toggleTooltip: t => e(Object(m.g)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = T(L(Object(g.b)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || p.e[e.postLayout];
				return r.a.createElement("div", {
					className: Object(c.a)(v.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, r.a.createElement("div", {
					className: v.a.title
				}, w(e.language)), r.a.createElement("div", {
					className: v.a.iconContainer
				}, k.map(o => {
					const a = () => (n => {
							e.onChange ? e.onChange(n) : (e.onListingLayoutChange(n, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: n,
								screen: Object(y.screen)(e),
								subreddit: Object(y.subreddit)(e)
							})))
						})(o.layout),
						i = () => e.toggleTooltip(c),
						c = "layoutSwitch--" + o.layout,
						l = o.layout === n;
					return r.a.createElement(S, {
						"aria-label": o.tooltipTranslation(e.language),
						"aria-pressed": l,
						id: c,
						isActive: l,
						key: o.layout,
						onClick: a,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: a
					}, r.a.createElement(o.Icon, {
						disabled: !l,
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), r.a.createElement(d.c, {
						className: v.a.tooltip,
						tooltipId: c,
						text: o.tooltipTranslation(e.language)
					}))
				})))
			})))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/app/strings/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				d = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(d),
				m = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const p = a.a.span("metaText", l.a),
				u = e => r.a.createElement(p, e, " · "),
				b = Object(o.d)("comment.point"),
				h = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: n,
						useUpvotes: o
					} = e, a = m(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(i.b)(n),
						l = Object(c.c)("\n    ".concat(Object(c.b)("score", d), " ").concat(Object(c.a)("upvotes", ["upvote", "upvotes"], n), "\n  ")),
						u = t ? Object(c.c)("Score hidden") : o ? l : b(s, n, {
							count: d
						});
					return r.a.createElement(p, a, u)
				},
				g = (e, t) => {
					const s = Object(o.c)(t, "posts.comments.noun", e, {
						count: Object(i.b)(e)
					});
					return r.a.createElement(p, null, s)
				}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};

			function d(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(o.b)(n)(e => {
					const {
						featureEnabled: n,
						dispatch: o
					} = e, a = c(e, ["featureEnabled", "dispatch"]);
					return n ? r.a.createElement(t, a) : void 0 !== s ? r.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/Subreddit/index.ts");
			const r = new Set(["goins", "gold_testing", "inthesoulstone", "lounge", "lssgoldnormal", "maymodsguide1", "maymodsguide2", "megalounge", "pan2", "pan3", "venkman_bookclub", "whatssnoo"]),
				o = new Set([n.b.Private]),
				a = e => !(!e || !e.name) && (!!r.has(e.name.toLowerCase()) || !e.isNSFW && !e.isQuarantined && !o.has(e.type))
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.a.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/isFakeSubreddit/index.ts"),
				r = s("./src/reddit/constants/postLayout.ts");
			const o = Math.floor(100 * Math.random());
			var a;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(a || (a = {}));
			t.b = (e, t, s, a, i) => {
				const c = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: r.b[t.prefs.layout]
				};
				return a && !Object(n.a)(a.name) && (c.subreddit = a.name, c.subreddit_screen = !0), c.wls = 6, c.whitelist_status = "all_ads", c.percentage = c.random_number = o, i && (c.position = i), c
			}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/app/strings/index.ts"),
				r = s("./src/lib/constants/index.ts");

			function o(e) {
				let {
					apiError: t,
					isLoggedOut: s,
					language: o
				} = e;
				switch (t.type) {
					case r.D.AUTHORIZATION_ERROR:
						return s ? Object(n.a)(o, "error.type.notLoggedIn") : Object(n.a)(o, "error.type.notAuthorized");
					case r.D.VALIDATION_ERROR:
						return Object(n.a)(o, "error.type.validation");
					case r.D.NOT_FOUND_ERROR:
						return Object(n.a)(o, "error.type.notFound");
					case r.D.SERVER_ERROR:
						return Object(n.a)(o, "error.type.server");
					case r.D.LIKELY_UBLOCK_ERROR:
						return Object(n.a)(o, "error.type.blocked");
					default:
						return Object(n.a)(o, "error.type.generic")
				}
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/memoize.js"),
				r = s.n(n),
				o = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/config.ts");
			const i = Array.from({
					length: 20
				}).map((e, t) => "".concat(a.a.assetPath, "/img/snoovatars/snoovatar_").concat(t + 1, ".png")),
				c = [];
			t.a = r()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				if (!e || !t) return c;
				const s = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: o.a[(s + t) % o.a.length],
					image: i[(s + t) % i.length]
				}))
			}), (function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				return "".concat(e, "_").concat(t)
			}))
		},
		"./src/reddit/helpers/makeAccountManagerUrl/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts");
			t.a = (e, t) => {
				let s = "".concat(n.a.accountManagerOrigin, "/").concat(e, "/");
				return t && (s = "".concat(s, "?dest=").concat(encodeURIComponent(t))), s
			}
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/isUrl/index.ts"),
				a = s("./src/lib/logs/console.ts"),
				i = s("./src/reddit/components/BlankPost/index.tsx"),
				c = s("./src/reddit/components/ClassicPost/index.tsx"),
				d = s("./src/reddit/components/CompactPost/index.tsx"),
				l = s("./src/reddit/components/LargePost/index.tsx"),
				m = s("./src/reddit/components/MediumPost/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/models/Media/index.ts");
			const b = {
					[p.g.Large]: l.a,
					[p.g.Medium]: m.b,
					[p.g.Classic]: c.b,
					[p.g.Compact]: d.a
				},
				h = e => r.a.createElement(i.b, e),
				g = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				x = e => !e.media || e.media.type === u.n.EMBED && !(u.b.has(e.media.provider) || (e => e.source && e.source.url && e.isSponsored && g.some(t => e.source.url.startsWith(t)))(e));

			function y(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: n,
					post: r
				} = e;
				if (r.isBlank) return h;
				const i = !r.media && !!r.source && Object(o.a)(r.source.url),
					c = t && i;
				n === p.g.Large && x(r) && !c && (n = p.g.Medium);
				const d = b[n];
				return void 0 === d ? (Object(a.a)(void 0, "Could not find component for layout ".concat(n, ".")), h) : s && r.isSponsored && n === p.g.Large ? m.b : d
			}
		},
		"./src/reddit/helpers/trackers/idCard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts"),
				o = s("./src/reddit/selectors/widgets.ts"),
				a = s("./src/telemetry/index.ts");
			const i = e => {
					Object(a.a)(Object.assign({}, r.defaults(e), {
						action: n.c.CLICK,
						noun: "multi_detail",
						source: "id_card"
					}))
				},
				c = (e, t, s) => {
					const {
						subreddit: i,
						profile: c
					} = Object(o.b)(e, t);
					Object(a.a)(Object.assign({}, r.defaults(e), {
						action: n.c.CLICK,
						noun: "multi_detail_subreddit",
						profile: c,
						source: "id_card",
						subreddit: Object.assign({}, i, {
							categoryName: s
						})
					}))
				},
				d = e => t => ({
					action: n.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: r.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				o = e => t => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: e
				}, r(t)),
				a = () => e => Object.assign({
					source: "breadcrumb",
					action: "click",
					noun: "subreddit"
				}, r(e)),
				i = () => e => Object.assign({
					source: "id_card",
					action: "click",
					noun: "mod_hub_nav"
				}, r(e))
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = e => t => Object.assign({}, n.defaults(t), {
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: n.subreddit(t)
				}),
				o = e => t => Object.assign({}, n.defaults(t), {
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: n.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/categories.tsx"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => t => Object.assign({}, r.defaults(t), {
					action: "click",
					noun: Object(n.g)(e),
					source: "leaderboard_category"
				}),
				a = (e, t, s) => o => Object.assign({}, r.defaults(o), {
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(n.g)(t),
						name: s && s.toLowerCase()
					}
				}),
				i = (e, t) => s => Object.assign({}, r.defaults(s), {
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(n.g)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				c = (e, t, s) => o => Object.assign({}, r.defaults(o), {
					action: "click",
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(n.g)(t),
						name: s && s.toLowerCase()
					}
				})
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(o.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(o.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, s) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, s) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), r.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), r.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), r.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, s) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, r.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, r.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), r.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, s) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2-0pxD6-cM6bWeb73TNNhJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), r.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), r.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), r.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), r.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), r.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), r.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Media/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Top/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(i);
			t.a = Object(o.a)(e => r.a.createElement("div", {
				className: Object(a.a)(c.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/pages/Explore/Banner/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "uLddwn0or3x3p7TMOGwHI",
				background: "_3KNrvlujtKPx0Hka0j-LZq",
				image: "_3A0kCYVWPNDyvhkR29Kvqr",
				leftImage: "_3EqWUAaRoh-h-P6bjNuzEc",
				rightImage: "_3t3SNjGA-P0PnCELDP4GOn",
				mmRightAligned: "_1RF7TkDzRTcmTV2C8zOw-x"
			}
		},
		"./src/reddit/pages/Explore/Banner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/pages/Explore/Banner/index.m.less"),
				i = s.n(a);
			t.a = e => r.a.createElement("div", {
				className: Object(o.a)(i.a.banner, e.className)
			}, r.a.createElement("img", {
				className: i.a.background,
				src: e.backgroundImagePath,
				srcSet: e.backgroundImageSrcSet
			}), e.leftImage && r.a.createElement("div", {
				className: i.a.leftImage
			}, e.leftImage), e.rightImage && r.a.createElement("div", {
				className: Object(o.a)(i.a.rightImage, {
					[i.a.mRightAligned]: e.rightAligned
				})
			}, e.rightImage), e.children)
		},
		"./src/reddit/pages/Frontpage/TopBanner/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_1_pR1ht4IEZ9YEim8HWhnn",
				text: "cNNw0iJilp53i5nVfBxEf",
				title: "_3Wmex7eM-A2PuwJcY9tzuC",
				description: "qv0Unf-rou9xlx3G0102y",
				leftImage: "OoDUyBh7E8pgzdHjnv8T0",
				rightImage: "_2x0bYf3CVk5DL1cL-UPrxw",
				close: "_15Qf6H_pWI2JiMAUCMaBPI"
			}
		},
		"./src/reddit/pages/Frontpage/TopBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/monthsToMinutes/homeFeed.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Translated/index.tsx"),
				m = s("./src/reddit/helpers/trackers/monthsToMinutes.ts"),
				p = s("./src/reddit/icons/svgs/Close/index.tsx"),
				u = s("./src/reddit/pages/Explore/Banner/index.tsx"),
				b = s("./src/reddit/selectors/monthsToMinutes.ts"),
				h = s("./src/reddit/pages/Frontpage/TopBanner/index.m.less"),
				g = s.n(h);
			const x = 3,
				y = "".concat(n.a.assetPath, "/img/banner/home-top-banner-background.png"),
				E = "".concat(n.a.assetPath, "/img/banner/home-top-banner-left.png"),
				f = "".concat(n.a.assetPath, "/img/banner/home-top-banner-right.png"),
				v = o.a.createElement("img", {
					className: g.a.leftImage,
					src: E
				}),
				O = o.a.createElement("img", {
					className: g.a.rightImage,
					src: f
				}),
				C = Object(i.c)({
					viewsCount: b.s
				}),
				j = Object(a.b)(C, e => ({
					close: () => e(Object(c.e)()),
					incrementViewCounter: () => e(Object(c.i)())
				}));
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.closeBanner = () => {
						this.props.close(), this.props.sendEvent(Object(m.f)())
					}
				}
				componentDidMount() {
					this.props.incrementViewCounter(), this.props.sendEvent(Object(m.g)())
				}
				render() {
					const {
						className: e,
						viewsCount: t
					} = this.props, s = t >= x;
					return o.a.createElement(u.a, {
						className: e,
						backgroundImagePath: y,
						leftImage: v,
						rightImage: O
					}, o.a.createElement("div", {
						className: g.a.layout
					}, o.a.createElement("div", {
						className: g.a.text
					}, o.a.createElement("div", {
						className: g.a.title
					}, o.a.createElement(l.a, {
						msgId: "promoBanners.topBanner.title"
					})), o.a.createElement("div", {
						className: g.a.description
					}, o.a.createElement(l.a, {
						msgId: "promoBanners.topBanner.description"
					}))), s && o.a.createElement("button", {
						className: g.a.close,
						onClick: this.closeBanner
					}, o.a.createElement(p.a, null))))
				}
			}
			t.a = j(Object(d.b)(S))
		},
		"./src/reddit/pages/Frontpage/index.m.less": function(e, t, s) {
			e.exports = {
				duHeader: "_1fauFKjg428h9E1m4B2Vr-",
				sidebar: "_10wb7d3rGvj56Gcs4IQWL5",
				Container: "a4yepvlqMNSEah39F7ef2",
				container: "a4yepvlqMNSEah39F7ef2",
				SidebarRight: "_3xvdvEUndszx1sewFgSdll",
				sidebarRight: "_3xvdvEUndszx1sewFgSdll",
				TrendingPosts: "_5q2KEvcKLfbsGTZKUsubA",
				trendingPosts: "_5q2KEvcKLfbsGTZKUsubA",
				large: "_2Qucra8tqXjOnRT1TJO_xl"
			}
		},
		"./src/reddit/pages/Frontpage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				r = s.n(n),
				o = s("./node_modules/core-js/modules/es6.array.sort.js"),
				a = s.n(o),
				i = s("./node_modules/core-js/modules/es6.regexp.search.js"),
				c = s.n(i),
				d = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/lodash/fromPairs.js"),
				m = s.n(l),
				p = s("./node_modules/react/index.js"),
				u = s.n(p),
				b = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				g = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/extractQueryParams/index.ts"),
				y = s("./src/lib/fastdom/index.ts"),
				E = s("./src/lib/makeListingKey/index.ts"),
				f = s("./src/lib/performanceTimings/index.tsx"),
				v = s("./src/reddit/actions/frontpage.ts"),
				O = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/ScrollChildFactory.tsx"),
				C = s("./src/reddit/components/EmptySubreddit.tsx"),
				j = s("./src/reddit/components/FeaturedLiveEntrypoint/index.tsx"),
				S = s("./src/reddit/components/FrontpageSidebar/index.tsx"),
				w = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				N = s("./src/reddit/components/InFeedPostCreation/index.tsx"),
				_ = s("./src/reddit/components/JumpToContent/index.tsx"),
				P = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				k = s("./src/reddit/components/ListingPostList/index.tsx"),
				T = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/async.tsx"),
				I = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/constants.ts"),
				L = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				M = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				B = s("./src/reddit/constants/listings.ts"),
				R = s("./src/reddit/constants/parameters.ts"),
				F = s("./src/reddit/constants/postLayout.ts"),
				A = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/helpers/trackers/screenview.ts"),
				V = s("./src/reddit/i18n/components.tsx"),
				H = s("./src/reddit/layout/page/Listing/index.tsx"),
				U = s("./src/reddit/pages/Topic/SidebarLeft/index.tsx"),
				W = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				K = s("./src/reddit/selectors/experiments/exploreV2.ts"),
				z = s("./src/reddit/selectors/experiments/generalCleanup.ts"),
				G = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				q = s("./src/reddit/selectors/experiments/railsWidgets.ts"),
				Q = s("./src/reddit/selectors/experiments/trending.ts"),
				J = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				Y = s("./src/reddit/selectors/frontpage.ts"),
				Z = s("./src/reddit/selectors/meta.ts"),
				X = s("./src/reddit/selectors/monthsToMinutes.ts"),
				$ = s("./src/reddit/selectors/PublicAccessNetwork/discorveryUnit.ts"),
				ee = s("./src/reddit/selectors/user.ts"),
				te = s("./src/lib/constants/index.ts"),
				se = s("./src/lib/objectSelector/index.ts"),
				ne = s("./src/reddit/constants/page.ts"),
				re = s("./src/reddit/pages/Frontpage/TopBanner/index.tsx"),
				oe = s("./src/reddit/pages/Frontpage/index.m.less"),
				ae = s.n(oe);

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ce = Object(A.t)(),
				de = Object(h.c)({
					queryParams: Object(se.a)((e, t) => {
						let {
							location: s
						} = t;
						return m()([...Object(x.a)(s.search)])
					}),
					sort: (e, t) => {
						let {
							match: s
						} = t;
						const n = Object(Y.a)(e);
						return s.params.sort || n
					}
				}),
				le = Object(h.c)({
					countryMeta: Z.b,
					geopopular: ee.m
				}),
				me = Object(h.c)({
					categoriesPlacementVariant: W.a,
					exploreV2Variant: (e, t) => {
						if (Object(A.D)(e, t)) return Object(K.a)(e)
					},
					generalCleanupVariant: z.a,
					isInTrendingEntrypointExperiment: Q.a,
					isLoggedIn: ee.J,
					isPopular: A.D,
					isRpanDuVisible: G.c,
					rpanInjectionIndex: $.a,
					isTopBannerClosed: X.r,
					layout: A.M,
					m2mIsEnabled: X.w,
					railsWidgetsVariant: q.d
				}),
				pe = () => Object(h.a)(le, de, me, G.c, $.a, e => e, (e, t, s, n, r, o) => {
					let {
						countryMeta: a,
						geopopular: i
					} = e, {
						queryParams: c,
						sort: d
					} = t;
					const l = R.t in c && c[R.t].toUpperCase(),
						m = "string" == typeof l && l in te.Ob ? te.Ob[l] : te.Pb,
						p = Object(E.a)(ne.b, d, c),
						u = a || te.v.Everywhere,
						b = i || u,
						h = R.g in c ? c[R.g].toUpperCase() : b,
						g = [];
					n && g.push(r);
					const x = Object(J.b)(o, g, {
						listingKey: p
					});
					return Object.assign({
						countrySort: h,
						listingKey: p,
						sort: d,
						timeSort: m,
						focusedVerticalPositions: x
					}, s)
				}),
				ue = (e, t) => ({
					onLoadMorePosts: () => e(v.d({
						sort: t.match.params.sort
					}))
				}),
				be = Object(b.b)(pe, ue),
				he = Object(d.a)({
					resolved: {},
					chunkName: () => "Trending",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Trending").then(s.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
					}
				}, {
					ssr: !1
				}),
				ge = e => u.a.createElement(he, ie({}, e, {
					fallback: u.a.createElement(M.a, {
						showCardView: !!e.showCardView
					})
				})),
				xe = Object(d.a)({
					resolved: {},
					chunkName: () => "CategoriesNavigation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CategoriesNavigation").then(s.bind(null, "./src/reddit/components/CategoriesNavigation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CategoriesNavigation/index.tsx"
					}
				});
			class ye extends u.a.Component {
				constructor(e) {
					super(e), this.componentDidMount = () => {
						const {
							isLoggedIn: e,
							sort: t
						} = this.props;
						y.a.read(() => {
							const s = "".concat(f.c.FrontPage, "-").concat(t);
							Object(f.d)(s, e)
						})
					}
				}
				render() {
					const {
						categoriesPlacementVariant: e,
						exploreV2Variant: t,
						focusedVerticalPositions: s,
						generalCleanupVariant: n,
						isInTrendingEntrypointExperiment: r,
						isLoggedIn: o,
						isPopular: a,
						isRpanDuVisible: i,
						isTopBannerClosed: c,
						m2mIsEnabled: d,
						railsWidgetsVariant: l,
						rpanInjectionIndex: m
					} = this.props, b = a && !o && r && !Object(q.c)(l);
					let h;
					!d || a || c || (h = u.a.createElement(re.a, null));
					const x = Object(z.b)(n),
						y = {
							baseUrl: "",
							countrySort: this.props.countrySort,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						},
						E = {};
					i && (E[m] = {
						estHeight: Object(I.a)(this.props.layout),
						id: "rpan-".concat(this.props.layout, "-").concat(this.props.listingKey),
						render: e => {
							let {
								className: t
							} = e;
							return u.a.createElement(T.a, {
								className: t,
								layout: this.props.layout
							})
						}
					}), this.props.layout === F.g.Large && s.forEach((e, t) => {
						E[e] = Object(O.a)({
							numInstance: t,
							layout: this.props.layout,
							listingKey: this.props.listingKey,
							listingName: ne.c,
							listingPosition: e
						})
					});
					const f = Object(W.e)(e),
						v = !(f || !t && !e),
						M = u.a.createElement(S.default, {
							categoriesPlacementVariant: e,
							className: Object(g.a)(ae.a.sidebar, f ? ae.a.SidebarRight : void 0),
							listingKey: this.props.listingKey,
							listingName: ne.c,
							railsWidgetsVariant: l
						}),
						R = a ? B.b.Popular : B.b.Home;
					return u.a.createElement(H.a, {
						className: Object(g.a)(ae.a.Container, this.props.className),
						fitPageToContent: !0,
						contentNavBar: u.a.createElement(u.a.Fragment, null, v && u.a.createElement(xe, {
							baseUrl: B.c[B.b.Explore],
							category: R
						}), !x && !e && u.a.createElement(P.a, y)),
						navBar: h,
						trendingUnit: b && u.a.createElement(ge, {
							className: Object(g.a)(ae.a.TrendingPosts, {
								[ae.a.large]: f
							}),
							showCardView: this.props.layout === F.g.Large
						}),
						content: u.a.createElement(p.Fragment, null, b && u.a.createElement(L.a, {
							className: ae.a.duHeader
						}, u.a.createElement(V.c, null, "Popular posts")), u.a.createElement(j.a, null), o && u.a.createElement(N.a, null), x && u.a.createElement(w.a, y), u.a.createElement(_.a, null), u.a.createElement(k.a, {
							injectChildren: E,
							noPostsComponent: () => u.a.createElement(C.a, {
								listingName: ne.c,
								sort: this.props.sort
							}),
							key: "listing",
							listingKey: this.props.listingKey,
							listingName: ne.c,
							listingViewed: (e, t) => Object(D.d)(this.props.listingKey, this.props.sort, t, e, this.props.timeSort),
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: f ? null : M,
						sidebars: f ? [u.a.createElement(U.a, {
							categoriesPlacementVariant: e,
							topicName: R
						}), M] : void 0
					})
				}
			}
			t.default = ce(be(ye))
		},
		"./src/reddit/pages/Topic/SidebarLeft/index.m.less": function(e, t, s) {
			e.exports = {
				SidebarLeft: "_233_Xjgw5BcQOaMinKdbeV",
				sidebarLeft: "_233_Xjgw5BcQOaMinKdbeV",
				CategoryPickerHeader: "_3wb2K4xdf2R_g-DEUa1oaU",
				categoryPickerHeader: "_3wb2K4xdf2R_g-DEUa1oaU",
				CategoryPickerCategoryListContainer: "cEGRaqN-nFBz75Exs3mFC",
				categoryPickerCategoryListContainer: "cEGRaqN-nFBz75Exs3mFC",
				CategoryPickerCategoryItem: "_3csoHvyEDysZxQBkz5xb-p",
				categoryPickerCategoryItem: "_3csoHvyEDysZxQBkz5xb-p",
				disabled: "_1lYRe_nCk_REorq1b9ojQt",
				CategoryPickerButton: "_1Lxchu4Z-MmoLwTVXgfq0u",
				categoryPickerButton: "_1Lxchu4Z-MmoLwTVXgfq0u",
				CategoryPicker: "F70adPsz7qHMzyu0BHqM7",
				categoryPicker: "F70adPsz7qHMzyu0BHqM7",
				blue: "_34lsySmODH-5wPAap1BXpU",
				HomeDisabledTooltip: "j25WWditX6-LZV2-SWbwS",
				homeDisabledTooltip: "j25WWditX6-LZV2-SWbwS",
				GeopopularItem: "_1NeiB9pl71zZHKKIMMRb8L",
				geopopularItem: "_1NeiB9pl71zZHKKIMMRb8L",
				GeopopularChangeButton: "_3jobcejIYo-V5X3YY05Vjm",
				geopopularChangeButton: "_3jobcejIYo-V5X3YY05Vjm"
			}
		},
		"./src/reddit/pages/Topic/SidebarLeft/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/monthsToMinutes/initHomeFeed.ts"),
				d = s("./src/reddit/components/CategoriesPlacement/EventCategory/index.tsx"),
				l = s("./src/reddit/components/CategoriesPlacement/GeopopularCategory/index.tsx"),
				m = s("./src/reddit/components/CategoryPickerWidget/index.tsx"),
				p = s("./src/reddit/components/HeaderSubredditSelector/Compact/Tooltip.tsx"),
				u = s("./src/reddit/components/SidebarContainer/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/categories.tsx"),
				g = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/constants/listings.ts"),
				y = s("./src/reddit/constants/topic.ts"),
				E = s("./src/reddit/controls/InternalLink/index.tsx"),
				f = s("./src/reddit/helpers/name/index.ts"),
				v = s("./src/reddit/helpers/trackers/navigation.ts"),
				O = s("./src/reddit/i18n/components.tsx"),
				C = s("./src/reddit/selectors/category.ts"),
				j = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				S = s("./src/reddit/selectors/monthsToMinutes.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				_ = s.n(N),
				P = s("./src/reddit/pages/Topic/SidebarLeft/index.m.less"),
				k = s.n(P);
			const T = 44,
				I = "home-left-category-tooltip",
				L = Object(a.a)(e => Object(C.t)(e, {
					categoriesOrder: g.Y
				}), e => e.map(e => Object.assign({
					anchorProps: {
						rel: "nofollow"
					}
				}, e, {
					path: Object(y.a)(e.name)
				}))),
				M = Object(a.c)({
					categories: L,
					isEligibleCountry: j.d,
					isHomeLinkEnabled: S.m,
					isM2MEnabled: S.w,
					isNightmode: w.U
				}),
				B = Object(o.b)(M, e => ({
					visitPopulatedHome: () => e(Object(c.b)({}))
				})),
				R = (e, t) => Object(i.a)(k.a.CategoryPickerCategoryItem, _.a.categoryLink, {
					[_.a.active]: e,
					[k.a.disabled]: t
				});
			class F extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isTooltipOpen: !1
					}, this.trackCategoryClick = e => {
						this.props.sendEvent(Object(v.b)(Object(f.f)(e)))
					}, this.trackPopularClick = () => {
						this.props.sendEvent(Object(v.b)(x.b.Popular))
					}, this.trackGeopopularClicked = () => {
						this.props.sendEvent(Object(v.b)(h.c))
					}, this.trackEventClick = () => {
						this.eventCategory && this.props.sendEvent(Object(v.b)(this.eventCategory.name))
					}, this.trackOverflowClick = () => {
						this.props.sendEvent(Object(v.b)("overflow"))
					}, this.onHomeClick = e => {
						e.preventDefault(), this.props.isHomeLinkEnabled && (this.props.visitPopulatedHome(), this.props.sendEvent(Object(v.b)(x.b.Home)))
					}, this.showTooltip = () => {
						this.setState(e => e.isTooltipOpen ? null : {
							isTooltipOpen: !0
						})
					}, this.hideTooltip = () => {
						this.setState(e => e.isTooltipOpen ? {
							isTooltipOpen: !1
						} : null)
					}
				}
				render() {
					const {
						categories: e,
						categoriesPlacementVariant: t,
						isEligibleCountry: s,
						isM2MEnabled: n,
						isHomeLinkEnabled: o,
						isNightmode: a,
						topicName: c
					} = this.props, {
						isTooltipOpen: b
					} = this.state, g = Object(f.f)(c), y = g === x.b.Home, v = g === x.b.Popular, C = g === h.c, S = g === h.b;
					let w = e;
					if (this.eventCategory = Object(j.b)(), this.eventCategory) {
						const e = Object(f.f)(this.eventCategory.name);
						w = w.filter(t => e !== Object(f.f)(t.name))
					}
					let N = T;
					return this.eventCategory && (N += T), n && (N += T), s && (N += T), r.a.createElement("div", {
						className: k.a.SidebarLeft
					}, r.a.createElement(u.a, null, r.a.createElement(m.a, {
						buttonClassName: k.a.CategoryPickerButton,
						buttonText: "See",
						categories: w,
						categoryItemClassName: k.a.CategoryPickerCategoryItem,
						categoryItemHeight: T,
						categoryListContainerClassName: k.a.CategoryPickerCategoryListContainer,
						childrenOffset: N,
						className: Object(i.a)(k.a.CategoryPicker, {
							[k.a.blue]: Object(j.c)(t) && !a
						}),
						currentCategoryName: g,
						header: r.a.createElement(O.c, null, "Explore"),
						headerClassName: k.a.CategoryPickerHeader,
						initialNumberOfCategories: 12,
						onItemClick: this.trackCategoryClick,
						onMoreLessClick: this.trackOverflowClick
					}, n && r.a.createElement("li", {
						id: I,
						onMouseEnter: this.showTooltip,
						onMouseLeave: this.hideTooltip,
						onMouseMove: this.showTooltip
					}, r.a.createElement(E.a, {
						className: R(y, !o),
						"data-active": y,
						disabled: !o,
						onMouseDown: this.onHomeClick,
						rel: "nofollow",
						to: x.c[x.b.Home]
					}, r.a.createElement(O.c, null, "Home"), !o && r.a.createElement(p.a, {
						className: k.a.HomeDisabledTooltip,
						isOpen: b,
						tooltipId: I
					}))), r.a.createElement("li", null, r.a.createElement(E.a, {
						className: R(v),
						"data-active": v,
						onMouseDown: this.trackPopularClick,
						rel: "nofollow",
						to: x.c[x.b.Popular]
					}, r.a.createElement(O.c, null, "Popular"))), this.eventCategory && r.a.createElement("li", null, r.a.createElement(d.a, {
						className: R(S),
						"data-active": S,
						eventCategory: this.eventCategory,
						onMouseDown: this.trackEventClick
					})), s && r.a.createElement("li", {
						className: k.a.GeopopularItem
					}, r.a.createElement(l.a, {
						changeButtonClassName: k.a.GeopopularChangeButton,
						className: R(C),
						"data-active": C,
						onMouseDown: this.trackGeopopularClicked
					})))))
				}
			}
			t.a = B(Object(b.b)(F))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discorveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = Object(n.a)((e, t) => {
				let {
					isSubreddit: s
				} = t;
				return s
			}, (e, t) => {
				let {
					isPopular: s
				} = t;
				return s
			}, (e, t) => {
				let {
					listingKey: s
				} = t;
				return s ? Object(o.C)(e, {
					listingKey: s
				}) : []
			}, o.H, a.c, (e, t, s, n, o) => {
				if (!e && !t) return "number" == typeof o.home_feed_discovery_unit_index ? o.home_feed_discovery_unit_index : r.g;
				if (t) return "number" == typeof o.popular_feed_discovery_unit_index ? o.popular_feed_discovery_unit_index : r.g;
				for (let r = 0; r < s.length; r++) {
					const e = n[s[r]];
					if (e && !e.isStickied) return r
				}
				return r.g
			})
		},
		"./src/reddit/selectors/experiments/adSidebar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.a
				});
				return !!t && !Object(n.Sb)(t)
			}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=Frontpage.d04b229d0dc113e04189.js.map