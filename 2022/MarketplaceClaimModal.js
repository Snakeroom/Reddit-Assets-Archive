// https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.5a50ce5d6cacd25ac37c.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
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
				return u
			}));
			var r = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/config.ts");
			const u = e => {
				let {
					children: t
				} = e;
				const n = function() {
					const e = Object(s.e)(m),
						t = Object(s.e)(d.db),
						n = Object(c.a)();
					return Object(a.useMemo)(() => (function(e, t, n) {
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
				E = n("./src/reddit/helpers/avatarRouting.ts"),
				O = n("./src/reddit/selectors/activeModal.ts"),
				_ = n("./src/reddit/selectors/experiments/econ/index.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/Econ/Marketplace/ClaimModal/index.m.less"),
				v = n.n(C);

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
						a = Object(s.d)(),
						i = Object(s.e)(_.z);
					if (!n || !r) return null;
					return o.a.createElement("div", {
						className: v.a.container
					}, o.a.createElement(p.a, null, o.a.createElement(c.b, {
						onClose: t,
						userId: n,
						onViewAvatar: () => {
							t(), a(Object(m.b)({
								activeTab: E.a.ME,
								activeMeSubpage: "MY_STUFF"
							}))
						},
						claimId: r,
						omitIkey: i,
						onEvent: e => {
							var t;
							"CLAIM_ERROR" === e.type && "NO_NFT_LEFT" === (null === (t = e.data) || void 0 === t ? void 0 : t.status) && a(u({
								claimId: r
							})), "CLAIM_SUCCESS" === e.type && a(l({
								claimId: r
							}))
						}
					})))
				},
				M = Object(r.a)(A);
			t.default = e => o.a.createElement(M, b({
				withOverlay: !0,
				onOverlayClick: e.onClose,
				className: v.a.modal
			}, e))
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, n) {
			"use strict";
			var r, a, o;
			n.d(t, "a", (function() {
					return a
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.BODY = "body", e.EYES = "eyes", e.HAIR = "hair", e.EXPRESSION = "expression", e.FACIAL_HAIR = "facial hair"
				}(r || (r = {})),
				function(e) {
					e.SHOP = "shop", e.EXPLORE = "explore", e.STYLE = "style", e.ME = "you", e.NFT = "nft"
				}(a || (a = {})),
				function(e) {
					e.FEATURED = "featured", e.POPULAR = "popular", e.GALLERY = "gallery", e.ARTISTS = "artists", e.ARTIST_PAGE = "artist_page"
				}(o || (o = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MarketplaceClaimModal.5a50ce5d6cacd25ac37c.js.map