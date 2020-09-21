// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-TransferTransactionModal.7a45d767f43cb4c30d6d.js
// Retrieved at 9/21/2020, 7:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-TransferTransactionModal"], {
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e4,
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3e5;
				return async (s, o, a) => new Promise((c, i) => {
					const d = Date.now() + r,
						l = () => {
							i(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > d) return l();
							const r = Date.now();
							await e(s, o, a);
							const m = await t(o);
							if (m) c();
							else if (!1 === m) i();
							else {
								Date.now() + Math.max(n - (Date.now() - r), 0) < d ? setTimeout(u, n) : l()
							}
						};
					setTimeout(u, n)
				})
			}
			n.d(t, "a", (function() {
				return r
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				tokenDisplayConversion: u.p
			});
			t.a = Object(o.b)(b)((function(e) {
				return s.a.createElement("div", {
					className: Object(c.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, s.a.createElement(d.a, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				a = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.m.less"),
				c = n.n(a);

			function i(e) {
				return s.a.createElement("div", {
					className: c.a.overview
				}, e.image, s.a.createElement("div", {
					className: c.a.description
				}, s.a.createElement("div", {
					className: c.a.grid
				}, s.a.createElement("div", {
					className: c.a.descriptionTitle,
					title: e.title
				}, e.title), s.a.createElement("div", {
					className: c.a.amountCell
				}, s.a.createElement(o.a, {
					amount: e.pointsAmount,
					className: c.a.amount,
					subredditId: e.subredditId
				})), s.a.createElement("div", {
					className: c.a.descriptionSubtitle
				}, e.subtitle), s.a.createElement("div", {
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
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = n("./node_modules/ethers/utils/address.js"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
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
				v = n("./src/reddit/featureFlags/component.tsx"),
				f = n("./src/reddit/helpers/crypto/transactions.ts"),
				j = n("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				O = n("./src/reddit/helpers/governance/tokens.ts"),
				x = n("./src/reddit/helpers/trackers/crypto.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				w = n("./src/reddit/models/Toast/index.ts"),
				T = n("./src/reddit/selectors/gov.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				A = n("./src/reddit/components/UserIcon/index.tsx"),
				N = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx"),
				g = n("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Overview.tsx"),
				E = n("./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/Approval.m.less"),
				M = n.n(E);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function k(e) {
				const {
					recipient: t
				} = e, n = Object(c.d)(h.i);
				return a.a.createElement(g.a, {
					subredditId: e.subredditId,
					image: a.a.createElement(A.a, {
						className: M.a.userIcon,
						isNSFW: !1,
						userName: t
					}),
					title: S._("Transfer to {recipient}", [S._param("recipient", t === e.recipientAddress ? t : "u/" + t)], {
						hk: "xSmPq"
					}),
					subtitle: n && n.displayText ? S._("From {currentUsername}", [S._param("currentUsername", "u/" + n.displayText)], {
						hk: "onO9l"
					}) : null,
					pointsAmount: e.transferAmount
				})
			}
			const I = e => a.a.createElement(N.b, {
				values: [
					[Object(N.c)(), e.recipientAddress],
					[Object(N.a)(), e.transaction.contractAddress]
				]
			});
			t.default = Object(v.a)("spWebTransactions", Object(d.a)((function(e) {
				var t, n;
				const {
					onClose: o,
					recipient: d,
					subredditId: v,
					transferAmount: A
				} = e, N = Object(c.c)(), g = Object(_.a)(), E = Object(c.d)(e => Object(h.eb)(e, {
					userName: d
				})), {
					currentPointsAmount: M,
					pointsName: S,
					recipientWallet: C,
					tokenConversion: D,
					walletProvider: G
				} = Object(c.d)(Object(i.c)({
					currentPointsAmount: t => Object(T.h)(t, e),
					pointsName: t => Object(T.q)(t, e),
					recipientWallet: e => E && Object(T.j)(e, {
						subredditId: v,
						userId: E.id
					}),
					tokenConversion: t => Object(T.p)(t, e),
					walletProvider: t => Object(T.u)(t, e)
				}));
				if (!G) throw new Error("No wallet provider");
				const F = null === (n = null === (t = G.extra) || void 0 === t ? void 0 : t.contracts) || void 0 === n ? void 0 : n.unlocked.address;
				if (!F) throw new Error("No token contract address");
				const P = function(e, n) {
						const s = null == n ? void 0 : n.publicAddress;
						if (s) return s;
						try {
							if (!!Object(r.getAddress)(e)) return e
						} catch (t) {}
						throw new Error("No recipient address found for points transfer")
					}(d, C),
					L = Object(f.d)(F, P, A),
					U = Object(O.b)(A, D),
					W = e => {
						g(Object(x.a)("transfer", v, U, e))
					};
				return a.a.createElement(y.a, {
					approvalOverview: a.a.createElement(k, {
						subredditId: v,
						recipient: d,
						recipientAddress: P,
						transferAmount: A
					}),
					approvalDetails: a.a.createElement(I, {
						transaction: L,
						recipientAddress: P
					}),
					onClose: o,
					onTransactionSuccess: async e => {
						o(), N(function(e) {
							return Object(m.e)(Object(m.d)(s.fbt._("Sending your {pointsName}...", [s.fbt._param("pointsName", e)], {
								hk: "2LuiyB"
							}), w.b.SuccessCommunity))
						}(S)), async function(e, t, n, r, s, o) {
							await Object(j.a)(t, n), await e(Object(p.a)(Object(l.h)({
								subredditId: r
							}), async e => {
								const t = Object(T.h)(e(), {
									subredditId: r
								});
								return s !== t || null
							})), o && e(Object(u.a)({
								subredditId: r,
								userIds: [o]
							}))
						}(N, G, e.hash, v, M, null == E ? void 0 : E.id).then(() => {
							g(Object(x.b)("transfer", v, U)), N(function(e) {
								return Object(m.e)(Object(m.d)(s.fbt._("Your {pointsName} were sent!", [s.fbt._param("pointsName", e)], {
									hk: "4yssJA"
								}), w.b.SuccessCommunityGreen))
							}(S))
						}).catch(e => {
							W(e.toString()), N(function(e) {
								return Object(m.e)(Object(m.d)(s.fbt._("Failed to send your {pointsName}. Try again later", [s.fbt._param("pointsName", e)], {
									hk: "yeMQh"
								}), w.b.Error))
							}(S))
						})
					},
					onTransactionFailure: W,
					subredditId: v,
					transaction: L,
					transactionIntent: Object(b.e)(v, d, P, A)
				})
			})))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/featureFlags/index.ts"),
				i = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
					}
					return n
				};

			function d(e, t, n) {
				const r = Object(a.c)({
					featureEnabled: t => c.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r
					} = e, o = i(e, ["featureEnabled"]);
					return r ? s.a.createElement(t, o) : void 0 !== n ? s.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js");

			function s(e, t) {
				const [n, s] = Object(r.useState)(e);
				return [n, e => {
					t.current && s(e)
				}]
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-TransferTransactionModal.7a45d767f43cb4c30d6d.js.map