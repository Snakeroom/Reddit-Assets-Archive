// https://www.redditstatic.com/desktop2x/SubredditPremiumBlockchainCheckoutModal.48190fcd2d62a2f68169.js
// Retrieved at 8/10/2021, 10:50:15 AM by Reddit Dataminer v1.0.0
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
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const {
				fbt: o
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function a({
				className: e
			}) {
				return r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, o._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2DraqcABbmDSPg3aeck34V",
				link: "_3muga6KLQNKQ__RqkEKo-f"
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
				return K
			}));
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				r = s("./src/config.ts"),
				o = s("./node_modules/lodash/clamp.js"),
				a = s.n(o),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				b = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/prettyPrintNumber/index.ts"),
				v = s("./src/reddit/components/Governance/Token/index.tsx"),
				x = s("./src/reddit/helpers/governance/tokens.ts"),
				g = s("./src/reddit/selectors/crypto/points.ts"),
				E = s("./src/reddit/selectors/gov.ts"),
				w = s("./src/reddit/components/Governance/WalletAmount/index.m.less"),
				_ = s.n(w);
			const N = Object(l.c)({
				latestWallet: E.d,
				pointsDetails: (e, {
					subredditId: t
				}) => Object(g.b)(e, t)
			});
			var k = Object(d.b)(N)((function(e) {
					var t;
					const s = e.latestWallet && e.latestWallet.amount || "0";
					return c.a.createElement("div", {
						className: Object(b.a)(_.a.container, e.className)
					}, "You have", c.a.createElement(v.a, {
						grey: !0,
						className: _.a.token,
						subredditId: e.subredditId
					}), Object(f.a)(Object(x.b)(s, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)))
				})),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/controls/FormFields/index.tsx"),
				y = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				M = s("./src/reddit/featureFlags/component.tsx"),
				P = s("./src/reddit/helpers/governance/ethereum.ts"),
				I = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/selectors/economics.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				B = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/Footer/index.m.less"),
				F = s.n(B);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const L = Object(l.c)({
				meta: (e, {
					subredditId: t
				}) => Object(T.r)(e, t)
			});
			var R = Object(d.b)(L)((function(e) {
					return c.a.createElement("footer", {
						className: F.a.container
					}, D._("By purchasing a {membershipName}, you agree to the {=Reddit User Agreement} and {Previews Terms of Service}.", [D._param("membershipName", e.meta.membershipAlt), D._param("=Reddit User Agreement", c.a.createElement("a", {
						className: F.a.link,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, D._("Reddit User Agreement", null, {
						hk: "4v3e6d"
					}))), D._param("Previews Terms of Service", c.a.createElement(A.a, {
						className: F.a.link
					}))], {
						hk: "4oPviM"
					}))
				})),
				H = s("./src/reddit/icons/svgs/Close/index.tsx"),
				G = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/Header/index.m.less"),
				W = s.n(G);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const V = Object(l.c)({
				meta: (e, {
					subredditId: t
				}) => Object(T.r)(e, t)
			});
			var X = Object(d.b)(V)((function(e) {
					const {
						meta: t
					} = e;
					return c.a.createElement("header", {
						className: W.a.container
					}, c.a.createElement("div", {
						className: W.a.text
					}, U._("Purchase {membership name}", [U._param("membership name", t.membershipAlt)], {
						hk: "OO3Gk"
					})), c.a.createElement(H.a, {
						className: W.a.close,
						onClick: e.onClose
					}))
				})),
				Y = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.m.less"),
				Z = s.n(Y);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var K;
			! function(e) {
				e[e.Badge = 0] = "Badge", e[e.Subscription = 1] = "Subscription"
			}(K || (K = {}));
			const q = 5e3;
			class J extends c.a.Component {
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
					}, this.onPurchase = async () => {
						var e, t, s;
						const n = null === (s = null === (t = null === (e = this.props.pointsDetails) || void 0 === e ? void 0 : e.contracts) || void 0 === t ? void 0 : t.subscriptions) || void 0 === s ? void 0 : s.address;
						if (!n) throw new Error("could not find subscription contract address");
						this.setState({
							purchasePending: !0
						}), Object(P.h)(n, this.props.wallet.publicAddress, this.state.numMonths).then(() => {
							this.pollForMembership()
						}).catch(e => {
							this.props.onError(e.message), this.setState({
								purchasePending: !1
							})
						})
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
				pollForMembership() {
					if (!this.pollForMembershipSuccessTimeout) {
						const e = this.props.subscriptionExpiration;
						let t = 0;
						this.pollForMembershipSuccessTimeout = window.setInterval(async () => {
							await this.props.onFetchSubredditMembership(), this.props.subscriptionExpiration !== e ? (this.props.onSuccess(), this.props.onClose(), this.stopPollingForMembership()) : t > 30 && (this.props.onError(z._("No membership found. Please check again after waiting for transaction to succeed, or try again if it failed.", null, {
								hk: "1KIJGC"
							})), this.setState({
								purchasePending: !1
							}), this.stopPollingForMembership()), t++
						}, q)
					}
				}
				stopPollingForMembership() {
					this.pollForMembershipSuccessTimeout && (window.clearTimeout(this.pollForMembershipSuccessTimeout), this.pollForMembershipSuccessTimeout = null)
				}
				render() {
					const {
						onClose: e,
						meta: t,
						pointsDetails: s,
						priceInPoints: o,
						subreddit: a,
						subredditId: i
					} = this.props, {
						numMonths: d,
						purchasePending: l
					} = this.state, u = d > this.getMonthsUserCanAfford();
					return c.a.createElement("div", {
						className: Z.a.container
					}, c.a.createElement(X, {
						subredditId: i,
						onClose: e
					}), c.a.createElement("div", {
						className: Z.a.content
					}, c.a.createElement("div", {
						className: Z.a.cart
					}, c.a.createElement("div", {
						className: Z.a.description
					}, c.a.createElement("img", {
						className: Z.a.crown,
						src: `${r.a.assetPath}/img/memberships/paywall/fortnitebr/Crown.gif`
					}), a.displayText, " ", t.membershipAlt), c.a.createElement("div", {
						className: Z.a.months
					}, c.a.createElement(O.c, {
						className: Z.a.monthsInput,
						type: "number",
						label: z._("Months", null, {
							hk: "4fMgWk"
						}),
						value: d,
						onChange: this.onMonthsChange
					}), c.a.createElement("div", {
						className: Z.a.days
					}, z._("{numberOfDays} DAYS", [z._param("numberOfDays", 30 * d)], {
						hk: "25no0d"
					}))), c.a.createElement(h.a, {
						amount: new n.BigNumber(o).multipliedBy(d).toString(),
						subredditId: i
					})), u && c.a.createElement("div", {
						className: Z.a.errorMessage
					}, z._("You do not have enough {subredditToken}.", [z._param("subredditToken", null == s ? void 0 : s.name)], {
						hk: "2rNfw8"
					})), c.a.createElement("div", {
						className: Z.a.purchase
					}, c.a.createElement(k, {
						className: Z.a.walletAmount,
						subredditId: i
					}), c.a.createElement(C.i, {
						className: Z.a.purchaseButton,
						onClick: this.onPurchase,
						"data-redditstyle": !0,
						disabled: u
					}, l ? c.a.createElement(y.a, {
						sizePx: 10
					}) : z._("Purchase", null, {
						hk: "1FAV9c"
					})))), c.a.createElement(R, {
						subredditId: i
					}))
				}
			}
			const Q = Object(l.c)({
					meta: (e, {
						subredditId: t
					}) => Object(T.r)(e, t),
					pointsDetails: (e, {
						subredditId: t
					}) => Object(g.b)(e, t),
					priceInPoints: (e, {
						subredditId: t
					}) => Object(T.r)(e, t).prices.points || "0",
					subscriptionExpiration: (e, {
						subredditId: t
					}) => Object(T.o)(e, t),
					subreddit: S.T,
					wallet: E.d
				}),
				$ = Object(d.b)(Q, (e, t) => ({
					onFetchSubredditMembership: () => e(Object(m.g)(t.subredditId, !0)),
					onSuccess: () => e(Object(p.f)({
						duration: 1e4,
						kind: I.b.SuccessCommunityGreen,
						text: z._("Your membership purchase was successful! Thank you for your support!", null, {
							hk: "3do7sl"
						})
					})),
					onError: t => e(Object(p.f)({
						duration: 1e4,
						kind: I.b.Error,
						text: t || z._("Something wen't wrong with the purchase. Please try again later.", null, {
							hk: "4rsub"
						})
					}))
				})),
				ee = Object(j.c)(J);
			t.default = Object(M.a)("spSpecialMemberships", Object(u.a)($(ee)))
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
				d = s("./src/reddit/selectors/crypto/points.ts"),
				l = s("./src/reddit/components/Governance/Token/index.m.less"),
				u = s.n(l);
			const m = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(d.b)(e, t)
			});
			t.a = Object(o.b)(m)((function(e) {
				var t;
				const s = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!s) return null;
				const n = e.grey ? s.greyVector || s.grey : s.filledVector || s.filled,
					o = `${i.a.assetPath}/${n}`;
				if (e.grey && o.endsWith(".svg")) {
					const t = `url(${o}) center/cover`;
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
					src: o
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
				d = s("./src/reddit/components/Governance/Token/index.tsx"),
				l = s("./src/reddit/helpers/governance/tokens.ts"),
				u = s("./src/reddit/selectors/crypto/points.ts"),
				m = s("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = s.n(m);
			const h = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(u.b)(e, t)
			});
			t.a = Object(o.b)(h)((function(e) {
				var t;
				return r.a.createElement("div", {
					className: Object(i.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, r.a.createElement(d.a, {
					className: Object(i.a)(p.a.token, {
						[p.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(l.b)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/WalletAmount/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2TPDzrAjcCdLfU3_7EaHZL",
				token: "_3dZRq63vG5KsPSrZkkI1Be"
			}
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
				return C
			})), s.d(t, "c", (function() {
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/uniqueId.js"),
				o = s.n(r),
				a = s("./node_modules/raf/index.js"),
				i = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/higherOrderComponents/asModal/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				x = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				g = s.n(x);
			var E = Object(b.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: g.a.wrapper
					}, d.a.createElement(v.a, {
						className: g.a.titleRow
					}, s), d.a.createElement("div", {
						className: g.a.detailsContainer
					}, t), d.a.createElement(v.a, {
						className: g.a.buttonRow
					}, d.a.createElement(f.i, {
						className: g.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				w = s("./src/reddit/controls/ErrorText/index.m.less"),
				_ = s.n(w);
			const N = Object(u.c)({
				activeModalId: h.a
			});
			class k extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`
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
					return d.a.createElement("div", {
						className: Object(m.a)(_.a.wrapper, s)
					}, d.a.createElement("span", {
						className: _.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: _.a.moreText,
						onClick: this.toggleModal
					}, a), t === i && d.a.createElement(E, {
						onConfirmed: this.toggleModal,
						title: o
					}, r || e))
				}
			}
			const j = Object(l.b)(N, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(k),
				C = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: r,
						messages: o = []
					} = e, a = o.length ? o : r ? [r] : [];
					return a.length ? d.a.createElement("div", {
						className: t
					}, a.map((e, t) => d.a.createElement(j, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				O = e => d.a.createElement(C, {
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
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/ErrorText/index.tsx"),
				c = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = s("./src/reddit/controls/FormFields/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = a.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: s,
						inputRef: n,
						className: a,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, r.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, i)), e.label && r.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: s,
						inputRef: n,
						isInvalid: a,
						className: i,
						redditStyle: c,
						...d
					} = e, l = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: a,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, r.a.createElement(p, m({
						innerRef: n
					}, d)), e.label && r.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				v = e => r.a.createElement("div", {
					className: Object(o.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(c.a, {
					className: u.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: x.ADD
						})
					}, this.updateValue = (e, t) => {
						const s = this.props.values.slice();
						s[t] = e.target.value, this.props.onChange(s)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							s = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: x.REMOVE,
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
					return e.map((e, a) => r.a.createElement(b, {
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
					}, r.a.createElement(d.b, {
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
					}, t && c && r.a.createElement(v, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && c && r.a.createElement(v, {
						onClick: this.addValue,
						text: a
					}))
				}
			}
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "j", (function() {
				return v
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
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
				const e = r();
				return (null == e ? void 0 : e.networkVersion) || null
			}

			function c() {
				const e = r();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return a() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, n, o) {
				const [a, i] = await Promise.all([Promise.all([s.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"), s.e("CryptoLibEthers")]).then(s.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const d = new a.providers.Web3Provider(r()).getSigner(),
					l = new a.Contract(e, i, d),
					u = await l[n](...o);
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
				const a = await Promise.all([s.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"), s.e("CryptoLibEthers")]).then(s.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers),
					{
						BigNumber: i
					} = a,
					{
						hexlify: c,
						hexZeroPad: d,
						toUtf8Bytes: p
					} = a.utils,
					h = i.from(n).add(o),
					b = m,
					f = "0x" + [c(1)].concat([c(b), i.from(r).toHexString(), i.from(o).toHexString()].map(e => d(e, 32))).concat(c(p(""))).map(e => e.substr(2)).join("");
				return async function(e, t, s, n) {
					return l(e, Promise.resolve(u), "send", [t, s, n])
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
				return l(e, Promise.resolve(h), "subscribe", [t, s])
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

			function v(e) {
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
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				r = s("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const s = new n.BigNumber(e),
					r = new n.BigNumber(t || 1);
				return s.dividedToIntegerBy(r).toString()
			}

			function a(e, t) {
				return Object(r.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const s = new n.BigNumber(e),
					r = new n.BigNumber(t || 1);
				return s.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, r.a.createElement("g", {
				stroke: "none"
			}, r.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
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
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, s) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/Inline/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("inlineRow", o.a)
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx");
			const r = [],
				o = {},
				a = (e, t) => {
					const s = p(e, t);
					if (s) return s.mainHeader
				},
				i = (e, t) => {
					const s = p(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				c = (e, t) => {
					const s = p(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : o
				},
				d = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const s = d(e, t),
						n = s && s.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				u = (e, t) => {
					const s = d(e, t);
					return s && s.amount || "0"
				},
				m = (e, t) => {
					const s = Object(n.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || r
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumBlockchainCheckoutModal.48190fcd2d62a2f68169.js.map