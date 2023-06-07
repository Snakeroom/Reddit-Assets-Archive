// https://www.redditstatic.com/desktop2x/ShowcaseCollectionViewModal.f987a6396dcd6ba25ee4.js
// Retrieved at 6/7/2023, 1:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ShowcaseCollectionViewModal"], {
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/env/index.ts"),
				o = r("./node_modules/react/index.js"),
				c = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/endpoints/governance/crypto.ts"),
				a = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				l = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				m = r("./src/reddit/selectors/telemetry.ts"),
				p = r("./src/reddit/selectors/user.ts");
			const b = !(Object(s.c)() || Object(s.b)()),
				h = {
					GRAPHQL_URL: n.a.gqlUrl,
					IS_DEVELOPMENT: b,
					IS_PRODUCTION: !b,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: n.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${n.a.snoovatarUrl}/api`
				},
				f = () => {
					const e = Object(c.e)(l.a),
						t = Object(c.e)(d.p),
						r = Object(c.e)(u.b),
						s = Object(c.e)(e => e.user.session),
						f = s ? s.accessToken : "",
						O = s ? new Date(s.expires).getTime() : 1,
						k = Object(c.e)(p.fb),
						j = Object(a.a)(),
						E = b ? i.a.Rinkeby : i.a.Ethereum,
						y = Object(o.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${f}`
							},
							expiration: O
						}), [f, O]),
						_ = {
							...h,
							STRIPE_API_KEY: n.a.stripe.apiKey(e),
							STRIPE_API_VERSION: n.a.stripe.apiVersion(t),
							ACCESS_TOKEN: f,
							BLOCKCHAIN_PROVIDER: E,
							OVERRIDES: r ? {
								NO_VAULT: !0
							} : {}
						},
						x = Object(o.useCallback)(e => {
							j(t => {
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
						}, [j]);
					return Object(o.useMemo)(() => ({
						authHeaders: y,
						config: _,
						isNightMode: k,
						sendEvent: x
					}), [y, _, k, x])
				}
		},
		"./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2qYMZqLHUsj5rNJ9zRUfa1",
				modal: "LChrfH1BTAbB_Q9tUT-OS"
			}
		},
		"./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "_ShowcaseCollectionView", (function() {
				return A
			}));
			var n = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/noop.js"),
				c = r.n(o),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				d = r("./node_modules/react-redux/es/index.js"),
				u = r("./src/higherOrderComponents/asModal/index.tsx"),
				l = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				p = r("./src/reddit/constants/modals.ts"),
				b = r("./src/reddit/hooks/useToast.tsx"),
				h = r("./src/reddit/selectors/profile.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/components/TrackingHelper/index.tsx"),
				k = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				E = r("./src/reddit/selectors/activeModal.ts"),
				y = r("./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/index.m.less"),
				_ = r.n(y);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const A = e => {
					let {
						onClose: t
					} = e;
					const r = Object(b.b)(),
						o = Object(b.a)(),
						i = Object(O.b)(),
						u = Object(d.d)(),
						y = Object(d.f)().getState(),
						x = Object(d.e)(e => Object(E.a)(e)),
						{
							telemetryReason: A,
							profileUserName: v
						} = x || {},
						g = Object(f.Db)(y, {
							userName: v || ""
						}) || {},
						w = Object(h.j)(y, g.profileId),
						T = Object(n.l)(g.snoovatarFullBodyAsset || "");
					return a.a.createElement(m.a, null, a.a.createElement(n.k, {
						telemetryReason: A || "",
						ownerId: g.id || "",
						ownerSnoovatarImage: g.snoovatarFullBodyAsset || "",
						ownerProfileItemId: T || "",
						ownerProfileTitle: w.title || "",
						ownerDisplayName: g.displayName || "",
						onClose: t,
						onOutfitClick: e => {
							t(), i(Object(k.k)("marketplace_collection_page")), u(Object(l.h)(p.a.ECON_NFT_PRODUCT_DETAILS, {
								itemId: e.detail.outfit.id,
								showBack: !0,
								profileUserName: v
							}))
						},
						className: _.a.container,
						onProfileImageClick: c.a,
						onEmptyState: () => {
							o(s.fbt._("Collection disabled!", null, {
								hk: "4oqnKH"
							}))
						},
						onShare: () => {
							r({
								text: s.fbt._("Share link copied to clipboard", null, {
									hk: "2lidsg"
								}),
								duration: 5e3,
								kind: j.b.SuccessAward
							})
						}
					}))
				},
				v = Object(u.a)(A);
			t.default = e => a.a.createElement(v, x({
				withOverlay: !0,
				className: _.a.modal
			}, e))
		},
		"./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
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
			const a = e => {
				let {
					children: t
				} = e;
				const r = Object(c.a)();
				return o.a.createElement(n.d, i({}, r, {
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
				return a
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
				return k
			}));
			var n, s = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

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

			function a(e) {
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
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function m(e, t, r) {
				return await Object(o.a)(e, {
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
			async function k(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/hooks/useToast.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Toast/index.ts");

			function i() {
				const e = Object(s.d)();
				return Object(n.useCallback)(t => e(Object(o.f)(t)), [e])
			}

			function a() {
				const e = i();
				return Object(n.useCallback)((t, r) => e({
					duration: 5e3,
					kind: c.b.Error,
					...r,
					text: t
				}), [e])
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
				o = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = e => {
					return !(Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.De
					}) === n.Td)
				},
				i = Object(o.a)(n.Ee)
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(s.a)(n.Dd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ShowcaseCollectionViewModal.f987a6396dcd6ba25ee4.js.map