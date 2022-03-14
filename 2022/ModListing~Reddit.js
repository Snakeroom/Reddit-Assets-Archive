// https://www.redditstatic.com/desktop2x/ModListing~Reddit.580e8c752330dedfe7b2.js
// Retrieved at 3/14/2022, 11:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing~Reddit"], {
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, r) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/FocusTrap/index.ts"),
				c = r("./src/lib/portal/index.tsx"),
				i = r("./src/reddit/actions/shortcuts/utils.ts"),
				d = r("./src/reddit/constants/shortcuts.ts"),
				u = r("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				l = r("./src/higherOrderComponents/asModal/index.m.less"),
				p = r.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ({
				className: e,
				isVisible: t,
				...r
			}) => n.a.createElement("div", m({
				className: Object(a.a)(p.a.overlay, e, {
					[p.a.mIsVisible]: t
				})
			}, r));

			function f(e) {
				class t extends s.Component {
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
							className: r,
							ignoreDefaultFocus: s,
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
							className: Object(a.a)(p.a.modal, r),
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
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			r("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => n.a.createElement(e, t)
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			class s {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class n {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const r = new n(t);
					return e.forEach(e => r.push(e)), r
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
					const r = t instanceof s ? t : new s(t),
						n = this.getNode(e);
					if (!n) throw new Error(`Cannot find item with key ${e}`);
					r.prev = n, r.next = n.next, n.next = r, r.next && (r.next.prev = r);
					const a = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[a] = r, this.length++
				}
				insertBefore(e, t) {
					const r = t instanceof s ? t : new s(t),
						n = this.getNode(e);
					if (!n) throw new Error(`Cannot find item with key ${e}`);
					r.next = n, r.prev = n.prev, n.prev = r, r.prev && (r.prev.next = r);
					const a = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[a] = r, this.length++
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
					const t = e instanceof s ? e : new s(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const r = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[r] = t, this.length++
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
					const t = e instanceof s ? e : new s(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const r = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[r] = t, this.length++
				}
			}
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "SUBREDDIT__MODERATION_LOG_LOADED",
				n = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/pageTitle/index.ts"),
				n = r("./src/reddit/actions/gold/powerups.ts"),
				a = r("./src/reddit/actions/platform.ts"),
				o = r("./src/reddit/actions/subreddit.ts"),
				c = r("./src/reddit/actions/subscription/index.ts"),
				i = r("./src/reddit/actions/users.ts"),
				d = r("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				u = r("./src/reddit/selectors/moderatorPermissions.ts"),
				l = r("./src/reddit/selectors/subscriptions.ts"),
				p = r("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const r = t();
				if (e(Object(a.m)({
						title: Object(s.h)()
					})), await e(Object(i.t)()), !Object(p.O)(r)) return;
				await e(Object(o.q)());
				const m = Object(d.b)(r),
					h = Object(u.a)(r);
				if (m) return await e(Object(n.d)(h));
				await e(Object(c.e)()), await e(Object(n.o)());
				const f = Object(l.c)(r);
				if (f && f.length) {
					const t = f.map(e => e.id);
					await e(Object(n.d)(t))
				}
			}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "a", (function() {
				return y
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/constants/componentSizes.ts"),
				i = r("./src/reddit/contexts/NavbarExp.ts"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/components/JumpToContent/index.m.less"),
				l = r.n(u);
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
					const [e, t] = Object(n.useState)("-500px"), r = Object(n.useContext)(i.a);
					return a.a.createElement(p.Consumer, null, n => n && a.a.createElement("div", {
						className: Object(o.a)(l.a.wrapper, {
							[l.a.wrapperExp]: r
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
							const r = e.currentTarget.clientWidth + 55;
							t(`-${r}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							n.focus(), n.scrollIntoView(), window.scrollBy(0, -f)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), a.a.createElement("div", {
						className: Object(o.a)(l.a.rightBorder, {
							[l.a.rightBorderExp]: r
						})
					})))
				}),
				y = a.a.memo(() => a.a.createElement(m.Consumer, null, e => a.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/raf/index.js"),
				n = r.n(s),
				a = r("./node_modules/react/index.js"),
				o = r.n(a);
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
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/connectors/connectClickToToggleEditor.ts");
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
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, r) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return L
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "d", (function() {
				return B
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/CSSVariableProvider/withTheme.tsx");
			const c = (e, t, r) => s => {
				const n = e(s),
					o = t(s),
					c = !n && o;
				return Object(a.a)(r.baseClassName, s.className, {
					[r.mIsInteractive]: o,
					[r.mIsActive]: n,
					[r.mIsVoteable]: c
				})
			};
			var i = r("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = r("./src/reddit/models/Vote/index.ts"),
				u = r("./src/reddit/controls/Downvote/index.m.less"),
				l = r.n(u);
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
				b = r("./src/reddit/icons/fonts/Upvote/index.tsx"),
				y = r("./src/reddit/controls/Upvote/index.m.less"),
				v = r.n(y);
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
				j = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				C = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = r("./src/reddit/components/VerticalVotes/votes.m.less"),
				N = r.n(E);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
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
					} = Object(I.a)(e), r = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						isNightMode: o,
						voteState: c,
						compact: i,
						...u
					} = e;
					return n.a.createElement("button", k({}, u, {
						className: Object(a.a)(N.a.customDownvote, _(e), {
							[N.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: r
					}))
				}),
				S = Object(o.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), r = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						isNightMode: o,
						voteState: c,
						compact: i,
						...u
					} = e;
					return n.a.createElement("button", k({}, u, {
						className: Object(a.a)(N.a.customUpvote, _(e), {
							[N.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: r
					}))
				}),
				A = f,
				B = w
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/structuredStyles/index.ts"),
				o = r("./src/reddit/selectors/activeModalId.ts"),
				c = r("./src/reddit/selectors/structuredStyles.ts"),
				i = r("./src/reddit/constants/modals.ts");
			const d = Object(n.c)({
				bladeHasUnsavedChanges: c.a,
				isEditing: c.i,
				isBladeEditorDirty: c.h,
				isModalOpen: Object(o.b)(i.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(a.h)(t))
			}))
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "j", (function() {
				return l
			})), r.d(t, "k", (function() {
				return p
			})), r.d(t, "m", (function() {
				return m
			})), r.d(t, "q", (function() {
				return h
			})), r.d(t, "r", (function() {
				return f
			})), r.d(t, "s", (function() {
				return b
			})), r.d(t, "u", (function() {
				return y
			})), r.d(t, "t", (function() {
				return v
			})), r.d(t, "v", (function() {
				return g
			})), r.d(t, "w", (function() {
				return x
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "p", (function() {
				return I
			}));
			const s = 284,
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
		"./src/reddit/constants/keycodes.ts": function(e, t, r) {
			"use strict";
			var s, n;
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(s || (s = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(n || (n = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = 480,
				n = 960,
				a = 1200
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
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
				c = Object(s.createContext)(o);

			function i(e) {
				const t = t => n.a.createElement(c.Consumer, null, ({
					apiContext: r,
					gqlContext: s
				}) => n.a.createElement(e, a({
					apiContext: r,
					gqlContext: s
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = n.a.createContext(!1)
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, r) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, r) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/TextButton/index.m.less"),
				c = r.n(o);
			t.a = e => n.a.createElement("button", {
				children: e.children,
				className: Object(a.a)(c.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, r) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/helpers/getReredditLinkWithYear/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = (e = new Date) => {
				const t = e.getFullYear();
				return `/posts/${e.getMonth()>=6?t:t-1}/`
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/brcast/dist/brcast.es.js");
			const n = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/polished/dist/polished.es.js");
			var s = r("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function n(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(s.a)(e).post
			}
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "a", (function() {
				return i
			}));
			r("./src/reddit/constants/categories.tsx");
			var s = r("./src/reddit/selectors/telemetry.ts");
			const n = e => ({
					screen: s.ab(e),
					profile: s.R(e),
					subreddit: s.ib(e)
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
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, r) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/fonts/helpers.tsx"),
				c = r("./src/reddit/icons/fonts/Downvote/index.m.less"),
				i = r.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
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
				...r
			}) => e ? n.a.createElement("span", d({}, r, {
				className: Object(a.a)(i.a.compactDownvoteWrapper, r.className)
			}), n.a.createElement(u, {
				className: i.a.compactDownvote,
				isFilled: t
			})) : n.a.createElement("span", d({}, r, {
				className: Object(a.a)(i.a.downvoteWrapper, r.className)
			}), n.a.createElement(u, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, r) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/fonts/helpers.tsx"),
				c = r("./src/reddit/icons/fonts/Upvote/index.m.less"),
				i = r.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
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
				...r
			}) => e ? n.a.createElement("span", d({}, r, {
				className: Object(a.a)(i.a.compactUpvoteWrapper, r.className)
			}), n.a.createElement(u, {
				className: i.a.compactUpvote,
				isFilled: t
			})) : n.a.createElement("span", d({}, r, {
				className: Object(a.a)(i.a.upvoteWrapper, r.className)
			}), n.a.createElement(u, {
				isFilled: t
			}))
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, r) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = r("./src/reddit/models/Theme/index.ts"),
				i = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = r("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				u = r.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = Object(o.a)(e => {
				const {
					backgroundColor: t,
					className: r,
					redditStyle: s,
					theme: o,
					...d
				} = e, p = Object(i.a)(e), m = {
					"--pseudo-before-background": t || Object(c.g)(p.canvas, p.canvasImgUrl, p.canvasImgPosition)
				};
				return n.a.createElement("div", l({
					className: Object(a.a)(u.a.backgroundContainer, r),
					style: m
				}, d))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, r) {
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
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/constants/postLayout.ts"),
				d = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/selectors/structuredStyles.ts"),
				l = r("./src/reddit/layout/page/Listing/Content.m.less"),
				p = r.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
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
				disableFullscreen: r,
				dispatch: s,
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
					[p.a.mDisableFullScreen]: r && !u,
					[p.a.mClassicWidth]: u,
					[p.a.mIsEditing]: !!l,
					[p.a.mCanFlexFullWidth]: !a,
					[p.a.onlyChildMargin]: !t
				})
			}, b))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, r) {
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
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				o = r("./src/reddit/layout/page/Listing/Content.tsx"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/constants/componentSizes.ts"),
				d = r("./src/reddit/constants/elementClassNames.ts"),
				u = r("./src/reddit/constants/screenWidths.ts"),
				l = r("./src/reddit/contexts/NavbarExp.ts"),
				p = r("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				m = r("./src/reddit/layout/page/Listing/index.m.less"),
				h = r.n(m);
			t.a = e => {
				const {
					backgroundColor: t,
					className: r,
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
				} = e, A = L ? "28px" : "0", B = C ? {
					marginRight: `${i.q}px`,
					marginTop: A
				} : {
					marginLeft: `${i.q}px`,
					marginTop: A
				}, T = k && n.a.createElement("div", {
					className: Object(c.a)(h.a.sidebar, j ? h.a["m-collectionLayout"] : h.a.defaultLayout),
					style: B
				}, k), P = n.a.createElement(o.a, {
					hideOnlyChildMargin: w,
					className: y,
					disableFullscreen: g,
					fitPageToContent: x,
					forcedLayout: O,
					isCollectionLayout: j
				}, b, f);
				let U;
				U = _ ? n.a.createElement(n.a.Fragment, null, _[0], P, _[1]) : C ? n.a.createElement(n.a.Fragment, null, T, P) : n.a.createElement(n.a.Fragment, null, P, T);
				const M = g ? `${I||u.a+2*i.m}px` : "100%",
					D = Object(s.useContext)(l.a);
				return n.a.createElement(p.a, {
					subredditId: S
				}, n.a.createElement("div", {
					className: Object(c.a)(h.a.outerContainer, d.i, r, {
						[h.a.outerContainerExp]: D
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
						maxWidth: M
					}
				}, L), n.a.createElement("div", {
					className: h.a.body,
					style: {
						maxWidth: M
					}
				}, U))))
			}
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, r) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/layout/row/InlineButton/index.m.less"),
				a = r.n(n);
			t.a = s.a.button("inlineButton", a.a)
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/subredditModeration/constants.ts");
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
				o = r("./src/reddit/models/SubredditModeration/index.ts");
			const c = {};
			var i = (e = c, t) => {
					switch (t.type) {
						case n.g: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(o.e)(r, s);
							return {
								...e,
								[n]: !0
							}
						}
						case n.f:
						case n.e: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(o.e)(r, s);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				d = Object(s.c)({
					error: a,
					pending: i
				});
			const u = {};
			var l = (e = u, t) => {
				switch (t.type) {
					case n.f: {
						const {
							fetchedToken: r,
							subredditId: s
						} = t.payload, n = Object(o.e)(s, r);
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
								after: r
							} = t.payload;
							return {
								[e]: r
							}
						}
						default:
							return e
					}
				},
				h = r("./node_modules/icepick/icepick.js");
			const f = {};
			var b = (e = f, t) => {
				switch (t.type) {
					case n.d:
					case n.f: {
						const {
							subredditId: r,
							approvedSubmitters: s
						} = t.payload, n = {
							[r]: s
						};
						return Object(h.merge)(e, n)
					}
					case n.k: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(h.unsetIn)(e, [r, s])
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
				g = Object(s.c)({
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
				O = Object(s.c)({
					api: g,
					result: x
				});
			const w = {};
			var j = (e = w, t) => {
					switch (t.type) {
						case n.f: {
							const {
								subredditId: r,
								approvedSubmitterIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case n.k: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case n.d: {
							const {
								subredditId: r,
								approvedSubmitterIds: s
							} = t.payload, n = s[0];
							return n && e[r] && -1 === e[r].indexOf(n) ? {
								[r]: [n, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				C = Object(s.c)({
					api: d,
					fetchedTokens: l,
					loadMore: m,
					models: b,
					search: O,
					userOrder: j
				}),
				I = r("./src/reddit/actions/grantUserFlair/constants.ts");
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
				k = Object(s.c)({
					error: E,
					pending: N
				}),
				_ = r("./node_modules/lodash/merge.js"),
				L = r.n(_),
				S = r("./node_modules/lodash/omit.js"),
				A = r.n(S);
			const B = {};
			var T = (e = B, t) => {
				switch (t.type) {
					case I.g:
					case I.k: {
						const {
							subredditId: r,
							flairedUsers: s
						} = t.payload;
						return L()({
							...e
						}, {
							[r]: s
						})
					}
					case I.c: {
						const {
							subredditId: r,
							userName: s
						} = t.payload, n = A()(e[r], s);
						return {
							...e,
							[r]: n
						}
					}
					case I.a:
					case I.b:
					case I.h:
						const {
							subredditId: r, userName: s, applied: n
						} = t.payload;
						return n ? {
							...e,
							[r]: {
								...e[r],
								[s]: n
							}
						} : e;
					default:
						return e
				}
			};
			const P = {};
			var U = (e = P, t) => {
				switch (t.type) {
					case I.g: {
						const {
							key: r,
							pageInfo: s
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
			var M = (e = null, t) => {
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
			var D = (e = !1, t) => {
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
				R = Object(s.c)({
					error: M,
					pending: D
				});
			var W = (e = null, t) => {
					switch (t.type) {
						case I.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case I.c: {
							const {
								userName: r
							} = t.payload;
							return e === r ? null : e
						}
						default:
							return e
					}
				},
				F = Object(s.c)({
					api: R,
					result: W
				});
			const q = {};
			var K = (e = q, t) => {
					switch (t.type) {
						case I.g: {
							const {
								key: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case I.a: {
							const {
								key: r,
								userName: s
							} = t.payload;
							if (!r) return e;
							if (!e[r].includes(s)) {
								const t = [...e[r], s];
								return {
									...e,
									[r]: t
								}
							}
							return e
						}
						case I.c: {
							const {
								userName: r
							} = t.payload, s = {};
							for (const t in e) s[t] = e[t].filter(e => e !== r);
							return s
						}
						default:
							return e
					}
				},
				V = Object(s.c)({
					api: k,
					models: T,
					pageInfo: U,
					search: F,
					userOrder: K
				}),
				z = r("./src/reddit/actions/moderationLog/constants.ts");
			const H = {};
			var Q = (e = H, t) => {
				switch (t.type) {
					case z.b: {
						const {
							actionIds: r,
							key: s,
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n] || {},
								[s]: r
							}
						}
					}
					default:
						return e
				}
			};
			const J = {};
			var G = (e = J, t) => {
					switch (t.type) {
						case z.b: {
							const {
								normalizedModerationLog: r,
								subredditId: s
							} = t.payload, n = {};
							r.forEach(e => {
								n[e.id] = e
							});
							const a = {
								[s]: n
							};
							return L()({
								...e
							}, a)
						}
						default:
							return e
					}
				},
				Y = Object(s.c)({
					itemOrder: Q,
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
							hasNextPage: r,
							subredditId: s
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
			const ee = {};
			var te = (e = ee, t) => {
				switch (t.type) {
					case z.b: {
						const {
							hasPreviousPage: r,
							subredditId: s
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
			const re = [];
			var se = (e = re, t) => {
				switch (t.type) {
					case z.a: {
						const {
							normalizedModerators: r,
							subredditId: s
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
				ae = Object(s.c)({
					actions: Y,
					endCursor: Z,
					hasNextPage: $,
					hasPreviousPage: te,
					moderators: se,
					startCursor: ne
				});
			const oe = {};
			var ce = (e = oe, t) => {
				switch (t.type) {
					case n.K:
					case n.u: {
						const {
							subredditId: r,
							moderators: s
						} = t.payload.response || t.payload, n = {
							[r]: s
						};
						return Object(h.merge)(e, n)
					}
					case n.y: {
						const {
							subredditId: r,
							userId: s,
							permissions: n
						} = t.payload;
						return Object(h.setIn)(e, [r, s, "modPermissions"], n)
					}
					case n.eb: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(h.unsetIn)(e, [r, s])
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
							key: r,
							subredditId: s
						} = t.payload;
						return s ? {
							...e,
							[r]: null
						} : e
					}
					case n.t: {
						const {
							error: r,
							key: s,
							subredditId: n
						} = t.payload;
						return n ? {
							...e,
							[s]: r
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
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !1
							} : e
						}
						case n.v: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !0
							} : e
						}
						default:
							return e
					}
				},
				pe = Object(s.c)({
					error: de,
					pending: le
				});
			const me = {};
			var he = (e = me, t) => {
					switch (t.type) {
						case n.u: {
							const {
								subredditId: r,
								response: s,
								key: n
							} = t.payload;
							return Object(h.setIn)(e, [r, n], s.moderatorIds)
						}
						case n.eb: {
							const {
								subredditId: r,
								userId: s,
								key: n
							} = t.payload, a = e[r][n].filter(e => e !== s);
							return Object(h.setIn)(e, [r, n], a)
						}
						default:
							return e
					}
				},
				fe = Object(s.c)({
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
				ve = Object(s.c)({
					error: be,
					pending: ye
				});
			const ge = {};
			var xe = (e = ge, t) => {
				switch (t.type) {
					case n.A: {
						const {
							subredditId: r,
							moderators: s
						} = t.payload;
						return Object(h.set)(e, r, s)
					}
					case n.bb: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(h.unsetIn)(e, [r, s])
					}
					case n.c: {
						const r = t.payload,
							{
								subredditId: s,
								moderators: n
							} = r,
							a = {
								[s]: n
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
								subredditId: r,
								moderatorIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case n.bb: {
							const {
								subredditId: r,
								userId: s
							} = t.payload, n = e[r].filter(e => e !== s);
							return {
								...e,
								[r]: n
							}
						}
						case n.c: {
							const r = t.payload,
								{
									subredditId: s,
									moderatorIds: n
								} = r,
								a = [...e[s] || [], ...n];
							return {
								...e,
								[s]: a
							}
						}
						default:
							return e
					}
				},
				je = Object(s.c)({
					api: ve,
					models: xe,
					userOrder: we
				});
			const Ce = {};
			var Ie = (e = Ce, t) => {
				switch (t.type) {
					case n.H: {
						const {
							subredditId: r,
							response: s
						} = t.payload, {
							invitePending: n
						} = s, a = {
							[r]: n
						};
						return Object(h.merge)(e, a)
					}
					case n.E:
					case n.F: {
						const {
							subredditId: r
						} = t.payload;
						return Object(h.unset)(e, r)
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
							response: r
						} = t.payload, s = {
							[r.subredditId]: r.moderators
						};
						return Object(h.merge)({
							...e
						}, s)
					}
					case n.y: {
						const r = t.payload,
							{
								subredditId: s,
								userId: n,
								permissions: a
							} = r;
						return e[s] && e[s][n] ? Object(h.setIn)(e, [s, n, "modPermissions"], a) : e
					}
					default:
						return e
				}
			};
			var Ae = (e = null, t) => {
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
			var Be = (e = !1, t) => {
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
				Te = Object(s.c)({
					error: Ae,
					pending: Be
				}),
				Pe = r("./node_modules/lodash/isEqual.js"),
				Ue = r.n(Pe);
			var Me = (e = null, t) => {
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
								userId: r,
								permissions: s
							} = t.payload;
							return e && e.id === r && !Ue()(e.modPermissions, s) ? {
								...e,
								modPermissions: s
							} : e
						}
						default:
							return e
					}
				},
				De = Object(s.c)({
					api: Te,
					result: Me
				});
			const Re = {};
			var We = (e = Re, t) => {
				switch (t.type) {
					case n.I:
					case n.H: {
						const {
							subredditId: r,
							key: s
						} = t.payload;
						return r ? {
							...e,
							[s]: null
						} : e
					}
					case n.G: {
						const {
							error: r,
							subredditId: s,
							key: n
						} = t.payload;
						return s ? {
							...e,
							[n]: r
						} : e
					}
					default:
						return e
				}
			};
			const Fe = {};
			var qe = (e = Fe, t) => {
					switch (t.type) {
						case n.G:
						case n.H: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !1
							} : e
						}
						case n.I: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !0
							} : e
						}
						default:
							return e
					}
				},
				Ke = Object(s.c)({
					error: We,
					pending: qe
				});
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const Ve = {};
			var ze = (e = Ve, t) => {
					switch (t.type) {
						case n.H: {
							const {
								response: r,
								subredditId: s,
								key: n
							} = t.payload, {
								moderatorIds: a
							} = r;
							return Object(h.merge)(e, {
								[s]: {
									[n]: a
								}
							})
						}
						case n.eb: {
							const {
								subredditId: r,
								userId: s
							} = t.payload, n = {
								...e[r]
							};
							return Object.keys(e[r]).forEach(t => {
								const a = e[r][t].filter(e => e !== s);
								n[t] = a
							}), Object(h.set)(e, r, n)
						}
						default:
							return e
					}
				},
				He = Object(s.c)({
					data: ze,
					api: Ke
				}),
				Qe = Object(s.c)({
					editableModerators: ce,
					editableUserOrder: fe,
					invitedModerators: je,
					invitePending: Ie,
					loadMoreModerators: _e,
					loadMoreEditableModerators: Ne,
					models: Se,
					search: De,
					userOrder: He
				}),
				Je = r("./src/reddit/actions/bulkActions/constants.ts");
			var Ge = (e = null, t) => {
					switch (t.type) {
						case Je.c:
						case Je.b:
							return null;
						case Je.a:
							return t.payload;
						default:
							return e
					}
				},
				Ye = r("./src/reddit/actions/modQueue/constants.ts");
			var Ze = (e = !1, t) => {
					switch (t.type) {
						case Je.c:
							return !0;
						case Je.b:
						case Je.a:
						case Ye.s:
						case Ye.r:
							return !1;
						default:
							return e
					}
				},
				Xe = Object(s.c)({
					error: Ge,
					pending: Ze
				});
			const $e = {};
			var et = (e = $e, t) => {
					switch (t.type) {
						case Ye.a: {
							const {
								ids: r
							} = t.payload, s = {};
							return r.forEach(e => s[e] = !0), {
								...e,
								...s
							}
						}
						case Ye.d: {
							const {
								ids: r
							} = t.payload;
							return A()(e, r)
						}
						case Ye.c: {
							const {
								ids: e
							} = t.payload, r = {};
							return e.forEach(e => r[e] = !0), r
						}
						default:
							return e
					}
				},
				tt = r("./src/reddit/models/ModQueue/index.ts");
			const rt = {};
			var st = (e = rt, t) => {
					switch (t.type) {
						case Je.b: {
							const {
								operation: e,
								ids: r
							} = t.payload;
							return "approve" === e ? rt : {
								[tt.c[e]]: r
							}
						}
						default:
							return e
					}
				},
				nt = Object(s.c)({
					api: Xe,
					selectedItems: et,
					undoLastAction: st
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
				ct = Object(s.c)({
					error: at,
					pending: ot
				});
			const it = {};
			var dt = (e = it, t) => {
				switch (t.type) {
					case Ye.f: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: a
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: a
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
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, a = n[n.length - 1] || null;
							return {
								...e,
								[r]: a
							}
						}
						default:
							return e
					}
				},
				pt = Object(s.c)({
					api: ct,
					itemOrder: dt,
					loadMore: lt
				}),
				mt = r("./src/reddit/actions/pages/modListing/constants.ts");
			var ht = (e = null, t) => {
				switch (t.type) {
					case mt.e: {
						const r = t.payload,
							{
								moderatingSubreddits: s
							} = r;
						return s ? null : e
					}
					case Ye.i:
					case Ye.f:
					case Ye.m:
					case Ye.p:
					case Ye.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: r
						} = e;
						return r
					}
					case Ye.k: {
						const e = t.payload,
							{
								moderatedAfter: r
							} = e;
						return r
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
							listingOrder: r
						} = e;
						return r
					}
					case Ye.k: {
						const r = t.payload,
							{
								listingOrder: s
							} = r;
						return [...e, ...s]
					}
					case mt.e: {
						const r = t.payload,
							{
								listingOrder: s
							} = r;
						return s || e
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
				gt = Object(s.c)({
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
				wt = Object(s.c)({
					error: xt,
					pending: Ot
				});
			const jt = {};
			var Ct = (e = jt, t) => {
				switch (t.type) {
					case Ye.i: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: a
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: a
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
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, a = n[n.length - 1] || null;
							return {
								...e,
								[r]: a
							}
						}
						default:
							return e
					}
				},
				Nt = Object(s.c)({
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
				Lt = Object(s.c)({
					error: kt,
					pending: _t
				});
			const St = {};
			var At = (e = St, t) => {
				switch (t.type) {
					case Ye.m: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: a
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: a
							}
						}
					}
					default:
						return e
				}
			};
			const Bt = {};
			var Tt = (e = Bt, t) => {
					switch (t.type) {
						case Ye.m: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, a = n[n.length - 1] || null;
							return {
								...e,
								[r]: a
							}
						}
						default:
							return e
					}
				},
				Pt = Object(s.c)({
					api: Lt,
					itemOrder: At,
					loadMore: Tt
				});
			var Ut = (e = null, t) => {
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
			var Mt = (e = !1, t) => {
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
				Dt = Object(s.c)({
					error: Ut,
					pending: Mt
				});
			const Rt = {};
			var Wt = (e = Rt, t) => {
				switch (t.type) {
					case Ye.p: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: a
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: a
							}
						}
					}
					default:
						return e
				}
			};
			const Ft = {};
			var qt = (e = Ft, t) => {
					switch (t.type) {
						case Ye.p: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, a = n[n.length - 1] || null;
							return {
								...e,
								[r]: a
							}
						}
						default:
							return e
					}
				},
				Kt = Object(s.c)({
					api: Dt,
					itemOrder: Wt,
					loadMore: qt
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
				Ht = Object(s.c)({
					error: Vt,
					pending: zt
				});
			const Qt = {};
			var Jt = (e = Qt, t) => {
				switch (t.type) {
					case Ye.v: {
						const {
							listingKey: r,
							page: s,
							response: n
						} = t.payload, {
							modqueue: a
						} = n;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: a
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
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: n
							} = s, a = n[n.length - 1] || null;
							return {
								...e,
								[r]: a
							}
						}
						default:
							return e
					}
				},
				Zt = Object(s.c)({
					api: Ht,
					itemOrder: Jt,
					loadMore: Yt
				}),
				Xt = Object(s.c)({
					bulkAction: nt,
					edited: pt,
					moderatedCommunitiesOrder: gt,
					modqueue: Nt,
					reports: Pt,
					spam: Kt,
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
			const er = {};
			var tr = (e = er, t) => {
					switch (t.type) {
						case n.T: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(o.e)(r, s);
							return {
								...e,
								[n]: !0
							}
						}
						case n.R:
						case n.Q: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, n = Object(o.e)(r, s);
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				rr = Object(s.c)({
					error: $t,
					pending: tr
				});
			const sr = {};
			var nr = (e = sr, t) => {
					switch (t.type) {
						case n.R: {
							const {
								fetchedToken: r,
								subredditId: s
							} = t.payload, n = Object(o.e)(s, r);
							return {
								...e,
								[n]: !0
							}
						}
						default:
							return e
					}
				},
				ar = r("./src/reddit/actions/inContextModeration.ts");
			var or = (e = null, t) => {
				switch (t.type) {
					case ar.b:
						return t.payload;
					default:
						return e
				}
			};
			const cr = {};
			var ir = (e = cr, t) => {
				switch (t.type) {
					case n.R: {
						const {
							subredditId: e,
							after: r
						} = t.payload;
						return {
							[e]: r
						}
					}
					default:
						return e
				}
			};
			const dr = {};
			var ur = (e = dr, t) => {
				switch (t.type) {
					case n.S:
					case n.R: {
						const {
							subredditId: r,
							mutedUsers: s
						} = t.payload, n = {
							[r]: s
						};
						return Object(h.merge)(e, n)
					}
					case n.X: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(h.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var lr = (e = null, t) => {
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
			var pr = (e = !1, t) => {
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
				mr = Object(s.c)({
					error: lr,
					pending: pr
				});
			var hr = (e = null, t) => {
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
				fr = Object(s.c)({
					api: mr,
					result: hr
				});
			const br = {};
			var yr = (e = br, t) => {
					switch (t.type) {
						case n.R: {
							const {
								subredditId: r,
								mutedUserIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case n.X: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case n.S: {
							const {
								subredditId: r,
								mutedUserIds: s
							} = t.payload, n = s[0];
							return n && e[r] && -1 === e[r].indexOf(n) ? {
								[r]: [n, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				vr = Object(s.c)({
					api: rr,
					fetchedTokens: nr,
					inContext: or,
					loadMore: ir,
					models: ur,
					search: fr,
					userOrder: yr
				});
			t.a = Object(s.c)({
				approvedSubmitters: C,
				flairedUsers: V,
				moderationLog: ae,
				moderators: Qe,
				modQueue: Xt,
				muted: vr
			})
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/lib/constants/index.ts"),
				a = r("./src/reddit/actions/pages/powerups.ts");
			const o = "/powerups",
				c = {
					action: a.a,
					chunk: n.s.POWERUPS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Powerups",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!r.m[t]
						},
						importAsync: () => r.e("Powerups").then(r.bind(null, "./src/reddit/pages/Powerups/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return r(t)
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
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => Object(n.c)(e, {
					experimentName: s.Pd,
					experimentEligibilitySelector: n.a
				}) === s.Zd.Enabled,
				o = e => Object(n.c)(e, {
					experimentName: s.Qd,
					experimentEligibilitySelector: n.a,
					expEventOverride: !1
				}) === s.ae.Enabled
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/reddit/featureFlags/subredditPoints.ts"),
				n = r("./src/reddit/selectors/moderatorPermissions.ts"),
				a = r("./src/reddit/selectors/user.ts"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/selectors/gold/powerups/index.ts");
			const i = e => {
					const t = Object(n.a)(e);
					if (!t) return null;
					const r = Object(a.L)(e),
						o = [];
					for (const n of t) {
						const t = e.subreddits.models[n];
						if (!t) return null;
						const a = Object(c.h)(e, {
							subredditId: n
						});
						s.b.has(t.name) || t.isNSFW || t.subscribers < 1e3 && !r || o.push({
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing~Reddit.580e8c752330dedfe7b2.js.map