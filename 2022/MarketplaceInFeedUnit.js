// https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.9de9f5114071056dc102.js
// Retrieved at 5/16/2022, 4:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceInFeedUnit"], {
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var c = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/hooks/useTracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				d = n("./src/config.ts");
			const u = e => {
				let {
					children: t
				} = e;
				const n = function() {
					const e = Object(r.e)(p),
						t = Object(r.e)(l.cb),
						n = Object(a.a)();
					m || (m = function(e, t, n) {
						return {
							api: {
								accessToken: e
							},
							fbt: {
								inline: (e, t) => e,
								singular: (e, t) => s.a.createElement(s.a.Fragment, null, e),
								param: (e, t) => s.a.createElement(s.a.Fragment, null, e),
								plural: (e, t) => s.a.createElement(s.a.Fragment, null, e)
							},
							gql: {
								host: d.a.gqlUrl,
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
					}(e, t, n));
					return m
				}();
				return s.a.createElement(c.a, {
					value: n
				}, t)
			};
			let m = null;

			function p(e) {
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
				isNotLarge: "_1YOB9GyYMcCe82cZEVbnF-"
			}
		},
		"./src/reddit/components/Econ/Marketplace/InFeedUnit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "MarketplaceInFeedUnit", (function() {
				return v
			}));
			var c = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/@reddit/crypto/react/nft-claim/index.es.js"),
				i = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				d = n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/constants/postLayout.ts"),
				p = n("./src/reddit/selectors/telemetry.ts");
			var f = n("./src/reddit/hooks/useLocalStorage.ts"),
				_ = n("./src/reddit/hooks/usePreloadModal.ts"),
				k = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				b = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				j = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/confirmDismissModalStyles.m.less"),
				x = n.n(j);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				let {
					onDismiss: t,
					onGoBack: n
				} = e;
				return s.a.createElement(b.a, {
					onConfirm: n,
					onCancel: t,
					onClose: n,
					headerText: E._("Are you sure? This is your only chance to collect this avatar.", null, {
						hk: "237ii3"
					}),
					modalText: E._("{=WARNING:} You won't have another opportunity to collect your free avatar. Seriously.", [E._param("=WARNING:", s.a.createElement("span", {
						className: x.a.warning
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
			var C = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less"),
				g = n.n(C);
			const v = e => {
				let {
					height: t,
					layout: n
				} = e;
				const b = Object(r.d)(),
					j = Object(k.a)(),
					x = Object(r.e)(O.a),
					[E, C] = Object(o.useState)(!1);
				Object(_.a)(d.a);
				const [v, I] = Object(f.a)("marketplaceClaimInFeedUnitDismissed", !1), [y, M] = Object(f.a)("marketplaceClaimInFeedUnitLoadCount", 0), A = Object(o.useRef)(y), F = A.current % 2 == 0;
				if (Object(o.useEffect)(() => {
						F && j((() => e => ({
							...Object(p.n)(e),
							source: "marketplace",
							action: "view",
							noun: "claim_post_unit"
						}))()), v || M(A.current + 1)
					}, [M, A, j, F, v]), !(null == x ? void 0 : x.id) || v || !F) return null;
				const L = n !== m.g.Large;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					"data-testid": "marketplace-claim-infeed-unit",
					className: Object(c.a)(g.a.container, {
						[g.a.isNotLarge]: L
					})
				}, s.a.createElement(l.a, null, s.a.createElement(a.a, {
					onClickCta: () => {
						j((() => e => ({
							...Object(p.n)(e),
							source: "marketplace",
							action: "click",
							noun: "claim_post_unit"
						}))()), b(Object(i.h)(u.a.ECON_MARKETPLACE_CLAIM, {
							claimId: x.id
						}))
					},
					onClose: () => C(!0),
					title: x.title,
					description: x.description,
					ctaText: x.buttonCtaText
				}))), E && s.a.createElement(h, {
					onGoBack: () => C(!1),
					onDismiss: () => {
						j((() => e => ({
							...Object(p.n)(e),
							source: "marketplace",
							action: "close",
							noun: "claim_post_unit"
						}))()), I(!0)
					}
				}))
			};
			t.default = v
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var c = n("./node_modules/react/index.js");

			function o(e) {
				Object(c.useEffect)(() => {
					e()
				}, [e])
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.9de9f5114071056dc102.js.map