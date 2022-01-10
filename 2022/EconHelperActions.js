// https://www.redditstatic.com/desktop2x/EconHelperActions.8afe21307ed61057921b.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconHelperActions"], {
		"./src/reddit/models/Badge/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "e", (function() {
				return a
			})), n.d(e, "f", (function() {
				return c
			})), n.d(e, "d", (function() {
				return h
			})), n.d(e, "c", (function() {
				return s
			})), n.d(e, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s, i, u = n("./src/config.ts");

			function a(t) {
				return "userId" in t
			}

			function c(t) {
				return !(!t.extra || !t.extra.membership) && !!t.extra.membership.included
			}

			function d(t, e, n) {
				const r = n.media[0],
					s = Object.keys(r);
				if (r["0x0"]) return r["0x0"];
				let i = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (s.forEach(n => {
						const s = r[n],
							[u, a] = n.split("x").map(t => parseInt(t));
						(u < i.width && u >= t || a < i.height && a >= e) && (i = {
							height: a,
							width: u,
							url: s
						})
					}), !i.url && s.length) {
					const t = Object.keys(r)[0],
						e = r[t],
						[n, s] = t.split("x").map(t => parseInt(t));
					i = {
						height: s,
						width: n,
						url: e
					}
				}
				return i.url
			}

			function o(t) {
				return t.startsWith("https") ? t : `${u.a.assetPath}/${t}`
			}

			function h(t, e, n) {
				const r = d(t, e, n),
					s = d(2 * t, 2 * e, n);
				return {
					url: o(r),
					url2x: o(s)
				}
			}! function(t) {
				t.First = "p1", t.Second = "p2"
			}(r || (r = {})),
			function(t) {
				t.ActivityTab = "activityTab", t.ChatTab = "chatTab", t.MessageTab = "messageTab", t.ChatHasNewMessages = "chatHasNewMessages", t.ChatUnreadMessages = "chatUnreadMessages"
			}(s || (s = {})),
			function(t) {
				t.Numbered = "NUMBERED", t.Filled = "FILLED"
			}(i || (i = {}))
		},
		"./src/reddit/models/Product/index.ts": function(t, e, n) {
			"use strict";
			var r;

			function s(t) {
				return t.substring(t.lastIndexOf("|") + 1)
			}
			n.d(e, "a", (function() {
					return r
				})), n.d(e, "b", (function() {
					return s
				})),
				function(t) {
					t.Badge = "badge", t.EmotesPack = "emotes_pack", t.Giphy = "giphy", t.Membership = "membership"
				}(r || (r = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconHelperActions.8afe21307ed61057921b.js.map