// https://www.redditstatic.com/desktop2x/ShowcaseCollectionViewModal.2b4ac5baab8f2c93ce1d.js
// Retrieved at 8/10/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ShowcaseCollectionViewModal"], {
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
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
				b = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: m,
					IS_PRODUCTION: !m,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				O = () => {
					const e = Object(c.e)(l.a),
						t = Object(c.e)(d.b),
						r = Object(c.e)(e => e.user.session),
						n = r ? r.accessToken : "",
						O = r ? new Date(r.expires).getTime() : 1,
						f = Object(c.e)(p.fb),
						_ = Object(i.a)(),
						j = m ? a.a.Rinkeby : a.a.Ethereum,
						x = Object(o.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${n}`
							},
							expiration: O
						}), [n, O]),
						k = {
							...b,
							STRIPE_API_KEY: s.a.stripe.apiKey(e),
							STRIPE_API_VERSION: s.a.stripe.apiVersion(!0),
							ACCESS_TOKEN: n,
							BLOCKCHAIN_PROVIDER: j,
							OVERRIDES: t ? {
								NO_VAULT: !0
							} : {}
						},
						h = Object(o.useCallback)(e => {
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
						authHeaders: x,
						config: k,
						isNightMode: f,
						sendEvent: h
					}), [x, k, f, h])
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
				return S
			}));
			var s = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/noop.js"),
				c = r.n(o),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				d = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/higherOrderComponents/asModal/index.tsx"),
				u = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				m = r("./src/reddit/constants/modals.ts"),
				b = r("./src/reddit/hooks/useToast.tsx"),
				O = r("./src/reddit/selectors/profile.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/components/TrackingHelper/index.tsx"),
				j = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				x = r("./src/reddit/models/Toast/index.ts"),
				k = r("./src/reddit/selectors/activeModal.ts"),
				h = r("./src/reddit/components/Econ/Marketplace/ShowcaseCollectionViewModal/index.m.less"),
				E = r.n(h);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => {
					let {
						onClose: t
					} = e;
					const r = Object(b.b)(),
						o = Object(b.a)(),
						a = Object(_.b)(),
						l = Object(d.d)(),
						h = Object(d.f)().getState(),
						C = Object(d.e)(e => Object(k.a)(e)),
						{
							telemetryReason: S,
							profileUserName: A
						} = C || {},
						v = Object(f.Db)(h, {
							userName: A || ""
						}) || {},
						w = Object(O.j)(h, v.profileId),
						g = Object(s.l)(v.snoovatarFullBodyAsset || "");
					return i.a.createElement(p.a, null, i.a.createElement(s.k, {
						telemetryReason: S || "",
						ownerId: v.id || "",
						ownerSnoovatarImage: v.snoovatarFullBodyAsset || "",
						ownerProfileItemId: g || "",
						ownerProfileTitle: w.title || "",
						ownerDisplayName: v.displayName || "",
						onClose: t,
						onOutfitClick: e => {
							t(), a(Object(j.k)("marketplace_collection_page")), l(Object(u.h)(m.a.ECON_NFT_PRODUCT_DETAILS, {
								itemId: e.detail.outfit.id,
								showBack: !0,
								profileUserName: A
							}))
						},
						className: E.a.container,
						onProfileImageClick: c.a,
						onEmptyState: () => {
							o(n.fbt._("Collection disabled!", null, {
								hk: "4oqnKH"
							}))
						},
						onShare: () => {
							r({
								text: n.fbt._("Share link copied to clipboard", null, {
									hk: "2lidsg"
								}),
								duration: 5e3,
								kind: x.b.SuccessAward
							})
						}
					}))
				},
				A = Object(l.a)(S);
			t.default = e => i.a.createElement(A, C({
				withOverlay: !0,
				className: E.a.modal
			}, e))
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
		"./src/reddit/hooks/useToast.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Toast/index.ts");

			function a() {
				const e = Object(n.d)();
				return Object(s.useCallback)(t => e(Object(o.f)(t)), [e])
			}

			function i() {
				const e = a();
				return Object(s.useCallback)((t, r) => e({
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
				return a
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = e => {
					return !(Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.Ae
					}) === s.Rd)
				},
				a = Object(o.a)(s.Be)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ShowcaseCollectionViewModal.2b4ac5baab8f2c93ce1d.js.map