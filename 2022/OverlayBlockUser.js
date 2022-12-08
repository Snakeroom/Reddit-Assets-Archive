// https://www.redditstatic.com/desktop2x/OverlayBlockUser.e897f9f910e35cf34254.js
// Retrieved at 12/8/2022, 10:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayBlockUser"], {
		"./src/chat/components/OverlayBlockUser/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1krdNYK7ugIMXB3ZghbFue",
				container: "_1krdNYK7ugIMXB3ZghbFue",
				Text: "_2d8sdMroAZbA6U92LFXNXQ",
				text: "_2d8sdMroAZbA6U92LFXNXQ"
			}
		},
		"./src/chat/components/OverlayBlockUser/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/chat/actions/tracking.ts"),
				l = n("./src/chat/actions/user.ts"),
				d = n("./src/chat/components/OverlayNav/index.tsx"),
				i = n("./src/chat/controls/Overlay/index.tsx"),
				u = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				m = n("./src/chat/helpers/chatSelector.ts"),
				h = n("./src/chat/components/OverlayBlockUser/index.m.less"),
				_ = n.n(h);
			const b = Object(m.a)({
					blockedUser: (e, t) => e.contacts.models[t.blockedUserId]
				}),
				k = Object(r.b)(b, e => ({
					onChannelBlock: t => {
						e(l.m(t)), e(c.ab(t))
					}
				}))(e => {
					const {
						blockedUser: t,
						blockedUserId: n,
						onChannelBlock: o
					} = e, r = t ? t.name : s.fbt._("user", null, {
						hk: "3ddTpU"
					});
					return a.a.createElement(i.a, null, a.a.createElement(d.a, {
						channelId: e.channelId,
						title: s.fbt._("Block {username}", [s.fbt._param("username", r)], {
							hk: "2aTkTS"
						})
					}), a.a.createElement("div", {
						className: _.a.Container
					}, a.a.createElement("p", {
						className: _.a.Text
					}, s.fbt._("Are you sure you want to block this user?", null, {
						hk: "31Tn9j"
					}))), a.a.createElement(u.a, {
						primaryButtonText: s.fbt._("Block", null, {
							hk: "8i5gq"
						}),
						primaryButtonAction: () => o(n)
					}, a.a.createElement("p", null, s.fbt._("You will no longer see their comments, posts, and messages. They will not know that you've blocked them. You will no longer get notifications from this user", null, {
						hk: "4xn1p1"
					}))))
				});
			t.default = k
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayBlockUser.e897f9f910e35cf34254.js.map