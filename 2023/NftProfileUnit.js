// https://www.redditstatic.com/desktop2x/NftProfileUnit.0d360640292e88bb3499.js
// Retrieved at 6/8/2023, 8:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NftProfileUnit"], {
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/env/index.ts"),
				i = r("./node_modules/react/index.js"),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/endpoints/governance/crypto.ts"),
				o = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				l = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				m = r("./src/reddit/selectors/telemetry.ts"),
				p = r("./src/reddit/selectors/user.ts");
			const b = !(Object(s.c)() || Object(s.b)()),
				f = {
					GRAPHQL_URL: n.a.gqlUrl,
					IS_DEVELOPMENT: b,
					IS_PRODUCTION: !b,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: n.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${n.a.snoovatarUrl}/api`
				},
				h = () => {
					const e = Object(c.e)(l.a),
						t = Object(c.e)(d.p),
						r = Object(c.e)(u.b),
						s = Object(c.e)(e => e.user.session),
						h = s ? s.accessToken : "",
						E = s ? new Date(s.expires).getTime() : 1,
						O = Object(c.e)(p.fb),
						k = Object(o.a)(),
						_ = b ? a.a.Rinkeby : a.a.Ethereum,
						y = Object(i.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${h}`
							},
							expiration: E
						}), [h, E]),
						j = {
							...f,
							STRIPE_API_KEY: n.a.stripe.apiKey(e),
							STRIPE_API_VERSION: n.a.stripe.apiVersion(t),
							ACCESS_TOKEN: h,
							BLOCKCHAIN_PROVIDER: _,
							OVERRIDES: r ? {
								NO_VAULT: !0
							} : {}
						},
						x = Object(i.useCallback)(e => {
							k(t => {
								const r = m.o(t);
								return {
									...r,
									...e,
									app: r.app,
									source: e.source || "marketplace",
									actionInfo: {
										...r.actionInfo,
										...e.actionInfo
									}
								}
							})
						}, [k]);
					return Object(i.useMemo)(() => ({
						authHeaders: y,
						config: j,
						isNightMode: O,
						sendEvent: x
					}), [y, j, O, x])
				}
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.m.less": function(e, t, r) {
			e.exports = {
				detailsButton: "_3QDuMIB5Qg310ADO1_fdV2"
			}
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				a = r("./src/reddit/actions/modal.ts"),
				o = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				d = r("./src/reddit/components/GlobalModalContainer/registry.ts"),
				u = r("./src/reddit/constants/modals.ts");
			const l = () => r.e("NftProductDetailsModal").then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProductDetails/index.tsx")),
				m = Object(o.a)(l, {
					ssr: !1
				});
			Object(d.b)(u.a.ECON_NFT_PRODUCT_DETAILS, e => s.a.createElement(m, {
				onClose: e,
				onOverlayClick: e
			}));
			var p = r("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				b = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				f = r("./src/reddit/hooks/usePreloadModal.ts"),
				h = r("./src/reddit/hooks/useTracking.ts"),
				E = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.m.less"),
				O = r.n(E);
			t.default = e => {
				let {
					className: t,
					imageUrl: r,
					origin: n,
					showDetailsCta: o
				} = e;
				const d = Object(i.d)(),
					m = Object(h.a)();
				Object(f.a)(l);
				const E = Object(c.l)(r);
				return E ? s.a.createElement("div", {
					className: t
				}, s.a.createElement(p.a, null, s.a.createElement(s.a.Fragment, null, s.a.createElement(c.h, {
					imageUrl: r,
					hideCardNaming: !0
				}), o && s.a.createElement(c.g, {
					className: O.a.detailsButton,
					onClick: () => {
						m(Object(b.k)(n)), d(Object(a.h)(u.a.ECON_NFT_PRODUCT_DETAILS, {
							itemId: E
						}))
					}
				})))) : null
			}
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return c
			}));
			const n = {},
				s = () => null;

			function i(e, t) {
				if (e in n) throw new Error(`Modal with id ${e} already registered!`);
				n[e] = t
			}

			function c(e) {
				return e && e in n ? n[e] : s
			}
		},
		"./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				c = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const o = e => {
				let {
					children: t
				} = e;
				const r = Object(c.a)();
				return i.a.createElement(n.d, a({}, r, {
					shouldContainModal: !1
				}), t)
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return c
			})), r.d(t, "i", (function() {
				return a
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "l", (function() {
				return d
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "n", (function() {
				return O
			}));
			var n, s = r("./src/config.ts"),
				i = r("./src/reddit/endpoints/governance/requester.ts");

			function c(e) {
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

			function a(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case n.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184";
					case n.ArbitrumNitroDevnet:
						return "https://meta-api.reddit.com/ethereum/nitroDevnet";
					case n.ArbitrumMainnet:
						return "https://a4ba.arbitrum.io/rpc";
					default:
						return `https://meta-api.reddit.com/ethereum/${e}`
				}
			}

			function o(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby";
					case n.ArbitrumRinkeby:
						return 5391184;
					case n.ArbitrumNitroDevnet:
						return 421612;
					case n.ArbitrumMainnet:
						return 42170;
					default: {
						const [, t] = e.split(":");
						return t
					}
				}
			}

			function d(e) {
				return e === n.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(e, t, r) {
				return Object(i.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(i.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function m(e, t, r) {
				return await Object(i.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumNova = "ethereum:42170", e.ArbitrumRinkeby = "ethereum:5391184", e.ArbitrumNitroDevnet = "ethereum:421612", e.ArbitrumMainnet = "ethereum:42170", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(n || (n = {}));
			const p = (e, t, r) => ({
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
				h = e => ({
					type: "subscribe",
					subredditId: e
				}),
				E = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function O(e, t) {
				return await Object(i.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js");

			function s(e) {
				Object(n.useEffect)(() => {
					e()
				}, [e])
			}
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = e => {
					return !(Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.Ge
					}) === n.Wd)
				},
				a = Object(i.a)(n.He)
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const i = Object(s.a)(n.Gd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProfileUnit.0d360640292e88bb3499.js.map