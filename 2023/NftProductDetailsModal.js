// https://www.redditstatic.com/desktop2x/NftProductDetailsModal.9f9b244b841ff72fa8a2.js
// Retrieved at 5/23/2023, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NftProductDetailsModal"], {
		"./src/reddit/components/Econ/Marketplace/NftProductDetails/index.m.less": function(e, t, a) {
			e.exports = {
				modal: "MzaTO6XfNAMcup963kPT2",
				container: "_30RcuypcroQp3sThrxG8QS"
			}
		},
		"./src/reddit/components/Econ/Marketplace/NftProductDetails/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "NftProductDetails", (function() {
				return A
			}));
			var r = a("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = a("./src/higherOrderComponents/asModal/index.tsx"),
				o = a("./node_modules/react/index.js"),
				c = a.n(o),
				n = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/reddit/actions/modal.ts"),
				d = a("./src/reddit/actions/snoovatarModal.ts"),
				l = a("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				u = a("./src/reddit/constants/modals.ts"),
				p = a("./src/reddit/helpers/avatarRouting.ts"),
				m = a("./src/reddit/selectors/activeModal.ts"),
				f = a("./src/reddit/selectors/user.ts"),
				E = a("./src/reddit/components/Econ/Marketplace/NftProductDetails/index.m.less"),
				O = a.n(E);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const A = e => {
					let {
						onClose: t
					} = e;
					const a = Object(n.e)(f.Fb),
						{
							itemId: s,
							showBack: o,
							profileUserName: E
						} = Object(n.e)(e => {
							const t = Object(m.a)(e);
							return {
								itemId: null == t ? void 0 : t.itemId,
								showBack: null == t ? void 0 : t.showBack,
								profileUserName: null == t ? void 0 : t.profileUserName
							}
						}),
						v = Object(n.d)();
					if (!s) return null;
					return c.a.createElement("div", {
						className: O.a.container
					}, c.a.createElement(l.a, null, c.a.createElement(r.i, {
						onBack: o ? () => {
							t(), v(Object(i.h)(u.a.X_SHOWCASE_COLLECTION_VIEW_MODAL, {
								profileUserName: E
							}))
						} : void 0,
						itemId: s,
						onClose: t,
						currentUserId: a || "",
						onViewAvatar: () => {
							t(), v(Object(d.b)({
								activeTab: p.a.ME,
								activeMeSubpage: "MY_STUFF"
							}))
						},
						onSetAsAvatar: e => {
							t(), v(Object(d.b)({
								activeTab: p.a.ME,
								activeMeSubpage: "MY_STUFF",
								activeDetails: {
									id: e,
									equip: !0,
									save: !0
								}
							}))
						},
						onArtistClick: e => {
							t(), v(Object(d.b)({
								activeTab: p.a.SHOP,
								shopTabState: {
									selectedArtistDisplayName: e,
									activeSheet: p.b.ARTIST_PAGE
								}
							}))
						}
					})))
				},
				_ = Object(s.a)(A);
			t.default = e => c.a.createElement(_, v({
				withOverlay: !0,
				className: O.a.modal
			}, e))
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, a) {
			"use strict";
			var r, s, o;
			a.d(t, "a", (function() {
					return s
				})), a.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.BODY = "body", e.EYES = "eyes", e.HAIR = "hair", e.EXPRESSION = "expression", e.FACIAL_HAIR = "facial hair"
				}(r || (r = {})),
				function(e) {
					e.SHOP = "shop", e.EXPLORE = "explore", e.STYLE = "style", e.ME = "you", e.NFT = "nft"
				}(s || (s = {})),
				function(e) {
					e.FEATURED = "featured", e.POPULAR = "popular", e.GALLERY = "gallery", e.ARTISTS = "artists", e.ARTIST_PAGE = "artist_page"
				}(o || (o = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProductDetailsModal.9f9b244b841ff72fa8a2.js.map