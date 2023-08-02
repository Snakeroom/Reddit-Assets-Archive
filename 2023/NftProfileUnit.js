// https://www.redditstatic.com/desktop2x/NftProfileUnit.cd0aae100c8dc11050ab.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NftProfileUnit"], {
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/env/index.ts"),
				c = r("./node_modules/react/index.js"),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/endpoints/governance/crypto.ts"),
				i = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				l = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				u = r("./src/reddit/selectors/telemetry.ts"),
				m = r("./src/reddit/selectors/user.ts");
			const p = !(Object(s.c)() || Object(s.b)()),
				O = {
					GRAPHQL_URL: n.a.gqlUrl,
					IS_DEVELOPMENT: p,
					IS_PRODUCTION: !p,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: n.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${n.a.snoovatarUrl}/api`
				},
				f = () => {
					const e = Object(o.e)(l.a),
						t = Object(o.e)(d.b),
						r = Object(o.e)(e => e.user.session),
						s = r ? r.accessToken : "",
						f = r ? new Date(r.expires).getTime() : 1,
						_ = Object(o.e)(m.fb),
						b = Object(i.a)(),
						E = p ? a.a.Rinkeby : a.a.Ethereum,
						x = Object(c.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${s}`
							},
							expiration: f
						}), [s, f]),
						j = {
							...O,
							STRIPE_API_KEY: n.a.stripe.apiKey(e),
							STRIPE_API_VERSION: n.a.stripe.apiVersion(!0),
							ACCESS_TOKEN: s,
							BLOCKCHAIN_PROVIDER: E,
							OVERRIDES: t ? {
								NO_VAULT: !0
							} : {}
						},
						k = Object(c.useCallback)(e => {
							b(t => {
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
						}, [b]);
					return Object(c.useMemo)(() => ({
						authHeaders: x,
						config: j,
						isNightMode: _,
						sendEvent: k
					}), [x, j, _, k])
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
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				a = r("./src/reddit/actions/modal.ts"),
				i = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				d = r("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = r("./src/reddit/constants/modals.ts");
			const u = () => r.e("NftProductDetailsModal").then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProductDetails/index.tsx")),
				m = Object(i.a)(u, {
					ssr: !1
				});
			Object(d.b)(l.a.ECON_NFT_PRODUCT_DETAILS, e => s.a.createElement(m, {
				onClose: e,
				onOverlayClick: e
			}));
			var p = r("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				O = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				f = r("./src/reddit/hooks/usePreloadModal.ts"),
				_ = r("./src/reddit/hooks/useTracking.ts"),
				b = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.m.less"),
				E = r.n(b);
			t.default = e => {
				let {
					className: t,
					imageUrl: r,
					origin: n,
					showDetailsCta: i
				} = e;
				const d = Object(c.d)(),
					m = Object(_.a)();
				Object(f.a)(u);
				const b = Object(o.l)(r);
				return b ? s.a.createElement("div", {
					className: t
				}, s.a.createElement(p.a, null, s.a.createElement(s.a.Fragment, null, s.a.createElement(o.h, {
					imageUrl: r,
					hideCardNaming: !0
				}), i && s.a.createElement(o.g, {
					className: E.a.detailsButton,
					onClick: () => {
						m(Object(O.k)(n)), d(Object(a.h)(l.a.ECON_NFT_PRODUCT_DETAILS, {
							itemId: b
						}))
					}
				})))) : null
			}
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			}));
			const n = {},
				s = () => null;

			function c(e, t) {
				if (e in n) throw new Error(`Modal with id ${e} already registered!`);
				n[e] = t
			}

			function o(e) {
				return e && e in n ? n[e] : s
			}
		},
		"./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = r("./node_modules/react/index.js"),
				c = r.n(s),
				o = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const i = e => {
				let {
					children: t
				} = e;
				const r = Object(o.a)();
				return c.a.createElement(n.d, a({}, r, {
					shouldContainModal: !1
				}), t)
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
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = e => {
					return !(Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.De
					}) === n.Rd)
				},
				a = Object(c.a)(n.Ee)
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = Object(s.a)(n.Bd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProfileUnit.cd0aae100c8dc11050ab.js.map