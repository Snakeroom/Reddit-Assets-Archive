// https://www.redditstatic.com/desktop2x/IdCard.ad0bc5524058c1fcc1cf.js
// Retrieved at 2/20/2020, 8:50:20 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["IdCard"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, n) {
			var s, r, i;
			r = [t, e], void 0 === (i = "function" == typeof(s = function(e, t) {
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
					i = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (l) {
					i = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function o(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !r.has(e)) {
						var t, n = null,
							s = e.clientWidth,
							o = null,
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
							i = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var o = e.scrollHeight + n;
						0 !== e.scrollHeight ? (e.style.height = o + "px", s = e.clientWidth, r.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), i && (document.documentElement.scrollTop = i)) : e.style.height = t
					}

					function u() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							n = window.getComputedStyle(e, null),
							s = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
						if (s !== t ? "hidden" === n.overflowY && (d("scroll"), l(), s = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (d("hidden"), l(), s = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), o !== s) {
							o = s;
							var r = i("autosize:resized");
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
						return o(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
				}, d.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], c), e
				}), t.exports = d
			}) ? s.apply(t, r) : s) || (e.exports = i)
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
					var i = e.nodeName,
						o = document.createElement(i);
					o.innerHTML = "&nbsp;", "TEXTAREA" === i.toUpperCase() && o.setAttribute("rows", "1");
					var a = s(e, "font-size");
					o.style.fontSize = a, o.style.padding = "0px", o.style.border = "0px";
					var c = document.body;
					c.appendChild(o), n = o.offsetHeight, c.removeChild(o)
				}
				return n
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var s, r, i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				},
				o = function() {
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
					for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
					return n = s = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), s.state = {
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
							o = (t.innerRef, m(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							a = e.state.lineHeight,
							c = e.saveDOMNodeRef,
							d = n && a ? a * n : null;
						return i({}, o, {
							saveDOMNodeRef: c,
							style: d ? i({}, r, {
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
				}(t, e), o(t, [{
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
						return a.default.createElement("textarea", i({}, s, {
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
				i = (s = r) && s.__esModule ? s : {
					default: s
				};
			t.default = i.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}
			e.exports = function() {
				function e(e, t, n, r, i, o) {
					if (o !== s) {
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
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return n.checkPropTypes = r, n.PropTypes = n, n
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
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
				E = n.n(v);
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "a", (function() {
				return S
			}));
			const C = "add-custom-badge-tooltip",
				y = 100,
				O = 2 * y;
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, y)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, O)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return r.a.createElement("img", {
						className: Object(c.a)(E.a.image, this.props.className),
						src: "".concat(a.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(C, "-").concat(this.props.uniqueIdentifier);
					return r.a.createElement(s.Fragment, null, this.props.showAddCustom && r.a.createElement("div", {
						className: E.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, r.a.createElement("button", {
						className: E.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, r.a.createElement(g.a, {
						className: E.a.addCustom
					})), r.a.createElement(x, {
						className: E.a.badgeHovercard,
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
							className: Object(c.a)(E.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(n),
							onMouseLeave: () => this.handleMouseLeave()
						}, r.a.createElement("img", {
							className: E.a.image,
							id: n,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? r.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: E.a.badgeHovercard,
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
			const _ = Object(o.c)({
					badges: (e, t) => {
						let {
							subredditId: n,
							userId: s
						} = t;
						return ((e.users.appliedBadges[s] || {})[n] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: b.d.spPremium
				}),
				T = Object(o.c)({
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
				w = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(d.i)())
				}),
				N = Object(i.b)(_, w)(j),
				S = Object(i.b)(T, w)(j)
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				a = n("./src/reddit/i18n/utils.ts"),
				c = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = n.n(c);
			t.a = e => r.a.createElement(o.b, {
				className: Object(i.a)(e.className, d.a.container, e.text.length > e.maxChars ? d.a.mOverflow : null)
			}, "".concat(e.maxChars - e.text.length, " ").concat(Object(a.c)("Characters")))
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "k", (function() {
				return o
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
				i = 5e3,
				o = 5e5,
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/components/Flair/index.tsx"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/IconTooltip/index.tsx"),
				l = n("./src/reddit/i18n/utils.ts"),
				u = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				m = n("./src/reddit/icons/svgs/Eye/index.tsx"),
				p = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				b = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				h = n("./src/reddit/models/Flair/index.ts"),
				g = n("./src/reddit/models/Subreddit/index.ts"),
				f = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/components/CommunityType/index.m.less"),
				E = n.n(v);
			const C = n("./src/lib/lessComponent.tsx").a.span("TypeLabel", E.a),
				y = Object(a.c)({
					restrictions: x.o
				}),
				O = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(o.b, {
					flair: {
						type: h.f.Nsfw,
						text: "nsfw"
					}
				}), r.a.createElement("span", {
					className: E.a.nsfwText
				}, Object(l.c)("Adult content"))),
				j = () => r.a.createElement(C, null, r.a.createElement(b.a, {
					className: E.a.quarantinedIcon
				}), r.a.createElement("span", null, Object(l.c)("Quarantined"))),
				_ = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, e.subreddit.isNSFW && r.a.createElement(O, null)), r.a.createElement(C, {
					className: e.className
				}, e.description ? r.a.createElement(d.a, {
					icon: e.icon,
					text: e.description
				}) : e.icon, r.a.createElement("span", {
					className: e.textClassName
				}, e.text)), e.subreddit.isQuarantined && r.a.createElement(j, null)),
				T = Object(i.b)(y);
			t.a = T(e => {
				let {
					className: t,
					iconClassName: n,
					restrictions: s = f.e.Post,
					textClassName: i,
					subreddit: o
				} = e;
				switch (o.type) {
					case g.c.Restricted:
						return r.a.createElement(_, {
							className: t,
							icon: r.a.createElement(m.a, {
								className: Object(c.a)(E.a.restrictedIcon, n)
							}),
							text: Object(l.c)("Restricted"),
							textClassName: i,
							description: Object(f.g)(s),
							subreddit: o
						});
					case g.c.Private:
						return r.a.createElement(_, {
							className: t,
							icon: r.a.createElement(p.a, {
								className: Object(c.a)(E.a.privateIcon, n)
							}),
							text: Object(l.c)("Private"),
							textClassName: i,
							description: Object(l.c)("Only approved users can view and submit to this community"),
							subreddit: o
						});
					case g.c.EmployeesOnly:
						return r.a.createElement(_, {
							className: t,
							icon: r.a.createElement(u.a, {
								className: Object(c.a)(E.a.employeesIcon, n)
							}),
							text: o.allowContractors ? Object(l.c)("Employees & Contractors") : Object(l.c)("Employees Only"),
							textClassName: i,
							subreddit: o
						});
					default:
						return r.a.createElement(r.a.Fragment, null, o.isQuarantined && r.a.createElement(j, null), o.isNSFW && r.a.createElement(O, null))
				}
			})
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				p = n("./src/reddit/i18n/utils.ts"),
				b = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/components/ContributorRequestFlow/index.m.less"),
				f = n.n(g);
			const x = Object(o.c)({
				restrictions: h.o
			});
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						this.props.sendEvent(Object(m.a)(this.props.eventSource)), this.props.openContributorRequestModal()
					}
				}
				render() {
					return r.a.createElement(u.f, {
						className: Object(a.a)(this.props.smallButton ? null : f.a.RequestButton, this.props.className),
						onClick: this.onRequest
					}, this.props.eventSource === b.b.Comment ? Object(p.c)("Request to comment") : Object(p.c)("Request to post"))
				}
			}
			t.a = Object(i.b)(x, e => ({
				openContributorRequestModal: () => e(Object(c.i)(l.a.CONTRIBUTOR_REQUEST))
			}))(Object(d.b)(v))
		},
		"./src/reddit/components/ContributorRequestFlow/index.m.less": function(e, t, n) {
			e.exports = {
				RequestButton: "_33axOHPa8DzNnTmwzen-wO",
				requestButton: "_33axOHPa8DzNnTmwzen-wO"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				SecondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				secondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/overlay/index.ts"),
				m = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				p = n("./src/reddit/i18n/components.tsx"),
				b = n("./src/reddit/i18n/utils.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(g),
				x = n("./src/lib/lessComponent.tsx");
			const v = "create-community-button",
				E = x.a.wrapped(l.i, "SecondaryButton", f.a),
				C = x.a.wrapped(c.c, "StyledTooltip", f.a),
				y = Object(o.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.Z)(e),
					userIsSuspended: h.L
				});
			t.a = Object(i.b)(y, (e, t) => {
				let {
					eventSource: n
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(m.b)(n)), e(Object(u.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(a.f)({
						tooltipId: v
					})),
					onHideTooltip: () => e(Object(a.i)())
				}
			})(Object(d.b)(e => {
				let {
					className: t,
					eventSource: n,
					onShowTooltip: s,
					onHideTooltip: i,
					openCommunityCreation: o,
					sendEvent: a,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: d
				} = e;
				return r.a.createElement(E, {
					className: t,
					disabled: d || c,
					onClick: () => o(a),
					onMouseEnter: s,
					onMouseLeave: i,
					id: v
				}, r.a.createElement(p.c, null, "Create Community"), c ? r.a.createElement(C, {
					caretOnTop: !0,
					tooltipId: v,
					text: Object(b.c)("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.")
				}) : d ? r.a.createElement(C, {
					caretOnTop: !0,
					tooltipId: v,
					text: Object(b.c)("Accounts banned from the site can not create communities until the ban is lifted.")
				}) : null)
			}))
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
				pencil: "_42Nh7O6pFcqnA6OZd3bOK",
				tooltip: "voBVX1iPkvafjXv9Ymq9e"
			}
		},
		"./src/reddit/components/IdCard/Placeholder.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/IdCard/placeholder.m.less"),
				a = n.n(o);
			t.a = r.a.memo(e => r.a.createElement("div", {
				className: Object(i.a)(a.a.container)
			}, r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.banner)
			}), r.a.createElement("div", {
				className: a.a.title
			}, r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.icon)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.name)
			})), r.a.createElement("div", {
				className: a.a.counts
			}, r.a.createElement("div", {
				className: a.a.side
			}, r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.count)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.text)
			})), r.a.createElement("div", {
				className: a.a.side
			}, r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.count)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.text)
			}))), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.desc, a.a.one)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.desc, a.a.two)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.desc, a.a.three)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.desc, a.a.four)
			}), r.a.createElement("div", {
				className: Object(i.a)(a.a.shimmer, a.a.subscribe)
			})))
		},
		"./src/reddit/components/IdCard/Title.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
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
					className: Object(o.a)(l.a.Title, e.className)
				}, t && g ? r.a.createElement(c.a, {
					className: s ? l.a.largeSubredditIcon : l.a.subredditIcon,
					key: p.url,
					iconUrl: p.url,
					primaryColor: h,
					subreddit: g,
					inTopBar: !1
				}) : r.a.createElement(a.b, {
					className: s ? l.a.largeSubredditIcon : l.a.subredditIcon,
					key: p.url,
					iconUrl: p.url,
					primaryColor: h
				}), r.a.createElement("div", {
					className: l.a.titleTextContainer
				}, d ? r.a.createElement(i.a, u({
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
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
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
				E = n("./src/reddit/actions/multireddit/index.ts"),
				C = n("./src/reddit/actions/subscription/index.ts"),
				y = n("./src/reddit/components/CategoryTagList/index.tsx"),
				O = n("./src/higherOrderComponents/makeAsync.tsx"),
				j = n("./src/lib/loadWithRetries/index.ts"),
				_ = Object(O.a)({
					getComponent: () => Object(j.a)(() => Promise.all([n.e("AdminCommunityTopics~SubredditInlineEditing"), n.e("AdminCommunityTopics")]).then(n.bind(null, "./src/reddit/components/CommunityTopics/AdminCommunityTopics/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				T = n("./src/reddit/components/CommunityType/index.tsx"),
				w = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx"),
				N = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				S = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/reddit/actions/login.ts")),
				I = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/helpers/getSubredditUrl/index.ts"),
				B = n("./src/reddit/i18n/utils.ts"),
				P = n("./src/reddit/selectors/telemetry.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/components/TrackingHelper/index.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var R = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const D = Object(u.c)({
				isLoggedIn: F.G
			});
			var H = Object(o.b)(D, e => ({
				openLoginModal: () => {
					e(Object(v.k)({
						actionSource: v.a.Post
					})), e(Object(S.f)())
				}
			}))(Object(L.b)(e => {
				var {
					isContributorRequestPending: t,
					isLoggedIn: n,
					listingName: s,
					openLoginModal: r,
					sendEvent: o,
					subreddit: a
				} = e, c = R(e, ["isContributorRequestPending", "isLoggedIn", "listingName", "openLoginModal", "sendEvent", "subreddit"]);
				const d = "".concat(Object(k.a)(a) || "/", "submit");
				return i.a.createElement(I.h, M({}, c, {
					onClick: e => {
						o(e => ({
							action: "click",
							noun: "create_post",
							source: "id_card",
							screen: Object(P.screen)(e),
							subreddit: Object(P.subreddit)(e),
							actionInfo: Object(P.actionInfo)(e)
						})), n || (r(), e.preventDefault())
					},
					to: d
				}), t ? Object(B.c)("Draft post") : Object(B.c)("Create post"))
			}));
			const A = Object(O.a)({
				getComponent: () => Object(j.a)(() => n.e("CreatePollButton").then(n.bind(null, "./src/reddit/components/IdCard/CreatePollButton/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var z = n("./node_modules/react-autosize-textarea/lib/index.js"),
				U = n.n(z),
				W = n("./src/reddit/actions/subredditSettings.ts"),
				q = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				V = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				J = n("./src/reddit/components/ContentTooltip/index.tsx"),
				Q = n("./src/lib/fastdom/index.ts"),
				G = n("./src/lib/lessComponent.tsx"),
				K = n("./src/reddit/i18n/components.tsx"),
				X = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				Z = n.n(X);
			const Y = G.a.div("DescriptionContainer", Z.a);
			class $ extends i.a.Component {
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
					this.state.shouldTruncateDescription && Q.a.read(() => {
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
					} = this.state, o = i.a.createElement(K.c, null, n && "Welcome to r/".concat(n.name));
					return i.a.createElement(Y, {
						className: Object(m.a)(Z.a.descriptionContainer, r && Z.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef
					}, i.a.createElement("div", {
						className: Z.a.description,
						ref: this.setTextRef
					}, t || o, e), r && s && i.a.createElement("div", {
						className: Z.a.showMore
					}, i.a.createElement(K.c, null, "..."), i.a.createElement(I.n, {
						className: Z.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, i.a.createElement(K.c, null, "MORE"))))
				}
			}
			var ee = $,
				te = n("./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx"),
				ne = n("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				se = n("./src/reddit/constants/tooltips.ts"),
				re = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				ie = n("./src/reddit/helpers/localStorage/index.ts"),
				oe = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				ae = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				ce = n("./src/reddit/selectors/activeModalId.ts"),
				de = n("./src/reddit/selectors/subreddit.ts");
			const le = 6,
				ue = Object(u.c)({
					apiPending: de.Q,
					unsavedChangesModalIsOpen: Object(ce.b)(ne.a)
				});
			class me extends i.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.containerRef = i.a.createRef(), this.isSaving = !1, this.setTextAreaRef = e => {
						this.textAreaRef = e
					}, this.handleOnFocus = e => {
						if (e.preventDefault(), e.stopPropagation(), !this.state.editing) {
							const t = e.target !== this.textAreaRef ? () => this.focusTextArea() : void 0;
							this.setState({
								editing: !0
							}, t), this.props.sendEvent(oe.a)
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
						this.props.sendEvent(Object(oe.d)(e, t))
					}, this.state = {
						description: e.description || "",
						editing: !1,
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					this.setState({
						tooltipDismissed: Object(ie.l)(this.props.subreddit.id)
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
					const e = this.props.apiPending ? i.a.createElement(re.a, {
						className: Z.a.loadingIcon,
						sizePx: le
					}) : void 0;
					return this.state.description ? i.a.createElement(i.a.Fragment, null, i.a.createElement(ee, {
						description: this.state.description,
						shouldTruncateDescription: this.props.shouldTruncateDescription,
						subreddit: this.props.subreddit
					}, i.a.createElement(ae.a, {
						className: Z.a.pencil
					}), e)) : i.a.createElement("div", {
						className: Z.a.emptyDescription
					}, i.a.createElement(K.c, null, "Add description"), e)
				}
				renderTextArea() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(U.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: Object(B.c)("Tell us about your community"),
						className: Object(m.a)(Z.a.editableDescription, Z.a.activeEditableDescription),
						onChange: e => this.setState({
							description: e.currentTarget.value
						}),
						maxLength: V.c,
						value: this.state.description
					}), i.a.createElement("div", {
						className: Z.a.editableDescriptionControlRow
					}, i.a.createElement(q.a, {
						className: Z.a.characterCountdown,
						maxChars: V.c,
						text: this.state.description
					}), i.a.createElement("span", {
						className: Z.a.cancel,
						onClick: this.onCancel
					}, Object(B.c)("Cancel")), i.a.createElement("span", {
						className: Z.a.save,
						onClick: this.onSave
					}, Object(B.c)("Save"))))
				}
				hasPendingChanges() {
					return this.state.description !== this.props.description
				}
				getContainerClassNames() {
					if (!this.state.editing && this.state.description) return [Z.a.defaultEditableDescriptionContainer];
					const e = [Z.a.editableDescriptionContainer];
					return this.state.editing && e.push(Z.a.activeEditableDescriptionContainer), e
				}
				renderTooltip() {
					return i.a.createElement(J.a, {
						className: Z.a.tooltip,
						tooltipId: se.a,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, i.a.createElement(te.a, {
						includeIcon: !1,
						subredditId: this.props.subreddit.id
					}))
				}
				render() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						id: this.tooltipEnabled() ? se.a : void 0,
						ref: this.containerRef,
						className: Object(m.a)(...this.getContainerClassNames()),
						tabIndex: 0,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur
					}, this.state.editing ? this.renderTextArea() : this.renderInactiveDescription(), this.props.unsavedChangesModalIsOpen && i.a.createElement(ne.b, {
						withOverlay: !0,
						ignoreDefaultFocus: !0,
						onCancel: this.focusTextArea,
						onDiscard: this.onCancel,
						onSave: this.onSave
					})), this.tooltipEnabled() && this.renderTooltip())
				}
			}
			var pe = Object(o.b)(ue, (e, t) => {
					let {
						subreddit: n
					} = t;
					return {
						updateSubredditSettings: t => e(Object(W.h)(n.id, t, !0)),
						openUnsavedChangesModal: () => {
							e(Object(x.i)()), e(Object(v.h)(ne.a))
						},
						onShowTooltip: () => {
							e(Object(x.f)({
								tooltipId: se.a
							}))
						}
					}
				})(Object(L.b)(me)),
				be = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				he = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx"),
				ge = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less"),
				fe = n.n(ge);
			var xe = Object(O.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => i.a.createElement("div", {
						className: fe.a.container
					}, i.a.createElement(he.a, null)),
					getComponent: () => Object(j.a)(() => Promise.all([n.e("AdminCommunityTopics~SubredditInlineEditing"), n.e("SubredditInlineEditing")]).then(n.bind(null, "./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx"))).then(e => e.default)
				}),
				ve = n("./src/reddit/components/OverflowMenu/index.tsx"),
				Ee = n("./src/reddit/components/SubscribeButton/index.tsx"),
				Ce = n("./src/reddit/components/Widgets/Base/index.tsx"),
				ye = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Oe = n("./src/reddit/constants/listings.ts"),
				je = n("./src/reddit/constants/modals.ts"),
				_e = n("./src/reddit/constants/page.ts"),
				Te = n("./src/reddit/constants/posts.ts"),
				we = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Ne = n("./src/reddit/controls/ImageInput/index.tsx"),
				Se = n("./src/reddit/featureFlags/index.ts"),
				Ie = n("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				ke = n("./node_modules/lodash/memoize.js"),
				Be = n.n(ke),
				Pe = n("./src/reddit/constants/categories.tsx"),
				Fe = n("./src/config.ts");
			const Le = Array.from({
					length: 20
				}).map((e, t) => "".concat(Fe.a.assetPath, "/img/snoovatars/snoovatar_").concat(t + 1, ".png")),
				Me = [];
			var Re = Be()((function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
					if (!e || !t) return Me;
					const n = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
					return Array.from({
						length: t
					}).map((e, t) => ({
						color: Pe.a[(n + t) % Pe.a.length],
						image: Le[(n + t) % Le.length]
					}))
				}), (function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
					return "".concat(e, "_").concat(t)
				})),
				De = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				He = n("./src/reddit/helpers/trackers/lightbox.ts"),
				Ae = n("./src/reddit/helpers/trackers/modHub.ts"),
				ze = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Ue = n("./src/reddit/icons/fonts/helpers.tsx"),
				We = n("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				qe = n.n(We);
			var Ve = e => i.a.createElement("i", {
					className: Object(m.a)(qe.a.ModSettings, Object(Ue.b)("modSettings"), e.className)
				}),
				Je = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				Qe = n("./src/reddit/icons/svgs/Help/index.tsx"),
				Ge = n("./src/reddit/models/ApiRequestState/index.ts"),
				Ke = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				Xe = n("./src/reddit/selectors/category.ts"),
				Ze = n("./src/reddit/selectors/experiments/categories.ts"),
				Ye = n("./src/reddit/constants/experiments.ts"),
				$e = n("./src/reddit/helpers/chooseVariant/index.ts");
			var et = n("./src/reddit/selectors/moderatorPermissions.ts"),
				tt = n("./src/reddit/selectors/structuredStyles.ts"),
				nt = n("./src/reddit/selectors/subscriptions.ts"),
				st = n("./src/reddit/selectors/widgets.ts"),
				rt = n("./src/reddit/components/IdCard/Banner.tsx"),
				it = n("./src/reddit/actions/preferences.ts"),
				ot = n("./src/app/strings/index.ts"),
				at = n("./src/reddit/actions/authorFlair.ts"),
				ct = n("./src/reddit/actions/badge.ts"),
				dt = n("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				lt = n("./src/reddit/components/Flair/index.tsx"),
				ut = n("./src/reddit/featureFlags/component.tsx"),
				mt = n("./src/reddit/models/User/index.ts"),
				pt = n("./src/reddit/selectors/userFlair.ts"),
				bt = n("./src/reddit/components/SidebarFlairSettings/index.m.less"),
				ht = n.n(bt);
			const gt = G.a.div("FlairSettingsContainer", ht.a),
				ft = G.a.div("FlairPreview", ht.a),
				xt = G.a.wrapped(e => i.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 14 14",
					xmlns: "http://www.w3.org/2000/svg",
					version: "1.1"
				}, i.a.createElement("title", {
					id: "".concat(e.title, "-title")
				}, e.title), i.a.createElement("g", null, i.a.createElement("path", {
					fill: "inherit",
					d: "M8.1168,3.0832 L10.9168,5.8832 C11.0728,6.0392 11.0728,6.2928 10.9168,6.4488 L4.0824,13.2832 C4.0072,13.3584 3.9056,13.4 3.8,13.4 L1,13.4 C0.7784,13.4 0.6,13.2216 0.6,13 L0.6,10.2 C0.6,10.0944 0.6416,9.9928 0.7168,9.9176 L7.5512,3.0832 C7.7072,2.9272 7.9608,2.9272 8.1168,3.0832 Z M13.5168,2.152 C13.9848,2.62 13.9848,3.3808 13.5168,3.8488 L12.048,5.3176 C11.9696,5.396 11.8672,5.4352 11.7656,5.4352 C11.6632,5.4352 11.5608,5.396 11.4824,5.3176 L8.6824,2.5176 C8.5264,2.3616 8.5264,2.108 8.6824,1.952 L10.1512,0.4832 C10.6192,0.0152 11.38,0.0152 11.848,0.4832 L13.5168,2.152 Z"
				}))), "EditPencil", ht.a),
				vt = G.a.div("PreviewTitle", ht.a),
				Et = G.a.wrapped(lt.b, "FlairComponent", ht.a),
				Ct = G.a.wrapped(I.n, "TertiaryButton", ht.a),
				yt = G.a.wrapped(Ct, "IconButton", ht.a),
				Ot = G.a.span("Username", ht.a),
				jt = Object(ut.a)("spBadges", dt.a),
				_t = Object(u.c)({
					badgesEnabled: Se.d.spBadges,
					currentUser: F.i,
					language: F.P,
					userFlairData: pt.c,
					userHasBadge: (e, t) => {
						const n = e.user.account;
						if (n) {
							return !!((e.users.appliedBadges[n.id] || {})[t.subredditId] || []).length
						}
						return !1
					}
				}),
				Tt = Object(o.b)(_t, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						onToggleModal: t => e(Object(at.b)({
							username: t,
							subredditId: n
						})),
						onToggleBadgeModal: () => e(Object(ct.j)())
					}
				}),
				wt = e => i.a.createElement(yt, {
					onClick: e.onClick
				}, i.a.createElement(xt, null)),
				Nt = e => i.a.createElement(Ct, {
					onClick: e.onClick
				}, e.userFlairData.displaySettings.isEnabled ? e.userFlairData.applied || e.userHasBadge ? Object(ot.a)(e.language, "flair.editUserFlairAndBadge") : Object(ot.a)(e.language, "flair.addUserFlairAndBadge") : e.userHasBadge ? Object(ot.a)(e.language, "flair.editUserBadge") : Object(ot.a)(e.language, "flair.addUserBadge"));
			class St extends i.a.Component {
				constructor() {
					super(...arguments), this.onFlairLinkClick = () => {
						const e = this.props.currentUser ? Object(mt.f)(this.props.currentUser) : null;
						this.props.onToggleModal(e), this.props.sendEvent(Object(He.a)("user_flair_picker"))
					}
				}
				render() {
					const {
						badgesEnabled: e,
						currentUser: t,
						language: n,
						onToggleBadgeModal: s,
						subredditId: r,
						userFlairData: o,
						userHasBadge: a
					} = this.props;
					return t && o ? i.a.createElement(gt, null, i.a.createElement(vt, null, i.a.createElement(K.c, null, "user flair preview"), i.a.createElement(wt, {
						onClick: this.onFlairLinkClick
					})), i.a.createElement(ft, null, a && i.a.createElement(jt, {
						className: ht.a.badge,
						subredditId: r,
						uniqueIdentifier: r
					}), i.a.createElement(Ot, null, "u/".concat(t.displayText)), o.applied && o.displaySettings.isUserEnabled && i.a.createElement(Et, {
						flair: o.applied,
						forceSmallEmojis: !0
					})), e ? i.a.createElement(Nt, {
						userFlairData: o,
						userHasBadge: a,
						language: n,
						onClick: s
					}) : null) : null
				}
			}
			var It = Tt(Object(L.b)(St)),
				kt = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Bt = n("./src/reddit/helpers/trackers/idCard.ts"),
				Pt = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Ft = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				Lt = n("./src/reddit/icons/svgs/Show/index.tsx"),
				Mt = e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("path", {
					d: "M4.59 8l-2.3 2.29A1 1 0 0 0 3.7 11.7L6 9.41zM6 11a4 4 0 0 0 5.34 3.75l-5.1-5.1A4 4 0 0 0 6 11zM18.71 17.29l-5-5A3.87 3.87 0 0 0 14 11a4 4 0 0 0-.68-2.22c.07.06.15.11.21.17l2.76 2.76a1 1 0 0 0 1.41-1.41l-2.75-2.76A7 7 0 0 0 7.42 6L2.71 1.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.41-1.41z"
				})),
				Rt = n("./src/reddit/components/IdCard/CommunityOptions/index.m.less"),
				Dt = n.n(Rt);
			const Ht = G.a.wrapped(I.n, "TertiaryButton", Dt.a),
				At = Object(u.c)({
					shouldShowFlairPicker: pt.b,
					stylesDisabledForSubreddit: F.ab,
					stylesDisabledGlobally: F.bb
				});
			class zt extends i.a.Component {
				constructor(e) {
					super(e), this.onContainerClick = e => {
						e.stopPropagation()
					}, this.onExpandButtonClick = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.onToggleStylesSwitch = () => {
						const e = !!this.props.stylesDisabledForSubreddit;
						this.props.sendEvent(Object(Bt.c)(e)), this.props.updateSubredditPrefs(this.props.subredditId, {
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
						stylesDisabledForSubreddit: s,
						stylesDisabledGlobally: r,
						subredditId: o
					} = this.props, {
						isOpen: a
					} = this.state, c = a ? i.a.createElement("div", {
						className: Dt.a.content
					}, i.a.createElement("div", {
						className: Object(m.a)(Dt.a.stylesToggle, {
							[Dt.a.disabled]: r
						}),
						title: r ? Object(B.c)("This is unavailable because themes have been disabled globally in your user settings") : void 0
					}, i.a.createElement("label", {
						className: Dt.a.stylesToggleLabel
					}, s ? i.a.createElement(Mt, null) : i.a.createElement(Lt.a, null), i.a.createElement(K.c, null, "Community theme")), i.a.createElement(kt.a, {
						disabled: r,
						on: !s,
						onToggle: this.onToggleStylesSwitch
					})), n && !e && i.a.createElement(It, {
						subredditId: o
					})) : null;
					return i.a.createElement("div", {
						className: Dt.a.container,
						onClick: this.onContainerClick
					}, i.a.createElement(Ht, {
						className: Object(m.a)(Dt.a.expandButton, {
							[Dt.a.redditStyle]: t
						}),
						onClick: this.onExpandButtonClick
					}, i.a.createElement(K.c, null, "Community options"), a ? i.a.createElement(Ft.a, null) : i.a.createElement(Pt.a, null)), c)
				}
			}
			var Ut = Object(o.b)(At, e => ({
					updateSubredditPrefs: (t, n) => {
						e(Object(it.H)(t, n))
					}
				}))(zt),
				Wt = n("./src/reddit/components/IdCard/helpers.ts"),
				qt = n("./src/reddit/components/IdCard/Placeholder.tsx"),
				Vt = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Jt = n("./src/reddit/components/IdCard/Title.tsx"),
				Qt = n("./src/reddit/components/IdCard/index.m.less"),
				Gt = n.n(Qt);
			const Kt = "IDCARD_OVERFLOW_DROPDOWN_ID",
				Xt = Object(o.b)(() => Object(u.c)({
					postCategories: (e, t) => Object(Xe.m)(e, t.postId),
					favoriteSubredditsIds: nt.a,
					idCardWidget: (e, t) => Object(st.d)(e, {
						subredditName: t.listingName
					}),
					isContributorRequestPending: e => Object(de.h)(e, Ke.e.Post),
					isLoggedIn: F.G,
					language: F.P,
					moderatorPermissions: (e, t) => {
						const n = Object(de.D)(e, t.listingName);
						if (n) return Object(et.j)(e, {
							subredditId: n
						})
					},
					isInCategoriesExperiment: Ze.a,
					showContributorRequestFlow: e => Object(de.q)(e, Ke.e.Post),
					showCreatePollButton: e => (e => Object($e.c)(e, {
						experimentEligibilitySelector: $e.a,
						experimentName: Ye.h
					}) === Ye.l.Treatment)(e) && !Object(ie.f)(),
					subreddit: (e, t) => Object(de.y)(e, {
						subredditName: t.listingName
					}),
					subredditAboutInfo: (e, t) => Object(de.v)(e, {
						subredditName: t.listingName
					}),
					subredditCoins: (e, t) => {
						let {
							listingName: n
						} = t;
						return Object(de.A)(e, {
							subredditName: n
						})
					},
					subredditIcon: (e, t) => Object(tt.q)(e, {
						subredditName: t.listingName
					}),
					adminCommunityTopicsEnabled: Se.d.adminCommunityTopics,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							listingName: n
						} = t;
						const s = Object(de.y)(e, {
							subredditName: n
						});
						return !!s && Object(l.a)(e, {
							subredditId: s.id
						})
					}
				}), (e, t) => ({
					addToMultiClicked: () => {
						e(Object(E.g)(!0, !0)), e(Object(v.h)(je.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					dispatchPush: t => e(Object(c.b)(t)),
					toggleFavorite: t => e(Object(C.c)({
						id: t,
						type: Te.a.SUBREDDIT
					})),
					toggleTooltip: t => e(Object(x.h)({
						tooltipId: t
					})),
					onCommunityIconSelected: (n, s) => {
						e(Object(d.b)(t.listingName, n, s))
					}
				}), (e, t, n) => Object.assign({}, e, t, n, {
					isEligibleForCommunityAwards: Object(Ie.a)(e.subreddit),
					isFavoriteSubreddit: !!e.subreddit && e.favoriteSubredditsIds.indexOf(e.subreddit.id) > -1,
					onContainerClick: () => n.isOverlay && t.dispatchPush(e.subreddit.url),
					onToggleFavoriteClick: () => t.toggleFavorite(e.subreddit.id)
				}));
			class Zt extends i.a.Component {
				constructor() {
					super(...arguments), this.iconFilePickerRef = null, this.setIconFilePickerRef = e => this.iconFilePickerRef = e, this.onClickModTools = () => this.props.sendEvent(Object(Ae.a)()), this.handleVisitCommunityClick = () => this.props.sendEvent(Object(He.a)("visit")), this.getListingNameToUse = () => {
						const {
							isLoggedIn: e,
							listingName: t
						} = this.props;
						return e || t !== _e.b ? t : Oe.b.Popular
					}, this.onIconImageSelected = e => {
						this.props.onCommunityIconSelected(e, Object(Ge.b)())
					}, this.openIconFilePicker = () => {
						this.iconFilePickerRef && this.iconFilePickerRef.click(), this.props.sendEvent(oe.b)
					}, this.renderCreatePostButtons = () => {
						const {
							isContributorRequestPending: e,
							listingName: t,
							showCreatePollButton: n,
							showContributorRequestFlow: s,
							subreddit: r
						} = this.props, o = Object(h.a)(this.getListingNameToUse());
						return !o && s ? i.a.createElement(w.a, {
							eventSource: Ke.b.IdCard
						}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(H, {
							className: Gt.a.CreatePostButton,
							isContributorRequestPending: e,
							listingName: t,
							subreddit: r
						}), !e && !o && n && i.a.createElement(A, {
							listingName: t
						}))
					}, this.renderButtons = () => {
						const {
							isCommentsPage: e,
							isLoggedIn: t,
							isMinimal: n,
							isOverlay: r,
							isSubmissionPage: o,
							subreddit: a,
							subredditAboutInfo: c
						} = this.props, d = this.getListingNameToUse(), l = Object(h.a)(d), u = n && a && !r, m = e && !l && !u, p = t && !u && !o && !r && !(c && c.userIsBanned);
						return i.a.createElement("div", {
							className: Gt.a.Buttons
						}, m && i.a.createElement(Ee.a, {
							className: Gt.a.SubscribeButton,
							getEventFactory: e => Object(He.a)(e ? "unsubscribe" : "subscribe"),
							id: "subscribe-button-".concat(a.id),
							identifier: {
								name: a.name,
								type: "subreddit"
							},
							onClick: e => e.stopPropagation()
						}), p && this.renderCreatePostButtons(), t && !o && !r && !a && i.a.createElement(N.a, {
							className: Gt.a.CreateCommunityButton,
							eventSource: "id_card"
						}), u && i.a.createElement(I.k, {
							className: Gt.a.VisitCommunityButton,
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
						isEligibleForCommunityAwards: o,
						isInCategoriesExperiment: c,
						isLoggedIn: d,
						isMinimal: l,
						isOverlay: u,
						isSubmissionPage: p,
						language: b,
						moderatorPermissions: g,
						onContainerClick: f,
						postCategories: x,
						postId: v,
						subreddit: E,
						subredditAboutInfo: C,
						subredditCoins: O,
						subredditIcon: j,
						toggleTooltip: w,
						subredditInlineEditingEnabled: N
					} = this.props, S = this.getListingNameToUse(), I = Object(h.a)(S);
					if (!I && !n) return i.a.createElement(qt.a, null);
					const {
						bannerBackgroundImage: k,
						currentlyViewingCount: P,
						currentlyViewingText: F,
						description: L,
						snooBackground: M,
						subscribersCount: R,
						subscribersText: D,
						titleText: H,
						url: A
					} = Object(Wt.a)({
						language: b,
						listingName: S,
						subreddit: E,
						idCardWidget: n
					}), z = I || u || p, U = !I && E.id ? E.id : "", W = C && C.created, q = s.fbt._("Cake Day", null, {
						hk: "gZ29b"
					}), V = "IdCard--Subscribers--".concat(u, "--").concat(U), J = "IdCard--CurrentlyViewing--".concat(u, "--").concat(U), Q = "IdCard--CakeDay--".concat(u, "--").concat(U), G = "IdCard--CoinCoint--".concat(u, "--").concat(U), K = l && !u, X = !I && !u && N && !p, Z = X ? i.a.createElement(pe, {
						description: L,
						shouldTruncateDescription: !1,
						isCommentsPage: !!r,
						subreddit: E
					}) : i.a.createElement(ee, {
						description: L,
						shouldTruncateDescription: !1,
						subreddit: E
					});
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(ye.a, {
						className: Object(m.a)(Gt.a.ThemedWidget, t),
						onClick: u ? f : void 0,
						headerButton: i.a.createElement("div", {
							className: Gt.a.headerButtonsContainer
						}, !z && E && g && i.a.createElement(a.a, {
							className: Gt.a.ModToolsLink,
							to: g.posts ? "".concat(E.url, "about/modqueue") : "".concat(E.url, "about/"),
							onClick: this.onClickModTools
						}, i.a.createElement(Ve, {
							className: Gt.a.ModSettings
						}), s.fbt._("Mod tools", null, {
							hk: "3tJVME"
						})), d && E && i.a.createElement(ve.b, {
							className: Gt.a.overflowButton,
							dropdownId: Kt,
							targetPosition: ["right", "bottom"],
							tooltipPosition: ["right", "top"]
						}, !E.isQuarantined && i.a.createElement(we.b, {
							className: Gt.a.dropdownRow,
							displayText: Object(B.c)("Add to Custom Feed"),
							onClick: e
						}), i.a.createElement(we.b, {
							className: Gt.a.dropdownRow,
							displayText: this.props.isFavoriteSubreddit ? Object(B.c)("Remove from Favorites") : Object(B.c)("Add to Favorites"),
							onClick: this.props.onToggleFavoriteClick
						}))),
						redditStyle: I || p,
						title: z ? void 0 : s.fbt._("About Community", null, {
							hk: "31Lg8f"
						}),
						titleClassName: I ? void 0 : Gt.a.subredditTitle
					}, z && i.a.createElement(rt.a, {
						bannerBackgroundImage: k
					}), I || p || r ? I ? Object(Vt.a)({
						titleText: H,
						snooBackground: M
					}) : i.a.createElement(Jt.a, {
						isTargetBlank: p,
						linkUrl: I ? void 0 : A,
						subredditIcon: j,
						canEditIcon: X,
						subreddit: E,
						titleText: H,
						onOpenFilePicker: this.openIconFilePicker
					}) : null, Z, !I && !K && $t(b, R, D, V, P, F, J, W, q, Q, w), !I && i.a.createElement("div", {
						className: Gt.a.CommunityTypeContainer
					}, i.a.createElement(T.a, {
						className: Gt.a.communityType,
						iconClassName: Gt.a.communityTypeIcon,
						subreddit: E,
						textClassName: Gt.a.communityTypeText
					})), o && g && void 0 !== O && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Gt.a.HorizontalLine
					}), i.a.createElement("div", {
						className: Gt.a.communityCoinCount
					}, i.a.createElement(ze.a, {
						className: Gt.a.coinIcon
					}), s.fbt._("{number-community-coins} Coins", [s.fbt._param("number-community-coins", O.toLocaleString())], {
						hk: "3FSFdY"
					}), i.a.createElement("span", {
						id: G,
						onMouseLeave: () => w(G),
						onMouseEnter: () => w(G)
					}, i.a.createElement(Qe.a, {
						className: Gt.a.helpIcon
					})), i.a.createElement(be.c, {
						tooltipId: G
					}, i.a.createElement("p", {
						className: Gt.a.coinsTooltipContent
					}, s.fbt._("The community gets Coins from Awards given by members", null, {
						hk: "3j3NSH"
					}))))), X && i.a.createElement(xe, {
						context: De.a.idCard,
						subredditId: U
					}), !I && K && Yt(E, R, P), this.renderButtons(), c && x && v && (r || u) && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Gt.a.HorizontalLine
					}), i.a.createElement("div", {
						className: Gt.a.CategoryContainer
					}, i.a.createElement(Ce.a, {
						className: Gt.a.widgetHeader
					}, s.fbt._("Discover more in:", null, {
						hk: "1o2gtg"
					})), i.a.createElement(y.a, {
						postId: v,
						inLightboxHeader: !0,
						postCategories: x
					}))), !I && d && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ut, {
						isOverlay: u,
						isSubmissionPage: p,
						sendEvent: this.props.sendEvent,
						subredditId: E.id
					})), X && i.a.createElement(Ne.a, {
						key: "icon-file-picker",
						className: Gt.a.iconFilePicker,
						inputRef: this.setIconFilePickerRef,
						multiple: !1,
						onChange: this.onIconImageSelected
					}), !I && d && this.props.adminCommunityTopicsEnabled && i.a.createElement(_, {
						key: "admin-community-topics",
						subredditId: U
					})))
				}
			}
			const Yt = (e, t, n) => {
					const r = Re(e.name),
						o = t > 1 ? "".concat("member", "s") : "member";
					return i.a.createElement("span", {
						className: Gt.a.metaTextContainer
					}, r.map((e, t) => {
						let {
							color: n,
							image: s
						} = e;
						return i.a.createElement("img", {
							alt: 0 === t ? Object(B.c)("Members icons") : "",
							className: Gt.a.memberIcon,
							key: s,
							src: s,
							style: {
								backgroundColor: n
							}
						})
					}), i.a.createElement("span", {
						className: Object(m.a)(Gt.a.CountMetaText, Gt.a.metaText)
					}, s.fbt._("{subscribersCount}{members}", [s.fbt._param("subscribersCount", Object(g.b)(t)), s.fbt._param("members", "".concat(o))], {
						hk: "1PszpE"
					})), i.a.createElement("span", {
						className: Object(m.a)(Gt.a.CountMetaText, Gt.a.metaText)
					}, s.fbt._("{viewingCount} online", [s.fbt._param("viewingCount", Object(g.b)(n))], {
						hk: "cxviW"
					})))
				},
				$t = (e, t, n, r, o, a, c, d, l, u, m) => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Gt.a.UserCounts
				}, i.a.createElement("div", {
					className: Gt.a.SubscriberCount,
					onMouseEnter: () => m(r),
					onMouseLeave: () => m(r)
				}, i.a.createElement("div", {
					className: Gt.a.Count
				}, Object(g.b)(t)), i.a.createElement("p", {
					className: Gt.a.UserType,
					id: r
				}, n), i.a.createElement(be.c, {
					caretOnTop: !0,
					text: "".concat(Object(g.b)(t, !0), " ").concat(n),
					tooltipId: r
				})), i.a.createElement("div", {
					className: Gt.a.Online,
					onMouseEnter: () => m(c),
					onMouseLeave: () => m(c)
				}, i.a.createElement("div", {
					className: Gt.a.Count
				}, Object(g.b)(o)), i.a.createElement("p", {
					className: Gt.a.UserType,
					id: c
				}, a), i.a.createElement(be.c, {
					caretOnTop: !0,
					text: "".concat(Object(g.b)(o, !0), " ").concat(a),
					tooltipId: c
				})), i.a.createElement("div", null)), d && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
					className: Gt.a.HorizontalLine
				}), i.a.createElement("div", {
					className: Gt.a.CakeDayContainer,
					onMouseEnter: () => m(u),
					onMouseLeave: () => m(u)
				}, i.a.createElement("div", {
					className: Gt.a.CakeDay,
					id: u
				}, i.a.createElement(Je.a, {
					className: Gt.a.cakeIcon,
					key: "cakeDay"
				}), s.fbt._("Created {cakeday}", [s.fbt._param("cakeday", Object(b.a)(d, !0, !0, !0))], {
					hk: "8Y46b"
				})), i.a.createElement(be.c, {
					caretOnTop: !0,
					text: Object(f.d)(e, d),
					tooltipId: u
				}))));
			t.default = Object(L.b)(Xt(Object(p.a)(Zt)))
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
				i = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.m.less"),
				o = n.n(i);
			t.a = () => r.a.createElement("div", null, r.a.createElement("div", {
				className: o.a.small
			}), r.a.createElement("div", {
				className: o.a.large
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
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
				return E
			})), n.d(t, "j", (function() {
				return C
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = n.n(r);
			const o = s.a.section("FormPage", i.a),
				a = s.a.h1("HomePageTitle", i.a),
				c = s.a.button("HomePageBreadcrumb", i.a),
				d = s.a.div("HomePageGroup", i.a),
				l = s.a.h1("FormPageTitle", i.a),
				u = s.a.div("FormPageSection", i.a),
				m = s.a.div("FormGroup", i.a),
				p = s.a.h2("FormGroupTitle", i.a),
				b = s.a.div("FormElement", i.a),
				h = s.a.div("FormGroupDescription", i.a),
				g = s.a.div("FormItem", i.a),
				f = s.a.h3("FormElementTitle", i.a),
				x = s.a.div("FormElementDescription", i.a),
				v = s.a.div("FormElementError", i.a),
				E = s.a.div("FormElementSubGroup", i.a),
				C = s.a.li("FormListItem", i.a)
		},
		"./src/reddit/components/SubredditUnsavedChangesModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/i18n/components.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const m = "subreddit-unsaved-changes-modal",
				p = Object(i.b)(null, e => ({
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
					return r.a.createElement(c.c, null, r.a.createElement(c.g, null, r.a.createElement(u.a, null, r.a.createElement(c.n, null, r.a.createElement(l.c, null, "Save changes before leaving?")), r.a.createElement(d.a, {
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
			t.b = Object(o.a)(p(b))
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
				return w
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/app/strings/index.ts"),
				o = n("./src/reddit/constants/elementClassNames.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/i18n/utils.ts"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				p = n.n(m),
				b = n("./src/lib/classNames/index.ts"),
				h = n("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const x = h.a.button("IconButton", p.a),
				v = h.a.wrapped(l.a, "SubscribeIcon", p.a),
				E = h.a.wrapped(d.a, "UnsubscribeIcon", p.a),
				C = h.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = f(e, ["border", "small"]);
					return r.a.createElement(x, s, r.a.createElement(v, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: n
						})
					}))
				}, "SubscribeIconButton", p.a),
				y = h.a.wrapped(e => {
					var {
						border: t,
						small: n
					} = e, s = f(e, ["border", "small"]);
					return t ? r.a.createElement(a.f, g({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: n
						})
					})) : r.a.createElement(a.n, g({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isSmall]: n
						})
					}))
				}, "SubscribeInternalButton", p.a),
				O = e => {
					var {
						icon: t
					} = e, n = f(e, ["icon"]);
					return t ? r.a.createElement(C, g({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: n.small
						})
					})) : r.a.createElement(y, g({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: n.small
						})
					}))
				},
				j = h.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: s,
						type: i
					} = e, a = f(e, ["border", "language", "small", "type"]);
					return r.a.createElement(x, a, r.a.createElement(E, {
						className: Object(b.a)(o.n, a.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				_ = h.a.wrapped(e => {
					var {
						border: t,
						language: n,
						small: s,
						type: i
					} = e, o = f(e, ["border", "language", "small", "type"]);
					const d = r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
							className: p.a.UnsubscribeButtonDefault
						}, "subreddit" === i ? Object(c.c)("Joined") : Object(c.c)("Following")), r.a.createElement("span", {
							className: p.a.UnsubscribeButtonHover
						}, "subreddit" === i ? Object(c.c)("Leave") : Object(c.c)("Unfollow"))),
						l = Object(b.a)(o.className, {
							[p.a.isSmall]: s
						});
					return t ? r.a.createElement(a.i, g({}, o, {
						className: l,
						children: d
					})) : r.a.createElement(a.n, g({}, o, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", p.a),
				T = e => {
					var {
						icon: t
					} = e, n = f(e, ["icon"]);
					return t ? r.a.createElement(j, g({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: n.small
						})
					})) : r.a.createElement(_, g({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isSmall]: n.small
						})
					}))
				};
			class w extends r.a.Component {
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
						language: o,
						small: a = !1
					} = this.props, c = {
						border: e,
						className: t,
						icon: n,
						onClick: this.onClick,
						small: a
					};
					return this.props.userIsSubscriber ? r.a.createElement(T, g({}, c, {
						language: o,
						type: this.props.identifier.type
					})) : r.a.createElement(O, g({}, c, {
						id: s
					}), this.props.children, Object(i.a)(o, "subscriptions.".concat(Object(u.a)({
						type: this.props.identifier.type
					}), ".subscribe")))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				let {
					type: t
				} = e;
				return "subreddit" === t ? "subredditActions" : "profileActions"
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.b)(i.a))
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
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
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
			const l = i.a.div("WidgetBackground", c.a),
				u = i.a.wrapped(e => {
					var {
						children: t
					} = e, n = d(e, ["children"]);
					return r.a.createElement("div", n, r.a.createElement(o.b, {
						type: o.a.Widget
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
				i = n("./src/reddit/actions/subscription/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				a = n("./src/reddit/selectors/user.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				language: a.P,
				userIsSubscriber: o.Z
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(i.d([n], !0)),
					onSubscriptionsRequested: () => e(i.e()),
					onUnsubscribe: () => e(i.d([n], !1))
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
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				a = n("./src/reddit/controls/IconTooltip/index.m.less"),
				c = n.n(a);
			const d = Object(i.a)(o.b),
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
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(a.a.loadingIcon, n, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(s, "px")
					}
				})
			}
		},
		"./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/Subreddit/index.ts");
			const r = new Set(["goins", "gold_testing", "inthesoulstone", "lounge", "lssgoldnormal", "maymodsguide1", "maymodsguide2", "megalounge", "pan2", "pan3", "venkman_bookclub", "whatssnoo"]),
				i = new Set([s.c.Private]),
				o = e => !(!e || !e.name) && (!!r.has(e.name.toLowerCase()) || !e.isNSFW && !e.isQuarantined && !i.has(e.type))
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
				i = n("./src/reddit/selectors/widgets.ts"),
				o = n("./src/telemetry/index.ts");
			const a = e => {
					Object(o.a)(Object.assign({}, r.defaults(e), {
						action: s.c.CLICK,
						noun: "multi_detail",
						source: "id_card"
					}))
				},
				c = (e, t, n) => {
					const {
						subreddit: a,
						profile: c
					} = Object(i.b)(e, t);
					Object(o.a)(Object.assign({}, r.defaults(e), {
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
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				i = e => t => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: e
				}, r(t)),
				o = () => e => Object.assign({
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
				return i
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => Object.assign({}, s.defaults(t), {
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: s.subreddit(t)
				}),
				i = e => t => Object.assign({}, s.defaults(t), {
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
				i = n("./src/reddit/constants/colors.ts"),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(o.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || i.a.gold
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
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function i(e) {
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				a = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(i.a)(e.className, a.a.admin, {
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function i(e) {
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
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = e => {
				return Object(i.D)(e) || s.i.Treatment1 === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.c
				})
			}
		}
	}
]);
//# sourceMappingURL=IdCard.ad0bc5524058c1fcc1cf.js.map