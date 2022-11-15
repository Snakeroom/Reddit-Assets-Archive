// https://www.redditstatic.com/desktop2x/NoGasPage.138e212898d06de2f2df.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
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
			var n = t("./src/config.ts"),
				s = t("./node_modules/fbt/lib/FbtPublic.js"),
				i = t("./node_modules/react/index.js"),
				r = t.n(i),
				c = t("./src/reddit/pages/meta/NoGasPage/index.m.less"),
				l = t.n(c);
			a.default = () => r.a.createElement("div", {
				className: l.a.container
			}, r.a.createElement("div", {
				className: l.a.content
			}, r.a.createElement("h2", {
				className: l.a.subtitle
			}, s.fbt._("Network Fees", null, {
				hk: "3hGHBU"
			})), r.a.createElement("h1", {
				className: l.a.header
			}, s.fbt._("Insufficient Gas", null, {
				hk: "2kRtFM"
			})), r.a.createElement("h3", {
				className: l.a.description
			}, s.fbt._("You do not have enough gas funds to continue. Gas funds are required to pay blockchain network fees.", null, {
				hk: "1I7cZw"
			}), r.a.createElement("br", null), r.a.createElement("br", null), s.fbt._("Managing gas is not available in the app", null, {
				hk: "3e0T8s"
			})), r.a.createElement("div", {
				className: l.a.iconWrapper
			}, r.a.createElement("div", {
				className: l.a.circle
			}, r.a.createElement("img", {
				alt: s.fbt._("Community Points Bridge", null, {
					hk: "1vd0MS"
				}),
				className: l.a.bridgeLogo,
				src: `${n.a.assetPath}/img/communityPoints/migration_bridge.png`
			})))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NoGasPage.138e212898d06de2f2df.js.map