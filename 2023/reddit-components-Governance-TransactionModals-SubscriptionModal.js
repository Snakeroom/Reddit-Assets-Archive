// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.1fcf5378ae75f289a63d.js
// Retrieved at 6/13/2023, 3:50:04 PM by Reddit Dataminer v1.0.0
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
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/crypto/points.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = n.n(m);
			const b = Object(i.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(u.b)(e, n)
				}
			});
			t.a = Object(r.b)(b)((function(e) {
				var t;
				return a.a.createElement("div", {
					className: Object(o.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, a.a.createElement(d.a, {
					className: Object(o.a)(p.a.token, {
						[p.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(l.c)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
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
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				i = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				o = n.n(i);

			function c(e) {
				return a.a.createElement("div", {
					className: o.a.overview
				}, e.image, a.a.createElement("div", {
					className: o.a.description
				}, a.a.createElement("div", {
					className: o.a.grid
				}, a.a.createElement("div", {
					className: o.a.descriptionTitle,
					title: e.title
				}, e.title), a.a.createElement("div", {
					className: o.a.amountCell
				}, a.a.createElement(r.a, {
					amount: e.pointsAmount,
					className: o.a.amount,
					subredditId: e.subredditId
				})), a.a.createElement("div", {
					className: o.a.descriptionSubtitle
				}, e.subtitle), a.a.createElement("div", {
					className: o.a.amountSubtext
				}, e.pointsAmountSubtext))))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/Approval.m.less": function(e, t, n) {
			e.exports = {
				membershipFrame: "_3d6f8dK5CmhujRBpVMFiAh",
				userIcon: "_3sGBEdz4F36DIwM99juN0m",
				frameImage: "_3QaiTrH550H-uSnZCB08V6",
				subredditIcon: "_3OskWJgwwVLSpS6iPc27P8"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return k
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				d = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/endpoints/governance/crypto.ts"),
				m = n("./src/reddit/helpers/crypto/transactions.ts"),
				p = n("./src/reddit/helpers/governance/tokens.ts"),
				b = n("./src/reddit/helpers/trackers/crypto.ts"),
				y = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/models/Badge/managementPage.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/crypto/points.ts"),
				O = n("./src/reddit/selectors/gov.ts"),
				T = n("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				j = n("./src/config.ts"),
				_ = n("./src/reddit/components/SubredditIcon/index.tsx"),
				A = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				I = n("./src/reddit/selectors/economics.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				w = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				g = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				h = n("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/Approval.m.less"),
				N = n.n(h);

			function E(e) {
				const t = Object(i.e)(t => Object(M.X)(t, e)),
					n = Object(i.e)(t => Object(I.r)(t, e.subredditId)),
					a = n.membershipAlt,
					o = n.prices.points,
					c = `${j.a.assetPath}/img/memberships/paywall/${t.name.toLowerCase()}/membership_frame.svg`;
				return r.a.createElement(g.a, {
					subredditId: e.subredditId,
					image: r.a.createElement("div", {
						className: N.a.membershipFrame
					}, r.a.createElement(A.a, {
						className: N.a.userIcon
					}), r.a.createElement("img", {
						className: N.a.frameImage,
						src: c
					}), r.a.createElement(_.b, {
						className: N.a.subredditIcon,
						subredditOrProfile: t
					})),
					title: a,
					subtitle: t.displayText,
					pointsAmount: o,
					pointsAmountSubtext: s.fbt._("Paid monthly, cancel anytime", null, {
						hk: "3vvJQd"
					})
				})
			}
			const S = e => r.a.createElement(w.b, {
				values: [
					[Object(w.c)(), e.transaction.arguments[0]],
					[Object(w.a)(), e.transaction.contractAddress]
				]
			});

			function k(e) {
				const {
					price: t,
					subredditId: n
				} = e, a = Object(i.d)(), j = Object(y.a)(), {
					pointsDetails: _,
					walletAddress: A
				} = Object(i.e)(Object(o.c)({
					pointsDetails: e => Object(f.b)(e, n),
					walletAddress: t => Object(O.g)(t, e)
				}));
				if (!_) return null;
				const I = Object(m.d)(_.contracts.subscriptions.address, A, !0),
					M = Object(p.c)(t, _.displayConversion);
				return r.a.createElement(T.a, {
					approvalOverview: r.a.createElement(E, {
						subredditId: n
					}),
					approvalDetails: r.a.createElement(S, {
						transaction: I
					}),
					onClose: e.onClose,
					onTransactionSuccess: async r => {
						await a(Object(d.f)({
							subredditId: n,
							price: t,
							providerArgs: r
						})), j(Object(b.d)("subscribe", n, M)), a(Object(l.f)({
							duration: 1e4,
							kind: x.b.SuccessCommunityGreen,
							text: s.fbt._("Your purchase was successful! Thank you for your support!", null, {
								hk: "NuVo0"
							})
						})), a(Object(c.c)({
							subredditId: n,
							initialView: v.c.MyBadges
						})), e.onPaymentComplete()
					},
					onTransactionFailure: e => {
						j(Object(b.c)("subscribe", n, M, e))
					},
					subredditId: n,
					transaction: I,
					transactionIntent: Object(u.e)(n),
					transactionIsBlockedOnIOS: !0
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
					experimentName: s.Ie
				}) === s.Wd
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.1fcf5378ae75f289a63d.js.map