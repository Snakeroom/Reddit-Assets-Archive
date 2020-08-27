// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-SubscriptionModal.7574ec64cce953dd7cf6.js
// Retrieved at 8/27/2020, 1:10:07 PM by Reddit Dataminer v1.0.0
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
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
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
			t.a = Object(a.b)(p)((function(e) {
				return r.a.createElement("div", {
					className: Object(c.a)(b.a.container, e.className, {
						[b.a.small]: e.small
					})
				}, r.a.createElement(d.a, {
					className: Object(c.a)(b.a.token, {
						[b.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(i.a)(Object(l.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
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
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				d = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/endpoints/governance/crypto.ts"),
				m = n("./src/reddit/featureFlags/component.tsx"),
				b = n("./src/reddit/helpers/crypto/transactions.ts"),
				p = n("./src/reddit/helpers/governance/tokens.ts"),
				O = n("./src/reddit/helpers/trackers/crypto.ts"),
				j = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/models/Badge/managementPage.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/gov.ts"),
				x = n("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				h = n("./src/config.ts"),
				g = n("./src/reddit/components/SubredditIcon/index.tsx"),
				k = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				I = n("./src/reddit/selectors/economics.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				M = n("./src/reddit/components/Governance/TransactionModals/BaseApprovalModal/index.tsx"),
				w = n("./src/reddit/components/Governance/TransactionModals/BaseApprovalModal/Details.tsx"),
				T = n("./src/reddit/components/Governance/TransactionModals/BaseApprovalModal/Overview.tsx"),
				A = n("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/ApprovalModal.m.less"),
				C = n.n(A);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var E = e => {
					const t = Object(o.d)(t => Object(y.R)(t, e)),
						n = Object(o.d)(t => Object(I.s)(t, e.subredditId)),
						r = n.membershipAlt,
						c = n.prices.points,
						i = "".concat(h.a.assetPath, "/img/memberships/paywall/").concat(t.name.toLowerCase(), "/membership_frame.svg");
					return a.a.createElement(M.a, N({
						overview: a.a.createElement(T.a, {
							subredditId: e.subredditId,
							image: a.a.createElement("div", {
								className: C.a.membershipFrame
							}, a.a.createElement(k.a, {
								className: C.a.userIcon
							}), a.a.createElement("img", {
								className: C.a.frameImage,
								src: i
							}), a.a.createElement(g.b, {
								className: C.a.subredditIcon,
								subredditOrProfile: t
							})),
							title: r,
							subtitle: t.displayText,
							pointsAmount: c,
							pointsAmountSubtext: s.fbt._("Paid monthly, cancel anytime", null, {
								hk: "3vvJQd"
							})
						}),
						details: a.a.createElement(w.b, {
							values: [
								[Object(w.c)(), e.transaction.arguments[0]],
								[Object(w.a)(), e.transaction.contractAddress]
							]
						})
					}, e))
				},
				P = n("./src/lib/addQueryParams/index.ts"),
				G = n("./src/lib/prettyPrintNumber/index.ts"),
				S = n("./src/reddit/components/Governance/Token/index.tsx"),
				D = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.tsx"),
				L = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx"),
				R = n("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.m.less"),
				q = n.n(R);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const X = Object(c.c)({
				subredditName: (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = Object(y.R)(e, {
						subredditId: n
					});
					return s && s.name || ""
				},
				tokenDisplayConversion: f.p,
				tokenName: f.q,
				userId: e => {
					const t = Object(B.i)(e);
					return t ? t.id : ""
				}
			});
			var V = Object(o.b)(X)((function(e) {
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
				return Object(r.useEffect)(() => {
					u(Object(D.a)(t))
				}, [t, u]), a.a.createElement(F.a, {
					onClose: n,
					title: K._("Continue in the Mobile App", null, {
						hk: "3seGfx"
					}),
					header: K._("Approve this transaction with Reddit Vault", null, {
						hk: "4dRYKa"
					}),
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(L.a, {
						index: "1"
					}, K._("Scan the QR code with your Camera app", null, {
						hk: "DeLcL"
					})), a.a.createElement(L.a, {
						index: "2"
					}, K._("Use that link to open your Vault in the Reddit app", null, {
						hk: "2KCtg7"
					})), a.a.createElement(L.a, {
						index: "3"
					}, K._("Approve the transaction to start your monthly membership subscription", null, {
						hk: "1XiP6x"
					}))),
					qrUrl: Object(P.a)("http://www.reddit.com/vault/subscribe", {
						u: l,
						s: o,
						sn: c
					}),
					amount: a.a.createElement("div", {
						className: q.a.amount
					}, a.a.createElement("div", null, a.a.createElement(S.a, {
						className: q.a.tokenIcon,
						subredditId: o
					})), a.a.createElement("div", {
						className: q.a.total
					}, K._("{price} /mo", [K._param("price", Object(G.a)(Object(p.b)(s, i)) + " " + d)], {
						hk: "2sgoC6"
					})))
				})
			}));
			t.default = Object(m.a)("spWebTransactions", (function(e) {
				const {
					price: t,
					subredditId: n
				} = e, r = Object(o.c)(), m = Object(j.a)(), {
					tokenConversion: h,
					walletProvider: g,
					walletAddress: k
				} = Object(o.d)(Object(c.c)({
					tokenConversion: t => Object(f.p)(t, e),
					walletProvider: t => Object(f.u)(t, e),
					walletAddress: t => Object(f.t)(t, e)
				})), I = Object(b.b)(g.extra.contracts.subscriptions.address, k, !0), y = Object(p.b)(t, h);
				return a.a.createElement(x.a, {
					ApprovalModal: E,
					onClose: e.onClose,
					onTransactionSuccess: async a => {
						await r(Object(d.f)({
							subredditId: n,
							price: t,
							providerArgs: a
						})), m(Object(O.b)("subscribe", n, y)), r(Object(l.e)({
							duration: 1e4,
							kind: _.b.SuccessCommunityGreen,
							text: s.fbt._("Your purchase was successful! Thank you for your support!", null, {
								hk: "NuVo0"
							})
						})), r(Object(i.c)({
							subredditId: n,
							initialView: v.c.MyBadges
						})), e.onPaymentComplete()
					},
					onTransactionFailure: e => {
						m(Object(O.a)("subscribe", n, y, e))
					},
					subredditId: n,
					transaction: I,
					transactionIntent: Object(u.c)(n),
					transactionIsBlockedOnIOS: !0
				})
			}), V)
		},
		"./src/reddit/helpers/trackers/communityPoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
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
			const r = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(s.subreddit)(t)
				}),
				a = () => r("view"),
				o = () => r("tap"),
				c = () => r("dismiss"),
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
//# sourceMappingURL=reddit-components-Governance-TransactionModals-SubscriptionModal.7574ec64cce953dd7cf6.js.map