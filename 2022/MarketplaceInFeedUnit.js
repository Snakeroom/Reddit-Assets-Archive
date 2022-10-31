// https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.48c646927259adf70f8f.js
// Retrieved at 10/31/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceInFeedUnit"], {
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/env/index.ts"),
				c = n("./node_modules/react/index.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/endpoints/governance/crypto.ts"),
				i = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/reddit/selectors/user.ts");
			const m = !(Object(s.c)() || Object(s.b)()),
				p = {
					GRAPHQL_URL: r.a.gqlUrl,
					IS_DEVELOPMENT: m,
					IS_PRODUCTION: !m,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: r.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${r.a.snoovatarUrl}/api`
				},
				O = () => {
					const e = Object(a.e)(d.a),
						t = Object(a.e)(e => e.user.session),
						n = t ? t.accessToken : "",
						s = t ? new Date(t.expires).getTime() : 1,
						O = Object(a.e)(u.eb),
						_ = Object(i.a)(),
						b = m ? o.a.Rinkeby : o.a.Ethereum,
						f = Object(c.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${n}`
							},
							expiration: s
						}), [n, s]),
						k = {
							...p,
							STRIPE_API_KEY: r.a.stripe.apiKey(e),
							ACCESS_TOKEN: n,
							BLOCKCHAIN_PROVIDER: b
						},
						j = Object(c.useCallback)(e => {
							_(t => {
								const n = l.o(t);
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
						}, [_]);
					return Object(c.useMemo)(() => ({
						authHeaders: f,
						config: k,
						isNightMode: O,
						sendEvent: j
					}), [f, k, O, j])
				}
		},
		"./src/reddit/components/Econ/Marketplace/InFeedUnit/confirmDismissModalStyles.m.less": function(e, t, n) {
			e.exports = {
				warning: "_3sL4YOZzv1jGaaxw6e7uIH"
			}
		},
		"./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_21z552gDZGIvH3ewNzPXWw",
				isNotLarge: "_1YOB9GyYMcCe82cZEVbnF-",
				feedUnit: "_3xTokGCKGAAwHn2kpEIbl8"
			}
		},
		"./src/reddit/components/Econ/Marketplace/InFeedUnit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "MarketplaceInFeedUnit", (function() {
				return A
			}));
			var r = n("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"),
				u = n("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/constants/postLayout.ts"),
				O = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				_ = n("./src/reddit/hooks/useLocalStorage.ts"),
				b = n("./src/reddit/hooks/usePreloadModal.ts"),
				f = n("./src/reddit/hooks/useTracking.ts"),
				k = n("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				j = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				x = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/confirmDismissModalStyles.m.less"),
				E = n.n(x);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = e => {
				let {
					onDismiss: t,
					onGoBack: n
				} = e;
				return o.a.createElement(j.a, {
					onConfirm: n,
					onCancel: t,
					onClose: n,
					headerText: h._("Are you sure? This is your only chance to collect this avatar.", null, {
						hk: "237ii3"
					}),
					modalText: h._("{=WARNING:} You won't have another opportunity to collect your free avatar. Seriously.", [h._param("=WARNING:", o.a.createElement("span", {
						className: E.a.warning
					}, h._("WARNING:", null, {
						hk: "2mCuMr"
					})))], {
						hk: "1lJ80A"
					}),
					cancelActionText: h._("I Don't Want It", null, {
						hk: "4ehKZ1"
					}),
					actionText: h._("Go Back", null, {
						hk: "4ckZOO"
					}),
					withOverlay: !0
				})
			};
			var v = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less"),
				I = n.n(v);
			const A = e => {
				let {
					layout: t
				} = e;
				const n = Object(i.d)(),
					j = Object(f.a)(),
					x = Object(i.e)(k.a),
					[E, h] = Object(a.useState)(!1),
					[v, A] = Object(a.useState)(!1);
				Object(b.a)(l.a);
				const [g, M] = Object(_.a)("marketplaceClaimInFeedUnitDismissed", !1), [N, y] = Object(_.a)("marketplaceClaimInFeedUnitLoadCount", 0), L = Object(a.useRef)(N), U = L.current % 2 == 0;
				if (Object(a.useEffect)(() => {
						g || y(L.current + 1)
					}, [y, L, j, U, g]), !(null == x ? void 0 : x.id) || g || !U) return null;
				const T = t !== p.g.Large;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(s.a, {
					onChange: e => {
						v || e.intersectionRatio < .75 || (j(Object(O.d)()), A(!0))
					},
					threshold: .75
				}, o.a.createElement("div", {
					"data-testid": "marketplace-claim-infeed-unit",
					className: Object(c.a)(I.a.container, {
						[I.a.isNotLarge]: T
					})
				}, o.a.createElement(u.a, null, o.a.createElement(r.e, {
					className: Object(c.a)(I.a.feedUnit, {
						[I.a.isNotLarge]: T
					}),
					onClickCta: () => {
						j(Object(O.b)()), n(Object(d.h)(m.a.ECON_MARKETPLACE_CLAIM, {
							claimId: x.id
						}))
					},
					onClose: () => h(!0),
					title: x.title,
					description: x.description,
					ctaText: x.buttonCtaText,
					isNotCardLayout: T
				})))), E && o.a.createElement(C, {
					onGoBack: () => h(!1),
					onDismiss: () => {
						j(Object(O.c)()), M(!0)
					}
				}))
			};
			t.default = A
		},
		"./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = n("./node_modules/react/index.js"),
				c = n.n(s),
				a = n("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const i = e => {
				let {
					children: t
				} = e;
				const n = Object(a.a)();
				return c.a.createElement(r.d, o({}, n, {
					shouldContainModal: !1
				}), t)
			}
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = () => e => ({
					...Object(r.o)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				c = () => e => ({
					...Object(r.o)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				a = () => e => ({
					...Object(r.o)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var o;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(o || (o = {}));
			const i = e => t => {
				const n = Object(r.o)(t);
				return {
					...n,
					source: "marketplace",
					action: "view",
					noun: "product_detail_page",
					actionInfo: {
						...n.actionInfo,
						reason: e,
						pageType: "product_detail_page"
					}
				}
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js");

			function s(e) {
				Object(r.useEffect)(() => {
					e()
				}, [e])
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = Object(s.a)(r.Cd)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.48c646927259adf70f8f.js.map