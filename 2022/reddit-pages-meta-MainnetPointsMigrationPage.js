// https://www.redditstatic.com/desktop2x/reddit-pages-meta-MainnetPointsMigrationPage.0f0cfd8e9d8a90f7ba22.js
// Retrieved at 8/15/2022, 7:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-pages-meta-MainnetPointsMigrationPage"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var a = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return a(e) + t
			}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/community.ts"),
				r = n("./src/reddit/actions/governance/constants.ts");
			const i = Object(a.a)(r.a),
				o = e => {
					let {
						subredditId: t
					} = e;
					return async (e, n, a) => {
						let {
							apiContext: r
						} = a;
						const o = await Object(s.a)(r(), {
							subredditId: t
						});
						o.ok && e(i({
							subredditId: t,
							...o.body
						}))
					}
				}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/config.ts"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/selectors/crypto/points.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(i.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(c.b)(e, n)
				}
			});
			t.a = Object(r.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const a = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					r = `${o.a.assetPath}/${a}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return s.a.createElement("div", {
						className: Object(l.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: r
				})
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
				return x
			})), n.d(t, "c", (function() {
				return w
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
				b = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = n.n(b);
			var f = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return c.a.createElement("div", {
						className: h.a.wrapper
					}, c.a.createElement(p.a, {
						className: h.a.titleRow
					}, n), c.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), c.a.createElement(p.a, {
						className: h.a.buttonRow
					}, c.a.createElement(m.l, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, a.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = n("./src/reddit/controls/ErrorText/index.m.less"),
				v = n.n(g);
			class y extends c.a.Component {
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
						className: Object(d.a)(v.a.wrapper, t)
					}, c.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), i && c.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, r), o && c.a.createElement(f, {
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
					}, i.map((e, t) => c.a.createElement(y, {
						className: n,
						errorModalTitle: a,
						key: t
					}, e))) : null
				},
				w = e => c.a.createElement(x, {
					fallbackMessage: a.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = y
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
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return y
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
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				h = e => {
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
						onClick: b
					}, s.a.createElement(p, m({
						"aria-invalid": o,
						innerRef: a
					}, l)), t && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, t), n)
				},
				f = e => {
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
						onClick: b
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
			var v;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(v || (v = {}));
			class y extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: v.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: v.REMOVE,
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
					return e.map((e, i) => s.a.createElement(h, {
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
		"./src/reddit/endpoints/governance/community.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var a = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(r.a)(e, {
					endpoint: `${a.a.metaUrl}/communities/${t.subredditId}/me`,
					method: s.jb.GET
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
				return h
			})), n.d(t, "i", (function() {
				return f
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
					b = o.from(a).add(r),
					h = m,
					f = "0x" + [l(1)].concat([l(h), o.from(s).toHexString(), o.from(r).toHexString()].map(e => c(e, 32))).concat(l(p(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, a) {
					return d(e, Promise.resolve(u), "send", [t, n, a])
				}(e, t, b.toString(), f)
			}
			const b = {
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
			async function h(e, t, n) {
				await l();
				const s = i() || "";
				if (t.toLowerCase() !== s.toLowerCase()) throw new Error(a.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [a.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return d(e, Promise.resolve(b), "subscribe", [t, n])
			}

			function f(e) {
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
		"./src/reddit/icons/svgs/LoadingOrbit/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				fill: "none",
				height: "24",
				width: "24",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				clipRule: "evenodd",
				d: "M.55 15.6c.09.28.4.42.68.32.28-.1.42-.41.34-.7a10.92 10.92 0 0 1 15.47-12.9 2.22 2.22 0 1 0 .63-.9A12 12 0 0 0 .55 15.6zm22.9-7.2a.52.52 0 0 0-.68-.32.56.56 0 0 0-.34.7 10.92 10.92 0 0 1-15.47 12.9 2.22 2.22 0 1 0-.63.9A12 12 0 0 0 23.45 8.4zM12 16.9a4.89 4.89 0 1 0 0-9.78 4.89 4.89 0 0 0 0 9.78z",
				fill: "#006dc6",
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
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
		"./src/reddit/pages/meta/MainnetPointsMigrationPage/MigrationBridge.m.less": function(e, t, n) {
			e.exports = {
				loadingSpinner: "_9t24hCUzoLyh30mCyRxTs",
				spin: "_2Yp9BAcGk4seW0Sx2vjFA9",
				error: "_3xmVZ61rv8XrIOc7_UyAp_",
				table: "_1ZkPUT9f4ofA0q0D20cKv9",
				row: "_1xAVld9UR8hoAkggo351wr",
				column: "_1p0x_ZwBnDDsH981q7jrKW",
				firstColumn: "_3P5tdqpCNoZubVpW9zh3CU",
				header: "_3yzq91jL78vcvygEG08h_p",
				token: "_1dKHGDWWta8s_X017XpAhh",
				transferButton: "_25IEvGw3YSzfrdb7jVr-sh",
				pointsBalance: "o7Z6VZ5ZSg_RCKEX_KoYx",
				noValue: "_1ef-lEHMCQCqHKC3lYINMU"
			}
		},
		"./src/reddit/pages/meta/MainnetPointsMigrationPage/TransferModal.m.less": function(e, t, n) {
			e.exports = {
				modalWrapper: "_1CX0NG4fErBV3sL7YAWBZr",
				header: "_3LjMh__rCcgqsneQcglA5I",
				closeButton: "_2Xt0EKHesXFQqS3Wdd-Sze",
				icon: "_3lVDIb8NEKVedZnKvb7V6S",
				body: "_3QKqa7IKkBh7-MemYSZiCM",
				subheader: "_2AmxZWbfs8o3okhtKhHc6y",
				description: "_2W9ju3ULfeV4LoK5GD-nOF",
				listItem: "vShPWz7DhWu4mHDluF9Ha",
				pointSection: "_3hYiyYE8qCEk5-PaLZ0qzF",
				token: "gBAqtjx_QM1L5p4613-ca",
				point: "koxuI6z7lkVqRzQNaHiq4",
				input: "_3pQCHzhGVImzFNUB2Uznzh",
				message: "_1v7AtInhXL1RvE87dYMtDW",
				footer: "_28roSu7xgCZpyp3s-0qOkU"
			}
		},
		"./src/reddit/pages/meta/MainnetPointsMigrationPage/index.m.less": function(e, t, n) {
			e.exports = {
				spacedFlex: "e1ZuTmD6_keEzy1gLCkUJ",
				centeredFlex: "_32AnVti-ZRpBPNh06EAuiF",
				verticalFlex: "pW9sSpQI7M0i4GyPg0EVP",
				bridgeLogo: "jB6OlKsl7iXWZ7jbBtphM",
				container: "_1lBvK-u9yoNhp8hi6An2yh",
				description: "_1XwfCNxMcHvW9P2O1idBMm",
				footer: "_38rJZkkfUusnxnUoUJtNoo",
				header: "_23QfawjyRJj4L3V0mTutrH",
				content: "_16bqWjwU6sSVP4gnamoJZw",
				connectionStep: "_2a1uPwMqXU1VYKI88U0spi",
				connectionBar: "_2aJa37glIY1Su3I-VQbQpV",
				isCompleted: "_22tdspbZ4WObBr9DrhUFzJ",
				checkmark: "O3njieXBEb8IkZO26zdEY",
				isCurrentStep: "_1Bk9Fh1zigsJpAcCgTANoM",
				stepChild: "_2kT75dnREkn5jrjB6yOmCx",
				icon: "_2LGoyJRHrc__jyWgHkYTXq",
				loading: "_1wrEFBE8QXKKvcDtRko3-P",
				failed: "_252brEeFSzPZRgaCId5FjA",
				succeeded: "_2otdQ71OV1reuTO_hsxEsv"
			}
		},
		"./src/reddit/pages/meta/MainnetPointsMigrationPage/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "MainnetPointsMigrationPage", (function() {
				return Ce
			})), n.d(t, "default", (function() {
				return je
			}));
			var a = n("./src/config.ts"),
				s = n("./node_modules/ethers/lib.esm/index.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/governance/index.ts"),
				c = n("./src/reddit/actions/governance/communityDetails.ts"),
				d = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/endpoints/governance/crypto.ts")),
				u = n("./src/reddit/helpers/crypto/abis/communityPointsABI.ts"),
				m = [{
					inputs: [{
						internalType: "uint256",
						name: "serial",
						type: "uint256"
					}, {
						internalType: "contract ISubredditPoints",
						name: "destinationToken",
						type: "address"
					}, {
						internalType: "address",
						name: "spender",
						type: "address"
					}, {
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					}, {
						internalType: "bytes",
						name: "signature",
						type: "bytes"
					}],
					name: "claim",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function"
				}],
				p = [{
					inputs: [{
						internalType: "contract ISubredditPoints",
						name: "token",
						type: "address"
					}, {
						internalType: "address",
						name: "recipient",
						type: "address"
					}, {
						internalType: "uint256",
						name: "amount",
						type: "uint256"
					}],
					name: "bridgeTransfer",
					outputs: [],
					stateMutability: "nonpayable",
					type: "function"
				}],
				b = n("./src/reddit/helpers/governance/ethereum.ts");
			const h = "t5_3oeyf",
				f = "t5_2wlj3",
				g = "t5_2f1ola",
				v = [{
					name: "Gigapoints",
					testnetAddress: "0xb3f17f3142e37577df18464fb30a5ff85854ac5a",
					mainnetAddress: "0x4a033f47257f33ce02bef098df9f34cf1c806e3e",
					subredditId: g,
					subredditName: "gigapoints"
				}, {
					name: "Moons",
					testnetAddress: "0x138fafa28a05a38f4d2658b12b0971221a7d5728",
					mainnetAddress: "0x0057ac2d777797d31cd3f8f13bf5e927571d6ad0",
					subredditId: f,
					subredditName: "CryptoCurrency"
				}, {
					name: "Bricks",
					testnetAddress: "0x2c3eebc3ec8553dd014084a3c44a277418e63a0f",
					mainnetAddress: "0x6dcb98f460457fe4952e12779ba852f82ecc62c1",
					subredditId: h,
					subredditName: "FortNiteBR"
				}];
			async function y() {
				const e = new s.ethers.providers.Web3Provider(Object(b.c)()).getSigner(),
					t = v.map(t => (async function(e, t) {
						const n = new s.ethers.Contract(t.testnetAddress, u.a, e),
							a = await n.balanceOf(e.getAddress());
						if (a.isZero()) return null;
						return {
							...t,
							balance: a
						}
					})(e, t));
				return (await Promise.all(t)).filter(e => null !== e)
			}
			var x = n("./src/reddit/hooks/useLocalStorage.ts"),
				w = n("./src/reddit/selectors/experiments/mainnet.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				k = n("./node_modules/classnames/index.js"),
				_ = n.n(k),
				N = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				j = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/actions/toaster.ts"),
				M = (n("./src/reddit/helpers/localStorage/index.ts"), n("./src/reddit/models/Toast/index.ts"));
			const T = "mainnet-migration";

			function A(e) {
				let {
					locale: t,
					balance: n
				} = e;
				return Number(s.ethers.utils.formatEther(n).split(".")[0]).toLocaleString(t || "en-US")
			}
			const I = e => {
					let {
						dispatch: t,
						text: n
					} = e;
					return t(Object(O.f)({
						duration: O.a,
						kind: M.b.Error,
						text: n
					}))
				},
				S = async e => {
					let {
						network: t,
						dispatch: n
					} = e;
					const a = Object(b.c)();
					try {
						await a.request({
							method: "wallet_switchEthereumChain",
							params: [{
								chainId: s.ethers.utils.hexlify(Number(t))
							}]
						})
					} catch (r) {
						if (4902 === r.code) return void I({
							dispatch: n,
							text: N.fbt._("This network is not available in your Metamask, please add it", null, {
								hk: "3neHZm"
							})
						});
						I({
							dispatch: n,
							text: N.fbt._("Failed to switch to the network", null, {
								hk: "1vSDae"
							})
						})
					}
				};
			var P, B = n("./src/reddit/pages/meta/MainnetPointsMigrationPage/index.m.less"),
				L = n.n(B);
			! function(e) {
				e[e.Starting = 0] = "Starting", e[e.Wallet = 1] = "Wallet", e[e.TestNetwork = 2] = "TestNetwork", e[e.Bridge = 3] = "Bridge"
			}(P || (P = {}));
			const V = e => {
					const t = Object(o.d)(),
						{
							onConnect: n
						} = e,
						a = F(e);
					return Object(r.useEffect)(() => {
						a === P.TestNetwork && (async () => await S({
							network: "5391184",
							dispatch: t
						}))()
					}, [a, t]), i.a.createElement("div", {
						className: L.a.spacedFlex
					}, i.a.createElement(R, {
						step: P.Wallet,
						currentStep: a,
						withConnection: !0
					}, a === P.Wallet ? i.a.createElement(C.t, {
						onClick: b.b
					}, N.fbt._("Connect to Metamask", null, {
						hk: "2DzFph"
					})) : i.a.createElement("p", null, N.fbt._("Connect to Metamask", null, {
						hk: "3ASitB"
					}))), i.a.createElement(R, {
						step: P.TestNetwork,
						currentStep: a,
						withConnection: !0
					}, i.a.createElement("p", null, N.fbt._("Switch to {lineBreak} Reddit Test Network", [N.fbt._param("lineBreak", i.a.createElement("br", null))], {
						hk: "2ua2Ev"
					}))), i.a.createElement(R, {
						step: P.Bridge,
						currentStep: a,
						withConnection: !1
					}, a === P.Bridge ? i.a.createElement(C.t, {
						onClick: n
					}, N.fbt._("Connect to Bridge", null, {
						hk: "4oBHSw"
					})) : i.a.createElement("p", null, N.fbt._("Connect to Bridge", null, {
						hk: "zuSGe"
					}))))
				},
				F = e => {
					let {
						walletAddress: t,
						network: n
					} = e;
					return t ? "5391184" !== n ? P.TestNetwork : t && "5391184" === n ? P.Bridge : P.Starting : P.Wallet
				},
				R = e => {
					let {
						step: t,
						currentStep: n,
						withConnection: a,
						children: s
					} = e;
					const r = t < n,
						o = t === n;
					return i.a.createElement("div", {
						className: _()(L.a.connectionStep, {
							[L.a.isCompleted]: r,
							[L.a.isCurrentStep]: o
						})
					}, i.a.createElement("div", {
						className: L.a.checkmark
					}, r ? i.a.createElement(j.a, {
						className: L.a.icon,
						name: "checkmark_fill"
					}) : t), i.a.createElement("div", {
						className: L.a.stepChild
					}, s), a && i.a.createElement("div", {
						className: L.a.connectionBar
					}))
				};
			var W = n("./node_modules/bignumber.js/bignumber.js"),
				D = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				H = n("./src/reddit/components/Governance/Token/index.tsx"),
				z = n("./src/reddit/hooks/useLocale.ts"),
				U = n("./src/reddit/icons/svgs/LoadingOrbit/index.tsx"),
				Z = n("./src/higherOrderComponents/asModal/index.tsx"),
				q = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Y = n("./node_modules/@ethersproject/address/lib.esm/index.js"),
				X = n("./node_modules/lodash/debounce.js"),
				G = n.n(X),
				K = n("./src/lib/classNames/index.ts"),
				J = n("./src/reddit/constants/colors.ts"),
				Q = n("./src/reddit/controls/FormFields/index.tsx"),
				$ = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				ee = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				te = n("./src/reddit/pages/meta/MainnetPointsMigrationPage/TransferModal.m.less"),
				ne = n.n(te);
			const ae = /^0x[0-9a-fA-F]+$/;
			var se;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(se || (se = {}));
			const re = e => {
				let {
					className: t,
					onChange: n
				} = e;
				const [a, s] = Object(r.useState)(""), o = Object(r.useRef)(a), [l, c] = Object(r.useState)(se.Empty), d = l === se.Invalid, u = () => {
					if (ae.test(o.current)) {
						if (!!Object(Y.a)(o.current)) return c(se.Valid), void n(o.current, !0)
					}
					c(se.Invalid)
				}, m = Object(r.useMemo)(() => G()(u, 300), [o, n, u]);
				return i.a.createElement("div", {
					className: Object(K.a)(ne.a.container, t, {
						[ne.a.invalid]: d
					})
				}, i.a.createElement(Q.c, {
					redditStyle: !0,
					className: ne.a.input,
					label: N.fbt._("To Wallet Address", null, {
						hk: "3HUlRg"
					}),
					max: 42,
					type: "text",
					value: a,
					onChange: e => {
						const t = e.currentTarget.value.trim();
						o.current = t, s(t), n(o.current, !1), m()
					}
				}), function(e) {
					switch (e) {
						case se.Invalid:
							return i.a.createElement(ee.a, {
								className: ne.a.icon,
								style: {
									fill: J.a.warning
								}
							});
						case se.Valid:
							return i.a.createElement($.a, {
								className: ne.a.icon
							});
						default:
							return null
					}
				}(l), d && i.a.createElement("div", {
					className: ne.a.message
				}, N.fbt._("Invalid wallet address", null, {
					hk: "2P3hNT"
				})))
			};

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), le = [oe._("Approve a transfer to our Bridge.", null, {
				hk: "3iNArL"
			}), oe._("Send your Arbitrum Rinkeby Testnet balance to our Bridge.", null, {
				hk: "2eAVhe"
			}), oe._("Wait up to 5 minutes for the transaction to process.", null, {
				hk: "223RL5"
			}), oe._("Connect your Metamask wallet to Arbitrum Nova Mainnet.", null, {
				hk: "hoaeX"
			}), oe._("Claim your points from our Bridge.", null, {
				hk: "39wkrJ"
			}), oe._("Transfer the points into your wallet.", null, {
				hk: "vZ3gk"
			})], ce = Object(Z.a)(e => {
				let {
					amount: t,
					subredditId: n,
					onTransfer: a,
					onClose: s
				} = e;
				const [o, l] = Object(r.useState)(""), [c, d] = Object(r.useState)(!1);
				return i.a.createElement("div", {
					className: ne.a.modalWrapper
				}, i.a.createElement("div", {
					className: ne.a.header
				}, i.a.createElement("button", {
					onClick: s,
					className: ne.a.closeButton,
					"aria-label": oe._("Close", null, {
						hk: "3fyGPG"
					})
				}, i.a.createElement(q.b, {
					className: ne.a.closeIcon
				})), i.a.createElement("h2", null, oe._("Transfer to Mainnet", null, {
					hk: "4riDgo"
				}))), i.a.createElement("div", {
					className: ne.a.body
				}, i.a.createElement("h3", {
					className: ne.a.subheader
				}, oe._("How does it work?", null, {
					hk: "1Cczb"
				})), i.a.createElement("div", {
					className: ne.a.description
				}, oe._("Transfer from Reddit Testnet to Arbitrum Nova Mainnet works in 6 steps.", null, {
					hk: "hWNdE"
				}), i.a.createElement("ol", null, le.map((e, t) => i.a.createElement("li", {
					key: t,
					className: ne.a.listItem
				}, e)))), i.a.createElement("div", {
					className: ne.a.pointSection
				}, i.a.createElement("span", {
					className: ne.a.point
				}, i.a.createElement(H.a, {
					className: ne.a.token,
					subredditId: n
				}), t)), i.a.createElement(re, {
					className: ne.a.input,
					onChange: (e, t) => {
						l(e), d(t)
					}
				}), i.a.createElement("span", {
					className: ne.a.footer
				}, oe._("Use the same wallet address to speed up claim process.", null, {
					hk: "H4lrx"
				})), i.a.createElement(C.t, {
					onClick: () => {
						a(o), s()
					},
					disabled: !c || !o,
					isFullWidth: !0
				}, oe._("Transfer to Mainnet (via Bridge)", null, {
					hk: "zXbFn"
				}))))
			}), de = e => i.a.createElement(ce, ie({
				withOverlay: !0,
				onOverlayClick: e.onClose
			}, e));
			var ue = n("./src/lib/constants/index.ts"),
				me = n("./src/reddit/endpoints/governance/requester.ts");
			var pe = n("./src/reddit/hooks/useApiContext.ts");
			const be = e => {
				let {
					migrations: t,
					setMigrations: n,
					locale: r
				} = e;
				const i = Object(pe.a)(),
					l = Object(o.d)(),
					c = new s.ethers.providers.Web3Provider(Object(b.c)()).getSigner(),
					h = e => {
						let {
							updates: a,
							token: s
						} = e;
						var r, i, o, l, c, d;
						if (t) {
							const e = [...t],
								u = e.findIndex(e => {
									let {
										mainnetAddress: t
									} = e;
									return t === s
								});
							if ((null === (r = null == a ? void 0 : a.transferStatus) || void 0 === r ? void 0 : r.claimId) === (null === (o = null === (i = t[u]) || void 0 === i ? void 0 : i.transferStatus) || void 0 === o ? void 0 : o.claimId) && !1 === (null === (l = null == a ? void 0 : a.transferStatus) || void 0 === l ? void 0 : l.claimed) && !0 === (null === (d = null === (c = t[u]) || void 0 === c ? void 0 : c.transferStatus) || void 0 === d ? void 0 : d.claimed)) return;
							e[u] = {
								...e[u],
								...a
							}, n(e)
						}
					};
				return {
					transferOut: async e => {
						let {
							destinationAddress: t,
							testnetAddress: n,
							amount: a
						} = e;
						return await (async e => {
							let {
								signer: t,
								destinationAddress: n,
								testnetAddress: a,
								amount: r
							} = e;
							const i = new s.ethers.Contract(a, u.a, t),
								o = new s.ethers.Contract("0xc160b5929c91131a9379e978b0b53b4370a322ee", p, t),
								l = {
									gasLimit: 21e3
								};
							await i.approve("0xc160b5929c91131a9379e978b0b53b4370a322ee", r, l), await o.bridgeTransfer(a, n, r, l)
						})({
							signer: c,
							destinationAddress: t,
							testnetAddress: n,
							amount: a
						})
					},
					checkMigrationStatus: async e => {
						let {
							destinationAddress: t
						} = e;
						return await
						function(e, t, n) {
							return Object(me.a)(e, {
								method: ue.jb.GET,
								endpoint: `${a.a.metaUrl}/migrationbridge/${t}/${n}`
							})
						}(i(), "42170", t).then(e => {
							if (e.ok) {
								const t = e.body.reduce((e, t) => {
									const n = e[t.token];
									return (!n || !0 === n.claimed && !1 === t.claimed || !0 === n.claimed && !0 === t.claimed && t.claimId > n.claimId) && (e[t.token] = t), e
								}, {});
								Object.values(t).forEach(e => {
									h({
										updates: {
											transferStatus: e
										},
										token: e.token
									})
								})
							}
						})
					},
					claimTransfer: async e => {
						let {
							status: t
						} = e;
						const {
							claimed: n,
							token: a
						} = t;
						n || (await (async e => {
							let {
								signer: t,
								status: n
							} = e;
							const {
								amount: a,
								claim: r,
								claimId: i,
								recipient: o,
								token: l
							} = n, c = new s.ethers.Contract("0x32965430f14558ffce75a4412a1b18af7cd6941f", m, t), d = new s.ethers.Contract(l, u.a, t);
							await c.claim(i, l, o, a, r), await d.transferFrom("0x32965430f14558ffce75a4412a1b18af7cd6941f", o, a)
						})({
							signer: c,
							status: t
						}), h({
							updates: {
								transferStatus: {
									...t,
									claimed: !0
								}
							},
							token: a
						}))
					},
					getMainnetBalance: async e => {
						let {
							mainnetAddress: t,
							recipient: n
						} = e;
						const a = await (async e => {
								let {
									mainnetAddress: t,
									recipient: n
								} = e;
								const a = new s.ethers.providers.JsonRpcProvider(Object(d.i)(d.a.ArbitrumNova)),
									r = new s.ethers.Contract(t, u.a, a);
								return await r.balanceOf(n)
							})({
								mainnetAddress: t,
								recipient: n
							}),
							i = s.ethers.BigNumber.from(a);
						return h({
							updates: {
								mainnetBalance: new W.BigNumber(a)
							},
							token: t
						}), A({
							locale: r,
							balance: i
						})
					},
					updateMigrationState: h,
					switchToTestnet: async () => await S({
						network: "5391184",
						dispatch: l
					}),
					switchToMainnet: async () => {
						await S({
							network: "42170",
							dispatch: l
						})
					}
				}
			};
			var he = n("./src/reddit/pages/meta/MainnetPointsMigrationPage/MigrationBridge.m.less"),
				fe = n.n(he);
			const {
				fbt: ge
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ve = e => {
				let {
					migration: t,
					migrations: n,
					network: a,
					setMigrations: l
				} = e;
				const c = Object(o.d)(),
					d = Object(z.a)(),
					[u, m] = Object(r.useState)(!1),
					[p, b] = Object(r.useState)("0"),
					[h, f] = Object(r.useReducer)(() => !0, !1),
					[g, v] = Object(r.useState)(!1),
					[y, x] = Object(r.useState)(null),
					{
						balance: w,
						mainnetAddress: E,
						subredditId: k,
						subredditName: _,
						testnetAddress: N,
						transferStatus: C,
						mainnetBalance: j
					} = t,
					O = (null == C ? void 0 : C.claimId) && !(null == C ? void 0 : C.claimed),
					M = (null == C ? void 0 : C.amount) && s.ethers.BigNumber.from(w).lte(null == C ? void 0 : C.amount),
					T = Boolean(y),
					S = g || y && !1 !== (null == C ? void 0 : C.claimed),
					P = A({
						locale: d,
						balance: w
					}),
					B = j ? A({
						locale: d,
						balance: j
					}) : null,
					{
						transferOut: L,
						claimTransfer: V,
						getMainnetBalance: F,
						checkMigrationStatus: R,
						updateMigrationState: W,
						switchToTestnet: D,
						switchToMainnet: Z
					} = be({
						migrations: n,
						setMigrations: l,
						locale: d
					});
				Object(r.useEffect)(() => {
					C && R({
						destinationAddress: C.recipient
					})
				}, []), Object(r.useEffect)(() => {
					let e;
					return y && !1 !== (null == C ? void 0 : C.claimed) && (e = setInterval(async () => {
						await R({
							destinationAddress: y
						}), (!1 === (null == C ? void 0 : C.claimed) || g) && clearInterval(e)
					}, 1e3)), () => clearInterval(e)
				}, [y, C, R, g]), Object(r.useEffect)(() => {
					let e;
					return g && C && (e = setInterval(async () => {
						const t = await F({
							mainnetAddress: E,
							recipient: C.recipient
						}); + t > +p && (b(t), v(!1), x(""), clearInterval(e))
					}, 1e3)), () => window.clearInterval(e)
				}, [F, E, p, g, C]);
				return i.a.createElement("div", {
					className: fe.a.row,
					key: k
				}, i.a.createElement("div", {
					className: fe.a.firstColumn
				}, "r/", _), i.a.createElement("div", {
					className: fe.a.column
				}, i.a.createElement(xe, {
					handleTransferClick: () => m(!0),
					isHidden: "0" === P || M,
					network: a,
					switchToTestnet: D,
					isTransferring: h
				}), i.a.createElement(H.a, {
					className: fe.a.token,
					subredditId: k
				}), i.a.createElement(ye, {
					value: y || M ? "0" : P
				})), i.a.createElement("div", {
					className: fe.a.column
				}, i.a.createElement(we, {
					isClaiming: g,
					network: a,
					isHidden: !O,
					handleClaimTransfer: async () => {
						var e, t;
						try {
							await V({
								status: C
							}), v(!0)
						} catch (n) {
							const a = 3 === (null === (e = null == n ? void 0 : n.data) || void 0 === e ? void 0 : e.code);
							a && (v(!1), W({
								updates: {
									transferStatus: null
								}
							}), F({
								mainnetAddress: null == C ? void 0 : C.token,
								recipient: null == C ? void 0 : C.recipient
							})), I({
								dispatch: c,
								text: a ? ge._("Error: Already claimed", null, {
									hk: "1fRm27"
								}) : (null === (t = null == n ? void 0 : n.data) || void 0 === t ? void 0 : t.message) || n.message
							})
						}
					},
					switchToMainnet: Z
				}), i.a.createElement(H.a, {
					className: fe.a.token,
					subredditId: k
				}), i.a.createElement(ye, {
					isPending: T,
					value: T ? A({
						locale: d,
						balance: w
					}) : B || p
				}), S && i.a.createElement(U.a, {
					className: fe.a.loadingSpinner
				})), u && i.a.createElement(de, {
					amount: P,
					subredditId: k,
					onClose: () => m(!1),
					onTransfer: async e => {
						f(), await L({
							testnetAddress: N,
							mainnetAddress: E,
							destinationAddress: e,
							amount: w
						}), x(e), b(A({
							locale: d,
							balance: w
						}))
					}
				}))
			}, ye = e => {
				let {
					value: t,
					isPending: n
				} = e;
				return i.a.createElement("p", {
					className: _()(fe.a.pointsBalance, {
						[fe.a.noValue]: +t <= 0 || n
					})
				}, t)
			}, xe = e => {
				let {
					network: t,
					isHidden: n,
					switchToTestnet: a,
					handleTransferClick: s,
					isTransferring: r
				} = e;
				return n ? null : "5391184" !== t ? i.a.createElement(C.a, {
					className: fe.a.transferButton,
					priority: C.c.Secondary,
					onClick: a
				}, ge._("Connect", null, {
					hk: "3U59XL"
				})) : i.a.createElement(C.a, {
					disabled: r,
					className: fe.a.transferButton,
					priority: C.c.Secondary,
					onClick: s
				}, ge._("Transfer", null, {
					hk: "5ICxq"
				}))
			}, we = e => {
				let {
					network: t,
					isHidden: n,
					handleClaimTransfer: a,
					switchToMainnet: s,
					isClaiming: o
				} = e;
				const [l, c] = Object(r.useReducer)(() => !0, !1);
				return n ? null : "42170" !== t ? i.a.createElement(C.a, {
					className: fe.a.transferButton,
					priority: C.c.Secondary,
					onClick: s
				}, ge._("Connect", null, {
					hk: "3U59XL"
				})) : i.a.createElement(C.a, {
					disabled: o || l,
					className: fe.a.transferButton,
					priority: C.c.Primary,
					onClick: () => {
						c(), a()
					}
				}, ge._("Claim", null, {
					hk: "47MFix"
				}))
			}, {
				fbt: Ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ke = e => {
				let {
					walletAddress: t,
					network: n,
					migrations: a,
					setMigrations: s
				} = e;
				return Object(r.useEffect)(() => {
					y().then(e => {
						a ? e.forEach(e => {
							if (!e.balance) return;
							const t = [...a],
								n = t.findIndex(t => {
									let {
										mainnetAddress: n
									} = t;
									return n === e.mainnetAddress
								}),
								r = t[n].balance;
							r && new W.BigNumber(e.balance).isGreaterThanOrEqualTo(r) || (t[n] = {
								...t[n],
								balance: e.balance
							}, s(t))
						}) : s(e)
					})
				}, []), a ? a.length ? i.a.createElement("div", {
					className: fe.a.table
				}, i.a.createElement("div", {
					className: fe.a.header
				}, i.a.createElement("p", {
					className: fe.a.firstColumn
				}, Ee._("Your Community Points", null, {
					hk: "1EiZYW"
				})), i.a.createElement("p", {
					className: fe.a.column
				}, Ee._("Rinkeby Test Network", null, {
					hk: "2vAmjA"
				})), i.a.createElement("p", {
					className: fe.a.column
				}, Ee._("Arbitrum Nova Mainnet", null, {
					hk: "2GmGaq"
				}))), a.map(e => i.a.createElement(ve, {
					key: e.name,
					migration: e,
					migrations: a,
					setMigrations: s,
					network: n
				}))) : i.a.createElement(_e, {
					walletAddress: t
				}) : i.a.createElement(D.a, {
					className: fe.a.loadingSpinner,
					sizePx: 14
				})
			}, _e = e => {
				let {
					walletAddress: t
				} = e;
				return i.a.createElement("div", null, i.a.createElement("p", {
					className: fe.a.error
				}, i.a.createElement("b", null, Ee._("No Points to migrate", null, {
					hk: "4xNSjt"
				}))), i.a.createElement("p", null, Ee._("Hmmm... I can't find any unmigrated points for your connected address:", null, {
					hk: "3XrFRZ"
				}), " ", i.a.createElement("b", null, t), "."), i.a.createElement("ul", null, i.a.createElement("li", null, Ee._("If your Points were already in your Vault, they have already been migrated.", null, {
					hk: "3fFavJ"
				})), i.a.createElement("li", null, Ee._("If your Points were in a different wallet, make sure you send them to this address to migrate them. Or connect that wallet with this wallet software/extension.", null, {
					hk: "3SFyoA"
				})), i.a.createElement("li", null, Ee._("If you sent your Points to your Vault instead of this address, you will need to import your Vault into this wallet software (e.g. MetaMask). You can do this by using the 12-word phrase available in Vault Settings.", null, {
					hk: "KP4aA"
				}))))
			}, {
				fbt: Ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ce = () => {
				const e = Object(o.d)(),
					t = Object(b.c)(),
					n = Object(o.e)(w.a),
					d = Object(o.e)(E.Q),
					[u, m] = Object(r.useState)(Object(b.d)()),
					[p, v] = Object(r.useState)(Object(b.e)()),
					[y, k] = Object(r.useReducer)(() => !0, !1),
					[_, N] = Object(x.a)(T, null),
					[C, j] = Object(x.a)("mainnet-migration-signer", "");
				Object(r.useEffect)(() => {
					(async () => {
						const e = Object(b.d)();
						e && e !== C && (N(null), j(e))
					})()
				}, []), Object(r.useEffect)(() => {
					d && (e(Object(l.h)({
						subredditId: h
					})), e(Object(l.h)({
						subredditId: f
					})));
					const t = window.setInterval(() => {
						m(Object(b.d)());
						const e = Object(b.e)();
						v(s.ethers.BigNumber.from(e).toNumber().toString())
					}, 500);
					return () => window.clearInterval(t)
				}, [e, m, v, d]), Object(r.useEffect)(() => {
					[g, f, h].forEach(t => {
						e(Object(c.a)({
							subredditId: t
						}))
					})
				}, []);
				let O = null;
				return n ? O = i.a.createElement("p", null, i.a.createElement("b", null, Ne._("Bridge is currently unavailable.", null, {
					hk: "1IAbL8"
				}))) : (d || (O = i.a.createElement("p", null, i.a.createElement("b", null, Ne._("Please log in to continue.", null, {
					hk: "3zILpv"
				})))), u || t || (O = i.a.createElement("p", null, i.a.createElement("b", null, Ne._("Please install {=MetaMask} or an equivalent wallet.", [Ne._param("=MetaMask", i.a.createElement("a", {
					href: "https://metamask.io/"
				}, Ne._("MetaMask", null, {
					hk: "32IN7N"
				})))], {
					hk: "OvkQK"
				})))), y || (O = i.a.createElement(V, {
					walletAddress: u,
					network: p,
					onConnect: k
				})), y && u && p && (O = i.a.createElement(ke, {
					walletAddress: u,
					network: p,
					migrations: _,
					setMigrations: N
				}))), i.a.createElement("div", {
					className: L.a.container
				}, i.a.createElement("h1", {
					className: L.a.header
				}, i.a.createElement("img", {
					alt: Ne._("Community Points Bridge", null, {
						hk: "1vd0MS"
					}),
					className: L.a.bridgeLogo,
					src: `${a.a.assetPath}/img/communityPoints/migration_bridge.png`
				}), Ne._("Community Points Bridge", null, {
					hk: "3p57GN"
				})), i.a.createElement("p", {
					className: L.a.description
				}, Ne._("If you moved your Moons or Bricks out of your Vault, you will need to migrate them using this tool in order to get them onto our new system. This tool will help walk you through the necessary steps. NOTE: Most users will not need to use this tool.", null, {
					hk: "2cW0jd"
				})), i.a.createElement("div", {
					className: L.a.content
				}, O), !y && i.a.createElement("p", {
					className: L.a.footer
				}, Ne._("This migration tool is designed to work with Chrome + MetaMask. If your Points are in a different wallet, we suggest moving them into MetaMask first. You should be able to use any web3-enabled wallet, but it is untested. Not all wallets will work with our Arbitrum chain. It must be a wallet where you can add a custom network with RPC url and a different chain id.", null, {
					hk: "25krYi"
				})))
			};

			function je() {
				return i.a.createElement(Ce, null)
			}
		},
		"./src/reddit/selectors/experiments/mainnet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var a = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: a.te
					}) === a.Jd
				},
				i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: a.qe
					}) === a.Jd
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-meta-MainnetPointsMigrationPage.0f0cfd8e9d8a90f7ba22.js.map