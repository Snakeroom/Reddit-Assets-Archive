// https://www.redditstatic.com/desktop2x/NftProductDetailsModal.14aa9f10818578aef7b7.js
// Retrieved at 5/5/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
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
				return O
			}));
			var a = r("./src/higherOrderComponents/asModal/index.tsx"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/@reddit/crypto/react/nft-product-card/index.es.js"),
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				i = r("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				l = r("./src/reddit/helpers/avatarRouting.ts"),
				u = r("./src/reddit/selectors/activeModal.ts"),
				p = r("./src/reddit/selectors/user.ts"),
				m = r("./src/reddit/components/Econ/Marketplace/NftProductDetails/index.m.less"),
				v = r.n(m);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => {
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
					return s.a.createElement("div", {
						className: v.a.container
					}, s.a.createElement(i.a, null, s.a.createElement(c.a, {
						itemId: a,
						onClose: t,
						currentUserId: r,
						onViewAvatar: e => {
							t(), n(Object(d.b)({
								activeTab: l.a.ME,
								activeDetails: {
									id: e
								}
							}))
						},
						onSetAsAvatar: e => {
							t(), n(Object(d.b)({
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
				E = Object(a.a)(O);
			t.default = e => s.a.createElement(E, f({
				withOverlay: !0,
				className: v.a.modal
			}, e))
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, r) {
			"use strict";
			var a;
			r.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.EXPLORE = "explore", e.STYLE = "style", e.ME = "me", e.NFT = "nft"
				}(a || (a = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProductDetailsModal.14aa9f10818578aef7b7.js.map