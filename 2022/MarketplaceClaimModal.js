// https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.0efc8af71d7d97257d04.js
// Retrieved at 8/31/2022, 7:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MarketplaceClaimModal"], {
		"./src/reddit/actions/economics/marketplace/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = "ECON__MARKETPLACE_ITEM_CLAIMED",
				o = "ECON__MARKETPLACE_ITEMS_OUT_OF_STOCK"
		},
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				o = n("./src/lib/env/index.ts"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
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
					const e = Object(c.e)(E),
						t = Object(c.e)(u.db),
						n = Object(d.a)(),
						r = Object(o.b)() ? i.a.Ethereum : i.a.Rinkeby;
					return Object(a.useMemo)(() => (function(e, t, n, r) {
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
				return s.a.createElement(r.a, {
					value: n
				}, t)
			};

			function E(e) {
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
				return A
			}));
			var r = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/@reddit/crypto/react/nft-claim/index.es.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/marketplace/constants.ts");
			const l = Object(i.a)(d.b),
				u = Object(i.a)(d.a);
			var m = n("./src/reddit/actions/snoovatarModal.ts"),
				p = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				E = n("./src/reddit/helpers/avatarRouting.ts"),
				O = n("./src/reddit/selectors/activeModal.ts"),
				_ = n("./src/reddit/selectors/experiments/econ/index.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/Econ/Marketplace/ClaimModal/index.m.less"),
				C = n.n(v);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const A = e => {
					let {
						onClose: t
					} = e;
					const n = Object(s.e)(f.Cb),
						r = Object(s.e)(e => {
							var t;
							return null === (t = Object(O.a)(e)) || void 0 === t ? void 0 : t.claimId
						}),
						o = Object(s.d)(),
						i = Object(s.e)(_.A);
					if (!n || !r) return null;
					return a.a.createElement("div", {
						className: C.a.container
					}, a.a.createElement(p.a, null, a.a.createElement(c.b, {
						onClose: t,
						userId: n,
						onViewAvatar: () => {
							t(), o(Object(m.b)({
								activeTab: E.a.ME,
								activeMeSubpage: "MY_STUFF"
							}))
						},
						omitIkey: i,
						onEvent: e => {
							var t;
							"CLAIM_ERROR" === e.type && "NO_NFT_LEFT" === (null === (t = e.data) || void 0 === t ? void 0 : t.status) && o(u({
								claimId: r
							})), "CLAIM_SUCCESS" === e.type && o(l({
								claimId: r
							}))
						}
					})))
				},
				M = Object(r.a)(A);
			t.default = e => a.a.createElement(M, b({
				withOverlay: !0,
				onOverlayClick: e.onClose,
				className: C.a.modal
			}, e))
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, n) {
			"use strict";
			var r, o, a;
			n.d(t, "a", (function() {
					return o
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.BODY = "body", e.EYES = "eyes", e.HAIR = "hair", e.EXPRESSION = "expression", e.FACIAL_HAIR = "facial hair"
				}(r || (r = {})),
				function(e) {
					e.SHOP = "shop", e.EXPLORE = "explore", e.STYLE = "style", e.ME = "you", e.NFT = "nft"
				}(o || (o = {})),
				function(e) {
					e.FEATURED = "featured", e.POPULAR = "popular", e.GALLERY = "gallery", e.ARTISTS = "artists", e.ARTIST_PAGE = "artist_page"
				}(a || (a = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.0efc8af71d7d97257d04.js.map