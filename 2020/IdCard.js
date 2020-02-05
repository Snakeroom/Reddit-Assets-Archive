// https://www.redditstatic.com/desktop2x/IdCard.a0076d470a7d1df29953.js
// Retrieved at 2/5/2020, 1:30:14 PM by Reddit Dataminer v1.0.0
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
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/i18n/utils.ts");
			const r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				o = (e, t) => t ? e.getUTCDate() : e.getDate(),
				a = (e, t, n) => {
					const o = t ? e.getUTCMonth() : e.getMonth(),
						a = n ? i : r;
					return Object(s.c)(a[o])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function d(e, t, n, s) {
				const r = new Date(1e3 * e),
					i = a(r, n, s),
					d = t ? o(r, n) + ", " : "";
				return "".concat(i, " ").concat(d).concat(c(r, n))
			}
		},
		"./src/lib/isSimpleClick/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				if (e && e.target && (e => {
						let t = e;
						for (; t && t !== window.document.body;) {
							if ("A" === t.nodeName) return !0;
							t = t.parentElement
						}
						return !1
					})(e.target)) {
					if (e.ctrlKey) return !1;
					if (e.altKey) return !1;
					if (e.metaKey) return !1;
					if (e.shiftKey) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return v
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/actions/subreddit/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/constants/blade.ts"),
				c = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				d = n("./src/reddit/i18n/utils.ts"),
				l = n("./src/reddit/models/Image/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/structuredStyles.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts");
			const h = Object(s.a)(i.p),
				g = Object(s.a)(i.q),
				f = Object(s.a)(i.o),
				x = (e, t, n) => async (s, r, i) => {
					const o = Object(p.B)(r(), {
						subredditName: e
					});
					if (o) return v(o, t, n)(s, r, i)
				}, v = (e, t, n) => async (s, i, p) => {
					const x = await Object(l.e)(t);
					s(h());
					const v = i();
					try {
						await Object(r.g)("communityIcon", x, e.id)(s, i, p)
					} catch (C) {
						return Object(b.a)(Object(c.c)(v, "something went wrong with the uploading the image")), s(Object(o.e)({
							kind: u.b.Error,
							text: Object(d.c)("Error uploading image, please try again later")
						})), void s(f())
					}
					const E = Object(m.d)(i(), {
						name: "communityIcon"
					});
					if (!E) return Object(b.a)(Object(c.c)(v, "image is null")), s(Object(o.e)({
						kind: u.b.Error,
						text: Object(d.c)("Error uploading image, please try again later")
					})), void s(f());
					await Object(r.k)(e.id, {
						communityIcon: E
					}, a.b.idCard, n)(s, i, p), s(Object(o.e)({
						kind: u.b.SuccessCommunity,
						text: Object(d.c)("Successfully updated Community Icon!")
					})), s(g())
				}
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
				return I
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
					onHideTooltip: () => e(Object(l.h)()),
					onOpenUploadDialog: () => e(Object(d.j)())
				}),
				I = Object(i.b)(_, w)(j),
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
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/lib/fastdom/index.ts"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				b = n("./src/reddit/components/ContentTooltip/index.m.less"),
				h = n.n(b);

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
			const x = {
					height: 200,
					width: 200
				},
				v = e => {
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
						style: s,
						caretPosition: r,
						caretColor: o
					} = e, a = f(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return i.a.createElement("div", g({
						className: Object(d.a)(n, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === r,
							[h.a.caretOnLeft]: "left" === r,
							[h.a.caretOnRight]: "right" === r,
							[h.a.caretOnBottom]: "bottom" === r
						}),
						style: Object.assign({}, s, {
							"--contentTooltip-caretColor": o && o[r] ? o[r] : Object(m.a)(e).body
						})
					}, a), t)
				}),
				C = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(p.b)(n)(e)
					}
				}),
				y = Object(c.a)(E, [s.a.Click, s.a.Keydown]),
				O = Object(o.b)(C);
			class j extends i.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = x
						} = this.props;
						u.a.read(() => {
							const n = document.getElementById(e);
							if (!n) return;
							const s = n.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let r = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									r = window.innerHeight - s.bottom > t.height;
									break;
								case "left":
									r = s.left > t.width;
									break;
								case "right":
									r = s.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									r = s.top > t.height
							}
							this.setState({
								position: r ? this.props.defaultTooltipPosition : v(this.props.defaultTooltipPosition)
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
						caretPosition: s
					} = this.getPositions(e);
					return i.a.createElement(y, g({}, this.props, {
						caretPosition: s,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = O(j)
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
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/IdCard/index.m.less"),
				o = n.n(i);
			const a = r.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return r.a.createElement("div", {
					className: o.a.Banner,
					style: t && t.length ? {
						backgroundImage: "url(".concat(t, ")")
					} : void 0
				})
			})
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
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/app/strings/index.ts"),
				r = n("./src/config.ts"),
				i = n("./src/reddit/constants/listings.ts"),
				o = n("./src/reddit/constants/page.ts");
			const a = e => e && e.toLowerCase() === i.b.Popular,
				c = e => e && e.toLowerCase() === i.b.All,
				d = e => e && e === o.c,
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				u = e => {
					let t, n, o, u, m, {
						language: p,
						listingName: b,
						isM2MEnabled: h,
						subreddit: g,
						idCardWidget: f
					} = e;
					const x = f && f.subscribersText || Object(s.a)(p, "structuredStyles.widgets.id-card.subscribersText"),
						v = f && f.currentlyViewingText || Object(s.a)(p, "structuredStyles.widgets.id-card.currentlyViewingText");
					let E, C;
					if (d(b))
						if (t = "".concat(r.a.assetPath, "/img/id-cards/home-banner@2x.png"), o = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), m = i.c[i.b.Home], h) u = Object(s.a)(p, "listings.populatedHome.title"), n = Object(s.a)(p, "listings.populatedHome.longDescription");
						else {
							n = Object(s.a)(p, "listings.home.longDescription");
							const e = Object(s.a)(p, "listings.home.title");
							u = e.charAt(0).toUpperCase() + e.slice(1)
						}
					else c(b) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), n = Object(s.a)(p, "listings.all.longDescription"), o = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = "r/all", m = i.c[i.b.All]) : a(b) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), n = Object(s.a)(p, "listings.popular.longDescription"), o = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = "r/popular", m = i.c[i.b.Popular]) : b && (n = f && f.description, o = l(""), u = g.displayText, m = g.url, C = f && f.subscribersCount, E = f && f.currentlyViewingCount);
					return Object.assign({
						snooBackground: o,
						description: n,
						titleText: u,
						url: m,
						subscribersCount: C,
						subscribersText: x,
						currentlyViewingText: v,
						currentlyViewingCount: E
					}, t ? {
						bannerBackgroundImage: t
					} : {})
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, n) {
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
				I = n("./src/lib/isSimpleClick/index.ts"),
				S = n("./src/reddit/actions/login.ts"),
				N = n("./src/reddit/components/TrackingHelper/index.tsx"),
				k = n("./src/reddit/constants/accountManager.ts"),
				P = n("./src/reddit/constants/listings.ts"),
				B = n("./src/reddit/controls/Button/index.tsx"),
				F = n("./src/reddit/helpers/makeAccountManagerUrl/index.ts"),
				M = n("./src/reddit/helpers/trackers/monthsToMinutes.ts"),
				R = n("./src/reddit/i18n/components.tsx"),
				D = n("./src/reddit/selectors/meta.ts"),
				L = n("./src/reddit/selectors/user.ts");
			const A = Object(u.c)({
				isLoggedIn: L.G,
				origin: D.h
			});
			class H extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						Object(I.a)(e) && (e.stopPropagation(), e.preventDefault(), this.props.sendEvent(Object(M.e)()), this.props.openRegisterModal())
					}
				}
				render() {
					const {
						className: e,
						origin: t
					} = this.props;
					return i.a.createElement(B.g, {
						className: e,
						href: Object(F.a)(k.a.Register, t),
						onClick: this.onClick
					}, i.a.createElement(R.c, null, "Create an account"))
				}
			}
			var z = Object(o.b)(A, e => ({
					openRegisterModal: () => {
						e(Object(v.k)({
							actionSource: v.a.IdCard,
							redirectUrl: P.c[P.b.Home]
						})), e(Object(S.f)())
					}
				}))(Object(N.b)(H)),
				U = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				W = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/reddit/helpers/getSubredditUrl/index.ts")),
				q = n("./src/reddit/i18n/utils.ts"),
				V = n("./src/reddit/selectors/telemetry.ts");

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var K = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const Q = Object(u.c)({
				isLoggedIn: L.G
			});
			var G = Object(o.b)(Q, e => ({
				openLoginModal: () => {
					e(Object(v.k)({
						actionSource: v.a.Post
					})), e(Object(S.f)())
				}
			}))(Object(N.b)(e => {
				var {
					isContributorRequestPending: t,
					isLoggedIn: n,
					listingName: s,
					openLoginModal: r,
					sendEvent: o,
					subreddit: a
				} = e, c = K(e, ["isContributorRequestPending", "isLoggedIn", "listingName", "openLoginModal", "sendEvent", "subreddit"]);
				const d = "".concat(Object(W.a)(a) || "/", "submit");
				return i.a.createElement(B.h, J({}, c, {
					onClick: e => {
						o(e => ({
							action: "click",
							noun: "create_post",
							source: "id_card",
							screen: Object(V.screen)(e),
							subreddit: Object(V.subreddit)(e),
							actionInfo: Object(V.actionInfo)(e)
						})), n || (r(), e.preventDefault())
					},
					to: d
				}), t ? Object(q.c)("Draft post") : Object(q.c)("Create post"))
			}));
			const X = Object(O.a)({
				getComponent: () => Object(j.a)(() => n.e("CreatePollButton").then(n.bind(null, "./src/reddit/components/IdCard/CreatePollButton/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			var Y = n("./node_modules/react-autosize-textarea/lib/index.js"),
				Z = n.n(Y),
				$ = n("./src/reddit/actions/subredditSettings.ts"),
				ee = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				te = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				ne = n("./src/reddit/components/ContentTooltip/index.tsx"),
				se = n("./src/lib/fastdom/index.ts"),
				re = n("./src/lib/lessComponent.tsx"),
				ie = n("./src/reddit/components/IdCard/DescriptionBlock/index.m.less"),
				oe = n.n(ie);
			const ae = re.a.div("DescriptionContainer", oe.a);
			class ce extends i.a.Component {
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
					this.state.shouldTruncateDescription && se.a.read(() => {
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
					} = this.state, o = i.a.createElement(R.c, null, n && "Welcome to r/".concat(n.name));
					return i.a.createElement(ae, {
						className: Object(m.a)(oe.a.descriptionContainer, r && oe.a.truncated),
						"data-redditstyle": !0,
						innerRef: this.setContainerRef
					}, i.a.createElement("div", {
						className: oe.a.description,
						ref: this.setTextRef
					}, t || o, e), r && s && i.a.createElement("div", {
						className: oe.a.showMore
					}, i.a.createElement(R.c, null, "..."), i.a.createElement(B.n, {
						className: oe.a.showFullDescriptionButton,
						onClick: this.showFullDescription
					}, i.a.createElement(R.c, null, "MORE"))))
				}
			}
			var de = ce,
				le = n("./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx"),
				ue = n("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				me = n("./src/reddit/constants/tooltips.ts"),
				pe = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				be = n("./src/reddit/helpers/localStorage/index.ts"),
				he = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				ge = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				fe = n("./src/reddit/selectors/activeModalId.ts"),
				xe = n("./src/reddit/selectors/subreddit.ts");
			const ve = 6,
				Ee = Object(u.c)({
					apiPending: xe.T,
					unsavedChangesModalIsOpen: Object(fe.b)(ue.a)
				});
			class Ce extends i.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.containerRef = i.a.createRef(), this.isSaving = !1, this.setTextAreaRef = e => {
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
					const e = this.props.apiPending ? i.a.createElement(pe.a, {
						className: oe.a.loadingIcon,
						sizePx: ve
					}) : void 0;
					return this.state.description ? i.a.createElement(i.a.Fragment, null, i.a.createElement(de, {
						description: this.state.description,
						shouldTruncateDescription: this.props.shouldTruncateDescription,
						subreddit: this.props.subreddit
					}, i.a.createElement(ge.a, {
						className: oe.a.pencil
					}), e)) : i.a.createElement("div", {
						className: oe.a.emptyDescription
					}, i.a.createElement(R.c, null, "Add description"), e)
				}
				renderTextArea() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(Z.a, {
						innerRef: this.setTextAreaRef,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur,
						placeholder: Object(q.c)("Tell us about your community"),
						className: Object(m.a)(oe.a.editableDescription, oe.a.activeEditableDescription),
						onChange: e => this.setState({
							description: e.currentTarget.value
						}),
						maxLength: te.c,
						value: this.state.description
					}), i.a.createElement("div", {
						className: oe.a.editableDescriptionControlRow
					}, i.a.createElement(ee.a, {
						className: oe.a.characterCountdown,
						maxChars: te.c,
						text: this.state.description
					}), i.a.createElement("span", {
						className: oe.a.cancel,
						onClick: this.onCancel
					}, Object(q.c)("Cancel")), i.a.createElement("span", {
						className: oe.a.save,
						onClick: this.onSave
					}, Object(q.c)("Save"))))
				}
				hasPendingChanges() {
					return this.state.description !== this.props.description
				}
				getContainerClassNames() {
					if (!this.state.editing && this.state.description) return [oe.a.defaultEditableDescriptionContainer];
					const e = [oe.a.editableDescriptionContainer];
					return this.state.editing && e.push(oe.a.activeEditableDescriptionContainer), e
				}
				renderTooltip() {
					return i.a.createElement(ne.a, {
						className: oe.a.tooltip,
						tooltipId: me.a,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, i.a.createElement(le.a, {
						includeIcon: !1,
						subredditId: this.props.subreddit.id
					}))
				}
				render() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						id: this.tooltipEnabled() ? me.a : void 0,
						ref: this.containerRef,
						className: Object(m.a)(...this.getContainerClassNames()),
						tabIndex: 0,
						onFocus: this.handleOnFocus,
						onBlur: this.handleOnBlur
					}, this.state.editing ? this.renderTextArea() : this.renderInactiveDescription(), this.props.unsavedChangesModalIsOpen && i.a.createElement(ue.b, {
						withOverlay: !0,
						ignoreDefaultFocus: !0,
						onCancel: this.focusTextArea,
						onDiscard: this.onCancel,
						onSave: this.onSave
					})), this.tooltipEnabled() && this.renderTooltip())
				}
			}
			var ye = Object(o.b)(Ee, (e, t) => {
					let {
						subreddit: n
					} = t;
					return {
						updateSubredditSettings: t => e(Object($.h)(n.id, t, !0)),
						openUnsavedChangesModal: () => {
							e(Object(x.h)()), e(Object(v.h)(ue.a))
						},
						onShowTooltip: () => {
							e(Object(x.f)({
								tooltipId: me.a
							}))
						}
					}
				})(Object(N.b)(Ce)),
				Oe = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				je = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx"),
				_e = n("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less"),
				Te = n.n(_e);
			var we = Object(O.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => i.a.createElement("div", {
						className: Te.a.container
					}, i.a.createElement(je.a, null)),
					getComponent: () => Object(j.a)(() => Promise.all([n.e("AdminCommunityTopics~SubredditInlineEditing"), n.e("SubredditInlineEditing")]).then(n.bind(null, "./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx"))).then(e => e.default)
				}),
				Ie = n("./src/reddit/components/OverflowMenu/index.tsx"),
				Se = n("./src/reddit/components/SubscribeButton/index.tsx"),
				Ne = n("./src/reddit/components/Widgets/Base/index.tsx"),
				ke = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Pe = n("./src/reddit/constants/modals.ts"),
				Be = n("./src/reddit/constants/page.ts"),
				Fe = n("./src/reddit/constants/posts.ts"),
				Me = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Re = n("./src/reddit/controls/ImageInput/index.tsx"),
				De = n("./src/reddit/featureFlags/index.ts"),
				Le = n("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				Ae = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				He = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				ze = n("./src/reddit/helpers/trackers/lightbox.ts"),
				Ue = n("./src/reddit/helpers/trackers/modHub.ts"),
				We = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				qe = n("./src/reddit/icons/fonts/helpers.tsx"),
				Ve = n("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				Je = n.n(Ve);
			var Ke = e => i.a.createElement("i", {
					className: Object(m.a)(Je.a.ModSettings, Object(qe.b)("modSettings"), e.className)
				}),
				Qe = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				Ge = n("./src/reddit/icons/svgs/Help/index.tsx"),
				Xe = n("./src/reddit/models/ApiRequestState/index.ts"),
				Ye = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				Ze = n("./src/reddit/selectors/category.ts"),
				$e = n("./src/reddit/selectors/experiments/categories.ts"),
				et = n("./src/reddit/constants/experiments.ts"),
				tt = n("./src/reddit/helpers/chooseVariant/index.ts");
			var nt = n("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				st = n("./src/reddit/selectors/moderatorPermissions.ts"),
				rt = n("./src/reddit/selectors/monthsToMinutes.ts"),
				it = n("./src/reddit/selectors/structuredStyles.ts"),
				ot = n("./src/reddit/selectors/subscriptions.ts"),
				at = n("./src/reddit/selectors/widgets.ts"),
				ct = n("./src/reddit/components/IdCard/Banner.tsx"),
				dt = n("./src/reddit/actions/preferences.ts"),
				lt = n("./src/app/strings/index.ts"),
				ut = n("./src/reddit/actions/authorFlair.ts"),
				mt = n("./src/reddit/actions/badge.ts"),
				pt = n("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				bt = n("./src/reddit/components/Flair/index.tsx"),
				ht = n("./src/reddit/featureFlags/component.tsx"),
				gt = n("./src/reddit/models/User/index.ts"),
				ft = n("./src/reddit/selectors/userFlair.ts"),
				xt = n("./src/reddit/components/SidebarFlairSettings/index.m.less"),
				vt = n.n(xt);
			const Et = re.a.div("FlairSettingsContainer", vt.a),
				Ct = re.a.div("FlairPreview", vt.a),
				yt = re.a.wrapped(e => i.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 14 14",
					xmlns: "http://www.w3.org/2000/svg",
					version: "1.1"
				}, i.a.createElement("title", {
					id: "".concat(e.title, "-title")
				}, e.title), i.a.createElement("g", null, i.a.createElement("path", {
					fill: "inherit",
					d: "M8.1168,3.0832 L10.9168,5.8832 C11.0728,6.0392 11.0728,6.2928 10.9168,6.4488 L4.0824,13.2832 C4.0072,13.3584 3.9056,13.4 3.8,13.4 L1,13.4 C0.7784,13.4 0.6,13.2216 0.6,13 L0.6,10.2 C0.6,10.0944 0.6416,9.9928 0.7168,9.9176 L7.5512,3.0832 C7.7072,2.9272 7.9608,2.9272 8.1168,3.0832 Z M13.5168,2.152 C13.9848,2.62 13.9848,3.3808 13.5168,3.8488 L12.048,5.3176 C11.9696,5.396 11.8672,5.4352 11.7656,5.4352 C11.6632,5.4352 11.5608,5.396 11.4824,5.3176 L8.6824,2.5176 C8.5264,2.3616 8.5264,2.108 8.6824,1.952 L10.1512,0.4832 C10.6192,0.0152 11.38,0.0152 11.848,0.4832 L13.5168,2.152 Z"
				}))), "EditPencil", vt.a),
				Ot = re.a.div("PreviewTitle", vt.a),
				jt = re.a.wrapped(bt.b, "FlairComponent", vt.a),
				_t = re.a.wrapped(B.n, "TertiaryButton", vt.a),
				Tt = re.a.wrapped(_t, "IconButton", vt.a),
				wt = re.a.span("Username", vt.a),
				It = Object(ht.a)("spBadges", pt.a),
				St = Object(u.c)({
					badgesEnabled: De.d.spBadges,
					currentUser: L.i,
					language: L.P,
					userFlairData: ft.c,
					userHasBadge: (e, t) => {
						const n = e.user.account;
						if (n) {
							return !!((e.users.appliedBadges[n.id] || {})[t.subredditId] || []).length
						}
						return !1
					}
				}),
				Nt = Object(o.b)(St, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						onToggleModal: t => e(Object(ut.b)({
							username: t,
							subredditId: n
						})),
						onToggleBadgeModal: () => e(Object(mt.j)())
					}
				}),
				kt = e => i.a.createElement(Tt, {
					onClick: e.onClick
				}, i.a.createElement(yt, null)),
				Pt = e => i.a.createElement(_t, {
					onClick: e.onClick
				}, e.userFlairData.displaySettings.isEnabled ? e.userFlairData.applied || e.userHasBadge ? Object(lt.a)(e.language, "flair.editUserFlairAndBadge") : Object(lt.a)(e.language, "flair.addUserFlairAndBadge") : e.userHasBadge ? Object(lt.a)(e.language, "flair.editUserBadge") : Object(lt.a)(e.language, "flair.addUserBadge"));
			class Bt extends i.a.Component {
				constructor() {
					super(...arguments), this.onFlairLinkClick = () => {
						const e = this.props.currentUser ? Object(gt.f)(this.props.currentUser) : null;
						this.props.onToggleModal(e), this.props.sendEvent(Object(ze.a)("user_flair_picker"))
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
					return t && o ? i.a.createElement(Et, null, i.a.createElement(Ot, null, i.a.createElement(R.c, null, "user flair preview"), i.a.createElement(kt, {
						onClick: this.onFlairLinkClick
					})), i.a.createElement(Ct, null, a && i.a.createElement(It, {
						className: vt.a.badge,
						subredditId: r,
						uniqueIdentifier: r
					}), i.a.createElement(wt, null, "u/".concat(t.displayText)), o.applied && o.displaySettings.isUserEnabled && i.a.createElement(jt, {
						flair: o.applied,
						forceSmallEmojis: !0
					})), e ? i.a.createElement(Pt, {
						userFlairData: o,
						userHasBadge: a,
						language: n,
						onClick: s
					}) : null) : null
				}
			}
			var Ft = Nt(Object(N.b)(Bt)),
				Mt = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Rt = n("./src/reddit/helpers/trackers/idCard.ts"),
				Dt = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Lt = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				At = n("./src/reddit/icons/svgs/Show/index.tsx"),
				Ht = e => i.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("path", {
					d: "M4.59 8l-2.3 2.29A1 1 0 0 0 3.7 11.7L6 9.41zM6 11a4 4 0 0 0 5.34 3.75l-5.1-5.1A4 4 0 0 0 6 11zM18.71 17.29l-5-5A3.87 3.87 0 0 0 14 11a4 4 0 0 0-.68-2.22c.07.06.15.11.21.17l2.76 2.76a1 1 0 0 0 1.41-1.41l-2.75-2.76A7 7 0 0 0 7.42 6L2.71 1.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.41-1.41z"
				})),
				zt = n("./src/reddit/components/IdCard/CommunityOptions/index.m.less"),
				Ut = n.n(zt);
			const Wt = re.a.wrapped(B.n, "TertiaryButton", Ut.a),
				qt = Object(u.c)({
					shouldShowFlairPicker: ft.b,
					stylesDisabledForSubreddit: L.ab,
					stylesDisabledGlobally: L.bb
				});
			class Vt extends i.a.Component {
				constructor(e) {
					super(e), this.onContainerClick = e => {
						e.stopPropagation()
					}, this.onExpandButtonClick = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.onToggleStylesSwitch = () => {
						const e = !!this.props.stylesDisabledForSubreddit;
						this.props.sendEvent(Object(Rt.c)(e)), this.props.updateSubredditPrefs(this.props.subredditId, {
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
						className: Ut.a.content
					}, i.a.createElement("div", {
						className: Object(m.a)(Ut.a.stylesToggle, {
							[Ut.a.disabled]: r
						}),
						title: r ? Object(q.c)("This is unavailable because themes have been disabled globally in your user settings") : void 0
					}, i.a.createElement("label", {
						className: Ut.a.stylesToggleLabel
					}, s ? i.a.createElement(Ht, null) : i.a.createElement(At.a, null), i.a.createElement(R.c, null, "Community theme")), i.a.createElement(Mt.a, {
						disabled: r,
						on: !s,
						onToggle: this.onToggleStylesSwitch
					})), n && !e && i.a.createElement(Ft, {
						subredditId: o
					})) : null;
					return i.a.createElement("div", {
						className: Ut.a.container,
						onClick: this.onContainerClick
					}, i.a.createElement(Wt, {
						className: Object(m.a)(Ut.a.expandButton, {
							[Ut.a.redditStyle]: t
						}),
						onClick: this.onExpandButtonClick
					}, i.a.createElement(R.c, null, "Community options"), a ? i.a.createElement(Lt.a, null) : i.a.createElement(Dt.a, null)), c)
				}
			}
			var Jt = Object(o.b)(qt, e => ({
					updateSubredditPrefs: (t, n) => {
						e(Object(dt.H)(t, n))
					}
				}))(Vt),
				Kt = n("./src/reddit/components/IdCard/helpers.ts"),
				Qt = n("./src/reddit/components/IdCard/Placeholder.tsx"),
				Gt = n("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				Xt = n("./src/reddit/components/IdCard/Title.tsx"),
				Yt = n("./src/reddit/components/IdCard/index.m.less"),
				Zt = n.n(Yt);
			const $t = "IDCARD_OVERFLOW_DROPDOWN_ID",
				en = Object(o.b)(() => Object(u.c)({
					postCategories: (e, t) => Object(Ze.q)(e, t.postId),
					favoriteSubredditsIds: ot.a,
					frontpageIsHome: e => Object(rt.g)(e),
					idCardWidget: (e, t) => Object(at.d)(e, {
						subredditName: t.listingName
					}),
					isContributorRequestPending: e => Object(xe.h)(e, Ye.e.Post),
					isLoggedIn: L.G,
					isM2MEnabled: rt.w,
					language: L.P,
					m2mHomeRedirectVariant: nt.f,
					moderatorPermissions: (e, t) => {
						const n = Object(xe.G)(e, t.listingName);
						if (n) return Object(st.j)(e, {
							subredditId: n
						})
					},
					isInCategoriesExperiment: $e.a,
					showContributorRequestFlow: e => Object(xe.t)(e, Ye.e.Post),
					showCreatePollButton: e => (e => Object(tt.c)(e, {
						experimentEligibilitySelector: tt.a,
						experimentName: et.h
					}) === et.m.Treatment)(e) && !Object(be.f)(),
					subreddit: (e, t) => Object(xe.B)(e, {
						subredditName: t.listingName
					}),
					subredditAboutInfo: (e, t) => Object(xe.y)(e, {
						subredditName: t.listingName
					}),
					subredditCoins: (e, t) => {
						let {
							listingName: n
						} = t;
						return Object(xe.D)(e, {
							subredditName: n
						})
					},
					subredditIcon: (e, t) => Object(it.q)(e, {
						subredditName: t.listingName
					}),
					adminCommunityTopicsEnabled: De.d.adminCommunityTopics,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							listingName: n
						} = t;
						const s = Object(xe.B)(e, {
							subredditName: n
						});
						return !!s && Object(l.a)(e, {
							subredditId: s.id
						})
					}
				}), (e, t) => ({
					addToMultiClicked: () => {
						e(Object(E.g)(!0, !0)), e(Object(v.h)(Pe.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					dispatchPush: t => e(Object(c.b)(t)),
					toggleFavorite: t => e(Object(C.c)({
						id: t,
						type: Fe.a.SUBREDDIT
					})),
					toggleTooltip: t => e(Object(x.g)({
						tooltipId: t
					})),
					onCommunityIconSelected: (n, s) => {
						e(Object(d.b)(t.listingName, n, s))
					}
				}), (e, t, n) => Object.assign({}, e, t, n, {
					isEligibleForCommunityAwards: Object(Le.a)(e.subreddit),
					isFavoriteSubreddit: !!e.subreddit && e.favoriteSubredditsIds.indexOf(e.subreddit.id) > -1,
					onContainerClick: () => n.isOverlay && t.dispatchPush(e.subreddit.url),
					onToggleFavoriteClick: () => t.toggleFavorite(e.subreddit.id)
				}));
			class tn extends i.a.Component {
				constructor() {
					super(...arguments), this.iconFilePickerRef = null, this.setIconFilePickerRef = e => this.iconFilePickerRef = e, this.onClickModTools = () => this.props.sendEvent(Object(Ue.a)()), this.handleVisitCommunityClick = () => this.props.sendEvent(Object(ze.a)("visit")), this.getListingNameToUse = () => {
						const {
							frontpageIsHome: e,
							isLoggedIn: t,
							listingName: n
						} = this.props;
						return t || n !== Be.c || e ? n : P.b.Popular
					}, this.onIconImageSelected = e => {
						this.props.onCommunityIconSelected(e, Object(Xe.b)())
					}, this.openIconFilePicker = () => {
						this.iconFilePickerRef && this.iconFilePickerRef.click(), this.props.sendEvent(he.b)
					}, this.renderCreatePostButtons = () => {
						const {
							isContributorRequestPending: e,
							listingName: t,
							showCreatePollButton: n,
							showContributorRequestFlow: s,
							subreddit: r
						} = this.props, o = Object(h.a)(this.getListingNameToUse());
						return !o && s ? i.a.createElement(w.a, {
							eventSource: Ye.b.IdCard
						}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(G, {
							className: Zt.a.CreatePostButton,
							isContributorRequestPending: e,
							listingName: t,
							subreddit: r
						}), !e && !o && n && i.a.createElement(X, {
							listingName: t
						}))
					}, this.renderButtons = () => {
						const {
							isCommentsPage: e,
							isLoggedIn: t,
							isM2MEnabled: n,
							isMinimal: r,
							isOverlay: o,
							isSubmissionPage: a,
							listingName: c,
							subreddit: d,
							subredditAboutInfo: l
						} = this.props, u = this.getListingNameToUse(), m = Object(h.a)(u), p = !t && n && Object(Kt.d)(c), b = r && d && !o, g = e && !m && !b, f = t && !b && !p && !a && !o && !(l && l.userIsBanned);
						return i.a.createElement("div", {
							className: Zt.a.Buttons
						}, g && i.a.createElement(Se.a, {
							className: Zt.a.SubscribeButton,
							getEventFactory: e => Object(ze.a)(e ? "unsubscribe" : "subscribe"),
							id: "subscribe-button-".concat(d.id),
							identifier: {
								name: d.name,
								type: "subreddit"
							},
							onClick: e => e.stopPropagation()
						}), p && i.a.createElement(z, {
							className: Zt.a.CreateAccountButton
						}), f && this.renderCreatePostButtons(), t && !a && !o && !d && i.a.createElement(U.a, {
							className: Zt.a.CreateCommunityButton,
							eventSource: "id_card"
						}), b && i.a.createElement(B.k, {
							className: Zt.a.VisitCommunityButton,
							onClick: this.handleVisitCommunityClick,
							to: d.url
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
						isM2MEnabled: l,
						isMinimal: u,
						isOverlay: p,
						isSubmissionPage: b,
						language: g,
						m2mHomeRedirectVariant: f,
						moderatorPermissions: x,
						onContainerClick: v,
						postCategories: E,
						postId: C,
						subreddit: O,
						subredditAboutInfo: j,
						subredditCoins: w,
						subredditIcon: I,
						toggleTooltip: S,
						subredditInlineEditingEnabled: N
					} = this.props, k = this.getListingNameToUse(), P = Object(h.a)(k);
					if (!P && !n) return i.a.createElement(Qt.a, null);
					const {
						bannerBackgroundImage: B,
						currentlyViewingCount: F,
						currentlyViewingText: M,
						description: R,
						snooBackground: D,
						subscribersCount: L,
						subscribersText: A,
						titleText: H,
						url: z
					} = Object(Kt.a)({
						language: g,
						listingName: k,
						isM2MEnabled: l,
						subreddit: O,
						idCardWidget: n
					}), U = P || p || b, W = !P && O.id ? O.id : "", V = j && j.created, J = s.fbt._("Cake Day", null, {
						hk: "gZ29b"
					}), K = "IdCard--Subscribers--".concat(p, "--").concat(W), Q = "IdCard--CurrentlyViewing--".concat(p, "--").concat(W), G = "IdCard--CakeDay--".concat(p, "--").concat(W), X = "IdCard--CoinCoint--".concat(p, "--").concat(W), Y = u && !p, Z = !!p && Object(nt.e)(f), $ = !P && !p && N && !b, ee = $ ? i.a.createElement(ye, {
						description: R,
						shouldTruncateDescription: Z,
						isCommentsPage: !!r,
						subreddit: O
					}) : i.a.createElement(de, {
						description: R,
						shouldTruncateDescription: Z,
						subreddit: O
					});
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(ke.a, {
						className: Object(m.a)(Zt.a.ThemedWidget, t),
						onClick: p ? v : void 0,
						headerButton: i.a.createElement("div", {
							className: Zt.a.headerButtonsContainer
						}, !U && O && x && i.a.createElement(a.a, {
							className: Zt.a.ModToolsLink,
							to: x.posts ? "".concat(O.url, "about/modqueue") : "".concat(O.url, "about/"),
							onClick: this.onClickModTools
						}, i.a.createElement(Ke, {
							className: Zt.a.ModSettings
						}), s.fbt._("Mod tools", null, {
							hk: "3tJVME"
						})), d && O && i.a.createElement(Ie.b, {
							className: Zt.a.overflowButton,
							dropdownId: $t,
							targetPosition: ["right", "bottom"],
							tooltipPosition: ["right", "top"]
						}, !O.isQuarantined && i.a.createElement(Me.b, {
							className: Zt.a.dropdownRow,
							displayText: Object(q.c)("Add to Custom Feed"),
							onClick: e
						}), i.a.createElement(Me.b, {
							className: Zt.a.dropdownRow,
							displayText: this.props.isFavoriteSubreddit ? Object(q.c)("Remove from Favorites") : Object(q.c)("Add to Favorites"),
							onClick: this.props.onToggleFavoriteClick
						}))),
						redditStyle: P || b,
						title: U ? void 0 : s.fbt._("About Community", null, {
							hk: "31Lg8f"
						}),
						titleClassName: P ? void 0 : Zt.a.subredditTitle
					}, U && i.a.createElement(ct.a, {
						bannerBackgroundImage: B
					}), P || b || r ? P ? Object(Gt.a)({
						titleText: H,
						snooBackground: D
					}) : i.a.createElement(Xt.a, {
						isTargetBlank: b,
						linkUrl: P ? void 0 : z,
						subredditIcon: I,
						canEditIcon: $,
						subreddit: O,
						titleText: H,
						onOpenFilePicker: this.openIconFilePicker
					}) : null, ee, !P && !Y && sn(g, L, A, K, F, M, Q, V, J, G, S), !P && i.a.createElement("div", {
						className: Zt.a.CommunityTypeContainer
					}, i.a.createElement(T.a, {
						className: Zt.a.communityType,
						iconClassName: Zt.a.communityTypeIcon,
						subreddit: O,
						textClassName: Zt.a.communityTypeText
					})), o && x && void 0 !== w && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Zt.a.HorizontalLine
					}), i.a.createElement("div", {
						className: Zt.a.communityCoinCount
					}, i.a.createElement(We.a, {
						className: Zt.a.coinIcon
					}), s.fbt._("{number-community-coins} Coins", [s.fbt._param("number-community-coins", w.toLocaleString())], {
						hk: "3FSFdY"
					}), i.a.createElement("span", {
						id: X,
						onMouseLeave: () => S(X),
						onMouseEnter: () => S(X)
					}, i.a.createElement(Ge.a, {
						className: Zt.a.helpIcon
					})), i.a.createElement(Oe.c, {
						tooltipId: X
					}, i.a.createElement("p", {
						className: Zt.a.coinsTooltipContent
					}, s.fbt._("The community gets Coins from Awards given by members", null, {
						hk: "3j3NSH"
					}))))), $ && i.a.createElement(we, {
						context: He.a.idCard,
						subredditId: W
					}), !P && Y && !Z && nn(O, L, F), !Z && this.renderButtons(), c && E && C && (r || p) && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
						className: Zt.a.HorizontalLine
					}), i.a.createElement("div", {
						className: Zt.a.CategoryContainer
					}, i.a.createElement(Ne.a, {
						className: Zt.a.widgetHeader
					}, s.fbt._("Discover more in:", null, {
						hk: "1o2gtg"
					})), i.a.createElement(y.a, {
						postId: C,
						inLightboxHeader: !0,
						postCategories: E
					}))), !P && d && i.a.createElement(i.a.Fragment, null, i.a.createElement(Jt, {
						isOverlay: p,
						isSubmissionPage: b,
						sendEvent: this.props.sendEvent,
						subredditId: O.id
					})), $ && i.a.createElement(Re.a, {
						key: "icon-file-picker",
						className: Zt.a.iconFilePicker,
						inputRef: this.setIconFilePickerRef,
						multiple: !1,
						onChange: this.onIconImageSelected
					}), !P && d && this.props.adminCommunityTopicsEnabled && i.a.createElement(_, {
						key: "admin-community-topics",
						subredditId: W
					})))
				}
			}
			const nn = (e, t, n) => {
					const r = Object(Ae.a)(e.name),
						o = t > 1 ? "".concat("member", "s") : "member";
					return i.a.createElement("span", {
						className: Zt.a.metaTextContainer
					}, r.map((e, t) => {
						let {
							color: n,
							image: s
						} = e;
						return i.a.createElement("img", {
							alt: 0 === t ? Object(q.c)("Members icons") : "",
							className: Zt.a.memberIcon,
							key: s,
							src: s,
							style: {
								backgroundColor: n
							}
						})
					}), i.a.createElement("span", {
						className: Object(m.a)(Zt.a.CountMetaText, Zt.a.metaText)
					}, s.fbt._("{subscribersCount}{members}", [s.fbt._param("subscribersCount", Object(g.b)(t)), s.fbt._param("members", "".concat(o))], {
						hk: "1PszpE"
					})), i.a.createElement("span", {
						className: Object(m.a)(Zt.a.CountMetaText, Zt.a.metaText)
					}, s.fbt._("{viewingCount} online", [s.fbt._param("viewingCount", Object(g.b)(n))], {
						hk: "cxviW"
					})))
				},
				sn = (e, t, n, r, o, a, c, d, l, u, m) => i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Zt.a.UserCounts
				}, i.a.createElement("div", {
					className: Zt.a.SubscriberCount,
					onMouseEnter: () => m(r),
					onMouseLeave: () => m(r)
				}, i.a.createElement("div", {
					className: Zt.a.Count
				}, Object(g.b)(t)), i.a.createElement("p", {
					className: Zt.a.UserType,
					id: r
				}, n), i.a.createElement(Oe.c, {
					caretOnTop: !0,
					text: "".concat(Object(g.b)(t, !0), " ").concat(n),
					tooltipId: r
				})), i.a.createElement("div", {
					className: Zt.a.Online,
					onMouseEnter: () => m(c),
					onMouseLeave: () => m(c)
				}, i.a.createElement("div", {
					className: Zt.a.Count
				}, Object(g.b)(o)), i.a.createElement("p", {
					className: Zt.a.UserType,
					id: c
				}, a), i.a.createElement(Oe.c, {
					caretOnTop: !0,
					text: "".concat(Object(g.b)(o, !0), " ").concat(a),
					tooltipId: c
				})), i.a.createElement("div", null)), d && i.a.createElement(i.a.Fragment, null, i.a.createElement("hr", {
					className: Zt.a.HorizontalLine
				}), i.a.createElement("div", {
					className: Zt.a.CakeDayContainer,
					onMouseEnter: () => m(u),
					onMouseLeave: () => m(u)
				}, i.a.createElement("div", {
					className: Zt.a.CakeDay,
					id: u
				}, i.a.createElement(Qe.a, {
					className: Zt.a.cakeIcon,
					key: "cakeDay"
				}), s.fbt._("Created {cakeday}", [s.fbt._param("cakeday", Object(b.a)(d, !0, !0, !0))], {
					hk: "8Y46b"
				})), i.a.createElement(Oe.c, {
					caretOnTop: !0,
					text: Object(f.d)(e, d),
					tooltipId: u
				}))));
			t.default = Object(N.b)(en(Object(p.a)(tn)))
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
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/IdCard/index.m.less"),
				a = n.n(o);
			const c = e => {
				let {
					snooBackground: t
				} = e;
				return r.a.createElement("div", {
					className: a.a.AdorableSnoo,
					style: {
						background: t.image,
						backgroundSize: "".concat(t.width, "px ").concat(t.height, "px"),
						height: t.height,
						width: t.width
					}
				})
			};
			t.a = e => {
				let {
					titleText: t,
					snooBackground: n
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(a.a.Title, a.a.TitleShifted)
				}, r.a.createElement(c, {
					snooBackground: n
				}), r.a.createElement("div", {
					className: a.a.TitleTextShiftedContainer
				}, r.a.createElement("span", {
					className: a.a.TitleText
				}, t)))
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
		"./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				m = n("./src/reddit/i18n/components.tsx"),
				p = n("./src/reddit/selectors/widgets.ts"),
				b = n("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				h = n.n(b);
			const g = Object(o.c)({
					idCardWidget: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(p.d)(e, {
							subredditId: n
						})
					}
				}),
				f = e => e.includeIcon ? e.idCardWidget && e.idCardWidget.description ? r.a.createElement(m.c, null, "Edit your description and custom icon") : r.a.createElement(m.c, null, "Add a community description and custom icon") : e.idCardWidget && e.idCardWidget.description ? r.a.createElement(m.c, null, "Edit your description") : r.a.createElement(m.c, null, "Add a community description"),
				x = e => e.includeIcon ? r.a.createElement(m.c, null, "Tell us about your community and upload a custom avatar so users can easily identify your community") : r.a.createElement(m.c, null, "Tell us more about your community.");
			class v extends r.a.Component {
				componentDidMount() {
					this.props.sendEvent(u.e), this.props.onViewTooltip()
				}
				render() {
					const e = f(this.props),
						t = x(this.props);
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
					}, r.a.createElement(m.c, null, "Got it")))
				}
			}
			t.a = Object(i.b)(g, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					onDismissTooltip: () => {
						e(Object(a.h)()), Object(l.O)(n, !0)
					},
					onViewTooltip: () => {
						Object(l.ab)()
					}
				}
			})(Object(c.b)(v))
		},
		"./src/reddit/components/InlineSubredditEditing/index.m.less": function(e, t, n) {
			e.exports = {
				tooltipContent: "RrvkJ7ntzKYyaCOxMJ1RM",
				title: "BE2vGjFTJ80XkdBpRRr0p",
				tooltipBody: "_2yezzi8dgIemh3F2q_kvcp",
				topRow: "_1JfvdiRxYTSKf1IIe7DUvM",
				gotIt: "_1MHKCZd72tAgyoZWvIYM-G"
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
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/subreddit/inlineEditing.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/ContentTooltip/index.tsx"),
				u = n("./src/reddit/components/InlineSubredditEditing/InstructionalTooltipContent.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/tooltips.ts"),
				b = n("./src/reddit/controls/ImageInput/index.tsx"),
				h = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				f = n("./src/reddit/helpers/localStorage/index.ts"),
				x = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				v = n("./src/reddit/i18n/components.tsx"),
				E = n("./src/reddit/i18n/utils.ts"),
				C = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				y = e => r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 17",
					version: "1.1"
				}, r.a.createElement("path", {
					d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
					id: "a"
				})),
				O = n("./src/reddit/models/ApiRequestState/index.ts"),
				j = n("./src/reddit/selectors/inlineSubredditEditing.ts"),
				_ = n("./src/reddit/components/SubredditIcon/index.m.less"),
				T = n.n(_);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var I = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			class S extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					this.setState({
						tooltipDismissed: Object(f.l)(this.props.subredditId)
					})
				}
				render() {
					const e = this.props,
						{
							subredditId: t,
							className: n,
							inTopBar: s,
							tooltipDisabled: i
						} = e,
						o = I(e, ["subredditId", "className", "inTopBar", "tooltipDisabled"]),
						c = [n, T.a.inTopBar, T.a.iconContainer];
					return s ? c.push(T.a.emptyEditableIconInTopBar) : c.push(T.a.editableIcon, T.a.emptyEditableIcon), r.a.createElement("span", w({}, o, {
						id: this.props.tooltipDisabled ? void 0 : p.a,
						className: Object(a.a)(...c)
					}), s ? r.a.createElement(y, {
						className: T.a.emptyUploadButton
					}) : r.a.createElement(C.a, {
						className: T.a.emptyPlusButton
					}), this.props.children, !this.state.tooltipDismissed && !this.props.tooltipDisabled && r.a.createElement(l.a, {
						className: T.a.tooltip,
						tooltipId: p.a,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, r.a.createElement(u.a, {
						includeIcon: !s,
						subredditId: t
					})))
				}
			}
			const N = e => {
					const {
						iconColor: t,
						className: n,
						alt: s,
						role: i,
						onClick: o,
						inTopBar: c,
						src: d
					} = e;
					return r.a.createElement("span", {
						className: T.a.iconContainer
					}, r.a.createElement("img", {
						onClick: o,
						role: i,
						alt: s,
						src: d,
						className: Object(a.a)(n, {
							[T.a.editableIcon]: !c
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				k = Object(o.c)({
					isLoading: j.b
				});
			class P extends r.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(x.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => r.a.createElement(b.a, {
						className: T.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(O.b)();
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
						className: T.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? r.a.createElement(v.c, null, "Update icon") : r.a.createElement(v.c, null, "Add icon")) : null
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
					}), n = r.a.createElement(r.a.Fragment, null, r.a.createElement(N, w({
						src: e,
						alt: Object(E.c)("Subreddit icon"),
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, n) : n
				}
				renderEmptyState() {
					return this.props.linkTo ? r.a.createElement("a", {
						href: this.props.linkTo
					}, r.a.createElement(S, w({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : r.a.createElement(r.a.Fragment, null, r.a.createElement(S, w({
						subredditId: this.props.subreddit.id,
						tooltipDisabled: this.props.inTopBar,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [T.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(T.a.loadingIconInTopBar), t = 32), r.a.createElement(h.a, {
							className: Object(a.a)(...e),
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
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), n = this.renderEditButton();
					return n ? r.a.createElement("div", {
						className: T.a.flexContainer
					}, t, n) : t
				}
			}
			t.a = Object(i.b)(k, (e, t) => ({
				onFileSelected: (n, s) => {
					e(Object(c.a)(t.subreddit, n, s))
				},
				onShowTooltip: () => {
					e(Object(d.f)({
						tooltipId: p.a
					}))
				}
			}))(Object(m.b)(P))
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
						className: Object(b.a)(o.o, a.className, {
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
				o = n("./src/reddit/selectors/monthsToMinutes.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				language: c.P,
				subscribeReminderTooltipId: o.C,
				subscribeTooltipId: o.D,
				userIsSubscriber: a.cb
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
		"./src/reddit/constants/accountManager.ts": function(e, t, n) {
			"use strict";
			var s, r, i;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})), n.d(t, "c", (function() {
					return i
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/"
				}(s || (s = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.Login = "login", e.Register = "register", e.Resize = "resize", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(r || (r = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(i || (i = {}))
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
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			class i extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
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
					} = this, n = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, i = n || s;
					return r.a.createElement("div", {
						className: e.className
					}, n && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), !i && r.a.createElement("input", {
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
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};

			function d(e, t, n) {
				const s = Object(o.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(i.b)(s)(e => {
					const {
						featureEnabled: s,
						dispatch: i
					} = e, o = c(e, ["featureEnabled", "dispatch"]);
					return s ? r.a.createElement(t, o) : void 0 !== n ? r.a.createElement(n, o) : null
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
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/memoize.js"),
				r = n.n(s),
				i = n("./src/reddit/constants/categories.tsx"),
				o = n("./src/config.ts");
			const a = Array.from({
					length: 20
				}).map((e, t) => "".concat(o.a.assetPath, "/img/snoovatars/snoovatar_").concat(t + 1, ".png")),
				c = [];
			t.a = r()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				if (!e || !t) return c;
				const n = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: i.a[(n + t) % i.a.length],
					image: a[(n + t) % a.length]
				}))
			}), (function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				return "".concat(e, "_").concat(t)
			}))
		},
		"./src/reddit/helpers/makeAccountManagerUrl/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts");
			t.a = (e, t) => {
				let n = "".concat(s.a.accountManagerOrigin, "/").concat(e, "/");
				return t && (n = "".concat(n, "?dest=").concat(encodeURIComponent(t))), n
			}
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
		"./src/reddit/helpers/trackers/monthsToMinutes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			}));
			var s = n("./src/reddit/selectors/subreddit.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = e => Object.assign({}, r.defaults(e), {
					actionInfo: r.actionInfo(e, {
						settingValue: "top_banner"
					}),
					noun: "account_complete",
					source: "banner"
				}),
				o = () => e => Object.assign({}, i(e), {
					action: "view"
				}),
				a = e => t => Object.assign({}, i(t), {
					action: "click",
					banner: {
						id: e,
						buttonText: e
					}
				}),
				c = e => Object.assign({}, r.defaults(e), {
					source: "community_manager"
				}),
				d = e => t => Object.assign({}, c(t), {
					action: "click",
					noun: "subreddit_name",
					subreddit: {
						id: Object(s.G)(t, e),
						name: e
					}
				}),
				l = e => t => Object.assign({}, c(t), {
					action: "click",
					noun: "remove_subreddit",
					subreddit: {
						id: Object(s.G)(t, e),
						name: e
					}
				}),
				u = () => e => Object.assign({}, r.defaults(e), {
					action: "click",
					noun: "sign_up",
					source: "id_card"
				}),
				m = e => t => Object.assign({}, r.defaults(t), {
					action: "click",
					noun: e,
					source: "community_nav"
				}),
				p = e => Object.assign({}, r.defaults(e), {
					noun: "starter_home",
					source: "banner"
				}),
				b = () => e => Object.assign({}, p(e), {
					action: "view"
				}),
				h = () => e => Object.assign({}, p(e), {
					action: "click",
					actionInfo: r.actionInfo(e, {
						reason: "close"
					})
				})
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
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
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
//# sourceMappingURL=IdCard.a0076d470a7d1df29953.js.map