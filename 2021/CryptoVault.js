// https://www.redditstatic.com/desktop2x/CryptoVault.c51c881bfa42477f7b81.js
// Retrieved at 3/16/2021, 1:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CryptoVault"], {
		"./src/lib/prettyPrintNumber/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return l
			}));
			const n = e => {
					const t = e.split(".");
					return [t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")].concat(t.slice(1)).join(".")
				},
				i = 1e3,
				o = 100 * i,
				s = 10 * o,
				d = 100 * s,
				c = 10 * d,
				a = 100 * c,
				u = 51;

			function l(e, t) {
				return (null == t ? void 0 : t.displayFull) ? n(e.toString()) : e >= a - u ? `${Math.floor(e/c)}b` : e >= c - u && e < a - u ? `${(e/c).toFixed(1)}b` : e >= d - u && e < c - u ? `${Math.floor(e/s)}m` : e >= s - u && e < d - u ? `${(e/s).toFixed(1)}m` : e >= o - u && e < s - u ? `${Math.floor(e/i)}k` : e >= i && e < o - u ? (null == t ? void 0 : t.roundDown) ? `${m(e,i)}k` : `${(e/i).toFixed(1)}k` : String(e)
			}
			const m = (e, t, r = 1) => {
				const n = Math.pow(10, r);
				return (Math.floor(e / (t / n)) / n).toFixed(r)
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, r) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/selectors/gov.ts"),
				u = r("./src/reddit/components/Governance/Token/index.m.less"),
				l = r.n(u);
			const m = Object(s.c)({
				tokenSymbol: a.o
			});
			t.a = Object(o.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					r = `${d.a.assetPath}/${t}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return i.a.createElement("div", {
						className: Object(c.a)(l.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return i.a.createElement("img", {
					className: e.className,
					src: r
				})
			}))
		},
		"./src/reddit/components/Governance/VaultActionLink/VaultActionPills.m.less": function(e, t, r) {
			e.exports = {
				vaultActionPills: "_19E9RnYMHrJz3-6qpKNEnT",
				vaultActionPill: "_3xYvGCCAkxYx0jqLc2lwo2",
				tokenIcon: "_3OdgI42NyvhRMMgW7EWGqg"
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "default", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				s = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/lib/extractQueryParams/index.ts"),
				c = r("./src/lib/mapToObject/index.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/components/Governance/Token/index.tsx"),
				m = r("./src/reddit/constants/modals.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				h = r("./src/reddit/helpers/governance/tokens.ts"),
				y = r("./src/reddit/helpers/richTextJson/index.ts"),
				x = r("./src/reddit/selectors/gov.ts"),
				v = r("./src/reddit/components/Governance/VaultActionLink/VaultActionPills.m.less"),
				g = r.n(v);

			function k(e) {
				const t = Object(s.d)(),
					r = Object(b.Z)(),
					n = Object(s.e)(e => Object(b.q)(e, {
						pageLayer: r
					})),
					i = Object(s.e)(e => Object(x.m)(e, {
						subredditId: null == n ? void 0 : n.id
					})),
					d = Object(y.d)(e.content.document).filter(p.b);
				return n && d.length ? o.a.createElement("div", {
					className: g.a.vaultActionPills
				}, d.map(e => o.a.createElement(j, {
					key: e,
					url: e,
					currentSubreddit: n,
					dispatch: t,
					tokenDisplayConversion: i
				}))) : null
			}

			function j({
				url: e,
				currentSubreddit: t,
				dispatch: r,
				tokenDisplayConversion: i
			}) {
				var s;
				const b = Object(d.a)(e),
					y = Object(p.a)(Object(c.a)(b)),
					x = null === (s = null == y ? void 0 : y.subreddit) || void 0 === s ? void 0 : s.toLowerCase();
				return y && x && x === t.name.toLowerCase() ? o.a.createElement(f.q, {
					priority: f.b.Plain,
					onClick: () => r(Object(u.h)(m.a.CRYPTO_BURN_POINTS, y)),
					className: g.a.vaultActionPill,
					size: f.c.XS
				}, y.cta || n.fbt._("Burn", null, {
					hk: "4p3rvM"
				}), o.a.createElement(l.a, {
					className: g.a.tokenIcon,
					subredditId: t.id,
					grey: !0
				}), Object(a.a)(Object(h.b)(y.amount, i))) : null
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				i = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/lib/extractQueryParams/index.ts"),
				d = r("./src/lib/mapToObject/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/contexts/PageLayer/index.tsx"),
				l = r("./src/reddit/controls/InternalLink/index.tsx"),
				m = r("./src/reddit/featureFlags/index.ts"),
				b = r("./src/reddit/helpers/crypto/vaultActionLink.ts");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.default = function(e) {
				const t = Object(o.d)(),
					r = Object(u.Z)(),
					n = Object(o.e)(e => Object(u.q)(e, {
						pageLayer: r
					})),
					p = Object(o.e)(m.d.spBurnLinks),
					{
						children: h,
						...y
					} = e;
				return p ? i.a.createElement(l.a, f({}, y, {
					onClick: r => {
						var i;
						const o = Object(s.a)(e.to.toString()),
							u = Object(b.a)(Object(d.a)(o)),
							l = null === (i = null == u ? void 0 : u.subreddit) || void 0 === i ? void 0 : i.toLowerCase();
						l && l === (null == n ? void 0 : n.name.toLowerCase()) && (t(Object(c.h)(a.a.CRYPTO_BURN_POINTS, u)), r.preventDefault())
					}
				}), h) : i.a.createElement(i.a.Fragment, null, h)
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return s
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "k", (function() {
				return a
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "m", (function() {
				return y
			}));
			var n, i = r("./src/config.ts"),
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

			function d(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
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
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function a(e, t, r) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function l(e, t, r) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: `${i.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const m = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				f = e => ({
					type: "claim",
					subredditId: e
				}),
				p = e => ({
					type: "subscribe",
					subredditId: e
				}),
				h = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function y(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: `${i.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, r) {
			"use strict";

			function n(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function i(e) {
				const {
					subreddit: t,
					amount: r,
					memo: n,
					cta: i
				} = e;
				return t && r && n && i ? {
					subreddit: t,
					amount: r,
					memo: n,
					cta: i
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return i
			}))
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				i = r("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const r = new n.BigNumber(e),
					i = new n.BigNumber(t);
				return r.dividedToIntegerBy(i).toString()
			}

			function s(e, t) {
				return Object(i.b)(parseInt(o(e, t), 10))
			}

			function d(e, t) {
				const r = new n.BigNumber(e),
					i = new n.BigNumber(t);
				return r.multipliedBy(i).toFixed(0)
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "d", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/RichTextJson/index.ts");
			const i = "giphy|",
				o = "|downsized";

			function s(e, t) {
				return i + e + (t ? o : "")
			}

			function d(e) {
				return e && 0 === e.indexOf(i)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(d)
			}

			function a(e) {
				let t = e.substring(i.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function u(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, r) => [...e, ...u(r, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function l(e) {
				return u(e, n.F).map(e => e.id)
			}

			function m(e) {
				return u(e, e => e.e === n.o).map(e => e.u)
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "q", (function() {
				return b
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "o", (function() {
				return y
			})), r.d(t, "m", (function() {
				return x
			})), r.d(t, "k", (function() {
				return g
			})), r.d(t, "r", (function() {
				return k
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "p", (function() {
				return w
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "j", (function() {
				return I
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				i = r("./src/reddit/endpoints/governance/crypto.ts");
			const o = [],
				s = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				c = (e, {
					subredditId: t
				}) => {
					const r = k(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				a = (e, t) => {
					const r = v(e, t);
					if (r) return r.mainHeader
				},
				u = (e, t) => {
					const r = v(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				l = (e, t) => {
					const r = v(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : s
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				b = (e, t) => {
					const r = m(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				f = (e, t) => {
					const r = m(e, t);
					return r && r.amount || "0"
				},
				p = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || o
				},
				h = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || d,
				x = (e, t) => {
					const r = w(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				v = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				g = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				k = (e, t) => {
					const r = g(e, t);
					return r && r.walletProvider
				},
				j = (e, t) => {
					const r = k(e, t),
						n = g(e, t);
					return r && r.provider || n && n.provider
				},
				O = (e, t) => {
					const r = j(e, t);
					return r === i.a.Ethereum || r === i.a.Rinkeby || r === i.a.EthTraderEthereum || r === i.a.EthTraderRinkeby
				},
				w = (e, t) => {
					const r = k(e, t),
						n = j(e, t);
					if (r && !r.inTransition && n === i.a.Stellar) return {
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
				E = (e, {
					subredditId: t
				}) => {
					const r = k(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				I = (e, t) => {
					const r = g(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoVault.c51c881bfa42477f7b81.js.map