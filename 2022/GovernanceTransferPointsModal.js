// https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.b382d5721a5ea5816ad9.js
// Retrieved at 5/16/2022, 4:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceTransferPointsModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var a = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return a(e) + t
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";

			function a(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			n.d(t, "a", (function() {
				return a
			}))
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/wallet.ts"),
				r = n("./src/reddit/actions/governance/constants.ts");
			const o = Object(a.a)(r.m),
				i = Object(a.a)(r.n),
				c = Object(a.a)(r.l);
			t.a = e => async (t, n, a) => {
				let {
					apiContext: r
				} = a;
				t(o({
					subredditId: e.subredditId
				}));
				const l = await Object(s.b)(r(), e);
				l.ok ? t(i({
					subredditId: e.subredditId,
					...l.body
				})) : t(c({
					error: l.error
				}))
			}
		},
		"./src/reddit/components/Governance/EthSymbol/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/config.ts");

			function o(e) {
				const t = `${r.a.assetPath}/img/communityPoints/ethsymbol.png`;
				return s.a.createElement("img", {
					className: e.className,
					src: t
				})
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
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = n.n(i);

			function l(e) {
				return s.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className, {
						[c.a.coloredContainer]: e.colored
					})
				}, s.a.createElement("div", {
					className: c.a.title
				}, e.children), s.a.createElement(o.a, {
					className: c.a.closeIcon
				}))
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
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/crypto/points.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(o.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(l.b)(e, n)
				}
			});
			t.a = Object(r.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const a = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					r = `${i.a.assetPath}/${a}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return s.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
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
		"./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(a.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-TransferTransactionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-TransferTransactionModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/Governance/TransferPointsModal/Balances/index.m.less": function(e, t, n) {
			e.exports = {
				amount: "rwrfkJQptroE9cJtK7rj8",
				button: "_3m4rtUhAeB5ApWwekh5dQB",
				open: "_3NZuj_XThx2KvjhpmieoIP",
				grid: "vhU6FFvI_NaPT2Fr5lOh0",
				chevron: "_1qXQqed1wRJGTuiZxmI6FC",
				container: "iQCPe-GBEFInAV3CbSKXc",
				label: "_1DPWDfueYnegwgwQJoz1ZC",
				token: "_3ZMehXRD2FjgTfSEuMZRlL",
				type: "_2cWlpDSw_0Uw3VHprHWyqq"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less": function(e, t, n) {
			e.exports = {
				available: "_34YZ1BYomlSrsiAkyBzh9v",
				centeredRow: "_25_AV7ckrxzh-D5xOTcE3O",
				button: "_3e_LQKpHZ59nkcY3i4GvmR",
				container: "_vu3nmkuhyRAROziDIRy9",
				centered: "RdtYu8XaD9LWXvfZBLew_",
				fullButton: "_2273qEvOSP22zPsu7fYItS",
				loadingIcon: "_3qu6rrPqBKfB-FCSjTniKm",
				token: "_3u-_nTs7cQyDAoXI6PIkMB"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/FeesInfo/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_7Ee25wJvkxZ_LHaSL7gm9",
				grid: "_1vDUEFG58WSS6oMh8CoEqu",
				image: "vhoZGZePy-2FjE5gFC9wJ",
				text: "oiclFwcdrYr1O8czq24s"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/MainnetTitle/index.m.less": function(e, t, n) {
			e.exports = {
				amounts: "_1bWVrHgFitsbz2S5MEB8aJ",
				container: "_1OhYDeAehcclPi2GocVQ6j",
				closeIcon: "_1SducwCaP7lieJg7BiNzoZ",
				title: "_1ZoAvHobWA_rkGC8lvaQnv"
			}
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
				return x
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
				b = n("./src/reddit/components/Governance/ModalFrame/index.tsx"),
				f = n("./src/reddit/components/Governance/TransferPointsModal/MoonPay/index.m.less"),
				v = n.n(f);

			function x(e) {
				const t = Object(p.a)(),
					[n, a] = Object(o.useState)(new s.a("5")),
					[f, x] = Object(o.useState)(null),
					[g, E] = Object(o.useState)(""),
					[y, N] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					f || Object(u.a)(t(), e.subredditId).then(e => {
						e.ok ? x(e.body) : N(!0)
					})
				}, [f, t, e.subredditId, x]), Object(o.useEffect)(() => {
					E(""), Object(u.b)(t(), e.subredditId, n).then(e => {
						e.ok && E(e.body)
					})
				}, [n, t, e.subredditId, E]), i.a.createElement(b.a, {
					className: e.className,
					headerRight: i.a.createElement("img", {
						className: v.a.moonPayLogo,
						src: `${c.a.assetPath}/img/communityPoints/moonpay-logo.png`
					}),
					title: r.fbt._("Buy Ethereum for Network Fees", null, {
						hk: "3t78Fv"
					}),
					onBack: e.onBack
				}, i.a.createElement(d.c, {
					redditStyle: !0,
					className: v.a.input,
					label: r.fbt._("amount", null, {
						hk: "3rCgsf"
					}),
					type: "text",
					value: `$ ${n.toString()}`,
					onChange: () => {}
				}), i.a.createElement("div", {
					className: v.a.description
				}, r.fbt._("MoonPay's minimum required payment amount is $5. {linebreak} Enough for about 5-10 transactions.", [r.fbt._param("linebreak", i.a.createElement("br", null))], {
					hk: "31Jqpm"
				})), i.a.createElement("div", {
					className: v.a.amounts
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
					className: v.a.breakdown
				}, i.a.createElement("div", {
					className: v.a.lineItem
				}, f ? i.a.createElement(i.a.Fragment, null, i.a.createElement(h.a, {
					className: v.a.eth
				}), n.minus(.25).dividedBy(f).decimalPlaces(4).toString(), r.fbt._("ETH", null, {
					hk: "1KPU7W"
				})) : y ? r.fbt._("Could not determine amount", null, {
					hk: "1Al7x6"
				}) : r.fbt._("calculating...", null, {
					hk: "1Hf6i4"
				})), i.a.createElement("div", null, "$", n.minus(new s.a(.25)).toString()), i.a.createElement("div", null, r.fbt._("MoonPay Fee", null, {
					hk: "1QbArf"
				})), i.a.createElement("div", null, "$0.25"), i.a.createElement("div", {
					className: v.a.total
				}, r.fbt._("Total", null, {
					hk: "3Uqz4c"
				})), i.a.createElement("div", {
					className: v.a.total
				}, "$", n.toFormat(2).toString())), i.a.createElement(l.a, {
					className: v.a.continue,
					disabled: !g,
					onClick: t => {
						var n;
						m(t.currentTarget, g), null === (n = e.onPurchase) || void 0 === n || n.call(e)
					}
				}, r.fbt._("Buy", null, {
					hk: "1yKqul"
				})), i.a.createElement("div", {
					className: v.a.disclaimer
				}, r.fbt._("Reddit does not collect and store your personal identity information.", null, {
					hk: "2hJjwc"
				})))
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/NetworkFees/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_134GOKwtTYaSJx9vjKBK6M",
				eth: "_7MSRrZEb2oeFmhohMwCtA",
				infoIcon: "_223RPgGABUonZn3S5susrf",
				purchaseButton: "_2xIe1C5KdOe4pn4SQVAvXT"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/NotEnoughEth/index.m.less": function(e, t, n) {
			e.exports = {
				contentMsg: "_2VPPBgnBk5V13iuB7RMZlW",
				contentTitle: "_2FIypuB8tm2xGQLaTxN9EK",
				continue: "_3WBwkSBM-t7rY5sa1IJXod",
				copyIcon: "_3IsKZJEwIQ0Y_T4e0z3s6w",
				success: "_33rpLAIRSlJwv4xmNeX3Oi",
				fees: "_2xKlD0VwnsVu_cWImvq5RB",
				input: "_3wtXrsMzNxijWyaJZ9S8t0",
				inputContainer: "_1iCYEeuZ5AN5Ekzli9XLTF"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less": function(e, t, n) {
			e.exports = {
				container: "wq86s3a6P95u_EmgF7Iwt",
				display: "_2rGKpoOTeUYlwX9BCBHRcM",
				displayActive: "UnemO29PJbJkQStfFHQ6M",
				input: "_77uSa0pRNDpjP1fYtjJb2",
				token: "_1eUB0RLG8XhOTyIdmLDNh3"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return E
			})), n.d(t, "a", (function() {
				return y
			}));
			var a = n("./node_modules/lodash/debounce.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/usernameAvailable.ts"),
				u = n("./src/reddit/constants/colors.ts"),
				m = n("./src/reddit/controls/FormFields/index.tsx"),
				p = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				b = n("./src/reddit/icons/svgs/Info/index.tsx"),
				f = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				v = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				x = n.n(v),
				g = n("./node_modules/fbt/lib/FbtPublic.js");
			const E = 2,
				y = 20;
			var N;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Error = 1] = "Error", e[e.Invalid = 2] = "Invalid", e[e.Searching = 3] = "Searching", e[e.Valid = 4] = "Valid"
			}(N || (N = {}));
			class w extends o.a.PureComponent {
				constructor(e) {
					super(e), this.handleInputChange = e => {
						const t = e.currentTarget.value;
						t.length > E && this.props.onCheckUsername(t), this.setState({
							username: t
						})
					}, this.usernameValidity = e => {
						if (e && e.length > E) {
							switch (this.props.usernameAvailability[e]) {
								case d.b.Available:
									return N.Invalid;
								case d.b.Error:
									return N.Error;
								case d.b.Unavailable:
									return N.Valid;
								default:
									return N.Searching
							}
						}
						return N.Empty
					}, this.state = {
						username: e.initialRecipient || ""
					}, e.initialRecipient && e.onCheckUsername(e.initialRecipient)
				}
				componentDidMount() {
					this.informParentOfNameChange()
				}
				componentDidUpdate() {
					this.informParentOfNameChange()
				}
				informParentOfNameChange() {
					if (this.props.onChange) {
						const e = this.state.username;
						this.props.onChange(e, this.usernameValidity(e) === N.Valid)
					}
				}
				render() {
					const e = this.usernameValidity(this.state.username);
					return o.a.createElement("div", {
						className: Object(l.a)(x.a.container, this.props.className)
					}, o.a.createElement(m.c, {
						redditStyle: !0,
						className: x.a.input,
						label: g.fbt._("username", null, {
							hk: "2f1L4u"
						}),
						max: y,
						style: {
							borderColor: _(e)
						},
						tabIndex: this.props.tabIndex,
						type: "text",
						value: this.state.username,
						onChange: this.handleInputChange
					}), function(e) {
						switch (e) {
							case N.Error:
								return o.a.createElement(b.a, {
									className: x.a.icon,
									style: {
										fill: u.a.notice
									}
								});
							case N.Invalid:
								return o.a.createElement(f.a, {
									className: x.a.icon,
									style: {
										fill: u.a.warning
									}
								});
							case N.Searching:
								return o.a.createElement(p.a, {
									className: x.a.loadingIcon,
									sizePx: 8
								});
							case N.Valid:
								return o.a.createElement(h.a, {
									className: x.a.icon
								});
							default:
								return null
						}
					}(e), o.a.createElement("div", {
						className: x.a.message,
						style: {
							color: _(e)
						}
					}, function(e) {
						switch (e) {
							case N.Error:
								return g.fbt._("Could not check that username. Are you sure it's correct?", null, {
									hk: "1sNHpI"
								});
							case N.Invalid:
								return g.fbt._("Cannot find this username.", null, {
									hk: "Imvaj"
								});
							default:
								return ""
						}
					}(e)))
				}
			}

			function _(e) {
				switch (e) {
					case N.Error:
						return u.a.notice;
					case N.Invalid:
						return u.a.warning
				}
			}
			const k = Object(c.c)({
				usernameAvailability: e => e.users.nameAvailable
			});
			t.c = Object(i.b)(k, e => ({
				onCheckUsername: s()(t => e(Object(d.f)({
					username: t
				})), 250)
			}))(w)
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_5K5Dse4tVw0RLIpFAoxVY",
				icon: "S4tWlXsmJThb2dkEK0a-e",
				input: "_3TjvTVtT0SSXGCca-2hLNM",
				loadingIcon: "_1096A0iAp25FzCsAQtWIIZ",
				message: "_16fPUwJjUXr_SaDDXYoAuJ"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3gP9rdWJ8fhSWlm0CTLmHy",
				title: "_17rQcY4kHyOD8jzXc9afok",
				body: "_2BRUg-rtUYtV5-tAcE-MzB",
				description: "_2qbo2r3lfel4sxDe95sp-R",
				button: "_3a2JCQwYZ_OzZ7pA2D25cP",
				disclaimer: "hpRL-2MgeJZBIQopSRDbz"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3IiquiUxUtXOyp-zOO6NRj",
				controls: "YWcjXTgX4qLhEK5VzWtZN",
				explanation: "_1HZDNpr5Mwq2PvYQAr8Vya",
				inputContainer: "_2o6aRpMmIwjIyBzKvAX3Iu",
				networkFees: "_2yEFUGP_yzet7a91fgVe51",
				recipientContainer: "_9_VNXefTbTzw6yHVkranI",
				recipient: "_3qLUFjBZ3aszzs7hVEmIaj",
				title: "_2gmTTR14-GI7RpG5N8IfYY"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/bignumber.js/bignumber.js"),
				s = n.n(a),
				r = n("./node_modules/lodash/debounce.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/governance/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts"),
				h = n("./src/reddit/contexts/ApiContext.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/ethers/lib.esm/index.js")),
				v = n("./src/config.ts"),
				x = n("./src/reddit/endpoints/governance/requester.ts"),
				g = n("./src/reddit/helpers/crypto/abis/communityPointsABI.ts"),
				E = n("./src/reddit/endpoints/governance/moonpay.ts"),
				y = n("./src/reddit/endpoints/governance/crypto.ts");
			const N = new s.a("1e18"),
				w = async e => {
					const t = await e.getBlock("latest");
					if (t.baseFeePerGas) return new s.a(t.baseFeePerGas.toString());
					const n = (await e.getFeeData()).gasPrice;
					return n ? new s.a(n.toString()) : null
				}, _ = async e => {
					const t = await (async (e, t) => {
						if (f.ethers.utils.isAddress(t)) return {
							ok: !0,
							result: t
						};
						const n = await Object(x.a)(e, {
							method: "get",
							endpoint: `${v.a.metaUrl}/crypto-contacts?usernames=${t}`
						});
						if (n.ok) {
							const e = n.body.contacts;
							return {
								ok: !0,
								result: e[Object.keys(e)[0]][0].address
							}
						}
						return {
							ok: !1,
							error: n.error
						}
					})(e.apiContext, e.recipient);
					if (!t.ok) return {
						ok: !1,
						error: t.error
					};
					const n = (e => new f.ethers.providers.JsonRpcProvider(Object(y.i)(e), Object(y.h)(e)))(e.blockchainProvider),
						a = new f.ethers.Contract(e.contractAddress, g.a, n),
						[r, o] = await Promise.all([a.estimateGas.transfer(t.result, e.amount.toString(), {
							from: e.sender
						}), w(n)]);
					if (!o) return {
						ok: !1,
						error: new Error("Could not determine fees")
					};
					const i = new s.a(r.toString()).multipliedBy(o),
						c = await Object(E.a)(e.apiContext, e.subredditId);
					return c.ok ? {
						ok: !0,
						result: {
							eth: i,
							usd: i.dividedBy(N).multipliedBy(c.body).decimalPlaces(2).toString()
						}
					} : {
						ok: !1,
						error: c.error
					}
				};
			var k = n("./src/reddit/featureFlags/index.ts"),
				I = n("./src/reddit/helpers/governance/tokens.ts"),
				C = n("./src/reddit/selectors/crypto/points.ts"),
				j = n("./src/reddit/selectors/crypto/wallet.ts"),
				O = n("./src/reddit/selectors/experiments/mainnet.ts"),
				T = n("./node_modules/reselect/es/index.js"),
				P = n("./src/lib/classNames/index.ts"),
				M = n("./src/lib/prettyPrintNumber/index.ts"),
				A = n("./src/reddit/components/Governance/Token/index.tsx"),
				S = n("./src/reddit/constants/colors.ts"),
				B = n("./src/reddit/controls/Button/index.tsx"),
				F = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				R = n("./src/reddit/selectors/gov.ts"),
				G = n("./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less"),
				V = n.n(G),
				D = n("./node_modules/fbt/lib/FbtPublic.js");
			const L = Object(T.c)({
				isMainnetEnabled: O.a,
				points: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(C.b)(e, n)
				},
				transferIsPending: e => e.transfers.communityPoints.api.pending,
				wallet: R.d
			});
			var U = Object(l.b)(L)((function(e) {
					const {
						amount: t,
						className: n,
						isMainnetEnabled: s,
						onTransferPoints: r,
						points: o,
						subredditId: i,
						tabIndex: l,
						transferIsPending: d,
						wallet: u
					} = e, m = (null == u ? void 0 : u.unlockedAmount) || "0", p = new a.BigNumber(t || "0"), h = new a.BigNumber(m), b = h.isGreaterThanOrEqualTo(p), f = e.submissionEnabled && !h.isZero() && b;
					return c.a.createElement("div", {
						className: Object(P.a)(V.a.container, n, {
							[V.a.centered]: s
						})
					}, !s && c.a.createElement("div", {
						className: V.a.available
					}, c.a.createElement("div", null, D.fbt._("Transferable", null, {
						hk: "4n8VPB"
					})), c.a.createElement(A.a, {
						grey: !0,
						className: V.a.token,
						subredditId: i
					}), c.a.createElement("div", {
						style: {
							color: b ? void 0 : S.a.warning
						}
					}, Object(M.a)(Object(I.c)(m, null == o ? void 0 : o.displayConversion)))), c.a.createElement(B.l, {
						disabled: !f,
						className: s ? V.a.fullButton : V.a.button,
						tabIndex: l,
						onClick: r
					}, d ? c.a.createElement(F.a, {
						className: V.a.loadingIcon,
						sizePx: 20
					}) : s ? D.fbt._("Continue", null, {
						hk: "GiYrM"
					}) : D.fbt._("Send", null, {
						hk: "18b7Wd"
					})))
				})),
				W = n("./src/reddit/components/Governance/ModalFrame/index.tsx"),
				H = n("./src/reddit/components/Governance/TransferPointsModal/FeesInfo/index.m.less"),
				z = n.n(H);
			const Z = e => `${v.a.assetPath}/img/communityPoints/${e}.png`;

			function q(e) {
				return c.a.createElement(W.a, {
					className: e.className,
					title: D.fbt._("What is the network fee?", null, {
						hk: "4zafLX"
					}),
					onBack: e.onBack
				}, c.a.createElement("div", {
					className: z.a.grid
				}, c.a.createElement("img", {
					className: z.a.image,
					src: Z("fees-1")
				}), c.a.createElement("div", {
					className: z.a.text
				}, D.fbt._("Network fees are required to conduct transactions on the blockchain (for example, when sending Points).", null, {
					hk: "BJBay"
				})), c.a.createElement("img", {
					className: z.a.image,
					src: Z("fees-2")
				}), c.a.createElement("div", {
					className: z.a.text
				}, D.fbt._("Network fees go to the blockchain network to pay for transaction integrity and security. Reddit does not receive any of the fees.", null, {
					hk: "3o0Oqp"
				})), c.a.createElement("img", {
					className: z.a.image,
					src: Z("fees-3")
				}), c.a.createElement("div", {
					className: z.a.text
				}, D.fbt._("Network fees are paid in the ETH cryptocurrency. In order to make transactions that require a fee, you must have ETH.", null, {
					hk: "42EHsE"
				})), c.a.createElement("img", {
					className: z.a.image,
					src: Z("fees-4")
				}), c.a.createElement("div", {
					className: z.a.text
				}, D.fbt._("The exact fees depend on the state of the network at that time. The more people using it, the higher the fees. The Vault selects the lowest fee possible to reduce your costs.", null, {
					hk: "BPqiL"
				}))), c.a.createElement(B.a, {
					className: z.a.button,
					priority: B.c.Secondary,
					onClick: e.onBack
				}, D.fbt._("Continue", null, {
					hk: "WLaqI"
				})))
			}
			var Y, X = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				J = n("./src/reddit/components/Governance/EthSymbol/index.tsx"),
				K = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				Q = n("./src/reddit/icons/svgs/Close/index.tsx"),
				$ = n("./src/reddit/components/Governance/TransferPointsModal/Balances/index.m.less"),
				ee = n.n($);
			! function(e) {
				e.Eth = "Eth", e.Points = "Points"
			}(Y || (Y = {}));
			const te = e => {
				var t;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: ee.a.type
				}, e.points ? c.a.createElement(A.a, {
					grey: !0,
					className: ee.a.token,
					subredditId: e.subredditId
				}) : c.a.createElement(J.a, {
					className: ee.a.token
				}), e.chevron && (e.isOpen ? c.a.createElement(Q.a, {
					className: ee.a.chevron
				}) : c.a.createElement(K.a, {
					className: ee.a.chevron
				}))), c.a.createElement("div", {
					className: ee.a.amount
				}, e.points ? Object(I.d)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion) : Object(I.b)(e.ethAmount)))
			};
			var ne = e => {
					const t = e.show || Y.Points,
						[n, a] = Object(i.useState)(!1),
						s = Object(l.e)(t => Object(C.b)(t, e.subredditId));
					return c.a.createElement("div", {
						className: Object(P.a)(ee.a.container, e.className)
					}, c.a.createElement("div", {
						className: ee.a.label
					}, D.fbt._("Available", null, {
						hk: "1DKzeY"
					})), c.a.createElement("button", {
						className: Object(P.a)(ee.a.button, {
							[ee.a.open]: n
						}),
						onClick: () => a(e => !e)
					}, c.a.createElement("div", {
						className: ee.a.grid
					}, c.a.createElement(te, {
						chevron: !0,
						amount: e.amount,
						ethAmount: e.ethAmount,
						isOpen: n,
						points: t === Y.Points,
						pointsDetails: s,
						subredditId: e.subredditId
					}), c.a.createElement(te, {
						amount: e.amount,
						ethAmount: e.ethAmount,
						points: t === Y.Eth,
						pointsDetails: s,
						subredditId: e.subredditId
					}))))
				},
				ae = n("./src/reddit/components/Governance/TransferPointsModal/MainnetTitle/index.m.less"),
				se = n.n(ae);
			const {
				fbt: re
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function oe(e) {
				return c.a.createElement("header", {
					className: Object(P.a)(se.a.container, e.className)
				}, c.a.createElement("div", {
					className: se.a.title
				}, c.a.createElement(X.a, {
					className: se.a.closeIcon
				}), c.a.createElement("div", null, re._("Send {tokenName}", [re._param("tokenName", e.tokenName)], {
					hk: "33shhf"
				}))), c.a.createElement("div", {
					className: se.a.amounts
				}, c.a.createElement(ne, {
					amount: e.amount,
					ethAmount: e.ethAmount,
					subredditId: e.subredditId
				})))
			}
			var ie = n("./src/reddit/components/Governance/TransferPointsModal/MoonPay/index.tsx"),
				ce = n("./src/reddit/icons/svgs/EthCircle/index.tsx"),
				le = n("./src/reddit/icons/svgs/Info/index.tsx"),
				de = n("./src/reddit/components/Governance/TransferPointsModal/NetworkFees/index.m.less"),
				ue = n.n(de);

			function me(e) {
				const {
					className: t,
					fees: n,
					notEnoughEth: a,
					onPurchase: s,
					onShowFeesInfo: r
				} = e;
				return c.a.createElement("div", {
					className: Object(P.a)(ue.a.container, t)
				}, c.a.createElement(ce.a, {
					className: ue.a.eth
				}), c.a.createElement("div", {
					className: ue.a.fees
				}, n ? D.fbt._("~${fees} Estimated Network fees", [D.fbt._param("fees", n.usd)], {
					hk: "2Re1sU"
				}) : D.fbt._("calculating...", null, {
					hk: "4iolkJ"
				})), c.a.createElement(le.a, {
					className: ue.a.infoIcon,
					onClick: r
				}), a && c.a.createElement(B.a, {
					className: ue.a.purchaseButton,
					priority: B.c.Secondary,
					onClick: s
				}, D.fbt._("Purchase", null, {
					hk: "3RDmqo"
				})))
			}
			var pe = n("./src/reddit/controls/FormFields/index.tsx");

			function he() {
				return (he = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}

			function be(e) {
				return c.a.createElement("svg", he({}, e, {
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}), c.a.createElement("path", {
					d: "M11 15H13V17.875C12.9995 18.1732 12.8808 18.459 12.6699 18.6699C12.459 18.8808 12.1732 18.9995 11.875 19H2.125C1.82679 18.9995 1.54095 18.8808 1.33009 18.6699C1.11922 18.459 1.00053 18.1732 1 17.875V8.125C1.00053 7.82679 1.11922 7.54095 1.33009 7.33009C1.54095 7.11923 1.82679 7.00053 2.125 7H5V9H3V17H11V15ZM19 2.125V11.875C18.9997 12.1733 18.8811 12.4593 18.6702 12.6702C18.4593 12.8811 18.1733 12.9997 17.875 13H8.125C7.82671 12.9997 7.54072 12.8811 7.3298 12.6702C7.11888 12.4593 7.00026 12.1733 7 11.875V2.125C7.00053 1.82679 7.11923 1.54095 7.33009 1.33009C7.54095 1.11922 7.82679 1.00053 8.125 1H17.875C18.1732 1.00053 18.459 1.11922 18.6699 1.33009C18.8808 1.54095 18.9995 1.82679 19 2.125ZM9 3V11H17V3H9Z"
				}))
			}
			var fe = n("./src/reddit/components/Governance/TransferPointsModal/NotEnoughEth/index.m.less"),
				ve = n.n(fe);

			function xe(e) {
				return c.a.createElement(W.a, {
					className: e.className,
					headerRight: c.a.createElement(ne, {
						amount: e.wallet.amount,
						ethAmount: e.wallet.ethAmount || "0",
						show: Y.Eth,
						subredditId: e.subredditId
					}),
					title: D.fbt._("Not enough Ethereum", null, {
						hk: "fok4q"
					}),
					onBack: e.onBack
				}, c.a.createElement("div", {
					className: ve.a.contentTitle
				}, D.fbt._("Pay the Network Fee to Transfer", null, {
					hk: "1im0Kv"
				})), c.a.createElement("div", {
					className: ve.a.contentMsg
				}, D.fbt._("You need to pay a network fee (gas) to place a transfer on the mainnet. You can send Ethereum directly to your wallet address. Or buy required Ethereum amount from our 3rd party provider.", null, {
					hk: "1iHHkr"
				})), c.a.createElement(me, {
					className: ve.a.fees,
					fees: e.fees,
					onShowFeesInfo: e.onShowFeesInfo
				}), c.a.createElement("div", {
					className: ve.a.inputContainer
				}, c.a.createElement(pe.c, {
					redditStyle: !0,
					className: ve.a.input,
					label: D.fbt._("your wallet address", null, {
						hk: "OxMVa"
					}),
					type: "text",
					value: e.wallet.publicAddress || "",
					onChange: () => {}
				}), c.a.createElement(be, {
					className: ve.a.copyIcon,
					onAnimationEnd: e => {
						e.currentTarget.classList.remove(ve.a.success)
					},
					onClick: async t => {
						const n = t.currentTarget;
						await window.navigator.clipboard.writeText(e.wallet.publicAddress || ""), n.classList.add(ve.a.success)
					}
				})), c.a.createElement(B.a, {
					className: ve.a.continue,
					onClick: e.onBuyFromMoonPay
				}, D.fbt._("Buy ETH with MoonPay", null, {
					hk: "1vhyR0"
				})))
			}
			var ge = n("./src/lib/currency/cleanNumber/index.ts"),
				Ee = n("./src/reddit/constants/keycodes.ts"),
				ye = n("./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less"),
				Ne = n.n(ye);

			function we(e) {
				const t = e.amount || "0",
					n = !new a.BigNumber(t).isZero(),
					s = Object(M.a)(t);
				return c.a.createElement("label", {
					"aria-label": t,
					"aria-live": "assertive",
					className: Object(P.a)(Ne.a.container, e.className)
				}, c.a.createElement(A.a, {
					className: Ne.a.token,
					grey: !n,
					subredditId: e.subredditId
				}), c.a.createElement("div", {
					className: Object(P.a)(Ne.a.display, {
						[Ne.a.displayActive]: n
					}),
					style: {
						fontSize: _e(s)
					}
				}, Object(M.a)(s)), c.a.createElement("input", {
					autoFocus: !0,
					className: Ne.a.input,
					maxLength: 9,
					style: {
						fontSize: _e(s)
					},
					tabIndex: e.tabIndex,
					value: e.amount,
					onChange: t => e.onChange(Object(ge.a)(t.currentTarget.value)),
					onClick: ke,
					onFocus: ke,
					onKeyDown: e => {
						e.key !== Ee.b.ArrowLeft && e.key !== Ee.b.ArrowRight && e.key !== Ee.b.ArrowUp && e.key !== Ee.b.ArrowDown || e.preventDefault()
					}
				}))
			}

			function _e(e) {
				const t = e.length;
				return t > 7 ? 50 : t > 6 ? 56 : t > 5 ? 60 : t > 4 ? 64 : t > 1 ? 80 : 96
			}

			function ke(e) {
				const t = e.currentTarget.value.length;
				e.currentTarget.selectionStart = t, e.currentTarget.selectionEnd = t
			}
			var Ie = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				Ce = n("./node_modules/@ethersproject/address/lib.esm/index.js"),
				je = n("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				Oe = n("./src/reddit/actions/users.ts"),
				Te = n("./src/reddit/selectors/user.ts");
			var Pe = n("./src/reddit/hooks/useThunkDispatch.ts"),
				Me = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				Ae = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				Se = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				Be = n.n(Se);
			const Fe = 42,
				Re = /^0x[0-9a-fA-F]+$/;
			var Ge;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Searching = 1] = "Searching", e[e.Valid = 2] = "Valid", e[e.UserDoesNotHaveAWallet = 3] = "UserDoesNotHaveAWallet", e[e.InvalidWalletAddress = 4] = "InvalidWalletAddress", e[e.InvalidUsername = 5] = "InvalidUsername", e[e.Error = 6] = "Error"
			}(Ge || (Ge = {}));
			const Ve = async (e, t, n, a) => {
				const s = e.current;
				if (!s || s.length <= Ie.b) return void a(Ge.Empty);
				const r = Re.test(s);
				if (r) try {
					if (!!Object(Ce.a)(s)) return void a(Ge.Valid)
				} catch {}
				s.length <= Ie.a ? (a(Ge.Searching), n(((e, t) => async (n, a, s) => {
					let {
						apiContext: r
					} = s, o = a(), i = Object(Te.zb)(o, {
						userName: e
					});
					if (!(i || (await n(Object(Oe.B)(e)), o = a(), i = Object(Te.zb)(o, {
							userName: e
						})))) return {
						userId: null,
						wallet: null
					};
					let c = Object(j.c)(o, {
						subredditId: t,
						userId: i.id
					});
					return c || (await n(Object(je.a)({
						subredditId: t,
						userIds: [i.id]
					})), c = Object(j.c)(a(), {
						subredditId: t,
						userId: i.id
					})), {
						userId: i.id,
						wallet: c || null
					}
				})(s, t)).then(t => {
					let {
						userId: n,
						wallet: o
					} = t;
					e.current === s && a(n ? o ? Ge.Valid : Ge.UserDoesNotHaveAWallet : r ? Ge.InvalidWalletAddress : Ge.InvalidUsername)
				}).catch(() => {
					a(Ge.Error)
				})) : a(r ? Ge.InvalidWalletAddress : Ge.InvalidUsername)
			};

			function De(e) {
				const {
					onChange: t,
					subredditId: n
				} = e, [a, s] = Object(i.useState)(e.initialRecipient || ""), r = Object(i.useRef)(a), [l, d] = Object(i.useState)(Ge.Empty), u = Object(Pe.a)(), m = () => Ve(r, n, u, e => {
					d(e), e === Ge.Valid && t(r.current, !0)
				}), p = Object(i.useMemo)(() => o()(m, 300), [r, n, u, d, t]);
				return Object(i.useEffect)(() => {
					e.initialRecipient && m()
				}, []), c.a.createElement("div", {
					className: Object(P.a)(Be.a.container, e.className)
				}, c.a.createElement(pe.c, {
					redditStyle: !0,
					className: Be.a.input,
					label: D.fbt._("username or vault address", null, {
						hk: "1IIniU"
					}),
					max: Fe,
					style: {
						borderColor: Le(l)
					},
					tabIndex: e.tabIndex,
					type: "text",
					value: a,
					onChange: e => {
						const n = e.currentTarget.value.trim();
						r.current = n, s(n), t(n, !1), p()
					}
				}), function(e) {
					switch (e) {
						case Ge.UserDoesNotHaveAWallet:
							return c.a.createElement(le.a, {
								className: Be.a.icon,
								style: {
									fill: S.a.notice
								}
							});
						case Ge.InvalidWalletAddress:
						case Ge.InvalidUsername:
						case Ge.Error:
							return c.a.createElement(Ae.a, {
								className: Be.a.icon,
								style: {
									fill: S.a.warning
								}
							});
						case Ge.Searching:
							return c.a.createElement(F.a, {
								className: Be.a.loadingIcon,
								sizePx: 8
							});
						case Ge.Valid:
							return c.a.createElement(Me.a, {
								className: Be.a.icon
							});
						default:
							return null
					}
				}(l), c.a.createElement("div", {
					className: Be.a.message,
					style: {
						color: Le(l)
					}
				}, function(e) {
					switch (e) {
						case Ge.UserDoesNotHaveAWallet:
							return D.fbt._("That user does not yet have a Vault.", null, {
								hk: "ucZYj"
							});
						case Ge.InvalidWalletAddress:
							return D.fbt._("Invalid Vault address.", null, {
								hk: "1puAgb"
							});
						case Ge.InvalidUsername:
							return D.fbt._("That user does not exist.", null, {
								hk: "4f8vh9"
							});
						case Ge.Error:
							return D.fbt._("There was an error retrieving that user.", null, {
								hk: "2F521p"
							});
						default:
							return ""
					}
				}(l)))
			}

			function Le(e) {
				switch (e) {
					case Ge.UserDoesNotHaveAWallet:
						return S.a.notice;
					case Ge.InvalidWalletAddress:
					case Ge.InvalidUsername:
					case Ge.Error:
						return S.a.warning
				}
			}
			var Ue = n("./src/reddit/components/Governance/ModalTitle/index.tsx");

			function We(e) {
				const {
					tokenName: t
				} = e;
				return c.a.createElement(Ue.a, {
					className: e.className
				}, D.fbt._("Send {tokenName}", [D.fbt._param("tokenName", t)], {
					hk: "33shhf"
				}))
			}
			var He = n("./src/lib/addQueryParams/index.ts"),
				ze = n("./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less"),
				Ze = n.n(ze);
			const {
				fbt: qe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class Ye extends c.a.PureComponent {
				render() {
					const {
						contentId: e,
						publicAddress: t,
						recipient: n,
						subreddit: a,
						tokenName: s
					} = this.props;
					if (!e || !t) return null;
					const r = Object(He.a)("https://www.donut.finance/tip/", {
						action: "tip",
						contentId: e,
						recipient: n,
						address: t
					});
					return c.a.createElement("div", {
						className: Ze.a.container
					}, c.a.createElement(We, {
						className: Ze.a.title,
						subredditId: a.id,
						tokenName: s
					}), c.a.createElement("div", {
						className: Ze.a.body
					}, c.a.createElement("div", {
						className: Ze.a.description
					}, qe._("Tipping with Donuts is now managed on donut.finance.", null, {
						hk: "48pHUg"
					})), c.a.createElement(B.m, {
						redditStyle: !0,
						className: Ze.a.button,
						href: r,
						target: "_blank"
					}, qe._("Tip on donut.finance", null, {
						hk: "4tYZLZ"
					})), c.a.createElement("div", {
						className: Ze.a.disclaimer
					}, qe._("donut.finance is not affiliated with Reddit.", null, {
						hk: "2Hz0qj"
					}))))
				}
			}
			const Xe = Object(T.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				publicAddress: e => e.transfers.communityPoints.publicAddress
			});
			var Je = Object(l.b)(Xe)(Ye),
				Ke = n("./src/reddit/components/Governance/TransferPointsModal/index.m.less"),
				Qe = n.n(Ke);
			const {
				fbt: $e
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class et extends c.a.Component {
				constructor(e) {
					super(e), this.handleAmountChange = e => {
						this.setState({
							displayAmount: e,
							tokenAmount: Object(I.a)(e, this.props.pointsDetails.displayConversion)
						}), this.handleFeesCalculation()
					}, this.handleRecipientChange = (e, t) => {
						this.setState({
							recipient: e,
							recipientIsValid: t
						}), this.handleFeesCalculation()
					}, this.handleFeesCalculation = o()(async () => {
						const {
							apiContext: e,
							isMainnetEnabled: t,
							pointsDetails: n,
							currentWallet: s,
							subreddit: r
						} = this.props, {
							tokenAmount: o,
							recipient: i,
							recipientIsValid: c
						} = this.state;
						if (t && (null == n ? void 0 : n.blockchainProvider) && (null == s ? void 0 : s.publicAddress) && i && c && n && s && r && o) {
							const t = await _({
								apiContext: e(),
								amount: new a.BigNumber(o),
								blockchainProvider: n.blockchainProvider,
								contractAddress: n.contractAddress,
								recipient: i,
								sender: s.publicAddress,
								subredditId: r.id
							});
							t.ok && this.setState({
								fees: t.result
							})
						}
					}, 250), this.canAffordFees = () => {
						const {
							currentWallet: e,
							isMainnetEnabled: t
						} = this.props, {
							fees: n
						} = this.state;
						return !t || !(!e || !n) && new a.BigNumber(e.ethAmount || "0").isGreaterThanOrEqualTo(n.eth)
					}, this.state = {
						displayAmount: void 0,
						fees: void 0,
						recipient: void 0,
						recipientIsValid: !(!e.customCrypto || !e.publicAddress),
						showFeesInfo: !1,
						showMoonpayPurchase: !1,
						showPurchaseEthModal: !1,
						showTransferTransactionModal: !1,
						tokenAmount: void 0
					}
				}
				render() {
					const {
						currentWallet: e,
						customCrypto: t,
						initialRecipient: n,
						isEthereumProvider: a,
						isMainnetEnabled: s,
						onTransferPoints: r,
						pointsDetails: o,
						subreddit: i
					} = this.props;
					if (!i || !o) return null;
					if (t && a) return c.a.createElement(Je, {
						recipient: n,
						subreddit: i,
						tokenName: o.name
					});
					if (this.state.showTransferTransactionModal) return c.a.createElement(p.a, {
						onClose: this.props.onClose,
						recipient: this.state.recipient,
						subredditId: i.id,
						transferAmount: this.state.tokenAmount
					});
					if (this.props.isMainnetEnabled && this.state.showFeesInfo) return c.a.createElement(q, {
						onBack: () => this.setState({
							showFeesInfo: !1
						})
					});
					if (this.props.isMainnetEnabled && this.state.showMoonpayPurchase) return c.a.createElement(ie.a, {
						subredditId: i.id,
						onPurchase: this.props.onClose
					});
					if (this.props.isMainnetEnabled && this.state.showPurchaseEthModal && this.state.fees && e) return c.a.createElement(xe, {
						fees: this.state.fees,
						subredditId: i.id,
						wallet: e,
						onBuyFromMoonPay: () => this.setState({
							showMoonpayPurchase: !0
						}),
						onShowFeesInfo: () => this.setState({
							showFeesInfo: !0
						})
					});
					const l = o.blockchainProvider ? De : Ie.c;
					return c.a.createElement("div", {
						className: Qe.a.container
					}, s ? c.a.createElement(oe, {
						className: Qe.a.title,
						amount: (null == e ? void 0 : e.amount) || "0",
						ethAmount: (null == e ? void 0 : e.ethAmount) || "0",
						subredditId: i.id,
						tokenName: o.name
					}) : c.a.createElement(We, {
						className: Qe.a.title,
						subredditId: i.id,
						tokenName: o.name
					}), c.a.createElement("div", {
						className: Qe.a.inputContainer
					}, c.a.createElement(we, {
						amount: this.state.displayAmount,
						subredditId: i.id,
						tabIndex: 1,
						onChange: this.handleAmountChange
					})), s && c.a.createElement(me, {
						className: Qe.a.networkFees,
						fees: this.state.fees,
						notEnoughEth: this.state.fees && !this.canAffordFees(),
						onPurchase: () => this.setState({
							showPurchaseEthModal: !0
						}),
						onShowFeesInfo: () => this.setState({
							showFeesInfo: !0
						})
					}), !o.blockchainProvider && c.a.createElement("div", {
						className: Qe.a.explanation
					}, $e._("Up to 49% of earned {tokenName}. Remaining are frozen.", [$e._param("tokenName", o.name)], {
						hk: "1fUxyG"
					})), t ? c.a.createElement("div", {
						className: Qe.a.explanation
					}, $e._("Transfer to {initialRecipient}", [$e._param("initialRecipient", n)], {
						hk: "2woxNp"
					})) : c.a.createElement("div", {
						className: Qe.a.recipientContainer
					}, c.a.createElement(l, {
						className: Qe.a.recipient,
						initialRecipient: n || this.state.recipient,
						tabIndex: 2,
						onChange: this.handleRecipientChange,
						subredditId: i.id
					})), c.a.createElement(U, {
						amount: this.state.tokenAmount,
						className: Qe.a.controls,
						submissionEnabled: !!this.state.tokenAmount && this.state.recipientIsValid && this.canAffordFees(),
						subredditId: i.id,
						tabIndex: 3,
						onTransferPoints: () => {
							s && !this.canAffordFees() || this.state.tokenAmount && this.state.recipient && i && (o.blockchainProvider ? this.setState({
								showTransferTransactionModal: !0
							}) : r(this.state.tokenAmount, this.state.recipient, i.id))
						}
					}))
				}
			}
			const tt = Object(T.c)({
					isMainnetEnabled: O.a,
					currentWallet: (e, t) => {
						const n = Object(b.r)(e, t);
						if (n) return Object(j.a)(e, {
							subredditId: n.id
						})
					},
					customCrypto: k.d.spCustomCrypto,
					initialRecipient: e => e.transfers.communityPoints.initialRecipient,
					isEthereumProvider: (e, t) => {
						const n = Object(b.r)(e, t);
						return Object(C.a)(e, null == n ? void 0 : n.id)
					},
					pointsDetails: (e, t) => {
						const n = Object(b.r)(e, t);
						return Object(C.b)(e, null == n ? void 0 : n.id)
					},
					publicAddress: e => e.transfers.communityPoints.publicAddress,
					subreddit: b.r
				}),
				nt = Object(l.b)(tt, e => ({
					onClose: () => {
						e(Object(m.f)())
					},
					onTransferPoints: (t, n, a) => e(Object(u.e)({
						amount: t,
						recipient: n,
						subredditId: a
					}, !0))
				})),
				at = Object(b.u)();
			t.default = Object(d.a)(at(Object(h.b)(nt(et))))
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
				return E
			})), n.d(t, "c", (function() {
				return y
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
				b = n.n(h);
			var f = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return l.a.createElement("div", {
						className: b.a.wrapper
					}, l.a.createElement(p.a, {
						className: b.a.titleRow
					}, n), l.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), l.a.createElement(p.a, {
						className: b.a.buttonRow
					}, l.a.createElement(m.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, a.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				v = n("./src/reddit/controls/ErrorText/index.m.less"),
				x = n.n(v);
			class g extends l.a.Component {
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
						className: Object(d.a)(x.a.wrapper, t)
					}, l.a.createElement("span", {
						className: x.a.description,
						ref: this.spanRef
					}, e), o && l.a.createElement("span", {
						className: x.a.moreText,
						onClick: this.toggleModal
					}, r), i && l.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: s
					}, n || e))
				}
			}
			const E = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: a,
						fallbackMessage: s,
						messages: r = []
					} = e, o = r.length ? r : s ? [s] : [];
					return o.length ? l.a.createElement("div", {
						className: t
					}, o.map((e, t) => l.a.createElement(g, {
						className: n,
						errorModalTitle: a,
						key: t
					}, e))) : null
				},
				y = e => l.a.createElement(E, {
					fallbackMessage: a.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = g
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
				return f
			})), n.d(t, "d", (function() {
				return g
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
				b = e => {
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
				f = e => {
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
				v = e => s.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
					className: u.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class g extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: x.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: x.REMOVE,
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
					return e.map((e, o) => s.a.createElement(b, {
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
					}, t && c && s.a.createElement(v, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && s.a.createElement(v, {
						onClick: this.addValue,
						text: o
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
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: a = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(i.a.loadingIcon, n, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${a}px`
					},
					"data-testid": "LoadingIcon"
				})
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
			}]
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var a = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const n = new a.BigNumber(e),
					s = new a.BigNumber(t || 1);
				return n.dividedToIntegerBy(s).toString()
			}

			function o(e, t) {
				return Object(s.b)(parseInt(r(e, t), 10))
			}

			function i(e, t) {
				const n = new a.BigNumber(e),
					s = new a.BigNumber(t || 1);
				return n.multipliedBy(s).toFixed(0)
			}

			function c(e) {
				const t = new a.BigNumber(e),
					n = new a.BigNumber("1e18");
				return t.dividedBy(n).toString()
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
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react-redux/es/index.js");

			function s() {
				return Object(a.d)()
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
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			var a = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(a.a)({
				features: {
					crypto: s.a
				}
			});
			const r = (e, t) => {
					var n;
					return t && (null === (n = e.user.wallets[t.subredditId]) || void 0 === n ? void 0 : n.latest)
				},
				o = (e, t) => {
					var n;
					return null === (n = r(e, t)) || void 0 === n ? void 0 : n.publicAddress
				},
				i = (e, t) => {
					var n, a, s, r;
					return null === (r = null === (s = null === (a = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === a ? void 0 : a.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === r ? void 0 : r[t.subredditId]
				}
		},
		"./src/reddit/selectors/experiments/mainnet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: a.Xd
				}) === a.od
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var a = n("./src/reddit/contexts/PageLayer/index.tsx");
			const s = [],
				r = {},
				o = (e, t) => {
					const n = p(e, t);
					if (n) return n.mainHeader
				},
				i = (e, t) => {
					const n = p(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				c = (e, t) => {
					const n = p(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : r
				},
				l = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				d = (e, t) => {
					const n = l(e, t),
						a = n && n.publicAddress;
					if (!a) throw new Error("No wallet address found");
					return a
				},
				u = (e, t) => {
					const n = l(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(a.n)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || s
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.b382d5721a5ea5816ad9.js.map