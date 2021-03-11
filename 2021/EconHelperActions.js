// https://www.redditstatic.com/desktop2x/EconHelperActions.9109b98453ee3441468d.js
// Retrieved at 3/11/2021, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconHelperActions"], {
		"./src/reddit/helpers/richTextJson/index.ts": function(t, n, e) {
			"use strict";
			e.d(n, "b", (function() {
				return u
			})), e.d(n, "f", (function() {
				return o
			})), e.d(n, "a", (function() {
				return c
			})), e.d(n, "e", (function() {
				return d
			})), e.d(n, "c", (function() {
				return f
			})), e.d(n, "d", (function() {
				return h
			}));
			e("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = e("./src/reddit/models/RichTextJson/index.ts");
			const i = "giphy|",
				s = "|downsized";

			function u(t, n) {
				return i + t + (n ? s : "")
			}

			function o(t) {
				return t && 0 === t.indexOf(i)
			}

			function c(t) {
				const n = t && t.media && t.media.mediaMetadata;
				return !!n && Object.keys(n).some(o)
			}

			function d(t) {
				let n = t.substring(i.length);
				return n.indexOf("|") && (n = n.split("|")[0]), `https://giphy.com/gifs/${n}`
			}

			function a(t, n) {
				return (Array.isArray(t) ? t : t.c && Array.isArray(t.c) ? t.c : []).reduce((t, e) => [...t, ...a(e, n)], !Array.isArray(t) && n(t) ? [t] : [])
			}

			function f(t) {
				return a(t, r.F).map(t => t.id)
			}

			function h(t) {
				return a(t, t => t.e === r.o).map(t => t.u)
			}
		},
		"./src/reddit/models/Badge/index.ts": function(t, n, e) {
			"use strict";
			e.d(n, "a", (function() {
				return r
			})), e.d(n, "e", (function() {
				return o
			})), e.d(n, "f", (function() {
				return c
			})), e.d(n, "d", (function() {
				return f
			})), e.d(n, "c", (function() {
				return i
			})), e.d(n, "b", (function() {
				return s
			}));
			e("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, i, s, u = e("./src/config.ts");

			function o(t) {
				return "userId" in t
			}

			function c(t) {
				return !(!t.extra || !t.extra.membership) && !!t.extra.membership.included
			}

			function d(t, n, e) {
				const r = e.media[0],
					i = Object.keys(r);
				if (r["0x0"]) return r["0x0"];
				let s = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (i.forEach(e => {
						const i = r[e],
							[u, o] = e.split("x").map(t => parseInt(t));
						(u < s.width && u >= t || o < s.height && o >= n) && (s = {
							height: o,
							width: u,
							url: i
						})
					}), !s.url && i.length) {
					const t = Object.keys(r)[0],
						n = r[t],
						[e, i] = t.split("x").map(t => parseInt(t));
					s = {
						height: i,
						width: e,
						url: n
					}
				}
				return s.url
			}

			function a(t) {
				return t.startsWith("https") ? t : `${u.a.assetPath}/${t}`
			}

			function f(t, n, e) {
				const r = d(t, n, e),
					i = d(2 * t, 2 * n, e);
				return {
					url: a(r),
					url2x: a(i)
				}
			}! function(t) {
				t.First = "p1", t.Second = "p2"
			}(r || (r = {})),
			function(t) {
				t.ActivityTab = "activityTab", t.ChatTab = "chatTab", t.DirectMessages = "directMessages", t.MessageTab = "messageTab", t.ChatRooms = "chatRooms", t.ChatRoomMentions = "chatRoomMentions"
			}(i || (i = {})),
			function(t) {
				t.Numbered = "NUMBERED", t.Filled = "FILLED"
			}(s || (s = {}))
		},
		"./src/reddit/models/Product/index.ts": function(t, n, e) {
			"use strict";
			var r;

			function i(t) {
				return t.substring(t.lastIndexOf("|") + 1)
			}
			e.d(n, "a", (function() {
					return r
				})), e.d(n, "b", (function() {
					return i
				})),
				function(t) {
					t.Badge = "badge", t.EmotesPack = "emotes_pack", t.Giphy = "giphy", t.Membership = "membership"
				}(r || (r = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconHelperActions.9109b98453ee3441468d.js.map