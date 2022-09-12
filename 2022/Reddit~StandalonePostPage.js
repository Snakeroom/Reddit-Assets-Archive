// https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage.151c82de8812ef462193.js
// Retrieved at 9/12/2022, 11:30:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~StandalonePostPage"], {
		"./src/higherOrderComponents/asModal/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/elementIds.ts");
			const r = () => {
					const e = document.getElementById(s.a);
					e && (e.style.filter = "blur(10px)")
				},
				o = () => {
					const e = document.getElementById(s.a);
					e && e.style.removeProperty("filter")
				}
		},
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				mIsBlurred: "_3Tq-_9917Q-o0iyzcNAeZn",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/asModal/helpers.ts"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/FocusTrap/index.ts"),
				c = n("./src/lib/portal/index.tsx"),
				l = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/constants/shortcuts.ts"),
				u = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				m = n("./src/higherOrderComponents/asModal/index.m.less"),
				p = n.n(m);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = e => {
				let {
					className: t,
					shouldBlurBackground: n,
					isVisible: s,
					...o
				} = e;
				return r.a.createElement("div", h({
					className: Object(a.a)(p.a.overlay, t, {
						[p.a.mIsVisible]: s,
						[p.a.mIsBlurred]: n
					})
				}, o))
			};

			function b(e) {
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
						}), Object(u.a)(), this.ref && (this.focusTrap = new i.b(this.ref), this.focusTrap.activate()), this.props.shouldBlurBackground && Object(o.a)()
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(u.b)(), Object(l.d)(), this.focusTrap && this.focusTrap.deactivate(), this.props.shouldBlurBackground && Object(o.b)()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: s,
							onOverlayClick: o,
							overlayClassName: i,
							overlayCustomStyles: l,
							shouldBlurBackground: u,
							withOverlay: m,
							...h
						} = t, b = h;
						return r.a.createElement(c.a, {
							container: document.getElementById(d.b)
						}, r.a.createElement(f, {
							className: i,
							isVisible: m,
							onClick: this.onOverlayClick,
							shouldBlurBackground: u,
							style: l
						}, r.a.createElement("div", {
							"aria-modal": !0,
							className: Object(a.a)(p.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, r.a.createElement(e, b))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => r.a.createElement(e, t)
			}
		},
		"./src/lib/FocusTrap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = ['input:not([type="hidden"]):not([disabled])', "select:not([disabled])", "textarea:not([disabled])", "a[href]", "button:not([disabled])", '[tabindex]:not([tabindex="-1"]):not([disabled])', "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join();
			class r {
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
					const e = this.container.querySelectorAll(s);
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
				return r
			}));
			class s {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class r {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new r(t);
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
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.prev = r, n.next = r.next, r.next = n, n.next && (n.next.prev = n);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.next = r, n.prev = r.prev, r.prev = n, n.prev && (n.prev.next = n);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
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
					const t = e instanceof s ? e : new s(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
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
					const t = e instanceof s ? e : new s(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
				const t = Object(s.useRef)();
				return Object(s.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(s.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(r.useState)(null), [a, c] = Object(r.useState)(null), [l, d] = Object(r.useState)(null), [u, m] = Object(r.useState)(!1), p = Object(r.useCallback)(async () => m(!0), []), h = Object(r.useCallback)(() => m(!1), []), f = Object(r.useCallback)(() => m(!u), [u]), b = Object(r.useMemo)(() => {
					const t = i(e);
					return l ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: l
						}
					})) : t
				}, [l, e]), {
					attributes: v,
					styles: x,
					update: j
				} = Object(o.a)(t, a, b);
				return Object(r.useMemo)(() => ({
					arrowProps: {
						ref: d,
						style: x.arrow,
						...v.arrow
					},
					hide: h,
					popperProps: {
						ref: c,
						style: x.popper,
						...v.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: f,
					visible: u,
					update: j
				}), [d, v, c, h, p, x, t, n, f, u, j])
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/lodash/every.js"),
				r = n.n(s);

			function o(e) {
				let t = null,
					n = null;
				return function() {
					for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++) o[a] = arguments[a];
					return null !== t && o.length === t.length && r()(o, (e, n) => e === t[n]) || (t = o, n = e(...o)), n
				}
			}
		},
		"./src/lib/pubsub/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class s {
				constructor() {
					this.listenerMap = {}
				}
				_resetListenerMap() {
					this.listenerMap = {}
				}
				_resetKey(e) {
					this.listenerMap[e] = []
				}
				reset(e) {
					e ? this._resetKey(e) : this._resetListenerMap()
				}
				addListeners(e) {
					this.listenerMap[e] || (this.listenerMap[e] = []);
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					this.listenerMap[e].push(...n)
				}
				removeListeners(e) {
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const r = n.length,
						o = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - o === r
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "CREATOR_STATS_PENDING",
				r = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, n) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/hooks/usePrevious.ts"),
				a = n("./src/realtime/GQLSubscription/async.tsx"),
				i = n("./src/reddit/hooks/useIntersectionObserver.ts");
			const c = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var l = n("./src/reddit/components/CountAnimation/index.m.less"),
				d = n.n(l);
			var u;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(u || (u = {}));
			const m = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: n,
					incrementDelta: l,
					initialDelay: u,
					initialDisplayCount: p,
					isLoadTestOnly: h,
					onDataCB: f,
					postId: b,
					queryKey: v,
					queryVariables: x,
					shouldDisjointAnimation: j,
					subsequentRecurringDelay: C
				} = e, [y, O] = Object(s.useState)(!1), [w, g] = Object(s.useState)(!0), [_, E] = Object(s.useState)([]), [S, N] = Object(s.useState)(c(p).reverse()), k = Object(s.useRef)(!1), I = Object(s.useRef)(null), T = Object(s.useRef)(e => {}), A = Object(s.useRef)();
				T.current = Object(s.useCallback)(e => {
					let n = e || l();
					const s = [...S].reverse().join("");
					let r = parseInt(s) + n;
					r > t && (n = t - parseInt(s), r = t);
					const o = c(r).reverse();
					O(!1), E(S), N(o), g(!1), A.current = setTimeout(() => {
						O(!0)
					}, 0)
				}, [t, l, S]);
				const M = Object(s.useRef)(() => {}),
					B = Object(s.useRef)(),
					R = Object(s.useRef)();
				M.current = Object(s.useCallback)(() => {
					R.current = setTimeout(() => {
						T.current();
						const e = [..._].reverse().join("");
						parseInt(e) < t && M.current()
					}, C())
				}, [t, C, _]);
				const F = Object(s.useRef)(0),
					P = Object(s.useRef)(!1),
					D = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: n
							} = e, s = 1 !== n;
							t ? (P.current = !0, k.current || (k.current = !0, B.current = setTimeout(() => {
								T.current(), M.current()
							}, u())), F.current > 0 && (T.current(F.current), F.current = 0)) : s && (P.current = !1)
						})
					}, []);
				Object(i.a)(I, D);
				const [L, U] = Object(s.useState)(!1), V = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, s = 1 !== n;
						t ? U(!0) : s && U(!1)
					})
				}, []), W = Object(s.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(i.a)(I, V, W.current);
				const q = Object(o.a)(t);
				Object(s.useEffect)(() => {
					if (void 0 !== q && q !== t) {
						const e = t - q;
						P.current ? T.current(e) : F.current += e
					}
					return () => {
						clearTimeout(B.current), clearTimeout(R.current), clearTimeout(A.current)
					}
				}, [t]);
				const K = Object(s.useCallback)(() => g(!0), [g]),
					H = 0 === _.length,
					J = w || H,
					Z = Object(s.useRef)(((e, t) => `${t}_${e}_count_anim`)(b, n));
				return r.a.createElement(r.a.Fragment, null, !h && r.a.createElement("div", {
					className: d.a.countAnimation
				}, S.map((e, t) => {
					const n = ((e, t) => {
						let n = Math.abs(e);
						const s = Math.abs(t),
							r = [n];
						if (n === s) return r;
						let o = !0;
						for (; o;) ++n > 9 && (n = 0), r.push(n), n === s && (o = !1);
						return r
					})(_[t] || 0, e);
					return r.a.createElement("span", {
						"aria-hidden": !0,
						className: d.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: K,
						style: y && _.length > 0 && !w ? {
							transform: `translateY(-${j&&n.length>1?100:100*(n.length-1)}%)`,
							transitionDuration: `${(j?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, J ? r.a.createElement("span", {
						className: d.a.digitDelta
					}, e) : n.map((e, t) => {
						const s = 0 === t || t === n.length - 1;
						if (!j || j && s) return r.a.createElement("span", {
							className: d.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), r.a.createElement("span", {
					className: d.a.srOnly,
					role: "screen-reader"
				}, [...S].reverse().join(""))), r.a.createElement("span", {
					ref: I
				}), L && r.a.createElement(a.a, {
					variables: x,
					onData: h ? m : f,
					queryKey: v,
					uniqueKey: Z.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var s = n("./src/lib/constants/index.ts");
			const r = 16374492e5,
				o = 45 * s.C;
			var a;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available", e.Expired = "Expired", e.Quarantined = "Quarantined"
			}(a || (a = {}));
			const i = e => {
					return e < Date.now() - o
				},
				c = e => e > r,
				l = (e, t, n, s) => {
					if (!n && !c(e.created)) return a.NotAvailable;
					if (n && !c(e.created) || i(e.created)) return a.Expired;
					if (n && s) return a.Quarantined;
					if (!t) return a.NotAvailableYet;
					const {
						shareAllCountTotals: r,
						shareCopyCountTotals: o,
						viewCountTotals: l,
						viewCountTrends: d
					} = t;
					return (null == r ? void 0 : r.availability.isAvailable) && (null == o ? void 0 : o.availability.isAvailable) && (null == l ? void 0 : l.availability.isAvailable) && (null == d ? void 0 : d.availability.isAvailable) && d.data && 0 !== d.data.length ? !(null == l ? void 0 : l.totalCount) || l.totalCount < 10 ? a.NotAvailableYet : a.Available : a.NotAvailableYet
				}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				d = n.n(l);
			t.a = e => a.a.createElement(i.i, {
				className: d.a.modalHeader
			}, a.a.createElement(i.q, null, e.title), a.a.createElement(c.a, {
				onClick: e.onClosePressed || r.a
			}, a.a.createElement(i.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				o = n.n(r);
			const a = s.a.div("Wrapper", o.a);
			t.a = a
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, n) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				l = n.n(c);
			const d = a.a.span("Placeholder", l.a),
				u = a.a.div("SelectedFlair", l.a),
				m = a.a.wrapped(i.b, "FlairComponent", l.a);
			t.a = e => e.flair ? o.a.createElement(u, null, o.a.createElement(d, null, s.fbt._("{placeholder}", [s.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), o.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : o.a.createElement(u, null, s.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, n) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/lodash/once.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = l.a.wrapped(e => a.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				h = r()((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
					return Object(i.a)({
						getComponent: () => Object(d.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
						ErrorComponent: e,
						LoadingComponent: e
					})
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/memoizeByReference/index.ts"),
				d = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/helpers/trackers/userFlair.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				b = n("./src/reddit/components/Flair/index.tsx"),
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/controls/RadioInput/index.tsx"),
				j = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				C = n("./src/reddit/helpers/trackers/postComposer.ts"),
				y = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				O = n("./src/reddit/icons/svgs/Search/index.tsx"),
				w = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				g = n.n(w);
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}, this.onSearchClick = () => {
						this.props.sendEvent(Object(C.n)())
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: n
					} = this.props, {
						searchQuery: r
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(r)), i = !!n && a.some(e => e.id === n);
					return o.a.createElement("div", {
						className: g.a.container
					}, o.a.createElement("div", {
						className: g.a.searchBoxWrapper
					}, o.a.createElement("input", {
						className: g.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: s.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: r
					}), o.a.createElement(O.a, {
						className: g.a.searchIcon
					})), o.a.createElement(x.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, a.map((e, t) => {
						const s = Object(u.c)(e),
							r = n === e.id || !i && 0 === t;
						return o.a.createElement(j.a, {
							className: g.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: r ? 0 : -1,
							value: e.id
						}, o.a.createElement(b.b, {
							className: g.a.flairComponent,
							flair: s,
							forceSmallEmojis: !0
						}), e.textEditable && o.a.createElement(y.a, {
							className: g.a.pencil
						}))
					})))
				}
			}
			var E = Object(v.c)(_),
				S = n("./src/reddit/components/FlairSearch/index.m.less"),
				N = n.n(S);
			const k = Object(l.a)(e => e && Object(u.c)(e)),
				I = Object(i.c)({
					areFlairRestrictionsEnabled: d.d.flairRestrictions,
					isModerator: h.g
				}),
				T = Object(a.b)(I);
			t.a = T(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: r,
					onChange: a,
					subredditId: i,
					templates: l,
					templateIds: d,
					areFlairRestrictionsEnabled: h,
					isModerator: b
				} = e, v = Object(p.a)(), x = l && n && n.templateId && l[n.templateId] || void 0, j = Object(f.a)(), C = n || k(x);
				return o.a.createElement("div", {
					className: Object(c.a)(r, N.a.container)
				}, l && d && o.a.createElement(E, {
					flairTemplateType: t,
					onChange: e => {
						if (l) {
							const t = l[e],
								n = Object(u.c)(t);
							v(Object(m.b)({
								userFlair: t
							})), a(n)
						}
					},
					selectedTemplateId: x ? x.id : "",
					templateIds: d,
					templates: l
				}), C && x && (b || x.textEditable) && o.a.createElement("div", {
					className: N.a.flairEditSection
				}, o.a.createElement("div", {
					className: N.a.editLabel
				}, s.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), h && o.a.createElement("div", {
					className: N.a.restrictionHintText
				}, Object(u.k)(x)), o.a.createElement(j, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: C,
					flairTemplate: x,
					flairTemplateType: t,
					isFlairModOnly: x.modOnly,
					onChange: e => {
						const t = l && e.templateId ? l[e.templateId] : void 0;
						let n = e;
						t && (n = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), a(n)
					},
					subredditId: i
				})))
			})
		},
		"./src/reddit/components/Header/Sparse.m.less": function(e, t, n) {
			e.exports = {
				Logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				Wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				HomeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				homeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				SparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				sparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				SparseContainerExp: "pb476LMY7Ob_RBN7pZ3kN",
				sparseContainerExp: "pb476LMY7Ob_RBN7pZ3kN"
			}
		},
		"./src/reddit/components/Header/Sparse.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/NavbarExp.ts"),
				i = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				c = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Header/Sparse.m.less"),
				u = n.n(d),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(i.a, "Logo", u.a),
				h = m.a.wrapped(c.a, "Wordmark", u.a),
				f = m.a.div("SparseContainer", u.a),
				b = m.a.div("SparseContainerExp", u.a),
				v = m.a.a("HomeExternalLink", u.a);
			t.a = function(e) {
				const t = Object(s.useContext)(a.a) ? b : f;
				return r.a.createElement(t, {
					id: o.d
				}, r.a.createElement(v, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, r.a.createElement(l.a, null, r.a.createElement(p, null), r.a.createElement(h, null))))
			}
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
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "p", (function() {
				return b
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "t", (function() {
				return N
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "s", (function() {
				return A
			})), n.d(t, "c", (function() {
				return M
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Input/ModalInput.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = r.a.wrapped(l.a, "CloseIcon", u.a),
				h = r.a.section("ModalBody", u.a),
				f = r.a.section("ModalPostPreview", u.a),
				b = r.a.p("ModalText", u.a),
				v = r.a.div("ModalSmallText", u.a),
				x = r.a.div("ModalDescriptionText", u.a),
				j = r.a.div("ModalMetaText", u.a),
				C = r.a.label("ModalFormItem", u.a),
				y = r.a.wrapped(c.a, "ModalInput", u.a),
				O = r.a.label("ModalInputLabel", u.a),
				w = r.a.footer("ModalFooter", u.a),
				g = r.a.header("ModalHeader", u.a),
				_ = r.a.div("ModalTitle", u.a),
				E = r.a.div("ModalAnnotation", u.a),
				S = r.a.div("ModalMain", u.a),
				N = r.a.textarea("TextArea", u.a),
				k = r.a.wrapped(i.l, "WarningButton", u.a),
				I = r.a.wrapped(i.l, "PrimaryButton", u.a),
				T = r.a.wrapped(i.o, "CancelButton", u.a),
				A = r.a.wrapped(i.r, "RemoveButton", u.a),
				M = e => {
					let {
						className: t,
						...n
					} = e;
					return a.a.createElement(i.t, m({
						kind: i.b.Button,
						priority: i.c.Primary,
						className: Object(s.a)(u.a.ConfirmButton, t)
					}, n))
				}
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/reddit/components/CreatorStats/helpers.ts"),
				d = n("./src/reddit/selectors/creatorStats.ts"),
				u = n("./src/reddit/components/PostContent/viewCount.m.less"),
				m = n.n(u);
			t.a = e => {
				let {
					className: t,
					post: n,
					showViewCount: r
				} = e;
				const {
					upvotePercentString: u,
					viewCountString: p
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						n = Object(c.b)(e.viewCount);
					return {
						upvotePercentString: s.fbt._("{percent upvoted}% Upvoted", [s.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: s.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [s.fbt._plural(e.viewCount, "number of views", n)], {
							hk: "rP01m"
						})
					}
				})(n), h = r && !!n.viewCount, f = Object(a.e)(e => Object(d.a)(e, n.id)), b = Object(a.e)(e => Object(d.c)(e, n.id)), v = Object(l.c)(n, b), x = f && v === l.b.Available;
				return o.a.createElement("div", {
					className: Object(i.a)(m.a.viewCounts, t)
				}, h && o.a.createElement("span", null, p), h && !!n.upvoteRatio && o.a.createElement("span", {
					className: m.a.dotSpacer
				}), !!n.upvoteRatio && !x && o.a.createElement("span", null, u))
			}
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, n) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./node_modules/lodash/isEqual.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/flair.ts"),
				a = n("./src/reddit/helpers/flair.ts"),
				i = n("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === i.f.Text || e.type === i.f.Image || e.type === i.f.Richtext);
			var l;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(l || (l = {}));
			const d = (e, t, n) => {
				if (n && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: l.NotSelected
				};
				const s = e && t.templateId ? e[t.templateId] : void 0;
				if (!s) return {
					canSave: !1,
					reason: l.InvalidTemplate
				};
				const i = Object(a.g)(t).length;
				return 0 === i ? {
					canSave: !1,
					reason: l.TextIsEmpty
				} : i > o.g ? {
					canSave: !1,
					reason: l.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(s) ? {
					canSave: !1,
					reason: l.TextIsNotAllowed
				} : r()(n, t) ? {
					canSave: !1,
					reason: l.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/raf/index.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o);
			class i extends a.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && r.a.cancel(this.frame), this.frame = r()(this.props.onResize)
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
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : a.c.Plain,
				p = e => {
					let {
						border: t,
						priority: n,
						small: s,
						...r
					} = e;
					return o.a.createElement(a.t, u({}, r, {
						priority: m(a.c.Primary, t, n),
						className: Object(d.a)(r.className, l.a.BaseButton),
						size: s ? a.d.S : a.d.M
					}))
				},
				h = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = e => {
					let {
						buttonType: t,
						border: n,
						priority: s,
						small: r,
						...i
					} = e;
					return o.a.createElement(a.t, u({}, i, {
						priority: m(a.c.Secondary, n, s),
						className: Object(d.a)(i.className, l.a.BaseButton),
						size: r ? a.d.S : a.d.M,
						text: h(t)
					}))
				};
			class b extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
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
						id: n,
						priority: s,
						small: r = !1,
						isFullWidth: a = !1,
						style: c
					} = this.props, l = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: r,
						isFullWidth: a,
						style: c
					};
					return this.props.userIsSubscriber ? o.a.createElement(f, u({}, l, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(p, u({}, l, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = e => {
					let {
						type: t,
						key: n
					} = e;
					return o[r({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(o.a))
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return w
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/controls/Score/index.tsx"),
				m = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				v = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				x = n("./src/reddit/components/VerticalVotes/index.m.less"),
				j = n.n(x);
			const C = Object(i.c)({
					isNightMode: b.db,
					isAnimatingUpvotePostId: f.k
				}),
				y = Object(a.b)(C),
				O = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				w = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: h.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(h.a.upvoted), this.setState({
							voted: e !== h.a.upvoted ? h.a.upvoted : h.a.notVoted
						})
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(h.a.downvoted), this.setState({
							voted: e !== h.a.downvoted ? h.a.downvoted : h.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isCountAnimShadowTestEnabled: n,
							isNightMode: r,
							isAnimatingUpvotePostId: a,
							shouldShowUpvoteRatioOnHover: i,
							isVoteCountAnimation: l,
							shouldShowScore: p = !0,
							upvoteButtonClassName: f,
							containerRef: b,
							model: x,
							postId: C
						} = e,
						y = O(e),
						g = w(e),
						_ = x.voteState,
						E = a === C;
					return o.a.createElement("div", {
						className: Object(c.a)(j.a.votesContainer, e.className),
						id: `vote-arrows-${x.id}`,
						ref: b
					}, y ? o.a.createElement(m.b, {
						"aria-label": s.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": _ === h.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": v.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: r,
						onClick: this.onUpvote,
						voteState: _
					}) : o.a.createElement("button", {
						"aria-label": s.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": _ === h.a.upvoted,
						className: Object(c.a)(d.n, f, {
							[j.a.bounceUp]: E
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						"data-adclicklocation": v.b.UPVOTE,
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: _
					})), !e.compact && p && o.a.createElement(u.a, {
						className: Object(c.a)(j.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: _,
						shouldShowUpvoteRatioOnHover: i,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!l,
						isCountAnimShadowTestEnabled: !!n,
						postId: C
					}), g ? o.a.createElement(m.a, {
						"aria-label": s.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": _ === h.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": v.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: r,
						onClick: this.onDownvote,
						voteState: _
					}) : o.a.createElement("button", {
						"aria-label": s.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": _ === h.a.downvoted,
						className: Object(c.a)(d.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": v.b.DOWNVOTE
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: _
					})))
				}
			}
			const _ = Object(l.a)(y(g));
			t.a = _
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
				return I
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "d", (function() {
				return M
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, n) => s => {
				const r = e(s),
					a = t(s),
					i = !r && a;
				return Object(o.a)(n.baseClassName, s.className, {
					[n.mIsInteractive]: a,
					[n.mIsActive]: r,
					[n.mIsVoteable]: i
				})
			};
			var c = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				l = n("./src/reddit/models/Vote/index.ts"),
				d = n("./src/reddit/controls/Downvote/index.m.less"),
				u = n.n(d);
			const m = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				p = e => {
					let {
						voteState: t
					} = e;
					return t === l.a.downvoted
				},
				h = i(p, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, m);
			var f = e => r.a.createElement(c.a, {
					className: h(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				b = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = n("./src/reddit/controls/Upvote/index.m.less"),
				x = n.n(v);
			const j = {
					...x.a,
					baseClassName: x.a.Upvote
				},
				C = e => {
					let {
						voteState: t
					} = e;
					return t === l.a.upvoted
				},
				y = i(C, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, j);
			var O = e => r.a.createElement(b.b, {
					className: y(e),
					compact: e.compact,
					isFilled: C(e)
				}),
				w = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				g = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				S = n.n(E);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => Object(o.a)({
					[S.a.compact]: e.compact,
					[S.a.dark]: Object(g.b)(Object(w.a)(e)),
					[S.a.nightmode]: e.isNightMode
				}),
				I = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(_.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						isNightMode: a,
						voteState: i,
						compact: c,
						...d
					} = e;
					return r.a.createElement("button", N({}, d, {
						className: Object(o.a)(S.a.customDownvote, k(e), {
							[S.a.voted]: e.voteState === l.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				T = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(_.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						isNightMode: a,
						voteState: i,
						compact: c,
						...d
					} = e;
					return r.a.createElement("button", N({}, d, {
						className: Object(o.a)(S.a.customUpvote, k(e), {
							[S.a.voted]: e.voteState === l.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				A = f,
				M = O
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: a.hb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(o.d([n], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([n], !1))
				}
			})
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "t", (function() {
				return b
			})), n.d(t, "s", (function() {
				return v
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "v", (function() {
				return j
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "o", (function() {
				return g
			}));
			const s = 284,
				r = 450,
				o = 800,
				a = 284,
				i = 48,
				c = 640,
				l = 1600,
				d = 40,
				u = 48,
				m = 24,
				p = 24,
				h = 312,
				f = 40,
				b = 270,
				v = 106,
				x = 5,
				j = 16,
				C = 1250,
				y = 82,
				O = 48,
				w = 36,
				g = 40
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = "reddit",
				r = "reddit.ready",
				o = "reddit.urlChanged"
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(s || (s = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(r || (r = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = 480,
				r = 960,
				o = 1200
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
				i = Object(s.createContext)(a);

			function c(e) {
				const t = t => r.a.createElement(i.Consumer, null, n => {
					let {
						apiContext: s,
						gqlContext: a,
						gqlRealtime2Context: i
					} = n;
					return r.a.createElement(e, o({
						apiContext: s,
						gqlContext: a,
						gqlRealtime2Context: i
					}, t))
				});
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = r.a.createContext(!1)
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				f = n.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class v extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
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
					}, n = Object(i.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(f.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, b({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(d.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...n
				} = e;
				const s = Object(i.a)(f.a.row, t, {
					[f.a.mIsInteractive]: !n.noHover,
					[f.a.mIsSelected]: n.isSelected,
					[f.a.topics]: n.isTopicsStyle
				});
				return a.a.createElement(v, b({
					className: s
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/controls/Input/index.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return r.a.createElement("input", u({
						className: Object(a.a)(d.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: i.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, n) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/keycodes.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(d);
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== a.b.Enter && e.key !== a.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : r.a.createElement(l.a, {
						"aria-checked": e.selected,
						className: Object(o.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? r.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : r.a.createElement(i.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/keycodes.ts");
			class a extends r.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props;
						t || this.state.value !== e && (n(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return r.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props, {
							value: s
						} = this.state;
						if (t) return;
						const r = e.key === o.b.ArrowUp,
							a = e.key === o.b.ArrowDown;
						if (r || a) {
							const t = this.getValues();
							if (!t.length) return;
							const o = s ? t.indexOf(s) : 0,
								a = t[((r ? o - 1 : o + 1) + t.length) % t.length];
							n(a), this.setState({
								value: a
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return r.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, r.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), r.a.Children.map(e.children, (n, s) => {
						const o = 0 === s,
							a = n.props.value === t,
							i = null !== t ? a ? 0 : -1 : o ? 0 : -1;
						return r.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: a,
							tabIndex: i
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu",
				viewCount: "_3bAGP2FKe97ijgBAGQOYsk"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/components/CountAnimation/index.tsx"),
				m = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = n("./src/reddit/components/PostContent/ViewCount.tsx"),
				h = n("./src/reddit/constants/colors.ts"),
				f = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				v = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				x = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = n("./src/reddit/models/Vote/index.ts"),
				C = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				y = n("./src/reddit/selectors/meta.ts"),
				O = n("./src/reddit/selectors/posts.ts"),
				w = n("./node_modules/reselect/es/index.js"),
				g = n("./src/reddit/controls/Score/index.m.less"),
				_ = n.n(g);
			const E = {
					placement: "right"
				},
				S = e => e.voteState === j.a.downvoted ? Object(x.a)(e).voteText.downvote : e.voteState === j.a.upvoted ? Object(x.a)(e).voteText.upvote : Object(b.a)(Object(f.a)(e)),
				N = Object(w.c)({
					locale: e => Object(y.j)(e),
					post: (e, t) => {
						let {
							shouldShowUpvoteRatioOnHover: n,
							postId: s
						} = t;
						if (n && s) return Object(O.G)(e, {
							postId: s
						})
					}
				}),
				k = () => 0,
				I = Object(l.b)(N),
				T = Object(o.a)(e => {
					const t = {
							color: e.light ? h.a.lightboxHeaderText : S(e)
						},
						{
							score: n,
							postId: o = "",
							locale: f,
							isVoteCountAnimation: b,
							isCountAnimShadowTestEnabled: x,
							shouldShowUpvoteRatioOnHover: j,
							post: y
						} = e,
						O = Object(l.d)(),
						w = null == f ? void 0 : f.startsWith("en"),
						g = e.isScoreHidden ? w ? s.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: _.a.dot
						}, "•") : Object(a.b)(n),
						N = Object(i.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && O(Object(d.I)({
								postId: o,
								delta: t
							}))
						}, [O, o]),
						I = Object(i.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: o
								}
							}
						}),
						T = !e.isScoreHidden && b && n < C.a,
						A = Object(v.a)(E),
						M = n < 0 ? 0 : n;
					return c.a.createElement("div", {
						className: Object(r.a)(_.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t,
						onMouseEnter: j ? A.show : void 0,
						onMouseLeave: j ? A.hide : void 0,
						ref: j ? A.target.ref : void 0
					}, (T || x) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: M,
						countToUpperBound: M,
						initialDelay: k,
						subsequentRecurringDelay: k,
						incrementDelta: k,
						shouldDisjointAnimation: !0,
						postId: o,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: I.current,
						onDataCB: N,
						isLoadTestOnly: x && !T
					})), !T && g, j && y && c.a.createElement(m.a, A, c.a.createElement(p.a, {
						className: _.a.viewCount,
						post: y,
						showViewCount: !1
					})))
				});
			t.a = I(T)
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, n) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/TextButton/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("button", {
				children: e.children,
				className: Object(o.a)(i.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(o);
			t.a = s.a.wrapped(r.default, "unstyledInternalLink", a.a)
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
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} = e;
				return t && n && s && r ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/polished/dist/polished.es.js");
			var s = n("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function r(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(s.a)(e).post
			}
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: i.S(e),
					screen: i.ab(e),
					subreddit: i.ib(e)
				}),
				l = (e, t, n) => s => ({
					source: Object(a.i)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(s),
					post: i.J(s, e)
				}),
				d = (e, t, n, s) => r => {
					const a = n ? i.h(r, n) : null,
						{
							sortToUse: c
						} = Object(o.a)(r, e);
					return {
						...l(e, t, s)(r),
						comment: a,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => n => {
					const s = i.j(n);
					return s ? l(s.id, e, t)(n) : {
						source: Object(a.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				m = (e, t) => n => Object(r.a)({
					...l(e, t)(n),
					...i.n(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: s.c.CLICK,
					noun: e,
					...c(t),
					post: i.j(t),
					userSubreddit: i.sb(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return a
			})), n.d(t, "l", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "h", (function() {
				return j
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(r.ab)(e),
					profile: Object(r.S)(e),
					subreddit: Object(r.ib)(e),
					userSubreddit: Object(r.sb)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				i = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.J)(n, t),
					...o(n)
				}),
				c = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(r.J)(n, t),
					comment: Object(r.h)(n, t),
					...o(n)
				}),
				l = (e, t) => n => ({
					source: "comment",
					action: s.c.CLICK,
					noun: e,
					post: Object(r.J)(n, t),
					comment: Object(r.h)(n, t),
					actionInfo: {
						pageType: "chat_live_post"
					},
					...o(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: s.c.UNDO,
					noun: e,
					post: Object(r.J)(n, t),
					comment: Object(r.h)(n, t),
					...o(n)
				}),
				u = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(r.J)(n, t),
					comment: Object(r.h)(n, t),
					...o(n)
				}),
				m = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(r.J)(n, t),
					comment: Object(r.h)(n, t),
					...o(n)
				}),
				p = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.J)(n, t),
					comment: Object(r.h)(n, t),
					...o(n)
				}),
				h = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(r.h)(n, t),
					post: Object(r.J)(n, t),
					...o(n)
				}),
				f = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(r.J)(n, t),
					...o(n)
				}),
				b = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(r.J)(n, t),
					subreddit: Object(r.lb)(n, t)
				}),
				v = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(r.h)(n, t),
					post: Object(r.J)(n, t),
					subreddit: Object(r.lb)(n, t)
				}),
				x = (e, t, n, s) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(r.J)(o, n),
					subreddit: Object(r.lb)(o, n),
					actionInfo: {
						reason: s
					},
					...e && {
						comment: Object(r.h)(o, n)
					}
				}),
				j = () => e => ({
					...o(e),
					source: "modqueue",
					noun: "content_type_live_post",
					action: "view",
					actionInfo: {
						pageType: "chat_live_post"
					}
				})
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/gold/powerups/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...o.n(e)
				}),
				i = e => t => {
					const n = o.ib(t),
						a = Object(r.r)(t, {
							subredditId: null == n ? void 0 : n.id
						}),
						{
							userFlair: i,
							achievementFlair: c,
							supporterFlair: l
						} = e,
						d = c || l;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...o.n(t),
						subreddit: n,
						userFlair: {
							id: null == i ? void 0 : i.id,
							title: i ? Object(s.g)(i) : void 0,
							isActive: !!i || void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name,
							isLocked: null == d ? void 0 : d.isLocked,
							supporterFlairId: null == l ? void 0 : l.type,
							supporterFlairTitle: null == l ? void 0 : l.name,
							isSupporter: a
						}
					}
				},
				c = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...o.n(e)
				}),
				l = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: o.ib(t),
					...o.n(t)
				})
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.a = e => {
				let {
					compact: t,
					isFilled: n,
					...s
				} = e;
				return t ? r.a.createElement("span", l({}, s, {
					className: Object(o.a)(c.a.compactDownvoteWrapper, s.className)
				}), r.a.createElement(d, {
					className: c.a.compactDownvote,
					isFilled: n
				})) : r.a.createElement("span", l({}, s, {
					className: Object(o.a)(c.a.downvoteWrapper, s.className)
				}), r.a.createElement(d, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("caret_down",e.isFilled)} ${e.className}`
			})
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
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.b = e => {
				let {
					compact: t,
					isFilled: n,
					...s
				} = e;
				return t ? r.a.createElement("span", l({}, s, {
					className: Object(o.a)(c.a.compactUpvoteWrapper, s.className)
				}), r.a.createElement(d, {
					className: c.a.compactUpvote,
					isFilled: n
				})) : r.a.createElement("span", l({}, s, {
					className: Object(o.a)(c.a.upvoteWrapper, s.className)
				}), r.a.createElement(d, {
					isFilled: n
				}))
			}
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
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", c({}, e, {
				className: Object(o.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/colors.ts");
			t.a = e => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, r.a.createElement("g", null, r.a.createElement("circle", {
				fill: o.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(o.a)(e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: e.color || Object(i.a)(e).bodyText
			}, r.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), r.a.createElement("circle", {
				fill: a.a.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), r.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), r.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), r.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), r.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), r.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				o = n.n(r);
			t.a = s.a.button("inlineButton", o.a)
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(i);
			t.a = Object(o.a)(e => r.a.createElement("div", {
				className: Object(a.a)(c.a.exapndLeftContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/creatorStats/constants.ts");
			const o = {};
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						const {
							postOtherDiscussions: n
						} = t.payload;
						return {
							...e, ...n
						};
					default:
						return e
				}
			};
			const i = {};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						const {
							postStats: n
						} = t.payload;
						return {
							...e, ...n
						};
					default:
						return e
				}
			};
			const l = {};
			var d = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						const {
							subredditKarma: n
						} = t.payload;
						return {
							...e, ...n
						};
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				postOtherDiscussions: a,
				postStats: c,
				subredditKarma: d
			})
		},
		"./src/reddit/selectors/creatorStats.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/creatorStats/index.ts"),
				o = n("./src/reddit/selectors/moderatorPermissions.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)({
				features: {
					creatorStats: r.a
				}
			});
			const c = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === s ? void 0 : s.postOtherDiscussions[t]
				},
				l = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === s ? void 0 : s.postStats[t]
				},
				d = (e, t) => {
					var n, s, r;
					const o = null === (r = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === s ? void 0 : s.subredditKarma[t]) || void 0 === r ? void 0 : r.karma;
					if (!o) return;
					const {
						fromComments: a,
						fromPosts: i
					} = o;
					return {
						fromComments: a,
						fromPosts: i
					}
				},
				u = (e, t, n) => {
					const s = Object(a.G)(e, {
						postId: t
					});
					if (!s || s.isSponsored || s.removedByCategory) return !1;
					const r = Object(a.V)(e, {
						postId: t
					});
					if (r && r.isQuarantined) return !1;
					const c = !n && !!Object(o.m)(e, {
						postId: t
					});
					return Object(i.Db)(e, {
						postId: t
					}) || c
				}
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/presence.ts"),
				i = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				l = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.s
					});
					return t === s.x.VoteCountOnly || t === s.x.CommentCountOnly || t === s.x.VoteAndCommentCount
				},
				d = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.s
					});
					return t === s.x.VoteCountOnly || t === s.x.VoteAndCommentCount
				},
				u = e => {
					if (Object(i.d)(e) || Object(a.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.s
					});
					return t === s.x.CommentCountOnly || t === s.x.VoteAndCommentCount
				},
				m = (e, t) => {
					let {
						post: n
					} = t;
					return p(e, {
						postId: n.id
					})
				},
				p = (e, t) => {
					let {
						postId: n
					} = t;
					const r = e.posts.models[n];
					if (Object(i.d)(e) || !r || r.isSponsored || r.isScoreHidden || r.score >= c || Object(a.a)(e)) return !1;
					const l = Object(o.d)(e, {
							experimentName: s.s
						}),
						d = null == l ? void 0 : l.variant;
					return d === s.x.VoteCountOnly || d === s.x.VoteAndCommentCount
				},
				h = (e, t) => {
					let {
						postId: n
					} = t;
					const r = e.posts.models[n];
					if (Object(i.d)(e) || !r || r.isSponsored || r.numComments >= c || Object(a.a)(e)) return !1;
					const l = Object(o.d)(e, {
							experimentName: s.s
						}),
						d = null == l ? void 0 : l.variant;
					return d === s.x.CommentCountOnly || d === s.x.VoteAndCommentCount
				},
				f = e => {
					if (Object(a.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.xc
					}) === s.Tc.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.af
				}) === s.Jd
			}
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
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
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const o = e => {
					if (a(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(r.c)(e)) || !!t
				},
				a = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Qb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				i = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var l = n("./src/reddit/constants/jsapiEvents.ts");
			const d = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${i}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(l.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === i && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(a, `${s.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(a, `${s.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const s = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(s), this.queue.length > d && this.queue.shift(), this.active && this.fireEvent(s)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					r.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage.151c82de8812ef462193.js.map