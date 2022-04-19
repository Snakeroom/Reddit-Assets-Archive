// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.5c78349d7c65fe88aa3f.js
// Retrieved at 4/19/2022, 1:00:05 PM by Reddit Dataminer v1.0.0
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
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/components/Governance/Token/index.tsx"),
				l = s("./src/reddit/helpers/governance/tokens.ts"),
				m = s("./src/reddit/selectors/crypto/points.ts"),
				u = s("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = s.n(u);
			const b = Object(o.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(m.b)(e, s)
				}
			});
			t.a = Object(a.b)(b)((function(e) {
				var t;
				return r.a.createElement("div", {
					className: Object(c.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, r.a.createElement(d.a, {
					className: Object(c.a)(p.a.token, {
						[p.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(i.a)(Object(l.b)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
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
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				o = s("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				c = s.n(o);

			function i(e) {
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
				return k
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				d = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/endpoints/governance/crypto.ts"),
				u = s("./src/reddit/helpers/crypto/transactions.ts"),
				p = s("./src/reddit/helpers/governance/tokens.ts"),
				b = s("./src/reddit/helpers/trackers/crypto.ts"),
				v = s("./src/reddit/hooks/useTracking.ts"),
				O = s("./src/reddit/models/Badge/managementPage.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/selectors/crypto/points.ts"),
				_ = s("./src/reddit/selectors/gov.ts"),
				f = s("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				A = s("./src/config.ts"),
				I = s("./src/reddit/components/SubredditIcon/index.tsx"),
				T = s("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				w = s("./src/reddit/selectors/economics.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				M = s("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				h = s("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				N = s("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/Approval.m.less"),
				y = s.n(N);

			function E(e) {
				const t = Object(o.e)(t => Object(g.T)(t, e)),
					s = Object(o.e)(t => Object(w.r)(t, e.subredditId)),
					r = s.membershipAlt,
					c = s.prices.points,
					i = `${A.a.assetPath}/img/memberships/paywall/${t.name.toLowerCase()}/membership_frame.svg`;
				return a.a.createElement(h.a, {
					subredditId: e.subredditId,
					image: a.a.createElement("div", {
						className: y.a.membershipFrame
					}, a.a.createElement(T.a, {
						className: y.a.userIcon
					}), a.a.createElement("img", {
						className: y.a.frameImage,
						src: i
					}), a.a.createElement(I.b, {
						className: y.a.subredditIcon,
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
			const S = e => a.a.createElement(M.b, {
				values: [
					[Object(M.c)(), e.transaction.arguments[0]],
					[Object(M.a)(), e.transaction.contractAddress]
				]
			});

			function k(e) {
				const {
					price: t,
					subredditId: s
				} = e, r = Object(o.d)(), A = Object(v.a)(), {
					pointsDetails: I,
					walletAddress: T
				} = Object(o.e)(Object(c.c)({
					pointsDetails: e => Object(x.b)(e, s),
					walletAddress: t => Object(_.g)(t, e)
				}));
				if (!I) return null;
				const w = Object(u.d)(I.contracts.subscriptions.address, T, !0),
					g = Object(p.b)(t, I.displayConversion);
				return a.a.createElement(f.a, {
					approvalOverview: a.a.createElement(E, {
						subredditId: s
					}),
					approvalDetails: a.a.createElement(S, {
						transaction: w
					}),
					onClose: e.onClose,
					onTransactionSuccess: async a => {
						await r(Object(d.f)({
							subredditId: s,
							price: t,
							providerArgs: a
						})), A(Object(b.d)("subscribe", s, g)), r(Object(l.f)({
							duration: 1e4,
							kind: j.b.SuccessCommunityGreen,
							text: n.fbt._("Your purchase was successful! Thank you for your support!", null, {
								hk: "NuVo0"
							})
						})), r(Object(i.c)({
							subredditId: s,
							initialView: O.c.MyBadges
						})), e.onPaymentComplete()
					},
					onTransactionFailure: e => {
						A(Object(b.c)("subscribe", s, g, e))
					},
					subredditId: s,
					transaction: w,
					transactionIntent: Object(m.e)(s),
					transactionIsBlockedOnIOS: !0
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.5c78349d7c65fe88aa3f.js.map