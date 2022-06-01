// https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.97854b1500a70b787c97.js
// Retrieved at 6/1/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceInFeedUnit"], {
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var c = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/hooks/useTracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				d = n("./src/config.ts");
			const u = e => {
				let {
					children: t
				} = e;
				const n = function() {
					const e = Object(a.e)(p),
						t = Object(a.e)(l.db),
						n = Object(s.a)();
					m || (m = function(e, t, n) {
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
				return o.a.createElement(c.a, {
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
				isNotLarge: "_1YOB9GyYMcCe82cZEVbnF-",
				feedUnit: "_3xTokGCKGAAwHn2kpEIbl8"
			}
		},
		"./src/reddit/components/Econ/Marketplace/InFeedUnit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "MarketplaceInFeedUnit", (function() {
				return v
			}));
			var c = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/@reddit/crypto/react/nft-claim/index.es.js"),
				i = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				d = n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/constants/postLayout.ts"),
				p = n("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				f = n("./src/reddit/hooks/useLocalStorage.ts"),
				k = n("./src/reddit/hooks/usePreloadModal.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				O = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				j = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/confirmDismissModalStyles.m.less"),
				x = n.n(j);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = e => {
				let {
					onDismiss: t,
					onGoBack: n
				} = e;
				return o.a.createElement(O.a, {
					onConfirm: n,
					onCancel: t,
					onClose: n,
					headerText: C._("Are you sure? This is your only chance to collect this avatar.", null, {
						hk: "237ii3"
					}),
					modalText: C._("{=WARNING:} You won't have another opportunity to collect your free avatar. Seriously.", [C._param("=WARNING:", o.a.createElement("span", {
						className: x.a.warning
					}, C._("WARNING:", null, {
						hk: "2mCuMr"
					})))], {
						hk: "1lJ80A"
					}),
					cancelActionText: C._("Yes, I Don't Want It", null, {
						hk: "4kIHcP"
					}),
					actionText: C._("Go Back", null, {
						hk: "4ckZOO"
					}),
					withOverlay: !0
				})
			};
			var h = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less"),
				g = n.n(h);
			const v = e => {
				let {
					layout: t
				} = e;
				const n = Object(a.d)(),
					O = Object(_.a)(),
					j = Object(a.e)(b.a),
					[x, C] = Object(r.useState)(!1);
				Object(k.a)(d.a);
				const [h, v] = Object(f.a)("marketplaceClaimInFeedUnitDismissed", !1), [I, y] = Object(f.a)("marketplaceClaimInFeedUnitLoadCount", 0), A = Object(r.useRef)(I), M = A.current % 2 == 0;
				if (Object(r.useEffect)(() => {
						M && O(Object(p.d)()), h || y(A.current + 1)
					}, [y, A, O, M, h]), !(null == j ? void 0 : j.id) || h || !M) return null;
				const N = t !== m.g.Large;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					"data-testid": "marketplace-claim-infeed-unit",
					className: Object(c.a)(g.a.container, {
						[g.a.isNotLarge]: N
					})
				}, o.a.createElement(l.a, null, o.a.createElement(s.a, {
					className: Object(c.a)(g.a.feedUnit, {
						[g.a.isNotLarge]: N
					}),
					onClickCta: () => {
						O(Object(p.b)()), n(Object(i.h)(u.a.ECON_MARKETPLACE_CLAIM, {
							claimId: j.id
						}))
					},
					onClose: () => C(!0),
					title: j.title,
					description: j.description,
					ctaText: j.buttonCtaText,
					isNotCardLayout: N
				}))), x && o.a.createElement(E, {
					onGoBack: () => C(!1),
					onDismiss: () => {
						O(Object(p.c)()), v(!0)
					}
				}))
			};
			t.default = v
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return i
			}));
			var c = n("./src/reddit/selectors/telemetry.ts");
			const r = () => e => ({
					...Object(c.n)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				o = () => e => ({
					...Object(c.n)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				a = () => e => ({
					...Object(c.n)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var s;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(s || (s = {}));
			const i = e => t => {
				const n = Object(c.n)(t);
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
				return r
			}));
			var c = n("./node_modules/react/index.js");

			function r(e) {
				Object(c.useEffect)(() => {
					e()
				}, [e])
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.97854b1500a70b787c97.js.map