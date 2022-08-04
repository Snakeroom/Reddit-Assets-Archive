// https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.1eed8b52cbd1a572490e.js
// Retrieved at 8/4/2022, 7:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceInFeedUnit"], {
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				c = n("./node_modules/react/index.js"),
				o = n.n(c),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/hooks/useTracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/config.ts");
			const u = e => {
				let {
					children: t
				} = e;
				const n = function() {
					const e = Object(a.e)(m),
						t = Object(a.e)(d.db),
						n = Object(s.a)();
					return Object(c.useMemo)(() => (function(e, t, n) {
						return {
							api: {
								accessToken: e
							},
							fbt: {
								inline: (e, t) => e,
								singular: (e, t) => o.a.createElement(o.a.Fragment, null, e),
								param: (e, t) => o.a.createElement(o.a.Fragment, null, e),
								plural: (e, t) => o.a.createElement(o.a.Fragment, null, e)
							},
							gql: {
								host: l.a.gqlUrl,
								fetchOptions: {
									headers: {
										Authorization: `Bearer ${e}`
									}
								}
							},
							nightModeActive: () => t,
							sendEvent(e) {
								n(t => {
									const n = Object(i.n)(t);
									return {
										...n,
										...e,
										actionInfo: {
											...n.actionInfo,
											...e.actionInfo
										}
									}
								})
							}
						}
					})(e, t, n), [e, t, n])
				}();
				return o.a.createElement(r.a, {
					value: n
				}, t)
			};

			function m(e) {
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
				return I
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
				_ = n("./src/reddit/hooks/useLocalStorage.ts"),
				k = n("./src/reddit/hooks/usePreloadModal.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				j = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/confirmDismissModalStyles.m.less"),
				x = n.n(h);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = e => {
				let {
					onDismiss: t,
					onGoBack: n
				} = e;
				return a.a.createElement(j.a, {
					onConfirm: n,
					onCancel: t,
					onClose: n,
					headerText: C._("Are you sure? This is your only chance to collect this avatar.", null, {
						hk: "237ii3"
					}),
					modalText: C._("{=WARNING:} You won't have another opportunity to collect your free avatar. Seriously.", [C._param("=WARNING:", a.a.createElement("span", {
						className: x.a.warning
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
			var g = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less"),
				v = n.n(g);
			const I = e => {
				let {
					layout: t
				} = e;
				const n = Object(s.d)(),
					j = Object(b.a)(),
					h = Object(s.e)(O.a),
					[x, C] = Object(o.useState)(!1),
					[g, I] = Object(o.useState)(!1);
				Object(k.a)(u.a);
				const [y, A] = Object(_.a)("marketplaceClaimInFeedUnitDismissed", !1), [M, N] = Object(_.a)("marketplaceClaimInFeedUnitLoadCount", 0), L = Object(o.useRef)(M), F = L.current % 2 == 0;
				if (Object(o.useEffect)(() => {
						y || N(L.current + 1)
					}, [N, L, j, F, y]), !(null == h ? void 0 : h.id) || y || !F) return null;
				const w = t !== p.g.Large;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(r.a, {
					onChange: e => {
						g || e.intersectionRatio < .75 || (j(Object(f.d)()), I(!0))
					},
					threshold: .75
				}, a.a.createElement("div", {
					"data-testid": "marketplace-claim-infeed-unit",
					className: Object(c.a)(v.a.container, {
						[v.a.isNotLarge]: w
					})
				}, a.a.createElement(l.a, null, a.a.createElement(i.a, {
					className: Object(c.a)(v.a.feedUnit, {
						[v.a.isNotLarge]: w
					}),
					onClickCta: () => {
						j(Object(f.b)()), n(Object(d.h)(m.a.ECON_MARKETPLACE_CLAIM, {
							claimId: h.id
						}))
					},
					onClose: () => C(!0),
					title: h.title,
					description: h.description,
					ctaText: h.buttonCtaText,
					isNotCardLayout: w
				})))), x && a.a.createElement(E, {
					onGoBack: () => C(!1),
					onDismiss: () => {
						j(Object(f.c)()), A(!0)
					}
				}))
			};
			t.default = I
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.1eed8b52cbd1a572490e.js.map