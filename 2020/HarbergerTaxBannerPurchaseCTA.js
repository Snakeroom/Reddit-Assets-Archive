// https://www.redditstatic.com/desktop2x/HarbergerTaxBannerPurchaseCTA.6a184af952d8c90da120.js
// Retrieved at 9/21/2020, 7:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["HarbergerTaxBannerPurchaseCTA"], {
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "j", (function() {
				return f
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/harbergerTax/constants.ts");
			const o = Object(r.a)(s.c),
				c = Object(r.a)(s.e),
				i = Object(r.a)(s.a),
				d = Object(r.a)(s.b),
				a = Object(r.a)(s.d),
				u = Object(r.a)(s.f),
				b = Object(r.a)(s.g),
				l = Object(r.a)(s.h),
				m = Object(r.a)(s.i),
				f = Object(r.a)(s.j)
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
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				b = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/Governance/Token/index.tsx"),
				m = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/featureFlags/component.tsx"),
				h = n("./src/reddit/helpers/governance/ethereum.ts"),
				j = n("./src/reddit/helpers/governance/tokens.ts"),
				g = n("./src/reddit/selectors/gov.ts"),
				y = n("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.m.less"),
				O = n.n(y);
			const x = Object(i.c)({
					cost: (e, t) => {
						const n = Object(f.q)(e, t);
						if (n) return Object(g.d)(e, {
							subredditId: n.id
						})
					},
					publicAddress: (e, t) => {
						const n = Object(f.q)(e, t),
							r = e.user.account;
						if (n && r) {
							const t = Object(g.j)(e, {
								subredditId: n.id,
								userId: r.id
							});
							if (t) return t.publicAddress
						}
					},
					subreddit: f.q,
					tokenDisplayConversion: (e, t) => {
						const n = Object(f.q)(e, t) || void 0;
						return Object(g.p)(e, {
							subredditId: n && n.id
						})
					},
					useCrypto: (e, t) => {
						const n = Object(f.q)(e, t);
						return !!n && Object(g.l)(e, {
							subredditId: n.id
						})
					},
					userOwnsBanner: (e, t) => {
						const n = Object(f.q)(e, t),
							r = e.user.account;
						if (n && r) {
							return Object(g.e)(e, {
								subredditId: n.id
							}).ownerId === r.id
						}
						return !1
					}
				}),
				w = Object(c.b)(x, e => ({
					onHideTooltip: () => e(Object(b.i)()),
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
					onShowTooltip: t => e(Object(b.f)({
						tooltipId: t
					}))
				})),
				_ = Object(f.t)();
			t.default = Object(p.a)("spHarberger", _(w((function(e) {
				const {
					cost: t,
					publicAddress: n,
					subreddit: c,
					useCrypto: i,
					userOwnsBanner: u,
					onHideTooltip: b,
					onOpenManageFlow: f,
					onOpenPurchaseFlow: p,
					onShowTooltip: g,
					tokenDisplayConversion: y
				} = e;
				if (!t || !c) return null;
				const x = Object(h.e)(),
					w = !u && i && (!x || !!!n),
					_ = "harberger-cta-".concat(c.id);
				return o.a.createElement("div", {
					className: Object(d.a)(O.a.container, {
						[O.a.disabled]: w
					}),
					id: _,
					onClick: () => {
						w || (u ? f(c.id, i) : p(c.id, i))
					},
					onMouseOver: () => g(_),
					onMouseOut: b
				}, u ? r.fbt._("manage banner", null, {
					hk: "bVWkT"
				}) : o.a.createElement(s.Fragment, null, r.fbt._("buy banner", null, {
					hk: "BcYLs"
				}), o.a.createElement(l.a, {
					className: O.a.token,
					subredditId: c.id
				}), Object(a.a)(Object(j.b)(t, y))), w && o.a.createElement(m.c, {
					tooltipId: _,
					text: x ? r.fbt._("You must register your wallet address to purchase the banner", null, {
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
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/selectors/gov.ts"),
				u = n("./src/reddit/components/Governance/Token/index.m.less"),
				b = n.n(u);
			const l = Object(c.c)({
				tokenSymbol: a.r
			});
			t.a = Object(o.b)(l)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = "".concat(i.a.assetPath, "/").concat(t);
				if (e.grey && n.endsWith(".svg")) {
					const t = "url(".concat(n, ") center/cover");
					return s.a.createElement("div", {
						className: Object(d.a)(b.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: n
				})
			}))
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function s() {
				return window.ethereum
			}

			function o() {
				const e = s();
				return !(!e || !e.isMetaMask)
			}

			function c() {
				const e = s();
				return e && e.selectedAddress || null
			}

			function i() {
				return s().networkVersion || null
			}

			function d() {
				const e = s();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return c() ? Promise.resolve() : e.enable()
			}
			const a = 4001;
			async function u(e, t, r, o) {
				const [c, i] = await Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~89877e6b").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await d();
				const a = new c.providers.Web3Provider(s()).getSigner(),
					u = new c.Contract(e, i, a),
					b = await u[r](...o);
				return await b.wait()
			}
			const b = {
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
			const l = 1;
			async function m(e, t, r, s, o) {
				const c = await n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~89877e6b").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: d,
						hexZeroPad: a,
						toUtf8Bytes: m
					} = c.utils,
					f = i(r).add(o),
					p = l,
					h = "0x" + [d(1)].concat([p, i(s), i(o)].map(d).map(e => a(e, 32))).concat(d(m(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, r) {
					return u(e, Promise.resolve(b), "send", [t, n, r])
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
			async function p(e, t, n) {
				await d();
				const s = c() || "";
				if (t.toLowerCase() !== s.toLowerCase()) throw new Error(r.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [r.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return u(e, Promise.resolve(f), "subscribe", [t, n])
			}

			function h(e) {
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

			function j(e) {
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
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.dividedToIntegerBy(s).toString()
			}

			function c(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.multipliedBy(s).toFixed(0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/HarbergerTaxBannerPurchaseCTA.6a184af952d8c90da120.js.map