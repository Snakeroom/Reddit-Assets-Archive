// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.a2828caf019c039734a7.js
// Retrieved at 9/21/2020, 7:10:07 PM by Reddit Dataminer v1.0.0
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
				m = n("./src/reddit/selectors/gov.ts"),
				u = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				b = n.n(u);
			const p = Object(o.c)({
				tokenDisplayConversion: m.p
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
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less": function(e, t, n) {
			e.exports = {
				overview: "_3vbYFraj9qRr9wXp4mcPUn",
				description: "_1SZ6yxzmSfQKpV9QOquYaR",
				grid: "jh8B-AY4740kpxlHw2YDW",
				descriptionTitle: "iGBU2u1c8RwaU1r6hphWt",
				amountSubtext: "_28HHYVa7-RIY6X_ZjCpCAb",
				descriptionSubtitle: "_3nbUm4QjlldCfIOsi_zYWh",
				amountCell: "ftLHNRLY2TdwcJtKSvldG",
				amount: "_3sfSvH2g-yH3GQObK-yNFD"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				o = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				c = n.n(o);

			function i(e) {
				return a.a.createElement("div", {
					className: c.a.overview
				}, e.image, a.a.createElement("div", {
					className: c.a.description
				}, a.a.createElement("div", {
					className: c.a.grid
				}, a.a.createElement("div", {
					className: c.a.descriptionTitle,
					title: e.title
				}, e.title), a.a.createElement("div", {
					className: c.a.amountCell
				}, a.a.createElement(r.a, {
					amount: e.pointsAmount,
					className: c.a.amount,
					subredditId: e.subredditId
				})), a.a.createElement("div", {
					className: c.a.descriptionSubtitle
				}, e.subtitle), a.a.createElement("div", {
					className: c.a.amountSubtext
				}, e.pointsAmountSubtext))))
			}
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
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/Approval.m.less": function(e, t, n) {
			e.exports = {
				membershipFrame: "_3d6f8dK5CmhujRBpVMFiAh",
				userIcon: "_3sGBEdz4F36DIwM99juN0m",
				frameImage: "_3QaiTrH550H-uSnZCB08V6",
				subredditIcon: "_3OskWJgwwVLSpS6iPc27P8"
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
				m = n("./src/reddit/endpoints/governance/crypto.ts"),
				u = n("./src/reddit/featureFlags/component.tsx"),
				b = n("./src/reddit/helpers/crypto/transactions.ts"),
				p = n("./src/reddit/helpers/governance/tokens.ts"),
				v = n("./src/reddit/helpers/trackers/crypto.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/models/Badge/managementPage.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/gov.ts"),
				h = n("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				f = n("./src/config.ts"),
				T = n("./src/reddit/components/SubredditIcon/index.tsx"),
				g = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				E = n("./src/reddit/selectors/economics.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				k = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				w = n("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/Approval.m.less"),
				I = n.n(w);

			function y(e) {
				const t = Object(o.d)(t => Object(M.S)(t, e)),
					n = Object(o.d)(t => Object(E.s)(t, e.subredditId)),
					a = n.membershipAlt,
					c = n.prices.points,
					i = "".concat(f.a.assetPath, "/img/memberships/paywall/").concat(t.name.toLowerCase(), "/membership_frame.svg");
				return r.a.createElement(k.a, {
					subredditId: e.subredditId,
					image: r.a.createElement("div", {
						className: I.a.membershipFrame
					}, r.a.createElement(g.a, {
						className: I.a.userIcon
					}), r.a.createElement("img", {
						className: I.a.frameImage,
						src: i
					}), r.a.createElement(T.b, {
						className: I.a.subredditIcon,
						subredditOrProfile: t
					})),
					title: a,
					subtitle: t.displayText,
					pointsAmount: c,
					pointsAmountSubtext: s.fbt._("Paid monthly, cancel anytime", null, {
						hk: "3vvJQd"
					})
				})
			}
			const C = e => r.a.createElement(N.b, {
				values: [
					[Object(N.c)(), e.transaction.arguments[0]],
					[Object(N.a)(), e.transaction.contractAddress]
				]
			});
			var S = n("./src/lib/addQueryParams/index.ts"),
				A = n("./src/lib/prettyPrintNumber/index.ts"),
				G = n("./src/reddit/components/Governance/Token/index.tsx"),
				D = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx"),
				B = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx"),
				U = n("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.m.less"),
				R = n.n(U);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const H = Object(c.c)({
				subredditName: (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = Object(M.S)(e, {
						subredditId: n
					});
					return s && s.name || ""
				},
				tokenDisplayConversion: x.p,
				tokenName: x.q,
				userId: e => {
					const t = Object(P.i)(e);
					return t ? t.id : ""
				}
			});
			var Q = Object(o.b)(H)((function(e) {
				const {
					correlationId: t,
					onClose: n,
					price: s,
					subredditId: o,
					subredditName: c,
					tokenDisplayConversion: i,
					tokenName: d,
					userId: l
				} = e, m = Object(_.a)();
				return Object(a.useEffect)(() => {
					m(Object(D.a)(t))
				}, [t, m]), r.a.createElement(L.a, {
					onClose: n,
					title: F._("Continue in the Mobile App", null, {
						hk: "3seGfx"
					}),
					header: F._("Approve this transaction with Reddit Vault", null, {
						hk: "4dRYKa"
					}),
					content: r.a.createElement(r.a.Fragment, null, r.a.createElement(B.a, {
						index: "1"
					}, F._("Scan the QR code with your Camera app", null, {
						hk: "DeLcL"
					})), r.a.createElement(B.a, {
						index: "2"
					}, F._("Use that link to open your Vault in the Reddit app", null, {
						hk: "2KCtg7"
					})), r.a.createElement(B.a, {
						index: "3"
					}, F._("Approve the transaction to start your monthly membership subscription", null, {
						hk: "1XiP6x"
					}))),
					qrUrl: Object(S.a)("http://www.reddit.com/vault/subscribe", {
						u: l,
						s: o,
						sn: c
					}),
					amount: r.a.createElement("div", {
						className: R.a.amount
					}, r.a.createElement("div", null, r.a.createElement(G.a, {
						className: R.a.tokenIcon,
						subredditId: o
					})), r.a.createElement("div", {
						className: R.a.total
					}, F._("{price} /mo", [F._param("price", Object(A.a)(Object(p.b)(s, i)) + " " + d)], {
						hk: "2sgoC6"
					})))
				})
			}));
			t.default = Object(u.a)("spWebTransactions", (function(e) {
				const {
					price: t,
					subredditId: n
				} = e, a = Object(o.c)(), u = Object(_.a)(), {
					tokenConversion: f,
					walletProvider: T,
					walletAddress: g
				} = Object(o.d)(Object(c.c)({
					tokenConversion: t => Object(x.p)(t, e),
					walletProvider: t => Object(x.u)(t, e),
					walletAddress: t => Object(x.t)(t, e)
				})), E = Object(b.c)(T.extra.contracts.subscriptions.address, g, !0), M = Object(p.b)(t, f);
				return r.a.createElement(h.a, {
					approvalOverview: r.a.createElement(y, {
						subredditId: n
					}),
					approvalDetails: r.a.createElement(C, {
						transaction: E
					}),
					onClose: e.onClose,
					onTransactionSuccess: async r => {
						await a(Object(d.f)({
							subredditId: n,
							price: t,
							providerArgs: r
						})), u(Object(v.b)("subscribe", n, M)), a(Object(l.e)({
							duration: 1e4,
							kind: O.b.SuccessCommunityGreen,
							text: s.fbt._("Your purchase was successful! Thank you for your support!", null, {
								hk: "NuVo0"
							})
						})), a(Object(i.c)({
							subredditId: n,
							initialView: j.c.MyBadges
						})), e.onPaymentComplete()
					},
					onTransactionFailure: e => {
						u(Object(v.a)("subscribe", n, M, e))
					},
					subredditId: n,
					transaction: E,
					transactionIntent: Object(m.d)(n),
					transactionIsBlockedOnIOS: !0
				})
			}), Q)
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
				return m
			})), n.d(t, "a", (function() {
				return u
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
				m = () => e => Object.assign(Object.assign({}, Object(s.defaults)(e)), {
					source: "meta",
					action: "click",
					noun: "learn_more_create_vault_button"
				}),
				u = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.a2828caf019c039734a7.js.map