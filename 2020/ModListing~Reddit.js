// https://www.redditstatic.com/desktop2x/ModListing~Reddit.a1e6f7d26493d8e4404f.js
// Retrieved at 2/20/2020, 8:50:20 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing~Reddit"], {
		"./src/higherOrderComponents/addOverlayEvents.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return u
			}));
			var r, o = n("./node_modules/lodash/debounce.js"),
				s = n.n(o),
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
						}, this.handleResize = s()(e => {
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
				return y
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/FocusTrap/index.ts"),
				i = n("./src/reddit/actions/shortcuts.ts"),
				c = n("./src/reddit/components/Portal/index.tsx"),
				d = n("./src/reddit/constants/shortcuts.ts"),
				l = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
				p = n.n(u);

			function m() {
				return (m = Object.assign || function(e) {
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
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			};
			const h = e => {
				var {
					className: t,
					isVisible: n
				} = e, r = f(e, ["className", "isVisible"]);
				return o.a.createElement("div", m({
					className: Object(s.a)(p.a.overlay, t, {
						[p.a.mIsVisible]: n
					})
				}, r))
			};

			function y(e) {
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
						}), Object(l.b)(), Object(i.r)(), this.focusTrap && this.focusTrap.deactivate()
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
						} = t, m = f(t, ["className", "ignoreDefaultFocus", "onOverlayClick", "overlayClassName", "overlayCustomStyles", "withOverlay"]);
						return o.a.createElement(c.a, {
							container: document.getElementById(d.b)
						}, o.a.createElement(h, {
							className: i,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: l
						}, o.a.createElement("div", {
							"aria-modal": !0,
							className: Object(s.a)(p.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, o.a.createElement(e, m))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/asTooltip.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/omit.js"),
				o = n.n(r),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/lib/fastdom/index.ts"),
				c = n("./src/reddit/components/Portal/index.tsx"),
				d = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				l = n("./src/higherOrderComponents/sizeMe.tsx"),
				u = n("./src/reddit/components/HiddenDiv.m.less"),
				p = n.n(u),
				m = n("./src/lib/lessComponent.tsx").a.div("Component", p.a);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			n.d(t, "a", (function() {
				return v
			}));
			const h = ["left", "bottom"],
				y = ["left", "top"],
				b = e => {
					let {
						container: t,
						containerHeight: n,
						excludeContainerPosition: r,
						isFixed: o,
						targetBox: s,
						isOverlayOff: a,
						targetPosition: i,
						tooltipSize: c,
						tooltipPosition: d
					} = e;
					const l = document.body,
						u = l.clientTop || 0,
						p = l.clientLeft || 0,
						[m, f, h, y] = t ? [t.scrollLeft, t.scrollTop, t.scrollWidth, n || t.scrollHeight] : [window.pageXOffset, window.pageYOffset, window.innerWidth, document.body.scrollHeight],
						b = {
							bottom: s.bottom,
							center: s.top + s.height / 2,
							top: s.top
						} [i[1]] + {
							bottom: -c.height,
							center: -c.height / 2,
							top: 0
						} [d[1]],
						v = {
							left: s.left,
							center: s.left + s.width / 2,
							right: s.right
						} [i[0]] + {
							left: 0,
							center: -c.width / 2,
							right: -c.width
						} [d[0]];
					let x, g;
					o ? (x = b - u, g = v - p) : (g = m + p + v, x = f + u + b);
					const O = {
							left: g,
							top: x
						},
						w = {
							bottom: Math.max(0, x + c.height - y),
							left: Math.max(0, 0 - g),
							right: Math.max(0, g + c.width - h),
							top: Math.max(0, 0 - x)
						};
					if (h > 320 && y > 667 && !a && (Boolean(w.left) !== Boolean(w.right) && (w.left ? O.left = 0 : O.left -= w.right), Boolean(w.top) !== Boolean(w.bottom) && (w.top ? O.top = 0 : O.top -= w.bottom)), r && t) {
						const e = t.getBoundingClientRect();
						O.top = O.top - e.top, O.left = O.left - e.left
					}
					return {
						overflow: w,
						style: O
					}
				};

			function v(e, t) {
				const n = Object(d.b)(e, t),
					r = Object(l.a)(e => {
						const {
							container: t,
							containerHeight: r,
							domEl: s,
							excludeContainerPosition: i,
							isFixed: c,
							target: d,
							isOverlayOff: l,
							targetPosition: u,
							tooltipPosition: p
						} = e;
						if (!d || !s) return null;
						const m = s.getBoundingClientRect(),
							v = d.getBoundingClientRect(),
							x = b({
								container: t,
								containerHeight: r,
								excludeContainerPosition: i,
								isOverlayOff: l,
								isFixed: !!c,
								targetBox: v,
								targetPosition: u || h,
								tooltipSize: {
									height: m.height,
									width: m.width
								},
								tooltipPosition: p || y
							}),
							g = o()(e, "target", "targetPosition", "tooltipPosition"),
							O = e.style ? Object.assign({}, x.style, e.style) : x.style;
						return a.a.createElement(n, f({}, g, {
							overflow: x.overflow,
							style: O,
							targetBox: v
						}))
					});
				class u extends s.Component {
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
						if (!this.props.isOpen) return this.props.renderContentsHidden ? a.a.createElement(m, null, this.props.children) : null;
						const {
							isOpen: e,
							tooltipId: t,
							tooltipTarget: n
						} = this.props, {
							containerHeight: s,
							mounted: i
						} = this.state, d = o()(this.props, "isOpen"), l = t ? this.target : n, u = "".concat(e, "-").concat(i, "-").concat(t || "");
						return a.a.createElement(c.a, {
							key: u,
							container: this.props.container
						}, a.a.createElement(r, f({}, d, {
							containerHeight: s,
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
				o = n.n(r),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
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
			class u extends s.Component {
				render() {
					return s.Children.only(this.props.children)
				}
			}
			u.displayName = "SizeMeReferenceWrapper";
			const p = e => {
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
			p.displayName = "SizeMePlaceholder", t.a = function(e) {
				const t = function(e) {
					const t = t => {
						const {
							domEl: n,
							explicitRef: r,
							placeholder: s,
							size: i,
							style: c
						} = t, l = o()(t, "explicitRef", "size", "style"), m = "object" != typeof i || "number" != typeof i.width && "number" != typeof i.height, f = {
							domEl: n,
							style: c
						};
						"object" == typeof i && (f.size = i);
						const h = m && !1 !== s ? a.a.createElement(p, {
							style: c
						}) : a.a.createElement(e, d({}, f, l));
						return a.a.createElement(u, {
							ref: r
						}, h)
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
				o = n.n(r);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => o.a.createElement(e, t)
			}
		},
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/CSSVariableProvider/index.tsx");

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
				return t => o.a.createElement(s.b.Consumer, null, n => o.a.createElement(e, a({
					theme: n
				}, t)))
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			class r {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class o {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new o(t);
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
						o = this.getNode(e);
					if (!o) throw new Error("Cannot find item with key ".concat(e));
					n.prev = o, n.next = o.next, o.next = n, n.next && (n.next.prev = n);
					const s = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[s] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof r ? t : new r(t),
						o = this.getNode(e);
					if (!o) throw new Error("Cannot find item with key ".concat(e));
					n.next = o, n.prev = o.prev, o.prev = n, n.prev && (n.prev.next = n);
					const s = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[s] = n, this.length++
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
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
					}
					return n
				};
			const i = (e, t, n) => {
					const r = n[t];
					class i extends o.a.PureComponent {
						render() {
							const t = this.props,
								{
									className: n,
									innerRef: i
								} = t,
								c = a(t, ["className", "innerRef"]);
							return o.a.createElement(e, Object.assign({}, c, {
								ref: i,
								className: Object(s.a)(r, n)
							}))
						}
					}
					return i.cssClassName = r, i.displayName = t, i
				},
				c = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noindex", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview", "svg", "animate", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "switch", "symbol", "text", "textPath", "tspan", "use", "view"].reduce((e, t) => (e[t] = (e, n) => i(t, e, n), e), {});
			t.a = Object.assign({}, c, {
				wrapped: (e, t, n) => {
					const r = n[t];
					class i extends o.a.PureComponent {
						render() {
							const t = this.props,
								{
									className: n
								} = t,
								i = a(t, ["className"]);
							return o.a.createElement(e, Object.assign({}, i, {
								className: Object(s.a)(r, n)
							}))
						}
					}
					return i.cssClassName = r, i.displayName = t, i
				}
			})
		},
		"./src/reddit/components/HiddenDiv.m.less": function(e, t, n) {
			e.exports = {
				Component: "_1VhYfuKTAdUU_3j4cMjkr5",
				component: "_1VhYfuKTAdUU_3j4cMjkr5"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return y
			})), n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				p = n("./src/lib/lessComponent.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const f = p.a.div("Text", u.a),
				h = p.a.div("BottomText", u.a),
				y = e => o.a.createElement(f, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				b = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return o.a.createElement(h, {
						className: e.className,
						style: Object.assign({}, e.style, {
							"--infoTextTooltip-overflow-left": "".concat(t, "px")
						})
					}, e.text, e.children)
				},
				v = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(d.b)(n)(e)
					}
				}),
				x = Object(c.a)(b, [i.a.Click, i.a.Keydown]),
				g = Object(c.a)(y, [i.a.Click, i.a.Keydown]),
				O = Object(s.b)(v);
			t.c = O(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? o.a.createElement(x, m({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : o.a.createElement(g, m({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
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
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/reddit/constants/componentSizes.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				d = n.n(c);
			const l = Object(o.createContext)(null),
				u = Object(o.createContext)(null);
			class p extends s.a.Component {
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
					return s.a.createElement(l.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, s.a.createElement(u.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const m = a.f + 10,
				f = s.a.memo(() => s.a.createElement(l.Consumer, null, e => e && s.a.createElement("div", {
					className: d.a.wrapper
				}, s.a.createElement(i.n, {
					className: d.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -m)
					}
				}, r.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), s.a.createElement("div", {
					className: d.a.rightBorder
				})))),
				h = s.a.memo(() => s.a.createElement(u.Consumer, null, e => s.a.createElement("div", {
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
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "r", (function() {
				return C
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "p", (function() {
				return E
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				s = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				c = n.n(i);
			const d = r.a.wrapped(a.a, "CloseIcon", c.a),
				l = r.a.section("ModalBody", c.a),
				u = r.a.p("ModalText", c.a),
				p = r.a.div("ModalSmallText", c.a),
				m = r.a.div("ModalDescriptionText", c.a),
				f = r.a.div("ModalMetaText", c.a),
				h = r.a.label("ModalFormItem", c.a),
				y = r.a.wrapped(s.a, "ModalInput", c.a),
				b = r.a.label("ModalInputLabel", c.a),
				v = r.a.footer("ModalFooter", c.a),
				x = r.a.header("ModalHeader", c.a),
				g = r.a.div("ModalTitle", c.a),
				O = r.a.div("ModalMain", c.a),
				w = r.a.textarea("TextArea", c.a),
				C = r.a.wrapped(o.f, "WarningButton", c.a),
				j = r.a.wrapped(o.f, "PrimaryButton", c.a),
				_ = r.a.wrapped(o.i, "CancelButton", c.a),
				E = r.a.wrapped(o.n, "RemoveButton", c.a)
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/higherOrderComponents/asTooltip.tsx"),
				a = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(s.a)(e, t);
				class r extends o.a.PureComponent {
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
						return o.a.createElement(n, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(r)
			}
		},
		"./src/reddit/components/Portal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				o = n("./src/lib/CSSVariableProvider/index.tsx");
			class s extends r.PureComponent {
				render() {
					const {
						children: e,
						container: t
					} = this.props;
					return Object(o.d)(e, t || document.body)
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
			var r, o, s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(r || (r = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(o || (o = {}));
			var d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/helpers/postCollection.ts");
			const u = [d.zb.COMMENTS, d.zb.COLLECTION_COMMENTS],
				p = (e, t) => {
					if (!e) return [];
					const n = u.includes(e),
						o = e === d.zb.COLLECTION_COMMENTS || t && Object(l.a)(t),
						s = d.N.has(e),
						a = d.qb.has(e),
						i = e === d.zb.SUBREDDIT,
						c = e === d.zb.TOPIC;
					let p, m, f;
					return s && !i || a ? p = r.HeaderSelector : o ? p = r.Collection : n ? p = r.PostComments : c && (p = r.TopicHeader), (s || a || o || n) && (m = r.Widget), (s || n) && (f = r.PostItem), [p, m, f]
				};
			var m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/selectors/platform.ts"),
				h = n("./src/reddit/components/SEOTitle/index.m.less"),
				y = n.n(h);
			n.d(t, "a", (function() {
				return r
			}));
			const b = e => {
					let {
						level: t,
						children: n
					} = e;
					const r = "h".concat(t);
					return a.a.createElement(r, {
						className: y.a.Title
					}, n)
				},
				v = Object(m.t)(),
				x = Object(i.b)(() => Object(c.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					return n && Object(f.m)(e, {
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
					level: p(t, e).indexOf(n) + 1 || void 0
				})));
			class g extends a.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? a.a.createElement(b, {
						level: t
					}, e) : a.a.createElement(a.a.Fragment, null, e)
				}
			}
			t.b = v(x(g))
		},
		"./src/reddit/components/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				Image: "_34CfAAowTqdbNDYXz5tBTW",
				image: "_34CfAAowTqdbNDYXz5tBTW",
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
				tooltip: "uBysfP6qQHdIRAFM6EbWH",
				loadingIcon: "_3Dk8QRKhQImYqds2lSF6G4",
				loadingIconInTopBar: "_1U3KLnHX2TdXL5lNrrv4EW",
				emptyEditableIconInTopBar: "_3-i_fdY8zqHIo3CjuVzTYE"
			}
		},
		"./src/reddit/components/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				i = n("./src/reddit/i18n/utils.ts"),
				c = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				d = n("./src/reddit/components/SubredditIcon/index.m.less"),
				l = n.n(d),
				u = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
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
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			};
			const f = u.a.img("Image", l.a),
				h = e => {
					var {
						iconColor: t
					} = e, n = m(e, ["iconColor"]);
					return o.a.createElement(f, p({
						style: {
							backgroundColor: t || ""
						}
					}, n))
				},
				y = u.a.wrapped(e => {
					var {
						className: t,
						color: n
					} = e, r = m(e, ["className", "color"]);
					return o.a.createElement(c.a, p({
						className: t,
						style: {
							background: n || ""
						}
					}, r))
				}, "PlanetIcon", l.a),
				b = u.a.div("BackupImage", l.a);
			t.b = e => {
				let t, n;
				if (e.subredditOrProfile) {
					const {
						url: r,
						color: o
					} = Object(a.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					t = r, n = o
				} else t = e.iconUrl, n = e.primaryColor || s.a.alienblue;
				if (t) {
					const r = o.a.createElement(h, {
						alt: Object(i.c)("Subreddit icon"),
						className: e.className,
						iconColor: n,
						role: "presentation",
						src: t
					});
					return e.linkTo ? o.a.createElement("a", {
						href: e.linkTo
					}, r) : r
				}
				const r = o.a.createElement(y, {
					className: e.className,
					color: e.redditStyle ? s.a.alienblue : n,
					role: "presentation"
				});
				return e.linkTo ? o.a.createElement("a", {
					href: e.linkTo
				}, r) : r
			}
		},
		"./src/reddit/components/Translated/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/app/strings/index.ts"),
				c = n("./src/reddit/contexts/Language.tsx");
			class d extends a.a.Component {
				constructor() {
					super(...arguments), this.getString = e => Object(i.a)(e, this.props.msgId, this.props.replacements)
				}
				shouldComponentUpdate(e) {
					return this.props.msgId !== e.msgId || !o()(this.props.replacements, e.replacements)
				}
				render() {
					return a.a.createElement(c.a.Consumer, null, this.getString)
				}
			}
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, n) => r => {
				const o = e(r),
					a = t(r),
					i = !o && a;
				return Object(s.a)(n.baseClassName, r.className, {
					[n.mIsInteractive]: a,
					[n.mIsActive]: o,
					[n.mIsVoteable]: i
				})
			};
			var c = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = n("./src/reddit/models/Vote/index.ts"),
				l = n("./src/reddit/controls/Downvote/index.m.less"),
				u = n.n(l);
			const p = i(e => {
				let {
					voteState: t
				} = e;
				return t === d.a.downvoted
			}, e => {
				let {
					interactive: t
				} = e;
				return !1 !== t
			}, Object.assign({}, u.a, {
				baseClassName: u.a.Downvote
			}));
			var m = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				f = n("./src/reddit/controls/Upvote/index.m.less"),
				h = n.n(f);
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
			}, Object.assign({}, h.a, {
				baseClassName: h.a.Upvote
			}));
			var b = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				v = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				x = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				O = n.n(g);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "d", (function() {
				return S
			}));
			var C = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			};
			const j = e => Object(s.a)({
					[O.a.compact]: e.compact,
					[O.a.dark]: Object(v.b)(Object(b.a)(e)),
					[O.a.nightmode]: e.isNightmode
				}),
				_ = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(x.a)(e), n = {
						"--verticalvotes-customdownvote-active": "url(".concat(t.downvoteActive, ")"),
						"--verticalvotes-customdownvote-inactive": "url(".concat(t.downvoteInactive, ")")
					}, {
						theme: r
					} = e, a = C(e, ["theme"]);
					return o.a.createElement("button", w({}, a, {
						className: Object(s.a)(O.a.customDownvote, j(e), {
							[O.a.voted]: e.voteState === d.a.downvoted
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
					} = e, a = C(e, ["theme"]);
					return o.a.createElement("button", w({}, a, {
						className: Object(s.a)(O.a.customUpvote, j(e), {
							[O.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				N = e => o.a.createElement(c.a, {
					className: p(e),
					compact: e.compact
				}),
				S = e => o.a.createElement(m.a, {
					className: y(e),
					compact: e.compact
				})
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(o.c)({
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
					requestCloseBlade: () => n && e(Object(s.h)(n))
				}
			})
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
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
				return p
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "q", (function() {
				return f
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "u", (function() {
				return b
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "w", (function() {
				return g
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "p", (function() {
				return _
			}));
			const r = 284,
				o = 450,
				s = 800,
				a = 284,
				i = 48,
				c = 640,
				d = 1600,
				l = 1280,
				u = 40,
				p = 48,
				m = 24,
				f = 24,
				h = 312,
				y = 40,
				b = 270,
				v = 106,
				x = 5,
				g = 16,
				O = 1250,
				w = 82,
				C = 48,
				j = 36,
				_ = 37
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
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
				return p
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "i", (function() {
				return b
			}));
			const r = "DraftEditor-contentwrapper",
				o = "public-DraftStyleDefault-block",
				s = "data-offset-key",
				a = "hovered",
				i = "scrollerItem",
				c = "threadline",
				d = "header-user-dropdown",
				l = "voteButton",
				u = "unsubscribe-icon-button",
				p = "RichTextJSON-root",
				m = "ImageBox-image",
				f = "content-type-link",
				h = "styled-outbound-link",
				y = "ListingLayout-backgroundContainer",
				b = "ListingLayout-outerContainer"
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var r, o;
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(r || (r = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(o || (o = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = 480,
				o = 960,
				s = 1200
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			const r = 4,
				o = 60,
				s = 70,
				a = 90,
				i = 99,
				c = 100,
				d = 100
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const a = o.a.createContext(!1);

			function i(e) {
				return class extends o.a.Component {
					render() {
						return o.a.createElement(a.Consumer, null, t => o.a.createElement(e, s({}, this.props, {
							isOverlay: t
						})))
					}
				}
			}
		},
		"./src/reddit/contexts/Language.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js");
			const o = Object(r.createContext)("en")
		},
		"./src/reddit/controls/Button/index.m.less": function(e, t, n) {
			e.exports = {
				DangerButtonStyles: "_2TFttKq5FzfEJ75z_ZdIum",
				dangerButtonStyles: "_2TFttKq5FzfEJ75z_ZdIum",
				DangerButton: "_1K_eZyG6kthwPn55PD-EMM",
				dangerButton: "_1K_eZyG6kthwPn55PD-EMM",
				active: "_39a0Mt5b1i2joAqIaEHOWJ",
				ExtraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				extraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				PrimaryLinkButton: "wLV79_wV-ziNiWmf3Y7OV",
				primaryLinkButton: "wLV79_wV-ziNiWmf3Y7OV",
				PrimaryRouterLink: "_3UhcBirLMXHSbN5vYYBGSF",
				primaryRouterLink: "_3UhcBirLMXHSbN5vYYBGSF",
				PrimaryButton: "_2JBsHFobuapzGwpHQjrDlD",
				primaryButton: "_2JBsHFobuapzGwpHQjrDlD",
				SecondaryLinkButton: "_1HunhFR-0b-AYs0WG9mU_P",
				secondaryLinkButton: "_1HunhFR-0b-AYs0WG9mU_P",
				SecondaryRouterLink: "_2yhUdcPyG1k3qsmDb4y6u_",
				secondaryRouterLink: "_2yhUdcPyG1k3qsmDb4y6u_",
				SecondaryButton: "PiO8QDmoJoOL2sDjJAk4C",
				secondaryButton: "PiO8QDmoJoOL2sDjJAk4C",
				TertiaryButton: "_1McO-Omm_mC2bkTnVgD6NV",
				tertiaryButton: "_1McO-Omm_mC2bkTnVgD6NV",
				TertiaryLinkButton: "_9Yn-qhIEvQgFU6jnrKkSC",
				tertiaryLinkButton: "_9Yn-qhIEvQgFU6jnrKkSC",
				TertiaryRouterLink: "SuTcOCtRzb-pPZYaAZTjh",
				tertiaryRouterLink: "SuTcOCtRzb-pPZYaAZTjh",
				GoldButton: "_2GYoN_LmWsKeeYnfg8wF7N",
				goldButton: "_2GYoN_LmWsKeeYnfg8wF7N",
				PremiumButton: "_14IRbTHWqATJbFJ9PgPswU",
				premiumButton: "_14IRbTHWqATJbFJ9PgPswU",
				InlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				inlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				Button: "_2iuoyPiKHN3kfOoeIQalDT",
				button: "_2iuoyPiKHN3kfOoeIQalDT",
				redditStyle: "_2nelDm85zKKmuD94NequP0",
				ChatButton: "_13twe55MPRo1LqypxB-LJx",
				chatButton: "_13twe55MPRo1LqypxB-LJx"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return m
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "d", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/lib/lessComponent.tsx"),
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
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			};
			const p = (e, t, n) => Object(s.a)(e, {
				[d.a.redditStyle]: !(!t && !n)
			});
			i.a.wrapped(e => {
				const {
					className: t,
					redditStyle: n,
					"data-redditstyle": r
				} = e, s = u(e, ["className", "redditStyle", "data-redditstyle"]);
				return o.a.createElement("button", l({
					className: p(t, n, r)
				}, s))
			}, "Button", d.a);
			const m = e => {
					var {
						className: t,
						redditStyle: n,
						"data-redditstyle": r
					} = e, s = u(e, ["className", "redditStyle", "data-redditstyle"]);
					return o.a.createElement(a.a, l({
						className: p(t, n, r)
					}, s))
				},
				f = e => {
					var {
						className: t,
						redditStyle: n,
						"data-redditstyle": r
					} = e, s = u(e, ["className", "redditStyle", "data-redditstyle"]);
					return o.a.createElement("a", l({
						className: p(t, n, r)
					}, s))
				},
				h = e => {
					var {
						className: t,
						redditStyle: n,
						"data-redditstyle": r
					} = e, s = u(e, ["className", "redditStyle", "data-redditstyle"]);
					return o.a.createElement("button", l({
						className: p(t, n, r)
					}, s))
				},
				y = i.a.wrapped(f, "PrimaryLinkButton", d.a),
				b = i.a.wrapped(m, "PrimaryRouterLink", d.a),
				v = i.a.wrapped(h, "PrimaryButton", d.a),
				x = i.a.wrapped(h, "DangerButton", d.a),
				g = i.a.wrapped(f, "SecondaryLinkButton", d.a),
				O = i.a.wrapped(m, "SecondaryRouterLink", d.a),
				w = i.a.wrapped(h, "SecondaryButton", d.a),
				C = i.a.wrapped(h, "TertiaryButton", d.a),
				j = (i.a.wrapped(f, "TertiaryLinkButton", d.a), i.a.wrapped(m, "TertiaryRouterLink", d.a)),
				_ = i.a.wrapped(h, "GoldButton", d.a),
				E = i.a.wrapped(h, "PremiumButton", d.a),
				N = i.a.wrapped(h, "ChatButton", d.a),
				S = i.a.wrapped(h, "InlineTextButton", d.a)
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
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/domUtils/index.ts"),
				i = n("./src/reddit/constants/zIndex.ts"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				d = n.n(c);
			class l extends o.a.Component {
				componentDidMount() {
					this.props.noFocus || this.ref && this.ref.focus({
						preventScroll: this.props.isOverlay
					})
				}
				componentWillUnmount() {
					Object(a.a)(this.props.tooltipId)
				}
				render() {
					const e = this.props,
						t = {};
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? i.d + 1 : i.c)), o.a.createElement("div", {
						className: Object(s.a)(d.a.dropdown, e.className),
						ref: e => this.ref = e,
						role: "menu",
						style: Object.assign({}, t, e.style),
						tabIndex: -1
					}, e.children)
				}
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
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
			var p = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			};
			class m extends o.a.Component {
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
						r = p(e, ["className", "closeModal"]);
					return o.a.createElement("input", u({
						className: Object(a.a)(l.a.input, t),
						onKeyDown: this.handleKeyDown
					}, r))
				}
			}
			t.a = Object(s.b)(null, {
				closeModal: i.f
			})(m)
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			};
			t.a = e => {
				var {
					children: t,
					className: n,
					disabled: r,
					replace: c,
					to: p
				} = e, m = u(e, ["children", "className", "disabled", "replace", "to"]);
				return r ? o.a.createElement("span", {
					className: Object(a.a)(d.a.disabledLink, n)
				}, t) : ("string" == typeof p && (p = Object(i.b)(p)), o.a.createElement(s.a, l({
					className: n,
					to: p
				}, m), t))
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, n) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/TextButton/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("button", {
				children: e.children,
				className: Object(s.a)(i.a.textButton, e.className),
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
				return o
			}));
			var r = n("./node_modules/brcast/dist/brcast.es.js");
			const o = Object(r.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/polished/dist/polished.es.js");
			var r = n("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function o(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(r.a)(e).post
			}
		},
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const s = e => Object(r.b)(e) < .6;

			function a(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.a.bodyText,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.b.bodyText;
				return s(e) ? n : t
			}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/elementIds.ts");
			let o;
			const s = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(r.c);
					document.body.style.overflow = e, document.body.style.marginRight = null, t && (t.style.marginRight = null)
				},
				a = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, o || (o = i(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = "".concat(o, "px");
					const t = document.getElementById(r.c);
					t && (t.style.marginRight = "".concat(o, "px"))
				},
				i = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				}
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			n("./src/reddit/constants/categories.tsx");
			var r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: r.screen(e),
					profile: r.profile(e),
					subreddit: r.subreddit(e)
				}),
				s = e => t => Object.assign({
					source: "nav",
					action: "click",
					noun: e
				}, o(t)),
				a = e => t => Object.assign({}, o(t), {
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => Object.assign({}, o(t), {
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/i18n/components.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);

			function s(e) {
				return o.a.createElement(o.a.Fragment, null, e.children)
			}

			function a(e) {
				return o.a.createElement(o.a.Fragment, null, e.children)
			}

			function i(e) {
				return o.a.createElement(o.a.Fragment, null, 1 === e.count ? e.singular : e.plural)
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
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
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			};
			const u = e => o.a.createElement("i", {
				className: Object(s.a)(Object(a.b)("downvote"), c.a.downvote, e.className)
			});
			t.a = e => {
				var {
					compact: t
				} = e, n = l(e, ["compact"]);
				return t ? o.a.createElement("span", d({}, n, {
					className: Object(s.a)(c.a.compactDownvoteWrapper, n.className)
				}), o.a.createElement(u, {
					className: c.a.compactDownvote
				})) : o.a.createElement("span", d({}, n, {
					className: Object(s.a)(c.a.downvoteWrapper, n.className)
				}), o.a.createElement(u, null))
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
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
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			};
			const u = e => o.a.createElement("i", {
				className: Object(s.a)(Object(a.b)("upvote"), c.a.upvote, e.className)
			});
			t.a = e => {
				var {
					compact: t
				} = e, n = l(e, ["compact"]);
				return t ? o.a.createElement("span", d({}, n, {
					className: Object(s.a)(c.a.compactUpvoteWrapper, n.className)
				}), o.a.createElement(u, {
					className: c.a.compactUpvote
				})) : o.a.createElement("span", d({}, n, {
					className: Object(s.a)(c.a.upvoteWrapper, n.className)
				}), o.a.createElement(u, null))
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
				o = n.n(r),
				s = n("./src/reddit/icons/fonts/helpers.m.less"),
				a = n.n(s),
				i = n("./src/lib/lessComponent.tsx");
			const c = e => "icon icon-".concat(e),
				d = i.a.wrapped(e => o.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", a.a)
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", s({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), o.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", s({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("polygon", {
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
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);
			const c = e => o.a.createElement("svg", {
				className: Object(s.a)(e.className, i.a.dropdown, {
					[i.a.mRedditStyle]: !e.isSubreddit
				}),
				style: e.style,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/constants/colors.ts");
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? s.a.orangered : "none"
			}))
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
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				p = n.n(u);

			function m() {
				return (m = Object.assign || function(e) {
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
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			};
			const h = Object(d.t)(),
				y = Object(a.c)({
					isEditing: l.j,
					layout: (e, t) => t.forcedLayout || Object(d.L)(e, t)
				}),
				b = Object(s.b)(y),
				v = e => {
					var {
						disableFullscreen: t,
						dispatch: n,
						fitPageToContent: r,
						forcedLayout: s,
						isCollectionLayout: a,
						isEditing: i,
						layout: c,
						pageLayer: d
					} = e, l = f(e, ["disableFullscreen", "dispatch", "fitPageToContent", "forcedLayout", "isCollectionLayout", "isEditing", "layout", "pageLayer"]);
					return o.a.createElement("div", l)
				};
			t.a = h(b(e => {
				var {
					className: t
				} = e, n = f(e, ["className"]);
				return o.a.createElement(v, m({
					className: Object(i.a)(t, p.a.styledContent, {
						[p.a.mLargePostLayout]: n.layout === c.g.Large,
						[p.a.mDisableFullScreen]: n.disableFullscreen && !n.isCollectionLayout,
						[p.a.mClassicWidth]: n.isCollectionLayout,
						[p.a.mIsEditing]: !!n.isEditing,
						[p.a.mCanFlexFullWidth]: !n.fitPageToContent
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/layout/page/Listing/Content.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				p = n("./src/reddit/models/Theme/index.ts"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class h extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return o.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var y = Object(f.a)(h),
				b = e => o.a.createElement(y, e),
				v = n("./src/reddit/layout/page/Listing/index.m.less"),
				x = n.n(v);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			};
			const w = Object(i.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: r,
						theme: s
					} = e, i = O(e, ["backgroundColor", "className", "redditStyle", "theme"]), c = Object(m.a)(e), d = {
						"--pseudo-before-background": t || Object(p.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return o.a.createElement("div", g({
						className: Object(a.a)(x.a.backgroundContainer, n),
						style: d
					}, i))
				}),
				C = c.a.div("Body", x.a),
				j = c.a.div("Sidebar", x.a);
			t.a = e => {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: "".concat(d.q, "px"),
						marginTop: t
					} : {
						marginLeft: "".concat(d.q, "px"),
						marginTop: t
					},
					r = e.sidebar && o.a.createElement(j, {
						className: e.isCollectionLayout ? x.a["m-collectionLayout"] : x.a.defaultLayout,
						style: n
					}, e.sidebar),
					i = o.a.createElement(s.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? o.a.createElement(o.a.Fragment, null, e.sidebars[0], i, e.sidebars[1]) : e.isPageSwapped ? o.a.createElement(o.a.Fragment, null, r, i) : o.a.createElement(o.a.Fragment, null, i, r);
				const p = e.disableFullscreen ? "".concat(e.maxWidth || u.a + 2 * d.m, "px") : "100%",
					m = e.layerEmbed ? e.layerEmbed : null;
				return o.a.createElement(b, {
					subredditId: e.subredditId
				}, o.a.createElement("div", {
					className: Object(a.a)(x.a.outerContainer, l.i, e.className),
					ref: e.containerRef
				}, o.a.createElement(w, {
					className: l.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), o.a.createElement("div", {
					className: x.a.innerContainer
				}, o.a.createElement("div", {
					className: x.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, (e => e.hero ? o.a.createElement(o.a.Fragment, null, e.hero) : null)(e), o.a.createElement("div", {
					style: {
						maxWidth: p
					}
				}, e.trendingUnit), m, o.a.createElement(C, {
					style: {
						maxWidth: p
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
				o = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(o);
			t.a = r.a.div("inlineRow", s.a)
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				s = n.n(o);
			t.a = r.a.button("inlineButton", s.a)
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
				o = n.n(r),
				s = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(i);
			t.a = Object(s.a)(e => o.a.createElement("div", {
				className: Object(a.a)(c.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/selectors/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			const r = e => e.tooltipId,
				o = e => t => t.tooltipId === e
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/lib/constants/index.ts");
			const o = e => !s(e) && !!e.user.prefs.subscriptionsPinned,
				s = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== r.zb.MODERATION_PAGES)
		}
	}
]);
//# sourceMappingURL=ModListing~Reddit.a1e6f7d26493d8e4404f.js.map