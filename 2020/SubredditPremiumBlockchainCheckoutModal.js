// https://www.redditstatic.com/desktop2x/SubredditPremiumBlockchainCheckoutModal.99bd1d4a8c53b9f05e0f.js
// Retrieved at 8/27/2020, 1:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBlockchainCheckoutModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2DraqcABbmDSPg3aeck34V",
				link: "_3muga6KLQNKQ__RqkEKo-f",
				linkLast: "_2qLmndBfIt8jp-XlSkNgZy"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/Header/index.m.less": function(e, t, s) {
			e.exports = {
				container: "rrqR0oD_cZmjJCfjaHRG_",
				text: "_1JEa2lxvG2kxPfr6l4CXYT",
				close: "_1IOZrbZuCthJbH45T_g8gc"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2a8tkpANwR-qrcp6PMqyO1",
				content: "_2aEjamSGKjYsgJfyt5Pw4l",
				cart: "_2_uY-yBlJ5fLLLzbKhGXeg",
				description: "C0RqjopoKsezUUhMx0rkV",
				crown: "X0kOSyfoTeCJWmZ7H7mSn",
				months: "_6X8pr9GXADG_b-XZoaL4S",
				days: "_2BGGoKhLRf4Czqc8HkDzOf",
				monthsInput: "wYzMUiPN8kS-dBkCVC6ZN",
				errorMessage: "_2H0COsOq_wrESpUg_8Fjwm",
				purchase: "fvS_MuiOkRPz9FFw2b0L-",
				walletAmount: "_1EkkB9z4ilifN9CUbibxPv",
				purchaseButton: "PmEKSNt-NzEnQGgfvxhwb",
				purchaseInstructions: "_16DD8zMPOo5sFK5cRTlkHJ"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PurchaseType", (function() {
				return z
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				r = s("./src/config.ts"),
				o = s("./node_modules/lodash/clamp.js"),
				a = s.n(o),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				u = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				b = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/prettyPrintNumber/index.ts"),
				g = s("./src/reddit/components/Governance/Token/index.tsx"),
				x = s("./src/reddit/helpers/governance/tokens.ts"),
				v = s("./src/reddit/selectors/gov.ts"),
				_ = s("./src/reddit/components/Governance/WalletAmount/index.m.less"),
				k = s.n(_);
			const E = Object(d.c)({
				latestWallet: v.g,
				tokenDisplayConversion: v.p
			});
			var w = Object(l.b)(E)((function(e) {
					const t = e.latestWallet && e.latestWallet.amount || "0";
					return c.a.createElement("div", {
						className: Object(b.a)(k.a.container, e.className)
					}, "You have", c.a.createElement(g.a, {
						grey: !0,
						className: k.a.token,
						subredditId: e.subredditId
					}), Object(f.a)(Object(x.b)(t, e.tokenDisplayConversion)))
				})),
				N = s("./src/reddit/components/TrackingHelper/index.tsx"),
				j = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/controls/FormFields/index.tsx"),
				O = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = s("./src/reddit/featureFlags/component.tsx"),
				P = s("./src/reddit/helpers/governance/ethereum.ts"),
				M = s("./src/reddit/helpers/governance/stellar.ts"),
				S = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/economics.ts"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/reddit/constants/disclaimers.ts"),
				B = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/Footer/index.m.less"),
				F = s.n(B);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const R = Object(d.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(I.s)(e, s)
				}
			});
			var L = Object(l.b)(R)((function(e) {
					return c.a.createElement("footer", {
						className: F.a.container
					}, D._("By purchasing a {membershipAlt}, you agree to the", [D._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "3o8SmE"
					}), c.a.createElement("a", {
						className: F.a.link,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, D._("Reddit User Agreement", null, {
						hk: "1F3eUP"
					})), D._("and", null, {
						hk: "3daFuU"
					}), c.a.createElement("a", {
						className: F.a.linkLast,
						href: A.a,
						target: "_blank"
					}, D._("Reddit Beta Terms of Service", null, {
						hk: "1asVGG"
					})), D._(".", null, {
						hk: "294bnM"
					}))
				})),
				G = s("./src/reddit/icons/svgs/Close/index.tsx"),
				V = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/Header/index.m.less"),
				W = s.n(V);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const H = Object(d.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(I.s)(e, s)
				}
			});
			var X = Object(l.b)(H)((function(e) {
					const {
						meta: t
					} = e;
					return c.a.createElement("header", {
						className: W.a.container
					}, c.a.createElement("div", {
						className: W.a.text
					}, U._("Purchase {membership name}", [U._param("membership name", t.membershipAlt)], {
						hk: "OO3Gk"
					})), c.a.createElement(G.a, {
						className: W.a.close,
						onClick: e.onClose
					}))
				})),
				Y = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.m.less"),
				Z = s.n(Y);
			const {
				fbt: q
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var z;
			! function(e) {
				e[e.Badge = 0] = "Badge", e[e.Subscription = 1] = "Subscription"
			}(z || (z = {}));
			const K = 5e3,
				J = 2e4;
			class Q extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						purchasePending: !1,
						numMonths: 1
					}, this.pollForMembershipSuccessTimeout = null, this.onMonthsChange = e => {
						const t = this.getMonthsUserCanAfford(),
							s = a()(parseInt(e.target.value) || 1, 1, t);
						this.setState({
							numMonths: s
						})
					}, this.onEthereumPurchase = async () => {
						const e = this.props.subscriptionCryptoDetails.address;
						if (!e) throw new Error("could not find subscription contract address");
						this.setState({
							purchasePending: !0
						}), Object(P.g)(e, this.props.wallet.publicAddress, this.state.numMonths).then(() => {
							this.pollForMembership()
						}).catch(e => {
							this.props.onError(e.message), this.setState({
								purchasePending: !1
							})
						})
					}, this.onStellarPurchase = () => {
						this.setState({
							purchasePending: !0
						}), this.pollForMembership()
					}
				}
				componentDidMount() {
					this.props.viewEvent && this.props.sendEvent(this.props.viewEvent)
				}
				componentWillUnmount() {
					this.stopPollingForMembership()
				}
				getMonthsUserCanAfford() {
					const e = this.props.wallet && this.props.wallet.amount;
					return e ? new n.BigNumber(e).dividedToIntegerBy(this.props.priceInPoints).toNumber() : 0
				}
				getStellarPurchaseLink() {
					const {
						priceInPoints: e,
						tokenDisplayConversion: t,
						unlockedToken: s
					} = this.props, {
						numMonths: r
					} = this.state, o = new n.BigNumber(e).multipliedBy(r).toString();
					return Object(M.a)(s && s.address || "", s && s.symbol || "", Object(x.b)(o, t) || "0")
				}
				pollForMembership() {
					if (!this.pollForMembershipSuccessTimeout) {
						const e = this.props.subscriptionExpiration;
						let t = 0;
						this.pollForMembershipSuccessTimeout = window.setInterval(async () => {
							await this.props.onFetchSubredditMembership(), this.props.subscriptionExpiration !== e ? (this.props.onSuccess(), this.props.onClose(), this.stopPollingForMembership()) : t > 30 && (this.props.onError(q._("No membership found. Please check again after waiting for transaction to succeed, or try again if it failed.", null, {
								hk: "1KIJGC"
							})), this.setState({
								purchasePending: !1
							}), this.stopPollingForMembership()), t++
						}, this.props.isEthereumProvider ? K : J)
					}
				}
				stopPollingForMembership() {
					this.pollForMembershipSuccessTimeout && (window.clearTimeout(this.pollForMembershipSuccessTimeout), this.pollForMembershipSuccessTimeout = null)
				}
				render() {
					const {
						onClose: e,
						meta: t,
						priceInPoints: s,
						subreddit: o,
						subredditId: a,
						tokenName: i
					} = this.props, {
						numMonths: l,
						purchasePending: d
					} = this.state, u = l > this.getMonthsUserCanAfford();
					return c.a.createElement("div", {
						className: Z.a.container
					}, c.a.createElement(X, {
						subredditId: a,
						onClose: e
					}), c.a.createElement("div", {
						className: Z.a.content
					}, c.a.createElement("div", {
						className: Z.a.cart
					}, c.a.createElement("div", {
						className: Z.a.description
					}, c.a.createElement("img", {
						className: Z.a.crown,
						src: "".concat(r.a.assetPath, "/img/memberships/paywall/fortnitebr/Crown.gif")
					}), o.displayText, " ", t.membershipAlt), c.a.createElement("div", {
						className: Z.a.months
					}, c.a.createElement(y.c, {
						className: Z.a.monthsInput,
						type: "number",
						label: q._("Months", null, {
							hk: "4fMgWk"
						}),
						value: l,
						onChange: this.onMonthsChange
					}), c.a.createElement("div", {
						className: Z.a.days
					}, q._("{numberOfDays} DAYS", [q._param("numberOfDays", 30 * l)], {
						hk: "25no0d"
					}))), c.a.createElement(h.a, {
						amount: new n.BigNumber(s).multipliedBy(l).toString(),
						subredditId: a
					})), u && c.a.createElement("div", {
						className: Z.a.errorMessage
					}, q._("You do not have enough {subredditToken}.", [q._param("subredditToken", i)], {
						hk: "2rNfw8"
					})), c.a.createElement("div", {
						className: Z.a.purchase
					}, c.a.createElement(w, {
						className: Z.a.walletAmount,
						subredditId: a
					}), this.props.isEthereumProvider ? c.a.createElement(j.f, {
						className: Z.a.purchaseButton,
						onClick: this.onEthereumPurchase,
						"data-redditstyle": !0,
						disabled: u
					}, d ? c.a.createElement(O.a, {
						sizePx: 10
					}) : q._("Purchase", null, {
						hk: "1FAV9c"
					})) : c.a.createElement(j.g, {
						redditStyle: !0,
						className: Z.a.purchaseButton,
						href: this.getStellarPurchaseLink(),
						target: "_blank",
						onClick: this.onStellarPurchase
					}, d ? c.a.createElement(O.a, {
						sizePx: 10
					}) : q._("Purchase", null, {
						hk: "1efwHl"
					})))), !this.props.isEthereumProvider && c.a.createElement("div", {
						className: Z.a.purchaseInstructions
					}, q._("Use the button above to generate a transaction URL to purchase a {membershipName}. After the transaction completes, wait a few minutes and then refresh the page to use your new subscription. You can use the same process to add additional months.", [q._param("membershipName", t.membershipAlt)], {
						hk: "321sIV"
					})), c.a.createElement(L, {
						subredditId: a
					}))
				}
			}
			const $ = Object(d.c)({
					isEthereumProvider: v.f,
					meta: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(I.s)(e, s)
					},
					priceInPoints: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(I.s)(e, s).prices.points || "0"
					},
					subscriptionExpiration: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(I.p)(e, s)
					},
					subreddit: T.R,
					subscriptionCryptoDetails: v.o,
					tokenDisplayConversion: v.p,
					tokenName: v.q,
					unlockedToken: v.s,
					wallet: v.g
				}),
				ee = Object(l.b)($, (e, t) => ({
					onFetchSubredditMembership: () => e(Object(m.g)(t.subredditId, !0)),
					onSuccess: () => e(Object(p.e)({
						duration: 1e4,
						kind: S.b.SuccessCommunityGreen,
						text: q._("Your membership purchase was successful! Thank you for your support!", null, {
							hk: "3do7sl"
						})
					})),
					onError: t => e(Object(p.e)({
						duration: 1e4,
						kind: S.b.Error,
						text: t || q._("Something wen't wrong with the purchase. Please try again later.", null, {
							hk: "4rsub"
						})
					}))
				})),
				te = Object(N.c)(Q);
			t.default = Object(C.a)("spPremium", Object(u.a)(ee(te)))
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, s) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/selectors/gov.ts"),
				d = s("./src/reddit/components/Governance/Token/index.m.less"),
				u = s.n(d);
			const m = Object(a.c)({
				tokenSymbol: l.r
			});
			t.a = Object(o.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					s = "".concat(i.a.assetPath, "/").concat(t);
				if (e.grey && s.endsWith(".svg")) {
					const t = "url(".concat(s, ") center/cover");
					return r.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: s
				})
			}))
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/components/Governance/Token/index.tsx"),
				d = s("./src/reddit/helpers/governance/tokens.ts"),
				u = s("./src/reddit/selectors/gov.ts"),
				m = s("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = s.n(m);
			const h = Object(a.c)({
				tokenDisplayConversion: u.p
			});
			t.a = Object(o.b)(h)((function(e) {
				return r.a.createElement("div", {
					className: Object(i.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, r.a.createElement(l.a, {
					className: Object(i.a)(p.a.token, {
						[p.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(d.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/WalletAmount/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2TPDzrAjcCdLfU3_7EaHZL",
				token: "_3dZRq63vG5KsPSrZkkI1Be"
			}
		},
		"./src/reddit/constants/disclaimers.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
				}(n || (n = {}));
			const r = "https://www.redditinc.com/policies/beta-terms-of-service"
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			})), s.d(t, "c", (function() {
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/uniqueId.js"),
				o = s.n(r),
				a = s("./node_modules/raf/index.js"),
				i = s.n(a),
				c = s("./node_modules/react/index.js"),
				l = s.n(c),
				d = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/higherOrderComponents/asModal/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				x = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				v = s.n(x);
			var _ = Object(b.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return l.a.createElement("div", {
						className: v.a.wrapper
					}, l.a.createElement(g.a, {
						className: v.a.titleRow
					}, s), l.a.createElement("div", {
						className: v.a.detailsContainer
					}, t), l.a.createElement(g.a, {
						className: v.a.buttonRow
					}, l.a.createElement(f.f, {
						className: v.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				k = s("./src/reddit/controls/ErrorText/index.m.less"),
				E = s.n(k);
			const w = Object(u.c)({
				activeModalId: h.a
			});
			class N extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(o()())
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
						activeModalId: t,
						className: s,
						errorModalBody: r,
						errorModalTitle: o = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return l.a.createElement("div", {
						className: Object(m.a)(E.a.wrapper, s)
					}, l.a.createElement("span", {
						className: E.a.description,
						ref: this.spanRef
					}, e), c && l.a.createElement("span", {
						className: E.a.moreText,
						onClick: this.toggleModal
					}, a), t === i && l.a.createElement(_, {
						onConfirmed: this.toggleModal,
						title: o
					}, r || e))
				}
			}
			const j = Object(d.b)(w, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(N),
				y = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: r,
						messages: o = []
					} = e, a = o.length ? o : r ? [r] : [];
					return a.length ? l.a.createElement("div", {
						className: t
					}, a.map((e, t) => l.a.createElement(j, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				O = e => l.a.createElement(y, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = j
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, s) {
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
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "d", (function() {
				return _
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/ErrorText/index.tsx"),
				c = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = s("./src/reddit/controls/FormFields/index.m.less"),
				u = s.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const h = a.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				f = e => {
					const {
						label: t,
						children: s,
						inputRef: n,
						className: a
					} = e, i = p(e, ["label", "children", "inputRef", "className"]), c = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, r.a.createElement(h, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, i)), e.label && r.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				g = e => {
					const {
						label: t,
						children: s,
						inputRef: n,
						isInvalid: a,
						className: i,
						redditStyle: c
					} = e, l = p(e, ["label", "children", "inputRef", "isInvalid", "className", "redditStyle"]), d = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, r.a.createElement(h, m({
						innerRef: n
					}, l)), e.label && r.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				x = e => r.a.createElement("div", {
					className: Object(o.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(c.a, {
					className: u.a.plus
				}));
			var v;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(v || (v = {}));
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: v.ADD
						})
					}, this.updateValue = (e, t) => {
						const s = this.props.values.slice();
						s[t] = e.target.value, this.props.onChange(s)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							s = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: v.REMOVE,
							value: s,
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
						label: s,
						placeholder: n,
						errors: o = []
					} = this.props;
					return e.map((e, a) => r.a.createElement(f, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!o[a],
						disabled: t,
						type: "text",
						label: s,
						onChange: e => this.updateValue(e, a),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, r.a.createElement(l.b, {
						className: u.a.trash
					})), !!o[a] && r.a.createElement(i.b, {
						className: u.a.errorText
					}, o[a])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: s,
						maxLength: n,
						addValueText: a,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!n && s.length >= n) && !i;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.multiInputWrapper, e)
					}, t && c && r.a.createElement(x, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && c && r.a.createElement(x, {
						onClick: this.addValue,
						text: a
					}))
				}
			}
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "i", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js");

			function r() {
				return window.ethereum
			}

			function o() {
				const e = r();
				return !(!e || !e.isMetaMask)
			}

			function a() {
				const e = r();
				return e && e.selectedAddress || null
			}

			function i() {
				return r().networkVersion || null
			}

			function c() {
				const e = r();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return a() ? Promise.resolve() : e.enable()
			}
			const l = 4001;
			async function d(e, t, n, o) {
				const [a, i] = await Promise.all([s.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~34b46b25").then(s.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const l = new a.providers.Web3Provider(r()).getSigner(),
					d = new a.Contract(e, i, l),
					u = await d[n](...o);
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
			async function p(e, t, n, r, o) {
				const a = await s.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~34b46b25").then(s.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: c,
						hexZeroPad: l,
						toUtf8Bytes: p
					} = a.utils,
					h = i(n).add(o),
					b = m,
					f = "0x" + [c(1)].concat([b, i(r), i(o)].map(c).map(e => l(e, 32))).concat(c(p(""))).map(e => e.substr(2)).join("");
				return async function(e, t, s, n) {
					return d(e, Promise.resolve(u), "send", [t, s, n])
				}(e, t, h.toString(), f)
			}
			const h = {
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
			async function b(e, t, s) {
				await c();
				const r = a() || "";
				if (t.toLowerCase() !== r.toLowerCase()) throw new Error(n.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [n.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return d(e, Promise.resolve(h), "subscribe", [t, s])
			}

			function f(e) {
				const t = r();
				return new Promise((s, r) => {
					const o = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, o],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) r(e);
						else {
							const e = t && t.result;
							e ? s(e) : r({
								message: n.fbt._("No signature returned from ethereum provider.", null, {
									hk: "eiYBF"
								}).toString()
							})
						}
					})
				})
			}

			function g(e) {
				return new Promise((t, s) => {
					r().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, n) => {
						e || "error" in n ? s("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/governance/stellar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");

			function n(e, t) {
				return "web+stellar:".concat(e, "?") + Object.entries(t).map(e => {
					let [t, s] = e;
					return t + "=" + encodeURIComponent(s)
				}).join("&")
			}

			function r(e, t, s, r, o) {
				const a = {
					destination: s,
					amount: r,
					asset_code: t,
					asset_issuer: e
				};
				return o && (a.memo = o), n("pay", a)
			}

			function o(e, t, s) {
				return n("pay", {
					destination: e,
					amount: s,
					asset_code: t,
					asset_issuer: e,
					memo: "o|membership"
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				r = s("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const s = new n.BigNumber(e),
					r = new n.BigNumber(t);
				return s.dividedToIntegerBy(r).toString()
			}

			function a(e, t) {
				return Object(r.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const s = new n.BigNumber(e),
					r = new n.BigNumber(t);
				return s.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(a);
			const c = e => r.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		}
	}
]);
//# sourceMappingURL=SubredditPremiumBlockchainCheckoutModal.99bd1d4a8c53b9f05e0f.js.map