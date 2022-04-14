// https://www.redditstatic.com/desktop2x/NftProfileUnit.a9d05bfd17d036d23196.js
// Retrieved at 4/14/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
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
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				i = n("./src/config.ts");
			const l = e => {
				let {
					children: t
				} = e;
				const n = function() {
					const e = Object(a.e)(m),
						t = Object(a.e)(d.db),
						n = Object(c.a)();
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
							sendEvent: () => n,
							stripe: {
								apiKey: ""
							}
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
				a = n("./node_modules/@reddit/crypto/react/nft-treatment/index.es.js"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/Crypto/CryptoComponentsConfigProvider.tsx"),
				i = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				u = n("./src/reddit/constants/modals.ts");
			const m = () => Promise.all([n.e(0), n.e(1), n.e(3), n.e("NftProductDetailsModal")]).then(n.bind(null, "./src/reddit/components/Econ/Marketplace/NftProductDetails/index.tsx")),
				f = Object(i.a)(m, {
					ssr: !1
				});
			Object(l.b)(u.a.ECON_NFT_PRODUCT_DETAILS, e => o.a.createElement(f, {
				onClose: e,
				onOverlayClick: e
			}));
			var p = n("./src/reddit/hooks/usePreloadModal.ts"),
				_ = n("./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.m.less"),
				E = n.n(_);
			t.default = e => {
				let {
					className: t,
					imageUrl: n
				} = e;
				const r = Object(s.d)();
				Object(p.a)(m);
				const i = Object(a.c)(n);
				return i ? o.a.createElement("div", {
					className: t
				}, o.a.createElement(d.a, null, o.a.createElement(a.b, {
					imageUrl: n
				}), o.a.createElement(a.a, {
					className: E.a.detailsButton,
					onClick: () => {
						r(Object(c.h)(u.a.ECON_NFT_PRODUCT_DETAILS, {
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
				return a
			}));
			const r = {},
				o = () => null;

			function s(e, t) {
				if (e in r) throw new Error(`Modal with id ${e} already registered!`);
				r[e] = t
			}

			function a(e) {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NftProfileUnit.a9d05bfd17d036d23196.js.map