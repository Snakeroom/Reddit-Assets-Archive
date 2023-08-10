// https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.f952fd38b6f67bf072bb.js
// Retrieved at 8/10/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceClaimModal"], {
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/env/index.ts"),
				a = r("./node_modules/react/index.js"),
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/endpoints/governance/crypto.ts"),
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
				E = () => {
					const e = Object(c.e)(l.a),
						t = Object(c.e)(d.b),
						r = Object(c.e)(e => e.user.session),
						n = r ? r.accessToken : "",
						E = r ? new Date(r.expires).getTime() : 1,
						b = Object(c.e)(p.fb),
						_ = Object(i.a)(),
						f = m ? o.a.Rinkeby : o.a.Ethereum,
						x = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${n}`
							},
							expiration: E
						}), [n, E]),
						v = {
							...O,
							STRIPE_API_KEY: s.a.stripe.apiKey(e),
							STRIPE_API_VERSION: s.a.stripe.apiVersion(!0),
							ACCESS_TOKEN: n,
							BLOCKCHAIN_PROVIDER: f,
							OVERRIDES: t ? {
								NO_VAULT: !0
							} : {}
						},
						j = Object(a.useCallback)(e => {
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
					return Object(a.useMemo)(() => ({
						authHeaders: x,
						config: v,
						isNightMode: b,
						sendEvent: j
					}), [x, v, b, j])
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
				return j
			}));
			var s = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				c = r("./node_modules/react/index.js"),
				o = r.n(c),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/actions/economics/marketplace/index.ts"),
				l = r("./src/reddit/actions/snoovatarModal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				m = r("./src/reddit/helpers/avatarRouting.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				E = r("./src/reddit/selectors/activeModal.ts"),
				b = r("./src/reddit/selectors/experiments/econ/index.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/components/Econ/Marketplace/ClaimModal/index.m.less"),
				x = r.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => {
					let {
						onClose: t
					} = e;
					const r = Object(i.e)(_.Fb),
						a = Object(i.e)(e => {
							var t;
							return null === (t = Object(E.a)(e)) || void 0 === t ? void 0 : t.claimId
						}),
						c = Object(i.d)(),
						f = Object(i.e)(b.x);
					if (!r || !a) return null;
					return o.a.createElement("div", {
						className: x.a.container
					}, o.a.createElement(p.a, null, o.a.createElement(s.c, {
						onClose: t,
						userId: r,
						onViewAvatar: () => {
							t(), c(Object(l.b)({
								activeTab: m.a.ME,
								activeMeSubpage: "MY_STUFF"
							}))
						},
						omitIkey: f,
						onEvent: e => {
							var t;
							if ("CLAIM_ERROR" === e.type) {
								if ("NO_NFT_LEFT" === (null === (t = e.data) || void 0 === t ? void 0 : t.status)) return void c(Object(d.e)({
									claimId: a
								}));
								c(Object(u.f)({
									kind: O.b.Error,
									text: n.fbt._("Something went wrong, please try again later", null, {
										hk: "eYQ1d"
									}),
									duration: 3e3
								}))
							}
							"CLAIM_SUCCESS" === e.type && c(Object(d.d)({
								claimId: a
							}))
						}
					})))
				},
				A = Object(a.a)(j);
			t.default = e => o.a.createElement(A, v({
				withOverlay: !0,
				className: x.a.modal
			}, e))
		},
		"./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				c = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function o() {
				return (o = Object.assign || function(e) {
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
				return a.a.createElement(s.d, o({}, r, {
					shouldContainModal: !1
				}), t)
			}
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, r) {
			"use strict";
			var s, n, a;
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.BODY = "body", e.EYES = "eyes", e.HAIR = "hair", e.EXPRESSION = "expression", e.FACIAL_HAIR = "facial hair"
				}(s || (s = {})),
				function(e) {
					e.SHOP = "shop", e.EXPLORE = "explore", e.STYLE = "style", e.ME = "you", e.NFT = "nft"
				}(n || (n = {})),
				function(e) {
					e.FEATURED = "featured", e.POPULAR = "popular", e.GALLERY = "gallery", e.ARTISTS = "artists", e.ARTIST_PAGE = "artist_page"
				}(a || (a = {}))
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = e => {
					return !(Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.Ae
					}) === s.Rd)
				},
				o = Object(a.a)(s.Be)
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(n.a)(s.Bd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.f952fd38b6f67bf072bb.js.map