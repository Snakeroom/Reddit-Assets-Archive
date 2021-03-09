// https://www.redditstatic.com/desktop2x/EconHelperActions.3ad1ce4c31bffd2a62fe.js
// Retrieved at 3/9/2021, 6:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconHelperActions"], {
		"./src/reddit/helpers/richTextJson/index.ts": function(n, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return c
			})), r.d(e, "f", (function() {
				return o
			})), r.d(e, "a", (function() {
				return s
			})), r.d(e, "e", (function() {
				return d
			})), r.d(e, "c", (function() {
				return f
			})), r.d(e, "d", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var t = r("./src/reddit/models/RichTextJson/index.ts");
			const i = "giphy|",
				u = "|downsized";

			function c(n, e) {
				return i + n + (e ? u : "")
			}

			function o(n) {
				return n && 0 === n.indexOf(i)
			}

			function s(n) {
				const e = n && n.media && n.media.mediaMetadata;
				return !!e && Object.keys(e).some(o)
			}

			function d(n) {
				let e = n.substring(i.length);
				return e.indexOf("|") && (e = e.split("|")[0]), `https://giphy.com/gifs/${e}`
			}

			function a(n, e) {
				return (Array.isArray(n) ? n : n.c && Array.isArray(n.c) ? n.c : []).reduce((n, r) => [...n, ...a(r, e)], !Array.isArray(n) && e(n) ? [n] : [])
			}

			function f(n) {
				return a(n, t.F).map(n => n.id)
			}

			function m(n) {
				return a(n, n => n.e === t.o).map(n => n.u)
			}
		},
		"./src/reddit/models/Product/index.ts": function(n, e, r) {
			"use strict";
			var t;

			function i(n) {
				return n.substring(n.lastIndexOf("|") + 1)
			}
			r.d(e, "a", (function() {
					return t
				})), r.d(e, "b", (function() {
					return i
				})),
				function(n) {
					n.Badge = "badge", n.EmotesPack = "emotes_pack", n.Giphy = "giphy", n.Membership = "membership"
				}(t || (t = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconHelperActions.3ad1ce4c31bffd2a62fe.js.map