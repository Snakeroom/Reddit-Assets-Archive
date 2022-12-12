// https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.5b9afcfd2f3010ace919.js
// Retrieved at 12/12/2022, 5:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceInFeedUnit"], {
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var n = s("./src/config.ts"),
				r = s("./src/lib/env/index.ts"),
				c = s("./node_modules/react/index.js"),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/endpoints/governance/crypto.ts"),
				i = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				l = s("./src/reddit/selectors/telemetry.ts"),
				u = s("./src/reddit/selectors/user.ts");
			const m = !(Object(r.c)() || Object(r.b)()),
				p = {
					GRAPHQL_URL: n.a.gqlUrl,
					IS_DEVELOPMENT: m,
					IS_PRODUCTION: !m,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: n.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${n.a.snoovatarUrl}/api`
				},
				O = () => {
					const e = Object(a.e)(d.a),
						t = Object(a.e)(e => e.user.session),
						s = t ? t.accessToken : "",
						r = t ? new Date(t.expires).getTime() : 1,
						O = Object(a.e)(u.fb),
						b = Object(i.a)(),
						j = m ? o.a.Rinkeby : o.a.Ethereum,
						_ = Object(c.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${s}`
							},
							expiration: r
						}), [s, r]),
						f = {
							...p,
							STRIPE_API_KEY: n.a.stripe.apiKey(e),
							ACCESS_TOKEN: s,
							BLOCKCHAIN_PROVIDER: j
						},
						k = Object(c.useCallback)(e => {
							b(t => {
								const s = l.o(t);
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
						}, [b]);
					return Object(c.useMemo)(() => ({
						authHeaders: _,
						config: f,
						isNightMode: O,
						sendEvent: k
					}), [_, f, O, k])
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
				f = s("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				k = s("./src/reddit/components/Econ/Marketplace/InFeedUnit/ConfirmDismissModal.tsx"),
				E = s("./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less"),
				x = s.n(E);
			const C = e => {
				let {
					layout: t
				} = e;
				const s = Object(i.d)(),
					E = Object(_.a)(),
					C = Object(i.e)(f.a),
					[g, M] = Object(a.useState)(!1),
					[A, I] = Object(a.useState)(!1);
				Object(j.a)(l.a);
				const [L, h] = Object(b.a)("marketplaceClaimInFeedUnitDismissed", !1), [v, N] = Object(b.a)("marketplaceClaimInFeedUnitLoadCount", 0), U = Object(a.useRef)(v), y = U.current % 2 == 0;
				if (Object(a.useEffect)(() => {
						L || N(U.current + 1)
					}, [N, U, E, y, L]), !(null == C ? void 0 : C.id) || L || !y) return null;
				const D = t !== p.g.Large;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(r.a, {
					onChange: e => {
						A || e.intersectionRatio < .75 || (E(Object(O.j)()), I(!0))
					},
					threshold: .75
				}, o.a.createElement("div", {
					"data-testid": "marketplace-claim-infeed-unit",
					className: Object(c.a)(x.a.container, {
						[x.a.isNotLarge]: D
					})
				}, o.a.createElement(u.a, null, o.a.createElement(n.e, {
					className: Object(c.a)(x.a.feedUnit, {
						[x.a.isNotLarge]: D
					}),
					onClickCta: () => {
						E(Object(O.d)()), s(Object(d.h)(m.a.ECON_MARKETPLACE_CLAIM, {
							claimId: C.id
						}))
					},
					onClose: () => M(!0),
					title: C.title,
					description: C.description,
					ctaText: C.buttonCtaText,
					isNotCardLayout: D
				})))), g && o.a.createElement(k.a, {
					onGoBack: () => M(!1),
					onDismiss: () => {
						E(Object(O.e)()), h(!0)
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
			const c = Object(r.a)(n.yd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.5b9afcfd2f3010ace919.js.map