// https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.8c276013ecc0ba0b3559.js
// Retrieved at 12/13/2022, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceClaimModal"], {
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/env/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/endpoints/governance/crypto.ts"),
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
					const e = Object(o.e)(d.a),
						t = Object(o.e)(e => e.user.session),
						r = t ? t.accessToken : "",
						s = t ? new Date(t.expires).getTime() : 1,
						O = Object(o.e)(u.fb),
						E = Object(i.a)(),
						_ = p ? c.a.Rinkeby : c.a.Ethereum,
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
						v = Object(a.useCallback)(e => {
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
						sendEvent: v
					}), [b, f, O, v])
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
				return x
			}));
			var n = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/actions/economics/marketplace/index.ts"),
				l = r("./src/reddit/actions/snoovatarModal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				m = r("./src/reddit/helpers/avatarRouting.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				E = r("./src/reddit/selectors/activeModal.ts"),
				_ = r("./src/reddit/selectors/experiments/econ/index.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/components/Econ/Marketplace/ClaimModal/index.m.less"),
				v = r.n(f);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = e => {
					let {
						onClose: t
					} = e;
					const r = Object(i.e)(b.Eb),
						a = Object(i.e)(e => {
							var t;
							return null === (t = Object(E.a)(e)) || void 0 === t ? void 0 : t.claimId
						}),
						o = Object(i.d)(),
						f = Object(i.e)(_.v);
					if (!r || !a) return null;
					return c.a.createElement("div", {
						className: v.a.container
					}, c.a.createElement(p.a, null, c.a.createElement(n.c, {
						onClose: t,
						userId: r,
						onViewAvatar: () => {
							t(), o(Object(l.b)({
								activeTab: m.a.ME,
								activeMeSubpage: "MY_STUFF"
							}))
						},
						omitIkey: f,
						onEvent: e => {
							var t;
							if ("CLAIM_ERROR" === e.type) {
								if ("NO_NFT_LEFT" === (null === (t = e.data) || void 0 === t ? void 0 : t.status)) return void o(Object(d.d)({
									claimId: a
								}));
								o(Object(u.f)({
									kind: O.b.Error,
									text: s.fbt._("Something went wrong, please try again later", null, {
										hk: "eYQ1d"
									}),
									duration: 3e3
								}))
							}
							"CLAIM_SUCCESS" === e.type && o(Object(d.c)({
								claimId: a
							}))
						}
					})))
				},
				A = Object(a.a)(x);
			t.default = e => c.a.createElement(A, j({
				withOverlay: !0,
				className: v.a.modal
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
				o = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function c() {
				return (c = Object.assign || function(e) {
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
				return a.a.createElement(n.d, c({}, r, {
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
			const a = Object(s.a)(n.zd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.8c276013ecc0ba0b3559.js.map