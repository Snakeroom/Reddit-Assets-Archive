// https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.da6a2020d5846df95c2e.js
// Retrieved at 2/9/2023, 10:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceInFeedUnit"], {
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			}));
			var n = s("./src/config.ts"),
				r = s("./src/lib/env/index.ts"),
				c = s("./node_modules/react/index.js"),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/endpoints/governance/crypto.ts"),
				i = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				u = s("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				m = s("./src/reddit/selectors/telemetry.ts"),
				p = s("./src/reddit/selectors/user.ts");
			const O = !(Object(r.c)() || Object(r.b)()),
				b = {
					GRAPHQL_URL: n.a.gqlUrl,
					IS_DEVELOPMENT: O,
					IS_PRODUCTION: !O,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: n.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${n.a.snoovatarUrl}/api`
				},
				j = () => {
					const e = Object(a.e)(u.a),
						t = Object(a.e)(d.n),
						s = Object(a.e)(l.b),
						r = Object(a.e)(e => e.user.session),
						j = r ? r.accessToken : "",
						_ = r ? new Date(r.expires).getTime() : 1,
						E = Object(a.e)(p.fb),
						k = Object(i.a)(),
						f = O ? o.a.Rinkeby : o.a.Ethereum,
						x = Object(c.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${j}`
							},
							expiration: _
						}), [j, _]),
						C = {
							...b,
							STRIPE_API_KEY: n.a.stripe.apiKey(e),
							STRIPE_API_VERSION: n.a.stripe.apiVersion(t),
							ACCESS_TOKEN: j,
							BLOCKCHAIN_PROVIDER: f,
							OVERRIDES: s ? {
								NO_VAULT: !0
							} : {}
						},
						I = Object(c.useCallback)(e => {
							k(t => {
								const s = m.o(t);
								return {
									...s,
									...e,
									app: s.app,
									source: e.source || "marketplace",
									actionInfo: {
										...s.actionInfo,
										...e.actionInfo
									}
								}
							})
						}, [k]);
					return Object(c.useMemo)(() => ({
						authHeaders: x,
						config: C,
						isNightMode: E,
						sendEvent: I
					}), [x, C, E, I])
				}
		},
		"./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_21z552gDZGIvH3ewNzPXWw",
				isNotLarge: "_1YOB9GyYMcCe82cZEVbnF-",
				feedUnit: "_3xTokGCKGAAwHn2kpEIbl8"
			}
		},
		"./src/reddit/components/Econ/Marketplace/InFeedUnit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "MarketplaceInFeedUnit", (function() {
				return C
			}));
			var n = s("./node_modules/@reddit/marketplace/marketplace.es.js"),
				r = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"),
				u = s("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				m = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				O = s("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				b = s("./src/reddit/hooks/useLocalStorage.ts"),
				j = s("./src/reddit/hooks/usePreloadModal.ts"),
				_ = s("./src/reddit/hooks/useTracking.ts"),
				E = s("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				k = s("./src/reddit/components/Econ/Marketplace/InFeedUnit/ConfirmDismissModal.tsx"),
				f = s("./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less"),
				x = s.n(f);
			const C = e => {
				let {
					layout: t
				} = e;
				const s = Object(i.d)(),
					f = Object(_.a)(),
					C = Object(i.e)(E.a),
					[I, A] = Object(a.useState)(!1),
					[g, M] = Object(a.useState)(!1);
				Object(j.a)(l.a);
				const [L, h] = Object(b.a)("marketplaceClaimInFeedUnitDismissed", !1), [N, v] = Object(b.a)("marketplaceClaimInFeedUnitLoadCount", 0), U = Object(a.useRef)(N), R = U.current % 2 == 0;
				if (Object(a.useEffect)(() => {
						L || v(U.current + 1)
					}, [v, U, f, R, L]), !(null == C ? void 0 : C.id) || L || !R) return null;
				const S = t !== p.g.Large;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(r.a, {
					onChange: e => {
						g || e.intersectionRatio < .75 || (f(Object(O.j)()), M(!0))
					},
					threshold: .75
				}, o.a.createElement("div", {
					"data-testid": "marketplace-claim-infeed-unit",
					className: Object(c.a)(x.a.container, {
						[x.a.isNotLarge]: S
					})
				}, o.a.createElement(u.a, null, o.a.createElement(n.e, {
					className: Object(c.a)(x.a.feedUnit, {
						[x.a.isNotLarge]: S
					}),
					onClickCta: () => {
						f(Object(O.d)()), s(Object(d.h)(m.a.ECON_MARKETPLACE_CLAIM, {
							claimId: C.id
						}))
					},
					onClose: () => A(!0),
					title: C.title,
					description: C.description,
					ctaText: C.buttonCtaText,
					isNotCardLayout: S
				})))), I && o.a.createElement(k.a, {
					onGoBack: () => A(!1),
					onDismiss: () => {
						f(Object(O.e)()), h(!0)
					}
				}))
			};
			t.default = C
		},
		"./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/@reddit/marketplace/marketplace.es.js"),
				r = s("./node_modules/react/index.js"),
				c = s.n(r),
				a = s("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const i = e => {
				let {
					children: t
				} = e;
				const s = Object(a.a)();
				return c.a.createElement(n.d, o({}, s, {
					shouldContainModal: !1
				}), t)
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js");

			function r(e) {
				Object(n.useEffect)(() => {
					e()
				}, [e])
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = Object(r.a)(n.sd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.da6a2020d5846df95c2e.js.map