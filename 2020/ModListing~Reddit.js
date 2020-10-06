// https://www.redditstatic.com/desktop2x/ModListing~Reddit.46684a12d44cc4b1ce21.js
// Retrieved at 10/6/2020, 2:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing~Reddit"], {
		"./src/higherOrderComponents/addOverlayEvents.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return u
			}));
			var r, s = n("./node_modules/lodash/debounce.js"),
				o = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/overlayEvents.ts");

			function u(e, t) {
				class n extends a.Component {
					constructor(e) {
						super(e), this.handleKeyDown = e => {
							e.keyCode === d.F && this.props.onKeyDown(e)
						}, this.handleMouseClick = e => {
							this.props.onMouseClick(e)
						}, this.handleResize = o()(e => {
							this.props.onResize(e)
						}, 250, {
							leading: !0
						})
					}
					componentDidMount() {
						t && -1 !== t.indexOf(r.Keydown) || document.addEventListener("keydown", this.handleKeyDown), t && -1 !== t.indexOf(r.Click) || document.addEventListener("click", this.handleMouseClick), t && -1 !== t.indexOf(r.Resize) || window.addEventListener("resize", this.handleResize)
					}
					componentWillUnmount() {
						document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("click", this.handleMouseClick), window.removeEventListener("resize", this.handleResize)
					}
					render() {
						return i.a.createElement(e, this.props)
					}
				}
				return Object(c.b)(null, e => ({
					onKeyDown: t => e(l.d({
						event: t
					})),
					onMouseClick: t => e(l.e({
						event: t
					})),
					onResize: t => e(l.f({
						event: t
					}))
				}))(n)
			}! function(e) {
				e.Click = "click", e.Keydown = "keydown", e.Resize = "resize"
			}(r || (r = {}))
		},
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/FocusTrap/index.ts"),
				i = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/components/Portal/index.tsx"),
				d = n("./src/reddit/constants/shortcuts.ts"),
				l = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const b = e => {
				var {
					className: t,
					isVisible: n
				} = e, r = f(e, ["className", "isVisible"]);
				return s.a.createElement("div", p({
					className: Object(o.a)(m.a.overlay, t, {
						[m.a.mIsVisible]: n
					})
				}, r))
			};

			function h(e) {
				class t extends r.Component {
					constructor(e) {
						super(e), this.getRef = e => this.ref = e, this.onClick = e => e.stopPropagation(), this.onOverlayClick = e => {
							this.props.onOverlayClick && this.props.onOverlayClick(), e.stopPropagation()
						}, this.state = {
							mounted: !1
						}
					}
					componentDidMount() {
						this.props.ignoreDefaultFocus || this.ref && this.ref.focus(), this.setState({
							mounted: !0
						}), Object(l.a)(), this.ref && (this.focusTrap = new a.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(l.b)(), Object(i.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: r,
							onOverlayClick: a,
							overlayClassName: i,
							overlayCustomStyles: l,
							withOverlay: u
						} = t, p = f(t, ["className", "ignoreDefaultFocus", "onOverlayClick", "overlayClassName", "overlayCustomStyles", "withOverlay"]);
						return s.a.createElement(c.a, {
							container: document.getElementById(d.b)
						}, s.a.createElement(b, {
							className: i,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: l
						}, s.a.createElement("div", {
							"aria-modal": !0,
							className: Object(o.a)(m.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, s.a.createElement(e, p))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/asTooltip.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return y
			})), n.d(t, "a", (function() {
				return g
			}));
			var r = n("./node_modules/lodash/omit.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/fastdom/index.ts"),
				c = n("./src/reddit/components/Portal/index.tsx"),
				d = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				l = n("./src/higherOrderComponents/sizeMe.tsx"),
				u = n("./src/reddit/components/HiddenDiv.m.less"),
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx").a.div("Component", m.a);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "bottom"],
				h = ["left", "top"],
				y = e => {
					let {
						container: t,
						containerHeight: n,
						excludeContainerPosition: r,
						isFixed: s,
						targetBox: o,
						isOverlayOff: a,
						targetPosition: i,
						tooltipSize: c,
						tooltipPosition: d
					} = e;
					const l = document.body,
						u = l.clientTop || 0,
						m = l.clientLeft || 0,
						[p, f, b, h] = t ? [t.scrollLeft, t.scrollTop, t.scrollWidth, n || t.scrollHeight] : [window.pageXOffset, window.pageYOffset, window.innerWidth, document.body.scrollHeight],
						y = {
							bottom: o.bottom,
							center: o.top + o.height / 2,
							top: o.top
						} [i[1]] + {
							bottom: -c.height,
							center: -c.height / 2,
							top: 0
						} [d[1]],
						g = {
							left: o.left,
							center: o.left + o.width / 2,
							right: o.right
						} [i[0]] + {
							left: 0,
							center: -c.width / 2,
							right: -c.width
						} [d[0]];
					let v, O;
					s ? (v = y - u, O = g - m) : (O = p + m + g, v = f + u + y);
					const x = {
							left: O,
							top: v
						},
						j = {
							bottom: Math.max(0, v + c.height - h),
							left: Math.max(0, 0 - O),
							right: Math.max(0, O + c.width - b),
							top: Math.max(0, 0 - v)
						};
					if (b > 320 && h > 667 && !a && (Boolean(j.left) !== Boolean(j.right) && (j.left ? x.left = 0 : x.left -= j.right), Boolean(j.top) !== Boolean(j.bottom) && (j.top ? x.top = 0 : x.top -= j.bottom)), r && t) {
						const e = t.getBoundingClientRect();
						x.top = x.top - e.top, x.left = x.left - e.left
					}
					return {
						overflow: j,
						style: x
					}
				};

			function g(e, t) {
				const n = Object(d.b)(e, t),
					r = Object(l.a)(e => {
						const {
							container: t,
							containerHeight: r,
							domEl: o,
							excludeContainerPosition: i,
							isFixed: c,
							target: d,
							isOverlayOff: l,
							targetPosition: u,
							tooltipPosition: m
						} = e;
						if (!d || !o) return null;
						const p = o.getBoundingClientRect(),
							g = d.getBoundingClientRect(),
							v = y({
								container: t,
								containerHeight: r,
								excludeContainerPosition: i,
								isOverlayOff: l,
								isFixed: !!c,
								targetBox: g,
								targetPosition: u || b,
								tooltipSize: {
									height: p.height,
									width: p.width
								},
								tooltipPosition: m || h
							}),
							O = s()(e, "target", "targetPosition", "tooltipPosition"),
							x = e.style ? Object.assign(Object.assign({}, v.style), e.style) : v.style;
						return a.a.createElement(n, f({}, O, {
							overflow: v.overflow,
							style: x,
							targetBox: g
						}))
					});
				class u extends o.Component {
					constructor() {
						super(...arguments), this.state = {
							containerHeight: null,
							isOpen: !1,
							mounted: !1
						}, this.target = null
					}
					componentDidMount() {
						this.target = this.props.tooltipTarget || document.getElementById(this.props.tooltipId), this.props.isOpen && i.a.write(() => {
							this.setState({
								mounted: !0
							})
						})
					}
					componentDidUpdate() {
						this.target = this.props.tooltipTarget || document.getElementById(this.props.tooltipId)
					}
					static getDerivedStateFromProps(e, t) {
						if (t.isOpen === e.isOpen) return null;
						return {
							containerHeight: e.isOpen && !t.isOpen && e.container ? e.container.scrollHeight : null,
							isOpen: e.isOpen
						}
					}
					render() {
						if (!this.props.isOpen) return this.props.renderContentsHidden ? a.a.createElement(p, null, this.props.children) : null;
						const {
							isOpen: e,
							tooltipId: t,
							tooltipTarget: n
						} = this.props, {
							containerHeight: o,
							mounted: i
						} = this.state, d = s()(this.props, "isOpen"), l = t ? this.target : n, u = "".concat(e, "-").concat(i, "-").concat(t || "");
						return a.a.createElement(c.a, {
							key: u,
							container: this.props.container
						}, a.a.createElement(r, f({}, d, {
							containerHeight: o,
							target: l
						})))
					}
				}
				return u
			}
		},
		"./src/higherOrderComponents/sizeMe.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/omit.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-dom/index.js"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e) {
				return e.displayName || e.name || "Component"
			}
			class u extends o.Component {
				render() {
					return o.Children.only(this.props.children)
				}
			}
			u.displayName = "SizeMeReferenceWrapper";
			const m = e => {
				let {
					style: t
				} = e;
				const n = {
					style: t || {
						width: "100%",
						height: "100%"
					}
				};
				return a.a.createElement("div", n)
			};
			m.displayName = "SizeMePlaceholder", t.a = function(e) {
				const t = function(e) {
					const t = t => {
						const {
							domEl: n,
							explicitRef: r,
							placeholder: o,
							size: i,
							style: c
						} = t, l = s()(t, "explicitRef", "size", "style"), p = "object" != typeof i || "number" != typeof i.width && "number" != typeof i.height, f = {
							domEl: n,
							style: c
						};
						"object" == typeof i && (f.size = i);
						const b = p && !1 !== o ? a.a.createElement(m, {
							style: c
						}) : a.a.createElement(e, d({}, f, l));
						return a.a.createElement(u, {
							ref: r
						}, b)
					};
					return t.displayName = "SizeMeRenderer(".concat(l(e), ")"), t
				}(e);
				class n extends a.a.Component {
					constructor() {
						super(...arguments), this.state = {
							width: void 0,
							height: void 0
						}, this.refCallback = e => {
							this.reactInst = e
						}, this.hasSizeChanged = (e, t) => {
							const n = e,
								r = t;
							return Number(n.height).toFixed(0) !== Number(r.height).toFixed(0) || Number(n.width).toFixed(0) !== Number(r.width).toFixed(0)
						}, this.checkIfSizeChanged = e => {
							const {
								width: t,
								height: n
							} = e.getBoundingClientRect(), r = {
								width: t,
								height: n
							};
							this.hasSizeChanged(this.state, r) && this.setState(r)
						}
					}
					componentDidMount() {
						this.handleDOMNode()
					}
					componentDidUpdate() {
						this.handleDOMNode()
					}
					componentWillUnmount() {
						this.hasSizeChanged = () => !1, this.checkIfSizeChanged = e => void 0, this.domEl && (this.domEl = null)
					}
					handleDOMNode() {
						const e = this.reactInst && c.a.findDOMNode(this.reactInst);
						e ? (this.domEl = e, this.checkIfSizeChanged(this.domEl)) : this.domEl && (this.domEl = null)
					}
					render() {
						const e = Object.assign({}, this.state);
						return a.a.createElement(t, d({
							domEl: this.domEl,
							explicitRef: this.refCallback,
							size: e
						}, this.props))
					}
				}
				return n.displayName = "SizeMe(".concat(l(e), ")"), n
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => s.a.createElement(e, t)
			}
		},
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/CSSVariableProvider/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function i(e) {
				return t => s.a.createElement(o.b.Consumer, null, n => s.a.createElement(e, a({
					theme: n
				}, t)))
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class r {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class s {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new s(t);
					return e.forEach(e => n.push(e)), n
				}
				first() {
					if (this.tail) return this.tail.value
				}
				firstNode() {
					if (this.tail) return this.tail
				}
				forEach(e) {
					let t = this.tail;
					for (; t;) e(t.value), t = t.next
				}
				get(e) {
					const t = this.getNode(e);
					if (t) return t.value
				}
				getNode(e) {
					return this.itemsByKey[e]
				}
				has(e) {
					return e in this.itemsByKey
				}
				insertAfter(e, t) {
					const n = t instanceof r ? t : new r(t),
						s = this.getNode(e);
					if (!s) throw new Error("Cannot find item with key ".concat(e));
					n.prev = s, n.next = s.next, s.next = n, n.next && (n.next.prev = n);
					const o = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof r ? t : new r(t),
						s = this.getNode(e);
					if (!s) throw new Error("Cannot find item with key ".concat(e));
					n.next = s, n.prev = s.prev, s.prev = n, n.prev && (n.prev.next = n);
					const o = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				last() {
					if (this.head) return this.head.value
				}
				lastNode() {
					if (this.head) return this.head
				}
				pop() {
					if (!this.head) return;
					return this.removeNode(this.head).value
				}
				push(e) {
					const t = e instanceof r ? e : new r(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof r ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
				remove(e) {
					const t = this.getNode(e);
					if (t) return this.removeNode(t).value
				}
				removeNode(e) {
					return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.tail && (this.tail = e.next), e === this.head && (this.head = e.prev), e.next = void 0, e.prev = void 0, this.itemsByKey[e.value[this.key]] = void 0, this.length--, e
				}
				shift() {
					if (!this.tail) return;
					return this.removeNode(this.tail).value
				}
				toArray() {
					const e = [];
					return this.forEach(t => e.push(t)), e
				}
				unshift(e) {
					const t = e instanceof r ? e : new r(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof r ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/lib/lessComponent.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
					}
					return n
				};
			const i = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noindex", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview", "svg", "animate", "animateMotion", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "switch", "symbol", "text", "textPath", "tspan", "use", "view"],
				c = (e, t, n) => {
					const r = n[t];
					class i extends s.a.PureComponent {
						render() {
							const t = this.props,
								{
									className: n,
									innerRef: i
								} = t,
								c = a(t, ["className", "innerRef"]);
							return s.a.createElement(e, Object.assign(Object.assign({}, c), {
								ref: i,
								className: Object(o.a)(r, n)
							}))
						}
					}
					return i.cssClassName = r, i.displayName = t, i
				},
				d = {};
			for (const l of i) d[l] = (e, t) => c(l, e, t);
			t.a = Object.assign(Object.assign({}, d), {
				wrapped: (e, t, n) => {
					const r = n[t];
					class i extends s.a.PureComponent {
						render() {
							const t = this.props,
								{
									className: n
								} = t,
								i = a(t, ["className"]);
							return s.a.createElement(e, Object.assign(Object.assign({}, i), {
								className: Object(o.a)(r, n)
							}))
						}
					}
					return i.cssClassName = r, i.displayName = t, i
				}
			})
		},
		"./src/reddit/actions/survey/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "SURVEY__TRIGGER_SCROLL_COUNTED",
				s = "SURVEY__POST_DISMISS_COUNTED"
		},
		"./src/reddit/actions/survey/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/helpers/localStorage/index.ts"),
				a = n("./src/reddit/actions/survey/constants.ts");
			const i = Object(r.a)(a.b),
				c = Object(r.a)(a.a),
				d = () => async (e, t) => {
					const n = t().user.prefs.surveyLastSeenTime,
						r = Object(o.z)();
					n && (!r || r && n > r) ? Object(o.kb)(n) : r && e(Object(s.H)({
						surveyLastSeenTime: r
					}, !1))
				}
		},
		"./src/reddit/components/HiddenDiv.m.less": function(e, t, n) {
			e.exports = {
				Component: "_1VhYfuKTAdUU_3j4cMjkr5",
				component: "_1VhYfuKTAdUU_3j4cMjkr5"
			}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/constants/componentSizes.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				d = n.n(c);
			const l = Object(s.createContext)(null),
				u = Object(s.createContext)(null);
			class m extends o.a.Component {
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
					return o.a.createElement(l.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(u.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const p = a.f + 10,
				f = o.a.memo(() => o.a.createElement(l.Consumer, null, e => e && o.a.createElement("div", {
					className: d.a.wrapper
				}, o.a.createElement(i.o, {
					className: d.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -p)
					}
				}, r.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), o.a.createElement("div", {
					className: d.a.rightBorder
				})))),
				b = o.a.memo(() => o.a.createElement(u.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "t", (function() {
				return _
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "r", (function() {
				return E
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				c = n.n(i);
			const d = r.a.wrapped(a.a, "CloseIcon", c.a),
				l = r.a.section("ModalBody", c.a),
				u = r.a.section("ModalPostPreview", c.a),
				m = r.a.p("ModalText", c.a),
				p = r.a.div("ModalSmallText", c.a),
				f = r.a.div("ModalDescriptionText", c.a),
				b = r.a.div("ModalMetaText", c.a),
				h = r.a.label("ModalFormItem", c.a),
				y = r.a.wrapped(o.a, "ModalInput", c.a),
				g = r.a.label("ModalInputLabel", c.a),
				v = r.a.footer("ModalFooter", c.a),
				O = r.a.header("ModalHeader", c.a),
				x = r.a.div("ModalTitle", c.a),
				j = r.a.div("ModalAnnotation", c.a),
				C = r.a.div("ModalMain", c.a),
				w = r.a.textarea("TextArea", c.a),
				_ = r.a.wrapped(s.i, "WarningButton", c.a),
				N = r.a.wrapped(s.i, "PrimaryButton", c.a),
				S = r.a.wrapped(s.l, "CancelButton", c.a),
				E = r.a.wrapped(s.o, "RemoveButton", c.a)
		},
		"./src/reddit/components/Portal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/lib/CSSVariableProvider/index.tsx");
			class o extends r.PureComponent {
				render() {
					const {
						children: e,
						container: t
					} = this.props;
					return Object(s.d)(e, t || document.body)
				}
			}
		},
		"./src/reddit/components/SEOTitle/index.m.less": function(e, t, n) {
			e.exports = {
				Title: "_eYtD2XCVieq6emjKBH3m",
				title: "_eYtD2XCVieq6emjKBH3m"
			}
		},
		"./src/reddit/components/SEOTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s, o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(r || (r = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(s || (s = {}));
			var d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/helpers/postCollection.ts");
			const u = [d.Bb.COMMENTS, d.Bb.COLLECTION_COMMENTS],
				m = (e, t) => {
					if (!e) return [];
					const n = u.includes(e),
						s = e === d.Bb.COLLECTION_COMMENTS || t && Object(l.a)(t),
						o = d.N.has(e),
						a = d.sb.has(e),
						i = e === d.Bb.SUBREDDIT,
						c = e === d.Bb.TOPIC;
					let m, p, f;
					return o && !i || a ? m = r.HeaderSelector : s ? m = r.Collection : n ? m = r.PostComments : c && (m = r.TopicHeader), (o || a || s || n) && (p = r.Widget), (o || n) && (f = r.PostItem), [m, p, f]
				};
			var p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/components/SEOTitle/index.m.less"),
				h = n.n(b);
			const y = e => {
					let {
						level: t,
						children: n
					} = e;
					const r = "h".concat(t);
					return a.a.createElement(r, {
						className: h.a.Title
					}, n)
				},
				g = Object(p.t)(),
				v = Object(i.b)(() => Object(c.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					return n && Object(f.n)(e, {
						page: n
					})
				}, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return n && n.meta && n.meta.name
				}, (e, t) => {
					let {
						type: n
					} = t;
					return n
				}, (e, t, n) => ({
					level: m(t, e).indexOf(n) + 1 || void 0
				})));
			class O extends a.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? a.a.createElement(y, {
						level: t
					}, e) : a.a.createElement(a.a.Fragment, null, e)
				}
			}
			t.b = g(v(O))
		},
		"./src/reddit/components/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				Image: "_34CfAAowTqdbNDYXz5tBTW",
				image: "_34CfAAowTqdbNDYXz5tBTW",
				UserIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				userIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				PlanetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				planetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				BackupImage: "RK004G8fbNOkGdNLEzm67",
				backupImage: "RK004G8fbNOkGdNLEzm67",
				iconContainer: "_7nyhK_sDI_8i22XNdcMzb",
				editableIcon: "_1AxWRIyg1lV9-r_CmqYj0o",
				flexContainer: "-Mpi2pdgifDBOdpUYX2vh",
				clickableUploadText: "_3H6u2CWhsluIPVF14GpEaA",
				inTopBar: "_1UpdjN7u66BU606z97t4HS",
				emptyUploadButton: "ndkYE2hc8Y-V3NHpSYvxA",
				transition: "_1iA7YdCRjbU9Rd_2VNGvsw",
				emptyEditableIcon: "_1h9JeZaSDxkh67Ns3QVUP2",
				emptyPlusButton: "Dh1qxsy_tIctL9f4LEzv9",
				imageUploader: "JBITiVY1zX1mMDq-sHkru",
				loadingIcon: "_3Dk8QRKhQImYqds2lSF6G4",
				loadingIconInTopBar: "_1U3KLnHX2TdXL5lNrrv4EW",
				emptyEditableIconInTopBar: "_3-i_fdY8zqHIo3CjuVzTYE"
			}
		},
		"./src/reddit/components/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/components/UserIcon/index.tsx"),
				i = n("./src/reddit/constants/colors.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				l = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				u = n("./src/reddit/models/Subreddit/index.ts"),
				m = n("./src/reddit/components/SubredditIcon/index.m.less"),
				p = n.n(m),
				f = n("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var h = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const y = f.a.wrapped(a.a, "UserIcon", p.a),
				g = f.a.img("Image", p.a),
				v = e => {
					var {
						iconColor: t
					} = e, n = h(e, ["iconColor"]);
					return o.a.createElement(g, b({
						style: {
							backgroundColor: t || ""
						}
					}, n))
				},
				O = f.a.wrapped(e => {
					var {
						className: t,
						color: n
					} = e, r = h(e, ["className", "color"]);
					return o.a.createElement(l.a, b({
						className: t,
						style: {
							background: n || ""
						}
					}, r))
				}, "PlanetIcon", p.a),
				x = f.a.div("BackupImage", p.a),
				j = Object(c.t)();
			t.b = j(e => {
				let t, n, s;
				if (e.subredditOrProfile) {
					const {
						url: r,
						color: a
					} = Object(d.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(u.g)(e.subredditOrProfile) ? s = o.a.createElement(y, {
						className: e.className,
						iconUrl: r,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (t = r, n = a)
				} else t = e.iconUrl, n = e.primaryColor || i.a.alienblue;
				return t ? s = o.a.createElement(v, {
					alt: r.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: n,
					role: "presentation",
					src: t
				}) : s || (s = o.a.createElement(O, {
					className: e.className,
					color: e.redditStyle ? i.a.alienblue : n,
					role: "presentation"
				})), e.linkTo ? o.a.createElement("a", {
					href: e.linkTo
				}, s) : o.a.createElement(o.a.Fragment, null, s)
			})
		},
		"./src/reddit/components/UserIcon/UserIcon.m.less": function(e, t, n) {
			e.exports = {
				DefaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				defaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				UserIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				userIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				mNightmode: "_2aVSEFJsIE0M-4uRE-U24H"
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				d = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				l = n.n(d);
			const u = "".concat(r.a.assetPath, "/img/avatar_over18_square.png"),
				m = e => !e || e.includes("avatar_default_");
			t.a = e => {
				const {
					className: t,
					iconUrl: n,
					isCurrentUser: r,
					isNightMode: o,
					isNSFW: d,
					nsfwIconUrl: p,
					shouldHideNSFW: f
				} = e;
				if (r && m(n) || !r && !n) return a.a.createElement(c.a, {
					className: Object(i.a)(l.a.DefaultUserIcon, t, {
						[l.a.mNightmode]: o
					})
				});
				const b = !r && d && f ? p || u : n;
				return a.a.createElement("img", {
					alt: s.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(i.a)(l.a.UserIcon, t),
					src: b
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/models/User/index.ts"),
				c = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				d = n("./src/reddit/selectors/user.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const m = Object(a.c)({
					currentUser: d.i,
					isNightMode: d.S,
					shouldHideNSFW: d.z,
					user: d.gb
				}),
				p = Object(o.b)(m);
			t.a = p(e => {
				const {
					currentUser: t,
					iconUrl: n,
					isNSFW: r,
					user: o,
					userName: a
				} = e, d = u(e, ["currentUser", "iconUrl", "isNSFW", "user", "userName"]), m = !!t && Object(i.e)(t) === a, p = m && t.accountIcon || o && o.accountIcon || n, f = o ? o.isNSFW : r;
				return s.a.createElement(c.a, l({}, d, {
					iconUrl: p,
					isCurrentUser: m,
					isNSFW: f
				}))
			})
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, n) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "d", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, n) => r => {
				const s = e(r),
					a = t(r),
					i = !s && a;
				return Object(o.a)(n.baseClassName, r.className, {
					[n.mIsInteractive]: a,
					[n.mIsActive]: s,
					[n.mIsVoteable]: i
				})
			};
			var c = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = n("./src/reddit/models/Vote/index.ts"),
				l = n("./src/reddit/controls/Downvote/index.m.less"),
				u = n.n(l);
			const m = i(e => {
				let {
					voteState: t
				} = e;
				return t === d.a.downvoted
			}, e => {
				let {
					interactive: t
				} = e;
				return !1 !== t
			}, Object.assign(Object.assign({}, u.a), {
				baseClassName: u.a.Downvote
			}));
			var p = e => s.a.createElement(c.b, {
					className: m(e),
					compact: e.compact
				}),
				f = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				b = n("./src/reddit/controls/Upvote/index.m.less"),
				h = n.n(b);
			const y = i(e => {
				let {
					voteState: t
				} = e;
				return t === d.a.upvoted
			}, e => {
				let {
					interactive: t
				} = e;
				return !1 !== t
			}, Object.assign(Object.assign({}, h.a), {
				baseClassName: h.a.Upvote
			}));
			var g = e => s.a.createElement(f.b, {
					className: y(e),
					compact: e.compact
				}),
				v = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				O = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				x = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				C = n.n(j);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const N = e => Object(o.a)({
					[C.a.compact]: e.compact,
					[C.a.dark]: Object(O.b)(Object(v.a)(e)),
					[C.a.nightmode]: e.isNightmode
				}),
				S = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(x.a)(e), n = {
						"--verticalvotes-customdownvote-active": "url(".concat(t.downvoteActive, ")"),
						"--verticalvotes-customdownvote-inactive": "url(".concat(t.downvoteInactive, ")")
					}, {
						theme: r
					} = e, a = _(e, ["theme"]);
					return s.a.createElement("button", w({}, a, {
						className: Object(o.a)(C.a.customDownvote, N(e), {
							[C.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				E = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(x.a)(e), n = {
						"--verticalvotes-customupvote-active": "url(".concat(t.upvoteActive, ")"),
						"--verticalvotes-customupvote-inactive": "url(".concat(t.upvoteInactive, ")")
					}, {
						theme: r
					} = e, a = _(e, ["theme"]);
					return s.a.createElement("button", w({}, a, {
						className: Object(o.a)(C.a.customUpvote, N(e), {
							[C.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				I = p,
				P = g
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(s.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.j,
				isBladeEditorDirty: i.i,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(r.b)(d, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					requestCloseBlade: () => n && e(Object(o.h)(n))
				}
			})
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "q", (function() {
				return f
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "t", (function() {
				return g
			})), n.d(t, "v", (function() {
				return v
			})), n.d(t, "w", (function() {
				return O
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "p", (function() {
				return _
			}));
			const r = 284,
				s = 450,
				o = 800,
				a = 284,
				i = 48,
				c = 640,
				d = 1600,
				l = 1280,
				u = 40,
				m = 48,
				p = 24,
				f = 24,
				b = 312,
				h = 40,
				y = 270,
				g = 106,
				v = 5,
				O = 16,
				x = 1250,
				j = 82,
				C = 48,
				w = 36,
				_ = 37
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "k", (function() {
				return i
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "o", (function() {
				return l
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return y
			}));
			const r = "DraftEditor-contentwrapper",
				s = "public-DraftStyleDefault-block",
				o = "data-offset-key",
				a = "hovered",
				i = "scrollerItem",
				c = "threadline",
				d = "header-user-dropdown",
				l = "voteButton",
				u = "unsubscribe-icon-button",
				m = "RichTextJSON-root",
				p = "ImageBox-image",
				f = "content-type-link",
				b = "styled-outbound-link",
				h = "ListingLayout-backgroundContainer",
				y = "ListingLayout-outerContainer"
		},
		"./src/reddit/constants/elementIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			const r = "bladeContainer",
				s = "header",
				o = "overlayScrollContainer",
				a = "collectionPostListScrollContainer"
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var r, s;
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(r || (r = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(s || (s = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = 480,
				s = 960,
				o = 1200
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			const r = 4,
				s = 51,
				o = 60,
				a = 70,
				i = 90,
				c = 99,
				d = 100,
				l = 100
		},
		"./src/reddit/contexts/Buttons2020.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js");
			const s = n.n(r).a.createContext(!1);
			t.a = s
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const a = s.a.createContext(!1);

			function i(e) {
				return class extends s.a.Component {
					render() {
						return s.a.createElement(a.Consumer, null, t => s.a.createElement(e, o({}, this.props, {
							isOverlay: t
						})))
					}
				}
			}
		},
		"./src/reddit/controls/Button/index.m.less": function(e, t, n) {
			e.exports = {
				Button2020: "_3t7aUZU2b2KWwDQkfT2eHl",
				button2020: "_3t7aUZU2b2KWwDQkfT2eHl",
				primary: "_10BQ7pjWbeYP63SAPNS8Ts",
				active: "_39a0Mt5b1i2joAqIaEHOWJ",
				redditStyle: "_2nelDm85zKKmuD94NequP0",
				DangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				dangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				GoldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				goldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				PremiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				premiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				secondary: "_2tU8R9NTqhvBrhoNAXWWcP",
				tertiary: "_4Glnzr5LA7bNBGMWGW4pU",
				xs: "_1mmH5jtmYRv7YN8-lFAW8i",
				Icon: "_1mvTX6krm3Q2d1CSyUm28s",
				icon: "_1mvTX6krm3Q2d1CSyUm28s",
				isLeft: "_1HHR_ND8U6x6YrIqKFeXZy",
				isRight: "_3tKmDp5VAtgWvabEmFkJ7T",
				s: "mrrW4Uc8JRv6Og14PMCrs",
				m: "_3zC4xPrZAPAaRObUSeD561",
				l: "diEew4ZHlKwfzWqiaC0SP",
				xl: "_1IdnXbn2m63V6pyZAOW7u3",
				isFullWidth: "_34mIRHpFtnJ0Sk97S2Z3D9",
				isSquare: "_3ojSE1JW7jxNzUzZK8kt7m",
				Button: "_2iuoyPiKHN3kfOoeIQalDT",
				button: "_2iuoyPiKHN3kfOoeIQalDT",
				DangerButton: "_1K_eZyG6kthwPn55PD-EMM",
				dangerButton: "_1K_eZyG6kthwPn55PD-EMM",
				ExtraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				extraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				GoldButton: "_2GYoN_LmWsKeeYnfg8wF7N",
				goldButton: "_2GYoN_LmWsKeeYnfg8wF7N",
				InlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				inlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				PremiumButton: "_14IRbTHWqATJbFJ9PgPswU",
				premiumButton: "_14IRbTHWqATJbFJ9PgPswU",
				PrimaryButton: "_2JBsHFobuapzGwpHQjrDlD",
				primaryButton: "_2JBsHFobuapzGwpHQjrDlD",
				PrimaryLinkButton: "wLV79_wV-ziNiWmf3Y7OV",
				primaryLinkButton: "wLV79_wV-ziNiWmf3Y7OV",
				PrimaryRouterLink: "_3UhcBirLMXHSbN5vYYBGSF",
				primaryRouterLink: "_3UhcBirLMXHSbN5vYYBGSF",
				SecondaryButton: "PiO8QDmoJoOL2sDjJAk4C",
				secondaryButton: "PiO8QDmoJoOL2sDjJAk4C",
				SecondaryLinkButton: "_1HunhFR-0b-AYs0WG9mU_P",
				secondaryLinkButton: "_1HunhFR-0b-AYs0WG9mU_P",
				SecondaryRouterLink: "_2yhUdcPyG1k3qsmDb4y6u_",
				secondaryRouterLink: "_2yhUdcPyG1k3qsmDb4y6u_",
				TertiaryButton: "_1McO-Omm_mC2bkTnVgD6NV",
				tertiaryButton: "_1McO-Omm_mC2bkTnVgD6NV",
				TertiaryLinkButton: "_9Yn-qhIEvQgFU6jnrKkSC",
				tertiaryLinkButton: "_9Yn-qhIEvQgFU6jnrKkSC",
				TertiaryRouterLink: "SuTcOCtRzb-pPZYaAZTjh",
				tertiaryRouterLink: "SuTcOCtRzb-pPZYaAZTjh",
				ChatButton: "_13twe55MPRo1LqypxB-LJx",
				chatButton: "_13twe55MPRo1LqypxB-LJx"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "l", (function() {
				return N
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "d", (function() {
				return B
			})), n.d(t, "g", (function() {
				return T
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/reddit/hooks/useButtons2020.ts"),
				c = n("./src/reddit/controls/Button/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const m = {
				role: "button",
				tabIndex: 0
			};
			var p, f, b, h;
			! function(e) {
				e.XS = "xs", e.S = "s", e.M = "m", e.L = "l", e.XL = "xl"
			}(p || (p = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain"
			}(f || (f = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(b || (b = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(h || (h = {}));
			const y = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconPosition: r = b.C,
						isFullWidth: a = !1,
						isSquare: c = !1,
						children: y,
						className: x,
						kind: j = h.Button,
						legacyClassName: C,
						priority: w = f.Primary,
						redditStyle: _,
						size: N = p.S,
						text: S
					} = e, E = u(e, ["data-redditstyle", "Icon", "iconPosition", "isFullWidth", "isSquare", "children", "className", "kind", "legacyClassName", "priority", "redditStyle", "size", "text"]), I = (e => {
						let {
							baseClassName: t,
							redditStyle: n,
							dataRedditStyle: r,
							is2020: s,
							isFullWidth: a,
							isSquare: i,
							legacyClassName: c,
							priority: l,
							size: u
						} = e;
						return s ? Object(o.a)(t, d.a.Button2020, d.a[l], d.a[u], {
							[d.a.isFullWidth]: a,
							[d.a.isSquare]: i,
							[d.a.redditStyle]: !(!n && !r)
						}) : Object(o.a)(t, c, {
							[d.a.redditStyle]: !(!n && !r)
						})
					})({
						baseClassName: x,
						dataRedditStyle: t,
						is2020: Object(i.a)(),
						isFullWidth: a,
						isSquare: c,
						legacyClassName: C,
						priority: w,
						redditStyle: _,
						size: N
					}), P = (e => {
						let {
							children: t,
							text: n,
							Icon: r,
							iconPosition: a
						} = e;
						return t || (r ? s.a.createElement(s.a.Fragment, null, (a === b.C || a === b.L) && s.a.createElement(r, {
							className: Object(o.a)(d.a.Icon, {
								[d.a.isLeft]: a === b.L,
								[d.a.isIconOnly]: !n
							})
						}), n, a === b.R && s.a.createElement(r, {
							className: Object(o.a)(d.a.Icon, d.a.isRight)
						})) : n)
					})({
						children: y,
						text: S,
						Icon: n,
						iconPosition: r,
						size: N
					});
					return j === h.InternalLink && (e => "to" in e)(E) ? s.a.createElement(g, l({}, m, E, {
						className: I
					}), P) : j === h.ExternalLink && (e => "href" in e)(E) ? s.a.createElement(v, l({}, m, E, {
						className: I
					}), P) : s.a.createElement(O, l({}, m, E, {
						className: I
					}), P)
				},
				g = e => s.a.createElement(a.a, e),
				v = e => s.a.createElement("a", e),
				O = e => s.a.createElement("button", e),
				x = e => s.a.createElement(y, l({
					kind: h.ExternalLink,
					priority: f.Primary,
					legacyClassName: d.a.PrimaryLinkButton
				}, e)),
				j = e => s.a.createElement(y, l({
					kind: h.InternalLink,
					priority: f.Primary,
					legacyClassName: d.a.PrimaryRouterLink
				}, e)),
				C = e => s.a.createElement(y, l({
					kind: h.Button,
					priority: f.Primary,
					legacyClassName: d.a.PrimaryButton
				}, e)),
				w = e => s.a.createElement(y, l({
					kind: h.ExternalLink,
					priority: f.Secondary,
					legacyClassName: d.a.SecondaryLinkButton
				}, e)),
				_ = e => s.a.createElement(y, l({
					kind: h.InternalLink,
					priority: f.Secondary,
					legacyClassName: d.a.SecondaryRouterLink
				}, e)),
				N = e => s.a.createElement(y, l({
					kind: h.Button,
					priority: f.Secondary,
					legacyClassName: d.a.SecondaryButton
				}, e)),
				S = e => s.a.createElement(y, l({
					kind: h.InternalLink,
					priority: f.Tertiary,
					legacyClassName: d.a.TertiaryRouterLink
				}, e)),
				E = e => s.a.createElement(y, l({
					kind: h.Button,
					priority: f.Tertiary,
					legacyClassName: d.a.TertiaryButton
				}, e)),
				I = e => {
					var {
						className: t
					} = e, n = u(e, ["className"]);
					return s.a.createElement(y, l({
						kind: h.Button,
						priority: f.Primary,
						className: Object(o.a)(t, d.a.DangerButtonColors),
						legacyClassName: d.a.DangerButton
					}, n))
				},
				P = e => {
					var {
						className: t
					} = e, n = u(e, ["className"]);
					return s.a.createElement(y, l({
						kind: h.Button,
						className: Object(o.a)(t, d.a.GoldButtonColors),
						legacyClassName: d.a.GoldButton
					}, n))
				},
				k = e => {
					var {
						className: t
					} = e, n = u(e, ["className"]);
					return s.a.createElement(y, l({
						kind: h.Button,
						className: Object(o.a)(t, d.a.PremiumButtonColors),
						legacyClassName: d.a.PremiumButton
					}, n))
				},
				B = e => {
					var {
						className: t
					} = e, n = u(e, ["className"]);
					return s.a.createElement(y, l({
						kind: h.Button,
						className: Object(o.a)(t, d.a.ChatButton)
					}, n))
				},
				T = e => {
					var {
						className: t
					} = e, n = u(e, ["className"]);
					return s.a.createElement(y, l({
						kind: h.Button,
						className: Object(o.a)(t, d.a.InlineTextButton)
					}, n))
				};
			t.q = y
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdownTriangle: "_1oxgVV3q47KbjEKqP5CHuM",
				iconStyles: "Ls9uHSAO9p2g7EMya2KXp",
				dropdown: "_2uYY-KeuYHKiwl-9aF0UiL"
			}
		},
		"./src/reddit/controls/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/domUtils/index.ts"),
				i = n("./src/reddit/constants/zIndex.ts"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				d = n.n(c);
			class l extends s.a.Component {
				componentDidMount() {
					this.props.onDropdownMounted && this.props.onDropdownMounted(), this.props.noFocus || this.ref && this.ref.focus({
						preventScroll: this.props.isOverlay
					})
				}
				componentWillUnmount() {
					Object(a.a)(this.props.tooltipId)
				}
				render() {
					const e = this.props,
						t = {};
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? i.d + 1 : i.c)), s.a.createElement("div", {
						className: Object(o.a)(d.a.dropdown, e.className),
						id: this.props.id,
						ref: e => this.ref = e,
						role: "menu",
						style: Object.assign(Object.assign({}, t), e.style),
						tabIndex: -1,
						onScroll: e.onScroll
					}, e.children)
				}
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			class p extends s.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const e = this.props,
						{
							className: t,
							closeModal: n
						} = e,
						r = m(e, ["className", "closeModal"]);
					return s.a.createElement("input", u({
						className: Object(a.a)(l.a.input, t),
						onKeyDown: this.handleKeyDown
					}, r))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: i.f
			})(p)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/InternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				disabledLink: "_1tQt2CUWT3M7NNSMoh_o_4"
			}
		},
		"./src/reddit/controls/InternalLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/helpers/path/index.ts"),
				c = n("./src/reddit/controls/InternalLink/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};

			function m(e) {
				var {
					children: t,
					className: n,
					disabled: r,
					replace: c,
					to: m
				} = e, p = u(e, ["children", "className", "disabled", "replace", "to"]);
				return r ? s.a.createElement("span", {
					className: Object(a.a)(d.a.disabledLink, n)
				}, t) : ("string" == typeof m && (m = Object(i.b)(m)), s.a.createElement(o.a, l({
					className: n,
					to: m
				}, p), t))
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return w
			})), n.d(t, "c", (function() {
				return _
			}));
			var r = n("./node_modules/lodash/omit.js"),
				s = n.n(r),
				o = n("./node_modules/query-string/index.js"),
				a = n.n(o),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/addQueryParams/index.ts");
			var m = (e, t) => t ? Object(u.a)(e, {
					user_id: t
				}) : e,
				p = n("./src/lib/opener/index.ts"),
				f = n("./src/lib/redditId/index.ts"),
				b = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/constants/adEvents.ts"),
				y = n("./src/reddit/helpers/getVendorMetadata.ts"),
				g = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/selectors/user.ts");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(l.a)(v.a, v.i, (e, t) => {
					let {
						isSponsored: n,
						postId: r
					} = t;
					return n && r ? Object(g.b)(e, r) : null
				}, g.N, (e, t, n, r) => ({
					allowClickTracking: e,
					basePixelMetadata: n,
					userId: t ? Object(f.a)(t.id) : null,
					post: r
				})),
				j = Object(d.b)(x, e => ({
					fireAdPixelsOfType: (t, n) => e(Object(b.t)(t, n))
				})),
				C = (e, t, n, r) => {
					const s = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					r && t.outboundUrl && s && (e.href = m(t.outboundUrl, n))
				},
				w = (e, t, n) => {
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(n)) {
						const r = Object(y.a)(e, t, h.a.Click),
							{
								url: s,
								query: o
							} = a.a.parseUrl(n);
						return a.a.stringifyUrl({
							url: s,
							query: Object.assign(Object.assign({}, o), r)
						})
					}
					return n
				},
				_ = (e, t, n) => e.href = w(t, n, e.href),
				N = j(e => {
					const {
						allowClickTracking: t,
						basePixelMetadata: n,
						href: r,
						isSponsored: o,
						post: a,
						postId: i,
						source: d,
						userId: l
					} = e;
					let u = s()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "source", "userId"]);
					const m = d && d.outboundUrl && o ? d.outboundUrl : r;
					return u = Object.assign(Object.assign({}, u), {
						href: m,
						rel: p.a,
						target: p.c.BLANK
					}), !d || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: n
						} = e;
						return !(!t || !n) && (t > n + 3e5 || t < n - 36e5)
					})(d) ? c.a.createElement("a", u) : c.a.createElement("a", O({}, u, {
						onMouseDown: e => {
							if (!(d && d.outboundUrl && o)) return !(1 !== e.button && 2 !== e.button && !e.ctrlKey) || void C(e.currentTarget, d, l, t);
							_(e.currentTarget, i, n)
						},
						onClick: () => {
							a && Object(b.t)(a, h.a.Click)
						},
						onMouseLeave: e => {
							o || ((e, t) => {
								e.href = t
							})(e.currentTarget, m)
						},
						onTouchStart: e => C(e.currentTarget, d, l, t)
					}))
				});
			t.b = N
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, n) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/TextButton/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("button", {
				children: e.children,
				className: Object(o.a)(i.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/brcast/dist/brcast.es.js");
			const s = Object(r.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/polished/dist/polished.es.js");
			var r = n("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function s(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(r.a)(e).post
			}
		},
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const o = e => Object(r.b)(e) < .6;

			function a(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.a.bodyText,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.b.bodyText;
				return o(e) ? n : t
			}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/elementIds.ts");
			let s;
			const o = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(r.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				a = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, s || (s = i(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = "".concat(s, "px");
					const t = document.getElementById(r.c);
					t && (t.style.marginRight = "".concat(s, "px"))
				},
				i = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				c = e => {
					if (!e || !document.body) return 0;
					const t = i(document.body),
						n = e.offsetWidth - e.scrollWidth;
					return t || n
				}
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			n("./src/reddit/constants/categories.tsx");
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: r.screen(e),
					profile: r.profile(e),
					subreddit: r.subreddit(e)
				}),
				o = e => t => Object.assign({
					source: "nav",
					action: "click",
					noun: e
				}, s(t)),
				a = e => t => Object.assign(Object.assign({}, s(t)), {
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => Object.assign(Object.assign({}, s(t)), {
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return g
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "q", (function() {
				return L
			})), n.d(t, "d", (function() {
				return M
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "p", (function() {
				return R
			}));
			n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makePostDraftPageKey/index.ts"),
				o = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = n("./src/reddit/helpers/routeKey/index.ts"),
				i = n("./src/reddit/helpers/trackers/postComposer.ts"),
				c = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				d = n("./src/reddit/models/Comment/index.ts"),
				l = n("./src/reddit/models/Post/index.ts"),
				u = n("./src/reddit/selectors/profile.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/trackers/searchResults.ts"),
				b = n("./src/reddit/selectors/postDraft.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				y = n("./src/telemetry/index.ts");
			const g = (e, t, n, i) => {
					const {
						route: u
					} = e, {
						name: m
					} = u.meta;
					if (m) switch (m) {
						case r.Bb.COMMENTS: {
							const {
								partialCommentId: r,
								partialPostId: s
							} = e.match.params, c = Object(l.m)(s), u = Object(a.a)(e, t, t.posts.models[c]);
							if (!u) return;
							const m = r && Object(d.e)(r),
								{
									sortToUse: p
								} = Object(o.a)(t, c);
							Object(y.a)(w(u, c, m, n, i, p)(t));
							break
						}
						case r.Bb.INDEX:
						case r.Bb.LISTING:
						case r.Bb.MULTIREDDIT:
						case r.Bb.SUBREDDIT: {
							const s = Object(a.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: o,
								queryParams: c
							} = e.match, {
								sort: d = (s.sort ? s.sort : r.O.HOT)
							} = o, l = c.t;
							Object(y.a)(v(s.listingKey, d, n, i, l)(t));
							break
						}
						case r.Bb.TOPIC: {
							const s = Object(a.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: o
							} = e.match, c = s.sort ? s.sort : r.P, {
								sort: d = c
							} = o;
							Object(y.a)(v(s.listingKey, d, n, i)(t));
							break
						}
						case r.Bb.PROFILE_OVERVIEW: {
							const s = Object(a.d)(e, t);
							if (!s) return;
							const {
								params: o,
								queryParams: c
							} = e.match, {
								sort: d = r.ub
							} = o, l = c.t;
							Object(y.a)(O(s, d, n, i, l)(t));
							break
						}
						case r.Bb.PROFILE_POSTS: {
							const s = Object(a.d)(e, t);
							if (!s) return;
							const {
								queryParams: o
							} = e.match, {
								sort: c = r.ub,
								t: d = r.Tb
							} = o;
							Object(y.a)(x(s, c, n, i, d)(t));
							break
						}
						case r.Bb.PROFILE_COMMENTS: {
							const s = Object(a.d)(e, t);
							if (!s) return;
							const {
								queryParams: o
							} = e.match, {
								sort: c = r.ub,
								t: d = r.Tb
							} = o;
							Object(y.a)(j(s, c, n, i, d)(t));
							break
						}
						case r.Bb.SETTINGS:
							e.match.params.page === r.Ob.Profile ? Object(c.j)(t) : Object(y.a)(B(n, i)(t));
							break;
						case r.Bb.POST_CREATION:
							break;
						case r.Bb.POST_DRAFT: {
							const {
								draftId: r
							} = e.match.params, o = Object(s.a)(e.match.params);
							if (!o) return;
							E(t, o, r, n, i);
							break
						}
						case r.Bb.SUBREDDIT_WIKI:
							Object(y.a)(U(n, i)(t));
							break;
						case r.Bb.COINS:
							Object(y.a)(I(n, i)(t));
							break;
						case r.Bb.PREMIUM:
							Object(y.a)(P(n, i)(t));
							break;
						case r.Bb.APPEAL:
							Object(y.a)(k(n, i)(t))
					}
				},
				v = (e, t, n, r, s, o) => a => {
					const {
						api: i
					} = a.listings.postOrder, c = !i.error[e] && !i.pending[e];
					return Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, h.defaults(a)), {
						actionInfo: h.actionInfo(a, {
							success: c
						}),
						customFeed: h.customFeed(a),
						listing: h.listing(a, e, {
							sort: t,
							sortTime: s
						}),
						subreddit: h.subreddit(a),
						timer: h.timer(n, r),
						userSubreddit: h.userSubreddit(a),
						adblock: h.adblock(a),
						postFlair: {
							title: o
						}
					})
				},
				O = (e, t, n, r, s) => o => {
					const a = h.listing(o, e);
					a && (a.sort = t, s && (a.sortTime = s));
					const {
						api: i
					} = o.listings.postOrder, c = !i.error[e] && !i.pending[e];
					return Object.assign(Object.assign({
						listing: a,
						source: "global",
						action: "view",
						noun: "screen"
					}, h.defaults(o)), {
						actionInfo: h.actionInfo(o, {
							success: c
						}),
						profile: h.profile(o),
						subreddit: h.subreddit(o),
						timer: h.timer(n, r),
						userSubreddit: h.userSubreddit(o),
						adblock: h.adblock(o)
					})
				},
				x = (e, t, n, r, s) => o => {
					const a = h.listing(o, e);
					a && (a.sort = t, s && (a.sortTime = s));
					const {
						api: i
					} = o.listings.postOrder, c = !i.error[e] && !i.pending[e];
					return Object.assign(Object.assign({
						listing: a,
						source: "global",
						action: "view",
						noun: "screen"
					}, h.defaults(o)), {
						actionInfo: h.actionInfo(o, {
							success: c
						}),
						profile: h.profile(o),
						subreddit: h.subreddit(o),
						timer: h.timer(n, r),
						userSubreddit: h.userSubreddit(o),
						adblock: h.adblock(o)
					})
				},
				j = (e, t, n, r, s) => o => {
					const a = h.profileComments(o, e);
					a && (a.sort = t, s && (a.sortTime = s));
					const {
						api: i
					} = o.profileCommentsPage, c = !i.error[e] && !i.pending[e];
					return Object.assign(Object.assign({
						listing: a,
						source: "global",
						action: "view",
						noun: "screen"
					}, h.defaults(o)), {
						actionInfo: h.actionInfo(o, {
							success: c
						}),
						profile: h.profile(o),
						subreddit: h.subreddit(o),
						timer: h.timer(n, r),
						userSubreddit: h.userSubreddit(o),
						adblock: h.adblock(o)
					})
				},
				C = e => (t, n) => r => {
					const s = !r.profilePrivatePage.api.error[e] && !r.profilePrivatePage.api.pending[e];
					return Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, h.defaults(r)), {
						actionInfo: h.actionInfo(r, {
							success: s
						}),
						profile: h.profile(r),
						subreddit: h.subreddit(r),
						timer: h.timer(n, t),
						userSubreddit: h.userSubreddit(r),
						adblock: h.adblock(r)
					})
				},
				w = (e, t, n, r, s, o) => a => {
					const {
						api: i
					} = a.commentsPage, c = !i.error[e] && !i.pending[e], d = Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, h.defaults(a)), {
						actionInfo: h.actionInfo(a, {
							success: c
						}),
						post: h.post(a, t),
						profile: h.profile(a),
						subreddit: h.subreddit(a),
						timer: h.timer(r, s),
						userSubreddit: h.userSubreddit(a),
						adblock: h.adblock(a),
						postEvent: h.postEventI13nSelector(a, {
							postId: t
						}),
						postCollection: h.postCollectionI13nSelector(a, {
							postId: t
						}),
						listing: h.listing(a, void 0, {
							sort: o
						})
					});
					return n && (d.comment = h.comment(a, n)), d
				},
				_ = (e, t, n) => r => {
					const s = r.creations.api.page.fetched[e],
						o = r.platform.currentPage ? r.platform.currentPage.queryParams.source_id : void 0;
					return Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, h.defaults(r)), {
						actionInfo: h.actionInfo(r, {
							success: s
						}),
						post: o ? h.post(r, o) : void 0,
						subreddit: h.subreddit(r),
						timer: h.timer(t, n),
						userSubreddit: h.userSubreddit(r),
						adblock: h.adblock(r)
					})
				},
				N = (e, t, n, r) => {
					Object(y.a)(Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, h.defaults(e)), {
						actionInfo: h.actionInfo(e, {
							success: t
						}),
						profile: h.profileById(e, Object(u.m)(e, r)),
						subreddit: h.subredditById(e, Object(m.G)(e, n)),
						userSubreddit: h.userSubreddit(e),
						adblock: h.adblock(e)
					}))
				},
				S = (e, t, n, r) => {
					Object(y.a)(Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, h.defaults(e)), {
						profile: h.profileById(e, Object(u.m)(e, r)),
						subreddit: h.subredditById(e, Object(m.G)(e, n)),
						userSubreddit: h.userSubreddit(e),
						adblock: h.adblock(e)
					}))
				},
				E = (e, t, n, r, s) => {
					const o = e.creations.api.page.pending[t],
						a = !e.creations.api.page.error[t] && !o && !!n,
						c = Object(b.h)(e, n);
					Object(y.a)(Object.assign(Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, h.defaults(e)), {
						actionInfo: h.actionInfo(e, {
							success: a
						}),
						subreddit: h.subreddit(e),
						timer: h.timer(r, s),
						userSubreddit: h.userSubreddit(e),
						adblock: h.adblock(e)
					}), c ? Object(i.m)(e, c) : {}))
				},
				I = (e, t) => n => Object.assign(Object.assign({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(p.c)(p.a.GoldPayment)
				}, h.defaults(n)), {
					timer: h.timer(e, t),
					adblock: h.adblock(n)
				}),
				P = (e, t) => n => Object.assign(Object.assign({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(p.c)(p.a.GoldPayment)
				}, h.defaults(n)), {
					timer: h.timer(e, t),
					adblock: h.adblock(n)
				}),
				k = (e, t) => n => Object.assign(Object.assign({
					source: "appeal",
					action: "view",
					noun: "page"
				}, h.defaults(n)), {
					timer: h.timer(e, t)
				}),
				B = (e, t) => n => Object.assign(Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, h.defaults(n)), {
					timer: h.timer(e, t)
				}),
				T = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: h.subreddit(e)
				}, h.defaults(e)),
				L = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, h.defaults(e)),
				M = () => e => Object.assign({
					action: "view",
					source: "global",
					noun: "screen"
				}, h.defaults(e)),
				U = (e, t) => n => Object.assign(Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, h.defaults(n)), {
					customFeed: h.customFeed(n),
					subreddit: h.subreddit(n),
					timer: h.timer(e, t),
					userSubreddit: h.userSubreddit(n),
					adblock: h.adblock(n)
				}),
				D = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, h.defaults(e)),
				R = (e, t, n, s, o, a) => i => {
					let c = !0;
					if (t.type.indexOf(r.Nb.Posts) > -1) {
						const {
							api: t
						} = i.listings.listingOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(r.Nb.Subreddits) > -1 || t.type.indexOf(r.Nb.Users) > -1) {
						const {
							api: t
						} = i.listings.postOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					const d = h.paneName(i, o),
						l = h.structureType(i, o),
						u = i.platform.currentPage && i.platform.currentPage.urlParams && i.platform.currentPage.urlParams.subredditName ? h.subredditByName(i, i.platform.currentPage.urlParams.subredditName) : void 0;
					return Object.assign(Object.assign(Object.assign(Object.assign({}, f.c(i, t)), {
						source: "global",
						action: "view",
						noun: "screen",
						actionInfo: h.actionInfo(i, {
							success: c,
							paneName: d
						}),
						timer: h.timer(n, s),
						search: Object.assign(Object.assign(Object.assign({}, h.search(i, t, !0, o || void 0)), !!a && {
							originElement: a
						}), {
							queryId: Object(p.c)(p.a.SearchResults),
							structureType: l,
							subredditId: t.restrict_sr && u && u.id ? u.id : void 0,
							subredditName: t.restrict_sr && u && u.name ? u.name : void 0
						})
					}), !!a && {
						correlationId: Object(p.c)(p.a.SearchResults)
					}), {
						userPreferences: {
							hideNsfw: !i.user.prefs.over18
						}
					})
				}
		},
		"./src/reddit/hooks/useButtons2020.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/reddit/contexts/Buttons2020.ts");

			function o() {
				return Object(r.useContext)(s.a)
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const u = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("downvote"), c.a.downvote, e.className)
			});
			t.b = e => {
				var {
					compact: t
				} = e, n = l(e, ["compact"]);
				return t ? s.a.createElement("span", d({}, n, {
					className: Object(o.a)(c.a.compactDownvoteWrapper, n.className)
				}), s.a.createElement(u, {
					className: c.a.compactDownvote
				})) : s.a.createElement("span", d({}, n, {
					className: Object(o.a)(c.a.downvoteWrapper, n.className)
				}), s.a.createElement(u, null))
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const u = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("upvote"), c.a.upvote, e.className)
			});
			t.b = e => {
				var {
					compact: t
				} = e, n = l(e, ["compact"]);
				return t ? s.a.createElement("span", d({}, n, {
					className: Object(o.a)(c.a.compactUpvoteWrapper, n.className)
				}), s.a.createElement(u, {
					className: c.a.compactUpvote
				})) : s.a.createElement("span", d({}, n, {
					className: Object(o.a)(c.a.upvoteWrapper, n.className)
				}), s.a.createElement(u, null))
			}
		},
		"./src/reddit/icons/fonts/helpers.m.less": function(e, t, n) {
			e.exports = {
				TooltipDesc: "_37iEJpUpWXN00_fpZKHglg",
				tooltipDesc: "_37iEJpUpWXN00_fpZKHglg"
			}
		},
		"./src/reddit/icons/fonts/helpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.m.less"),
				a = n.n(o),
				i = n("./src/lib/lessComponent.tsx");
			const c = e => "icon icon-".concat(e),
				d = i.a.wrapped(e => s.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", a.a)
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const l = e => {
				var {
					className: t,
					isSubreddit: n
				} = e, r = d(e, ["className", "isSubreddit"]);
				return s.a.createElement("svg", c({
					className: Object(o.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = l
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? o.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/SnooSilhouette/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 320 320",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"
			}), s.a.createElement("path", {
				d: "m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
			}), s.a.createElement("path", {
				d: "m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"
			}), s.a.createElement("path", {
				d: "m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
			}), s.a.createElement("path", {
				d: "m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
			}), s.a.createElement("path", {
				d: "m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
			}), s.a.createElement("path", {
				d: "m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
			}), s.a.createElement("path", {
				d: "m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"
			}), s.a.createElement("path", {
				d: "m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
			}), s.a.createElement("path", {
				d: "m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
			}), s.a.createElement("path", {
				d: "m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
			}), s.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
			}), s.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z",
				fill: "none"
			}), s.a.createElement("path", {
				d: "m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
			}), s.a.createElement("circle", {
				cx: "238.47",
				cy: "80.13",
				r: "22.93"
			}), s.a.createElement("path", {
				d: "m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
			})))
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const b = Object(d.t)(),
				h = Object(a.c)({
					isEditing: l.j,
					layout: (e, t) => t.forcedLayout || Object(d.N)(e, t)
				}),
				y = Object(o.b)(h),
				g = e => {
					var {
						disableFullscreen: t,
						dispatch: n,
						fitPageToContent: r,
						forcedLayout: o,
						isCollectionLayout: a,
						isEditing: i,
						layout: c,
						pageLayer: d
					} = e, l = f(e, ["disableFullscreen", "dispatch", "fitPageToContent", "forcedLayout", "isCollectionLayout", "isEditing", "layout", "pageLayer"]);
					return s.a.createElement("div", l)
				};
			t.a = b(y(e => {
				var {
					className: t
				} = e, n = f(e, ["className"]);
				return s.a.createElement(g, p({
					className: Object(i.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: n.layout === c.g.Large,
						[m.a.mDisableFullScreen]: n.disableFullscreen && !n.isCollectionLayout,
						[m.a.mClassicWidth]: n.isCollectionLayout,
						[m.a.mIsEditing]: !!n.isEditing,
						[m.a.mCanFlexFullWidth]: !n.fitPageToContent
					})
				}, n))
			}))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				Body: "_1vyLCp-v-tE5QvZovwrASa",
				body: "_1vyLCp-v-tE5QvZovwrASa",
				Sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh",
				backgroundContainer: "_33erTQ46yfKeF2B6B-ooMJ"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/layout/page/Listing/Content.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class b extends s.a.Component {
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
			var h = Object(f.a)(b);
			var y = e => s.a.createElement(h, e),
				g = n("./src/reddit/layout/page/Listing/index.m.less"),
				v = n.n(g);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const j = Object(i.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: r,
						theme: o
					} = e, i = x(e, ["backgroundColor", "className", "redditStyle", "theme"]), c = Object(p.a)(e), d = {
						"--pseudo-before-background": t || Object(m.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return s.a.createElement("div", O({
						className: Object(a.a)(v.a.backgroundContainer, n),
						style: d
					}, i))
				}),
				C = c.a.div("Body", v.a),
				w = c.a.div("Sidebar", v.a),
				_ = e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null;

			function N(e) {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: "".concat(d.q, "px"),
						marginTop: t
					} : {
						marginLeft: "".concat(d.q, "px"),
						marginTop: t
					},
					r = e.sidebar && s.a.createElement(w, {
						className: e.isCollectionLayout ? v.a["m-collectionLayout"] : v.a.defaultLayout,
						style: n
					}, e.sidebar),
					i = s.a.createElement(o.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? s.a.createElement(s.a.Fragment, null, e.sidebars[0], i, e.sidebars[1]) : e.isPageSwapped ? s.a.createElement(s.a.Fragment, null, r, i) : s.a.createElement(s.a.Fragment, null, i, r);
				const m = e.disableFullscreen ? "".concat(e.maxWidth || u.a + 2 * d.m, "px") : "100%";
				return s.a.createElement(y, {
					subredditId: e.subredditId
				}, s.a.createElement("div", {
					className: Object(a.a)(v.a.outerContainer, l.i, e.className),
					ref: e.containerRef
				}, s.a.createElement(j, {
					className: l.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), s.a.createElement("div", {
					className: v.a.innerContainer
				}, s.a.createElement("div", {
					className: v.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, _(e), s.a.createElement("div", {
					style: {
						maxWidth: m
					}
				}, e.trendingUnit), s.a.createElement(C, {
					style: {
						maxWidth: m
					}
				}, c))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				o = n.n(s);
			t.a = r.a.div("inlineRow", o.a)
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				o = n.n(s);
			t.a = r.a.button("inlineButton", o.a)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(i);
			t.a = Object(o.a)(e => s.a.createElement("div", {
				className: Object(a.a)(c.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/selectors/experiments/survey.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => (e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.Bb
				}) === r.Db.Enabled)(e) || (e => "enabled" === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: "survey_demo_nps_1"
				}))(e) || (e => "enabled" === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: "survey_demo_combined_1"
				}))(e),
				a = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.Ab
				}) === r.Cb.Enabled
		},
		"./src/reddit/selectors/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = e => e.tooltipId,
				s = e => t => t.tooltipId === e
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing~Reddit.46684a12d44cc4b1ce21.js.map