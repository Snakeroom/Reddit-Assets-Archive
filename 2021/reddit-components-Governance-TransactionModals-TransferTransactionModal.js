// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-TransferTransactionModal.df8dbbacffb6a36c7f10.js
// Retrieved at 12/15/2021, 8:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-TransferTransactionModal"], {
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, n) {
			"use strict";

			function s(e, t, n = 3e4, s = 3e5) {
				return async (r, a, o) => new Promise((c, i) => {
					const d = Date.now() + s,
						l = () => {
							i(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > d) return l();
							const s = Date.now();
							await e(r, a, o);
							const m = await t(a);
							if (m) c();
							else if (!1 === m) i();
							else {
								Date.now() + Math.max(n - (Date.now() - s), 0) < d ? setTimeout(u, n) : l()
							}
						};
					u()
				})
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
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
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/crypto/points.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = n.n(m);
			const b = Object(o.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(u.b)(e, t)
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
				r = n.n(s),
				a = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				o = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				c = n.n(o);

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
		"./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/Approval.m.less": function(e, t, n) {
			e.exports = {
				userIcon: "_2fcZovMmvKOCI8C6QohBfS"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/@ethersproject/address/lib.esm/index.js"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/governance/index.ts"),
				u = n("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/actions/util/pollActionForSuccess.ts"),
				b = n("./src/reddit/endpoints/governance/crypto.ts"),
				v = n("./src/reddit/helpers/crypto/transactions.ts"),
				f = n("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				j = n("./src/reddit/helpers/governance/tokens.ts"),
				O = n("./src/reddit/helpers/trackers/crypto.ts"),
				x = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				T = n("./src/reddit/selectors/crypto/points.ts"),
				A = n("./src/reddit/selectors/crypto/wallet.ts"),
				w = n("./src/reddit/selectors/gov.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				N = n("./src/reddit/components/UserIcon/index.tsx"),
				M = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				I = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				E = n("./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/Approval.m.less"),
				S = n.n(E);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function D(e) {
				const {
					recipient: t
				} = e, n = Object(c.e)(h.k);
				return o.a.createElement(I.a, {
					subredditId: e.subredditId,
					image: o.a.createElement(N.a, {
						className: S.a.userIcon,
						isNSFW: !1,
						userName: t
					}),
					title: k._("Transfer to {recipient}", [k._param("recipient", t === e.recipientAddress ? t : "u/" + t)], {
						hk: "xSmPq"
					}),
					subtitle: n && n.displayText ? k._("From {currentUsername}", [k._param("currentUsername", "u/" + n.displayText)], {
						hk: "onO9l"
					}) : null,
					pointsAmount: e.transferAmount
				})
			}
			const g = e => o.a.createElement(M.b, {
				values: [
					[Object(M.c)(), e.recipientAddress],
					[Object(M.a)(), e.transaction.contractAddress]
				]
			});
			t.default = Object(d.a)((function(e) {
				const {
					onClose: t,
					recipient: n,
					subredditId: a,
					transferAmount: d
				} = e, N = Object(c.d)(), M = Object(x.a)(), I = Object(c.e)(e => Object(h.nb)(e, {
					userName: n
				})), {
					currentPointsAmount: E,
					pointsDetails: S,
					recipientWallet: k
				} = Object(c.e)(Object(i.c)({
					currentPointsAmount: t => Object(w.e)(t, e),
					pointsDetails: t => Object(T.b)(t, e.subredditId),
					recipientWallet: e => I && Object(A.c)(e, {
						subredditId: a,
						userId: I.id
					})
				})), G = null == S ? void 0 : S.contractAddress;
				if (!S || !G) throw new Error("No token contract address");
				const C = function(e, t) {
						const n = null == t ? void 0 : t.publicAddress;
						if (n) return n;
						try {
							if (!!Object(s.a)(e)) return e
						} catch {}
						throw new Error("No recipient address found for points transfer")
					}(n, k),
					F = Object(v.e)(G, C, d),
					L = Object(j.b)(d, S.displayConversion),
					P = e => {
						M(Object(O.c)("transfer", a, L, e))
					},
					U = S.name;
				return o.a.createElement(y.a, {
					approvalOverview: o.a.createElement(D, {
						subredditId: a,
						recipient: n,
						recipientAddress: C,
						transferAmount: d
					}),
					approvalDetails: o.a.createElement(g, {
						transaction: F,
						recipientAddress: C
					}),
					onClose: t,
					onTransactionSuccess: async e => {
						t(), N(function(e) {
							return Object(m.f)(Object(m.e)(r.fbt._("Sending your {pointsName}...", [r.fbt._param("pointsName", e)], {
								hk: "2LuiyB"
							}), _.b.SuccessCommunity))
						}(U)), async function(e, t, n, s, r, a) {
							await Object(f.a)(t, n), await e(Object(p.a)(Object(l.h)({
								subredditId: s
							}), async e => {
								const t = Object(w.e)(e(), {
									subredditId: s
								});
								return r !== t || null
							})), a && e(Object(u.a)({
								subredditId: s,
								userIds: [a]
							}))
						}(N, S, e.hash, a, E, null == I ? void 0 : I.id).then(() => {
							M(Object(O.d)("transfer", a, L)), N(function(e) {
								return Object(m.f)(Object(m.e)(r.fbt._("Your {pointsName} were sent!", [r.fbt._param("pointsName", e)], {
									hk: "4yssJA"
								}), _.b.SuccessCommunityGreen))
							}(U))
						}).catch(e => {
							P(e.toString()), N(function(e) {
								return Object(m.f)(Object(m.e)(r.fbt._("Failed to send your {pointsName}. Try again later", [r.fbt._param("pointsName", e)], {
									hk: "yeMQh"
								}), _.b.Error))
							}(U))
						})
					},
					onTransactionFailure: P,
					subredditId: a,
					transaction: F,
					transactionIntent: Object(b.f)(a, n, C, d)
				})
			}))
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e, t) {
				const [n, r] = Object(s.useState)(e);
				return [n, e => {
					t.current && r(e)
				}]
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-TransferTransactionModal.df8dbbacffb6a36c7f10.js.map