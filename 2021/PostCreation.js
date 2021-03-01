// https://www.redditstatic.com/desktop2x/PostCreation.37be53e882ee2ff49833.js
// Retrieved at 3/1/2021, 12:20:19 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation", "ChatMessageInput~MembershipPaywallPage~RichTextEditor", "ModListing~Reddit~StandalonePostPage"], {
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
		"./src/graphql/operations/SubredditTypeaheadSearch.json": function(e) {
			e.exports = JSON.parse('{"id":"20edc5ee12df"}')
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
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/overlayEvents.ts");

			function u(e, t) {
				class n extends i.Component {
					constructor(e) {
						super(e), this.handleKeyDown = e => {
							e.keyCode === l.F && this.props.onKeyDown(e)
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
				return Object(c.b)(null, e => ({
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
				return f
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/FocusTrap/index.ts"),
				a = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/components/Portal/index.tsx"),
				l = n("./src/reddit/constants/shortcuts.ts"),
				d = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
				p = n.n(u);

			function m() {
				return (m = Object.assign || function(e) {
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
			}) => s.a.createElement("div", m({
				className: Object(r.a)(p.a.overlay, e, {
					[p.a.mIsVisible]: t
				})
			}, n));

			function f(e) {
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
							...m
						} = t, f = m;
						return s.a.createElement(c.a, {
							container: document.getElementById(l.b)
						}, s.a.createElement(h, {
							className: a,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: d
						}, s.a.createElement("div", {
							"aria-modal": !0,
							className: Object(r.a)(p.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, s.a.createElement(e, f))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/asTooltip.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return y
			}));
			var o = n("./node_modules/lodash/omit.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/fastdom/index.ts"),
				l = n("./src/reddit/components/Portal/index.tsx"),
				d = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				u = n("./src/higherOrderComponents/sizeMe.tsx"),
				p = n("./src/reddit/components/HiddenDiv.m.less"),
				m = n.n(p),
				h = n("./src/lib/lessComponent.tsx").a.div("Component", m.a),
				f = n("./src/reddit/hooks/useCoreStyleExperiments.ts");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const g = ["left", "bottom"],
				x = ["left", "top"],
				C = ({
					container: e,
					containerHeight: t,
					excludeContainerPosition: n,
					isFixed: o,
					targetBox: s,
					isOverlayOff: r,
					targetPosition: i,
					tooltipSize: a,
					tooltipPosition: c
				}) => {
					const l = document.body,
						d = l.clientTop || 0,
						u = l.clientLeft || 0,
						[p, m, h, f] = e ? [e.scrollLeft, e.scrollTop, e.scrollWidth, t || e.scrollHeight] : [window.pageXOffset, window.pageYOffset, window.innerWidth, document.body.scrollHeight],
						b = {
							bottom: s.bottom,
							center: s.top + s.height / 2,
							top: s.top
						} [i[1]] + {
							bottom: -a.height,
							center: -a.height / 2,
							top: 0
						} [c[1]],
						g = {
							left: s.left,
							center: s.left + s.width / 2,
							right: s.right
						} [i[0]] + {
							left: 0,
							center: -a.width / 2,
							right: -a.width
						} [c[0]];
					let x, C;
					o ? (x = b - d, C = g - u) : (C = p + u + g, x = m + d + b);
					const y = {
							left: C,
							top: x
						},
						E = {
							bottom: Math.max(0, x + a.height - f),
							left: Math.max(0, 0 - C),
							right: Math.max(0, C + a.width - h),
							top: Math.max(0, 0 - x)
						};
					if (h > 320 && f > 667 && !r && (Boolean(E.left) !== Boolean(E.right) && (E.left ? y.left = 0 : y.left -= E.right), Boolean(E.top) !== Boolean(E.bottom) && (E.top ? y.top = 0 : y.top -= E.bottom)), n && e) {
						const t = e.getBoundingClientRect();
						y.top = y.top - t.top, y.left = y.left - t.left
					}
					return {
						overflow: E,
						style: y
					}
				};

			function y(e, t) {
				const n = Object(d.b)(e, t),
					o = Object(u.a)(e => {
						const t = Object(f.b)(),
							{
								container: o,
								containerHeight: r,
								domEl: c,
								excludeContainerPosition: l,
								isFixed: d,
								target: u,
								isOverlayOff: p,
								targetPosition: m,
								tooltipPosition: h
							} = e;
						if (!u || !c) return null;
						const y = c.getBoundingClientRect(),
							E = u.getBoundingClientRect(),
							v = C({
								container: o,
								containerHeight: r,
								excludeContainerPosition: l,
								isOverlayOff: p,
								isFixed: !!d,
								targetBox: E,
								targetPosition: m || g,
								tooltipSize: {
									height: y.height,
									width: y.width
								},
								tooltipPosition: h || x
							}),
							_ = s()(e, "target", "targetPosition", "tooltipPosition"),
							O = e.style ? {
								...v.style,
								...e.style
							} : v.style;
						return i.a.createElement(n, b({}, _, {
							className: Object(a.a)(e.className, t ? "isInIcons2020" : "isNotInIcons2020"),
							overflow: v.overflow,
							style: O,
							targetBox: E
						}))
					});
				class p extends r.Component {
					constructor() {
						super(...arguments), this.state = {
							containerHeight: null,
							isOpen: !1,
							mounted: !1
						}, this.target = null
					}
					componentDidMount() {
						this.target = this.props.tooltipTarget || document.getElementById(this.props.tooltipId), this.props.isOpen && c.a.write(() => {
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
						} = this.state, c = s()(this.props, "isOpen"), d = t ? this.target : n, u = `${e}-${a}-${t||""}`;
						return i.a.createElement(l.a, {
							key: u,
							container: this.props.container
						}, i.a.createElement(o, b({}, c, {
							containerHeight: r,
							target: d
						})))
					}
				}
				return p
			}
		},
		"./src/higherOrderComponents/sizeMe.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/omit.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-dom/index.js"),
				c = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
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
			const p = ({
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
			p.displayName = "SizeMePlaceholder", t.a = function(e) {
				const t = function(e) {
					const t = t => {
						const {
							domEl: n,
							explicitRef: o,
							placeholder: r,
							size: a,
							style: c
						} = t, d = s()(t, "explicitRef", "size", "style"), m = "object" != typeof a || "number" != typeof a.width && "number" != typeof a.height, h = {
							domEl: n,
							style: c
						};
						"object" == typeof a && (h.size = a);
						const f = m && !1 !== r ? i.a.createElement(p, {
							style: c
						}) : i.a.createElement(e, l({}, h, d));
						return i.a.createElement(u, {
							ref: o
						}, f)
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
						const e = this.reactInst && c.a.findDOMNode(this.reactInst);
						e ? (this.domEl = e, this.checkIfSizeChanged(this.domEl)) : this.domEl && (this.domEl = null)
					}
					render() {
						const e = {
							...this.state
						};
						return i.a.createElement(t, l({
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
		"./src/lib/forEachGroup/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const o = e => e;

			function s(e, t, n) {
				const [s, r] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: i = o
				} = t || {};
				let {
					start: a = 0,
					end: c = s
				} = t || {};
				if ((a = a < 0 ? 0 : a) >= (c = c > s ? s : c)) return;
				let l = r(a),
					d = i(l, a),
					u = a;
				for (let o = a + 1; o < c; o++) {
					const e = r(o),
						t = i(e, o);
					if (t !== d) {
						if (!1 === n(l, d, u, o)) return;
						d = t, u = o, l = e
					}
				}
				n(l, d, u, c)
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
				c = {};
			for (const l of i) c[l] = (e, t) => a(l, e, t);
			t.a = {
				...c,
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
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "h", (function() {
				return v
			}));
			var o = n("./node_modules/linkify-it/index.js"),
				s = n.n(o),
				r = n("./node_modules/tlds/index.js"),
				i = n.n(r),
				a = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./node_modules/lodash/values.js"),
				l = n.n(c);
			const d = e => l()(a.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				m = s()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				h = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				f = p(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				b = p(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				g = s()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				x = m.normalize;
			m.normalize = e => {
				x.call(m, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const C = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				y = e => {
					return [...b.match(e) || [], ...h.match(e) || []].map(e => !d(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				E = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				v = e => {
					const t = m.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
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
				return Q
			})), n.d(t, "o", (function() {
				return X
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
				return ce
			})), n.d(t, "b", (function() {
				return ue
			})), n.d(t, "p", (function() {
				return pe
			})), n.d(t, "f", (function() {
				return me
			})), n.d(t, "g", (function() {
				return he
			})), n.d(t, "j", (function() {
				return fe
			})), n.d(t, "d", (function() {
				return ge
			})), n.d(t, "c", (function() {
				return Ee
			})), n.d(t, "i", (function() {
				return ve
			})), n.d(t, "h", (function() {
				return Se
			})), n.d(t, "k", (function() {
				return je
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeDraftKey/index.ts"),
				a = n("./src/reddit/actions/changeUsername.ts"),
				c = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				p = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				m = n("./src/reddit/actions/shortcuts/utils.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				b = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/graphql/operations/CommentToxicity.json"),
				x = n("./src/lib/makeApiRequest/index.ts"),
				C = n("./src/lib/makeGqlRequest/index.ts"),
				y = n("./src/lib/omitHeaders/index.ts"),
				E = n("./src/reddit/constants/headers.ts"),
				v = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				_ = n("./src/reddit/helpers/genericServerError/index.ts"),
				O = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				k = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				j = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const T = (e, t, n, o) => {
					let s, r;
					if (o === S.h.MARKDOWN) s = n.text, r = null;
					else {
						s = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(C.a)(e, {
						...g,
						variables: {
							subredditName: t,
							markdown: s,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				I = async (e, t, n, o, r) => {
					const i = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === S.h.MARKDOWN) i.text = n.text;
					else {
						i.text = null;
						let e = null;
						n.rteState && (e = f.a.toRichTextJSON(n.rteState).document), i.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(x.a)(Object(y.a)(e, [E.a]), {
						method: s.cb.POST,
						endpoint: Object(v.a)(Object(j.a)(Object(w.a)(`${e.apiUrl}/api/comment.json`))),
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
						error: e.error || Object(_.a)()
					})
				};
			var P = n("./src/reddit/endpoints/post/index.tsx"),
				M = n("./src/reddit/endpoints/post/convert.ts"),
				N = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				R = n("./src/reddit/featureFlags/index.ts"),
				D = n("./src/reddit/helpers/dom/index.ts"),
				B = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				L = n("./src/reddit/models/PostDraft/index.ts"),
				F = n("./src/reddit/models/RichTextJson/index.ts"),
				A = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				K = n("./src/reddit/models/Toast/index.ts"),
				U = n("./src/reddit/selectors/comments.ts"),
				H = n("./src/reddit/selectors/commentSelector.ts"),
				W = n("./src/reddit/selectors/platform.ts"),
				z = n("./src/reddit/selectors/posts.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				q = n("./src/reddit/actions/comment/index.ts"),
				G = n("./src/reddit/actions/comment/constants.ts");
			const J = Object(r.a)(G.j),
				Q = ({
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
				}, Z = Object(r.a)(G.E), X = Object(r.a)(G.G), Y = Object(r.a)(G.F), $ = Object(r.a)(G.D), ee = (e, t, n, o) => {
					const s = o.ok && o.body,
						r = s && s.comment && s.comment.id;
					B.f(e, n, t, r)
				}, te = "Toxicity_Warning__Modal", ne = (e, t, n, o, s, r) => async (i, a, {
					gqlContext: c
				}) => {
					const d = a(),
						u = Object(W.e)(d);
					let p = "";
					if (u && (p = u.name), R.d.enableToxicityWarning(d)) {
						if (!(await T(c(), p, o, s))) return void i(Object(l.i)(te))
					}
					i(se(e, t, n, o, s, r))
				}, oe = e => e.rteState ? f.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, se = (e, t, n, r, i, a, c) => async (u, f, {
					apiContext: g
				}) => {
					u(Object(l.g)(te));
					const x = f(),
						C = x.features.comments.submit.pending[n];
					if (!x.user.account || C) return;
					u(Z({
						draftKey: n,
						draft: r
					}));
					const y = x.user.account.displayText,
						E = r.commentMode;
					let v;
					if (c ? (v = await Object(N.j)(g(), e, r, y), u(Object(p.a)({
							streamId: e,
							level: v.body.automuteLevel
						}))) : v = await I(g(), e, r, y, E), v.ok) {
						let o;
						o = v.body, u(X({
							...o,
							headCommentId: Object(U.w)(x, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const s = Object(z.I)(f(), {
							postId: e
						});
						u(Object(d.u)(s, b.a.CommentSubmitted))
					} else {
						v.error && v.error.type === s.Ab && B.g(x, oe(r), e);
						const t = v.error && v.error.fields && v.error.fields[0] ? v.error.fields[0].msg : o.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u($({
							draftKey: n,
							error: v.error
						})), u(Object(h.e)({
							duration: h.a,
							kind: K.b.Error,
							text: t
						}))
					}
					ee(f(), t, i, v), a || Object(m.d)()
				}, re = e => async (t, n, {
					gqlContext: o
				}) => {
					const {
						parentCommentId: s,
						commentsPageKey: r,
						parentCommentDepth: i,
						draftKey: a,
						formData: c,
						editorMode: d
					} = e, u = n(), p = Object(W.e)(u);
					let m = "";
					if (p && (m = p.name), R.d.enableToxicityWarning(u)) {
						if (!(await T(o(), m, c, d))) return void t(Object(l.i)(te))
					}
					t(ie({
						commentsPageKey: r,
						draftKey: a,
						parentCommentDepth: i,
						parentCommentId: s,
						formData: c,
						editorMode: d
					}))
				}, ie = e => async (t, n, {
					apiContext: o
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: i,
						parentCommentDepth: a,
						draftKey: c,
						formData: d,
						editorMode: u
					} = e;
					t(Object(l.g)(te));
					const p = n(),
						h = p.features.comments.submit.pending[c];
					if (!p.user.account || h) return;
					t(Z({
						draftKey: c,
						draft: d
					}));
					const f = p.user.account.displayText,
						b = d.commentMode,
						g = await I(o(), r, d, f, b);
					if (g.ok) t(Y({
						...g.body,
						parentCommentId: r,
						commentsPageKey: i,
						draftKey: c,
						depth: a + 1
					}));
					else {
						if (g.error && g.error.type === s.Ab) {
							const e = Object(H.a)(p, {
								commentId: r
							});
							if (!e) return;
							B.g(p, oe(d), e.postId, r)
						}
						t($({
							draftKey: c,
							error: g.error
						}))
					}
					ee(n(), i, u, g), Object(m.d)()
				}, ae = Object(r.a)(G.p), ce = Object(r.a)(G.o), le = Object(r.a)(G.k), de = (Object(r.a)(G.f), Object(r.a)(G.l)), ue = (Object(r.a)(G.s), (e, t, n) => async (s, r, {
					apiContext: i
				}) => {
					const a = e === S.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(F.G)(t)) s(de({
						editorMode: e,
						draftKey: n,
						content: a ? F.i : ""
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
							kind: K.b.Error,
							text: o.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), pe = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (o, s) => {
					const r = s(),
						d = Object(i.a)(L.c.replyToComment, t);
					if (!Object(V.J)(s())) return o(Object(c.i)()), void o(Object(l.k)({
						actionSource: l.a.Reply,
						redirectUrl: Object(U.m)(s(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						p = u && u[t];
					if ((p || u && n) && (Object.keys(u).forEach(t => u[t] && o(ce({
							parentCommentId: t,
							commentsPageKey: e
						}))), p)) return;
					let m = "",
						h = null;
					const f = r.user.prefs.commentMode,
						b = Object(D.d)();
					if (b) {
						const e = b.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (f === S.h.MARKDOWN) m = e.map(e => `> ${e}\n`).join("");
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
					let x;
					if (x = b ? {
							commentMode: f,
							draftType: L.c.replyToComment,
							rtJson: h,
							text: `${m}\n`
						} : g || {
							commentMode: f,
							draftType: L.c.replyToComment,
							rtJson: h,
							text: ""
						}, Object(V.L)(r)) {
						const n = ae({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: d,
							formData: x
						});
						o(Object(a.f)(n))
					} else o(ae({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: d,
						formData: x
					}))
				}, me = e => async t => {
					t(Object(q.m)(e)), t(ge(e))
				}, he = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(ce({
						parentCommentId: e,
						commentsPageKey: t
					})), n(pe({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(q.m)({
						commentId: e,
						commentsPageKey: t
					}))
				}, fe = (e, t) => n => n(le({
					draftKey: e,
					formData: t
				})), be = Object(r.a)(G.r), ge = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: o,
					text: s
				}) => async (r, i) => {
					const a = i();
					a.user.account && (B.c(a), r(be({
						commentId: e,
						commentsPageKey: n,
						draftKey: o,
						formData: {
							text: s,
							commentMode: t,
							rteState: null,
							draftType: L.c.edit,
							hasFocus: !0
						}
					})))
				}, xe = Object(r.a)(G.A), Ce = Object(r.a)(G.z), ye = Object(r.a)(G.B), Ee = Object(r.a)(G.g), ve = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: o,
					formData: r
				}) => async (n, i, {
					apiContext: a
				}) => {
					const c = i();
					if (!c.user.account) return;
					n(xe({
						draftKey: o
					})), B.d(c);
					const l = c.user.account.displayText || "",
						d = r.commentMode,
						u = await (async (e, t, n, o, r, i) => {
							const a = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (i === S.h.MARKDOWN) a.text = o.text;
							else {
								a.text = null;
								let e = null;
								o.rteState && (e = f.a.toRichTextJSON(o.rteState).document), a.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(x.a)(Object(y.a)(e, [E.a]), {
								endpoint: Object(v.a)(Object(w.a)(Object(j.a)(`${e.apiUrl}/api/editusertext`))),
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
								error: e.error || Object(_.a)()
							})
						})(a(), e, 0, r, l, d);
					if (u.ok) {
						const s = u.body;
						n(ye({
							commentId: e,
							commentsPageKey: t,
							draftKey: o
						})), n(Object(q.h)({
							[e]: {
								...s.comment
							}
						}))
					} else n(Ce({
						draftKey: o,
						error: u.error
					}))
				}, _e = Object(r.a)(G.x), Oe = Object(r.a)(G.w), ke = Object(r.a)(G.y), Se = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o();
					n(_e({
						id: e
					})), B.a(e, i);
					const a = await ((e, t) => Object(x.a)(Object(y.a)(e, [E.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/del`),
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
						error: e.error || Object(_.a)()
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
					})), (await Object(P.q)(o(), e, s)).ok || t(Object(q.h)({
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
				return w
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "n", (function() {
				return L
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "e", (function() {
				return K
			})), n.d(t, "l", (function() {
				return W
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
				c = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/actions/vote.ts"),
				m = n("./src/reddit/endpoints/comment/index.tsx"),
				h = n("./src/reddit/helpers/commentList/index.ts"),
				f = n("./src/reddit/selectors/telemetry.ts");
			var b = n("./src/reddit/models/Comment/index.ts"),
				g = n("./src/reddit/models/Post/index.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/models/Vote/index.ts"),
				y = n("./src/reddit/selectors/comments.ts"),
				E = n("./src/reddit/selectors/commentSelector.ts"),
				v = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				_ = n("./src/reddit/selectors/moderatingComments.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/actions/comment/constants.ts");
			const S = {},
				j = Object(i.a)(k.n),
				w = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(O.J)(n())) return t(Object(c.i)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(y.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const i = r.isSaved ? m.k : m.g;
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
							kind: x.b.Undo,
							buttonText: o,
							buttonAction: w(e)
						}))
					} else t(j({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, T = e => `viewing-comment-${e}`, I = o.a.telemetry.commentConsumedThreshold, P = e => async (t, n) => {
					const s = n();
					if (!Object(E.a)(s, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					(({
						state: e,
						commentId: t
					}) => Object(r.a)({
						source: "comment",
						action: "view",
						noun: "comment",
						...f.defaults(e),
						profile: f.profile(e),
						post: f.post(e, t),
						media: f.media(e, t),
						subreddit: f.subreddit(e),
						comment: f.comment(e, t)
					}))({
						state: s,
						commentId: e
					}), r.c.start(T(e));
					const i = setTimeout(() => (({
						state: e,
						commentId: t
					}) => Object(r.a)({
						source: "comment",
						action: "consume",
						noun: "comment",
						...f.defaults(e),
						profile: f.profile(e),
						post: f.post(e, t),
						media: f.media(e, t),
						subreddit: f.subreddit(e),
						comment: f.comment(e, t)
					}))({
						state: s,
						commentId: e
					}), I);
					S[e] = i
				}, M = (e, t) => async (n, o) => {
					const s = o(),
						i = T(e);
					if (Object(E.a)(s, {
							commentId: e
						}) && r.c.has(i)) {
						const n = r.c.end(i);
						!t && n < I && (clearTimeout(S[e]), delete S[e])
					}
				}, N = Object(i.a)(k.v), R = Object(i.a)(k.u), D = Object(i.a)(k.t), B = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						i = r.moreComments.models[t],
						c = r.platform.currentPage,
						l = c && c.routeMatch,
						d = l && l.match,
						{
							partialPostId: u
						} = d ? d.params : null;
					if (!u) return;
					const p = Object(g.r)(u);
					n(N({
						moreCommentsId: i.id
					}));
					const f = await Object(m.e)(s(), p, {
						token: i.token
					}, Object(v.a)(r));
					if (f.ok) {
						const t = f.body,
							o = Object(h.a)(t, p, r);
						n(R({
							key: e,
							moreCommentsItem: i,
							shouldCollapse: o,
							...t
						}));
						const s = r.posts.models[p];
						s && "subreddit" === s.belongsTo.type && t.comments && await n(Object(a.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [s.id],
							skip: ["communityDetails", "subscription"],
							subredditId: s.belongsTo.id
						}))
					} else n(D({
						moreCommentsItem: i,
						...f.error
					}))
				}, L = Object(p.a)(h.b, C.a.upvoted), F = Object(p.a)(h.b, C.a.downvoted), A = Object(i.a)(k.i), K = Object(i.a)(k.h), U = Object(i.a)(k.d), H = Object(i.a)(k.e), W = (Object(i.a)(k.b), Object(i.a)(k.c), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (o, s) => {
					const r = s(),
						i = Object(b.g)(e),
						a = Object(y.n)(r, {
							commentLink: i,
							commentsPageKey: t
						}),
						c = Object(_.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						l = a.depth;
					o(U({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== l || n(e, !0), Object(d.d)()
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
						c = Object(_.b)(i, {
							commentId: e.id,
							commentsPageKey: t
						});
					s(U({
						commentId: a,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === n && o(a, !0), Object(d.d)()
				}, q = Object(i.a)(k.q), G = e => t => t(q({
					draftKey: e
				})), J = Object(i.a)(k.a)
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			}));
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const l = Object(a.a)(c.a),
				d = Object(a.a)(c.b),
				u = Object(a.a)(c.c),
				p = e => async (t, n, {
					apiContext: o
				}) => {
					const s = e && e.includeMemberships || !1,
						a = e && e.forceFetch || !1,
						c = n();
					if (!c.economics.me.fetched || s && !c.economics.me.data.specialMemberships || a) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(o(), s);
						if (e.ok) {
							const n = e.body;
							s && !n.specialMemberships && (n.specialMemberships = {}), t(l(n))
						}
					}
				}, m = () => async (e, t) => {
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
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "f", (function() {
				return T
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forOwn.js"),
				s = n.n(o),
				r = n("./src/reddit/actions/governance/errorToast.ts"),
				i = n("./src/reddit/endpoints/economics/emojis.ts"),
				a = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				l = n("./src/reddit/endpoints/governance/badges.ts"),
				d = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");

			function p(e, t, n) {
				return Object(u.a)(e, {
					method: "get",
					endpoint: `${d.a.metaUrl}/products/${t}?owners=${n}` + "&types=emotes_pack,giphy"
				})
			}
			var m = n("./src/reddit/models/Badge/index.ts"),
				h = n("./src/reddit/models/Badge/managementPage.ts"),
				f = n("./src/reddit/models/Product/index.ts"),
				b = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				g = n("./src/reddit/selectors/economics.ts"),
				x = n("./src/reddit/selectors/products.ts"),
				C = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				y = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function E(e) {
				return !!e && "removeBadge" === e.type
			}

			function v(e) {
				if (!E(e)) return e
			}
			const _ = () => async (e, t, {
				apiContext: n
			}) => {
				if (!t().user.account) return;
				await e(Object(C.b)({
					includeMemberships: !0
				}));
				const o = t().economics.me.data.specialMemberships || {},
					s = Object.keys(o);
				if (s.length) {
					const t = await Object(a.e)(n(), s);
					t.ok && e(Object(y.g)(t.body))
				}
			}, O = (e, t) => async (n, o, {
				apiContext: s
			}) => {
				const r = o().user.account,
					i = o().economics.subredditPremium[e],
					a = !i || i.status !== b.a.Fetched || t;
				if (r && a) {
					const t = await Object(c.a)(s(), e, r.id);
					n(Object(y.i)(t))
				}
			}, k = e => async (t, n, {
				apiContext: o
			}) => {
				const s = n(),
					i = s.user.account,
					a = Object(g.f)(s, e.subredditId),
					c = Object.keys(a).map(e => a[e]).filter(Boolean);
				if (i && e.badge) {
					let n, s;
					n = e.placement === m.a.First ? a[h.a.Loyalty] : e.placement === m.a.Second ? a[h.a.Achievement] : a[h.a.Cosmetic], t(Object(y.a)({
						...e,
						badge: v(e.badge),
						currentAppliedBadges: c,
						userId: i.id
					})), E(e.badge) && n ? s = await Object(l.a)(o(), e.subredditId, n.id, !1) : E(e.badge) || (s = await Object(l.a)(o(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(y.a)({
						...e,
						badge: n,
						currentAppliedBadges: c,
						userId: i.id
					})), Object(r.a)(t, s.error))
				}
			}, S = (e, t) => async (n, o, {
				apiContext: s
			}) => {
				await n(O(e, !0));
				const r = o().economics.subredditPremium[e];
				if (r && r.status === b.a.Fetched) {
					const o = r.data.userOwnedBadges.find(e => e.type === t.id);
					o && (n(k({
						badge: o,
						subredditId: e,
						placement: o.placement
					})), n(Object(y.d)(h.c.MyBadges)))
				}
			}, j = e => async (t, n, {
				apiContext: o
			}) => {
				const a = n().user.account,
					c = !n().economics.emotes[e],
					l = !n().economics.gifs[e];
				if (a && (c || l)) {
					const [n, c] = await Promise.all([Object(i.b)(o(), e), p(o(), e, a.id)]);
					if (!c.ok) return void Object(r.a)(t, c.error);
					const l = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					s()(c.body, e => {
						e.type === f.a.EmotesPack ? l.emotes.push(e) : e.type === f.a.Giphy && l.giphy.push(e)
					}), t(Object(y.e)({
						subredditId: e,
						products: l
					}))
				}
			}, w = (e, t, n) => async (o, s, {
				apiContext: r
			}) => {
				if (await o(O(e, !0)), n && t) {
					const n = s(),
						r = Object(g.f)(n, e),
						i = Object(x.a)(n, t);
					if (!r[Object(h.d)(i.placement)] && i) {
						const t = Object(g.k)(n, {
							subredditId: e,
							badge: i
						});
						t && await o(k({
							badge: t,
							subredditId: e
						}))
					}
					o(Object(y.c)({
						subredditId: e,
						initialView: h.c.MyBadges
					}))
				}
			}, T = e => async (t, n, {
				apiContext: o
			}) => {
				const {
					wallet: s
				} = await Object(a.c)(o(), e);
				t(Object(y.f)({
					wallet: s
				})), await t(O(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "h", (function() {
				return L
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/config.ts"),
				d = n("./src/graphql/operations/PollVote.json"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				p = n("./src/reddit/models/Poll/index.ts"),
				m = n("./src/reddit/endpoints/governance/requester.ts");
			var h = n("./src/reddit/endpoints/governance/wallet.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/gov.ts"),
				x = n("./src/reddit/actions/governance/constants.ts"),
				C = n("./src/reddit/actions/governance/errorToast.ts");
			const y = Object(s.a)(x.b),
				E = Object(s.a)(x.c),
				v = Object(s.a)(x.e),
				_ = (Object(s.a)(x.f), Object(s.a)(x.g), Object(s.a)(x.h)),
				O = Object(s.a)(x.i),
				k = Object(s.a)(x.j),
				S = Object(s.a)(x.k),
				j = Object(s.a)(x.q),
				w = Object(s.a)(x.r),
				T = Object(s.a)(x.s),
				I = Object(s.a)(x.t),
				P = Object(s.a)(x.u),
				M = Object(s.a)(x.v),
				N = Object(s.a)(x.w),
				R = Object(s.a)(x.x),
				D = (e, t) => async (n, o, {
					apiContext: s,
					gqlContext: r
				}) => {
					let i, c = o().polls.models[e];
					if (n(k({
							pollId: e
						})), (i = c.type === p.a.GA ? await ((e, t, n) => Object(u.a)(e, {
								...d,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(r(), e, t) : await
							function(e, t, n, o) {
								return Object(m.a)(e, {
									method: "put",
									endpoint: `${l.a.metaUrl}/polls/${t}/${n}/votes/me/${o}`
								})
							}(s(), c.subredditId, e, t)).ok) {
						if (c.type === p.a.GA) {
							const {
								options: e
							} = i.body.data.updatePostPollVoteState.poll;
							n(v({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else n(S(i.body));
						const s = o();
						if ((c = s.polls.models[e]) && Object(p.d)(c)) {
							const {
								postId: e
							} = c, t = s.posts.models[e];
							t && t.voteState === b.a.notVoted && n(Object(a.U)(e))
						}
					} else n(O({
						pollId: e,
						error: i.error || i.errors[0].message
					})), Object(C.a)(n, i.error || i.errors[0].messsage)
				}, B = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					n(T());
					const d = s().transfers.communityPoints.contentId || void 0,
						u = await
					function(e, t) {
						return Object(m.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${l.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(a(), {
						...e,
						contentId: d
					});
					u.ok ? (n(I({
						...u.body,
						subredditId: e.subredditId
					})), n(Object(c.e)({
						kind: f.b.SuccessCommunity,
						text: o.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [o.fbt._param("amount", Object(r.a)(e.amount)), o.fbt._param("tokenName", Object(g.n)(s(), {
							subredditId: e.subredditId
						})), o.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(i.f)())) : (n(j({
						error: u.error
					})), Object(C.a)(n, u.error))
				}, L = e => async (t, n, {
					apiContext: o
				}) => {
					t(M());
					const s = await Object(h.a)(o(), e);
					s.ok ? t(N(s.body)) : t(P({
						error: s.error
					}))
				}
		},
		"./src/reddit/actions/postCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return N
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "g", (function() {
				return L
			})), n.d(t, "a", (function() {
				return K
			})), n.d(t, "c", (function() {
				return H
			})), n.d(t, "h", (function() {
				return q
			})), n.d(t, "f", (function() {
				return Z
			})), n.d(t, "d", (function() {
				return oe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/filterQueryParams/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/postCollection/constants.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/history.ts"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts");
			var h = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,
				method: d.cb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var f = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/create_collection.json`,
				method: d.cb.POST,
				data: {
					title: t,
					sr_fullname: n
				}
			});
			var b = (e, t) => Object(u.a)(Object(p.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/delete_collection.json`,
					method: d.cb.POST,
					data: {
						collection_id: t
					}
				}),
				g = n("./src/config.ts");
			var x = (e, t) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${g.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,
				method: d.cb.GET
			});
			var C = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,
				method: d.cb.POST,
				data: {
					collection_id: t,
					link_fullname: n
				}
			});
			var y = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_title.json`,
				method: d.cb.POST,
				data: {
					collection_id: t,
					title: n
				}
			});
			var E = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/reorder_collection.json`,
				method: d.cb.POST,
				data: {
					collection_id: t,
					link_ids: n.join(",")
				}
			});
			var v = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
				endpoint: `${e.apiUrl}/api/v1/collections/update_collection_description.json`,
				method: d.cb.POST,
				data: {
					collection_id: t,
					description: n
				}
			});
			var _ = (e, t, n) => Object(u.a)(Object(p.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,
					method: d.cb.POST,
					data: {
						collection_id: t,
						display_layout: n
					}
				}),
				O = n("./src/reddit/helpers/overlay/index.ts"),
				k = n("./src/reddit/helpers/path/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/postCollection.ts"),
				w = n("./src/reddit/selectors/posts.ts"),
				T = n("./src/reddit/selectors/subreddit.ts");
			const I = Object(i.a)(a.c),
				P = Object(i.a)(a.b),
				M = Object(i.a)(a.d),
				N = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					n(I());
					const r = await f(s(), e, t);
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
						n(P(e))
					}
					return i
				}, R = Object(i.a)(a.f), D = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().postCollection.subredditToIds || {};
					if (Object.keys(r).length > 0) return;
					const i = await x(s(), e);
					i.ok ? t(R(i.body)) : t(Object(c.e)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, B = Object(i.a)(a.g), L = (e, t, n) => async (s, r, {
					apiContext: i
				}) => {
					if ((await C(i(), e, t)).ok) {
						const i = r(),
							a = Object(w.I)(i, {
								postId: t
							}),
							l = a && a.title || "",
							d = Object(j.q)(i, {
								collectionId: e
							}),
							u = (d && d.postIds && d.postIds.indexOf(t) || -1) - 1;
						if (s(B({
								collectionId: e,
								postId: t
							})), n && u >= 0) {
							const t = r(),
								n = Object(j.q)(t, {
									collectionId: e
								}),
								o = n && n.postIds && n.postIds[u] || "",
								i = Object(w.I)(t, {
									postId: o
								});
							i && i.permalink && s(Object(O.a)(i.permalink))
						}
						s(Object(c.e)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Following post removed from collection successfully: {postTitle}", [o.fbt._param("postTitle", l)], {
								hk: "8e1lV"
							}),
							buttonText: o.fbt._("UNDO", null, {
								hk: "3KPLib"
							}),
							buttonAction: K(e, t)
						}))
					} else s(Object(c.e)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, F = Object(i.a)(a.a), A = Object(i.a)(a.t), K = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const i = s();
					if ((await h(r(), e, t)).ok) {
						n(F({
							collectionId: e,
							postId: t
						})), n(A({
							collectionId: e,
							postId: t
						}));
						const s = Object(w.I)(i, {
								postId: t
							}),
							r = Object(j.q)(i, {
								collectionId: e
							}),
							a = r && r.title || "";
						n(Object(c.e)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Success! You added a post to the collection: {title}", [o.fbt._param("title", a)], {
								hk: "3KNJWi"
							}),
							buttonText: o.fbt._("VIEW", null, {
								hk: "1SSkgL"
							}),
							buttonAction: Object(O.a)(s.permalink)
						}))
					} else n(Object(c.e)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, U = Object(i.a)(a.e), H = (e, t) => async (n, i, {
					apiContext: a
				}) => {
					const l = i();
					if ((await b(a(), e)).ok) {
						const {
							url: i
						} = l.platform.currentPage, a = Object(j.q)(l, {
							collectionId: e
						}), d = a && a.title || "", u = a && a.subredditId, p = u ? Object(T.c)(l, u) : "/";
						n(U({
							collectionId: e,
							collection: a
						})), n(t ? Object(s.c)(Object(r.a)(i, ["collection"])) : Object(s.b)(p)), n(Object(c.e)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Collection deleted successfully: {title}", [o.fbt._param("title", d)], {
								hk: "4tcOKB"
							})
						}))
					} else n(Object(c.e)({
						kind: S.b.Error,
						text: o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "4Ck6Cm"
						})
					}))
				}, W = Object(i.a)(a.r), z = Object(i.a)(a.n), V = Object(i.a)(a.s), q = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					n(W());
					const i = await y(r(), e, t);
					let a = !1;
					if (i.ok) n(V({
						collectionId: e,
						newTitle: t
					})), n(Object(c.e)({
						kind: S.b.SuccessMod,
						text: o.fbt._("Collection title updated successfully", null, {
							hk: "2hKzKl"
						})
					})), a = !0;
					else {
						const e = i.error;
						n(z(e)), n(Object(c.e)({
							kind: S.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))
					}
					return a
				}, G = Object(i.a)(a.l), J = Object(i.a)(a.m), Q = Object(i.a)(a.k), Z = e => async (t, n) => {
					const o = n().platform.currentPage.locationState;
					t(!(!o || !o[l.a.IsOverlay]) ? Object(O.a)(e.permalink) : Object(s.b)(Object(k.b)(e.permalink)))
				}, X = Object(i.a)(a.i), Y = Object(i.a)(a.j), $ = Object(i.a)(a.h), ee = Object(i.a)(a.p), te = Object(i.a)(a.o), ne = Object(i.a)(a.q), oe = e => async t => {
					const n = [],
						{
							collectionId: s,
							description: r,
							displayLayout: i,
							postIds: a,
							title: l
						} = e;
					a && n.push(t(((e, t) => async (n, s, {
						apiContext: r
					}) => {
						n(X());
						const i = await E(r(), e, t);
						let a = !1;
						return i.ok ? (n(Y({
							collectionId: e,
							postIds: t
						})), n(Object(c.e)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Collection order updated successfully", null, {
								hk: "4ccHEL"
							})
						})), a = !0) : (n($({
							error: i.error
						})), n(Object(c.e)({
							kind: S.b.Error,
							text: o.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							})
						}))), a
					})(s, a))), l && n.push(t(q(s, l))), void 0 !== r && n.push(t(((e, t) => async (n, s, {
						apiContext: r
					}) => {
						n(G());
						const i = await v(r(), e, t);
						let a = !1;
						if (i.ok) n(J({
							collectionId: e,
							newDescription: t
						})), n(Object(c.e)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Collection description updated successfully", null, {
								hk: "1rIDCC"
							})
						})), a = !0;
						else {
							const e = i.error;
							n(Q(e)), n(Object(c.e)({
								kind: S.b.Error,
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
						const i = await _(r(), e, t);
						let a = !1;
						if (i.ok) n(ne({
							collectionId: e,
							newLayout: t
						})), n(Object(c.e)({
							kind: S.b.SuccessMod,
							text: o.fbt._("Collection layout updated successfully", null, {
								hk: "1Rs19j"
							})
						})), a = !0;
						else {
							const e = i.error;
							n(te(e)), n(Object(c.e)({
								kind: S.b.Error,
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
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return g
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/post/convert.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				l = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/actions/postCreation/constants.ts");
			const m = Object(s.a)(p.C),
				h = Object(s.a)(p.p),
				f = Object(s.a)(p.M),
				b = (e, t, n) => async (s, a, {
					apiContext: b
				}) => {
					c.i(a(), t);
					const x = t === l.h.MARKDOWN,
						C = t === l.h.RICH_TEXT,
						y = p.k;
					if (x && Object(d.G)(n)) return s(f({
						editorKey: e,
						editorMode: l.h.MARKDOWN,
						content: ""
					})), void s(g(t));
					if (C && !n) return s(f({
						editorKey: e,
						editorMode: l.h.RICH_TEXT,
						content: d.i
					})), void s(g(t));
					s(m(y));
					const E = await Object(i.a)(b(), t, x ? JSON.stringify(n) : n);
					E.ok ? (s(h(y)), s(f({
						editorKey: e,
						editorMode: t,
						content: E.body.output
					})), s(g(t))) : (s(h(y)), s(Object(r.e)({
						duration: r.a,
						kind: u.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, g = e => async (t, n) => {
					const s = Object(a.k)();
					if (s >= 3) return;
					const i = n().user.prefs.useMarkdown ? l.h.MARKDOWN : l.h.RICH_TEXT;
					if (e === i) return;
					const c = e === l.h.MARKDOWN ? o.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
						text: c
					})), Object(a.bb)(s + 1)
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return N
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "c", (function() {
				return F
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "d", (function() {
				return K
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/uuid/v4.js"),
				r = n.n(s),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/formatApiError/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/actions/upload.ts"),
				u = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				m = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts");
			var f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				b = n("./src/reddit/helpers/imagePreview/index.ts"),
				g = n("./src/reddit/helpers/media/index.ts"),
				x = n("./src/reddit/models/Upload/index.ts"),
				C = n("./src/reddit/selectors/telemetry.ts"),
				y = n("./src/telemetry/index.ts");
			const E = e => ({
				...C.defaults(e),
				screen: C.screen(e),
				profile: C.profile(e),
				subreddit: C.subreddit(e)
			});
			var v = n("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = n("./src/reddit/models/Gold/Powerups/index.ts"),
				O = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/gold/powerups.ts"),
				j = n("./src/reddit/selectors/postCreations.ts"),
				w = n("./src/reddit/actions/postCreation/constants.ts"),
				T = n("./src/reddit/actions/postCreation/general.ts");
			const I = Object(c.a)(w.u),
				P = Object(c.a)(w.v),
				M = Object(c.a)(w.t),
				N = e => async (t, n) => {
					t(I());
					const o = e.map(({
						url: e,
						uploadKey: n
					}) => {
						const o = Object(g.a)(Object(g.c)(e), "poster.png");
						return t(L(o, n))
					});
					await Promise.all(o);
					const s = n().uploads,
						r = e.map(({
							uploadKey: e
						}) => s[e]).find(e => e.status !== x.a.SUCCESS);
					t(r ? M(r.error) : P())
				}, R = (e, t) => ({
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
			const D = "RTE",
				B = "GALLERY",
				L = (e, t, n, s) => async (r, a, {
					apiContext: c
				}) => {
					const l = Object(j.h)(a()),
						u = Date.now();
					let O = null,
						k = !1,
						w = !1,
						T = !1;
					const I = e => {
						if (!T && n && k) {
							T = !0;
							const o = a(),
								s = Date.now() - u,
								r = Object(f.c)(f.a.PostComposer);
							w ? (async ({
								state: e,
								uploadKey: t,
								assetId: n,
								isCanceled: o,
								fileSource: s,
								uploadDuration: r,
								correlationId: i
							}) => {
								const a = e.uploads[t],
									c = o || a.status === x.a.CANCELED,
									{
										file: l,
										url: d,
										metadata: u,
										error: p
									} = a,
									m = u.mimetype || l.type,
									h = m.startsWith("video/"),
									f = a.status === x.a.SUCCESS;
								let b = "";
								p ? b = JSON.stringify(p) : c && (b = "canceled");
								const g = {
									width: u.width,
									height: u.height,
									duration: u.videoDuration && Math.round(1e3 * u.videoDuration)
								};
								Object(y.a)({
									source: h ? "videoupload" : "imageupload",
									action: "upload",
									correlationId: i,
									noun: h ? "video" : "image",
									...E(e),
									actionInfo: {
										...C.actionInfo(e),
										success: f,
										...b ? {
											reason: b
										} : {}
									},
									media: {
										mimetype: m,
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
								assetId: O,
								isCanceled: e,
								fileSource: n,
								uploadDuration: s,
								correlationId: r
							}) : v.t(o, t)
						}
					};
					return await r(Object(d.l)(e, t, async u => {
						k = !0, Object(d.k)(u.id, () => {
							I(!0)
						});
						const {
							error: f,
							metadata: x
						} = await async function(e, t, n) {
							const s = n && n.allowedPostTypes,
								r = n && n.name,
								a = await Object(g.g)(t) || t.type,
								c = Object(g.b)(t) || void 0;
							if (!c) return R("UNSUPPORTED_BROWSER");
							const l = {
								localUrl: c,
								mimetype: a
							};
							if (!a || !Object(g.i)(a)) return {
								error: {
									type: i.M
								}
							};
							if (a.startsWith("image/")) {
								if (s && !s.images) {
									const e = o.fbt._("Images are not allowed in r/{subredditName}", [o.fbt._param("subredditName", r)], {
										hk: "3C2E7Q"
									});
									return R(i.M, e)
								}
								if ("image/gif" === a) {
									if (t.size > i.S) return R(i.H)
								} else if (t.size > i.U) return R(i.K);
								const e = await Object(b.a)(c);
								l.width = e.width, l.height = e.height
							} else if (a.startsWith("video/")) {
								const a = !(null == n || !n.id) && Object(S.m)(e, {
										subredditId: n.id,
										benefit: _.a.HdVideo
									}),
									u = a ? 2 * i.Y : i.Y;
								if (t.size > u) return R(i.ac);
								let p;
								try {
									p = await Object(g.h)(c, !0)
								} catch (d) {
									return R(i.M)
								}
								if (s) {
									const {
										videos: e,
										images: t
									} = s;
									if (t && !e && p.duration > i.Z) {
										const e = o.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [o.fbt._param("subredditName", r)], {
											hk: "46ULiz"
										});
										return R(i.M, e)
									}
									if (!t && !e) {
										const e = o.fbt._("Videos are not allowed in r/{subredditName}", [o.fbt._param("subredditName", r)], {
											hk: "4uTUZb"
										});
										return R(i.M, e)
									}
								}
								const m = a ? 2 * i.X : i.X;
								if (p.duration > m) {
									const e = o.fbt._("Video is too long. Maximum video length is {duration} minutes.", [o.fbt._param("duration", (m / 60).toString())], {
										hk: "20nB6Q"
									});
									return R(i.M, e)
								}
								if (p.height < i.fb || p.width < i.gb) {
									const e = o.fbt._("Videos must be {min_video_width}x{min_video_height} pixels or larger.", [o.fbt._param("min_video_width", i.gb.toString()), o.fbt._param("min_video_height", i.fb.toString())], {
										hk: "2HSUGl"
									});
									return R(i.M, e)
								}
								if (t.size / p.duration < i.eb) {
									const e = o.fbt._("Videos must have a bitrate of {min_bitrate}KB/s or larger.", [o.fbt._param("min_bitrate", (i.eb / i.N).toString())], {
										hk: "1ehgDE"
									});
									return R(i.M, e)
								}
								l.height = p.height, l.width = p.width, l.videoDuration = p.duration, l.videoFirstFrameUrl = p.firstFrame.dataUrl
							}
							return {
								metadata: l
							}
						}(a(), e, l);
						if (f || !x) return {
							error: f
						};
						r(Object(d.m)({
							key: t,
							metadata: {
								fileSource: n,
								...x
							}
						})), w = !0, s && s();
						const C = e.name,
							y = await (async (e, t, n) => Object(p.a)(Object(m.a)(e, [h.a]), {
								endpoint: `${e.apiUrl}/api/media/asset.json`,
								method: i.cb.POST,
								data: {
									filepath: t,
									mimetype: n
								}
							}))(c(), C, x.mimetype);
						return y.ok ? (O = y.body.asset.asset_id, {
							uploadLease: y.body.args
						}) : {
							error: y.error || void 0
						}
					}, !0)), I(!1), a().uploads[t] || null
				}, F = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n().uploads[e];
					s && !Object(x.c)(s) && await t(L(s.file, s.key, s.metadata.fileSource, void 0))
				}, A = (e, t, n) => async (s, i) => {
					const c = e.map((e, o) => new Promise(async o => {
							const i = Object(x.d)(n, r()().slice(-6));
							await s(L(e, i, t, () => o({
								uploadKey: i,
								isValid: !0
							}))), o({
								uploadKey: i,
								isValid: !1
							})
						})),
						d = await Promise.all(c),
						u = d.map(e => e.uploadKey);
					return s(((e, t = 3) => async (n, s) => {
						const {
							uploads: r
						} = s(), i = e.map(e => r[e]).filter(e => e.status === x.a.FAILED && !e.metadata.mimetype).map(e => e.error), c = i.length > t ? t - 1 : i.length, d = i.length - c;
						i.slice(0, c).forEach(e => n(Object(l.e)({
							duration: l.a,
							kind: k.b.Error,
							text: Object(a.a)(e)
						}))), d > 0 && n(Object(l.e)({
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
				}, K = (e, t) => async (n, s) => {
					const r = s(),
						i = Object(j.P)(r),
						{
							items: a
						} = i,
						c = !a.length && 1 === e.length,
						p = Object(j.G)(r) && !c;
					let m = !1,
						h = e;
					if (p) {
						if (Object(O.v)(i)) return void n(Object(l.e)({
							kind: k.b.Error,
							text: o.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						h.some(e => Object(g.l)(e.type)) && n(Object(l.e)({
							kind: k.b.Error,
							text: o.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), h = h.filter(e => Object(g.k)(e.type));
						const e = Math.max(0, u.b - a.length);
						h.length > e && (n(Object(l.e)({
							kind: k.b.Error,
							text: o.fbt._("You have hit the limit of {images_limit} images", [o.fbt._param("images_limit", `${u.b}`)], {
								hk: "6M4kX"
							})
						})), h = h.slice(0, e))
					} else h = h.slice(0, 1), m = !0, n(Object(d.j)(B, !0));
					const f = await n(A(h, t, B));
					if (!f.length) return;
					const b = f.map(e => ({
							uploadKey: e,
							caption: "",
							url: ""
						})),
						x = 0 === a.length;
					n(Object(T.d)({
						...i,
						items: m ? b : [...a, ...b],
						selectedKey: x ? f[0] : f[f.length - 1]
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(o.a)(r.r),
				a = Object(o.a)(r.F),
				c = e => async (t, n, {
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
				return C
			})), n.d(t, "a", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/telemetry/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/scheduledPosts/index.ts"),
				c = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				p = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				m = n("./src/reddit/models/ScheduledPost/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/routes/postCreation/index.ts"),
				b = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const g = Object(i.a)(c.n),
				x = Object(i.a)(c.b),
				C = (e, t) => async (n, o, r) => {
					const i = Object(b.a)(o(), {
						scheduledPostId: t,
						subredditId: e
					});
					i && (await n(Object(s.b)(Object(f.c)(i.subreddit.name, i.collectionId))), n((Object(m.p)(i) ? x : g)(i)))
				}, y = (e, t) => {
					Object(m.p)(t) ? e(Object(a.d)({
						scheduledPost: t
					})) : e(Object(a.h)({
						scheduledPost: t
					}))
				}, E = (e, t, n) => async (s, i, {
					gqlContext: f
				}) => {
					s(Object(a.g)());
					const g = Object(b.a)(i(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (g && Object(m.p)(g) && Object(r.a)(Object(p.u)()(i(), g)), !g) return void s(Object(a.f)({
						message: o.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(n).length) return void y(s, g);
					const x = await Object(d.a)(f(), {
							...n,
							id: t
						}),
						C = x.body;
					if (!(x.ok && C && C.data && C.data.updateScheduledPost && C.data.updateScheduledPost.ok && C.data.updateScheduledPost.scheduledPost)) return s(Object(a.f)({
						message: x.error && x.error.fields && x.error.fields.length && x.error.fields[0].msg || o.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void s(Object(l.e)(Object(l.d)(c.t(), h.b.Error, c.s(), E(e, t, n))));
					s(Object(l.e)(Object(l.d)(c.w(), h.b.SuccessCommunity))), y(s, Object(u.d)(C.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return b
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "b", (function() {
				return I
			}));
			var o = n("./src/lib/assertNever.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				i = n("./src/reddit/actions/scheduledPosts/edit.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				l = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				d = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				u = n("./src/reddit/models/ScheduledPost/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				h = n("./src/telemetry/index.ts");
			const f = Object(s.a)(r.g),
				b = Object(s.a)(r.k),
				g = Object(s.a)(r.j),
				x = Object(s.a)(r.o),
				C = Object(s.a)(r.d),
				y = Object(s.a)(r.f),
				E = Object(s.a)(r.m),
				v = Object(s.a)(r.a),
				_ = Object(s.a)(r.c),
				O = Object(s.a)(r.e),
				k = Object(s.a)(r.h),
				S = (e, t) => {
					e(O()), e(Object(a.e)(Object(a.d)(r.r(), p.b.Error, r.s(), j(t))))
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
					if (Object(m.h)(r(), {
							subredditId: e
						})) return;
					s(f());
					const a = {
							subredditId: e,
							includeRecurring: n,
							includeStandalone: t,
							...o
						},
						d = await Object(c.b)(i(), a);
					Object(c.f)(d, a) ? T(s, Object(l.e)(d.body.data), a) : S(s, a)
				}, w = e => async (t, n, {
					gqlContext: o
				}) => {
					const s = n();
					if (!Object(m.h)(s, {
							subredditId: e
						})) return t(j({
						subredditId: e
					}));
					if (!Object(m.g)(s, {
							subredditId: e,
							type: u.f.standalonePosts
						})) return;
					const r = Object(m.c)(s, {
						subredditId: e,
						type: u.f.standalonePosts
					});
					if (!r) return;
					t(f());
					const i = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: 25,
								standaloneAfter: r
							}
						},
						a = await Object(c.b)(o(), i);
					a.ok ? T(t, Object(l.e)(a.body.data), i) : t(O())
				}, T = (e, t, n) => {
					Object(l.b)(t) ? e(y(t)) : Object(l.a)(t) ? e(v(t)) : Object(l.c)(t) ? e(E(t)) : S(e, n)
				}, I = (e, t) => async (n, s, r) => {
					const a = {},
						c = s();
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
					Object(h.a)(Object(d.t)(e, a[e], Object(u.p)(t))(c)), n(Object(i.a)(t.subreddit.id, t.id, a))
				}
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
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
				c = e => {
					const t = document.getElementById(e),
						n = window.scrollX,
						o = window.scrollY;
					t && (t.focus(), window.scrollTo(n, o))
				},
				l = () => {
					c(o.b)
				}
		},
		"./src/reddit/actions/subredditAutocomplete/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/graphql/operations/SubredditTypeaheadSearch.json"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/reddit/helpers/graphql/normalizeAllowedPostTypesFromGql/index.ts"),
				a = n("./src/reddit/helpers/name/index.ts"),
				c = n("./src/reddit/selectors/subredditAutocomplete.ts"),
				l = n("./src/reddit/actions/subredditAutocomplete/constants.ts");
			const d = Object(o.a)(l.c),
				u = Object(o.a)(l.b),
				p = Object(o.a)(l.a),
				m = (e, t = !1) => async (n, o, {
					gqlContext: l
				}) => {
					const m = Object(a.g)(e);
					if (!m) return;
					const h = o(),
						f = h.subredditAutocomplete;
					if (f.api.pending[m] || f.models[m]) return;
					if (Object(c.b)(h, {
							substring: m
						})) return;
					n(d({
						key: m
					}));
					const b = await ((e, t) => Object(r.a)(e, {
						...s,
						variables: t
					}))(l(), {
						query: m,
						includeNsfw: t
					});
					if (b.ok) {
						const e = b.body.data.subredditTypeahead.subreddits.edges.map(e => (({
							allowedPostTypes: e,
							id: t,
							isCrosspostDestination: n,
							isNsfw: o,
							name: s,
							styles: r,
							subscribersCount: a
						}) => ({
							allowedPostTypes: Object(i.a)(e),
							communityIcon: r && r.icon || "",
							icon: r && r.legacyIcon && r.legacyIcon.url || "",
							id: t,
							isCrosspostDestination: n,
							isNsfw: o,
							name: s,
							primaryColor: r && r.primaryColor || "",
							subscribers: a
						}))(e.node));
						n(u({
							key: m,
							subreddits: e
						}))
					} else n(p({
						key: m,
						error: b.error
					}))
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
					[a.a.breakout]: e
				}),
				style: {
					left: l(t, n)
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
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/components/CommentCreation/FormFooter/index.m.less"),
				u = n.n(d);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = i.a.div("FormFooterWrapper", u.a), h = i.a.wrapped(a.i, "SubmitButton", u.a), f = i.a.wrapped(c.a, "LoadingIcon", u.a), b = i.a.wrapped(a.l, "CancelButton", u.a), g = i.a.div("ButtonWrapper", u.a), x = e => e.preventDefault();
			t.a = ({
				pending: e,
				cancelButtonEnabled: t = !0,
				children: n,
				className: o,
				submitButtonText: i,
				canSubmit: c,
				onSubmit: d,
				onCancel: C
			}) => {
				const y = Object(l.a)();
				return s.a.createElement(m, {
					className: Object(r.a)(o, {
						[u.a.pending]: e
					})
				}, s.a.createElement(g, null, s.a.createElement(h, {
					className: y ? u.a.is2020 : "",
					size: a.c.XS,
					type: "submit",
					disabled: !c,
					onClick: d,
					onMouseDown: x
				}, e ? s.a.createElement(f, {
					sizePx: 10
				}) : i), t && s.a.createElement(b, {
					className: y ? u.a.is2020 : "",
					size: a.c.XS,
					type: "reset",
					disabled: e,
					onClick: C,
					onMouseDown: x
				}, p._("Cancel", null, {
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
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/comment/authoring.ts"),
				d = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/CommentCreation/NavigationModule/index.ts"),
				p = n("./src/reddit/components/CommentCreation/ToxicityWarningModal.tsx"),
				m = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				f = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				b = n("./src/reddit/controls/ErrorText/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = n("./src/reddit/icons/svgs/Help/index.tsx"),
				C = n("./src/reddit/components/CommentCreation/ExpandingFormDiv.tsx"),
				y = n("./src/reddit/components/CommentCreation/FormFooter/index.tsx"),
				E = n("./src/lib/fastdom/index.ts"),
				v = n("./src/reddit/components/CommentCreation/ToolbarSelector.m.less"),
				_ = n.n(v),
				O = n("./src/lib/lessComponent.tsx");
			const k = 310,
				S = O.a.div("Container", _.a);
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
						n !== this.state.toolbarType && E.a.write(() => {
							this.setState({
								toolbarType: n
							})
						})
					}
				}
				componentDidMount() {
					E.a.read(this.selectToolbar), window.addEventListener("resize", this.selectToolbar)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.selectToolbar)
				}
				render() {
					return r.a.createElement(S, {
						innerRef: this.setContainerRef
					}, this.state.toolbarType ? this.props.children(this.state.toolbarType) : null)
				}
			}
			var w = n("./src/reddit/icons/svgs/MarkdownMode/index.tsx"),
				T = n("./src/reddit/components/PostCreationForm/DivButton/index.tsx"),
				I = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				P = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/MarkdownModeButton.m.less"),
				M = n.n(P),
				N = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const D = O.a.wrapped(g.a, "LoadingIcon", M.a),
				B = O.a.div("Wrapper", M.a),
				L = O.a.wrapped(w.a, "MarkdownModeIcon", M.a),
				F = O.a.wrapped(T.a, "Button", M.a);
			var A = r.a.memo((function(e) {
					const t = o.fbt._("Switch to fancy pants editor", null, {
							hk: "1XOb4H"
						}),
						n = Object(R.a)();
					return r.a.createElement(B, null, n ? r.a.createElement(N.q, {
						priority: N.b.Plain,
						size: N.c.XS,
						"aria-label": t,
						innerRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick,
						Icon: e.isConverting ? D : L
					}, r.a.createElement(I.a, {
						text: t
					})) : r.a.createElement(F, {
						"aria-label": t,
						setRef: e.buttonRef,
						className: e.className,
						onClick: e.onClick
					}, e.isConverting && r.a.createElement(D, {
						sizePx: 12
					}), r.a.createElement(I.a, {
						text: t
					}), !e.isConverting && r.a.createElement(L, null)))
				})),
				K = n("./src/lib/classNames/index.ts"),
				U = n("./src/reddit/constants/keycodes.ts"),
				H = n("./src/reddit/components/CommentCreation/getCancelModalId.ts"),
				W = n("./src/reddit/constants/componentSizes.ts"),
				z = n("./src/reddit/constants/componentTestIds.ts"),
				V = n("./src/reddit/selectors/activeModalId.ts"),
				q = n("./src/reddit/selectors/comments.ts"),
				G = n("./src/reddit/selectors/editorContent.ts"),
				J = n("./src/reddit/actions/modal.ts"),
				Q = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				Z = n("./src/reddit/models/PostCreationForm/index.ts"),
				X = n("./src/reddit/models/PostDraft/index.ts"),
				Y = n("./src/reddit/models/User/index.ts"),
				$ = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.m.less"),
				ee = n.n($);
			const te = O.a.button("SwitchModeButton", ee.a),
				ne = O.a.wrapped(g.a, "LoadingIcon", ee.a),
				oe = O.a.div("CommentHeader", ee.a),
				se = O.a.span("FormHeaderText", ee.a),
				re = O.a.button("HelpButton", ee.a),
				ie = O.a.wrapped(x.a, "HelpIcon", ee.a),
				ae = O.a.wrapped(Q.a, "ResizableAutosizeTextarea", ee.a),
				ce = O.a.wrapped(y.a, "FormFooter", ee.a),
				le = O.a.wrapped(f.a, "CurrentUserIcon", ee.a),
				de = e => r.a.createElement(re, {
					className: e.className,
					onClick: e.onClick
				}, r.a.createElement(ie, null)),
				ue = 8,
				pe = 16,
				me = O.a.div("Wrapper", ee.a),
				he = O.a.div("FormWrapper", ee.a),
				fe = Object(a.b)(() => Object(c.c)({
					activeModalId: V.a,
					userName: e => e.user.account ? Object(Y.e)(e.user.account) : "",
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					draft: q.i,
					isConverting: (e, t) => Object(G.a)(e, t.draftKey)
				}), (e, t) => ({
					cancelModalToggled: () => e(Object(J.i)(Object(H.a)(t.draftKey))),
					helpModalToggled: () => e(Object(J.i)(h.b))
				}));
			class be extends r.a.Component {
				constructor(e) {
					super(e), this.textAreaRef = null, this.cancelForm = () => {
						this.props.onCancel(), this.onBlur()
					}, this.detectBreakout = () => {
						if (!this.wrapperEl || !this.wrapperEl.parentElement || this.props.isTopLevelComment) return;
						const e = this.wrapperEl.parentElement.getBoundingClientRect().width < W.c,
							t = this.getWrapperHeight();
						e === this.state.breakOut && t === this.state.wrapperHeight || E.a.write(() => {
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
							E.a.read(this.detectBreakout)
						})
					}, this.shouldConfirmCancel = () => this.userHasEnteredText() && this.state.hasChanged && this.props.draftType === X.c.edit, this.onCancel = () => {
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
						(t || n) && o === U.a.Enter && this.onSubmit()
					}, this.onSubmit = () => {
						this.props.onSubmit({
							commentMode: Z.h.MARKDOWN,
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
						cancelModalText: t === X.c.edit ? o.fbt._("Are you sure that you want to discard your edits?", null, {
							hk: "1ZfaWW"
						}) : o.fbt._("Are you sure that you want to discard your comment?", null, {
							hk: "3d8gJY"
						})
					}
				}
				componentDidMount() {
					this.props.onMount(), window.addEventListener("resize", this.detectBreakout), E.a.read(this.detectBreakout), E.a.write(() => {
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
					return e instanceof Element ? e.getBoundingClientRect().height + ue + pe + W.o : void 0
				}
				render() {
					const {
						activeModalId: e,
						autofocus: t,
						cancelModalToggled: n,
						className: s,
						disableAutofocus: i,
						depth: a,
						draft: c,
						draftKey: f,
						draftType: g,
						errorMsgs: x,
						pending: y,
						modalSeen: E,
						submitButtonText: v,
						isCommentBoxDesignEnabled: _,
						isExpanded: O,
						isTopLevelComment: k,
						onSwitchMode: S,
						userName: w
					} = this.props, {
						cancelModalText: T,
						showError: I,
						text: P,
						breakOut: M,
						wrapperHeight: N
					} = this.state, R = Object(H.a)(f), D = c.draftType === X.c.edit;
					return r.a.createElement(me, {
						"data-test-id": z.b,
						className: Object(K.a)(s, {
							[ee.a.isTopLevelComment]: k,
							[ee.a.mExpanded]: O,
							[ee.a.mRedesign]: _
						}),
						ref: this.setWrapperRef,
						style: {
							height: M ? N : void 0
						}
					}, !_ && k && r.a.createElement(oe, null, r.a.createElement(se, null, o.fbt._("Comment as {authorLink}", [o.fbt._param("authorLink", r.a.createElement(d.a, {
						author: w,
						isAdmin: !1,
						isAdminEmeritus: !1,
						isAuthorDeleted: !1,
						isMod: !1,
						isOp: !1
					}, w))], {
						hk: "4pMWAk"
					}))), r.a.createElement(C.a, {
						breakOut: M,
						depth: a,
						isEditing: D
					}, _ && r.a.createElement("div", {
						className: ee.a.userIcon
					}, r.a.createElement(le, null)), r.a.createElement(he, {
						className: Object(K.a)({
							[ee.a.pending]: y,
							[ee.a.focused]: c.hasFocus
						})
					}, r.a.createElement(ae, {
						innerRef: this.setTextAreaRef,
						autoFocus: t && !i,
						disabled: y,
						initialHeight: this.props.initialHeight,
						onBlur: this.onBlur,
						onChange: this.onChange,
						onEditorResize: this.props.onEditorResize,
						onFocus: this.onFocus,
						onKeyDown: this.handleKeyDown,
						placeholder: _ ? o.fbt._("Add a comment", null, {
							hk: "39ZBm0"
						}) : o.fbt._("What are your thoughts?", null, {
							hk: "4or1AH"
						}),
						value: P
					}), (!_ || O) && r.a.createElement(ce, {
						cancelButtonEnabled: g !== X.c.replyToPost,
						onSubmit: this.onSubmit,
						onCancel: this.onCancel,
						pending: y,
						submitButtonText: v,
						canSubmit: this.userHasEnteredText()
					}, r.a.createElement(j, null, e => "compact" === e ? r.a.createElement(A, {
						buttonRef: e => this.switchModeBtn = e,
						onClick: () => S(Z.h.RICH_TEXT, P, f),
						isConverting: this.props.isConverting
					}) : r.a.createElement("div", null, r.a.createElement(te, {
						innerRef: e => this.switchModeBtn = e,
						onClick: () => S(Z.h.RICH_TEXT, P, f)
					}, "Switch to Fancy Pants Editor", this.props.isConverting && r.a.createElement(ne, {
						sizePx: 12
					})))), r.a.createElement(de, {
						onClick: this.props.helpModalToggled
					})))), I && Object(b.c)(x), e === R && r.a.createElement(m.a, {
						actionText: o.fbt._("Discard", null, {
							hk: "1kJ5PR"
						}),
						cancelActionText: o.fbt._("keep", null, {
							hk: "J0ER1"
						}),
						modalText: T,
						onConfirm: () => this.cancelForm(),
						toggleModal: n,
						trackClick: () => {}
					}), e === h.b && r.a.createElement(h.a, null), e === l.q && r.a.createElement(p.a, {
						onSubmit: this.onSubmit,
						modalSeen: E,
						withOverlay: !0
					}), r.a.createElement(u.a, {
						editKey: f,
						hasValue: !!P
					}))
				}
			}
			t.b = fe(be)
		},
		"./src/reddit/components/CommentCreation/NavigationModule/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-router/esm/react-router.js");
			let a = null;
			class c extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.unblock = e => {
						c.blockers.delete(e), c.blockers.size || (a && a(), a = null, window.removeEventListener("beforeunload", c.navigationBlocker))
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
					c.blockers.add(e), a || (window.addEventListener("beforeunload", c.navigationBlocker), a = this.props.history.block(() => {
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
			c.blockers = new Set, c.navigationBlocker = e => {
				const t = "Are you sure you want to leave?";
				return e.returnValue = t, t
			}, t.a = Object(i.i)(c)
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
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/comment/authoring.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/TextButton/index.tsx"),
				h = n("./src/reddit/constants/tracking.ts"),
				f = n("./src/reddit/selectors/telemetry.ts");
			const b = e => ({
					source: "toxicity_modal",
					...f.defaults(e),
					screen: f.screen(e),
					subreddit: f.subreddit(e)
				}),
				g = e => t => ({
					action: h.c.VIEW,
					noun: "modal",
					correlationId: e,
					...b(t)
				}),
				x = e => t => ({
					action: h.c.CLICK,
					noun: "submit",
					correlationId: e,
					...b(t)
				}),
				C = e => t => ({
					action: h.c.CLICK,
					noun: "edit",
					correlationId: e,
					...b(t)
				}),
				y = e => t => ({
					action: h.c.CLICK,
					noun: "close",
					correlationId: e,
					...b(t)
				});
			var E = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = Object(r.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(d.g)(l.q))
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
					return s.a.createElement(u.d, null, s.a.createElement(u.h, null, s.a.createElement(E.a, null, s.a.createElement(u.p, null, v._("Are you sure you want to post that?", null, {
						hk: "4yXqtu"
					})), s.a.createElement(m.a, {
						onClick: () => {
							this.props.sendEvent(y(this.state.correlationId)), this.props.closeModal()
						}
					}, s.a.createElement(u.b, null)))), s.a.createElement(u.k, null, s.a.createElement(u.o, null, v._("A reminder from the mods: Please follow community rules when commenting.", null, {
						hk: "Hdi9f"
					}))), s.a.createElement(u.f, null, s.a.createElement(u.a, {
						onClick: () => {
							this.props.sendEvent(C(this.state.correlationId)), this.props.closeModal()
						},
						"data-redditstyle": !0
					}, v._("Go back and edit", null, {
						hk: "3nGNI7"
					})), s.a.createElement(u.q, {
						onClick: () => {
							this.props.sendEvent(x(this.state.correlationId)), this.props.continue()
						},
						"data-redditstyle": !0
					}, v._("Comment", null, {
						hk: "1leYg7"
					}))))
				}
			}
			t.a = Object(c.a)(_(Object(p.c)(O)))
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
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(d);
			const p = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(a.d, null, r.a.createElement(a.h, null, r.a.createElement(l.a, null, r.a.createElement(a.p, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.k, null, r.a.createElement(a.o, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(a.f, null, !e.hideCancelButton && r.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(a.t, {
				className: u.a.buttonWidth,
				onMouseDown: p,
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
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/lib/fastdom/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = n("./src/reddit/selectors/tooltip.ts"),
				h = n("./src/reddit/components/ContentTooltip/index.m.less"),
				f = n.n(h);

			function b() {
				return (b = Object.assign || function(e) {
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
				x = e => {
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
				C = Object(d.a)(e => {
					const {
						children: t,
						className: n,
						style: o,
						caretPosition: s,
						caretColor: i,
						onClick: a,
						...c
					} = e;
					return r.a.createElement("div", b({
						onClick: a,
						className: Object(l.a)(n, f.a.StyledTooltipContainer, {
							[f.a.caretOnTop]: "top" === s,
							[f.a.caretOnLeft]: "left" === s,
							[f.a.caretOnRight]: "right" === s,
							[f.a.caretOnBottom]: "bottom" === s
						}),
						style: {
							...o,
							"--contentTooltip-caretColor": i && i[s] ? i[s] : Object(p.a)(e).body
						}
					}, c), t)
				}),
				y = Object(a.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				E = Object(c.a)(C, [o.a.Click, o.a.Keydown]),
				v = Object(i.b)(y);
			class _ extends r.a.Component {
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
								position: s ? this.props.defaultTooltipPosition : x(this.props.defaultTooltipPosition)
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
					return r.a.createElement(E, b({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = v(_)
		},
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/index.m.less"),
				g = n.n(b);
			const x = Object(a.c)({
				restrictions: f.p
			});
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.onRequest = () => {
						this.props.sendEvent(Object(m.a)(this.props.eventSource)), this.props.openContributorRequestModal()
					}
				}
				render() {
					return r.a.createElement(p.i, {
						className: Object(c.a)(this.props.smallButton ? null : g.a.RequestButton, this.props.className),
						onClick: this.onRequest,
						size: p.c.M
					}, this.props.eventSource === h.b.Comment ? o.fbt._("Request to Comment", null, {
						hk: "3KRhw5"
					}) : o.fbt._("Request to Post", null, {
						hk: "2xsrGd"
					}))
				}
			}
			t.a = Object(i.b)(x, e => ({
				openContributorRequestModal: () => e(Object(l.i)(u.a.CONTRIBUTOR_REQUEST))
			}))(Object(d.c)(C))
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
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/hooks/useLocalStorage.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				l = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less"),
				d = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function p({
				message: e,
				newBadge: t,
				onClose: n,
				onView: l,
				storageKey: p = c.a.nonDismissable,
				title: m
			}) {
				const h = p !== c.a.nonDismissable,
					[f, b] = Object(r.a)(p, !h || !1),
					[g, x] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					f || g || !l || (l(), x(!0))
				}, [f, g, l]), h && f ? null : s.a.createElement("div", {
					className: d.a.educationMessage
				}, s.a.createElement("div", {
					className: d.a.titleRow
				}, s.a.createElement("div", {
					className: d.a.header
				}, s.a.createElement("h3", {
					className: d.a.title
				}, m), t && s.a.createElement("div", {
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
						b(!0), n && n()
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
				c = n.n(a);
			t.a = i.a.wrapped(e => s.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
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
				c = n("./src/reddit/components/ContentTooltip/index.tsx"),
				l = n("./src/reddit/constants/localStorage.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				p = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				m = n("./src/reddit/components/Gold/PowerupEntryTooltip/index.m.less"),
				h = n.n(m);
			t.a = e => {
				const t = Object(r.d)(),
					{
						tooltipId: n,
						offsetY: m,
						width: b,
						height: g
					} = e,
					x = Object(o.useMemo)(() => {
						const e = !Object(d.i)(l.a.POWERUPS_TOOLTIP_VISIBILITY_STORE);
						return e && Object(d.Z)(l.a.POWERUPS_TOOLTIP_VISIBILITY_STORE), e
					}, [n]),
					[C, y] = Object(o.useState)(x);
				Object(o.useEffect)(() => {
					const e = C ? Object(a.l)({
						tooltipId: n
					}) : Object(a.k)({
						tooltipId: n
					});
					t(e)
				}, [C, n, t]);
				return s.a.createElement(c.a, {
					style: {
						transform: `translateY(${f(m)})`,
						backgroundColor: "#24A0ED",
						width: f(b),
						height: f(g)
					},
					className: h.a.contentTooltip,
					caretColor: {
						bottom: "#24A0ED",
						top: "#24A0ED"
					},
					tooltipSizeEstimate: {
						height: g,
						width: b
					},
					tooltipId: n,
					defaultTooltipPosition: "top",
					onClick: () => {
						t(Object(i.b)()), y(!1)
					}
				}, s.a.createElement("div", {
					className: h.a.icon
				}, s.a.createElement(p.a, {
					className: h.a.iconImage
				})), s.a.createElement("div", {
					className: h.a.content
				}, e.children), s.a.createElement(u.a, {
					className: h.a.chevronImage
				}))
			};
			const f = e => `${e}px`
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
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/gov.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const p = Object(i.c)({
				tokenSymbol: l.o
			});
			t.a = Object(r.b)(p)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = `${a.a.assetPath}/${t}`;
				if (e.grey && n.endsWith(".svg")) {
					const t = `url(${n}) center/cover`;
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
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/reddit/components/Governance/Token/index.tsx"),
				d = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/gov.ts"),
				p = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				m = n.n(p);
			const h = Object(i.c)({
				tokenDisplayConversion: u.m
			});
			t.a = Object(r.b)(h)((function(e) {
				return s.a.createElement("div", {
					className: Object(a.a)(m.a.container, e.className, {
						[m.a.small]: e.small
					})
				}, s.a.createElement(l.a, {
					className: Object(a.a)(m.a.token, {
						[m.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(d.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
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
				c = n("./src/lib/lessComponent.tsx");
			const l = c.a.div("IconWrapper", a.a),
				d = c.a.div("TextWrapper", a.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: o,
					subtitle: i,
					title: c
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
				}), o ? s.a.createElement(l, null, o) : s.a.createElement(l, null), s.a.createElement(d, null, s.a.createElement("div", {
					className: a.a.title
				}, c), i && s.a.createElement("div", {
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
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/constants/componentSizes.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				l = n.n(c);
			const d = Object(s.createContext)(null),
				u = Object(s.createContext)(null);
			class p extends r.a.Component {
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
			const m = i.f + 10,
				h = r.a.memo(() => r.a.createElement(d.Consumer, null, e => e && r.a.createElement("div", {
					className: l.a.wrapper
				}, r.a.createElement(a.o, {
					className: l.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -m)
					}
				}, o.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), r.a.createElement("div", {
					className: l.a.rightBorder
				})))),
				f = r.a.memo(() => r.a.createElement(u.Consumer, null, e => r.a.createElement("div", {
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
				} = e, l = Object(a.b)(o);
				return s.a.createElement(i.a, c({
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
		"./src/reddit/components/MakeGifToggle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1iRy5EPCLqSx8I0k9OT0wW",
				content: "NfjQg3srQXRhyOxLBwXrS",
				toggleSwitch: "_1fUmirx6e9tUDs04TQq6A1",
				mCompactSwitch: "_3Cx_YBpXo1s1iy7oA-4s6R",
				mDisabled: "_1M5N6DrrQQCQJs3JctDSu8",
				hoverTooltip: "_9qS60cx9uxyt1k4eZF_0w",
				tooltipContentClass: "_21DP8j-B-UkVKGJONbrTmX"
			}
		},
		"./src/reddit/components/MakeGifToggle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				c = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/MakeGifToggle/index.m.less"),
				u = n.n(d);
			t.a = e => r.a.createElement(l.a, {
				className: Object(i.a)(u.a.container, e.disabled ? u.a.mDisabled : null, e.isCompact ? u.a.mCompactSwitch : null),
				onMouseDown: e => e.preventDefault(),
				onClick: t => {
					t.stopPropagation(), !e.disabled && e.onClick()
				}
			}, r.a.createElement(l.a, {
				className: u.a.content
			}, r.a.createElement(c.a, {
				className: u.a.toggleSwitch,
				on: e.on
			}), r.a.createElement("label", null, o.fbt._("Make GIF", null, {
				hk: "2ig2GG"
			}))), e.tooltip ? r.a.createElement(a.a, {
				className: u.a.hoverTooltip,
				tooltipContentClass: u.a.tooltipContentClass,
				text: e.tooltip
			}) : null)
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
				return y
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				c = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/layout/row/Inline/index.tsx"),
				b = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/components/MarkdownHelp/index.m.less"),
				x = n.n(g),
				C = n("./src/lib/lessComponent.tsx");
			const y = "Markdown_Help__Modal",
				E = C.a.wrapped(f.a, "Section", x.a),
				v = C.a.div("Container", x.a),
				_ = C.a.table("Table", x.a),
				O = C.a.p("P", x.a);
			class k extends r.a.Component {
				render() {
					return r.a.createElement(c.a, null, r.a.createElement(a.a, {
						onClosePressed: this.props.closeModal,
						title: "Markdown Help"
					}), r.a.createElement(v, null, r.a.createElement(_, {
						className: x.a.helpTable
					}, r.a.createElement("tr", null, r.a.createElement(l.s, null, r.a.createElement(l.j, null, "Type this:")), r.a.createElement(l.s, null, r.a.createElement(l.j, null, "to get this:"))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, "*italics*")), r.a.createElement(l.p, null, r.a.createElement(l.f, null, "italics"))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, "**bold**")), r.a.createElement(l.p, null, r.a.createElement(l.b, null, "bold"))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, "[reddit!](https://reddit.com)")), r.a.createElement(l.p, null, r.a.createElement(l.a, {
						href: "https://www.reddit.com"
					}, "reddit!"))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, "* item 1"), r.a.createElement(l.j, null, "* item 2"), r.a.createElement(l.j, null, "* item 3")), r.a.createElement(l.p, null, r.a.createElement(l.v, null, r.a.createElement(l.g, null, "item 1"), r.a.createElement(l.g, null, "item 2"), r.a.createElement(l.g, null, "item 3")))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, "> quoted text")), r.a.createElement(l.p, null, r.a.createElement(l.c, null, "quoted text"))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, "~~strikethrough~~")), r.a.createElement(l.p, null, r.a.createElement(l.d, null, "strikethrough"))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, "super^script")), r.a.createElement(l.p, null, "super", r.a.createElement(l.m, null, "script"))), r.a.createElement("tr", null, r.a.createElement(l.p, null, r.a.createElement(l.j, null, ">!spoilers!<")), r.a.createElement(l.p, null, r.a.createElement(d.a, null, "spoilers")))), r.a.createElement(O, null, "Check the", r.a.createElement(l.a, {
						href: "https://www.reddit.com/wiki/commenting"
					}, " commenting wiki page "), "for more help")), r.a.createElement(E, null, r.a.createElement(b.a, null, r.a.createElement(h.i, {
						onClick: this.props.closeModal,
						"data-redditstyle": !0
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})))))
				}
			}
			const S = Object(i.b)(null, (e, t) => ({
				closeModal: () => e(Object(m.i)(y))
			}))(k);
			t.a = Object(p.a)(Object(u.c)(S))
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
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "s", (function() {
				return O
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "r", (function() {
				return w
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				i = n("./src/reddit/icons/svgs/Close/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				c = n.n(a);
			const l = o.a.wrapped(i.a, "CloseIcon", c.a),
				d = o.a.section("ModalBody", c.a),
				u = o.a.section("ModalPostPreview", c.a),
				p = o.a.p("ModalText", c.a),
				m = o.a.div("ModalSmallText", c.a),
				h = o.a.div("ModalDescriptionText", c.a),
				f = o.a.div("ModalMetaText", c.a),
				b = o.a.label("ModalFormItem", c.a),
				g = o.a.wrapped(r.a, "ModalInput", c.a),
				x = o.a.label("ModalInputLabel", c.a),
				C = o.a.footer("ModalFooter", c.a),
				y = o.a.header("ModalHeader", c.a),
				E = o.a.div("ModalTitle", c.a),
				v = o.a.div("ModalAnnotation", c.a),
				_ = o.a.div("ModalMain", c.a),
				O = o.a.textarea("TextArea", c.a),
				k = o.a.wrapped(s.i, "WarningButton", c.a),
				S = o.a.wrapped(s.i, "PrimaryButton", c.a),
				j = o.a.wrapped(s.l, "CancelButton", c.a),
				w = o.a.wrapped(s.o, "RemoveButton", c.a)
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
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/Row.tsx"),
				h = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				g = n("./src/reddit/selectors/tooltip.ts"),
				x = n("./src/reddit/components/OverflowMenu/index.m.less"),
				C = n.n(x);
			const y = l.a.wrapped(p.a, "_Dropdown", C.a),
				E = Object(u.a)(y),
				v = l.a.button("MenuButton", C.a),
				_ = l.a.wrapped(b.a, "MenuIcon", C.a),
				O = l.a.wrapped(m.b, "DropdownRow", C.a),
				k = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(g.b)(t)(e)
				}),
				S = Object(i.b)(k, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(d.h)({
						tooltipId: t
					}))
				})),
				j = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = S(e => {
				const t = Object(h.b)();
				return r.a.createElement(v, {
					"aria-expanded": e.dropdownIsOpen,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("more options", null, {
						hk: "2EnY1x"
					}),
					className: Object(c.a)(e.className, {
						[C.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
					}),
					disabled: e.disabled,
					onClick: j(e),
					onMouseDown: e.handleMouseDown,
					id: e.dropdownId
				}, e.icon ? e.icon : t ? r.a.createElement(f.a, {
					name: "overflow_horizontal"
				}) : r.a.createElement(_, null), r.a.createElement(E, {
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
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				u = n("./src/reddit/actions/postCreation/general.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/Input/index.tsx"),
				b = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				x = n("./src/reddit/icons/svgs/Search/index.tsx"),
				C = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/models/PostCreationForm/index.ts"),
				E = n("./src/reddit/selectors/postCollection.ts"),
				v = n("./src/lib/timeAgo/index.ts"),
				_ = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				O = n("./src/reddit/helpers/name/index.ts"),
				k = n("./src/reddit/models/Subreddit/index.ts"),
				S = n("./src/reddit/models/User/index.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				I = n.n(T),
				P = n("./src/lib/lessComponent.tsx");
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = P.a.div("Container", I.a), R = P.a.h2("PostTitle", I.a), D = P.a.div("MetaLine", I.a), B = P.a.span("SubredditName", I.a), L = P.a.time("InfoSpan", I.a), F = Object(c.c)({
				subreddit: (e, {
					collection: {
						subredditId: t
					}
				}) => t ? Object(j.S)(e, {
					subredditId: t
				}) : void 0,
				user: w.i
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
					} = this.props, s = t && Object(k.g)(t) && n ? Object(O.d)(Object(S.e)(n)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(N, {
						onClick: this.onClick,
						className: I.a.container
					}, i.a.createElement(R, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(D, {
						"data-redditstyle": !0
					}, s && i.a.createElement(B, {
						"data-redditstyle": !0
					}, s), s && i.a.createElement(_.b, null), i.a.createElement(L, null, M._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [M._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(_.b, null), i.a.createElement(L, null, M._("created {time}", [M._param("time", Object(v.d)(e.createdAtUTC))], {
						hk: "2cUc5m"
					}))), o && i.a.createElement("div", {
						className: I.a.onHoverActionText
					}, i.a.createElement("span", null, o)))
				}
			}
			var K = Object(a.b)(F)(A),
				U = n("./src/reddit/helpers/trackers/postCollection.ts"),
				H = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				W = n.n(H);
			const z = `${o.a.assetPath}/img/snoo-drafts.png`,
				V = P.a.div("TopRow", W.a),
				q = P.a.div("TitleRow", W.a),
				G = P.a.div("DetailsContainer", W.a),
				J = P.a.wrapped(C.a, "ButtonRow", W.a),
				Q = P.a.div("CloseWrapper", W.a),
				Z = P.a.wrapped(b.a, "Close", W.a),
				X = P.a.div("Empty", W.a),
				Y = P.a.img("EmptyImage", W.a),
				$ = P.a.p("EmptyText", W.a),
				ee = P.a.div("FilterWrapper", W.a),
				te = P.a.wrapped(f.a, "FilterInput", W.a),
				ne = P.a.wrapped(x.a, "SearchIcon", W.a),
				oe = P.a.wrapped(g.a, "PlusIcon", W.a),
				se = P.a.wrapped(h.m, "CreateCollectionButton", W.a),
				re = Object(d.a)((e, t) => {
					const n = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(n))
				}),
				ie = Object(c.c)({
					collections: E.v
				}),
				ae = Object(a.b)(ie, (e, {
					postId: t,
					isOverlay: n
				}) => ({
					onOpenCreateCollectionModal: () => {
						let o = y.b;
						t && (o = Object(y.t)(t, !!n)), e(Object(u.w)(o))
					}
				}));
			class ce extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(U.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === m.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(U.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(U.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => i.a.createElement(K, {
						key: e.id,
						collection: e,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(U.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return i.a.createElement(X, null, i.a.createElement(Y, {
						src: z
					}), i.a.createElement($, null, s.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return i.a.createElement(X, null, i.a.createElement($, null, s.fbt._("No collection matching filter", null, {
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
						className: W.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(V, null, i.a.createElement(q, {
						"data-redditstyle": !0
					}, t || s.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(Q, {
						onClick: this.close
					}, i.a.createElement(Z, {
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
			const le = Object(l.a)(ae(Object(p.c)(ce)));
			t.a = le
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
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/formatApiError/index.ts"),
				d = n("./src/reddit/actions/postCollection/index.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = n("./src/reddit/constants/postCreation.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/index.tsx"),
				f = n("./src/reddit/controls/Input/index.tsx"),
				b = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				x = n("./src/reddit/icons/svgs/Close/index.tsx"),
				C = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/selectors/postCollection.ts"),
				E = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				v = n.n(E),
				_ = n("./src/lib/lessComponent.tsx");
			const O = _.a.div("Container", v.a),
				k = _.a.div("Content", v.a),
				S = _.a.div("TitleRow", v.a),
				j = _.a.div("Details", v.a),
				w = _.a.wrapped(u.f, "Footer", v.a),
				T = _.a.wrapped(m.l, "CancelButton", v.a),
				I = _.a.div("CloseWrapper", v.a),
				P = _.a.wrapped(x.a, "CloseIcon", v.a),
				M = _.a.label("Label", v.a),
				N = _.a.wrapped(f.a, "TitleInput", v.a),
				R = _.a.wrapped(g.a, "AddCollectionIcon", v.a),
				D = _.a.wrapped(m.i, "PrimaryActionButton", v.a),
				B = _.a.wrapped(b.a, "LoadingIcon", v.a),
				L = _.a.wrapped(h.b, "ErrorText", v.a),
				F = Object(a.c)({
					collection: y.q,
					error: y.c,
					isPending: y.g
				}),
				A = Object(i.b)(F, (e, t) => ({
					onCreate: (t, n) => e(Object(d.b)(t, n)),
					onUpdate: n => e(Object(d.h)(t.collectionId, n))
				}));
			class K extends r.a.PureComponent {
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
					return r.a.createElement(O, null, r.a.createElement(I, {
						onClick: this.props.onCancel
					}, r.a.createElement(P, null)), r.a.createElement(k, null, s && r.a.createElement(r.a.Fragment, null, r.a.createElement(S, null, r.a.createElement(R, null), o.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(j, null, o.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(M, null, s ? o.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : o.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(N, {
						maxLength: p.e,
						onChange: this.onTitleChange,
						placeholder: o.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(w, null, r.a.createElement(C.a, null, r.a.createElement(T, {
						onClick: this.props.onCancel
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(D, {
						onClick: this.onPrimaryButtonClick,
						disabled: n || !i
					}, n ? r.a.createElement(B, {
						sizePx: 10
					}) : a)), t && r.a.createElement(L, null, Object(l.a)(t))))
				}
			}
			t.a = Object(c.a)(A(K))
		},
		"./src/reddit/components/PostCreationForm/CreationControls/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditPicker: "k3D4EVssJ1w-8irx6jW6k",
				subredditPicker: "k3D4EVssJ1w-8irx6jW6k",
				ControlRow: "i0kJNtq5ma1uzbOX9_mM4",
				controlRow: "i0kJNtq5ma1uzbOX9_mM4"
			}
		},
		"./src/reddit/components/PostCreationForm/DivButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "ypAk-GyDXsczk_xkC7Eq_",
				disabled: "_3hBIa9WhGl-wxARDDgBvSE"
			}
		},
		"./src/reddit/components/PostCreationForm/DivButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/components/PostCreationForm/DivButton/index.m.less"),
				c = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, n) => {
					!t && n && n(e)
				},
				u = (e, t, n) => {
					t || (n && n(e), e.defaultPrevented || e.which !== i.a.Enter && e.which !== i.a.Space || e.currentTarget.click())
				};
			t.a = ({
				className: e,
				disabled: t,
				onClick: n,
				onKeyPress: o,
				setRef: i,
				tabIndex: a,
				...p
			}) => s.a.createElement("div", l({
				"aria-disabled": !!t,
				className: Object(r.a)(e, c.a.button, t ? c.a.disabled : null),
				onClick: e => d(e, t, n),
				onKeyPress: e => u(e, t, o),
				role: "button",
				ref: i,
				tabIndex: a || 0
			}, p))
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
				c = n("./src/reddit/actions/postCreation/general.ts"),
				l = n("./src/reddit/components/CommentCreation/MarkdownCommentForm/index.tsx"),
				d = n("./src/reddit/components/FocusableContent/index.tsx"),
				u = n("./src/reddit/components/MarkdownHelp/index.tsx"),
				p = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx"),
				m = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				h = n("./src/reddit/constants/keycodes.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				x = n("./src/reddit/models/PostCreationForm/index.ts"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				y = n("./src/reddit/selectors/editorContent.ts"),
				E = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.m.less"),
				v = n.n(E),
				_ = n("./src/lib/lessComponent.tsx");
			const O = _.a.wrapped(b.a, "LoadingIcon", v.a),
				k = _.a.span("ModeDescription", v.a),
				S = _.a.div("ModeWrapper", v.a),
				j = _.a.button("SwitchModeButton", v.a),
				w = _.a.wrapped(l.a, "MarkdownHelpButton", v.a),
				T = _.a.div("Toolbar", v.a),
				I = Object(a.c)({
					activeModalId: C.a,
					isConverting: e => Object(y.a)(e)
				}),
				P = Object(i.b)(I, (e, t) => ({
					onChange: n => {
						e(Object(c.c)(n)), t.onChange && t.onChange(n)
					},
					helpModalToggled: () => e(Object(c.w)(u.b)),
					switchToRTEModalToggled: () => e(Object(c.w)(p.a.SWITCH_TO_RTE_MODAL_ID))
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
						this.props.value ? this.props.switchToRTEModalToggled() : this.props.onSwitchEditorMode(x.h.RICH_TEXT, this.props.value)
					}, this.handleSwitchToRTEConfirm = () => {
						this.props.switchToRTEModalToggled(), this.props.onSwitchEditorMode(x.h.RICH_TEXT, this.props.value)
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
					}, r.a.createElement(T, null, r.a.createElement(S, null, r.a.createElement(k, null, "Markdown"), r.a.createElement(w, {
						onClick: this.props.helpModalToggled
					})), r.a.createElement(N, {
						isConverting: t,
						onClick: this.handleSwitchModeClick
					})), r.a.createElement(m.a, {
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
					})), this.props.activeModalId === u.b && r.a.createElement(u.a, null), this.props.activeModalId === p.a.SWITCH_TO_RTE_MODAL_ID && r.a.createElement(p.b, {
						modalId: p.a.SWITCH_TO_RTE_MODAL_ID,
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
				return n ? r.a.createElement(f.q, {
					priority: f.b.Plain,
					size: f.c.XS,
					onClick: t,
					Icon: e ? O : void 0,
					text: s
				}) : r.a.createElement(j, {
					onClick: t
				}, e && r.a.createElement(O, {
					sizePx: 12
				}), s)
			});
			t.a = P(M)
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
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = n.n(u),
				m = n("./src/lib/lessComponent.tsx");
			const h = m.a.wrapped(c.i, "PrimaryButton", p.a),
				f = m.a.wrapped(i.o, "ModalText", p.a);
			class b extends s.a.PureComponent {
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
					return s.a.createElement(i.d, null, s.a.createElement(i.h, null, s.a.createElement(d.a, null, s.a.createElement(i.p, null, this.props.titleText), s.a.createElement(l.a, {
						onClick: this.props.onClose
					}, s.a.createElement(i.b, null)))), s.a.createElement(i.k, null, s.a.createElement(f, null, this.props.bodyText)), s.a.createElement(i.f, null, s.a.createElement(i.a, {
						onClick: this.props.onSecondaryAction
					}, this.props.secondaryButtonText), s.a.createElement(h, {
						onClick: this.props.onPrimaryAction
					}, this.props.primaryButtonText)))
				}
			}
			t.a = Object(r.a)(b)
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
			class p extends i.a.PureComponent {
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
			t.b = p
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
				c = n.n(a),
				l = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less"),
				d = n.n(l),
				u = n("./src/lib/lessComponent.tsx");
			const p = u.a.div("Container", d.a),
				m = u.a.select("Select", d.a),
				h = u.a.span("Delimiter", d.a),
				f = 2018,
				b = e => {
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
			class x extends i.a.PureComponent {
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
					return i.a.createElement(p, {
						className: this.props.className
					}, i.a.createElement(m, {
						onChange: this.onChangeMonth,
						value: t
					}, c()(12).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, b(e)))), i.a.createElement(h, null, "/"), i.a.createElement(m, {
						onChange: this.onChangeDay,
						value: n
					}, c()(1, 32).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), i.a.createElement(h, null, "/"), i.a.createElement(m, {
						onChange: this.onChangeYear,
						value: e
					}, c()(f, f + 10).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var C = x,
				y = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				E = n.n(y);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				O = u.a.input("Input", E.a);

			function k(e) {
				return _() ? i.a.createElement(O, v({
					type: "date"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : i.a.createElement(C, e)
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
				c = n.n(a),
				l = n("./src/reddit/components/FocusableContent/index.tsx"),
				d = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less"),
				u = n.n(d),
				p = n("./src/lib/lessComponent.tsx");
			const m = p.a.wrapped(l.a, "Container", u.a),
				h = p.a.input("Input", u.a),
				f = p.a.span("Delimiter", u.a),
				b = e => ("0" + e).slice(-2),
				g = (e, t) => {
					const n = +e.slice(-2);
					if (Number.isInteger(n)) return n > t ? 0 : n
				};
			class x extends i.a.PureComponent {
				constructor(e) {
					super(e), this.callOnChange = () => {
						let e = c()(+this.state.hour, 0, 24);
						const t = c()(+this.state.minute, 0, 59);
						24 === e && t > 0 && (e = 0), this.setState({
							hour: e,
							minute: t
						});
						const n = `${b(e)}:${b(t)}`;
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
					return i.a.createElement(m, {
						className: this.props.className,
						isFocused: e
					}, i.a.createElement(h, {
						type: "number",
						onChange: this.onChangeHour,
						onFocus: this.onHourInputFocus,
						onBlur: this.onHourInputBlur,
						value: b(this.state.hour)
					}), i.a.createElement(f, null, ":"), i.a.createElement(h, {
						type: "number",
						onChange: this.onChangeMinute,
						onFocus: this.onMinuteInputFocus,
						onBlur: this.onMinuteInputBlur,
						value: b(this.state.minute)
					}))
				}
			}
			var C = x,
				y = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				E = n.n(y);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				O = p.a.input("TimeInput", E.a);

			function k(e) {
				return _() ? i.a.createElement(O, v({
					type: "time"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : i.a.createElement(C, e)
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
				c = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.m.less"),
				l = n.n(c);
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
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/timezone/index.ts"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/RadioInput/index.tsx"),
				f = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				b = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				g = n("./src/reddit/helpers/trackers/postEvent.ts"),
				x = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				C = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/models/PostCreationForm/index.ts"),
				E = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				v = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				_ = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimezoneSelector/index.tsx"),
				O = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.m.less"),
				k = n.n(O);
			const S = 240,
				j = () => {
					const e = new Date;
					e.setMinutes(60);
					const t = Object(l.g)(e);
					return e.setMinutes(e.getMinutes() + S), {
						startDate: t,
						endDate: Object(l.g)(e),
						submitTime: y.i.Now,
						timezoneName: Object(l.b)() || l.a
					}
				},
				w = c.a.div("Container", k.a),
				T = c.a.div("Content", k.a),
				I = c.a.div("TitleRow", k.a),
				P = c.a.hr("Hr", k.a),
				M = c.a.wrapped(v.a, "TimeInput", k.a),
				N = c.a.div("TimeSelectionRow", k.a),
				R = c.a.div("RadioOptionContent", k.a),
				D = c.a.span("OptionDetails", k.a),
				B = c.a.wrapped(h.a, "RadioInput", k.a),
				L = c.a.wrapped(f.a, "RadioOption", k.a),
				F = c.a.span("Delimiter", k.a),
				A = c.a.wrapped(d.f, "Footer", k.a),
				K = c.a.wrapped(m.l, "CancelButton", k.a),
				U = c.a.wrapped(m.l, "DeleteButton", k.a),
				H = c.a.div("ErrorMessage", k.a),
				W = c.a.wrapped(x.a, "ClearIcon", k.a);
			class z extends r.a.PureComponent {
				constructor(e) {
					super(e), this.currentTimezone = Object(l.b)(), this.maxDate = Object(u.a)(), this.buildEventSchedule = () => ({
						startDate: Object(b.a)(this.state.startDate, this.state.startTime),
						endDate: Object(b.a)(this.state.endDate, this.state.endTime),
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
							const n = Object(l.f)(Object(b.a)(e, t));
							n.setMinutes(n.getMinutes() + S);
							const [o, s] = Object(b.i)(Object(l.g)(n));
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
						const r = Object(l.f)(Object(b.a)(n, s)),
							i = Object(l.f)(Object(b.a)(e, t));
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
						return Object(b.b)(e, t)
					}, this.renderSubmitTimeRadio = () => r.a.createElement(B, {
						value: this.state.submitTime,
						name: "submit_time",
						onChange: this.onSubmitTimeChange
					}, r.a.createElement(L, {
						showButton: !0,
						value: y.i.Now
					}, r.a.createElement(R, null, r.a.createElement("span", null, o.fbt._("Submit post now", null, {
						hk: "2ueTnc"
					})), r.a.createElement(D, null, o.fbt._("Submitting post before your event allows people to follow your event and come back at the event time", null, {
						hk: "3LTavv"
					})))), r.a.createElement(L, {
						showButton: !0,
						value: y.i.AtEventTime
					}, r.a.createElement(R, null, r.a.createElement("span", null, this.getSubmitAtLabel()), r.a.createElement(D, null, o.fbt._("This post will be editable and hidden from people visiting your community until the event starts.", null, {
						hk: "1fGKlZ"
					})))));
					const t = e.schedule || j(),
						[n, s] = Object(b.i)(t.startDate),
						[i, c] = Object(b.i)(t.endDate);
					this.state = {
						startDate: n,
						startTime: s,
						endDate: i,
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
					return r.a.createElement(w, null, r.a.createElement(T, null, r.a.createElement(I, null, o.fbt._("When is the event?", null, {
						hk: "2fTD7f"
					})), r.a.createElement(N, null, o.fbt._("{start time}{to}{end time}", [o.fbt._param("start time", r.a.createElement("fieldset", null, r.a.createElement("legend", null, o.fbt._("Start time", null, {
						hk: "3nqplI"
					})), r.a.createElement(E.a, {
						max: this.maxDate,
						onChange: this.onStartDateChange,
						value: this.state.startDate
					}), r.a.createElement(M, {
						onChange: this.onStartTimeChange,
						value: this.state.startTime
					}))), o.fbt._param("to", r.a.createElement(F, null, o.fbt._("to", null, {
						hk: "2tWTBK"
					}))), o.fbt._param("end time", r.a.createElement("fieldset", {
						style: {
							opacity: this.state.isEndTimeTouched ? 1 : .5
						}
					}, r.a.createElement("legend", null, o.fbt._("End time (optional)", null, {
						hk: "2XKdsz"
					})), r.a.createElement(E.a, {
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
					}), r.a.createElement(_.a, {
						selectedTimezoneName: this.state.timezoneName,
						onChange: this.onTimezoneChange
					}))), e && r.a.createElement(r.a.Fragment, null, r.a.createElement(P, null), r.a.createElement("fieldset", null, r.a.createElement("legend", null, o.fbt._("When do you want to submit this post?", null, {
						hk: "3kBgxg"
					})), this.renderSubmitTimeRadio()))), r.a.createElement(A, null, r.a.createElement(C.a, null, this.props.schedule && this.props.shouldShowDeleteButton && r.a.createElement(U, {
						onClick: this.onDeleteButtonClick
					}, r.a.createElement(W, null), o.fbt._("Clear", null, {
						hk: "npkgK"
					})), r.a.createElement(K, {
						onClick: this.onCancelButtonClick
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(m.i, {
						onClick: this.onApplyClick,
						disabled: !!t
					}, o.fbt._("Apply", null, {
						hk: "2TE8JD"
					}))), t && r.a.createElement(H, null, t)))
				}
			}
			t.default = Object(i.a)(Object(p.c)(z))
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
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				m = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				h = n("./src/reddit/components/FlairPreview/index.tsx"),
				f = n("./src/reddit/components/FlairSearch/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/models/Flair/index.ts"),
				x = n("./src/reddit/selectors/moderatorPermissions.ts"),
				C = n("./src/reddit/selectors/postFlair.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				_ = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				O = n.n(_);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const k = (e, t = !1, n = o.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`,
				S = Object(c.c)({
					flairData: C.d,
					subreddit: y.S,
					isMod: (e, t) => !!Object(x.i)(e, t)
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
						subreddit: Object(E.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(v.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, n = Object(v.c)(this.props.flairs) || null;
					return Object(v.b)(e, t, n)
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
						templates: c,
						templateIds: l
					} = o, {
						canSave: d
					} = this.canSave();
					return i.a.createElement(m.a, {
						className: n
					}, i.a.createElement(p.a, {
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
					}), i.a.createElement(f.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: l,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: O.a.buttonsRow
					}, i.a.createElement(b.i, {
						disabled: !d,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(b.l, {
						className: O.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const w = Object(a.b)(S, (e, t) => ({
				closeModal: () => e(Object(u.i)(t.modalId))
			}))(j);
			t.a = Object(d.a)(Object(l.c)(w))
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
			} = r.a, a = `${i}/help/contentpolicy`, c = `${i}/wiki/reddiquette`;
			var l = n("./src/reddit/components/PostingSidebar/PolicyRow/index.m.less"),
				d = n.n(l);
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/icons/svgs/SnooPosting/index.tsx"),
				d = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.m.less"),
				p = n.n(u),
				m = n("./src/lib/lessComponent.tsx");
			const h = m.a.wrapped(l.a, "Snoo", p.a),
				f = m.a.li("Li", p.a),
				b = m.a.ol("Ol", p.a),
				g = m.a.div("Title", p.a),
				x = Object(a.c)({
					submissionType: d.fb
				});
			t.a = m.a.wrapped(Object(i.b)(x)(e => {
				const {
					className: t,
					submissionType: n
				} = e, s = n === c.Lb.CROSSPOST;
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(g, null, r.a.createElement(h, null), s ? o.fbt._("Crossposting to Reddit", null, {
					hk: "2ODPDt"
				}) : o.fbt._("Posting to Reddit", null, {
					hk: "8eEIT"
				})), r.a.createElement(b, null, r.a.createElement(f, null, o.fbt._("Remember the human", null, {
					hk: "1x3u5R"
				})), r.a.createElement(f, null, o.fbt._("Behave like you would in real life", null, {
					hk: "3pxfk1"
				})), r.a.createElement(f, null, o.fbt._("Look for the original source of content", null, {
					hk: "1FfUM4"
				})), r.a.createElement(f, null, o.fbt._("Search for duplicates before posting", null, {
					hk: "3Ij1gf"
				})), r.a.createElement(f, null, o.fbt._("Read the community’s rules", null, {
					hk: "3RNQW2"
				})), s && r.a.createElement(f, null, o.fbt._("You must join a community to crosspost there", null, {
					hk: "1YAEPX"
				}))))
			}), "Component", p.a)
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
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/IdCard/async.tsx"),
				u = n("./src/reddit/components/SidebarFooter/index.tsx"),
				p = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = n("./src/reddit/components/Widgets/PostCollection/index.tsx"),
				h = n("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/models/Widgets/index.ts"),
				g = n("./src/reddit/selectors/postCreations.ts"),
				x = n("./src/reddit/selectors/profile.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/selectors/widgets.ts"),
				E = n("./src/reddit/components/PostingSidebar/PolicyRow/index.tsx"),
				v = n("./src/reddit/components/PostingSidebar/PostingReddiquette/index.tsx"),
				_ = n("./src/reddit/components/PostingSidebar/index.m.less"),
				O = n.n(_),
				k = n("./src/lib/lessComponent.tsx");
			const S = Object(r.a)({
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
				w = Object(f.t)(),
				T = new Set(["all", "post"]),
				I = Object(l.a)((e, {
					pageLayer: t
				}) => {
					const n = Object(f.q)(e, {
						pageLayer: t
					});
					return n && Object(C.R)(e, {
						subredditId: n.id
					})
				}, e => (e || []).filter(e => T.has(e.kind))),
				P = (e, {
					pageLayer: t
				}) => {
					const n = Object(f.q)(e, {
						pageLayer: t
					});
					return !(!n || !Object(y.d)(e, {
						subredditName: n.name
					}))
				},
				M = Object(l.c)({
					hasIdCardWidgetData: P,
					isCreationPagePending: g.E,
					profile: (e, {
						pageLayer: t,
						subredditOrProfileId: n
					}) => n ? Object(x.p)(e, {
						profileId: n
					}) : Object(f.j)(e, {
						pageLayer: t
					}),
					subreddit: f.q,
					subredditRules: I,
					currentPostCollection: f.f
				}),
				N = Object(c.b)(M),
				R = e => {
					const {
						className: t,
						currentPostCollection: n,
						hasIdCardWidgetData: o,
						isCreationPagePending: s,
						profile: r,
						subreddit: i,
						subredditRules: c
					} = e, l = o || s;
					return a.a.createElement(j, {
						className: t
					}, n && a.a.createElement(m.a, {
						collection: n
					}), i && l && a.a.createElement(p.a, null, a.a.createElement(d.a, {
						isSubmissionPage: !0,
						listingName: i.name
					})), r && !i && a.a.createElement(p.a, null, a.a.createElement(S, {
						profileName: r.name,
						isOverlay: !1,
						isSubmissionPage: !0
					})), i && c && a.a.createElement(p.a, null, a.a.createElement(h.a, {
						subredditName: i.name,
						display: b.e.COMPACT,
						rules: c,
						redditStyle: !0
					})), a.a.createElement(v.a, null), a.a.createElement(p.a, null), a.a.createElement(E.a, null), a.a.createElement(u.a, {
						redditStyle: !0
					}))
				};
			t.a = w(N(R))
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(e, t, n) {
			e.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/ProgressBar/index.m.less"),
				a = n.n(i);
			t.a = ({
				className: e,
				innerBarClassName: t,
				percent: n
			}) => s.a.createElement("div", {
				className: Object(r.a)(a.a.outerBar, e)
			}, s.a.createElement("div", {
				className: Object(r.a)(a.a.innerBar, t),
				style: {
					width: `${n.toFixed(2)}%`
				}
			}))
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
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				d = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/RequestPendingBanner/index.m.less"),
				h = n.n(m);
			const f = c.a.wrapped(l.a, "Banner", h.a),
				b = Object(i.b)(() => Object(a.c)({
					restrictions: p.p,
					subreddit: u.e
				}));
			t.a = b(({
				restrictions: e,
				subreddit: t
			}) => {
				if (!t) return null;
				const n = e === d.e.Comment ? d.a.Create : d.a.Draft;
				return r.a.createElement(f, {
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
					className: Object(a.a)(l.a.editorWrapper, e),
					style: o ? {
						height: o
					} : void 0,
					ref: n
				}, t),
				p = ({
					isFullHeight: e,
					textAreaRef: t,
					...n
				}) => s.a.createElement(i.a, d({
					className: Object(a.a)(l.a.textareaAutosize, {
						[l.a.mIsFullHeight]: e
					}),
					innerRef: t
				}, n));
			class m extends s.a.Component {
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
					}, s.a.createElement(p, d({}, r, {
						children: !0,
						isFullHeight: !!i,
						textAreaRef: n
					})))
				}
			}
			t.a = m
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
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = n.n(a);
			const l = e => s.a.createElement("button", {
					className: Object(r.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && s.a.createElement("span", {
					className: c.a.TextWrapper
				}, e.text, " ")),
				d = i.a.wrapped(l, "ApproveButton", c.a),
				u = i.a.wrapped(l, "RemoveButton", c.a),
				p = e => s.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/RichTextEditor/Blockquote/index.m.less": function(e, t, n) {
			e.exports = {
				BlockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6",
				blockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6"
			}
		},
		"./src/reddit/components/RichTextEditor/CodeBlock/index.m.less": function(e, t, n) {
			e.exports = {
				CodeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh",
				codeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh"
			}
		},
		"./src/reddit/components/RichTextEditor/DragController/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			}));
			var o = n("./node_modules/lodash/includes.js"),
				s = n.n(o);
			var r = n("./src/reddit/helpers/dom/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const a = e => e.className.indexOf("public-DraftEditor-content") >= 0,
				c = e => !!e.parentElement && !!e.parentElement.parentElement && a(e.parentElement.parentElement),
				l = e => !(!e.dataset.block || !e.dataset.offsetKey),
				d = e => {
					const {
						offsetKey: t
					} = e.dataset;
					return t ? (e => e.split("-")[0])(t) : ""
				},
				u = (e, t) => {
					return ((e, t) => {
						const n = function(e, t) {
							let n = 0,
								o = e.length - 1;
							for (; n <= o;) {
								const s = o + n >> 1,
									r = t(e[s]);
								if (r > 0) n = s + 1;
								else {
									if (!(r < 0)) return s;
									o = s - 1
								}
							}
							return n
						}(e, e => {
							const n = e.getBoundingClientRect();
							return t < n.top ? -1 : t > n.bottom ? 1 : 0
						});
						return e[Math.min(n, e.length - 1)]
					})(e.querySelectorAll("[data-block][data-offset-key]"), t)
				},
				p = (e, t) => {
					const n = Object(r.b)(e, l, a);
					return n || u(e, t)
				},
				m = (e, t) => {
					const n = (e => {
						const t = e.target;
						if (!(t instanceof HTMLElement)) return;
						const n = Object(r.b)(t, a);
						if (!n) return;
						const o = p(t, e.clientY);
						if (!o) return;
						const s = Object(r.b)(o, c);
						return s ? {
							editorContentElement: n,
							topLevelElement: s,
							blockElement: o
						} : void 0
					})(t);
					if (!n) return;
					const {
						topLevelElement: o,
						blockElement: s
					} = n, l = d(s), u = e.getCurrentContent(), m = u.getBlockForKey(l);
					if (!m) return;
					const {
						upperElement: h,
						lowerElement: f
					} = ((e, t, n, o) => {
						let s = n,
							r = n;
						if (e.getType() === i.b.UNSTYLED) s = r = t;
						else if (Object(i.o)(e.getType())) {
							s = r = t;
							const a = o.getBlockAfter(e.getKey());
							a && Object(i.u)(a.getType()) && (r = n.nextElementSibling)
						} else Object(i.u)(e.getType()) && (s = n.previousElementSibling, r = t);
						return {
							upperElement: s,
							lowerElement: r
						}
					})(m, s, o, u), {
						clientY: b,
						isBefore: g
					} = ((e, t, n) => {
						const o = e.getBoundingClientRect(),
							s = t.getBoundingClientRect();
						let i, c;
						if (n > (o.top + s.bottom) / 2) {
							i = s.bottom, c = !1;
							const e = Object(r.b)(t, e => !!e.nextElementSibling, a);
							if (e) {
								i = (e.nextElementSibling.getBoundingClientRect().top + s.bottom) / 2
							}
						} else {
							i = o.top, c = !0;
							const t = Object(r.b)(e, e => !!e.previousElementSibling, a);
							if (t) {
								i = (t.previousElementSibling.getBoundingClientRect().bottom + o.top) / 2
							}
						}
						return {
							clientY: i,
							isBefore: c
						}
					})(h, f, t.clientY);
					let x = l;
					if (m.getType() !== i.b.UNSTYLED) {
						const e = p(g ? h : f, b);
						e && (x = d(e))
					}
					return {
						clientY: b,
						isBefore: g,
						blockKey: x
					}
				},
				h = e => e.items ? !!Array.from(e.items).find(e => "file" === e.kind) : !(!e.files || !e.files.length) || s()(e.types, "Files"),
				f = e => e.items ? Array.from(e.items).map(e => "file" === e.kind ? e.getAsFile() : null).filter(Boolean) : e.files ? Array.from(e.files) : []
		},
		"./src/reddit/components/RichTextEditor/DragController/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_13Sj3UMDKkCCJTq88berCB",
				hideCaret: "_2BqK1CuzH2oWi2F9_cuFPQ",
				DropLine: "z5iuD3MVYcfS7tTihbvof",
				dropLine: "z5iuD3MVYcfS7tTihbvof",
				Tooltip: "_1z9S1KmnM79xn-UA0FnbP6",
				tooltip: "_1z9S1KmnM79xn-UA0FnbP6"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				c = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = i.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: o,
					text: i,
					tooltipContentClass: a,
					...d
				} = e;
				return s.a.createElement("div", l({}, d, {
					className: Object(r.a)(c.a.container, n)
				}), i ? s.a.createElement("div", {
					className: Object(r.a)(c.a.tooltip, a, o ? c.a.below : c.a.above)
				}, i) : null, t)
			}, "HoverTooltip", c.a)
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less": function(e, t, n) {
			e.exports = {
				LinkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				linkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				Link: "_3vJCj_aXdDc-UXA9fDK-z-",
				link: "_3vJCj_aXdDc-UXA9fDK-z-",
				LinkButton: "_1NtBcR7JgjxkWLJrk3ddD3",
				linkButton: "_1NtBcR7JgjxkWLJrk3ddD3"
			}
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less": function(e, t, n) {
			e.exports = {
				EditForm: "_1iFkUjPC4J8jzWrDthDpcv",
				editForm: "_1iFkUjPC4J8jzWrDthDpcv",
				LinkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				linkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				Input: "_2rXi0UvEKRcI3WdI52LAx1",
				input: "_2rXi0UvEKRcI3WdI52LAx1",
				Label: "_2olni9Ucr8-t8W62nTkY_",
				label: "_2olni9Ucr8-t8W62nTkY_",
				HintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				hintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				InvalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				invalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				SubmitButton: "_8a_rf-Al8VNnUQ42WlvF",
				submitButton: "_8a_rf-Al8VNnUQ42WlvF"
			}
		},
		"./src/reddit/components/RichTextEditor/OrderedList/index.m.less": function(e, t, n) {
			e.exports = {
				OrderedListWrapper: "_1QXegNe8bOemD558m-vc9t",
				orderedListWrapper: "_1QXegNe8bOemD558m-vc9t"
			}
		},
		"./src/reddit/components/RichTextEditor/Paragraph/index.m.less": function(e, t, n) {
			e.exports = {
				ParagraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O",
				paragraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O"
			}
		},
		"./src/reddit/components/RichTextEditor/TextRendering/index.m.less": function(e, t, n) {
			e.exports = {
				H1: "_15ThA3NFuzpQTnPu0I3QKj",
				h1: "_15ThA3NFuzpQTnPu0I3QKj",
				H2: "_3R5icAd6cRzwpq-yhvQUoW",
				h2: "_3R5icAd6cRzwpq-yhvQUoW",
				H3: "_3UxnA7bFPnKoS0rKMO1UYe",
				h3: "_3UxnA7bFPnKoS0rKMO1UYe",
				H4: "_10CFPbxVR0HQhyRBkeExmO",
				h4: "_10CFPbxVR0HQhyRBkeExmO",
				H5: "_3bidJE2WceaRjyBA8LLfp3",
				h5: "_3bidJE2WceaRjyBA8LLfp3",
				H6: "_27N6aQ0-d-ntRM1JkDwGg7",
				h6: "_27N6aQ0-d-ntRM1JkDwGg7"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less": function(e, t, n) {
			e.exports = {
				FormatterButton: "alPx0QCb4Fws5307SrGWu",
				formatterButton: "alPx0QCb4Fws5307SrGWu",
				enabled: "_1H0LLEwUP5ys6cgxr9KhMa",
				active: "_32EiQr-Px2GJvCfigwwmuK"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				l = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				d = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less"),
				u = n.n(d);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => {
				e.preventDefault(), e.stopPropagation()
			};
			t.a = i.a.wrapped(e => {
				const {
					active: t,
					className: n,
					disabledTooltip: o,
					enabled: i = !0,
					tooltip: d,
					Icon: h,
					onClick: f,
					tooltipBelow: b,
					children: g
				} = e, x = Object(c.a)(), C = {
					"aria-label": d,
					"aria-selected": t,
					className: Object(r.a)(u.a.button, n, {
						[u.a.active]: !!t,
						[u.a.enabled]: i
					}),
					onMouseDown: m,
					onClick: e => {
						m(e), i && f && f(e)
					},
					role: "button",
					tabIndex: -1
				};
				return x ? s.a.createElement(a.q, p({}, C, {
					size: a.c.S,
					priority: a.b.Plain,
					isSquare: !0,
					Icon: h
				}), s.a.createElement(l.a, {
					text: (i ? d : o) || "",
					tooltipContentClass: e.tooltipContentClass,
					renderBelow: b
				}), g) : s.a.createElement("div", C, s.a.createElement(l.a, {
					text: (i ? d : o) || "",
					tooltipContentClass: e.tooltipContentClass,
					renderBelow: b
				}), h ? s.a.createElement(h, null) : null, g)
			}, "FormatterButton", u.a)
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				loadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				Text: "EVdFfF5K7kZFMaYpSHbLe",
				text: "EVdFfF5K7kZFMaYpSHbLe",
				Button: "_1Mg8ZhclDuQlkzEqVU21qu",
				button: "_1Mg8ZhclDuQlkzEqVU21qu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/PostCreationForm/DivButton/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				m = n("./src/reddit/selectors/editorContent.ts"),
				h = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				f = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less"),
				b = n.n(f);
			const g = c.a.wrapped(u.a, "LoadingIcon", b.a),
				x = c.a.span("Text", b.a),
				C = c.a.wrapped(l.a, "Button", b.a),
				y = Object(a.c)({
					isConverting: (e, t) => Object(m.a)(e, t.draftKey)
				}),
				E = Object(i.b)(y);
			t.a = r.a.memo(E(e => {
				return Object(p.a)() ? r.a.createElement(d.q, {
					priority: d.b.Plain,
					size: d.c.XS,
					text: r.a.createElement(r.a.Fragment, null, e.isConverting && r.a.createElement(g, {
						sizePx: 12
					}), o.fbt._("Markdown Mode", null, {
						hk: "1DXoXV"
					})),
					"aria-label": o.fbt._("Switch to markdown", null, {
						hk: "OxsM0"
					}),
					tabIndex: -1,
					className: e.className,
					onClick: e.onClick
				}, !e.shouldHideTooltip && r.a.createElement(h.a, {
					text: o.fbt._("Switch to markdown", null, {
						hk: "4mWw83"
					})
				})) : r.a.createElement(C, {
					"aria-label": o.fbt._("Switch to markdown", null, {
						hk: "OxsM0"
					}),
					tabIndex: -1,
					className: e.className,
					onClick: e.onClick
				}, e.isConverting && r.a.createElement(g, {
					sizePx: 12
				}), !e.shouldHideTooltip && r.a.createElement(h.a, {
					text: o.fbt._("Switch to markdown", null, {
						hk: "4mWw83"
					})
				}), r.a.createElement(x, null, o.fbt._("Markdown mode", null, {
					hk: "VQcEn"
				})))
			}))
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less": function(e, t, n) {
			e.exports = {
				ImageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				imageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				VideoIcon: "uo_2BSPFse-IQNQbclyKb",
				videoIcon: "uo_2BSPFse-IQNQbclyKb",
				HiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu",
				hiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_3UAl61hrkRAXX5JQ6m_q8R",
				icon: "_3UAl61hrkRAXX5JQ6m_q8R"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return v
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "g", (function() {
				return L
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "k", (function() {
				return A
			})), n.d(t, "d", (function() {
				return K
			})), n.d(t, "l", (function() {
				return U
			})), n.d(t, "h", (function() {
				return H
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "c", (function() {
				return z
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/icons/svgs/FormattingBlockQuotes/index.tsx"),
				c = n("./src/reddit/icons/svgs/FormattingBold/index.tsx"),
				l = n("./src/reddit/icons/svgs/FormattingCodeBlock/index.tsx"),
				d = n("./src/reddit/icons/svgs/FormattingHeading/index.tsx"),
				u = n("./src/reddit/icons/svgs/FormattingItalics/index.tsx"),
				p = n("./src/reddit/icons/svgs/FormattingMonospace/index.tsx"),
				m = n("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				h = n("./src/reddit/icons/svgs/FormattingSpoiler/index.tsx"),
				f = n("./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx"),
				b = n("./src/reddit/icons/svgs/FormattingSuperscript/index.tsx"),
				g = n("./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx"),
				x = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				C = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less"),
				y = n.n(C);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = (e, t = 0) => n => {
					const o = (e => i.a.wrapped(e, "Icon", y.a))(e);
					return r.a.createElement(o, E({}, n, {
						style: {
							padding: t
						}
					}))
				},
				_ = v(a.a),
				O = v(c.a),
				k = v(l.a),
				S = v(d.a),
				j = v(u.a),
				w = v(p.a),
				T = v(m.a),
				I = v(h.a, 1),
				P = v(f.a),
				M = v(b.a),
				N = v(g.a),
				R = {
					type: "style",
					name: "bold",
					Icon: O,
					style: x.k.BOLD,
					tooltipTranslation: () => o.fbt._("Bold", null, {
						hk: "16qNLn"
					})
				},
				D = {
					type: "style",
					name: "italics",
					Icon: j,
					style: x.k.ITALIC,
					tooltipTranslation: () => o.fbt._("Italics", null, {
						hk: "3hxpiB"
					})
				},
				B = {
					type: "style",
					name: "strikethrough",
					Icon: P,
					style: x.k.STRIKETHROUGH,
					tooltipTranslation: () => o.fbt._("Strikethrough", null, {
						hk: "U4hXC"
					})
				},
				L = {
					type: "style",
					name: "inline_code",
					Icon: w,
					style: x.k.MONOSPACE,
					tooltipTranslation: () => o.fbt._("Inline Code", null, {
						hk: "1eNxEt"
					})
				},
				F = {
					type: "style",
					name: "spoiler",
					Icon: I,
					style: x.k.SPOILER,
					tooltipTranslation: () => o.fbt._("Spoiler", null, {
						hk: "1tb6Ht"
					})
				},
				A = {
					type: "style",
					name: "superscript",
					Icon: M,
					style: x.k.SUPERSCRIPT,
					tooltipTranslation: () => o.fbt._("Superscript", null, {
						hk: "sqKFn"
					})
				},
				K = {
					type: "block",
					name: "heading",
					Icon: S,
					block: x.b.H1,
					tooltipTranslation: () => o.fbt._("Heading", null, {
						hk: "4jnBPs"
					})
				},
				U = {
					type: "block",
					name: "unordered_list",
					Icon: N,
					block: x.i.UNORDERED,
					tooltipTranslation: () => o.fbt._("Bulleted List", null, {
						hk: "21Yx7R"
					})
				},
				H = {
					type: "block",
					name: "ordered_list",
					Icon: T,
					block: x.i.ORDERED,
					tooltipTranslation: () => o.fbt._("Numbered List", null, {
						hk: "4BmF1X"
					})
				},
				W = {
					type: "block",
					name: "block_quote",
					Icon: _,
					block: x.e,
					tooltipTranslation: () => o.fbt._("Quote Block", null, {
						hk: "1xUsGm"
					})
				},
				z = {
					type: "block",
					name: "code_block",
					Icon: k,
					block: x.f,
					tooltipTranslation: () => o.fbt._("Code Block", null, {
						hk: "2y19DH"
					})
				}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.m.less": function(e, t, n) {
			e.exports = {
				toolbarContent: "_2vR2-7URvDAFSwQjhcvJ7m",
				isSticky: "r7zyyy152ZTdiHhea0cIj",
				tooltip: "dMXy0l6Saub8-fPDkQvGC",
				SectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				sectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				Spacer: "uoedn0efWwCxoQUIxsJY3",
				spacer: "uoedn0efWwCxoQUIxsJY3"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return B
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "f", (function() {
				return K
			})), n.d(t, "h", (function() {
				return U
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "b", (function() {
				return V
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				d = n("./src/reddit/icons/svgs/FormattingTable/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				m = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				h = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				f = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				b = n("./src/reddit/components/RichTextEditor/table/helpers.ts");
			var g = (e, t, n) => {
					if (Object(m.v)(o.RichUtils.getCurrentBlockType(e))) return e;
					const s = e.getCurrentContent(),
						r = e.getSelection().getEndKey(),
						i = Object(b.l)(t, n),
						a = Object(f.f)(s, r, i, f.a.after, !0),
						c = o.EditorState.push(e, a, h.e);
					return o.EditorState.forceSelection(c, o.SelectionState.createEmpty(i[0].getKey()))
				},
				x = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				C = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				y = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				E = n("./src/lib/constants/index.ts"),
				v = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Video/index.tsx"),
				O = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less"),
				k = n.n(O);
			const S = c.a.wrapped(v.a, "ImageIcon", k.a),
				j = c.a.wrapped(_.a, "VideoIcon", k.a),
				w = c.a.input("HiddenInput", k.a);
			class T extends r.Component {
				constructor() {
					super(...arguments), this.hiddenInputEl = null, this.onFileInputChange = e => {
						e.stopPropagation();
						const t = this.hiddenInputEl;
						t.files && t.files.length && (this.props.onFilesInput(Array.from(t.files)), t.value = "")
					}, this.onButtonClick = () => {
						this.hiddenInputEl && this.hiddenInputEl.click(), this.props.onClick()
					}, this.onHiddenInputClick = e => e.stopPropagation()
				}
				render() {
					const {
						controlsState: e,
						destSubreddit: t,
						type: n
					} = this.props, o = "image" === n, r = e.blocks[m.a];
					let a = !0;
					if (t && t.allowedPostTypes) {
						const {
							images: e,
							videos: n
						} = t.allowedPostTypes;
						a = o ? e : n
					}
					return i.a.createElement(x.a, {
						Icon: o ? S : j,
						active: r.isActive,
						enabled: r.isEnabled && a,
						tooltip: o ? s.fbt._("Add an image", null, {
							hk: "4bqU7J"
						}) : s.fbt._("Add a video", null, {
							hk: "2dn6oZ"
						}),
						onClick: this.onButtonClick
					}, i.a.createElement(w, {
						multiple: !0,
						innerRef: e => this.hiddenInputEl = e,
						onChange: this.onFileInputChange,
						onClick: this.onHiddenInputClick,
						type: "file",
						accept: Array.from(o ? E.a : E.b).join()
					}))
				}
			}
			var I = n("./src/reddit/components/RichTextEditor/Toolbar/index.m.less"),
				P = n.n(I);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const N = Object(C.f)(l.a),
				R = Object(C.f)(d.a),
				D = e => i.a.createElement(x.a, M({}, e, {
					tooltipContentClass: P.a.tooltip
				})),
				B = c.a.div("SectionSpacer", P.a),
				L = c.a.div("Spacer", P.a),
				F = (e, t, n, s, r) => {
					const {
						name: a,
						Icon: c,
						tooltipTranslation: l
					} = e, d = l();
					if ("style" === e.type) {
						const {
							style: o
						} = e;
						return i.a.createElement(D, {
							Icon: c,
							active: t.styles[o].isActive,
							enabled: t.styles[o].isEnabled,
							key: a,
							tooltip: d,
							onClick: () => {
								const e = Object(u.c)(o, n);
								s(e), r(a, ((e, t) => e.getCurrentInlineStyle().contains(t))(e, o))
							}
						})
					} {
						const {
							block: l
						} = e;
						return i.a.createElement(D, {
							Icon: c,
							active: t.blocks[l].isActive,
							enabled: t.blocks[l].isEnabled,
							key: a,
							tooltip: d,
							onClick: () => {
								const e = Object(u.i)(l, n);
								s(e), r(a, ((e, t) => o.RichUtils.getCurrentBlockType(e) === t)(e, l))
							}
						})
					}
				},
				A = (e, t, n, o, s) => e.map(e => F(e, t, n, o, s)),
				K = [C.b, C.e],
				U = [C.j, C.g, C.k, C.i],
				H = [C.d, C.l, C.h, C.a, C.c],
				W = e => i.a.createElement(D, {
					Icon: N,
					active: e.controlsState.link.isActive,
					enabled: e.controlsState.link.isEnabled,
					tooltip: s.fbt._("Link", null, {
						hk: "e4PGW"
					}),
					onClick: () => {
						e.onLinkButtonClick(), e.trackOnClick("link", !0)
					}
				}),
				z = e => i.a.createElement(D, {
					Icon: R,
					active: e.controlsState.blocks[m.l].isActive,
					enabled: e.controlsState.blocks[m.l].isEnabled,
					tooltip: s.fbt._("Table", null, {
						hk: "3cHfLT"
					}),
					onClick: () => {
						e.onChange(g(e.editorState, 3, 2)), e.trackOnClick("table", !0)
					}
				}),
				V = e => {
					const {
						className: t,
						allowMediaUploads: n = !1,
						destSubreddit: o,
						editorState: s,
						isOverlay: r,
						onChange: c,
						onFilesSelect: l,
						readOnly: d,
						trackOnClick: u,
						onLinkButtonClick: m,
						onMarkdownButtonClick: h
					} = e, f = Object(p.a)(s);
					return d && Object(p.b)(f), i.a.createElement("div", {
						className: Object(a.a)(P.a.toolbarContent, t, {
							[P.a.isSticky]: !r
						})
					}, A(K, f, s, c, u), i.a.createElement(W, {
						controlsState: f,
						trackOnClick: u,
						onLinkButtonClick: m
					}), A(U, f, s, c, u), i.a.createElement(B, null), A(H, f, s, c, u), i.a.createElement(B, null), i.a.createElement(z, {
						controlsState: f,
						editorState: s,
						trackOnClick: u,
						onChange: c
					}), n && i.a.createElement(T, {
						destSubreddit: o,
						controlsState: f,
						onClick: () => u("image_upload"),
						onFilesInput: l,
						type: "image"
					}), n && i.a.createElement(T, {
						destSubreddit: o,
						controlsState: f,
						onClick: () => u("video_upload"),
						onFilesInput: l,
						type: "video"
					}), i.a.createElement(L, null), i.a.createElement(y.a, {
						onClick: h
					}))
				}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s() {
				const e = window.getSelection();
				if (!e.rangeCount) return null;
				const t = Object(o.getVisibleSelectionRect)(window);
				return t || (!t && e.focusNode && e.focusNode === e.anchorNode ? e.focusNode.getBoundingClientRect() : null)
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltipBox: "tVQ1dB4n0mAWdcQNxFq-K",
				dropdown: "_1akkpO3lymdoWGIc5tjIpm",
				triangle: "_2O2U-Vhc1mg9O7DOwp50Aa",
				triangleBack: "_3IfYYXUMUzn2OvoiMUNcaQ",
				triangleFront: "_3CtwSTtkmKXvzDo3TmCp9C",
				triangleBelow: "_1churYJpAwcb-tf0k1c46F"
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return f
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/index.tsx"),
				a = n("./src/reddit/helpers/dom/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/Tooltip/index.m.less"),
				l = n.n(c);
			const d = 8,
				u = 16,
				p = 15 + u / 2;
			var m;
			! function(e) {
				e[e.None = 0] = "None", e[e.Above = 1] = "Above", e[e.Below = 2] = "Below"
			}(m || (m = {}));
			const h = ({
				isBelow: e = !1,
				style: t
			}) => s.a.createElement("div", {
				className: Object(r.a)(l.a.triangle, {
					[l.a.triangleBelow]: e
				}),
				style: t
			}, s.a.createElement("div", {
				className: l.a.triangleBack
			}), s.a.createElement("div", {
				className: l.a.triangleFront
			}));
			class f extends o.Component {
				constructor(e) {
					super(e), this.containerRef = null, this.updateContainerRef = e => this.containerRef = e, this.setTargetPosition = e => {
						e ? this.updatePositioning(e) : this.setState({
							positioning: null
						})
					}, this.state = {
						positioning: null
					}
				}
				updatePositioning(e) {
					if (!this.containerRef) return;
					const t = this.containerRef.offsetWidth,
						n = this.containerRef.offsetHeight,
						o = this.state.positioning;
					if (!e) {
						if (!o) return;
						if (o.tooltipWidth === t && o.tooltipHeight === n) return
					}
					const s = e ? e.bottom : o.target.bottom,
						r = e ? e.top : o.target.top,
						i = e ? e.left : o.target.left,
						c = Object(a.e)(this.containerRef);
					let l, d, u;
					if (c) {
						const e = c.getBoundingClientRect();
						l = e.bottom - (s || 0), d = i - e.left + c.scrollLeft, u = r - e.top + c.scrollTop
					} else {
						const e = document.documentElement,
							t = window.pageYOffset || e.scrollTop;
						d = i + (window.pageXOffset || e.scrollLeft), u = r + t
					}
					const p = {
						target: {
							top: r,
							left: i
						},
						tooltipWidth: t,
						tooltipHeight: n,
						tooltip: {
							top: u,
							left: d,
							bottom: l
						}
					};
					this.adjustPositionForTriangle(p, c), this.setState({
						positioning: p
					})
				}
				adjustPositionForTriangle(e, t) {
					const {
						trianglePlacement: n
					} = this.props;
					if (!n) return;
					const o = t ? t.offsetWidth : document.documentElement.offsetWidth,
						s = o ? Math.max(e.tooltip.left + e.tooltipWidth - o, 0) : 0;
					e.tooltip.left -= s + p;
					const r = s + p - u / 2;
					let i;
					n === m.Above ? (e.tooltip.top += d, i = -d) : (e.tooltip.top -= e.tooltipHeight + d, i = e.tooltipHeight), e.triangle = {
						top: i,
						left: r
					}
				}
				componentDidUpdate(e, t) {
					e.targetPosition !== this.props.targetPosition ? this.setTargetPosition(this.props.targetPosition || null) : this.updatePositioning()
				}
				componentDidMount() {
					this.setTargetPosition(this.props.targetPosition || null), this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(this.setTargetPosition)
				}
				componentWillUnmount() {
					this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(null)
				}
				render() {
					const {
						aboveParent: e,
						dropdown: t,
						trianglePlacement: n
					} = this.props, {
						positioning: o
					} = this.state, a = o && void 0 !== o.triangle && s.a.createElement(h, {
						isBelow: n === m.Below,
						style: {
							top: o.triangle.top + "px",
							left: o.triangle.left + "px"
						}
					});
					let c = s.a.createElement("div", {
						className: Object(r.a)(l.a.tooltipBox, this.props.className, {
							[l.a.dropdown]: t
						}),
						style: o ? {
							left: o.tooltip.left,
							...e ? {
								bottom: o.tooltip.bottom
							} : {
								top: o.tooltip.top
							}
						} : {},
						ref: this.updateContainerRef
					}, o && this.props.children && s.a.createElement(s.a.Fragment, null, a, this.props.children));
					return this.props.usePortal && (c = Object(i.d)(c, this.props.portalContainer || document.body)), c
				}
			}
		},
		"./src/reddit/components/RichTextEditor/UnorderedList/index.m.less": function(e, t, n) {
			e.exports = {
				UnorderedListWrapper: "vXDC2CysyRNVq3lFirKDs",
				unorderedListWrapper: "vXDC2CysyRNVq3lFirKDs"
			}
		},
		"./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			const o = "bold",
				s = "italic",
				r = "underline",
				i = "undo",
				a = "backspace",
				c = "delete",
				l = "split-block",
				d = "adjust-depth"
		},
		"./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			}));
			const o = "backspace-character",
				s = "insert-fragment",
				r = "insert-characters",
				i = "change-block-data",
				a = "change-block-type",
				c = "remove-range"
		},
		"./src/reddit/components/RichTextEditor/editorStateTransforms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "a", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				c = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/styles.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const u = (e, t) => {
					return t.getSelection().isCollapsed() ? Object(l.a)(e, t) : Object(l.b)(e, t)
				},
				p = (e, t) => {
					const n = t.getCurrentContent(),
						s = t.getSelection(),
						r = s.getEndKey(),
						c = o.RichUtils.getCurrentBlockType(t) === e ? d.n : e;
					let u = t,
						p = o.Modifier.setBlockType(n, s, c);
					const m = n.getBlockForKey(r).getLength();
					if (Object(d.r)(c) || Object(d.q)(c)) {
						const e = o.SelectionState.createEmpty(s.getStartKey()).merge({
							focusKey: s.getEndKey(),
							focusOffset: m
						});
						u = Object(l.c)(u), p = ((e, t) => {
							const n = Object.keys(d.k).reduce((e, n) => o.Modifier.removeInlineStyle(e, t, d.k[n]), e);
							return Object(a.h)(n, t)
						})(p, e)
					}
					if (Object(d.q)(c) || Object(d.p)(c)) {
						const e = p.getBlockAfter(r);
						if (!e || e.getType() !== c && e.getType() !== d.n) {
							const e = o.SelectionState.createEmpty(r).merge({
								anchorOffset: m,
								focusOffset: m
							});
							p = o.Modifier.splitBlock(p, e), p = o.Modifier.setBlockType(p, p.getSelectionAfter(), d.n)
						}
					}
					return p = p.merge({
						selectionAfter: s
					}), o.EditorState.push(u, p, i.c)
				},
				m = (e, t) => {
					const n = o.Modifier.setBlockType(e, t, d.n);
					return o.Modifier.replaceText(n, t, "", Object(s.OrderedSet)([]))
				},
				h = (e, t) => o.EditorState.forceSelection(e, o.SelectionState.createEmpty(t)),
				f = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						r = c.d(t, n),
						a = r.getBlockAfter(n.getEndKey()),
						l = o.SelectionState.createEmpty(a.getKey()),
						u = o.Modifier.replaceText(o.Modifier.setBlockType(r, l, d.n), l, "", Object(s.OrderedSet)([])),
						p = o.EditorState.push(e, u, i.d);
					return h(p, a.getKey())
				},
				b = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						s = t.getBlockForKey(n.getEndKey()),
						i = s.set("depth", Math.max(s.getDepth() - 1, 0)),
						a = t.merge({
							blockMap: t.getBlockMap().merge({
								[s.getKey()]: i
							})
						});
					return o.EditorState.push(e, a, r.a)
				},
				g = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						s = t.getBlockForKey(n.getEndKey()).getKey(),
						r = o.EditorState.push(e, m(t, n), i.c);
					return h(r, s)
				},
				x = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						s = t.getBlockForKey(n.getEndKey()),
						r = s.getKey(),
						a = t.getBlockBefore(r).getKey(),
						c = o.SelectionState.createEmpty(r).merge({
							focusOffset: s.getText().length
						}),
						l = o.EditorState.push(e, m(((e, t) => {
							const n = e.getBlockMap().remove(t);
							return e.merge({
								blockMap: n
							})
						})(t, a), c), i.c);
					return h(l, r)
				},
				C = e => {
					const t = c.d(e.getCurrentContent(), e.getSelection());
					return o.EditorState.push(e, t, r.f)
				},
				y = e => {
					const t = c.a(e.getCurrentContent(), e.getSelection(), "\n");
					return o.EditorState.push(e, t, i.d)
				},
				E = e => {
					const t = e.getSelection(),
						n = c.a(e.getCurrentContent(), t, " ");
					return o.EditorState.push(e, n, i.d)
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "PowerupsEmotesTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PowerupsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx"
				}
			})
		},
		"./src/reddit/components/RichTextEditor/emotes/decorator.m.less": function(e, t, n) {
			e.exports = {
				emote: "Q7hqnjoPSXm7QyvW8qf57",
				sticker: "_1WD0TSe2_gY29FXmFjPCza"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "d", (function() {
				return y
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/lib/memoizeByReference/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				d = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = "⬛";

			function m(e, t) {
				return e.createEntity(a.a.EMOTE, "IMMUTABLE", t)
			}

			function h(e, t) {
				let n = t.getCurrentContent();
				const s = (n = m(n, e)).getLastCreatedEntityKey();
				n = Object(d.b)(n, t.getSelection(), p, void 0, s);
				const r = o.EditorState.push(t, n, i.d);
				return o.EditorState.forceSelection(r, r.getSelection())
			}

			function f(e, t) {
				if (t.getStartKey() !== t.getEndKey()) return !1;
				const n = e.getBlockForKey(t.getEndKey()).getType();
				return !(Object(u.q)(n) || Object(u.r)(n) || Object(u.t)(n))
			}

			function b(e, t) {
				const n = Object(c.a)(e, t, t => {
					const n = t.getEntity();
					return !!n && e.getEntity(n).getType() === a.a.EMOTE
				});
				let s;
				for (; s = n.pop();) {
					const t = o.SelectionState.createEmpty(s.blockKey).merge({
						anchorOffset: s.start,
						focusOffset: s.end
					});
					e = o.Modifier.removeRange(e, t, "backward")
				}
				return e
			}

			function g(e) {
				const t = e.getSelection();
				if (!t.isCollapsed()) return null;
				const n = e.getCurrentContent().getBlockForKey(t.getFocusKey()),
					o = n.getText(),
					s = n.getCharacterList();
				let r = t.getFocusOffset() - 1;
				const i = [];
				for (; r >= 0;) {
					const e = o[r],
						t = s.get(r),
						n = t && t.getEntity();
					if (!e.trim().length || n) return null;
					if (":" === e && i.length > 0) break;
					i.unshift(e), r--
				}
				return r >= 0 && i.length ? i.join("").toLowerCase() : null
			}

			function x(e, t, n) {
				e.findEntityRanges(e => {
					const t = e.getEntity();
					return !!t && n.getEntity(t).getType() === a.a.EMOTE
				}, t)
			}
			const C = Object(r.a)(e => {
				if (e.getBlockMap().size > 1) return !1;
				const t = e.getFirstBlock();
				let n = 0;
				return x(t, () => n++, e), n <= 3 && n === t.getLength()
			});

			function y(e, t) {
				if (C(e.getCurrentContent()) === C(t.getCurrentContent())) return e;
				const n = e.getCurrentContent(),
					r = n.getFirstBlock();
				return o.EditorState.set(e, {
					currentContent: o.Modifier.mergeBlockData(n, Object(l.b)(r), Object(s.Map)({
						_emote_modified: new Date
					}))
				})
			}
		},
		"./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s(e, t, n, s) {
				let r = e.getCharacterList();
				return r = r.withMutations(e => {
					for (let r = t; r < n; r++) e.set(r, o.CharacterMetadata.applyEntity(e.get(r), s))
				}), e.set("characterList", r)
			}
		},
		"./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function s(e, t, n, s, r) {
				const i = e.createEntity(n.getType(), n.getMutability(), n.getData()),
					a = e.getLastCreatedEntityKey();
				return [i, Object(o.a)(t, s, r, a)]
			}

			function r(e, t, n = !1) {
				const o = new Map;
				let r = t,
					i = e;
				return t.forEach((e, t) => {
					e && t && e.findEntityRanges(e => !!e.getEntity(), (n, s) => {
						const r = e.getEntityAt(n),
							i = o.get(r) || [];
						i.push({
							start: n,
							end: s,
							blockKey: t
						}), o.set(r, i)
					})
				}), o.forEach((t, o) => {
					const a = e.getEntity(o);
					(n ? t.slice(1) : t).forEach(({
						start: e,
						end: t,
						blockKey: n
					}) => {
						const o = r.get(n),
							[c, l] = s(i, o, a, e, t);
						i = c, r = r.set(n, l)
					})
				}), [i, r]
			}
		},
		"./src/reddit/components/RichTextEditor/entity/entityTypes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const o = {
					COMMENT_LINK: "COMMENT_LINK",
					EMOTE: "EMOTE",
					LINK: "LINK",
					POST_LINK: "POST_LINK",
					SUBREDDIT_LINK: "SUBREDDIT_LINK",
					USER_LINK: "USER_LINK",
					USER_MENTION: "USER_MENTION"
				},
				s = new Set([o.COMMENT_LINK, o.LINK, o.POST_LINK, o.SUBREDDIT_LINK, o.USER_LINK, o.USER_MENTION]),
				r = (e, t) => {
					const n = e && t.getEntity(e);
					return !!n && (e => s.has(e))(n.getType())
				}
		},
		"./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");

			function s(e, t, n) {
				const s = [];
				return Object(o.a)(e, t, (e, o) => {
					const r = t.getStartKey() === o ? t.getStartOffset() : 0,
						i = t.getEndKey() === o ? t.getEndOffset() : e.getLength();
					e.findEntityRanges(n, (t, n) => {
						r <= n && i >= t && s.push({
							blockKey: o,
							entityKey: e.getEntityAt(t),
							start: t,
							end: n
						})
					})
				}), s
			}
		},
		"./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s(e, t) {
				const n = t.getFocusKey();
				if (n !== t.getAnchorKey()) return;
				const s = e.getBlockForKey(n),
					r = t.getStartOffset(),
					i = t.getEndOffset(),
					a = s.getEntityAt(i) || (i > 0 ? s.getEntityAt(i - 1) : null);
				if (!a) return;
				let c, l;
				if (s.findEntityRanges(e => e.getEntity() === a, (e, t) => {
						e <= r && i <= t && (c = e, l = t)
					}), "number" != typeof c || "number" != typeof l) return;
				const d = s.getText().slice(c, l);
				return {
					entitySelection: o.SelectionState.createEmpty(n).merge({
						anchorOffset: c,
						focusOffset: l
					}),
					entityKey: a,
					entityText: d
				}
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/decorator.m.less": function(e, t, n) {
			e.exports = {
				RegularLink: "_1FRfMxEAy__7c8vezYv9qP",
				regularLink: "_1FRfMxEAy__7c8vezYv9qP"
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/helpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "e", (function() {
				return v
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./src/lib/linkMatchers/index.ts"),
				r = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				d = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = [a.a.SUBREDDIT_LINK, a.a.USER_LINK, a.a.USER_MENTION],
				m = [...p, a.a.LINK];

			function h(e, t, n) {
				e.findEntityRanges(e => {
					const t = e.getEntity();
					return !!t && m.includes(n.getEntity(t).getType())
				}, t)
			}
			const f = e => {
					const t = s.a.match(e);
					if (t && t.length && t[0]) {
						const {
							schema: e,
							url: n
						} = t[0];
						return {
							linkPrefix: e,
							url: n
						}
					}
					return {
						linkPrefix: "",
						url: ""
					}
				},
				b = Object(i.a)((function(e) {
					const t = e.getCurrentContent(),
						n = e.getSelection();
					if (!n.isCollapsed()) return;
					if (Object(u.q)(t.getBlockForKey(n.getStartKey()).getType())) return;
					const r = n.getFocusKey(),
						i = t.getBlockForKey(r),
						a = n.getFocusOffset(),
						c = i.getText(),
						l = c.lastIndexOf(" ", a - 1) + 1,
						p = c.slice(l, a);
					if (!p) return;
					const m = s.e.match(p);
					if (!m) return;
					const h = m[m.length - 1],
						f = l + h.index,
						b = l + h.lastIndex;
					let g = -1;
					if (i.findEntityRanges(e => !!e.getEntity(), (e, t) => {
							e < a && (g = t)
						}), g >= f) return;
					return i.getCharacterList().slice(f, b).find(d.b) ? void 0 : {
						selection: o.SelectionState.createEmpty(r).merge({
							anchorOffset: f,
							focusOffset: b
						}),
						url: h.url
					}
				}));

			function g(e, t, n) {
				const s = e.getSelection();
				let r = e.getCurrentContent();
				const i = (r = r.createEntity(a.a.LINK, "MUTABLE", {
					url: n
				})).getLastCreatedEntityKey();
				return r = (r = o.Modifier.applyEntity(r, t, i)).merge({
					selectionAfter: s
				}), o.EditorState.push(e, r, "apply-entity")
			}
			const x = Object(i.a)((function(e) {
				const t = e.getCurrentContent(),
					n = Object(l.a)(t, e.getSelection());
				if (!n) return;
				const o = t.getEntity(n.entityKey);
				if (o.getType() !== a.a.LINK) return;
				const {
					url: s
				} = o.getData();
				return {
					url: s,
					...n
				}
			}));
			const C = Object(i.a)((function(e) {
				const t = e.getCurrentContent(),
					n = e.getSelection(),
					o = Object(l.a)(t, n);
				if (!o) return;
				const s = n.getFocusOffset(),
					r = t.getEntity(o.entityKey),
					{
						linkPrefix: i
					} = f(o.entityText);
				return !p.includes(r.getType()) || !o.entityText.startsWith(i) || s - o.entitySelection.getStartOffset() < i.length ? void 0 : {
					internalName: o.entityText.slice(i.length),
					...o
				}
			}));

			function y(e, t, n, s) {
				let r = "apply-entity",
					i = e.getCurrentContent(),
					c = e;
				const d = Object(l.a)(i, t);
				if (n)
					if (d) {
						const e = i.getEntity(d.entityKey),
							{
								url: t
							} = e.getData();
						t !== n && (i = i.mergeEntityData(d.entityKey, {
							url: n
						})), void 0 !== s && d.entityText !== s && (i = o.Modifier.replaceText(i, d.entitySelection, s, void 0, d.entityKey), r = "insert-characters")
					} else {
						if (void 0 === s) throw new Error("New link display text must be provided!");
						const e = (i = i.createEntity(a.a.LINK, "MUTABLE", {
							url: n
						})).getLastCreatedEntityKey();
						i = o.Modifier.replaceText(i, t, s, void 0, e), r = "insert-characters"
					}
				else i = (i = o.Modifier.applyEntity(i, t, "")).merge({
					selectionAfter: e.getSelection()
				});
				return i === e.getCurrentContent() ? e : c = o.EditorState.push(c, i, r)
			}

			function E(e, t) {
				const n = C(e);
				if (!n) return e;
				const {
					linkPrefix: s,
					url: i
				} = f(n.entityText), a = `${s===r.d.mention?r.d.profile:s}${t}`, c = n.entitySelection.getStartOffset() + a.length;
				let l = y(e, n.entitySelection, i, a);
				return l = o.EditorState.forceSelection(l, n.entitySelection.merge({
					anchorOffset: c,
					focusOffset: c
				}))
			}

			function v(e, t) {
				if (t.getStartKey() !== t.getEndKey()) return !1;
				const n = e.getBlockForKey(t.getEndKey()).getType();
				return !Object(u.q)(n) && !Object(u.t)(n) && !Object(c.a)(e, t, t => {
					const n = t.getEntity();
					return !!n && e.getEntity(n).getType() !== a.a.LINK
				}).length
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/common.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "g", (function() {
				return h
			}));
			var o, s = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(e) {
				e.before = "before", e.after = "after"
			}(o || (o = {}));
			const a = (e, t) => new s.ContentBlock({
					key: e || Object(s.genKey)(),
					...t ? {
						text: t,
						characterList: Object(r.List)(Object(r.Repeat)(s.CharacterMetadata.create(), t.length))
					} : {}
				}),
				c = e => e.props.children,
				l = e => c(e).props.block,
				d = (e, t, n, r = o.after, c = !1, l = !1) => {
					const d = [];
					let p = -1;
					if (e.getBlockMap().forEach((e, s) => {
							r === o.after && d.push(e), s === t && (d.push(...n), p = d.length - 1), r === o.before && d.push(e)
						}), p >= 0) {
						if (c) {
							const e = d[p + 1];
							e && e.getType() === i.n || d.splice(p + 1, 0, a())
						}
						if (l) {
							const e = p - n.length,
								t = d[e];
							t && t.getType() === i.n || d.splice(e + 1, 0, a())
						}
					}
					return e.merge({
						blockMap: s.BlockMapBuilder.createFromArray(d),
						selectionAfter: u(n[n.length - 1], !1, !0)
					})
				},
				u = (e, t = !1, n = !1) => {
					let o = s.SelectionState.createEmpty(e.getKey()).merge({
						hasFocus: n
					});
					return t && (o = o.merge({
						anchorOffset: e.getLength(),
						focusOffset: e.getLength()
					})), o
				},
				p = (e, t) => {
					let n = e.getBlockBefore(t),
						o = e.getBlockMap();
					return o.get(t) ? (o = o.size > 1 ? o.remove(t) : o.set(t, a(t)), n = n || o.first(), e.merge({
						blockMap: o,
						selectionAfter: u(n, !0)
					})) : e
				},
				m = (e, t) => t.querySelector(`[data-block][data-offset-key="${e}-0-0"]`),
				h = e => e.getType() === i.n && !e.getText()
		},
		"./src/reddit/components/RichTextEditor/helpers/controlsState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forEach.js"),
				s = n.n(o),
				r = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				l = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				u = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				m = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const h = e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						o = {};
					s()(d.k, e => o[e] = {
						isActive: !1,
						isEnabled: !1
					});
					const i = new Set(Object.keys(o));
					if (i.delete(d.k.HIGHLIGHT), n.isCollapsed()) {
						const s = t.getBlockForKey(n.getEndKey()),
							r = s.getType();
						Object(d.q)(r) || Object(d.r)(r) || Object(d.t)(r) || i.forEach(e => o[e].isEnabled = !0), e.getCurrentInlineStyle().forEach(e => {
							e && o[e] && (o[e].isActive = !0)
						}), Object(u.i)(s) && (o[d.k.BOLD] = {
							isEnabled: !1,
							isActive: !1
						})
					} else {
						Object(m.e)(t, n).forEach(e => {
							i.delete(e), o[e] && (o[e].isActive = !0, o[e].isEnabled = !0)
						}), Object(p.a)(t, n, (e, s) => {
							if (!i.size) return !1;
							const a = n.getStartKey() === s ? n.getStartOffset() : 0,
								c = n.getEndKey() === s ? n.getEndOffset() : e.getLength(),
								l = e.getType(),
								u = e.getCharacterList();
							Object(d.q)(l) || Object(d.r)(l) || Object(d.t)(l) || Object(r.a)(u, {
								start: a,
								end: c
							}, (n, s, r, a) => {
								const c = n.getStyle(),
									l = n.getEntity(),
									d = l ? t.getEntity(l) : null;
								if (i.forEach(t => {
										const n = !o[t].isActive,
											s = Object(m.f)(c, e, d, t, n);
										s && s !== c && (o[t].isEnabled = !0, i.delete(t))
									}), !i.size) return !1
							})
						})
					}
					return o
				},
				f = e => {
					const t = {};
					return s()(d.b, n => t[n] = {
						isActive: !1,
						isEnabled: e
					}), t
				},
				b = Object(i.a)(e => {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						o = (e => {
							const t = e.getCurrentContent(),
								n = e.getSelection();
							let o = f(!0),
								r = null;
							if (n.isCollapsed()) r = t.getBlockForKey(n.getEndKey()).getType();
							else {
								let e = null;
								Object(p.a)(t, n, (t, n) => {
									const s = t.getType();
									return Object(d.t)(s) ? (o = f(!1), !1) : (null === e && (e = s), e !== s ? (e = null, !1) : void 0)
								}), r = e
							}
							return null !== r && ((Object(d.v)(r) || Object(d.t)(r)) && s()(o, e => {
								e.isEnabled = !1
							}), o[r].isActive = !0), o
						})(e);
					return {
						giphy: {
							isActive: !1,
							isEnabled: o[d.a].isEnabled && !Object(l.j)(t)
						},
						emote: {
							isActive: !1,
							isEnabled: Object(a.b)(t, n)
						},
						link: {
							isActive: !1,
							isEnabled: Object(c.e)(t, n)
						},
						blocks: o,
						styles: h(e)
					}
				}),
				g = e => {
					s()(e.blocks, e => {
						e.isEnabled = !1
					}), s()(e.styles, e => {
						e.isEnabled = !1
					}), e.link.isEnabled = !1
				}
		},
		"./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts": function(e, t, n) {
			"use strict";

			function o(e, t, n) {
				const o = t.getStartKey(),
					s = t.getEndKey();
				if (o === s) return void n(e.getBlockForKey(o), o);
				let r = !1;
				e.getBlockMap().forEach((e, t) => {
					if (t === o && (r = !0), !r || !e || !t) return;
					const i = n(e, t);
					return t !== s && i
				})
			}
			n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/components/RichTextEditor/helpers/modifiers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts");

			function r(e, t) {
				const n = t.getStartKey();
				if (n !== t.getEndKey()) return;
				const o = e.getBlockForKey(n),
					r = t.getStartOffset(),
					i = t.getEndOffset(),
					a = r > 0 ? o.getEntityAt(r - 1) : null,
					c = o.getEntityAt(i);
				if (!a || !c || a !== c) return;
				const l = e.getEntity(c),
					d = o.getCharacterList().toSeq().skip(i).takeWhile(e => !!e && e.getEntity() === c).count(),
					[u, p] = Object(s.a)(e, o, l, i, i + d);
				return u.merge({
					blockMap: u.getBlockMap().set(o.getKey(), p)
				})
			}

			function i(e, t, n) {
				const s = r(e, t) || e;
				return o.Modifier.replaceWithFragment(s, t, n)
			}

			function a(e, t, n, s, i) {
				let a = e;
				return -1 !== n.indexOf("\n") && (a = r(e, t) || a), o.Modifier.replaceText(a, t, n, s, i)
			}

			function c(e, t, n, s, i) {
				let a = e;
				return -1 !== n.indexOf("\n") && (a = r(e, t) || a), o.Modifier.insertText(a, t, n, s, i)
			}

			function l(e, t) {
				const n = r(e, t) || e;
				return o.Modifier.splitBlock(n, t)
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/forEach.js"),
				s = n.n(o);
			t.a = (e, t) => {
				const n = e.getBlocksAsArray(),
					o = t.getKey(),
					r = t.getType();
				let i = null,
					a = null,
					c = !1;
				if (s()(n, (e, t) => {
						if (c || e.getKey() !== o || (c = !0), e.getType() === r) null === i && (i = t), a = t;
						else {
							if (c) return !1;
							i = null, a = null
						}
					}), c) return a = a || 0, {
					start: i = i || 0,
					blocks: n.slice(i, a + 1)
				}
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/styles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return b
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");
			const d = Object(s.OrderedSet)([]),
				u = (e, t, n, o, r = !0) => {
					const l = t.getType();
					if (Object(a.q)(l) || Object(a.r)(l) || Object(a.t)(l)) return;
					if (o === a.k.BOLD && Object(c.i)(t)) return;
					const u = n ? n.getType() : null;
					return (u === i.a.SUBREDDIT_LINK || u === i.a.USER_LINK) && o !== a.k.SPOILER && o !== a.k.MONOSPACE || u === i.a.EMOTE ? void 0 : o === a.k.MONOSPACE || o === a.k.SPOILER ? r ? Object(s.OrderedSet)([o]) : d : (e.has(a.k.MONOSPACE) || e.has(a.k.SPOILER)) && r ? Object(s.OrderedSet)([o]) : !r || o !== a.k.SUPERSCRIPT && o !== a.k.SUBSCRIPT ? r ? e.add(o) : e.has(o) ? e.delete(o) : void 0 : e.delete(a.k.SUBSCRIPT).delete(a.k.SUPERSCRIPT).add(o)
				},
				p = (e, t) => {
					let n = null,
						o = !0;
					return Object(l.a)(e, t, (s, l) => {
						const d = s.getType(),
							u = Object(c.i)(s);
						if (u || (o = !1), Object(a.q)(d) || Object(a.r)(d) || Object(a.t)(d)) return !1;
						const p = t.getStartKey() === l ? t.getStartOffset() : 0,
							m = t.getEndKey() === l ? t.getEndOffset() : s.getLength(),
							h = s.getCharacterList();
						Object(r.a)(h, {
							start: p,
							end: m
						}, t => {
							const o = t.getEntity();
							if (o && e.getEntity(o).getType() === i.a.SUBREDDIT_LINK) return;
							let s = t.getStyle();
							return u && (s = s.add(a.k.BOLD)), null === n ? n = s.asMutable() : n.intersect(s), !(n && !n.size) && void 0
						})
					}), null === n ? [] : (o && n.delete(a.k.BOLD), n.toJS())
				},
				m = (e, t) => {
					const n = t.getCurrentContent(),
						s = t.getSelection();
					let i = n.getBlockMap();
					const c = -1 === p(n, s).indexOf(e);
					Object(l.a)(n, s, (t, l) => {
						if (!t || !l) return !1;
						const d = s.getStartKey() === l ? s.getStartOffset() : 0,
							p = s.getEndKey() === l ? s.getEndOffset() : t.getLength(),
							m = t.getCharacterList(),
							h = m.withMutations(s => {
								Object(r.a)(m, {
									start: d,
									end: p
								}, (r, i, l, d) => {
									const p = r.getStyle(),
										m = r.getEntity(),
										h = m ? n.getEntity(m) : null,
										f = u(p, t, h, e, c);
									if (f) {
										const e = ((e, t) => o.CharacterMetadata.create({
											style: t,
											entity: t.has(a.k.SPOILER) ? null : e.getEntity()
										}))(r, f);
										for (let t = l; t < d; t++) s.set(t, e)
									}
								})
							});
						if (h !== m) {
							const e = t.set("characterList", h);
							i = i.set(l, e)
						}
					});
					const d = n.merge({
						blockMap: i,
						selectionAfter: s
					});
					return o.EditorState.push(t, d, "change-inline-style")
				},
				h = (e, t) => {
					const n = t.getCurrentContent(),
						s = t.getSelection(),
						r = n.getBlockForKey(s.getStartKey()),
						i = r.getEntityAt(s.getStartOffset()),
						a = i ? n.getEntity(i) : null,
						c = t.getCurrentInlineStyle(),
						l = u(c, r, a, e, !c.has(e));
					let d = t;
					return l && (d = o.EditorState.setInlineStyleOverride(d, l)), d
				},
				f = e => o.EditorState.setInlineStyleOverride(e, d),
				b = (e, t) => {
					const n = e.getSelection(),
						o = t.getSelection();
					return n.getStartOffset() > 0 || n.getFocusKey() === o.getFocusKey() || e.getCurrentInlineStyle().isEmpty() ? e : f(e)
				}
		},
		"./src/reddit/components/RichTextEditor/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3YZ-jFfccqhepgq1dDuLEv",
				container: "_3YZ-jFfccqhepgq1dDuLEv",
				FocusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				focusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				showSubmitButton: "_3Imp2y02BMA96sEJAe9M3M",
				mRedesign: "_2sl29I15jbNPrKiiB9kfVf",
				editorWrapper: "_2baJGEALPiEMZpWB2iWQs7",
				mExpanded: "_1UhKfcyzvaWRtDdXZmzg6D",
				userIcon: "_1wS6Q6S9RvAbzxaselfK2i",
				CurrentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				currentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				hasInitialHeight: "_35E-zXyMmfsLI7nv_sBvFL",
				hasInitialMinHeight: "_18GfdTZmF2EPjYSkBDE0WI",
				noBorder: "HXDWn-rmYOwqGcGtz9AKm",
				insetSubmitButton: "_3b2mbY1nb1R-z21ihISt7z",
				emptyContent: "_3cP1eCSI5AeGc6__VQ1axu",
				focusedContent: "_2O6bpyGivXLGxZ0LErKCzW"
			}
		},
		"./src/reddit/components/RichTextEditor/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = (n("./node_modules/draft-js/dist/Draft.css"), n("./node_modules/fbt/lib/FbtPublic.js")),
				r = n("./node_modules/lodash/filter.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./node_modules/shallowequal/index.js"),
				p = n.n(u),
				m = n("./src/lib/classNames/index.ts"),
				h = n("./src/lib/fastdom/index.ts"),
				f = n("./src/lib/lessComponent.tsx"),
				b = n("./src/lib/linkMatchers/customLinks.ts"),
				g = n("./src/lib/logs/console.ts"),
				x = n("./src/telemetry/models/Media.ts"),
				C = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				y = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				E = n("./src/reddit/featureFlags/index.ts"),
				v = n("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = n("./src/reddit/models/PostCreationForm/index.ts"),
				O = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const k = {
				BREAK_HEADER_ENTITY: "BREAK_HEADER_ENTITY",
				CONVERT_TO_LIST_ON_SPACE: "CONVERT_TO_LIST_ON_SPACE",
				EXEC_TABLE_ON_ENTER_HANDLER: "EXEC_TABLE_ON_ENTER_HANDLER",
				INSERT_LINE_BREAK: "INSERT_LINE_BREAK",
				LINKIFY_ON_ENTER: "LINKIFY_ON_ENTER",
				LINKIFY_ON_SPACE: "LINKIFY_ON_SPACE",
				MAKE_PLAIN_BLOCK: "MAKE_PLAIN_BLOCK",
				OPEN_LINK_TOOLTIP: "OPEN_LINK_TOOLTIP",
				REDUCE_LIST_INDENT: "REDUCE_LIST_INDENT",
				REMOVE_EXTRA_LIST_ITEM: "REMOVE_EXTRA_LIST_ITEM",
				RESET_CURRENT_AND_PREVIOUS_BLOCKS: "RESET_CURRENT_AND_PREVIOUS_BLOCKS",
				SUBMIT: "SUBMIT"
			};
			const S = e => {
					const t = e.getCurrentContent().getBlockMap();
					if (t.size > 2 || (e => !!e.reduce((e = 0, t) => e + t.getLength(), 0))(t) || (e => !!e.find(e => Object(O.o)(e.getType())))(t)) return null; {
						const n = e.getSelection();
						if (n.isCollapsed() && n.getFocusKey() === t.first().getKey()) return n.getFocusKey()
					}
				},
				j = e => {
					const t = e.getCharacterList().map(e => o.CharacterMetadata.create({
						entity: e.getEntity()
					}));
					return e.set("characterList", t)
				};
			var w = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				T = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				I = n("./node_modules/lodash/escape.js"),
				P = n.n(I),
				M = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				N = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				R = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				D = n("./node_modules/immutable/dist/immutable.js"),
				B = n("./src/reddit/helpers/dom/index.ts"),
				L = n("./node_modules/lodash/chunk.js"),
				F = n.n(L),
				A = n("./node_modules/lodash/flatten.js"),
				K = n.n(A),
				U = n("./node_modules/lodash/takeWhile.js"),
				H = n.n(U),
				W = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				z = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				V = n("./node_modules/lodash/last.js"),
				q = n.n(V),
				G = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				J = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				Q = n("./node_modules/lodash/find.js"),
				Z = n.n(Q);
			var X = (e, t) => {
				const n = e.getSelection(),
					s = e.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[a, c] = Object(z.e)(s, r, i);
				if (!a || a !== c) return e;
				const l = Object(z.g)(r),
					d = Object(z.g)(i),
					{
						blocks: u,
						start: p
					} = a,
					{
						colCount: m
					} = d,
					h = u.length / m,
					{
						minCol: f,
						minRow: b,
						maxCol: g,
						maxRow: x
					} = Object(z.f)(l, d),
					C = u.filter(e => {
						const {
							rowIndex: n,
							colIndex: o
						} = Object(z.g)(e);
						return "rows" === t ? !(b <= n && n <= x) : !(f <= o && o <= g)
					});
				C.sort(z.b);
				const y = "rows" === t ? m : C.length / h,
					E = K()(Object(z.d)(F()(C, y))),
					v = s.getBlocksAsArray(),
					_ = [...v.slice(0, p), ...E, ...v.slice(p + u.length)],
					O = s.merge({
						blockMap: o.BlockMapBuilder.createFromArray(_)
					}),
					k = {
						colIndex: f,
						rowIndex: b
					};
				let S = Z()(E, e => Object(z.h)(k, Object(z.g)(e)));
				S || (S = E.length ? E[E.length - 1] : v[p > 0 ? p - 1 : 0]);
				const j = o.SelectionState.createEmpty(S.getKey()).merge({
					focusOffset: S.getLength(),
					anchorOffset: S.getLength()
				});
				let w = o.EditorState.push(e, O, G.e);
				return w = o.EditorState.forceSelection(w, j)
			};
			var Y = (e, t = !1) => {
				const n = e.getSelection();
				if (n.isCollapsed()) return;
				if (n.getStartKey() === n.getEndKey() && !t) return;
				const s = e.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[a, c] = Object(z.e)(s, r, i);
				if (!a || a !== c) return;
				const l = {};
				let d = n;
				if (r === i) {
					const e = Object(z.n)(i, 0, n.getStartOffset()),
						t = Object(z.n)(i, n.getEndOffset());
					l[i.getKey()] = Object(z.j)(i, [e, t]), d = n
				} else {
					if (a.blocks[0].getKey() === n.getStartKey() && q()(a.blocks).getKey() === n.getEndKey()) return X(e, "rows");
					Object(J.a)(s, n, (e, t) => {
						l[t] = Object(z.n)(e, 0, 0)
					}), d = n.merge({
						anchorOffset: 0,
						focusOffset: 0
					})
				}
				const u = s.merge({
					blockMap: s.getBlockMap().merge(l),
					selectionAfter: d
				});
				return o.EditorState.push(e, u, G.f)
			};
			const $ = (e, t, n, o) => {
					const {
						htmlParts: s
					} = t;
					e.forEach((e, r) => {
						s.push(`<${n} ${o[r]} style="margin: 0px; padding: 4px 9px; border: 1px solid rgb(229, 227, 218);">`), be(e, t), s.push(`</${n}>`)
					})
				},
				ee = e => {
					const t = e[0],
						n = e[e.length - 1],
						o = [...e].sort(z.b),
						{
							minCol: s,
							maxCol: r
						} = Object(z.f)(Object(z.g)(t), Object(z.g)(n)),
						i = r - s + 1;
					return Object(z.d)(F()(o, i))
				},
				te = (e, t, n) => {
					n ? be(e[0], t) : ((e, t) => {
						const {
							editor: n,
							htmlParts: o
						} = t, s = n.getEditorKey(), r = e[0].map(e => {
							const {
								alignment: t
							} = Object(z.g)(e);
							return t ? `align="${z.a[t]}"` : ""
						}), [i, ...a] = e;
						o.push(`\n    <table data-editor="${s}">\n      <thead>\n        <tr>`), $(i, t, "th", r), o.push("\n        </tr>\n      </thead>\n      <tbody>"), a.forEach(e => {
							o.push("\n        <tr>"), $(e, t, "td", r), o.push("\n        </tr>")
						}), o.push("\n      </tbody>\n    </table>")
					})(ee(e), t)
				},
				ne = (e, t, n) => {
					n ? t.textParts.push(Ce(e[0], t)) : ((e, t) => {
						const {
							textParts: n
						} = t;
						e.forEach(e => {
							n.push(e.map(e => Ce(e, t)).join(" "))
						})
					})(ee(e), t)
				},
				oe = e => {
					const {
						processed: t,
						remaining: n
					} = e, o = [];
					for (; n.length;) {
						const e = n[0];
						if (!Object(O.v)(e.getType())) break;
						o.push(n.shift())
					}
					const s = !n.length && !t.length,
						r = 1 === o.length && s;
					te(o, e, r), ne(o, e, r), ((e, t, n, o) => {
						if (n)
							if (o) {
								const n = e[0].merge({
									data: Object(D.Map)(),
									type: O.n
								});
								t.blocksParts = [n]
							} else t.blocksParts = K()(ee(e))
					})(o, e, s, r), t.push(...o)
				},
				se = e => Y(e, !0),
				re = (e, t, n) => {
					const s = Object(O.v)(n.first().getType()),
						r = Object(O.v)(n.last().getType()),
						i = e.getBlockForKey(t.getAnchorKey()),
						a = e.getBlockForKey(t.getFocusKey()),
						[c, l] = Object(z.e)(e, i, a);
					return c && c === l ? ((e, t, n, s) => {
						const r = Object(O.v)(s.first().getType()),
							i = e.getBlockForKey(t.getAnchorKey()),
							a = e.getBlockForKey(t.getFocusKey()),
							{
								blocks: c,
								start: l
							} = n;
						c.sort(z.b);
						const d = Object(z.g)(c[0]);
						let {
							colCount: u
						} = d;
						const p = F()(c, u);
						let m = p.length;
						const {
							minRow: h,
							minCol: f
						} = Object(z.f)(Object(z.g)(i), Object(z.g)(a)), b = s.toArray();
						if (r) {
							const n = H()(b, e => Object(O.v)(e.getType()));
							n.sort(z.b);
							const s = Object(z.g)(n[0]).colCount,
								r = F()(n, s),
								i = r.length,
								a = h + i - 1,
								d = f + s - 1;
							if (n.length !== i * s) throw new Error("Invalid table fragment!");
							if (d >= u && p.forEach(e => {
									e.push(...Object(z.l)(d - u + 1, 1))
								}), u = p[0].length, a >= m) {
								const e = F()(Object(z.l)(u, a - m + 1), u);
								p.push(...e)
							}
							m = p.length;
							for (let e = 0; e < i; e++)
								for (let t = 0; t < s; t++) {
									const n = h + e,
										o = f + t,
										s = r[e][t];
									p[n][o] = s.set("key", p[n][o].getKey())
								}
							const g = Object(z.d)(p),
								x = K()(g),
								C = e.getBlocksAsArray(),
								y = [...C.slice(0, l), ...x, ...C.slice(l + c.length)],
								E = Object(z.o)(t, p[h][f], p[a][d]);
							return e.merge({
								blockMap: o.BlockMapBuilder.createFromArray(y),
								selectionAfter: E
							})
						} {
							const n = p[h][f],
								s = Object(z.j)(n, b, " ");
							let r = t;
							return t.getStartKey() !== t.getEndKey() && (r = Object(z.o)(t, n, n)), W.c(e, r, o.BlockMapBuilder.createFromArray([s]))
						}
					})(e, t, c, n) : c || l || !s && !r ? void 0 : ((e, t, n) => {
						const s = Object(O.v)(n.first().getType()),
							r = Object(O.v)(n.last().getType()),
							i = n.toArray();
						s && i.unshift(Object(N.h)()), r && i.push(Object(N.h)());
						const a = o.BlockMapBuilder.createFromArray(i);
						return W.c(e, t, a)
					})(e, t, n)
				};
			var ie = n("./node_modules/draft-js/lib/removeEntitiesAtEdges.js"),
				ae = n.n(ie);
			var ce = (e, t) => {
				const n = t.getStartKey(),
					o = t.getStartOffset(),
					s = t.getEndKey(),
					r = t.getEndOffset(),
					i = ae()(e, t).getBlockMap(),
					a = i.keySeq(),
					c = a.indexOf(n),
					l = a.indexOf(s) + 1;
				return i.slice(c, l).map((e, t) => {
					const i = e.getText(),
						a = e.getCharacterList();
					return n === s ? e.merge({
						text: i.slice(o, r),
						characterList: a.slice(o, r)
					}) : t === n ? e.merge({
						text: i.slice(o),
						characterList: a.slice(o)
					}) : t === s ? e.merge({
						text: i.slice(0, r),
						characterList: a.slice(0, r)
					}) : e
				})
			};
			const le = (e, t) => {
					const n = {
							children: [],
							parentItem: t,
							type: e.getType()
						},
						o = {
							block: e,
							parentList: n
						};
					return n.children.push(o), t && (t.childrenLists = t.childrenLists || [], t.childrenLists.push(n)), {
						list: n,
						item: o
					}
				},
				de = (e, t) => {
					const {
						type: n,
						children: o
					} = e, {
						htmlParts: s
					} = t, r = n === O.b.ORDERED_LIST ? "ol" : "ul";
					s.push(`<${r}>`), o.forEach(e => ((e, t) => {
						const {
							block: n,
							childrenLists: o
						} = e, {
							htmlParts: s
						} = t;
						s.push("<li>"), be(n, t, !0), o && o.forEach(e => de(e, t)), s.push("</li>")
					})(e, t)), s.push(`</${r}>`)
				},
				ue = (e, t) => {
					const {
						children: n
					} = e;
					n.forEach((e, n) => pe(e, n, t))
				},
				pe = (e, t, n) => {
					const {
						block: o,
						childrenLists: s
					} = e, {
						textParts: r
					} = n, i = " ".repeat(o.getDepth()), a = o.getType() === O.b.ORDERED_LIST ? `${t+1}.` : "-", c = Ce(o, n);
					r.push(`${i}${a} ${c}`), s && s.forEach(e => ue(e, n))
				},
				me = e => {
					const {
						remaining: t
					} = e, n = t.shift(), o = n.getType(), s = [n];
					for (; t.length;) {
						const e = t[0],
							n = e.getType();
						if (!Object(O.s)(n)) break;
						if (e.getDepth() > 0 || n === O.b.UNORDERED_LIST) s.push(t.shift());
						else {
							if (n !== o) break;
							if (s.some(e => e.getType() !== O.b.ORDERED_LIST)) break;
							s.push(t.shift())
						}
					}
					const r = (e => {
						const t = e[0],
							n = {
								type: t.getType(),
								children: []
							};
						let o, s = n,
							r = t.getDepth();
						return e.forEach(e => {
							const t = e.getType(),
								n = e.getDepth();
							if (n > r) {
								const t = le(e, o);
								s = t.list, o = t.item, r = n
							} else {
								for (; r !== n;) s = s.parentItem ? s.parentItem.parentList : s, r--;
								if (t === s.type) o = {
									block: e,
									parentList: s
								}, s.children.push(o);
								else {
									const t = le(e, s.parentItem);
									s = t.list, o = t.item
								}
							}
						}), n
					})(s);
					de(r, e), ue(r, e), e.processed.push(...s)
				};
			var he = (e, t) => {
				const n = e.toArray().filter(e => !Object(O.t)(e.getType()));
				if (1 === n.length) {
					n[0].getType() !== O.n && n.push(new o.ContentBlock({
						key: Object(o.genKey)(),
						type: O.n
					}))
				}
				const s = o.ContentState.createFromBlockArray(n),
					r = JSON.stringify(Object(o.convertToRaw)(s));
				return `<div data-reddit-rtjson="${P()(r)}">${t}</div>`
			};
			const fe = () => !!window.clipboardData,
				be = (e, t, n = !1) => {
					const {
						htmlParts: o
					} = t, s = ge(e, t);
					s && s.forEach(e => o.push(n ? e.innerHTML : e.outerHTML))
				},
				ge = (e, t) => {
					const {
						selection: n,
						editor: o
					} = t, s = n.getStartKey(), r = n.getEndKey(), i = e.getKey(), a = o.refs.editor, c = Object(N.d)(i, a);
					return c ? i === s || i === r ? Object(B.c)(c) : [c] : null
				};
			var xe = (e, t, n) => {
				const s = e.getCurrentContent(),
					r = e.getSelection(),
					i = ke(e) || ce(s, r);
				if (!i || !i.count()) return;
				const a = i.toArray(),
					c = {
						editor: t,
						editorState: e,
						selection: r,
						remaining: a,
						processed: [],
						htmlParts: [],
						textParts: [],
						blocksParts: [...a]
					};
				for (; c.remaining.length;) {
					const e = c.remaining[0].getType();
					switch (!0) {
						case Object(O.t)(e):
							Oe(c);
							break;
						case Object(O.s)(e):
							me(c);
							break;
						case Object(O.v)(e):
							oe(c);
							break;
						default:
							ye(c)
					}
				}
				const l = c.textParts.join("\n"),
					d = (e => Object(D.OrderedMap)(e.map(e => {
						const t = Object(o.genKey)();
						return [t, e.set("key", t)]
					})))(c.blocksParts);
				return ((e, {
					html: t,
					text: n
				}) => {
					fe() ? window.clipboardData.setData("text", n) : (t && e.clipboardData.setData("text/html", t), e.clipboardData.setData("text/plain", n))
				})(n, {
					html: he(d, c.htmlParts.join("")),
					text: l
				}), n.stopPropagation(), n.preventDefault(), t.setClipboard(d), d
			};
			const Ce = (e, t) => {
					const n = e.getText(),
						o = t.editorState.getCurrentContent(),
						s = [];
					let r = -1;
					return e.getCharacterList().forEach((e, t) => {
						const i = e && e.getEntity();
						if (i && void 0 !== t) {
							const e = o.getEntity(i);
							e.getType() === R.a.EMOTE && (s.push(n.substring(r + 1, t)), s.push(`:${e.getData().id}:`), r = t)
						}
					}), s.push(n.substring(r + 1, n.length)), s.join("")
				},
				ye = e => {
					const t = e.remaining.shift();
					((e, t) => be(e, t))(t, e), ((e, t) => {
						t.textParts.push(Ce(e, t))
					})(t, e), e.processed.push(t)
				},
				Ee = (e, t) => {
					const n = e.first(),
						s = e.last();
					let r = e;
					if (Object(O.u)(n.getType()) ? r = r.set(r.keySeq().first(), n.merge({
							type: O.n
						})) : Object(O.o)(n.getType()) && (r = o.BlockMapBuilder.createFromArray([Object(N.h)(), ...r.toArray()])), Object(O.u)(s.getType()) || !Object(M.q)(t)) {
						const e = Object(N.h)();
						r = r.set(e.getKey(), e)
					} else if (Object(O.o)(s.getType())) {
						const e = Object(N.h)().merge({
							type: O.j
						});
						r = r.set(e.getKey(), e)
					}
					return r
				},
				ve = (e, t, n) => {
					const o = e.getBlockForKey(t.getStartKey());
					if (Object(O.u)(o.getType())) {
						const o = n.first(),
							s = n.set(n.keySeq().first(), Object(N.h)(o.getKey(), o.getText()).merge({
								type: O.j
							}));
						return W.c(e, t, s)
					}
				},
				_e = (e, t, n) => {
					const o = ((e, t, n) => {
						const o = t ? t.getText() : "";
						return `<span data-editor="${n}">${P()(o)}</span>`
					})(0, t, n.editor.getEditorKey());
					n.htmlParts.push(o)
				},
				Oe = e => {
					const {
						remaining: t
					} = e, n = t.shift(), o = t[0] && Object(O.u)(t[0].getType()) ? t.shift() : void 0;
					_e(0, o, e), ((e, t) => {
						const n = e ? Ce(e, t) : "";
						t.textParts.push(n)
					})(o, e), e.processed.push(n), o && e.processed.push(o)
				},
				ke = e => {
					const t = e.getSelection(),
						n = t.getFocusKey();
					if (n !== t.getAnchorKey()) return;
					const s = e.getCurrentContent(),
						r = s.getBlockForKey(n);
					if (Object(O.o)(r.getType())) {
						const e = [r],
							t = s.getBlockAfter(r.getKey());
						return t && Object(O.u)(t.getType()) && e.push(t), o.ContentState.createFromBlockArray(e).getBlockMap()
					}
				},
				Se = e => {
					const t = ke(e);
					if (t) return Object(M.d)(e, t.first().getKey())
				},
				je = e => {
					const t = e.getSelection();
					let n = e.getCurrentContent();
					const s = n.getBlockForKey(t.getStartKey()),
						r = n.getBlockForKey(t.getEndKey());
					if (Object(O.t)(s.getType()) || Object(O.t)(r.getType())) {
						if (t.isCollapsed())
							if (Object(O.u)(s.getType())) n = W.d(n, t), n = o.Modifier.setBlockType(n, n.getSelectionAfter(), O.n);
							else if (Object(O.o)(s.getType())) {
							let s = n.getBlockAfter(t.getStartKey());
							return s || (s = (e = Object(M.b)(e, t.getStartKey(), N.a.after)).getCurrentContent().getBlockAfter(t.getStartKey())), o.EditorState.forceSelection(e, Object(N.b)(s, !0))
						}
						return o.EditorState.push(e, n, "split-block")
					}
				},
				we = (e, t) => {
					const n = e.getSelection(),
						s = e.getCurrentContent(),
						r = "up" === t ? n.getStartKey() : n.getEndKey(),
						i = s.getBlockForKey(r);
					if (!Object(O.o)(i.getType())) return;
					const a = "up" === t ? s.getBlockBefore(r) : s.getBlockAfter(r);
					return a ? o.EditorState.forceSelection(e, Object(N.b)(a, !0)) : Object(M.b)(e, r, "up" === t ? N.a.before : N.a.after)
				},
				Te = (e, t) => {
					if (e.shiftKey) return;
					const n = we(t, "up");
					return n && e.preventDefault(), n
				},
				Ie = (e, t) => {
					if (e.shiftKey) return;
					const n = we(t, "down");
					return n && e.preventDefault(), n
				},
				Pe = (e, t) => {
					const n = e.getSelection();
					return n.isCollapsed() && 0 === n.getStartOffset() && Object(O.o)(e.getCurrentContent().getBlockForKey(n.getStartKey()).getType())
				};
			var Me = (e, t) => {
					if (!Object(M.q)(t)) return e;
					const n = e.getSelection(),
						o = e.getCurrentContent(),
						s = o.getBlockForKey(n.getStartKey());
					if (Object(O.o)(s.getType())) {
						const t = o.getBlockAfter(s.getKey());
						if (!t || !Object(O.u)(t.getType())) return Object(M.d)(e, s.getKey(), !1)
					}
					return e
				},
				Ne = n("./src/reddit/actions/modal.ts"),
				Re = n("./src/reddit/actions/upload.ts"),
				De = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				Be = e => null,
				Le = n("./src/reddit/helpers/media/index.ts"),
				Fe = n("./src/reddit/helpers/richTextEditor/index.ts"),
				Ae = n("./src/reddit/selectors/activeModalId.ts");
			const Ke = "application/x-reddit-rte-block";
			var Ue = n("./src/reddit/models/Upload/index.ts"),
				He = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less"),
				We = n.n(He);
			const ze = f.a.img("Img", We.a);
			var Ve = f.a.wrapped(e => {
					const {
						className: t,
						url: n
					} = e;
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement(ze, {
						draggable: !1,
						src: n
					}))
				}, "Component", We.a),
				qe = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less"),
				Ge = n.n(qe);
			const Je = f.a.div("Message", Ge.a);
			var Qe = f.a.wrapped(e => {
					const {
						className: t,
						isImage: n
					} = e;
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement(Je, null, n ? s.fbt._("Processing video...", null, {
						hk: "3g3QoU"
					}) : s.fbt._("Processing image...", null, {
						hk: "1xoNB3"
					})))
				}, "Component", Ge.a),
				Ze = n("./src/lib/formatApiError/index.ts"),
				Xe = n("./src/reddit/components/ProgressBar/index.tsx"),
				Ye = n("./src/reddit/controls/Button/index.tsx"),
				$e = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less"),
				et = n.n($e);
			const tt = f.a.div("ControlRow", et.a),
				nt = f.a.wrapped(Ye.o, "Button", et.a),
				ot = f.a.wrapped(Ye.o, "ErrButton", et.a),
				st = f.a.div("Status", et.a),
				rt = f.a.wrapped(Xe.a, "ProgressBar", et.a),
				it = f.a.div("ErrorLine", et.a),
				at = e => t => {
					t.stopPropagation(), e(t)
				};
			var ct = f.a.wrapped(e => {
					const {
						upload: t
					} = e, n = at(e.onCancel), o = at(e.onRetry), r = at(e.onRemove), {
						status: i,
						progress: a
					} = t, l = a && a.percent || 0, d = i === Ue.a.FAILED || i === Ue.a.CANCELED, u = (e => {
						const {
							status: t,
							progress: n
						} = e;
						return t === Ue.a.CANCELED ? s.fbt._("Upload was canceled", null, {
							hk: "71azQ"
						}) : t === Ue.a.FAILED ? s.fbt._("Upload failed: {errorText}", [s.fbt._param("errorText", Object(Ze.a)(e.error))], {
							hk: "3NGGzE"
						}) : 100 === (n && n.percent || 0) ? s.fbt._("Success!", null, {
							hk: "3622uh"
						}) : s.fbt._("Uploading: {fileName}", [s.fbt._param("fileName", e.file.name)], {
							hk: "H7qzO"
						})
					})(t);
					return c.a.createElement("div", {
						className: e.className
					}, d ? c.a.createElement(it, null) : c.a.createElement(rt, {
						innerBarClassName: et.a.ProgressBarInner,
						percent: l
					}), c.a.createElement(tt, null, c.a.createElement(st, {
						className: d ? et.a.hasError : void 0,
						title: d ? u : void 0
					}, u), c.a.createElement("div", null, d ? [c.a.createElement(ot, {
						key: "remove",
						onClick: r
					}, s.fbt._("Remove", null, {
						hk: "3LUKPE"
					})), c.a.createElement(ot, {
						key: "retry",
						onClick: o
					}, s.fbt._("Retry", null, {
						hk: "3sO2HB"
					}))] : c.a.createElement(nt, {
						disabled: 100 === l,
						onClick: n
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})))))
				}, "Component", et.a),
				lt = n("./node_modules/react-motion/lib/react-motion.js"),
				dt = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				ut = n("./src/reddit/components/PlayButton/index.tsx"),
				pt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less"),
				mt = n.n(pt);
			const ht = {
					stiffness: 60,
					damping: 20
				},
				ft = [{
					key: "video",
					style: {
						opacity: Object(lt.spring)(1, ht)
					}
				}],
				bt = f.a.wrapped(e => {
					const {
						autoPlay: t = !1,
						className: n,
						showControls: o,
						shouldPause: s,
						style: r,
						dashUrl: i,
						hlsUrl: a,
						otherUrl: l
					} = e;
					return c.a.createElement("div", {
						className: n,
						style: r
					}, c.a.createElement(dt.b, {
						autoPlay: t,
						shouldIgnoreAutoplayPref: !0,
						shouldLoad: !1,
						shouldPause: s,
						isGif: !1,
						hlsSource: a,
						mpegDashSource: i,
						otherSource: l,
						showSettingsIcon: !1,
						showControlBar: o,
						playerClickPlay: !1,
						hideUntilLoaded: !0
					}))
				}, "VideoPlayer", mt.a),
				gt = f.a.img("PosterImg", mt.a),
				xt = f.a.wrapped(e => {
					const {
						className: t,
						onPlayButtonClick: n,
						url: o,
						showPlayButton: s
					} = e;
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement(gt, {
						draggable: !1,
						src: o
					}), s && c.a.createElement(ut.a, {
						className: mt.a.playButton,
						onClick: n
					}))
				}, "Poster", mt.a);
			class Ct extends c.a.Component {
				constructor(e) {
					super(e), this.onPlayButtonClick = () => {
						this.setState({
							showVideo: !0
						})
					}, this.willEnter = () => ({
						opacity: 0
					}), this.willLeave = () => ({
						opacity: Object(lt.spring)(0, ht)
					}), this.didLeave = () => {
						this.setState({
							showVideo: !1
						})
					}, this.state = {
						showVideo: !1
					}
				}
				renderVideo() {
					const {
						props: e
					} = this;
					return c.a.createElement("div", {
						className: e.className
					}, c.a.createElement(bt, {
						dashUrl: e.dashUrl,
						hlsUrl: e.hlsUrl,
						showControls: e.isUploaded && e.isSelected,
						shouldPause: !e.isSelected || void 0
					}))
				}
				render() {
					const {
						className: e,
						isSelected: t,
						posterUrl: n,
						dashUrl: o,
						hlsUrl: s,
						otherUrl: r
					} = this.props;
					if (!n) return this.renderVideo();
					const {
						showVideo: i
					} = this.state, a = !!(o || s || r);
					return c.a.createElement(lt.TransitionMotion, {
						defaultStyles: [],
						styles: t && i && a ? ft : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave,
						didLeave: this.didLeave
					}, a => c.a.createElement("div", {
						className: e
					}, a.map(e => c.a.createElement(bt, {
						key: e.key,
						autoPlay: !0,
						style: e.style,
						otherUrl: r,
						dashUrl: o,
						hlsUrl: s,
						showControls: !0,
						shouldPause: !t || void 0
					})), c.a.createElement(xt, {
						url: n,
						showPlayButton: !i || !t,
						onPlayButtonClick: this.onPlayButtonClick
					})))
				}
			}
			var yt = f.a.wrapped(Ct, "Component", mt.a),
				Et = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less"),
				vt = n.n(Et);

			function _t() {
				return (_t = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var Ot = e => {
					const {
						alignCenter: t,
						isSelected: n,
						onCancel: o,
						onRetry: s,
						onRemove: r,
						upload: i,
						mediaAsset: a,
						thumbnail: l,
						...d
					} = e;
					let u = !1;
					if (i) u = "image" === Object(Le.f)(i.metadata.mimetype);
					else {
						if (!a) return null;
						u = a.type === M.a.Image || a.type === M.a.AnimatedImage
					}
					const p = i ? i.metadata.height : a.height,
						h = !i || i.status === Ue.a.SUCCESS,
						f = u && !!p && p < 104,
						b = !p;
					return c.a.createElement("div", _t({
						className: Object(m.a)(vt.a.container, {
							[vt.a.alignCenter]: t,
							[vt.a.isCompact]: f,
							[vt.a.isUploaded]: h,
							[vt.a.isSelected]: n
						})
					}, d), b ? c.a.createElement(Qe, {
						className: vt.a.placeholder,
						isImage: u
					}) : u ? c.a.createElement(Ve, {
						className: vt.a.imagePreview,
						url: i ? i.metadata.localUrl : a.imageUrl
					}) : c.a.createElement(yt, {
						className: vt.a.videoPreview,
						dashUrl: a ? a.dashUrl : void 0,
						hlsUrl: a ? a.hlsUrl : void 0,
						isSelected: n,
						isUploaded: h,
						otherUrl: i ? i.metadata.localUrl : void 0,
						posterUrl: l ? l.url : a.posterUrl
					}), i && c.a.createElement(ct, {
						className: vt.a.statusBar,
						onCancel: o,
						onRemove: r,
						onRetry: s,
						upload: i
					}))
				},
				kt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less"),
				St = n.n(kt);

			function jt() {
				return (jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const wt = f.a.div("HiddenDiv", St.a);
			var Tt = ({
					elementRef: e,
					...t
				}) => c.a.createElement(wt, jt({}, t, {
					innerRef: e
				}), c.a.createElement("br", null)),
				It = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				Pt = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				Mt = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Nt = n("./src/reddit/layout/row/Inline/index.tsx"),
				Rt = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				Dt = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Bt = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				Lt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less"),
				Ft = n.n(Lt);
			const At = f.a.wrapped(Dt.a, "FormatterButton", Ft.a),
				Kt = Object(Bt.f)(Mt.b),
				Ut = Object(Bt.f)(Pt.a),
				Ht = f.a.wrapped(Nt.a, "ToolbarContent", Ft.a);
			var Wt = e => {
					const {
						alignCenter: t,
						block: n,
						editorState: o,
						onChange: r,
						showVideoControls: i
					} = e, a = n.getKey(), {
						makeGif: l = !1
					} = Object(M.h)(n) || {};
					return c.a.createElement("div", {
						className: Object(m.a)(Ft.a.container, {
							[Ft.a.alignCenter]: t
						})
					}, c.a.createElement(Ht, {
						className: Ft.a.content
					}, i && c.a.createElement(It.a, {
						isCompact: !0,
						key: "make-gif",
						on: l,
						onClick: () => r(Object(M.r)(o, a, {
							makeGif: !l
						}))
					}), i && e.showThumbnailButton && c.a.createElement(At, {
						Icon: Ut,
						onClick: e.onThumbnailButtonClick,
						tooltip: s.fbt._("Choose thumbnail", null, {
							hk: "2gKwDF"
						}),
						tooltipBelow: !0
					}), i && c.a.createElement(Rt.c, null), c.a.createElement(At, {
						Icon: Kt,
						onClick: () => r(Object(M.d)(o, a)),
						tooltip: s.fbt._("Remove", null, {
							hk: "2aF1Zw"
						}),
						tooltipBelow: !0
					})))
				},
				zt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less"),
				Vt = n.n(zt);
			const qt = e => `RTE_VIDEO_THUMBNAIL_SELECTOR_${e.getKey()}`,
				Gt = Object(d.a)(e => e.uploads, (e, t) => {
					const n = Object(M.h)(t.block);
					return n && n.uploadInfo && n.uploadInfo.uploadKey
				}, (e, t) => t ? e[t] : void 0),
				Jt = Object(l.b)((e, t) => ({
					upload: Gt(e, t),
					isThumbnailSelectorOpen: Object(Ae.a)(e) === qt(t.block),
					isRteVideoPosterEnabled: E.d.rteVideoPoster(e)
				}), (e, t) => ({
					onCancelUpload: t => e(Re.i(t, !1)),
					toggleVideoThumbnailsSelector: () => e(Object(Ne.i)(qt(t.block)))
				})),
				Qt = f.a.div("MediaContainer", Vt.a),
				Zt = f.a.div("Container", Vt.a);
			class Xt extends c.a.Component {
				constructor(e) {
					super(e), this.onNativeSelectionChange = () => {
						const e = window.getSelection();
						if (0 === e.rangeCount) return;
						const t = e.getRangeAt(0),
							{
								commonAncestorContainer: n
							} = t;
						this.state.active ? this.rootContainer.contains(n) || this.setState({
							active: !1
						}) : this.rootContainer && this.rootContainer.contains(n) && this.selectBlock(), this.setState({
							isInSelection: Object(B.i)(t, this.rootContainer)
						})
					}, this.selectBlock = () => {
						const e = document.createRange();
						e.selectNodeContents(this.rootContainer);
						const t = window.getSelection();
						t.removeAllRanges(), t.addRange(e), this.setState({
							active: !0
						})
					}, this.isSelected = () => {
						const e = this.props.blockProps.getEditorState().getSelection(),
							t = this.props.block.getKey();
						return this.state.active && Object(M.n)(e, t)
					}, this.onRetryUpload = () => {
						const {
							upload: e
						} = this.props;
						e && this.props.blockProps.onRetryUpload(e.key)
					}, this.onMediaViewClickCapture = e => {
						this.state.active || this.selectBlock()
					}, this.onDragStart = e => {
						e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData(Ke, this.props.block.getKey())
					}, this.onRemove = () => {
						const e = this.props.blockProps.getEditorState();
						this.props.blockProps.onChange(Object(M.d)(e, this.props.block.getKey()))
					}, this.onCancelUpload = async () => {
						this.props.upload && (await this.props.onCancelUpload(this.props.upload.key), this.selectBlock())
					}, this.onToolbarStateChange = e => {
						this.props.blockProps.onChange(e)
					}, this.toggleVideoThumbnailsSelector = () => {
						this.props.toggleVideoThumbnailsSelector()
					}, this.onThumbnailSelect = e => {
						const t = this.props.blockProps.getEditorState(),
							n = this.props.block.getKey();
						let o = Object(M.r)(t, this.props.block.getKey(), {
							thumbnail: e
						});
						o = Object(M.p)(o, n), this.props.blockProps.onChange(o), this.toggleVideoThumbnailsSelector()
					}, this.state = {
						active: !1,
						isInSelection: !1
					}
				}
				shouldComponentUpdate(e, t) {
					return t.active !== this.state.active || t.isInSelection !== this.state.isInSelection || e.block !== this.props.block || e.upload !== this.props.upload || Object(M.n)(e.selection, e.block.getKey())
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange);
					const {
						selection: e
					} = this.props;
					e.getHasFocus() && Object(M.n)(e, this.props.block.getKey()) && this.selectBlock(), this.overlayContainer = Be(!0)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillReceiveProps(e) {
					const t = e.block.getKey(),
						n = this.props.blockProps.getEditorState(),
						o = n;
					n !== o && this.props.blockProps.onChange(o), !this.state.active && e.selection !== this.props.selection && e.selection.getHasFocus() && Object(M.n)(e.selection, t) && this.selectBlock()
				}
				getToolbarOffset() {
					if (!this.props.blockProps.rteFocusableContentRef || !this.rootContainer) return 0;
					const {
						top: e
					} = this.rootContainer.getBoundingClientRect(), {
						top: t
					} = this.props.blockProps.rteFocusableContentRef.getBoundingClientRect();
					return e - t - 30 - 10
				}
				render() {
					const {
						block: e,
						blockProps: t,
						isRteVideoPosterEnabled: n,
						offsetKey: o,
						upload: s
					} = this.props, r = Object(M.h)(e), i = r ? r.thumbnail : void 0, a = !!s && Object(Le.l)(s.metadata.mimetype || ""), {
						active: l,
						isInSelection: d
					} = this.state, u = t.editorType === Fe.a.Comment;
					return c.a.createElement(Zt, {
						innerRef: e => this.rootContainer = e
					}, l && c.a.createElement(Wt, {
						block: e,
						editorState: t.getEditorState(),
						onChange: this.onToolbarStateChange,
						onThumbnailButtonClick: this.toggleVideoThumbnailsSelector,
						showThumbnailButton: n,
						showVideoControls: a,
						alignCenter: !u
					}), c.a.createElement(Tt, null), c.a.createElement("div", {
						contentEditable: !1,
						"data-offset-key": o
					}, c.a.createElement(Qt, {
						draggable: !0,
						onDragStart: this.onDragStart,
						innerRef: e => this.mediaContainer = e
					}, c.a.createElement(Ot, {
						isSelected: d || l,
						thumbnail: i,
						onCancel: this.onCancelUpload,
						onClickCapture: this.onMediaViewClickCapture,
						onRetry: this.onRetryUpload,
						onRemove: this.onRemove,
						upload: s,
						mediaAsset: r.mediaAsset,
						alignCenter: !u
					})), s && a && c.a.createElement(De.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleVideoThumbnailsSelector,
						videoSource: s.metadata.localUrl,
						videoDuration: s.metadata.videoDuration,
						selected: i,
						isOpen: this.props.isThumbnailSelectorOpen
					})), c.a.createElement(Tt, null))
				}
			}
			var Yt = Jt(Xt),
				$t = n("./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less"),
				en = n.n($t);
			class tn extends c.a.PureComponent {
				constructor(e) {
					super(e);
					const {
						contentState: t,
						block: n
					} = Object(N.e)(e.children[0]).props;
					this.mediaBlockKey = t.getBlockBefore(n.getKey()).getKey()
				}
				render() {
					const e = this.props.children[0],
						t = Object(N.e)(e),
						{
							block: n,
							contentState: o
						} = t.props,
						r = o.getBlockForKey(this.mediaBlockKey),
						i = Object(M.h)(r);
					if (!i || !(i.mediaAsset || i.uploadInfo && i.uploadInfo.mediaType)) return null;
					const a = !n.getLength();
					return c.a.createElement("div", {
						className: en.a.wrapper,
						style: {
							"--media-caption-placeholder-text": a ? `'${s.fbt._("Add caption",null,{hk:"3zI8El"})}'` : ""
						}
					}, e)
				}
			}
			const nn = Object(D.Map)({
				[O.j]: {
					element: "div",
					wrapper: c.a.createElement(tn, null)
				}
			});
			var on = (e, t, n) => {
					const s = e.getSelection(),
						r = e.getCurrentContent(),
						i = r.getBlockForKey(s.getAnchorKey()),
						a = r.getBlockForKey(s.getFocusKey()),
						[c, l] = Object(z.e)(r, i, a);
					if (!c || c !== l) return e;
					const {
						blocks: d,
						start: u
					} = c, p = Object(z.g)(i), m = Object(z.g)(a), {
						colCount: h
					} = m;
					d.sort(z.b);
					const f = F()(d, h),
						{
							minCol: b,
							minRow: g,
							maxCol: x,
							maxRow: C
						} = Object(z.f)(p, m),
						y = {
							rowIndex: 0,
							colIndex: 0
						};
					if ("rows" === t) {
						const e = "before" === n ? g : C + 1,
							t = F()(Object(z.l)(h, C - g + 1), h);
						f.splice(e, 0, ...t), y.rowIndex = e
					} else {
						const e = "before" === n ? b : x + 1;
						f.forEach(t => {
							t.splice(e, 0, ...Object(z.l)(x - b + 1, 1))
						}), y.colIndex = e
					}
					const E = Object(z.d)(f),
						v = r.getBlocksAsArray(),
						_ = K()(E),
						O = [...v.slice(0, u), ..._, ...v.slice(u + d.length)],
						k = r.merge({
							blockMap: o.BlockMapBuilder.createFromArray(O)
						}),
						S = Z()(_, e => Object(z.h)(y, Object(z.g)(e))),
						j = Object(z.o)(s, S, S);
					let w = o.EditorState.push(e, k, G.e);
					return w = o.EditorState.forceSelection(w, j)
				},
				sn = n("./node_modules/lodash/clamp.js"),
				rn = n.n(sn),
				an = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts");
			var cn = (e, t, n = "preserve") => {
				const s = e.getSelection(),
					r = e.getCurrentContent(),
					i = "up" === t || "left" === t ? s.getStartKey() : s.getEndKey(),
					a = r.getBlockForKey(i);
				if (!Object(O.v)(a.getType())) return;
				const c = Object(z.g)(a),
					{
						colCount: l,
						colIndex: d,
						rowIndex: u
					} = c,
					p = r.getBlocksAsArray(),
					m = Object(an.a)(r, a);
				if (!m) return;
				let h = u,
					f = d;
				switch (t) {
					case "up":
						h--;
						break;
					case "down":
						h++;
						break;
					case "left":
						--f < 0 && (h--, f = l - 1);
						break;
					case "right":
						++f >= l && (h++, f = 0)
				}
				const b = {
					rowIndex: h,
					colIndex: f
				};
				let g = i;
				const x = Z()(m.blocks, e => Object(z.h)(Object(z.g)(e), b));
				if (x) g = x.getKey();
				else {
					const e = Object(z.c)(b, c) < 0 ? m.start - 1 : m.start + m.blocks.length;
					0 <= e && e < p.length && (g = p[e].getKey())
				}
				const C = r.getBlockForKey(g);
				let y = 0;
				"preserve" === n ? y = rn()(s.getFocusOffset(), 0, C.getLength()) : "end" === n && (y = C.getLength());
				const E = s.merge({
					anchorKey: g,
					focusKey: g,
					focusOffset: y,
					anchorOffset: y
				});
				return s !== E ? o.EditorState.forceSelection(e, E) : void 0
			};
			const ln = (e, t) => {
					const n = t.getCurrentContent(),
						o = t.getSelection(),
						s = n.getBlockForKey(o.getFocusKey()),
						[r] = Object(z.e)(n, s, s);
					if (!r) return;
					const i = Object(z.g)(s);
					let a;
					return (a = i.colIndex === i.colCount - 1 && i.rowIndex === r.blocks.length / i.colCount - 1 && !e.shiftKey && o.getFocusKey() === o.getAnchorKey() ? on(t, "rows", "after") : cn(t, e.shiftKey ? "left" : "right", "end")) ? (e.preventDefault(), a) : void 0
				},
				dn = (e, t) => {
					if (e.shiftKey) return;
					const n = cn(t, "up");
					return n && e.preventDefault(), n
				},
				un = (e, t) => {
					if (e.shiftKey) return;
					const n = cn(t, "down");
					return n && e.preventDefault(), n
				};
			class pn {
				constructor() {
					this.lastRowInsertionState = null
				}
				undoRowInsertion(e) {
					const t = o.EditorState.undo(e);
					return cn(t, "down", "end") || t
				}
				isSelectionInLastRow(e) {
					const t = e.getCurrentContent(),
						n = e.getSelection(),
						o = t.getBlockForKey(n.getFocusKey()),
						[s] = Object(z.e)(t, o, o);
					if (!s) return !1;
					const r = Object(z.g)(s.blocks[0]).colCount,
						i = s.blocks.length / r;
					return Object(z.g)(o).rowIndex === i - 1
				}
				insertNewRow(e) {
					const t = e.getSelection();
					let n = on(e, "rows", "after");
					return n = o.EditorState.forceSelection(n, t), n = cn(n, "down") || n, this.lastRowInsertionState = n, n
				}
				handle(e) {
					return e.getSelection().isCollapsed() ? e === this.lastRowInsertionState ? this.undoRowInsertion(e) : this.isSelectionInLastRow(e) ? this.insertNewRow(e) : cn(e, "down") || e : e
				}
			}
			const mn = (e, t) => {
				const n = e.getSelection();
				if (n.isCollapsed() || n.getStartKey() === n.getEndKey()) return;
				const s = e.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[a, c] = Object(z.e)(s, r, i);
				if (a && a === c) {
					const r = Object(z.o)(n, i, i, !1),
						a = W.b(s, r, t);
					return o.EditorState.push(e, a, G.d)
				}
			};
			var hn = n("./node_modules/lodash/forEach.js"),
				fn = n.n(hn);
			const bn = (e, t) => t ? e[0] : e[e.length - 1];
			var gn = (e, t) => {
					return e.getSelection().isCollapsed() ? ((e, t) => {
						const n = e.getSelection(),
							s = t.getSelection();
						if (!n.isCollapsed() || s.isCollapsed() || 0 !== s.getStartOffset() || s.getStartKey() !== n.getStartKey()) return e;
						const r = e.getCurrentContent(),
							i = t.getCurrentContent(),
							a = r.getBlockForKey(n.getAnchorKey());
						if (!Object(O.v)(a.getType())) return e;
						const {
							rowIndex: c,
							colIndex: l
						} = Object(z.g)(a);
						if (0 !== c || 0 !== l) return e;
						const d = r.getBlockMap(),
							u = i.getBlockMap();
						if (d.size >= u.size) return e;
						const p = r.getBlockAfter(n.getAnchorKey()),
							m = i.getBlockAfter(s.getEndKey());
						if (p && p !== m) return e;
						const h = a.merge({
								type: O.n,
								data: Object(D.Map)({})
							}),
							f = r.merge({
								blockMap: d.set(a.getKey(), h)
							});
						return o.EditorState.set(e, {
							currentContent: f
						})
					})(e, t) : ((e, t) => {
						const n = e.getSelection();
						if (n.isCollapsed()) return e;
						if (t.getSelection() === n) return e;
						if (n.getFocusKey() === n.getAnchorKey()) return e;
						const s = e.getCurrentContent(),
							r = s.getBlockForKey(n.getAnchorKey()),
							i = s.getBlockForKey(n.getFocusKey()),
							[a, c] = Object(z.e)(s, r, i);
						if (!a && !c) return e;
						let l = e;
						if (a !== c) {
							const t = n.getIsBackward(),
								s = Object(z.o)(n, a ? bn(a.blocks, !t) : null, c ? bn(c.blocks, t) : null, t);
							n !== s && (l = o.EditorState.forceSelection(e, s))
						} else if (a && c && a === c) {
							const t = Object(z.g)(r),
								a = Object(z.g)(i),
								d = s.getBlocksAsArray(),
								{
									start: u,
									blocks: p
								} = c,
								m = p[0],
								h = Object(z.g)(m);
							if (0 !== h.colIndex || 0 !== h.rowIndex) throw new Error("First table block must always has [0, 0] coordinate!");
							const f = Object(z.b)(i, r) < 0,
								b = Object(z.k)(t, a),
								g = [],
								x = [];
							fn()(p, e => {
								const t = Object(z.g)(e);
								b(t.rowIndex, t.colIndex) ? g.push(e) : e !== m && x.push(e)
							});
							const C = g[0] === m;
							g.sort(z.b);
							const y = [...d.slice(0, u), ...C ? [] : [m], ...g, ...x, ...d.slice(u + p.length)],
								E = bn(g, !f),
								v = bn(g, f),
								_ = Object(z.o)(n, E, v, f),
								O = s.merge({
									blockMap: o.BlockMapBuilder.createFromArray(y),
									selectionAfter: _
								});
							l = o.EditorState.set(e, {
								currentContent: O
							}), _ !== n && (l = o.EditorState.forceSelection(l, _))
						}
						return l
					})(e, t)
				},
				xn = n("./src/reddit/components/RichTextEditor/table/Renderer/index.m.less"),
				Cn = n.n(xn);
			const yn = f.a.div("Cell", Cn.a),
				En = f.a.div("Row", Cn.a),
				vn = f.a.div("Table", Cn.a),
				_n = (e, t) => {
					if (!t || !e.contains(t)) return;
					let n = t;
					for (; n && n !== e;) {
						if (n instanceof HTMLElement && n.hasAttribute("data-row")) return n;
						n.parentElement && (n = n.parentElement)
					}
				},
				On = (e, t = 10) => {
					let n = e,
						o = t;
					for (; n && o > 0;) {
						if (n instanceof HTMLElement && n.dataset.table) return n;
						n.parentElement && (n = n.parentElement), o--
					}
				},
				kn = e => {
					const {
						dataset: t
					} = e;
					if ("string" == typeof t.row && "string" == typeof t.col) return {
						rowIndex: +t.row,
						colIndex: +t.col
					}
				},
				Sn = e => {
					const t = window.getSelection(),
						{
							focusNode: n,
							anchorNode: o,
							rangeCount: s
						} = t;
					if (n !== o && s && e) {
						const n = t.getRangeAt(0);
						return Object(B.i)(n, e) && !e.contains(n.commonAncestorContainer)
					}
					return !1
				},
				jn = e => {
					const t = c.a.Children.toArray(e),
						n = Object(N.e)(t[0]),
						{
							selection: o,
							contentState: s,
							block: r
						} = n.props,
						{
							colCount: i
						} = Object(z.g)(r);
					t.sort((e, t) => Object(z.b)(Object(N.c)(e), Object(N.c)(t)));
					const a = F()(t, i);
					let l, d, u = !1;
					if (o.getAnchorKey() !== o.getFocusKey()) {
						const e = s.getBlocksAsArray(),
							n = s.getBlockForKey(o.getStartKey()),
							i = s.getBlockForKey(o.getEndKey()),
							a = e.indexOf(n),
							c = e.indexOf(i),
							p = e.indexOf(r),
							m = p + t.length - 1;
						a < p && p < c || a < m && m < c ? u = !0 : p <= a && c <= m && (d = Object(z.g)(o.getIsBackward() ? i : n), l = Object(z.g)(o.getIsBackward() ? n : i))
					}
					return {
						rows: a,
						anchorCell: d,
						focusCell: l,
						isSelectWholeTable: u
					}
				};
			class wn extends c.a.Component {
				constructor(e) {
					super(e), this.tableElem = null, this.onMouseDown = e => {
						if (!this.tableElem || e.nativeEvent.detail < 2) return;
						const t = window.getSelection(),
							n = t.rangeCount ? t.getRangeAt(0) : null,
							o = _n(this.tableElem, t.focusNode);
						if (n && o)
							if (2 === e.nativeEvent.detail && t.isCollapsed) {
								const s = n.cloneRange();
								s.setEndAfter(o), s.toString() || (e.preventDefault(), t.selectAllChildren(o))
							} else e.nativeEvent.detail >= 3 && (t.selectAllChildren(o), e.preventDefault())
					}, this.onNativeSelectionChange = () => {
						const e = this.tableElem;
						if (!e) return;
						const t = window.getSelection();
						if (t.anchorNode === t.focusNode) return void this.resetSelection();
						const n = _n(e, t.anchorNode),
							o = _n(e, t.focusNode);
						n && n === o ? this.resetSelection() : n && o ? this.setCellsRange(n, o) : n || o ? this.selectWholeTable() : Sn(e) ? this.selectWholeTable() : this.resetSelection()
					}, this.resetSelection = () => {
						(this.state.anchorCell || this.state.focusCell || this.state.isSelectWholeTable) && this.setState({
							isSelectWholeTable: !1,
							focusCell: void 0,
							anchorCell: void 0
						})
					}, this.setCellsRange = (e, t) => {
						const n = kn(t),
							o = kn(e);
						Object(z.h)(n, this.state.focusCell) && Object(z.h)(o, this.state.anchorCell) && !this.state.isSelectWholeTable || this.setState({
							focusCell: n,
							anchorCell: o,
							isSelectWholeTable: !1
						})
					}, this.selectWholeTable = () => {
						!this.state.focusCell && this.state.isSelectWholeTable || this.setState({
							focusCell: void 0,
							isSelectWholeTable: !0
						})
					}, this.state = jn(e.children)
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.children !== this.props.children && this.setState(jn(e.children))
				}
				render() {
					const {
						rows: e,
						anchorCell: t,
						focusCell: n,
						isSelectWholeTable: o
					} = this.state;
					let s;
					o ? s = (e, t) => !0 : t && n && !Object(z.h)(t, n) && (s = Object(z.k)(t, n));
					const r = e[0].map(e => Object(z.g)(Object(N.e)(e).props.block).alignment),
						i = e.map((e, t) => c.a.createElement(En, {
							key: t
						}, e.map((e, n) => c.a.createElement(yn, {
							"data-row": t,
							"data-col": n,
							"data-selected": !!s && s(t, n),
							key: n,
							style: {
								"--cell-text-alignment": r[n] ? z.a[r[n]] : void 0
							}
						}, e))));
					return c.a.createElement(vn, {
						className: s ? Cn.a.isFakeSelectionActive : void 0,
						innerRef: e => this.tableElem = e,
						onMouseDown: this.onMouseDown,
						"data-table": !0
					}, i)
				}
			}
			const Tn = Object(D.Map)({
				[O.l]: {
					element: "div",
					wrapper: c.a.createElement(wn, null)
				}
			});
			var In = n("./node_modules/lodash/isEqual.js"),
				Pn = n.n(In),
				Mn = n("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				Nn = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx"),
				Rn = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx"),
				Dn = n("./src/reddit/icons/svgs/FormattingAlignRight/index.tsx"),
				Bn = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx"),
				Ln = n("./src/reddit/icons/svgs/FormattingInsertRow/index.tsx"),
				Fn = n("./src/reddit/models/RichTextJson/index.ts");
			var An = (e, t = !1) => {
				const n = e.getSelection(),
					s = e.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[a, c] = Object(z.e)(s, r, i);
				if (a && a === c) {
					const {
						blocks: t
					} = a;
					t.sort(z.b);
					const s = Object(z.o)(n, t[0], q()(t));
					return X(o.EditorState.set(e, {
						selection: s
					}), "rows")
				}
			};
			var Kn = (e, t) => {
					const n = e.getSelection(),
						s = e.getCurrentContent(),
						r = s.getBlockForKey(n.getAnchorKey()),
						i = s.getBlockForKey(n.getFocusKey()),
						[a, c] = Object(z.e)(s, r, i);
					if (!a || a !== c) return e;
					const l = Object(z.g)(r),
						d = Object(z.g)(i),
						{
							minCol: u,
							maxCol: p
						} = Object(z.f)(l, d),
						m = a.blocks.map(e => {
							const {
								colIndex: n
							} = Object(z.g)(e);
							return u <= n && n <= p ? Object(z.m)(e, {
								alignment: t
							}) : e
						}),
						h = s.getBlockMap(),
						f = s.merge({
							blockMap: h.merge(o.BlockMapBuilder.createFromArray(m)),
							selectionAfter: n,
							selectionBefore: n
						});
					return o.EditorState.push(e, f, G.b)
				},
				Un = n("./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less"),
				Hn = n.n(Un);

			function Wn() {
				return (Wn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const zn = (e, t) => n => c.a.createElement(e, Wn({}, t, n)),
				Vn = Object(Bt.f)(Ln.a),
				qn = zn(Vn, {
					orientation: "up"
				}),
				Gn = zn(Vn, {
					orientation: "right"
				}),
				Jn = zn(Vn, {
					orientation: "left"
				}),
				Qn = Object(Bt.f)(Bn.a),
				Zn = zn(Qn, {
					orientation: "vertical"
				}),
				Xn = Object(Bt.f)(Nn.a),
				Yn = Object(Bt.f)(Rn.a),
				$n = Object(Bt.f)(Dn.a),
				eo = Object(Bt.f)(Mt.b),
				to = f.a.wrapped(Nt.a, "ToolbarContent", Hn.a),
				no = e => c.a.createElement(Dt.a, Wn({}, e, {
					className: Object(m.a)(Hn.a.formatterButton, e.className),
					tooltipContentClass: Hn.a.tooltip
				}));
			var oo = e => {
					const {
						editorState: t,
						onChange: n
					} = e;
					return c.a.createElement(to, null, c.a.createElement(no, {
						Icon: Yn,
						onClick: () => n(Kn(t, Fn.e)),
						tooltip: s.fbt._("Left align", null, {
							hk: "45eAc"
						})
					}), c.a.createElement(no, {
						Icon: Xn,
						onClick: () => n(Kn(t, Fn.d)),
						tooltip: s.fbt._("Center align", null, {
							hk: "4aAfyf"
						})
					}), c.a.createElement(no, {
						Icon: $n,
						onClick: () => n(Kn(t, Fn.f)),
						tooltip: s.fbt._("Right align", null, {
							hk: "3oHuXw"
						})
					}), c.a.createElement(Rt.c, null), c.a.createElement(no, {
						Icon: Jn,
						onClick: () => n(on(t, "columns", "before")),
						tooltip: s.fbt._("Insert column before", null, {
							hk: "11EB6Q"
						})
					}), c.a.createElement(no, {
						Icon: Gn,
						onClick: () => n(on(t, "columns", "after")),
						tooltip: s.fbt._("Insert column after", null, {
							hk: "Ddlpl"
						})
					}), c.a.createElement(no, {
						Icon: Zn,
						onClick: () => n(X(t, "columns")),
						tooltip: s.fbt._("Delete column", null, {
							hk: "3HaQQD"
						})
					}), c.a.createElement(Rt.c, null), c.a.createElement(no, {
						Icon: qn,
						onClick: () => n(on(t, "rows", "before")),
						tooltip: s.fbt._("Insert row above", null, {
							hk: "1HIgn"
						})
					}), c.a.createElement(no, {
						Icon: Vn,
						onClick: () => n(on(t, "rows", "after")),
						tooltip: s.fbt._("Insert row below", null, {
							hk: "3t7ZU"
						})
					}), c.a.createElement(no, {
						Icon: Qn,
						onClick: () => n(X(t, "rows")),
						tooltip: s.fbt._("Delete row", null, {
							hk: "3yJYqS"
						})
					}), c.a.createElement(Rt.c, null), c.a.createElement(no, {
						Icon: eo,
						onClick: () => n(An(t) || t),
						tooltip: s.fbt._("Delete table", null, {
							hk: "1fK0KA"
						})
					}))
				},
				so = n("./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less"),
				ro = n.n(so);
			const io = 20,
				ao = f.a.div("ActionButton", ro.a),
				co = f.a.div("ToolbarWrapper", ro.a),
				lo = e => {
					const t = {};
					if (!e || !document.documentElement) return t;
					const n = e.left - 154.5,
						o = e.left + 154.5 - document.documentElement.clientWidth;
					return n < 0 ? t.left = -n + io + 2 : o > 0 && (t.left = -o + io - 2), t
				},
				uo = e => {
					e.preventDefault(), e.stopPropagation()
				};
			class po extends a.Component {
				constructor(e) {
					super(e), this.containerElem = null, this.setContainerRef = e => this.containerElem = e, this.onResize = e => {
						this.hideToolbar(), this.state.tooltipPosition && this.updateForCurrentSelection()
					}, this.onDocumentClick = e => {
						this.state.isToolbarActive && this.containerElem && (this.containerElem.contains(e.target) || this.hideToolbar())
					}, this.onNativeSelectionChange = () => {
						this.updateForCurrentSelection()
					}, this.updateForCurrentSelection = () => {
						const e = window.getSelection();
						if (!e.rangeCount) return void this.hideActionButton();
						const t = e.getRangeAt(0).commonAncestorContainer,
							{
								rteDomRef: n
							} = this.props;
						if (!n.contains(t)) return void this.hideActionButton();
						const o = On(t);
						if (!o) return void this.hideActionButton();
						const s = _n(o, e.anchorNode);
						if (!s) return void this.hideActionButton();
						const r = _n(o, e.focusNode);
						r ? this.updateActionButtonPosition(s, r) : this.hideActionButton()
					}, this.updateActionButtonPosition = (e, t) => {
						const n = e.getBoundingClientRect(),
							o = t.getBoundingClientRect(),
							s = {
								top: Math.min(n.top, o.top),
								left: Math.max(n.right, o.right) - io
							};
						Pn()(this.state.tooltipPosition, s) || this.setState({
							tooltipPosition: s
						}), this.hideToolbar()
					}, this.hideActionButton = () => {
						this.hideToolbar(), this.state.tooltipPosition && this.setState({
							tooltipPosition: null
						})
					}, this.hideToolbar = () => {
						this.state.isToolbarActive && this.setState({
							isToolbarActive: !1
						})
					}, this.onActionButtonClick = e => {
						this.setState(e => ({
							isToolbarActive: !e.isToolbarActive
						})), uo(e)
					}, this.state = {
						isToolbarActive: !1,
						tooltipPosition: null
					}, this.api = {
						hideActionButton: this.hideActionButton
					}
				}
				componentDidMount() {
					const {
						onSetApi: e
					} = this.props;
					document.addEventListener("selectionchange", this.onNativeSelectionChange), document.addEventListener("click", this.onDocumentClick), window.addEventListener("resize", this.onResize), e && e(this.api)
				}
				componentWillUnmount() {
					const {
						onSetApi: e
					} = this.props;
					document.removeEventListener("selectionchange", this.onNativeSelectionChange), document.removeEventListener("click", this.onDocumentClick), window.removeEventListener("resize", this.onResize), e && e(null)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = e.editorState.getSelection(),
						n = this.props.editorState.getSelection();
					t.getHasFocus() && Object(O.v)(o.RichUtils.getCurrentBlockType(e.editorState)) ? t !== n && this.hideToolbar() : this.hideActionButton()
				}
				render() {
					const e = !this.props.readOnly && this.state.isToolbarActive,
						{
							tooltipPosition: t
						} = this.state;
					return c.a.createElement("div", {
						ref: this.setContainerRef
					}, c.a.createElement(Mn.b, {
						targetPosition: t
					}, c.a.createElement(ao, {
						className: e ? ro.a.isPressed : void 0,
						onClick: this.onActionButtonClick,
						onMouseDown: uo,
						onMouseMove: uo
					}, e ? c.a.createElement(co, {
						style: lo(t)
					}, c.a.createElement(oo, {
						onChange: this.props.onChange,
						editorState: this.props.editorState
					})) : null)))
				}
			}
			var mo = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts");
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function ho() {
				return (ho = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function fo() {
				return new Map
			}
			const bo = c.a.createContext(fo());

			function go(e) {
				class t extends c.a.Component {
					constructor() {
						super(...arguments), this.elementRef = null, this.updateElementRef = e => {
							const {
								registry: t
							} = this.props;
							this.elementRef = e, e ? t.set(this.props.entityKey, e) : t.delete(this.props.entityKey)
						}
					}
					componentWillReceiveProps(e) {
						const {
							registry: t
						} = this.props;
						this.props.entityKey !== e.entityKey && this.elementRef && (t.get(this.props.entityKey) === this.elementRef && t.delete(this.props.entityKey), t.set(e.entityKey, this.elementRef))
					}
					render() {
						return c.a.createElement("span", {
							ref: this.updateElementRef
						}, c.a.createElement(e, this.props))
					}
				}
				return e => c.a.createElement(bo.Consumer, null, n => c.a.createElement(t, ho({}, e, {
					registry: n
				})))
			}
			var xo = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				Co = n("./src/reddit/components/RichTextEditor/emotes/decorator.m.less"),
				yo = n.n(Co);
			const Eo = {
					strategy: xo.e,
					component: go(e => {
						const {
							contentState: t
						} = e, n = Object(xo.i)(t), o = t.getEntity(e.entityKey), {
							id: s,
							emoji: r,
							sticker: i
						} = o.getData(), a = n ? i : r;
						return c.a.createElement("span", {
							className: Object(m.a)(yo.a.emote, {
								[yo.a.sticker]: n
							}),
							title: `:${s}:`,
							style: {
								backgroundImage: `url(${a.path})`,
								height: a.y,
								width: a.x
							}
						}, e.children)
					})
				},
				vo = () => Eo;
			var _o = n("./src/reddit/selectors/experiments/econ/customEmojis.ts"),
				Oo = n("./src/reddit/selectors/gold/enabledFeatures.ts"),
				ko = n("./src/reddit/selectors/gold/powerups.ts"),
				So = n("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltipAsync.ts"),
				jo = n("./src/higherOrderComponents/makeAsync.tsx"),
				wo = Object(jo.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("SpecialMembershipsEmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/SpecialMemberships/tooltip.tsx")).then(e => e.default)
				});

			function To() {
				return (To = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var Io = e => {
				const {
					subreddit: t
				} = e, n = t.id, o = Object(l.e)(E.d.spEmotes), s = Object(l.e)(e => Object(Oo.b)(e, {
					subredditId: n
				})), r = Object(l.e)(_o.a);
				return Object(l.e)(e => Object(ko.f)(e, {
					subredditId: n
				})) && r ? c.a.createElement(So.a, e) : c.a.createElement(c.a.Fragment, null, s && c.a.createElement(wo, To({}, e, {
					shouldHideAddEmote: !o
				})))
			};
			const Po = new Set([R.a.LINK]);
			var Mo = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				No = n("./src/reddit/components/RichTextEditor/entity/link/decorator.m.less"),
				Ro = n.n(No);
			const Do = f.a.a("RegularLink", Ro.a),
				Bo = {
					strategy: Mo.a,
					component: go(e => {
						const t = e.contentState.getEntity(e.entityKey),
							{
								url: n
							} = t.getData();
						return c.a.createElement(Do, {
							href: n
						}, e.children)
					})
				},
				Lo = () => Bo;
			var Fo = n("./src/lib/linkMatchers/index.ts");
			const Ao = (e, t) => {
					if (t.getType() === O.f) return [];
					return (e.match(t.getText()) || []).filter(e => ((e, {
						index: t,
						lastIndex: n
					}) => {
						for (let o = t; o < n; o++) {
							if (e.getInlineStyleAt(o).contains(O.k.MONOSPACE)) return !1
						}
						return !0
					})(t, e))
				},
				Ko = (e, t, n, s, r, i) => {
					const a = e.getBlockForKey(t),
						c = o.SelectionState.createEmpty(t),
						l = [],
						d = new Set;
					let u = e;
					const p = n === R.a.USER_MENTION ? R.a.USER_LINK : n,
						m = (e, t, o) => {
							let s = null;
							for (let r = e; r < t; r++) {
								const e = a.getEntityAt(r),
									t = e && u.getEntity(e);
								if (t) {
									if (t.getType() !== n) return;
									s || d.has(e) || (s = e)
								}
							}
							if (s) {
								u.getEntity(s).getData().url !== o && (u = u.mergeEntityData(s, {
									url: o
								}))
							}
							return s || (e => (u = u.createEntity(p, "MUTABLE", {
								url: e
							})).getLastCreatedEntityKey())(o)
						},
						h = (e, t, n) => {
							const s = c.merge({
								anchorOffset: e,
								focusOffset: t
							});
							u = o.Modifier.applyEntity(u, s, n)
						},
						f = (e, t) => h(e, t, null),
						g = u.getBlockForKey(t);
					Ao(s, g).forEach(({
						index: e,
						lastIndex: s,
						url: a
					}, p) => {
						const f = m(e, s, a);
						f && (n === R.a.USER_MENTION ? (((e, n, s) => {
							const a = u && u.getBlockForKey(t),
								l = a && a.getText().substr(e, n);
							if (l && l.replace(b.d.mention, "") && l.startsWith(b.d.mention) && b.c.test(l.replace(b.d.mention, ""))) {
								const t = c.merge({
										anchorOffset: e,
										focusOffset: e + b.d.mention.length
									}),
									a = c.merge({
										anchorOffset: e,
										focusOffset: n + b.d.mention.length
									}),
									l = c.merge({
										anchorOffset: n + b.d.mention.length,
										focusOffset: n + b.d.mention.length
									});
								u = Object(W.b)(u, t, b.d.profile), u = o.Modifier.applyEntity(u, a, s), r && i && i(o.EditorState.forceSelection(r, l))
							}
						})(e + p, s + p, f), l.push([e + p, s + p + 1])) : (h(e, s, f), l.push([e, s])), d.add(f))
					});
					let x = 0;
					return g.findEntityRanges(e => {
						const t = e.getEntity();
						return !!t && u.getEntity(t).getType() === n
					}, (e, t) => {
						if (x >= l.length) return void f(e, t);
						const [n, o] = l[x];
						t <= n ? f(e, t) : (e < n && f(e, n - 1), t > o && f(o, t), x++)
					}), u
				},
				Uo = (e, t) => {
					const n = e.getCurrentContent(),
						s = t.getCurrentContent();
					if (n === s) return e;
					const r = n.getBlockMap(),
						i = s.getBlockMap();
					let a = n;
					return r.forEach((t, n) => {
						if (n) {
							if (t === i.get(n)) return;
							a = Ko(a, n, R.a.SUBREDDIT_LINK, Fo.f), a = Ko(a, n, R.a.USER_LINK, Fo.i), a = Ko(a, n, R.a.USER_MENTION, Fo.d, e, t => e = t)
						}
					}), e.getCurrentContent() === a ? e : (a = a.merge({
						selectionAfter: e.getCurrentContent().getSelectionAfter(),
						selectionBefore: e.getCurrentContent().getSelectionBefore()
					}), o.EditorState.set(e, {
						currentContent: a
					}))
				};
			var Ho = e => {
				return !!e.getCurrentContent().getBlockMap().filter(e => !!e && e.getType() === O.a).size
			};
			const Wo = " ".repeat(4),
				zo = new RegExp("^ {1,4}|\\t"),
				Vo = new Set([O.b.CODE_BLOCK]),
				qo = (e, t) => {
					const n = t.getCurrentContent(),
						s = t.getSelection(),
						r = e.shiftKey;
					let i = n,
						a = s.getAnchorOffset(),
						c = s.getFocusOffset();
					if (Object(J.a)(n, s, (e, t) => {
							const n = e.getType();
							if ("paragraph" === n || !Vo.has(n)) return !1;
							let l = null;
							const d = e.getText(),
								u = o.SelectionState.createEmpty(t);
							if (r) {
								const e = d.match(zo);
								if (e) {
									const t = e[0].length;
									i = W.b(i, u.merge({
										focusOffset: t
									}), ""), l = -t
								}
							} else i = W.a(i, s.isCollapsed() ? s : u, Wo), l = 4;
							null !== l && (t === s.getAnchorKey() && (a += l), t === s.getFocusKey() && (c += l))
						}), i !== n) return i = i.merge({
						selectionAfter: s.merge({
							anchorOffset: a,
							focusOffset: c
						})
					}), e.preventDefault(), o.EditorState.push(t, i, r ? "remove-range" : "insert-characters")
				},
				Go = (e, t) => (e => {
					const t = e.getSelection(),
						n = e.getCurrentContent();
					if (!t.isCollapsed()) return Y(e);
					if (0 === t.getStartOffset()) {
						const o = n.getBlockForKey(t.getEndKey());
						if (Object(O.v)(o.getType())) return e; {
							const t = n.getBlockBefore(o.getKey());
							if (t && Object(O.v)(t.getType())) return e
						}
					}
				})(e) || ((e, t) => {
					const n = e.getSelection(),
						s = e.getCurrentContent();
					if (n.isCollapsed() && 0 === n.getStartOffset()) {
						const r = s.getBlockForKey(n.getEndKey());
						if (Object(O.o)(r.getType())) return Object(M.d)(e, r.getKey());
						if (Object(O.u)(r.getType())) {
							const t = s.getBlockBefore(r.getKey());
							return o.EditorState.forceSelection(e, Object(N.b)(t))
						}
						if (!Object(M.q)(t) && Object(N.g)(r)) {
							const t = s.getBlockBefore(r.getKey());
							if (t && Object(O.o)(t.getType())) return e = o.EditorState.push(e, Object(N.i)(s, r.getKey()), G.f), o.EditorState.forceSelection(e, Object(N.b)(t))
						}
					}
				})(e, t),
				Jo = (e, t) => (e => {
					const t = e.getSelection(),
						n = e.getCurrentContent();
					if (!t.isCollapsed()) return Y(e); {
						const o = n.getBlockForKey(t.getEndKey());
						if (t.getEndOffset() === o.getLength()) {
							if (Object(O.v)(o.getType())) return e; {
								const t = n.getBlockAfter(o.getKey());
								if (t && Object(O.v)(t.getType())) return e
							}
						}
					}
				})(e) || ((e, t) => {
					const n = e.getSelection(),
						s = e.getCurrentContent();
					if (!n.isCollapsed()) return;
					const r = s.getBlockForKey(n.getEndKey());
					if (n.getEndOffset() === r.getLength()) {
						if (Object(O.o)(r.getType())) return Object(M.d)(e, r.getKey()); {
							const i = s.getBlockAfter(n.getEndKey());
							if (i && Object(O.o)(i.getType())) {
								if (Object(M.q)(t)) return Object(M.d)(e, i.getKey());
								if (Object(N.g)(r)) return e = o.EditorState.push(e, Object(N.i)(s, r.getKey()), G.f), o.EditorState.forceSelection(e, Object(N.b)(i))
							}
						}
					}
				})(e, t),
				Qo = e => {
					const t = e.getSelection();
					if (!t.isCollapsed()) return !1;
					const n = o.RichUtils.getCurrentBlockType(e);
					if (!O.c.includes(n)) return !1;
					if (t.getFocusOffset() > 0) {
						if ("\n" === e.getCurrentContent().getBlockForKey(t.getFocusKey()).getText()[t.getFocusOffset() - 1]) return !1
					}
					return !0
				};
			var Zo = n("./src/lib/memoizeByReference/index.ts");
			const Xo = Object(Zo.a)(e => {
					const t = e.getSelection();
					if (!t.isCollapsed()) return;
					const n = t.getStartOffset(),
						o = e.getCurrentContent(),
						s = o.getBlockForKey(t.getFocusKey());
					if (s.getType() !== O.n) return;
					const r = s.getText();
					if (r.startsWith("1.") && 2 === n) return O.i.ORDERED;
					if (r.startsWith("*") && 1 === n) {
						const e = o.getBlockBefore(s.getKey());
						if (e && e.getType() === O.n && e.getText().startsWith("* ")) return;
						return O.i.UNORDERED
					}
				}),
				Yo = e => {
					const t = Xo(e);
					if (!t) return e;
					const n = Object(mo.a)(e);
					let s = o.Modifier.replaceText(n.getCurrentContent(), n.getSelection().merge({
						anchorOffset: 0
					}), "");
					return s = o.Modifier.setBlockType(s, s.getSelectionAfter(), t), o.EditorState.push(n, s, G.c)
				};
			var $o = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const es = Object(jo.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GifTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx")).then(e => e.default)
			});

			function ts(e) {
				return c.a.createElement(es, e)
			}
			var ns = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				os = n("./src/reddit/components/RichTextEditor/spoiler/decorator.m.less"),
				ss = n.n(os);
			const rs = e => c.a.createElement("span", {
					className: ss.a.spoiler
				}, c.a.createElement("span", null), e.children, c.a.createElement("span", null)),
				is = () => ({
					strategy: ns.a,
					component: rs
				});
			var as = n("./src/reddit/components/FocusableContent/index.tsx"),
				cs = n("./src/reddit/components/RichTextEditor/Blockquote/index.m.less"),
				ls = n.n(cs);
			const ds = f.a.div("BlockQuoteWrapper", ls.a),
				us = Object(D.Map)({
					[O.e]: {
						element: "blockquote",
						wrapper: c.a.createElement(ds, null)
					}
				});
			var ps = n("./src/reddit/components/RichTextEditor/CodeBlock/index.m.less"),
				ms = n.n(ps);
			const hs = f.a.div("CodeBlockWrapper", ms.a),
				fs = Object(D.Map)({
					[O.f]: {
						element: "code",
						wrapper: c.a.createElement(hs, null)
					}
				});
			var bs = n("./node_modules/bowser/src/bowser.js"),
				gs = n.n(bs),
				xs = n("./node_modules/lodash/includes.js"),
				Cs = n.n(xs),
				ys = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				Es = n("./src/reddit/components/RichTextEditor/DragController/index.m.less"),
				vs = n.n(Es);
			const _s = f.a.div("DropLine", vs.a),
				Os = f.a.wrapped(Mn.b, "Tooltip", vs.a);
			class ks extends a.Component {
				constructor(e) {
					super(e), this.dragCount = 0, this.setContainerRef = e => this.containerRef = e, this.preventDocumentDrop = e => {
						!! function e(t) {
							return t.draggable ? t : t.parentElement ? e(t.parentElement) : null
						}(e.target) || (e.preventDefault(), e.stopPropagation())
					}, this.onDragOver = e => {
						const t = Cs()(e.dataTransfer.types, Ke);
						if (!t) {
							if (!Object(ys.c)(e.dataTransfer) || !this.props.allowMediaUploads) return
						}
						if (!t && !Object(ys.c)(e.dataTransfer)) return;
						e.preventDefault();
						try {
							e.dataTransfer.dropEffect = t ? "move" : "copy"
						} catch (r) {}
						const {
							editorState: n
						} = this.props;
						let o = null;
						const s = Object(ys.b)(n, e);
						if (s) {
							const e = this.containerRef.getBoundingClientRect().left;
							o = {
								top: s.clientY,
								left: e
							}
						}
						Pn()(o, this.state.point) || this.setState({
							point: o
						})
					}, this.onDragEnter = e => {
						this.dragCount++
					}, this.onDragLeave = e => {
						this.dragCount--, 0 === this.dragCount && this.state.point && this.setState({
							point: null
						})
					}, this.onDrop = e => {
						const t = () => {
								this.dragCount = 0, this.setState({
									point: null
								})
							},
							n = gs.a.msie ? null : e.dataTransfer.getData(Ke),
							o = Object(ys.a)(e.dataTransfer);
						if (!(n || o.length && this.props.allowMediaUploads)) return void t();
						const {
							editorState: s
						} = this.props, r = Object(ys.b)(s, e);
						if (!r) return void t();
						e.preventDefault(), e.stopPropagation();
						const i = r.isBefore ? N.a.before : N.a.after;
						n ? this.props.onBlockMove(n, r.blockKey, i) : setTimeout(() => {
							this.props.onFilesDrop(o, r.blockKey, i)
						}), t()
					}, this.state = {
						point: null
					}
				}
				componentDidMount() {
					document.addEventListener("drop", this.preventDocumentDrop), document.addEventListener("dragover", this.preventDocumentDrop)
				}
				componentWillUnmount() {
					document.removeEventListener("drop", this.preventDocumentDrop), document.removeEventListener("dragover", this.preventDocumentDrop)
				}
				render() {
					const {
						children: e
					} = this.props, {
						point: t
					} = this.state, n = c.a.Children.only(e);
					return c.a.createElement("div", {
						className: Object(m.a)(vs.a.container, {
							[vs.a.hideCaret]: !!t
						}),
						onDragEnter: this.onDragEnter,
						onDragLeave: this.onDragLeave,
						onDragOver: this.onDragOver,
						onDrop: this.onDrop,
						ref: this.setContainerRef
					}, c.a.createElement("div", null, n), c.a.createElement(Os, {
						targetPosition: t
					}, c.a.createElement(_s, null)))
				}
			}
			var Ss = n("./node_modules/draft-js/lib/DraftPasteProcessor.js"),
				js = n.n(Ss),
				ws = n("./node_modules/draft-js/lib/getEntityKeyForSelection.js"),
				Ts = n.n(ws),
				Is = n("./node_modules/draft-js/lib/splitTextIntoTextBlocks.js"),
				Ps = n.n(Is),
				Ms = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts"),
				Ns = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function Rs(e, t, n) {
				const s = Object(o.convertFromHTML)(t, void 0, n);
				if (s) {
					const {
						contentBlocks: t,
						entityMap: n
					} = s;
					if (t) {
						const s = o.BlockMapBuilder.createFromArray(function(e) {
							return e.map(e => Object(O.r)(e.getType()) ? j(e) : e)
						}(t));
						return [e.set("entityMap", n), s]
					}
				}
				return [e, null]
			}

			function Ds(e, t, n) {
				const s = Ps()(t),
					r = n && 1 === s.length ? n : o.CharacterMetadata.create(),
					i = js.a.processText(s, r).map(e => e.merge({
						type: O.n
					}));
				return o.BlockMapBuilder.createFromArray(i)
			}
			const Bs = e => {
					if (!e) return null;
					const t = (new DOMParser).parseFromString(e, "text/html").querySelector("[data-reddit-rtjson]");
					return t && t.getAttribute("data-reddit-rtjson")
				},
				Ls = e => {
					if (fe()) return {
						text: window.clipboardData.getData("text"),
						html: null
					}; {
						const t = e.clipboardData.getData("text/html");
						return {
							text: e.clipboardData.getData("text/plain"),
							html: t
						}
					}
				};

			function Fs(e, t, n, s) {
				const {
					text: r,
					html: i
				} = Ls(n), a = function(e, t, n, o) {
					const s = {
							text: t,
							html: n,
							rtjson: o,
							fragment: null
						},
						r = e.getClipboard();
					return r && n && function(e, t, n, o) {
						return -1 !== t.indexOf(o) || 1 === e.size && e.first().getText() === n
					}(r, n, t, e.getEditorKey()) && (s.fragment = r), s
				}(t, r, i, i && Bs(i));
				t.getClipboard() && !a.fragment && t.setClipboard(null);
				const c = e.getCurrentContent(),
					l = e.getSelection(),
					d = e.getCurrentInlineStyle(),
					u = t.props.blockRenderMap;
				let p = null,
					m = c;
				if (!(p = function(e, t, n) {
						const o = e.getBlockForKey(t.getStartKey()),
							s = e.getBlockForKey(t.getEndKey());
						if (o.getType() === O.f || s.getType() === O.f) return Ds(0, n).map(e => e.merge({
							type: O.f,
							depth: 0
						}))
					}(m, l, a.text)) && a.fragment && (p = a.fragment, [m, p] = Object(Ms.b)(m, p), p = Ee(p, s)), !p && a.rtjson && (p = function(e) {
						const t = JSON.parse(e);
						return Object(o.convertFromRaw)(t).getBlockMap()
					}(a.rtjson)), !p && a.html && ([m, p] = Rs(m, a.html, u)), !p && a.text) {
					const e = function(e, t, n) {
						return o.CharacterMetadata.create({
							style: n,
							entity: Ts()(e, t)
						})
					}(m, l, d);
					p = Ds(0, a.text, e), [m, p] = function(e, t) {
						let n = e,
							o = t;
						return t.forEach(e => {
							const t = e.getText(),
								s = Fo.e.match(t);
							if (!s) return;
							let r = e;
							s.forEach(({
								index: e,
								lastIndex: t,
								url: s
							}) => {
								const i = (n = n.createEntity(R.a.LINK, "MUTABLE", {
									url: s
								})).getLastCreatedEntityKey();
								r = Object(Ns.a)(r, e, t, i), o = o.set(r.getKey(), r)
							})
						}), [n, o]
					}(m, p)
				}
				if (p) return m = function(e, t, n) {
					if (n.isEmpty()) return e;
					let o = re(e, t, n) || ve(e, t, n);
					return o || (o = W.c(e, t, n))
				}(m, l, p), o.EditorState.push(e, m, G.e)
			}
			var As = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				Ks = n("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				Us = n("./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less"),
				Hs = n.n(Us);
			const Ws = f.a.div("LinkDetailsBox", Hs.a),
				zs = f.a.a("Link", Hs.a),
				Vs = f.a.a("LinkButton", Hs.a);
			var qs = e => c.a.createElement("div", null, c.a.createElement(Ws, {
					onMouseDown: e => e.preventDefault()
				}, c.a.createElement(zs, {
					href: e.url,
					target: "_blank"
				}, e.url), c.a.createElement("span", null, " – "), c.a.createElement(Vs, {
					onClick: () => e.onStartEdit(),
					role: "button"
				}, s.fbt._("Change", null, {
					hk: "3aOmcP"
				})), c.a.createElement("span", null, " | "), c.a.createElement(Vs, {
					onClick: () => e.onRemove(),
					role: "button"
				}, s.fbt._("Remove", null, {
					hk: "3nPt5D"
				})))),
				Gs = n("./src/reddit/controls/Input/index.tsx"),
				Js = n("./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less"),
				Qs = n.n(Js);
			const Zs = f.a.form("EditForm", Qs.a),
				Xs = f.a.wrapped(e => c.a.createElement("div", e, e.children), "LinkEditorBox", Qs.a),
				Ys = f.a.wrapped(Gs.a, "Input", Qs.a),
				$s = f.a.label("Label", Qs.a),
				er = f.a.div("HintAndButtonRow", Qs.a),
				tr = f.a.span("InvalidUrlHint", Qs.a),
				nr = f.a.wrapped(Ye.i, "SubmitButton", Qs.a),
				or = e => {
					e && (e.focus(), e.select())
				},
				sr = / /g,
				rr = e => e.replace(sr, "%20");
			class ir extends a.Component {
				constructor(e) {
					super(e), this.focused = !1, this.focusLostTimer = 0, this.textInputElementRef = null, this.urlInputElementRef = null, this.onEdited = () => {
						const e = this.state.url.trim(),
							t = rr(e),
							n = Object(Fo.h)(t);
						if (!n) return this.setState({
							isInvalidUrl: !0
						}), void(this.urlInputElementRef && this.urlInputElementRef.focus());
						const o = n.url;
						this.props.onEdited(o, this.state.displayText.trim() || e)
					}, this.onFocus = () => {
						this.focused = !0
					}, this.onBlur = () => {
						this.focused = !1, this.focusLostTimer = window.setTimeout(() => {
							this.focused || this.props.onFocusLost()
						}, 0)
					}, this.onClick = e => {
						e.stopPropagation()
					}, this.handleUrlChange = e => {
						const t = e.target.value;
						let {
							isInvalidUrl: n
						} = this.state;
						n && Object(Fo.g)(Fo.e, t) && (n = !1), this.setState({
							url: t,
							isInvalidUrl: n
						})
					}, this.handleDisplayTextChange = e => {
						this.setState({
							displayText: e.target.value
						})
					}, this.handleSubmit = e => {
						this.onEdited(), e.preventDefault()
					}, this.state = {
						url: e.url,
						displayText: e.displayText,
						isInvalidUrl: !1
					}
				}
				componentDidMount() {
					Object(Fo.g)(Fo.e, this.state.displayText) ? or(this.textInputElementRef) : or(this.urlInputElementRef)
				}
				componentWillUnmount() {
					this.focusLostTimer && clearTimeout(this.focusLostTimer)
				}
				render() {
					const {
						isInsertMode: e
					} = this.props;
					return c.a.createElement(Xs, {
						tabIndex: 0,
						onClick: this.onClick,
						onBlur: this.onBlur,
						onFocus: this.onFocus
					}, c.a.createElement(Zs, {
						onSubmit: this.handleSubmit
					}, c.a.createElement($s, null, s.fbt._("Text", null, {
						hk: "1oock0"
					}), ":", c.a.createElement(Ys, {
						innerRef: e => this.textInputElementRef = e,
						type: "text",
						placeholder: s.fbt._("Title of link (optional)", null, {
							hk: "17GvI"
						}),
						value: this.state.displayText,
						onChange: this.handleDisplayTextChange
					})), c.a.createElement($s, null, s.fbt._("Link", null, {
						hk: "1Cfzw7"
					}), c.a.createElement(Ys, {
						innerRef: e => this.urlInputElementRef = e,
						type: "text",
						placeholder: s.fbt._("Paste or type a link", null, {
							hk: "3QWoAf"
						}),
						value: this.state.url,
						onChange: this.handleUrlChange
					})), c.a.createElement(er, null, c.a.createElement(nr, {
						type: "submit",
						disabled: this.state.isInvalidUrl
					}, e ? s.fbt._("Insert", null, {
						hk: "3H7yaS"
					}) : s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), this.state.isInvalidUrl ? c.a.createElement(tr, null, s.fbt._("Link doesn't look right", null, {
						hk: "1BHfKz"
					})) : null)))
				}
			}

			function ar(e, t, n) {
				const o = e.getCurrentContent(),
					s = {
						text: "",
						url: ""
					};
				if (t.isCollapsed()) return s;
				if (n) s.text = n.entityText, s.url = o.getEntity(n.entityKey).getData().url;
				else {
					s.text = function(e, t) {
						if (e.getStartKey() !== e.getEndKey()) throw new Error("Selection must be in a single block");
						return e.isCollapsed() ? "" : t.getBlockForKey(e.getStartKey()).getText().slice(e.getStartOffset(), e.getEndOffset())
					}(t, e.getCurrentContent());
					const n = Object(Fo.g)(Fo.e, s.text);
					n && (s.url = n.url)
				}
				return s
			}

			function cr(e, t) {
				return o.EditorState.set(e, {
					currentContent: o.Modifier.removeInlineStyle(e.getCurrentContent(), t, O.k.HIGHLIGHT)
				})
			}
			class lr extends a.Component {
				constructor(e) {
					super(e), this.api = null, this.updateTooltipPosition = null, this.lastEditorSelectionClientRect = null, this.editLinkInSelection = e => {
						const {
							editorState: t
						} = this.props;
						let n = e,
							s = t;
						const r = t.getCurrentContent();
						if (!Object(Mo.e)(r, e)) return !1;
						const i = Object(As.a)(r, e);
						if (i) {
							if (r.getEntity(i.entityKey).getType() !== R.a.LINK) return !1;
							n = i.entitySelection
						} else this.isEditorFocused() && (this.lastEditorSelectionClientRect = Object(Ks.a)());
						return this.state.linkSelection && (s = cr(t, this.state.linkSelection)), s = function(e, t) {
							return o.EditorState.set(e, {
								currentContent: o.Modifier.applyInlineStyle(e.getCurrentContent(), t, O.k.HIGHLIGHT)
							})
						}(t, n), this.props.onChange(s, () => {
							this.setState({
								linkSelection: n,
								linkEntity: i
							})
						}), !0
					}, this.hidePopup = () => {
						this.interruptLinkEditing(), this.hideDetailsPopup()
					}, this.showDetailsPopup = () => {
						this.state.isDetailsPopupActive || this.setState({
							isDetailsPopupActive: !0
						})
					}, this.hideDetailsPopup = () => {
						this.state.isDetailsPopupActive && this.setState({
							isDetailsPopupActive: !1
						})
					}, this.updatePosition = () => {
						if (!this.updateTooltipPosition) return;
						const {
							editorState: e
						} = this.props, t = e.getCurrentContent();
						let n;
						if (this.state.linkSelection) {
							const e = Object(As.a)(t, this.state.linkSelection);
							if (e) {
								const t = this.props.entityElementRegistry.get(e.entityKey);
								n = t && t.getBoundingClientRect()
							} else this.lastEditorSelectionClientRect && (n = this.lastEditorSelectionClientRect)
						} else {
							const t = Object(Mo.c)(e);
							if (t) {
								const e = this.props.entityElementRegistry.get(t.entityKey);
								n = e && e.getBoundingClientRect()
							}
						}
						n && (this.updateTooltipPosition({
							left: n.left,
							top: n.bottom
						}), this.lastEditorSelectionClientRect = null)
					}, this.handleLink = (e, t) => {
						const {
							linkSelection: n
						} = this.state, {
							editorState: s
						} = this.props;
						let r = s;
						n && (n.isCollapsed() || (r = cr(s, n)), void 0 !== e && (r = Object(Mo.h)(r, n, e, t)), this.setState({
							linkSelection: null,
							linkEntity: null
						}), r !== s && (r = o.EditorState.forceSelection(r, r.getSelection()), this.props.onChange(r)))
					}, this.onLinkEdited = (e, t) => {
						this.handleLink(e, t)
					}, this.interruptLinkEditing = () => this.handleLink(), this.isEditorFocused = () => this.props.editorState.getSelection().getHasFocus(), this.onStartEditFocusedLink = () => {
						const {
							editorState: e
						} = this.props, t = Object(Mo.c)(e);
						t && this.editLinkInSelection(t.entitySelection)
					}, this.onRemoveFocusedLink = () => {
						const {
							editorState: e
						} = this.props, t = Object(Mo.c)(e);
						t && this.props.onChange(Object(Mo.h)(e, t.entitySelection, ""))
					}, this.renderEditorPopup = () => {
						const {
							linkSelection: e,
							linkEntity: t
						} = this.state, {
							editorState: n
						} = this.props;
						if (!e) return null;
						const {
							text: o,
							url: s
						} = ar(n, e, t);
						return c.a.createElement(ir, {
							url: s,
							displayText: o,
							isInsertMode: !t,
							onEdited: this.onLinkEdited,
							onFocusLost: this.interruptLinkEditing
						})
					}, this.renderDetailsPopup = () => {
						const e = Object(Mo.c)(this.props.editorState);
						return e && this.isEditorFocused() && this.state.isDetailsPopupActive ? c.a.createElement(qs, {
							url: e.url,
							onStartEdit: this.onStartEditFocusedLink,
							onRemove: this.onRemoveFocusedLink
						}) : null
					}, this.state = {
						isDetailsPopupActive: !1,
						linkSelection: null,
						linkEntity: null
					}, this.api = {
						editLinkInSelection: this.editLinkInSelection,
						hidePopup: this.hidePopup
					}
				}
				componentDidMount() {
					const {
						onSetApi: e
					} = this.props;
					this.api && e && e(this.api)
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null)
				}
				componentDidUpdate(e, t) {
					t.linkSelection === this.state.linkSelection && e.editorState === this.props.editorState || (this.showDetailsPopup(), this.updatePosition())
				}
				render() {
					return c.a.createElement(Mn.b, {
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: Mn.a.Above
					}, this.renderEditorPopup() || this.renderDetailsPopup())
				}
			}
			var dr = n("./src/reddit/components/RichTextEditor/OrderedList/index.m.less"),
				ur = n.n(dr);
			const pr = f.a.ol("OrderedListWrapper", ur.a),
				mr = Object(D.Map)({
					[O.i.ORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: c.a.createElement(pr, null)
					}
				});
			var hr = n("./src/reddit/components/RichTextEditor/Paragraph/index.m.less"),
				fr = n.n(hr);
			const br = f.a.div("ParagraphWrapper", fr.a),
				gr = Object(D.Map)({
					[O.n]: {
						element: "div",
						aliasedElements: ["p"],
						wrapper: c.a.createElement(br, null)
					}
				});
			var xr = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx");
			var Cr = n("./src/reddit/components/RichTextEditor/TextRendering/index.m.less"),
				yr = n.n(Cr);
			const Er = Object(Zo.a)(() => ({
					[O.k.SUPERSCRIPT]: {
						position: "relative",
						top: "-0.4em",
						fontSize: "0.7em",
						lineHeight: "0.7em"
					},
					[O.k.HIGHLIGHT]: {
						backgroundColor: "#b8e0f9"
					},
					[O.k.UNDERLINE]: {
						textDecoration: "none"
					},
					[O.k.MONOSPACE]: {
						backgroundColor: "var(--newRedditTheme-field)",
						caretColor: "#000",
						color: "var(--newRedditTheme-monospaceColor)",
						fontFamily: "Noto Mono, Menlo, Monaco, Consolas, monospace",
						padding: "0.1em 0.2em",
						fontSize: "0.8em",
						borderRadius: "3px"
					}
				})),
				vr = f.a.div("H1", yr.a),
				_r = f.a.div("H2", yr.a),
				Or = f.a.div("H3", yr.a),
				kr = f.a.div("H4", yr.a),
				Sr = f.a.div("H5", yr.a),
				jr = f.a.div("H6", yr.a),
				wr = e => ({
					component: t => c.a.createElement(e, null, c.a.createElement(o.EditorBlock, t)),
					editable: !0
				}),
				Tr = {
					[O.g.H1]: wr(vr),
					[O.g.H2]: wr(_r),
					[O.g.H3]: wr(Or),
					[O.g.H4]: wr(kr),
					[O.g.H5]: wr(Sr),
					[O.g.H6]: wr(jr)
				},
				Ir = ["italic normal 1em 'Noto Sans'", "italic bold 1em 'Noto Sans'", "normal bold 1em 'Noto Sans'"],
				Pr = () => {
					const e = document.fonts;
					e && e.load && Ir.forEach(t => e.load(t))
				};
			var Mr = n("./src/reddit/components/RichTextEditor/UnorderedList/index.m.less"),
				Nr = n.n(Mr);
			const Rr = f.a.ul("UnorderedListWrapper", Nr.a),
				Dr = Object(D.Map)({
					[O.i.UNORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: c.a.createElement(Rr, null)
					}
				});
			var Br = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Lr = n("./node_modules/lodash/debounce.js"),
				Fr = n.n(Lr),
				Ar = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				Kr = n("./src/reddit/controls/SubredditDropdown/index.m.less"),
				Ur = n.n(Kr);

			function Hr() {
				return (Hr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Wr = ({
				isFocused: e,
				...t
			}) => c.a.createElement("div", Hr({
				className: Object(m.a)(Ur.a.entry, {
					[Ur.a.mIsFocused]: e
				})
			}, t));
			class zr extends a.Component {
				constructor(e) {
					super(e), this.mouseDown = !1, this.onMouseUp = () => {
						this.mouseDown && (this.props.onEntrySelect(this.props.entry), this.mouseDown = !1)
					}, this.onMouseDown = e => {
						this.mouseDown = !0, e.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onEntryFocus(this.props.entry)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1
				}
				render() {
					return c.a.createElement(Wr, {
						isFocused: this.props.isFocused,
						onMouseDown: this.onMouseDown,
						onMouseUp: this.onMouseUp,
						onMouseOver: this.onMouseOver
					}, this.props.children)
				}
			}
			var Vr = n("./src/reddit/helpers/name/index.ts"),
				qr = n("./src/reddit/selectors/subredditAutocomplete.ts");
			const Gr = Object(d.c)({
				subredditSuggestions: (e, t) => {
					const n = Object(qr.d)(e, t);
					return n ? n.subreddits : []
				}
			});
			class Jr extends a.Component {
				constructor(e) {
					super(e), this.api = null, this.onEntrySelect = e => {
						this.props.onSelect(this.props.subredditSuggestions[e].name)
					}, this.onEntryFocus = e => {
						this.setState({
							selectedSuggestionIndex: e
						})
					}, this.moveUp = () => {
						if (this.props.subredditSuggestions.length > 1) {
							let e = this.state.selectedSuggestionIndex - 1;
							return e = e < 0 ? this.props.subredditSuggestions.length - 1 : e, this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.props.subredditSuggestions.length > 1) {
							const e = (this.state.selectedSuggestionIndex + 1) % this.props.subredditSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.props.subredditSuggestions.length) {
							const e = this.props.subredditSuggestions[this.state.selectedSuggestionIndex];
							return e && this.props.onSelect(e.name), !0
						}
						return !1
					}, this.state = {
						selectedSuggestionIndex: 0
					}, this.requestSubredditAutocomplete = Fr()(this.requestSubredditAutocomplete.bind(this), 200, {
						maxWait: 200
					}), this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.requestSubredditAutocomplete(this.props.substring), this.props.onDropdownApi(this.api)
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(e) {
					e.substring !== this.props.substring && (this.requestSubredditAutocomplete(e.substring), this.setState({
						selectedSuggestionIndex: 0
					}))
				}
				requestSubredditAutocomplete(e) {
					this.props.onGetSubredditAutocomplete(e)
				}
				render() {
					return this.props.subredditSuggestions.length ? c.a.createElement("div", {
						className: Object(m.a)(Ur.a.list, this.props.className)
					}, this.props.subredditSuggestions.map((e, t) => c.a.createElement(zr, {
						entry: t,
						isFocused: t === this.state.selectedSuggestionIndex,
						key: e.name,
						onEntrySelect: this.onEntrySelect,
						onEntryFocus: this.onEntryFocus
					}, Object(Vr.c)(e.name)))) : null
				}
			}
			var Qr = Object(l.b)(Gr, (e, t) => ({
					onGetSubredditAutocomplete: t => {
						e(Ar.a(t))
					}
				}))(Jr),
				Zr = n("./src/reddit/selectors/comments.ts");
			const Xr = Object(d.c)({
				commentAuthors: Zr.h
			});
			class Yr extends a.Component {
				constructor(e) {
					super(e), this.api = null, this.onEntrySelect = e => {
						this.props.onSelect(this.state.userSuggestions[e])
					}, this.onEntryFocus = e => {
						this.setState({
							selectedSuggestionIndex: e
						})
					}, this.moveUp = () => {
						if (this.state.userSuggestions.length > 1) {
							let e = this.state.selectedSuggestionIndex - 1;
							return e = e < 0 ? this.state.userSuggestions.length - 1 : e, this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.state.userSuggestions.length > 1) {
							const e = (this.state.selectedSuggestionIndex + 1) % this.state.userSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: e
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.state.userSuggestions.length) {
							const e = this.state.userSuggestions[this.state.selectedSuggestionIndex];
							return e && this.props.onSelect(e), !0
						}
						return !1
					}, this.state = {
						userSuggestions: [],
						selectedSuggestionIndex: 0
					}, this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.props.onDropdownApi(this.api), this.setState({
						userSuggestions: this.filterUsers(this.props.substring)
					})
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(e) {
					e.substring !== this.props.substring && this.setState({
						selectedSuggestionIndex: 0,
						userSuggestions: this.filterUsers(e.substring)
					})
				}
				filterUsers(e) {
					const {
						commentAuthors: t
					} = this.props;
					return t.filter(t => t.toLowerCase().startsWith(e.toLowerCase()))
				}
				render() {
					return this.state.userSuggestions.length ? c.a.createElement("div", {
						className: Object(m.a)(Ur.a.list, this.props.className)
					}, this.state.userSuggestions.map((e, t) => c.a.createElement(zr, {
						key: t,
						entry: t,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						isFocused: t === this.state.selectedSuggestionIndex
					}, Object(Vr.d)(e)))) : null
				}
			}
			var $r = Object(l.b)(Xr)(Yr),
				ei = n("./node_modules/lodash/dropRightWhile.js"),
				ti = n.n(ei),
				ni = n("./node_modules/lodash/flatMap.js"),
				oi = n.n(ni),
				si = n("./node_modules/lodash/reduceRight.js"),
				ri = n.n(si),
				ii = n("./node_modules/lodash/trimEnd.js"),
				ai = n.n(ii),
				ci = n("./node_modules/lodash/trimStart.js"),
				li = n.n(ci),
				di = n("./src/lib/forEachGroup/index.ts");

			function ui(e, t) {
				const n = [],
					o = e.withMutations(e => {
						for (; e.size && t(e.first());) n.push(e.first()), e.shift()
					});
				return {
					popped: n,
					stack: o
				}
			}
			var pi = n("./src/lib/unicodeUtils/index.ts"),
				mi = n("./src/reddit/helpers/richTextJson/index.ts"),
				hi = n("./src/reddit/models/RichTextJson/nodeMakers.ts");
			const fi = {
				BOLD: Fn.j.bold,
				ITALIC: Fn.j.italic,
				MONOSPACE: Fn.j.monospace,
				STRIKETHROUGH: Fn.j.strikethrough,
				SUBSCRIPT: Fn.j.subscript,
				SUPERSCRIPT: Fn.j.superscript,
				UNDERLINE: Fn.j.underline
			};
			var bi = (e, t) => gi(e.getBlockMap(), e, t);
			const gi = (e, t, n) => {
					const o = [];
					let s = e.toStack();
					for (; s.size;) {
						const e = s.first(),
							r = e.getType();
						switch (s = s.shift(), r) {
							case O.g.H1:
							case O.g.H2:
							case O.g.H3:
							case O.g.H4:
							case O.g.H5:
							case O.g.H6:
								o.push(_i(e, t));
								break;
							case O.e: {
								const {
									popped: n,
									stack: r
								} = ui(s, e => e.getType() === O.e);
								s = r, o.push(Oi([e, ...n], t));
								break
							}
							case O.f: {
								const {
									popped: t,
									stack: n
								} = ui(s, e => e.getType() === O.f);
								s = n, o.push(ki([e, ...t]));
								break
							}
							case O.i.ORDERED:
							case O.i.UNORDERED: {
								const {
									popped: n,
									stack: i
								} = ui(s, e => e.getType() === r);
								s = i, o.push(Si([e, ...n], t));
								break
							}
							case O.l: {
								const {
									popped: n,
									stack: r
								} = ui(s, e => Object(O.v)(e.getType()));
								s = r, o.push(ji([e, ...n], t));
								break
							}
							case O.a: {
								let t = s.first();
								t && Object(O.u)(t.getType()) ? s = s.shift() : t = void 0, o.push(wi(e, t, n));
								break
							}
							case O.n:
							default:
								o.push(Ei(e, t))
						}
					}
					return o
				},
				xi = e => e.reduce((e, t) => t === O.k.UNDERLINE || t === O.k.SUBSCRIPT ? e : e | (fi[t] || 0) | 0, 0),
				Ci = (e, t) => {
					const n = [],
						o = Object(pi.b)(e);
					return Object(di.a)(t, {
						keyFn: e => e.getStyle()
					}, (t, s, r, i) => {
						if (s.isEmpty()) return;
						const a = e.slice(r, i),
							c = r + (a.length - li()(a).length),
							l = i - (a.length - ai()(a).length),
							d = l - c,
							u = o[c],
							p = o[l] - u;
						d > 0 && n.push([xi(s), u, p])
					}), n.length ? n : null
				},
				yi = (e, t) => {
					const n = e.getText(),
						o = e.getCharacterList(),
						s = [],
						r = O.d.includes(e.getType()),
						i = O.c.includes(e.getType());
					let a = 0;
					return Object(di.a)(o, {
						keyFn: (e, o) => {
							const s = e.getEntity();
							return r && e.getStyle().contains(O.k.SPOILER) ? "spoiler" : Object(R.b)(s, t) ? `link-${e.getEntity()}` : "\n" === n[o] ? i ? "linebreak" : "skip" : s && t.getEntity(s).getType() === R.a.EMOTE ? `emote-${a++}` : "text"
						}
					}, (e, r, i, a) => {
						const c = n.slice(i, a),
							l = o.slice(i, a).toList();
						if ("text" === r) {
							const e = Ci(c, l);
							s.push(Object(hi.s)(c, e))
						} else if ("spoiler" === r) s.push(Object(hi.n)(c));
						else if (r.startsWith("link-")) {
							const n = t.getEntity(e.getEntity());
							s.push(((e, t, n) => {
								const o = e.getType(),
									s = [R.a.USER_LINK, R.a.USER_MENTION],
									{
										url: r
									} = e.getData(),
									i = t.startsWith("/");
								if (o === R.a.SUBREDDIT_LINK) {
									const e = t.replace(b.e, "");
									return Object(hi.o)(e, i)
								}
								if (s.includes(o)) {
									const e = t.replace(b.a, "");
									return Object(hi.t)(e, i)
								}
								const a = Ci(t, n);
								return Object(hi.i)(t, r, a)
							})(n, c, l))
						} else if ("linebreak" === r) s.push(Object(hi.h)());
						else if (r.startsWith("emote-")) {
							const n = t.getEntity(e.getEntity()).getData();
							s.push(Object(hi.e)(n.fullId, n.imageType))
						}
					}), s
				},
				Ei = (e, t) => Object(hi.l)(yi(e, t)),
				vi = e => "text" === e.e ? Object(hi.m)(e.t) : "link" === e.e ? Object(hi.i)(e.t, e.u, null) : e.e === Fn.x ? e.c.map(vi) : e.e === Fn.n ? Object(hi.m)("") : e,
				_i = (e, t) => Object(hi.f)(O.m[e.getType()], ((e, t) => ri()(oi()(yi(e, t), vi), ([e, ...t], n) => {
					if (!e) return [n];
					const o = t.length ? t : [];
					return e && "raw" === n.e && "raw" === e.e ? [Object(hi.m)(n.t + e.t), ...o] : [n, e, ...o]
				}, []))(e, t)),
				Oi = (e, t) => Object(hi.c)(ti()(e.map(e => ((e, t) => e.getText().trim().length ? Ei(e, t) : hi.a)(e, t)), e => e === hi.a)),
				ki = e => Object(hi.d)(e.map(e => Object(hi.m)(e.getText()))),
				Si = (e, t) => {
					if (!e.length) return Object(hi.k)([], !1);
					const n = e[0].getDepth();
					let o = null;
					const s = [];
					let r = [];
					const i = () => null !== o || r.length,
						a = () => {
							const e = [];
							null !== o && (e.push(o), o = null), r.length && (e.push(Si(r, t)), r = []), s.push(Object(hi.j)(e))
						};
					return e.forEach(e => {
						e.getDepth() > n ? r.push(e) : (i() && a(), o = Object(hi.l)(yi(e, t)))
					}), i() && a(), Object(hi.k)(s, e[0].getType() === O.i.ORDERED)
				},
				ji = (e, t) => {
					const n = [...e].sort(z.b),
						o = n[0],
						{
							colCount: s
						} = Object(z.g)(o),
						r = F()(n, s),
						i = r[0].map(e => {
							const {
								alignment: n
							} = Object(z.g)(e);
							return Object(hi.q)(yi(e, t), n)
						}),
						a = r.slice(1).map(e => e.map(e => Object(hi.p)(yi(e, t))));
					return Object(hi.r)(i, a)
				},
				wi = (e, t, n) => {
					const o = Object(M.h)(e);
					if (!o) throw new Error("Invalid atomic block!");
					const {
						uploadInfo: s,
						mediaAsset: r,
						makeGif: i
					} = o, a = t ? t.getText() : "";
					if (s && n) {
						const e = n[s.uploadKey],
							t = e && e.metadata.mimetype || "",
							{
								assetId: r,
								thumbnailAssetId: c
							} = Object(M.f)(o, n);
						return Object(Le.j)(t) ? Object(hi.b)(r, a) : Object(Le.k)(t) ? Object(hi.g)(r, a) : Object(hi.u)(r, a, c, i)
					} {
						const {
							assetId: e,
							type: t
						} = r;
						let n;
						switch (t) {
							case M.a.AnimatedImage:
								n = Object(hi.b)(e, a);
								break;
							case M.a.Image:
								n = Object(hi.g)(e, a);
								break;
							case M.a.Video:
								n = Object(hi.u)(e, a);
								break;
							default:
								throw new Error("Invalid media type")
						}
						return Object(mi.f)(e) ? Object(hi.l)([n]) : n
					}
				};
			var Ti, Ii = n("./src/reddit/constants/componentSizes.ts"),
				Pi = n("./src/reddit/constants/elementIds.ts");
			! function(e) {
				e.Up = "up", e.Down = "down"
			}(Ti || (Ti = {}));
			var Mi = e => {
					const t = window.getSelection().focusNode;
					if (!t || !t.parentElement) return;
					const n = document.getElementById(Pi.d),
						o = n || document.documentElement;
					if (!o) return;
					const s = window.innerHeight,
						{
							bottom: r,
							top: i
						} = t.parentElement.getBoundingClientRect(),
						a = n ? 0 : Ii.f + Ii.p;
					e === Ti.Up && i < a ? o.scrollBy(0, i - a) : e === Ti.Down && r > s && o.scrollBy(0, r - s)
				},
				Ni = n("./src/reddit/models/Product/index.ts"),
				Ri = (e, t, n) => {
					const o = {
						url: n
					};
					return e.createEntity(t, "MUTABLE", o)
				},
				Di = n("./node_modules/lodash/maxBy.js"),
				Bi = n.n(Di);
			const Li = (e, t) => {
				if (!t) return (e => {
					const t = e.id;
					switch (e.e) {
						case Fn.m:
							return {
								assetId: t, type: M.a.Image
							};
						case Fn.a:
							return {
								assetId: t, type: M.a.AnimatedImage
							};
						case Fn.D:
							return {
								assetId: t, type: M.a.Video
							}
					}
				})(e);
				const n = t.id;
				switch (t.e) {
					case Fn.s: {
						const {
							s: e
						} = t;
						return {
							assetId: n,
							type: M.a.Image,
							imageUrl: e.u,
							width: e.x,
							height: e.y
						}
					}
					case Fn.r: {
						const {
							s: e
						} = t;
						return {
							assetId: n,
							type: M.a.AnimatedImage,
							imageUrl: e.gif,
							posterUrl: e.p,
							dashUrl: e.mp4,
							width: e.x,
							height: e.y
						}
					}
					case Fn.t: {
						const {
							isGif: e,
							dashUrl: o,
							hlsUrl: s,
							p: r,
							x: i,
							y: a
						} = t;
						let c;
						if (r) {
							c = Bi()(r, e => e.x).u
						}
						return {
							assetId: n,
							type: M.a.Video,
							isGif: e,
							dashUrl: o,
							hlsUrl: s,
							posterUrl: c,
							width: i,
							height: a
						}
					}
				}
			};

			function Fi(e, t, n) {
				const s = e.id,
					r = e.c,
					i = Fn.E(t, s),
					a = Li(e, i),
					c = [new o.ContentBlock({
						key: Object(o.genKey)(),
						type: O.a,
						data: Object(D.Map)({
							mediaAsset: a
						})
					})];
				if (n) {
					const e = Object(N.h)(Object(o.genKey)(), r).merge({
						type: O.j
					});
					c.push(e)
				}
				return c
			}
			const Ai = Object.keys(fi),
				Ki = (e, t, n) => {
					switch (t.e) {
						case Fn.u:
							return qi(e, t.c, O.b.UNSTYLED, n);
						case Fn.k:
							const o = O.h[t.l];
							return qi(e, t.c || [], o, n);
						case Fn.p:
							return Wi(e, t, n);
						case Fn.b:
							return Ui(e, t, n);
						case Fn.c:
							return void t.c.forEach(t => qi(e, [t], O.b.CODE_BLOCK, n));
						case Fn.z:
							return Hi(e, t, n);
						case Fn.m:
						case Fn.a:
						case Fn.D:
							return void e.blocks.push(...Fi(t, n.mediaMetadataMap, Object(M.q)(n.editorType)))
					}
				},
				Ui = (e, t, n) => {
					t && t.c && t.c.length && t.c.forEach(t => t.e === Fn.u ? qi(e, t.c, O.b.BLOCK_QUOTE, n) : Ki(e, t, n))
				},
				Hi = (e, t, n) => {
					const {
						h: o,
						c: s
					} = t, r = o.length;
					[o, ...s].forEach((t, s) => t.forEach((t, i) => {
						const {
							c: a = []
						} = t, {
							a: c
						} = o[i], l = {
							alignment: c,
							colCount: r,
							colIndex: i,
							rowIndex: s
						};
						qi(e, a, O.b.TABLE_CELL, n, l)
					}))
				},
				Wi = (e, t, n, o = 0) => {
					const s = t.o ? O.b.ORDERED_LIST : O.b.UNORDERED_LIST;
					t.c.forEach(t => {
						const r = t.c;
						if (!r || !r.length) return;
						const [i, a] = r, c = i.e === Fn.u ? i.c : [];
						qi(e, c, s, n, void 0, o), a && a.e === Fn.p && Wi(e, a, n, o + 1)
					})
				},
				zi = {
					[Fn.y]: ["r/", "/r/"],
					[Fn.B]: ["u/", "/user/"],
					[Fn.C]: ["u/", "/user/"],
					[Fn.v]: ["p/", ""],
					[Fn.g]: ["c/", ""]
				},
				Vi = {
					[Fn.y]: R.a.SUBREDDIT_LINK,
					[Fn.B]: R.a.USER_LINK,
					[Fn.C]: R.a.USER_MENTION,
					[Fn.v]: R.a.POST_LINK,
					[Fn.g]: R.a.COMMENT_LINK
				},
				qi = (e, t, n, s, r = {}, i, a = !1) => {
					const c = e.content;
					if (1 === t.length && (t[0].e === Fn.m || t[0].e === Fn.a)) {
						const n = t[0];
						if (Object(mi.f)(n.id)) return void e.blocks.push(...Fi(n, s.mediaMetadataMap, Object(M.q)(s.editorType)))
					}
					const {
						charList: l,
						text: d,
						updatedContent: u
					} = Gi(t, c, s), p = new o.ContentBlock({
						key: Object(o.genKey)(),
						characterList: Object(D.List)(l),
						data: Object(D.fromJS)(r),
						depth: i,
						text: d,
						type: n
					});
					e.content = u || c, a ? e.blocks.unshift(p) : e.blocks.push(p)
				},
				Gi = (e, t, n) => {
					let o = t,
						s = "";
					const r = [];
					if (e.forEach(e => {
							const t = Ji(e, o, n);
							o = t.updatedContent || o, s += t.text, r.push(...t.charList)
						}), s.length !== r.length) throw new Error("Characters length mismatch!");
					return {
						charList: r,
						text: s,
						updatedContent: o !== t ? o : void 0
					}
				},
				Ji = (e, t, n) => {
					switch (e.e) {
						case Fn.A: {
							const {
								t,
								f: n
							} = e;
							return {
								charList: Qi(t, n),
								text: t
							}
						}
						case Fn.x: {
							const {
								c: s
							} = e, r = Gi(s, t, n);
							return r.charList = r.charList.map(e => (e => o.CharacterMetadata.create({
								style: e.getStyle().add(O.k.SPOILER),
								entity: e.getEntity()
							}))(e)), r
						}
						case Fn.v:
						case Fn.g:
						case Fn.w: {
							const {
								t
							} = e;
							return {
								charList: Qi(t),
								text: t
							}
						}
						case Fn.y:
						case Fn.B:
						case Fn.C: {
							const [n, o] = zi[e.e], s = (e.l ? "/" : "") + n + e.t, r = o + e.t, i = Ri(t, Vi[e.e], r), a = i.getLastCreatedEntityKey();
							return {
								charList: Qi(s, void 0, a),
								text: s,
								updatedContent: i
							}
						}
						case Fn.o: {
							const {
								t: n,
								u: o,
								f: s
							} = e, r = Ri(t, R.a.LINK, o), i = r.getLastCreatedEntityKey();
							return {
								charList: Qi(n, s, i),
								text: n,
								updatedContent: r
							}
						}
						case Fn.m:
						case Fn.a:
							const {
								id: s
							} = e;
							if (s.startsWith("emote|")) {
								const e = Object(Ni.b)(s),
									o = n.activeEmotes && n.activeEmotes[e];
								if (o) {
									const e = Object(xo.c)(t, o),
										n = e.getLastCreatedEntityKey(),
										s = xo.a;
									return {
										charList: Qi(s, void 0, n),
										text: s,
										updatedContent: e
									}
								}
								const r = `:${e}:`;
								return {
									charList: Qi(r),
									text: r
								}
							}
							return {
								text: "", charList: Qi("")
							};
						default:
							return {
								text: "", charList: Qi("")
							}
					}
				},
				Qi = (e, t, n = null) => {
					const s = o.CharacterMetadata.create({
							entity: n
						}),
						r = Array(e.length).fill(s),
						i = Object(pi.a)(e);
					return t && t.forEach(e => {
						const [t, s, a] = e, c = (e => {
							const t = Ai.filter(t => !!(fi[t] & e));
							return Object(D.OrderedSet)(t)
						})(t), l = s + a, d = o.CharacterMetadata.create({
							entity: n,
							style: c
						});
						r.fill(d, i[s], i[l])
					}), r
				},
				Zi = (e, t) => {
					e.blocks.length && (e.blocks[0].getType() === O.b.TABLE_CELL && qi(e, [], O.b.UNSTYLED, t, void 0, void 0, !0), e.blocks[e.blocks.length - 1].getType() === O.b.TABLE_CELL && qi(e, [], O.b.UNSTYLED, t))
				};
			var Xi = (e, t, n, s) => {
					const r = "string" == typeof e ? JSON.parse(e) : e;
					if (!r || !r.document || !r.document.length) return null;
					const i = {
							editorType: t,
							mediaMetadataMap: n,
							activeEmotes: s ? s.reduce((e, t) => ({
								...e,
								...t.emotes
							}), {}) : void 0
						},
						a = {
							blocks: [],
							content: o.ContentState.createFromText("")
						};
					r.document.forEach(e => {
						Ki(a, e, i)
					}), 0 === a.blocks.length && qi(a, [], O.b.UNSTYLED, i), Zi(a, i);
					const c = o.BlockMapBuilder.createFromArray(a.blocks),
						l = o.SelectionState.createEmpty(c.first().getKey());
					return a.content.merge({
						blockMap: c,
						selectionBefore: l,
						selectionAfter: l
					})
				},
				Yi = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				$i = n("./src/reddit/constants/elementClassNames.ts"),
				ea = n("./src/reddit/constants/keycodes.ts"),
				ta = n("./src/reddit/icons/svgs/Send/index.tsx"),
				na = n("./src/reddit/selectors/economics.ts"),
				oa = n("./src/reddit/components/RichTextEditor/index.m.less"),
				sa = n.n(oa);

			function ra() {
				return (ra = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			Object(xr.b)({
				draftToRTFJson: bi,
				getMediaCount: M.g,
				getPendingThumbnailUploads: M.i,
				isAllMediaUploaded: M.m
			});
			const ia = "handled",
				aa = "not-handled",
				ca = /^\s*$/,
				la = 20,
				da = f.a.wrapped(as.a, "FocusableContent", sa.a),
				ua = f.a.div("Container", sa.a),
				pa = f.a.wrapped(Yi.a, "CurrentUserIcon", sa.a),
				ma = e => `${y.b}-${e}`,
				ha = Object(l.b)(() => {
					const e = (() => Object(d.a)(e => e.uploads, (e, t) => t.rteState.editorKey, (e, t) => i()(e, e => e.key.startsWith(ma(t)))))();
					return Object(d.c)({
						editorUploads: e,
						emotesSpecialMembershipEnabled: E.d.spEmotes,
						giphySpecialMembershipEnabled: E.d.spGiphy,
						activeEmotes: (e, t) => {
							var n;
							return Object(na.b)(e, {
								subredditId: null === (n = t.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						},
						shouldShowCommentGifsTooltip: (e, t) => {
							var n;
							return Object(Oo.c)(e, {
								subredditId: null === (n = t.destSubreddit) || void 0 === n ? void 0 : n.id
							})
						}
					})
				}, e => ({
					onFetchEditorProducts: t => e(Object(C.e)(t)),
					onTrackMediaDrop: t => e((e, n) => v.o(n(), t)),
					retryUpload: t => e(y.c(t)),
					startUploads: (t, n, o) => e(y.e(t, n, ma(o)))
				}));
			class fa extends a.Component {
				constructor(e) {
					super(e), this.blockRenderMap = o.DefaultDraftBlockRenderMap.merge(us, fs, Tn, mr, gr, Dr, nn), this.editorHeight = null, this.editorRef = null, this.editorRootStyleMutationObserver = null, this.linksControllerApi = null, this.suggestionDropdownApi = null, this.tableToolbarControllerApi = null, this.emotesTooltipApi = null, this.gifTooltipApi = null, this.updateSuggestionDropdownPosition = null, this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1, this.needSyncScroll = null, this.transforms = {
						[k.BREAK_HEADER_ENTITY]: mo.b,
						[k.INSERT_LINE_BREAK]: mo.e,
						[k.REDUCE_LIST_INDENT]: mo.f,
						[k.RESET_CURRENT_AND_PREVIOUS_BLOCKS]: mo.g,
						[k.REMOVE_EXTRA_LIST_ITEM]: mo.h,
						[T.d]: e => Jo(e, this.props.editorType),
						[T.b]: e => Go(e, this.props.editorType),
						[T.f]: mo.d,
						[T.c]: e => Object(mo.c)(O.k.BOLD, e),
						[T.e]: e => Object(mo.c)(O.k.ITALIC, e),
						[T.g]: e => Object(mo.c)(O.k.UNDERLINE, e)
					}, this.setContainerRef = e => {
						const {
							domRef: t
						} = this.props;
						t && t(e), this.setState({
							containerRef: e
						})
					}, this.setFocusableContentRef = e => this.setState({
						focusableContentRef: e
					}), this.rteStateChanged = (e, t) => {
						const n = {
							...this.props.rteState,
							isBound: !0,
							editorState: e
						};
						this.props.onChange(n, t)
					}, this.hideTooltips = () => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.tableToolbarControllerApi && this.tableToolbarControllerApi.hideActionButton(), this.linksControllerApi && this.linksControllerApi.hidePopup(), this.suppressAutocompleteForFocusedLink()
					}, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const e = this.editorRef.refs.editor,
							t = e.style.height ? Number.parseInt(e.style.height) : null;
						this.editorHeight !== t && (this.hideTooltips(), this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.insertValidatedMedia = () => {
						const {
							editorUploads: e
						} = this.props, {
							editorState: t,
							mediaToInsert: n
						} = this.state;
						if (!n) return;
						const {
							files: o,
							blockKey: s,
							insertionMode: r
						} = n, i = o.map(t => e.find(e => e.file === t)).filter(Boolean);
						this.setState({
							mediaToInsert: null
						});
						const a = i.filter(e => !!e.metadata.mimetype);
						a.length && this.onChange(Object(M.l)(t, a, s, r))
					}, this.focus = () => this.editorRef && this.editorRef.focus(), this.blur = () => this.editorRef && this.editorRef.blur(), this.isFocused = () => this.state.editorState.getSelection().getHasFocus(), this.isEmpty = () => !this.state.editorState.getCurrentContent().hasText(), this.setEditorRef = e => this.editorRef = e, this.setSuggestionDropdownApi = e => this.suggestionDropdownApi = e, this.setLinksControllerApi = e => this.linksControllerApi = e, this.setTableToolbarControllerApi = e => this.tableToolbarControllerApi = e, this.setEmotesTooltipApi = e => this.emotesTooltipApi = e, this.setGifTooltipApi = e => this.gifTooltipApi = e, this.setSuggestionDropdownPositionUpdater = e => this.updateSuggestionDropdownPosition = e, this.getEditorState = () => this.state.editorState, this.setEditorState = (e, t) => {
						const n = this.state.editorState.getCurrentContent() !== e.getCurrentContent();
						n && this.props.readOnly || (this.setState({
							editorState: e
						}, t), this.rteStateChanged(e, n))
					}, this.toolbarSetState = e => {
						const t = e.getInlineStyleOverride();
						let n = e;
						n.getSelection().getHasFocus() || (n = o.EditorState.forceSelection(n, n.getSelection()), t && (n = o.EditorState.setInlineStyleOverride(n, t))), this.onChange(n)
					}, this.onChange = (e, t) => {
						let n = e;
						n = gn(n, this.state.editorState), n = Me(n, this.props.editorType), this.emotesTooltipApi && (n = Object(xo.d)(n, this.state.editorState)), n = Uo(n, this.state.editorState), n = Object($o.d)(n, this.state.editorState), this.setEditorState(n, t);
						let {
							suppressAutocompleteForLink: o
						} = this.state;
						if (o) {
							const t = Object(Mo.b)(e);
							t && t.entityKey === o || (o = null)
						}
						this.setState({
							suppressAutocompleteForLink: o
						}), this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1
					}, this.onFocus = () => {
						const {
							onFocus: e
						} = this.props;
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), e && e()
					}, this.handleBeforeInput = e => {
						const {
							editorState: t
						} = this.state;
						if (this.isMouseDown) return ia;
						if (Pe(t, e)) return ia;
						let n = function(e, t) {
							const n = e.getSelection(),
								s = n.getFocusOffset();
							if (!n.isCollapsed() || 0 === s) return;
							const r = n.getFocusKey(),
								i = e.getCurrentContent(),
								a = i.getBlockForKey(r),
								c = a.getEntityAt(s - 1),
								l = a.getEntityAt(s);
							if (!(c && (!l || l !== c))) return;
							const d = i.getEntity(c),
								u = Po.has(d.getType());
							if ("MUTABLE" === d.getMutability() && u) {
								const s = o.Modifier.insertText(i, n, t, e.getCurrentInlineStyle());
								return o.EditorState.push(e, s, "insert-characters")
							}
						}(t, e) || t;
						return (n = mn(n, e) || n) !== t ? (this.onChange(n), ia) : aa
					}, this.keyBindingFN = e => {
						const {
							editorState: t
						} = this.state, {
							submitOnEnter: n
						} = this.props, s = t.getSelection();
						if (e.metaKey && e.keyCode === ea.a.K) return k.OPEN_LINK_TOOLTIP;
						if (e.keyCode === ea.a.Space) {
							if (Xo(t)) return k.CONVERT_TO_LIST_ON_SPACE;
							if (Object(Mo.d)(t)) return k.LINKIFY_ON_SPACE
						} else if (e.keyCode === ea.a.Enter) {
							if (e.ctrlKey || e.metaKey || n && !e.shiftKey) return k.SUBMIT;
							if (e.shiftKey && Qo(t)) return k.INSERT_LINE_BREAK; {
								const e = this.enterKeyBinding(t);
								if (e) return e
							}
						} else if (e.keyCode === ea.a.Backspace) {
							if (this.isJustLinkified || this.isJustConvertedToList) return T.h;
							if (s.isCollapsed()) {
								const e = t.getCurrentContent(),
									n = s.getEndKey(),
									o = s.getStartOffset(),
									r = e.getBlockForKey(n),
									i = r.getType();
								if ((Object(O.s)(i) || Object(O.q)(i) || Object(O.p)(i)) && 0 === o && r.getLength() > 0) {
									const t = e.getBlockBefore(n);
									if (!t || t.getType() !== i) return k.MAKE_PLAIN_BLOCK
								}
							}
						}
						return Object(o.getDefaultKeyBinding)(e)
					}, this.handleKeyCommand = e => {
						const {
							editorState: t
						} = this.state;
						let n = e,
							s = null;
						const r = e => {
							let t = e;
							if (s) {
								const {
									selection: e,
									url: n
								} = s;
								t = Object(Mo.f)(t, e, n)
							}
							return this.onChange(t), this.isJustLinkified = !!s, ia
						};
						if (n === k.SUBMIT) this.props.onSubmit();
						else {
							if (n === k.CONVERT_TO_LIST_ON_SPACE) {
								const e = r(Yo(t));
								return this.isJustConvertedToList = !0, e
							}
							if (n === k.LINKIFY_ON_SPACE) return s = Object(Mo.d)(t), r(Object(mo.a)(t));
							if (n === k.LINKIFY_ON_ENTER && (s = Object(Mo.d)(t), !(n = this.enterKeyBinding(t, !1)))) return r(Object(mo.d)(t))
						}
						if (n === k.OPEN_LINK_TOOLTIP) return this.onToolbarLinkButtonClick(), ia;
						if (n === k.MAKE_PLAIN_BLOCK) {
							return r(Object(mo.i)(O.n, t))
						}
						if (n === k.EXEC_TABLE_ON_ENTER_HANDLER) return r(this.tableOnEnterHandler.handle(t));
						const i = this.transforms[n];
						if (i) {
							const e = i(t);
							if (e) return r(e)
						}
						const a = o.RichUtils.handleKeyCommand(t, n);
						return a ? r(a) : aa
					}, this.handleOnTab = e => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleTabInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent()) return void e.preventDefault();
						const {
							editorState: t
						} = this.state;
						let n = ln(e, t);
						if (n = n || qo(e, t)) return void this.onChange(n);
						const s = o.RichUtils.onTab(e, t, 2);
						this.onChange(s)
					}, this.handleOnUpArrow = e => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleUpArrowInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.moveUp()) return void e.preventDefault();
						const t = dn(e, this.state.editorState) || Te(e, this.state.editorState);
						t && this.onChange(t), this.needSyncScroll = Ti.Up
					}, this.handleOnDownArrow = e => {
						if (this.suggestionDropdownApi && this.suggestionDropdownApi.moveDown()) return void e.preventDefault();
						const t = un(e, this.state.editorState) || Ie(e, this.state.editorState);
						t && this.onChange(t), this.needSyncScroll = Ti.Down
					}, this.handleReturn = e => {
						const t = je(this.state.editorState);
						return t ? (this.onChange(t), e.preventDefault(), ia) : this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent() ? (e.preventDefault(), ia) : aa
					}, this.suppressAutocompleteForFocusedLink = () => {
						const e = Object(Mo.b)(this.state.editorState);
						e && this.state.suppressAutocompleteForLink !== e.entityKey && this.setState({
							suppressAutocompleteForLink: e.entityKey
						})
					}, this.handleEscape = e => {
						this.emotesTooltipApi && this.emotesTooltipApi.handleEscapeKeyInEditor(), this.suppressAutocompleteForFocusedLink()
					}, this.handleOnCopy = e => {
						this.editorRef && xe(this.state.editorState, this.editorRef, e)
					}, this.handleOnCut = e => {
						const {
							editorState: t
						} = this.state;
						if (!this.editorRef) return;
						if (!xe(t, this.editorRef, e)) return;
						const n = se(t) || Se(t) || Object(M.e)(t);
						n && this.onChange(n)
					}, this.handleOnPaste = e => {
						const {
							editorState: t
						} = this.state;
						if (!this.editorRef) return;
						if (this.handleFilesPaste(e, t), e.isPropagationStopped()) return;
						const n = Fs(t, this.editorRef, e, this.props.editorType);
						n && this.onChange(n)
					}, this.handleFilesPaste = (e, t) => {
						const n = e.clipboardData.files;
						if (n && n.length) {
							const o = Array.from(n),
								s = t.getSelection().getEndKey();
							this.insertMediaFiles({
								files: o,
								blockKey: s,
								insertionMode: N.a.after,
								filesSource: x.FileSource.Clipboard
							}), e.stopPropagation()
						}
					}, this.handleOnMouseDown = e => {
						this.isMouseDown = !0
					}, this.handleOnMouseUp = e => {
						this.isMouseDown = !1
					}, this.handleDroppedFiles = (e, t) => ia, this.handleDrop = (e, t, n) => ia, this.handleBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.handlePastedText = (e, t) => ia, this.onInternalSuggestionSelected = e => {
						this.onChange(Object(Mo.g)(this.state.editorState, e)), this.isJustAutocompleteSelected = !0
					}, this.onToolbarEmoteButtonClick = e => {
						this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.emotesTooltipApi && this.emotesTooltipApi.toggleTooltip(e)
					}, this.onToolbarGifButtonClick = e => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.toggleTooltip(e)
					}, this.onToolbarLinkButtonClick = () => {
						if (!this.linksControllerApi) return;
						const {
							editorState: e
						} = this.state;
						this.linksControllerApi.editLinkInSelection(e.getSelection()) || Object(g.b)(void 0, "Current selection cannot be edited by link editor!")
					}, this.handleSwitchToMarkdownMode = () => {
						const {
							editorState: e
						} = this.state, {
							onSwitchEditorMode: t
						} = this.props, n = xr.a.toRichTextJSON({
							...this.props.rteState,
							isBound: !0,
							editorState: Object(M.c)(e)
						});
						t && t(_.h.MARKDOWN, n), this.state.confirmModalOpen && this.toggleConfirmModal()
					}, this.onToolbarMarkdownSwitchClick = () => {
						const {
							editorState: e
						} = this.state;
						e && Ho(e) ? this.setState({
							confirmModalOpen: !0
						}) : this.handleSwitchToMarkdownMode()
					}, this.toggleConfirmModal = () => {
						this.setState({
							confirmModalOpen: !this.state.confirmModalOpen
						})
					}, this.insertMediaFiles = async e => {
						this.setState({
							mediaToInsert: e
						});
						const {
							files: t,
							filesSource: n
						} = e, o = t.slice(0, la);
						await this.props.startUploads(o, n, this.props.rteState.editorKey), this.insertValidatedMedia()
					}, this.onRetryUpload = e => {
						this.props.retryUpload(e)
					}, this.onFilesSelect = e => {
						const {
							editorState: t
						} = this.state, n = t.getSelection().getEndKey();
						this.insertMediaFiles({
							files: e,
							blockKey: n,
							insertionMode: N.a.after,
							filesSource: x.FileSource.FileSelector
						})
					}, this.onFilesDrop = (e, t, n) => {
						this.props.onTrackMediaDrop(e), this.insertMediaFiles({
							files: e,
							blockKey: t,
							insertionMode: n,
							filesSource: x.FileSource.DragAndDrop
						})
					}, this.onBlockMove = (e, t, n) => {
						const {
							editorState: o
						} = this.state, s = Object(M.o)(o, e, t, n);
						s && this.onChange(s)
					}, this.getAtomicBlocksRenderConfig = () => ({
						component: Yt,
						props: {
							getEditorState: this.getEditorState,
							onChange: this.onChange,
							onRetryUpload: this.onRetryUpload,
							rteFocusableContentRef: this.state.focusableContentRef,
							editorType: this.props.editorType
						}
					}), this.blockRendererFn = e => {
						const t = e.getType();
						return t === O.a ? this.getAtomicBlocksRenderConfig() : t in Tr ? Tr[t] : void 0
					}, this.renderToolbar = e => c.a.createElement(Rt.b, e), this.entityElementRegistry = fo(), this.tableOnEnterHandler = new pn;
					const {
						activeEmotes: t,
						editorType: n,
						noBorder: s,
						initialHeight: r,
						initialMinHeight: i,
						rteState: a
					} = e;
					let l;
					a.isBound ? l = a.editorState : Object(Fn.G)(a.initialRTJSON) ? l = this.createInitialState(a.editorKey) : (l = o.EditorState.createWithContent(Xi(a.initialRTJSON, n, a.mediaMetadataMap, t), this.editorDecorators()), l = this.moveSelectionToEnd(l)), this.state = {
						noBorder: s,
						containerRef: null,
						confirmModalOpen: !1,
						editorState: l,
						focusableContentRef: null,
						inited: !1,
						initialHeight: r,
						initialMinHeight: i,
						mediaToInsert: null,
						suppressAutocompleteForLink: null
					}
				}
				editorDecorators() {
					return new o.CompositeDecorator([vo(), is(), Lo()])
				}
				moveSelectionToEnd(e) {
					const t = e.getCurrentContent().getBlockMap(),
						n = t.last().getKey(),
						s = t.last().getLength(),
						r = new o.SelectionState({
							anchorKey: n,
							anchorOffset: s,
							focusKey: n,
							focusOffset: s
						});
					return o.EditorState.acceptSelection(e, r)
				}
				createInitialState(e) {
					return o.EditorState.createWithContent(o.ContentState.createFromBlockArray([new o.ContentBlock({
						key: `${e}_initial`
					})]), this.editorDecorators())
				}
				componentDidMount() {
					if (this.props.rteRef && this.props.rteRef(this), h.a.write(Pr), this.rteStateChanged(this.state.editorState, !1), this.editorRef) {
						const e = this.editorRef.refs.editor;
						e.addEventListener("scroll", this.hideTooltips), this.editorRootStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorRootStyleMutationObserver.observe(e, {
							attributes: !0,
							attributeFilter: ["style"]
						})
					}
					const {
						destSubreddit: e,
						emotesSpecialMembershipEnabled: t,
						giphySpecialMembershipEnabled: n
					} = this.props;
					e && e.id && (t || n) && this.props.onFetchEditorProducts(e.id)
				}
				componentDidUpdate(e, t) {
					const n = this.getLinkForAutocomplete();
					if (n && this.updateSuggestionDropdownPosition) {
						const e = this.entityElementRegistry.get(n.entityKey);
						if (e) {
							const {
								left: t,
								bottom: n,
								height: o
							} = e.getBoundingClientRect();
							this.updateSuggestionDropdownPosition({
								left: t,
								top: n,
								bottom: n - o
							})
						}
					}
					this.needSyncScroll && (Mi(this.needSyncScroll), this.needSyncScroll = null)
				}
				componentWillUnmount() {
					if (this.props.rteRef && this.props.rteRef(null), this.insertValidatedMedia = () => {}, this.editorRef) {
						this.editorRef.refs.editor.removeEventListener("scroll", this.hideTooltips)
					}
					this.editorRootStyleMutationObserver && (this.editorRootStyleMutationObserver.disconnect(), this.editorRootStyleMutationObserver = null)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.rteState !== this.props.rteState && e.rteState.isBound && e.rteState.editorState !== this.state.editorState && this.setState({
						editorState: e.rteState.editorState
					})
				}
				shouldComponentUpdate(e, t) {
					if (t !== this.state) return !0;
					if (!(e.rteState.isBound && e.rteState.editorState === this.state.editorState)) return !0;
					return !p()(e, this.props, (e, t, n) => "rteState" === n || void 0)
				}
				enterKeyBinding(e, t = !0) {
					const n = e.getCurrentContent(),
						o = e.getSelection(),
						s = o.getStartKey(),
						r = o.getEndKey(),
						i = o.getEndOffset(),
						a = n.getBlockForKey(s).getType(),
						c = n.getBlockForKey(r),
						l = c.getType(),
						d = i === c.getText().length;
					if (a === O.l || l === O.l) return k.EXEC_TABLE_ON_ENTER_HANDLER;
					if (o.isCollapsed()) {
						if (t && Object(Mo.d)(e)) return k.LINKIFY_ON_ENTER;
						if (Object(O.r)(l) && d) return k.BREAK_HEADER_ENTITY;
						if (Object(O.s)(l)) {
							if (ca.test(c.getText())) return c.getDepth() > 0 ? k.REDUCE_LIST_INDENT : k.REMOVE_EXTRA_LIST_ITEM
						} else if (l === O.e) {
							const e = n.getBlockBefore(r);
							if (e && e.getType() === O.e && ca.test(e.getText()) && ca.test(c.getText())) return k.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						} else if (l === O.f) {
							const e = n.getBlockBefore(r),
								t = n.getBlockAfter(r);
							if (!c.getText() && e && e.getType() === O.f && !e.getText() && (!t || t.getType() !== O.f)) return k.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						}
					}
				}
				getLinkForAutocomplete() {
					const {
						editorState: e,
						suppressAutocompleteForLink: t
					} = this.state;
					if (!this.isJustAutocompleteSelected && e.getSelection().getHasFocus()) {
						const n = Object(Mo.b)(e);
						if (n && n.entityKey !== t) return n
					}
				}
				renderInternalLinkSuggestionDropdown() {
					const {
						isChatPost: e
					} = this.props, t = this.getLinkForAutocomplete();
					return t ? c.a.createElement(Mn.b, {
						aboveParent: e,
						dropdown: !0,
						onSetPositionUpdater: this.setSuggestionDropdownPositionUpdater
					}, t.entityText.startsWith(b.f) && c.a.createElement(Qr, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: t.internalName
					}), b.a.test(t.entityText) && c.a.createElement($r, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: t.internalName
					})) : null
				}
				render() {
					const {
						className: e,
						userCanUseGifs: t,
						allowMediaUploads: n = !1,
						dataTestId: r,
						destSubreddit: i,
						editorType: a,
						focusableContentRTEClassName: l,
						hideToolbar: d,
						rteState: u,
						isExpanded: p,
						isOverlay: h,
						isCommentBoxDesignEnabled: f,
						onSubmit: b,
						placeholderText: g,
						shouldShowCommentGifsTooltip: x,
						showSubmitButton: C = !1,
						submitButtonClassName: y,
						toolbarPosition: E = "top",
						renderToolbar: v = this.renderToolbar
					} = this.props, {
						editorKey: _
					} = u, {
						containerRef: O,
						editorState: k,
						mediaToInsert: j,
						confirmModalOpen: T
					} = this.state, I = this.props.readOnly || !!j, P = S(k), M = this.isEmpty(), N = v({
						allowMediaUploads: n,
						destSubreddit: i,
						editorKey: _,
						editorState: k,
						isOverlay: !!h,
						onChange: this.toolbarSetState,
						onFilesSelect: this.onFilesSelect,
						trackOnClick: this.props.trackToolbarClick,
						readOnly: I,
						onEmoteButtonClick: this.onToolbarEmoteButtonClick,
						onGifButtonClick: this.onToolbarGifButtonClick,
						onLinkButtonClick: this.onToolbarLinkButtonClick,
						onMarkdownButtonClick: this.onToolbarMarkdownSwitchClick,
						userCanUseGifs: !!t
					}), R = !d && (!f || p);
					return c.a.createElement(ua, {
						className: e,
						innerRef: this.setContainerRef
					}, f && c.a.createElement("div", {
						className: sa.a.userIcon
					}, c.a.createElement(pa, null)), c.a.createElement(da, {
						className: Object(m.a)(l, {
							[sa.a.showSubmitButton]: C,
							[sa.a.mExpanded]: p,
							[sa.a.mRedesign]: f
						}),
						noBorder: this.props.noBorder,
						isFocused: this.isFocused(),
						ref: this.setFocusableContentRef
					}, R && "top" === E && N, O && c.a.createElement(po, {
						editorState: k,
						readOnly: I,
						onChange: this.onChange,
						onSetApi: this.setTableToolbarControllerApi,
						rteDomRef: O
					}), c.a.createElement("div", {
						className: Object(m.a)(sa.a.editorWrapper, {
							[sa.a.hasInitialHeight]: !!this.props.initialHeight,
							[sa.a.hasInitialMinHeight]: !!this.props.initialMinHeight,
							[sa.a.noBorder]: !!this.props.noBorder
						}),
						style: {
							"--rte-initial-height": this.props.initialHeight ? `${this.props.initialHeight}px` : void 0,
							"--rte-initial-min-height": this.props.initialMinHeight ? `${this.props.initialMinHeight}px` : void 0
						},
						"data-test-id": r,
						onCopyCapture: this.handleOnCopy,
						onCutCapture: this.handleOnCut,
						onPasteCapture: this.handleOnPaste,
						onMouseDown: this.handleOnMouseDown,
						onMouseUp: this.handleOnMouseUp
					}, c.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n                .${$i.b}[${$i.d}="${P}-0-0"]::after {\n                  bottom: 0;\n                  color: var(--newCommunityTheme-actionIcon);\n                  content: '${g}';\n                  cursor: text;\n                  left: 0;\n                  position: absolute;\n                  top: 0;\n                }\n              `
						}
					}), c.a.createElement(ks, {
						allowMediaUploads: n && !I,
						onBlockMove: this.onBlockMove,
						onFilesDrop: this.onFilesDrop,
						editorState: k,
						onChange: this.onChange
					}, c.a.createElement(bo.Provider, {
						value: this.entityElementRegistry
					}, c.a.createElement(o.Editor, {
						readOnly: I,
						ref: this.setEditorRef,
						blockRendererFn: this.blockRendererFn,
						blockRenderMap: this.blockRenderMap,
						editorKey: _,
						editorState: k,
						keyBindingFn: this.keyBindingFN,
						handleBeforeInput: this.handleBeforeInput,
						handleKeyCommand: this.handleKeyCommand,
						handlePastedText: this.handlePastedText,
						handleDroppedFiles: this.handleDroppedFiles,
						handleDrop: this.handleDrop,
						onBlur: this.handleBlur,
						onChange: this.onChange,
						onFocus: this.onFocus,
						onTab: this.handleOnTab,
						onUpArrow: this.handleOnUpArrow,
						onDownArrow: this.handleOnDownArrow,
						onEscape: this.handleEscape,
						spellCheck: !0,
						handleReturn: this.handleReturn,
						customStyleMap: Er()
					})))), R && "bottom" === E && N, c.a.createElement(lr, {
						editorState: k,
						entityElementRegistry: this.entityElementRegistry,
						onSetApi: this.setLinksControllerApi,
						onChange: this.onChange
					}), a === Fe.a.Comment && i && c.a.createElement(Io, {
						editorState: k,
						onChange: this.onChange,
						onSetApi: this.setEmotesTooltipApi,
						subreddit: i
					}), (x || t) && i && c.a.createElement(ts, {
						editorState: k,
						onChange: this.onChange,
						onSetApi: this.setGifTooltipApi,
						subreddit: i,
						userCanUseGifs: !!t
					}), this.renderInternalLinkSuggestionDropdown(), C && c.a.createElement(Ye.d, {
						"aria-label": s.fbt._("submit", null, {
							hk: "12XoZ8"
						}),
						className: Object(m.a)(y, sa.a.insetSubmitButton, {
							[sa.a.emptyContent]: M,
							[sa.a.focusedContent]: this.isFocused()
						}),
						disabled: M,
						onClick: b,
						tabIndex: -1,
						type: "submit"
					}, c.a.createElement(ta.a, null))), T && c.a.createElement(w.a, {
						toggleModal: this.toggleConfirmModal,
						onConfirm: this.handleSwitchToMarkdownMode,
						actionText: s.fbt._("Continue", null, {
							hk: "3aoEeD"
						}),
						cancelActionText: s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						headerText: s.fbt._("Switch to Markdown", null, {
							hk: "3zGkKa"
						}),
						modalText: s.fbt._("Switching to markdown will remove any images, gifs or videos from your post.", null, {
							hk: "3rlwkB"
						}),
						trackClick: () => {}
					}))
				}
			}
			t.a = ha(Object(Br.b)(e => c.a.createElement(fa, ra({
				key: e.rteState.editorKey
			}, e))))
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less": function(e, t, n) {
			e.exports = {
				Img: "_1gJwMe53cjYITkMu0Ve8j-",
				img: "_1gJwMe53cjYITkMu0Ve8j-",
				Component: "_3VYFd7PKhTJ-0i22YsgFPv",
				component: "_3VYFd7PKhTJ-0i22YsgFPv"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				Message: "_3cyJHYsdZdz4RWdmrzyYx-",
				message: "_3cyJHYsdZdz4RWdmrzyYx-",
				Component: "_3JSUHg1gLhxUj4PB_Pgw8a",
				component: "_3JSUHg1gLhxUj4PB_Pgw8a"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less": function(e, t, n) {
			e.exports = {
				buttonBaseStyles: "_3R1ajPuzbs2MdbXedj3YXU",
				ControlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				controlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				Button: "_2rIEdliEXr7qNb-COL-zuO",
				button: "_2rIEdliEXr7qNb-COL-zuO",
				ErrButton: "_3CUr1530H3uD-ts9tKd9RA",
				errButton: "_3CUr1530H3uD-ts9tKd9RA",
				Status: "jXuqxr-x0kyU3BSfugjwM",
				status: "jXuqxr-x0kyU3BSfugjwM",
				hasError: "_4XwI6tILia1pR9HTda4wv",
				ProgressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				progressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				ProgressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				progressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				ErrorLine: "_3M-thbkBHHvsWjDt8edbhz",
				errorLine: "_3M-thbkBHHvsWjDt8edbhz",
				Component: "_1CqupI5I-zzAInIdLwphQg",
				component: "_1CqupI5I-zzAInIdLwphQg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less": function(e, t, n) {
			e.exports = {
				VideoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				videoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				PosterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				posterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				Poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				Component: "wSihDBKVJH6iP2jdDjRQ6",
				component: "wSihDBKVJH6iP2jdDjRQ6",
				playButton: "il4HPAfKcVtq-WQY-if85"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less": function(e, t, n) {
			e.exports = {
				statusBar: "_33CSkXq7gXeXCM2zSal9BN",
				container: "_1FMEfWD94pPZ_HdEN_e7Xy",
				isCompact: "_3-T8BPflZuKw_F2VRPDbcX",
				isUploaded: "_3Lj2c902Oeb7yL_jYu9v5L",
				isSelected: "Eaps2a9y_jwhKHth8v14G",
				imagePreview: "_2nlrFrYbO0bIKFeZ3HMbn_",
				placeholder: "_1-LSy7nvfNGWVhRWwwQu6A",
				videoPreview: "_2MumquPHY8gruoy6114twC",
				alignCenter: "_3U9f0TNBM1K2bggm3KMHTk"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less": function(e, t, n) {
			e.exports = {
				HiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg",
				hiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3hDtN0e5U4EpahGe25ye-b",
				alignCenter: "Vh7FGvkGyl5SeyJP4J1GG",
				content: "_3wXzBVn-uBvRcixZwQWkNX",
				FormatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				formatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				ToolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ",
				toolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less": function(e, t, n) {
			e.exports = {
				MediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				mediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				Container: "DK9d46mm9FgC8mFWPGlG_",
				container: "DK9d46mm9FgC8mFWPGlG_"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2eZK2IABgFqGZLMYPxwoNY"
			}
		},
		"./src/reddit/components/RichTextEditor/media/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "r", (function() {
				return C
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "i", (function() {
				return M
			})), n.d(t, "o", (function() {
				return N
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "f", (function() {
				return B
			}));
			var o, s = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./node_modules/lodash/flatten.js"),
				a = n.n(i),
				c = n("./node_modules/lodash/last.js"),
				l = n.n(c),
				d = n("./src/reddit/helpers/media/index.ts"),
				u = n("./src/reddit/helpers/richTextEditor/index.ts"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				m = n("./src/reddit/models/Upload/index.ts"),
				h = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				f = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				b = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(e) {
				e[e.Image = 0] = "Image", e[e.AnimatedImage = 1] = "AnimatedImage", e[e.Video = 2] = "Video"
			}(o || (o = {}));
			const g = e => e !== u.a.Comment,
				x = e => {
					if (!Object(b.o)(e.getType())) return;
					const t = e.getData(),
						n = t.get("mediaAsset"),
						o = t.get("uploadInfo");
					if (!n && !o) return;
					const s = t.get("thumbnail");
					return {
						makeGif: t.get("makeGif"),
						thumbnail: s,
						uploadInfo: o,
						mediaAsset: n
					}
				},
				C = (e, t, n) => {
					let o = e.getCurrentContent();
					const i = o.getBlockForKey(t),
						a = x(i),
						c = a && a.uploadInfo;
					if (!c) throw new Error("Block must contain `uploadInfo` data");
					if (n.makeGif === a.makeGif && n.thumbnail === a.thumbnail) return e;
					const l = Object(r.Map)(n),
						d = o.getBlockMap().toKeyedSeq().filter(e => {
							const t = x(e);
							return !!t && !!t.uploadInfo && t.uploadInfo.uploadKey === c.uploadKey
						}).map(e => e.mergeIn(["data"], l));
					return o = (o = o.mergeIn(["blockMap"], d)).merge({
						selectionAfter: e.getSelection()
					}), s.EditorState.push(e, o, h.b)
				},
				y = (e, t, n, o) => {
					let i = e.getCurrentContent();
					const c = a()(t.map(e => {
						const t = Object(d.f)(e.metadata.mimetype),
							n = (e => {
								if (e && e.metadata.videoFirstFrameUrl) {
									return {
										url: e.metadata.videoFirstFrameUrl,
										time: 0
									}
								}
							})(e);
						return [new s.ContentBlock({
							key: Object(s.genKey)(),
							type: b.a,
							data: Object(r.Map)({
								uploadInfo: {
									mediaType: t,
									uploadKey: e.key
								},
								thumbnail: n
							})
						}), new s.ContentBlock({
							key: Object(s.genKey)(),
							type: b.j
						})]
					}));
					i = Object(f.f)(i, n, c, o);
					const u = s.EditorState.push(e, i, h.e),
						p = l()(c);
					return s.EditorState.forceSelection(u, Object(f.b)(p, !0))
				},
				E = (e, t, n, i, a, c, l, d) => {
					const u = new s.ContentBlock({
							key: Object(s.genKey)(),
							type: b.a,
							data: Object(r.Map)({
								mediaAsset: {
									type: o.AnimatedImage,
									assetId: Object(p.b)(t, i),
									imageUrl: n,
									width: a,
									height: c
								}
							})
						}),
						m = Object(f.f)(e.getCurrentContent(), l, [u], d);
					let g = s.EditorState.push(e, m, h.e);
					g = s.EditorState.forceSelection(g, Object(f.b)(u, !0));
					const x = u.getKey();
					return g.getCurrentContent().getBlockAfter(x) || (g = R(g, x)), g
				};

			function v(e, t) {
				return e.isCollapsed() && e.getStartKey() === t && 0 === e.getStartOffset() && 0 === e.getEndOffset()
			}

			function _(e, t) {
				const n = e.getCurrentContent().getBlockAfter(t);
				return s.EditorState.forceSelection(e, Object(f.b)(n, !0))
			}
			const O = (e, t) => {
					const n = e.getBlockAfter(t);
					return e = Object(f.i)(e, t), n && Object(b.u)(n.getType()) && (e = Object(f.i)(e, n.getKey())), e
				},
				k = (e, t, n = !0) => {
					let o = e.getCurrentContent();
					o = O(o, t);
					let r = n ? s.EditorState.push(e, o, h.f) : s.EditorState.set(e, {
						currentContent: o
					});
					return r = s.EditorState.forceSelection(r, o.getSelectionAfter())
				},
				S = e => {
					let t = e.getCurrentContent();
					w(t).forEach(e => {
						t = O(t, e.getKey())
					});
					const n = s.EditorState.push(e, t, h.f);
					return s.EditorState.forceSelection(n, t.getSelectionAfter())
				},
				j = e => {
					let t = e.getCurrentContent();
					const n = e.getSelection();
					t = s.Modifier.removeRange(t, n, "forward");
					let o = s.EditorState.push(e, t, h.f);
					return o = s.EditorState.forceSelection(o, t.getSelectionAfter())
				},
				w = e => e.getBlockMap().toSeq().filter(e => !!e && !!x(e)),
				T = (e, t) => e.getBlockMap().toSeq().filter(e => {
					const n = x(e),
						o = n && n.uploadInfo && n.uploadInfo.uploadKey;
					return !(!o || t[o] && t[o].url)
				}).isEmpty(),
				I = e => {
					const t = w(e),
						n = {
							gifvideo: 0,
							image: 0,
							video: 0,
							total: 0
						};
					return t.forEach(e => {
						const t = x(e);
						let s;
						s = t.makeGif ? "gifvideo" : t.uploadInfo && "video" === t.uploadInfo.mediaType || t.mediaAsset && t.mediaAsset.type === o.Video ? "video" : "image", n[s]++, n.total++
					}), n
				},
				P = e => !w(e).isEmpty(),
				M = (e, t) => {
					const n = w(e).map(e => {
						const n = x(e),
							{
								uploadInfo: o,
								thumbnail: s
							} = n;
						if (!o || !s) return;
						const r = D(n),
							i = t[r];
						return i && i.url ? void 0 : {
							...s,
							uploadKey: r
						}
					}).filter(Boolean).toArray();
					return n.length ? n : void 0
				},
				N = (e, t, n, o) => {
					let r = e.getCurrentContent();
					const i = r.getBlockForKey(t),
						a = r.getBlockAfter(t),
						c = [i];
					if (a && Object(b.u)(a.getType()) && c.push(a), c.find(e => e.getKey() === n)) return;
					const d = c.reduce((e, t) => e.remove(t.getKey()), r.getBlockMap());
					r = r.set("blockMap", d), r = Object(f.f)(r, n, c, o);
					const u = s.EditorState.push(e, r, h.e);
					return s.EditorState.forceSelection(u, Object(f.b)(l()(c), !0))
				},
				R = (e, t, n = f.a.after) => {
					const o = Object(f.h)(),
						r = Object(f.f)(e.getCurrentContent(), t, [o], n),
						i = s.EditorState.push(e, r, h.e);
					return s.EditorState.forceSelection(i, s.SelectionState.createEmpty(o.getKey()))
				},
				D = e => e.thumbnail && e.uploadInfo ? `${e.uploadInfo.uploadKey}-thumbnail-${e.thumbnail.time}` : "",
				B = (e, t) => {
					let n = "",
						o = "";
					if (e.uploadInfo) {
						const {
							uploadKey: s
						} = e.uploadInfo, r = t[s];
						r && r.url && (n = Object(m.b)(r.url));
						const i = t[D(e)];
						i && i.url && (o = Object(m.b)(i.url))
					}
					return {
						assetId: n,
						thumbnailAssetId: o
					}
				}
		},
		"./src/reddit/components/RichTextEditor/spoiler/decorator.m.less": function(e, t, n) {
			e.exports = {
				spoiler: "_1AlhnBqYYVTQbTr33YViyK"
			}
		},
		"./src/reddit/components/RichTextEditor/spoiler/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/lib/forEachGroup/index.ts"),
				s = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const r = e => e.getStyle().has(s.k.SPOILER);

			function i(e, t, n) {
				const s = e.getCharacterList();
				Object(o.a)(s, {
					keyFn: r
				}, (e, n, o, s) => {
					n && t(o, s)
				})
			}
		},
		"./src/reddit/components/RichTextEditor/table/Renderer/index.m.less": function(e, t, n) {
			e.exports = {
				Cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				Row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				Table: "_9QFGu47IyMX1ID1xQid-8",
				table: "_9QFGu47IyMX1ID1xQid-8",
				isFakeSelectionActive: "_1QXaG0_iXh-LFDkah9HqP3"
			}
		},
		"./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less": function(e, t, n) {
			e.exports = {
				formatterButton: "_1dNavKEU0lSO4mo9fYWTPm",
				ToolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				toolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				tooltip: "_3fnB5glctifL-mkYhH6aA1"
			}
		},
		"./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less": function(e, t, n) {
			e.exports = {
				ActionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				actionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				isPressed: "_2WwwYG59S_TJRq7FSdTVKK",
				ToolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9",
				toolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9"
			}
		},
		"./src/reddit/components/RichTextEditor/table/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/reddit/models/RichTextJson/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts"),
				a = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const c = {
					[r.e]: "left",
					[r.f]: "right",
					[r.d]: "center"
				},
				l = e => {
					const t = e.getData();
					return {
						colIndex: t.get("colIndex"),
						rowIndex: t.get("rowIndex"),
						colCount: t.get("colCount"),
						alignment: t.get("alignment")
					}
				},
				d = ["data"],
				u = (e, t) => e.mergeIn(d, t),
				p = (e, t, n) => e.merge({
					text: e.getText().slice(t, n),
					characterList: e.getCharacterList().slice(t, n)
				}),
				m = (e, t, n = "", s) => {
					const r = t.map(e => e.getText()).join(n),
						i = n ? s || o.CharacterMetadata.create() : null,
						a = [];
					return t.forEach(e => {
						a.push(...e.getCharacterList().toArray()), i && t.length > 1 && a.push(i)
					}), e.merge({
						text: r,
						characterList: a
					})
				},
				h = (e, t) => {
					const n = [];
					for (let r = 0; r < t; r++)
						for (let t = 0; t < e; t++) n.push(new o.ContentBlock({
							key: Object(o.genKey)(),
							type: a.l,
							data: Object(s.Map)({
								colCount: e,
								colIndex: t,
								rowIndex: r
							})
						}));
					return n
				},
				f = (e, t) => ({
					minCol: Math.min(e.colIndex, t.colIndex),
					minRow: Math.min(e.rowIndex, t.rowIndex),
					maxCol: Math.max(e.colIndex, t.colIndex),
					maxRow: Math.max(e.rowIndex, t.rowIndex)
				}),
				b = (e, t) => {
					const {
						minCol: n,
						minRow: o,
						maxCol: s,
						maxRow: r
					} = f(e, t);
					return (e, t) => o <= e && e <= r && n <= t && t <= s
				},
				g = (e, t) => e.rowIndex < t.rowIndex ? -1 : e.rowIndex > t.rowIndex ? 1 : e.colIndex - t.colIndex,
				x = (e, t) => e === t || !(!e || !t) && 0 === g(e, t),
				C = (e, t) => g(l(e), l(t)),
				y = e => {
					if (Object(a.v)(e.getType())) {
						return 0 === l(e).rowIndex
					}
					return !1
				},
				E = (e, t, n) => {
					const o = (t, n) => {
						if (t) {
							const o = Object(i.a)(e, t);
							return o && n && -1 !== o.blocks.indexOf(n) ? [o, o] : [o, n ? Object(i.a)(e, n) : null]
						}
						return n ? o(n, null).reverse() : [null, null]
					};
					return o(Object(a.v)(t.getType()) ? t : null, Object(a.v)(n.getType()) ? n : null)
				},
				v = (e, t, n, o = !1) => {
					const s = {
						isBackward: o
					};
					return t && (s.anchorKey = t.getKey(), s.anchorOffset = o ? t.getLength() : 0), n && (s.focusKey = n.getKey(), s.focusOffset = o ? 0 : n.getLength()), e.merge(s)
				},
				_ = e => {
					if (!e.length) return [];
					const t = e[0].length;
					return e.map((e, n) => e.map((e, o) => u(e, {
						rowIndex: n,
						colIndex: o,
						colCount: t
					})))
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
				return o
			}));
			var o, s, r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(o || (o = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(s || (s = {}));
			var l = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/helpers/postCollection.ts");
			const u = [l.Db.COMMENTS, l.Db.COLLECTION_COMMENTS],
				p = (e, t) => {
					if (!e) return [];
					const n = u.includes(e),
						s = e === l.Db.COLLECTION_COMMENTS || t && Object(d.a)(t),
						r = l.O.has(e),
						i = l.tb.has(e),
						a = e === l.Db.SUBREDDIT,
						c = e === l.Db.TOPIC;
					let p, m, h;
					return r && !a || i ? p = o.HeaderSelector : s ? p = o.Collection : n ? p = o.PostComments : c && (p = o.TopicHeader), (r || i || s || n) && (m = o.Widget), (r || n) && (h = o.PostItem), [p, m, h]
				};
			var m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/selectors/platform.ts"),
				f = n("./src/reddit/components/SEOTitle/index.m.less"),
				b = n.n(f);
			const g = ({
					level: e,
					children: t
				}) => {
					const n = `h${e}`;
					return i.a.createElement(n, {
						className: b.a.Title
					}, t)
				},
				x = Object(m.t)(),
				C = Object(a.b)(() => Object(c.a)((e, {
					pageLayer: t
				}) => t && Object(h.l)(e, {
					page: t
				}), (e, {
					pageLayer: t
				}) => t && t.meta && t.meta.name, (e, {
					type: t
				}) => t, (e, t, n) => ({
					level: p(t, e).indexOf(n) + 1 || void 0
				})));
			class y extends i.a.Component {
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
			t.b = x(C(y))
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
				c = n("./src/reddit/components/SidebarFooter/index.m.less"),
				l = n.n(c);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = r.a.a("Link", l.a), p = Object(a.t)({
				isFrontpage: a.y
			});
			t.a = p(e => s.a.createElement(i.a, {
				className: l.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, s.a.createElement("div", {
				className: l.a.LinkContainer
			}, s.a.createElement("div", {
				className: l.a.Column
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
				className: l.a.Column
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
				className: l.a.Copyright
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
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
				a = n.n(i);

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
					...l
				}) => s.a.createElement("div", c({}, l, {
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
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/UserIcon/index.tsx"),
				d = n("./src/reddit/constants/colors.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				m = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				b = n("./src/reddit/models/Subreddit/index.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/SubredditIcon/index.m.less"),
				C = n.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const E = c.a.wrapped(l.a, "UserIcon", C.a),
				v = c.a.img("Image", C.a),
				_ = ({
					iconColor: e,
					...t
				}) => r.a.createElement(v, y({
					style: {
						backgroundColor: e || ""
					}
				}, t)),
				O = c.a.wrapped(({
					className: e,
					color: t,
					...n
				}) => r.a.createElement(f.a, y({
					className: e,
					style: {
						background: t || ""
					}
				}, n)), "PlanetIcon", C.a),
				k = c.a.div("BackupImage", C.a),
				S = Object(u.t)();
			t.b = S(e => {
				const t = Object(m.b)(),
					n = Object(i.e)(g.U);
				let s, c, l;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: n
					} = Object(p.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(b.g)(e.subredditOrProfile) ? l = r.a.createElement(E, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (s = t, c = n)
				} else s = e.iconUrl, c = e.primaryColor || d.b.alienblue;
				return s ? l = r.a.createElement(_, {
					alt: o.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: c,
					role: "presentation",
					src: s
				}) : l || (l = t ? r.a.createElement(h.a, {
					name: "community",
					isFilled: !n,
					className: Object(a.a)(e.className, C.a.defaultCommunityIcon, {
						[C.a.mNightmode]: n
					}),
					style: n ? {
						backgroundColor: e.redditStyle ? d.b.alienblue : c
					} : {
						color: e.redditStyle ? d.b.alienblue : c
					}
				}) : r.a.createElement(O, {
					className: e.className,
					color: e.redditStyle ? d.b.alienblue : c,
					role: "presentation"
				})), e.linkTo ? r.a.createElement("a", {
					href: e.linkTo
				}, l) : r.a.createElement(r.a.Fragment, null, l)
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
		"./src/reddit/components/ThumbnailSelector/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "uqOt5KqJAqw5pe-WNxa0a",
				component: "uqOt5KqJAqw5pe-WNxa0a",
				TitleRow: "HEiFtUR3s93dQ2jUWWnxr",
				titleRow: "HEiFtUR3s93dQ2jUWWnxr",
				Close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				CloseWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				closeWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				ThumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				thumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				Image: "_2H32szY9NZ1aKr6j4Ced7u",
				image: "_2H32szY9NZ1aKr6j4Ced7u",
				thumbnail: "_2Ks8P6YD1-8_Ju3IrYpPJf",
				isSelected: "_3oA67AGI49fKcqDP970t4U",
				ButtonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				buttonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				CancelButton: "mBq3crGX9-xOOg-b-1V85",
				cancelButton: "mBq3crGX9-xOOg-b-1V85"
			}
		},
		"./src/reddit/components/ThumbnailSelector/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/debounce.js"),
				r = n.n(s),
				i = n("./node_modules/lodash/range.js"),
				a = n.n(i),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/media/index.ts"),
				f = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				b = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/layout/row/Inline/index.tsx"),
				x = n("./src/reddit/components/ThumbnailSelector/index.m.less"),
				C = n.n(x);
			const y = 10,
				E = Object(p.a)(u.a.div("Component", C.a)),
				v = u.a.wrapped(g.a, "TitleRow", C.a),
				_ = u.a.wrapped(b.a, "Close", C.a),
				O = u.a.div("CloseWrapper", C.a),
				k = u.a.div("ThumbnailsContainer", C.a),
				S = u.a.img("Image", C.a),
				j = e => l.a.createElement("div", {
					className: Object(d.a)(C.a.thumbnail, Object(f.a)({
						isLoading: e.isLoading
					}), {
						[C.a.isSelected]: e.isSelected
					}),
					onClick: e.onClick,
					ref: e.elementRef
				}, e.thumbnail.url && l.a.createElement(S, {
					src: e.thumbnail.url
				})),
				w = u.a.wrapped(g.a, "ButtonRow", C.a),
				T = m.i,
				I = u.a.wrapped(m.l, "CancelButton", C.a),
				P = (e, t) => {
					if (1 === e) return [0];
					const n = a()(0, t, t / (e - 1));
					return n.push(t), n.map(e => +e.toFixed(2))
				};
			class M extends l.a.Component {
				constructor(e) {
					super(e), this.isThumbnailsAreGenerating = !1, this.setSelectedElementRef = e => this.selectedElement = e, this.setThumbnails = r()(e => this.setState({
						thumbnails: e
					}), 100), this.scrollIntoView = () => {
						this.selectedElement && this.selectedElement.scrollIntoView({})
					}, this.setSelected = e => {
						this.setState({
							selectedIndex: e
						})
					}, this.onSelectButton = () => {
						const {
							selectedIndex: e
						} = this.state, t = this.state.thumbnails[e];
						this.props.onSelect({
							time: t.time,
							url: t.url
						})
					};
					const {
						thumbnailsCount: t = y,
						selected: n,
						videoDuration: o
					} = this.props, s = P(t, o).map(e => ({
						time: e,
						url: n && n.time === e ? n.url : void 0
					})), i = n ? s.findIndex(e => n.time === e.time) : -1;
					this.state = {
						thumbnails: s,
						selectedIndex: i
					}
				}
				componentDidMount() {
					this.scrollIntoView(), this.props.isOpen && this.generateVideoThumbnails()
				}
				componentDidUpdate(e) {
					this.props.isOpen && !e.isOpen && (this.scrollIntoView(), this.generateVideoThumbnails())
				}
				async generateVideoThumbnails() {
					const {
						thumbnails: e
					} = this.state;
					if (this.isThumbnailsAreGenerating || !e.find(e => !e.url)) return;
					this.isThumbnailsAreGenerating = !0;
					const t = document.createElement("video"),
						n = document.createElement("canvas");
					await Object(h.m)(t, this.props.videoSource);
					let o = 0;
					t.currentTime = e[o].time, await Object(h.d)(t, n, t => (e[o].url = t.dataUrl, o++, this.setThumbnails(e), o < e.length ? e[o].time : null)), this.setState({
						thumbnails: e
					}), this.isThumbnailsAreGenerating = !1
				}
				render() {
					if (!this.props.isOpen) return null;
					const {
						selectedIndex: e,
						thumbnails: t
					} = this.state;
					return l.a.createElement(E, {
						withOverlay: !0
					}, l.a.createElement(v, null, o.fbt._("Choose thumbnail", null, {
						hk: "XlI0H"
					}), l.a.createElement(O, {
						onClick: this.props.onToggleModal
					}, l.a.createElement(_, null))), l.a.createElement(k, null, t.map((t, n) => l.a.createElement(j, {
						key: n,
						elementRef: n === e ? this.setSelectedElementRef : void 0,
						isLoading: !t.url,
						onClick: () => this.setSelected(n),
						isSelected: n === e,
						thumbnail: t
					}))), l.a.createElement(w, null, l.a.createElement(I, {
						onClick: this.props.onToggleModal
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), l.a.createElement(T, {
						onClick: this.onSelectButton
					}, o.fbt._("Select", null, {
						hk: "3s53WD"
					}))))
				}
			}
			t.a = M
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				c = n("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				m = n.n(p);
			var h = e => {
					const {
						showPresence: t
					} = e;
					return s.a.createElement(u.a, {
						className: Object(d.a)(m.a.presenceDot, {
							[m.a.isLit]: t
						})
					})
				},
				f = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				b = n("./src/reddit/components/UserIcon/UserIcon.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(i.c)({
					currentUser: l.i,
					isNightMode: l.U,
					isPresenceExpEnabled: c.a,
					isPresenceUserPrefEnabled: l.gb,
					shouldHideNSFW: l.B
				}),
				C = Object(r.b)(x);
			t.a = C(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					isPresenceExpEnabled: r,
					...i
				} = e, c = Object(a.a)(null == t ? void 0 : t.accountIcon);
				return s.a.createElement("div", {
					className: m.a.currentUserIconWrapper
				}, c ? s.a.createElement(f.a, {
					className: e.className,
					headshot: t.accountIcon
				}) : s.a.createElement(b.a, g({}, i, {
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
				c = n.n(a);
			t.a = function({
				className: e,
				headerIcon: t,
				headshot: n
			}) {
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: Object(i.a)(c.a.snoovatarWrapper, e)
				}, r.a.createElement("div", {
					className: c.a.snoovatarBackground
				}), r.a.createElement("div", {
					className: c.a.snoovatarHeadshotContainer
				}, r.a.createElement("img", {
					alt: o.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: c.a.snoovatarHeadshot,
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
				return p
			}));
			var o = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				l = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				d = n.n(l);
			const u = `${o.a.assetPath}/img/avatar_over18_square.png`,
				p = e => !e || e.includes("avatar_default_");
			t.a = e => {
				const {
					className: t,
					iconUrl: n,
					isCurrentUser: o,
					isNightMode: r,
					isNSFW: l,
					nsfwIconUrl: m,
					shouldHideNSFW: h
				} = e;
				if (o && p(n) || !o && !n) return i.a.createElement(c.a, {
					className: Object(a.a)(d.a.DefaultUserIcon, t, {
						[d.a.mNightmode]: r
					})
				});
				const f = !o && l && h ? m || u : n;
				return i.a.createElement("img", {
					alt: s.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(a.a)(d.a.UserIcon, t),
					src: f
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
				c = n("./src/reddit/models/User/index.ts"),
				l = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				d = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				u = n("./src/reddit/selectors/user.ts");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(i.c)({
					currentUser: u.i,
					isNightMode: u.U,
					shouldHideNSFW: u.B,
					user: u.lb
				}),
				h = Object(r.b)(m);
			t.a = h(e => {
				const {
					currentUser: t,
					iconUrl: n,
					isNSFW: o,
					user: r,
					userName: i,
					...u
				} = e, m = !!t && Object(c.e)(t) === i, h = m ? t : r, f = h && h.accountIcon || n, b = r ? r.isNSFW : o;
				return Object(a.a)(f) ? s.a.createElement(l.a, {
					headshot: f,
					className: e.className
				}) : s.a.createElement(d.a, p({}, u, {
					iconUrl: f,
					isCurrentUser: m,
					isNSFW: b
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
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/postCollection/index.ts"),
				m = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/OverflowMenu/index.tsx"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				x = n("./src/reddit/selectors/postCollection.ts"),
				C = n("./node_modules/reselect/es/index.js"),
				y = n("./src/reddit/helpers/trackers/postCollection.ts"),
				E = n("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				v = n.n(E),
				_ = n("./node_modules/fbt/lib/FbtPublic.js");
			const O = l.a.wrapped(b.b, "DropdownRow", v.a);
			let k;
			const S = Object(g.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				j = Object(g.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				w = Object(C.c)({
					createPostUrl: x.d,
					isDeleteConfirmModalOpen: S,
					isEditCollectionModalOpen: j,
					shouldShowCollectionEditOptions: x.s
				}),
				T = Object(a.b)(w, (e, t) => ({
					copyLink: () => e(Object(u.x)(t.permalink)),
					onCreatePost: n => {
						t.shouldShowCreatePost && e(Object(c.b)(n))
					},
					onRemoveCollection: () => e(Object(p.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(d.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						k || (k = await Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("editCollectionModal")]).then(n.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(d.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = T(Object(f.c)(e => {
				const {
					className: t,
					collectionId: n,
					copyLink: o,
					createPostUrl: r,
					isDeleteConfirmModalOpen: a,
					isEditCollectionModalOpen: c,
					onCreatePost: l,
					onRemoveCollection: d,
					onToggleDeleteConfirmModal: u,
					onToggleEditModal: p,
					shouldShowCollectionEditOptions: f,
					shouldShowCreatePost: b,
					targetPosition: g,
					tooltipPosition: x,
					sendEvent: C
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(h.b, {
					className: t,
					dropdownId: `collection-menu-${n}-${b?1:2}`,
					onClick: s.a,
					targetPosition: g,
					tooltipPosition: x
				}, i.a.createElement(O, {
					onClick: o,
					displayText: _.fbt._("Copy collection link", null, {
						hk: "3Rfodz"
					})
				}), f && i.a.createElement(i.a.Fragment, null, i.a.createElement(O, {
					onClick: () => {
						C(Object(y.l)(n)), p()
					},
					displayText: _.fbt._("Edit", null, {
						hk: "1nftDt"
					})
				}), i.a.createElement(O, {
					onClick: () => {
						C(Object(y.k)(n)), u()
					},
					displayText: _.fbt._("Delete collection", null, {
						hk: "2FyIJB"
					})
				}), b && i.a.createElement(O, {
					onClick: () => {
						l(r)
					},
					displayText: _.fbt._("Create post", null, {
						hk: "1v2jHl"
					})
				}))), c && k && i.a.createElement(k, {
					collectionId: n,
					onClose: p,
					onEditSuccess: p
				}), a && i.a.createElement(m.a, {
					actionText: _.fbt._("Yes, Delete", null, {
						hk: "15Espn"
					}),
					headerText: _.fbt._("Delete Collection", null, {
						hk: "1QJ3as"
					}),
					modalText: _.fbt._("Are you sure you want to delete this collection? The posts within the collection won't be deleted.", null, {
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
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/opener/index.ts"),
				d = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				u = n("./src/reddit/components/OverflowMenu/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/Row.tsx"),
				m = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				h = n.n(m);
			const f = c.a.wrapped(p.b, "DropdownRow", h.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: n,
					onEditStartTime: s,
					onStartEventNow: i,
					postPermalink: c,
					shouldShowAddEventStartTime: p,
					targetPosition: m,
					tooltipPosition: h
				} = e;
				return a.a.createElement(u.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: r.a,
					targetPosition: m,
					tooltipPosition: h
				}, p && n && a.a.createElement(f, {
					onClick: n,
					displayText: o.fbt._("Add event start time", null, {
						hk: "4xWttR"
					})
				}), t && i && a.a.createElement(f, {
					onClick: i,
					displayText: o.fbt._("Start event now", null, {
						hk: "2TTNfJ"
					})
				}), t && s && a.a.createElement(f, {
					onClick: s,
					displayText: o.fbt._("Edit start time", null, {
						hk: "44XUxC"
					})
				}), a.a.createElement(f, {
					onClick: e.onRemoveClick,
					displayText: o.fbt._("Remove from collection", null, {
						hk: "qsiiu"
					})
				}), c && a.a.createElement(d.a, {
					target: l.c.BLANK,
					rel: l.b,
					isOverlay: !1,
					to: c
				}, a.a.createElement(f, {
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
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				d = n("./src/reddit/components/Widgets/PostCollection/PendingItem/index.m.less"),
				u = n.n(d);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = Object(c.c)({
				title: l.kb
			});
			var h = Object(a.b)(m)(e => {
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
					}, p._("Editing", null, {
						hk: "2w5fAf"
					})))
				}),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = n("./src/lib/timeAgo/index.ts"),
				x = n("./src/reddit/actions/postCollection/index.ts"),
				C = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/components/Widgets/PostCollection/PostItem/index.m.less"),
				E = n.n(y),
				v = n("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				_ = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				O = n("./src/reddit/components/Widgets/PostCollection/PostItem/Placeholder.m.less"),
				k = n.n(O);

			function S({
				className: e,
				isLoading: t
			}) {
				const n = Object(_.a)({
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
				w = ["right", "top"];
			var T = Object(a.b)(() => Object(c.c)({
					post: C.I
				}), (e, t) => ({
					onRemovePostFromCollection: () => e(Object(x.g)(t.collectionId, t.postId))
				}))(e => {
					const {
						post: t,
						onRemovePostFromCollection: n
					} = e;
					return t ? s.a.createElement("div", {
						className: E.a.container
					}, s.a.createElement("div", {
						className: E.a.content
					}, s.a.createElement(b.a, {
						className: E.a.title,
						target: "_blank",
						to: t.permalink
					}, t.title), s.a.createElement("div", {
						className: E.a.metaLine
					}, f.fbt._("Posted · {timeAgo}", [f.fbt._param("timeAgo", Object(g.d)(t.created / 1e3))], {
						hk: "ZVJpV"
					}))), s.a.createElement(v.a, {
						onRemoveClick: n,
						className: E.a.overflowMenu,
						dropdownId: "collection-widget-item" + t.id,
						postPermalink: t.permalink,
						targetPosition: j,
						tooltipPosition: w
					})) : s.a.createElement(S, {
						className: E.a.container,
						isLoading: !0
					})
				}),
				I = n("./src/reddit/components/Widgets/PostCollection/index.m.less"),
				P = n.n(I);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = ["right", "bottom"], R = ["right", "top"];
			class D extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.renderItem = (e, t) => s.a.createElement(T, {
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
						className: Object(r.a)(e, P.a.container)
					}, s.a.createElement("div", {
						className: P.a.topRow
					}, M._("Collection", null, {
						hk: "1pY1s2"
					}), s.a.createElement(i.a, {
						className: P.a.menuButton,
						collectionId: t.id,
						isSubmitPage: !0,
						permalink: t.permalink,
						targetPosition: N,
						tooltipPosition: R
					})), s.a.createElement("h4", {
						className: P.a.collectionDescription
					}, t.title), s.a.createElement("div", {
						className: P.a.listWrapper
					}, s.a.createElement("div", {
						className: P.a.listContainer
					}, n)), s.a.createElement(h, null))
				}
			}
			t.a = D
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
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				u = n("./src/reddit/components/RichTextJson/index.tsx"),
				p = n("./src/reddit/helpers/dom/index.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				f = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				x = n("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				C = n.n(x);
			const y = l.a.div("RuleShortName", C.a),
				E = l.a.div("RuleIndex", C.a),
				v = l.a.div("RuleTitle", C.a),
				_ = l.a.div("RuleDescription", C.a),
				O = l.a.wrapped(d.a, "RawHTMLDisplay", C.a),
				k = {};
			class S extends r.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(p.f)() || this.setState({
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
					return r.a.createElement(y, {
						className: Object(c.a)({
							[C.a.pointerCursor]: i
						}),
						onClick: o(e) || !s ? void 0 : n
					}, r.a.createElement(b.a, null, r.a.createElement(E, null, `${e.humanIndex}.`), r.a.createElement(v, null, `${e.rule.shortName}`), r.a.createElement("div", null, !o(e) && s && (e.isInIcons2020 ? r.a.createElement(m.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}) : t.isVisible ? r.a.createElement(f.a, {
						className: C.a.Chevron
					}) : r.a.createElement(h.a, {
						className: C.a.Chevron
					})))), t.isVisible && r.a.createElement(_, null, e.rule.descriptionRichText ? r.a.createElement(u.a, {
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
					return r.a.createElement(S, {
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
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/components/SEOTitle/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/widgets.ts"),
				h = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				f = n("./src/reddit/selectors/experiments/topPosts.ts"),
				b = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Theme/index.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(C.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(C.a)(e).widgetColors.sidebarWidgetHeaderColor,
				v = e => {
					const t = y(e);
					return Object(x.f)(t)
				},
				_ = e => {
					const t = E(e);
					return Object(x.f)(t)
				};
			var O = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = n.n(O);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = Object(u.t)(), w = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.m)(e, t) || void 0,
						o = t.redditStyle || Object(b.l)(e, {
							subredditId: n
						}),
						s = Object(g.U)(e);
					return o || s
				},
				nigtmode: g.U,
				subredditId: u.m,
				topPostVariant: f.d
			}));
			class T extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(m.b)(e, t)), this.setState({
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
					return e.backgroundColor = y(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = v(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = _(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: o,
						headerButton: r,
						onClick: i,
						title: c,
						titleClassName: d,
						truncateThreshold: u
					} = this.props, m = n ? k.a.widgetContentOnly : k.a.widgetContent, h = !o && this.props.styles, f = h ? this.getWidgetBackgroundStyles() : {}, b = h ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(a.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: o,
							[k.a.clickable]: !!i,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": o,
						onClick: i,
						style: f
					}, c && s.a.createElement("div", {
						className: k.a.widgetHeader,
						style: b
					}, s.a.createElement("div", {
						className: Object(a.a)(k.a.widgetTitle, d)
					}, s.a.createElement(l.b, {
						type: l.a.Widget
					}, c)), r), s.a.createElement("div", {
						className: Object(a.a)(m, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? u : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(p.o, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, S._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = j(w(Object(c.a)(Object(d.c)(T))))
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
				c = n("./src/reddit/constants/modals.ts");
			const l = Object(s.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.i,
				isBladeEditorDirty: a.h,
				isModalOpen: Object(i.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(o.b)(l, (e, {
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
				return c
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "s", (function() {
				return b
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "t", (function() {
				return x
			})), n.d(t, "v", (function() {
				return C
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "n", (function() {
				return _
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
				c = 640,
				l = 1600,
				d = 1280,
				u = 40,
				p = 48,
				m = 24,
				h = 24,
				f = 312,
				b = 40,
				g = 270,
				x = 106,
				C = 5,
				y = 16,
				E = 1250,
				v = 82,
				_ = 48,
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
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "n", (function() {
				return d
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return b
			}));
			const o = "DraftEditor-contentwrapper",
				s = "public-DraftStyleDefault-block",
				r = "data-offset-key",
				i = "hovered",
				a = "scrollerItem",
				c = "threadline",
				l = "header-user-dropdown",
				d = "voteButton",
				u = "RichTextJSON-root",
				p = "ImageBox-image",
				m = "content-type-link",
				h = "styled-outbound-link",
				f = "ListingLayout-backgroundContainer",
				b = "ListingLayout-outerContainer"
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
				return c
			})), n.d(t, "g", (function() {
				return l
			}));
			const o = "PostCreation-AddEventButton",
				s = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				a = 300,
				c = a,
				l = "PostCreation-AddToCollectionButton"
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
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			const o = 4,
				s = 51,
				r = 60,
				i = 70,
				a = 90,
				c = 99,
				l = 100,
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
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "h", (function() {
				return P
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
				c = n("./src/reddit/controls/Button/index.m.less"),
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
			const u = {
				role: "button",
				tabIndex: 0
			};
			var p, m, h, f;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(p || (p = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain"
			}(m || (m = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(h || (h = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(f || (f = {}));
			const b = (e, t) => n => s.a.createElement(e, {
					className: Object(r.a)(t, n.className)
				}),
				g = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconPosition: o = h.C,
						isFullWidth: i = !1,
						isSquare: c = !1,
						children: b,
						className: g,
						kind: E = f.Button,
						legacyClassName: v,
						priority: _ = m.Primary,
						redditStyle: O,
						size: k = p.S,
						text: S,
						...j
					} = e, w = Object(a.a)(), T = Object(a.b)(), I = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: n,
						Icon: o,
						is2020: s,
						isFullWidth: i,
						isSquare: a,
						legacyClassName: c,
						priority: d,
						size: u,
						text: p
					}) => s ? Object(r.a)(e, l.a.Button2020, d && l.a[d], u && l.a[u], {
						[l.a.isFullWidth]: i,
						[l.a.isIconOnly]: !!o && !p,
						[l.a.isSquare]: a,
						[l.a.redditStyle]: !(!t && !n)
					}) : Object(r.a)(e, c, {
						[l.a.redditStyle]: !(!t && !n)
					}))({
						baseClassName: g,
						children: b,
						dataRedditStyle: t,
						Icon: n,
						is2020: w,
						isFullWidth: i,
						isSquare: c,
						legacyClassName: v,
						priority: _,
						redditStyle: O,
						size: k,
						text: S
					}), P = (({
						children: e,
						text: t,
						Icon: n,
						iconPosition: o,
						priority: i,
						isInIcons2020: a
					}) => !n && t ? s.a.createElement("span", null, t) : s.a.createElement(s.a.Fragment, null, n && (o === h.C || o === h.L) && s.a.createElement(n, {
						className: Object(r.a)(l.a.Icon, {
							[l.a.isLeft]: o === h.L
						}),
						isFilled: a && i === m.Primary
					}), t && s.a.createElement("span", {
						className: l.a.Text
					}, t), e && e, n && o === h.R && s.a.createElement(n, {
						className: Object(r.a)(l.a.Icon, l.a.isRight),
						isFilled: a && i === m.Primary
					})))({
						children: b,
						text: S,
						Icon: n,
						iconPosition: o,
						priority: _,
						isInIcons2020: T
					});
					return E === f.InternalLink && (e => "to" in e)(j) ? s.a.createElement(x, d({}, u, j, {
						className: I
					}), P) : E === f.ExternalLink && (e => "href" in e)(j) ? s.a.createElement(C, d({}, u, j, {
						className: I
					}), P) : s.a.createElement(y, d({}, u, j, {
						className: I
					}), P)
				},
				x = e => s.a.createElement(i.a, e),
				C = e => s.a.createElement("a", e),
				y = e => s.a.createElement("button", e),
				E = e => s.a.createElement(g, d({
					kind: f.ExternalLink,
					priority: m.Primary,
					legacyClassName: l.a.PrimaryLinkButton
				}, e)),
				v = e => s.a.createElement(g, d({
					kind: f.InternalLink,
					priority: m.Primary,
					legacyClassName: l.a.PrimaryRouterLink
				}, e)),
				_ = e => s.a.createElement(g, d({
					kind: f.Button,
					priority: m.Primary,
					legacyClassName: l.a.PrimaryButton
				}, e)),
				O = e => s.a.createElement(g, d({
					kind: f.ExternalLink,
					priority: m.Secondary,
					legacyClassName: l.a.SecondaryLinkButton
				}, e)),
				k = e => s.a.createElement(g, d({
					kind: f.InternalLink,
					priority: m.Secondary,
					legacyClassName: l.a.SecondaryRouterLink
				}, e)),
				S = e => s.a.createElement(g, d({
					kind: f.Button,
					priority: m.Secondary,
					legacyClassName: l.a.SecondaryButton
				}, e)),
				j = e => s.a.createElement(g, d({
					kind: f.InternalLink,
					priority: m.Plain,
					legacyClassName: l.a.TertiaryRouterLink
				}, e)),
				w = e => s.a.createElement(g, d({
					kind: f.Button,
					priority: m.Plain,
					legacyClassName: l.a.TertiaryButton
				}, e)),
				T = ({
					className: e,
					...t
				}) => s.a.createElement(g, d({
					kind: f.Button,
					priority: m.Primary,
					className: Object(r.a)(e, l.a.DangerButtonColors),
					legacyClassName: l.a.DangerButton
				}, t)),
				I = ({
					className: e,
					...t
				}) => s.a.createElement(g, d({
					kind: f.Button,
					className: Object(r.a)(e, l.a.GoldButtonColors),
					legacyClassName: l.a.GoldButton
				}, t)),
				P = ({
					className: e,
					...t
				}) => s.a.createElement(g, d({
					kind: f.Button,
					className: Object(r.a)(e, l.a.PremiumButtonColors),
					legacyClassName: l.a.PremiumButton
				}, t)),
				M = ({
					className: e,
					...t
				}) => s.a.createElement(g, d({
					kind: f.Button,
					className: Object(r.a)(e, l.a.ChatButton)
				}, t)),
				N = ({
					className: e,
					...t
				}) => s.a.createElement(g, d({
					kind: f.Button,
					className: Object(r.a)(e, l.a.InlineTextButton)
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
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				m = n.n(p),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				f = n.n(h);

			function b() {
				return (b = Object.assign || function(e) {
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
					}, n = Object(a.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, b({}, t, {
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
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, b({}, t, {
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
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(d.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(l.a, {
						className: m.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)(f.a.row, e, {
					[f.a.mIsInteractive]: !t.noHover,
					[f.a.mIsSelected]: t.isSelected,
					[f.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(g, b({
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
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				l = n.n(c);
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
						className: Object(r.a)(l.a.dropdown, e.className),
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
				return S
			})), n.d(t, "c", (function() {
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(s),
				i = n("./node_modules/raf/index.js"),
				a = n.n(i),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/selectors/activeModalId.ts"),
				f = n("./src/higherOrderComponents/asModal/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/layout/row/Inline/index.tsx"),
				x = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				C = n.n(x);
			var y = Object(f.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return l.a.createElement("div", {
						className: C.a.wrapper
					}, l.a.createElement(g.a, {
						className: C.a.titleRow
					}, n), l.a.createElement("div", {
						className: C.a.detailsContainer
					}, t), l.a.createElement(g.a, {
						className: C.a.buttonRow
					}, l.a.createElement(b.i, {
						className: C.a.confirmButton,
						onClick: e.onConfirmed
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				E = n("./src/reddit/controls/ErrorText/index.m.less"),
				v = n.n(E);
			const _ = Object(u.c)({
				activeModalId: h.a
			});
			class O extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
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
						textHasOverflowed: c
					} = this.state;
					return l.a.createElement("div", {
						className: Object(p.a)(v.a.wrapper, n)
					}, l.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), c && l.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, i), t === a && l.a.createElement(y, {
						onConfirmed: this.toggleModal,
						title: r
					}, s || e))
				}
			}
			const k = Object(d.b)(_, e => ({
					toggleErrorTextModal: t => e(Object(m.i)(t))
				}))(O),
				S = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: o,
						fallbackMessage: s,
						messages: r = []
					} = e, i = r.length ? r : s ? [s] : [];
					return i.length ? l.a.createElement("div", {
						className: t
					}, i.map((e, t) => l.a.createElement(k, {
						className: n,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				j = e => l.a.createElement(S, {
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
				c = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = n("./src/reddit/helpers/dragDropContext/index.ts");
			const d = c.NativeTypes.FILE,
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
				})), l.a);
			class p extends i.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(i.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(p)
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
				return m
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(d);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = i.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				f = e => {
					const {
						label: t,
						children: n,
						inputRef: o,
						className: i,
						...a
					} = e, c = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, i, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, s.a.createElement(m, p({
						"aria-invalid": e.isInvalid,
						innerRef: o
					}, a)), e.label && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				b = e => {
					const {
						label: t,
						children: n,
						inputRef: o,
						isInvalid: i,
						className: a,
						redditStyle: c,
						...l
					} = e, d = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, a, {
							[u.a.mIsInvalid]: i,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, s.a.createElement(m, p({
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
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class C extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: x.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: x.REMOVE,
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
					return e.map((e, i) => s.a.createElement(f, {
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
					}, s.a.createElement(l.b, {
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
					const c = !(!!o && n.length >= o) && !a;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(g, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && c && s.a.createElement(g, {
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
				c = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/controls/Input/index.m.less"),
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
			class p extends s.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === c.a.Escape && this.props.closeModal()
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
			})(p)
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
				c = n("./src/reddit/controls/InternalLink/index.m.less"),
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

			function u({
				children: e,
				className: t,
				disabled: n,
				replace: o,
				to: c,
				...u
			}) {
				return n ? s.a.createElement("span", {
					className: Object(i.a)(l.a.disabledLink, t)
				}, e) : ("string" == typeof c && (c = Object(a.b)(c)), s.a.createElement(r.a, d({
					className: t,
					to: c
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
				return S
			}));
			var o = n("./node_modules/lodash/omit.js"),
				s = n.n(o),
				r = n("./node_modules/query-string/index.js"),
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/addQueryParams/index.ts");
			var p = (e, t) => t ? Object(u.a)(e, {
					user_id: t
				}) : e,
				m = n("./src/lib/opener/index.ts"),
				h = n("./src/lib/redditId/index.ts"),
				f = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/reddit/helpers/getVendorMetadata.ts"),
				x = n("./src/reddit/helpers/pixels.ts"),
				C = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/user.ts");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(d.a)(y.a, y.i, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(C.b)(e, n) : null, C.I, (e, t, n, o) => ({
					allowClickTracking: e,
					basePixelMetadata: n,
					userId: t ? Object(h.a)(t.id) : null,
					post: o
				})),
				_ = Object(l.b)(v, e => ({
					fireAdPixelsOfType: (t, n) => e(Object(f.u)(t, n)),
					recordClick: (t, n, o) => {
						const s = t.events.filter(({
							type: e,
							url: t
						}) => e === b.a.Click && Object(x.b)(t));
						Object(x.c)(s), e(Object(f.l)(String(n), {
							postId: t.id,
							vendorMetadata: o
						}))
					}
				})),
				O = (e, t, n, o) => {
					const s = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					o && t.outboundUrl && s && (e.href = p(t.outboundUrl, n))
				},
				k = (e, t, n) => {
					let o, s = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(n)) {
						s = Object(g.a)(e, t, b.a.Click);
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
				S = (e, t, n) => {
					const o = k(t, n, e.href);
					return e.href = o.url, o.metadata
				},
				j = ({
					isSponsored: e,
					source: t
				}) => !!(e && (null == t ? void 0 : t.outboundUrl)),
				w = _(e => {
					const t = Object(a.useRef)(null),
						{
							allowClickTracking: n,
							basePixelMetadata: o,
							fireAdPixelsOfType: r,
							href: i,
							isSponsored: l,
							post: d,
							postId: u,
							recordClick: p,
							source: h,
							userId: f
						} = e;
					let g = s()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "recordClick", "source", "userId"]);
					const x = h && h.outboundUrl && l ? h.outboundUrl : i;
					return g = {
						...g,
						href: x,
						rel: m.a,
						target: m.c.BLANK
					}, !h || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: n
						} = e;
						return !(!t || !n) && (t > n + 3e5 || t < n - 36e5)
					})(h) ? c.a.createElement("a", g) : c.a.createElement("a", E({}, g, {
						onMouseDown: s => {
							if (!j(e)) return !(1 !== s.button && 2 !== s.button && !s.ctrlKey) || void O(s.currentTarget, h, f, n);
							t.current = S(s.currentTarget, u, o)
						},
						onClick: () => {
							d && (j(e) && p(d, b.a.Click, t.current), r(d, b.a.Click))
						},
						onMouseLeave: e => {
							l || ((e, t) => {
								e.href = t
							})(e.currentTarget, x)
						},
						onTouchStart: e => O(e.currentTarget, h, f, n)
					}))
				});
			t.b = w
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
					return e.connectDropTarget && e.connectDragSource ? a()(e.connectDropTarget, e.connectDragSource)(s.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var d = a()(Object(c.DragSource)("card", {
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
						key: t && t(e),
						index: r,
						render: o,
						onDrop: this.onDrop,
						onClick: n
					})))
				}
			}
			t.a = Object(r.a)(u)
		},
		"./src/reddit/controls/SubredditDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				entry: "BR2J4z5ndMj6r3-QW2hHI",
				mIsFocused: "_2KXTnIrbZ1Fr5F4nZyXeKS",
				list: "_17g61LC45mhwjs-g79qbZK"
			}
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
					let i = e;
					if (e !== t) {
						for (s.leading || (i += r); i !== t;) n(i), i += r;
						s.trailing && n(i)
					} else(s.leading || s.trailing) && n(e)
				},
				u = n("./src/lib/forEachGroup/index.ts"),
				p = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				m = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownEntry/index.m.less"),
				h = n.n(m);
			class f extends i.Component {
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
						className: Object(c.a)(h.a.entry, this.props.disabled && h.a.disabled),
						onMouseDown: this.onMouseDown,
						onMouseOver: this.onMouseOver,
						onMouseUp: this.onMouseUp,
						ref: this.setRef
					}, this.props.children)
				}
			}
			var b = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/DropdownSection/index.m.less"),
				g = n.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var C = ({
					className: e,
					children: t,
					title: n,
					...o
				}) => a.a.createElement("div", x({
					className: Object(c.a)(g.a.dropdownSection, e)
				}, o), n && a.a.createElement("div", {
					className: g.a.title
				}, n), t),
				y = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				E = n("./src/reddit/helpers/name/index.ts"),
				v = n("./src/lib/lessComponent.tsx"),
				_ = n("./src/reddit/components/SubredditIcon/index.tsx"),
				O = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				k = n("./src/reddit/icons/svgs/Link/index.tsx"),
				S = n("./src/reddit/icons/svgs/TextPost/index.tsx"),
				j = n("./src/reddit/icons/svgs/Video/index.tsx"),
				w = n("./src/reddit/layout/row/Inline/index.tsx"),
				T = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/PostTypes/index.m.less"),
				I = n.n(T);
			const P = [{
				type: "text",
				Icon: S.a
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
				return a.a.createElement(w.a, {
					className: Object(c.a)(I.a.rowStyle, n)
				}, P.map(({
					type: e,
					Icon: n
				}) => a.a.createElement("div", {
					className: Object(c.a)(I.a.iconWrapper, {
						[I.a.mDisabled]: !t[e]
					})
				}, a.a.createElement(n, null))))
			}
			var N = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/EntryContent/index.m.less"),
				R = n.n(N);
			const D = v.a.wrapped(_.b, "subredditIcon", R.a);

			function B(e) {
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
					className: Object(c.a)(R.a.container, {
						[R.a.mHighlight]: t
					})
				}, n, a.a.createElement("div", {
					className: R.a.main
				}, a.a.createElement("span", {
					className: R.a.title
				}, o), s && a.a.createElement("span", {
					className: R.a.secondary
				}, s)), t && i && a.a.createElement(M, {
					allowedPostTypes: i
				}))
			}
			var L = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/ProfileEntryContent/index.m.less"),
				F = n.n(L);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function K(e) {
				const {
					item: {
						name: t,
						subscribers: n
					}
				} = e, s = Object(E.d)(t), r = void 0 !== n ? o.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [o.fbt._plural(n, "number")], {
					hk: "2SvJUX"
				}) : void 0, i = a.a.createElement(y.a, {
					className: Object(c.a)(F.a.profileIcon, R.a.subredditIcon)
				});
				return a.a.createElement(B, A({
					icon: i,
					title: s,
					secondaryText: r
				}, e))
			}
			var U = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/SubredditEntryContent/index.m.less"),
				H = n.n(U);

			function W() {
				return (W = Object.assign || function(e) {
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
				} = e, i = Object(E.c)(s), c = void 0 !== r ? o.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [o.fbt._plural(r, "number")], {
					hk: "2SvJUX"
				}) : void 0, l = a.a.createElement(D, {
					className: H.a.icon,
					iconUrl: n,
					primaryColor: t,
					redditStyle: !0
				});
				return a.a.createElement(B, W({
					icon: l,
					title: i,
					secondaryText: c
				}, e))
			}
			var V = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.m.less"),
				q = n.n(V);
			const G = {
				[p.a.OWN_PROFILE]: () => o.fbt._("Your profile", null, {
					hk: "1Qoy4P"
				}),
				[p.a.SUBSCRIBED_TO_SUBREDDIT]: () => o.fbt._("My communities", null, {
					hk: "2NVUpl"
				}),
				[p.a.OTHER_SUBREDDIT]: () => o.fbt._("Others", null, {
					hk: "3WQHlu"
				}),
				[p.a.MODERATED_SUBREDDIT]: () => o.fbt._("Moderated subreddits", null, {
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
						case p.a.OWN_PROFILE:
							return K;
						default:
							return z
					}
				}
				render() {
					const {
						focusedIndex: e,
						items: t
					} = this.props, n = [];
					return this.props.showNoMatchesCaption && n.push(a.a.createElement(C, {
						key: "no-matches"
					}, a.a.createElement("div", {
						className: q.a.noMatches
					}, o.fbt._("No communities found", null, {
						hk: "4wDUHv"
					})))), Object(u.a)(t, {
						keyFn: e => e.type
					}, (o, s, r, i) => {
						const c = [];
						d(r, i, n => {
							const o = t[n],
								s = n === e,
								r = this.getEntryContentComponent(o.type, o.name);
							r && c.push(a.a.createElement(f, {
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
						const l = G[s];
						n.push(a.a.createElement(C, {
							key: s,
							title: l && l()
						}, c))
					}), a.a.createElement("div", {
						className: Object(c.a)(q.a.container, this.props.className, {
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
			const c = (e, t, n) => {
					if (Object(r.a)(e, t.name)) {
						const {
							id: e,
							name: i
						} = t, {
							url: a,
							color: c
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
					return t = e.type === o.a.PROFILE ? i.a.OWN_PROFILE : i.a.OTHER_SUBREDDIT, {
						...e,
						type: t
					}
				},
				p = new RegExp("^(r/)?[A-Za-z0-9][A-Za-z0-9_]{1,20}$", "i"),
				m = new RegExp("^u/[A-Za-z0-9_-]{2,20}$", "i"),
				h = e => p.test(e) || m.test(e) || "" === e
		},
		"./src/reddit/controls/SubredditPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Q
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/lodash/isEqual.js"),
				i = n.n(r),
				a = n("./src/reddit/helpers/name/index.ts");
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
			var l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/objectSelector/index.ts"),
				p = n("./src/reddit/actions/subredditAutocomplete/index.ts"),
				m = n("./src/reddit/actions/subredditCrosspostable.ts"),
				h = n("./src/reddit/actions/subscription/index.ts"),
				f = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				b = n("./node_modules/lodash/debounce.js"),
				g = n.n(b),
				x = n("./src/lib/classNames/index.ts"),
				C = n("./src/reddit/constants/keycodes.ts"),
				y = n("./src/reddit/constants/posts.ts"),
				E = n("./src/reddit/models/SubredditAutocomplete/index.ts"),
				v = n("./node_modules/fbt/lib/FbtPublic.js"),
				_ = n("./src/lib/lessComponent.tsx"),
				O = n("./src/reddit/components/SubredditIcon/index.tsx"),
				k = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				S = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/icons/svgs/Search/index.tsx"),
				w = n("./src/reddit/controls/SubredditPicker/Picker/SearchBar/index.m.less"),
				T = n.n(w);
			const I = _.a.wrapped(O.b, "subredditRoundIcon", T.a),
				P = _.a.wrapped(j.a, "searchIcon", T.a),
				M = _.a.wrapped(k.a, "userIcon", T.a),
				N = _.a.span("iconEmpty", T.a),
				R = ({
					className: e,
					disabled: t
				}) => s.a.createElement(S.b, {
					className: Object(x.a)(T.a.dropdownIcon, e, {
						[T.a.mDisabled]: t
					})
				});

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const B = e => {
				e.preventDefault(), e.stopPropagation()
			};

			function L(e) {
				const {
					className: t,
					disabled: n,
					isActive: o,
					onDropdownClick: r,
					inputRef: i,
					record: a,
					value: c,
					...l
				} = e;
				let d = s.a.createElement(N, null);
				return o ? d = s.a.createElement(P, null) : a && (d = a.type === y.a.SUBREDDIT ? s.a.createElement(I, a) : s.a.createElement(M, null)), s.a.createElement("div", {
					className: Object(x.a)(T.a.searchBar, t)
				}, d, s.a.createElement("div", {
					className: T.a.inputWrapper
				}, s.a.createElement("input", D({
					className: T.a.input,
					ref: i,
					disabled: n,
					placeholder: o ? v.fbt._("Search communities", null, {
						hk: "1mtF5A"
					}) : v.fbt._("Choose a community", null, {
						hk: "44gKTd"
					}),
					spellCheck: !1,
					value: c
				}, l))), s.a.createElement("div", {
					onClick: r,
					onMouseDown: B
				}, s.a.createElement(R, {
					disabled: n
				})))
			}
			var F = n("./src/reddit/controls/SubredditPicker/Picker/SubredditDropdown/index.tsx"),
				A = n("./src/reddit/controls/SubredditPicker/Picker/index.m.less"),
				K = n.n(A);
			class U extends s.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => {
						this.inputRef = e, this.props.inputRef && this.props.inputRef(e)
					}, this.commitSelection = () => {
						const e = this.getPickerValue(!0);
						Object(f.c)(e.rawString) ? this.props.onChange(e, !0) : this.props.onChange({
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
						n = t.type === E.a.OWN_PROFILE ? Object(a.d)(t.name) : Object(a.c)(t.name), this.setState({
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
							id: c,
							name: l,
							iconUrl: d,
							primaryColor: u,
							allowedPostTypes: p
						} = r;
						return {
							rawString: t,
							record: Object(a.a)(t, l) ? {
								id: c,
								name: l,
								iconUrl: d,
								primaryColor: u,
								allowedPostTypes: p,
								type: i === E.a.OWN_PROFILE ? y.a.PROFILE : y.a.SUBREDDIT
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
						e.which === C.a.ArrowUp ? (this.moveSelection(!0), e.preventDefault()) : e.which === C.a.ArrowDown ? (this.moveSelection(), e.preventDefault()) : e.which === C.a.Enter || e.which === C.a.Tab ? (-1 !== this.state.focusedIndex ? this.selectItem(this.state.focusedIndex) : this.commitSelection(), e.which !== C.a.Tab && e.preventDefault()) : e.which === C.a.Escape && (this.inputRef && this.inputRef.blur(), e.preventDefault())
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
					} = this.state, c = r.record;
					return s.a.createElement("div", {
						className: Object(x.a)(K.a.container, e, {
							[K.a.mIsActive]: i,
							[K.a.mIsInvalid]: !n
						})
					}, s.a.createElement(L, {
						disabled: t,
						isActive: this.state.isActive,
						value: this.state.inputValue,
						inputRef: this.setInputRef,
						onDropdownClick: this.onDropdownClick,
						onChange: this.onInputChange,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						onKeyDown: this.onKeyDown,
						record: c
					}), a && s.a.createElement(F.a, {
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
			var H = U,
				W = n("./src/reddit/selectors/subredditAutocomplete.ts");

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
				}) => Object(W.a)(e, {
					allowCrosspostableOnly: t,
					includeUserProfile: n,
					substring: o.rawString
				}), (e, t) => {
					const {
						suggestedItems: n,
						fallbackItems: o,
						isAllDataRetrieved: s
					} = t, r = n.length ? n : e.record ? [Object(f.a)(e.record)] : [];
					return {
						items: 0 === r.length && s ? o : r,
						haveSuggestions: r.length > 0,
						isAllDataRetrieved: t.isAllDataRetrieved,
						isAutocompletePending: t.isPending
					}
				})),
				q = {
					onGetInitialData: e => t => t(e ? m.d() : h.e()),
					onGetSubredditAutocomplete: p.a
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
			var J = Object(l.b)(V, q)(G);
			class Q extends s.a.Component {
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
					return s.a.createElement(c, {
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
				c = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				l = n.n(c);
			t.a = s.a.memo(e => {
				const t = Object(a.a)(),
					n = e.size || i.c.XS;
				return s.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(l.a.toggleSwitch, e.className, l.a[n], {
						[l.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[l.a.mDisabled]: e.disabled,
						[l.a.is2020]: t
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
					className: Object(r.a)(l.a.toggleDisplay, t ? l.a.is2020 : "")
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
				return c
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Typography/index.m.less"),
				r = n.n(s);
			o.a.h1("heading1", r.a), o.a.h2("heading2", r.a), o.a.h3("heading3", r.a), o.a.h4("heading4", r.a);
			const i = o.a.h5("heading5", r.a),
				a = (o.a.h6("heading6", r.a), o.a.p("body1", r.a), o.a.p("body2", r.a)),
				c = (o.a.p("actionFont", r.a), o.a.p("metadata", r.a));
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
				return p
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "b", (function() {
				return v
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				d = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const p = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/save`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				m = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t, n) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: s.cb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				x = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: s.cb.POST,
					data: {
						id: t
					}
				}),
				E = (e, t, n, i) => {
					let a = Object(u.a)(Object(d.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`));
					return i && (a = Object(l.a)(a)), Object(r.a)(e, {
						data: n,
						endpoint: a,
						method: s.cb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				v = (e, t, n, o) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: s.cb.POST,
					data: {
						id: t,
						sticky: o
					}
				})
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			const r = (e, t) => Object(s.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/orders`,
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						subredditId: t.subredditId
					}
				}),
				i = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts"),
				a = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function l(e, t) {
				return Object(i.a)(e, {
					endpoint: `${o.a.metaUrl}/communities/${t.subredditId}/me`,
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function d(e, t) {
				return Object(i.a)(e, {
					endpoint: `${o.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(i.a)(e, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: t.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: t.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: t.username
						}
					}
				})
			}

			function p(e, t) {
				return Object(i.a)(Object(s.a)(e, [r.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(({
							data: e
						}) => Object(c.a)(e)).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function m(e, t) {
				const n = await Object(i.a)(e, {
					endpoint: `${o.a.metaUrl}/orders`,
					method: "post",
					data: {
						...t,
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					}
				});
				if (!n.ok) throw new Error(`Error fetching provisional membership: ${Object(a.b)(n.error)}`);
				return n.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/merge.js"),
				s = n.n(o),
				r = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/badges.ts"),
				a = n("./src/reddit/endpoints/governance/community.ts"),
				c = n("./src/reddit/endpoints/governance/products/badges.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			async function d(e, t, n) {
				const o = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					d = function(e, t) {
						return Object(l.a)(e, {
							method: "get",
							endpoint: `${r.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					u = Object(a.a)(e, {
						subredditId: t
					}),
					p = Object(c.b)(e, t),
					m = Object(i.c)(e, t, n),
					[h, f, b, g] = await Promise.all([d, u, p, m]);
				if (h.ok ? o.collections = h.body : o.errors.collections = h.error, f.ok) {
					const e = f.body;
					o.subscription = e.specialMemberships, o.communityRaw = e
				}
				return b.ok ? o.products = b.body : o.errors.products = b.error, g.ok ? (s()(o.badges, g.body.badges), o.userOwnedBadges = g.body.userOwnedBadges) : o.errors.userBadges = g.error, o
			}
			const u = (e, t) => Object(l.a)(e, {
				endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/communities/${t.subredditId}/me`,
					method: s.cb.GET
				})
			}
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
				return c
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return b
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

			function c(e) {
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
			async function l(e, t, n) {
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
			const p = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				m = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				b = (e, t, n, o) => ({
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
				c = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const l = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.h.MARKDOWN ? l.richtext_json = n : l.markdown_text = n, Object(s.a)(Object(r.a)(e, [i.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: o.cb.POST,
					data: l
				})
			}
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "a", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/graphql/operations/CreateScheduledPost.json"),
				s = n("./src/graphql/operations/SubredditScheduledPosts.json"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/helpers/richTextJson/index.ts"),
				c = n("./src/reddit/models/Post/index.ts"),
				l = n("./src/reddit/models/PostCreationForm/index.ts"),
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
				p = (e, t) => {
					if (!e.ok || !e.body) return !1;
					const n = e.body;
					return !!(n.data && n.data.subredditInfoById && n.data.subredditInfoById.scheduledPosts && n.data.subredditInfoById.scheduledPosts[t] && n.data.subredditInfoById.scheduledPosts[t].edges)
				},
				m = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => p(e, d.f.standalonePosts))(e)) && !(t.includeRecurring && !(e => p(e, d.f.recurringPosts))(e))),
				h = ({
					poll: e,
					schedule: t,
					submission: n,
					subredditId: o
				}) => ({
					collectionId: n.collectionId || "",
					discussionType: n.isChatPost ? c.b.Chat : c.b.Comment,
					isContestMode: n.isContestMode,
					isPostAsMetaMod: n.isPostAsMetaMod,
					isSpoiler: n.isSpoiler,
					isNsfw: n.isNSFW,
					poll: e && E(e),
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
					...f(t),
					...C(n),
					assetIds: y(n)
				}),
				f = e => ({
					scheduling: {
						publishAt: e.submitDate,
						clientTimezone: e.timezoneName,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					}
				}),
				b = e => ({
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
				x = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				C = e => {
					switch (e.kind) {
						case l.o.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case l.o.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case l.o.LINK:
							return {
								content: {}, link: {
									url: x(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				y = e => {
					let t = [];
					if (e.document) {
						const n = e.document || [];
						t = Object(a.c)(n)
					}
					return t
				},
				E = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				v = (e, t) => Object(r.a)(e, {
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
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
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
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return f
			}));
			const o = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: m(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
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
				c = e => i(e) && a(e),
				l = e => !i(e) && a(e),
				d = e => i(e) && !a(e),
				u = e => e.map(e => p(e.node)),
				p = e => ({
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
				m = e => e.map(e => h(e.node)),
				h = e => ({
					...p(e),
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				f = e => (e => !!e.frequency && !!e.interval)(e) ? h(e) : p(e)
		},
		"./src/reddit/helpers/richTextEditor/index.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e[e.Post = 0] = "Post", e[e.Comment = 1] = "Comment"
				}(o || (o = {}))
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
				return c
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
				c = e => {
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
				return p
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return b
			}));
			var o = n("./src/telemetry/index.ts"),
				s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				i = n("./src/reddit/selectors/comments.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			const l = e => {
					const t = Object(a.m)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(c.defaults)(e),
						screen: Object(c.screen)(e),
						subreddit: Object(c.subreddit)(e),
						post: t ? Object(c.post)(e, t) : null,
						profile: Object(c.profile)(e)
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
						...l(e),
						comment: s ? Object(c.comment)(e, s) : null,
						listing: Object(c.listing)(e, void 0, {
							depth: a
						}),
						commentComposer: {
							editorMode: t
						}
					})
				},
				u = (e, t, n, s) => {
					const r = l(e);
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
				p = e => Object(o.a)({
					noun: "cancel",
					...l(e)
				}),
				m = (e, t) => {
					t === r.c.replyToPost && Object(o.a)({
						noun: "input",
						...l(e)
					})
				},
				h = (e, t) => Object(o.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.defaults)(t),
					screen: Object(c.screen)(t),
					subreddit: Object(c.subreddit)(t),
					post: Object(c.post)(t, e)
				}),
				f = e => Object(o.a)({
					noun: "edit",
					...l(e)
				}),
				b = e => Object(o.a)({
					noun: "save_edit",
					...l(e)
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
				return m
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "d", (function() {
				return S
			}));
			var o, s, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/trackers/postEvent.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
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
					...p(t, e)
				}),
				d = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: o.collection,
					noun: t ? s.unfollow : s.follow,
					...p(n, e)
				}),
				u = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: i.a.postEvent,
					noun: t ? s.unfollow : s.follow,
					...p(n, e)
				}),
				p = (e, t) => {
					const n = {
						...c.defaults(e),
						action: r.c.CLICK,
						subreddit: c.subreddit(e)
					};
					return void 0 === t ? n : {
						...n,
						post: c.post(e, t),
						postCollection: c.postCollectionI13nSelector(e, {
							postId: t
						}),
						postEvent: c.postEventI13nSelector(e, {
							postId: t
						})
					}
				},
				m = e => ({
					...g(e),
					action: r.c.VIEW,
					noun: s.collectionEducation
				}),
				h = e => ({
					...g(e),
					action: r.c.CLICK,
					noun: s.collectionEducationGotIt
				}),
				f = e => ({
					...g(e),
					action: r.c.VIEW,
					noun: s.eventEducation
				}),
				b = e => ({
					...g(e),
					action: r.c.CLICK,
					noun: s.eventEducationGotIt
				}),
				g = e => ({
					...c.defaults(e),
					subreddit: c.subreddit(e),
					source: o.postComposer
				}),
				x = (e, t) => n => ({
					...p(n, e),
					source: t || o.postOverflowMenu,
					noun: s.collectionAddPost
				}),
				C = e => t => ({
					...p(t, e),
					source: o.collectionComposer,
					noun: s.collectionRemovePost
				}),
				y = () => e => ({
					...p(e),
					source: o.collectionComposer,
					noun: s.collectionCancel
				}),
				E = () => e => {
					const t = Object(a.m)(e) || void 0;
					return {
						...p(e, t),
						source: o.collectionComposer,
						noun: s.collectionCreate
					}
				},
				v = () => e => ({
					...p(e),
					source: o.collectionComposer,
					noun: s.collectionSelect
				}),
				_ = e => t => ({
					...c.defaults(t),
					subreddit: c.subreddit(t),
					source: o.collectionComposer,
					action: r.c.CLICK,
					noun: s.collectionDelete,
					postCollection: c.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				O = e => t => ({
					...p(t),
					source: o.collectionComposer,
					noun: s.collectionEdit,
					postCollection: c.postCollectionI13nByCollectionIdSelector(t, {
						collectionId: e
					})
				}),
				k = e => t => ({
					...p(t, e),
					source: o.collectionComposer,
					noun: s.startEvent
				}),
				S = () => e => {
					const t = Object(a.m)(e) || void 0;
					return {
						...p(e, t),
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
				return f
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			}));
			var o, s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/timezone/index.ts"),
				a = n("./src/reddit/constants/tracking.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(o || (o = {}));
			const m = e => u.actionInfo(e, {
					pageType: "event_submit"
				}),
				h = e => {
					Object(p.a)({
						...u.defaults(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: u.subreddit(e)
					})
				},
				f = e => {
					Object(p.a)({
						...u.defaults(e),
						source: o.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: u.subreddit(e),
						postEvent: y(e),
						postComposer: E(e)
					})
				},
				b = () => e => ({
					source: o.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: m(e),
					postEvent: y(e)
				}),
				g = e => t => ({
					...O(t, Object(l.m)(t)),
					source: o.postComposer,
					noun: "apply",
					postComposer: v(e)
				}),
				x = () => e => ({
					...O(e, Object(l.m)(e)),
					noun: "cancel",
					actionInfo: m(e)
				}),
				C = e => t => ({
					...O(t, Object(l.m)(t)),
					noun: "delete",
					actionInfo: m(t),
					postComposer: E(t),
					postEvent: _(e)
				}),
				y = e => {
					const t = Object(d.p)(e);
					return t && _(t)
				},
				E = e => v(Object(d.p)(e)),
				v = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.i.AtEventTime ? Object(i.f)(e.startDate).getTime() / s.Hb : void 0
					}
				},
				_ = e => {
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
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
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
				c = e => ({
					...Object(o.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_option_modal"
				}),
				l = ({
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
				p = ({
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
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "p", (function() {
				return d
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "t", (function() {
				return O
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "s", (function() {
				return I
			})), n.d(t, "v", (function() {
				return P
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
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...r(e)
				}),
				m = () => e => ({
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
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: i(e)
				}),
				b = () => e => ({
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
				x = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				C = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				y = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: s.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				E = {
					[o.d.Hourly]: "hourly_frequency",
					[o.d.Daily]: "daily_frequency",
					[o.d.Weekly]: "weekly_frequency",
					[o.d.Monthly]: "monthly_frequency",
					[o.b]: "custom_frequency"
				},
				v = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : E[e],
					...r(t)
				}),
				_ = () => e => ({
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
				S = () => e => ({
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
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: i(t)
				}),
				T = () => e => ({
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
					scheduledPost: i(t)
				}),
				P = () => e => ({
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
				return c
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
				c = (e, t) => n => ({
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
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
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
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(c);
			t.a = e => {
				const t = Object(i.b)();
				return s.a.createElement("i", {
					className: Object(r.a)(Object(a.b)(t ? "scheduled" : "calendar", e.isFilled), l.a.calendarIcon, e.className)
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
				c = n.n(a);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.b)();
				return s.a.createElement("i", {
					className: `${Object(i.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", c.a);
			t.a = l
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
				c = n.n(a);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.b)();
				return s.a.createElement("i", {
					className: `${Object(i.b)(t?"video_post":"expandoMediaVideo",e.isFilled)} ${e.className}`
				})
			}, "TextMediaIcon", c.a);
			t.a = l
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
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			}), "InfoIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live", e.isFilled), c.a.liveIcon, e.className)
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
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = c
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
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
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
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
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
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
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
				c = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(c);
			t.a = e => {
				const t = Object(i.b)();
				return s.a.createElement("i", {
					className: Object(r.a)(Object(a.b)(t ? "pin" : "sticky", e.isFilled), l.a.stickyIcon, e.className),
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
				return l
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
			var c = n("./src/lib/lessComponent.tsx");
			const l = (e, t) => `icon icon-${e}${t&&!e.includes("fill")&&a[`${e}_fill`]?"_fill":""}`,
				d = c.a.wrapped(e => s.a.createElement("span", {
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
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

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
				className: Object(r.a)(a.a.dropdown, {
					[a.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = l
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1ZVHRoTDdo57082D2GcC80"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, s.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM7.42 16h5.08c.55 0 1-.45 1-1s-.45-1-1-1H7.42c-.56 0-1 .45-1 1s.44 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_33vXt91MK_ualpifvvw_3v"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, s.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 16h5.4c.54 0 1-.45 1-1s-.46-1-1-1H3.5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_34rYEsgbWk8eOQx_bs7fTV"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingAlignRight/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, s.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM11.5 16h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingBlockQuotes/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_32TQMV98QwoweVXtMHpwr2"
			}
		},
		"./src/reddit/icons/svgs/FormattingBlockQuotes/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingBlockQuotes/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("polygon", {
				points: "8.63 4 5.36 4 2 9.8 2 16 9.2 16 9.2 9.24 6.75 9.24 8.63 4"
			}), s.a.createElement("polygon", {
				points: "15.56 9.24 17.39 4 14.16 4 10.8 9.8 10.8 16 18 16 18 9.24 15.56 9.24"
			}))
		},
		"./src/reddit/icons/svgs/FormattingBold/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1329vPT9OSGZyEvo6Fqss"
			}
		},
		"./src/reddit/icons/svgs/FormattingBold/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingBold/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M12.44,9.72v0a3.07,3.07,0,0,0,2.67-3.22c0-2.84-2.42-3.46-5-3.46H4.51V17H10.4c2.61,0,5.09-1,5.09-3.86C15.49,10.91,14.14,10,12.44,9.72ZM7.54,5.38H9.85c1.65,0,2.31.61,2.31,1.7s-.74,1.68-2.35,1.68H7.54ZM10,14.65H7.54V10.95H9.89c1.7,0,2.59.61,2.59,1.83S11.72,14.65,10,14.65Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingCodeBlock/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "F0bObcodUF6At5SPF9bIr"
			}
		},
		"./src/reddit/icons/svgs/FormattingCodeBlock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingCodeBlock/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15,2H13a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1V15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V5A3,3,0,0,0,15,2Z"
			}), s.a.createElement("path", {
				d: "M2.79,5a.71.71,0,0,0,.53-.2.74.74,0,0,0,.19-.54V4.08l0-.48H5.07V8.4H4.9a1,1,0,0,0-.69.18A.79.79,0,0,0,4,9.2a.79.79,0,0,0,.21.61A1,1,0,0,0,4.9,10H7.1a1,1,0,0,0,.69-.19A.79.79,0,0,0,8,9.2a.78.78,0,0,0-.21-.61A1,1,0,0,0,7.1,8.4H6.93V3.6H8.44l0,.48a1.19,1.19,0,0,0,.18.72.7.7,0,0,0,.56.2.75.75,0,0,0,.59-.2A1,1,0,0,0,10,4.14V4.08L9.93,2.9q0-.64-.18-.77A1.06,1.06,0,0,0,9.11,2H2.89a1.06,1.06,0,0,0-.63.13q-.16.13-.18.77L2,4.08v.06a.94.94,0,0,0,.19.65A.78.78,0,0,0,2.79,5Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_8Y1-XP7A1OOfoU_mUqKcg"
			}
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: "vertical" === e.orientation ? "rotate(90, 10, 10)" : ""
			}, s.a.createElement("path", {
				d: "M3 3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3zM2 3v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"
			}), s.a.createElement("path", {
				d: "M2 15h16v1H2M2 4h16v1H2M7.17 11.4l4.24-4.23c.4-.4 1.04-.4 1.43 0 .4.4.4 1.03 0 1.42L8.6 12.82c-.4.4-1.04.4-1.43 0-.4-.4-.4-1.03 0-1.42z"
			}), s.a.createElement("path", {
				d: "M8.6 7.17l4.23 4.24c.4.4.4 1.04 0 1.43-.4.4-1.03.4-1.42 0L7.18 8.6c-.4-.4-.4-1.04 0-1.43.4-.4 1.03-.4 1.42 0z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingHeading/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2C-VR7luDjfFqzNiJQEpk0"
			}
		},
		"./src/reddit/icons/svgs/FormattingHeading/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingHeading/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("polygon", {
				points: "6.57 3 6.57 5.57 10.73 5.57 10.73 17 13.82 17 13.82 5.57 18 5.57 18 3 6.57 3"
			}), s.a.createElement("polygon", {
				points: "2 9.65 4.68 9.65 4.68 17 6.66 17 6.66 9.65 9.35 9.65 9.35 8 2 8 2 9.65"
			}))
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2-0pxD6-cM6bWeb73TNNhJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), s.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1PNKgIKbpvIWTVU3LO0PJQ"
			}
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingInsertRow/index.m.less"),
				a = n.n(i);
			const c = {
				up: "rotate(180 10 10)",
				down: "",
				left: "rotate(90 10 10)",
				right: "rotate(-90 10 10)"
			};
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: c[e.orientation || "down"]
			}, s.a.createElement("path", {
				d: "M17 17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14zm1 0V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"
			}), s.a.createElement("path", {
				d: "M18 6H2V5h16M13 13H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"
			}), s.a.createElement("path", {
				d: "M9 15V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_32WqBD1jOzjyQPJdFZ8Rrt"
			}
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingItalics/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("polygon", {
				points: "7.24 17 10.3 17 12.1 6.85 9.05 6.85 7.24 17"
			}), s.a.createElement("polygon", {
				points: "9.7 3 9.28 5.46 12.34 5.46 12.76 3 9.7 3"
			}))
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1cI-FoGkiT7RNcT2BsWaRU"
			}
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingMonospace/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M18.8,9.4l-3-4a1,1,0,1,0-1.6,1.2L16.75,10,14.2,13.4a1,1,0,1,0,1.6,1.2l3-4A1,1,0,0,0,18.8,9.4Z"
			}), s.a.createElement("path", {
				d: "M5.6,5.2a1,1,0,0,0-1.4.2l-3,4a1,1,0,0,0,0,1.2l3,4a1,1,0,0,0,1.6-1.2L3.25,10,5.8,6.6A1,1,0,0,0,5.6,5.2Z"
			}), s.a.createElement("path", {
				d: "M12.24,1A1,1,0,0,0,11,1.76l-4,16A1,1,0,1,0,9,18.24l4-16A1,1,0,0,0,12.24,1Z"
			}))
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
		"./src/reddit/icons/svgs/FormattingSpoiler/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1KIFUYxvtUxuRVhS-FGTns"
			}
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingSpoiler/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M10,1.5A8.5,8.5,0,1,0,18.5,10,8.51,8.51,0,0,0,10,1.5Zm.71,13-.15.12-.18.1-.18.05a.73.73,0,0,1-.2,0,1,1,0,0,1-.71-.29,1,1,0,0,1-.21-.32A1,1,0,0,1,9,13.83a1,1,0,0,1,.08-.38,1,1,0,0,1,.21-.32,1,1,0,0,1,.91-.28l.18.06.18.09.15.13a1,1,0,0,1,.29.7A1,1,0,0,1,10.71,14.54Zm-.22-3.6a.5.5,0,0,1-1,0l-1-4.67A.5.5,0,0,1,9,5.67h2a.5.5,0,0,1,.49.6Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3C1w798INaJPgFxfklr4an"
			}
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M11.86,12a1.36,1.36,0,0,1,.7,1.19c0,1.07-1,1.59-2.42,1.59a4.12,4.12,0,0,1-3.75-2.36L4.08,13.79A6.21,6.21,0,0,0,10,17.2c3.86,0,5.55-2,5.55-4.22a4,4,0,0,0-.12-1Z"
			}), s.a.createElement("path", {
				d: "M17,9H11.61l-1.09-.31c-1.82-.51-2.85-.9-2.85-2,0-.82.71-1.39,2-1.39a4.13,4.13,0,0,1,3.41,2L15.2,5.65A6.23,6.23,0,0,0,9.69,2.8c-3,0-5,1.56-5,4.14A3.31,3.31,0,0,0,5.31,9H3a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1DvEfZosXHE4A0gHsGOjEU"
			}
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingSuperscript/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M6.94,3,2,17H4.83L5.9,13.89h4.75l1,3.11h3.11L9.86,3Zm-.28,8.67L8.29,6.92h0l1.6,4.75Z"
			}), s.a.createElement("path", {
				d: "M16.06,3H14.92L13,8.49h1.11l.42-1.22h1.86l.41,1.22H18ZM14.81,6.4l.64-1.86h0l.63,1.86Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingTable/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_12fGjUaA4qUfdUrX7rnmTK"
			}
		},
		"./src/reddit/icons/svgs/FormattingTable/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingTable/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M17,2H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V3A1,1,0,0,0,17,2ZM4,6H9V9.8H4Zm7,0h5V9.8H11ZM4,11.8H9V16H4ZM11,16V11.8h5V16Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "LfxAZX1Sm9aiJZiizUSZO"
			}
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}), s.a.createElement("path", {
				d: "M4.88,9.43a1.29,1.29,0,0,0-.13-.26,2.17,2.17,0,0,0-.19-.23,1.55,1.55,0,0,0-2.12,0,2.16,2.16,0,0,0-.19.23,2.2,2.2,0,0,0-.14.26A2.3,2.3,0,0,0,2,9.71,1.32,1.32,0,0,0,2,10a1.5,1.5,0,0,0,1.5,1.5,1.55,1.55,0,0,0,.57-.11A1.52,1.52,0,0,0,5,10a1.32,1.32,0,0,0,0-.29A1.27,1.27,0,0,0,4.88,9.43Z"
			}), s.a.createElement("path", {
				d: "M4.33,14.75l-.26-.14-.28-.08a1.42,1.42,0,0,0-.58,0l-.28.08-.26.14a2.16,2.16,0,0,0-.23.19A1.52,1.52,0,0,0,2,16a1.47,1.47,0,0,0,.44,1.06,1.52,1.52,0,0,0,.49.33,1.53,1.53,0,0,0,1.14,0,1.61,1.61,0,0,0,.49-.33A1.52,1.52,0,0,0,5,16a1.5,1.5,0,0,0-.44-1.06A2.06,2.06,0,0,0,4.33,14.75Z"
			}), s.a.createElement("path", {
				d: "M2.44,2.94A1.52,1.52,0,0,0,2,4a1.47,1.47,0,0,0,.44,1.06,1.59,1.59,0,0,0,.48.33,1.65,1.65,0,0,0,.58.11,1.55,1.55,0,0,0,.57-.11,1.5,1.5,0,0,0,.49-.33,1.5,1.5,0,0,0,0-2.12A1.55,1.55,0,0,0,2.44,2.94Z"
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
				i = n("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
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
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
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
		"./src/reddit/icons/svgs/ThumbnailSelect/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3QNLLzw_kUPhkWkxg22tT9"
			}
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ThumbnailSelect/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("path", {
				d: "M0 0h20v20H0z"
			}), s.a.createElement("path", {
				fill: "#A5A4A4",
				d: "M6 3h8c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V5c0-1.1046.8954-2 2-2zm11 1c1.1046 0 2 .8954 2 2v8c0 1.1046-.8954 2-2 2V4zM3 4v12h-.6667C1.597 16 1 15.1734 1 14.1538V5.8462C1 4.8266 1.597 4 2.3333 4H3z"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = n.n(i);
			const c = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
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
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				p = n.n(u);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const h = Object(l.t)(),
				f = Object(i.c)({
					isEditing: d.i,
					layout: (e, t) => t.forcedLayout || Object(l.N)(e, t)
				}),
				b = Object(r.b)(f),
				g = ({
					disableFullscreen: e,
					dispatch: t,
					fitPageToContent: n,
					forcedLayout: o,
					isCollectionLayout: r,
					isEditing: i,
					layout: a,
					pageLayer: c,
					...l
				}) => s.a.createElement("div", l);
			t.a = h(b(({
				className: e,
				...t
			}) => s.a.createElement(g, m({
				className: Object(a.a)(e, p.a.styledContent, {
					[p.a.mLargePostLayout]: t.layout === c.g.Large,
					[p.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[p.a.mClassicWidth]: t.isCollectionLayout,
					[p.a.mIsEditing]: !!t.isEditing,
					[p.a.mCanFlexFullWidth]: !t.fitPageToContent
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
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				p = n("./src/reddit/models/Theme/index.ts"),
				m = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class f extends s.a.Component {
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
			var b = Object(h.a)(f);
			var g = e => s.a.createElement(b, e),
				x = n("./src/reddit/layout/page/Listing/index.m.less"),
				C = n.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const E = Object(a.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: o,
						theme: r,
						...a
					} = e, c = Object(m.a)(e), l = {
						"--pseudo-before-background": t || Object(p.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return s.a.createElement("div", y({
						className: Object(i.a)(C.a.backgroundContainer, n),
						style: l
					}, a))
				}),
				v = c.a.div("Body", C.a),
				_ = c.a.div("Sidebar", C.a),
				O = e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null;

			function k(e) {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: `${l.q}px`,
						marginTop: t
					} : {
						marginLeft: `${l.q}px`,
						marginTop: t
					},
					o = e.sidebar && s.a.createElement(_, {
						className: e.isCollectionLayout ? C.a["m-collectionLayout"] : C.a.defaultLayout,
						style: n
					}, e.sidebar),
					a = s.a.createElement(r.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? s.a.createElement(s.a.Fragment, null, e.sidebars[0], a, e.sidebars[1]) : e.isPageSwapped ? s.a.createElement(s.a.Fragment, null, o, a) : s.a.createElement(s.a.Fragment, null, a, o);
				const p = e.disableFullscreen ? `${e.maxWidth||u.a+2*l.m}px` : "100%";
				return s.a.createElement(g, {
					subredditId: e.subredditId
				}, s.a.createElement("div", {
					className: Object(i.a)(C.a.outerContainer, d.i, e.className),
					ref: e.containerRef
				}, s.a.createElement(E, {
					className: d.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), s.a.createElement("div", {
					className: C.a.innerContainer
				}, s.a.createElement("div", {
					className: C.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, O(e), s.a.createElement("div", {
					style: {
						maxWidth: p
					}
				}, e.trendingUnit), s.a.createElement(v, {
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
				c = n.n(a);
			t.a = Object(r.a)(e => s.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
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
				c = n.n(a);
			t.a = Object(r.a)(e => s.a.createElement("div", {
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
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/pages/ErrorPages/index.m.less"),
				c = n.n(a);
			const l = ({
					message: e
				}) => r.a.createElement("div", {
					className: c.a.container
				}, r.a.createElement("h3", {
					className: c.a.title
				}, e || o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
					hk: "3VvHek"
				})), r.a.createElement(i.k, {
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
				})), r.a.createElement(i.k, {
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
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/components/JumpToContent/index.tsx"),
				l = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./node_modules/lodash/once.js"),
				u = n.n(d),
				p = n("./node_modules/react-router-redux/es/index.js"),
				m = n("./src/lib/constants/index.ts"),
				h = n("./src/reddit/constants/keycodes.ts"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				b = n("./src/reddit/models/PostCreationForm/index.ts"),
				g = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				x = n("./src/reddit/pages/ErrorPages/index.tsx"),
				C = n("./src/reddit/components/CrosspostBox/index.tsx"),
				y = n("./src/reddit/components/RequestPendingBanner/index.tsx"),
				E = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/helpers/trackers/postComposer.ts"),
				O = n("./src/reddit/selectors/activeModalId.ts"),
				k = n("./src/reddit/selectors/platform.ts"),
				S = n("./src/reddit/selectors/postCreations.ts"),
				j = n("./src/reddit/selectors/postDraft.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/actions/changeUsername.ts"),
				P = n("./src/reddit/actions/externalAccount.ts"),
				M = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				N = n("./src/lib/makeActionCreator/index.ts"),
				R = n("./src/telemetry/index.ts"),
				D = n("./src/reddit/actions/governance/index.ts"),
				B = n("./src/reddit/actions/pages/subreddit.ts"),
				L = n("./src/reddit/actions/postDraft.ts"),
				F = n("./src/reddit/actions/scheduledPosts/index.ts"),
				A = n("./src/reddit/actions/urlRequested.ts"),
				K = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				U = n("./src/config.ts"),
				H = n("./src/lib/convertToCamelCase/index.ts"),
				W = n("./src/lib/makeApiRequest/index.ts"),
				z = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				V = n("./src/lib/omitHeaders/index.ts"),
				q = n("./src/reddit/constants/headers.ts"),
				G = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				J = n("./src/reddit/helpers/flair.ts"),
				Q = n("./src/reddit/helpers/name/index.ts"),
				Z = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				X = n("./src/reddit/models/Poll/index.ts"),
				Y = n("./src/reddit/models/Post/index.ts"),
				$ = n("./src/reddit/models/RichTextJson/addRTJParam.ts");

			function ee(e) {
				return Math.floor(e.valueOf() / 1e3)
			}
			const te = e => {
					switch (e.kind) {
						case b.o.CROSSPOST:
							return b.o.CROSSPOST;
						case b.o.LINK:
							return b.o.LINK;
						case b.o.POLL:
							return b.o.POLL;
						case b.o.MEDIA:
							return e.makeGif ? b.o.VIDEO_GIF : e.mediaType;
						default:
							return "self"
					}
				},
				ne = e => {
					switch (e.kind) {
						case b.o.RICH_TEXT:
							return {
								richtext_json: JSON.stringify({
									document: e.document
								})
							};
						case b.o.MARKDOWN:
							return {
								text: e.markdown
							};
						case b.o.LINK:
						case b.o.MEDIA:
							return {
								url: e.url
							};
						case b.o.CROSSPOST:
							return {
								crosspost_fullname: e.sourcePostId
							};
						case b.o.POLL:
							return e.poll.type === X.a.Prediction ? {
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
					const t = Object(Q.g)(e.destSubreddit.name);
					return {
						sr: t,
						api_type: "json",
						show_error_list: !0,
						draft_id: e.draftId || void 0,
						title: e.title,
						discussion_type: e.isChatPost ? Y.b.Chat : void 0,
						spoiler: e.isSpoiler,
						nsfw: e.isNSFW,
						...e.kind !== b.o.POLL ? {
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
						...e.kind === b.o.MEDIA && "video" === e.mediaType ? {
							video_poster_url: e.videoThumbnailUrl
						} : {},
						...e.kind === b.o.MEDIA && e.makeGif ? {
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
							unlist: e.eventSchedule.submitTime === b.i.AtEventTime
						},
						...e.collectionId && {
							collection_id: e.collectionId
						}
					}
				},
				se = async (e, t) => {
					if (!e.ok) return Object(Z.b)(e);
					const n = e.body.json.data;
					let o = n.url;
					o || t.kind !== b.o.MEDIA || (o = await ((e, t) => new Promise(n => {
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
							return n ? `${m.zb.Post}_${n}` : ""
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
			var re = (e, t) => Object(W.a)(Object(V.a)(e, [q.a]), {
				endpoint: Object($.a)(Object(G.a)(`${e.apiUrl}/api/submit?resubmit=true`)),
				method: m.cb.POST,
				data: oe(t)
			}).then(async e => await se(e, t));
			var ie = n("./src/reddit/endpoints/scheduledPosts/index.ts"),
				ae = n("./src/reddit/endpoints/scheduledPosts/update.ts"),
				ce = n("./src/reddit/featureFlags/index.ts"),
				le = n("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				de = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				ue = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				pe = n("./src/reddit/models/User/index.ts"),
				me = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				he = n("./src/reddit/models/ScheduledPost/index.ts"),
				fe = n("./src/reddit/actions/postCreation/constants.ts");
			const be = Object(N.a)(fe.w),
				ge = Object(N.a)(fe.L),
				xe = Object(N.a)(fe.o),
				Ce = Object(N.a)(fe.y),
				ye = Object(N.a)(fe.X),
				Ee = Object(N.a)(fe.F),
				ve = Object(N.a)(fe.a),
				_e = Object(N.a)(fe.B),
				Oe = e => `/r/${e}/about/${he.r}`,
				ke = (e, t) => {
					const n = e || {
							duration: m.x,
							options: []
						},
						{
							govType: o,
							newSubreddit: s,
							newTopMod: r
						} = Object(S.s)(t),
						i = {
							...n
						};
					return o && (i.type = o), i.type === X.a.ReplaceTopMod ? (i.params = {
						userName: r
					}, i.options = X.g[X.a.ReplaceTopMod]()) : i.type === X.a.Spinoff ? (i.params = {
						subreddit: s
					}, i.options = X.g[X.a.Spinoff](s)) : i.options = i.options.map(e => ({
						text: e.text.trim()
					})).filter(e => !!e.text), i
				},
				Se = e => {
					const t = e.uploads,
						n = Object(S.P)(e),
						o = Object(S.a)(e),
						s = Object(S.Z)(e);
					if (o === m.Lb.POST) return K.a.getPendingThumbnailUploads(s, t);
					if (o === m.Lb.MEDIA && n && n.items.length) {
						const {
							video: e
						} = n.items[0];
						if (e && e.thumbnail && !t[b.m]) return [{
							...e.thumbnail,
							uploadKey: b.m
						}]
					}
				},
				je = e => async (t, n, {
					gqlContext: o
				}) => {
					const s = n(),
						r = Object(S.W)(s),
						i = Object(S.X)(s, e),
						a = Object(S.h)(s),
						c = Object(me.r)(s);
					if (!(i && a.id && r && Object(de.f)(c))) return;
					const l = a.id,
						d = Object(me.a)(s, {
							subredditId: l,
							scheduledPostId: c
						});
					if (d && Object(R.a)(Object(ue.r)(d)(s)), t(be(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(S.u)(n()))) return;
					const {
						isPoll: u,
						polls: p
					} = Object(S.s)(s), m = ke(p, s), h = {
						...Object(ie.e)({
							poll: u ? m : void 0,
							submission: i,
							schedule: r,
							subredditId: a.id,
							scheduledPostId: c
						})
					}, f = await Object(ae.a)(o(), h);
					if (f.ok) return t(Object(F.e)({
						subredditId: a.id
					})), void t(Object(A.a)(Oe(a.name), !1));
					const b = f.error;
					t(xe(b))
				}, we = e => async (t, n, {
					gqlContext: o
				}) => {
					const s = n(),
						r = Object(S.W)(s),
						i = Object(S.X)(s, e),
						a = Object(S.h)(s),
						c = Object(me.b)(s);
					if (!i || !a.id || !r) return;
					if (t(be(i)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(S.u)(n()))) return;
					const {
						isPoll: l,
						polls: d
					} = Object(S.s)(s), u = ke(d, s), p = {
						duration: u.duration,
						options: u.options
					}, m = {
						...Object(ie.d)({
							poll: l ? p : void 0,
							submission: i,
							schedule: r,
							subredditId: a.id
						}),
						creationToken: c
					}, h = await Object(ie.a)(o(), m);
					if (h.ok) {
						t(Object(F.e)({
							subredditId: a.id
						}));
						const e = h.body.data.createScheduledPost.scheduledPost;
						return e && Object(R.a)(Object(ue.o)(Object(le.d)(e))(s)), void t(Object(A.a)(Oe(a.name), !1))
					}
					const f = h.error;
					t(xe(f))
				}, Te = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n(),
						r = Object(S.X)(s, e),
						{
							isPoll: i,
							polls: c
						} = Object(S.s)(s),
						l = ke(c, s);
					if (!r) return;
					if (t(be(r)), e.postFieldValidationPending && (await e.postFieldValidationPending, Object(S.u)(n()))) return;
					let d;
					const u = i && ce.d.spPolls(s);
					if ((d = u ? await
							function(e, t, n) {
								const o = t.destSubreddit.id;
								return Object(W.a)(e, {
									method: m.cb.POST,
									endpoint: `${U.a.metaUrl}/polls/${o}`,
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
							}(o(), r, l) : i ? await ((e, t) => Object(W.a)(Object(V.a)(e, [q.a]), {
								endpoint: Object($.a)(Object(G.a)(`${e.apiUrl}/api/submit_poll_post.json?resubmit=true`)),
								method: m.cb.POST,
								data: oe(t),
								type: "json"
							}).then(e => se(e, t)))(o(), {
								...r,
								kind: b.o.POLL,
								poll: l
							}) : r.kind === b.o.GALLERY ? await ((e, t) => Object(W.a)(Object(V.a)(e, [q.a]), {
								endpoint: Object($.a)(Object(G.a)(`${e.apiUrl}/api/submit_gallery_post.json?resubmit=true`)),
								method: m.cb.POST,
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
						const e = Object(T.i)(s),
							n = d.body;
						t(ge({
							draftId: r.draftId,
							response: n
						})), u && t(Object(D.c)({
							poll: n.poll
						}));
						const o = (n.path || `/user/${Object(pe.e)(e)}/posts`).replace(/^\/r\/u_/, "/user/");
						t(Object(B.subredditInvalidateListing)(r.destSubreddit.name)), t(Object(A.a)(o, !1))
					} else {
						if (i) {
							const e = d.error;
							t(Ce(e))
						}
						const e = d.error;
						e.type === m.E.BAD_CAPTCHA_ERROR ? t(ve()) : e.type === m.E.VALIDATION_ERROR ? t(ye(e)) : e.type === m.E.SUBMIT_VALIDATION_ERROR ? t(Ee(e)) : t(xe(e))
					}
					const p = Object(a.m)(r.kind),
						h = d.ok && d.body && d.body.id && Object(Y.r)(d.body.id),
						f = n();
					_.r(f, p, h)
				};
			var Ie = n("./src/reddit/actions/postCreation/subredditChange.ts"),
				Pe = n("./src/reddit/actions/upload.ts"),
				Me = n("./src/reddit/helpers/externalAccount/index.tsx"),
				Ne = n("./node_modules/history/esm/history.js"),
				Re = n("./node_modules/react-router/esm/react-router.js"),
				De = n("./src/lib/matchRoute/index.ts"),
				Be = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx");
			const Le = "DISCARD_POST_ON_NAVIGATION_MODAL_ID",
				Fe = Object(i.c)({
					isEditingScheduledPost: e => !!Object(me.r)(e),
					isScheduledPost: S.L
				});
			var Ae = Object(r.b)(Fe)(e => {
					const {
						isEditingScheduledPost: t,
						isScheduledPost: n,
						onAbort: o,
						onDiscardConfirmed: r,
						onSaveDraft: i,
						submissionType: a
					} = e;
					return m.D.has(a) && !n ? s.a.createElement(Be.a, {
						bodyText: l.fbt._("Do you want to save a draft of your post?", null, {
							hk: "3EV54t"
						}),
						onClose: o,
						onPrimaryAction: i,
						onSecondaryAction: r,
						primaryButtonText: l.fbt._("Save Draft", null, {
							hk: "1VdofA"
						}),
						secondaryButtonText: l.fbt._("Discard Post", null, {
							hk: "1CBjtn"
						}),
						titleText: l.fbt._("Save draft", null, {
							hk: "44JnYT"
						})
					}) : s.a.createElement(Be.a, {
						bodyText: t ? l.fbt._("Returning to the previous page will discard your changes", null, {
							hk: "2LlXOp"
						}) : l.fbt._("Returning to the previous page will discard your post", null, {
							hk: "3fT0mW"
						}),
						onClose: o,
						onPrimaryAction: o,
						onSecondaryAction: r,
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
				Ke = n("./src/reddit/routes/postCreation/index.ts");
			const Ue = e => (e.returnValue = "", ""),
				He = Object(i.c)({
					destSubreddit: S.h,
					hasError: S.t,
					havePostContent: S.y,
					isChanged: S.B,
					modalId: O.a,
					submitPostPending: S.hb
				}),
				We = Object(r.b)(He, e => ({
					onToggleDiscardModal: () => e(a.w(Le))
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
						this.unblockNavigation || (window.addEventListener("beforeunload", Ue), this.unblockNavigation = e.history.block((e, t) => {
							if (!Object(De.a)(Object(Ne.e)(e), [Ke.a])) return this.props.modalId !== Le && this.props.onToggleDiscardModal(), "Are you sure you want to leave?"
						}))
					}, this.unblock = () => {
						this.unblockNavigation && (this.unblockNavigation(), this.unblockNavigation = null), window.removeEventListener("beforeunload", Ue)
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
			var Ve = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				})(We(Object(Re.i)(ze))),
				qe = n("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				Ge = n("./src/lib/classNames/index.ts"),
				Je = n("./src/lib/prettyPrintNumber/index.ts"),
				Qe = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton.tsx"),
				Ze = n("./src/reddit/components/Governance/Token/index.tsx"),
				Xe = n("./src/reddit/components/ScheduledPost/PostSchedulePickerModal/loader.tsx"),
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
				ct = n("./src/reddit/selectors/posts.ts");
			var lt = n("./src/reddit/components/PostCreationForm/Button/index.m.less"),
				dt = n.n(lt),
				ut = n("./src/lib/lessComponent.tsx");
			const pt = ut.a.wrapped(Ye.i, "PrimaryButton", dt.a),
				mt = ut.a.wrapped(Ye.l, "SecondaryButton", dt.a);
			var ht = n("./src/lib/timezone/index.ts"),
				ft = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				bt = n("./src/reddit/components/PostCreationForm/PostCreationFooter/ScheduledTimeInfo/index.m.less"),
				gt = n.n(bt);
			const {
				fbt: xt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ct = ut.a.div("Container", gt.a), yt = Object(i.c)({
				eventSchedule: S.p,
				postSchedule: S.W
			});
			var Et = Object(r.b)(yt)(e => {
					const {
						eventSchedule: t,
						postSchedule: n
					} = e;
					let o;
					if (t && t.submitTime !== b.i.Now) o = (e => {
						const t = Object(ht.f)(e.startDate);
						let n = `${t.toLocaleDateString(void 0,{month:"numeric",day:"numeric",year:"2-digit"})} ${t.toLocaleTimeString([],{hour:"numeric",minute:"numeric"}).replace(" ","")}`;
						const o = Object(ht.d)(e.timezoneName, +t);
						return o && (n += ` ${o.abbreviation}`), s.a.createElement("span", null, xt._("Will automatically post at", null, {
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
							const r = e.recurrenceInfo ? s.a.createElement("span", null, s.a.createElement(ft.a, {
								className: gt.a.replayIcon
							}), xt._("Recurring post template scheduled for", null, {
								hk: "2tTwIB"
							})) : xt._("Post scheduled for", null, {
								hk: "47yVoo"
							});
							return s.a.createElement("span", null, r, " ", s.a.createElement("time", {
								dateTime: e.submitDate
							}, n))
						})(n)
					}
					return s.a.createElement(Ct, null, o)
				}),
				vt = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				_t = n("./src/lib/linkMatchers/index.ts"),
				Ot = n("./src/reddit/contexts/PageLayer/selectors.ts");
			const kt = Object(N.a)(fe.G),
				St = Object(N.a)(fe.H),
				jt = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						i = Object(Ot.r)(r, {
							pageLayer: t
						});
					if (!i) return;
					const a = Object(S.q)(r, {
						field: e
					});
					if (!a) return;
					const c = Object(S.f)(r),
						d = await ((e, t, n, o, s) => Object(W.a)(Object(V.a)(e, [q.a]), {
							endpoint: `${e.apiUrl}/api/validate_submission_field`,
							method: m.cb.POST,
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
						}).then(Z.b))(s(), i.name, e, c, a),
						u = d.error || function(e, t) {
							if (e === m.ob.LINK && !Object(_t.g)(_t.e, t.url || "")) return {
								fields: [{
									field: m.ob.LINK,
									msg: l.fbt._("Link doesn't look right", null, {
										hk: "11qrsa"
									})
								}],
								type: m.E.SUBMIT_VALIDATION_ERROR
							}
						}(e, a);
					u && u.fields && u.fields.length ? n(kt(u)) : n(St(e)), d.error && n(Ee(d.error))
				};
			var wt = n("./src/reddit/components/Flair/index.tsx"),
				Tt = n("./src/reddit/controls/TextButton/index.tsx"),
				It = n("./src/reddit/controls/Typography/index.tsx"),
				Pt = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/OCDisclaimer/index.m.less"),
				Mt = n.n(Pt);
			const {
				fbt: Nt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Rt = ut.a.wrapped(Tt.a, "DontShowButton", Mt.a);
			var Dt, Bt = ut.a.wrapped(e => {
					const {
						className: t,
						onDoNotShowClick: n
					} = e;
					return s.a.createElement("div", {
						className: t
					}, s.a.createElement(It.a, null, Nt._("Use the OC tag if you want to take credit for your post as Original Content.", null, {
						hk: "2D3GYX"
					})), s.a.createElement(It.a, null, s.a.createElement(Rt, {
						onClick: n
					}, Nt._("Cool, whatever, don't show me this again.", null, {
						hk: "4nvsEF"
					}))))
				}, "Component", Mt.a),
				Lt = n("./src/reddit/components/PostCreationForm/DivButton/index.tsx"),
				Ft = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				At = n("./src/reddit/constants/colors.ts"),
				Kt = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			! function(e) {
				e.CHAT = "chat", e.FLAIR = "flair", e.GOVERNANCE = "gov", e.SPOILER = "spoiler", e.NSFW = "nsfw", e.ORIGINAL_CONTENT = "originalContent", e.SCHEDULE = "schedule"
			}(Dt || (Dt = {}));
			var Ut = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/PostModifierButton/index.m.less"),
				Ht = n.n(Ut);
			const Wt = ut.a.div("TintOverlay", Ht.a),
				zt = (e, t) => {
					switch (t) {
						case Dt.ORIGINAL_CONTENT:
							return {
								backgroundColor: At.b.orangered, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Dt.CHAT:
							return {
								backgroundColor: At.b.chat, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Dt.SPOILER:
							return {
								backgroundColor: At.b.spoiler, textColor: e.newCommunityTheme.lightText, iconColor: e.newCommunityTheme.lightText
							};
						case Dt.NSFW:
							return {
								backgroundColor: At.b.nsfw, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Dt.FLAIR:
							return {
								backgroundColor: e.newCommunityTheme.flair, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Dt.SCHEDULE:
							return {
								backgroundColor: e.newCommunityTheme.active, textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							};
						case Dt.GOVERNANCE:
							return {
								backgroundColor: e.newCommunityTheme.line, textColor: e.newCommunityTheme.bodyText, iconColor: e.newCommunityTheme.bodyText
							};
						default:
							return {
								backgroundColor: "none", textColor: e.newCommunityTheme.body, iconColor: e.newCommunityTheme.body
							}
					}
				},
				Vt = e => Object(vt.a)(t => {
					const {
						addModifierTooltip: n,
						children: o,
						className: r,
						disabled: i,
						disabledTooltip: a,
						Icon: c,
						id: l,
						onClick: d,
						removeModifierTooltip: u,
						style: p,
						text: m,
						theme: h,
						toggled: f
					} = t, b = Object(Kt.a)(), g = i && a ? a : f ? u : n, x = {
						color: t.textColor || h && zt(h, e).textColor,
						fill: t.textColor || h && zt(h, e).iconColor,
						backgroundColor: t.backgroundColor || h && zt(h, e).backgroundColor,
						borderColor: "transparent"
					};
					return b ? s.a.createElement(Ye.q, {
						"aria-label": g,
						className: Object(Ge.a)(r, Ht.a.PostModifierButton, Ht.a.is2020),
						disabled: i,
						Icon: c,
						id: l,
						onClick: d,
						priority: Ye.b.Secondary,
						style: {
							...p,
							...f ? x : {}
						},
						text: m
					}, s.a.createElement(Ft.a, {
						text: g,
						className: Ht.a.HoverTooltip,
						tooltipContentClass: t.shiftTooltipToRight ? Ht.a.mShiftTooltipToTheRight : void 0
					}), o) : s.a.createElement(Lt.a, {
						style: {
							...p,
							...f ? x : {}
						},
						"aria-label": g,
						className: Object(Ge.a)(r, Ht.a.PostModifierButton, Ht.a.isLegacy),
						disabled: i,
						id: l,
						onClick: d
					}, s.a.createElement(Ft.a, {
						text: g,
						className: Ht.a.HoverTooltip,
						tooltipContentClass: t.shiftTooltipToRight ? Ht.a.mShiftTooltipToTheRight : void 0
					}), s.a.createElement(Wt, {
						className: Object(Ge.a)(Ht.a.TintOverlay, {
							[Ht.a.isDisabled]: i
						})
					}, c && s.a.createElement(c, null), m, o))
				});
			var qt = n("./src/reddit/constants/postCreation.ts"),
				Gt = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				Jt = n("./src/reddit/icons/fonts/Create/index.tsx"),
				Qt = n("./src/reddit/icons/fonts/Live/index.tsx"),
				Zt = n("./src/higherOrderComponents/asTooltip.tsx"),
				Xt = n("./src/reddit/components/PostCreationForm/EduTooltips/BaseEduTooltip/index.m.less"),
				Yt = n.n(Xt);
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
			var on = Object(Zt.a)(nn),
				sn = n("./node_modules/lodash/debounce.js"),
				rn = n.n(sn),
				an = n("./src/reddit/actions/modal.ts"),
				cn = n("./src/reddit/helpers/localStorage/index.ts"),
				ln = n("./src/reddit/helpers/trackers/postCollection.ts");
			const dn = [{
					id: qt.d,
					getShowTimesLeft: cn.z,
					setShowTimesLeft: cn.pb,
					tooltipShown: ln.n,
					tooltipDismissed: ln.m
				}, {
					id: qt.c,
					getShowTimesLeft: cn.y,
					setShowTimesLeft: cn.ob,
					tooltipShown: ln.f,
					tooltipDismissed: ln.e
				}],
				un = {};
			let pn;
			const mn = () => (void 0 === pn && (pn = dn.filter(e => e.getShowTimesLeft() > 0).map(e => e.id)), pn),
				hn = e => {
					const t = mn().indexOf(e);
					t > -1 && mn().splice(t, 1)
				},
				fn = e => async (t, n) => {
					const o = dn.find(t => t.id === e);
					o && (bn(o, !0), Object(R.a)(o.tooltipDismissed(n())))
				}, bn = (e, t) => {
					e.setShowTimesLeft(t ? 0 : e.getShowTimesLeft() - 1)
				}, gn = () => async (e, t) => {
					const n = Object(O.a)(t()),
						o = mn().find(e => !!un[e]);
					if (!o || o === n) return;
					const s = dn.find(e => e.id === o);
					s && (Object(R.a)(s.tooltipShown(t())), bn(s)), e(an.i(o))
				}, xn = rn()(e => e(), 100);

			function Cn(e, t) {
				const n = Object(i.c)({
					isOpen: e => Object(O.a)(e) === t
				});
				class o extends s.a.Component {
					componentDidMount() {
						un[t] = !0, xn(this.props.onShowNextTooltip)
					}
					componentWillUnmount() {
						un[t] = !1, xn(this.props.onShowNextTooltip)
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
						hn(t), n && e(fn(t)), e(an.i(t)), e(gn())
					},
					onShowNextTooltip: () => e(gn())
				}))(o)
			}
			var yn = n("./src/reddit/components/PostCreationForm/EduTooltips/EventButtonTooltip/index.m.less"),
				En = n.n(yn);
			var vn, _n = Cn(e => {
					const {
						onCloseTooltip: t
					} = e;
					return s.a.createElement(on, {
						className: En.a.container,
						description: l.fbt._("Let your community know about discussion threads, AMA’s or even a game thread.", null, {
							hk: "4aMUL6"
						}),
						heroImagePath: `${U.a.assetPath}/img/events-tooltip-hero@2x.png`,
						iconsExplanations: [{
							iconComponent: Jt.a,
							text: l.fbt._("Compose a post like normal.", null, {
								hk: "so4h7"
							})
						}, {
							iconComponent: Gt.a,
							text: l.fbt._("Schedule when the event is happening.", null, {
								hk: "2EoghL"
							})
						}, {
							iconComponent: Qt.a,
							text: l.fbt._("Remind your community when its live.", null, {
								hk: "2W4fY"
							})
						}],
						isOpen: !0,
						isOverlayOff: !0,
						onClose: t,
						title: l.fbt._("Make an Event", null, {
							hk: "4Bz0L3"
						}),
						tooltipId: qt.a
					})
				}, qt.d),
				On = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx"),
				kn = n("./src/reddit/components/PostFlairPicker/index.tsx");
			! function(e) {
				e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
			}(vn || (vn = {}));
			var Sn = n("./src/reddit/helpers/trackers/postEvent.ts"),
				jn = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				wn = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				Tn = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				In = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				Pn = n("./src/reddit/icons/svgs/Tag/index.tsx"),
				Mn = n("./src/reddit/models/Subreddit/index.ts"),
				Nn = n("./src/reddit/selectors/chatPost.ts");
			const Rn = e => e.creations.formState.fieldValidation;
			var Dn = n("./src/telemetry/models/PostComposer.ts"),
				Bn = n("./src/reddit/components/PostCreationForm/ControlRow/PostModifiers/index.m.less"),
				Ln = n.n(Bn);
			const Fn = "PostFlair--Modal--CreationForm",
				An = e => {
					let t = Object(ht.f)(e.startDate).toLocaleDateString(void 0, {
						month: "numeric",
						day: "numeric",
						hour: "numeric",
						minute: "numeric"
					});
					return t = t.replace(" ", "").replace(",", " ")
				},
				Kn = ut.a.wrapped(Tn.b, "StyledCaretIcon", Ln.a),
				Un = ut.a.wrapped(Gt.a, "CalendarIcon", Ln.a),
				Hn = ut.a.wrapped(nt.a, "PencilIcon", Ln.a),
				Wn = ut.a.wrapped(jn.a, "ChatIcon", Ln.a),
				zn = ut.a.wrapped(wn.a, "CheckmarkIcon", Ln.a),
				Vn = ut.a.wrapped(In.a, "PlusIcon", Ln.a),
				qn = ut.a.wrapped(wt.b, "FlairComponent", Ln.a),
				Gn = ut.a.wrapped(Pn.a, "FlairIcon", Ln.a),
				Jn = ut.a.div("FlairTextWrapper", Ln.a),
				Qn = ut.a.wrapped(ot.a, "ModifierRow", Ln.a),
				Zn = Vt(Dt.ORIGINAL_CONTENT),
				Xn = Vt(Dt.CHAT),
				Yn = Vt(Dt.SPOILER),
				$n = Vt(Dt.NSFW),
				eo = Vt(Dt.FLAIR),
				to = Vt(Dt.SCHEDULE),
				no = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				}),
				oo = Object(i.c)({
					activeModalId: O.a,
					canAddPostFlair: S.c,
					canPostAsModerator: S.e,
					currentSubredditId: v.m,
					destSubreddit: S.h,
					destSubredditAboutInfo: S.g,
					eventSchedule: S.p,
					isChatPostAvailable: Nn.a,
					isChatPostSelected: S.C,
					isNsfw: S.H,
					isSpoiler: S.M,
					isOriginalContent: S.I,
					flair: S.r,
					postCreationFieldErrors: Rn,
					postSchedule: S.W,
					submissionType: S.a
				}),
				so = Object(r.b)(oo, (e, {
					onPostFieldValidation: t,
					pageLayer: n
				}) => ({
					doNotShowOriginalContentDisclaimerClicked: () => e((e, t) => _.d(t())),
					onEventScheduleChange: t => {
						e(a.a(t))
					},
					postFlairAdded: o => {
						e(a.b(o)), t(e(jt(m.ob.FLAIR, n)))
					},
					toggleSchedulePicker: (t, n) => {
						e(a.w(b.f)), t && e((e, t) => {
							(n ? Sn.g : Sn.f)(t())
						})
					},
					toggleChatPostTag: t => {
						e(a.r(!t)), e((e, n) => _.y(n(), !t, Dn.ToggleNoun.CHAT))
					},
					toggleFlairPicker: () => e(a.w(Fn)),
					toggleNsfwTag: t => {
						e(a.s(!t)), e((e, n) => _.y(n(), !t, Dn.ToggleNoun.NSFW))
					},
					toggleOriginalContentTag: t => {
						e(a.t(!t)), e((e, n) => _.y(n(), !t, Dn.ToggleNoun.ORIGINAL_CONTENT))
					},
					toggleSpoilerTag: t => {
						e(a.v(!t)), e((e, n) => _.y(n(), !t, Dn.ToggleNoun.SPOILER))
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
						e(), Object(cn.Y)(vn.ORIGINAL_CONTENT_DISCLAIMER, !0), this.setState({
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
						const e = this.props.activeModalId !== b.f,
							t = !!this.props.eventSchedule;
						this.props.toggleSchedulePicker(e, t)
					}
				}
				componentDidMount() {
					this.setState({
						showOCDisclaimer: !Object(cn.h)(vn.ORIGINAL_CONTENT_DISCLAIMER)
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
						eventSchedule: c,
						disabled: d,
						flair: u,
						isChatPostAvailable: p,
						isChatPostSelected: h,
						isNsfw: f,
						isSpoiler: g,
						isOriginalContent: x,
						postCreationFieldErrors: C,
						postSchedule: y,
						submissionType: E,
						theme: v,
						toggleFlairPicker: _
					} = this.props, {
						showOCDisclaimer: O
					} = this.state, k = !!u, {
						backgroundColor: S = null,
						textColor: j = null
					} = u || {}, {
						allOriginalContent: w = !1,
						eventPostsEnabled: T = !1
					} = a || {}, I = i.isProfile || Object(Mn.f)(a), P = d || !I || w || E === m.Lb.CROSSPOST, M = d, N = d || !!y;
					return s.a.createElement("div", {
						className: o
					}, s.a.createElement(Qn, null, p && s.a.createElement(Xn, {
						disabled: M,
						onClick: this.handleChatPostClick,
						toggled: h,
						addModifierTooltip: l.fbt._("Use live chat instead of comments", null, {
							hk: "27t9lW"
						}),
						removeModifierTooltip: l.fbt._("Use comments instead of live chat", null, {
							hk: "3seokS"
						}),
						Icon: h ? zn : Wn,
						text: l.fbt._("Live Chat", null, {
							hk: "cZlvm"
						})
					}), n && T && s.a.createElement(to, {
						disabled: N,
						id: qt.a,
						onClick: this.handleToggleSchedulePicker,
						shiftTooltipToRight: !0,
						toggled: !!c,
						addModifierTooltip: l.fbt._("Add time and date info", null, {
							hk: "L2KN8"
						}),
						removeModifierTooltip: l.fbt._("Edit event data", null, {
							hk: "1FSblM"
						}),
						Icon: Un,
						text: c ? An(c) : l.fbt._("Event", null, {
							hk: "40pq7b"
						})
					}, s.a.createElement(_n, null), c && s.a.createElement(Hn, null)), e === b.f && s.a.createElement(On.default, {
						schedule: this.props.eventSchedule,
						onClose: this.handleToggleSchedulePicker,
						onChange: this.props.onEventScheduleChange,
						shouldShowSubmitTime: !0,
						shouldShowDeleteButton: !0
					}), s.a.createElement(Zn, {
						disabled: P,
						onClick: this.handleOriginalContentClick,
						shiftTooltipToRight: !0,
						toggled: I && (x || w),
						addModifierTooltip: l.fbt._("Mark this post as Original Content [OC]", null, {
							hk: "3V5aHC"
						}),
						removeModifierTooltip: l.fbt._("Unmark this post as Original Content [OC]", null, {
							hk: "2oj9GI"
						}),
						disabledTooltip: I ? "" : l.fbt._("This community does not allow original content tag", null, {
							hk: "gBN3o"
						}),
						Icon: x ? zn : Vn,
						text: l.fbt._("OC", null, {
							hk: "2GRpRs"
						})
					}), s.a.createElement(Yn, {
						disabled: d,
						onClick: this.handleSpoilerClick,
						toggled: g,
						addModifierTooltip: l.fbt._("Mark as a spoiler", null, {
							hk: "3ICynB"
						}),
						removeModifierTooltip: l.fbt._("Unmark as a spoiler", null, {
							hk: "34pmqg"
						}),
						Icon: g ? zn : Vn,
						text: l.fbt._("Spoiler", null, {
							hk: "1K7ROJ"
						})
					}), s.a.createElement($n, {
						disabled: d,
						onClick: this.handleNsfwClick,
						toggled: f,
						addModifierTooltip: l.fbt._("Mark as Not Safe For Work", null, {
							hk: "1LNeZB"
						}),
						removeModifierTooltip: l.fbt._("Unmark Not Safe For Work", null, {
							hk: "1EcrjD"
						}),
						Icon: f ? zn : Vn,
						text: l.fbt._("NSFW", null, {
							hk: "3Tg62D"
						})
					}), s.a.createElement(eo, {
						className: Object(Ge.a)(Ln.a.AddFlair, {
							[Ln.a.isToggled]: k,
							[Ln.a.mHasError]: C[m.ob.FLAIR].length > 0
						}),
						disabled: !t || d,
						disabledTooltip: i.id ? l.fbt._("Not available for this community", null, {
							hk: "2gkbLI"
						}) : l.fbt._("Select a subreddit to enable flair", null, {
							hk: "1LNvTq"
						}),
						onClick: _,
						toggled: k,
						addModifierTooltip: l.fbt._("Add flair", null, {
							hk: "1RHLMM"
						}),
						removeModifierTooltip: l.fbt._("Change or remove flair", null, {
							hk: "34t9cQ"
						}),
						backgroundColor: S,
						textColor: j,
						Icon: Gn,
						style: {
							"--flairColor": k ? Object(wt.c)({
								...this.props,
								backgroundColor: S,
								textColor: j
							}) : !t || d ? v.newCommunityTheme.actionIconTinted80 : v.newCommunityTheme.actionIcon
						},
						text: s.a.createElement(s.a.Fragment, null, u ? s.a.createElement(qn, {
							flair: u,
							forceSmallEmojis: !0
						}) : s.a.createElement(Jn, null, l.fbt._("Flair", null, {
							hk: "4Dtvp0"
						})), s.a.createElement(Kn, {
							className: Ln.a.CaretIcon
						}))
					}), e === Fn && s.a.createElement(kn.a, {
						flairs: u ? [u] : [],
						modalId: Fn,
						onFlairChanged: this.handlePostFlairSelected,
						subredditId: r || ""
					})), s.a.createElement($e.a, {
						className: Ln.a.errorMessages,
						messages: C[m.ob.FLAIR]
					}), I && x && O && s.a.createElement(Bt, {
						onDoNotShowClick: this.handleOCDisclaimerDoNotShowClick
					}))
				}
			}
			var io = no(Object(vt.a)(so(ro))),
				ao = n("./src/reddit/icons/fonts/AddCollection/index.tsx"),
				co = n("./src/reddit/icons/fonts/Plus/index.tsx"),
				lo = n("./src/reddit/components/PostCreationForm/EduTooltips/CollectionButtonTooltip/index.m.less"),
				uo = n.n(lo);
			var po = Cn(e => s.a.createElement(on, {
					className: uo.a.container,
					description: l.fbt._("Create a series of scheduled events or just group random things. Make something awesome.", null, {
						hk: "40PwoH"
					}),
					heroImagePath: `${U.a.assetPath}/img/collection-tooltip-hero@2x.png`,
					iconsExplanations: [{
						iconComponent: Jt.a,
						text: l.fbt._("Compose a post like normal.", null, {
							hk: "466GER"
						})
					}, {
						iconComponent: ao.a,
						text: l.fbt._("Create & name your collection.", null, {
							hk: "3BuZKz"
						})
					}, {
						iconComponent: co.a,
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
					tooltipId: qt.g
				}), qt.c),
				mo = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ho = n("./src/reddit/components/PostCreationForm/ControlRow/ToggleDestCollectionButton/index.m.less"),
				fo = n.n(ho);
			const bo = ut.a.wrapped(Lt.a, "DivButton", fo.a);
			var go = s.a.memo(e => {
					const {
						disabled: t,
						isToggled: n
					} = e, o = n ? mo.b : ao.a;
					return Object(Kt.a)() ? s.a.createElement(Ye.q, {
						className: fo.a.button2020,
						priority: Ye.b.Plain,
						disabled: t,
						id: qt.g,
						onClick: e.onClick,
						Icon: o
					}, s.a.createElement(Ft.a, {
						text: n ? l.fbt._("Cancel adding to collection", null, {
							hk: "359w09"
						}) : l.fbt._("Add to collection", null, {
							hk: "48nVCZ"
						})
					}), !n && s.a.createElement(po, null)) : s.a.createElement(s.a.Fragment, null, s.a.createElement(bo, {
						className: Object(Ge.a)(fo.a.button, t ? fo.a.disabled : null),
						disabled: t,
						id: qt.g,
						onClick: e.onClick
					}, s.a.createElement(o, {
						className: fo.a.icon
					}), s.a.createElement(Ft.a, {
						text: n ? l.fbt._("Cancel adding to collection", null, {
							hk: "359w09"
						}) : l.fbt._("Add to collection", null, {
							hk: "48nVCZ"
						})
					})), !n && s.a.createElement(po, null))
				}),
				xo = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Co = n("./src/reddit/components/PostCreationForm/ControlRow/index.m.less"),
				yo = n.n(Co);
			const Eo = () => l.fbt._("Post", null, {
					hk: "47QFCY"
				}),
				vo = () => l.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}),
				_o = () => l.fbt._("Saved!", null, {
					hk: "34qXtS"
				}),
				Oo = () => l.fbt._("Save Draft", null, {
					hk: "3wckxd"
				}),
				ko = () => l.fbt._("Updated!", null, {
					hk: "45fGGU"
				}),
				So = () => l.fbt._("Update draft", null, {
					hk: "1c8tCb"
				}),
				jo = () => l.fbt._("Please fix the above requirements", null, {
					hk: "17Yk98"
				}),
				wo = () => l.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4x2ypi"
				}),
				To = 10,
				Io = ut.a.wrapped(ot.a, "Container", yo.a),
				Po = e => {
					return [m.Lb.LINK_ONLY, m.Lb.POLL, m.Lb.POST].includes(e)
				},
				Mo = ut.a.div("ButtonsAndErrors", yo.a),
				No = ut.a.wrapped(ot.a, "ButtonRow", yo.a),
				Ro = ut.a.div("ButtonLayout", yo.a),
				Do = ut.a.div("SaveDraftButtonLayout", yo.a),
				Bo = ut.a.wrapped(et.a, "PostLoadingIcon", yo.a),
				Lo = ut.a.wrapped(Bo, "DraftLoadingIcon", yo.a),
				Fo = ut.a.wrapped(Ze.a, "Token", yo.a),
				Ao = Object(i.a)(S.Z, K.a.getMediaCount),
				Ko = (e, t) => {
					return !!!Object(v.j)(e, t) && e.creations.formData.isPoll
				},
				Uo = [],
				Ho = e => {
					const t = Object(S.Z)(e),
						n = Object(S.fb)(e);
					if (!t.isBound || n !== m.Lb.POST || !Object(S.bb)(e)) return Uo;
					const o = (e => {
						const {
							allowedPostTypes: t,
							name: n
						} = Object(S.h)(e), o = Ao(e);
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
						const t = Ao(e);
						if (!t) return Uo;
						const n = [];
						return t.image > m.T && n.push(l.fbt._("Post may not contain more that 20 images", null, {
							hk: "1Szc36"
						})), t.video + t.gifvideo > m.W && n.push(l.fbt._("Post may not contain more that 5 videos", null, {
							hk: "2WhZ8k"
						})), n
					})(e)
				},
				Wo = (e, {
					sourcePostId: t
				}) => {
					const n = Object(S.db)(e, {
							sourcePostId: t
						}),
						{
							allowedPostTypes: o,
							id: s,
							isProfile: r,
							name: i
						} = Object(S.h)(e);
					if (!t) return l.fbt._("A source post is required to crosspost", null, {
						hk: "2TeLDw"
					});
					if (!s) return l.fbt._("A destination community is required to crosspost", null, {
						hk: "3haidF"
					});
					const a = r ? Object(T.cb)(e, {
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
							})(e, a, t)) return l.fbt._("Checking community...", null, {
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
								return 0 !== o.length && Object(ct.A)(e, o[0])
							})(e, a, t)) return l.fbt._("This community has the same crosspost within last 24 hours", null, {
							hk: "177pgf"
						})
					}
					if (!o || !n) return null;
					if (n.source) return !o.links && l.fbt._("This community does not allow for crossposting of link posts", null, {
						hk: "2cZPxJ"
					});
					const {
						isCrosspostableSubreddit: c
					} = Object(w.x)(e, {
						subredditName: i
					});
					if (!c) return l.fbt._("This community does not allow for crossposting of any posts", null, {
						hk: "2KrrAO"
					});
					switch (n.media && n.media.type) {
						case st.o.TEXT:
						case st.o.RTJSON:
							return !o.text && l.fbt._("This community does not allow for crossposting of text posts", null, {
								hk: "1a4voI"
							});
						case st.o.IMAGE:
							return !o.images && l.fbt._("This community does not allow for crossposting of image posts", null, {
								hk: "tGzk7"
							});
						case st.o.VIDEO:
						case st.o.GIFVIDEO:
						case st.o.EMBED:
							return !o.videos && l.fbt._("This community does not allow for crossposting of video posts", null, {
								hk: "w6HED"
							})
					}
					return null
				},
				zo = (e, {
					sourcePostId: t
				}) => {
					const n = Object(S.P)(e),
						o = Object(S.Z)(e),
						s = Object(S.fb)(e);
					if (s === m.Lb.IMAGE_ONLY) return !1;
					if (!Object(S.h)(e).name || !Object(S.A)(e)) return !1;
					if (s === m.Lb.POST || s === m.Lb.POLL) {
						const t = Ho(e),
							n = !K.a.isAllMediaUploaded(o, e.uploads);
						return !t.length && !n
					}
					if (s === m.Lb.MEDIA) {
						const {
							items: t
						} = n, o = t.every(t => {
							const n = e.uploads[t.uploadKey];
							return !(!n || !n.url || n.status !== rt.a.SUCCESS)
						});
						return t.length > 0 && o
					}
					return s === m.Lb.LINK_ONLY ? Object(S.v)(e) : s === m.Lb.CROSSPOST && !Wo(e, {
						sourcePostId: t
					})
				},
				Vo = Object(i.c)({
					isPoll: Ko,
					activeModalId: O.a,
					currentSubredditOrProfile: v.o,
					canPostAsModerator: S.e,
					currentCollection: v.f,
					errorMsgs: (e, {
						sourcePostId: t
					}) => {
						if (Object(S.t)(e)) return Object(S.o)(e);
						if (t) {
							const n = Wo(e, {
								sourcePostId: t
							});
							if (n) return [n]
						}
						return Ho(e)
					},
					eventSchedule: S.p,
					hasDraftError: j.f,
					hasError: S.t,
					hasSubmitValidationError: S.u,
					destSubreddit: S.h,
					destSubredditAboutInfo: S.g,
					isChatPostSelected: S.C,
					isContestMode: S.D,
					isDraftsFeatureEnabled: (e, t) => !Ko(e, t),
					isDraftPending: j.g,
					isMediaUploadPending: S.Q,
					isModeratorSomewhere: it.g,
					isPostAsMetaMod: S.J,
					isPostPending: S.hb,
					isPostSubmitEnabled: zo,
					isSaveDraftEnabled: e => {
						const t = Object(S.fb)(e);
						if (!m.D.has(t) || !Object(S.B)(e)) return !1;
						const n = Object(S.h)(e),
							o = Object(S.n)(e),
							s = t === m.Lb.LINK_ONLY && Object(S.v)(e),
							r = t === m.Lb.POST && o === b.h.RICH_TEXT && Object(S.z)(e),
							i = t === m.Lb.POST && o === b.h.MARKDOWN && Object(S.w)(e),
							a = s || r || i;
						return !!n.name || Object(S.A)(e) || a
					},
					isScheduledPost: S.L,
					postSchedule: S.W,
					postToTwitter: S.Y,
					isEditingScheduledPost: e => !!Object(me.r)(e),
					showContributorRequestFlow: e => Object(w.r)(e, g.e.Post),
					showScheduledPosts: S.cb,
					stickyPosition: S.eb,
					submissionType: S.a,
					submitMode: S.gb,
					subredditGovMeta: e => {
						const t = Object(S.h)(e);
						if (t && t.id) return e.subreddits.gov.meta[t.id]
					},
					suggestedSort: S.jb
				}),
				qo = Object(v.t)(),
				Go = Object(r.b)(Vo, e => ({
					onResetDestCollection: () => e(Ie.c()),
					onScheduledPostSettingsChange: t => e(a.z(t)),
					onTrackCancelButtonClick: () => {
						e((e, t) => _.a(t()))
					},
					openCollectionsListOrCreationModal: t => e(a.l(t)),
					togglePostSchedulePicker: () => e(a.w(b.n)),
					clickPostSchedule: () => {
						e((e, t) => Object(R.a)(Object(ue.i)()(t())))
					}
				})),
				Jo = 2e3,
				Qo = e => e ? l.fbt._("Update", null, {
					hk: "3MoYFL"
				}) : l.fbt._("Schedule", null, {
					hk: "4bXWUG"
				});
			class Zo extends s.a.Component {
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
						n && (o(n.id), s(Object(ln.b)(void 0, ln.a.collectionComposer)))
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
						return !!e || t || !Po(n)
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
					return t ? n ? ko() : _o() : e ? So() : Oo()
				}
				render() {
					const {
						activeModalId: e,
						canPostAsModerator: t,
						currentCollection: n,
						className: r,
						destSubreddit: i,
						destSubredditAboutInfo: a,
						hasError: c,
						hasSubmitValidationError: d,
						isEditingScheduledPost: u,
						errorMsgs: p,
						isContestMode: h,
						isDraftsFeatureEnabled: f,
						isDraftPending: x,
						isPoll: C,
						isMediaUploadPending: y,
						isPostAsMetaMod: E,
						isPostPending: v,
						isSaveDraftEnabled: _,
						isScheduledPost: O,
						onPostFieldValidation: k,
						onScheduledPostSettingsChange: S,
						onSaveDraft: j,
						onSubmit: w,
						postSchedule: T,
						sendEvent: I,
						showContributorRequestFlow: P,
						showScheduledPosts: M,
						stickyPosition: N,
						submissionType: R,
						submitMode: D,
						subredditGovMeta: B,
						suggestedSort: L,
						togglePostSchedulePicker: F
					} = this.props, {
						isSaved: A
					} = this.state, K = x || v || y, U = D === b.q.Post && y, H = D === b.q.Draft && y, {
						collectionsEnabled: W = !1
					} = a || {}, z = K, V = Object(Ge.a)(yo.a.ButtonLayout, {
						[yo.a.autoWidth]: C || P || M
					});
					return s.a.createElement(Io, {
						className: r
					}, s.a.createElement(io, {
						className: yo.a.postModifiers,
						disabled: K,
						onPostFieldValidation: k
					}), s.a.createElement(Mo, null, s.a.createElement(No, null, s.a.createElement("div", {
						className: V
					}, P ? s.a.createElement(Qe.a, {
						eventSource: g.b.PostSubmission,
						smallButton: !0
					}) : s.a.createElement(pt, {
						disabled: this.shouldDisablePostButton(),
						onClick: w,
						className: Object(Ge.a)(M && yo.a.removeRightBorderRadius)
					}, v || U ? s.a.createElement(Bo, {
						sizePx: To
					}) : s.a.createElement(o.Fragment, null, C && B && B.polls && B.polls.price && i.id ? s.a.createElement(o.Fragment, null, Eo(), s.a.createElement(Fo, {
						subredditId: i.id
					}), Object(Je.a)(B.polls.price)) : O ? Qo(u) : Eo())), M && s.a.createElement(pt, {
						title: l.fbt._("Make a scheduled post", null, {
							hk: "3TBSMs"
						}),
						disabled: this.shouldDisablePostScheduleButton(),
						onClick: this.openPostSchedulePickerModal,
						className: yo.a.postScheduleButton,
						Icon: T ? Object(Ye.r)(nt.a, yo.a.postScheduleIcon) : Object(Ye.r)(tt.a, yo.a.postScheduleIcon)
					})), e === b.n && s.a.createElement(Xe.a, {
						isContestMode: h,
						isPostAsMetaMod: E,
						sendEvent: I,
						schedule: T,
						stickyPosition: N,
						suggestedSort: L,
						onChange: S,
						onClose: F
					}), f && R !== m.Lb.MEDIA && R !== m.Lb.POLL && !O ? s.a.createElement(Do, null, s.a.createElement(mt, {
						disabled: !_ || K || A,
						onClick: j
					}, x || H ? s.a.createElement(Lo, {
						sizePx: To
					}) : this.getSaveDraftButtonText())) : s.a.createElement(Ro, null, s.a.createElement(mt, {
						disabled: K || A,
						onClick: this.onCancel
					}, vo())), W && t && s.a.createElement(go, {
						disabled: z,
						isToggled: !!n,
						onClick: this.handleDestCollectionClick
					})), s.a.createElement(Et, null), !!(c || p.length || d) && s.a.createElement($e.a, {
						className: yo.a.errorMessages,
						messages: p,
						fallbackMessage: d ? jo() : wo()
					})))
				}
			}
			var Xo = qo(Go(Object(xo.c)(Zo))),
				Yo = n("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				$o = n("./src/reddit/constants/posts.ts"),
				es = n("./src/reddit/controls/SubredditPicker/index.tsx"),
				ts = n("./src/reddit/controls/SubredditPicker/helpers.ts"),
				ns = n("./src/reddit/components/PostCreationForm/CreationControls/index.m.less"),
				os = n.n(ns);
			const ss = ut.a.wrapped(es.a, "SubredditPicker", os.a),
				rs = ut.a.wrapped(ot.a, "ControlRow", os.a),
				is = Object(i.a)(S.h, O.a, S.S, T.i, v.q, T.B, (e, t, n, o, s, r) => {
					const i = n && !t ? n : e;
					if (!i || !i.name) return Object(ts.b)("", null, null, r);
					const {
						name: a,
						isProfile: c
					} = i;
					return c ? Object(ts.b)(Object(Q.d)(a), null, o, r) : Object(ts.b)(Object(Q.c)(a), s, null, r)
				}),
				as = Object(i.c)({
					pending: S.U,
					pickerValue: is
				}),
				cs = Object(r.b)(as, (e, {
					draftId: t,
					pageLayer: n
				}) => ({
					onSubredditChangeRequested: t => e(Ie.b(t, n)),
					onTrackSubredditPickerClick: () => e((e, t) => _.w(t()))
				}));
			class ls extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.inputRef = null, this.onSelectSubreddit = e => {
						const {
							rawString: t,
							record: n
						} = e, o = {
							name: n && n.name || Object(Q.g)(t),
							isProfile: n && n.type === $o.a.PROFILE || Object(Q.f)(t),
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
			var ds = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				})(cs(ls)),
				us = n("./node_modules/lodash/range.js"),
				ps = n.n(us),
				ms = n("./src/higherOrderComponents/asModal/index.tsx"),
				hs = n("./src/reddit/icons/svgs/Close/index.tsx"),
				fs = n("./src/lib/timeAgo/index.ts"),
				bs = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				gs = n("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				xs = n("./src/reddit/icons/fonts/Link/index.tsx"),
				Cs = n("./src/reddit/icons/fonts/Photos/index.tsx"),
				ys = n("./src/reddit/icons/fonts/Text/index.tsx"),
				Es = n("./src/reddit/models/PostDraft/index.ts"),
				vs = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Icon.m.less"),
				_s = n.n(vs);
			const Os = {
				[Es.b.Image]: Cs.a,
				[Es.b.Link]: xs.a,
				[Es.b.Markdown]: ys.a,
				[Es.b.RichText]: ys.a,
				[Es.b.Video]: gs.a
			};
			var ks = ut.a.wrapped(e => {
					const {
						draftKind: t,
						...n
					} = e, o = Os[t] || xs.a;
					return s.a.createElement(o, n)
				}, "Component", _s.a),
				Ss = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/index.m.less"),
				js = n.n(Ss);
			const ws = ut.a.div("Container", js.a),
				Ts = ut.a.div("LeftBlock", js.a),
				Is = ut.a.div("Content", js.a),
				Ps = ut.a.div("RightBlock", js.a),
				Ms = ut.a.h2("PostTitle", js.a),
				Ns = ut.a.wrapped(Ms, "EditingPostTitle", js.a),
				Rs = ut.a.div("MetaLine", js.a),
				Ds = ut.a.span("SubredditName", js.a),
				Bs = ut.a.time("DraftSavedTime", js.a),
				Ls = ut.a.wrapped(mo.b, "TrashIcon", js.a),
				Fs = ut.a.div("InteractiveDiv", js.a),
				As = ut.a.button("ConfirmDelete", js.a),
				Ks = Object(i.c)({
					isDraftDeletionPending: (e, {
						draft: {
							id: t
						}
					}) => Object(j.a)(e, t),
					subreddit: (e, {
						draft: {
							subredditId: t
						}
					}) => t ? Object(w.S)(e, {
						subredditId: t
					}) : void 0,
					user: T.i
				}),
				Us = Object(r.b)(Ks, (e, {
					pageLayer: t
				}) => ({
					deleteDraft: n => e(L.o(n, t))
				})),
				Hs = Object(v.t)({
					currentDraftId: v.u,
					pageLayer: e => e
				}),
				Ws = 1e3;
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
						displayText: Object(Q.d)(Object(pe.e)(r)),
						url: `/user/${Object(pe.e)(r)}/`
					} : o;
					if (n) return null;
					const a = e.title || l.fbt._("Untitled", null, {
						hk: "2gEXjp"
					});
					return s.a.createElement(ws, {
						onClick: this.onClick
					}, s.a.createElement(Ts, null, s.a.createElement(ks, {
						draftKind: e.kind
					})), s.a.createElement(Is, null, t === e.id ? s.a.createElement(Ns, {
						"data-redditstyle": !0
					}, l.fbt._("EDITING: {postTitle}", [l.fbt._param("postTitle", a)], {
						hk: "3M5MUj"
					})) : s.a.createElement(Ms, {
						"data-redditstyle": !0
					}, a), s.a.createElement(Rs, {
						"data-redditstyle": !0
					}, i && s.a.createElement(Ds, {
						"data-redditstyle": !0
					}, i.displayText), i && s.a.createElement(bs.b, null), s.a.createElement(Bs, null, l.fbt._("Draft saved {draftSavedAtTime}", [l.fbt._param("draftSavedAtTime", Object(fs.d)((e.modified || e.created) / Ws))], {
						hk: "2HjAWY"
					})))), s.a.createElement(Ps, null, this.state.showConfirmText ? s.a.createElement(As, {
						onClick: this.onConfirmClick,
						"data-redditstyle": !0
					}, t === e.id ? l.fbt._("Delete working draft?", null, {
						hk: "2iGoUj"
					}) : l.fbt._("Confirm", null, {
						hk: "2bjb66"
					})) : s.a.createElement(Fs, {
						onClick: this.onTrashCanClick
					}, s.a.createElement(Ls, {
						"data-redditstyle": !0
					}))))
				}
			}
			var Vs = Hs(Us(zs)),
				qs = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				Gs = n("./src/reddit/components/PostCreationForm/DraftListModal/DraftListItem/Placeholder.m.less"),
				Js = n.n(Gs);
			const Qs = ut.a.div("Container", Js.a),
				Zs = ut.a.div("LeftBlock", Js.a),
				Xs = ut.a.div("Content", Js.a),
				Ys = ut.a.div("MediaIcon", Js.a),
				$s = ut.a.div("Title", Js.a),
				er = ut.a.div("Secondary", Js.a);
			var tr = ({
					className: e,
					isLoading: t
				}) => s.a.createElement(Qs, {
					className: e,
					"data-redditstyle": !0
				}, s.a.createElement(Zs, null, s.a.createElement(Ys, {
					className: Object(qs.a)({
						isLoading: t
					}),
					"data-redditstyle": !0
				})), s.a.createElement(Xs, null, s.a.createElement($s, {
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ir = `${U.a.assetPath}/img/snoo-drafts.png`, ar = 3, cr = ut.a.div("Wrapper", or.a), lr = ut.a.div("TitleRow", or.a), dr = ut.a.span("DraftsNumber", or.a), ur = ut.a.div("DetailsContainer", or.a), pr = ut.a.wrapped(ot.a, "ButtonRow", or.a), mr = ut.a.wrapped(Ye.l, "CancelButton", or.a), hr = ut.a.div("CloseWrapper", or.a), fr = ut.a.wrapped(hs.a, "Close", or.a), br = ut.a.div("Empty", or.a), gr = ut.a.img("EmptyImage", or.a), xr = ut.a.p("EmptyText", or.a), Cr = Object(i.c)({
				drafts: j.c,
				isPending: j.b,
				maxDrafts: T.T
			}), yr = Object(r.b)(Cr);
			class Er extends s.a.PureComponent {
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
					return s.a.createElement(br, null, s.a.createElement(gr, {
						src: ir
					}), s.a.createElement(xr, null, rr._("Your drafts will live here", null, {
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
					return o = t ? ps()(ar).map(this.renderPlaceholder) : 0 === e.length ? this.renderEmpty() : e.map(this.renderItem), s.a.createElement(cr, {
						"data-redditstyle": !0
					}, s.a.createElement(lr, {
						"data-redditstyle": !0
					}, rr._("Drafts", null, {
						hk: "1fvOmI"
					}), s.a.createElement(dr, {
						"data-redditstyle": !0
					}, e.length, "/", n), s.a.createElement(hr, {
						onClick: this.props.onClose
					}, s.a.createElement(fr, {
						"data-redditstyle": !0
					}))), s.a.createElement(ur, null, o), s.a.createElement(pr, {
						"data-redditstyle": !0
					}, s.a.createElement(mr, {
						onClick: this.props.onClose,
						"data-redditstyle": !0
					}, rr._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			const vr = ut.a.wrapped(Object(ms.a)(yr(Er)), "DraftListModal", or.a);
			var _r = e => s.a.createElement(vr, sr({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e)),
				Or = n("./src/lib/forceHttps/index.ts"),
				kr = n("./src/reddit/components/PostCreationForm/SafeHarborText/index.m.less"),
				Sr = n.n(kr);
			const {
				fbt: jr
			} = n("./node_modules/fbt/lib/FbtPublic.js"), wr = new RegExp(`\\b(${[...st.x].join("|")})\\.com$`, "i"), Tr = new RegExp(`\\.(${st.w.join("|")})$`), Ir = ut.a.div("TextContainer", Sr.a);
			class Pr extends s.a.Component {
				constructor() {
					super(...arguments), this.isUrlScraped = e => {
						const t = Object(z.parse)(Object(Or.a)(e));
						return !(!t.hostname || !wr.test(t.hostname)) || !(!t.pathname || !Tr.test(t.pathname))
					}
				}
				render() {
					return this.props.value && this.isUrlScraped(this.props.value) ? s.a.createElement(Ir, null, jr._("Posting this link saves the image or gif to Reddit", null, {
						hk: "1zFV82"
					})) : null
				}
			}
			var Mr = n("./node_modules/react-autosize-textarea/lib/index.js"),
				Nr = n.n(Mr),
				Rr = n("./src/reddit/controls/GrowingOutlinedInput/index.m.less"),
				Dr = n.n(Rr);

			function Br() {
				return (Br = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class Lr extends s.a.Component {
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
					return s.a.createElement(Nr.a, Br({}, i, {
						className: Object(Ge.a)(Dr.a.growingOutlinedInput, t),
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
			var Fr = n("./src/reddit/components/PostCreationForm/LinkEditor/index.m.less"),
				Ar = n.n(Fr);
			const Kr = Object(i.c)({
					pending: S.U,
					postCreationFieldErrors: Rn,
					subreddit: v.q,
					value: S.N
				}),
				Ur = Object(r.b)(Kr, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(jt(m.ob.LINK, o)))
					},
					onChange: n => {
						e(a.p(n)), t(n)
					},
					onFocus: () => e((e, t) => _.n(t(), b.k.CLICK, b.l.URL))
				}));
			var Hr, Wr = Object(v.t)()(Ur(e => {
					const {
						pending: t,
						postCreationFieldErrors: n,
						subreddit: o,
						value: r
					} = e, i = n[m.ob.LINK].length > 0;
					return s.a.createElement("div", null, s.a.createElement(Lr, {
						className: Object(Ge.a)(Ar.a.URLInput, {
							[Ar.a.mHasError]: i
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
					}), s.a.createElement($e.a, {
						errorModalTitle: o ? Object(Q.c)(o.name) : void 0,
						messages: n[m.ob.LINK]
					}), s.a.createElement(Pr, {
						value: r
					}))
				})),
				zr = n("./node_modules/lodash/clamp.js"),
				Vr = n.n(zr),
				qr = n("./node_modules/lodash/pickBy.js"),
				Gr = n.n(qr),
				Jr = n("./src/lib/formatApiError/index.ts"),
				Qr = n("./src/lib/objectSelector/index.ts"),
				Zr = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/isEqual.js")),
				Xr = n.n(Zr),
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
				fbt: ci
			} = n("./node_modules/fbt/lib/FbtPublic.js"), li = [...Array.from(m.a), ...Array.from(m.b)].join(), di = ut.a.input("HiddenInput", ai.a), ui = ut.a.wrapped(Ye.l, "UploadButton", ai.a), pi = ut.a.wrapped(oi.a, "HamsterSmall", ai.a), mi = ut.a.wrapped(si.a, "HamsterLarge", ai.a), hi = ut.a.div("Container", ai.a), fi = ut.a.div("DropArea", ai.a), bi = ut.a.wrapped(fi, "DropAreaActive", ai.a), gi = ut.a.wrapped(bi, "DropAreaOver", ai.a), xi = ut.a.p("Paragraph", ai.a), Ci = ut.a.p("ErrorMsg", ai.a), yi = ut.a.div("Box", ai.a);
			class Ei extends s.a.Component {
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
						accept: li,
						multiple: o
					}), e ? s.a.createElement(gi, null, s.a.createElement(yi, null, s.a.createElement(mi, null), s.a.createElement(xi, null, ci._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					})))) : t ? s.a.createElement(bi, null, s.a.createElement(yi, null, s.a.createElement(pi, null), ci._("Drop Here to Upload", null, {
						hk: "3e1xuE"
					}))) : s.a.createElement(fi, null, r && s.a.createElement("div", {
						id: i
					}, s.a.createElement(ri.a, {
						tooltipId: i,
						offsetY: -20,
						width: 260,
						height: 40
					}, s.a.createElement("div", null, ci._("Unlock fast, HD video for videos you upload or link from other sites", null, {
						hk: "3BdUgW"
					})))), s.a.createElement(xi, null, ci._("Drag and drop {images} or {upload}", [ci._param("images", o ? "images" : ""), ci._param("upload", s.a.createElement(ui, {
						onClick: this.clickUploadButton
					}, ci._("Upload", null, {
						hk: "4dwHCO"
					})))], {
						hk: "2gpX4v"
					})), n && s.a.createElement(Ci, null, ni()(n))))
				}
			}
			var vi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/AddImageItem.m.less"),
				_i = n.n(vi);

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
					className: _i.a.AddImageWrapper
				}, s.a.createElement("input", {
					accept: li,
					className: _i.a.hiddenInput,
					multiple: !0,
					onChange: a,
					ref: r,
					type: "file"
				}), s.a.createElement("button", {
					className: _i.a.AddImageItem,
					onClick: i
				}, s.a.createElement(In.a, {
					className: _i.a.plusIcon
				})))
			}
			var ki = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				Si = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				ji = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItem.m.less"),
				wi = n.n(ji);
			var Ti = e => {
					const {
						canDrop: t,
						mediaUpload: n,
						isDragging: r,
						isOver: i,
						isSelected: a,
						mediaItem: c,
						removeGalleryItem: l,
						dispatch: d
					} = e, u = Object(o.useRef)(null), p = n.key, m = n.status === rt.a.FAILED, h = Object(o.useCallback)(() => d((e => ({
						type: Hr.SelectGalleryItem,
						payload: {
							key: e
						}
					}))(p)), [d, p]), f = Object(o.useCallback)(e => {
						e.stopPropagation(), l(c)
					}, [l, c]), b = n.metadata.localUrl;
					return b ? s.a.createElement("span", {
						ref: u
					}, s.a.createElement(ki.a, {
						canDrop: t,
						className: Object(Ge.a)(wi.a.GalleryMediaUpload, {
							[wi.a.isDragging]: r,
							[wi.a.isSelected]: a,
							[wi.a.isError]: m
						}),
						isDragging: r,
						isOver: i
					}, s.a.createElement("span", {
						className: Object(Ge.a)(wi.a.galleryImage, {
							[wi.a.isDragging]: r,
							[wi.a.isSelected]: a,
							[wi.a.isError]: m
						}),
						onClick: h,
						style: {
							backgroundImage: `url("${b}")`
						}
					}, s.a.createElement("button", {
						className: Object(Ge.a)(wi.a.deleteButton, {
							[wi.a.isDragging]: r,
							[wi.a.showDeleteNormal]: !a,
							[wi.a.isError]: m
						}),
						onClick: f
					}, s.a.createElement(Si.a, {
						className: Object(Ge.a)(wi.a.deleteIcon, {
							[wi.a.isDragging]: r
						})
					}))))) : null
				},
				Ii = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/ImageItemsWrapper.m.less"),
				Pi = n.n(Ii);
			var Mi = e => {
					const {
						onRemoveUpload: t,
						dispatch: n,
						mediaState: r,
						uploads: i
					} = e, a = Object($r.a)(), c = Object(o.useCallback)(() => a(_.j()), [a]), l = Object(o.useCallback)(e => {
						t(e.uploadKey), a(_.l())
					}, [a, t]);
					return s.a.createElement("div", {
						className: Pi.a.itemsWrapper
					}, s.a.createElement(Yr.a, {
						className: Pi.a.sortableImages,
						values: r.items,
						getReactKey: e => e.uploadKey,
						render: (e, t, o, a, c) => {
							const d = i[e.uploadKey];
							if (!d) return null;
							if (Object(rt.c)(d)) return s.a.createElement("span", {
								className: Object(Ge.a)(Pi.a.pendingItem, Object(qs.b)({
									isLoading: !0
								}))
							});
							const u = e.uploadKey === r.selectedKey;
							return s.a.createElement("span", {
								className: Pi.a.imageStyles
							}, a && s.a.createElement("span", {
								className: Pi.a.hoverMarker
							}), s.a.createElement(Ti, {
								canDrop: c,
								dispatch: n,
								isDragging: o,
								isOver: a,
								isSelected: u,
								mediaItem: e,
								key: e.uploadKey,
								mediaUpload: d,
								removeGalleryItem: l
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
						onClickEvent: c,
						onFileInput: e.onFileInput
					}))
				},
				Ni = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/InputWrapper.m.less"),
				Ri = n.n(Ni);
			var Di = e => {
					const {
						uploads: t,
						galleryItem: n,
						isSelected: r,
						dispatch: i
					} = e, a = t[n.uploadKey], c = n.caption, d = n.url, u = Object($r.a)(), p = Object(o.useCallback)(e => i((e => ({
						type: Hr.SetCaptionInput,
						payload: {
							input: e
						}
					}))(e)), [i]), m = Object(o.useCallback)(e => i((e => ({
						type: Hr.SetURLInput,
						payload: {
							input: e
						}
					}))(e)), [i]), h = Object(o.useCallback)(e => u(_.k(e)), [u]), f = Object(o.useCallback)(() => h(b.l.CAPTION), [h]), g = Object(o.useCallback)(() => h(b.l.OUTBOUND_URL), [h]), x = !r || !a || !a.url || Object(rt.c)(a);
					return s.a.createElement("div", null, s.a.createElement("div", {
						className: Ri.a.inputWrapper
					}, s.a.createElement(Lr, {
						className: Ri.a.inputStyles,
						disabled: x,
						maxLength: ei.a,
						onFocus: f,
						onValueChange: p,
						placeholder: l.fbt._("Add a caption...", null, {
							hk: "1fOmKi"
						}),
						value: c
					}), s.a.createElement("div", {
						className: Ri.a.charsCounter
					}, c.length, "/", ei.a)), s.a.createElement("div", {
						className: Ri.a.inputWrapper
					}, s.a.createElement(Lr, {
						className: Object(Ge.a)(Ri.a.inputStyles, Ri.a.urlInputStyles),
						disabled: x,
						onFocus: g,
						onValueChange: m,
						placeholder: l.fbt._("Add a link...", null, {
							hk: "Z6l9K"
						}),
						value: d
					})))
				},
				Bi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/Layout.m.less"),
				Li = n.n(Bi);
			var Fi = e => {
					const {
						heroSlot: t,
						mainContent: n,
						sideMetaContent: o,
						bottomContent: r
					} = e;
					return s.a.createElement("div", {
						className: Li.a.Layout
					}, s.a.createElement("div", {
						className: Li.a.hero
					}, t), n && s.a.createElement("div", {
						className: Li.a.mainContent
					}, n), o && s.a.createElement("div", {
						className: Li.a.sideMetaContent
					}, o), s.a.createElement("div", {
						className: Li.a.bottomContent
					}, r))
				},
				Ai = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/components/SelectedImage.m.less"),
				Ki = n.n(Ai);
			var Ui = e => {
					const {
						upload: t
					} = e, n = t.metadata.localUrl;
					return Object(rt.c)(t) ? s.a.createElement("span", {
						className: Object(Ge.a)(Ki.a.pendingImage, Object(qs.b)({
							isLoading: !0
						}))
					}) : s.a.createElement("img", {
						className: Ki.a.selectedImage,
						src: n
					})
				},
				Hi = n("./src/reddit/components/ProgressBar/index.tsx"),
				Wi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/MultipleUploadStatusBar/index.m.less"),
				zi = n.n(Wi);
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
				Qi = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/index.m.less"),
				Zi = n.n(Qi);

			function Xi(e) {
				const {
					canDrop: t,
					dispatch: n,
					isOver: r,
					mediaState: i,
					onFileInput: a,
					onRemoveUpload: c,
					uploads: d
				} = e, [u, p] = Object(o.useState)([]), m = i.selectedKey, h = i.items.length > 1, f = i.items.find(e => e.uploadKey === m), b = m && d[m], g = i.items.filter(e => {
					const t = d[e.uploadKey];
					return !!t && t.status === rt.a.FAILED
				}).length, x = Object.values(d).filter(rt.c);
				if (!Xr()(u, x))
					if (0 === x.length) p([]);
					else {
						const e = x.filter(e => !u.some(t => t.key === e.key));
						e.length > 0 && p([...u, ...e])
					} const C = u.length > 0,
					y = {
						percent: (() => {
							if (!C) return 0;
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
					className: Object(Ge.a)(Zi.a.dropArea, {
						[Zi.a.isDropAreaActive]: t,
						[Zi.a.isDropAreaOver]: r
					})
				}, s.a.createElement(Fi, {
					heroSlot: s.a.createElement(Mi, {
						mediaState: i,
						onFileInput: a,
						onRemoveUpload: c,
						uploads: d,
						dispatch: n
					}),
					mainContent: b && h && s.a.createElement(Ui, {
						upload: b
					}),
					sideMetaContent: f && h && s.a.createElement(Di, {
						dispatch: n,
						galleryItem: f,
						uploads: d,
						isSelected: !!m
					}),
					bottomContent: null
				})), C ? s.a.createElement(Ji, {
					progress: y
				}) : null, !!g && s.a.createElement($e.a, {
					className: Zi.a.errorMessage,
					messages: [l.fbt._("Some files failed to upload, please remove or retry them", null, {
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
			const ca = ut.a.img("Img", aa.a),
				la = ut.a.img("BlurImg", aa.a),
				da = ut.a.wrapped(e => {
					const {
						className: t,
						url: n
					} = e;
					return s.a.createElement("div", {
						className: t
					}, s.a.createElement(la, {
						src: n
					}), s.a.createElement(ca, {
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
			var pa = ut.a.wrapped(e => {
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
				ma = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/UploadStatusBar/index.m.less"),
				ha = n.n(ma);
			const {
				fbt: fa
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ba = ut.a.div("ControlRow", ha.a), ga = ut.a.wrapped(Ye.o, "Button", ha.a), xa = ut.a.div("Status", ha.a);
			var Ca = ut.a.wrapped(e => {
					const {
						name: t,
						progress: n,
						onCancel: o
					} = e, r = n && n.percent || 0;
					return s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(Hi.a, {
						percent: r
					}), s.a.createElement(ba, null, s.a.createElement(xa, null, r < 100 ? fa._("Uploading {fileName}", [fa._param("fileName", t)], {
						hk: "1F1ZHh"
					}) : fa._("Success!", null, {
						hk: "2SQAeu"
					})), r < 100 && s.a.createElement(ga, {
						onClick: o
					}, fa._("Cancel", null, {
						hk: "2TSLl5"
					}))))
				}, "Component", ha.a),
				ya = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Ea = n("./src/reddit/components/PostCreationForm/MediaInput/MediaUpload/index.m.less"),
				va = n.n(Ea);
			const _a = ut.a.div("Wrapper", va.a),
				Oa = ut.a.div("Controls", va.a),
				ka = ut.a.wrapped(mo.b, "Trash", va.a),
				Sa = ut.a.wrapped(sa.a, "ThumbnailSelect", va.a);

			function ja(e) {
				const {
					isPostSubmitPending: t,
					mediaType: n,
					onCancelUpload: o,
					onRemove: r,
					upload: i
				} = e, a = i.metadata, {
					localUrl: c,
					videoFirstFrameUrl: d
				} = a, u = i.status, p = u === rt.a.PENDING || u === rt.a.UPLOADING, m = u === rt.a.SUCCESS, h = !t;
				return s.a.createElement(_a, null, p ? s.a.createElement(Ca, {
					className: va.a.UploadStatusBar,
					name: i.file.name,
					progress: i.progress,
					onCancel: o
				}) : null, c ? s.a.createElement(pa, {
					type: n,
					url: c,
					showControls: m,
					videoBlurImgSrc: d
				}) : null, m && s.a.createElement(Oa, null, "video" === n && s.a.createElement(oa.a, {
					disabled: !!e.makeGifDisableReason || !h,
					tooltip: e.makeGifDisableReason,
					on: e.isMakeGifToggleOn,
					onClick: e.onMakeGifToggle
				}), "video" === n && s.a.createElement(ya.a, {
					enabled: h,
					Icon: Sa,
					tooltip: l.fbt._("Choose thumbnail", null, {
						hk: "2XlKfd"
					}),
					onClick: e.onShowThumbnailSelector
				}), s.a.createElement(ya.a, {
					enabled: h,
					Icon: ka,
					tooltip: l.fbt._("Remove", null, {
						hk: "H42IB"
					}),
					onClick: r
				})))
			}
			var wa = n("./src/reddit/components/PostCreationForm/MediaInput/RemovePrompt/index.m.less"),
				Ta = n.n(wa);
			const Ia = "POST_CREATION_MEDIA_REMOVE_PROMPT_ID",
				Pa = ut.a.div("Wrapper", Ta.a),
				Ma = ut.a.wrapped(ot.a, "TitleRow", Ta.a),
				Na = ut.a.div("DetailsContainer", Ta.a),
				Ra = ut.a.wrapped(ot.a, "ButtonRow", Ta.a),
				Da = ut.a.wrapped(Ye.l, "CancelButton", Ta.a),
				Ba = ut.a.wrapped(Ye.i, "ConfirmButton", Ta.a);
			var La = Object(ms.a)(e => {
					const {
						isVideo: t
					} = e;
					return s.a.createElement(Pa, null, s.a.createElement(Ma, null, t ? l.fbt._("Remove video?", null, {
						hk: "34eepe"
					}) : l.fbt._("Remove image?", null, {
						hk: "41e1Uy"
					})), s.a.createElement(Na, null, t ? l.fbt._("Are you sure you want to remove your video?", null, {
						hk: "smTuF"
					}) : l.fbt._("Are you sure you want to remove your image?", null, {
						hk: "Ci5LM"
					})), s.a.createElement(Ra, null, s.a.createElement(Da, {
						onClick: e.onCanceled
					}, l.fbt._("Keep", null, {
						hk: "4gFSdj"
					})), s.a.createElement(Ba, {
						onClick: e.onConfirmed
					}, l.fbt._("Remove", null, {
						hk: "1Jdd3U"
					}))))
				}),
				Fa = n("./src/reddit/selectors/gold/powerups.ts"),
				Aa = n("./src/reddit/components/PostCreationForm/MediaInput/index.m.less"),
				Ka = n.n(Aa),
				Ua = n("./src/reddit/models/Gold/Powerups/index.ts");
			const Ha = "MEDIA_POST_VIDEO_THUMBNAIL_SELECTOR_MODAL_ID",
				Wa = Object(v.t)(),
				za = Object(i.c)({
					isPowerupTooltipDisplayed: e => {
						const t = Object(S.h)(e).id,
							n = Ua.a.PostsImageUpload;
						return !!t && !Object(Fa.m)(e, {
							subredditId: t,
							benefit: n
						})
					},
					activeModalId: O.a,
					isPostPending: S.U,
					uploads: Object(Qr.a)(e => Gr()(e.uploads, e => e.key.startsWith(M.a))),
					value: S.P,
					isImageGalleryCreationEnabled: S.G
				}),
				Va = Object(r.b)(za, e => ({
					onChange: t => e(a.d(t)),
					startMediaGalleryUploads: (t, n) => e(M.d(t, n)),
					removeUpload: t => e(Pe.i(t, !0)),
					toggleThumbnailModal: () => e(a.w(Ha)),
					toggleRemovePrompt: () => e(a.w(Ia))
				})),
				qa = ut.a.div("Container", Ka.a),
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
						if (!Object(b.v)(t)) return;
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
						if (!Object(b.v)(e)) return;
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
						if (!Object(b.v)(o) && r && o.items.length >= 1) return s.a.createElement(Xi, {
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
									isMakeGif: c = !1,
									makeGifDisableReason: l = null
								} = a && a.video || {},
								d = i && i.status === rt.a.FAILED,
								u = i && d ? Object(Jr.a)(i.error) : "",
								p = i && Object(ta.f)(i.metadata.mimetype);
							return o && p && i && !d ? s.a.createElement(ja, {
								isPostSubmitPending: n,
								upload: i,
								mediaType: p,
								onRemove: this.props.toggleRemovePrompt,
								onCancelUpload: this.onCancelSingleMediaUpload,
								onShowThumbnailSelector: this.toggleThumbnailSelector,
								onMakeGifToggle: this.onMakeGifToggle,
								isMakeGifToggleOn: c,
								makeGifDisableReason: l
							}) : s.a.createElement(Ei, {
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
					} = e, n = this.getSingleUpload(), o = t[0], r = Object(b.v)(e), i = r && o.video.thumbnail || void 0;
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
					}), this.props.activeModalId === Ia && s.a.createElement(La, {
						isVideo: r,
						onCanceled: this.props.toggleRemovePrompt,
						onConfirmed: this.onRemoveConfirmed
					}))
				}
			}
			var Qa = Wa(Va(Ja)),
				Za = n("./src/reddit/actions/post.ts"),
				Xa = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				Ya = n("./src/reddit/controls/OutboundLink/index.tsx"),
				$a = n("./src/reddit/selectors/externalAccount.ts"),
				ec = n("./src/reddit/icons/fonts/Info/index.tsx"),
				tc = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/Hint/index.m.less"),
				nc = n.n(tc);
			const oc = ut.a.wrapped(ec.a, "Info", nc.a),
				sc = ut.a.div("TooltipContent", nc.a);
			var rc = e => s.a.createElement("div", {
					className: nc.a.Hint
				}, s.a.createElement(Ft.a, {
					className: nc.a.HoverTooltip,
					tooltipContentClass: nc.a.tooltipContentClass,
					text: s.a.createElement(sc, null, e.text)
				}), s.a.createElement(oc, null)),
				ic = n("./src/reddit/components/PostCreationForm/PostCreationFooter/PostSettings/index.m.less"),
				ac = n.n(ic);
			const cc = ut.a.wrapped(Xa.a, "CheckboxInput", ac.a),
				lc = ut.a.wrapped(Ya.b, "ConnectAccountLink", ac.a),
				dc = ut.a.div("Container", ac.a),
				uc = ut.a.div("ContainerLeft", ac.a),
				pc = ut.a.div("ContainerRight", ac.a),
				mc = ut.a.div("CheckboxText", ac.a),
				hc = ut.a.div("Option", ac.a),
				fc = ut.a.wrapped(Tt.a, "TextButton", ac.a),
				bc = ut.a.input("TextBox", ac.a),
				gc = ut.a.div("Wrapper", ac.a),
				xc = Object(i.c)({
					connectedTwitterAccount: $a.a,
					currentSubredditOrProfile: v.o,
					currentUser: T.i,
					isDraftPending: j.g,
					isMediaUploadPending: S.Q,
					isPostPending: S.hb,
					isPublicLink: S.K,
					postToTwitter: S.Y,
					sendReplies: S.ab,
					sharingLink: j.i,
					submissionType: S.a
				}),
				Cc = Object(r.b)(xc, (e, t) => ({
					togglePostToTwitter: t => {
						e(a.x(t)), e((e, n) => _.v(n(), t))
					},
					toggleSendReplies: t => {
						e(a.y(t))
					},
					toggleDraftIsPublic: n => {
						e(L.s(n)), e(Object(L.r)(t.draftId)), e((e, o) => {
							const s = Object(j.h)(o(), t.draftId);
							s && _.g(o(), s, n)
						})
					},
					copyLink: t => e(Object(Za.x)(t)),
					trackConnectAccountsClick: () => e((e, t) => _.b(t()))
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
			var yc = Object(v.t)()(Cc(e => {
					const {
						connectedTwitterAccount: t,
						currentSubredditOrProfile: n,
						currentUser: o,
						draftId: r,
						submissionType: i
					} = e, a = !!n && !!n.isQuarantined, c = e.isDraftPending || e.isPostPending || e.isMediaUploadPending, d = i !== m.Lb.MEDIA && r, u = e.isPublicLink, p = o && o.hasUserProfile;
					return s.a.createElement(dc, null, s.a.createElement(uc, {
						className: e.className
					}, s.a.createElement(ot.a, null, s.a.createElement(hc, null, s.a.createElement(cc, {
						disabled: c,
						name: "send-replies",
						onChange: e.onToggleSendReplies,
						value: e.sendReplies
					}, s.a.createElement(mc, null, l.fbt._("Send me post reply notifications", null, {
						hk: "3kNmey"
					}))))), p && t && s.a.createElement(ot.a, null, s.a.createElement(hc, null, s.a.createElement(cc, {
						disabled: c || a,
						name: "post-to-twitter",
						onChange: e.onTogglePostToTwitter,
						value: e.postToTwitter
					}, s.a.createElement(mc, null, l.fbt._("Share this post on Twitter", null, {
						hk: "3SPI4V"
					}))))), p && !t && !a && s.a.createElement(ot.a, null, s.a.createElement(lc, {
						href: "/settings#connected-accounts",
						isSponsored: !1,
						onClick: e.trackConnectAccountsClick,
						source: null
					}, l.fbt._("Connect accounts to share your post", null, {
						hk: "1nIuWp"
					})), s.a.createElement(rc, {
						text: l.fbt._("Connect a Twitter account in your User Settings. With a connected account you can choose to share new posts you make directly to Twitter.", null, {
							hk: "JRoQz"
						})
					}))), s.a.createElement(pc, {
						className: e.className
					}, d && s.a.createElement(gc, null, s.a.createElement(hc, null, s.a.createElement(cc, {
						name: "enable-public-link",
						onChange: e.onToggleDraftIsPublic,
						value: e.isPublicLink
					}, s.a.createElement(mc, null, l.fbt._("Enable public draft link", null, {
						hk: "1SpDgT"
					})), s.a.createElement(rc, {
						text: l.fbt._("This option will create a link to a preview of this draft. Anyone with this link will be able to see this draft. You can disable this link at any time.", null, {
							hk: "1r77YF"
						})
					})))), d && u && s.a.createElement(ot.a, null, s.a.createElement(bc, {
						disabled: !0,
						value: e.sharingLink
					}), s.a.createElement(fc, {
						onClick: e.onCopyLink
					}, l.fbt._("Copy link", null, {
						hk: "22rywZ"
					})))))
				})),
				Ec = n("./src/reddit/components/PostCreationForm/PostCreationFooter/index.m.less"),
				vc = n.n(Ec);
			const _c = ut.a.div("Container", vc.a);
			var Oc = e => s.a.createElement(_c, null, s.a.createElement(yc, {
					draftId: e.draftId
				})),
				kc = n("./src/reddit/featureFlags/profileCollections.ts"),
				Sc = n("./src/reddit/selectors/postCollection.ts"),
				jc = n("./src/reddit/selectors/profile.ts"),
				wc = n("./src/reddit/components/PostCreationForm/PostCreationHeader/index.m.less"),
				Tc = n.n(wc);
			const Ic = ut.a.div("CreateLabel", Tc.a),
				Pc = ut.a.span("CountIndicator", Tc.a),
				Mc = ut.a.wrapped(Ye.o, "LinkButton", Tc.a),
				Nc = Mc,
				Rc = ut.a.div("CreatePostHeader", Tc.a),
				Dc = Object(i.c)({
					canPostAsModerator: S.e,
					collectionsCount: e => {
						const t = Object(S.h)(e);
						let n = t.id;
						if (t.isProfile && Object(kc.a)(e)) {
							const o = Object(jc.j)(e, {
								profileName: t.name
							});
							n = o && o.id
						}
						return n ? Object(Sc.u)(e, {
							subredditId: n
						}) : 0
					},
					destSubredditAboutInfo: S.g,
					draftsCount: T.j,
					isPending: S.U
				});
			var Bc = Object(r.b)(Dc, e => ({
					showDraftsList: () => {
						e(L.p()), e(a.w(b.d))
					},
					showCollectionsList: () => {
						e(a.w(b.a))
					}
				}))(e => {
					const {
						canPostAsModerator: t,
						collectionsCount: n,
						destSubredditAboutInfo: o,
						draftsCount: r,
						isPending: i,
						showCollectionsList: a,
						showDraftsList: c,
						submissionType: d,
						submitMode: u
					} = e, p = d === m.Lb.CROSSPOST, h = p ? l.fbt._("Create a crosspost", null, {
						hk: "1oNF7H"
					}) : l.fbt._("Create a post", null, {
						hk: "4u8qEy"
					}), f = t && o && o.collectionsEnabled;
					return s.a.createElement(Rc, null, s.a.createElement(Ic, null, u === b.q.Draft ? l.fbt._("Edit draft", null, {
						hk: "oMgcW"
					}) : h), !p && s.a.createElement(s.a.Fragment, null, f && s.a.createElement(Nc, {
						onClick: a
					}, l.fbt._("Collections", null, {
						hk: "2FVot0"
					}), s.a.createElement(Pc, null, n)), s.a.createElement(Mc, {
						disabled: i,
						onClick: c
					}, l.fbt._("Drafts", null, {
						hk: "25z4rQ"
					}), s.a.createElement(Pc, null, r))))
				}),
				Lc = n("./src/reddit/actions/polls.ts"),
				Fc = n("./src/reddit/actions/postCreation/editorContent.ts"),
				Ac = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				Kc = n("./src/reddit/selectors/gov.ts"),
				Uc = n("./src/reddit/components/Governance/PollHelpText/index.m.less"),
				Hc = n.n(Uc);
			const Wc = Object(i.c)({
				subredditGovInfo: (e, {
					subreddit: t
				}) => Object(Kc.k)(e, {
					subredditId: t.id
				}),
				tokenName: (e, {
					subreddit: t
				}) => Object(Kc.n)(e, {
					subredditId: t.id
				})
			});
			var zc = Object(r.b)(Wc)((function(e) {
					var t;
					const {
						subreddit: n,
						subredditGovInfo: o,
						tokenName: r
					} = e, i = null === (t = null == o ? void 0 : o.polls) || void 0 === t ? void 0 : t.decisionThreshold;
					return s.a.createElement("div", {
						className: Hc.a.pollHelpText
					}, i && s.a.createElement(s.a.Fragment, null, s.a.createElement(Ac.a, {
						className: Hc.a.decisionThreholdAmount,
						amount: i,
						subredditId: n.id
					}), s.a.createElement("div", {
						className: Hc.a.decisionThresholdTitle
					}, l.fbt._("Decision Threshold", null, {
						hk: "39nut8"
					}))), s.a.createElement("div", {
						className: Hc.a.decisionThresholdExplanation
					}, l.fbt._("Governance Polls pass when one option reaches the Decision Threshold. The Decision Threshold is updated regularly based on the number of {tokenName} that voted in previous governance polls.", [l.fbt._param("tokenName", r)], {
						hk: "Di1tp"
					})))
				})),
				Vc = n("./src/reddit/actions/tooltip.ts"),
				qc = n("./src/reddit/controls/Dropdown/index.tsx"),
				Gc = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Jc = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				Qc = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				Zc = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts");
			const Xc = () => {
					const e = new Date,
						[t] = Object(de.i)(Object(ht.g)(e));
					return t
				},
				Yc = () => {
					const e = new Date;
					return e.setDate(e.getDate() + 3), e
				},
				$c = e => {
					const [t, n] = Object(de.i)(Object(ht.g)(e));
					return {
						date: t,
						time: n
					}
				},
				el = ({
					date: e,
					time: t
				}) => new Date(`${e}T${t}`);
			var tl = n("./src/reddit/components/PollCreator/EndDatePicker/index.m.less"),
				nl = n.n(tl);

			function ol({
				poll: e
			}) {
				const {
					endDate: t
				} = e, {
					date: n,
					time: o
				} = $c(t), i = Object(ht.b)(), a = i ? Object(ht.d)(i) : null, c = Object(r.d)(), d = t => {
					c(Object(Lc.b)({
						...e,
						endDate: el({
							date: n,
							time: o,
							...t
						})
					}))
				};
				return s.a.createElement("div", {
					className: nl.a.endDatePicker
				}, s.a.createElement("label", {
					className: nl.a.title
				}, l.fbt._("Prediction ends", null, {
					hk: "1fsk1v"
				})), s.a.createElement("div", {
					className: nl.a.dateTime
				}, s.a.createElement(Jc.a, {
					"aria-label": l.fbt._("Prediction end date", null, {
						hk: "4zYv4T"
					}),
					onChange: e => d({
						date: e
					}),
					min: Xc(),
					max: Object(Zc.a)(),
					value: n
				}), s.a.createElement(Qc.a, {
					"aria-label": l.fbt._("Prediction end time", null, {
						hk: "1idFl4"
					}),
					onChange: e => d({
						time: e
					}),
					value: o
				}), a && s.a.createElement("div", {
					className: nl.a.timeZone
				}, a.abbreviation)))
			}
			var sl = n("./src/reddit/icons/svgs/Grapple/index.tsx"),
				rl = n("./src/reddit/components/PollCreator/Option/index.m.less"),
				il = n.n(rl);

			function al(e) {
				return s.a.createElement("div", {
					className: Object(Ge.a)(e.className, il.a.container),
					style: {
						left: e.isDropTarget ? 16 : 0,
						opacity: cl(e),
						pointerEvents: e.isDisabled ? "none" : void 0
					}
				}, s.a.createElement(sl.a, {
					className: il.a.grapple
				}), s.a.createElement("input", {
					className: il.a.input,
					maxLength: 120,
					placeholder: `${l.fbt._("option",null,{hk:"3IGnB"})} ${e.index+1}`,
					value: e.text,
					onBlur: e.onBlur,
					onChange: t => e.onTextChange(t.currentTarget.value),
					onFocus: e.onFocus
				}), e.removable && s.a.createElement(mo.a, {
					className: il.a.trash,
					onClick: e.onRemove
				}))
			}

			function cl(e) {
				return e.isDisabled ? .5 : e.isBeingDragged ? .25 : 1
			}
			var ll = n("./src/reddit/constants/postLayout.ts"),
				dl = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				ul = n("./src/reddit/components/Econ/Prediction/NewBadge/index.m.less"),
				pl = n.n(ul);
			const {
				fbt: ml
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function hl({
				className: e
			}) {
				return s.a.createElement("div", {
					className: Object(Ge.a)(pl.a.newBadge, e)
				}, ml._("New", null, {
					hk: "2N0EBb"
				}))
			}
			var fl = n("./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx"),
				bl = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				gl = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				xl = n("./src/reddit/controls/PillButton/index.m.less"),
				Cl = n.n(xl);
			class yl extends s.a.Component {
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
						icon: c,
						id: l,
						isActive: d,
						isDarkDayMode: u,
						isNightMode: p,
						layout: m,
						onBlur: h,
						onClick: f,
						onFocus: b,
						title: g,
						tooltipId: x
					} = this.props, C = c, y = Object(Ge.a)({
						[Cl.a.classic]: m === ll.g.Classic,
						[Cl.a.compact]: m === ll.g.Compact,
						[Cl.a.activated]: d,
						[Cl.a.nightmode]: p,
						[Cl.a.dark]: u,
						[Cl.a.upvote]: "upvote" === o,
						[Cl.a.downvote]: "downvote" === o,
						[Cl.a.gold]: "gold" === o,
						[Cl.a.blue]: "blue" === o,
						[Cl.a.approve]: "approve" === o,
						[Cl.a.remove]: "remove" === o,
						[Cl.a.hasChildren]: !!t
					});
					if (this.props.href) {
						const {
							href: e,
							rel: o,
							target: i
						} = this.props;
						return s.a.createElement(bl.a, {
							"aria-label": g,
							"aria-pressed": d,
							className: Object(Ge.a)(n, y, Cl.a.PostActionButton),
							"data-click-id": this.props["data-click-id"],
							"data-test-id": this.props["data-test-id"],
							id: l,
							onBlur: h,
							onClick: f,
							onFocus: b,
							onMouseEnter: this.handleMouseEnter,
							onMouseLeave: this.handleMouseLeave,
							rel: o,
							target: i,
							to: e
						}, s.a.createElement("span", {
							className: Object(Ge.a)(r, y, Cl.a.buttonContent),
							id: x,
							tabIndex: -1
						}, s.a.createElement("div", {
							className: Cl.a.background
						}), a && x && s.a.createElement(gl.c, {
							text: a,
							tooltipId: x
						}), C && s.a.createElement(C, null), s.a.createElement("span", {
							className: Cl.a.buttonChildren
						}, t)))
					}
					return s.a.createElement("button", {
						"aria-label": g,
						"aria-pressed": d,
						className: Object(Ge.a)(n, y, Cl.a.PostActionButton),
						"data-click-id": this.props["data-click-id"],
						"data-test-id": this.props["data-test-id"],
						disabled: i,
						id: l,
						onBlur: h,
						onClick: f,
						onFocus: b,
						onMouseEnter: this.handleMouseEnter,
						onMouseLeave: this.handleMouseLeave
					}, s.a.createElement("span", {
						className: Object(Ge.a)(r, y, Cl.a.buttonContent),
						id: x,
						tabIndex: -1
					}, s.a.createElement("div", {
						className: Object(Ge.a)(Cl.a.background, e)
					}), a && x && s.a.createElement(gl.c, {
						text: a,
						tooltipId: x
					}), C && s.a.createElement(C, null), s.a.createElement("span", {
						className: Cl.a.buttonChildren
					}, t)))
				}
			}
			var El = Object(r.b)(void 0, (e, {
					tooltipId: t
				}) => ({
					tooltipSet: () => {
						t && e(Object(Vc.g)({
							tooltipId: t
						}))
					},
					tooltipUnset: () => {
						t && e(Object(Vc.j)({
							tooltipId: t
						}))
					}
				}))(yl),
				vl = n("./src/reddit/helpers/trackers/predictions.ts"),
				_l = n("./src/reddit/hooks/useLocalStorage.ts"),
				Ol = n("./src/reddit/components/PollCreator/PollTypePicker/index.m.less"),
				kl = n.n(Ol);

			function Sl() {
				return (Sl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function jl() {
				const [e] = Object(_l.a)(dl.a.creation, !1), {
					govType: t
				} = Object(r.e)(S.s), n = Object(r.d)(), o = Object($r.a)(), i = {
					backgroundClassName: kl.a.buttonBackground,
					colorTheme: "blue",
					className: Object(Ge.a)(kl.a.button, kl.a.pollTypePickerButton),
					contentClassName: kl.a.buttonContent,
					isDarkDayMode: !1,
					isNightMode: !1,
					layout: ll.g.Compact
				};
				return s.a.createElement("div", {
					className: kl.a.pollTypePicker
				}, s.a.createElement(El, Sl({}, i, {
					isActive: t === X.a.GA || !t,
					onClick: () => {
						n(Object(a.j)({
							oldType: t,
							type: X.a.GA
						})), o(vl.e)
					},
					title: l.fbt._("Poll", null, {
						hk: "2uKNlH"
					})
				}), l.fbt._("Poll", null, {
					hk: "1l7ZuP"
				})), s.a.createElement(El, Sl({}, i, {
					isActive: t === X.a.Prediction,
					onClick: () => {
						n(Object(a.j)({
							oldType: t,
							type: X.a.Prediction
						})), o(vl.f)
					},
					title: l.fbt._("Prediction", null, {
						hk: "3wu0FO"
					})
				}), s.a.createElement("div", {
					className: kl.a.predictionLabel
				}, l.fbt._("Prediction", null, {
					hk: "1CbFag"
				}), !e && t !== X.a.Prediction && s.a.createElement(hl, {
					className: kl.a.newBadge
				}))), t === X.a.Prediction && s.a.createElement("div", {
					className: kl.a.education
				}, s.a.createElement(fl.a, {
					onClose: () => o(vl.c),
					onView: () => o(vl.g),
					storageKey: dl.a.creation
				})))
			}
			var wl = n("./src/reddit/components/PollCreator/index.m.less"),
				Tl = n.n(wl);
			const Il = 2,
				Pl = 6,
				Ml = 7,
				Nl = "poll-creation-voting-length";
			var Rl;
			! function(e) {
				e.Options = "options", e.VotingLength = "votingLength"
			}(Rl || (Rl = {}));
			const Dl = Object(Zt.a)(qc.a),
				Bl = Object(i.c)({
					isModerator: (e, t) => {
						const {
							subredditId: n
						} = t;
						return !!n && Object(it.e)(e, {
							subredditId: n
						})
					},
					votingLengthDropdownIsOpen: e => e.tooltipId === Nl
				});
			class Ll extends s.a.Component {
				constructor(e) {
					super(e), this.handleAddOption = e => () => {
						const {
							sendEvent: t
						} = this.props;
						e.options.length < 7 && (t(Object(_.p)()), this.props.onUpdatePoll({
							...e,
							options: e.options.concat(this.makeOption())
						}))
					}, this.handleBlur = () => this.inputFocused = !1, this.handleVotingLengthDropdownClick = () => {
						const {
							sendEvent: e,
							votingLengthDropdownIsOpen: t
						} = this.props;
						t || e(Object(_.q)()), this.props.onToggleVotingLengthDropdown()
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
						duration: 3 * m.x,
						endDate: Yc(),
						options: Array.from({
							length: Il
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
					} = this.props, r = !Object(X.d)(o) && t && n;
					return s.a.createElement("div", {
						"data-testid": "poll-creator"
					}, r && s.a.createElement(jl, null), s.a.createElement("div", {
						className: Object(Ge.a)(e, Tl.a.container)
					}, s.a.createElement("div", {
						className: Tl.a.options
					}, this.renderPollCreator(o), this.renderControls(o)), s.a.createElement("div", {
						className: Tl.a.help
					}, this.props.hintTextComponent)))
				}
				renderPollCreator(e) {
					const t = this.sectionIsDisabled(Rl.Options);
					return s.a.createElement(Yr.a, {
						render: (n, o, r, i, a) => s.a.createElement(al, {
							className: Tl.a.option,
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
					} = this.props, n = e.options.length >= Pl || this.sectionIsDisabled(Rl.Options), o = this.sectionIsDisabled(Rl.VotingLength), r = Math.floor(e.duration / m.x), i = t === X.a.Prediction;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Tl.a.controls
					}, s.a.createElement(Ye.o, {
						className: Tl.a.addButton,
						disabled: n,
						onClick: this.handleAddOption(e)
					}, l.fbt._("Add Option", null, {
						hk: "hUP0k"
					})), !i && s.a.createElement("div", {
						className: Object(Ge.a)(Tl.a.votingLengthSelector, {
							[Tl.a.votingLengthSelector__disabled]: !!o
						})
					}, s.a.createElement("div", {
						className: Tl.a.votingLengthTitleText
					}, l.fbt._("Voting length:", null, {
						hk: "4pPVUg"
					})), s.a.createElement("div", {
						className: Tl.a.votingLengthDropdownContainer,
						id: Nl
					}, s.a.createElement("div", {
						className: Tl.a.votingLengthDisplay,
						onClick: this.handleVotingLengthDropdownClick
					}, s.a.createElement("div", null, l.fbt._({
						"*": "{numDays} days",
						_1: "{numDays} day"
					}, [l.fbt._param("numDays", String(r)), l.fbt._plural(r)], {
						hk: "2HsFBA"
					})), s.a.createElement(Tn.a, {
						className: Tl.a.votingLengthCaret
					})), this.renderVotingLengthDropdown(e)))), i && s.a.createElement(ol, {
						poll: e
					}))
				}
				renderVotingLengthDropdown(e) {
					const {
						votingLengthDropdownIsOpen: t
					} = this.props, n = this.handleChangeVotingLength(e);
					return s.a.createElement(Dl, {
						className: Tl.a.votingLengthDropdown,
						tooltipId: Nl,
						isOpen: t
					}, Array.from({
						length: Ml
					}).map((t, o) => {
						const r = o + 1;
						return s.a.createElement(Gc.b, {
							"data-redditstyle": !0,
							key: o,
							index: o,
							displayText: l.fbt._({
								"*": "{number} days",
								_1: "1 day"
							}, [l.fbt._plural(r, "number")], {
								hk: "bXXYo"
							}),
							isSelected: Math.floor(e.duration / m.x) === r,
							onClick: () => n(r * m.x)
						})
					}))
				}
			}
			var Fl = Object(r.b)(Bl, e => ({
					onToggleVotingLengthDropdown: () => e(Object(Vc.h)({
						tooltipId: Nl
					}))
				}))(Object(xo.c)(Ll)),
				Al = n("./src/reddit/components/Governance/ProposalTemplates/Generic/index.m.less"),
				Kl = n.n(Al);
			const Ul = [{
				text: "Yes"
			}, {
				text: "No"
			}];

			function Hl(e) {
				const t = {
					duration: e.poll ? e.poll.duration : m.x,
					options: e.options || Ul
				};
				return s.a.createElement("div", {
					className: Object(Ge.a)(Kl.a.container, e.className)
				}, s.a.createElement("div", {
					className: Kl.a.topline
				}, e.children.map(e => "string" == typeof e ? s.a.createElement("div", {
					className: Kl.a.text
				}, e) : e)), s.a.createElement(Fl, {
					disabledSections: [Rl.Options],
					hintTextComponent: s.a.createElement("div", {
						className: Kl.a.hintText
					}, s.a.createElement(zc, {
						subreddit: e.subreddit
					})),
					poll: t,
					onUpdatePoll: e.onUpdatePoll
				}))
			}
			var Wl = n("./src/reddit/controls/FormFields/index.tsx"),
				zl = n("./src/reddit/components/Governance/ProposalTemplates/Spinoff/index.m.less"),
				Vl = n.n(zl);
			const ql = 3,
				Gl = 20,
				Jl = /[^(\w|_)]/g;
			const Ql = Object(i.c)({
				newSubredditName: e => e.creations.formData.newSubreddit
			});
			var Zl = Object(r.b)(Ql, e => ({
					onSubredditNameChange: t => e(Object(D.a)({
						subredditName: t
					}))
				}))((function(e) {
					return s.a.createElement(Hl, {
						className: e.className,
						options: X.g[X.a.Spinoff](e.newSubredditName),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, l.fbt._("Should we spin-off to", null, {
						hk: "3oKiyE"
					}), s.a.createElement(Wl.c, {
						redditStyle: !0,
						className: Vl.a.input,
						label: l.fbt._("subreddit name", null, {
							hk: "1qzJqB"
						}),
						max: Gl,
						min: ql,
						type: "text",
						value: e.newSubredditName,
						onChange: t => {
							const n = t.currentTarget.value.replace(Jl, "");
							e.onSubredditNameChange(n)
						}
					}), l.fbt._("?", null, {
						hk: "1b1vhH"
					}))
				})),
				Xl = n("./src/reddit/components/Governance/ProposalTemplates/TopModReplacement/index.m.less"),
				Yl = n.n(Xl);
			const $l = 20;
			const ed = Object(i.c)({
				topMod: e => e.creations.formData.newTopMod
			});
			var td = Object(r.b)(ed, e => ({
					onUsernameChange: t => e(Object(D.b)({
						username: t
					}))
				}))((function(e) {
					return s.a.createElement(Hl, {
						className: e.className,
						options: X.g[X.a.ReplaceTopMod](),
						poll: e.poll,
						subreddit: e.subreddit,
						onUpdatePoll: e.onUpdatePoll
					}, l.fbt._("Should", null, {
						hk: "22RF0A"
					}), s.a.createElement(Wl.c, {
						redditStyle: !0,
						className: Yl.a.input,
						label: l.fbt._("username", null, {
							hk: "1Fk03V"
						}),
						max: $l,
						type: "text",
						value: e.topMod,
						onChange: t => e.onUsernameChange(t.currentTarget.value)
					}), l.fbt._("become the top moderator?", null, {
						hk: "4COtce"
					}))
				})),
				nd = n("./src/reddit/icons/svgs/Info/index.tsx"),
				od = n("./src/reddit/components/PollCreator/DefaultHintText/index.m.less"),
				sd = n.n(od);
			const rd = e => [() => l.fbt._("Suggest short clear options", null, {
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

			function id(e) {
				const {
					isPrediction: t
				} = e;
				return s.a.createElement(o.Fragment, null, s.a.createElement("div", {
					className: sd.a.helpTitle
				}, s.a.createElement(nd.a, {
					className: sd.a.infoIcon
				}), s.a.createElement("div", {
					className: sd.a.helpTitleText
				}, t ? l.fbt._("Tips on Better Predictions", null, {
					hk: "3kIzkr"
				}) : l.fbt._("Tips on Better Polls", null, {
					hk: "2QMuX9"
				}))), s.a.createElement("ol", {
					className: sd.a.helpTextList
				}, rd(!!t).map(e => s.a.createElement("li", {
					className: sd.a.helpTextItem,
					key: e()
				}, e()))))
			}
			var ad = n("./src/reddit/components/PostCreationForm/MarkdownEditor/index.tsx"),
				cd = n("./src/reddit/components/RichTextEditor/index.tsx"),
				ld = n("./src/reddit/featureFlags/component.tsx"),
				dd = n("./src/reddit/helpers/richTextEditor/index.ts"),
				ud = n("./src/reddit/models/PostRequirements/index.ts"),
				pd = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				md = n("./src/reddit/icons/svgs/Poll/index.tsx"),
				hd = n("./src/reddit/components/PostCreationForm/PostEditor/GovTypeSelector/index.m.less"),
				fd = n.n(hd);
			const bd = Object(Zt.a)(qc.a),
				gd = [{
					Icon: md.a,
					showNewTag: !0,
					text: () => l.fbt._("general", null, {
						hk: "2zk1er"
					}),
					type: null
				}, {
					Icon: pd.a,
					showNewTag: !1,
					text: () => l.fbt._("governance", null, {
						hk: "1wlLfQ"
					}),
					type: X.a.GovGeneric
				}, {
					Icon: pd.a,
					showNewTag: !1,
					text: () => l.fbt._("spin-off a new community", null, {
						hk: "jNK0c"
					}),
					type: X.a.Spinoff
				}],
				xd = "gov-type-selector-dropdown";
			const Cd = Object(i.c)({
				dropdownIsOpen: e => e.tooltipId === xd,
				govType: e => e.creations.formData.govType,
				spinoffEnabled: ce.d.spSpinoffs
			});
			var yd = Object(r.b)(Cd, e => ({
					onChangeGovType: (t, n) => {
						e(Object(a.j)({
							oldType: n,
							type: t
						})), e(Object(Vc.i)())
					},
					onToggleDropdown: () => e(Object(Vc.h)({
						tooltipId: xd
					}))
				}))((function(e) {
					const t = function(e, t) {
							return gd.filter(({
								type: e
							}) => !(!t.spinoffEnabled && e === X.a.Spinoff))
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
					}, n.text()), s.a.createElement(Tn.a, {
						className: fd.a.dropdownIcon
					}), n.showNewTag && s.a.createElement("div", {
						className: fd.a.newLabel
					}, l.fbt._("new", null, {
						hk: "4iv34v"
					}))), s.a.createElement(bd, {
						className: fd.a.dropdown,
						tooltipId: xd,
						isOpen: e.dropdownIsOpen
					}, t.map((t, o) => s.a.createElement(Gc.b, {
						"data-redditstyle": !0,
						displayText: t.text(),
						isSelected: t.type === n.type,
						key: o,
						onClick: () => e.onChangeGovType(t.type, e.govType)
					}))))
				})),
				Ed = n("./src/reddit/components/PostCreationForm/PostEditor/index.m.less"),
				vd = n.n(Ed);

			function _d() {
				return (_d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Od = Object(ld.a)("spGovPolls", yd),
				kd = (e, t) => !e && t && t.bodyRestrictionPolicy === ud.a.Required,
				Sd = Object(i.c)({
					canPostAsModerator: S.e,
					destSubreddit: S.h,
					draft: j.d,
					editorMode: S.n,
					govType: e => e.creations.formData.govType,
					markdownBody: S.O,
					pending: S.U,
					poll: e => e.creations.formData.polls || void 0,
					postCreationFieldErrors: Rn,
					postRequirements: S.ib,
					rteState: S.Z,
					shouldAllowBodyText: S.bb,
					subreddit: v.q
				}),
				jd = Object(r.b)(Sd, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(jt(m.ob.BODY, o)))
					},
					onFocus: () => e((e, t) => _.n(t(), b.k.CLICK, b.l.BODY)),
					onRTEStateChange: (n, o) => {
						e(a.e({
							rteState: n,
							isContentChanged: o
						})), t()
					},
					onToggleEditorMode: (t, n) => e(Fc.d(b.g.POST_CREATION, t, n)),
					onTrackToolbarClick: (t, n) => e((e, o) => _.z(o(), t, n)),
					onUpdatePoll: t => e(Object(Lc.b)(t))
				}));
			class wd extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {}, this.onEditorResize = e => {
						this.setState({
							editorHeight: e
						})
					}, this.onToggleEditorMode = async (e, t) => {
						await this.props.onToggleEditorMode(e, t), e === b.h.RICH_TEXT ? this.rteRef && this.rteRef.focus() : this.markdownEditorRef && this.markdownEditorRef.focus()
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
						postRequirements: c,
						rteState: d,
						subreddit: u
					} = this.props, p = a[m.ob.BODY].length > 0, h = !!u && u.isNSFW, f = kd(e, c) ? l.fbt._("Text (required)", null, {
						hk: "E1dIP"
					}) : l.fbt._("Text (optional)", null, {
						hk: "4jfNex"
					}), g = h;
					return o === b.h.RICH_TEXT ? s.a.createElement(cd.a, {
						allowMediaUploads: !g,
						focusableContentRTEClassName: Object(Ge.a)(vd.a.focusableContent, {
							[vd.a.mHasError]: p,
							[vd.a.mPollBorder]: !!n
						}),
						destSubreddit: t,
						editorType: dd.a.Post,
						initialHeight: this.state.editorHeight,
						rteState: d,
						onBlur: this.props.onBlur,
						onChange: this.props.onRTEStateChange,
						onEditorResize: this.onEditorResize,
						onFocus: this.props.onFocus,
						onSubmit: this.props.onSubmit,
						onSwitchEditorMode: this.onToggleEditorMode,
						placeholderText: f,
						readOnly: i,
						rteRef: this.setRteRef,
						trackToolbarClick: this.props.onTrackToolbarClick
					}) : s.a.createElement(ad.a, {
						focusableContentMarkdownClassName: Object(Ge.a)(vd.a.focusableContent, {
							[vd.a.mHasError]: p,
							[vd.a.mPollBorder]: !!n
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
						placeholderText: f
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
						className: vd.a.pollCreator
					}, s.a.createElement(Od, {
						className: vd.a.govToggle
					}), this.govType()), s.a.createElement($e.a, {
						errorModalTitle: o ? Object(Q.c)(o.name) : void 0,
						messages: t[m.ob.BODY]
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
					}, c = {
						...a,
						allowPredictions: null === (e = this.props.subreddit) || void 0 === e ? void 0 : e.allowPredictions,
						subredditId: null === (t = this.props.subreddit) || void 0 === t ? void 0 : t.id
					};
					switch (n) {
						case X.a.ReplaceTopMod:
							return r ? s.a.createElement(td, _d({}, i, {
								subreddit: r
							})) : s.a.createElement(Fl, _d({}, a, {
								hintTextComponent: s.a.createElement(id, null)
							}));
						case X.a.GovGeneric:
							return s.a.createElement(Fl, _d({}, a, {
								hintTextComponent: r ? s.a.createElement(zc, {
									subreddit: r
								}) : s.a.createElement(id, null)
							}));
						case X.a.Spinoff:
							return r ? s.a.createElement(Zl, _d({}, i, {
								subreddit: r
							})) : s.a.createElement(Fl, _d({}, a, {
								hintTextComponent: s.a.createElement(id, null)
							}));
						case X.a.Prediction:
							return s.a.createElement(Fl, _d({}, c, {
								hintTextComponent: s.a.createElement(id, {
									isPrediction: !0
								})
							}));
						case X.a.GA:
						case null:
							return s.a.createElement(Fl, _d({}, c, {
								hintTextComponent: s.a.createElement(id, null)
							}))
					}
				}
			}
			var Td = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				})(jd(wd)),
				Id = n("./src/reddit/components/PostCreationForm/PostTitle/index.m.less"),
				Pd = n.n(Id);
			const Md = Object(i.c)({
					canPostAsModerator: S.e,
					disableTitleEdits: e => e.creations.formData.govType === X.a.ReplaceTopMod || e.creations.formData.govType === X.a.Spinoff,
					pending: S.U,
					postCreationFieldErrors: Rn,
					postRequirements: S.ib,
					shouldAllowBodyText: S.bb,
					submissionType: S.a,
					subreddit: v.q,
					title: S.kb
				}),
				Nd = Object(r.b)(Md, (e, {
					onChange: t,
					onPostFieldValidation: n,
					pageLayer: o
				}) => ({
					onBlur: () => {
						n(e(jt(m.ob.TITLE, o)))
					},
					onChange: n => {
						e(a.h(n)), t(n)
					},
					onInputFocus: () => e((e, t) => _.n(t(), b.k.CLICK, b.l.TITLE))
				}));
			var Rd = Object(v.t)()(Nd(e => {
					const {
						canPostAsModerator: t,
						postRequirements: n,
						postCreationFieldErrors: o,
						subreddit: r
					} = e, i = e.submissionType === m.Lb.POST && !e.shouldAllowBodyText, a = o[m.ob.TITLE].length > 0, c = t ? qt.f : n && n.titleTextMaxLength || qt.f;
					return s.a.createElement("div", {
						className: Pd.a.container
					}, s.a.createElement("div", {
						className: Pd.a.inputWrapper
					}, s.a.createElement(Lr, {
						className: Object(Ge.a)(Pd.a.PostTitleInput, {
							[Pd.a.mHasError]: a
						}),
						disabled: e.disableTitleEdits,
						maxLength: c,
						minHeight: i ? 92 : void 0,
						onBlur: e.onBlur,
						onFocus: e.onInputFocus,
						onKeyDown: e.onKeyDown,
						onValueChange: e.onChange,
						placeholder: l.fbt._("Title", null, {
							hk: "j3s6r"
						}),
						readOnly: e.pending,
						value: e.title
					}), s.a.createElement("div", {
						className: Pd.a.charsCounter
					}, e.title.length, "/", c)), s.a.createElement($e.a, {
						errorModalTitle: r ? Object(Q.c)(r.name) : void 0,
						messages: o[m.ob.TITLE]
					}))
				})),
				Dd = n("./src/reddit/components/PostCreationForm/Prompt/index.tsx");
			const Bd = "g-recaptcha",
				Ld = "image",
				Fd = {
					COMPACT: "compact",
					NORMAL: "normal"
				},
				Ad = () => new Promise(e => {
					if (window.grecaptcha) return e(window.grecaptcha);
					window.grecaptchaOnLoad = () => e(window.grecaptcha);
					const t = document.createElement("script");
					t.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaOnLoad&render=explicit", document.body.appendChild(t)
				});
			class Kd extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					const {
						callback: e,
						size: t,
						type: n
					} = this.props;
					Ad().then(o => {
						o.render(Bd, {
							callback: e,
							type: n,
							sitekey: U.a.recaptchaSitekey,
							size: t || Fd.COMPACT
						})
					})
				}
				componentWillReceiveProps(e) {
					this.props.submissionPending && !e.submissionPending && Ad().then(e => {
						e.reset()
					})
				}
				render() {
					return s.a.createElement("div", {
						className: "Recaptcha",
						id: Bd
					})
				}
			}
			var Ud = n("./src/reddit/components/PostCreationForm/RecaptchaOverlay/index.m.less"),
				Hd = n.n(Ud);
			const {
				fbt: Wd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), zd = ut.a.div("OverlayWrapper", Hd.a), Vd = ut.a.div("OverlayContent", Hd.a), qd = ut.a.div("ExplanationText", Hd.a);
			var Gd = Object(r.b)(void 0, (e, t) => ({
				onChange: n => {
					e(a.f(n)), t.callback(n)
				}
			}))(e => s.a.createElement(zd, null, s.a.createElement(Vd, null, s.a.createElement(qd, null, Wd._("Ok, one more thing ... you're human, right?", null, {
				hk: "2xDwBB"
			})), s.a.createElement(Kd, {
				submissionPending: !0,
				callback: e.onChange,
				size: Fd.NORMAL,
				type: Ld
			}))));
			const Jd = "POST_CREATION__CONFIRM_SAVE_DRAFT_WITH_LIMITATIONS";

			function Qd(e) {
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
				})), s.a.createElement(Be.a, {
					bodyText: o,
					onClose: e.onCancel,
					onPrimaryAction: e.onConfirm,
					onSecondaryAction: e.onCancel,
					primaryButtonText: l.fbt._("Save", null, {
						hk: "1YTiSI"
					}),
					secondaryButtonText: l.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					titleText: l.fbt._("Save draft", null, {
						hk: "1RxZQJ"
					})
				})
			}
			var Zd = n("./src/reddit/components/PostCreationForm/SubredditChangePrompt/index.m.less"),
				Xd = n.n(Zd);
			const Yd = {
					[b.p.ImageWillBeRemoved]: {
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
					[b.p.VideoWillBeRemovedMediaNotAllowed]: {
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
					[b.p.VideoWillBeRemovedTooLongForGif]: {
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
					[b.p.GalleryWillBeRemovedGalleryNotAllowed]: {
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
				$d = ut.a.div("Wrapper", Xd.a),
				eu = ut.a.wrapped(ot.a, "TitleRow", Xd.a),
				tu = ut.a.div("DetailsContainer", Xd.a),
				nu = ut.a.wrapped(ot.a, "ButtonRow", Xd.a),
				ou = ut.a.wrapped(Ye.i, "CancelButton", Xd.a),
				su = ut.a.wrapped(Ye.l, "ConfirmButton", Xd.a);
			var ru = Object(ms.a)(e => {
					const {
						promptType: t,
						nextSubreddit: n
					} = e, o = Yd[t];
					return s.a.createElement($d, null, s.a.createElement(eu, null, o.removePromptTitle()), s.a.createElement(tu, null, o.details(n.name)), s.a.createElement(nu, null, s.a.createElement(su, {
						onClick: e.onConfirmed
					}, o.removeConfirm()), s.a.createElement(ou, {
						onClick: e.onCanceled
					}, o.removeCancel())))
				}),
				iu = n("./src/lib/filterQueryParams/index.ts"),
				au = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				cu = n("./src/reddit/icons/svgs/Media/index.tsx"),
				lu = n("./src/reddit/icons/svgs/Text/index.tsx"),
				du = n("./src/reddit/components/PostCreationForm/Tabs/index.m.less"),
				uu = n.n(du);
			const pu = e => ut.a.wrapped(e, "Component", uu.a),
				mu = pu(au.a),
				hu = pu(cu.a),
				fu = ut.a.wrapped(md.a, "PollIcon", uu.a),
				bu = pu(lu.a),
				gu = ut.a.div("Container", uu.a),
				xu = e => s.a.createElement("button", {
					className: Object(Ge.a)(uu.a.Tab, e.className, {
						[uu.a.isActive]: e.active
					}),
					disabled: e.disabled,
					onClick: e.onClick
				}, e.children),
				Cu = Object(i.a)(S.d, S.e, S.h, S.L, S.U, v.q, (e, t) => {
					const n = Object(v.m)(e, t);
					return !!n && Object(Fa.p)(e, {
						subredditId: n
					})
				}, (e, t, n, o, s, r, i) => {
					const {
						images: a = !0,
						links: c = !0,
						text: l = !0,
						videos: d = !0
					} = n.allowedPostTypes || {}, u = !!r && r.isNSFW;
					return {
						link: s || !c || o && !Object(he.g)("links"),
						media: !d && !a && !t || s || u && !i || o && !Object(he.g)("images"),
						post: !l && !t || s || o && !Object(he.g)("text"),
						poll: !e || o && !Object(he.g)("polls")
					}
				}),
				yu = Object(i.c)({
					canPostAsModerator: S.e,
					destSubreddit: S.h,
					govType: e => e.creations.formData.govType,
					isTabsDisabled: Cu,
					pending: S.U,
					submissionType: S.a,
					subreddit: v.q,
					isImageGalleryCreationEnabled: S.G
				}),
				Eu = Object(r.b)(yu, (e, t) => ({
					onChange: (n, o) => {
						e(a.g({
							submissionType: n,
							extra: o
						})), e((e, t) => _.s(t(), n)), e(a.u(n === m.Lb.POLL)), ((e, t, n) => {
							if (!t) return;
							const o = Object(iu.a)(t.url, n);
							t.url !== o && e(Object(p.c)(o))
						})(e, t.pageLayer, ["url", "media", "onlyTitle", "text", "selftext"])
					}
				}));
			class vu extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostTabClick = () => {
						this.props.isTabsDisabled.post || this.props.onChange(m.Lb.POST, {
							govType: this.props.govType
						})
					}, this.onMediaTabClick = () => {
						this.props.isTabsDisabled.media || this.props.onChange(m.Lb.MEDIA, {
							govType: this.props.govType
						})
					}, this.onLinkTabClick = () => {
						this.props.isTabsDisabled.link || this.props.onChange(m.Lb.LINK_ONLY, {
							govType: this.props.govType
						})
					}, this.onPollTabClick = () => {
						this.props.isTabsDisabled.poll || this.props.onChange(m.Lb.POLL, {
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
						videos: c = !0
					} = i || {};
					let d = l.fbt._("{imageOrImages} & Video", [l.fbt._param("imageOrImages", o ? "Images" : "Image")], {
						hk: "yYdjl"
					});
					return a && !c ? d = o ? l.fbt._("Images", null, {
						hk: "3fSX8N"
					}) : l.fbt._("Image", null, {
						hk: "uFHQ1"
					}) : c && !a && (d = l.fbt._("Video", null, {
						hk: "3w6DFr"
					})), s.a.createElement(gu, null, s.a.createElement(ot.a, null, s.a.createElement(xu, {
						active: n === m.Lb.POST,
						disabled: t.post,
						onClick: this.onPostTabClick
					}, s.a.createElement(bu, null), l.fbt._("Post", null, {
						hk: "ozUj2"
					})), s.a.createElement(xu, {
						active: n === m.Lb.MEDIA,
						disabled: t.media,
						onClick: this.onMediaTabClick
					}, t.media && s.a.createElement(Ft.a, {
						text: l.fbt._("Images and videos are not allowed in {subreddit name}", [l.fbt._param("subreddit name", `r/${r}`)], {
							hk: "2uC6BP"
						})
					}), s.a.createElement(hu, null), d), s.a.createElement(xu, {
						active: n === m.Lb.LINK_ONLY,
						disabled: t.link,
						onClick: this.onLinkTabClick
					}, s.a.createElement(mu, null), l.fbt._("Link", null, {
						hk: "1pbEKv"
					})), s.a.createElement(xu, {
						active: n === m.Lb.POLL,
						disabled: t.poll,
						onClick: this.onPollTabClick
					}, s.a.createElement(fu, null), l.fbt._("Poll", null, {
						hk: "SQdo4"
					}))))
				}
			}
			var _u = Object(v.t)()(Eu(vu)),
				Ou = n("./src/reddit/components/PostCreationForm/index.m.less"),
				ku = n.n(Ou);
			const Su = ut.a.div("FormContent", ku.a),
				ju = ut.a.wrapped(C.a, "CrosspostBox", ku.a),
				wu = ut.a.div("FormContainer", ku.a),
				Tu = ut.a.div("TabContent", ku.a),
				Iu = ut.a.div("PostingGuidelines", ku.a),
				Pu = Object(v.t)({
					draftId: v.u,
					isPostCreationPage: v.D,
					pageLayer: e => e,
					sourcePostId: e => Object(v.T)(e).source_id
				}),
				Mu = Object(i.c)({
					submissionType: S.a,
					allowNavigationCallback: k.a,
					contributorRequestPending: e => Object(w.g)(e, g.e.Post),
					discardGoesBack: (e, {
						pageLayer: t
					}) => {
						const n = Object(v.Q)(e, {
							pageLayer: t
						});
						return !!n && "/" === n[0]
					},
					draft: j.d,
					draftsCount: T.j,
					editorMode: S.n,
					eventSchedule: S.p,
					includeUserProfile: T.f,
					isChanged: S.B,
					isNameEditable: T.L,
					isPostSubmitEnabled: zo,
					isScheduledPost: S.L,
					flair: S.r,
					hasError: S.t,
					havePostContent: S.y,
					linkBody: S.N,
					markdownBody: S.O,
					rteBody: S.Z,
					maxDrafts: T.T,
					modalId: O.a,
					needsCaptcha: S.R,
					nextSubreddit: S.S,
					pending: S.U,
					postRequirements: S.ib,
					sourcePostRoot: S.db,
					submitMode: S.gb,
					subredditOrProfile: v.o,
					title: S.kb,
					uploads: e => e.uploads
				});
			class Nu extends s.a.Component {
				constructor(e) {
					super(e), this.postFieldValidationPending = null, this.sendStartTypingInputBodyEvent = u()(() => this.props.onStartTypingInput(b.l.BODY)), this.sendStartTypingInputTitleEvent = u()(() => this.props.onStartTypingInput(b.l.TITLE)), this.sendStartTypingInputUrlEvent = u()(() => this.props.onStartTypingInput(b.l.URL)), this.onExternalAccountConnected = () => {
						this.props.onExternalAccountsDataRequested()
					}, this.onRecaptchaSucceeded = () => {
						this.props.onSubmit(this.props.submitMode, this.postFieldValidationPending)
					}, this.onDiscardPromptOnNavigationConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.discardGoesBack || this.props.onDiscardPromptOnNavigationConfirmed(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onDiscardPromptOnNewPostConfirm = () => {
						this.props.onTrackDiscardButtonClick(), this.props.onToggleModal(b.c), this.props.onDiscardPromptOnCreatePostConfirmed()
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
						e && n(t ? b.q.ScheduledPost : b.q.Post, this.postFieldValidationPending)
					}, this.onSaveDraft = async () => {
						const {
							draftId: e,
							draftsCount: t,
							eventSchedule: n,
							maxDrafts: o,
							onToggleModal: s
						} = this.props;
						!e && t >= o ? s(Dd.a.MAX_DRAFTS_MODAL_ID) : n || this.hasRichPostMedia() ? s(Jd) : this.props.onSubmit(b.q.Draft, this.postFieldValidationPending)
					}, this.tryLoadDraft = e => {
						this.props.isChanged ? (this.setState({
							draftToLoad: e
						}), this.props.onToggleModal(Dd.a.LOAD_DRAFT_MODAL_ID)) : (this.props.onToggleModal(b.d), this.onLoadDraft(e))
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
							case Dd.a.LOAD_DRAFT_MODAL_ID:
								this.props.onToggleModal(e), this.onLoadDraft(this.state.draftToLoad);
								break;
							case Dd.a.MAX_DRAFTS_MODAL_ID:
								this.props.onRequestDraftList(), this.props.onToggleModal(b.d);
								break;
							default:
								this.props.onToggleModal(e)
						}
					}, this.onConfirmSavingDraftWithLimitations = () => {
						this.onToggleCurrentModal(), this.props.onSubmit(b.q.Draft, this.postFieldValidationPending)
					}, this.onToggleCollectionListModal = () => {
						this.props.onToggleModal(b.a)
					}, this.onCollectionCreated = e => {
						this.onToggleCurrentModal(), this.onSelectCollection(e)
					}, this.onDraftListClose = () => {
						this.props.onToggleModal(b.d)
					}, this.onPostFieldValidation = e => {
						this.postFieldValidationPending = e
					}, this.state = {
						draftToLoad: null
					}
				}
				componentDidMount() {
					Object(f.d)(f.a.PostComposer), this.externalAccountEventsChannel = Object(Me.a)(), this.externalAccountEventsChannel.addEventListener("message", this.onExternalAccountConnected), this.props.isNameEditable && this.props.startChangeUsernameFlow()
				}
				componentWillUnmount() {
					Object(f.b)(f.a.PostComposer), this.externalAccountEventsChannel && this.externalAccountEventsChannel.close(), this.props.onUnmount()
				}
				hasRichPostMedia() {
					const {
						rteBody: e,
						submissionType: t
					} = this.props;
					return t === m.Lb.POST && e.isBound && Object(E.j)(e.editorState.getCurrentContent())
				}
				renderActiveForm() {
					switch (this.props.submissionType) {
						case m.Lb.POST:
						case m.Lb.POLL:
							return s.a.createElement(Td, {
								displayPollCreation: this.props.submissionType === m.Lb.POLL,
								onChange: this.sendStartTypingInputBodyEvent,
								onPostFieldValidation: this.onPostFieldValidation,
								onSubmit: this.onSubmit
							});
						case m.Lb.MEDIA:
							return s.a.createElement(Qa, null);
						case m.Lb.LINK_ONLY:
							return s.a.createElement(Wr, {
								onChange: this.sendStartTypingInputUrlEvent,
								onKeyDown: this.handleKeyDown,
								onPostFieldValidation: this.onPostFieldValidation
							});
						case m.Lb.CROSSPOST: {
							const {
								sourcePostRoot: e
							} = this.props;
							return e && s.a.createElement(ju, {
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
						sourcePostId: c,
						sourcePostRoot: d,
						submissionType: u,
						submitMode: p,
						subredditOrProfile: h
					} = this.props;
					if (u === m.Lb.CROSSPOST) {
						if (!d) return s.a.createElement(x.b, {
							message: l.fbt._("The original post cannot be found", null, {
								hk: "3ieS5B"
							})
						});
						if (!d.isCrosspostable || d.isSponsored) return s.a.createElement(x.a, {
							message: l.fbt._("The original post cannot be crossposted", null, {
								hk: "4hn9ht"
							})
						})
					}
					const f = a && a.guidelinesText && a.guidelinesText.trim() || "";
					return s.a.createElement(wu, null, s.a.createElement(Bc, {
						submissionType: u,
						submitMode: p
					}), s.a.createElement(ds, {
						includeUserProfile: n,
						allowCrosspostableOnly: !!c
					}), !!f && s.a.createElement(Iu, null, f), s.a.createElement(Su, null, u !== m.Lb.CROSSPOST && s.a.createElement(_u, null), s.a.createElement(Tu, null, s.a.createElement(Rd, {
						onChange: this.sendStartTypingInputTitleEvent,
						onKeyDown: this.handleKeyDown,
						onPostFieldValidation: this.onPostFieldValidation
					}), this.renderActiveForm()), e && s.a.createElement(y.a, null), s.a.createElement(Xo, {
						contributorRequestPending: e,
						draftId: t,
						onCancel: this.props.onDiscardPromptOnNavigationConfirmed,
						onPostFieldValidation: this.onPostFieldValidation,
						onSaveDraft: this.onSaveDraft,
						onSubmit: this.onSubmit,
						sourcePostId: c
					}), s.a.createElement(Oc, {
						draftId: t
					})), r && s.a.createElement(Gd, {
						callback: this.onRecaptchaSucceeded
					}), o === Le && s.a.createElement(Ae, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNavigationConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: u
					}), o === b.c && s.a.createElement(Ae, {
						onAbort: this.onDiscardPromptAbort,
						onDiscardConfirmed: this.onDiscardPromptOnNewPostConfirm,
						onSaveDraft: this.onDiscardPromptSaveDraft,
						submissionType: u
					}), o === b.d && s.a.createElement(_r, {
						onClose: this.onDraftListClose,
						onLoadDraft: this.tryLoadDraft
					}), o === b.a && h && s.a.createElement(qe.a, {
						onClose: this.onToggleCollectionListModal,
						onSelectCollection: this.onSelectCollection,
						subredditId: h.id
					}), o === b.b && h && s.a.createElement(Yo.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.onCollectionCreated,
						subredditId: h.id
					}), o === Dd.a.LOAD_DRAFT_MODAL_ID && s.a.createElement(Dd.b, {
						modalId: Dd.a.LOAD_DRAFT_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), o === Dd.a.MAX_DRAFTS_MODAL_ID && s.a.createElement(Dd.b, {
						modalId: Dd.a.MAX_DRAFTS_MODAL_ID,
						onCancel: this.onPromptCancel,
						onConfirm: this.onPromptConfirm
					}), o === Jd && s.a.createElement(Qd, {
						onCancel: this.onToggleCurrentModal,
						onConfirm: this.onConfirmSavingDraftWithLimitations,
						hasEventSchedule: !!this.props.eventSchedule,
						hasRichPostMedia: this.hasRichPostMedia()
					}), i && (o === b.p.ImageWillBeRemoved || o === b.p.VideoWillBeRemovedTooLongForGif || o === b.p.VideoWillBeRemovedMediaNotAllowed || o === b.p.GalleryWillBeRemovedGalleryNotAllowed) && s.a.createElement(ru, {
						withOverlay: !0,
						promptType: o,
						nextSubreddit: i,
						onConfirmed: this.onSubredditChangePromptConfirmed,
						onCanceled: this.props.onCancelSubredditChange
					}), s.a.createElement(Ve, null))
				}
			}
			var Ru = Pu(Object(r.b)(Mu, (e, {
					draftId: t,
					sourcePostId: n,
					pageLayer: o
				}) => ({
					onLoadDraft: t => e(L.q(t)),
					onSubmit: (s, r) => e(((e, t) => async (n, o, {
						apiContext: s
					}) => {
						let r = o();
						const {
							pending: i
						} = r.creations.api.post.submit, a = Object(j.g)(r);
						if (i || a) return;
						n(_e(e)), r = o();
						const c = Object(S.a)(r),
							l = ce.d.rteVideoPoster(r),
							d = Se(r),
							u = c === m.Lb.MEDIA;
						d && (l || u) && (await n(M.f(d)), Se(o())) || (e === b.q.Draft ? await n(Object(L.r)(t.draftId)) : e === b.q.ScheduledPost && Object(me.r)(r) ? await n(je(t)) : e === b.q.ScheduledPost ? await n(we(t)) : await n(Te(t)))
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
						e(t ? Object(p.a)() : n ? Object(p.b)(n.url) : Object(p.b)("/"))
					},
					onExternalAccountsDataRequested: () => e(P.o()),
					onRedirectToSubreddit: n => e(Ie.a(n, t)),
					onCancelSubredditChange: () => {
						e(a.w("")), e(Ie.e())
					},
					onCancelAndRemoveMediaUpload: () => {
						e(Object(a.d)({
							items: [],
							selectedKey: null
						})), e(Pe.j(M.a, !0))
					},
					onClearErrors: (t, n) => t && e(a.i(n)),
					onRequestDraftList: () => e(L.p()),
					onSetDestCollection: t => e(Ie.d(t)),
					onStartTypingInput: t => e((e, n) => _.n(n(), b.k.TYPE, t)),
					onToggleIsChanged: t => e(a.q(t)),
					onToggleModal: t => e(a.w(t)),
					onTrackDiscardButtonClick: () => e((e, t) => _.c(t())),
					onUnmount: () => e((e, t) => {
						e(Pe.j(M.a, !0)), e(Pe.i(b.m, !0))
					}),
					onUploadPendingThumbnails: t => e(M.f(t)),
					startChangeUsernameFlow: () => e(Object(I.f)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onClearErrors: n => t.onClearErrors(e.hasError || e.hasSubmitValidationError, n),
					onDiscardPromptOnNavigationConfirmed: () => t.onDiscardPromptOnNavigationConfirmed(e.discardGoesBack, e.subreddit)
				}))(Nu)),
				Du = n("./src/reddit/components/PostingSidebar/index.tsx"),
				Bu = n("./src/reddit/layout/page/Listing/index.tsx"),
				Lu = n("./src/lib/makePostCreationPageKey/index.ts"),
				Fu = n("./src/reddit/helpers/trackers/screenview.ts"),
				Au = n("./src/telemetry/models/Timer.ts");
			const Ku = Object(i.c)({
					destSubreddit: S.h,
					user: T.i
				}),
				Uu = Object(r.b)(Ku, (e, {
					pageLayer: t
				}) => ({
					onResetForm: () => e(a.o(!1, t))
				})),
				Hu = Object(v.t)({
					draftId: v.u,
					pageLayer: e => e
				});
			class Wu extends o.Component {
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0;
					const e = this.props.pageLayer;
					if (e) {
						const t = Object(Lu.a)(e.urlParams);
						R.c.has(t) && this.props.sendEvent(Object(Fu.l)(t, Au.TimerType.InApp, R.c.end(t)))
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
						if (!t) return s.a.createElement(x.b, null);
						if (Object(pe.e)(t).toLowerCase() !== e.name.toLowerCase()) return s.a.createElement(x.a, null)
					}
					return s.a.createElement(Bu.a, {
						redditStyle: !0,
						disableFullscreen: !0,
						navBar: s.a.createElement("div", null),
						content: s.a.createElement(s.a.Fragment, null, s.a.createElement(c.a, null), s.a.createElement(Ru, null)),
						sidebar: s.a.createElement(Du.a, null)
					})
				}
			}
			t.default = Hu(Uu(Object(xo.c)(Wu)))
		},
		"./src/reddit/selectors/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/actions/postCreation/constants.ts");
			const s = (e, t) => e.creations.api.editor.converting.pending[t || o.k]
		},
		"./src/reddit/selectors/experiments/econ/customEmojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(s.a)(o.ob)
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
					experimentName: o.uc
				}) === o.Dc.Enabled
			}
		},
		"./src/reddit/selectors/gold/enabledFeatures.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/selectors/economics.ts"),
				i = n("./src/reddit/selectors/experiments/econ/customEmojis.ts"),
				a = n("./src/reddit/selectors/gold/powerups.ts");
			const c = Object(o.a)(s.d.spEmotes, a.n, r.b, a.f, i.a, (e, t, n, o, s) => {
					if (o && s) return !0;
					if (t) return !0;
					const r = !(!n || !Object.keys(n).length);
					return e && r
				}),
				l = Object(o.a)(r.b, a.g, a.h, a.f, i.a, (e, t, n, o, s) => {
					if (s && o) return [...t, ...n].slice(0, 3);
					let r = [];
					for (const i of e || [])
						if ((r = [...r, ...Object.values(i.emotes)]).length > 3) break;
					return r.slice(0, 3)
				}),
				d = Object(o.a)(s.d.spGiphy, a.o, (e, t) => e || t)
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "r", (function() {
				return E
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "j", (function() {
				return S
			}));
			var o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts");
			const r = [],
				i = {},
				a = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				c = (e, {
					subredditId: t
				}) => {
					const n = E(e, {
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
				l = (e, t) => {
					const n = C(e, t);
					if (n) return n.mainHeader
				},
				d = (e, t) => {
					const n = C(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				u = (e, t) => {
					const n = C(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : i
				},
				p = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				m = (e, t) => {
					const n = p(e, t),
						o = n && n.publicAddress;
					if (!o) throw new Error("No wallet address found");
					return o
				},
				h = (e, t) => {
					const n = p(e, t);
					return n && n.amount || "0"
				},
				f = (e, t) => {
					const n = Object(o.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || r
				},
				b = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				g = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || a,
				x = (e, t) => {
					const n = O(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				C = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				y = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				E = (e, t) => {
					const n = y(e, t);
					return n && n.walletProvider
				},
				v = (e, t) => {
					const n = E(e, t),
						o = y(e, t);
					return n && n.provider || o && o.provider
				},
				_ = (e, t) => {
					const n = v(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby
				},
				O = (e, t) => {
					const n = E(e, t),
						o = v(e, t);
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
					const n = E(e, {
						subredditId: t
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				S = (e, t) => {
					const n = y(e, t);
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
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === o.a.Badge) return n
				},
				r = (e, {
					productId: t
				}) => {
					const n = e.products.models[t];
					if (n) {
						const o = n.subredditId,
							s = Object.keys(e.user.ownedBadges[o] || {}),
							r = e.badges.models,
							i = Date.now();
						let a = !1;
						return s.forEach(e => {
							const n = r[e];
							n && n.type === t && n.endsAt > i && (a = !0)
						}), a
					}
					return !1
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation.37be53e882ee2ff49833.js.map