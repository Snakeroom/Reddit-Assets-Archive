// https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.673b638f3a15b8ef7f75.js
// Retrieved at 9/14/2022, 10:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceInFeedUnit"], {
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "a", (function() {
				return f
			}));
			var r = n("./src/config.ts"),
				c = n("./src/lib/env/index.ts"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/endpoints/governance/crypto.ts"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = !(Object(c.c)() || Object(c.b)()),
				b = {
					GRAPHQL_URL: r.a.gqlUrl,
					IS_DEVELOPMENT: p,
					IS_PRODUCTION: !p,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: r.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${r.a.snoovatarUrl}/api`
				},
				O = () => {
					const e = Object(o.e)(l.a),
						t = Object(o.e)(e => e.user.session),
						n = t ? t.accessToken : "",
						c = t ? new Date(t.expires).getTime() : 1,
						a = Object(o.e)(m.db),
						O = Object(d.a)(),
						f = p ? i.a.Rinkeby : i.a.Ethereum,
						_ = Object(s.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${n}`
							},
							expiration: c
						}), [n, c]),
						k = {
							...b,
							STRIPE_API_KEY: r.a.stripe.apiKey(e),
							ACCESS_TOKEN: n,
							BLOCKCHAIN_PROVIDER: f
						},
						j = Object(s.useCallback)(e => {
							O(t => {
								const n = u.n(t);
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
						}, [O]);
					return Object(s.useMemo)(() => ({
						authHeaders: _,
						config: k,
						isNightMode: a,
						sendEvent: j
					}), [_, k, a, j])
				},
				f = () => {
					const e = Object(o.e)(e => e.user.session),
						t = e ? e.accessToken : "",
						n = Object(o.e)(m.db),
						c = Object(d.a)(),
						l = p ? i.a.Rinkeby : i.a.Ethereum;
					return Object(s.useMemo)(() => ({
						api: {
							accessToken: t
						},
						fbt: {
							inline: (e, t) => e,
							singular: (e, t) => a.a.createElement(a.a.Fragment, null, e),
							param: (e, t) => a.a.createElement(a.a.Fragment, null, e),
							plural: (e, t) => a.a.createElement(a.a.Fragment, null, e)
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
							c(t => {
								const n = u.n(t);
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
					}), [t, l, n, c])
				}
		},
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				c = n("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx"),
				d = n("./src/reddit/selectors/experiments/econ/index.ts");
			const l = e => {
					let {
						children: t
					} = e;
					const n = Object(i.b)();
					return a.a.createElement(c.d, n, t)
				},
				u = e => {
					let {
						children: t
					} = e;
					const n = Object(i.a)();
					return a.a.createElement(r.a, {
						value: n
					}, t)
				},
				m = e => {
					let {
						children: t
					} = e;
					return Object(o.e)(d.g) ? a.a.createElement(l, null, t) : a.a.createElement(u, null, t)
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
				return y
			}));
			var r = n("./node_modules/@reddit/crypto/react/nft-claim/index.es.js"),
				c = n("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				m = n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"),
				p = n("./src/reddit/constants/modals.ts"),
				b = n("./src/reddit/constants/postLayout.ts"),
				O = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				f = n("./src/reddit/hooks/useLocalStorage.ts"),
				_ = n("./src/reddit/hooks/usePreloadModal.ts"),
				k = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				x = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				E = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/confirmDismissModalStyles.m.less"),
				C = n.n(E);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = e => {
				let {
					onDismiss: t,
					onGoBack: n
				} = e;
				return i.a.createElement(x.a, {
					onConfirm: n,
					onCancel: t,
					onClose: n,
					headerText: h._("Are you sure? This is your only chance to collect this avatar.", null, {
						hk: "237ii3"
					}),
					modalText: h._("{=WARNING:} You won't have another opportunity to collect your free avatar. Seriously.", [h._param("=WARNING:", i.a.createElement("span", {
						className: C.a.warning
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
			var I = n("./src/reddit/selectors/experiments/econ/index.ts"),
				v = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less"),
				A = n.n(v);
			const y = e => {
				let {
					layout: t
				} = e;
				const n = Object(d.d)(),
					x = Object(k.a)(),
					E = Object(d.e)(j.a),
					[C, h] = Object(o.useState)(!1),
					[v, y] = Object(o.useState)(!1);
				Object(_.a)(m.a);
				const N = Object(d.e)(I.g),
					[M, L] = Object(f.a)("marketplaceClaimInFeedUnitDismissed", !1),
					[T, U] = Object(f.a)("marketplaceClaimInFeedUnitLoadCount", 0),
					D = Object(o.useRef)(T),
					R = D.current % 2 == 0;
				if (Object(o.useEffect)(() => {
						M || U(D.current + 1)
					}, [U, D, x, R, M]), !(null == E ? void 0 : E.id) || M || !R) return null;
				const S = t !== b.g.Large,
					w = () => {
						x(Object(O.b)()), n(Object(l.h)(p.a.ECON_MARKETPLACE_CLAIM, {
							claimId: E.id
						}))
					};
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(s.a, {
					onChange: e => {
						v || e.intersectionRatio < .75 || (x(Object(O.d)()), y(!0))
					},
					threshold: .75
				}, i.a.createElement("div", {
					"data-testid": "marketplace-claim-infeed-unit",
					className: Object(a.a)(A.a.container, {
						[A.a.isNotLarge]: S
					})
				}, i.a.createElement(u.a, null, N ? i.a.createElement(c.e, {
					className: Object(a.a)(A.a.feedUnit, {
						[A.a.isNotLarge]: S
					}),
					onClickCta: w,
					onClose: () => h(!0),
					title: E.title,
					description: E.description,
					ctaText: E.buttonCtaText,
					isNotCardLayout: S
				}) : i.a.createElement(r.a, {
					className: Object(a.a)(A.a.feedUnit, {
						[A.a.isNotLarge]: S
					}),
					onClickCta: w,
					onClose: () => h(!0),
					title: E.title,
					description: E.description,
					ctaText: E.buttonCtaText,
					isNotCardLayout: S
				})))), C && i.a.createElement(g, {
					onGoBack: () => h(!1),
					onDismiss: () => {
						x(Object(O.c)()), L(!0)
					}
				}))
			};
			t.default = y
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const c = () => e => ({
					...Object(r.n)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				s = () => e => ({
					...Object(r.n)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				a = () => e => ({
					...Object(r.n)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var o;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(o || (o = {}));
			const i = e => t => {
				const n = Object(r.n)(t);
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
				return c
			}));
			var r = n("./node_modules/react/index.js");

			function c(e) {
				Object(r.useEffect)(() => {
					e()
				}, [e])
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const s = Object(c.a)(r.md)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.673b638f3a15b8ef7f75.js.map