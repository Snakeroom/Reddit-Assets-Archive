// https://www.redditstatic.com/desktop2x/NftProductDetailsModal.26253e6acd6a80075a2d.js
// Retrieved at 5/12/2022, 8:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NftProductDetailsModal"], {
		"./node_modules/@reddit/crypto/core/wallets/index.es.js": function(e, t, r) {
			"use strict";
			var s, a, n = r("./node_modules/ethers/lib.esm/index.js");
			(a = s || (s = {}))[a.Metamask = 1] = "Metamask", a[a.CoinbaseWallet = 2] = "CoinbaseWallet";
			class o {
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
			n.ethers.providers.Web3Provider
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
			var s = r("./src/higherOrderComponents/asModal/index.tsx"),
				a = r("./node_modules/react/index.js"),
				n = r.n(a),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/@reddit/crypto/react/nft-product-card/index.es.js"),
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				i = r("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				l = r("./src/reddit/helpers/avatarRouting.ts"),
				u = r("./src/reddit/selectors/activeModal.ts"),
				p = r("./src/reddit/selectors/user.ts"),
				m = r("./src/reddit/components/Econ/Marketplace/NftProductDetails/index.m.less"),
				h = r.n(m);

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
					const r = Object(o.e)(p.Bb),
						s = Object(o.e)(e => {
							var t;
							return null === (t = Object(u.a)(e)) || void 0 === t ? void 0 : t.itemId
						}),
						a = Object(o.d)();
					if (!r || !s) return null;
					return n.a.createElement("div", {
						className: h.a.container
					}, n.a.createElement(i.a, null, n.a.createElement(c.a, {
						itemId: s,
						onClose: t,
						currentUserId: r,
						onViewAvatar: e => {
							t(), a(Object(d.b)({
								activeTab: l.a.ME,
								activeDetails: {
									id: e
								}
							}))
						},
						onSetAsAvatar: e => {
							t(), a(Object(d.b)({
								activeTab: l.a.ME,
								activeDetails: {
									id: e,
									equip: !0,
									save: !0
								}
							}))
						}
					})))
				},
				_ = Object(s.a)(f);
			t.default = e => n.a.createElement(_, v({
				withOverlay: !0,
				className: h.a.modal
			}, e))
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.SHOP = "shop", e.EXPLORE = "explore", e.STYLE = "style", e.ME = "me", e.NFT = "nft"
				}(s || (s = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProductDetailsModal.26253e6acd6a80075a2d.js.map