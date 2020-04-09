// https://www.redditstatic.com/desktop2x/HarbergerTaxBannerPurchaseCTA.914a24ea4bf603cac8f2.js
// Retrieved at 4/9/2020, 12:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["HarbergerTaxBannerPurchaseCTA"], {
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "a", (function() {
				return i
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
				return m
			})), n.d(t, "j", (function() {
				return f
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/harbergerTax/constants.ts");
			const o = Object(r.a)(s.c),
				d = Object(r.a)(s.e),
				i = Object(r.a)(s.a),
				c = Object(r.a)(s.b),
				a = Object(r.a)(s.d),
				u = Object(r.a)(s.f),
				l = Object(r.a)(s.g),
				b = Object(r.a)(s.h),
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/Governance/Token/index.tsx"),
				b = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/featureFlags/component.tsx"),
				p = n("./src/reddit/helpers/governance/ethereum.ts"),
				g = n("./src/reddit/helpers/governance/tokens.ts"),
				h = n("./src/reddit/i18n/components.tsx"),
				j = n("./src/reddit/i18n/utils.ts"),
				y = n("./src/reddit/selectors/gov.ts"),
				x = n("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.m.less"),
				O = n.n(x);
			const v = Object(d.c)({
					cost: (e, t) => {
						const n = Object(m.q)(e, t);
						if (n) return Object(y.d)(e, {
							subredditId: n.id
						})
					},
					publicAddress: (e, t) => {
						const n = Object(m.q)(e, t),
							r = e.user.account;
						if (n && r) {
							const t = Object(y.i)(e, {
								subredditId: n.id,
								userId: r.id
							});
							if (t) return t.publicAddress
						}
					},
					subreddit: m.q,
					tokenDisplayConversion: (e, t) => {
						const n = Object(m.q)(e, t) || void 0;
						return Object(y.o)(e, {
							subredditId: n && n.id
						})
					},
					useCrypto: (e, t) => {
						const n = Object(m.q)(e, t);
						return !!n && Object(y.k)(e, {
							subredditId: n.id
						})
					},
					userOwnsBanner: (e, t) => {
						const n = Object(m.q)(e, t),
							r = e.user.account;
						if (n && r) {
							return Object(y.e)(e, {
								subredditId: n.id
							}).ownerId === r.id
						}
						return !1
					}
				}),
				w = Object(o.b)(v, e => ({
					onHideTooltip: () => e(Object(u.i)()),
					onOpenManageFlow: (t, n) => e(n ? Object(a.a)({
						subredditId: t
					}) : Object(a.c)({
						subredditId: t
					})),
					onOpenPurchaseFlow: (t, n) => e(n ? Object(a.b)({
						subredditId: t
					}) : Object(a.e)({
						subredditId: t
					})),
					onShowTooltip: t => e(Object(u.f)({
						tooltipId: t
					}))
				})),
				I = Object(m.t)();
			t.default = Object(f.a)("spHarberger", I(w((function(e) {
				const {
					cost: t,
					publicAddress: n,
					subreddit: o,
					useCrypto: d,
					userOwnsBanner: a,
					onHideTooltip: u,
					onOpenManageFlow: m,
					onOpenPurchaseFlow: f,
					onShowTooltip: y,
					tokenDisplayConversion: x
				} = e;
				if (!t || !o) return null;
				const v = Object(p.e)(),
					w = !a && d && (!v || !!!n),
					I = "harberger-cta-".concat(o.id);
				return s.a.createElement("div", {
					className: Object(i.a)(O.a.container, {
						[O.a.disabled]: w
					}),
					id: I,
					onClick: () => {
						w || (a ? m(o.id, d) : f(o.id, d))
					},
					onMouseOver: () => y(I),
					onMouseOut: u
				}, a ? s.a.createElement(h.c, null, "manage banner") : s.a.createElement(r.Fragment, null, s.a.createElement(h.c, null, "buy banner"), s.a.createElement(l.a, {
					className: O.a.token,
					subredditId: o.id
				}), Object(c.a)(Object(g.b)(t, x))), w && s.a.createElement(b.c, {
					tooltipId: I,
					text: v ? Object(j.c)("You must register your wallet address to purchase the banner") : Object(j.c)("You must have metamask installed to purchase the banner")
				}))
			}))))
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/reddit/selectors/gov.ts");
			const a = Object(d.c)({
				tokenSymbol: c.q
			});
			t.a = Object(o.b)(a)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return s.a.createElement("img", {
					className: e.className,
					src: "".concat(i.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			}));
			var r, s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function d(e) {
				switch (e) {
					case r.Ethereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function i(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function c(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function a(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(r || (r = {}))
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/i18n/utils.ts");

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
			async function u(e, t, r, o) {
				const [d, i] = await Promise.all([n.e("vendors~CryptoLibEthers").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const a = new d.providers.Web3Provider(s()).getSigner(),
					u = new d.Contract(e, i, a),
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
			async function m(e, t, r, s, o) {
				const d = await n.e("vendors~CryptoLibEthers").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: c,
						hexZeroPad: a,
						toUtf8Bytes: m
					} = d.utils,
					f = i(r).add(o),
					p = b,
					g = "0x" + [c(1)].concat([p, i(s), i(o)].map(c).map(e => a(e, 32))).concat(c(m(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, r) {
					return u(e, Promise.resolve(l), "send", [t, n, r])
				}(e, t, f.toString(), g)
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
				await c();
				const s = d() || "";
				if (t.toLowerCase() !== s.toLowerCase()) throw new Error(Object(r.c)("Please select your registered address in MetaMask: ") + t);
				return u(e, Promise.resolve(f), "subscribe", [t, n])
			}

			function g(e) {
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
								message: Object(r.c)("No signature returned from ethereum provider.")
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
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.dividedBy(s).decimalPlaces(2).toString()
			}

			function d(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => !0
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "s", (function() {
				return I
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "n", (function() {
				return T
			})), n.d(t, "k", (function() {
				return A
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				d = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			const c = [],
				a = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				l = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = I(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				b = (e, t) => {
					const n = v(e, t);
					if (n) return n.mainHeader
				},
				m = (e, t) => {
					const n = v(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				f = (e, t) => {
					const n = v(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : a
				},
				p = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(d.a)(e)) {
						const t = Object(i.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const n = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						r = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (r) {
						const e = !!r.polls && !1 === r.polls.canCreate;
						return n && !e
					}
					return n
				},
				h = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				j = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || c
				},
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || u,
				O = (e, t) => {
					const n = k(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				v = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				w = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				I = (e, t) => {
					const n = w(e, t);
					return n && n.walletProvider
				},
				P = (e, t) => {
					const n = I(e, t),
						r = w(e, t);
					return n && n.provider || r && r.provider
				},
				_ = (e, t) => {
					const n = P(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby
				},
				k = (e, t) => {
					const n = I(e, t),
						r = P(e, t);
					if (n && !n.inTransition && r === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const o = n && n.extra && n.extra.contracts,
						d = o && o.unlocked;
					return d && {
						address: d.address,
						symbol: d.token || "",
						decimals: d.decimals || 18,
						image: d.image
					}
				},
				T = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = I(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				A = (e, t) => {
					const n = w(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=HarbergerTaxBannerPurchaseCTA.914a24ea4bf603cac8f2.js.map