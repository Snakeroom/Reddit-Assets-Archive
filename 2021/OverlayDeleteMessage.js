// https://www.redditstatic.com/desktop2x/OverlayDeleteMessage.472845cc461a112cda74.js
// Retrieved at 10/19/2021, 5:20:10 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayDeleteMessage"], {
		"./src/chat/components/OverlayDeleteMessage/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2Yb29uEhP7-68Kfyyoi055",
				container: "_2Yb29uEhP7-68Kfyyoi055",
				Text: "_1uVJNk1TcTYh4J-adHysAR",
				text: "_1uVJNk1TcTYh4J-adHysAR",
				MessageItemBubble: "_2LnLeMXkarDt5N1fvf6WLN",
				messageItemBubble: "_2LnLeMXkarDt5N1fvf6WLN"
			}
		},
		"./src/chat/components/OverlayDeleteMessage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "OverlayDeleteMessage", (function() {
				return y
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				c = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/chat/actions/message/index.ts"),
				l = s("./src/lib/makeActionCreator/index.ts");
			const i = Object(l.a)("OVERLAY_CLOSE");
			var m = s("./src/chat/actions/tracking.ts"),
				d = s("./src/chat/components/Message/Bubble.tsx"),
				u = s("./src/chat/components/OverlayNav/index.tsx"),
				b = s("./src/chat/controls/Overlay/index.tsx"),
				h = s("./src/chat/controls/OverlayControlBar/index.tsx"),
				_ = s("./src/chat/helpers/chatSelector.ts"),
				g = s("./src/chat/selectors/app.ts"),
				x = s("./src/chat/selectors/messages.ts"),
				O = s("./src/chat/components/OverlayDeleteMessage/index.m.less"),
				C = s.n(O);
			const E = Object(_.a)({
					message: (e, t) => Object(x.b)(e, t.messageId),
					isChatEmbedded: g.c,
					isMessageFromCurrentUser: (e, t) => Object(x.g)(e, t.messageId)
				}),
				f = Object(r.b)(E, (e, t) => ({
					onConfirmationClick: () => ((e, t) => {
						e(Object(o.t)(t)), e(Object(m.E)())
					})(e, t.messageId),
					onCancel: () => e(i())
				}));
			class y extends n.Component {
				render() {
					const {
						channelId: e,
						message: t,
						onConfirmationClick: s,
						isChatEmbedded: n,
						isMessageFromCurrentUser: r
					} = this.props;
					return c.a.createElement(b.a, null, c.a.createElement(u.a, {
						channelId: e,
						title: a.fbt._("Delete this message?", null, {
							hk: "1nsbno"
						})
					}), c.a.createElement("div", {
						className: C.a.Container
					}, c.a.createElement("p", {
						className: C.a.Text
					}, a.fbt._("It will be removed for everyone in this chat.", null, {
						hk: "4cJces"
					}), c.a.createElement("br", null), a.fbt._("You can't undo this.", null, {
						hk: "4ockoK"
					})), t && c.a.createElement(d.a, {
						className: C.a.MessageItemBubble,
						message: t,
						fromCurrentUser: r,
						withButton: !1,
						isChatEmbedded: n
					})), c.a.createElement(h.a, {
						primaryButtonText: a.fbt._("Yes, Delete.", null, {
							hk: "oCERQ"
						}),
						primaryButtonAction: () => s()
					}))
				}
			}
			t.default = f(y)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayDeleteMessage.472845cc461a112cda74.js.map