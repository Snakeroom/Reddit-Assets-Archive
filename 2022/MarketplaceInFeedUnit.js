// https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.272bd2a7a711b5555e88.js
// Retrieved at 4/19/2022, 3:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceInFeedUnit"], {
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(d);
			const m = e => e.preventDefault();
			t.a = Object(c.a)(e => s.a.createElement(r.e, null, s.a.createElement(r.i, null, s.a.createElement(i.a, null, s.a.createElement(r.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(l.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(r.b, null)))), s.a.createElement(r.l, null, s.a.createElement(r.p, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(r.g, null, !e.hideCancelButton && s.a.createElement(r.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(r.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				i = n("./src/config.ts");
			const d = e => {
				let {
					children: t
				} = e;
				const n = function() {
					const e = Object(c.e)(m),
						t = Object(c.e)(l.eb),
						n = Object(r.a)();
					u || (u = function(e, t, n) {
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
								host: i.a.gqlUrl,
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
				return s.a.createElement(o.a, {
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
				return N
			}));
			var o = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/@reddit/crypto/react/nft-claim/index.es.js"),
				l = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				d = n("./src/reddit/components/Econ/Marketplace/ClaimModal/async.tsx"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/constants/postLayout.ts"),
				p = n("./src/reddit/selectors/telemetry.ts");
			var x = n("./src/reddit/hooks/useLocalStorage.ts"),
				C = n("./src/reddit/hooks/usePreloadModal.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/selectors/gold/marketplace/claimFlow.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				E = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/confirmDismissModalStyles.m.less"),
				g = n.n(E);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = e => {
				let {
					onDismiss: t,
					onGoBack: n
				} = e;
				return s.a.createElement(_.a, {
					onConfirm: n,
					onCancel: t,
					onClose: n,
					headerText: h._("Are you sure? This is your only chance to collect this avatar.", null, {
						hk: "237ii3"
					}),
					modalText: h._("{=WARNING:} You won't have another opportunity to collect your free avatar. Seriously.", [h._param("=WARNING:", s.a.createElement("span", {
						className: g.a.warning
					}, h._("WARNING:", null, {
						hk: "2mCuMr"
					})))], {
						hk: "1lJ80A"
					}),
					cancelActionText: h._("Yes, I Don't Want It", null, {
						hk: "4kIHcP"
					}),
					actionText: h._("Go Back", null, {
						hk: "4ckZOO"
					}),
					withOverlay: !0
				})
			};
			var O = n("./src/reddit/components/Econ/Marketplace/InFeedUnit/index.m.less"),
				j = n.n(O);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = e => {
				let {
					height: t,
					layout: n
				} = e;
				const _ = Object(c.d)(),
					E = Object(b.a)(),
					g = Object(c.e)(f.a),
					h = Object(c.e)(k.k) || "",
					[O, N] = Object(a.useState)(!1);
				Object(C.a)(d.a);
				const [v, A] = Object(x.a)("marketplaceClaimInFeedUnitDismissed", !1), [T, F] = Object(x.a)("marketplaceClaimInFeedUnitLoadCount", 0), I = Object(a.useRef)(T), L = I.current % 2 == 0;
				if (Object(a.useEffect)(() => {
						L && E((() => e => ({
							...Object(p.n)(e),
							source: "marketplace",
							action: "view",
							noun: "claim_post_unit"
						}))()), v || F(I.current + 1)
					}, [F, I, E, L, v]), !(null == g ? void 0 : g.id) || v || !L) return null;
				const D = n !== m.g.Large;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					"data-testid": "marketplace-claim-infeed-unit",
					className: Object(o.a)(j.a.container, {
						[j.a.isNotLarge]: D
					})
				}, s.a.createElement(i.a, null, s.a.createElement(r.a, {
					className: j.a.inFeedUnit,
					onClickCta: () => {
						E((() => e => ({
							...Object(p.n)(e),
							source: "marketplace",
							action: "click",
							noun: "claim_post_unit"
						}))()), _(Object(l.h)(u.a.ECON_MARKETPLACE_CLAIM, {
							claimId: g.id
						}))
					},
					onClose: () => N(!0),
					labelText: y._("ACHIEVEMENT UNLOCKED", null, {
						hk: "3yZmfO"
					}),
					title: g.title,
					username: h,
					description: g.description,
					ctaText: g.buttonCtaText
				}))), O && s.a.createElement(M, {
					onGoBack: () => N(!1),
					onDismiss: () => {
						E((() => e => ({
							...Object(p.n)(e),
							source: "marketplace",
							action: "close",
							noun: "claim_post_unit"
						}))()), A(!0)
					}
				}))
			};
			t.default = N
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js");

			function a(e) {
				Object(o.useEffect)(() => {
					e()
				}, [e])
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceInFeedUnit.272bd2a7a711b5555e88.js.map