// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-TransferTransactionModal.505b5137ffe9e7367160.js
// Retrieved at 3/18/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-TransferTransactionModal"], {
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, n) {
			"use strict";

			function s(e, t, n = 3e4, s = 3e5) {
				return async (r, o, a) => new Promise((c, i) => {
					const d = Date.now() + s,
						l = () => {
							i(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > d) return l();
							const s = Date.now();
							await e(r, o, a);
							const m = await t(o);
							if (m) c();
							else if (!1 === m) i();
							else {
								Date.now() + Math.max(n - (Date.now() - s), 0) < d ? setTimeout(u, n) : l()
							}
						};
					setTimeout(u, n)
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
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/gov.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = n.n(m);
			const b = Object(a.c)({
				tokenDisplayConversion: u.m
			});
			t.a = Object(o.b)(b)((function(e) {
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
				r = n.n(s),
				o = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				a = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				c = n.n(a);

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
				}, r.a.createElement(o.a, {
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
			var s = n("./node_modules/ethers/utils/address.js"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
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
				T = n("./src/reddit/selectors/crypto/wallet.ts"),
				w = n("./src/reddit/selectors/gov.ts"),
				A = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				N = n("./src/reddit/components/UserIcon/index.tsx"),
				y = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				M = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				k = n("./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/Approval.m.less"),
				E = n.n(k);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function S(e) {
				const {
					recipient: t
				} = e, n = Object(c.e)(A.j);
				return a.a.createElement(M.a, {
					subredditId: e.subredditId,
					image: a.a.createElement(N.a, {
						className: E.a.userIcon,
						isNSFW: !1,
						userName: t
					}),
					title: I._("Transfer to {recipient}", [I._param("recipient", t === e.recipientAddress ? t : "u/" + t)], {
						hk: "xSmPq"
					}),
					subtitle: n && n.displayText ? I._("From {currentUsername}", [I._param("currentUsername", "u/" + n.displayText)], {
						hk: "onO9l"
					}) : null,
					pointsAmount: e.transferAmount
				})
			}
			const g = e => a.a.createElement(y.b, {
				values: [
					[Object(y.c)(), e.recipientAddress],
					[Object(y.a)(), e.transaction.contractAddress]
				]
			});
			t.default = Object(d.a)((function(e) {
				var t, n;
				const {
					onClose: o,
					recipient: d,
					subredditId: N,
					transferAmount: y
				} = e, M = Object(c.d)(), k = Object(x.a)(), E = Object(c.e)(e => Object(A.nb)(e, {
					userName: d
				})), {
					currentPointsAmount: I,
					pointsName: C,
					recipientWallet: D,
					tokenConversion: G,
					walletProvider: F
				} = Object(c.e)(Object(i.c)({
					currentPointsAmount: t => Object(w.h)(t, e),
					pointsName: t => Object(w.n)(t, e),
					recipientWallet: e => E && Object(T.c)(e, {
						subredditId: N,
						userId: E.id
					}),
					tokenConversion: t => Object(w.m)(t, e),
					walletProvider: t => Object(w.r)(t, e)
				}));
				if (!F) throw new Error("No wallet provider");
				const P = null === (n = null === (t = F.extra) || void 0 === t ? void 0 : t.contracts) || void 0 === n ? void 0 : n.unlocked.address;
				if (!P) throw new Error("No token contract address");
				const L = function(e, t) {
						const n = null == t ? void 0 : t.publicAddress;
						if (n) return n;
						try {
							if (!!Object(s.getAddress)(e)) return e
						} catch {}
						throw new Error("No recipient address found for points transfer")
					}(d, D),
					U = Object(v.e)(P, L, y),
					Y = Object(j.b)(y, G),
					H = e => {
						k(Object(O.a)("transfer", N, Y, e))
					};
				return a.a.createElement(h.a, {
					approvalOverview: a.a.createElement(S, {
						subredditId: N,
						recipient: d,
						recipientAddress: L,
						transferAmount: y
					}),
					approvalDetails: a.a.createElement(g, {
						transaction: U,
						recipientAddress: L
					}),
					onClose: o,
					onTransactionSuccess: async e => {
						o(), M(function(e) {
							return Object(m.f)(Object(m.e)(r.fbt._("Sending your {pointsName}...", [r.fbt._param("pointsName", e)], {
								hk: "2LuiyB"
							}), _.b.SuccessCommunity))
						}(C)), async function(e, t, n, s, r, o) {
							await Object(f.a)(t, n), await e(Object(p.a)(Object(l.h)({
								subredditId: s
							}), async e => {
								const t = Object(w.h)(e(), {
									subredditId: s
								});
								return r !== t || null
							})), o && e(Object(u.a)({
								subredditId: s,
								userIds: [o]
							}))
						}(M, F, e.hash, N, I, null == E ? void 0 : E.id).then(() => {
							k(Object(O.b)("transfer", N, Y)), M(function(e) {
								return Object(m.f)(Object(m.e)(r.fbt._("Your {pointsName} were sent!", [r.fbt._param("pointsName", e)], {
									hk: "4yssJA"
								}), _.b.SuccessCommunityGreen))
							}(C))
						}).catch(e => {
							H(e.toString()), M(function(e) {
								return Object(m.f)(Object(m.e)(r.fbt._("Failed to send your {pointsName}. Try again later", [r.fbt._param("pointsName", e)], {
									hk: "yeMQh"
								}), _.b.Error))
							}(C))
						})
					},
					onTransactionFailure: H,
					subredditId: N,
					transaction: U,
					transactionIntent: Object(b.f)(N, d, L, y)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-TransferTransactionModal.505b5137ffe9e7367160.js.map