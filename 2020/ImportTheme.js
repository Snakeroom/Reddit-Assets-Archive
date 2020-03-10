// https://www.redditstatic.com/desktop2x/ImportTheme.a28c9f2ef30e23834ca8.js
// Retrieved at 3/10/2020, 5:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ImportTheme", "xml2js"], {
		"./src/reddit/helpers/importTheme/index.ts": function(e, s, n) {
			"use strict";
			n.r(s);
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var t = n("./node_modules/jszip/lib/index.js"),
				i = n.n(t);
			s.default = async e => {
				const s = new i.a,
					n = await s.loadAsync(e),
					t = {},
					o = {};
				let r, l = !0;
				for (const i in n.files)
					if (i.includes(".json")) {
						const e = await s.file(i).async("string");
						try {
							const s = JSON.parse(e);
							for (const e in s) t[e] = s[e]
						} catch (a) {
							l = !1, r = a
						}
					} else {
						const e = await s.file(i).async("Blob");
						o[i.split(".")[0]] = e
					} return {
					attributes: t,
					images: o,
					ok: l,
					error: r
				}
			}
		},
		"ignored /drone/src/node_modules/readable-stream/lib util": function(e, s) {},
		"ignored /drone/src/node_modules/readable-stream/lib/internal/streams util": function(e, s) {}
	}
]);
//# sourceMappingURL=ImportTheme.a28c9f2ef30e23834ca8.js.map