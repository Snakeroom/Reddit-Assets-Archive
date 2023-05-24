// https://www.redditstatic.com/desktop2x/2.3de82649f71f6910dc40.js
// Retrieved at 5/24/2023, 11:50:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[2], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return s(e) + t
			}
		},
		"./src/devPlatform/components/ConfigFormRenderer/header/index.m.less": function(e, t, n) {
			e.exports = {
				ConfigFormHeaderWrapper: "PqiKC5y3MtpOWAIJA2M56",
				configFormHeaderWrapper: "PqiKC5y3MtpOWAIJA2M56",
				Close: "_1TlzzDiOrfvW2fVh0tHECm",
				close: "_1TlzzDiOrfvW2fVh0tHECm",
				backButton: "_1zXy5VOV6LnR1Ha0Y7yTtF"
			}
		},
		"./src/devPlatform/components/ConfigFormRenderer/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "LE17otPrEaIC4mTQHgpuk",
				wrapper: "LE17otPrEaIC4mTQHgpuk",
				Component: "_1LWJ0MrQU0wvwf9WsmYluK",
				component: "_1LWJ0MrQU0wvwf9WsmYluK",
				ConfigFormRendererWrapper: "_1T3gVE7EY08IWN6ZTM8Rzw",
				configFormRendererWrapper: "_1T3gVE7EY08IWN6ZTM8Rzw",
				TextWrapper: "_2D9Yj77y8eVlppJvyYCB32",
				textWrapper: "_2D9Yj77y8eVlppJvyYCB32",
				ConfigFormRow: "_1FQy9rv60ba9iVg2Pj940w",
				configFormRow: "_1FQy9rv60ba9iVg2Pj940w",
				ConfigFormStringRow: "mi382vZStoG3cwZMxklG2",
				configFormStringRow: "mi382vZStoG3cwZMxklG2",
				ConfigFormFooterWrapper: "_1uaFfE8oT-yzuDIV8qeU9J",
				configFormFooterWrapper: "_1uaFfE8oT-yzuDIV8qeU9J",
				NumberInputWrapper: "_2a5qiX925BSbyxyB6DvA0T",
				numberInputWrapper: "_2a5qiX925BSbyxyB6DvA0T"
			}
		},
		"./src/devPlatform/components/UserInputModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/devPlatform/components/UserInputModal/modals.ts"),
				c = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				d = n("./node_modules/@devvit/protos/index.js"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/controls/Input/index.tsx"),
				h = n("./src/reddit/controls/NumberInput/index.tsx"),
				v = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				x = n("./src/devPlatform/components/ConfigFormRenderer/header/index.m.less"),
				g = n.n(x);
			const b = u.a.div("ConfigFormHeaderWrapper", g.a),
				C = u.a.wrapped(f.a, "Close", g.a);

			function E(e) {
				const {
					title: t,
					onCloseClick: n
				} = e;
				return a.a.createElement(b, null, t, a.a.createElement(C, {
					onClick: n
				}))
			}
			var w = n("./src/devPlatform/components/ConfigFormRenderer/index.m.less"),
				k = n.n(w);
			const y = u.a.div("Wrapper", k.a),
				N = u.a.div("ConfigFormRendererWrapper", k.a),
				_ = u.a.p("TextWrapper", k.a),
				O = u.a.div("ConfigFormRow", k.a),
				I = u.a.div("ConfigFormStringRow", k.a),
				R = u.a.div("NumberInputWrapper", k.a),
				j = u.a.div("ConfigFormFooterWrapper", k.a);
			class M extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						values: e.configForm.fields.reduce((e, t) => (e.set(t.key, JSON.parse(t.response || '""')), e), new Map)
					}
				}
				updateValue(e, t) {
					this.setState(n => {
						let {
							values: s
						} = n;
						return {
							values: new Map([...s, [e, t]])
						}
					})
				}
				onSubmit() {
					const e = d.e.fromJSON(this.props.configForm);
					for (const t of e.fields) t.response = JSON.stringify(this.state.values.get(t.key));
					this.props.onSubmitClick(e)
				}
				render() {
					var e, t, n, s;
					const {
						title: r,
						description: o,
						configForm: i,
						onCloseClick: l
					} = this.props, u = [];
					for (const c of i.fields) switch (Object(d.cb)(c.fieldType)) {
						case d.d.STRING:
							u.push(a.a.createElement(I, {
								key: c.key
							}, a.a.createElement("label", {
								htmlFor: c.key
							}, c.prompt), a.a.createElement(m.a, {
								id: c.key,
								value: null !== (e = this.state.values.get(c.key)) && void 0 !== e ? e : "",
								onChange: e => this.updateValue(c.key, e.target.value)
							})));
							break;
						case d.d.PARAGRAPH:
							u.push(a.a.createElement(I, {
								key: c.key
							}, a.a.createElement("label", {
								htmlFor: c.key
							}, c.prompt), a.a.createElement("textarea", {
								id: c.key,
								onChange: e => this.updateValue(c.key, e.target.value),
								value: null !== (t = this.state.values.get(c.key)) && void 0 !== t ? t : ""
							})));
							break;
						case d.d.NUMBER:
							u.push(a.a.createElement(O, {
								key: c.key
							}, a.a.createElement("label", {
								htmlFor: c.key
							}, c.prompt), a.a.createElement(R, null, a.a.createElement(h.a, {
								id: c.key,
								step: 1,
								onChange: e => this.updateValue(c.key, e || 0),
								value: null !== (n = this.state.values.get(c.key)) && void 0 !== n ? n : 0
							}))));
							break;
						case d.d.BOOLEAN:
							const r = null !== (s = this.state.values.get(c.key)) && void 0 !== s && s;
							u.push(a.a.createElement(O, {
								key: c.key
							}, a.a.createElement("label", {
								htmlFor: c.key
							}, c.prompt), a.a.createElement(v.a, {
								id: c.key,
								on: r,
								onToggle: () => this.updateValue(c.key, !r)
							})));
							break;
						case d.d.UNRECOGNIZED:
					}
					return a.a.createElement(y, null, a.a.createElement(N, null, a.a.createElement(E, {
						title: r,
						onCloseClick: l
					}), a.a.createElement(_, null, o), u, a.a.createElement(j, null, a.a.createElement(p.t, {
						onClick: () => this.onSubmit()
					}, c.fbt._("Ok", null, {
						hk: "2Giu9U"
					})))))
				}
			}
			var T = M;
			const F = Object(o.c)({});
			class S extends a.a.Component {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						const {
							closeUserInputModal: t
						} = this.props;
						if ("Escape" === e.key) return t()
					}, this.onSubmitClick = e => {
						const {
							onAction: t,
							closeUserInputModal: n
						} = this.props;
						t(e), n()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						action: {
							name: e,
							description: t,
							userInput: n
						},
						closeUserInputModal: s
					} = this.props;
					return a.a.createElement(T, {
						title: e,
						description: t,
						configForm: n,
						onSubmitClick: this.onSubmitClick,
						onCloseClick: s
					})
				}
			}
			var D = Object(r.b)(F, e => ({
					closeUserInputModal: () => e(Object(l.a)())
				}))(S),
				W = n("./src/lib/initializeClient/installReducer.ts"),
				A = n("./src/reddit/reducers/features/devPlatform/index.ts");
			Object(W.a)({
				features: {
					devPlatform: A.a
				}
			});

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const B = Object(o.c)({
					action: e => e.features.devPlatform.userInputModal.action,
					onAction: e => e.features.devPlatform.userInputModal.onAction
				}),
				V = Object(r.b)(B, e => ({
					closeUserInputModal: () => e(Object(l.a)())
				})),
				L = Object(i.a)(e => e.action && e.onAction ? a.a.createElement(D, {
					action: e.action,
					onAction: e.onAction
				}) : null);
			t.default = V(e => a.a.createElement(L, P({}, e, {
				withOverlay: !0,
				onOverlayClick: e.closeUserInputModal
			})))
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
				return C
			})), n.d(t, "c", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(a),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				l = n("./node_modules/react/index.js"),
				c = n.n(l),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				v = n.n(h);
			var f = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return c.a.createElement("div", {
						className: v.a.wrapper
					}, c.a.createElement(m.a, {
						className: v.a.titleRow
					}, n), c.a.createElement("div", {
						className: v.a.detailsContainer
					}, t), c.a.createElement(m.a, {
						className: v.a.buttonRow
					}, c.a.createElement(p.l, {
						className: v.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				x = n("./src/reddit/controls/ErrorText/index.m.less"),
				g = n.n(x);
			class b extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
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
						className: t,
						errorModalBody: n,
						errorModalTitle: a = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: i
					} = this.state;
					return c.a.createElement("div", {
						className: Object(d.a)(g.a.wrapper, t)
					}, c.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), o && c.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, r), i && c.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: a
					}, n || e))
				}
			}
			const C = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: a,
						messages: r = []
					} = e, o = r.length ? r : a ? [a] : [];
					return o.length ? c.a.createElement("div", {
						className: t
					}, o.map((e, t) => c.a.createElement(b, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				E = e => c.a.createElement(C, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = b
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
				return v
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				l = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				c = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(d);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = o.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				v = e => {
					let {
						label: t,
						children: n,
						inputRef: s,
						className: o,
						isInvalid: i,
						...l
					} = e;
					const c = void 0 !== l.value && "" !== l.value;
					return a.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: i
						}),
						onClick: h
					}, a.a.createElement(m, p({
						"aria-invalid": i,
						innerRef: s
					}, l)), t && a.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, t), n)
				},
				f = e => {
					let {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: o,
						className: i,
						redditStyle: l,
						...c
					} = e;
					const d = void 0 !== c.value && "" !== c.value;
					return a.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: l
						}),
						onClick: h
					}, a.a.createElement(m, p({
						innerRef: s
					}, c)), t && a.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, t), n)
				},
				x = e => a.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(l.a, {
					className: u.a.plus
				}));
			var g;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(g || (g = {}));
			class b extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: g.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: g.REMOVE,
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
						placeholder: s,
						errors: r = []
					} = this.props;
					return e.map((e, o) => a.a.createElement(v, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!r[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, a.a.createElement(c.b, {
						className: u.a.trash
					})), !!r[o] && a.a.createElement(i.b, {
						className: u.a.errorText
					}, r[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const l = !(!!s && n.length >= s) && !i;
					return a.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && l && a.a.createElement(x, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && l && a.a.createElement(x, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/index.m.less"),
				r = n.n(a);
			t.a = s.a.input("input", r.a)
		},
		"./src/reddit/controls/NumberInput/index.m.less": function(e, t, n) {
			e.exports = {
				inputId: "_2u55GXL0tixR3CDSXDptAh",
				numberInput: "w-WaN4v2qJbrNH2KHKl22",
				buttonContainer: "_1jxskdr4hjRXJPk9GUqGX5",
				chevronBtn: "_2V0mlaYUMWvXR35HSCUhVt",
				icon: "_2YiYPzVRljNQIohYKWAbZm"
			}
		},
		"./src/reddit/controls/NumberInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/FormFields/index.tsx"),
				i = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				c = n("./src/reddit/controls/NumberInput/index.m.less"),
				d = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class p extends a.a.Component {
				constructor() {
					super(...arguments), this.inputRef = null, this.handleIncrement = e => {
						if (e.preventDefault(), !this.inputRef) return;
						this.inputRef.stepUp();
						const {
							onChange: t,
							onIncrease: n,
							value: s
						} = this.props;
						this.inputRef.value !== s && (t(parseFloat(this.inputRef.value)), n && n())
					}, this.handleDecrement = e => {
						if (e.preventDefault(), !this.inputRef) return;
						this.inputRef.stepDown();
						const {
							onChange: t,
							onDecrease: n,
							value: s
						} = this.props;
						this.inputRef.value !== s && (t(parseFloat(this.inputRef.value)), n && n())
					}, this.handleChangeEvent = e => {
						const t = e.target.value;
						this.props.onChange(parseFloat(t))
					}, this.focusOnInput = e => {
						e.preventDefault(), this.inputRef && this.inputRef.focus()
					}, this.setInputRef = e => this.inputRef = e
				}
				render() {
					const {
						className: e,
						id: t,
						...n
					} = this.props, s = t || d.a.inputId;
					return a.a.createElement(o.b, u({}, n, {
						className: Object(r.a)(e, d.a.numberInput),
						id: s,
						inputRef: this.setInputRef,
						onChange: this.handleChangeEvent,
						type: "number"
					}), a.a.createElement("div", {
						className: d.a.buttonContainer
					}, a.a.createElement("button", {
						"aria-controls": s,
						className: d.a.chevronBtn,
						onClick: this.handleIncrement,
						onMouseDown: this.focusOnInput,
						tabIndex: -1
					}, a.a.createElement(l.a, {
						className: d.a.icon
					})), a.a.createElement("button", {
						"aria-controls": s,
						className: d.a.chevronBtn,
						onClick: this.handleDecrement,
						onMouseDown: this.focusOnInput,
						tabIndex: -1
					}, a.a.createElement(i.a, {
						className: d.a.icon
					}))))
				}
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				redditStyle: "_3kUvbpMbR21zJBboDdBH7D",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				l = n.n(i);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || o.d.XS;
				return a.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(l.a.toggleSwitch, e.className, {
						[l.a.xs]: n === o.d.XS,
						[l.a.s]: n === o.d.S,
						[l.a.m]: n === o.d.M,
						[l.a.l]: n === o.d.L,
						[l.a.xl]: n === o.d.XL,
						[l.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[l.a.mDisabled]: e.disabled,
						[l.a.redditStyle]: e.redditStyle
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle(),
					ref: t
				}, a.a.createElement("div", {
					className: l.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, a.a.createElement("g", {
				stroke: "none"
			}, a.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(o);
			const l = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/layout/row/Inline/index.m.less"),
				r = n.n(a);
			t.a = s.a.div("inlineRow", r.a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/2.3de82649f71f6910dc40.js.map