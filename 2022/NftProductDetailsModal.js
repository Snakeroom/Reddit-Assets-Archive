// https://www.redditstatic.com/desktop2x/NftProductDetailsModal.efa78969dc2f62b0e586.js
// Retrieved at 9/12/2022, 2:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NftProductDetailsModal"], {
		"./src/reddit/components/Econ/Marketplace/NftProductDetails/index.m.less": function(e, t, r) {
			e.exports = {
				modal: "MzaTO6XfNAMcup963kPT2",
				container: "_30RcuypcroQp3sThrxG8QS"
			}
		},
		"./src/reddit/components/Econ/Marketplace/NftProductDetails/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "NftProductDetails", (function() {
				return b
			}));
			var a = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				n = r("./src/higherOrderComponents/asModal/index.tsx"),
				s = r("./node_modules/react/index.js"),
				c = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/actions/snoovatarModal.ts"),
				d = r("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				l = r("./src/reddit/helpers/avatarRouting.ts"),
				u = r("./src/reddit/selectors/activeModal.ts"),
				p = r("./src/reddit/selectors/experiments/econ/index.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				f = r("./src/reddit/components/Econ/Marketplace/NftProductDetails/index.m.less"),
				v = r.n(f);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const b = e => {
					let {
						onClose: t
					} = e;
					const r = Object(o.e)(E.Cb),
						n = Object(o.e)(e => {
							var t;
							return null === (t = Object(u.a)(e)) || void 0 === t ? void 0 : t.itemId
						}),
						s = Object(o.d)();
					Object(o.e)(p.g);
					if (!r || !n) return null;
					const f = () => {
							t(), s(Object(i.b)({
								activeTab: l.a.ME,
								activeMeSubpage: "MY_STUFF"
							}))
						},
						O = e => {
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
						b = e => {
							t(), s(Object(i.b)({
								activeTab: l.a.SHOP,
								shopTabState: {
									selectedArtistId: e,
									activeSheet: l.b.ARTIST_PAGE
								}
							}))
						};
					return c.a.createElement("div", {
						className: v.a.container
					}, c.a.createElement(d.a, null, c.a.createElement(a.i, {
						itemId: n,
						onClose: t,
						currentUserId: r,
						onViewAvatar: f,
						onSetAsAvatar: O,
						onArtistClick: b
					})))
				},
				m = Object(n.a)(b);
			t.default = e => c.a.createElement(m, O({
				withOverlay: !0,
				className: v.a.modal
			}, e))
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, r) {
			"use strict";
			var a, n, s;
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.BODY = "body", e.EYES = "eyes", e.HAIR = "hair", e.EXPRESSION = "expression", e.FACIAL_HAIR = "facial hair"
				}(a || (a = {})),
				function(e) {
					e.SHOP = "shop", e.EXPLORE = "explore", e.STYLE = "style", e.ME = "you", e.NFT = "nft"
				}(n || (n = {})),
				function(e) {
					e.FEATURED = "featured", e.POPULAR = "popular", e.GALLERY = "gallery", e.ARTISTS = "artists", e.ARTIST_PAGE = "artist_page"
				}(s || (s = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProductDetailsModal.efa78969dc2f62b0e586.js.map