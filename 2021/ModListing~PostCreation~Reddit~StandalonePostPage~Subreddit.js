// https://www.redditstatic.com/desktop2x/ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit.2fa73da5b4ec2c81a968.js
// Retrieved at 4/5/2021, 1:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"], {
		"./src/higherOrderComponents/addOverlayEvents.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return u
			}));
			var n, o = i("./node_modules/lodash/debounce.js"),
				r = i.n(o),
				l = i("./node_modules/react/index.js"),
				s = i.n(l),
				a = i("./node_modules/react-redux/es/index.js"),
				c = i("./src/lib/constants/index.ts"),
				d = i("./src/reddit/actions/overlayEvents.ts");

			function u(e, t) {
				class i extends l.Component {
					constructor(e) {
						super(e), this.handleKeyDown = e => {
							e.keyCode === c.F && this.props.onKeyDown(e)
						}, this.handleMouseClick = e => {
							this.props.onMouseClick(e)
						}, this.handleResize = r()(e => {
							this.props.onResize(e)
						}, 250, {
							leading: !0
						})
					}
					componentDidMount() {
						t && -1 !== t.indexOf(n.Keydown) || document.addEventListener("keydown", this.handleKeyDown), t && -1 !== t.indexOf(n.Click) || document.addEventListener("click", this.handleMouseClick), t && -1 !== t.indexOf(n.Resize) || window.addEventListener("resize", this.handleResize)
					}
					componentWillUnmount() {
						document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("click", this.handleMouseClick), window.removeEventListener("resize", this.handleResize)
					}
					render() {
						return s.a.createElement(e, this.props)
					}
				}
				return Object(a.b)(null, e => ({
					onKeyDown: t => e(d.d({
						event: t
					})),
					onMouseClick: t => e(d.e({
						event: t
					})),
					onResize: t => e(d.f({
						event: t
					}))
				}))(i)
			}! function(e) {
				e.Click = "click", e.Keydown = "keydown", e.Resize = "resize"
			}(n || (n = {}))
		},
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, i) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return m
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				r = i("./src/lib/classNames/index.ts"),
				l = i("./src/lib/FocusTrap/index.ts"),
				s = i("./src/reddit/actions/shortcuts/utils.ts"),
				a = i("./src/reddit/components/Portal/index.tsx"),
				c = i("./src/reddit/constants/shortcuts.ts"),
				d = i("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = i("./src/higherOrderComponents/asModal/index.m.less"),
				f = i.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = ({
				className: e,
				isVisible: t,
				...i
			}) => o.a.createElement("div", p({
				className: Object(r.a)(f.a.overlay, e, {
					[f.a.mIsVisible]: t
				})
			}, i));

			function m(e) {
				class t extends n.Component {
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
						}), Object(d.a)(), this.ref && (this.focusTrap = new l.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(d.b)(), Object(s.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: i,
							ignoreDefaultFocus: n,
							onOverlayClick: l,
							overlayClassName: s,
							overlayCustomStyles: d,
							withOverlay: u,
							...p
						} = t, m = p;
						return o.a.createElement(a.a, {
							container: document.getElementById(c.b)
						}, o.a.createElement(_, {
							className: s,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: d
						}, o.a.createElement("div", {
							"aria-modal": !0,
							className: Object(r.a)(f.a.modal, i),
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
		"./src/higherOrderComponents/asTooltip.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return x
			})), i.d(t, "a", (function() {
				return v
			}));
			var n = i("./node_modules/lodash/omit.js"),
				o = i.n(n),
				r = i("./node_modules/react/index.js"),
				l = i.n(r),
				s = i("./src/lib/classNames/index.ts"),
				a = i("./src/lib/fastdom/index.ts"),
				c = i("./src/reddit/components/Portal/index.tsx"),
				d = i("./src/higherOrderComponents/addOverlayEvents.tsx"),
				u = i("./src/higherOrderComponents/sizeMe.tsx"),
				f = i("./src/reddit/components/HiddenDiv.m.less"),
				p = i.n(f),
				_ = i("./src/lib/lessComponent.tsx").a.div("Component", p.a),
				m = i("./src/reddit/hooks/useCoreStyleExperiments.ts");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = ["left", "bottom"],
				b = ["left", "top"],
				x = ({
					container: e,
					containerHeight: t,
					excludeContainerPosition: i,
					isFixed: n,
					targetBox: o,
					isOverlayOff: r,
					targetPosition: l,
					tooltipSize: s,
					tooltipPosition: a
				}) => {
					const c = document.body,
						d = c.clientTop || 0,
						u = c.clientLeft || 0,
						[f, p, _, m] = e ? [e.scrollLeft, e.scrollTop, e.scrollWidth, t || e.scrollHeight] : [window.pageXOffset, window.pageYOffset, window.innerWidth, document.body.scrollHeight],
						h = {
							bottom: o.bottom,
							center: o.top + o.height / 2,
							top: o.top
						} [l[1]] + {
							bottom: -s.height,
							center: -s.height / 2,
							top: 0
						} [a[1]],
						g = {
							left: o.left,
							center: o.left + o.width / 2,
							right: o.right
						} [l[0]] + {
							left: 0,
							center: -s.width / 2,
							right: -s.width
						} [a[0]];
					let b, x;
					n ? (b = h - d, x = g - u) : (x = f + u + g, b = p + d + h);
					const v = {
							left: x,
							top: b
						},
						y = {
							bottom: Math.max(0, b + s.height - m),
							left: Math.max(0, 0 - x),
							right: Math.max(0, x + s.width - _),
							top: Math.max(0, 0 - b)
						};
					if (_ > 320 && m > 667 && !r && (Boolean(y.left) !== Boolean(y.right) && (y.left ? v.left = 0 : v.left -= y.right), Boolean(y.top) !== Boolean(y.bottom) && (y.top ? v.top = 0 : v.top -= y.bottom)), i && e) {
						const t = e.getBoundingClientRect();
						v.top = v.top - t.top, v.left = v.left - t.left
					}
					return {
						overflow: y,
						style: v
					}
				};

			function v(e, t) {
				const i = Object(d.b)(e, t),
					n = Object(u.a)(e => {
						const t = Object(m.a)(),
							{
								container: n,
								containerHeight: r,
								domEl: a,
								excludeContainerPosition: c,
								isFixed: d,
								target: u,
								isOverlayOff: f,
								targetPosition: p,
								tooltipPosition: _
							} = e;
						if (!u || !a) return null;
						const v = a.getBoundingClientRect(),
							y = u.getBoundingClientRect(),
							w = x({
								container: n,
								containerHeight: r,
								excludeContainerPosition: c,
								isOverlayOff: f,
								isFixed: !!d,
								targetBox: y,
								targetPosition: p || g,
								tooltipSize: {
									height: v.height,
									width: v.width
								},
								tooltipPosition: _ || b
							}),
							k = o()(e, "target", "targetPosition", "tooltipPosition"),
							C = e.style ? {
								...w.style,
								...e.style
							} : w.style;
						return l.a.createElement(i, h({}, k, {
							className: Object(s.a)(e.className, t ? "isInIcons2020" : "isNotInIcons2020"),
							overflow: w.overflow,
							style: C,
							targetBox: y
						}))
					});
				class f extends r.Component {
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
						if (!this.props.isOpen) return this.props.renderContentsHidden ? l.a.createElement(_, null, this.props.children) : null;
						const {
							isOpen: e,
							tooltipId: t,
							tooltipTarget: i
						} = this.props, {
							containerHeight: r,
							mounted: s
						} = this.state, a = o()(this.props, "isOpen"), d = t ? this.target : i, u = `${e}-${s}-${t||""}`;
						return l.a.createElement(c.a, {
							key: u,
							container: this.props.container
						}, l.a.createElement(n, h({}, a, {
							containerHeight: r,
							target: d
						})))
					}
				}
				return f
			}
		},
		"./src/higherOrderComponents/sizeMe.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/lodash/omit.js"),
				o = i.n(n),
				r = i("./node_modules/react/index.js"),
				l = i.n(r),
				s = i("./node_modules/react-dom/index.js"),
				a = i.n(s);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				return e.displayName || e.name || "Component"
			}
			class u extends r.Component {
				render() {
					return r.Children.only(this.props.children)
				}
			}
			u.displayName = "SizeMeReferenceWrapper";
			const f = ({
				style: e
			}) => {
				const t = {
					style: e || {
						width: "100%",
						height: "100%"
					}
				};
				return l.a.createElement("div", t)
			};
			f.displayName = "SizeMePlaceholder", t.a = function(e) {
				const t = function(e) {
					const t = t => {
						const {
							domEl: i,
							explicitRef: n,
							placeholder: r,
							size: s,
							style: a
						} = t, d = o()(t, "explicitRef", "size", "style"), p = "object" != typeof s || "number" != typeof s.width && "number" != typeof s.height, _ = {
							domEl: i,
							style: a
						};
						"object" == typeof s && (_.size = s);
						const m = p && !1 !== r ? l.a.createElement(f, {
							style: a
						}) : l.a.createElement(e, c({}, _, d));
						return l.a.createElement(u, {
							ref: n
						}, m)
					};
					return t.displayName = `SizeMeRenderer(${d(e)})`, t
				}(e);
				class i extends l.a.Component {
					constructor() {
						super(...arguments), this.state = {
							width: void 0,
							height: void 0
						}, this.refCallback = e => {
							this.reactInst = e
						}, this.hasSizeChanged = (e, t) => {
							const i = e,
								n = t;
							return Number(i.height).toFixed(0) !== Number(n.height).toFixed(0) || Number(i.width).toFixed(0) !== Number(n.width).toFixed(0)
						}, this.checkIfSizeChanged = e => {
							const {
								width: t,
								height: i
							} = e.getBoundingClientRect(), n = {
								width: t,
								height: i
							};
							this.hasSizeChanged(this.state, n) && this.setState(n)
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
						const e = this.reactInst && a.a.findDOMNode(this.reactInst);
						e ? (this.domEl = e, this.checkIfSizeChanged(this.domEl)) : this.domEl && (this.domEl = null)
					}
					render() {
						const e = {
							...this.state
						};
						return l.a.createElement(t, c({
							domEl: this.domEl,
							explicitRef: this.refCallback,
							size: e
						}, this.props))
					}
				}
				return i.displayName = `SizeMe(${d(e)})`, i
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js"),
				o = i.n(n);
			i("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => o.a.createElement(e, t)
			}
		},
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				r = i("./src/lib/CSSVariableProvider/index.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}

			function s(e) {
				const t = t => o.a.createElement(r.b.Consumer, null, i => o.a.createElement(e, l({
					theme: i
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
		},
		"./src/lib/lessComponent.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				r = i("./src/lib/classNames/index.ts");
			const l = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noindex", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview", "svg", "animate", "animateMotion", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "switch", "symbol", "text", "textPath", "tspan", "use", "view"],
				s = (e, t, i) => {
					const n = i[t];
					class l extends o.a.PureComponent {
						render() {
							const {
								className: t,
								innerRef: i,
								...l
							} = this.props;
							return o.a.createElement(e, {
								...l,
								ref: i,
								className: Object(r.a)(n, t)
							})
						}
					}
					return l.cssClassName = n, l.displayName = t, l
				},
				a = {};
			for (const c of l) a[c] = (e, t) => s(c, e, t);
			t.a = {
				...a,
				wrapped: (e, t, i) => {
					const n = i[t];
					class l extends o.a.PureComponent {
						render() {
							const {
								className: t,
								...i
							} = this.props;
							return o.a.createElement(e, {
								...i,
								className: Object(r.a)(n, t)
							})
						}
					}
					return l.cssClassName = n, l.displayName = t, l
				}
			}
		},
		"./src/lib/opener/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return l
			}));
			const n = {
					SELF: "_self",
					BLANK: "_blank",
					PARENT: "_parent",
					TOP: "_top"
				},
				o = "noopener",
				r = `${o} ${"noreferrer"}`,
				l = `${o} ${"nofollow"} ${"ugc"}`;
			t.d = (e, t = n.SELF, i) => {
				if (t === n.BLANK) {
					const n = window.open("", t, i);
					null != n ? (n.opener = null, n.location.href = e) : window.location.href = e
				} else window.location.href = e
			}
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return l
			})), i.d(t, "a", (function() {
				return s
			})), i.d(t, "b", (function() {
				return a
			})), i.d(t, "d", (function() {
				return c
			}));
			var n = i("./src/reddit/constants/shortcuts.ts"),
				o = i("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = i("./src/reddit/helpers/routeKey/index.ts");
			const l = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const i = t.routeMatch,
						n = Object(o.a)(e);
					return Object(r.b)(i, e, n)
				},
				s = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				a = e => {
					const t = document.getElementById(e),
						i = window.scrollX,
						n = window.scrollY;
					t && (t.focus(), window.scrollTo(i, n))
				},
				c = () => {
					a(n.b)
				}
		},
		"./src/reddit/components/HiddenDiv.m.less": function(e, t, i) {
			e.exports = {
				Component: "_1VhYfuKTAdUU_3j4cMjkr5",
				component: "_1VhYfuKTAdUU_3j4cMjkr5"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return c
			})), i.d(t, "d", (function() {
				return d
			})), i.d(t, "m", (function() {
				return u
			})), i.d(t, "o", (function() {
				return f
			})), i.d(t, "n", (function() {
				return p
			})), i.d(t, "e", (function() {
				return _
			})), i.d(t, "l", (function() {
				return m
			})), i.d(t, "g", (function() {
				return h
			})), i.d(t, "i", (function() {
				return g
			})), i.d(t, "j", (function() {
				return b
			})), i.d(t, "f", (function() {
				return x
			})), i.d(t, "h", (function() {
				return v
			})), i.d(t, "p", (function() {
				return y
			})), i.d(t, "c", (function() {
				return w
			})), i.d(t, "k", (function() {
				return k
			})), i.d(t, "s", (function() {
				return C
			})), i.d(t, "t", (function() {
				return j
			})), i.d(t, "q", (function() {
				return O
			})), i.d(t, "a", (function() {
				return E
			})), i.d(t, "r", (function() {
				return S
			}));
			var n = i("./src/lib/lessComponent.tsx"),
				o = i("./src/reddit/controls/Button/index.tsx"),
				r = i("./src/reddit/controls/Input/ModalInput.tsx"),
				l = i("./src/reddit/icons/svgs/Close/index.tsx"),
				s = i("./src/reddit/components/ModalStyledComponents/index.m.less"),
				a = i.n(s);
			const c = n.a.wrapped(l.a, "CloseIcon", a.a),
				d = n.a.section("ModalBody", a.a),
				u = n.a.section("ModalPostPreview", a.a),
				f = n.a.p("ModalText", a.a),
				p = n.a.div("ModalSmallText", a.a),
				_ = n.a.div("ModalDescriptionText", a.a),
				m = n.a.div("ModalMetaText", a.a),
				h = n.a.label("ModalFormItem", a.a),
				g = n.a.wrapped(r.a, "ModalInput", a.a),
				b = n.a.label("ModalInputLabel", a.a),
				x = n.a.footer("ModalFooter", a.a),
				v = n.a.header("ModalHeader", a.a),
				y = n.a.div("ModalTitle", a.a),
				w = n.a.div("ModalAnnotation", a.a),
				k = n.a.div("ModalMain", a.a),
				C = n.a.textarea("TextArea", a.a),
				j = n.a.wrapped(o.i, "WarningButton", a.a),
				O = n.a.wrapped(o.i, "PrimaryButton", a.a),
				E = n.a.wrapped(o.l, "CancelButton", a.a),
				S = n.a.wrapped(o.o, "RemoveButton", a.a)
		},
		"./src/reddit/components/Portal/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var n = i("./node_modules/react/index.js"),
				o = i("./src/lib/CSSVariableProvider/index.tsx");
			class r extends n.PureComponent {
				render() {
					const {
						children: e,
						container: t
					} = this.props;
					return Object(o.d)(e, t || document.body)
				}
			}
		},
		"./src/reddit/components/SEOTitle/index.m.less": function(e, t, i) {
			e.exports = {
				Title: "_eYtD2XCVieq6emjKBH3m",
				title: "_eYtD2XCVieq6emjKBH3m"
			}
		},
		"./src/reddit/components/SEOTitle/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			var n, o, r = i("./node_modules/react/index.js"),
				l = i.n(r),
				s = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(n || (n = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(o || (o = {}));
			var c = i("./src/lib/constants/index.ts"),
				d = i("./src/reddit/helpers/postCollection.ts");
			const u = [c.Eb.COMMENTS, c.Eb.COLLECTION_COMMENTS],
				f = (e, t) => {
					if (!e) return [];
					const i = u.includes(e),
						o = e === c.Eb.COLLECTION_COMMENTS || t && Object(d.a)(t),
						r = c.O.has(e),
						l = c.ub.has(e),
						s = e === c.Eb.SUBREDDIT,
						a = e === c.Eb.TOPIC;
					let f, p, _;
					return r && !s || l ? f = n.HeaderSelector : o ? f = n.Collection : i ? f = n.PostComments : a && (f = n.TopicHeader), (r || l || o || i) && (p = n.Widget), (r || i) && (_ = n.PostItem), [f, p, _]
				};
			var p = i("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = i("./src/reddit/selectors/platform.ts"),
				m = i("./src/reddit/components/SEOTitle/index.m.less"),
				h = i.n(m);
			const g = ({
					level: e,
					children: t
				}) => {
					const i = `h${e}`;
					return l.a.createElement(i, {
						className: h.a.Title
					}, t)
				},
				b = Object(p.t)(),
				x = Object(s.b)(() => Object(a.a)((e, {
					pageLayer: t
				}) => t && Object(_.l)(e, {
					page: t
				}), (e, {
					pageLayer: t
				}) => t && t.meta && t.meta.name, (e, {
					type: t
				}) => t, (e, t, i) => ({
					level: f(t, e).indexOf(i) + 1 || void 0
				})));
			class v extends l.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? l.a.createElement(g, {
						level: t
					}, e) : l.a.createElement(l.a.Fragment, null, e)
				}
			}
			t.b = b(x(v))
		},
		"./src/reddit/components/SubredditIcon/index.m.less": function(e, t, i) {
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
				emptyEditableIconInTopBar: "_3-i_fdY8zqHIo3CjuVzTYE",
				defaultCommunityIcon: "_1xvdfUtOPDANqHjxzxKX5b",
				mNightmode: "_1TI6C7sqGL9TRdsq1jRks"
			}
		},
		"./src/reddit/components/SubredditIcon/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return j
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				r = i.n(o),
				l = i("./node_modules/react-redux/es/index.js"),
				s = i("./src/lib/classNames/index.ts"),
				a = i("./src/lib/lessComponent.tsx"),
				c = i("./src/reddit/components/UserIcon/index.tsx"),
				d = i("./src/reddit/constants/colors.ts"),
				u = i("./src/reddit/contexts/PageLayer/index.tsx"),
				f = i("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				p = i("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				_ = i("./src/reddit/icons/fonts/index.tsx"),
				m = i("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				h = i("./src/reddit/models/Subreddit/index.ts"),
				g = i("./src/reddit/selectors/user.ts"),
				b = i("./src/reddit/components/SubredditIcon/index.m.less"),
				x = i.n(b);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = a.a.wrapped(c.a, "UserIcon", x.a),
				w = a.a.img("Image", x.a),
				k = ({
					iconColor: e,
					...t
				}) => r.a.createElement(w, v({
					style: {
						backgroundColor: e || ""
					}
				}, t)),
				C = a.a.wrapped(({
					className: e,
					color: t,
					...i
				}) => r.a.createElement(m.a, v({
					className: e,
					style: {
						background: t || ""
					}
				}, i)), "PlanetIcon", x.a),
				j = a.a.div("BackupImage", x.a),
				O = Object(u.t)();
			t.b = O(e => {
				const t = Object(p.a)(),
					i = Object(l.e)(g.V);
				let o, a, c;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: i
					} = Object(f.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(h.g)(e.subredditOrProfile) ? c = r.a.createElement(y, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (o = t, a = i)
				} else o = e.iconUrl, a = e.primaryColor || d.b.alienblue;
				return o ? c = r.a.createElement(k, {
					alt: n.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: a,
					role: "presentation",
					src: o
				}) : c || (c = t ? r.a.createElement(_.a, {
					name: "community",
					isFilled: !i,
					className: Object(s.a)(e.className, x.a.defaultCommunityIcon, {
						[x.a.mNightmode]: i
					}),
					style: i ? {
						backgroundColor: e.redditStyle ? d.b.alienblue : a
					} : {
						color: e.redditStyle ? d.b.alienblue : a
					}
				}) : r.a.createElement(C, {
					className: e.className,
					color: e.redditStyle ? d.b.alienblue : a,
					role: "presentation"
				})), e.linkTo ? r.a.createElement("a", {
					href: e.linkTo
				}, c) : r.a.createElement(r.a.Fragment, null, c)
			})
		},
		"./src/reddit/components/UserIcon/PresenceDot.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				r = i("./src/lib/classNames/index.ts"),
				l = i("./src/reddit/hooks/useIntersectionObserver.ts"),
				s = i("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				a = i("./src/reddit/components/UserIcon/UserIcon.m.less"),
				c = i.n(a);
			t.a = e => {
				const {
					showPresence: t,
					onceInViewport: i
				} = e, a = Object(n.useRef)(null), d = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && i && i()
					})
				}, [i]);
				return Object(l.a)(a, d), o.a.createElement(s.a, {
					ref: a,
					className: Object(r.a)(c.a.presenceDot, {
						[c.a.isLit]: t
					}),
					isHighlighted: e.isHighlighted
				})
			}
		},
		"./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				r = i.n(o),
				l = i("./src/lib/classNames/index.ts"),
				s = i("./src/reddit/components/UserIcon/UserIcon.m.less"),
				a = i.n(s);
			t.a = function({
				backgroundClassName: e,
				className: t,
				headshot: i
			}) {
				return r.a.createElement("div", {
					className: Object(l.a)(a.a.snoovatarWrapper, t)
				}, r.a.createElement("div", {
					className: Object(l.a)(a.a.snoovatarBackground, e)
				}), r.a.createElement("div", {
					className: a.a.snoovatarHeadshotContainer
				}, r.a.createElement("img", {
					alt: n.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: a.a.snoovatarHeadshot,
					src: i
				})))
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.m.less": function(e, t, i) {
			e.exports = {
				currentUserIconWrapper: "efdkOLo3oigH_95whTYCp",
				userIconWrapper: "_2p14AQvJBvTrEEa4csiW9v",
				DefaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				defaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				UserIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				userIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				mNightmode: "_2aVSEFJsIE0M-4uRE-U24H",
				snoovatarWrapper: "_1cyAeeYDGrx7MPL_jRwKZ",
				snoovatarBackground: "_2_QqG5dG916znjlVV8ZCbw",
				snoovatarHeadshotContainer: "_1XJXnCAngvZLEeLpB3oa4L",
				snoovatarHeadshot: "ScrrUjzznpAqm92uwgnvO",
				presenceDot: "_2dn5Ncenn0BSD4tCSmxQhA",
				isLit: "GpWjjkZl5_kV4yZYWBaT2",
				hasHeadShotWrapper: "_1TENjLYSaj4L4uJMZa3DRe"
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return f
			}));
			var n = i("./src/config.ts"),
				o = i("./node_modules/fbt/lib/FbtPublic.js"),
				r = i("./node_modules/react/index.js"),
				l = i.n(r),
				s = i("./src/lib/classNames/index.ts"),
				a = i("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				c = i("./src/reddit/components/UserIcon/UserIcon.m.less"),
				d = i.n(c);
			const u = `${n.a.assetPath}/img/avatar_over18_square.png`,
				f = e => !e || e.includes("avatar_default_");
			t.a = e => {
				const {
					className: t,
					iconUrl: i,
					isCurrentUser: n,
					isNightMode: r,
					isNSFW: c,
					nsfwIconUrl: p,
					shouldHideNSFW: _
				} = e;
				if (n && f(i) || !n && !i) return l.a.createElement(a.a, {
					className: Object(s.a)(d.a.DefaultUserIcon, t, {
						[d.a.mNightmode]: r
					})
				});
				const m = !n && c && _ ? p || u : i;
				return l.a.createElement("img", {
					alt: o.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(s.a)(d.a.UserIcon, t),
					src: m
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/classNames/index.ts"),
				o = i("./node_modules/react/index.js"),
				r = i.n(o),
				l = i("./node_modules/react-redux/es/index.js"),
				s = i("./node_modules/reselect/es/index.js"),
				a = i("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = i("./src/reddit/models/User/index.ts"),
				d = i("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = i("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				f = i("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = i("./src/reddit/selectors/user.ts"),
				_ = i("./src/reddit/components/UserIcon/UserIcon.m.less"),
				m = i.n(_);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(s.c)({
					currentUser: p.i,
					isNightMode: p.V,
					shouldHideNSFW: p.B,
					user: p.mb
				}),
				b = Object(l.b)(g);
			t.a = b(e => {
				const {
					currentUser: t,
					iconUrl: i,
					isHighlighted: o,
					isNSFW: l,
					shouldShowPresenceIndicator: s,
					user: p,
					userName: _,
					onPresenceIndicatorInViewport: g,
					isCommentsPageAd: b,
					...x
				} = e, v = !!t && Object(c.e)(t) === _, y = v ? t : p, w = y && y.accountIcon || i, k = p ? p.isNSFW : l, C = Object(a.a)(w), j = r.a.createElement(f.a, h({}, x, {
					iconUrl: w,
					isCurrentUser: v,
					isNSFW: k
				}));
				return b ? j : r.a.createElement("div", {
					className: Object(n.a)(m.a.userIconWrapper, {
						[m.a.hasHeadShotWrapper]: C
					})
				}, C ? r.a.createElement(u.a, {
					headshot: w,
					className: e.className
				}) : j, s && r.a.createElement(d.a, {
					showPresence: !0,
					isHighlighted: o,
					onceInViewport: g
				}))
			})
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "d", (function() {
				return r
			})), i.d(t, "e", (function() {
				return l
			})), i.d(t, "f", (function() {
				return s
			})), i.d(t, "g", (function() {
				return a
			})), i.d(t, "i", (function() {
				return c
			})), i.d(t, "h", (function() {
				return d
			})), i.d(t, "j", (function() {
				return u
			})), i.d(t, "k", (function() {
				return f
			})), i.d(t, "m", (function() {
				return p
			})), i.d(t, "q", (function() {
				return _
			})), i.d(t, "r", (function() {
				return m
			})), i.d(t, "s", (function() {
				return h
			})), i.d(t, "u", (function() {
				return g
			})), i.d(t, "t", (function() {
				return b
			})), i.d(t, "v", (function() {
				return x
			})), i.d(t, "w", (function() {
				return v
			})), i.d(t, "l", (function() {
				return y
			})), i.d(t, "b", (function() {
				return w
			})), i.d(t, "n", (function() {
				return k
			})), i.d(t, "o", (function() {
				return C
			})), i.d(t, "p", (function() {
				return j
			}));
			const n = 284,
				o = 450,
				r = 800,
				l = 284,
				s = 48,
				a = 640,
				c = 1600,
				d = 1280,
				u = 40,
				f = 48,
				p = 24,
				_ = 24,
				m = 312,
				h = 40,
				g = 270,
				b = 106,
				x = 5,
				v = 16,
				y = 1250,
				w = 82,
				k = 48,
				C = 36,
				j = 40
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return o
			})), i.d(t, "d", (function() {
				return r
			})), i.d(t, "f", (function() {
				return l
			})), i.d(t, "k", (function() {
				return s
			})), i.d(t, "m", (function() {
				return a
			})), i.d(t, "e", (function() {
				return c
			})), i.d(t, "n", (function() {
				return d
			})), i.d(t, "j", (function() {
				return u
			})), i.d(t, "g", (function() {
				return f
			})), i.d(t, "a", (function() {
				return p
			})), i.d(t, "l", (function() {
				return _
			})), i.d(t, "h", (function() {
				return m
			})), i.d(t, "i", (function() {
				return h
			}));
			const n = "DraftEditor-contentwrapper",
				o = "public-DraftStyleDefault-block",
				r = "data-offset-key",
				l = "hovered",
				s = "scrollerItem",
				a = "threadline",
				c = "header-user-dropdown",
				d = "voteButton",
				u = "RichTextJSON-root",
				f = "ImageBox-image",
				p = "content-type-link",
				_ = "styled-outbound-link",
				m = "ListingLayout-backgroundContainer",
				h = "ListingLayout-outerContainer"
		},
		"./src/reddit/constants/elementIds.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "d", (function() {
				return r
			})), i.d(t, "b", (function() {
				return l
			}));
			const n = "bladeContainer",
				o = "header",
				r = "overlayScrollContainer",
				l = "collectionPostListScrollContainer"
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, i) {
			"use strict";
			var n, o;
			i.d(t, "a", (function() {
					return n
				})), i.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(n || (n = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(o || (o = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return n
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "a", (function() {
				return r
			}));
			const n = 480,
				o = 960,
				r = 1200
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, i) {
			"use strict";
			i.d(t, "g", (function() {
				return n
			})), i.d(t, "e", (function() {
				return o
			})), i.d(t, "c", (function() {
				return r
			})), i.d(t, "d", (function() {
				return l
			})), i.d(t, "a", (function() {
				return s
			})), i.d(t, "f", (function() {
				return a
			})), i.d(t, "h", (function() {
				return c
			})), i.d(t, "b", (function() {
				return d
			}));
			const n = 4,
				o = 51,
				r = 60,
				l = 70,
				s = 90,
				a = 99,
				c = 100,
				d = 100
		},
		"./src/reddit/contexts/CoreStyleExperiments.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			}));
			var n, o = i("./node_modules/react/index.js"),
				r = i.n(o);
			! function(e) {
				e.Icons = "icons2020"
			}(n || (n = {}));
			const l = r.a.createContext({
				[n.Icons]: !1
			});
			t.b = l
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return l
			})), i.d(t, "b", (function() {
				return s
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = o.a.createContext(!1);

			function s(e) {
				function t(t) {
					return o.a.createElement(l.Consumer, null, i => o.a.createElement(e, r({}, t, {
						isOverlay: i
					})))
				}
				return t.displayName = `WithOverlay(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/controls/Button/index.m.less": function(e, t, i) {
			e.exports = {
				Button: "_2iuoyPiKHN3kfOoeIQalDT",
				button: "_2iuoyPiKHN3kfOoeIQalDT",
				isFullWidth: "_34mIRHpFtnJ0Sk97S2Z3D9",
				xxsmallButtonStyles: "_1h6qKGhVsgNfytYFlo8m3f",
				Icon: "_1mvTX6krm3Q2d1CSyUm28s",
				icon: "_1mvTX6krm3Q2d1CSyUm28s",
				isLeft: "_1HHR_ND8U6x6YrIqKFeXZy",
				isRight: "_3tKmDp5VAtgWvabEmFkJ7T",
				xsmallButtonStyles: "_3uJP0daPEH2plzVEYyTdaH",
				smallButtonStyles: "HNozj_dKjQZ59ZsfEegz8",
				mediumButtonStyles: "_3ukcnQySDskQwK_wB2iXYl",
				largeButtonStyles: "_1J4mN6_wNfCtSyMDUNGQqN",
				xlargeButtonStyles: "XpD6n11mOiKNg8ZKtvgVR",
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
				plain: "_3zbhtNO0bdck0oYbYRhjMC",
				isIconOnly: "_1tPpYVD73ugqp4k-VMFRki",
				isSquare: "_3ojSE1JW7jxNzUzZK8kt7m",
				ExtraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				extraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				InlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				inlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				ChatButton: "_13twe55MPRo1LqypxB-LJx",
				chatButton: "_13twe55MPRo1LqypxB-LJx"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return f
			})), i.d(t, "b", (function() {
				return p
			})), i.d(t, "a", (function() {
				return m
			})), i.d(t, "r", (function() {
				return h
			})), i.d(t, "j", (function() {
				return y
			})), i.d(t, "k", (function() {
				return w
			})), i.d(t, "i", (function() {
				return k
			})), i.d(t, "m", (function() {
				return C
			})), i.d(t, "n", (function() {
				return j
			})), i.d(t, "l", (function() {
				return O
			})), i.d(t, "p", (function() {
				return E
			})), i.d(t, "o", (function() {
				return S
			})), i.d(t, "e", (function() {
				return I
			})), i.d(t, "f", (function() {
				return N
			})), i.d(t, "h", (function() {
				return B
			})), i.d(t, "d", (function() {
				return T
			})), i.d(t, "g", (function() {
				return M
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				r = i("./src/lib/classNames/index.ts"),
				l = i("./src/reddit/controls/InternalLink/index.tsx"),
				s = i("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = i("./src/reddit/controls/Button/index.m.less"),
				c = i.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = {
				role: "button",
				tabIndex: 0
			};
			var f, p, _, m;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(f || (f = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain"
			}(p || (p = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(_ || (_ = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(m || (m = {}));
			const h = (e, t) => i => o.a.createElement(e, {
					className: Object(r.a)(t, i.className)
				}),
				g = e => {
					const {
						"data-redditstyle": t,
						Icon: i,
						iconPosition: n = _.C,
						isFullWidth: l = !1,
						isSquare: a = !1,
						children: h,
						className: g,
						kind: y = m.Button,
						priority: w = p.Primary,
						redditStyle: k,
						size: C = f.S,
						text: j,
						...O
					} = e, E = Object(s.a)(), S = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: i,
						Icon: n,
						isFullWidth: o,
						isSquare: l,
						priority: s,
						size: a,
						text: d
					}) => Object(r.a)(e, c.a.Button, s && c.a[s], a && c.a[a], {
						[c.a.isFullWidth]: o,
						[c.a.isIconOnly]: !!n && !d,
						[c.a.isSquare]: l,
						[c.a.redditStyle]: !(!t && !i)
					}))({
						baseClassName: g,
						children: h,
						dataRedditStyle: t,
						Icon: i,
						isFullWidth: l,
						isSquare: a,
						priority: w,
						redditStyle: k,
						size: C,
						text: j
					}), I = (({
						children: e,
						text: t,
						Icon: i,
						iconPosition: n,
						priority: l,
						isInIcons2020: s
					}) => !i && t ? o.a.createElement("span", null, t) : o.a.createElement(o.a.Fragment, null, i && (n === _.C || n === _.L) && o.a.createElement(i, {
						className: Object(r.a)(c.a.Icon, {
							[c.a.isLeft]: n === _.L
						}),
						isFilled: s && l === p.Primary
					}), t && o.a.createElement("span", {
						className: c.a.Text
					}, t), e && e, i && n === _.R && o.a.createElement(i, {
						className: Object(r.a)(c.a.Icon, c.a.isRight),
						isFilled: s && l === p.Primary
					})))({
						children: h,
						text: j,
						Icon: i,
						iconPosition: n,
						priority: w,
						isInIcons2020: E
					});
					return y === m.InternalLink && (e => "to" in e)(O) ? o.a.createElement(b, d({}, u, O, {
						className: S
					}), I) : y === m.ExternalLink && (e => "href" in e)(O) ? o.a.createElement(x, d({}, u, O, {
						className: S
					}), I) : o.a.createElement(v, d({}, u, O, {
						className: S
					}), I)
				},
				b = e => o.a.createElement(l.a, e),
				x = e => o.a.createElement("a", e),
				v = e => o.a.createElement("button", e),
				y = e => o.a.createElement(g, d({
					kind: m.ExternalLink,
					priority: p.Primary
				}, e)),
				w = e => o.a.createElement(g, d({
					kind: m.InternalLink,
					priority: p.Primary
				}, e)),
				k = e => o.a.createElement(g, d({
					kind: m.Button,
					priority: p.Primary
				}, e)),
				C = e => o.a.createElement(g, d({
					kind: m.ExternalLink,
					priority: p.Secondary
				}, e)),
				j = e => o.a.createElement(g, d({
					kind: m.InternalLink,
					priority: p.Secondary
				}, e)),
				O = e => o.a.createElement(g, d({
					kind: m.Button,
					priority: p.Secondary
				}, e)),
				E = e => o.a.createElement(g, d({
					kind: m.InternalLink,
					priority: p.Plain
				}, e)),
				S = e => o.a.createElement(g, d({
					kind: m.Button,
					priority: p.Plain
				}, e)),
				I = ({
					className: e,
					...t
				}) => o.a.createElement(g, d({
					kind: m.Button,
					priority: p.Primary,
					className: Object(r.a)(e, c.a.DangerButtonColors)
				}, t)),
				N = ({
					className: e,
					...t
				}) => o.a.createElement(g, d({
					kind: m.Button,
					className: Object(r.a)(e, c.a.GoldButtonColors)
				}, t)),
				B = ({
					className: e,
					...t
				}) => o.a.createElement(g, d({
					kind: m.Button,
					className: Object(r.a)(e, c.a.PremiumButtonColors)
				}, t)),
				T = ({
					className: e,
					...t
				}) => o.a.createElement(g, d({
					kind: m.Button,
					className: Object(r.a)(e, c.a.ChatButton)
				}, t)),
				M = ({
					className: e,
					...t
				}) => o.a.createElement(g, d({
					kind: m.Button,
					className: Object(r.a)(e, c.a.InlineTextButton)
				}, t));
			t.q = g
		},
		"./src/reddit/controls/Dropdown/index.m.less": function(e, t, i) {
			e.exports = {
				dropdownTriangle: "_1oxgVV3q47KbjEKqP5CHuM",
				iconStyles: "Ls9uHSAO9p2g7EMya2KXp",
				dropdown: "_2uYY-KeuYHKiwl-9aF0UiL"
			}
		},
		"./src/reddit/controls/Dropdown/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				r = i("./src/lib/classNames/index.ts"),
				l = i("./src/lib/domUtils/index.ts"),
				s = i("./src/reddit/constants/zIndex.ts"),
				a = i("./src/reddit/controls/Dropdown/index.m.less"),
				c = i.n(a);
			class d extends o.a.Component {
				componentDidMount() {
					this.props.onDropdownMounted && this.props.onDropdownMounted(), this.props.noFocus || this.ref && this.ref.focus({
						preventScroll: this.props.isOverlay
					})
				}
				componentWillUnmount() {
					Object(l.a)(this.props.tooltipId)
				}
				render() {
					const e = this.props,
						t = {};
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? s.d + 1 : s.c)), o.a.createElement("div", {
						className: Object(r.a)(c.a.dropdown, e.className),
						id: this.props.id,
						ref: e => this.ref = e,
						role: "menu",
						style: {
							...t,
							...e.style
						},
						tabIndex: -1,
						onScroll: e.onScroll
					}, e.children)
				}
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				r = i("./node_modules/react-redux/es/index.js"),
				l = i("./src/lib/classNames/index.ts"),
				s = i("./src/reddit/actions/modal.ts"),
				a = i("./src/reddit/constants/keycodes.ts"),
				c = i("./src/reddit/controls/Input/index.m.less"),
				d = i.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === a.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...i
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(l.a)(d.a.input, e),
						onKeyDown: this.handleKeyDown
					}, i))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: s.f
			})(f)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, i) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/InternalLink/index.m.less": function(e, t, i) {
			e.exports = {
				disabledLink: "_1tQt2CUWT3M7NNSMoh_o_4"
			}
		},
		"./src/reddit/controls/InternalLink/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return u
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				r = i("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = i("./src/lib/classNames/index.ts"),
				s = i("./src/reddit/helpers/path/index.ts"),
				a = i("./src/reddit/controls/InternalLink/index.m.less"),
				c = i.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}

			function u({
				children: e,
				className: t,
				disabled: i,
				replace: n,
				to: a,
				...u
			}) {
				return i ? o.a.createElement("span", {
					className: Object(l.a)(c.a.disabledLink, t)
				}, e) : ("string" == typeof a && (a = Object(s.b)(a)), o.a.createElement(r.a, d({
					className: t,
					to: a
				}, u), e))
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return j
			})), i.d(t, "c", (function() {
				return O
			}));
			var n = i("./node_modules/lodash/omit.js"),
				o = i.n(n),
				r = i("./node_modules/query-string/index.js"),
				l = i.n(r),
				s = i("./node_modules/react/index.js"),
				a = i.n(s),
				c = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/reselect/es/index.js"),
				u = i("./src/lib/addQueryParams/index.ts");
			var f = (e, t) => t ? Object(u.a)(e, {
					user_id: t
				}) : e,
				p = i("./src/lib/opener/index.ts"),
				_ = i("./src/lib/redditId/index.ts"),
				m = i("./src/reddit/actions/post.ts"),
				h = i("./src/reddit/constants/adEvents.ts"),
				g = i("./src/reddit/helpers/getVendorMetadata.ts"),
				b = i("./src/reddit/helpers/pixels.ts"),
				x = i("./src/reddit/selectors/posts.ts"),
				v = i("./src/reddit/selectors/user.ts");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(d.a)(v.a, v.i, (e, {
					isSponsored: t,
					postId: i
				}) => t && i ? Object(x.b)(e, i) : null, x.D, (e, t, i, n) => ({
					allowClickTracking: e,
					basePixelMetadata: i,
					userId: t ? Object(_.a)(t.id) : null,
					post: n
				})),
				k = Object(c.b)(w, e => ({
					fireAdPixelsOfType: (t, i) => e(Object(m.u)(t, i)),
					recordClick: (t, i, n) => {
						const o = t.events.filter(({
							type: e,
							url: t
						}) => e === h.a.Click && Object(b.b)(t));
						Object(b.c)(o), e(Object(m.l)(String(i), {
							postId: t.id,
							vendorMetadata: n
						}))
					}
				})),
				C = (e, t, i, n) => {
					const o = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					n && t.outboundUrl && o && (e.href = f(t.outboundUrl, i))
				},
				j = (e, t, i) => {
					let n, o = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(i)) {
						o = Object(g.a)(e, t, h.a.Click);
						const {
							url: r,
							query: s
						} = l.a.parseUrl(i);
						n = l.a.stringifyUrl({
							url: r,
							query: {
								...s,
								...o
							}
						})
					} else n = i;
					return {
						url: n,
						metadata: o
					}
				},
				O = (e, t, i) => {
					const n = j(t, i, e.href);
					return e.href = n.url, n.metadata
				},
				E = ({
					isSponsored: e,
					source: t
				}) => !!(e && (null == t ? void 0 : t.outboundUrl)),
				S = k(e => {
					const t = Object(s.useRef)(null),
						{
							allowClickTracking: i,
							basePixelMetadata: n,
							fireAdPixelsOfType: r,
							href: l,
							isSponsored: c,
							post: d,
							postId: u,
							recordClick: f,
							source: _,
							userId: m
						} = e;
					let g = o()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "recordClick", "source", "userId"]);
					const b = _ && _.outboundUrl && c ? _.outboundUrl : l;
					return g = {
						...g,
						href: b,
						rel: p.a,
						target: p.c.BLANK
					}, !_ || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: i
						} = e;
						return !(!t || !i) && (t > i + 3e5 || t < i - 36e5)
					})(_) ? a.a.createElement("a", g) : a.a.createElement("a", y({}, g, {
						onMouseDown: o => {
							if (!E(e)) return !(1 !== o.button && 2 !== o.button && !o.ctrlKey) || void C(o.currentTarget, _, m, i);
							t.current = O(o.currentTarget, u, n)
						},
						onClick: () => {
							d && (E(e) && f(d, h.a.Click, t.current), r(d, h.a.Click))
						},
						onMouseLeave: e => {
							c || ((e, t) => {
								e.href = t
							})(e.currentTarget, b)
						},
						onTouchStart: e => C(e.currentTarget, _, m, i)
					}))
				});
			t.b = S
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, i) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				r = i("./src/lib/classNames/index.ts"),
				l = i("./src/reddit/controls/TextButton/index.m.less"),
				s = i.n(l);
			t.a = e => o.a.createElement("button", {
				children: e.children,
				className: Object(r.a)(s.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return o
			}));
			i("./node_modules/polished/dist/polished.es.js");
			var n = i("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function o(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(n.a)(e).post
			}
		},
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return l
			}));
			var n = i("./node_modules/polished/dist/polished.es.js"),
				o = i("./src/reddit/models/NewStructuredStyles/index.ts");
			const r = e => Object(n.b)(e) < .6;

			function l(e, t = o.a.bodyText, i = o.b.bodyText) {
				return r(e) ? i : t
			}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return l
			})), i.d(t, "d", (function() {
				return s
			})), i.d(t, "c", (function() {
				return a
			}));
			var n = i("./src/reddit/constants/elementIds.ts");
			let o;
			const r = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(n.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				l = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, o || (o = s(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${o}px`;
					const t = document.getElementById(n.c);
					t && (t.style.marginRight = `${o}px`)
				},
				s = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				a = e => {
					if (!e || !document.body) return 0;
					const t = s(document.body),
						i = e.offsetWidth - e.scrollWidth;
					return t || i
				}
		},
		"./src/reddit/hooks/useCoreStyleExperiments.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var n = i("./node_modules/react/index.js"),
				o = i("./src/reddit/contexts/CoreStyleExperiments.ts");
			const r = () => Object(n.useContext)(o.b)[o.a.Icons]
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js");
			t.a = function(e, t, i) {
				Object(n.useEffect)(() => {
					const n = e && e.current;
					if (!n || "undefined" == typeof IntersectionObserver) return;
					const o = new IntersectionObserver(t, i);
					return o.observe(n), () => {
						o.unobserve(n)
					}
				}, [e, t, i])
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, i) {
			"use strict";
			var n = i("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = n.b
		},
		"./src/reddit/icons/fonts/helpers.m.less": function(e, t, i) {
			e.exports = {
				TooltipDesc: "_37iEJpUpWXN00_fpZKHglg",
				tooltipDesc: "_37iEJpUpWXN00_fpZKHglg"
			}
		},
		"./src/reddit/icons/fonts/helpers.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return c
			})), i.d(t, "a", (function() {
				return d
			}));
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				r = i("./src/reddit/icons/fonts/helpers.m.less"),
				l = i.n(r);
			const s = {
				activity: "activity",
				activity_fill: "activity_fill",
				add: "add",
				add_fill: "add_fill",
				add_media: "add_media",
				add_media_fill: "add_media_fill",
				add_to_feed: "add_to_feed",
				add_to_feed_fill: "add_to_feed_fill",
				admin: "admin",
				admin_fill: "admin_fill",
				all: "all",
				all_fill: "all_fill",
				appearance: "appearance",
				appearance_fill: "appearance_fill",
				approve: "approve",
				approve_fill: "approve_fill",
				archived: "archived",
				archived_fill: "archived_fill",
				aspect_ratio: "aspect_ratio",
				aspect_ratio_fill: "aspect_ratio_fill",
				aspect_rectangle: "aspect_rectangle",
				aspect_rectangle_fill: "aspect_rectangle_fill",
				attach: "attach",
				attach_fill: "attach_fill",
				audio: "audio",
				audio_fill: "audio_fill",
				author: "author",
				author_fill: "author_fill",
				avatar_style: "avatar_style",
				avatar_style_fill: "avatar_style_fill",
				award: "award",
				award_fill: "award_fill",
				back: "back",
				back_fill: "back_fill",
				ban: "ban",
				ban_fill: "ban_fill",
				best: "best",
				best_fill: "best_fill",
				bold: "bold",
				bold_fill: "bold_fill",
				bot: "bot",
				bot_fill: "bot_fill",
				bounce: "bounce",
				bounce_fill: "bounce_fill",
				browse: "browse",
				browse_fill: "browse_fill",
				browser: "browser",
				browser_fill: "browser_fill",
				cake: "cake",
				cake_fill: "cake_fill",
				camera: "camera",
				camera_fill: "camera_fill",
				caret_down: "caret_down",
				caret_down_fill: "caret_down_fill",
				caret_left: "caret_left",
				caret_left_fill: "caret_left_fill",
				caret_right: "caret_right",
				caret_right_fill: "caret_right_fill",
				caret_up: "caret_up",
				caret_up_fill: "caret_up_fill",
				chat: "chat",
				chat_fill: "chat_fill",
				chat_group: "chat_group",
				chat_group_fill: "chat_group_fill",
				chat_new: "chat_new",
				chat_new_fill: "chat_new_fill",
				checkbox: "checkbox",
				checkbox_dismiss: "checkbox_dismiss",
				checkbox_dismiss_fill: "checkbox_dismiss_fill",
				checkbox_fill: "checkbox_fill",
				checkmark: "checkmark",
				checkmark_fill: "checkmark_fill",
				chrome: "chrome",
				chrome_fill: "chrome_fill",
				clear: "clear",
				clear_fill: "clear_fill",
				close: "close",
				close_fill: "close_fill",
				closed_captioning: "closed_captioning",
				closed_captioning_fill: "closed_captioning_fill",
				code_block: "code_block",
				code_block_fill: "code_block_fill",
				code_inline: "code_inline",
				code_inline_fill: "code_inline_fill",
				coins: "coins",
				coins_fill: "coins_fill",
				coins_outline_color: "coins_outline_color",
				collapse: "collapse",
				collapse_fill: "collapse_fill",
				collection: "collection",
				collection_fill: "collection_fill",
				comment: "comment",
				comment_fill: "comment_fill",
				comments: "comments",
				comments_fill: "comments_fill",
				community: "community",
				community_fill: "community_fill",
				controversial: "controversial",
				controversial_fill: "controversial_fill",
				crop: "crop",
				crop_fill: "crop_fill",
				crosspost: "crosspost",
				crosspost_fill: "crosspost_fill",
				crowd_control: "crowd_control",
				crowd_control_fill: "crowd_control_fill",
				custom_feed: "custom_feed",
				custom_feed_fill: "custom_feed_fill",
				customize: "customize",
				customize_fill: "customize_fill",
				day: "day",
				day_fill: "day_fill",
				delete: "delete",
				delete_fill: "delete_fill",
				discover: "discover",
				discover_fill: "discover_fill",
				dismiss_all: "dismiss_all",
				dismiss_all_fill: "dismiss_all_fill",
				distinguish: "distinguish",
				distinguish_fill: "distinguish_fill",
				down: "down",
				down_fill: "down_fill",
				download: "download",
				download_fill: "download_fill",
				downvote: "downvote",
				downvote_fill: "downvote_fill",
				downvotes: "downvotes",
				downvotes_fill: "downvotes_fill",
				drag: "drag",
				duplicate: "duplicate",
				duplicate_fill: "duplicate_fill",
				edit: "edit",
				edit_fill: "edit_fill",
				effect: "effect",
				effect_fill: "effect_fill",
				embed: "embed",
				embed_fill: "embed_fill",
				emoji: "emoji",
				emoji_fill: "emoji_fill",
				expand: "expand",
				expand_fill: "expand_fill",
				external_link: "external_link",
				external_link_fill: "external_link_fill",
				feed_posts: "feed_posts",
				feed_posts_fill: "feed_posts_fill",
				feed_video: "feed_video",
				feed_video_fill: "feed_video_fill",
				filter: "filter",
				filter_fill: "filter_fill",
				format: "format",
				format_fill: "format_fill",
				forward: "forward",
				forward_fill: "forward_fill",
				gif_post: "gif_post",
				gif_post_fill: "gif_post_fill",
				heart: "heart",
				heart_fill: "heart_fill",
				help: "help",
				help_fill: "help_fill",
				hide: "hide",
				hide_fill: "hide_fill",
				history: "history",
				history_fill: "history_fill",
				home: "home",
				home_fill: "home_fill",
				hot: "hot",
				hot_fill: "hot_fill",
				icon_vault: "icon_vault",
				icon_vault_fill: "icon_vault_fill",
				ignore_reports: "ignore_reports",
				ignore_reports_fill: "ignore_reports_fill",
				image_post: "image_post",
				image_post_fill: "image_post_fill",
				info: "info",
				info_fill: "info_fill",
				italic: "italic",
				italic_fill: "italic_fill",
				join: "join",
				join_fill: "join_fill",
				joined: "joined",
				joined_fill: "joined_fill",
				jump_down: "jump_down",
				jump_down_fill: "jump_down_fill",
				jump_up: "jump_up",
				jump_up_fill: "jump_up_fill",
				karma: "karma",
				karma_fill: "karma_fill",
				keyboard: "keyboard",
				keyboard_fill: "keyboard_fill",
				kick: "kick",
				kick_fill: "kick_fill",
				leave: "leave",
				leave_fill: "leave_fill",
				left: "left",
				left_fill: "left_fill",
				link_post: "link_post",
				link_post_fill: "link_post_fill",
				list_bulleted: "list_bulleted",
				list_bulleted_fill: "list_bulleted_fill",
				list_numbered: "list_numbered",
				list_numbered_fill: "list_numbered_fill",
				live: "live",
				live_fill: "live_fill",
				load: "load",
				location: "location",
				location_fill: "location_fill",
				lock: "lock",
				lock_fill: "lock_fill",
				logout: "logout",
				logout_fill: "logout_fill",
				loop: "loop",
				loop_fill: "loop_fill",
				mark_read: "mark_read",
				mark_read_fill: "mark_read_fill",
				mask: "mask",
				mask_fill: "mask_fill",
				media_gallery: "media_gallery",
				media_gallery_fill: "media_gallery_fill",
				meme: "meme",
				meme_fill: "meme_fill",
				menu: "menu",
				menu_fill: "menu_fill",
				message: "message",
				message_fill: "message_fill",
				mod: "mod",
				mod_fill: "mod_fill",
				mod_mail: "mod_mail",
				mod_mail_fill: "mod_mail_fill",
				mod_mode: "mod_mode",
				mod_mode_fill: "mod_mode_fill",
				mod_mute: "mod_mute",
				mod_mute_fill: "mod_mute_fill",
				mod_overflow: "mod_overflow",
				mod_overflow_fill: "mod_overflow_fill",
				mod_queue: "mod_queue",
				mod_queue_fill: "mod_queue_fill",
				mod_unmute: "mod_unmute",
				mod_unmute_fill: "mod_unmute_fill",
				new: "new",
				new_fill: "new_fill",
				night: "night",
				night_fill: "night_fill",
				notification: "notification",
				notification_fill: "notification_fill",
				notification_frequent: "notification_frequent",
				notification_frequent_fill: "notification_frequent_fill",
				notification_off: "notification_off",
				notification_off_fill: "notification_off_fill",
				nsfw: "nsfw",
				nsfw_fill: "nsfw_fill",
				nsfw_language: "nsfw_language",
				nsfw_language_fill: "nsfw_language_fill",
				nsfw_violence: "nsfw_violence",
				nsfw_violence_fill: "nsfw_violence_fill",
				original: "original",
				original_fill: "original_fill",
				overflow_carat: "overflow_carat",
				overflow_carat_fill: "overflow_carat_fill",
				overflow_horizontal: "overflow_horizontal",
				overflow_vertical: "overflow_vertical",
				pause: "pause",
				pause_fill: "pause_fill",
				payment: "payment",
				payment_fill: "payment_fill",
				pending_posts: "pending_posts",
				pending_posts_fill: "pending_posts_fill",
				pin: "pin",
				pin_fill: "pin_fill",
				play: "play",
				play_fill: "play_fill",
				poll_post: "poll_post",
				poll_post_fill: "poll_post_fill",
				popular: "popular",
				popular_fill: "popular_fill",
				powerup: "powerup",
				powerup_color_outline: "powerup_color_outline",
				powerup_fill: "powerup_fill",
				powerup_fill_color: "powerup_fill_color",
				premium: "premium",
				premium_fill: "premium_fill",
				privacy: "privacy",
				privacy_fill: "privacy_fill",
				profile: "profile",
				profile_fill: "profile_fill",
				quarantined: "quarantined",
				quarantined_fill: "quarantined_fill",
				quote: "quote",
				quote_fill: "quote_fill",
				r_slash: "r_slash",
				r_slash_fill: "r_slash_fill",
				radio_button: "radio_button",
				radio_button_fill: "radio_button_fill",
				random: "random",
				random_fill: "random_fill",
				rating_drugs: "rating_drugs",
				rating_everyone: "rating_everyone",
				rating_mature: "rating_mature",
				rating_nsfw: "rating_nsfw",
				rating_violence: "rating_violence",
				refresh: "refresh",
				refresh_fill: "refresh_fill",
				remove: "remove",
				remove_fill: "remove_fill",
				report: "report",
				report_fill: "report_fill",
				reverse: "reverse",
				reverse_fill: "reverse_fill",
				right: "right",
				right_fill: "right_fill",
				rising: "rising",
				rising_fill: "rising_fill",
				rotate: "rotate",
				rotate_fill: "rotate_fill",
				rpan: "rpan",
				rpan_fill: "rpan_fill",
				rules: "rules",
				rules_fill: "rules_fill",
				safari: "safari",
				safari_fill: "safari_fill",
				save: "save",
				save_fill: "save_fill",
				saved: "saved",
				saved_fill: "saved_fill",
				scheduled: "scheduled",
				scheduled_fill: "scheduled_fill",
				search: "search",
				search_fill: "search_fill",
				self: "self",
				self_fill: "self_fill",
				send: "send",
				send_fill: "send_fill",
				settings: "settings",
				settings_fill: "settings_fill",
				share: "share",
				share_android: "share_android",
				share_android_fill: "share_android_fill",
				share_fill: "share_fill",
				share_ios: "share_ios",
				share_ios_fill: "share_ios_fill",
				show: "show",
				show_fill: "show_fill",
				side_menu: "side_menu",
				side_menu_fill: "side_menu_fill",
				skipback10: "skipback10",
				skipback10_fill: "skipback10_fill",
				skipforward10: "skipforward10",
				skipforward10_fill: "skipforward10_fill",
				sort: "sort",
				sort_fill: "sort_fill",
				spam: "spam",
				spam_fill: "spam_fill",
				spoiler: "spoiler",
				spoiler_fill: "spoiler_fill",
				sponsored: "sponsored",
				sponsored_fill: "sponsored_fill",
				star: "star",
				star_fill: "star_fill",
				statistics: "statistics",
				statistics_fill: "statistics_fill",
				sticker: "sticker",
				sticker_fill: "sticker_fill",
				strikethrough: "strikethrough",
				strikethrough_fill: "strikethrough_fill",
				subtract: "subtract",
				subtract_fill: "subtract_fill",
				superscript: "superscript",
				superscript_fill: "superscript_fill",
				swipe_back: "swipe_back",
				swipe_back_fill: "swipe_back_fill",
				swipe_down: "swipe_down",
				swipe_down_fill: "swipe_down_fill",
				swipe_forward: "swipe_forward",
				swipe_forward_fill: "swipe_forward_fill",
				swipe_up: "swipe_up",
				swipe_up_fill: "swipe_up_fill",
				table: "table",
				table_fill: "table_fill",
				tag: "tag",
				tag_fill: "tag_fill",
				tap: "tap",
				tap_fill: "tap_fill",
				text_post: "text_post",
				text_post_fill: "text_post_fill",
				text_size: "text_size",
				text_size_fill: "text_size_fill",
				top: "top",
				top_fill: "top_fill",
				topic: "topic",
				topic_activism: "topic_activism",
				topic_addiction_support: "topic_addiction_support",
				topic_advice: "topic_advice",
				topic_animals: "topic_animals",
				topic_anime: "topic_anime",
				topic_art: "topic_art",
				topic_beauty: "topic_beauty",
				topic_business: "topic_business",
				topic_careers: "topic_careers",
				topic_cars: "topic_cars",
				topic_celebrity: "topic_celebrity",
				topic_crafts: "topic_crafts",
				topic_crypto: "topic_crypto",
				topic_culture: "topic_culture",
				topic_diy: "topic_diy",
				topic_entertainment: "topic_entertainment",
				topic_ethics: "topic_ethics",
				topic_family: "topic_family",
				topic_fashion: "topic_fashion",
				topic_fitness: "topic_fitness",
				topic_food: "topic_food",
				topic_funny: "topic_funny",
				topic_gender: "topic_gender",
				topic_health: "topic_health",
				topic_help: "topic_help",
				topic_history: "topic_history",
				topic_internet: "topic_internet",
				topic_law: "topic_law",
				topic_learning: "topic_learning",
				topic_lifestyle: "topic_lifestyle",
				topic_mature: "topic_mature",
				topic_mensfashion: "topic_mensfashion",
				topic_menshealth: "topic_menshealth",
				topic_meta: "topic_meta",
				topic_military: "topic_military",
				topic_movies: "topic_movies",
				topic_music: "topic_music",
				topic_news: "topic_news",
				topic_other: "topic_other",
				topic_outdoors: "topic_outdoors",
				topic_pets: "topic_pets",
				topic_photography: "topic_photography",
				topic_places: "topic_places",
				topic_politics: "topic_politics",
				topic_programming: "topic_programming",
				topic_reading: "topic_reading",
				topic_religion: "topic_religion",
				topic_science: "topic_science",
				topic_sexorientation: "topic_sexorientation",
				topic_sports: "topic_sports",
				topic_style: "topic_style",
				topic_tabletop: "topic_tabletop",
				topic_technology: "topic_technology",
				topic_television: "topic_television",
				topic_traumasupport: "topic_traumasupport",
				topic_travel: "topic_travel",
				topic_videogaming: "topic_videogaming",
				topic_womenshealth: "topic_womenshealth",
				trim: "trim",
				trim_fill: "trim_fill",
				trophy: "trophy",
				trophy_fill: "trophy_fill",
				u_slash: "u_slash",
				u_slash_fill: "u_slash_fill",
				undo: "undo",
				undo_fill: "undo_fill",
				unheart: "unheart",
				unlock: "unlock",
				unlock_fill: "unlock_fill",
				unmod: "unmod",
				unmod_fill: "unmod_fill",
				unverified: "unverified",
				unverified_fill: "unverified_fill",
				up: "up",
				up_fill: "up_fill",
				upload: "upload",
				upload_fill: "upload_fill",
				upvote: "upvote",
				upvote_fill: "upvote_fill",
				upvotes: "upvotes",
				upvotes_fill: "upvotes_fill",
				user: "user",
				user_fill: "user_fill",
				verified: "verified",
				verified_fill: "verified_fill",
				video_camera: "video_camera",
				video_camera_fill: "video_camera_fill",
				video_live: "video_live",
				video_live_fill: "video_live_fill",
				video_post: "video_post",
				video_post_fill: "video_post_fill",
				view_card: "view_card",
				view_card_fill: "view_card_fill",
				view_classic: "view_classic",
				view_classic_fill: "view_classic_fill",
				view_compact: "view_compact",
				view_compact_fill: "view_compact_fill",
				view_grid_fill: "view_grid_fill",
				view_grid_fill_1: "view_grid_fill_1",
				views: "views",
				views_fill: "views_fill",
				volume: "volume",
				volume_fill: "volume_fill",
				volume_mute: "volume_mute",
				volume_mute_fill: "volume_mute_fill",
				wiki: "wiki",
				wiki_fill: "wiki_fill",
				world: "world",
				world_fill: "world_fill",
				addCollection: "addCollection",
				addGild: "addGild",
				addGildDashed: "addGildDashed",
				calendar: "calendar",
				coin: "coin",
				create: "create",
				distinguishShield: "distinguishShield",
				dropdownTriangle: "dropdownTriangle",
				envelope: "envelope",
				expandoArrowCollapse: "expandoArrowCollapse",
				expandoArrowExpand: "expandoArrowExpand",
				expandoMediaGif: "expandoMediaGif",
				expandoMediaImage: "expandoMediaImage",
				expandoMediaLightbox: "expandoMediaLightbox",
				expandoMediaLink: "expandoMediaLink",
				expandoMediaText: "expandoMediaText",
				expandoMediaVideo: "expandoMediaVideo",
				gif: "gif",
				gift: "gift",
				gild: "gild",
				ignoreReport: "ignoreReport",
				link: "link",
				list: "list",
				modActions: "modActions",
				modSettings: "modSettings",
				op: "op",
				outboundLink: "outboundLink",
				pencil: "pencil",
				photos: "photos",
				plus: "plus",
				post: "post",
				sticky: "sticky",
				text: "text",
				unpin: "unpin",
				video: "video"
			};
			var a = i("./src/lib/lessComponent.tsx");
			const c = (e, t) => `icon icon-${e}${t&&!e.includes("fill")&&s[`${e}_fill`]?"_fill":""}`,
				d = a.a.wrapped(e => o.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", l.a)
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				r = i("./src/lib/classNames/index.ts"),
				l = i("./src/reddit/icons/fonts/helpers.tsx");

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				isFilled: t,
				name: i,
				...n
			}) => o.a.createElement("i", s({
				className: Object(r.a)(e, Object(l.b)(i, t))
			}, n))
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js"),
				o = i.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), o.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js"),
				o = i.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("polygon", {
				fill: "inherit",
				points: "11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"
			}))
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.m.less": function(e, t, i) {
			e.exports = {
				defaultInactiveState: "_1g3Xfh9mljLHWv24M9A3Rw",
				outline: "_3SlBAJb2MbUHwgBZFH8eL7",
				highlighted: "_1-JQy00VxG8hpTxxdxV32y"
			}
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				r = i("./src/lib/classNames/index.ts"),
				l = i("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				s = i.n(l);
			t.a = Object(n.forwardRef)(({
				className: e,
				isHighlighted: t
			}, i) => o.a.createElement("svg", {
				className: Object(r.a)(s.a.defaultInactiveState, e),
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				width: "12",
				height: "12",
				ref: i
			}, o.a.createElement("circle", {
				cx: "6",
				cy: "6",
				r: "4"
			}), o.a.createElement("path", {
				className: Object(r.a)(s.a.outline, {
					[s.a.highlighted]: t
				}),
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooSilhouette/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js"),
				o = i.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 320 320",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"
			}), o.a.createElement("path", {
				d: "m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
			}), o.a.createElement("path", {
				d: "m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"
			}), o.a.createElement("path", {
				d: "m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
			}), o.a.createElement("path", {
				d: "m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
			}), o.a.createElement("path", {
				d: "m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
			}), o.a.createElement("path", {
				d: "m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
			}), o.a.createElement("path", {
				d: "m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"
			}), o.a.createElement("path", {
				d: "m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
			}), o.a.createElement("path", {
				d: "m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
			}), o.a.createElement("path", {
				d: "m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
			}), o.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
			}), o.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z",
				fill: "none"
			}), o.a.createElement("path", {
				d: "m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
			}), o.a.createElement("circle", {
				cx: "238.47",
				cy: "80.13",
				r: "22.93"
			}), o.a.createElement("path", {
				d: "m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
			})))
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, i) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./src/lib/lessComponent.tsx"),
				o = i("./src/reddit/layout/row/InlineButton/index.m.less"),
				r = i.n(o);
			t.a = n.a.button("inlineButton", r.a)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, i) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, i) {
			"use strict";
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				r = i("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				l = i("./src/lib/classNames/index.ts"),
				s = i("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				a = i.n(s);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(l.a)(a.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: a.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: a.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/selectors/tooltip.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return n
			})), i.d(t, "b", (function() {
				return o
			}));
			const n = e => e.tooltipId,
				o = e => t => t.tooltipId === e
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit.2fa73da5b4ec2c81a968.js.map