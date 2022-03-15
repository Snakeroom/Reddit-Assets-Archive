// https://www.redditstatic.com/desktop2x/ModListing~Reddit.b6402ff80f1af01c88e9.js
// Retrieved at 3/15/2022, 2:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing~Reddit"], {
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/FocusTrap/index.ts"),
				c = s("./src/lib/portal/index.tsx"),
				i = s("./src/reddit/actions/shortcuts/utils.ts"),
				d = s("./src/reddit/constants/shortcuts.ts"),
				u = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				l = s("./src/higherOrderComponents/asModal/index.m.less"),
				p = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ({
				className: e,
				isVisible: t,
				...s
			}) => n.a.createElement("div", m({
				className: Object(a.a)(p.a.overlay, e, {
					[p.a.mIsVisible]: t
				})
			}, s));

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
						}), Object(u.a)(), this.ref && (this.focusTrap = new o.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(u.b)(), Object(i.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: s,
							ignoreDefaultFocus: r,
							onOverlayClick: o,
							overlayClassName: i,
							overlayCustomStyles: u,
							withOverlay: l,
							...m
						} = t, f = m;
						return n.a.createElement(c.a, {
							container: document.getElementById(d.b)
						}, n.a.createElement(h, {
							className: i,
							isVisible: l,
							onClick: this.onOverlayClick,
							style: u
						}, n.a.createElement("div", {
							"aria-modal": !0,
							className: Object(a.a)(p.a.modal, s),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, n.a.createElement(e, f))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			s("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => n.a.createElement(e, t)
			}
		},
		"./src/lib/FocusTrap/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			}));
			const r = ['input:not([type="hidden"]):not([disabled])', "select:not([disabled])", "textarea:not([disabled])", "a[href]", "button:not([disabled])", '[tabindex]:not([tabindex="-1"]):not([disabled])', "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join();
			class n {
				constructor(e) {
					this.active = !1, this.onKeyDown = e => {
						if ("Tab" === e.key || 9 === e.keyCode) {
							const [t, s] = this.getTabbableNodes();
							if (!t || !s) return;
							e.shiftKey && e.target === t ? (e.preventDefault(), this.tryToFocusNode(s)) : e.shiftKey || e.target !== s || (e.preventDefault(), this.tryToFocusNode(t))
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
		"./src/lib/LinkedListMap/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			class r {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class n {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const s = new n(t);
					return e.forEach(e => s.push(e)), s
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
					const s = t instanceof r ? t : new r(t),
						n = this.getNode(e);
					if (!n) throw new Error(`Cannot find item with key ${e}`);
					s.prev = n, s.next = n.next, n.next = s, s.next && (s.next.prev = s);
					const a = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[a] = s, this.length++
				}
				insertBefore(e, t) {
					const s = t instanceof r ? t : new r(t),
						n = this.getNode(e);
					if (!n) throw new Error(`Cannot find item with key ${e}`);
					s.next = n, s.prev = n.prev, n.prev = s, s.prev && (s.prev.next = s);
					const a = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[a] = s, this.length++
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
					const s = e instanceof r ? t.value[this.key] : e[this.key];
					this.itemsByKey[s] = t, this.length++
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
					const s = e instanceof r ? t.value[this.key] : e[this.key];
					this.itemsByKey[s] = t, this.length++
				}
			}
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return n
			}));
			const r = "SUBREDDIT__MODERATION_LOG_LOADED",
				n = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/pageTitle/index.ts"),
				n = s("./src/reddit/actions/gold/powerups.ts"),
				a = s("./src/reddit/actions/platform.ts"),
				o = s("./src/reddit/actions/subreddit.ts"),
				c = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/actions/users.ts"),
				d = s("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				l = s("./src/reddit/selectors/subscriptions.ts"),
				p = s("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const s = t();
				if (e(Object(a.m)({
						title: Object(r.h)()
					})), await e(Object(i.t)()), !Object(p.O)(s)) return;
				await e(Object(o.q)());
				const m = Object(d.b)(s),
					h = Object(u.a)(s);
				if (m) return await e(Object(n.d)(h));
				await e(Object(c.e)()), await e(Object(n.o)());
				const f = Object(l.c)(s);
				if (f && f.length) {
					const t = f.map(e => e.id);
					await e(Object(n.d)(t))
				}
			}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return y
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				i = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/components/JumpToContent/index.m.less"),
				l = s.n(u);
			const p = Object(n.createContext)(null),
				m = Object(n.createContext)(null);
			class h extends a.a.Component {
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
					return a.a.createElement(p.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, a.a.createElement(m.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const f = c.f + 10,
				b = a.a.memo(() => {
					const [e, t] = Object(n.useState)("-500px"), s = Object(n.useContext)(i.a);
					return a.a.createElement(p.Consumer, null, n => n && a.a.createElement("div", {
						className: Object(o.a)(l.a.wrapper, {
							[l.a.wrapperExp]: s
						}),
						"data-testid": "jump-to-content"
					}, a.a.createElement(d.t, {
						kind: d.b.Button,
						priority: d.c.Plain,
						className: l.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const s = e.currentTarget.clientWidth + 55;
							t(`-${s}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							n.focus(), n.scrollIntoView(), window.scrollBy(0, -f)
						}
					}, r.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), a.a.createElement("div", {
						className: Object(o.a)(l.a.rightBorder, {
							[l.a.rightBorderExp]: s
						})
					})))
				}),
				y = a.a.memo(() => a.a.createElement(m.Consumer, null, e => a.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/raf/index.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a);
			class c extends o.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && n.a.cancel(this.frame), this.frame = n()(this.props.onResize)
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
					return o.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class o extends n.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return n.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var c = Object(a.a)(o);
			t.a = e => n.a.createElement(c, e)
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, s) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return L
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "d", (function() {
				return A
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx");
			const c = (e, t, s) => r => {
				const n = e(r),
					o = t(r),
					c = !n && o;
				return Object(a.a)(s.baseClassName, r.className, {
					[s.mIsInteractive]: o,
					[s.mIsActive]: n,
					[s.mIsVoteable]: c
				})
			};
			var i = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/controls/Downvote/index.m.less"),
				l = s.n(u);
			const p = {
					...l.a,
					baseClassName: l.a.Downvote
				},
				m = ({
					voteState: e
				}) => e === d.a.downvoted,
				h = c(m, ({
					interactive: e
				}) => !1 !== e, p);
			var f = e => n.a.createElement(i.a, {
					className: h(e),
					compact: e.compact,
					isFilled: m(e)
				}),
				b = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				y = s("./src/reddit/controls/Upvote/index.m.less"),
				v = s.n(y);
			const g = {
					...v.a,
					baseClassName: v.a.Upvote
				},
				x = ({
					voteState: e
				}) => e === d.a.upvoted,
				O = c(x, ({
					interactive: e
				}) => !1 !== e, g);
			var w = e => n.a.createElement(b.a, {
					className: O(e),
					compact: e.compact,
					isFilled: x(e)
				}),
				j = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				C = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = s("./src/reddit/components/VerticalVotes/votes.m.less"),
				N = s.n(E);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = e => Object(a.a)({
					[N.a.compact]: e.compact,
					[N.a.dark]: Object(C.b)(Object(j.a)(e)),
					[N.a.nightmode]: e.isNightMode
				}),
				L = Object(o.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), s = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: r,
						isNightMode: o,
						voteState: c,
						compact: i,
						...u
					} = e;
					return n.a.createElement("button", k({}, u, {
						className: Object(a.a)(N.a.customDownvote, _(e), {
							[N.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: s
					}))
				}),
				S = Object(o.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), s = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: r,
						isNightMode: o,
						voteState: c,
						compact: i,
						...u
					} = e;
					return n.a.createElement("button", k({}, u, {
						className: Object(a.a)(N.a.customUpvote, _(e), {
							[N.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: s
					}))
				}),
				T = f,
				A = w
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/structuredStyles/index.ts"),
				o = s("./src/reddit/selectors/activeModalId.ts"),
				c = s("./src/reddit/selectors/structuredStyles.ts"),
				i = s("./src/reddit/constants/modals.ts");
			const d = Object(n.c)({
				bladeHasUnsavedChanges: c.a,
				isEditing: c.i,
				isBladeEditorDirty: c.h,
				isModalOpen: Object(o.b)(i.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(r.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(a.h)(t))
			}))
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "i", (function() {
				return d
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "j", (function() {
				return l
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "m", (function() {
				return m
			})), s.d(t, "q", (function() {
				return h
			})), s.d(t, "r", (function() {
				return f
			})), s.d(t, "s", (function() {
				return b
			})), s.d(t, "u", (function() {
				return y
			})), s.d(t, "t", (function() {
				return v
			})), s.d(t, "v", (function() {
				return g
			})), s.d(t, "w", (function() {
				return x
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "n", (function() {
				return j
			})), s.d(t, "o", (function() {
				return C
			})), s.d(t, "p", (function() {
				return I
			}));
			const r = 284,
				n = 450,
				a = 800,
				o = 284,
				c = 48,
				i = 640,
				d = 1600,
				u = 1280,
				l = 40,
				p = 48,
				m = 24,
				h = 24,
				f = 312,
				b = 40,
				y = 270,
				v = 106,
				g = 5,
				x = 16,
				O = 1250,
				w = 82,
				j = 48,
				C = 36,
				I = 40
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, s) {
			"use strict";
			var r, n;
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(r || (r = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(n || (n = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			}));
			const r = 480,
				n = 960,
				a = 1200
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const o = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				c = Object(r.createContext)(o);

			function i(e) {
				const t = t => n.a.createElement(c.Consumer, null, ({
					apiContext: s,
					gqlContext: r
				}) => n.a.createElement(e, a({
					apiContext: s,
					gqlContext: r
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = n.a.createContext(!1)
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, s) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/TextButton/index.m.less"),
				c = s.n(o);
			t.a = e => n.a.createElement("button", {
				children: e.children,
				className: Object(a.a)(c.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/helpers/getReredditLinkWithYear/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = (e = new Date) => {
				const t = e.getFullYear();
				return `/posts/${e.getMonth()>=6?t:t-1}/`
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/brcast/dist/brcast.es.js");
			const n = Object(r.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/polished/dist/polished.es.js");
			var r = s("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function n(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(r.a)(e).post
			}
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "a", (function() {
				return i
			}));
			s("./src/reddit/constants/categories.tsx");
			var r = s("./src/reddit/selectors/telemetry.ts");
			const n = e => ({
					screen: r.ab(e),
					profile: r.R(e),
					subreddit: r.ib(e)
				}),
				a = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...n(t)
				}),
				o = e => t => ({
					...n(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...n(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...n(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
				})
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Downvote/index.m.less"),
				i = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => n.a.createElement("i", {
				className: Object(a.a)(Object(o.b)("downvote", e.isFilled), i.a.downvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? n.a.createElement("span", d({}, s, {
				className: Object(a.a)(i.a.compactDownvoteWrapper, s.className)
			}), n.a.createElement(u, {
				className: i.a.compactDownvote,
				isFilled: t
			})) : n.a.createElement("span", d({}, s, {
				className: Object(a.a)(i.a.downvoteWrapper, s.className)
			}), n.a.createElement(u, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Upvote/index.m.less"),
				i = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => n.a.createElement("i", {
				className: Object(a.a)(Object(o.b)("upvote", e.isFilled), i.a.upvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? n.a.createElement("span", d({}, s, {
				className: Object(a.a)(i.a.compactUpvoteWrapper, s.className)
			}), n.a.createElement(u, {
				className: i.a.compactUpvote,
				isFilled: t
			})) : n.a.createElement("span", d({}, s, {
				className: Object(a.a)(i.a.upvoteWrapper, s.className)
			}), n.a.createElement(u, {
				isFilled: t
			}))
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, s) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/models/Theme/index.ts"),
				i = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				u = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = Object(o.a)(e => {
				const {
					backgroundColor: t,
					className: s,
					redditStyle: r,
					theme: o,
					...d
				} = e, p = Object(i.a)(e), m = {
					"--pseudo-before-background": t || Object(c.g)(p.canvas, p.canvasImgUrl, p.canvasImgPosition)
				};
				return n.a.createElement("div", l({
					className: Object(a.a)(u.a.backgroundContainer, s),
					style: m
				}, d))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, s) {
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
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/selectors/structuredStyles.ts"),
				l = s("./src/reddit/layout/page/Listing/Content.m.less"),
				p = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = Object(d.u)(),
				f = Object(o.c)({
					isEditing: u.i,
					layout: (e, t) => t.forcedLayout || Object(d.R)(e, t)
				}),
				b = Object(a.b)(f);
			t.a = h(b(({
				className: e,
				hideOnlyChildMargin: t,
				disableFullscreen: s,
				dispatch: r,
				fitPageToContent: a,
				forcedLayout: o,
				isCollectionLayout: u,
				isEditing: l,
				layout: h,
				pageLayer: f,
				...b
			}) => n.a.createElement("div", m({
				className: Object(c.a)(e, p.a.styledContent, {
					[p.a.mLargePostLayout]: h === i.g.Large || Object(d.O)(f),
					[p.a.mDisableFullScreen]: s && !u,
					[p.a.mClassicWidth]: u,
					[p.a.mIsEditing]: !!l,
					[p.a.mCanFlexFullWidth]: !a,
					[p.a.onlyChildMargin]: !t
				})
			}, b))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, s) {
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
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				o = s("./src/reddit/layout/page/Listing/Content.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/elementClassNames.ts"),
				u = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/contexts/NavbarExp.ts"),
				p = s("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				m = s("./src/reddit/layout/page/Listing/index.m.less"),
				h = s.n(m);
			t.a = e => {
				const {
					backgroundColor: t,
					className: s,
					containerRef: m,
					content: f,
					contentBanner: b,
					contentClassName: y,
					contentNavBar: v,
					disableFullscreen: g,
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
					trendingUnit: L,
					subredditId: S
				} = e, T = L ? "28px" : "0", A = C ? {
					marginRight: `${i.q}px`,
					marginTop: T
				} : {
					marginLeft: `${i.q}px`,
					marginTop: T
				}, B = k && n.a.createElement("div", {
					className: Object(c.a)(h.a.sidebar, j ? h.a["m-collectionLayout"] : h.a.defaultLayout),
					style: A
				}, k), D = n.a.createElement(o.a, {
					hideOnlyChildMargin: w,
					className: y,
					disableFullscreen: g,
					fitPageToContent: x,
					forcedLayout: O,
					isCollectionLayout: j
				}, b, f);
				let P;
				P = _ ? n.a.createElement(n.a.Fragment, null, _[0], D, _[1]) : C ? n.a.createElement(n.a.Fragment, null, B, D) : n.a.createElement(n.a.Fragment, null, D, B);
				const U = g ? `${I||u.a+2*i.m}px` : "100%",
					M = Object(r.useContext)(l.a);
				return n.a.createElement(p.a, {
					subredditId: S
				}, n.a.createElement("div", {
					className: Object(c.a)(h.a.outerContainer, d.i, s, {
						[h.a.outerContainerExp]: M
					}),
					ref: m
				}, n.a.createElement(a.a, {
					className: d.h,
					redditStyle: N,
					backgroundColor: t
				}), n.a.createElement("div", {
					className: h.a.innerContainer
				}, E, v, (e => e.hero ? n.a.createElement(n.a.Fragment, null, e.hero) : null)(e), n.a.createElement("div", {
					style: {
						maxWidth: U
					}
				}, L), n.a.createElement("div", {
					className: h.a.body,
					style: {
						maxWidth: U
					}
				}, P))))
			}
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, s) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/InlineButton/index.m.less"),
				a = s.n(n);
			t.a = r.a.button("inlineButton", a.a)
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/subredditModeration/constants.ts");
			var a = (e = null, t) => {
					switch (t.type) {
						case n.g:
						case n.f:
							return null;
						case n.e:
							return t.payload;
						default:
							return e
					}
				},
				o = s("./src/reddit/models/SubredditModeration/index.ts");
			const c = {};
			var i = (e = c, t) => {
					switch (t.type) {
						case n.g: {
							const {
								subredditId: s,
								fetchedToken: r
							} = t.payload, n = Object(o.e)(s, r);
							return {
								...e,
								[n]: !0
							}
						}
						case n.f:
						case n.e: {
							const {
								subredditId: s,
								fetchedToken: r
							} = t.payload, n = Object(o.e)(s, r);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				d = Object(r.c)({
					error: a,
					pending: i
				});
			const u = {};
			var l = (e = u, t) => {
				switch (t.type) {
					case n.f: {
						const {
							fetchedToken: s,
							subredditId: r
						} = t.payload, n = Object(o.e)(r, s);
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var m = (e = p, t) => {
					switch (t.type) {
						case n.f: {
							const {
								subredditId: e,
								after: s
							} = t.payload;
							return {
								[e]: s
							}
						}
						default:
							return e
					}
				},
				h = s("./node_modules/icepick/icepick.js");
			const f = {};
			var b = (e = f, t) => {
				switch (t.type) {
					case n.d:
					case n.f: {
						const {
							subredditId: s,
							approvedSubmitters: r
						} = t.payload, n = {
							[s]: r
						};
						return Object(h.merge)(e, n)
					}
					case n.k: {
						const {
							subredditId: s,
							userId: r
						} = t.payload;
						return Object(h.unsetIn)(e, [s, r])
					}
					default:
						return e
				}
			};
			var y = (e = null, t) => {
				switch (t.type) {
					case n.j:
					case n.i:
						return null;
					case n.h:
						return t.payload;
					default:
						return e
				}
			};
			var v = (e = !1, t) => {
					switch (t.type) {
						case n.j:
							return !0;
						case n.i:
						case n.h:
							return !1;
						default:
							return e
					}
				},
				g = Object(r.c)({
					error: y,
					pending: v
				});
			var x = (e = null, t) => {
					switch (t.type) {
						case n.j:
							return null;
						case n.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				O = Object(r.c)({
					api: g,
					result: x
				});
			const w = {};
			var j = (e = w, t) => {
					switch (t.type) {
						case n.f: {
							const {
								subredditId: s,
								approvedSubmitterIds: r
							} = t.payload;
							return e[s] ? {
								...e,
								[s]: [...e[s], ...r]
							} : {
								...e,
								[s]: r
							}
						}
						case n.k: {
							const {
								subredditId: s,
								userId: r
							} = t.payload;
							return {
								[s]: e[s].filter(e => e !== r)
							}
						}
						case n.d: {
							const {
								subredditId: s,
								approvedSubmitterIds: r
							} = t.payload, n = r[0];
							return n && e[s] && -1 === e[s].indexOf(n) ? {
								[s]: [n, ...e[s]]
							} : e
						}
						default:
							return e
					}
				},
				C = Object(r.c)({
					api: d,
					fetchedTokens: l,
					loadMore: m,
					models: b,
					search: O,
					userOrder: j
				}),
				I = s("./src/reddit/actions/grantUserFlair/constants.ts");
			var E = (e = null, t) => {
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
			var N = (e = !1, t) => {
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
				_ = s("./node_modules/lodash/merge.js"),
				L = s.n(_),
				S = s("./node_modules/lodash/omit.js"),
				T = s.n(S);
			const A = {};
			var B = (e = A, t) => {
				switch (t.type) {
					case I.g:
					case I.k: {
						const {
							subredditId: s,
							flairedUsers: r
						} = t.payload;
						return L()({
							...e
						}, {
							[s]: r
						})
					}
					case I.c: {
						const {
							subredditId: s,
							userName: r
						} = t.payload, n = T()(e[s], r);
						return {
							...e,
							[s]: n
						}
					}
					case I.a:
					case I.b:
					case I.h:
						const {
							subredditId: s, userName: r, applied: n
						} = t.payload;
						return n ? {
							...e,
							[s]: {
								...e[s],
								[r]: n
							}
						} : e;
					default:
						return e
				}
			};
			const D = {};
			var P = (e = D, t) => {
				switch (t.type) {
					case I.g: {
						const {
							key: s,
							pageInfo: r
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			var U = (e = null, t) => {
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
			var M = (e = !1, t) => {
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
					error: U,
					pending: M
				});
			var F = (e = null, t) => {
					switch (t.type) {
						case I.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case I.c: {
							const {
								userName: s
							} = t.payload;
							return e === s ? null : e
						}
						default:
							return e
					}
				},
				K = Object(r.c)({
					api: R,
					result: F
				});
			const W = {};
			var q = (e = W, t) => {
					switch (t.type) {
						case I.g: {
							const {
								key: s,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						case I.a: {
							const {
								key: s,
								userName: r
							} = t.payload;
							if (!s) return e;
							if (!e[s].includes(r)) {
								const t = [...e[s], r];
								return {
									...e,
									[s]: t
								}
							}
							return e
						}
						case I.c: {
							const {
								userName: s
							} = t.payload, r = {};
							for (const t in e) r[t] = e[t].filter(e => e !== s);
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
					search: K,
					userOrder: q
				}),
				z = s("./src/reddit/actions/moderationLog/constants.ts");
			const H = {};
			var J = (e = H, t) => {
				switch (t.type) {
					case z.b: {
						const {
							actionIds: s,
							key: r,
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[r]: s
							}
						}
					}
					default:
						return e
				}
			};
			const Q = {};
			var G = (e = Q, t) => {
					switch (t.type) {
						case z.b: {
							const {
								normalizedModerationLog: s,
								subredditId: r
							} = t.payload, n = {};
							s.forEach(e => {
								n[e.id] = e
							});
							const a = {
								[r]: n
							};
							return L()({
								...e
							}, a)
						}
						default:
							return e
					}
				},
				Y = Object(r.c)({
					itemOrder: J,
					models: G
				});
			var Z = (e = null, t) => {
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
			var $ = (e = X, t) => {
				switch (t.type) {
					case z.b: {
						const {
							hasNextPage: s,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
				switch (t.type) {
					case z.b: {
						const {
							hasPreviousPage: s,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			const se = [];
			var re = (e = se, t) => {
				switch (t.type) {
					case z.a: {
						const {
							normalizedModerators: s,
							subredditId: r
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			var ne = (e = null, t) => {
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
				ae = Object(r.c)({
					actions: Y,
					endCursor: Z,
					hasNextPage: $,
					hasPreviousPage: te,
					moderators: re,
					startCursor: ne
				});
			const oe = {};
			var ce = (e = oe, t) => {
				switch (t.type) {
					case n.K:
					case n.u: {
						const {
							subredditId: s,
							moderators: r
						} = t.payload.response || t.payload, n = {
							[s]: r
						};
						return Object(h.merge)(e, n)
					}
					case n.y: {
						const {
							subredditId: s,
							userId: r,
							permissions: n
						} = t.payload;
						return Object(h.setIn)(e, [s, r, "modPermissions"], n)
					}
					case n.eb: {
						const {
							subredditId: s,
							userId: r
						} = t.payload;
						return Object(h.unsetIn)(e, [s, r])
					}
					default:
						return e
				}
			};
			const ie = {};
			var de = (e = ie, t) => {
				switch (t.type) {
					case n.v:
					case n.u: {
						const {
							key: s,
							subredditId: r
						} = t.payload;
						return r ? {
							...e,
							[s]: null
						} : e
					}
					case n.t: {
						const {
							error: s,
							key: r,
							subredditId: n
						} = t.payload;
						return n ? {
							...e,
							[r]: s
						} : e
					}
					default:
						return e
				}
			};
			const ue = {};
			var le = (e = ue, t) => {
					switch (t.type) {
						case n.t:
						case n.u: {
							const {
								subredditId: s,
								key: r
							} = t.payload;
							return s ? {
								...e,
								[r]: !1
							} : e
						}
						case n.v: {
							const {
								subredditId: s,
								key: r
							} = t.payload;
							return s ? {
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
					pending: le
				});
			const me = {};
			var he = (e = me, t) => {
					switch (t.type) {
						case n.u: {
							const {
								subredditId: s,
								response: r,
								key: n
							} = t.payload;
							return Object(h.setIn)(e, [s, n], r.moderatorIds)
						}
						case n.eb: {
							const {
								subredditId: s,
								userId: r,
								key: n
							} = t.payload, a = e[s][n].filter(e => e !== r);
							return Object(h.setIn)(e, [s, n], a)
						}
						default:
							return e
					}
				},
				fe = Object(r.c)({
					data: he,
					api: pe
				});
			var be = (e = null, t) => {
				switch (t.type) {
					case n.B:
					case n.A:
						return null;
					case n.z:
						return t.payload;
					default:
						return e
				}
			};
			var ye = (e = !1, t) => {
					switch (t.type) {
						case n.A:
						case n.z:
							return !1;
						case n.B:
							return !0;
						default:
							return e
					}
				},
				ve = Object(r.c)({
					error: be,
					pending: ye
				});
			const ge = {};
			var xe = (e = ge, t) => {
				switch (t.type) {
					case n.A: {
						const {
							subredditId: s,
							moderators: r
						} = t.payload;
						return Object(h.set)(e, s, r)
					}
					case n.bb: {
						const {
							subredditId: s,
							userId: r
						} = t.payload;
						return Object(h.unsetIn)(e, [s, r])
					}
					case n.c: {
						const s = t.payload,
							{
								subredditId: r,
								moderators: n
							} = s,
							a = {
								[r]: n
							};
						return Object(h.merge)(e, a)
					}
					default:
						return e
				}
			};
			const Oe = {};
			var we = (e = Oe, t) => {
					switch (t.type) {
						case n.A: {
							const {
								subredditId: s,
								moderatorIds: r
							} = t.payload;
							return {
								...e,
								[s]: r
							}
						}
						case n.bb: {
							const {
								subredditId: s,
								userId: r
							} = t.payload, n = e[s].filter(e => e !== r);
							return {
								...e,
								[s]: n
							}
						}
						case n.c: {
							const s = t.payload,
								{
									subredditId: r,
									moderatorIds: n
								} = s,
								a = [...e[r] || [], ...n];
							return {
								...e,
								[r]: a
							}
						}
						default:
							return e
					}
				},
				je = Object(r.c)({
					api: ve,
					models: xe,
					userOrder: we
				});
			const Ce = {};
			var Ie = (e = Ce, t) => {
				switch (t.type) {
					case n.H: {
						const {
							subredditId: s,
							response: r
						} = t.payload, {
							invitePending: n
						} = r, a = {
							[s]: n
						};
						return Object(h.merge)(e, a)
					}
					case n.E:
					case n.F: {
						const {
							subredditId: s
						} = t.payload;
						return Object(h.unset)(e, s)
					}
					default:
						return e
				}
			};
			const Ee = {};
			var Ne = (e = Ee, t) => {
				switch (t.type) {
					case n.u: {
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
			var _e = (e = ke, t) => {
				switch (t.type) {
					case n.H: {
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
			const Le = {};
			var Se = (e = Le, t) => {
				switch (t.type) {
					case n.H: {
						const {
							response: s
						} = t.payload, r = {
							[s.subredditId]: s.moderators
						};
						return Object(h.merge)({
							...e
						}, r)
					}
					case n.y: {
						const s = t.payload,
							{
								subredditId: r,
								userId: n,
								permissions: a
							} = s;
						return e[r] && e[r][n] ? Object(h.setIn)(e, [r, n, "modPermissions"], a) : e
					}
					default:
						return e
				}
			};
			var Te = (e = null, t) => {
				switch (t.type) {
					case n.L:
					case n.K:
						return null;
					case n.J:
						return t.payload;
					default:
						return e
				}
			};
			var Ae = (e = !1, t) => {
					switch (t.type) {
						case n.L:
							return !0;
						case n.K:
						case n.J:
							return !1;
						default:
							return e
					}
				},
				Be = Object(r.c)({
					error: Te,
					pending: Ae
				}),
				De = s("./node_modules/lodash/isEqual.js"),
				Pe = s.n(De);
			var Ue = (e = null, t) => {
					switch (t.type) {
						case n.L:
						case n.J:
						case n.eb:
							return null;
						case n.K: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case n.y: {
							const {
								userId: s,
								permissions: r
							} = t.payload;
							return e && e.id === s && !Pe()(e.modPermissions, r) ? {
								...e,
								modPermissions: r
							} : e
						}
						default:
							return e
					}
				},
				Me = Object(r.c)({
					api: Be,
					result: Ue
				});
			const Re = {};
			var Fe = (e = Re, t) => {
				switch (t.type) {
					case n.I:
					case n.H: {
						const {
							subredditId: s,
							key: r
						} = t.payload;
						return s ? {
							...e,
							[r]: null
						} : e
					}
					case n.G: {
						const {
							error: s,
							subredditId: r,
							key: n
						} = t.payload;
						return r ? {
							...e,
							[n]: s
						} : e
					}
					default:
						return e
				}
			};
			const Ke = {};
			var We = (e = Ke, t) => {
					switch (t.type) {
						case n.G:
						case n.H: {
							const {
								subredditId: s,
								key: r
							} = t.payload;
							return s ? {
								...e,
								[r]: !1
							} : e
						}
						case n.I: {
							const {
								subredditId: s,
								key: r
							} = t.payload;
							return s ? {
								...e,
								[r]: !0
							} : e
						}
						default:
							return e
					}
				},
				qe = Object(r.c)({
					error: Fe,
					pending: We
				});
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const Ve = {};
			var ze = (e = Ve, t) => {
					switch (t.type) {
						case n.H: {
							const {
								response: s,
								subredditId: r,
								key: n
							} = t.payload, {
								moderatorIds: a
							} = s;
							return Object(h.merge)(e, {
								[r]: {
									[n]: a
								}
							})
						}
						case n.eb: {
							const {
								subredditId: s,
								userId: r
							} = t.payload, n = {
								...e[s]
							};
							return Object.keys(e[s]).forEach(t => {
								const a = e[s][t].filter(e => e !== r);
								n[t] = a
							}), Object(h.set)(e, s, n)
						}
						default:
							return e
					}
				},
				He = Object(r.c)({
					data: ze,
					api: qe
				}),
				Je = Object(r.c)({
					editableModerators: ce,
					editableUserOrder: fe,
					invitedModerators: je,
					invitePending: Ie,
					loadMoreModerators: _e,
					loadMoreEditableModerators: Ne,
					models: Se,
					search: Me,
					userOrder: He
				}),
				Qe = s("./src/reddit/actions/bulkActions/constants.ts");
			var Ge = (e = null, t) => {
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
				Ye = s("./src/reddit/actions/modQueue/constants.ts");
			var Ze = (e = !1, t) => {
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
			var et = (e = $e, t) => {
					switch (t.type) {
						case Ye.a: {
							const {
								ids: s
							} = t.payload, r = {};
							return s.forEach(e => r[e] = !0), {
								...e,
								...r
							}
						}
						case Ye.d: {
							const {
								ids: s
							} = t.payload;
							return T()(e, s)
						}
						case Ye.c: {
							const {
								ids: e
							} = t.payload, s = {};
							return e.forEach(e => s[e] = !0), s
						}
						default:
							return e
					}
				},
				tt = s("./src/reddit/models/ModQueue/index.ts");
			const st = {};
			var rt = (e = st, t) => {
					switch (t.type) {
						case Qe.b: {
							const {
								operation: e,
								ids: s
							} = t.payload;
							return "approve" === e ? st : {
								[tt.c[e]]: s
							}
						}
						default:
							return e
					}
				},
				nt = Object(r.c)({
					api: Xe,
					selectedItems: et,
					undoLastAction: rt
				});
			var at = (e = null, t) => {
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
			var ot = (e = !1, t) => {
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
				ct = Object(r.c)({
					error: at,
					pending: ot
				});
			const it = {};
			var dt = (e = it, t) => {
				switch (t.type) {
					case Ye.f: {
						const {
							listingKey: s,
							page: r,
							response: n
						} = t.payload, {
							modqueue: a
						} = n;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[r]: a
							}
						}
					}
					default:
						return e
				}
			};
			const ut = {};
			var lt = (e = ut, t) => {
					switch (t.type) {
						case Ye.f: {
							const {
								listingKey: s,
								response: r
							} = t.payload, {
								modqueue: n
							} = r, a = n[n.length - 1] || null;
							return {
								...e,
								[s]: a
							}
						}
						default:
							return e
					}
				},
				pt = Object(r.c)({
					api: ct,
					itemOrder: dt,
					loadMore: lt
				}),
				mt = s("./src/reddit/actions/pages/modListing/constants.ts");
			var ht = (e = null, t) => {
				switch (t.type) {
					case mt.e: {
						const s = t.payload,
							{
								moderatingSubreddits: r
							} = s;
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
							moderatedAfter: s
						} = e;
						return s
					}
					case Ye.k: {
						const e = t.payload,
							{
								moderatedAfter: s
							} = e;
						return s
					}
					default:
						return e
				}
			};
			const ft = [];
			var bt = (e = ft, t) => {
				switch (t.type) {
					case Ye.i:
					case Ye.f:
					case Ye.m:
					case Ye.p:
					case Ye.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: s
						} = e;
						return s
					}
					case Ye.k: {
						const s = t.payload,
							{
								listingOrder: r
							} = s;
						return [...e, ...r]
					}
					case mt.e: {
						const s = t.payload,
							{
								listingOrder: r
							} = s;
						return r || e
					}
					default:
						return e
				}
			};
			var yt = (e = !1, t) => {
				switch (t.type) {
					case Ye.b:
						return !0;
					default:
						return e
				}
			};
			var vt = (e = !1, t) => {
					switch (t.type) {
						case Ye.k:
							return !0;
						case Ye.b:
							return !1;
						default:
							return e
					}
				},
				gt = Object(r.c)({
					after: ht,
					data: bt,
					loaded: yt,
					pending: vt
				});
			var xt = (e = null, t) => {
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
			var Ot = (e = !1, t) => {
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
			var Ct = (e = jt, t) => {
				switch (t.type) {
					case Ye.i: {
						const {
							listingKey: s,
							page: r,
							response: n
						} = t.payload, {
							modqueue: a
						} = n;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[r]: a
							}
						}
					}
					default:
						return e
				}
			};
			const It = {};
			var Et = (e = It, t) => {
					switch (t.type) {
						case Ye.i: {
							const {
								listingKey: s,
								response: r
							} = t.payload, {
								modqueue: n
							} = r, a = n[n.length - 1] || null;
							return {
								...e,
								[s]: a
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
			var kt = (e = null, t) => {
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
			var _t = (e = !1, t) => {
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
				Lt = Object(r.c)({
					error: kt,
					pending: _t
				});
			const St = {};
			var Tt = (e = St, t) => {
				switch (t.type) {
					case Ye.m: {
						const {
							listingKey: s,
							page: r,
							response: n
						} = t.payload, {
							modqueue: a
						} = n;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[r]: a
							}
						}
					}
					default:
						return e
				}
			};
			const At = {};
			var Bt = (e = At, t) => {
					switch (t.type) {
						case Ye.m: {
							const {
								listingKey: s,
								response: r
							} = t.payload, {
								modqueue: n
							} = r, a = n[n.length - 1] || null;
							return {
								...e,
								[s]: a
							}
						}
						default:
							return e
					}
				},
				Dt = Object(r.c)({
					api: Lt,
					itemOrder: Tt,
					loadMore: Bt
				});
			var Pt = (e = null, t) => {
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
			var Ut = (e = !1, t) => {
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
				Mt = Object(r.c)({
					error: Pt,
					pending: Ut
				});
			const Rt = {};
			var Ft = (e = Rt, t) => {
				switch (t.type) {
					case Ye.p: {
						const {
							listingKey: s,
							page: r,
							response: n
						} = t.payload, {
							modqueue: a
						} = n;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[r]: a
							}
						}
					}
					default:
						return e
				}
			};
			const Kt = {};
			var Wt = (e = Kt, t) => {
					switch (t.type) {
						case Ye.p: {
							const {
								listingKey: s,
								response: r
							} = t.payload, {
								modqueue: n
							} = r, a = n[n.length - 1] || null;
							return {
								...e,
								[s]: a
							}
						}
						default:
							return e
					}
				},
				qt = Object(r.c)({
					api: Mt,
					itemOrder: Ft,
					loadMore: Wt
				});
			var Vt = (e = null, t) => {
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
			var zt = (e = !1, t) => {
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
			var Qt = (e = Jt, t) => {
				switch (t.type) {
					case Ye.v: {
						const {
							listingKey: s,
							page: r,
							response: n
						} = t.payload, {
							modqueue: a
						} = n;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[r]: a
							}
						}
					}
					default:
						return e
				}
			};
			const Gt = {};
			var Yt = (e = Gt, t) => {
					switch (t.type) {
						case Ye.v: {
							const {
								listingKey: s,
								response: r
							} = t.payload, {
								modqueue: n
							} = r, a = n[n.length - 1] || null;
							return {
								...e,
								[s]: a
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
					bulkAction: nt,
					edited: pt,
					moderatedCommunitiesOrder: gt,
					modqueue: Nt,
					reports: Dt,
					spam: qt,
					unmoderated: Zt
				});
			var $t = (e = null, t) => {
				switch (t.type) {
					case n.T:
					case n.R:
						return null;
					case n.Q:
						return t.payload;
					default:
						return e
				}
			};
			const es = {};
			var ts = (e = es, t) => {
					switch (t.type) {
						case n.T: {
							const {
								subredditId: s,
								fetchedToken: r
							} = t.payload, n = Object(o.e)(s, r);
							return {
								...e,
								[n]: !0
							}
						}
						case n.R:
						case n.Q: {
							const {
								subredditId: s,
								fetchedToken: r
							} = t.payload, n = Object(o.e)(s, r);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				ss = Object(r.c)({
					error: $t,
					pending: ts
				});
			const rs = {};
			var ns = (e = rs, t) => {
					switch (t.type) {
						case n.R: {
							const {
								fetchedToken: s,
								subredditId: r
							} = t.payload, n = Object(o.e)(r, s);
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				as = s("./src/reddit/actions/inContextModeration.ts");
			var os = (e = null, t) => {
				switch (t.type) {
					case as.b:
						return t.payload;
					default:
						return e
				}
			};
			const cs = {};
			var is = (e = cs, t) => {
				switch (t.type) {
					case n.R: {
						const {
							subredditId: e,
							after: s
						} = t.payload;
						return {
							[e]: s
						}
					}
					default:
						return e
				}
			};
			const ds = {};
			var us = (e = ds, t) => {
				switch (t.type) {
					case n.S:
					case n.R: {
						const {
							subredditId: s,
							mutedUsers: r
						} = t.payload, n = {
							[s]: r
						};
						return Object(h.merge)(e, n)
					}
					case n.X: {
						const {
							subredditId: s,
							userId: r
						} = t.payload;
						return Object(h.unsetIn)(e, [s, r])
					}
					default:
						return e
				}
			};
			var ls = (e = null, t) => {
				switch (t.type) {
					case n.W:
					case n.V:
						return null;
					case n.U:
						return t.payload;
					default:
						return e
				}
			};
			var ps = (e = !1, t) => {
					switch (t.type) {
						case n.W:
							return !0;
						case n.V:
						case n.U:
							return !1;
						default:
							return e
					}
				},
				ms = Object(r.c)({
					error: ls,
					pending: ps
				});
			var hs = (e = null, t) => {
					switch (t.type) {
						case n.W:
						case n.U:
							return null;
						case n.V: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				fs = Object(r.c)({
					api: ms,
					result: hs
				});
			const bs = {};
			var ys = (e = bs, t) => {
					switch (t.type) {
						case n.R: {
							const {
								subredditId: s,
								mutedUserIds: r
							} = t.payload;
							return e[s] ? {
								...e,
								[s]: [...e[s], ...r]
							} : {
								...e,
								[s]: r
							}
						}
						case n.X: {
							const {
								subredditId: s,
								userId: r
							} = t.payload;
							return {
								[s]: e[s].filter(e => e !== r)
							}
						}
						case n.S: {
							const {
								subredditId: s,
								mutedUserIds: r
							} = t.payload, n = r[0];
							return n && e[s] && -1 === e[s].indexOf(n) ? {
								[s]: [n, ...e[s]]
							} : e
						}
						default:
							return e
					}
				},
				vs = Object(r.c)({
					api: ss,
					fetchedTokens: ns,
					inContext: os,
					loadMore: is,
					models: us,
					search: fs,
					userOrder: ys
				});
			t.a = Object(r.c)({
				approvedSubmitters: C,
				flairedUsers: V,
				moderationLog: ae,
				moderators: Je,
				modQueue: Xt,
				muted: vs
			})
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/actions/pages/powerups.ts");
			const o = "/powerups",
				c = {
					action: a.a,
					chunk: n.s.POWERUPS,
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Powerups",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => s.e("Powerups").then(s.bind(null, "./src/reddit/pages/Powerups/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return s(t)
						},
						resolve() {
							return "./src/reddit/pages/Powerups/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: n.Nb.POWERUPS,
						isResponsive: !0
					},
					path: o
				};
			t.b = c
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => Object(n.c)(e, {
					experimentName: r.Od,
					experimentEligibilitySelector: n.a
				}) === r.Yd.Enabled,
				o = e => Object(n.c)(e, {
					experimentName: r.Pd,
					experimentEligibilitySelector: n.a,
					expEventOverride: !1
				}) === r.Zd.Enabled
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./src/reddit/featureFlags/subredditPoints.ts"),
				n = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/selectors/user.ts"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/selectors/gold/powerups/index.ts");
			const i = e => {
					const t = Object(n.a)(e);
					if (!t) return null;
					const s = Object(a.L)(e),
						o = [];
					for (const n of t) {
						const t = e.subreddits.models[n];
						if (!t) return null;
						const a = Object(c.h)(e, {
							subredditId: n
						});
						r.b.has(t.name) || t.isNSFW || t.subscribers < 1e3 && !s || o.push({
							id: n,
							displayText: t.displayText,
							hasPowerups: a
						})
					}
					return o
				},
				d = Object(o.a)(i, e => !!(null == e ? void 0 : e.length))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing~Reddit.b6402ff80f1af01c88e9.js.map