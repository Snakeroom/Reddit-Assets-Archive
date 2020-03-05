// https://www.redditstatic.com/desktop2x/HarbergerTaxBannerPurchaseCTA.cddf175afe04511f1969.js
// Retrieved at 3/5/2020, 2:40:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["HarbergerTaxBannerPurchaseCTA"], {
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
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
				i = Object(n.a)(s.e),
				d = Object(n.a)(s.a),
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/prettyPrintNumber/index.ts"),
				a = r("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				u = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/components/Governance/Token/index.tsx"),
				b = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/featureFlags/component.tsx"),
				p = r("./src/reddit/helpers/governance/ethereum.ts"),
				g = r("./src/reddit/helpers/governance/tokens.ts"),
				h = r("./src/reddit/i18n/components.tsx"),
				j = r("./src/reddit/i18n/utils.ts"),
				x = r("./src/reddit/selectors/gov.ts"),
				y = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.m.less"),
				w = r.n(y);
			const v = Object(i.c)({
					cost: (e, t) => {
						const r = Object(m.q)(e, t);
						if (r) return Object(x.d)(e, {
							subredditId: r.id
						})
					},
					publicAddress: (e, t) => {
						const r = Object(m.q)(e, t),
							n = e.user.account;
						if (r && n) {
							const t = Object(x.i)(e, {
								subredditId: r.id,
								userId: n.id
							});
							if (t) return t.publicAddress
						}
					},
					subreddit: m.q,
					tokenDisplayConversion: (e, t) => {
						const r = Object(m.q)(e, t) || void 0;
						return Object(x.n)(e, {
							subredditId: r && r.id
						})
					},
					useCrypto: (e, t) => {
						const r = Object(m.q)(e, t);
						return !!r && Object(x.r)(e, {
							subredditId: r.id
						})
					},
					userOwnsBanner: (e, t) => {
						const r = Object(m.q)(e, t),
							n = e.user.account;
						if (r && n) {
							return Object(x.e)(e, {
								subredditId: r.id
							}).ownerId === n.id
						}
						return !1
					}
				}),
				O = Object(o.b)(v, e => ({
					onHideTooltip: () => e(Object(u.i)()),
					onOpenManageFlow: (t, r) => e(r ? Object(a.a)({
						subredditId: t
					}) : Object(a.c)({
						subredditId: t
					})),
					onOpenPurchaseFlow: (t, r) => e(r ? Object(a.b)({
						subredditId: t
					}) : Object(a.e)({
						subredditId: t
					})),
					onShowTooltip: t => e(Object(u.f)({
						tooltipId: t
					}))
				})),
				I = Object(m.t)();
			t.default = Object(f.a)("spHarberger", I(O((function(e) {
				const {
					cost: t,
					publicAddress: r,
					subreddit: o,
					useCrypto: i,
					userOwnsBanner: a,
					onHideTooltip: u,
					onOpenManageFlow: m,
					onOpenPurchaseFlow: f,
					onShowTooltip: x,
					tokenDisplayConversion: y
				} = e;
				if (!t || !o) return null;
				const v = Object(p.e)(),
					O = !a && i && (!v || !!!r),
					I = "harberger-cta-".concat(o.id);
				return s.a.createElement("div", {
					className: Object(d.a)(w.a.container, {
						[w.a.disabled]: O
					}),
					id: I,
					onClick: () => {
						O || (a ? m(o.id, i) : f(o.id, i))
					},
					onMouseOver: () => x(I),
					onMouseOut: u
				}, a ? s.a.createElement(h.c, null, "manage banner") : s.a.createElement(n.Fragment, null, s.a.createElement(h.c, null, "buy banner"), s.a.createElement(l.a, {
					className: w.a.token,
					subredditId: o.id
				}), Object(c.a)(Object(g.b)(t, y))), O && s.a.createElement(b.c, {
					tooltipId: I,
					text: v ? Object(j.c)("You must register your wallet address to purchase the banner") : Object(j.c)("You must have metamask installed to purchase the banner")
				}))
			}))))
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				c = r("./src/reddit/selectors/gov.ts");
			const a = Object(i.c)({
				tokenSymbol: c.p
			});
			t.a = Object(o.b)(a)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return s.a.createElement("img", {
					className: e.className,
					src: "".concat(d.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			}));
			var n, s = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
				switch (e) {
					case n.Ethereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function d(e, t, r) {
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
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(n || (n = {}))
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "i", (function() {
				return h
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

			function i() {
				const e = s();
				return e && e.selectedAddress || null
			}

			function d() {
				return s().networkVersion || null
			}

			function c() {
				const e = s();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return i() ? Promise.resolve() : e.enable()
			}
			const a = 4001;
			async function u(e, t, n, o) {
				const [i, d] = await Promise.all([r.e("vendors~CryptoLibEthers").then(r.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const a = new i.providers.Web3Provider(s()).getSigner(),
					u = new i.Contract(e, d, a),
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
				const i = await r.e("vendors~CryptoLibEthers").then(r.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: d,
						hexlify: c,
						hexZeroPad: a,
						toUtf8Bytes: m
					} = i.utils,
					f = d(n).add(o),
					p = b,
					g = "0x" + [c(1)].concat([p, d(s), d(o)].map(c).map(e => a(e, 32))).concat(c(m(""))).map(e => e.substr(2)).join("");
				return async function(e, t, r, n) {
					return u(e, Promise.resolve(l), "send", [t, r, n])
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
			async function p(e, t, r) {
				await c();
				const s = i() || "";
				if (t.toLowerCase() !== s.toLowerCase()) throw new Error(Object(n.c)("Please select your registered address in MetaMask: ") + t);
				return u(e, Promise.resolve(f), "subscribe", [t, r])
			}

			function g(e) {
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
								message: Object(n.c)("No signature returned from ethereum provider.")
							})
						}
					})
				})
			}

			function h(e) {
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
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				s = r("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return r.dividedBy(s).decimalPlaces(2).toString()
			}

			function i(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function d(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return r.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return u
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/platform.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const d = new Set(["pollstest", "whatssnoo"]),
				c = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				a = e => d.has(e.toLowerCase()) || c.has(e.toLowerCase()),
				u = e => d.has((Object(o.e)(e) || "").toLowerCase()) || c.has((Object(o.e)(e) || "").toLowerCase()) && Object(s.c)(e, {
					experimentEligibilitySelector: i.G,
					experimentName: n.bb
				}) === n.ib.Enabled
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
				return g
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "j", (function() {
				return j
			})), r.d(t, "o", (function() {
				return x
			})), r.d(t, "p", (function() {
				return y
			})), r.d(t, "n", (function() {
				return w
			})), r.d(t, "k", (function() {
				return v
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "s", (function() {
				return I
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "f", (function() {
				return P
			})), r.d(t, "q", (function() {
				return k
			})), r.d(t, "m", (function() {
				return T
			})), r.d(t, "r", (function() {
				return C
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts"),
				o = r("./src/reddit/featureFlags/index.ts"),
				i = r("./src/reddit/selectors/experiments/pollsGA.ts"),
				d = r("./src/reddit/selectors/postCreations.ts");
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
					const n = I(e, {
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
					const r = v(e, t);
					if (r) return r.mainHeader
				},
				m = (e, t) => {
					const r = v(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				f = (e, t) => {
					const r = v(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : a
				},
				p = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(i.b)(e)) {
						const t = Object(d.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const r = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return r && !e
					}
					return r
				},
				h = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				j = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || c
				},
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || u,
				w = (e, t) => {
					const r = k(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				v = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				O = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				I = (e, t) => {
					const r = O(e, t);
					return r && r.walletProvider
				},
				_ = (e, t) => {
					const r = I(e, t),
						n = O(e, t);
					return r && r.provider || n && n.provider
				},
				P = (e, t) => {
					const r = _(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby
				},
				k = (e, t) => {
					const r = I(e, t),
						n = _(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const o = r && r.extra && r.extra.contracts,
						i = o && o.unlocked;
					return i && {
						address: i.address,
						symbol: i.token || "",
						decimals: i.decimals || 18,
						image: i.image
					}
				},
				T = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = I(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				C = (e, t) => {
					const r = O(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=HarbergerTaxBannerPurchaseCTA.cddf175afe04511f1969.js.map