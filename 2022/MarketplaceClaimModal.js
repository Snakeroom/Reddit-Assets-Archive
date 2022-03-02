// https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.0f33ab1fff4a51f06bbe.js
// Retrieved at 3/2/2022, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceClaimModal"], {
		"./src/reddit/actions/economics/marketplace/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "ECON__MARKETPLACE_ITEM_CLAIMED",
				a = "ECON__MARKETPLACE_ITEMS_OUT_OF_STOCK"
		},
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/config.ts");
			const i = ({
				children: e
			}) => {
				const t = function() {
					const e = Object(s.e)(l);
					d || (d = function(e) {
						return {
							api: {
								accessToken: e
							},
							gql: {
								host: c.a.gqlUrl,
								fetchOptions: {
									headers: {
										Authorization: `Bearer ${e}`
									}
								}
							},
							nightModeActive: () => !1
						}
					}(e));
					return d
				}();
				return o.a.createElement(r.a, {
					value: t
				}, e)
			};
			let d = null;

			function l(e) {
				var t;
				return (null === (t = e.user.session) || void 0 === t ? void 0 : t.accessToken) || ""
			}
		},
		"./src/reddit/components/Econ/Marketplace/ClaimModal/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_22huBTn9NqDOSj45zEGGs3",
				container: "_2mZvUEkLtqsycUGDC_Qt5O"
			}
		},
		"./src/reddit/components/Econ/Marketplace/ClaimModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "MarketplaceClaim", (function() {
				return M
			}));
			var r = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/@reddit/crypto/react/nft-claim/index.es.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/marketplace/constants.ts");
			const l = Object(i.a)(d.b),
				u = Object(i.a)(d.a);
			var m = n("./src/reddit/actions/snoovatarModal.ts"),
				p = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				v = n("./src/reddit/helpers/avatarRouting.ts"),
				_ = n("./src/reddit/selectors/activeModal.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/Econ/Marketplace/ClaimModal/index.m.less"),
				O = n.n(C);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const M = ({
					onClose: e
				}) => {
					const t = Object(s.e)(E.yb),
						n = Object(s.e)(e => {
							var t;
							return null === (t = Object(_.a)(e)) || void 0 === t ? void 0 : t.claimId
						}),
						r = Object(s.d)();
					if (!t || !n) return null;
					return o.a.createElement("div", {
						className: O.a.container
					}, o.a.createElement(p.a, null, o.a.createElement(c.a, {
						onClose: e,
						userId: t,
						onViewAvatar: t => {
							e(), r(Object(m.b)({
								activeTab: v.a.ME,
								activeDetails: {
									id: t
								}
							}))
						},
						onSetAsAvatar: t => {
							e(), r(Object(m.b)({
								activeTab: v.a.ME,
								activeDetails: {
									id: t,
									equip: !0,
									save: !0
								}
							}))
						},
						claimId: n,
						onEvent: e => {
							var t;
							"CLAIM_ERROR" === e.type && "NO_NFT_LEFT" === (null === (t = e.data) || void 0 === t ? void 0 : t.status) && r(u({
								claimId: n
							})), "CLAIM_SUCCESS" === e.type && r(l({
								claimId: n
							}))
						}
					})))
				},
				b = Object(r.a)(M);
			t.default = e => o.a.createElement(b, f({
				withOverlay: !0,
				className: O.a.modal
			}, e))
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.EXPLORE = "explore", e.STYLE = "style", e.ME = "me", e.NFT = "nft"
				}(r || (r = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.0f33ab1fff4a51f06bbe.js.map