// https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.924f5c10284e6ab94e88.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceTransferPointsModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return s(e) + t
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/endpoints/governance/wallet.ts"),
				r = n("./src/reddit/actions/governance/constants.ts");
			const i = Object(s.a)(r.m),
				o = Object(s.a)(r.n),
				c = Object(s.a)(r.l);
			t.a = e => async (t, n, s) => {
				let {
					apiContext: r
				} = s;
				t(i({
					subredditId: e.subredditId
				}));
				const l = await Object(a.b)(r(), e);
				l.ok ? t(o({
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
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/config.ts");

			function i(e) {
				const t = `${r.a.assetPath}/img/communityPoints/ethsymbol.png`;
				return a.a.createElement("img", {
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = n.n(l);
			t.a = Object(r.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(o.f)()), n && n()
					}
				}
			})((function(e) {
				return a.a.createElement(c.a, {
					className: Object(i.a)(d.a.closeIcon, e.className),
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalFrame/index.m.less"),
				l = n.n(c);

			function d(e) {
				return a.a.createElement("div", {
					className: Object(r.a)(l.a.container, e.className)
				}, a.a.createElement("header", {
					className: l.a.header
				}, a.a.createElement("div", {
					className: l.a.title
				}, e.onBack ? a.a.createElement(i.a, {
					className: l.a.closeIcon,
					onClick: e.onBack
				}) : a.a.createElement(o.a, {
					className: l.a.closeIcon
				}), a.a.createElement("div", null, e.title)), a.a.createElement("div", null, e.headerRight)), a.a.createElement("div", {
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				o = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = n.n(o);

			function l(e) {
				return a.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className, {
						[c.a.coloredContainer]: e.colored
					})
				}, a.a.createElement("div", {
					className: c.a.title
				}, e.children), a.a.createElement(i.a, {
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/crypto/points.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(i.c)({
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
				const s = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					r = `${o.a.assetPath}/${s}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return a.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return a.a.createElement("img", {
					className: e.className,
					src: r
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-TransferTransactionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-TransferTransactionModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx")),
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
			t.a = a
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
				imageWrapper: "_5p8jYt_vdSM5UN7GmQqnM",
				image: "vhoZGZePy-2FjE5gFC9wJ",
				wideImage: "KPGJUsm5G2rxPSvPVI_Gu",
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
		"./src/reddit/components/Governance/TransferPointsModal/NetworkFees/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_134GOKwtTYaSJx9vjKBK6M",
				fees: "SLlCxtJmf_1lTYNn3WJQo",
				eth: "_7MSRrZEb2oeFmhohMwCtA",
				ethFee: "_39TGgLKxzDEeW026vbCadt",
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
				return N
			}));
			var s = n("./node_modules/lodash/debounce.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
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
				N = 20;
			var y;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Error = 1] = "Error", e[e.Invalid = 2] = "Invalid", e[e.Searching = 3] = "Searching", e[e.Valid = 4] = "Valid"
			}(y || (y = {}));
			class w extends i.a.PureComponent {
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
									return y.Invalid;
								case d.b.Error:
									return y.Error;
								case d.b.Unavailable:
									return y.Valid;
								default:
									return y.Searching
							}
						}
						return y.Empty
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
						this.props.onChange(e, this.usernameValidity(e) === y.Valid)
					}
				}
				render() {
					const e = this.usernameValidity(this.state.username);
					return i.a.createElement("div", {
						className: Object(l.a)(x.a.container, this.props.className)
					}, i.a.createElement(m.c, {
						redditStyle: !0,
						className: x.a.input,
						label: g.fbt._("username", null, {
							hk: "2f1L4u"
						}),
						max: N,
						style: {
							borderColor: I(e)
						},
						tabIndex: this.props.tabIndex,
						type: "text",
						value: this.state.username,
						onChange: this.handleInputChange
					}), function(e) {
						switch (e) {
							case y.Error:
								return i.a.createElement(b.a, {
									className: x.a.icon,
									style: {
										fill: u.a.notice
									}
								});
							case y.Invalid:
								return i.a.createElement(f.a, {
									className: x.a.icon,
									style: {
										fill: u.a.warning
									}
								});
							case y.Searching:
								return i.a.createElement(p.a, {
									className: x.a.loadingIcon,
									sizePx: 8
								});
							case y.Valid:
								return i.a.createElement(h.a, {
									className: x.a.icon
								});
							default:
								return null
						}
					}(e), i.a.createElement("div", {
						className: x.a.message,
						style: {
							color: I(e)
						}
					}, function(e) {
						switch (e) {
							case y.Error:
								return g.fbt._("Could not check that username. Are you sure it's correct?", null, {
									hk: "1sNHpI"
								});
							case y.Invalid:
								return g.fbt._("Cannot find this username.", null, {
									hk: "Imvaj"
								});
							default:
								return ""
						}
					}(e)))
				}
			}

			function I(e) {
				switch (e) {
					case y.Error:
						return u.a.notice;
					case y.Invalid:
						return u.a.warning
				}
			}
			const _ = Object(c.c)({
				usernameAvailability: e => e.users.nameAvailable
			});
			t.c = Object(o.b)(_, e => ({
				onCheckUsername: a()(t => e(Object(d.f)({
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
				title: "_2gmTTR14-GI7RpG5N8IfYY",
				terms: "_1-aWYqgD0aR4EbqdbCj5rb"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				a = n.n(s),
				r = n("./node_modules/lodash/debounce.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				c = n.n(o),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/governance/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/async.ts"),
				h = n("./src/reddit/contexts/ApiContext.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/controls/Link/index.tsx"),
				v = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/ethers/lib.esm/index.js")),
				x = n("./src/config.ts"),
				g = n("./src/reddit/endpoints/governance/requester.ts"),
				E = n("./src/reddit/helpers/crypto/abis/communityPointsABI.ts"),
				N = n("./src/reddit/endpoints/governance/crypto.ts");
			const y = async e => {
				const t = await e.getBlock("latest");
				if (t.baseFeePerGas) return new a.a(t.baseFeePerGas.toString());
				const n = (await e.getFeeData()).gasPrice;
				return n ? new a.a(n.toString()) : null
			}, w = async e => {
				const t = await (async (e, t) => {
					if (v.ethers.utils.isAddress(t)) return {
						ok: !0,
						result: t
					};
					const n = await Object(g.a)(e, {
						method: "get",
						endpoint: `${x.a.metaUrl}/crypto-contacts?usernames=${t}`
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
				const n = (e => new v.ethers.providers.JsonRpcProvider(Object(N.i)(e), Object(N.h)(e)))(e.blockchainProvider),
					s = new v.ethers.Contract(e.contractAddress, E.a, n),
					[r, i] = await Promise.all([s.estimateGas.transfer(t.result, e.amount.toString(), {
						from: e.sender
					}), y(n)]);
				return i ? {
					ok: !0,
					result: {
						eth: new a.a(r.toString()).multipliedBy(i)
					}
				} : {
					ok: !1,
					error: new Error("Could not determine fees")
				}
			};
			var I = n("./src/reddit/featureFlags/index.ts"),
				_ = n("./src/reddit/helpers/governance/tokens.ts"),
				k = n("./src/reddit/selectors/crypto/points.ts"),
				C = n("./src/reddit/selectors/crypto/wallet.ts"),
				j = n("./src/reddit/selectors/experiments/mainnet.ts"),
				T = n("./node_modules/reselect/es/index.js"),
				O = n("./src/lib/classNames/index.ts"),
				P = n("./src/lib/prettyPrintNumber/index.ts"),
				M = n("./src/reddit/components/Governance/Token/index.tsx"),
				A = n("./src/reddit/constants/colors.ts"),
				S = n("./src/reddit/controls/Button/index.tsx"),
				F = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				B = n("./src/reddit/selectors/gov.ts"),
				R = n("./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less"),
				G = n.n(R),
				D = n("./node_modules/fbt/lib/FbtPublic.js");
			const V = Object(T.c)({
				isMainnetEnabled: j.a,
				points: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(k.b)(e, n)
				},
				transferIsPending: e => e.transfers.communityPoints.api.pending,
				wallet: B.d
			});
			var W = Object(l.b)(V)((function(e) {
					const {
						amount: t,
						className: n,
						isMainnetEnabled: a,
						onTransferPoints: r,
						points: i,
						subredditId: o,
						tabIndex: l,
						transferIsPending: d,
						wallet: u
					} = e, m = (null == u ? void 0 : u.unlockedAmount) || "0", p = new s.BigNumber(t || "0"), h = new s.BigNumber(m), b = h.isGreaterThanOrEqualTo(p), f = e.submissionEnabled && !h.isZero() && b;
					return c.a.createElement("div", {
						className: Object(O.a)(G.a.container, n, {
							[G.a.centered]: a
						})
					}, !a && c.a.createElement("div", {
						className: G.a.available
					}, c.a.createElement("div", null, D.fbt._("Available", null, {
						hk: "4haScm"
					})), c.a.createElement(M.a, {
						grey: !0,
						className: G.a.token,
						subredditId: o
					}), c.a.createElement("div", {
						style: {
							color: b ? void 0 : A.a.warning
						}
					}, Object(P.a)(Object(_.c)(m, null == i ? void 0 : i.displayConversion)))), c.a.createElement(S.l, {
						disabled: !f,
						className: a ? G.a.fullButton : G.a.button,
						tabIndex: l,
						onClick: r
					}, d ? c.a.createElement(F.a, {
						className: G.a.loadingIcon,
						sizePx: 20
					}) : a ? D.fbt._("Continue", null, {
						hk: "3wb99N"
					}) : D.fbt._("Tip", null, {
						hk: "2jpbqY"
					})))
				})),
				L = n("./src/reddit/components/Governance/ModalFrame/index.tsx"),
				U = n("./src/reddit/components/Governance/TransferPointsModal/FeesInfo/index.m.less"),
				H = n.n(U);
			const Y = e => `${x.a.assetPath}/img/communityPoints/${e}.png`;

			function z(e) {
				return c.a.createElement(L.a, {
					className: e.className,
					title: D.fbt._("What is the network fee?", null, {
						hk: "4zafLX"
					}),
					onBack: e.onBack
				}, c.a.createElement("div", {
					className: H.a.grid
				}, c.a.createElement("div", {
					className: H.a.imageWrapper
				}, c.a.createElement("img", {
					className: H.a.image,
					src: Y("network-fees-1")
				}), " "), c.a.createElement("div", {
					className: H.a.text
				}, D.fbt._("Network fees are required to conduct transactions on the blockchain (for example, when tipping Points).", null, {
					hk: "STIdJ"
				})), c.a.createElement("div", {
					className: H.a.imageWrapper
				}, c.a.createElement("img", {
					className: H.a.wideImage,
					src: Y("network-fees-2")
				})), c.a.createElement("div", {
					className: H.a.text
				}, D.fbt._("Network fees go to the blockchain network to pay for transaction integrity and security. Reddit does not receive any of the fees.", null, {
					hk: "3o0Oqp"
				})), c.a.createElement("div", {
					className: H.a.imageWrapper
				}, c.a.createElement("img", {
					className: H.a.image,
					src: Y("network-fees-3")
				})), c.a.createElement("div", {
					className: H.a.text
				}, D.fbt._("Network fees are paid in ETH, the native cryptocurrency of the main Ethereum network. You need ETH to tip Points.", null, {
					hk: "3yR0rI"
				})), c.a.createElement("div", {
					className: H.a.imageWrapper
				}, c.a.createElement("img", {
					className: H.a.wideImage,
					src: Y("network-fees-4")
				})), c.a.createElement("div", {
					className: H.a.text
				}, D.fbt._("The exact fees depend on the state of the network at that time. The more people using it, the higher the fees. The Vault selects the lowest fee possible to reduce your costs.", null, {
					hk: "BPqiL"
				}))), c.a.createElement(S.a, {
					className: H.a.button,
					priority: S.c.Secondary,
					onClick: e.onBack
				}, D.fbt._("Continue", null, {
					hk: "WLaqI"
				})))
			}
			var Z, q = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				X = n("./src/reddit/components/Governance/EthSymbol/index.tsx"),
				J = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				K = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Q = n("./src/reddit/components/Governance/TransferPointsModal/Balances/index.m.less"),
				$ = n.n(Q);
			! function(e) {
				e.Eth = "Eth", e.Points = "Points"
			}(Z || (Z = {}));
			const ee = e => {
				var t;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: $.a.type
				}, e.points ? c.a.createElement(M.a, {
					grey: !0,
					className: $.a.token,
					subredditId: e.subredditId
				}) : c.a.createElement(X.a, {
					className: $.a.token
				}), e.chevron && (e.isOpen ? c.a.createElement(K.a, {
					className: $.a.chevron
				}) : c.a.createElement(J.a, {
					className: $.a.chevron
				}))), c.a.createElement("div", {
					className: $.a.amount
				}, e.points ? Object(_.d)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion) : Object(_.b)(e.ethAmount)))
			};
			var te = e => {
					const t = e.show || Z.Points,
						[n, s] = Object(o.useState)(!1),
						a = Object(l.e)(t => Object(k.b)(t, e.subredditId));
					return c.a.createElement("div", {
						className: Object(O.a)($.a.container, e.className)
					}, c.a.createElement("div", {
						className: $.a.label
					}, D.fbt._("Available", null, {
						hk: "1vOmCc"
					})), c.a.createElement("button", {
						className: Object(O.a)($.a.button, {
							[$.a.open]: n
						}),
						onClick: () => s(e => !e)
					}, c.a.createElement("div", {
						className: $.a.grid
					}, c.a.createElement(ee, {
						chevron: !0,
						amount: e.amount,
						ethAmount: e.ethAmount,
						isOpen: n,
						points: t === Z.Points,
						pointsDetails: a,
						subredditId: e.subredditId
					}), c.a.createElement(ee, {
						amount: e.amount,
						ethAmount: e.ethAmount,
						points: t === Z.Eth,
						pointsDetails: a,
						subredditId: e.subredditId
					}))))
				},
				ne = n("./src/reddit/components/Governance/TransferPointsModal/MainnetTitle/index.m.less"),
				se = n.n(ne);
			const {
				fbt: ae
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function re(e) {
				return c.a.createElement("header", {
					className: Object(O.a)(se.a.container, e.className)
				}, c.a.createElement("div", {
					className: se.a.title
				}, c.a.createElement(q.a, {
					className: se.a.closeIcon
				}), c.a.createElement("div", null, ae._("Tip {tokenName}", [ae._param("tokenName", e.tokenName)], {
					hk: "44Htik"
				}))), c.a.createElement("div", {
					className: se.a.amounts
				}, c.a.createElement(te, {
					amount: e.amount,
					ethAmount: e.ethAmount,
					subredditId: e.subredditId
				})))
			}
			const ie = new a.a("1e18");
			var oe = n("./src/reddit/icons/svgs/EthCircle/index.tsx"),
				ce = n("./src/reddit/icons/svgs/Info/index.tsx"),
				le = n("./src/reddit/components/Governance/TransferPointsModal/NetworkFees/index.m.less"),
				de = n.n(le);

			function ue(e) {
				const {
					className: t,
					fees: n,
					notEnoughEth: s,
					onPurchase: a,
					onShowFeesInfo: r
				} = e, i = (null == n ? void 0 : n.eth.dividedBy(ie).toFixed(6).toString()) || "";
				return c.a.createElement("div", {
					className: Object(O.a)(de.a.container, t)
				}, c.a.createElement("div", {
					className: de.a.fees
				}, n ? D.fbt._("Estimated Network fees", null, {
					hk: "1kEIRY"
				}) : c.a.createElement(c.a.Fragment, null, c.a.createElement(oe.a, {
					className: de.a.eth
				}), D.fbt._("calculating...", null, {
					hk: "EJ2uC"
				})), c.a.createElement(ce.a, {
					className: de.a.infoIcon,
					onClick: r
				})), n && c.a.createElement("p", {
					className: de.a.ethFee
				}, c.a.createElement(oe.a, {
					className: de.a.eth
				}), i), s && c.a.createElement(S.a, {
					className: de.a.purchaseButton,
					priority: S.c.Secondary,
					onClick: a
				}, D.fbt._("Purchase", null, {
					hk: "3RDmqo"
				})))
			}
			var me = n("./src/reddit/controls/FormFields/index.tsx");

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function he(e) {
				return c.a.createElement("svg", pe({}, e, {
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}), c.a.createElement("path", {
					d: "M11 15H13V17.875C12.9995 18.1732 12.8808 18.459 12.6699 18.6699C12.459 18.8808 12.1732 18.9995 11.875 19H2.125C1.82679 18.9995 1.54095 18.8808 1.33009 18.6699C1.11922 18.459 1.00053 18.1732 1 17.875V8.125C1.00053 7.82679 1.11922 7.54095 1.33009 7.33009C1.54095 7.11923 1.82679 7.00053 2.125 7H5V9H3V17H11V15ZM19 2.125V11.875C18.9997 12.1733 18.8811 12.4593 18.6702 12.6702C18.4593 12.8811 18.1733 12.9997 17.875 13H8.125C7.82671 12.9997 7.54072 12.8811 7.3298 12.6702C7.11888 12.4593 7.00026 12.1733 7 11.875V2.125C7.00053 1.82679 7.11923 1.54095 7.33009 1.33009C7.54095 1.11922 7.82679 1.00053 8.125 1H17.875C18.1732 1.00053 18.459 1.11922 18.6699 1.33009C18.8808 1.54095 18.9995 1.82679 19 2.125ZM9 3V11H17V3H9Z"
				}))
			}
			var be = n("./src/reddit/components/Governance/TransferPointsModal/NotEnoughEth/index.m.less"),
				fe = n.n(be);

			function ve(e) {
				let {
					className: t,
					fees: n,
					subredditId: s,
					wallet: a,
					onBack: r,
					onShowFeesInfo: i
				} = e;
				return c.a.createElement(L.a, {
					className: t,
					headerRight: c.a.createElement(te, {
						amount: a.amount,
						ethAmount: a.ethAmount || "0",
						show: Z.Eth,
						subredditId: s
					}),
					title: D.fbt._("Not enough Ethereum", null, {
						hk: "fok4q"
					}),
					onBack: r
				}, c.a.createElement("div", {
					className: fe.a.contentTitle
				}, D.fbt._("Pay the Network Fee to tip", null, {
					hk: "1zaLuj"
				})), c.a.createElement("div", {
					className: fe.a.contentMsg
				}, D.fbt._("You need to pay a network fee (gas) to tip on the mainnet. You can send Ethereum directly to your wallet address.", null, {
					hk: "3jnuxg"
				})), c.a.createElement(ue, {
					className: fe.a.fees,
					fees: n,
					onShowFeesInfo: i
				}), c.a.createElement("div", {
					className: fe.a.inputContainer
				}, c.a.createElement(me.c, {
					redditStyle: !0,
					className: fe.a.input,
					label: D.fbt._("your wallet address", null, {
						hk: "OxMVa"
					}),
					type: "text",
					value: a.publicAddress || "",
					onChange: () => {}
				}), c.a.createElement(he, {
					className: fe.a.copyIcon,
					onAnimationEnd: e => {
						e.currentTarget.classList.remove(fe.a.success)
					},
					onClick: async e => {
						const t = e.currentTarget;
						await window.navigator.clipboard.writeText(a.publicAddress || ""), t.classList.add(fe.a.success)
					}
				})))
			}
			var xe = n("./src/lib/currency/cleanNumber/index.ts"),
				ge = n("./src/reddit/constants/keycodes.ts"),
				Ee = n("./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less"),
				Ne = n.n(Ee);

			function ye(e) {
				const t = e.amount || "0",
					n = !new s.BigNumber(t).isZero(),
					a = Object(P.a)(t);
				return c.a.createElement("label", {
					"aria-label": t,
					"aria-live": "assertive",
					className: Object(O.a)(Ne.a.container, e.className)
				}, c.a.createElement(M.a, {
					className: Ne.a.token,
					grey: !n,
					subredditId: e.subredditId
				}), c.a.createElement("div", {
					className: Object(O.a)(Ne.a.display, {
						[Ne.a.displayActive]: n
					}),
					style: {
						fontSize: we(a)
					}
				}, Object(P.a)(a)), c.a.createElement("input", {
					autoFocus: !0,
					className: Ne.a.input,
					maxLength: 9,
					style: {
						fontSize: we(a)
					},
					tabIndex: e.tabIndex,
					value: e.amount,
					onChange: t => e.onChange(Object(xe.a)(t.currentTarget.value)),
					onClick: Ie,
					onFocus: Ie,
					onKeyDown: e => {
						e.key !== ge.b.ArrowLeft && e.key !== ge.b.ArrowRight && e.key !== ge.b.ArrowUp && e.key !== ge.b.ArrowDown || e.preventDefault()
					}
				}))
			}

			function we(e) {
				const t = e.length;
				return t > 7 ? 50 : t > 6 ? 56 : t > 5 ? 60 : t > 4 ? 64 : t > 1 ? 80 : 96
			}

			function Ie(e) {
				const t = e.currentTarget.value.length;
				e.currentTarget.selectionStart = t, e.currentTarget.selectionEnd = t
			}
			var _e = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				ke = n("./node_modules/@ethersproject/address/lib.esm/index.js"),
				Ce = n("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				je = n("./src/reddit/actions/users.ts"),
				Te = n("./src/reddit/selectors/user.ts");
			var Oe = n("./src/reddit/hooks/useThunkDispatch.ts"),
				Pe = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				Me = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				Ae = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				Se = n.n(Ae);
			const Fe = 42,
				Be = /^0x[0-9a-fA-F]+$/;
			var Re;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Searching = 1] = "Searching", e[e.Valid = 2] = "Valid", e[e.UserDoesNotHaveAWallet = 3] = "UserDoesNotHaveAWallet", e[e.InputtedWalletAddress = 4] = "InputtedWalletAddress", e[e.InvalidUsername = 5] = "InvalidUsername", e[e.Error = 6] = "Error"
			}(Re || (Re = {}));
			const Ge = async (e, t, n, s, a) => {
				const r = t.current;
				if (!r || r.length <= _e.b) return void a(Re.Empty);
				const i = Be.test(r);
				if (i) try {
					if (!!Object(ke.getAddress)(r)) return void a(e ? Re.InputtedWalletAddress : Re.Valid)
				} catch {}
				r.length <= _e.a ? (a(Re.Searching), s(((e, t) => async (n, s, a) => {
					let {
						apiContext: r
					} = a, i = s(), o = Object(Te.Db)(i, {
						userName: e
					});
					if (!(o || (await n(Object(je.z)(e)), i = s(), o = Object(Te.Db)(i, {
							userName: e
						})))) return {
						userId: null,
						wallet: null
					};
					let c = Object(C.c)(i, {
						subredditId: t,
						userId: o.id
					});
					return c || (await n(Object(Ce.a)({
						subredditId: t,
						userIds: [o.id]
					})), c = Object(C.c)(s(), {
						subredditId: t,
						userId: o.id
					})), {
						userId: o.id,
						wallet: c || null
					}
				})(r, n)).then(e => {
					let {
						userId: n,
						wallet: s
					} = e;
					t.current === r && a(n ? s ? Re.Valid : Re.UserDoesNotHaveAWallet : i ? Re.InputtedWalletAddress : Re.InvalidUsername)
				}).catch(() => {
					a(Re.Error)
				})) : a(i ? Re.InputtedWalletAddress : Re.InvalidUsername)
			};

			function De(e) {
				const {
					className: t,
					initialRecipient: n,
					subredditId: s,
					tabIndex: a,
					onChange: r
				} = e, [d, u] = Object(o.useState)(n || ""), m = Object(o.useRef)(d), [p, h] = Object(o.useState)(Re.Empty), b = Object(Oe.a)(), f = Object(l.e)(j.a), v = () => Ge(f, m, s, b, e => {
					h(e), e === Re.Valid && r(m.current, !0)
				}), x = Object(o.useMemo)(() => i()(v, 300), [m, s, b, h, r, v]);
				return Object(o.useEffect)(() => {
					n && v()
				}, []), c.a.createElement("div", {
					className: Object(O.a)(Se.a.container, t)
				}, c.a.createElement(me.c, {
					redditStyle: !0,
					className: Se.a.input,
					label: f ? D.fbt._("username", null, {
						hk: "4436A5"
					}) : D.fbt._("username or vault address", null, {
						hk: "1IIniU"
					}),
					max: Fe,
					style: {
						borderColor: Ve(p)
					},
					tabIndex: a,
					type: "text",
					value: d,
					onChange: e => {
						const t = e.currentTarget.value.trim();
						m.current = t, u(t), r(t, !1), x()
					}
				}), function(e) {
					switch (e) {
						case Re.UserDoesNotHaveAWallet:
							return c.a.createElement(ce.a, {
								className: Se.a.icon,
								style: {
									fill: A.a.notice
								}
							});
						case Re.InputtedWalletAddress:
						case Re.InvalidUsername:
						case Re.Error:
							return c.a.createElement(Me.a, {
								className: Se.a.icon,
								style: {
									fill: A.a.warning
								}
							});
						case Re.Searching:
							return c.a.createElement(F.a, {
								className: Se.a.loadingIcon,
								sizePx: 8
							});
						case Re.Valid:
							return c.a.createElement(Pe.a, {
								className: Se.a.icon
							});
						default:
							return null
					}
				}(p), c.a.createElement("div", {
					className: Se.a.message,
					style: {
						color: Ve(p)
					}
				}, function(e, t) {
					switch (e) {
						case Re.UserDoesNotHaveAWallet:
							return D.fbt._("That user does not yet have a Vault.", null, {
								hk: "ucZYj"
							});
						case Re.InputtedWalletAddress:
							return t ? D.fbt._("Cannot tip to vault addresses.", null, {
								hk: "2PW4iA"
							}) : D.fbt._("Invalid Vault address.", null, {
								hk: "1puAgb"
							});
						case Re.InvalidUsername:
							return D.fbt._("That user does not exist.", null, {
								hk: "4f8vh9"
							});
						case Re.Error:
							return D.fbt._("There was an error retrieving that user.", null, {
								hk: "2F521p"
							});
						default:
							return ""
					}
				}(p, f)))
			}

			function Ve(e) {
				switch (e) {
					case Re.UserDoesNotHaveAWallet:
						return A.a.notice;
					case Re.InputtedWalletAddress:
					case Re.InvalidUsername:
					case Re.Error:
						return A.a.warning
				}
			}
			var We = n("./src/reddit/components/Governance/ModalTitle/index.tsx");

			function Le(e) {
				const {
					tokenName: t
				} = e;
				return c.a.createElement(We.a, {
					className: e.className
				}, D.fbt._("Tip {tokenName}", [D.fbt._param("tokenName", t)], {
					hk: "44Htik"
				}))
			}
			var Ue = n("./src/lib/addQueryParams/index.ts"),
				He = n("./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less"),
				Ye = n.n(He);
			const {
				fbt: ze
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class Ze extends c.a.PureComponent {
				render() {
					const {
						contentId: e,
						publicAddress: t,
						recipient: n,
						subreddit: s,
						tokenName: a
					} = this.props;
					if (!e || !t) return null;
					const r = Object(Ue.a)("https://www.donut.finance/tip/", {
						action: "tip",
						contentId: e,
						recipient: n,
						address: t
					});
					return c.a.createElement("div", {
						className: Ye.a.container
					}, c.a.createElement(Le, {
						className: Ye.a.title,
						subredditId: s.id,
						tokenName: a
					}), c.a.createElement("div", {
						className: Ye.a.body
					}, c.a.createElement("div", {
						className: Ye.a.description
					}, ze._("Tipping with Donuts is now managed on donut.finance.", null, {
						hk: "1jSpmY"
					})), c.a.createElement(S.m, {
						redditStyle: !0,
						className: Ye.a.button,
						href: r,
						target: "_blank"
					}, ze._("Tip on donut.finance", null, {
						hk: "4tYZLZ"
					})), c.a.createElement("div", {
						className: Ye.a.disclaimer
					}, ze._("donut.finance is not affiliated with Reddit.", null, {
						hk: "2Hz0qj"
					}))))
				}
			}
			const qe = Object(T.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				publicAddress: e => e.transfers.communityPoints.publicAddress
			});
			var Xe = Object(l.b)(qe)(Ze),
				Je = n("./src/reddit/components/Governance/TransferPointsModal/index.m.less"),
				Ke = n.n(Je);
			const {
				fbt: Qe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class $e extends c.a.Component {
				constructor(e) {
					super(e), this.handleAmountChange = e => {
						this.setState({
							displayAmount: e,
							tokenAmount: Object(_.a)(e, this.props.pointsDetails.displayConversion)
						}), this.handleFeesCalculation()
					}, this.handleRecipientChange = (e, t) => {
						this.setState({
							recipient: e,
							recipientIsValid: t
						}), this.handleFeesCalculation()
					}, this.handleFeesCalculation = i()(async () => {
						const {
							apiContext: e,
							isMainnetEnabled: t,
							pointsDetails: n,
							currentWallet: a,
							subreddit: r
						} = this.props, {
							tokenAmount: i,
							recipient: o,
							recipientIsValid: c
						} = this.state;
						if (t && (null == n ? void 0 : n.blockchainProvider) && (null == a ? void 0 : a.publicAddress) && o && c && n && a && r && i) {
							const t = await w({
								apiContext: e(),
								amount: new s.BigNumber(i),
								blockchainProvider: n.blockchainProvider,
								contractAddress: n.contractAddress,
								recipient: o,
								sender: a.publicAddress,
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
						return !t || !(!e || !n) && new s.BigNumber(e.ethAmount || "0").isGreaterThanOrEqualTo(n.eth)
					}, this.state = {
						displayAmount: void 0,
						fees: void 0,
						recipient: void 0,
						recipientIsValid: !(!e.customCrypto || !e.publicAddress),
						showFeesInfo: !1,
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
						isEthereumProvider: s,
						isMainnetEnabled: a,
						onTransferPoints: r,
						pointsDetails: i,
						subreddit: o
					} = this.props;
					if (!o || !i) return null;
					if (t && s) return c.a.createElement(Xe, {
						recipient: n,
						subreddit: o,
						tokenName: i.name
					});
					if (this.state.showTransferTransactionModal) return c.a.createElement(p.a, {
						onClose: this.props.onClose,
						recipient: this.state.recipient,
						subredditId: o.id,
						transferAmount: this.state.tokenAmount
					});
					if (this.props.isMainnetEnabled && this.state.showFeesInfo) return c.a.createElement(z, {
						onBack: () => this.setState({
							showFeesInfo: !1
						})
					});
					if (this.props.isMainnetEnabled && this.state.showPurchaseEthModal && this.state.fees && e) return c.a.createElement(ve, {
						fees: this.state.fees,
						subredditId: o.id,
						wallet: e,
						onShowFeesInfo: () => this.setState({
							showFeesInfo: !0
						})
					});
					const l = i.blockchainProvider ? De : _e.c;
					return c.a.createElement("div", {
						className: Ke.a.container
					}, a ? c.a.createElement(re, {
						className: Ke.a.title,
						amount: (null == e ? void 0 : e.amount) || "0",
						ethAmount: (null == e ? void 0 : e.ethAmount) || "0",
						subredditId: o.id,
						tokenName: i.name
					}) : c.a.createElement(Le, {
						className: Ke.a.title,
						subredditId: o.id,
						tokenName: i.name
					}), c.a.createElement("div", {
						className: Ke.a.inputContainer
					}, c.a.createElement(ye, {
						amount: this.state.displayAmount,
						subredditId: o.id,
						tabIndex: 1,
						onChange: this.handleAmountChange
					})), a && c.a.createElement(ue, {
						className: Ke.a.networkFees,
						fees: this.state.fees,
						notEnoughEth: this.state.fees && !this.canAffordFees(),
						onPurchase: () => this.setState({
							showPurchaseEthModal: !0
						}),
						onShowFeesInfo: () => this.setState({
							showFeesInfo: !0
						})
					}), !i.blockchainProvider && c.a.createElement("div", {
						className: Ke.a.explanation
					}, Qe._("Up to 49% of earned {tokenName}. Remaining are frozen.", [Qe._param("tokenName", i.name)], {
						hk: "1fUxyG"
					})), t ? c.a.createElement("div", {
						className: Ke.a.explanation
					}, Qe._("Tip {initialRecipient}", [Qe._param("initialRecipient", n)], {
						hk: "5BiCO"
					})) : c.a.createElement("div", {
						className: Ke.a.recipientContainer
					}, c.a.createElement(l, {
						className: Ke.a.recipient,
						initialRecipient: n || this.state.recipient,
						tabIndex: 2,
						onChange: this.handleRecipientChange,
						subredditId: o.id
					})), c.a.createElement(W, {
						amount: this.state.tokenAmount,
						className: Ke.a.controls,
						submissionEnabled: !!this.state.tokenAmount && this.state.recipientIsValid && this.canAffordFees(),
						subredditId: o.id,
						tabIndex: 3,
						onTransferPoints: () => {
							a && !this.canAffordFees() || this.state.tokenAmount && this.state.recipient && o && (i.blockchainProvider ? this.setState({
								showTransferTransactionModal: !0
							}) : r(this.state.tokenAmount, this.state.recipient, o.id))
						}
					}), c.a.createElement("p", {
						className: Ke.a.terms
					}, Qe._("By continuing, you agree to our", null, {
						hk: "4DXHLb"
					}), c.a.createElement(f.a, {
						href: "https://www.redditinc.com/policies/previews-terms"
					}, Qe._("Previews Terms.", null, {
						hk: "1YRKpb"
					}))))
				}
			}
			const et = Object(T.c)({
					isMainnetEnabled: j.a,
					currentWallet: (e, t) => {
						const n = Object(b.s)(e, t);
						if (n) return Object(C.a)(e, {
							subredditId: n.id
						})
					},
					customCrypto: I.d.spCustomCrypto,
					initialRecipient: e => e.transfers.communityPoints.initialRecipient,
					isEthereumProvider: (e, t) => {
						const n = Object(b.s)(e, t);
						return Object(k.a)(e, null == n ? void 0 : n.id)
					},
					pointsDetails: (e, t) => {
						const n = Object(b.s)(e, t);
						return Object(k.b)(e, null == n ? void 0 : n.id)
					},
					publicAddress: e => e.transfers.communityPoints.publicAddress,
					subreddit: b.s
				}),
				tt = Object(l.b)(et, e => ({
					onClose: () => {
						e(Object(m.f)())
					},
					onTransferPoints: (t, n, s) => e(Object(u.e)({
						amount: t,
						recipient: n,
						subredditId: s
					}, !0))
				})),
				nt = Object(b.v)();
			t.default = Object(d.a)(nt(Object(h.b)(tt($e))))
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
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(a),
				i = n("./node_modules/raf/index.js"),
				o = n.n(i),
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
					}, s.fbt._("Ok", null, {
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
						errorModalTitle: a = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: i,
						isModalOpen: o
					} = this.state;
					return l.a.createElement("div", {
						className: Object(d.a)(x.a.wrapper, t)
					}, l.a.createElement("span", {
						className: x.a.description,
						ref: this.spanRef
					}, e), i && l.a.createElement("span", {
						className: x.a.moreText,
						onClick: this.toggleModal
					}, r), o && l.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: a
					}, n || e))
				}
			}
			const E = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: a,
						messages: r = []
					} = e, i = r.length ? r : a ? [a] : [];
					return i.length ? l.a.createElement("div", {
						className: t
					}, i.map((e, t) => l.a.createElement(g, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				N = e => l.a.createElement(E, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
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
			const p = i.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					let {
						label: t,
						children: n,
						inputRef: s,
						className: i,
						isInvalid: o,
						...c
					} = e;
					const l = void 0 !== c.value && "" !== c.value;
					return a.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, i, {
							[u.a.mIsInvalid]: o
						}),
						onClick: h
					}, a.a.createElement(p, m({
						"aria-invalid": o,
						innerRef: s
					}, c)), t && a.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, t), n)
				},
				f = e => {
					let {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: i,
						className: o,
						redditStyle: c,
						...l
					} = e;
					const d = void 0 !== l.value && "" !== l.value;
					return a.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, o, {
							[u.a.mIsInvalid]: i,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, a.a.createElement(p, m({
						innerRef: s
					}, l)), t && a.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, t), n)
				},
				v = e => a.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(c.a, {
					className: u.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class g extends a.a.Component {
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
						placeholder: s,
						errors: r = []
					} = this.props;
					return e.map((e, i) => a.a.createElement(b, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!r[i],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, i),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, a.a.createElement(l.b, {
						className: u.a.trash
					})), !!r[i] && a.a.createElement(o.b, {
						className: u.a.errorText
					}, r[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: i,
						disabled: o
					} = this.props;
					this.focusedInput = null;
					const c = !(!!s && n.length >= s) && !o;
					return a.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && c && a.a.createElement(v, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && c && a.a.createElement(v, {
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = n.n(i);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s = 10
				} = e;
				return a.a.createElement("div", {
					className: Object(r.a)(o.a.loadingIcon, n, {
						[o.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
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
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				a = n("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const n = new s.BigNumber(e),
					a = new s.BigNumber(t || 1);
				return n.dividedToIntegerBy(a).toString()
			}

			function i(e, t) {
				return Object(a.b)(parseInt(r(e, t), 10))
			}

			function o(e, t) {
				const n = new s.BigNumber(e),
					a = new s.BigNumber(t || 1);
				return n.multipliedBy(a).toFixed(0)
			}

			function c(e) {
				const t = new s.BigNumber(e),
					n = new s.BigNumber("1e18");
				return t.dividedBy(n).toString()
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react-redux/es/index.js");

			function a() {
				return Object(s.d)()
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/EthCircle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function i(e) {
				return a.a.createElement("svg", r({}, e, {
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}), a.a.createElement("circle", {
					cx: "8",
					cy: "8",
					r: "8"
				}), a.a.createElement("path", {
					d: "M4.9039 7.33105L7.82947 2.57699C7.90757 2.45008 8.09204 2.45008 8.17014 2.57699L11.0957 7.33105C11.1533 7.42466 11.1246 7.54721 11.0314 7.60547L8.1058 9.43395C8.04095 9.47448 7.95866 9.47448 7.8938 9.43395L4.96823 7.60547C4.87502 7.54721 4.84629 7.42466 4.9039 7.33105Z",
					fill: "white"
				}), a.a.createElement("path", {
					d: "M4.85734 8.92901L7.84636 12.5158C7.92631 12.6118 8.07369 12.6118 8.15364 12.5158L11.1427 8.92901C11.2898 8.75247 11.0718 8.50778 10.8795 8.63363L8.10953 10.4467C8.043 10.4902 7.957 10.4902 7.89047 10.4467L5.12051 8.63363C4.92824 8.50778 4.71022 8.75247 4.85734 8.92901Z",
					fill: "white"
				}))
			}
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
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
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				o = n.n(i);
			const c = e => a.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return o
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(s.a)({
				features: {
					crypto: a.a
				}
			});
			const r = (e, t) => {
					var n;
					return t && (null === (n = e.user.wallets[t.subredditId]) || void 0 === n ? void 0 : n.latest)
				},
				i = (e, t) => {
					var n;
					return null === (n = r(e, t)) || void 0 === n ? void 0 : n.publicAddress
				},
				o = (e, t) => {
					var n, s, a, r;
					return null === (r = null === (a = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.publicWallets) || void 0 === a ? void 0 : a[t.userId]) || void 0 === r ? void 0 : r[t.subredditId]
				}
		},
		"./src/reddit/selectors/experiments/mainnet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: s.Fe
				}) === s.Rd
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
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
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			const a = [],
				r = {},
				i = (e, t) => {
					const n = p(e, t);
					if (n) return n.mainHeader
				},
				o = (e, t) => {
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
						s = n && n.publicAddress;
					if (!s) throw new Error("No wallet address found");
					return s
				},
				u = (e, t) => {
					const n = l(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(s.o)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || a
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.924f5c10284e6ab94e88.js.map