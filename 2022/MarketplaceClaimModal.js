// https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.dc70aa3e201acde33412.js
// Retrieved at 2/23/2022, 10:50:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceClaimModal"], {
		"./src/reddit/actions/economics/marketplace/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return r
			}));
			const a = "ECON__MARKETPLACE_ITEM_CLAIMED",
				r = "ECON__MARKETPLACE_ITEMS_OUT_OF_STOCK"
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
				return h
			}));
			var a = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/@reddit/crypto/react/nft-claim/index.es.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/marketplace/constants.ts");
			const l = Object(i.a)(d.b),
				u = Object(i.a)(d.a);
			var m = n("./src/reddit/actions/snoovatarModal.ts"),
				v = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				E = n("./src/config.ts");
			const _ = ({
				children: e
			}) => {
				const t = function() {
					const e = Object(s.e)(p);
					O || (O = function(e) {
						return {
							api: {
								accessToken: e
							},
							gql: {
								host: E.a.gqlUrl,
								fetchOptions: {
									headers: {
										Authorization: `Bearer ${e}`
									}
								}
							},
							nightModeActive: () => !1
						}
					}(e));
					return O
				}();
				return c.a.createElement(v.a, {
					value: t
				}, e)
			};
			let O = null;

			function p(e) {
				var t;
				return (null === (t = e.user.session) || void 0 === t ? void 0 : t.accessToken) || ""
			}
			var f = n("./src/reddit/helpers/avatarRouting.ts"),
				M = n("./src/reddit/selectors/activeModal.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/Econ/Marketplace/ClaimModal/index.m.less"),
				A = n.n(b);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ({
					onClose: e
				}) => {
					const t = Object(s.e)(C.yb),
						n = Object(s.e)(e => {
							var t;
							return null === (t = Object(M.a)(e)) || void 0 === t ? void 0 : t.claimId
						}),
						a = Object(s.d)();
					if (!t || !n) return null;
					return c.a.createElement("div", {
						className: A.a.container
					}, c.a.createElement(_, null, c.a.createElement(o.a, {
						onClose: e,
						userId: t,
						onViewAvatar: t => {
							e(), a(Object(m.b)({
								activeTab: f.a.ME,
								activeDetails: {
									id: t
								}
							}))
						},
						onSetAsAvatar: t => {
							e(), a(Object(m.b)({
								activeTab: f.a.ME,
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
							"CLAIM_ERROR" === e.type && "NO_NFT_LEFT" === (null === (t = e.data) || void 0 === t ? void 0 : t.status) && a(u({
								claimId: n
							})), "CLAIM_SUCCESS" === e.type && a(l({
								claimId: n
							}))
						}
					})))
				},
				L = Object(a.a)(h);
			t.default = e => c.a.createElement(L, j({
				withOverlay: !0,
				className: A.a.modal
			}, e))
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, n) {
			"use strict";
			var a;
			n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.EXPLORE = "explore", e.STYLE = "style", e.ME = "me", e.NFT = "nft"
				}(a || (a = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.dc70aa3e201acde33412.js.map