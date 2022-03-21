// https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.64e8d6ab31bc350075ba.js
// Retrieved at 3/21/2022, 5:00:08 PM by Reddit Dataminer v1.0.0
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
				return d
			}));
			var r = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/user.ts"),
				i = n("./src/config.ts");
			const d = ({
				children: e
			}) => {
				const t = function() {
					const e = Object(c.e)(u),
						t = Object(c.e)(o.cb);
					l || (l = function(e, t) {
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
							nightModeActive: () => t
						}
					}(e, t));
					return l
				}();
				return s.a.createElement(r.a, {
					value: t
				}, e)
			};
			let l = null;

			function u(e) {
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
				return b
			}));
			var r = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/@reddit/crypto/react/nft-claim/index.es.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/marketplace/constants.ts");
			const l = Object(i.a)(d.b),
				u = Object(i.a)(d.a);
			var m = n("./src/reddit/actions/snoovatarModal.ts"),
				p = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				E = n("./src/reddit/helpers/avatarRouting.ts"),
				v = n("./src/reddit/selectors/activeModal.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/Econ/Marketplace/ClaimModal/index.m.less"),
				C = n.n(O);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ({
					onClose: e
				}) => {
					const t = Object(c.e)(_.Ab),
						n = Object(c.e)(e => {
							var t;
							return null === (t = Object(v.a)(e)) || void 0 === t ? void 0 : t.claimId
						}),
						r = Object(c.d)();
					if (!t || !n) return null;
					return s.a.createElement("div", {
						className: C.a.container
					}, s.a.createElement(p.a, null, s.a.createElement(o.a, {
						onClose: e,
						userId: t,
						onViewAvatar: t => {
							e(), r(Object(m.b)({
								activeTab: E.a.ME,
								activeDetails: {
									id: t
								}
							}))
						},
						onSetAsAvatar: t => {
							e(), r(Object(m.b)({
								activeTab: E.a.ME,
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
				M = Object(r.a)(b);
			t.default = e => s.a.createElement(M, f({
				withOverlay: !0,
				className: C.a.modal
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.64e8d6ab31bc350075ba.js.map