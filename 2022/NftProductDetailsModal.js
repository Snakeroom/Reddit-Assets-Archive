// https://www.redditstatic.com/desktop2x/NftProductDetailsModal.1485dbaa8de0ab3a8cdb.js
// Retrieved at 8/31/2022, 7:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NftProductDetailsModal"], {
		"./node_modules/@reddit/crypto/core/wallets/index.es.js": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/ethers/lib.esm/index.js");
			class a {
				constructor(e, t) {
					this.type = e, this.provider = t, this._cachedAddress = t.selectedAddress || ""
				}
				get address() {
					return this._cachedAddress
				}
				async requestAddress() {
					return async function(e) {
						const t = await e.request({
							method: "eth_requestAccounts"
						});
						return Array.isArray(t) ? t.filter(e => e && e.length > 0).map(e => e.toLowerCase()) : []
					}(this.provider).then(e => (this._cachedAddress = e[0], this._cachedAddress))
				}
			}
			s.ethers.providers.Web3Provider
		},
		"./src/reddit/components/Econ/Marketplace/NftProductDetails/index.m.less": function(e, t, r) {
			e.exports = {
				modal: "MzaTO6XfNAMcup963kPT2",
				container: "_30RcuypcroQp3sThrxG8QS"
			}
		},
		"./src/reddit/components/Econ/Marketplace/NftProductDetails/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "NftProductDetails", (function() {
				return f
			}));
			var s = r("./node_modules/@reddit/crypto/react/nft-product-card/index.es.js"),
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				n = r("./node_modules/react/index.js"),
				c = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				i = r("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				l = r("./src/reddit/helpers/avatarRouting.ts"),
				u = r("./src/reddit/selectors/activeModal.ts"),
				p = r("./src/reddit/selectors/user.ts"),
				A = r("./src/reddit/components/Econ/Marketplace/NftProductDetails/index.m.less"),
				h = r.n(A);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = e => {
					let {
						onClose: t
					} = e;
					const r = Object(o.e)(p.Cb),
						a = Object(o.e)(e => {
							var t;
							return null === (t = Object(u.a)(e)) || void 0 === t ? void 0 : t.itemId
						}),
						n = Object(o.d)();
					if (!r || !a) return null;
					return c.a.createElement("div", {
						className: h.a.container
					}, c.a.createElement(i.a, null, c.a.createElement(s.a, {
						itemId: a,
						onClose: t,
						currentUserId: r,
						onViewAvatar: () => {
							t(), n(Object(d.b)({
								activeTab: l.a.ME,
								activeMeSubpage: "MY_STUFF"
							}))
						},
						onSetAsAvatar: e => {
							t(), n(Object(d.b)({
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
							t(), n(Object(d.b)({
								activeTab: l.a.SHOP,
								shopTabState: {
									selectedArtistId: e,
									activeSheet: l.b.ARTIST_PAGE
								}
							}))
						}
					})))
				},
				_ = Object(a.a)(f);
			t.default = e => c.a.createElement(_, v({
				withOverlay: !0,
				className: h.a.modal
			}, e))
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, r) {
			"use strict";
			var s, a, n;
			r.d(t, "a", (function() {
					return a
				})), r.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.BODY = "body", e.EYES = "eyes", e.HAIR = "hair", e.EXPRESSION = "expression", e.FACIAL_HAIR = "facial hair"
				}(s || (s = {})),
				function(e) {
					e.SHOP = "shop", e.EXPLORE = "explore", e.STYLE = "style", e.ME = "you", e.NFT = "nft"
				}(a || (a = {})),
				function(e) {
					e.FEATURED = "featured", e.POPULAR = "popular", e.GALLERY = "gallery", e.ARTISTS = "artists", e.ARTIST_PAGE = "artist_page"
				}(n || (n = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProductDetailsModal.1485dbaa8de0ab3a8cdb.js.map