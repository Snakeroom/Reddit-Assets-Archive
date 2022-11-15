// https://www.redditstatic.com/desktop2x/NftProductDetailsModal.20e12890a07b06f3693f.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
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
				n = a("./src/higherOrderComponents/asModal/index.tsx"),
				s = a("./node_modules/react/index.js"),
				c = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/reddit/actions/snoovatarModal.ts"),
				d = a("./src/reddit/components/Marketplace/MarketplaceConfigProvider.tsx"),
				l = a("./src/reddit/helpers/avatarRouting.ts"),
				u = a("./src/reddit/selectors/activeModal.ts"),
				p = a("./src/reddit/selectors/user.ts"),
				E = a("./src/reddit/components/Econ/Marketplace/NftProductDetails/index.m.less"),
				f = a.n(E);

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
					const a = Object(o.e)(p.Db),
						n = Object(o.e)(e => {
							var t;
							return null === (t = Object(u.a)(e)) || void 0 === t ? void 0 : t.itemId
						}),
						s = Object(o.d)();
					if (!a || !n) return null;
					return c.a.createElement("div", {
						className: f.a.container
					}, c.a.createElement(d.a, null, c.a.createElement(r.i, {
						itemId: n,
						onClose: t,
						currentUserId: a,
						onViewAvatar: () => {
							t(), s(Object(i.b)({
								activeTab: l.a.ME,
								activeMeSubpage: "MY_STUFF"
							}))
						},
						onSetAsAvatar: e => {
							t(), s(Object(i.b)({
								activeTab: l.a.ME,
								activeMeSubpage: "MY_STUFF",
								activeDetails: {
									id: e,
									equip: !0,
									save: !0
								}
							}))
						},
						onArtistClick: e => {
							t(), s(Object(i.b)({
								activeTab: l.a.SHOP,
								shopTabState: {
									selectedArtistId: e,
									activeSheet: l.b.ARTIST_PAGE
								}
							}))
						}
					})))
				},
				O = Object(n.a)(A);
			t.default = e => c.a.createElement(O, v({
				withOverlay: !0,
				className: f.a.modal
			}, e))
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, a) {
			"use strict";
			var r, n, s;
			a.d(t, "a", (function() {
					return n
				})), a.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.BODY = "body", e.EYES = "eyes", e.HAIR = "hair", e.EXPRESSION = "expression", e.FACIAL_HAIR = "facial hair"
				}(r || (r = {})),
				function(e) {
					e.SHOP = "shop", e.EXPLORE = "explore", e.STYLE = "style", e.ME = "you", e.NFT = "nft"
				}(n || (n = {})),
				function(e) {
					e.FEATURED = "featured", e.POPULAR = "popular", e.GALLERY = "gallery", e.ARTISTS = "artists", e.ARTIST_PAGE = "artist_page"
				}(s || (s = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProductDetailsModal.20e12890a07b06f3693f.js.map