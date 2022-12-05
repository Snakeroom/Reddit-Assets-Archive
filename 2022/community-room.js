// https://www.redditstatic.com/desktop2x/community-room.36f343ee3c1ddd35f857.js
// Retrieved at 12/5/2022, 1:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["community-room"], {
		"./src/reddit/components/CommunityChat/CommunityRoom.tsx": function(o, e, t) {
			"use strict";
			t.r(e);
			var m = t("./node_modules/react/index.js"),
				n = t.n(m),
				s = (t("./node_modules/@reddit/chat/dist/browser-matrix.js"), t("./node_modules/@reddit/chat/dist/index.js"), t("./src/reddit/components/CommunityChat/index.m.less")),
				d = t.n(s);
			e.default = n.a.memo((function(o) {
				let {
					roomId: e,
					accessToken: t
				} = o;
				return n.a.createElement("rs-community-room", {
					class: d.a.communityRoom,
					roomId: e,
					accessToken: t
				})
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/community-room.36f343ee3c1ddd35f857.js.map