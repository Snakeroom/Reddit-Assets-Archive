// https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.c2c31379a66166d93256.js
// Retrieved at 5/9/2022, 3:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceInFeedUnit"], {
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
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
						t = Object(o.e)(i.cb),
						n = Object(r.a)();
					u || (u = function(e, t, n) {
						return {
							api: {
								accessToken: e
							},
							fbt: {
								inline: (e, t) => e,
								singular: (e, t) => c.a.createElement(c.a.Fragment, null, e),
								param: (e, t) => c.a.createElement(c.a.Fragment, null, e),
								plural: (e, t) => c.a.createElement(c.a.Fragment, null, e)
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
				return c.a.createElement(s.a, {
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
				return v
			}));
			var s = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
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
				f = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				O = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				x = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/confirmDismissModalStyles.m.less"),
				C = n.n(x);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				let {
					onDismiss: t,
					onGoBack: n
				} = e;
				return c.a.createElement(O.a, {
					onConfirm: n,
					onCancel: t,
					onClose: n,
					headerText: E._("Are you sure? This is your only chance to collect this avatar.", null, {
						hk: "237ii3"
					}),
					modalText: E._("{=WARNING:} You won't have another opportunity to collect your free avatar. Seriously.", [E._param("=WARNING:", c.a.createElement("span", {
						className: C.a.warning
					}, E._("WARNING:", null, {
						hk: "2mCuMr"
					})))], {
						hk: "1lJ80A"
					}),
					cancelActionText: E._("Yes, I Don't Want It", null, {
						hk: "4kIHcP"
					}),
					actionText: E._("Go Back", null, {
						hk: "4ckZOO"
					}),
					withOverlay: !0
				})
			};
			var j = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less"),
				g = n.n(j);
			const v = e => {
				let {
					height: t,
					layout: n
				} = e;
				const O = Object(o.d)(),
					x = Object(f.a)(),
					C = Object(o.e)(b.a),
					[E, j] = Object(a.useState)(!1);
				Object(k.a)(d.a);
				const [v, y] = Object(_.a)("marketplaceClaimInFeedUnitDismissed", !1), [I, M] = Object(_.a)("marketplaceClaimInFeedUnitLoadCount", 0), F = Object(a.useRef)(I), A = F.current % 2 == 0;
				if (Object(a.useEffect)(() => {
						A && x((() => e => ({
							...Object(p.n)(e),
							source: "marketplace",
							action: "view",
							noun: "claim_post_unit"
						}))()), v || M(F.current + 1)
					}, [M, F, x, A, v]), !(null == C ? void 0 : C.id) || v || !A) return null;
				const N = n !== m.g.Large;
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					"data-testid": "marketplace-claim-infeed-unit",
					className: Object(s.a)(g.a.container, {
						[g.a.isNotLarge]: N
					})
				}, c.a.createElement(l.a, null, c.a.createElement(r.a, {
					className: g.a.inFeedUnit,
					onClickCta: () => {
						x((() => e => ({
							...Object(p.n)(e),
							source: "marketplace",
							action: "click",
							noun: "claim_post_unit"
						}))()), O(Object(i.h)(u.a.ECON_MARKETPLACE_CLAIM, {
							claimId: C.id
						}))
					},
					onClose: () => j(!0),
					title: C.title,
					description: C.description,
					ctaText: C.buttonCtaText
				}))), E && c.a.createElement(h, {
					onGoBack: () => j(!1),
					onDismiss: () => {
						x((() => e => ({
							...Object(p.n)(e),
							source: "marketplace",
							action: "close",
							noun: "claim_post_unit"
						}))()), y(!0)
					}
				}))
			};
			t.default = v
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js");

			function a(e) {
				Object(s.useEffect)(() => {
					e()
				}, [e])
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.c2c31379a66166d93256.js.map