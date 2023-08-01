// https://www.redditstatic.com/desktop2x/HarbergerTaxBannerPurchaseCTA.2bacce2af46b800615ae.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["HarbergerTaxBannerPurchaseCTA"], {
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return m
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/harbergerTax/constants.ts");
			const o = Object(r.a)(s.c),
				i = Object(r.a)(s.e),
				d = Object(r.a)(s.a),
				c = Object(r.a)(s.b),
				a = Object(r.a)(s.d),
				u = Object(r.a)(s.f),
				l = Object(r.a)(s.g),
				b = Object(r.a)(s.h),
				f = Object(r.a)(s.i),
				m = Object(r.a)(s.j)
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.m.less": function(e, t, n) {
			e.exports = {
				container: "oc2hBUbsTl-V_W2CPEsZf",
				disabled: "_2fJJUTzj7dLnv_DNuenZP9",
				token: "_3w6edM8masZLL2X9YoWf0A"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				b = n("./src/reddit/components/Governance/Token/index.tsx"),
				f = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/featureFlags/component.tsx"),
				v = n("./src/reddit/helpers/governance/ethereum.ts"),
				h = n("./src/reddit/helpers/governance/tokens.ts"),
				g = n("./src/reddit/selectors/crypto/points.ts"),
				w = n("./src/reddit/selectors/crypto/wallet.ts"),
				j = n("./src/reddit/selectors/gov.ts"),
				x = n("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.m.less"),
				O = n.n(x);
			const y = Object(d.c)({
					cost: (e, t) => {
						const n = Object(m.s)(e, t);
						if (n) return Object(j.b)(e, {
							subredditId: n.id
						})
					},
					pointsDetails: (e, t) => {
						const n = Object(m.s)(e, t);
						return Object(g.b)(e, null == n ? void 0 : n.id)
					},
					publicAddress: (e, t) => {
						const n = Object(m.s)(e, t);
						return (null == n ? void 0 : n.id) ? Object(w.b)(e, {
							subredditId: null == n ? void 0 : n.id
						}) : void 0
					},
					subreddit: m.s,
					userOwnsBanner: (e, t) => {
						const n = Object(m.s)(e, t),
							r = e.user.account;
						if (n && r) {
							return Object(j.c)(e, {
								subredditId: n.id
							}).ownerId === r.id
						}
						return !1
					}
				}),
				_ = Object(i.b)(y, e => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenManageFlow: (t, n) => e(n ? Object(u.a)({
						subredditId: t
					}) : Object(u.c)({
						subredditId: t
					})),
					onOpenPurchaseFlow: (t, n) => e(n ? Object(u.b)({
						subredditId: t
					}) : Object(u.e)({
						subredditId: t
					})),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					}))
				})),
				k = Object(m.v)();
			t.default = Object(p.a)("spHarberger", k(_((function(e) {
				const {
					cost: t,
					publicAddress: n,
					subreddit: i,
					userOwnsBanner: d,
					onHideTooltip: u,
					onOpenManageFlow: l,
					onOpenPurchaseFlow: m,
					onShowTooltip: p,
					pointsDetails: g
				} = e;
				if (!t || !g || !i) return null;
				const w = Object(v.e)(),
					j = !d && (!w || !!!n || g.inTransition),
					x = `harberger-cta-${i.id}`;
				return o.a.createElement("div", {
					className: Object(c.a)(O.a.container, {
						[O.a.disabled]: j
					}),
					id: x,
					onClick: () => {
						if (j) return;
						const e = !!g.blockchainProvider;
						d ? l(i.id, e) : m(i.id, e)
					},
					onMouseOver: () => p(x),
					onMouseOut: u
				}, d ? r.fbt._("Manage Banner", null, {
					hk: "aHDWM"
				}) : o.a.createElement(s.Fragment, null, r.fbt._("Buy Banner", null, {
					hk: "3Mp8CG"
				}), o.a.createElement(b.a, {
					className: O.a.token,
					subredditId: i.id
				}), Object(a.a)(Object(h.c)(t, g.displayConversion))), j && o.a.createElement(f.c, {
					tooltipId: x,
					text: w ? r.fbt._("You must register your wallet address to purchase the banner", null, {
						hk: "38o58h"
					}) : r.fbt._("You must have metamask installed to purchase the banner", null, {
						hk: "3A896M"
					})
				}))
			}))))
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/selectors/crypto/points.ts"),
				u = n("./src/reddit/components/Governance/Token/index.m.less"),
				l = n.n(u);
			const b = Object(i.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(a.b)(e, n)
				}
			});
			t.a = Object(o.b)(b)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					o = `${d.a.assetPath}/${r}`;
				if (e.grey && o.endsWith(".svg")) {
					const t = `url(${o}) center/cover`;
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
					src: o
				})
			}))
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function s() {
				return window.ethereum
			}

			function o() {
				const e = s();
				return !(!e || !e.isMetaMask)
			}

			function i() {
				const e = s();
				return e && e.selectedAddress || null
			}

			function d() {
				const e = s();
				return (null == e ? void 0 : e.networkVersion) || null
			}

			function c() {
				const e = s();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return i() ? Promise.resolve() : e.enable()
			}
			const a = 4001;
			async function u(e, t, r, o) {
				const [i, d] = await Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1").then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const a = new i.providers.Web3Provider(s()).getSigner(),
					u = new i.Contract(e, d, a),
					l = await u[r](...o);
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
			async function f(e, t, r, s, o) {
				const i = await n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1").then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers),
					{
						BigNumber: d
					} = i,
					{
						hexlify: c,
						hexZeroPad: a,
						toUtf8Bytes: f
					} = i.utils,
					m = d.from(r).add(o),
					p = b,
					v = "0x" + [c(1)].concat([c(p), d.from(s).toHexString(), d.from(o).toHexString()].map(e => a(e, 32))).concat(c(f(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, r) {
					return u(e, Promise.resolve(l), "send", [t, n, r])
				}(e, t, m.toString(), v)
			}
			const m = {
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
			async function p(e, t, n) {
				await c();
				const s = i() || "";
				if (t.toLowerCase() !== s.toLowerCase()) throw new Error(r.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [r.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return u(e, Promise.resolve(m), "subscribe", [t, n])
			}

			function v(e) {
				const t = s();
				return new Promise((n, s) => {
					const o = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, o],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) s(e);
						else {
							const e = t && t.result;
							e ? n(e) : s({
								message: r.fbt._("No signature returned from ethereum provider.", null, {
									hk: "eiYBF"
								}).toString()
							})
						}
					})
				})
			}

			function h(e) {
				return new Promise((t, n) => {
					s().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, r) => {
						e || "error" in r ? n("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(s).toString()
			}

			function i(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function d(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.multipliedBy(s).toFixed(0)
			}

			function c(e) {
				const t = new r.BigNumber(e),
					n = new r.BigNumber("1e18");
				return t.dividedBy(n).toString()
			}
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(r.a)({
				features: {
					crypto: s.a
				}
			});
			const o = (e, t) => {
					var n;
					return t && (null === (n = e.user.wallets[t.subredditId]) || void 0 === n ? void 0 : n.latest)
				},
				i = (e, t) => {
					var n;
					return null === (n = o(e, t)) || void 0 === n ? void 0 : n.publicAddress
				},
				d = (e, t) => {
					var n, r, s, o;
					return null === (o = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === o ? void 0 : o[t.subredditId]
				}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return b
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			const s = [],
				o = {},
				i = (e, t) => {
					const n = f(e, t);
					if (n) return n.mainHeader
				},
				d = (e, t) => {
					const n = f(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				c = (e, t) => {
					const n = f(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : o
				},
				a = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				u = (e, t) => {
					const n = a(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				l = (e, t) => {
					const n = a(e, t);
					return n && n.amount || "0"
				},
				b = (e, t) => {
					const n = Object(r.o)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || s
				},
				f = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/HarbergerTaxBannerPurchaseCTA.2bacce2af46b800615ae.js.map