// https://www.redditstatic.com/desktop2x/ImportTheme.ffa092f19a1ee16c7439.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ImportTheme"], {
		"./src/reddit/helpers/importTheme/index.ts": function(s, e, t) {
			"use strict";
			t.r(e);
			var n = t("./node_modules/jszip/lib/index.js"),
				i = t.n(n);
			e.default = async s => {
				const e = new i.a,
					t = await e.loadAsync(s),
					n = {},
					o = {};
				let r, a = !0;
				for (const i in t.files)
					if (i.includes(".json")) {
						const s = await e.file(i).async("string");
						try {
							const e = JSON.parse(s);
							for (const s in e) n[s] = e[s]
						} catch (c) {
							a = !1, r = c
						}
					} else {
						const s = await e.file(i).async("Blob");
						o[i.split(".")[0]] = s
					} return {
					attributes: n,
					images: o,
					ok: a,
					error: r
				}
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ImportTheme.ffa092f19a1ee16c7439.js.map