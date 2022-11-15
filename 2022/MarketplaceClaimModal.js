// https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.4ceb851395f484e06f66.js
// Retrieved at 11/15/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceClaimModal"], {
		"./src/reddit/actions/economics/marketplace/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = "ECON__MARKETPLACE_ITEM_CLAIMED",
				s = "ECON__MARKETPLACE_ITEMS_OUT_OF_STOCK"
		},
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/env/index.ts"),
				a = r("./node_modules/react/index.js"),
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/endpoints/governance/crypto.ts"),
				i = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				l = r("./src/reddit/selectors/telemetry.ts"),
				u = r("./src/reddit/selectors/user.ts");
			const p = !(Object(s.c)() || Object(s.b)()),
				m = {
					GRAPHQL_URL: n.a.gqlUrl,
					IS_DEVELOPMENT: p,
					IS_PRODUCTION: !p,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: n.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${n.a.snoovatarUrl}/api`
				},
				O = () => {
					const e = Object(c.e)(d.a),
						t = Object(c.e)(e => e.user.session),
						r = t ? t.accessToken : "",
						s = t ? new Date(t.expires).getTime() : 1,
						O = Object(c.e)(u.eb),
						E = Object(i.a)(),
						_ = p ? o.a.Rinkeby : o.a.Ethereum,
						b = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${r}`
							},
							expiration: s
						}), [r, s]),
						f = {
							...m,
							STRIPE_API_KEY: n.a.stripe.apiKey(e),
							ACCESS_TOKEN: r,
							BLOCKCHAIN_PROVIDER: _
						},
						A = Object(a.useCallback)(e => {
							E(t => {
								const r = l.o(t);
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
						}, [E]);
					return Object(a.useMemo)(() => ({
						authHeaders: b,
						config: f,
						isNightMode: O,
						sendEvent: A
					}), [b, f, O, A])
				}
		},
		"./src/reddit/components/Econ/Marketplace/ClaimModal/index.m.less": function(e, t, r) {
			e.exports = {
				modal: "_22huBTn9NqDOSj45zEGGs3",
				container: "_2mZvUEkLtqsycUGDC_Qt5O"
			}
		},
		"./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "MarketplaceClaim", (function() {
				return C
			}));
			var n = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				a = r("./node_modules/react/index.js"),
				c = r.n(a),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/economics/marketplace/constants.ts");
			const l = Object(i.a)(d.b),
				u = Object(i.a)(d.a);
			var p = r("./src/reddit/actions/snoovatarModal.ts"),
				m = r("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				O = r("./src/reddit/helpers/avatarRouting.ts"),
				E = r("./src/reddit/selectors/activeModal.ts"),
				_ = r("./src/reddit/selectors/experiments/econ/index.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/components/Econ/Marketplace/ClaimModal/index.m.less"),
				A = r.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => {
					let {
						onClose: t
					} = e;
					const r = Object(o.e)(b.Db),
						s = Object(o.e)(e => {
							var t;
							return null === (t = Object(E.a)(e)) || void 0 === t ? void 0 : t.claimId
						}),
						a = Object(o.d)(),
						i = Object(o.e)(_.u);
					if (!r || !s) return null;
					return c.a.createElement("div", {
						className: A.a.container
					}, c.a.createElement(m.a, null, c.a.createElement(n.c, {
						onClose: t,
						userId: r,
						onViewAvatar: () => {
							t(), a(Object(p.b)({
								activeTab: O.a.ME,
								activeMeSubpage: "MY_STUFF"
							}))
						},
						omitIkey: i,
						onEvent: e => {
							var t;
							"CLAIM_ERROR" === e.type && "NO_NFT_LEFT" === (null === (t = e.data) || void 0 === t ? void 0 : t.status) && a(u({
								claimId: s
							})), "CLAIM_SUCCESS" === e.type && a(l({
								claimId: s
							}))
						}
					})))
				},
				M = Object(s.a)(C);
			t.default = e => c.a.createElement(M, v({
				withOverlay: !0,
				className: A.a.modal
			}, e))
		},
		"./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				c = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function o() {
				return (o = Object.assign || function(e) {
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
				const r = Object(c.a)();
				return a.a.createElement(n.d, o({}, r, {
					shouldContainModal: !1
				}), t)
			}
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, r) {
			"use strict";
			var n, s, a;
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.BODY = "body", e.EYES = "eyes", e.HAIR = "hair", e.EXPRESSION = "expression", e.FACIAL_HAIR = "facial hair"
				}(n || (n = {})),
				function(e) {
					e.SHOP = "shop", e.EXPLORE = "explore", e.STYLE = "style", e.ME = "you", e.NFT = "nft"
				}(s || (s = {})),
				function(e) {
					e.FEATURED = "featured", e.POPULAR = "popular", e.GALLERY = "gallery", e.ARTISTS = "artists", e.ARTIST_PAGE = "artist_page"
				}(a || (a = {}))
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(s.a)(n.od)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.4ceb851395f484e06f66.js.map