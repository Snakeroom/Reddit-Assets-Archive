// https://www.redditstatic.com/desktop2x/NftProfileUnit.7d61d54e47b48b24eba8.js
// Retrieved at 1/18/2023, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NftProfileUnit"], {
		"./node_modules/classnames/index.js": function(e, t, r) {
			var n;
			! function() {
				"use strict";
				var r = {}.hasOwnProperty;

				function s() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var n = arguments[t];
						if (n) {
							var a = typeof n;
							if ("string" === a || "number" === a) e.push(n);
							else if (Array.isArray(n)) {
								if (n.length) {
									var i = s.apply(null, n);
									i && e.push(i)
								}
							} else if ("object" === a)
								if (n.toString === Object.prototype.toString)
									for (var o in n) r.call(n, o) && n[o] && e.push(o);
								else e.push(n.toString())
						}
					}
					return e.join(" ")
				}
				e.exports ? (s.default = s, e.exports = s) : void 0 === (n = function() {
					return s
				}.apply(t, [])) || (e.exports = n)
			}()
		},
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/env/index.ts"),
				a = r("./node_modules/react/index.js"),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/endpoints/governance/crypto.ts"),
				c = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				u = r("./src/reddit/selectors/telemetry.ts"),
				l = r("./src/reddit/selectors/user.ts");
			const m = !(Object(s.c)() || Object(s.b)()),
				p = {
					GRAPHQL_URL: n.a.gqlUrl,
					IS_DEVELOPMENT: m,
					IS_PRODUCTION: !m,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: n.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${n.a.snoovatarUrl}/api`
				},
				f = () => {
					const e = Object(i.e)(d.a),
						t = Object(i.e)(e => e.user.session),
						r = t ? t.accessToken : "",
						s = t ? new Date(t.expires).getTime() : 1,
						f = Object(i.e)(l.fb),
						b = Object(c.a)(),
						h = m ? o.a.Rinkeby : o.a.Ethereum,
						E = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${r}`
							},
							expiration: s
						}), [r, s]),
						k = {
							...p,
							STRIPE_API_KEY: n.a.stripe.apiKey(e),
							ACCESS_TOKEN: r,
							BLOCKCHAIN_PROVIDER: h
						},
						y = Object(a.useCallback)(e => {
							b(t => {
								const r = u.o(t);
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
						}, [b]);
					return Object(a.useMemo)(() => ({
						authHeaders: E,
						config: k,
						isNightMode: f,
						sendEvent: y
					}), [E, k, f, y])
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
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				o = r("./src/reddit/actions/modal.ts"),
				c = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				d = r("./src/reddit/components/GlobalModalContainer/registry.ts"),
				u = r("./src/reddit/constants/modals.ts");
			const l = () => r.e("NftProductDetailsModal").then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProductDetails/index.tsx")),
				m = Object(c.a)(l, {
					ssr: !1
				});
			Object(d.b)(u.a.ECON_NFT_PRODUCT_DETAILS, e => s.a.createElement(m, {
				onClose: e,
				onOverlayClick: e
			}));
			var p = r("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				f = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				b = r("./src/reddit/hooks/usePreloadModal.ts"),
				h = r("./src/reddit/hooks/useTracking.ts"),
				E = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.m.less"),
				k = r.n(E);
			t.default = e => {
				let {
					className: t,
					imageUrl: r,
					origin: n
				} = e;
				const c = Object(a.d)(),
					d = Object(h.a)();
				Object(b.a)(l);
				const m = Object(i.j)(r);
				return m ? s.a.createElement("div", {
					className: t
				}, s.a.createElement(p.a, null, s.a.createElement(s.a.Fragment, null, s.a.createElement(i.h, {
					imageUrl: r
				}), s.a.createElement(i.g, {
					className: k.a.detailsButton,
					onClick: () => {
						d(Object(f.k)(n)), c(Object(o.h)(u.a.ECON_NFT_PRODUCT_DETAILS, {
							itemId: m
						}))
					}
				})))) : null
			}
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			}));
			const n = {},
				s = () => null;

			function a(e, t) {
				if (e in n) throw new Error(`Modal with id ${e} already registered!`);
				n[e] = t
			}

			function i(e) {
				return e && e in n ? n[e] : s
			}
		},
		"./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = e => {
				let {
					children: t
				} = e;
				const r = Object(i.a)();
				return a.a.createElement(n.d, o({}, r, {
					shouldContainModal: !1
				}), t)
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "h", (function() {
				return c
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
				return f
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "n", (function() {
				return k
			}));
			var n, s = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
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

			function o(e) {
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

			function c(e) {
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
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function m(e, t, r) {
				return await Object(a.a)(e, {
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
				f = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
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
			async function k(e, t) {
				return await Object(a.a)(e, {
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
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(s.a)(n.kd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProfileUnit.7d61d54e47b48b24eba8.js.map