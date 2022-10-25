// https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.d7fb2a92613592cec49b.js
// Retrieved at 10/25/2022, 5:20:05 PM by Reddit Dataminer v1.0.0
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
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
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
						s = Object(o.e)(m.eb),
						O = Object(d.a)(),
						f = p ? i.a.Rinkeby : i.a.Ethereum,
						_ = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${n}`
							},
							expiration: c
						}), [n, c]),
						j = {
							...b,
							STRIPE_API_KEY: r.a.stripe.apiKey(e),
							ACCESS_TOKEN: n,
							BLOCKCHAIN_PROVIDER: f
						},
						k = Object(a.useCallback)(e => {
							O(t => {
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
						}, [O]);
					return Object(a.useMemo)(() => ({
						authHeaders: _,
						config: j,
						isNightMode: s,
						sendEvent: k
					}), [_, j, s, k])
				},
				f = () => {
					const e = Object(o.e)(e => e.user.session),
						t = e ? e.accessToken : "",
						n = Object(o.e)(m.eb),
						c = Object(d.a)(),
						l = p ? i.a.Rinkeby : i.a.Ethereum;
					return Object(a.useMemo)(() => ({
						api: {
							accessToken: t
						},
						fbt: {
							inline: (e, t) => e,
							singular: (e, t) => s.a.createElement(s.a.Fragment, null, e),
							param: (e, t) => s.a.createElement(s.a.Fragment, null, e),
							plural: (e, t) => s.a.createElement(s.a.Fragment, null, e)
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
					}), [t, l, n, c])
				}
		},
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				c = n("./node_modules/@reddit/marketplace/marketplace.es.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
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
					return s.a.createElement(c.d, l({}, n, {
						shouldContainModal: !1
					}), t)
				},
				m = e => {
					let {
						children: t
					} = e;
					const n = Object(i.a)();
					return s.a.createElement(r.a, {
						value: n
					}, t)
				},
				p = e => {
					let {
						children: t
					} = e;
					return Object(o.e)(d.h) ? s.a.createElement(u, null, t) : s.a.createElement(m, null, t)
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
			var r = n("./node_modules/@reddit/crypto/react/nft-claim/index.es.js"),
				c = n("./node_modules/@reddit/marketplace/marketplace.es.js"),
				a = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
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
				j = n("./src/reddit/hooks/useTracking.ts"),
				k = n("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				x = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				E = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/confirmDismissModalStyles.m.less"),
				h = n.n(E);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = e => {
				let {
					onDismiss: t,
					onGoBack: n
				} = e;
				return i.a.createElement(x.a, {
					onConfirm: n,
					onCancel: t,
					onClose: n,
					headerText: C._("Are you sure? This is your only chance to collect this avatar.", null, {
						hk: "237ii3"
					}),
					modalText: C._("{=WARNING:} You won't have another opportunity to collect your free avatar. Seriously.", [C._param("=WARNING:", i.a.createElement("span", {
						className: h.a.warning
					}, C._("WARNING:", null, {
						hk: "2mCuMr"
					})))], {
						hk: "1lJ80A"
					}),
					cancelActionText: C._("I Don't Want It", null, {
						hk: "4ehKZ1"
					}),
					actionText: C._("Go Back", null, {
						hk: "4ckZOO"
					}),
					withOverlay: !0
				})
			};
			var v = n("./src/reddit/selectors/experiments/econ/index.ts"),
				I = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less"),
				y = n.n(I);
			const A = e => {
				let {
					layout: t
				} = e;
				const n = Object(d.d)(),
					x = Object(j.a)(),
					E = Object(d.e)(k.a),
					[h, C] = Object(o.useState)(!1),
					[I, A] = Object(o.useState)(!1);
				Object(_.a)(m.a);
				const N = Object(d.e)(v.h),
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
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(a.a, {
					onChange: e => {
						I || e.intersectionRatio < .75 || (x(Object(O.d)()), A(!0))
					},
					threshold: .75
				}, i.a.createElement("div", {
					"data-testid": "marketplace-claim-infeed-unit",
					className: Object(s.a)(y.a.container, {
						[y.a.isNotLarge]: S
					})
				}, i.a.createElement(u.a, null, N ? i.a.createElement(c.e, {
					className: Object(s.a)(y.a.feedUnit, {
						[y.a.isNotLarge]: S
					}),
					onClickCta: w,
					onClose: () => C(!0),
					title: E.title,
					description: E.description,
					ctaText: E.buttonCtaText,
					isNotCardLayout: S
				}) : i.a.createElement(r.a, {
					className: Object(s.a)(y.a.feedUnit, {
						[y.a.isNotLarge]: S
					}),
					onClickCta: w,
					onClose: () => C(!0),
					title: E.title,
					description: E.description,
					ctaText: E.buttonCtaText,
					isNotCardLayout: S
				})))), h && i.a.createElement(g, {
					onGoBack: () => C(!1),
					onDismiss: () => {
						x(Object(O.c)()), L(!0)
					}
				}))
			};
			t.default = A
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const c = () => e => ({
					...Object(r.o)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				a = () => e => ({
					...Object(r.o)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				s = () => e => ({
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
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(c.a)(r.yd)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.d7fb2a92613592cec49b.js.map