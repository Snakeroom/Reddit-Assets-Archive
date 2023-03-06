// https://www.redditstatic.com/desktop2x/NftProductDetailsModal.020b2fd48280f847919c.js
// Retrieved at 3/6/2023, 9:40:04 AM by Reddit Dataminer v1.0.0
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
				return f
			}));
			var r = a("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = a("./src/higherOrderComponents/asModal/index.tsx"),
				c = a("./node_modules/react/index.js"),
				n = a.n(c),
				o = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/reddit/actions/modal.ts"),
				d = a("./src/reddit/actions/snoovatarModal.ts"),
				l = a("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				u = a("./src/reddit/constants/modals.ts"),
				p = a("./src/reddit/helpers/avatarRouting.ts"),
				E = a("./src/reddit/selectors/activeModal.ts"),
				O = a("./src/reddit/selectors/user.ts"),
				m = a("./src/reddit/components/Econ/Marketplace/NftProductDetails/index.m.less"),
				A = a.n(m);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const f = e => {
					let {
						onClose: t
					} = e;
					const a = Object(o.e)(O.Eb),
						{
							itemId: s,
							showBack: c
						} = Object(o.e)(e => {
							const t = Object(E.a)(e);
							return {
								itemId: null == t ? void 0 : t.itemId,
								showBack: null == t ? void 0 : t.showBack
							}
						}),
						m = Object(o.d)();
					if (!a || !s) return null;
					return n.a.createElement("div", {
						className: A.a.container
					}, n.a.createElement(l.a, null, n.a.createElement(r.i, {
						onBack: c ? () => {
							t(), m(Object(i.h)(u.a.X_SHOWCASE_COLLECTION_VIEW_MODAL))
						} : void 0,
						itemId: s,
						onClose: t,
						currentUserId: a,
						onViewAvatar: () => {
							t(), m(Object(d.b)({
								activeTab: p.a.ME,
								activeMeSubpage: "MY_STUFF"
							}))
						},
						onSetAsAvatar: e => {
							t(), m(Object(d.b)({
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
							t(), m(Object(d.b)({
								activeTab: p.a.SHOP,
								shopTabState: {
									selectedArtistDisplayName: e,
									activeSheet: p.b.ARTIST_PAGE
								}
							}))
						}
					})))
				},
				v = Object(s.a)(f);
			t.default = e => n.a.createElement(v, _({
				withOverlay: !0,
				className: A.a.modal
			}, e))
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, a) {
			"use strict";
			var r, s, c;
			a.d(t, "a", (function() {
					return s
				})), a.d(t, "b", (function() {
					return c
				})),
				function(e) {
					e.BODY = "body", e.EYES = "eyes", e.HAIR = "hair", e.EXPRESSION = "expression", e.FACIAL_HAIR = "facial hair"
				}(r || (r = {})),
				function(e) {
					e.SHOP = "shop", e.EXPLORE = "explore", e.STYLE = "style", e.ME = "you", e.NFT = "nft"
				}(s || (s = {})),
				function(e) {
					e.FEATURED = "featured", e.POPULAR = "popular", e.GALLERY = "gallery", e.ARTISTS = "artists", e.ARTIST_PAGE = "artist_page"
				}(c || (c = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProductDetailsModal.020b2fd48280f847919c.js.map