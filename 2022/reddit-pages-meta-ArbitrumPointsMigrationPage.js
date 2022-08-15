// https://www.redditstatic.com/desktop2x/reddit-pages-meta-ArbitrumPointsMigrationPage.418d8473d048a7299ccf.js
// Retrieved at 8/15/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-pages-meta-ArbitrumPointsMigrationPage"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var a = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return a(e) + t
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
				return x
			})), n.d(t, "c", (function() {
				return E
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(s),
				i = n("./node_modules/raf/index.js"),
				o = n.n(i),
				l = n("./node_modules/react/index.js"),
				c = n.n(l),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = n.n(y);
			var h = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return c.a.createElement("div", {
						className: b.a.wrapper
					}, c.a.createElement(p.a, {
						className: b.a.titleRow
					}, n), c.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), c.a.createElement(p.a, {
						className: b.a.buttonRow
					}, c.a.createElement(m.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, a.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = n("./src/reddit/controls/ErrorText/index.m.less"),
				f = n.n(g);
			class w extends c.a.Component {
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
					o()(() => {
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
						textHasOverflowed: i,
						isModalOpen: o
					} = this.state;
					return c.a.createElement("div", {
						className: Object(d.a)(f.a.wrapper, t)
					}, c.a.createElement("span", {
						className: f.a.description,
						ref: this.spanRef
					}, e), i && c.a.createElement("span", {
						className: f.a.moreText,
						onClick: this.toggleModal
					}, r), o && c.a.createElement(h, {
						onConfirmed: this.toggleModal,
						title: s
					}, n || e))
				}
			}
			const x = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: a,
						fallbackMessage: s,
						messages: r = []
					} = e, i = r.length ? r : s ? [s] : [];
					return i.length ? c.a.createElement("div", {
						className: t
					}, i.map((e, t) => c.a.createElement(w, {
						className: n,
						errorModalTitle: a,
						key: t
					}, e))) : null
				},
				E = e => c.a.createElement(x, {
					fallbackMessage: a.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = w
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
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/ErrorText/index.tsx"),
				l = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				c = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
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
			const p = i.a.input("input", u.a),
				y = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					let {
						label: t,
						children: n,
						inputRef: a,
						className: i,
						isInvalid: o,
						...l
					} = e;
					const c = void 0 !== l.value && "" !== l.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, i, {
							[u.a.mIsInvalid]: o
						}),
						onClick: y
					}, s.a.createElement(p, m({
						"aria-invalid": o,
						innerRef: a
					}, l)), t && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, t), n)
				},
				h = e => {
					let {
						label: t,
						children: n,
						inputRef: a,
						isInvalid: i,
						className: o,
						redditStyle: l,
						...c
					} = e;
					const d = void 0 !== c.value && "" !== c.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, o, {
							[u.a.mIsInvalid]: i,
							[u.a.mIsRedditStyle]: l
						}),
						onClick: y
					}, s.a.createElement(p, m({
						innerRef: a
					}, c)), t && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, t), n)
				},
				g = e => s.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(l.a, {
					className: u.a.plus
				}));
			var f;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(f || (f = {}));
			class w extends s.a.Component {
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
					return e.map((e, i) => s.a.createElement(b, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!r[i],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, i),
						placeholder: a,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, s.a.createElement(c.b, {
						className: u.a.trash
					})), !!r[i] && s.a.createElement(o.b, {
						className: u.a.errorText
					}, r[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: a,
						addValueText: i,
						disabled: o
					} = this.props;
					this.focusedInput = null;
					const l = !(!!a && n.length >= a) && !o;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && l && s.a.createElement(g, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && l && s.a.createElement(g, {
						onClick: this.addValue,
						text: i
					}))
				}
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = n.n(i);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: a = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(o.a.loadingIcon, n, {
						[o.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${a}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/crypto/abis/communityPointsABI.ts": function(e, t, n) {
			"use strict";
			t.a = [{
				constant: !0,
				inputs: [{
					internalType: "address",
					name: "account",
					type: "address"
				}],
				name: "balanceOf",
				outputs: [{
					internalType: "uint256",
					name: "",
					type: "uint256"
				}],
				payable: !1,
				stateMutability: "view",
				type: "function"
			}, {
				constant: !1,
				inputs: [{
					internalType: "uint256",
					name: "amount",
					type: "uint256"
				}, {
					internalType: "bytes",
					name: "userData",
					type: "bytes"
				}],
				name: "burn",
				outputs: [],
				payable: !1,
				stateMutability: "nonpayable",
				type: "function"
			}, {
				constant: !1,
				inputs: [{
					internalType: "address",
					name: "recipient",
					type: "address"
				}, {
					internalType: "uint256",
					name: "amount",
					type: "uint256"
				}],
				name: "transfer",
				outputs: [{
					internalType: "bool",
					name: "",
					type: "bool"
				}],
				payable: !1,
				stateMutability: "nonpayable",
				type: "function"
			}, {
				constant: !0,
				inputs: [],
				name: "getHubAddr",
				outputs: [{
					internalType: "address",
					name: "",
					type: "address"
				}],
				payable: !1,
				stateMutability: "view",
				type: "function"
			}, {
				inputs: [{
					internalType: "address",
					name: "spender",
					type: "address"
				}, {
					internalType: "uint256",
					name: "amount",
					type: "uint256"
				}],
				name: "approve",
				outputs: [{
					internalType: "bool",
					name: "",
					type: "bool"
				}],
				stateMutability: "nonpayable",
				type: "function"
			}, {
				inputs: [{
					internalType: "address",
					name: "from",
					type: "address"
				}, {
					internalType: "address",
					name: "to",
					type: "address"
				}, {
					internalType: "uint256",
					name: "amount",
					type: "uint256"
				}],
				name: "transferFrom",
				outputs: [{
					internalType: "bool",
					name: "",
					type: "bool"
				}],
				stateMutability: "nonpayable",
				type: "function"
			}]
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "j", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js");

			function s() {
				return window.ethereum
			}

			function r() {
				const e = s();
				return !(!e || !e.isMetaMask)
			}

			function i() {
				const e = s();
				return e && e.selectedAddress || null
			}

			function o() {
				const e = s();
				return (null == e ? void 0 : e.networkVersion) || null
			}

			function l() {
				const e = s();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return i() ? Promise.resolve() : e.enable()
			}
			const c = 4001;
			async function d(e, t, a, r) {
				const [i, o] = await Promise.all([n.e(0).then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers), t.then(e => e.abi)]);
				await l();
				const c = new i.providers.Web3Provider(s()).getSigner(),
					d = new i.Contract(e, o, c),
					u = await d[a](...r);
				return await u.wait()
			}
			const u = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "to",
						type: "address"
					}, {
						name: "value",
						type: "uint256"
					}, {
						name: "data",
						type: "bytes"
					}],
					name: "send",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			const m = 1;
			async function p(e, t, a, s, r) {
				const i = await n.e(0).then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers),
					{
						BigNumber: o
					} = i,
					{
						hexlify: l,
						hexZeroPad: c,
						toUtf8Bytes: p
					} = i.utils,
					y = o.from(a).add(r),
					b = m,
					h = "0x" + [l(1)].concat([l(b), o.from(s).toHexString(), o.from(r).toHexString()].map(e => c(e, 32))).concat(l(p(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, a) {
					return d(e, Promise.resolve(u), "send", [t, n, a])
				}(e, t, y.toString(), h)
			}
			const y = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "_subscriber",
						type: "address"
					}, {
						name: "_units",
						type: "uint16"
					}],
					name: "subscribe",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			async function b(e, t, n) {
				await l();
				const s = i() || "";
				if (t.toLowerCase() !== s.toLowerCase()) throw new Error(a.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [a.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return d(e, Promise.resolve(y), "subscribe", [t, n])
			}

			function h(e) {
				const t = s();
				return new Promise((n, s) => {
					const r = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, r],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) s(e);
						else {
							const e = t && t.result;
							e ? n(e) : s({
								message: a.fbt._("No signature returned from ethereum provider.", null, {
									hk: "eiYBF"
								}).toString()
							})
						}
					})
				})
			}

			function g(e) {
				return new Promise((t, n) => {
					s().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, a) => {
						e || "error" in a ? n("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/icons/svgs/CheckmarkFitted/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "3 4 14 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, s.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
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
				return l
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				o = n.n(i);
			const l = e => s.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1qKwjdihVjHUENiDeGX6f2",
				header: "_3P41jR4wUxIbf1_zvjvBiU",
				loadingSpinner: "_2YzOwCLKgSLn9H5vHk-GOP",
				error: "_3sjHJ7DTInKxeTxxrCBuH_",
				loading: "_2uhBgFO07oG75CuKor7wvL",
				failed: "_2rLDd3Y2RkgIFBKUSeeabE",
				succeeded: "_3cqL7tfkRZsE5c19TXUkTp"
			}
		},
		"./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "ArbitrumPointsMigrationPage", (function() {
				return q
			})), n.d(t, "default", (function() {
				return Y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js"),
				s = n("./node_modules/ethers/lib.esm/index.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/governance/index.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/endpoints/governance/crypto.ts"),
				p = [{
					anonymous: !1,
					inputs: [{
						indexed: !0,
						internalType: "bytes32",
						name: "ticketId",
						type: "bytes32"
					}],
					name: "Redeemed",
					type: "event"
				}, {
					anonymous: !1,
					inputs: [{
						indexed: !0,
						internalType: "bytes32",
						name: "ticketId",
						type: "bytes32"
					}],
					name: "TicketCreated",
					type: "event"
				}, {
					inputs: [{
						internalType: "bytes32",
						name: "ticketId",
						type: "bytes32"
					}],
					name: "getTimeout",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "view",
					type: "function"
				}, {
					inputs: [{
						internalType: "bytes32",
						name: "txId",
						type: "bytes32"
					}],
					name: "redeem",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function"
				}],
				y = n("./src/reddit/helpers/crypto/abis/communityPointsABI.ts"),
				b = [{
					inputs: [],
					name: "inbox",
					outputs: [{
						internalType: "address",
						name: "",
						type: "address"
					}],
					stateMutability: "view",
					type: "function"
				}, {
					inputs: [{
						internalType: "address",
						name: "_token",
						type: "address"
					}, {
						internalType: "address",
						name: "_to",
						type: "address"
					}, {
						internalType: "uint256",
						name: "_amount",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "_maxGas",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "_gasPriceBid",
						type: "uint256"
					}, {
						internalType: "bytes",
						name: "_data",
						type: "bytes"
					}],
					name: "outboundTransfer",
					outputs: [{
						internalType: "bytes",
						name: "",
						type: "bytes"
					}],
					stateMutability: "payable",
					type: "function"
				}],
				h = n("./node_modules/@ethersproject/bytes/lib.esm/index.js"),
				g = n("./node_modules/@ethersproject/keccak256/lib.esm/index.js"),
				f = n("./node_modules/@ethersproject/contracts/lib.esm/index.js"),
				w = [{
					anonymous: !1,
					inputs: [{
						indexed: !0,
						internalType: "uint256",
						name: "messageNum",
						type: "uint256"
					}, {
						indexed: !1,
						internalType: "bytes",
						name: "data",
						type: "bytes"
					}],
					name: "InboxMessageDelivered",
					type: "event"
				}, {
					anonymous: !1,
					inputs: [{
						indexed: !0,
						internalType: "uint256",
						name: "messageNum",
						type: "uint256"
					}],
					name: "InboxMessageDeliveredFromOrigin",
					type: "event"
				}, {
					anonymous: !1,
					inputs: [{
						indexed: !1,
						internalType: "address",
						name: "newSource",
						type: "address"
					}],
					name: "WhitelistSourceUpdated",
					type: "event"
				}, {
					inputs: [],
					name: "bridge",
					outputs: [{
						internalType: "contract IBridge",
						name: "",
						type: "address"
					}],
					stateMutability: "view",
					type: "function"
				}, {
					inputs: [{
						internalType: "address",
						name: "destAddr",
						type: "address"
					}, {
						internalType: "uint256",
						name: "l2CallValue",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "maxSubmissionCost",
						type: "uint256"
					}, {
						internalType: "address",
						name: "excessFeeRefundAddress",
						type: "address"
					}, {
						internalType: "address",
						name: "callValueRefundAddress",
						type: "address"
					}, {
						internalType: "uint256",
						name: "maxGas",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "gasPriceBid",
						type: "uint256"
					}, {
						internalType: "bytes",
						name: "data",
						type: "bytes"
					}],
					name: "createRetryableTicket",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "payable",
					type: "function"
				}, {
					inputs: [{
						internalType: "uint256",
						name: "maxSubmissionCost",
						type: "uint256"
					}],
					name: "depositEth",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "payable",
					type: "function"
				}, {
					inputs: [{
						internalType: "contract IBridge",
						name: "_bridge",
						type: "address"
					}, {
						internalType: "address",
						name: "_whitelist",
						type: "address"
					}],
					name: "initialize",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function"
				}, {
					inputs: [],
					name: "isMaster",
					outputs: [{
						internalType: "bool",
						name: "",
						type: "bool"
					}],
					stateMutability: "view",
					type: "function"
				}, {
					inputs: [{
						internalType: "uint256",
						name: "maxGas",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "gasPriceBid",
						type: "uint256"
					}, {
						internalType: "address",
						name: "destAddr",
						type: "address"
					}, {
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					}, {
						internalType: "bytes",
						name: "data",
						type: "bytes"
					}],
					name: "sendContractTransaction",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "nonpayable",
					type: "function"
				}, {
					inputs: [{
						internalType: "uint256",
						name: "maxGas",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "gasPriceBid",
						type: "uint256"
					}, {
						internalType: "address",
						name: "destAddr",
						type: "address"
					}, {
						internalType: "bytes",
						name: "data",
						type: "bytes"
					}],
					name: "sendL1FundedContractTransaction",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "payable",
					type: "function"
				}, {
					inputs: [{
						internalType: "uint256",
						name: "maxGas",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "gasPriceBid",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "nonce",
						type: "uint256"
					}, {
						internalType: "address",
						name: "destAddr",
						type: "address"
					}, {
						internalType: "bytes",
						name: "data",
						type: "bytes"
					}],
					name: "sendL1FundedUnsignedTransaction",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "payable",
					type: "function"
				}, {
					inputs: [{
						internalType: "bytes",
						name: "messageData",
						type: "bytes"
					}],
					name: "sendL2Message",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "nonpayable",
					type: "function"
				}, {
					inputs: [{
						internalType: "bytes",
						name: "messageData",
						type: "bytes"
					}],
					name: "sendL2MessageFromOrigin",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "nonpayable",
					type: "function"
				}, {
					inputs: [{
						internalType: "uint256",
						name: "maxGas",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "gasPriceBid",
						type: "uint256"
					}, {
						internalType: "uint256",
						name: "nonce",
						type: "uint256"
					}, {
						internalType: "address",
						name: "destAddr",
						type: "address"
					}, {
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					}, {
						internalType: "bytes",
						name: "data",
						type: "bytes"
					}],
					name: "sendUnsignedTransaction",
					outputs: [{
						internalType: "uint256",
						name: "",
						type: "uint256"
					}],
					stateMutability: "nonpayable",
					type: "function"
				}, {
					inputs: [{
						internalType: "address",
						name: "newSource",
						type: "address"
					}],
					name: "updateWhitelistSource",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function"
				}, {
					inputs: [],
					name: "whitelist",
					outputs: [{
						internalType: "address",
						name: "",
						type: "address"
					}],
					stateMutability: "view",
					type: "function"
				}];
			async function x(e, t) {
				return async function(e, t, n) {
					const s = await async function(e, t) {
						const n = a.a.from((await t.getNetwork()).chainId);
						return Object(g.a)(Object(h.b)([Object(h.p)(n.toHexString(), 32), Object(h.p)((s = e, s.or(a.a.from(1).shl(255))).toHexString(), 32)]));
						var s
					}(e, t);
					return Object(g.a)(Object(h.b)([Object(h.p)(s, 32), Object(h.p)(a.a.from(n).toHexString(), 32)]))
				}(e, t, 0)
			}
			var E = n("./src/reddit/helpers/governance/ethereum.ts");
			const v = "0xce01Bcd1931Eb9e19a19d2d00287FAbD733D705A",
				T = "0x000000000000000000000000000000000000006E",
				C = 9e5,
				k = [{
					name: "Gigapoints",
					l1ContractAddress: "0x94C4b0d6100de593d1D287C2b3a4Aab9aB7A039e",
					l2ContractAddress: "0xb3F17F3142E37577Df18464fb30a5Ff85854Ac5A"
				}, {
					name: "Test Bricks",
					l1ContractAddress: "0xABd77bE7998Ba88A4C232716be75e6cD6F36Ca8f",
					l2ContractAddress: "0x49B0392F4F8E56066509ba60acb83fe7389ec73d"
				}, {
					name: "Test Moons",
					l1ContractAddress: "0x52E72eD41A894b49511E885e084191ad7414eB6f",
					l2ContractAddress: "0xeae79885EEeb85d6cbc8D6aF6C65ec40b2b0e38a"
				}, {
					name: "Bricks",
					l1ContractAddress: "0xE0d8D7b8273De14e628d2F2A4a10f719F898450A",
					l2ContractAddress: "0x2C3eEbC3Ec8553dD014084a3C44a277418e63a0F"
				}, {
					name: "Moons",
					l1ContractAddress: "0xDF82c9014F127243CE1305DFE54151647d74B27A",
					l2ContractAddress: "0x138fAFa28a05A38f4d2658b12b0971221A7d5728"
				}];
			async function M() {
				const e = new s.ethers.providers.Web3Provider(Object(E.c)()).getSigner(),
					t = k.map(t => (async function(e, t) {
						const n = new s.ethers.Contract(t.l1ContractAddress, y.a, e),
							a = await n.balanceOf(e.getAddress());
						if (a.isZero()) return null;
						return {
							...t,
							balance: a
						}
					})(e, t));
				return (await Promise.all(t)).filter(e => null !== e)
			}
			async function j(e, t, n, r) {
				const i = new s.ethers.Contract(v, b, e),
					o = await i.inbox();
				console.log(`L1GatewayRouter: ${i.address}, inbox: ${o}`);
				const l = s.ethers.utils.defaultAbiCoder.encode(["uint256", "bytes"], [0, "0x"]),
					c = await i.outboundTransfer(n, t, r, 1e6, 0, l);
				console.log("Got transaction hash:", c.hash);
				const d = await c.wait();
				console.log("Receipt:", d);
				const u = await async function(e, t, n) {
					const s = new f.b(t, w, n).interface,
						r = s.getEvent("InboxMessageDelivered"),
						i = s.getEvent("InboxMessageDeliveredFromOrigin"),
						o = s.getEventTopic(r),
						l = s.getEventTopic(i),
						c = e.logs.filter(e => e.topics[0] === o || e.topics[0] === l);
					if (0 !== c.length) return c.map(e => a.a.from(e.topics[1]))
				}(d, o, e);
				if (!u) throw new Error("No L2 transaction were found in L1 tx: " + d.transactionHashTxHash);
				return console.log("seqnumbs", u), u
			}
			async function O(e, t, n, a) {
				const r = await t.getBlockNumber();
				for (console.log("block number", r); Date.now() < a;) {
					const t = new s.ethers.Contract(T, p, n),
						a = await t.getTimeout(e);
					if (a.gt(0)) {
						console.log(`Redeeming ticket ${e} with timeout ${a}`);
						const n = await t.redeem(e);
						console.log("tx", n);
						const s = await n.wait();
						return void console.log(`Ticket ${e} is redeemed @ ${n.hash}. Status: ${s.status}`)
					}
					console.log("Not found. Checking if ticket is already redeemed...");
					const o = t.filters.Redeemed(e);
					try {
						const n = await t.queryFilter(o);
						if (n.length > 0) return void console.log(`Ticket ${e} is already redeemed. Found event Redeemed(${n[0].args} @ tx ${n[0].transactionHash})`)
					} catch (i) {
						console.error(i)
					}
					console.log(`Waiting for ticket ${e}...`), await new Promise(e => setTimeout(e, 1e4)), console.log("Checking if ticket was created...");
					const l = t.filters.TicketCreated(e);
					try {
						const e = await t.queryFilter(l, r);
						e.length > 0 && console.log(`Found event TicketCreated(${e[0].args})`)
					} catch (i) {
						console.error(i)
					}
				}
				throw new Error(`Timed out while trying to find redeemable ticket ${e}.`)
			}
			async function A(e, t) {
				const n = new s.ethers.providers.JsonRpcProvider(Object(m.i)(m.a.ArbitrumRinkeby)),
					a = new s.ethers.Contract(e, y.a, n);
				return await a.balanceOf(t)
			}
			var N = n("./src/reddit/helpers/localStorage/index.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/icons/svgs/CheckmarkFitted/index.tsx"),
				P = n("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				I = n("./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.m.less"),
				L = n.n(I);
			const F = () => i.a.createElement(u.a, {
					className: L.a.loading
				}),
				B = () => i.a.createElement(S.a, {
					className: L.a.succeeded
				}),
				D = () => i.a.createElement(P.a, {
					className: L.a.failed
				}),
				R = "5391184";

			function H(e) {
				let {
					destinationAddress: t,
					migration: n,
					network: a,
					saveMigrationState: o
				} = e;
				const [l, c] = Object(r.useState)(""), [d, u] = Object(r.useState)(!!n.seqNums), [p, y] = Object(r.useState)(void 0), [b, h] = Object(r.useState)(!1), [g, f] = Object(r.useState)(null), w = [i.a.createElement("p", {
					key: "migrating"
				}, i.a.createElement("b", null, "Migrating ", s.ethers.utils.formatEther(n.balance), " ", n.name, " ", "to ", t, "...")), i.a.createElement("p", {
					key: "warning"
				}, "This will take many minutes. DO NOT CLOSE THIS WINDOW.")];
				if (Object(r.useEffect)(() => {
						!async function() {
							try {
								const e = new s.ethers.providers.Web3Provider(Object(E.c)()).getSigner();
								if (d) {
									if (a === R) {
										const a = await async function(e, t) {
											const n = new s.ethers.providers.JsonRpcProvider(Object(m.i)(m.a.ArbitrumRinkeby));
											let a = null;
											for (const s of t) a = await x(s, n), console.log(`Looking for ticket ${a} corresponding to SEQ ${s}`), await O(a, n, e, Date.now() + C);
											return console.log("All tickets redeemed!"), a
										}(e, n.seqNums);
										y(a), h(!0), o(), f(await A(n.l2ContractAddress, t))
									}
								} else {
									if ("4" !== a) throw new Error("Wallet must be set to Rinkeby Test Network");
									n.seqNums = await j(e, t, n.l1ContractAddress, n.balance), n.originalL2Balance = await A(n.l2ContractAddress, t), o(n), u(!0)
								}
							} catch (e) {
								throw console.error("Got error while running migration: ", e), c(e.message || e), e
							}
						}()
					}, [a]), d && w.push(i.a.createElement("p", {
						key: "l1-success"
					}, i.a.createElement(B, null), " L1-to-L2 transfer transaction completed.")), b && w.push(i.a.createElement("p", {
						key: "l2-success"
					}, i.a.createElement(B, null), " L2 tickets successfully redeemed.")), g) {
					const e = n.originalL2Balance || 0;
					g.gt(e) && w.push(i.a.createElement("p", {
						key: "balance"
					}, i.a.createElement(B, null), " L2 balance of ", n.name, " went from", " ", s.ethers.utils.formatEther(e), " to", " ", s.ethers.utils.formatEther(g), ".")), w.push(i.a.createElement("p", {
						key: "balance"
					}, i.a.createElement(B, null), " Migration complete", p ? i.a.createElement("span", null, " ", "at", " ", i.a.createElement("a", {
						href: `https://testnet.redditspace.com/tx/${p}/token-transfers`,
						target: "_blank",
						rel: "noopener noreferrer"
					}, p)) : null, "! It may take several minutes for the transaction to settle."))
				}
				return l ? w.push(i.a.createElement("p", {
					key: "error"
				}, i.a.createElement(D, null), " Encountered an error: ", l.toString())) : d ? b ? g || w.push(i.a.createElement("p", {
					key: "l2-pending"
				}, i.a.createElement(F, null), " Loading L2 balance...")) : a !== R ? (w.push(i.a.createElement("p", {
					key: "change-network"
				}, i.a.createElement(F, null), " ", i.a.createElement("b", null, "Great! Now you'll need to switch networks to the Arbitrum chain."), " ", "Here are the instructions for MetaMask specifically:")), w.push(i.a.createElement("ol", {
					key: "instructions"
				}, i.a.createElement("li", null, "Tap Rinkeby Test Network to change networks"), i.a.createElement("li", null, 'Select "Custom RPC"'), i.a.createElement("li", null, 'For Network Name, enter: "Reddit Testnet"'), i.a.createElement("li", null, "For New RPC URL, enter: https://testnet.redditspace.com/rpc"), i.a.createElement("li", null, "For Chain ID, enter: 5391184"), i.a.createElement("li", null, "Hit Save")))) : w.push(i.a.createElement("p", {
					key: "l2-pending"
				}, i.a.createElement(F, null), " Redeeming L2 tickets... After ~10 minutes, you will be prompted to sign a new redemption transaction. You may need to update the gas limit in MetaMask to 21000, even though there is no gas required.")) : w.push(i.a.createElement("p", {
					key: "l1-pending"
				}, i.a.createElement(F, null), " Sending L1-to-L2 transfer transaction...")), i.a.createElement(i.a.Fragment, null, w)
			}
			const V = "arb-migration-l1";

			function W(e) {
				e ? Object(N.Eb)(V, e) : window.localStorage && window.localStorage.removeItem(V)
			}

			function q() {
				const e = Object(o.d)(),
					t = Object(E.c)(),
					n = Object(o.e)(_.Q),
					[u, m] = Object(r.useState)(Object(E.d)()),
					[p, y] = Object(r.useState)(Object(E.e)()),
					[b, h] = Object(r.useState)(function() {
						var e, t;
						const n = Object(N.A)(V);
						return n && (n.balance = a.a.from(n.balance), n.seqNums = null === (e = n.seqNums) || void 0 === e ? void 0 : e.map(e => a.a.from(e)), n.originalL2Balance = null !== (t = n.originalL2Balance) && void 0 !== t ? t : a.a.from(n.originalL2Balance)), n
					}()),
					[g, f] = Object(r.useState)((null == b ? void 0 : b.destinationAddress) || ""),
					[w, x] = Object(r.useState)(""),
					v = Object(o.e)(e => e.user.wallets),
					T = [...new Set(Object.values(v).map(e => e.latest.publicAddress).filter(e => !!e))];

				function C(e) {
					try {
						(e = s.ethers.utils.getAddress(e)) && "0x0000000000000000000000000000000000000000" !== e ? (b.destinationAddress = e, f(e)) : alert("Invalid address!")
					} catch {
						alert("Invalid address!")
					}
				}
				Object(r.useEffect)(() => {
					n && (e(Object(l.h)({
						subredditId: "t5_3oeyf"
					})), e(Object(l.h)({
						subredditId: "t5_2wlj3"
					})));
					const t = window.setInterval(() => {
						m(Object(E.d)()), y(Object(E.e)())
					}, 500);
					return () => window.clearInterval(t)
				}, [e, m, y, n]);
				let k = null;
				return k = n ? u ? b || "4" === p ? b ? g ? i.a.createElement(H, {
					destinationAddress: g,
					migration: b,
					network: p,
					saveMigrationState: W
				}) : i.a.createElement(i.a.Fragment, null, i.a.createElement("p", null, i.a.createElement("b", null, "Please select a destination wallet address for the ", b.name, ":")), T.map(e => i.a.createElement("p", {
					key: e
				}, i.a.createElement(c.l, {
					onClick: () => C(e)
				}, "Your Vault (", e, ")"))), i.a.createElement("p", null, i.a.createElement(d.c, {
					label: "Destination wallet address",
					type: "text",
					value: w,
					onChange: e => x(e.target.value),
					style: {
						width: "380px"
					}
				}), i.a.createElement(c.l, {
					onClick: () => C(w),
					style: {
						display: "inline-block"
					}
				}, "Custom"))) : i.a.createElement(U, {
					setMigration: h,
					walletAddress: u
				}) : i.a.createElement("p", null, i.a.createElement("b", null, "Please select the Rinkeby Test Network in your wallet and reload this page.")) : i.a.createElement(i.a.Fragment, null, i.a.createElement("p", null, "This migration tool is designed to work with Chrome + MetaMask. If your Points are in a different wallet, we suggest moving them into MetaMask first. You should be able to use any web3-enabled wallet, but it is untested. Not all wallets will work with our Arbitrum chain. It must be a wallet where you can add a custom network with RPC url and a different chain id."), i.a.createElement("p", null, t ? i.a.createElement(c.l, {
					onClick: E.b
				}, "Connect to wallet") : i.a.createElement("b", null, "Please install ", i.a.createElement("a", {
					href: "https://metamask.io/"
				}, "MetaMask"), " or an equivalent wallet."))) : i.a.createElement("p", null, i.a.createElement("b", null, "Please log in to contiue.")), i.a.createElement("div", {
					className: L.a.container
				}, i.a.createElement("h1", {
					className: L.a.header
				}, "Let's get those Points moved over"), i.a.createElement("p", null, "If you moved your Moons or Bricks out of your Vault, you will need to migrate them using this tool in order to get them onto our new system. This tool will help walk you through the necessary steps."), k)
			}

			function U(e) {
				let {
					setMigration: t,
					walletAddress: n
				} = e;
				const [a, o] = Object(r.useState)(null);
				return Object(r.useEffect)(() => {
					M().then(e => {
						o(e)
					})
				}, []), a ? a.length ? i.a.createElement(i.a.Fragment, null, i.a.createElement("p", null, i.a.createElement("b", null, "Please choose one to migrate:")), a.map(e => i.a.createElement("p", {
					key: e.name
				}, i.a.createElement(c.l, {
					onClick: () => t(e)
				}, s.ethers.utils.formatEther(e.balance), " ", e.name)))) : i.a.createElement(i.a.Fragment, null, i.a.createElement("p", {
					className: L.a.error
				}, i.a.createElement("b", null, "No Points to migrate")), i.a.createElement("p", null, "Hmmm... I can't find any unmigrated points for your connected address: ", i.a.createElement("b", null, n), "."), i.a.createElement("ul", null, i.a.createElement("li", null, "If your Points were already in your Vault, they have already been migrated."), i.a.createElement("li", null, "If your Points were in a different wallet, make sure you send them to this address to migrate them. Or connect that wallet with this wallet software/extension."), i.a.createElement("li", null, "If you sent your Points to your Vault instead of this address, you will need to import your Vault into this wallet software (e.g. MetaMask). You can do this by using the 12-word phrase available in Vault Settings."))) : i.a.createElement("p", null, i.a.createElement("b", null, "Loading Points balances...", " ", i.a.createElement(u.a, {
					className: L.a.loadingSpinner,
					sizePx: 14
				})))
			}

			function Y() {
				return i.a.createElement(q, null)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-meta-ArbitrumPointsMigrationPage.418d8473d048a7299ccf.js.map