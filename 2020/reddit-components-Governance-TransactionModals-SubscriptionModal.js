// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.6ef58ab8986b37b50f29.js
// Retrieved at 10/5/2020, 8:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-SubscriptionModal"], {
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
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./src/reddit/components/Governance/Token/index.tsx"),
				l = s("./src/reddit/helpers/governance/tokens.ts"),
				m = s("./src/reddit/selectors/gov.ts"),
				u = s("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				b = s.n(u);
			const p = Object(o.c)({
				tokenDisplayConversion: m.o
			});
			t.a = Object(a.b)(p)((function(e) {
				return r.a.createElement("div", {
					className: Object(c.a)(b.a.container, e.className, {
						[b.a.small]: e.small
					})
				}, r.a.createElement(i.a, {
					className: Object(c.a)(b.a.token, {
						[b.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(d.a)(Object(l.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less": function(e, t, s) {
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
		"./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				o = s("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				c = s.n(o);

			function d(e) {
				return r.a.createElement("div", {
					className: c.a.overview
				}, e.image, r.a.createElement("div", {
					className: c.a.description
				}, r.a.createElement("div", {
					className: c.a.grid
				}, r.a.createElement("div", {
					className: c.a.descriptionTitle,
					title: e.title
				}, e.title), r.a.createElement("div", {
					className: c.a.amountCell
				}, r.a.createElement(a.a, {
					amount: e.pointsAmount,
					className: c.a.amount,
					subredditId: e.subredditId
				})), r.a.createElement("div", {
					className: c.a.descriptionSubtitle
				}, e.subtitle), r.a.createElement("div", {
					className: c.a.amountSubtext
				}, e.pointsAmountSubtext))))
			}
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/Approval.m.less": function(e, t, s) {
			e.exports = {
				membershipFrame: "_3d6f8dK5CmhujRBpVMFiAh",
				userIcon: "_3sGBEdz4F36DIwM99juN0m",
				frameImage: "_3QaiTrH550H-uSnZCB08V6",
				subredditIcon: "_3OskWJgwwVLSpS6iPc27P8"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "default", (function() {
				return S
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				i = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/endpoints/governance/crypto.ts"),
				u = s("./src/reddit/helpers/crypto/transactions.ts"),
				b = s("./src/reddit/helpers/governance/tokens.ts"),
				p = s("./src/reddit/helpers/trackers/crypto.ts"),
				v = s("./src/reddit/hooks/useTracking.ts"),
				x = s("./src/reddit/models/Badge/managementPage.ts"),
				O = s("./src/reddit/models/Toast/index.ts"),
				j = s("./src/reddit/selectors/gov.ts"),
				_ = s("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				A = s("./src/config.ts"),
				f = s("./src/reddit/components/SubredditIcon/index.tsx"),
				w = s("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				I = s("./src/reddit/selectors/economics.ts"),
				T = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				M = s("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				h = s("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/Approval.m.less"),
				N = s.n(h);

			function k(e) {
				const t = Object(o.d)(t => Object(T.S)(t, e)),
					s = Object(o.d)(t => Object(I.s)(t, e.subredditId)),
					r = s.membershipAlt,
					c = s.prices.points,
					d = "".concat(A.a.assetPath, "/img/memberships/paywall/").concat(t.name.toLowerCase(), "/membership_frame.svg");
				return a.a.createElement(M.a, {
					subredditId: e.subredditId,
					image: a.a.createElement("div", {
						className: N.a.membershipFrame
					}, a.a.createElement(w.a, {
						className: N.a.userIcon
					}), a.a.createElement("img", {
						className: N.a.frameImage,
						src: d
					}), a.a.createElement(f.b, {
						className: N.a.subredditIcon,
						subredditOrProfile: t
					})),
					title: r,
					subtitle: t.displayText,
					pointsAmount: c,
					pointsAmountSubtext: n.fbt._("Paid monthly, cancel anytime", null, {
						hk: "3vvJQd"
					})
				})
			}
			const E = e => a.a.createElement(g.b, {
				values: [
					[Object(g.c)(), e.transaction.arguments[0]],
					[Object(g.a)(), e.transaction.contractAddress]
				]
			});

			function S(e) {
				const {
					price: t,
					subredditId: s
				} = e, r = Object(o.c)(), A = Object(v.a)(), {
					tokenConversion: f,
					walletProvider: w,
					walletAddress: I
				} = Object(o.d)(Object(c.c)({
					tokenConversion: t => Object(j.o)(t, e),
					walletProvider: t => Object(j.t)(t, e),
					walletAddress: t => Object(j.s)(t, e)
				})), T = Object(u.c)(w.extra.contracts.subscriptions.address, I, !0), g = Object(b.b)(t, f);
				return a.a.createElement(_.a, {
					approvalOverview: a.a.createElement(k, {
						subredditId: s
					}),
					approvalDetails: a.a.createElement(E, {
						transaction: T
					}),
					onClose: e.onClose,
					onTransactionSuccess: async a => {
						await r(Object(i.f)({
							subredditId: s,
							price: t,
							providerArgs: a
						})), A(Object(p.b)("subscribe", s, g)), r(Object(l.e)({
							duration: 1e4,
							kind: O.b.SuccessCommunityGreen,
							text: n.fbt._("Your purchase was successful! Thank you for your support!", null, {
								hk: "NuVo0"
							})
						})), r(Object(d.c)({
							subredditId: s,
							initialView: x.c.MyBadges
						})), e.onPaymentComplete()
					},
					onTransactionFailure: e => {
						A(Object(p.a)("subscribe", s, g, e))
					},
					subredditId: s,
					transaction: T,
					transactionIntent: Object(m.d)(s),
					transactionIsBlockedOnIOS: !0
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.6ef58ab8986b37b50f29.js.map