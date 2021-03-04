// https://www.redditstatic.com/desktop2x/PostCreation.0fac9dc152b354736fec.js
// Retrieved at 3/4/2021, 6:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation", "ModListing~Reddit~StandalonePostPage"], {
		"./src/graphql/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/graphql/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"1e0a4bfe5ac9"}')
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/graphql/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/graphql/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"f5276d63e133"}')
		},
		"./src/higherOrderComponents/addOverlayEvents.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return u
			}));
			var o, s = n("./node_modules/lodash/debounce.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/overlayEvents.ts");

			function u(e, t) {
				class n extends i.Component {
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
						t && -1 !== t.indexOf(o.Keydown) || document.addEventListener("keydown", this.handleKeyDown), t && -1 !== t.indexOf(o.Click) || document.addEventListener("click", this.handleMouseClick), t && -1 !== t.indexOf(o.Resize) || window.addEventListener("resize", this.handleResize)
					}
					componentWillUnmount() {
						document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("click", this.handleMouseClick), window.removeEventListener("resize", this.handleResize)
					}
					render() {
						return a.a.createElement(e, this.props)
					}
				}
				return Object(l.b)(null, e => ({
					onKeyDown: t => e(d.d({
						event: t
					})),
					onMouseClick: t => e(d.e({
						event: t
					})),
					onResize: t => e(d.f({
						event: t
					}))
				}))(n)
			}! function(e) {
				e.Click = "click", e.Keydown = "keydown", e.Resize = "resize"
			}(o || (o = {}))
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
				return b
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/FocusTrap/index.ts"),
				a = n("./src/reddit/actions/shortcuts/utils.ts"),
				l = n("./src/reddit/components/Portal/index.tsx"),
				c = n("./src/reddit/constants/shortcuts.ts"),
				d = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
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
			const h = ({
				className: e,
				isVisible: t,
				...n
			}) => s.a.createElement("div", p({
				className: Object(r.a)(m.a.overlay, e, {
					[m.a.mIsVisible]: t
				})
			}, n));

			function b(e) {
				class t extends o.Component {
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
						}), Object(d.a)(), this.ref && (this.focusTrap = new i.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(d.b)(), Object(a.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: o,
							onOverlayClick: i,
							overlayClassName: a,
							overlayCustomStyles: d,
							withOverlay: u,
							...p
						} = t, b = p;
						return s.a.createElement(l.a, {
							container: document.getElementById(c.b)
						}, s.a.createElement(h, {
							className: a,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: d
						}, s.a.createElement("div", {
							"aria-modal": !0,
							className: Object(r.a)(m.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, s.a.createElement(e, b))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/asTooltip.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return C
			}));
			var o = n("./node_modules/lodash/omit.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/fastdom/index.ts"),
				c = n("./src/reddit/components/Portal/index.tsx"),
				d = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				u = n("./src/higherOrderComponents/sizeMe.tsx"),
				m = n("./src/reddit/components/HiddenDiv.m.less"),
				p = n.n(m),
				h = n("./src/lib/lessComponent.tsx").a.div("Component", p.a),
				b = n("./src/reddit/hooks/useCoreStyleExperiments.ts");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const g = ["left", "bottom"],
				_ = ["left", "top"],
				x = ({
					container: e,
					containerHeight: t,
					excludeContainerPosition: n,
					isFixed: o,
					targetBox: s,
					isOverlayOff: r,
					targetPosition: i,
					tooltipSize: a,
					tooltipPosition: l
				}) => {
					const c = document.body,
						d = c.clientTop || 0,
						u = c.clientLeft || 0,
						[m, p, h, b] = e ? [e.scrollLeft, e.scrollTop, e.scrollWidth, t || e.scrollHeight] : [window.pageXOffset, window.pageYOffset, window.innerWidth, document.body.scrollHeight],
						f = {
							bottom: s.bottom,
							center: s.top + s.height / 2,
							top: s.top
						} [i[1]] + {
							bottom: -a.height,
							center: -a.height / 2,
							top: 0
						} [l[1]],
						g = {
							left: s.left,
							center: s.left + s.width / 2,
							right: s.right
						} [i[0]] + {
							left: 0,
							center: -a.width / 2,
							right: -a.width
						} [l[0]];
					let _, x;
					o ? (_ = f - d, x = g - u) : (x = m + u + g, _ = p + d + f);
					const C = {
							left: x,
							top: _
						},
						v = {
							bottom: Math.max(0, _ + a.height - b),
							left: Math.max(0, 0 - x),
							right: Math.max(0, x + a.width - h),
							top: Math.max(0, 0 - _)
						};
					if (h > 320 && b > 667 && !r && (Boolean(v.left) !== Boolean(v.right) && (v.left ? C.left = 0 : C.left -= v.right), Boolean(v.top) !== Boolean(v.bottom) && (v.top ? C.top = 0 : C.top -= v.bottom)), n && e) {
						const t = e.getBoundingClientRect();
						C.top = C.top - t.top, C.left = C.left - t.left
					}
					return {
						overflow: v,
						style: C
					}
				};

			function C(e, t) {
				const n = Object(d.b)(e, t),
					o = Object(u.a)(e => {
						const t = Object(b.b)(),
							{
								container: o,
								containerHeight: r,
								domEl: l,
								excludeContainerPosition: c,
								isFixed: d,
								target: u,
								isOverlayOff: m,
								targetPosition: p,
								tooltipPosition: h
							} = e;
						if (!u || !l) return null;
						const C = l.getBoundingClientRect(),
							v = u.getBoundingClientRect(),
							y = x({
								container: o,
								containerHeight: r,
								excludeContainerPosition: c,
								isOverlayOff: m,
								isFixed: !!d,
								targetBox: v,
								targetPosition: p || g,
								tooltipSize: {
									height: C.height,
									width: C.width
								},
								tooltipPosition: h || _
							}),
							E = s()(e, "target", "targetPosition", "tooltipPosition"),
							O = e.style ? {
								...y.style,
								...e.style
							} : y.style;
						return i.a.createElement(n, f({}, E, {
							className: Object(a.a)(e.className, t ? "isInIcons2020" : "isNotInIcons2020"),
							overflow: y.overflow,
							style: O,
							targetBox: v
						}))
					});
				class m extends r.Component {
					constructor() {
						super(...arguments), this.state = {
							containerHeight: null,
							isOpen: !1,
							mounted: !1
						}, this.target = null
					}
					componentDidMount() {
						this.target = this.props.tooltipTarget || document.getElementById(this.props.tooltipId), this.props.isOpen && l.a.write(() => {
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
						if (!this.props.isOpen) return this.props.renderContentsHidden ? i.a.createElement(h, null, this.props.children) : null;
						const {
							isOpen: e,
							tooltipId: t,
							tooltipTarget: n
						} = this.props, {
							containerHeight: r,
							mounted: a
						} = this.state, l = s()(this.props, "isOpen"), d = t ? this.target : n, u = `${e}-${a}-${t||""}`;
						return i.a.createElement(c.a, {
							key: u,
							container: this.props.container
						}, i.a.createElement(o, f({}, l, {
							containerHeight: r,
							target: d
						})))
					}
				}
				return m
			}
		},
		"./src/higherOrderComponents/sizeMe.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/omit.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-dom/index.js"),
				l = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
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
			const m = ({
				style: e
			}) => {
				const t = {
					style: e || {
						width: "100%",
						height: "100%"
					}
				};
				return i.a.createElement("div", t)
			};
			m.displayName = "SizeMePlaceholder", t.a = function(e) {
				const t = function(e) {
					const t = t => {
						const {
							domEl: n,
							explicitRef: o,
							placeholder: r,
							size: a,
							style: l
						} = t, d = s()(t, "explicitRef", "size", "style"), p = "object" != typeof a || "number" != typeof a.width && "number" != typeof a.height, h = {
							domEl: n,
							style: l
						};
						"object" == typeof a && (h.size = a);
						const b = p && !1 !== r ? i.a.createElement(m, {
							style: l
						}) : i.a.createElement(e, c({}, h, d));
						return i.a.createElement(u, {
							ref: o
						}, b)
					};
					return t.displayName = `SizeMeRenderer(${d(e)})`, t
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
								o = t;
							return Number(n.height).toFixed(0) !== Number(o.height).toFixed(0) || Number(n.width).toFixed(0) !== Number(o.width).toFixed(0)
						}, this.checkIfSizeChanged = e => {
							const {
								width: t,
								height: n
							} = e.getBoundingClientRect(), o = {
								width: t,
								height: n
							};
							this.hasSizeChanged(this.state, o) && this.setState(o)
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
						const e = this.reactInst && l.a.findDOMNode(this.reactInst);
						e ? (this.domEl = e, this.checkIfSizeChanged(this.domEl)) : this.domEl && (this.domEl = null)
					}
					render() {
						const e = {
							...this.state
						};
						return i.a.createElement(t, c({
							domEl: this.domEl,
							explicitRef: this.refCallback,
							size: e
						}, this.props))
					}
				}
				return n.displayName = `SizeMe(${d(e)})`, n
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/CSSVariableProvider/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function a(e) {
				const t = t => s.a.createElement(r.b.Consumer, null, n => s.a.createElement(e, i({
					theme: n
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
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
					i = new o.BigNumber("100").multipliedBy(r);
				return new o.BigNumber(i).toNumber()
			}
		},
		"./src/lib/convertToCamelCase/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const t = {};
				for (const n in e) {
					t[n.replace(/_\w/g, e => e[1].toUpperCase())] = e[n]
				}
				return t
			}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			let o;
			const s = new Map,
				r = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), o = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!r.get(t)) {
						r.set(t, n);
						const o = s.get(t);
						if (o) {
							o(e, n && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const i = (e, t) => {
					try {
						s.set(e, t), o && o.observe(e)
					} catch (n) {
						0
					}
				},
				a = e => {
					try {
						s.delete(e), o && o.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/lessComponent.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts");
			const i = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noindex", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview", "svg", "animate", "animateMotion", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "switch", "symbol", "text", "textPath", "tspan", "use", "view"],
				a = (e, t, n) => {
					const o = n[t];
					class i extends s.a.PureComponent {
						render() {
							const {
								className: t,
								innerRef: n,
								...i
							} = this.props;
							return s.a.createElement(e, {
								...i,
								ref: n,
								className: Object(r.a)(o, t)
							})
						}
					}
					return i.cssClassName = o, i.displayName = t, i
				},
				l = {};
			for (const c of i) l[c] = (e, t) => a(c, e, t);
			t.a = {
				...l,
				wrapped: (e, t, n) => {
					const o = n[t];
					class i extends s.a.PureComponent {
						render() {
							const {
								className: t,
								...n
							} = this.props;
							return s.a.createElement(e, {
								...n,
								className: Object(r.a)(o, t)
							})
						}
					}
					return i.cssClassName = o, i.displayName = t, i
				}
			}
		},
		"./src/lib/opener/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			const o = {
					SELF: "_self",
					BLANK: "_blank",
					PARENT: "_parent",
					TOP: "_top"
				},
				s = "noopener",
				r = `${s} ${"noreferrer"}`,
				i = `${s} ${"nofollow"} ${"ugc"}`;
			t.d = (e, t = o.SELF, n) => {
				if (t === o.BLANK) {
					const o = window.open("", t, n);
					null != o ? (o.opener = null, o.location.href = e) : window.location.href = e
				} else window.location.href = e
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return X
			})), n.d(t, "o", (function() {
				return Z
			})), n.d(t, "m", (function() {
				return Y
			})), n.d(t, "q", (function() {
				return te
			})), n.d(t, "s", (function() {
				return ne
			})), n.d(t, "n", (function() {
				return se
			})), n.d(t, "r", (function() {
				return re
			})), n.d(t, "l", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return le
			})), n.d(t, "b", (function() {
				return ue
			})), n.d(t, "p", (function() {
				return me
			})), n.d(t, "f", (function() {
				return pe
			})), n.d(t, "g", (function() {
				return he
			})), n.d(t, "j", (function() {
				return be
			})), n.d(t, "d", (function() {
				return ge
			})), n.d(t, "c", (function() {
				return ve
			})), n.d(t, "i", (function() {
				return ye
			})), n.d(t, "h", (function() {
				return we
			})), n.d(t, "k", (function() {
				return je
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeDraftKey/index.ts"),
				a = n("./src/reddit/actions/changeUsername.ts"),
				l = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				m = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/graphql/operations/CommentToxicity.json"),
				_ = n("./src/lib/makeApiRequest/index.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				C = n("./src/lib/omitHeaders/index.ts"),
				v = n("./src/reddit/constants/headers.ts"),
				y = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				E = n("./src/reddit/helpers/genericServerError/index.ts"),
				O = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				w = n("./src/reddit/models/PostCreationForm/index.ts"),
				j = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				P = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const S = (e, t, n, o) => {
					let s, r;
					if (o === w.h.MARKDOWN) s = n.text, r = null;
					else {
						s = null;
						let e = null;
						n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(e, {
						...g,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				T = async (e, t, n, o, r) => {
					const i = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === w.h.MARKDOWN) i.text = n.text;
					else {
						i.text = null;
						let e = null;
						n.rteState && (e = b.a.toRichTextJSON(n.rteState).document), i.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(_.a)(Object(C.a)(e, [v.a]), {
						method: s.cb.POST,
						endpoint: Object(y.a)(Object(j.a)(Object(P.a)(`${e.apiUrl}/api/comment.json`))),
						data: i
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {
							comment: Object(O.a)(e.body.json.data.things[0].data, o)
						}
					} : {
						...e,
						body: {
							comment: Object(O.a)(e.body, o)
						}
					} : {
						...e,
						error: e.error || Object(E.a)()
					})
				};
			var I = n("./src/reddit/endpoints/post/index.tsx"),
				M = n("./src/reddit/endpoints/post/convert.ts"),
				N = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				D = n("./src/reddit/featureFlags/index.ts"),
				L = n("./src/reddit/helpers/dom/index.ts"),
				R = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				F = n("./src/reddit/models/PostDraft/index.ts"),
				B = n("./src/reddit/models/RichTextJson/index.ts"),
				A = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				U = n("./src/reddit/models/Toast/index.ts"),
				W = n("./src/reddit/selectors/comments.ts"),
				H = n("./src/reddit/selectors/commentSelector.ts"),
				K = n("./src/reddit/selectors/platform.ts"),
				z = n("./src/reddit/selectors/posts.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				q = n("./src/reddit/actions/comment/index.ts"),
				G = n("./src/reddit/actions/comment/constants.ts");
			const J = Object(r.a)(G.j),
				X = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, o) => {
					const s = o();
					if (!!s.features.comments.drafts[t])
						if (Object(V.L)(s) && e) {
							const o = J({
								hasFocus: e,
								draftKey: t
							});
							n(Object(a.f)(o))
						} else n(J({
							hasFocus: e,
							draftKey: t
						}))
				}, Q = Object(r.a)(G.E), Z = Object(r.a)(G.G), Y = Object(r.a)(G.F), $ = Object(r.a)(G.D), ee = (e, t, n, o) => {
					const s = o.ok && o.body,
						r = s && s.comment && s.comment.id;
					R.f(e, n, t, r)
				}, te = "Toxicity_Warning__Modal", ne = (e, t, n, o, s, r) => async (i, a, {
					gqlContext: l
				}) => {
					const d = a(),
						u = Object(K.e)(d);
					let m = "";
					if (u && (m = u.name), D.d.enableToxicityWarning(d)) {
						if (!(await S(l(), m, o, s))) return void i(Object(c.i)(te))
					}
					i(se(e, t, n, o, s, r))
				}, oe = e => e.rteState ? b.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, se = (e, t, n, r, i, a, l) => async (u, b, {
					apiContext: g
				}) => {
					u(Object(c.g)(te));
					const _ = b(),
						x = _.features.comments.submit.pending[n];
					if (!_.user.account || x) return;
					u(Q({
						draftKey: n,
						draft: r
					}));
					const C = _.user.account.displayText,
						v = r.commentMode;
					let y;
					if (l ? (y = await Object(N.i)(g(), e, r, C), u(Object(m.a)({
							streamId: e,
							level: y.body.automuteLevel
						}))) : y = await T(g(), e, r, C, v), y.ok) {
						let o;
						o = y.body, u(Z({
							...o,
							headCommentId: Object(W.w)(_, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const s = Object(z.I)(b(), {
							postId: e
						});
						u(Object(d.u)(s, f.a.CommentSubmitted))
					} else {
						y.error && y.error.type === s.Ab && R.g(_, oe(r), e);
						const t = y.error && y.error.fields && y.error.fields[0] ? y.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u($({
							draftKey: n,
							error: y.error
						})), u(Object(h.e)({
							duration: h.a,
							kind: U.b.Error,
							text: t
						}))
					}
					ee(b(), t, i, y), a || Object(p.d)()
				}, re = e => async (t, n, {
					gqlContext: o
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: r,
						parentCommentDepth: i,
						draftKey: a,
						formData: l,
						editorMode: d
					} = e, u = n(), m = Object(K.e)(u);
					let p = "";
					if (m && (p = m.name), D.d.enableToxicityWarning(u)) {
						if (!(await S(o(), p, l, d))) return void t(Object(c.i)(te))
					}
					t(ie({
						commentsPageKey: r,
						draftKey: a,
						parentCommentDepth: i,
						parentCommentId: s,
						formData: l,
						editorMode: d
					}))
				}, ie = e => async (t, n, {
					apiContext: o
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: i,
						parentCommentDepth: a,
						draftKey: l,
						formData: d,
						editorMode: u
					} = e;
					t(Object(c.g)(te));
					const m = n(),
						h = m.features.comments.submit.pending[l];
					if (!m.user.account || h) return;
					t(Q({
						draftKey: l,
						draft: d
					}));
					const b = m.user.account.displayText,
						f = d.commentMode,
						g = await T(o(), r, d, b, f);
					if (g.ok) t(Y({
						...g.body,
						parentCommentId: r,
						commentsPageKey: i,
						draftKey: l,
						depth: a + 1
					}));
					else {
						if (g.error && g.error.type === s.Ab) {
							const e = Object(H.a)(m, {
								commentId: r
							});
							if (!e) return;
							R.g(m, oe(d), e.postId, r)
						}
						t($({
							draftKey: l,
							error: g.error
						}))
					}
					ee(n(), i, u, g), Object(p.d)()
				}, ae = Object(r.a)(G.p), le = Object(r.a)(G.o), ce = Object(r.a)(G.k), de = (Object(r.a)(G.f), Object(r.a)(G.l)), ue = (Object(r.a)(G.s), (e, t, n) => async (s, r, {
					apiContext: i
				}) => {
					const a = e === w.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(B.G)(t)) s(de({
						editorMode: e,
						draftKey: n,
						content: a ? B.i : ""
					})), s(Object(u.c)(e));
					else {
						s(Object(u.b)(n));
						const r = await Object(M.a)(i(), e, a ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							s(Object(u.a)(n)), s(de({
								editorMode: e,
								draftKey: n,
								content: t
							})), s(Object(u.c)(e))
						} else s(Object(u.a)(n)), s(Object(h.e)({
							duration: h.a,
							kind: U.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), me = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (o, s) => {
					const r = s(),
						d = Object(i.a)(F.c.replyToComment, t);
					if (!Object(V.J)(s())) return o(Object(l.j)()), void o(Object(c.k)({
						actionSource: c.a.Reply,
						redirectUrl: Object(W.m)(s(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						m = u && u[t];
					if ((m || u && n) && (Object.keys(u).forEach(t => u[t] && o(le({
							parentCommentId: t,
							commentsPageKey: e
						}))), m)) return;
					let p = "",
						h = null;
					const b = r.user.prefs.commentMode,
						f = Object(L.d)();
					if (f) {
						const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (b === w.h.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => A.s(e, null)).map(e => A.l([e])),
								n = A.s("", null),
								o = A.l([n]);
							h = {
								document: [A.c(t), o]
							}
						}
					}
					const g = r.features.comments.drafts[d];
					let _;
					if (_ = f ? {
							commentMode: b,
							draftType: F.c.replyToComment,
							rtJson: h,
							text: `${p}\n`
						} : g || {
							commentMode: b,
							draftType: F.c.replyToComment,
							rtJson: h,
							text: ""
						}, Object(V.L)(r)) {
						const n = ae({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: d,
							formData: _
						});
						o(Object(a.f)(n))
					} else o(ae({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: d,
						formData: _
					}))
				}, pe = e => async t => {
					t(Object(q.m)(e)), t(ge(e))
				}, he = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(le({
						parentCommentId: e,
						commentsPageKey: t
					})), n(me({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(q.m)({
						commentId: e,
						commentsPageKey: t
					}))
				}, be = (e, t) => n => n(ce({
					draftKey: e,
					formData: t
				})), fe = Object(r.a)(G.r), ge = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: o,
					text: s
				}) => async (r, i) => {
					const a = i();
					a.user.account && (R.c(a), r(fe({
						commentId: e,
						commentsPageKey: n,
						draftKey: o,
						formData: {
							text: s,
							commentMode: t,
							rteState: null,
							draftType: F.c.edit,
							hasFocus: !0
						}
					})))
				}, _e = Object(r.a)(G.A), xe = Object(r.a)(G.z), Ce = Object(r.a)(G.B), ve = Object(r.a)(G.g), ye = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: o,
					formData: r
				}) => async (n, i, {
					apiContext: a
				}) => {
					const l = i();
					if (!l.user.account) return;
					n(_e({
						draftKey: o
					})), R.d(l);
					const c = l.user.account.displayText || "",
						d = r.commentMode,
						u = await (async (e, t, n, o, r, i) => {
							const a = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (i === w.h.MARKDOWN) a.text = o.text;
							else {
								a.text = null;
								let e = null;
								o.rteState && (e = b.a.toRichTextJSON(o.rteState).document), a.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(_.a)(Object(C.a)(e, [v.a]), {
								endpoint: Object(y.a)(Object(P.a)(Object(j.a)(`${e.apiUrl}/api/editusertext`))),
								method: s.cb.POST,
								data: a
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(k.a)(e)
							} : {
								...e,
								body: {
									comment: Object(O.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(O.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(E.a)()
							})
						})(a(), e, 0, r, c, d);
					if (u.ok) {
						const s = u.body;
						n(Ce({
							commentId: e,
							commentsPageKey: t,
							draftKey: o
						})), n(Object(q.h)({
							[e]: {
								...s.comment
							}
						}))
					} else n(xe({
						draftKey: o,
						error: u.error
					}))
				}, Ee = Object(r.a)(G.x), Oe = Object(r.a)(G.w), ke = Object(r.a)(G.y), we = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o();
					n(Ee({
						id: e
					})), R.a(e, i);
					const a = await ((e, t) => Object(_.a)(Object(C.a)(e, [v.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/del`),
						method: s.cb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(k.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(E.a)()
					}))(r(), e);
					a.ok ? n(ke({
						id: e,
						postId: t
					})) : n(Oe({
						id: e,
						error: a.error
					}))
				}, je = e => async (t, n, {
					apiContext: o
				}) => {
					const s = !n().features.comments.models[e].sendReplies;
					t(Object(q.h)({
						[e]: {
							sendReplies: s
						}
					})), (await Object(I.q)(o(), e, s)).ok || t(Object(q.h)({
						[e]: {
							sendReplies: !s
						}
					}))
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return j
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "j", (function() {
				return R
			})), n.d(t, "n", (function() {
				return F
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "e", (function() {
				return U
			})), n.d(t, "l", (function() {
				return K
			})), n.d(t, "m", (function() {
				return z
			})), n.d(t, "c", (function() {
				return V
			})), n.d(t, "a", (function() {
				return G
			})), n.d(t, "b", (function() {
				return J
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/economics/helpers/async.ts"),
				l = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/actions/vote.ts"),
				p = n("./src/reddit/endpoints/comment/index.tsx"),
				h = n("./src/reddit/helpers/commentList/index.ts"),
				b = n("./src/reddit/selectors/telemetry.ts");
			var f = n("./src/reddit/models/Comment/index.ts"),
				g = n("./src/reddit/models/Post/index.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/models/Vote/index.ts"),
				C = n("./src/reddit/selectors/comments.ts"),
				v = n("./src/reddit/selectors/commentSelector.ts"),
				y = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				E = n("./src/reddit/selectors/moderatingComments.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/actions/comment/constants.ts");
			const w = {},
				j = Object(i.a)(k.n),
				P = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(O.J)(n())) return t(Object(l.j)()), void t(Object(c.k)({
						actionSource: c.a.Save,
						redirectUrl: Object(C.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const i = r.isSaved ? p.k : p.g;
					if (t(j({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await i(o(), e)).ok) {
						const n = r.isSaved ? s.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : s.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							o = s.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(u.e)({
							text: n,
							kind: _.b.Undo,
							buttonText: o,
							buttonAction: P(e)
						}))
					} else t(j({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, S = e => `viewing-comment-${e}`, T = o.a.telemetry.commentConsumedThreshold, I = e => async (t, n) => {
					const s = n();
					if (!Object(v.a)(s, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					(({
						state: e,
						commentId: t
					}) => Object(r.a)({
						source: "comment",
						action: "view",
						noun: "comment",
						...b.defaults(e),
						profile: b.profile(e),
						post: b.post(e, t),
						media: b.media(e, t),
						subreddit: b.subreddit(e),
						comment: b.comment(e, t)
					}))({
						state: s,
						commentId: e
					}), r.c.start(S(e));
					const i = setTimeout(() => (({
						state: e,
						commentId: t
					}) => Object(r.a)({
						source: "comment",
						action: "consume",
						noun: "comment",
						...b.defaults(e),
						profile: b.profile(e),
						post: b.post(e, t),
						media: b.media(e, t),
						subreddit: b.subreddit(e),
						comment: b.comment(e, t)
					}))({
						state: s,
						commentId: e
					}), T);
					w[e] = i
				}, M = (e, t) => async (n, o) => {
					const s = o(),
						i = S(e);
					if (Object(v.a)(s, {
							commentId: e
						}) && r.c.has(i)) {
						const n = r.c.end(i);
						!t && n < T && (clearTimeout(w[e]), delete w[e])
					}
				}, N = Object(i.a)(k.v), D = Object(i.a)(k.u), L = Object(i.a)(k.t), R = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						i = r.moreComments.models[t],
						l = r.platform.currentPage,
						c = l && l.routeMatch,
						d = c && c.match,
						{
							partialPostId: u
						} = d ? d.params : null;
					if (!u) return;
					const m = Object(g.r)(u);
					n(N({
						moreCommentsId: i.id
					}));
					const b = await Object(p.e)(s(), m, {
						token: i.token
					}, Object(y.a)(r));
					if (b.ok) {
						const t = b.body,
							o = Object(h.a)(t, m, r);
						n(D({
							key: e,
							moreCommentsItem: i,
							shouldCollapse: o,
							...t
						}));
						const s = r.posts.models[m];
						s && "subreddit" === s.belongsTo.type && t.comments && await n(Object(a.a)({
							commentIds: Object.keys(b.body.comments),
							postIds: [s.id],
							skip: ["communityDetails", "subscription"],
							subredditId: s.belongsTo.id
						}))
					} else n(L({
						moreCommentsItem: i,
						...b.error
					}))
				}, F = Object(m.a)(h.b, x.a.upvoted), B = Object(m.a)(h.b, x.a.downvoted), A = Object(i.a)(k.i), U = Object(i.a)(k.h), W = Object(i.a)(k.d), H = Object(i.a)(k.e), K = (Object(i.a)(k.b), Object(i.a)(k.c), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (o, s) => {
					const r = s(),
						i = Object(f.g)(e),
						a = Object(C.n)(r, {
							commentLink: i,
							commentsPageKey: t
						}),
						l = Object(E.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						c = a.depth;
					o(W({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: l
					})), l || 0 !== c || n(e, !0), Object(d.d)()
				}), z = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(H({
						commentId: e,
						commentsPageKey: t
					}))
				}, V = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: o
				}) => async (s, r) => {
					const i = r(),
						a = Object(h.e)(t, e, n, i),
						l = Object(E.b)(i, {
							commentId: e.id,
							commentsPageKey: t
						});
					s(W({
						commentId: a,
						commentsPageKey: t,
						isCollapsed: l
					})), 0 === n && o(a, !0), Object(d.d)()
				}, q = Object(i.a)(k.q), G = e => t => t(q({
					draftKey: e
				})), J = Object(i.a)(k.a)
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
				i = n("./src/reddit/endpoints/governance/requester.ts");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/economics/me/constants.ts");
			const c = Object(a.a)(l.a),
				d = Object(a.a)(l.b),
				u = Object(a.a)(l.c),
				m = e => async (t, n, {
					apiContext: o
				}) => {
					const s = e && e.includeMemberships || !1,
						a = e && e.forceFetch || !1,
						l = n();
					if (!l.economics.me.fetched || s && !l.economics.me.data.specialMemberships || a) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(o(), s);
						if (e.ok) {
							const n = e.body;
							s && !n.specialMemberships && (n.specialMemberships = {}), t(c(n))
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
								method: o.cb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "h", (function() {
				return F
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/config.ts"),
				d = n("./src/graphql/operations/PollVote.json"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/endpoints/governance/requester.ts");
			var h = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/gov.ts"),
				_ = n("./src/reddit/actions/governance/constants.ts"),
				x = n("./src/reddit/actions/governance/errorToast.ts");
			const C = Object(s.a)(_.b),
				v = Object(s.a)(_.c),
				y = Object(s.a)(_.e),
				E = (Object(s.a)(_.f), Object(s.a)(_.g), Object(s.a)(_.h)),
				O = Object(s.a)(_.i),
				k = Object(s.a)(_.j),
				w = Object(s.a)(_.k),
				j = Object(s.a)(_.q),
				P = Object(s.a)(_.r),
				S = Object(s.a)(_.s),
				T = Object(s.a)(_.t),
				I = Object(s.a)(_.u),
				M = Object(s.a)(_.v),
				N = Object(s.a)(_.w),
				D = Object(s.a)(_.x),
				L = (e, t) => async (n, o, {
					apiContext: s,
					gqlContext: r
				}) => {
					let i, l = o().polls.models[e];
					if (n(k({
							pollId: e
						})), (i = l.type === m.a.GA ? await ((e, t, n) => Object(u.a)(e, {
								...d,
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
									endpoint: `${c.a.metaUrl}/polls/${t}/${n}/votes/me/${o}`
								})
							}(s(), l.subredditId, e, t)).ok) {
						if (l.type === m.a.GA) {
							const {
								options: e
							} = i.body.data.updatePostPollVoteState.poll;
							n(y({
								pollId: l.id,
								optionId: t,
								options: e
							}))
						} else n(w(i.body));
						const s = o();
						if ((l = s.polls.models[e]) && Object(m.e)(l)) {
							const {
								postId: e
							} = l, t = s.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(a.U)(e))
						}
					} else n(O({
						pollId: e,
						error: i.error || i.errors[0].message
					})), Object(x.a)(n, i.error || i.errors[0].messsage)
				}, R = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					n(S());
					const d = s().transfers.communityPoints.contentId || void 0,
						u = await
					function(e, t) {
						return Object(p.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${c.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(a(), {
						...e,
						contentId: d
					});
					u.ok ? (n(T({
						...u.body,
						subredditId: e.subredditId
					})), n(Object(l.e)({
						kind: b.b.SuccessCommunity,
						text: o.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [o.fbt._param("amount", Object(r.a)(e.amount)), o.fbt._param("tokenName", Object(g.n)(s(), {
							subredditId: e.subredditId
						})), o.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(i.f)())) : (n(j({
						error: u.error
					})), Object(x.a)(n, u.error))
				}, F = e => async (t, n, {
					apiContext: o
				}) => {
					t(M());
					const s = await Object(h.a)(o(), e);
					s.ok ? t(N(s.body)) : t(I({
						error: s.error
					}))
				}
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return N
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "c", (function() {
				return H
			})), n.d(t, "h", (function() {
				return q
			})), n.d(t, "f", (function() {
				return Q
			})), n.d(t, "d", (function() {
				return oe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/filterQueryParams/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/postCollection/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/history.ts"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeApiRequest/index.ts"),
				m = n("./src/lib/omitHeaders/index.ts"),
				p = n("./src/reddit/constants/headers.ts");
			var h = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: d.cb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var b = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: d.cb.POST,
				data: {
					title: t,
					sr_fullname: n
				}
			});
			var f = (e, t) => Object(u.a)(Object(m.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: d.cb.POST,
					data: {
						collection_id: t
					}
				}),
				g = n("./src/config.ts");
			var _ = (e, t) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${g.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: d.cb.GET
			});
			var x = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: d.cb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var C = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: d.cb.POST,
				data: {
					collection_id: t,
					title: n
				}
			});
			var v = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: d.cb.POST,
				data: {
					collection_id: t,
					link_ids: n.join(",")
				}
			});
			var y = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: d.cb.POST,
				data: {
					collection_id: t,
					description: n
				}
			});
			var E = (e, t, n) => Object(u.a)(Object(m.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: d.cb.POST,
					data: {
						collection_id: t,
						display_layout: n
					}
				}),
				O = n("./src/reddit/helpers/overlay/index.ts"),
				k = n("./src/reddit/helpers/path/index.ts"),
				w = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/postCollection.ts"),
				P = n("./src/reddit/selectors/posts.ts"),
				S = n("./src/reddit/selectors/subreddit.ts");
			const T = Object(i.a)(a.c),
				I = Object(i.a)(a.b),
				M = Object(i.a)(a.d),
				N = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					n(T());
					const r = await b(s(), e, t);
					let i;
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
						})), i = t
					} else {
						const e = r.error;
						n(I(e))
					}
					return i
				}, D = Object(i.a)(a.f), L = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().postCollection.subredditToIds || {};
					if (Object.keys(r).length > 0) return;
					const i = await _(s(), e);
					i.ok ? t(D(i.body)) : t(Object(l.e)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, R = Object(i.a)(a.g), F = (e, t, n) => async (s, r, {
					apiContext: i
				}) => {
					if ((await x(i(), e, t)).ok) {
						const i = r(),
							a = Object(P.I)(i, {
								postId: t
							}),
							c = a && a.title || "",
							d = Object(j.q)(i, {
								collectionId: e
							}),
							u = (d && d.postIds && d.postIds.indexOf(t) || -1) - 1;
						if (s(R({
								collectionId: e,
								postId: t
							})), n && u >= 0) {
							const t = r(),
								n = Object(j.q)(t, {
									collectionId: e
								}),
								o = n && n.postIds && n.postIds[u] || "",
								i = Object(P.I)(t, {
									postId: o
								});
							i && i.permalink && s(Object(O.a)(i.permalink))
						}
						s(Object(l.e)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Following post removed from collection successfully: {postTitle}", [o.fbt._param("postTitle", c)], {
								hk: "8e1lV"
							}),
							buttonText: o.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: U(e, t)
						}))
					} else s(Object(l.e)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, B = Object(i.a)(a.a), A = Object(i.a)(a.t), U = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const i = s();
					if ((await h(r(), e, t)).ok) {
						n(B({
							collectionId: e,
							postId: t
						})), n(A({
							collectionId: e,
							postId: t
						}));
						const s = Object(P.I)(i, {
								postId: t
							}),
							r = Object(j.q)(i, {
								collectionId: e
							}),
							a = r && r.title || "";
						n(Object(l.e)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Success! You added a post to the collection: {title}", [o.fbt._param("title", a)], {
								hk: "3KNJWi"
							}),
							buttonText: o.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(O.a)(s.permalink)
						}))
					} else n(Object(l.e)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, W = Object(i.a)(a.e), H = (e, t) => async (n, i, {
					apiContext: a
				}) => {
					const c = i();
					if ((await f(a(), e)).ok) {
						const {
							url: i
						} = c.platform.currentPage, a = Object(j.q)(c, {
							collectionId: e
						}), d = a && a.title || "", u = a && a.subredditId, m = u ? Object(S.c)(c, u) : "/";
						n(W({
							collectionId: e,
							collection: a
						})), n(t ? Object(s.c)(Object(r.a)(i, ["collection"])) : Object(s.b)(m)), n(Object(l.e)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection deleted successfully: {title}", [o.fbt._param("title", d)], {
								hk: "4tcOKB"
							})
						}))
					} else n(Object(l.e)({
						kind: w.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, K = Object(i.a)(a.r), z = Object(i.a)(a.n), V = Object(i.a)(a.s), q = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					n(K());
					const i = await C(r(), e, t);
					let a = !1;
					if (i.ok) n(V({
						collectionId: e,
						newTitle: t
					})), n(Object(l.e)({
						kind: w.b.SuccessMod,
						text: o.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), a = !0;
					else {
						const e = i.error;
						n(z(e)), n(Object(l.e)({
							kind: w.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return a
				}, G = Object(i.a)(a.l), J = Object(i.a)(a.m), X = Object(i.a)(a.k), Q = e => async (t, n) => {
					const o = n().platform.currentPage.locationState;
					t(!(!o || !o[c.a.IsOverlay]) ? Object(O.a)(e.permalink) : Object(s.b)(Object(k.b)(e.permalink)))
				}, Z = Object(i.a)(a.i), Y = Object(i.a)(a.j), $ = Object(i.a)(a.h), ee = Object(i.a)(a.p), te = Object(i.a)(a.o), ne = Object(i.a)(a.q), oe = e => async t => {
					const n = [],
						{
							collectionId: s,
							description: r,
							displayLayout: i,
							postIds: a,
							title: c
						} = e;
					a && n.push(t(((e, t) => async (n, s, {
						apiContext: r
					}) => {
						n(Z());
						const i = await v(r(), e, t);
						let a = !1;
						return i.ok ? (n(Y({
							collectionId: e,
							postIds: t
						})), n(Object(l.e)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), a = !0) : (n($({
							error: i.error
						})), n(Object(l.e)({
							kind: w.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), a
					})(s, a))), c && n.push(t(q(s, c))), void 0 !== r && n.push(t(((e, t) => async (n, s, {
						apiContext: r
					}) => {
						n(G());
						const i = await y(r(), e, t);
						let a = !1;
						if (i.ok) n(J({
							collectionId: e,
							newDescription: t
						})), n(Object(l.e)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), a = !0;
						else {
							const e = i.error;
							n(X(e)), n(Object(l.e)({
								kind: w.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(s, r))), i && n.push(t(((e, t) => async (n, s, {
						apiContext: r
					}) => {
						n(ee());
						const i = await E(r(), e, t);
						let a = !1;
						if (i.ok) n(ne({
							collectionId: e,
							newLayout: t
						})), n(Object(l.e)({
							kind: w.b.SuccessMod,
							text: o.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), a = !0;
						else {
							const e = i.error;
							n(te(e)), n(Object(l.e)({
								kind: w.b.Error,
								text: o.fbt._("Something went wrong. Just don't panic.", null, {
									hk: "4Ck6Cm"
								})
							}))
						}
						return a
					})(s, i)));
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
				i = n("./src/reddit/endpoints/post/convert.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts"),
				l = n("./src/reddit/helpers/trackers/postComposer.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(s.a)(m.C),
				h = Object(s.a)(m.p),
				b = Object(s.a)(m.M),
				f = (e, t, n) => async (s, a, {
					apiContext: f
				}) => {
					l.i(a(), t);
					const _ = t === c.h.MARKDOWN,
						x = t === c.h.RICH_TEXT,
						C = m.k;
					if (_ && Object(d.G)(n)) return s(b({
						editorKey: e,
						editorMode: c.h.MARKDOWN,
						content: ""
					})), void s(g(t));
					if (x && !n) return s(b({
						editorKey: e,
						editorMode: c.h.RICH_TEXT,
						content: d.i
					})), void s(g(t));
					s(p(C));
					const v = await Object(i.a)(f(), t, _ ? JSON.stringify(n) : n);
					v.ok ? (s(h(C)), s(b({
						editorKey: e,
						editorMode: t,
						content: v.body.output
					})), s(g(t))) : (s(h(C)), s(Object(r.e)({
						duration: r.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, g = e => async (t, n) => {
					const s = Object(a.k)();
					if (s >= 3) return;
					const i = n().user.prefs.useMarkdown ? c.h.MARKDOWN : c.h.RICH_TEXT;
					if (e === i) return;
					const l = e === c.h.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : o.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.e)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: o.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: l
					})), Object(a.bb)(s + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(o.a)(r.r),
				a = Object(o.a)(r.F),
				l = e => async (t, n, {
					apiContext: o
				}) => {
					const r = await Object(s.a)(o(), e);
					r && r.ok ? t(i({
						streamId: e,
						level: r.body.data.auto_mute_status.level
					})) : t(a(e))
				}
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/telemetry/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/scheduledPosts/index.ts"),
				l = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				m = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				p = n("./src/reddit/models/ScheduledPost/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/routes/postCreation/index.ts"),
				f = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const g = Object(i.a)(l.n),
				_ = Object(i.a)(l.b),
				x = (e, t) => async (n, o, r) => {
					const i = Object(f.a)(o(), {
						scheduledPostId: t,
						subredditId: e
					});
					i && (await n(Object(s.b)(Object(b.c)(i.subreddit.name, i.collectionId))), n((Object(p.p)(i) ? _ : g)(i)))
				}, C = (e, t) => {
					Object(p.p)(t) ? e(Object(a.d)({
						scheduledPost: t
					})) : e(Object(a.h)({
						scheduledPost: t
					}))
				}, v = (e, t, n) => async (s, i, {
					gqlContext: b
				}) => {
					s(Object(a.g)());
					const g = Object(f.a)(i(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (g && Object(p.p)(g) && Object(r.a)(Object(m.u)()(i(), g)), !g) return void s(Object(a.f)({
						message: o.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(n).length) return void C(s, g);
					const _ = await Object(d.a)(b(), {
							...n,
							id: t
						}),
						x = _.body;
					if (!(_.ok && x && x.data && x.data.updateScheduledPost && x.data.updateScheduledPost.ok && x.data.updateScheduledPost.scheduledPost)) return s(Object(a.f)({
						message: _.error && _.error.fields && _.error.fields.length && _.error.fields[0].msg || o.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void s(Object(c.e)(Object(c.d)(l.t(), h.b.Error, l.s(), v(e, t, n))));
					s(Object(c.e)(Object(c.d)(l.w(), h.b.SuccessCommunity))), C(s, Object(u.d)(x.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return T
			}));
			var o = n("./src/lib/assertNever.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				i = n("./src/reddit/actions/scheduledPosts/edit.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				c = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				d = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				u = n("./src/reddit/models/ScheduledPost/index.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				h = n("./src/telemetry/index.ts");
			const b = Object(s.a)(r.g),
				f = Object(s.a)(r.k),
				g = Object(s.a)(r.j),
				_ = Object(s.a)(r.o),
				x = Object(s.a)(r.d),
				C = Object(s.a)(r.f),
				v = Object(s.a)(r.m),
				y = Object(s.a)(r.a),
				E = Object(s.a)(r.c),
				O = Object(s.a)(r.e),
				k = Object(s.a)(r.h),
				w = (e, t) => {
					e(O()), e(Object(a.e)(Object(a.d)(r.r(), m.b.Error, r.s(), j(t))))
				},
				j = ({
					subredditId: e,
					includeStandalone: t = {
						standaloneFirst: 25
					},
					includeRecurring: n = {
						recurringFirst: 1e4
					},
					...o
				}) => async (s, r, {
					gqlContext: i
				}) => {
					if (Object(p.h)(r(), {
							subredditId: e
						})) return;
					s(b());
					const a = {
							subredditId: e,
							includeRecurring: n,
							includeStandalone: t,
							...o
						},
						d = await Object(l.b)(i(), a);
					Object(l.f)(d, a) ? S(s, Object(c.e)(d.body.data), a) : w(s, a)
				}, P = e => async (t, n, {
					gqlContext: o
				}) => {
					const s = n();
					if (!Object(p.h)(s, {
							subredditId: e
						})) return t(j({
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
					const i = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: 25,
								standaloneAfter: r
							}
						},
						a = await Object(l.b)(o(), i);
					a.ok ? S(t, Object(c.e)(a.body.data), i) : t(O())
				}, S = (e, t, n) => {
					Object(c.b)(t) ? e(C(t)) : Object(c.a)(t) ? e(y(t)) : Object(c.c)(t) ? e(v(t)) : w(e, n)
				}, T = (e, t) => async (n, s, r) => {
					const a = {},
						l = s();
					switch (e) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isContestMode":
						case "isPostAsMetaMod":
						case "isSpoiler":
							a[e] = !t[e];
							break;
						case "isSticky":
							const n = !!t.sticky && "NONE" !== t.sticky;
							a.sticky = n ? "NONE" : "SECOND";
							break;
						default:
							return Object(o.a)(e)
					}
					Object(h.a)(Object(d.t)(e, a[e], Object(u.p)(t))(l)), n(Object(i.a)(t.subreddit.id, t.id, a))
				}
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return c
			}));
			var o = n("./src/reddit/constants/shortcuts.ts"),
				s = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = n("./src/reddit/helpers/routeKey/index.ts");
			const i = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const n = t.routeMatch,
						o = Object(s.a)(e);
					return Object(r.b)(n, e, o)
				},
				a = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				l = e => {
					const t = document.getElementById(e),
						n = window.scrollX,
						o = window.scrollY;
					t && (t.focus(), window.scrollTo(n, o))
				},
				c = () => {
					l(o.b)
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
				i = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.m.less"),
				a = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t) => 21 * e + 33 + (t ? 10 : 0);
			t.a = ({
				breakOut: e,
				depth: t,
				isEditing: n,
				...o
			}) => s.a.createElement("div", l({
				className: Object(r.a)({
					[a.a.breakout]: e
				}),
				style: {
					left: c(t, n)
				}
			}, o))
		},
		"./src/reddit/components/CommentCreation/FormFooter/index.m.less": function(e, t, n) {
			e.exports = {
				SubmitButton: "_22S4OsoDdOqiM-hPTeOURa",
				submitButton: "_22S4OsoDdOqiM-hPTeOURa",
				is2020: "_2Ke4JTtee3SBjPy2emSZ3G",
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
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				u = n.n(d);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = i.a.div("FormFooterWrapper", u.a), h = i.a.wrapped(a.i, "SubmitButton", u.a), b = i.a.wrapped(l.a, "LoadingIcon", u.a), f = i.a.wrapped(a.l, "CancelButton", u.a), g = i.a.div("ButtonWrapper", u.a), _ = e => e.preventDefault();
			t.a = ({
				pending: e,
				cancelButtonEnabled: t = !0,
				children: n,
				className: o,
				submitButtonText: i,
				canSubmit: l,
				onSubmit: d,
				onCancel: x
			}) => {
				const C = Object(c.a)();
				return s.a.createElement(p, {
					className: Object(r.a)(o, {
						[u.a.pending]: e
					})
				}, s.a.createElement(g, null, s.a.createElement(h, {
					className: C ? u.a.is2020 : "",
					size: a.c.XS,
					type: "submit",
					disabled: !l,
					onClick: d,
					onMouseDown: _
				}, e ? s.a.createElement(b, {
					sizePx: 10
				}) : i), t && s.a.createElement(f, {
					className: C ? u.a.is2020 : "",
					size: a.c.XS,
					type: "reset",
					disabled: e,
					onClick: x,
					onMouseDown: _
				}, m._("Cancel", null, {
					hk: "2TSLl5"
				}))), n)
			}
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
				return de
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-dom/index.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/comment/authoring.ts"),
				d = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				m = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				b = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				f = n("./src/reddit/controls/ErrorText/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Help/index.tsx"),
				x = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				C = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				v = n("./src/lib/fastdom/index.ts"),
				y = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				E = n.n(y),
				O = n("./src/lib/lessComponent.tsx");
			const k = 310,
				w = O.a.div("Container", E.a);
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						toolbarType: null
					}, this.setContainerRef = e => this.container = e, this.selectToolbar = () => {
						const e = this.container && this.container.parentElement;
						if (!e) return;
						const {
							width: t
						} = e.getBoundingClientRect(), n = t < k ? "compact" : "full";
						n !== this.state.toolbarType && v.a.write(() => {
							this.setState({
								toolbarType: n
							})
						})
					}
				}
				componentDidMount() {
					v.a.read(this.selectToolbar), window.addEventListener("resize", this.selectToolbar)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.selectToolbar)
				}
				render() {
					return r.a.createElement(w, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var P = n("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				S = n("./src/reddit/components/PostCreationForm/DivButton/index.tsx"),
				T = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				I = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				M = n.n(I),
				N = n("./src/reddit/controls/Button/index.tsx"),
				D = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const L = O.a.wrapped(g.a, "LoadingIcon", M.a),
				R = O.a.div("Wrapper", M.a),
				F = O.a.wrapped(P.a, "MarkdownModeIcon", M.a),
				B = O.a.wrapped(S.a, "Button", M.a);
			var A = r.a.memo((function(e) {
					const t = o.fbt._("Switch to fancy pants editor", null, {
							hk: "1XOb4H"
						}),
						n = Object(D.a)();
					return r.a.createElement(R, null, n ? r.a.createElement(N.q, {
						priority: N.b.Plain,
						size: N.c.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? L : F
					}, r.a.createElement(T.a, {
						text: t
					})) : r.a.createElement(B, {
						"aria-label": t,
						setRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick
					}, e.isConverting && r.a.createElement(L, {
						sizePx: 12
					}), r.a.createElement(T.a, {
						text: t
					}), !e.isConverting && r.a.createElement(F, null)))
				})),
				U = n("./src/lib/classNames/index.ts"),
				W = n("./src/reddit/constants/keycodes.ts"),
				H = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				K = n("./src/reddit/constants/componentSizes.ts"),
				z = n("./src/reddit/constants/componentTestIds.ts"),
				V = n("./src/reddit/selectors/activeModalId.ts"),
				q = n("./src/reddit/selectors/comments.ts"),
				G = n("./src/reddit/selectors/editorContent.ts"),
				J = n("./src/reddit/actions/modal.ts"),
				X = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				Q = n("./src/reddit/models/PostCreationForm/index.ts"),
				Z = n("./src/reddit/models/PostDraft/index.ts"),
				Y = n("./src/reddit/models/User/index.ts"),
				$ = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				ee = n.n($);
			const te = O.a.button("SwitchModeButton", ee.a),
				ne = O.a.wrapped(g.a, "LoadingIcon", ee.a),
				oe = O.a.div("CommentHeader", ee.a),
				se = O.a.span("FormHeaderText", ee.a),
				re = O.a.button("HelpButton", ee.a),
				ie = O.a.wrapped(_.a, "HelpIcon", ee.a),
				ae = O.a.wrapped(X.a, "ResizableAutosizeTextarea", ee.a),
				le = O.a.wrapped(C.a, "FormFooter", ee.a),
				ce = O.a.wrapped(b.a, "CurrentUserIcon", ee.a),
				de = e => r.a.createElement(re, {
					className: e.className,
					onClick: e.onClick
				}, r.a.createElement(ie, null)),
				ue = 8,
				me = 16,
				pe = O.a.div("Wrapper", ee.a),
				he = O.a.div("FormWrapper", ee.a),
				be = Object(a.b)(() => Object(l.c)({
					activeModalId: V.a,
					userName: e => e.user.account ? Object(Y.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: q.i,
					isConverting: (e, t) => Object(G.a)(e, t.draftKey)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(J.i)(Object(H.a)(t.draftKey))),
					helpModalToggled: () => e(Object(J.i)(h.b))
				}));
			class fe extends r.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < K.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.wrapperHeight || v.a.write(() => {
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
							v.a.read(this.detectBreakout)
						})
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === Z.c.edit, this.onCancel = () => {
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
						(t || n) && o === W.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: Q.h.MARKDOWN,
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
						draftType: t,
						hasError: n,
						initialText: s
					} = e;
					this.state = {
						text: s || "",
						autofocusDisabled: !1,
						hasChanged: !1,
						showError: n,
						breakOut: !1,
						wrapperHeight: void 0,
						formHeight: null,
						cancelModalText: t === Z.c.edit ? o.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "1ZfaWW"
						}) : o.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "3d8gJY"
						})
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), v.a.read(this.detectBreakout), v.a.write(() => {
						this.props.draft.hasFocus && this.textAreaRef && this.textAreaRef.focus()
					}), this.props.instanceRef && this.props.instanceRef(this)
				}
				componentWillUnmount() {
					this.props.onUnmount({
						text: this.getCurrentText()
					}), window.removeEventListener("resize", this.detectBreakout), this.props.instanceRef && this.props.instanceRef(null)
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
					const e = Object(i.findDOMNode)(this.textAreaRef);
					return e instanceof Element ? e.getBoundingClientRect().height + ue + me + K.o : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: n,
						className: s,
						disableAutofocus: i,
						depth: a,
						draft: l,
						draftKey: b,
						draftType: g,
						errorMsgs: _,
						pending: C,
						modalSeen: v,
						submitButtonText: y,
						isCommentBoxDesignEnabled: E,
						isExpanded: O,
						isTopLevelComment: k,
						onSwitchMode: w,
						userName: P
					} = this.props, {
						cancelModalText: S,
						showError: T,
						text: I,
						breakOut: M,
						wrapperHeight: N
					} = this.state, D = Object(H.a)(b), L = l.draftType === Z.c.edit;
					return r.a.createElement(pe, {
						"data-test-id": z.b,
						className: Object(U.a)(s, {
							[ee.a.isTopLevelComment]: k,
							[ee.a.mExpanded]: O,
							[ee.a.mRedesign]: E
						}),
						ref: this.setWrapperRef,
						style: {
							height: M ? N : void 0
						}
					}, !E && k && r.a.createElement(oe, null, r.a.createElement(se, null, o.fbt._("Comment as {authorLink}", [o.fbt._param("authorLink", r.a.createElement(d.a, {
						author: P,
						isAdmin: !1,
						isAdminEmeritus: !1,
						isAuthorDeleted: !1,
						isMod: !1,
						isOp: !1
					}, P))], {
						hk: "4pMWAk"
					}))), r.a.createElement(x.a, {
						breakOut: M,
						depth: a,
						isEditing: L
					}, E && r.a.createElement("div", {
						className: ee.a.userIcon
					}, r.a.createElement(ce, null)), r.a.createElement(he, {
						className: Object(U.a)({
							[ee.a.pending]: C,
							[ee.a.focused]: l.hasFocus
						})
					}, r.a.createElement(ae, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !i,
						disabled: C,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: E ? o.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : o.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: I
					}), (!E || O) && r.a.createElement(le, {
						cancelButtonEnabled: g !== Z.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: C,
						submitButtonText: y,
						canSubmit: this.userHasEnteredText()
					}, r.a.createElement(j, null, e => "compact" === e ? r.a.createElement(A, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => w(Q.h.RICH_TEXT, I, b),
						isConverting: this.props.isConverting
					}) : r.a.createElement("div", null, r.a.createElement(te, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => w(Q.h.RICH_TEXT, I, b)
					}, "Switch to Fancy Pants Editor", this.props.isConverting && r.a.createElement(ne, {
						sizePx: 12
					})))), r.a.createElement(de, {
						onClick: this.props.helpModalToggled
					})))), T && Object(f.c)(_), e === D && r.a.createElement(p.a, {
						actionText: o.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: o.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: S,
						onConfirm: () => this.cancelForm(),
						toggleModal: n,
						trackClick: () => {}
					}), e === h.b && r.a.createElement(h.a, null), e === c.q && r.a.createElement(m.a, {
						onSubmit: this.onSubmit,
						modalSeen: v,
						withOverlay: !0
					}), r.a.createElement(u.a, {
						editKey: b,
						hasValue: !!I
					}))
				}
			}
			t.b = be(fe)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-router/esm/react-router.js");
			let a = null;
			class l extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						l.blockers.delete(e), l.blockers.size || (a && a(), a = null, window.removeEventListener("beforeunload", l.navigationBlocker))
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
					l.blockers.add(e), a || (window.addEventListener("beforeunload", l.navigationBlocker), a = this.props.history.block(() => {
						const e = this.props.isPostEdit ? o.fbt._("You have a post edit in progress, are you sure you want to discard it?", null, {
							hk: "4u5L7p"
						}) : o.fbt._("You have a comment in progress, are you sure you want to discard it?", null, {
							hk: "rgscd"
						});
						return window.confirm(e) ? void 0 : o.fbt._("Are you sure you want to leave?", null, {
							hk: "1Ua5kc"
						})
					}))
				}
				render() {
					return null
				}
			}
			l.blockers = new Set, l.navigationBlocker = e => {
				const t = "Are you sure you want to leave?";
				return e.returnValue = t, t
			}, t.a = Object(i.i)(l)
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
				i = n("./node_modules/uuid/v4.js"),
				a = n.n(i),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/actions/comment/authoring.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/TextButton/index.tsx"),
				h = n("./src/reddit/constants/tracking.ts"),
				b = n("./src/reddit/selectors/telemetry.ts");
			const f = e => ({
					source: "toxicity_modal",
					...b.defaults(e),
					screen: b.screen(e),
					subreddit: b.subreddit(e)
				}),
				g = e => t => ({
					action: h.c.VIEW,
					noun: "modal",
					correlationId: e,
					...f(t)
				}),
				_ = e => t => ({
					action: h.c.CLICK,
					noun: "submit",
					correlationId: e,
					...f(t)
				}),
				x = e => t => ({
					action: h.c.CLICK,
					noun: "edit",
					correlationId: e,
					...f(t)
				}),
				C = e => t => ({
					action: h.c.CLICK,
					noun: "close",
					correlationId: e,
					...f(t)
				});
			var v = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = Object(r.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(d.g)(c.q))
				},
				continue: () => {
					t.onSubmit()
				}
			}));
			class O extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						correlationId: a()()
					}
				}
				componentDidMount() {
					this.props.modalSeen(), this.props.sendEvent(g(this.state.correlationId))
				}
				render() {
					return s.a.createElement(u.d, null, s.a.createElement(u.h, null, s.a.createElement(v.a, null, s.a.createElement(u.p, null, y._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), s.a.createElement(p.a, {
						onClick: () => {
							this.props.sendEvent(C(this.state.correlationId)), this.props.closeModal()
						}
					}, s.a.createElement(u.b, null)))), s.a.createElement(u.k, null, s.a.createElement(u.o, null, y._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), s.a.createElement(u.f, null, s.a.createElement(u.a, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, y._("Go back and edit", null, {
						hk: "3nGNI7"
					})), s.a.createElement(u.q, {
						onClick: () => {
							this.props.sendEvent(_(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, y._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(l.a)(E(Object(m.c)(O)))
		},
		"./src/reddit/components/CommentCreation/getCancelModalId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = e => `Comment-cancelModal__${e}`
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(d);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(a.d, null, r.a.createElement(a.h, null, r.a.createElement(c.a, null, r.a.createElement(a.p, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(l.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.k, null, r.a.createElement(a.o, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(a.f, null, !e.hideCancelButton && r.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(a.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
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
			var o = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/lib/fastdom/index.ts"),
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
				_ = e => {
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
				x = Object(d.a)(e => {
					const {
						children: t,
						className: n,
						style: o,
						caretPosition: s,
						caretColor: i,
						onClick: a,
						...l
					} = e;
					return r.a.createElement("div", f({
						onClick: a,
						className: Object(c.a)(n, b.a.StyledTooltipContainer, {
							[b.a.caretOnTop]: "top" === s,
							[b.a.caretOnLeft]: "left" === s,
							[b.a.caretOnRight]: "right" === s,
							[b.a.caretOnBottom]: "bottom" === s
						}),
						style: {
							...o,
							"--contentTooltip-caretColor": i && i[s] ? i[s] : Object(m.a)(e).body
						}
					}, l), t)
				}),
				C = Object(a.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(p.b)(t)(e)
				}),
				v = Object(l.a)(x, [o.a.Click, o.a.Keydown]),
				y = Object(i.b)(C);
			class E extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = g
						} = this.props;
						u.a.read(() => {
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
								position: s ? this.props.defaultTooltipPosition : _(this.props.defaultTooltipPosition)
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
					return r.a.createElement(v, f({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = y(E)
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/components/ContributorRequestFlow/index.m.less"),
				g = n.n(f);
			const _ = Object(a.c)({
				restrictions: b.p
			});
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						this.props.sendEvent(Object(p.a)(this.props.eventSource)), this.props.openContributorRequestModal()
					}
				}
				render() {
					return r.a.createElement(m.i, {
						className: Object(l.a)(this.props.smallButton ? null : g.a.RequestButton, this.props.className),
						onClick: this.onRequest,
						size: m.c.M
					}, this.props.eventSource === h.b.Comment ? o.fbt._("Request to Comment", null, {
						hk: "3KRhw5"
					}) : o.fbt._("Request to Post", null, {
						hk: "2xsrGd"
					}))
				}
			}
			t.a = Object(i.b)(_, e => ({
				openContributorRequestModal: () => e(Object(c.i)(u.a.CONTRIBUTOR_REQUEST))
			}))(Object(d.c)(x))
		},
		"./src/reddit/components/ContributorRequestFlow/index.m.less": function(e, t, n) {
			e.exports = {
				RequestButton: "_33axOHPa8DzNnTmwzen-wO",
				requestButton: "_33axOHPa8DzNnTmwzen-wO"
			}
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(o || (o = {}))
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				educationMessage: "_26GJLzgfE0wgM-CnXwauPN",
				titleRow: "vZoXjCnTHVyUauLNVGVfk",
				header: "_27PnGSqq2_i7iJirZpjlvp",
				title: "_3tXfrHlKYl3OfwzJeHj2TF",
				newBadge: "_2xWQI6x-vSCyMVG0rWrUv",
				closeButton: "_2fuSvPWThjhQeduKzDNNsl"
			}
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/hooks/useLocalStorage.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				c = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less"),
				d = n.n(c);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function m({
				message: e,
				newBadge: t,
				onClose: n,
				onView: c,
				storageKey: m = l.a.nonDismissable,
				title: p
			}) {
				const h = m !== l.a.nonDismissable,
					[b, f] = Object(r.a)(m, !h || !1),
					[g, _] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					b || g || !c || (c(), _(!0))
				}, [b, g, c]), h && b ? null : s.a.createElement("div", {
					className: d.a.educationMessage
				}, s.a.createElement("div", {
					className: d.a.titleRow
				}, s.a.createElement("div", {
					className: d.a.header
				}, s.a.createElement("h3", {
					className: d.a.title
				}, p), t && s.a.createElement("div", {
					className: d.a.newBadge
				}, u._("New", null, {
					hk: "2N0EBb"
				}))), h && s.a.createElement(i.q, {
					"aria-label": u._("Close", null, {
						hk: "2UjnU"
					}),
					className: d.a.closeButton,
					Icon: a.a,
					onClick: () => {
						f(!0), n && n()
					},
					priority: i.b.Plain
				})), e)
			}
		},
		"./src/reddit/components/Econ/Prediction/NewBadge/index.m.less": function(e, t, n) {
			e.exports = {
				newBadge: "_25Zpk4lWyvwk-rK1hZ0N8m"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx");

			function a({
				onClose: e,
				onView: t,
				storageKey: n
			}) {
				const s = o.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					a = o.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "zV4JN"
					});
				return r.a.createElement("div", null, r.a.createElement(i.a, {
					onClose: e,
					onView: t,
					title: s,
					newBadge: !0,
					message: a,
					storageKey: n
				}))
			}
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
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/FocusableContent/index.m.less"),
				l = n.n(a);
			t.a = i.a.wrapped(e => s.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[l.a.isFocused]: e.isFocused,
					[l.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", l.a)
		},
		"./src/reddit/components/Gold/PowerupEntryTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				contentTooltip: "_1XeLrW3pb3frRYSz9vS8EJ",
				icon: "d27KaHBPtWSrtRSZAh3e1",
				content: "SmrLCKsx-Of2JFg-rZLmQ",
				iconImage: "_1ZEjI8OK6g8UVNGEC8cwA3",
				chevronImage: "_2mIoAykX4OsvfRpXR5Y8jR"
			}
		},
		"./src/reddit/components/Gold/PowerupEntryTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/gold/powerups.ts"),
				a = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/ContentTooltip/index.tsx"),
				c = n("./src/reddit/constants/localStorage.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				m = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				p = n("./src/reddit/components/Gold/PowerupEntryTooltip/index.m.less"),
				h = n.n(p);
			t.a = e => {
				const t = Object(r.d)(),
					{
						tooltipId: n,
						offsetY: p,
						width: f,
						height: g
					} = e,
					_ = Object(o.useMemo)(() => {
						const e = !Object(d.i)(c.a.POWERUPS_TOOLTIP_VISIBILITY_STORE);
						return e && Object(d.Z)(c.a.POWERUPS_TOOLTIP_VISIBILITY_STORE), e
					}, [n]),
					[x, C] = Object(o.useState)(_);
				Object(o.useEffect)(() => {
					const e = x ? Object(a.l)({
						tooltipId: n
					}) : Object(a.k)({
						tooltipId: n
					});
					t(e)
				}, [x, n, t]);
				return s.a.createElement(l.a, {
					style: {
						transform: `translateY(${b(p)})`,
						backgroundColor: "#24A0ED",
						width: b(f),
						height: b(g)
					},
					className: h.a.contentTooltip,
					caretColor: {
						bottom: "#24A0ED",
						top: "#24A0ED"
					},
					tooltipSizeEstimate: {
						height: g,
						width: f
					},
					tooltipId: n,
					defaultTooltipPosition: "top",
					onClick: () => {
						t(Object(i.b)()), C(!1)
					}
				}, s.a.createElement("div", {
					className: h.a.icon
				}, s.a.createElement(m.a, {
					className: h.a.iconImage
				})), s.a.createElement("div", {
					className: h.a.content
				}, e.children), s.a.createElement(u.a, {
					className: h.a.chevronImage
				}))
			};
			const b = e => `${e}px`
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
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/config.ts"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/selectors/gov.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(i.c)({
				tokenSymbol: c.o
			});
			t.a = Object(r.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = `${a.a.assetPath}/${t}`;
				if (e.grey && n.endsWith(".svg")) {
					const t = `url(${n}) center/cover`;
					return s.a.createElement("div", {
						className: Object(l.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: n
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
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/components/Governance/Token/index.tsx"),
				d = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/gov.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = n.n(m);
			const h = Object(i.c)({
				tokenDisplayConversion: u.m
			});
			t.a = Object(r.b)(h)((function(e) {
				return s.a.createElement("div", {
					className: Object(a.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, s.a.createElement(c.a, {
					className: Object(a.a)(p.a.token, {
						[p.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(l.a)(Object(d.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/HiddenDiv.m.less": function(e, t, n) {
			e.exports = {
				Component: "_1VhYfuKTAdUU_3j4cMjkr5",
				component: "_1VhYfuKTAdUU_3j4cMjkr5"
			}
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
				i = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = n.n(i),
				l = n("./src/lib/lessComponent.tsx");
			const c = l.a.div("IconWrapper", a.a),
				d = l.a.div("TextWrapper", a.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: o,
					subtitle: i,
					title: l
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(t, a.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, s.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), o ? s.a.createElement(c, null, o) : s.a.createElement(c, null), s.a.createElement(d, null, s.a.createElement("div", {
					className: a.a.title
				}, l), i && s.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
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
				return h
			})), n.d(t, "a", (function() {
				return b
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/constants/componentSizes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				c = n.n(l);
			const d = Object(s.createContext)(null),
				u = Object(s.createContext)(null);
			class m extends r.a.Component {
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
					return r.a.createElement(d.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, r.a.createElement(u.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const p = i.f + 10,
				h = r.a.memo(() => r.a.createElement(d.Consumer, null, e => e && r.a.createElement("div", {
					className: c.a.wrapper
				}, r.a.createElement(a.o, {
					className: c.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -p)
					}
				}, o.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), r.a.createElement("div", {
					className: c.a.rightBorder
				})))),
				b = r.a.memo(() => r.a.createElement(u.Consumer, null, e => r.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = n("./src/reddit/helpers/overlay/index.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: n,
					to: o,
					...r
				} = e, c = Object(a.b)(o);
				return s.a.createElement(i.a, l({
					className: n,
					to: c
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
				} = e, o = t ? c : r.a;
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
				return C
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				l = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				_ = n.n(g),
				x = n("./src/lib/lessComponent.tsx");
			const C = "Markdown_Help__Modal",
				v = x.a.wrapped(b.a, "Section", _.a),
				y = x.a.div("Container", _.a),
				E = x.a.table("Table", _.a),
				O = x.a.p("P", _.a);
			class k extends r.a.Component {
				render() {
					return r.a.createElement(l.a, null, r.a.createElement(a.a, {
						onClosePressed: this.props.closeModal,
						title: "Markdown Help"
					}), r.a.createElement(y, null, r.a.createElement(E, {
						className: _.a.helpTable
					}, r.a.createElement("tr", null, r.a.createElement(c.s, null, r.a.createElement(c.j, null, "Type this:")), r.a.createElement(c.s, null, r.a.createElement(c.j, null, "to get this:"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "*italics*")), r.a.createElement(c.p, null, r.a.createElement(c.f, null, "italics"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "**bold**")), r.a.createElement(c.p, null, r.a.createElement(c.b, null, "bold"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "[reddit!](https://reddit.com)")), r.a.createElement(c.p, null, r.a.createElement(c.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "* item 1"), r.a.createElement(c.j, null, "* item 2"), r.a.createElement(c.j, null, "* item 3")), r.a.createElement(c.p, null, r.a.createElement(c.v, null, r.a.createElement(c.g, null, "item 1"), r.a.createElement(c.g, null, "item 2"), r.a.createElement(c.g, null, "item 3")))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "> quoted text")), r.a.createElement(c.p, null, r.a.createElement(c.c, null, "quoted text"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "~~strikethrough~~")), r.a.createElement(c.p, null, r.a.createElement(c.d, null, "strikethrough"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, "super^script")), r.a.createElement(c.p, null, "super", r.a.createElement(c.m, null, "script"))), r.a.createElement("tr", null, r.a.createElement(c.p, null, r.a.createElement(c.j, null, ">!spoilers!<")), r.a.createElement(c.p, null, r.a.createElement(d.a, null, "spoilers")))), r.a.createElement(O, null, "Check the", r.a.createElement(c.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, " commenting wiki page "), "for more help")), r.a.createElement(v, null, r.a.createElement(f.a, null, r.a.createElement(h.i, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const w = Object(i.b)(null, (e, t) => ({
				closeModal: () => e(Object(p.i)(C))
			}))(k);
			t.a = Object(m.a)(Object(u.c)(w))
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
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "s", (function() {
				return O
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "r", (function() {
				return P
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				i = n("./src/reddit/icons/svgs/Close/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				l = n.n(a);
			const c = o.a.wrapped(i.a, "CloseIcon", l.a),
				d = o.a.section("ModalBody", l.a),
				u = o.a.section("ModalPostPreview", l.a),
				m = o.a.p("ModalText", l.a),
				p = o.a.div("ModalSmallText", l.a),
				h = o.a.div("ModalDescriptionText", l.a),
				b = o.a.div("ModalMetaText", l.a),
				f = o.a.label("ModalFormItem", l.a),
				g = o.a.wrapped(r.a, "ModalInput", l.a),
				_ = o.a.label("ModalInputLabel", l.a),
				x = o.a.footer("ModalFooter", l.a),
				C = o.a.header("ModalHeader", l.a),
				v = o.a.div("ModalTitle", l.a),
				y = o.a.div("ModalAnnotation", l.a),
				E = o.a.div("ModalMain", l.a),
				O = o.a.textarea("TextArea", l.a),
				k = o.a.wrapped(s.i, "WarningButton", l.a),
				w = o.a.wrapped(s.i, "PrimaryButton", l.a),
				j = o.a.wrapped(s.l, "CancelButton", l.a),
				P = o.a.wrapped(s.o, "RemoveButton", l.a)
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
				return O
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				h = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				g = n("./src/reddit/selectors/tooltip.ts"),
				_ = n("./src/reddit/components/OverflowMenu/index.m.less"),
				x = n.n(_);
			const C = c.a.wrapped(m.a, "_Dropdown", x.a),
				v = Object(u.a)(C),
				y = c.a.button("MenuButton", x.a),
				E = c.a.wrapped(f.a, "MenuIcon", x.a),
				O = c.a.wrapped(p.b, "DropdownRow", x.a),
				k = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(g.b)(t)(e)
				}),
				w = Object(i.b)(k, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(d.h)({
						tooltipId: t
					}))
				})),
				j = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = w(e => {
				const t = Object(h.b)();
				return r.a.createElement(y, {
					"aria-expanded": e.dropdownIsOpen,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("more options", null, {
						hk: "2EnY1x"
					}),
					className: Object(l.a)(e.className, {
						[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
					}),
					disabled: e.disabled,
					onClick: j(e),
					onMouseDown: e.handleMouseDown,
					id: e.dropdownId
				}, e.icon ? e.icon : t ? r.a.createElement(b.a, {
					name: "overflow_horizontal"
				}) : r.a.createElement(E, null), r.a.createElement(v, {
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId,
					isFixed: e.isFixed,
					targetPosition: e.targetPosition,
					tooltipPosition: e.tooltipPosition,
					style: e.style
				}, e.children))
			})
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
				endDatePicker: "_11No5LInq3EU9b_SdtgV5r",
				title: "_2OgmT0eiv8yeZkNv_R4vFy",
				dateTime: "_24VUErhy8JiR-xw9cMsdx0",
				timeZone: "jHZVOve2QGoctU0iDnnCI"
			}
		},
		"./src/reddit/components/PollCreator/Option/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1RbFYzRB1jybmSRJ1VD_3f",
				grapple: "_3uUTBg1zNH9BKBOP3vVw6R",
				input: "CdINWDy27JLWIBXz488aN",
				trash: "_3AvADfaxGi-rnV-WFuWxTA"
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
		"./src/reddit/components/PollCreator/index.m.less": function(e, t, n) {
			e.exports = {
				flexRow: "_2G4E6Ja1LjN3lvEFdvCAMM",
				addButton: "_1MW4m9_ojHA4AO_I1MhQf3",
				container: "_3S9C536IVs6t9fXO2fE_Yq",
				controls: "_2RaOqu97VZrV7eSMAd--Fj",
				help: "_1kYOBe87AO-Ly-PkWe8yd8",
				options: "_26J8Tm1n-2QR6K2VOyZvJk",
				votingLengthCaret: "ekKR9rTD5h3p7yQ4SaLoa",
				votingLengthDropdown: "_1Sbl_DKDMJM71lJ_1GQgbB",
				votingLengthDropdownContainer: "_24W8XLxQSgwVVFneYfHsJR",
				votingLengthSelector: "_3TH3dFaVjJ2OSx-B_N3pDU",
				votingLengthSelector__disabled: "_2Wc5VFPksdxez0HQRlpdeE",
				votingLengthSelectorDisabled: "_2Wc5VFPksdxez0HQRlpdeE",
				votingLengthTitleText: "_1-ozAll8fJXOJ9tr9TwS1r",
				votingLengthDisplay: "gj1NXudk861pHzMz3jvCj"
			}
		},
		"./src/reddit/components/Portal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n("./src/lib/CSSVariableProvider/index.tsx");
			class r extends o.PureComponent {
				render() {
					const {
						children: e,
						container: t
					} = this.props;
					return Object(s.d)(e, t || document.body)
				}
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
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				u = n("./src/reddit/actions/postCreation/general.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/Input/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Search/index.tsx"),
				x = n("./src/reddit/layout/row/Inline/index.tsx"),
				C = n("./src/reddit/models/PostCreationForm/index.ts"),
				v = n("./src/reddit/selectors/postCollection.ts"),
				y = n("./src/lib/timeAgo/index.ts"),
				E = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				O = n("./src/reddit/helpers/name/index.ts"),
				k = n("./src/reddit/models/Subreddit/index.ts"),
				w = n("./src/reddit/models/User/index.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				T = n.n(S),
				I = n("./src/lib/lessComponent.tsx");
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = I.a.div("Container", T.a), D = I.a.h2("PostTitle", T.a), L = I.a.div("MetaLine", T.a), R = I.a.span("SubredditName", T.a), F = I.a.time("InfoSpan", T.a), B = Object(l.c)({
				subreddit: (e, {
					collection: {
						subredditId: t
					}
				}) => t ? Object(j.S)(e, {
					subredditId: t
				}) : void 0,
				user: P.i
			});
			class A extends i.a.PureComponent {
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
					} = this.props, s = t && Object(k.g)(t) && n ? Object(O.d)(Object(w.e)(n)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(N, {
						onClick: this.onClick,
						className: T.a.container
					}, i.a.createElement(D, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(L, {
						"data-redditstyle": !0
					}, s && i.a.createElement(R, {
						"data-redditstyle": !0
					}, s), s && i.a.createElement(E.b, null), i.a.createElement(F, null, M._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [M._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(E.b, null), i.a.createElement(F, null, M._("created {time}", [M._param("time", Object(y.d)(e.createdAtUTC))], {
						hk: "2cUc5m"
					}))), o && i.a.createElement("div", {
						className: T.a.onHoverActionText
					}, i.a.createElement("span", null, o)))
				}
			}
			var U = Object(a.b)(B)(A),
				W = n("./src/reddit/helpers/trackers/postCollection.ts"),
				H = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				K = n.n(H);
			const z = `${o.a.assetPath}/img/snoo-drafts.png`,
				V = I.a.div("TopRow", K.a),
				q = I.a.div("TitleRow", K.a),
				G = I.a.div("DetailsContainer", K.a),
				J = I.a.wrapped(x.a, "ButtonRow", K.a),
				X = I.a.div("CloseWrapper", K.a),
				Q = I.a.wrapped(f.a, "Close", K.a),
				Z = I.a.div("Empty", K.a),
				Y = I.a.img("EmptyImage", K.a),
				$ = I.a.p("EmptyText", K.a),
				ee = I.a.div("FilterWrapper", K.a),
				te = I.a.wrapped(b.a, "FilterInput", K.a),
				ne = I.a.wrapped(_.a, "SearchIcon", K.a),
				oe = I.a.wrapped(g.a, "PlusIcon", K.a),
				se = I.a.wrapped(h.m, "CreateCollectionButton", K.a),
				re = Object(d.a)((e, t) => {
					const n = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(n))
				}),
				ie = Object(l.c)({
					collections: v.v
				}),
				ae = Object(a.b)(ie, (e, {
					postId: t,
					isOverlay: n
				}) => ({
					onOpenCreateCollectionModal: () => {
						let o = C.b;
						t && (o = Object(C.t)(t, !!n)), e(Object(u.w)(o))
					}
				}));
			class le extends i.a.PureComponent {
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
					}, this.renderItem = e => i.a.createElement(U, {
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
					return i.a.createElement(Z, null, i.a.createElement(Y, {
						src: z
					}), i.a.createElement($, null, s.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return i.a.createElement(Z, null, i.a.createElement($, null, s.fbt._("No collection matching filter", null, {
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
					return i.a.createElement("div", {
						className: K.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(V, null, i.a.createElement(q, {
						"data-redditstyle": !0
					}, t || s.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(X, {
						onClick: this.close
					}, i.a.createElement(Q, {
						"data-redditstyle": !0
					}))), i.a.createElement(ee, null, i.a.createElement(ne, null), i.a.createElement(te, {
						placeholder: s.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), i.a.createElement(G, null, n), i.a.createElement(J, null, i.a.createElement(se, {
						onClick: this.handleCreateCollectionClicked
					}, i.a.createElement(oe, null), s.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const ce = Object(c.a)(ae(Object(m.c)(le)));
			t.a = ce
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
				TintOverlay: "stbc2Exoq0W4ZkGltglct",
				tintOverlay: "stbc2Exoq0W4ZkGltglct",
				isDisabled: "_3rEHSruwAvICnPAngYiIW1",
				isLegacy: "SHjEetbN2peQiXpiQX4cf",
				HoverTooltip: "zprH8YpG-gVpFuEr-eQJw",
				hoverTooltip: "zprH8YpG-gVpFuEr-eQJw",
				mShiftTooltipToTheRight: "gceWvjO6tPHW1sEDhwkGK",
				is2020: "_3njNm0GGh1KpQohZxRFeOt",
				Icon: "_3DWz59jTNPem2lIMybAGb8",
				icon: "_3DWz59jTNPem2lIMybAGb8"
			}
		},
		"./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/index.m.less": function(e, t, n) {
			e.exports = {
				CalendarIcon: "_2EMgBR7XXJPBqzlciwA5q-",
				calendarIcon: "_2EMgBR7XXJPBqzlciwA5q-",
				CheckmarkIcon: "_1UzslKYEQzOzo6YjHnE2g",
				checkmarkIcon: "_1UzslKYEQzOzo6YjHnE2g",
				PlusIcon: "_3KTRWtVakNSggrbPPnHkHf",
				plusIcon: "_3KTRWtVakNSggrbPPnHkHf",
				PencilIcon: "_3fLEcC4lV7R4T0nWSix8gz",
				pencilIcon: "_3fLEcC4lV7R4T0nWSix8gz",
				ChatIcon: "Tb5Juq1WzFvhLo_xE7E0U",
				chatIcon: "Tb5Juq1WzFvhLo_xE7E0U",
				FlairComponent: "_2YM79GnDqrRjQQcFtEokkY",
				flairComponent: "_2YM79GnDqrRjQQcFtEokkY",
				FlairTextWrapper: "_1pXTTYLLHHqfgwyMuCqT6T",
				flairTextWrapper: "_1pXTTYLLHHqfgwyMuCqT6T",
				ModifierRow: "_2_rA2mCdhHc1Lr7Ff1ygvH",
				modifierRow: "_2_rA2mCdhHc1Lr7Ff1ygvH",
				AddFlair: "_1LD2Xsr3fioSkWZ13vMORC",
				addFlair: "_1LD2Xsr3fioSkWZ13vMORC",
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
				disabled: "GOi-au9bPIVJ6WnD6RD6y",
				button2020: "_1wgkhuQrIJs56IVVlsv73r",
				DivButton: "_1KdMCiMK7eff1VYAo9JUDh",
				divButton: "_1KdMCiMK7eff1VYAo9JUDh"
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
				ButtonsAndErrors: "_2DHDj0dbS1TkKD3fMqSbHy",
				buttonsAndErrors: "_2DHDj0dbS1TkKD3fMqSbHy",
				ButtonRow: "_2RmKGBRP9puAMQITZ7HMaB",
				buttonRow: "_2RmKGBRP9puAMQITZ7HMaB",
				autoWidth: "_2lg9-dlsll34oz__8Kmxk7",
				errorMessages: "_2kLLxn1y9vaTeT0OAc-Ikc",
				PostLoadingIcon: "_2QZRXSFrX2qcSjZIV5mRzK",
				postLoadingIcon: "_2QZRXSFrX2qcSjZIV5mRzK",
				DraftLoadingIcon: "_4S5sqoV61IY7tpZqBwoKQ",
				draftLoadingIcon: "_4S5sqoV61IY7tpZqBwoKQ",
				Token: "_1TIes8fbwL-i8e6hUlw5jF",
				token: "_1TIes8fbwL-i8e6hUlw5jF",
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/lib/formatApiError/index.ts"),
				d = n("./src/reddit/actions/postCollection/index.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/constants/postCreation.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/index.tsx"),
				b = n("./src/reddit/controls/Input/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Close/index.tsx"),
				x = n("./src/reddit/layout/row/Inline/index.tsx"),
				C = n("./src/reddit/selectors/postCollection.ts"),
				v = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				y = n.n(v),
				E = n("./src/lib/lessComponent.tsx");
			const O = E.a.div("Container", y.a),
				k = E.a.div("Content", y.a),
				w = E.a.div("TitleRow", y.a),
				j = E.a.div("Details", y.a),
				P = E.a.wrapped(u.f, "Footer", y.a),
				S = E.a.wrapped(p.l, "CancelButton", y.a),
				T = E.a.div("CloseWrapper", y.a),
				I = E.a.wrapped(_.a, "CloseIcon", y.a),
				M = E.a.label("Label", y.a),
				N = E.a.wrapped(b.a, "TitleInput", y.a),
				D = E.a.wrapped(g.a, "AddCollectionIcon", y.a),
				L = E.a.wrapped(p.i, "PrimaryActionButton", y.a),
				R = E.a.wrapped(f.a, "LoadingIcon", y.a),
				F = E.a.wrapped(h.b, "ErrorText", y.a),
				B = Object(a.c)({
					collection: C.q,
					error: C.c,
					isPending: C.g
				}),
				A = Object(i.b)(B, (e, t) => ({
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
					} = this.props, s = !e, i = !!this.state.collectionTitle.trim(), a = s ? o.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : o.fbt._("Save", null, {
						hk: "2Onrrv"
					});
					return r.a.createElement(O, null, r.a.createElement(T, {
						onClick: this.props.onCancel
					}, r.a.createElement(I, null)), r.a.createElement(k, null, s && r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null, r.a.createElement(D, null), o.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(j, null, o.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(M, null, s ? o.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : o.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(N, {
						maxLength: m.e,
						onChange: this.onTitleChange,
						placeholder: o.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(P, null, r.a.createElement(x.a, null, r.a.createElement(S, {
						onClick: this.props.onCancel
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(L, {
						onClick: this.onPrimaryButtonClick,
						disabled: n || !i
					}, n ? r.a.createElement(R, {
						sizePx: 10
					}) : a)), t && r.a.createElement(F, null, Object(c.a)(t))))
				}
			}
			t.a = Object(l.a)(A(U))
		},
		"./src/reddit/components/PostCreationForm/CreationControls/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditPicker: "k3D4EVssJ1w-8irx6jW6k",
				subredditPicker: "k3D4EVssJ1w-8irx6jW6k",
				ControlRow: "i0kJNtq5ma1uzbOX9_mM4",
				controlRow: "i0kJNtq5ma1uzbOX9_mM4"
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
		"./src/reddit/components/PostCreationForm/EduTooltips/EventButtonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_RsSSHM-K9MvWN3u6Jxnf"
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				d = n("./src/reddit/components/FocusableContent/index.tsx"),
				u = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				p = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				h = n("./src/reddit/constants/keycodes.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				_ = n("./src/reddit/models/PostCreationForm/index.ts"),
				x = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/editorContent.ts"),
				v = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				y = n.n(v),
				E = n("./src/lib/lessComponent.tsx");
			const O = E.a.wrapped(f.a, "LoadingIcon", y.a),
				k = E.a.span("ModeDescription", y.a),
				w = E.a.div("ModeWrapper", y.a),
				j = E.a.button("SwitchModeButton", y.a),
				P = E.a.wrapped(c.a, "MarkdownHelpButton", y.a),
				S = E.a.div("Toolbar", y.a),
				T = Object(a.c)({
					activeModalId: x.a,
					isConverting: e => Object(C.a)(e)
				}),
				I = Object(i.b)(T, (e, t) => ({
					onChange: n => {
						e(Object(l.c)(n)), t.onChange && t.onChange(n)
					},
					helpModalToggled: () => e(Object(l.w)(u.b)),
					switchToRTEModalToggled: () => e(Object(l.w)(m.a.SWITCH_TO_RTE_MODAL_ID))
				}));
			class M extends r.a.Component {
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
						this.props.value ? this.props.switchToRTEModalToggled() : this.props.onSwitchEditorMode(_.h.RICH_TEXT, this.props.value)
					}, this.handleSwitchToRTEConfirm = () => {
						this.props.switchToRTEModalToggled(), this.props.onSwitchEditorMode(_.h.RICH_TEXT, this.props.value)
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
						focusableContentMarkdownClassName: o,
						value: s
					} = this.props, {
						isFocused: i
					} = this.state;
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement(d.a, {
						className: o,
						isFocused: i
					}, r.a.createElement(S, null, r.a.createElement(w, null, r.a.createElement(k, null, "Markdown"), r.a.createElement(P, {
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
						value: s
					})), this.props.activeModalId === u.b && r.a.createElement(u.a, null), this.props.activeModalId === m.a.SWITCH_TO_RTE_MODAL_ID && r.a.createElement(m.b, {
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
				const n = Object(g.a)(),
					s = o.fbt._("Switch to Fancy Pants Editor", null, {
						hk: "1AKY7t"
					});
				return n ? r.a.createElement(b.q, {
					priority: b.b.Plain,
					size: b.c.XS,
					onClick: t,
					Icon: e ? O : void 0,
					text: s
				}) : r.a.createElement(j, {
					onClick: t
				}, e && r.a.createElement(O, {
					sizePx: 12
				}), s)
			});
			t.a = I(M)
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
				createPostHeader: "_1HWpiNu6dkOnZixxwDYTVJ"
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
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(l.i, "PrimaryButton", m.a),
				b = p.a.wrapped(i.o, "ModalText", m.a);
			class f extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === a.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					return s.a.createElement(i.d, null, s.a.createElement(i.h, null, s.a.createElement(d.a, null, s.a.createElement(i.p, null, this.props.titleText), s.a.createElement(c.a, {
						onClick: this.props.onClose
					}, s.a.createElement(i.b, null)))), s.a.createElement(i.k, null, s.a.createElement(b, null, this.props.bodyText)), s.a.createElement(i.f, null, s.a.createElement(i.a, {
						onClick: this.props.onSecondaryAction
					}, this.props.secondaryButtonText), s.a.createElement(h, {
						onClick: this.props.onPrimaryAction
					}, this.props.primaryButtonText)))
				}
			}
			t.a = Object(r.a)(f)
		},
		"./src/reddit/components/PostCreationForm/Prompt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			! function(e) {
				e.LOAD_DRAFT_MODAL_ID = "POST_CREATION__LOAD_DRAFT_MODAL_ID", e.MAX_DRAFTS_MODAL_ID = "POST_CREATION__MAX_DRAFTS_MODAL_ID", e.SWITCH_TO_RTE_MODAL_ID = "MARKDOWN_EDITOR__SWITCH_TO_RTE_MODAL_ID"
			}(o || (o = {}));
			const l = {
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
				c = {
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
					[o.LOAD_DRAFT_MODAL_ID]: l,
					[o.MAX_DRAFTS_MODAL_ID]: c,
					[o.SWITCH_TO_RTE_MODAL_ID]: d
				};
			class m extends i.a.PureComponent {
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
					return i.a.createElement(a.a, {
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
				i = n.n(r),
				a = n("./node_modules/lodash/range.js"),
				l = n.n(a),
				c = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less"),
				d = n.n(c),
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
			class _ extends i.a.PureComponent {
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
					return i.a.createElement(m, {
						className: this.props.className
					}, i.a.createElement(p, {
						onChange: this.onChangeMonth,
						value: t
					}, l()(12).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, f(e)))), i.a.createElement(h, null, "/"), i.a.createElement(p, {
						onChange: this.onChangeDay,
						value: n
					}, l()(1, 32).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), i.a.createElement(h, null, "/"), i.a.createElement(p, {
						onChange: this.onChangeYear,
						value: e
					}, l()(b, b + 10).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var x = _,
				C = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				v = n.n(C);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const E = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				O = u.a.input("Input", v.a);

			function k(e) {
				return E() ? i.a.createElement(O, y({
					type: "date"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : i.a.createElement(x, e)
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
				i = n.n(r),
				a = n("./node_modules/lodash/clamp.js"),
				l = n.n(a),
				c = n("./src/reddit/components/FocusableContent/index.tsx"),
				d = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less"),
				u = n.n(d),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(c.a, "Container", u.a),
				h = m.a.input("Input", u.a),
				b = m.a.span("Delimiter", u.a),
				f = e => ("0" + e).slice(-2),
				g = (e, t) => {
					const n = +e.slice(-2);
					if (Number.isInteger(n)) return n > t ? 0 : n
				};
			class _ extends i.a.PureComponent {
				constructor(e) {
					super(e), this.callOnChange = () => {
						let e = l()(+this.state.hour, 0, 24);
						const t = l()(+this.state.minute, 0, 59);
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
					return i.a.createElement(p, {
						className: this.props.className,
						isFocused: e
					}, i.a.createElement(h, {
						type: "number",
						onChange: this.onChangeHour,
						onFocus: this.onHourInputFocus,
						onBlur: this.onHourInputBlur,
						value: f(this.state.hour)
					}), i.a.createElement(b, null, ":"), i.a.createElement(h, {
						type: "number",
						onChange: this.onChangeMinute,
						onFocus: this.onMinuteInputFocus,
						onBlur: this.onMinuteInputBlur,
						value: f(this.state.minute)
					}))
				}
			}
			var x = _,
				C = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				v = n.n(C);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const E = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				O = m.a.input("TimeInput", v.a);

			function k(e) {
				return E() ? i.a.createElement(O, y({
					type: "time"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : i.a.createElement(x, e)
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
				i = n("./src/lib/loadWithRetries/index.ts"),
				a = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				l = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less"),
				c = n.n(l);
			const d = e => {
				const t = e.map(a.d);
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
					const e = (await Object(i.a)(() => n.e("TimezoneList").then(n.bind(null, "./src/lib/timezone/timezoneList.ts")))).default,
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
						className: Object(r.a)(c.a.select, this.props.className)
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
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/timezone/index.ts"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/RadioInput/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				f = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				g = n("./src/reddit/helpers/trackers/postEvent.ts"),
				_ = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				x = n("./src/reddit/layout/row/Inline/index.tsx"),
				C = n("./src/reddit/models/PostCreationForm/index.ts"),
				v = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				y = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				E = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx"),
				O = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.m.less"),
				k = n.n(O);
			const w = 240,
				j = () => {
					const e = new Date;
					e.setMinutes(60);
					const t = Object(c.g)(e);
					return e.setMinutes(e.getMinutes() + w), {
						startDate: t,
						endDate: Object(c.g)(e),
						submitTime: C.i.Now,
						timezoneName: Object(c.b)() || c.a
					}
				},
				P = l.a.div("Container", k.a),
				S = l.a.div("Content", k.a),
				T = l.a.div("TitleRow", k.a),
				I = l.a.hr("Hr", k.a),
				M = l.a.wrapped(y.a, "TimeInput", k.a),
				N = l.a.div("TimeSelectionRow", k.a),
				D = l.a.div("RadioOptionContent", k.a),
				L = l.a.span("OptionDetails", k.a),
				R = l.a.wrapped(h.a, "RadioInput", k.a),
				F = l.a.wrapped(b.a, "RadioOption", k.a),
				B = l.a.span("Delimiter", k.a),
				A = l.a.wrapped(d.f, "Footer", k.a),
				U = l.a.wrapped(p.l, "CancelButton", k.a),
				W = l.a.wrapped(p.l, "DeleteButton", k.a),
				H = l.a.div("ErrorMessage", k.a),
				K = l.a.wrapped(_.a, "ClearIcon", k.a);
			class z extends r.a.PureComponent {
				constructor(e) {
					super(e), this.currentTimezone = Object(c.b)(), this.maxDate = Object(u.a)(), this.buildEventSchedule = () => ({
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
							const n = Object(c.f)(Object(f.a)(e, t));
							n.setMinutes(n.getMinutes() + w);
							const [o, s] = Object(f.i)(Object(c.g)(n));
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
						const r = Object(c.f)(Object(f.a)(n, s)),
							i = Object(c.f)(Object(f.a)(e, t));
						return r < (this.currentTimezone === this.state.timezoneName ? new Date : new Date(Date.now() - a.x)) ? o.fbt._("Event start time needs to be in the future", null, {
							hk: "3oL3LM"
						}) : i < r ? o.fbt._("End time must be after start time", null, {
							hk: "3C3TKE"
						}) : null
					}, this.getSubmitAtLabel = () => {
						const {
							startDate: e,
							startTime: t
						} = this.state;
						return Object(f.b)(e, t)
					}, this.renderSubmitTimeRadio = () => r.a.createElement(R, {
						value: this.state.submitTime,
						name: "submit_time",
						onChange: this.onSubmitTimeChange
					}, r.a.createElement(F, {
						showButton: !0,
						value: C.i.Now
					}, r.a.createElement(D, null, r.a.createElement("span", null, o.fbt._("Submit post now", null, {
						hk: "2ueTnc"
					})), r.a.createElement(L, null, o.fbt._("Submitting post before your event allows people to follow your event and come back at the event time", null, {
						hk: "3LTavv"
					})))), r.a.createElement(F, {
						showButton: !0,
						value: C.i.AtEventTime
					}, r.a.createElement(D, null, r.a.createElement("span", null, this.getSubmitAtLabel()), r.a.createElement(L, null, o.fbt._("This post will be editable and hidden from people visiting your community until the event starts.", null, {
						hk: "1fGKlZ"
					})))));
					const t = e.schedule || j(),
						[n, s] = Object(f.i)(t.startDate),
						[i, l] = Object(f.i)(t.endDate);
					this.state = {
						startDate: n,
						startTime: s,
						endDate: i,
						endTime: l,
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
					return r.a.createElement(P, null, r.a.createElement(S, null, r.a.createElement(T, null, o.fbt._("When is the event?", null, {
						hk: "2fTD7f"
					})), r.a.createElement(N, null, o.fbt._("{start time}{to}{end time}", [o.fbt._param("start time", r.a.createElement("fieldset", null, r.a.createElement("legend", null, o.fbt._("Start time", null, {
						hk: "3nqplI"
					})), r.a.createElement(v.a, {
						max: this.maxDate,
						onChange: this.onStartDateChange,
						value: this.state.startDate
					}), r.a.createElement(M, {
						onChange: this.onStartTimeChange,
						value: this.state.startTime
					}))), o.fbt._param("to", r.a.createElement(B, null, o.fbt._("to", null, {
						hk: "2tWTBK"
					}))), o.fbt._param("end time", r.a.createElement("fieldset", {
						style: {
							opacity: this.state.isEndTimeTouched ? 1 : .5
						}
					}, r.a.createElement("legend", null, o.fbt._("End time (optional)", null, {
						hk: "2XKdsz"
					})), r.a.createElement(v.a, {
						max: this.maxDate,
						onChange: this.onEndDateChange,
						value: this.state.endDate
					}), r.a.createElement(M, {
						onChange: this.onEndTimeChange,
						value: this.state.endTime
					})))], {
						hk: "3MRWfF"
					})), r.a.createElement("div", null, r.a.createElement("label", null, o.fbt._("Time zone", null, {
						hk: "3F7Bko"
					}), r.a.createElement(E.a, {
						selectedTimezoneName: this.state.timezoneName,
						onChange: this.onTimezoneChange
					}))), e && r.a.createElement(r.a.Fragment, null, r.a.createElement(I, null), r.a.createElement("fieldset", null, r.a.createElement("legend", null, o.fbt._("When do you want to submit this post?", null, {
						hk: "3kBgxg"
					})), this.renderSubmitTimeRadio()))), r.a.createElement(A, null, r.a.createElement(x.a, null, this.props.schedule && this.props.shouldShowDeleteButton && r.a.createElement(W, {
						onClick: this.onDeleteButtonClick
					}, r.a.createElement(K, null), o.fbt._("Clear", null, {
						hk: "npkgK"
					})), r.a.createElement(U, {
						onClick: this.onCancelButtonClick
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(p.i, {
						onClick: this.onApplyClick,
						disabled: !!t
					}, o.fbt._("Apply", null, {
						hk: "2TE8JD"
					}))), t && r.a.createElement(H, null, t)))
				}
			}
			t.default = Object(i.a)(Object(m.c)(z))
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
				Component: "_2rS9BNjL3uxg61zOx2zyOH",
				component: "_2rS9BNjL3uxg61zOx2zyOH",
				PollIcon: "_1wjrzsZm0XSDAKK8PykcNE",
				pollIcon: "_1wjrzsZm0XSDAKK8PykcNE",
				Container: "_3vyt9N_0jfZuOwByiKDi9x",
				container: "_3vyt9N_0jfZuOwByiKDi9x",
				Tab: "Z1w8VkpQ23E1Wdq_My3U4",
				tab: "Z1w8VkpQ23E1Wdq_My3U4",
				isActive: "j1Q89sB76i7EBRDhnQhlr"
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
				postingGuidelines: "_2vcPDTxC76PPQ70AdMkN0C"
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
				return k
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				p = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				h = n("./src/reddit/components/FlairPreview/index.tsx"),
				b = n("./src/reddit/components/FlairSearch/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/models/Flair/index.ts"),
				_ = n("./src/reddit/selectors/moderatorPermissions.ts"),
				x = n("./src/reddit/selectors/postFlair.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/telemetry.ts"),
				y = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				E = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				O = n.n(E);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const k = (e, t = !1, n = o.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`,
				w = Object(l.c)({
					flairData: x.d,
					subreddit: C.S,
					isMod: (e, t) => !!Object(_.i)(e, t)
				});
			class j extends i.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(v.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(y.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, n = Object(y.c)(this.props.flairs) || null;
					return Object(y.b)(e, t, n)
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
					} = e, a = r.displayText, {
						templates: l,
						templateIds: c
					} = o, {
						canSave: d
					} = this.canSave();
					return i.a.createElement(p.a, {
						className: n
					}, i.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select {subredditName} flair", [s.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						placeholderText: s.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: r.id,
						templates: l,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: O.a.buttonsRow
					}, i.a.createElement(f.i, {
						disabled: !d,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(f.l, {
						className: O.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const P = Object(a.b)(w, (e, t) => ({
				closeModal: () => e(Object(u.i)(t.modalId))
			}))(j);
			t.a = Object(d.a)(Object(c.c)(P))
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
				redditUrl: i
			} = r.a, a = `${i}/help/contentpolicy`, l = `${i}/wiki/reddiquette`;
			var c = n("./src/reddit/components/PostingSidebar/PolicyRow/index.m.less"),
				d = n.n(c);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement("div", {
				className: d.a.PolicyRow
			}, u._("Please be mindful of reddit's {=content policy} and practice good {=reddiquette}.", [u._param("=content policy", s.a.createElement("a", {
				href: a
			}, u._("content policy", null, {
				hk: "2PeDvo"
			}))), u._param("=reddiquette", s.a.createElement("a", {
				href: l
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/icons/svgs/SnooPosting/index.tsx"),
				d = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less"),
				m = n.n(u),
				p = n("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(c.a, "Snoo", m.a),
				b = p.a.li("Li", m.a),
				f = p.a.ol("Ol", m.a),
				g = p.a.div("Title", m.a),
				_ = Object(a.c)({
					submissionType: d.fb
				});
			t.a = p.a.wrapped(Object(i.b)(_)(e => {
				const {
					className: t,
					submissionType: n
				} = e, s = n === l.Lb.CROSSPOST;
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
				container: "itxZANPrH4AAYOj6VgfL9"
			}
		},
		"./src/reddit/components/PostingSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				s = n.n(o),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/IdCard/async.tsx"),
				u = n("./src/reddit/components/SidebarFooter/index.tsx"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = n("./src/reddit/components/Widgets/PostCollection/index.tsx"),
				h = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/models/Widgets/index.ts"),
				g = n("./src/reddit/selectors/postCreations.ts"),
				_ = n("./src/reddit/selectors/profile.ts"),
				x = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/widgets.ts"),
				v = n("./src/reddit/components/PostingSidebar/PolicyRow/index.tsx"),
				y = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx"),
				E = n("./src/reddit/components/PostingSidebar/index.m.less"),
				O = n.n(E),
				k = n("./src/lib/lessComponent.tsx");
			const w = Object(r.a)({
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
				j = k.a.div("Container", O.a),
				P = Object(b.t)(),
				S = new Set(["all", "post"]),
				T = Object(c.a)((e, {
					pageLayer: t
				}) => {
					const n = Object(b.q)(e, {
						pageLayer: t
					});
					return n && Object(x.R)(e, {
						subredditId: n.id
					})
				}, e => (e || []).filter(e => S.has(e.kind))),
				I = (e, {
					pageLayer: t
				}) => {
					const n = Object(b.q)(e, {
						pageLayer: t
					});
					return !(!n || !Object(C.d)(e, {
						subredditName: n.name
					}))
				},
				M = Object(c.c)({
					hasIdCardWidgetData: I,
					isCreationPagePending: g.E,
					profile: (e, {
						pageLayer: t,
						subredditOrProfileId: n
					}) => n ? Object(_.p)(e, {
						profileId: n
					}) : Object(b.j)(e, {
						pageLayer: t
					}),
					subreddit: b.q,
					subredditRules: T,
					currentPostCollection: b.f
				}),
				N = Object(l.b)(M),
				D = e => {
					const {
						className: t,
						currentPostCollection: n,
						hasIdCardWidgetData: o,
						isCreationPagePending: s,
						profile: r,
						subreddit: i,
						subredditRules: l
					} = e, c = o || s;
					return a.a.createElement(j, {
						className: t
					}, n && a.a.createElement(p.a, {
						collection: n
					}), i && c && a.a.createElement(m.a, null, a.a.createElement(d.a, {
						isSubmissionPage: !0,
						listingName: i.name
					})), r && !i && a.a.createElement(m.a, null, a.a.createElement(w, {
						profileName: r.name,
						isOverlay: !1,
						isSubmissionPage: !0
					})), i && l && a.a.createElement(m.a, null, a.a.createElement(h.a, {
						subredditName: i.name,
						display: f.e.COMPACT,
						rules: l,
						redditStyle: !0
					})), a.a.createElement(y.a, null), a.a.createElement(m.a, null), a.a.createElement(v.a, null), a.a.createElement(u.a, {
						redditStyle: !0
					}))
				};
			t.a = P(N(D))
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				d = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = n.n(p);
			const b = l.a.wrapped(c.a, "Banner", h.a),
				f = Object(i.b)(() => Object(a.c)({
					restrictions: m.p,
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
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				c = n.n(l);

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
					className: Object(a.a)(c.a.editorWrapper, e),
					style: o ? {
						height: o
					} : void 0,
					ref: n
				}, t),
				m = ({
					isFullHeight: e,
					textAreaRef: t,
					...n
				}) => s.a.createElement(i.a, d({
					className: Object(a.a)(c.a.textareaAutosize, {
						[c.a.mIsFullHeight]: e
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
						isResized: i
					} = this.state;
					return s.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, s.a.createElement(m, d({}, r, {
						children: !0,
						isFullHeight: !!i,
						textAreaRef: n
					})))
				}
			}
			t.a = p
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, n) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				l = n.n(a);
			const c = e => s.a.createElement("button", {
					className: Object(r.a)(l.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && s.a.createElement("span", {
					className: l.a.TextWrapper
				}, e.text, " ")),
				d = i.a.wrapped(c, "ApproveButton", l.a),
				u = i.a.wrapped(c, "RemoveButton", l.a),
				m = e => s.a.createElement("button", {
					className: Object(r.a)(l.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
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
				return o
			}));
			var o, s, r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(o || (o = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(s || (s = {}));
			var c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/helpers/postCollection.ts");
			const u = [c.Db.COMMENTS, c.Db.COLLECTION_COMMENTS],
				m = (e, t) => {
					if (!e) return [];
					const n = u.includes(e),
						s = e === c.Db.COLLECTION_COMMENTS || t && Object(d.a)(t),
						r = c.O.has(e),
						i = c.tb.has(e),
						a = e === c.Db.SUBREDDIT,
						l = e === c.Db.TOPIC;
					let m, p, h;
					return r && !a || i ? m = o.HeaderSelector : s ? m = o.Collection : n ? m = o.PostComments : l && (m = o.TopicHeader), (r || i || s || n) && (p = o.Widget), (r || n) && (h = o.PostItem), [m, p, h]
				};
			var p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/components/SEOTitle/index.m.less"),
				f = n.n(b);
			const g = ({
					level: e,
					children: t
				}) => {
					const n = `h${e}`;
					return i.a.createElement(n, {
						className: f.a.Title
					}, t)
				},
				_ = Object(p.t)(),
				x = Object(a.b)(() => Object(l.a)((e, {
					pageLayer: t
				}) => t && Object(h.l)(e, {
					page: t
				}), (e, {
					pageLayer: t
				}) => t && t.meta && t.meta.name, (e, {
					type: t
				}) => t, (e, t, n) => ({
					level: m(t, e).indexOf(n) + 1 || void 0
				})));
			class C extends i.a.Component {
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
			t.b = _(x(C))
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
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/components/SidebarFooter/index.m.less"),
				c = n.n(l);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = r.a.a("Link", c.a), m = Object(a.t)({
				isFrontpage: a.y
			});
			t.a = m(e => s.a.createElement(i.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, s.a.createElement("div", {
				className: c.a.LinkContainer
			}, s.a.createElement("div", {
				className: c.a.Column
			}, s.a.createElement(u, {
				href: "https://www.reddithelp.com"
			}, d._("help", null, {
				hk: "4lyYaD"
			})), s.a.createElement(u, {
				href: "https://www.reddit.com/mobile/download"
			}, d._("Reddit App", null, {
				hk: "1ehrjP"
			})), s.a.createElement(u, {
				href: "https://www.reddit.com/coins"
			}, d._("Reddit coins", null, {
				hk: "32iMaN"
			})), s.a.createElement(u, {
				href: "https://www.reddit.com/premium"
			}, d._("Reddit premium", null, {
				hk: "RuO3A"
			})), s.a.createElement(u, {
				href: "https://redditgifts.com/"
			}, d._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && s.a.createElement(s.a.Fragment, null, s.a.createElement(u, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, d._("Communities", null, {
				hk: "3CJu37"
			})), s.a.createElement(u, {
				href: "https://www.reddit.com/posts/2020/"
			}, d._("Rereddit", null, {
				hk: "1z3k7C"
			})), s.a.createElement(u, {
				href: "https://www.reddit.com/topics/a-1/"
			}, d._("Topics", null, {
				hk: "349RFt"
			})))), s.a.createElement("div", {
				className: c.a.Column
			}, s.a.createElement(u, {
				href: "https://about.reddit.com"
			}, d._("about", null, {
				hk: "1sqJKs"
			})), s.a.createElement(u, {
				href: "https://about.reddit.com/careers/"
			}, d._("careers", null, {
				hk: "26ABvc"
			})), s.a.createElement(u, {
				href: "https://about.reddit.com/press/"
			}, d._("press", null, {
				hk: "2Qmgdz"
			})), s.a.createElement(u, {
				href: "https://www.redditinc.com/advertising"
			}, d._("advertise", null, {
				hk: "Mt40U"
			})), s.a.createElement(u, {
				href: "http://www.redditblog.com/"
			}, d._("blog", null, {
				hk: "46IQJw"
			})), s.a.createElement(u, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, d._("Terms", null, {
				hk: "4qRzfE"
			})), s.a.createElement(u, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, d._("Content policy", null, {
				hk: "1DyxZS"
			})), s.a.createElement(u, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, d._("Privacy policy", null, {
				hk: "10K04G"
			})), s.a.createElement(u, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, d._("Mod policy", null, {
				hk: "2gYc2T"
			})))), s.a.createElement("div", {
				className: c.a.Copyright
			}, d._("Reddit Inc © {year}. All rights reserved", [d._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
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
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
				a = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
					disabled: e,
					...t
				}) => s.a.createElement("div", l({}, t, {
					className: Object(r.a)(a.a.FormNavElement, {
						[a.a.disabled]: e
					})
				}), t.children),
				d = ({
					canDrop: e,
					className: t,
					isDragging: n,
					isOver: o,
					disabled: i,
					...c
				}) => s.a.createElement("div", l({}, c, {
					className: Object(r.a)(a.a.DragCard, {
						[a.a.disabled]: i,
						[a.a.isDraffing]: n,
						[a.a.isOverAndCanDrop]: o && e
					}, t)
				}))
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
				emptyEditableIconInTopBar: "_3-i_fdY8zqHIo3CjuVzTYE",
				defaultCommunityIcon: "_1xvdfUtOPDANqHjxzxKX5b",
				mNightmode: "_1TI6C7sqGL9TRdsq1jRks"
			}
		},
		"./src/reddit/components/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				d = n("./src/reddit/constants/colors.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				p = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				f = n("./src/reddit/models/Subreddit/index.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/SubredditIcon/index.m.less"),
				x = n.n(_);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = l.a.wrapped(c.a, "UserIcon", x.a),
				y = l.a.img("Image", x.a),
				E = ({
					iconColor: e,
					...t
				}) => r.a.createElement(y, C({
					style: {
						backgroundColor: e || ""
					}
				}, t)),
				O = l.a.wrapped(({
					className: e,
					color: t,
					...n
				}) => r.a.createElement(b.a, C({
					className: e,
					style: {
						background: t || ""
					}
				}, n)), "PlanetIcon", x.a),
				k = l.a.div("BackupImage", x.a),
				w = Object(u.t)();
			t.b = w(e => {
				const t = Object(p.b)(),
					n = Object(i.e)(g.U);
				let s, l, c;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: n
					} = Object(m.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(f.g)(e.subredditOrProfile) ? c = r.a.createElement(v, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (s = t, l = n)
				} else s = e.iconUrl, l = e.primaryColor || d.b.alienblue;
				return s ? c = r.a.createElement(E, {
					alt: o.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: l,
					role: "presentation",
					src: s
				}) : c || (c = t ? r.a.createElement(h.a, {
					name: "community",
					isFilled: !n,
					className: Object(a.a)(e.className, x.a.defaultCommunityIcon, {
						[x.a.mNightmode]: n
					}),
					style: n ? {
						backgroundColor: e.redditStyle ? d.b.alienblue : l
					} : {
						color: e.redditStyle ? d.b.alienblue : l
					}
				}) : r.a.createElement(O, {
					className: e.className,
					color: e.redditStyle ? d.b.alienblue : l,
					role: "presentation"
				})), e.linkTo ? r.a.createElement("a", {
					href: e.linkTo
				}, c) : r.a.createElement(r.a.Fragment, null, c)
			})
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
					subredditActions: {
						subscribe: () => o.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => o.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => o.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => o.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => o.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => o.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => r[s({
					type: e
				})][t]()
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				p = n.n(m);
			var h = e => {
					const {
						showPresence: t
					} = e;
					return s.a.createElement(u.a, {
						className: Object(d.a)(p.a.presenceDot, {
							[p.a.isLit]: t
						})
					})
				},
				b = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				f = n("./src/reddit/components/UserIcon/UserIcon.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = Object(i.c)({
					currentUser: c.i,
					isNightMode: c.U,
					isPresenceExpEnabled: l.a,
					isPresenceUserPrefEnabled: c.gb,
					shouldHideNSFW: c.B
				}),
				x = Object(r.b)(_);
			t.a = x(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					isPresenceExpEnabled: r,
					...i
				} = e, l = Object(a.a)(null == t ? void 0 : t.accountIcon);
				return s.a.createElement("div", {
					className: p.a.currentUserIconWrapper
				}, l ? s.a.createElement(b.a, {
					className: e.className,
					headshot: t.accountIcon
				}) : s.a.createElement(f.a, g({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), r && n && s.a.createElement(h, {
					showPresence: o
				}))
			})
		},
		"./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				l = n.n(a);
			t.a = function({
				className: e,
				headerIcon: t,
				headshot: n
			}) {
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: Object(i.a)(l.a.snoovatarWrapper, e)
				}, r.a.createElement("div", {
					className: l.a.snoovatarBackground
				}), r.a.createElement("div", {
					className: l.a.snoovatarHeadshotContainer
				}, r.a.createElement("img", {
					alt: o.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: l.a.snoovatarHeadshot,
					src: n
				}))))
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.m.less": function(e, t, n) {
			e.exports = {
				currentUserIconWrapper: "efdkOLo3oigH_95whTYCp",
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
				isLit: "GpWjjkZl5_kV4yZYWBaT2"
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			}));
			var o = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				c = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				d = n.n(c);
			const u = `${o.a.assetPath}/img/avatar_over18_square.png`,
				m = e => !e || e.includes("avatar_default_");
			t.a = e => {
				const {
					className: t,
					iconUrl: n,
					isCurrentUser: o,
					isNightMode: r,
					isNSFW: c,
					nsfwIconUrl: p,
					shouldHideNSFW: h
				} = e;
				if (o && m(n) || !o && !n) return i.a.createElement(l.a, {
					className: Object(a.a)(d.a.DefaultUserIcon, t, {
						[d.a.mNightmode]: r
					})
				});
				const b = !o && c && h ? p || u : n;
				return i.a.createElement("img", {
					alt: s.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(a.a)(d.a.UserIcon, t),
					src: b
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/models/User/index.ts"),
				c = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				d = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				u = n("./src/reddit/selectors/user.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = Object(i.c)({
					currentUser: u.i,
					isNightMode: u.U,
					shouldHideNSFW: u.B,
					user: u.lb
				}),
				h = Object(r.b)(p);
			t.a = h(e => {
				const {
					currentUser: t,
					iconUrl: n,
					isNSFW: o,
					user: r,
					userName: i,
					...u
				} = e, p = !!t && Object(l.e)(t) === i, h = p ? t : r, b = h && h.accountIcon || n, f = r ? r.isNSFW : o;
				return Object(a.a)(b) ? s.a.createElement(c.a, {
					headshot: b,
					className: e.className
				}) : s.a.createElement(d.a, m({}, u, {
					iconUrl: b,
					isCurrentUser: p,
					isNSFW: f
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
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/postCollection/index.ts"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/OverflowMenu/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				_ = n("./src/reddit/selectors/postCollection.ts"),
				x = n("./node_modules/reselect/es/index.js"),
				C = n("./src/reddit/helpers/trackers/postCollection.ts"),
				v = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				y = n.n(v),
				E = n("./node_modules/fbt/lib/FbtPublic.js");
			const O = c.a.wrapped(f.b, "DropdownRow", y.a);
			let k;
			const w = Object(g.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				j = Object(g.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				P = Object(x.c)({
					createPostUrl: _.d,
					isDeleteConfirmModalOpen: w,
					isEditCollectionModalOpen: j,
					shouldShowCollectionEditOptions: _.s
				}),
				S = Object(a.b)(P, (e, t) => ({
					copyLink: () => e(Object(u.x)(t.permalink)),
					onCreatePost: n => {
						t.shouldShowCreatePost && e(Object(l.b)(n))
					},
					onRemoveCollection: () => e(Object(m.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(d.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						k || (k = await Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("editCollectionModal")]).then(n.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(d.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = S(Object(b.c)(e => {
				const {
					className: t,
					collectionId: n,
					copyLink: o,
					createPostUrl: r,
					isDeleteConfirmModalOpen: a,
					isEditCollectionModalOpen: l,
					onCreatePost: c,
					onRemoveCollection: d,
					onToggleDeleteConfirmModal: u,
					onToggleEditModal: m,
					shouldShowCollectionEditOptions: b,
					shouldShowCreatePost: f,
					targetPosition: g,
					tooltipPosition: _,
					sendEvent: x
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(h.b, {
					className: t,
					dropdownId: `collection-menu-${n}-${f?1:2}`,
					onClick: s.a,
					targetPosition: g,
					tooltipPosition: _
				}, i.a.createElement(O, {
					onClick: o,
					displayText: E.fbt._("Copy collection link", null, {
						hk: "3Rfodz"
					})
				}), b && i.a.createElement(i.a.Fragment, null, i.a.createElement(O, {
					onClick: () => {
						x(Object(C.l)(n)), m()
					},
					displayText: E.fbt._("Edit", null, {
						hk: "1nftDt"
					})
				}), i.a.createElement(O, {
					onClick: () => {
						x(Object(C.k)(n)), u()
					},
					displayText: E.fbt._("Delete collection", null, {
						hk: "2FyIJB"
					})
				}), f && i.a.createElement(O, {
					onClick: () => {
						c(r)
					},
					displayText: E.fbt._("Create post", null, {
						hk: "1v2jHl"
					})
				}))), l && k && i.a.createElement(k, {
					collectionId: n,
					onClose: m,
					onEditSuccess: m
				}), a && i.a.createElement(p.a, {
					actionText: E.fbt._("Yes, Delete", null, {
						hk: "15Espn"
					}),
					headerText: E.fbt._("Delete Collection", null, {
						hk: "1QJ3as"
					}),
					modalText: E.fbt._("Are you sure you want to delete this collection? The posts within the collection won't be deleted.", null, {
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
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/opener/index.ts"),
				d = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				u = n("./src/reddit/components/OverflowMenu/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/Row.tsx"),
				p = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				h = n.n(p);
			const b = l.a.wrapped(m.b, "DropdownRow", h.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: n,
					onEditStartTime: s,
					onStartEventNow: i,
					postPermalink: l,
					shouldShowAddEventStartTime: m,
					targetPosition: p,
					tooltipPosition: h
				} = e;
				return a.a.createElement(u.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: r.a,
					targetPosition: p,
					tooltipPosition: h
				}, m && n && a.a.createElement(b, {
					onClick: n,
					displayText: o.fbt._("Add event start time", null, {
						hk: "4xWttR"
					})
				}), t && i && a.a.createElement(b, {
					onClick: i,
					displayText: o.fbt._("Start event now", null, {
						hk: "2TTNfJ"
					})
				}), t && s && a.a.createElement(b, {
					onClick: s,
					displayText: o.fbt._("Edit start time", null, {
						hk: "44XUxC"
					})
				}), a.a.createElement(b, {
					onClick: e.onRemoveClick,
					displayText: o.fbt._("Remove from collection", null, {
						hk: "qsiiu"
					})
				}), l && a.a.createElement(d.a, {
					target: c.c.BLANK,
					rel: c.b,
					isOverlay: !1,
					to: l
				}, a.a.createElement(b, {
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
				i = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				a = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/selectors/postCreations.ts"),
				d = n("./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less"),
				u = n.n(d);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = Object(l.c)({
				title: c.kb
			});
			var h = Object(a.b)(p)(e => {
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
				b = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = n("./src/lib/timeAgo/index.ts"),
				_ = n("./src/reddit/actions/postCollection/index.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less"),
				v = n.n(C),
				y = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				E = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				O = n("./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less"),
				k = n.n(O);

			function w({
				className: e,
				isLoading: t
			}) {
				const n = Object(E.a)({
					isLoading: t
				});
				return s.a.createElement("div", {
					className: Object(r.a)(k.a.Container, e)
				}, s.a.createElement("div", {
					className: k.a.Content
				}, s.a.createElement("div", {
					className: Object(r.a)(k.a.Title, n)
				}), s.a.createElement("div", {
					className: Object(r.a)(k.a.Secondary, n)
				})))
			}
			const j = ["right", "bottom"],
				P = ["right", "top"];
			var S = Object(a.b)(() => Object(l.c)({
					post: x.I
				}), (e, t) => ({
					onRemovePostFromCollection: () => e(Object(_.g)(t.collectionId, t.postId))
				}))(e => {
					const {
						post: t,
						onRemovePostFromCollection: n
					} = e;
					return t ? s.a.createElement("div", {
						className: v.a.container
					}, s.a.createElement("div", {
						className: v.a.content
					}, s.a.createElement(f.a, {
						className: v.a.title,
						target: "_blank",
						to: t.permalink
					}, t.title), s.a.createElement("div", {
						className: v.a.metaLine
					}, b.fbt._("Posted · {timeAgo}", [b.fbt._param("timeAgo", Object(g.d)(t.created / 1e3))], {
						hk: "ZVJpV"
					}))), s.a.createElement(y.a, {
						onRemoveClick: n,
						className: v.a.overflowMenu,
						dropdownId: "collection-widget-item" + t.id,
						postPermalink: t.permalink,
						targetPosition: j,
						tooltipPosition: P
					})) : s.a.createElement(w, {
						className: v.a.container,
						isLoading: !0
					})
				}),
				T = n("./src/reddit/components/Widgets/PostCollection/index.m.less"),
				I = n.n(T);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = ["right", "bottom"], D = ["right", "top"];
			class L extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.renderItem = (e, t) => s.a.createElement(S, {
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
						className: Object(r.a)(e, I.a.container)
					}, s.a.createElement("div", {
						className: I.a.topRow
					}, M._("Collection", null, {
						hk: "1pY1s2"
					}), s.a.createElement(i.a, {
						className: I.a.menuButton,
						collectionId: t.id,
						isSubmitPage: !0,
						permalink: t.permalink,
						targetPosition: N,
						tooltipPosition: D
					})), s.a.createElement("h4", {
						className: I.a.collectionDescription
					}, t.title), s.a.createElement("div", {
						className: I.a.listWrapper
					}, s.a.createElement("div", {
						className: I.a.listContainer
					}, n)), s.a.createElement(h, null))
				}
			}
			t.a = L
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
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				u = n("./src/reddit/components/RichTextJson/index.tsx"),
				m = n("./src/reddit/helpers/dom/index.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				b = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				f = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				_ = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				x = n.n(_);
			const C = c.a.div("RuleShortName", x.a),
				v = c.a.div("RuleIndex", x.a),
				y = c.a.div("RuleTitle", x.a),
				E = c.a.div("RuleDescription", x.a),
				O = c.a.wrapped(d.a, "RawHTMLDisplay", x.a),
				k = {};
			class w extends r.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(m.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === g.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: n,
						shouldShowFullDisplay: o
					} = this, s = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), i = !o(e) && !!s;
					return r.a.createElement(C, {
						className: Object(l.a)({
							[x.a.pointerCursor]: i
						}),
						onClick: o(e) || !s ? void 0 : n
					}, r.a.createElement(f.a, null, r.a.createElement(v, null, `${e.humanIndex}.`), r.a.createElement(y, null, `${e.rule.shortName}`), r.a.createElement("div", null, !o(e) && s && (e.isInIcons2020 ? r.a.createElement(p.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}) : t.isVisible ? r.a.createElement(b.a, {
						className: x.a.Chevron
					}) : r.a.createElement(h.a, {
						className: x.a.Chevron
					})))), t.isVisible && r.a.createElement(E, null, e.rule.descriptionRichText ? r.a.createElement(u.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: k
					}) : e.rule.descriptionHtml ? r.a.createElement(O, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			const j = e => {
				const t = Object(a.b)();
				return e.rules.length > 0 ? r.a.createElement(i.a, {
					className: e.className,
					styles: e.styles,
					title: o.fbt._("{subredditName} Rules", [o.fbt._param("subredditName", `r/${e.subredditName}`)], {
						hk: "2AwRLk"
					}),
					redditStyle: e.redditStyle
				}, e.rules.map((function(n, o) {
					return r.a.createElement(w, {
						key: `rule${n.shortName}${n.createdUtc}`,
						rule: n,
						display: e.display,
						humanIndex: o + 1,
						isInIcons2020: t
					})
				}))) : null
			};
			t.b = e => r.a.createElement(j, {
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
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/SEOTitle/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/models/Theme/index.ts"),
				x = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				v = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = C(e);
					return Object(_.f)(t)
				},
				E = e => {
					const t = v(e);
					return Object(_.f)(t)
				};
			var O = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = n.n(O);
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.t)(), P = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.m)(e, t) || void 0,
						o = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						s = Object(g.U)(e);
					return o || s
				},
				nigtmode: g.U,
				subredditId: u.m,
				topPostVariant: b.d
			}));
			class S extends s.a.Component {
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
					return e.backgroundColor = C(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: o,
						headerButton: r,
						onClick: i,
						title: l,
						titleClassName: d,
						truncateThreshold: u
					} = this.props, p = n ? k.a.widgetContentOnly : k.a.widgetContent, h = !o && this.props.styles, b = h ? this.getWidgetBackgroundStyles() : {}, f = h ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(a.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: o,
							[k.a.clickable]: !!i,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": o,
						onClick: i,
						style: b
					}, l && s.a.createElement("div", {
						className: k.a.widgetHeader,
						style: f
					}, s.a.createElement("div", {
						className: Object(a.a)(k.a.widgetTitle, d)
					}, s.a.createElement(c.b, {
						type: c.a.Widget
					}, l)), r), s.a.createElement("div", {
						className: Object(a.a)(p, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.o, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, w._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(P(Object(l.a)(Object(d.c)(S))))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(o.b)(() => Object(s.c)({
				userIsSubscriber: i.fb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/selectors/activeModalId.ts"),
				a = n("./src/reddit/selectors/structuredStyles.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const c = Object(s.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.i,
				isBladeEditorDirty: a.h,
				isModalOpen: Object(i.b)(l.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(o.b)(c, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(r.h)(t))
			}))
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "s", (function() {
				return f
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "t", (function() {
				return _
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "w", (function() {
				return C
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "p", (function() {
				return k
			}));
			const o = 284,
				s = 450,
				r = 800,
				i = 284,
				a = 48,
				l = 640,
				c = 1600,
				d = 1280,
				u = 40,
				m = 48,
				p = 24,
				h = 24,
				b = 312,
				f = 40,
				g = 270,
				_ = 106,
				x = 5,
				C = 16,
				v = 1250,
				y = 82,
				E = 48,
				O = 36,
				k = 40
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
				return i
			})), n.d(t, "e", (function() {
				return a
			}));
			const o = "comment",
				s = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "post-content"
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "k", (function() {
				return a
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "n", (function() {
				return d
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			}));
			const o = "DraftEditor-contentwrapper",
				s = "public-DraftStyleDefault-block",
				r = "data-offset-key",
				i = "hovered",
				a = "scrollerItem",
				l = "threadline",
				c = "header-user-dropdown",
				d = "voteButton",
				u = "RichTextJSON-root",
				m = "ImageBox-image",
				p = "content-type-link",
				h = "styled-outbound-link",
				b = "ListingLayout-backgroundContainer",
				f = "ListingLayout-outerContainer"
		},
		"./src/reddit/constants/elementIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			const o = "bladeContainer",
				s = "header",
				r = "overlayScrollContainer",
				i = "collectionPostListScrollContainer"
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var o, s;
			n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(o || (o = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(s || (s = {}))
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
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "g", (function() {
				return c
			}));
			const o = "PostCreation-AddEventButton",
				s = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				a = 300,
				l = a,
				c = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const o = 480,
				s = 960,
				r = 1200
		},
		"./src/reddit/constants/zIndex.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return o
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			const o = 4,
				s = 51,
				r = 60,
				i = 70,
				a = 90,
				l = 99,
				c = 100,
				d = 100
		},
		"./src/reddit/contexts/CoreStyleExperiments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, s = n("./node_modules/react/index.js"),
				r = n.n(s);
			! function(e) {
				e.Buttons = "buttons2020", e.Icons = "icons2020"
			}(o || (o = {}));
			const i = r.a.createContext({
				[o.Buttons]: !1,
				[o.Icons]: !1
			});
			t.b = i
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
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
			const i = s.a.createContext(!1);

			function a(e) {
				function t(t) {
					return s.a.createElement(i.Consumer, null, n => s.a.createElement(e, r({}, t, {
						isOverlay: n
					})))
				}
				return t.displayName = `WithOverlay(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/controls/Button/index.m.less": function(e, t, n) {
			e.exports = {
				Button2020: "_3t7aUZU2b2KWwDQkfT2eHl",
				button2020: "_3t7aUZU2b2KWwDQkfT2eHl",
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
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "d", (function() {
				return M
			})), n.d(t, "g", (function() {
				return N
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				l = n("./src/reddit/controls/Button/index.m.less"),
				c = n.n(l);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = {
				role: "button",
				tabIndex: 0
			};
			var m, p, h, b;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(m || (m = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain"
			}(p || (p = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(h || (h = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(b || (b = {}));
			const f = (e, t) => n => s.a.createElement(e, {
					className: Object(r.a)(t, n.className)
				}),
				g = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconPosition: o = h.C,
						isFullWidth: i = !1,
						isSquare: l = !1,
						children: f,
						className: g,
						kind: v = b.Button,
						legacyClassName: y,
						priority: E = p.Primary,
						redditStyle: O,
						size: k = m.S,
						text: w,
						...j
					} = e, P = Object(a.a)(), S = Object(a.b)(), T = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: n,
						Icon: o,
						is2020: s,
						isFullWidth: i,
						isSquare: a,
						legacyClassName: l,
						priority: d,
						size: u,
						text: m
					}) => s ? Object(r.a)(e, c.a.Button2020, d && c.a[d], u && c.a[u], {
						[c.a.isFullWidth]: i,
						[c.a.isIconOnly]: !!o && !m,
						[c.a.isSquare]: a,
						[c.a.redditStyle]: !(!t && !n)
					}) : Object(r.a)(e, l, {
						[c.a.redditStyle]: !(!t && !n)
					}))({
						baseClassName: g,
						children: f,
						dataRedditStyle: t,
						Icon: n,
						is2020: P,
						isFullWidth: i,
						isSquare: l,
						legacyClassName: y,
						priority: E,
						redditStyle: O,
						size: k,
						text: w
					}), I = (({
						children: e,
						text: t,
						Icon: n,
						iconPosition: o,
						priority: i,
						isInIcons2020: a
					}) => !n && t ? s.a.createElement("span", null, t) : s.a.createElement(s.a.Fragment, null, n && (o === h.C || o === h.L) && s.a.createElement(n, {
						className: Object(r.a)(c.a.Icon, {
							[c.a.isLeft]: o === h.L
						}),
						isFilled: a && i === p.Primary
					}), t && s.a.createElement("span", {
						className: c.a.Text
					}, t), e && e, n && o === h.R && s.a.createElement(n, {
						className: Object(r.a)(c.a.Icon, c.a.isRight),
						isFilled: a && i === p.Primary
					})))({
						children: f,
						text: w,
						Icon: n,
						iconPosition: o,
						priority: E,
						isInIcons2020: S
					});
					return v === b.InternalLink && (e => "to" in e)(j) ? s.a.createElement(_, d({}, u, j, {
						className: T
					}), I) : v === b.ExternalLink && (e => "href" in e)(j) ? s.a.createElement(x, d({}, u, j, {
						className: T
					}), I) : s.a.createElement(C, d({}, u, j, {
						className: T
					}), I)
				},
				_ = e => s.a.createElement(i.a, e),
				x = e => s.a.createElement("a", e),
				C = e => s.a.createElement("button", e),
				v = e => s.a.createElement(g, d({
					kind: b.ExternalLink,
					priority: p.Primary,
					legacyClassName: c.a.PrimaryLinkButton
				}, e)),
				y = e => s.a.createElement(g, d({
					kind: b.InternalLink,
					priority: p.Primary,
					legacyClassName: c.a.PrimaryRouterLink
				}, e)),
				E = e => s.a.createElement(g, d({
					kind: b.Button,
					priority: p.Primary,
					legacyClassName: c.a.PrimaryButton
				}, e)),
				O = e => s.a.createElement(g, d({
					kind: b.ExternalLink,
					priority: p.Secondary,
					legacyClassName: c.a.SecondaryLinkButton
				}, e)),
				k = e => s.a.createElement(g, d({
					kind: b.InternalLink,
					priority: p.Secondary,
					legacyClassName: c.a.SecondaryRouterLink
				}, e)),
				w = e => s.a.createElement(g, d({
					kind: b.Button,
					priority: p.Secondary,
					legacyClassName: c.a.SecondaryButton
				}, e)),
				j = e => s.a.createElement(g, d({
					kind: b.InternalLink,
					priority: p.Plain,
					legacyClassName: c.a.TertiaryRouterLink
				}, e)),
				P = e => s.a.createElement(g, d({
					kind: b.Button,
					priority: p.Plain,
					legacyClassName: c.a.TertiaryButton
				}, e)),
				S = ({
					className: e,
					...t
				}) => s.a.createElement(g, d({
					kind: b.Button,
					priority: p.Primary,
					className: Object(r.a)(e, c.a.DangerButtonColors),
					legacyClassName: c.a.DangerButton
				}, t)),
				T = ({
					className: e,
					...t
				}) => s.a.createElement(g, d({
					kind: b.Button,
					className: Object(r.a)(e, c.a.GoldButtonColors),
					legacyClassName: c.a.GoldButton
				}, t)),
				I = ({
					className: e,
					...t
				}) => s.a.createElement(g, d({
					kind: b.Button,
					className: Object(r.a)(e, c.a.PremiumButtonColors),
					legacyClassName: c.a.PremiumButton
				}, t)),
				M = ({
					className: e,
					...t
				}) => s.a.createElement(g, d({
					kind: b.Button,
					className: Object(r.a)(e, c.a.ChatButton)
				}, t)),
				N = ({
					className: e,
					...t
				}) => s.a.createElement(g, d({
					kind: b.Button,
					className: Object(r.a)(e, c.a.InlineTextButton)
				}, t));
			t.q = g
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
				i = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				d = n.n(c);
			t.a = e => s.a.createElement(l.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(r.a)(e.className, d.a.checkboxInput, e.disabled ? d.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, s.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? s.a.createElement(a.a, {
				className: d.a.checkboxSelected
			}) : s.a.createElement(i.a, null), e.children)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var o = n("./node_modules/lodash/throttle.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
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
			class g extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = s()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(l.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(d.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(g, f({
					className: n
				}, t))
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
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/domUtils/index.ts"),
				a = n("./src/reddit/constants/zIndex.ts"),
				l = n("./src/reddit/controls/Dropdown/index.m.less"),
				c = n.n(l);
			class d extends s.a.Component {
				componentDidMount() {
					this.props.onDropdownMounted && this.props.onDropdownMounted(), this.props.noFocus || this.ref && this.ref.focus({
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
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
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
				return w
			})), n.d(t, "c", (function() {
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(s),
				i = n("./node_modules/raf/index.js"),
				a = n.n(i),
				l = n("./node_modules/react/index.js"),
				c = n.n(l),
				d = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/selectors/activeModalId.ts"),
				b = n("./src/higherOrderComponents/asModal/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/layout/row/Inline/index.tsx"),
				_ = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = n.n(_);
			var C = Object(b.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return c.a.createElement("div", {
						className: x.a.wrapper
					}, c.a.createElement(g.a, {
						className: x.a.titleRow
					}, n), c.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), c.a.createElement(g.a, {
						className: x.a.buttonRow
					}, c.a.createElement(f.i, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				v = n("./src/reddit/controls/ErrorText/index.m.less"),
				y = n.n(v);
			const E = Object(u.c)({
				activeModalId: h.a
			});
			class O extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					a()(() => {
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
						activeModalId: t,
						className: n,
						errorModalBody: s,
						errorModalTitle: r = o.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: i = o.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: a,
						textHasOverflowed: l
					} = this.state;
					return c.a.createElement("div", {
						className: Object(m.a)(y.a.wrapper, n)
					}, c.a.createElement("span", {
						className: y.a.description,
						ref: this.spanRef
					}, e), l && c.a.createElement("span", {
						className: y.a.moreText,
						onClick: this.toggleModal
					}, i), t === a && c.a.createElement(C, {
						onConfirmed: this.toggleModal,
						title: r
					}, s || e))
				}
			}
			const k = Object(d.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(O),
				w = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: o,
						fallbackMessage: s,
						messages: r = []
					} = e, i = r.length ? r : s ? [s] : [];
					return i.length ? c.a.createElement("div", {
						className: t
					}, i.map((e, t) => c.a.createElement(k, {
						className: n,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				j = e => c.a.createElement(w, {
					fallbackMessage: o.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = k
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/flow.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-dnd/lib/index.js"),
				l = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				c = n("./src/reddit/helpers/dragDropContext/index.ts");
			const d = l.NativeTypes.FILE,
				u = s()(Object(a.DropTarget)(d, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), c.a);
			class m extends i.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(i.a.createElement("div", {
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
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/ErrorText/index.tsx"),
				l = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				c = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
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
			const p = i.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: o,
						className: i,
						...a
					} = e, l = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, i, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, s.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: o
					}, a)), e.label && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: o,
						isInvalid: i,
						className: a,
						redditStyle: l,
						...c
					} = e, d = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, a, {
							[u.a.mIsInvalid]: i,
							[u.a.mIsRedditStyle]: l
						}),
						onClick: h
					}, s.a.createElement(p, m({
						innerRef: o
					}, c)), e.label && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => s.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(l.a, {
					className: u.a.plus
				}));
			var _;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(_ || (_ = {}));
			class x extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: _.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: _.REMOVE,
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
					return e.map((e, i) => s.a.createElement(b, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!r[i],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, i),
						placeholder: o,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, s.a.createElement(c.b, {
						className: u.a.trash
					})), !!r[i] && s.a.createElement(a.b, {
						className: u.a.errorText
					}, r[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: o,
						addValueText: i,
						disabled: a
					} = this.props;
					this.focusedInput = null;
					const l = !(!!o && n.length >= o) && !a;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && l && s.a.createElement(g, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && l && s.a.createElement(g, {
						onClick: this.addValue,
						text: i
					}))
				}
			}
		},
		"./src/reddit/controls/GrowingOutlinedInput/index.m.less": function(e, t, n) {
			e.exports = {
				growingOutlinedInput: "PqYQ3WC15KaceZuKcFI02"
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Input/index.m.less"),
				d = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === l.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return s.a.createElement("input", u({
						className: Object(i.a)(d.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: a.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/index.m.less"),
				r = n.n(s);
			t.a = o.a.input("input", r.a)
		},
		"./src/reddit/controls/InternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				disabledLink: "_1tQt2CUWT3M7NNSMoh_o_4"
			}
		},
		"./src/reddit/controls/InternalLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/path/index.ts"),
				l = n("./src/reddit/controls/InternalLink/index.m.less"),
				c = n.n(l);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function u({
				children: e,
				className: t,
				disabled: n,
				replace: o,
				to: l,
				...u
			}) {
				return n ? s.a.createElement("span", {
					className: Object(i.a)(c.a.disabledLink, t)
				}, e) : ("string" == typeof l && (l = Object(a.b)(l)), s.a.createElement(r.a, d({
					className: t,
					to: l
				}, u), e))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n
			}) => s.a.createElement("div", {
				className: Object(r.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			})), n.d(t, "c", (function() {
				return w
			}));
			var o = n("./node_modules/lodash/omit.js"),
				s = n.n(o),
				r = n("./node_modules/query-string/index.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				l = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/addQueryParams/index.ts");
			var m = (e, t) => t ? Object(u.a)(e, {
					user_id: t
				}) : e,
				p = n("./src/lib/opener/index.ts"),
				h = n("./src/lib/redditId/index.ts"),
				b = n("./src/reddit/actions/post.ts"),
				f = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/reddit/helpers/getVendorMetadata.ts"),
				_ = n("./src/reddit/helpers/pixels.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/selectors/user.ts");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const y = Object(d.a)(C.a, C.i, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(x.b)(e, n) : null, x.I, (e, t, n, o) => ({
					allowClickTracking: e,
					basePixelMetadata: n,
					userId: t ? Object(h.a)(t.id) : null,
					post: o
				})),
				E = Object(c.b)(y, e => ({
					fireAdPixelsOfType: (t, n) => e(Object(b.u)(t, n)),
					recordClick: (t, n, o) => {
						const s = t.events.filter(({
							type: e,
							url: t
						}) => e === f.a.Click && Object(_.b)(t));
						Object(_.c)(s), e(Object(b.l)(String(n), {
							postId: t.id,
							vendorMetadata: o
						}))
					}
				})),
				O = (e, t, n, o) => {
					const s = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					o && t.outboundUrl && s && (e.href = m(t.outboundUrl, n))
				},
				k = (e, t, n) => {
					let o, s = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(n)) {
						s = Object(g.a)(e, t, f.a.Click);
						const {
							url: r,
							query: a
						} = i.a.parseUrl(n);
						o = i.a.stringifyUrl({
							url: r,
							query: {
								...a,
								...s
							}
						})
					} else o = n;
					return {
						url: o,
						metadata: s
					}
				},
				w = (e, t, n) => {
					const o = k(t, n, e.href);
					return e.href = o.url, o.metadata
				},
				j = ({
					isSponsored: e,
					source: t
				}) => !!(e && (null == t ? void 0 : t.outboundUrl)),
				P = E(e => {
					const t = Object(a.useRef)(null),
						{
							allowClickTracking: n,
							basePixelMetadata: o,
							fireAdPixelsOfType: r,
							href: i,
							isSponsored: c,
							post: d,
							postId: u,
							recordClick: m,
							source: h,
							userId: b
						} = e;
					let g = s()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "recordClick", "source", "userId"]);
					const _ = h && h.outboundUrl && c ? h.outboundUrl : i;
					return g = {
						...g,
						href: _,
						rel: p.a,
						target: p.c.BLANK
					}, !h || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: n
						} = e;
						return !(!t || !n) && (t > n + 3e5 || t < n - 36e5)
					})(h) ? l.a.createElement("a", g) : l.a.createElement("a", v({}, g, {
						onMouseDown: s => {
							if (!j(e)) return !(1 !== s.button && 2 !== s.button && !s.ctrlKey) || void O(s.currentTarget, h, b, n);
							t.current = w(s.currentTarget, u, o)
						},
						onClick: () => {
							d && (j(e) && m(d, f.a.Click, t.current), r(d, f.a.Click))
						},
						onMouseLeave: e => {
							c || ((e, t) => {
								e.href = t
							})(e.currentTarget, _)
						},
						onTouchStart: e => O(e.currentTarget, h, b, n)
					}))
				});
			t.b = P
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
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/helpers/dragDropContext/index.ts"),
				i = n("./node_modules/lodash/flow.js"),
				a = n.n(i),
				l = n("./node_modules/react-dnd/lib/index.js");
			class c extends s.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? a()(e.connectDropTarget, e.connectDragSource)(s.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var d = a()(Object(l.DragSource)("card", {
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
			})), Object(l.DropTarget)("card", {
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
			})))(c);
			class u extends s.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(n => {
							const o = n.values.slice(),
								s = o.indexOf(e),
								r = o.splice(s, 1)[0];
							let i = o.indexOf(t);
							return s <= i && (i += 1), o.splice(i, 0, r), this.props.onDrop(e, t, o), {
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
				dropdownSection: "_2MAa_9ffQVHzsZ-RD1dD5F"
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
				secondary: "_2q4aqq7yddFWa3SfRCihRH",
				container: "_3oyS3dPRsa51zDEONlIdts",
				mHighLight: "F6s6qTIrbT1UvKhtNmPq4"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				profileIcon: "_3JCR5jV3N1dbyHaUswxl4K"
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_20inB3H1vZ94tVilqSJmU2"
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
				return J
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/debounce.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				l = n("./src/lib/classNames/index.ts");
			const c = {
				leading: !0,
				trailing: !1
			};
			var d = (e, t, n, o = c) => {
					const s = {
							...c,
							...o
						},
						r = t > e ? 1 : -1;
					let i = e;
					if (e !== t) {
						for (s.leading || (i += r); i !== t;) n(i), i += r;
						s.trailing && n(i)
					} else(s.leading || s.trailing) && n(e)
				},
				u = n("./src/lib/forEachGroup/index.ts"),
				m = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				p = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				h = n.n(p);
			class b extends i.Component {
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
					return a.a.createElement("div", {
						className: Object(l.a)(h.a.entry, this.props.disabled && h.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			var f = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				g = n.n(f);

			function _() {
				return (_ = Object.assign || function(e) {
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
					...o
				}) => a.a.createElement("div", _({
					className: Object(l.a)(g.a.dropdownSection, e)
				}, o), n && a.a.createElement("div", {
					className: g.a.title
				}, n), t),
				C = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				v = n("./src/reddit/helpers/name/index.ts"),
				y = n("./src/lib/lessComponent.tsx"),
				E = n("./src/reddit/components/SubredditIcon/index.tsx"),
				O = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				k = n("./src/reddit/icons/svgs/Link/index.tsx"),
				w = n("./src/reddit/icons/svgs/TextPost/index.tsx"),
				j = n("./src/reddit/icons/svgs/Video/index.tsx"),
				P = n("./src/reddit/layout/row/Inline/index.tsx"),
				S = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				T = n.n(S);
			const I = [{
				type: "text",
				Icon: w.a
			}, {
				type: "images",
				Icon: O.a
			}, {
				type: "videos",
				Icon: j.a
			}, {
				type: "links",
				Icon: k.a
			}];

			function M(e) {
				const {
					allowedPostTypes: t,
					className: n
				} = e;
				return a.a.createElement(P.a, {
					className: Object(l.a)(T.a.rowStyle, n)
				}, I.map(({
					type: e,
					Icon: n
				}) => a.a.createElement("div", {
					className: Object(l.a)(T.a.iconWrapper, {
						[T.a.mDisabled]: !t[e]
					})
				}, a.a.createElement(n, null))))
			}
			var N = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				D = n.n(N);
			const L = y.a.wrapped(E.b, "subredditIcon", D.a);

			function R(e) {
				const {
					highlight: t,
					icon: n,
					title: o,
					secondaryText: s,
					item: r
				} = e, {
					allowedPostTypes: i
				} = r;
				return a.a.createElement("div", {
					className: Object(l.a)(D.a.container, {
						[D.a.mHighlight]: t
					})
				}, n, a.a.createElement("div", {
					className: D.a.main
				}, a.a.createElement("span", {
					className: D.a.title
				}, o), s && a.a.createElement("span", {
					className: D.a.secondary
				}, s)), t && i && a.a.createElement(M, {
					allowedPostTypes: i
				}))
			}
			var F = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				B = n.n(F);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function U(e) {
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
				}) : void 0, i = a.a.createElement(C.a, {
					className: Object(l.a)(B.a.profileIcon, D.a.subredditIcon)
				});
				return a.a.createElement(R, A({
					icon: i,
					title: s,
					secondaryText: r
				}, e))
			}
			var W = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less"),
				H = n.n(W);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function z(e) {
				const {
					item: {
						primaryColor: t,
						iconUrl: n,
						name: s,
						subscribers: r
					}
				} = e, i = Object(v.c)(s), l = void 0 !== r ? o.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [o.fbt._plural(r, "number")], {
					hk: "2SvJUX"
				}) : void 0, c = a.a.createElement(L, {
					className: H.a.icon,
					iconUrl: n,
					primaryColor: t,
					redditStyle: !0
				});
				return a.a.createElement(R, K({
					icon: c,
					title: i,
					secondaryText: l
				}, e))
			}
			var V = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				q = n.n(V);
			const G = {
				[m.a.OWN_PROFILE]: () => o.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[m.a.SUBSCRIBED_TO_SUBREDDIT]: () => o.fbt._("My communities", null, {
					hk: "2NVUpl"
				}),
				[m.a.OTHER_SUBREDDIT]: () => o.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[m.a.MODERATED_SUBREDDIT]: () => o.fbt._("Moderated subreddits", null, {
					hk: "uZtld"
				})
			};
			class J extends a.a.PureComponent {
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
							return U;
						default:
							return z
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t
					} = this.props, n = [];
					return this.props.showNoMatchesCaption && n.push(a.a.createElement(x, {
						key: "no-matches"
					}, a.a.createElement("div", {
						className: q.a.noMatches
					}, o.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (o, s, r, i) => {
						const l = [];
						d(r, i, n => {
							const o = t[n],
								s = n === e,
								r = this.getEntryContentComponent(o.type, o.name);
							r && l.push(a.a.createElement(b, {
								entryIndex: n,
								disabled: o.disabled,
								key: o.id || o.name,
								onSelect: this.props.onEntrySelect,
								onOver: this.onEntryOver,
								onUpdate: this.onEntryUpdate
							}, a.a.createElement(r, {
								highlight: s,
								item: o
							})))
						});
						const c = G[s];
						n.push(a.a.createElement(x, {
							key: s,
							title: c && c()
						}, l))
					}), a.a.createElement("div", {
						className: Object(l.a)(q.a.container, this.props.className, {
							[q.a.mIsValid]: this.props.isValid,
							[q.a.mIsVisible]: n.length > 0
						}),
						ref: this.setContainerRef,
						onMouseDown: this.props.onContainerMouseDown,
						onScroll: this.onScroll
					}, n)
				}
			}
		},
		"./src/reddit/controls/SubredditPicker/Picker/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2sfaZWDVT8JLAt2J9p4IzV",
				mIsActive: "_1d_qHIhircwk0cy-gLlRQq",
				mIsInvalid: "_3sp2CpDC4eODg63Hhf8_lz"
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
				i = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				a = n("./src/reddit/models/User/index.ts");
			const l = (e, t, n) => {
					if (Object(r.a)(e, t.name)) {
						const {
							id: e,
							name: i
						} = t, {
							url: a,
							color: l
						} = Object(s.a)({
							shouldHideNsfwIcon: n,
							subredditOrProfile: t
						});
						return {
							rawString: Object(r.c)(i),
							record: {
								id: e,
								name: i,
								iconUrl: a,
								primaryColor: l,
								type: o.a.SUBREDDIT
							}
						}
					}
					return {
						rawString: e,
						record: null
					}
				},
				c = (e, t, n) => {
					const s = Object(a.e)(t);
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
					if (t && (!n || Object(r.e)(e))) return l(e, t, o);
					if (n && (!t || Object(r.f)(e))) return c(e, n);
					if (t && n) {
						const s = l(e, t, o);
						return s.record ? s : c(e, n)
					}
					return {
						rawString: e,
						record: null
					}
				},
				u = e => {
					let t;
					return t = e.type === o.a.PROFILE ? i.a.OWN_PROFILE : i.a.OTHER_SUBREDDIT, {
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
				return X
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/lodash/isEqual.js"),
				i = n.n(r),
				a = n("./src/reddit/helpers/name/index.ts");
			class l extends s.a.Component {
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
					if (!i()(t, n) && !this.isFocused) {
						t.record && !n.record && Object(a.a)(t.record.name, n.rawString) ? this.setState({
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
			var c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/objectSelector/index.ts"),
				m = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				p = n("./src/reddit/actions/subredditCrosspostable.ts"),
				h = n("./src/reddit/actions/subscription/index.ts"),
				b = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				f = n("./node_modules/lodash/debounce.js"),
				g = n.n(f),
				_ = n("./src/lib/classNames/index.ts"),
				x = n("./src/reddit/constants/keycodes.ts"),
				C = n("./src/reddit/constants/posts.ts"),
				v = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				y = n("./node_modules/fbt/lib/FbtPublic.js"),
				E = n("./src/lib/lessComponent.tsx"),
				O = n("./src/reddit/components/SubredditIcon/index.tsx"),
				k = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				w = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/icons/svgs/Search/index.tsx"),
				P = n("./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less"),
				S = n.n(P);
			const T = E.a.wrapped(O.b, "subredditRoundIcon", S.a),
				I = E.a.wrapped(j.a, "searchIcon", S.a),
				M = E.a.wrapped(k.a, "userIcon", S.a),
				N = E.a.span("iconEmpty", S.a),
				D = ({
					className: e,
					disabled: t
				}) => s.a.createElement(w.b, {
					className: Object(_.a)(S.a.dropdownIcon, e, {
						[S.a.mDisabled]: t
					})
				});

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const R = e => {
				e.preventDefault(), e.stopPropagation()
			};

			function F(e) {
				const {
					className: t,
					disabled: n,
					isActive: o,
					onDropdownClick: r,
					inputRef: i,
					record: a,
					value: l,
					...c
				} = e;
				let d = s.a.createElement(N, null);
				return o ? d = s.a.createElement(I, null) : a && (d = a.type === C.a.SUBREDDIT ? s.a.createElement(T, a) : s.a.createElement(M, null)), s.a.createElement("div", {
					className: Object(_.a)(S.a.searchBar, t)
				}, d, s.a.createElement("div", {
					className: S.a.inputWrapper
				}, s.a.createElement("input", L({
					className: S.a.input,
					ref: i,
					disabled: n,
					placeholder: o ? y.fbt._("Search communities", null, {
						hk: "1mtF5A"
					}) : y.fbt._("Choose a community", null, {
						hk: "44gKTd"
					}),
					spellCheck: !1,
					value: l
				}, c))), s.a.createElement("div", {
					onClick: r,
					onMouseDown: R
				}, s.a.createElement(D, {
					disabled: n
				})))
			}
			var B = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				A = n("./src/reddit/controls/SubredditPicker/Picker/index.m.less"),
				U = n.n(A);
			class W extends s.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => {
						this.inputRef = e, this.props.inputRef && this.props.inputRef(e)
					}, this.commitSelection = () => {
						const e = this.getPickerValue(!0);
						Object(b.c)(e.rawString) ? this.props.onChange(e, !0) : this.props.onChange({
							rawString: "",
							record: null
						}, !0), this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.callOnChange = () => this.props.onChange(this.getPickerValue()), this.requestAutocomplete = g()(e => this.props.onGetSubredditAutocomplete(e), 200, {
						maxWait: 200
					}), this.selectItem = e => {
						const t = this.props.items[e];
						if (!t) throw new Error("Invalid item index");
						let n;
						n = t.type === v.a.OWN_PROFILE ? Object(a.d)(t.name) : Object(a.c)(t.name), this.setState({
							inputValue: n,
							focusedIndex: e
						}, this.commitSelection)
					}, this.getPickerValue = (e = !1) => {
						const t = this.state.inputValue,
							n = this.state.focusedIndex,
							{
								items: o,
								value: s
							} = this.props;
						if (s && s.record && Object(a.a)(t, s.record.name)) return {
							...s,
							rawString: t
						};
						const r = o[n] || e && o.find(e => Object(a.a)(e.name, t));
						if (!r) return {
							rawString: t,
							record: null
						};
						const {
							type: i,
							id: l,
							name: c,
							iconUrl: d,
							primaryColor: u,
							allowedPostTypes: m
						} = r;
						return {
							rawString: t,
							record: Object(a.a)(t, c) ? {
								id: l,
								name: c,
								iconUrl: d,
								primaryColor: u,
								allowedPostTypes: m,
								type: i === v.a.OWN_PROFILE ? C.a.PROFILE : C.a.SUBREDDIT
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
						const t = e.target.value;
						this.requestAutocomplete(t), this.setState({
							inputValue: t
						}, this.callOnChange)
					}, this.onKeyDown = e => {
						e.which === x.a.ArrowUp ? (this.moveSelection(!0), e.preventDefault()) : e.which === x.a.ArrowDown ? (this.moveSelection(), e.preventDefault()) : e.which === x.a.Enter || e.which === x.a.Tab ? (-1 !== this.state.focusedIndex ? this.selectItem(this.state.focusedIndex) : this.commitSelection(), e.which !== x.a.Tab && e.preventDefault()) : e.which === x.a.Escape && (this.inputRef && this.inputRef.blur(), e.preventDefault())
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
						isValid: n = !0,
						items: o,
						value: r
					} = this.props, {
						isActive: i,
						isOpen: a
					} = this.state, l = r.record;
					return s.a.createElement("div", {
						className: Object(_.a)(U.a.container, e, {
							[U.a.mIsActive]: i,
							[U.a.mIsInvalid]: !n
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
						record: l
					}), a && s.a.createElement(B.a, {
						items: o,
						isValid: n,
						focusedIndex: this.state.focusedIndex,
						showNoMatchesCaption: !this.props.haveSuggestions && this.props.isAllDataRetrieved,
						onContainerMouseDown: this.onDropdownContainerMouseDown,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect
					}))
				}
			}
			var H = W,
				K = n("./src/reddit/selectors/subredditAutocomplete.ts");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(u.a)(Object(d.a)((e, t) => t.value, (e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					value: o
				}) => Object(K.a)(e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					substring: o.rawString
				}), (e, t) => {
					const {
						suggestedItems: n,
						fallbackItems: o,
						isAllDataRetrieved: s
					} = t, r = n.length ? n : e.record ? [Object(b.a)(e.record)] : [];
					return {
						items: 0 === r.length && s ? o : r,
						haveSuggestions: r.length > 0,
						isAllDataRetrieved: t.isAllDataRetrieved,
						isAutocompletePending: t.isPending
					}
				})),
				q = {
					onGetInitialData: e => t => t(e ? p.d() : h.e()),
					onGetSubredditAutocomplete: m.a
				};
			class G extends s.a.Component {
				constructor() {
					super(...arguments), this.onGetSubredditAutocomplete = e => {
						this.props.onGetSubredditAutocomplete(e)
					}
				}
				componentDidMount() {
					this.props.onGetInitialData(!!this.props.allowCrosspostableOnly)
				}
				render() {
					return s.a.createElement(H, z({}, this.props, {
						onGetSubredditAutocomplete: this.onGetSubredditAutocomplete
					}))
				}
			}
			var J = Object(c.b)(V, q)(G);
			class X extends s.a.Component {
				constructor() {
					super(...arguments), this.renderPicker = e => s.a.createElement(J, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						className: this.props.className,
						disabled: this.props.disabled || !1,
						includeUserProfile: this.props.includeUserProfile,
						inputRef: this.props.inputRef,
						isValid: this.props.isValid,
						onChange: e.onChange,
						onFocus: e.onFocus,
						value: e.value,
						selectOnBlur: this.props.selectOnBlur || !1
					})
				}
				render() {
					return s.a.createElement(l, {
						onFocus: this.props.onFocus,
						onSelect: this.props.onSelect,
						renderPicker: this.renderPicker,
						value: this.props.value
					})
				}
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, n) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/TextButton/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("button", {
				children: e.children,
				className: Object(r.a)(a.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				is2020: "_2zIsUnTMNBBTNB6vw68Wdy",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				l = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(l);
			t.a = s.a.memo(e => {
				const t = Object(a.a)(),
					n = e.size || i.c.XS;
				return s.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[n], {
						[c.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[c.a.mDisabled]: e.disabled,
						[c.a.is2020]: t
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle()
				}, s.a.createElement("div", {
					className: Object(r.a)(c.a.toggleDisplay, t ? c.a.is2020 : "")
				}))
			})
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
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return l
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Typography/index.m.less"),
				r = n.n(s);
			o.a.h1("heading1", r.a), o.a.h2("heading2", r.a), o.a.h3("heading3", r.a), o.a.h4("heading4", r.a);
			const i = o.a.h5("heading5", r.a),
				a = (o.a.h6("heading6", r.a), o.a.p("body1", r.a), o.a.p("body2", r.a)),
				l = (o.a.p("actionFont", r.a), o.a.p("metadata", r.a));
			o.a.p("metadata3", r.a)
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(r);
			t.a = o.a.wrapped(s.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "b", (function() {
				return y
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				d = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const m = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/save`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/unsave`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/lock`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/unlock`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/approve`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t, n) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/remove`),
					method: s.cb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				_ = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t, n, i) => {
					let a = Object(u.a)(Object(d.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`));
					return i && (a = Object(c.a)(a)), Object(r.a)(e, {
						data: n,
						endpoint: a,
						method: s.cb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				y = (e, t, n, o) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(l.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: s.cb.POST,
					data: {
						id: t,
						sticky: o
					}
				})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "k", (function() {
				return c
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "m", (function() {
				return g
			}));
			var o, s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
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

			function a(e) {
				switch (e) {
					case o.Ethereum:
					case o.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case o.Rinkeby:
					case o.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function l(e) {
				switch (e) {
					case o.Ethereum:
					case o.EthTraderEthereum:
						return "homestead";
					case o.Rinkeby:
					case o.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function c(e, t, n) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function d(e, t, n) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function u(e, t, n) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(o || (o = {}));
			const m = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				b = e => ({
					type: "subscribe",
					subredditId: e
				}),
				f = (e, t, n, o) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: o
				});
			async function g(e, t) {
				return await Object(r.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.cb.GET
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

			function a(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${o.a.metaUrl}/wallets/${t.subredditId}`,
					method: s.cb.POST,
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
				i = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const c = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === l.h.MARKDOWN ? c.richtext_json = n : c.markdown_text = n, Object(s.a)(Object(r.a)(e, [i.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: o.cb.POST,
					data: c
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
				return y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/graphql/operations/CreateScheduledPost.json"),
				s = n("./src/graphql/operations/SubredditScheduledPosts.json"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/helpers/richTextJson/index.ts"),
				l = n("./src/reddit/models/Post/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/models/ScheduledPost/index.ts");
			const u = (e, t) => Object(r.a)(e, {
					...s,
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
				p = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => m(e, d.f.standalonePosts))(e)) && !(t.includeRecurring && !(e => m(e, d.f.recurringPosts))(e))),
				h = ({
					poll: e,
					schedule: t,
					submission: n,
					subredditId: o
				}) => ({
					collectionId: n.collectionId || "",
					discussionType: n.isChatPost ? l.b.Chat : l.b.Comment,
					isContestMode: n.isContestMode,
					isPostAsMetaMod: n.isPostAsMetaMod,
					isSpoiler: n.isSpoiler,
					isNsfw: n.isNSFW,
					poll: e && v(e),
					title: n.title,
					isOriginalContent: n.isOC,
					flair: n.flair ? {
						id: n.flair.templateId,
						text: Object(i.g)(n.flair)
					} : {},
					sticky: n.sticky,
					subredditId: o,
					suggestedCommentSort: n.suggestedSort,
					isSendReplies: n.sendReplies,
					...b(t),
					...x(n),
					assetIds: C(n)
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
				_ = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				x = e => {
					switch (e.kind) {
						case c.o.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case c.o.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case c.o.LINK:
							return {
								content: {}, link: {
									url: _(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				C = e => {
					let t = [];
					if (e.document) {
						const n = e.document || [];
						t = Object(a.c)(n)
					}
					return t
				},
				v = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				y = (e, t) => Object(r.a)(e, {
					...o,
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
			var o = n("./src/graphql/operations/UpdateScheduledPost.json"),
				s = n("./src/lib/makeGqlRequest/index.ts");
			const r = (e, t) => Object(s.a)(e, {
				...o,
				variables: {
					input: t
				}
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function l(e, t, n) {
				const o = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(o)(e => {
					const {
						featureEnabled: o,
						...r
					} = e, i = r;
					return o ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function o(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function s(e) {
				const {
					subreddit: t,
					amount: n,
					memo: o,
					cta: s
				} = e;
				if (!(t && n && o && s)) throw new Error("subreddit, amount, and memo query params required for vault action");
				return {
					subreddit: t,
					amount: n,
					memo: o,
					cta: s
				}
			}
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-dnd/lib/index.js"),
				s = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				r = n.n(s);
			t.a = Object(o.DragDropContext)(r.a)
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
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const n = new o.BigNumber(e),
					s = new o.BigNumber(t);
				return n.dividedToIntegerBy(s).toString()
			}

			function i(e, t) {
				return Object(s.b)(parseInt(r(e, t), 10))
			}

			function a(e, t) {
				const n = new o.BigNumber(e),
					s = new o.BigNumber(t);
				return n.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
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
				i = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				a = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				l = e => i(e) && a(e),
				c = e => !i(e) && a(e),
				d = e => i(e) && !a(e),
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
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(s);
			const i = ({
					isLoading: e
				}) => Object(o.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				a = e => Object(o.a)(r.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/polished/dist/polished.es.js");
			var o = n("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function s(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(o.a)(e).post
			}
		},
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const r = e => Object(o.b)(e) < .6;

			function i(e, t = s.a.bodyText, n = s.b.bodyText) {
				return r(e) ? n : t
			}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return l
			}));
			var o = n("./src/reddit/constants/elementIds.ts");
			let s;
			const r = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(o.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				i = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, s || (s = a(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${s}px`;
					const t = document.getElementById(o.c);
					t && (t.style.marginRight = `${s}px`)
				},
				a = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				l = e => {
					if (!e || !document.body) return 0;
					const t = a(document.body),
						n = e.offsetWidth - e.scrollWidth;
					return t || n
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			}));
			var o = n("./src/telemetry/index.ts"),
				s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/telemetry.ts");
			const c = e => {
					const t = Object(a.m)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(l.defaults)(e),
						screen: Object(l.screen)(e),
						subreddit: Object(l.subreddit)(e),
						post: t ? Object(l.post)(e, t) : null,
						profile: Object(l.profile)(e)
					}
				},
				d = (e, t, n, s) => {
					const r = {
							commentId: s,
							commentsPageKey: n
						},
						a = s && Object(i.j)(e, r) || 0;
					return Object(o.a)({
						noun: "comment",
						...c(e),
						comment: s ? Object(l.comment)(e, s) : null,
						listing: Object(l.listing)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						}
					})
				},
				u = (e, t, n, s) => {
					const r = c(e);
					return Object(o.a)({
						...r,
						actionInfo: {
							...r.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: s,
							postId: n
						}
					})
				},
				m = e => Object(o.a)({
					noun: "cancel",
					...c(e)
				}),
				p = (e, t) => {
					t === r.c.replyToPost && Object(o.a)({
						noun: "input",
						...c(e)
					})
				},
				h = (e, t) => Object(o.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(l.defaults)(t),
					screen: Object(l.screen)(t),
					subreddit: Object(l.subreddit)(t),
					post: Object(l.post)(t, e)
				}),
				b = e => Object(o.a)({
					noun: "edit",
					...c(e)
				}),
				f = e => Object(o.a)({
					noun: "save_edit",
					...c(e)
				})
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return c
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
				return _
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "q", (function() {
				return y
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "d", (function() {
				return w
			}));
			var o, s, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/trackers/postEvent.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(o || (o = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(s || (s = {}));
			const c = e => t => ({
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
					source: i.a.postEvent,
					noun: t ? s.unfollow : s.follow,
					...m(n, e)
				}),
				m = (e, t) => {
					const n = {
						...l.defaults(e),
						action: r.c.CLICK,
						subreddit: l.subreddit(e)
					};
					return void 0 === t ? n : {
						...n,
						post: l.post(e, t),
						postCollection: l.postCollectionI13nSelector(e, {
							postId: t
						}),
						postEvent: l.postEventI13nSelector(e, {
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
					...l.defaults(e),
					subreddit: l.subreddit(e),
					source: o.postComposer
				}),
				_ = (e, t) => n => ({
					...m(n, e),
					source: t || o.postOverflowMenu,
					noun: s.collectionAddPost
				}),
				x = e => t => ({
					...m(t, e),
					source: o.collectionComposer,
					noun: s.collectionRemovePost
				}),
				C = () => e => ({
					...m(e),
					source: o.collectionComposer,
					noun: s.collectionCancel
				}),
				v = () => e => {
					const t = Object(a.m)(e) || void 0;
					return {
						...m(e, t),
						source: o.collectionComposer,
						noun: s.collectionCreate
					}
				},
				y = () => e => ({
					...m(e),
					source: o.collectionComposer,
					noun: s.collectionSelect
				}),
				E = e => t => ({
					...l.defaults(t),
					subreddit: l.subreddit(t),
					source: o.collectionComposer,
					action: r.c.CLICK,
					noun: s.collectionDelete,
					postCollection: l.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				O = e => t => ({
					...m(t),
					source: o.collectionComposer,
					noun: s.collectionEdit,
					postCollection: l.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				k = e => t => ({
					...m(t, e),
					source: o.collectionComposer,
					noun: s.startEvent
				}),
				w = () => e => {
					const t = Object(a.m)(e) || void 0;
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
				return _
			})), n.d(t, "d", (function() {
				return x
			}));
			var o, s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/timezone/index.ts"),
				a = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/models/PostCreationForm/index.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(o || (o = {}));
			const p = e => u.actionInfo(e, {
					pageType: "event_submit"
				}),
				h = e => {
					Object(m.a)({
						...u.defaults(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: u.subreddit(e)
					})
				},
				b = e => {
					Object(m.a)({
						...u.defaults(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: u.subreddit(e),
						postEvent: C(e),
						postComposer: v(e)
					})
				},
				f = () => e => ({
					source: o.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: p(e),
					postEvent: C(e)
				}),
				g = e => t => ({
					...O(t, Object(c.m)(t)),
					source: o.postComposer,
					noun: "apply",
					postComposer: y(e)
				}),
				_ = () => e => ({
					...O(e, Object(c.m)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				x = e => t => ({
					...O(t, Object(c.m)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: v(t),
					postEvent: E(e)
				}),
				C = e => {
					const t = Object(d.p)(e);
					return t && E(t)
				},
				v = e => y(Object(d.p)(e)),
				y = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === l.i.AtEventTime ? Object(i.f)(e.startDate).getTime() / s.Hb : void 0
					}
				},
				E = e => {
					const t = Object(i.f)(e.startDate).getTime() / s.Hb,
						n = Object(i.f)(e.endDate).getTime() / s.Hb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: n,
						eventState: Object(r.e)(t, n)
					}
				},
				O = (e, t) => {
					const n = {
						source: o.eventComposer,
						action: a.c.CLICK,
						subreddit: u.subreddit(e)
					};
					return t ? {
						...n,
						post: u.post(e, t),
						postEvent: u.postEventI13nSelector(e, {
							postId: t
						}),
						postCollection: u.postCollectionI13nSelector(e, {
							postId: t
						})
					} : n
				}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					...Object(o.defaults)(e),
					source: "poll",
					action: "select",
					noun: "poll_option"
				}),
				r = e => ({
					...Object(o.defaults)(e),
					source: "poll",
					action: "select",
					noun: "prediction_option"
				}),
				i = e => ({
					...Object(o.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_info_modal"
				}),
				a = e => ({
					...Object(o.defaults)(e),
					source: "poll",
					action: "close",
					noun: "predict_info_modal"
				}),
				l = e => ({
					...Object(o.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_option_modal"
				}),
				c = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => s => ({
					...Object(o.defaults)(s),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(o.poll)(s, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				d = e => ({
					...Object(o.defaults)(e),
					source: "poll",
					action: "click",
					noun: "add_coins"
				}),
				u = e => t => ({
					...Object(o.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				m = ({
					targetUserId: e
				}) => t => ({
					...Object(o.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
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
					...o.defaults(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: o.subreddit(t)
				}),
				r = e => t => ({
					...o.defaults(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: o.subreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "y", (function() {
				return l
			})), n.d(t, "m", (function() {
				return c
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
				return _
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "t", (function() {
				return O
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "u", (function() {
				return P
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "w", (function() {
				return M
			}));
			var o = n("./src/reddit/models/ScheduledPost/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...s.defaults(e),
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(o.p)(e)
				}),
				a = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...r(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...r(e)
				}),
				c = () => e => ({
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
					scheduledPost: i(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: i(e)
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
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				x = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				C = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: s.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				v = {
					[o.d.Hourly]: "hourly_frequency",
					[o.d.Daily]: "daily_frequency",
					[o.d.Weekly]: "weekly_frequency",
					[o.d.Monthly]: "monthly_frequency",
					[o.b]: "custom_frequency"
				},
				y = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : v[e],
					...r(t)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				O = (e, t, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(o.l)(e),
					...r(i),
					actionInfo: s.actionInfo(i, {
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
				w = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				j = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				P = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: i(t)
				}),
				S = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: i(t)
				}),
				I = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				M = () => (e, t) => {
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
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return l
			}));
			var o, s, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more"
			}(o || (o = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post"
			}(s || (s = {}));
			const a = (e, t) => n => ({
					source: s.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: o.SEE_MORE,
					widget: Object(i.widget)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...i.defaults
				}),
				l = (e, t) => n => ({
					source: s.POST,
					action: r.c.CLICK,
					noun: o.REREDDIT_PROMO,
					post: i.post(n, e),
					subreddit: i.subreddit(n),
					...t && {
						banner: {
							buttonText: t,
							id: o.REREDDIT_PROMO
						}
					},
					...i.defaults(n)
				})
		},
		"./src/reddit/hooks/useCoreStyleExperiments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/react/index.js"),
				s = n("./src/reddit/contexts/CoreStyleExperiments.ts");
			const r = () => Object(o.useContext)(s.b)[s.a.Icons],
				i = () => Object(o.useContext)(s.b)[s.a.Buttons]
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n("./src/reddit/helpers/localStorage/index.ts");

			function r(e, t) {
				let n;
				n = Object(s.q)(e);
				const [r, i] = Object(o.useState)(null != n ? n : t);
				return [r, function(t) {
					Object(s.hb)(e, t), i(t)
				}]
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = o.b
		},
		"./src/reddit/icons/fonts/AddCollection/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => {
				const t = Object(i.b)();
				return s.a.createElement("i", {
					className: Object(r.a)(Object(a.b)(t ? "collection" : "addCollection", e.isFilled), e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), l.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				l = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(l);
			t.a = e => {
				const t = Object(i.b)();
				return s.a.createElement("i", {
					className: Object(r.a)(Object(a.b)(t ? "scheduled" : "calendar", e.isFilled), c.a.calendarIcon, e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/Create/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("create", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				l = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.b)();
				return s.a.createElement("i", {
					className: `${Object(i.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", l.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less": function(e, t, n) {
			e.exports = {
				TextMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he",
				textMediaIcon: "_1YuQjV5ZXNDhhSOkCnE9he"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.m.less"),
				l = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.b)();
				return s.a.createElement("i", {
					className: `${Object(i.b)(t?"video_post":"expandoMediaVideo",e.isFilled)} ${e.className}`
				})
			}, "TextMediaIcon", l.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, n) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Info/index.m.less"),
				a = n.n(i);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			}), "InfoIcon", a.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live", e.isFilled), l.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(i);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("plus", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), l.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), l.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), l.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				l = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(l);
			t.a = e => {
				const t = Object(i.b)();
				return s.a.createElement("i", {
					className: Object(r.a)(Object(a.b)(t ? "pin" : "sticky", e.isFilled), c.a.stickyIcon, e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, s.a.createElement(a.a, null, e.desc))
			}
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.m.less"),
				i = n.n(r);
			const a = {
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
			var l = n("./src/lib/lessComponent.tsx");
			const c = (e, t) => `icon icon-${e}${t&&!e.includes("fill")&&a[`${e}_fill`]?"_fill":""}`,
				d = l.a.wrapped(e => s.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", i.a)
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				isFilled: t,
				name: n,
				...o
			}) => s.a.createElement("i", a({
				className: Object(r.a)(e, Object(i.b)(n, t))
			}, o))
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
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, n) {
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
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, s.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"
			}))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, n) {
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
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), s.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...n
			}) => s.a.createElement("svg", l({
				className: Object(r.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1fQOXfyxB1SmgMOi7sihQV"
			}
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"
			}), s.a.createElement("path", {
				d: "M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"
			}), s.a.createElement("path", {
				d: "M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"
			}), s.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}))
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
				i = n("./src/reddit/icons/svgs/Grapple/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(e.className, a.a.grapple, {
					[a.a.mIsDragging]: e.isDragging
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
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, s.a.createElement("g", null, s.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), s.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
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
		"./src/reddit/icons/svgs/Media/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "m8.986223,16.927949l2.240493,-3.024991l-3.521864,-5.376734c-0.102125,-0.156 -0.274999,-0.251499 -0.461249,-0.253749c-0.158375,-0.01 -0.362749,0.0875 -0.468249,0.241249l-5.239359,7.532977c-0.12,0.170624 -0.1335,0.394124 -0.037,0.579248c0.0975,0.185249 0.287499,0.301999 0.497498,0.301999l6.989729,0zm8.513724,3.071991l-14.999954,0c-1.378746,0 -2.499992,-1.121247 -2.499992,-2.499992l0,-14.999954c0,-1.378746 1.121247,-2.499992 2.499992,-2.499992l14.999954,0c1.378746,0 2.499992,1.121247 2.499992,2.499992l0,14.999954c0,1.378746 -1.121247,2.499992 -2.499992,2.499992zm0.803498,-3.071991c0.221249,0 0.420999,-0.129125 0.511873,-0.331249c0.091,-0.201999 0.05375,-0.437749 -0.092,-0.602748l-4.238862,-4.778985c-0.11125,-0.12575 -0.257124,-0.186249 -0.444499,-0.188749c-0.169624,0.008 -0.325624,0.091 -0.425499,0.226874l-3.540739,4.778985c-0.126875,0.170749 -0.145,0.398749 -0.0495,0.587123c0.094375,0.189749 0.288749,0.308749 0.500748,0.308749l7.778726,0l-0.00025,0zm-2.982116,-11.404215c0,-1.173746 -0.952497,-2.124994 -2.124994,-2.124994c-1.174996,0 -2.124994,0.951247 -2.124994,2.124994c0,1.172496 0.949997,2.123744 2.124994,2.123744c1.172496,0 2.124994,-0.951247 2.124994,-2.123744z"
			}))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/constants/colors.ts");
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
				fill: e.isUnread ? r.b.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), s.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.m.less": function(e, t, n) {
			e.exports = {
				defaultInactiveState: "_1g3Xfh9mljLHWv24M9A3Rw",
				outline: "_3SlBAJb2MbUHwgBZFH8eL7"
			}
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.defaultInactiveState, e.className),
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				width: "12",
				height: "12"
			}, s.a.createElement("circle", {
				cx: "6",
				cy: "6",
				r: "4"
			}), s.a.createElement("path", {
				className: a.a.outline,
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
			}))
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
		"./src/reddit/icons/svgs/SnooSilhouette/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/icons/svgs/Text/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M15.6498441,5.62718315 L4.38195636,5.62718315 C4.0364078,5.62718315 3.75596259,5.34673795 3.75596259,5.00118939 C3.75596259,4.65564083 4.0364078,4.37519562 4.38195636,4.37519562 L15.6498441,4.37519562 C15.9953927,4.37519562 16.2758379,4.65564083 16.2758379,5.00118939 C16.2758379,5.34673795 15.9953927,5.62718315 15.6498441,5.62718315 M15.6498441,9.38314574 L4.38195636,9.38314574 C4.0364078,9.38314574 3.75596259,9.10270054 3.75596259,8.75715198 C3.75596259,8.41160342 4.0364078,8.13115821 4.38195636,8.13115821 L15.6498441,8.13115821 C15.9953927,8.13115821 16.2758379,8.41160342 16.2758379,8.75715198 C16.2758379,9.10270054 15.9953927,9.38314574 15.6498441,9.38314574 M13.1458691,13.1391083 L4.38195636,13.1391083 C4.0364078,13.1391083 3.75596259,12.8586631 3.75596259,12.5131146 C3.75596259,12.167566 4.0364078,11.8871208 4.38195636,11.8871208 L13.1458691,11.8871208 C13.4914176,11.8871208 13.7718628,12.167566 13.7718628,12.5131146 C13.7718628,12.8586631 13.4914176,13.1391083 13.1458691,13.1391083 M17.6104566,0.000751192518 L2.42134388,0.000751192518 C1.08547319,0.000751192518 0,1.08622438 0,2.42084309 L0,17.5811601 C0,18.4174878 0.423171785,19.1837041 1.13054474,19.6306637 C1.52116485,19.8748012 1.96061247,20 2.410076,20 C2.77440437,20 3.14624466,19.9173688 3.49805316,19.7470985 L7.81490616,17.5210647 L17.5278254,17.5210647 C18.8611921,17.5210647 20.0318005,16.3504563 20.0318005,15.0170896 L20.0318005,2.42084309 C20.0318005,1.08622438 18.9463273,0.000751192518 17.6104566,0.000751192518"
			})))
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
				i = n("./src/reddit/icons/svgs/TextPost/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = n.n(i);
			const l = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/constants/postLayout.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
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
			const h = Object(c.t)(),
				b = Object(i.c)({
					isEditing: d.i,
					layout: (e, t) => t.forcedLayout || Object(c.N)(e, t)
				}),
				f = Object(r.b)(b),
				g = ({
					disableFullscreen: e,
					dispatch: t,
					fitPageToContent: n,
					forcedLayout: o,
					isCollectionLayout: r,
					isEditing: i,
					layout: a,
					pageLayer: l,
					...c
				}) => s.a.createElement("div", c);
			t.a = h(f(({
				className: e,
				...t
			}) => s.a.createElement(g, p({
				className: Object(a.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: t.layout === l.g.Large,
					[m.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[m.a.mClassicWidth]: t.isCollectionLayout,
					[m.a.mIsEditing]: !!t.isEditing,
					[m.a.mCanFlexFullWidth]: !t.fitPageToContent
				})
			}, t))))
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
				return k
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
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
			var f = Object(h.a)(b);
			var g = e => s.a.createElement(f, e),
				_ = n("./src/reddit/layout/page/Listing/index.m.less"),
				x = n.n(_);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(a.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: o,
						theme: r,
						...a
					} = e, l = Object(p.a)(e), c = {
						"--pseudo-before-background": t || Object(m.g)(l.canvas, l.canvasImgUrl, l.canvasImgPosition)
					};
					return s.a.createElement("div", C({
						className: Object(i.a)(x.a.backgroundContainer, n),
						style: c
					}, a))
				}),
				y = l.a.div("Body", x.a),
				E = l.a.div("Sidebar", x.a),
				O = e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null;

			function k(e) {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: `${c.q}px`,
						marginTop: t
					} : {
						marginLeft: `${c.q}px`,
						marginTop: t
					},
					o = e.sidebar && s.a.createElement(E, {
						className: e.isCollectionLayout ? x.a["m-collectionLayout"] : x.a.defaultLayout,
						style: n
					}, e.sidebar),
					a = s.a.createElement(r.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let l;
				l = e.sidebars ? s.a.createElement(s.a.Fragment, null, e.sidebars[0], a, e.sidebars[1]) : e.isPageSwapped ? s.a.createElement(s.a.Fragment, null, o, a) : s.a.createElement(s.a.Fragment, null, a, o);
				const m = e.disableFullscreen ? `${e.maxWidth||u.a+2*c.m}px` : "100%";
				return s.a.createElement(g, {
					subredditId: e.subredditId
				}, s.a.createElement("div", {
					className: Object(i.a)(x.a.outerContainer, d.i, e.className),
					ref: e.containerRef
				}, s.a.createElement(v, {
					className: d.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), s.a.createElement("div", {
					className: x.a.innerContainer
				}, s.a.createElement("div", {
					className: x.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, O(e), s.a.createElement("div", {
					style: {
						maxWidth: m
					}
				}, e.trendingUnit), s.a.createElement(y, {
					style: {
						maxWidth: m
					}
				}, l))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				r = n.n(s);
			t.a = o.a.div("inlineRow", r.a)
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				r = n.n(s);
			t.a = o.a.button("inlineButton", r.a)
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
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				l = n.n(a);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(i.a)(l.a.expandedCenterContainer, e.className)
			}, s.a.createElement("div", {
				className: l.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: l.a.center
			}, Array.isArray(e.children) && e.children[1]), s.a.createElement("div", {
				className: l.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				l = n.n(a);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(i.a)(l.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: l.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: l.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
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
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/pages/ErrorPages/index.m.less"),
				l = n.n(a);
			const c = ({
					message: e
				}) => r.a.createElement("div", {
					className: l.a.container
				}, r.a.createElement("h3", {
					className: l.a.title
				}, e || o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), r.a.createElement(i.k, {
					className: l.a.primaryRouterLink,
					to: "/"
				}, o.fbt._("Go Home", null, {
					hk: "3E9E1g"
				}))),
				d = ({
					message: e
				}) => r.a.createElement("div", {
					className: l.a.container
				}, r.a.createElement("h3", {
					className: l.a.title
				}, e || o.fbt._("Sorry, You do not have permission to view this page.", null, {
					hk: "4lRbHD"
				})), r.a.createElement(i.k, {
					className: l.a.primaryRouterLink,
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
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/postCreation/general.ts"),
				l = n("./src/reddit/components/JumpToContent/index.tsx"),
				c = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./node_modules/lodash/once.js"),
				u = n.n(d),
				m = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./src/lib/constants/index.ts"),
				h = n("./src/reddit/constants/keycodes.ts"),
				b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/models/PostCreationForm/index.ts"),
				g = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				_ = n("./src/reddit/pages/ErrorPages/index.tsx"),
				x = n("./src/reddit/components/CrosspostBox/index.tsx"),
				C = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				v = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				E = n("./src/reddit/helpers/trackers/postComposer.ts"),
				O = n("./src/reddit/selectors/activeModalId.ts"),
				k = n("./src/reddit/selectors/platform.ts"),
				w = n("./src/reddit/selectors/postCreations.ts"),
				j = n("./src/reddit/selectors/postDraft.ts"),
				P = n("./src/reddit/selectors/subreddit.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/actions/changeUsername.ts"),
				I = n("./src/reddit/actions/externalAccount.ts"),
				M = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				N = n("./src/lib/makeActionCreator/index.ts"),
				D = n("./src/telemetry/index.ts"),
				L = n("./src/reddit/actions/governance/index.ts"),
				R = n("./src/reddit/actions/pages/subreddit.ts"),
				F = n("./src/reddit/actions/postDraft.ts"),
				B = n("./src/reddit/actions/scheduledPosts/index.ts"),
				A = n("./src/reddit/actions/urlRequested.ts"),
				U = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				W = n("./src/config.ts"),
				H = n("./src/lib/convertToCamelCase/index.ts"),
				K = n("./src/lib/makeApiRequest/index.ts"),
				z = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				V = n("./src/lib/omitHeaders/index.ts"),
				q = n("./src/reddit/constants/headers.ts"),
				G = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				J = n("./src/reddit/helpers/flair.ts"),
				X = n("./src/reddit/helpers/name/index.ts"),
				Q = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				Z = n("./src/reddit/models/Poll/index.ts"),
				Y = n("./src/reddit/models/Post/index.ts"),
				$ = n("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function ee(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const te = e => {
					switch (e.kind) {
						case f.o.CROSSPOST:
							return f.o.CROSSPOST;
						case f.o.LINK:
							return f.o.LINK;
						case f.o.POLL:
							return f.o.POLL;
						case f.o.MEDIA:
							return e.makeGif ? f.o.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				ne = e => {
					switch (e.kind) {
						case f.o.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case f.o.MARKDOWN:
							return {
								text: e.markdown
							};
						case f.o.LINK:
						case f.o.MEDIA:
							return {
								url: e.url
							};
						case f.o.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case f.o.POLL:
							return e.poll.type === Z.a.Prediction ? {
								duration: 999999,
								end_timestamp: ee(e.poll.endDate),
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
				oe = e => {
					const t = Object(X.g)(e.destSubreddit.name);
					return {
						sr: t,
						api_type: "json",
						show_error_list: !0,
						draft_id: e.draftId || void 0,
						title: e.title,
						discussion_type: e.isChatPost ? Y.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== f.o.POLL ? {
							kind: te(e),
							original_content: e.isOC,
							...e.destSubreddit.isProfile ? {
								sr: `u_${t}`,
								submit_type: "profile"
							} : {
								sr: t,
								submit_type: "subreddit"
							}
						} : {},
						post_to_twitter: e.postToTwitter,
						sendreplies: e.sendReplies,
						...e.gRecaptchaResponse ? {
							"g-recaptcha-response": e.gRecaptchaResponse
						} : {},
						resubmit: e.resubmit,
						...ne(e),
						...e.kind === f.o.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === f.o.MEDIA && e.makeGif ? {
							make_gif: "on"
						} : {},
						...e.flair ? {
							flair_id: e.flair.templateId,
							flair_text: Object(J.g)(e.flair)
						} : {},
						...e.validate_on_submit ? {
							validate_on_submit: e.validate_on_submit
						} : {},
						...e.eventSchedule && {
							event_start: e.eventSchedule.startDate,
							event_end: e.eventSchedule.endDate,
							event_tz: e.eventSchedule.timezoneName,
							unlist: e.eventSchedule.submitTime === f.i.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				se = async (e, t) => {
					if (!e.ok) return Object(Q.b)(e);
					const n = e.body.json.data;
					let o = n.url;
					o || t.kind !== f.o.MEDIA || (o = await ((e, t) => new Promise(n => {
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
					const s = n.id || (e => {
							const t = /comments\/(\w+)\/.*$/.exec(e),
								n = t && t[1];
							return n ? `${p.zb.Post}_${n}` : ""
						})(o),
						r = Object(z.parse)(o).path,
						i = n.drafts_count;
					return {
						...e,
						body: {
							id: s,
							path: r,
							draftsCount: i
						}
					}
				};
			var re = (e, t) => Object(K.a)(Object(V.a)(e, [q.a]), {
				endpoint: Object($.a)(Object(G.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: p.cb.POST,
				data: oe(t)
			}).then(async e => await se(e, t));
			var ie = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				ae = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				le = n("./src/reddit/featureFlags/index.ts"),
				ce = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				de = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				ue = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				me = n("./src/reddit/models/User/index.ts"),
				pe = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				he = n("./src/reddit/models/ScheduledPost/index.ts"),
				be = n("./src/reddit/actions/postCreation/constants.ts");
			const fe = Object(N.a)(be.w),
				ge = Object(N.a)(be.L),
				_e = Object(N.a)(be.o),
				xe = Object(N.a)(be.y),
				Ce = Object(N.a)(be.X),
				ve = Object(N.a)(be.F),
				ye = Object(N.a)(be.a),
				Ee = Object(N.a)(be.B),
				Oe = e => `/r/${e}/about/${he.r}`,
				ke = (e, t) => {
					const n = e || {
							duration: p.x,
							options: []
						},
						{
							govType: o,
							newSubreddit: s,
							newTopMod: r
						} = Object(w.s)(t),
						i = {
							...n
						};
					return o && (i.type = o), i.type === Z.a.ReplaceTopMod ? (i.params = {
						userName: r
					}, i.options = Z.h[Z.a.ReplaceTopMod]()) : i.type === Z.a.Spinoff ? (i.params = {
						subreddit: s
					}, i.options = Z.h[Z.a.Spinoff](s)) : i.options = i.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), i
				},
				we = e => {
					const t = e.uploads,
						n = Object(w.P)(e),
						o = Object(w.a)(e),
						s = Object(w.Z)(e);
					if (o === p.Lb.POST) return U.a.getPendingThumbnailUploads(s, t);
					if (o === p.Lb.MEDIA && n && n.items.length) {
						const {
							video: e
						} = n.items[0];
						if (e && e.thumbnail && !t[f.m]) return [{
							...e.thumbnail,
							uploadKey: f.m
						}]
					}
				},
				je = e => async (t, n, {
					gqlContext: o
				}) => {
					const s = n(),
						r = Object(w.W)(s),
						i = Object(w.X)(s, e),
						a = Object(w.h)(s),
						l = Object(pe.r)(s);
					if (!(i && a.id && r && Object(de.f)(l))) return;
					const c = a.id,
						d = Object(pe.a)(s, {
							subredditId: c,
							scheduledPostId: l
						});
					if (d && Object(D.a)(Object(ue.r)(d)(s)), t(fe(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(w.u)(n()))) return;
					const {
						isPoll: u,
						polls: m
					} = Object(w.s)(s), p = ke(m, s), h = {
						...Object(ie.e)({
							poll: u ? p : void 0,
							submission: i,
							schedule: r,
							subredditId: a.id,
							scheduledPostId: l
						})
					}, b = await Object(ae.a)(o(), h);
					if (b.ok) return t(Object(B.e)({
						subredditId: a.id
					})), void t(Object(A.a)(Oe(a.name), !1));
					const f = b.error;
					t(_e(f))
				}, Pe = e => async (t, n, {
					gqlContext: o
				}) => {
					const s = n(),
						r = Object(w.W)(s),
						i = Object(w.X)(s, e),
						a = Object(w.h)(s),
						l = Object(pe.b)(s);
					if (!i || !a.id || !r) return;
					if (t(fe(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(w.u)(n()))) return;
					const {
						isPoll: c,
						polls: d
					} = Object(w.s)(s), u = ke(d, s), m = {
						duration: u.duration,
						options: u.options
					}, p = {
						...Object(ie.d)({
							poll: c ? m : void 0,
							submission: i,
							schedule: r,
							subredditId: a.id
						}),
						creationToken: l
					}, h = await Object(ie.a)(o(), p);
					if (h.ok) {
						t(Object(B.e)({
							subredditId: a.id
						}));
						const e = h.body.data.createScheduledPost.scheduledPost;
						return e && Object(D.a)(Object(ue.o)(Object(ce.d)(e))(s)), void t(Object(A.a)(Oe(a.name), !1))
					}
					const b = h.error;
					t(_e(b))
				}, Se = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n(),
						r = Object(w.X)(s, e),
						{
							isPoll: i,
							polls: l
						} = Object(w.s)(s),
						c = ke(l, s);
					if (!r) return;
					if (t(fe(r)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(w.u)(n()))) return;
					let d;
					const u = i && le.d.spPolls(s);
					if ((d = u ? await
							function(e, t, n) {
								const o = t.destSubreddit.id;
								return Object(K.a)(e, {
									method: p.cb.POST,
									endpoint: `${W.a.metaUrl}/polls/${o}`,
									type: "json",
									data: {
										poll: n,
										subredditId: o,
										...Object(H.a)(oe(t))
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
										o = await se(n, t);
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
							}(o(), r, c) : i ? await ((e, t) => Object(K.a)(Object(V.a)(e, [q.a]), {
								endpoint: Object($.a)(Object(G.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
								method: p.cb.POST,
								data: oe(t),
								type: "json"
							}).then(e => se(e, t)))(o(), {
								...r,
								kind: f.o.POLL,
								poll: c
							}) : r.kind === f.o.GALLERY ? await ((e, t) => Object(K.a)(Object(V.a)(e, [q.a]), {
								endpoint: Object($.a)(Object(G.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
								method: p.cb.POST,
								data: {
									...oe(t),
									items: t.galleryItems.map(e => ({
										caption: e.caption,
										outbound_url: e.url,
										media_id: e.assetId
									}))
								},
								type: "json"
							}).then(e => se(e, t)))(o(), r) : await re(o(), r)).ok) {
						const e = Object(S.i)(s),
							n = d.body;
						t(ge({
							draftId: r.draftId,
							response: n
						})), u && t(Object(L.c)({
							poll: n.poll
						}));
						const o = (n.path || `/user/${Object(me.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(R.subredditInvalidateListing)(r.destSubreddit.name)), t(Object(A.a)(o, !1))
					} else {
						if (i) {
							const e = d.error;
							t(xe(e))
						}
						const e = d.error;
						e.type === p.E.BAD_CAPTCHA_ERROR ? t(ye()) : e.type === p.E.VALIDATION_ERROR ? t(Ce(e)) : e.type === p.E.SUBMIT_VALIDATION_ERROR ? t(ve(e)) : t(_e(e))
					}
					const m = Object(a.m)(r.kind),
						h = d.ok && d.body && d.body.id && Object(Y.r)(d.body.id),
						b = n();
					E.r(b, m, h)
				};
			var Te = n("./src/reddit/actions/postCreation/subredditChange.ts"),
				Ie = n("./src/reddit/actions/upload.ts"),
				Me = n("./src/reddit/helpers/externalAccount/index.tsx"),
				Ne = n("./node_modules/history/esm/history.js"),
				De = n("./node_modules/react-router/esm/react-router.js"),
				Le = n("./src/lib/matchRoute/index.ts"),
				Re = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			const Fe = "DISCARD_POST_ON_NAVIGATION_MODAL_ID",
				Be = Object(i.c)({
					isEditingScheduledPost: e => !!Object(pe.r)(e),
					isScheduledPost: w.L
				});
			var Ae = Object(r.b)(Be)(e => {
					const {
						isEditingScheduledPost: t,
						isScheduledPost: n,
						onAbort: o,
						onDiscardConfirmed: r,
						onSaveDraft: i,
						submissionType: a
					} = e;
					return p.D.has(a) && !n ? s.a.createElement(Re.a, {
						bodyText: c.fbt._("Do you want to save a draft of your post?", null, {
							hk: "3EV54t"
						}),
						onClose: o,
						onPrimaryAction: i,
						onSecondaryAction: r,
						primaryButtonText: c.fbt._("Save Draft", null, {
							hk: "1VdofA"
						}),
						secondaryButtonText: c.fbt._("Discard Post", null, {
							hk: "1CBjtn"
						}),
						titleText: c.fbt._("Save draft", null, {
							hk: "44JnYT"
						})
					}) : s.a.createElement(Re.a, {
						bodyText: t ? c.fbt._("Returning to the previous page will discard your changes", null, {
							hk: "2LlXOp"
						}) : c.fbt._("Returning to the previous page will discard your post", null, {
							hk: "3fT0mW"
						}),
						onClose: o,
						onPrimaryAction: o,
						onSecondaryAction: r,
						primaryButtonText: c.fbt._("Edit Post", null, {
							hk: "3dI1el"
						}),
						secondaryButtonText: t ? c.fbt._("Discard Changes", null, {
							hk: "7JOA"
						}) : c.fbt._("Discard Post", null, {
							hk: "1CBjtn"
						}),
						titleText: t ? c.fbt._("Discard Changes", null, {
							hk: "2vyCBa"
						}) : c.fbt._("Discard Post", null, {
							hk: "2BlkSe"
						})
					})
				}),
				Ue = n("./src/reddit/routes/postCreation/index.ts");
			const We = e => (e.returnValue = "", ""),
				He = Object(i.c)({
					destSubreddit: w.h,
					hasError: w.t,
					havePostContent: w.y,
					isChanged: w.B,
					modalId: O.a,
					submitPostPending: w.hb
				}),
				Ke = Object(r.b)(He, e => ({
					onToggleDiscardModal: () => e(a.w(Fe))
				}), (e, t, n) => ({
					...e,
					...t,
					...n
				}));
			class ze extends s.a.Component {
				constructor() {
					super(...arguments), this.unblockNavigation = null, this.ensureBlocked = e => {
						e.isChanged && (e.havePostContent || e.destSubreddit.name) ? this.block(e) : this.unblock()
					}, this.block = e => {
						this.unblockNavigation || (window.addEventListener("beforeunload", We), this.unblockNavigation = e.history.block((e, t) => {
							if (!Object(Le.a)(Object(Ne.e)(e), [Ue.a])) return this.props.modalId !== Fe && this.props.onToggleDiscardModal(), "Are you sure you want to leave?"
						}))
					}, this.unblock = () => {
						this.unblockNavigation && (this.unblockNavigation(), this.unblockNavigation = null), window.removeEventListener("beforeunload", We)
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
			var Ve = Object(y.t)({
					draftId: y.u,
					pageLayer: e => e
				})(Ke(Object(De.i)(ze))),
				qe = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				Ge = n("./src/lib/classNames/index.ts"),
				Je = n("./src/lib/prettyPrintNumber/index.ts"),
				Xe = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx"),
				Qe = n("./src/reddit/components/Governance/Token/index.tsx"),
				Ze = n("./src/reddit/components/ScheduledPost/PostSchedulePickerModal/loader.tsx"),
				Ye = n("./src/reddit/controls/Button/index.tsx"),
				$e = n("./src/reddit/controls/ErrorText/index.tsx"),
				et = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				tt = n("./src/reddit/icons/svgs/Clock/index.tsx"),
				nt = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				ot = n("./src/reddit/layout/row/Inline/index.tsx"),
				st = n("./src/reddit/models/Media/index.ts"),
				rt = n("./src/reddit/models/Upload/index.ts"),
				it = n("./src/reddit/selectors/moderatorPermissions.ts"),
				at = n("./src/reddit/models/Duplicates/index.ts"),
				lt = n("./src/reddit/selectors/posts.ts");
			var ct = n("./src/reddit/components/PostCreationForm/Button/index.m.less"),
				dt = n.n(ct),
				ut = n("./src/lib/lessComponent.tsx");
			const mt = ut.a.wrapped(Ye.i, "PrimaryButton", dt.a),
				pt = ut.a.wrapped(Ye.l, "SecondaryButton", dt.a);
			var ht = n("./src/lib/timezone/index.ts"),
				bt = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				ft = n("./src/reddit/components/PostCreationForm/PostCreationFooter/ScheduledTimeInfo/index.m.less"),
				gt = n.n(ft);
			const {
				fbt: _t
			} = n("./node_modules/fbt/lib/FbtPublic.js"), xt = ut.a.div("Container", gt.a), Ct = Object(i.c)({
				eventSchedule: w.p,
				postSchedule: w.W
			});
			var vt = Object(r.b)(Ct)(e => {
					const {
						eventSchedule: t,
						postSchedule: n
					} = e;
					let o;
					if (t && t.submitTime !== f.i.Now) o = (e => {
						const t = Object(ht.f)(e.startDate);
						let n = `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric",year:"2-digit"})} ${t.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}).replace(" ","")}`;
						const o = Object(ht.d)(e.timezoneName, +t);
						return o && (n += ` ${o.abbreviation}`), s.a.createElement("span", null, _t._("Will automatically post at", null, {
							hk: "1ixr16"
						}), " ", s.a.createElement("time", {
							dateTime: e.startDate
						}, n))
					})(t);
					else {
						if (!n) return null;
						o = (e => {
							const t = Object(ht.f)(e.submitDate);
							let n = `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric"})} ${t.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}).replace(" ","")}`;
							const o = Object(ht.d)(e.timezoneName, +t);
							o && (n += ` ${o.abbreviation}`);
							const r = e.recurrenceInfo ? s.a.createElement("span", null, s.a.createElement(bt.a, {
								className: gt.a.replayIcon
							}), _t._("Recurring post template scheduled for", null, {
								hk: "2tTwIB"
							})) : _t._("Post scheduled for", null, {
								hk: "47yVoo"
							});
							return s.a.createElement("span", null, r, " ", s.a.createElement("time", {
								dateTime: e.submitDate
							}, n))
						})(n)
					}
					return s.a.createElement(xt, null, o)
				}),
				yt = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Et = n("./src/lib/linkMatchers/index.ts"),
				Ot = n("./src/reddit/contexts/PageLayer/selectors.ts");
			const kt = Object(N.a)(be.G),
				wt = Object(N.a)(be.H),
				jt = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						i = Object(Ot.r)(r, {
							pageLayer: t
						});
					if (!i) return;
					const a = Object(w.q)(r, {
						field: e
					});
					if (!a) return;
					const l = Object(w.f)(r),
						d = await ((e, t, n, o, s) => Object(K.a)(Object(V.a)(e, [q.a]), {
							endpoint: `${e.apiUrl}/api/validate_submission_field`,
							method: p.cb.POST,
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
						}).then(Q.b))(s(), i.name, e, l, a),
						u = d.error || function(e, t) {
							if (e === p.ob.LINK && !Object(Et.h)(Et.f, t.url || "")) return {
								fields: [{
									field: p.ob.LINK,
									msg: c.fbt._("Link doesn't look right", null, {
										hk: "11qrsa"
									})
								}],
								type: p.E.SUBMIT_VALIDATION_ERROR
							}
						}(e, a);
					u && u.fields && u.fields.length ? n(kt(u)) : n(wt(e)), d.error && n(ve(d.error))
				};
			var Pt = n("./src/reddit/components/Flair/index.tsx"),
				St = n("./src/reddit/controls/TextButton/index.tsx"),
				Tt = n("./src/reddit/controls/Typography/index.tsx"),
				It = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/OCDisclaimer/index.m.less"),
				Mt = n.n(It);
			const {
				fbt: Nt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Dt = ut.a.wrapped(St.a, "DontShowButton", Mt.a);
			var Lt, Rt = ut.a.wrapped(e => {
					const {
						className: t,
						onDoNotShowClick: n
					} = e;
					return s.a.createElement("div", {
						className: t
					}, s.a.createElement(Tt.a, null, Nt._("Use the OC tag if you want to take credit for your post as Original Content.", null, {
						hk: "2D3GYX"
					})), s.a.createElement(Tt.a, null, s.a.createElement(Dt, {
						onClick: n
					}, Nt._("Cool, whatever, don't show me this again.", null, {
						hk: "4nvsEF"
					}))))
				}, "Component", Mt.a),
				Ft = n("./src/reddit/components/PostCreationForm/DivButton/index.tsx"),
				Bt = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				At = n("./src/reddit/constants/colors.ts"),
				Ut = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			! function(e) {
				e.CHAT = "chat", e.FLAIR = "flair", e.GOVERNANCE = "gov", e.SPOILER = "spoiler", e.NSFW = "nsfw", e.ORIGINAL_CONTENT = "originalContent", e.SCHEDULE = "schedule"
			}(Lt || (Lt = {}));
			var Wt = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/PostModifierButton/index.m.less"),
				Ht = n.n(Wt);
			const Kt = ut.a.div("TintOverlay", Ht.a),
				zt = (e, t) => {
					switch (t) {
						case Lt.ORIGINAL_CONTENT:
							return {
								backgroundColor: At.b.orangered, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Lt.CHAT:
							return {
								backgroundColor: At.b.chat, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Lt.SPOILER:
							return {
								backgroundColor: At.b.spoiler, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Lt.NSFW:
							return {
								backgroundColor: At.b.nsfw, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Lt.FLAIR:
							return {
								backgroundColor: e.newCommunityTheme.flair, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Lt.SCHEDULE:
							return {
								backgroundColor: e.newCommunityTheme.active, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Lt.GOVERNANCE:
							return {
								backgroundColor: e.newCommunityTheme.line, textColor: e.newCommunityTheme.bodyText, iconColor: e.newCommunityTheme.bodyText
							};
						default:
							return {
								backgroundColor: "none", textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							}
					}
				},
				Vt = e => Object(yt.a)(t => {
					const {
						addModifierTooltip: n,
						children: o,
						className: r,
						disabled: i,
						disabledTooltip: a,
						Icon: l,
						id: c,
						onClick: d,
						removeModifierTooltip: u,
						style: m,
						text: p,
						theme: h,
						toggled: b
					} = t, f = Object(Ut.a)(), g = i && a ? a : b ? u : n, _ = {
						color: t.textColor || h && zt(h, e).textColor,
						fill: t.textColor || h && zt(h, e).iconColor,
						backgroundColor: t.backgroundColor || h && zt(h, e).backgroundColor,
						borderColor: "transparent"
					};
					return f ? s.a.createElement(Ye.q, {
						"aria-label": g,
						className: Object(Ge.a)(r, Ht.a.PostModifierButton, Ht.a.is2020),
						disabled: i,
						Icon: l,
						id: c,
						onClick: d,
						priority: Ye.b.Secondary,
						style: {
							...m,
							...b ? _ : {}
						},
						text: p
					}, s.a.createElement(Bt.a, {
						text: g,
						className: Ht.a.HoverTooltip,
						tooltipContentClass: t.shiftTooltipToRight ? Ht.a.mShiftTooltipToTheRight : void 0
					}), o) : s.a.createElement(Ft.a, {
						style: {
							...m,
							...b ? _ : {}
						},
						"aria-label": g,
						className: Object(Ge.a)(r, Ht.a.PostModifierButton, Ht.a.isLegacy),
						disabled: i,
						id: c,
						onClick: d
					}, s.a.createElement(Bt.a, {
						text: g,
						className: Ht.a.HoverTooltip,
						tooltipContentClass: t.shiftTooltipToRight ? Ht.a.mShiftTooltipToTheRight : void 0
					}), s.a.createElement(Kt, {
						className: Object(Ge.a)(Ht.a.TintOverlay, {
							[Ht.a.isDisabled]: i
						})
					}, l && s.a.createElement(l, null), p, o))
				});
			var qt = n("./src/reddit/constants/postCreation.ts"),
				Gt = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				Jt = n("./src/reddit/icons/fonts/Create/index.tsx"),
				Xt = n("./src/reddit/icons/fonts/Live/index.tsx"),
				Qt = n("./src/higherOrderComponents/asTooltip.tsx"),
				Zt = n("./src/reddit/components/PostCreationForm/EduTooltips/BaseEduTooltip/index.m.less"),
				Yt = n.n(Zt);
			const {
				fbt: $t
			} = n("./node_modules/fbt/lib/FbtPublic.js"), en = ut.a.div("Container", Yt.a), tn = ut.a.div("OuterContainer", Yt.a);
			class nn extends s.a.Component {
				constructor() {
					super(...arguments), this.tooltipRef = null, this.onGotItClick = e => {
						this.close(!0), e.stopPropagation()
					}, this.onKeyDown = e => {
						e.keyCode === h.a.Escape && this.close(!1)
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
					return s.a.createElement(tn, {
						className: e.className,
						innerRef: this.setTooltipRef,
						style: e.style
					}, s.a.createElement(en, {
						className: Yt.a.container
					}, s.a.createElement("img", {
						src: e.heroImagePath,
						className: Yt.a.hero
					}), s.a.createElement("div", {
						className: Yt.a.contentContainer
					}, s.a.createElement("div", {
						className: Yt.a.title
					}, e.title), s.a.createElement("div", {
						className: Yt.a.description
					}, e.description), s.a.createElement("div", {
						className: Yt.a.iconsExplanations
					}, e.iconsExplanations.map((e, t) => {
						const n = e.iconComponent;
						return s.a.createElement("div", {
							className: Yt.a.iconExplanation,
							key: t
						}, s.a.createElement(n, {
							className: Yt.a.icon
						}), e.text)
					})), s.a.createElement(Ye.i, {
						className: Yt.a.gotIt,
						onClick: this.onGotItClick
					}, $t._("Got it", null, {
						hk: "2RPumB"
					})))))
				}
			}
			var on = Object(Qt.a)(nn),
				sn = n("./node_modules/lodash/debounce.js"),
				rn = n.n(sn),
				an = n("./src/reddit/actions/modal.ts"),
				ln = n("./src/reddit/helpers/localStorage/index.ts"),
				cn = n("./src/reddit/helpers/trackers/postCollection.ts");
			const dn = [{
					id: qt.d,
					getShowTimesLeft: ln.z,
					setShowTimesLeft: ln.pb,
					tooltipShown: cn.n,
					tooltipDismissed: cn.m
				}, {
					id: qt.c,
					getShowTimesLeft: ln.y,
					setShowTimesLeft: ln.ob,
					tooltipShown: cn.f,
					tooltipDismissed: cn.e
				}],
				un = {};
			let mn;
			const pn = () => (void 0 === mn && (mn = dn.filter(e => e.getShowTimesLeft() > 0).map(e => e.id)), mn),
				hn = e => {
					const t = pn().indexOf(e);
					t > -1 && pn().splice(t, 1)
				},
				bn = e => async (t, n) => {
					const o = dn.find(t => t.id === e);
					o && (fn(o, !0), Object(D.a)(o.tooltipDismissed(n())))
				}, fn = (e, t) => {
					e.setShowTimesLeft(t ? 0 : e.getShowTimesLeft() - 1)
				}, gn = () => async (e, t) => {
					const n = Object(O.a)(t()),
						o = pn().find(e => !!un[e]);
					if (!o || o === n) return;
					const s = dn.find(e => e.id === o);
					s && (Object(D.a)(s.tooltipShown(t())), fn(s)), e(an.i(o))
				}, _n = rn()(e => e(), 100);

			function xn(e, t) {
				const n = Object(i.c)({
					isOpen: e => Object(O.a)(e) === t
				});
				class o extends s.a.Component {
					componentDidMount() {
						un[t] = !0, _n(this.props.onShowNextTooltip)
					}
					componentWillUnmount() {
						un[t] = !1, _n(this.props.onShowNextTooltip)
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
						hn(t), n && e(bn(t)), e(an.i(t)), e(gn())
					},
					onShowNextTooltip: () => e(gn())
				}))(o)
			}
			var Cn = n("./src/reddit/components/PostCreationForm/EduTooltips/EventButtonTooltip/index.m.less"),
				vn = n.n(Cn);
			var yn, En = xn(e => {
					const {
						onCloseTooltip: t
					} = e;
					return s.a.createElement(on, {
						className: vn.a.container,
						description: c.fbt._("Let your community know about discussion threads, AMA’s or even a game thread.", null, {
							hk: "4aMUL6"
						}),
						heroImagePath: `${W.a.assetPath}/img/events-tooltip-hero@2x.png`,
						iconsExplanations: [{
							iconComponent: Jt.a,
							text: c.fbt._("Compose a post like normal.", null, {
								hk: "so4h7"
							})
						}, {
							iconComponent: Gt.a,
							text: c.fbt._("Schedule when the event is happening.", null, {
								hk: "2EoghL"
							})
						}, {
							iconComponent: Xt.a,
							text: c.fbt._("Remind your community when its live.", null, {
								hk: "2W4fY"
							})
						}],
						isOpen: !0,
						isOverlayOff: !0,
						onClose: t,
						title: c.fbt._("Make an Event", null, {
							hk: "4Bz0L3"
						}),
						tooltipId: qt.a
					})
				}, qt.d),
				On = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx"),
				kn = n("./src/reddit/components/PostFlairPicker/index.tsx");
			! function(e) {
				e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
			}(yn || (yn = {}));
			var wn = n("./src/reddit/helpers/trackers/postEvent.ts"),
				jn = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				Pn = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				Sn = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Tn = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				In = n("./src/reddit/icons/svgs/Tag/index.tsx"),
				Mn = n("./src/reddit/models/Subreddit/index.ts"),
				Nn = n("./src/reddit/selectors/chatPost.ts");
			const Dn = e => e.creations.formState.fieldValidation;
			var Ln = n("./src/telemetry/models/PostComposer.ts"),
				Rn = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/index.m.less"),
				Fn = n.n(Rn);
			const Bn = "PostFlair--Modal--CreationForm",
				An = e => {
					let t = Object(ht.f)(e.startDate).toLocaleDateString(void 0, {
						month: "numeric",
						day: "numeric",
						hour: "numeric",
						minute: "numeric"
					});
					return t = t.replace(" ", "").replace(",", " ")
				},
				Un = ut.a.wrapped(Sn.b, "StyledCaretIcon", Fn.a),
				Wn = ut.a.wrapped(Gt.a, "CalendarIcon", Fn.a),
				Hn = ut.a.wrapped(nt.a, "PencilIcon", Fn.a),
				Kn = ut.a.wrapped(jn.a, "ChatIcon", Fn.a),
				zn = ut.a.wrapped(Pn.a, "CheckmarkIcon", Fn.a),
				Vn = ut.a.wrapped(Tn.a, "PlusIcon", Fn.a),
				qn = ut.a.wrapped(Pt.b, "FlairComponent", Fn.a),
				Gn = ut.a.wrapped(In.a, "FlairIcon", Fn.a),
				Jn = ut.a.div("FlairTextWrapper", Fn.a),
				Xn = ut.a.wrapped(ot.a, "ModifierRow", Fn.a),
				Qn = Vt(Lt.ORIGINAL_CONTENT),
				Zn = Vt(Lt.CHAT),
				Yn = Vt(Lt.SPOILER),
				$n = Vt(Lt.NSFW),
				eo = Vt(Lt.FLAIR),
				to = Vt(Lt.SCHEDULE),
				no = Object(y.t)({
					draftId: y.u,
					pageLayer: e => e
				}),
				oo = Object(i.c)({
					activeModalId: O.a,
					canAddPostFlair: w.c,
					canPostAsModerator: w.e,
					currentSubredditId: y.m,
					destSubreddit: w.h,
					destSubredditAboutInfo: w.g,
					eventSchedule: w.p,
					isChatPostAvailable: Nn.a,
					isChatPostSelected: w.C,
					isNsfw: w.H,
					isSpoiler: w.M,
					isOriginalContent: w.I,
					flair: w.r,
					postCreationFieldErrors: Dn,
					postSchedule: w.W,
					submissionType: w.a
				}),
				so = Object(r.b)(oo, (e, {
					onPostFieldValidation: t,
					pageLayer: n
				}) => ({
					doNotShowOriginalContentDisclaimerClicked: () => e((e, t) => E.d(t())),
					onEventScheduleChange: t => {
						e(a.a(t))
					},
					postFlairAdded: o => {
						e(a.b(o)), t(e(jt(p.ob.FLAIR, n)))
					},
					toggleSchedulePicker: (t, n) => {
						e(a.w(f.f)), t && e((e, t) => {
							(n ? wn.g : wn.f)(t())
						})
					},
					toggleChatPostTag: t => {
						e(a.r(!t)), e((e, n) => E.y(n(), !t, Ln.ToggleNoun.CHAT))
					},
					toggleFlairPicker: () => e(a.w(Bn)),
					toggleNsfwTag: t => {
						e(a.s(!t)), e((e, n) => E.y(n(), !t, Ln.ToggleNoun.NSFW))
					},
					toggleOriginalContentTag: t => {
						e(a.t(!t)), e((e, n) => E.y(n(), !t, Ln.ToggleNoun.ORIGINAL_CONTENT))
					},
					toggleSpoilerTag: t => {
						e(a.v(!t)), e((e, n) => E.y(n(), !t, Ln.ToggleNoun.SPOILER))
					}
				}));
			class ro extends s.a.Component {
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
						e(), Object(ln.Y)(yn.ORIGINAL_CONTENT_DISCLAIMER, !0), this.setState({
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
						const e = this.props.activeModalId !== f.f,
							t = !!this.props.eventSchedule;
						this.props.toggleSchedulePicker(e, t)
					}
				}
				componentDidMount() {
					this.setState({
						showOCDisclaimer: !Object(ln.h)(yn.ORIGINAL_CONTENT_DISCLAIMER)
					})
				}
				render() {
					const {
						activeModalId: e,
						canAddPostFlair: t,
						canPostAsModerator: n,
						className: o,
						currentSubredditId: r,
						destSubreddit: i,
						destSubredditAboutInfo: a,
						eventSchedule: l,
						disabled: d,
						flair: u,
						isChatPostAvailable: m,
						isChatPostSelected: h,
						isNsfw: b,
						isSpoiler: g,
						isOriginalContent: _,
						postCreationFieldErrors: x,
						postSchedule: C,
						submissionType: v,
						theme: y,
						toggleFlairPicker: E
					} = this.props, {
						showOCDisclaimer: O
					} = this.state, k = !!u, {
						backgroundColor: w = null,
						textColor: j = null
					} = u || {}, {
						allOriginalContent: P = !1,
						eventPostsEnabled: S = !1
					} = a || {}, T = i.isProfile || Object(Mn.f)(a), I = d || !T || P || v === p.Lb.CROSSPOST, M = d, N = d || !!C;
					return s.a.createElement("div", {
						className: o
					}, s.a.createElement(Xn, null, m && s.a.createElement(Zn, {
						disabled: M,
						onClick: this.handleChatPostClick,
						toggled: h,
						addModifierTooltip: c.fbt._("Use live chat instead of comments", null, {
							hk: "27t9lW"
						}),
						removeModifierTooltip: c.fbt._("Use comments instead of live chat", null, {
							hk: "3seokS"
						}),
						Icon: h ? zn : Kn,
						text: c.fbt._("Live Chat", null, {
							hk: "cZlvm"
						})
					}), n && S && s.a.createElement(to, {
						disabled: N,
						id: qt.a,
						onClick: this.handleToggleSchedulePicker,
						shiftTooltipToRight: !0,
						toggled: !!l,
						addModifierTooltip: c.fbt._("Add time and date info", null, {
							hk: "L2KN8"
						}),
						removeModifierTooltip: c.fbt._("Edit event data", null, {
							hk: "1FSblM"
						}),
						Icon: Wn,
						text: l ? An(l) : c.fbt._("Event", null, {
							hk: "40pq7b"
						})
					}, s.a.createElement(En, null), l && s.a.createElement(Hn, null)), e === f.f && s.a.createElement(On.default, {
						schedule: this.props.eventSchedule,
						onClose: this.handleToggleSchedulePicker,
						onChange: this.props.onEventScheduleChange,
						shouldShowSubmitTime: !0,
						shouldShowDeleteButton: !0
					}), s.a.createElement(Qn, {
						disabled: I,
						onClick: this.handleOriginalContentClick,
						shiftTooltipToRight: !0,
						toggled: T && (_ || P),
						addModifierTooltip: c.fbt._("Mark this post as Original Content [OC]", null, {
							hk: "3V5aHC"
						}),
						removeModifierTooltip: c.fbt._("Unmark this post as Original Content [OC]", null, {
							hk: "2oj9GI"
						}),
						disabledTooltip: T ? "" : c.fbt._("This community does not allow original content tag", null, {
							hk: "gBN3o"
						}),
						Icon: _ ? zn : Vn,
						text: c.fbt._("OC", null, {
							hk: "2GRpRs"
						})
					}), s.a.createElement(Yn, {
						disabled: d,
						onClick: this.handleSpoilerClick,
						toggled: g,
						addModifierTooltip: c.fbt._("Mark as a spoiler", null, {
							hk: "3ICynB"
						}),
						removeModifierTooltip: c.fbt._("Unmark as a spoiler", null, {
							hk: "34pmqg"
						}),
						Icon: g ? zn : Vn,
						text: c.fbt._("Spoiler", null, {
							hk: "1K7ROJ"
						})
					}), s.a.createElement($n, {
						disabled: d,
						onClick: this.handleNsfwClick,
						toggled: b,
						addModifierTooltip: c.fbt._("Mark as Not Safe For Work", null, {
							hk: "1LNeZB"
						}),
						removeModifierTooltip: c.fbt._("Unmark Not Safe For Work", null, {
							hk: "1EcrjD"
						}),
						Icon: b ? zn : Vn,
						text: c.fbt._("NSFW", null, {
							hk: "3Tg62D"
						})
					}), s.a.createElement(eo, {
						className: Object(Ge.a)(Fn.a.AddFlair, {
							[Fn.a.isToggled]: k,
							[Fn.a.mHasError]: x[p.ob.FLAIR].length > 0
						}),
						disabled: !t || d,
						disabledTooltip: i.id ? c.fbt._("Not available for this community", null, {
							hk: "2gkbLI"
						}) : c.fbt._("Select a subreddit to enable flair", null, {
							hk: "1LNvTq"
						}),
						onClick: E,
						toggled: k,
						addModifierTooltip: c.fbt._("Add flair", null, {
							hk: "1RHLMM"
						}),
						removeModifierTooltip: c.fbt._("Change or remove flair", null, {
							hk: "34t9cQ"
						}),
						backgroundColor: w,
						textColor: j,
						Icon: Gn,
						style: {
							"--flairColor": k ? Object(Pt.c)({
								...this.props,
								backgroundColor: w,
								textColor: j
							}) : !t || d ? y.newCommunityTheme.actionIconTinted80 : y.newCommunityTheme.actionIcon
						},
						text: s.a.createElement(s.a.Fragment, null, u ? s.a.createElement(qn, {
							flair: u,
							forceSmallEmojis: !0
						}) : s.a.createElement(Jn, null, c.fbt._("Flair", null, {
							hk: "4Dtvp0"
						})), s.a.createElement(Un, {
							className: Fn.a.CaretIcon
						}))
					}), e === Bn && s.a.createElement(kn.a, {
						flairs: u ? [u] : [],
						modalId: Bn,
						onFlairChanged: this.handlePostFlairSelected,
						subredditId: r || ""
					})), s.a.createElement($e.a, {
						className: Fn.a.errorMessages,
						messages: x[p.ob.FLAIR]
					}), T && _ && O && s.a.createElement(Rt, {
						onDoNotShowClick: this.handleOCDisclaimerDoNotShowClick
					}))
				}
			}
			var io = no(Object(yt.a)(so(ro))),
				ao = n("./src/reddit/icons/fonts/AddCollection/index.tsx"),
				lo = n("./src/reddit/icons/fonts/Plus/index.tsx"),
				co = n("./src/reddit/components/PostCreationForm/EduTooltips/CollectionButtonTooltip/index.m.less"),
				uo = n.n(co);
			var mo = xn(e => s.a.createElement(on, {
					className: uo.a.container,
					description: c.fbt._("Create a series of scheduled events or just group random things. Make something awesome.", null, {
						hk: "40PwoH"
					}),
					heroImagePath: `${W.a.assetPath}/img/collection-tooltip-hero@2x.png`,
					iconsExplanations: [{
						iconComponent: Jt.a,
						text: c.fbt._("Compose a post like normal.", null, {
							hk: "466GER"
						})
					}, {
						iconComponent: ao.a,
						text: c.fbt._("Create & name your collection.", null, {
							hk: "3BuZKz"
						})
					}, {
						iconComponent: lo.a,
						text: c.fbt._("Add more posts to your collection.", null, {
							hk: "2wzlHs"
						})
					}],
					isOpen: !0,
					isOverlayOff: !0,
					onClose: e.onCloseTooltip,
					title: c.fbt._("Create Collections!", null, {
						hk: "3tSmbj"
					}),
					tooltipId: qt.g
				}), qt.c),
				po = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ho = n("./src/reddit/components/PostCreationForm/ControlRow/ToggleDestCollectionButton/index.m.less"),
				bo = n.n(ho);
			const fo = ut.a.wrapped(Ft.a, "DivButton", bo.a);
			var go = s.a.memo(e => {
					const {
						disabled: t,
						isToggled: n
					} = e, o = n ? po.b : ao.a;
					return Object(Ut.a)() ? s.a.createElement(Ye.q, {
						className: bo.a.button2020,
						priority: Ye.b.Plain,
						disabled: t,
						id: qt.g,
						onClick: e.onClick,
						Icon: o
					}, s.a.createElement(Bt.a, {
						text: n ? c.fbt._("Cancel adding to collection", null, {
							hk: "359w09"
						}) : c.fbt._("Add to collection", null, {
							hk: "48nVCZ"
						})
					}), !n && s.a.createElement(mo, null)) : s.a.createElement(s.a.Fragment, null, s.a.createElement(fo, {
						className: Object(Ge.a)(bo.a.button, t ? bo.a.disabled : null),
						disabled: t,
						id: qt.g,
						onClick: e.onClick
					}, s.a.createElement(o, {
						className: bo.a.icon
					}), s.a.createElement(Bt.a, {
						text: n ? c.fbt._("Cancel adding to collection", null, {
							hk: "359w09"
						}) : c.fbt._("Add to collection", null, {
							hk: "48nVCZ"
						})
					})), !n && s.a.createElement(mo, null))
				}),
				_o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				xo = n("./src/reddit/components/PostCreationForm/ControlRow/index.m.less"),
				Co = n.n(xo);
			const vo = () => c.fbt._("Post", null, {
					hk: "47QFCY"
				}),
				yo = () => c.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}),
				Eo = () => c.fbt._("Saved!", null, {
					hk: "34qXtS"
				}),
				Oo = () => c.fbt._("Save Draft", null, {
					hk: "3wckxd"
				}),
				ko = () => c.fbt._("Updated!", null, {
					hk: "45fGGU"
				}),
				wo = () => c.fbt._("Update draft", null, {
					hk: "1c8tCb"
				}),
				jo = () => c.fbt._("Please fix the above requirements", null, {
					hk: "17Yk98"
				}),
				Po = () => c.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4x2ypi"
				}),
				So = 10,
				To = ut.a.wrapped(ot.a, "Container", Co.a),
				Io = e => {
					return [p.Lb.LINK_ONLY, p.Lb.POLL, p.Lb.POST].includes(e)
				},
				Mo = ut.a.div("ButtonsAndErrors", Co.a),
				No = ut.a.wrapped(ot.a, "ButtonRow", Co.a),
				Do = ut.a.div("ButtonLayout", Co.a),
				Lo = ut.a.div("SaveDraftButtonLayout", Co.a),
				Ro = ut.a.wrapped(et.a, "PostLoadingIcon", Co.a),
				Fo = ut.a.wrapped(Ro, "DraftLoadingIcon", Co.a),
				Bo = ut.a.wrapped(Qe.a, "Token", Co.a),
				Ao = Object(i.a)(w.Z, U.a.getMediaCount),
				Uo = (e, t) => {
					return !!!Object(y.j)(e, t) && e.creations.formData.isPoll
				},
				Wo = [],
				Ho = e => {
					const t = Object(w.Z)(e),
						n = Object(w.fb)(e);
					if (!t.isBound || n !== p.Lb.POST || !Object(w.bb)(e)) return Wo;
					const o = (e => {
						const {
							allowedPostTypes: t,
							name: n
						} = Object(w.h)(e), o = Ao(e);
						if (!o || !t) return null;
						let s = "";
						return !o.total || t.images || t.videos ? o.video && !t.videos ? s = c.fbt._("Videos are not allowed in r/{subreddit name}", [c.fbt._param("subreddit name", n)], {
							hk: "1EUr31"
						}) : !o.image && !o.gifvideo || t.images || (s = c.fbt._("Images are not allowed in r/{subreddit name}", [c.fbt._param("subreddit name", n)], {
							hk: "2pxaRa"
						})) : s = c.fbt._("Videos and images are not allowed in r/{subreddit name}", [c.fbt._param("subreddit name", n)], {
							hk: "3AMcQ8"
						}), s || null
					})(e);
					return o ? [o] : (e => {
						const t = Ao(e);
						if (!t) return Wo;
						const n = [];
						return t.image > p.T && n.push(c.fbt._("Post may not contain more that 20 images", null, {
							hk: "1Szc36"
						})), t.video + t.gifvideo > p.W && n.push(c.fbt._("Post may not contain more that 5 videos", null, {
							hk: "2WhZ8k"
						})), n
					})(e)
				},
				Ko = (e, {
					sourcePostId: t
				}) => {
					const n = Object(w.db)(e, {
							sourcePostId: t
						}),
						{
							allowedPostTypes: o,
							id: s,
							isProfile: r,
							name: i
						} = Object(w.h)(e);
					if (!t) return c.fbt._("A source post is required to crosspost", null, {
						hk: "2TeLDw"
					});
					if (!s) return c.fbt._("A destination community is required to crosspost", null, {
						hk: "3haidF"
					});
					const a = r ? Object(S.cb)(e, {
						userId: s
					}) : s;
					if (a) {
						if (((e, t, n) => {
								const o = Object(at.a)(n, {
										sort: "new",
										crossposts_only: !0
									}),
									s = e.subreddits.duplicates.models[t];
								return !(s && s[o])
							})(e, a, t)) return c.fbt._("Checking community...", null, {
							hk: "1ycXCe"
						});
						if (((e, t, n) => {
								const o = ((e, t, n) => {
									const o = e.subreddits.duplicates.models[t];
									return o ? o[n] : []
								})(e, t, Object(at.a)(n, {
									sort: "new",
									crossposts_only: !0
								}));
								return 0 !== o.length && Object(lt.A)(e, o[0])
							})(e, a, t)) return c.fbt._("This community has the same crosspost within last 24 hours", null, {
							hk: "177pgf"
						})
					}
					if (!o || !n) return null;
					if (n.source) return !o.links && c.fbt._("This community does not allow for crossposting of link posts", null, {
						hk: "2cZPxJ"
					});
					const {
						isCrosspostableSubreddit: l
					} = Object(P.x)(e, {
						subredditName: i
					});
					if (!l) return c.fbt._("This community does not allow for crossposting of any posts", null, {
						hk: "2KrrAO"
					});
					switch (n.media && n.media.type) {
						case st.o.TEXT:
						case st.o.RTJSON:
							return !o.text && c.fbt._("This community does not allow for crossposting of text posts", null, {
								hk: "1a4voI"
							});
						case st.o.IMAGE:
							return !o.images && c.fbt._("This community does not allow for crossposting of image posts", null, {
								hk: "tGzk7"
							});
						case st.o.VIDEO:
						case st.o.GIFVIDEO:
						case st.o.EMBED:
							return !o.videos && c.fbt._("This community does not allow for crossposting of video posts", null, {
								hk: "w6HED"
							})
					}
					return null
				},
				zo = (e, {
					sourcePostId: t
				}) => {
					const n = Object(w.P)(e),
						o = Object(w.Z)(e),
						s = Object(w.fb)(e);
					if (s === p.Lb.IMAGE_ONLY) return !1;
					if (!Object(w.h)(e).name || !Object(w.A)(e)) return !1;
					if (s === p.Lb.POST || s === p.Lb.POLL) {
						const t = Ho(e),
							n = !U.a.isAllMediaUploaded(o, e.uploads);
						return !t.length && !n
					}
					if (s === p.Lb.MEDIA) {
						const {
							items: t
						} = n, o = t.every(t => {
							const n = e.uploads[t.uploadKey];
							return !(!n || !n.url || n.status !== rt.a.SUCCESS)
						});
						return t.length > 0 && o
					}
					return s === p.Lb.LINK_ONLY ? Object(w.v)(e) : s === p.Lb.CROSSPOST && !Ko(e, {
						sourcePostId: t
					})
				},
				Vo = Object(i.c)({
					isPoll: Uo,
					activeModalId: O.a,
					currentSubredditOrProfile: y.o,
					canPostAsModerator: w.e,
					currentCollection: y.f,
					errorMsgs: (e, {
						sourcePostId: t
					}) => {
						if (Object(w.t)(e)) return Object(w.o)(e);
						if (t) {
							const n = Ko(e, {
								sourcePostId: t
							});
							if (n) return [n]
						}
						return Ho(e)
					},
					eventSchedule: w.p,
					hasDraftError: j.f,
					hasError: w.t,
					hasSubmitValidationError: w.u,
					destSubreddit: w.h,
					destSubredditAboutInfo: w.g,
					isChatPostSelected: w.C,
					isContestMode: w.D,
					isDraftsFeatureEnabled: (e, t) => !Uo(e, t),
					isDraftPending: j.g,
					isMediaUploadPending: w.Q,
					isModeratorSomewhere: it.g,
					isPostAsMetaMod: w.J,
					isPostPending: w.hb,
					isPostSubmitEnabled: zo,
					isSaveDraftEnabled: e => {
						const t = Object(w.fb)(e);
						if (!p.D.has(t) || !Object(w.B)(e)) return !1;
						const n = Object(w.h)(e),
							o = Object(w.n)(e),
							s = t === p.Lb.LINK_ONLY && Object(w.v)(e),
							r = t === p.Lb.POST && o === f.h.RICH_TEXT && Object(w.z)(e),
							i = t === p.Lb.POST && o === f.h.MARKDOWN && Object(w.w)(e),
							a = s || r || i;
						return !!n.name || Object(w.A)(e) || a
					},
					isScheduledPost: w.L,
					postSchedule: w.W,
					postToTwitter: w.Y,
					isEditingScheduledPost: e => !!Object(pe.r)(e),
					showContributorRequestFlow: e => Object(P.r)(e, g.e.Post),
					showScheduledPosts: w.cb,
					stickyPosition: w.eb,
					submissionType: w.a,
					submitMode: w.gb,
					subredditGovMeta: e => {
						const t = Object(w.h)(e);
						if (t && t.id) return e.subreddits.gov.meta[t.id]
					},
					suggestedSort: w.jb
				}),
				qo = Object(y.t)(),
				Go = Object(r.b)(Vo, e => ({
					onResetDestCollection: () => e(Te.c()),
					onScheduledPostSettingsChange: t => e(a.z(t)),
					onTrackCancelButtonClick: () => {
						e((e, t) => E.a(t()))
					},
					openCollectionsListOrCreationModal: t => e(a.l(t)),
					togglePostSchedulePicker: () => e(a.w(f.n)),
					clickPostSchedule: () => {
						e((e, t) => Object(D.a)(Object(ue.i)()(t())))
					}
				})),
				Jo = 2e3,
				Xo = e => e ? c.fbt._("Update", null, {
					hk: "3MoYFL"
				}) : c.fbt._("Schedule", null, {
					hk: "4bXWUG"
				});
			class Qo extends s.a.Component {
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
						n && (o(n.id), s(Object(cn.b)(void 0, cn.a.collectionComposer)))
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
						return !!e || t || !Io(n)
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
						}, Jo)
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
					return t ? n ? ko() : Eo() : e ? wo() : Oo()
				}
				render() {
					const {
						activeModalId: e,
						canPostAsModerator: t,
						currentCollection: n,
						className: r,
						destSubreddit: i,
						destSubredditAboutInfo: a,
						hasError: l,
						hasSubmitValidationError: d,
						isEditingScheduledPost: u,
						errorMsgs: m,
						isContestMode: h,
						isDraftsFeatureEnabled: b,
						isDraftPending: _,
						isPoll: x,
						isMediaUploadPending: C,
						isPostAsMetaMod: v,
						isPostPending: y,
						isSaveDraftEnabled: E,
						isScheduledPost: O,
						onPostFieldValidation: k,
						onScheduledPostSettingsChange: w,
						onSaveDraft: j,
						onSubmit: P,
						postSchedule: S,
						sendEvent: T,
						showContributorRequestFlow: I,
						showScheduledPosts: M,
						stickyPosition: N,
						submissionType: D,
						submitMode: L,
						subredditGovMeta: R,
						suggestedSort: F,
						togglePostSchedulePicker: B
					} = this.props, {
						isSaved: A
					} = this.state, U = _ || y || C, W = L === f.q.Post && C, H = L === f.q.Draft && C, {
						collectionsEnabled: K = !1
					} = a || {}, z = U, V = Object(Ge.a)(Co.a.ButtonLayout, {
						[Co.a.autoWidth]: x || I || M
					});
					return s.a.createElement(To, {
						className: r
					}, s.a.createElement(io, {
						className: Co.a.postModifiers,
						disabled: U,
						onPostFieldValidation: k
					}), s.a.createElement(Mo, null, s.a.createElement(No, null, s.a.createElement("div", {
						className: V
					}, I ? s.a.createElement(Xe.a, {
						eventSource: g.b.PostSubmission,
						smallButton: !0
					}) : s.a.createElement(mt, {
						disabled: this.shouldDisablePostButton(),
						onClick: P,
						className: Object(Ge.a)(M && Co.a.removeRightBorderRadius)
					}, y || W ? s.a.createElement(Ro, {
						sizePx: So
					}) : s.a.createElement(o.Fragment, null, x && R && R.polls && R.polls.price && i.id ? s.a.createElement(o.Fragment, null, vo(), s.a.createElement(Bo, {
						subredditId: i.id
					}), Object(Je.a)(R.polls.price)) : O ? Xo(u) : vo())), M && s.a.createElement(mt, {
						title: c.fbt._("Make a scheduled post", null, {
							hk: "3TBSMs"
						}),
						disabled: this.shouldDisablePostScheduleButton(),
						onClick: this.openPostSchedulePickerModal,
						className: Co.a.postScheduleButton,
						Icon: S ? Object(Ye.r)(nt.a, Co.a.postScheduleIcon) : Object(Ye.r)(tt.a, Co.a.postScheduleIcon)
					})), e === f.n && s.a.createElement(Ze.a, {
						isContestMode: h,
						isPostAsMetaMod: v,
						sendEvent: T,
						schedule: S,
						stickyPosition: N,
						suggestedSort: F,
						onChange: w,
						onClose: B
					}), b && D !== p.Lb.MEDIA && D !== p.Lb.POLL && !O ? s.a.createElement(Lo, null, s.a.createElement(pt, {
						disabled: !E || U || A,
						onClick: j
					}, _ || H ? s.a.createElement(Fo, {
						sizePx: So
					}) : this.getSaveDraftButtonText())) : s.a.createElement(Do, null, s.a.createElement(pt, {
						disabled: U || A,
						onClick: this.onCancel
					}, yo())), K && t && s.a.createElement(go, {
						disabled: z,
						isToggled: !!n,
						onClick: this.handleDestCollectionClick
					})), s.a.createElement(vt, null), !!(l || m.length || d) && s.a.createElement($e.a, {
						className: Co.a.errorMessages,
						messages: m,
						fallbackMessage: d ? jo() : Po()
					})))
				}
			}
			var Zo = qo(Go(Object(_o.c)(Qo))),
				Yo = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				$o = n("./src/reddit/constants/posts.ts"),
				es = n("./src/reddit/controls/SubredditPicker/index.tsx"),
				ts = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				ns = n("./src/reddit/components/PostCreationForm/CreationControls/index.m.less"),
				os = n.n(ns);
			const ss = ut.a.wrapped(es.a, "SubredditPicker", os.a),
				rs = ut.a.wrapped(ot.a, "ControlRow", os.a),
				is = Object(i.a)(w.h, O.a, w.S, S.i, y.q, S.B, (e, t, n, o, s, r) => {
					const i = n && !t ? n : e;
					if (!i || !i.name) return Object(ts.b)("", null, null, r);
					const {
						name: a,
						isProfile: l
					} = i;
					return l ? Object(ts.b)(Object(X.d)(a), null, o, r) : Object(ts.b)(Object(X.c)(a), s, null, r)
				}),
				as = Object(i.c)({
					pending: w.U,
					pickerValue: is
				}),
				ls = Object(r.b)(as, (e, {
					draftId: t,
					pageLayer: n
				}) => ({
					onSubredditChangeRequested: t => e(Te.b(t, n)),
					onTrackSubredditPickerClick: () => e((e, t) => E.w(t()))
				}));
			class cs extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.inputRef = null, this.onSelectSubreddit = e => {
						const {
							rawString: t,
							record: n
						} = e, o = {
							name: n && n.name || Object(X.g)(t),
							isProfile: n && n.type === $o.a.PROFILE || Object(X.f)(t),
							allowedPostTypes: n && n.allowedPostTypes
						};
						this.props.onSubredditChangeRequested(o)
					}, this.setInputRef = e => this.inputRef = e
				}
				render() {
					return s.a.createElement(rs, null, s.a.createElement(ss, {
						allowCrosspostableOnly: this.props.allowCrosspostableOnly,
						disabled: this.props.pending,
						includeUserProfile: this.props.includeUserProfile,
						inputRef: this.setInputRef,
						onSelect: this.onSelectSubreddit,
						onFocus: this.props.onTrackSubredditPickerClick,
						selectOnBlur: !0,
						value: this.props.pickerValue
					}))
				}
			}
			var ds = Object(y.t)({
					draftId: y.u,
					pageLayer: e => e
				})(ls(cs)),
				us = n("./node_modules/lodash/range.js"),
				ms = n.n(us),
				ps = n("./src/higherOrderComponents/asModal/index.tsx"),
				hs = n("./src/reddit/icons/svgs/Close/index.tsx"),
				bs = n("./src/lib/timeAgo/index.ts"),
				fs = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				gs = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				_s = n("./src/reddit/icons/fonts/Link/index.tsx"),
				xs = n("./src/reddit/icons/fonts/Photos/index.tsx"),
				Cs = n("./src/reddit/icons/fonts/Text/index.tsx"),
				vs = n("./src/reddit/models/PostDraft/index.ts"),
				ys = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Icon.m.less"),
				Es = n.n(ys);
			const Os = {
				[vs.b.Image]: xs.a,
				[vs.b.Link]: _s.a,
				[vs.b.Markdown]: Cs.a,
				[vs.b.RichText]: Cs.a,
				[vs.b.Video]: gs.a
			};
			var ks = ut.a.wrapped(e => {
					const {
						draftKind: t,
						...n
					} = e, o = Os[t] || _s.a;
					return s.a.createElement(o, n)
				}, "Component", Es.a),
				ws = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/index.m.less"),
				js = n.n(ws);
			const Ps = ut.a.div("Container", js.a),
				Ss = ut.a.div("LeftBlock", js.a),
				Ts = ut.a.div("Content", js.a),
				Is = ut.a.div("RightBlock", js.a),
				Ms = ut.a.h2("PostTitle", js.a),
				Ns = ut.a.wrapped(Ms, "EditingPostTitle", js.a),
				Ds = ut.a.div("MetaLine", js.a),
				Ls = ut.a.span("SubredditName", js.a),
				Rs = ut.a.time("DraftSavedTime", js.a),
				Fs = ut.a.wrapped(po.b, "TrashIcon", js.a),
				Bs = ut.a.div("InteractiveDiv", js.a),
				As = ut.a.button("ConfirmDelete", js.a),
				Us = Object(i.c)({
					isDraftDeletionPending: (e, {
						draft: {
							id: t
						}
					}) => Object(j.a)(e, t),
					subreddit: (e, {
						draft: {
							subredditId: t
						}
					}) => t ? Object(P.S)(e, {
						subredditId: t
					}) : void 0,
					user: S.i
				}),
				Ws = Object(r.b)(Us, (e, {
					pageLayer: t
				}) => ({
					deleteDraft: n => e(F.o(n, t))
				})),
				Hs = Object(y.t)({
					currentDraftId: y.u,
					pageLayer: e => e
				}),
				Ks = 1e3;
			class zs extends s.a.Component {
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
					} = this.props, i = o && Object(Mn.g)(o) && r ? {
						displayText: Object(X.d)(Object(me.e)(r)),
						url: `/user/${Object(me.e)(r)}/`
					} : o;
					if (n) return null;
					const a = e.title || c.fbt._("Untitled", null, {
						hk: "2gEXjp"
					});
					return s.a.createElement(Ps, {
						onClick: this.onClick
					}, s.a.createElement(Ss, null, s.a.createElement(ks, {
						draftKind: e.kind
					})), s.a.createElement(Ts, null, t === e.id ? s.a.createElement(Ns, {
						"data-redditstyle": !0
					}, c.fbt._("EDITING: {postTitle}", [c.fbt._param("postTitle", a)], {
						hk: "3M5MUj"
					})) : s.a.createElement(Ms, {
						"data-redditstyle": !0
					}, a), s.a.createElement(Ds, {
						"data-redditstyle": !0
					}, i && s.a.createElement(Ls, {
						"data-redditstyle": !0
					}, i.displayText), i && s.a.createElement(fs.b, null), s.a.createElement(Rs, null, c.fbt._("Draft saved {draftSavedAtTime}", [c.fbt._param("draftSavedAtTime", Object(bs.d)((e.modified || e.created) / Ks))], {
						hk: "2HjAWY"
					})))), s.a.createElement(Is, null, this.state.showConfirmText ? s.a.createElement(As, {
						onClick: this.onConfirmClick,
						"data-redditstyle": !0
					}, t === e.id ? c.fbt._("Delete working draft?", null, {
						hk: "2iGoUj"
					}) : c.fbt._("Confirm", null, {
						hk: "2bjb66"
					})) : s.a.createElement(Bs, {
						onClick: this.onTrashCanClick
					}, s.a.createElement(Fs, {
						"data-redditstyle": !0
					}))))
				}
			}
			var Vs = Hs(Ws(zs)),
				qs = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				Gs = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Placeholder.m.less"),
				Js = n.n(Gs);
			const Xs = ut.a.div("Container", Js.a),
				Qs = ut.a.div("LeftBlock", Js.a),
				Zs = ut.a.div("Content", Js.a),
				Ys = ut.a.div("MediaIcon", Js.a),
				$s = ut.a.div("Title", Js.a),
				er = ut.a.div("Secondary", Js.a);
			var tr = ({
					className: e,
					isLoading: t
				}) => s.a.createElement(Xs, {
					className: e,
					"data-redditstyle": !0
				}, s.a.createElement(Qs, null, s.a.createElement(Ys, {
					className: Object(qs.a)({
						isLoading: t
					}),
					"data-redditstyle": !0
				})), s.a.createElement(Zs, null, s.a.createElement($s, {
					className: Object(qs.b)({
						isLoading: t
					}),
					"data-redditstyle": !0
				}), s.a.createElement(er, {
					className: Object(qs.b)({
						isLoading: t
					}),
					"data-redditstyle": !0
				}))),
				nr = n("./src/reddit/components/PostCreationForm/DraftListModal/index.m.less"),
				or = n.n(nr);

			function sr() {
				return (sr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: rr
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ir = `${W.a.assetPath}/img/snoo-drafts.png`, ar = 3, lr = ut.a.div("Wrapper", or.a), cr = ut.a.div("TitleRow", or.a), dr = ut.a.span("DraftsNumber", or.a), ur = ut.a.div("DetailsContainer", or.a), mr = ut.a.wrapped(ot.a, "ButtonRow", or.a), pr = ut.a.wrapped(Ye.l, "CancelButton", or.a), hr = ut.a.div("CloseWrapper", or.a), br = ut.a.wrapped(hs.a, "Close", or.a), fr = ut.a.div("Empty", or.a), gr = ut.a.img("EmptyImage", or.a), _r = ut.a.p("EmptyText", or.a), xr = Object(i.c)({
				drafts: j.c,
				isPending: j.b,
				maxDrafts: S.T
			}), Cr = Object(r.b)(xr);
			class vr extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === h.a.Escape && this.props.onClose()
					}, this.renderItem = e => s.a.createElement(Vs, {
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
					return s.a.createElement(tr, {
						isLoading: !0,
						key: e
					})
				}
				renderEmpty() {
					return s.a.createElement(fr, null, s.a.createElement(gr, {
						src: ir
					}), s.a.createElement(_r, null, rr._("Your drafts will live here", null, {
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
					return o = t ? ms()(ar).map(this.renderPlaceholder) : 0 === e.length ? this.renderEmpty() : e.map(this.renderItem), s.a.createElement(lr, {
						"data-redditstyle": !0
					}, s.a.createElement(cr, {
						"data-redditstyle": !0
					}, rr._("Drafts", null, {
						hk: "1fvOmI"
					}), s.a.createElement(dr, {
						"data-redditstyle": !0
					}, e.length, "/", n), s.a.createElement(hr, {
						onClick: this.props.onClose
					}, s.a.createElement(br, {
						"data-redditstyle": !0
					}))), s.a.createElement(ur, null, o), s.a.createElement(mr, {
						"data-redditstyle": !0
					}, s.a.createElement(pr, {
						onClick: this.props.onClose,
						"data-redditstyle": !0
					}, rr._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			const yr = ut.a.wrapped(Object(ps.a)(Cr(vr)), "DraftListModal", or.a);
			var Er = e => s.a.createElement(yr, sr({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e)),
				Or = n("./src/lib/forceHttps/index.ts"),
				kr = n("./src/reddit/components/PostCreationForm/SafeHarborText/index.m.less"),
				wr = n.n(kr);
			const {
				fbt: jr
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pr = new RegExp(`\\b(${[...st.x].join("|")})\\.com$`, "i"), Sr = new RegExp(`\\.(${st.w.join("|")})$`), Tr = ut.a.div("TextContainer", wr.a);
			class Ir extends s.a.Component {
				constructor() {
					super(...arguments), this.isUrlScraped = e => {
						const t = Object(z.parse)(Object(Or.a)(e));
						return !(!t.hostname || !Pr.test(t.hostname)) || !(!t.pathname || !Sr.test(t.pathname))
					}
				}
				render() {
					return this.props.value && this.isUrlScraped(this.props.value) ? s.a.createElement(Tr, null, jr._("Posting this link saves the image or gif to Reddit", null, {
						hk: "1zFV82"
					})) : null
				}
			}
			var Mr = n("./node_modules/react-autosize-textarea/lib/index.js"),
				Nr = n.n(Mr),
				Dr = n("./src/reddit/controls/GrowingOutlinedInput/index.m.less"),
				Lr = n.n(Dr);

			function Rr() {
				return (Rr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class Fr extends s.a.Component {
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
						...i
					} = this.props;
					return s.a.createElement(Nr.a, Rr({}, i, {
						className: Object(Ge.a)(Lr.a.growingOutlinedInput, t),
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
			var Br = n("./src/reddit/components/PostCreationForm/LinkEditor/index.m.less"),
				Ar = n.n(Br);
			const Ur = Object(i.c)({
					pending: w.U,
					postCreationFieldErrors: Dn,
					subreddit: y.q,
					value: w.N
				}),
				Wr = Object(r.b)(Ur, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(jt(p.ob.LINK, o)))
					},
					onChange: n => {
						e(a.p(n)), t(n)
					},
					onFocus: () => e((e, t) => E.n(t(), f.k.CLICK, f.l.URL))
				}));
			var Hr, Kr = Object(y.t)()(Wr(e => {
					const {
						pending: t,
						postCreationFieldErrors: n,
						subreddit: o,
						value: r
					} = e, i = n[p.ob.LINK].length > 0;
					return s.a.createElement("div", null, s.a.createElement(Fr, {
						className: Object(Ge.a)(Ar.a.URLInput, {
							[Ar.a.mHasError]: i
						}),
						placeholder: c.fbt._("Url", null, {
							hk: "4dfMY"
						}),
						value: r,
						onBlur: e.onBlur,
						onFocus: e.onFocus,
						onKeyDown: e.onKeyDown,
						onValueChange: e.onChange,
						readOnly: t
					}), s.a.createElement($e.a, {
						errorModalTitle: o ? Object(X.c)(o.name) : void 0,
						messages: n[p.ob.LINK]
					}), s.a.createElement(Ir, {
						value: r
					}))
				})),
				zr = n("./node_modules/lodash/clamp.js"),
				Vr = n.n(zr),
				qr = n("./node_modules/lodash/pickBy.js"),
				Gr = n.n(qr),
				Jr = n("./src/lib/formatApiError/index.ts"),
				Xr = n("./src/lib/objectSelector/index.ts"),
				Qr = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/isEqual.js")),
				Zr = n.n(Qr),
				Yr = n("./src/reddit/controls/Sortable/index.tsx"),
				$r = n("./src/reddit/hooks/useTracking.ts");
			! function(e) {
				e.RemoveGalleryItem = "REMOVE_GALLERY_ITEM", e.SelectGalleryItem = "SELECT_GALLERY_ITEM", e.SetGalleryItems = "SET_GALLERY_ITEMS", e.SetCaptionInput = "SET_CAPTION_INPUT", e.SetURLInput = "SET_URL_INPUT", e.SelectPrevMedia = "SELECT_PREV_MEDIA", e.SelectNextMedia = "SELECT_NEXT_MEDIA"
			}(Hr || (Hr = {}));
			var ei = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				ti = n("./node_modules/lodash/upperFirst.js"),
				ni = n.n(ti),
				oi = n("./src/reddit/icons/svgs/Hamster1/index.tsx"),
				si = n("./src/reddit/icons/svgs/Hamster2/index.tsx"),
				ri = n("./src/reddit/components/Gold/PowerupEntryTooltip/index.tsx"),
				ii = n("./src/reddit/components/PostCreationForm/MediaInput/DropArea/index.m.less"),
				ai = n.n(ii);
			const {
				fbt: li
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ci = [...Array.from(p.a), ...Array.from(p.b)].join(), di = ut.a.input("HiddenInput", ai.a), ui = ut.a.wrapped(Ye.l, "UploadButton", ai.a), mi = ut.a.wrapped(oi.a, "HamsterSmall", ai.a), pi = ut.a.wrapped(si.a, "HamsterLarge", ai.a), hi = ut.a.div("Container", ai.a), bi = ut.a.div("DropArea", ai.a), fi = ut.a.wrapped(bi, "DropAreaActive", ai.a), gi = ut.a.wrapped(fi, "DropAreaOver", ai.a), _i = ut.a.p("Paragraph", ai.a), xi = ut.a.p("ErrorMsg", ai.a), Ci = ut.a.div("Box", ai.a);
			class vi extends s.a.Component {
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
						allowMultiple: o,
						renderTooltip: r,
						tooltipId: i
					} = this.props;
					return s.a.createElement(hi, null, s.a.createElement(di, {
						innerRef: e => this.hiddenInputEl = e,
						onChange: this.onFileInput,
						type: "file",
						accept: ci,
						multiple: o
					}), e ? s.a.createElement(gi, null, s.a.createElement(Ci, null, s.a.createElement(pi, null), s.a.createElement(_i, null, li._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					})))) : t ? s.a.createElement(fi, null, s.a.createElement(Ci, null, s.a.createElement(mi, null), li._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					}))) : s.a.createElement(bi, null, r && s.a.createElement("div", {
						id: i
					}, s.a.createElement(ri.a, {
						tooltipId: i,
						offsetY: -20,
						width: 260,
						height: 40
					}, s.a.createElement("div", null, li._("Unlock fast, HD video for videos you upload or link from other sites", null, {
						hk: "3BdUgW"
					})))), s.a.createElement(_i, null, li._("Drag and drop {images} or {upload}", [li._param("images", o ? "images" : ""), li._param("upload", s.a.createElement(ui, {
						onClick: this.clickUploadButton
					}, li._("Upload", null, {
						hk: "4dwHCO"
					})))], {
						hk: "2gpX4v"
					})), n && s.a.createElement(xi, null, ni()(n))))
				}
			}
			var yi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/AddImageItem.m.less"),
				Ei = n.n(yi);

			function Oi(e) {
				const {
					onClickEvent: t,
					onFileInput: n
				} = e, r = Object(o.useRef)(null), i = Object(o.useCallback)(() => {
					r && r.current && r.current.click(), t()
				}, [t, r]), a = Object(o.useCallback)(e => {
					n(e.currentTarget.files)
				}, [n]);
				return s.a.createElement("span", {
					className: Ei.a.AddImageWrapper
				}, s.a.createElement("input", {
					accept: ci,
					className: Ei.a.hiddenInput,
					multiple: !0,
					onChange: a,
					ref: r,
					type: "file"
				}), s.a.createElement("button", {
					className: Ei.a.AddImageItem,
					onClick: i
				}, s.a.createElement(Tn.a, {
					className: Ei.a.plusIcon
				})))
			}
			var ki = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				wi = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				ji = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItem.m.less"),
				Pi = n.n(ji);
			var Si = e => {
					const {
						canDrop: t,
						mediaUpload: n,
						isDragging: r,
						isOver: i,
						isSelected: a,
						mediaItem: l,
						removeGalleryItem: c,
						dispatch: d
					} = e, u = Object(o.useRef)(null), m = n.key, p = n.status === rt.a.FAILED, h = Object(o.useCallback)(() => d((e => ({
						type: Hr.SelectGalleryItem,
						payload: {
							key: e
						}
					}))(m)), [d, m]), b = Object(o.useCallback)(e => {
						e.stopPropagation(), c(l)
					}, [c, l]), f = n.metadata.localUrl;
					return f ? s.a.createElement("span", {
						ref: u
					}, s.a.createElement(ki.a, {
						canDrop: t,
						className: Object(Ge.a)(Pi.a.GalleryMediaUpload, {
							[Pi.a.isDragging]: r,
							[Pi.a.isSelected]: a,
							[Pi.a.isError]: p
						}),
						isDragging: r,
						isOver: i
					}, s.a.createElement("span", {
						className: Object(Ge.a)(Pi.a.galleryImage, {
							[Pi.a.isDragging]: r,
							[Pi.a.isSelected]: a,
							[Pi.a.isError]: p
						}),
						onClick: h,
						style: {
							backgroundImage: `url("${f}")`
						}
					}, s.a.createElement("button", {
						className: Object(Ge.a)(Pi.a.deleteButton, {
							[Pi.a.isDragging]: r,
							[Pi.a.showDeleteNormal]: !a,
							[Pi.a.isError]: p
						}),
						onClick: b
					}, s.a.createElement(wi.a, {
						className: Object(Ge.a)(Pi.a.deleteIcon, {
							[Pi.a.isDragging]: r
						})
					}))))) : null
				},
				Ti = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItemsWrapper.m.less"),
				Ii = n.n(Ti);
			var Mi = e => {
					const {
						onRemoveUpload: t,
						dispatch: n,
						mediaState: r,
						uploads: i
					} = e, a = Object($r.a)(), l = Object(o.useCallback)(() => a(E.j()), [a]), c = Object(o.useCallback)(e => {
						t(e.uploadKey), a(E.l())
					}, [a, t]);
					return s.a.createElement("div", {
						className: Ii.a.itemsWrapper
					}, s.a.createElement(Yr.a, {
						className: Ii.a.sortableImages,
						values: r.items,
						getReactKey: e => e.uploadKey,
						render: (e, t, o, a, l) => {
							const d = i[e.uploadKey];
							if (!d) return null;
							if (Object(rt.c)(d)) return s.a.createElement("span", {
								className: Object(Ge.a)(Ii.a.pendingItem, Object(qs.b)({
									isLoading: !0
								}))
							});
							const u = e.uploadKey === r.selectedKey;
							return s.a.createElement("span", {
								className: Ii.a.imageStyles
							}, a && s.a.createElement("span", {
								className: Ii.a.hoverMarker
							}), s.a.createElement(Si, {
								canDrop: l,
								dispatch: n,
								isDragging: o,
								isOver: a,
								isSelected: u,
								mediaItem: e,
								key: e.uploadKey,
								mediaUpload: d,
								removeGalleryItem: c
							}))
						},
						onDrop: (e, t, o) => {
							n((e => ({
								type: Hr.SetGalleryItems,
								payload: {
									items: e
								}
							}))(o))
						}
					}), r.items.length < ei.b && s.a.createElement(Oi, {
						onClickEvent: l,
						onFileInput: e.onFileInput
					}))
				},
				Ni = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/InputWrapper.m.less"),
				Di = n.n(Ni);
			var Li = e => {
					const {
						uploads: t,
						galleryItem: n,
						isSelected: r,
						dispatch: i
					} = e, a = t[n.uploadKey], l = n.caption, d = n.url, u = Object($r.a)(), m = Object(o.useCallback)(e => i((e => ({
						type: Hr.SetCaptionInput,
						payload: {
							input: e
						}
					}))(e)), [i]), p = Object(o.useCallback)(e => i((e => ({
						type: Hr.SetURLInput,
						payload: {
							input: e
						}
					}))(e)), [i]), h = Object(o.useCallback)(e => u(E.k(e)), [u]), b = Object(o.useCallback)(() => h(f.l.CAPTION), [h]), g = Object(o.useCallback)(() => h(f.l.OUTBOUND_URL), [h]), _ = !r || !a || !a.url || Object(rt.c)(a);
					return s.a.createElement("div", null, s.a.createElement("div", {
						className: Di.a.inputWrapper
					}, s.a.createElement(Fr, {
						className: Di.a.inputStyles,
						disabled: _,
						maxLength: ei.a,
						onFocus: b,
						onValueChange: m,
						placeholder: c.fbt._("Add a caption...", null, {
							hk: "1fOmKi"
						}),
						value: l
					}), s.a.createElement("div", {
						className: Di.a.charsCounter
					}, l.length, "/", ei.a)), s.a.createElement("div", {
						className: Di.a.inputWrapper
					}, s.a.createElement(Fr, {
						className: Object(Ge.a)(Di.a.inputStyles, Di.a.urlInputStyles),
						disabled: _,
						onFocus: g,
						onValueChange: p,
						placeholder: c.fbt._("Add a link...", null, {
							hk: "Z6l9K"
						}),
						value: d
					})))
				},
				Ri = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/Layout.m.less"),
				Fi = n.n(Ri);
			var Bi = e => {
					const {
						heroSlot: t,
						mainContent: n,
						sideMetaContent: o,
						bottomContent: r
					} = e;
					return s.a.createElement("div", {
						className: Fi.a.Layout
					}, s.a.createElement("div", {
						className: Fi.a.hero
					}, t), n && s.a.createElement("div", {
						className: Fi.a.mainContent
					}, n), o && s.a.createElement("div", {
						className: Fi.a.sideMetaContent
					}, o), s.a.createElement("div", {
						className: Fi.a.bottomContent
					}, r))
				},
				Ai = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/SelectedImage.m.less"),
				Ui = n.n(Ai);
			var Wi = e => {
					const {
						upload: t
					} = e, n = t.metadata.localUrl;
					return Object(rt.c)(t) ? s.a.createElement("span", {
						className: Object(Ge.a)(Ui.a.pendingImage, Object(qs.b)({
							isLoading: !0
						}))
					}) : s.a.createElement("img", {
						className: Ui.a.selectedImage,
						src: n
					})
				},
				Hi = n("./src/reddit/components/ProgressBar/index.tsx"),
				Ki = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/MultipleUploadStatusBar/index.m.less"),
				zi = n.n(Ki);
			const {
				fbt: Vi
			} = n("./node_modules/fbt/lib/FbtPublic.js"), qi = ut.a.div("ControlRow", zi.a), Gi = ut.a.div("Status", zi.a);
			var Ji = ut.a.wrapped(e => {
					const {
						progress: t
					} = e, n = t && t.percent || 0;
					return s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(Hi.a, {
						percent: n,
						className: zi.a.OuterDivProgressBar,
						innerBarClassName: zi.a.ProgressBar
					}), s.a.createElement(qi, null, s.a.createElement(Gi, {
						className: zi.a.StatusText
					}, n < 100 ? Vi._("Image uploading in progress...", null, {
						hk: "n2dCj"
					}) : Vi._("Image uploading completed", null, {
						hk: "4ko42w"
					}))))
				}, "Component", zi.a),
				Xi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/index.m.less"),
				Qi = n.n(Xi);

			function Zi(e) {
				const {
					canDrop: t,
					dispatch: n,
					isOver: r,
					mediaState: i,
					onFileInput: a,
					onRemoveUpload: l,
					uploads: d
				} = e, [u, m] = Object(o.useState)([]), p = i.selectedKey, h = i.items.length > 1, b = i.items.find(e => e.uploadKey === p), f = p && d[p], g = i.items.filter(e => {
					const t = d[e.uploadKey];
					return !!t && t.status === rt.a.FAILED
				}).length, _ = Object.values(d).filter(rt.c);
				if (!Zr()(u, _))
					if (0 === _.length) m([]);
					else {
						const e = _.filter(e => !u.some(t => t.key === e.key));
						e.length > 0 && m([...u, ...e])
					} const x = u.length > 0,
					C = {
						percent: (() => {
							if (!x) return 0;
							let e = 0;
							return u.forEach(t => {
								const n = d[t.key];
								if (null == n || n && (n.status === rt.a.CANCELED || n.status === rt.a.FAILED || n.status === rt.a.SUCCESS)) e += 100;
								else {
									const n = d[t.key].progress;
									e += n && n.percent || 0
								}
							}), e / u.length
						})(),
						uploaded: 0
					};
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(Ge.a)(Qi.a.dropArea, {
						[Qi.a.isDropAreaActive]: t,
						[Qi.a.isDropAreaOver]: r
					})
				}, s.a.createElement(Bi, {
					heroSlot: s.a.createElement(Mi, {
						mediaState: i,
						onFileInput: a,
						onRemoveUpload: l,
						uploads: d,
						dispatch: n
					}),
					mainContent: f && h && s.a.createElement(Wi, {
						upload: f
					}),
					sideMetaContent: b && h && s.a.createElement(Li, {
						dispatch: n,
						galleryItem: b,
						uploads: d,
						isSelected: !!p
					}),
					bottomContent: null
				})), x ? s.a.createElement(Ji, {
					progress: C
				}) : null, !!g && s.a.createElement($e.a, {
					className: Qi.a.errorMessage,
					messages: [c.fbt._("Some files failed to upload, please remove or retry them", null, {
						hk: "3BP9AQ"
					})]
				}))
			}
			var Yi = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				$i = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				ea = n("./src/reddit/controls/FileDrop/index.tsx"),
				ta = n("./src/reddit/helpers/media/index.ts"),
				na = n("./src/telemetry/models/Media.ts"),
				oa = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				sa = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				ra = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				ia = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/Preview/index.m.less"),
				aa = n.n(ia);
			const la = ut.a.img("Img", aa.a),
				ca = ut.a.img("BlurImg", aa.a),
				da = ut.a.wrapped(e => {
					const {
						className: t,
						url: n
					} = e;
					return s.a.createElement("div", {
						className: t
					}, s.a.createElement(ca, {
						src: n
					}), s.a.createElement(la, {
						src: n
					}))
				}, "ImagePreview", aa.a),
				ua = ut.a.wrapped(e => {
					const {
						className: t,
						url: n,
						showControls: o,
						videoBlurImgSrc: r
					} = e;
					return s.a.createElement("div", {
						className: t
					}, s.a.createElement(ra.b, {
						shouldLoad: !1,
						shouldPause: !1,
						isGif: !1,
						otherSource: n,
						showControlBar: o,
						showSettingsIcon: !1,
						blurImageSrc: r
					}))
				}, "VideoPreview", aa.a);
			var ma = ut.a.wrapped(e => {
					const {
						className: t,
						type: n,
						url: o,
						showControls: r,
						videoBlurImgSrc: i
					} = e;
					return s.a.createElement("div", {
						className: t
					}, "image" === n ? s.a.createElement(da, {
						url: o
					}) : s.a.createElement(ua, {
						url: o,
						videoBlurImgSrc: i,
						showControls: r
					}))
				}, "Component", aa.a),
				pa = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/UploadStatusBar/index.m.less"),
				ha = n.n(pa);
			const {
				fbt: ba
			} = n("./node_modules/fbt/lib/FbtPublic.js"), fa = ut.a.div("ControlRow", ha.a), ga = ut.a.wrapped(Ye.o, "Button", ha.a), _a = ut.a.div("Status", ha.a);
			var xa = ut.a.wrapped(e => {
					const {
						name: t,
						progress: n,
						onCancel: o
					} = e, r = n && n.percent || 0;
					return s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(Hi.a, {
						percent: r
					}), s.a.createElement(fa, null, s.a.createElement(_a, null, r < 100 ? ba._("Uploading {fileName}", [ba._param("fileName", t)], {
						hk: "1F1ZHh"
					}) : ba._("Success!", null, {
						hk: "2SQAeu"
					})), r < 100 && s.a.createElement(ga, {
						onClick: o
					}, ba._("Cancel", null, {
						hk: "2TSLl5"
					}))))
				}, "Component", ha.a),
				Ca = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				va = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/index.m.less"),
				ya = n.n(va);
			const Ea = ut.a.div("Wrapper", ya.a),
				Oa = ut.a.div("Controls", ya.a),
				ka = ut.a.wrapped(po.b, "Trash", ya.a),
				wa = ut.a.wrapped(sa.a, "ThumbnailSelect", ya.a);

			function ja(e) {
				const {
					isPostSubmitPending: t,
					mediaType: n,
					onCancelUpload: o,
					onRemove: r,
					upload: i
				} = e, a = i.metadata, {
					localUrl: l,
					videoFirstFrameUrl: d
				} = a, u = i.status, m = u === rt.a.PENDING || u === rt.a.UPLOADING, p = u === rt.a.SUCCESS, h = !t;
				return s.a.createElement(Ea, null, m ? s.a.createElement(xa, {
					className: ya.a.UploadStatusBar,
					name: i.file.name,
					progress: i.progress,
					onCancel: o
				}) : null, l ? s.a.createElement(ma, {
					type: n,
					url: l,
					showControls: p,
					videoBlurImgSrc: d
				}) : null, p && s.a.createElement(Oa, null, "video" === n && s.a.createElement(oa.a, {
					disabled: !!e.makeGifDisableReason || !h,
					tooltip: e.makeGifDisableReason,
					on: e.isMakeGifToggleOn,
					onClick: e.onMakeGifToggle
				}), "video" === n && s.a.createElement(Ca.a, {
					enabled: h,
					Icon: wa,
					tooltip: c.fbt._("Choose thumbnail", null, {
						hk: "2XlKfd"
					}),
					onClick: e.onShowThumbnailSelector
				}), s.a.createElement(Ca.a, {
					enabled: h,
					Icon: ka,
					tooltip: c.fbt._("Remove", null, {
						hk: "H42IB"
					}),
					onClick: r
				})))
			}
			var Pa = n("./src/reddit/components/PostCreationForm/MediaInput/RemovePrompt/index.m.less"),
				Sa = n.n(Pa);
			const Ta = "POST_CREATION_MEDIA_REMOVE_PROMPT_ID",
				Ia = ut.a.div("Wrapper", Sa.a),
				Ma = ut.a.wrapped(ot.a, "TitleRow", Sa.a),
				Na = ut.a.div("DetailsContainer", Sa.a),
				Da = ut.a.wrapped(ot.a, "ButtonRow", Sa.a),
				La = ut.a.wrapped(Ye.l, "CancelButton", Sa.a),
				Ra = ut.a.wrapped(Ye.i, "ConfirmButton", Sa.a);
			var Fa = Object(ps.a)(e => {
					const {
						isVideo: t
					} = e;
					return s.a.createElement(Ia, null, s.a.createElement(Ma, null, t ? c.fbt._("Remove video?", null, {
						hk: "34eepe"
					}) : c.fbt._("Remove image?", null, {
						hk: "41e1Uy"
					})), s.a.createElement(Na, null, t ? c.fbt._("Are you sure you want to remove your video?", null, {
						hk: "smTuF"
					}) : c.fbt._("Are you sure you want to remove your image?", null, {
						hk: "Ci5LM"
					})), s.a.createElement(Da, null, s.a.createElement(La, {
						onClick: e.onCanceled
					}, c.fbt._("Keep", null, {
						hk: "4gFSdj"
					})), s.a.createElement(Ra, {
						onClick: e.onConfirmed
					}, c.fbt._("Remove", null, {
						hk: "1Jdd3U"
					}))))
				}),
				Ba = n("./src/reddit/selectors/gold/powerups.ts"),
				Aa = n("./src/reddit/components/PostCreationForm/MediaInput/index.m.less"),
				Ua = n.n(Aa),
				Wa = n("./src/reddit/models/Gold/Powerups/index.ts");
			const Ha = "MEDIA_POST_VIDEO_THUMBNAIL_SELECTOR_MODAL_ID",
				Ka = Object(y.t)(),
				za = Object(i.c)({
					isPowerupTooltipDisplayed: e => {
						const t = Object(w.h)(e).id,
							n = Wa.a.PostsImageUpload;
						return !!t && !Object(Ba.m)(e, {
							subredditId: t,
							benefit: n
						})
					},
					activeModalId: O.a,
					isPostPending: w.U,
					uploads: Object(Xr.a)(e => Gr()(e.uploads, e => e.key.startsWith(M.a))),
					value: w.P,
					isImageGalleryCreationEnabled: w.G
				}),
				Va = Object(r.b)(za, e => ({
					onChange: t => e(a.d(t)),
					startMediaGalleryUploads: (t, n) => e(M.d(t, n)),
					removeUpload: t => e(Ie.i(t, !0)),
					toggleThumbnailModal: () => e(a.w(Ha)),
					toggleRemovePrompt: () => e(a.w(Ta))
				})),
				qa = ut.a.div("Container", Ua.a),
				Ga = (e, t, n) => {
					if (!e.length) return null;
					let o = e.findIndex(e => e.uploadKey === n);
					if (-1 === o) {
						const s = t.findIndex(e => e.uploadKey === n);
						o = Vr()(s - 1, 0, e.length - 1)
					}
					return e[o].uploadKey
				};
			class Ja extends s.a.Component {
				constructor() {
					super(...arguments), this.onFileDrop = e => this.uploadMediaFiles(e, na.FileSource.DragAndDrop), this.onFileInput = e => this.uploadMediaFiles(e, na.FileSource.FileSelector), this.onRemoveUpload = e => {
						const {
							value: t
						} = this.props, {
							items: n,
							selectedKey: o
						} = t, s = n.filter(t => t.uploadKey !== e);
						this.props.onChange({
							...t,
							items: s,
							selectedKey: Ga(s, n, o)
						}), this.props.removeUpload(e)
					}, this.onCancelSingleMediaUpload = () => {
						this.onRemoveUpload(this.getSingleUpload().key)
					}, this.handlePaste = e => {
						if (e.clipboardData) {
							const t = Object(Yi.a)(e.clipboardData);
							t.length && (e.preventDefault(), e.stopPropagation(), this.uploadMediaFiles(t, na.FileSource.Clipboard))
						}
					}, this.onRemoveConfirmed = () => {
						this.props.toggleRemovePrompt(), this.onRemoveUpload(this.getSingleUpload().key)
					}, this.onThumbnailSelect = e => {
						this.toggleThumbnailSelector();
						const {
							value: t
						} = this.props;
						if (!Object(f.v)(t)) return;
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
						if (!Object(f.v)(e)) return;
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
								case Hr.SelectGalleryItem: {
									const {
										key: n
									} = t.payload;
									return {
										...e,
										selectedKey: n
									}
								}
								case Hr.SetGalleryItems: {
									const {
										items: n
									} = t.payload;
									return {
										...e,
										items: n
									}
								}
								case Hr.SetCaptionInput: {
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
								case Hr.SetURLInput: {
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
								case Hr.SelectPrevMedia: {
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
								case Hr.SelectNextMedia: {
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
							uploads: i
						} = this.props;
						if (!Object(f.v)(o) && r && o.items.length >= 1) return s.a.createElement(Zi, {
							isOver: e,
							canDrop: t,
							dispatch: this.dispatchAction,
							mediaState: o,
							onFileInput: this.onFileInput,
							onRemoveUpload: this.onRemoveUpload,
							uploads: i
						}); {
							const i = this.getSingleUpload(),
								a = this.props.value.items[0],
								{
									isMakeGif: l = !1,
									makeGifDisableReason: c = null
								} = a && a.video || {},
								d = i && i.status === rt.a.FAILED,
								u = i && d ? Object(Jr.a)(i.error) : "",
								m = i && Object(ta.f)(i.metadata.mimetype);
							return o && m && i && !d ? s.a.createElement(ja, {
								isPostSubmitPending: n,
								upload: i,
								mediaType: m,
								onRemove: this.props.toggleRemovePrompt,
								onCancelUpload: this.onCancelSingleMediaUpload,
								onShowThumbnailSelector: this.toggleThumbnailSelector,
								onMakeGifToggle: this.onMakeGifToggle,
								isMakeGifToggleOn: l,
								makeGifDisableReason: c
							}) : s.a.createElement(vi, {
								lastErrorMsg: u,
								isOver: e,
								canDrop: t,
								onFileInput: this.onFileInput,
								allowMultiple: r,
								tooltipId: "postCreation-powerupTooltip",
								renderTooltip: this.props.isPowerupTooltipDisplayed
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
					} = e, n = this.getSingleUpload(), o = t[0], r = Object(f.v)(e), i = r && o.video.thumbnail || void 0;
					return s.a.createElement(qa, null, s.a.createElement(ea.a, {
						render: (e, t) => this.renderDropArea(e, t),
						onDrop: this.onFileDrop
					}), n && n.metadata.videoDuration && s.a.createElement($i.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleThumbnailSelector,
						videoSource: n.metadata.localUrl,
						videoDuration: n.metadata.videoDuration,
						selected: i,
						isOpen: this.props.activeModalId === Ha
					}), this.props.activeModalId === Ta && s.a.createElement(Fa, {
						isVideo: r,
						onCanceled: this.props.toggleRemovePrompt,
						onConfirmed: this.onRemoveConfirmed
					}))
				}
			}
			var Xa = Ka(Va(Ja)),
				Qa = n("./src/reddit/actions/post.ts"),
				Za = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				Ya = n("./src/reddit/controls/OutboundLink/index.tsx"),
				$a = n("./src/reddit/selectors/externalAccount.ts"),
				el = n("./src/reddit/icons/fonts/Info/index.tsx"),
				tl = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/Hint/index.m.less"),
				nl = n.n(tl);
			const ol = ut.a.wrapped(el.a, "Info", nl.a),
				sl = ut.a.div("TooltipContent", nl.a);
			var rl = e => s.a.createElement("div", {
					className: nl.a.Hint
				}, s.a.createElement(Bt.a, {
					className: nl.a.HoverTooltip,
					tooltipContentClass: nl.a.tooltipContentClass,
					text: s.a.createElement(sl, null, e.text)
				}), s.a.createElement(ol, null)),
				il = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/index.m.less"),
				al = n.n(il);
			const ll = ut.a.wrapped(Za.a, "CheckboxInput", al.a),
				cl = ut.a.wrapped(Ya.b, "ConnectAccountLink", al.a),
				dl = ut.a.div("Container", al.a),
				ul = ut.a.div("ContainerLeft", al.a),
				ml = ut.a.div("ContainerRight", al.a),
				pl = ut.a.div("CheckboxText", al.a),
				hl = ut.a.div("Option", al.a),
				bl = ut.a.wrapped(St.a, "TextButton", al.a),
				fl = ut.a.input("TextBox", al.a),
				gl = ut.a.div("Wrapper", al.a),
				_l = Object(i.c)({
					connectedTwitterAccount: $a.a,
					currentSubredditOrProfile: y.o,
					currentUser: S.i,
					isDraftPending: j.g,
					isMediaUploadPending: w.Q,
					isPostPending: w.hb,
					isPublicLink: w.K,
					postToTwitter: w.Y,
					sendReplies: w.ab,
					sharingLink: j.i,
					submissionType: w.a
				}),
				xl = Object(r.b)(_l, (e, t) => ({
					togglePostToTwitter: t => {
						e(a.x(t)), e((e, n) => E.v(n(), t))
					},
					toggleSendReplies: t => {
						e(a.y(t))
					},
					toggleDraftIsPublic: n => {
						e(F.s(n)), e(Object(F.r)(t.draftId)), e((e, o) => {
							const s = Object(j.h)(o(), t.draftId);
							s && E.g(o(), s, n)
						})
					},
					copyLink: t => e(Object(Qa.x)(t)),
					trackConnectAccountsClick: () => e((e, t) => E.b(t()))
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
			var Cl = Object(y.t)()(xl(e => {
					const {
						connectedTwitterAccount: t,
						currentSubredditOrProfile: n,
						currentUser: o,
						draftId: r,
						submissionType: i
					} = e, a = !!n && !!n.isQuarantined, l = e.isDraftPending || e.isPostPending || e.isMediaUploadPending, d = i !== p.Lb.MEDIA && r, u = e.isPublicLink, m = o && o.hasUserProfile;
					return s.a.createElement(dl, null, s.a.createElement(ul, {
						className: e.className
					}, s.a.createElement(ot.a, null, s.a.createElement(hl, null, s.a.createElement(ll, {
						disabled: l,
						name: "send-replies",
						onChange: e.onToggleSendReplies,
						value: e.sendReplies
					}, s.a.createElement(pl, null, c.fbt._("Send me post reply notifications", null, {
						hk: "3kNmey"
					}))))), m && t && s.a.createElement(ot.a, null, s.a.createElement(hl, null, s.a.createElement(ll, {
						disabled: l || a,
						name: "post-to-twitter",
						onChange: e.onTogglePostToTwitter,
						value: e.postToTwitter
					}, s.a.createElement(pl, null, c.fbt._("Share this post on Twitter", null, {
						hk: "3SPI4V"
					}))))), m && !t && !a && s.a.createElement(ot.a, null, s.a.createElement(cl, {
						href: "/settings#connected-accounts",
						isSponsored: !1,
						onClick: e.trackConnectAccountsClick,
						source: null
					}, c.fbt._("Connect accounts to share your post", null, {
						hk: "1nIuWp"
					})), s.a.createElement(rl, {
						text: c.fbt._("Connect a Twitter account in your User Settings. With a connected account you can choose to share new posts you make directly to Twitter.", null, {
							hk: "JRoQz"
						})
					}))), s.a.createElement(ml, {
						className: e.className
					}, d && s.a.createElement(gl, null, s.a.createElement(hl, null, s.a.createElement(ll, {
						name: "enable-public-link",
						onChange: e.onToggleDraftIsPublic,
						value: e.isPublicLink
					}, s.a.createElement(pl, null, c.fbt._("Enable public draft link", null, {
						hk: "1SpDgT"
					})), s.a.createElement(rl, {
						text: c.fbt._("This option will create a link to a preview of this draft. Anyone with this link will be able to see this draft. You can disable this link at any time.", null, {
							hk: "1r77YF"
						})
					})))), d && u && s.a.createElement(ot.a, null, s.a.createElement(fl, {
						disabled: !0,
						value: e.sharingLink
					}), s.a.createElement(bl, {
						onClick: e.onCopyLink
					}, c.fbt._("Copy link", null, {
						hk: "22rywZ"
					})))))
				})),
				vl = n("./src/reddit/components/PostCreationForm/PostCreationFooter/index.m.less"),
				yl = n.n(vl);
			const El = ut.a.div("Container", yl.a);
			var Ol = e => s.a.createElement(El, null, s.a.createElement(Cl, {
					draftId: e.draftId
				})),
				kl = n("./src/reddit/featureFlags/profileCollections.ts"),
				wl = n("./src/reddit/selectors/postCollection.ts"),
				jl = n("./src/reddit/selectors/profile.ts"),
				Pl = n("./src/reddit/components/PostCreationForm/PostCreationHeader/index.m.less"),
				Sl = n.n(Pl);
			const Tl = ut.a.div("CreateLabel", Sl.a),
				Il = ut.a.span("CountIndicator", Sl.a),
				Ml = ut.a.wrapped(Ye.o, "LinkButton", Sl.a),
				Nl = Ml,
				Dl = ut.a.div("CreatePostHeader", Sl.a),
				Ll = Object(i.c)({
					canPostAsModerator: w.e,
					collectionsCount: e => {
						const t = Object(w.h)(e);
						let n = t.id;
						if (t.isProfile && Object(kl.a)(e)) {
							const o = Object(jl.j)(e, {
								profileName: t.name
							});
							n = o && o.id
						}
						return n ? Object(wl.u)(e, {
							subredditId: n
						}) : 0
					},
					destSubredditAboutInfo: w.g,
					draftsCount: S.j,
					isPending: w.U
				});
			var Rl = Object(r.b)(Ll, e => ({
					showDraftsList: () => {
						e(F.p()), e(a.w(f.d))
					},
					showCollectionsList: () => {
						e(a.w(f.a))
					}
				}))(e => {
					const {
						canPostAsModerator: t,
						collectionsCount: n,
						destSubredditAboutInfo: o,
						draftsCount: r,
						isPending: i,
						showCollectionsList: a,
						showDraftsList: l,
						submissionType: d,
						submitMode: u
					} = e, m = d === p.Lb.CROSSPOST, h = m ? c.fbt._("Create a crosspost", null, {
						hk: "1oNF7H"
					}) : c.fbt._("Create a post", null, {
						hk: "4u8qEy"
					}), b = t && o && o.collectionsEnabled;
					return s.a.createElement(Dl, null, s.a.createElement(Tl, null, u === f.q.Draft ? c.fbt._("Edit draft", null, {
						hk: "oMgcW"
					}) : h), !m && s.a.createElement(s.a.Fragment, null, b && s.a.createElement(Nl, {
						onClick: a
					}, c.fbt._("Collections", null, {
						hk: "2FVot0"
					}), s.a.createElement(Il, null, n)), s.a.createElement(Ml, {
						disabled: i,
						onClick: l
					}, c.fbt._("Drafts", null, {
						hk: "25z4rQ"
					}), s.a.createElement(Il, null, r))))
				}),
				Fl = n("./src/reddit/actions/polls.ts"),
				Bl = n("./src/reddit/actions/postCreation/editorContent.ts"),
				Al = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				Ul = n("./src/reddit/selectors/gov.ts"),
				Wl = n("./src/reddit/components/Governance/PollHelpText/index.m.less"),
				Hl = n.n(Wl);
			const Kl = Object(i.c)({
				subredditGovInfo: (e, {
					subreddit: t
				}) => Object(Ul.k)(e, {
					subredditId: t.id
				}),
				tokenName: (e, {
					subreddit: t
				}) => Object(Ul.n)(e, {
					subredditId: t.id
				})
			});
			var zl = Object(r.b)(Kl)((function(e) {
					var t;
					const {
						subreddit: n,
						subredditGovInfo: o,
						tokenName: r
					} = e, i = null === (t = null == o ? void 0 : o.polls) || void 0 === t ? void 0 : t.decisionThreshold;
					return s.a.createElement("div", {
						className: Hl.a.pollHelpText
					}, i && s.a.createElement(s.a.Fragment, null, s.a.createElement(Al.a, {
						className: Hl.a.decisionThreholdAmount,
						amount: i,
						subredditId: n.id
					}), s.a.createElement("div", {
						className: Hl.a.decisionThresholdTitle
					}, c.fbt._("Decision Threshold", null, {
						hk: "39nut8"
					}))), s.a.createElement("div", {
						className: Hl.a.decisionThresholdExplanation
					}, c.fbt._("Governance Polls pass when one option reaches the Decision Threshold. The Decision Threshold is updated regularly based on the number of {tokenName} that voted in previous governance polls.", [c.fbt._param("tokenName", r)], {
						hk: "Di1tp"
					})))
				})),
				Vl = n("./src/reddit/actions/tooltip.ts"),
				ql = n("./src/reddit/controls/Dropdown/index.tsx"),
				Gl = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Jl = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				Xl = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				Ql = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts");
			const Zl = () => {
					const e = new Date,
						[t] = Object(de.i)(Object(ht.g)(e));
					return t
				},
				Yl = () => {
					const e = new Date;
					return e.setDate(e.getDate() + 3), e
				},
				$l = e => {
					const [t, n] = Object(de.i)(Object(ht.g)(e));
					return {
						date: t,
						time: n
					}
				},
				ec = ({
					date: e,
					time: t
				}) => new Date(`${e}T${t}`);
			var tc = n("./src/reddit/components/PollCreator/EndDatePicker/index.m.less"),
				nc = n.n(tc);

			function oc({
				poll: e
			}) {
				const {
					endDate: t
				} = e, {
					date: n,
					time: o
				} = $l(t), i = Object(ht.b)(), a = i ? Object(ht.d)(i) : null, l = Object(r.d)(), d = t => {
					l(Object(Fl.b)({
						...e,
						endDate: ec({
							date: n,
							time: o,
							...t
						})
					}))
				};
				return s.a.createElement("div", {
					className: nc.a.endDatePicker
				}, s.a.createElement("label", {
					className: nc.a.title
				}, c.fbt._("Prediction ends", null, {
					hk: "1fsk1v"
				})), s.a.createElement("div", {
					className: nc.a.dateTime
				}, s.a.createElement(Jl.a, {
					"aria-label": c.fbt._("Prediction end date", null, {
						hk: "4zYv4T"
					}),
					onChange: e => d({
						date: e
					}),
					min: Zl(),
					max: Object(Ql.a)(),
					value: n
				}), s.a.createElement(Xl.a, {
					"aria-label": c.fbt._("Prediction end time", null, {
						hk: "1idFl4"
					}),
					onChange: e => d({
						time: e
					}),
					value: o
				}), a && s.a.createElement("div", {
					className: nc.a.timeZone
				}, a.abbreviation)))
			}
			var sc = n("./src/reddit/icons/svgs/Grapple/index.tsx"),
				rc = n("./src/reddit/components/PollCreator/Option/index.m.less"),
				ic = n.n(rc);

			function ac(e) {
				return s.a.createElement("div", {
					className: Object(Ge.a)(e.className, ic.a.container),
					style: {
						left: e.isDropTarget ? 16 : 0,
						opacity: lc(e),
						pointerEvents: e.isDisabled ? "none" : void 0
					}
				}, s.a.createElement(sc.a, {
					className: ic.a.grapple
				}), s.a.createElement("input", {
					className: ic.a.input,
					maxLength: 120,
					placeholder: `${c.fbt._("option",null,{hk:"3IGnB"})} ${e.index+1}`,
					value: e.text,
					onBlur: e.onBlur,
					onChange: t => e.onTextChange(t.currentTarget.value),
					onFocus: e.onFocus
				}), e.removable && s.a.createElement(po.a, {
					className: ic.a.trash,
					onClick: e.onRemove
				}))
			}

			function lc(e) {
				return e.isDisabled ? .5 : e.isBeingDragged ? .25 : 1
			}
			var cc = n("./src/reddit/constants/postLayout.ts"),
				dc = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				uc = n("./src/reddit/components/Econ/Prediction/NewBadge/index.m.less"),
				mc = n.n(uc);
			const {
				fbt: pc
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function hc({
				className: e
			}) {
				return s.a.createElement("div", {
					className: Object(Ge.a)(mc.a.newBadge, e)
				}, pc._("New", null, {
					hk: "2N0EBb"
				}))
			}
			var bc = n("./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx"),
				fc = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				gc = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_c = n("./src/reddit/controls/PillButton/index.m.less"),
				xc = n.n(_c);
			class Cc extends s.a.Component {
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
						disabled: i,
						hoverText: a,
						icon: l,
						id: c,
						isActive: d,
						isDarkDayMode: u,
						isNightMode: m,
						layout: p,
						onBlur: h,
						onClick: b,
						onFocus: f,
						title: g,
						tooltipId: _
					} = this.props, x = l, C = Object(Ge.a)({
						[xc.a.classic]: p === cc.g.Classic,
						[xc.a.compact]: p === cc.g.Compact,
						[xc.a.activated]: d,
						[xc.a.nightmode]: m,
						[xc.a.dark]: u,
						[xc.a.upvote]: "upvote" === o,
						[xc.a.downvote]: "downvote" === o,
						[xc.a.gold]: "gold" === o,
						[xc.a.blue]: "blue" === o,
						[xc.a.approve]: "approve" === o,
						[xc.a.remove]: "remove" === o,
						[xc.a.hasChildren]: !!t
					});
					if (this.props.href) {
						const {
							href: e,
							rel: o,
							target: i
						} = this.props;
						return s.a.createElement(fc.a, {
							"aria-label": g,
							"aria-pressed": d,
							className: Object(Ge.a)(n, C, xc.a.PostActionButton),
							"data-click-id": this.props["data-click-id"],
							"data-test-id": this.props["data-test-id"],
							id: c,
							onBlur: h,
							onClick: b,
							onFocus: f,
							onMouseEnter: this.handleMouseEnter,
							onMouseLeave: this.handleMouseLeave,
							rel: o,
							target: i,
							to: e
						}, s.a.createElement("span", {
							className: Object(Ge.a)(r, C, xc.a.buttonContent),
							id: _,
							tabIndex: -1
						}, s.a.createElement("div", {
							className: xc.a.background
						}), a && _ && s.a.createElement(gc.c, {
							text: a,
							tooltipId: _
						}), x && s.a.createElement(x, null), s.a.createElement("span", {
							className: xc.a.buttonChildren
						}, t)))
					}
					return s.a.createElement("button", {
						"aria-label": g,
						"aria-pressed": d,
						className: Object(Ge.a)(n, C, xc.a.PostActionButton),
						"data-click-id": this.props["data-click-id"],
						"data-test-id": this.props["data-test-id"],
						disabled: i,
						id: c,
						onBlur: h,
						onClick: b,
						onFocus: f,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, s.a.createElement("span", {
						className: Object(Ge.a)(r, C, xc.a.buttonContent),
						id: _,
						tabIndex: -1
					}, s.a.createElement("div", {
						className: Object(Ge.a)(xc.a.background, e)
					}), a && _ && s.a.createElement(gc.c, {
						text: a,
						tooltipId: _
					}), x && s.a.createElement(x, null), s.a.createElement("span", {
						className: xc.a.buttonChildren
					}, t)))
				}
			}
			var vc = Object(r.b)(void 0, (e, {
					tooltipId: t
				}) => ({
					tooltipSet: () => {
						t && e(Object(Vl.g)({
							tooltipId: t
						}))
					},
					tooltipUnset: () => {
						t && e(Object(Vl.j)({
							tooltipId: t
						}))
					}
				}))(Cc),
				yc = n("./src/reddit/helpers/trackers/predictions.ts"),
				Ec = n("./src/reddit/hooks/useLocalStorage.ts"),
				Oc = n("./src/reddit/components/PollCreator/PollTypePicker/index.m.less"),
				kc = n.n(Oc);

			function wc() {
				return (wc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function jc() {
				const [e] = Object(Ec.a)(dc.a.creation, !1), {
					govType: t
				} = Object(r.e)(w.s), n = Object(r.d)(), o = Object($r.a)(), i = {
					backgroundClassName: kc.a.buttonBackground,
					colorTheme: "blue",
					className: Object(Ge.a)(kc.a.button, kc.a.pollTypePickerButton),
					contentClassName: kc.a.buttonContent,
					isDarkDayMode: !1,
					isNightMode: !1,
					layout: cc.g.Compact
				};
				return s.a.createElement("div", {
					className: kc.a.pollTypePicker
				}, s.a.createElement(vc, wc({}, i, {
					isActive: t === Z.a.GA || !t,
					onClick: () => {
						n(Object(a.j)({
							oldType: t,
							type: Z.a.GA
						})), o(yc.e)
					},
					title: c.fbt._("Poll", null, {
						hk: "2uKNlH"
					})
				}), c.fbt._("Poll", null, {
					hk: "1l7ZuP"
				})), s.a.createElement(vc, wc({}, i, {
					isActive: t === Z.a.Prediction,
					onClick: () => {
						n(Object(a.j)({
							oldType: t,
							type: Z.a.Prediction
						})), o(yc.f)
					},
					title: c.fbt._("Prediction", null, {
						hk: "3wu0FO"
					})
				}), s.a.createElement("div", {
					className: kc.a.predictionLabel
				}, c.fbt._("Prediction", null, {
					hk: "1CbFag"
				}), !e && t !== Z.a.Prediction && s.a.createElement(hc, {
					className: kc.a.newBadge
				}))), t === Z.a.Prediction && s.a.createElement("div", {
					className: kc.a.education
				}, s.a.createElement(bc.a, {
					onClose: () => o(yc.c),
					onView: () => o(yc.g),
					storageKey: dc.a.creation
				})))
			}
			var Pc = n("./src/reddit/components/PollCreator/index.m.less"),
				Sc = n.n(Pc);
			const Tc = 2,
				Ic = 6,
				Mc = 7,
				Nc = "poll-creation-voting-length";
			var Dc;
			! function(e) {
				e.Options = "options", e.VotingLength = "votingLength"
			}(Dc || (Dc = {}));
			const Lc = Object(Qt.a)(ql.a);

			function Rc(e, t) {
				return `${t}-${e}`
			}
			const Fc = Object(i.c)({
				isModerator: (e, t) => {
					const {
						subredditId: n
					} = t;
					return !!n && Object(it.e)(e, {
						subredditId: n
					})
				},
				votingLengthDropdownIsOpen: e => e.tooltipId === Nc
			});
			class Bc extends s.a.Component {
				constructor(e) {
					super(e), this.handleAddOption = e => () => {
						const {
							sendEvent: t
						} = this.props;
						e.options.length < 7 && (t(Object(E.p)()), this.props.onUpdatePoll({
							...e,
							options: e.options.concat(this.makeOption())
						}))
					}, this.handleBlur = () => this.inputFocused = !1, this.handleVotingLengthDropdownClick = () => {
						const {
							sendEvent: e,
							votingLengthDropdownIsOpen: t
						} = this.props;
						t || e(Object(E.q)()), this.props.onToggleVotingLengthDropdown()
					}, this.handleChangeVotingLength = e => t => {
						this.props.onUpdatePoll({
							...e,
							duration: t
						}), this.props.onToggleVotingLengthDropdown()
					}, this.handleFocus = () => this.inputFocused = !0, this.handleOptionTextChange = (e, t) => n => {
						const o = e.options.indexOf(t);
						this.props.onUpdatePoll({
							...e,
							options: e.options.slice(0, o).concat({
								text: n
							}).concat(e.options.slice(o + 1))
						})
					}, this.handleRemoveOption = (e, t) => () => {
						this.props.onUpdatePoll({
							...e,
							options: e.options.filter(e => e !== t)
						})
					}, this.makeOption = () => ({
						text: ""
					}), this.makeDefaultPoll = () => ({
						duration: 3 * p.x,
						endDate: Yl(),
						options: Array.from({
							length: Tc
						}).map(this.makeOption)
					}), this.preventDrag = e => {
						this.inputFocused && (e.preventDefault(), e.stopPropagation())
					}, this.inputFocused = !1
				}
				componentDidMount() {
					document.addEventListener("dragstart", this.preventDrag), document.addEventListener("drop", this.preventDrag), document.addEventListener("dragover", this.preventDrag)
				}
				componentWillUnmount() {
					document.removeEventListener("dragstart", this.preventDrag), document.removeEventListener("drop", this.preventDrag), document.removeEventListener("dragover", this.preventDrag)
				}
				sectionIsDisabled(e) {
					return this.props.disabledSections && this.props.disabledSections.includes(e)
				}
				render() {
					const {
						className: e,
						allowPredictions: t,
						isModerator: n,
						poll: o = this.makeDefaultPoll()
					} = this.props, r = !Object(Z.e)(o) && t && n;
					return s.a.createElement("div", {
						"data-testid": "poll-creator"
					}, r && s.a.createElement(jc, null), s.a.createElement("div", {
						className: Object(Ge.a)(e, Sc.a.container)
					}, s.a.createElement("div", {
						className: Sc.a.options
					}, this.renderPollCreator(o), this.renderControls(o)), s.a.createElement("div", {
						className: Sc.a.help
					}, this.props.hintTextComponent)))
				}
				renderPollCreator(e) {
					const t = this.sectionIsDisabled(Dc.Options);
					return s.a.createElement(Yr.a, {
						getReactKey: Rc,
						render: (n, o, r, i, a) => s.a.createElement(ac, {
							className: Sc.a.option,
							index: o,
							isBeingDragged: r,
							isDisabled: t,
							isDropTarget: i && a,
							option: n,
							removable: o > 1,
							text: n.text,
							onBlur: this.handleBlur,
							onFocus: this.handleFocus,
							onTextChange: this.handleOptionTextChange(e, n),
							onRemove: this.handleRemoveOption(e, n)
						}),
						values: e.options,
						onDrop: (t, n, o) => this.props.onUpdatePoll({
							...e,
							options: o
						})
					})
				}
				renderControls(e) {
					const {
						pollType: t
					} = this.props, n = e.options.length >= Ic || this.sectionIsDisabled(Dc.Options), o = this.sectionIsDisabled(Dc.VotingLength), r = Math.floor(e.duration / p.x), i = t === Z.a.Prediction;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Sc.a.controls
					}, s.a.createElement(Ye.o, {
						className: Sc.a.addButton,
						disabled: n,
						onClick: this.handleAddOption(e)
					}, c.fbt._("Add Option", null, {
						hk: "hUP0k"
					})), !i && s.a.createElement("div", {
						className: Object(Ge.a)(Sc.a.votingLengthSelector, {
							[Sc.a.votingLengthSelector__disabled]: !!o
						})
					}, s.a.createElement("div", {
						className: Sc.a.votingLengthTitleText
					}, c.fbt._("Voting length:", null, {
						hk: "4pPVUg"
					})), s.a.createElement("div", {
						className: Sc.a.votingLengthDropdownContainer,
						id: Nc
					}, s.a.createElement("div", {
						className: Sc.a.votingLengthDisplay,
						onClick: this.handleVotingLengthDropdownClick
					}, s.a.createElement("div", null, c.fbt._({
						"*": "{numDays} days",
						_1: "{numDays} day"
					}, [c.fbt._param("numDays", String(r)), c.fbt._plural(r)], {
						hk: "2HsFBA"
					})), s.a.createElement(Sn.a, {
						className: Sc.a.votingLengthCaret
					})), this.renderVotingLengthDropdown(e)))), i && s.a.createElement(oc, {
						poll: e
					}))
				}
				renderVotingLengthDropdown(e) {
					const {
						votingLengthDropdownIsOpen: t
					} = this.props, n = this.handleChangeVotingLength(e);
					return s.a.createElement(Lc, {
						className: Sc.a.votingLengthDropdown,
						tooltipId: Nc,
						isOpen: t
					}, Array.from({
						length: Mc
					}).map((t, o) => {
						const r = o + 1;
						return s.a.createElement(Gl.b, {
							"data-redditstyle": !0,
							key: o,
							index: o,
							displayText: c.fbt._({
								"*": "{number} days",
								_1: "1 day"
							}, [c.fbt._plural(r, "number")], {
								hk: "bXXYo"
							}),
							isSelected: Math.floor(e.duration / p.x) === r,
							onClick: () => n(r * p.x)
						})
					}))
				}
			}
			var Ac = Object(r.b)(Fc, e => ({
					onToggleVotingLengthDropdown: () => e(Object(Vl.h)({
						tooltipId: Nc
					}))
				}))(Object(_o.c)(Bc)),
				Uc = n("./src/reddit/components/Governance/ProposalTemplates/Generic/index.m.less"),
				Wc = n.n(Uc);
			const Hc = [{
				text: "Yes"
			}, {
				text: "No"
			}];

			function Kc(e) {
				const t = {
					duration: e.poll ? e.poll.duration : p.x,
					options: e.options || Hc
				};
				return s.a.createElement("div", {
					className: Object(Ge.a)(Wc.a.container, e.className)
				}, s.a.createElement("div", {
					className: Wc.a.topline
				}, e.children.map(e => "string" == typeof e ? s.a.createElement("div", {
					className: Wc.a.text
				}, e) : e)), s.a.createElement(Ac, {
					disabledSections: [Dc.Options],
					hintTextComponent: s.a.createElement("div", {
						className: Wc.a.hintText
					}, s.a.createElement(zl, {
						subreddit: e.subreddit
					})),
					poll: t,
					onUpdatePoll: e.onUpdatePoll
				}))
			}
			var zc = n("./src/reddit/controls/FormFields/index.tsx"),
				Vc = n("./src/reddit/components/Governance/ProposalTemplates/Spinoff/index.m.less"),
				qc = n.n(Vc);
			const Gc = 3,
				Jc = 20,
				Xc = /[^(\w|_)]/g;
			const Qc = Object(i.c)({
				newSubredditName: e => e.creations.formData.newSubreddit
			});
			var Zc = Object(r.b)(Qc, e => ({
					onSubredditNameChange: t => e(Object(L.a)({
						subredditName: t
					}))
				}))((function(e) {
					return s.a.createElement(Kc, {
						className: e.className,
						options: Z.h[Z.a.Spinoff](e.newSubredditName),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, c.fbt._("Should we spin-off to", null, {
						hk: "3oKiyE"
					}), s.a.createElement(zc.c, {
						redditStyle: !0,
						className: qc.a.input,
						label: c.fbt._("subreddit name", null, {
							hk: "1qzJqB"
						}),
						max: Jc,
						min: Gc,
						type: "text",
						value: e.newSubredditName,
						onChange: t => {
							const n = t.currentTarget.value.replace(Xc, "");
							e.onSubredditNameChange(n)
						}
					}), c.fbt._("?", null, {
						hk: "1b1vhH"
					}))
				})),
				Yc = n("./src/reddit/components/Governance/ProposalTemplates/TopModReplacement/index.m.less"),
				$c = n.n(Yc);
			const ed = 20;
			const td = Object(i.c)({
				topMod: e => e.creations.formData.newTopMod
			});
			var nd = Object(r.b)(td, e => ({
					onUsernameChange: t => e(Object(L.b)({
						username: t
					}))
				}))((function(e) {
					return s.a.createElement(Kc, {
						className: e.className,
						options: Z.h[Z.a.ReplaceTopMod](),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, c.fbt._("Should", null, {
						hk: "22RF0A"
					}), s.a.createElement(zc.c, {
						redditStyle: !0,
						className: $c.a.input,
						label: c.fbt._("username", null, {
							hk: "1Fk03V"
						}),
						max: ed,
						type: "text",
						value: e.topMod,
						onChange: t => e.onUsernameChange(t.currentTarget.value)
					}), c.fbt._("become the top moderator?", null, {
						hk: "4COtce"
					}))
				})),
				od = n("./src/reddit/icons/svgs/Info/index.tsx"),
				sd = n("./src/reddit/components/PollCreator/DefaultHintText/index.m.less"),
				rd = n.n(sd);
			const id = e => [() => c.fbt._("Suggest short clear options", null, {
				hk: "4bpIfe"
			}), () => c.fbt._("The more options, the better", null, {
				hk: "37GJUq"
			}), () => e ? c.fbt._("Choose the prediction duration", null, {
				hk: "16Yw7y"
			}) : c.fbt._("Choose the poll duration", null, {
				hk: "19Gh6D"
			}), () => c.fbt._("Options can't be edited after post creation", null, {
				hk: "3iRICg"
			})];

			function ad(e) {
				const {
					isPrediction: t
				} = e;
				return s.a.createElement(o.Fragment, null, s.a.createElement("div", {
					className: rd.a.helpTitle
				}, s.a.createElement(od.a, {
					className: rd.a.infoIcon
				}), s.a.createElement("div", {
					className: rd.a.helpTitleText
				}, t ? c.fbt._("Tips on Better Predictions", null, {
					hk: "3kIzkr"
				}) : c.fbt._("Tips on Better Polls", null, {
					hk: "2QMuX9"
				}))), s.a.createElement("ol", {
					className: rd.a.helpTextList
				}, id(!!t).map(e => s.a.createElement("li", {
					className: rd.a.helpTextItem,
					key: e()
				}, e()))))
			}
			var ld = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				cd = n("./src/reddit/components/RichTextEditor/index.tsx"),
				dd = n("./src/reddit/featureFlags/component.tsx"),
				ud = n("./src/reddit/helpers/richTextEditor/index.ts"),
				md = n("./src/reddit/models/PostRequirements/index.ts"),
				pd = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				hd = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				bd = n("./src/reddit/components/PostCreationForm/PostEditor/GovTypeSelector/index.m.less"),
				fd = n.n(bd);
			const gd = Object(Qt.a)(ql.a),
				_d = [{
					Icon: hd.a,
					showNewTag: !0,
					text: () => c.fbt._("general", null, {
						hk: "2zk1er"
					}),
					type: null
				}, {
					Icon: pd.a,
					showNewTag: !1,
					text: () => c.fbt._("governance", null, {
						hk: "1wlLfQ"
					}),
					type: Z.a.GovGeneric
				}, {
					Icon: pd.a,
					showNewTag: !1,
					text: () => c.fbt._("spin-off a new community", null, {
						hk: "jNK0c"
					}),
					type: Z.a.Spinoff
				}],
				xd = "gov-type-selector-dropdown";
			const Cd = Object(i.c)({
				dropdownIsOpen: e => e.tooltipId === xd,
				govType: e => e.creations.formData.govType,
				spinoffEnabled: le.d.spSpinoffs
			});
			var vd = Object(r.b)(Cd, e => ({
					onChangeGovType: (t, n) => {
						e(Object(a.j)({
							oldType: n,
							type: t
						})), e(Object(Vl.i)())
					},
					onToggleDropdown: () => e(Object(Vl.h)({
						tooltipId: xd
					}))
				}))((function(e) {
					const t = function(e, t) {
							return _d.filter(({
								type: e
							}) => !(!t.spinoffEnabled && e === Z.a.Spinoff))
						}(0, e),
						n = t.find(t => t.type === e.govType) || t[0];
					return s.a.createElement("div", {
						className: Object(Ge.a)(fd.a.container, e.className)
					}, s.a.createElement("div", {
						className: fd.a.currentSelection,
						id: xd,
						onClick: e.onToggleDropdown
					}, s.a.createElement(n.Icon, {
						className: fd.a.pollTypeIcon
					}), s.a.createElement("div", {
						className: fd.a.text
					}, n.text()), s.a.createElement(Sn.a, {
						className: fd.a.dropdownIcon
					}), n.showNewTag && s.a.createElement("div", {
						className: fd.a.newLabel
					}, c.fbt._("new", null, {
						hk: "4iv34v"
					}))), s.a.createElement(gd, {
						className: fd.a.dropdown,
						tooltipId: xd,
						isOpen: e.dropdownIsOpen
					}, t.map((t, o) => s.a.createElement(Gl.b, {
						"data-redditstyle": !0,
						displayText: t.text(),
						isSelected: t.type === n.type,
						key: o,
						onClick: () => e.onChangeGovType(t.type, e.govType)
					}))))
				})),
				yd = n("./src/reddit/components/PostCreationForm/PostEditor/index.m.less"),
				Ed = n.n(yd);

			function Od() {
				return (Od = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const kd = Object(dd.a)("spGovPolls", vd),
				wd = (e, t) => !e && t && t.bodyRestrictionPolicy === md.a.Required,
				jd = Object(i.c)({
					canPostAsModerator: w.e,
					destSubreddit: w.h,
					draft: j.d,
					editorMode: w.n,
					govType: e => e.creations.formData.govType,
					markdownBody: w.O,
					pending: w.U,
					poll: e => e.creations.formData.polls || void 0,
					postCreationFieldErrors: Dn,
					postRequirements: w.ib,
					rteState: w.Z,
					shouldAllowBodyText: w.bb,
					subreddit: y.q
				}),
				Pd = Object(r.b)(jd, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(jt(p.ob.BODY, o)))
					},
					onFocus: () => e((e, t) => E.n(t(), f.k.CLICK, f.l.BODY)),
					onRTEStateChange: (n, o) => {
						e(a.e({
							rteState: n,
							isContentChanged: o
						})), t()
					},
					onToggleEditorMode: (t, n) => e(Bl.d(f.g.POST_CREATION, t, n)),
					onTrackToolbarClick: (t, n) => e((e, o) => E.z(o(), t, n)),
					onUpdatePoll: t => e(Object(Fl.b)(t))
				}));
			class Sd extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {}, this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onToggleEditorMode = async (e, t) => {
						await this.props.onToggleEditorMode(e, t), e === f.h.RICH_TEXT ? this.rteRef && this.rteRef.focus() : this.markdownEditorRef && this.markdownEditorRef.focus()
					}, this.setRteRef = e => this.rteRef = e, this.setMarkdownEditorRef = e => this.markdownEditorRef = e
				}
				renderEditor() {
					const {
						canPostAsModerator: e,
						destSubreddit: t,
						displayPollCreation: n,
						editorMode: o,
						markdownBody: r,
						pending: i,
						postCreationFieldErrors: a,
						postRequirements: l,
						rteState: d,
						subreddit: u
					} = this.props, m = a[p.ob.BODY].length > 0, h = !!u && u.isNSFW, b = wd(e, l) ? c.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : c.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), g = h;
					return o === f.h.RICH_TEXT ? s.a.createElement(cd.a, {
						allowMediaUploads: !g,
						focusableContentRTEClassName: Object(Ge.a)(Ed.a.focusableContent, {
							[Ed.a.mHasError]: m,
							[Ed.a.mPollBorder]: !!n
						}),
						destSubreddit: t,
						editorType: ud.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: d,
						onBlur: this.props.onBlur,
						onChange: this.props.onRTEStateChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						onSubmit: this.props.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: b,
						readOnly: i,
						rteRef: this.setRteRef,
						trackToolbarClick: this.props.onTrackToolbarClick
					}) : s.a.createElement(ld.a, {
						focusableContentMarkdownClassName: Object(Ge.a)(Ed.a.focusableContent, {
							[Ed.a.mHasError]: m,
							[Ed.a.mPollBorder]: !!n
						}),
						initialHeight: this.state.editorHeight,
						instanceRef: this.setMarkdownEditorRef,
						onBlur: this.props.onBlur,
						onChange: this.props.onChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						value: r,
						onSubmit: this.props.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: b
					})
				}
				render() {
					const {
						displayPollCreation: e,
						postCreationFieldErrors: t,
						shouldAllowBodyText: n,
						subreddit: o
					} = this.props;
					return s.a.createElement("div", null, n && this.renderEditor(), n && e && s.a.createElement("div", {
						className: Ed.a.pollCreator
					}, s.a.createElement(kd, {
						className: Ed.a.govToggle
					}), this.govType()), s.a.createElement($e.a, {
						errorModalTitle: o ? Object(X.c)(o.name) : void 0,
						messages: t[p.ob.BODY]
					}))
				}
				govType() {
					var e, t;
					const {
						govType: n,
						poll: o,
						subreddit: r
					} = this.props, i = {
						onUpdatePoll: this.props.onUpdatePoll,
						poll: o
					}, a = {
						...i,
						pollType: n
					}, l = {
						...a,
						allowPredictions: null === (e = this.props.subreddit) || void 0 === e ? void 0 : e.allowPredictions,
						subredditId: null === (t = this.props.subreddit) || void 0 === t ? void 0 : t.id
					};
					switch (n) {
						case Z.a.ReplaceTopMod:
							return r ? s.a.createElement(nd, Od({}, i, {
								subreddit: r
							})) : s.a.createElement(Ac, Od({}, a, {
								hintTextComponent: s.a.createElement(ad, null)
							}));
						case Z.a.GovGeneric:
							return s.a.createElement(Ac, Od({}, a, {
								hintTextComponent: r ? s.a.createElement(zl, {
									subreddit: r
								}) : s.a.createElement(ad, null)
							}));
						case Z.a.Spinoff:
							return r ? s.a.createElement(Zc, Od({}, i, {
								subreddit: r
							})) : s.a.createElement(Ac, Od({}, a, {
								hintTextComponent: s.a.createElement(ad, null)
							}));
						case Z.a.Prediction:
							return s.a.createElement(Ac, Od({}, l, {
								hintTextComponent: s.a.createElement(ad, {
									isPrediction: !0
								})
							}));
						case Z.a.GA:
						case null:
							return s.a.createElement(Ac, Od({}, l, {
								hintTextComponent: s.a.createElement(ad, null)
							}))
					}
				}
			}
			var Td = Object(y.t)({
					draftId: y.u,
					pageLayer: e => e
				})(Pd(Sd)),
				Id = n("./src/reddit/components/PostCreationForm/PostTitle/index.m.less"),
				Md = n.n(Id);
			const Nd = Object(i.c)({
					canPostAsModerator: w.e,
					disableTitleEdits: e => e.creations.formData.govType === Z.a.ReplaceTopMod || e.creations.formData.govType === Z.a.Spinoff,
					pending: w.U,
					postCreationFieldErrors: Dn,
					postRequirements: w.ib,
					shouldAllowBodyText: w.bb,
					submissionType: w.a,
					subreddit: y.q,
					title: w.kb
				}),
				Dd = Object(r.b)(Nd, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(jt(p.ob.TITLE, o)))
					},
					onChange: n => {
						e(a.h(n)), t(n)
					},
					onInputFocus: () => e((e, t) => E.n(t(), f.k.CLICK, f.l.TITLE))
				}));
			var Ld = Object(y.t)()(Dd(e => {
					const {
						canPostAsModerator: t,
						postRequirements: n,
						postCreationFieldErrors: o,
						subreddit: r
					} = e, i = e.submissionType === p.Lb.POST && !e.shouldAllowBodyText, a = o[p.ob.TITLE].length > 0, l = t ? qt.f : n && n.titleTextMaxLength || qt.f;
					return s.a.createElement("div", {
						className: Md.a.container
					}, s.a.createElement("div", {
						className: Md.a.inputWrapper
					}, s.a.createElement(Fr, {
						className: Object(Ge.a)(Md.a.PostTitleInput, {
							[Md.a.mHasError]: a
						}),
						disabled: e.disableTitleEdits,
						maxLength: l,
						minHeight: i ? 92 : void 0,
						onBlur: e.onBlur,
						onFocus: e.onInputFocus,
						onKeyDown: e.onKeyDown,
						onValueChange: e.onChange,
						placeholder: c.fbt._("Title", null, {
							hk: "j3s6r"
						}),
						readOnly: e.pending,
						value: e.title
					}), s.a.createElement("div", {
						className: Md.a.charsCounter
					}, e.title.length, "/", l)), s.a.createElement($e.a, {
						errorModalTitle: r ? Object(X.c)(r.name) : void 0,
						messages: o[p.ob.TITLE]
					}))
				})),
				Rd = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx");
			const Fd = "g-recaptcha",
				Bd = "image",
				Ad = {
					COMPACT: "compact",
					NORMAL: "normal"
				},
				Ud = () => new Promise(e => {
					if (window.grecaptcha) return e(window.grecaptcha);
					window.grecaptchaOnLoad = () => e(window.grecaptcha);
					const t = document.createElement("script");
					t.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaOnLoad&render=explicit", document.body.appendChild(t)
				});
			class Wd extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					const {
						callback: e,
						size: t,
						type: n
					} = this.props;
					Ud().then(o => {
						o.render(Fd, {
							callback: e,
							type: n,
							sitekey: W.a.recaptchaSitekey,
							size: t || Ad.COMPACT
						})
					})
				}
				componentWillReceiveProps(e) {
					this.props.submissionPending && !e.submissionPending && Ud().then(e => {
						e.reset()
					})
				}
				render() {
					return s.a.createElement("div", {
						className: "Recaptcha",
						id: Fd
					})
				}
			}
			var Hd = n("./src/reddit/components/PostCreationForm/RecaptchaOverlay/index.m.less"),
				Kd = n.n(Hd);
			const {
				fbt: zd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Vd = ut.a.div("OverlayWrapper", Kd.a), qd = ut.a.div("OverlayContent", Kd.a), Gd = ut.a.div("ExplanationText", Kd.a);
			var Jd = Object(r.b)(void 0, (e, t) => ({
				onChange: n => {
					e(a.f(n)), t.callback(n)
				}
			}))(e => s.a.createElement(Vd, null, s.a.createElement(qd, null, s.a.createElement(Gd, null, zd._("Ok, one more thing ... you're human, right?", null, {
				hk: "2xDwBB"
			})), s.a.createElement(Wd, {
				submissionPending: !0,
				callback: e.onChange,
				size: Ad.NORMAL,
				type: Bd
			}))));
			const Xd = "POST_CREATION__CONFIRM_SAVE_DRAFT_WITH_LIMITATIONS";

			function Qd(e) {
				const {
					hasEventSchedule: t,
					hasRichPostMedia: n
				} = e;
				let o = c.fbt._("Saving this draft will not save media and the applied event schedule, all other information will be saved", null, {
					hk: "3NIEQF"
				});
				return n && !t ? o = c.fbt._("Saving this draft will not save media, all other information will be saved", null, {
					hk: "2tpNPY"
				}) : !n && t && (o = c.fbt._("Saving this draft will not save the applied event schedule, all other information will be saved", null, {
					hk: "3wm3T3"
				})), s.a.createElement(Re.a, {
					bodyText: o,
					onClose: e.onCancel,
					onPrimaryAction: e.onConfirm,
					onSecondaryAction: e.onCancel,
					primaryButtonText: c.fbt._("Save", null, {
						hk: "1YTiSI"
					}),
					secondaryButtonText: c.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					titleText: c.fbt._("Save draft", null, {
						hk: "1RxZQJ"
					})
				})
			}
			var Zd = n("./src/reddit/components/PostCreationForm/SubredditChangePrompt/index.m.less"),
				Yd = n.n(Zd);
			const $d = {
					[f.p.ImageWillBeRemoved]: {
						removePromptTitle: () => c.fbt._("Remove image?", null, {
							hk: "3Pk53F"
						}),
						removeConfirm: () => c.fbt._("Change and remove image", null, {
							hk: "Ik8BT"
						}),
						removeCancel: () => c.fbt._("Keep image", null, {
							hk: "1e7FY0"
						}),
						details: e => c.fbt._("Aw crap, {sureddit name} doesn't allow images. If you change to {suredditName} your image will be removed.", [c.fbt._param("sureddit name", `r/${e}`), c.fbt._param("suredditName", `r/${e}`)], {
							hk: "1zQOEn"
						})
					},
					[f.p.VideoWillBeRemovedMediaNotAllowed]: {
						removePromptTitle: () => c.fbt._("Remove video?", null, {
							hk: "12xLOq"
						}),
						removeConfirm: () => c.fbt._("Change and remove video", null, {
							hk: "3izwIJ"
						}),
						removeCancel: () => c.fbt._("Keep video", null, {
							hk: "32ZDlX"
						}),
						details: e => c.fbt._("Aw crap, {sureddit name} doesn't allow videos. If you change to {suredditName} your video will be removed.", [c.fbt._param("sureddit name", `r/${e}`), c.fbt._param("suredditName", `r/${e}`)], {
							hk: "1sxEJG"
						})
					},
					[f.p.VideoWillBeRemovedTooLongForGif]: {
						removePromptTitle: () => c.fbt._("Remove video?", null, {
							hk: "12xLOq"
						}),
						removeConfirm: () => c.fbt._("Change and remove video", null, {
							hk: "3izwIJ"
						}),
						removeCancel: () => c.fbt._("Keep video", null, {
							hk: "32ZDlX"
						}),
						details: e => c.fbt._("Aw crap, {sureddit name} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF. If you change to {suredditName} your video will be removed.", [c.fbt._param("sureddit name", `r/${e}`), c.fbt._param("suredditName", `r/${e}`)], {
							hk: "34j8hI"
						})
					},
					[f.p.GalleryWillBeRemovedGalleryNotAllowed]: {
						removePromptTitle: () => c.fbt._("Remove gallery?", null, {
							hk: "4mddlm"
						}),
						removeConfirm: () => c.fbt._("Change and remove gallery", null, {
							hk: "2JB1HN"
						}),
						removeCancel: () => c.fbt._("Keep gallery", null, {
							hk: "26kW19"
						}),
						details: e => c.fbt._("Aw crap, {sureddit name} doesn't allow galleries. If you change to {suredditName} your gallery will be removed.", [c.fbt._param("sureddit name", `r/${e}`), c.fbt._param("suredditName", `r/${e}`)], {
							hk: "11irkw"
						})
					}
				},
				eu = ut.a.div("Wrapper", Yd.a),
				tu = ut.a.wrapped(ot.a, "TitleRow", Yd.a),
				nu = ut.a.div("DetailsContainer", Yd.a),
				ou = ut.a.wrapped(ot.a, "ButtonRow", Yd.a),
				su = ut.a.wrapped(Ye.i, "CancelButton", Yd.a),
				ru = ut.a.wrapped(Ye.l, "ConfirmButton", Yd.a);
			var iu = Object(ps.a)(e => {
					const {
						promptType: t,
						nextSubreddit: n
					} = e, o = $d[t];
					return s.a.createElement(eu, null, s.a.createElement(tu, null, o.removePromptTitle()), s.a.createElement(nu, null, o.details(n.name)), s.a.createElement(ou, null, s.a.createElement(ru, {
						onClick: e.onConfirmed
					}, o.removeConfirm()), s.a.createElement(su, {
						onClick: e.onCanceled
					}, o.removeCancel())))
				}),
				au = n("./src/lib/filterQueryParams/index.ts"),
				lu = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				cu = n("./src/reddit/icons/svgs/Media/index.tsx"),
				du = n("./src/reddit/icons/svgs/Text/index.tsx"),
				uu = n("./src/reddit/components/PostCreationForm/Tabs/index.m.less"),
				mu = n.n(uu);
			const pu = e => ut.a.wrapped(e, "Component", mu.a),
				hu = pu(lu.a),
				bu = pu(cu.a),
				fu = ut.a.wrapped(hd.a, "PollIcon", mu.a),
				gu = pu(du.a),
				_u = ut.a.div("Container", mu.a),
				xu = e => s.a.createElement("button", {
					className: Object(Ge.a)(mu.a.Tab, e.className, {
						[mu.a.isActive]: e.active
					}),
					disabled: e.disabled,
					onClick: e.onClick
				}, e.children),
				Cu = Object(i.a)(w.d, w.e, w.h, w.L, w.U, y.q, (e, t) => {
					const n = Object(y.m)(e, t);
					return !!n && Object(Ba.p)(e, {
						subredditId: n
					})
				}, (e, t, n, o, s, r, i) => {
					const {
						images: a = !0,
						links: l = !0,
						text: c = !0,
						videos: d = !0
					} = n.allowedPostTypes || {}, u = !!r && r.isNSFW;
					return {
						link: s || !l || o && !Object(he.g)("links"),
						media: !d && !a && !t || s || u && !i || o && !Object(he.g)("images"),
						post: !c && !t || s || o && !Object(he.g)("text"),
						poll: !e || o && !Object(he.g)("polls")
					}
				}),
				vu = Object(i.c)({
					canPostAsModerator: w.e,
					destSubreddit: w.h,
					govType: e => e.creations.formData.govType,
					isTabsDisabled: Cu,
					pending: w.U,
					submissionType: w.a,
					subreddit: y.q,
					isImageGalleryCreationEnabled: w.G
				}),
				yu = Object(r.b)(vu, (e, t) => ({
					onChange: (n, o) => {
						e(a.g({
							submissionType: n,
							extra: o
						})), e((e, t) => E.s(t(), n)), e(a.u(n === p.Lb.POLL)), ((e, t, n) => {
							if (!t) return;
							const o = Object(au.a)(t.url, n);
							t.url !== o && e(Object(m.c)(o))
						})(e, t.pageLayer, ["url", "media", "onlyTitle", "text", "selftext"])
					}
				}));
			class Eu extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostTabClick = () => {
						this.props.isTabsDisabled.post || this.props.onChange(p.Lb.POST, {
							govType: this.props.govType
						})
					}, this.onMediaTabClick = () => {
						this.props.isTabsDisabled.media || this.props.onChange(p.Lb.MEDIA, {
							govType: this.props.govType
						})
					}, this.onLinkTabClick = () => {
						this.props.isTabsDisabled.link || this.props.onChange(p.Lb.LINK_ONLY, {
							govType: this.props.govType
						})
					}, this.onPollTabClick = () => {
						this.props.isTabsDisabled.poll || this.props.onChange(p.Lb.POLL, {
							govType: this.props.govType
						})
					}
				}
				render() {
					const {
						destSubreddit: e,
						isTabsDisabled: t,
						submissionType: n,
						isImageGalleryCreationEnabled: o
					} = this.props, {
						name: r = "",
						allowedPostTypes: i
					} = e, {
						images: a = !0,
						videos: l = !0
					} = i || {};
					let d = c.fbt._("{imageOrImages} & Video", [c.fbt._param("imageOrImages", o ? "Images" : "Image")], {
						hk: "yYdjl"
					});
					return a && !l ? d = o ? c.fbt._("Images", null, {
						hk: "3fSX8N"
					}) : c.fbt._("Image", null, {
						hk: "uFHQ1"
					}) : l && !a && (d = c.fbt._("Video", null, {
						hk: "3w6DFr"
					})), s.a.createElement(_u, null, s.a.createElement(ot.a, null, s.a.createElement(xu, {
						active: n === p.Lb.POST,
						disabled: t.post,
						onClick: this.onPostTabClick
					}, s.a.createElement(gu, null), c.fbt._("Post", null, {
						hk: "ozUj2"
					})), s.a.createElement(xu, {
						active: n === p.Lb.MEDIA,
						disabled: t.media,
						onClick: this.onMediaTabClick
					}, t.media && s.a.createElement(Bt.a, {
						text: c.fbt._("Images and videos are not allowed in {subreddit name}", [c.fbt._param("subreddit name", `r/${r}`)], {
							hk: "2uC6BP"
						})
					}), s.a.createElement(bu, null), d), s.a.createElement(xu, {
						active: n === p.Lb.LINK_ONLY,
						disabled: t.link,
						onClick: this.onLinkTabClick
					}, s.a.createElement(hu, null), c.fbt._("Link", null, {
						hk: "1pbEKv"
					})), s.a.createElement(xu, {
						active: n === p.Lb.POLL,
						disabled: t.poll,
						onClick: this.onPollTabClick
					}, s.a.createElement(fu, null), c.fbt._("Poll", null, {
						hk: "SQdo4"
					}))))
				}
			}
			var Ou = Object(y.t)()(yu(Eu)),
				ku = n("./src/reddit/components/PostCreationForm/index.m.less"),
				wu = n.n(ku);
			const ju = ut.a.div("FormContent", wu.a),
				Pu = ut.a.wrapped(x.a, "CrosspostBox", wu.a),
				Su = ut.a.div("FormContainer", wu.a),
				Tu = ut.a.div("TabContent", wu.a),
				Iu = ut.a.div("PostingGuidelines", wu.a),
				Mu = Object(y.t)({
					draftId: y.u,
					isPostCreationPage: y.D,
					pageLayer: e => e,
					sourcePostId: e => Object(y.T)(e).source_id
				}),
				Nu = Object(i.c)({
					submissionType: w.a,
					allowNavigationCallback: k.a,
					contributorRequestPending: e => Object(P.g)(e, g.e.Post),
					discardGoesBack: (e, {
						pageLayer: t
					}) => {
						const n = Object(y.Q)(e, {
							pageLayer: t
						});
						return !!n && "/" === n[0]
					},
					draft: j.d,
					draftsCount: S.j,
					editorMode: w.n,
					eventSchedule: w.p,
					includeUserProfile: S.f,
					isChanged: w.B,
					isNameEditable: S.L,
					isPostSubmitEnabled: zo,
					isScheduledPost: w.L,
					flair: w.r,
					hasError: w.t,
					havePostContent: w.y,
					linkBody: w.N,
					markdownBody: w.O,
					rteBody: w.Z,
					maxDrafts: S.T,
					modalId: O.a,
					needsCaptcha: w.R,
					nextSubreddit: w.S,
					pending: w.U,
					postRequirements: w.ib,
					sourcePostRoot: w.db,
					submitMode: w.gb,
					subredditOrProfile: y.o,
					title: w.kb,
					uploads: e => e.uploads
				});
			class Du extends s.a.Component {
				constructor(e) {
					super(e), this.postFieldValidationPending = null, this.sendStartTypingInputBodyEvent = u()(() => this.props.onStartTypingInput(f.l.BODY)), this.sendStartTypingInputTitleEvent = u()(() => this.props.onStartTypingInput(f.l.TITLE)), this.sendStartTypingInputUrlEvent = u()(() => this.props.onStartTypingInput(f.l.URL)), this.onExternalAccountConnected = () => {
						this.props.onExternalAccountsDataRequested()
					}, this.onRecaptchaSucceeded = () => {
						this.props.onSubmit(this.props.submitMode, this.postFieldValidationPending)
					}, this.onDiscardPromptOnNavigationConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.discardGoesBack || this.props.onDiscardPromptOnNavigationConfirmed(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onDiscardPromptOnNewPostConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.onToggleModal(f.c), this.props.onDiscardPromptOnCreatePostConfirmed()
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
						(t || n) && o === h.a.Enter && this.onSubmit()
					}, this.onSubredditChangePromptConfirmed = () => {
						this.props.nextSubreddit && (this.props.onCancelAndRemoveMediaUpload(), this.props.onRedirectToSubreddit(this.props.nextSubreddit))
					}, this.onSubmit = () => {
						const {
							isPostSubmitEnabled: e,
							isScheduledPost: t,
							onSubmit: n
						} = this.props;
						e && n(t ? f.q.ScheduledPost : f.q.Post, this.postFieldValidationPending)
					}, this.onSaveDraft = async () => {
						const {
							draftId: e,
							draftsCount: t,
							eventSchedule: n,
							maxDrafts: o,
							onToggleModal: s
						} = this.props;
						!e && t >= o ? s(Rd.a.MAX_DRAFTS_MODAL_ID) : n || this.hasRichPostMedia() ? s(Xd) : this.props.onSubmit(f.q.Draft, this.postFieldValidationPending)
					}, this.tryLoadDraft = e => {
						this.props.isChanged ? (this.setState({
							draftToLoad: e
						}), this.props.onToggleModal(Rd.a.LOAD_DRAFT_MODAL_ID)) : (this.props.onToggleModal(f.d), this.onLoadDraft(e))
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
							case Rd.a.LOAD_DRAFT_MODAL_ID:
								this.props.onToggleModal(e), this.onLoadDraft(this.state.draftToLoad);
								break;
							case Rd.a.MAX_DRAFTS_MODAL_ID:
								this.props.onRequestDraftList(), this.props.onToggleModal(f.d);
								break;
							default:
								this.props.onToggleModal(e)
						}
					}, this.onConfirmSavingDraftWithLimitations = () => {
						this.onToggleCurrentModal(), this.props.onSubmit(f.q.Draft, this.postFieldValidationPending)
					}, this.onToggleCollectionListModal = () => {
						this.props.onToggleModal(f.a)
					}, this.onCollectionCreated = e => {
						this.onToggleCurrentModal(), this.onSelectCollection(e)
					}, this.onDraftListClose = () => {
						this.props.onToggleModal(f.d)
					}, this.onPostFieldValidation = e => {
						this.postFieldValidationPending = e
					}, this.state = {
						draftToLoad: null
					}
				}
				componentDidMount() {
					Object(b.d)(b.a.PostComposer), this.externalAccountEventsChannel = Object(Me.a)(), this.externalAccountEventsChannel.addEventListener("message", this.onExternalAccountConnected), this.props.isNameEditable && this.props.startChangeUsernameFlow()
				}
				componentWillUnmount() {
					Object(b.b)(b.a.PostComposer), this.externalAccountEventsChannel && this.externalAccountEventsChannel.close(), this.props.onUnmount()
				}
				hasRichPostMedia() {
					const {
						rteBody: e,
						submissionType: t
					} = this.props;
					return t === p.Lb.POST && e.isBound && Object(v.j)(e.editorState.getCurrentContent())
				}
				renderActiveForm() {
					switch (this.props.submissionType) {
						case p.Lb.POST:
						case p.Lb.POLL:
							return s.a.createElement(Td, {
								displayPollCreation: this.props.submissionType === p.Lb.POLL,
								onChange: this.sendStartTypingInputBodyEvent,
								onPostFieldValidation: this.onPostFieldValidation,
								onSubmit: this.onSubmit
							});
						case p.Lb.MEDIA:
							return s.a.createElement(Xa, null);
						case p.Lb.LINK_ONLY:
							return s.a.createElement(Kr, {
								onChange: this.sendStartTypingInputUrlEvent,
								onKeyDown: this.handleKeyDown,
								onPostFieldValidation: this.onPostFieldValidation
							});
						case p.Lb.CROSSPOST: {
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
						default:
							return "Invalid submissionType"
					}
				}
				render() {
					const {
						contributorRequestPending: e,
						draftId: t,
						includeUserProfile: n,
						modalId: o,
						needsCaptcha: r,
						nextSubreddit: i,
						postRequirements: a,
						sourcePostId: l,
						sourcePostRoot: d,
						submissionType: u,
						submitMode: m,
						subredditOrProfile: h
					} = this.props;
					if (u === p.Lb.CROSSPOST) {
						if (!d) return s.a.createElement(_.b, {
							message: c.fbt._("The original post cannot be found", null, {
								hk: "3ieS5B"
							})
						});
						if (!d.isCrosspostable || d.isSponsored) return s.a.createElement(_.a, {
							message: c.fbt._("The original post cannot be crossposted", null, {
								hk: "4hn9ht"
							})
						})
					}
					const b = a && a.guidelinesText && a.guidelinesText.trim() || "";
					return s.a.createElement(Su, null, s.a.createElement(Rl, {
						submissionType: u,
						submitMode: m
					}), s.a.createElement(ds, {
						includeUserProfile: n,
						allowCrosspostableOnly: !!l
					}), !!b && s.a.createElement(Iu, null, b), s.a.createElement(ju, null, u !== p.Lb.CROSSPOST && s.a.createElement(Ou, null), s.a.createElement(Tu, null, s.a.createElement(Ld, {
						onChange: this.sendStartTypingInputTitleEvent,
						onKeyDown: this.handleKeyDown,
						onPostFieldValidation: this.onPostFieldValidation
					}), this.renderActiveForm()), e && s.a.createElement(C.a, null), s.a.createElement(Zo, {
						contributorRequestPending: e,
						draftId: t,
						onCancel: this.props.onDiscardPromptOnNavigationConfirmed,
						onPostFieldValidation: this.onPostFieldValidation,
						onSaveDraft: this.onSaveDraft,
						onSubmit: this.onSubmit,
						sourcePostId: l
					}), s.a.createElement(Ol, {
						draftId: t
					})), r && s.a.createElement(Jd, {
						callback: this.onRecaptchaSucceeded
					}), o === Fe && s.a.createElement(Ae, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNavigationConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: u
					}), o === f.c && s.a.createElement(Ae, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNewPostConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: u
					}), o === f.d && s.a.createElement(Er, {
						onClose: this.onDraftListClose,
						onLoadDraft: this.tryLoadDraft
					}), o === f.a && h && s.a.createElement(qe.a, {
						onClose: this.onToggleCollectionListModal,
						onSelectCollection: this.onSelectCollection,
						subredditId: h.id
					}), o === f.b && h && s.a.createElement(Yo.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.onCollectionCreated,
						subredditId: h.id
					}), o === Rd.a.LOAD_DRAFT_MODAL_ID && s.a.createElement(Rd.b, {
						modalId: Rd.a.LOAD_DRAFT_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), o === Rd.a.MAX_DRAFTS_MODAL_ID && s.a.createElement(Rd.b, {
						modalId: Rd.a.MAX_DRAFTS_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), o === Xd && s.a.createElement(Qd, {
						onCancel: this.onToggleCurrentModal,
						onConfirm: this.onConfirmSavingDraftWithLimitations,
						hasEventSchedule: !!this.props.eventSchedule,
						hasRichPostMedia: this.hasRichPostMedia()
					}), i && (o === f.p.ImageWillBeRemoved || o === f.p.VideoWillBeRemovedTooLongForGif || o === f.p.VideoWillBeRemovedMediaNotAllowed || o === f.p.GalleryWillBeRemovedGalleryNotAllowed) && s.a.createElement(iu, {
						withOverlay: !0,
						promptType: o,
						nextSubreddit: i,
						onConfirmed: this.onSubredditChangePromptConfirmed,
						onCanceled: this.props.onCancelSubredditChange
					}), s.a.createElement(Ve, null))
				}
			}
			var Lu = Mu(Object(r.b)(Nu, (e, {
					draftId: t,
					sourcePostId: n,
					pageLayer: o
				}) => ({
					onLoadDraft: t => e(F.q(t)),
					onSubmit: (s, r) => e(((e, t) => async (n, o, {
						apiContext: s
					}) => {
						let r = o();
						const {
							pending: i
						} = r.creations.api.post.submit, a = Object(j.g)(r);
						if (i || a) return;
						n(Ee(e)), r = o();
						const l = Object(w.a)(r),
							c = le.d.rteVideoPoster(r),
							d = we(r),
							u = l === p.Lb.MEDIA;
						d && (c || u) && (await n(M.f(d)), we(o())) || (e === f.q.Draft ? await n(Object(F.r)(t.draftId)) : e === f.q.ScheduledPost && Object(pe.r)(r) ? await n(je(t)) : e === f.q.ScheduledPost ? await n(Pe(t)) : await n(Se(t)))
					})(s, {
						draftId: t || void 0,
						pageLayer: o,
						postFieldValidationPending: r,
						sourcePostId: n
					})),
					onDiscardPromptOnCreatePostConfirmed: () => {
						e(a.o(!1, o))
					},
					onDiscardPromptOnNavigationConfirmed: (t, n) => {
						e(t ? Object(m.a)() : n ? Object(m.b)(n.url) : Object(m.b)("/"))
					},
					onExternalAccountsDataRequested: () => e(I.o()),
					onRedirectToSubreddit: n => e(Te.a(n, t)),
					onCancelSubredditChange: () => {
						e(a.w("")), e(Te.e())
					},
					onCancelAndRemoveMediaUpload: () => {
						e(Object(a.d)({
							items: [],
							selectedKey: null
						})), e(Ie.j(M.a, !0))
					},
					onClearErrors: (t, n) => t && e(a.i(n)),
					onRequestDraftList: () => e(F.p()),
					onSetDestCollection: t => e(Te.d(t)),
					onStartTypingInput: t => e((e, n) => E.n(n(), f.k.TYPE, t)),
					onToggleIsChanged: t => e(a.q(t)),
					onToggleModal: t => e(a.w(t)),
					onTrackDiscardButtonClick: () => e((e, t) => E.c(t())),
					onUnmount: () => e((e, t) => {
						e(Ie.j(M.a, !0)), e(Ie.i(f.m, !0))
					}),
					onUploadPendingThumbnails: t => e(M.f(t)),
					startChangeUsernameFlow: () => e(Object(T.f)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onClearErrors: n => t.onClearErrors(e.hasError || e.hasSubmitValidationError, n),
					onDiscardPromptOnNavigationConfirmed: () => t.onDiscardPromptOnNavigationConfirmed(e.discardGoesBack, e.subreddit)
				}))(Du)),
				Ru = n("./src/reddit/components/PostingSidebar/index.tsx"),
				Fu = n("./src/reddit/layout/page/Listing/index.tsx"),
				Bu = n("./src/lib/makePostCreationPageKey/index.ts"),
				Au = n("./src/reddit/helpers/trackers/screenview.ts"),
				Uu = n("./src/telemetry/models/Timer.ts");
			const Wu = Object(i.c)({
					destSubreddit: w.h,
					user: S.i
				}),
				Hu = Object(r.b)(Wu, (e, {
					pageLayer: t
				}) => ({
					onResetForm: () => e(a.o(!1, t))
				})),
				Ku = Object(y.t)({
					draftId: y.u,
					pageLayer: e => e
				});
			class zu extends o.Component {
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0;
					const e = this.props.pageLayer;
					if (e) {
						const t = Object(Bu.a)(e.urlParams);
						D.c.has(t) && this.props.sendEvent(Object(Au.l)(t, Uu.TimerType.InApp, D.c.end(t)))
					}
				}
				componentWillReceiveProps(e) {
					this.props.draftId && !e.draftId && e.onResetForm()
				}
				render() {
					const {
						destSubreddit: e,
						user: t
					} = this.props;
					if (e.isProfile) {
						if (!t) return s.a.createElement(_.b, null);
						if (Object(me.e)(t).toLowerCase() !== e.name.toLowerCase()) return s.a.createElement(_.a, null)
					}
					return s.a.createElement(Fu.a, {
						redditStyle: !0,
						disableFullscreen: !0,
						navBar: s.a.createElement("div", null),
						content: s.a.createElement(s.a.Fragment, null, s.a.createElement(l.a, null), s.a.createElement(Lu, null)),
						sidebar: s.a.createElement(Ru.a, null)
					})
				}
			}
			t.default = Ku(Hu(Object(_o.c)(zu)))
		},
		"./src/reddit/selectors/experiments/econ/simpleExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => t => {
				const n = Object(s.c)(t, {
					experimentEligibilitySelector: s.a,
					experimentName: e
				});
				return !(!n || Object(o.qd)(n))
			}
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: o.sc
				}) === o.Bc.Enabled
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "j", (function() {
				return w
			}));
			var o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts");
			const r = [],
				i = {},
				a = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				l = (e, {
					subredditId: t
				}) => {
					const n = v(e, {
						subredditId: t
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				c = (e, t) => {
					const n = x(e, t);
					if (n) return n.mainHeader
				},
				d = (e, t) => {
					const n = x(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				u = (e, t) => {
					const n = x(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : i
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				p = (e, t) => {
					const n = m(e, t),
						o = n && n.publicAddress;
					if (!o) throw new Error("No wallet address found");
					return o
				},
				h = (e, t) => {
					const n = m(e, t);
					return n && n.amount || "0"
				},
				b = (e, t) => {
					const n = Object(o.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || r
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				g = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || a,
				_ = (e, t) => {
					const n = O(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				x = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				C = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				v = (e, t) => {
					const n = C(e, t);
					return n && n.walletProvider
				},
				y = (e, t) => {
					const n = v(e, t),
						o = C(e, t);
					return n && n.provider || o && o.provider
				},
				E = (e, t) => {
					const n = y(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby
				},
				O = (e, t) => {
					const n = v(e, t),
						o = y(e, t);
					if (n && !n.inTransition && o === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const r = n && n.extra && n.extra.contracts,
						i = r && r.unlocked;
					return i && {
						address: i.address,
						symbol: i.token || "",
						decimals: i.decimals || 18,
						image: i.image
					}
				},
				k = (e, {
					subredditId: t
				}) => {
					const n = v(e, {
						subredditId: t
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				w = (e, t) => {
					const n = C(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}));
			const o = (e, {
					commentId: t,
					commentsPageKey: n
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[n] && t in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][t];
					const o = e.features.comments.models[t];
					return !!o && ("computedCollapsed" in o ? !!o.computedCollapsed : o.collapsedBecauseCrowdControl ? !e.modModeEnabled : o.collapsed)
				},
				s = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		},
		"./src/reddit/selectors/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			const o = e => e.tooltipId,
				s = e => t => t.tooltipId === e
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation.0fac9dc152b354736fec.js.map