// https://www.redditstatic.com/desktop2x/CryptoPurchaseEth.9ca9400f5f7ad998c78c.js
// Retrieved at 5/19/2022, 5:40:05 PM by Reddit Dataminer v1.0.0
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
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = n.n(l);
			t.a = Object(r.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(i.f)()), n && n()
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
				i = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalFrame/index.m.less"),
				l = n.n(c);

			function d(e) {
				return s.a.createElement("div", {
					className: Object(r.a)(l.a.container, e.className)
				}, s.a.createElement("header", {
					className: l.a.header
				}, s.a.createElement("div", {
					className: l.a.title
				}, e.onBack ? s.a.createElement(o.a, {
					className: l.a.closeIcon,
					onClick: e.onBack
				}) : s.a.createElement(i.a, {
					className: l.a.closeIcon
				}), s.a.createElement("div", null, e.title)), s.a.createElement("div", null, e.headerRight)), s.a.createElement("div", {
					className: l.a.content
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
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/components/Governance/TransferPointsModal/MoonPay/index.tsx");
			t.default = Object(o.a)((function() {
				const e = Object(r.d)(),
					t = Object(l.fb)(),
					n = null == t ? void 0 : t.urlParams.subredditName,
					a = Object(r.e)(e => Object(d.z)(e, {
						subredditName: n || ""
					}));
				return a ? s.a.createElement(u.a, {
					subredditId: a.id,
					onPurchase: () => e(Object(i.g)(c.a.CRYPTO_PURCHASE_ETH))
				}) : null
			}))
		},
		"./src/reddit/components/Governance/TransferPointsModal/MoonPay/index.m.less": function(e, t, n) {
			e.exports = {
				amounts: "_39IyOi54HaCaONFUbWiBdi",
				breakdown: "_3EnZO6u6WCo7x7UV_Z1N_d",
				continue: "_3-_sbRm6wz9GJiuVbMKPul",
				description: "_10rX3RUEkRHon8CZ9FFNhz",
				disclaimer: "_pL33iAHRMPNmUP_0dB7J",
				eth: "_1z6hEAsiukBUIi_tfsq_ic",
				input: "_107KG41q-kptEfJh5papwe",
				lineItem: "_3CXYV2ZJxeK3_DFvLi375",
				moonPayLogo: "_2eUAyqk3M4VTdpCznuhLM4",
				total: "_2WrPQboRmL-w3oM0XOofnJ"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/MoonPay/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var a = n("./node_modules/bignumber.js/bignumber.js"),
				s = n.n(a),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/config.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.tsx"),
				u = n("./src/reddit/endpoints/governance/moonpay.ts");
			const m = (e, t) => {
				const n = e.getBoundingClientRect(),
					a = n.top + n.height / 2 - 350 - 100,
					s = n.left + n.width / 2 - 250;
				window.open(t, "_blank", `width=500,height=700,left=${s},top=${a}`)
			};
			var p = n("./src/reddit/hooks/useApiContext.ts"),
				h = n("./src/reddit/icons/svgs/EthCircle/index.tsx"),
				x = n("./src/reddit/components/Governance/ModalFrame/index.tsx"),
				v = n("./src/reddit/components/Governance/TransferPointsModal/MoonPay/index.m.less"),
				b = n.n(v);

			function f(e) {
				const t = Object(p.a)(),
					[n, a] = Object(o.useState)(new s.a("5")),
					[v, f] = Object(o.useState)(null),
					[E, g] = Object(o.useState)(""),
					[_, C] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					v || Object(u.a)(t(), e.subredditId).then(e => {
						e.ok ? f(e.body) : C(!0)
					})
				}, [v, t, e.subredditId, f]), Object(o.useEffect)(() => {
					g(""), Object(u.b)(t(), e.subredditId, n).then(e => {
						e.ok && g(e.body)
					})
				}, [n, t, e.subredditId, g]), i.a.createElement(x.a, {
					className: e.className,
					headerRight: i.a.createElement("img", {
						className: b.a.moonPayLogo,
						src: `${c.a.assetPath}/img/communityPoints/moonpay-logo.png`
					}),
					title: r.fbt._("Buy Ethereum for Network Fees", null, {
						hk: "3t78Fv"
					}),
					onBack: e.onBack
				}, i.a.createElement(d.c, {
					redditStyle: !0,
					className: b.a.input,
					label: r.fbt._("amount", null, {
						hk: "3rCgsf"
					}),
					type: "text",
					value: `$ ${n.toString()}`,
					onChange: () => {}
				}), i.a.createElement("div", {
					className: b.a.description
				}, r.fbt._("MoonPay's minimum required payment amount is $5. {linebreak} Enough for about 5-10 transactions.", [r.fbt._param("linebreak", i.a.createElement("br", null))], {
					hk: "31Jqpm"
				})), i.a.createElement("div", {
					className: b.a.amounts
				}, i.a.createElement(l.a, {
					priority: l.c.Secondary,
					onClick: () => a(new s.a("5"))
				}, "$5"), i.a.createElement(l.a, {
					priority: l.c.Secondary,
					onClick: () => a(new s.a("10"))
				}, "$10"), i.a.createElement(l.a, {
					priority: l.c.Secondary,
					onClick: () => a(new s.a("25"))
				}, "$25")), i.a.createElement("div", {
					className: b.a.breakdown
				}, i.a.createElement("div", {
					className: b.a.lineItem
				}, v ? i.a.createElement(i.a.Fragment, null, i.a.createElement(h.a, {
					className: b.a.eth
				}), n.minus(.25).dividedBy(v).decimalPlaces(4).toString(), r.fbt._("ETH", null, {
					hk: "1KPU7W"
				})) : _ ? r.fbt._("Could not determine amount", null, {
					hk: "1Al7x6"
				}) : r.fbt._("calculating...", null, {
					hk: "1Hf6i4"
				})), i.a.createElement("div", null, "$", n.minus(new s.a(.25)).toString()), i.a.createElement("div", null, r.fbt._("MoonPay Fee", null, {
					hk: "1QbArf"
				})), i.a.createElement("div", null, "$0.25"), i.a.createElement("div", {
					className: b.a.total
				}, r.fbt._("Total", null, {
					hk: "3Uqz4c"
				})), i.a.createElement("div", {
					className: b.a.total
				}, "$", n.toFormat(2).toString())), i.a.createElement(l.a, {
					className: b.a.continue,
					disabled: !E,
					onClick: t => {
						var n;
						m(t.currentTarget, E), null === (n = e.onPurchase) || void 0 === n || n.call(e)
					}
				}, r.fbt._("Buy", null, {
					hk: "1yKqul"
				})), i.a.createElement("div", {
					className: b.a.disclaimer
				}, r.fbt._("Reddit does not collect and store your personal identity information.", null, {
					hk: "2hJjwc"
				})))
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
				return g
			})), n.d(t, "c", (function() {
				return _
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(s),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
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
					return l.a.createElement("div", {
						className: x.a.wrapper
					}, l.a.createElement(p.a, {
						className: x.a.titleRow
					}, n), l.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), l.a.createElement(p.a, {
						className: x.a.buttonRow
					}, l.a.createElement(m.l, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, a.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				b = n("./src/reddit/controls/ErrorText/index.m.less"),
				f = n.n(b);
			class E extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
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
						errorModalTitle: s = a.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = a.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: i
					} = this.state;
					return l.a.createElement("div", {
						className: Object(d.a)(f.a.wrapper, t)
					}, l.a.createElement("span", {
						className: f.a.description,
						ref: this.spanRef
					}, e), o && l.a.createElement("span", {
						className: f.a.moreText,
						onClick: this.toggleModal
					}, r), i && l.a.createElement(v, {
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
					return o.length ? l.a.createElement("div", {
						className: t
					}, o.map((e, t) => l.a.createElement(E, {
						className: n,
						errorModalTitle: a,
						key: t
					}, e))) : null
				},
				_ = e => l.a.createElement(g, {
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
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
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
						isInvalid: i,
						...c
					} = e;
					const l = void 0 !== c.value && "" !== c.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: i
						}),
						onClick: h
					}, s.a.createElement(p, m({
						"aria-invalid": i,
						innerRef: a
					}, c)), t && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, t), n)
				},
				v = e => {
					let {
						label: t,
						children: n,
						inputRef: a,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...l
					} = e;
					const d = void 0 !== l.value && "" !== l.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, s.a.createElement(p, m({
						innerRef: a
					}, l)), t && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, t), n)
				},
				b = e => s.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
					className: u.a.plus
				}));
			var f;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(f || (f = {}));
			class E extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: f.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: f.REMOVE,
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
					}, s.a.createElement(l.b, {
						className: u.a.trash
					})), !!r[o] && s.a.createElement(i.b, {
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
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!a && n.length >= a) && !i;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(b, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && s.a.createElement(b, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/endpoints/governance/moonpay.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/bignumber.js/bignumber.js"),
				s = n.n(a),
				r = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, n) {
				const a = await Object(o.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/wallets/${t}/onramp/me?usdAmount=${n.toString()}`
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
				i = n.n(o);
			const c = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoPurchaseEth.9ca9400f5f7ad998c78c.js.map