// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-TransferTransactionModal.b546ee20db443b0c986a.js
// Retrieved at 9/2/2020, 6:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-TransferTransactionModal"], {
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e4,
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3e5;
				return async (s, o, a) => new Promise((c, d) => {
					const i = Date.now() + r,
						l = () => {
							d(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > i) return l();
							const r = Date.now();
							await e(s, o, a);
							const m = await t(o);
							if (m) c();
							else if (!1 === m) d();
							else {
								Date.now() + Math.max(n - (Date.now() - r), 0) < i ? setTimeout(u, n) : l()
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
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/gov.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				b = n.n(m);
			const p = Object(a.c)({
				tokenDisplayConversion: u.p
			});
			t.a = Object(o.b)(p)((function(e) {
				return s.a.createElement("div", {
					className: Object(c.a)(b.a.container, e.className, {
						[b.a.small]: e.small
					})
				}, s.a.createElement(i.a, {
					className: Object(c.a)(b.a.token, {
						[b.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(d.a)(Object(l.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/ApprovalModal.m.less": function(e, t, n) {
			e.exports = {
				userIcon: "_1u1hD_9ZUzTP_P4AYg33OY"
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
				d = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/governance/index.ts"),
				u = n("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/util/pollActionForSuccess.ts"),
				p = n("./src/reddit/endpoints/governance/crypto.ts"),
				f = n("./src/reddit/featureFlags/component.tsx"),
				j = n("./src/reddit/helpers/crypto/transactions.ts"),
				O = n("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				v = n("./src/reddit/helpers/governance/tokens.ts"),
				x = n("./src/reddit/helpers/trackers/crypto.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/selectors/gov.ts"),
				T = n("./src/reddit/selectors/user.ts"),
				w = n("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				g = n("./src/reddit/components/UserIcon/index.tsx"),
				A = n("./src/reddit/components/Governance/TransactionModals/BaseApprovalModal/index.tsx"),
				M = n("./src/reddit/components/Governance/TransactionModals/BaseApprovalModal/Details.tsx"),
				N = n("./src/reddit/components/Governance/TransactionModals/BaseApprovalModal/Overview.tsx"),
				k = n("./src/reddit/components/Governance/TransactionModals/TransferTransactionModal/ApprovalModal.m.less"),
				E = n.n(k);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: D
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var P = e => {
				const {
					recipient: t,
					recipientAddress: n,
					amount: r
				} = e.transactionIntent, s = Object(c.d)(T.i);
				return a.a.createElement(A.a, I({
					overview: a.a.createElement(N.a, {
						subredditId: e.subredditId,
						image: a.a.createElement(g.a, {
							className: E.a.userIcon,
							isNSFW: !1,
							userName: t
						}),
						title: D._("Transfer to {recipient}", [D._param("recipient", t === n ? t : "u/" + t)], {
							hk: "xSmPq"
						}),
						subtitle: s && s.displayText ? D._("From {currentUsername}", [D._param("currentUsername", "u/" + s.displayText)], {
							hk: "onO9l"
						}) : null,
						pointsAmount: r
					}),
					details: a.a.createElement(M.b, {
						values: [
							[Object(M.c)(), n],
							[Object(M.a)(), e.transaction.contractAddress]
						]
					})
				}, e))
			};
			t.default = Object(f.a)("spWebTransactions", Object(i.a)((function(e) {
				var t, n;
				const {
					onClose: o,
					recipient: i,
					subredditId: f,
					transferAmount: g
				} = e, A = Object(c.c)(), M = Object(_.a)(), N = Object(c.d)(e => Object(T.eb)(e, {
					userName: i
				})), {
					currentPointsAmount: k,
					pointsName: E,
					recipientWallet: I,
					tokenConversion: D,
					walletProvider: S
				} = Object(c.d)(Object(d.c)({
					currentPointsAmount: t => Object(y.h)(t, e),
					pointsName: t => Object(y.q)(t, e),
					recipientWallet: e => N && Object(y.j)(e, {
						subredditId: f,
						userId: N.id
					}),
					tokenConversion: t => Object(y.p)(t, e),
					walletProvider: t => Object(y.u)(t, e)
				}));
				if (!S) throw new Error("No wallet provider");
				const F = null === (n = null === (t = S.extra) || void 0 === t ? void 0 : t.contracts) || void 0 === n ? void 0 : n.unlocked.address;
				if (!F) throw new Error("No token contract address");
				const G = function(e, n) {
						const s = null == n ? void 0 : n.publicAddress;
						if (s) return s;
						try {
							if (!!Object(r.getAddress)(e)) return e
						} catch (t) {}
						throw new Error("No recipient address found for points transfer")
					}(i, I),
					C = Object(j.c)(F, G, g),
					L = Object(v.b)(g, D),
					B = e => {
						M(Object(x.a)("transfer", f, L, e))
					};
				return a.a.createElement(w.a, {
					ApprovalModal: P,
					onClose: o,
					onTransactionSuccess: async e => {
						o(), A(function(e) {
							return Object(m.e)(Object(m.d)(s.fbt._("Sending your {pointsName}...", [s.fbt._param("pointsName", e)], {
								hk: "2LuiyB"
							}), h.b.SuccessCommunity))
						}(E)), async function(e, t, n, r, s, o) {
							await Object(O.a)(t, n), await e(Object(b.a)(Object(l.h)({
								subredditId: r
							}), async e => {
								const t = Object(y.h)(e(), {
									subredditId: r
								});
								return s !== t || null
							})), o && e(Object(u.a)({
								subredditId: r,
								userIds: [o]
							}))
						}(A, S, e.hash, f, k, null == N ? void 0 : N.id).then(() => {
							M(Object(x.b)("transfer", f, L)), A(function(e) {
								return Object(m.e)(Object(m.d)(s.fbt._("Your {pointsName} were sent!", [s.fbt._param("pointsName", e)], {
									hk: "4yssJA"
								}), h.b.SuccessCommunityGreen))
							}(E))
						}).catch(e => {
							B(e.toString()), A(function(e) {
								return Object(m.e)(Object(m.d)(s.fbt._("Failed to send your {pointsName}. Try again later", [s.fbt._param("pointsName", e)], {
									hk: "yeMQh"
								}), h.b.Error))
							}(E))
						})
					},
					onTransactionFailure: B,
					subredditId: f,
					transaction: C,
					transactionIntent: Object(p.d)(f, i, G, g)
				})
			})))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/featureFlags/index.ts"),
				d = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
					}
					return n
				};

			function i(e, t, n) {
				const r = Object(a.c)({
					featureEnabled: t => c.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r
					} = e, o = d(e, ["featureEnabled"]);
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-TransferTransactionModal.b546ee20db443b0c986a.js.map