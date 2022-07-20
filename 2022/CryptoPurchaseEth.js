// https://www.redditstatic.com/desktop2x/CryptoPurchaseEth.b659651c5b3b4f830d9e.js
// Retrieved at 7/20/2022, 7:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CryptoPurchaseEth"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var a = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return a(e) + t
			}
		},
		"./src/reddit/components/Governance/Ftx/index.m.less": function(e, t, n) {
			e.exports = {
				amounts: "_11NC5tJargH3-te1XQGr22",
				breakdown: "rpDnLOdP7nx2Yu0FoKyNg",
				continue: "_2mpM-8hSde1kPF0usz6Tol",
				description: "_34AZpb8ezUJm33iAo44uNh",
				disclaimer: "_3sZMYXN49sYohEmAO1H8Xk",
				eth: "_1ZtEynPzihGn6fL-Idmc-G",
				input: "_2MVv6kAQq1cutFDnNWCQHr",
				lineItem: "_14NpGB2S8anXG1SbchhPl_",
				logo: "gDzTljDwGpPnLR0V3lyf_",
				total: "_1KMTHuKDJjp6ZCijSuejtC"
			}
		},
		"./src/reddit/components/Governance/Ftx/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var a = n("./node_modules/bignumber.js/bignumber.js"),
				s = n.n(a),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				l = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/governance/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/controls/FormFields/index.tsx"),
				m = n("./src/reddit/endpoints/governance/ftx.ts");
			const p = e => {
				const t = e.getBoundingClientRect();
				return {
					top: t.top + t.height / 2 - 350 - 100,
					left: t.left + t.width / 2 - 250
				}
			};
			var h = n("./src/reddit/hooks/useApiContext.ts"),
				x = n("./src/reddit/icons/svgs/EthCircle/index.tsx");
			var v = e => l.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					width: "60",
					height: "20",
					viewBox: "0 0 149.75 46.3"
				}, l.a.createElement("path", {
					fill: "#131111",
					fillOpacity: "1",
					fillRule: "nonzero",
					stroke: "none",
					d: "M5495.42 3841.6v-154h309.06v-153h-309.06v-240.1h-198.05v700.2h549.12v-153.1h-351.07M6133.52 3837.6h-215.05v157.1h627.13v-157.1h-214.04v-543.1h-198.04v543.1M7071.68 3294.5l-145.03 217.1-143.03-217.1h-226.05l255.06 354.1-244.05 346.1h223.04l140.04-202.1 138.02 202.1h214.05l-244.06-338.1 260.06-362.1h-228.05",
					transform: "matrix(.0416 0 0 -.04119 -153.95 175.75)"
				}), l.a.createElement("path", {
					fill: "#84d6d7",
					fillOpacity: "1",
					fillRule: "nonzero",
					stroke: "none",
					d: "M4067.87 3142.9h298.8v298.7h-298.8v-298.7",
					transform: "matrix(.0416 0 0 -.04119 -153.95 175.75)"
				}), l.a.createElement("path", {
					fill: "#33bbc7",
					fillOpacity: "1",
					fillRule: "nonzero",
					stroke: "none",
					d: "M4631.77 3854.5h-563.9v-298.8H4734.32v298.7h-102.55v.1",
					transform: "matrix(.0416 0 0 -.04119 -153.95 175.75)"
				}), l.a.createElement("path", {
					fill: "#11a9bc",
					fillOpacity: "1",
					fillRule: "nonzero",
					stroke: "none",
					d: "M4067.87 4267.1v-298.7h925.6v298.7h-925.6",
					transform: "matrix(.0416 0 0 -.04119 -153.95 175.75)"
				}), l.a.createElement("path", {
					fill: "#33bbc7",
					fillOpacity: "1",
					fillRule: "nonzero",
					stroke: "none",
					d: "M3700.27 3555.7h298.7v298.8h-298.7v-298.8",
					transform: "matrix(.0416 0 0 -.04119 -153.95 175.75)"
				})),
				f = n("./src/reddit/components/Governance/ModalFrame/index.tsx"),
				b = n("./src/reddit/components/Governance/Ftx/index.m.less"),
				E = n.n(b);
			const g = e => {
				let {
					className: t,
					subredditId: n,
					onPurchase: a,
					onBack: b
				} = e;
				const g = Object(h.a)(),
					C = Object(c.d)(),
					[w, N] = Object(o.useState)(new s.a("5")),
					[_, j] = Object(o.useState)(null),
					[O, k] = Object(o.useState)(""),
					[y, M] = Object(o.useState)(!1),
					{
						openWindow: I,
						isWindowOpen: T
					} = (e => {
						let {
							onWindowClose: t
						} = e;
						const n = Object(o.useRef)(null),
							[a, s] = Object(o.useReducer)(() => !0, !1);
						return Object(o.useEffect)(() => {
							let e;
							return a && (e = setInterval(() => {
								var a;
								(null === (a = n.current) || void 0 === a ? void 0 : a.closed) && (t(), clearInterval(e))
							}, 500)), () => {
								clearInterval(e)
							}
						}, [t, a]), {
							openWindow: e => {
								let {
									event: t,
									popupLink: a
								} = e;
								const {
									top: r,
									left: o
								} = p(t.currentTarget);
								n.current = window.open(a, "_blank", `width=500,height=700,left=${o},top=${r}`), s()
							},
							isWindowOpen: a
						}
					})({
						onWindowClose: () => {
							C(Object(i.h)({
								subredditId: n
							})), a()
						}
					});
				return Object(o.useEffect)(() => {
					_ || Object(m.a)(g(), n).then(e => {
						e.ok ? j(e.body) : M(!0)
					})
				}, [_, g, n, j]), Object(o.useEffect)(() => {
					k(""), Object(m.b)(g(), n, w).then(e => {
						e.ok && k(e.body)
					})
				}, [w, g, n, k]), l.a.createElement(f.a, {
					className: t,
					headerRight: l.a.createElement(v, {
						className: E.a.logo
					}),
					title: r.fbt._("Buy Ethereum for Network Fees", null, {
						hk: "3t78Fv"
					}),
					onBack: b
				}, l.a.createElement(u.c, {
					redditStyle: !0,
					className: E.a.input,
					label: r.fbt._("amount", null, {
						hk: "3rCgsf"
					}),
					type: "text",
					value: `$ ${w.toString()}`,
					onChange: () => {}
				}), l.a.createElement("div", {
					className: E.a.description
				}, r.fbt._("FTX's minimum required payment amount is $5.", null, {
					hk: "1Rcztk"
				}), l.a.createElement("br", null), r.fbt._("Enough for about 5-10 transactions.", null, {
					hk: "3fzGgS"
				})), l.a.createElement("div", {
					className: E.a.amounts
				}, l.a.createElement(d.a, {
					priority: d.c.Secondary,
					onClick: () => N(new s.a("5"))
				}, "$5"), l.a.createElement(d.a, {
					priority: d.c.Secondary,
					onClick: () => N(new s.a("10"))
				}, "$10"), l.a.createElement(d.a, {
					priority: d.c.Secondary,
					onClick: () => N(new s.a("25"))
				}, "$25")), l.a.createElement("div", {
					className: E.a.breakdown
				}, l.a.createElement("div", {
					className: E.a.lineItem
				}, _ ? l.a.createElement(l.a.Fragment, null, l.a.createElement(x.a, {
					className: E.a.eth
				}), w.minus(.25).dividedBy(_).decimalPlaces(4).toString(), r.fbt._("ETH", null, {
					hk: "1KPU7W"
				})) : y ? r.fbt._("Could not determine amount", null, {
					hk: "1Al7x6"
				}) : r.fbt._("calculating...", null, {
					hk: "1Hf6i4"
				})), l.a.createElement("div", null, "$", w.minus(new s.a(.25)).toString()), l.a.createElement("div", null, r.fbt._("FTX Fee", null, {
					hk: "PmjRX"
				})), l.a.createElement("div", null, "$0.25"), l.a.createElement("div", {
					className: E.a.total
				}, r.fbt._("Total", null, {
					hk: "3Uqz4c"
				})), l.a.createElement("div", {
					className: E.a.total
				}, "$", w.toFormat(2).toString())), l.a.createElement(d.a, {
					className: E.a.continue,
					disabled: !O || T,
					onClick: e => {
						I({
							event: e,
							popupLink: O
						})
					}
				}, r.fbt._("Buy", null, {
					hk: "1yKqul"
				})), l.a.createElement("div", {
					className: E.a.disclaimer
				}, r.fbt._("Reddit does not collect and store your personal identity information.", null, {
					hk: "2hJjwc"
				})))
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = n.n(i);
			t.a = Object(r.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(l.f)()), n && n()
					}
				}
			})((function(e) {
				return s.a.createElement(c.a, {
					className: Object(o.a)(d.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalFrame/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "_1RMgC_IsaX9SGzUjjbcGtj",
				container: "_2qX0yQN6WBIGErOoDNckNu",
				content: "_2UPXVFZgjdPRfntBixjPTw",
				header: "_2ioZ5yr0kYv0C_0Zduxz92",
				title: "pj4Qau60_BFcnyMJZEAf9"
			}
		},
		"./src/reddit/components/Governance/ModalFrame/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				l = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalFrame/index.m.less"),
				i = n.n(c);

			function d(e) {
				return s.a.createElement("div", {
					className: Object(r.a)(i.a.container, e.className)
				}, s.a.createElement("header", {
					className: i.a.header
				}, s.a.createElement("div", {
					className: i.a.title
				}, e.onBack ? s.a.createElement(o.a, {
					className: i.a.closeIcon,
					onClick: e.onBack
				}) : s.a.createElement(l.a, {
					className: i.a.closeIcon
				}), s.a.createElement("div", null, e.title)), s.a.createElement("div", null, e.headerRight)), s.a.createElement("div", {
					className: i.a.content
				}, e.children))
			}
		},
		"./src/reddit/components/Governance/PurchaseEthModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/components/Governance/Ftx/index.tsx");
			t.default = Object(o.a)((function() {
				const e = Object(r.d)(),
					t = Object(i.fb)(),
					n = null == t ? void 0 : t.urlParams.subredditName,
					a = Object(r.e)(e => Object(d.z)(e, {
						subredditName: n || ""
					}));
				return a ? s.a.createElement(u.a, {
					subredditId: a.id,
					onPurchase: () => e(Object(l.g)(c.a.CRYPTO_PURCHASE_ETH))
				}) : null
			}))
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
				return g
			})), n.d(t, "c", (function() {
				return C
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(s),
				o = n("./node_modules/raf/index.js"),
				l = n.n(o),
				c = n("./node_modules/react/index.js"),
				i = n.n(c),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = n.n(h);
			var v = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return i.a.createElement("div", {
						className: x.a.wrapper
					}, i.a.createElement(p.a, {
						className: x.a.titleRow
					}, n), i.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), i.a.createElement(p.a, {
						className: x.a.buttonRow
					}, i.a.createElement(m.l, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, a.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = n("./src/reddit/controls/ErrorText/index.m.less"),
				b = n.n(f);
			class E extends i.a.Component {
				constructor(e) {
					super(e), this.spanRef = i.a.createRef(), this.toggleModal = () => {
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
					l()(() => {
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
						errorModalTitle: s = a.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = a.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: l
					} = this.state;
					return i.a.createElement("div", {
						className: Object(d.a)(b.a.wrapper, t)
					}, i.a.createElement("span", {
						className: b.a.description,
						ref: this.spanRef
					}, e), o && i.a.createElement("span", {
						className: b.a.moreText,
						onClick: this.toggleModal
					}, r), l && i.a.createElement(v, {
						onConfirmed: this.toggleModal,
						title: s
					}, n || e))
				}
			}
			const g = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: a,
						fallbackMessage: s,
						messages: r = []
					} = e, o = r.length ? r : s ? [s] : [];
					return o.length ? i.a.createElement("div", {
						className: t
					}, o.map((e, t) => i.a.createElement(E, {
						className: n,
						errorModalTitle: a,
						key: t
					}, e))) : null
				},
				C = e => i.a.createElement(g, {
					fallbackMessage: a.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = E
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
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				i = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				x = e => {
					let {
						label: t,
						children: n,
						inputRef: a,
						className: o,
						isInvalid: l,
						...c
					} = e;
					const i = void 0 !== c.value && "" !== c.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: l
						}),
						onClick: h
					}, s.a.createElement(p, m({
						"aria-invalid": l,
						innerRef: a
					}, c)), t && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: i
						})
					}, t), n)
				},
				v = e => {
					let {
						label: t,
						children: n,
						inputRef: a,
						isInvalid: o,
						className: l,
						redditStyle: c,
						...i
					} = e;
					const d = void 0 !== i.value && "" !== i.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, l, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, s.a.createElement(p, m({
						innerRef: a
					}, i)), t && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, t), n)
				},
				f = e => s.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
					className: u.a.plus
				}));
			var b;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(b || (b = {}));
			class E extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: b.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: b.REMOVE,
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
						placeholder: a,
						errors: r = []
					} = this.props;
					return e.map((e, o) => s.a.createElement(x, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!r[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: a,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, s.a.createElement(i.b, {
						className: u.a.trash
					})), !!r[o] && s.a.createElement(l.b, {
						className: u.a.errorText
					}, r[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: a,
						addValueText: o,
						disabled: l
					} = this.props;
					this.focusedInput = null;
					const c = !(!!a && n.length >= a) && !l;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(f, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && s.a.createElement(f, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/endpoints/governance/ftx.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/bignumber.js/bignumber.js"),
				s = n.n(a),
				r = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, n) {
				const a = await Object(o.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/wallets/${t}/onramp/me?usdAmount=${n.toString()}&platform=web`
				});
				return a.ok ? {
					...a,
					body: a.body[0].params
				} : a
			}
			async function c(e, t) {
				const n = await Object(o.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/wallets/${t}/onramp/exchange-rates?usdAmount=5`
				});
				return n.ok ? {
					...n,
					body: new s.a(n.body[0].exchangeRate)
				} : n
			}
		},
		"./src/reddit/hooks/useApiContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./node_modules/react/index.js"),
				s = n("./src/reddit/contexts/ApiContext.tsx");

			function r() {
				const {
					apiContext: e
				} = Object(a.useContext)(s.a);
				return e
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/EthCircle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}

			function o(e) {
				return s.a.createElement("svg", r({}, e, {
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}), s.a.createElement("circle", {
					cx: "8",
					cy: "8",
					r: "8"
				}), s.a.createElement("path", {
					d: "M4.9039 7.33105L7.82947 2.57699C7.90757 2.45008 8.09204 2.45008 8.17014 2.57699L11.0957 7.33105C11.1533 7.42466 11.1246 7.54721 11.0314 7.60547L8.1058 9.43395C8.04095 9.47448 7.95866 9.47448 7.8938 9.43395L4.96823 7.60547C4.87502 7.54721 4.84629 7.42466 4.9039 7.33105Z",
					fill: "white"
				}), s.a.createElement("path", {
					d: "M4.85734 8.92901L7.84636 12.5158C7.92631 12.6118 8.07369 12.6118 8.15364 12.5158L11.1427 8.92901C11.2898 8.75247 11.0718 8.50778 10.8795 8.63363L8.10953 10.4467C8.043 10.4902 7.957 10.4902 7.89047 10.4467L5.12051 8.63363C4.92824 8.50778 4.71022 8.75247 4.85734 8.92901Z",
					fill: "white"
				}))
			}
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
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
				return c
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				l = n.n(o);
			const c = e => s.a.createElement("svg", {
				className: Object(r.a)(l.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoPurchaseEth.b659651c5b3b4f830d9e.js.map