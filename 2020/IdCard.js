// https://www.redditstatic.com/desktop2x/IdCard.10bae0ba935a8241f5d3.js
// Retrieved at 6/24/2020, 4:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["IdCard"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, n) {
			var s, r, o;
			r = [t, e], void 0 === (o = "function" == typeof(s = function(e, t) {
				"use strict";
				var n, s, r = "function" == typeof Map ? new Map : (n = [], s = [], {
						has: function(e) {
							return n.indexOf(e) > -1
						},
						get: function(e) {
							return s[n.indexOf(e)]
						},
						set: function(e, t) {
							-1 === n.indexOf(e) && (n.push(e), s.push(t))
						},
						delete: function(e) {
							var t = n.indexOf(e);
							t > -1 && (n.splice(t, 1), s.splice(t, 1))
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

				function i(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !r.has(e)) {
						var t, n = null,
							s = e.clientWidth,
							i = null,
							a = function() {
								e.clientWidth !== s && u()
							},
							c = function(t) {
								window.removeEventListener("resize", a, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", c, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(n) {
									e.style[n] = t[n]
								})), r.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", c, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", a, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", r.set(e, {
							destroy: c,
							update: u
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), n = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(n) && (n = 0), u()
					}

					function d(t) {
						var n = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
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
						var i = e.scrollHeight + n;
						0 !== e.scrollHeight ? (e.style.height = i + "px", s = e.clientWidth, r.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), o && (document.documentElement.scrollTop = o)) : e.style.height = t
					}

					function u() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							n = window.getComputedStyle(e, null),
							s = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
						if (s !== t ? "hidden" === n.overflowY && (d("scroll"), l(), s = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (d("hidden"), l(), s = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), i !== s) {
							i = s;
							var r = o("autosize:resized");
							try {
								e.dispatchEvent(r)
							} catch (a) {}
						}
					}
				}

				function a(e) {
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
						return i(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
				}, d.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], c), e
				}), t.exports = d
			}) ? s.apply(t, r) : s) || (e.exports = o)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, n) {
				return ((n = window.getComputedStyle) ? n(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/line-height/lib/line-height.js": function(e, t, n) {
			var s = n("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = s(e, "line-height"),
					n = parseFloat(t, 10);
				if (t === n + "") {
					var r = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = s(e, "line-height"), n = parseFloat(t, 10), r ? e.style.lineHeight = r : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (n *= 4, n /= 3) : -1 !== t.indexOf("mm") ? (n *= 96, n /= 25.4) : -1 !== t.indexOf("cm") ? (n *= 96, n /= 2.54) : -1 !== t.indexOf("in") ? n *= 96 : -1 !== t.indexOf("pc") && (n *= 16), n = Math.round(n), "normal" === t) {
					var o = e.nodeName,
						i = document.createElement(o);
					i.innerHTML = "&nbsp;", "TEXTAREA" === o.toUpperCase() && i.setAttribute("rows", "1");
					var a = s(e, "font-size");
					i.style.fontSize = a, i.style.padding = "0px", i.style.border = "0px";
					var c = document.body;
					c.appendChild(i), n = i.offsetHeight, c.removeChild(i)
				}
				return n
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var s, r, o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				},
				i = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var s = t[n];
							s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
						}
					}
					return function(t, n, s) {
						return n && e(t.prototype, n), s && e(t, s), t
					}
				}(),
				a = u(n("./node_modules/react/index.js")),
				c = u(n("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				d = u(n("./node_modules/autosize/dist/autosize.js")),
				l = u(n("./node_modules/line-height/lib/line-height.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function m(e, t) {
				var n = {};
				for (var s in e) t.indexOf(s) >= 0 || Object.prototype.hasOwnProperty.call(e, s) && (n[s] = e[s]);
				return n
			}

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var b = (r = s = function(e) {
				function t() {
					var e, n, s;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
					return n = s = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), s.state = {
						lineHeight: null
					}, s.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), s.textarea.dispatchEvent(t)
					}, s.getValue = function(e) {
						var t = e.valueLink,
							n = e.value;
						return t ? t.value : n
					}, s.updateLineHeight = function() {
						s.setState({
							lineHeight: (0, l.default)(s.textarea)
						})
					}, s.onChange = function(e) {
						s.currentValue = e.target.value, s.props.onChange && s.props.onChange(e)
					}, s.saveDOMNodeRef = function(e) {
						var t = s.props.innerRef;
						t && t(e), s.textarea = e
					}, s.getLocals = function() {
						var e = s,
							t = e.props,
							n = (t.onResize, t.maxRows),
							r = (t.onChange, t.style),
							i = (t.innerRef, m(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							a = e.state.lineHeight,
							c = e.saveDOMNodeRef,
							d = n && a ? a * n : null;
						return o({}, i, {
							saveDOMNodeRef: c,
							style: d ? o({}, r, {
								maxHeight: d
							}) : r,
							onChange: s.onChange
						})
					}, p(s, n)
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
				}(t, e), i(t, [{
					key: "componentDidMount",
					value: function() {
						var e = this,
							t = this.props,
							n = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, d.default)(e.textarea)
						}))) : (0, d.default)(this.textarea), n && this.textarea.addEventListener("autosize:resized", this.props.onResize)
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
							s = m(e, ["children", "saveDOMNodeRef"]);
						return a.default.createElement("textarea", o({}, s, {
							ref: n
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(a.default.Component), s.defaultProps = {
				rows: 1
			}, r);
			t.default = b, b.propTypes = {
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
			var s, r = n("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				o = (s = r) && s.__esModule ? s : {
					default: s
				};
			t.default = o.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function o() {}
			o.resetWarningCache = r, e.exports = function() {
				function e(e, t, n, r, o, i) {
					if (i !== s) {
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
					resetWarningCache: r
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
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([n.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), n.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), n.e("SubredditPremiumBadgeHovercardTooltip")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = n("./src/reddit/featureFlags/index.ts"),
				h = n("./src/reddit/helpers/economics/sortBadges.ts"),
				g = n("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = n("./src/reddit/models/Badge/index.ts");
			var x = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("CustomBadgeHovercardTooltip").then(n.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				v = n("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				C = n.n(v);
			const E = "add-custom-badge-tooltip",
				y = 100,
				_ = 2 * y;
			class O extends r.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, y)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, _)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return r.a.createElement("img", {
						className: Object(c.a)(C.a.image, this.props.className),
						src: "".concat(a.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(E, "-").concat(this.props.uniqueIdentifier);
					return r.a.createElement(s.Fragment, null, this.props.showAddCustom && r.a.createElement("div", {
						className: C.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, r.a.createElement("button", {
						className: C.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, r.a.createElement(g.a, {
						className: C.a.addCustom
					})), r.a.createElement(x, {
						className: C.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(this.props.badges).map(e => {
						const t = Object(f.b)(24, 24, e),
							n = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return r.a.createElement(s.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, r.a.createElement("div", {
							className: Object(c.a)(C.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(n),
							onMouseLeave: () => this.handleMouseLeave()
						}, r.a.createElement("img", {
							className: C.a.image,
							id: n,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? r.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: C.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: n,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : r.a.createElement(p.c, {
							caretOnTop: !0,
							key: "tooltip-".concat(e.id),
							tooltipId: n,
							text: e.title
						})))
					}))
				}
			}
			const w = Object(i.c)({
					badges: (e, t) => {
						let {
							subredditId: n,
							userId: s
						} = t;
						return ((e.users.appliedBadges[s] || {})[n] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: b.d.spPremium
				}),
				j = Object(i.c)({
					badges: (e, t) => {
						let {
							subredditId: n
						} = t;
						const s = e.user.account;
						if (s) {
							return ((e.users.appliedBadges[s.id] || {})[n] || []).map(t => e.badges.models[t]).filter(Boolean)
						}
						return []
					},
					useHovercard: b.d.spPremium
				}),
				N = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(d.i)())
				}),
				T = Object(o.b)(w, N)(O),
				S = Object(o.b)(j, N)(O)
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				a = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(i.b, {
				className: Object(o.a)(e.className, c.a.container, e.text.length > e.maxChars ? c.a.mOverflow : null)
			}, d._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [d._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "k", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "p", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = 500,
				r = 100,
				o = 5e3,
				i = 5e5,
				a = 0,
				c = 1440,
				d = 36600,
				l = 1e9,
				u = {
					Disabled: "disabled",
					"Mods only": "modonly",
					Anyone: "anyone"
				},
				m = ["Wiki is disabled for all users except mods", "Only mods, approved wiki contributors, or those on a page's edit list may edit", "Anyone who can submit to the community may edit"],
				p = {
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
				f = {
					"none (recommended)": null,
					best: "confidence",
					old: "old",
					top: "top",
					"q&a": "qa",
					"live (beta)": "live",
					controversial: "controversial",
					new: "new"
				},
				x = (e, t) => Object.keys(e).find(n => e[n] === t)
		},
		"./src/reddit/components/CommunityType/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommunityType/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/IconTooltip/index.tsx"),
				u = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				m = n("./src/reddit/icons/svgs/Eye/index.tsx"),
				p = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				b = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				h = n("./src/reddit/models/Flair/index.ts"),
				g = n("./src/reddit/models/Subreddit/index.ts"),
				f = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/components/CommunityType/index.m.less"),
				C = n.n(v);
			const E = n("./src/lib/lessComponent.tsx").a.span("TypeLabel", C.a),
				y = Object(c.c)({
					restrictions: x.p
				}),
				_ = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(a.b, {
					flair: {
						type: h.f.Nsfw,
						text: "nsfw"
					}
				}), o.a.createElement("span", {
					className: C.a.nsfwText
				}, s.fbt._("Adult content", null, {
					hk: "3KWIyX"
				}))),
				O = () => o.a.createElement(E, null, o.a.createElement(b.a, {
					className: C.a.quarantinedIcon
				}), o.a.createElement("span", null, s.fbt._("Quarantined", null, {
					hk: "1GDuqm"
				}))),
				w = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", null, e.subreddit.isNSFW && o.a.createElement(_, null)), o.a.createElement(E, {
					className: e.className
				}, e.description ? o.a.createElement(l.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, o.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && o.a.createElement(O, null)),
				j = Object(i.b)(y);
			t.a = j(e => {
				let {
					className: t,
					iconClassName: n,
					restrictions: r = f.e.Post,
					textClassName: i,
					subreddit: a
				} = e;
				switch (a.type) {
					case g.d.Restricted:
						return o.a.createElement(w, {
							className: t,
							icon: o.a.createElement(m.a, {
								className: Object(d.a)(C.a.restrictedIcon, n)
							}),
							text: s.fbt._("Restricted", null, {
								hk: "wixjP"
							}),
							textClassName: i,
							description: Object(f.g)(r),
							subreddit: a
						});
					case g.d.Private:
						return o.a.createElement(w, {
							className: t,
							icon: o.a.createElement(p.a, {
								className: Object(d.a)(C.a.privateIcon, n)
							}),
							text: s.fbt._("Private", null, {
								hk: "AwntX"
							}),
							textClassName: i,
							description: s.fbt._("Only approved users can view and submit to this community", null, {
								hk: "359nYX"
							}),
							subreddit: a
						});
					case g.d.EmployeesOnly:
						return o.a.createElement(w, {
							className: t,
							icon: o.a.createElement(u.a, {
								className: Object(d.a)(C.a.employeesIcon, n)
							}),
							text: a.allowContractors ? s.fbt._("Employees & Contractors", null, {
								hk: "1WUgPh"
							}) : s.fbt._("Employees Only", null, {
								hk: "4GrVK8"
							}),
							textClassName: i,
							subreddit: a
						});
					default:
						return o.a.createElement(o.a.Fragment, null, a.isQuarantined && o.a.createElement(O, null), a.isNSFW && o.a.createElement(_, null))
				}
			})
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				b = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/components/ContributorRequestFlow/index.m.less"),
				f = n.n(g);
			const x = Object(a.c)({
				restrictions: h.p
			});
			class v extends o.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						this.props.sendEvent(Object(p.a)(this.props.eventSource)), this.props.openContributorRequestModal()
					}
				}
				render() {
					return o.a.createElement(m.f, {
						className: Object(c.a)(this.props.smallButton ? null : f.a.RequestButton, this.props.className),
						onClick: this.onRequest
					}, this.props.eventSource === b.b.Comment ? s.fbt._("Request to comment", null, {
						hk: "3KqraC"
					}) : s.fbt._("Request to post", null, {
						hk: "3rSHPr"
					}))
				}
			}
			t.a = Object(i.b)(x, e => ({
				openContributorRequestModal: () => e(Object(d.i)(u.a.CONTRIBUTOR_REQUEST))
			}))(Object(l.c)(v))
		},
		"./src/reddit/components/ContributorRequestFlow/index.m.less": function(e, t, n) {
			e.exports = {
				RequestButton: "_33axOHPa8DzNnTmwzen-wO",
				requestButton: "_33axOHPa8DzNnTmwzen-wO"
			}
		},
		"./src/reddit/components/IdCard/CommunityOptions/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/IdCard/DescriptionBlock/index.m.less": function(e, t, n) {
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
				pencil: "_42Nh7O6pFcqnA6OZd3bOK"
			}
		},
		"./src/reddit/components/IdCard/Placeholder.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/IdCard/placeholder.m.less"),
				a = n.n(i);
			t.a = r.a.memo(e => r.a.createElement("div", {
				className: Object(o.a)(a.a.container)
			}, r.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.banner)
			}), r.a.createElement("div", {
				className: a.a.title
			}, r.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.icon)
			}), r.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.name)
			})), r.a.createElement("div", {
				className: a.a.counts
			}, r.a.createElement("div", {
				className: a.a.side
			}, r.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.count)
			}), r.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.text)
			})), r.a.createElement("div", {
				className: a.a.side
			}, r.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.count)
			}), r.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.text)
			}))), r.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.desc, a.a.one)
			}), r.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.desc, a.a.two)
			}), r.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.desc, a.a.three)
			}), r.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.desc, a.a.four)
			}), r.a.createElement("div", {
				className: Object(o.a)(a.a.shimmer, a.a.subscribe)
			})))
		},
		"./src/reddit/components/IdCard/Title.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				c = n("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				d = n("./src/reddit/components/IdCard/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function p(e) {
				const {
					canEditIcon: t,
					isTargetBlank: n,
					largeSubredditIcon: s,
					linkUrl: d,
					subredditIcon: p,
					titleText: b,
					primaryColor: h,
					subreddit: g,
					onOpenFilePicker: f
				} = e, x = p.url ? m._("Update icon", null, {
					hk: "GXdPy"
				}) : m._("Add icon", null, {
					hk: "31odkm"
				});
				return r.a.createElement("div", {
					className: Object(i.a)(l.a.Title, e.className)
				}, t && g ? r.a.createElement(c.a, {
					className: s ? l.a.largeSubredditIcon : l.a.subredditIcon,
					key: p.url,
					iconUrl: p.url,
					primaryColor: h,
					subreddit: g,
					inTopBar: !1
				}) : r.a.createElement(a.b, {
					altText: p.altText,
					className: s ? l.a.largeSubredditIcon : l.a.subredditIcon,
					key: p.url,
					iconUrl: p.url,
					primaryColor: h
				}), r.a.createElement("div", {
					className: l.a.titleTextContainer
				}, d ? r.a.createElement(o.a, u({
					className: l.a.TitleLink,
					key: d,
					to: d,
					onClick: e => e.stopPropagation()
				}, n ? {
					target: "_blank"
				} : {}), r.a.createElement("span", {
					className: l.a.TitleText,
					title: b
				}, b)) : r.a.createElement("span", {
					className: l.a.TitleText,
					key: b
				}, b), t && g && f && r.a.createElement("div", {
					className: l.a.editIconText,
					onClick: f
				}, x)))
			}
		},
		"./src/reddit/components/IdCard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				b = n("./src/lib/humanizeDate/index.ts"),
				h = n("./src/lib/isFakeSubreddit/index.ts"),
				g = n("./src/lib/prettyPrintNumber/index.ts"),
				f = n("./src/lib/timeAgo/index.ts"),
				x = n("./src/reddit/actions/tooltip.ts"),
				v = n("./src/reddit/actions/modal.ts"),
				C = n("./src/reddit/actions/multireddit/index.ts"),
				E = n("./src/reddit/actions/subscription/index.ts"),
				y = n("./src/reddit/components/CategoryTagList/index.tsx"),
				_ = n("./src/higherOrderComponents/makeAsync.tsx"),
				O = n("./src/lib/loadWithRetries/index.ts"),
				w = Object(_.a)({
					getComponent: () => Object(O.a)(() => n.e("AdminCommunityTopics").then(n.bind(null, "./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				j = n("./src/reddit/components/CommunityType/index.tsx"),
				N = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx"),
				T = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				S = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/reddit/actions/login.ts")),
				k = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/helpers/getSubredditUrl/index.ts"),
				P = n("./src/reddit/selectors/telemetry.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				B = n("./src/reddit/components/TrackingHelper/index.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var M = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const R = Object(u.c)({
				isLoggedIn: F.H
			});
			var D = Object(i.b)(R, e => ({
				openLoginModal: () => {
					e(Object(v.k)({
						actionSource: v.a.Post
					})), e(Object(S.h)())
				}
			}))(Object(B.c)(e => {
				var {
					isContributorRequestPending: t,
					isLoggedIn: n,
					listingName: r,
					openLoginModal: i,
					sendEvent: a,
					subreddit: c
				} = e, d = M(e, ["isContributorRequestPending", "isLoggedIn", "listingName", "openLoginModal", "sendEvent", "subreddit"]);
				const l = "".concat(Object(I.a)(c) || "/", "submit");
				return o.a.createElement(k.h, L({}, d, {
					onClick: e => {
						a(e => ({
							action: "click",
							noun: "create_post",
							source: "id_card",
							screen: Object(P.screen)(e),
							subreddit: Object(P.subreddit)(e),
							actionInfo: Object(P.actionInfo)(e)
						})), n || (i(), e.preventDefault())
					},
					to: l
				}), t ? s.fbt._("Draft post", null, {
					hk: "2cZzvO"
				}) : s.fbt._("Create post", null, {
					hk: "1Ae1c7"
				}))
			}));
			const H = Object(_.a)({
				getComponent: () => Object(O.a)(() => n.e("CreatePollButton").then(n.bind(null, "./src/reddit/components/IdCard/CreatePollButton/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var A = n("./node_modules/react-autosize-textarea/lib/index.js"),
				z = n.n(A),
				U = n("./src/reddit/actions/subredditSettings.ts"),
				W = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				q = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				V = n("./src/lib/fastdom/index.ts"),
				G = n("./src/lib/lessComponent.tsx"),
				K = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				J = n.n(K);
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Q = G.a.div("DescriptionContainer", J.a);
			class Y extends o.a.Component {
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
					this.state.shouldTruncateDescription && V.a.read(() => {
						this.containerRef && this.textRef && this.textRef.offsetHeight > this.containerRef.offsetHeight && this.setState({
							shouldDisplayShowMore: !0
						})
					})
				}
				render() {
					const {
						children: e,
						description: t,
						subreddit: n
					} = this.props, {
						shouldDisplayShowMore: s,
						shouldTruncateDescription: r
					} = this.state, i = n ? X._("Welcome to {subredditName}", [X._param("subredditName", n.name)], {
						hk: "1dVVp0"
					}) : "";
					return o.a.createElement(Q, {
						className: Object(m.a)(J.a.descriptionContainer, r && J.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef
					}, o.a.createElement("div", {
						className: J.a.description,
						ref: this.setTextRef
					}, t || i, e), r && s && o.a.createElement("div", {
						className: J.a.showMore
					}, "...", o.a.createElement(k.n, {
						className: J.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, X._("MORE", null, {
						hk: "1Xmz7S"
					}))))
				}
			}
			var Z = Y,
				$ = n("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				ee = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				te = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				ne = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				se = n("./src/reddit/selectors/activeModalId.ts"),
				re = n("./src/reddit/selectors/subreddit.ts");
			const oe = 6,
				ie = Object(u.c)({
					apiPending: re.S,
					unsavedChangesModalIsOpen: Object(se.b)($.a)
				});
			class ae extends o.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.containerRef = o.a.createRef(), this.isSaving = !1, this.setTextAreaRef = e => {
						this.textAreaRef = e
					}, this.handleOnFocus = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.state.editing) {
							const t = e.target !== this.textAreaRef ? () => this.focusTextArea() : void 0;
							this.setState({
								editing: !0
							}, t), this.props.sendEvent(te.a)
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
						this.props.sendEvent(Object(te.d)(e, t))
					}, this.state = {
						description: e.description || "",
						editing: !1
					}
				}
				hasFocus() {
					return !!document.activeElement && (document.activeElement === this.containerRef.current || this.containerRef.current && this.containerRef.current.contains(document.activeElement))
				}
				UNSAFE_componentWillReceiveProps(e) {
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
					const e = this.props.apiPending ? o.a.createElement(ee.a, {
						className: J.a.loadingIcon,
						sizePx: oe
					}) : void 0;
					return this.state.description ? o.a.createElement(o.a.Fragment, null, o.a.createElement(Z, {
						description: this.state.description,
						shouldTruncateDescription: this.props.shouldTruncateDescription,
						subreddit: this.props.subreddit
					}, o.a.createElement(ne.a, {
						className: J.a.pencil
					}), e)) : o.a.createElement("div", {
						className: J.a.emptyDescription
					}, s.fbt._("Add description", null, {
						hk: "47p1vF"
					}), e)
				}
				renderTextArea() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(z.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: s.fbt._("Tell us about your community", null, {
							hk: "40SeWt"
						}),
						className: Object(m.a)(J.a.editableDescription, J.a.activeEditableDescription),
						onChange: e => this.setState({
							description: e.currentTarget.value
						}),
						maxLength: q.c,
						value: this.state.description
					}), o.a.createElement("div", {
						className: J.a.editableDescriptionControlRow
					}, o.a.createElement(W.a, {
						className: J.a.characterCountdown,
						maxChars: q.c,
						text: this.state.description
					}), o.a.createElement("span", {
						className: J.a.cancel,
						onClick: this.onCancel
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement("span", {
						className: J.a.save,
						onClick: this.onSave
					}, s.fbt._("Save", null, {
						hk: "3bWn72"
					}))))
				}
				hasPendingChanges() {
					return this.state.description !== this.props.description
				}
				getContainerClassNames() {
					if (!this.state.editing && this.state.description) return [J.a.defaultEditableDescriptionContainer];
					const e = [J.a.editableDescriptionContainer];
					return this.state.editing && e.push(J.a.activeEditableDescriptionContainer), e
				}
				render() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						ref: this.containerRef,
						className: Object(m.a)(...this.getContainerClassNames()),
						tabIndex: 0,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur
					}, this.state.editing ? this.renderTextArea() : this.renderInactiveDescription(), this.props.unsavedChangesModalIsOpen && o.a.createElement($.b, {
						withOverlay: !0,
						ignoreDefaultFocus: !0,
						onCancel: this.focusTextArea,
						onDiscard: this.onCancel,
						onSave: this.onSave
					})))
				}
			}
			var ce = Object(i.b)(ie, (e, t) => {
					let {
						subreddit: n
					} = t;
					return {
						updateSubredditSettings: t => e(Object(U.h)(n.id, t, !0)),
						openUnsavedChangesModal: () => {
							e(Object(v.h)($.a))
						}
					}
				})(Object(B.c)(ae)),
				de = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				le = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx"),
				ue = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less"),
				me = n.n(ue);
			var pe = Object(_.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => o.a.createElement("div", {
						className: me.a.container
					}, o.a.createElement(le.a, null)),
					getComponent: () => Object(O.a)(() => Promise.all([n.e("SubredditCreation~SubredditInlineEditing"), n.e("SubredditInlineEditing")]).then(n.bind(null, "./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx"))).then(e => e.default)
				}),
				be = n("./src/reddit/components/OverflowMenu/index.tsx"),
				he = n("./src/reddit/components/SubscribeButton/index.tsx"),
				ge = n("./src/reddit/components/Widgets/Base/index.tsx"),
				fe = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				xe = n("./src/reddit/constants/listings.ts"),
				ve = n("./src/reddit/constants/modals.ts"),
				Ce = n("./src/reddit/constants/page.ts"),
				Ee = n("./src/reddit/constants/posts.ts"),
				ye = n("./src/reddit/controls/Dropdown/Row.tsx"),
				_e = n("./src/reddit/controls/ImageInput/index.tsx"),
				Oe = n("./src/reddit/featureFlags/index.ts"),
				we = n("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				je = n("./node_modules/lodash/memoize.js"),
				Ne = n.n(je),
				Te = n("./src/reddit/constants/categories.tsx"),
				Se = n("./src/config.ts");
			const ke = Array.from({
					length: 20
				}).map((e, t) => "".concat(Se.a.assetPath, "/img/snoovatars/snoovatar_").concat(t + 1, ".png")),
				Ie = [];
			var Pe = Ne()((function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
					if (!e || !t) return Ie;
					const n = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
					return Array.from({
						length: t
					}).map((e, t) => ({
						color: Te.a[(n + t) % Te.a.length],
						image: ke[(n + t) % ke.length]
					}))
				}), (function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
					return "".concat(e, "_").concat(t)
				})),
				Fe = n("./src/reddit/helpers/localStorage/index.ts"),
				Be = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				Le = n("./src/reddit/helpers/trackers/lightbox.ts"),
				Me = n("./src/reddit/helpers/trackers/modHub.ts"),
				Re = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				De = n("./src/reddit/icons/fonts/helpers.tsx"),
				He = n("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				Ae = n.n(He);
			var ze = e => o.a.createElement("i", {
					className: Object(m.a)(Ae.a.ModSettings, Object(De.b)("modSettings"), e.className)
				}),
				Ue = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				We = n("./src/reddit/icons/svgs/Help/index.tsx"),
				qe = n("./src/reddit/models/ApiRequestState/index.ts"),
				Ve = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				Ge = n("./src/reddit/selectors/category.ts"),
				Ke = n("./src/reddit/selectors/experiments/categories.ts"),
				Je = n("./src/reddit/constants/experiments.ts"),
				Xe = n("./src/reddit/helpers/chooseVariant/index.ts");
			var Qe = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Ye = n("./src/reddit/selectors/structuredStyles.ts"),
				Ze = n("./src/reddit/selectors/subscriptions.ts"),
				$e = n("./src/reddit/selectors/widgets.ts"),
				et = n("./src/reddit/components/IdCard/Banner.tsx"),
				tt = n("./src/reddit/actions/preferences.ts"),
				nt = n("./src/reddit/actions/authorFlair.ts"),
				st = n("./src/reddit/actions/badge.ts"),
				rt = n("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				ot = n("./src/reddit/components/Flair/index.tsx"),
				it = n("./src/reddit/featureFlags/component.tsx"),
				at = n("./src/reddit/models/User/index.ts"),
				ct = n("./src/reddit/selectors/userFlair.ts"),
				dt = n("./src/reddit/components/SidebarFlairSettings/index.m.less"),
				lt = n.n(dt);
			const ut = G.a.div("FlairSettingsContainer", lt.a),
				mt = G.a.div("FlairPreview", lt.a),
				pt = G.a.wrapped(e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 14 14",
					xmlns: "http://www.w3.org/2000/svg",
					version: "1.1"
				}, o.a.createElement("title", {
					id: "".concat(e.title, "-title")
				}, e.title), o.a.createElement("g", null, o.a.createElement("path", {
					fill: "inherit",
					d: "M8.1168,3.0832 L10.9168,5.8832 C11.0728,6.0392 11.0728,6.2928 10.9168,6.4488 L4.0824,13.2832 C4.0072,13.3584 3.9056,13.4 3.8,13.4 L1,13.4 C0.7784,13.4 0.6,13.2216 0.6,13 L0.6,10.2 C0.6,10.0944 0.6416,9.9928 0.7168,9.9176 L7.5512,3.0832 C7.7072,2.9272 7.9608,2.9272 8.1168,3.0832 Z M13.5168,2.152 C13.9848,2.62 13.9848,3.3808 13.5168,3.8488 L12.048,5.3176 C11.9696,5.396 11.8672,5.4352 11.7656,5.4352 C11.6632,5.4352 11.5608,5.396 11.4824,5.3176 L8.6824,2.5176 C8.5264,2.3616 8.5264,2.108 8.6824,1.952 L10.1512,0.4832 C10.6192,0.0152 11.38,0.0152 11.848,0.4832 L13.5168,2.152 Z"
				}))), "EditPencil", lt.a),
				bt = G.a.div("PreviewTitle", lt.a),
				ht = G.a.wrapped(ot.b, "FlairComponent", lt.a),
				gt = G.a.wrapped(k.n, "TertiaryButton", lt.a),
				ft = G.a.wrapped(gt, "IconButton", lt.a),
				xt = G.a.span("Username", lt.a),
				vt = Object(it.a)("spBadges", rt.a),
				Ct = Object(u.c)({
					badgesEnabled: Oe.d.spBadges,
					currentUser: F.i,
					userFlairData: ct.c,
					userHasBadge: (e, t) => {
						const n = e.user.account;
						if (n) {
							return !!((e.users.appliedBadges[n.id] || {})[t.subredditId] || []).length
						}
						return !1
					}
				}),
				Et = Object(i.b)(Ct, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						onToggleModal: t => e(Object(nt.b)({
							username: t,
							subredditId: n
						})),
						onToggleBadgeModal: () => e(Object(st.j)())
					}
				}),
				yt = e => o.a.createElement(ft, {
					onClick: e.onClick
				}, o.a.createElement(pt, null)),
				_t = e => o.a.createElement(gt, {
					onClick: e.onClick
				}, e.userFlairData.displaySettings.isEnabled ? e.userFlairData.applied || e.userHasBadge ? s.fbt._("edit badge & user flair", null, {
					hk: "3Us7d2"
				}) : s.fbt._("add badge & flair", null, {
					hk: "1oG5Fk"
				}) : e.userHasBadge ? s.fbt._("edit user badge", null, {
					hk: "2NLert"
				}) : s.fbt._("add badge", null, {
					hk: "x2H2m"
				}));
			class Ot extends o.a.Component {
				constructor() {
					super(...arguments), this.onFlairLinkClick = () => {
						const e = this.props.currentUser ? Object(at.e)(this.props.currentUser) : null;
						this.props.onToggleModal(e), this.props.sendEvent(Object(Le.a)("user_flair_picker"))
					}
				}
				render() {
					const {
						badgesEnabled: e,
						currentUser: t,
						onToggleBadgeModal: n,
						subredditId: r,
						userFlairData: i,
						userHasBadge: a
					} = this.props;
					return t && i ? o.a.createElement(ut, null, o.a.createElement(bt, null, s.fbt._("user flair preview", null, {
						hk: "3aBytK"
					}), o.a.createElement(yt, {
						onClick: this.onFlairLinkClick
					})), o.a.createElement(mt, null, a && o.a.createElement(vt, {
						className: lt.a.badge,
						subredditId: r,
						uniqueIdentifier: r
					}), o.a.createElement(xt, null, "u/".concat(t.displayText)), i.applied && i.displaySettings.isUserEnabled && o.a.createElement(ht, {
						flair: i.applied,
						forceSmallEmojis: !0
					})), e ? o.a.createElement(_t, {
						userFlairData: i,
						userHasBadge: a,
						onClick: n
					}) : null) : null
				}
			}
			var wt = Et(Object(B.c)(Ot)),
				jt = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Nt = n("./src/reddit/helpers/trackers/idCard.ts"),
				Tt = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				St = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				kt = n("./src/reddit/icons/svgs/Show/index.tsx"),
				It = e => o.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("path", {
					d: "M4.59 8l-2.3 2.29A1 1 0 0 0 3.7 11.7L6 9.41zM6 11a4 4 0 0 0 5.34 3.75l-5.1-5.1A4 4 0 0 0 6 11zM18.71 17.29l-5-5A3.87 3.87 0 0 0 14 11a4 4 0 0 0-.68-2.22c.07.06.15.11.21.17l2.76 2.76a1 1 0 0 0 1.41-1.41l-2.75-2.76A7 7 0 0 0 7.42 6L2.71 1.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.41-1.41z"
				})),
				Pt = n("./src/reddit/components/IdCard/CommunityOptions/index.m.less"),
				Ft = n.n(Pt);
			const Bt = G.a.wrapped(k.n, "TertiaryButton", Ft.a),
				Lt = Object(u.c)({
					shouldShowFlairPicker: ct.b,
					stylesDisabledForSubreddit: F.bb,
					stylesDisabledGlobally: F.cb
				});
			class Mt extends o.a.Component {
				constructor(e) {
					super(e), this.onContainerClick = e => {
						e.stopPropagation()
					}, this.onExpandButtonClick = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.onToggleStylesSwitch = () => {
						const e = !!this.props.stylesDisabledForSubreddit;
						this.props.sendEvent(Object(Nt.c)(e)), this.props.updateSubredditPrefs(this.props.subredditId, {
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
						shouldShowFlairPicker: n,
						stylesDisabledForSubreddit: r,
						stylesDisabledGlobally: i,
						subredditId: a
					} = this.props, {
						isOpen: c
					} = this.state, d = c ? o.a.createElement("div", {
						className: Ft.a.content
					}, o.a.createElement("div", {
						className: Object(m.a)(Ft.a.stylesToggle, {
							[Ft.a.disabled]: i
						}),
						title: i ? s.fbt._("This is unavailable because themes have been disabled globally in your user settings", null, {
							hk: "lBWwh"
						}) : void 0
					}, o.a.createElement("label", {
						className: Ft.a.stylesToggleLabel
					}, r ? o.a.createElement(It, null) : o.a.createElement(kt.a, null), s.fbt._("Community theme", null, {
						hk: "3Ne1GG"
					})), o.a.createElement(jt.a, {
						disabled: i,
						on: !r,
						onToggle: this.onToggleStylesSwitch
					})), n && !e && o.a.createElement(wt, {
						subredditId: a
					})) : null;
					return o.a.createElement("div", {
						className: Ft.a.container,
						onClick: this.onContainerClick
					}, o.a.createElement(Bt, {
						className: Object(m.a)(Ft.a.expandButton, {
							[Ft.a.redditStyle]: t
						}),
						onClick: this.onExpandButtonClick
					}, s.fbt._("Community options", null, {
						hk: "1hR5YC"
					}), c ? o.a.createElement(St.a, null) : o.a.createElement(Tt.a, null)), d)
				}
			}
			var Rt = Object(i.b)(Lt, e => ({
					updateSubredditPrefs: (t, n) => {
						e(Object(tt.J)(t, n))
					}
				}))(Mt),
				Dt = n("./src/reddit/components/IdCard/helpers.ts"),
				Ht = n("./src/reddit/components/IdCard/Placeholder.tsx"),
				At = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				zt = n("./src/reddit/components/IdCard/Title.tsx"),
				Ut = n("./src/reddit/components/IdCard/index.m.less"),
				Wt = n.n(Ut);
			const qt = "IDCARD_OVERFLOW_DROPDOWN_ID",
				Vt = Object(i.b)(() => Object(u.c)({
					postCategories: (e, t) => Object(Ge.m)(e, t.postId),
					favoriteSubredditsIds: Ze.a,
					idCardWidget: (e, t) => Object($e.d)(e, {
						subredditName: t.listingName
					}),
					isContributorRequestPending: e => Object(re.h)(e, Ve.e.Post),
					isLoggedIn: F.H,
					moderatorPermissions: (e, t) => {
						const n = Object(re.F)(e, t.listingName);
						if (n) return Object(Qe.j)(e, {
							subredditId: n
						})
					},
					isInCategoriesExperiment: Ke.a,
					showContributorRequestFlow: e => Object(re.r)(e, Ve.e.Post),
					showCreatePollButton: e => (e => Object(Xe.c)(e, {
						experimentEligibilitySelector: Xe.a,
						experimentName: Je.t
					}) === Je.z.Treatment)(e) && !Object(Fe.g)(),
					subreddit: (e, t) => Object(re.A)(e, {
						subredditName: t.listingName
					}),
					subredditAboutInfo: (e, t) => Object(re.x)(e, {
						subredditName: t.listingName
					}),
					subredditCoins: (e, t) => {
						let {
							listingName: n
						} = t;
						return Object(re.C)(e, {
							subredditName: n
						})
					},
					subredditIcon: (e, t) => Object(Ye.q)(e, {
						subredditName: t.listingName
					}),
					adminCommunityTopicsEnabled: Oe.d.adminCommunityTopics,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							listingName: n
						} = t;
						const s = Object(re.A)(e, {
							subredditName: n
						});
						return !!s && Object(l.a)(e, {
							subredditId: s.id
						})
					}
				}), (e, t) => ({
					addToMultiClicked: () => {
						e(Object(C.g)(!0, !0)), e(Object(v.h)(ve.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					dispatchPush: t => e(Object(c.b)(t)),
					toggleFavorite: t => e(Object(E.c)({
						id: t,
						type: Ee.a.SUBREDDIT
					})),
					toggleTooltip: t => e(Object(x.h)({
						tooltipId: t
					})),
					onCommunityIconSelected: (n, s) => {
						e(Object(d.b)(t.listingName, n, s))
					}
				}), (e, t, n) => Object.assign({}, e, t, n, {
					isEligibleForCommunityAwards: Object(we.a)(e.subreddit),
					isFavoriteSubreddit: !!e.subreddit && e.favoriteSubredditsIds.indexOf(e.subreddit.id) > -1,
					onContainerClick: () => n.isOverlay && t.dispatchPush(e.subreddit.url),
					onToggleFavoriteClick: () => t.toggleFavorite(e.subreddit.id)
				}));
			class Gt extends o.a.Component {
				constructor() {
					super(...arguments), this.iconFilePickerRef = null, this.setIconFilePickerRef = e => this.iconFilePickerRef = e, this.onClickModTools = () => this.props.sendEvent(Object(Me.a)()), this.handleVisitCommunityClick = () => this.props.sendEvent(Object(Le.a)("visit")), this.getListingNameToUse = () => {
						const {
							isLoggedIn: e,
							listingName: t
						} = this.props;
						return e || t !== Ce.b ? t : xe.b.Popular
					}, this.onIconImageSelected = e => {
						this.props.onCommunityIconSelected(e, Object(qe.b)())
					}, this.openIconFilePicker = () => {
						this.iconFilePickerRef && this.iconFilePickerRef.click(), this.props.sendEvent(te.b)
					}, this.renderCreatePostButtons = () => {
						const {
							isContributorRequestPending: e,
							listingName: t,
							showCreatePollButton: n,
							showContributorRequestFlow: s,
							subreddit: r
						} = this.props, i = Object(h.a)(this.getListingNameToUse());
						return !i && s ? o.a.createElement(N.a, {
							eventSource: Ve.b.IdCard
						}) : o.a.createElement(o.a.Fragment, null, o.a.createElement(D, {
							className: Wt.a.CreatePostButton,
							isContributorRequestPending: e,
							listingName: t,
							subreddit: r
						}), !e && !i && n && o.a.createElement(H, {
							listingName: t
						}))
					}, this.renderButtons = () => {
						const {
							isCommentsPage: e,
							isLoggedIn: t,
							isMinimal: n,
							isOverlay: r,
							isSubmissionPage: i,
							subreddit: a,
							subredditAboutInfo: c
						} = this.props, d = this.getListingNameToUse(), l = Object(h.a)(d), u = n && a && !r, m = e && !l && !u, p = t && !u && !i && !r && !(c && c.userIsBanned);
						return o.a.createElement("div", {
							className: Wt.a.Buttons
						}, m && o.a.createElement(he.a, {
							className: Wt.a.SubscribeButton,
							getEventFactory: e => Object(Le.a)(e ? "unsubscribe" : "subscribe"),
							id: "subscribe-button-".concat(a.id),
							identifier: {
								name: a.name,
								type: "subreddit"
							},
							onClick: e => e.stopPropagation()
						}), p && this.renderCreatePostButtons(), t && !i && !r && !a && o.a.createElement(T.a, {
							className: Wt.a.CreateCommunityButton,
							eventSource: "id_card"
						}), u && o.a.createElement(k.k, {
							className: Wt.a.VisitCommunityButton,
							onClick: this.handleVisitCommunityClick,
							to: a.url
						}, s.fbt._("Visit Community", null, {
							hk: "4fokdb"
						})))
					}
				}
				render() {
					const {
						addToMultiClicked: e,
						className: t,
						idCardWidget: n,
						isCommentsPage: r,
						isEligibleForCommunityAwards: i,
						isInCategoriesExperiment: c,
						isLoggedIn: d,
						isMinimal: l,
						isOverlay: u,
						isSubmissionPage: p,
						moderatorPermissions: b,
						onContainerClick: g,
						postCategories: f,
						postId: x,
						subreddit: v,
						subredditAboutInfo: C,
						subredditCoins: E,
						subredditIcon: _,
						toggleTooltip: O,
						subredditInlineEditingEnabled: N
					} = this.props, T = this.getListingNameToUse(), S = Object(h.a)(T);
					if (!S && !n) return o.a.createElement(Ht.a, null);
					const {
						bannerBackgroundImage: k,
						currentlyViewingCount: I,
						currentlyViewingText: P,
						description: F,
						snooBackground: B,
						subscribersCount: L,
						subscribersText: M,
						titleText: R,
						url: D
					} = Object(Dt.a)({
						listingName: T,
						subreddit: v,
						idCardWidget: n
					}), H = S || u || p, A = !S && v.id ? v.id : "", z = C && C.created, U = s.fbt._("Cake Day", null, {
						hk: "gZ29b"
					}), W = "IdCard--Subscribers--".concat(u, "--").concat(A), q = "IdCard--CurrentlyViewing--".concat(u, "--").concat(A), V = "IdCard--CakeDay--".concat(u, "--").concat(A), G = "IdCard--CoinCoint--".concat(u, "--").concat(A), K = l && !u, J = !S && !u && N && !p, X = J ? o.a.createElement(ce, {
						description: F,
						shouldTruncateDescription: !1,
						isCommentsPage: !!r,
						subreddit: v
					}) : o.a.createElement(Z, {
						description: F,
						shouldTruncateDescription: !1,
						subreddit: v
					});
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(fe.a, {
						className: Object(m.a)(Wt.a.ThemedWidget, t),
						onClick: u ? g : void 0,
						headerButton: o.a.createElement("div", {
							className: Wt.a.headerButtonsContainer
						}, !H && v && b && o.a.createElement(a.a, {
							className: Wt.a.ModToolsLink,
							to: b.posts ? "".concat(v.url, "about/modqueue") : "".concat(v.url, "about/"),
							onClick: this.onClickModTools
						}, o.a.createElement(ze, {
							className: Wt.a.ModSettings
						}), s.fbt._("Mod tools", null, {
							hk: "3tJVME"
						})), d && v && o.a.createElement(be.b, {
							className: Wt.a.overflowButton,
							dropdownId: qt,
							targetPosition: ["right", "bottom"],
							tooltipPosition: ["right", "top"]
						}, !v.isQuarantined && o.a.createElement(ye.b, {
							className: Wt.a.dropdownRow,
							displayText: s.fbt._("Add to Custom Feed", null, {
								hk: "11L4wo"
							}),
							onClick: e
						}), o.a.createElement(ye.b, {
							className: Wt.a.dropdownRow,
							displayText: this.props.isFavoriteSubreddit ? s.fbt._("Remove from Favorites", null, {
								hk: "2TGndK"
							}) : s.fbt._("Add to Favorites", null, {
								hk: "2dlRbZ"
							}),
							onClick: this.props.onToggleFavoriteClick
						}))),
						redditStyle: S || p,
						title: H ? void 0 : s.fbt._("About Community", null, {
							hk: "31Lg8f"
						}),
						titleClassName: S ? void 0 : Wt.a.subredditTitle
					}, H && o.a.createElement(et.a, {
						bannerBackgroundImage: k
					}), S || p || r ? S ? Object(At.a)({
						titleText: R,
						snooBackground: B
					}) : o.a.createElement(zt.a, {
						isTargetBlank: p,
						linkUrl: S ? void 0 : D,
						subredditIcon: _,
						canEditIcon: J,
						subreddit: v,
						titleText: R,
						onOpenFilePicker: this.openIconFilePicker
					}) : null, X, !S && !K && Jt(L, M, W, I, P, q, z, U, V, O), !S && o.a.createElement("div", {
						className: Wt.a.CommunityTypeContainer
					}, o.a.createElement(j.a, {
						className: Wt.a.communityType,
						iconClassName: Wt.a.communityTypeIcon,
						subreddit: v,
						textClassName: Wt.a.communityTypeText
					})), i && b && void 0 !== E && o.a.createElement(o.a.Fragment, null, o.a.createElement("hr", {
						className: Wt.a.HorizontalLine
					}), o.a.createElement("div", {
						className: Wt.a.communityCoinCount
					}, o.a.createElement(Re.a, {
						className: Wt.a.coinIcon
					}), s.fbt._("{number-community-coins} Coins", [s.fbt._param("number-community-coins", E.toLocaleString())], {
						hk: "3FSFdY"
					}), o.a.createElement("span", {
						id: G,
						onMouseLeave: () => O(G),
						onMouseEnter: () => O(G)
					}, o.a.createElement(We.a, {
						className: Wt.a.helpIcon
					})), o.a.createElement(de.c, {
						tooltipId: G
					}, o.a.createElement("p", {
						className: Wt.a.coinsTooltipContent
					}, s.fbt._("The community gets Coins from Awards given by members", null, {
						hk: "3j3NSH"
					}))))), J && o.a.createElement(pe, {
						context: Be.a.idCard,
						subredditId: A
					}), !S && K && Kt(v, L, I), this.renderButtons(), c && f && x && (r || u) && o.a.createElement(o.a.Fragment, null, o.a.createElement("hr", {
						className: Wt.a.HorizontalLine
					}), o.a.createElement("div", {
						className: Wt.a.CategoryContainer
					}, o.a.createElement(ge.a, {
						className: Wt.a.widgetHeader
					}, s.fbt._("Discover more in:", null, {
						hk: "1o2gtg"
					})), o.a.createElement(y.a, {
						postId: x,
						inLightboxHeader: !0,
						postCategories: f
					}))), !S && d && o.a.createElement(o.a.Fragment, null, o.a.createElement(Rt, {
						isOverlay: u,
						isSubmissionPage: p,
						sendEvent: this.props.sendEvent,
						subredditId: v.id
					})), J && o.a.createElement(_e.a, {
						key: "icon-file-picker",
						className: Wt.a.iconFilePicker,
						inputRef: this.setIconFilePickerRef,
						multiple: !1,
						onChange: this.onIconImageSelected
					}), !S && d && this.props.adminCommunityTopicsEnabled && o.a.createElement(w, {
						key: "admin-community-topics",
						subredditId: A
					})))
				}
			}
			const Kt = (e, t, n) => {
					const r = Pe(e.name);
					return o.a.createElement("span", {
						className: Wt.a.metaTextContainer
					}, r.map((e, t) => {
						let {
							color: n,
							image: r
						} = e;
						return o.a.createElement("img", {
							alt: 0 === t ? s.fbt._("Members icons", null, {
								hk: "1ayNe4"
							}) : "",
							className: Wt.a.memberIcon,
							key: r,
							src: r,
							style: {
								backgroundColor: n
							}
						})
					}), o.a.createElement("span", {
						className: Object(m.a)(Wt.a.CountMetaText, Wt.a.metaText)
					}, s.fbt._({
						"*": "{number of members} members",
						_1: "1 member"
					}, [s.fbt._plural(t, "number of members", Object(g.b)(t))], {
						hk: "4nET31"
					})), o.a.createElement("span", {
						className: Object(m.a)(Wt.a.CountMetaText, Wt.a.metaText)
					}, s.fbt._("{viewingCount} online", [s.fbt._param("viewingCount", Object(g.b)(n))], {
						hk: "cxviW"
					})))
				},
				Jt = (e, t, n, r, i, a, c, d, l, u) => o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Wt.a.UserCounts
				}, o.a.createElement("div", {
					className: Wt.a.SubscriberCount,
					onMouseEnter: () => u(n),
					onMouseLeave: () => u(n)
				}, o.a.createElement("div", {
					className: Wt.a.Count
				}, Object(g.b)(e)), o.a.createElement("p", {
					className: Wt.a.UserType,
					id: n
				}, t), o.a.createElement(de.c, {
					caretOnTop: !0,
					text: "".concat(Object(g.b)(e, !0), " ").concat(t),
					tooltipId: n
				})), o.a.createElement("div", {
					className: Wt.a.Online,
					onMouseEnter: () => u(a),
					onMouseLeave: () => u(a)
				}, o.a.createElement("div", {
					className: Wt.a.Count
				}, Object(g.b)(r)), o.a.createElement("p", {
					className: Wt.a.UserType,
					id: a
				}, i), o.a.createElement(de.c, {
					caretOnTop: !0,
					text: "".concat(Object(g.b)(r, !0), " ").concat(i),
					tooltipId: a
				})), o.a.createElement("div", null)), c && o.a.createElement(o.a.Fragment, null, o.a.createElement("hr", {
					className: Wt.a.HorizontalLine
				}), o.a.createElement("div", {
					className: Wt.a.CakeDayContainer,
					onMouseEnter: () => u(l),
					onMouseLeave: () => u(l)
				}, o.a.createElement("div", {
					className: Wt.a.CakeDay,
					id: l
				}, o.a.createElement(Ue.a, {
					className: Wt.a.cakeIcon,
					key: "cakeDay"
				}), s.fbt._("Created {cakeday}", [s.fbt._param("cakeday", Object(b.a)(c, !0, !0, !0))], {
					hk: "8Y46b"
				})), o.a.createElement(de.c, {
					caretOnTop: !0,
					text: Object(f.d)(c),
					tooltipId: l
				}))));
			t.default = Object(B.c)(Vt(Object(p.a)(Gt)))
		},
		"./src/reddit/components/IdCard/placeholder.m.less": function(e, t, n) {
			e.exports = {
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
				shimmer: "_2hgXdc8jVQaXYAXvnqEyED",
				gradientAnimation: "_3XkHjK4wMgxtjzC1TvoXrb",
				container: "_1KWSZXqSM_BLhBzkPyJFGR"
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				loading: "_2cHgYGbfV9EZMSThqLt2tx",
				small: "_3Q7WCNdCi77r0_CKPoDSFY",
				large: "_2wgLWvNKnhoJX3DUVT_3F-"
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.m.less"),
				i = n.n(o);
			t.a = () => r.a.createElement("div", null, r.a.createElement("div", {
				className: i.a.small
			}), r.a.createElement("div", {
				className: i.a.large
			}))
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less": function(e, t, n) {
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
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./src/reddit/components/OverflowMenu/index.m.less"),
				f = n.n(g);
			const x = d.a.wrapped(m.a, "_Dropdown", f.a),
				v = Object(u.a)(x),
				C = d.a.button("MenuButton", f.a),
				E = d.a.wrapped(b.a, "MenuIcon", f.a),
				y = d.a.wrapped(p.b, "DropdownRow", f.a),
				_ = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return Object(h.b)(n)(e)
					}
				}),
				O = Object(i.b)(_, (e, t) => {
					let {
						dropdownId: n
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: n
						}))
					}
				}),
				w = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = O(e => o.a.createElement(C, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: w(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : o.a.createElement(E, null), o.a.createElement(v, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/SidebarFlairSettings/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return i
			})), n.d(t, "p", (function() {
				return a
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "j", (function() {
				return E
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(r);
			const i = s.a.section("FormPage", o.a),
				a = s.a.h1("HomePageTitle", o.a),
				c = s.a.button("HomePageBreadcrumb", o.a),
				d = s.a.div("HomePageGroup", o.a),
				l = s.a.h1("FormPageTitle", o.a),
				u = s.a.div("FormPageSection", o.a),
				m = s.a.div("FormGroup", o.a),
				p = s.a.h2("FormGroupTitle", o.a),
				b = s.a.div("FormElement", o.a),
				h = s.a.div("FormGroupDescription", o.a),
				g = s.a.div("FormItem", o.a),
				f = s.a.h3("FormElementTitle", o.a),
				x = s.a.div("FormElementDescription", o.a),
				v = s.a.div("FormElementError", o.a),
				C = s.a.div("FormElementSubGroup", o.a),
				E = s.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/SubredditUnsavedChangesModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = "subreddit-unsaved-changes-modal", p = Object(o.b)(null, e => ({
				closeModal: () => e(Object(a.g)(m))
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
					return r.a.createElement(c.d, null, r.a.createElement(c.h, null, r.a.createElement(l.a, null, r.a.createElement(c.p, null, u._("Save changes before leaving?", null, {
						hk: "34wJXL"
					})), r.a.createElement(d.a, {
						onClick: this.onCancelClick
					}, r.a.createElement(c.b, null)))), r.a.createElement(c.k, null, r.a.createElement(c.o, null, u._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "2SOiAP"
					}))), r.a.createElement(c.f, null, r.a.createElement(c.a, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, u._("Discard", null, {
						hk: "ViASy"
					})), r.a.createElement(c.q, {
						onClick: this.onSaveClick,
						"data-redditstyle": !0
					}, u._("Save", null, {
						hk: "nbpNh"
					}))))
				}
			}
			t.b = Object(i.a)(p(b))
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/constants/elementClassNames.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				m = n.n(u),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const f = b.a.button("IconButton", m.a),
				x = b.a.wrapped(d.a, "SubscribeIcon", m.a),
				v = b.a.wrapped(c.a, "UnsubscribeIcon", m.a),
				C = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = g(e, ["border", "small"]);
					return o.a.createElement(f, s, o.a.createElement(x, {
						className: Object(p.a)(s.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", m.a),
				E = b.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = g(e, ["border", "small"]);
					return t ? o.a.createElement(a.f, h({}, s, {
						className: Object(p.a)(s.className, {
							[m.a.isSmall]: n
						})
					})) : o.a.createElement(a.n, h({}, s, {
						className: Object(p.a)(s.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", m.a),
				y = e => {
					var {
						icon: t
					} = e, n = g(e, ["icon"]);
					return t ? o.a.createElement(C, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : o.a.createElement(E, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				},
				_ = b.a.wrapped(e => {
					var {
						border: t,
						small: n,
						type: s
					} = e, r = g(e, ["border", "small", "type"]);
					return o.a.createElement(f, r, o.a.createElement(v, {
						className: Object(p.a)(i.n, r.className, {
							[m.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", m.a),
				O = b.a.wrapped(e => {
					var {
						border: t,
						small: n,
						type: r
					} = e, i = g(e, ["border", "small", "type"]);
					const c = o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
							className: m.a.UnsubscribeButtonDefault
						}, "subreddit" === r ? s.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : s.fbt._("Following", null, {
							hk: "1wQlVR"
						})), o.a.createElement("span", {
							className: m.a.UnsubscribeButtonHover
						}, "subreddit" === r ? s.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : s.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						d = Object(p.a)(i.className, {
							[m.a.isSmall]: n
						});
					return t ? o.a.createElement(a.i, h({}, i, {
						className: d,
						children: c
					})) : o.a.createElement(a.n, h({}, i, {
						className: d,
						children: c
					}))
				}, "UnsubscribeButton", m.a),
				w = e => {
					var {
						icon: t
					} = e, n = g(e, ["icon"]);
					return t ? o.a.createElement(_, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					})) : o.a.createElement(O, h({}, n, {
						className: Object(p.a)(n.className, {
							[m.a.isSmall]: n.small
						})
					}))
				};
			class j extends o.a.Component {
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
						icon: n = !1,
						id: s,
						small: r = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: r
					};
					return this.props.userIsSubscriber ? o.a.createElement(w, h({}, i, {
						type: this.props.identifier.type
					})) : o.a.createElement(y, h({}, i, {
						id: s
					}), this.props.children, Object(l.a)({
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = e => {
					let {
						type: t,
						key: n
					} = e;
					return o[r({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(o.a))
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
				return u
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(a),
				d = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const l = o.a.div("WidgetBackground", c.a),
				u = o.a.wrapped(e => {
					var {
						children: t
					} = e, n = d(e, ["children"]);
					return r.a.createElement("div", n, r.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: i.cb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(o.d([n], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([n], !1))
				}
			})
		},
		"./src/reddit/controls/IconTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_3bX7W3J0lU78fp7cayvNxx"
			}
		},
		"./src/reddit/controls/IconTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				a = n("./src/reddit/controls/IconTooltip/index.m.less"),
				c = n.n(a);
			const d = Object(o.a)(i.b),
				l = ["center", "top"],
				u = ["center", "bottom"];
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
						tooltipPosition: u
					}))
				}
			}
		},
		"./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/Subreddit/index.ts");
			const r = new Set(["goins", "gold_testing", "inthesoulstone", "lounge", "lssgoldnormal", "maymodsguide1", "maymodsguide2", "megalounge", "pan2", "pan3", "venkman_bookclub", "whatssnoo", "translation_piglatin", "translation_pirate", "translation_initials", "translation_german", "translation_british"]),
				o = new Set([s.d.Private]),
				i = e => !(!e || !e.name) && (!!r.has(e.name.toLowerCase()) || !e.isNSFW && !e.isQuarantined && !o.has(e.type))
		},
		"./src/reddit/helpers/trackers/idCard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/selectors/widgets.ts"),
				i = n("./src/telemetry/index.ts");
			const a = e => {
					Object(i.a)(Object.assign({}, r.defaults(e), {
						action: s.c.CLICK,
						noun: "multi_detail",
						source: "id_card"
					}))
				},
				c = (e, t, n) => {
					const {
						subreddit: a,
						profile: c
					} = Object(o.b)(e, t);
					Object(i.a)(Object.assign({}, r.defaults(e), {
						action: s.c.CLICK,
						noun: "multi_detail_subreddit",
						profile: c,
						source: "id_card",
						subreddit: Object.assign({}, a, {
							categoryName: n
						})
					}))
				},
				d = e => t => ({
					action: s.c.CLICK,
					source: "id_card",
					noun: e ? "enable_community_styles" : "disable_community_styles",
					subreddit: r.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					profile: i.profile(e),
					screen: i.screen(e),
					subreddit: i.subreddit(e)
				}),
				c = (e, t, n) => s => Object.assign({
					source: Object(o.i)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t
				}, a(s), {
					post: i.post(s, e)
				}),
				d = (e, t) => n => {
					const s = i.currentPost(n);
					return s ? c(s.id, e, t)(n) : Object.assign({
						source: Object(o.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e
					}, a(n))
				},
				l = (e, t) => n => Object(r.a)(Object.assign({}, c(e, t)(n), i.defaults(n))),
				u = e => t => Object.assign({
					source: "id_card",
					action: s.c.CLICK,
					noun: e
				}, a(t), {
					post: i.currentPost(t),
					userSubreddit: i.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				o = e => t => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: e
				}, r(t)),
				i = () => e => Object.assign({
					source: "breadcrumb",
					action: "click",
					noun: "subreddit"
				}, r(e)),
				a = () => e => Object.assign({
					source: "id_card",
					action: "click",
					noun: "mod_hub_nav"
				}, r(e))
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => Object.assign({}, s.defaults(t), {
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: s.subreddit(t)
				}),
				o = e => t => Object.assign({}, s.defaults(t), {
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: s.subreddit(t)
				})
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(i.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || o.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, n) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), r.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(e.className, a.a.admin, {
					[a.a.mEnabled]: e.enabled
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
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
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
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

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
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
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
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					fillRule: "evenodd"
				}, r.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), r.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = e => {
				return Object(o.E)(e) || s.u.Treatment1 === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.m
				})
			}
		}
	}
]);
//# sourceMappingURL=IdCard.10bae0ba935a8241f5d3.js.map