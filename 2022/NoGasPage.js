// https://www.redditstatic.com/desktop2x/NoGasPage.0dfa543440d32e1391e3.js
// Retrieved at 11/16/2022, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NoGasPage"], {
		"./src/reddit/pages/meta/NoGasPage/index.m.less": function(e, a, t) {
			e.exports = {
				container: "_3sQa8JPNk0WLAkEOg05WBI",
				content: "_1UKhP4S9heya9byU4kho-T",
				subtitle: "_3pcdLfUErJzqrJDYykNgxl",
				header: "_3hV3fJGkToKC3muN4WTxfc",
				description: "_3xltyBnh5NaaKv0h5VWZq8",
				iconWrapper: "tHTvvj0op22PqNUc5z2mF",
				circle: "_3B0QRLRhtGOi9YMWogmeaf",
				bridgeLogo: "_xWgZIHH7Z8Mrryz_Ye_j"
			}
		},
		"./src/reddit/pages/meta/NoGasPage/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var s = t("./src/config.ts"),
				n = t("./node_modules/fbt/lib/FbtPublic.js"),
				r = t("./node_modules/react/index.js"),
				i = t.n(r),
				c = t("./src/reddit/pages/meta/NoGasPage/index.m.less"),
				o = t.n(c);
			a.default = () => i.a.createElement("div", {
				className: o.a.container
			}, i.a.createElement("div", {
				className: o.a.content
			}, i.a.createElement("h2", {
				className: o.a.subtitle
			}, n.fbt._("Network Fees", null, {
				hk: "3hGHBU"
			})), i.a.createElement("h1", {
				className: o.a.header
			}, n.fbt._("Purchasing unsupported", null, {
				hk: "3Sjz1j"
			})), i.a.createElement("h3", {
				className: o.a.description
			}, n.fbt._("Reddit does not currently support purchasing of network fees on our platform.", null, {
				hk: "29XwUq"
			})), i.a.createElement("div", {
				className: o.a.iconWrapper
			}, i.a.createElement("div", {
				className: o.a.circle
			}, i.a.createElement("img", {
				alt: n.fbt._("Community Points Bridge", null, {
					hk: "1vd0MS"
				}),
				className: o.a.bridgeLogo,
				src: `${s.a.assetPath}/img/communityPoints/migration_bridge.png`
			})))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NoGasPage.0dfa543440d32e1391e3.js.map