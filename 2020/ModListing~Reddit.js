// https://www.redditstatic.com/desktop2x/ModListing~Reddit.212b6165a7a886919cd2.js
// Retrieved at 2/5/2020, 1:50:13 PM by Reddit Dataminer v1.0.0
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
				return h
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/FocusTrap/index.ts"),
				i = n("./src/reddit/actions/shortcuts.ts"),
				c = n("./src/reddit/components/Portal/index.tsx"),
				d = n("./src/reddit/constants/shortcuts.ts"),
				l = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const v = e => {
				var {
					className: t,
					isVisible: n
				} = e, s = f(e, ["className", "isVisible"]);
				return r.a.createElement("div", p({
					className: Object(o.a)(m.a.overlay, t, {
						[m.a.mIsVisible]: n
					})
				}, s))
			};

			function h(e) {
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
							ignoreDefaultFocus: s,
							onOverlayClick: a,
							overlayClassName: i,
							overlayCustomStyles: l,
							withOverlay: u
						} = t, p = f(t, ["className", "ignoreDefaultFocus", "onOverlayClick", "overlayClassName", "overlayCustomStyles", "withOverlay"]);
						return r.a.createElement(c.a, {
							container: document.getElementById(d.b)
						}, r.a.createElement(v, {
							className: i,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: l
						}, r.a.createElement("div", {
							"aria-modal": !0,
							className: Object(o.a)(m.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, r.a.createElement(e, p))))
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
					if (!r) throw new Error("Cannot find item with key ".concat(e));
					n.prev = r, n.next = r.next, r.next = n, n.next && (n.next.prev = n);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error("Cannot find item with key ".concat(e));
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
				return f
			})), n.d(t, "a", (function() {
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/constants/componentSizes.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				d = n.n(c);
			const l = Object(r.createContext)(null),
				u = Object(r.createContext)(null);
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
					return o.a.createElement(l.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(u.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const p = a.f + 10,
				f = o.a.memo(() => o.a.createElement(l.Consumer, null, e => e && o.a.createElement("div", {
					className: d.a.wrapper
				}, o.a.createElement(i.n, {
					className: d.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -p)
					}
				}, s.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), o.a.createElement("div", {
					className: d.a.rightBorder
				})))),
				v = o.a.memo(() => o.a.createElement(u.Consumer, null, e => o.a.createElement("div", {
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
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "q", (function() {
				return j
			})), n.d(t, "r", (function() {
				return C
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "p", (function() {
				return E
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				c = n.n(i);
			const d = s.a.wrapped(a.a, "CloseIcon", c.a),
				l = s.a.section("ModalBody", c.a),
				u = s.a.p("ModalText", c.a),
				m = s.a.div("ModalSmallText", c.a),
				p = s.a.div("ModalDescriptionText", c.a),
				f = s.a.div("ModalMetaText", c.a),
				v = s.a.label("ModalFormItem", c.a),
				h = s.a.wrapped(o.a, "ModalInput", c.a),
				x = s.a.label("ModalInputLabel", c.a),
				y = s.a.footer("ModalFooter", c.a),
				b = s.a.header("ModalHeader", c.a),
				g = s.a.div("ModalTitle", c.a),
				O = s.a.div("ModalMain", c.a),
				j = s.a.textarea("TextArea", c.a),
				C = s.a.wrapped(r.f, "WarningButton", c.a),
				w = s.a.wrapped(r.f, "PrimaryButton", c.a),
				_ = s.a.wrapped(r.i, "CancelButton", c.a),
				E = s.a.wrapped(r.n, "RemoveButton", c.a)
		},
		"./src/reddit/components/SEOTitle/index.m.less": function(e, t, n) {
			e.exports = {
				Title: "_eYtD2XCVieq6emjKBH3m",
				title: "_eYtD2XCVieq6emjKBH3m"
			}
		},
		"./src/reddit/components/SEOTitle/index.tsx": function(e, t, n) {
			"use strict";
			var s, r, o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(s || (s = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(r || (r = {}));
			var d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/helpers/postCollection.ts");
			const u = [d.yb.COMMENTS, d.yb.COLLECTION_COMMENTS],
				m = (e, t) => {
					if (!e) return [];
					const n = u.includes(e),
						r = e === d.yb.COLLECTION_COMMENTS || t && Object(l.a)(t),
						o = d.M.has(e),
						a = d.pb.has(e),
						i = e === d.yb.SUBREDDIT,
						c = e === d.yb.TOPIC;
					let m, p, f;
					return o && !i || a ? m = s.HeaderSelector : r ? m = s.Collection : n ? m = s.PostComments : c && (m = s.TopicHeader), (o || a || r || n) && (p = s.Widget), (o || n) && (f = s.PostItem), [m, p, f]
				};
			var p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/selectors/platform.ts"),
				v = n("./src/reddit/components/SEOTitle/index.m.less"),
				h = n.n(v);
			n.d(t, "a", (function() {
				return s
			}));
			const x = e => {
					let {
						level: t,
						children: n
					} = e;
					const s = "h".concat(t);
					return a.a.createElement(s, {
						className: h.a.Title
					}, n)
				},
				y = Object(p.t)(),
				b = Object(i.b)(() => Object(c.a)((e, t) => {
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
					level: m(t, e).indexOf(n) + 1 || void 0
				})));
			class g extends a.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? a.a.createElement(x, {
						level: t
					}, e) : a.a.createElement(a.a.Fragment, null, e)
				}
			}
			t.b = y(b(g))
		},
		"./src/reddit/components/Translated/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/lodash/isEqual.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/app/strings/index.ts"),
				c = n("./src/reddit/contexts/Language.tsx");
			class d extends a.a.Component {
				constructor() {
					super(...arguments), this.getString = e => Object(i.a)(e, this.props.msgId, this.props.replacements)
				}
				shouldComponentUpdate(e) {
					return this.props.msgId !== e.msgId || !r()(this.props.replacements, e.replacements)
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
				d = n("./src/reddit/models/Vote/index.ts"),
				l = n("./src/reddit/controls/Downvote/index.m.less"),
				u = n.n(l);
			const m = i(e => {
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
			var p = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				f = n("./src/reddit/controls/Upvote/index.m.less"),
				v = n.n(f);
			const h = i(e => {
				let {
					voteState: t
				} = e;
				return t === d.a.upvoted
			}, e => {
				let {
					interactive: t
				} = e;
				return !1 !== t
			}, Object.assign({}, v.a, {
				baseClassName: v.a.Upvote
			}));
			var x = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				y = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				O = n.n(g);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
				return I
			}));
			var C = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const w = e => Object(o.a)({
					[O.a.compact]: e.compact,
					[O.a.dark]: Object(y.b)(Object(x.a)(e)),
					[O.a.nightmode]: e.isNightmode
				}),
				_ = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(b.a)(e), n = {
						"--verticalvotes-customdownvote-active": "url(".concat(t.downvoteActive, ")"),
						"--verticalvotes-customdownvote-inactive": "url(".concat(t.downvoteInactive, ")")
					}, {
						theme: s
					} = e, a = C(e, ["theme"]);
					return r.a.createElement("button", j({}, a, {
						className: Object(o.a)(O.a.customDownvote, w(e), {
							[O.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				E = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(b.a)(e), n = {
						"--verticalvotes-customupvote-active": "url(".concat(t.upvoteActive, ")"),
						"--verticalvotes-customupvote-inactive": "url(".concat(t.upvoteInactive, ")")
					}, {
						theme: s
					} = e, a = C(e, ["theme"]);
					return r.a.createElement("button", j({}, a, {
						className: Object(o.a)(O.a.customUpvote, w(e), {
							[O.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				N = e => r.a.createElement(c.a, {
					className: m(e),
					compact: e.compact
				}),
				I = e => r.a.createElement(p.a, {
					className: h(e),
					compact: e.compact
				})
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(r.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.j,
				isBladeEditorDirty: i.i,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(d, (e, t) => {
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
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "q", (function() {
				return f
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "v", (function() {
				return b
			})), n.d(t, "w", (function() {
				return g
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "p", (function() {
				return _
			}));
			const s = 284,
				r = 450,
				o = 800,
				a = 284,
				i = 48,
				c = 640,
				d = 1600,
				l = 1280,
				u = 40,
				m = 48,
				p = 24,
				f = 24,
				v = 312,
				h = 40,
				x = 270,
				y = 106,
				b = 5,
				g = 16,
				O = 1250,
				j = 82,
				C = 48,
				w = 36,
				_ = 37
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
		"./src/reddit/constants/zIndex.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			const s = 4,
				r = 60,
				o = 70,
				a = 90,
				i = 99,
				c = 100,
				d = 100
		},
		"./src/reddit/contexts/Language.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");
			const r = Object(s.createContext)("en")
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/domUtils/index.ts"),
				i = n("./src/reddit/constants/zIndex.ts"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				d = n.n(c);
			class l extends r.a.Component {
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
					return (e.isFixed || e.isOverlay) && (e.isFixed && (t.position = "fixed"), e.isOverlay && (t.zIndex = e.isFixed ? i.d + 1 : i.c)), r.a.createElement("div", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			class p extends r.a.Component {
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
						s = m(e, ["className", "closeModal"]);
					return r.a.createElement("input", u({
						className: Object(a.a)(l.a.input, t),
						onKeyDown: this.handleKeyDown
					}, s))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: i.f
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
				return r
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const r = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/elementIds.ts");
			let r;
			const o = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(s.c);
					document.body.style.overflow = e, document.body.style.marginRight = null, t && (t.style.marginRight = null)
				},
				a = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, r || (r = i(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = "".concat(r, "px");
					const t = document.getElementById(s.c);
					t && (t.style.marginRight = "".concat(r, "px"))
				},
				i = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				}
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/categories.tsx"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: r.screen(e),
					profile: r.profile(e),
					subreddit: r.subreddit(e)
				}),
				a = e => t => Object.assign({
					source: "nav",
					action: "click",
					noun: e
				}, o(t)),
				i = e => t => Object.assign({}, o(t), {
					source: "nav",
					action: "click",
					noun: "category_".concat(Object(s.f)(e))
				}),
				c = e => t => Object.assign({}, o(t), {
					source: "nav",
					action: "change",
					noun: "category_".concat(Object(s.f)(e))
				}),
				d = e => t => Object.assign({}, o(t), {
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				l = e => t => Object.assign({}, o(t), {
					source: "time_sort_switch",
					action: "click",
					noun: e
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const u = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("downvote"), c.a.downvote, e.className)
			});
			t.a = e => {
				var {
					compact: t
				} = e, n = l(e, ["compact"]);
				return t ? r.a.createElement("span", d({}, n, {
					className: Object(o.a)(c.a.compactDownvoteWrapper, n.className)
				}), r.a.createElement(u, {
					className: c.a.compactDownvote
				})) : r.a.createElement("span", d({}, n, {
					className: Object(o.a)(c.a.downvoteWrapper, n.className)
				}), r.a.createElement(u, null))
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const u = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("upvote"), c.a.upvote, e.className)
			});
			t.a = e => {
				var {
					compact: t
				} = e, n = l(e, ["compact"]);
				return t ? r.a.createElement("span", d({}, n, {
					className: Object(o.a)(c.a.compactUpvoteWrapper, n.className)
				}), r.a.createElement(u, {
					className: c.a.compactUpvote
				})) : r.a.createElement("span", d({}, n, {
					className: Object(o.a)(c.a.upvoteWrapper, n.className)
				}), r.a.createElement(u, null))
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.m.less"),
				a = n.n(o),
				i = n("./src/lib/lessComponent.tsx");
			const c = e => "icon icon-".concat(e),
				d = i.a.wrapped(e => r.a.createElement("span", {
					className: e.className
				}, e.children), "TooltipDesc", a.a)
		},
		"./src/reddit/icons/svgs/Close/index.tsx": function(e, t, n) {
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
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("polygon", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);
			const c = e => r.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.dropdown, {
					[i.a.mRedditStyle]: !e.isSubreddit
				}),
				style: e.style,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/colors.ts");
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), r.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), r.a.createElement("circle", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const v = Object(d.t)(),
				h = Object(a.c)({
					isEditing: l.j,
					layout: (e, t) => t.forcedLayout || Object(d.L)(e, t)
				}),
				x = Object(o.b)(h),
				y = e => {
					var {
						disableFullscreen: t,
						dispatch: n,
						fitPageToContent: s,
						forcedLayout: o,
						isCollectionLayout: a,
						isEditing: i,
						layout: c,
						pageLayer: d
					} = e, l = f(e, ["disableFullscreen", "dispatch", "fitPageToContent", "forcedLayout", "isCollectionLayout", "isEditing", "layout", "pageLayer"]);
					return r.a.createElement("div", l)
				};
			t.a = v(x(e => {
				var {
					className: t
				} = e, n = f(e, ["className"]);
				return r.a.createElement(y, p({
					className: Object(i.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: n.layout === c.g.Large,
						[m.a.mDisableFullScreen]: n.disableFullscreen && !n.isCollectionLayout,
						[m.a.mClassicWidth]: n.isCollectionLayout,
						[m.a.mIsEditing]: !!n.isEditing,
						[m.a.mCanFlexFullWidth]: !n.fitPageToContent
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/layout/page/Listing/Content.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return r.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var h = Object(f.a)(v),
				x = e => r.a.createElement(h, e),
				y = n("./src/reddit/layout/page/Listing/index.m.less"),
				b = n.n(y);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
				}
				return n
			};
			const j = Object(i.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: s,
						theme: o
					} = e, i = O(e, ["backgroundColor", "className", "redditStyle", "theme"]), c = Object(p.a)(e), d = {
						"--pseudo-before-background": t || Object(m.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return r.a.createElement("div", g({
						className: Object(a.a)(b.a.backgroundContainer, n),
						style: d
					}, i))
				}),
				C = c.a.div("Body", b.a),
				w = c.a.div("Sidebar", b.a);
			t.a = e => {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: "".concat(d.q, "px"),
						marginTop: t
					} : {
						marginLeft: "".concat(d.q, "px"),
						marginTop: t
					},
					s = e.sidebar && r.a.createElement(w, {
						className: e.isCollectionLayout ? b.a["m-collectionLayout"] : void 0,
						style: n
					}, e.sidebar),
					i = r.a.createElement(o.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? r.a.createElement(r.a.Fragment, null, e.sidebars[0], i, e.sidebars[1]) : e.isPageSwapped ? r.a.createElement(r.a.Fragment, null, s, i) : r.a.createElement(r.a.Fragment, null, i, s);
				const m = e.disableFullscreen ? "".concat(e.maxWidth || u.a + 2 * d.m, "px") : "100%",
					p = e.layerEmbed ? e.layerEmbed : null;
				return r.a.createElement(x, {
					subredditId: e.subredditId
				}, r.a.createElement("div", {
					className: Object(a.a)(b.a.outerContainer, l.i, e.className),
					ref: e.containerRef
				}, r.a.createElement(j, {
					className: l.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), r.a.createElement("div", {
					className: b.a.innerContainer
				}, r.a.createElement("div", {
					className: b.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, (e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null)(e), r.a.createElement("div", {
					style: {
						maxWidth: m
					}
				}, e.trendingUnit), p, r.a.createElement(C, {
					style: {
						maxWidth: m
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
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("inlineRow", o.a)
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
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/constants/index.ts");
			const r = e => !o(e) && !!e.user.prefs.subscriptionsPinned,
				o = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.yb.MODERATION_PAGES)
		}
	}
]);
//# sourceMappingURL=ModListing~Reddit.212b6165a7a886919cd2.js.map