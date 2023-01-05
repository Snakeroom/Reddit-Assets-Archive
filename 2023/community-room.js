// https://www.redditstatic.com/desktop2x/community-room.83ef26933579bda44fea.js
// Retrieved at 1/5/2023, 12:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["community-room"], {
		"./src/reddit/components/CommunityChat/CommunityRoom.tsx": function(o, e, n) {
			"use strict";
			n.r(e);
			var m = n("./node_modules/react/index.js"),
				s = n.n(m),
				t = (n("./node_modules/matrix-js-sdk/lib/browser-index.js"), n("./node_modules/@reddit/chat/dist/index.js"), n("./src/reddit/components/CommunityChat/index.m.less")),
				d = n.n(t);
			e.default = s.a.memo((function(o) {
				let {
					roomId: e,
					accessToken: n
				} = o;
				return s.a.createElement("rs-community-room", {
					class: d.a.communityRoom,
					roomId: e,
					accessToken: n
				})
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/community-room.83ef26933579bda44fea.js.map