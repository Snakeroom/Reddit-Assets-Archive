// https://www.redditstatic.com/desktop2x/AuthorHovercard.47f83205ebbfc25031ae.js
// Retrieved at 10/5/2020, 8:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				d = r.n(n),
				o = r("./src/reddit/components/Hovercards/helpers.ts"),
				s = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				i = r("./src/reddit/helpers/isPost.ts"),
				a = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				c = r("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			const l = e => Object(i.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class h extends d.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(m.f)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(o.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || c.a,
						tooltipType: e.tooltipType
					}), r = "".concat(t, "-hover-id"), n = e.author || e.postOrComment.author;
					return d.a.createElement(s.a, {
						authorOrSubredditName: n,
						className: e.hoverDivClassName,
						hoverId: r,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, e.children, d.a.createElement(a.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: r,
						sendEvent: e.sendEvent,
						subredditId: l(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: n
					}))
				}
			}
			t.default = Object(u.c)(h)
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "i", (function() {
				return s
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "j", (function() {
				return c
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "l", (function() {
				return f
			}));
			var n, d = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function s(e) {
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

			function a(e) {
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
			async function c(e, t, r) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(d.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(d.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function m(e, t, r) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(d.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const l = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				p = e => ({
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
				return await Object(o.a)(e, {
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
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "s", (function() {
				return h
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "p", (function() {
				return v
			})), r.d(t, "q", (function() {
				return y
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "m", (function() {
				return g
			})), r.d(t, "t", (function() {
				return w
			})), r.d(t, "a", (function() {
				return I
			})), r.d(t, "f", (function() {
				return H
			})), r.d(t, "r", (function() {
				return k
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "k", (function() {
				return T
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				d = r("./src/reddit/endpoints/governance/crypto.ts");
			const o = [],
				s = {},
				i = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				a = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = w(e, {
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
				c = (e, t) => {
					const r = x(e, t);
					if (r) return r.mainHeader
				},
				u = (e, t) => {
					const r = x(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				m = (e, t) => {
					const r = x(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : s
				},
				l = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					const r = l(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				p = (e, t) => {
					const r = l(e, t);
					return r && r.amount || "0"
				},
				b = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				f = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || o
				},
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				E = (e, t) => {
					const r = k(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				x = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				g = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				w = (e, t) => {
					const r = g(e, t);
					return r && r.walletProvider
				},
				I = (e, t) => {
					const r = w(e, t),
						n = g(e, t);
					return r && r.provider || n && n.provider
				},
				H = (e, t) => {
					const r = I(e, t);
					return r === d.a.Ethereum || r === d.a.Rinkeby || r === d.a.EthTraderEthereum || r === d.a.EthTraderRinkeby
				},
				k = (e, t) => {
					const r = w(e, t),
						n = I(e, t);
					if (r && !r.inTransition && n === d.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const o = r && r.extra && r.extra.contracts,
						s = o && o.unlocked;
					return s && {
						address: s.address,
						symbol: s.token || "",
						decimals: s.decimals || 18,
						image: s.image
					}
				},
				O = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = w(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				T = (e, t) => {
					const r = g(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.47f83205ebbfc25031ae.js.map