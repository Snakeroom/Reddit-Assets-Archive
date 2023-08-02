// https://www.redditstatic.com/desktop2x/CollectiblesShowcaseUnit.0783a3cfb81602e1d5dd.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectiblesShowcaseUnit"], {
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/env/index.ts"),
				o = r("./node_modules/react/index.js"),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/endpoints/governance/crypto.ts"),
				i = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				l = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				u = r("./src/reddit/selectors/telemetry.ts"),
				p = r("./src/reddit/selectors/user.ts");
			const m = !(Object(n.c)() || Object(n.b)()),
				O = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: m,
					IS_PRODUCTION: !m,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				b = () => {
					const e = Object(c.e)(l.a),
						t = Object(c.e)(d.b),
						r = Object(c.e)(e => e.user.session),
						n = r ? r.accessToken : "",
						b = r ? new Date(r.expires).getTime() : 1,
						f = Object(c.e)(p.fb),
						_ = Object(i.a)(),
						E = m ? a.a.Rinkeby : a.a.Ethereum,
						j = Object(o.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${n}`
							},
							expiration: b
						}), [n, b]),
						C = {
							...O,
							STRIPE_API_KEY: s.a.stripe.apiKey(e),
							STRIPE_API_VERSION: s.a.stripe.apiVersion(!0),
							ACCESS_TOKEN: n,
							BLOCKCHAIN_PROVIDER: E,
							OVERRIDES: t ? {
								NO_VAULT: !0
							} : {}
						},
						x = Object(o.useCallback)(e => {
							_(t => {
								const r = u.q(t);
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
						}, [_]);
					return Object(o.useMemo)(() => ({
						authHeaders: j,
						config: C,
						isNightMode: f,
						sendEvent: x
					}), [j, C, f, x])
				}
		},
		"./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				a = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				u = r("./src/reddit/hooks/usePreloadModal.ts"),
				p = r("./src/reddit/selectors/telemetry.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/async.tsx");
			const f = e => e === l.a.Profile ? "profile_page" : e === l.a.Hovercard ? "user_hovercard" : "";
			t.default = e => {
				let {
					origin: t,
					userName: r
				} = e;
				const s = Object(O.b)(),
					_ = Object(o.f)().getState(),
					E = Object(m.Db)(_, {
						userName: r
					}),
					j = Object(m.k)(_),
					C = Object(o.d)();
				return Object(u.a)(b.a), n.a.createElement(i.a, null, n.a.createElement(c.j, {
					origin: t,
					profileId: E.id || "",
					profileDisplayName: E.displayName || "",
					telemetryPageType: Object(p.x)(_.platform.currentPage) || "",
					loggedInUserProfileId: j || "",
					onOutfitClick: e => {
						s(Object(l.k)(f(t))), C(Object(a.h)(d.a.ECON_NFT_PRODUCT_DETAILS, {
							itemId: e.detail.outfit.id
						}))
					},
					onViewAll: () => {
						C(Object(a.h)(d.a.X_SHOWCASE_COLLECTION_VIEW_MODAL, {
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
				return i
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				c = r("./src/reddit/components/GlobalModalContainer/registry.ts"),
				a = r("./src/reddit/constants/modals.ts");
			const i = () => Promise.all([r.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), r.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), r.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), r.e("ShowcaseCollectionViewModal")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/index.tsx")),
				d = Object(s.a)(i, {
					ssr: !1
				});
			Object(c.b)(a.a.X_SHOWCASE_COLLECTION_VIEW_MODAL, e => o.a.createElement(d, {
				onClose: e,
				onOverlayClick: e
			}))
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			}));
			const s = {},
				n = () => null;

			function o(e, t) {
				if (e in s) throw new Error(`Modal with id ${e} already registered!`);
				s[e] = t
			}

			function c(e) {
				return e && e in s ? s[e] : n
			}
		},
		"./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				c = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const i = e => {
				let {
					children: t
				} = e;
				const r = Object(c.a)();
				return o.a.createElement(s.d, a({}, r, {
					shouldContainModal: !1
				}), t)
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/react/index.js");

			function n(e) {
				Object(s.useEffect)(() => {
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
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = e => {
					return !(Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.De
					}) === s.Rd)
				},
				a = Object(o.a)(s.Ee)
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(n.a)(s.Bd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectiblesShowcaseUnit.0783a3cfb81602e1d5dd.js.map