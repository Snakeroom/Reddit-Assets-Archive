// https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.4a7d85f40d2669e1b7dd.js
// Retrieved at 9/22/2022, 10:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceClaimModal"], {
		"./src/reddit/actions/economics/marketplace/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "ECON__MARKETPLACE_ITEM_CLAIMED",
				s = "ECON__MARKETPLACE_ITEMS_OUT_OF_STOCK"
		},
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return E
			})), n.d(t, "a", (function() {
				return _
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/env/index.ts"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/endpoints/governance/crypto.ts"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const m = !(Object(s.c)() || Object(s.b)()),
				O = {
					GRAPHQL_URL: r.a.gqlUrl,
					IS_DEVELOPMENT: m,
					IS_PRODUCTION: !m,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: r.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${r.a.snoovatarUrl}/api`
				},
				E = () => {
					const e = Object(c.e)(l.a),
						t = Object(c.e)(e => e.user.session),
						n = t ? t.accessToken : "",
						s = t ? new Date(t.expires).getTime() : 1,
						o = Object(c.e)(p.db),
						E = Object(d.a)(),
						_ = m ? i.a.Rinkeby : i.a.Ethereum,
						b = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${n}`
							},
							expiration: s
						}), [n, s]),
						f = {
							...O,
							STRIPE_API_KEY: r.a.stripe.apiKey(e),
							ACCESS_TOKEN: n,
							BLOCKCHAIN_PROVIDER: _
						},
						v = Object(a.useCallback)(e => {
							E(t => {
								const n = u.o(t);
								return {
									...n,
									...e,
									app: n.app,
									source: e.source || "marketplace",
									actionInfo: {
										...n.actionInfo,
										...e.actionInfo
									}
								}
							})
						}, [E]);
					return Object(a.useMemo)(() => ({
						authHeaders: b,
						config: f,
						isNightMode: o,
						sendEvent: v
					}), [b, f, o, v])
				},
				_ = () => {
					const e = Object(c.e)(e => e.user.session),
						t = e ? e.accessToken : "",
						n = Object(c.e)(p.db),
						s = Object(d.a)(),
						l = m ? i.a.Rinkeby : i.a.Ethereum;
					return Object(a.useMemo)(() => ({
						api: {
							accessToken: t
						},
						fbt: {
							inline: (e, t) => e,
							singular: (e, t) => o.a.createElement(o.a.Fragment, null, e),
							param: (e, t) => o.a.createElement(o.a.Fragment, null, e),
							plural: (e, t) => o.a.createElement(o.a.Fragment, null, e)
						},
						gql: {
							host: r.a.gqlUrl,
							fetchOptions: {
								headers: {
									Authorization: `Bearer ${t}`
								}
							}
						},
						nightModeActive: () => n,
						sendEvent(e) {
							s(t => {
								const n = u.o(t);
								return {
									...n,
									...e,
									app: n.app,
									source: e.source || "marketplace",
									actionInfo: {
										...n.actionInfo,
										...e.actionInfo
									}
								}
							})
						},
						blockchainProvider: l
					}), [t, l, n, s])
				}
		},
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				s = n("./node_modules/@reddit/marketplace/marketplace.es.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx"),
				d = n("./src/reddit/selectors/experiments/econ/index.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => {
					let {
						children: t
					} = e;
					const n = Object(i.b)();
					return o.a.createElement(s.d, l({}, n, {
						shouldContainModal: !1
					}), t)
				},
				p = e => {
					let {
						children: t
					} = e;
					const n = Object(i.a)();
					return o.a.createElement(r.a, {
						value: n
					}, t)
				},
				m = e => {
					let {
						children: t
					} = e;
					return Object(c.e)(d.g) ? o.a.createElement(u, null, t) : o.a.createElement(p, null, t)
				}
		},
		"./src/reddit/components/Econ/Marketplace/ClaimModal/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_22huBTn9NqDOSj45zEGGs3",
				container: "_2mZvUEkLtqsycUGDC_Qt5O"
			}
		},
		"./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "MarketplaceClaim", (function() {
				return j
			}));
			var r = n("./node_modules/@reddit/crypto/react/nft-claim/index.es.js"),
				s = n("./node_modules/@reddit/marketplace/marketplace.es.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./node_modules/react/index.js"),
				c = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/economics/marketplace/constants.ts");
			const u = Object(d.a)(l.b),
				p = Object(d.a)(l.a);
			var m = n("./src/reddit/actions/snoovatarModal.ts"),
				O = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				E = n("./src/reddit/helpers/avatarRouting.ts"),
				_ = n("./src/reddit/selectors/activeModal.ts"),
				b = n("./src/reddit/selectors/experiments/econ/index.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/Econ/Marketplace/ClaimModal/index.m.less"),
				A = n.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => {
					let {
						onClose: t
					} = e;
					const n = Object(i.e)(f.Cb),
						a = Object(i.e)(e => {
							var t;
							return null === (t = Object(_.a)(e)) || void 0 === t ? void 0 : t.claimId
						}),
						o = Object(i.d)(),
						d = Object(i.e)(b.A),
						l = Object(i.e)(b.g);
					if (!n || !a) return null;
					const v = () => {
							t(), o(Object(m.b)({
								activeTab: E.a.ME,
								activeMeSubpage: "MY_STUFF"
							}))
						},
						C = e => {
							var t;
							"CLAIM_ERROR" === e.type && "NO_NFT_LEFT" === (null === (t = e.data) || void 0 === t ? void 0 : t.status) && o(p({
								claimId: a
							})), "CLAIM_SUCCESS" === e.type && o(u({
								claimId: a
							}))
						};
					return c.a.createElement("div", {
						className: A.a.container
					}, c.a.createElement(O.a, null, l ? c.a.createElement(s.c, {
						onClose: t,
						userId: n,
						onViewAvatar: v,
						omitIkey: d,
						onEvent: C
					}) : c.a.createElement(r.b, {
						onClose: t,
						userId: n,
						onViewAvatar: v,
						omitIkey: d,
						onEvent: C
					})))
				},
				x = Object(a.a)(j);
			t.default = e => c.a.createElement(x, C({
				withOverlay: !0,
				className: A.a.modal
			}, e))
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, n) {
			"use strict";
			var r, s, a;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.BODY = "body", e.EYES = "eyes", e.HAIR = "hair", e.EXPRESSION = "expression", e.FACIAL_HAIR = "facial hair"
				}(r || (r = {})),
				function(e) {
					e.SHOP = "shop", e.EXPLORE = "explore", e.STYLE = "style", e.ME = "you", e.NFT = "nft"
				}(s || (s = {})),
				function(e) {
					e.FEATURED = "featured", e.POPULAR = "popular", e.GALLERY = "gallery", e.ARTISTS = "artists", e.ARTIST_PAGE = "artist_page"
				}(a || (a = {}))
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(s.a)(r.nd)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.4a7d85f40d2669e1b7dd.js.map