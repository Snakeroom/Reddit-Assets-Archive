// https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.964b6c7157ce2da0d060.js
// Retrieved at 6/21/2023, 9:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceClaimModal"], {
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/env/index.ts"),
				c = r("./node_modules/react/index.js"),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/endpoints/governance/crypto.ts"),
				i = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				u = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				p = r("./src/reddit/selectors/telemetry.ts"),
				m = r("./src/reddit/selectors/user.ts");
			const O = !(Object(n.c)() || Object(n.b)()),
				b = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: O,
					IS_PRODUCTION: !O,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				E = () => {
					const e = Object(a.e)(u.a),
						t = Object(a.e)(d.p),
						r = Object(a.e)(l.b),
						n = Object(a.e)(e => e.user.session),
						E = n ? n.accessToken : "",
						_ = n ? new Date(n.expires).getTime() : 1,
						f = Object(a.e)(m.fb),
						x = Object(i.a)(),
						j = O ? o.a.Rinkeby : o.a.Ethereum,
						v = Object(c.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${E}`
							},
							expiration: _
						}), [E, _]),
						A = {
							...b,
							STRIPE_API_KEY: s.a.stripe.apiKey(e),
							STRIPE_API_VERSION: s.a.stripe.apiVersion(t),
							ACCESS_TOKEN: E,
							BLOCKCHAIN_PROVIDER: j,
							OVERRIDES: r ? {
								NO_VAULT: !0
							} : {}
						},
						I = Object(c.useCallback)(e => {
							x(t => {
								const r = p.o(t);
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
						}, [x]);
					return Object(c.useMemo)(() => ({
						authHeaders: v,
						config: A,
						isNightMode: f,
						sendEvent: I
					}), [v, A, f, I])
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
				return v
			}));
			var s = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/actions/economics/marketplace/index.ts"),
				l = r("./src/reddit/actions/snoovatarModal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				m = r("./src/reddit/helpers/avatarRouting.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/activeModal.ts"),
				E = r("./src/reddit/selectors/experiments/econ/index.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/components/Econ/Marketplace/ClaimModal/index.m.less"),
				x = r.n(f);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = e => {
					let {
						onClose: t
					} = e;
					const r = Object(i.e)(_.Fb),
						c = Object(i.e)(e => {
							var t;
							return null === (t = Object(b.a)(e)) || void 0 === t ? void 0 : t.claimId
						}),
						a = Object(i.d)(),
						f = Object(i.e)(E.w);
					if (!r || !c) return null;
					return o.a.createElement("div", {
						className: x.a.container
					}, o.a.createElement(p.a, null, o.a.createElement(s.c, {
						onClose: t,
						userId: r,
						onViewAvatar: () => {
							t(), a(Object(l.b)({
								activeTab: m.a.ME,
								activeMeSubpage: "MY_STUFF"
							}))
						},
						omitIkey: f,
						onEvent: e => {
							var t;
							if ("CLAIM_ERROR" === e.type) {
								if ("NO_NFT_LEFT" === (null === (t = e.data) || void 0 === t ? void 0 : t.status)) return void a(Object(d.e)({
									claimId: c
								}));
								a(Object(u.f)({
									kind: O.b.Error,
									text: n.fbt._("Something went wrong, please try again later", null, {
										hk: "eYQ1d"
									}),
									duration: 3e3
								}))
							}
							"CLAIM_SUCCESS" === e.type && a(Object(d.d)({
								claimId: c
							}))
						}
					})))
				},
				A = Object(c.a)(v);
			t.default = e => o.a.createElement(A, j({
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
				c = r.n(n),
				a = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

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
				const r = Object(a.a)();
				return c.a.createElement(s.d, o({}, r, {
					shouldContainModal: !1
				}), t)
			}
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, r) {
			"use strict";
			var s, n, c;
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return c
				})),
				function(e) {
					e.BODY = "body", e.EYES = "eyes", e.HAIR = "hair", e.EXPRESSION = "expression", e.FACIAL_HAIR = "facial hair"
				}(s || (s = {})),
				function(e) {
					e.SHOP = "shop", e.EXPLORE = "explore", e.STYLE = "style", e.ME = "you", e.NFT = "nft"
				}(n || (n = {})),
				function(e) {
					e.FEATURED = "featured", e.POPULAR = "popular", e.GALLERY = "gallery", e.ARTISTS = "artists", e.ARTIST_PAGE = "artist_page"
				}(c || (c = {}))
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				c = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = e => {
					return !(Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.Ie
					}) === s.Yd)
				},
				o = Object(c.a)(s.Je)
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = Object(n.a)(s.Id)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.964b6c7157ce2da0d060.js.map