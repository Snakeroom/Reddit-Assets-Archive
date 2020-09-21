// https://www.redditstatic.com/desktop2x/AuthorHovercard.ecf2bcac7f0dc13af395.js
// Retrieved at 9/21/2020, 7:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				d = r.n(n),
				s = r("./src/reddit/components/Hovercards/helpers.ts"),
				o = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = r("./src/reddit/helpers/isPost.ts"),
				c = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				a = r("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			const m = e => Object(i.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class p extends d.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(l.f)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(s.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || a.a,
						tooltipType: e.tooltipType
					}), r = "".concat(t, "-hover-id"), n = e.author || e.postOrComment.author;
					return d.a.createElement(o.a, {
						authorOrSubredditName: n,
						className: e.hoverDivClassName,
						hoverId: r,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, e.children, d.a.createElement(c.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: r,
						sendEvent: e.sendEvent,
						subredditId: m(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: n
					}))
				}
			}
			t.default = Object(u.c)(p)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "j", (function() {
				return a
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "l", (function() {
				return f
			}));
			var n, d = r("./src/config.ts"),
				s = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error("No ethereum network for provider: ".concat(e))
			}
			async function a(e, t, r) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(d.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(d.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function l(e, t, r) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: "".concat(d.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const m = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				p = e => ({
					type: "claim",
					subredditId: e
				}),
				h = e => ({
					type: "subscribe",
					subredditId: e
				}),
				b = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function f(e, t) {
				return await Object(s.a)(e, {
					method: "put",
					endpoint: "".concat(d.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				d = r.n(n);
			t.a = e => d.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, d.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => !0
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "t", (function() {
				return f
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "k", (function() {
				return g
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "r", (function() {
				return w
			})), r.d(t, "p", (function() {
				return I
			})), r.d(t, "m", (function() {
				return H
			})), r.d(t, "n", (function() {
				return k
			})), r.d(t, "u", (function() {
				return O
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "s", (function() {
				return P
			})), r.d(t, "o", (function() {
				return _
			})), r.d(t, "l", (function() {
				return A
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				d = r("./src/reddit/endpoints/governance/crypto.ts"),
				s = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = r("./src/reddit/selectors/postCreations.ts");
			const c = [],
				a = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				l = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = O(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const r = H(e, t);
					if (r) return r.mainHeader
				},
				p = (e, t) => {
					const r = H(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				h = (e, t) => {
					const r = H(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : a
				},
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				f = (e, t) => {
					const r = b(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				v = (e, t) => {
					const r = b(e, t);
					return r && r.amount || "0"
				},
				x = (e, t) => {
					if (Object(o.a)(e)) {
						const t = Object(i.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const r = s.d.spPolls(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return r && !e
					}
					return r
				},
				y = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				g = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || c
				},
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				w = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || u,
				I = (e, t) => {
					const r = P(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				H = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				k = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				O = (e, t) => {
					const r = k(e, t);
					return r && r.walletProvider
				},
				T = (e, t) => {
					const r = O(e, t),
						n = k(e, t);
					return r && r.provider || n && n.provider
				},
				N = (e, t) => {
					const r = T(e, t);
					return r === d.a.Ethereum || r === d.a.Rinkeby || r === d.a.EthTraderEthereum || r === d.a.EthTraderRinkeby
				},
				P = (e, t) => {
					const r = O(e, t),
						n = T(e, t);
					if (r && !r.inTransition && n === d.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const s = r && r.extra && r.extra.contracts,
						o = s && s.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				_ = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = O(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				A = (e, t) => {
					const r = k(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.ecf2bcac7f0dc13af395.js.map