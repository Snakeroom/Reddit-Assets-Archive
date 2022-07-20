// https://www.redditstatic.com/desktop2x/NoGasPage.3794d73d0eb01242d1fa.js
// Retrieved at 7/20/2022, 6:50:04 PM by Reddit Dataminer v1.0.0
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
				i = t("./node_modules/react/index.js"),
				r = t.n(i),
				o = t("./src/reddit/pages/meta/NoGasPage/index.m.less"),
				c = t.n(o);
			a.default = () => r.a.createElement("div", {
				className: c.a.container
			}, r.a.createElement("div", {
				className: c.a.content
			}, r.a.createElement("h2", {
				className: c.a.subtitle
			}, n.fbt._("Gas Funds", null, {
				hk: "1uPnyy"
			})), r.a.createElement("h1", {
				className: c.a.header
			}, n.fbt._("Looking to manage gas?", null, {
				hk: "2pG6rW"
			})), r.a.createElement("h3", {
				className: c.a.description
			}, n.fbt._("Gas funds are required to continue. Please go to the subreddit on the desktop website to manage your gas funds.", null, {
				hk: "4vX6dP"
			})), r.a.createElement("div", {
				className: c.a.iconWrapper
			}, r.a.createElement("div", {
				className: c.a.circle
			}, r.a.createElement("img", {
				alt: n.fbt._("Community Points Bridge", null, {
					hk: "1vd0MS"
				}),
				className: c.a.bridgeLogo,
				src: `${s.a.assetPath}/img/communityPoints/migration_bridge.png`
			})))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NoGasPage.3794d73d0eb01242d1fa.js.map