// https://www.redditstatic.com/desktop2x/HarbergerTaxBannerPurchaseCTA.c4e2cce028450f4ee1af.js
// Retrieved at 5/5/2020, 1:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["HarbergerTaxBannerPurchaseCTA"], {
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "i", (function() {
				return m
			})), r.d(t, "j", (function() {
				return f
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/harbergerTax/constants.ts");
			const o = Object(n.a)(s.c),
				d = Object(n.a)(s.e),
				i = Object(n.a)(s.a),
				c = Object(n.a)(s.b),
				a = Object(n.a)(s.d),
				u = Object(n.a)(s.f),
				l = Object(n.a)(s.g),
				b = Object(n.a)(s.h),
				m = Object(n.a)(s.i),
				f = Object(n.a)(s.j)
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.m.less": function(e, t, r) {
			e.exports = {
				container: "oc2hBUbsTl-V_W2CPEsZf",
				disabled: "_2fJJUTzj7dLnv_DNuenZP9",
				token: "_3w6edM8masZLL2X9YoWf0A"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				d = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				u = r("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				b = r("./src/reddit/components/Governance/Token/index.tsx"),
				m = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				f = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/featureFlags/component.tsx"),
				h = r("./src/reddit/helpers/governance/ethereum.ts"),
				g = r("./src/reddit/helpers/governance/tokens.ts"),
				y = r("./src/reddit/selectors/gov.ts"),
				x = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.m.less"),
				j = r.n(x);
			const v = Object(i.c)({
					cost: (e, t) => {
						const r = Object(f.q)(e, t);
						if (r) return Object(y.d)(e, {
							subredditId: r.id
						})
					},
					publicAddress: (e, t) => {
						const r = Object(f.q)(e, t),
							n = e.user.account;
						if (r && n) {
							const t = Object(y.i)(e, {
								subredditId: r.id,
								userId: n.id
							});
							if (t) return t.publicAddress
						}
					},
					subreddit: f.q,
					tokenDisplayConversion: (e, t) => {
						const r = Object(f.q)(e, t) || void 0;
						return Object(y.o)(e, {
							subredditId: r && r.id
						})
					},
					useCrypto: (e, t) => {
						const r = Object(f.q)(e, t);
						return !!r && Object(y.k)(e, {
							subredditId: r.id
						})
					},
					userOwnsBanner: (e, t) => {
						const r = Object(f.q)(e, t),
							n = e.user.account;
						if (r && n) {
							return Object(y.e)(e, {
								subredditId: r.id
							}).ownerId === n.id
						}
						return !1
					}
				}),
				O = Object(d.b)(v, e => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenManageFlow: (t, r) => e(r ? Object(u.a)({
						subredditId: t
					}) : Object(u.c)({
						subredditId: t
					})),
					onOpenPurchaseFlow: (t, r) => e(r ? Object(u.b)({
						subredditId: t
					}) : Object(u.e)({
						subredditId: t
					})),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					}))
				})),
				w = Object(f.t)();
			t.default = Object(p.a)("spHarberger", w(O((function(e) {
				const {
					cost: t,
					publicAddress: r,
					subreddit: d,
					useCrypto: i,
					userOwnsBanner: u,
					onHideTooltip: l,
					onOpenManageFlow: f,
					onOpenPurchaseFlow: p,
					onShowTooltip: y,
					tokenDisplayConversion: x
				} = e;
				if (!t || !d) return null;
				const v = Object(h.e)(),
					O = !u && i && (!v || !!!r),
					w = "harberger-cta-".concat(d.id);
				return o.a.createElement("div", {
					className: Object(c.a)(j.a.container, {
						[j.a.disabled]: O
					}),
					id: w,
					onClick: () => {
						O || (u ? f(d.id, i) : p(d.id, i))
					},
					onMouseOver: () => y(w),
					onMouseOut: l
				}, u ? n.fbt._("manage banner", null, {
					hk: "bVWkT"
				}) : o.a.createElement(s.Fragment, null, n.fbt._("buy banner", null, {
					hk: "BcYLs"
				}), o.a.createElement(b.a, {
					className: j.a.token,
					subredditId: d.id
				}), Object(a.a)(Object(g.b)(t, x))), O && o.a.createElement(m.c, {
					tooltipId: w,
					text: v ? n.fbt._("You must register your wallet address to purchase the banner", null, {
						hk: "38o58h"
					}) : n.fbt._("You must have metamask installed to purchase the banner", null, {
						hk: "3A896M"
					})
				}))
			}))))
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, r) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				i = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/selectors/gov.ts"),
				u = r("./src/reddit/components/Governance/Token/index.m.less"),
				l = r.n(u);
			const b = Object(d.c)({
				tokenSymbol: a.q
			});
			t.a = Object(o.b)(b)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					r = "".concat(i.a.assetPath, "/").concat(t);
				if (e.grey && r.endsWith(".svg")) {
					const t = "url(".concat(r, ") center/cover");
					return s.a.createElement("div", {
						className: Object(c.a)(l.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: r
				})
			}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			}));
			var n, s = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function d(e) {
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
			async function i(e, t, r) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function c(e, t, r) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function a(e, t, r) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}))
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return g
			}));
			r("./node_modules/core-js/modules/es6.regexp.to-string.js"), r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/i18n/utils.ts");

			function s() {
				return window.ethereum
			}

			function o() {
				const e = s();
				return !(!e || !e.isMetaMask)
			}

			function d() {
				const e = s();
				return e && e.selectedAddress || null
			}

			function i() {
				return s().networkVersion || null
			}

			function c() {
				const e = s();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return d() ? Promise.resolve() : e.enable()
			}
			const a = 4001;
			async function u(e, t, n, o) {
				const [d, i] = await Promise.all([r.e("vendors~CryptoLibEthers").then(r.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const a = new d.providers.Web3Provider(s()).getSigner(),
					u = new d.Contract(e, i, a),
					l = await u[n](...o);
				return await l.wait()
			}
			const l = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "to",
						type: "address"
					}, {
						name: "value",
						type: "uint256"
					}, {
						name: "data",
						type: "bytes"
					}],
					name: "send",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			const b = 1;
			async function m(e, t, n, s, o) {
				const d = await r.e("vendors~CryptoLibEthers").then(r.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: c,
						hexZeroPad: a,
						toUtf8Bytes: m
					} = d.utils,
					f = i(n).add(o),
					p = b,
					h = "0x" + [c(1)].concat([p, i(s), i(o)].map(c).map(e => a(e, 32))).concat(c(m(""))).map(e => e.substr(2)).join("");
				return async function(e, t, r, n) {
					return u(e, Promise.resolve(l), "send", [t, r, n])
				}(e, t, f.toString(), h)
			}
			const f = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "_subscriber",
						type: "address"
					}, {
						name: "_units",
						type: "uint16"
					}],
					name: "subscribe",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			async function p(e, t, r) {
				await c();
				const s = d() || "";
				if (t.toLowerCase() !== s.toLowerCase()) throw new Error(Object(n.b)("Please select your registered address in MetaMask: ") + t);
				return u(e, Promise.resolve(f), "subscribe", [t, r])
			}

			function h(e) {
				const t = s();
				return new Promise((r, s) => {
					const o = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, o],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) s(e);
						else {
							const e = t && t.result;
							e ? r(e) : s({
								message: Object(n.b)("No signature returned from ethereum provider.")
							})
						}
					})
				})
			}

			function g(e) {
				return new Promise((t, r) => {
					s().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, n) => {
						e || "error" in n ? r("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			}));
			r("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				s = r("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return r.dividedBy(s).decimalPlaces(2).toString()
			}

			function d(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return r.multipliedBy(s).toFixed(0)
			}
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
				return b
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "p", (function() {
				return x
			})), r.d(t, "q", (function() {
				return j
			})), r.d(t, "o", (function() {
				return v
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "m", (function() {
				return w
			})), r.d(t, "s", (function() {
				return k
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "r", (function() {
				return I
			})), r.d(t, "n", (function() {
				return P
			})), r.d(t, "k", (function() {
				return E
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts"),
				o = r("./src/reddit/featureFlags/index.ts"),
				d = r("./src/reddit/selectors/experiments/pollsGA.ts"),
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
					const n = k(e, {
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
				b = (e, t) => {
					const r = O(e, t);
					if (r) return r.mainHeader
				},
				m = (e, t) => {
					const r = O(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				f = (e, t) => {
					const r = O(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : a
				},
				p = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					if (Object(d.a)(e)) {
						const t = Object(i.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const r = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return r && !e
					}
					return r
				},
				g = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				y = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || c
				},
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				j = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || u,
				v = (e, t) => {
					const r = I(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				O = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				w = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				k = (e, t) => {
					const r = w(e, t);
					return r && r.walletProvider
				},
				_ = (e, t) => {
					const r = k(e, t),
						n = w(e, t);
					return r && r.provider || n && n.provider
				},
				T = (e, t) => {
					const r = _(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				I = (e, t) => {
					const r = k(e, t),
						n = _(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const o = r && r.extra && r.extra.contracts,
						d = o && o.unlocked;
					return d && {
						address: d.address,
						symbol: d.token || "",
						decimals: d.decimals || 18,
						image: d.image
					}
				},
				P = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = k(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				E = (e, t) => {
					const r = w(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=HarbergerTaxBannerPurchaseCTA.c4e2cce028450f4ee1af.js.map