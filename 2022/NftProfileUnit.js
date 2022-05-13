// https://www.redditstatic.com/desktop2x/NftProfileUnit.c3642d36656d9a56e16e.js
// Retrieved at 5/12/2022, 8:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NftProfileUnit"], {
		"./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/@reddit/crypto/react/config/index.es.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				i = n("./src/config.ts");
			const l = e => {
				let {
					children: t
				} = e;
				const n = function() {
					const e = Object(c.e)(m),
						t = Object(c.e)(d.cb),
						n = Object(a.a)();
					u || (u = function(e, t, n) {
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
								host: i.a.gqlUrl,
								fetchOptions: {
									headers: {
										Authorization: `Bearer ${e}`
									}
								}
							},
							nightModeActive: () => t,
							sendEvent: () => n
						}
					}(e, t, n));
					return u
				}();
				return s.a.createElement(r.a, {
					value: n
				}, t)
			};
			let u = null;

			function m(e) {
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/@reddit/crypto/react/nft-treatment/index.es.js"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				i = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				u = n("./src/reddit/constants/modals.ts");
			const m = () => Promise.all([n.e(0), n.e(4), n.e("NftProductDetailsModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProductDetails/index.tsx")),
				f = Object(i.a)(m, {
					ssr: !1
				});
			Object(l.b)(u.a.ECON_NFT_PRODUCT_DETAILS, e => o.a.createElement(f, {
				onClose: e,
				onOverlayClick: e
			}));
			var _ = n("./src/reddit/hooks/usePreloadModal.ts"),
				p = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.m.less"),
				E = n.n(p);
			t.default = e => {
				let {
					className: t,
					imageUrl: n
				} = e;
				const r = Object(s.d)();
				Object(_.a)(m);
				const i = Object(c.c)(n);
				return i ? o.a.createElement("div", {
					className: t
				}, o.a.createElement(d.a, null, o.a.createElement(c.b, {
					imageUrl: n
				}), o.a.createElement(c.a, {
					className: E.a.detailsButton,
					onClick: () => {
						r(Object(a.h)(u.a.ECON_NFT_PRODUCT_DETAILS, {
							itemId: i
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
			const r = {},
				o = () => null;

			function s(e, t) {
				if (e in r) throw new Error(`Modal with id ${e} already registered!`);
				r[e] = t
			}

			function c(e) {
				return e && e in r ? r[e] : o
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js");

			function o(e) {
				Object(r.useEffect)(() => {
					e()
				}, [e])
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProfileUnit.c3642d36656d9a56e16e.js.map