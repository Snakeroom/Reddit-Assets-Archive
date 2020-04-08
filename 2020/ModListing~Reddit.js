// https://www.redditstatic.com/desktop2x/ModListing~Reddit.d5b94bdbcc4c11cdfd33.js
// Retrieved at 4/8/2020, 1:10:05 PM by Reddit Dataminer v1.0.0
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
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/overlayEvents.ts");

			function u(e, t) {
				class n extends i.Component {
					constructor(e) {
						super(e), this.handleKeyDown = e => {
							e.keyCode === d.E && this.props.onKeyDown(e)
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
						return a.a.createElement(e, this.props)
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
				i = n("./src/lib/FocusTrap/index.ts"),
				a = n("./src/reddit/actions/shortcuts.ts"),
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
				return s.a.createElement("div", m({
					className: Object(o.a)(p.a.overlay, t, {
						[p.a.mIsVisible]: n
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
						}), Object(l.a)(), this.ref && (this.focusTrap = new i.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(l.b)(), Object(a.r)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: r,
							onOverlayClick: i,
							overlayClassName: a,
							overlayCustomStyles: l,
							withOverlay: u
						} = t, m = f(t, ["className", "ignoreDefaultFocus", "onOverlayClick", "overlayClassName", "overlayCustomStyles", "withOverlay"]);
						return s.a.createElement(c.a, {
							container: document.getElementById(d.b)
						}, s.a.createElement(b, {
							className: a,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: l
						}, s.a.createElement("div", {
							"aria-modal": !0,
							className: Object(o.a)(p.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, s.a.createElement(e, m))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/asTooltip.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
			})), n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/lodash/omit.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/lib/fastdom/index.ts"),
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
			const b = ["left", "bottom"],
				h = ["left", "top"],
				g = e => {
					let {
						container: t,
						containerHeight: n,
						excludeContainerPosition: r,
						isFixed: s,
						targetBox: o,
						isOverlayOff: i,
						targetPosition: a,
						tooltipSize: c,
						tooltipPosition: d
					} = e;
					const l = document.body,
						u = l.clientTop || 0,
						p = l.clientLeft || 0,
						[m, f, b, h] = t ? [t.scrollLeft, t.scrollTop, t.scrollWidth, n || t.scrollHeight] : [window.pageXOffset, window.pageYOffset, window.innerWidth, document.body.scrollHeight],
						g = {
							bottom: o.bottom,
							center: o.top + o.height / 2,
							top: o.top
						} [a[1]] + {
							bottom: -c.height,
							center: -c.height / 2,
							top: 0
						} [d[1]],
						y = {
							left: o.left,
							center: o.left + o.width / 2,
							right: o.right
						} [a[0]] + {
							left: 0,
							center: -c.width / 2,
							right: -c.width
						} [d[0]];
					let v, x;
					s ? (v = g - u, x = y - p) : (x = m + p + y, v = f + u + g);
					const O = {
							left: x,
							top: v
						},
						j = {
							bottom: Math.max(0, v + c.height - h),
							left: Math.max(0, 0 - x),
							right: Math.max(0, x + c.width - b),
							top: Math.max(0, 0 - v)
						};
					if (b > 320 && h > 667 && !i && (Boolean(j.left) !== Boolean(j.right) && (j.left ? O.left = 0 : O.left -= j.right), Boolean(j.top) !== Boolean(j.bottom) && (j.top ? O.top = 0 : O.top -= j.bottom)), r && t) {
						const e = t.getBoundingClientRect();
						O.top = O.top - e.top, O.left = O.left - e.left
					}
					return {
						overflow: j,
						style: O
					}
				};

			function y(e, t) {
				const n = Object(d.b)(e, t),
					r = Object(l.a)(e => {
						const {
							container: t,
							containerHeight: r,
							domEl: o,
							excludeContainerPosition: a,
							isFixed: c,
							target: d,
							isOverlayOff: l,
							targetPosition: u,
							tooltipPosition: p
						} = e;
						if (!d || !o) return null;
						const m = o.getBoundingClientRect(),
							y = d.getBoundingClientRect(),
							v = g({
								container: t,
								containerHeight: r,
								excludeContainerPosition: a,
								isOverlayOff: l,
								isFixed: !!c,
								targetBox: y,
								targetPosition: u || b,
								tooltipSize: {
									height: m.height,
									width: m.width
								},
								tooltipPosition: p || h
							}),
							x = s()(e, "target", "targetPosition", "tooltipPosition"),
							O = e.style ? Object.assign({}, v.style, e.style) : v.style;
						return i.a.createElement(n, f({}, x, {
							overflow: v.overflow,
							style: O,
							targetBox: y
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
						this.target = this.props.tooltipTarget || document.getElementById(this.props.tooltipId), this.props.isOpen && a.a.write(() => {
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
						if (!this.props.isOpen) return this.props.renderContentsHidden ? i.a.createElement(m, null, this.props.children) : null;
						const {
							isOpen: e,
							tooltipId: t,
							tooltipTarget: n
						} = this.props, {
							containerHeight: o,
							mounted: a
						} = this.state, d = s()(this.props, "isOpen"), l = t ? this.target : n, u = "".concat(e, "-").concat(a, "-").concat(t || "");
						return i.a.createElement(c.a, {
							key: u,
							container: this.props.container
						}, i.a.createElement(r, f({}, d, {
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
				i = n.n(o),
				a = n("./node_modules/react-dom/index.js"),
				c = n.n(a);

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
				return i.a.createElement("div", n)
			};
			p.displayName = "SizeMePlaceholder", t.a = function(e) {
				const t = function(e) {
					const t = t => {
						const {
							domEl: n,
							explicitRef: r,
							placeholder: o,
							size: a,
							style: c
						} = t, l = s()(t, "explicitRef", "size", "style"), m = "object" != typeof a || "number" != typeof a.width && "number" != typeof a.height, f = {
							domEl: n,
							style: c
						};
						"object" == typeof a && (f.size = a);
						const b = m && !1 !== o ? i.a.createElement(p, {
							style: c
						}) : i.a.createElement(e, d({}, f, l));
						return i.a.createElement(u, {
							ref: r
						}, b)
					};
					return t.displayName = "SizeMeRenderer(".concat(l(e), ")"), t
				}(e);
				class n extends i.a.Component {
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
						return i.a.createElement(t, d({
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
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/CSSVariableProvider/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function a(e) {
				return t => s.a.createElement(o.b.Consumer, null, n => s.a.createElement(e, i({
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
				i = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
					}
					return n
				};
			const a = (e, t, n) => {
					const r = n[t];
					class a extends s.a.PureComponent {
						render() {
							const t = this.props,
								{
									className: n,
									innerRef: a
								} = t,
								c = i(t, ["className", "innerRef"]);
							return s.a.createElement(e, Object.assign({}, c, {
								ref: a,
								className: Object(o.a)(r, n)
							}))
						}
					}
					return a.cssClassName = r, a.displayName = t, a
				},
				c = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noindex", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview", "svg", "animate", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "switch", "symbol", "text", "textPath", "tspan", "use", "view"].reduce((e, t) => (e[t] = (e, n) => a(t, e, n), e), {});
			t.a = Object.assign({}, c, {
				wrapped: (e, t, n) => {
					const r = n[t];
					class a extends s.a.PureComponent {
						render() {
							const t = this.props,
								{
									className: n
								} = t,
								a = i(t, ["className"]);
							return s.a.createElement(e, Object.assign({}, a, {
								className: Object(o.a)(r, n)
							}))
						}
					}
					return a.cssClassName = r, a.displayName = t, a
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
				return h
			})), n.d(t, "a", (function() {
				return g
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
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
				b = p.a.div("BottomText", u.a),
				h = e => s.a.createElement(f, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				g = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(b, {
						className: e.className,
						style: Object.assign({}, e.style, {
							"--infoTextTooltip-overflow-left": "".concat(t, "px")
						})
					}, e.text, e.children)
				},
				y = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(d.b)(n)(e)
					}
				}),
				v = Object(c.a)(g, [a.a.Click, a.a.Keydown]),
				x = Object(c.a)(h, [a.a.Click, a.a.Keydown]),
				O = Object(o.b)(y);
			t.c = O(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(v, m({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(x, m({}, e, {
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
				return b
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/constants/componentSizes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				d = n.n(c);
			const l = Object(s.createContext)(null),
				u = Object(s.createContext)(null);
			class p extends o.a.Component {
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
			const m = i.f + 10,
				f = o.a.memo(() => o.a.createElement(l.Consumer, null, e => e && o.a.createElement("div", {
					className: d.a.wrapper
				}, o.a.createElement(a.n, {
					className: d.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -m)
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
				return b
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "q", (function() {
				return j
			})), n.d(t, "r", (function() {
				return w
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "p", (function() {
				return I
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/controls/Input/ModalInput.tsx"),
				i = n("./src/reddit/icons/svgs/Close/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				c = n.n(a);
			const d = r.a.wrapped(i.a, "CloseIcon", c.a),
				l = r.a.section("ModalBody", c.a),
				u = r.a.p("ModalText", c.a),
				p = r.a.div("ModalSmallText", c.a),
				m = r.a.div("ModalDescriptionText", c.a),
				f = r.a.div("ModalMetaText", c.a),
				b = r.a.label("ModalFormItem", c.a),
				h = r.a.wrapped(o.a, "ModalInput", c.a),
				g = r.a.label("ModalInputLabel", c.a),
				y = r.a.footer("ModalFooter", c.a),
				v = r.a.header("ModalHeader", c.a),
				x = r.a.div("ModalTitle", c.a),
				O = r.a.div("ModalMain", c.a),
				j = r.a.textarea("TextArea", c.a),
				w = r.a.wrapped(s.f, "WarningButton", c.a),
				C = r.a.wrapped(s.f, "PrimaryButton", c.a),
				_ = r.a.wrapped(s.i, "CancelButton", c.a),
				I = r.a.wrapped(s.n, "RemoveButton", c.a)
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/InsideOverlay.tsx");

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
				const n = Object(o.a)(e, t);
				class r extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
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
				return Object(a.b)(r)
			}
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
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(r || (r = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(s || (s = {}));
			var d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/helpers/postCollection.ts");
			const u = [d.zb.COMMENTS, d.zb.COLLECTION_COMMENTS],
				p = (e, t) => {
					if (!e) return [];
					const n = u.includes(e),
						s = e === d.zb.COLLECTION_COMMENTS || t && Object(l.a)(t),
						o = d.M.has(e),
						i = d.qb.has(e),
						a = e === d.zb.SUBREDDIT,
						c = e === d.zb.TOPIC;
					let p, m, f;
					return o && !a || i ? p = r.HeaderSelector : s ? p = r.Collection : n ? p = r.PostComments : c && (p = r.TopicHeader), (o || i || s || n) && (m = r.Widget), (o || n) && (f = r.PostItem), [p, m, f]
				};
			var m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/components/SEOTitle/index.m.less"),
				h = n.n(b);
			const g = e => {
					let {
						level: t,
						children: n
					} = e;
					const r = "h".concat(t);
					return i.a.createElement(r, {
						className: h.a.Title
					}, n)
				},
				y = Object(m.t)(),
				v = Object(a.b)(() => Object(c.a)((e, t) => {
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
			class x extends i.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? i.a.createElement(g, {
						level: t
					}, e) : i.a.createElement(i.a.Fragment, null, e)
				}
			}
			t.b = y(v(x))
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/colors.ts"),
				d = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				l = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				u = n("./src/reddit/selectors/experiments/postSeo.ts"),
				p = n("./src/reddit/components/SubredditIcon/index.m.less"),
				m = n.n(p),
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
			const g = f.a.img("Image", m.a),
				y = e => {
					var {
						iconColor: t
					} = e, n = h(e, ["iconColor"]);
					return o.a.createElement(g, b({
						style: {
							backgroundColor: t || ""
						}
					}, n))
				},
				v = f.a.wrapped(e => {
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
				}, "PlanetIcon", m.a),
				x = f.a.div("BackupImage", m.a),
				O = Object(a.c)({
					isSubredditImageAltTextVariant: u.e
				}),
				j = Object(i.b)(O);
			t.b = j(e => {
				let t, n, s = r.fbt._("Subreddit Icon", null, {
					hk: "4jCo8s"
				});
				if (e.isSubredditImageAltTextVariant && e.altText && (s = e.altText), e.subredditOrProfile) {
					const {
						url: r,
						color: s
					} = Object(d.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					t = r, n = s
				} else t = e.iconUrl, n = e.primaryColor || c.a.alienblue;
				if (t) {
					const r = o.a.createElement(y, {
						alt: s,
						className: e.className,
						iconColor: n,
						role: "presentation",
						src: t
					});
					return e.linkTo ? o.a.createElement("a", {
						href: e.linkTo
					}, r) : r
				}
				const i = o.a.createElement(v, {
					className: e.className,
					color: e.redditStyle ? c.a.alienblue : n,
					role: "presentation"
				});
				return e.linkTo ? o.a.createElement("a", {
					href: e.linkTo
				}, i) : i
			})
		},
		"./src/reddit/components/Translated/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/lodash/isEqual.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/app/strings/index.ts"),
				c = n("./src/reddit/contexts/Language.tsx");
			class d extends i.a.Component {
				constructor() {
					super(...arguments), this.getString = e => Object(a.a)(e, this.props.msgId, this.props.replacements)
				}
				shouldComponentUpdate(e) {
					return this.props.msgId !== e.msgId || !s()(this.props.replacements, e.replacements)
				}
				render() {
					return i.a.createElement(c.a.Consumer, null, this.getString)
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
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "d", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, n) => r => {
				const s = e(r),
					i = t(r),
					a = !s && i;
				return Object(o.a)(n.baseClassName, r.className, {
					[n.mIsInteractive]: i,
					[n.mIsActive]: s,
					[n.mIsVoteable]: a
				})
			};
			var c = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = n("./src/reddit/models/Vote/index.ts"),
				l = n("./src/reddit/controls/Downvote/index.m.less"),
				u = n.n(l);
			const p = a(e => {
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
				b = n.n(f);
			const h = a(e => {
				let {
					voteState: t
				} = e;
				return t === d.a.upvoted
			}, e => {
				let {
					interactive: t
				} = e;
				return !1 !== t
			}, Object.assign({}, b.a, {
				baseClassName: b.a.Upvote
			}));
			var g = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				y = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				v = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				x = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				O = n.n(x);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var w = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const C = e => Object(o.a)({
					[O.a.compact]: e.compact,
					[O.a.dark]: Object(y.b)(Object(g.a)(e)),
					[O.a.nightmode]: e.isNightmode
				}),
				_ = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(v.a)(e), n = {
						"--verticalvotes-customdownvote-active": "url(".concat(t.downvoteActive, ")"),
						"--verticalvotes-customdownvote-inactive": "url(".concat(t.downvoteInactive, ")")
					}, {
						theme: r
					} = e, i = w(e, ["theme"]);
					return s.a.createElement("button", j({}, i, {
						className: Object(o.a)(O.a.customDownvote, C(e), {
							[O.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				I = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(v.a)(e), n = {
						"--verticalvotes-customupvote-active": "url(".concat(t.upvoteActive, ")"),
						"--verticalvotes-customupvote-inactive": "url(".concat(t.upvoteInactive, ")")
					}, {
						theme: r
					} = e, i = w(e, ["theme"]);
					return s.a.createElement("button", j({}, i, {
						className: Object(o.a)(O.a.customUpvote, C(e), {
							[O.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				S = e => s.a.createElement(c.a, {
					className: p(e),
					compact: e.compact
				}),
				E = e => s.a.createElement(m.a, {
					className: h(e),
					compact: e.compact
				})
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/selectors/activeModalId.ts"),
				a = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(s.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.j,
				isBladeEditorDirty: a.i,
				isModalOpen: Object(i.b)(c.a.BLADE_UNSAVED_CHANGES)
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
				return i
			})), n.d(t, "f", (function() {
				return a
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
				return b
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "v", (function() {
				return v
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "p", (function() {
				return _
			}));
			const r = 284,
				s = 450,
				o = 800,
				i = 284,
				a = 48,
				c = 640,
				d = 1600,
				l = 1280,
				u = 40,
				p = 48,
				m = 24,
				f = 24,
				b = 312,
				h = 40,
				g = 270,
				y = 106,
				v = 5,
				x = 16,
				O = 1250,
				j = 82,
				w = 48,
				C = 36,
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
				return i
			})), n.d(t, "k", (function() {
				return a
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
				return b
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			}));
			const r = "DraftEditor-contentwrapper",
				s = "public-DraftStyleDefault-block",
				o = "data-offset-key",
				i = "hovered",
				a = "scrollerItem",
				c = "threadline",
				d = "header-user-dropdown",
				l = "voteButton",
				u = "unsubscribe-icon-button",
				p = "RichTextJSON-root",
				m = "ImageBox-image",
				f = "content-type-link",
				b = "styled-outbound-link",
				h = "ListingLayout-backgroundContainer",
				g = "ListingLayout-outerContainer"
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
				return i
			})), n.d(t, "a", (function() {
				return a
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
				i = 70,
				a = 90,
				c = 99,
				d = 100,
				l = 100
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
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
			const i = s.a.createContext(!1);

			function a(e) {
				return class extends s.a.Component {
					render() {
						return s.a.createElement(i.Consumer, null, t => s.a.createElement(e, o({}, this.props, {
							isOverlay: t
						})))
					}
				}
			}
		},
		"./src/reddit/contexts/Language.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js");
			const s = Object(r.createContext)("en")
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
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "d", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/lib/lessComponent.tsx"),
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
			const p = (e, t, n) => Object(o.a)(e, {
				[d.a.redditStyle]: !(!t && !n)
			});
			a.a.wrapped(e => {
				const {
					className: t,
					redditStyle: n,
					"data-redditstyle": r
				} = e, o = u(e, ["className", "redditStyle", "data-redditstyle"]);
				return s.a.createElement("button", l({
					className: p(t, n, r)
				}, o))
			}, "Button", d.a);
			const m = e => {
					var {
						className: t,
						redditStyle: n,
						"data-redditstyle": r
					} = e, o = u(e, ["className", "redditStyle", "data-redditstyle"]);
					return s.a.createElement(i.a, l({
						className: p(t, n, r)
					}, o))
				},
				f = e => {
					var {
						className: t,
						redditStyle: n,
						"data-redditstyle": r
					} = e, o = u(e, ["className", "redditStyle", "data-redditstyle"]);
					return s.a.createElement("a", l({
						className: p(t, n, r)
					}, o))
				},
				b = e => {
					var {
						className: t,
						redditStyle: n,
						"data-redditstyle": r
					} = e, o = u(e, ["className", "redditStyle", "data-redditstyle"]);
					return s.a.createElement("button", l({
						className: p(t, n, r)
					}, o))
				},
				h = a.a.wrapped(f, "PrimaryLinkButton", d.a),
				g = a.a.wrapped(m, "PrimaryRouterLink", d.a),
				y = a.a.wrapped(b, "PrimaryButton", d.a),
				v = a.a.wrapped(b, "DangerButton", d.a),
				x = a.a.wrapped(f, "SecondaryLinkButton", d.a),
				O = a.a.wrapped(m, "SecondaryRouterLink", d.a),
				j = a.a.wrapped(b, "SecondaryButton", d.a),
				w = a.a.wrapped(b, "TertiaryButton", d.a),
				C = (a.a.wrapped(f, "TertiaryLinkButton", d.a), a.a.wrapped(m, "TertiaryRouterLink", d.a)),
				_ = a.a.wrapped(b, "GoldButton", d.a),
				I = a.a.wrapped(b, "PremiumButton", d.a),
				S = a.a.wrapped(b, "ChatButton", d.a),
				E = a.a.wrapped(b, "InlineTextButton", d.a)
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
				i = n("./src/lib/domUtils/index.ts"),
				a = n("./src/reddit/constants/zIndex.ts"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				d = n.n(c);
			class l extends s.a.Component {
				componentDidMount() {
					this.props.noFocus || this.ref && this.ref.focus({
						preventScroll: this.props.isOverlay
					})
				}
				componentWillUnmount() {
					Object(i.a)(this.props.tooltipId)
				}
				render() {
					const e = this.props,
						t = {};
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? a.d + 1 : a.c)), s.a.createElement("div", {
						className: Object(o.a)(d.a.dropdown, e.className),
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
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
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
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			class m extends s.a.Component {
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
					return s.a.createElement("input", u({
						className: Object(i.a)(l.a.input, t),
						onKeyDown: this.handleKeyDown
					}, r))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: a.f
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
				s = n.n(r),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/path/index.ts"),
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
			t.a = e => {
				var {
					children: t,
					className: n,
					disabled: r,
					replace: c,
					to: p
				} = e, m = u(e, ["children", "className", "disabled", "replace", "to"]);
				return r ? s.a.createElement("span", {
					className: Object(i.a)(d.a.disabledLink, n)
				}, t) : ("string" == typeof p && (p = Object(a.b)(p)), s.a.createElement(o.a, l({
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
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/TextButton/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("button", {
				children: e.children,
				className: Object(o.a)(a.a.textButton, e.className),
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
				return i
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const o = e => Object(r.b)(e) < .6;

			function i(e) {
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
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/elementIds.ts");
			let s;
			const o = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(r.c);
					document.body.style.overflow = e, document.body.style.marginRight = null, t && (t.style.marginRight = null)
				},
				i = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, s || (s = a(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = "".concat(s, "px");
					const t = document.getElementById(r.c);
					t && (t.style.marginRight = "".concat(s, "px"))
				},
				a = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				}
		},
		"./src/reddit/helpers/trackers/coins.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			}));
			var r = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./node_modules/uuid/v4.js"),
				o = n.n(s);
			let i;
			const a = () => i,
				c = () => i = o()(),
				d = () => i = void 0,
				l = "coins_marketing",
				u = () => e => Object.assign({
					source: l,
					action: "click",
					noun: "get_coins",
					correlationId: a()
				}, r.defaults(e)),
				p = e => t => Object.assign({
					source: l,
					action: "click",
					noun: "coins_".concat(e),
					correlationId: a()
				}, r.defaults(t)),
				m = () => e => Object.assign({
					source: l,
					action: "click",
					noun: "get_premium",
					correlationId: a()
				}, r.defaults(e))
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
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
				i = e => t => Object.assign({}, s(t), {
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				a = e => t => Object.assign({}, s(t), {
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/helpers/trackers/premium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "b", (function() {
				return f
			}));
			var r = n("./src/reddit/selectors/telemetry.ts"),
				s = n("./node_modules/uuid/v4.js"),
				o = n.n(s);
			let i;
			const a = () => i,
				c = () => i = o()(),
				d = () => i = void 0,
				l = "premium_marketing",
				u = () => e => Object.assign({
					source: l,
					action: "click",
					noun: "get_premium",
					correlationId: a()
				}, r.defaults(e)),
				p = () => e => Object.assign({
					source: l,
					action: "click",
					noun: "price",
					correlationId: a()
				}, r.defaults(e)),
				m = () => e => Object.assign({
					source: l,
					action: "click",
					noun: "redeem_code",
					correlationId: a()
				}, r.defaults(e)),
				f = () => e => Object.assign({
					source: l,
					action: "click",
					noun: "manage",
					correlationId: a()
				}, r.defaults(e))
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return x
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "n", (function() {
				return M
			})), n.d(t, "p", (function() {
				return D
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "o", (function() {
				return F
			}));
			n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makePostDraftPageKey/index.ts"),
				o = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = n("./src/reddit/helpers/routeKey/index.ts"),
				a = n("./src/reddit/helpers/trackers/postComposer.ts"),
				c = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				d = n("./src/reddit/models/Comment/index.ts"),
				l = n("./src/reddit/models/Post/index.ts"),
				u = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/trackers/coins.ts"),
				b = n("./src/reddit/helpers/trackers/premium.ts"),
				h = n("./src/reddit/helpers/trackers/searchResults.ts"),
				g = n("./src/reddit/selectors/postDraft.ts"),
				y = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/telemetry/index.ts");
			const x = (e, t, n, a) => {
					const {
						route: u
					} = e, {
						name: p
					} = u.meta;
					if (p) switch (p) {
						case r.zb.COMMENTS: {
							const {
								partialCommentId: r,
								partialPostId: s
							} = e.match.params, c = Object(l.m)(s), u = Object(i.a)(e, t, t.posts.models[c]);
							if (!u) return;
							const p = r && Object(d.e)(r),
								{
									sortToUse: m
								} = Object(o.a)(t, c);
							Object(v.a)(I(u, c, p, n, a, m)(t));
							break
						}
						case r.zb.INDEX:
						case r.zb.LISTING:
						case r.zb.MULTIREDDIT:
						case r.zb.SUBREDDIT: {
							const s = Object(i.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: o,
								queryParams: c
							} = e.match, {
								sort: d = (s.sort ? s.sort : r.N.HOT)
							} = o, l = c.t;
							Object(v.a)(O(s.listingKey, d, n, a, l)(t));
							break
						}
						case r.zb.TOPIC: {
							const s = Object(i.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: o
							} = e.match, c = s.sort ? s.sort : r.O, {
								sort: d = c
							} = o;
							Object(v.a)(O(s.listingKey, d, n, a)(t));
							break
						}
						case r.zb.PROFILE_OVERVIEW: {
							const s = Object(i.d)(e, t);
							if (!s) return;
							const {
								params: o,
								queryParams: c
							} = e.match, {
								sort: d = r.sb
							} = o, l = c.t;
							Object(v.a)(j(s, d, n, a, l)(t));
							break
						}
						case r.zb.PROFILE_POSTS: {
							const s = Object(i.d)(e, t);
							if (!s) return;
							const {
								queryParams: o
							} = e.match, {
								sort: c = r.sb,
								t: d = r.Rb
							} = o;
							Object(v.a)(w(s, c, n, a, d)(t));
							break
						}
						case r.zb.PROFILE_COMMENTS: {
							const s = Object(i.d)(e, t);
							if (!s) return;
							const {
								queryParams: o
							} = e.match, {
								sort: c = r.sb,
								t: d = r.Rb
							} = o;
							Object(v.a)(C(s, c, n, a, d)(t));
							break
						}
						case r.zb.SETTINGS:
							e.match.params.page === r.Mb.Profile ? Object(c.j)(t) : Object(v.a)(L(n, a)(t));
							break;
						case r.zb.POST_CREATION:
							break;
						case r.zb.POST_DRAFT: {
							const {
								draftId: r
							} = e.match.params, o = Object(s.a)(e.match.params);
							if (!o) return;
							N(t, o, r, n, a);
							break
						}
						case r.zb.SUBREDDIT_WIKI:
							Object(v.a)(U(n, a)(t));
							break;
						case r.zb.COINS:
							Object(v.a)(P(n, a)(t));
							break;
						case r.zb.PREMIUM:
							Object(v.a)(T(n, a)(t));
							break;
						case r.zb.APPEAL:
							Object(v.a)(B(n, a)(t))
					}
				},
				O = (e, t, n, r, s, o) => i => {
					const {
						api: a
					} = i.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, y.defaults(i), {
						actionInfo: y.actionInfo(i, {
							success: c
						}),
						customFeed: y.customFeed(i),
						listing: y.listing(i, e, {
							sort: t,
							sortTime: s
						}),
						subreddit: y.subreddit(i),
						timer: y.timer(n, r),
						userSubreddit: y.userSubreddit(i),
						adblock: y.adblock(i),
						postFlair: {
							title: o
						}
					})
				},
				j = (e, t, n, r, s) => o => {
					const i = y.listing(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: a
					} = o.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return Object.assign({
						listing: i,
						source: "global",
						action: "view",
						noun: "screen"
					}, y.defaults(o), {
						actionInfo: y.actionInfo(o, {
							success: c
						}),
						profile: y.profile(o),
						subreddit: y.subreddit(o),
						timer: y.timer(n, r),
						userSubreddit: y.userSubreddit(o),
						adblock: y.adblock(o)
					})
				},
				w = (e, t, n, r, s) => o => {
					const i = y.listing(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: a
					} = o.listings.postOrder, c = !a.error[e] && !a.pending[e];
					return Object.assign({
						listing: i,
						source: "global",
						action: "view",
						noun: "screen"
					}, y.defaults(o), {
						actionInfo: y.actionInfo(o, {
							success: c
						}),
						profile: y.profile(o),
						subreddit: y.subreddit(o),
						timer: y.timer(n, r),
						userSubreddit: y.userSubreddit(o),
						adblock: y.adblock(o)
					})
				},
				C = (e, t, n, r, s) => o => {
					const i = y.profileComments(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: a
					} = o.profileCommentsPage, c = !a.error[e] && !a.pending[e];
					return Object.assign({
						listing: i,
						source: "global",
						action: "view",
						noun: "screen"
					}, y.defaults(o), {
						actionInfo: y.actionInfo(o, {
							success: c
						}),
						profile: y.profile(o),
						subreddit: y.subreddit(o),
						timer: y.timer(n, r),
						userSubreddit: y.userSubreddit(o),
						adblock: y.adblock(o)
					})
				},
				_ = e => (t, n) => r => {
					const s = !r.profilePrivatePage.api.error[e] && !r.profilePrivatePage.api.pending[e];
					return Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, y.defaults(r), {
						actionInfo: y.actionInfo(r, {
							success: s
						}),
						profile: y.profile(r),
						subreddit: y.subreddit(r),
						timer: y.timer(n, t),
						userSubreddit: y.userSubreddit(r),
						adblock: y.adblock(r)
					})
				},
				I = (e, t, n, r, s, o) => i => {
					const {
						api: a
					} = i.commentsPage, c = !a.error[e] && !a.pending[e], d = Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, y.defaults(i), {
						actionInfo: y.actionInfo(i, {
							success: c
						}),
						post: y.post(i, t),
						profile: y.profile(i),
						subreddit: y.subreddit(i),
						timer: y.timer(r, s),
						userSubreddit: y.userSubreddit(i),
						adblock: y.adblock(i),
						postEvent: y.postEventI13nSelector(i, {
							postId: t
						}),
						postCollection: y.postCollectionI13nSelector(i, {
							postId: t
						}),
						listing: y.listing(i, void 0, {
							sort: o
						})
					});
					return n && (d.comment = y.comment(i, n)), d
				},
				S = (e, t, n) => r => {
					const s = r.creations.api.page.fetched[e],
						o = r.platform.currentPage ? r.platform.currentPage.queryParams.source_id : void 0;
					return Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, y.defaults(r), {
						actionInfo: y.actionInfo(r, {
							success: s
						}),
						post: o ? y.post(r, o) : void 0,
						subreddit: y.subreddit(r),
						timer: y.timer(t, n),
						userSubreddit: y.userSubreddit(r),
						adblock: y.adblock(r)
					})
				},
				E = (e, t, n) => {
					Object(v.a)(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, y.defaults(e), {
						actionInfo: y.actionInfo(e, {
							success: t
						}),
						subreddit: y.subredditById(e, Object(p.D)(e, n)),
						userSubreddit: y.userSubreddit(e),
						adblock: y.adblock(e)
					}))
				},
				k = (e, t, n, r) => {
					Object(v.a)(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, y.defaults(e), {
						profile: y.profileById(e, Object(u.m)(e, r)),
						subreddit: y.subredditById(e, Object(p.D)(e, n)),
						userSubreddit: y.userSubreddit(e),
						adblock: y.adblock(e)
					}))
				},
				N = (e, t, n, r, s) => {
					const o = e.creations.api.page.pending[t],
						i = !e.creations.api.page.error[t] && !o && !!n,
						c = Object(g.h)(e, n);
					Object(v.a)(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, y.defaults(e), {
						actionInfo: y.actionInfo(e, {
							success: i
						}),
						subreddit: y.subreddit(e),
						timer: y.timer(r, s),
						userSubreddit: y.userSubreddit(e),
						adblock: y.adblock(e)
					}, c ? Object(a.j)(e, c) : {}))
				},
				P = (e, t) => n => Object.assign({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: f.e()
				}, y.defaults(n), {
					timer: y.timer(e, t),
					adblock: y.adblock(n)
				}),
				T = (e, t) => n => Object.assign({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: b.f()
				}, y.defaults(n), {
					timer: y.timer(e, t),
					adblock: y.adblock(n)
				}),
				B = (e, t) => n => Object.assign({
					source: "appeal",
					action: "view",
					noun: "page"
				}, y.defaults(n), {
					timer: y.timer(e, t)
				}),
				L = (e, t) => n => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, y.defaults(n), {
					timer: y.timer(e, t)
				}),
				M = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, y.defaults(e)),
				D = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, y.defaults(e)),
				R = () => e => Object.assign({
					action: "view",
					source: "global",
					noun: "screen"
				}, y.defaults(e)),
				U = (e, t) => n => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, y.defaults(n), {
					customFeed: y.customFeed(n),
					subreddit: y.subreddit(n),
					timer: y.timer(e, t),
					userSubreddit: y.userSubreddit(n),
					adblock: y.adblock(n)
				}),
				F = (e, t, n, s, o) => i => {
					let a = !0;
					if (t.type.indexOf(r.Lb.Posts) > -1) {
						const {
							api: t
						} = i.listings.listingOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(r.Lb.Subreddits) > -1 || t.type.indexOf(r.Lb.Users) > -1) {
						const {
							api: t
						} = i.listings.postOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					return Object.assign({}, h.c(i, t), {
						source: "global",
						action: "view",
						noun: "screen",
						actionInfo: y.actionInfo(i, {
							success: a
						}),
						timer: y.timer(n, s),
						search: Object.assign({}, y.search(i, t), !!o && {
							originElement: o
						})
					}, !!o && {
						correlationId: Object(m.c)(m.a.SearchResults)
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "b", (function() {
				return w
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const i = "search",
				a = "search_results_best",
				c = (e, t) => {
					const n = o.subreddit(e);
					return {
						screen: o.screen(e),
						subreddit: n && t && t.restrict_sr ? n : null
					}
				},
				d = (e, t) => n => {
					const r = t;
					return r.structureType = "related", Object.assign({
						action: e,
						correlationId: Object(s.c)(s.a.SearchResults),
						noun: "related_search",
						source: i,
						search: o.search(n, r)
					}, c(n))
				},
				l = (e, t, n, r) => s => Object.assign({}, c(s, n), {
					source: i,
					action: "click",
					noun: t,
					actionInfo: o.actionInfo(s, r ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: r ? o.discoveryUnit(r) : null,
					search: o.search(s, n),
					post: o.post(s, e),
					media: o.media(s, e)
				}),
				u = (e, t, n) => s => {
					let a = !0;
					if (t.type.indexOf(r.Lb.Posts) > -1) {
						const {
							api: t
						} = s.listings.listingOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(r.Lb.Subreddits) > -1 || t.type.indexOf(r.Lb.Users) > -1) {
						const {
							api: t
						} = s.listings.postOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					return Object.assign({}, c(s, t), {
						source: i,
						action: "view",
						noun: "search_results_post",
						actionInfo: o.actionInfo(s, {
							success: a,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: o.discoveryUnit(n),
						search: o.search(s, t)
					})
				},
				p = (e, t) => n => ({
					action: "view",
					actionInfo: o.actionInfo(n),
					metaSearch: o.metaSearch(t),
					noun: e,
					screen: o.screen(n),
					search: o.smartSearch(n, t),
					source: i
				}),
				m = (e, t) => n => ({
					action: "click",
					actionInfo: o.actionInfo(n),
					noun: e,
					metaSearch: o.metaSearch(t),
					screen: o.screen(n),
					search: o.smartSearch(n, t),
					source: i
				}),
				f = (e, t, n) => r => ({
					action: t,
					actionInfo: o.actionInfo(r),
					noun: e,
					screen: o.screen(r),
					search: o.search(r, n),
					source: a
				});
			var b;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(b || (b = {}));
			const h = (e, t) => n => Object.assign({}, c(n, t), {
					source: i,
					action: "click",
					noun: e,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: o.actionInfo(n),
					search: o.search(n, t)
				}),
				g = (e, t) => n => Object.assign({}, c(n, t), {
					source: i,
					action: "click",
					noun: e,
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: o.actionInfo(n),
					search: o.search(n, t)
				}),
				y = (e, t) => n => ({
					action: "click",
					correlationId: Object(s.c)(s.a.SearchResults),
					noun: e ? r.Kb.ToSubreddit : r.Kb.ToGlobal,
					search: o.search(n, t),
					source: i
				}),
				v = (e, t, n, r) => a => Object.assign({}, c(a, n), {
					source: i,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: o.actionInfo(a, {
						relativePosition: o.getRelativePostOrder(a, t, e)
					}),
					search: Object.assign({}, o.search(a, n), !!r && {
						originElement: r
					}),
					post: o.post(a, t)
				}),
				x = (e, t) => n => Object.assign({}, c(n, e), {
					source: i,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: o.actionInfo(n),
					search: Object.assign({}, o.search(n, e), !!t && {
						originElement: t
					}),
					subreddit: o.subreddit(n)
				}),
				O = (e, t, n, r) => a => Object.assign({}, c(a, n), {
					source: i,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: o.actionInfo(a, {
						relativePosition: o.getRelativePostOrder(a, t, e),
						position: o.getAbsoluteOrder(a, t, e)
					}),
					search: Object.assign({}, o.search(a, n), !!r && {
						originElement: r
					}),
					post: o.post(a, t)
				}),
				j = (e, t, n) => r => Object.assign({}, c(r), {
					source: i,
					action: "click",
					noun: "search_result_".concat(e),
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: o.actionInfo(r),
					search: Object.assign({}, o.search(r, t), !!n && {
						originElement: n
					}),
					[e]: o[e](r)
				}),
				w = (e, t) => n => Object.assign({}, c(n, t), {
					source: i,
					action: e,
					noun: "covid_banner",
					correlationId: Object(s.c)(s.a.SearchResults),
					actionInfo: o.actionInfo(n),
					search: o.search(n, t)
				})
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
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(a);

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
				className: Object(o.a)(Object(i.b)("downvote"), c.a.downvote, e.className)
			});
			t.a = e => {
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(a);

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
				className: Object(o.a)(Object(i.b)("upvote"), c.a.upvote, e.className)
			});
			t.a = e => {
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
				i = n.n(o),
				a = n("./src/lib/lessComponent.tsx");
			const c = e => "icon icon-".concat(e),
				d = a.a.wrapped(e => s.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", i.a)
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
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);
			const c = e => s.a.createElement("svg", {
				className: Object(o.a)(e.className, a.a.dropdown, {
					[a.a.mRedditStyle]: !e.isSubreddit
				}),
				style: e.style,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
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
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
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
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const b = Object(d.t)(),
				h = Object(i.c)({
					isEditing: l.j,
					layout: (e, t) => t.forcedLayout || Object(d.M)(e, t)
				}),
				g = Object(o.b)(h),
				y = e => {
					var {
						disableFullscreen: t,
						dispatch: n,
						fitPageToContent: r,
						forcedLayout: o,
						isCollectionLayout: i,
						isEditing: a,
						layout: c,
						pageLayer: d
					} = e, l = f(e, ["disableFullscreen", "dispatch", "fitPageToContent", "forcedLayout", "isCollectionLayout", "isEditing", "layout", "pageLayer"]);
					return s.a.createElement("div", l)
				};
			t.a = b(g(e => {
				var {
					className: t
				} = e, n = f(e, ["className"]);
				return s.a.createElement(y, m({
					className: Object(a.a)(t, p.a.styledContent, {
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
				s = n.n(r),
				o = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				p = n("./src/reddit/models/Theme/index.ts"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
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
			var h = Object(f.a)(b),
				g = e => s.a.createElement(h, e),
				y = n("./src/reddit/layout/page/Listing/index.m.less"),
				v = n.n(y);

			function x() {
				return (x = Object.assign || function(e) {
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
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const j = Object(a.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: r,
						theme: o
					} = e, a = O(e, ["backgroundColor", "className", "redditStyle", "theme"]), c = Object(m.a)(e), d = {
						"--pseudo-before-background": t || Object(p.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return s.a.createElement("div", x({
						className: Object(i.a)(v.a.backgroundContainer, n),
						style: d
					}, a))
				}),
				w = c.a.div("Body", v.a),
				C = c.a.div("Sidebar", v.a);
			t.a = e => {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: "".concat(d.q, "px"),
						marginTop: t
					} : {
						marginLeft: "".concat(d.q, "px"),
						marginTop: t
					},
					r = e.sidebar && s.a.createElement(C, {
						className: e.isCollectionLayout ? v.a["m-collectionLayout"] : v.a.defaultLayout,
						style: n
					}, e.sidebar),
					a = s.a.createElement(o.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? s.a.createElement(s.a.Fragment, null, e.sidebars[0], a, e.sidebars[1]) : e.isPageSwapped ? s.a.createElement(s.a.Fragment, null, r, a) : s.a.createElement(s.a.Fragment, null, a, r);
				const p = e.disableFullscreen ? "".concat(e.maxWidth || u.a + 2 * d.m, "px") : "100%";
				return s.a.createElement(g, {
					subredditId: e.subredditId
				}, s.a.createElement("div", {
					className: Object(i.a)(v.a.outerContainer, l.i, e.className),
					ref: e.containerRef
				}, s.a.createElement(j, {
					className: l.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), s.a.createElement("div", {
					className: v.a.innerContainer
				}, s.a.createElement("div", {
					className: v.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, (e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null)(e), s.a.createElement("div", {
					style: {
						maxWidth: p
					}
				}, e.trendingUnit), s.a.createElement(w, {
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
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(a);
			t.a = Object(o.a)(e => s.a.createElement("div", {
				className: Object(i.a)(c.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
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
				return s
			}));
			const r = e => e.tooltipId,
				s = e => t => t.tooltipId === e
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/constants/index.ts");
			const s = e => !o(e) && !!e.user.prefs.subscriptionsPinned,
				o = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== r.zb.MODERATION_PAGES)
		}
	}
]);
//# sourceMappingURL=ModListing~Reddit.d5b94bdbcc4c11cdfd33.js.map