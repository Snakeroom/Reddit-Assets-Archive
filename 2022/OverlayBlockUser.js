// https://www.redditstatic.com/desktop2x/OverlayBlockUser.ae321addad566d2433ad.js
// Retrieved at 10/18/2022, 1:10:05 PM by Reddit Dataminer v1.0.0
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
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/chat/actions/tracking.ts"),
				l = n("./src/chat/actions/user.ts"),
				d = n("./src/chat/components/OverlayNav/index.tsx"),
				i = n("./src/chat/controls/Overlay/index.tsx"),
				u = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				m = n("./src/chat/helpers/chatSelector.ts"),
				h = n("./src/chat/components/OverlayBlockUser/index.m.less"),
				_ = n.n(h);
			const k = Object(m.a)({
					blockedUser: (e, t) => e.contacts.models[t.blockedUserId]
				}),
				b = Object(a.b)(k, e => ({
					onChannelBlock: t => {
						e(l.m(t)), e(c.Z(t))
					}
				}))(e => {
					const {
						blockedUser: t,
						blockedUserId: n,
						onChannelBlock: o
					} = e, a = t ? t.name : s.fbt._("user", null, {
						hk: "3ddTpU"
					});
					return r.a.createElement(i.a, null, r.a.createElement(d.a, {
						channelId: e.channelId,
						title: s.fbt._("Block {username}", [s.fbt._param("username", a)], {
							hk: "2aTkTS"
						})
					}), r.a.createElement("div", {
						className: _.a.Container
					}, r.a.createElement("p", {
						className: _.a.Text
					}, s.fbt._("Are you sure you want to block this user?", null, {
						hk: "31Tn9j"
					}))), r.a.createElement(u.a, {
						primaryButtonText: s.fbt._("Block", null, {
							hk: "8i5gq"
						}),
						primaryButtonAction: () => o(n)
					}, r.a.createElement("p", null, s.fbt._("You will no longer see their comments, posts, and messages. They will not know that you've blocked them. You will no longer get notifications from this user", null, {
						hk: "4xn1p1"
					}))))
				});
			t.default = b
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayBlockUser.ae321addad566d2433ad.js.map