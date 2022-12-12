// https://www.redditstatic.com/desktop2x/ModListing~Reddit.a1e1f5c5b87c5ee7e8c7.js
// Retrieved at 12/12/2022, 12:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing~Reddit"], {
		"./src/higherOrderComponents/asModal/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/elementIds.ts");
			const s = () => {
					const e = document.getElementById(r.a);
					e && (e.style.filter = "blur(10px)")
				},
				o = () => {
					const e = document.getElementById(r.a);
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
				return f
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/asModal/helpers.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/FocusTrap/index.ts"),
				i = n("./src/lib/portal/index.tsx"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				l = n("./src/reddit/constants/shortcuts.ts"),
				u = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				p = n("./src/higherOrderComponents/asModal/index.m.less"),
				h = n.n(p);

			function m() {
				return (m = Object.assign || function(e) {
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
					shouldBlurBackground: n,
					isVisible: r,
					...o
				} = e;
				return s.a.createElement("div", m({
					className: Object(a.a)(h.a.overlay, t, {
						[h.a.mIsVisible]: r,
						[h.a.mIsBlurred]: n
					})
				}, o))
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
						}), Object(u.a)(), this.ref && (this.focusTrap = new c.b(this.ref), this.focusTrap.activate()), this.props.shouldBlurBackground && Object(o.a)()
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(u.b)(), Object(d.d)(), this.focusTrap && this.focusTrap.deactivate(), this.props.shouldBlurBackground && Object(o.b)()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: r,
							onOverlayClick: o,
							overlayClassName: c,
							overlayCustomStyles: d,
							shouldBlurBackground: u,
							withOverlay: p,
							...m
						} = t, f = m;
						return s.a.createElement(i.a, {
							container: document.getElementById(l.b)
						}, s.a.createElement(v, {
							className: c,
							isVisible: p,
							onClick: this.onOverlayClick,
							shouldBlurBackground: u,
							style: d
						}, s.a.createElement("div", {
							"aria-modal": !0,
							className: Object(a.a)(h.a.modal, n),
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
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "INCONTEXT__BANNED",
				o = "INCONTEXT__MUTED",
				a = Object(r.a)(s),
				c = Object(r.a)(o)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const r = "SUBREDDIT__MODERATION_LOG_LOADED",
				s = "SUBREDDIT__ALL_MODERATORS_LOADED",
				o = "SUBREDDIT__MODERATION_CATEGORY_ACTIONS_LOADED"
		},
		"./src/reddit/components/BackToSubreddit/index.m.less": function(e, t, n) {
			e.exports = {
				backToSubreddit: "_3aAvvioBKBNnlJqKytAVAd",
				innerContainer: "_3aVffPeM6Nkqs7D0RJ5FBs",
				back: "_17MxNCYEMmDof9NnT6ffxl",
				title: "_2VB8YvVdvxx0h0VGYVrpBX",
				subredditIcon: "_2Aw3HO2EUDcP7F481ZxyYl",
				content: "uhMLc-O1VODjzminrp8py"
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
				return m
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				i = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(l);
			const p = Object(s.createContext)(null),
				h = Object(s.createContext)(null);
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
					return o.a.createElement(p.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(h.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const v = c.f + 10,
				f = o.a.memo(() => {
					const [e, t] = Object(s.useState)("-500px"), n = Object(s.useContext)(i.a);
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
							s.focus(), s.scrollIntoView(), window.scrollBy(0, -v)
						}
					}, r.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				y = o.a.memo(() => o.a.createElement(h.Consumer, null, e => o.a.createElement("div", {
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
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "t", (function() {
				return E
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "s", (function() {
				return B
			})), n.d(t, "c", (function() {
				return L
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/Input/ModalInput.tsx"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = s.a.wrapped(d.a, "CloseIcon", u.a),
				m = s.a.section("ModalBody", u.a),
				v = s.a.section("ModalPostPreview", u.a),
				f = s.a.p("ModalText", u.a),
				y = s.a.div("ModalSmallText", u.a),
				g = s.a.div("ModalDescriptionText", u.a),
				b = s.a.div("ModalMetaText", u.a),
				x = s.a.label("ModalFormItem", u.a),
				w = s.a.wrapped(i.a, "ModalInput", u.a),
				O = s.a.label("ModalInputLabel", u.a),
				j = s.a.footer("ModalFooter", u.a),
				C = s.a.header("ModalHeader", u.a),
				I = s.a.div("ModalTitle", u.a),
				N = s.a.div("ModalAnnotation", u.a),
				_ = s.a.div("ModalMain", u.a),
				E = s.a.textarea("TextArea", u.a),
				k = s.a.wrapped(c.l, "WarningButton", u.a),
				T = s.a.wrapped(c.l, "PrimaryButton", u.a),
				M = s.a.wrapped(c.o, "CancelButton", u.a),
				B = s.a.wrapped(c.r, "RemoveButton", u.a),
				L = e => {
					let {
						className: t,
						...n
					} = e;
					return a.a.createElement(c.t, p({
						kind: c.b.Button,
						priority: c.c.Primary,
						className: Object(r.a)(u.a.ConfirmButton, t)
					}, n))
				}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/raf/index.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o);
			class c extends a.a.Component {
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
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n      visibility: hidden;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
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
			var c = Object(o.a)(a);
			t.a = e => s.a.createElement(c, e)
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
				return T
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "d", (function() {
				return L
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const c = (e, t, n) => r => {
				const s = e(r),
					a = t(r),
					c = !s && a;
				return Object(o.a)(n.baseClassName, r.className, {
					[n.mIsInteractive]: a,
					[n.mIsActive]: s,
					[n.mIsVoteable]: c
				})
			};
			var i = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
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
				m = c(h, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, p);
			var v = e => s.a.createElement(i.a, {
					className: m(e),
					compact: e.compact,
					isFilled: h(e)
				}),
				f = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				y = n("./src/reddit/controls/Upvote/index.m.less"),
				g = n.n(y);
			const b = {
					...g.a,
					baseClassName: g.a.Upvote
				},
				x = e => {
					let {
						voteState: t
					} = e;
					return t === d.a.upvoted
				},
				w = c(x, e => {
					let {
						interactive: t
					} = e;
					return !1 !== t
				}, b);
			var O = e => s.a.createElement(f.b, {
					className: w(e),
					compact: e.compact,
					isFilled: x(e)
				}),
				j = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				C = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				_ = n.n(N);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => Object(o.a)({
					[_.a.compact]: e.compact,
					[_.a.dark]: Object(C.b)(Object(j.a)(e)),
					[_.a.nightmode]: e.isNightMode
				}),
				T = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: r,
						isNightMode: a,
						voteState: c,
						compact: i,
						...l
					} = e;
					return s.a.createElement("button", E({}, l, {
						className: Object(o.a)(_.a.customDownvote, k(e), {
							[_.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				M = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(I.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: r,
						isNightMode: a,
						voteState: c,
						compact: i,
						...l
					} = e;
					return s.a.createElement("button", E({}, l, {
						className: Object(o.a)(_.a.customUpvote, k(e), {
							[_.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				B = v,
				L = O
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				c = n("./src/reddit/selectors/structuredStyles.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const d = Object(s.c)({
				bladeHasUnsavedChanges: c.a,
				isEditing: c.i,
				isBladeEditorDirty: c.h,
				isModalOpen: Object(a.b)(i.a.BLADE_UNSAVED_CHANGES)
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
				return c
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "t", (function() {
				return f
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "v", (function() {
				return b
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "o", (function() {
				return C
			}));
			const r = 284,
				s = 450,
				o = 800,
				a = 284,
				c = 48,
				i = 640,
				d = 1600,
				l = 40,
				u = 48,
				p = 24,
				h = 24,
				m = 312,
				v = 40,
				f = 270,
				y = 106,
				g = 5,
				b = 16,
				x = 1250,
				w = 82,
				O = 48,
				j = 36,
				C = 40
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				h = n.n(p),
				m = n("./src/reddit/controls/Dropdown/row.m.less"),
				v = n.n(m);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class y extends a.a.Component {
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
					}, n = Object(c.a)(v.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(i.a, f({}, t, {
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
						className: Object(c.a)(v.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(c.a)(v.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: v.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: h.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				let {
					className: t,
					...n
				} = e;
				const r = Object(c.a)(v.a.row, t, {
					[v.a.mIsInteractive]: !n.noHover,
					[v.a.mIsSelected]: n.isSelected,
					[v.a.topics]: n.isTopicsStyle
				});
				return a.a.createElement(y, f({
					className: r
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
				muteSubreddit: "ui39KJ4PwbdKkxvIBbLbV",
				modNotes: "sK8_uuNiAqPNlw-HoD2HG",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
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
			class p extends s.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === i.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return s.a.createElement("input", u({
						className: Object(a.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: c.f
			})(p)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
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
				c = n.n(a);
			t.a = e => s.a.createElement("button", {
				children: e.children,
				className: Object(o.a)(c.a.textButton, e.className),
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
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(o);
			t.a = r.a.wrapped(s.default, "unstyledInternalLink", a.a)
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
				return c
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./src/reddit/constants/categories.tsx");
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: r.cb(e),
					profile: r.T(e),
					subreddit: r.lb(e)
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
				c = e => t => ({
					...s(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
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
				c = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				i = n.n(c);

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
				className: Object(o.a)(Object(a.b)("downvote", e.isFilled), i.a.downvote, e.className)
			});
			t.a = e => {
				let {
					compact: t,
					isFilled: n,
					...r
				} = e;
				return t ? s.a.createElement("span", d({}, r, {
					className: Object(o.a)(i.a.compactDownvoteWrapper, r.className)
				}), s.a.createElement(l, {
					className: i.a.compactDownvote,
					isFilled: n
				})) : s.a.createElement("span", d({}, r, {
					className: Object(o.a)(i.a.downvoteWrapper, r.className)
				}), s.a.createElement(l, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
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
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				i = n.n(c);

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
				className: Object(o.a)(Object(a.b)("upvote", e.isFilled), i.a.upvote, e.className)
			});
			t.b = e => {
				let {
					compact: t,
					isFilled: n,
					...r
				} = e;
				return t ? s.a.createElement("span", d({}, r, {
					className: Object(o.a)(i.a.compactUpvoteWrapper, r.className)
				}), s.a.createElement(l, {
					className: i.a.compactUpvote,
					isFilled: n
				})) : s.a.createElement("span", d({}, r, {
					className: Object(o.a)(i.a.upvoteWrapper, r.className)
				}), s.a.createElement(l, {
					isFilled: n
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
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
				c = n("./src/reddit/models/Theme/index.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
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
				} = e, p = Object(i.a)(e), h = {
					"--pseudo-before-background": t || Object(c.g)(p.canvas, p.canvasImgUrl, p.canvasImgPosition)
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
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/postLayout.ts"),
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
			const m = Object(d.v)(),
				v = Object(a.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.U)(e, t)
				}),
				f = Object(o.b)(v);
			t.a = m(f(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: r,
					dispatch: o,
					fitPageToContent: a,
					forcedLayout: l,
					isCollectionLayout: u,
					isEditing: m,
					layout: v,
					pageLayer: f,
					...y
				} = e;
				return s.a.createElement("div", h({
					className: Object(c.a)(t, p.a.styledContent, {
						[p.a.mLargePostLayout]: v === i.g.Large || Object(d.R)(f),
						[p.a.mDisableFullScreen]: r && !u,
						[p.a.mClassicWidth]: u,
						[p.a.mIsEditing]: !!m,
						[p.a.mCanFlexFullWidth]: !a,
						[p.a.onlyChildMargin]: !n
					})
				}, y))
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
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				p = n("./node_modules/classnames/index.js"),
				h = n.n(p),
				m = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = n("./src/lib/constants/icons.ts"),
				f = n("./src/reddit/components/SubredditIcon/index.tsx"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				g = n("./src/reddit/components/BackToSubreddit/index.m.less"),
				b = n.n(g);
			var x = e => {
					const {
						subredditName: t
					} = e, n = `/${t}`;
					return s.a.createElement(m.a, {
						className: b.a.backToSubreddit,
						to: n
					}, s.a.createElement("div", {
						className: b.a.innerContainer
					}, s.a.createElement(y.a, {
						name: v.a.back,
						className: h()(b.a.content, b.a.back)
					}), s.a.createElement(f.b, {
						className: h()(b.a.content, b.a.subredditIcon)
					}), s.a.createElement("span", {
						className: h()(b.a.content, b.a.title)
					}, t)))
				},
				w = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				O = n("./src/reddit/layout/page/Listing/index.m.less"),
				j = n.n(O);
			t.a = e => {
				const {
					backgroundColor: t,
					backToSubredditName: n,
					className: p,
					containerRef: h,
					content: m,
					contentBanner: v,
					contentClassName: f,
					contentNavBar: y,
					disableFullscreen: g,
					fitPageToContent: b,
					forcedLayout: O,
					hideOnlyChildMargin: C,
					isCollectionLayout: I,
					isPageSwapped: N,
					maxWidth: _,
					navBar: E,
					redditStyle: k,
					sidebar: T,
					sidebars: M,
					trendingUnit: B,
					subredditId: L
				} = e, S = B ? "28px" : "0", D = N ? {
					marginRight: `${i.p}px`,
					marginTop: S
				} : {
					marginLeft: `${i.p}px`,
					marginTop: S
				}, A = T && s.a.createElement("div", {
					className: Object(c.a)(j.a.sidebar, I ? j.a["m-collectionLayout"] : j.a.defaultLayout),
					style: D
				}, T), P = s.a.createElement(a.a, {
					hideOnlyChildMargin: C,
					className: f,
					disableFullscreen: g,
					fitPageToContent: b,
					forcedLayout: O,
					isCollectionLayout: I
				}, v, n && s.a.createElement(x, {
					subredditName: n
				}), m);
				let U;
				U = M ? s.a.createElement(s.a.Fragment, null, M[0], P, M[1]) : N ? s.a.createElement(s.a.Fragment, null, A, P) : s.a.createElement(s.a.Fragment, null, P, A);
				const R = g ? `${_||l.a+2*i.l}px` : "100%",
					F = Object(r.useContext)(u.a);
				return s.a.createElement(w.a, {
					subredditId: L
				}, s.a.createElement("div", {
					className: Object(c.a)(j.a.outerContainer, d.i, p, {
						[j.a.outerContainerExp]: F
					}),
					ref: h
				}, s.a.createElement(o.a, {
					className: d.h,
					redditStyle: k,
					backgroundColor: t
				}), s.a.createElement("div", {
					className: j.a.innerContainer
				}, E, y, (e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null)(e), s.a.createElement("div", {
					style: {
						maxWidth: R
					}
				}, B), s.a.createElement("div", {
					className: j.a.body,
					style: {
						maxWidth: R
					}
				}, U))))
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
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				i = n.n(c);
			t.a = Object(o.a)(e => s.a.createElement("div", {
				className: Object(a.a)(i.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: i.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: i.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
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
			const c = {};
			var i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
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
					pending: i
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
				m = n("./node_modules/icepick/icepick.js");
			const v = {};
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
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
						return Object(m.merge)(e, s)
					}
					case s.k: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(m.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var y = function() {
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
			var g = function() {
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
				b = Object(r.c)({
					error: y,
					pending: g
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
				w = Object(r.c)({
					api: b,
					result: x
				});
			const O = {};
			var j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
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
					models: f,
					search: w,
					userOrder: j
				});
			var I = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.n:
					case s.m:
						return null;
					case s.l:
						return t.payload;
					default:
						return e
				}
			};
			const N = {};
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.n: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(a.f)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case s.m:
						case s.l: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(a.f)(n, r);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				E = Object(r.c)({
					error: I,
					pending: _
				});
			const k = {};
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.m: {
						const {
							fetchedToken: n,
							subredditId: r
						} = t.payload, s = Object(a.f)(r, n);
						return {
							...e,
							[s]: !0
						}
					}
					default:
						return e
				}
			};
			const M = {};
			var B = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.m: {
						const {
							subredditId: e,
							loadMoreToken: n
						} = t.payload;
						return {
							[e]: n
						}
					}
					default:
						return e
				}
			};
			const L = {};
			var S = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.m: {
							const {
								subredditId: n,
								approvedTalkHosts: r,
								forceRefresh: s
							} = t.payload, o = {
								[n]: [...s ? [] : e[n] || [], ...r]
							};
							return Object(m.merge)(e, o)
						}
						case s.o: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, s = {
								[n]: e[n].filter(e => e.redditor.id !== r)
							};
							return Object(m.merge)(e, s)
						}
						default:
							return e
					}
				},
				D = Object(r.c)({
					api: E,
					fetchedTokens: T,
					loadMore: B,
					models: S
				}),
				A = n("./src/reddit/actions/grantUserFlair/constants.ts");
			var P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.g:
					case A.i:
						return null;
					case A.f:
						return t.payload;
					default:
						return e
				}
			};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.i:
							return !0;
						case A.g:
						case A.f:
							return !1;
						default:
							return e
					}
				},
				R = Object(r.c)({
					error: P,
					pending: U
				}),
				F = n("./node_modules/lodash/merge.js"),
				K = n.n(F),
				W = n("./node_modules/lodash/omit.js"),
				V = n.n(W);
			const q = {};
			var z = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.g:
					case A.k: {
						const {
							subredditId: n,
							flairedUsers: r
						} = t.payload;
						return K()({
							...e
						}, {
							[n]: r
						})
					}
					case A.c: {
						const {
							subredditId: n,
							userName: r
						} = t.payload, s = V()(e[n], r);
						return {
							...e,
							[n]: s
						}
					}
					case A.a:
					case A.b:
					case A.h:
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
			const H = {};
			var J = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.g: {
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
			var Q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.l:
					case A.k:
						return null;
					case A.j:
						return t.payload;
					default:
						return e
				}
			};
			var X = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.l:
							return !0;
						case A.k:
						case A.j:
							return !1;
						default:
							return e
					}
				},
				G = Object(r.c)({
					error: Q,
					pending: X
				});
			var Y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case A.c: {
							const {
								userName: n
							} = t.payload;
							return e === n ? null : e
						}
						default:
							return e
					}
				},
				Z = Object(r.c)({
					api: G,
					result: Y
				});
			const $ = {};
			var ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case A.g: {
							const {
								key: n,
								userOrder: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case A.a: {
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
						case A.c: {
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
				te = Object(r.c)({
					api: R,
					models: z,
					pageInfo: J,
					search: Z,
					userOrder: ee
				}),
				ne = n("./src/reddit/actions/moderationLog/constants.ts");
			const re = {};
			var se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.b: {
						const {
							normalizedCategories: n
						} = t.payload;
						return Object(m.merge)(e, n)
					}
					default:
						return e
				}
			};
			const oe = {};
			var ae = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.c: {
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
			const ce = {};
			var ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.c: {
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
							return K()({
								...e
							}, o)
						}
						default:
							return e
					}
				},
				de = Object(r.c)({
					itemOrder: ae,
					models: ie
				});
			var le = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.c: {
						const {
							approximateCount: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			var ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.c: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const pe = {};
			var he = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.c: {
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
			const me = {};
			var ve = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.c: {
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
			const fe = [];
			var ye = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ne.a: {
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
			var ge = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.c: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				be = Object(r.c)({
					actionCategories: se,
					actions: de,
					approximateCount: le,
					endCursor: ue,
					hasNextPage: he,
					hasPreviousPage: ve,
					moderators: ye,
					startCursor: ge
				});
			const xe = {};
			var we = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.O:
					case s.y: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload.response || t.payload, s = {
							[n]: r
						};
						return Object(m.merge)(e, s)
					}
					case s.C: {
						const {
							subredditId: n,
							userId: r,
							permissions: s
						} = t.payload;
						return Object(m.setIn)(e, [n, r, "modPermissions"], s)
					}
					case s.jb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(m.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			const Oe = {};
			var je = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.z:
					case s.y: {
						const {
							key: n,
							subredditId: r
						} = t.payload;
						return r ? {
							...e,
							[n]: null
						} : e
					}
					case s.x: {
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
			const Ce = {};
			var Ie = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.x:
						case s.y: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case s.z: {
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
				Ne = Object(r.c)({
					error: je,
					pending: Ie
				});
			const _e = {};
			var Ee = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.y: {
							const {
								subredditId: n,
								response: r,
								key: s
							} = t.payload;
							return Object(m.setIn)(e, [n, s], r.moderatorIds)
						}
						case s.jb: {
							const {
								subredditId: n,
								userId: r,
								key: s
							} = t.payload, o = e[n][s].filter(e => e !== r);
							return Object(m.setIn)(e, [n, s], o)
						}
						default:
							return e
					}
				},
				ke = Object(r.c)({
					data: Ee,
					api: Ne
				});
			var Te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.F:
					case s.E:
						return null;
					case s.D:
						return t.payload;
					default:
						return e
				}
			};
			var Me = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.E:
						case s.D:
							return !1;
						case s.F:
							return !0;
						default:
							return e
					}
				},
				Be = Object(r.c)({
					error: Te,
					pending: Me
				});
			const Le = {};
			var Se = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Le,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.E: {
						const {
							subredditId: n,
							moderators: r
						} = t.payload;
						return Object(m.set)(e, n, r)
					}
					case s.gb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(m.unsetIn)(e, [n, r])
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
						return Object(m.merge)(e, o)
					}
					default:
						return e
				}
			};
			const De = {};
			var Ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.E: {
							const {
								subredditId: n,
								moderatorIds: r
							} = t.payload;
							return {
								...e,
								[n]: r
							}
						}
						case s.gb: {
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
				Pe = Object(r.c)({
					api: Be,
					models: Se,
					userOrder: Ae
				});
			const Ue = {};
			var Re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ue,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.L: {
						const {
							subredditId: n,
							response: r
						} = t.payload, {
							invitePending: s
						} = r, o = {
							[n]: s
						};
						return Object(m.merge)(e, o)
					}
					case s.I:
					case s.J: {
						const {
							subredditId: n
						} = t.payload;
						return Object(m.unset)(e, n)
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
					case s.y: {
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
			const We = {};
			var Ve = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : We,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.L: {
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
			const qe = {};
			var ze = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.L: {
						const {
							response: n
						} = t.payload, r = {
							[n.subredditId]: n.moderators
						};
						return Object(m.merge)({
							...e
						}, r)
					}
					case s.C: {
						const n = t.payload,
							{
								subredditId: r,
								userId: s,
								permissions: o
							} = n;
						return e[r] && e[r][s] ? Object(m.setIn)(e, [r, s, "modPermissions"], o) : e
					}
					default:
						return e
				}
			};
			var He = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.P:
					case s.O:
						return null;
					case s.N:
						return t.payload;
					default:
						return e
				}
			};
			var Je = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.P:
							return !0;
						case s.O:
						case s.N:
							return !1;
						default:
							return e
					}
				},
				Qe = Object(r.c)({
					error: He,
					pending: Je
				}),
				Xe = n("./node_modules/lodash/isEqual.js"),
				Ge = n.n(Xe);
			var Ye = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.P:
						case s.N:
						case s.jb:
							return null;
						case s.O: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case s.C: {
							const {
								userId: n,
								permissions: r
							} = t.payload;
							return e && e.id === n && !Ge()(e.modPermissions, r) ? {
								...e,
								modPermissions: r
							} : e
						}
						default:
							return e
					}
				},
				Ze = Object(r.c)({
					api: Qe,
					result: Ye
				});
			const $e = {};
			var et = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.M:
					case s.L: {
						const {
							subredditId: n,
							key: r
						} = t.payload;
						return n ? {
							...e,
							[r]: null
						} : e
					}
					case s.K: {
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
			const tt = {};
			var nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.K:
						case s.L: {
							const {
								subredditId: n,
								key: r
							} = t.payload;
							return n ? {
								...e,
								[r]: !1
							} : e
						}
						case s.M: {
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
				rt = Object(r.c)({
					error: et,
					pending: nt
				});
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const st = {};
			var ot = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : st,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.L: {
							const {
								response: n,
								subredditId: r,
								key: s
							} = t.payload, {
								moderatorIds: o
							} = n;
							return Object(m.merge)(e, {
								[r]: {
									[s]: o
								}
							})
						}
						case s.jb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload, s = {
								...e[n]
							};
							return Object.keys(e[n]).forEach(t => {
								const o = e[n][t].filter(e => e !== r);
								s[t] = o
							}), Object(m.set)(e, n, s)
						}
						default:
							return e
					}
				},
				at = Object(r.c)({
					data: ot,
					api: rt
				}),
				ct = Object(r.c)({
					editableModerators: we,
					editableUserOrder: ke,
					invitedModerators: Pe,
					invitePending: Re,
					loadMoreModerators: Ve,
					loadMoreEditableModerators: Ke,
					models: ze,
					search: Ze,
					userOrder: at
				}),
				it = n("./src/reddit/actions/bulkActions/constants.ts");
			var dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.c:
						case it.b:
							return null;
						case it.a:
							return t.payload;
						default:
							return e
					}
				},
				lt = n("./src/reddit/actions/modQueue/constants.ts");
			var ut = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.c:
							return !0;
						case it.b:
						case it.a:
						case lt.x:
						case lt.w:
							return !1;
						default:
							return e
					}
				},
				pt = Object(r.c)({
					error: dt,
					pending: ut
				});
			const ht = {};
			var mt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ht,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.a: {
							const {
								ids: n
							} = t.payload, r = {};
							return n.forEach(e => r[e] = !0), {
								...e,
								...r
							}
						}
						case lt.d: {
							const {
								ids: n
							} = t.payload;
							return V()(e, n)
						}
						case lt.c: {
							const {
								ids: e
							} = t.payload, n = {};
							return e.forEach(e => n[e] = !0), n
						}
						default:
							return e
					}
				},
				vt = n("./src/reddit/models/ModQueue/index.ts");
			const ft = {};
			var yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ft,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case it.b: {
							const {
								operation: e,
								ids: n
							} = t.payload;
							return "approve" === e ? ft : {
								[vt.c[e]]: n
							}
						}
						default:
							return e
					}
				},
				gt = Object(r.c)({
					api: pt,
					selectedItems: mt,
					undoLastAction: yt
				});
			var bt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.g:
					case lt.f:
						return null;
					case lt.e:
						return t.payload;
					default:
						return e
				}
			};
			var xt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.g:
							return !0;
						case lt.f:
						case lt.e:
							return !1;
						default:
							return e
					}
				},
				wt = Object(r.c)({
					error: bt,
					pending: xt
				});
			const Ot = {};
			var jt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.f: {
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
			const Ct = {};
			var It = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.f: {
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
					itemOrder: jt,
					loadMore: It
				}),
				_t = n("./src/reddit/actions/pages/modListing/constants.ts");
			var Et = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _t.e: {
						const n = t.payload,
							{
								moderatingSubreddits: r
							} = n;
						return r ? null : e
					}
					case lt.i:
					case lt.f:
					case lt.r:
					case lt.u:
					case lt.A: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: n
						} = e;
						return n
					}
					case lt.n: {
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
			const kt = [];
			var Tt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.i:
					case lt.f:
					case lt.r:
					case lt.u:
					case lt.A: {
						const {
							response: e
						} = t.payload, {
							listingOrder: n
						} = e;
						return n
					}
					case lt.n: {
						const n = t.payload,
							{
								listingOrder: r
							} = n;
						return [...e, ...r]
					}
					case _t.e: {
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
			var Mt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.b:
						return !0;
					default:
						return e
				}
			};
			var Bt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.n:
							return !0;
						case lt.b:
							return !1;
						default:
							return e
					}
				},
				Lt = Object(r.c)({
					after: Et,
					data: Tt,
					loaded: Mt,
					pending: Bt
				});
			var St = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.j:
					case lt.i:
						return null;
					case lt.h:
						return t.payload;
					default:
						return e
				}
			};
			var Dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.j:
							return !0;
						case lt.i:
						case lt.h:
							return !1;
						default:
							return e
					}
				},
				At = Object(r.c)({
					error: St,
					pending: Dt
				});
			const Pt = {};
			var Ut = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.i: {
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
			const Rt = {};
			var Ft = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.i: {
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
				Kt = Object(r.c)({
					api: At,
					itemOrder: Ut,
					loadMore: Ft
				});
			var Wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.s:
					case lt.r:
						return null;
					case lt.q:
						return t.payload;
					default:
						return e
				}
			};
			var Vt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.s:
							return !0;
						case lt.r:
						case lt.q:
							return !1;
						default:
							return e
					}
				},
				qt = Object(r.c)({
					error: Wt,
					pending: Vt
				});
			const zt = {};
			var Ht = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.r: {
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
			const Jt = {};
			var Qt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.r: {
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
				Xt = Object(r.c)({
					api: qt,
					itemOrder: Ht,
					loadMore: Qt
				});
			var Gt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.v:
					case lt.u:
						return null;
					case lt.t:
						return t.payload;
					default:
						return e
				}
			};
			var Yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.v:
							return !0;
						case lt.u:
						case lt.t:
							return !1;
						default:
							return e
					}
				},
				Zt = Object(r.c)({
					error: Gt,
					pending: Yt
				});
			const $t = {};
			var en = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $t,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.u: {
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
			const tn = {};
			var nn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.u: {
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
				rn = Object(r.c)({
					api: Zt,
					itemOrder: en,
					loadMore: nn
				});
			var sn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.B:
					case lt.A:
						return null;
					case lt.z:
						return t.payload;
					default:
						return e
				}
			};
			var on = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.B:
							return !0;
						case lt.A:
						case lt.z:
							return !1;
						default:
							return e
					}
				},
				an = Object(r.c)({
					error: sn,
					pending: on
				});
			const cn = {};
			var dn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.A: {
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
			const ln = {};
			var un = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ln,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.A: {
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
				pn = Object(r.c)({
					api: an,
					itemOrder: dn,
					loadMore: un
				}),
				hn = Object(r.c)({
					bulkAction: gt,
					edited: Nt,
					moderatedCommunitiesOrder: Lt,
					modqueue: Kt,
					reports: Xt,
					spam: rn,
					unmoderated: pn
				});
			var mn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.Y:
					case s.W:
						return null;
					case s.V:
						return t.payload;
					default:
						return e
				}
			};
			const vn = {};
			var fn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.Y: {
							const {
								subredditId: n,
								fetchedToken: r
							} = t.payload, s = Object(a.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						case s.W:
						case s.V: {
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
				yn = Object(r.c)({
					error: mn,
					pending: fn
				});
			const gn = {};
			var bn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.W: {
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
				xn = n("./src/reddit/actions/inContextModeration.ts");
			var wn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case xn.b:
						return t.payload;
					default:
						return e
				}
			};
			const On = {};
			var jn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : On,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.W: {
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
			const Cn = {};
			var In = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.X:
					case s.W: {
						const {
							subredditId: n,
							mutedUsers: r
						} = t.payload, s = {
							[n]: r
						};
						return Object(m.merge)(e, s)
					}
					case s.cb: {
						const {
							subredditId: n,
							userId: r
						} = t.payload;
						return Object(m.unsetIn)(e, [n, r])
					}
					default:
						return e
				}
			};
			var Nn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.bb:
					case s.ab:
						return null;
					case s.Z:
						return t.payload;
					default:
						return e
				}
			};
			var _n = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.bb:
							return !0;
						case s.ab:
						case s.Z:
							return !1;
						default:
							return e
					}
				},
				En = Object(r.c)({
					error: Nn,
					pending: _n
				});
			var kn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.bb:
						case s.Z:
							return null;
						case s.ab: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				Tn = Object(r.c)({
					api: En,
					result: kn
				});
			const Mn = {};
			var Bn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.W: {
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
						case s.cb: {
							const {
								subredditId: n,
								userId: r
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== r)
							}
						}
						case s.X: {
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
				Ln = Object(r.c)({
					api: yn,
					fetchedTokens: bn,
					inContext: wn,
					loadMore: jn,
					models: In,
					search: Tn,
					userOrder: Bn
				});
			t.a = Object(r.c)({
				approvedSubmitters: C,
				approvedTalkHosts: D,
				flairedUsers: te,
				moderationLog: be,
				moderators: ct,
				modQueue: hn,
				muted: Ln
			})
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(s.c)(e, {
				experimentName: r.Je,
				experimentEligibilitySelector: s.a
			}) === r.Re.Enabled
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing~Reddit.a1e1f5c5b87c5ee7e8c7.js.map