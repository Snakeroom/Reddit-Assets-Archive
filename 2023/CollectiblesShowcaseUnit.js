// https://www.redditstatic.com/desktop2x/CollectiblesShowcaseUnit.b2d35bc1f6802d62b9b1.js
// Retrieved at 7/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectiblesShowcaseUnit"], {
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/env/index.ts"),
				a = r("./node_modules/react/index.js"),
				c = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/endpoints/governance/crypto.ts"),
				o = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				u = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				l = r("./src/reddit/selectors/telemetry.ts"),
				m = r("./src/reddit/selectors/user.ts");
			const p = !(Object(s.c)() || Object(s.b)()),
				b = {
					GRAPHQL_URL: n.a.gqlUrl,
					IS_DEVELOPMENT: p,
					IS_PRODUCTION: !p,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: n.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${n.a.snoovatarUrl}/api`
				},
				h = () => {
					const e = Object(c.e)(u.a),
						t = Object(c.e)(d.b),
						r = Object(c.e)(e => e.user.session),
						s = r ? r.accessToken : "",
						h = r ? new Date(r.expires).getTime() : 1,
						f = Object(c.e)(m.fb),
						O = Object(o.a)(),
						E = p ? i.a.Rinkeby : i.a.Ethereum,
						k = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${s}`
							},
							expiration: h
						}), [s, h]),
						y = {
							...b,
							STRIPE_API_KEY: n.a.stripe.apiKey(e),
							STRIPE_API_VERSION: n.a.stripe.apiVersion(!0),
							ACCESS_TOKEN: s,
							BLOCKCHAIN_PROVIDER: E,
							OVERRIDES: t ? {
								NO_VAULT: !0
							} : {}
						},
						_ = Object(a.useCallback)(e => {
							O(t => {
								const r = l.q(t);
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
						}, [O]);
					return Object(a.useMemo)(() => ({
						authHeaders: k,
						config: y,
						isNightMode: f,
						sendEvent: _
					}), [k, y, f, _])
				}
		},
		"./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				i = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				d = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				l = r("./src/reddit/hooks/usePreloadModal.ts"),
				m = r("./src/reddit/selectors/telemetry.ts"),
				p = r("./src/reddit/selectors/user.ts"),
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/async.tsx");
			const f = e => e === u.a.Profile ? "profile_page" : e === u.a.Hovercard ? "user_hovercard" : "";
			t.default = e => {
				let {
					origin: t,
					userName: r
				} = e;
				const n = Object(b.b)(),
					O = Object(a.f)().getState(),
					E = Object(p.Db)(O, {
						userName: r
					}),
					k = Object(p.k)(O),
					y = Object(a.d)();
				return Object(l.a)(h.a), s.a.createElement(o.a, null, s.a.createElement(c.j, {
					origin: t,
					profileId: E.id || "",
					profileDisplayName: E.displayName || "",
					telemetryPageType: Object(m.x)(O.platform.currentPage) || "",
					loggedInUserProfileId: k || "",
					onOutfitClick: e => {
						n(Object(u.k)(f(t))), y(Object(i.h)(d.a.ECON_NFT_PRODUCT_DETAILS, {
							itemId: e.detail.outfit.id
						}))
					},
					onViewAll: () => {
						y(Object(i.h)(d.a.X_SHOWCASE_COLLECTION_VIEW_MODAL, {
							telemetryReason: f(t),
							profileUserName: E.displayName || ""
						}))
					}
				}))
			}
		},
		"./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				c = r("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = r("./src/reddit/constants/modals.ts");
			const o = () => Promise.all([r.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), r.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), r.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), r.e("ShowcaseCollectionViewModal")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/index.tsx")),
				d = Object(n.a)(o, {
					ssr: !1
				});
			Object(c.b)(i.a.X_SHOWCASE_COLLECTION_VIEW_MODAL, e => a.a.createElement(d, {
				onClose: e,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			}));
			const n = {},
				s = () => null;

			function a(e, t) {
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
				a = r.n(s),
				c = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function i() {
				return (i = Object.assign || function(e) {
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
				return a.a.createElement(n.d, i({}, r, {
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
				return i
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
				return h
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "n", (function() {
				return E
			}));
			var n, s = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");

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

			function i(e) {
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
				b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				O = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function E(e, t) {
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
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = e => {
					return !(Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.Le
					}) === n.Zd)
				},
				i = Object(a.a)(n.Me)
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(s.a)(n.Jd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectiblesShowcaseUnit.b2d35bc1f6802d62b9b1.js.map