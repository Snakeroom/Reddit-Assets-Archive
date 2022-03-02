// https://www.redditstatic.com/desktop2x/NftProfileUnit.df50aaf7e3cfb1590b50.js
// Retrieved at 3/2/2022, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NftProfileUnit"], {
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var o = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/config.ts");
			const i = ({
				children: e
			}) => {
				const t = function() {
					const e = Object(c.e)(l);
					a || (a = function(e) {
						return {
							api: {
								accessToken: e
							},
							gql: {
								host: d.a.gqlUrl,
								fetchOptions: {
									headers: {
										Authorization: `Bearer ${e}`
									}
								}
							},
							nightModeActive: () => !1
						}
					}(e));
					return a
				}();
				return s.a.createElement(o.a, {
					value: t
				}, e)
			};
			let a = null;

			function l(e) {
				var t;
				return (null === (t = e.user.session) || void 0 === t ? void 0 : t.accessToken) || ""
			}
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.m.less": function(e, t, n) {
			e.exports = {
				detailsButton: "_3QDuMIB5Qg310ADO1_fdV2"
			}
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/@reddit/crypto/react/nft-treatment/index.es.js"),
				d = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				u = n("./src/reddit/constants/modals.ts");
			const m = () => Promise.all([n.e(0), n.e(1), n.e(3), n.e("NftProductDetailsModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProductDetails/index.tsx")),
				f = Object(a.a)(m, {
					ssr: !1
				});
			Object(l.b)(u.a.ECON_NFT_PRODUCT_DETAILS, e => r.a.createElement(f, {
				onClose: e,
				onOverlayClick: e
			}));
			var _ = n("./src/reddit/hooks/usePreloadModal.ts"),
				p = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.m.less"),
				E = n.n(p);
			t.default = ({
				className: e,
				imageUrl: t
			}) => {
				const n = Object(s.d)();
				Object(_.a)(m);
				const o = Object(c.c)(t);
				return o ? r.a.createElement("div", {
					className: e
				}, r.a.createElement(i.a, null, r.a.createElement(c.b, {
					imageUrl: t
				}), r.a.createElement(c.a, {
					className: E.a.detailsButton,
					onClick: () => {
						n(Object(d.h)(u.a.ECON_NFT_PRODUCT_DETAILS, {
							itemId: o
						}))
					}
				}))) : null
			}
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			}));
			const o = {},
				r = () => null;

			function s(e, t) {
				if (e in o) throw new Error(`Modal with id ${e} already registered!`);
				o[e] = t
			}

			function c(e) {
				return e && e in o ? o[e] : r
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js");

			function r(e) {
				Object(o.useEffect)(() => {
					e()
				}, [e])
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProfileUnit.df50aaf7e3cfb1590b50.js.map