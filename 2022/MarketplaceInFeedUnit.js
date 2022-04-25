// https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.6667c703320fba3cf807.js
// Retrieved at 4/25/2022, 12:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceInFeedUnit"], {
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				c = n("./node_modules/react/index.js"),
				a = n.n(c),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/hooks/useTracking.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				l = n("./src/config.ts");
			const d = e => {
				let {
					children: t
				} = e;
				const n = function() {
					const e = Object(o.e)(m),
						t = Object(o.e)(i.eb),
						n = Object(r.a)();
					u || (u = function(e, t, n) {
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
								host: l.a.gqlUrl,
								fetchOptions: {
									headers: {
										Authorization: `Bearer ${e}`
									}
								}
							},
							nightModeActive: () => t,
							sendEvent: () => n
						}
					}(e, t, n));
					return u
				}();
				return a.a.createElement(s.a, {
					value: n
				}, t)
			};
			let u = null;

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
				inFeedUnit: "_2Hbuk0Bt_wNCaM_BbIVJoF"
			}
		},
		"./src/reddit/components/Econ/Marketplace/InFeedUnit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "MarketplaceInFeedUnit", (function() {
				return I
			}));
			var s = n("./src/lib/classNames/index.ts"),
				c = n("./node_modules/react/index.js"),
				a = n.n(c),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/@reddit/crypto/react/nft-claim/index.es.js"),
				i = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				d = n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/constants/postLayout.ts"),
				p = n("./src/reddit/selectors/telemetry.ts");
			var _ = n("./src/reddit/hooks/useLocalStorage.ts"),
				k = n("./src/reddit/hooks/usePreloadModal.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				C = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/confirmDismissModalStyles.m.less"),
				j = n.n(C);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				let {
					onDismiss: t,
					onGoBack: n
				} = e;
				return a.a.createElement(O.a, {
					onConfirm: n,
					onCancel: t,
					onClose: n,
					headerText: x._("Are you sure? This is your only chance to collect this avatar.", null, {
						hk: "237ii3"
					}),
					modalText: x._("{=WARNING:} You won't have another opportunity to collect your free avatar. Seriously.", [x._param("=WARNING:", a.a.createElement("span", {
						className: j.a.warning
					}, x._("WARNING:", null, {
						hk: "2mCuMr"
					})))], {
						hk: "1lJ80A"
					}),
					cancelActionText: x._("Yes, I Don't Want It", null, {
						hk: "4kIHcP"
					}),
					actionText: x._("Go Back", null, {
						hk: "4ckZOO"
					}),
					withOverlay: !0
				})
			};
			var g = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less"),
				v = n.n(g);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), I = e => {
				let {
					height: t,
					layout: n
				} = e;
				const O = Object(o.d)(),
					C = Object(b.a)(),
					j = Object(o.e)(f.a),
					x = Object(o.e)(E.k) || "",
					[g, I] = Object(c.useState)(!1);
				Object(k.a)(d.a);
				const [M, F] = Object(_.a)("marketplaceClaimInFeedUnitDismissed", !1), [A, N] = Object(_.a)("marketplaceClaimInFeedUnitLoadCount", 0), L = Object(c.useRef)(A), U = L.current % 2 == 0;
				if (Object(c.useEffect)(() => {
						U && C((() => e => ({
							...Object(p.n)(e),
							source: "marketplace",
							action: "view",
							noun: "claim_post_unit"
						}))()), M || N(L.current + 1)
					}, [N, L, C, U, M]), !(null == j ? void 0 : j.id) || M || !U) return null;
				const w = n !== m.g.Large;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					"data-testid": "marketplace-claim-infeed-unit",
					className: Object(s.a)(v.a.container, {
						[v.a.isNotLarge]: w
					})
				}, a.a.createElement(l.a, null, a.a.createElement(r.a, {
					className: v.a.inFeedUnit,
					onClickCta: () => {
						C((() => e => ({
							...Object(p.n)(e),
							source: "marketplace",
							action: "click",
							noun: "claim_post_unit"
						}))()), O(Object(i.h)(u.a.ECON_MARKETPLACE_CLAIM, {
							claimId: j.id
						}))
					},
					onClose: () => I(!0),
					labelText: y._("ACHIEVEMENT UNLOCKED", null, {
						hk: "3yZmfO"
					}),
					title: j.title,
					username: x,
					description: j.description,
					ctaText: j.buttonCtaText
				}))), g && a.a.createElement(h, {
					onGoBack: () => I(!1),
					onDismiss: () => {
						C((() => e => ({
							...Object(p.n)(e),
							source: "marketplace",
							action: "close",
							noun: "claim_post_unit"
						}))()), F(!0)
					}
				}))
			};
			t.default = I
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js");

			function c(e) {
				Object(s.useEffect)(() => {
					e()
				}, [e])
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.6667c703320fba3cf807.js.map