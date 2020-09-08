// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.e514c2c73d3a82031583.js
// Retrieved at 9/8/2020, 12:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-SubscriptionModal"], {
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/gov.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				b = n.n(m);
			const p = Object(o.c)({
				tokenDisplayConversion: u.p
			});
			t.a = Object(r.b)(p)((function(e) {
				return a.a.createElement("div", {
					className: Object(c.a)(b.a.container, e.className, {
						[b.a.small]: e.small
					})
				}, a.a.createElement(d.a, {
					className: Object(c.a)(b.a.token, {
						[b.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(i.a)(Object(l.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				o = n.n(r);
			const c = e => a.a.createElement("div", {
				className: o.a.bullet
			}, a.a.createElement("div", {
				className: o.a.circle
			}, e.index), e.children)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/qrcode/lib/browser.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class d extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						dataURL: null
					}
				}
				componentDidMount() {
					this.updateDataURL()
				}
				componentDidUpdate(e) {
					e.url !== this.props.url && this.updateDataURL()
				}
				async updateDataURL() {
					const e = await a.a.toDataURL(this.props.url, {
						color: {
							dark: this.props.color || Object(i.a)(this.props).button,
							light: Object(i.a)(this.props).body
						},
						margin: 0,
						width: 176
					});
					this.setState({
						dataURL: e
					})
				}
				render() {
					const {
						dataURL: e
					} = this.state;
					return e ? o.a.createElement("img", {
						src: e
					}) : null
				}
			}
			t.a = Object(c.a)(d)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "zf2hn2CERT9hR1pMinJ8F",
				header: "_3Qbr92L8VyuinXjEu3tL3Z",
				title: "_3bzQcWx2T0t87zOlgxrRKU",
				closeButton: "_22lrdZNOZAr7T7zmwmjUvJ",
				body: "_3Gcx8rw4-_lVDd-C1xmCEi",
				leftSection: "_3YqVpshpU6XQk203i6QdDy",
				sectionHeader: "_1ubUpPIvDdZW-u31PFTQzQ",
				content: "_1vBcEJHUketYOZJIkZpJEH",
				bullet: "_1NkUPpb7srAhbim5_nyFUH",
				circle: "_3dmqOAtE4YgxGinHtv6QZs",
				rightSection: "_2KqtJ5hLjiAZnv3xLL4_M6",
				qrCode: "_14NzP1hK14fTKLhwIn2aDG",
				amount: "yAJDmHckBS4VSNkr7oGi4"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx"),
				i = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				d = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(r.a)((function(e) {
				const {
					amount: t,
					content: n,
					header: s,
					onClose: r,
					qrUrl: i,
					title: l
				} = e;
				return a.a.createElement("div", {
					className: d.a.container
				}, a.a.createElement("header", {
					className: d.a.header
				}, a.a.createElement("div", {
					className: d.a.title
				}, l), a.a.createElement(o.a, {
					className: d.a.closeButton,
					onClick: r
				})), a.a.createElement("div", {
					className: d.a.body
				}, a.a.createElement("section", {
					className: d.a.leftSection
				}, a.a.createElement("div", {
					className: d.a.sectionHeader
				}, s), a.a.createElement("div", {
					className: d.a.content
				}, n)), a.a.createElement("section", {
					className: d.a.rightSection
				}, a.a.createElement("div", {
					className: d.a.qrCode
				}, a.a.createElement(c.a, {
					url: i
				})), t && a.a.createElement("div", {
					className: d.a.amount
				}, t))))
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/ApprovalModal.m.less": function(e, t, n) {
			e.exports = {
				membershipFrame: "Juu0trvCZT2Rzhr68oY9b",
				userIcon: "_2MS9DrMgfuKPwhlmcjw97k",
				frameImage: "_2pDBQmGwo5xCBSNF_CeYun",
				subredditIcon: "_1VHDqqx1sTSZbnslQNCK3i"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.m.less": function(e, t, n) {
			e.exports = {
				amount: "_1RePdl7LuJViX24r_h0COo",
				tokenIcon: "_1v9SDqyMxKa8FzuPNK_2pt",
				total: "_2_SIvxONp1RFtyO-bffkzI"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				d = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/endpoints/governance/crypto.ts"),
				m = n("./src/reddit/featureFlags/component.tsx"),
				b = n("./src/reddit/helpers/crypto/transactions.ts"),
				p = n("./src/reddit/helpers/governance/tokens.ts"),
				v = n("./src/reddit/helpers/trackers/crypto.ts"),
				j = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/models/Badge/managementPage.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/selectors/gov.ts"),
				x = n("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				f = n("./src/config.ts"),
				g = n("./src/reddit/components/SubredditIcon/index.tsx"),
				M = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				T = n("./src/reddit/selectors/economics.ts"),
				k = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/components/Governance/TransactionModals/BaseApprovalModal/index.tsx"),
				E = n("./src/reddit/components/Governance/TransactionModals/BaseApprovalModal/Details.tsx"),
				N = n("./src/reddit/components/Governance/TransactionModals/BaseApprovalModal/Overview.tsx"),
				I = n("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/ApprovalModal.m.less"),
				w = n.n(I);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var A = e => {
					const t = Object(o.d)(t => Object(k.S)(t, e)),
						n = Object(o.d)(t => Object(T.s)(t, e.subredditId)),
						a = n.membershipAlt,
						c = n.prices.points,
						i = "".concat(f.a.assetPath, "/img/memberships/paywall/").concat(t.name.toLowerCase(), "/membership_frame.svg");
					return r.a.createElement(y.a, C({
						overview: r.a.createElement(N.a, {
							subredditId: e.subredditId,
							image: r.a.createElement("div", {
								className: w.a.membershipFrame
							}, r.a.createElement(M.a, {
								className: w.a.userIcon
							}), r.a.createElement("img", {
								className: w.a.frameImage,
								src: i
							}), r.a.createElement(g.b, {
								className: w.a.subredditIcon,
								subredditOrProfile: t
							})),
							title: a,
							subtitle: t.displayText,
							pointsAmount: c,
							pointsAmountSubtext: s.fbt._("Paid monthly, cancel anytime", null, {
								hk: "3vvJQd"
							})
						}),
						details: r.a.createElement(E.b, {
							values: [
								[Object(E.c)(), e.transaction.arguments[0]],
								[Object(E.a)(), e.transaction.contractAddress]
							]
						})
					}, e))
				},
				G = n("./src/lib/addQueryParams/index.ts"),
				S = n("./src/lib/prettyPrintNumber/index.ts"),
				D = n("./src/reddit/components/Governance/Token/index.tsx"),
				P = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx"),
				U = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx"),
				R = n("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.m.less"),
				F = n.n(R);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Q = Object(c.c)({
				subredditName: (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = Object(k.S)(e, {
						subredditId: n
					});
					return s && s.name || ""
				},
				tokenDisplayConversion: h.p,
				tokenName: h.q,
				userId: e => {
					const t = Object(B.i)(e);
					return t ? t.id : ""
				}
			});
			var K = Object(o.b)(Q)((function(e) {
				const {
					correlationId: t,
					onClose: n,
					price: s,
					subredditId: o,
					subredditName: c,
					tokenDisplayConversion: i,
					tokenName: d,
					userId: l
				} = e, u = Object(j.a)();
				return Object(a.useEffect)(() => {
					u(Object(P.a)(t))
				}, [t, u]), r.a.createElement(L.a, {
					onClose: n,
					title: q._("Continue in the Mobile App", null, {
						hk: "3seGfx"
					}),
					header: q._("Approve this transaction with Reddit Vault", null, {
						hk: "4dRYKa"
					}),
					content: r.a.createElement(r.a.Fragment, null, r.a.createElement(U.a, {
						index: "1"
					}, q._("Scan the QR code with your Camera app", null, {
						hk: "DeLcL"
					})), r.a.createElement(U.a, {
						index: "2"
					}, q._("Use that link to open your Vault in the Reddit app", null, {
						hk: "2KCtg7"
					})), r.a.createElement(U.a, {
						index: "3"
					}, q._("Approve the transaction to start your monthly membership subscription", null, {
						hk: "1XiP6x"
					}))),
					qrUrl: Object(G.a)("http://www.reddit.com/vault/subscribe", {
						u: l,
						s: o,
						sn: c
					}),
					amount: r.a.createElement("div", {
						className: F.a.amount
					}, r.a.createElement("div", null, r.a.createElement(D.a, {
						className: F.a.tokenIcon,
						subredditId: o
					})), r.a.createElement("div", {
						className: F.a.total
					}, q._("{price} /mo", [q._param("price", Object(S.a)(Object(p.b)(s, i)) + " " + d)], {
						hk: "2sgoC6"
					})))
				})
			}));
			t.default = Object(m.a)("spWebTransactions", (function(e) {
				const {
					price: t,
					subredditId: n
				} = e, a = Object(o.c)(), m = Object(j.a)(), {
					tokenConversion: f,
					walletProvider: g,
					walletAddress: M
				} = Object(o.d)(Object(c.c)({
					tokenConversion: t => Object(h.p)(t, e),
					walletProvider: t => Object(h.u)(t, e),
					walletAddress: t => Object(h.t)(t, e)
				})), T = Object(b.b)(g.extra.contracts.subscriptions.address, M, !0), k = Object(p.b)(t, f);
				return r.a.createElement(x.a, {
					ApprovalModal: A,
					onClose: e.onClose,
					onTransactionSuccess: async r => {
						await a(Object(d.f)({
							subredditId: n,
							price: t,
							providerArgs: r
						})), m(Object(v.b)("subscribe", n, k)), a(Object(l.e)({
							duration: 1e4,
							kind: _.b.SuccessCommunityGreen,
							text: s.fbt._("Your purchase was successful! Thank you for your support!", null, {
								hk: "NuVo0"
							})
						})), a(Object(i.c)({
							subredditId: n,
							initialView: O.c.MyBadges
						})), e.onPaymentComplete()
					},
					onTransactionFailure: e => {
						m(Object(v.a)("subscribe", n, k, e))
					},
					subredditId: n,
					transaction: T,
					transactionIntent: Object(u.c)(n),
					transactionIsBlockedOnIOS: !0
				})
			}), K)
		},
		"./src/reddit/helpers/trackers/communityPoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const a = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(s.subreddit)(t)
				}),
				r = () => a("view"),
				o = () => a("tap"),
				c = () => a("dismiss"),
				i = () => e => Object.assign(Object.assign({}, Object(s.defaults)(e)), {
					source: "meta",
					action: "view",
					noun: "points_learn_more",
					actionInfo: {
						reason: "deep_link"
					}
				}),
				d = () => e => Object.assign(Object.assign({}, Object(s.defaults)(e)), {
					source: "meta",
					action: "view",
					noun: "points_faq",
					actionInfo: {
						reason: "learn_more"
					}
				}),
				l = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					source: "meta",
					action: "view",
					noun: "points_faq_section",
					actionInfo: {
						paneName: e
					}
				}),
				u = () => e => Object.assign(Object.assign({}, Object(s.defaults)(e)), {
					source: "meta",
					action: "click",
					noun: "learn_more_create_vault_button"
				}),
				m = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					source: "meta",
					action: "click",
					noun: "buy_membership_with_points",
					subreddit: Object(s.subreddit)(t),
					correlationId: e
				}),
				b = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					source: "meta",
					action: "click",
					noun: "cancel_membership_with_points",
					subreddit: Object(s.subredditById)(t, e)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.e514c2c73d3a82031583.js.map