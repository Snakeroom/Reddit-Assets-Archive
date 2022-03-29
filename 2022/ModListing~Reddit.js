// https://www.redditstatic.com/desktop2x/ModListing~Reddit.3cf18f1acb91bc617fe4.js
// Retrieved at 3/29/2022, 10:20:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing~Reddit"], {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/FocusTrap/index.ts"),
				i = n("./src/lib/portal/index.tsx"),
				c = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/constants/shortcuts.ts"),
				l = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
				p = n.n(u);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = e => {
				let {
					className: t,
					isVisible: n,
					...r
				} = e;
				return s.a.createElement("div", h({
					className: Object(o.a)(p.a.overlay, t, {
						[p.a.mIsVisible]: n
					})
				}, r))
			};

			function f(e) {
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
						}), Object(l.b)(), Object(c.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: r,
							onOverlayClick: a,
							overlayClassName: c,
							overlayCustomStyles: l,
							withOverlay: u,
							...h
						} = t, f = h;
						return s.a.createElement(i.a, {
							container: document.getElementById(d.b)
						}, s.a.createElement(v, {
							className: c,
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
						}, s.a.createElement(e, f))))
					}
				}
				return t
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
		"./src/lib/FocusTrap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = ['input:not([type="hidden"]):not([disabled])', "select:not([disabled])", "textarea:not([disabled])", "a[href]", "button:not([disabled])", '[tabindex]:not([tabindex="-1"]):not([disabled])', "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join();
			class s {
				constructor(e) {
					this.active = !1, this.onKeyDown = e => {
						if ("Tab" === e.key || 9 === e.keyCode) {
							const [t, n] = this.getTabbableNodes();
							if (!t || !n) return;
							e.shiftKey && e.target === t ? (e.preventDefault(), this.tryToFocusNode(n)) : e.shiftKey || e.target !== n || (e.preventDefault(), this.tryToFocusNode(t))
						}
					}, this.container = e
				}
				activate() {
					this.active || (this.active = !0, document.addEventListener("keydown", this.onKeyDown, !0))
				}
				deactivate() {
					this.active && (document.removeEventListener("keydown", this.onKeyDown, !0), this.active = !1)
				}
				getTabbableNodes() {
					const e = this.container.querySelectorAll(r);
					return [e[0], e[e.length - 1]]
				}
				tryToFocusNode(e) {
					e !== document.activeElement && e.focus && e.focus()
				}
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
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					n.prev = s, n.next = s.next, s.next = n, n.next && (n.next.prev = n);
					const o = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof r ? t : new r(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
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
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "SUBREDDIT__MODERATION_LOG_LOADED",
				s = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/pageTitle/index.ts"),
				s = n("./src/reddit/actions/gold/powerups.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/subreddit.ts"),
				i = n("./src/reddit/actions/subscription/index.ts"),
				c = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				l = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/subscriptions.ts"),
				p = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t();
				if (e(Object(o.m)({
						title: Object(r.i)()
					})), await e(Object(c.t)()), !Object(p.P)(n)) return;
				await e(Object(a.q)());
				const h = Object(d.b)(n),
					v = Object(l.a)(n);
				if (h) return await e(Object(s.d)(v));
				await e(Object(i.e)()), await e(Object(s.o)());
				const f = Object(u.c)(n);
				if (f && f.length) {
					const t = f.map(e => e.id);
					await e(Object(s.d)(t))
				}
			}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return v
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return g
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(l);
			const p = Object(s.createContext)(null),
				h = Object(s.createContext)(null);
			class v extends o.a.Component {
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
					return o.a.createElement(p.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(h.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const f = i.f + 10,
				m = o.a.memo(() => {
					const [e, t] = Object(s.useState)("-500px"), n = Object(s.useContext)(c.a);
					return o.a.createElement(p.Consumer, null, s => s && o.a.createElement("div", {
						className: Object(a.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, o.a.createElement(d.t, {
						kind: d.b.Button,
						priority: d.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const n = e.currentTarget.clientWidth + 55;
							t(`-${n}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							s.focus(), s.scrollIntoView(), window.scrollBy(0, -f)
						}
					}, r.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				g = o.a.memo(() => o.a.createElement(h.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/raf/index.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o);
			class i extends a.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && s.a.cancel(this.frame), this.frame = s()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return a.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends s.a.Component {
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
			var i = Object(o.a)(a);
			t.a = e => s.a.createElement(i, e)
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
				return L
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "d", (function() {
				return A
			}));
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
			const p = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				h = e => {
					let {
						voteState: t
					} = e;
					return t === d.a.downvoted
				},
				v = i(h, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, p);
			var f = e => s.a.createElement(c.a, {
					className: v(e),
					compact: e.compact,
					isFilled: h(e)
				}),
				m = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = n("./src/reddit/controls/Upvote/index.m.less"),
				b = n.n(g);
			const y = {
					...b.a,
					baseClassName: b.a.Upvote
				},
				x = e => {
					let {
						voteState: t
					} = e;
					return t === d.a.upvoted
				},
				O = i(x, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, y);
			var w = e => s.a.createElement(m.a, {
					className: O(e),
					compact: e.compact,
					isFilled: x(e)
				}),
				j = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				C = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				N = n.n(E);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = e => Object(o.a)({
					[N.a.compact]: e.compact,
					[N.a.dark]: Object(C.b)(Object(j.a)(e)),
					[N.a.nightmode]: e.isNightMode
				}),
				S = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: r,
						isNightMode: a,
						voteState: i,
						compact: c,
						...l
					} = e;
					return s.a.createElement("button", k({}, l, {
						className: Object(o.a)(N.a.customDownvote, _(e), {
							[N.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				L = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: r,
						isNightMode: a,
						voteState: i,
						compact: c,
						...l
					} = e;
					return s.a.createElement("button", k({}, l, {
						className: Object(o.a)(N.a.customUpvote, _(e), {
							[N.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				T = f,
				A = w
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
				isEditing: i.i,
				isBladeEditorDirty: i.h,
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
				return p
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "s", (function() {
				return m
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "t", (function() {
				return b
			})), n.d(t, "v", (function() {
				return y
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "p", (function() {
				return I
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
				p = 48,
				h = 24,
				v = 24,
				f = 312,
				m = 40,
				g = 270,
				b = 106,
				y = 5,
				x = 16,
				O = 1250,
				w = 82,
				j = 48,
				C = 36,
				I = 40
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
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
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
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
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
			const a = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					},
					gqlRealtime2Context: () => {
						throw new Error("Component attempted to make an API request with no GqlRealtime2Context")
					}
				},
				i = Object(r.createContext)(a);

			function c(e) {
				const t = t => s.a.createElement(i.Consumer, null, n => {
					let {
						apiContext: r,
						gqlContext: a,
						gqlRealtime2Context: i
					} = n;
					return s.a.createElement(e, o({
						apiContext: r,
						gqlContext: a,
						gqlRealtime2Context: i
					}, t))
				});
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = s.a.createContext(!1)
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
		"./src/reddit/helpers/getReredditLinkWithYear/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
				const t = e.getFullYear(),
					n = e.getMonth();
				return `/posts/${n>=6?t:t-1}/`
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
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			n("./src/reddit/constants/categories.tsx");
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: r.Z(e),
					profile: r.R(e),
					subreddit: r.hb(e)
				}),
				o = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...s(t)
				}),
				a = e => t => ({
					...s(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...s(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...s(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
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
			const l = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.a = e => {
				let {
					compact: t,
					isFilled: n,
					...r
				} = e;
				return t ? s.a.createElement("span", d({}, r, {
					className: Object(o.a)(c.a.compactDownvoteWrapper, r.className)
				}), s.a.createElement(l, {
					className: c.a.compactDownvote,
					isFilled: n
				})) : s.a.createElement("span", d({}, r, {
					className: Object(o.a)(c.a.downvoteWrapper, r.className)
				}), s.a.createElement(l, {
					isFilled: n
				}))
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
			const l = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.a = e => {
				let {
					compact: t,
					isFilled: n,
					...r
				} = e;
				return t ? s.a.createElement("span", d({}, r, {
					className: Object(o.a)(c.a.compactUpvoteWrapper, r.className)
				}), s.a.createElement(l, {
					className: c.a.compactUpvote,
					isFilled: n
				})) : s.a.createElement("span", d({}, r, {
					className: Object(o.a)(c.a.upvoteWrapper, r.className)
				}), s.a.createElement(l, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
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
			const p = Object(a.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: r,
					theme: a,
					...d
				} = e, p = Object(c.a)(e), h = {
					"--pseudo-before-background": t || Object(i.g)(p.canvas, p.canvasImgUrl, p.canvasImgPosition)
				};
				return s.a.createElement("div", u({
					className: Object(o.a)(l.a.backgroundContainer, n),
					style: h
				}, d))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7",
				onlyChildMargin: "_2OVNlZuUd8L9v0yVECZ2iA"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				p = n.n(u);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(d.u)(),
				f = Object(a.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.R)(e, t)
				}),
				m = Object(o.b)(f);
			t.a = v(m(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: r,
					dispatch: o,
					fitPageToContent: a,
					forcedLayout: l,
					isCollectionLayout: u,
					isEditing: v,
					layout: f,
					pageLayer: m,
					...g
				} = e;
				return s.a.createElement("div", h({
					className: Object(i.a)(t, p.a.styledContent, {
						[p.a.mLargePostLayout]: f === c.g.Large || Object(d.O)(m),
						[p.a.mDisableFullScreen]: r && !u,
						[p.a.mClassicWidth]: u,
						[p.a.mIsEditing]: !!v,
						[p.a.mCanFlexFullWidth]: !a,
						[p.a.onlyChildMargin]: !n
					})
				}, g))
			}))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_31N0dvxfpsO6Ur5AKx4O5d",
				sidebar: "_3Kd8DQpBIbsr5E1JcrMFTY",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				a = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				p = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				h = n("./src/reddit/layout/page/Listing/index.m.less"),
				v = n.n(h);
			t.a = e => {
				const {
					backgroundColor: t,
					className: n,
					containerRef: h,
					content: f,
					contentBanner: m,
					contentClassName: g,
					contentNavBar: b,
					disableFullscreen: y,
					fitPageToContent: x,
					forcedLayout: O,
					hideOnlyChildMargin: w,
					isCollectionLayout: j,
					isPageSwapped: C,
					maxWidth: I,
					navBar: E,
					redditStyle: N,
					sidebar: k,
					sidebars: _,
					trendingUnit: S,
					subredditId: L
				} = e, T = S ? "28px" : "0", A = C ? {
					marginRight: `${c.q}px`,
					marginTop: T
				} : {
					marginLeft: `${c.q}px`,
					marginTop: T
				}, B = k && s.a.createElement("div", {
					className: Object(i.a)(v.a.sidebar, j ? v.a["m-collectionLayout"] : v.a.defaultLayout),
					style: A
				}, k), D = s.a.createElement(a.a, {
					hideOnlyChildMargin: w,
					className: g,
					disableFullscreen: y,
					fitPageToContent: x,
					forcedLayout: O,
					isCollectionLayout: j
				}, m, f);
				let P;
				P = _ ? s.a.createElement(s.a.Fragment, null, _[0], D, _[1]) : C ? s.a.createElement(s.a.Fragment, null, B, D) : s.a.createElement(s.a.Fragment, null, D, B);
				const M = y ? `${I||l.a+2*c.m}px` : "100%",
					U = Object(r.useContext)(u.a);
				return s.a.createElement(p.a, {
					subredditId: L
				}, s.a.createElement("div", {
					className: Object(i.a)(v.a.outerContainer, d.i, n, {
						[v.a.outerContainerExp]: U
					}),
					ref: h
				}, s.a.createElement(o.a, {
					className: d.h,
					redditStyle: N,
					backgroundColor: t
				}), s.a.createElement("div", {
					className: v.a.innerContainer
				}, E, b, (e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null)(e), s.a.createElement("div", {
					style: {
						maxWidth: M
					}
				}, S), s.a.createElement("div", {
					className: v.a.body,
					style: {
						maxWidth: M
					}
				}, P))))
			}
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
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/subredditModeration/constants.ts");
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.g:
						case s.f:
							return null;
						case s.e:
							return t.payload;
						default:
							return e
					}
				},
				a = n("./src/reddit/models/SubredditModeration/index.ts");
			const i = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.g: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(a.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case s.f:
						case s.e: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(a.e)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				d = Object(r.c)({
					error: o,
					pending: c
				});
			const l = {};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.f: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, s = Object(a.e)(r, n);
						return {
							...e,
							[s]: !0
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var h = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.f: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				v = n("./node_modules/icepick/icepick.js");
			const f = {};
			var m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.d:
					case s.f: {
						const {
							subredditId: n,
							approvedSubmitters: r
						} = t.payload, s = {
							[n]: r
						};
						return Object(v.merge)(e, s)
					}
					case s.k: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(v.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.j:
					case s.i:
						return null;
					case s.h:
						return t.payload;
					default:
						return e
				}
			};
			var b = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.j:
							return !0;
						case s.i:
						case s.h:
							return !1;
						default:
							return e
					}
				},
				y = Object(r.c)({
					error: g,
					pending: b
				});
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.j:
							return null;
						case s.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				O = Object(r.c)({
					api: y,
					result: x
				});
			const w = {};
			var j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.f: {
							const {
								subredditId: n,
								approvedSubmitterIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case s.k: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case s.d: {
							const {
								subredditId: n,
								approvedSubmitterIds: r
							} = t.payload, s = r[0];
							return s && e[n] && -1 === e[n].indexOf(s) ? {
								[n]: [s, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				C = Object(r.c)({
					api: d,
					fetchedTokens: u,
					loadMore: h,
					models: m,
					search: O,
					userOrder: j
				}),
				I = n("./src/reddit/actions/grantUserFlair/constants.ts");
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I.g:
					case I.i:
						return null;
					case I.f:
						return t.payload;
					default:
						return e
				}
			};
			var N = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I.i:
							return !0;
						case I.g:
						case I.f:
							return !1;
						default:
							return e
					}
				},
				k = Object(r.c)({
					error: E,
					pending: N
				}),
				_ = n("./node_modules/lodash/merge.js"),
				S = n.n(_),
				L = n("./node_modules/lodash/omit.js"),
				T = n.n(L);
			const A = {};
			var B = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I.g:
					case I.k: {
						const {
							subredditId: n,
							flairedUsers: r
						} = t.payload;
						return S()({
							...e
						}, {
							[n]: r
						})
					}
					case I.c: {
						const {
							subredditId: n,
							userName: r
						} = t.payload, s = T()(e[n], r);
						return {
							...e,
							[n]: s
						}
					}
					case I.a:
					case I.b:
					case I.h:
						const {
							subredditId: n, userName: r, applied: s
						} = t.payload;
						return s ? {
							...e,
							[n]: {
								...e[n],
								[r]: s
							}
						} : e;
					default:
						return e
				}
			};
			const D = {};
			var P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I.g: {
						const {
							key: n,
							pageInfo: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			var M = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I.l:
					case I.k:
						return null;
					case I.j:
						return t.payload;
					default:
						return e
				}
			};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I.l:
							return !0;
						case I.k:
						case I.j:
							return !1;
						default:
							return e
					}
				},
				R = Object(r.c)({
					error: M,
					pending: U
				});
			var q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case I.c: {
							const {
								userName: n
							} = t.payload;
							return e === n ? null : e
						}
						default:
							return e
					}
				},
				F = Object(r.c)({
					api: R,
					result: q
				});
			const K = {};
			var W = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I.g: {
							const {
								key: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case I.a: {
							const {
								key: n,
								userName: r
							} = t.payload;
							if (!n) return e;
							if (!e[n].includes(r)) {
								const t = [...e[n], r];
								return {
									...e,
									[n]: t
								}
							}
							return e
						}
						case I.c: {
							const {
								userName: n
							} = t.payload, r = {};
							for (const t in e) r[t] = e[t].filter(e => e !== n);
							return r
						}
						default:
							return e
					}
				},
				V = Object(r.c)({
					api: k,
					models: B,
					pageInfo: P,
					search: F,
					userOrder: W
				}),
				z = n("./src/reddit/actions/moderationLog/constants.ts");
			const H = {};
			var J = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case z.b: {
						const {
							actionIds: n,
							key: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[r]: n
							}
						}
					}
					default:
						return e
				}
			};
			const Q = {};
			var G = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case z.b: {
							const {
								normalizedModerationLog: n,
								subredditId: r
							} = t.payload, s = {};
							n.forEach(e => {
								s[e.id] = e
							});
							const o = {
								[r]: s
							};
							return S()({
								...e
							}, o)
						}
						default:
							return e
					}
				},
				Y = Object(r.c)({
					itemOrder: J,
					models: G
				});
			var Z = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case z.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const X = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case z.b: {
						const {
							hasNextPage: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case z.b: {
						const {
							hasPreviousPage: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			const ne = [];
			var re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case z.a: {
						const {
							normalizedModerators: n,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			var se = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case z.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				oe = Object(r.c)({
					actions: Y,
					endCursor: Z,
					hasNextPage: $,
					hasPreviousPage: te,
					moderators: re,
					startCursor: se
				});
			const ae = {};
			var ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.K:
					case s.u: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload.response || t.payload, s = {
							[n]: r
						};
						return Object(v.merge)(e, s)
					}
					case s.y: {
						const {
							subredditId: n,
							userId: r,
							permissions: s
						} = t.payload;
						return Object(v.setIn)(e, [n, r, "modPermissions"], s)
					}
					case s.fb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(v.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			const ce = {};
			var de = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.v:
					case s.u: {
						const {
							key: n,
							subredditId: r
						} = t.payload;
						return r ? {
							...e,
							[n]: null
						} : e
					}
					case s.t: {
						const {
							error: n,
							key: r,
							subredditId: s
						} = t.payload;
						return s ? {
							...e,
							[r]: n
						} : e
					}
					default:
						return e
				}
			};
			const le = {};
			var ue = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.t:
						case s.u: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case s.v: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !0
							} : e
						}
						default:
							return e
					}
				},
				pe = Object(r.c)({
					error: de,
					pending: ue
				});
			const he = {};
			var ve = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.u: {
							const {
								subredditId: n,
								response: r,
								key: s
							} = t.payload;
							return Object(v.setIn)(e, [n, s], r.moderatorIds)
						}
						case s.fb: {
							const {
								subredditId: n,
								userId: r,
								key: s
							} = t.payload, o = e[n][s].filter(e => e !== r);
							return Object(v.setIn)(e, [n, s], o)
						}
						default:
							return e
					}
				},
				fe = Object(r.c)({
					data: ve,
					api: pe
				});
			var me = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.B:
					case s.A:
						return null;
					case s.z:
						return t.payload;
					default:
						return e
				}
			};
			var ge = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.A:
						case s.z:
							return !1;
						case s.B:
							return !0;
						default:
							return e
					}
				},
				be = Object(r.c)({
					error: me,
					pending: ge
				});
			const ye = {};
			var xe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.A: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload;
						return Object(v.set)(e, n, r)
					}
					case s.cb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(v.unsetIn)(e, [n, r])
					}
					case s.c: {
						const n = t.payload,
							{
								subredditId: r,
								moderators: s
							} = n,
							o = {
								[r]: s
							};
						return Object(v.merge)(e, o)
					}
					default:
						return e
				}
			};
			const Oe = {};
			var we = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.A: {
							const {
								subredditId: n,
								moderatorIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case s.cb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, s = e[n].filter(e => e !== r);
							return {
								...e,
								[n]: s
							}
						}
						case s.c: {
							const n = t.payload,
								{
									subredditId: r,
									moderatorIds: s
								} = n,
								o = [...e[r] || [], ...s];
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				je = Object(r.c)({
					api: be,
					models: xe,
					userOrder: we
				});
			const Ce = {};
			var Ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.H: {
						const {
							subredditId: n,
							response: r
						} = t.payload, {
							invitePending: s
						} = r, o = {
							[n]: s
						};
						return Object(v.merge)(e, o)
					}
					case s.E:
					case s.F: {
						const {
							subredditId: n
						} = t.payload;
						return Object(v.unset)(e, n)
					}
					default:
						return e
				}
			};
			const Ee = {};
			var Ne = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ee,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.u: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const ke = {};
			var _e = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.H: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Se = {};
			var Le = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Se,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.H: {
						const {
							response: n
						} = t.payload, r = {
							[n.subredditId]: n.moderators
						};
						return Object(v.merge)({
							...e
						}, r)
					}
					case s.y: {
						const n = t.payload,
							{
								subredditId: r,
								userId: s,
								permissions: o
							} = n;
						return e[r] && e[r][s] ? Object(v.setIn)(e, [r, s, "modPermissions"], o) : e
					}
					default:
						return e
				}
			};
			var Te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.L:
					case s.K:
						return null;
					case s.J:
						return t.payload;
					default:
						return e
				}
			};
			var Ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.L:
							return !0;
						case s.K:
						case s.J:
							return !1;
						default:
							return e
					}
				},
				Be = Object(r.c)({
					error: Te,
					pending: Ae
				}),
				De = n("./node_modules/lodash/isEqual.js"),
				Pe = n.n(De);
			var Me = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.L:
						case s.J:
						case s.fb:
							return null;
						case s.K: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case s.y: {
							const {
								userId: n,
								permissions: r
							} = t.payload;
							return e && e.id === n && !Pe()(e.modPermissions, r) ? {
								...e,
								modPermissions: r
							} : e
						}
						default:
							return e
					}
				},
				Ue = Object(r.c)({
					api: Be,
					result: Me
				});
			const Re = {};
			var qe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.I:
					case s.H: {
						const {
							subredditId: n,
							key: r
						} = t.payload;
						return n ? {
							...e,
							[r]: null
						} : e
					}
					case s.G: {
						const {
							error: n,
							subredditId: r,
							key: s
						} = t.payload;
						return r ? {
							...e,
							[s]: n
						} : e
					}
					default:
						return e
				}
			};
			const Fe = {};
			var Ke = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.G:
						case s.H: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case s.I: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !0
							} : e
						}
						default:
							return e
					}
				},
				We = Object(r.c)({
					error: qe,
					pending: Ke
				});
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const Ve = {};
			var ze = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ve,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.H: {
							const {
								response: n,
								subredditId: r,
								key: s
							} = t.payload, {
								moderatorIds: o
							} = n;
							return Object(v.merge)(e, {
								[r]: {
									[s]: o
								}
							})
						}
						case s.fb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, s = {
								...e[n]
							};
							return Object.keys(e[n]).forEach(t => {
								const o = e[n][t].filter(e => e !== r);
								s[t] = o
							}), Object(v.set)(e, n, s)
						}
						default:
							return e
					}
				},
				He = Object(r.c)({
					data: ze,
					api: We
				}),
				Je = Object(r.c)({
					editableModerators: ie,
					editableUserOrder: fe,
					invitedModerators: je,
					invitePending: Ie,
					loadMoreModerators: _e,
					loadMoreEditableModerators: Ne,
					models: Le,
					search: Ue,
					userOrder: He
				}),
				Qe = n("./src/reddit/actions/bulkActions/constants.ts");
			var Ge = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qe.c:
						case Qe.b:
							return null;
						case Qe.a:
							return t.payload;
						default:
							return e
					}
				},
				Ye = n("./src/reddit/actions/modQueue/constants.ts");
			var Ze = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qe.c:
							return !0;
						case Qe.b:
						case Qe.a:
						case Ye.s:
						case Ye.r:
							return !1;
						default:
							return e
					}
				},
				Xe = Object(r.c)({
					error: Ge,
					pending: Ze
				});
			const $e = {};
			var et = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.a: {
							const {
								ids: n
							} = t.payload, r = {};
							return n.forEach(e => r[e] = !0), {
								...e,
								...r
							}
						}
						case Ye.d: {
							const {
								ids: n
							} = t.payload;
							return T()(e, n)
						}
						case Ye.c: {
							const {
								ids: e
							} = t.payload, n = {};
							return e.forEach(e => n[e] = !0), n
						}
						default:
							return e
					}
				},
				tt = n("./src/reddit/models/ModQueue/index.ts");
			const nt = {};
			var rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Qe.b: {
							const {
								operation: e,
								ids: n
							} = t.payload;
							return "approve" === e ? nt : {
								[tt.c[e]]: n
							}
						}
						default:
							return e
					}
				},
				st = Object(r.c)({
					api: Xe,
					selectedItems: et,
					undoLastAction: rt
				});
			var ot = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.g:
					case Ye.f:
						return null;
					case Ye.e:
						return t.payload;
					default:
						return e
				}
			};
			var at = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.g:
							return !0;
						case Ye.f:
						case Ye.e:
							return !1;
						default:
							return e
					}
				},
				it = Object(r.c)({
					error: ot,
					pending: at
				});
			const ct = {};
			var dt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ct,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.f: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const lt = {};
			var ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.f: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				pt = Object(r.c)({
					api: it,
					itemOrder: dt,
					loadMore: ut
				}),
				ht = n("./src/reddit/actions/pages/modListing/constants.ts");
			var vt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ht.e: {
						const n = t.payload,
							{
								moderatingSubreddits: r
							} = n;
						return r ? null : e
					}
					case Ye.i:
					case Ye.f:
					case Ye.m:
					case Ye.p:
					case Ye.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: n
						} = e;
						return n
					}
					case Ye.k: {
						const e = t.payload,
							{
								moderatedAfter: n
							} = e;
						return n
					}
					default:
						return e
				}
			};
			const ft = [];
			var mt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ft,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.i:
					case Ye.f:
					case Ye.m:
					case Ye.p:
					case Ye.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: n
						} = e;
						return n
					}
					case Ye.k: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return [...e, ...r]
					}
					case ht.e: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return r || e
					}
					default:
						return e
				}
			};
			var gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.b:
						return !0;
					default:
						return e
				}
			};
			var bt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.k:
							return !0;
						case Ye.b:
							return !1;
						default:
							return e
					}
				},
				yt = Object(r.c)({
					after: vt,
					data: mt,
					loaded: gt,
					pending: bt
				});
			var xt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.j:
					case Ye.i:
						return null;
					case Ye.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ot = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.j:
							return !0;
						case Ye.i:
						case Ye.h:
							return !1;
						default:
							return e
					}
				},
				wt = Object(r.c)({
					error: xt,
					pending: Ot
				});
			const jt = {};
			var Ct = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.i: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const It = {};
			var Et = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : It,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.i: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Nt = Object(r.c)({
					api: wt,
					itemOrder: Ct,
					loadMore: Et
				});
			var kt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.n:
					case Ye.m:
						return null;
					case Ye.l:
						return t.payload;
					default:
						return e
				}
			};
			var _t = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.n:
							return !0;
						case Ye.m:
						case Ye.l:
							return !1;
						default:
							return e
					}
				},
				St = Object(r.c)({
					error: kt,
					pending: _t
				});
			const Lt = {};
			var Tt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.m: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const At = {};
			var Bt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : At,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.m: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Dt = Object(r.c)({
					api: St,
					itemOrder: Tt,
					loadMore: Bt
				});
			var Pt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.q:
					case Ye.p:
						return null;
					case Ye.o:
						return t.payload;
					default:
						return e
				}
			};
			var Mt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.q:
							return !0;
						case Ye.p:
						case Ye.o:
							return !1;
						default:
							return e
					}
				},
				Ut = Object(r.c)({
					error: Pt,
					pending: Mt
				});
			const Rt = {};
			var qt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.p: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Ft = {};
			var Kt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ft,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.p: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Wt = Object(r.c)({
					api: Ut,
					itemOrder: qt,
					loadMore: Kt
				});
			var Vt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.w:
					case Ye.v:
						return null;
					case Ye.u:
						return t.payload;
					default:
						return e
				}
			};
			var zt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.w:
							return !0;
						case Ye.v:
						case Ye.u:
							return !1;
						default:
							return e
					}
				},
				Ht = Object(r.c)({
					error: Vt,
					pending: zt
				});
			const Jt = {};
			var Qt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ye.v: {
						const {
							listingKey: n,
							page: r,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Gt = {};
			var Yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ye.v: {
							const {
								listingKey: n,
								response: r
							} = t.payload, {
								modqueue: s
							} = r, o = s[s.length - 1] || null;
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				Zt = Object(r.c)({
					api: Ht,
					itemOrder: Qt,
					loadMore: Yt
				}),
				Xt = Object(r.c)({
					bulkAction: st,
					edited: pt,
					moderatedCommunitiesOrder: yt,
					modqueue: Nt,
					reports: Dt,
					spam: Wt,
					unmoderated: Zt
				});
			var $t = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.U:
					case s.S:
						return null;
					case s.R:
						return t.payload;
					default:
						return e
				}
			};
			const en = {};
			var tn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : en,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.U: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(a.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case s.S:
						case s.R: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(a.e)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				nn = Object(r.c)({
					error: $t,
					pending: tn
				});
			const rn = {};
			var sn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.S: {
							const {
								fetchedToken: n,
								subredditId: r
							} = t.payload, s = Object(a.e)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				on = n("./src/reddit/actions/inContextModeration.ts");
			var an = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case on.b:
						return t.payload;
					default:
						return e
				}
			};
			const cn = {};
			var dn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.S: {
						const {
							subredditId: e,
							after: n
						} = t.payload;
						return {
							[e]: n
						}
					}
					default:
						return e
				}
			};
			const ln = {};
			var un = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ln,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.T:
					case s.S: {
						const {
							subredditId: n,
							mutedUsers: r
						} = t.payload, s = {
							[n]: r
						};
						return Object(v.merge)(e, s)
					}
					case s.Y: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(v.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var pn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.X:
					case s.W:
						return null;
					case s.V:
						return t.payload;
					default:
						return e
				}
			};
			var hn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.X:
							return !0;
						case s.W:
						case s.V:
							return !1;
						default:
							return e
					}
				},
				vn = Object(r.c)({
					error: pn,
					pending: hn
				});
			var fn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.X:
						case s.V:
							return null;
						case s.W: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				mn = Object(r.c)({
					api: vn,
					result: fn
				});
			const gn = {};
			var bn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.S: {
							const {
								subredditId: n,
								mutedUserIds: r
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...r]
							} : {
								...e,
								[n]: r
							}
						}
						case s.Y: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case s.T: {
							const {
								subredditId: n,
								mutedUserIds: r
							} = t.payload, s = r[0];
							return s && e[n] && -1 === e[n].indexOf(s) ? {
								[n]: [s, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				yn = Object(r.c)({
					api: nn,
					fetchedTokens: sn,
					inContext: an,
					loadMore: dn,
					models: un,
					search: mn,
					userOrder: bn
				});
			t.a = Object(r.c)({
				approvedSubmitters: C,
				flairedUsers: V,
				moderationLog: oe,
				moderators: Je,
				modQueue: Xt,
				muted: yn
			})
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/pages/powerups.ts");
			const a = "/powerups",
				i = {
					action: o.a,
					chunk: s.s.POWERUPS,
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Powerups",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Powerups").then(n.bind(null, "./src/reddit/pages/Powerups/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Powerups/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: s.Nb.POWERUPS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(s.c)(e, {
					experimentName: r.Td,
					experimentEligibilitySelector: s.a
				}) === r.de.Enabled,
				a = e => Object(s.c)(e, {
					experimentName: r.Ud,
					experimentEligibilitySelector: s.a,
					expEventOverride: !1
				}) === r.ee.Enabled
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/reddit/featureFlags/subredditPoints.ts"),
				s = n("./src/reddit/selectors/moderatorPermissions.ts"),
				o = n("./src/reddit/selectors/user.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/selectors/gold/powerups/index.ts");
			const c = e => {
					const t = Object(s.a)(e);
					if (!t) return null;
					const n = Object(o.M)(e),
						a = [];
					for (const s of t) {
						const t = e.subreddits.models[s];
						if (!t) return null;
						const o = Object(i.h)(e, {
							subredditId: s
						});
						r.b.has(t.name) || t.isNSFW || t.subscribers < 1e3 && !n || a.push({
							id: s,
							displayText: t.displayText,
							hasPowerups: o
						})
					}
					return a
				},
				d = Object(a.a)(c, e => !!(null == e ? void 0 : e.length))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing~Reddit.3cf18f1acb91bc617fe4.js.map