// https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.0c6e90f0eecfb104d538.js
// Retrieved at 8/31/2022, 7:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceInFeedUnit"], {
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				c = n("./src/lib/env/index.ts"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/endpoints/governance/crypto.ts"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/reddit/selectors/user.ts"),
				m = n("./src/config.ts");
			const p = e => {
				let {
					children: t
				} = e;
				const n = function() {
					const e = Object(s.e)(f),
						t = Object(s.e)(u.db),
						n = Object(d.a)(),
						r = Object(c.b)() ? i.a.Ethereum : i.a.Rinkeby;
					return Object(o.useMemo)(() => (function(e, t, n, r) {
						return {
							api: {
								accessToken: e
							},
							fbt: {
								inline: (e, t) => e,
								singular: (e, t) => a.a.createElement(a.a.Fragment, null, e),
								param: (e, t) => a.a.createElement(a.a.Fragment, null, e),
								plural: (e, t) => a.a.createElement(a.a.Fragment, null, e)
							},
							gql: {
								host: m.a.gqlUrl,
								fetchOptions: {
									headers: {
										Authorization: `Bearer ${e}`
									}
								}
							},
							nightModeActive: () => t,
							sendEvent(e) {
								n(t => {
									const n = Object(l.n)(t);
									return {
										...n,
										...e,
										actionInfo: {
											...n.actionInfo,
											...e.actionInfo
										}
									}
								})
							},
							blockchainProvider: r
						}
					})(e, t, n, r), [e, t, n, r])
				}();
				return a.a.createElement(r.a, {
					value: n
				}, t)
			};

			function f(e) {
				var t;
				return (null === (t = e.user.session) || void 0 === t ? void 0 : t.accessToken) || ""
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
			var r = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/@reddit/crypto/react/nft-claim/index.es.js"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				u = n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/constants/postLayout.ts"),
				f = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				b = n("./src/reddit/hooks/useLocalStorage.ts"),
				k = n("./src/reddit/hooks/usePreloadModal.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				j = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/confirmDismissModalStyles.m.less"),
				x = n.n(h);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = e => {
				let {
					onDismiss: t,
					onGoBack: n
				} = e;
				return a.a.createElement(j.a, {
					onConfirm: n,
					onCancel: t,
					onClose: n,
					headerText: E._("Are you sure? This is your only chance to collect this avatar.", null, {
						hk: "237ii3"
					}),
					modalText: E._("{=WARNING:} You won't have another opportunity to collect your free avatar. Seriously.", [E._param("=WARNING:", a.a.createElement("span", {
						className: x.a.warning
					}, E._("WARNING:", null, {
						hk: "2mCuMr"
					})))], {
						hk: "1lJ80A"
					}),
					cancelActionText: E._("I Don't Want It", null, {
						hk: "4ehKZ1"
					}),
					actionText: E._("Go Back", null, {
						hk: "4ckZOO"
					}),
					withOverlay: !0
				})
			};
			var v = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less"),
				C = n.n(v);
			const y = e => {
				let {
					layout: t
				} = e;
				const n = Object(s.d)(),
					j = Object(_.a)(),
					h = Object(s.e)(O.a),
					[x, E] = Object(o.useState)(!1),
					[v, y] = Object(o.useState)(!1);
				Object(k.a)(u.a);
				const [I, A] = Object(b.a)("marketplaceClaimInFeedUnitDismissed", !1), [M, N] = Object(b.a)("marketplaceClaimInFeedUnitLoadCount", 0), L = Object(o.useRef)(M), F = L.current % 2 == 0;
				if (Object(o.useEffect)(() => {
						I || N(L.current + 1)
					}, [N, L, j, F, I]), !(null == h ? void 0 : h.id) || I || !F) return null;
				const w = t !== p.g.Large;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(r.a, {
					onChange: e => {
						v || e.intersectionRatio < .75 || (j(Object(f.d)()), y(!0))
					},
					threshold: .75
				}, a.a.createElement("div", {
					"data-testid": "marketplace-claim-infeed-unit",
					className: Object(c.a)(C.a.container, {
						[C.a.isNotLarge]: w
					})
				}, a.a.createElement(l.a, null, a.a.createElement(i.a, {
					className: Object(c.a)(C.a.feedUnit, {
						[C.a.isNotLarge]: w
					}),
					onClickCta: () => {
						j(Object(f.b)()), n(Object(d.h)(m.a.ECON_MARKETPLACE_CLAIM, {
							claimId: h.id
						}))
					},
					onClose: () => E(!0),
					title: h.title,
					description: h.description,
					ctaText: h.buttonCtaText,
					isNotCardLayout: w
				})))), x && a.a.createElement(g, {
					onGoBack: () => E(!1),
					onDismiss: () => {
						j(Object(f.c)()), A(!0)
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
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return s
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
				o = () => e => ({
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
			var s;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(s || (s = {}));
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.0c6e90f0eecfb104d538.js.map